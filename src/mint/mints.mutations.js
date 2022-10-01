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
      const data = await client.metawhitelist.findUnique({
        where: { sol_address },
      });
      console.log(data.nft_amount);

      if (data.nft_amount >= 0) {
        const nft = data.nft_amount - 1;
        const idx = data.id;

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
      } else {
        return {
          ok: false,
          error: "it can`t be",
        };
      }
    },
  },
};
