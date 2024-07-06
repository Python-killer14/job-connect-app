// Types
import { Session } from "next-auth";

import { auth, signIn } from "@/lib/auth";
import Image from "next/image";

export async function SignIn() {
  const session: Session | null = await auth();

  // console.log("ses",session);

  return (
    <div>
      {session ? (
        <div className="flex gap-2">
          <Image
            className="w-9 h-9 rounded-full"
            src={session?.user?.image || "https://i.pravatar.cc"}
            height={40}
            width={40}
            alt="placeholder avatar"
          />
          <div>
            <p className=" text-sm font-medium">{session?.user?.name || ""}</p>
            <p className=" text-xs text-muted-darker">
              {session?.user?.email || ""}
            </p>
          </div>
        </div>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <button className="" type="submit">
            Signin{" "}
          </button>
        </form>
      )}
    </div>
  );
}
