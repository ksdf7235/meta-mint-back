import dayjs from "dayjs";
import client from "../client";

export const dbNow = () => dayjs().add(9, "hour").toDate();
export const dbZero = () => dayjs(0).toDate();

export default {
  Mutation: {
    updateWhitelist: async (
      _,
      {
        sol_address,
        email,
        nft_amount,
        nationality,
        discord_username,
        twitter_username,
      }
    ) => {
      const data = await client.metawhitelist.update({
        where: {
          sol_address,
        },
        data: {
          email,
          nft_amount,
          nationality,
          discord_username,
          twitter_username,
        },
      });
      return {
        ok: true,
      };
    },
    createWhitelist: async (
      _,
      {
        sol_address,
        email,
        nft_amount,
        nationality,
        discord_username,
        twitter_username,
      }
    ) => {
      await client.metawhitelist.create({
        data: {
          sol_address,
          email,
          nft_amount,
          nationality,
          discord_username,
          twitter_username,
        },
      });
      return {
        ok: true,
      };
    },
    updateWhitelistNft_Amount: async (_, { sol_address }) => {
      const data = await client.metawhitelist.findMany({
        where: { sol_address },
      });
      const nft = data[0].nft_amount - 1;
      const idx = data[0].id;

      await client.metawhitelist.update({
        where: {
          id: idx,
        },
        data: {
          nft_amount: nft,
        },
      });
      return {
        ok: true,
      };
    },
  },
};
