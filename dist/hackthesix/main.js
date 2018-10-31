(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _user_selection_user_selection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-selection/user-selection.component */ "./src/app/user-selection/user-selection.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _linkedin_card_linkedin_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linkedin-card/linkedin-card.component */ "./src/app/linkedin-card/linkedin-card.component.ts");
/* harmony import */ var _github_card_github_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./github-card/github-card.component */ "./src/app/github-card/github-card.component.ts");
/* harmony import */ var _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chatbox/chatbox.component */ "./src/app/chatbox/chatbox.component.ts");
/* harmony import */ var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-profile/update-profile.component */ "./src/app/update-profile/update-profile.component.ts");
/* harmony import */ var _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./check-in/check-in.component */ "./src/app/check-in/check-in.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] },
    { path: 'selection', component: _user_selection_user_selection_component__WEBPACK_IMPORTED_MODULE_3__["UserSelectionComponent"] },
    { path: 'messaging', component: _user_selection_user_selection_component__WEBPACK_IMPORTED_MODULE_3__["UserSelectionComponent"] },
    { path: 'signup', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
    { path: 'linkedin', component: _linkedin_card_linkedin_card_component__WEBPACK_IMPORTED_MODULE_5__["LinkedinCardComponent"] },
    { path: 'github', component: _github_card_github_card_component__WEBPACK_IMPORTED_MODULE_6__["GithubCardComponent"] },
    { path: 'chat', component: _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_7__["ChatboxComponent"] },
    { path: 'updateProfile', component: _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_8__["UpdateProfileComponent"] },
    { path: 'checkin', component: _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_9__["CheckInComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hackthesix';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _user_selection_user_selection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-selection/user-selection.component */ "./src/app/user-selection/user-selection.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _linkedin_card_linkedin_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./linkedin-card/linkedin-card.component */ "./src/app/linkedin-card/linkedin-card.component.ts");
/* harmony import */ var _career_prospect_form_career_prospect_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./career-prospect-form/career-prospect-form.component */ "./src/app/career-prospect-form/career-prospect-form.component.ts");
/* harmony import */ var _github_card_github_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./github-card/github-card.component */ "./src/app/github-card/github-card.component.ts");
/* harmony import */ var _events_page_events_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./events-page/events-page.component */ "./src/app/events-page/events-page.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chatbox/chatbox.component */ "./src/app/chatbox/chatbox.component.ts");
/* harmony import */ var _chat_nofification_chat_nofification_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chat-nofification/chat-nofification.component */ "./src/app/chat-nofification/chat-nofification.component.ts");
/* harmony import */ var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./update-profile/update-profile.component */ "./src/app/update-profile/update-profile.component.ts");
/* harmony import */ var _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./check-in/check-in.component */ "./src/app/check-in/check-in.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
                _user_selection_user_selection_component__WEBPACK_IMPORTED_MODULE_5__["UserSelectionComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"],
                _linkedin_card_linkedin_card_component__WEBPACK_IMPORTED_MODULE_9__["LinkedinCardComponent"],
                _career_prospect_form_career_prospect_form_component__WEBPACK_IMPORTED_MODULE_10__["CareerProspectFormComponent"],
                _github_card_github_card_component__WEBPACK_IMPORTED_MODULE_11__["GithubCardComponent"],
                _events_page_events_page_component__WEBPACK_IMPORTED_MODULE_12__["EventsPageComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_13__["LogoutComponent"],
                _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_14__["ChatboxComponent"],
                _chat_nofification_chat_nofification_component__WEBPACK_IMPORTED_MODULE_15__["ChatNofificationComponent"],
                _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_16__["UpdateProfileComponent"],
                _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_17__["CheckInComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCDIcRRXY6G6-5Mh-bWt66U3NzH_Vx5GIw'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/career-prospect-form/career-prospect-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/career-prospect-form/career-prospect-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#submit {\r\n    border: none;\r\n    outline: 0;\r\n    display: inline-block;\r\n    padding: 8px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 20%;\r\n    font-size: 18px;\r\n  }\r\n\r\n#textField{\r\n    margin-top: 8px;\r\n    margin-bottom: 10px;\r\n    padding: 3px;\r\n    padding-left: 8px;\r\n    padding-right: 8px;\r\n}\r\n\r\n#submit:hover {\r\n    opacity: 0.7;\r\n}\r\n  "

/***/ }),

/***/ "./src/app/career-prospect-form/career-prospect-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/career-prospect-form/career-prospect-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\r\n\r\n<div style=\"font-family: 'Lato'\">\r\n  <form ngNativeValidate name=\"position\" (submit)=\"onSubmit(event)\" required>\r\n    What is your career prospect?\r\n    <br/>\r\n    <div class=\"form-group\">\r\n      <input id=\"text\" class=\"form-control\" type=\"text\" name=\"fname\" style=\"width:50%;display: inline-block;\" required>\r\n      <br/> What is your LinkedIn Profile username?\r\n      <br/>\r\n\r\n      <input id=\"text\" class=\"form-control\" type=\"text\" name=\"linkedinName\" style=\"width:50%;display: inline-block;\" required>\r\n      <br/>\r\n      <input id=\"submit\" class=\"form-control\" type=\"submit\" value=\"Submit\" style=\"width:50%; text-align:center;display: inline-block;\" />\r\n    </div>\r\n  </form>\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/career-prospect-form/career-prospect-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/career-prospect-form/career-prospect-form.component.ts ***!
  \************************************************************************/
/*! exports provided: CareerProspectFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerProspectFormComponent", function() { return CareerProspectFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CareerProspectFormComponent = /** @class */ (function () {
    // @Output() messageEvent = new EventEmitter<string>();
    function CareerProspectFormComponent() {
        this.latitude = 0;
        this.longitude = 0;
    }
    CareerProspectFormComponent.prototype.handlFormSubmission = function (empForm, event) {
        event.preventDefault();
    };
    CareerProspectFormComponent.prototype.onSubmit = function (e) {
        debugger;
        var self = this;
        var position = document.forms["position"]["fname"].value;
        var linkedinProfileName = document.forms["position"]["linkedinName"].value;
        var payload = {
            position: position,
            long: self.longitude,
            lat: self.latitude,
            career: position,
            linkedinProfileName: linkedinProfileName
        };
        console.log(payload);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/addLocationAndCareer', true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                window.location.replace("/selection");
            }
            if (this.readyState == 4 && this.status != 200) {
                debugger;
                console.log(xhr.responseText);
                window.location.replace("/signup");
            }
        };
        xhr.send(JSON.stringify(payload));
        return false;
    };
    CareerProspectFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CareerProspectFormComponent.prototype, "latitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CareerProspectFormComponent.prototype, "longitude", void 0);
    CareerProspectFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-career-prospect-form',
            template: __webpack_require__(/*! ./career-prospect-form.component.html */ "./src/app/career-prospect-form/career-prospect-form.component.html"),
            styles: [__webpack_require__(/*! ./career-prospect-form.component.css */ "./src/app/career-prospect-form/career-prospect-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CareerProspectFormComponent);
    return CareerProspectFormComponent;
}());



