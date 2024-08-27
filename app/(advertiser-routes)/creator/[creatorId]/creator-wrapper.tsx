"use client";

import { useCreatorId } from "@/hooks/creators/useCreatorId";
import { ReactNode } from "react";

interface ICreatorWrapper {
  creatorId: string;
  children: ReactNode;
}

export const CreatorWrapper = ({ creatorId, children }: ICreatorWrapper) => {
  const _creator = useCreatorId(creatorId);

  return <>{children}</>;
};
