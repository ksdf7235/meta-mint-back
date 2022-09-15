import dayjs from "dayjs";
import client from "../client";

export const dbNow = () => dayjs().add(9, "hour").toDate();

export default {
  Mutation: {
    createSeongju: async (
      _,
      { hostNameEng, hostNameKr, participantNameEng, participantNameKr }
    ) => {
      const data = await client.seongju.create({
        data: {
          url: `http://meet.sj.go.kr/${hostNameEng}`,
          hostNameEng,
          hostNameKr,
          participantNameEng,
          participantNameKr,
        },
      });
      return {
        ok: true,
      };
    },
    deleteSeongju: (_, { id }) => client.seongju.delete({ where: { id } }),
    updateSeongju: async (
      _,
      { id, hostNameEng, hostNameKr, participantNameEng, participantNameKr }
    ) => {
      await client.seongju.update({
        where: { id },
        data: {
          hostNameEng,
          hostNameKr,
          participantNameEng,
          participantNameKr,
        },
      });
      return {
        ok: true,
      };
    },
    ExitTime: async (_, { participantNameKr }) => {
      if (participantNameKr) {
        await client.seongju.update({
          where: { participantNameKr },
          data: {
            exitedDate: dbNow(),
          },
        });
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
          error: `Name is empty`,
        };
      }
    },
    EnterTime: async (_, { participantNameKr, hostNameEng, hostNameKr }) => {
      if (participantNameKr) {
        await client.seongju.update({
          where: { participantNameKr },
          data: {
            url: `https://meet.sj.go.kr/${hostNameEng}`,
            hostNameEng: hostNameEng,
            hostNameKr: hostNameKr,
            enteredDate: dbNow(),
          },
        });
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
          error: `Name is empty`,
        };
      }
    },
    StackExitTime: async (_, { number }) => {
      for (var i = 2; i <= number; i++) {
        const data = await client.seongju.findFirst({ where: { id: i } });
        if (!data) {
          return {
            ok: false,
            error: `${i} is not found.`,
          };
        }
        await client.seongju.update({
          where: { id: i },
          data: {
            exitedDate: dbNow(),
          },
        });
      }
      return {
        ok: true,
      };
    },
    StackEnterTime: async (_, { number, hostNameEng, hostNameKr }) => {
      for (var i = 2; i <= number; i++) {
        const data = await client.seongju.findFirst({ where: { id: i } });
        if (!data) {
          return {
            ok: false,
            error: `${i} is not found.`,
          };
        }
        await client.seongju.update({
          where: { id: i },
          data: {
            url: `https://meet.sj.go.kr/${
              hostNameEng ? hostNameEng : "gyeongsan3ri"
            }`,
            hostNameEng: hostNameEng ? hostNameEng : "gyeongsan3ri",
            hostNameKr: hostNameKr ? hostNameKr : "경산3리",
            enteredDate: dbNow(),
          },
        });
      }
      return {
        ok: true,
      };
    },
  },
};
