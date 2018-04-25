webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Dropdown Structure -->\n<app-info-message></app-info-message>\n<ul id=\"dropdown1\" class=\"dropdown-content\" (mouseleave)=\"hiddenDropDown()\">\n  <li><a routerLink=\"usersSettings\" class=\"collection-item\">Пользователи</a></li>\n  <li><a routerLink=\"projectSettings\" class=\"collection-item\">Проекты</a></li>\n  <li><a routerLink=\"roleSetings\" class=\"collection-item\">Роли</a></li>\n  <!--<li class=\"divider\"></li>  это подчеркивание -->\n</ul>\n  <nav>\n    <div class=\"nav-wrapper row\">\n      <div class=\"nav-wrapper-child col s8\">\n        <a href=\"#\" id=\"brand-logo\">TFS18 tracker</a>\n        <app-tomato *ngIf=\"isAuth\"></app-tomato>\n      </div>\n      <ul class=\"right hide-on-med-and-down\" *ngIf=\"isAuth\">\n        <li><a routerLink=\"\">Главная</a></li>\n        <!-- <li><a routerLink=\"settings\">Настройка</a></li> -->\n        <!-- Dropdown Trigger -->\n        <li><a class=\"dropdown-trigger\" href=\"#\" (mouseover)=\"showDroprown()\">Настройки<i class=\"material-icons right\">arrow_drop_down</i></a></li>\n      </ul>\n    </div>\n  </nav>\n<div class=\"сontainer\">\n  <router-outlet></router-outlet>  \n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.сontainer {\n  padding: 40px;\n  position: relative; }\n.dropdown-content {\n  opacity: 100;\n  left: auto;\n  right: 0px; }\n.brand-logo {\n  padding-left: 10px; }\n.nav-wrapper-child {\n  max-width: 60%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n#brand-logo {\n  position: relative;\n  color: #fff;\n  display: inline-block;\n  font-size: 2.1rem;\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("./src/app/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        localStorage.getItem('tfs18') ? this.isAuth = true : this.isAuth = false;
    };
    AppComponent.prototype.showDroprown = function () {
        document.querySelector('#dropdown1').setAttribute('style', 'display: block');
        console.log('!');
    };
    AppComponent.prototype.hiddenDropDown = function () {
        document.querySelector('#dropdown1').setAttribute('style', 'display: none');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hover_directive__ = __webpack_require__("./src/app/hover.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_pipe__ = __webpack_require__("./src/app/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_page_home_page_component__ = __webpack_require__("./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__setup_page_setup_page_component__ = __webpack_require__("./src/app/setup-page/setup-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_page_login_page_component__ = __webpack_require__("./src/app/components/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_settings_settings_page_settings_page_component__ = __webpack_require__("./src/app/components/settings/settings-page/settings-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_project_list_project_list_component__ = __webpack_require__("./src/app/components/project-list/project-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_tomato_tomato_component__ = __webpack_require__("./src/app/components/tomato/tomato.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__help_data__ = __webpack_require__("./src/app/help.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_task_list_task_list_component__ = __webpack_require__("./src/app/components/task-list/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_userReleaseTasks_pipe__ = __webpack_require__("./src/app/pipes/userReleaseTasks.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_userAllTasks_pipe__ = __webpack_require__("./src/app/pipes/userAllTasks.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_projectAllTasks_pipe__ = __webpack_require__("./src/app/pipes/projectAllTasks.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__routes_routes__ = __webpack_require__("./src/app/routes/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_settings_project_settings_page_project_settings_page_component__ = __webpack_require__("./src/app/components/settings/project-settings-page/project-settings-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_settings_role_settings_page_role_settings_page_component__ = __webpack_require__("./src/app/components/settings/role-settings-page/role-settings-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_settings_user_settings_page_user_settings_page_component__ = __webpack_require__("./src/app/components/settings/user-settings-page/user-settings-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__directives_settings_directive__ = __webpack_require__("./src/app/directives/settings.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_info_message_info_message_component__ = __webpack_require__("./src/app/components/info-message/info-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_msg_servise__ = __webpack_require__("./src/app/services/msg.servise.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_user_list_user_list_component__ = __webpack_require__("./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_input_errors_input_errors_component__ = __webpack_require__("./src/app/components/input-errors/input-errors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_addUserToProject_pipe__ = __webpack_require__("./src/app/pipes/addUserToProject.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pipes_activeProjects_pipe__ = __webpack_require__("./src/app/pipes/activeProjects.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_settings_task_settings_page_task_settings_page_component__ = __webpack_require__("./src/app/components/settings/task-settings-page/task-settings-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_cache_service__ = __webpack_require__("./src/app/services/cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_resove_service__ = __webpack_require__("./src/app/services/resove.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var routes = __WEBPACK_IMPORTED_MODULE_21__routes_routes__["a" /* AppRoutes */];
//  = [  
//   {path:  '', component: HomePageComponent, canActivate: [AuthGuard]},
//   {path:  'login',component: LoginPageComponent},
//   {path:  'settings', component: SettingsPageComponent, canActivate: [AuthGuard]} 
// ]
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_4__hover_directive__["a" /* HoverDirective */],
                __WEBPACK_IMPORTED_MODULE_25__directives_settings_directive__["a" /* SettingsDirective */],
                __WEBPACK_IMPORTED_MODULE_7__search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_userReleaseTasks_pipe__["a" /* userReleaseTasksPipe */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_userAllTasks_pipe__["a" /* userAllTasksPipe */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_projectAllTasks_pipe__["a" /* ProjectAllTasksPipe */],
                __WEBPACK_IMPORTED_MODULE_31__pipes_addUserToProject_pipe__["a" /* addUserToProjectPipe */],
                __WEBPACK_IMPORTED_MODULE_32__pipes_activeProjects_pipe__["a" /* activeProjectsPipe */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__setup_page_setup_page_component__["a" /* SetupPageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_settings_settings_page_settings_page_component__["a" /* SettingsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_project_list_project_list_component__["a" /* ProjectListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_task_list_task_list_component__["a" /* TaskListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_tomato_tomato_component__["a" /* TomatoComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_settings_project_settings_page_project_settings_page_component__["a" /* ProjectSettingsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_settings_role_settings_page_role_settings_page_component__["a" /* RoleSettingsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_settings_user_settings_page_user_settings_page_component__["a" /* UserSettingsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_info_message_info_message_component__["a" /* InfoMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_input_errors_input_errors_component__["a" /* InputErrorsComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_settings_task_settings_page_task_settings_page_component__["a" /* TaskSettingsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__help_data__["a" /* helpData */], __WEBPACK_IMPORTED_MODULE_27__services_msg_servise__["a" /* MsgService */], __WEBPACK_IMPORTED_MODULE_34__services_cache_service__["a" /* CacheService */], __WEBPACK_IMPORTED_MODULE_35__services_resove_service__["a" /* StartResolver */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s4\">\n      <div class=\"card blue-grey darken-1\">\n        <div class=\"card-content white-text\">\n          <span class=\"card-title\">Текущий релиз</span>    \n          <app-task-list *ngFor=\"let t of taskCollection\"> <!-- | allTasks: userId\" -->\n          [task] = \"t\"\n          ></app-task-list>\n        </div>\n        <div class=\"card-action\">          \n          <a href=\"#\">This is a link</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col s4\">\n      <div class=\"card blue-grey darken-1\">\n        <div class=\"card-content white-text\">\n          <span class=\"card-title\">Все задачи</span>    \n          <app-task-list *ngFor=\"let t of taskCollection\" > <!--  | releaseTasks: releaseId\"  -->\n          [task] = \"t\"\n          ></app-task-list>\n        </div>\n        <div class=\"card-action\">          \n          <a href=\"#\">This is a link</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col s4\">\n        <div class=\"card blue-grey darken-1\">\n          <div class=\"card-content white-text\">\n            <span class=\"card-title\">Помидорка</span>    \n            <app-tomato></app-tomato>\n          </div>\n          <div class=\"card-action\">          \n            <a href=\"#\">This is a link</a>\n          </div>\n        </div>\n      </div>    \n</div>\n  \n\n\n\n<!--<div class=\"row\">\n    <div class=\"input-field col s6\">\n      <input id=\"first_name2\" class=\"validate\" [(ngModel)]=\"searchStr\">\n      <label class=\"active\" for=\"first_name\">Поиск по имени</label>\n    </div>\n  </div>            \n  <div class=\"row\">\n    <app-user \n    *ngFor=\"let u of users | search:searchStr\"\n    [user]=\"u\"\n    ></app-user>    \n  </div>-->"

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.less":
/***/ (function(module, exports) {

module.exports = ".row {\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(postService) {
        this.postService = postService;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.taskCollection = [];
        this.taskCollection = this.postService.getTasks();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HomePageComponent.prototype, "project", void 0);
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("./src/app/components/home-page/home-page.component.html"),
            styles: [__webpack_require__("./src/app/components/home-page/home-page.component.less")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/components/info-message/info-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"msg\" class=\"hidden\">\n<div class=\"info-msg\">\n    <div class=\"msgHead\">{{msg.type}}\n    </div>\n    <div class=\"msgTitle\">{{msg.title}}\n    </div>\n    <div class=\"msgContent\">{{msg.discription}}\n    </div>\n    <div class=\"msgBtns\">\n    </div>\n    <div class=\"msgButtons\" *ngIf=\"(msg.type === 1 || msg.type === 3)\">\n        <a class=\"waves-effect waves-light btn\" (click)=\"this.msgService.setMsg(1, null, null); this.msgService.hiddenMsg()\">Ок</a>\n    </div>\n    <div class=\"row\" class=\"twoBtns\" *ngIf=\"msg.type==2\">\n        <div class=\"msgButtons\">\n            <a class=\"waves-effect waves-light btn\" (click)=\"msg.okFunc(); this.msgService.hiddenMsg()\">Ок</a>\n        </div>\n        <div class=\"msgButtons\">\n            <a class=\"waves-effect waves-light btn\" (click)=\"this.msgService.setMsg(1, null, null); this.msgService.hiddenMsg()\">Отмена</a>\n        </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/info-message/info-message.component.less":
/***/ (function(module, exports) {

module.exports = "#msg {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.3);\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  opacity: 1;\n  visibility: visible;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n#msg.hidden {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: opacity 0.3s, visibility 0s linear 0.3s;\n  transition: opacity 0.3s, visibility 0s linear 0.3s;\n}\np {\n  margin: auto;\n}\n.info-msg {\n  border-radius: 4px;\n  background-color: white;\n  width: 40%;\n  max-height: 40%;\n  margin: auto;\n  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  min-height: 250px;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.msgHead {\n  background-color: #cccccc;\n  padding: 5px 10px;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  min-height: 1em;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n}\n.msgTitle {\n  padding: 5px 20px;\n  min-height: 1em;\n  font-size: 2em;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n}\n.msgContent {\n  padding: 5px 20px;\n  overflow-y: auto;\n  max-height: 60%;\n  min-height: 30%;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  -webkit-box-flex: 2;\n      -ms-flex-positive: 2;\n          flex-grow: 2;\n}\n.msgButtons {\n  margin: auto;\n  padding: 10px 20px;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n}\n.msgButtons a {\n  width: 100px;\n}\n.twoBtns {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: auto;\n}\n"

/***/ }),

/***/ "./src/app/components/info-message/info-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_msg_servise__ = __webpack_require__("./src/app/services/msg.servise.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoMessageComponent = /** @class */ (function () {
    function InfoMessageComponent(msgService) {
        this.msgService = msgService;
        this.msg = this.msgService.getMsg();
    }
    InfoMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msg = this.msgService.msg.subscribe(function () { _this.msg = _this.msgService.getMsg().getValue(); });
    };
    InfoMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-info-message',
            template: __webpack_require__("./src/app/components/info-message/info-message.component.html"),
            styles: [__webpack_require__("./src/app/components/info-message/info-message.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_msg_servise__["a" /* MsgService */]])
    ], InfoMessageComponent);
    return InfoMessageComponent;
}());



/***/ }),

/***/ "./src/app/components/input-errors/input-errors.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"field.invalid && (field.dirty || field.touched)\"\n     class=\"alert alert-danger\">\n\n  <div *ngIf=\"field.errors.required\">\n    Поле обязательное\n  </div>\n  <div *ngIf=\"field.errors.minlength\">\n    Минимальная длина 4 символа\n  </div>\n  <div *ngIf=\"field.errors.password\">\n    Пароль не может начинаться с буквы Z\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/input-errors/input-errors.component.less":
/***/ (function(module, exports) {

module.exports = "div {\n  color: red;\n  padding-bottom: 10px;\n}\n"

/***/ }),

/***/ "./src/app/components/input-errors/input-errors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputErrorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputErrorsComponent = /** @class */ (function () {
    function InputErrorsComponent() {
    }
    InputErrorsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */])
    ], InputErrorsComponent.prototype, "field", void 0);
    InputErrorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-input-errors',
            template: __webpack_require__("./src/app/components/input-errors/input-errors.component.html"),
            styles: [__webpack_require__("./src/app/components/input-errors/input-errors.component.less")]
        })
    ], InputErrorsComponent);
    return InputErrorsComponent;
}());



/***/ }),

/***/ "./src/app/components/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <form action=\"#\" class=\"col s6\" name=\"loginForm\" [formGroup]=\"loginForm\" (submit)=\"sendLoginData(loginForm.value)\">\r\n        <div class=\"input-field\">      \r\n            <div class=\"input-field\">\r\n                <input id=\"login\" type=\"text\" formControlName=\"login\" name=\"login\">\r\n                <label class=\"active\" for=\"login\">Login</label>\r\n            </div>\r\n            <app-input-errors [field]=\"loginForm.get('login')\"></app-input-errors>\r\n            <div class=\"input-field\">\r\n                <input id=\"password\" type=\"password\" class=\"validate\" formControlName=\"password\" name=\"password\">\r\n                <label class=\"active\" for=\"password\">Password</label>\r\n            </div>\r\n            <app-input-errors [field]=\"loginForm.get('password')\"></app-input-errors>\r\n            <button class=\"btn btn-lg btn-primary btn-block\"\r\n                type=\"submit\"\r\n                [disabled]=\"loginForm.invalid || inProcess\" >Войти\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n<!-- <div class=\"authForm\">\r\n    <div class=\"row\">\r\n        <div class=\"input-field col s6\">\r\n            <input id=\"login\" type=\"text\">\r\n            <label class=\"active\" for=\"login\">Login</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"input-field col s6\">\r\n            <input id=\"password\" type=\"password\" class=\"validate\">\r\n            <label class=\"active\" for=\"password\">Password</label>\r\n        </div>\r\n    </div>\r\n</div>                 -->"

/***/ }),

/***/ "./src/app/components/login-page/login-page.component.less":
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-invalid {\n  border-color: red;\n}\ninput.ng-untouched.ng-valid {\n  border-color: #26a69a;\n}\n"

/***/ }),

/***/ "./src/app/components/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_passwordValidator__ = __webpack_require__("./src/app/validators/passwordValidator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(postService, fb) {
        this.postService = postService;
        this.fb = fb;
        this.inProcess = false;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            login: ["",
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required
                ]
            ],
            password: ["",
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__validators_passwordValidator__["a" /* CustomValidators */].checkPassword
                ]],
        });
    };
    LoginPageComponent.prototype.sendLoginData = function (obj) {
        this.postService.sendLoginData(obj.login, obj.password) ? location.replace("") : confirm("Неверный логин или пароль");
    };
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login-page',
            template: __webpack_require__("./src/app/components/login-page/login-page.component.html"),
            styles: [__webpack_require__("./src/app/components/login-page/login-page.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/components/project-list/project-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col l3 m12\">\n  <div class=\"card blue-grey darken-1\" id=\"{{project.id}}\" (click)=\"marked()\" [ngClass]=\"{'marked' : isMarked}\">\n    <div class=\"card-action\">          \n      <a (click) = \"openProject(project.id)\">{{project.name}}</a>\n    </div>\n    <div class=\"card-content white-text\">\n      <span class=\"card-title\" (click)=\"getProjectTasks(this.project.id)\">Таски</span>    \n      <app-task-list *ngFor=\"let t of taskCollection | projectAllTasks: project.id\"\n      [task] = \"t\"\n      ></app-task-list>\n    </div>    \n  </div>\n</div>\n          \n"

/***/ }),

