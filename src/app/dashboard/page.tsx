import { ArrowLeft } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import CreateNoteDialog from "@/components/CreateNoteDialog";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-10">
        <div className="h-14"></div>
        <div className="flex justify-between items-center md:flex-row sm:flex-col">
          <div className="flex items-center">
            <Link href="/">
              <Button className="bg-teal-800 font-bold">
                <ArrowLeft className="w-5 h-5" strokeWidth={3} />
                Back
              </Button>
            </Link>
            <div className="w-4"></div>
            <h1 className="text-5xl font-bold text-gray-800">My Notes</h1>
            <div className="w-4"></div>
            <UserButton />
          </div>
        </div>

        <div className="h-10"></div>

        {/*Conditionally render notes*/}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-500">
            {" "}
            You have no notes yet...
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 md:grid-cols-5 ">
          <CreateNoteDialog />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
