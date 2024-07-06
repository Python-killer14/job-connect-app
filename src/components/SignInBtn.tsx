
import { auth, signIn } from "@/lib/auth"
 
export async function SignIn() {

  const session = await auth()
  console.log("sess", session);
  
  return (
    <form
      action={async () => {
        "use server"
        await signIn()
      }}
    >
      <button className="" type="submit">Signin </button>
    </form>
  )
} 