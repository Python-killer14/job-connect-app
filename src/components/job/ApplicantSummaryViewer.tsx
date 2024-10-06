"use client";
import { useState } from "react";
import { ReviewInfoHeader } from "./ReviewInfoHeader";
import { Button } from "../ui/button";

// Hooks
import usePagination from "@/hooks/usePagination";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementPagination,
  incrementPagination,
} from "@/redux/slices/infoPaginationSlice";
import { RootState } from "@/redux/store";

const fetchUser = async () => {
  try {
    const response = await fetch("/api/users/user-data");
    const data = await response.json();
    console.log("User >>", data);
  } catch (err) {
    console.log("Error fetching:", err);
  }
};

fetchUser();

const ApplicantSummaryViewer = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState("");
  // const { currentStep, incrementStep, decrementStep } = usePagination();
  const currentStep = useSelector(
    (state: RootState) => state.infoPagination.currentStep
  );

  const handleIncrement = () => {
    dispatch(incrementPagination());
  };

  const handleDecrement = () => {
    dispatch(decrementPagination());
  };

  return (
    <section>
      <div className="relative py-6 px-14 shadow border min-h-[calc(100vh-200px)] max-h-[500px]">
        {currentStep === 1 && <BasicInfo />}
        {currentStep == 2 && <ProfileInfo />}
        {currentStep}
        <div className="absolute bottom-0 left-0 px-14 py-3 bg-red-50 flex justify-between w-full">
          <Button
            onClick={handleDecrement}
            className=" bg-rose-red hover:bg-darker-red-rose"
          >
            Previous
          </Button>
          <Button
            onClick={handleIncrement}
            className=" bg-rose-red hover:bg-darker-red-rose"
          >
            Next step
          </Button>
        </div>
        {/* Profile */}
        {/* Resume */}
      </div>
    </section>
  );
};

export default ApplicantSummaryViewer;

const BasicInfo = () => {
  return (
    <section>
      {/* 1 Basic info section */}
      <section className="">
        <ReviewInfoHeader header="Your information" />
      </section>

      <section className="pt-6">
        <div className="">
          <img
            src="/images/vecteezy-work.jpg"
            className=" w-20 h-20 object-cover shadow-md border rounded-full"
          />
        </div>
        <div className="mt-3">
          <h1 className="font-medium text-lg">Robel Tesfay</h1>
          <p className="text-sm text-neutral-500">Web developer</p>
          <p className="mt-3 text-sm text-neutral-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum saepe
            explicabo reiciendis, vero nesciunt fugiat, delectus ab inventore
            ullam, veritatis repudiandae quae suscipit possimus impedit fugit.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            voluptas, officia quia rem excepturi illum vero enim laboriosam
            debitis in.
          </p>
        </div>
      </section>
    </section>
  );
};

const ProfileInfo = () => {
  return (
    <section>
      <ReviewInfoHeader header="Experiences" />
    </section>
  );
};
