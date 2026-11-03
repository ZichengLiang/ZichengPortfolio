import type { Metadata } from "next";
import WayForPayButton from "@/components/WayForPayButton";

export const metadata: Metadata = {
  title: "Payment",
};

export default function PaymentPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-2xl font-semibold">Payment</h1>
      <WayForPayButton />
    </main>
  );
}
