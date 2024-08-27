export enum PricingType {
  AUCTION = "Auction",
  FIXED = "Fixed Price",
}

export const TERMS = {
  [PricingType.AUCTION]: {
    tabLabel: "Live & Upcoming Auctions",
  },
  [PricingType.FIXED]: {
    tabLabel: "Fixed Pricing",
  },
};
