import { gql } from "apollo-server";

export default gql`
  type faildata {
    id: Int!
    sol_address: String!
    nft_amount: Int
  }
  type faildataResponse {
    ok: Boolean
    error: String
    faildata: faildata
    faildatas: [faildata]
  }
  type Query {
    getAllfaildata: [faildata]
    getfaildata(sol_address: String!): faildata
  }
  type Mutation {
    createfaildata(sol_address: String!): MutationResponse
    faildata(sol_address: String!): MutationResponse
  }
`;
