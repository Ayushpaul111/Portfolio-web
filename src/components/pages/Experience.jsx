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
            knowledge within the field.
          </h3>
        </div>

        <div className="md:flex md:flex-col md:space-y-5">
          <div className="text-xl text">
            <h1>Companies:</h1>
          </div>
          {/* company cards */}
          <div className="flex flex-col space-y-5">
            {/* mediqueue */}

            <div className="w-full bg-gray-200 dark:bg-gray-900">
              <div className="container mx-auto flex items-start justify-center">
                <div className="w-full">
                  <div className="flex flex-col lg:flex-row mx-auto w-full bg-white dark:bg-gray-800 shadow rounded">
                    <div className="w-full lg:w-1/3 p-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded shadow">
                          <img
                            className="w-full h-full overflow-hidden object-cover rounded"
                            src="https://play-lh.googleusercontent.com/SHqJPBvECZHig7yJ4SKord-SCyPzEDa_dLpazwJ5oqNXt2BfdXcmHPP5rNWKoVlAqX4=w240-h480-rw"
                            alt="logo"
                          />
                        </div>
                        <div className="ml-3">
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
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded shadow">
                          <img
                            className="w-full h-full overflow-hidden object-cover rounded"
                            src="https://media.licdn.com/dms/image/C560BAQGLl5g9wT4ZsQ/company-logo_200_200/0/1652106728326?e=2147483647&v=beta&t=oRWJeUKeVe9u4mHsWOXTSX6D3Ct848XnM_WUQOKBPTw"
                            alt="logo"
                          />
                        </div>
                        <div className="ml-3">
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
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded shadow">
                          <img
                            className="w-full h-full overflow-hidden object-cover rounded"
                            src="https://media.licdn.com/dms/image/C560BAQGLl5g9wT4ZsQ/company-logo_200_200/0/1652106728326?e=2147483647&v=beta&t=oRWJeUKeVe9u4mHsWOXTSX6D3Ct848XnM_WUQOKBPTw"
                            alt="logo"
                          />
                        </div>
                        <div className="ml-3">
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

        <div className="md:flex md:flex-col md:space-y-5">
          <div className="text-xl text">
            <h1>Project:</h1>
          </div>
          {/* sm:space-y-5 >> add to next line */}
          <div className="md:flex md:flex-row  md:space-x-10">
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
      </div>
    </section>
  );
};

export default Experience;
