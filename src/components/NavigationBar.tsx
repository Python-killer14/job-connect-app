import { Bell } from "lucide-react";
import { FC } from "react";

// Compopnents
import HamburgerMenuSheet from "./HamburgerMenuSheet";
import UserProfileMenu from "./UserProfileMenu";
import { Button } from "./ui/button";
import Link from "next/link";

// Types
import NavItemsList from "./NavItemsList";

const NavigationBar: FC = () => {
  return (
    <div className=" navigation_bar shadow dark:bg-gun-metal sticky top-0 z-10 bg-white mx-auto w-full max-w-screen-xl py-3 px-4 md-plus:px-6">
      <nav className="flex justify-between items-center">
        <Link href="/">{process.env.NEXT_PUBLIC_APP_NAME}</Link>
        <NavItemsList />
        {/* Right side of the  */}
        <div className="flex items-center gap-2">
          <UserProfileMenu />
          <HamburgerMenuSheet />
          <Link href="/new-job">
            <Button className=" hidden md-plus:block text-black bg-hover-gray hover:bg-hover-gray">
              Employers/Post job
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
