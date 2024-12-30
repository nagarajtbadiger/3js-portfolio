
import Image from "next/image";
import bg from '../../../../public/background/projects-background.png'
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/staff";


export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image" className="-z-20 top-0 left-0 fixed w-full h-full object-cover object-center opacity-25" />
      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed top-16 lg:top-20 h-screen -translate-x-1/2 lg:translate-x-1/3 left-1/2 lg:-left-24 -z-10">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
