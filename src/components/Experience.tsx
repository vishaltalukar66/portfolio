import React from "react";
let experienceData = [
  {
    duration: "Feb 2023 - Aug 2023",
    role: "Web Developer Intern",
    company: "<b>Falabella</b>, India",
    responsibilities: [
      "Collaborated with <b>retail leadership</b> to develop a <b>Digital Receipt</b> system prototype, demonstrating potentialannual savings of <b>$500,000</b>.",
      "Led the transition from in-store paper workflows to digital formats.",
    ],
  },
  {
    duration: "Jan 2024 - Apr 2024",
    role: "Junior Software Developer",
    company: "<b>IdeaDox (Freelancer)</b>, India",
    responsibilities: [
      "Developed <b>web-based multi-tenant systems</b> tailored for the <b>cab service sector</b>.",
      "Leveraged <b>AWS Lambda</b> to build scalable, event-driven backend services, improving <b>system reliability</b>.",
      "Implemented automated notification <b>workflows</b> using Email and WhatsApp API integrations.",
      "Integrated <b>LLM APIs</b> into a healthcare application",
    ],
  },
  {
    duration: "May 2024 - Feb 2025",
    role: "Full stack developer",
    company: "<b>CloudTara Technologies</b>, India",
    responsibilities: [
      "Designed and implemented a <b>multi-tenant</b> application  featuring a built-in collaboration and messagingmodule.",
      "Developed a <b>secure file management system</b> with user-specific <b>access controls</b> and integrated third-party <b>APIs</b> for real-time file previews.",
      "Engineered robust <b>server-side session</b> handling to ensure secure user authentication and data persistence.",
      "Acted as a <b>technical bridge</b> for clients, translating business requirements into <b>functional software specifications</b>.",
    ],
  },
];

type Experience = {
  duration: string;
  role: string;
  company: string;
  responsibilities: string[];
};
experienceData = experienceData.reverse();

const ExperienceList: React.FC = () => {
  return (
    <ol className="relative  md:border-l-2 md:border-gray-400 border-l-0  p-2 m-5 md:m-14 md:p-5 ">
      {experienceData.map((item: Experience, index: number) => (
        <li className="mb-10  bg-white p-5 rounded-3xl" key={index}>
          <div className="bg-black rounded-full mt-1  -start-2  w-4 h-4 absolute hidden md:block" />

          {/* <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white hidden md:block" /> */}

          <h3 className="text-lg font-semibold text-black ">{item.role}</h3>
          <p className="mb-2 text-base font-normal text-gray-600 ">
            <div
              dangerouslySetInnerHTML={{
                __html: item.company,
              }}
            />
            <time className="mb-1 font-normal leading-none text-md">
              {item.duration}
            </time>
          </p>
          <p className="mb-4 text-justify text-lg ml-5">
            <ul className="list-disc pl-5 text-justify">
              {item.responsibilities.map((point, idx) => (
                <li key={idx} className="mb-1">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: point,
                    }}
                  />
                  {/* {point} */}
                </li>
              ))}
            </ul>
          </p>
        </li>
      ))}
    </ol>
  );
};

export default ExperienceList;
