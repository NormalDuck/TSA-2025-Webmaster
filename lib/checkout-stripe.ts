// app/actions/stripe.ts
"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function createCheckoutRedirect() {
  let session;

  try {
    session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID from your Stripe Dashboard
          price: "price_1TCZtsPfrJiRgO05bKuv6p2u",
          quantity: 1,

        },
      ],
      mode: "payment", // Use 'subscription' for recurring plans
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cart`,
    });
  } catch (error) {
    console.error("Stripe Error:", error);
    throw new Error("Failed to create checkout session");
  }

  // Redirect the user to the Stripe-hosted URL
  redirect(session.url!);
}
