import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop Component
 * Scrolls a custom scroll container (.scroll-container) to top on route changes
 * 
 * Props:
 * - smooth (boolean): Enable smooth scrolling. Default: false (instant)
 */
const ScrollToTop = ({ smooth = false }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to ensure DOM is fully updated after route change
    const timer = setTimeout(() => {
      const scrollContainer = document.querySelector(".scroll-container");

      if (!scrollContainer) {
        console.warn("ScrollToTop: .scroll-container element not found");
        return;
      }

      scrollContainer.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth ? "smooth" : "auto",
      });
    }, 0); // Use minimal delay to ensure DOM update

    return () => clearTimeout(timer);
  }, [pathname, smooth]);

  return null;
};

export default ScrollToTop;