import React from "react";
import project1 from "../../assets/iitm.png";

const Experience = () => {
  return (
    <section>
      <div className="max-w-screen-lg flex flex-col items-start text-white pl-4 pt-5 md:-ml-3pt-5 md:max-w-2xl md:-ml-3 space-y-5">
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
            knowledge within the field. I firmly believe that this internship
            will serve as a platform for personal and professional growth,
            allowing me to reach new heights in my career.
          </h3>
        </div>
        <div className="md:flex md:flex-row space-x-10">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://github.com/Zafcar/Special-topics-2/tree/Front-end">
              <img class="rounded-t-lg" src={project1} alt="project-1" />
            </a>
            <div class="p-5">
              <a href="https://github.com/Zafcar/Special-topics-2/tree/Front-end">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Dayananda Sagar University Library System
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                An efficient and robust library management system for seamless
                student and system data administration.
              </p>
              <a
                href="https://github.com/Zafcar/Special-topics-2/tree/Front-end"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
              >
                Read more
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="hhttps://ayush-iitm.netlify.app/">
              <img class="rounded-t-lg" src={project1} alt="project-1" />
            </a>
            <div class="p-5 space-y-5">
              <a href="https://github.com/Zafcar/Special-topics-2/tree/Front-end">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Weather UI
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A sleek and user-friendly weather app with an efficient and
                modern UI.
              </p>
              <a
                href="https://github.com/Ayushpaul111/iitM-internship"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
              >
                Read more
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
