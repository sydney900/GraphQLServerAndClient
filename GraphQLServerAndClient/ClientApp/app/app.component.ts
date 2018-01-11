import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const QueryClientAndProduct = gql`query queryClientAndProduct($clientId: String!, $prodId: String!) {
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery({
      query: QueryClientAndProduct,
      variables: {
        clientId: '1',
        prodId: '1'
      }
    })
    .valueChanges
    .subscribe(({ data }) => {
        console.log(data);
      });
  }  
}
