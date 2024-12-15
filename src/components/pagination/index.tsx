import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Button } from '../ui/button';
import { handlePaginate } from '@/lib/utils';

export interface PaginationProps {
  pageIndex: number;
  totalCount: number;
  perPage: number;
  paramName?: string;
}

export function PaginationFull({
  pageIndex,
  totalCount,
  perPage = 20,
  paramName = 'page',
}: PaginationProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pages = Math.ceil(totalCount / perPage) || 1;

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full md:items-center md:justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>

      <div className="flex justify-between md:justify-start items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {pageIndex} de {pages}
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => handlePaginate(1, searchParams, router, paramName)}
            disabled={pageIndex === 1}
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">First page</span>
          </Button>

          <Button
            type="button"
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() =>
              handlePaginate(pageIndex - 1, searchParams, router, paramName)
            }
            disabled={pageIndex === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>

          <Button
            type="button"
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() =>
              handlePaginate(pageIndex + 1, searchParams, router, paramName)
            }
            disabled={pageIndex === pages}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>

          <Button
            type="button"
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() =>
              handlePaginate(pages, searchParams, router, paramName)
            }
            disabled={pageIndex === pages}
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Last page</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function PaginationShorty({
  pageIndex,
  totalCount,
  perPage = 20,
  paramName = 'page',
}: PaginationProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pages = Math.ceil(totalCount / perPage) || 1;

  return (
    <div className="flex items-center gap-2">
      <Button
        type="button"
        variant="outline"
        className="h-8 w-8 p-0"
        onClick={() =>
          handlePaginate(pageIndex - 1, searchParams, router, paramName)
        }
        disabled={pageIndex === 1}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>

      <span className="whitespace-nowrap">
        {pageIndex} / {pages}
      </span>

      <Button
        type="button"
        variant="outline"
        className="h-8 w-8 p-0"
        onClick={() =>
          handlePaginate(pageIndex + 1, searchParams, router, paramName)
        }
        disabled={pageIndex === pages}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </div>
  );
}
