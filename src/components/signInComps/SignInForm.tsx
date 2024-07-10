import React from "react";
import { cn } from "@/lib/utils";

// Components
// import { Input } from "@nextui-org/react";
import { Input } from "@mui/joy";
import { Button } from "../ui/button";
import Link from "next/link";
import SeparatorLine from "../quickComps/SeparatorLine";
import OAuthBtn from "./OAuthBtn";

// Icons
import { Eye, Lock, Mail, User } from "lucide-react";

const SignInForm = ({ isLogin = true }) => {
  return (
    <div className="flex-1 px-2 md-plus:px-10 my-auto ">
      <div className="max-w-md mx-auto">
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
        <form
          className={cn(
            isLogin ? "grid" : "grid grid-cols-2 gap-x-2 text-inherit"
          )}
        >
          <Input
            type="email"
            name="email"
            placeholder="Email"
            startDecorator={<Mail strokeWidth={1.4} className="" />}
            className={cn("border rounded mb-5 col-span-2")}
          />

          {!isLogin && (
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              startDecorator={<User strokeWidth={1.4} className="" />}
              className="border rounded mb-5"
            />
          )}

          {!isLogin && (
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              startDecorator={<User strokeWidth={1.4} className="" />}
              className="border rounded mb-5"
            />
          )}

          <Input
            type="password"
            name="password"
            placeholder="Password"
            startDecorator={<Lock strokeWidth={1.4} />}
            endDecorator={<Eye />}
            className="border rounded col-span-2"
          />

          {/* Forgot password options */}
          <section className="text-right col-span-2 py-2 ">
            {isLogin && (
              <Link
                href="/forgot-password"
                className=" text-blue-600 text-xs font-medium hover:underline"
              >
                Forgot password
              </Link>
            )}
          </section>

          {/* Submit btn */}
          <Button type="submit" className={cn("mt-8 w-full col-span-2")}>
            {isLogin ? "Sign in" : "Sign up"}
          </Button>
        </form>

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
