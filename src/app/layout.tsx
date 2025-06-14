import type { Metadata } from "next";
import "./globals.css";
import { StagewiseToolbar } from '@stagewise/toolbar-next';
import { ReactPlugin } from '@stagewise-plugins/react';
import NavbarWrapper from "@/components/NavbarWrapper";
import MainWrapper from "@/components/MainWrapper";

export const metadata: Metadata = {
  title: "Masterpet",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Masterpet - At-Home Pet Grooming in Kochi" />
        <meta property="og:description" content="Professional, hygienic, and stress-free grooming for your dogs and cats—right at your doorstep. Trusted by 1000+ pet parents & top communities in Kerala." />
        <meta property="og:image" content="/brand_assets/og-image.png" />
        <meta property="og:url" content="https://masterpet.co.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Masterpet - At-Home Pet Grooming in Kochi" />
        <meta name="twitter:description" content="Professional, hygienic, and stress-free grooming for your dogs and cats—right at your doorstep. Trusted by 1000+ pet parents & top communities in Kerala." />
        <meta name="twitter:image" content="/brand_assets/og-image.png" />
      </head>
      <body className="font-gliker bg-background min-h-screen">
        <StagewiseToolbar config={{ plugins: [ReactPlugin] }} />
        {/*
          The background color is set using the semantic Tailwind class 'bg-background',
          which references the CSS variable --background for easy theming and configuration.
        */}
        <NavbarWrapper />
        <MainWrapper>
          {children}
        </MainWrapper>
      </body>
    </html>
  );
}
