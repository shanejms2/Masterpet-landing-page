import { Lora, Noto_Sans } from "next/font/google";

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
  weight: ["400", "500", "600", "700"],
});

export const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  weight: ["500", "600", "700"],
});
