import React from "react";

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
    technologies,
  } = company;

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Header with Logo and Company Info */}
            <div className="flex items-center p-6 border-b border-gray-100 dark:border-gray-800">
              <div className="w-14 h-14 rounded-md overflow-hidden flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  src={logoUrl}
                  alt={`${name} logo`}
                  loading="lazy"
                />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
                  {name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {location}
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-6 sm:p-8">
              {/* Position and Description */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  {position}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Date Range */}
              <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6">
                <div className="flex-1 py-2 text-center border-b-2 border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Start Date
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {startDate}
                  </p>
                </div>
                <div className="flex-1 py-2 text-center border-b-2 border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    End Date
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {endDate}
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Responsibilities
                </h4>
                <ul className="space-y-2">
                  {responsibilities.map((responsibility, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                    >
                      <svg
                        className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Technologies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {technologies.development && (
                    <div>
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        Development
                      </p>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {technologies.development}
                      </p>
                    </div>
                  )}
                  {technologies.design && (
                    <div>
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        Design
                      </p>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {technologies.design}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
