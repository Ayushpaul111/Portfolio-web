import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, LinkIcon } from "lucide-react";

export const DATA = {
  name: "Ayush Paul",
  initials: "DV",
  url: "https://ayushpaul.dev",
  location: "West Bengal, India",
  locationLink: "https://www.google.com/maps/place/coochbehar",
  description: "Software Engineer who love building things and helping people.",
  summary:
    "A startup geek who not only have ideas but also have the ability to execute them. I graduated from [Dayananda Sagar University, in Computer Science Engineering](https://drive.google.com/file/d/1SNs2uUcjBxJ4jMajOuG6dxK4cSawaPba/view?usp=sharing). Tech stack does not matter, I am a problem solver who can adapt to any situation, learn any tech stack and deliver results.",
  avatarUrl: "/ayush.webp",
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
    { href: "/link", icon: LinkIcon, label: "Links" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
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
        url: "https://instagram.com/ayushpaul1111",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Messy Programmer",
      href: "https://messyprogrammer.in",
      badges: [],
      location: "Hybrid",
      title: "Full Stack Developer (Full Time)",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D560BAQHafjq4CvE4zQ/company-logo_200_200/company-logo_200_200/0/1708921438416/messyprogrammer_logo?e=2147483647&v=beta&t=4pbik2rApZ0wd0z4BaLz0sMj15yYC-u_E_iYOhJvlmM",
      start: "Nov 2024",
      end: "Present",
      description:
        "Currently working as a Full-Stack Developer contributing to automations and full-stack development while providing consultation for technical solutions. Working with modern technologies including Next.js, MongoDB, Zapier, App Script, Google APIs, Docker, GoHighLevel, and Firebase.",
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
      logoUrl: "./mediqueue.png",
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
      logoUrl:
        "https://media.licdn.com/dms/image/C560BAQGLl5g9wT4ZsQ/company-logo_200_200/0/1652106728326?e=2147483647&v=beta&t=oRWJeUKeVe9u4mHsWOXTSX6D3Ct848XnM_WUQOKBPTw",
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
        "https://media.licdn.com/dms/image/C560BAQEhmbMP7wQpoA/company-logo_200_200/0/1662660599258?e=2147483647&v=beta&t=Jb9yGmePebjjvgWVaPjJjatQ1l-cuBrKMa7neO5b5eM",
      start: "Oct 2022",
      end: "March 2023",
      description:
        "Worked as a Graphic Designer creating impactful marketing materials such as posters and logos for clients. Contributed to social media poster designs using Adobe Photoshop, Adobe Illustrator, Adobe XD, and Canva.",
    },
  ],
  education: [
    {
      school: "Dayananda Sagar University",
      href: "https://www.dsu.edu.in/",
      degree: "B.Tech. in Computer Science Engineering",
      logoUrl: "/dsu.jpg",
      start: "2020",
      end: "2024",
    },
    {
      school: "Vivekananda Vidyapeeth High School",
      href: "https://school.banglarshiksha.gov.in/ws/website/index/19031701301",
      degree: "Class 10 - 12",
      logoUrl: "/vvh.jpg",
      start: "2018",
      end: "2020",
    },
    {
      school: "Rambhola High School",
      href: "https://en.wikipedia.org/wiki/Cooch_Behar_Rambhola_High_School",
      degree: "Class 5 - 10",
      logoUrl: "/rhs.jpg",
      start: "2013",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  products: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
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
