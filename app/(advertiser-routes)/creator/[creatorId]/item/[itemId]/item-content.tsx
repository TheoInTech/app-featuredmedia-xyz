"use client";

import { BidModal } from "@/[creatorId]/item/[itemId]/bid-modal";
import {
  GradientButton,
  HelperLink,
  LiveCountdown,
  SolidButton,
} from "@/components";
import { PATH, replacePathKeys } from "@/constants/paths";
import { compactNumber } from "@/lib/utils";
import { useStore } from "@/store";
import { AdStatus } from "@/types/ad-slots.types";
import { ArrowBackIos as ArrowBackIosIcon } from "@mui/icons-material/";
import {
  TableHead as BaseTableHead,
  Box,
  Divider,
  Grid,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const AdPropsPill = styled(Typography)(({ theme }) => ({
  ...theme.typography.base.sm,
  color: theme.palette.neutral[0],
  border: `1px solid ${theme.palette.neutral[100]}`,
  borderRadius: theme.spacing(4),
  padding: theme.spacing(1, 3),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.base.sm,
  color: theme.palette.neutral[60],
}));

const TableHead = styled(BaseTableHead)(({ theme }) => ({
  ...theme.typography.base.sm,
  color: theme.palette.neutral[60],
}));

function createData(bid: number, expiration: number, from: string) {
  return { bid, expiration, from };
}

const rows = [
  createData(6402.84, 1730379592, "theointech"),
  createData(222.84, 1730379592, "theointech"),
  createData(6666.84, 1730379592, "theointech"),
  createData(7.84, 1730379592, "theointech"),
];

export const ItemContent = () => {
  const theme = useTheme();
  const { creator, creatorAdSlot } = useStore();

  const [isBidModalOpen, setIsBidModalOpen] = useState<boolean>(false);

  const toggleBidModal = () => {
    setIsBidModalOpen((prev) => !prev);
  };

  return (
    <Stack
      sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: theme.spacing(2),
        padding: theme.spacing(4),
      }}
    >
      {!!creatorAdSlot && !!creator && (
        <BidModal
          creator={creator}
          adSlot={creatorAdSlot}
          isOpen={isBidModalOpen}
          onClose={toggleBidModal}
        />
      )}
      <Stack
        sx={{
          rowGap: theme.spacing(2),
        }}
      >
        <HelperLink
          href={replacePathKeys(PATH.creatorId, {
            creatorId: creator?.id ?? "",
          })}
          startIcon={
            <ArrowBackIosIcon
              sx={{
                width: 10,
                height: 10,
              }}
            />
          }
        >
          Back to creator
        </HelperLink>
        <Grid
          container
          columnSpacing={4}
          rowSpacing={4}
          sx={{
            maxWidth: "1160px",
          }}
        >
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Image
                src={
                  creatorAdSlot?.image_url ??
                  "https://loremflickr.com/g/500/500/paris"
                }
                alt={creatorAdSlot?.title ?? "Unknown"}
                width={1000}
                height={1000}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  maxWidth: "540px",
                  height: "540px",
                  borderRadius: theme.spacing(2),
                }}
                priority
              />
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              rowGap: theme.spacing(4),
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
            xs={6}
          >
            {/* Author Name */}
            <Stack flexDirection={"row"} alignItems={"center"} columnGap={2}>
              <Image
                src={
                  creator?.image_url ??
                  "https://loremflickr.com/g/1000/1000/paris"
                }
                alt={creator?.username ?? "Unknown"}
                width={1000}
                height={1000}
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  maxHeight: 40,
                }}
              />
              <Typography sx={theme.typography.base.lg}>
                {creator?.username}
              </Typography>
            </Stack>

            {/* Ad Name */}
            <Stack rowGap={1}>
              <Typography sx={theme.typography.base.xxl}>
                {creatorAdSlot?.title}
              </Typography>
              <Typography
                sx={{
                  ...theme.typography.base.md,
                  color: theme.palette.neutral[40],
                }}
              >
                {creatorAdSlot?.description}
              </Typography>
            </Stack>

            {/* Ad Properties  */}
            <Stack rowGap={1}>
              <SectionTitle>Ad Properties</SectionTitle>
              <Stack
                sx={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: theme.spacing(1),
                }}
              >
                <AdPropsPill>Category: {creatorAdSlot?.ad_type}</AdPropsPill>
                <AdPropsPill>
                  Duration: {creatorAdSlot?.ad_duration}
                </AdPropsPill>
                <AdPropsPill>
                  Pricing: {creatorAdSlot?.pricing_type}
                </AdPropsPill>
              </Stack>
            </Stack>

            <Stack
              rowGap={2}
              sx={{
                width: "100%",
                padding: theme.spacing(2),
                background: theme.palette.neutral[140],
                borderRadius: theme.spacing(2),
              }}
            >
              <Stack
                sx={{
                  padding: theme.spacing(2),
                  background: theme.palette.neutral[160],
                  borderRadius: theme.spacing(1),
                  flexDirection: "row",
                  columnGap: theme.spacing(4),
                }}
              >
                <Stack
                  sx={{
                    rowGap: theme.spacing(1),
                    justifyContent: "center",
                  }}
                >
                  <SectionTitle sx={theme.typography.base.xs}>
                    Auction ends in
                  </SectionTitle>
                  {creatorAdSlot?.bidding_end_date && (
                    <LiveCountdown
                      endDate={creatorAdSlot?.bidding_end_date}
                      showSeconds={false}
                      status={AdStatus.BIDDING}
                    />
                  )}
                </Stack>
                <Stack
                  sx={{
                    justifyContent: "center",
                    rowGap: theme.spacing(1),
                  }}
                >
                  <SectionTitle sx={theme.typography.base.xs}>
                    Current Bid
                  </SectionTitle>
                  <Typography
                    sx={{
                      ...theme.typography.base.md,
                      color: theme.palette.neutral[0],
                      fontWeight: 700,
                    }}
                  >
                    $-
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    justifyContent: "center",
                    rowGap: theme.spacing(1),
                  }}
                >
                  <SectionTitle sx={theme.typography.base.xs}>
                    Top Bid
                  </SectionTitle>
                  <Typography
                    sx={{
                      ...theme.typography.base.md,
                      color: theme.palette.neutral[0],
                      fontWeight: 700,
                    }}
                  >
                    $123123
                  </Typography>
                </Stack>
              </Stack>

              <Stack
                sx={{
                  flexDirection: "row",
                  columnGap: theme.spacing(2),
                  background: theme.palette.neutral[140],
                  borderRadius: theme.spacing(2),
                }}
              >
                <GradientButton fullWidth onClick={toggleBidModal}>
                  Place your bid
                </GradientButton>
                <SolidButton fullWidth preset="gray">
                  Save for later
                </SolidButton>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
            }}
          >
            <TableContainer
              sx={{
                border: `1px solid ${theme.palette.neutral[100]}`,
                borderRadius: theme.spacing(2),
              }}
            >
              <Typography
                sx={{
                  ...theme.typography.base.xl,
                  fontWeight: 700,
                  padding: theme.spacing(2),
                }}
              >
                Offers
              </Typography>
              <Divider />
              <Table
                aria-label="offers table"
                sx={{
                  padding: theme.spacing(2),
                }}
              >
                <TableHead>
                  <TableRow
                    sx={{
                      color: theme.palette.neutral[80],
                    }}
                  >
                    <TableCell align="right">USD Bid</TableCell>
                    <TableCell>Expiration</TableCell>
                    <TableCell>From</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={`offer-${row.from}`}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="right">
                        ${compactNumber(row.bid)}
                      </TableCell>
                      <TableCell>{row.expiration}</TableCell>
                      <TableCell>{row.from}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};
