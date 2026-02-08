
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import WelcomeGate from "@/components/ui/WelcomeGate";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Personal Consulting | Agentic AI, Full-Stack & Cloud-Native",
  description: "Expert consulting services for Agentic AI, Full-Stack, and Cloud-Native engineers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50"
      >
        <Providers>
          <WelcomeGate />
          <Navbar />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
