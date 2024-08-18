"use client";

import { ToastProvider } from "@/providers/toast-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppInfo, PermissionType } from "arconnect";
import { ArweaveWalletKit } from "arweave-wallet-kit";
import { ReactNode } from "react";

const WALLET_PERMISSIONS: PermissionType[] = [
  "ACCESS_ADDRESS",
  "ACCESS_PUBLIC_KEY",
  "DISPATCH",
  "SIGNATURE",
  "SIGN_TRANSACTION",
];

interface IClientProvider {
  children: ReactNode;
}

export const ClientProvider = ({ children }: IClientProvider) => {
  const queryClient = new QueryClient();

  const APP_INFO: AppInfo = {
    name: "Featured Media",
    logo: "http://localhost:3000/assets/logo.svg",
  };

  return (
    <ArweaveWalletKit
      config={{
        ensurePermissions: true,
        permissions: WALLET_PERMISSIONS,
        appInfo: APP_INFO,
      }}
      theme={{
        displayTheme: "dark",
        radius: "minimal",
        titleHighlight: { r: 0, g: 0, b: 0 },
      }}
    >
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ToastProvider>
    </ArweaveWalletKit>
  );
};
