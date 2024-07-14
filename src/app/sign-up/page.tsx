import { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

// Components
import SignInForm from "@/components/signInComps/SignInForm";
import SignInRightSide from "@/components/signInComps/SignInRightSide";

// export const metaData: Metadata = {
//   title: `Sign up - ${process.env.NEXT_PUBLIC_APP_NAME}`,
// };

const SignUp = async () => {
  const session = await auth();

  if (session && session?.user) {
    return redirect("/");
  }

  return (
    <main className="content-full-height pt-minus-nav-bar">
      <div className="content-full-height flex min-h-full">
        <SignInForm isLogin={false} />
        <SignInRightSide />
      </div>
    </main>
  );
};

export default SignUp;
