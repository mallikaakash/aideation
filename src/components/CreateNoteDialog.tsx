"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Input } from "../components/ui/input";
import { Plus } from "lucide-react";
import React from "react";
import { DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";

type Props = {};

const CreateNoteDialog = (props: Props) => {
  const [input, setInput] = React.useState("");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="border-2 border-dashed border-green-600 h-full flex-row justify-center rounded-lg items-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 p-4">
          <Plus className="w-10 h-10 text-green-600" strokeWidth={3} />
          <h2 className="font-semibold text-green-600 sm:mt-2 text-xl">
            New NoteBook
          </h2>
        </div>
      </DialogTrigger>

      <DialogContent className="border-2 border-black">
        <DialogHeader>
          {" "}
          <DialogTitle>New NoteBook</DialogTitle>
          <DialogDescription>Create a new note</DialogDescription>
        </DialogHeader>
        <form>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Name..."
          />
          <div className="h-4"></div>
          <div className="flex flex-row items-center justify-evenly">
            <Button type="reset" variant={"secondary"}>
              {" "}
              Cancel
            </Button>
            <Button className="bg-teal-800"> Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoteDialog;
