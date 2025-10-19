"use client";
import { usePathname } from "next/navigation";
import { MainNavigation } from "@/components/MainNavigation";

const NavbarWrapper = () => {
  const pathname = usePathname();
  if (pathname === "/grooming-report" || pathname.startsWith("/dashboard") || pathname === "/login") return null;
  return <MainNavigation />;
};

export default NavbarWrapper; 