import { Header } from "../components/Header";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AboutUs } from "./AboutUs";
import { PreviousTalks } from "./PreviousTalks";
import { Stats } from "./Stats";
import { Sponsors } from "./Sponsors";
import { Developers } from "./Developers";
import { Footer } from "@/components/Footer";

export const Home = () => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col">
      <Header></Header>
      <div className="justify-center items-center h-full flex flex-col">
        <div className="w-1/3">
          <TextGenerateEffect
            className="mt-[300px]"
            words="&quot;Dev isn't just about breaking down silos; it's about breaking down barriers, fostering collaboration, and enabling teams to build and deliver amazing things together.&quot;"
          ></TextGenerateEffect>
        </div>
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <PreviousTalks />
      </div>
      <div>
        <Stats />
      </div>
      <div>
        <Sponsors />
      </div>
      <div>
        <Developers />
      </div>
      <Footer></Footer>
    </div>
  );
};
