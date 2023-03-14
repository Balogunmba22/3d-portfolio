import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../utilities/styles";
import { navLinks } from "../utilities/constants";
import { myLogo, menu, close } from "../assets";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed z-20 bg-nursery`}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={myLogo} alt="logo" className="w-20 object-contain" />
          <p className="text-secondary text-xl font-[700]">Muhammed</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 mr-4">
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className="text-secondary hover:text-white-100 font-[500] text-lg"
              onClick={() => setActive(title)}
            >
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <span className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[1.75rem] h-[1.75rem] cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[8.75rem] rounded-xl z-10 black-gradient`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map(({ id, title }) => (
                <li
                  key={id}
                  className={`${
                    title === active ? "text-white" : "text-secondary"
                  } font-poppings font-medium text-[1rem]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(title);
                  }}
                >
                  <a href={`#${id}`}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        </span>
      </div>
    </nav>
  );
}
