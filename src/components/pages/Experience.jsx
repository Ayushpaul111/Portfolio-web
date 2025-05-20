import React from "react";
import Card from "../ui/Card";
import BlurText from "../ui/BlurText";
import FadeContent from "../ui/FadeContent";
import CompanyCard from "../ui/CompanyCard";
import ProductCard from "../ui/ProductCard";

// Project data - moved outside component for better organization
const PROJECTS = [
  {
    id: 1,
    title: "Dayananda Sagar University Library System",
    description:
      "An efficient and robust library management system for seamless student and system data administration.",
    src: "../src/assets/DSU-Library.jpg", // Using path imports for better build optimization
    previewHref:
      "https://drive.google.com/file/d/1y2bi4RRD5i-yIQGy_V5COCKaza-8EcoP/view?usp=sharing",
    titleHref: "https://github.com/Zafcar/Special-topics-2/tree/Front-end",
  },
  {
    id: 2,
    title: "Weather UI",
    description:
      "A sleek and user-friendly weather app with an efficient and modern UI.",
    src: "../src/assets/iitm.png",
    previewHref: "https://ayush-iitm.netlify.app/",
    titleHref: "https://github.com/Zafcar/Special-topics-2/tree/Front-end",
  },
  {
    id: 3,
    title: "Bill Management System For Small Shops",
    description: "A simple bill management system for small stores.",
    src: "https://img.freepik.com/free-vector/invoice-concept-illustration_114360-2411.jpg?w=740&t=st=1699010460~exp=1699011060~hmac=908591bf582ff4a8c376cb8f26dcaf2cc2744b133bd62fcc4d25697a1b6721ce",
    previewHref: "https://github.com/Ayushpaul111/Store-billing-system",
    titleHref: "https://github.com/Ayushpaul111/Store-billing-system",
  },
];

// Company data - consolidated for better maintainability
const COMPANIES = [
  {
    id: "messy-programmer",
    name: "Messy Programmer",
    location: "Remote",
    logoUrl:
      "https://media.licdn.com/dms/image/v2/D560BAQHafjq4CvE4zQ/company-logo_200_200/company-logo_200_200/0/1708921438416/messyprogrammer_logo?e=2147483647&v=beta&t=4pbik2rApZ0wd0z4BaLz0sMj15yYC-u_E_iYOhJvlmM",
    position: "Full Stack Developer (Full Time)",
    description: "I am currently working as a Full-Stack Developer.",
    startDate: "Nov, 2024",
    endDate: "Present",
    responsibilities: [
      "Contribute in Autometions.",
      "Contribute in Full-stack development.",
      "Provide consultation for technical solutions.",
    ],

    technologies: {
      development:
        "Next Js, MongoDB, Zapier, App Script, Google APIs, Docker, GoHighLevel, Firebase etc.",
    },
  },
  {
    id: "lyik",
    name: "LYIK Technologies",
    location: "Bengaluru, Karnataka",
    logoUrl:
      "https://store-images.s-microsoft.com/image/apps.22172.98d12f57-368b-4a9a-8ac2-d4926608f98f.0d164c8e-81af-44c8-92d0-25ab3ec447b8.c7eb27fb-7ee1-4d98-a641-bd623960e3f2",
    position: "Web Developer (Intern)",
    description: "I was working as a Web Developer Intern Developer.",
    startDate: "Sept, 2023",
    endDate: "Dec, 2023",
    responsibilities: ["Contributed in Website."],

    technologies: {
      development: "React Js, Next Js, Tailwind, Docker etc.",
    },
  },
  {
    id: "mediqueue",
    name: "Mediqueue",
    location: "Cooch Behar, West Bengal",
    logoUrl:
      "https://play-lh.googleusercontent.com/SHqJPBvECZHig7yJ4SKord-SCyPzEDa_dLpazwJ5oqNXt2BfdXcmHPP5rNWKoVlAqX4=w240-h480-rw",
    position: "Front-end Developer (Intern)",
    description:
      "I have gained valuable experience and expertise as a Frontend Developer and UI/UX Designer, honing my skills in various aspects of design and development. I successfully implemented my learnings in real-world projects during my tenure at this company.",
    startDate: "March, 2022",
    endDate: "October, 2022",
    responsibilities: [
      "Contributed in main website developing",
      "Created the login ui design for the mobile application",
      "Made poster and logos for the clients",
    ],

    technologies: {
      development: "HTML, CSS, JavaScript.",
      design: "Photoshop, Illustrator, XD",
    },
  },
  {
    id: "skill-academia",
    name: "Skill Academia",
    location: "Kolkata, West Bengal",
    logoUrl:
      "https://media.licdn.com/dms/image/C560BAQGLl5g9wT4ZsQ/company-logo_200_200/0/1652106728326?e=2147483647&v=beta&t=oRWJeUKeVe9u4mHsWOXTSX6D3Ct848XnM_WUQOKBPTw",
    position: "Graphic Designer (Part-time)",
    description:
      "During my time at this company, I served as a Graphic Designer, specializing in creating impactful marketing materials such as posters.",
    startDate: "June, 2022",
    endDate: "March, 2023",
    responsibilities: [
      "Contributed in social media posters.",
      "Made brochure for the company.",
      "Made several designs.",
    ],

    technologies: {
      design: "Adobe Photoshop, Adobe Illustrator, Adobe XD, Canva etc.",
    },
  },
  {
    id: "media-in-minutes",
    name: "Nincompoop (Media Inminutes)",
    location: "Kolkata, West Bengal",
    logoUrl:
      "https://media.licdn.com/dms/image/C560BAQEhmbMP7wQpoA/company-logo_200_200/0/1662660599258?e=2147483647&v=beta&t=Jb9yGmePebjjvgWVaPjJjatQ1l-cuBrKMa7neO5b5eM",
    position: "Graphic Designer (Part-time)",
    description:
      "During my time at this company, I served as a Graphic Designer, specializing in creating impactful marketing materials such as posters.",
    startDate: "October, 2022",
    endDate: "March, 2023",
    responsibilities: [
      "Made poster and logos for the clients.",
      "Contributed in social media posters.",
    ],
    workPositions: 1,
    teamsAssigned: 1,
    technologies: {
      design: "Adobe Photoshop, Adobe Illustrator, Adobe XD, Canva etc.",
    },
  },
];

