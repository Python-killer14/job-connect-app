"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface BackBtnProps {
  label: string;
}

const BackButton = ({ label }: BackBtnProps) => {
  const router = useRouter();

  const handleBackBtn = () => {
    router.back();
  };

  return (
    <Button variant="outline" onClick={handleBackBtn}>
      {label}
    </Button>
  );
};

export default BackButton;
