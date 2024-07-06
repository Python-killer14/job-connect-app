import { Bell, BriefcaseBusiness, X } from "lucide-react";
import Link from "next/link";
import NavItem from "./NavItem";
import { FC } from "react";
import DarkModeToggle from "./DarkModeToggle";

// Types
import { MenuItemType } from "@/types/navigation/navTypes";
import { SignIn } from "./SignInBtn";

const menuData: MenuItemType[] = [
  {
    id: "m1",
    name: "Find work",
    slug: "/",
    iconName: "briefCase",
  },
  {
    id: "m2",
    name: "Messages",
    slug: "/messages",
    iconName: "message",
  },
  {
    id: "m3",
    name: "My profile",
    slug: "/profile",
    iconName: "profile",
  },
];

const NavigationBar: FC = () => {
  return (
    <div className=" dark:bg-gun-metal mx-auto w-full max-w-screen-xl py-3 px-6 ">
      <nav className="flex justify-between items-center">
        <div>{process.env.NEXT_PUBLIC_APP_NAME}</div>
        <ul className="items-center gap-4 fixed w-full h-screen bg-[#00000056] top-0 right-0 md-plus:static md-plus:flex md-plus:h-auto md-plus:w-auto ">
          <div className=" pt-4 md-plus:pt-0 flex flex-col md-plus:flex-row bg-white ml-auto items-start md-plus:gap-4 w-3/4 sm-plus:w-[60%] md-plus:w-full border-black h-screen md-plus:h-auto ">
            <X
              className=" self-end mr-2 mb-6 cursor-pointer md-plus:hidden"
              size={34}
            />
            {menuData.map(({ id, name, slug, iconName }) => {
              return (
                <NavItem key={id} name={name} slug={slug} iconName={iconName} />
              );
            })}
            {/* <button className=" mt-auto">Signout</button> */}
          </div>
        </ul>
        {/* Right side of the  */}
        <div className="flex items-center gap-5">
          <Bell className=" cursor-pointer" strokeWidth={1.5} />
          <DarkModeToggle />
          <SignIn />
          <button className=" bg-hover-gray px-2 py-2 rounded">
            Employers/Post job
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
