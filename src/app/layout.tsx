import React from "react";
import { auth } from "@/auth";
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import ClientProviders from "@/context/ClientProviders";
import GeneralHeader from "@/components/layouts/GeneralHeader";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userSession = await auth();

  return (
    <html lang="en">
      <ClientProviders session={userSession}>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <GeneralHeader />
          {children}
        </body>
      </ClientProviders>
    </html>
  );
}
