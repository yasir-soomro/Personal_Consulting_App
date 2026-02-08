import type { Metadata } from "next";
import ExpertiseClient from "./ExpertiseClient";

export const metadata: Metadata = {
  title: "Expertise | Personal Consulting",
  description: "Deep technical expertise across AI, full-stack, and cloud-native systems.",
};

export default function ExpertisePage() {
  return <ExpertiseClient />;
}
