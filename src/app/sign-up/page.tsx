import SignInForm from "@/components/signInComps/SignInForm";
import SignInRightSide from "@/components/signInComps/SignInRightSide";
import React from "react";

export const metaData = {
  title: `Sign up - ${process.env.NEXT_PUBLIC_APP_NAME}`,
};

const SignUp = () => {
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
