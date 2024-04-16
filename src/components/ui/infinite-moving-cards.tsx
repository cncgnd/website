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
    role: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
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
        "scroller relative z-20 max-w-[350px] overflow-hidden md:[mask-image:linear-gradient(to_right,transparent,white_5%,white_90%,transparent)] md:max-w-[1400px] lg:max-w-[1400px] xl:max-w-[1400px] ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex shrink-0 gap-4 md:py-4 md:w-max flex-nowrap w-min md:h-[350px]",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="bg-white md:p-5 p-10 flex flex-col items-center justify-center mb-5 rounded-2xl py-6 relative w-100px md:w-[300px]"
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

              <div className="md:relative md:z-20 md:mt-6 flex flex-col items-center justify-center md:mb-5">
                <span className="leading-[1.6] text-gray-700 font-bold md:text-xl text-sm">
                  {item.name}
                </span>
                <span className="leading-[1.6] text-gray-500 md:text-sm md:mb-5">
                  {item.role}
                </span>

                {item.linkedin && (
                  <a
                    className="leading-[1.6] text-gray-700 md:text-lg hover:text-blue"
                    href={item.linkedin}
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                    LinkedIn
                  </a>
                )}
                {item.twitter && (<a
                  className="leading-[1.6] text-gray-700 md:text-lg hover:text-blue"
                  href={item.twitter}
                >
                  <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                  Twitter
                </a>)}

                {item.github && (<a
                  className="leading-[1.6] text-gray-700 md:text-lg hover:text-blue"
                  href={item.github}
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  GitHub
                </a>
                )}
                
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

