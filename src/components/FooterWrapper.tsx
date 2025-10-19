"use client";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

const FooterWrapper = () => {
  const pathname = usePathname();
  if (pathname === "/grooming-report" || pathname.startsWith("/dashboard") || pathname === "/login") return null;
  return <Footer />;
};

export default FooterWrapper; 