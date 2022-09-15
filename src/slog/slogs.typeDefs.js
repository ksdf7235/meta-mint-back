import { gql } from "apollo-server";

export default gql`
  type seongjulog {
    id: Int!
    url: String!
    hostNameEng: String!
    hostNameKr: String!
    participantNameKr: String!
    createdDateMil: String!
    createdDate: String!
    enteredDate: String!
    exitedDate: String!
  }
  type Query {
    seongjulogs: [seongjulog]
    seongjulog(participantNameKr: String!): seongjulog
  }
  type Mutation {
    createSeongjulog(
      hostNameEng: String
      hostNameKr: String
      participantNameEng: String
      participantNameKr: String
    ): MutationResponse!
    deleteSeongjulog(id: Int!): seongjulog
    ExitLog(
      participantNameKr: String
      hostNameEng: String
      hostNameKr: String
      enteredDate: String
    ): MutationResponse!
    EnterLog(
      participantNameKr: String
      hostNameEng: String
      hostNameKr: String
    ): MutationResponse!
    StackExitLog(
      number: Int!
      hostNameEng: String
      hostNameKr: String
      participantNameKr: String
    ): MutationResponse!
    StackEnterLog(
      number: Int!
      hostNameEng: String
      hostNameKr: String
      participantNameKr: String
    ): MutationResponse!
  }
`;
