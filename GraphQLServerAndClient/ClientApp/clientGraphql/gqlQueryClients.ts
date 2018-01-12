import gql from 'graphql-tag';

export default gql`{
  clients {
    id
    clientName
    clientPassWord
    email
  }
}`;
