import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { auth, signIn, signOut } from "@/lib/auth";
import { Button } from "./ui/button";
import Link from "next/link";

const UserProfileMenu = async () => {
  const session = await auth();

  return (
    <div>
      {session && session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center">
            {/* <div className="flex gap-2 cursor-pointer"> */}
            <Image
              className="w-9 h-9 rounded-full"
              src={session?.user?.image}
              height={40}
              width={40}
              alt="placeholder avatar"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <form
                  className=" w-full"
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <Button className=" bg-rose-red w-full">Sign out</Button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="/signin">
          <Button className=" bg-rose-red transition-colors duration-100 ease-linear hover:bg-darker-red-rose ">
            Sign in
          </Button>
        </Link>
      )}
    </div>
  );
};

export default UserProfileMenu;
