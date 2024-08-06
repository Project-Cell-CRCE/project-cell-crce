"use client";
import {
  CalendarFold,
  Home,
  LineChart,
  Package,
  Package2,
  PackageOpen,
  PanelLeft,
  Presentation,
  Settings,
  ShoppingCart,
  User2,
  UserCircle2,
  Users2,
} from "lucide-react";
import React, { Children, useEffect, useLayoutEffect, useState } from "react";
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
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = ({children}:{children: React.ReactNode}) => {
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

  const provider = new GoogleAuthProvider();
  const LogIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        const token = credential.accessToken;
      }
      const user = result.user;
      console.log("User:", user);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error(
        "Error during sign-in:",
        errorCode,
        errorMessage,
        email,
        credential
      );
    }
  };

  const userSignout = () => {
    sessionStorage.clear();
    signOut(auth)
      .then(() => {
        sessionStorage.clear();
      })
      .catch((e) => console.log(e));
  };

  const [userAuth, setUserAuth] = useState<User | null>(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setUserAuth(user);
      } else {
        setUserAuth(null);
      }
    });
    return () => {
      listen();
    };
  }, [LogIn, userSignout]);

  return (
    <>
      <nav className="md:block hidden bg-white dark:bg-black">
        <div className="z-[30] md:mx-10 mx-2 flex flex-wrap items-center justify-between p-2">
          <a
            href="/"
            className="flex items-center space-x-3 text-white rtl:space-x-reverse"
          >
            <Image
              src="/logo.png"
              className="rounded-md"
              height={25}
              width={25}
              alt="logo"
            />
            <div className="py-auto">
              <span
                className="text-[22px] text-black md:text-[24px] dark:text-white"
                style={{ lineHeight: "32px", fontWeight: "600" }}
              >
                Project Cell CRCE
              </span>
            </div>
          </a>
          <div className="z-[30] md:block hidden">
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
                      {projects.map((values, i) => (
                        <ListItem
                          key={i}
                          href={values.link}
                          title={values.title}
                        >
                          {values.desc}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Our Events</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
                  <Link href="/#our-team" legacyBehavior passHref>
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
                {userAuth ? (
                  <>
                    {/* <Button onClick={userSignout} className="md:block hidden">
                      SignOut
                    </Button> */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="block rounded my-auto text-black hover:text-black md:border-0 md:p-0 md:hover:bg-transparent dark:text-white dark:hover:text-gray-400">
                          {userAuth.photoURL ? (
                            <Image
                              src={userAuth.photoURL}
                              height={35}
                              width={35}
                              className="rounded-full shadow shadow-black dark:shadow-white border-0.5 border-black dark:border-white"
                              alt={userAuth.displayName!}
                            />
                          ) : (
                            <UserCircle2 />
                          )}
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>My Profile</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link href={`/profile/${userAuth.uid}`}>
                          <DropdownMenuItem>
                            {userAuth.displayName}
                          </DropdownMenuItem>
                        </Link>
                        <Link href={`/profile/${userAuth.uid}`}>
                          <DropdownMenuItem>{userAuth.email}</DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem onClick={userSignout}>
                          Sign Out
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                ) : (
                  <Button onClick={LogIn} className="md:block hidden">
                    Login
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
      </nav>

      <div className="md:hidden flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="md:hidden sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto w-full sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <div className="flex justify-between w-full">
                <div className="flex gap-2">
                  <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="sm:hidden">
                      <PanelLeft className="h-5 w-5" />
                      <span className="sr-only">Toggle Menu</span>
                    </Button>
                  </SheetTrigger>
                  <a
                    href="/"
                    className="flex items-center space-x-3 text-white rtl:space-x-reverse"
                  >
                    <Image
                      src="/logo.png"
                      className="rounded-md"
                      height={25}
                      width={25}
                      alt="logo"
                    />
                    <div className="py-auto">
                      <span
                        className="text-[22px] text-black md:text-[24px] dark:text-white"
                        style={{ lineHeight: "32px", fontWeight: "600" }}
                      >
                        Project Cell CRCE
                      </span>
                    </div>
                  </a>
                </div>
                <div className="rounded my-auto text-black hover:text-black md:border-0 md:p-0 md:hover:bg-transparent dark:text-white dark:hover:text-gray-400">
                  <ThemeToggle />
                </div>
              </div>
              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                    prefetch={false}
                  >
                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    <Home className="h-5 w-5" />
                    Home
                  </Link>
                  <Link
                    href="/projects"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    <PackageOpen className="h-5 w-5" />
                    Projects
                  </Link>
                  <Link
                    href="/events"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    <CalendarFold className="h-5 w-5" />
                    Events
                  </Link>
                  <Link
                    href="/#our-team"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    <Users2 className="h-5 w-5" />
                    Team
                  </Link>
                  {userAuth ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="block rounded my-auto text-black hover:text-black md:border-0 md:p-0 md:hover:bg-transparent dark:text-white dark:hover:text-gray-400">
                          {userAuth.photoURL ? (
                            <div className="border-t border-black/60 dark:border-white/60 pt-5 flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                              <Image
                                src={userAuth.photoURL}
                                height={35}
                                width={35}
                                className="rounded-full shadow shadow-black dark:shadow-white border-0.5 border-black dark:border-white"
                                alt={userAuth.displayName!}
                              />
                              {userAuth.displayName}
                            </div>
                          ) : (
                            <div className="border-t border-black/60 dark:border-white/60 pt-5 flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                              <UserCircle2 />
                              <p>My Profile</p>
                            </div>
                          )}
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>My Profile</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link href={`/profile/${userAuth.uid}`}>
                          <DropdownMenuItem>
                            {userAuth.displayName}
                          </DropdownMenuItem>
                        </Link>
                        <Link href={`/profile/${userAuth.uid}`}>
                          <DropdownMenuItem>{userAuth.email}</DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem onClick={userSignout}>
                          Sign Out
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <button
                      onClick={LogIn}
                      className="border-t border-black/60 dark:border-white/60 pt-5 flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <User2 className="h-5 w-5" />
                      Login
                    </button>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </header>
        </div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
      </div>
    </>
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
