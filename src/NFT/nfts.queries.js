import client from "../client";

export default {
  Query: {
    getALLNFTs: async () => await client.nft.findMany(),
    getNFT: async (_, { sol_address }) =>
      client.nft.findUnique({ where: { sol_address } }),
    getPubKeyNFTs: async (_, { publicKey }) => {
      const findId = await client.wallet.findUnique({ where: { publicKey } });
      if (!findId) {
        return {
          ok: false,
          error: "wallet Not Found",
        };
      }
      return await {
        ok: true,
        NFTDatas: client.nft.findMany({ where: { walletId: findId.id } }),
      };
    },
    getPubKeyNFT: async (_, { sol_address, publicKey }) => {
      const findId = await client.wallet.findUnique({ where: { publicKey } });
      if (!findId) {
        return {
          ok: false,
          error: "wallet not found",
        };
      }
      const NFTData = await client.nft.findFirst({
        where: { walletId: findId.id, sol_address },
      });

      console.log(NFTData);
      if (!NFTData) {
        return {
          ok: false,
          error: "Nft not found",
        };
      }

      return {
        ok: true,
        NFTData,
      };
    },
  },
};
