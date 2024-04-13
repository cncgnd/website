import { Button } from "./ui/moving-border";

export const Header = () => {
  const scrollToComponent = (id: string, event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent default behavior
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          <a
            href="/"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <img
              src="./logo.jpg"
              alt="Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white flex flex-col">
              <p>CNCG New Delhi</p>
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button className="">Contact Us</Button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button
                  onClick={(e) => scrollToComponent('aboutus', e)}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => scrollToComponent('events', e)}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                onClick={(e) => scrollToComponent('team', e)}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Team
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => scrollToComponent('sponsors', e)}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Our Sponsors
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
