/* This is the code we use to initialize the gateway and indicate which servers it should connect to.
You do not need to change anything here.
*/

import { ApolloServer } from 'apollo-server';
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';

// Set the port number
const { PORT = 4000 } = process.env;

(async () => {
  // Initialize an ApolloGateway instance & include an array of subgraphs that it should connect to.
  const gateway = new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
      subgraphs: [
        { name: 'attendeesApi', url: 'http://localhost:5001' },
        { name: 'eventsApi', url: 'http://localhost:5002' },
        { name: 'reviewsApi', url: 'http://localhost:5003' },
      ],
    })
  });

  // Pass the ApolloGateway to the ApolloServer constructor. We use a similar setup for vanilla Apollo GraphQL. See https://www.apollographql.com/docs/apollo-server/api/apollo-server/ for more information.
  const server = new ApolloServer({
    gateway
  });
  
  // Start the gateway
  server.listen({ port: PORT}).then(({ url }) => {
    console.log(`🎀 Gateway ready at ${url} 🏁`);
  });
})();