/***/ }),

/***/ "./src/app/central-socket.service.ts":
/*!*******************************************!*\
  !*** ./src/app/central-socket.service.ts ***!
  \*******************************************/
/*! exports provided: CentralSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralSocketService", function() { return CentralSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CentralSocketService = /** @class */ (function () {
    function CentralSocketService() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__["connect"]();
    }
    CentralSocketService.prototype.reconnect = function () {
        this.socket.disconnect();
        this.socket.connect();
    };
    CentralSocketService.prototype.getSocket = function () {
        return this.socket;
    };
    CentralSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CentralSocketService);
    return CentralSocketService;
}());



/***/ }),

/***/ "./src/app/chat-nofification/chat-nofification.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/chat-nofification/chat-nofification.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav{\r\n  background-color: black;\r\n  width: 100%;\r\n  position: relative;\r\n  list-style-type: none;\r\n}\r\nli{\r\n  margin-right: 20px;\r\n}\r\n.logout{\r\n  margin-left: 40vw;\r\n  cursor: pointer;\r\n  outline: 0;\r\n  float:right;\r\n  background-color: black;\r\n  color: white;\r\n  padding: 14px;\r\n  font-size: 18px;\r\n  border: none;\r\n}\r\n.pin{\r\n  cursor: pointer;\r\n  outline: 0;\r\n  float:right;\r\n  background-color: black;\r\n  color: white;\r\n  padding-left: 5px;\r\n  padding-top: 5px;\r\n  font-size: 18px;\r\n  border: none;\r\n}\r\n.navbtn{\r\n  cursor: pointer;\r\n  outline: 0;\r\n  float:right;\r\n  background-color: black;\r\n  color: white;\r\n  padding: 14px;\r\n  font-size: 18px;\r\n  border: none;\r\n}\r\n.logout:hover{\r\n  background-color: #1d1e1e;\r\n}\r\n.navbtn:hover{\r\n  background-color: #1d1e1e;\r\n}\r\n/* Dropdown Button */\r\n.dropbtn {\r\n  outline: 0;\r\n  background-color: black;\r\n  color: white;\r\n  padding: 14px;\r\n  font-size: 18px;\r\n  border: none;\r\n}\r\n/* The container <div> - needed to position the dropdown content */\r\n.dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n/* Dropdown Content (Hidden by Default) */\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #2b2d2d;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n/* Links inside the dropdown */\r\n.dropdown-content a {\r\n  cursor: pointer;\r\n  color: white;\r\n  font-size: 16px;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n.button__badge {\r\n  background-color: #fa3e3e;\r\n  border-radius: 2px;\r\n  color: white;\r\n \r\n  padding: 1px 3px;\r\n  font-size: 10px;\r\n  \r\n  position: absolute; /* Position the badge within the relatively positioned button */\r\n  right: 0;\r\n}\r\n.neutral_button__badge {\r\n  background-color: #585859;\r\n  border-radius: 2px;\r\n  color: white;\r\n \r\n  padding: 1px 3px;\r\n  font-size: 10px;\r\n  \r\n  position: absolute; /* Position the badge within the relatively positioned button */\r\n  right: 0;\r\n}\r\n/* Change color of dropdown links on hover */\r\n.dropdown-content a:hover {background-color: black;}\r\n/* Show the dropdown menu on hover */\r\n.dropdown:hover .dropdown-content {display: block;}\r\n/* Change the background color of the dropdown button when the dropdown content is shown */\r\n.dropdown:hover .dropbtn {background-color: #1d1e1e;}"

/***/ }),

/***/ "./src/app/chat-nofification/chat-nofification.component.html":
/*!********************************************************************!*\
  !*** ./src/app/chat-nofification/chat-nofification.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ul class = \"nav\">\n  <li>\n    <div class=\"dropdown\">\n      <div class=\"dropbtn\">\n          {{myUserName}}&nbsp;\n          <i class=\"fa fa-globe\"></i>\n            <span *ngIf = \"notificationList.length == 0\" class=\"neutral_button__badge\">{{notificationList.length}}</span>\n            <span *ngIf = \"notificationList.length != 0\"class=\"button__badge\">{{notificationList.length}}</span>\n      <div class=\"dropdown-content\">\n        <a *ngFor=\"let notif of notificationList\" (click)=\"openChat(notif)\">{{notif}}</a>\n      </div>  \n    </div>\n  </div>\n  </li>\n  <li>\n  <button class = \"navbtn\" (click)=\"goHome()\" > Home\n      <i style=\"color:white\" class=\"pin fa fa-home\"></i>\n    </button>\n  </li>\n  <li>\n\n  <button class = \"navbtn\" (click)=\"updateProfile()\" > Update Profile\n    <i style=\"color:white\" class=\"pin fa fa-edit\"></i>\n  </button>\n\n</li>\n<li>\n    <button class = \"navbtn\" (click)=\"checkIn()\" > Check-in\n      <i style=\"color:white\" class=\"pin fa fa-map-pin\"></i>\n    </button>\n</li>\n<li>\n  <button  class=\"logout\" (click)=\"logout()\">Logout </button>\n</li>\n  \n\n</ul>\n"

/***/ }),

/***/ "./src/app/chat-nofification/chat-nofification.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/chat-nofification/chat-nofification.component.ts ***!
  \******************************************************************/
