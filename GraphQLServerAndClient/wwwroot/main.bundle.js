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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h3>\r\n    Clients\r\n  </h3>\r\n</div>\r\n\r\n<ul *ngFor=\"let entry of clients | async | select: 'clients'\" calss=\"mdl-list\">\r\n  <li class=\"mdl-list__item\">{{entry.clientName}}</li>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_angular__ = __webpack_require__("../../../../apollo-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clientGraphql_gqlQueryClientAndProduct__ = __webpack_require__("../../../../../ClientApp/clientGraphql/gqlQueryClientAndProduct.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clientGraphql_gqlQueryClients__ = __webpack_require__("../../../../../ClientApp/clientGraphql/gqlQueryClients.ts");
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
    function AppComponent(apollo) {
        this.apollo = apollo;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.clients = this.apollo.watchQuery({
            query: __WEBPACK_IMPORTED_MODULE_3__clientGraphql_gqlQueryClients__["a" /* default */]
        }).valueChanges;
        this.apollo.watchQuery({
            query: __WEBPACK_IMPORTED_MODULE_2__clientGraphql_gqlQueryClientAndProduct__["a" /* default */],
            variables: {
                clientId: '1',
                prodId: '1'
            }
        }).valueChanges
            .subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../ClientApp/app/app.component.html"),
            styles: [__webpack_require__("../../../../../ClientApp/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_apollo_angular__["a" /* Apollo */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../ClientApp/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_apollo_angular__["b" /* ApolloModule */],
                __WEBPACK_IMPORTED_MODULE_4_apollo_angular_link_http__["b" /* HttpLinkModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_apollo_angular__["a" /* Apollo */],
            __WEBPACK_IMPORTED_MODULE_4_apollo_angular_link_http__["a" /* HttpLink */]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../ClientApp/clientGraphql/gqlQueryClientAndProduct.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("../../../../graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);

/* harmony default export */ __webpack_exports__["a"] = (_a = ["query queryClientAndProduct($clientId: String!, $prodId: String!) {\n      client(id: $clientId) {\n        clientName \n        products {\n          name\n        }\n      }, \n      product(id:$prodId) {\n        name\n      }\n    }\n"], _a.raw = ["query queryClientAndProduct($clientId: String!, $prodId: String!) {\n      client(id: $clientId) {\n        clientName \n        products {\n          name\n        }\n      }, \n      product(id:$prodId) {\n        name\n      }\n    }\n"], __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_a));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../ClientApp/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../ClientApp/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
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