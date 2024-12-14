'use client';

import { CarouselMain } from '@/components/carousel-main';
import Layout from './_layouts';
import { MovieCard } from '@/components/movie-card';
import { Pagination } from '@/components/ui/pagination';
import { useSearchParams } from 'next/navigation';
import { z } from 'zod';
import { useGetMovies } from '@/hooks/movies/use-get-movies';
import { IMovie } from '@/interfaces/api';
import Loading from '@/components/ui/loading';

export default function Home() {
  const searchParams = useSearchParams();
  const page = z.coerce.number().parse(searchParams.get('page') ?? '1');
  const per_page = z.coerce
    .number()
    .parse(searchParams.get('per_page') ?? '12');

  const { data: movies } = useGetMovies({ page, per_page });

  return (
    <Layout>
      <div className="">
        <CarouselMain />

        <div className="px-4 pt-16 md:px-12 lg:px-28 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {movies ? (
            movies.data.length > 0 ? (
              movies.data.map((movie: IMovie, index: number) => (
                <MovieCard
                  key={index}
                  image_url={movie.image_url}
                  title={movie.title}
                  year={movie.year}
                  actors={movie.crew}
                  rating={movie.rating}
                />
              ))
            ) : (
              <div>
                <span>Nenhum filme encontrado.</span>
              </div>
            )
          ) : (
            <Loading />
          )}
        </div>

        <div className="pt-10 pb-16">
          {movies && (
            <Pagination
              perPage={movies.pagination?.page ?? 12}
              totalCount={movies.pagination?.total ?? 0}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}
