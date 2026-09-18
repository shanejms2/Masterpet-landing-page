import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { COMPANY_INFO } from "@/lib/constants";

const CrmFooter = () => (
  <footer className="border-t bg-background">
    <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <p className="text-sm text-muted-foreground">
          Masterpet CRM · Software for pet businesses
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href={`mailto:${COMPANY_INFO.email}`} className="text-muted-foreground hover:text-foreground">
            {COMPANY_INFO.email}
          </a>
          <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
        </div>
      </div>
      <Separator />
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}
      </p>
    </div>
  </footer>
);

export default CrmFooter;
