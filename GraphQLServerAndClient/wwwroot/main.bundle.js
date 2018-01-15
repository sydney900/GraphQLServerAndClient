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

/***/ "../../../../../ClientApp/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mdl-button--fab {\r\n  height: 28px;\r\n  width: 28px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h3>\r\n    Clients\r\n  </h3>\r\n</div>\r\n\r\n<ul *ngFor=\"let entry of clients | async | select: 'clients'\" calss=\"mdl-list\">\r\n  <li class=\"mdl-list__item\">\r\n    <i class=\"material-icons\">person</i>\r\n    {{entry.clientName}}\r\n    <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--colored blue\" (click)=\"onDeleteClient(entry.id)\">\r\n      <i class=\"material-icons\">delete</i>\r\n    </button>\r\n  </li>\r\n</ul>\r\n<button class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--colored right blue\" (click)=\"onAddClient()\">\r\n  <i class=\"material-icons\">add</i>\r\n</button>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_angular__ = __webpack_require__("../../../../apollo-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("../../../../graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clientGraphql_gqlQueryClients__ = __webpack_require__("../../../../../ClientApp/clientGraphql/gqlQueryClients.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var mutation = (_a = ["\nmutation DeleteClient($id: ID) {\n  deleteClient(id: $id)\n}\n"], _a.raw = ["\nmutation DeleteClient($id: ID) {\n  deleteClient(id: $id)\n}\n"], __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_a));
var AppComponent = (function () {
    function AppComponent(apollo, router) {
        this.apollo = apollo;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.clients = this.apollo.watchQuery({
            query: __WEBPACK_IMPORTED_MODULE_4__clientGraphql_gqlQueryClients__["a" /* default */]
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
    AppComponent.prototype.onAddClient = function () {
        //navigate to creat client
        console.log("navigate to creat client");
        this.router.navigate(["/create-client"]);
    };
    AppComponent.prototype.onDeleteClient = function (id) {
        //delete the client
        console.log("delete the client");
        this.apollo.mutate({
            mutation: mutation,
            variables: {
                id: id
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../ClientApp/app/app.component.html"),
            styles: [__webpack_require__("../../../../../ClientApp/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_apollo_angular__["a" /* Apollo */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());

var _a;


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__clients_create_client_create_client_component__ = __webpack_require__("../../../../../ClientApp/app/clients/create-client/create-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../ClientApp/app/common/page-not-found/page-not-found.component.ts");
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
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */], data: { title: 'Clients List' } },
    { path: 'create-client', component: __WEBPACK_IMPORTED_MODULE_8__clients_create_client_create_client_component__["a" /* CreateClientComponent */] },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__common_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__clients_create_client_create_client_component__["a" /* CreateClientComponent */],
                __WEBPACK_IMPORTED_MODULE_9__common_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_apollo_angular__["b" /* ApolloModule */],
                __WEBPACK_IMPORTED_MODULE_4_apollo_angular_link_http__["b" /* HttpLinkModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/clients/create-client/create-client.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Create a new client</h3>\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/clients/create-client/create-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateClientComponent; });
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

var CreateClientComponent = (function () {
    function CreateClientComponent() {
    }
    CreateClientComponent.prototype.ngOnInit = function () {
    };
    CreateClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'create-client',
            template: __webpack_require__("../../../../../ClientApp/app/clients/create-client/create-client.component.html"),
            styles: [__webpack_require__("../../../../../ClientApp/app/clients/create-client/create-client.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../ClientApp/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../ClientApp/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map