/*! exports provided: ChatNofificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatNofificationComponent", function() { return ChatNofificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _central_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../central-socket.service */ "./src/app/central-socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatNofificationComponent = /** @class */ (function () {
    function ChatNofificationComponent(centralSocket) {
        this.centralSocket = centralSocket;
        this.notificationList = [];
        this.myUserName = '';
        this.openChatFromNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    //Creates a room with only the current user
    ChatNofificationComponent.prototype.joinMyOwnRoom = function () {
        this.centralSocket.getSocket().emit('joinMyOwnRoom', { name: this.myUserName });
    };
    ChatNofificationComponent.prototype.getUnseenChatNames = function () {
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/api/getUnseenChatNames?username=' + this.myUserName, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                self.notificationList = JSON.parse(xhr.responseText);
            }
        };
        xhr.send();
    };
    ChatNofificationComponent.prototype.goHome = function () {
        window.location.replace('/selection');
    };
    ChatNofificationComponent.prototype.updateProfile = function () {
        window.location.replace('/updateProfile');
    };
    ChatNofificationComponent.prototype.checkIn = function () {
        window.location.replace('/checkin');
    };
    ChatNofificationComponent.prototype.logout = function () {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/auth/logout', true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                window.location.replace('/');
            }
        };
        xhr.send();
    };
    ChatNofificationComponent.prototype.openChat = function (username) {
        // window.location.replace("http://localhost:4200/selection/");
        this.openChatFromNav.emit(username);
    };
    ChatNofificationComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        this.socket = this.centralSocket.getSocket();
        var self = this;
        console.log(self.myUserName);
        this.joinMyOwnRoom(); //Joins a room named <myUsername>
        if (self.myUserName != undefined && self.myUserName != '') {
            self.getUnseenChatNames();
            //Receives the delete message from the server and reduces the notification count by removing that user from the current user's notifications
            this.centralSocket.getSocket().on('deleteFromNotificationList', function (user) {
                self.notificationList.splice(self.notificationList.indexOf(user.name), 1);
            });
            this.centralSocket.getSocket().on('addToNotificationList', function (user) {
                console.log(user);
                console.log('received a notification');
                if (self.notificationList.indexOf(user.name) < 0) {
                    self.notificationList.push(user.name);
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChatNofificationComponent.prototype, "myUserName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChatNofificationComponent.prototype, "openChatFromNav", void 0);
    ChatNofificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-nofification',
            template: __webpack_require__(/*! ./chat-nofification.component.html */ "./src/app/chat-nofification/chat-nofification.component.html"),
            styles: [__webpack_require__(/*! ./chat-nofification.component.css */ "./src/app/chat-nofification/chat-nofification.component.css")]
        }),
        __metadata("design:paramtypes", [_central_socket_service__WEBPACK_IMPORTED_MODULE_1__["CentralSocketService"]])
    ], ChatNofificationComponent);
    return ChatNofificationComponent;
}());



/***/ }),

/***/ "./src/app/chatbox/chatbox.component.css":
/*!***********************************************!*\
  !*** ./src/app/chatbox/chatbox.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatbox{\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.fa-times{\r\n  font-size: 13px;\r\n}\r\n.stylishbutton{\r\n  margin-top: 5px;\r\n  cursor: pointer;\r\n  outline: 0;\r\n  background-color: black;\r\n  color: white;\r\n  padding-left: 14px;\r\n  padding-right: 14px;\r\n  padding-top: 6px;\r\n  padding-bottom: 6px;\r\n  font-size: 18px;\r\n  border: none;\r\n}\r\n.stylishbutton:hover{\r\n  background-color: #1d1e1e;\r\n}\r\n.chatMessageInput{\r\n  padding: 5px;\r\n}"

/***/ }),

/***/ "./src/app/chatbox/chatbox.component.html":
/*!************************************************!*\
  !*** ./src/app/chatbox/chatbox.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"chatbox\">\n    <strong>Chat with {{targetUsername}}</strong>\n    <div style=\"display: inline-block;text-align: right; margin-left:5%;\">\n        <a (click)=\"closeChat()\">  <i class=\"fas fa-times close\" ></i></a>\n        </div>\n\n<form ngNativeValidate action=\"/action_page.php\">\n  \n  <br/>\n  <input class=\"chatMessageInput\"[(ngModel)]=\"formMessage\" name=\"chatMessageForm\" required>\n  \n  <input class=\"stylishbutton\" (click)=\"send()\" type=\"submit\" value=\"Submit\">\n</form>\n\n  <a *ngFor=\"let message of messages\">\n    <img style=\"vertical-align:middle\" src=\"{{message.fromAvatar}}\" height=\"2%\" width=\"2%\"> &nbsp;\n    <b>{{message.fromUsername}}</b> : {{message.msg}}\n    <br/>\n  </a>\n  \n</div>"

/***/ }),

/***/ "./src/app/chatbox/chatbox.component.ts":
/*!**********************************************!*\
  !*** ./src/app/chatbox/chatbox.component.ts ***!
  \**********************************************/
/*! exports provided: ChatboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatboxComponent", function() { return ChatboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _central_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../central-socket.service */ "./src/app/central-socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatboxComponent = /** @class */ (function () {
    function ChatboxComponent(centralSocket) {
        this.centralSocket = centralSocket;
        //target's username and user's username are passed in from user-selection.component
        this.targetUsername = '';
        this.myUserName = '';
        this.myAvatarURL = '';
        this.closeChatbox = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.socket = centralSocket.getSocket();
    }
    ChatboxComponent.prototype.markAllAsSeen = function () {
        var self = this;
        var roomName;
        if (self.myUserName < self.targetUsername) {
            roomName = self.myUserName + ":" + self.targetUsername;
        }
        else {
            roomName = self.targetUsername + ":" + self.myUserName;
        }
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/markAllAsSeen?roomName=' + roomName + "&targetName=" + self.myUserName, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                self.centralSocket.getSocket().emit("deleteFromNotificationList", { name: self.targetUsername });
            }
        };
        xhr.send();
    };
    ChatboxComponent.prototype.onClick = function (event) {
        this.markAllAsSeen();
    };
    ChatboxComponent.prototype.send = function () {
        var self = this;
        console.log(self.formMessage);
        var message = {
            fromUsername: self.myUserName,
            toUsername: self.targetUsername,
            fromAvatar: self.myAvatarURL,
            msg: self.formMessage
        };
        //Sends the chat to the server with the event name 'message-to-server' (see server.js)
        this.centralSocket.getSocket().emit('message-to-server', message);
        //Sends a notification to the recipient of a new unread message
        this.centralSocket.getSocket().emit('addToNotificationList', { toUsername: this.targetUsername, name: this.myUserName });
    };
    ChatboxComponent.prototype.getAllChats = function () {
        var self = this;
        var roomName;
        if (self.myUserName < self.targetUsername) {
            roomName = self.myUserName + ":" + self.targetUsername;
        }
        else {
            roomName = self.targetUsername + ":" + self.myUserName;
        }
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/api/getAllChats?roomName=' + roomName, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                self.messages = JSON.parse(xhr.responseText);
            }
        };
        xhr.send();
    };
    ChatboxComponent.prototype.closeChat = function () {
        // window.location.replace("http://localhost:4200/selection/");
        this.closeChatbox.emit(false);
        debugger;
    };
    ChatboxComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.getAllChats(); //Get all previous chats on changes
        this.centralSocket.reconnect(); //Reconnects to room - fixes bug when you chat with many different people on a short interval
        var self = this;
        this.messages = new Array();
        //listens for a socket connection, then makes the socket join a "room". The room contains only 2 people, the current socket, and the target socket, and thus is named myUsername:targetUsername as well as targetUsername:myUsername for 2-way assurance
        this.centralSocket.getSocket().on('connect', function () {
            var roomName;
            //Room name is the concatenation of both usernames in lexicographical order
            if (self.myUserName < self.targetUsername) {
                roomName = self.myUserName + ":" + self.targetUsername;
            }
            else {
                roomName = self.targetUsername + ":" + self.myUserName;
            }
            self.centralSocket.getSocket().emit('joinRooms', {
                name: roomName,
                self: _this.myUserName
            });
        });
        this.centralSocket.getSocket().on('message-to-clients', function (msg) {
            _this.messages.push(msg);
            console.log(msg);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChatboxComponent.prototype, "targetUsername", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChatboxComponent.prototype, "myUserName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChatboxComponent.prototype, "myAvatarURL", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChatboxComponent.prototype, "closeChatbox", void 0);
    ChatboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chatbox',
            template: __webpack_require__(/*! ./chatbox.component.html */ "./src/app/chatbox/chatbox.component.html"),
            styles: [__webpack_require__(/*! ./chatbox.component.css */ "./src/app/chatbox/chatbox.component.css")],
            host: {
                '(document:click)': 'onClick($event)',
            }
        }),
        __metadata("design:paramtypes", [_central_socket_service__WEBPACK_IMPORTED_MODULE_1__["CentralSocketService"]])
    ], ChatboxComponent);
    return ChatboxComponent;
}());



