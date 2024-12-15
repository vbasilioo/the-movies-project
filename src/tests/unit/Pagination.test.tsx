import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { handlePaginate } from '@/lib/utils';
import { PaginationFull, PaginationShorty } from '@/components/pagination';

jest.mock('@/lib/utils', () => ({
  handlePaginate: jest.fn(),
}));

describe('PaginationFull', () => {
  it('Renderiza o componente PaginationFull corretamente e ativa/desativa botões.', () => {
    const pushMock = jest.fn();

    jest.mock('next/navigation', () => ({
      useRouter: () => ({
        push: pushMock,
      }),
      useSearchParams: jest.fn().mockReturnValue(new URLSearchParams()),
    }));

    const totalCount = 100;
    const perPage = 20;
    const pageIndex = 1;

    render(
      <PaginationFull
        pageIndex={pageIndex}
        totalCount={totalCount}
        perPage={perPage}
      />,
    );

    expect(screen.getByText(/Página 1 de 5/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/First page/i)).toBeDisabled();

    expect(screen.getByLabelText(/Previous page/i)).toBeDisabled();

    expect(screen.getByLabelText(/Next page/i)).not.toBeDisabled();

    expect(screen.getByLabelText(/Last page/i)).not.toBeDisabled();
  });

  it('Chama handlePaginate ao navegar para a próxima página.', () => {
    const pushMock = jest.fn();

    jest.mock('next/navigation', () => ({
      useRouter: () => ({
        push: pushMock,
      }),
      useSearchParams: jest.fn().mockReturnValue(new URLSearchParams()),
    }));

    const totalCount = 100;
    const perPage = 20;
    const pageIndex = 1;

    render(
      <PaginationFull
        pageIndex={pageIndex}
        totalCount={totalCount}
        perPage={perPage}
      />,
    );

    fireEvent.click(screen.getByLabelText(/Next page/i));

    expect(handlePaginate).toHaveBeenCalledWith(
      pageIndex + 1,
      expect.anything(),
      expect.anything(),
      'page',
    );
  });

  it('Desativa o botão "Próxima página" na última página.', () => {
    const pushMock = jest.fn();

    jest.mock('next/navigation', () => ({
      useRouter: () => ({
        push: pushMock,
      }),
      useSearchParams: jest.fn().mockReturnValue(new URLSearchParams()),
    }));

    const totalCount = 100;
    const perPage = 20;
    const pageIndex = 5;

    render(
      <PaginationFull
        pageIndex={pageIndex}
        totalCount={totalCount}
        perPage={perPage}
      />,
    );

    expect(screen.getByLabelText(/Next page/i)).toBeDisabled();
  });
});

describe('PaginationShorty', () => {
  it('Renderiza o componente PaginationShorty corretamente e ativa/desativa botões.', () => {
    const pushMock = jest.fn();

    jest.mock('next/navigation', () => ({
      useRouter: () => ({
        push: pushMock,
      }),
      useSearchParams: jest.fn().mockReturnValue(new URLSearchParams()),
    }));

    const totalCount = 100;
    const perPage = 20;
    const pageIndex = 1;

    render(
      <PaginationShorty
        pageIndex={pageIndex}
        totalCount={totalCount}
        perPage={perPage}
      />,
    );

    expect(screen.getByText(/1 \/ 5/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Previous page/i)).toBeDisabled();

    expect(screen.getByLabelText(/Next page/i)).not.toBeDisabled();
  });

  it('Chama handlePaginate ao navegar para a próxima página em PaginationShorty', () => {
    const pushMock = jest.fn();

    jest.mock('next/navigation', () => ({
      useRouter: () => ({
        push: pushMock,
      }),
      useSearchParams: jest.fn().mockReturnValue(new URLSearchParams()),
    }));

    const totalCount = 100;
    const perPage = 20;
    const pageIndex = 1;

    render(
      <PaginationShorty
        pageIndex={pageIndex}
        totalCount={totalCount}
        perPage={perPage}
      />,
    );

    fireEvent.click(screen.getByLabelText(/Next page/i));

    expect(handlePaginate).toHaveBeenCalledWith(
      pageIndex + 1,
      expect.anything(),
      expect.anything(),
      'page',
    );
  });
});
