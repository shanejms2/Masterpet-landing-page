import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const fractual = localFont({
  src: '../fonts/Fractul-Regular.ttf',
  variable: '--font-fractual',
})

const gliker = localFont({
  src: '../fonts/Gliker-Regular.woff2',
  variable: '--font-gliker',
})

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
      <body
        className={`${fractual.variable} ${gliker.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
