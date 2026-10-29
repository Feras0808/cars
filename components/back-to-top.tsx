"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 300);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        })
      }
      className="fixed bottom-6 right-6 z-40 inline-flex size-12 items-center justify-center rounded-full bg-[#17538f] text-white shadow-lg transition duration-200 hover:-translate-y-1 hover:bg-[#103e6d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17538f]"
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
