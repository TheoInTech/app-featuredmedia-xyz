import {
  GradientButton,
  Modal,
  OutlineButton,
  OutlinedInput,
} from "@/components";
import { IModal } from "@/components/Modal/modal";
import { IAdSlot } from "@/types/ad-slots.types";
import { ISeller } from "@/types/seller-types.types";
import { Divider, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";

interface IBidModal extends Omit<IModal, "children"> {
  adSlot: IAdSlot;
  creator: ISeller;
}

export const BidModal = ({ adSlot, creator, ...props }: IBidModal) => {
  const theme = useTheme();
  const [bidAmount, setBidAmount] = useState<number>();

  const platformFee = bidAmount ? bidAmount * 0.04 : 0;
  const total = bidAmount && platformFee ? bidAmount + platformFee : 0;

  const handleBidAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBidAmount(Number(e.target.value));
  };

  const handlePlaceBid = () => {
    console.log("place bid");
    setBidAmount(undefined);
    props.onClose();
  };

  return (
    <Modal {...props}>
      <Stack
        sx={{
          rowGap: theme.spacing(2),
        }}
      >
        <Stack rowGap={3}>
          <Stack rowGap={1}>
            <Typography sx={theme.typography.base.xxl}>
              Place your bid
            </Typography>
            <Typography
              sx={{
                ...theme.typography.base.xs,
                color: theme.palette.neutral[60],
              }}
            >
              You&apos;re placing a bid for {adSlot.title} from{" "}
              {creator.username}
            </Typography>
          </Stack>

          <OutlinedInput
            placeholder="Enter your bid"
            label="Enter bid amount"
            value={bidAmount}
            onChange={handleBidAmountChange}
          />

          <Stack rowGap={2}>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography sx={theme.typography.base.xs}>
                Platform fee (4%)
              </Typography>
              <Typography sx={theme.typography.base.md}>
                {platformFee ? `$${platformFee.toFixed(2)}` : "$-"}
              </Typography>
            </Stack>
            <Divider />
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography sx={theme.typography.base.md}>Total</Typography>
              <Typography sx={theme.typography.base.xl}>
                {total ? `$${total.toFixed(2)}` : "$-"}
              </Typography>
            </Stack>
          </Stack>

          <Stack rowGap={2} mt={2} justifySelf={"flex-end"}>
            <GradientButton
              rounded
              onClick={handlePlaceBid}
              disabled={!bidAmount}
            >
              Place your bid
            </GradientButton>
            <OutlineButton rounded onClick={props.onClose}>
              Cancel
            </OutlineButton>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
};
