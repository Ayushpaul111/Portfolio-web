import React from "react";
import project1 from "../../assets/DSU-Library.jpg";
import project2 from "../../assets/iitm.png";
import Card from "../ui/Card";

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
          <div className="flex flex-col space-y-5">
            {/* mediqueue */}

            <div className="w-full bg-gray-200 dark:bg-gray-900">
              <div className="container mx-auto flex items-start justify-center">
                <div className="w-full">
                  <div className="flex flex-col lg:flex-row mx-auto w-full bg-white dark:bg-gray-800 shadow rounded">
                    <div className="w-full lg:w-1/3 p-6">
                      <div className="flex lg:flex-col">
                        <div className="w-12 h-12 rounded shadow">
                          <img
                            className="w-full h-full overflow-hidden object-cover rounded"
                            src="https://play-lh.googleusercontent.com/SHqJPBvECZHig7yJ4SKord-SCyPzEDa_dLpazwJ5oqNXt2BfdXcmHPP5rNWKoVlAqX4=w240-h480-rw"
                            alt="logo"
                          />
                        </div>
                        <div className="ml-3 lg:mt-3 lg:ml-0">
                          <h5 className="text-gray-800 dark:text-gray-100 font-medium text-base">
                            Mediqueue
                          </h5>
                          <p className="text-gray-600 dark:text-gray-400 text-xs font-normal">
                            Cooch Behar, West Bengal
                          </p>
                        </div>
                      </div>
                      <h3 className="text-lg text-gray-800 dark:text-gray-100 font-bold mt-5 mb-1">
                        Front-end Developer and UI/Ux
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-normal">
                        I have gained valuable experience and expertise as a
                        Frontend Developer and UI/UX Designer, honing my skills
                        in various aspects of design and development. I
                        successfully implemented my learnings in real-world
                        projects during my tenure at this company.
                      </p>
                    </div>
                    <div className="w-full lg:w-1/3 p-6 border-t border-b lg:border-t-0 lg:border-b-0 sm:border-l sm:border-r border-gray-300">
                      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                        <div className="text-xs text-center w-full bg-indigo-100 text-indigo-700 dark:text-indigo-600 rounded font-medium p-3 lg:mr-3">
                          Start Date: March, 2022
                        </div>
                        <div className="mt-4 text-center w-full lg:mt-0 text-xs bg-red-200 text-red-500 rounded font-medium p-3">
                          End Date: October, 2022
                        </div>
                      </div>
                      <div className="mt-6 mb-8 w-full bg-gray-100 dark:bg-gray-700 rounded p-4 relative">
                        <ul>
                          <li className="text-xs text-gray-600 dark:text-gray-400 font-normal tracking-normal">
                            - Contributed in main website developing
                          </li>
                          <li className="text-xs text-gray-600 dark:text-gray-400 font-normal tracking-normal my-4">
                            - Created the login ui design for the mobile
                            application
                          </li>
                          <li className="text-xs text-gray-600 dark:text-gray-400 font-normal tracking-normal">
                            - Made poster and logos for the clients
                          </li>
                        </ul>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-gray-600 dark:text-gray-400 font-bold text-lg leading-6 mb-1 text-center">
                            2
                          </h2>
                          <p className="text-gray-800 dark:text-gray-100 text-sm leading-5 text-center">
                            Work Positions
                          </p>
                        </div>
                        <div>
                          <h2 className="text-gray-600 dark:text-gray-400 font-bold text-lg leading-6 mb-1 text-center">
                            3
                          </h2>
                          <p className="text-gray-800 dark:text-gray-100 text-sm leading-5 text-center">
                            Teams Assigned
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/3 p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <p>Tech I have used</p>
                      </div>

                      <div className="flex items-center justify-between md:space-x-5">
                        <div>
                          <p className="text-sm text-gray-800 dark:text-gray-100 font-normal mb-1 ">
                            Developing
                          </p>
                          <h2 className="text-sm  text-gray-600 dark:text-gray-400">
                            HTML, CSS, JavaScript.
                          </h2>
                        </div>
                        <div>
                          <p className="text-sm text-gray-800 dark:text-gray-100 font-normal mb-1 ">
                            Designing
                          </p>
                          <h2 className="text-sm  text-gray-600 dark:text-gray-400">
                            Photoshop, Illustrator, XD
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* stop */}
                  </div>
                  {/* Card code block end */}
                </div>
              </div>
            </div>
            {/* Skill Academia */}
            <div className="w-full bg-gray-200 dark:bg-gray-900">
              <div className="container mx-auto flex items-start justify-center">
                <div className="w-full">
                  <div className="flex flex-col lg:flex-row mx-auto w-full bg-white dark:bg-gray-800 shadow rounded">
                    <div className="w-full lg:w-1/3 p-6">
                      <div className="flex lg:flex-col">
                        <div className="w-12 h-12 rounded shadow">
                          <img
                            className="w-full h-full overflow-hidden object-cover rounded"
                            src="https://media.licdn.com/dms/image/C560BAQGLl5g9wT4ZsQ/company-logo_200_200/0/1652106728326?e=2147483647&v=beta&t=oRWJeUKeVe9u4mHsWOXTSX6D3Ct848XnM_WUQOKBPTw"
                            alt="logo"
                          />
                        </div>
                        <div className="ml-3 lg:mt-3 lg:ml-0">
                          <h5 className="text-gray-800 dark:text-gray-100 font-medium text-base">
                            Skill Academia
                          </h5>
                          <p className="text-gray-600 dark:text-gray-400 text-xs font-normal">
                            Kolkata, West Bengal
                          </p>
                        </div>
                      </div>
                      <h3 className="text-lg text-gray-800 dark:text-gray-100 font-bold mt-5 mb-1">
                        Graphic Designer
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-normal">
                        During my time at this company, I served as a Graphic
                        Designer, specializing in creating impactful marketing
                        materials such as posters.
                      </p>
                    </div>
                    <div className="w-full lg:w-1/3 p-6 border-t border-b lg:border-t-0 lg:border-b-0 sm:border-l sm:border-r border-gray-300">
                      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                        <div className="text-xs text-center w-full bg-indigo-100 text-indigo-700 dark:text-indigo-600 rounded font-medium p-3 lg:mr-3">
                          Start Date: June, 2022
                        </div>
                        <div className="mt-4 text-center w-full lg:mt-0 text-xs bg-red-200 text-red-500 rounded font-medium p-3">
                          End Date: March, 2023
                        </div>
                      </div>
                      <div className="mt-6 mb-8 w-full bg-gray-100 dark:bg-gray-700 rounded p-4 relative">
                        <ul>
                          <li className="text-xs text-gray-600 dark:text-gray-400 font-normal tracking-normal">
                            - Contributed in social media posters.
                          </li>
                          <li className="text-xs text-gray-600 dark:text-gray-400 font-normal tracking-normal my-4">
                            - Made brochure for the company.
                          </li>
                          <li className="text-xs text-gray-600 dark:text-gray-400 font-normal tracking-normal">
                            - Made several designs.
                          </li>
                        </ul>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-gray-600 dark:text-gray-400 font-bold text-lg leading-6 mb-1 text-center">
                            2
                          </h2>
                          <p className="text-gray-800 dark:text-gray-100 text-sm leading-5 text-center">
                            Work Positions
                          </p>
                        </div>
                        <div>
                          <h2 className="text-gray-600 dark:text-gray-400 font-bold text-lg leading-6 mb-1 text-center">
                            2
                          </h2>
                          <p className="text-gray-800 dark:text-gray-100 text-sm leading-5 text-center">
                            Teams Assigned
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/3 p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <p>Tech I have used</p>
                      </div>

                      <div className="flex items-center justify-between md:space-x-5">
                        <div>
                          <p className="text-sm text-gray-800 dark:text-gray-100 font-normal mb-1 ">
                            Designing
                          </p>
                          <h2 className="text-sm  text-gray-600 dark:text-gray-400">
                            Adobe Photoshop, Adobe Illustrator, Adobe XD, Canva
                            etc.
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* stop */}
                  </div>
                  {/* Card code block end */}
                </div>
              </div>
            </div>

            {/* Nincompoop */}
            <div className="w-full bg-gray-200 dark:bg-gray-900">
              <div className="container mx-auto flex items-start justify-center">
                <div className="w-full">
                  <div className="flex flex-col lg:flex-row mx-auto w-full bg-white dark:bg-gray-800 shadow rounded">
                    <div className="w-full lg:w-1/3 p-6">
                      <div className="flex lg:flex-col">
                        <div className="w-12 h-12 rounded shadow">
                          <img
                            className="w-full h-full overflow-hidden object-cover rounded"
                            src="https://media.licdn.com/dms/image/C560BAQEhmbMP7wQpoA/company-logo_200_200/0/1662660599258?e=2147483647&v=beta&t=Jb9yGmePebjjvgWVaPjJjatQ1l-cuBrKMa7neO5b5eM"
                            alt="logo"
                          />
                        </div>
                        <div className="ml-3 lg:mt-3 lg:ml-0">
                          <h5 className="text-gray-800 dark:text-gray-100 font-medium text-base">
                            Nincompoop (Media Inminutes)
                          </h5>
                          <p className="text-gray-600 dark:text-gray-400 text-xs font-normal">
                            Kolkata, West Bengal
                          </p>
                        </div>
                      </div>
                      <h3 className="text-lg text-gray-800 dark:text-gray-100 font-bold mt-5 mb-1">
                        Graphic Designer
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-normal">
                        During my time at this company, I served as a Graphic
                        Designer, specializing in creating impactful marketing
                        materials such as posters.
                      </p>
                    </div>
                    <div className="w-full lg:w-1/3 p-6 border-t border-b lg:border-t-0 lg:border-b-0 sm:border-l sm:border-r border-gray-300">
                      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                        <div className="text-xs text-center w-full bg-indigo-100 text-indigo-700 dark:text-indigo-600 rounded font-medium p-3 lg:mr-3">
                          Start Date: October, 2022
                        </div>
                        <div className="mt-4 text-center w-full lg:mt-0 text-xs bg-red-200 text-red-500 rounded font-medium p-3">
                          End Date: March, 2023
                        </div>
                      </div>
                      <div className="mt-6 mb-8 w-full bg-gray-100 dark:bg-gray-700 rounded p-4 relative">
                        <ul className=" space-y-4">
                          <li className="text-xs text-gray-600 dark:text-gray-400 font-normal">
                            - Made poster and logos for the clients.
                          </li>
                          <li className="text-xs text-gray-600 dark:text-gray-400 font-normal">
                            - Contributed in social media posters.
                          </li>
                        </ul>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-gray-600 dark:text-gray-400 font-bold text-lg leading-6 mb-1 text-center">
                            1
                          </h2>
                          <p className="text-gray-800 dark:text-gray-100 text-sm leading-5 text-center">
                            Work Positions
                          </p>
                        </div>
                        <div>
                          <h2 className="text-gray-600 dark:text-gray-400 font-bold text-lg leading-6 mb-1 text-center">
                            1
                          </h2>
                          <p className="text-gray-800 dark:text-gray-100 text-sm leading-5 text-center">
                            Teams Assigned
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/3 p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <p>Tech I have used</p>
                      </div>

                      <div className="flex items-center justify-between md:space-x-5">
                        <div>
                          <p className="text-sm text-gray-800 dark:text-gray-100 font-normal mb-1 ">
                            Designing
                          </p>
                          <h2 className="text-sm  text-gray-600 dark:text-gray-400">
                            Adobe Photoshop, Adobe Illustrator, Adobe XD, Canva
                            etc.
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* stop */}
                  </div>
                  {/* Card code block end */}
                </div>
              </div>
            </div>
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
