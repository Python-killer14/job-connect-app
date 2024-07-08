// Types
import { Session } from "next-auth";

import { auth, signIn, signOut } from "@/lib/auth";
import Image from "next/image";
import { Button } from "./ui/button";
import UserProfileMenu from "./ui/UserProfileMenu";

export async function SignIn() {
  const session: Session | null = await auth();

  return (
    <div>
      {session ? (
        <div className="flex gap-2 cursor-pointer">
          <UserProfileMenu />
        </div>
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
}
