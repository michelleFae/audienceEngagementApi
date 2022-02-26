/* This is the code we use to initialize the gateway and indicate which servers it should connect to.
You do not need to change anything here.
*/

import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

// Set the port number
const { PORT = 4000 } = process.env;

(async () => {
  // Initialize an ApolloGateway instance & include an array of services that it should connect to.
  const gateway = new ApolloGateway({
    serviceList: [
      { name: 'attendees_api', url: 'http://localhost:5001' },
      { name: 'events_api', url: 'http://localhost:5002' },
      { name: 'reviews_api', url: 'http://localhost:5003' },
    ],
  });

  // Pass the ApolloGateway to the ApolloServer constructor. We use a similar setup for vanilla Apollo GraphQL. See https://www.apollographql.com/docs/apollo-server/api/apollo-server/ for more information.
  const server = new ApolloServer({
    gateway,
    /* We disable subscriptions, since they are not supported by the "batteries-included" apollo-server package. 
    To enable subscriptions, you must first swap to the apollo-server-express package (or any other Apollo Server
      integration package that supports subscriptions). Read more here: https://www.apollographql.com/docs/apollo-server/data/subscriptions/ */
    subscriptions: false,
  });
  
  // Start the gateway
  server.listen({ port: PORT}).then(({ url }) => {
    console.log(`🎀 Gateway ready at ${url} 🏁`);
  });
})();