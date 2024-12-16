import React from 'react';
import { Footer } from '@/components/footer';
import { render, screen } from '@testing-library/react';

jest.mock(
  '../../../public/images/facebook-logo.svg',
  () => 'facebook-logo.svg',
);

jest.mock('../../../public/images/twitter-logo.svg', () => 'twitter-logo.svg');

jest.mock(
  '../../../public/images/instagram-logo.svg',
  () => 'instagram-logo.svg',
);

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  default: (props: any) => <img {...props} />,
}));

describe('Footer', () => {
  it('Renderiza o componente Footer com todos os elementos.', () => {
    render(<Footer />);

    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
    expect(screen.getByText(/Terms & Conditions/i)).toBeInTheDocument();

    expect(screen.getByAltText('Facebook logo')).toBeInTheDocument();
    expect(screen.getByAltText('Twitter logo')).toBeInTheDocument();
    expect(screen.getByAltText('Instagram logo')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Facebook logo' })).toHaveAttribute(
      'href',
      'https://facebook.com',
    );
    expect(screen.getByRole('link', { name: 'Twitter logo' })).toHaveAttribute(
      'href',
      'https://x.com',
    );
    expect(
      screen.getByRole('link', { name: 'Instagram logo' }),
    ).toHaveAttribute('href', 'https://www.instagram.com/vbasilioo/');
  });
});
