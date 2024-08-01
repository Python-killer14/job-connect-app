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


