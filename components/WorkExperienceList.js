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
              className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2"
              key={`Company_${index}`}
            >
              <h2 className="text-2xl font-semibold hover:text-blue-400 ">
                <Link
                  href={`/project-brief/${index + 1}`}
                  title="Check Project description in brief"
                >
                  {company.Company_name}
                </Link>
              </h2>
              {company.position_list.map((position, pi) => (
                <div
                  key={`position_${pi}`}
                  className="flex justify-between gap-1 items-center"
                >
                  <h3 className="text-lg font-semibold ">
                    {position.position_title}
                  </h3>

                  <div className="italic text-wrap text-sm">
                    {" "}
                    {position.started_at} - {position.end_at}
                  </div>
                </div>
              ))}
              <div className="flex gap-4 flex-wrap">
                {company.project_list.map((project, pii) => (
                  <CardContainer className="inter-var" key={pii}>
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        {project.project_name}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="40"
                        className="text-neutral-500 text-sm  mt-2 dark:text-neutral-300"
                      >
                        {project.summary}
                      </CardItem>
                      <CardItem translateZ="70" className="w-full ">
                        <h5 className="mt-4 underline font-semibold">
                          Project Outcomes
                        </h5>

                        {project.outcome}
                      </CardItem>
                      <CardItem
                        className="border-2 p-2 rounded-md w-full "
                        translateZ="50"
                      >
                        <h5 className="underline font-semibold mb-2">
                          Technology Stack
                        </h5>
                        <div className="flex  items-center gap-1 flex-wrap">
                          {project.technology_stack.map((tech, ti) => (
                            <CardItem
                              key={ti}
                              translateZ={20}
                              as="button"
                              className="px-4 py-2 rounded-xl border-black dark:border-white border text-xs font-bold"
                            >
                              {tech}
                            </CardItem>
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
