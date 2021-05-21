(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\VHS Rentals\backend\Client\src\main.ts */"zUnb");


/***/ }),

/***/ "0tq1":
/*!****************************************************!*\
  !*** ./src/app/rent-movie/rent-movie.component.ts ***!
  \****************************************************/
/*! exports provided: RentMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentMovieComponent", function() { return RentMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie.service */ "2KVW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");









function RentMovieComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Plot:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Genre:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Number in stock:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Daily Rental Rate:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RentMovieComponent_mat_card_1_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.addToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.genre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.movie.poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.movie.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.plot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.genre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.numberInStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B5 ", ctx_r0.movie.dailyRentalRate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rent for \u20B5 ", ctx_r0.movie.dailyRentalRate, " ");
} }
class RentMovieComponent {
    constructor(dialogRef, data, getMovie) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.getMovie = getMovie;
    }
    ngOnInit() {
        this.movie = this.data;
    }
    addToCart() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
            cart.push(this.movie);
        }
        else {
            cart.push(this.movie);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            position: 'center',
            icon: 'success',
            title: 'Movie has been added to your shoping cart',
            showConfirmButton: false,
            timer: 4000
        });
        this.dialogRef.close();
    }
}
RentMovieComponent.ɵfac = function RentMovieComponent_Factory(t) { return new (t || RentMovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"])); };
RentMovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RentMovieComponent, selectors: [["app-rent-movie"]], decls: 2, vars: 1, consts: [[1, "main"], [4, "ngIf"], ["id", "card-details"], ["id", "poster"], ["mat-card-image", "", 3, "src", "alt"], ["id", "movie-details"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function RentMovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RentMovieComponent_mat_card_1_Template, 32, 9, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["*[_ngcontent-%COMP%] {\n  font-size: 1.2vw;\n}\n\n#card-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-content: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 95%;\n  height: 60vh;\n}\n\n#movie-details[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#poster[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.loader-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n}\n\nmat-card-header[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlbnQtbW92aWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUVKOztBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFHSjs7QUFBQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUdKOztBQURBO0VBR0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLFVBQUE7QUFHSjs7QUFEQTtFQUVJLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZJO0VBQ0ksdUJBQUE7QUFLUiIsImZpbGUiOiJyZW50LW1vdmllLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGZvbnQtc2l6ZTogMS4ydnc7XHJcbn1cclxuI2NhcmQtZGV0YWlsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgICA7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDk1JTsgICBcclxuICAgIGhlaWdodDogNjB2aDtcclxuXHJcbn1cclxuI21vdmllLWRldGFpbHN7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubWFpbntcclxuICAgIC8vIHdpZHRoOiAxMDB2dztcclxuICAgIC8vIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiNwb3N0ZXJ7XHJcbiAgICB3aWR0aDogNTAlOyAgXHJcbn1cclxubWF0LWNhcmQge1xyXG4gICAgLy8gd2lkdGg6IDkwdnc7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcbi5sb2FkZXItY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB9XHJcbiAgICBtYXQtY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RentMovieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rent-movie',
                templateUrl: './rent-movie.component.html',
                styleUrls: ['./rent-movie.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] }]; }, null); })();


/***/ }),

/***/ "2KVW":
/*!**********************************!*\
  !*** ./src/app/movie.service.ts ***!
  \**********************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class MovieService {
    constructor(http) {
        this.http = http;
        this.url = "https://vhsrentals.herokuapp.com/api/movies/single-movie/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'x-auth-token': `${localStorage.getItem('token')}`
            })
        };
    }
    fetchMovie(id) {
        return this.http.get(this.url + id, this.httpOptions);
    }
    ;
}
MovieService.ɵfac = function MovieService_Factory(t) { return new (t || MovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MovieService, factory: MovieService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var src_app_delete_record_delete_record_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/delete-record/delete-record.component */ "Vqd4");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../edit-user/edit-user.component */ "G9Y4");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-user/add-user.component */ "9DFq");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../loader/loader.service */ "t0Il");
/* harmony import */ var _Admins_administration_administration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Admins/administration/administration.component */ "ChJm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");























function UserComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r19.username, " ");
} }
function UserComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r20.email, " ");
} }
function UserComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r21.isAdmin, " ");
} }
function UserComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wallet (\u20B5) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r22.wallet, " ");
} }
function UserComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date Registered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r23.date, " ");
} }
function UserComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_td_32_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const row_r24 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.editUser(row_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_td_35_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const row_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.deleteUser(row_r27._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
function UserComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
} }
function UserComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r1.value, "\"");
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class UserComponent {
    constructor(userservice, dialog, loaderService) {
        this.userservice = userservice;
        this.dialog = dialog;
        this.loaderService = loaderService;
        this.displayedColumns = ['username', 'email', 'date', 'isAdmin', 'wallet', 'delete', 'edit'];
    }
    ngOnInit() {
        this.setUpTable();
    }
    setUpTable() {
        this.userservice.fetchUsers().subscribe(response => {
            this.users = response;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.users);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    deleteUser(id) {
        let openDialog = this.dialog.open(src_app_delete_record_delete_record_component__WEBPACK_IMPORTED_MODULE_4__["DeleteRecordComponent"]);
        this.dialog.getDialogById(openDialog.id).afterClosed().subscribe(result => {
            if (result) {
                this.userservice.deleteUser(id).subscribe(() => sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User has been deleted',
                    showConfirmButton: false,
                    timer: 4000
                }));
                this.setUpTable();
            }
        });
    }
    editUser(user) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.data = user;
        this.dialog.afterAllClosed.subscribe(() => { this.setUpTable(); });
        this.dialog.open(_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_7__["EditUserComponent"], dialogConfig);
    }
    onAddNew() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        this.dialog.afterAllClosed.subscribe(() => { this.setUpTable(); });
        this.dialog.open(_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"], dialogConfig);
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loader_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], viewQuery: function UserComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 40, vars: 8, consts: [["class", "loader-container", 4, "ngIf"], [1, "mat-elevation-z8"], ["matInput", "", "placeholder", "Enter search query here", 3, "keyup"], ["input", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "username"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "isAdmin"], ["matColumnDef", "wallet"], ["matColumnDef", "date"], ["matColumnDef", "edit"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "pageSizeOptions"], [1, "loader-container"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-flat-button", "", 3, "click"], ["color", "primary"], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-administration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function UserComponent_Template_input_keyup_8_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_button_click_10_listener() { return ctx.onAddNew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " New User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserComponent_th_16_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserComponent_td_17_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserComponent_th_19_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UserComponent_td_20_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UserComponent_th_22_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserComponent_td_23_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserComponent_th_25_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UserComponent_td_26_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserComponent_th_28_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UserComponent_td_29_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UserComponent_th_31_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UserComponent_td_32_Template, 4, 0, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, UserComponent_th_34_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UserComponent_td_35_Template, 4, 0, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, UserComponent_tr_36_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserComponent_tr_37_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, UserComponent_tr_38_Template, 3, 1, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "mat-paginator", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx.loaderService.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_Admins_administration_administration_component__WEBPACK_IMPORTED_MODULE_11__["AdministrationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: ["main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 80vw;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 80vw;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 85%;\n}\n\n.loader-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 90vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxVQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSUoiLCJmaWxlIjoidXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG59XHJcbnRhYmxle1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgIFxyXG59XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaW5wdXR7XHJcbiAgICB3aWR0aDogODUlO1xyXG59XHJcbi5sb2FkZXItY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogOTB2aDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.scss']
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _loader_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "4/lm":
/*!***************************************!*\
  !*** ./src/app/edit-movie.service.ts ***!
  \***************************************/
/*! exports provided: EditMovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMovieService", function() { return EditMovieService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");




class EditMovieService {
    constructor(http) {
        this.http = http;
        this.url = "https://vhsrentals.herokuapp.com/api/movies/update-movie/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'x-auth-token': `${localStorage.getItem('token')}`
            })
        };
    }
    editMovies(id, formData) {
        return this.http.put(this.url + id, formData, this.httpOptions);
    }
    ;
}
EditMovieService.ɵfac = function EditMovieService_Factory(t) { return new (t || EditMovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
EditMovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EditMovieService, factory: EditMovieService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditMovieService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "4cJH":
/*!***************************************!*\
  !*** ./src/app/get-movies.service.ts ***!
  \***************************************/
/*! exports provided: GetMoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMoviesService", function() { return GetMoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class GetMoviesService {
    constructor(http) {
        this.http = http;
        this.url = "https://vhsrentals.herokuapp.com/api/movies/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'x-auth-token': `${localStorage.getItem('token')}`
            })
        };
    }
    fetchMovies() {
        return this.http.get(this.url, this.httpOptions);
    }
    ;
}
GetMoviesService.ɵfac = function GetMoviesService_Factory(t) { return new (t || GetMoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GetMoviesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetMoviesService, factory: GetMoviesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetMoviesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ "8Qe2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");










function NavBarComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "account_balance_wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", null, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_13_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx_r0.wallet);
} }
function NavBarComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 15);
} }
// import { LoginService } from 'src/app/auth.service';
class NavBarComponent {
    constructor(
    // private auth: AuthService, 
    router) {
        this.router = router;
        this.wallet = null;
        this.router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                const userCredential = localStorage.getItem('wallet');
                if (userCredential) {
                    const wallet = userCredential;
                    this.wallet = wallet;
                }
            }
        });
    }
    getNumberOfItemsInCart() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return cart.length;
    }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 15, vars: 3, consts: [[1, "mat-elevation-z8"], [1, "spacer"], ["mat-button", "", "routerLink", "/store"], ["mat-button", "", "routerLink", "/users"], ["mat-button", "", "routerLink", "/shopping-cart"], ["matBadgeColor", "primary", 3, "matBadge"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["mat-button", "", "color", "primary", "routerLink", "logout", 4, "ngSwitchDefault"], ["mat-button", "", 3, "matMenuTriggerFor"], ["matBadgeColor", "primary", 1, "wallet", 3, "matBadge"], ["color", "accent"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["color", "primary", "routerLink", "/login"], ["mat-button", "", "color", "primary", "routerLink", "logout"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "VHS Rentals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Rentals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Shopping Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavBarComponent_div_13_Template, 13, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavBarComponent_a_14_Template, 1, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx.getNumberOfItemsInCart());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.wallet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.wallet);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadge"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchDefault"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #1A1A14;\n}\n\n.wallet[_ngcontent-%COMP%] {\n  color: #FFFEFE;\n}\n\na[_ngcontent-%COMP%] {\n  color: #e8dfdf;\n  background-color: #1A1A14;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #FFFEFE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUdFO0VBQ0UsY0FBQTtBQUFKOztBQUdFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFBSiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0b1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTE0O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAud2FsbGV0e1xyXG4gICAgY29sb3I6ICNGRkZFRkU7XHJcbiAgfVxyXG5cclxuICBhe1xyXG4gICAgY29sb3I6ICNlOGRmZGY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzFBMUExNDtcclxuICB9XHJcbiBcclxuICBzcGFue1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjRkZGRUZFO1xyXG4gICAgfVxyXG4gICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "7Vzl":
/*!*****************************************************************!*\
  !*** ./src/app/Admins/movie-details/movie-details.component.ts ***!
  \*****************************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var src_app_edit_movie_edit_movie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/edit-movie/edit-movie.component */ "tiaY");
/* harmony import */ var src_app_delete_record_delete_record_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/delete-record/delete-record.component */ "Vqd4");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_movie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/movie.service */ "2KVW");
/* harmony import */ var src_app_delete_movie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/delete-movie.service */ "jMFA");
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var _administration_administration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../administration/administration.component */ "ChJm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
















function MovieDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovieDetailsComponent_main_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Plot:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Genre:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Number in stock:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Daily Rental Rate:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_main_3_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.confirmDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_main_3_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.editMovie(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.movie.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.movie.genre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.movie.poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r1.movie.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.movie.plot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.movie.genre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.movie.numberInStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.movie.dailyRentalRate);
} }
class MovieDetailsComponent {
    constructor(router, route, getMovies, deleteMovies, loaderService, dialog) {
        this.router = router;
        this.route = route;
        this.getMovies = getMovies;
        this.deleteMovies = deleteMovies;
        this.loaderService = loaderService;
        this.dialog = dialog;
    }
    confirmDelete() {
        let openDialog = this.dialog.open(src_app_delete_record_delete_record_component__WEBPACK_IMPORTED_MODULE_3__["DeleteRecordComponent"]);
        this.dialog.getDialogById(openDialog.id).afterClosed().subscribe(result => {
            if (result) {
                this.deleteMovies.deleteMovie(this.movie._id).subscribe(() => sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Movie has been deleted',
                    showConfirmButton: false,
                    timer: 4000
                }));
                this.router.navigate(['/movies']);
            }
        });
    }
    editMovie() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.data = this.movie;
        this.dialog.afterAllClosed.subscribe(() => { this.getMovie(this.movie._id); });
        this.dialog.open(src_app_edit_movie_edit_movie_component__WEBPACK_IMPORTED_MODULE_2__["EditMovieComponent"], dialogConfig);
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = params.get("id");
            this.getMovie(id);
        });
    }
    getMovie(id) {
        this.getMovies.fetchMovie(id).subscribe(response => { this.movie = response; });
    }
}
MovieDetailsComponent.ɵfac = function MovieDetailsComponent_Factory(t) { return new (t || MovieDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_movie_service__WEBPACK_IMPORTED_MODULE_6__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_delete_movie_service__WEBPACK_IMPORTED_MODULE_7__["DeleteMovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
MovieDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDetailsComponent, selectors: [["app-movie-details"]], decls: 4, vars: 4, consts: [["class", "loader-container", 4, "ngIf"], [4, "ngIf"], [1, "loader-container"], ["id", "card-details"], ["id", "poster"], ["mat-card-image", "", 3, "src", "alt"], ["id", "movie-details"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function MovieDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-administration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailsComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MovieDetailsComponent_main_3_Template, 35, 8, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.loaderService.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie);
    } }, directives: [_administration_administration_component__WEBPACK_IMPORTED_MODULE_9__["AdministrationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["*[_ngcontent-%COMP%] {\n  font-size: 1.2vw;\n}\n\n#card-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-content: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 95%;\n  height: 60vh;\n}\n\n#movie-details[_ngcontent-%COMP%] {\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nmain[_ngcontent-%COMP%] {\n  width: 80vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#poster[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  width: 80vw;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.loader-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n}\n\nmat-card-header[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBR0o7O0FBQUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLFVBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFPSjs7QUFMSTtFQUNJLHVCQUFBO0FBUVIiLCJmaWxlIjoibW92aWUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBmb250LXNpemU6IDEuMnZ3O1xyXG59XHJcbiNjYXJkLWRldGFpbHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICAgO1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiA5NSU7ICAgXHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcblxyXG59XHJcbiNtb3ZpZS1kZXRhaWxze1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxubWFpbntcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI3Bvc3RlcntcclxuICAgIHdpZHRoOiA0MCU7ICBcclxufVxyXG5tYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLmxvYWRlci1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxuICAgIG1hdC1jYXJkLWhlYWRlcntcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-details',
                templateUrl: './movie-details.component.html',
                styleUrls: ['./movie-details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_movie_service__WEBPACK_IMPORTED_MODULE_6__["MovieService"] }, { type: src_app_delete_movie_service__WEBPACK_IMPORTED_MODULE_7__["DeleteMovieService"] }, { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "9DFq":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register.service */ "k3Qe");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");














function AddUserComponent_mat_error_6_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_6_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email must have a valid format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_6_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email must be ", ctx_r10.email.errors.minlength.requiredLength, " characters or more ");
} }
function AddUserComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddUserComponent_mat_error_6_mat_error_1_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddUserComponent_mat_error_6_mat_error_2_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddUserComponent_mat_error_6_mat_error_3_Template, 2, 1, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.email.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.email.errors.minlength);
} }
function AddUserComponent_mat_error_9_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_9_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Username must be ", ctx_r12.username.errors.minlength.requiredLength, " characters or more ");
} }
function AddUserComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddUserComponent_mat_error_9_mat_error_1_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddUserComponent_mat_error_9_mat_error_2_Template, 2, 1, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.username.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.username.errors.minlength);
} }
function AddUserComponent_mat_error_15_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Is the user an admin? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddUserComponent_mat_error_15_mat_error_1_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isAdmin.errors.required);
} }
function AddUserComponent_mat_error_18_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " wallet is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_18_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Ammount must be greater than ", ctx_r15.wallet.errors.min.min, " ");
} }
function AddUserComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddUserComponent_mat_error_18_mat_error_1_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddUserComponent_mat_error_18_mat_error_2_Template, 2, 1, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.wallet.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.wallet.errors.min);
} }
function AddUserComponent_mat_error_21_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_21_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password must be ", ctx_r17.password.errors.minlength.requiredLength, " characters or more ");
} }
function AddUserComponent_mat_error_21_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Password must contain at least one digit. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Password must contain at least one lowercase letter. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Password must contain at least one uppercase letter. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddUserComponent_mat_error_21_mat_error_1_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddUserComponent_mat_error_21_mat_error_2_Template, 2, 1, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddUserComponent_mat_error_21_mat_error_3_Template, 7, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.password.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.password.errors.pattern);
} }
function AddUserComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Passwords should match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_25_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirmation password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_25_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password must be ", ctx_r20.confirmpassword.errors.minlength.requiredLength, " characters or more ");
} }
function AddUserComponent_mat_error_25_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Password must contain at least one digit. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Password must contain at least one lowercase letter. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Password must contain at least one uppercase letter. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddUserComponent_mat_error_25_mat_error_1_Template, 2, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddUserComponent_mat_error_25_mat_error_2_Template, 2, 1, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddUserComponent_mat_error_25_mat_error_3_Template, 7, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.confirmpassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.confirmpassword.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.confirmpassword.errors.pattern);
} }
function AddUserComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Passwords should match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddUserComponent {
    constructor(service, dialogRef, data) {
        this.service = service;
        this.dialogRef = dialogRef;
        this.data = data;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)
            ]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]))/g)
                //at least 1 digit ,at least one lowercase char , at lease 1 uppercase char and one special char
            ]),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]))/g)
                //at least 1 digit ,at least one lowercase char , at lease 1 uppercase char and one special char
            ]),
            isAdmin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('true', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            wallet: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('true', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)
            ]),
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.disableConfirmPassword();
        // let data = this.formatDataForEndPoint();
        this.service.register(this.form.value).subscribe(response => {
            // this.openDialog()
            console.log(response);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                position: 'center',
                icon: 'success',
                title: 'New user added',
                showConfirmButton: false,
                timer: 1500
            });
        }, (error) => {
            // this.dialog.open(FormErrorComponent,{data:{message:"test"}})
            if (error.status === 404) {
                alert("Signup unsuccessful ");
            }
            else {
                if (error.status === 201) {
                    this.form.setErrors(error.json());
                }
                else {
                    alert('An unexpected error occurred:' + error);
                }
            }
        });
        this.form.reset();
        this.onClose();
    }
    onClose() {
        this.form.reset();
        this.dialogRef.close();
    }
    disableConfirmPassword() {
        this.form.get('confirmpassword').disable({ onlySelf: true });
        this.form.updateValueAndValidity();
    }
    get email() {
        return this.form.get('email');
    }
    get username() {
        return this.form.get('username');
    }
    get password() {
        return this.form.get('password');
    }
    get confirmpassword() {
        return this.form.get('confirmpassword');
    }
    get isAdmin() {
        return this.form.get('isAdmin');
    }
    get wallet() {
        return this.form.get('wallet');
    }
}
AddUserComponent.ɵfac = function AddUserComponent_Factory(t) { return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
AddUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddUserComponent, selectors: [["app-add-user"]], decls: 29, vars: 10, consts: [["id", "card", 1, "mat-elevation-z24"], [1, "form-container", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "Email:", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Username:", "formControlName", "username", "required", ""], ["aria-label", "Select an option"], ["checked", "", "value", "true"], ["value", "false"], ["matInput", "", "placeholder", "Wallet:", "formControlName", "wallet", "type", "number", "required", ""], ["matInput", "", "placeholder", "Password:", "formControlName", "password", "required", "", "type", "password"], ["matInput", "", "placeholder", "Password (confirm):", "formControlName", "confirmpassword", "required", "", "type", "password"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function AddUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddUserComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddUserComponent_mat_error_6_Template, 4, 3, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddUserComponent_mat_error_9_Template, 3, 2, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-radio-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-radio-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-radio-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddUserComponent_mat_error_15_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddUserComponent_mat_error_18_Template, 3, 2, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddUserComponent_mat_error_21_Template, 4, 3, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddUserComponent_mat_error_22_Template, 3, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddUserComponent_mat_error_25_Template, 4, 3, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddUserComponent_mat_error_26_Template, 3, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Add New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.touched && ctx.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username.touched && ctx.username.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin.touched && ctx.isAdmin.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wallet.touched && ctx.wallet.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.touched && ctx.password.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.touched && ctx.confirmpassword.touched && ctx.confirmpassword.value !== ctx.password.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmpassword.touched && ctx.confirmpassword.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.touched && ctx.confirmpassword.touched && ctx.confirmpassword.value !== ctx.password.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: [".form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n#card[_ngcontent-%COMP%] {\n  width: 50vw;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZC11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdDO0VBQ0ksV0FBQTtBQUFMOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0FBQUo7O0FBRUU7RUFDRSxXQUFBO0FBQ0oiLCJmaWxlIjoiYWRkLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbiAjY2FyZHtcclxuICAgICB3aWR0aDogNTB2dztcclxuLy8gICAgIC8vIGhlaWdodDogNTAlO1xyXG4gfVxyXG5tYXQtY2FyZC10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiAgcHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICBcclxuICB9XHJcbiAgYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-user',
                templateUrl: './add-user.component.html',
                styleUrls: ['./add-user.component.scss']
            }]
    }], function () { return [{ type: _register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BNEf":
/*!******************************************************!*\
  !*** ./src/app/store-front/store-front.component.ts ***!
  \******************************************************/
/*! exports provided: StoreFrontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFrontComponent", function() { return StoreFrontComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _rent_movie_rent_movie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rent-movie/rent-movie.component */ "0tq1");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _get_movies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../get-movies.service */ "4cJH");
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../movie.service */ "2KVW");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");


















function StoreFrontComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StoreFrontComponent_mat_grid_list_3_mat_grid_tile_1_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreFrontComponent_mat_grid_list_3_mat_grid_tile_1_mat_card_1_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const movieDetails_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.goToMovie(movieDetails_r4.data._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-actions", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " per day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movieDetails_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movieDetails_r4.data.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movieDetails_r4.data.genre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", movieDetails_r4.data.poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", movieDetails_r4.data.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("disabled", (movieDetails_r4.data.count < 1 ? true : false) || !ctx_r5.hasEnoughFunds(movieDetails_r4.data.dailyRentalRate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r5.setDailyRentalDisplayClass(movieDetails_r4.data.dailyRentalRate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B5 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, movieDetails_r4.data.dailyRentalRate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", movieDetails_r4.data.numberInStock, " copies available for renting)");
} }
function StoreFrontComponent_mat_grid_list_3_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoreFrontComponent_mat_grid_list_3_mat_grid_tile_1_mat_card_1_Template, 16, 12, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movieDetails_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", movieDetails_r4.cols);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", movieDetails_r4);
} }
function StoreFrontComponent_mat_grid_list_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoreFrontComponent_mat_grid_list_3_mat_grid_tile_1_Template, 2, 2, "mat-grid-tile", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "lightgray");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.list);
} }
function StoreFrontComponent_mat_paginator_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-paginator", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function StoreFrontComponent_mat_paginator_4_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onPageEvent($event); })("change", function StoreFrontComponent_mat_paginator_4_Template_mat_paginator_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onPageEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r2.length)("pageSize", ctx_r2.pageSize)("pageSizeOptions", ctx_r2.pageSizeOptions);
} }
class StoreFrontComponent {
    constructor(getMovies, loaderService, router, dialog, getMovie) {
        this.getMovies = getMovies;
        this.loaderService = loaderService;
        this.router = router;
        this.dialog = dialog;
        this.getMovie = getMovie;
        this.list = [];
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.positionOptions = ['below', 'above', 'left', 'right'];
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.positionOptions[1]);
    }
    ngOnInit() {
        this.getMovies.fetchMovies().subscribe(response => { this.movies = response, this.getList(0, 11); });
    }
    onPageEvent(event) {
        const start = event.previousPageIndex * event.pageSize + 1;
        const limit = event.pageSize;
        this.getList(start, limit);
    }
    hasEnoughFunds(price) {
        if (parseFloat(localStorage.getItem("wallet")) >= price) {
            return true;
        }
        else {
            return false;
        }
    }
    setDailyRentalDisplayClass(price) {
        console.log(price);
        console.log(this.hasEnoughFunds(price));
        if (this.hasEnoughFunds(price)) {
            return "footer-text";
        }
        else {
            return "footer-text-red";
        }
    }
    goToMovie(id) {
        let movie;
        this.getMovie.fetchMovie(id).subscribe(response => {
            movie = response;
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
            dialogConfig.data = movie;
            let openDialog = this.dialog.open(_rent_movie_rent_movie_component__WEBPACK_IMPORTED_MODULE_3__["RentMovieComponent"], dialogConfig);
            this.dialog.getDialogById(openDialog.id).afterClosed().subscribe(result => {
                if (result) {
                    // this.deleteMovies.deleteMovie(this.movie._id).subscribe(()=>
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Movie has been deleted',
                        showConfirmButton: false,
                        timer: 4000
                    });
                }
            });
        });
    }
    getList(start, limit) {
        let row = 1;
        let col = 1;
        let array = Object.values(this.movies);
        this.length = array.length;
        this.list = [];
        for (let index = start; index < array.length && index <= limit; index++) {
            this.list.push({ rows: row, cols: col, data: array[index] });
            if (index % 3 == 0) {
                row++;
            }
            col = (col++) % 3;
        }
    }
}
StoreFrontComponent.ɵfac = function StoreFrontComponent_Factory(t) { return new (t || StoreFrontComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_get_movies_service__WEBPACK_IMPORTED_MODULE_5__["GetMoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movie_service__WEBPACK_IMPORTED_MODULE_8__["MovieService"])); };
StoreFrontComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreFrontComponent, selectors: [["app-store-front"]], decls: 5, vars: 5, consts: [["class", "loader-container", 4, "ngIf"], ["cols", "3", "rowHeight", "60em", 3, "backgroundColor", 4, "ngIf"], [3, "length", "pageSize", "pageSizeOptions", "page", "change", 4, "ngIf"], [1, "loader-container"], ["cols", "3", "rowHeight", "60em"], ["gutterSize", "1px", 3, "colspan", 4, "ngFor", "ngForOf"], ["gutterSize", "1px", 3, "colspan"], ["class", "movie-details", 4, "ngIf"], [1, "movie-details"], [1, "header-title"], ["mat-card-image", "", 3, "src", "alt", "click"], [1, "card-footer"], ["mat-button", "", 3, "disabled"], [1, "footer-text"], [3, "length", "pageSize", "pageSizeOptions", "page", "change"]], template: function StoreFrontComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoreFrontComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoreFrontComponent_mat_grid_list_3_Template, 2, 3, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StoreFrontComponent_mat_paginator_4_Template, 1, 3, "mat-paginator", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx.loaderService.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list);
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"]], styles: ["img[_ngcontent-%COMP%] {\n  width: 85%;\n}\n\n.loader-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 90vh;\n}\n\nmat-card-header[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.movie-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  font-size: 1vw;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  width: 25vw;\n  background-color: inherit;\n}\n\nmat-card[_ngcontent-%COMP%]:hover {\n  width: 26vw;\n  background-color: black;\n  color: whitesmoke;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.footer-text[_ngcontent-%COMP%] {\n  font-size: 1vw;\n}\n\n.footer-text-red[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0b3JlLWZyb250LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQURKOztBQUdBO0VBQ0ksdUJBQUE7QUFBSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFFQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQTtBQUVKOztBQUVBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6InN0b3JlLWZyb250LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIHdpZHRoOjg1JTtcclxufVxyXG4vLyBpbWc6aG92ZXIge1xyXG4vLyAgICAgd2lkdGg6OTUlO1xyXG4vLyB9XHJcbi5sb2FkZXItY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogOTB2aDtcclxufVxyXG5tYXQtY2FyZC1oZWFkZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubW92aWUtZGV0YWlsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuLmhlYWRlci10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5tYXQtY2FyZDpob3ZlcntcclxuICAgIHdpZHRoOiAyNnZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4uY2FyZC1mb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbi5mb290ZXItdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG5cclxufVxyXG5cclxuLmZvb3Rlci10ZXh0LXJlZHtcclxuICAgIGNvbG9yOnJlZDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreFrontComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-store-front',
                templateUrl: './store-front.component.html',
                styleUrls: ['./store-front.component.scss']
            }]
    }], function () { return [{ type: _get_movies_service__WEBPACK_IMPORTED_MODULE_5__["GetMoviesService"] }, { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _movie_service__WEBPACK_IMPORTED_MODULE_8__["MovieService"] }]; }, null); })();


/***/ }),

/***/ "ChJm":
/*!*******************************************************************!*\
  !*** ./src/app/Admins/administration/administration.component.ts ***!
  \*******************************************************************/
/*! exports provided: AdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationComponent", function() { return AdministrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "HeVh");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../footer/footer.component */ "fp1T");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
















function AdministrationComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministrationComponent_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdministrationComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", null, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministrationComponent_div_42_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.logout(); });
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
function AdministrationComponent_a_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class AdministrationComponent {
    constructor(breakpointObserver, loaderService) {
        this.breakpointObserver = breakpointObserver;
        this.loaderService = loaderService;
        this.username = null;
        this.isTokenExpired = true;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    }
    ngOnInit() {
    }
}
AdministrationComponent.ɵfac = function AdministrationComponent_Factory(t) { return new (t || AdministrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"])); };
AdministrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdministrationComponent, selectors: [["app-administration"]], ngContentSelectors: _c0, decls: 49, vars: 15, consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], [3, "matMenuTriggerFor"], ["matline", ""], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/add-movies"], ["mat-menu-item", "", "routerLink", "/movies"], ["mat-list-item", "", "routerLink", "/view-users"], ["mat-list-item", "", "routerLink", "/wallet"], ["mat-list-item", "", "routerLink", "/rentals"], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "spacer"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["mat-button", "", "routerLink", "/login", 4, "ngSwitchDefault"], ["id", "content"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"], ["mat-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-button", "", "routerLink", "/login"], ["matPrefix", ""]], template: function AdministrationComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-menu", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "account_balance_wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Wallet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "library_books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Rentals ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-toolbar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AdministrationComponent_button_36_Template, 3, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "VHS-Rental Admin Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AdministrationComponent_div_42_Template, 12, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AdministrationComponent_a_43_Template, 4, 0, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 11, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 13, ctx.isHandset$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.isTokenExpired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchDefault"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatAnchor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPrefix"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.loader-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: #615f5f;\n  opacity: 0.9;\n  z-index: 99;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #FFFEFE;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  background-color: #1A1A14;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #1A1A14;\n  color: #e8dfdf;\n}\n\n#content[_ngcontent-%COMP%] {\n  padding: 20px;\n  min-height: 130vh;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: inherit;\n  top: 0;\n  width: 100%;\n}\n\na[_ngcontent-%COMP%] {\n  background-color: #1A1A14;\n}\n\n.mat-list-item[_ngcontent-%COMP%] {\n  color: #e8dfdf;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZG1pbmlzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSx5Q0FBQTtBQUNKOztBQUdFO0VBQ0UsU0FBQTtBQUFKOztBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdJO0VBR0UseUJBQUE7QUFGTjs7QUFLSTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUZOOztBQU1JO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBSE47O0FBTUk7RUFDRSxpQkFBQTtFQUNBLE1BQUE7RUFFQSxXQUFBO0FBSk47O0FBUUk7RUFFRSx5QkFBQTtBQU5OOztBQVdJO0VBQ0UsY0FBQTtBQVJOOztBQVdJO0VBQ0UsY0FBQTtBQVJOIiwiZmlsZSI6ImFkbWluaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDAgNnB4IHJnYmEoMCwgMCwgMCwgLjI0KTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgYm9keXtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAubG9hZGVyLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDk3LCA5NSwgOTUpO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgfVxyXG4gIFxyXG4gIHNwYW57XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICNGRkZFRkU7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLnNpZGVuYXYge1xyXG4gICAgICAvLyBtYXJnaW4tdG9wOiA2NHB4O1xyXG4gICAgICAvLyBib3gtc2hhZG93OiAzcHggMCA2cHggcmdiYSgxMjYsIDIwNSwgMjQxLCAwLjI0KTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExNDtcclxuICAgICAgLy8gaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIH1cclxuICAgIC5tYXQtdG9vbGJhcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExNDtcclxuICAgICAgY29sb3I6ICNlOGRmZGY7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgI2NvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMzB2aDtcclxuICAgIH1cclxuICBcclxuICAgIC5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIC8vIHotaW5kZXg6IDE7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgYSB7XHJcbiAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICAjQTNFMEREO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzFBMUExNDtcclxuICAgICAgLy8gZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXQtbGlzdC1pdGVte1xyXG4gICAgICBjb2xvcjogI2U4ZGZkZjtcclxuICAgIH1cclxuICBcclxuICAgIC5zcGFjZXJ7XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdministrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-administration',
                templateUrl: './administration.component.html',
                styleUrls: ['./administration.component.scss']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }, { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "EBTS":
/*!********************************************!*\
  !*** ./src/app/wallet/wallet.component.ts ***!
  \********************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var src_app_delete_record_delete_record_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/delete-record/delete-record.component */ "Vqd4");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-user/add-user.component */ "9DFq");
/* harmony import */ var _edit_wallet_edit_wallet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../edit-wallet/edit-wallet.component */ "XaBM");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../loader/loader.service */ "t0Il");
/* harmony import */ var _Admins_administration_administration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Admins/administration/administration.component */ "ChJm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");























function WalletComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WalletComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WalletComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r11.username, " ");
} }
function WalletComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wallet (\u20B5) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WalletComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r12.wallet, " ");
} }
function WalletComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WalletComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_td_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const row_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.editUser(row_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WalletComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
function WalletComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
} }
function WalletComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r1.value, "\"");
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class WalletComponent {
    constructor(userservice, dialog, loaderService) {
        this.userservice = userservice;
        this.dialog = dialog;
        this.loaderService = loaderService;
        this.displayedColumns = ['username', 'wallet', 'edit'];
    }
    ngOnInit() {
        this.setUpTable();
    }
    setUpTable() {
        this.userservice.fetchUsers().subscribe(response => {
            this.users = response;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.users);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    deleteUser(id) {
        let openDialog = this.dialog.open(src_app_delete_record_delete_record_component__WEBPACK_IMPORTED_MODULE_4__["DeleteRecordComponent"]);
        this.dialog.getDialogById(openDialog.id).afterClosed().subscribe(result => {
            if (result) {
                this.userservice.deleteUser(id).subscribe(() => sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User has been deleted',
                    showConfirmButton: false,
                    timer: 4000
                }));
                this.setUpTable();
            }
        });
    }
    editUser(user) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.data = user;
        this.dialog.afterAllClosed.subscribe(() => { this.setUpTable(); });
        this.dialog.open(_edit_wallet_edit_wallet_component__WEBPACK_IMPORTED_MODULE_8__["EditWalletComponent"], dialogConfig);
    }
    onAddNew() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        this.dialog.afterAllClosed.subscribe(() => { this.setUpTable(); });
        this.dialog.open(_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__["AddUserComponent"], dialogConfig);
    }
}
WalletComponent.ɵfac = function WalletComponent_Factory(t) { return new (t || WalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loader_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"])); };
WalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WalletComponent, selectors: [["app-wallet"]], viewQuery: function WalletComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 24, vars: 8, consts: [["class", "loader-container", 4, "ngIf"], [1, "mat-elevation-z8"], ["matInput", "", "placeholder", "Enter search query here", 3, "keyup"], ["input", ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "username"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "wallet"], ["matColumnDef", "edit"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "pageSizeOptions"], [1, "loader-container"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-flat-button", "", 3, "click"], ["color", "primary"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function WalletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-administration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WalletComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function WalletComponent_Template_input_keyup_8_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WalletComponent_th_12_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WalletComponent_td_13_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WalletComponent_th_15_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WalletComponent_td_16_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WalletComponent_th_18_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WalletComponent_td_19_Template, 4, 0, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, WalletComponent_tr_20_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, WalletComponent_tr_21_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WalletComponent_tr_22_Template, 3, 1, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-paginator", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx.loaderService.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_Admins_administration_administration_component__WEBPACK_IMPORTED_MODULE_11__["AdministrationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: ["main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 80vw;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 80vw;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 85%;\n}\n\n.loader-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 90vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHdhbGxldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLFVBQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFJSiIsImZpbGUiOiJ3YWxsZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogODB2dztcclxufVxyXG50YWJsZXtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICBcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmlucHV0e1xyXG4gICAgd2lkdGg6IDg1JTtcclxufVxyXG4ubG9hZGVyLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wallet',
                templateUrl: './wallet.component.html',
                styleUrls: ['./wallet.component.scss']
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _loader_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "F57+":
/*!************************************!*\
  !*** ./src/app/omdbapi.service.ts ***!
  \************************************/
/*! exports provided: OmdbapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmdbapiService", function() { return OmdbapiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class OmdbapiService {
    constructor(http) {
        this.http = http;
        this.url = "http://www.omdbapi.com/?t=";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            })
        };
    }
    find(movieTitle) {
        return this.http.get(this.url + movieTitle + "&apikey=5ccdc80e");
    }
    ;
}
OmdbapiService.ɵfac = function OmdbapiService_Factory(t) { return new (t || OmdbapiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OmdbapiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OmdbapiService, factory: OmdbapiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OmdbapiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "G9Y4":
/*!**************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.ts ***!
  \**************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");














function EditUserComponent_mat_error_7_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditUserComponent_mat_error_7_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email must have a valid format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditUserComponent_mat_error_7_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email must be ", ctx_r6.email.errors.minlength.requiredLength, " characters or more ");
} }
function EditUserComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditUserComponent_mat_error_7_mat_error_1_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditUserComponent_mat_error_7_mat_error_2_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditUserComponent_mat_error_7_mat_error_3_Template, 2, 1, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.email.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.email.errors.minlength);
} }
function EditUserComponent_mat_error_13_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Is the user an admin? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditUserComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditUserComponent_mat_error_13_mat_error_1_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isAdmin.errors.required);
} }
function EditUserComponent_mat_error_16_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditUserComponent_mat_error_16_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Username must be ", ctx_r9.username.errors.minlength.requiredLength, " characters or more ");
} }
function EditUserComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditUserComponent_mat_error_16_mat_error_1_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditUserComponent_mat_error_16_mat_error_2_Template, 2, 1, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.username.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.username.errors.minlength);
} }
function EditUserComponent_mat_error_19_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " wallet is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditUserComponent_mat_error_19_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Ammount must be greater than ", ctx_r11.wallet.errors.min.min, " ");
} }
function EditUserComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditUserComponent_mat_error_19_mat_error_1_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditUserComponent_mat_error_19_mat_error_2_Template, 2, 1, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.wallet.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.wallet.errors.min);
} }
class EditUserComponent {
    constructor(dialogRef, data, userservice) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userservice = userservice;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)
            ]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)
            ]),
            isAdmin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('false', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            wallet: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('false', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)
            ]),
        });
    }
    ngOnInit() {
        this.email.setValue(this.data.email);
        this.username.setValue(this.data.username);
        this.isAdmin.setValue(this.data.isAdmin);
        this.wallet.setValue(this.data.wallet);
    }
    get email() {
        return this.form.get('email');
    }
    get username() {
        return this.form.get('username');
    }
    get isAdmin() {
        return this.form.get('isAdmin');
    }
    get wallet() {
        return this.form.get('wallet');
    }
    onUpdate() {
        this.userservice.updateUser(this.data._id, this.form.value).subscribe(response => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                position: 'center',
                icon: 'success',
                title: 'User details have been edited',
                showConfirmButton: false,
                timer: 4000
            });
        });
        this.form.reset();
        this.onClose();
    }
    onClose() {
        this.form.reset();
        this.dialogRef.close();
    }
}
EditUserComponent.ɵfac = function EditUserComponent_Factory(t) { return new (t || EditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
EditUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditUserComponent, selectors: [["app-edit-user"]], decls: 22, vars: 8, consts: [[1, "container"], ["id", "card", 1, "mat-elevation-z24"], [1, "form-container", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "Email:", "required", ""], [4, "ngIf"], ["aria-label", "Select an option"], ["value", "true", 3, "checked"], ["value", "false", 3, "checked"], ["matInput", "", "placeholder", "Username:", "formControlName", "username", "required", ""], ["matInput", "", "placeholder", "Wallet:", "formControlName", "wallet", "type", "number", "required", ""], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function EditUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Edit User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditUserComponent_Template_form_ngSubmit_4_listener() { return ctx.onUpdate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditUserComponent_mat_error_7_Template, 4, 3, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-radio-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-radio-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-radio-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditUserComponent_mat_error_13_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EditUserComponent_mat_error_16_Template, 3, 2, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditUserComponent_mat_error_19_Template, 3, 2, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Edit User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.touched && ctx.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isAdmin.value == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isAdmin.value == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin.touched && ctx.isAdmin.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username.touched && ctx.username.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wallet.touched && ctx.wallet.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: [".form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  justify-items: center;\n}\n\n#card[_ngcontent-%COMP%] {\n  width: 50vw;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVkaXQtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUdDO0VBQ0ksV0FBQTtBQUFMOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0FBQUo7O0FBRUU7RUFDRSxXQUFBO0FBQ0oiLCJmaWxlIjoiZWRpdC11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG4gI2NhcmR7XHJcbiAgICAgd2lkdGg6IDUwdnc7XHJcbi8vICAgICAvLyBoZWlnaHQ6IDUwJTtcclxuIH1cclxubWF0LWNhcmQtdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4gIHB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgXHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-user',
                templateUrl: './edit-user.component.html',
                styleUrls: ['./edit-user.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "GRC+":
/*!*******************************************************!*\
  !*** ./src/app/Admins/customer/customer.component.ts ***!
  \*******************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/register.service */ "k3Qe");
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var _administration_administration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../administration/administration.component */ "ChJm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
















function CustomerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerComponent_div_7_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Invalid Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerComponent_div_7_div_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Username is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerComponent_div_7_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerComponent_div_7_div_11_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerComponent_div_7_div_11_span_2_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.form.controls.username.errors.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.form.controls.username.errors.required);
} }
function CustomerComponent_div_7_div_18_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Invalid Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerComponent_div_7_div_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Email is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerComponent_div_7_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerComponent_div_7_div_18_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerComponent_div_7_div_18_span_2_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form.controls.email.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form.controls.email.errors.required);
} }
function CustomerComponent_div_7_div_28_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Invalid Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerComponent_div_7_div_28_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Password is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerComponent_div_7_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerComponent_div_7_div_28_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerComponent_div_7_div_28_span_2_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.form.controls.password.errors.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.form.controls.password.errors.required);
} }
function CustomerComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomerComponent_div_7_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onSubmit(ctx_r11.form); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomerComponent_div_7_div_11_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CustomerComponent_div_7_div_18_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerComponent_div_7_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.hide = !ctx_r13.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CustomerComponent_div_7_div_28_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("username").touched && ctx_r1.form.get("username").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("email").touched && ctx_r1.form.get("email").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r1.hide ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.hide ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("password").touched && ctx_r1.form.get("password").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.form.valid);
} }
class CustomerComponent {
    constructor(service, loaderService, fb) {
        this.service = service;
        this.loaderService = loaderService;
        this.fb = fb;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.form = this.fb.group({
            "username": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            "email": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.emailChecked]),
            "password": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]))/g)]),
        });
    }
    ngOnInit() {
    }
    emailChecked(control) {
        if (control.value != null) {
            var regexp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
            if (regexp.test(control.value) !== true) {
                return {
                    emailValidity: true
                };
            }
        }
    }
    get password() {
        return this.form.get('password');
    }
    get email() {
        return this.form.get('email');
    }
    get username() {
        return this.form.get('username');
    }
    onSubmit(form) {
        console.log(form);
        this.service.register(this.form.value).subscribe(response => {
            // console.log(response)
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                position: 'center',
                icon: 'success',
                title: 'User has been created',
                showConfirmButton: false,
                timer: 4000
            });
            setTimeout(() => {
                this.form.reset();
            }, 5000);
        });
    }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["app-customer"]], decls: 9, vars: 6, consts: [["class", "loader-container", 4, "ngIf"], ["class", "login-wrapper", "fxLayoutAlign", "center center", 4, "ngIf"], [1, "loader-container"], ["fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], [1, "example-form", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Username", "formControlName", "username", "type", "text", "required", ""], ["matPrefix", ""], ["class", "err", 4, "ngIf"], ["matInput", "", "placeholder", "Email", "formControlName", "email", "type", "email", "required", ""], ["matInput", "", "placeholder", " Password", "formControlName", "password", "type", "password", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-stroked-button", "", "color", "accent", "type", "submit", 1, "btn-block", 3, "disabled"], [1, "err"], [4, "ngIf"]], template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-administration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomerComponent_div_5_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomerComponent_div_7_Template, 31, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.loaderService.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx.loaderService.isLoading));
    } }, directives: [_administration_administration_component__WEBPACK_IMPORTED_MODULE_5__["AdministrationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatPrefix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["h1[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n}\n\n.login-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  color: #701eac;\n  margin-top: 20px;\n}\n\n.box[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  opacity: 1;\n  float: left;\n  padding: 60px 50px 40px 50px;\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  transform: scale(1);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  z-index: 5;\n  max-width: 330px;\n}\n\n.box.back[_ngcontent-%COMP%] {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  top: -20px;\n  opacity: 0.8;\n  z-index: -1;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .example-form[_ngcontent-%COMP%] {\n  min-width: 100%;\n  max-width: 300px;\n  width: 100%;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%], .login-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.err[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  display: block;\n  font-weight: 700;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 0;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  padding: 40px 70px 50px;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  border: 1px solid currentColor;\n  line-height: 54px;\n  background: #FFF7FA;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.8375em 0;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  color: #cccbca;\n}\n\n.loader-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 80vh;\n}\n\n  .mat-step-header .mat-step-icon-selected, .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #e6d3d3 !important;\n  border-radius: 1px !important;\n  border-bottom: 1px solid red;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #e6d3d3 !important;\n  opacity: 1 !important;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline-gap {\n  border-radius: 1px !important;\n  border-bottom: 1px solid red;\n}\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #55f096 !important;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: red !important;\n  opacity: 0.8 !important;\n}\n\n  .mat-input-element {\n  caret-color: red !important;\n}\n\n  .mat-form-field-invalid .mat-input-element, .mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: red !important;\n}\n\n  .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6) !important;\n}\n\n  .mat-form-field.mat-focused .mat-form-field-label {\n  color: #e6d3d3 !important;\n}\n\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: red !important;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #bbb1b1;\n}\n\n  mat-form-field input,   mat-form-field ::placeholder,   mat-form-field .mat-form-field-label {\n  color: #332e2e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjdXN0b21lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdFO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBQU47O0FBR0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUlFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlFOztFQUVFLFdBQUE7QUFESjs7QUFJRTtFQUNFLFVBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7QUFESjs7QUFJRTtFQUNFLHVCQUFBO0FBREo7O0FBSUU7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFHSTtFQUNFLG1CQUFBO0FBRE47O0FBT0U7RUFDRSxtQkFBQTtBQUpKOztBQU1FO0VBQ0ksY0FBQTtBQUhOOztBQU1FO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUhKOztBQVFFO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FBTEY7O0FBU0U7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBTkY7O0FBV0U7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FBUkY7O0FBWUU7RUFDQSx5QkFBQTtBQVRGOztBQWFFO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQVZGOztBQWNFO0VBQ0EsMkJBQUE7QUFYRjs7QUFlRTtFQUNBLDJCQUFBO0FBWkY7O0FBZ0JFO0VBQ0Esb0NBQUE7QUFiRjs7QUFrQkU7RUFDQSx5QkFBQTtBQWZGOztBQW1CRTtFQUNBLHFCQUFBO0FBaEJGOztBQW9CRTtFQUNHLGNBQUE7QUFqQkw7O0FBb0JLO0VBQ0csY0FBQTtBQWxCUiIsImZpbGUiOiJjdXN0b21lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbn1cclxuXHJcbi5sb2dpbi13cmFwcGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1jYXJkLXRpdGxle1xyXG4gICAgICBjb2xvcjogcmdiKDExMiwgMzAsIDE3Mik7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogNjBweCA1MHB4IDQwcHggNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgbWF4LXdpZHRoOiAzMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJveC5iYWNrIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgICBvcGFjaXR5OiAuODtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICBcclxuICBcclxuICAubG9naW4td3JhcHBlciAuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZnVsbC13aWR0aCxcclxuICAubG9naW4td3JhcHBlciAuYnRuLWJsb2NrIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXJye1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICBcclxuICAubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAubG9naW4td3JhcHBlciAubWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogNDBweCA3MHB4IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi13cmFwcGVyIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDU0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGN0ZBO1xyXG4gICAgLy8gY29sb3I6ICNGRkNGNzM7XHJcbiAgICAuYnV0dG9uOmRpc2FibGVkIHtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLmxvZ2luLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICBwYWRkaW5nOiAwLjgzNzVlbSAwO1xyXG4gIH1cclxuICAubWF0LWljb257XHJcbiAgICAgIGNvbG9yOiByZ2IoMjA0LCAyMDMsIDIwMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2FkZXItY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIH1cclxuICBcclxuICBcclxuICAvLyBtYXQtaWNvbi1zdGVwcGVyIHNlbGVjdGVkIGNvbG9yIGNoYW5nZSBcclxuICA6Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCwgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIxMSwgMjExKSFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICAgcmVkO1xyXG4gIH1cclxuICBcclxuICAvL2lucHV0IG91dGxpbmUgY29sb3JcclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgY29sb3I6cmdiKDIzMCwgMjExLCAyMTEpIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAxIWltcG9ydGFudDtcclxuICBcclxuICBcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2FwIHtcclxuICBib3JkZXItcmFkaXVzOiAxcHggIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgICByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8vbWF0LWlucHV0IGZvY3VzZWQgY29sb3JcclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgY29sb3I6IHJnYig4NSwgMjQwLCAxNTApIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLy8gbWF0LWlucHV0IGVycm9yIG91dGxpbmUgY29sb3JcclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7XHJcbiAgY29sb3I6IHJlZCFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMC44IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLy8gbWF0LWlucHV0IGNhcmVudCBjb2xvclxyXG4gIDo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNhcmV0LWNvbG9yOiByZWQhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAvLyBtYXQtaW5wdXQgZXJyb3IgY2FyZW50IGNvbG9yXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCwgLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY2FyZXQtY29sb3I6IHJlZCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIG1hdC1sYWJlbCBub3JtYWwgc3RhdGUgc3R5bGVcclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuNikhaW1wb3J0YW50O1xyXG4gIC8vIGNvbG9yOiAkbWFpbkNvbG9yIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLy8gbWF0LWxhYmVsIGZvY3VzZWQgc3R5bGVcclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6IHJnYigyMzAsIDIxMSwgMjExKSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIG1hdC1sYWJlbCBlcnJvciBzdHlsZVxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiByZWQhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAge1xyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgIGNvbG9yOiByZ2IoMTg3LCAxNzcsIDE3Nyk7XHJcbiAgfVxyXG4gIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICBpbnB1dCwgOjpwbGFjZWhvbGRlciwgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgICAgICBjb2xvcjogcmdiKDUxLCA0NiwgNDYpO1xyXG4gICAgIH1cclxuICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer',
                templateUrl: './customer.component.html',
                styleUrls: ['./customer.component.scss']
            }]
    }], function () { return [{ type: src_app_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] }, { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "Q/6d":
/*!***********************************************************!*\
  !*** ./src/app/Admins/add-movies/add-movies.component.ts ***!
  \***********************************************************/
/*! exports provided: AddMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMoviesComponent", function() { return AddMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _omdbapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../omdbapi.service */ "F57+");
/* harmony import */ var _save_movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../save-movies.service */ "QKvC");
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var _administration_administration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../administration/administration.component */ "ChJm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/text-field */ "8sFK");
















function AddMoviesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMoviesComponent_main_7_mat_error_8_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Title is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMoviesComponent_main_7_mat_error_8_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Title must be ", ctx_r9.searchTitle.errors.minlength.requiredLength, " characters or more ");
} }
function AddMoviesComponent_main_7_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddMoviesComponent_main_7_mat_error_8_mat_error_1_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddMoviesComponent_main_7_mat_error_8_mat_error_2_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.searchTitle.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.searchTitle.errors.minlength);
} }
function AddMoviesComponent_main_7_mat_card_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.movieDetails.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.movieDetails.Genre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.movieDetails.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r3.movieDetails.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.movieDetails.Plot, " ");
} }
function AddMoviesComponent_main_7_mat_error_22_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Title is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMoviesComponent_main_7_mat_error_22_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Title must have a valid format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMoviesComponent_main_7_mat_error_22_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Title must be ", ctx_r12.title.errors.minlength.requiredLength, " characters or more ");
} }
function AddMoviesComponent_main_7_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddMoviesComponent_main_7_mat_error_22_mat_error_1_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddMoviesComponent_main_7_mat_error_22_mat_error_2_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddMoviesComponent_main_7_mat_error_22_mat_error_3_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.title.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.title.errors.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.title.errors.minlength);
} }
function AddMoviesComponent_main_7_mat_error_25_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Genre is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMoviesComponent_main_7_mat_error_25_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Genre must be ", ctx_r14.genre.errors.minlength.requiredLength, " characters or more ");
} }
function AddMoviesComponent_main_7_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddMoviesComponent_main_7_mat_error_25_mat_error_1_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddMoviesComponent_main_7_mat_error_25_mat_error_2_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.genre.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.genre.errors.minlength);
} }
function AddMoviesComponent_main_7_mat_error_34_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Number in stock is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMoviesComponent_main_7_mat_error_34_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Number in stock must be ", ctx_r16.numberInStock.errors.minlength.requiredLength, " characters or more ");
} }
function AddMoviesComponent_main_7_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddMoviesComponent_main_7_mat_error_34_mat_error_1_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddMoviesComponent_main_7_mat_error_34_mat_error_2_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.numberInStock.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.numberInStock.errors.minlength);
} }
function AddMoviesComponent_main_7_mat_error_37_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Daily Rent is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMoviesComponent_main_7_mat_error_37_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Daily Rent must be ", ctx_r18.dailyRentalRate.errors.minlength.requiredLength, " characters or more ");
} }
function AddMoviesComponent_main_7_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddMoviesComponent_main_7_mat_error_37_mat_error_1_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddMoviesComponent_main_7_mat_error_37_mat_error_2_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.dailyRentalRate.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.dailyRentalRate.errors.minlength);
} }
function AddMoviesComponent_main_7_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddMoviesComponent_main_7_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.lookupOmdb(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Find Movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddMoviesComponent_main_7_mat_error_8_Template, 3, 2, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Find Movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddMoviesComponent_main_7_mat_card_14_Template, 10, 5, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Add Movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddMoviesComponent_main_7_Template_form_ngSubmit_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddMoviesComponent_main_7_mat_error_22_Template, 4, 3, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddMoviesComponent_main_7_mat_error_25_Template, 3, 2, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AddMoviesComponent_main_7_mat_error_34_Template, 3, 2, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AddMoviesComponent_main_7_mat_error_37_Template, 3, 2, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Add New Movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.searchForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.searchTitle.touched && ctx_r1.searchTitle.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.searchForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.movieDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.title.touched && ctx_r1.title.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.genre.touched && ctx_r1.genre.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.numberInStock.touched && ctx_r1.numberInStock.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dailyRentalRate.touched && ctx_r1.dailyRentalRate.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.form.valid);
} }
class AddMoviesComponent {
    constructor(omdbLookupservice, saveMoviesService, loaderService) {
        this.omdbLookupservice = omdbLookupservice;
        this.saveMoviesService = saveMoviesService;
        this.loaderService = loaderService;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            searchTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
            ]),
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
            ]),
            genre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
            ]),
            plot: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
            ]),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
            ]),
            poster: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
            ]),
            numberInStock: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
            ]),
            dailyRentalRate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1),
            ]),
        });
    }
    ngOnInit() {
    }
    lookupOmdb() {
        this.omdbLookupservice.find(this.searchTitle.value).subscribe(response => {
            this.movieDetails = Object.assign({}, response);
            this.title.setValue(this.movieDetails.Title);
            this.genre.setValue(this.movieDetails.Genre);
            this.plot.setValue(this.movieDetails.Plot);
            this.year.setValue(this.movieDetails.Year);
            this.poster.setValue(this.movieDetails.Poster);
            this.searchForm.reset();
        });
    }
    onSubmit() {
        this.saveMoviesService.save(this.form.value).subscribe(response => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                position: 'center',
                icon: 'success',
                title: 'Movie has been added',
                showConfirmButton: false,
                timer: 4000
            });
            this.form.reset();
        });
    }
    get searchTitle() {
        return this.searchForm.get('searchTitle');
    }
    //form
    get genre() {
        return this.form.get('genre');
    }
    get plot() {
        return this.form.get('plot');
    }
    get year() {
        return this.form.get('year');
    }
    get poster() {
        return this.form.get('poster');
    }
    get numberInStock() {
        return this.form.get('numberInStock');
    }
    get dailyRentalRate() {
        return this.form.get('dailyRentalRate');
    }
    get title() {
        return this.form.get('title');
    }
}
AddMoviesComponent.ɵfac = function AddMoviesComponent_Factory(t) { return new (t || AddMoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_omdbapi_service__WEBPACK_IMPORTED_MODULE_3__["OmdbapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_save_movies_service__WEBPACK_IMPORTED_MODULE_4__["SaveMoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"])); };
AddMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddMoviesComponent, selectors: [["app-add-movies"]], decls: 9, vars: 6, consts: [["class", "loader-container", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "loader-container"], [1, "container"], [1, "search-container"], ["id", "card", 1, "mat-elevation-z24"], [3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "placeholder", "Title:", "formControlName", "searchTitle", "required", ""], [4, "ngIf"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "form-details"], ["class", "movie-details mat-elevation-z24", 4, "ngIf"], [1, "form"], [1, "mat-elevation-z24"], [1, "form-container", 3, "formGroup", "ngSubmit"], ["matInput", "", "type", "title", "formControlName", "title", "placeholder", "Title:", "required", ""], ["matInput", "", "placeholder", "Genre:", "formControlName", "genre", "required", ""], ["matInput", "", "placeholder", "Plot:", "formControlName", "plot", "cdkTextareaAutosize", ""], ["matInput", "", "placeholder", "Year:", "formControlName", "year"], ["matInput", "", "placeholder", "Poster:", "formControlName", "poster"], ["matInput", "", "placeholder", "Number in stock:", "formControlName", "numberInStock", "type", "number", "required", ""], ["matInput", "", "placeholder", "Daily Rental Rate (\u20B5):", "formControlName", "dailyRentalRate", "type", "number", "required", ""], [1, "movie-details", "mat-elevation-z24"], ["mat-card-image", "", 3, "src", "alt"]], template: function AddMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-administration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddMoviesComponent_div_5_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddMoviesComponent_main_7_Template, 40, 10, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.loaderService.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx.loaderService.isLoading));
    } }, directives: [_administration_administration_component__WEBPACK_IMPORTED_MODULE_6__["AdministrationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_13__["CdkTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".loader-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 80vh;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 30vw;\n  max-height: 35vh;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.form-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n}\n\n.form[_ngcontent-%COMP%] {\n  width: auto;\n  height: 100%;\n}\n\n.movie-details[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 60vh;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50vw;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: max-content;\n  box-sizing: border-box;\n  height: 100%;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.5vw;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGQtbW92aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFESjs7QUFTQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFOSjs7QUFTQTtFQUNJLFdBQUE7QUFOSjs7QUFTQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBV0E7RUFDSSwwQkFBQTtFQUFBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBUko7O0FBV0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBUko7O0FBVUE7RUFDSSxXQUFBO0FBUEoiLCJmaWxlIjoiYWRkLW1vdmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMzB2dztcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZm9ybS1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5tb3ZpZS1kZXRhaWxzIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbn1cclxuXHJcbi8vIC5mb3JtLWNvbnRhaW5lcntcclxuLy8gZGlzcGxheTpmbGV4O1xyXG4vLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLy8gd2lkdGg6IDQwJTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNXZ3O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddMoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-movies',
                templateUrl: './add-movies.component.html',
                styleUrls: ['./add-movies.component.scss']
            }]
    }], function () { return [{ type: _omdbapi_service__WEBPACK_IMPORTED_MODULE_3__["OmdbapiService"] }, { type: _save_movies_service__WEBPACK_IMPORTED_MODULE_4__["SaveMoviesService"] }, { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "QKvC":
/*!****************************************!*\
  !*** ./src/app/save-movies.service.ts ***!
  \****************************************/
/*! exports provided: SaveMoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveMoviesService", function() { return SaveMoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class SaveMoviesService {
    constructor(http) {
        this.http = http;
        this.url = "https://vhsrentals.herokuapp.com/api/movies/add-movie";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'x-auth-token': `${localStorage.getItem('token')}`
            })
        };
    }
    save(movie) {
        return this.http.post(this.url, movie, this.httpOptions);
    }
    ;
}
SaveMoviesService.ɵfac = function SaveMoviesService_Factory(t) { return new (t || SaveMoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SaveMoviesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SaveMoviesService, factory: SaveMoviesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaveMoviesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "RRZc":
/*!********************************************************!*\
  !*** ./src/app/screens/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../register.service */ "k3Qe");
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
















function RegisterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_main_3_mat_error_9_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_main_3_mat_error_9_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email must have a valid format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_main_3_mat_error_9_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email must be ", ctx_r10.email.errors.minlength.requiredLength, " characters or more ");
} }
function RegisterComponent_main_3_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_main_3_mat_error_9_mat_error_1_Template, 2, 0, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_main_3_mat_error_9_mat_error_2_Template, 2, 0, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_main_3_mat_error_9_mat_error_3_Template, 2, 1, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.email.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.email.errors.minlength);
} }
function RegisterComponent_main_3_mat_error_14_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_main_3_mat_error_14_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Username must be ", ctx_r12.username.errors.minlength.requiredLength, " characters or more ");
} }
function RegisterComponent_main_3_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_main_3_mat_error_14_mat_error_1_Template, 2, 0, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_main_3_mat_error_14_mat_error_2_Template, 2, 1, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.username.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.username.errors.minlength);
} }
function RegisterComponent_main_3_mat_error_19_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_main_3_mat_error_19_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password must be ", ctx_r14.password.errors.minlength.requiredLength, " characters or more ");
} }
function RegisterComponent_main_3_mat_error_19_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Password must contain at least one digit. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Password must contain at least one lowercase letter. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Password must contain at least one uppercase letter. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_main_3_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_main_3_mat_error_19_mat_error_1_Template, 2, 0, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_main_3_mat_error_19_mat_error_2_Template, 2, 1, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_main_3_mat_error_19_mat_error_3_Template, 7, 0, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.password.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.password.errors.pattern);
} }
function RegisterComponent_main_3_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Passwords should match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_main_3_mat_error_25_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirmation password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_main_3_mat_error_25_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password must be ", ctx_r17.confirmpassword.errors.minlength.requiredLength, " characters or more ");
} }
function RegisterComponent_main_3_mat_error_25_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Password must contain at least one digit. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Password must contain at least one lowercase letter. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Password must contain at least one uppercase letter. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_main_3_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_main_3_mat_error_25_mat_error_1_Template, 2, 0, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_main_3_mat_error_25_mat_error_2_Template, 2, 1, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_main_3_mat_error_25_mat_error_3_Template, 7, 0, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.confirmpassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.confirmpassword.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.confirmpassword.errors.pattern);
} }
function RegisterComponent_main_3_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Passwords should match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_main_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " VHS RENTALS REGISTRATION FORM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_main_3_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegisterComponent_main_3_mat_error_9_Template, 4, 3, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RegisterComponent_main_3_mat_error_14_Template, 3, 2, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterComponent_main_3_mat_error_19_Template, 4, 3, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegisterComponent_main_3_mat_error_20_Template, 3, 0, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterComponent_main_3_mat_error_25_Template, 4, 3, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegisterComponent_main_3_mat_error_26_Template, 3, 0, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "SIGN UP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Already have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.email.touched && ctx_r1.email.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.username.touched && ctx_r1.username.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.password.touched && ctx_r1.password.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.password.touched && ctx_r1.confirmpassword.touched && ctx_r1.confirmpassword.value !== ctx_r1.password.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.confirmpassword.touched && ctx_r1.confirmpassword.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.password.touched && ctx_r1.confirmpassword.touched && ctx_r1.confirmpassword.value !== ctx_r1.password.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.form.valid);
} }
class RegisterComponent {
    constructor(router, service, loaderService) {
        this.router = router;
        this.service = service;
        this.loaderService = loaderService;
        this.hide = true;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            wallet: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('200'),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)
            ]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]))/g)
                //at least 1 digit ,at least one lowercase char , at lease 1 uppercase char and one special char
            ]),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]))/g)
                //at least 1 digit ,at least one lowercase char , at lease 1 uppercase char and one special char
            ]),
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.disableConfirmPassword();
        // let data = this.formatDataForEndPoint();
        this.service.register(this.form.value).subscribe(response => {
            // this.openDialog()
            console.log(response);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                position: 'center',
                icon: 'success',
                title: 'Registration successfull',
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                this.router.navigate(['/login']);
            }, 5000);
        }, (error) => {
            // this.dialog.open(FormErrorComponent,{data:{message:"test"}})
            if (error.status === 404) {
                alert("Signup unsuccessful ");
            }
            else {
                if (error.status === 201) {
                    this.form.setErrors(error.json());
                }
                else {
                    alert('An unexpected error occurred:' + error);
                }
            }
        });
    }
    disableConfirmPassword() {
        this.form.get('confirmpassword').disable({ onlySelf: true });
        this.form.updateValueAndValidity();
    }
    get email() {
        return this.form.get('email');
    }
    get username() {
        return this.form.get('username');
    }
    get password() {
        return this.form.get('password');
    }
    get confirmpassword() {
        return this.form.get('confirmpassword');
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 5, vars: 6, consts: [["class", "loader-container", 4, "ngIf"], [1, "register-bg-image"], ["class", "container", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], [1, "loader-container"], [2, "top", "50%", "left", "50%"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "container"], ["id", "card", 1, "mat-elevation-z24"], [1, "form-container", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "Email:", "required", ""], ["matPrefix", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Username:", "formControlName", "username", "required", ""], ["matInput", "", "placeholder", "Password:", "formControlName", "password", "required", "", "type", "password"], ["matInput", "", "placeholder", "Password (confirm):", "formControlName", "confirmpassword", "required", "", "type", "password"], ["mat-stroked-button", "", "color", "accent", "type", "submit", 3, "disabled"], ["mat-button", "", "routerLink", "/login", "color", "primary"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RegisterComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_main_3_Template, 33, 8, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.loaderService.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.loaderService.isLoading));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatPrefix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  justify-items: center;\n}\n\n.register-bg-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://i.redd.it/128uj78z58m01.jpg\");\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  color: #cccbca;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  color: #E8F0FE;\n}\n\n.example-full-width[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #E8F0FE;\n  padding: 5px 1px 0px;\n  border: 0px;\n  border-radius: 4px;\n  line-height: 20px;\n}\n\np[_ngcontent-%COMP%] {\n  color: #E8F0FE;\n}\n\n#card[_ngcontent-%COMP%] {\n  width: 40vw;\n  transform: scale(1);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  z-index: 5;\n  background: rgba(0, 0, 0, 0.75);\n}\n\n#card.back[_ngcontent-%COMP%] {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  top: -20px;\n  opacity: 0.8;\n  z-index: -1;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.loader-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: rgba(26, 26, 26, 0.75);\n  opacity: 1;\n  z-index: 99;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.mat-stroked-button[_ngcontent-%COMP%] {\n  border: 1px solid currentColor;\n  line-height: 54px;\n  background: #FFF7FA;\n}\n\n  .mat-step-header .mat-step-icon-selected, .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #e6d3d3 !important;\n  border-radius: 1px !important;\n  border-bottom: 1px solid red;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #e6d3d3 !important;\n  opacity: 1 !important;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline-gap {\n  border-radius: 1px !important;\n  border-bottom: 1px solid red;\n}\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #55f096 !important;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: red !important;\n  opacity: 0.8 !important;\n}\n\n  .mat-input-element {\n  caret-color: red !important;\n}\n\n  .mat-form-field-invalid .mat-input-element, .mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: red !important;\n}\n\n  .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6) !important;\n}\n\n  .mat-form-field.mat-focused .mat-form-field-label {\n  color: #e6d3d3 !important;\n}\n\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: red !important;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #bbb1b1;\n}\n\n  mat-form-field input,   mat-form-field ::placeholder,   mat-form-field .mat-form-field-label {\n  color: #332e2e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQURKOztBQU1BO0VBRUUsNERBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFKRjs7QUFRQTtFQUNFLGNBQUE7QUFMRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFRQTtFQUNFLG1CQUFBO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFFQSxpQkFBQTtBQVBKOztBQVVBO0VBQ0UsY0FBQTtBQVBGOztBQVNBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtBQU5KOztBQVVBO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUEY7O0FBU0E7RUFDSSxrQkFBQTtBQU5KOztBQVNBO0VBQ0ksVUFBQTtBQU5KOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFMSjs7QUFPRTtFQUNFLGtCQUFBO0FBSko7O0FBTUU7RUFDRSxVQUFBO0FBSEo7O0FBTUU7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFXQTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQVJGOztBQVlBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQVRGOztBQWNBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtBQVhGOztBQWVBO0VBQ0UseUJBQUE7QUFaRjs7QUFnQkE7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0FBYkY7O0FBaUJBO0VBQ0UsMkJBQUE7QUFkRjs7QUFrQkE7RUFDRSwyQkFBQTtBQWZGOztBQW1CQTtFQUNFLG9DQUFBO0FBaEJGOztBQXFCQTtFQUNFLHlCQUFBO0FBbEJGOztBQXNCQTtFQUNFLHFCQUFBO0FBbkJGOztBQXVCRTtFQUNHLGNBQUE7QUFwQkw7O0FBdUJLO0VBQ0csY0FBQTtBQXJCUiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIFxyXG59XHJcblxyXG5cclxuLmZvcm0tY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi5yZWdpc3Rlci1iZy1pbWFnZXtcclxuICAvLyBib3JkZXI6IHNvbGlkIDFweCAjMDAwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pLnJlZGQuaXQvMTI4dWo3OHo1OG0wMS5qcGcnKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbi5tYXQtaWNvbntcclxuICBjb2xvcjogcmdiKDIwNCwgMjAzLCAyMDIpO1xyXG59XHJcbi5tYXQtY2FyZC10aXRsZXtcclxuICBjb2xvcjogI0U4RjBGRTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGggaW5wdXR7XHJcbiAgYmFja2dyb3VuZDogI0U4RjBGRTtcclxuICAgIHBhZGRpbmc6IDVweCAxcHggMHB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIC8vIGhlaWdodDogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gXHJcbn1cclxucHtcclxuICBjb2xvcjogI0U4RjBGRTtcclxufVxyXG4jY2FyZHtcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjc1KTtcclxuICAgIC8vIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG4jY2FyZC5iYWNrIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICB0b3A6IC0yMHB4O1xyXG4gIG9wYWNpdHk6IC44O1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbm1hdC1jYXJkLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcbi5sb2FkZXItY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI2LCAyNiwgMjYsIDAuNzUpO1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgfVxyXG4gIHB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgXHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG5cclxuICAubWF0LXN0cm9rZWQtYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1NHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjdGQTtcclxuICAgIC8vIGNvbG9yOiAjRkZDRjczO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gICAvLyBtYXQtaWNvbi1zdGVwcGVyIHNlbGVjdGVkIGNvbG9yIGNoYW5nZSBcclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSwgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMTEsIDIxMSkhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAgIHJlZDtcclxufVxyXG5cclxuLy9pbnB1dCBvdXRsaW5lIGNvbG9yXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBjb2xvcjpyZ2IoMjMwLCAyMTEsIDIxMSkhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDEhaW1wb3J0YW50O1xyXG4gIFxyXG4gIFxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAgIHJlZDtcclxufVxyXG5cclxuLy9tYXQtaW5wdXQgZm9jdXNlZCBjb2xvclxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgY29sb3I6IHJnYig4NSwgMjQwLCAxNTApIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gbWF0LWlucHV0IGVycm9yIG91dGxpbmUgY29sb3JcclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre1xyXG4gIGNvbG9yOiByZWQhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDAuOCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIG1hdC1pbnB1dCBjYXJlbnQgY29sb3JcclxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY2FyZXQtY29sb3I6IHJlZCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIG1hdC1pbnB1dCBlcnJvciBjYXJlbnQgY29sb3JcclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCwgLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY2FyZXQtY29sb3I6IHJlZCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIG1hdC1sYWJlbCBub3JtYWwgc3RhdGUgc3R5bGVcclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjYpIWltcG9ydGFudDtcclxuICAvLyBjb2xvcjogJG1haW5Db2xvciFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIG1hdC1sYWJlbCBmb2N1c2VkIHN0eWxlXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogcmdiKDIzMCwgMjExLCAyMTEpIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gbWF0LWxhYmVsIGVycm9yIHN0eWxlXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiByZWQhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgIGNvbG9yOiByZ2IoMTg3LCAxNzcsIDE3Nyk7XHJcbiAgfVxyXG4gIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICBpbnB1dCwgOjpwbGFjZWhvbGRlciwgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgICAgICBjb2xvcjogcmdiKDUxLCA0NiwgNDYpO1xyXG4gICAgIH1cclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"] }, { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class AppComponent {
    constructor() {
        this.title = 'VHS-Rental';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "VQsg":
/*!******************************************************!*\
  !*** ./src/app/edit-rental/edit-rental.component.ts ***!
  \******************************************************/
/*! exports provided: EditRentalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRentalComponent", function() { return EditRentalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _get_movies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../get-movies.service */ "4cJH");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
















function EditRentalComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r5._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r5.username, " ");
} }
function EditRentalComponent_mat_error_9_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select the username of customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditRentalComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditRentalComponent_mat_error_9_mat_error_1_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userId.errors.required);
} }
function EditRentalComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", movie_r7._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", movie_r7.title, " ");
} }
function EditRentalComponent_mat_error_15_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Movie is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditRentalComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditRentalComponent_mat_error_15_mat_error_1_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.movieId.errors.required);
} }
function EditRentalComponent_mat_error_18_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Rntal period is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditRentalComponent_mat_error_18_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Min value allowed is 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditRentalComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditRentalComponent_mat_error_18_mat_error_1_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditRentalComponent_mat_error_18_mat_error_2_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.daysBooked.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.daysBooked.errors.min);
} }
class EditRentalComponent {
    constructor(dialogRef, data, userservice, moviesservice) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userservice = userservice;
        this.moviesservice = moviesservice;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.user._id, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            movieId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            daysBooked: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)
            ]),
            total: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
        });
    }
    ngOnInit() {
        this.userservice.fetchUsers().subscribe(response => {
            this.users = response;
            this.moviesservice.fetchMovies().subscribe(response => {
                this.movies = response;
                this.userId.setValue(this.data.user._id);
                this.movieId.setValue(this.data.movie._id);
            });
        });
    }
    get movieId() {
        return this.form.get('movieId');
    }
    get userId() {
        return this.form.get('userId');
    }
    get daysBooked() {
        return this.form.get('daysBooked');
    }
    get total() {
        return this.form.get('total');
    }
    onSubmit() {
        console.log(this.form.value);
    }
    onUpdate() {
        this.userservice.updateUser(this.data._id, this.form.value).subscribe(response => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                position: 'center',
                icon: 'success',
                title: 'User details have been edited',
                showConfirmButton: false,
                timer: 4000
            });
        });
        this.form.reset();
        this.onClose();
    }
    onClose() {
        this.form.reset();
        this.dialogRef.close();
    }
}
EditRentalComponent.ɵfac = function EditRentalComponent_Factory(t) { return new (t || EditRentalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_get_movies_service__WEBPACK_IMPORTED_MODULE_5__["GetMoviesService"])); };
EditRentalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditRentalComponent, selectors: [["app-edit-rental"]], decls: 21, vars: 9, consts: [["id", "card", 1, "mat-elevation-z24"], [1, "form-container", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matInput", "", "placeholder", "Rental Period in days:", "formControlName", "daysBooked", "type", "number", "required", ""], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], [3, "value"]], template: function EditRentalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Rental");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditRentalComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Rentee username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditRentalComponent_mat_option_8_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditRentalComponent_mat_error_9_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Movie Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditRentalComponent_mat_option_14_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditRentalComponent_mat_error_15_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditRentalComponent_mat_error_18_Template, 3, 2, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Rent Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.userId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userId.touched && ctx.userId.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.movieId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieId.touched && ctx.movieId.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.daysBooked.touched && ctx.daysBooked.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: [".form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n#card[_ngcontent-%COMP%] {\n  width: 50vw;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVkaXQtcmVudGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdBO0VBQ0ksV0FBQTtBQUFKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0FBREoiLCJmaWxlIjoiZWRpdC1yZW50YWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4jY2FyZCB7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIC8vICAgICAvLyBoZWlnaHQ6IDUwJTtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditRentalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-rental',
                templateUrl: './edit-rental.component.html',
                styleUrls: ['./edit-rental.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _get_movies_service__WEBPACK_IMPORTED_MODULE_5__["GetMoviesService"] }]; }, null); })();


/***/ }),

/***/ "Vqd4":
/*!**********************************************************!*\
  !*** ./src/app/delete-record/delete-record.component.ts ***!
  \**********************************************************/
/*! exports provided: DeleteRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRecordComponent", function() { return DeleteRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");




class DeleteRecordComponent {
    constructor() { }
    ngOnInit() {
    }
}
DeleteRecordComponent.ɵfac = function DeleteRecordComponent_Factory(t) { return new (t || DeleteRecordComponent)(); };
DeleteRecordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteRecordComponent, selectors: [["app-delete-record"]], decls: 10, vars: 1, consts: [[1, "form-container"], ["mat-dialog-title", ""], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "warn", 3, "mat-dialog-close"]], template: function DeleteRecordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete record?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " This action cannot be undone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRlbGV0ZS1yZWNvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoiZGVsZXRlLXJlY29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICA7XHJcbiAgICB3aWR0aDogNTB2dztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteRecordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-record',
                templateUrl: './delete-record.component.html',
                styleUrls: ['./delete-record.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XaBM":
/*!******************************************************!*\
  !*** ./src/app/edit-wallet/edit-wallet.component.ts ***!
  \******************************************************/
/*! exports provided: EditWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWalletComponent", function() { return EditWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");













function EditWalletComponent_mat_error_9_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " wallet is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditWalletComponent_mat_error_9_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Ammount must be greater than ", ctx_r2.wallet.errors.min.min, " ");
} }
function EditWalletComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditWalletComponent_mat_error_9_mat_error_1_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditWalletComponent_mat_error_9_mat_error_2_Template, 2, 1, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.wallet.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.wallet.errors.min);
} }
class EditWalletComponent {
    constructor(dialogRef, data, userservice) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userservice = userservice;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)
            ]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)
            ]),
            isAdmin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('false', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            wallet: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('false', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)
            ]),
        });
    }
    ngOnInit() {
        this.email.setValue(this.data.email);
        this.username.setValue(this.data.username);
        this.isAdmin.setValue(this.data.isAdmin);
        this.wallet.setValue(this.data.wallet);
    }
    get email() {
        return this.form.get('email');
    }
    get username() {
        return this.form.get('username');
    }
    get isAdmin() {
        return this.form.get('isAdmin');
    }
    get wallet() {
        return this.form.get('wallet');
    }
    onUpdate() {
        this.userservice.updateUser(this.data._id, this.form.value).subscribe(response => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                position: 'center',
                icon: 'success',
                title: 'Wallet has been updated',
                showConfirmButton: false,
                timer: 4000
            });
        });
        this.form.reset();
        this.onClose();
    }
    onClose() {
        this.form.reset();
        this.dialogRef.close();
    }
}
EditWalletComponent.ɵfac = function EditWalletComponent_Factory(t) { return new (t || EditWalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
EditWalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditWalletComponent, selectors: [["app-edit-wallet"]], decls: 12, vars: 4, consts: [[1, "container"], ["id", "card", 1, "mat-elevation-z24"], [1, "form-container", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "placeholder", "Wallet:", "formControlName", "wallet", "type", "number", "required", ""], [4, "ngIf"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function EditWalletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Edit Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditWalletComponent_Template_form_ngSubmit_4_listener() { return ctx.onUpdate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditWalletComponent_mat_error_9_Template, 3, 2, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.username.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wallet.touched && ctx.wallet.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: [".form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  justify-items: center;\n}\n\n#card[_ngcontent-%COMP%] {\n  width: 50vw;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVkaXQtd2FsbGV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7QUFERiIsImZpbGUiOiJlZGl0LXdhbGxldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuI2NhcmQge1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIC8vICAgICAvLyBoZWlnaHQ6IDUwJTtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5wIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditWalletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-wallet',
                templateUrl: './edit-wallet.component.html',
                styleUrls: ['./edit-wallet.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./angular-material.module */ "rhD1");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _screens_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screens/login/login.component */ "jUle");
