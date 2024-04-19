export const AboutUs = () => {
  return (
    <div id="aboutus" className="bg-black flex items-center justify-center w-screen">
      <div className="max-w-4xl mt-20 px-4 lg:px-8 md:mt-30">
        <h2 className="text-white text-3xl font-bold mb-8 text-center lg:mb-4">About Us</h2> {/* Adjusted margin for larger screens */}
        <div className="p-1 rounded-lg shadow-lg"></div>
        <div className="mt-8">
          <h2 className="text-xl mb-4 text-neutral-200 text-center leading-relaxed">
            Welcome to the Cloud Native Community Group - New Delhi. We are the New Delhi chapter of the Cloud Native Community Groups (CNCG), operating under the{" "}
            <span className="text-[#0086FF]">Cloud Native Computing Foundation</span>{" "}
            (CNCF). Our focus is on knowledge sharing and exploring the potential of cloud native technologies. Through our meetups, educational sessions, and practical activities, we aim to empower individuals in navigating the cloud native ecosystem. We are dedicated to hosting at least one meetup every month and take pride in being recognized as the leading CNCG community worldwide. We prioritize creating an inclusive learning environment, adhering to the CNCF Code of Conduct to ensure everyone feels welcome and respected.
          </h2>
        </div>
      </div>
    </div>
  );
};
