import React from "react";
import project1 from "../../assets/DSU-Library.jpg";
import project2 from "../../assets/iitm.png";
import Card from "../ui/Card";
import SkillAcademia from "../exp/SkillAcademia";
import Mediqueue from "../exp/Mediqueue";
import MediaInMinutes from "../exp/MediaInMinutes";
import Lyik from "../exp/Lyik";

const projects = [
  {
    id: 1,
    title: "Dayananda Sagar University Library System",
    description:
      "An efficient and robust library management system for seamless student and system data administration.",
    src: project1,
    previewHref:
      "https://drive.google.com/file/d/1y2bi4RRD5i-yIQGy_V5COCKaza-8EcoP/view?usp=sharing",
    titleHref: "https://github.com/Zafcar/Special-topics-2/tree/Front-end",
  },
  {
    id: 2,
    title: "Weather UI",
    description:
      "A sleek and user-friendly weather app with an efficient and modern UI.",
    src: project2,
    previewHref: "https://ayush-iitm.netlify.app/",
    titleHref: "https://github.com/Zafcar/Special-topics-2/tree/Front-end",
  },
  {
    id: 3,
    title: "Bill Management System For Small Shops",
    description: "A simple bill management system for small stores.",
    src: "",
    previewHref: "https://github.com/Ayushpaul111/Store-billing-system",
    titleHref: "https://github.com/Ayushpaul111/Store-billing-system",
  },
];

const Experience = () => {
  return (
    <section>
      <div className="max-w-screen-lg flex flex-col items-start text-white pl-4 pt-5 md:-ml-3pt-5 md:max-w-2xl md:-ml-3 space-y-10">
        <div className="space-y-5  ">
          <h1 className=" text-3xl font-semibold">Experience:</h1>
          <h3 className="">
            During my previous engagements, I acquired valuable experience in
            various roles such as web developer, graphic designer, and UI/UX
            designer. Additionally, as a Computer Science student, I have
            developed proficient skills in web development. Throughout my
            journey, I have actively contributed to numerous projects, with one
            notable accomplishment being my role as the front-end lead in a web
            application developed for Dayananda Sagar University and Dayananda
            Sagar College of Engineering. This experience has provided me with a
            comprehensive understanding of the responsibilities associated with
            this position.
          </h3>
          <h3>
            The primary motivation behind my pursuit of this internship
            opportunity is to further augment my skill set. By immersing myself
            in new challenges and working alongside industry professionals, I am
            confident that I will be able to refine my abilities and broaden my
            knowledge within the field.
          </h3>
        </div>

        <div className="md:flex md:flex-col space-y-5">
          <div className="text-xl text">
            <h1 className=" font-medium">Companies:</h1>
          </div>

          {/* company cards */}
          <div className="flex flex-col space-y-5 ">
            <Lyik />
            {/* mediqueue */}
            <Mediqueue />
            {/* Skill Academia */}
            <SkillAcademia />

            {/* Nincompoop */}
            <MediaInMinutes />
          </div>
        </div>

        <div className="md:flex md:flex-col space-y-5">
          <div className="text-xl text">
            <h1 className="font-medium">Projects:</h1>
          </div>

          <div className="grid grid-cols-1 space-y-8 md:space-y-5">
            {projects.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                previewHref={item.previewHref}
                src={item.src}
                titleHref={item.titleHref}
              />
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="text-xl font-medium">Certificate and others:</h3>
          <h3>
            You will get every Certificates and other documents in this drive:
          </h3>

          <a
            className="inline-block"
            href="https://drive.google.com/drive/folders/1Ccl9fVm9xxBB4V5U6Y0mUgEUHySGu50a?usp=sharing"
            rel="noopener noreferrer"
          >
            <button
              className="flex select-none items-center gap-2 rounded-lg py-3 px-2 text-center align-middle font-sans text-xs font-bold uppercase bg-opacity-20 bg-black transition-all hover:bg-pink-500/10 active:bg-pink-500/30 text-pink-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Read more
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
