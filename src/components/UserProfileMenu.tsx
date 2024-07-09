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
              src={session?.user?.image || "https://i.pravatar.cc"}
              height={40}
              width={40}
              alt="placeholder avatar"
            />
            {/* <div className="hidden lg:block">
                <p className=" text-sm font-medium">
                  {session?.user?.name || ""}
                </p>
                <p className=" text-xs text-muted-darker">
                  {session?.user?.email || ""}
                </p>
              </div> */}
            {/* </div> */}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <Button className=" bg-rose-red">Sign out</Button>
                </form>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Profile
                {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="/signin">
          <Button className=" bg-rose-red">Sign in</Button>
        </Link>
      )}
    </div>
  );
};

export default UserProfileMenu;
