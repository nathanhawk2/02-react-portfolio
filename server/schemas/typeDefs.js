const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
  username: String
  email: String
  password: String
  }

  type Query {
    users: [User]!
    user: [User]!
  }

  type Mutation {
    createUser(name: String!): User
    updateUser(user: User!, password: String!): User
    deleteUser(user: ID!): User
    removeSkill(profileId: ID!, skill: String!): User
  }
`;

module.exports = typeDefs;