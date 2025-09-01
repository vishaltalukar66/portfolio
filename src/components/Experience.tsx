import React from "react";
const experienceData = [
  {
    duration: "February 2023 - August 2023",
    role: "Web Developer Intern",
    company: "<b>Falabella</b>, India",
    responsibilities: [
      "Collaborated with the team under the guidance of the <b>Director of stores</b>, to brainstorm and execute multiple <b>Proof of Concepts (POCs)</b> in order to achieve a <b>igital Receipt system</b> for <b>in-store</b> customers.",
    ],
  },
  {
    duration: "January 2024 - April 2024",
    role: "Junior Software Developer",
    company: "<b>IdeaDox (Freelancer)</b>, India",
    responsibilities: [
      "Developed web based <b>multi-tenant</b> applications within the cab service sector.",
      "Leveraged <b>AWS Lambda functions</b> to enhance backend systems scalability and reliability.",
      "Implemented notification channels via email and WhatsApp.",
    ],
  },
  {
    duration: "May 2024 - February 2025",
    role: "Full stack developer",
    company: "<b>CloudTara Technologies</b>, India",
    responsibilities: [
      "Worked directly with clients to understand their requirements and translate them into working features.",
      "Designed a <b>multi-tenant application</b> with a <b>built-in communication feature</b> that allowed team members to collaborate and message each other with ease.",
      "Achived file handling with <b>access controls</b> for each user to safeguard files securely.",
      "Used a <b>third-party API</b> to generate file previews onthe-fly.",
      "Enhanced <b>session management</b>",
    ],
  },
];

type Experience = {
  duration: string;
  role: string;
  company: string;
  responsibilities: string[];
};

const ExperienceList: React.FC = () => {
  return (
    <ol className="relative  md:border-l-2 border-l-0  m-3 md:m-14 p-5">
      {experienceData.reverse().map((item: Experience, index: number) => (
        <li className="mb-10 ms-4 bg-white p-5 rounded-3xl" key={index}>
          <div className="absolute w-3 h-3 bg-yellow-400 rounded-full mt-1.5 -start-1.5 border border-white hidden md:block" />
          <time className="mb-1 font-normal leading-none text-md">
            {item.duration}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 ">{item.role}</h3>
          <p className="mb-2 text-base font-normal text-gray-600 ">
            <div
              dangerouslySetInnerHTML={{
                __html: item.company,
              }}
            />
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
