import React from "react";

const Lyik = () => {
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto flex items-start justify-center">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row mx-auto w-full bg-white dark:bg-[#1A2936] shadow rounded">
            <div className="w-full lg:w-1/3 p-6">
              <div className="flex lg:flex-col">
                <div className="w-12 h-12 rounded shadow">
                  <img
                    className="w-full h-full overflow-hidden object-cover rounded"
                    src="https://media.licdn.com/dms/image/D560BAQGnzgTTggiB_g/company-logo_200_200/0/1693575608290/lyik_technologies_logo?e=1729123200&v=beta&t=SzsDpZn7rhrrZkCl43eLfKsqlmBX14itFDDUm5a_jRs"
                  />
                </div>
                <div className="ml-3 lg:mt-3 lg:ml-0">
                  <h5 className="text-[#1A2936] dark:text-gray-100 font-medium text-base">
                    LYIK Technologies
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-normal">
                    Bengaluru, Karnataka
                  </p>
                </div>
              </div>
              <h3 className="text-lg text-[#1A2936] dark:text-gray-100 font-bold mt-5 mb-1">
                Full Stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-normal">
                I am currently working as a Full-Stack Intern Developer in my
                current role.
              </p>
            </div>
            <div className="w-full lg:w-1/3 p-6 border-t border-b lg:border-t-0 lg:border-b-0 sm:border-l sm:border-r border-gray-300">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                <div className="text-xs text-center w-full bg-indigo-100 text-indigo-700 dark:text-indigo-600 rounded font-medium p-3 lg:mr-3">
                  Start Date: September, 2023
                </div>
                <div className="mt-4 text-center w-full lg:mt-0 text-xs bg-red-200 text-red-500 rounded font-medium p-3">
                  End Date: Current
                </div>
              </div>
              <div className="mt-6 mb-8 w-full bg-gray-100 dark:bg-gray-700 rounded p-4 relative">
                <ul className=" space-y-4">
                  <li className="text-xs text-gray-600 dark:text-gray-400 font-normal">
                    - Contributed in Website.
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-gray-600 dark:text-gray-400 font-bold text-lg leading-6 mb-1 text-center">
                    1
                  </h2>
                  <p className="text-[#1A2936] dark:text-gray-100 text-sm leading-5 text-center">
                    Work Positions
                  </p>
                </div>
                <div>
                  <h2 className="text-gray-600 dark:text-gray-400 font-bold text-lg leading-6 mb-1 text-center">
                    1
                  </h2>
                  <p className="text-[#1A2936] dark:text-gray-100 text-sm leading-5 text-center">
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
                  <p className="text-sm text-[#1A2936] dark:text-gray-100 font-normal mb-1 ">
                    Developing
                  </p>
                  <h2 className="text-sm  text-gray-600 dark:text-gray-400">
                    React Js, Next Js, Tailwind, Docker etc.
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
  );
};

export default Lyik;