/* harmony import */ var _screens_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screens/register/register.component */ "RRZc");
/* harmony import */ var _Admins_movies_movies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Admins/movies/movies.component */ "q9x8");
/* harmony import */ var _Admins_rentals_rentals_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Admins/rentals/rentals.component */ "okC7");
/* harmony import */ var _users_returns_returns_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/returns/returns.component */ "cXBL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _Admins_add_movies_add_movies_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Admins/add-movies/add-movies.component */ "Q/6d");
/* harmony import */ var _Admins_customer_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Admins/customer/customer.component */ "GRC+");
/* harmony import */ var _screens_no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./screens/no-page-found/no-page-found.component */ "iF5b");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _loader_interceptor_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./loader/interceptor.service */ "sW91");
/* harmony import */ var _Admins_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Admins/movie-details/movie-details.component */ "7Vzl");
/* harmony import */ var _edit_movie_edit_movie_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit-movie/edit-movie.component */ "tiaY");
/* harmony import */ var _delete_record_delete_record_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./delete-record/delete-record.component */ "Vqd4");
/* harmony import */ var _Admins_administration_administration_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Admins/administration/administration.component */ "ChJm");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _store_front_store_front_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./store-front/store-front.component */ "BNEf");
/* harmony import */ var _rent_movie_rent_movie_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./rent-movie/rent-movie.component */ "0tq1");
/* harmony import */ var _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./check-out/check-out.component */ "nPMS");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "G9Y4");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./add-user/add-user.component */ "9DFq");
/* harmony import */ var _edit_rental_edit_rental_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./edit-rental/edit-rental.component */ "VQsg");
/* harmony import */ var _add_rental_add_rental_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./add-rental/add-rental.component */ "qgk/");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./wallet/wallet.component */ "EBTS");
/* harmony import */ var _edit_wallet_edit_wallet_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./edit-wallet/edit-wallet.component */ "XaBM");







































