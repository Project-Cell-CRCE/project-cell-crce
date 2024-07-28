import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { ChevronRight, Github, Globe, Instagram, Linkedin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { CardsCarouselDemo } from "./ui/CardsCarouselDemo";

const HomePage = () => {
  const team = [
    {
      name: "Alvin",
      role: "Technical Member",
      img: "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lkdn: "",
      inst: "",
      git: "",
      web: "",
    },
    {
      name: "Alvin",
      role: "Technical Member",
      img: "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lkdn: "",
      inst: "",
      git: "",
      web: "",
    },
    {
      name: "Alvin",
      role: "Technical Member",
      img: "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lkdn: "",
      inst: "",
      git: "",
      web: "",
    },
    {
      name: "Alvin",
      role: "Technical Member",
      img: "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lkdn: "",
      inst: "",
      git: "",
      web: "",
    },
  ];
  return (
    <div className="md:w-[80%] w-[90%] mx-auto py-5">
      <p className="text-2xl mb-5 font-semibold lg:text-3xl max-w-2xl text-neutral-500 text-start dark:text-neutral-300">
        Our Projects
      </p>
      <div className="relative grid md:grid-cols-2 gap-3">
        <Card className="grid md:grid-cols-2 gap-3">
          <Image
            src="https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-md p-2 h-full w-full aspect-square"
            height={100}
            width={100}
            alt="logo"
          />
          <div>
            <CardHeader className="border-b">
              <CardTitle>Project Cell</CardTitle>
              <CardDescription>
                Deploy your new project in one-click. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Aut voluptatibus labore,
                quia aliquam necessitatibus, cum nesciunt provident expedita
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-3 flex justify-between">
              <Button>Know More</Button>
            </CardFooter>
          </div>
        </Card>
        <Card className="grid md:grid-cols-2 gap-3">
          <Image
            src="https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-md p-2 h-full w-full aspect-square"
            height={100}
            width={100}
            alt="logo"
          />
          <div>
            <CardHeader className="border-b">
              <CardTitle>Project Cell</CardTitle>
              <CardDescription>
                Deploy your new project in one-click. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Aut voluptatibus labore,
                quia aliquam necessitatibus, cum nesciunt provident expedita
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-3 flex justify-between">
              <Button>Know More</Button>
            </CardFooter>
          </div>
        </Card>
        <Card className="md:grid hidden md:grid-cols-2 gap-3">
          <Image
            src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-md p-2 h-full w-full aspect-square"
            height={100}
            width={100}
            alt="logo"
          />
          <div>
            <CardHeader className="border-b">
              <CardTitle>Project Cell</CardTitle>
              <CardDescription>
                Deploy your new project in one-click. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Aut voluptatibus labore,
                quia aliquam necessitatibus, cum nesciunt provident expedita
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-3 flex justify-between">
              <Button>Know More</Button>
            </CardFooter>
          </div>
        </Card>
        <Card className="md:grid hidden md:grid-cols-2 gap-3">
          <Image
            src="https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-md p-2 h-full w-full aspect-square"
            height={100}
            width={100}
            alt="logo"
          />
          <div>
            <CardHeader className="border-b">
              <CardTitle>Project Cell</CardTitle>
              <CardDescription>
                Deploy your new project in one-click. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Aut voluptatibus labore,
                quia aliquam necessitatibus, cum nesciunt provident expedita
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-3 flex justify-between">
              <Button>Know More</Button>
            </CardFooter>
          </div>
        </Card>
        <div className="absolute bottom-0 z-[30] inset-x-0 h-60 bg-gradient-to-t from-0% to-70% from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
        <div className="absolute left-[50%] -translate-x-[50%] bottom-5 flex justify-between z-[30] mx-auto py-5">
          <Button className="flex gap-3">
            See More
            <ChevronRight />
          </Button>
        </div>
      </div>

      <p className="text-2xl my-5 font-semibold lg:text-3xl max-w-2xl text-neutral-500 text-start dark:text-neutral-300">
        Our Events
      </p>
      {/* <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Card className="grid md:grid-cols-2 gap-3">
            <Image
              src="https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-md p-2 h-full w-full aspect-square"
              height={100}
              width={100}
              alt="logo"
            />
            <div>
              <CardHeader className="border-b">
                <CardTitle>Project Cell</CardTitle>
                <CardDescription>
                  Deploy your new project in one-click. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Aut voluptatibus labore,
                  quia aliquam necessitatibus, cum nesciunt provident expedita
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-3 flex justify-between">
                <Button>Know More</Button>
              </CardFooter>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="grid md:grid-cols-2 gap-3">
            <Image
              src="https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-md p-2 h-full w-full aspect-square"
              height={100}
              width={100}
              alt="logo"
            />
            <div>
              <CardHeader className="border-b">
                <CardTitle>Project Cell</CardTitle>
                <CardDescription>
                  Deploy your new project in one-click. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Aut voluptatibus labore,
                  quia aliquam necessitatibus, cum nesciunt provident expedita
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-3 flex justify-between">
                <Button>Know More</Button>
              </CardFooter>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="grid md:grid-cols-2 gap-3">
            <Image
              src="https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-md p-2 h-full w-full aspect-square"
              height={100}
              width={100}
              alt="logo"
            />
            <div>
              <CardHeader className="border-b">
                <CardTitle>Project Cell</CardTitle>
                <CardDescription>
                  Deploy your new project in one-click. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Aut voluptatibus labore,
                  quia aliquam necessitatibus, cum nesciunt provident expedita
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-3 flex justify-between">
                <Button>Know More</Button>
              </CardFooter>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="grid md:grid-cols-2 gap-3">
            <Image
              src="https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-md p-2 h-full w-full aspect-square"
              height={100}
              width={100}
              alt="logo"
            />
            <div>
              <CardHeader className="border-b">
                <CardTitle>Project Cell</CardTitle>
                <CardDescription>
                  Deploy your new project in one-click. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Aut voluptatibus labore,
                  quia aliquam necessitatibus, cum nesciunt provident expedita
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-3 flex justify-between">
                <Button>Know More</Button>
              </CardFooter>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="grid md:grid-cols-2 gap-3">
            <Image
              src="https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-md p-2 h-full w-full aspect-square"
              height={100}
              width={100}
              alt="logo"
            />
            <div>
              <CardHeader className="border-b">
                <CardTitle>Project Cell</CardTitle>
                <CardDescription>
                  Deploy your new project in one-click. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Aut voluptatibus labore,
                  quia aliquam necessitatibus, cum nesciunt provident expedita
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-3 flex justify-between">
                <Button>Know More</Button>
              </CardFooter>
            </div>
          </Card>
        </SwiperSlide>
      </Swiper> */}

      <CardsCarouselDemo/>

      {/* <div className="relative grid md:grid-cols-2 gap-3">
        <Card className="grid md:grid-cols-2 gap-3">
          <Image
            src="https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-md p-2 h-full w-full aspect-square"
            height={100}
            width={100}
            alt="logo"
          />
          <div>
            <CardHeader className="border-b">
              <CardTitle>Project Cell</CardTitle>
              <CardDescription>
                Deploy your new project in one-click. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Aut voluptatibus labore,
                quia aliquam necessitatibus, cum nesciunt provident expedita
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-3 flex justify-between">
              <Button>Know More</Button>
            </CardFooter>
          </div>
        </Card>
        <Card className="grid md:grid-cols-2 gap-3">
          <Image
            src="https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-md p-2 h-full w-full aspect-square"
            height={100}
            width={100}
            alt="logo"
          />
          <div>
            <CardHeader className="border-b">
              <CardTitle>Project Cell</CardTitle>
              <CardDescription>
                Deploy your new project in one-click. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Aut voluptatibus labore,
                quia aliquam necessitatibus, cum nesciunt provident expedita
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-3 flex justify-between">
              <Button>Know More</Button>
            </CardFooter>
          </div>
        </Card>
        <Card className="md:grid hidden md:grid-cols-2 gap-3">
          <Image
            src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-md p-2 h-full w-full aspect-square"
            height={100}
            width={100}
            alt="logo"
          />
          <div>
            <CardHeader className="border-b">
              <CardTitle>Project Cell</CardTitle>
              <CardDescription>
                Deploy your new project in one-click. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Aut voluptatibus labore,
                quia aliquam necessitatibus, cum nesciunt provident expedita
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-3 flex justify-between">
              <Button>Know More</Button>
            </CardFooter>
          </div>
        </Card>
        <Card className="md:grid hidden md:grid-cols-2 gap-3">
          <Image
            src="https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-md p-2 h-full w-full aspect-square"
            height={100}
            width={100}
            alt="logo"
          />
          <div>
            <CardHeader className="border-b">
              <CardTitle>Project Cell</CardTitle>
              <CardDescription>
                Deploy your new project in one-click. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Aut voluptatibus labore,
                quia aliquam necessitatibus, cum nesciunt provident expedita
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-3 flex justify-between">
              <Button>Know More</Button>
            </CardFooter>
          </div>
        </Card>
        <div className="absolute bottom-0 z-[30] inset-x-0 h-60 bg-gradient-to-t from-0% to-70% from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
        <div className="absolute left-[50%] -translate-x-[50%] bottom-5 flex justify-between z-[30] mx-auto py-5">
          <Button className="flex gap-3">
            See More
            <ChevronRight />
          </Button>
        </div>
      </div> */}

      <p
        id="our-team"
        className="text-2xl my-5 font-semibold lg:text-3xl max-w-2xl text-neutral-500 text-start dark:text-neutral-300"
      >
        Our Team
      </p>
      <div className="grid md:grid-cols-4 gap-3">
        {team.map((values, i) => {
          return (
            <Card key={i}>
              <div className="flex flex-col items-center py-10">
                <Image
                  src={values.img}
                  className="rounded-full shadow-lg mb-3 aspect-square"
                  height={150}
                  width={150}
                  alt="User Image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {values.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {values.role}
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a href={values.inst} target="blank">
                    <Instagram />
                  </a>
                  <a href={values.git} target="blank">
                    <Github />
                  </a>
                  <a href={values.lkdn} target="blank">
                    <Linkedin />
                  </a>
                  <a href={values.web} target="blank">
                    <Globe />
                  </a>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
