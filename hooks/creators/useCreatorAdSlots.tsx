"use client";

import { adSlots as mockAdSlots } from "@/__mock__";
import { useStore } from "@/store";
import { useEffect } from "react";

export const useCreatorAdSlots = (creatorId: string) => {
  const { creatorAdSlots, setCreatorAdSlots, setIsLoading } = useStore();

  const filterAdSlotsByCreator = async () => {
    setIsLoading(true);

    try {
      const filteredAdSlots = await mockAdSlots.filter(
        (adSlot) => adSlot.seller_id === creatorId
      );

      setCreatorAdSlots(filteredAdSlots);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (!creatorId) return;
      await filterAdSlotsByCreator();
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [creatorId]);

  return {
    creatorAdSlots,
  };
};
