import { AdType, IAdSlot } from "@/types/ad-slots.types";
import { PricingType } from "@/types/pricing-types.types";

export const adSlots: IAdSlot[] = [
  {
    id: "J2hQzVFj9DAHX_wvKTU9Z6PmQOMd9XL84HKQjFUQ6Xp",
    seller_id: "Y5uoswBP4BBJH_sfRTE9Z4AjnoIh6ZH62HGOhFUU9Zo",
    title: "Tech Banner Ad",
    description: "Top banner ad on TechGuru website",
    ad_type: AdType.BANNER,
    ad_duration: 1209600,
    base_price_in_usd: 300,
    image_url: "https://placehold.co/600x400/FF5733/FFFFFF?text=BannerAd",
    pricing_type: PricingType.AUCTION,
    bidding_start_date: 1725195592, // September 1, 2024
    bidding_end_date: 1727701192, // September 30, 2024
    trading_start_date: 1727787592, // October 1, 2024
    trading_end_date: 1730379592, // October 31, 2024
    content_start_date: 1730465992, // November 1, 2024
    content_end_date: 1732971592, // November 30, 2024
  },
  {
    id: "K3hMwVFj8DAHX_wvKTU9Z6PmQOMd9XL84HKQjFUQ6Xp",
    seller_id: "Y5uoswBP4BBJH_sfRTE9Z4AjnoIh6ZH62HGOhFUU9Zo",
    title: "Tech Video Ad",
    description: "Pre-roll video ad on TechGuru YouTube channel",
    ad_type: AdType.VIDEO,
    ad_duration: 30,
    base_price_in_usd: 500,
    image_url: "https://placehold.co/600x400/FF5733/FFFFFF?text=VideoAd",
    pricing_type: PricingType.AUCTION,
    bidding_start_date: 1725195592, // September 1, 2024
    bidding_end_date: 1727701192, // September 30, 2024
    trading_start_date: 1727787592, // October 1, 2024
    trading_end_date: 1730379592, // October 31, 2024
    content_start_date: 1730465992, // November 1, 2024
    content_end_date: 1732971592, // November 30, 2024
  },
  {
    id: "L4hMzVFj7DAHX_wvKTU9Z6PmQOMd9XL84HKQjFUQ6Xp",
    seller_id: "Y5uoswBP4BBJH_sfRTE9Z4AjnoIh6ZH62HGOhFUU9Zo",
    title: "Tech Native Ad",
    description: "Sponsored content on TechGuru blog",
    ad_type: AdType.NATIVE,
    ad_duration: 0,
    base_price_in_usd: 400,
    image_url: "https://placehold.co/600x400/FF5733/FFFFFF?text=NativeAd",
    pricing_type: PricingType.AUCTION,
    bidding_start_date: 1725195592, // September 1, 2024
    bidding_end_date: 1727701192, // September 30, 2024
    trading_start_date: 1727787592, // October 1, 2024
    trading_end_date: 1730379592, // October 31, 2024
    content_start_date: 1730465992, // November 1, 2024
    content_end_date: 1732971592, // November 30, 2024
  },
  {
    id: "M5hNzVFj6DAHX_wvKTU9Z6PmQOMd9XL84HKQjFUQ6Xp",
    seller_id: "B8kOzWFPxNKKX_nvHTS6Y7PlkOHd9YL71HJQjEUU5Zm",
    title: "Gaming Banner Ad",
    description: "Top banner ad on GamingPro website",
    ad_type: AdType.BANNER,
    ad_duration: 1209600,
    base_price_in_usd: 350,
    image_url: "https://placehold.co/600x400/33FF57/FFFFFF?text=BannerAd",
    pricing_type: PricingType.FIXED,
    bidding_start_date: 0,
    bidding_end_date: 0,
    trading_start_date: 1727787592, // October 1, 2024
    trading_end_date: 1730379592, // October 31, 2024
    content_start_date: 1730465992, // November 1, 2024
    content_end_date: 1732971592, // November 30, 2024
  },
  {
    id: "N6hWzVFj5DAHX_wvKTU9Z6PmQOMd9XL84HKQjFUQ6Xp",
    seller_id: "B8kOzWFPxNKKX_nvHTS6Y7PlkOHd9YL71HJQjEUU5Zm",
    title: "Gaming Video Ad",
    description: "Pre-roll video ad on GamingPro YouTube channel",
    ad_type: AdType.VIDEO,
    ad_duration: 60,
    base_price_in_usd: 600,
    image_url: "https://placehold.co/600x400/33FF57/FFFFFF?text=VideoAd",
    pricing_type: PricingType.AUCTION,
    bidding_start_date: 1725195592, // September 1, 2024
    bidding_end_date: 1727701192, // September 30, 2024
    trading_start_date: 1727787592, // October 1, 2024
    trading_end_date: 1730379592, // October 31, 2024
    content_start_date: 1730465992, // November 1, 2024
    content_end_date: 1732971592, // November 30, 2024
  },
  {
    id: "O7hXzVFj4DAHX_wvKTU9Z6PmQOMd9XL84HKQjFUQ6Xp",
    seller_id: "B8kOzWFPxNKKX_nvHTS6Y7PlkOHd9YL71HJQjEUU5Zm",
    title: "Gaming Interstitial Ad",
    description: "Full-screen ad on GamingPro mobile app",
    ad_type: AdType.INTERSTITIAL,
    ad_duration: 15,
    base_price_in_usd: 450,
    image_url: "https://placehold.co/600x400/33FF57/FFFFFF?text=InterstitialAd",
    pricing_type: PricingType.FIXED,
    bidding_start_date: 0,
    bidding_end_date: 0,
    trading_start_date: 1727787592, // October 1, 2024
    trading_end_date: 1730379592, // October 31, 2024
    content_start_date: 1730465992, // November 1, 2024
    content_end_date: 1732971592, // November 30, 2024
  },
  {
    id: "P8hYzVFj3DAHX_wvKTU9Z6PmQOMd9XL84HKQjFUQ6Xp",
    seller_id: "R1gPzYFP6CCJX_svJTR5X3QlUPHd7TM65GFPlEUU9Yq",
    title: "Crypto Banner Ad",
    description: "Top banner ad on CryptoMaster website",
    ad_type: AdType.BANNER,
    ad_duration: 0,
    base_price_in_usd: 400,
    image_url: "https://placehold.co/600x400/5733FF/FFFFFF?text=BannerAd",
    pricing_type: PricingType.AUCTION,
    bidding_start_date: 1725195592, // September 1, 2024
    bidding_end_date: 1727701192, // September 30, 2024
    trading_start_date: 1727787592, // October 1, 2024
    trading_end_date: 1730379592, // October 31, 2024
    content_start_date: 1730465992, // November 1, 2024
    content_end_date: 1732971592, // November 30, 2024
  },
  {
    id: "Q9hZzVFj2DAHX_wvKTU9Z6PmQOMd9XL84HKQjFUQ6Xp",
    seller_id: "R1gPzYFP6CCJX_svJTR5X3QlUPHd7TM65GFPlEUU9Yq",
    title: "Crypto Video Ad",
    description: "Pre-roll video ad on CryptoMaster YouTube channel",
    ad_type: AdType.VIDEO,
    ad_duration: 45,
    base_price_in_usd: 700,
    image_url: "https://placehold.co/600x400/5733FF/FFFFFF?text=VideoAd",
    pricing_type: PricingType.AUCTION,
    bidding_start_date: 1725195592, // September 1, 2024
    bidding_end_date: 1727701192, // September 30, 2024
    trading_start_date: 1727787592, // October 1, 2024
    trading_end_date: 1730379592, // October 31, 2024
    content_start_date: 1730465992, // November 1, 2024
    content_end_date: 1732971592, // November 30, 2024
  },
  {
    id: "R1hAzVFj1DAHX_wvKTU9Z6PmQOMd9XL84HKQjFUQ6Xp",
    seller_id: "R1gPzYFP6CCJX_svJTR5X3QlUPHd7TM65GFPlEUU9Yq",
    title: "Crypto Native Ad",
    description: "Sponsored content on CryptoMaster blog",
    ad_type: AdType.NATIVE,
    ad_duration: 0,
    base_price_in_usd: 500,
    image_url: "https://placehold.co/600x400/5733FF/FFFFFF?text=NativeAd",
    pricing_type: PricingType.FIXED,
    bidding_start_date: 1715195592,
    bidding_end_date: 1717701192, // September 30, 2024
    trading_start_date: 1727787592, // October 1, 2024
    trading_end_date: 1730379592, // October 31, 2024
    content_start_date: 1730465992, // November 1, 2024
    content_end_date: 1732971592, // November 30, 2024
  },
  {
    id: "S2hBzVFj0DAHX_wvKTU9Z6PmQOMd9XL84HKQjFUQ6Xp",
    seller_id: "X9jMwTFT7AAHX_xvKTU9Z6PlrNQd8SL84JKQjGUU4Xr",
    title: "Casino Banner Ad",
    description: "Top banner ad on CasinoKing website",
    ad_type: AdType.BANNER,
    ad_duration: 0,
    base_price_in_usd: 500,
    image_url: "https://placehold.co/600x400/FF3357/FFFFFF?text=BannerAd",
    pricing_type: PricingType.AUCTION,
    bidding_start_date: 1725195592, // September 1, 2024
    bidding_end_date: 1727701192, // September 30, 2024
    trading_start_date: 1727787592, // October 1, 2024
    trading_end_date: 1730379592, // October 31, 2024
    content_start_date: 1730465992, // November 1, 2024
    content_end_date: 1732971592, // November 30, 2024
  },
  {
    id: "T3hCzVFj9DAHX_wvKTU9Z6PmQOMd9XL84HKQjFUQ6Xp",
    seller_id: "X9jMwTFT7AAHX_xvKTU9Z6PlrNQd8SL84JKQjGUU4Xr",
    title: "Casino Video Ad",
    description: "Pre-roll video ad on CasinoKing YouTube channel",
    ad_type: AdType.VIDEO,
    ad_duration: 60,
    base_price_in_usd: 1000,
    image_url: "https://placehold.co/600x400/FF3357/FFFFFF?text=VideoAd",
    pricing_type: PricingType.AUCTION,
    bidding_start_date: 1725195592, // September 1, 2024
    bidding_end_date: 1727701192, // September 30, 2024
    trading_start_date: 1727787592, // October 1, 2024
    trading_end_date: 1730379592, // October 31, 2024
    content_start_date: 1730465992, // November 1, 2024
    content_end_date: 1732971592, // November 30, 2024
  },
  {
    id: "U4hDzVFj8DAHX_wvKTU9Z6PmQOMd9XL84HKQjFUQ6Xp",
    seller_id: "X9jMwTFT7AAHX_xvKTU9Z6PlrNQd8SL84JKQjGUU4Xr",
    title: "Casino Interstitial Ad",
    description: "Full-screen ad on CasinoKing mobile app",
    ad_type: AdType.INTERSTITIAL,
    ad_duration: 20,
    base_price_in_usd: 800,
    image_url: "https://placehold.co/600x400/FF3357/FFFFFF?text=InterstitialAd",
    pricing_type: PricingType.AUCTION,
    bidding_start_date: 1725195592, // September 1, 2024
    bidding_end_date: 1727701192, // September 30, 2024
    trading_start_date: 1727787592, // October 1, 2024
    trading_end_date: 1730379592, // October 31, 2024
    content_start_date: 1730465992, // November 1, 2024
    content_end_date: 1732971592, // November 30, 2024
  },
  {
    id: "V5hEzVFj7DAHX_wvKTU9Z6PmQOMd9XL84HKQjFUQ6Xp",
    seller_id: "N2hRvZFT5BBIX_avJTV8Y9QmTPMd5TP93HMPkHUU7Yr",
    title: "Sports Banner Ad",
    description: "Top banner ad on SportsMania website",
    ad_type: AdType.BANNER,
    ad_duration: 0,
    base_price_in_usd: 450,
    image_url: "https://placehold.co/600x400/33C1FF/FFFFFF?text=BannerAd",
    pricing_type: PricingType.AUCTION,
    bidding_start_date: 1725195592, // September 1, 2024
    bidding_end_date: 1727701192, // September 30, 2024
    trading_start_date: 1727787592, // October 1, 2024
    trading_end_date: 1730379592, // October 31, 2024
    content_start_date: 1730465992, // November 1, 2024
    content_end_date: 1732971592, // November 30, 2024
  },
  {
    id: "W6hFzVFj6DAHX_wvKTU9Z6PmQOMd9XL84HKQjFUQ6Xp",
    seller_id: "N2hRvZFT5BBIX_avJTV8Y9QmTPMd5TP93HMPkHUU7Yr",
    title: "Sports Video Ad",
    description: "Pre-roll video ad on SportsMania YouTube channel",
    ad_type: AdType.VIDEO,
    ad_duration: 30,
    base_price_in_usd: 600,
    image_url: "https://placehold.co/600x400/33C1FF/FFFFFF?text=VideoAd",
    pricing_type: PricingType.FIXED,
    bidding_start_date: 0,
    bidding_end_date: 0,
    trading_start_date: 1727787592, // October 1, 2024
    trading_end_date: 1730379592, // October 31, 2024
    content_start_date: 1730465992, // November 1, 2024
    content_end_date: 1732971592, // November 30, 2024
  },
  {
    id: "X7hGzVFj5DAHX_wvKTU9Z6PmQOMd9XL84HKQjFUQ6Xp",
    seller_id: "N2hRvZFT5BBIX_avJTV8Y9QmTPMd5TP93HMPkHUU7Yr",
    title: "Sports Rewarded Ad",
    description: "Rewarded video ad on SportsMania mobile app",
    ad_type: AdType.REWARDED,
    ad_duration: 45,
    base_price_in_usd: 700,
    image_url: "https://placehold.co/600x400/33C1FF/FFFFFF?text=RewardedAd",
    pricing_type: PricingType.AUCTION,
    bidding_start_date: 1725195592, // September 1, 2024
    bidding_end_date: 1727701192, // September 30, 2024
    trading_start_date: 1727787592, // October 1, 2024
    trading_end_date: 1730379592, // October 31, 2024
    content_start_date: 1730465992, // November 1, 2024
    content_end_date: 1732971592, // November 30, 2024
  },
];
