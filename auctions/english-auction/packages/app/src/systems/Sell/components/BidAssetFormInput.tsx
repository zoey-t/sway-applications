import { Form, Input, Stack } from "@fuel-ui/react";
import type { CoinQuantity } from "fuels";
import { useState } from "react";
import type { Control, FormState } from "react-hook-form";

import type { CreateAuctionFormValues } from "../hooks/useCreateAuctionForm";

import { DropdownContainerForm } from "./DropdownContainerForm";

import { ControlledField } from "~/systems/Core/components/ControlledField";

interface BidAassetFormInputProps {
  assets: CoinQuantity[];
  control: Control<CreateAuctionFormValues>;
  formState: FormState<CreateAuctionFormValues>;
}

export const BidAassetFormInput = ({
  assets,
  control,
  formState,
}: BidAassetFormInputProps) => {
  const [isNFT, setIsNFT] = useState(false);

  return (
    <DropdownContainerForm onChange={setIsNFT} assets={assets}>
      <>
        <Stack>
          <Form.Control>
            <Form.Label>Bid Asset</Form.Label>
          </Form.Control>
          {isNFT && (
            <ControlledField
              control={control}
              name="bidNFTAssetId"
              label="Bid NFT Asset Id"
              isRequired
              isInvalid={Boolean(formState.errors.bidNFTAssetId)}
              render={({ field }) => (
                <Input>
                  <Input.Field
                    {...field}
                    aria-label="Bid nft asset id"
                    placeholder="0x000...000"
                  />
                </Input>
              )}
            />
          )}
        </Stack>
      </>
    </DropdownContainerForm>
  );
};