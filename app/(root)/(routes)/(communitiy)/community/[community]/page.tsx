import { getCommunity } from "@/actions/get-community";
import NotFound from "./components/not-found";
import Container from "@/components/Container";
const CommunityPage = async ({ params }: { params: { community: string } }) => {
  const communityData = await getCommunity(params.community);

  console.log(communityData);

  if (communityData === null) {
    return <NotFound name={params.community} />;
  }

  return (
    <>
      <Container>
        <div className="py-16 md:py-20 text-2xl">welcome to {communityData.id}</div>
      </Container>
    </>
  );
};

export default CommunityPage;
