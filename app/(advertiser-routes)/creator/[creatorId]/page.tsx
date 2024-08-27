import { CreatorBanner } from "@/[creatorId]/creator-banner";
import { CreatorContent } from "@/[creatorId]/creator-content";
import { CreatorSummary } from "@/[creatorId]/creator-summary";
import { CreatorWrapper } from "@/[creatorId]/creator-wrapper";
import { sellers } from "@/__mock__";

export async function generateStaticParams() {
  // TODO: Get all the creator IDs from the database
  const creators = [...sellers];

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
    <CreatorWrapper creatorId={creatorId}>
      <CreatorBanner />
      <CreatorSummary />
      <CreatorContent />
    </CreatorWrapper>
  );
};

export default CreatorIdPage;
