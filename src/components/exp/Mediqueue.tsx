import React from "react";

const Mediqueue = () => {
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-900 ">
      <div className="container mx-auto flex items-start justify-center">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row mx-auto w-full bg-white dark:bg-gray-800 shadow rounded">
            <div className="w-full lg:w-1/3 p-6 ">
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
                I have gained valuable experience and expertise as a Frontend
                Developer and UI/UX Designer, honing my skills in various
                aspects of design and development. I successfully implemented my
                learnings in real-world projects during my tenure at this
                company.
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
                    - Created the login ui design for the mobile application
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

              <div className="flex lg:flex-col flex-row lg:items-start items-center justify-between md:space-x-5 lg:space-y-5">
                <div>
                  <p className="text-sm text-gray-800 dark:text-gray-100 font-normal mb-1 ">
                    Developing
                  </p>
                  <h2 className="text-sm  text-gray-600 dark:text-gray-400 ">
                    HTML, CSS, JavaScript.
                  </h2>
                </div>

                <div className=" lg:items-start lg:hidden md:block">
                  <p className="text-sm text-gray-800 dark:text-gray-100 font-normal mb-1 ">
                    Designing
                  </p>
                  <h2 className="text-sm  text-gray-600 dark:text-gray-400">
                    Photoshop, Illustrator, XD
                  </h2>
                </div>
              </div>
              <div className=" lg:items-start md:hidden lg:block pt-4">
                <p className="text-sm text-gray-800 dark:text-gray-100 font-normal mb-1 ">
                  Designing
                </p>
                <h2 className="text-sm  text-gray-600 dark:text-gray-400">
                  Photoshop, Illustrator, XD
                </h2>
              </div>
            </div>
            {/* stop */}
          </div>
          {/* Card code block end */}
        </div>
      </div>
    </div>
  );
};

export default Mediqueue;
