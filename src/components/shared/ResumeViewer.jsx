"use client";

import { useState, useEffect } from "react";

const ResumeViewer = ({ isOpen, onClose, pdfUrl }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300); // Match transition duration
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/20">
      <div
        className={`flex flex-col relative bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 shadow-xl rounded-lg w-full max-w-5xl h-5/6 transition-all duration-300 ${
          isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/20 dark:border-gray-700/30">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white font-title">
            Resume
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-full p-1.5  dark:border-gray-700/20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 p-1 overflow-hidden">
          <div className="w-full h-full rounded-lg overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-inner">
            <iframe
              src={pdfUrl}
              className="w-full h-full rounded border-none"
              title="Resume PDF"
              frameBorder="0"
              loading="lazy"
            />
          </div>
        </div>

        <div className="p-4 border-t border-white/20 dark:border-gray-700/30 flex justify-between">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm text-gray-800 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-gray-700/40 rounded-lg font-subHead border border-white/10 dark:border-gray-700/20 shadow-sm transition-all duration-200"
          >
            Close
          </button>
          <a
            href={pdfUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600/90 backdrop-blur-sm text-white hover:bg-blue-700/90 rounded-lg font-subHead border border-blue-500/30 shadow-sm transition-all duration-200"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;
