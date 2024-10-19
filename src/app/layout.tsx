// import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React from "react";
import type { Metadata } from "next";
import Loader from "@/components/common/Loader";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ECommerce from "@/components/Dashboard/E-commerce";

export const metadata: Metadata = {
  title: "GameStore Ecommerce",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ]
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <DefaultLayout>
            {children}
        </DefaultLayout>
      </body>
    </html>
  );
}

  // <DefaultLayout>{children}</DefaultLayout>;