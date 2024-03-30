export const UserProfileSkeleton = () => {
  return (
    <div className="p-4 rounded-lg animate-pulse flex flex-col items-center">
      <div className="flex items-center mb-4">
        <div className="h-32 w-32 bg-base-200 rounded-full mr-4"></div>
        <div>
          <div className="h-4 w-40 bg-base-200 mb-2"></div>
          <div className="h-3 w-20 bg-base-200"></div>
        </div>
      </div>
      <div>
        <div className="h-3 w-80 bg-base-200 mb-2"></div>
        <div className="h-3 w-40 bg-base-200"></div>
      </div>
    </div>
  );
};
