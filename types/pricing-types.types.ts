export enum PricingType {
  AUCTION,
  FIXED,
}

export const TERMS = {
  [PricingType.AUCTION]: {
    tabLabel: "Live & Upcoming Auctions",
  },
  [PricingType.FIXED]: {
    tabLabel: "Fixed Pricing",
  },
};
