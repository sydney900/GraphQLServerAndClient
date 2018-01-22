import gql from 'graphql-tag';

export default gql`
mutation AddClient($clientName:String!, $clientPassword:String!, $email:String!) {
  addClient(clientName: $clientName, clientPassword:$clientPassword, email:$email) {
     id
     clientName
  }
}
`;
