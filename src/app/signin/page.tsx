import SignInForm from "@/components/signInComps/SignInForm";
import SignInRightSide from "@/components/signInComps/SignInRightSide";
import Image from "next/image";

const SignIn = () => {
  return (
    <main className="content-full-height pt-minus-nav-bar">
      <div className="content-full-height flex">
        <SignInForm />
        <SignInRightSide />
      </div>
    </main>
  );
};

export default SignIn;
