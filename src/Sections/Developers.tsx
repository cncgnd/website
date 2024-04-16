import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Link } from "react-router-dom";

export const Developers = () => {
  const items = [
    {
      name: "Arujjwal Negi",
      linkedin: "https://www.linkedin.com/in/arujjwal-negi-048955269/",
      twitter: "https://twitter.com/arujjval",
      github: "https://github.com/arujjval",
      imageUrl: "./arujjwal-img.jpg",
      role: "Developer",
    },
    {
      name: "Sanchit Kathpalia",
      linkedin: "https://www.linkedin.com/in/sanchit-khthpalia-a841b5252/",
      twitter: "https://twitter.com/khthpalia",
      github: "https://github.com/sanchitkhthpalia",
      imageUrl: "./sanchit-img.jpg",
      role: "Developer",
    },
    {
      name: "Saksham Chaudhary",
      linkedin: "https://www.linkedin.com/in/saksham-chaudhary-21564722a/",
      twitter: "https://twitter.com/Saksham37718116",
      github: "https://github.com/Saksham1387",
      imageUrl: "./saksham-img.jpg",
      role: "Developer",
    },
    {
      name: "Daksh P. Jain",
      linkedin: "https://linkedin.com/in/daksh777",
      twitter: "https://twitter.com/0xdpj",
      github: "https://github.com/daksh777",
      imageUrl: "./daksh-img.jpg",
      role: "Designer",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center bg-black w-screen h-screen">
      <div>
        <h2 className="text-white text-3xl font-bold text-center mb-20">
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
        <div className="flex items-center justify-center mt-10 md:mt-20">
          <Link to="https://github.com/cncgnd">
            <button className="bg-pink rounded-xl p-4 text-white font-bold transition duration-300 ease-in-out hover:bg-opacity-80 hover:text-opacity-80">
              Want to Contribute ?
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
