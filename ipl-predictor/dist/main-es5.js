(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkipl_winner_predictor"] = self["webpackChunkipl_winner_predictor"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _ipl_predictor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ipl/predictor.component */
      2284);

      var _AppComponent = function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = 'IPL Winner Prediction';
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 1,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-predictor");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
          }
        },
        directives: [_ipl_predictor_component__WEBPACK_IMPORTED_MODULE_0__.PredictorComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      8295);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _ipl_predictor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ipl/predictor.component */
      2284);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      2238);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      5835);
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      8203);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: {
            appearance: 'fill'
          }
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _ipl_predictor_component__WEBPACK_IMPORTED_MODULE_1__.PredictorComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayModule]
        });
      })();
      /***/

    },

    /***/
    900:
    /*!********************************!*\
      !*** ./src/app/app.service.ts ***!
      \********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppService": function AppService() {
          return (
            /* binding */
            _AppService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      1841);

      var _AppService = /*#__PURE__*/function () {
        function _AppService(http) {
          _classCallCheck(this, _AppService);

          this.http = http;
          this.rootURL = '/api';
        }

        _createClass(_AppService, [{
          key: "addUser",
          value: function addUser(user) {
            return this.http.post(this.rootURL + '/user', {
              user: user
            });
          }
        }]);

        return _AppService;
      }();

      _AppService.ɵfac = function AppService_Factory(t) {
        return new (t || _AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _AppService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _AppService,
        factory: _AppService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    6461:
    /*!******************************!*\
      !*** ./src/app/ipl-teams.ts ***!
      \******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IPL_TEAMS": function IPL_TEAMS() {
          return (
            /* binding */
            _IPL_TEAMS
          );
        }
        /* harmony export */

      });

      var _IPL_TEAMS = [{
        id: 1,
        name: 'Chennai Super Kings'
      }, {
        id: 2,
        name: 'Mumbai Indians'
      }, {
        id: 3,
        name: 'Royal Challengers'
      }, {
        id: 4,
        name: 'Kolkata Knight Riders'
      }, {
        id: 5,
        name: 'Delhi Capitals'
      }, {
        id: 6,
        name: 'Sunrisers Hyderabad'
      }, {
        id: 7,
        name: 'Punjab Kings'
      }, {
        id: 8,
        name: 'Rajasthan Royals'
      }];
      /***/
    },

    /***/
    2284:
    /*!********************************************!*\
      !*** ./src/app/ipl/predictor.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PredictSubmit": function PredictSubmit() {
          return (
            /* binding */
            _PredictSubmit
          );
        },

        /* harmony export */
        "PredictorComponent": function PredictorComponent() {
          return (
            /* binding */
            _PredictorComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ipl_teams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../ipl-teams */
      6461);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../app.service */
      900);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      2238);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function PredictorComponent_li_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PredictorComponent_li_5_Template_li_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var team_r6 = restoredCtx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r7.onSelect(team_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var team_r6 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", team_r6 === ctx_r0.selectedTeam);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](team_r6.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", team_r6.name, " ");
        }
      }

      function PredictorComponent_div_6_li_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PredictorComponent_div_6_li_5_Template_li_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

            var semi_r10 = restoredCtx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r11.onSelectFinal(semi_r10.team);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var semi_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](semi_r10.team.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", semi_r10.team.name, " ");
        }
      }

      function PredictorComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Semi Finalist");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PredictorComponent_div_6_li_5_Template, 4, 2, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.selectedSemiFinalist);
        }
      }

      function PredictorComponent_div_7_li_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PredictorComponent_div_7_li_5_Template_li_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

            var semi_r14 = restoredCtx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r15.onSelectEliminator(semi_r14.team);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var semi_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](semi_r14.team.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", semi_r14.team.name, " ");
        }
      }

      function PredictorComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Eliminator");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PredictorComponent_div_7_li_5_Template, 4, 2, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.selectedEliminator);
        }
      }

      function PredictorComponent_div_8_li_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PredictorComponent_div_8_li_5_Template_li_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);

            var semi_r18 = restoredCtx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r19.onSelectWinner(semi_r18.team);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var semi_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](semi_r18.team.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", semi_r18.team.name, " ");
        }
      }

      function PredictorComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Finalist");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PredictorComponent_div_8_li_5_Template, 4, 2, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.selectedFinalist);
        }
      }

      function PredictorComponent_div_9_li_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PredictorComponent_div_9_li_5_Template_li_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);

            var semi_r22 = restoredCtx.$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r23.onSelectWinner(semi_r22.team);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var semi_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](semi_r22.team.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", semi_r22.team.name, " ");
        }
      }

      function PredictorComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "IPL 2021 Winner");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PredictorComponent_div_9_li_5_Template, 4, 2, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.selectedWinner);
        }
      }

      function PredictorComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PredictorComponent_div_14_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r25.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _PredictSubmit = function _PredictSubmit() {
        _classCallCheck(this, _PredictSubmit);
      };

      _PredictSubmit.ɵfac = function PredictSubmit_Factory(t) {
        return new (t || _PredictSubmit)();
      };

      _PredictSubmit.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _PredictSubmit,
        selectors: [["app-predictorSubmit"]],
        decls: 6,
        vars: 0,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["id", "detailsWinner"], ["mat-dialog-actions", ""]],
        template: function PredictSubmit_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Thanks for the prediction !!!");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "You are Successfully submitted the prediction ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 3);
          }
        },
        encapsulation: 2
      });

      var _PredictorComponent = /*#__PURE__*/function () {
        function _PredictorComponent(appService, dialog) {
          _classCallCheck(this, _PredictorComponent);

          this.appService = appService;
          this.dialog = dialog;
          this.teams = _ipl_teams__WEBPACK_IMPORTED_MODULE_0__.IPL_TEAMS;
          this.dataSemi = [];
          this.dataEliminator = [];
          this.dataFinal = [];
          this.dataWinner = [];
          this.isShownSemiFinal = false;
          this.isShownEliminator = false;
          this.isShownFinalist = false;
          this.isShownWinner = false;
        }

        _createClass(_PredictorComponent, [{
          key: "openDialog",
          value: function openDialog() {
            this.dialog.open(_PredictSubmit, {
              data: {
                dialogTitle: 'testy'
              }
            }); // console.log();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSelect",
          value: function onSelect(team) {
            var selectedSemifinalist = {
              team: team
            };

            if (this.dataSemi.length < 4) {
              var isPresent = this.dataSemi.some(function (team) {
                return team.team == selectedSemifinalist.team;
              });

              if (!isPresent) {
                this.dataSemi.push(selectedSemifinalist);
              }

              ;
            }

            this.isShownSemiFinal = true;
            this.selectedTeam = team;
            this.selectedSemiFinalist = this.dataSemi;
          }
        }, {
          key: "onSelectFinal",
          value: function onSelectFinal(team) {
            var selectedfinalistObj = {
              team: team
            };

            if (this.dataSemi.length != 4) {
              return;
            }

            if (this.dataEliminator.length < 2) {
              var isPresentFinal = this.dataFinal.some(function (team) {
                return team.team == selectedfinalistObj.team;
              });
              var isPresentElim = this.dataEliminator.some(function (team) {
                return team.team == selectedfinalistObj.team;
              });

              if (this.dataFinal.length === 0) {
                this.isShownFinalist = true;
                this.dataFinal.push(selectedfinalistObj);
              } else {
                if (!isPresentFinal && !isPresentElim) {
                  this.isShownEliminator = true;
                  this.dataEliminator.push(selectedfinalistObj);
                }

                ;
              }

              this.selectedEliminator = this.dataEliminator;
              this.selectedFinalist = this.dataFinal;
            }
          }
        }, {
          key: "onSelectEliminator",
          value: function onSelectEliminator(team) {
            var selectedfinalistObj = {
              team: team
            };

            if (this.dataEliminator.length != 2) {
              return;
            }

            if (this.dataFinal.length < 2) {
              var isPresentFinal = this.dataFinal.some(function (team) {
                return team.team == selectedfinalistObj.team;
              });

              if (!isPresentFinal) {
                this.dataFinal.push(selectedfinalistObj);
              }

              ;
              this.selectedFinalist = this.dataFinal;
            }
          }
        }, {
          key: "onSelectWinner",
          value: function onSelectWinner(team) {
            var selectedfinalistObj = {
              team: team
            };

            if (this.dataFinal.length != 2) {
              return;
            }

            if (this.dataWinner.length === 0) {
              this.isShownWinner = true;
              this.dataWinner.push(selectedfinalistObj);
            }

            this.selectedWinner = this.dataWinner;
          }
        }, {
          key: "reset",
          value: function reset() {
            this.isShownSemiFinal = false;
            this.isShownEliminator = false;
            this.isShownFinalist = false;
            this.isShownWinner = false;
            this.dataSemi.length = 0;
            this.dataEliminator.length = 0;
            this.dataFinal.length = 0;
            this.dataWinner.length = 0;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (this.dataWinner.length == 1) {
              var data = {
                'semi-finalist': this.dataSemi,
                'Eliminator': this.dataEliminator,
                'Finalist': this.dataFinal,
                'Winner': this.dataWinner
              };
              this.appService.addUser(JSON.stringify(data)).subscribe();
              this.openDialog();
              this.reset();
            }
          }
        }]);

        return _PredictorComponent;
      }();

      _PredictorComponent.ɵfac = function PredictorComponent_Factory(t) {
        return new (t || _PredictorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog));
      };

      _PredictorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _PredictorComponent,
        selectors: [["app-predictor"]],
        decls: 15,
        vars: 6,
        consts: [[1, "showQuaterfinalist"], [1, "headerquaterFinalist"], [1, "quater-finalist"], [1, "heroes"], [3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "showSemiFinal", 4, "ngIf"], ["class", "showElim", 4, "ngIf"], ["class", "showFinal", 4, "ngIf"], ["class", "showWinner", 4, "ngIf"], [1, "wrapper"], ["mat-raised-button", "", "color", "primary", 1, "button", 3, "click"], ["class", "wrapperSubmit", 4, "ngIf"], [3, "click"], [1, "badge"], [1, "showSemiFinal"], [1, "headerSemiFinalist"], [1, "semi-finalist"], [3, "click", 4, "ngFor", "ngForOf"], [1, "showElim"], [1, "headerElim"], [1, "eliminator"], [1, "showFinal"], [1, "headerFinalist"], [1, "finalist"], [1, "showWinner"], [1, "headerWinner"], [1, "winner"], [1, "wrapperSubmit"]],
        template: function PredictorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Quater Finalist");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PredictorComponent_li_5_Template, 4, 4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PredictorComponent_div_6_Template, 6, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PredictorComponent_div_7_Template, 6, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PredictorComponent_div_8_Template, 6, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, PredictorComponent_div_9_Template, 6, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PredictorComponent_Template_button_click_12_listener() {
              return ctx.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, PredictorComponent_div_14_Template, 4, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.teams);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isShownSemiFinal);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isShownEliminator);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isShownFinalist);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isShownWinner);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isShownWinner);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
        styles: [".heroes[_ngcontent-%COMP%] {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n  float: left;\n}\n\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #CB3;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #2c3a41;\n  background-color: #e6e6e6;\n  left: .1em;\n}\n\n.heroes[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n\n.heroes[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\n  background-color: #505050;\n  color: white;\n}\n\n.heroes[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:active {\n  background-color: black;\n  color: white;\n}\n\n.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color:#405061;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\ninput[_ngcontent-%COMP%] {\n  padding: .5rem;\n}\n\n.semi-finalist[_ngcontent-%COMP%]  {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n  float: left;\n}\n\n.semi-finalist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EF6;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n\n.semi-finalist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #2c3a41;\n  background-color: #a6c7f3;\n  left: .1em;\n}\n\n.semi-finalist[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  background-color: #a6c7f3;\n  color: white;\n}\n\n.semi-finalist[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\n  background-color: #3a9b47;\n  color: white;\n}\n\n.semi-finalist[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:active {\n  background-color: black;\n  color: white;\n}\n\n.semi-finalist[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color:#3a9b47;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n.finalist[_ngcontent-%COMP%]  {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n  float: left;\n}\n\n.finalist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #F92;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n\n.finalist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #2c3a41;\n  background-color: #a6c7f3;\n  left: .1em;\n}\n\n.finalist[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  background-color: #a6c7f3;\n  color: white;\n}\n\n.finalist[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\n  background-color: #3a9b47;\n  color: white;\n}\n\n.finalist[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:active {\n  background-color: black;\n  color: white;\n}\n\n.finalist[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color:#3a9b47;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n.eliminator[_ngcontent-%COMP%]  {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n  float: left;\n}\n\n.eliminator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EC7;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n\n.eliminator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #2c3a41;\n  background-color: #a6c7f3;\n  left: .1em;\n}\n\n.eliminator[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  background-color: #a6c7f3;\n  color: white;\n}\n\n.eliminator[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\n  background-color: #3a9b47;\n  color: white;\n}\n\n.eliminator[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:active {\n  background-color: black;\n  color: white;\n}\n\n.eliminator[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color:#3a9b47;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n.winner[_ngcontent-%COMP%]  {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n  float: left;\n}\n\n.winner[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: rgb(62, 172, 153);\n  color: white;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n\n.winner[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #2c3a41;\n  background-color: #a6c7f3;\n  left: .1em;\n}\n\n.winner[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  background-color: #a6c7f3;\n  color: white;\n}\n\n.winner[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\n  background-color: #3a9b47;\n  color: white;\n}\n\n.winner[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:active {\n  background-color: black;\n  color: white;\n}\n\n.winner[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color:#3a9b47;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.showElim[_ngcontent-%COMP%], .showQuaterfinalist[_ngcontent-%COMP%], .showSemiFinal[_ngcontent-%COMP%], .showFinal[_ngcontent-%COMP%], .showWinner[_ngcontent-%COMP%] {\n  width: 232px;\n}\n\n.showFinal[_ngcontent-%COMP%], .showElim[_ngcontent-%COMP%], .showSemiFinal[_ngcontent-%COMP%], .showWinner[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.headerElim[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #a6c7f3;\n    font-weight: bold;\n    font-style: italic;\n    font-size: 19px;\n}\n\n.headerSemiFinalist[_ngcontent-%COMP%] {\n  color: #A6C860;\n  text-align:center;\n  font-weight: bold;\n  font-style: italic;\n  font-size: 19px;\n\n}\n\n.headerquaterFinalist[_ngcontent-%COMP%] {\n  color: #e690bb;\n  text-align:center;\n  font-weight: bold;\n  font-style: italic;\n  font-size: 19px;\n\n}\n\n.headerFinalist[_ngcontent-%COMP%] {\n  color: #e6490d;\n  text-align:center;\n    font-weight: bold;\n    font-style: italic;\n    font-size: 19px;\n\n}\n\n.headerWinner[_ngcontent-%COMP%] {\n  color: #245831;\n  text-align:center;\n    font-weight: bold;\n    font-style: italic;\n    font-size: 19px;\n\n}\n\n.wrapperSubmit[_ngcontent-%COMP%] {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWRpY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNDQUFzQzs7QUFFdEM7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsVUFBVTtBQUNaOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTs7QUFFbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlOztBQUVuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJwcmVkaWN0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIElQTENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuXG4uaGVyb2VzIHtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDE1ZW07XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmhlcm9lcyBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0IzO1xuICBtYXJnaW46IC41ZW07XG4gIHBhZGRpbmc6IC4zZW0gMDtcbiAgaGVpZ2h0OiAxLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmhlcm9lcyBsaTpob3ZlciB7XG4gIGNvbG9yOiAjMmMzYTQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICBsZWZ0OiAuMWVtO1xufVxuLmhlcm9lcyBsaS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaGVyb2VzIGxpLnNlbGVjdGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmhlcm9lcyBsaS5zZWxlY3RlZDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmhlcm9lcyAuYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjojNDA1MDYxO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn1cblxuaW5wdXQge1xuICBwYWRkaW5nOiAuNXJlbTtcbn1cblxuLnNlbWktZmluYWxpc3QgIHtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDE1ZW07XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnNlbWktZmluYWxpc3QgIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRjY7XG4gIG1hcmdpbjogLjVlbTtcbiAgcGFkZGluZzogLjNlbSAwO1xuICBoZWlnaHQ6IDEuNmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uc2VtaS1maW5hbGlzdCAgbGk6aG92ZXIge1xuICBjb2xvcjogIzJjM2E0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2YzdmMztcbiAgbGVmdDogLjFlbTtcbn1cbi5zZW1pLWZpbmFsaXN0ICBsaS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNmM3ZjM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zZW1pLWZpbmFsaXN0ICBsaS5zZWxlY3RlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTliNDc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zZW1pLWZpbmFsaXN0ICBsaS5zZWxlY3RlZDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNlbWktZmluYWxpc3QgIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMzYTliNDc7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDEuOGVtO1xuICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG5cbi5maW5hbGlzdCAge1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTVlbTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uZmluYWxpc3QgIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOTI7XG4gIG1hcmdpbjogLjVlbTtcbiAgcGFkZGluZzogLjNlbSAwO1xuICBoZWlnaHQ6IDEuNmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uZmluYWxpc3QgIGxpOmhvdmVyIHtcbiAgY29sb3I6ICMyYzNhNDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNmM3ZjM7XG4gIGxlZnQ6IC4xZW07XG59XG4uZmluYWxpc3QgIGxpLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2YzdmMztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZpbmFsaXN0ICBsaS5zZWxlY3RlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTliNDc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5maW5hbGlzdCAgbGkuc2VsZWN0ZWQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5maW5hbGlzdCAgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IzNhOWI0NztcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMXB4O1xuICB0b3A6IC00cHg7XG4gIGhlaWdodDogMS44ZW07XG4gIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG5cbi5lbGltaW5hdG9yICB7XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxNWVtO1xuICBmbG9hdDogbGVmdDtcbn1cbi5lbGltaW5hdG9yICBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUM3O1xuICBtYXJnaW46IC41ZW07XG4gIHBhZGRpbmc6IC4zZW0gMDtcbiAgaGVpZ2h0OiAxLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmVsaW1pbmF0b3IgIGxpOmhvdmVyIHtcbiAgY29sb3I6ICMyYzNhNDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNmM3ZjM7XG4gIGxlZnQ6IC4xZW07XG59XG4uZWxpbWluYXRvciAgbGkuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZjN2YzO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZWxpbWluYXRvciAgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E5YjQ3O1xuICBjb2xvcjogd2hpdGU7XG59XG4uZWxpbWluYXRvciAgbGkuc2VsZWN0ZWQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5lbGltaW5hdG9yICAuYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjojM2E5YjQ3O1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn1cblxuLndpbm5lciAge1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTVlbTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ud2lubmVyICBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE3MiwgMTUzKTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IC41ZW07XG4gIHBhZGRpbmc6IC4zZW0gMDtcbiAgaGVpZ2h0OiAxLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLndpbm5lciAgbGk6aG92ZXIge1xuICBjb2xvcjogIzJjM2E0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2YzdmMztcbiAgbGVmdDogLjFlbTtcbn1cbi53aW5uZXIgIGxpLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2YzdmMztcbiAgY29sb3I6IHdoaXRlO1xufVxuLndpbm5lciAgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E5YjQ3O1xuICBjb2xvcjogd2hpdGU7XG59XG4ud2lubmVyICBsaS5zZWxlY3RlZDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuLndpbm5lciAgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IzNhOWI0NztcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMXB4O1xuICB0b3A6IC00cHg7XG4gIGhlaWdodDogMS44ZW07XG4gIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG5cbi53cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5zaG93RWxpbSwgLnNob3dRdWF0ZXJmaW5hbGlzdCwgLnNob3dTZW1pRmluYWwsIC5zaG93RmluYWwsIC5zaG93V2lubmVyIHtcbiAgd2lkdGg6IDIzMnB4O1xufVxuXG4uc2hvd0ZpbmFsLCAuc2hvd0VsaW0sIC5zaG93U2VtaUZpbmFsLCAuc2hvd1dpbm5lciB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaGVhZGVyRWxpbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNhNmM3ZjM7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmhlYWRlclNlbWlGaW5hbGlzdCB7XG4gIGNvbG9yOiAjQTZDODYwO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxOXB4O1xuXG59XG5cbi5oZWFkZXJxdWF0ZXJGaW5hbGlzdCB7XG4gIGNvbG9yOiAjZTY5MGJiO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxOXB4O1xuXG59XG5cbi5oZWFkZXJGaW5hbGlzdCB7XG4gIGNvbG9yOiAjZTY0OTBkO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuXG59XG5cbi5oZWFkZXJXaW5uZXIge1xuICBjb2xvcjogIzI0NTgzMTtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcblxufVxuXG4ud3JhcHBlclN1Ym1pdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5cblxuXG5cblxuIl19 */"]
      });
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map