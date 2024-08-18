"use client";

import {
  adSlots as mockAdSlots,
  sellerAnalytics as mockSellerAnalytics,
  sellers as mockSellers,
} from "@/__mock__";
import { useStore } from "@/store";
import { IExtendedAdSlot } from "@/types/ad-slots.types";
import { useEffect } from "react";

export const useMarketplaceFilters = () => {
  const {
    selectedPricingTypeTab,
    setSelectedPricingTypeTab,
    selectedSellerTypeTab,
    setSelectedSellerTypeTab,
    selectedSellerCategory,
    setSelectedSellerCategory,
    sellers,
    setSellers,
    adSlots,
    setAdSlots,
  } = useStore();

  const filterBySeller = () => {
    // TODO: Replace mock data with real data
    const filteredSellers = !selectedSellerCategory
      ? [...mockSellers]
      : mockSellers.filter(
          (seller) => seller.category === selectedSellerCategory
        );

    setSellers(filteredSellers);
  };

  const filterByPricingType = () => {
    // TODO: Replace mock data with real data
    // Create maps for sellers and analytics for O(1) access
    const sellerMap = new Map(sellers.map((seller) => [seller.id, seller]));
    const analyticsMap = new Map(
      mockSellerAnalytics.map((analytics) => [analytics.seller_id, analytics])
    );

    // Filter and map in a single iteration
    const filteredAndCombinedAdSlots = mockAdSlots.reduce<IExtendedAdSlot[]>(
      (acc, adSlot) => {
        if (
          adSlot.pricing_type === selectedPricingTypeTab &&
          sellerMap.has(adSlot.seller_id)
        ) {
          const seller = sellerMap.get(adSlot.seller_id);
          const analytics = analyticsMap.get(adSlot.seller_id);
          acc.push({
            ...adSlot,
            seller: seller || null, // Include seller data if found
            analytics: analytics || null, // Include analytics data if found
          });
        }
        return acc;
      },
      []
    );

    setAdSlots(filteredAndCombinedAdSlots);
  };

  useEffect(() => {
    filterBySeller();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSellerCategory, selectedSellerTypeTab]);

  useEffect(() => {
    if (!sellers || sellers?.length === 0) return;

    filterByPricingType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(sellers), selectedPricingTypeTab]);

  return {
    selectedSellerCategory,
    selectedPricingTypeTab,
    selectedSellerTypeTab,
    adSlots,
    filterBySeller,
    filterByPricingType,
    setSelectedSellerCategory,
    setSelectedPricingTypeTab,
    setSelectedSellerTypeTab,
  };
};
