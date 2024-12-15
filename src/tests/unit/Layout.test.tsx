import { render, screen } from '@testing-library/react';
import Layout from '@/app/_layouts';

describe('RootLayout', () => {
  it('Testa os childrens do layout.', () => {
    render(
      <Layout>
        <div>Test Child</div>
      </Layout>,
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('Renderiza componentes essenciais.', () => {
    render(
      <Layout>
        <div>Test Child</div>
      </Layout>,
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });
});