/***/ }),

/***/ "./src/app/check-in/check-in.component.css":
/*!*************************************************!*\
  !*** ./src/app/check-in/check-in.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n  text-align: center;\r\n  font-family: \"Lato\", serif;\r\n}\r\nagm-map {\r\n  height: 300px;\r\n}\r\n#submit {\r\n  border: none;\r\n  outline: 0;\r\n  display: inline-block;\r\n  padding: 8px;\r\n  color: white;\r\n  background-color: #000;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  width: 20%;\r\n  font-size: 18px;\r\n}\r\n#submit:hover {\r\n  opacity: 0.7;\r\n}\r\n"

/***/ }),

/***/ "./src/app/check-in/check-in.component.html":
/*!**************************************************!*\
  !*** ./src/app/check-in/check-in.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chat-nofification [myUserName]=\"myUserName\" (openChatFromNav)=\"openChatFromNav($event)\"></app-chat-nofification>\n<div *ngIf=\"checkin\">\n  <h1>Check-in</h1>\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n      <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n  </agm-map>\n  <div style=\"text-align: center;\">\n  <br/>\n  <br/>\n  <button id=\"submit\" class=\"form-control\" type=\"submit\" value=\"Submit\" (click) = \"checkInClick()\" > Check in!</button>\n  </div>\n</div>\n<span *ngIf=\"chatbox\">\n    <app-chatbox [myAvatarURL]=\"myAvatarURL\" [myUserName]=\"myUserName\" [targetUsername]=\"username\" (closeChatbox) = \"closeChatbox($event)\"></app-chatbox> \n</span>"

/***/ }),

/***/ "./src/app/check-in/check-in.component.ts":
/*!************************************************!*\
  !*** ./src/app/check-in/check-in.component.ts ***!
  \************************************************/
/*! exports provided: CheckInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInComponent", function() { return CheckInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckInComponent = /** @class */ (function () {
    function CheckInComponent() {
        this.myUserName = "";
        this.myAvatarURL = "";
        this.myName = "";
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.username = "";
        this.chatbox = false;
        this.checkin = true;
    }
    CheckInComponent.prototype.checkInClick = function () {
        var xhr = new XMLHttpRequest();
        var self = this;
        xhr.open('PUT', '/api/updateLatAndLong?lat=' + this.lat + '&long=' + this.lng, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                alert("Successfully checked in!");
            }
            else if (this.readyState == 4 && this.status != 200) {
                alert("There was a problem checking in. Please try again later.");
            }
        };
        xhr.send();
    };
    CheckInComponent.prototype.openChatFromNav = function ($event) {
        this.username = $event;
        this.chatbox = true;
        this.checkin = false;
    };
    CheckInComponent.prototype.closeChatbox = function (e) {
        this.chatbox = false;
        this.checkin = true;
    };
    CheckInComponent.prototype.ngOnInit = function () {
        var xhr = new XMLHttpRequest();
        var self = this;
        xhr.open('GET', '/api/getMyUserName', true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var resp = JSON.parse(xhr.responseText);
                self.myUserName = resp.username;
                self.myAvatarURL = resp.avatar_url;
                self.myName = resp.name;
            }
        };
        xhr.send();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                self.lat = position.coords.latitude;
                self.lng = position.coords.longitude;
                console.log(position);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    CheckInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-check-in',
            template: __webpack_require__(/*! ./check-in.component.html */ "./src/app/check-in/check-in.component.html"),
            styles: [__webpack_require__(/*! ./check-in.component.css */ "./src/app/check-in/check-in.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckInComponent);
    return CheckInComponent;
}());



/***/ }),

/***/ "./src/app/events-page/events-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/events-page/events-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/events-page/events-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/events-page/events-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  events-page works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/events-page/events-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/events-page/events-page.component.ts ***!
  \******************************************************/
/*! exports provided: EventsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageComponent", function() { return EventsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsPageComponent = /** @class */ (function () {
    function EventsPageComponent() {
    }
    EventsPageComponent.prototype.ngOnInit = function () {
    };
    EventsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events-page',
            template: __webpack_require__(/*! ./events-page.component.html */ "./src/app/events-page/events-page.component.html"),
            styles: [__webpack_require__(/*! ./events-page.component.css */ "./src/app/events-page/events-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsPageComponent);
    return EventsPageComponent;
}());



/***/ }),

/***/ "./src/app/github-card/github-card.component.css":
/*!*******************************************************!*\
  !*** ./src/app/github-card/github-card.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 300px;\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.title {\r\n    color: grey;\r\n    font-size: 18px;\r\n}\r\n\r\nbutton {\r\n    border: none;\r\n    outline: 0;\r\n    display: inline-block;\r\n    padding: 8px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    font-size: 22px;\r\n    color: black;\r\n}\r\n\r\nbutton:hover, a:hover {\r\n    opacity: 0.7;\r\n}\r\n"

/***/ }),

