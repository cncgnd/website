import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    linkedin: string;
    twitter: string;
    github: string;
    imageUrl: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  image: string; // New prop for the image URL
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="bg-white p-5 flex flex-col items-center justify-center mb-5 rounded-2xl py-6 relative w-[300px]"
            key={item.name}
          >
            <div className="rounded-full overflow-hidden w-20 h-20 flex-shrink-0 flex justify-center items-center ml-[10px]">
              <img
                src={item.imageUrl}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            <blockquote className="text-center">
              <div className="relative z-20 mt-6 flex flex-col items-center justify-center mb-5">
                <span className="leading-[1.6] text-gray-700 font-bold text-xl">
                  {item.name}
                </span>
                <a
                  className="leading-[1.6] text-gray-700 text-lg hover:text-blue"
                  href={item.linkedin}
                >
                  <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                  LinkedIn
                </a>
                <a
                  className="leading-[1.6] text-gray-700 text-lg hover:text-blue"
                  href={item.twitter}
                >
                  <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                  Twitter
                </a>
                <a
                  className="leading-[1.6] text-gray-700 text-lg hover:text-blue"
                  href={item.github}
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  GitHub
                </a>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
