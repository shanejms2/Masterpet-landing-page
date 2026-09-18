"use client";
import { usePathname } from "next/navigation";
import AnnouncementBanner from "@/components/AnnouncementBanner";

const AnnouncementBannerWrapper = () => {
  const pathname = usePathname();
  if (pathname === "/grooming-report") return null;
  return (
    <div data-site-chrome="">
      <AnnouncementBanner />
    </div>
  );
};

export default AnnouncementBannerWrapper;
