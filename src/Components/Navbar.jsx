import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import WebLogo from "/assets/img/LOGOCOMPETITIONWHITE-removebg-preview.png";
import { useLocation } from "react-router-dom";
const CustomNavbar = () => {
  //   const routeName = useLocation().pathname;

  const navigation = [
    {
      name: "Event",
      href: "/#work",
      current: true,
    },
    {
      name: "AboutUs",
      href: "/about",
      current: false,
    },
    {
      name: "Sponsors",
      //   href: routeName === "/about" ? "/about#contact" : "/#contact",
      current: false,
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="bg-[#030014]">
      <div className="grid grid-cols-3 gap-3 p-3">
        <div className="flex flex-shrink-0 items-center justify-center">
          <img
            className="h-8 w-auto"
            src={"/assets/img/LOGOCOMPETITIONWHITE-removebg-preview.png"}
            alt="AshirAzeemLogo"
          />
          {/* <h2 className="hidden sm:block  bebas-neue-regular tracking-wider  mt-1  text-white text-2xl ml-2">
                      <a href="/"> Ashir_Azeem</a>
                    </h2> */}
        </div>
        <div className="flex flex-row items-center justify-center ">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current ? " text-white " : "text-white ",
                "manrope rounded-md px-3 py-2 text-lg font-medium "
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center">
          <button
            type="button"
            className="relative rounded-full bg-[#7038FA]  text-white  px-4  p-2 flex  items-center justify-evenly"
          >
            Lets Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;
