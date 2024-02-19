import React from "react";
import { FaUserCircle } from "react-icons/fa";

import { Navlinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-gray-900 dark:bg-gray-800 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1 className="text-xl font-bold">Hello User</h1>
            <p className="text-sm text-gray-300">Premium user</p>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="block text-gray-300 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer mt-8">
        <h1 className="text-gray-500 text-center text-sm">
          Made by{" "}
          <a
            href="https://dilshad-ahmed.github.io/"
            className="text-primary hover:underline"
          >
            Aman 👩‍💻
          </a>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;