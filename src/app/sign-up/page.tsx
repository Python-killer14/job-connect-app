import SignInForm from "@/components/signInComps/SignInForm";
import React from "react";

export const metaData = {
  title: `Sign up - ${process.env.NEXT_PUBLIC_APP_NAME}`,
};

const SignUp = () => {
  return (
    <main className="content-full-height">
      <div className="content-full-height flex min-h-full">
        <SignInForm isLogin={false} />
        <aside className=" flex-1 bg-red-50">2</aside>
      </div>
    </main>
  );
};

export default SignUp;
