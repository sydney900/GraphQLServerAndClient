import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Client } from '../../models/client';
import gqlAddClient from '../../../clientGraphql/gqlAddClient';
import gqlGetAllClients from '../../../clientGraphql/gqlQueryClients';


@Component({
  selector: 'create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  clientForm: FormGroup;
  //clientName: String;
  //clientPassword: String;
  //email: String;
  client: Client;

  constructor(private fb: FormBuilder, private apollo: Apollo, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.client = new Client(null, "", "", "");

    this.clientForm = new FormGroup({
      clientName: new FormControl("", {
        validators: Validators.required,
        updateOn: 'submit'
      }),
      clientPassword: new FormControl("", {
        validators: [Validators.required, Validators.min(5)],
        updateOn: 'submit'
      }),
      email: new FormControl("", {
        validators: Validators.email,
        updateOn: 'submit'
      })
    });

    this.clientForm.valueChanges.subscribe(f => {
      this.client.clientName = f.clientName;
      this.client.clientPassword = f.clientPassword;
      this.client.email = f.email;
    });
  }

  onSubmit(fClient) {
    this.apollo.mutate({
      mutation: gqlAddClient,
      refetchQueries: [{ query: gqlGetAllClients }],
      variables: {
        clientName: fClient.clientName,
        clientPassword: fClient.clientPassword,
        email: fClient.email
      }
    })
      .subscribe(({ data }) => {
        //console.log('Created client: ', data);
        //then navigate to main
        this.router.navigate(["/main"]);
      }, (error) => {
        console.log('there was an error creating client', error);
      });
  }
}
