import Image from "next/image";
import {FirstSection} from "@/components/First-section"
import SecondSection from "@/components/SecondSection"
import ThirdSection from "@/components/ThirdSection"
import { FinalSection } from "@/components/ui/lamp";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/><FinalSection/>
    </main>
  );
}
