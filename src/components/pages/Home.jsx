import MyImage from "../../assets/heroImage.png";
import { BiLogoLinkedin, BiLogoGithub, BiLogoInstagram } from "react-icons/bi";
import BlurText from "../ui/BlurText";
import FadeContent from "../ui/FadeContent";

const Home = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <section>
      <div className="max-w-screen-lg flex flex-col items-start text-white pl-3 md:max-w-2xl md:-ml-3 space-y-10">
        <div className="flex flex-col">
          <div className="max-w-screen-lg flex flex-col items-start text-white pl-1 md:pl-4 pt-5 md:-ml-3">
            <h1 className=" font-semibold text-4xl font-title ">
              {" "}
              <BlurText
                text="Ayush Paul"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
              />
            </h1>

            <p className=" font-subHead mt-1">
              <BlurText
                text="Mern Stack / Frontend Developer"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
              />
            </p>
            <div>
              <FadeContent
                blur={true}
                duration={1200}
                easing="ease-out"
                initialOpacity={0}
              >
                <h2 className="pt-5 font-subHead text-lg font-semibold italic">
                  Developer with 1.6+ years of experience, I acquired knowledge
                  in various roles such as MARN Stack Developer, Web Developer
                  and Frontend Developer.
                </h2>
              </FadeContent>
              <FadeContent
                blur={true}
                duration={1600}
                easing="ease-out"
                initialOpacity={0}
              >
                <h2 className="pt-3 pb-6 font-para font-medium">
                  Additionally, I am a freelancer with extensive experience
                  working with multiple clients, enhancing both my development
                  and communication skills.
                </h2>
              </FadeContent>
            </div>
          </div>
          <FadeContent
            blur={true}
            duration={1900}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="flex flex-col">
              <div className="md:flex">
                <div className="pl-3.5 pb-8 md:-ml-3">
                  <div className="flex relative grayscale-[100%] bg-black rounded-full w-40 h-40 overflow-hidden ">
                    <img
                      src={MyImage}
                      className="App-logo fill object-cover layout fill-current"
                      alt="logo"
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center md:justify-center md:px-10 md:pb-7">
                  <div
                    name="socials"
                    className=" text-neutral-500 pl-3  space-y-3 md:-ml-3"
                  >
                    <div className="flex text-center md:hover:scale-105 transition-all md:hover:pl-1">
                      <BiLogoLinkedin className="text-2xl" />
                      <a
                        className="pl-2 cursor-pointer font-subHead"
                        href="https://www.linkedin.com/in/ayushpaul1111/"
                      >
                        ayushpaul1111
                      </a>
                    </div>

                    <div className="flex text-center md:hover:scale-105 transition-all md:hover:pl-1">
                      <BiLogoGithub className="text-2xl" />
                      <a
                        className="pl-2 cursor-pointer font-subHead"
                        href="https://github.com/Ayushpaul111"
                      >
                        Ayushpaul111
                      </a>
                    </div>

                    <div className="flex text-center md:hover:scale-105 transition-all md:hover:pl-1">
                      <BiLogoInstagram className="text-2xl" />
                      <a
                        className="pl-2 cursor-pointer font-subHead"
                        href="https://www.instagram.com/_ayush_paul_/"
                      >
                        _ayush_paul_
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" max-w-screen-lg flex flex-col items-start text-white pl-4 pt-5 md:-ml-3 md:-mt-5">
                <h3 className="pt-5 pb-4 font-para font-medium">
                  I am a dedicated mern stack developer proficient with React
                  JS, Next JS, Tailwind, MongoDB, Express JS and other
                  technologies. I have successfully collaborated with multiple
                  clients on independent projects as a freelancer.
                </h3>
              </div>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
};

export default Home;
