import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FixedPopup } from "../ui/FixedPopup";
import { toast, Toaster } from "react-hot-toast";
import ResumePDFViewer from "./ResumeViewer.jsx";

const links = [
  { linkTo: "/", label: "Home", tar: "_self" },
  { linkTo: "/about", label: "About", tar: "_self" },
  { linkTo: "/experience", label: "Experience", tar: "_self" },
  { linkTo: "/letsTalk", label: "LetsTalk", tar: "_self" },
  {
    label: "Resume",
    isResume: true,
  },
  {
    linkTo: "https://ehike.in",
    label: "Ehike",
    tar: "_blank",
  },
];

// Replace this URL with your actual resume PDF URL
const RESUME_PDF_URL = "./Ayush Paul_Resume.pdf";

const Layout = () => {
  const { pathname } = useLocation();
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  const handleResumeClick = () => {
    setIsPdfViewerOpen(true);
  };

  return (
    <div className="min-h-screen pt-10 p-5 transition-all md:pt-20 md:p-20 lg:p-30 md:flex md:flex-row md:justify-center relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('https://media.giphy.com/media/feOLsVVsYft04/giphy.gif?cid=ecf05e47xwmy15trt80f6i8819bmhp4l8zhcpwq5a5to1jmq&ep=v1_gifs_related&rid=giphy.gif&ct=g')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <Toaster
        toastOptions={{
          duration: 4000,
          className: "animate-bounce",
          style: {
            background: "#333",
            color: "#fff",
            maxWidth: "400px",
            padding: "16px",
            borderRadius: "8px",
            animationDuration: "0.5s",
          },
        }}
      />
      <header className="z-10 relative">
        <img
          src={Logo}
          className="ml-1 mb-5 flex object-cover h-20 w-20 md:-ml-3"
          alt="logo"
        />
        <nav
          className={`flex md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto ${
            window.innerWidth < 768 ? "scroll-pr-6" : ""
          } md:relative`}
        >
          <ul
            className={`flex navBar flex-row md:flex-col space-x-0 pr-10 mb-5 mt-2 md:mt-0 ${
              window.innerWidth < 768 ? "overflow-x-auto" : ""
            }`}
          >
            {links.map((link, index) => (
              <NavLink
                key={index}
                label={link.label}
                linkTo={link.linkTo}
                tar={link.tar}
                isResume={link.isResume}
                onResumeClick={handleResumeClick}
              />
            ))}
          </ul>
        </nav>
      </header>
      <div className="md:min-h-full md:flex md:justify-center z-10 relative">
        <Outlet />
        <FixedPopup />
      </div>

      {/* Floating PDF Viewer */}
      <ResumePDFViewer
        isOpen={isPdfViewerOpen}
        onClose={() => setIsPdfViewerOpen(false)}
        pdfUrl={RESUME_PDF_URL}
      />

      {/* for phone */}
      <div className="z-10 relative">
        <footer className="md:hidden flex items-center justify-center mt-10">
          <div className="mb-8 flex w-11/12 max-w-2xl flex-col items-start">
            <hr className="border-1 mb-8 w-full border-gray-200 dark:border-[#1A2936]" />
            <div className="w-full max-w-2xl pb-16 flex flex-row justify-center col-span-full space-x-20 sm:space-x-52 xsm:space-x-32 xs:space-x-20 xxs:space-x-10">
              <div className="flex flex-col space-y-4 ">
                <ul className="flex flex-col space-y-4">
                  <li>
                    <a
                      href="mailto:ayushpaul1111@gmail.com"
                      className="text-neutral-500 transition hover:text-gray-600 font-subHead"
                    >
                      Gmail
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-neutral-500 transition hover:text-gray-600 font-subHead"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/ayushpaul1111/"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-neutral-500 transition hover:text-gray-600 font-subHead"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://ehike.in/"
                    >
                      Ehike
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col space-y-4">
                <a
                  className="text-neutral-500 transition hover:text-gray-600 font-subHead"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Ayushpaul111"
                >
                  GitHub
                </a>
                <a
                  className="text-neutral-500 transition hover:text-gray-600 font-subHead"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/ayush_paul/"
                >
                  Instagram
                </a>
                <a
                  className="text-neutral-500 transition hover:text-gray-600 font-subHead"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/ayushpaul1111/"
                >
                  Facebook
                </a>
              </div>
            </div>
            <p className="flex self-center text-center text-sm text-gray-500 font-subHead">
              Created with ❤ by&nbsp;
              <a
                href="http://https://www.linkedin.com/in/ayushpaul1111/"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              Ayush Paul.
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
  );
};

export default Layout;

const NavLink = ({ label, linkTo, tar, isResume, onResumeClick }) => {
  const location = useLocation();

  const handleClick = (e) => {
    if (isResume) {
      e.preventDefault();
      onResumeClick();
    }
  };

  return (
    <li
      className={`pr-3 transition-all hover:text-neutral-800 dark:hover:text-neutral-200 md:hover:scale-105 md:hover:pl-1 flex align-middle ${
        location.pathname === linkTo && !isResume
          ? "text-neutral-100 font-title font-semibold"
          : "text-neutral-500 "
      }`}
    >
      {isResume ? (
        <button
          className="md:pb-4 font-subHead cursor-pointer"
          onClick={handleClick}
        >
          {label}
        </button>
      ) : (
        <Link className="md:pb-4 font-subHead" to={linkTo} target={tar}>
          {label}
        </Link>
      )}
    </li>
  );
};
