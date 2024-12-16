'use client';

import { CarouselMain } from '@/components/carousel-main';
import Layout from './_layouts';
import { MovieCard } from '@/components/movie-card';
import { Pagination } from '@/components/ui/pagination';
import { useSearchParams, useRouter } from 'next/navigation';
import { z } from 'zod';
import { useGetMovies } from '@/hooks/movies/use-get-movies';
import { IMovie } from '@/interfaces/api';
import { SkeletonCarousel } from '@/components/skeleton-carousel';
import { SkeletonCard } from '@/components/skeleton-card';
import { useState } from 'react';

export default function Home() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const page = z.coerce.number().parse(searchParams.get('page') ?? '1');
  const per_page = z.coerce
    .number()
    .parse(searchParams.get('per_page') ?? '12');

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>(
    searchParams.get('search') || '',
  );

  const router = useRouter();

  const { data: movies, isLoading } = useGetMovies({
    page,
    per_page,
    search: debouncedSearchTerm,
  });

  const filteredMovies = searchQuery
    ? movies?.data?.filter((movie: IMovie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : movies?.data;

  const carouselMovies = searchQuery
    ? filteredMovies
    : movies?.data?.slice(0, 3);

  const handleReset = () => {
    router.push('/');
  };

  return (
    <Layout>
      <div>
        {isLoading || !carouselMovies ? (
          <SkeletonCarousel />
        ) : (
          carouselMovies.length > 0 && <CarouselMain movies={carouselMovies} />
        )}

        <div className="px-4 pt-16 md:px-12 lg:px-28">
          {isLoading || !filteredMovies ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {Array.from({ length: 12 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : filteredMovies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {filteredMovies.map((movie: IMovie, index: number) => (
                <MovieCard
                  key={index}
                  image_url={movie.image_url}
                  title={movie.title}
                  year={movie.year}
                  actors={movie.crew}
                  rating={movie.rating}
                />
              ))}
            </div>
          ) : (
            <section className="flex items-center justify-center h-[60vh]">
              <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
                <div className="max-w-screen-sm mx-auto">
                  <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                    Ops...
                  </p>
                  <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                    Nós não conseguimos localizar nenhum filme! Tente um outro
                    título.
                  </p>
                  <button
                    onClick={handleReset}
                    className="inline-flex text-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center my-4"
                  >
                    Voltar para página inicial
                  </button>
                </div>
              </div>
            </section>
          )}
        </div>

        {!isLoading && filteredMovies && filteredMovies.length > 0 && (
          <div className="pt-10 pb-16">
            {movies && (
              <Pagination
                perPage={movies.pagination?.page ?? 12}
                totalCount={movies.pagination?.total ?? 0}
              />
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
