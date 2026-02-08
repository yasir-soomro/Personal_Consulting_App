import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Personal Consulting",
  description: "Get in touch to discuss strategy, timelines, and technical requirements.",
};

export default function ContactPage() {
  return <ContactClient />;
}
