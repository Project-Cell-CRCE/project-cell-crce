import { Home, Lightbulb, Users2 } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-20 w-full">
      <nav className="bg-white shadow-md dark:bg-black">
        <div className="md:mx-10 mx-2 flex flex-wrap items-center justify-between p-2">
          <a
            href="/"
            className="flex items-center space-x-3 text-white rtl:space-x-reverse"
          >
            {/* <Image
              src="/logo.png"
              className="rounded-md"
              height={55}
              width={55}
              alt="logo"
            /> */}
            <Lightbulb
              size={25}
              className="-rotate-6 text-black dark:text-white"
            />
            <span
              className="text-[22px] text-black md:text-[24px] dark:text-white"
              style={{ lineHeight: "32px", fontWeight: "600" }}
            >
              Project Cell
            </span>
          </a>
          <div>
            <div className="md:mx-8 bg-white dark:bg-black" id="navbar-default">
              <ul className="flex items-center justify-center rounded-lg border-gray-900 bg-white font-medium mt-0 flex-row md:space-x-5 space-x-3 border-0 rtl:space-x-reverse dark:bg-black">
                <li>
                  <a
                    href="/home"
                    className="block rounded py-2 text-black hover:text-black md:border-0 p-0 md:hover:bg-transparent dark:text-white dark:hover:text-gray-400"
                  >
                    <Home />
                  </a>
                </li>
                <li>
                  <a
                    href="/team"
                    className="block rounded py-2 text-black hover:text-black md:border-0 md:p-0 md:hover:bg-transparent dark:text-white dark:hover:text-gray-400"
                  >
                    <Users2 />
                  </a>
                </li>
                {/* {userAuth ? (
                  <li className="relative">
                    <button
                      className="block py-2  dark:text-white text-black rounded dark:hover:text-gray-400 md:hover:bg-transparent md:border-0 hover:text-black md:p-0"
                    >
                      <Image
                        src="{pic}"
                        height={25}
                        width={25}
                        alt="hi"
                        loader={({ src }) => src}
                      />
                    </button>
                  </li>
                ) : (
                  <li>
                  <button
                    // onClick={}
                    className="block rounded py-2 text-black hover:text-black md:border-0 md:p-0 px-1 md:hover:bg-transparent dark:text-white dark:hover:text-gray-400"
                  >
                    <LogIn />
                  </button>
                </li>
                )} */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
