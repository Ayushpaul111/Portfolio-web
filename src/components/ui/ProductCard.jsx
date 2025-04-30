import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function ProductCard({
  id,
  title,
  description,
  mainImage,
  sample1,
  sample2,
  additionalImages = [],
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const allImages = [...additionalImages];
  if (sample1) allImages.push(sample1);
  if (sample2) allImages.push(sample2);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full max-w-[48rem] mx-auto">
      <div className=" rounded-xl overflow-hidden text-white shadow-md transition-all duration-300 hover:shadow-lg bg-gray-200 dark:bg-[#1A2936] bg-clip-border">
        {/* Main card content */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 p-6 flex items-center justify-center">
            <div className="bg-white rounded-xl overflow-hidden w-full aspect-square">
              <img
                src={mainImage || "/placeholder.svg"}
                alt={title}
                className="w-full h-full object-cover transition-transform"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-subHead font-semibold mb-2">
                {title}
              </h2>
              <p className="text-base font-para text-gray-400 mb-4">
                {description}
              </p>
            </div>
            <div className="mt-auto flex justify-center">
              <button
                onClick={toggleExpand}
                className="flex items-center gap-2 rounded-lg py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30"
                aria-expanded={isExpanded}
                aria-label={
                  isExpanded
                    ? "Collapse product details"
                    : "Expand product details"
                }
              >
                {isExpanded ? "Show Less" : "Show More"}
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Collapsible content */}
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: isExpanded ? `${contentHeight}px` : "0px",
          }}
        >
          <div ref={contentRef} className="p-6">
            <div className="grid grid-cols-2 gap-4">
              {[sample1, sample2].map((image, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden aspect-square"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Product image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
