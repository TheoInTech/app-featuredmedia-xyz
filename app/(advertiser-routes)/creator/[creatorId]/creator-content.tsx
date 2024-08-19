"use client";

import {
  Tab as BaseTab,
  Tabs as BaseTabs,
  Box,
  Stack,
  styled,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const Tabs = styled(BaseTabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.neutral[0],
  },

  "& .Mui-selected": {
    color: theme.palette.neutral[0],
    borderBottom: `1px sold ${theme.palette.neutral[0]}`,
  },
}));

const Tab = styled(BaseTab)(({ theme }) => ({
  ...theme.typography.base.md,
  color: theme.palette.neutral[60],
  padding: theme.spacing(3, 4),

  "& .Mui-selected": {
    color: theme.palette.neutral[0],
    borderBottom: `1px sold ${theme.palette.neutral[0]}`,
  },
}));

interface ICreatorContent {
  creatorId: string;
}

export const CreatorContent = ({ creatorId }: ICreatorContent) => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack
      sx={{
        width: "100%",
        justifyContent: "center",
        marginTop: theme.spacing(8),
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          borderBottom: `1px solid ${theme.palette.neutral[120]}`,
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Ad Placements" {...a11yProps(0)} />
          <Tab label="Profile" {...a11yProps(1)} />
          <Tab label="Analytics" {...a11yProps(2)} />
          <Tab label="Social Feed" {...a11yProps(3)} />
          <Tab label="Promo Codes" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Ad Placements
      </TabPanel>
      <TabPanel value={value} index={1}>
        Profile
      </TabPanel>
      <TabPanel value={value} index={2}>
        Analytics
      </TabPanel>
      <TabPanel value={value} index={3}>
        Social Feed
      </TabPanel>
      <TabPanel value={value} index={4}>
        Promo Codes
      </TabPanel>
    </Stack>
  );
};
