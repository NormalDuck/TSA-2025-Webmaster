// app/actions/stripe.ts
"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function createCheckoutRedirectProduct(id: string) {
  let session;

  try {
    session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID from your Stripe Dashboard
          price: id,
          quantity: 1,

        },
      ],
      mode: "payment", // Use 'subscription' for recurring plans
      success_url: `${process.env.NEXT_PUBLIC_URL}/donate`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/donate`,
    });
  } catch (error) {
    console.error("Stripe Error:", error);
    throw new Error("Failed to create checkout session");
  }

  // Redirect the user to the Stripe-hosted URL
  redirect(session.url!);
}

export async function createCheckoutRedirectSubscription(id: string) {
  let session;

  try {
    session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID from your Stripe Dashboard
          price: id,
          quantity: 1,

        },
      ],
      mode: "subscription", // Use 'subscription' for recurring plans
      success_url: `${process.env.NEXT_PUBLIC_URL}/donate`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/donate`,
    });
  } catch (error) {
    console.error("Stripe Error:", error);
    throw new Error("Failed to create checkout session");
  }

  // Redirect the user to the Stripe-hosted URL
  redirect(session.url!);
}
