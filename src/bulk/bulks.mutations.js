import dayjs from "dayjs";
import client from "../client";

export const dbNow = () => dayjs().add(9, "hour").toDate();
export const dbZero = () => dayjs(0).toDate();

export default {
  Mutation: {
    createBulkData: async (
      _,
      { sol_address, discord_username, nft_amount }
    ) => {
      await client.testbulk.create({
        data: {
          sol_address,
          discord_username,
          nft_amount,
        },
      });
      return {
        ok: true,
      };
    },
    countBulkData: async (_, { sol_address }) => {
      const preData = await client.testbulk.findUnique({
        where: { sol_address },
      });
      if (!preData) {
        return {
          ok: false,
          error: "Not Found User",
        };
      } else if (preData.nft_amount === 0) {
        return {
          ok: false,
          error: "NFT Amount is 0",
        };
      }
      await client.testbulk.update({
        where: {
          sol_address,
        },
        data: {
          nft_amount: preData.nft_amount - 1,
        },
      });

      return {
        ok: true,
      };
    },
  },
};
