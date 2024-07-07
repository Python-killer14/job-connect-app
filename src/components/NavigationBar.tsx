import { Bell } from "lucide-react";
import { FC } from "react";
import DarkModeToggle from "./DarkModeToggle";

// Types
import { SignIn } from "./SignInBtn";
import NavItemsList from "./NavItemsList";
import BurgerMenuShow from "./BurgerMenuShow";

const NavigationBar: FC = () => {
  return (
    <div className=" dark:bg-gun-metal mx-auto w-full max-w-screen-xl py-3 pl-3  md-plus:px-6 ">
      <nav className="flex justify-between items-center">
        <div>{process.env.NEXT_PUBLIC_APP_NAME}</div>
        <NavItemsList />
        {/* Right side of the  */}
        <div className="flex items-center gap-2">
          <Bell
            className="cursor-pointer hover:bg-light-rose transition-colors rounded-md duration-150 ease-in-out p-2"
            strokeWidth={1.8}
            size={38}
          />
          <DarkModeToggle />
          <SignIn />
          <BurgerMenuShow />
          <button className=" hidden md-plus:block bg-hover-gray px-2 py-2 rounded">
            Employers/Post job
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
