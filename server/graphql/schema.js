// schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Name {
        id: ID!
        name: String!
    }

    type Query {
        getNames: [Name]
    }

    type Mutation {
        addName(name: String!): Name
    }
`;

module.exports = typeDefs;
