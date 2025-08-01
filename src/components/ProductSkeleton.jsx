export const ProductSkeleton = () => (
    <div className="bg-n-7 rounded-lg overflow-hidden animate-pulse">
        <div className="h-64 bg-n-6 w-full"></div>
        <div className="p-6 space-y-3">
            <div className="h-6 bg-n-6 rounded w-3/4"></div>
            <div className="h-4 bg-n-6 rounded w-full"></div>
            <div className="h-4 bg-n-6 rounded w-1/2"></div>
            <div className="h-10 bg-n-6 rounded w-full mt-4"></div>
        </div>
    </div>
);