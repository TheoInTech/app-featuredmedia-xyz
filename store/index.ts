import { CommonSlice, createCommonSlice } from "@/store/common.slice";
import {
  CreatorAdSlotsSlice,
  createCreatorAdSlotsSlice,
} from "@/store/create-ad-slots.slice";
import { createSelectors } from "@/store/create-selectors";
import {
  MarketplaceSlice,
  createMarketplaceSlice,
} from "@/store/marketplace.slice";
import { UserTypeSlice, createUserTypeSlice } from "@/store/user-type.slice";
import { create } from "zustand";

type Store = MarketplaceSlice &
  UserTypeSlice &
  CreatorAdSlotsSlice &
  CommonSlice;

const useStoreObj = create<Store>()((...a) => ({
  ...createMarketplaceSlice(...a),
  ...createUserTypeSlice(...a),
  ...createCreatorAdSlotsSlice(...a),
  ...createCommonSlice(...a),
}));

export const useStore = createSelectors(useStoreObj);
