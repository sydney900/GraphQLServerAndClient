import gql from 'graphql-tag';

export default gql`
mutation DeleteClient($id: Int!) {
  deleteClient(id: $id) {
    id
  }
}`;
