"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Types
import { AppDispatch, RootState } from "@/redux/store";
import { MenuItemType } from "@/types/navigation/navTypes";

// Components
import NavItem from "./NavItem";
import { X } from "lucide-react";

// Redux
import { hideMenuBar } from "@/redux/slices/menuBarSlice";
import { useDispatch, useSelector } from "react-redux";

// Nav items data
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

const NavItemsList = () => {
  const menuBarState = useSelector(
    (state: RootState) => state.menuBar.menuBarState
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleCloseMenuBar = (): void => {
    dispatch(hideMenuBar());
  };

  return (
    <AnimatePresence>
      {menuBarState && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className={cn(
            "fixed inset-0 h-screen flex items-center justify-center bg-[#00000056] md-plus:static md-plus:flex md-plus:h-auto md-plus:w-auto"
          )}
        >
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.1 }}
            className={cn(
              "pt-4 md-plus:pt-0 flex flex-col md-plus:flex-row bg-white ml-auto items-start md-plus:gap-4 w-3/4 sm-plus:w-[60%] md-plus:w-full border-black h-full md-plus:h-auto transition-transform ease-linear"
            )}
          >
            <X
              onClick={handleCloseMenuBar}
              className="self-end mr-2 mb-6 cursor-pointer md-plus:hidden"
              size={34}
            />
            {menuData.map(({ id, name, slug, iconName }) => (
              <NavItem key={id} name={name} slug={slug} iconName={iconName} />
            ))}
          </motion.div>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default NavItemsList;
