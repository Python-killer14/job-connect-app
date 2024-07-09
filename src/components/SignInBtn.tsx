import { Session } from "next-auth";

import { auth, signIn, signOut } from "@/lib/auth";
import { Button } from "./ui/button";
import UserProfileMenu from "./UserProfileMenu";

export async function SignIn() {
  const session: Session | null = await auth();

  return (
    <div>
      {session ? (
        <div className="flex items-center cursor-pointer">
          <UserProfileMenu />
        </div>
      ) : (
        <div>
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
            // className="w-full bg-red-50"
          >
            <Button className=" bg-rose-red">Sign in</Button>
          </form>
        </div>
      )}
    </div>
  );
}