/***/ "./src/app/github-card/github-card.component.html":
/*!********************************************************!*\
  !*** ./src/app/github-card/github-card.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\" integrity=\"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ\" crossorigin=\"anonymous\">\r\n\r\n\r\n\r\n<div styles=\"font-family: Lato; \">\r\n  <div class=\"card\">\r\n    <div style=\"display: inline-block;text-align: right; margin-right: 5%; margin-top:2%\">\r\n    <a (click)=\"onclick()\">  <i class=\"fas fa-times\" ></i></a>\r\n    </div>\r\n    <img src=\"{{gitJson.avatar_url}}\" alt=\"John\" style=\"width:50%;  border-radius: 50% ; margin-left: auto;margin-right: auto;width: 150px;\"/>\r\n    <br>\r\n    <h1>{{gitJson.name}}</h1>\r\n    <p class=\"title\">{{gitJson.email}}</p>\r\n    <ul class=\"list-group\">\r\n    <h4>Public Repos : {{gitJson.public_repos}}</h4>\r\n    <div *ngIf=\"gitJson.bio!=undefined\">\r\n    <li class=\"list-group-item\"><h6>{{gitJson.bio}}</h6></li>\r\n  </div>\r\n    <div *ngFor=\"let repo of repos\">\r\n      <li class=\"list-group-item\">\r\n      <a href=\"{{repo.svn_url}}\"  ><h5>{{repo.name}}</h5></a> \r\n      <p class=\"title\">{{repo.description}}</p>\r\n      </li>\r\n    </div>\r\n  </ul>\r\n    <!-- <ul class=\"list-group\" *ngFor=\"let position of positions;\" style=\"text-align:center; \">\r\n      <li class=\"list-group-item\" style=\"text-align:center; \">\r\n        <strong>{{position.company}}</strong> <br> {{position.position}}\r\n      </li>\r\n      <br>\r\n    </ul> -->\r\n    <!-- <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\r\n  <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n  <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\r\n  <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> -->\r\n    <p><button>Contact</button></p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/github-card/github-card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/github-card/github-card.component.ts ***!
  \******************************************************/
/*! exports provided: GithubCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubCardComponent", function() { return GithubCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GithubCardComponent = /** @class */ (function () {
    function GithubCardComponent() {
        this.username = '';
        this.repos = {};
        this.gitJson = {};
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GithubCardComponent.prototype.ngOnInit = function () {
        debugger;
        var xhr = new XMLHttpRequest();
        var self = this;
        xhr.open('GET', '/api/fetchPublicUser?username=' + self.username, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                self.gitJson = JSON.parse(xhr.responseText);
                console.log('user');
                console.log(self.gitJson);
                console.log(self.gitJson['login']);
            }
        };
        xhr.send();
        var xhr2 = new XMLHttpRequest();
        xhr2.open('GET', '/api/getUserRepos?username=' + self.username);
        xhr2.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                debugger;
                self.repos = JSON.parse(xhr2.responseText);
                console.log('repos');
                console.log(self.repos);
            }
        };
        xhr2.send();
    };
    GithubCardComponent.prototype.onclick = function () {
        // window.location.replace("http://localhost:4200/selection/");
        this.messageEvent.emit(false);
        debugger;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GithubCardComponent.prototype, "username", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GithubCardComponent.prototype, "messageEvent", void 0);
    GithubCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-github-card',
            template: __webpack_require__(/*! ./github-card.component.html */ "./src/app/github-card/github-card.component.html"),
            styles: [__webpack_require__(/*! ./github-card.component.css */ "./src/app/github-card/github-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GithubCardComponent);
    return GithubCardComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-image: url('/assets/background.jpg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover; \r\n}\r\n\r\nh1{\r\n  font-family: \"Lato\", serif;\r\n}\r\n\r\np{\r\n  font-family: \"Lato\", serif;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  font-family: \"Lato\", serif;\r\n  outline: 0;\r\n  display: inline-block;\r\n  padding: 8px;\r\n  color: white;\r\n  background-color: #000;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  width: 200px;\r\n  font-size: 18px;\r\n}\r\n\r\nbutton:hover, a:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"background\">\r\n    <div [ngStyle]=\"{'background-color':''}\" *ngIf=\"notLoggedIn\">\r\n        &nbsp;\r\n        <div style =\"text-align: center; margin-top: 30vh;\">\r\n            <h1>Welcome to EventConnect</h1>\r\n            <p>A place to chat, meet up, and make memories with other developers</p>\r\n            <p>Happy networking!</p>\r\n        <!--<button (click)=\"linkedin()\">Linkedin Login</button>\r\n        <br/>-->\r\n\r\n        <button (click)=\"github()\">Login with Github <i style=\"color:white;\" class=\"fab fa-github\"></i></button>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
        this.notLoggedIn = false;
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/api/isLoggedIn', false);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                window.location.replace('/signup');
            }
            else if (this.readyState == 4 && this.status != 200) {
                self.notLoggedIn = true;
            }
        };
        xhr.send();
    }
    HomePageComponent.prototype.github = function () {
        window.location.replace("/auth/github");
    };
    HomePageComponent.prototype.event = function () {
    };
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/linkedin-card/linkedin-card.component.css":
/*!***********************************************************!*\
  !*** ./src/app/linkedin-card/linkedin-card.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 300px;\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.title {\r\n    color: grey;\r\n    font-size: 18px;\r\n}\r\n\r\nbutton {\r\n    border: none;\r\n    outline: 0;\r\n    display: inline-block;\r\n    padding: 8px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    font-size: 22px;\r\n    color: black;\r\n}\r\n\r\nbutton:hover, a:hover {\r\n    opacity: 0.7;\r\n}\r\n"

/***/ }),

