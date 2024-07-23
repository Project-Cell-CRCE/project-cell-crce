import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Trial from "@/components/Trial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />
      <Trial />
      <Banner />
    </div>
  );
}
