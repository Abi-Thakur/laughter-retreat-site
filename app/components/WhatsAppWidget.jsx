

"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsAppWidget() {
  return (
    <FloatingWhatsApp
      phoneNumber="916230879866"
      accountName="Laughter Love Live"
      chatMessage="Hi! How can we help you?"
      statusMessage="Typically replies instantly"
      placeholder="Type a message..."
      darkMode={false}
      avatar="/favicon.png"
    />
  );
}