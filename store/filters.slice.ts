import { IExtendedAdSlot } from "@/types/ad-slots.types";
import { SellerCategory } from "@/types/categories.types";
import { PricingType } from "@/types/pricing-types.types";
import { ISeller, SellerType } from "@/types/seller-types.types";
import { StateCreator } from "zustand";

export interface FiltersSlice {
  selectedSellerCategory: SellerCategory | undefined;
  setSelectedSellerCategory: (
    selectedSellerCategory: SellerCategory | undefined
  ) => void;
  selectedPricingTypeTab: PricingType;
  setSelectedPricingTypeTab: (selectedPricingTypeTab: PricingType) => void;
  selectedSellerTypeTab: SellerType;
  setSelectedSellerTypeTab: (selectedSellerTypeTab: SellerType) => void;
  sellers: ISeller[];
  setSellers: (sellers: ISeller[]) => void;
  adSlots: IExtendedAdSlot[];
  setAdSlots: (adSlots: IExtendedAdSlot[]) => void;
}

export const createFiltersSlice: StateCreator<
  FiltersSlice,
  [],
  [],
  FiltersSlice
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
  sellers: [] as ISeller[],
  setSellers: (sellers: ISeller[]) => set(() => ({ sellers })),
  adSlots: [] as IExtendedAdSlot[],
  setAdSlots: (adSlots: IExtendedAdSlot[]) => set(() => ({ adSlots })),
});
