// import React from "react";
// // import { useRouter } from "next/router";
// import Button from "@/app/components/Button";

// const pricingPlans = [
//   {
//     name: "Starter",
//     price: 5,
//     totalCredits: 20,
//     id: "pdt_YycnrGgmcWH8kJZzmMDUZ",
//   },
//   {
//     name: "Pro",
//     price: 10,
//     totalCredits: 42,
//     id: "pdt_RTbvBgpuKeKD71fIdmRvw",
//   },
//   {
//     name: "Power",
//     price: 20,
//     totalCredits: 90,
//     id: "pdt_mAL8Tdam5yeCOH6kwz8tI",
//   },
// ];

// export default function BuyCreditsPage() {
//   // const router = useRouter();

//   const checkoutProduct = async (
//     productId: string,
//     useDynamicPaymentLinks: boolean = true
//   ) => {
//     if (useDynamicPaymentLinks) {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout?productId=${productId}`,
//         {
//           cache: "no-store",
//         }
//       );
//       const data = await response.json();
//       router.push(data.payment_link);
//     } else {
//       let checkoutUrl = `https://test.checkout.dodopayments.com/buy/${productId}?quantity=1&redirect_url=${process.env.NEXT_PUBLIC_BASE_URL}`;
//       router.push(checkoutUrl);
//     }
//   };

//   return (
//     <div className="mx-auto flex flex-col items-center justify-center my-20">
//       <div className="text-center">
//         <h1 className="text-6xl font-bold text-white mb-2">Buy Credits</h1>
//         <p className="text-zinc-300 mb-6">
//           Choose a credit package that fits your needs. Get bonus credits on
//           higher plans!
//         </p>
//       </div>
//       <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-stretch mt-12">
//         {pricingPlans.map((plan) => (
//           <div
//             key={plan.name}
//             className="flex-1 bg-zinc-900/80 rounded-3xl p-8 flex flex-col items-center shadow-2xl border border-zinc-800 min-w-[260px] max-w-xs mx-auto"
//           >
//             <h3 className="text-2xl font-semibold text-white mb-2 tracking-wide">
//               {plan.name}
//             </h3>
//             <div className="flex flex-col items-center mb-6">
//               <span className="text-6xl font-extrabold text-white mb-2 drop-shadow-lg">
//                 {plan.totalCredits}
//               </span>
//               <span className="uppercase text-zinc-400 tracking-widest text-lg mb-2">
//                 credits
//               </span>
//               <span className="text-zinc-500 text-base font-bold mb-2">
//                 ${plan.price}
//               </span>
//             </div>
//             <ul className="mb-8 space-y-2 w-full">
//               <li className="flex items-center gap-2 text-green-400">
//                 <span>✔</span>
//                 <span className="text-zinc-300">No subscription required</span>
//               </li>
//               <li className="flex items-center gap-2 text-green-400">
//                 <span>✔</span>
//                 <span className="text-zinc-300">Pay as you go</span>
//               </li>
//             </ul>
//             <Button
//               onClick={() => {
//                 checkoutProduct(plan.id, true);
//               }}
//             >
//               Buy Now
//             </Button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
