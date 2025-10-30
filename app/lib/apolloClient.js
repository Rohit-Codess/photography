import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Replace this with your WordPress site's GraphQL endpoint
const GRAPHQL_ENDPOINT = "https://testguru.autotracker24.com/graphql";

let client;

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: GRAPHQL_ENDPOINT,
      fetchOptions: {
        // Add timeout and retry options
        timeout: 30000, // 30 seconds timeout
      },
    }),
    cache: new InMemoryCache(),
    // Disable SSR caching to avoid build-time issues
    ssrMode: typeof window === 'undefined',
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    },
  });
}

export function getClient() {
  if (!client) {
    client = createApolloClient();
  }
  return client;
}