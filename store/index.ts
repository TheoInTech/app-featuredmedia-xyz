import { createSelectors } from "@/store/create-selectors";
import { FiltersSlice, createFiltersSlice } from "@/store/filters.slice";
import { UserTypeSlice, createUserTypeSlice } from "@/store/user-type.slice";
import { create } from "zustand";

type Store = FiltersSlice & UserTypeSlice;

const useStoreObj = create<Store>()((...a) => ({
  ...createFiltersSlice(...a),
  ...createUserTypeSlice(...a),
}));

export const useStore = createSelectors(useStoreObj);
