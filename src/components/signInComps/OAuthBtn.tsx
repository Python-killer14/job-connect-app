import Image from "next/image";
import { Button } from "../ui/button";
import { signIn } from "@/lib/auth";

export type OAuthProps = {
  provider: string;
  logo: string;
  label: string;
};

const OAuthBtn = ({ provider = "google", logo, label }: OAuthProps) => {
  const handleAuthentication = async () => {
    "use server";
    await signIn(provider);
  };

  return (
    <form
      className="flex-1 max-w-[50%] rounded-lg"
      action={handleAuthentication}
    >
      <Button
        type="submit"
        onClick={handleAuthentication}
        className=" flex items-center gap-2 bg-white border text-black shadow w-full hover:bg-white "
      >
        <Image width={20} src={logo} height={20} alt={`${label} logo`} />
        {label}
      </Button>
    </form>
  );
};

export default OAuthBtn;
