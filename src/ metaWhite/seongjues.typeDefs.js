import { gql } from "apollo-server";

export default gql`
  type seongju {
    id: Int!
    url: String!
    hostNameEng: String!
    hostNameKr: String!
    participantNameKr: String!
    participantNameEng: String!
    createdDateMil: String!
    createdDate: String!
    enteredDate: String!
    exitedDate: String!
  }
  type Query {
    seongjues: [seongju]
    seongju(participantNameKr: String!): seongju
  }
  type Mutation {
    createSeongju(
      hostNameEng: String
      hostNameKr: String
      participantNameEng: String
      participantNameKr: String!
    ): MutationResponse!
    deleteSeongju(id: Int!): seongju
    updateSeongju(
      id: Int!
      hostNameEng: String
      hostNameKr: String
      participantNameEng: String
      participantNameKr: String
    ): MutationResponse!
    ExitTime(participantNameKr: String!): MutationResponse!
    EnterTime(
      participantNameKr: String!
      hostNameEng: String
      hostNameKr: String
    ): MutationResponse!
    StackExitTime(number: Int!): MutationResponse!
    StackEnterTime(
      number: Int!
      hostNameEng: String
      hostNameKr: String
    ): MutationResponse!
  }
`;
