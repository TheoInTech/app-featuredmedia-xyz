"use client";

// react
import { ReactNode } from "react";

// theme
import breakpoints from "@/theme/breakpoints";
import palette from "@/theme/palette";
import typography from "@/theme/typography";

// @mui
import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material/styles";

interface IFeaturedMediaThemeProvider {
  children: ReactNode;
}

export const getTheme = () => {
  const themeOptions: ThemeOptions = {
    palette,
    typography,
    breakpoints,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            color: palette?.neutral?.[20],
            backgroundColor: palette?.neutral?.[160],
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
          disableTouchRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
      },
      MuiSkeleton: {
        defaultProps: {
          height: 16,
          width: 50,
          sx: (theme) => ({
            bgcolor: theme.palette.neutral[60],
          }),
        },
      },
    },
  };

  const theme = createTheme(themeOptions);

  return theme;
};

export const FeaturedMediaThemeProvider = ({
  children,
}: IFeaturedMediaThemeProvider) => {
  const fmTheme = getTheme();

  return (
    <AppRouterCacheProvider options={{ key: "css" }}>
      <ThemeProvider theme={fmTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default FeaturedMediaThemeProvider;