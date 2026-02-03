import { LucideIcon } from "lucide-react";

export type AccentColor = "violet" | "blue" | "emerald" | "orange" | "red" | "amber";

export interface Path {
  title: string;
  icon: LucideIcon;
  color: string;
  darkBg: string;
  description: string;
  steps: string[];
  backContent: string;
  accentColor: AccentColor;
  buttonColor: string;
}
