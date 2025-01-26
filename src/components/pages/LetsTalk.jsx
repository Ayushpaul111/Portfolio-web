import React, { useState, useRef } from "react";
import { BiLogoLinkedin, BiLogoGithub, BiLogoInstagram } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import BlurText from "../ui/BlurText";
import FadeContent from "../ui/FadeContent";

const LetsTalk = () => {
  const form = useRef();

  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xaterg2",
        "template_z5d9tnj",
        form.current,
        "1BqWiCKHx5Jq66uGe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setSubmitted(true);
    setSuccessMessage(
      <p className="font-subHead">
        Thank you for showing interest!
        <br />I will get back to you soon!
      </p>
    );

    // Clear the form fields
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="max-w-screen-lg flex flex-col items-start text-white pl-4 md:pl-6 pt-5 md:-ml-3pt-5  space-y-10 md:-ml-3 ">
      <div className="font-semibold text-3xl">
        <h1 className="text-4xl font-semibold font-title">
          <BlurText text="Let's Have A Chat" delay={150} animateBy="words" />
        </h1>
      </div>

      <FadeContent
        blur={true}
        duration={1200}
        easing="ease-in-out"
        initialOpacity={0}
      >
        {submitted ? (
          <div className="text-green-500">{successMessage}</div>
        ) : (
          <form onSubmit={handleSubmit} ref={form} className="space-y-4">
            <label className="relative">
              <input
                type="text"
                name="user_name"
                value={form.name}
                onChange={handleChange}
                className="border-b-2 border-gray-400 outline-none p-1 w-full bg-transparent focus:border-white transition-all duration-200"
                onFocus={(e) => {
                  e.target.nextElementSibling.classList.add("focused");
                }}
                onBlur={(e) => {
                  if (!e.target.value) {
                    e.target.nextElementSibling.classList.remove("focused");
                  }
                }}
              />
              <span className="absolute font-para left-0 bottom-0 px-1 uppercase tracking-wide duration-200 transform translate-y-0">
                Your Name
              </span>
            </label>

            <label className="relative">
              <input
                type="email"
                name="user_email"
                value={form.email}
                onChange={handleChange}
                className="border-b-2 pt-8 border-gray-400 outline-none p-1 w-full bg-transparent focus:border-white transition-all duration-200"
                onFocus={(e) => {
                  e.target.nextElementSibling.classList.add("focused");
                }}
                onBlur={(e) => {
                  if (!e.target.value) {
                    e.target.nextElementSibling.classList.remove("focused");
                  }
                }}
              />
              <span className="absolute font-para left-0 bottom-0 px-1 uppercase tracking-wide duration-200 transform translate-y-0">
                Your Email
              </span>
            </label>

            <label className="relative">
              <input
                name="user_message"
                value={form.message}
                onChange={handleChange}
                className="border-b-2 pt-10 border-gray-400 outline-none p-1 w-full bg-transparent focus:border-white transition-all duration-200"
                onFocus={(e) => {
                  e.target.nextElementSibling.classList.add("focused");
                }}
                onBlur={(e) => {
                  if (!e.target.value) {
                    e.target.nextElementSibling.classList.remove("focused");
                  }
                }}
              />
              <span className="absolute font-para left-0 bottom-0 px-1 uppercase tracking-wide duration-200 transform translate-y-0">
                Message
              </span>
            </label>

            <button
              className="flex select-none items-center gap-2 rounded-lg py-3 px-2 text-center align-middle font-sans text-xs font-bold uppercase bg-opacity-20 bg-black transition-all hover:bg-pink-500/10 active:bg-pink-500/30 text-pink-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              value="Send"
            >
              Submit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </form>
        )}
      </FadeContent>
      <FadeContent
        blur={true}
        duration={1200}
        easing="ease-in-out"
        initialOpacity={0}
      >
        <div
          name="socials"
          className=" text-neutral-500  flex md:space-x-10 lg:space-x-24  flex-col md:flex-row space-y-5 md:space-y-0 space-x-0"
        >
          <div className="flex items-center hover:scale-105 transition-all  hover:text-white ">
            <BiLogoLinkedin className="text-2xl text-white " />
            <a
              className="pl-2 cursor-pointer"
              href="https://www.linkedin.com/in/ayushpaul1111/"
            >
              <h3 className="font-subHead">_ayush_paul_</h3>
            </a>
          </div>

          <div className="flex items-center text-center hover:scale-105 transition-all  hover:text-white">
            <BiLogoGithub className="text-2xl text-white" />
            <a
              className="pl-2 cursor-pointer"
              href="https://github.com/Ayushpaul111"
            >
              <h3 className="font-subHead">Ayushpaul111</h3>
            </a>
          </div>

          <div className="flex items-center text-center hover:scale-105 transition-all  hover:text-white">
            <BiLogoInstagram className="text-2xl text-white" />
            <a
              className="pl-2 cursor-pointer"
              href="https://www.instagram.com/_ayush_paul_/"
            >
              <h3 className="font-subHead">_ayush_paul_</h3>
            </a>
          </div>
        </div>
      </FadeContent>
    </div>
  );
};

export default LetsTalk;
