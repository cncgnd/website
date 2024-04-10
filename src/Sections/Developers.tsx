import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

export const Developers = () => {
    const items = [
        {
          id: 1,
          name: "John Doe",
          designation: "Software Engineer",
          image: "/main-logo.jpeg",
        },
        {
          id: 2,
          name: "Jane Smith",
          designation: "UI/UX Designer",
          image: "/main-logo.jpeg",
        },
        {
            id: 3,
            name: "Jane Smith",
            designation: "UI/UX Designer",
            image: "/main-logo.jpeg",
          },
          {
            id: 4,
            name: "Jane Smith",
            designation: "UI/UX Designer",
            image: "/main-logo.jpeg",
          },
        // Add more items as needed
      ];

    return (
        <div className="flex flex-col items-center justify-center bg-black w-screen h-screen">
        <div>
            <h2 className="text-white text-3xl font-bold mb-4">Developers</h2>
            <div className="flex flex-row ">
            <AnimatedTooltip items={items} />
            </div>
        </div>
        </div>
    )
}