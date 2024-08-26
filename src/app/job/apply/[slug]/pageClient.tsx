import BackButton from "@/components/job/BackButton";
import EducationExperienceItem from "@/components/job/EducationExperienceItem";
import WorkExperienceItem from "@/components/job/WorkExperienceItem";
import { Button } from "@/components/ui/button";
import { ExperienceTypes } from "@/types/jobTypes/jobTypes";
import { EducationTypes, UserTypes } from "@/types/jobTypes/userTypes";
import { Divider } from "@mui/joy";
import { ArrowLeft, ArrowUpRight, UserRound } from "lucide-react";
import Link from "next/link";

type ApplyClientPageProps = {
  userData: UserTypes | null;
};

const ApplyClientPage: React.FC<ApplyClientPageProps> = ({ userData }) => {
  const profile = userData?.profile;
  const experiences: ExperienceTypes[] = profile?.experiences || [];
  const education: EducationTypes[] = profile?.education || [];

  return (
    <main className=" bg-white-gray">
      {userData ? (
        <div className="px-2 max-w-2xl mx-auto min-h-full-minus-nav bg-white md-plus:px-6 pt-4 pb-16  shadow-sm">
          {/* Make return back btn */}

          {/* <Link href="#userinfo">
            <section className="inline-flex items-center gap-3 text-sm font-medium bg-gray-200 px-3 rounded-lg cursor-pointer ">
              <ArrowLeft className=" " />
              <p>Back to job</p>
            </section>
          </Link> */}

          <section className=" pt-4 ">
            <h1 className=" text-lg font-medium ">Review your information</h1>
          </section>

          {/* User info */}
          <section className=" flex items-center gap-3 mt-5 ">
            {/* <img className=" max-w-10" src="/images/google-logo.png" alt="" /> */}
            <UserRound
              size={38}
              strokeWidth={1.4}
              className="bg-gray-200 rounded-full p-1"
            />
            <div>
              <h2 className=" text-lg font-bold ">
                {userData?.firstName} {userData?.lastName}
              </h2>
              <p className=" text-sm text-muted-foreground -mt-1 ">
                {userData?.title || "No title"}
              </p>
            </div>
          </section>

          {/* Divider */}
          <hr className="mt-10 mb-6 h-[1.5px] bg-gray-200" />

          {/* Bio section */}
          {profile?.bio && (
            <section>
              <h3 className=" font-bold text-ocean-blue ">Short bio</h3>
              <p className=" text-sm max-w-xl">{profile?.bio || "No bio"}</p>
            </section>
          )}

          {/* Tags section */}
          {profile && profile.website && (
            <div className="mt-6">
              <a
                className="inline-flex items-center bg-slate-100 rounded-md px-2 text-sm "
                href={profile?.website}
                target="_blank"
              >
                Website
                <ArrowUpRight size={20} />
              </a>
            </div>
          )}

          {/* Work experience */}
          {experiences && experiences.length > 0 && (
            <section className="mt-8 max-w-xl">
              <h2 className="font-bold mb-3 text-ocean-blue">
                Work experience
              </h2>
              {experiences.map((experience: ExperienceTypes, indx: number) => {
                return (
                  <WorkExperienceItem key={indx} experience={experience} />
                );
              })}
            </section>
          )}

          {/* Education section */}
          {education && education.length > 0 && (
            <section className="mt-8 max-w-xl">
              <h2 className="font-bold mb-3 text-ocean-blue">Education</h2>
              {education.map((education: EducationTypes, indx: number) => {
                return (
                  <EducationExperienceItem key={indx} education={education} />
                );
              })}
            </section>
          )}

          <Divider />

          <section className="flex  gap-4 mt-6 ">
            <Button className=" bg-rose-red hover:bg-darker-red-rose">
              Confirm & Apply
            </Button>
            <BackButton label="Cancel" />
          </section>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full-h-minus-nav">
          <p>Unauthorized</p>
          <p>Please sign in first to apply.</p>
        </div>
      )}
    </main>
  );
};

export default ApplyClientPage;
