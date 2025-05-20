const Card = ({ src, title, titleHref, previewHref, description }) => {
  return (
    <div className="relative flex w-full max-w-[48rem] flex-col md:flex-row rounded-xl bg-white/20 dark:bg-gray-900/30 backdrop-blur-md border border-white/20 dark:border-gray-800/30 text-gray-800 dark:text-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative m-0 w-full md:w-2/5 shrink-0 overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none bg-black/50 backdrop-blur-sm bg-clip-border border border-white/10 dark:border-gray-800/20">
        <a
          href={previewHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Preview of ${title}`}
        >
          <img
            src={src || "/placeholder.svg"}
            alt={title}
            className="h-60 md:h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </a>
      </div>
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h2 className="mb-2 font-subHead text-2xl font-semibold leading-snug tracking-normal text-gray-900 dark:text-white antialiased">
            {title}
          </h2>
          <p className="mb-4 md:mb-8 font-para text-base font-normal leading-relaxed text-gray-600 dark:text-gray-300 antialiased">
            {description}
          </p>
        </div>
        <a
          className="inline-block mt-auto"
          href={titleHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read more about ${title}`}
        >
          <button
            className="flex select-none items-center gap-2 rounded-lg py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/20 active:bg-pink-500/30 backdrop-blur-sm border border-pink-500/10 shadow-sm"
            type="button"
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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
