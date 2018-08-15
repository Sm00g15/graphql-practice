import { gql } from "apollo-boost";

/* PROJECTS QUERIES */
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

/* PROFILE MUTATIONS */
export const SIGNUP_USER = gql`
mutation($username: String!, $email: String!, $password: String!){
  signupUser(username:) {
    token
  }
}
`;

/* USER QUERIES */

/* USER MUTATIONS */
