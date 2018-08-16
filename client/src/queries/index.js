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
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

/* USER QUERIES */
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      username
      _id
      email
    }
  }
`;

/* USER MUTATIONS */
