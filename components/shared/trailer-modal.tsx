"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { Video, VideoIcon } from "lucide-react";
import VideoPlayer from "./video-player";

interface TrailerModalProps {
  trailerUrl: string;
}

export default function TrailerModal({ trailerUrl }: TrailerModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">
          <VideoIcon className="w-24 h-24" /> Trailer
        </Button>
      </DialogTrigger>

      <DialogContent className="w-full max-w-4xl bg-gray-900 rounded-lg shadow-xl p-2 ">
        <VideoPlayer srcUrl={trailerUrl} />
      </DialogContent>
    </Dialog>
  );
}
