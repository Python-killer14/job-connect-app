"use client";
import { Search } from "lucide-react";
import { Button, Input } from "@mui/joy";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchBarWithFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // States
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Handle submit
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a new URLsearch objects from the current queries
    const params = new URLSearchParams(Array.from(searchParams.entries()));

    // Remove the view query, that way in the jobs result list
    // it will add the first job's id as the view query value
    // (this helps to refetch the details component the latest job details of the first result)
    params.delete("view");

    // If searchTerm is empty, remove the 'q' parameter and quit the function
    if (searchTerm.length < 1) {
      params.delete("q");
      router.push(`?${params.toString()}`);
      return;
    }

    // Remove the exisitng q to avoid duplicate
    params.delete("q");

    // Create new query string with the searchTerm in the beginning
    const newQueryString = `q=${searchTerm}&${params.toString()}`;
    router.push(`?${newQueryString}`);
  };

  // Clear the search input if no q query value
  useEffect(() => {
    if (!searchParams.get("q")) {
      setSearchTerm("");
    }
  }, [searchParams]);

  return (
    <section className="mt-7 mb-6 px-4 ">
      <div className="max-w-4xl mx-auto border bg-white py-4 px-3 sm:px-6 md-plus:px-8 rounded-lg shadow-md">
        <div>
          <h4 className=" text-xl mb-4">Search job</h4>
        </div>
        <form
          onSubmit={handleSearchSubmit}
          className="flex flex-col sm-plus:flex-row gap-4 justify-center"
        >
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            startDecorator={<Search />}
            className=" shadow text-lg py-2 flex-1"
            size="lg"
            type="search"
            placeholder="Job title, keywords or company"
            sx={{
              "&::before": {
                border: "1.5px solid #F2786D",
                transform: "scaleX(0)",
                left: "2.5px",
                right: "2.5px",
                bottom: 0,
                top: "unset",
                transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                borderRadius: 0,
                borderBottomLeftRadius: "64px 20px",
                borderBottomRightRadius: "64px 20px",
              },
              "&:focus-within::before": {
                transform: "scaleX(1)",
              },
            }}
          />

          <Button
            type="submit"
            className=" bg-rose-red hover:bg-darker-red-rose text-lg transition-colors duration-100 ease-in py-2 px-6"
          >
            Search
          </Button>
        </form>
        <div className="mt-4">
          <p className=" bg-light-blue text-ocean-blue rounded text-center  py-2 ">
            254 jobs
          </p>
        </div>
      </div>
    </section>
  );
};

export default SearchBarWithFilter;
