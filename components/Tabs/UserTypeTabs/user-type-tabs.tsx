"use client";

import { TERMS, UserType } from "@/types/user-types.types";
import { Tab as BaseTab, styled, TabProps, Tabs } from "@mui/material";

const Tab = styled((props: TabProps) => <BaseTab disableRipple {...props} />)(
  ({ theme }) => ({
    ...theme.typography.button,
    fontWeight: 600,
    minHeight: "40px",
    color: theme.palette.neutral[60],
    background: theme.palette.neutral[160],
    padding: theme.spacing(1, 4),
    "&.Mui-selected": {
      color: theme.palette.neutral[160],
      background: theme.palette.gradient.primary,
      fontWeight: 700,
    },
  })
);

interface IUserTypeTabs {
  userType: UserType;
  onChange: () => void;
}

export const UserTypeTabs = ({ onChange, userType }: IUserTypeTabs) => {
  return (
    <Tabs
      value={userType}
      onChange={onChange}
      aria-label="User Type Tab"
      sx={(theme) => ({
        width: "fit-content",
        minHeight: "40px",
        borderRadius: theme.spacing(1),
        border: `1px solid ${theme.palette.accentCyan.main}`,
        borderBottom: `1px solid ${theme.palette.accentCyan.main}`,
        "& .MuiTabs-indicator": {
          display: "none",
          height: 0,
        },
      })}
    >
      <Tab value={UserType.BUYER} label={TERMS[UserType.BUYER].tabLabel} />
      <Tab value={UserType.SELLER} label={TERMS[UserType.SELLER].tabLabel} />
    </Tabs>
  );
};
