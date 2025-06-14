"use client";
import { usePathname } from "next/navigation";

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <main className={pathname !== "/grooming-report" ? "pt-16" : ""}>
      {children}
    </main>
  );
};

export default MainWrapper; 