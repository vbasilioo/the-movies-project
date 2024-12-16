import { Skeleton } from '../ui/skeleton';

export function SkeletonCarousel() {
  return (
    <div className="flex gap-4">
      <Skeleton className="h-48 w-full rounded-lg" />
    </div>
  );
}
