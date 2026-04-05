import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // ONLY scroll to top if there is NO hash in the URL
    // This allows #specs and #engineering to work normally
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); 

  return null;
}