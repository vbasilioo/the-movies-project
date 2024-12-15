import React from 'react';
import { MovieCard } from '@/components/movie-card';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Teste unitário do MovieCard.', () => {
  const mockProps = {
    image_url: 'https://example.com/image.jpg',
    title: 'Simple Movie',
    year: 2022,
    actors: 'Actor A, Actor B',
    rating: 8.5,
  };

  test('Renderizando informações do filme.', () => {
    render(<MovieCard {...mockProps} />);

    expect(screen.getByText('Simple Movie')).toBeInTheDocument();
    expect(screen.getByText('Year of release: 2022')).toBeInTheDocument();
    expect(screen.getByText('Actor A, Actor B')).toBeInTheDocument();
    expect(screen.getByText('8.5/10')).toBeInTheDocument();
  });

  test('Renderiza imagem padrão quando nenhuma "image_url" é fornecido.', () => {
    render(<MovieCard {...mockProps} image_url="" />);

    const img = screen.getByAltText('Movie banner');
    expect(img).toHaveAttribute(
      'src',
      expect.stringContaining('https://placehold.co/300x700.svg'),
    );
  });
});
