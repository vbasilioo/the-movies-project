import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Star } from 'lucide-react';
import { Label } from '../ui/label';
import { Lens } from '../ui/lens';

interface MovieCardProps {
  image_url: string;
  title: string;
  year: number;
  actors: string;
  rating: number;
}

export function MovieCard({
  image_url,
  title,
  year,
  actors,
  rating,
}: MovieCardProps) {
  const [hovering, setHovering] = useState(false);

  return (
    <Card
      className={`bg-gray-50 dark:bg-transparent border-2 border-gray-100
        ${hovering ? 'border-primary shadow-xl' : ''} 
        transition-all duration-300`}
    >
      <CardContent className="p-4 space-y-4">
        <Lens hovering={hovering} setHovering={setHovering}>
          <Image
            src={image_url ? image_url : `https://placehold.co/300x700.svg`}
            alt={'Movie banner'}
            width={300}
            height={700}
            className="h-96 w-full object-cover rounded-2xl transition-all duration-300 transform hover:scale-105"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          />
        </Lens>

        <div className="flex flex-col space-y-2">
          <div className="space-y-1">
            <Label className="font-semibold leading-7 text-lg line-clamp-2 text-accent-foreground">
              {title}
            </Label>

            <span className="text-sm text-accent-foreground">
              Year of release:&nbsp;{year}
            </span>
          </div>

          <span className="line-clamp-2 leading-5 text-sm text-accent-foreground">
            {actors}
          </span>
        </div>
        <Badge className="px-4 py-2">
          <Star className="size-4 mr-1 fill-accent dark:text-white dark:fill-white" />
          <span className="dark:text-white">{rating}/10</span>
        </Badge>
      </CardContent>
    </Card>
  );
}
