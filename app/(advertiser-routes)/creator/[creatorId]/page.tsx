import { CreatorBanner } from "@/[creatorId]/creator-banner";
import { adSlots } from "@/__mock__";
import { Stack } from "@mui/material";
import { CreatorContent } from "./creator-content";
import { CreatorSummary } from "./creator-summary";

export async function generateStaticParams() {
  // TODO: Get all the creator IDs from the database
  const creators = [...adSlots];

  return creators.map((creator) => ({
    creatorId: creator.id,
  }));
}

interface ICreatorIdPage {
  params: {
    creatorId: string;
  };
}

const CreatorIdPage = async ({ params }: ICreatorIdPage) => {
  const { creatorId } = params;

  return (
    <Stack>
      <CreatorBanner creatorId={creatorId} />
      <CreatorSummary creatorId={creatorId} />
      <CreatorContent creatorId={creatorId} />
    </Stack>
  );
};

export default CreatorIdPage;