/***/ "./src/app/components/project-list/project-list.component.less":
/***/ (function(module, exports) {

module.exports = ".marked {\n  z-index: 10;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n.card:hover {\n  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  -webkit-transition: .5s all;\n  transition: .5s all;\n  z-index: 10;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.card {\n  height: 200px;\n  width: 300px;\n  overflow: hidden;\n}\n.card-content {\n  height: 80%;\n  width: 100%;\n  overflow: hidden;\n  padding-top: 0px;\n}\n"

/***/ }),

/***/ "./src/app/components/project-list/project-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent(postService) {
        this.postService = postService;
        this.isMarked = false;
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        this.taskCollection = [];
        this.taskCollection = this.postService.getTasks();
    };
    ProjectListComponent.prototype.openProject = function (id) {
        location.replace(location.href + "/" + id);
    };
    ProjectListComponent.prototype.marked = function () {
        this.isMarked = !this.isMarked;
    };
    ProjectListComponent.prototype.getProjectTasks = function (id) {
        location.replace('tasks/' + id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ProjectListComponent.prototype, "project", void 0);
    ProjectListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project-list',
            template: __webpack_require__("./src/app/components/project-list/project-list.component.html"),
            styles: [__webpack_require__("./src/app/components/project-list/project-list.component.less")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/project-settings-page/project-settings-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-settings-page *ngIf=\"!projectId\"></app-settings-page>\n<div class=\"row\" *ngIf=\"!projectId\">\n  <app-project-list  \n  *ngFor=\"let p of projectCollection | activeProjects\"\n  [project] = \"p\"\n  ></app-project-list>\n</div>\n<div *ngIf=\"projectId\">\n  <div class=\"row col\">\n    <form class=\"col l8 s12\" name=\"projectForm\">     \n      <div class=\"row\">      \n        <div class=\"input-field col l6 s12\">\n          <input  [(ngModel)]=\"this.project.name\" value=\"{{project.name}}\" name=\"name\" id=\"first_name\" type=\"text\" class=\"validate\">\n          <label class=\"active\" for=\"first_name\">Наименование проекта</label>\n        </div>\n        <div class=\"input-field col l6 s12\">\n            <input disabled value=\"{{project.createdAt}}\" name=\"startDate\" id=\"start_date\" type=\"text\" class=\"validate\">\n            <label class=\"active\" for=\"start_date\">Дата создания</label>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"input-field col l6 s12\">\n            <select [(ngModel)]=\"this.project.defaultSprintLengthSec\" name=\"sprintLength\" style=\"display: block\" (ngModelChange)=\"setSprint($event)\">\n              <option value=\"604800\" name=\"oneweek\">Одна неделя</option>\n              <option value=\"1209600\" name=\"twoweeks\">Две недели</option>\n              <option value=\"1814400\" name=\"treeweeks\">Три недели</option>              \n            </select>\n            <label class=\"active\" for=\"disabled\">Длина спринта</label>\n          </div>\n        </div>\n      <div class=\"row\">\n        <div class=\"input-field col l6 s12\">\n          <input [(ngModel)]=\"this.project.id\" value=\"{{project.id}}\" name=\"id\" id=\"disabled\" type=\"text\" class=\"validate\">\n          <label class=\"active\" for=\"disabled\">Идентификатор проекта</label>\n        </div>\n      </div>\n      <div *ngIf=\"projectId ==='new'\">\n        <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\" (click)=\"createProject()\">Создать\n          <i class=\"material-icons right\">send</i>\n        </button>\n      </div>\n      <div *ngIf=\"projectId !=='new' \">\n        <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\" (click)=\"saveProject()\">Сохранить\n          <i class=\"material-icons right\">send</i>\n        </button>\n      </div>\n    </form>\n    <div class=\"table col l4 s12\">\n      <ul class=\"collection with-header\">\n          <li class=\"collection-header\">\n            <div><p>Пользователи</p></div>\n            <div class=\"settings\">\n              <a class=\"btn-edit btn-Small blue-grey darken-1\" (click)=\"selectUser()\"><i class=\"material-icons\">add</i></a>\n              <a class=\"btn-edit btn-Small blue-grey darken-1\"><i class=\"material-icons\">delete</i></a>\n              <a class=\"btn-edit btn-Small blue-grey darken-1\"><i class=\"material-icons\">edit</i></a>\n            </div>\n          </li>          \n          <app-user-list\n          *ngFor=\"let u of projectUsersCollection\" \n          [user] = \"u.userName\"\n          ></app-user-list>\n          <li class=\"addUser\" *ngIf=\"addUser\">\n            <select [(ngModel)]=\"user\" style=\"display: block\" (ngModelChange)=\"addUserToProject($event)\">\n              <option *ngFor=\"let u of allUsers | addUserToProject: projectUsersCollection\" [ngValue]=\"u\">{{u.userName}}</option>\n            </select>\n          </li>\n      </ul>      \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/settings/project-settings-page/project-settings-page.component.less":
/***/ (function(module, exports) {

module.exports = ".collection-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\na:hover {\n  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  -webkit-transition: .5s all;\n  transition: .5s all;\n  z-index: 10;\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n.btn-edit {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  width: 30px;\n  height: 30px;\n  line-height: 35px;\n  padding: 0;\n  background-color: #26a69a;\n  border-radius: 10%;\n  -webkit-transition: background-color 0.3s;\n  transition: background-color 0.3s;\n  cursor: pointer;\n  vertical-align: middle;\n  opacity: 0.5;\n  margin: 0px 3px;\n}\n.btn-edit i {\n  margin: auto;\n}\n.collection-header p {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n  font-size: 2.1rem;\n  margin: 0px;\n  color: #546e7a;\n}\n.addUser select {\n  display: block;\n  padding: 0px 30px;\n  color: #26a69a;\n}\n.input-field select {\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n}\n.input-field select:focus {\n  outline-width: 0px;\n  border-bottom: 1px solid #26a69a;\n  -webkit-box-shadow: 0 1px 0 0 #26a69a;\n          box-shadow: 0 1px 0 0 #26a69a;\n}\n.input-field option:hover {\n  background-color: #9e9e9e;\n  color: #26a69a;\n}\n.input-field option {\n  color: #26a69a;\n  border-color: #9e9e9e;\n}\n"

/***/ }),

/***/ "./src/app/components/settings/project-settings-page/project-settings-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectSettingsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_project_model__ = __webpack_require__("./src/app/model/project.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectSettingsPageComponent = /** @class */ (function () {
    function ProjectSettingsPageComponent(postService, route) {
        this.postService = postService;
        this.route = route;
        this.project = new __WEBPACK_IMPORTED_MODULE_3__model_project_model__["a" /* Project */]();
        this.addUser = false;
    }
    ProjectSettingsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectUsersCollection = [];
        this.route.paramMap.subscribe(function (params) {
            _this.projectId = params.get('projectId');
        });
        if (this.projectId !== null) {
            if (this.projectId === "new") {
                this.project = new __WEBPACK_IMPORTED_MODULE_3__model_project_model__["a" /* Project */]();
                this.postService.getMe().subscribe(function (data) { return _this.projectUsersCollection.push(data); });
            }
            else {
                this.postService.getProjectById(this.projectId).subscribe(function (data) { return _this.project = data; });
                this.postService.getProjectUsers(this.projectId).subscribe(function (data) { return _this.projectUsersCollection = data.map(function (res) { return res.user; }); });
                ;
            }
        }
        else {
            this.projectCollection = this.postService.getProjectCollection();
            console.log(this.projectCollection);
        }
    };
    ProjectSettingsPageComponent.prototype.selectUser = function () {
        var _this = this;
        this.postService.getAllUsers().subscribe(function (users) { _this.allUsers = users; _this.addUser = true; });
    };
    ProjectSettingsPageComponent.prototype.addUserToProject = function (event) {
        this.projectUsersCollection.push(event);
        this.selectUser();
    };
    ProjectSettingsPageComponent.prototype.setSprint = function (sec) {
        this.project.defaultSprintLengthSec = sec;
    };
    ProjectSettingsPageComponent.prototype.createProject = function () {
        this.postService.createProject(this.project, this.projectUsersCollection);
    };
    ProjectSettingsPageComponent.prototype.saveProject = function () {
        this.postService.saveProject(this.project);
    };
    ProjectSettingsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project-settings-page',
            template: __webpack_require__("./src/app/components/settings/project-settings-page/project-settings-page.component.html"),
            styles: [__webpack_require__("./src/app/components/settings/project-settings-page/project-settings-page.component.less")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProjectSettingsPageComponent);
    return ProjectSettingsPageComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/role-settings-page/role-settings-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  role-settings-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/settings/role-settings-page/role-settings-page.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/settings/role-settings-page/role-settings-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleSettingsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoleSettingsPageComponent = /** @class */ (function () {
    function RoleSettingsPageComponent() {
    }
    RoleSettingsPageComponent.prototype.ngOnInit = function () {
    };
    RoleSettingsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-role-settings-page',
            template: __webpack_require__("./src/app/components/settings/role-settings-page/role-settings-page.component.html"),
            styles: [__webpack_require__("./src/app/components/settings/role-settings-page/role-settings-page.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], RoleSettingsPageComponent);
    return RoleSettingsPageComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings-page/settings-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"settings\">\n  <a class=\"btn-floating btn-Small waves-effect waves-light blue-grey darken-1\"><i class=\"material-icons\" routerLink=\"[location.href + '/'],['new']\"(click)=\"add()\">add</i></a>\n  <a class=\"btn-floating btn-Small waves-effect waves-light blue-grey darken-1\"><i class=\"material-icons\" (click)=\"deleteMsg()\">delete</i></a>\n  <a class=\"btn-floating btn-Small waves-effect waves-light blue-grey darken-1\"><i class=\"material-icons\" (click)=\"edit()\">edit</i></a>\n  <a class=\"btn-floating btn-Small waves-effect waves-light blue-grey darken-1\"><i class=\"material-icons\" (click)=\"archiveMsg()\">archive</i></a>\n</div>"

/***/ }),

/***/ "./src/app/components/settings/settings-page/settings-page.component.less":
/***/ (function(module, exports) {

module.exports = ".settings {\n  width: 100%;\n  max-height: 80px;\n  min-height: 30px;\n  background-color: #546e7a80;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-right: 10px;\n}\n.btn-floating {\n  background-color: black;\n  border-radius: 10%;\n}\n.settings .btn-floating i {\n  height: 18px;\n  width: 18px;\n  text-align: center;\n  line-height: 18px;\n  font-size: 1em;\n}\n.settings a.btn-floating {\n  height: 18px;\n  width: 30px;\n  margin: 0px 5px;\n  opacity: 0.9;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\na:hover {\n  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  -webkit-transition: .5s all;\n  transition: .5s all;\n  z-index: 10;\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n"

/***/ }),

/***/ "./src/app/components/settings/settings-page/settings-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_msg_servise__ = __webpack_require__("./src/app/services/msg.servise.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPageComponent = /** @class */ (function () {
    function SettingsPageComponent(router, ms, postService) {
        this.router = router;
        this.ms = ms;
        this.postService = postService;
    }
    SettingsPageComponent.prototype.ngOnInit = function () {
    };
    SettingsPageComponent.prototype.add = function () {
        location.replace(this.getRoute() + '/new');
    };
    SettingsPageComponent.prototype.archiveMsg = function () {
        var _this = this;
        this.ms.setMsg(2, "Архивировать", "Уверены, что хотите перенести в архив эти объекты?", (function () { return _this.archive.apply(_this); }));
        this.ms.showMsg();
    };
    SettingsPageComponent.prototype.archive = function () {
        var elements = document.querySelectorAll(".marked");
        for (var i = 0; i < elements.length; i++) {
            if (this.postService.archiveProject(elements[i].id))
                elements[i].remove();
            ;
        }
        return;
    };
    SettingsPageComponent.prototype.edit = function () {
        location.replace(location.href + "/" + document.querySelector(".marked").id);
    };
    SettingsPageComponent.prototype.deleteMsg = function () {
        var _this = this;
        this.ms.setMsg(2, "Удалить", "Уверены, что хотите удалить эти объекты?", (function () { return _this.delete.apply(_this); }));
        this.ms.showMsg();
    };
    SettingsPageComponent.prototype.delete = function () {
        var elements = document.querySelectorAll(".marked");
        var delFunc;
        switch (this.getObject()) {
            case 'project':
                this.ms.setMsg(1, "Удалить", "Проекты удалять нельзя. Перенесите в архив", null);
                this.ms.showMsg();
                break;
            case 'user':
                for (var i = 0; i < elements.length; i++) {
                    if (this.postService.deleteUser(elements[i].id))
                        elements[i].remove();
                }
                break;
            case 'task':
                // delFunc = this.postService.deleteTask();
                break;
        }
    };
    SettingsPageComponent.prototype.getRoute = function () {
        return this.router.url;
    };
    SettingsPageComponent.prototype.getObject = function () {
        switch (this.router.url) {
            case '/projectSettings':
                return ('project');
            case '/usersSettings':
                return ('user');
            case '/taskSettings':
                return ('task');
            default:
                return (null);
        }
    };
    SettingsPageComponent.prototype.getMarked = function () {
        return document.querySelectorAll(".marked");
    };
    SettingsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings-page',
            template: __webpack_require__("./src/app/components/settings/settings-page/settings-page.component.html"),
            styles: [__webpack_require__("./src/app/components/settings/settings-page/settings-page.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_msg_servise__["a" /* MsgService */], __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]])
    ], SettingsPageComponent);
    return SettingsPageComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/task-settings-page/task-settings-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-settings-page *ngIf=\"!taskId\"></app-settings-page>\n<div class=\"row\" *ngIf=\"!taskId\"> \n  <p *ngIf=\"!taskCollection.length\">Нет доступных задач</p>   \n    <app-user-list  \n    *ngFor=\"let t of taskCollection | projectAllTasks : projectId\"\n    [user] = \"t\"\n    ></app-user-list>\n</div>\n<div *ngIf=\"taskId\">\n  <div class=\"row\">\n      <form class=\"col s12\" [formGroup]=\"form\" (submit)=\"onSubmit(form.value)\">\n        <div class=\"row\">\n          <div class=\"input-field col s6\">\n            <input formControlName=\"name\" id=\"name\" type=\"text\" class=\"validate\">\n            <label class=\"active\" for=\"name\">Наименование</label>\n          </div>\n          <div class=\"input-field col s6\">\n            <input formControlName=\"id\" id=\"id\" type=\"text\" class=\"validate\">\n            <label class=\"active\" for=\"id\">Идентификатор</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s6\">\n            <input formControlName=\"subject\" id=\"subject\" type=\"text\" class=\"validate\">\n            <label class=\"active\" for=\"subject\">Предмет</label>\n          </div>\n          <div class=\"input-field col s6\">\n            <input formControlName=\"status\" id=\"status\" type=\"text\" class=\"validate\">\n            <label class=\"active\" for=\"status\">Статус</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s6\">\n            <input formControlName=\"description\" id=\"description\" type=\"text\" class=\"validate\">\n            <label class=\"active\" for=\"description\">Описание</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s6\">\n            <input formControlName=\"projectId\" value ={{projectId}} id=\"projectId\" type=\"text\" class=\"validate\">\n            <label class=\"active\" for=\"projectId\">Проект</label>\n          </div>\n          <div class=\"input-field col s6\">\n            <input formControlName=\"sprintId\" id=\"sprintId\" type=\"text\" class=\"validate\">\n            <label class=\"active\" for=\"sprintId\">Спринт</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s6\">\n            <input formControlName=\"priority\" id=\"priority\" type=\"text\" class=\"validate\">\n            <label class=\"active\" for=\"priority\">Приоритет</label>\n          </div>\n          <div class=\"input-field col s6\">\n            <input formControlName=\"estimateTimeSec\" id=\"estimateTimeSec\" type=\"text\" class=\"validate\">\n            <label class=\"active\" for=\"estimateTimeSec\">Предположительно затрат</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s6\">\n            <input formControlName=\"executor\" id=\"executor\" type=\"text\" class=\"validate\">\n            <label class=\"active\" for=\"executor\">Исполнитель</label>\n          </div>\n          <div class=\"input-field col s6\">\n            <input formControlName=\"creator\" id=\"creator\" type=\"text\" class=\"validate\">\n            <label class=\"active\" for=\"creator\">Создал</label>\n          </div>\n        </div>\n        <button *ngIf=\"taskId == 'new'\" class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\" (click)=\"createTask(form.value)\">Создать\n          <i class=\"material-icons right\">send</i>\n        </button>  \n        <button *ngIf=\"taskId != 'new'\" class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\" (click)=\"saveTask(form.value)\">Сохранить\n          <i class=\"material-icons right\">send</i>\n        </button>               \n      </form>   \n    </div>\n</div>            "

/***/ }),

/***/ "./src/app/components/settings/task-settings-page/task-settings-page.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/settings/task-settings-page/task-settings-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_msg_servise__ = __webpack_require__("./src/app/services/msg.servise.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_task_model__ = __webpack_require__("./src/app/model/task.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskSettingsComponent = /** @class */ (function () {
    function TaskSettingsComponent(postService, msgServise, route, fb) {
        this.postService = postService;
        this.msgServise = msgServise;
        this.route = route;
        this.fb = fb;
    }
    TaskSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskCollection = [];
        this.postService.getMe().subscribe(function (data) { return _this.userId = data.id; });
        this.route.paramMap.subscribe(function (params) {
            _this.projectId = params.get('projectId');
            _this.taskId = params.get('taskId');
            ;
        });
        if (this.taskId === "new") {
            this.task = new __WEBPACK_IMPORTED_MODULE_4__model_task_model__["a" /* Task */]();
        }
        else {
            this.taskCollection = this.postService.getTasks();
        }
        this.form = this.createForm();
    };
    TaskSettingsComponent.prototype.createTask = function (task) {
        task.executorId = this.userId;
        this.postService.createTask(task);
    };
    TaskSettingsComponent.prototype.saveTask = function (task) {
        console.log(task);
        this.postService.saveTask(task);
    };
    TaskSettingsComponent.prototype.onSubmit = function () {
        // this.postService.saveTask();
    };
    TaskSettingsComponent.prototype.createForm = function () {
        return this.fb.group({
            name: [this.task.name, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            id: [this.task.id],
            subject: [this.task.subject],
            description: [this.task.description],
            status: [this.task.status],
            priority: [this.task.priority],
            sprintId: [this.task.sprintId],
            projectId: [this.projectId],
            estimateTimeSec: [this.task.estimateTimeSec],
            executor: [this.task.executor.userName],
            creator: [this.task.creator.userName]
            // executor  : [{ 
            //           id: this.task.executor.id,
            //           userName: this.task.executor.userName,
            //           firstName: this.task.executor.firstName,
            //           lastName: this.task.executor.lastName,
            //           email: this.task.executor.email
            //         }],
            // creator : [{
            //           id: this.task.creator.id,
            //           userName: this.task.creator.userName,
            //           firstName: this.task.creator.firstName,
            //           lastName: this.task.creator.lastName,
            //           email: this.task.creator.email
            //         }]
        });
    };
    TaskSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task-settings-page',
            template: __webpack_require__("./src/app/components/settings/task-settings-page/task-settings-page.component.html"),
            styles: [__webpack_require__("./src/app/components/settings/task-settings-page/task-settings-page.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_2__services_msg_servise__["a" /* MsgService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], TaskSettingsComponent);
    return TaskSettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/user-settings-page/user-settings-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s3\">\n    <ul class=\"collection with-header\">\n      <div class=\"collection-header\"><h4>Рабочие часы в спринт</h4></div>\n      <div class=\"collection-item\">\n        <div>\n          <!--<input *ngFor=\"let p of projectTimeCollection\" [ngValue]=\"p.time\">{{p.name}}-->\n          <label>Проект1</label>\n          <input value=\"количество часов\" (change)=\"console.log(value)\" >          \n        </div>      \n        <div>\n          <label>Проект2</label>      \n          <input value=\"количество часов\">          \n        </div>\n        <div>          \n          <label>Проект3</label>\n          <input value=\"количество часов\">      \n        </div>\n      </div>\n    </ul>\n  </div>\n</div>\n<app-settings-page *ngIf=\"!userId\"></app-settings-page>\n<div class=\"row\" *ngIf=\"!userId\">    \n  <app-user-list  \n  *ngFor=\"let u of userCollection\"\n  [user] = \"u\"\n  ></app-user-list>\n</div>\n<div *ngIf=\"userId\">\n<div class=\"row\">  \n  <form class=\"col s8\">    \n    <div class=\"row\">      \n      <div class=\"input-field col s4\">\n        <input [(ngModel)]=\"this.user.firstName\" id=\"first_name\" name=\"firstName\" type=\"text\" class=\"validate\">\n        <label class=\"active\" for=\"first_name\">Имя</label>\n      </div>\n      <div class=\"input-field col s4\">\n        <input [(ngModel)]=\"this.user.lastName\" id=\"last_name\"  name=\"lastName\" type=\"text\" class=\"validate\">\n        <label class=\"active\" for=\"last_name\">Фамилия</label>\n      </div>\n    </div>    \n    <div class=\"row\">\n      <div class=\"input-field col s4\">\n        <input [(ngModel)]=\"this.user.userName\"id=\"login\" type=\"text\"  name=\"login\" class=\"validate\">\n        <label class=\"active\" for=\"login\">Логин</label>\n      </div>\n      <div class=\"input-field col s4\">\n          <input [(ngModel)]=\"this.user.password\"id=\"password\" type=\"password\" name=\"password\" class=\"validate\" placeholder=\"******\">\n          <label class=\"active\" for=\"password\">Пароль</label>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"userId != 'new'\">  \n        <div class=\"input-field col s4\"></div>      \n        <div class=\"input-field col s4\">\n            <input [(ngModel)]=\"this.user.newPassword\" id=\"newPassword\" type=\"password\" name=\"newPassword\" class=\"validate\" >\n            <label class=\"active\" for=\"newPassword\">Новый пароль</label>\n          </div>\n      </div>\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input [(ngModel)]=\"this.user.email\" name=\"email\" id=\"email\" type=\"email\" class=\"validate\">\n        <label class=\"active\" for=\"email\">Email</label>\n      </div>\n      <div class=\"input-field col s2\">\n          <input [(ngModel)]=\"this.user.phoneNumber\" name=\"phoneNumber\" id=\"phone\" type=\"text\" class=\"validate\">\n          <label class=\"active\" for=\"phoneNumber\">Телефон</label>\n        </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s4\">\n        <input [(ngModel)]=\"this.user.birthday\" name=\"birthday\" id=\"birthday\" type=\"text\" class=\"validate\">\n        <label class=\"active\" for=\"birthday\">День рождения</label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s4\">\n          <input disabled  name=\"role\" id=\"role\" type=\"text\" class=\"validate\">\n          <label class=\"active\" for=\"role\">Роль</label>\n        </div>\n    </div>\n    <button *ngIf=\"userId == 'new'\" class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\" (click)=\"createUser()\">Создать\n      <i class=\"material-icons right\">send</i>\n    </button>  \n    <button *ngIf=\"userId != 'new'\" class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\" (click)=\"saveUser()\">Сохранить\n      <i class=\"material-icons right\">send</i>\n    </button>      \n  </form>\n  <div class=\"col s3\">\n    <div class=\"card\">\n      <div class=\"card-image\">\n        <img src=\"{{user.avatarUri}}\">        \n      </div>      \n      <div class=\"card-action\">\n        <a (click)=\"showInputAvatar()\">Сменить аватар</a>\n        <input [(ngModel)]=\"this.user.avatarUri\" *ngIf=\"inputAvatar\" name=\"avatarUri\" id=\"avatarUri\" type=\"text\" (blur)=\"showInputAvatar()\">\n      </div>\n    </div>\n  </div>\n  <div class=\"col s3\">\n    <ul class=\"collection with-header\">\n      <div class=\"collection-header\"><h4>Рабочие часы в спринт</h4></div>\n      <div class=\"collection-item\">\n        <div *ngFor=\"let p of projectTimeCollection\">\n          <input value=\"p.time\" (change)=\"setTime(p.id, p.value)\"><label>{{p.name}}</label>          \n        </div>\n      </div>      \n    </ul>              \n  </div>\n</div>\n            "

/***/ }),

/***/ "./src/app/components/settings/user-settings-page/user-settings-page.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/settings/user-settings-page/user-settings-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_msg_servise__ = __webpack_require__("./src/app/services/msg.servise.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_user_model__ = __webpack_require__("./src/app/model/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserSettingsPageComponent = /** @class */ (function () {
    function UserSettingsPageComponent(postService, msgServise, route) {
        this.postService = postService;
        this.msgServise = msgServise;
        this.route = route;
        this.inputAvatar = false;
    }
    UserSettingsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.userId = params.get('userId');
        });
        if (this.userId !== null) {
            if (this.userId === "new") {
                this.user = new __WEBPACK_IMPORTED_MODULE_4__model_user_model__["a" /* User */]();
            }
            else {
                this.postService.getUserById(this.userId).subscribe(function (data) { return _this.user = data; });
                this.projectCollection = this.postService.getProjectCollection();
            }
        }
        else {
            this.userCollection = this.postService.getUserCollection();
        }
    };
    UserSettingsPageComponent.prototype.createUser = function () {
        this.postService.createUser(this.user);
    };
    UserSettingsPageComponent.prototype.saveUser = function () {
        this.postService.saveUser(this.user);
    };
    UserSettingsPageComponent.prototype.showInputAvatar = function () {
        this.inputAvatar = !this.inputAvatar;
    };
    UserSettingsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-settings-page',
            template: __webpack_require__("./src/app/components/settings/user-settings-page/user-settings-page.component.html"),
            styles: [__webpack_require__("./src/app/components/settings/user-settings-page/user-settings-page.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_2__services_msg_servise__["a" /* MsgService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], UserSettingsPageComponent);
    return UserSettingsPageComponent;
}());



/***/ }),

/***/ "./src/app/components/task-list/task-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-settings-page *ngIf=\"projectId\"></app-settings-page>\n<div class=\"row\" *ngIf=\"projectId\">    \n  <p>task</p>\n</div>\n<div *ngIf=\"!projectId\">  \n  <p>task</p>  \n</div>"

/***/ }),

