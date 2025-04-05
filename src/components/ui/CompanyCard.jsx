import React from "react";

/**
 * CompanyCard component - displays information about a company experience
 * Fixed layout issues to prevent page width shifts
 *
 * @param {Object} props
 * @param {Object} props.company - Company data object
 */
const CompanyCard = ({ company }) => {
  const {
    name,
    location,
    logoUrl,
    position,
    description,
    startDate,
    endDate,
    responsibilities,
    workPositions,
    teamsAssigned,
    technologies,
  } = company;

  return (
    <div className="w-full bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row w-full bg-white dark:bg-[#1A2936] shadow rounded overflow-hidden">
            {/* Company info column */}
            <div className="w-full lg:w-1/3 p-6 flex flex-col">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded shadow overflow-hidden flex-shrink-0">
                  <img
                    className="w-full h-full object-cover rounded"
                    src={logoUrl}
                    alt={`${name} logo`}
                    loading="lazy"
                  />
                </div>
                <div className="ml-3">
                  <h5 className="text-[#1A2936] font-subHead dark:text-gray-100 font-medium text-base">
                    {name}
                  </h5>
                  <p className="text-gray-600 font-para dark:text-gray-400 text-xs font-normal">
                    {location}
                  </p>
                </div>
              </div>
              <h3 className="text-lg font-subHead text-[#1A2936] dark:text-gray-100 font-bold mt-5 mb-1">
                {position}
              </h3>
              <p className="text-gray-600 font-para dark:text-gray-400 text-sm font-normal">
                {description}
              </p>
            </div>

            {/* Timeline & responsibilities column */}
            <div className="w-full lg:w-1/3 p-6 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300">
              {/* Date range */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                <div className="text-xs font-para text-center w-full bg-gray-100 dark:bg-gray-700 rounded font-medium p-3 lg:mr-3">
                  Start Date: {startDate}
                </div>
                <div className="mt-4 font-para text-center w-full lg:mt-0 text-xs bg-gray-100 dark:bg-gray-700 rounded font-medium p-3">
                  End Date: {endDate}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-6 mb-8 w-full bg-gray-100 dark:bg-gray-700 rounded p-4">
                <ul className="space-y-4">
                  {responsibilities.map((responsibility, index) => (
                    <li
                      key={index}
                      className="text-xs font-para text-gray-600 dark:text-gray-400 font-normal"
                    >
                      - {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-gray-600 font-para dark:text-gray-400 font-bold text-lg leading-6 mb-1 text-center">
                    {workPositions}
                  </h2>
                  <p className="text-[#1A2936] font-para dark:text-gray-100 text-sm leading-5 text-center">
                    Work Positions
                  </p>
                </div>
                <div>
                  <h2 className="text-gray-600 font-para dark:text-gray-400 font-bold text-lg leading-6 mb-1 text-center">
                    {teamsAssigned}
                  </h2>
                  <p className="text-[#1A2936] font-para dark:text-gray-100 text-sm leading-5 text-center">
                    Teams Assigned
                  </p>
                </div>
              </div>
            </div>

            {/* Technologies column */}
            <div className="w-full lg:w-1/3 p-6">
              <div className="mb-4 font-para flex items-center">
                <p className="font-subHead font-semibold">Tech I have used</p>
              </div>

              <div className="flex flex-col space-y-4">
                {technologies.development && (
                  <div>
                    <p className="text-sm font-para text-[#1A2936] dark:text-gray-100 font-normal mb-1">
                      Developing
                    </p>
                    <h2 className="text-sm font-para text-gray-600 dark:text-gray-400 break-words">
                      {technologies.development}
                    </h2>
                  </div>
                )}

                {technologies.design && (
                  <div>
                    <p className="text-sm font-para text-[#1A2936] dark:text-gray-100 font-normal mb-1">
                      Designing
                    </p>
                    <h2 className="text-sm font-para text-gray-600 dark:text-gray-400 break-words">
                      {technologies.design}
                    </h2>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
