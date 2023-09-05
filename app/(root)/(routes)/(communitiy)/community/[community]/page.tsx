import { getCommunity } from "@/actions/get-community";
import NotFound from "./components/not-found";
import Header from "./components/Header";
import PageContent from "./components/PageContentLayout";
const CommunityPage = async ({ params }: { params: { community: string } }) => {
  const communityData = await getCommunity(params.community);

  console.log(communityData);

  if (communityData === null) {
    return <NotFound name={params.community} />;
  }

  return (
    <>
      <div className="pt-[51px] bg-[#F9FAFB] md:pt-[62px] pb-96">
        <Header name={params.community} communityData={communityData} />
        <PageContent>
          <>
            <div>LHS</div>
          </>
          <>
            <div>RHS</div>
          </>
        </PageContent>
      </div>
    </>
  );
};

export default CommunityPage;
