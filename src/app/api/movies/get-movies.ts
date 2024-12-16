import api from '@/app/services/api';
import { IApiMoviesResponse, ISearchParams } from '@/interfaces/api';
import { toast } from 'sonner';

export async function getMovies({ page, per_page, search }: ISearchParams) {
  try {
    const response = await api.get<IApiMoviesResponse>(
      `${process.env.API_URL!}/movies?page=${page}&limit=${per_page}&search=${search}`,
    );

    return response.data;
  } catch (error: any) {
    console.error(
      'Error fetching data:',
      error.response?.data || error.message || error,
    );

    if (error.response?.data?.message) toast.error(error.response.data.message);
    throw new Error(error.response?.data?.message || 'Error fetching data');
  }
}
