import client from "../client";
export default {
  Query: {
    seongjues: () => client.seongju.findMany(),
    seongju: (_, { participantNameKr }) =>
      client.seongju.findUnique({ where: { participantNameKr } }),
  },
};
