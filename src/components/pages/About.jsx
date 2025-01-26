import React from "react";
import BlurText from "../ui/BlurText";
import FadeContent from "../ui/FadeContent";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const About = () => {
  const techStack = [
    {
      category: "Frontend",
      items: [
        "HTML/CSS",
        "JavaScript",
        "React js",
        "Next Js",
        "Redux Js",
        "Tailwind CSS",
        "Python",
        "C",
      ],
    },
    {
      category: "Backend",
      items: ["Node Js", "Express Js"],
    },
    {
      category: "Database",
      items: ["MongoDB", "MySql"],
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
          <h1 className="font-semibold text-4xl font-title ">
            <BlurText
              text="About Me:"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
          </h1>
          <div>
            <h2 className="font-subHead text-lg font-semibold italic">
              <BlurText
                text="Hey There,"
                delay={200}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
              />
            </h2>
            <p className="font-subHead text-lg font-semibold italic">
              <BlurText
                text="I am Ayush Paul!!"
                delay={240}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
              />
            </p>
          </div>
          <FadeContent
            blur={true}
            duration={1200}
            easing="ease-out"
            initialOpacity={0}
          >
            <h3 className="font-para font-medium">
              A startup geek who not only have ideas but also have the ability
              to execute them. I have a passion for innovation and continuously
              strive to improve my skills and knowledge. Tech stack does not
              matter, I am a problem solver who can adapt to any situation,
              learn any tech stack and deliver results.
            </h3>
          </FadeContent>
          <FadeContent
            blur={true}
            duration={1400}
            easing="ease-out"
            initialOpacity={0}
          >
            <h3 className="font-para font-medium">
              I have worked with various clients in different industries, and
              always delivered results that exceeded their expectations. I am
              committed to delivering high-quality work that exceeds
              expectations and exceeds the client's and companies expectations.
              Have lead multiple teams not only in my college but also in
              different companies and projects. I confident about technical
              skills and communication skills.
            </h3>
          </FadeContent>
          <FadeContent
            blur={true}
            duration={1600}
            easing="ease-out"
            initialOpacity={0}
          >
            <h3 className="font-para font-medium font-semibold">
              Looking for someone to join your team? All i ask is 15 minutes of
              your time, you can assess by your self whether I am the right
              person for the position.
            </h3>
          </FadeContent>
        </div>
        <FadeContent
          blur={true}
          duration={2000}
          easing="ease-out"
          initialOpacity={0}
        >
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
        </FadeContent>
      </div>
    </section>
  );
};
export default About;
