const {
  gql
} = require('apollo-server-express');

// The GraphQL schema
const typeDefs = gql`
    scalar DateTime
    
    type UserData {
        token: String,
        user: User
    }
    type User {
        id: ID,
        name: String
    }
    type Movie {
        title: String
        year: Int
        rating: Int
        scoutbase_rating: Float
        actors: [Actor]
    }
    type Actor {
        name: String
        birthday: DateTime
        country: String
        directors: [Director]
    }
    type Director {
        name: String
        birthday: DateTime
        country: String
    }

    type Query {  
        movies: [Movie]
    }
    type Mutation {        
        createUser(username: String, password: String): UserData
        login(username: String, password: String): UserData
    }
`;

export default typeDefs;
