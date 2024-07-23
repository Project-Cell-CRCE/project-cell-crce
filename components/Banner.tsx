import { CalendarClock } from "lucide-react";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="sticky z-[4] bg-yellow-400 bottom-0 w-full text-black">
      <div className="h-[100px] relative flex flex-row md:gap-36 gap-2 justify-start">
        <div className="md:mx-10 mx-1 my-auto">
          <div className="md:block hidden text-lg">
            <p className="text-sm text-gray-800 ">Drone Workshop</p>
            Drone Workshop
            <strong> FREE</strong>
          </div>
        </div>
        <div className="my-auto md:max-w-full max-w-[160px]">
          <div className="md:hidden block">
            <p className="text-xs text-gray-800 mb-1">
              Register for our Drone Workshop{" "}
              <strong className="line-through">Rs. 149</strong> now for{" "}
              <strong>Rs. 99</strong>
            </p>
          </div>

          <a
            href="/book-now"
            className="inline-flex w-full md:text-md text-sm sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-1 focus:outline-none focus:ring-gray-300 text-white rounded-md  items-center justify-center px-4 py-2.5"
          >
            <div className="flex md:gap-3 gap-0">
              <CalendarClock className="md:block hidden" />
              <div className="font-sans text-md my-auto">More Info</div>
            </div>
          </a>
        </div>
        {/* <div className="flex absolute z-[5] bottom-0 md:right-10 right-0">
          <Image
            src="/agent.png"
            className=""
            height={100}
            width={100}
            alt="Hiring"
          />
          <Image
            src="/customer.png"
            className=""
            height={100}
            width={100}
            alt="Hiring"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
