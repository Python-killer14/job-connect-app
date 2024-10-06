"use client";
import { useState } from "react";
import { INITIAL_REVIEW_PAGINATION } from "@/utils/constants";

const usePagination = () => {
  const [currentStep, setCurrentStep] = useState<number>(
    INITIAL_REVIEW_PAGINATION
  );

  function incrementStep() {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  }

  function decrementStep() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  return {
    currentStep,
    setCurrentStep,
    incrementStep,
    decrementStep,
  };
};

export default usePagination;
