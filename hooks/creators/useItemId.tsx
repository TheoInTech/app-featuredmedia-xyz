"use client";

import { adSlots as mockAdSlots } from "@/__mock__";
import { useStore } from "@/store";
import { useEffect } from "react";

export const useItemId = (itemId: string) => {
  const { setCreatorAdSlot, creatorAdSlot, setIsLoading } = useStore();

  const fetchCreatorAdSlot = async () => {
    setIsLoading(true);

    try {
      const currentItem = await mockAdSlots.find((c) => c.id === itemId);

      setCreatorAdSlot(currentItem);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (!itemId) return;
      await fetchCreatorAdSlot();
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  return {
    creatorAdSlot,
  };
};
