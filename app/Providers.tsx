"use client";

import React from "react";
import { ThemeProvider } from "@/components/ui/ThemeContext";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
