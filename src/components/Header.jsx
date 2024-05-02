import Navbar from "./Navbar";
import Logo from "../UI elements/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [opened, setOpened] = useState(false);

  return (
    <header className="relative flex flex-col flex-wrap items-center justify-between gap-5 border-b  border-black bg-primary px-6 py-3  md:flex-row  ">
      <Logo />
      <Navbar isOpened={opened} />
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <Link
          to="/checkbooking"
          className=" border border-black px-2 py-3 pt-3 font-button uppercase transition-all  duration-300 hover:bg-secondary hover:text-primary"
        >
          Check booking
        </Link>
        <Link
          to="/tables"
          className=" border border-black bg-secondary2 px-5 py-3 pt-3 font-button uppercase transition-all duration-300 hover:bg-secondary hover:text-primary"
        >
          book your table
        </Link>
      </div>{" "}
      <i
        onClick={() => setOpened((ini) => !ini)}
        className={`${opened && "rotate-90"} fa-solid fa-bars-staggered hidden cursor-pointer text-3xl transition-all duration-300 md:block lg:hidden`}
      ></i>
    </header>
  );
}

export default Header;
