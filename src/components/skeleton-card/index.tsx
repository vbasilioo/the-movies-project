import { Skeleton } from '../ui/skeleton';

export function SkeletonCard() {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <Skeleton className="w-full h-40 rounded-lg mb-4" />
      <Skeleton className="w-3/4 h-6 rounded-lg mb-2" />
      <Skeleton className="w-1/2 h-6 rounded-lg" />
    </div>
  );
}
