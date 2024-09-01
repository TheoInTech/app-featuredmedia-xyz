import { sellers } from "@/__mock__";
import { OutlineButton } from "@/components";
import { PATH, replacePathKeys } from "@/constants/paths";
import { Stack } from "@mui/material";
import Link from "next/link";

export async function generateStaticParams() {
  // TODO: Get all the creator IDs from the database
  const creators = [...sellers];

  return creators.map((creator) => ({
    creatorId: creator.id,
  }));
}

interface IItemPage {
  params: {
    creatorId: string;
  };
}

// This page cannot be accessed directly, it's a pass-through for the creator ID page
const ItemPage = ({ params }: IItemPage) => {
  const { creatorId } = params;

  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        rowGap: "16px",
      }}
    >
      Oops, you shouldn&apos;t be here.
      <Link href={replacePathKeys(PATH.creatorId, { creatorId })}>
        <OutlineButton>Go to creator page</OutlineButton>
      </Link>
    </Stack>
  );
};

export default ItemPage;
