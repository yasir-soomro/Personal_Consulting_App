import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About | Personal Consulting",
  description: "Our mission, methodology, and values for building durable engineering systems.",
};

export default function AboutPage() {
  return <AboutClient />;
}
