import client from "../client";
export default {
  Query: {
    whitelists: () => client.metawhitelist.findMany(),
    whitelist: (_, { sol_address }) =>
      client.metawhitelist.findMany({ where: { sol_address } }),
  },
};
