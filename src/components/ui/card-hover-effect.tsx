import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    imageurl: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  py-10 gap-x-4 gap-y-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl border-slate-400"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card imageUrl={item.imageurl}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardButton>{item.title}</CardButton>
          </Card>
        </a>
      ))}
    </div>
  );
};

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
export const Card = ({
  className,
  children,
  imageUrl,
}: {
  className?: string;
  children: React.ReactNode;
  imageUrl: string;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is in view
  });
  return (
    <motion.div
      className={cn(
        "rounded-2xl h-full w-full p-4  overflow-hidden bg-neutral-50  border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
      style={{ width: "250px", height: "390px" }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      whileHover={{ scale: 1.05 }}
      ref={ref}
    >
      <div className="relative z-50 ">
        <motion.img
          src={imageUrl}
          alt="Card Image"
          className="mx-auto mb-4 rounded-xl"
          width={250}
          height={250}
        />
        <div className="p-3">{children}</div>
      </div>
    </motion.div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black tracking-wide font-light", className)}>
      {children}
    </h4>
  );
};
export const CardButton = ({
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <a className={cn("text-pink font-bold tracking-wide mt-4", className)}>
      <span className="ml-1">&#8594;</span> View Details
    </a>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-black tracking-wide leading-relaxed text-md font-bold",
        className
      )}
    >
      {children}
    </p>
  );
};
