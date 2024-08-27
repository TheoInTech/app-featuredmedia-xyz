"use client";

import {
  sellerAnalytics as mockSellerAnalytics,
  sellers as mockSellers,
} from "@/__mock__";
import { useStore } from "@/store";
import { ISellerCard } from "@/types/seller-types.types";
import { useEffect } from "react";

export const useMarketplace = () => {
  const {
    selectedPricingTypeTab,
    setSelectedPricingTypeTab,
    selectedSellerTypeTab,
    setSelectedSellerTypeTab,
    selectedSellerCategory,
    setSelectedSellerCategory,
    sellers,
    setSellers,
    setIsLoading,
  } = useStore();

  const filterBySeller = () => {
    setIsLoading(true);

    try {
      // TODO: Replace mock data with real data
      const filteredSellers = !selectedSellerCategory
        ? [...mockSellers]
        : mockSellers.filter(
            (seller) => seller.category === selectedSellerCategory
          );

      const analyticsMap = new Map(
        mockSellerAnalytics.map((analytics) => [analytics.seller_id, analytics])
      );

      const sellersWithAnalytics = filteredSellers.map((seller) => ({
        ...seller,
        ...(analyticsMap.get(seller.id) || {}),
        id: seller.id,
      })) as ISellerCard[];

      setSellers(sellersWithAnalytics);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    filterBySeller();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSellerCategory, selectedSellerTypeTab]);

  return {
    selectedSellerCategory,
    selectedPricingTypeTab,
    selectedSellerTypeTab,
    sellers,
    filterBySeller,
    setSelectedSellerCategory,
    setSelectedPricingTypeTab,
    setSelectedSellerTypeTab,
  };
};
