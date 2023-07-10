'use client';

/* Core */
import { Provider } from 'react-redux';

import { ApolloProvider } from '@apollo/client';
/* Instruments */
import { reduxStore } from '@/lib/redux';
import { apolloClient } from '@/graphql';

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <Provider store={reduxStore}>
      <ApolloProvider client={apolloClient}>{props.children}</ApolloProvider>
    </Provider>
  );
};
