import { Modal } from "@/components";
import { IModal } from "@/components/Modal/modal";
import { IAdSlot } from "@/types/ad-slots.types";
import { ISeller } from "@/types/seller-types.types";
import { Stack, Typography, useTheme } from "@mui/material";

interface IBidModal extends Omit<IModal, "children"> {
  adSlot: IAdSlot;
  creator: ISeller;
}

export const BidModal = ({ adSlot, creator, ...props }: IBidModal) => {
  const theme = useTheme();
  return (
    <Modal {...props}>
      <Stack
        sx={{
          rowGap: theme.spacing(2),
        }}
      >
        <Stack rowGap={1}>
          <Typography sx={theme.typography.base.xxl}>Place your bid</Typography>
          <Typography
            sx={{
              ...theme.typography.base.xs,
              color: theme.palette.neutral[60],
            }}
          >
            You&apos;re placing a bid for {adSlot.title} from {creator.username}
          </Typography>
        </Stack>
      </Stack>
    </Modal>
  );
};
