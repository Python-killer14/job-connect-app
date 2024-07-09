import { Button } from "@/components/ui/button";
import PageClient from "./pageClient";

const generateMetadata = async () => {
  return {
    title: "ROb",
  };
};

export default function Home() {
  return (
    <main className="dark:bg-gun-metal">
      <PageClient></PageClient>
    </main>
  );
}
