import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'http://localhost/graphql',
  cache: new InMemoryCache(),
});
