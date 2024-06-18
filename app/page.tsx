"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Router, { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  return (
    <>
    this is the main page
    <Button onClick={()=>route.push("/dashboard")}>
      dashboard
    </Button>
    </>
  );
}
