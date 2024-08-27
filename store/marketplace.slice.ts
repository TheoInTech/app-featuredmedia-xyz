import { IAdSlot } from "@/types/ad-slots.types";
import { SellerCategory } from "@/types/categories.types";
import { PricingType } from "@/types/pricing-types.types";
import { ISellerCard, SellerType } from "@/types/seller-types.types";
import { StateCreator } from "zustand";

export interface MarketplaceSlice {
  selectedSellerCategory: SellerCategory | undefined;
  setSelectedSellerCategory: (
    selectedSellerCategory: SellerCategory | undefined
  ) => void;
  selectedPricingTypeTab: PricingType;
  setSelectedPricingTypeTab: (selectedPricingTypeTab: PricingType) => void;
  selectedSellerTypeTab: SellerType;
  setSelectedSellerTypeTab: (selectedSellerTypeTab: SellerType) => void;
  sellers: ISellerCard[];
  setSellers: (sellers: ISellerCard[]) => void;
  adSlots: IAdSlot[];
  setAdSlots: (adSlots: IAdSlot[]) => void;
}

export const createMarketplaceSlice: StateCreator<
  MarketplaceSlice,
  [],
  [],
  MarketplaceSlice
> = (set) => ({
  selectedSellerCategory: undefined,
  setSelectedSellerCategory: (
    selectedSellerCategory: SellerCategory | undefined
  ) => set(() => ({ selectedSellerCategory })),
  selectedPricingTypeTab: PricingType.AUCTION,
  setSelectedPricingTypeTab: (selectedPricingTypeTab: PricingType) =>
    set(() => ({ selectedPricingTypeTab })),
  selectedSellerTypeTab: SellerType.ALL,
  setSelectedSellerTypeTab: (selectedSellerTypeTab: SellerType) =>
    set(() => ({ selectedSellerTypeTab })),
  sellers: [] as ISellerCard[],
  setSellers: (sellers: ISellerCard[]) => set(() => ({ sellers })),
  adSlots: [] as IAdSlot[],
  setAdSlots: (adSlots: IAdSlot[]) => set(() => ({ adSlots })),
});
