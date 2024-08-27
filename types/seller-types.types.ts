import { SellerCategory } from "@/types/categories.types";

export enum SellerType {
  ALL,
  CREATOR,
  MEDIA_NETWORK,
}

export const TERMS = {
  [SellerType.ALL]: {
    tabLabel: "All",
  },
  [SellerType.CREATOR]: {
    tabLabel: "Creators",
  },
  [SellerType.MEDIA_NETWORK]: {
    tabLabel: "Media Network",
  },
};

export interface ISeller {
  id: string;
  username: string;
  bio: string;
  image_url: string;
  banner_url: string;
  twitter: string;
  instagram: string;
  links: string[];
  category: SellerCategory;
  seller_type: SellerType;
}

export interface ISellerAnalytics {
  id: string;
  seller_id: string;
  views_daily: number;
  views_monthly: number;
  total_follower_count: number;
}

export type ISellerCard = ISeller & ISellerAnalytics;
