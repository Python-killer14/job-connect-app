import Image from "next/image";
import React from "react";

const SignInRightSide = () => {
  return (
    <aside className=" hidden lg-plus:block flex-1 bg-white-gray">
      <div className="my-auto h-full flex flex-col items-center justify-center ">
        <Image
          src="/images/victeezy-work.png"
          alt="work-illustration"
          height={500}
          width={300}
          className="w-96"
        />
      </div>
    </aside>
  );
};

export default SignInRightSide;
