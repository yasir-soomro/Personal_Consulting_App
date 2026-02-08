import type { Metadata } from "next";
import CasesClient from "./CasesClient";

export const metadata: Metadata = {
  title: "Case Studies | Personal Consulting",
  description: "Explore strategic case studies and measurable outcomes across technical domains.",
};

export default function CaseStudiesPage() {
  return <CasesClient />;
}
