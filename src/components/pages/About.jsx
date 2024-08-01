import React from "react";

const About = () => {
  const techStack = [
    {
      category: "Frontend",
      items: [
        "HTML",
        "CSS",
        "React js",
        "Next Js",
        "Tailwind CSS",
        "JavaScript",
        "Python",
        "C",
      ],
    },
    {
      category: "Backend",
      items: ["Node Js"],
    },
    {
      category: "Database",
      items: ["MySql"],
    },
    {
      category: "Devops",
      items: ["GIT", "Docker"],
    },
    {
      category: "Extra",
      items: ["Figma", "Canva", "Adobe Photoshop", "Adobe Illustrator"],
    },
  ];
  return (
    <section>
      <div className="max-w-screen-lg  flex flex-col items-start text-white pl-4 pt-5 md:-ml-3pt-5 md:max-w-2xl space-y-10 md:-ml-3">
        <div className=" space-y-5">
          <h1 className="font-semibold text-4xl font-title ">About Me:</h1>
          <div>
            <h2 className="font-subHead text-lg font-semibold italic">
              Hey There,{" "}
            </h2>
            <p className="font-subHead text-lg font-semibold italic">
              I am Ayush Paul
            </p>
          </div>
          <h3 className="font-para font-medium">
            A graduated at Dayananda Sagar University, currently pursuing a
            B.Tech in Computer Science Engineering. In addition to my roles as a
            developer and designer, I have a strong passion for staying abreast
            of the latest technological advancements and trends. Outside of the
            professional realm, I enjoy swimming, having achieved a state-level
            proficiency in the sport. Furthermore, I find solace in music and
            occasionally indulge in cooking as a personal hobby.
          </h3>
          <h3 className="font-para font-medium">
            Throughout my professional journey, I have had the privilege of
            working with diverse companies and clients, which has greatly
            contributed to the development of my skills and knowledge. I have
            actively embraced a learning mindset, consistently reflecting on my
            past experiences to enhance my capabilities. Demonstrating my
            ability to thrive under pressure, I have effectively collaborated
            within teams to achieve successful outcomes. As I look forward, I
            remain confident in my capacity to handle pressure in future
            endeavors.
          </h3>
        </div>
        <div className="container mx-auto mt-8">
          {techStack.map((category, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-subHead italic font-semibold mb-4">
                {category.category}
              </h2>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="bg-gray-800 p-2 text-sm rounded-md border border-sky-600 text-white hover:bg-gray-700 transition duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
