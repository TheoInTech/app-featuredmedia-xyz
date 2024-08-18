export const PATH = {
  marketplace: "/",

  // Creators
  // creatorHub: "/creator-hub",
  creatorHubDashboard: "/creator-hub/dashboard",
  creatorHubProfile: "/creator-hub/profile",
  creatorHubListings: "/creator-hub/listings",
  creatorHubListingsItem: "/creator-hub/listings/item/[itemId]",
  creatorHubListingsItemPost:
    "/creator-hub/listings/item/[itemId]/post/[postId]",
  creatorHubPoints: "/creator-hub/points",

  // Advertisers
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
