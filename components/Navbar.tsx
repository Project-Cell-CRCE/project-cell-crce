import { Home, Lightbulb, Menu, Presentation, Users2 } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ThemeToggle from "./Themetoggle";
import { Button } from "./ui/button";

const Navbar = () => {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Event Name",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

  const projects = [
    {
      title: "Pani Puri Vending Machine",
      desc: "Check out our Latest Projects and see what we have built in the past years",
      link: "/projects/pani-puri",
    },
    {
      title: "Drone Competition",
      desc: "Check out our Latest Projects and see what we have built in the past years",
      link: "/projects/pani-puri",
    },
    {
      title: "New Project Machine",
      desc: "Check out our Latest Projects and see what we have built in the past years",
      link: "/projects/pani-puri",
    },
  ];
  return (
    <div className="sticky top-0 z-[40] w-full">
      <nav className="bg-white dark:bg-black">
        <div className="md:mx-10 mx-2 flex flex-wrap items-center justify-between p-2">
          <a
            href="/"
            className="flex items-center space-x-3 text-white rtl:space-x-reverse"
          >
            <Image
              src="/logo.png"
              className="rounded-md "
              height={25}
              width={25}
              alt="logo"
            />
            <div className="py-auto">
              <span
                className="text-[22px] text-black md:text-[24px] dark:text-white"
                style={{ lineHeight: "32px", fontWeight: "600" }}
              >
                Project Cell
              </span>
            </div>
          </a>
          <div className="md:block hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/projects"
                          >
                            <Presentation className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Our Projects
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Check out our Latest Projects and see what we have
                              built in the past years
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {projects.map((values, i) => {
                        return (
                          <ListItem
                            key={i}
                            href={values.link}
                            title={values.title}
                          >
                            {values.desc}
                          </ListItem>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Our Events</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/team" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Our Team
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div>
            <div className="md:mx-8 bg-white dark:bg-black" id="navbar-default">
              <div className="flex gap-5">
                <div className="block rounded my-auto text-black hover:text-black md:border-0 md:p-0 md:hover:bg-transparent dark:text-white dark:hover:text-gray-400">
                  <ThemeToggle />
                </div>
                <div className="md:hidden block rounded my-auto text-black hover:text-black md:border-0 md:p-0 md:hover:bg-transparent dark:text-white dark:hover:text-gray-400">
                  <Menu />
                </div>
                <Button className="md:block hidden">Login</Button>
              </div>
              {/* <ul className="flex items-center justify-center rounded-lg border-gray-900 bg-white font-medium mt-0 flex-row md:space-x-5 space-x-3 border-0 rtl:space-x-reverse dark:bg-black">
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
                <li>
                  <a
                    href="/team"
                    className="block rounded py-2 text-black hover:text-black md:border-0 md:p-0 md:hover:bg-transparent dark:text-white dark:hover:text-gray-400"
                  >
                    <Presentation />
                  </a>
                </li>
                <li>
                  <div className="block rounded py-2 text-black hover:text-black md:border-0 md:p-0 md:hover:bg-transparent dark:text-white dark:hover:text-gray-400">
                    <ThemeToggle />
                  </div>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
