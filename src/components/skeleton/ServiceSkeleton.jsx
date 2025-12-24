const ServiceSkeleton = () => {
  return (
    <div className="card bg-base-100 border border-gray-100 shadow-sm p-6 animate-pulse">
      {/* Category & Rating Skeleton */}
      <div className="flex justify-between items-center mb-4">
        <div className="h-4 w-16 bg-gray-200 rounded"></div>
        <div className="h-4 w-10 bg-gray-200 rounded"></div>
      </div>

      {/* Icon Skeleton */}
      <div className="h-14 w-14 bg-gray-200 rounded-full mb-4"></div>

      {/* Title Skeleton */}
      <div className="h-6 w-3/4 bg-gray-200 rounded mb-3"></div>

      {/* Description Skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-3 w-full bg-gray-200 rounded"></div>
        <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
      </div>

      {/* Price Skeleton */}
      <div className="h-8 w-24 bg-gray-200 rounded mt-4"></div>

      {/* Button Skeleton */}
      <div className="h-10 w-full bg-gray-200 rounded mt-6"></div>
    </div>
  );
};

export default ServiceSkeleton;