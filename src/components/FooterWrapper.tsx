"use client";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

const FooterWrapper = () => {
  const pathname = usePathname();
  if (pathname === "/grooming-report") return null;
  return (
    <div data-site-chrome="">
      <Footer />
    </div>
  );
};

export default FooterWrapper;
