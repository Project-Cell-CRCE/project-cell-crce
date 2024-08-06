import HomePage from "@/components/Home/HomePage";
import { FeaturesSectionDemo } from "@/components/Home/FeaturesSectionDemo";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <FeaturesSectionDemo />
      <HomePage />
    </div>
  );
}