/***/ "./src/app/linkedin-card/linkedin-card.component.html":
/*!************************************************************!*\
  !*** ./src/app/linkedin-card/linkedin-card.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\r\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\" integrity=\"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ\" crossorigin=\"anonymous\">\r\n\r\n\r\n<div styles=\"font-family: Lato; \">\r\n  <div class=\"card \">\r\n    <div style=\"display: inline-block;text-align: right; margin-right: 5%; margin-top:2%\">\r\n      <i class=\"fas fa-times\"></i>\r\n    </div>\r\n    <img src=\"https://avatars1.githubusercontent.com/u/22064715?v=4\" alt=\"John\" style=\"width:50%;  border-radius: 50% ; margin-left: auto;margin-right: auto;width: 50%;\">\r\n    <br>\r\n    <h1>{{lookup.firstName.localized.en_US}} {{lookup.lastName.localized.en_US}}</h1>\r\n    <p class=\"title\">{{lookup.headline.localized.en_US}}</p>\r\n\r\n    <ul class=\"list-group\" *ngFor=\"let position of positions;\" style=\"text-align:center; \">\r\n      <li class=\"list-group-item\" style=\"text-align:center; \">\r\n        <strong>{{position.company}}</strong> <br> {{position.position}}\r\n      </li>\r\n      <br>\r\n    </ul>\r\n    <!-- <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\r\n  <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n  <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\r\n  <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> -->\r\n    <p><button>Contact</button></p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/linkedin-card/linkedin-card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/linkedin-card/linkedin-card.component.ts ***!
  \**********************************************************/
/*! exports provided: LinkedinCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedinCardComponent", function() { return LinkedinCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinkedinCardComponent = /** @class */ (function () {
    function LinkedinCardComponent() {
        this.lookup = {
            "id": "yrZCpj2Z12",
            "firstName": {
                "localized": {
                    "en_US": "Bob"
                },
                "preferredLocale": {
                    "country": "US",
                    "language": "en"
                }
            },
            "lastName": {
                "localized": {
                    "en_US": "Smith"
                },
                "preferredLocale": {
                    "country": "US",
                    "language": "en"
                }
            },
            "location": {
                "countryCode": "us",
                "postalCode": "94101",
                "standardizedLocationUrn": "urn:li:standardizedLocationKey:(us,94101)"
            },
            "positions": {
                "660879450": {
                    "companyName": {
                        "localized": {
                            "en_US": "LinkedIn"
                        },
                        "preferredLocale": {
                            "country": "US",
                            "language": "en"
                        }
                    },
                    "id": 660879450,
                    "title": {
                        "localized": {
                            "en_US": "Staff Software Engineer"
                        },
                        "preferredLocale": {
                            "country": "US",
                            "language": "en"
                        }
                    }
                }
            },
            "headline": {
                "localized": {
                    "en_US": "API Enthusiast at LinkedIn"
                },
                "preferredLocale": {
                    "country": "US",
                    "language": "en"
                }
            }
        };
        this.positions = [];
    }
    LinkedinCardComponent.prototype.ngOnInit = function () {
        var self = this;
        for (var i in self.lookup.positions) {
            console.log(self.lookup.positions);
            this.positions.push({
                "company": self.lookup.positions[i].companyName.localized.en_US,
                "position": self.lookup.positions[i].title.localized.en_US
            });
            console.log(this.positions);
        }
    };
    LinkedinCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-linkedin-card',
            template: __webpack_require__(/*! ./linkedin-card.component.html */ "./src/app/linkedin-card/linkedin-card.component.html"),
            styles: [__webpack_require__(/*! ./linkedin-card.component.css */ "./src/app/linkedin-card/linkedin-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinkedinCardComponent);
    return LinkedinCardComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  border: none;\r\n  display: inline-block;\r\n  color: white;\r\n  background-color: #000;\r\n  text-align: right;\r\n  width: 100%;\r\n  font-size: 0px;\r\n  outline: none !important;\r\n   box-shadow: none;\r\n}\r\nbutton p{\r\n  cursor: pointer;\r\n  padding-top: 10px;\r\n  padding-right: 20px;\r\n  padding-bottom: 10px;\r\n  padding-left: 20px;\r\n  font-size: 18px;\r\n  float:right;\r\n  transition: ease background-color 0.5s;\r\n\r\n}\r\nbutton p:hover{\r\n  background-color: #232222;\r\n}"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button><p (click)=\"logout()\">Logout</p> </button>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    //makes a backend request to logout and redirects to the home page
    LogoutComponent.prototype.logout = function () {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/auth/logout', true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                window.location.replace('/');
            }
        };
        xhr.send();
    };
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 300px;\r\n  }"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-logout></app-logout>\r\n<div style=\"text-align: center\">\r\n<h1>Check-in</h1>\r\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n</agm-map>\r\n\r\n  <br/>\r\n  <br/>\r\n  \r\n  <!-- passing location data to the form that asks for career and linkedin-->\r\n  <app-career-prospect-form [latitude]=\"lat\" [longitude]=\"lng\"></app-career-prospect-form>\r\n \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
        this.name = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        var self = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                self.lat = position.coords.latitude;
                self.lng = position.coords.longitude;
                console.log(position);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/update-profile/update-profile.component.css":
/*!*************************************************************!*\
  !*** ./src/app/update-profile/update-profile.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n  transition: all .5 ease-in-out;\r\n  -webkit-transition: all .5 ease-in-out;\r\n  -moz-transition: all .5 ease-in-out;\r\n}\r\nbutton:hover{\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  opacity: 0.9;\r\n  background-color: rgba(0, 0, 0, 0.2)\r\n}\r\n.btn-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  text-align: center;\r\n  padding: 6px 0;\r\n  font-size: 12px;\r\n  line-height: 1.42;\r\n  border-radius: 15px;\r\n}\r\n.row-center {\r\n  position:absolute;\r\nleft:0;\r\nright:0;\r\nmargin-left:auto;\r\nmargin-right:auto;\r\n}\r\n.separation-between-buttons{\r\n  padding-right: 5px;\r\n}\r\n.submit {\r\n  margin-left: 5px;\r\n  border: none;\r\n  outline: 0;\r\n  display: inline-block;\r\n  padding: 8px;\r\n  color: white;\r\n  background-color: #000;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  width: 10%;\r\n  font-size: 18px;\r\n  padding-bottom: 35px;\r\n  \r\n}\r\n.top-wrapper{\r\n  margin-top: 15vh;\r\n}\r\n.submit:hover {\r\n  opacity: 0.7;\r\n}\r\n"

/***/ }),

