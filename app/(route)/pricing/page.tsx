import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing | Personal Consulting",
  description: "Transparent consulting pricing with flexible engagement tiers.",
};

export default function PricingPage() {
  return <PricingClient />;
}
