import { Header } from "../components/Header";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AboutUs } from "./AboutUs";
import { Events } from "./Events";
import { Stats } from "./Stats";
import { Sponsors } from "./Sponsors";
import { Developers } from "./Developers";
import { Footer } from "@/components/Footer";
import { Team } from "./Team";

export const Home = () => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col">
      <Header></Header>
      <div className="justify-center items-center h-full flex flex-col">
        <div className="w-1/3">
          <TextGenerateEffect
            className="mt-[300px]"
            words="&quot;DevOps isn't just about breaking down silos; it's about breaking down barriers, fostering collaboration, and enabling teams to build and deliver amazing things together.&quot;"
          ></TextGenerateEffect>
        </div>
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Events />
      </div>
      <div>
        <Stats />
      </div>
      <div>
        <Sponsors />
      </div>
      <div>
        <Team></Team>
      </div>
      <div>
        <Developers />
      </div>
      <Footer></Footer>
    </div>
  );
};
