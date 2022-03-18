import { gql } from 'apollo-server';

const typeDefs = gql`
type Movie {
    id: ID!
    name: String!
    producer: String!
    rating: String!
  }
  type Query {
    getMovies: [Movie]
    getMovie(id: ID!): Movie
  }
  type Mutation {
    addMovie(name: String!, producer: String!, rating: String!): Movie
    updateMovie(id: ID!, name: String!, producer: String!, rating: String!): Movie
    deleteMovie(id: ID!): Movie
  }
`;

export default typeDefs;