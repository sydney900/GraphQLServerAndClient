import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs/Observable';

import Client from '../models/client';
import QueryClientAndProduct from '../clientGraphql/gqlQueryClientAndProduct';
import QueryClients from '../clientGraphql/gqlQueryClients';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  clients: Observable<any>;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.clients = this.apollo.watchQuery({
      query: QueryClients
    }).valueChanges;

    this.apollo.watchQuery({
      query: QueryClientAndProduct,
      variables: {
        clientId: '1',
        prodId: '1'
      }
    }).valueChanges
      .subscribe(({ data }) => {
        console.log(data);
      });
  }
}
