import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

interface ILayout {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className }: ILayout) {
  return (
    <div className={`flex flex-col w-screen ${className}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
