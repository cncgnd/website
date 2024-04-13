import React, { useEffect, useState } from "react";
export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        display: isVisible ? "block" : "none",
        position: "fixed",
        bottom: "30px",
        right: "30px",
      }}
      className="!fixed bottom-5 end-5 hidden rounded-full bg-pink p-5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg"
    >
      <span className="inline-block w-6 h-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </span>
    </button>
  );
};
