import { Webhook } from "standardwebhooks";
import { headers } from "next/headers";
import dodoClient from "@/lib/dodo";
import { prisma } from "@/lib/prisma";

const webhook = new Webhook(process.env.DODO_PAYMENTS_WEBHOOK_KEY!);

const pricingPlans = [
  {
    name: "Starter",
    totalCredits: 20,
    id: "pdt_WxhTITUTa7gLcEv2gOkc1",
  },
  {
    name: "Pro",
    totalCredits: 42,
    id: "pdt_ifCPWINqz0uIbPi37pFYT",
  },
  {
    name: "Power",
    totalCredits: 90,
    id: "pdt_9tfdVBGgBRz5XTl1xBeKB",
  },
];

export async function POST(request: Request) {
  const headersList = await headers();

  try {
    const rawBody = await request.text();
    const webhookHeaders = {
      "webhook-id": headersList.get("webhook-id") || "",
      "webhook-signature": headersList.get("webhook-signature") || "",
      "webhook-timestamp": headersList.get("webhook-timestamp") || "",
    };
    await webhook.verify(rawBody, webhookHeaders);
    const payload = JSON.parse(rawBody);

    console.log("-------PAYLOAD START ---------");
    console.log(payload);
    console.log("-------PAYLOAD END ---------");

    if (payload.data.payload_type === "Subscription") {
      switch (payload.type) {
        case "subscription.active":
          const subscription = await dodoClient.subscriptions.retrieve(
            payload.data.subscription_id
          );
          console.log("-------SUBSCRIPTION DATA START ---------");
          console.log(subscription);
          console.log("-------SUBSCRIPTION DATA END ---------");
          break;
        case "subscription.failed":
          break;
        case "subscription.cancelled":
          break;
        case "subscription.renewed":
          break;
        case "subscription.on_hold":
          break;
        default:
          break;
      }
    } else if (payload.data.payload_type === "Payment") {
      switch (payload.type) {
        case "payment.succeeded":
          const paymentDataResp = await dodoClient.payments.retrieve(
            payload.data.payment_id
          );
          console.log("-------PAYMENT DATA START ---------");
          console.log(paymentDataResp);
          console.log("-------PAYMENT DATA END ---------");
          const user = await prisma.user.findUnique({
            where: {
              email: paymentDataResp.customer.email,
            },
          });
          if (user) {
            let creditsToAdd = 0;

            if (paymentDataResp.product_cart) {
              if (
                paymentDataResp.product_cart[0].product_id ===
                pricingPlans[0].id
              ) {
                creditsToAdd = pricingPlans[0].totalCredits;
              } else if (
                paymentDataResp.product_cart[0].product_id ===
                pricingPlans[1].id
              ) {
                creditsToAdd = pricingPlans[1].totalCredits;
              } else if (
                paymentDataResp.product_cart[0].product_id ===
                pricingPlans[2].id
              ) {
                creditsToAdd = pricingPlans[2].totalCredits;
              }
            }

            await prisma.user.update({
              where: { email: paymentDataResp.customer.email },
              data: {
                dodoCustomerId: paymentDataResp.customer.customer_id,
                credits: user.credits + creditsToAdd,
              },
            });
          } else {
            console.log(
              "User not found for email: ",
              paymentDataResp.customer.email,
              "During payment.succeeded webhook"
            );
          }
          break;
        default:
          break;
      }
    }
    return Response.json(
      { message: "Webhook processed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(" ----- webhoook verification failed -----");
    console.log(error);
    return Response.json(
      { message: "Webhook processed successfully" },
      { status: 200 }
    );
  }
}
