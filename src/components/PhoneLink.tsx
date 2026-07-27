"use client";

import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";
import { COMPANY_INFO } from "@/lib/constants";
import { trackPhoneClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type PhoneLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "onClick"
> & {
  children: ReactNode;
};

/**
 * Clickable phone link wired for Google Ads website call reporting.
 * Mark replaceable number text with data-google-ads-phone-label so the
 * gtag phone_conversion_callback can swap display + tel: href.
 */
const PhoneLink = forwardRef<HTMLAnchorElement, PhoneLinkProps>(
  function PhoneLink(
    { children, className, "aria-label": ariaLabel, ...props },
    ref
  ) {
    return (
      <a
        ref={ref}
        href={`tel:${COMPANY_INFO.phone}`}
        data-google-ads-phone
        onClick={() => trackPhoneClick()}
        className={cn(className)}
        aria-label={
          ariaLabel ?? `Call ${COMPANY_INFO.brandName} at ${COMPANY_INFO.phoneDisplay}`
        }
        {...props}
      >
        {children}
      </a>
    );
  }
);

export default PhoneLink;
