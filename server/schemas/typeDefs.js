const { gql } = require('apollo-server-express');

const typeDefs = gql`
    
    type Book {
        authors: [String]
        description: String
        bookID: String!
        image: String
        link: String
        title: String!
    }

    type User {
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Query {
        me: User
    }

    type Auth {
        token: ID!
        user: User
    }

    input savedBook {
        bookId: String
        authors: [String]
        description: String 
        image: String
        link: String
        title: String
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: savedBook!): User
        removeBook(bookId: ID!); User
    }
`;

module.exports = typeDefs;
