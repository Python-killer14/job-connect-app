import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { auth, signIn } from "@/lib/auth";
import { Button } from "./button";

const UserProfileMenu = async () => {
  const session = await auth();

  return (
    <div>
      {session && session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex gap-2 cursor-pointer">
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
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <p>jk</p>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <Button className=" bg-rose-red">Sign in</Button>
        </form>
      )}
    </div>
  );
};

export default UserProfileMenu;
