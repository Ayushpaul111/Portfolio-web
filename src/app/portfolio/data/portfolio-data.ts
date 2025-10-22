// data/portfolio-data.ts

export interface PortfolioWork {
  id: string;
  title: string;
  client: string;
  description: string;
  fullDescription: string;
  category: string;
  year: string;
  link?: string;
  image?: string;
  testimonial: {
    text: string;
    author: string;
    position: string;
    company: string;
    avatar?: string;
  };
  tags: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const portfolioWorks: PortfolioWork[] = [
  {
    id: "unico-dentals-automation",
    title: "Dental Clinic Website & Workflow Automation",
    client: "Unico Dentals",
    description:
      "Built a modern website with appointment booking system and automated internal workflows for patient management, appointment reminders, and follow-up communications.",
    fullDescription:
      "Created a comprehensive digital solution for Unico Dentals, a 24/7 dental clinic in Siliguri. Developed a responsive website featuring online appointment booking, service showcase, and patient testimonials. Implemented automation workflows using n8n to streamline internal processes including automated appointment confirmations via WhatsApp/SMS, patient follow-up reminders, treatment plan notifications, and inventory management alerts. Integrated Google Sheets for patient data management and automated reporting, significantly reducing manual administrative tasks.",
    category: "Healthcare Web Development & Automation",
    year: "2024",
    link: "https://unicodentals.com",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800",
    testimonial: {
      text: "The website and automation system have completely transformed our clinic operations. Patient bookings are seamless, and our team saves hours every day with automated reminders and follow-ups. We can now focus more on patient care rather than administrative tasks.",
      author: "Dr. Somoshree Paul",
      position: "Dental Surgeon & Implantologist",
      company: "Unico Dentals",
      avatar: "https://www.unicodentals.com/IMG_5377.JPG",
    },
    tags: [
      "React",
      "Next.js",
      "n8n",
      "WhatsApp API",
      "Google Sheets",
      "Automation",
      "SEO",
    ],
    metrics: [
      { label: "Time Saved", value: "15hrs/week" },
      { label: "Online Bookings", value: "+200%" },
      { label: "Manual Tasks", value: "-80%" },
    ],
  },
  {
    id: "foolideas-agency-website",
    title: "Marketing Agency Platform & Client Automation",
    client: "Fool Ideas",
    description:
      "Developed a full-featured agency website with portfolio showcase and automated client onboarding and reporting.",
    fullDescription:
      "Built a comprehensive website for Fool Ideas, a digital marketing agency. The website showcases their 8+ services including Social Media Management, Content Creation, SEO, and Google Ads. Automated critical internal processes: client onboarding workflow with automated welcome emails and document collection, weekly/monthly report generation and distribution. Integrated tools include Google Sheets for client data, n8n for workflow automation, and CRM synchronization for seamless client management.",
    category: "Agency Web Development & Automation",
    year: "2024",
    link: "https://foolideas.com",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
    testimonial: {
      text: "Outstanding work! The website is beautiful and the automation workflows have revolutionized how we manage clients. Report generation that used to take hours now happens automatically. We've scaled our client capacity by 3x without hiring more staff.",
      author: "Bireswar Das",
      position: "Founder & CEO",
      company: "Fool Ideas",
      avatar:
        "https://www.foolideas.com/_next/image?url=%2Fteam_images%2FbiruNew.png&w=1080&q=75",
    },
    tags: [
      "Next.js",
      "React",
      "n8n",
      "Google Sheets",
      "Automation",
      "CRM Integration",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "Client Capacity", value: "+100%" },
      { label: "Report Time", value: "-90%" },
      { label: "Lead Response", value: "<5min" },
    ],
  },
  {
    id: "primeghar-service-website-automation",
    title: "Home Services Platform & Booking Automation",
    client: "PrimeGhar",
    description:
      "Created an on-demand service booking platform with end-to-end automation for booking management, and service provider assignment.",
    fullDescription:
      "Developed a complete service booking platform for PrimeGhar, connecting families in Cooch Behar with trusted home service professionals. Built website with real-time service booking for cleaning, plumbing, electrical, repairs, and car wash. Implemented comprehensive automation system: automatic service provider assignment based on availability and location,via SMS/WhatsApp, review request automation, and daily/weekly performance reports for management. Used n8n for workflow orchestration, and Google Sheets for service provider management.",
    category: "Service Platform Development & Automation",
    year: "2024",
    link: "https://primeghar.com",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800",
    testimonial: {
      text: "The platform and automation system are game-changers for our startup. From booking to completion, everything flows automatically. We handle 50+ bookings daily with minimal manual intervention. The automated assignment system ensures the right professional reaches customers on time every time.",
      author: "Founder",
      position: "CEO",
      company: "PrimeGhar",
      avatar:
        "https://btownbanners.com/uploads/monthly_2017_08/P.png.23e48690e8f417746b666cbc797cd844.png",
    },
    tags: [
      "Next js",
      "Node.js",
      "MongoDB",
      "n8n",
      "WhatsApp API",
      "Automation",
    ],
    metrics: [
      { label: "Booking Time", value: "<2min" },
      { label: "Manual Work", value: "-75%" },
      { label: "Bookings", value: "10+" },
    ],
  },
];
