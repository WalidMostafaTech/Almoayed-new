import Skeleton from "../../common/Skeleton";

const SkeletonPageLoading = ({ type = "cards" }) => {
  return (
    <section>
      <div className="p-4 pt-0 lg:pt-4">
        <div className="overflow-hidden rounded-3xl lg:rounded-[50px] shadow-lg shadow-myGold/50 border border-myGold p-4 lg:p-8">
          <div className="w-full min-h-[250px] lg:min-h-[300px] flex flex-col items-center justify-center gap-3 lg:gap-4 rounded-2xl lg:rounded-[40px] p-4">
            <Skeleton width="w-32" height="h-4" rounded="rounded-full" />

            <Skeleton width="w-60" height="h-7" />

            <Skeleton width="w-full max-w-3xl" height="h-5" />
            <Skeleton width="w-full max-w-2xl" height="h-5" />
          </div>
        </div>
      </div>

      <article className="sectionPadding container">
        {type === "cards" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-4 space-y-3"
              >
                <Skeleton height="h-40" rounded="rounded-xl" />
              </div>
            ))}
          </div>
        ) : type === "details" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-16">
            <div className="space-y-4">
              <Skeleton width="w-48" height="h-4" rounded="rounded-md" />

              <Skeleton width="w-full max-w-md" height="h-6" />

              <div className="space-y-1">
                <Skeleton height="h-3" width="w-full max-w-lg" />
                <Skeleton height="h-3" width="w-full max-w-xl" />
                <Skeleton height="h-3" width="w-full max-w-md" />
                <Skeleton height="h-3" width="w-full max-w-sm" />
                <Skeleton height="h-3" width="w-full max-w-2xl" />
                <Skeleton height="h-3" width="w-full max-w-lg" />
                <Skeleton height="h-3" width="w-full max-w-xl" />
                <Skeleton height="h-3" width="w-full max-w-md" />
                <Skeleton height="h-3" width="w-full max-w-sm" />
              </div>
            </div>

            <Skeleton height="h-64" rounded="rounded-2xl" />
          </div>
        ) : type === "post" ? (
          <div className="flex flex-col gap-4 items-center">
            <Skeleton width="w-48" height="h-8" rounded="rounded-md" />

            <Skeleton width="w-full max-w-2xl" height="h-8" />

            <Skeleton height="h-52" />
          </div>
        ) : null}
      </article>
    </section>
  );
};

export default SkeletonPageLoading;
