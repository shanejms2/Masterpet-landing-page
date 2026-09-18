"use client";

import { useEffect } from "react";

const CrmTheme = () => {
  useEffect(() => {
    document.body.classList.add("crm-theme");
    return () => {
      document.body.classList.remove("crm-theme");
    };
  }, []);

  return null;
};

export default CrmTheme;
