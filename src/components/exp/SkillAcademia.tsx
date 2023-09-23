import React from "react";

const SkillAcademia = () => {
  return (
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
                During my time at this company, I served as a Graphic Designer,
                specializing in creating impactful marketing materials such as
                posters.
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
                    Adobe Photoshop, Adobe Illustrator, Adobe XD, Canva etc.
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

export default SkillAcademia;
