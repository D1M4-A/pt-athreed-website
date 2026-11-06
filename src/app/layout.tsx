import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT Athreed | Odoo ERP Implementation & Business Technology",
  description:
    "PT Athreed helps companies transform their operations through Odoo ERP implementation, system integration, customization, and business process consulting.",
  keywords: [
    "Odoo Indonesia",
    "Odoo Implementation Indonesia",
    "Odoo Consultant Indonesia",
    "ERP Indonesia",
    "ERP Implementation",
    "Odoo Customization",
    "Odoo Integration",
    "Business Process Digitalization",
  ],
  openGraph: {
    title: "PT Athreed | Technology That Fits Your Business",
    description:
      "Connected ERP and business technology, thoughtfully designed around how your company works.",
    type: "website",
    locale: "en_ID",
    siteName: "PT Athreed",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
