import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
      path: "/",
    },
    {
      id: 2,
      link: "about me",
      path: "/about",
    },
    {
      id: 3,
      link: "my projects",
      path: "/projects",
    },
    {
      id: 4,
      link: "contact me",
      path: "/contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-[#202421] text-white fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">EGK</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link, path }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 duration-200 hover:text-cyan-300"
          >
            <Link to={path}>{link}</Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#202421] text-white hover:text-cyan-400">
          {links.map(({ id, link, path }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link to={path} onClick={() => setNav(false)}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