const PRODUCTS = [
  {
    id: 1,
    title: "QR Menu + Restaurant Management",
    description:
      "With this, they're saving around 20,000 rupees every month and also getting a clear insight into which dishes are performing well and how the expenses are going. They can easily manage menu items, control charges, availability, and more. Their customers are also happy with how quickly and smoothly orders are being handled now.",
    mainImage: "./product/bonbhojan.webp",
    sample1: "./product/bonbhojanMain.png",
    sample2: "./product/bonbhojan.webp",
  },
];

// Main component
const Experience = () => {
  return (
    <section>
      <div className="max-w-screen-lg flex flex-col items-start text-white pl-4 pt-5 md:-ml-3pt-5 md:max-w-2xl md:-ml-3 space-y-10">
        {/* Header section */}
        <div className="space-y-5">
          <h1 className="font-semibold text-4xl font-title">
            <BlurText
              text="Experience"
              delay={150}
              animateBy="words"
              direction="top"
            />
          </h1>
          <div className="space-y-4">
            <FadeContent
              blur={true}
              duration={1200}
              easing="ease-out"
              initialOpacity={0}
            >
              <p className="font-para font-medium">
                During my previous engagements, I acquired valuable experience
                in various roles such as web developer, Mern Developer and UI/UX
                designer. Additionally, as a Computer Science student, I have
                developed proficient skills in web development. Throughout my
                journey, I have actively contributed to numerous projects, with
                one notable accomplishment being my role as the front-end lead
                in a web application developed for Dayananda Sagar University
                and Dayananda Sagar College of Engineering. This experience has
                provided me with a comprehensive understanding of the
                responsibilities associated with this position.
              </p>
            </FadeContent>

            <FadeContent
              blur={true}
              duration={1600}
              easing="ease-out"
              initialOpacity={0}
            >
              <p className="font-para font-medium">
                The primary motivation behind my pursuit of this internship
                opportunity is to further augment my skill set. By immersing
                myself in new challenges and working alongside industry
                professionals, I am confident that I will be able to refine my
                abilities and broaden my knowledge within the field.
              </p>
            </FadeContent>
          </div>
        </div>

        {/* Companies section */}
        <div className="w-full space-y-5">
          <h2 className="font-subHead text-xl font-semibold italic">
            <BlurText
              text="Companies:"
              delay={400}
              animateBy="words"
              direction="top"
            />
          </h2>

          <FadeContent
            blur={true}
            duration={2000}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="flex flex-col space-y-5">
              {COMPANIES.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </FadeContent>
        </div>

        {/* Products section */}
        <div className="w-full space-y-5">
          <h2 className="font-subHead text-xl font-semibold italic">
            <BlurText
              text="Products:"
              delay={100}
              animateBy="words"
              direction="top"
            />
          </h2>

          <FadeContent
            blur={true}
            duration={500}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="grid grid-cols-1 gap-8 md:gap-5">
              <p className="font-para">
                Alongside my experience, projects, and freelance work, I've also
                built and marketed a few products on my own — and I'm proud to
                say that several clients are actively using them today.
              </p>
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </FadeContent>
        </div>

        {/* Projects section */}
        <div className="w-full space-y-5">
          <h2 className="font-subHead text-xl font-semibold italic">
            Projects:
          </h2>

          <div className="grid grid-cols-1 gap-8 md:gap-5">
            {PROJECTS.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                previewHref={project.previewHref}
                src={project.src}
                titleHref={project.titleHref}
              />
            ))}
          </div>
        </div>

        {/* Certificates section */}
        <div className="space-y-5">
          <h3 className="text-xl font-subHead font-medium">
            Certificate and others:
          </h3>
          <p className="font-para">
            You will get every Certificates and other documents in this drive:
          </p>

          <a
            className="inline-block"
            target="_blank"
            href="https://drive.google.com/drive/folders/1Ccl9fVm9xxBB4V5U6Y0mUgEUHySGu50a?usp=sharing"
            rel="noopener noreferrer"
            aria-label="View certificates and other documents"
          >
            <button
              className="flex select-none items-center gap-2 rounded-lg py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase bg-black bg-opacity-20 text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50"
              type="button"
            >
              View Documents
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
    </section>
  );
};

export default Experience;
