"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="font-gliker bg-white min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl text-[#0A0A90] mb-4">Something went wrong</h1>
        <p className="text-[#0A0A90]/70 max-w-md mb-8">
          A critical error occurred. Please refresh the page or try again later.
        </p>
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-[#A2ED4A] px-6 py-3 text-[#0A0A90] font-semibold hover:bg-[#0A0A90] hover:text-white transition-colors"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
