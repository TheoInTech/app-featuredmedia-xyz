"use client";

import { PricingType, TERMS } from "@/types/pricing-types.types";
import { alpha, Tab as BaseTab, styled, Tabs, useTheme } from "@mui/material";

const PricingTab = styled(BaseTab)(({ theme }) => ({
  padding: 0,
  ":not(:first-of-type)": {
    marginLeft: theme.spacing(4),
  },
  "&.Mui-selected": {
    color: theme.palette.neutral[0],
  },
}));

interface IPricingTypeTabs {
  pricingType: PricingType;
  onChange: (event: React.SyntheticEvent, value: unknown) => void;
}

export const PricingTypeTabs = ({
  onChange,
  pricingType,
}: IPricingTypeTabs) => {
  const theme = useTheme();

  return (
    <Tabs
      value={pricingType}
      onChange={onChange}
      aria-label="Pricing Types"
      sx={{
        borderBottom: `1px solid ${alpha(theme.palette.neutral[60], 0.25)}`,

        ".MuiTabs-indicator": {
          background: theme.palette.primary.main,
          borderRadius: theme.spacing(4),
          height: 4,
        },
      }}
    >
      <PricingTab
        value={PricingType.AUCTION}
        label={TERMS[PricingType.AUCTION].tabLabel}
      />
      <PricingTab
        value={PricingType.FIXED}
        label={TERMS[PricingType.FIXED].tabLabel}
      />
    </Tabs>
  );
};
