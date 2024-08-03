import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";
 

// Type definition
interface UpdateQueryParams  {
  router: AppRouterInstance;
  searchParams: ReadonlyURLSearchParams;
  newParams: { [key: string]: string | null};

}

export const updateQuery = ({newParams, router, searchParams}: UpdateQueryParams ) => {
   // Create a new URLSearchParams object
    const params = new URLSearchParams(searchParams.toString());

    console.log("before string:", params);
    console.log("after string:", params.toString())

     // Remove the view query, that way in the jobs result list
    // it will add the first job's id as the view query value
    // (this helps the jobdetails component to fetch the job details of the first from results on every change)
    params.delete('view')

    // Extract existing params
    Object.keys(newParams).forEach((key) => {
      if (
        newParams[key] === null ||
        newParams[key] === "" ||
        newParams[key] === "any"
      ) {
        params.delete(key); // Remove the parameter if its value is null, any or empty string
      } else {
        params.set(key, newParams[key] as string); // Update or add the parameter
      }
    });

    // Convert the URLSearchParams object back to a string
    const queryString = params.toString();
    router.push(`?${queryString}`, {scroll: false});
};


