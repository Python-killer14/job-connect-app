import ApplicationStepperSection, {
  StepperData,
} from "@/components/job/ApplicationStepperSection";

const stepperData: StepperData[] = [
  {
    id: 1,
    title: "Basic Info",
  },
  {
    id: 2,
    title: "Profile",
  },
  {
    id: 3,
    title: "Approved",
  },
];

const PageClient = () => {
  const currentStep = 2;
  return (
    <main>
      <div>
        <ApplicationStepperSection
          stepperData={stepperData}
          currentStep={currentStep}
        />
      </div>
    </main>
  );
};

export default PageClient;
