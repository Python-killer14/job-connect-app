"use client";
import Image from "next/image";
import { Button } from "../ui/button";
// import { signIn } from "@/lib/auth";
import { signIn } from "next-auth/react";

export type OAuthProps = {
  provider: string;
  logo: string;
  label: string;
};

const OAuthBtn = ({ provider = "google", logo, label }: OAuthProps) => {
  const handleAuthentication = async () => {
    // "use server";
    await signIn(provider);
  };

  return (
    <div className="flex-1 rounded-lg">
      <Button
        type="submit"
        onClick={handleAuthentication}
        className="flex items-center gap-3 font-semibold bg-white border text-black shadow w-full hover:bg-white "
      >
        <Image width={20} src={logo} height={20} alt={`${label} logo`} />
        {label}
      </Button>
    </div>
  );
};

export default OAuthBtn;
