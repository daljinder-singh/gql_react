import { gql } from '@apollo/client';

export const ADD_MOVIES = gql`
mutation AddMovie($name: String!, $producer: String!, $rating: String!) {
  addMovie(name: $name, producer: $producer, rating: $rating) {
    id
    name
    producer
    rating
  }
}
`;