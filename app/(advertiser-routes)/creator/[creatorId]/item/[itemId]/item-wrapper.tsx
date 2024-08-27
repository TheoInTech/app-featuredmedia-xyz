"use client";

import { useCreatorId } from "@/hooks/creators/useCreatorId";
import { useItemId } from "@/hooks/creators/useItemId";
import { ReactNode } from "react";

interface IItemWrapper {
  creatorId: string;
  itemId: string;
  children: ReactNode;
}

export const ItemWrapper = ({ creatorId, itemId, children }: IItemWrapper) => {
  const _adSlot = useItemId(itemId);
  const _creator = useCreatorId(creatorId);

  return <>{children}</>;
};
