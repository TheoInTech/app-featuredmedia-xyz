"use client";

import { sellers as mockSellers } from "@/__mock__";
import { useStore } from "@/store";
import { useEffect } from "react";

export const useCreatorId = (creatorId: string) => {
  const { setCreator, creator, setIsLoading } = useStore();

  const fetchCreator = async () => {
    setIsLoading(true);

    try {
      const currentCreator = await mockSellers.find((c) => c.id === creatorId);

      setCreator(currentCreator);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (!creatorId) return;
      await fetchCreator();
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [creatorId]);

  return {
    creator,
  };
};
