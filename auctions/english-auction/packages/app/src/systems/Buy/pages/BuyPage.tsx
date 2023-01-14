import { Card, Heading, Stack } from "@fuel-ui/react";

import { AuctionInfo } from "../components";
import { useAllAuctionInfo } from "../hooks/useAllAuctionInfo";

import { MainLayout } from "~/systems/Core/components/MainLayout";

export function BuyPage() {
  const auctionInfo = useAllAuctionInfo() || [];

  return (
    <MainLayout>
      <Stack align="center">
        <Card align="center" css={{ width: "700px" }}>
          <Heading as="h3">Auctions</Heading>
        </Card>

        <Stack gap="$5">
          <AuctionInfo auctions={auctionInfo} />
        </Stack>
      </Stack>
    </MainLayout>
  );
}
