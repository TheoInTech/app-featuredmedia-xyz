export enum UserType {
  BUYER,
  SELLER,
}

export const TERMS = {
  [UserType.BUYER]: {
    tabLabel: "Ad Manager",
  },
  [UserType.SELLER]: {
    tabLabel: "Creator Hub",
  },
};
