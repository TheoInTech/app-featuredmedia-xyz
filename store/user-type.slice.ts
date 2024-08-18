import { UserType } from "@/types/user-types.types";
import { StateCreator } from "zustand";

export interface UserTypeSlice {
  activeUserType: UserType;
  setActiveUserType: (activeUserType: UserType) => void;
}

export const createUserTypeSlice: StateCreator<
  UserTypeSlice,
  [],
  [],
  UserTypeSlice
> = (set) => ({
  activeUserType: UserType.BUYER,
  setActiveUserType: (activeUserType: UserType) =>
    set(() => ({ activeUserType })),
});
