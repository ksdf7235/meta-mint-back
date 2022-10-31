import { gql } from "apollo-server";

export default gql`
  type testbulk {
    id: Int!
    discord_username: String
    sol_address: String!
    nft_amount: Int
  }
  type Query {
    getAllBulkData: [testbulk]
    getBulkData(sol_address: String!): testbulk
  }
  type Mutation {
    createBulkData(
      sol_address: String!
      nft_amount: Int!
      discord_username: String
    ): MutationResponse
    countBulkData(sol_address: String!): MutationResponse
  }
`;
