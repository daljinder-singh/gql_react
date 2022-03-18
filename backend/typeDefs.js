import { gql } from 'apollo-server';

const typeDefs = gql`
type Movie {
    id: ID!
    name: String!
    producer: String!
    rating: Float!
  }
  type Query {
    getMovies: [Movie]
    getMovie(id: ID!): Movie
  }
  type Mutation {
    addMovie(name: String!, producer: String!, rating: Float!): Movie
    updateMovie(id: ID!, name: String!, producer: String!, rating: Float!): Movie
    deleteMovie(id: ID!): Movie
  }
`;

export default typeDefs;