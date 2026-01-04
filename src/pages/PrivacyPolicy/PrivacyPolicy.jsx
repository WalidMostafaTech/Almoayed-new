import { useQuery } from "@tanstack/react-query";
import { getPrivacyPolicyPage } from "../../services/pagesServices";

import Skeleton from "../../components/Loading/SkeletonLoading/Skeleton";

const PrivacyPolicy = () => {
  const { data: privacyPolicyPage = [], isLoading } = useQuery({
    queryKey: ["privacyPolicyPage"],
    queryFn: getPrivacyPolicyPage,
  });

  if (isLoading || !privacyPolicyPage)
    return (
      <article className="container flex flex-col gap-2">
        <Skeleton
          width="w-1/3"
          height="h-4"
          rounded="rounded-lg"
          className="mb-4"
        />
        <Skeleton width="w-full" height="h-2" rounded="rounded-lg" />
        <Skeleton width="w-11/12" height="h-2" rounded="rounded-lg" />
        <Skeleton width="w-full" height="h-2" rounded="rounded-lg" />
        <Skeleton width="w-10/12" height="h-2" rounded="rounded-lg" />
        <Skeleton width="w-9/12" height="h-2" rounded="rounded-lg" />
        <Skeleton width="w-full" height="h-2" rounded="rounded-lg" />
      </article>
    );

  return (
    <article className="container">
      <h3 className="font-bold text-myGold text-xl lg:text-2xl mb-4">
        {privacyPolicyPage?.privacy_policy?.title}
      </h3>

      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html: privacyPolicyPage?.privacy_policy?.description,
        }}
      />
    </article>
  );
};

export default PrivacyPolicy;
