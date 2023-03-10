import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              🍋 XCORE
            </span>
          </Link>
          <div className="flex md:order-2">
            <Link to="/login">
              <button
                type="button"
                className="text-white bg-black  hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-black-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                LOGIN
              </button>
            </Link>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/register">
                  <button
                    type="button"
                    className="text-white bg-black  hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-black-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    REGISTER
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <button
                    type="button"
                    className="text-white bg-black  hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-black-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    📦 0 👀
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <button
                    type="button"
                    className="text-white bg-black  hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-black-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    👤 PROFILE
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
