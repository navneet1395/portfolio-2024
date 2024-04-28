"use client";

import React from "react";
import { workData } from "@/components/workExperienceData";
import { redirect } from "next/navigation";
import WorkExperience from "@/components/workExperience";
export default function page({ params }) {
  if (params.index > workData.length + 1) {
    redirect("/");
  }

  return <WorkExperience workData={[workData[params.index - 1]]} />;
}
