import { IAdSlot } from "@/types/ad-slots.types";
import { PricingType } from "@/types/pricing-types.types";
import { ISeller } from "@/types/seller-types.types";
import { StateCreator } from "zustand";

export interface CreatorAdSlotsSlice {
  creator: ISeller | undefined;
  setCreator: (creator: ISeller | undefined) => void;
  creatorAdSlotPricingTypeFilter: PricingType;
  setCreatorAdSlotPricingTypeFilter: (
    selectedPricingTypeTab: PricingType
  ) => void;
  creatorAdSlots: IAdSlot[];
  setCreatorAdSlots: (creatorAdSlots: IAdSlot[]) => void;
  creatorAdSlot: IAdSlot | undefined;
  setCreatorAdSlot: (creatorAdSlots: IAdSlot | undefined) => void;
}

export const createCreatorAdSlotsSlice: StateCreator<
  CreatorAdSlotsSlice,
  [],
  [],
  CreatorAdSlotsSlice
> = (set) => ({
  creator: undefined,
  setCreator: (creator: ISeller | undefined) => set(() => ({ creator })),
  creatorAdSlotPricingTypeFilter: PricingType.AUCTION,
  setCreatorAdSlotPricingTypeFilter: (
    creatorAdSlotPricingTypeFilter: PricingType
  ) => set(() => ({ creatorAdSlotPricingTypeFilter })),
  creatorAdSlots: [] as IAdSlot[],
  setCreatorAdSlots: (creatorAdSlots: IAdSlot[]) =>
    set(() => ({ creatorAdSlots })),
  creatorAdSlot: undefined,
  setCreatorAdSlot: (creatorAdSlot: IAdSlot | undefined) =>
    set(() => ({ creatorAdSlot })),
});
