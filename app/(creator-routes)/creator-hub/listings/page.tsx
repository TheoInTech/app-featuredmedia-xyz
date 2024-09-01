"use client";

import {
  Divider,
  Stack,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";

const ListingsPage = () => {
  const theme = useTheme();

  return (
    <Stack>
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
          Your Listings
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
          {/* <TableBody>
            {rows.map((row) => (
              <TableRow
                key={`offer-${row.from}`}
                sx={{
                  borderColor: theme.palette.neutral[120],
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell align="right">${compactNumber(row.bid)}</TableCell>
                <TableCell>{row.expiration}</TableCell>
                <TableCell>{row.from}</TableCell>
              </TableRow>
            ))}
          </TableBody> */}
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ListingsPage;
