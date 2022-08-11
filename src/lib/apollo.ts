import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl6p2qupo1hyf01t94vc0fid9/master',
  cache: new InMemoryCache()
});