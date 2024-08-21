import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <>
      <nav className="bg-customGray border-gray-200 dark:bg-teal-950">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a>
            <img
              src="/image/logo.png"
              alt="logo"
              className="w-[100px] h-[50px] rounded-xl" // Corrected the class for size
            />
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-9 h-10  text-sm text-black rounded-lg md:hidden hover:bg-teal-400 focus:outline-none   dark:text-black dark:hover:bg-teal-700 "
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "" : "hidden"
            } w-full md:block md:w-auto`}>
            <ul className="font-medium flex flex-col text-center p-4 md:p-0 mt-4 rounded-lg bg-customGray md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-customGray dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="py-[10px] cursor-pointer block px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-white dark:text-white md:dark:hover:text-white dark:hover:bg-teal-700 dark:hover:text-white md:dark:hover:bg-transparent relative group">
                <Link to={"/home"} className="inline-block">
                  Home
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li className="py-[10px] cursor-pointer block px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-white dark:text-white md:dark:hover:text-white dark:hover:bg-teal-700 dark:hover:text-white md:dark:hover:bg-transparent relative group">
                <Link to={"/about"} className="inline-block">
                  About
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li className="py-[10px] cursor-pointer block px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-white dark:text-white md:dark:hover:text-white dark:hover:bg-teal-700 dark:hover:text-white md:dark:hover:bg-transparent relative group">
                <Link to={"/services"} className="inline-block">
                  Services
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li className="py-[10px] cursor-pointer block px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-white dark:text-white md:dark:hover:text-white dark:hover:bg-teal-700 dark:hover:text-white md:dark:hover:bg-transparent relative group">
                <Link to={"/hairStylists"} className="inline-block">
                  Stylist
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>

              <li className="py-[10px] cursor-pointer block px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-white dark:text-white md:dark:hover:text-white dark:hover:bg-teal-700 dark:hover:text-white md:dark:hover:bg-transparent relative group">
                <Link to={"/booking"} className="inline-block">
                  Booking
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </li>
              <button
                type="button"
                className="bg-customGray border text-white focus:outline-none hover:bg-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                Login
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
