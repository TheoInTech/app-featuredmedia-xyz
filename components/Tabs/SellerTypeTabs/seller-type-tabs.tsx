"use client";

import { SellerType, TERMS } from "@/types/seller-types.types";
import { alpha, Tab as BaseTab, styled, TabProps, Tabs } from "@mui/material";
import { TransitionGroup } from "react-transition-group";

const Tab = styled((props: TabProps) => <BaseTab disableRipple {...props} />)(
  ({ theme }) => ({
    ...theme.typography.button,
    minWidth: "64px",
    minHeight: "40px",
    color: theme.palette.neutral[0],
    background: theme.palette.neutral[60],
    padding: theme.spacing(0, 3),
    "&.Mui-selected": {
      color: theme.palette.neutral[60],
      background: theme.palette.primary.main,
      borderRadius: theme.spacing(4),
    },
  })
);

interface ISellerTypeTabs {
  sellerType: SellerType;
  onChange: (event: React.SyntheticEvent, value: unknown) => void;
}

export const SellerTypeTabs = ({ onChange, sellerType }: ISellerTypeTabs) => {
  return (
    <TransitionGroup>
      <Tabs
        value={sellerType}
        onChange={onChange}
        aria-label="Seller Type Tab"
        sx={(theme) => ({
          width: "fit-content",
          minHeight: "40px",
          borderRadius: theme.spacing(4),
          border: `1px solid ${alpha(theme.palette.neutral[60], 0.25)}`,
          background: theme.palette.neutral[100],
          "& .MuiTabs-indicator": {
            display: "none",
            height: 0,
          },
        })}
      >
        <Tab value={SellerType.ALL} label={TERMS[SellerType.ALL].tabLabel} />
        <Tab
          value={SellerType.CREATOR}
          label={TERMS[SellerType.CREATOR].tabLabel}
        />
        <Tab
          value={SellerType.MEDIA_NETWORK}
          label={TERMS[SellerType.MEDIA_NETWORK].tabLabel}
        />
      </Tabs>
    </TransitionGroup>
  );
};
