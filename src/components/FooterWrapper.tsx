"use client";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

const FooterWrapper = () => {
  const pathname = usePathname();
  if (pathname === "/grooming-report") return null;
  return <Footer />;
};

export default FooterWrapper; 