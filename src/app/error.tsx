"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="font-heading text-3xl md:text-4xl text-brand-blue mb-4">
        Something went wrong
      </h1>
      <p className="font-body text-brand-blue/70 max-w-md mb-8">
        We hit an unexpected error. Please try again, or return to the homepage.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          onClick={reset}
          className="bg-brand-green text-brand-blue hover:bg-brand-blue hover:text-white"
        >
          Try again
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </section>
  );
}
