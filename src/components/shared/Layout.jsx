import React from "react";
import Logo from "../../assets/logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";

const links = [
  { linkTo: "/", label: "Home" },
  { linkTo: "/about", label: "About" },
  { linkTo: "/experience", label: "Experience" },
];

const Layout = () => {
  return (
    <div className="min-h-screen pt-10 p-5 md:pl-40 lg:pl-60 transition-all md:pt-20 md:p-20 lg:p-30 md:flex md:flex-row">
      <header>
        <img
          src={Logo}
          className="ml-1 mb-5 flex object-cover h-20 w-20 md:-ml-3 "
          alt="logo"
        />
        <nav className="flex  md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative ">
          <ul className="flex  flex-row md:flex-col space-x-0 pr-10 mb-5 mt-2 md:mt-0">
            {links.map((link) => (
              <NavLink label={link.label} linkTo={link.linkTo} />
            ))}

            <li className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle text-neutral-500">
              <a
                href="https://drive.google.com/uc?export=download&id=1Gr9FSFvS5QXMZ-0pyySD_UV6COE79k5U"
                download
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;

const NavLink = ({ label, linkTo }) => {
  const location = useLocation();

  console.log(location.pathname === linkTo);

  return (
    <li
      className={`pr-4 transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle ${
        location.pathname === linkTo ? " text-neutral-100" : "text-neutral-500"
      }`}
    >
      <Link className="md:pb-4" to={linkTo}>
        {label}
      </Link>
    </li>
  );
};
