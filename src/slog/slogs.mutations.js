import dayjs from "dayjs";
import client from "../client";

export const dbNow = () => dayjs().add(9, "hour").toDate();
export const dbZero = () => dayjs(0).toDate();

export default {
  Mutation: {
    createSeongjulog: async (
      _,
      { hostNameEng, hostNameKr, participantNameKr }
    ) => {
      if (participantNameKr || hostNameEng || hostNameKr) {
        await client.seongjulog.create({
          data: {
            url: `http://meet.sj.go.kr/${hostNameEng ? hostNameEng : "anon"}`,
            hostNameEng: hostNameEng ? hostNameEng : "anon",
            hostNameKr: hostNameKr ? hostNameKr : "anon",
            participantNameKr: participantNameKr ? participantNameKr : `Anon`,
          },
        });
        return {
          ok: true,
          message: `make user -${dbNow()})`,
        };
      } else if (participantNameKr && participantNameKr != "Anon") {
        await client.seongjulog.update({
          where: {
            participantNameKr,
          },
          data: {
            url: `http://meet.sj.go.kr/${hostNameEng}`,
            hostNameEng,
            hostNameKr,
            participantNameKr,
          },
        });
        return {
          ok: true,
          message: `update user ${participantNameKr} ${dbNow()}`,
        };
      } else {
        return {
          ok: false,
          error: "it can`t work",
        };
      }
    },
    deleteSeongjulog: (_, { id }) =>
      client.seongjulog.delete({ where: { id } }),
    ExitLog: async (
      _,
      { participantNameKr, hostNameEng, hostNameKr, enteredDate }
    ) => {
      const seongjudata = await client.seongju.findUnique({
        where: { participantNameKr },
      });
      if (seongjudata) {
        await client.seongjulog.create({
          data: {
            url: `http://meet.sj.go.kr/${hostNameEng ? hostNameEng : "anon"}`,
            hostNameEng: hostNameEng ? hostNameEng : "anon",
            hostNameKr: hostNameKr ? hostNameKr : "anon",
            participantNameKr: participantNameKr ? participantNameKr : `anon`,
            exitedDate: dbNow(),
            enteredDate: enteredDate ? enteredDate : dbNow(),
          },
        });
        return {
          ok: true,
          message: "Exit log is successfully created",
        };
      } else {
        return {
          ok: false,
          message: "Exit log is not created",
        };
      }
    },
    EnterLog: async (_, { participantNameKr, hostNameEng, hostNameKr }) => {
      if (participantNameKr) {
        await client.seongjulog.create({
          data: {
            url: `http://meet.sj.go.kr/${hostNameEng ? hostNameEng : "anon"}`,
            hostNameEng: hostNameEng ? hostNameEng : "anon",
            hostNameKr: hostNameKr ? hostNameKr : "anon",
            participantNameKr: participantNameKr ? participantNameKr : `Anon`,
            exitedDate: dbZero(),
            enteredDate: dbNow(),
          },
        });
        return {
          ok: true,
          message: "Enter log is successfully created",
        };
      } else {
        return {
          ok: false,
          message: "Enter log is not created",
        };
      }
    },
    StackExitLog: async (
      _,
      { number, hostNameEng, hostNameKr, participantNameKr }
    ) => {
      for (var i = 2; i <= number; i++) {
        await client.seongjulog.create({
          data: {
            url: `https://meet.sj.go.kr/${
              hostNameEng ? hostNameEng : "gyeongsan3ri"
            }`,
            hostNameEng: hostNameEng ? hostNameEng : "gyeongsan3ri",
            hostNameKr: hostNameKr ? hostNameKr : "경산3리",
            participantNameKr: participantNameKr
              ? participantNameKr
              : `실험${i}`,
            exitedDate: dbZero(),
            enteredDate: dbNow(),
          },
        });
      }
      return {
        ok: true,
        message: `${number} Exit log created`,
      };
    },
    StackEnterLog: async (
      _,
      { number, hostNameEng, hostNameKr, participantNameKr }
    ) => {
      for (var i = 2; i <= number; i++) {
        await client.seongjulog.create({
          data: {
            url: `https://meet.sj.go.kr/${
              hostNameEng ? hostNameEng : "gyeongsan3ri"
            }`,
            hostNameEng: hostNameEng ? hostNameEng : "gyeongsan3ri",
            hostNameKr: hostNameKr ? hostNameKr : "경산3리",
            participantNameKr: participantNameKr
              ? participantNameKr
              : `test ${i}`,
            exitedDate: dbZero(),
            enteredDate: dbNow(),
          },
        });
      }
      return {
        ok: true,
        message: `${number} Enter log created`,
      };
    },
  },
};
