import SignInForm from "@/components/signInComps/SignInForm";
import { Input } from "@/components/ui/input";
import React from "react";

const SignIn = () => {
  return (
    <main className="content-full-height">
      <div className="content-full-height flex min-h-full">
        <SignInForm />
        <aside className=" flex-1 bg-red-50">2</aside>
      </div>
    </main>
  );
};

export default SignIn;
