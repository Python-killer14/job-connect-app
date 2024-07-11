import { Bell } from "lucide-react";
import { FC } from "react";

// Compopnents
import DarkModeToggle from "./DarkModeToggle";

// Types
import NavItemsList from "./NavItemsList";
import HamburgerMenuSheet from "./HamburgerMenuSheet";
import UserProfileMenu from "./UserProfileMenu";
import { Button } from "./ui/button";
import Link from "next/link";

const NavigationBar: FC = () => {
  return (
    <div className=" shadow dark:bg-gun-metal fixed z-10 bg-white mx-auto w-full max-w-screen-xl py-3 px-4 md-plus:px-6 ">
      <nav className="flex justify-between items-center">
        <Link href="/">{process.env.NEXT_PUBLIC_APP_NAME}</Link>
        <NavItemsList />
        {/* Right side of the  */}
        <div className="flex items-center gap-2">
          <Bell
            className="cursor-pointer w-10 h-10 hover:bg-light-rose transition-colors rounded-md duration-150 ease-in-out p-2"
            strokeWidth={1.8}
          />
          <span className="hidden md-plus:inline">
            <DarkModeToggle />
          </span>
          <UserProfileMenu />
          <HamburgerMenuSheet />
          <Button className=" hidden md-plus:block text-black bg-hover-gray hover:bg-hover-gray">
            Employers/Post job
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
