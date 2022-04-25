/** 
 * This is the code we use to initialize the Events Server.
 * You do not need to change anything here.
*/

import { ApolloServer } from 'apollo-server';
const { buildSubgraphSchema } = require('@apollo/subgraph');

import resolvers from "./resolvers";
import typeDefs from './schema'; 

// Set port number
const { PORT = 5002 } = process.env;

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  debug: false,
  introspection: true
});


// Start the server
server.listen({port: PORT}).then(({ url }) => {
    console.log(`🎀 Events server ready at ${url} 🎫🎉`);
});