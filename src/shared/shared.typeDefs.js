import { gql } from "apollo-server";

export default gql`
  type MutationResponse {
    ok: Boolean!
    error: String
    errors: [String]
    message: String
  }
`;
