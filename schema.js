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
}

type Query {
    getAllProjects: [Project]
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
