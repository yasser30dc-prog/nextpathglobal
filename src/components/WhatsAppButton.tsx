"use client";

import dynamic from "next/dynamic";

// Lazy-load the WhatsApp button — it's below-the-fold and non-critical.
// This prevents its framer-motion animations from contributing to TBT on mobile.
const WhatsAppButtonInner = dynamic(() => import("./WhatsAppButtonInner"), {
  ssr: false,
  loading: () => null,
});

export default function WhatsAppButton() {
  return <WhatsAppButtonInner />;
}
