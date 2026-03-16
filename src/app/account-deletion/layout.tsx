import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Deletion | Masterpet",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-snippet": -1,
      "max-image-preview": "none",
      "max-video-preview": -1,
    },
  },
};

export default function AccountDeletionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
