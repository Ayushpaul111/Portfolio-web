import React from "react";

const Card = ({ src, title, titleHref, previewHref, description }) => {
  return (
    <div className="relative flex w-full max-w-[48rem] flex-col md:flex-row rounded-xl bg-gray-200 dark:bg-[#1A2936] bg-clip-border text-white shadow-md">
      <div className="relative m-0 w-auto md:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-b-none md:rounded-xl md:rounded-r-none bg-black bg-clip-border text-gray-600">
        <a href={previewHref} rel="noopener noreferrer">
          <img src={src} alt={title} className="h-full w-full object-cover" />
        </a>
      </div>
      <div className="p-6">
        <h1 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h1>
        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-400 antialiased">
          {description}
        </p>
        <a className="inline-block" href={titleHref} rel="noopener noreferrer">
          <button
            className="flex select-none items-center gap-2 rounded-lg py-3 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
