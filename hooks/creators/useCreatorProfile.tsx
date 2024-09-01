import useConfig from "@/hooks/useConfig";
import { useToast } from "@/providers/toast-provider";
import { ICreatorProfile } from "@/schema/creator.schema";
import { ProcessResponse } from "@/types/process.types";
import { createDataItemSigner, message, result } from "@permaweb/aoconnect";
import { useQuery } from "@tanstack/react-query";

const useCreatorProfile = () => {
  const { processDB } = useConfig();
  const { showToast } = useToast();

  const {
    data: creatorProfile,
    isLoading: isLoadingCreatorProfile,
    refetch: refetchCreatorProfile,
    isRefetching: isRefetchingCreatorProfile,
  } = useQuery({
    queryKey: [`creator-profile`],
    queryFn: fetchCreatorProfile,
    enabled: !!window.arweaveWallet,
    refetchInterval: false,
  });

  // const {
  //   data: creatorProfile,
  //   isPending: isLoadingCreatorProfile,
  //   mutateAsync,
  // } = useMutation({
  //   mutationFn: fetchCreatorProfile,
  //   onError: (error) =>
  //     showToast("error", true, "Fetch Creator Profile Error", error.message),
  //   onSuccess: async (data) => {
  //     console.log("success data:", data);
  //   },
  // });

  async function fetchCreatorProfile() {
    const messageId = await message({
      process: processDB,
      signer: createDataItemSigner(window.arweaveWallet),
      tags: [{ name: "Action", value: "Fetch-Creator-Profile" }],
      data: JSON.stringify({
        walletAddress: window.arweaveWallet,
      }),
    });

    const response = await result({
      message: messageId,
      process: processDB,
    }).then((res) => JSON.parse(res.Messages[0].Data) as ProcessResponse);

    if (!response.success) {
      showToast(
        "error",
        true,
        "Fetch Creator Profile Failed",
        response.message
      );
      throw new Error(response.message);
    }

    showToast(
      "success",
      true,
      "Fetch Creator Profile Success",
      response.message
    );
    return response;
  }

  const onSignUp = async (data: ICreatorProfile) => {
    const messageId = await message({
      process: processDB,
      signer: createDataItemSigner(window.arweaveWallet),
      tags: [{ name: "Action", value: "Create-Creator-Profile" }],
      data: JSON.stringify(data),
    });

    const response = await result({
      message: messageId,
      process: processDB,
    }).then((res) => JSON.parse(res.Messages[0].Data) as ProcessResponse);

    if (!response.success) {
      alert(response.message);
      throw new Error(response.message);
    }

    return response;
  };

  // useEffect(() => {
  //   (async () => {
  //     await mutateAsync();
  //   })();
  // }, []);

  return {
    // states
    creatorProfile,
    isLoadingCreatorProfile,
    refetchCreatorProfile,
    isRefetchingCreatorProfile,

    // handlers
    onSignUp,
    // mutateAsync,
  };
};

export default useCreatorProfile;
