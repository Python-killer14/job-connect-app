"use client";
import { useSearchParams } from "next/navigation";

const UserIdPage = ({ searchParams }: any) => {
  // const searchParams = useSearchParams();
  // const queryParam = searchParams.get("page");
  // console.log("searchparams:", searchParams);

  return (
    <div className=" content-full-height pt-minus-nav-bar bg-lime-50">
      <h1>Hello {searchParams.page}</h1>
    </div>
  );
};

export default UserIdPage;
