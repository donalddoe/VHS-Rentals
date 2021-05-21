(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "Cj6H":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "kp9/");
/* harmony import */ var _returns_returns_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./returns/returns.component */ "cXBL");






const routes = [
    { path: '', children: [
            { path: 'user-dashboard', component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["UserDashboardComponent"] },
            { path: 'returns', component: _returns_returns_component__WEBPACK_IMPORTED_MODULE_3__["ReturnsComponent"] },
            { path: '', redirectTo: 'user-dashboard', pathMatch: 'full' }
        ] }
];
class UsersRoutingModule {
}
UsersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersRoutingModule });
UsersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersRoutingModule_Factory(t) { return new (t || UsersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kp9/":
/*!******************************************************************!*\
  !*** ./src/app/users/user-dashboard/user-dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "HeVh");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
















function UserDashboardComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDashboardComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDashboardComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDashboardComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDashboardComponent_div_34_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Hi, ", ctx_r3.username, "!");
} }
function UserDashboardComponent_a_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class UserDashboardComponent {
    constructor(breakpointObserver, loaderService) {
        this.breakpointObserver = breakpointObserver;
        this.loaderService = loaderService;
        this.username = null;
        this.isTokenExpired = true;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    }
}
UserDashboardComponent.ɵfac = function UserDashboardComponent_Factory(t) { return new (t || UserDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"])); };
UserDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDashboardComponent, selectors: [["app-user-dashboard"]], ngContentSelectors: _c0, decls: 41, vars: 17, consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["mat-list-item", "", "href", "#"], ["matPrefix", ""], [1, "spacer"], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["class", "loader-container", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["mat-button", "", "routerLink", "/store", 4, "ngSwitchDefault"], ["id", "content"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"], [1, "loader-container"], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-button", "", "routerLink", "/store"]], template: function UserDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "library_books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Rentals ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Return ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-toolbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UserDashboardComponent_button_26_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserDashboardComponent_div_28_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "VHS-Rental User Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, UserDashboardComponent_div_34_Template, 12, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UserDashboardComponent_a_35_Template, 2, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 11, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 13, ctx.isHandset$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 15, ctx.loaderService.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.isTokenExpired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatPrefix"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchDefault"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.loader-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: #615f5f;\n  opacity: 0.9;\n  z-index: 99;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #FFFEFE;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  background-color: #1A1A14;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #1A1A14;\n  color: #e8dfdf;\n}\n\n#content[_ngcontent-%COMP%] {\n  padding: 20px;\n  min-height: 130vh;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: inherit;\n  top: 0;\n  width: 100%;\n}\n\na[_ngcontent-%COMP%] {\n  background-color: #1A1A14;\n}\n\n.mat-list-item[_ngcontent-%COMP%] {\n  color: #e8dfdf;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx5Q0FBQTtBQUNGOztBQUdBO0VBQ0UsU0FBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdFO0VBQ0UseUJBQUE7QUFBSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0UsY0FBQTtBQUNOOztBQUdFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxpQkFBQTtFQUNBLE1BQUE7RUFFQSxXQUFBO0FBREo7O0FBS0U7RUFDRSx5QkFBQTtBQUZKOztBQUtFO0VBQ0UsY0FBQTtBQUZKOztBQUtFO0VBQ0UsY0FBQTtBQUZKIiwiZmlsZSI6InVzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm94LXNoYWRvdzogM3B4IDAgNnB4IHJnYmEoMCwgMCwgMCwgLjI0KTtcclxufVxyXG5cclxuXHJcbmJvZHl7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5sb2FkZXItY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDk3LCA5NSwgOTUpO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICB6LWluZGV4OiA5OTtcclxufVxyXG5cclxuc3BhbntcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICNGRkZFRkU7XHJcbiAgfVxyXG4gXHJcbiAgLnNpZGVuYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExNDtcclxuICB9XHJcbiAgLm1hdC10b29sYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExNDtcclxuICAgICAgY29sb3I6ICNlOGRmZGY7XHJcbiAgICBcclxuICB9XHJcblxyXG4gICNjb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMzB2aDtcclxuICB9XHJcblxyXG4gIC5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICAgIHRvcDogMDtcclxuICAgIC8vIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjMUExQTE0OyBcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1saXN0LWl0ZW17XHJcbiAgICBjb2xvcjogI2U4ZGZkZjtcclxuICB9XHJcblxyXG4gIC5zcGFjZXJ7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-dashboard',
                templateUrl: './user-dashboard.component.html',
                styleUrls: ['./user-dashboard.component.scss']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }, { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "zrcO":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../angular-material.module */ "rhD1");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-routing.module */ "Cj6H");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "HeVh");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "kp9/");












class UsersModule {
}
UsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersModule_Factory(t) { return new (t || UsersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["UserDashboardComponent"], _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["UserDashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["UserDashboardComponent"], _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["UserDashboardComponent"]],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map