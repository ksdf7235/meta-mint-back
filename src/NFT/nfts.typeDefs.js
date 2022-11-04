import { gql } from "apollo-server";

export default gql`
  type NFT {
    id: Int!
    wallet: Wallet!
    sol_address: String!
    nft_amount: Int
  }
  type seeNFTsResult {
    ok: Boolean!
    error: String
    NFTData: NFT
    NFTDatas: [NFT]
  }
  type Query {
    getALLNFTs: [NFT]
    getPubKeyNFTs(publicKey: String!): seeNFTsResult
    getNFT(sol_address: String!): NFT
    getPubKeyNFT(sol_address: String!, publicKey: String!): seeNFTsResult
  }
  type Mutation {
    uploadNFT(sol_address: String!, publicKey: String!): MutationResponse
    uploadManyNFTs(sol_address: [String], publicKey: String!): MutationResponse
    discountNFT(sol_address: String!, publicKey: String!): MutationResponse
    deleteNFT(sol_address: String!, publicKey: String!): MutationResponse
  }
`;
