import { gql } from "apollo-server";

export default gql`
  type Wallet {
    id: Int!
    publicKey: String!
    NFTs: [NFT]
  }

  type Query {
    getAllWallet: [Wallet]
    getWallet(publicKey: String!): Wallet
  }
  type Mutation {
    createWallet(publicKey: String!): MutationResponse
  }
`;
