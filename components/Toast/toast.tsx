"use client";

import { shouldNotForwardPropsWithKeys } from "@/lib/utils";
import { AlertType } from "@/providers/toast-provider";
import {
  CheckCircle as CheckCircleIcon,
  Close as CloseIcon,
  HighlightOff as HighlightOffIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
} from "@mui/icons-material";
import {
  CircularProgress,
  IconButton,
  Snackbar,
  snackbarClasses,
  styled,
  useTheme,
} from "@mui/material";
import Slide, { SlideProps } from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

const Wrapper = styled("div")<{ alertType?: AlertType }>(({ theme }) => ({
  display: "flex",
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.neutral[0]}`,
  borderRadius: "8px",
  width: "256px",
  boxShadow: "0px 4px 4px #00000040",
  padding: "8px",
  gap: "12px",
}));

const ContentWrapper = styled("div")(() => ({
  display: "flex",
  maxWidth: "240px",
  gap: "8px",
}));

const Title = styled(Typography, {
  shouldForwardProp: shouldNotForwardPropsWithKeys(["alertType"]),
})<{ alertType?: AlertType }>(({ theme, alertType }) => {
  let color = theme.palette.success.main;

  switch (alertType) {
    case "success":
      color = theme.palette.success.main;
      break;
    case "error":
      color = theme.palette.danger.main;
      break;
    case "warning":
      color = theme.palette.warning.main;
      break;
    case "info":
      color = theme.palette.primary.main;
      break;
  }

  return {
    ...theme.typography.caption,
    color: color,
  };
});

const IconWrapper = styled("div")(() => ({
  width: "24px",
  height: "24px",
  borderRadius: "12px",
}));

const MessageWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  gap: "4px",
  padding: "0px 16px 0px 0px",
}));

export const Content = styled(Typography)<{ alertType?: AlertType }>(
  ({ theme }) => ({
    ...theme.typography.button,
    display: "flex",
    flexDirection: "column",
    color: theme.palette.neutral[20],
    position: "relative",
    width: "100%",
  })
);

const CloseIconButton = styled(IconButton)(({ theme }) => ({
  alignItems: "flex-start",
  color: theme.palette.neutral[40],
}));

interface IToastProps {
  alertType?: AlertType;
  children?: ReactNode;
  title: string;
  open: boolean;
  isClosable?: boolean;
  onClose: () => void;
  isLoading?: boolean;
}

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

export const Toast: FC<IToastProps> = ({
  alertType,
  children,
  title,
  isClosable = false,
  open,
  onClose,
  isLoading = false,
}) => {
  const theme = useTheme();
  const AlertIcon = () => {
    if (isLoading)
      return (
        <CircularProgress
          size={14}
          thickness={5}
          sx={(theme) => ({
            padding: 0,
            marginLeft: theme.spacing(0.5),
            color: theme.palette.warning.main,
          })}
        />
      );

    switch (alertType) {
      case "success":
        return (
          <CheckCircleIcon
            height={24}
            width={24}
            sx={{
              top: "4px",
              position: "relative",
              color: theme.palette.success.main,
            }}
          />
        );
      case "warning":
        return (
          <WarningIcon
            height={24}
            width={24}
            sx={{
              top: "4px",
              position: "relative",
              color: theme.palette.warning.main,
            }}
          />
        );
      case "error":
        return (
          <HighlightOffIcon
            height={24}
            width={24}
            sx={{
              top: "4px",
              position: "relative",
              color: theme.palette.danger.main,
            }}
          />
        );
      case "info":
        return (
          <InfoIcon
            height={24}
            width={24}
            sx={{
              top: "4px",
              position: "relative",
              color: theme.palette.primary.main,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={isClosable ? null : 6000}
      onClose={onClose}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      sx={(theme) => ({
        [`&.${snackbarClasses.anchorOriginBottomLeft}`]: {
          bottom: theme.spacing(8),
          left: theme.spacing(4),
        },
      })}
    >
      <Wrapper>
        <ContentWrapper>
          <IconWrapper>
            <AlertIcon />
          </IconWrapper>
          <MessageWrapper>
            <Title alertType={alertType}> {title} </Title>
            <Content>{children}</Content>
          </MessageWrapper>

          {isClosable && (
            <IconWrapper
              sx={{ position: "absolute", right: "2px", top: "2px" }}
            >
              <CloseIconButton
                aria-label="toast-close"
                size="small"
                onClick={onClose}
              >
                <CloseIcon height={16} width={16} />
              </CloseIconButton>
            </IconWrapper>
          )}
        </ContentWrapper>
      </Wrapper>
    </Snackbar>
  );
};
