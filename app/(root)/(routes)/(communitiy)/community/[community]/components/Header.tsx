import Container from "@/components/Container";
import { Community } from "@/typings";
import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/Button";

type HeaderProps = {
  communityData: Community;
  name: string;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  return (
    <div>
      <div className="h-[73px] bg-brand-purple" />
      <div className="h-[73px] bg-white">
        <Container>
          <div className="flex items-start">
            <Logo
              imageUrl={communityData.imageUrl || "/assets/images/fallback.jpg"}
              alt={communityData.id}
            />
            <div className="flex items-center pt-2 ml-2 md:ml-4 gap-10">
              <div className="flex flex-col">
                <h4 className="text-lg md:text-2xl font-bold">
                  {communityData.id}
                </h4>
                <p className="max-md:text-sm text-brand-gray">
                  c/{communityData.id.toLowerCase()}
                </p>
              </div>
              <div>
                <Button variant="outline" className="border-black px-8 md:px-10 font-semibold rounded-full">
                  Joined
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Header;
