import { gql } from '@apollo/client';

export const ALL_MOVIES = gql`
query GetMovies {
    getMovies {
      id
      name
      producer
      rating
    }
  }
`;