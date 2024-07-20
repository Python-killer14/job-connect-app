import { URLSearchParams } from "url";

type QueryParams = {
  [key: string]: string | string[];
};

const extractQueryParams = (searchParams: URLSearchParams): QueryParams => {
  // Converting searchParams to a plain object
  const queryParams: QueryParams = {};

  searchParams.forEach((value, key) => {
    if (queryParams[key]) {
      if (Array.isArray(queryParams[key])) {
        (queryParams[key] as string[]).push(value);
      } else {
        queryParams[key] = [queryParams[key] as string, value];
      }
    } else {
      queryParams[key] = value;
    }
  });

  return queryParams;
}

export default extractQueryParams;
