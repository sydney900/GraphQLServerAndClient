import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateClientComponent } from './clients/create-client/create-client.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'main', component: AppComponent, data: { title: 'Clients List' } },
  { path: 'create-client', component: CreateClientComponent },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // provides HttpClient for HttpLink
    ApolloModule,
    HttpLinkModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      // By default, this client will send queries to the
      // `/graphql` endpoint on the same host
      link: httpLink.create({ uri: 'http://localhost:62001/graphql/' }),
      cache: new InMemoryCache()
    });
  }  
}