// import { MdbModule } from 'mdb-angular-ui-kit';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"],
            useClass: _loader_interceptor_service__WEBPACK_IMPORTED_MODULE_20__["InterceptorService"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
            // AngularMaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrModule"].forRoot({
                timeOut: 4000,
                progressBar: true,
                preventDuplicates: true,
                progressAnimation: 'decreasing'
            }),
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _screens_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _screens_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
        _Admins_movies_movies_component__WEBPACK_IMPORTED_MODULE_9__["MoviesComponent"],
        _Admins_rentals_rentals_component__WEBPACK_IMPORTED_MODULE_10__["RentalsComponent"],
        _users_returns_returns_component__WEBPACK_IMPORTED_MODULE_11__["ReturnsComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"],
        _Admins_add_movies_add_movies_component__WEBPACK_IMPORTED_MODULE_14__["AddMoviesComponent"],
        _Admins_customer_customer_component__WEBPACK_IMPORTED_MODULE_15__["CustomerComponent"],
        _screens_no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_16__["NoPageFoundComponent"],
        _Admins_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_21__["MovieDetailsComponent"],
        _edit_movie_edit_movie_component__WEBPACK_IMPORTED_MODULE_22__["EditMovieComponent"],
        _delete_record_delete_record_component__WEBPACK_IMPORTED_MODULE_23__["DeleteRecordComponent"],
        _Admins_administration_administration_component__WEBPACK_IMPORTED_MODULE_24__["AdministrationComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_29__["FooterComponent"],
        _store_front_store_front_component__WEBPACK_IMPORTED_MODULE_26__["StoreFrontComponent"],
        _rent_movie_rent_movie_component__WEBPACK_IMPORTED_MODULE_27__["RentMovieComponent"],
        _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_28__["CheckOutComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_30__["UserComponent"],
        _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_31__["EditUserComponent"],
        _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_32__["AddUserComponent"],
        _edit_rental_edit_rental_component__WEBPACK_IMPORTED_MODULE_33__["EditRentalComponent"],
        _add_rental_add_rental_component__WEBPACK_IMPORTED_MODULE_34__["AddRentalComponent"],
        _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_35__["WalletComponent"],
        _edit_wallet_edit_wallet_component__WEBPACK_IMPORTED_MODULE_36__["EditWalletComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
        // AngularMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _screens_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _screens_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                    _Admins_movies_movies_component__WEBPACK_IMPORTED_MODULE_9__["MoviesComponent"],
                    _Admins_rentals_rentals_component__WEBPACK_IMPORTED_MODULE_10__["RentalsComponent"],
                    _users_returns_returns_component__WEBPACK_IMPORTED_MODULE_11__["ReturnsComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"],
                    _Admins_add_movies_add_movies_component__WEBPACK_IMPORTED_MODULE_14__["AddMoviesComponent"],
                    _Admins_customer_customer_component__WEBPACK_IMPORTED_MODULE_15__["CustomerComponent"],
                    _screens_no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_16__["NoPageFoundComponent"],
                    _Admins_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_21__["MovieDetailsComponent"],
                    _edit_movie_edit_movie_component__WEBPACK_IMPORTED_MODULE_22__["EditMovieComponent"],
                    _delete_record_delete_record_component__WEBPACK_IMPORTED_MODULE_23__["DeleteRecordComponent"],
                    _Admins_administration_administration_component__WEBPACK_IMPORTED_MODULE_24__["AdministrationComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_29__["FooterComponent"],
                    _store_front_store_front_component__WEBPACK_IMPORTED_MODULE_26__["StoreFrontComponent"],
                    _rent_movie_rent_movie_component__WEBPACK_IMPORTED_MODULE_27__["RentMovieComponent"],
                    _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_28__["CheckOutComponent"],
                    _user_user_component__WEBPACK_IMPORTED_MODULE_30__["UserComponent"],
                    _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_31__["EditUserComponent"],
                    _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_32__["AddUserComponent"],
                    _edit_rental_edit_rental_component__WEBPACK_IMPORTED_MODULE_33__["EditRentalComponent"],
                    _add_rental_add_rental_component__WEBPACK_IMPORTED_MODULE_34__["AddRentalComponent"],
                    _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_35__["WalletComponent"],
                    _edit_wallet_edit_wallet_component__WEBPACK_IMPORTED_MODULE_36__["EditWalletComponent"],
                ],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                    // AngularMaterialModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrModule"].forRoot({
                        timeOut: 4000,
                        progressBar: true,
                        preventDuplicates: true,
                        progressAnimation: 'decreasing'
                    }),
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"],
                ],
                providers: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"],
                        useClass: _loader_interceptor_service__WEBPACK_IMPORTED_MODULE_20__["InterceptorService"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cXBL":
/*!****************************************************!*\
  !*** ./src/app/users/returns/returns.component.ts ***!
  \****************************************************/
/*! exports provided: ReturnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnsComponent", function() { return ReturnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class ReturnsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReturnsComponent.ɵfac = function ReturnsComponent_Factory(t) { return new (t || ReturnsComponent)(); };
ReturnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReturnsComponent, selectors: [["app-returns"]], decls: 1, vars: 0, template: function ReturnsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "user-dashboard");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXR1cm5zLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReturnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-returns',
                templateUrl: './returns.component.html',
                styleUrls: ['./returns.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "edGd":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");





class LoginService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.url = "https://vhsrentals.herokuapp.com/api/auth";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            })
        };
    }
    userLogin(data) {
        return this.http.post(this.url, data, this.httpOptions);
    }
    ;
    isAuthenticated() {
        // get the auth token from localStorage
        let users = localStorage.getItem('token');
        // check if token is set, then...
        if (users) {
            return true;
        }
        return false;
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "main-footer"], [1, "text-center", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"], ["href", "#", 1, "text-dark"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A9 2021 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Donald & Jocelyn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  background: gray;\n  font-size: large;\n}\n\n.text-dark[_ngcontent-%COMP%] {\n  color: #252424;\n  list-style: none;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNBOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWZvb3RlcntcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5iYWNrZ3JvdW5kOiBncmF5O1xyXG5mb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4udGV4dC1kYXJre1xyXG4gICAgY29sb3I6IHJnYigzNywgMzYsIDM2KTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iF5b":
/*!******************************************************************!*\
  !*** ./src/app/screens/no-page-found/no-page-found.component.ts ***!
  \******************************************************************/
/*! exports provided: NoPageFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPageFoundComponent", function() { return NoPageFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");




class NoPageFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NoPageFoundComponent.ɵfac = function NoPageFoundComponent_Factory(t) { return new (t || NoPageFoundComponent)(); };
NoPageFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoPageFoundComponent, selectors: [["app-no-page-found"]], decls: 7, vars: 0, consts: [["fxLayout", "column wrap", "fxLayoutGap", "60px", "fxLayoutAlign", "center center"], ["fxFlex", ""], ["mode", "indeterminate"]], template: function NoPageFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 404 We are searching for your page... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ... But we can not find it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"]], styles: ["section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1), section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  color: blue;\n  font-size: 50px;\n}\n\nsection[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  margin-top: 20px;\n}\n\nsection[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuby1wYWdlLWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0oiLCJmaWxlIjoibm8tcGFnZS1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24gZGl2Om50aC1jaGlsZCgxKSwgc2VjdGlvbiBkaXY6bnRoLWNoaWxkKDMpe1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbnNlY3Rpb24gZGl2Om50aC1jaGlsZCgxKXtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbnNlY3Rpb24gZGl2Om50aC1jaGlsZCgyKXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoPageFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-no-page-found',
                templateUrl: './no-page-found.component.html',
                styleUrls: ['./no-page-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jMFA":
/*!*****************************************!*\
  !*** ./src/app/delete-movie.service.ts ***!
  \*****************************************/
/*! exports provided: DeleteMovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMovieService", function() { return DeleteMovieService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");




class DeleteMovieService {
    constructor(http) {
        this.http = http;
        this.url = "https://vhsrentals.herokuapp.com/api/movies/delete-movie/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'x-auth-token': `${localStorage.getItem('token')}`
            })
        };
    }
    deleteMovie(id) {
        return this.http.delete(this.url + id, this.httpOptions);
    }
    ;
}
DeleteMovieService.ɵfac = function DeleteMovieService_Factory(t) { return new (t || DeleteMovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DeleteMovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DeleteMovieService, factory: DeleteMovieService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeleteMovieService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "jUle":
/*!**************************************************!*\
  !*** ./src/app/screens/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "tl5U");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../login.service */ "edGd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");

















function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_3_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Invalid Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_3_div_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Email is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_3_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_3_div_11_span_1_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_3_div_11_span_2_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.reactiveForm.controls.email.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.reactiveForm.controls.email.errors.required);
} }
function LoginComponent_div_3_div_19_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Invalid Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_3_div_19_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Password is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_3_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_3_div_19_span_1_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_3_div_19_span_2_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.reactiveForm.controls.password.errors.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.reactiveForm.controls.password.errors.required);
} }
function LoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "VHS RENTALS LOGIN FORM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_3_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.upLoad(ctx_r8.reactiveForm); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_div_3_div_11_Template, 3, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_3_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.hide = !ctx_r10.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_div_3_div_19_Template, 3, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Don't have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.reactiveForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.reactiveForm.get("email").touched && ctx_r1.reactiveForm.get("email").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r1.hide ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.hide ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.reactiveForm.get("password").touched && ctx_r1.reactiveForm.get("password").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.reactiveForm.valid);
} }
class LoginComponent {
    constructor(LoginService, router, route, fb, loaderService) {
        this.LoginService = LoginService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.loaderService = loaderService;
        this.hide = true;
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        this.reactiveForm = this.fb.group({
            "email": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.emailChecked]),
            "password": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]))/g)]),
        });
    }
    emailChecked(control) {
        if (control.value != null) {
            var regexp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
            if (regexp.test(control.value) !== true) {
                return {
                    emailValidity: true
                };
            }
        }
    }
    get password() {
        return this.reactiveForm.get('password');
    }
    get email() {
        return this.reactiveForm.get('email');
    }
    ngOnInit() {
        this.signOut();
    }
    signOut() {
        if (localStorage.getItem("token")) {
            localStorage.removeItem("token");
        }
        if (localStorage.getItem("id")) {
            localStorage.removeItem("id");
        }
        if (localStorage.getItem("email")) {
            localStorage.removeItem("email");
        }
        if (localStorage.getItem("username")) {
            localStorage.removeItem("username");
        }
        if (localStorage.getItem("isAdmin")) {
            localStorage.removeItem("isAdmin");
        }
        if (localStorage.getItem("wallet")) {
            localStorage.removeItem("wallet");
        }
    }
    getToken() {
        return localStorage.getItem('token');
    }
    decodeToken() {
        return this.getToken() ? this.helper.decodeToken(this.getToken()) : null;
    }
    userData() {
        if (!this.decodeToken())
            return null;
        const { isAdmin } = this.decodeToken();
        return isAdmin;
    }
    upLoad(reactiveForm) {
        if (reactiveForm.valid) {
            this.LoginService.userLogin(this.reactiveForm.value).subscribe(response => {
                if (response.hasOwnProperty("token")) {
                    localStorage.setItem("token", response['token']);
                    localStorage.setItem("id", response["id"]);
                    localStorage.setItem('email', response['email']);
                    localStorage.setItem('username', response['username']);
                    localStorage.setItem('isAdmin', this.userData().toString());
                    localStorage.setItem('wallet', response['wallet']);
                    console.log(response);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Login is successful, Welcome!!',
                        showConfirmButton: false,
                        timer: 2000
                    }),
                        setTimeout(() => {
                            this.reactiveForm.reset();
                            // console.log(this.userData());
                            if (this.userData() == true) {
                                this.router.navigate(['/admin']);
                            }
                            else {
                                this.router.navigate(['/store']);
                            }
                        }, 2000);
                }
                ;
            }, err => {
                console.log(err);
                if (err.error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Something went wrong or Incorrect Password or Email',
                        showConfirmButton: false,
                        timer: 3000
                    });
                }
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 5, vars: 6, consts: [["class", "loader-container", 4, "ngIf"], [1, "login-bg-image"], ["class", "login-wrapper", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], [1, "loader-container"], [2, "top", "50%", "left", "50%"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], [1, "example-form", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Email", "formControlName", "email", "type", "email", "required", ""], ["matPrefix", ""], ["class", "err", 4, "ngIf"], ["matInput", "", "placeholder", " Password", "formControlName", "password", "type", "password", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-stroked-button", "", "color", "accent", "type", "submit", 1, "btn-block", 3, "disabled"], ["mat-button", "", "routerLink", "/register", "color", "primary"], [1, "err"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 26, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.loaderService.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.loaderService.isLoading));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatPrefix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".login-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  color: #E8F0FE;\n  margin-top: 20px;\n}\n\n.login-bg-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://i.redd.it/128uj78z58m01.jpg\");\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n}\n\n.box[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  opacity: 5;\n  float: left;\n  padding: 60px 50px 40px 50px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.75);\n  border-radius: 10px;\n  transform: scale(1);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  z-index: 5;\n  max-width: 330px;\n}\n\n.box.back[_ngcontent-%COMP%] {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  top: -20px;\n  opacity: 0.8;\n  z-index: -1;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .example-form[_ngcontent-%COMP%] {\n  min-width: 100%;\n  max-width: 300px;\n  width: 100%;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%], .login-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #E8F0FE;\n  padding: 14px 1px 0px;\n  border: 0px;\n  border-radius: 4px;\n  line-height: 20px;\n}\n\n.err[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  display: block;\n  font-weight: 700;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 0;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  padding: 40px 70px 50px;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  border: 1px solid currentColor;\n  line-height: 54px;\n  background: #FFF7FA;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.8375em 0;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  color: #cccbca;\n}\n\n.loader-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: rgba(26, 26, 26, 0.75);\n  opacity: 1;\n  z-index: 99;\n}\n\np[_ngcontent-%COMP%] {\n  color: #E8F0FE;\n}\n\n  .mat-step-header .mat-step-icon-selected, .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #e6d3d3 !important;\n  border-radius: 1px !important;\n  border-bottom: 1px solid red;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #e6d3d3 !important;\n  opacity: 1 !important;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline-gap {\n  border-radius: 1px !important;\n  border-bottom: 1px solid red;\n}\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #55f096 !important;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: red !important;\n  opacity: 0.8 !important;\n}\n\n  .mat-input-element {\n  caret-color: red !important;\n}\n\n  .mat-form-field-invalid .mat-input-element, .mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: red !important;\n}\n\n  .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6) !important;\n}\n\n  .mat-form-field.mat-focused .mat-form-field-label {\n  color: #e6d3d3 !important;\n}\n\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: red !important;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #bbb1b1;\n}\n\n  mat-form-field input,   mat-form-field ::placeholder,   mat-form-field .mat-form-field-label {\n  color: #332e2e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7QUFBSjs7QUFHRTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUFOOztBQUdFO0VBRUUsNERBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFESjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtFO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRko7O0FBTUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBSEo7O0FBTUU7O0VBRUUsV0FBQTtBQUhKOztBQU1FO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUVBLGlCQUFBO0FBTEo7O0FBUUU7RUFDRSxVQUFBO0FBTEo7O0FBUUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFRRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FBTEo7O0FBUUU7RUFDRSx1QkFBQTtBQUxKOztBQVFFO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBUUU7RUFDRSxtQkFBQTtBQUxKOztBQU9FO0VBQ0ksY0FBQTtBQUpOOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFKSjs7QUFPSTtFQUNFLGNBQUE7QUFKTjs7QUFRQTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQUxGOztBQVNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQU5GOztBQVdBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtBQVJGOztBQVlBO0VBQ0UseUJBQUE7QUFURjs7QUFhQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7QUFWRjs7QUFjQTtFQUNFLDJCQUFBO0FBWEY7O0FBZUE7RUFDRSwyQkFBQTtBQVpGOztBQWdCQTtFQUNFLG9DQUFBO0FBYkY7O0FBa0JBO0VBQ0UseUJBQUE7QUFmRjs7QUFtQkE7RUFDRSxxQkFBQTtBQWhCRjs7QUFvQkU7RUFDRyxjQUFBO0FBakJMOztBQW9CSztFQUNHLGNBQUE7QUFsQlIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxvZ2luLXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWF0LWNhcmQtdGl0bGV7XHJcbiAgICAgIGNvbG9yOiAjRThGMEZFO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWJnLWltYWdle1xyXG4gICAgLy8gYm9yZGVyOiBzb2xpZCAxcHggIzAwMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pLnJlZGQuaXQvMTI4dWo3OHo1OG0wMS5qcGcnKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiBcclxuICBcclxuICAuYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDYwcHggNTBweCA0MHB4IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjc1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgbWF4LXdpZHRoOiAzMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJveC5iYWNrIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgICBvcGFjaXR5OiAuODtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICBcclxuICBcclxuICAubG9naW4td3JhcHBlciAuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZnVsbC13aWR0aCxcclxuICAubG9naW4td3JhcHBlciAuYnRuLWJsb2NrIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCBpbnB1dHtcclxuICAgIGJhY2tncm91bmQ6ICNFOEYwRkU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDFweCAwcHg7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLy8gaGVpZ2h0OiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuZXJye1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICBcclxuICAubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAubG9naW4td3JhcHBlciAubWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogNDBweCA3MHB4IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi13cmFwcGVyIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDU0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGN0ZBO1xyXG4gIH1cclxuICBcclxuICAubG9naW4td3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgIHBhZGRpbmc6IDAuODM3NWVtIDA7XHJcbiAgfVxyXG4gIC5tYXQtaWNvbntcclxuICAgICAgY29sb3I6IHJnYigyMDQsIDIwMywgMjAyKTtcclxuICB9XHJcblxyXG4gIC5sb2FkZXItY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI2LCAyNiwgMjYsIDAuNzUpO1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgfVxyXG4gIFxyXG4gICAgcHtcclxuICAgICAgY29sb3I6ICNFOEYwRkU7XHJcbiAgICB9XHJcbiAgXHJcbiAgLy8gbWF0LWljb24tc3RlcHBlciBzZWxlY3RlZCBjb2xvciBjaGFuZ2UgXHJcbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjExLCAyMTEpIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxcHggIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgICByZWQ7XHJcbn1cclxuXHJcbi8vaW5wdXQgb3V0bGluZSBjb2xvclxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgY29sb3I6cmdiKDIzMCwgMjExLCAyMTEpIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAxIWltcG9ydGFudDtcclxuICBcclxuICBcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2FwIHtcclxuICBib3JkZXItcmFkaXVzOiAxcHggIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgICByZWQ7XHJcbn1cclxuXHJcbi8vbWF0LWlucHV0IGZvY3VzZWQgY29sb3JcclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiByZ2IoODUsIDI0MCwgMTUwKSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIG1hdC1pbnB1dCBlcnJvciBvdXRsaW5lIGNvbG9yXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tcclxuICBjb2xvcjogcmVkIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwLjghaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBtYXQtaW5wdXQgY2FyZW50IGNvbG9yXHJcbjo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNhcmV0LWNvbG9yOiByZWQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBtYXQtaW5wdXQgZXJyb3IgY2FyZW50IGNvbG9yXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQsIC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNhcmV0LWNvbG9yOiByZWQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBtYXQtbGFiZWwgbm9ybWFsIHN0YXRlIHN0eWxlXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLC42KSFpbXBvcnRhbnQ7XHJcbiAgLy8gY29sb3I6ICRtYWluQ29sb3IhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBtYXQtbGFiZWwgZm9jdXNlZCBzdHlsZVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6IHJnYigyMzAsIDIxMSwgMjExKSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIG1hdC1sYWJlbCBlcnJvciBzdHlsZVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogcmVkIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICAgICBjb2xvcjogcmdiKDE4NywgMTc3LCAxNzcpO1xyXG4gIH1cclxuICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgaW5wdXQsIDo6cGxhY2Vob2xkZXIsIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IHJnYig1MSwgNDYsIDQ2KTtcclxuICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "k3Qe":
/*!*************************************!*\
  !*** ./src/app/register.service.ts ***!
  \*************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class RegisterService {
    constructor(http) {
        this.http = http;
        this.url = "https://vhsrentals.herokuapp.com/api/users";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            })
        };
    }
    register(data) {
        return this.http.post(this.url, data, this.httpOptions);
    }
    ;
}
RegisterService.ɵfac = function RegisterService_Factory(t) { return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegisterService, factory: RegisterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "nPMS":
/*!**************************************************!*\
  !*** ./src/app/check-out/check-out.component.ts ***!
  \**************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _rental_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rental.service */ "w9Tj");
