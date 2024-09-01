export const PATH = {
  // Creators
  creatorHub: "/creator-hub",
  creatorHubDashboard: "/creator-hub/dashboard",
  creatorHubListings: "/creator-hub/listings",
  creatorHubPoints: "/creator-hub/points",
  creatorHubPayouts: "/creator-hub/payouts",
  creatorHubAccountDetails: "/creator-hub/account-details",
  creatorHubSocials: "/creator-hub/socials",
  creatorHubSecurity: "/creator-hub/security",
  creatorHubListingsItem: "/creator-hub/listings/item/[itemId]",
  creatorHubListingsItemPost:
    "/creator-hub/listings/item/[itemId]/post/[postId]",

  // Advertisers
  marketplace: "/",
  topCreators: "/top-creators",
  creatorId: "/creator/[creatorId]",
  creatorIdAnalytics: "/creator/[creatorId]/analytics",
  creatorItem: "/creator/[creatorId]/item/[itemId]",
  creatorItemPost: "/creator/[creatorId]/item/[itemId]/post/[postId]",
};

export const replacePathKeys = (
  path: string,
  params: { [key: string]: string }
) => {
  let replacedPath = path;
  Object.keys(params).forEach((key) => {
    replacedPath = replacedPath.replace(`[${key}]`, params[key]);
  });
  return replacedPath;
};
