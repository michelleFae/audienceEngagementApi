/** 
 * This is the code we use to initialize the Users Server.
*/

import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';
import typeDefs from './schema'; 

const { buildSubgraphSchema } = require('@apollo/subgraph');

// Set port number
const { PORT = 5001 } = process.env;


const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers, introspection: true}),
  debug: false,
  introspection: true
});

// Start the server
server.listen({port: PORT}).then(({ url }) => {
    console.log(`🎀 Users server ready at ${url} 👩‍💻🧑‍💻`);
});