/***/ "./src/app/components/task-list/task-list.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/task-list/task-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(postService) {
        this.postService = postService;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.taskCollection = this.postService.getTasks();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TaskListComponent.prototype, "task", void 0);
    TaskListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task-list',
            template: __webpack_require__("./src/app/components/task-list/task-list.component.html"),
            styles: [__webpack_require__("./src/app/components/task-list/task-list.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "./src/app/components/tomato/tomato.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tomato-bar\">\n  <div>\n    <i class=\"medium material-icons right\">play_arrow</i>\n  </div>\n  <div class=\"tomato-task-id\">Номер задачи</div>\n  <div class=\"timestamp\">00:00:00</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tomato/tomato.component.less":
/***/ (function(module, exports) {

module.exports = ".tomato-bar {\n  margin: 0px 30px;\n  padding: 0px 5px;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.tomato-bar div:first-child {\n  border-left: solid white 1px;\n  margin: 0px;\n}\n.tomato-bar i {\n  padding: 0 10px;\n  margin: 0px;\n  width: 100%;\n}\ni:hover,\n.tomato-task-id:hover {\n  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  -webkit-transition: .5s all;\n  transition: .5s all;\n  z-index: 10;\n}\n.tomato-bar > div:last-child {\n  border-right: solid white 1px;\n  margin: 0px;\n  max-width: 35%;\n}\n.tomato-bar > div {\n  padding: 0 10px;\n}\n.tomato-bar > :first-child {\n  padding: 0px;\n}\n.tomato-task-id {\n  min-width: 180px;\n}\n"

/***/ }),

/***/ "./src/app/components/tomato/tomato.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TomatoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TomatoComponent = /** @class */ (function () {
    function TomatoComponent() {
    }
    TomatoComponent.prototype.ngOnInit = function () {
    };
    TomatoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tomato',
            template: __webpack_require__("./src/app/components/tomato/tomato.component.html"),
            styles: [__webpack_require__("./src/app/components/tomato/tomato.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], TomatoComponent);
    return TomatoComponent;
}());



/***/ }),

