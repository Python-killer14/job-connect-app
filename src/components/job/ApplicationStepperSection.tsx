"use client";
import usePagination from "@/hooks/usePagination";
import { Step, StepIndicator, Stepper } from "@mui/joy";
import { Check } from "lucide-react";
import React from "react";

export type StepperData = {
  id: number;
  title: string;
};
interface ApplicationStepperProps {
  stepperData: StepperData[];
}

const ApplicationStepperSection: React.FC<ApplicationStepperProps> = ({
  stepperData,
}: ApplicationStepperProps) => {
  const { currentStep } = usePagination();
  return (
    <section className="py-4  max-w-2xl mx-auto">
      <Stepper orientation="horizontal" sx={{ width: "100%" }}>
        {stepperData.map((data) => {
          return (
            <Step
              key={data.id}
              indicator={
                <StepIndicator
                  variant={currentStep < data.id ? "outlined" : "solid"}
                  color={currentStep >= data.id ? "success" : "neutral"}
                  sx={{
                    padding: "4px",
                  }}
                >
                  {currentStep > data.id ? <Check size={30} /> : data.id}
                </StepIndicator>
              }
            >
              {data.title}
            </Step>
          );
        })}
      </Stepper>
    </section>
  );
};

export default ApplicationStepperSection;
