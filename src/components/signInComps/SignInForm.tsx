import React from "react";

// Components
import Link from "next/link";
import SeparatorLine from "../quickComps/SeparatorLine";
import OAuthBtn from "./OAuthBtn";
import AuthForm from "./AuthForm";

const SignInForm = ({ isLogin = true }) => {
  return (
    <div className="flex-1 px-2 md-plus:px-10 my-auto">
      <div className="max-w-md mx-auto py-4">
        {/* Welcome text section */}
        <section>
          <h2 className="text-2xl font-semibold">
            {isLogin ? "Login to your Account" : "Create new account"}
          </h2>
          <p className=" text-muted-foreground text-sm pt-2 pb-5">
            {isLogin
              ? "Welcome back! choose a method to lgin."
              : "Welcome! choose a method sign up."}
          </p>
        </section>
        {/* Oauth btns */}
        <section className=" flex items-center gap-3 pt-4 pb-5">
          <OAuthBtn
            provider="google"
            label="Google"
            logo="/images/google-logo.png"
          />

          <OAuthBtn
            provider="github"
            label="github"
            logo="/images/google-logo.png"
          />
        </section>

        {/* Separator */}
        <SeparatorLine note="or continue with email" classNames="my-6" />

        {/* Form */}
        <AuthForm isLogin={isLogin} />

        <section className="pt-4">
          <p className="font-medium text-center text-xs">
            {isLogin ? "Dont have an account? " : "Already have an account? "}
            <Link
              href={isLogin ? "/sign-up" : "/signin"}
              className="  text-blue-600 underline"
            >
              {isLogin ? " Create account here" : "Sign in here"}
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default SignInForm;
