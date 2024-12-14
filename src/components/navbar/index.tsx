import Link from 'next/link';
import { Search } from 'lucide-react';
import Logo from '../logo';
import { Input } from '../ui/input';

export function Navbar() {
  const handleSearchClick = () => {
    console.log('Search button clicked');
  };

  return (
    <div className="flex items-center justify-between px-4 md:px-12 xl:px-28 py-9 flex-col lg:flex-row">
      <Link href={'/'}>
        <Logo color="color" />
      </Link>

      <div className="relative w-64 sm:mt-0 mt-4">
        <Input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          onClick={handleSearchClick}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary focus:outline-none"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
