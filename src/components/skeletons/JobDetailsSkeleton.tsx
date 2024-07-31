import { Skeleton } from "../ui/skeleton";

const JobDetailsSkeleton = () => {
  return (
    <div className="flex-1 border rounded-lg shadow-sm py-4">
      <section className="flex px-4 gap-4">
        <Skeleton className="h-12 w-12" />
        <div className=" flex-1 space-y-2">
          <Skeleton className="h-6 w-full bg-slate-200" />
          <Skeleton className="h-4 w-full" />
        </div>
      </section>

      <section className=" px-4 mt-8 max-w-[400px]">
        <Skeleton className="h-6 w-full max-w-60 bg-slate-200" />
        <div className=" space-y-3">
          <Skeleton className="h-2 w-full mt-3" />
          <Skeleton className="h-2 w-full" />
          <Skeleton className="h-2 w-full" />
          <Skeleton className="h-2 w-full" />
          <Skeleton className="h-2 w-full" />
          <Skeleton className="h-2 w-full" />
          <Skeleton className="h-2 w-full max-w-40" />
        </div>
        <div className=" space-y-3 mt-10">
          <Skeleton className="h-6 w-full max-w-64 bg-slate-200" />

          <Skeleton className="h-2 w-full mt-3 " />
          <Skeleton className="h-2 w-full" />
          <Skeleton className="h-2 w-full" />
          <Skeleton className="h-2 w-full" />
          <Skeleton className="h-2 w-full" />
          <Skeleton className="h-2 w-full" />
        </div>
      </section>
      <section className="mt-7 px-4">
        <Skeleton className="h-10 w-full max-w-40 mt-3 bg-slate-300 " />
      </section>
    </div>
  );
};

export default JobDetailsSkeleton;
