export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Back Button Skeleton */}
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-8"></div>

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
          
          {/* Category Badge Skeleton */}
          <div className="h-6 w-24 bg-blue-50 rounded-full animate-pulse mb-6"></div>
          
          {/* Title Skeleton */}
          <div className="h-12 w-3/4 bg-gray-200 rounded-lg animate-pulse mb-6"></div>
          
          {/* Description Skeleton (3 lines) */}
          <div className="space-y-3 mb-8">
            <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
            <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse"></div>
          </div>

          {/* Details Grid Skeleton */}
          <div className="grid md:grid-cols-2 gap-8 py-8 border-y border-gray-100 mb-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 animate-pulse shrink-0"></div>
              <div className="space-y-2 w-full">
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-3 w-32 bg-gray-100 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 animate-pulse shrink-0"></div>
              <div className="space-y-2 w-full">
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-3 w-40 bg-gray-100 rounded animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Registration Box Skeleton */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full md:w-1/2 space-y-3">
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-2.5 w-full bg-gray-200 rounded-full animate-pulse"></div>
            </div>
            <div className="h-12 w-full md:w-48 bg-gray-200 rounded-xl animate-pulse"></div>
          </div>

        </div>
      </div>
    </div>
  );
}