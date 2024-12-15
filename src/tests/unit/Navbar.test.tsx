import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navbar } from '@/components/navbar';

describe('Navbar', () => {
  it('Renderiza o componente Navbar corretamente.', () => {
    render(<Navbar />);

    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
