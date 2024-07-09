import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import NavItemsList from "./NavItemsList";
import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";

const HamburgerMenuSheet = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="w-8 h-8 md-plus:hidden" />
        </SheetTrigger>
        <SheetContent side={"top"} className="pt-14">
          <NavItemsList forSmallScreen={true} />
          <div>
            <DarkModeToggle />
          </div>
          <SheetClose className="my-6" asChild>
            <Button type="button" className="">
              Close
            </Button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HamburgerMenuSheet;
