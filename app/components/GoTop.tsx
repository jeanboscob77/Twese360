// components/GoTop.tsx
"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function GoTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
      aria-label="Go to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
