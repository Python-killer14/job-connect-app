import SignInForm from "@/components/signInComps/SignInForm";
import SignInRightSide from "@/components/signInComps/SignInRightSide";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const session = await auth();

  console.log("Session signin page:", session);

  if (session && session?.user) {
    return redirect("/");
  }

  return (
    <main className="content-full-height">
      <div className="content-full-height flex">
        <SignInForm />
        <SignInRightSide />
      </div>
    </main>
  );
};

export default SignIn;
