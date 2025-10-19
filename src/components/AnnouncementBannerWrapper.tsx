"use client";
import { usePathname } from "next/navigation";
import AnnouncementBanner from "@/components/AnnouncementBanner";

const AnnouncementBannerWrapper = () => {
  const pathname = usePathname();
  if (pathname === "/grooming-report" || pathname.startsWith("/dashboard") || pathname === "/login") return null;
  return <AnnouncementBanner />;
};

export default AnnouncementBannerWrapper;
