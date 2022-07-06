webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n    width: 90px;\r\n    height: 90px;\r\n}\r\n\r\n.hardstyle\r\n{\r\n    width: 80px;\r\n    height: 90px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"light\" [ngClass]=\"checkScrollStatus(2751) ? 'flyinup' : 'fadeindown'\" [ngStyle]=\"{'min-height': viewportHeight + 'px'}\">\r\n  <div class=\"row\" >\r\n    <div class=\"col-12 col-space\">&nbsp;</div>\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-md-10\">\r\n\r\n      <div class=\"col-md-6\">\r\n        <h1 [ngClass]=\"checkScrollStatus(2917) ? 'flyinleft' : 'flyoutleft'\">About me</h1>\r\n        <div [ngClass]=\"checkScrollStatus(2990) ? 'flyinleft' : 'flyoutleft'\">\r\n          <span>\r\n            First and foremost, I am loyal. Which is also important to me.\r\n            I'm getting well along with new people and can fit in well within a group.\r\n            I enjoy looking for a mistake in code for hours and it does not let me go until the problem is solved.\r\n            My friends appreciate my friendliness and goodness.\r\n          </span>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row spanspace center\">\r\n          <div class=\"col-md-3\" [ngClass]=\"checkScrollStatus(3173) ? 'flyinleft' : 'flyoutleft'\">\r\n            <img src=\"assets/icon-football.png\" />\r\n            <h5>Football</h5>\r\n            <span>The great thing about this Sport is, that we need every kind of person. Everybody can do this sport.</span>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\" [ngClass]=\"checkScrollStatus(3183) ? 'flyinleft' : 'flyoutleft'\">\r\n            <img src=\"assets/icon-gameing.png\" />\r\n            <h5>Gaming</h5>\r\n            <span>I play a lot of different games. My favorite games are these ones, where I can make my own bots with AutoIt.</span>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\" [ngClass]=\"checkScrollStatus(3173) ? 'flyinright' : 'flyoutright'\">\r\n            <img src=\"assets/icon-bmx.png\" />\r\n            <h5>BMX</h5>\r\n            <span>Since im 14 i ride this little bike and with the age i got an engine under it.</span>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\" [ngClass]=\"checkScrollStatus(3183) ? 'flyinright' : 'flyoutright'\">\r\n            <img src=\"assets/icon-hardstyle.png\" class=\"hardstyle\" />\r\n            <h5>Hardstyle</h5>\r\n            <span>This is a Lifestyle. Open your mind for it. It can change the world!</span>\r\n          </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-12 col-space\">&nbsp;</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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

var AboutComponent = (function () {
    function AboutComponent() {
        this.scrollstatus = window.scrollY;
        this.viewportHeight = innerHeight;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.checkScrollStatus = function (status) {
        return window.scrollY >= status;
    };
    AboutComponent.prototype.getScrollStatus = function () {
        console.log(window.scrollY);
        return +window.scrollY;
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'about', redirectTo: '/#about', pathMatch: 'full' },
    { path: 'projects', redirectTo: '/#projects', pathMatch: 'full' },
    { path: 'contact', redirectTo: '/#contact', pathMatch: 'full' },
    { path: 'skills', redirectTo: '/#skills', pathMatch: 'full' }
    // {path: 'hobbies', component: HobbiesComponent}
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    color: #FFFFFF;\t\r\n}\r\n\r\n.navbar {\r\n    padding-right: 5%;\r\n    font-size: 14px;\t\r\n    line-height: 32px;\r\n    padding-top: 10px;\r\n    background-color: #1F1D1D;\r\n}\r\n\r\n.navbar-brand {\r\n    padding-left: 100px;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    .nav.nav-responsive {\r\n        position: static;\r\n    }\r\n\r\n    .menu-burger {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .navbar-brand {\r\n        padding-left: 0px;\r\n    }\r\n   \r\n    nav {\r\n        overflow: hidden visible;\r\n    }\r\n\r\n    .menu-burger {\r\n        display: block;\r\n        position: absolute;\r\n        top: 35px;\r\n        right: 35px;\r\n        -webkit-transition: 0.5s all;\r\n        transition: 0.5s all;\r\n        font-size: 35px;\r\n    }\r\n\r\n    .menu-burger.menu-opened {\r\n        top: 15px;\r\n        right: 215px;\r\n        -webkit-transition: 0.5s all;\r\n        transition: 0.5s all;\r\n    }\r\n    \r\n    .nav.nav-responsive {\r\n        position: absolute;\r\n        top: 0px;\r\n        right: 0px;\r\n        width: 0px;\r\n        background-color: #ffffff;\r\n        display: block;\r\n        -webkit-transition: 0.5s all;\r\n        transition: 0.5s all;\r\n        overflow: hidden;\r\n        z-index: 2000;\r\n        -webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);\r\n                box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);\r\n    }\r\n\r\n    .nav.nav-responsive.show {\r\n        right: 0px;\r\n        width: 200px;\r\n        -webkit-transition: 0.5s all;\r\n        transition: 0.5s all;\r\n    }\r\n\r\n    .nav.nav-responsive li {\r\n        display: block;\r\n        color: #000000;\r\n        border-bottom: 1px solid #cccccc;\r\n    }\r\n\r\n    .nav.nav-responsive li a {\r\n        color: #000000;\r\n        text-align: center;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'sticky-nav': getScrollStatus() > viewportHeight }\" > <!-- || getScrollStatus() == false -->\r\n\r\n\t<nav class=\"navbar\">\r\n\t\t<a class=\"navbar-brand\" href=\"/\">\r\n\t\t\t<img src=\"./assets/logo.png\" style=\"padding-top:10px;\"/>\r\n\t\t</a>\r\n\r\n\t\t<mat-icon class=\"text-light menu-burger\" [ngClass]=\"{'menu-opened': showMenu}\" (click)=\"triggerMenu()\">{{icon}}</mat-icon>\r\n\r\n\t\t<ul class=\"nav nav-responsive\" [ngClass]=\"{'show': showMenu}\" [ngStyle]=\"{'height': getMenuHeight()}\" data-toggle=\"collapse\">\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<!--<a class=\"nav-link center\" style=\"color: red\">NOT DONE YET!</a>-->\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" href=\"#\" (click)=\"triggerMenu()\" scrollTo scrollTargetSelector=\"#projects\"> Projects </a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" href=\"#\" (click)=\"triggerMenu()\" scrollTo scrollTargetSelector=\"#skills\"> Skills </a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link\" href=\"#\" (click)=\"triggerMenu()\" scrollTo scrollTargetSelector=\"#about\"> About </a>\r\n\t\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" href=\"#\" (click)=\"triggerMenu()\" scrollTo scrollTargetSelector=\"#contact\"> Contact </a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</nav>\r\n\r\n\t<div class=\"container\" >\r\n\r\n\t\t<!-- Fragment: LANDING -->\r\n\t\t<app-landing #landing></app-landing>\r\n\r\n\t\t<!-- Fragment: PROJECTS -->\r\n\r\n\t\t<app-projects #projects></app-projects>\r\n\r\n\r\n\t\t<div #landing class=\"center\">\r\n\t\t\t<button mat-icon-button>\r\n\t\t\t\t<i class=\"material-icons\">&#xE316;</i>Top <i class=\"material-icons\">&#xE316;</i>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\r\n\t\t<!-- <div class=\"spacer\"></div> -->\r\n\r\n\t\t<!-- Fragment: SKILLS -->\r\n\t\t<app-skills #skills></app-skills>\r\n\r\n\t\t<div #landing class=\"center\">\r\n\t\t\t<button mat-icon-button>\r\n\t\t\t\t<i class=\"material-icons\">&#xE316;</i>Top <i class=\"material-icons\">&#xE316;</i>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\r\n\t\t<!--<div class=\"spacer\"></div> -->\r\n\r\n\t\t<!-- Fragment: ABOUT -->\r\n\t\t<app-about #about></app-about>\r\n\r\n\t\t<div #landing class=\"center\">\r\n\t\t\t<button mat-icon-button>\r\n\t\t\t\t<i class=\"material-icons\">&#xE316;</i>Top <i class=\"material-icons\">&#xE316;</i>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\r\n\t\t<!-- <div class=\"spacer\"></div> -->\r\n\r\n\t\t<!-- Fragment: CONTACT -->\r\n\t\t<app-contact></app-contact>\r\n\r\n\r\n\t</div>\r\n\t<router-outlet></router-outlet>\r\n\r\n\t<div class=\"center dark\">\r\n\r\n\t\t<button mat-button (click)=\"openDialogDataprotection()\">Data protection</button>\r\n\t\t<button mat-button (click)=\"openDialogImprint()\">Imprint</button>\r\n\t\t<br/>\r\n\t\t&#9400; Philipp Klug. All rights reserved\r\n\t</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogContentDataprotectionDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DialogContentImprintDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    function AppComponent(router, dialog) {
        this.router = router;
        this.dialog = dialog;
        this.title = 'app';
        this.scrollstatus = window.scrollY;
        this.viewportHeight = innerHeight;
        this.viewportWidth = innerWidth;
        this.showMenu = false;
        this.icon = 'menu';
        this.menuItemsArray = [
            { "title": "Landing", "id": 0 },
            { "title": "Projects", "id": 1 },
            { "title": "Skills", "id": 2 },
            { "title": "About", "id": 3 },
            { "title": "Contact", "id": 4 },
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        console.log(this.projects);
        console.log(this.skills);
        console.log(this.about);
    };
    AppComponent.prototype.triggerMenu = function () {
        this.showMenu = !this.showMenu;
        if (this.showMenu)
            this.icon = 'close';
        else
            this.icon = 'menu';
    };
    AppComponent.prototype.getMenuHeight = function () {
        if (this.viewportWidth <= 768) {
            return this.viewportHeight + 'px';
        }
        else {
            return 'auto';
        }
    };
    AppComponent.prototype.checkScrollStatus = function (status) {
        return window.scrollY >= status;
    };
    AppComponent.prototype.getScrollStatus = function () {
        console.log(window.scrollY);
        //console.log('viewport'+this.viewportWidth);
        return +window.scrollY;
    };
    AppComponent.prototype.openDialogDataprotection = function () {
        var dialogRef = this.dialog.open(DialogContentDataprotectionDialog, {
            height: '400px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    AppComponent.prototype.openDialogImprint = function () {
        var dialogRef = this.dialog.open(DialogContentImprintDialog, {
            height: '400px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    AppComponent.prototype.onMenuClose = function () {
        console.log("menu closed");
    };
    AppComponent.prototype.onMenuOpen = function () {
        console.log("menu Opened");
    };
    AppComponent.prototype.onItemSelect = function (item) {
        console.log(item + 'projects offsetTop: ' + this.about.nativeElement.firstChild.offsetTop);
        console.log(item + 'projects clientHeight: ' + this.about.nativeElement.firstChild.clientHeight);
        switch (item.id) {
            case 0:
                window.scrollTo(0, 0);
                break;
            case 1:
                window.scrollTo(0, this.projects.nativeElement.firstChild.offsetTop + 340);
                break;
            case 2:
                window.scrollTo(0, this.skills.nativeElement.firstChild.offsetTop + 320);
                break;
            case 3:
                window.scrollTo(0, this.about.nativeElement.firstChild.offsetTop + 320);
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('landing', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AppComponent.prototype, "landing", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('projects', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AppComponent.prototype, "projects", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('skills', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AppComponent.prototype, "skills", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('about', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AppComponent.prototype, "about", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());

var DialogContentDataprotectionDialog = (function () {
    function DialogContentDataprotectionDialog() {
    }
    DialogContentDataprotectionDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-content-dataprotection-dialog',
            template: __webpack_require__("../../../../../src/app/dialog-content-dataprotection-dialog.html"),
        })
    ], DialogContentDataprotectionDialog);
    return DialogContentDataprotectionDialog;
}());

var DialogContentImprintDialog = (function () {
    function DialogContentImprintDialog() {
    }
    DialogContentImprintDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-content-imprint-dialog',
            template: __webpack_require__("../../../../../src/app/dialog-content-imprint-dialog.html"),
        })
    ], DialogContentImprintDialog);
    return DialogContentImprintDialog;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_scroll_to__ = __webpack_require__("../../../../ng2-scroll-to/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_scroll_to___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_scroll_to__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_10__app_component__["b" /* DialogContentDataprotectionDialog */],
                __WEBPACK_IMPORTED_MODULE_10__app_component__["c" /* DialogContentImprintDialog */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_scroll_to__["ScrollToModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__angular_material_dialog__["b" /* MatDialogModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["b" /* DialogContentDataprotectionDialog */],
                __WEBPACK_IMPORTED_MODULE_10__app_component__["c" /* DialogContentImprintDialog */],
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\ninput {\r\n  background-color: #535353;\r\n  border: 1px solid #535353; \r\n  color: #FFFFFF;\r\n}\r\n\r\nform {\r\n  color: #FFFFFF;\t\r\n  font-size: 18px;\t\r\n  font-weight: 300;\t\r\n  line-height: 32px;\r\n}\r\n\r\n.contactbtn {\r\n  color: #E8E8E8;\r\n  background-color: #444444;\r\n  font-size: 19px;\t\r\n  font-weight: 800;\t\r\n  width: 400px;\t\r\n  height: 60px;\r\n  text-decoration: none;\r\n}\r\n\r\n.col-space-end {\r\n  padding-top: 250px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contact\" class=\"dark spanspace\" [ngStyle]=\"{'min-height': viewportHeight + 'px'}\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-space\">&nbsp;</div>\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-md-10\">\r\n\r\n      <div class=\"col-md-12 center\">\r\n        <h1>Say Hello!</h1>\r\n        <span>and send me an Email</span>       \r\n      </div>\r\n      <div class=\"col-12 center col-space-40\">\r\n        <a href=\"mailto:philipp-klug@web.de\" data-rel=\"external\"><button mat-button class=\"contactbtn\">Mail me</button></a>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-12 col-space-end\">&nbsp;</div>\r\n  </div>\r\n</div>\r\n<!-- https://xd.adobe.com/spec/b3abf3a4-5df2-4356-8b6c-0b1c6622bba0/#screen/0896a63d-17a3-4d90-9e0f-74c8d4e19e4b/Web%201920%20%E2%80%93%201 -->"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__("../../../../../src/app/contact/contact.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent() {
        this.scrollstatus = window.scrollY;
        this.viewportHeight = innerHeight;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */](18, 'Name', '', 'E-Mail');
        this.submitted = false;
        this.scroll = function () { };
    }
    ContactComponent.prototype.onSubmit = function () { this.submitted = true; };
    ContactComponent.prototype.newHero = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */](42, '', '');
    };
    ContactComponent.prototype.checkScrollStatus = function (status) {
        return window.scrollY >= status;
    };
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return Contact;
}());



/***/ }),

/***/ "../../../../../src/app/dialog-content-dataprotection-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1>Datenschutzerkl&auml;rung</h1> \r\n<h2>Datenschutz</h2> \r\n<p>\r\nDie Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. \r\nWir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser \r\nDatenschutzerkl&auml;rung.</p> <p>Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten m&ouml;glich. \r\nSoweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, \r\nsoweit m&ouml;glich, stets auf freiwilliger Basis. \r\nDiese Daten werden ohne Ihre ausdr&uuml;ckliche Zustimmung nicht an Dritte weitergegeben.\r\n</p> \r\n<p>\r\nWir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.B. bei der Kommunikation per E-Mail) \r\nSicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.\r\n</p>\r\n<p>&nbsp;</p> \r\n<h2>Kontaktformular</h2> \r\n<p>\r\nWenn Sie uns per Kontaktformular Anfragen zukommen lassen, \r\nwerden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks\r\nBearbeitung der Anfrage und f&uuml;r den Fall von Anschlussfragen bei uns gespeichert. \r\nDiese Daten geben wir nicht ohne Ihre Einwilligung weiter.\r\n</p>\r\n<p>&nbsp;</p> \r\n<h2>Google Analytics</h2> \r\n<p>\r\nDiese Website nutzt Funktionen des Webanalysedienstes Google Analytics. \r\nAnbieter ist die Google Inc., 1600 Amphitheatre Parkway Mountain View, CA 94043, USA.\r\n</p>\r\n<p>\r\nGoogle Analytics verwendet so genannte &quot;Cookies&quot;. \r\nDas sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der \r\nBenutzung der Website durch Sie erm&ouml;glichen. Die durch den Cookie erzeugten \r\nInformationen &uuml;ber Ihre Benutzung dieser Website werden in der Regel an einen Server von Google \r\nin den USA &uuml;bertragen und dort gespeichert.\r\n</p> \r\n<p>\r\n<strong>Browser Plugin</strong>\r\n</p> \r\n<p>Sie k&ouml;nnen die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; \r\nwir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht s&auml;mtliche \r\nFunktionen dieser Website vollumf&auml;nglich werden nutzen k&ouml;nnen. \r\nSie k&ouml;nnen dar&uuml;ber hinaus die Erfassung der durch den Cookie erzeugten und auf \r\nIhre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung \r\ndieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verf&uuml;gbare Browser-Plugin \r\nherunterladen und installieren: \r\n<a href=\"https://tools.google.com/dlpage/gaoptout?hl=de\" target=\"_blank\">https://tools.google.com/dlpage/gaoptout?hl=de</a>\r\n</p> \r\n<p>\r\n<strong>Widerspruch gegen Datenerfassung</strong>\r\n</p>\r\n<p>\r\nSie k&ouml;nnen die Erfassung Ihrer Daten durch Google Analytics verhindern, \r\nindem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, \r\nder die Erfassung Ihrer Daten bei zuk&uuml;nftigen Besuchen dieser Website verhindert: \r\n<a href=\"javascript:gaOptout();\">Google Analytics deaktivieren</a>\r\n</p> \r\n<p>\r\nMehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerkl&auml;rung von Google: \r\n<a href=\"https://support.google.com/analytics/answer/6004245?hl=de\" target=\"_blank\">https://support.google.com/analytics/answer/6004245?hl=de</a>\r\n</p>\r\n<p>&nbsp;</p> \r\n<h2>SSL-Verschl&uuml;sselung</h2> \r\n<p>\r\nDiese Seite nutzt aus Gr&uuml;nden der Sicherheit und zum Schutz der &Uuml;bertragung vertraulicher Inhalte, \r\nwie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschl&uuml;sselung. \r\nEine verschl&uuml;sselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &quot;http://&quot; \r\nauf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p> <p>Wenn die SSL Verschl&uuml;sselung \r\naktiviert ist, k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.\r\n</p>\r\n<p>&nbsp;</p> \r\n<h2>Widerspruch Werbe-Mails</h2> \r\n<p>\r\nDer Nutzung von im Rahmen der Impressumspflicht ver&ouml;ffentlichten Kontaktdaten zur &Uuml;bersendung von nicht ausdr&uuml;cklich \r\nangeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdr&uuml;cklich \r\nrechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.\r\n</p>\r\n<p>&nbsp;</p> \r\n<p>\r\nQuelle: <a href=\"https://www.e-recht24.de/muster-datenschutzerklaerung.html\">e-recht24</a>\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/dialog-content-imprint-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1>Impressum</h1> <h2>Angaben gem&auml;&szlig; &sect; 5 TMG:</h2> <p>Philipp Klug<br /> Comeniusweg, 23<br /> 40723 Hilden</p> <h2>Kontakt:</h2> <p>Telefon: 017623942750<br /> E-Mail: philipp-klug@web.de</p> <h2>Haftung f&uuml;r Inhalte</h2> <p>Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.</p> <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p> <h2>Haftung f&uuml;r Links</h2> <p>Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p> <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p> <h2>Urheberrecht</h2> <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.</p> <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam \r\n        werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p> <p>Quelle: <a href=\"https://www.erecht24.de\">e-recht24</a></p>"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#landing {\r\n    margin-top:-100px;\r\n}\r\n\r\nimg {\r\n    margin-top: -100px;\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5)\r\n}\r\n\r\n.scroll {\r\n    position: absolute;\r\n}\r\n\r\nh1 {\r\n    font-size: 47px;\r\n    font-weight: 600;\r\n    line-height: 41px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.text {\r\n    padding-top: 200px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"landing\" [ngStyle]=\"{'min-height': viewportHeight + 'px'}\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 col-xs-12\">\r\n      <!--<img src=\"./assets/phil.png\" />-->\r\n    </div>\r\n\r\n    <div class=\"col-md-6 col-xs-12 text\" >\r\n      <h1>Hi I'm Philipp, from <s>New York</s> Hilden. <br/><br/>\r\n        Software-Engineer & Backend-Hero</h1>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
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

var LandingComponent = (function () {
    function LandingComponent() {
        this.scrollstatus = window.scrollY;
        this.viewportHeight = innerHeight;
        this.scroll = function () { };
    }
    LandingComponent.prototype.ngOnInit = function () {
        window.addEventListener('scroll', this.scroll, true);
    };
    LandingComponent.prototype.checkScrollStatus = function (status) {
        return window.scrollY >= status;
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".showcase-pic {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.projectstext {\r\n    padding-top: 60px;\r\n}\r\n\r\n.image {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.overlayright {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 100%;\r\n    right: 0;\r\n    background-color: #242323;\r\n    overflow: hidden;\r\n    width: 0;\r\n    height: 100%;\r\n    -webkit-transition: .5s ease;\r\n    transition: .5s ease;\r\n}\r\n\r\n.showcase-pic:hover .overlayright {\r\n    width: 100%;\r\n    left: 0;\r\n}\r\n\r\n.overlayleft {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 100%;\r\n    left: 0;\r\n    background-color: #242323;\r\n    overflow: hidden;\r\n    width: 0;\r\n    height: 100%;\r\n    -webkit-transition: .5s ease;\r\n    transition: .5s ease;\r\n}\r\n\r\n.showcase-pic:hover .overlayleft {\r\n    width: 100%;\r\n    left: 0;\r\n}\r\n\r\n.text {\r\n    color: white;\r\n    font-size: 20px;\r\n    position: relative;\r\n    top: 50%;\r\n    left: 55%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    white-space: nowrap;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"projects\" class=\"light\" [ngStyle]=\"{'min-height': viewportHeight + 'px'}\">\r\n <div class=\"row\">\r\n    <div class=\"col-12 col-space\">&nbsp;</div>\r\n    <div class=\"col\"></div>\r\n\r\n    <div class=\"col-10\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 projectstext\">\r\n          <h1 [ngClass]=\"checkScrollStatus(280) ?  'flyinleft' : 'flyoutleft'\">Projects</h1>\r\n          <div [ngClass]=\"checkScrollStatus(342) ?  'flyinleft' : 'flyoutleft'\">\r\n            <span>\r\n              <p>\r\n                I've done many projects in a lot of different languages.\r\n                At the moment I feel most comfortable in PHP, C++ and Angular.\r\n                I've learned programming through compiling C++, comprehension and therefore think often in this language when implementation, planning or even when I got errors.\r\n\r\n                This does not mean that I am not open to other languages and systems.\r\n              </p>\r\n              <p>Get me interested in something and I'm in it. </p>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 showcase-pic\" [ngClass]=\"checkScrollStatus(300) ?  'flyinright' : 'flyoutright'\">\r\n            <img src=\"assets/arbeitsprobe_1.png\" alt=\"Avatar\" class=\"image\">\r\n          <div class=\"overlayright\">\r\n            <div class=\"text\">My favorite projekt till now. <br/>The Walking dead board game. <br/> Compiled as a C++ CMD console game.<br/>(2011)</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 showcase-pic\" [ngClass]=\"checkScrollStatus(716) ?  'flyinleft' : 'flyoutleft'\">\r\n            <img src=\"assets/arbeitsprobe_4-1.png\" alt=\"Avatar\" class=\"image\">\r\n          <div class=\"overlayleft\">\r\n            <div class=\"text\">I've done a view sites <br/> for Game Guilds.<br/>(2012)</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 showcase-pic\" [ngClass]=\"checkScrollStatus(716) ?  'flyinright' : 'flyoutright'\">\r\n            <img src=\"assets/unrealengine.png\" alt=\"Avatar\" class=\"image\">\r\n          <div class=\"overlayright\">\r\n            <div class=\"text\">Unreal Engine 4<br/>First steps with a Udemy-Course.<br/>Had a lot of fun with it. <br/>(2019)</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 projectstext\">\r\n          <h1 [ngClass]=\"checkScrollStatus(280) ?  'flyinleft' : 'flyoutleft'\">She said 'Yes'</h1>\r\n          <div [ngClass]=\"checkScrollStatus(342) ?  'flyinleft' : 'flyoutleft'\">\r\n            <span>\r\n              <p>\r\n                Special project for a special person. I've made for my proposal of marriage a Super-Mario-Like game in Phaser3, where she had to complete an amulet to break it.\r\n                <br/>Inside the amulet was a personal question, which only she could answer.\r\n                <br/>At the end - she said yes -\r\n              </p>\r\n              <p></p>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 showcase-pic\" [ngClass]=\"checkScrollStatus(300) ?  'flyinright' : 'flyoutright'\">\r\n          <img src=\"assets/phaser.png\" alt=\"Phaser3 Screenshot\" class=\"image\">\r\n          <div class=\"overlayright\">\r\n            <div class=\"text\">Super-Mario-Like game in Phaser 3  <br/>for my proposal of marriage.  <br/> (2020)</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-lg-6 showcase-pic\" [ngClass]=\"checkScrollStatus(300) ?  'flyinright' : 'flyoutright'\">\r\n          <img src=\"assets/stock-cards.png\" alt=\"Stock Cards Screenshot\" class=\"image\">\r\n          <div class=\"overlayright\">\r\n            <div class=\"text\">Regain hobby. <br/>Collecting and selling Pokemon cards.  <br/> Let us search what you need to 'Get 'Em All!' <br/>(2021)</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 projectstext\">\r\n          <h1 [ngClass]=\"checkScrollStatus(280) ?  'flyinleft' : 'flyoutleft'\">Pokemon Shop</h1>\r\n          <div [ngClass]=\"checkScrollStatus(342) ?  'flyinleft' : 'flyoutleft'\">\r\n            <span>\r\n              <p>\r\n                Regained an old hobby and mixed it up with new interests.\r\n                <br/>After a decade, good old thinks will always come back.\r\n                <br/>I decided to setup a Pokemon-Shop with Wordpress.\r\n              </p>\r\n              <p>The market is full of bad condition cards.<br/>Thats why I only have <a href=\"https://www.stock-cards.de\" target=\"_blank\">Stock-Cards</a> in Stock-Condition.</p>\r\n              <p>Take a look, if you whish at <a href=\"https://www.stock-cards.de\" target=\"_blank\">www.stock-cards.de</a></p>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-12 col-space\">&nbsp;</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
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

var ProjectsComponent = (function () {
    function ProjectsComponent() {
        this.scrollstatus = window.scrollY;
        this.viewportHeight = innerHeight;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent.prototype.checkScrollStatus = function (status) {
        return window.scrollY >= status;
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-md-6 {\r\n    padding: 50px 70px 50px 70px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"skills\" [ngClass]=\"checkScrollStatus(1295) ?  'flyinup' : 'fadeindown'\" [ngStyle]=\"{'min-height': viewportHeight + 'px'}\">\r\n  <div  class=\"row light\">\r\n    <div class=\"col-12 col-space\">&nbsp;</div>\r\n    <div class=\"col d-none d-sm-block\"></div>\r\n\r\n    <div class=\"row col-md-10\" >\r\n      <div class=\"col-md-6\" style=\"border-right: 2px solid #EDEEF1;\">\r\n        <h1 [ngClass]=\"checkScrollStatus(1515) ?  'flyinleft' : 'flyoutleft'\">Skills</h1>\r\n        <div [ngClass]=\"checkScrollStatus(1618) ?  'flyinleft' : 'flyoutleft'\">\r\n          <span>\r\n            During my school education as ITA, I've gained a solid base of IT knowledge and since then\r\n            I'm looking around to try out many different new things and languages. Now is the time to\r\n            specialize my acquired knowledge and to go in a certain direction.\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"spanspace\" >\r\n          <h3 [ngClass]=\"checkScrollStatus(1741) ?  'flyinleft' : 'flyoutleft'\">HTML,</h3>\r\n          <h3 [ngClass]=\"checkScrollStatus(1777) ?  'flyinleft' : 'flyoutleft'\">CSS/SASS,</h3>\r\n          <h3 [ngClass]=\"checkScrollStatus(1821) ?  'flyinleft' : 'flyoutleft'\">C++/C#/C,</h3>\r\n          <h3 [ngClass]=\"checkScrollStatus(1857) ?  'flyinleft' : 'flyoutleft'\">PHP,</h3>\r\n          <h3 [ngClass]=\"checkScrollStatus(1894) ?  'flyinleft' : 'flyoutleft'\">Angular (this site),</h3>\r\n          <h3 [ngClass]=\"checkScrollStatus(1938) ?  'flyinleft' : 'flyoutleft'\">MySQL,</h3>\r\n          <h3 [ngClass]=\"checkScrollStatus(1974) ?  'flyinleft' : 'flyoutleft'\">AUTOIT,</h3>\r\n          <h3 [ngClass]=\"checkScrollStatus(2018) ?  'flyinleft' : 'flyoutleft'\">JS,</h3>\r\n          <h3 [ngClass]=\"checkScrollStatus(2054) ?  'flyinleft' : 'flyoutleft'\">Unreal Engine,</h3>\r\n          <h3 [ngClass]=\"checkScrollStatus(2095) ?  'flyinleft' : 'flyoutleft'\">Windows Server,</h3>\r\n          <h3 [ngClass]=\"checkScrollStatus(2134) ?  'flyinleft' : 'flyoutleft'\">VirtualBox,</h3>\r\n          <h3 [ngClass]=\"checkScrollStatus(2178) ?  'flyinleft' : 'flyoutleft'\">XAML,</h3>\r\n          <h3 [ngClass]=\"checkScrollStatus(2215) ?  'flyinleft' : 'flyoutleft'\">TYPO3,</h3>\r\n          <h3 [ngClass]=\"checkScrollStatus(2258) ?  'flyinleft' : 'flyoutleft'\">Wordpress,</h3>\r\n          <h3 [ngClass]=\"checkScrollStatus(2295) ?  'flyinleft' : 'flyoutleft'\">Zend Framework,</h3>\r\n          <h3 [ngClass]=\"checkScrollStatus(2331) ?  'flyinleft' : 'flyoutleft'\">OOA,</h3>\r\n          <h3 [ngClass]=\"checkScrollStatus(2375) ?  'flyinleft' : 'flyoutleft'\">Phaser,</h3>\r\n          <h3 [ngClass]=\"checkScrollStatus(2412) ?  'flyinleft' : 'flyoutleft'\">and more...</h3>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6\">\r\n        <h1 [ngClass]=\"checkScrollStatus(1515) ?  'flyinright' : 'flyoutright'\">Professional background</h1>\r\n        <div [ngClass]=\"checkScrollStatus(1560) ?  'flyinright' : 'flyoutright'\">\r\n          <span>\r\n            I'm ready to settle down.\r\n            Fighting loyal site by site to create big things.\r\n            I'm curious to see what my next hometown will be to create a fortress.\r\n          </span>\r\n\r\n        </div>\r\n        <div class=\"row spanspace\">\r\n          <div class=\"education\" [ngClass]=\"checkScrollStatus(1695) ?  'flyinright' : 'flyoutright'\">\r\n            <small>2008-2013</small>\r\n            <h4>First-Level Support</h4>\r\n            <span>Computer Store Hilden, Hilden</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row spanspace\">\r\n          <div class=\"education\" [ngClass]=\"checkScrollStatus(1857) ?  'flyinright' : 'flyoutright'\">\r\n            <small>2009-2013</small>\r\n            <h4>Fachhochschulreife Anwendungsentwicklung</h4>\r\n            <span>Berufskolleg Hilden, Hilden</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row spanspace\">\r\n          <div class=\"education\" [ngClass]=\"checkScrollStatus(1974) ?  'flyinright' : 'flyoutright'\">\r\n            <small>2015-2018</small>\r\n            <h4>Ausbildung zum Fachinformatiker in Anwendungsentwicklung</h4>\r\n            <span>Netigo, Düsseldorf</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row spanspace\">\r\n          <div class=\"education\" [ngClass]=\"checkScrollStatus(2095) ?  'flyinright' : 'flyoutright'\">\r\n            <small>2018-now</small>\r\n            <h4>PHP-Developer <span>2018-2020</span></h4>\r\n            <h4>Full-Stack-Developer <span>2020-now </span></h4>\r\n            <span>CA-Digital, Hilden</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col d-none d-sm-block\"></div>\r\n    <div class=\"col-12 col-space\">&nbsp;</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
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

var SkillsComponent = (function () {
    function SkillsComponent() {
        this.scrollstatus = window.scrollY;
        this.viewportHeight = innerHeight;
        this.scroll = function () { };
    }
    SkillsComponent.prototype.ngOnInit = function () {
        window.addEventListener('scroll', this.scroll, true);
    };
    SkillsComponent.prototype.checkScrollStatus = function (status) {
        return window.scrollY >= status;
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__("../../../../../src/app/skills/skills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* unused harmony export ContactComponent */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
var ContactComponent = (function () {
    function ContactComponent(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map