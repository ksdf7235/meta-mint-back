import client from "../client";
export default {
  Query: {
    seongjulogs: () => client.seongjulog.findMany(),
    seongjulog: (_, { participantNameKr }) =>
      client.seongjulog.findUnique({ where: { participantNameKr } }),
  },
};
