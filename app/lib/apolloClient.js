import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Replace this with your WordPress site's GraphQL endpoint
const GRAPHQL_ENDPOINT = "https://testguru.autotracker24.com/graphql";

let client;

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: GRAPHQL_ENDPOINT,
    }),
    cache: new InMemoryCache(),
  });
}

export function getClient() {
  if (!client) {
    client = createApolloClient();
  }
  return client;
}