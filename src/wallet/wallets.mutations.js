import dayjs from "dayjs";
import client from "../client";

export const dbNow = () => dayjs().add(9, "hour").toDate();
export const dbZero = () => dayjs(0).toDate();

export default {
  Mutation: {
    createWallet: async (_, { publicKey }) => {
      const preData = await client.wallet.findUnique({
        where: { publicKey },
      });
      if (preData) {
        return {
          ok: false,
          error: "Public Key has been",
        };
      }
      await client.wallet.create({
        data: {
          publicKey,
        },
      });
      return {
        ok: true,
      };
    },
  },
};
