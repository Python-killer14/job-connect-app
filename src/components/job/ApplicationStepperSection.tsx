import { Step, StepIndicator, Stepper } from "@mui/joy";
import { Check } from "lucide-react";
import React from "react";

export type StepperData = {
  id: number;
  title: string;
};
interface ApplicationStepperProps {
  stepperData: StepperData[];
  currentStep: number;
}

const ApplicationStepperSection = ({
  stepperData,
  currentStep = 1,
}: ApplicationStepperProps) => {
  return (
    <section className="py-3  max-w-2xl mx-auto">
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
                  {/* {data.id} */}
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
