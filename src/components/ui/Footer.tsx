import React from "react";
const footer = () => {
  return (
    <footer className="flex items-center justify-center">
      <div className="mb-8 flex w-11/12 max-w-2xl flex-col items-start">
        <hr className="border-1 mb-8 w-full border-gray-200 dark:border-[#1A2936]" />
        <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <a href="/">
              <a className="text-gray-500 transition hover:text-gray-600">
                Home
              </a>
            </a>
            <a href="/about">
              <a className="text-gray-500 transition hover:text-gray-600">
                About
              </a>
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <a href="/about">
              <a className="text-gray-500 transition hover:text-gray-600">
                About
              </a>
            </a>
            <a href="/experience">
              <a className="text-gray-500 transition hover:text-gray-600">
                Experience
              </a>
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <a
              className="text-gray-500 transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ayushpaul111"
            >
              GitHub
            </a>
            <a
              className="text-gray-500 transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/ayushpaul1111/"
            >
              Instagram
            </a>
          </div>
        </div>
        <p className="flex self-center text-center text-sm text-gray-600 dark:text-gray-300">
          Created with ❤ by Ayush Paul.
        </p>
        <p className="mb-8 mt-2 self-center text-sm text-gray-600 dark:text-gray-300">
          Inspiration:{" "}
          <a
            className="text-blue-500 underline underline-offset-4 hover:text-blue-600"
            href="https://leerob.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            Lee Robinson
          </a>
        </p>
      </div>
    </footer>
  );
};

export default footer;
