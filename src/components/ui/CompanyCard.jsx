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
    <div className="w-full bg-gray-50/50 dark:bg-gray-950/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/30 dark:bg-gray-900/40 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 dark:border-gray-800/30 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Header with Logo and Company Info */}
            <div className="flex items-center p-6 border-b border-gray-100/30 dark:border-gray-800/30 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-md overflow-hidden flex-shrink-0 bg-white/80 dark:bg-gray-800/50 border border-white/30 dark:border-gray-700/30 shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  src={logoUrl || "/placeholder.svg"}
                  alt={`${name} logo`}
                  loading="lazy"
                />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-subHead font-semibold text-gray-900 dark:text-white tracking-tight">
                  {name}
                </h2>
                <p className="text-sm font-para text-gray-600 dark:text-gray-300">
                  {location}
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-6 sm:p-8">
              {/* Position and Description */}
              <div className="mb-6">
                <h3 className="text-lg font-medium font-subHead text-gray-900 dark:text-white">
                  {position}
                </h3>
                <p className="mt-2 text-sm font-para text-gray-600 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Date Range */}
              <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6">
                <div className="flex-1 py-2 text-center border-b-2 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                  <p className="text-xs font-medium font-subHead text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                    Start Date
                  </p>
                  <p className="mt-1 text-sm font-semibold font-para text-gray-900 dark:text-white">
                    {startDate}
                  </p>
                </div>
                <div className="flex-1 py-2 text-center border-b-2 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                  <p className="text-xs font-medium font-subHead text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                    End Date
                  </p>
                  <p className="mt-1 text-sm font-semibold font-para text-gray-900 dark:text-white">
                    {endDate}
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-sm font-medium font-subHead text-gray-900 dark:text-white mb-3">
                  Responsibilities
                </h4>
                <ul className="space-y-2">
                  {responsibilities.map((responsibility, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm font-para text-gray-600 dark:text-gray-300"
                    >
                      <svg
                        className="w-4 h-4 mr-2 mt-0.5 text-pink-500 flex-shrink-0"
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
                <h4 className="text-sm font-medium font-subHead text-gray-900 dark:text-white mb-3">
                  Technologies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {technologies.development && (
                    <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-lg p-3 border border-white/10 dark:border-gray-700/20">
                      <p className="text-xs font-medium font-subHead text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                        Development
                      </p>
                      <p className="mt-1 text-sm font-para text-gray-700 dark:text-gray-200">
                        {technologies.development}
                      </p>
                    </div>
                  )}
                  {technologies.design && (
                    <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-lg p-3 border border-white/10 dark:border-gray-700/20">
                      <p className="text-xs font-medium font-subHead text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                        Design
                      </p>
                      <p className="mt-1 text-sm font-para text-gray-700 dark:text-gray-200">
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
