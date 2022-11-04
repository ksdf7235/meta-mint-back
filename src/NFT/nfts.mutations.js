import dayjs from "dayjs";
import client from "../client";

export const dbNow = () => dayjs().add(9, "hour").toDate();
export const dbZero = () => dayjs(0).toDate();

export default {
  Mutation: {
    uploadNFT: async (_, { sol_address, publicKey }) => {
      const Pubkey = await client.wallet.findUnique({
        where: { publicKey },
      });
      const Nft = await client.nft.findUnique({
        where: { sol_address },
      });
      if (Nft) {
        return {
          ok: false,
          error: "NFT already exists",
        };
      }
      if (!Pubkey) {
        return {
          ok: false,
          error: "Wallet Not Found",
        };
      }
      await client.nft.create({
        data: {
          sol_address,
          wallet: {
            connect: {
              id: Pubkey.id,
            },
          },
          nft_amount: 1,
        },
      });

      return {
        ok: true,
      };
    },
    uploadManyNFTs: async (_, { sol_address, publicKey }) => {
      let errorLog = [];
      const Pubkey = await client.wallet.findUnique({
        where: { publicKey },
      });

      if (sol_address.length === 0) {
        return {
          ok: false,
          error: "nft is empty",
        };
      }
      if (!Pubkey) {
        return {
          ok: false,
          error: "Wallet Not Found",
        };
      }
      const result = await sol_address.map(async (data) => {
        const Nft = await client.nft.findUnique({
          where: { sol_address: data },
        });
        if (Nft) {
          errorLog.push(`NFT(${data}) already exists`);
          return errorLog;
        } else {
          await client.nft.create({
            data: {
              sol_address: data,
              wallet: {
                connect: {
                  id: Pubkey.id,
                },
              },
              nft_amount: 1,
            },
          });
        }
        return errorLog;
      });
      console.log(JSON.stringify(result));
      return {
        ok: true,
        errors: errorLog,
      };
    },
    discountNFT: async (_, { sol_address, publicKey }) => {
      const verPubkey = await client.wallet.findUnique({
        where: { publicKey },
      });
      const verNftAddr = await client.nft.findUnique({
        where: { sol_address },
      });
      if (!verNftAddr) {
        return {
          ok: false,
          error: "NFT Not Found",
        };
      }
      if (!verPubkey) {
        return {
          ok: false,
          error: "Wallet Not Found",
        };
      }
      if (verPubkey.id !== verNftAddr.walletId) {
        return {
          ok: false,
          error: "It is not yours",
        };
      }
      if (verNftAddr.nft_amount === 0) {
        return {
          ok: false,
          error: "NFT is Empty",
        };
      }
      await client.nft.update({
        where: {
          sol_address,
        },
        data: {
          nft_amount: 0,
        },
      });
      return {
        ok: true,
      };
    },
    deleteNFT: async (_, { sol_address, publicKey }) => {
      const verPubkey = await client.wallet.findUnique({
        where: { publicKey },
      });
      const verNftAddr = await client.nft.findUnique({
        where: { sol_address },
      });
      if (!verNftAddr) {
        return {
          ok: false,
          error: "NFT Not Found",
        };
      }
      if (!verPubkey) {
        return {
          ok: false,
          error: "Wallet Not Found",
        };
      }
      if (verPubkey.id !== verNftAddr.walletId) {
        return {
          ok: false,
          error: "It is not yours",
        };
      }

      await client.nft.delete({
        where: {
          sol_address,
        },
      });
      return {
        ok: true,
      };
    },
  },
};
