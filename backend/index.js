import { ApolloServer } from 'apollo-server';
import typeDefs from './typeDef/index.js';
import resolvers from './resolver/index.js';
import connection from './database/connection.js';

const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen({ port: 9000 })
  .then(({ url }) => {
    connection();
    console.log(`Server running at ${url}`)
  });