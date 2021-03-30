import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query findAll {
    findAllUsers {
      _id
      email
      password
    }
  }
`;
