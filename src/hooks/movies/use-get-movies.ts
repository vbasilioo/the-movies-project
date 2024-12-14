import { useQuery } from '@tanstack/react-query';
import {
  IApiMoviesResponse,
  ISearchParams,
} from './../../interfaces/api/index';
import { getMovies } from '@/app/api/movies/get-movies';

export const useGetMovies = ({ page, per_page }: ISearchParams) => {
  return useQuery<IApiMoviesResponse>({
    queryKey: ['get-movies', page, per_page],
    queryFn: () => getMovies({ page, per_page }),
  });
};
