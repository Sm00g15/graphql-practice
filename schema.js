exports.typeDefs = `
type Project {
    _id: ID
    name: String!
    category: String!
    description: String!
}

type User {
    _id: ID
    username: String!
    password: String!
    email:  String!
    projects: [Project]
}

type Query {
    getAllProjects: [Project]
    getCurrentUser: User
}

type Token {
    token: String!
}

type Mutation {
    addProject(name: String!, category: String!, description: String!): Project
    signupUser(username: String!, email: String!, password: String!): Token
    signinUser(username: String!, password: String!): Token
}
`;
