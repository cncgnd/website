import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export const Team = () => {
  const items = [
    {
      name: "Abhinav Dubey",
      twitter: "https://twitter.com/abhinavd26",
      linkedin: "https://www.linkedin.com/in/abhinavd26/",
      imageUrl: "./abhinav.jpg",
      role: "Organizer",
    },
    {
      name: "Ashish Kumar",
      twitter: "https://twitter.com/kr_ashish99",
      linkedin: "https://www.linkedin.com/in/ashishkumar99/",
      imageUrl: "./ashish.JPG",
      role: "Organizer",
    },
    {
      name: "Satyam Soni",
      twitter: "https://twitter.com/satyampsoni",
      linkedin: "https://www.linkedin.com/in/satyampsoni/",
      imageUrl: "./satyamimg.png",
      role: "Organizer",
    },
    {
      name: "Shivang Shandilya",
      twitter: "https://twitter.com/shivv_twt",
      linkedin: "https://www.linkedin.com/in/shivang-shandilya/",
      imageUrl: "./shivang.jpg",
      role: "Organizer",
    },
    {
      name: "Harsh Pal",
      imageUrl: "./Harsh.jpeg",
      linkedin: "https://www.linkedin.com/in/its-harsshhh/",
      twitter: "https://twitter.com/Choley_Bhature",
      role: "Design Lead",
    },
  ];
  return (
    <div id="team" className="flex flex-col items-center justify-center bg-black w-screen h-screen">
      <div>
        <h2 className="text-white text-3xl font-bold text-center mb-20">
          Our Team
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