/***/ "./src/app/update-profile/update-profile.component.html":
/*!**************************************************************!*\
  !*** ./src/app/update-profile/update-profile.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chat-nofification [myUserName]=\"myUserName\" (openChatFromNav)=\"openChatFromNav($event)\"></app-chat-nofification>\n\n<div class=\"top-wrapper\" *ngIf=\"editProfile\">\n  <div style=\"font-family: Lato; text-align:center \">\n    \n    <img src=\"{{myAvatarURL}}\" alt=\"Avatar\" style=\"border-radius: 50%; width : 6%; height : 6%;border-width: 2px;border-style: solid;\" />\n    <font size=\"36\" style=\"padding-left: 1%; vertical-align:middle;\">{{myName}}</font>\n  </div>\n  \n  <br>\n  <div style=\"margin-top: 8px\">\n    <table align = \"center\">\n      <td class = \"separation-between-buttons\">\n      <button type=\"button\" class=\"btn btn-default btn-circle\" (click)=\"openLinkedinProfile()\"><i class=\"fab fa-linkedin-in\"></i></button>\n    </td>\n    <td class = \"separation-between-buttons\">\n      <button type=\"button\" class=\"btn btn-default btn-circle\"><i class=\"fab fa-github\"></i></button>\n    </td>\n    <td class = \"separation-between-buttons\">\n      <button type=\"button\" class=\"btn btn-default btn-circle\"><i class=\"far fa-heart\"></i></button>\n    </td>\n    <td class = \"separation-between-buttons\">\n      <button type=\"button\" class=\"btn btn-default btn-circle\"><i class=\"fas fa-times\"></i></button>\n    </td>\n    <td>\n      <button type=\"button\" class=\"btn btn-default btn-circle\"><i class=\"far fa-comment\"></i></button>\n    </td>\n  </table>\n  <br/>\n    <p style=\"text-align:center;\"><b>How you appear to others</b></p>\n    <form name=\"screen-name\" (ngSubmit)=\"updateScreenName()\" style=\"text-align: center\">\n        <div class=\"form-group\">\n          Preferred Screen name:\n          <input [(ngModel)] = \"updatedName\" id=\"text\" class=\"form-control\" type=\"text\" name=\"fname\" style=\"width:20%;display: inline-block;\">\n          <input class=\"submit form-control\" type=\"submit\" value=\"Update\" />\n        </div>\n    </form>\n    <form name=\"linkedin-url\" (submit)=\"updateLinkedinURL()\" style=\"text-align: center\">\n        <div class=\"form-group\">\n          Linkedin Profile URL:&nbsp;&nbsp;&nbsp;&nbsp;\n          <input [(ngModel)] = \"linkedinURL\" id=\"text\" class=\"form-control\" type=\"text\" name=\"url\" style=\"width:20%;display: inline-block;\">\n          <input class=\"submit form-control\" type=\"submit\" value=\"Update\" />\n        </div>\n    </form>\n\n  </div>\n</div>\n\n  <span *ngIf=\"chatbox\">\n      <app-chatbox [myAvatarURL]=\"myAvatarURL\" [myUserName]=\"myUserName\" [targetUsername]=\"username\" (closeChatbox) = \"closeChatbox($event)\"></app-chatbox> \n  </span>"

/***/ }),

/***/ "./src/app/update-profile/update-profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/update-profile/update-profile.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function() { return UpdateProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdateProfileComponent = /** @class */ (function () {
    function UpdateProfileComponent() {
        this.myUserName = "";
        this.myAvatarURL = "";
        this.myName = "";
        this.linkedinURL = "";
        this.currLinkedinURL = "";
        this.updatedName = "";
        this.editProfile = true;
        this.chatbox = false;
        this.username = "";
    }
    UpdateProfileComponent.prototype.alertInfo = function () {
        alert(this.myUserName + this.myAvatarURL + this.myName);
    };
    UpdateProfileComponent.prototype.openChatFromNav = function ($event) {
        this.username = $event;
        this.chatbox = true;
        this.editProfile = false;
    };
    UpdateProfileComponent.prototype.updateScreenName = function () {
        this.myName = this.updatedName;
        if (!this.updatedName || this.updatedName == "") {
            alert("Your chosen name cannot be empty");
            return;
        }
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', '/api/updateName?name=' + this.updatedName, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                alert("Done updating");
            }
        };
        xhr.send();
        this.updatedName = "";
    };
    UpdateProfileComponent.prototype.updateLinkedinURL = function () {
        if (!this.linkedinURL.includes("linkedin.com/")) {
            alert("Invalid entry. Please enter URL in the form linkedin.com/<USERNAME>");
            return;
        }
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', '/api/updateLinkedinURL?url=' + this.linkedinURL, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                alert("Done updating");
            }
        };
        xhr.send();
        this.currLinkedinURL = this.linkedinURL;
        this.linkedinURL = "";
    };
    UpdateProfileComponent.prototype.openLinkedinProfile = function () {
        if (!(this.currLinkedinURL.includes('https://'))) {
            window.open('https://' + this.currLinkedinURL);
        }
        else {
            window.open(this.currLinkedinURL);
        }
    };
    UpdateProfileComponent.prototype.closeChatbox = function ($event) {
        this.chatbox = false;
        this.editProfile = true;
    };
    UpdateProfileComponent.prototype.ngOnInit = function () {
        var xhr = new XMLHttpRequest();
        var self = this;
        xhr.open('GET', '/api/getMyUserName', true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var resp = JSON.parse(xhr.responseText);
                self.myUserName = resp.username;
                self.myAvatarURL = resp.avatar_url;
                self.myName = resp.name;
                self.currLinkedinURL = resp.linkedinProfileName;
            }
        };
        xhr.send();
    };
    UpdateProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-profile',
            template: __webpack_require__(/*! ./update-profile.component.html */ "./src/app/update-profile/update-profile.component.html"),
            styles: [__webpack_require__(/*! ./update-profile.component.css */ "./src/app/update-profile/update-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateProfileComponent);
    return UpdateProfileComponent;
}());



/***/ }),

/***/ "./src/app/user-selection/user-selection.component.css":
/*!*************************************************************!*\
  !*** ./src/app/user-selection/user-selection.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n  transition: all .5 ease-in-out;\r\n  -webkit-transition: all .5 ease-in-out;\r\n  -moz-transition: all .5 ease-in-out;\r\n}\r\nbutton:hover{\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  opacity: 0.9;\r\n  background-color: rgba(0, 0, 0, 0.2)\r\n}\r\n.btn-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  text-align: center;\r\n  padding: 6px 0;\r\n  font-size: 12px;\r\n  line-height: 1.42;\r\n  border-radius: 15px;\r\n}\r\n.row-center {\r\n  position:absolute;\r\nleft:0;\r\nright:0;\r\nmargin-left:auto;\r\nmargin-right:auto;\r\n}\r\n.separation-between-buttons{\r\n  padding-right: 5px;\r\n}"

/***/ }),

