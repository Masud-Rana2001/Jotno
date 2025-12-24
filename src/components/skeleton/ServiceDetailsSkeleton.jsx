const ServiceDetailsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column Skeleton (2/3 width) */}
        <div className="lg:col-span-2">
          {/* Header Skeleton */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
            <div className="flex-1">
              <div className="h-10 w-2/3 bg-gray-200 rounded mb-3"></div>
              <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          {/* Description Skeleton */}
          <div className="space-y-3 mb-10">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
          </div>

          {/* Features Grid Skeleton */}
          <div className="mb-10">
            <div className="h-8 w-40 bg-gray-200 rounded mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-100 rounded-lg w-full"></div>
              ))}
            </div>
          </div>

          {/* Requirements Skeleton */}
          <div className="h-32 bg-orange-50/50 border border-orange-100 rounded-xl w-full"></div>
        </div>

        {/* Right Column Skeleton (Sticky Card) */}
        <div className="lg:col-span-1">
          <div className="card bg-white border border-gray-100 shadow-sm p-6 rounded-2xl">
            <div className="h-6 w-1/2 bg-gray-200 rounded mb-6"></div>
            <div className="flex justify-between mb-6">
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
            </div>
            
            <div className="space-y-4 mb-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex justify-between">
                  <div className="h-3 w-16 bg-gray-100 rounded"></div>
                  <div className="h-3 w-20 bg-gray-100 rounded"></div>
                </div>
              ))}
            </div>

            <div className="h-12 w-full bg-gray-200 rounded-xl mb-4"></div>
            <div className="h-3 w-3/4 bg-gray-100 rounded mx-auto"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetailsSkeleton;