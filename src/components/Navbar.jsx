import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../utilities/styles";
import { navLinks } from "../utilities/constants";
import { logo, menu, close, mobile } from "../assets";

export default function Navbar() {
  const [active, setActive] = useState("");

  const onClickHandler = () => {
    setActive("");
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center bg-primary py-5 fixed z-20`}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={onClickHandler}
        >
          <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
        </Link>
      </div>
    </nav>
  );
}