/* harmony import */ var _edit_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-movie.service */ "4/lm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");










function CheckOutComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckOutComponent_tr_20_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeMovie(item_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckOutComponent_tr_20_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setNumberOfDays(item_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.dailyRentalRate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r1.daysBooked ? item_r1.daysBooked : 1);
} }
class CheckOutComponent {
    constructor(rent, update, router) {
        this.rent = rent;
        this.update = update;
        this.router = router;
    }
    getTotal() {
        this.setCart();
        let result = 0;
        this.cart.forEach(element => {
            console.log(element.daysBooked);
            if (element.daysBooked) {
                result += (element.dailyRentalRate * element.daysBooked);
            }
            else {
                result += element.dailyRentalRate;
            }
        });
        return result;
    }
    setCart() {
        this.cart = JSON.parse(localStorage.getItem("cart"));
    }
    removeMovie(id) {
        this.cart.splice(this.cart.findIndex(movie => movie._id === id), 1);
        localStorage.setItem("cart", JSON.stringify(this.cart));
    }
    setNumberOfDays(id) {
        let days = 0;
        if (parseInt(document.getElementById(`${id}`).value) < 1) {
            days = 1;
        }
        else {
            days = parseInt(document.getElementById(`${id}`).value);
        }
        let currentMovie = this.cart.findIndex(movie => movie._id === id);
        //TODO add days Booked to scheme
        this.cart[currentMovie].daysBooked = days;
        this.cart[currentMovie].dateOut = new Date();
        localStorage.setItem("cart", JSON.stringify(this.cart));
        this.setCart();
    }
    processOrders() {
        console.log(this.cart);
        this.cart.forEach(element => {
            let id = localStorage.getItem("id");
            let movieId = element._id + "";
            //TODO change backend 
            // this.rent.rent({movie:{...element},customer:{...this.form.value},customerId:id,movieId:movieId}).subscribe(response=>{
            //         dailyRentalRate: 9
            // genre: "Action, Crime, Drama, Thriller"
            // numberInStock: 6
            // plot: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes."
            // poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
            // title: "The Dark Knight"
            // year: "2008"
            this.rent.rent({ userId: id, movieId: movieId }).subscribe(response => {
                console.log(response);
            });
            let numberInStock = element.numberInStock - 1;
            let movie = new FormData();
            movie.set("genre", element.genre);
            movie.set("numberInStock", numberInStock.toString());
            movie.set("plot", element.plot);
            movie.set("poster", element.poster);
            movie.set("title", element.title);
            movie.set("year", element.year);
            //     this.update.editMovies(element._id,movie).subscribe(result=>{
            //       console.log(result)
            //   Swal.fire({
            //     position: 'center',
            //     icon: 'success',
            //     title: 'Your order has been processed',
            //     showConfirmButton: false,
            //     timer: 4000
            //   })
            // }
            // )
        });
        localStorage.removeItem("cart");
        this.router.navigate(['/store']);
    }
    ngOnInit() {
        this.setCart();
    }
}
CheckOutComponent.ɵfac = function CheckOutComponent_Factory(t) { return new (t || CheckOutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rental_service__WEBPACK_IMPORTED_MODULE_1__["RentalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_edit_movie_service__WEBPACK_IMPORTED_MODULE_2__["EditMovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CheckOutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckOutComponent, selectors: [["app-check-out"]], decls: 28, vars: 2, consts: [["mat-card-avatar", ""], [4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "btn-block", 3, "click"], [1, "remove-movie", 3, "click"], ["min", "1", "type", "number", 1, "numOfDays", 3, "id", "value", "change"]], template: function CheckOutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please confirm your order and tell us how to contact you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Price per day(\u20B5) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Remove from cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Rental period in days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CheckOutComponent_tr_20_Template, 11, 4, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckOutComponent_Template_button_click_26_listener() { return ctx.processOrders(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total = \u20B5", ctx.getTotal(), "");
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["*[_ngcontent-%COMP%] {\n  font-size: 1.5vw;\n}\n\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n}\n\n.cart-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\nmat-list-item[_ngcontent-%COMP%] {\n  align-self: center;\n  text-align: center;\n}\n\n.item[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.remove-movie[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  padding: 0.5vh;\n  color: aliceblue;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n\n.numOfDays[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ntable[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoZWNrLW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0FBQUo7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtBQUdKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBREE7RUFDQSxVQUFBO0FBSUE7O0FBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFHSjs7QUFEQTtFQUNJLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtBQU1KIiwiZmlsZSI6ImNoZWNrLW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qe1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxufVxyXG5tYWlue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLmNhcnQtaXRlbXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5tYXQtbGlzdC1pdGVte1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pdGVte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJlbW92ZS1tb3ZpZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgICBwYWRkaW5nOiAwLjV2aDtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIFxyXG59XHJcbi5udW1PZkRheXN7XHJcbndpZHRoOiA1MCU7XHJcbi8vIGZvbnQtc2l6ZTogMWVtO1xyXG5cclxufVxyXG5mb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG50YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5idXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckOutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-check-out',
                templateUrl: './check-out.component.html',
                styleUrls: ['./check-out.component.scss']
            }]
    }], function () { return [{ type: _rental_service__WEBPACK_IMPORTED_MODULE_1__["RentalService"] }, { type: _edit_movie_service__WEBPACK_IMPORTED_MODULE_2__["EditMovieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "okC7":
/*!*****************************************************!*\
  !*** ./src/app/Admins/rentals/rentals.component.ts ***!
  \*****************************************************/
/*! exports provided: RentalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalsComponent", function() { return RentalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var src_app_add_rental_add_rental_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/add-rental/add-rental.component */ "qgk/");
/* harmony import */ var src_app_delete_record_delete_record_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/delete-record/delete-record.component */ "Vqd4");
/* harmony import */ var src_app_edit_rental_edit_rental_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/edit-rental/edit-rental.component */ "VQsg");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var src_app_rentals_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/rentals.service */ "xr6a");
/* harmony import */ var _administration_administration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../administration/administration.component */ "ChJm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");























function RentalsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RentalsComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RentalsComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r19.user.username, " ");
} }
function RentalsComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Movie Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RentalsComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r20.movie.title, " ");
} }
function RentalsComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Daily Rental Rate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RentalsComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r21.movie.dailyRentalRate, " ");
} }
function RentalsComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RentalsComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r22.dateOut, " ");
} }
function RentalsComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Days Booked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RentalsComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r23.daysBooked, " ");
} }
function RentalsComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RentalsComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RentalsComponent_td_32_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const row_r24 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.deleteRental(row_r24._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RentalsComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RentalsComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RentalsComponent_td_35_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const row_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.editRental(row_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RentalsComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
function RentalsComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
} }
function RentalsComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r1.value, "\"");
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class RentalsComponent {
    constructor(loaderService, getRentals, dialog) {
        this.loaderService = loaderService;
        this.getRentals = getRentals;
        this.dialog = dialog;
        // [ { "_id": "608928553f1dd300049cae09", "user": { "_id": "607deea316fb5419a848c72b" }, "movie": { "_id": "608173c8c18f36001558c8d5", "title": "Batman Begins", "dailyRentalRate": 2 }, "dateOut": "2021-04-28T09:18:13.609Z" } ]
        this.displayedColumns = ['username', 'movie-title', 'dailyRentalRate', 'dateOut', 'daysBooked', 'delete', 'edit'];
    }
    ngOnInit() {
        this.setUpTable();
        this.getRentals.allRentals().subscribe(response => { this.rentals = response; });
    }
    setUpTable() {
        this.getRentals.allRentals().subscribe(response => {
            this.rentals = response;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.rentals);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
        // this.userservice.fetchUsers().subscribe(response => {
        //   this.users = response
        //   this.dataSource = new MatTableDataSource(this.users);
        //   this.dataSource.paginator = this.paginator;
        //   this.dataSource.sort = this.sort;
        // })
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    deleteRental(id) {
        let openDialog = this.dialog.open(src_app_delete_record_delete_record_component__WEBPACK_IMPORTED_MODULE_6__["DeleteRecordComponent"]);
        this.dialog.getDialogById(openDialog.id).afterClosed().subscribe(result => {
            if (result) {
                this.getRentals.deleteRental(id).subscribe(() => sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Record has been deleted',
                    showConfirmButton: false,
                    timer: 4000
                }));
                this.setUpTable();
            }
        });
    }
    editRental(rental) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.data = rental;
        this.dialog.afterAllClosed.subscribe(() => { this.setUpTable(); });
        this.dialog.open(src_app_edit_rental_edit_rental_component__WEBPACK_IMPORTED_MODULE_7__["EditRentalComponent"], dialogConfig);
    }
    onAddRental() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        this.dialog.afterAllClosed.subscribe(() => { this.setUpTable(); });
        this.dialog.open(src_app_add_rental_add_rental_component__WEBPACK_IMPORTED_MODULE_5__["AddRentalComponent"], dialogConfig);
    }
}
RentalsComponent.ɵfac = function RentalsComponent_Factory(t) { return new (t || RentalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_rentals_service__WEBPACK_IMPORTED_MODULE_10__["RentalsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
RentalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RentalsComponent, selectors: [["app-rentals"]], viewQuery: function RentalsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 40, vars: 8, consts: [["class", "loader-container", 4, "ngIf"], [1, "mat-elevation-z8"], ["matInput", "", "placeholder", "Enter search query here", 3, "keyup"], ["input", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "username"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "movie-title"], ["matColumnDef", "dailyRentalRate"], ["matColumnDef", "dateOut"], ["matColumnDef", "daysBooked"], ["matColumnDef", "delete"], ["matColumnDef", "edit"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "pageSizeOptions"], [1, "loader-container"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-flat-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function RentalsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-administration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RentalsComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function RentalsComponent_Template_input_keyup_8_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RentalsComponent_Template_button_click_10_listener() { return ctx.onAddRental(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " New Rental ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RentalsComponent_th_16_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RentalsComponent_td_17_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RentalsComponent_th_19_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RentalsComponent_td_20_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RentalsComponent_th_22_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RentalsComponent_td_23_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RentalsComponent_th_25_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RentalsComponent_td_26_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RentalsComponent_th_28_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RentalsComponent_td_29_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RentalsComponent_th_31_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RentalsComponent_td_32_Template, 4, 0, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, RentalsComponent_th_34_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RentalsComponent_td_35_Template, 4, 0, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RentalsComponent_tr_36_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RentalsComponent_tr_37_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RentalsComponent_tr_38_Template, 3, 1, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "mat-paginator", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx.loaderService.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_administration_administration_component__WEBPACK_IMPORTED_MODULE_11__["AdministrationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".loader-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 90vh;\n}\n\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 70vw;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZW50YWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNJO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtBQUlKOztBQUZBO0VBQ0ksVUFBQTtBQUtKIiwiZmlsZSI6InJlbnRhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICB9XHJcbiAgICBtYWlue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbn1cclxudGFibGV7XHJcbiAgICB3aWR0aDogNzB2dztcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmlucHV0e1xyXG4gICAgd2lkdGg6IDg1JTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RentalsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rentals',
                templateUrl: './rentals.component.html',
                styleUrls: ['./rentals.component.scss']
            }]
    }], function () { return [{ type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"] }, { type: src_app_rentals_service__WEBPACK_IMPORTED_MODULE_10__["RentalsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "q9x8":
/*!***************************************************!*\
  !*** ./src/app/Admins/movies/movies.component.ts ***!
  \***************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _get_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../get-movies.service */ "4cJH");
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _administration_administration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../administration/administration.component */ "ChJm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");












function MoviesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MoviesComponent_mat_grid_list_4_mat_grid_tile_1_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviesComponent_mat_grid_list_4_mat_grid_tile_1_span_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const movieDetails_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.goToMovie(movieDetails_r4.data._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movieDetails_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", movieDetails_r4.data.poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", movieDetails_r4.data.title);
} }
function MoviesComponent_mat_grid_list_4_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MoviesComponent_mat_grid_list_4_mat_grid_tile_1_span_1_Template, 2, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movieDetails_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", movieDetails_r4.cols);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", movieDetails_r4);
} }
function MoviesComponent_mat_grid_list_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MoviesComponent_mat_grid_list_4_mat_grid_tile_1_Template, 2, 2, "mat-grid-tile", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "lightgray");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.list);
} }
function MoviesComponent_mat_paginator_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-paginator", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function MoviesComponent_mat_paginator_5_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onPageEvent($event); })("change", function MoviesComponent_mat_paginator_5_Template_mat_paginator_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onPageEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r2.length)("pageSize", ctx_r2.pageSize)("pageSizeOptions", ctx_r2.pageSizeOptions);
} }
class MoviesComponent {
    constructor(getMovies, loaderService, router) {
        this.getMovies = getMovies;
        this.loaderService = loaderService;
        this.router = router;
        this.list = [];
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.positionOptions = ['below', 'above', 'left', 'right'];
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.positionOptions[1]);
    }
    ngOnInit() {
        this.setList();
    }
    setList() {
        this.getMovies.fetchMovies().subscribe(response => { this.movies = response, this.getList(0, 11); });
    }
    onPageEvent(event) {
        const start = event.previousPageIndex * event.pageSize + 1;
        const limit = event.pageSize;
        this.getList(start, limit);
    }
    goToMovie(id) {
        this.router.navigate(['/movie', id]);
    }
    getList(start, limit) {
        let row = 1;
        let col = 1;
        let array = Object.values(this.movies);
        this.length = array.length;
        this.list = [];
        for (let index = start; index < array.length && index <= limit; index++) {
            this.list.push({ rows: row, cols: col, data: array[index] });
            if (index % 3 == 0) {
                row++;
            }
            col = (col++) % 3;
        }
    }
}
MoviesComponent.ɵfac = function MoviesComponent_Factory(t) { return new (t || MoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_get_movies_service__WEBPACK_IMPORTED_MODULE_2__["GetMoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
MoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesComponent, selectors: [["app-movies"]], decls: 6, vars: 5, consts: [["class", "loader-container", 4, "ngIf"], ["cols", "4", "rowHeight", "5:5", 3, "backgroundColor", 4, "ngIf"], [3, "length", "pageSize", "pageSizeOptions", "page", "change", 4, "ngIf"], [1, "loader-container"], ["cols", "4", "rowHeight", "5:5"], ["gutterSize", "1px", 3, "colspan", 4, "ngFor", "ngForOf"], ["gutterSize", "1px", 3, "colspan"], ["class", "movie-details", 4, "ngIf"], [1, "movie-details"], ["mat-card-image", "", 3, "src", "alt", "click"], [3, "length", "pageSize", "pageSizeOptions", "page", "change"]], template: function MoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-administration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MoviesComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MoviesComponent_mat_grid_list_4_Template, 2, 3, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MoviesComponent_mat_paginator_5_Template, 1, 3, "mat-paginator", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx.loaderService.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list);
    } }, directives: [_administration_administration_component__WEBPACK_IMPORTED_MODULE_5__["AdministrationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["img[_ngcontent-%COMP%] {\n  width: 20vw;\n  max-height: 40vh;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.loader-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 90vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb3ZpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0QsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNIOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6Im1vdmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gICBtYXgtaGVpZ2h0OiA0MHZoO1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgIG1hcmdpbi1yaWdodDogYXV0bzsgXHJcbn1cclxuXHJcbi5sb2FkZXItY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movies',
                templateUrl: './movies.component.html',
                styleUrls: ['./movies.component.scss']
            }]
    }], function () { return [{ type: _get_movies_service__WEBPACK_IMPORTED_MODULE_2__["GetMoviesService"] }, { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "qgk/":
/*!****************************************************!*\
  !*** ./src/app/add-rental/add-rental.component.ts ***!
  \****************************************************/
/*! exports provided: AddRentalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRentalComponent", function() { return AddRentalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _get_movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../get-movies.service */ "4cJH");
/* harmony import */ var _rental_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rental.service */ "w9Tj");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "UhP/");















function AddRentalComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r5._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r5.username, " ");
} }
function AddRentalComponent_mat_error_9_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select the username of customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddRentalComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddRentalComponent_mat_error_9_mat_error_1_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userId.errors.required);
} }
function AddRentalComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", movie_r7._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", movie_r7.title, " ");
} }
function AddRentalComponent_mat_error_15_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Movie is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddRentalComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddRentalComponent_mat_error_15_mat_error_1_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.movieId.errors.required);
} }
function AddRentalComponent_mat_error_18_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Rntal period is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddRentalComponent_mat_error_18_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Min value allowed is 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddRentalComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddRentalComponent_mat_error_18_mat_error_1_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddRentalComponent_mat_error_18_mat_error_2_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.daysBooked.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.daysBooked.errors.min);
} }
class AddRentalComponent {
    constructor(userservice, moviesservice, rent) {
        this.userservice = userservice;
        this.moviesservice = moviesservice;
        this.rent = rent;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            movieId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            daysBooked: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)
            ]),
        });
    }
    ngOnInit() {
        this.userservice.fetchUsers().subscribe(response => this.users = response);
        this.moviesservice.fetchMovies().subscribe(response => this.movies = response);
    }
    get movieId() {
        return this.form.get('movieId');
    }
    get userId() {
        return this.form.get('userId');
    }
    get daysBooked() {
        return this.form.get('daysBooked');
    }
    // get total() {
    //   return this.form.get('daysBooked')
    // }
    onSubmit() {
        this.rent.rent(this.form.value).subscribe(response => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                position: 'center',
                icon: 'success',
                title: 'Movie has been rented',
                showConfirmButton: false,
                timer: 4000
            });
        });
        console.log(this.form.value);
    }
}
AddRentalComponent.ɵfac = function AddRentalComponent_Factory(t) { return new (t || AddRentalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_get_movies_service__WEBPACK_IMPORTED_MODULE_4__["GetMoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rental_service__WEBPACK_IMPORTED_MODULE_5__["RentalService"])); };
AddRentalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddRentalComponent, selectors: [["app-add-rental"]], decls: 21, vars: 9, consts: [["id", "card", 1, "mat-elevation-z24"], [1, "form-container", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matInput", "", "placeholder", "Rental Period in days:", "formControlName", "daysBooked", "type", "number", "required", ""], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], [3, "value"]], template: function AddRentalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rent Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddRentalComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Rentee username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddRentalComponent_mat_option_8_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddRentalComponent_mat_error_9_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Movie Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddRentalComponent_mat_option_14_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddRentalComponent_mat_error_15_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddRentalComponent_mat_error_18_Template, 3, 2, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Rent Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.userId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userId.touched && ctx.userId.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.movieId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieId.touched && ctx.movieId.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.daysBooked.touched && ctx.daysBooked.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: [".form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n#card[_ngcontent-%COMP%] {\n  width: 50vw;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZC1yZW50YWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBR0E7RUFDSSxXQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7QUFESiIsImZpbGUiOiJhZGQtcmVudGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuI2NhcmQge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICAvLyAgICAgLy8gaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddRentalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-rental',
                templateUrl: './add-rental.component.html',
                styleUrls: ['./add-rental.component.scss']
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _get_movies_service__WEBPACK_IMPORTED_MODULE_4__["GetMoviesService"] }, { type: _rental_service__WEBPACK_IMPORTED_MODULE_5__["RentalService"] }]; }, null); })();


/***/ }),

/***/ "rhD1":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "y7ui");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "1z/I");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ "Ynp+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tree */ "OLiY");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/badge */ "8Qe2");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/text-field */ "8sFK");






































const materialModules = [
    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__["MatTreeModule"],
    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridListModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"],
    _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_36__["TextFieldModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__["MatProgressBarModule"]
];
class AngularMaterialModule {
}
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ...materialModules
        ], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"],
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_36__["TextFieldModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__["MatProgressBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"],
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_36__["TextFieldModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__["MatProgressBarModule"]], exports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"],
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_36__["TextFieldModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__["MatProgressBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    ...materialModules
                ],
                exports: [
                    ...materialModules
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "sW91":
/*!***********************************************!*\
  !*** ./src/app/loader/interceptor.service.ts ***!
  \***********************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.service */ "t0Il");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");


// import { Observable } from 'rxjs';






class InterceptorService {
    constructor(loaderService, toasterService) {
        this.loaderService = loaderService;
        this.toasterService = toasterService;
    }
    intercept(req, next) {
        this.loaderService.isLoading.next(true);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.loaderService.isLoading.next(false);
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                    try {
                        this.toasterService.error(err.error.message, err.error.title, { positionClass: 'toast-top-center' });
                    }
                    catch (e) {
                        this.toasterService.error('An error occurred', '', { positionClass: 'toast-top-center' });
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(err);
            });
        }));
    }
}
InterceptorService.ɵfac = function InterceptorService_Factory(t) { return new (t || InterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
InterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InterceptorService, factory: InterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "t0Il":
/*!******************************************!*\
  !*** ./src/app/loader/loader.service.ts ***!
  \******************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "7RJT");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);



class LoaderService {
    constructor() {
        this.isLoading = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "edGd");




class AuthGuard {
    constructor(router, LoginService) {
        this.router = router;
        this.LoginService = LoginService;
    }
    canActivate() {
        // Check to see if a user has a valid token
        if (this.LoginService.isAuthenticated()) {
            // If they do, return true and allow the user to load app
            return true;
        }
        // If not, they redirect them to the login page
        this.router.navigate(['/login']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "tiaY":
/*!****************************************************!*\
  !*** ./src/app/edit-movie/edit-movie.component.ts ***!
  \****************************************************/
/*! exports provided: EditMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMovieComponent", function() { return EditMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit_movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-movie.service */ "4/lm");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/text-field */ "8sFK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");













function EditMovieComponent_mat_error_3_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Title is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditMovieComponent_mat_error_3_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Title must have a valid format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditMovieComponent_mat_error_3_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Title must be ", ctx_r6.title.errors.minlength.requiredLength, " characters or more ");
} }
function EditMovieComponent_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditMovieComponent_mat_error_3_mat_error_1_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditMovieComponent_mat_error_3_mat_error_2_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditMovieComponent_mat_error_3_mat_error_3_Template, 2, 1, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.title.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.title.errors.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.title.errors.minlength);
} }
function EditMovieComponent_mat_error_6_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Genre is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditMovieComponent_mat_error_6_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Genre must be ", ctx_r8.genre.errors.minlength.requiredLength, " characters or more ");
} }
function EditMovieComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditMovieComponent_mat_error_6_mat_error_1_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditMovieComponent_mat_error_6_mat_error_2_Template, 2, 1, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.genre.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.genre.errors.minlength);
} }
function EditMovieComponent_mat_error_15_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Number in stock is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditMovieComponent_mat_error_15_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Number in stock must be ", ctx_r10.numberInStock.errors.minlength.requiredLength, " characters or more ");
} }
function EditMovieComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditMovieComponent_mat_error_15_mat_error_1_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditMovieComponent_mat_error_15_mat_error_2_Template, 2, 1, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.numberInStock.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.numberInStock.errors.minlength);
} }
function EditMovieComponent_mat_error_18_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Daily Rent is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditMovieComponent_mat_error_18_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Daily Rent must be ", ctx_r12.dailyRentalRate.errors.minlength.requiredLength, " characters or more ");
} }
function EditMovieComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditMovieComponent_mat_error_18_mat_error_1_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditMovieComponent_mat_error_18_mat_error_2_Template, 2, 1, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dailyRentalRate.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dailyRentalRate.errors.minlength);
} }
class EditMovieComponent {
    constructor(dialogRef, data, editMovie) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.editMovie = editMovie;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
            ]),
            genre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
            ]),
            plot: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
            ]),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
            ]),
            poster: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
            ]),
            numberInStock: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            dailyRentalRate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
        });
    }
    ngOnInit() {
        this.title.setValue(this.data.title);
        this.genre.setValue(this.data.genre);
        this.plot.setValue(this.data.plot);
        this.year.setValue(this.data.year);
        this.poster.setValue(this.data.poster);
        this.numberInStock.setValue(this.data.numberInStock);
        this.dailyRentalRate.setValue(this.data.dailyRentalRate);
    }
    get genre() {
        return this.form.get('genre');
    }
    get plot() {
        return this.form.get('plot');
    }
    get year() {
        return this.form.get('year');
    }
    get poster() {
        return this.form.get('poster');
    }
    get numberInStock() {
        return this.form.get('numberInStock');
    }
    get dailyRentalRate() {
        return this.form.get('dailyRentalRate');
    }
    get title() {
        return this.form.get('title');
    }
    onUpdate() {
        this.editMovie.editMovies(this.data._id, this.form.value).subscribe(response => { console.log(response); });
        this.form.reset();
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            position: 'center',
            icon: 'success',
            title: 'Movie details have been edited',
            showConfirmButton: false,
            timer: 4000
        });
        this.onClose();
    }
    onClose() {
        this.form.reset();
        this.dialogRef.close();
    }
}
EditMovieComponent.ɵfac = function EditMovieComponent_Factory(t) { return new (t || EditMovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_edit_movie_service__WEBPACK_IMPORTED_MODULE_4__["EditMovieService"])); };
EditMovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditMovieComponent, selectors: [["app-edit-movie"]], decls: 21, vars: 6, consts: [[1, "form-container", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "formControlName", "title", "placeholder", "Title:", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Genre:", "formControlName", "genre", "required", ""], ["matInput", "", "placeholder", "Plot:", "formControlName", "plot", "cdkTextareaAutosize", ""], ["matInput", "", "placeholder", "Year:", "formControlName", "year"], ["matInput", "", "placeholder", "Poster:", "formControlName", "poster"], ["matInput", "", "placeholder", "Number in stock:", "formControlName", "numberInStock", "type", "number", "required", ""], ["matInput", "", "placeholder", "Daily Rental Rate:", "formControlName", "dailyRentalRate", "type", "number", "required", ""], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function EditMovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditMovieComponent_Template_form_ngSubmit_0_listener() { return ctx.onUpdate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditMovieComponent_mat_error_3_Template, 4, 3, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditMovieComponent_mat_error_6_Template, 3, 2, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditMovieComponent_mat_error_15_Template, 3, 2, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditMovieComponent_mat_error_18_Template, 3, 2, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Edit Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title.touched && ctx.title.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.genre.touched && ctx.genre.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.numberInStock.touched && ctx.numberInStock.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dailyRentalRate.touched && ctx.dailyRentalRate.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_8__["CdkTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: [".form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50vw;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVkaXQtbW92aWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUoiLCJmaWxlIjoiZWRpdC1tb3ZpZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICA7XHJcbiAgICB3aWR0aDogNTB2dztcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditMovieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-movie',
                templateUrl: './edit-movie.component.html',
                styleUrls: ['./edit-movie.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _edit_movie_service__WEBPACK_IMPORTED_MODULE_4__["EditMovieService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _screens_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/login/login.component */ "jUle");
/* harmony import */ var _screens_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/register/register.component */ "RRZc");
/* harmony import */ var _Admins_customer_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Admins/customer/customer.component */ "GRC+");
/* harmony import */ var _Admins_rentals_rentals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Admins/rentals/rentals.component */ "okC7");
/* harmony import */ var _users_returns_returns_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/returns/returns.component */ "cXBL");
/* harmony import */ var _Admins_movies_movies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Admins/movies/movies.component */ "q9x8");
/* harmony import */ var _screens_no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screens/no-page-found/no-page-found.component */ "iF5b");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _Admins_add_movies_add_movies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Admins/add-movies/add-movies.component */ "Q/6d");
/* harmony import */ var _Admins_administration_administration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Admins/administration/administration.component */ "ChJm");
/* harmony import */ var _Admins_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Admins/movie-details/movie-details.component */ "7Vzl");
/* harmony import */ var _store_front_store_front_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store-front/store-front.component */ "BNEf");
/* harmony import */ var _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./check-out/check-out.component */ "nPMS");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./wallet/wallet.component */ "EBTS");



















const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: _screens_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    {
        path: 'users',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | users-users-module */ "users-users-module").then(__webpack_require__.bind(null, /*! ./users/users.module */ "zrcO")).then(m => m.UsersModule)
    },
    {
        path: 'admin',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        component: _Admins_administration_administration_component__WEBPACK_IMPORTED_MODULE_11__["AdministrationComponent"]
    },
    { path: 'store',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        component: _store_front_store_front_component__WEBPACK_IMPORTED_MODULE_13__["StoreFrontComponent"] },
    { path: 'register', component: _screens_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'movies', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], component: _Admins_movies_movies_component__WEBPACK_IMPORTED_MODULE_7__["MoviesComponent"] },
    { path: 'add-movies', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], component: _Admins_add_movies_add_movies_component__WEBPACK_IMPORTED_MODULE_10__["AddMoviesComponent"] },
    // { path: 'movies', component: MoviesComponent },
    { path: "movie/:id", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], component: _Admins_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_12__["MovieDetailsComponent"] },
    { path: 'customers', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], component: _Admins_customer_customer_component__WEBPACK_IMPORTED_MODULE_4__["CustomerComponent"] },
    { path: 'add-users', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], component: _Admins_customer_customer_component__WEBPACK_IMPORTED_MODULE_4__["CustomerComponent"] },
    { path: 'view-users', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], component: _user_user_component__WEBPACK_IMPORTED_MODULE_15__["UserComponent"] },
    { path: 'returns', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], component: _users_returns_returns_component__WEBPACK_IMPORTED_MODULE_6__["ReturnsComponent"] },
    { path: 'rentals', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], component: _Admins_rentals_rentals_component__WEBPACK_IMPORTED_MODULE_5__["RentalsComponent"] },
    { path: 'shopping-cart', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], component: _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_14__["CheckOutComponent"] },
    { path: 'wallet', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], component: _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_16__["WalletComponent"] },
    { path: '404', component: _screens_no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_8__["NoPageFoundComponent"] },
    { path: '**', redirectTo: '/404', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "w9Tj":
/*!***********************************!*\
  !*** ./src/app/rental.service.ts ***!
  \***********************************/
/*! exports provided: RentalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalService", function() { return RentalService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");




class RentalService {
    constructor(http) {
        this.http = http;
        this.url = "https://vhsrentals.herokuapp.com/api/rentals/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'x-auth-token': `${localStorage.getItem('token')}`
            })
        };
    }
    rent(movie) {
        return this.http.post(this.url, movie, this.httpOptions);
    }
}
RentalService.ɵfac = function RentalService_Factory(t) { return new (t || RentalService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
RentalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RentalService, factory: RentalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RentalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "xdv0":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");




class UserService {
    constructor(http) {
        this.http = http;
        this.url = "https://vhsrentals.herokuapp.com/api/users/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'x-auth-token': `${localStorage.getItem('token')}`
            })
        };
    }
    fetchUsers() {
        return this.http.get(this.url, this.httpOptions);
    }
    ;
    deleteUser(id) {
        return this.http.delete(this.url + id, this.httpOptions);
    }
    updateUser(id, data) {
        return this.http.put(this.url + id, data, this.httpOptions);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "xr6a":
/*!************************************!*\
  !*** ./src/app/rentals.service.ts ***!
  \************************************/
/*! exports provided: RentalsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalsService", function() { return RentalsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");




class RentalsService {
    constructor(http) {
        this.http = http;
        this.url = "https://vhsrentals.herokuapp.com/api/rentals/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'x-auth-token': `${localStorage.getItem('token')}`
            })
        };
    }
    allRentals() {
        return this.http.get(this.url, this.httpOptions);
    }
    ;
    deleteRental(id) {
        return this.http.delete(this.url + id, this.httpOptions);
    }
}
RentalsService.ɵfac = function RentalsService_Factory(t) { return new (t || RentalsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
RentalsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RentalsService, factory: RentalsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RentalsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map