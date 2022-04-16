/* This is the code we use to initialize the gateway and indicate which servers it should connect to.
You do not need to change anything here.
*/

import { ApolloServer } from 'apollo-server';
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';
import depthLimit from 'graphql-depth-limit'
// Set the port number
const { PORT = 5000 } = process.env;

(async () => {
  // Initialize an ApolloGateway instance & include an array of subgraphs that it should connect to.
  const gateway = new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
      subgraphs: [
        { name: 'usersApi', url: 'http://localhost:5001' },
        { name: 'eventsApi', url: 'http://localhost:5002' },
        { name: 'userActivityApi', url: 'http://localhost:5003' },
      ],
    })
  });

  // Pass the ApolloGateway to the ApolloServer constructor. We use a similar setup for vanilla Apollo GraphQL. See https://www.apollographql.com/docs/apollo-server/api/apollo-server/ for more information.
  const server = new ApolloServer({
    gateway,
    debug: false,
    introspection: true,
    validationRules: [depthLimit(7)]
  });

  
  // Start the gateway
  server.listen({ port: PORT}).then(({ url }) => {
    console.log(`🎀 Gateway ready at ${url} 🏁`);
  });
})();