"use client";
import { showMenuBar } from "@/redux/slices/menuBarSlice";
import { AppDispatch } from "@/redux/store";
import { Menu } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

const BurgerMenuShow = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleShowMenuBar = () => {
    dispatch(showMenuBar());
  };

  return (
    <Menu
      onClick={handleShowMenuBar}
      className=" md-plus:hidden w-12 h-12 cursor-pointer hover:bg-light-rose transition-colors rounded-md duration-150 ease-in-out p-2"
    />
  );
};

export default BurgerMenuShow;
