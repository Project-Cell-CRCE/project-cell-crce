import { CalendarClock, Info } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <div className="sticky z-[30] bg-yellow-500 bottom-0 w-full text-black">
      <div className="h-[100px] relative flex flex-row md:gap-36 gap-2 justify-start">
        <div className="md:mx-10 mx-1 my-auto">
          <div className="md:block hidden text-sm">
            <p className="text-lg text-gray-800 ">Hands On Drone Workshop</p>
            Join us for our Drone Workshop{" "}
            <strong className="line-through">Rs. 149</strong> now for{" "}
            <strong>Rs. 99</strong>
          </div>
        </div>
        <div className="my-auto md:max-w-full max-w-[180px]">
          <div className="md:hidden block">
            <p className="text-xs text-gray-800 mb-1">
              Join us for our Drone Workshop{" "}
              <strong className="line-through">Rs. 149</strong> now for{" "}
              <strong>Rs. 99</strong>
            </p>
          </div>

          <a href="/event">
            <Button className="flex gap-3">
              Register Now
              <Info />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
