import TypewriterTitle from "@/components/ui/TypewriterTitle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen from-rose-100 to-teal-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-7xl font-semibold text-center text-gray-700">
          Your AI {""}
          <span className="text-teal-800 font-bold">note taking </span>{" "}
          assisstant
        </h1>
        <h2></h2>
        <div className="mt-8"></div>
        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button className="bg-teal-800 font-bold">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
