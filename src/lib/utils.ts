import { clsx, type ClassValue } from 'clsx';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handlePaginate(
  pageIndex: number,
  searchParams: ReadonlyURLSearchParams,
  router: AppRouterInstance,
  paramName?: string,
) {
  const params = new URLSearchParams(
    searchParams as unknown as URLSearchParams,
  );

  if (pageIndex !== null) {
    params.set(paramName ?? 'page', pageIndex.toString());
  } else {
    params.delete(paramName ?? 'page');
  }

  router.push(`?${params.toString()}`);
}

export function formatFullDate(dateParam: string) {
  const date = new Date(dateParam);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} - ${hours}:${minutes}`;
}
