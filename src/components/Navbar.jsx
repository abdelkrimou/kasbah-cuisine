import { NavLink } from "react-router-dom";

function Navbar({ isOpened }) {
  return (
    <div
      className={` w-full  md:order-last lg:order-none lg:flex lg:w-max ${isOpened ? "md:block" : "md:hidden"}`}
    >
      <ul
        className={`flex justify-center gap-4 pb-3 font-primary text-lg font-semibold uppercase  text-secondary  sm:gap-5 md:w-full md:items-center md:justify-center lg:w-max lg:flex-row lg:justify-between`}
      >
        <NavLink to="/" activeclassname="active">
          <li className=" cursor-pointer border-secondary  transition-transform duration-300 ease-in-out hover:scale-110 hover:border-b md:w-full">
            home
          </li>
        </NavLink>
        <NavLink to="/aboutus" activeclassname="active">
          <li className=" cursor-pointer border-secondary bg-primary transition-transform duration-300  ease-in-out hover:scale-110 hover:border-b ">
            about us
          </li>
        </NavLink>
        <NavLink to="/menu" activeclassname="active">
          <li className=" cursor-pointer border-secondary bg-primary transition-transform duration-300  ease-in-out hover:scale-110 hover:border-b ">
            menu
          </li>
        </NavLink>
        <NavLink to="/interior" activeclassname="active">
          <li className=" cursor-pointer border-secondary bg-primary transition-transform duration-300  ease-in-out hover:scale-110 hover:border-b ">
            interior
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
