import client from "../client";

export default {
  Query: {
    getAllfaildata: async () => await client.faildata.findMany(),
    getfaildata: async (_, { sol_address }) =>
      client.faildata.findUnique({ where: { sol_address } }),
  },
};
