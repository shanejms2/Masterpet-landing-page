"use client";

import { useEffect, useState } from "react";

type Health = {
  connected: boolean;
  version?: string;
  error?: string;
};

type Props = {
  variant?: "default" | "compact";
};

export default function ErpnextConnectionCard({ variant = "default" }: Props) {
  const [status, setStatus] = useState<"loading" | "connected" | "disconnected">("loading");
  const [details, setDetails] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    async function fetchHealth() {
      try {
        const res = await fetch("/api/erpnext/health", { cache: "no-store" });
        const data: Health = await res.json();
        if (cancelled) return;
        if (data.connected) {
          setStatus("connected");
          setDetails(data.version ? `MySQL ${data.version}` : "Connected");
        } else {
          setStatus("disconnected");
          setDetails(data.error || "Unknown error");
        }
      } catch (e) {
        if (cancelled) return;
        setStatus("disconnected");
        setDetails(e instanceof Error ? e.message : "Failed to fetch");
      }
    }

    fetchHealth();
    const id = setInterval(fetchHealth, 60_000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  if (variant === "compact") {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-md px-2 py-1.5">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-300">ERPNext</span>
          {status === "loading" && (
            <span className="h-2 w-2 rounded-full bg-gray-400 animate-pulse inline-block" />
          )}
          {status === "connected" && (
            <span title={details} className="h-2 w-2 rounded-full bg-green-400 inline-block" />
          )}
          {status === "disconnected" && (
            <span title={details} className="h-2 w-2 rounded-full bg-red-400 inline-block" />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">ERPNext DB</h3>
        {status === "loading" && (
          <span className="text-gray-300 text-sm">Checking…</span>
        )}
        {status === "connected" && (
          <span className="px-2 py-1 rounded bg-green-900/40 text-green-300 text-xs border border-green-700">Connected</span>
        )}
        {status === "disconnected" && (
          <span className="px-2 py-1 rounded bg-red-900/40 text-red-300 text-xs border border-red-700">Disconnected</span>
        )}
      </div>
      <p className="text-gray-400 mt-2 text-sm break-words">{details}</p>
    </div>
  );
}


