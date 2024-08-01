import { Metadata } from "next";
import PageClient from "./pageClient";

export const metadata: Metadata = {
  title: `Job search | ${process.env.NEXT_PUBLIC_APP_NAME}`,
};

export default function Home() {
  return (
    <main className="dark:bg-gun-metal ">
      <PageClient />
    </main>
  );
}
