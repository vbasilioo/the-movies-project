'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Logo from '@/components/logo';
import InputSearch from '../search/input-search';
import { z } from 'zod';

export function Navbar() {
  const searchParams = useSearchParams();

  const page = z.coerce.number().parse(searchParams.get('page') ?? '1');
  const per_page = z.coerce
    .number()
    .parse(searchParams.get('per_page') ?? '12');

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>(
    searchParams.get('search') || '',
  );

  return (
    <div className="flex items-center justify-between px-4 md:px-12 xl:px-28 py-9 flex-col lg:flex-row">
      <Link href={'/'}>
        <Logo color="color" />
      </Link>

      <div className="relative w-64 sm:mt-0 mt-4">
        <InputSearch
          handleSetSearch={setDebouncedSearchTerm}
          page={page}
          placeholder="Search..."
          showLabel={false}
        />
      </div>
    </div>
  );
}
