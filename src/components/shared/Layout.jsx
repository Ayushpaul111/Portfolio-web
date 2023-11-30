import { useEffect } from "react";
import Logo from "../../assets/logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";

const links = [
  { linkTo: "/", label: "Home" },
  { linkTo: "/about", label: "About" },
  { linkTo: "/experience", label: "Experience" },
  { linkTo: "/letsTalk", label: "LetsTalk" },
  {
    linkTo:
      "https://drive.google.com/file/d/101gPFZiMWCnBx3G_IMcooZVc1U5LDHRJ/view?usp=drive_link",
    label: "Resume",
  },
];

const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <div className="min-h-screen pt-10 p-5 md:pl-40 lg:pl-60 transition-all md:pt-20 md:p-20 lg:p-30 md:flex md:flex-row">
        <header className="">
          <img
            src={Logo}
            className="ml-1 mb-5 flex object-cover h-20 w-20 md:-ml-3 "
            alt="logo"
          />
          <nav className="flex  md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative  ">
            <ul className="flex  flex-row md:flex-col space-x-0 pr-10 mb-5 mt-2 md:mt-0 ">
              {links.map((link) => (
                <NavLink label={link.label} linkTo={link.linkTo} />
              ))}
            </ul>
          </nav>
        </header>
        <div className="md:absolute md:ml-32">
          <Outlet />
        </div>
        {/* for phone */}
        <div>
          <footer className=" md:hidden flex items-center justify-center mt-10">
            <div className="mb-8 flex w-11/12 max-w-2xl flex-col items-start">
              <hr className="border-1 mb-8 w-full border-gray-200 dark:border-[#1A2936]" />
              <div className="w-full max-w-2xl pb-16 flex flex-row justify-center col-span-full space-x-20 sm:space-x-52 xsm:space-x-32 xs:space-x-20 xxs:space-x-10">
                <div className="flex flex-col space-y-4">
                  <ul className="flex flex-col space-y-4">
                    {links.map((link) => (
                      <NavLink label={link.label} linkTo={link.linkTo} />
                    ))}
                  </ul>
                </div>

                {/* <div className="flex flex-col space-y-4">
                  <a
                  className="text-neutral-500 hover:text-gray-600 transition "
                  href="https://drive.google.com/uc?export=download&id=1Gr9FSFvS5QXMZ-0pyySD_UV6COE79k5U"
                  rel="noopener noreferrer"
                  target="_blank"
                  download={true}
                  >
                  Resume
                  </a>
                </div> */}

                <div className="flex flex-col space-y-4">
                  <a
                    href="mailto:ayushpaul1111@gmail.com"
                    className="text-neutral-500 transition hover:text-gray-600"
                  >
                    Gmail
                  </a>
                  <a
                    className="text-neutral-500 transition hover:text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/ayushpaul1111/"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="text-neutral-500 transition hover:text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Ayushpaul111"
                  >
                    GitHub
                  </a>
                  <a
                    className="text-neutral-500 transition hover:text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/_ayush_paul_/"
                  >
                    Instagram
                  </a>
                  <a
                    className="text-neutral-500 transition hover:text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/ayushpaul1111/"
                  >
                    Facebook
                  </a>
                </div>
              </div>
              <p className="flex self-center text-center text-sm text-gray-500">
                Created with ❤ by Ayush Paul.
              </p>
              <p className="mb-8 mt-2 self-center text-sm text-gray-500">
                Inspiration:{" "}
                <a
                  className="text-white underline underline-offset-4 hover:text-blue-100"
                  href="https://leerob.io"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Lee Robinson's{" "}
                </a>
                old website
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;

const NavLink = ({ label, linkTo }) => {
  const location = useLocation();

  console.log(location.pathname === linkTo);

  return (
    <li
      className={`pr-3 transition-all hover:text-neutral-800 dark:hover:text-neutral-200 md:hover:scale-105 md:hover:pl-1 flex align-middle ${
        location.pathname === linkTo ? " text-neutral-100" : "text-neutral-500"
      }`}
    >
      <Link className="md:pb-4" to={linkTo}>
        {label}
      </Link>
    </li>
  );
};
