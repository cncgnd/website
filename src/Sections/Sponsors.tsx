import "./Card.css";
import devtron from "../images/devtron.png";
import microsoft from "../images/microsoft.png";
import tata from "../images/tata 1 mg.png";
import epam from "../images/epam.png";
export const Sponsors = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black w-screen h-full">
      <div className="">
        <h2
          className="text-white text-3xl font-bold mb-20 text-center mt-[150px]"
          id="sponsors"
        >
          Our Sponsors
        </h2>
        <div className="p-4 rounded-lg shadow-lg grid sm:grid-cols-1 md:grid-cols-2 gap-20">
          <div className="card ease-in-out ">
            <img src={devtron} className="img pt-8"></img>
          </div>
          <div className="card ease-in-out ">
            <img src={microsoft} className="img pt-8"></img>
          </div>
          <div className="card ease-in-out ">
            <img src={tata} className="img"></img>
          </div>
          <div className="card ease-in-out ">
            <img src={epam} className="img h-36"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
