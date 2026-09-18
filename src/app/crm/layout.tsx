import type { ReactNode } from "react";
import CrmTheme from "@/components/crm/CrmTheme";

export default function CrmLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: "document.body.classList.add('crm-theme')",
        }}
      />
      <CrmTheme />
      {children}
    </>
  );
}
