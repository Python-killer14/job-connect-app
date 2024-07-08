import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";

const HamburgerMenuSheet = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="w-8 h-8 md-plus:hidden" />
        </SheetTrigger>
        <SheetContent side={"top"}>
          <p>klds</p>
        </SheetContent>
        {/* <SheetFooter> */}
        <SheetClose asChild>Close</SheetClose>
        {/* </SheetFooter> */}
      </Sheet>
    </div>
  );
};

export default HamburgerMenuSheet;
