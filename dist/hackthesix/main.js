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
/* harmony import */ var _linkedin_page_linkedin_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linkedin-page/linkedin-page.component */ "./src/app/linkedin-page/linkedin-page.component.ts");
/* harmony import */ var _user_selection_user_selection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-selection/user-selection.component */ "./src/app/user-selection/user-selection.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _linkedin_card_linkedin_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linkedin-card/linkedin-card.component */ "./src/app/linkedin-card/linkedin-card.component.ts");
/* harmony import */ var _github_card_github_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./github-card/github-card.component */ "./src/app/github-card/github-card.component.ts");
/* harmony import */ var _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chatbox/chatbox.component */ "./src/app/chatbox/chatbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _linkedin_page_linkedin_page_component__WEBPACK_IMPORTED_MODULE_2__["LinkedinPageComponent"] },
    { path: 'selection', component: _user_selection_user_selection_component__WEBPACK_IMPORTED_MODULE_3__["UserSelectionComponent"] },
    { path: 'messaging', component: _user_selection_user_selection_component__WEBPACK_IMPORTED_MODULE_3__["UserSelectionComponent"] },
    { path: 'signup', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
    { path: 'linkedin', component: _linkedin_card_linkedin_card_component__WEBPACK_IMPORTED_MODULE_5__["LinkedinCardComponent"] },
    { path: 'github', component: _github_card_github_card_component__WEBPACK_IMPORTED_MODULE_6__["GithubCardComponent"] },
    { path: 'chat', component: _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_7__["ChatboxComponent"] }
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
/* harmony import */ var _linkedin_page_linkedin_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./linkedin-page/linkedin-page.component */ "./src/app/linkedin-page/linkedin-page.component.ts");
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
                _linkedin_page_linkedin_page_component__WEBPACK_IMPORTED_MODULE_4__["LinkedinPageComponent"],
                _user_selection_user_selection_component__WEBPACK_IMPORTED_MODULE_5__["UserSelectionComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"],
                _linkedin_card_linkedin_card_component__WEBPACK_IMPORTED_MODULE_9__["LinkedinCardComponent"],
                _career_prospect_form_career_prospect_form_component__WEBPACK_IMPORTED_MODULE_10__["CareerProspectFormComponent"],
                _github_card_github_card_component__WEBPACK_IMPORTED_MODULE_11__["GithubCardComponent"],
                _events_page_events_page_component__WEBPACK_IMPORTED_MODULE_12__["EventsPageComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_13__["LogoutComponent"],
                _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_14__["ChatboxComponent"]
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

module.exports = "#submit{\r\n    padding-left: 40px;\r\n    padding-right: 40px;\r\n    margin-bottom: 10px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    border: none;\r\n    font-family: 'Alef', serif;\r\n    font-size: 15px;\r\n    background-color: #009cdb;\r\n    color: white;\r\n    border-radius: 25px;\r\n    cursor: pointer;\r\n}\r\n\r\n#textField{\r\n    margin-top: 8px;\r\n    margin-bottom: 10px;\r\n    padding: 3px;\r\n    padding-left: 8px;\r\n    padding-right: 8px;\r\n}"

/***/ }),

/***/ "./src/app/career-prospect-form/career-prospect-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/career-prospect-form/career-prospect-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\r\n\r\n<div style=\"font-family: 'Lato'\">\r\n  <form name=\"position\" (submit)=\"onSubmit(event)\" required>\r\n    What is your career prospect?\r\n    <br/>\r\n    <div class=\"form-group\">\r\n      <input id=\"textField\" class=\"form-control\" type=\"text\" name=\"fname\" style=\"width:50%;display: inline-block;\">\r\n      <br/> What is your LinkedIn Profile Name?\r\n      <br/>\r\n\r\n      <input id=\"textField\" class=\"form-control\" type=\"text\" name=\"linkedinName\" style=\"width:50%;display: inline-block;\">\r\n      <br/>\r\n      <input id=\"submit\" class=\"form-control\" type=\"submit\" value=\"Submit\" style=\"width:50%; text-align:center;display: inline-block;\" />\r\n    </div>\r\n  </form>\r\n</div>\r\n"

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