/***/ "./src/app/user-selection/user-selection.component.html":
/*!**************************************************************!*\
  !*** ./src/app/user-selection/user-selection.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\r\n\r\n<app-chat-nofification [myUserName]=\"myUserName\" (openChatFromNav)=\"openChatFromNav($event)\"></app-chat-nofification>\r\n<span *ngIf=\"listSelections\">\r\n  <li class=\"list-group-item\" style=\"text-align:center; \">\r\n    <strong><font size=\"100\" style=\"padding-left: 1%; vertical-align:middle;\">EventConnect</font></strong>\r\n  </li>\r\n  <ul class=\"list-group\" *ngFor=\"let user of userList; let i = index\" style=\"text-align:center; \">\r\n\r\n\r\n    <li *ngIf=\"user.name != myName\" class=\"list-group-item\" style=\"text-align:center; \">\r\n      <div style=\"font-family: Lato; \">\r\n\r\n        <img src=\"{{user.avatar_url}}\" alt=\"Avatar\" style=\"border-radius: 50%; width : 6%; height : 6%;border-width: 2px;border-style: solid;\" />\r\n        <font size=\"36\" style=\"padding-left: 1%; vertical-align:middle;\">{{user.name}} </font>\r\n      </div>\r\n      <!-- </td> -->\r\n      <!-- <td style=\"text-align: center; \" width=\"100%\"> -->\r\n      \r\n      <br>\r\n      <div style=\"margin-top: 8px\">\r\n        <table align = \"center\">\r\n          <td class = \"separation-between-buttons\">\r\n          <button type=\"button\" class=\"btn btn-default btn-circle\" (click)=\"linkedinClick(i)\"><i class=\"fab fa-linkedin-in\"></i></button>\r\n        </td>\r\n        <td class = \"separation-between-buttons\">\r\n          <button type=\"button\" class=\"btn btn-default btn-circle\" (click)=\"githubClick(i)\"><i class=\"fab fa-github\"></i></button>\r\n        </td>\r\n        <td class = \"separation-between-buttons\">\r\n          <button type=\"button\" class=\"btn btn-default btn-circle\" (click)=\"like(i)\"><i class=\"far fa-heart\"></i></button>\r\n        </td>\r\n        <td class = \"separation-between-buttons\">\r\n          <button type=\"button\" class=\"btn btn-default btn-circle\" (click)=\"dislike(i)\"><i class=\"fas fa-times\"></i></button>\r\n        </td>\r\n        <td>\r\n          <button type=\"button\" class=\"btn btn-default btn-circle\" (click)=\"message(i)\"><i class=\"far fa-comment\"></i></button>\r\n        </td>\r\n\r\n        </table>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</span>\r\n\r\n<span *ngIf=\"githubcard\">\r\n  <app-github-card [username]=\"username\" (messageEvent)=\"receiveMessage($event)\" ></app-github-card>\r\n</span>\r\n\r\n<span *ngIf=\"chatbox\">\r\n    <app-chatbox [myAvatarURL]=\"myAvatarURL\" [myUserName]=\"myUserName\" [targetUsername]=\"username\" (closeChatbox) = \"closeChatbox($event)\"></app-chatbox> \r\n</span>"

/***/ }),

/***/ "./src/app/user-selection/user-selection.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user-selection/user-selection.component.ts ***!
  \************************************************************/
/*! exports provided: UserSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSelectionComponent", function() { return UserSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserSelectionComponent = /** @class */ (function () {
    function UserSelectionComponent() {
        this.listSelections = true;
        this.githubcard = false;
        this.chatbox = false;
        this.userList = [];
        this.myUserName = "";
        this.myAvatarURL = "";
        this.oauthToken = "";
        this.username = "";
        this.myName = "";
        this.showChat = false;
    }
    UserSelectionComponent.prototype.ngOnInit = function () {
        var xhr = new XMLHttpRequest();
        var self = this;
        xhr.open('GET', '/api/getMyUserName', true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var resp = JSON.parse(xhr.responseText);
                self.myUserName = resp.username;
                self.myAvatarURL = resp.avatar_url;
                self.myName = resp.name;
            }
        };
        xhr.send();
        var xhr2 = new XMLHttpRequest();
        var self = this;
        xhr2.open('GET', '/api/getUsersNearby', true);
        xhr2.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                self.userList = JSON.parse(xhr2.responseText);
                console.log(self.userList);
            }
        };
        xhr2.send();
    };
    UserSelectionComponent.prototype.message = function (index) {
        this.username = this.userList[index].username;
        this.chatbox = true; //this may seem stupid, but it refreshes component so that socket connection is established again
        this.listSelections = false;
        this.githubcard = false;
    };
    UserSelectionComponent.prototype.githubClick = function (index) {
        debugger;
        this.username = this.userList[index].username;
        console.log("github");
        debugger;
        // window.location.replace("http://localhost:4200/linke/");
        var self = this;
        self.githubcard = true;
        self.chatbox = false;
        self.listSelections = false;
    };
    UserSelectionComponent.prototype.like = function (index) {
        var xhr = new XMLHttpRequest();
        var self = this;
        xhr.open('POST', '/api/followUser?username=' + self.userList[index].username, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                alert("You followed " + self.userList[index].username);
            }
            else if (this.readyState == 4 && this.status != 200) {
                alert("Error following");
            }
        };
        xhr.send();
        //disable like
    };
    UserSelectionComponent.prototype.dislike = function (index) {
        var xhr = new XMLHttpRequest();
        var self = this;
        xhr.open('POST', '/api/unfollowUser?username=' + self.userList[index].username, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                alert("You unfollowed " + self.userList[index].username);
            }
            else if (this.readyState == 4 && this.status != 200) {
                alert("Error following");
            }
        };
        xhr.send();
    };
    UserSelectionComponent.prototype.linkedinClick = function (index) {
        if (!(this.userList[index].linkedinProfileName).includes('https://')) {
            window.open('https://' + this.userList[index].linkedinProfileName);
        }
        else {
            window.open(this.userList[index].linkedinProfileName);
        }
    };
    UserSelectionComponent.prototype.receiveMessage = function ($event) {
        this.githubcard = $event;
        this.listSelections = true;
        this.chatbox = false;
    };
    UserSelectionComponent.prototype.openChatFromNav = function ($event) {
        this.username = $event;
        this.chatbox = true;
        this.listSelections = false;
        this.githubcard = false;
    };
    UserSelectionComponent.prototype.closeChatbox = function ($event) {
        this.chatbox = $event;
        this.listSelections = true;
        this.githubcard = false;
    };
    UserSelectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-selection',
            template: __webpack_require__(/*! ./user-selection.component.html */ "./src/app/user-selection/user-selection.component.html"),
            styles: [__webpack_require__(/*! ./user-selection.component.css */ "./src/app/user-selection/user-selection.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserSelectionComponent);
    return UserSelectionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\John\Desktop\EventConnect\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map