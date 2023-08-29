import { getCommunity } from "@/actions/get-community";
import React from "react";

const CommunityPage = async ({ params }: { params: { community: string } }) => {
  const communityData = await getCommunity(params.community);

  console.log(communityData)

  return <div className="py-20 text-2xl">welcome to {communityData.id}</div>;
};

export default CommunityPage;
