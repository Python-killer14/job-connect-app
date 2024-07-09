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
import { hideMenuBar, showMenuBar } from "@/redux/slices/menuBarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useWindowWidth } from "@/utils/getWidthSize";

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

const NavItemsList = ({ forSmallScreen = false }) => {
  const dispatch = useDispatch<AppDispatch>();
  const menuBarState = useSelector(
    (state: RootState) => state.menuBar.menuBarState
  );

  // Disable scroll on menuBar display
  useEffect(() => {
    if (menuBarState) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuBarState]);

  return (
    <ul
      className={cn(
        forSmallScreen
          ? "block"
          : "hidden md-plus:flex items-center justify-center gap-4"
      )}
    >
      {menuData.map(({ id, name, slug, iconName }) => (
        <NavItem key={id} name={name} slug={slug} iconName={iconName} />
      ))}
    </ul>
  );
};

export default NavItemsList;
