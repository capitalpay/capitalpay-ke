import { useEffect, useState } from "react";

export function useScrollHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check initial scroll position
    const checkScroll = () => {
      setVisible(window.scrollY > 50);
    };

    // Set initial state
    checkScroll();

    // Add scroll listener
    window.addEventListener("scroll", checkScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return visible;
}

