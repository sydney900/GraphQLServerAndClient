webpackJsonp(["main"],{

/***/ "../../../../../ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../ClientApp/app/Clients/clients-list/clients-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card-title {\r\n  width: 100%;\r\n}\r\n\r\nmat-card-header > button {\r\n  float: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/Clients/clients-list/clients-list.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"text-align:center\">\r\n  <h3>\r\n    Clients\r\n  </h3>\r\n</div>\r\n\r\n<mat-list>\r\n  <mat-card *ngFor=\"let entry of clients | async | select: 'clients'\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar>\r\n        <i class=\"material-icons\">person</i>\r\n      </div>\r\n      <mat-card-title>{{entry.clientName}}</mat-card-title>\r\n      <button mat-mini-fab (click)=\"onDeleteClient(entry.id)\" color=\"primary\">\r\n        <mat-icon>delete</mat-icon>\r\n      </button>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <div>\r\n        Email: <span> {{entry.email}} </span>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</mat-list>\r\n<div layout-algin=\"end center\">\r\n  <button (click)=\"onAddClient()\" mat-mini-fab>\r\n    <mat-icon>add</mat-icon>\r\n  </button>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/Clients/clients-list/clients-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_angular__ = __webpack_require__("../../../../apollo-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clientGraphql_gqlQueryClients__ = __webpack_require__("../../../../../ClientApp/clientGraphql/gqlQueryClients.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clientGraphql_gqlDeleteClient__ = __webpack_require__("../../../../../ClientApp/clientGraphql/gqlDeleteClient.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientsListComponent = (function () {
    function ClientsListComponent(apollo, router, route) {
        this.apollo = apollo;
        this.router = router;
        this.route = route;
    }
    ClientsListComponent.prototype.ngOnInit = function () {
        this.clients = this.apollo.watchQuery({
            query: __WEBPACK_IMPORTED_MODULE_3__clientGraphql_gqlQueryClients__["a" /* default */]
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
    };
    ClientsListComponent.prototype.onAddClient = function () {
        //navigate to creat client
        console.log("navigate to creat client");
        this.router.navigate(["/create-client"]);
    };
    ClientsListComponent.prototype.onDeleteClient = function (id) {
        //delete the client
        console.log("delete the client");
        this.apollo.mutate({
            mutation: __WEBPACK_IMPORTED_MODULE_4__clientGraphql_gqlDeleteClient__["a" /* default */],
            refetchQueries: [{ query: __WEBPACK_IMPORTED_MODULE_3__clientGraphql_gqlQueryClients__["a" /* default */] }],
            variables: {
                id: id
            }
        }).subscribe(function (_a) {
            var data = _a.data;
            console.log('Deleted client: ', data);
        }, function (error) {
            console.log('there was an error deleting client', error);
        });
        ;
    };
    ClientsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clients-list',
            template: __webpack_require__("../../../../../ClientApp/app/Clients/clients-list/clients-list.component.html"),
            styles: [__webpack_require__("../../../../../ClientApp/app/Clients/clients-list/clients-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_apollo_angular__["a" /* Apollo */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ClientsListComponent);
    return ClientsListComponent;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../ClientApp/app/app.component.html"),
            styles: [__webpack_require__("../../../../../ClientApp/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_angular__ = __webpack_require__("../../../../apollo-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_angular_link_http__ = __webpack_require__("../../../../apollo-angular-link-http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_apollo_cache_inmemory__ = __webpack_require__("../../../../apollo-cache-inmemory/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mat_module__ = __webpack_require__("../../../../../ClientApp/app/mat.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__clients_create_client_create_client_component__ = __webpack_require__("../../../../../ClientApp/app/clients/create-client/create-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../ClientApp/app/common/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Clients_clients_list_clients_list_component__ = __webpack_require__("../../../../../ClientApp/app/Clients/clients-list/clients-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var appRoutes = [
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_13__Clients_clients_list_clients_list_component__["a" /* ClientsListComponent */], data: { title: 'Clients List' } },
    { path: 'create-client', component: __WEBPACK_IMPORTED_MODULE_11__clients_create_client_create_client_component__["a" /* CreateClientComponent */] },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_12__common_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule(apollo, httpLink) {
        apollo.create({
            // By default, this client will send queries to the
            // `/graphql` endpoint on the same host
            link: httpLink.create({ uri: 'http://localhost:62001/graphql/' }),
            cache: new __WEBPACK_IMPORTED_MODULE_5_apollo_cache_inmemory__["a" /* InMemoryCache */]()
        });
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__clients_create_client_create_client_component__["a" /* CreateClientComponent */],
                __WEBPACK_IMPORTED_MODULE_12__common_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_13__Clients_clients_list_clients_list_component__["a" /* ClientsListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_apollo_angular__["b" /* ApolloModule */],
                __WEBPACK_IMPORTED_MODULE_4_apollo_angular_link_http__["b" /* HttpLinkModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__mat_module__["a" /* MaterialModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_apollo_angular__["a" /* Apollo */],
            __WEBPACK_IMPORTED_MODULE_4_apollo_angular_link_http__["a" /* HttpLink */]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/clients/create-client/create-client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clientform {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n  .clientform > * {\r\n    width: 100%;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/clients/create-client/create-client.component.html":
/***/ (function(module, exports) {

module.exports = "<form  class=\"clientform\" [formGroup]=\"clientForm\" (ngSubmit)=\"onSubmit(clientForm.value)\">\r\n\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Client Name\" formControlName=\"clientName\">\r\n    <mat-error *ngIf=\"clientForm.get('clientName')?.invalid\">Client name is required</mat-error>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Client Password\" formControlName=\"clientPassword\" min=\"5\">\r\n    <mat-error *ngIf=\"clientForm.get('clientPassword')?.invalid\">Please input at least 5 characters</mat-error>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Enter your email\" formControlName=\"email\" required>\r\n    <mat-error *ngIf=\"clientForm.get('email')?.invalid\">Please input correct email</mat-error>\r\n  </mat-form-field>\r\n\r\n  <input type=\"submit\" value=\"Create\" />\r\n\r\n</form>\r\n\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/clients/create-client/create-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_angular__ = __webpack_require__("../../../../apollo-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_client__ = __webpack_require__("../../../../../ClientApp/app/models/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clientGraphql_gqlAddClient__ = __webpack_require__("../../../../../ClientApp/clientGraphql/gqlAddClient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clientGraphql_gqlQueryClients__ = __webpack_require__("../../../../../ClientApp/clientGraphql/gqlQueryClients.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateClientComponent = (function () {
    function CreateClientComponent(fb, apollo, router, route) {
        this.fb = fb;
        this.apollo = apollo;
        this.router = router;
        this.route = route;
    }
    CreateClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.client = new __WEBPACK_IMPORTED_MODULE_4__models_client__["a" /* Client */](null, "", "", "");
        this.clientForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]({
            clientName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]("", {
                validators: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required,
                updateOn: 'submit'
            }),
            clientPassword: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]("", {
                validators: [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].min(5)],
                updateOn: 'submit'
            }),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]("", {
                validators: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].email,
                updateOn: 'submit'
            })
        });
        this.clientForm.valueChanges.subscribe(function (f) {
            _this.client.clientName = f.clientName;
            _this.client.clientPassword = f.clientPassword;
            _this.client.email = f.email;
        });
    };
    CreateClientComponent.prototype.onSubmit = function (fClient) {
        var _this = this;
        this.apollo.mutate({
            mutation: __WEBPACK_IMPORTED_MODULE_5__clientGraphql_gqlAddClient__["a" /* default */],
            refetchQueries: [{ query: __WEBPACK_IMPORTED_MODULE_6__clientGraphql_gqlQueryClients__["a" /* default */] }],
            variables: {
                clientName: fClient.clientName,
                clientPassword: fClient.clientPassword,
                email: fClient.email
            }
        })
            .subscribe(function (_a) {
            var data = _a.data;
            //console.log('Created client: ', data);
            //then navigate to main
            _this.router.navigate(["/main"]);
        }, function (error) {
            console.log('there was an error creating client', error);
        });
    };
    CreateClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'create-client',
            template: __webpack_require__("../../../../../ClientApp/app/clients/create-client/create-client.component.html"),
            styles: [__webpack_require__("../../../../../ClientApp/app/clients/create-client/create-client.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_apollo_angular__["a" /* Apollo */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], CreateClientComponent);
    return CreateClientComponent;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/common/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/common/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  The page you are look for are not found!\n</p>\n"

/***/ }),

/***/ "../../../../../ClientApp/app/common/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../ClientApp/app/common/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../ClientApp/app/common/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/mat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/models/client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
var Client = (function () {
    function Client(id, clientName, clientPassword, email) {
        this.id = id;
        this.clientName = clientName;
        this.clientPassword = clientPassword;
        this.email = email;
    }
    return Client;
}());



/***/ }),

/***/ "../../../../../ClientApp/clientGraphql/gqlAddClient.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("../../../../graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);

/* harmony default export */ __webpack_exports__["a"] = (_a = ["\nmutation AddClient($clientName:String!, $clientPassword:String!, $email:String!) {\n  addClient(clientName: $clientName, clientPassword:$clientPassword, email:$email) {\n     id\n     clientName\n  }\n}\n"], _a.raw = ["\nmutation AddClient($clientName:String!, $clientPassword:String!, $email:String!) {\n  addClient(clientName: $clientName, clientPassword:$clientPassword, email:$email) {\n     id\n     clientName\n  }\n}\n"], __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_a));
var _a;


/***/ }),

/***/ "../../../../../ClientApp/clientGraphql/gqlDeleteClient.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("../../../../graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);

/* harmony default export */ __webpack_exports__["a"] = (_a = ["\nmutation DeleteClient($id: Int!) {\n  deleteClient(id: $id) {\n    id\n  }\n}"], _a.raw = ["\nmutation DeleteClient($id: Int!) {\n  deleteClient(id: $id) {\n    id\n  }\n}"], __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_a));
var _a;


/***/ }),

/***/ "../../../../../ClientApp/clientGraphql/gqlQueryClients.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("../../../../graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);

/* harmony default export */ __webpack_exports__["a"] = (_a = ["{\n  clients {\n    id\n    clientName\n    clientPassWord\n    email\n  }\n}"], _a.raw = ["{\n  clients {\n    id\n    clientName\n    clientPassWord\n    email\n  }\n}"], __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_a));
var _a;


/***/ }),

/***/ "../../../../../ClientApp/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../ClientApp/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../ClientApp/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../ClientApp/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map