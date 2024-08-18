import "@/styles/globals.css";
import type { Metadata } from "next";

// providers
import { Container } from "@/components";
import { Navbar } from "@/components/Layout";
import { ClientProvider } from "@/providers/client-provider";
import ThemeProvider from "@/theme";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Featured Media",
  description:
    "A peer-2-peer marketplace for creators to offer their ad placements for media buyers to purchase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ClientProvider>
            <Container>
              <Navbar />
              <Box sx={{ height: "110px" }} />
              {children}
            </Container>
          </ClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
