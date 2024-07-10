import SignInForm from "@/components/signInComps/SignInForm";
import { Input } from "@/components/ui/input";
import React from "react";

const SignIn = () => {
  return (
    <main className="content-full-height pt-minus-nav-bar">
      <div className="content-full-height flex">
        <SignInForm />
        <aside className=" flex-1 bg-red-50">2</aside>
      </div>
    </main>
  );
};

export default SignIn;
