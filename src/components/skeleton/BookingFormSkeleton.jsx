const BookingFormSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 animate-pulse">
      {/* Title Skeleton */}
      <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-8"></div>

      <div className="p-6 bg-white shadow-lg rounded-2xl border">
        {/* Step 1 & 2 Row */}
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="flex-1">
            <div className="h-4 w-32 bg-gray-200 rounded mb-3"></div>
            <div className="h-12 w-full bg-gray-100 rounded-lg"></div>
          </div>
          <div className="flex-1">
            <div className="h-4 w-32 bg-gray-200 rounded mb-3"></div>
            <div className="h-12 w-full bg-gray-100 rounded-lg"></div>
          </div>
        </div>

        {/* Step 3 Row */}
        <div className="flex flex-col sm:flex-row gap-10 my-10">
          <div className="flex-1">
            <div className="h-4 w-32 bg-gray-200 rounded mb-3"></div>
            <div className="h-12 w-full bg-gray-100 rounded-lg"></div>
          </div>
          <div className="flex-1">
            <div className="h-4 w-32 bg-gray-200 rounded mb-3"></div>
            <div className="h-12 w-full bg-gray-100 rounded-lg"></div>
          </div>
        </div>

        {/* Price Summary Skeleton */}
        <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-200 mt-4">
          <div className="flex justify-between items-center mb-6">
            <div className="h-5 w-48 bg-gray-200 rounded"></div>
            <div className="h-5 w-20 bg-gray-200 rounded"></div>
          </div>
          <div className="h-[1px] w-full bg-gray-200 mb-6"></div>
          <div className="flex justify-between items-center">
            <div className="h-8 w-32 bg-gray-200 rounded"></div>
            <div className="h-8 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Submit Button Skeleton */}
        <div className="h-12 w-full bg-gray-200 rounded-lg mt-8"></div>
      </div>
    </div>
  );
};

export default BookingFormSkeleton;