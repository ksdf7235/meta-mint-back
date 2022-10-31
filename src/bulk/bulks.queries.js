import client from "../client";

export default {
  Query: {
    getAllBulkData: async () => await client.testbulk.findMany(),
    getBulkData: async (_, { sol_address }) =>
      client.testbulk.findUnique({ where: { sol_address } }),
  },
};
