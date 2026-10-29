
import type { Metadata } from "next";
import BackToTop from "@/components/back-to-top";
import "./globals.css";
import "./cars-routes.css";

export const metadata: Metadata = {
  title: "CARS | City Auto Rentals & Services",
  description:
    "Flexible vehicle rental and leasing solutions for businesses, residents, and visitors across Qatar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
