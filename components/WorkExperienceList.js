"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import { AnimatePresence } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
const workExperienceList = [
  {
    Company_name: "Climbax Entertainment Pvt. Ltd.",
    position_list: [
      {
        started_at: "July 2023",
        end_at: "Present",
        location: "Gurgaon, India",
        position_title: "Software Engineer 1",
      },
      {
        started_at: "Jan 2023",
        end_at: "Jun 2023",
        location: "Delhi, India",
        position_title: "Frontend Developer (Internship)",
      },
    ],
    project_list: [
      {
        project_name: "KMBS Skill Share",
        description:
          "I spearheaded the development of a high-performance LMS platform for Konica Minolta. This platform resulted in a remarkable 50% increase in learning efficiency for the organization. Key Responsibilities were \nProject Leadership: Led the development team in designing, building, and implementing the LMS platform. \n Needs Assessment: Conducted thorough research to understand the specific learning needs of various departments and roles.\nFeature Development: Developed a comprehensive suite of features, including Zoom Sessions, Facilitated interactive online learning experiences.\n         Comprehensive Reporting: Provided detailed insights into user engagement and learning progress.\n Video Playback: Streamlined access to video-based learning content.\n Interactive Quizzes: Assessed learner comprehension and retention.\nModular Learning Modules: Tailored learning paths to suit specific roles and departments.\nTechnical Expertise: Utilized the latest React and Next.js features to ensure a high-performing and optimized platform.\n UI/UX Design: Implemented Material UI and Bootstrap for a user-friendly and visually appealing interface.",
        technology_stack: [
          "NextJs",
          "Javascript",
          "Material UI",
          "Figma",
          "CSS",
          "Bootstrap",
        ],
        outcome:
          "Boosted learning efficiency by over 50% at Konica Minolta.\nEnhanced employee engagement and knowledge retention.\n Enabled personalized learning experiences for diverse roles.\n Demonstrated strong leadership and project management skills.",
      },
      {
        project_name: "PoS WebApp",
        description:
          "This project involved developing a robust multi-tenant POS web application designed to streamline operations for various businesses.Key Features were:\nKitchen Order Management (KOM): Enables efficient order processing, tracking, and communication between front-of-house and kitchen staff.\nOrdering System: Provides a user-friendly platform for customers to browse menus, place orders,and manage their purchases.\nAnalytics Dashboard: Offers valuable insights into sales trends, customer behavior, and inventory management.\nLoyalty Programs: Allows businesses to build customer loyalty through rewards programs, promotions,and personalized offers.\nMultiple Features: Inventory management, table management, delivery tracking.\nTechnical Stack:\nFrontend: Built with Next.js 14 and React 19 App Router for a modern and performant user interface.\nServer-Side Functionality: Server-side calls and validations ensure secure data handling and business logic execution.\nType Safety: TypeScript enforces type checks, preventing errors and improving code maintainability.\nUI Frameworks: Ant Design and Tailwind CSS provide a clean, modern aesthetic and facilitate a userfriendly experience.\nReal-time Notifications: Firebase Cloud Messaging (FCM) integration delivers real-time updates on orders, information, and promotions.",
        outcome:
          "Increased operational efficiency for businesses using the POS system.Streamlined communication and order management. \n Enhanced customer experience through a user-friendly interface and loyalty programs.",
        technology_stack: [
          "NextJs 14",
          "TypeScript",
          "JavaScript",
          "Firebase",
          "Ant Design",
          "Tailwind CSS",
          "React 19",
        ],
      },
      {
        project_name: "DigicuroApp",
        description:
          "Implemented a feature for the company app that utilizes Bluetooth Low Energy (BLE) advertising to automatically connect to nearby embedded sensors upon launching the app. This feature streamlined data collection from the sensors, improving data accessibility and reducing manual interaction.\n Additionally, I created multiple small SwiftUI projects to solidify my understanding of core iOS        development principles and user interface design.",
        outcome:
          "Gained proficiency in Bluetooth Low Energy communication protocols.\n Developed skills in user interface design using SwiftUI. \n Solidified my understanding of core iOS development principles through small SwiftUI projects.",
        technology_stack: ["Swift", "Swift Ui", "iOS Devlopment"],
      },
      {
        project_name: "DigiCuro TV",
        description:
          "Developed and Led Deployment of a Cross-Location TV Signage Application .I spearheaded the development and deployment of a TizeOS-based TV Signage application used across 5+ locations and 50+ TVs. This application facilitated enhanced internal communication and information dissemination within the organization.Key Responsibilities were: \nProject Lead: Led and coordinated the development team in designing, building, and implementing the application.\nTechnical Expertise: Developed core functionalities of the application, including Dynamic TV dashboard with custom data visualization (Pareto, pie, bar charts) engaging video widgets for dynamic content display ,nnnouncement and birthday greeting features to foster a positive company culture.\nBackend Management: Designed and implemented an Admin Panel using Next.js and React 18. This panel empowered users to: \nManage all connected TV screens.\nControl data displayed on specific screens.\nCreate and manage reusable content templates",
        outcome:
          "Streamlined internal communication across multiple locations.\nImproved information accessibility for employees.\nFostered a more engaging work environment with video content and personalized greetings.",
        technology_stack: ["Tizen", "HTML", "CSS", "JSS", "Chart.Js", "NextJs"],
      },
      //   {
      //     project_name: "",
      //     description: "",
      //     outcome: "",
      //     technology_stack: [],
      //   },
    ],
  },
  {
    Company_name: "Bodhi Ai",
    position_list: [
      {
        started_at: "Dec 2022",
        end_at: "Jan 2023",
        location: "Jaipur, India",
        position_title: "Flutter Devloper Intern",
      },
    ],
    project_list: [
      {
        project_name: "Internal Sales and Client Management app",
        description:
          "This project involved redesigning and improving an internal management application to boost efficiency for the CRM and marketing teams in recording and tracking their work.Key Achievements were :\nImproved User Experience: Redesigned the application interface for increased clarity and ease of use.\nEnhanced Data Management: Implemented features for advanced data filtering, searching, and sorting, allowing teams to access and utilize information more effectively.\nStreamlined Workflows: Streamlined the application's processes to reduce manual work and expedite tasks, leading to improved team productivity.",
        technology_stack: ["Flutter", "Dart", "Firebase"],
        outcome:
          "Increased efficiency for the CRM and marketing teams.\nImproved data accessibility and utilization.\nReduced time spent on manual tasks.",
      },
    ],
  },
];

