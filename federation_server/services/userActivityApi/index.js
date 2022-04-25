/** 
 * This is the code we use to initialize the User Activity Server.
 * 
*/

import { ApolloServer } from 'apollo-server';

import resolvers from "./resolvers";
import typeDefs from './schema'; 

const { buildSubgraphSchema } = require('@apollo/subgraph');

// Set port number
const { PORT = 5003 } = process.env;

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers, introspection: true }]),
  debug: false,
  nodeEnv: "production", 
  introspection: true
});

// Start the server
server.listen({port: PORT}).then(({ url }) => {
    console.log(`🎀 User Activity server ready at ${url} ✔️⭐`);
});