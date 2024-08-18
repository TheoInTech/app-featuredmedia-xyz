"use client";

import { Toast } from "@/components";
import { ReactNode, createContext, useContext, useState } from "react";

export type AlertType = "success" | "error" | "info" | "warning";

interface IToastProviderProps {
  children: ReactNode;
}

interface IToastState {
  open: boolean;
  alertType: AlertType;
  title: string;
  isClosable: boolean;
  children?: ReactNode;
  isLoading?: boolean;
}

interface ToastContextValue {
  showToast: (
    alertType: AlertType,
    isClosable: boolean,
    title: string,
    children?: ReactNode,
    isLoading?: boolean
  ) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider = ({ children }: IToastProviderProps) => {
  const [toast, setToast] = useState<IToastState>({
    open: false,
    alertType: "info",
    title: "",
    isClosable: false,
    isLoading: false,
  });

  const showToast = (
    alertType: AlertType,
    isClosable: boolean,
    title: string,
    children?: ReactNode,
    isLoading?: boolean
  ) => {
    setToast({ open: true, alertType, title, children, isClosable, isLoading });
  };

  const handleClose = () => {
    setToast((prev) => ({ ...prev, open: false }));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        alertType={toast.alertType}
        title={toast.title}
        open={toast.open}
        onClose={handleClose}
        isClosable={toast.isClosable}
        isLoading={toast.isLoading}
      >
        {toast.children}
      </Toast>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextValue => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