/***/ "./src/app/components/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='settings'*ngIf=\"usersSettingsWindow\">\n    <div class=\"col l2 m6\">\n        <div class=\"card\" id=\"{{user.id}}\" (click)=\"marked()\" [ngClass]=\"{'marked' : isMarked}\">\n            <div class=\"card-image\">\n                <img src=\"{{user.avatarUri}}\">                \n            </div>            \n            <div class=\"card-action\">\n                <a (click) = \"openUser(user.id)\">{{user.userName}}</a>\n            </div>\n        </div>\n    </div>\n</div>\n<div class='list' *ngIf=\"!usersSettingsWindow\">\n    <a class=\"collection-item cust\">{{user}}</a>\n</div>\n \n\n"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.less":
/***/ (function(module, exports) {

module.exports = "a.collection-item.cust {\n  border-bottom: solid !important;\n  border-width: 1px !important;\n  border-color: #ccc !important;\n}\na:last-child {\n  border-bottom: none !important;\n}\n.marked {\n  z-index: 10;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n.card:hover {\n  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  -webkit-transition: .5s all;\n  transition: .5s all;\n  z-index: 10;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.card {\n  height: 250px;\n  width: auto;\n}\n.card-image {\n  height: 75%;\n  overflow: hidden;\n}\n.card-image img {\n  max-height: 200px;\n  width: auto;\n  margin: auto;\n}\n"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListComponent = /** @class */ (function () {
    function UserListComponent(router) {
        this.router = router;
        this.isMarked = false;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.router.url == '/usersSettings' ? this.usersSettingsWindow = true : this.usersSettingsWindow = false;
    };
    UserListComponent.prototype.openUser = function (id) {
        location.replace(location.href + "/" + id);
    };
    UserListComponent.prototype.marked = function () {
        this.isMarked = !this.isMarked;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserListComponent.prototype, "user", void 0);
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-list',
            template: __webpack_require__("./src/app/components/user-list/user-list.component.html"),
            styles: [__webpack_require__("./src/app/components/user-list/user-list.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/directives/settings.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsDirective = /** @class */ (function () {
    function SettingsDirective() {
        this.isHover = false; // привязка свойства к переменной
    }
    SettingsDirective.prototype.onmouseenter = function () {
        this.isHover = true;
    };
    SettingsDirective.prototype.onmouseleave = function () {
        this.isHover = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.settingsHovered'),
        __metadata("design:type", Object)
    ], SettingsDirective.prototype, "isHover", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SettingsDirective.prototype, "onmouseenter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SettingsDirective.prototype, "onmouseleave", null);
    SettingsDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appSettings]' // appHover- атрибут в DOM дереве
        })
    ], SettingsDirective);
    return SettingsDirective;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var AuthGuard = /** @class */ (function () {
    function AuthGuard() {
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!localStorage.getItem('tfs18')) {
            if (document.location.pathname !== "/login")
                document.location.replace("login");
        }
        ;
        return !!localStorage.getItem('tfs18');
    };
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/help.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return helpData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var helpData = /** @class */ (function () {
    function helpData() {
        this.projects = [
            {
                id: '1',
                name: "Проект1",
                dateStart: "07.04.2018",
                dateFinish: null,
                relise: "10.04.2018",
                oldRelises: [],
                discription: "Первый проект, отбражается так то",
                users: ["maximec", "kirill", "some_guy", "ivan_gay", "katty_perry"]
            },
            {
                id: '2',
                name: "Проект2",
                dateStart: "06.04.2018",
                dateFinish: null,
                relise: "12.04.2018",
                oldRelises: [],
                discription: "второй проект, отбражается так то",
                users: ["maximec"]
            },
            {
                id: '3',
                name: "Проект3",
                dateStart: "05.04.2018",
                dateFinish: null,
                relise: "13.04.2018",
                oldRelises: [],
                discription: "третий проект, отбражается так то",
                users: ["maximec"]
            }
        ];
        this.tasks = [
            {
                id: 1,
                name: "Таск 1",
                discription: "Тяжелая таска",
                lead: "maximec",
                project: "1",
                status: "open"
            },
            {
                id: 2,
                name: "Таск 2",
                discription: "Тяжелая таска",
                lead: "maximec",
                project: "1",
                status: "open"
            },
            {
                id: 3,
                name: "Таск 3",
                discription: "Тяжелая таска",
                lead: "maximec",
                project: "1",
                status: "open"
            },
            {
                id: 4,
                name: "Таск 4",
                discription: "Тяжелая таска",
                lead: "maximec",
                project: "2",
                status: "open"
            },
            {
                id: 5,
                name: "Таск 5",
                discription: "Тяжелая таска",
                lead: "maximec",
                project: "2",
                status: "open"
            }
        ];
        this.release = [1, 3, 4];
        this.userData = {
            id: "1",
            login: "maximec",
            roleId: "1",
            firstName: "Юлия",
            lastName: "Максимович",
            birthday: "24.06.1993",
            status: 1,
            email: "maximec2406@mail.ru",
            phone: "+79112223344"
        };
    }
    helpData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], helpData);
    return helpData;
}());



