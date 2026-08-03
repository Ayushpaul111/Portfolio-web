import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileArchive } from "lucide-react";

export const DATA = {
  name: "Ayush Paul",
  initials: "AP",
  url: "https://ayushpaul.dev",
  location: "West Bengal, India",
  locationLink: "https://www.google.com/maps/place/coochbehar",
  description: "Software Engineer with business mindset.",
  summary:
    "I'm a developer knows how a business works, not just the code. 4+ years freelancing for Indian and international clients across development, sales, and design. I have built and led my own team when i was in 2nd year, and today I help run the dev, testing, and support teams at Medikzo while shipping products at [Messy Programmer](https://messyprogrammer.dev). Hand me a messy problem and a blank slate - I'll figure out the plan, build it or even get the right people running it. I adapt, learn, and deliver.",
  avatarUrl: "/Ayush.webp",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "Python",
    "Docker",
    "MongoDB",
    "Java",
    "C",
    "Zapier",
    "n8n",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blogs" },
    { href: "/portfolio", icon: FileArchive, label: "Portfolio" },
  ],
  contact: {
    email: "ayushpaul1111@gmail.com",
    tel: "+919064995568",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ayushpaul111",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ayushpaul1111",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/_ayush_paul_",
        icon: Icons.instagram,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_ayush_paul_",
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:ayushpaul1111@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    // TODO(ayush): confirm Medikzo title / start / URL / logo
    // TODO(ayush): confirm Suman Das relationship (co-founder/partner)
    {
      company: "Medikzo",
      href: "https://medikzo.com/",
      badges: [],
      location: "Hybrid",
      title: "Operations Lead",
      logoUrl: "./medikzo.png",
      start: "January 2026",
      end: "Present",
      description:
        'Medikzo is a healthcare appointment booking platform designed primarily for tier-2 and tier-3 cities. I supervise the development and testing teams, train the support team and work on the business strategies. With Suman (founder of Messy Programmer) we are shaping the business model. Basically, me and Suman act as a "Human LLM" - we get into one domain first, understand the entire flow of how it works, and then turn that into a proper workflow/SOP. Once that\'s documented, we train someone on it and hand off that role to them. Then we move on to the next domain and repeat the exact same cycle - Business, development, sales, literally everything. Within the first month: onboarded 600+ doctors, crossed 1,000+ app downloads, and processed ~400 appointments.',
    },
    {
      company: "Messy Programmer",
      href: "https://messyprogrammer.dev",
      badges: [],
      location: "Hybrid",
      title: "Full Stack Developer (Full Time)",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D560BAQHafjq4CvE4zQ/company-logo_200_200/company-logo_200_200/0/1708921438416/messyprogrammer_logo?e=2147483647&v=beta&t=4pbik2rApZ0wd0z4BaLz0sMj15yYC-u_E_iYOhJvlmM",
      start: "Nov 2024",
      end: "Present",
      description:
        "Helping clients save time with automations and web apps! They choose me for company's YouTube videos where I share how businesses can work smarter. Building Next.js, Zapier, n8n, App Script, Docker, GoHighLevel, and Firebase, basically making tech to do the heavy lifting so, clients don't have to.",
    },
    {
      company: "LYIK Technologies",
      href: "https://www.lyik.com/",
      badges: [],
      location: "Bengaluru, Karnataka",
      title: "Web Developer (Intern)",
      logoUrl:
        "https://store-images.s-microsoft.com/image/apps.22172.98d12f57-368b-4a9a-8ac2-d4926608f98f.0d164c8e-81af-44c8-92d0-25ab3ec447b8.c7eb27fb-7ee1-4d98-a641-bd623960e3f2",
      start: "Sept 2023",
      end: "Dec 2023",
      description:
        "Worked as a Web Developer Intern contributing to website development using React.js, Next.js, Tailwind CSS, and Docker. Gained hands-on experience in modern web development technologies and containerization.",
    },
    {
      company: "Mediqueue",
      href: "https://mediqueue.com",
      badges: [],
      location: "Remote",
      title: "Front-end Developer (Intern)",
      logoUrl: "./mediqueue.webp",
      start: "March 2022",
      end: "Oct 2022",
      description:
        "Gained valuable experience as a Frontend Developer and UI/UX Designer, contributing to main website development and creating login UI designs for mobile applications. Also designed posters and logos for clients using HTML, CSS, JavaScript, Photoshop, Illustrator, and Adobe XD.",
    },
    {
      company: "Skill Academia",
      href: "https://skillacademia.com",
      badges: [],
      location: "Remote",
      title: "Graphic Designer (Part-time)",
      logoUrl: "https://skillacademia.com/apple-icon.png?b8cc0de692812447",
      start: "June 2022",
      end: "March 2023",
      description:
        "Served as a Graphic Designer specializing in creating impactful marketing materials including social media posters and company brochures. Utilized Adobe Photoshop, Adobe Illustrator, Adobe XD, and Canva to create various designs for marketing purposes.",
    },
    {
      company: "Nincompoop (Media Inminutes)",
      href: "https://mediainminutes.com",
      badges: [],
      location: "Remote",
      title: "Graphic Designer (Part-time)",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C560BAQEhmbMP7wQpoA/company-logo_200_200/company-logo_200_200/0/1662660599962?e=2147483647&v=beta&t=bQKswfC0egnG-3LQFZYXpdOj5ZXwtEOOPMMCbIou54o",
      start: "Oct 2022",
      end: "March 2023",
      description:
        "Worked as a Graphic Designer creating impactful marketing materials such as posters and logos for clients. Contributed to social media poster designs using Adobe Photoshop, Adobe Illustrator, Adobe XD, and Canva.",
    },
    {
      company: "Freelance",
      href: "",
      badges: [],
      location: "Remote",
      title: "Freelance Full Stack Developer",
      logoUrl: "",
      start: "2021",
      end: "",
      description:
        "4+ years building web apps and automations for Indian & international clients. Built a library management system for Dayananda Sagar University still in use today. In my 3rd year I built and led a 4-person team — I owned outreach and solution design, my team built, and I owned delivery.",
    },
  ],
  education: [
    {
      school: "Dayananda Sagar University",
      href: "https://www.dsu.edu.in/",
      degree: "B.Tech. in Computer Science Engineering",
      logoUrl: "/dsu.webp",
      start: "2020",
      end: "2024",
    },
    {
      school: "Vivekananda Vidyapeeth High School",
      href: "https://school.banglarshiksha.gov.in/ws/website/index/19031701301",
      degree: "Class 11 - 12",
      logoUrl: "/vvh.webp",
      start: "2018",
      end: "2020",
    },
    {
      school: "Rambhola High School",
      href: "https://en.wikipedia.org/wiki/Cooch_Behar_Rambhola_High_School",
      degree: "Class 5 - 10",
      logoUrl: "/rhs.webp",
      start: "2013",
      end: "2018",
    },
  ],
  built: [
    {
      title: "WebFlag — Chrome Extension for QA",
      href: "/blog/webflag",
      dates: "",
      active: true,
      description:
        "A lightweight bug-capture tool for QA testers: find a bug, capture it (screenshot + annotate + element selector + environment), and push it straight to ClickUp — no backend, no account. I automated what I was struggling with while testing.",
      technologies: ["Chrome Extension", "ClickUp API"],
      links: [
        {
          type: "Add to Chrome",
          href: "https://chromewebstore.google.com/detail/webflag/gbhhfgklbcdoiconjalndhfljgkbfmbi",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Read the story",
          href: "/blog/webflag",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Home Service Platform",
      href: "/blog/home-service-company",
      dates: "",
      active: true,
      description:
        "Built a home-services platform for a tier-3 city from scratch — researched both sides of the market, ran door-to-door campaigns, built the site + SEO, and got organic orders in the first week. Ran it solo alongside a full-time job and freelancing.",
      technologies: [],
      links: [
        {
          type: "Read the story",
          href: "/blog/home-service-company",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "360° Virtual Real Estate Tours",
      href: "/blog/360-realestate",
      dates: "",
      active: true,
      description:
        "Spotted a gap in tier-2/3 real estate, cold-outreached builders, landed a real client, and now building full 360° property tours (plus digitally-furnished versions with an architect) so buyers anywhere can walk through remotely.",
      technologies: [],
      links: [
        {
          type: "Read the story",
          href: "/blog/360-realestate",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "QR Menu + Restaurant Management System",
      href: "",
      dates: "",
      active: true,
      description:
        "With this, they're saving around 20,000 rupees every month and also getting a clear insight into which dishes are performing well and how the expenses are going. They can easily manage menu items, control charges, availability, and more. Their customers are also happy with how quickly and smoothly orders are being handled now.",
      technologies: [
        // Add your actual technologies used
      ],
      links: [
        {
          type: "Menu",
          href: "https://woody-pizza.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Admin",
          href: "https://woody-pizza.vercel.app/admin",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  projects: [
    {
      title: "Unicodentals",
      href: "https://unicodentals.com",
      dates: "June 2024 - June 2024",
      active: true,
      description:
        "Unico Dentals wanted a simple wbsite. More like a porfolio but with dynamic content.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://unicodentals.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://r2.vidzflow.com/v/jBgbaAknSF_576p_1749926759.mp4",
    },
    {
      title: "AI Consulting Automation System",
      href: "https://drive.google.com/file/d/1aCV8bZUD8UfpNdCZJQsTXXepxtJIlnFe/view?usp=sharing",
      dates: "November 2025",
      active: true,
      description:
        "Built an end-to-end AI automation system that generates custom consulting reports from user submissions. Features dual-AI processing (Google Gemini for analysis, Claude Sonnet for HTML generation), duplicate prevention via Google Sheets, and automated email delivery with branded HTML reports.",
      technologies: [
        "n8n",
        "Google Gemini 2.5 Flash",
        "Claude Sonnet 4",
        "Google Sheets API",
        "Gmail API",
        "Webhook Integration",
        "AI Agents",
      ],
      links: [
        {
          type: "Download",
          href: "https://drive.google.com/file/d/1aCV8bZUD8UfpNdCZJQsTXXepxtJIlnFe/view?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  // ],
} as const;
