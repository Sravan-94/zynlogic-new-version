import React from 'react';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  animated?: boolean;
  rounded?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  height,
  width,
  animated = true,
  rounded = false,
}) => {
  return (
    <div
      className={`bg-gray-200 ${animated ? 'animate-pulse' : ''} ${rounded ? 'rounded-full' : 'rounded'} ${className}`}
      style={{
        height,
        width,
      }}
    />
  );
};

export const ProjectCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="aspect-[16/10] relative">
        <Skeleton className="absolute inset-0" />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <Skeleton width="60%" height="24px" className="mb-2" />
          <Skeleton width="20%" height="16px" />
        </div>
        <Skeleton width="30%" height="20px" className="mb-4" />
        <Skeleton width="100%" height="40px" className="mb-3" />
        <Skeleton width="100%" height="16px" className="mb-2" />
        <Skeleton width="80%" height="16px" className="mb-4" />
        <Skeleton width="100%" height="40px" />
      </div>
    </div>
  );
};

export const ShowcaseSkeletonGrid: React.FC = () => {
  return (
    <div className="space-y-16">
      {[1, 2].map((section) => (
        <div key={section} className="space-y-6">
          <div className="border-b pb-2">
            <Skeleton width="150px" height="28px" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
