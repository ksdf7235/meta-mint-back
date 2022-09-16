import client from "../client";
export default {
  Query: {
    whitelists: () => client.metawhitelist.findMany(),
    whitelist: (_, { sol_address }) =>
      client.metawhitelist.findUnique({ where: { sol_address } }),
    verifywhitelist: async (_, { sol_address }) => {
      const data = await client.metawhitelist.findUnique({
        where: { sol_address },
      });

      if (data) {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
          error: "not allow mintingpage",
        };
      }
    },
  },
};
