
import React from 'react';
import { 
  Dialog, 
  DialogTrigger, 
  DialogVideoContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription 
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Maximize2 } from 'lucide-react';

interface VideoModalProps {
  title: string;
  description: string;
  duration: string;
  views: string;
  videoId?: string; // YouTube video ID
  thumbnailUrl?: string;
}

const VideoModal = ({ 
  title, 
  description, 
  duration, 
  views, 
  videoId = "dQw4w9WgXcQ", // Default demo video
  thumbnailUrl 
}: VideoModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <div className="bg-gray-200 h-32 relative flex items-center justify-center mb-3 group">
              {thumbnailUrl ? (
                <img 
                  src={thumbnailUrl} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
              ) : null}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="h-10 w-10 text-white" />
              </div>
              <Maximize2 className="absolute bottom-2 right-2 h-5 w-5 text-white opacity-70" />
            </div>
            <h3 className="font-bold mb-1">{title}</h3>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">
              {description}
            </p>
            <div className="text-xs text-gray-500">{duration} • {views}</div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogVideoContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="pt-2">{description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 aspect-video">
          <iframe 
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-2 text-xs text-gray-500">{duration} • {views}</div>
      </DialogVideoContent>
    </Dialog>
  );
};

export default VideoModal;