/***/ }),

/***/ "./src/app/hover.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoverDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HoverDirective = /** @class */ (function () {
    function HoverDirective() {
        this.isHover = false; // привязка свойства к переменной
    }
    HoverDirective.prototype.onmouseenter = function () {
        this.isHover = true;
    };
    HoverDirective.prototype.onmouseleave = function () {
        this.isHover = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.hovered'),
        __metadata("design:type", Object)
    ], HoverDirective.prototype, "isHover", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HoverDirective.prototype, "onmouseenter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HoverDirective.prototype, "onmouseleave", null);
    HoverDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appHover]' // appHover- атрибут в DOM дереве
        })
    ], HoverDirective);
    return HoverDirective;
}());



/***/ }),

/***/ "./src/app/model/msg.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoMsg; });
var InfoMsg = /** @class */ (function () {
    function InfoMsg(type, title, discription, func) {
        this.INFO = 1;
        this.WARNING = 2;
        this.ERROR = 3;
        this.MSG_TYPES = [1, 2, 3];
        if (this.MSG_TYPES.includes(type)) {
            this.type = type;
            this.title = title;
            this.discription = discription;
            this.okFunc = func;
        }
    }
    return InfoMsg;
}());



/***/ }),

/***/ "./src/app/model/project.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
        this.name = null;
        this.id = null;
        this.defaultSprintLengthSec = null;
        this.archivedAt = null;
        this.users = null;
        this.createdAt = null;
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/model/task.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = /** @class */ (function () {
    function Task() {
        {
            this.id = null;
            this.subject = null;
            this.description = null;
            this.status = null;
            this.priority = null;
            this.sprintId = null;
            this.projectId = null;
            this.estimateTimeSec = null;
            this.executorId = null;
            this.executor = {
                id: '',
                userName: '',
                firstName: '',
                lastName: '',
                email: ''
            };
            this.creator = {
                id: '',
                userName: '',
                firstName: '',
                lastName: '',
                email: ''
            };
        }
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/model/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        {
            this.id = null;
            this.userName = null;
            this.email = null;
            this.phoneNumber = null;
            this.avatarUri = "https://api.icons8.com/download/5311a2d6a9754584586917a0d1f527c6721a6789/iOS7/PNG/512/Very_Basic/contacts-512.png";
            this.birthday = null;
            this.firstName = null;
            this.lastName = null;
        }
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pipes/activeProjects.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return activeProjectsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var activeProjectsPipe = /** @class */ (function () {
    function activeProjectsPipe() {
    }
    activeProjectsPipe.prototype.transform = function (projects) {
        return projects ? (projects.filter(function (project) { return !project.archivedAt; })) : projects;
    };
    activeProjectsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'activeProjects'
        })
    ], activeProjectsPipe);
    return activeProjectsPipe;
}());



