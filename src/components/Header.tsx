import { useState } from "react";
import { Button } from "./ui/moving-border";

export const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const email = "cncgnewdelhi@gmail.com";

  const scrollToComponent = (
    id: string,
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMailClick = () => {
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-white dark:bg-gray-900 fixed w-screen z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          <div className="flex items-center md:order-2 space-x-3 md:space-x-1 rtl:space-x-reverse font-bold">
            {window.innerWidth > 768 && (
              <Button
                onClick={handleMailClick}
                className="bg-pink transition duration-300 ease-in-out hover:text-opacity-80 hover:mix-blend-darken-10"
              >
                Contact Us
              </Button>
            )}
          </div>

          <a
            href="/"
            className="flex items-center space-x-22 rtl:space-x-reverse md:mr-0 mr-9"
          >
            <img
              src="./logo.jpg"
              alt="Logo"
              width={90}
              height={90} 
              className="md:mr-0 sm:mr-0"
              
            />
            <span className="self-center text-xl text-md font-bold whitespace-nowrap dark:text-white flex flex-col md:mr-0 md:ml-0">
              <p>&nbsp;CNCG NEW DELHI</p>
            </span>
          </a>

          <div
            className={`hidden md:flex md:items-center md:justify-between w-full md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <button
                  onClick={(e) => scrollToComponent("aboutus", e)}
                  className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => scrollToComponent("events", e)}
                  className="block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => scrollToComponent("team", e)}
                  className="block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Team
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => scrollToComponent("talks", e)}
                  className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Talks
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => scrollToComponent("sponsors", e)}
                  className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Our Sponsors
                </button>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink mr-3"
          >
            {showSidebar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-black dark:text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M13.707 14.707a1 1 0 0 1-1.414 0L10 11.414l-2.293 2.293a1 1 0 1 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414L11.414 10l2.293 2.293a1 1 0 0 1 0 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-black dark:text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 18h16a1 1 0 010 2H4a1 1 0 010-2zm0-7h16a1 1 0 010 2H4a1 1 0 010-2zm0-7h16a1 1 0 010 2H4a1 1 0 010-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {showSidebar && (
        <div className="md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-30">
          <ul className="flex flex-col p-4 md:p-0 mt-4 bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <li>
              <button
                onClick={(e) => {
                  setShowSidebar(false);
                  scrollToComponent("aboutus", e);
                }}
                className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  setShowSidebar(false);
                  scrollToComponent("events", e);
                }}
                className="block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Events
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  setShowSidebar(false);
                  scrollToComponent("team", e);
                }}
                className="block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Team
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  setShowSidebar(false);
                  scrollToComponent("sponsors", e);
                }}
                className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Our Sponsors
              </button>
            </li>
          </ul>

          <div className="flex items-center md:order-2 space-x-3 md:space-x-1 rtl:space-x-reverse font-bold">
            <Button
              onClick={handleMailClick}
              className="bg-pink transition duration-300 ease-in-out hover:text-opacity-80 hover:mix-blend-darken-10"
            >
              Contact Us
            </Button>
          </div>

          <button onClick={() => setShowSidebar(!showSidebar)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-black dark:text-white mt-3 ml-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M13.707 14.707a1 1 0 0 1-1.414 0L10 11.414l-2.293 2.293a1 1 0 1 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414L11.414 10l2.293 2.293a1 1 0 0 1 0 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