/***/ "./src/app/chatbox/chatbox.component.css":
/*!***********************************************!*\
  !*** ./src/app/chatbox/chatbox.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chatbox/chatbox.component.html":
/*!************************************************!*\
  !*** ./src/app/chatbox/chatbox.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<strong>Chat with {{targetUsername}}</strong>\n<form action=\"/action_page.php\">\n  Message: <input [(ngModel)]=\"formMessage\" name=\"chatMessageForm\">\n  <br>\n  <input (click)=\"send()\" type=\"submit\" value=\"Submit\">\n</form>\n{{formMessage}}\n\n<ul>\n  <li *ngFor=\"let message of messages\">\n    {{message.fromUsername}} : {{message.msg}}\n  </li>\n</ul>"

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


var ChatboxComponent = /** @class */ (function () {
    function ChatboxComponent() {
        //target's username and user's username are passed in from user-selection.component
        this.targetUsername = '';
        this.myUserName = '';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__["connect"]();
    }
    ChatboxComponent.prototype.send = function () {
        var self = this;
        console.log(self.formMessage);
        var message = {
            fromUsername: self.myUserName,
            toUsername: self.targetUsername,
            msg: self.formMessage
        };
        //Sends the chat to the server with the event name 'message-to-server' (see server.js)
        this.socket.emit('message-to-server', message);
    };
    ChatboxComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__["connect"](); //Reconnects to room - fixes bug when you chat with many different people on a short interval
        var self = this;
        this.messages = new Array();
        //listens for a socket connection, then makes the socket join a "room". The room contains only 2 people, the current socket, and the target socket, and thus is named myUsername:targetUsername as well as targetUsername:myUsername for 2-way assurance
        this.socket.on('connect', function () {
            self.socket.emit('joinRoom', {
                name: self.myUserName + ":" + self.targetUsername
            });
            self.socket.emit('joinRoom', {
                name: self.targetUsername + ":" + self.myUserName
            });
        });
        this.socket.on('message-to-clients', function (msg) {
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
    ChatboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chatbox',
            template: __webpack_require__(/*! ./chatbox.component.html */ "./src/app/chatbox/chatbox.component.html"),
            styles: [__webpack_require__(/*! ./chatbox.component.css */ "./src/app/chatbox/chatbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatboxComponent);
    return ChatboxComponent;
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

/***/ "./src/app/linkedin-page/linkedin-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/linkedin-page/linkedin-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    padding-left: 117px;\r\n    padding-right: 117px;\r\n    margin-top: 10px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    border: none;\r\n    font-family: 'Alef', serif;\r\n    font-size: 15px;\r\n    background-color: #009cdb;\r\n    color: white;\r\n    border-radius: 25px;\r\n    cursor: pointer;\r\n},\r\nbody{\r\n  height: 100%;\r\n  background-image: url(\"footer_lodyas.jpg\");\r\n  background-color: #cccccc;;\r\n}\r\n"

/***/ }),

/***/ "./src/app/linkedin-page/linkedin-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/linkedin-page/linkedin-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'background-color':''}\">\r\n\r\n<br/>\r\n<br/>\r\n<br/>\r\n<br/>\r\n<br/>\r\n<br/>\r\n<br/>\r\n<br/>\r\n<div style =\"text-align: center\">\r\n    <h1>Welcome to EventConnect</h1>\r\n<!--<button (click)=\"linkedin()\">Linkedin Login</button>\r\n<br/>-->\r\n<button (click)=\"github()\">Login with Github</button>\r\n\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/linkedin-page/linkedin-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/linkedin-page/linkedin-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LinkedinPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedinPageComponent", function() { return LinkedinPageComponent; });
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

var LinkedinPageComponent = /** @class */ (function () {
    function LinkedinPageComponent() {
    }
    LinkedinPageComponent.prototype.github = function () {
        window.location.replace("/auth/github");
    };
    LinkedinPageComponent.prototype.event = function () {
    };
    LinkedinPageComponent.prototype.ngOnInit = function () {
    };
    LinkedinPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-linkedin-page',
            template: __webpack_require__(/*! ./linkedin-page.component.html */ "./src/app/linkedin-page/linkedin-page.component.html"),
            styles: [__webpack_require__(/*! ./linkedin-page.component.css */ "./src/app/linkedin-page/linkedin-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinkedinPageComponent);
    return LinkedinPageComponent;
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

/***/ "./src/app/user-selection/user-selection.component.css":
/*!*************************************************************!*\
  !*** ./src/app/user-selection/user-selection.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  text-align: center;\r\n  padding: 6px 0;\r\n  font-size: 12px;\r\n  line-height: 1.42;\r\n  border-radius: 15px;\r\n}\r\n.row-center {\r\n  position:absolute;\r\nleft:0;\r\nright:0;\r\nmargin-left:auto;\r\nmargin-right:auto;\r\n}\r\n.separation-between-buttons{\r\n  padding-right: 5px;\r\n}"

/***/ }),

/***/ "./src/app/user-selection/user-selection.component.html":
/*!**************************************************************!*\
  !*** ./src/app/user-selection/user-selection.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\r\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\" integrity=\"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ\" crossorigin=\"anonymous\">\r\n<app-logout></app-logout>\r\n<span *ngIf=\"!hide\">\r\n  <li class=\"list-group-item\" style=\"text-align:center; \">\r\n    <strong><font size=\"100\" style=\"padding-left: 1%; vertical-align:middle;\">EventConnect</font></strong>\r\n  </li>\r\n  <ul class=\"list-group\" *ngFor=\"let user of userList; let i = index\" style=\"text-align:center; \">\r\n    <li class=\"list-group-item\" style=\"text-align:center; \">\r\n      <div style=\"font-family: Lato; \">\r\n\r\n        <img src=\"{{user.avatar_url}}\" alt=\"Avatar\" style=\"border-radius: 50%; width : 6%; height : 6%;border-width: 2px;border-style: solid;\" />\r\n        <font size=\"36\" style=\"padding-left: 1%; vertical-align:middle;\">{{user.name}} </font>\r\n      </div>\r\n      <!-- </td> -->\r\n      <!-- <td style=\"text-align: center; \" width=\"100%\"> -->\r\n      \r\n      <br>\r\n      <div style=\"margin-top: 8px\">\r\n        <table align = \"center\">\r\n          <td class = \"separation-between-buttons\">\r\n          <button type=\"button\" class=\"btn btn-default btn-circle\" (click)=\"linkedinClick(i)\"><i class=\"fab fa-linkedin-in\"></i></button>\r\n        </td>\r\n        <td class = \"separation-between-buttons\">\r\n          <button type=\"button\" class=\"btn btn-default btn-circle\" (click)=\"githubClick(i)\"><i class=\"fab fa-github\"></i></button>\r\n        </td>\r\n        <td class = \"separation-between-buttons\">\r\n          <button type=\"button\" class=\"btn btn-default btn-circle\" (click)=\"like(i)\"><i class=\"far fa-heart\"></i></button>\r\n        </td>\r\n        <td class = \"separation-between-buttons\">\r\n          <button type=\"button\" class=\"btn btn-default btn-circle\" (click)=\"dislike(i)\"><i class=\"fas fa-times\"></i></button>\r\n        </td>\r\n        <td>\r\n          <button type=\"button\" class=\"btn btn-default btn-circle\" (click)=\"message(i)\"><i class=\"far fa-comment\"></i></button>\r\n        </td>\r\n\r\n        </table>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</span>\r\n\r\n<span *ngIf=\"hide\">\r\n  <app-github-card [username]=\"username\" (messageEvent)=\"receiveMessage($event)\"></app-github-card>\r\n</span>\r\n\r\n<span *ngIf=\"showChat\">\r\n    <app-chatbox [myUserName]=\"myUserName\" [targetUsername]=\"username\" ></app-chatbox>\r\n</span>"

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
        this.hide = false;
        this.userList = [];
        this.myUserName = "";
        this.oauthToken = "";
        this.username = "";
        this.showChat = false;
    }
    UserSelectionComponent.prototype.ngOnInit = function () {
        var xhr = new XMLHttpRequest();
        var self = this;
        xhr.open('GET', '/api/getMyUserName', true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                self.myUserName = JSON.parse(xhr.responseText).username;
            }
        };
        xhr.send();
        debugger;
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
        this.showChat = false; //this may seem stupid, but it refreshes component so that socket connection is established again
        this.showChat = true;
    };
    UserSelectionComponent.prototype.githubClick = function (index) {
        debugger;
        this.username = this.userList[index].username;
        console.log("github");
        debugger;
        // window.location.replace("http://localhost:4200/linke/");
        var self = this;
        self.hide = true;
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
        window.open("https://www.linkedin.com/in/" + this.userList[index].linkedinProfileName);
    };
    UserSelectionComponent.prototype.receiveMessage = function ($event) {
        debugger;
        this.hide = $event;
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

module.exports = __webpack_require__(/*! C:\Users\John\desktop\EventConnect\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 3:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map