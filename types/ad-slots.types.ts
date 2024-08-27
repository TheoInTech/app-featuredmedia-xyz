import { PricingType } from "./pricing-types.types";

export enum AdType {
  BANNER = "Banner", // Banner ad is a rectangular graphic display that stretches across the top or bottom of a website or down the right or left sidebar.
  VIDEO = "Video", // Video ad is a video that is played either before, during, or after the video content is played.
  NATIVE = "Native", // Native ad is a type of ad that matches the form and function of the platform upon which it appears.
  INTERSTITIAL = "Interstitial", // Interstitial ad is a full-screen ad that covers the interface of their host application.
  REWARDED = "Rewarded", // Rewarded ad is a video ad that users have the option of watching in exchange for in-app rewards.
}

export enum AdStatus {
  BIDDING = "Bidding",
  TRADING = "Trading",
  CONTENT = "Content",
}

export interface IAdSlot {
  id: string;
  seller_id: string;
  title: string;
  description: string;
  ad_type: AdType;
  ad_duration: number; // in seconds; so before saving, convert it to seconds
  base_price_in_usd: number;
  image_url: string;
  pricing_type: PricingType;
  bidding_start_date: number; // timestamp
  bidding_end_date: number; // timestamp
  trading_start_date: number; // timestamp
  trading_end_date: number; // timestamp
  content_start_date: number; // timestamp
  content_end_date: number; // timestamp
}
