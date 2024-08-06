import HomePage from "@/components/Home/HomePage";
import { ProjectsInfoDemo } from "@/components/Projects/ProjectsInfoDemo";
import { TracingBeamDemo } from "@/components/Projects/TracingBeamDemo";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <TracingBeamDemo />
    </div>
  );
}