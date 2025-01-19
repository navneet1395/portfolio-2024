"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { AnimatePresence } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { workData } from "./workExperienceData";

export function WorkExperienceList({ data = workData }) {
  return (
    <AnimatePresence>
      <div className="mt-4">
        <TracingBeam className="px-6">
          {data.map((company, index) => (
            <div
              className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mb-6 hover:shadow-2xl transition-shadow"
              key={`Company_${index}`}
            >
              <h2 className="text-2xl font-semibold hover:text-blue-500">
                <Link
                  href={`/project-brief/${index + 1}`}
                  title={`View details of projects at ${company.Company_name}`}
                  aria-label={`Details of ${company.Company_name}`}
                >
                  {company.Company_name}
                </Link>
              </h2>
              {company.position_list.map((position, pi) => (
                <div
                  key={`position_${pi}`}
                  className="flex justify-between gap-2 items-center mt-2"
                >
                  <h3 className="text-lg font-medium">
                    {position.position_title}
                  </h3>
                  <div className="text-sm text-gray-500 italic">
                    {position.started_at} - {position.end_at}
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {company.project_list.map((project, pii) => (
                  <CardContainer className="inter-var" key={pii}>
                    <CardBody className="bg-gray-50 dark:bg-gray-900 dark:hover:shadow-emerald-500/[0.1] border-gray-300 dark:border-gray-600 shadow-md hover:shadow-lg p-6 rounded-xl transition-all">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-gray-800 dark:text-white"
                      >
                        {project.project_name}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="40"
                        className="text-gray-600 text-sm mt-2 dark:text-gray-300"
                      >
                        {project.summary}
                      </CardItem>
                      <CardItem translateZ="70" className="w-full mt-4">
                        <h5 className="text-lg font-semibold underline">
                          Project Outcomes
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {project.outcome}
                        </p>
                      </CardItem>
                      <CardItem
                        className="border-2 p-3 rounded-md w-full mt-4"
                        translateZ="50"
                      >
                        <h5 className="text-lg font-semibold underline mb-2">
                          Technology Stack
                        </h5>
                        <div className="flex items-center gap-2 flex-wrap">
                          {project.technology_stack.map((tech, ti) => (
                            <span
                              key={ti}
                              className="px-3 py-1 rounded-xl bg-gray-100 dark:bg-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 border dark:border-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                ))}
              </div>
            </div>
          ))}
        </TracingBeam>
      </div>
    </AnimatePresence>
  );
}