/***/ }),

/***/ "./src/app/pipes/addUserToProject.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addUserToProjectPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var addUserToProjectPipe = /** @class */ (function () {
    function addUserToProjectPipe() {
    }
    addUserToProjectPipe.prototype.transform = function (users, projectUsers) {
        return users.filter(function (user) { return !projectUsers.map(function (pU) { return pU.userName; }).includes(user.userName); });
    };
    addUserToProjectPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'addUserToProject'
        })
    ], addUserToProjectPipe);
    return addUserToProjectPipe;
}());



/***/ }),

/***/ "./src/app/pipes/projectAllTasks.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectAllTasksPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProjectAllTasksPipe = /** @class */ (function () {
    function ProjectAllTasksPipe() {
    }
    ProjectAllTasksPipe.prototype.transform = function (tasks, value) {
        return tasks.filter(function (task) {
            return task.projectId.includes(value);
        });
    };
    ProjectAllTasksPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'projectAllTasks'
        })
    ], ProjectAllTasksPipe);
    return ProjectAllTasksPipe;
}());



/***/ }),

/***/ "./src/app/pipes/userAllTasks.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userAllTasksPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var userAllTasksPipe = /** @class */ (function () {
    function userAllTasksPipe() {
    }
    userAllTasksPipe.prototype.transform = function (tasks, value) {
        return tasks.filter(function (task) {
            return task.lead.includes(JSON.parse(localStorage.getItem("tfs18")).username);
        });
    };
    userAllTasksPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'allTasks'
        })
    ], userAllTasksPipe);
    return userAllTasksPipe;
}());



/***/ }),

/***/ "./src/app/pipes/userReleaseTasks.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userReleaseTasksPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("./src/app/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var userReleaseTasksPipe = /** @class */ (function () {
    function userReleaseTasksPipe(postService) {
        this.postService = postService;
    }
    ;
    userReleaseTasksPipe.prototype.transform = function (tasks, value) {
        return tasks.filter(function (task) {
            return task.lead.includes(JSON.parse(localStorage.getItem("tfs18")).username); //&& this.postService.getReleaseData().includes(task.id)
        }); //.filter(task => { return task.id.includes(3)})
    };
    userReleaseTasksPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'releaseTasks'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]])
    ], userReleaseTasksPipe);
    return userReleaseTasksPipe;
}());



/***/ }),

