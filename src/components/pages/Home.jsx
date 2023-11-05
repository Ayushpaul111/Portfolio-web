import React from "react";
import MyImage from "../../assets/heroImage.png";
import { BiLogoLinkedin, BiLogoGithub, BiLogoInstagram } from "react-icons/bi";

const Home = () => {
  return (
    <section className="w-screen flex flex-col">
      <div className="flex flex-col">
        <div className="max-w-screen-lg flex flex-col items-start text-white pl-4 pt-5 md:-ml-3">
          <h1 className=" font-semibold text-3xl">Ayush Paul</h1>
          <h2 className="pt-5 md:max-w-xl pb-6">
            I have worked for multiple companies and clients that's how I
            developed my skills and knowledge through my previous experiences by
            actively learning and reflecting on them.
          </h2>
        </div>

        <div className="flex flex-col">
          <div className="md:flex">
            <div className="pl-3.5 pb-8 md:-ml-3">
              <div className="flex relative grayscale-[100%] bg-black rounded-full w-40 h-40 overflow-hidden ">
                <img
                  src={MyImage}
                  layout="fill"
                  className="App-logo fill object-cover layout fill-current"
                  alt="logo"
                />
              </div>
            </div>

            <div className="md:flex md:items-center md:justify-center md:px-10 md:pb-7">
              <div
                name="socials"
                className=" text-neutral-500 pl-3  space-y-3 md:-ml-3"
              >
                <div className="flex text-center ">
                  <BiLogoLinkedin className="text-2xl" />
                  <a
                    className="pl-2 cursor-pointer"
                    href="https://www.linkedin.com/in/ayushpaul1111/"
                  >
                    ayushpaul1111
                  </a>
                </div>

                <div className="flex text-center">
                  <BiLogoGithub className="text-2xl" />
                  <a
                    className="pl-2 cursor-pointer"
                    href="https://github.com/Ayushpaul111"
                  >
                    Ayushpaul111
                  </a>
                </div>

                <div className="flex text-center">
                  <BiLogoInstagram className="text-2xl" />
                  <a
                    className="pl-2 cursor-pointer"
                    href="https://www.instagram.com/_ayush_paul_/"
                  >
                    _ayush_paul_
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" max-w-screen-lg flex flex-col items-start text-white pl-4 pt-5 md:-ml-3 md:-mt-5">
            <h3 className="pt-5 md:max-w-xl pb-6">
              I am a dedicated developer and designer proficient in frontend
              development with React, Tailwind, and web technologies. I have
              successfully collaborated with multiple clients on independent
              projects.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
