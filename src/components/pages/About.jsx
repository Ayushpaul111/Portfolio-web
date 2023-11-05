import React from "react";

const About = () => {
  return (
    <section>
      <div className="max-w-screen-lg  flex flex-col items-start text-white pl-4 pt-5 md:-ml-3pt-5 md:max-w-2xl space-y-10 md:-ml-3">
        <div className=" space-y-5">
          <h1 className=" text-3xl font-semibold">About Me:</h1>
          <div>
            <h2 className="text-xl font-medium">Hey There, </h2>
            <p className="text-xl font-medium pt-2">I am Ayush Paul</p>
          </div>
          <h3>
            A fourth-year student at Dayananda Sagar University, currently
            pursuing a B.Tech in Computer Science Engineering. In addition to my
            roles as a developer and designer, I have a strong passion for
            staying abreast of the latest technological advancements and trends.
            Outside of the professional realm, I enjoy swimming, having achieved
            a state-level proficiency in the sport. Furthermore, I find solace
            in music and occasionally indulge in cooking as a personal hobby.
          </h3>
          <h3 className="">
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
        <div className="space-y-10 md:space-y-0 md:space-x-20 align-middle flex flex-col md:flex-row">
          <div className="space-y-5">
            <h3 className="text-xl font-medium">Professional Skills:</h3>
            <div className="flex flex-row space-x-10">
              <div>
                <ul>
                  <li className=" pb-2 font-medium">Developing</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React js</li>
                  <li>Tailwind CSS</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>C</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li className=" pb-2 font-medium">Designing</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe XD</li>
                  <li>Adobe Premiere Pro</li>
                  <li>Adobe After Effect</li>
                  <li>Figma</li>
                  <li>Canva</li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" space-y-5">
            <div>
              <h3 className="text-xl font-medium">Soft Skills:</h3>
            </div>
            <div>
              <ul>
                <li>Creativity</li>
                <li>Problem-solving</li>
                <li>Conflict management</li>
                <li>Leadership</li>
                <li>Communication</li>
                <li>Sales</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
