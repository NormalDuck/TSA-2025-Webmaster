// app/checkout/page.tsx

import { createCheckoutRedirect } from "@/lib/checkout-stripe";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Ready to purchase?</h1>

      <form action={createCheckoutRedirect}>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Checkout via Stripe
        </button>
      </form>
    </div>
  );
}