/***/ "./src/app/routes/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_page_home_page_component__ = __webpack_require__("./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_page_login_page_component__ = __webpack_require__("./src/app/components/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_settings_settings_page_settings_page_component__ = __webpack_require__("./src/app/components/settings/settings-page/settings-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_settings_project_settings_page_project_settings_page_component__ = __webpack_require__("./src/app/components/settings/project-settings-page/project-settings-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_settings_user_settings_page_user_settings_page_component__ = __webpack_require__("./src/app/components/settings/user-settings-page/user-settings-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_settings_role_settings_page_role_settings_page_component__ = __webpack_require__("./src/app/components/settings/role-settings-page/role-settings-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_settings_task_settings_page_task_settings_page_component__ = __webpack_require__("./src/app/components/settings/task-settings-page/task-settings-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_resove_service__ = __webpack_require__("./src/app/services/resove.service.ts");









// let SettingsRoutes : Routes = [ 
// ];
var AppRoutes = [
    { path: '', resolve: { st: __WEBPACK_IMPORTED_MODULE_8__services_resove_service__["a" /* StartResolver */] }, component: __WEBPACK_IMPORTED_MODULE_0__components_home_page_home_page_component__["a" /* HomePageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'settings', resolve: { st: __WEBPACK_IMPORTED_MODULE_8__services_resove_service__["a" /* StartResolver */] }, component: __WEBPACK_IMPORTED_MODULE_2__components_settings_settings_page_settings_page_component__["a" /* SettingsPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'usersSettings', resolve: { st: __WEBPACK_IMPORTED_MODULE_8__services_resove_service__["a" /* StartResolver */] }, component: __WEBPACK_IMPORTED_MODULE_5__components_settings_user_settings_page_user_settings_page_component__["a" /* UserSettingsPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'usersSettings/:userId', component: __WEBPACK_IMPORTED_MODULE_5__components_settings_user_settings_page_user_settings_page_component__["a" /* UserSettingsPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'projectSettings', resolve: { st: __WEBPACK_IMPORTED_MODULE_8__services_resove_service__["a" /* StartResolver */] }, component: __WEBPACK_IMPORTED_MODULE_4__components_settings_project_settings_page_project_settings_page_component__["a" /* ProjectSettingsPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'projectSettings/:projectId', component: __WEBPACK_IMPORTED_MODULE_4__components_settings_project_settings_page_project_settings_page_component__["a" /* ProjectSettingsPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'tasks/:projectId/:taskId', component: __WEBPACK_IMPORTED_MODULE_7__components_settings_task_settings_page_task_settings_page_component__["a" /* TaskSettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'tasks/:projectId', component: __WEBPACK_IMPORTED_MODULE_7__components_settings_task_settings_page_task_settings_page_component__["a" /* TaskSettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'roleSetings', resolve: { st: __WEBPACK_IMPORTED_MODULE_8__services_resove_service__["a" /* StartResolver */] }, component: __WEBPACK_IMPORTED_MODULE_6__components_settings_role_settings_page_role_settings_page_component__["a" /* RoleSettingsPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] }
];


/***/ }),

/***/ "./src/app/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (users, value) {
        return users.filter(function (user) {
            return user.name.includes(value);
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/services/cache.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__msg_servise__ = __webpack_require__("./src/app/services/msg.servise.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CacheService = /** @class */ (function () {
    function CacheService(http, ms) {
        this.http = http;
        this.ms = ms;
        this.serverUrl = 'http://167.99.250.211:8000/api/';
    }
    CacheService.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.serverUrl + 'projects', { headers: this.getHeaders() }).subscribe(function (data) { _this.projectCollection = data; });
    };
    CacheService.prototype.started = function () {
        if (!this.projectCollection || !this.userCollection || !this.taskCollection) {
            this.updateProjectCollection();
            this.updateUserCollection();
            this.updateTaskCollection();
        }
        else {
            return Promise.resolve();
        }
    };
    CacheService.prototype.getHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': 'Bearer ' + localStorage.getItem("tfs18") });
    };
    CacheService.prototype.getUserCollection = function () {
        return (this.userCollection);
    };
    CacheService.prototype.updateUserCollection = function () {
        var _this = this;
        this.http.get(this.serverUrl + 'users', { headers: this.getHeaders() })
            .toPromise()
            .then(function (data) { _this.userCollection = data; return Promise.resolve(); })
            .catch(function (err) { return Promise.reject(err.message || 'Server error'); });
    };
    CacheService.prototype.getProjectCollection = function () {
        return (this.projectCollection);
    };
    CacheService.prototype.updateProjectCollection = function () {
        var _this = this;
        return this.http.get(this.serverUrl + 'projects', { headers: this.getHeaders() })
            .toPromise()
            .then(function (data) { _this.projectCollection = data; return Promise.resolve(); })
            .catch(function (err) { return Promise.reject(err.message || 'Server error'); });
    };
    CacheService.prototype.getTaskCollection = function () {
        return (this.taskCollection);
    };
    CacheService.prototype.updateTaskCollection = function () {
        var _this = this;
        this.http.get(this.serverUrl + 'tasks', { headers: this.getHeaders() })
            .toPromise()
            .then(function (data) { _this.taskCollection = data; return Promise.resolve(); })
            .catch(function (err) { return Promise.reject(err.message || 'Server error'); });
    };
    CacheService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__msg_servise__["a" /* MsgService */]])
    ], CacheService);
    return CacheService;
}());



/***/ }),

