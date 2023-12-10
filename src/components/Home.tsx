import { Project } from "../utils/Project";
import { Logos } from "./Logos";
import photo from "../assets/photo.jpg";



export const Home = () => {
    return (

        <>
            <div id="home" className="flex flex-col items-center justify-center h-screen">

                <div >
                    <img src={photo} alt="photo" className="rounded-full w-32 md:w-52" />

                </div>

                <div className="text-4xl p-5 text-white font-mono font-semibold">
                    Vishal Talukar
                </div>
                <div className="text-lg  text-white font-mono font-semibold">
                    Full Stack Developer
                </div>

                <Logos />
            </div>
            {/* projects */}
            <div id="projects">
                <div className="text-center rounded-3xl font-mono font-semibold text-3xl p-1 mb-10 bg-yellow-400 text-white">
                    Projects
                </div>
                <div className="grid md:grid-cols-3 mt-4 pl-14 pr-14 gap-5 pb-5">


                    {Project.map((val, key) => {
                        return (<div key={key} className=" p-6 bg-white border  border-gray-200 rounded-lg shadow ">
                            {/* project image */}
                            <div className=" mb-2">
                                <img className="rounded-lg " src={val.banner} alt={val.title} />
                            </div>
                            {/* techstack */}
                            <div className="mt-3 mb-2">
                                <img className="rounded-lg " src={val.techStackImg} alt={val.title} />
                            </div>
                            {/* Title */}
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 text-center">
                                {val.title}
                            </h5>
                            {/* Short Description */}
                            <p className="mb-3 font-normal text-gray-500 text-justify">
                                {val.desc}
                            </p>
                            {/* links */}
                            <div className="mt-5 flex text-xl items-center justify-center gap-3">
                                {val.live.isLive ? (<div>
                                    <a href={val.live.link}>
                                        <button className="rounded-md p-1 pl-3 pr-3 bg-yellow-400 hover:bg-yellow-200"> <i className="fa-solid fa-laptop" /> Visit Site
                                        </button>
                                    </a>
                                </div>) : (<></>)}


                                <div>
                                    <a href={val.github}>
                                        <button className="rounded-md bg-yellow-400 hover:bg-yellow-200 p-1 pl-3 pr-3 "> <i className="fa-brands fa-square-github" /> GitHub
                                        </button>
                                    </a></div>
                            </div>
                        </div>
                        )
                    })}





                </div>
            </div>
            {/* experience */}
            <div className="pb-28" id="experience">
                <div className="text-center rounded-3xl font-mono font-semibold text-3xl p-1 mb-10 bg-yellow-400 text-white">
                    Experience
                </div>
                <ol className="relative border-s m-14   p-5">
                    <li className="mb-10 ms-4 bg-white p-5 rounded-lg">
                        <div className="absolute w-3 h-3 bg-yellow-400 rounded-full mt-1.5 -start-1.5 border border-white " />
                        <time className="mb-1 font-normal leading-none text-md">
                            February 2023 - August 2023
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 ">
                            Web Developer Intern
                        </h3>
                        <p className="mb-2 text-base font-normal text-gray-600 ">
                            Falabella, Bengaluru
                        </p>
                        <p className="mb-4 text-justify text-lg">
                            <ul className="list-disc pl-5 text-justify">
                                <li>
                                    Developed and implemented a user-friendly Digital Receipt System for in-store customers, enhancing their shopping
                                    experience.
                                </li>
                                <li>
                                    Planned and engineered RESTful web services to manipulate dynamic datasets.
                                </li>
                                <li>
                                    Collaborated with the team on multiple Proof of Concept (POC) projects.
                                </li>
                                <li>
                                    Performed unit testing of web applications, achieving test coverage between 80 - 95%.
                                </li>
                            </ul>



                        </p>

                    </li>

                </ol>

            </div>

        </>
    );
}