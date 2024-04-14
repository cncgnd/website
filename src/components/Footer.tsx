import { Button } from "./ui/moving-border";
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
    <footer className="p-2 bg-white sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className=" md:mb-0 flex flex-col">
            <a href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap mr-3">
                CNCF New Delhi is a part of 
              </span>
              <img
                src="./cncf-icon-color.png"
                className="mr-1"
                alt="Logo"
                width={90}
                height={90}
              />
              
            </a>
            <div className="mt-16 flex flex-col">
              <Link to="https://community.cncf.io/new-delhi/">
                <Button className="bg-pink font-bold">Join Now</Button>
              </Link>
              <br />
              <Link to="https://www.cncf.io/all-cncf/">
                <Button className="bg-pink font-bold">All CNCF Sites</Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white ml-14">Resources</h2> */}
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
                  <a
                    href="https://m.youtube.com/@cncf/search?query=None%20code%20contributions"
                    className="hover:underline"
                  >
                    None Code Contributions
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
                    href="https://m.youtube.com/watch?v=F8dZMKP6xyg&t=49s&pp=ygUWQ29kZSB3YWxrdGhyb3VnaHMgY25jZg%3D%3D"
                    className="hover:underline "
                  >
                    Code walk through
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://m.youtube.com/@cncf/search?query=Kubecon"
                    className="hover:underline"
                  >
                    Kubecon talks
                  </a>
                </li>
                <li>
                  <a href="Contribute.cncf.io" className="hover:underline">
                    Contribute.CNCG.io
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-600 dark:text-gray-400 mt-10">
                <li className="mb-4">
                  <a
                    href="https://www.cncf.io/news/"
                    className="hover:underline"
                  >
                    Cncf updates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Talks on Contributing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Copyright © 2024 The Linux Foundation®. All rights reserved. The
            Linux Foundation has registered trademarks and uses trademarks. For
            a list of trademarks of The Linux Foundation, please see our{" "}
            <a
              href="https://www.linuxfoundation.org/legal/trademark-usage?__hstc=60185074.7e4d4d975520f071c34ba68bd97fc7d5.1712692106234.1713034469591.1713037286349.5&__hssc=60185074.3.1713037286349&__hsfp=950146127"
              className="hover:text-pink font-bold"
            >
              Trademark Usage
            </a>{" "}
            page. Linux is a registered trademark of Linus Torvalds.{" "}
            <a
              href="https://www.linuxfoundation.org/legal/privacy-policy?__hstc=60185074.7e4d4d975520f071c34ba68bd97fc7d5.1712692106234.1713034469591.1713037286349.5&__hssc=60185074.4.1713037286349&__hsfp=950146127"
              className="hover:text-pink font-bold"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://www.linuxfoundation.org/legal/terms?__hstc=60185074.7e4d4d975520f071c34ba68bd97fc7d5.1712692106234.1713034469591.1713037286349.5&__hssc=60185074.5.1713037286349&__hsfp=950146127"
              className="hover:text-pink font-bold"
            >
              Terms of Use
            </a>
            .
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://chat.whatsapp.com/DqPuxJ08sQMLVJKTvDySGQ"
              className="text-gray-500 hover:text-pink "
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/cncgnd"
              className="text-gray-500 hover:text-blue "
            >
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@cncgnd"
              className="text-gray-500 hover:text-pink "
            >
              <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/cncgnd"
              className="text-gray-500 hover:text-pink "
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
