"use client";

import { Icon } from "@/components";
import { useStore } from "@/store";
import {
  IconButton as BaseIconButton,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";

const CreatorImage = styled(Image)(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: "50%",
  border: `4px solid ${theme.palette.neutral[160]}`,
}));

const IconButton = styled(BaseIconButton)({
  padding: 0,
});

const MetricsBox = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.palette.neutral[80]}`,
  alignItems: "center",
  justifyContent: "center",
  rowGap: theme.spacing(2),
  width: "fit-content",
  minWidth: "200px",
  textAlign: "center",
}));

const MetricsTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.base.sm,
  color: theme.palette.neutral[60],
}));

const MetricsValue = styled(Typography)(({ theme }) => ({
  ...theme.typography.base.xl,
  color: theme.palette.neutral[0],
}));

const MetricsPercent = styled(Typography)(({ theme }) => ({
  ...theme.typography.base.sm,
  color: theme.palette.accentCyan.main,
}));

export const CreatorSummary = () => {
  const theme = useTheme();
  const { creator, isLoading } = useStore();

  return (
    <Stack rowGap={6}>
      <Stack
        rowGap={3}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: theme.spacing(-7),
        }}
      >
        <CreatorImage
          src={creator?.image_url ?? "https://loremflickr.com/500/500/dog"}
          alt="banner"
          width={500}
          height={500}
          priority
        />
        <Typography
          sx={{
            ...theme.typography.display.heading,
            fontWeight: 700,
            color: theme.palette.neutral[0],
          }}
        >
          {/* TODO: Replace with name */}
          {creator?.username ?? "Unknown"}
        </Typography>
        <Typography
          sx={{
            ...theme.typography.base.sm,
            color: theme.palette.neutral[60],
          }}
        >
          {creator?.bio ?? "No bio available."}
        </Typography>

        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            columnGap: theme.spacing(1),
            padding: theme.spacing(1, 2),
            borderRadius: theme.spacing(6),
            border: `1px solid ${theme.palette.neutral[80]}`,
          }}
        >
          <IconButton>
            <Icon name="glow-kick" height={64} width={64} />
          </IconButton>
          <IconButton>
            <Icon name="glow-youtube" height={64} width={64} />
          </IconButton>
          <IconButton>
            <Icon name="glow-tiktok" height={64} width={64} />
          </IconButton>
          <IconButton>
            <Icon name="glow-twitter" height={64} width={64} />
          </IconButton>
        </Stack>
      </Stack>

      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        columnGap={3}
      >
        <MetricsBox>
          <MetricsTitle>Floor Price</MetricsTitle>
          <Stack alignItems={"center"}>
            <MetricsValue>29,745 USD</MetricsValue>
            <MetricsPercent>+58%</MetricsPercent>
          </Stack>
        </MetricsBox>

        <MetricsBox>
          <MetricsTitle>Followers</MetricsTitle>
          <Stack alignItems={"center"}>
            <MetricsValue>2.5M</MetricsValue>
            <MetricsPercent>+3.06%</MetricsPercent>
          </Stack>
        </MetricsBox>

        <MetricsBox>
          <MetricsTitle>30D Views</MetricsTitle>
          <Stack alignItems={"center"}>
            <MetricsValue>389,092</MetricsValue>
            <MetricsPercent>+2.55%</MetricsPercent>
          </Stack>
        </MetricsBox>

        <MetricsBox>
          <MetricsTitle>Engagement Rate</MetricsTitle>
          <Stack alignItems={"center"}>
            <MetricsValue>55%</MetricsValue>
            <MetricsPercent>+7.8%</MetricsPercent>
          </Stack>
        </MetricsBox>
      </Stack>
    </Stack>
  );
};
