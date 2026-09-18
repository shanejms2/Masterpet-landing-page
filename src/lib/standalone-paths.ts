export const STANDALONE_PATHS = ["/grooming-report", "/crm"] as const;

export const isStandalonePath = (pathname: string | null) =>
  pathname === "/grooming-report" || pathname === "/crm";
