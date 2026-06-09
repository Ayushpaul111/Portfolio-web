"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

interface YouTubeVideoCardProps {
  videoId: string;
  title: string;
}

export function YouTubeVideoCard({ videoId, title }: YouTubeVideoCardProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      <div className="relative w-full aspect-video overflow-hidden bg-black">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 w-full h-full cursor-pointer"
            aria-label={`Play ${title}`}
          >
            <Image
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg">
                <Play className="w-6 h-6 text-black fill-black ml-1" />
              </div>
            </div>
          </button>
        )}
      </div>
      <div className="px-3 py-3">
        <p className="text-sm font-medium text-foreground leading-snug line-clamp-2">
          {title}
        </p>
        <p className="text-xs text-muted-foreground mt-1">MessyProgrammer</p>
      </div>
    </Card>
  );
}
