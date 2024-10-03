import { useEffect } from "react";

const useCloseOnScroll = (isOpen, close) => {
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        close();
      }
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, close]);
};

export default useCloseOnScroll;
