import { SellerCategory } from "@/types/categories.types";
import {
  ISeller,
  ISellerAnalytics,
  SellerType,
} from "@/types/seller-types.types";

// Sellers Data
export const sellers: ISeller[] = [
  {
    id: "Y5uoswBP4BBJH_sfRTE9Z4AjnoIh6ZH62HGOhFUU9Zo",
    username: "TechGuru",
    bio: "Exploring the latest in technology and innovation.",
    image_url: "https://placehold.co/600x400/FF5733/FFFFFF?text=TechGuru",
    banner_url: "https://placehold.co/1200x300/FF5733/FFFFFF?text=TechBanner",
    twitter: "https://twitter.com/TechGuru",
    instagram: "https://instagram.com/TechGuru",
    links: ["https://techguru.com"],
    category: SellerCategory.WEB3,
    seller_type: SellerType.CREATOR,
  },
  {
    id: "B8kOzWFPxNKKX_nvHTS6Y7PlkOHd9YL71HJQjEUU5Zm",
    username: "GamingPro",
    bio: "Top-notch gaming tips and live streams.",
    image_url: "https://placehold.co/600x400/33FF57/FFFFFF?text=GamingPro",
    banner_url: "https://placehold.co/1200x300/33FF57/FFFFFF?text=GamingBanner",
    twitter: "https://twitter.com/GamingPro",
    instagram: "https://instagram.com/GamingPro",
    links: ["https://gamingpro.com"],
    category: SellerCategory.STREAMERS,
    seller_type: SellerType.CREATOR,
  },
  {
    id: "R1gPzYFP6CCJX_svJTR5X3QlUPHd7TM65GFPlEUU9Yq",
    username: "CryptoMaster",
    bio: "Your go-to source for cryptocurrency news and updates.",
    image_url: "https://placehold.co/600x400/5733FF/FFFFFF?text=CryptoMaster",
    banner_url: "https://placehold.co/1200x300/5733FF/FFFFFF?text=CryptoBanner",
    twitter: "https://twitter.com/CryptoMaster",
    instagram: "https://instagram.com/CryptoMaster",
    links: ["https://cryptomaster.com"],
    category: SellerCategory.FINTECH,
    seller_type: SellerType.MEDIA_NETWORK,
  },
  {
    id: "X9jMwTFT7AAHX_xvKTU9Z6PlrNQd8SL84JKQjGUU4Xr",
    username: "CasinoKing",
    bio: "The best casino games and live action.",
    image_url: "https://placehold.co/600x400/FF3357/FFFFFF?text=CasinoKing",
    banner_url: "https://placehold.co/1200x300/FF3357/FFFFFF?text=CasinoBanner",
    twitter: "https://twitter.com/CasinoKing",
    instagram: "https://instagram.com/CasinoKing",
    links: ["https://casinoking.com"],
    category: SellerCategory.CASINO,
    seller_type: SellerType.MEDIA_NETWORK,
  },
  {
    id: "N2hRvZFT5BBIX_avJTV8Y9QmTPMd5TP93HMPkHUU7Yr",
    username: "SportsMania",
    bio: "All the latest sports news and live coverage.",
    image_url: "https://placehold.co/600x400/33C1FF/FFFFFF?text=SportsMania",
    banner_url: "https://placehold.co/1200x300/33C1FF/FFFFFF?text=SportsBanner",
    twitter: "https://twitter.com/SportsMania",
    instagram: "https://instagram.com/SportsMania",
    links: ["https://sportsmania.com"],
    category: SellerCategory.SPORTS,
    seller_type: SellerType.CREATOR,
  },
];

// Seller Analytics Data
export const sellerAnalytics: ISellerAnalytics[] = [
  {
    id: "A1",
    seller_id: "Y5uoswBP4BBJH_sfRTE9Z4AjnoIh6ZH62HGOhFUU9Zo",
    views_daily: 15000,
    views_monthly: 450000,
    total_follower_count: 200000,
  },
  {
    id: "A2",
    seller_id: "B8kOzWFPxNKKX_nvHTS6Y7PlkOHd9YL71HJQjEUU5Zm",
    views_daily: 20000,
    views_monthly: 600000,
    total_follower_count: 300000,
  },
  {
    id: "A3",
    seller_id: "R1gPzYFP6CCJX_svJTR5X3QlUPHd7TM65GFPlEUU9Yq",
    views_daily: 12000,
    views_monthly: 360000,
    total_follower_count: 250000,
  },
  {
    id: "A4",
    seller_id: "X9jMwTFT7AAHX_xvKTU9Z6PlrNQd8SL84JKQjGUU4Xr",
    views_daily: 25000,
    views_monthly: 750000,
    total_follower_count: 400000,
  },
  {
    id: "A5",
    seller_id: "N2hRvZFT5BBIX_avJTV8Y9QmTPMd5TP93HMPkHUU7Yr",
    views_daily: 18000,
    views_monthly: 540000,
    total_follower_count: 280000,
  },
];
