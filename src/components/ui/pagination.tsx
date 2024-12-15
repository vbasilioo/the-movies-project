'use client';

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import { parseAsInteger, useQueryState } from 'nuqs';
import * as React from 'react';

import { Button } from '@/components/ui/button';

export interface PaginationProps {
  totalCount: number;
  perPage: number;
}

export function Pagination({ totalCount, perPage }: PaginationProps) {
  const [itemsPerPage] = useQueryState(
    'per_page',
    parseAsInteger.withDefault(perPage),
  );
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));

  const pages = React.useMemo(
    () => Math.ceil(totalCount / itemsPerPage) || 1,
    [totalCount, itemsPerPage],
  );

  const renderPageButtons = (page: number) => {
    const range = 2;
    const start = Math.max(1, (Number(page) ?? 1) - range);
    const end = Math.min(pages, (Number(page) ?? 1) + range);

    const buttons = [];
    for (let i = start; i <= end; i++) {
      const isCurrentPage = i === page;
      buttons.push(
        <Button
          key={i}
          variant={isCurrentPage ? 'default' : 'outline'}
          className={`h-8 w-8 p-0 font-bold border ${isCurrentPage ? 'text-white' : 'text-primary'} ${isCurrentPage ? 'border-primary' : 'border-gray-200'} dark:${isCurrentPage ? 'border-primary' : 'border-primary'}`}
          onClick={() => setPage(i)}
        >
          <span>{i}</span>
        </Button>,
      );
    }

    if (start > 1) {
      buttons.unshift(<span key="start-dots">...</span>);
    }

    if (end < pages) {
      buttons.push(<span key="end-dots">...</span>);
    }

    return buttons;
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex items-center gap-2">
        {/*<Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => setPage(1)}
          disabled={Number(page) === 1}
        >
          <ChevronsLeft className="h-4 w-4" />
          <span className="sr-only">Primeira página</span>
        </Button>*/}

        <Button
          variant="outline"
          className="h-8 w-8 p-0 border-primary text-primary"
          onClick={() => setPage((page ?? 1) - 1)}
          disabled={Number(page) === 1}
        >
          <ChevronLeft className="h-4 w-4 text-primary" />
          <span className="sr-only">Página anterior</span>
        </Button>

        {renderPageButtons(Number(page) ?? 1)}

        <Button
          variant="outline"
          className="h-8 w-8 p-0 border-primary text-primary"
          onClick={() => setPage((page ?? 1) + 1)}
          disabled={Number(page) === pages}
        >
          <ChevronRight className="h-4 w-4 text-primary" />
          <span className="sr-only">Próxima página</span>
        </Button>

        {/*<Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => setPage(pages)}
          disabled={Number(page) === pages}
        >
          <ChevronsRight className="h-4 w-4" />
          <span className="sr-only">Última página</span>
        </Button>*/}
      </div>
    </div>
  );
}
