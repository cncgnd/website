import React from "react";
import RotatingCard from "@/components/ui/rotating-card";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const items = [
  {
    imageurl: "public/ashish.JPG",
    title: "Prometheus in Action: Get Started with Monitoring by Ashish Kumar ",
    description:
      "Ashish Kumar demonstrates Prometheus, showcasing its query language, operational ease, and seamless service discovery integration. ",
    videoUrl: "https://youtu.be/77zhEy-J4po",
    altText: "Picture of Ashish Speaking",
  },
  {
    imageurl: "public/ashtesham.jpeg",
    title: "Message Queues Made Easy with RabbitMQ & Python by Ahtesham Zaidi",
    description:
      "A deep dive into the world of messaging queues, discussing their importance, the role of message brokers, and the transition from traditional approaches to modern, decoupled systems.",
    videoUrl: "https://youtu.be/Zklx7ZB9LW4",
    altText: "Picture of Ashtesham Speaking",
  },
  {
    imageurl: "public/vinod.jpg",
    title: "Scaling Apps with KEDA by Vinod Kumar",
    description:
      "This session takes a comprehensive look at 'Scaling apps with KEDA' in Kubernetes environments. ",
    videoUrl: "https://youtu.be/SdCwTV_J-cI",
    altText: "Event Video Thumbnail",
  },
  {
    imageurl: "public/rakeshsaw.jpeg",
    title:
      "Kubernetes Secrets Management using External Secret Operator (ESO) by Rakesh Saw ",
    description:
      "Rakesh Saw delves into the intricacies of managing Kubernetes secrets securely and efficiently using the External Secret Operator (ESO).",
    videoUrl: "https://youtu.be/9PQwgURcqIw",
    altText: "Rakesh Saw Speaking",
  },
];

const Talks = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, items.length - 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  return (
    <div
      id="talks"
      className="flex flex-col items-center justify-center bg-black w-screen"
    >
      <div>
        <h2 className="text-white text-3xl font-bold pt-30 pb-10 lg:mt-40 lg:mb-10 mt-9">
          Previous Talks
        </h2>
      </div>

      <div className="relative w-full max-w-5xl overflow-hidden">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10">
          <button
            className={`px-4 py-2 bg-pink text-white rounded-full focus:outline-none hover:bg-pink-600 ${
              currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePrev}
            disabled={currentSlide === 0}
          >
            <RiArrowLeftSLine size={24} />
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10">
          <button
            className={`px-4 py-2 bg-pink text-white rounded-full focus:outline-none hover:bg-pink-600 ${
              currentSlide >= items.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={handleNext}
            disabled={currentSlide >= items.length - 1}
          >
            <RiArrowRightSLine size={24} />
          </button>
        </div>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <RotatingCard
                title={item.title}
                imageUrl={item.imageurl}
                description={item.description}
                altText={item.altText}
                videoUrl={item.videoUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Talks;
