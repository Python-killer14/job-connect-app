// Types
import { Session } from "next-auth";
 
import { auth, signIn } from "@/lib/auth"
import {Avatar} from "@nextui-org/react";
import Image from "next/image";


export async function SignIn() {
  const session: Session | null = await auth();
  
  return (
    <div>
      {
        session ?
          <div>
            <Image className="w-9 h-9 rounded-full" src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} height={40} width={40} alt="placeholder avatar" />
          </div>
        :
        <form
          action={
            async () => {
            "use server"
            await signIn()
          }}
          >
            <button className="" type="submit">Signin </button>
        </form>
      }
      </div>
  )
} 