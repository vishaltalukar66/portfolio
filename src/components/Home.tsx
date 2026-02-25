import { Project } from "../utils/Project";
import { Logos } from "./Logos";
import photo from "../assets/photo.jpg";
import ExperienceList from "./Experience";

export const Home = () => {
  return (
    <>
      <div
        id="home"
        className="flex flex-col items-center justify-center h-screen"
      >
        <div>
          <img src={photo} alt="photo" className="rounded-full w-32 md:w-52" />
        </div>

        <div className="text-4xl p-5 text-black font-mono font-semibold">
          Vishal Talukar
        </div>
        <div className="text-lg  text-black font-mono font-semibold">
          Full Stack Developer
        </div>

        <Logos />
      </div>
      {/* projects */}
      <div id="projects">
        <div className="text-center rounded-3xl font-mono font-semibold text-3xl p-1 mb-10 bg-black text-white">
          Projects
        </div>
        <div className="flex flex-wrap w-full gap-5 p-10 items-center justify-center">
          {Project.map((val, key) => {
            return (
              <div
                key={key}
                className="p-5 bg-white rounded-3xl w-[400px] max-h-[500px] flex flex-col justify-between"
              >
                {/* project image */}
                <div className=" mb-2">
                  <img
                    className="rounded-lg "
                    src={val.banner}
                    alt={val.title}
                  />
                </div>
                {/* techstack */}
                <div className="mt-3 mb-2">
                  <img
                    className="rounded-lg "
                    src={val.techStackImg}
                    alt={val.title}
                  />
                </div>
                {/* Title */}
                <div className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 text-center">
                  {val.title}
                </div>
                {/* Short Description */}
                <div className="mb-3 font-normal text-gray-500 text-justify">
                  {val.desc}
                </div>
                {/* links */}
                <div className="pt-5  flex text-xl items-center justify-center gap-3">
                  {val.live.isLive ? (
                    <div>
                      <a href={val.live.link} target="_blank">
                        <button className="rounded-md p-1 pl-3 pr-3 bg-yellow-400 hover:bg-yellow-200">
                          {" "}
                          <i className="fa-solid fa-laptop" /> Visit Site
                        </button>
                      </a>
                    </div>
                  ) : (
                    <></>
                  )}

                  <div>
                    <a href={val.github} target="_blank">
                      <button className="rounded-md bg-yellow-400 hover:bg-yellow-200 p-1 pl-3 pr-3 ">
                        {" "}
                        <i className="fa-brands fa-square-github" /> GitHub
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* experience */}
      <div className="pb-28" id="experience">
        <div className="text-center rounded-3xl font-mono font-semibold text-3xl p-1 mb-10 bg-black text-white">
          Experience
        </div>

        <ExperienceList />
      </div>
    </>
  );
};
