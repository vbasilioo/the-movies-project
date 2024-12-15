'use client';

import React from 'react';

import Image from 'next/image';
import { Star } from 'lucide-react';

import { Badge } from '../ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselSteps,
} from '@/components/ui/carousel';

import Autoplay from 'embla-carousel-autoplay';
import { useGetMovies } from '@/hooks/movies/use-get-movies';
import { useSearchParams } from 'next/navigation';
import { z } from 'zod';
import { IMovie } from '@/interfaces/api';
import Loading from '../ui/loading';

export function CarouselMain() {
  const searchParams = useSearchParams();
  const page = z.coerce.number().parse(searchParams.get('page') ?? '1');
  const per_page = z.coerce.number().parse(searchParams.get('per_page') ?? '3');

  const { data: movies, isLoading } = useGetMovies({ page, per_page });

  const moviesData = movies?.data ?? [];

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="relative"
    >
      <CarouselContent>
        {isLoading ? (
          <CarouselItem>
            <div className="flex items-center justify-center w-full h-[700px]">
              <Loading />
            </div>
          </CarouselItem>
        ) : moviesData.length > 0 ? (
          moviesData.map((movie: IMovie, index: number) => (
            <CarouselItem key={index}>
              <div className="relative w-screen h-[700px] before:bg-black/30 before:content-center before:size-full before:absolute">
                <Image
                  src={movie.image_url}
                  alt="Movie banner"
                  width={1000}
                  height={700}
                  className="size-full object-cover"
                />

                <div className="absolute bottom-1/4 left-[15%] space-y-4">
                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-accent dark:text-white">
                      Highlight of the month
                    </span>
                    <h2 className="max-w-[75vw] md:max-w-[560px] leading-tight font-bold text-4xl md:text-6xl text-accent dark:text-white">
                      {movie.title}
                    </h2>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-4 max-w-[75vw] dark:text-white">
                    <Badge className="px-4 py-2 w-fit">
                      <Star className="size-4 mr-1 fill-accent dark:text-white dark:fill-white" />
                      <span className="dark:text-white">{movie.rating}/10</span>
                    </Badge>

                    <span className="text-accent font-semibold leading-relaxed dark:text-white">
                      {movie.crew}
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))
        ) : (
          <CarouselItem>
            <div className="flex items-center justify-center w-full h-[700px]">
              <span>Nenhum filme encontrado.</span>
            </div>
          </CarouselItem>
        )}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 md:left-6 xl:left-24 top-1/2 bottom-1/2" />
      <CarouselNext className="absolute right-2 md:right-6 xl:right-24 top-1/2 bottom-1/2" />
      <CarouselSteps size={moviesData.length || 3} className="" />
    </Carousel>
  );
}
