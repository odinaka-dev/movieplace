import { Link } from "react-router-dom";

// components begins from here
const NavLinks = () => {
  return (
    <nav className="">
      <ul className="absolute hidden md:relative md:flex gap-10 items-center text-[18px] cursor-pointer ">
        <Link to={"/"}>
          <li className="hover:text-red-800 duration-300 font-medium capitalize">
            Home
          </li>
        </Link>
        <Link to={"/"}>
          <li className="hover:text-red-800 duration-300 font-medium capitalize">
            All movies
          </li>
        </Link>
        <Link to={"/"}>
          <li className="hover:text-red-800 duration-300 font-medium capitalize">
            search
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavLinks;
