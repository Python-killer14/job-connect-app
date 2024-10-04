// "use client";
import ApplicantSummaryViewer from "@/components/job/ApplicantSummaryViewer";
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
    title: "Resume Information",
  },
];

const PageClient = () => {
  return (
    <main>
      <div className="mx-32">
        <div>
          <ApplicationStepperSection stepperData={stepperData} />
          <h3 className="text-xl font-bold text-neutral-400 py-4">
            Review your information
          </h3>
          <ApplicantSummaryViewer />
        </div>
      </div>
    </main>
  );
};

export default PageClient;
