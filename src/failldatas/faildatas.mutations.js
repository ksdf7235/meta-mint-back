import dayjs from "dayjs";
import client from "../client";

export const dbNow = () => dayjs().add(9, "hour").toDate();
export const dbZero = () => dayjs(0).toDate();

export default {
  Mutation: {
    createfaildata: async (_, { sol_address }) => {
      const findLog = await client.faildata.findUnique({
        where: { sol_address },
      });

      if (findLog) {
        await client.faildata.update({
          where: {
            sol_address,
          },
          data: {
            nft_amount: findLog.nft_amount + 1,
          },
        });

        return {
          ok: true,
          message: "amount increase",
        };
      }
      await client.faildata.create({
        data: {
          sol_address,
          nft_amount: 1,
        },
      });
      return {
        ok: true,
      };
    },
  },
};
