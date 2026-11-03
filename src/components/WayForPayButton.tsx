"use client";

import Script from "next/script";
import { useState } from "react";

declare global {
  interface Window {
    Wayforpay?: new () => { invoice: (url: string) => void };
  }
}

const WIDGET_SRC = "https://secure.wayforpay.com/server/pay-widget.js?ref=button";
const DEFAULT_INVOICE_URL = "https://secure.wayforpay.com/button/bbff26269bb07";

type Props = {
  invoiceUrl?: string;
  label?: string;
};

export default function WayForPayButton({
  invoiceUrl = DEFAULT_INVOICE_URL,
  label = "Checkout",
}: Props) {
  const [ready, setReady] = useState(false);

  const handleClick = () => {
    if (!window.Wayforpay) return;
    const wayforpay = new window.Wayforpay();
    wayforpay.invoice(invoiceUrl);
  };

  return (
    <>
      <Script
        id="widget-wfp-script"
        src={WIDGET_SRC}
        strategy="afterInteractive"
        onReady={() => setReady(true)}
      />
      <button
        type="button"
        onClick={handleClick}
        disabled={!ready}
        className="inline-block h-[54px] w-64 rounded-[14px] border-none p-4 text-left shadow-[3px_2px_8px_rgba(71,66,66,0.22)] transition-opacity hover:opacity-80 disabled:cursor-wait disabled:opacity-60"
        style={{
          background:
            "#2B3160 url('https://wfpstorage.s3.eu-west-1.amazonaws.com/button/bg6x2.png') no-repeat center right",
          backgroundSize: "cover",
        }}
      >
        <span className="align-middle font-[Verdana,Arial,sans-serif] text-sm leading-[18px] font-bold text-white">
          {label}
        </span>
      </button>
    </>
  );
}
