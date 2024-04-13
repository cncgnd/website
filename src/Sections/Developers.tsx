import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export const Developers = () => {
  const items = [
    {
      name: "Arujjwal Negi",
      linkedin: "https://www.linkedin.com/in/arujjwal-negi-048955269/",
      twitter: "https://twitter.com/arujjval",
      github: "https://github.com/arujjval",
      imageUrl: "./arujjwal-img.jpg",
    },
    {
      name: "Sanchit Kathpalia",
      linkedin: "https://www.linkedin.com/in/sanchit-khthpalia-a841b5252/",
      twitter: "https://twitter.com/khthpalia",
      github: "https://github.com/sanchitkhthpalia",
      imageUrl: "./sanchit-img.jpg",
    },
    {
      name: "Saksham Chaudhary",
      linkedin: "https://www.linkedin.com/in/saksham-chaudhary-21564722a/",
      twitter: "https://twitter.com/Saksham37718116",
      github: "https://github.com/Saksham1387",
      imageUrl: "./saksham-img.jpg",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center bg-black w-screen h-screen">
      <div>
        <h2 className="text-white text-3xl font-bold text-center mb-10">
          Developers
        </h2>
        <div className="mt-10">
          <InfiniteMovingCards
            items={items}
            direction="left"
            speed="normal"
            pauseOnHover={true}
            className="my-custom-class"
            image="/"
          ></InfiniteMovingCards>
        </div>
      </div>
    </div>
  );
};
