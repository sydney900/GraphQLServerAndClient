import gql from 'graphql-tag';

export default gql`query queryClientAndProduct($clientId: String!, $prodId: String!) {
      client(id: $clientId) {
        clientName 
        products {
          name
        }
      }, 
      product(id:$prodId) {
        name
      }
    }
`;

