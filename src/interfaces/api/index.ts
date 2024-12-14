export interface IApiResponse<T> {
  error: boolean;
  message: string;
  data: T;
  pagination?: IPagination;
}

export interface IPaginationLink {
  url?: string;
  label: string;
  active: boolean;
}

export interface IPagination {
  limit: number;
  page: number;
  maxPage: number;
  total: number;
  links?: IPaginationLink[];
}

export interface ITimestamps {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
}

export interface IAttachment extends ITimestamps {
  name: string;
  path: string;
  type: string;
  image_path: string;
}

export interface IMovie {
  title: string;
  image_url: string;
  rating: number;
  year: number;
  crew: string;
}

export type IApiMoviesResponse = IApiResponse<IMovie[]>;

export interface ISearchParams {
  per_page?: number;
  page?: number;
  search?: string;
}