/***/ "./src/app/services/msg.servise.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_msg_model__ = __webpack_require__("./src/app/model/msg.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MsgService = /** @class */ (function () {
    function MsgService() {
        this.msg = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_1__model_msg_model__["a" /* InfoMsg */](1, null, null, null));
    }
    MsgService.prototype.setMsg = function (type, title, discription, func) {
        this.msg.next(new __WEBPACK_IMPORTED_MODULE_1__model_msg_model__["a" /* InfoMsg */](type, title, discription, func));
    };
    MsgService.prototype.getMsg = function () {
        return this.msg;
    };
    MsgService.prototype.showMsg = function () {
        document.querySelector("#msg").classList.remove("hidden");
    };
    MsgService.prototype.hiddenMsg = function () {
        document.querySelector("#msg").classList.add("hidden");
    };
    MsgService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], MsgService);
    return MsgService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help_data__ = __webpack_require__("./src/app/help.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__msg_servise__ = __webpack_require__("./src/app/services/msg.servise.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cache_service__ = __webpack_require__("./src/app/services/cache.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostService = /** @class */ (function () {
    function PostService(http, d, ms, cS) {
        this.http = http;
        this.d = d;
        this.ms = ms;
        this.cS = cS;
        //private serverUrl = 'http://192.168.1.243:5000/api/';
        this.serverUrl = 'http://167.99.250.211:8000/api/';
    }
    PostService.prototype.getHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': 'Bearer ' + localStorage.getItem("tfs18") });
    };
    PostService.prototype.createProject = function (project, users) {
        var _this = this;
        var result = this.http.post(this.serverUrl + "projects", { "name": project.name, "id": project.id, "defaultSprintLengthSec": project.defaultSprintLengthSec, "archivedAt": null }, { headers: this.getHeaders() })
            .toPromise()
            .then(function (res) {
            for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                var u = users_1[_i];
                _this.createProjectUser(project.id, u);
            }
            _this.msg(1, "Проект успешно создан", null);
            location.replace("projectSettings/" + project.id);
        })
            .catch(function (err) {
            _this.msg(3, "Ошибка создания прокта", err.message);
            console.log(err);
            return Promise.reject(err.message || 'Server error');
        });
        this.cS.updateProjectCollection();
    };
    PostService.prototype.saveProject = function (project) {
        var _this = this;
        return this.http.put(this.serverUrl + "projects/" + project.id, {
            "name": project.name,
            "id": project.id,
            "defaultSprintLengthSec": project.defaultSprintLengthSec
        }, { headers: this.getHeaders() })
            .toPromise()
            .then(function (res) { _this.msg(1, "Проект успешно сохранен", null); return null; }) //location.replace("projectSettings/" + project.id)})
            .catch(function (err) {
            _this.msg(3, "Ошибка сохранения прокта", err.message);
            return Promise.reject(err.message || 'Server error');
        });
    };
    PostService.prototype.getProjectUsers = function (projectId) {
        return this.http.get(this.serverUrl + "projects/" + projectId + "/participants", { headers: this.getHeaders() });
    };
    PostService.prototype.createProjectUser = function (project, user) {
        return this.http.post(this.serverUrl + "projects/" + project + "/participants/" + user.id, {}, { headers: this.getHeaders() })
            .toPromise()
            .then(function () { return Promise.resolve; })
            .catch(function () { return Promise.reject; });
    };
    PostService.prototype.archiveProject = function (id) {
        var _this = this;
        return this.http.post(this.serverUrl + "projects/" + id + "/archive", { "id": id }, { headers: this.getHeaders() })
            .toPromise()
            .then(function (res) { _this.msg(1, "Проект успешно перенесен в архив", null); return null; })
            .catch(function (err) {
            _this.msg(3, "Ошибка архивирования прокта", err.message);
            return Promise.reject(err.message || 'Server error');
        });
    };
    PostService.prototype.createUser = function (user) {
        var _this = this;
        return this.http.post(this.serverUrl + "users", { "password": user.password, "id": "", "userName": user.userName, "email": user.email, "phoneNumber": user.phoneNumber, "avatarUri": user.avatarUri, "birthday": user.birthday, "firstName": user.firstName, "lastName": user.lastName }, { headers: this.getHeaders() })
            .toPromise()
            .then(function (res) { _this.msg(1, "пользователь успешно создан", null); return null; })
            .catch(function (err) {
            _this.msg(3, "Ошибка создания пользователя", err.message);
            return Promise.reject(err.message || 'Server error');
        });
    };
    PostService.prototype.saveUser = function (user) {
        var _this = this;
        return this.http.put(this.serverUrl + "users/" + user.id, {
            "password": user.password,
            "newPassword": user.newPassword,
            "id": user.id,
            "userName": user.userName,
            "email": user.email,
            "phoneNumber": user.phoneNumber,
            "avatarUri": user.avatarUri,
            "birthday": user.birthday,
            "firstName": user.firstName,
            "lastName": user.lastName
        }, { headers: this.getHeaders() })
            .toPromise()
            .then(function (res) { _this.msg(1, "пользователь успешно сохранен", null); return null; })
            .catch(function (err) {
            _this.msg(3, "Ошибка сохранения пользователя", err.message);
            return Promise.reject(err.message || 'Server error');
        });
    };
    PostService.prototype.deleteUser = function (id) {
        var _this = this;
        console.log(this);
        return this.http.delete(this.serverUrl + "users/" + id, { headers: this.getHeaders() })
            .toPromise()
            .then(function (res) { _this.msg(1, "Пользователь успешно удален", null); return null; })
            .catch(function (err) {
            _this.msg(3, "Ошибка удаления пользователя", err.message);
            return Promise.reject(err.message || 'Server error');
        });
    };
    PostService.prototype.sendLoginData = function (login, password) {
        var _this = this;
        return this.http.post(this.serverUrl + "users/token", { "userName": login, "password": password })
            .subscribe(function (res) { res ? _this.saveToken(res, login) : _this.authError(); });
    };
    PostService.prototype.saveToken = function (res, login) {
        localStorage.setItem("tfs18", res);
        return true;
    };
    PostService.prototype.authError = function () {
        this.ms.setMsg(3, "Ошибка авторизации", "Неверный логин или пароль", null);
        this.ms.showMsg();
        return false;
    };
    PostService.prototype.msg = function (id, title, discription) {
        this.ms.setMsg(id, title, discription, null);
        this.ms.showMsg();
        return false;
    };
    // sendLoginData(login, password) {
    //  this.http.post(this.serverUrl + "users/token", {"userName": login, "password": password})
    //   .toPromise()
    //   .then( res => this.saveToken(res, login))
    //   .catch(err => {
    //               return Promise.reject(err.error || 'Server error');
    //           });
    // }
    PostService.prototype.getMe = function () {
        return this.http.get(this.serverUrl + "users/me", { headers: this.getHeaders() });
    };
    PostService.prototype.getProjectCollection = function () {
        return this.cS.getProjectCollection();
    };
    PostService.prototype.getUserCollection = function () {
        return this.cS.getUserCollection();
    };
    PostService.prototype.getAllUsers = function () {
        return this.http.get(this.serverUrl + 'users', { headers: this.getHeaders() });
    };
    PostService.prototype.getTasks = function () {
        return this.cS.getTaskCollection();
    };
    PostService.prototype.createTask = function (task) {
        var _this = this;
        return this.http.post(this.serverUrl + "tasks", {
            "name": task.name,
            "subject": task.subject,
            "description": task.description,
            "status": task.status,
            "priority": task.priority,
            "sprintId": task.sprintId,
            "projectId": task.projectId,
            "estimateTimeSec": task.estimateTimeSec,
            "executorId": task.executorId
        }, { headers: this.getHeaders() })
            .toPromise()
            .then(function (res) { _this.msg(1, "Таска успешно создана", null); return null; })
            .catch(function (err) {
            _this.msg(3, "Ошибка создания таски", err.message);
            return Promise.reject(err.message || 'Server error');
        });
    };
    PostService.prototype.saveTask = function (task) {
    };
    PostService.prototype.getProjectById = function (id) {
        return this.http.get(this.serverUrl + 'projects/' + id, { headers: this.getHeaders() });
    };
    PostService.prototype.getUserById = function (id) {
        return this.http.get(this.serverUrl + 'users/' + id, { headers: this.getHeaders() });
    };
    PostService.prototype.setTime = function (projectid, userId, hours) {
        var _this = this;
        var req = this.serverUrl + projectid + '/' + 'participants/' + userId;
        this.http.get(req, { headers: this.getHeaders() })
            .toPromise()
            .then(function (data) {
            return _this.http.put(req, { "workTimeSec": (hours * 3600) }, { headers: _this.getHeaders() })
                .toPromise()
                .then(function (res) { return null; })
                .catch(function (err) {
                _this.msg(3, "Ошибка добавления времени", err.message);
                return Promise.reject(err.message || 'Server error');
            });
        })
            .catch(function (data) {
            return _this.http.post(req, { "workTimeSec": (hours * 3600) }, { headers: _this.getHeaders() })
                .toPromise()
                .then(function (res) { return null; })
                .catch(function (err) {
                _this.msg(3, "Ошибка добавления времени", err.message);
                return Promise.reject(err.message || 'Server error');
            });
        });
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__help_data__["a" /* helpData */], __WEBPACK_IMPORTED_MODULE_4__msg_servise__["a" /* MsgService */], __WEBPACK_IMPORTED_MODULE_5__cache_service__["a" /* CacheService */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/resove.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cache_service__ = __webpack_require__("./src/app/services/cache.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StartResolver = /** @class */ (function () {
    function StartResolver(cacheService) {
        this.cacheService = cacheService;
    }
    StartResolver.prototype.resolve = function (route, state) {
        if (this.cacheService) {
            this.cacheService.started()
                .then(function (res) { return true; })
                .catch(function (err) { return false; });
        }
        else {
            return false;
        }
    };
    StartResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */]])
    ], StartResolver);
    return StartResolver;
}());



/***/ }),

/***/ "./src/app/setup-page/setup-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"input-field col s12\">\n      <input [(ngModel)]=\"size\" id=\"first_name2\" type=\"text\" class=\"validate\">\n      <label class=\"active\" for=\"first_name2\">Количество пользователей</label>\n    </div>\n    <a class=\"waves-effect waves-light btn\" (click) = \"onChange()\">Изменить</a>\n</div>"

/***/ }),

/***/ "./src/app/setup-page/setup-page.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/setup-page/setup-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("./src/app/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SetupPageComponent = /** @class */ (function () {
    function SetupPageComponent(usersService) {
        this.usersService = usersService;
    }
    SetupPageComponent.prototype.ngOnInit = function () {
        this.size = this.usersService.size;
    };
    SetupPageComponent.prototype.onChange = function () {
        this.usersService.setSize(+this.size);
    };
    SetupPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-setup-page',
            template: __webpack_require__("./src/app/setup-page/setup-page.component.html"),
            styles: [__webpack_require__("./src/app/setup-page/setup-page.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */]])
    ], SetupPageComponent);
    return SetupPageComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col s3\" >\r\n    <div class=\"card\" appHover>\r\n        <div class=\"card-image\">        \r\n            <img src=\"{{user.image}}\">\r\n            <span\r\n             class=\"card-title\"\r\n             [ngClass]=\"{'marked' : isMarked}\">\r\n             {{user.name | uppercase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"card-content\">\r\n            <p>{{ user.geo }}</p>\r\n        </div>\r\n        <div class=\"card-action\">\r\n            <a\r\n              (click)=\"onclick()\"\r\n              class=\"waves-effect waves-light btn\"\r\n            >Отметить</a>\r\n        </div>\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/***/ (function(module, exports) {

module.exports = ".card-content {\n  height: 130px; }\n\n.marked {\n  font-weight: bold;\n  color: red; }\n\n.hovered {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  -webkit-transition: .5s all;\n  transition: .5s all;\n  z-index: 10; }\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
        this.isMarked = false;
    }
    UserComponent.prototype.onclick = function () {
        this.isMarked = !this.isMarked;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "user", void 0);
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.scss")]
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.size = 8;
        this.users = [
            { name: 'WFM 1' },
            { name: 'WFM 2' },
            { name: 'WFM 3' },
            { name: 'WFM 4' },
            { name: 'WFM 5' }
        ];
    }
    UsersService.prototype.setSize = function (size) {
        this.size = size;
    };
    UsersService.prototype.getUsers = function () {
        return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gb')
            .map(function (response) { return response.json(); })
            .map(function (response) { return response.results; })
            .map(function (users) {
            return users.map(function (u) {
                return {
                    name: u.name.first + ' ' + u.name.last,
                    image: u.picture.large,
                    geo: u.location.city + ' ' + u.location.state + ' ' + u.location.street
                };
            });
        });
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/validators/passwordValidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomValidators; });
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    CustomValidators.checkPassword = function (field) {
        if (!field.value) {
            return null;
        }
        var firstChar = field.value[0].toLowerCase();
        return firstChar !== 'z'
            ? null
            : { password: 'Пароль не должен начинаться с буквы Z' };
    };
    return CustomValidators;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map