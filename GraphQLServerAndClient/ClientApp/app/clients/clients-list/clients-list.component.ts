import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import QueryClientAndProduct from '../../../clientGraphql/gqlQueryClientAndProduct';
import gqlGetAllClients from '../../../clientGraphql/gqlQueryClients';
import gqlDeleteClient from '../../../clientGraphql/gqlDeleteClient';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients: Observable<any>;

  constructor(private apollo: Apollo, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.clients = this.apollo.watchQuery({
      query: gqlGetAllClients
    }).valueChanges;

    //this.apollo.watchQuery({
    //  query: QueryClientAndProduct,
    //  variables: {
    //    clientId: '1',
    //    prodId: '1'
    //  }
    //}).valueChanges
    //  .subscribe(({ data }) => {
    //    console.log(data);
    //  });

  }

  onAddClient() {
    //navigate to creat client
    console.log("navigate to creat client");

    this.router.navigate(["/create-client"]);
  }

  onDeleteClient(id) {
    //delete the client
    console.log("delete the client");

    this.apollo.mutate({
      mutation: gqlDeleteClient,
      refetchQueries: [{ query: gqlGetAllClients }],
      variables: {
        id: id
      }
    }).subscribe(({ data }) => {
        console.log('Deleted client: ', data);
    }, (error) => {
      console.log('there was an error deleting client', error);
    });;
  }

}
