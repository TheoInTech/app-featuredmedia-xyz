import Image from "next/image";

interface ICreatorBanner {
  creatorId: string;
}

export const CreatorBanner = ({ creatorId }: ICreatorBanner) => {
  return (
    <Image
      src="https://loremflickr.com/g/1440/362/paris"
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
