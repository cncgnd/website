import { Link } from "react-router-dom";
import {
  faWhatsapp,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Footer = () => {
  return (
    <footer className="p-2 bg-white sm:p-6 dark:bg-gray-800 ">
      <div className="mx-auto max-w-screen-xl w-screen">
        <div className="md:flex md:justify-between">
          <div className=" md:mb-0 flex flex-row mt-2">
            <div className="flex flex-col ">
              <div>
                <a href="https://www.cncf.io/" className="flex items-center">
                  <span className="self-center md:text-2xl font-semibold whitespace-nowrap">
                    CNCG New Delhi is a part of
                  </span>
                </a>
              </div>
              <div>
                <a href="https://www.cncf.io/" className="">
                  <img
                    src="./cncf-color.png"
                    className="mb-10"
                    alt="Logo"
                    width={300}
                    height={300}
                  />
                </a>
              </div>
            </div>
            <div className="md:ml-20 flex flex-col">
              <Link to="https://community.cncf.io/new-delhi/">
                <button className="bg-pink font-bold text-white p-4 px-9 rounded-xl">
                  Join Now
                </button>
              </Link>
              <br />
              <Link to="https://www.cncf.io/all-cncf/">
                <button className="bg-pink font-bold text-white p-4  rounded-xl">
                  All CNCF Sites
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <ul className="text-gray-600 dark:text-gray-400 mt-11">
                <li className="mb-4">
                  <a
                    href="https://landscape.cncf.io/"
                    className="hover:underline"
                  >
                    CNCF Landscape{" "}
                  </a>
                </li>
                <li>
                  <a href="Contribute.cncf.io" className="hover:underline">
                    Code Walk Through
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className=" text-sm font-semibold text-gray-900 uppercase dark:text-white ml-10">
                Resources
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 ml-5 mt-5">
                <li className="mb-4">
                  <a
                    href="https://m.youtube.com/@cncf/search?query=Kubecon"
                    className="hover:underline "
                  >
                    Contribute.cncf.io
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.google.com/search?q=contribute+to+cncf+video#ip=1&vuanr=4"
                    className="hover:underline"
                  >
                    Contributing to Projects
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cncf.io/news/"
                    className="hover:underline"
                  >
                    CNCF Updates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-600 dark:text-gray-400 mt-10">
                <li className="mb-4">
                  <a
                    href="https://m.youtube.com/@cncf/search?query=None%20code%20contributions"
                    className="hover:underline"
                  >
                    Non-code Contributions
                  </a>
                </li>
                <li>
                  <a
                    href="https://m.youtube.com/watch?v=F8dZMKP6xyg&t=49s&pp=ygUWQ29kZSB3YWxrdGhyb3VnaHMgY25jZg%3D%3D"
                    className="hover:underline"
                  >
                    Kubecon Talks
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="">
          <div className="flex mt-4 space-x-6 justify-center sm:mt-0 items-center">
            <a
              href="https://chat.whatsapp.com/DqPuxJ08sQMLVJKTvDySGQ"
              className="text-gray-500 hover:text-pink "
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-7 h-7" />
            </a>
            <a
              href="https://twitter.com/cncgnd"
              className="text-gray-500 hover:text-blue "
            >
              <FontAwesomeIcon icon={faTwitter} className="w-7 h-7" />
            </a>
            <a
              href="https://www.youtube.com/@cncgnd"
              className="text-gray-500 hover:text-pink "
            >
              <FontAwesomeIcon icon={faYoutube} className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/company/cncgnd"
              className="text-gray-500 hover:text-pink "
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
