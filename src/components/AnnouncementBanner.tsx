"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-brand-blue px-4 py-2 sm:px-6">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 w-full">
        <p className="font-body text-sm leading-6 text-white text-center">
          <strong className="font-semibold">Special offer:</strong> Flat ₹100 off for first-time customers. Book your first grooming session today.
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="text-white hover:bg-white/15 flex-shrink-0 rounded-full h-8 w-8 p-0"
          aria-label="Close announcement"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
