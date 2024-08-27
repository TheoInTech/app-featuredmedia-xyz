import { ItemContent } from "@/[itemId]/item-content";
import { ItemWrapper } from "@/[itemId]/item-wrapper";
import { adSlots as mockAdSlots, sellers as mockSellers } from "@/__mock__";

export async function generateStaticParams() {
  // TODO: Get all the creator and ads from the database
  const adSlots = [...mockAdSlots];
  const sellers = [...mockSellers];

  const sellersMap = new Map(sellers.map((seller) => [seller.id, seller]));
  return adSlots.map((ad) => ({
    itemId: ad.id,
    creatorId: sellersMap.get(ad.seller_id)?.id,
  }));
}

interface IItemIdPage {
  params: {
    itemId: string;
    creatorId: string;
  };
}

const ItemIdPage = async ({ params }: IItemIdPage) => {
  const { creatorId, itemId } = params;

  return (
    <ItemWrapper creatorId={creatorId} itemId={itemId}>
      <ItemContent />
    </ItemWrapper>
  );
};

export default ItemIdPage;
