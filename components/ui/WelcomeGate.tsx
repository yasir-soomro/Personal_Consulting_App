"use client";

import React, { useEffect, useState } from "react";
import Welcome from "@/components/ui/Welcome_Page";

const STORAGE_KEY = "pc_welcome_complete_session";

const WelcomeGate: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const stored = window.sessionStorage.getItem(STORAGE_KEY);
      setShowWelcome(stored !== "true");
    } catch {
      setShowWelcome(true);
    }
  }, []);

  useEffect(() => {
    if (showWelcome) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
    return;
  }, [showWelcome]);

  const handleComplete = () => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore storage errors and just close the welcome.
    }
    setShowWelcome(false);
  };

  if (showWelcome === null || showWelcome === false) {
    return null;
  }

  return <Welcome onComplete={handleComplete} />;
};

export default WelcomeGate;
