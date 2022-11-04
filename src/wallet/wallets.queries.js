import client from "../client";

export default {
  Query: {
    getAllWallet: async () => await client.wallet.findMany(),
    getWallet: async (_, { publicKey }) =>
      client.wallet.findUnique({ where: { publicKey } }),
  },
};
