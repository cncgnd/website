import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type prop = {
  title: string;
  count: number;
};

const Stat = ({ title, count }: prop) => {
  return (
    <div className="text-white flex flex-col gap-3 items-center">
      <div className="flex flex-row items-center">
        <CountUp
          start={0}
          end={count}
          duration={2}
          className="counter md:text-5xl text-3xl font-bold"
        />
        <div
          className={
            title != "speakers"
              ? "hidden"
              : "md:text-5xl text-3xl font-bold text-right"
          }
        >
          +
        </div>
      </div>
      <div className="title md:text-xl text-sm uppercase">{title}</div>
    </div>
  );
};

export const Stats = () => {
  const [count, setCount] = useState([0, 0, 0, 0]);
  const titles = ["events", "speakers", "attendees", "registrations"];
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) setCount([8, 30, 1000, 3000]);
  }, [inView]);

  return (
    <div
      className="flex flex-col items-center justify-center bg-black w-screen min-h-screen"
      ref={ref}
    >
      <h2 className="text-white text-3xl font-bold mb-16  mt-16">Stats</h2>
      <div className="flex md:flex-row flex-col justify-between w-full max-w-[1200px] px-5 md:px-20 py-5">
        {titles.map((title, index) => (
          <Stat title={title} count={count[index]} />
        ))}
      </div>
    </div>
  );
};
