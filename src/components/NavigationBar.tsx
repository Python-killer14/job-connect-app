import { Bell } from "lucide-react";
import { FC } from "react";
import DarkModeToggle from "./DarkModeToggle";

// Types
import { SignIn } from "./SignInBtn";
import NavItemsList from "./NavItemsList";
import BurgerMenuShow from "./BurgerMenuTrigger";
import HamburgerMenuSheet from "./HamburgerMenuSheet";
import UserProfileMenu from "./ui/UserProfileMenu";

const NavigationBar: FC = () => {
  return (
    <div className=" dark:bg-gun-metal mx-auto w-full max-w-screen-xl py-3 px-4 md-plus:px-6 ">
      <nav className="flex justify-between items-center">
        <div>{process.env.NEXT_PUBLIC_APP_NAME}</div>
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
          {/* <SignIn /> */}
          <UserProfileMenu />
          <HamburgerMenuSheet />
          <button className=" hidden md-plus:block bg-hover-gray px-2 py-2 rounded">
            Employers/Post job
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
