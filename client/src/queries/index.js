import { gql } from "apollo-boost";

export const GET_ALL_PROJECTS = gql`
  query {
    getAllProjects {
      _id
      name
      category
      description
    }
  }
`;
