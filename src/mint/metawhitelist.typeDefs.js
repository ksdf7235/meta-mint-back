import { gql } from "apollo-server";

export default gql`
  type metawhitelist {
    id: Int!
    email: String
    sol_address: String!
    nft_amount: Int
    nationality: String
    discord_username: String
    twitter_username: String
  }
  type Query {
    whitelists: [metawhitelist]
    whitelist(sol_address: String!): [metawhitelist]
  }
  type Mutation {
    updateWhitelist(
      sol_address: String!
      email: String
      nft_amount: Int
      nationality: String
      discord_username: String
      twitter_username: String
    ): MutationResponse
    createWhitelist(
      sol_address: String!
      email: String
      nft_amount: Int
      nationality: String
      discord_username: String
      twitter_username: String
    ): MutationResponse
    updateWhitelistNft_Amount(sol_address: String!): MutationResponse
  }
`;
