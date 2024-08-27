import { IconButton } from "@/components";
import { Close as CloseIcon } from "@mui/icons-material";
import {
  Modal as BaseModal,
  Box,
  ModalProps,
  Stack,
  SxProps,
  useTheme,
} from "@mui/material";
import { ReactNode } from "react";

export interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  modalProps?: ModalProps;
  containerSx?: SxProps;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  modalProps,
  containerSx,
}: IModal) => {
  const theme = useTheme();

  return (
    <BaseModal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      {...modalProps}
    >
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: theme.palette.neutral[160],
          color: theme.palette.neutral[0],
          boxShadow: theme.shadows[3],
          minHeight: "50vh",
          minWidth: "400px",
          maxWidth: "560px",
          borderRadius: theme.spacing(2),
          padding: theme.spacing(4),
          ...containerSx,
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "100%",
            width: "100%",
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: theme.spacing(-2),
              right: theme.spacing(-2),
            }}
          >
            <CloseIcon
              sx={{
                width: 20,
                height: 20,
              }}
            />
          </IconButton>
          {children}
        </Box>
      </Stack>
    </BaseModal>
  );
};
