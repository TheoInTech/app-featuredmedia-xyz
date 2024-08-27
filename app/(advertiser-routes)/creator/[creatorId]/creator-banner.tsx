"use client";

import { useStore } from "@/store";
import Image from "next/image";

export const CreatorBanner = () => {
  const { creator } = useStore();

  return (
    <Image
      src={creator?.banner_url ?? "https://loremflickr.com/g/1440/362/paris"}
      alt="banner"
      width={1440}
      height={362}
      style={{
        objectFit: "cover",
        objectPosition: "center",
        width: "100%",
        height: 240,
      }}
      priority
    />
  );
};
