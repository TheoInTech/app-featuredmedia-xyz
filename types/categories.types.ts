export enum SellerCategory {
  STREAMERS = "Streamers",
  SPORTS = "Sports",
  FINTECH = "Fintech",
  WEB3 = "Web3",
  CASINO = "Casino",
}

interface ICategory {
  title: string;
  colored: string;
}

export const CATEGORIES: ICategory[] = [
  {
    title: SellerCategory.STREAMERS,
    colored: "/assets/categories/streamers.png",
  },
  {
    title: SellerCategory.SPORTS,
    colored: "/assets/categories/streamers.png",
  },
  {
    title: SellerCategory.FINTECH,
    colored: "/assets/categories/streamers.png",
  },
  {
    title: SellerCategory.WEB3,
    colored: "/assets/categories/streamers.png",
  },
  {
    title: SellerCategory.CASINO,
    colored: "/assets/categories/streamers.png",
  },
];
