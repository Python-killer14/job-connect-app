import React from "react";
import { Input } from "@nextui-org/react";
import { TextInput } from "@tremor/react";
import { Button } from "../ui/button";
import Link from "next/link";
import SeparatorLine from "../quickComps/SeparatorLine";
import { Lock, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const SignInForm = ({ isLogin = true }) => {
  return (
    <div className="flex-1 px-10 my-auto ">
      <div className=" max-w-96 mx-auto">
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
          <Button className=" w-full max-w-[50%]">Google</Button>
          <Button className=" w-full max-w-[50%]">Facebook</Button>
        </section>

        {/* Separator */}
        <SeparatorLine note="or continue with email" classNames="my-6" />

        {/* Form */}
        <form action="" className="">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            startContent={<Mail strokeWidth={1.4} className="mr-2" />}
            className="border rounded mb-6"
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            startContent={<Lock strokeWidth={1.4} className="mr-2" />}
            className="border rounded"
            color="secondary"
          />

          {/* Forgot password options */}
          <section className=" text-right py-2 ">
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
          <Button type="submit" className={cn("mt-8 w-full")}>
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
