import Banner from "@/components/Banner";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import { FeaturesSectionDemo } from "@/components/ui/FeaturesSectionDemo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <FeaturesSectionDemo />
      <HomePage />
    </div>
  );
}
