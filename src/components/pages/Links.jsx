import { useState, useEffect } from "react";
import { BiLogoLinkedin, BiLogoGithub, BiLogoInstagram } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import BlurText from "../ui/BlurText";
import FadeContent from "../ui/FadeContent";

const Links = () => {
  const [linksData, setLinksData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_SHEET_URLS;

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    if (!API_URL) {
      setError("API configuration missing. Please contact administrator.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success && Array.isArray(data.data)) {
        setLinksData(data.data);
      } else {
        setError(data.error || "Invalid data format received");
      }
    } catch (err) {
      console.error("Failed to fetch links:", err);
      setError(`Failed to load links: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleAnimationComplete = () => {
    // Animation completion handler - can be used for analytics or chaining animations
  };

  const socialLinks = [
    {
      icon: BiLogoLinkedin,
      label: "ayushpaul1111",
      url: "https://www.linkedin.com/in/ayushpaul1111/",
      color: "hover:text-blue-400",
    },
    {
      icon: BiLogoGithub,
      label: "Ayushpaul111",
      url: "https://github.com/Ayushpaul111",
      color: "hover:text-gray-300",
    },
    {
      icon: BiLogoInstagram,
      label: "_ayush_paul_",
      url: "https://www.instagram.com/_ayush_paul_/",
      color: "hover:text-pink-400",
    },
  ];

  const handleImageError = (e) => {
    e.target.style.display = "none";
  };

  const renderSkeletonCard = (index) => (
    <div
      key={`skeleton-${index}`}
      className="rounded-xl overflow-hidden border border-white/20 dark:border-gray-800/30 bg-white/10 dark:bg-gray-900/20 backdrop-blur-md animate-pulse shadow-lg"
    >
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-2/5 p-6 flex items-center justify-center">
          <div className="bg-neutral-700 rounded-xl w-full aspect-square" />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-3/5 p-6 relative space-y-4">
          {/* Icon (top-right) */}
          <div className="absolute top-4 right-4 w-5 h-5 bg-neutral-700 rounded" />

          {/* Title */}
          <div className="h-6 w-3/4 bg-neutral-700 rounded" />

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-neutral-700 rounded" />
            <div className="h-4 w-2/3 bg-neutral-700 rounded" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSkeletonCards = () => (
    <div className="space-y-6 w-full">
      {[...Array(2)].map((_, index) => renderSkeletonCard(index))}
    </div>
  );

  const renderLoadingState = () => (
    <div className="flex items-center space-x-2 text-neutral-400">
      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
      <span className="font-para">Loading links...</span>
    </div>
  );

  const renderErrorState = () => (
    <div className="text-red-400 font-para">{error}</div>
  );

  const renderEmptyState = () => (
    <div className="text-neutral-400 font-para">
      No links available at the moment.
    </div>
  );

  const renderLinkCard = (link, index) => (
    <FadeContent
      key={link.title + index}
      blur={true}
      duration={1800 + index * 200}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className="group cursor-pointer">
        <a
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label={`Visit ${link.title}`}
        >
          <div className="w-full max-w-[48rem] mx-auto rounded-xl overflow-hidden text-gray-800 dark:text-white shadow-lg transition-all duration-300 hover:shadow-xl bg-white/20 dark:bg-gray-900/30 backdrop-blur-md border border-white/20 dark:border-gray-800/30 shine-effect">
            {/* Main card content */}
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              {link.image && (
                <div className="w-full md:w-2/5 p-6 flex items-center justify-center">
                  <div className="bg-white/80 dark:bg-gray-800/50 rounded-xl overflow-hidden w-full aspect-square shadow-inner backdrop-blur-sm border border-white/30 dark:border-gray-700/30">
                    <img
                      src={link.image}
                      alt={link.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-[1.02]"
                      onError={handleImageError}
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
              {/* Content Section */}
              <div className="w-full md:w-3/5 p-6 flex flex-col justify-between">
                <div className="absolute top-4 right-4 text-neutral-400 group-hover:text-white transition-colors">
                  <FaLocationArrow className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-subHead font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-neutral-200 transition-colors">
                    {link.title}
                  </h2>
                  {link.description && (
                    <p className="text-base font-para text-gray-600 dark:text-gray-300 mb-4">
                      {link.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </FadeContent>
  );

  const renderSocialLinks = () => (
    <FadeContent
      blur={true}
      duration={1200}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className="max-w-screen-lg flex flex-col items-start text-white pl-4 pt-8 md:-ml-3">
        <h2 className="font-subHead text-lg font-semibold italic pb-4">
          Social Profiles
        </h2>
        <div className="space-y-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <div
                key={social.label}
                className={`flex items-center text-neutral-500 md:hover:scale-105 transition-all md:hover:pl-1 ${social.color}`}
              >
                <IconComponent className="text-2xl" aria-hidden="true" />
                <a
                  className="pl-2 cursor-pointer font-subHead"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.label} profile`}
                >
                  {social.label}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </FadeContent>
  );

  const renderFeaturedLinks = () => (
    <FadeContent
      blur={true}
      duration={1600}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className="max-w-screen-lg flex flex-col items-start text-white pl-4 pt-8 md:-ml-3">
        <h2 className="font-subHead text-lg font-semibold italic pb-4">
          Featured Links
        </h2>

        {loading && renderSkeletonCards()}
        {error && renderErrorState()}
        {!loading && !error && linksData.length === 0 && renderEmptyState()}

        {!loading && !error && linksData.length > 0 && (
          <div className="space-y-6 w-full">
            {linksData.map(renderLinkCard)}
          </div>
        )}
      </div>
    </FadeContent>
  );

  return (
    <section className="min-h-screen">
      <div className="max-w-screen-lg flex flex-col items-start text-white md:max-w-2xl space-y-10">
        <div className="flex flex-col w-full">
          {/* Header Section */}
          <header className="max-w-screen-lg flex flex-col items-start text-white pl-1 md:pl-4 pt-5 md:-ml-3">
            <h1 className="font-semibold text-4xl font-title">
              <BlurText
                text="My Links"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
              />
            </h1>
            <p className="font-subHead mt-1">
              <BlurText
                text="Connect with me across platforms"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
              />
            </p>
          </header>

          {/* Featured Links */}
          {renderFeaturedLinks()}

          {/* Social Links */}
          {renderSocialLinks()}

          {/* Footer */}
          <FadeContent
            blur={true}
            duration={1900}
            easing="ease-out"
            initialOpacity={0}
          >
            <footer className="max-w-screen-lg flex flex-col items-start text-white pl-4 pt-8 md:-ml-3">
              <p className="font-para font-medium text-neutral-400">
                Feel free to reach out and connect with me on any of these
                platforms. I'm always open to discussing new opportunities and
                collaborations.
              </p>
            </footer>
          </FadeContent>
        </div>
      </div>
      <style>
        {`
          .shine-effect {
            position: relative;
            overflow: hidden;
          }
          .shine-effect::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 50%;
            height: 100%;
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(255, 255, 255, 0.3) 50%,
              transparent 100%
            );
            transform: skewX(-25deg);
            transition: left 0.7s ease-out;
          }
          .group:hover .shine-effect::before {
            left: 100%;
            opacity: 0;
          }
        `}
      </style>
    </section>
  );
};

export default Links;
