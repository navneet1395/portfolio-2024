import React from "react";
import { motion } from "framer-motion";
import { TracingBeam } from "./ui/tracing-beam";

const WorkExperience = ({ workData }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-8">Work Experience</h1> */}
      {workData.map((company, index) => (
        <motion.div
          key={index}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
        >
          <h2 className="text-3xl font-bold mb-4">{company.Company_name}</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Positions:</h3>
            <ul className="list-disc list-inside ml-4">
              {company.position_list.map((position, posIndex) => (
                <li key={posIndex}>
                  <strong>{position.position_title}</strong> (
                  {position.started_at} - {position.end_at}) -{" "}
                  {position.location}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Projects:</h3>
            <TracingBeam className="px-2">
            {company.project_list.map((project, projIndex) => (
                <div className="mb-4" key={projIndex}>
                  <h4 className="text-lg font-semibold">
                    Project {projIndex + 1}: {project.project_name}
                  </h4>
                  <div className="ml-4">
                    <ul className="list-disc list-inside">
                      {project.description
                        .split("\n")
                        .map((achievement, achIndex) => {
                          const parts = achievement.split(":");
                          return achIndex === 0 ? (
                            achievement
                          ) : parts.length > 1 ? (
                            <li
                              key={achIndex}
                              className="text-sm text-gray-600 dark:text-gray-400 ml-4"
                            >
                              <strong>{parts[0]}:</strong> {parts[1]}
                            </li>
                          ) : (
                            achievement
                          );
                        })}
                    </ul>
                    <h5 className="text-md font-semibold mt-2">
                      Key Achievements:
                    </h5>
                    <ul className="list-disc list-inside ml-4">
                      {project.outcome
                        .split("\n")
                        .map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                    </ul>
                      <h5 className="text-md font-semibold mt-2">Technology Stack:</h5>{" "}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {project.technology_stack.join(", ")}
                    </p>
                  </div>
                </div>
            ))}
            </TracingBeam>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WorkExperience;
