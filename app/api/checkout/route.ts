import dodoClient from "@/lib/dodo";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("-------BODY START ---------");
  console.log(body);
  console.log("-------BODY END ---------");

  const { customerId, email, name, productId, billing } = body;

  try {
    const productWithQuantity = {
      product_id: productId as string,
      quantity: 1,
    };

    if (customerId) {
      const response = await dodoClient.payments.create({
        // GET BILLING, CUSTOMER INFO FROM CUSTOMER AND PASS IT.
        // FOR COUNTRY CODE THE VALUE SHOULD BE - ISO country code alpha2 variant
        billing,
        customer: {
          customer_id: customerId,
          email,
          name,
        },
        payment_link: true,
        product_cart: [productWithQuantity],
        return_url: process.env.NEXT_PUBLIC_BASE_URL,
      });
      return NextResponse.json(response);
    }

    const response = await dodoClient.payments.create({
      // GET BILLING, CUSTOMER INFO FROM CUSTOMER AND PASS IT.
      // FOR COUNTRY CODE THE VALUE SHOULD BE - ISO country code alpha2 variant
      billing,
      customer: {
        email,
        name,
      },
      payment_link: true,
      product_cart: [productWithQuantity],
      return_url: process.env.NEXT_PUBLIC_BASE_URL,
    });
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