export function WorkExperienceList() {
  const FormattedText = ({ text }) => {
    // Split the text by '\n' to create an array of lines
    const lines = text.split("\n");

    return (
      <ul>
        {lines.map((line, index) => {
          const parts = line.split(":");

          return (
            <li key={index}>
              {parts.map((part, partIndex) => (
                <React.Fragment key={partIndex}>
                  {partIndex % 2 !== 0 ? (
                    part // Non-bold parts
                  ) : (
                    <strong>{part} :</strong> // Bold parts
                  )}
                </React.Fragment>
              ))}
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <AnimatePresence>
      <div className="mt-4">
        <TracingBeam className="px-6">
          {workExperienceList.map((company, index) => (
            <div
              className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2"
              key={`Company_${index}`}
            >
              <h2 className="text-2xl font-semibold ">
                {company.Company_name}
              </h2>
              {company.position_list.map((position, pi) => (
                <div
                  key={`position_${pi}`}
                  className="flex justify-between items-center"
                >
                  <h3 className="text-lg font-semibold ">
                    {position.position_title}
                  </h3>

                  <p className="italic">
                    {" "}
                    {position.started_at} - {position.end_at}
                  </p>
                </div>
              ))}
              {company.project_list.map((project, pii) => (
                <div key={pii}>
                  <CardContainer className="inter-var">
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
                        <FormattedText text={project.description} />
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
                        <div className="flex justify-between items-center gap-1 flex-wrap">
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
                      {project?.link && (
                        <CardItem
                          translateZ={20}
                          as={Link}
                          href="https://twitter.com/mannupaaji"
                          target="__blank"
                          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                          link
                        </CardItem>
                      )}
                    </CardBody>
                  </CardContainer>
                </div>
              ))}
            </div>
          ))}
        </TracingBeam>
      </div>
    </AnimatePresence>
  );
}
