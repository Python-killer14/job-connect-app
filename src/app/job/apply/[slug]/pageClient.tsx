import { ArrowLeft, ArrowUpRight, MoveLeft } from "lucide-react";
import Link from "next/link";

type ApplyClientPageProps = {
  jobId: string;
  userData: any;
};

const ApplyClientPage: React.FC<ApplyClientPageProps> = ({
  jobId,
  userData,
}) => {
  const { profile } = userData;
  const experiences = profile?.experiences;

  return (
    <main>
      {userData ? (
        <div className="px-6 max-w-3xl mx-auto bg-white py-4">
          {/* Make return back btn */}

          <Link href="/">
            <section className="inline-flex items-center gap-3 text-sm font-medium bg-gray-200 px-3 rounded-lg cursor-pointer ">
              <ArrowLeft />
              Back to job
            </section>
          </Link>

          {/* User info */}
          <section className=" flex items-center gap-3 mt-5 ">
            <img className=" max-w-10" src="/images/google-logo.png" alt="" />
            <div>
              <h2 className=" text-lg font-bold ">
                {userData?.firstName} {userData?.lastName}
              </h2>
              <p className=" text-sm -mt-1 ">{userData?.title || "No title"}</p>
            </div>
          </section>

          {/* Divider */}
          <hr className="mt-10 mb-6 h-[1.5px] bg-gray-200" />

          <section>
            <h3 className=" font-bold">Short bio</h3>
            <p className=" text-sm max-w-xl">{profile?.bio || "No bio"}</p>
          </section>

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
          <section className="mt-8 max-w-xl">
            <h2 className="font-bold mb-3">Work experience</h2>

            {/* Work component */}
            <div className="flex items-start gap-4 p-1 mb-6 ">
              <img className="max-w-8" src="/images/google-logo.png" alt="" />
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className=" font-bold">Frontend Developer</h3>
                    <p className=" text-sm -mt-1 mb-2">Frontend Developer</p>
                  </div>
                  <p className=" text-xs font-bold">Feb 2020 - Present</p>
                </div>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt rem totam assumenda vel facilis. Similique voluptatum
                  vitae eveniet voluptatem molestiae. Ad dolor ratione quisquam
                  incidunt inventore ut deleniti consectetur error?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-1 mb-6">
              <img className="max-w-8" src="/images/google-logo.png" alt="" />
              <div>
                <div className=" flex items-start justify-between gap-3">
                  <div>
                    <h3 className=" font-bold">Frontend Developer</h3>
                    <p className=" text-sm -mt-1 mb-2">Frontend Developer</p>
                  </div>
                  <p className=" text-xs font-bold">Feb 2020 - Present</p>
                </div>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt rem totam assumenda vel facilis. Similique voluptatum
                  vitae eveniet voluptatem molestiae. Ad dolor ratione quisquam
                  incidunt inventore ut deleniti consectetur error?
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8 max-w-xl">
            <h2 className="font-bold mb-3">Education</h2>

            {/* Work component */}
            <div className="flex items-start gap-4 p-1 mb-6 ">
              <img className="max-w-8" src="/images/google-logo.png" alt="" />
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className=" font-bold">Frontend Developer</h3>
                    <p className=" text-sm -mt-1 mb-2">Frontend Developer</p>
                  </div>
                  <p className=" text-xs font-bold">Feb 2020 - Present</p>
                </div>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt rem totam assumenda vel facilis. Similique voluptatum
                  vitae eveniet voluptatem molestiae. Ad dolor ratione quisquam
                  incidunt inventore ut deleniti consectetur error?
                </p>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full-h-minus-nav">
          <p>Unauthorized</p>
        </div>
      )}
    </main>
  );
};

export default ApplyClientPage;
