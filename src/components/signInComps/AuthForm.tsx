"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Zod and form validation
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authFormSchema } from "./formValidationSchemas/formValidationSchema";

// Compons
import { Input } from "@mui/joy";
import { Button } from "../ui/button";

// Icons
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { SignUpFormTypes } from "@/types/authTypes/authTypes";
import { signIn } from "next-auth/react";

const AuthForm = ({ isLogin }: { isLogin: boolean }) => {
  // Form  validation setups
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpFormTypes>({ resolver: zodResolver(authFormSchema) });

  // States
  const [passwordType, setPasswordType] = useState<string>("password");

  const togglePassType = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };

  // On submit handler function
  const onSubmit: SubmitHandler<SignUpFormTypes> = async (data) => {
    if (isLogin) {
      // Handle sign in
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false, //Prevent redirect
      });

      if (res && res.error) {
        setError("email", { type: "manual", message: res.error });
      }

      console.log("signin resp:", res);
    } else {
      // Handle sign up
      // console.log("Sign up data:", data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(isLogin ? "grid" : "grid grid-cols-2 gap-x-2 text-inherit")}
    >
      <div className="col-span-2 mb-4 ">
        <Input
          type="email"
          placeholder="Email"
          startDecorator={<Mail strokeWidth={1.4} className="" />}
          {...register("email")}
        />
        {errors.email?.message && (
          <p className=" text-xs text-red-600 mt-1">
            {/* Invalid email, pls try again. */}
            {errors.email.message}
          </p>
        )}
      </div>

      {!isLogin && (
        <div className="mb-4">
          <Input
            type="text"
            placeholder="First Name"
            startDecorator={<User strokeWidth={1.4} className="" />}
            className=""
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-xs text-red-600 mt-1">
              {errors.firstName?.message || "Err"}
            </p>
          )}
        </div>
      )}

      {!isLogin && (
        <div className=" mb-4">
          <Input
            type="text"
            placeholder="Last Name"
            startDecorator={<User strokeWidth={1.4} className="" />}
            className=""
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className=" text-xs text-red-600 mt-1">
              {errors.lastName?.message}
            </p>
          )}
        </div>
      )}

      <div className="col-span-2">
        <Input
          type={passwordType}
          placeholder="Password"
          startDecorator={<Lock strokeWidth={1.4} />}
          endDecorator={
            passwordType === "password" ? (
              <Eye onClick={togglePassType} />
            ) : (
              <EyeOff onClick={togglePassType} />
            )
          }
          className="border rounded col-span-2"
          {...register("password")}
        />
        {errors.password && (
          <p className=" text-xs text-red-600 mt-1">
            {errors.password?.message}
          </p>
        )}
      </div>

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
      <Button
        type="submit"
        className={cn(
          "mt-6 w-full col-span-2 bg-rose-red transition-colors duration-100 ease-linear hover:bg-darker-red-rose"
        )}
      >
        {isLogin ? "Sign in" : "Sign up"}
      </Button>
    </form>
  );
};

export default AuthForm;
