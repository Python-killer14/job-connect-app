// Types
import { Session } from "next-auth";
 
import { auth, signIn } from "@/lib/auth"
import {Avatar} from "@nextui-org/react";


export async function SignIn() {
  const session: Session | null = await auth();
  
  return (
    <div>
      {
        session ?
          <div>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
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