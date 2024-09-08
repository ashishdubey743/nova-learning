/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      step: 1,
      steps: ['Basic', 'Account', 'Personal', 'Preferences'],
      formData: {
        name: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        password_confirmation: '',
        dob: '',
        gender: '',
        address: '',
        language: '',
        timezone: '',
        subscribe: false
      },
      formErrors: {
        name: '',
        email: '',
        phone: ''
      }
    };
  },
  methods: {
    nextStep: function nextStep() {
      // Reset errors before validation
      this.formErrors = {
        name: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        password_confirmation: '',
        gender: '',
        dob: ''
      };

      // Validate step 1 fields
      if (this.step === 1) {
        var valid = true;
        if (!this.formData.name) {
          this.formErrors.name = 'Name is required';
          valid = false;
        }
        if (!this.formData.email) {
          this.formErrors.email = 'Email is required';
          valid = false;
        } else if (!this.validateEmail(this.formData.email)) {
          this.formErrors.email = 'Enter a valid email';
          valid = false;
        }
        if (!this.formData.phone) {
          this.formErrors.phone = 'Phone number is required';
          valid = false;
        }

        // If validation fails, prevent moving to the next step
        if (!valid) return;
      }

      // Validate step 2 fields
      if (this.step === 2) {
        var _valid = true;
        if (!this.formData.username) {
          this.formErrors.username = 'Username is required';
          _valid = false;
        }
        if (!this.formData.password) {
          this.formErrors.password = 'Password is required';
          _valid = false;
        } else if (this.formData.password.length < 6) {
          this.formErrors.password = 'Password must be at least 6 characters';
          _valid = false;
        }
        if (!this.formData.password_confirmation) {
          this.formErrors.password_confirmation = 'Please confirm your password';
          _valid = false;
        } else if (this.formData.password !== this.formData.password_confirmation) {
          this.formErrors.password_confirmation = 'Passwords do not match';
          _valid = false;
        }

        // If validation fails, prevent moving to the next step
        if (!_valid) return;
      }

      // Validate step 2 fields
      if (this.step === 3) {
        var _valid2 = true;
        if (!this.formData.dob) {
          this.formErrors.dob = 'Date of birth is required';
          _valid2 = false;
        }
        if (!this.formData.gender) {
          this.formErrors.password = 'Gender is required';
          _valid2 = false;
        }

        // If validation fails, prevent moving to the next step
        if (!_valid2) return;
      }
      // If all validations pass, move to the next step
      if (this.step < this.steps.length) {
        this.step++;
      }
    },
    prevStep: function prevStep() {
      if (this.step > 1) {
        this.step--;
      }
    },
    navigateToStep: function navigateToStep(stepNumber) {
      this.step = stepNumber;
    },
    submitForm: function submitForm() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Nova.request().post('/profile-setup-tool', _this.formData);
            case 3:
              response = _context.sent;
              Nova.success('Profile Completed');
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              Nova.error('There was a problem saving the profile.');
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    validateEmail: function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
      return re.test(String(email).toLowerCase());
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10"
};
var _hoisted_2 = {
  "class": "flex justify-center mb-6"
};
var _hoisted_3 = ["onClick"];
var _hoisted_4 = {
  key: 0,
  "class": "mx-2 text-gray-500"
};
var _hoisted_5 = {
  key: 0
};
var _hoisted_6 = {
  "class": "mb-4"
};
var _hoisted_7 = {
  key: 0,
  "class": "text-red-500 text-sm"
};
var _hoisted_8 = {
  "class": "mb-4"
};
var _hoisted_9 = {
  key: 0,
  "class": "text-red-500 text-sm"
};
var _hoisted_10 = {
  "class": "mb-4"
};
var _hoisted_11 = {
  key: 0,
  "class": "text-red-500 text-sm"
};
var _hoisted_12 = {
  key: 1
};
var _hoisted_13 = {
  "class": "mb-4"
};
var _hoisted_14 = {
  key: 0,
  "class": "text-red-500 text-sm"
};
var _hoisted_15 = {
  "class": "mb-4"
};
var _hoisted_16 = {
  key: 0,
  "class": "text-red-500 text-sm"
};
var _hoisted_17 = {
  "class": "mb-4"
};
var _hoisted_18 = {
  key: 0,
  "class": "text-red-500 text-sm"
};
var _hoisted_19 = {
  "class": "flex justify-between mt-4"
};
var _hoisted_20 = {
  key: 2
};
var _hoisted_21 = {
  "class": "mb-4"
};
var _hoisted_22 = {
  key: 0,
  "class": "text-red-500 text-sm"
};
var _hoisted_23 = {
  "class": "mb-4"
};
var _hoisted_24 = {
  key: 0,
  "class": "text-red-500 text-sm"
};
var _hoisted_25 = {
  "class": "mb-4"
};
var _hoisted_26 = {
  "class": "flex justify-between mt-4"
};
var _hoisted_27 = {
  key: 3
};
var _hoisted_28 = {
  "class": "mb-4"
};
var _hoisted_29 = {
  "class": "mb-4"
};
var _hoisted_30 = {
  "class": "mb-4"
};
var _hoisted_31 = {
  "class": "block text-gray-700 text-sm font-bold mb-2"
};
var _hoisted_32 = {
  "class": "flex justify-between mt-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_cache[35] || (_cache[35] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
    "class": "text-xl font-semibold text-gray-700 mb-6"
  }, "Profile Setup", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Breadcrumbs for steps "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.steps, function (label, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": "mx-2"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: function onClick($event) {
        return $options.navigateToStep(index + 1);
      },
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'text-blue-500 font-bold': $data.step === index + 1,
        'text-gray-500': $data.step !== index + 1
      }, "text-sm focus:outline-none"])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(label), 11 /* TEXT, CLASS, PROPS */, _hoisted_3), index < $data.steps.length - 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, "/")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.submitForm && $options.submitForm.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Step 1: Basic Information "), $data.step === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "block text-gray-700 text-sm font-bold mb-2"
  }, "Name:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.formData.name = $event;
    }),
    type: "text",
    "class": "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
    placeholder: "Enter your name"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.name]]), $data.formErrors.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.formErrors.name), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "block text-gray-700 text-sm font-bold mb-2"
  }, "Email:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.formData.email = $event;
    }),
    type: "email",
    "class": "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
    placeholder: "Enter your email"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.email]]), $data.formErrors.email ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.formErrors.email), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "block text-gray-700 text-sm font-bold mb-2"
  }, "Phone Number:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.formData.phone = $event;
    }),
    type: "text",
    "class": "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
    placeholder: "Enter your phone number"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.phone]]), $data.formErrors.phone ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.formErrors.phone), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.nextStep && $options.nextStep.apply($options, arguments);
    }),
    "class": "bg-green-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg w-full mt-4 shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105"
  }, " Next ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Step 2: Account Information "), $data.step === 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "block text-gray-700 text-sm font-bold mb-2"
  }, "Username:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.formData.username = $event;
    }),
    type: "text",
    "class": "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
    placeholder: "Enter your username"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.username]]), $data.formErrors.username ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.formErrors.username), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "block text-gray-700 text-sm font-bold mb-2"
  }, "Password:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.formData.password = $event;
    }),
    type: "password",
    "class": "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
    placeholder: "Enter your password"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.password]]), $data.formErrors.password ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.formErrors.password), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "block text-gray-700 text-sm font-bold mb-2"
  }, "Confirm Password:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.formData.password_confirmation = $event;
    }),
    type: "password",
    "class": "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
    placeholder: "Confirm your password"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.password_confirmation]]), $data.formErrors.password_confirmation ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.formErrors.password_confirmation), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    onClick: _cache[7] || (_cache[7] = function () {
      return $options.prevStep && $options.prevStep.apply($options, arguments);
    }),
    "class": "bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg"
  }, " Previous "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    onClick: _cache[8] || (_cache[8] = function () {
      return $options.nextStep && $options.nextStep.apply($options, arguments);
    }),
    "class": "bg-green-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
  }, " Next ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Step 3: Personal Information "), $data.step === 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "block text-gray-700 text-sm font-bold mb-2"
  }, "Date of Birth:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.formData.dob = $event;
    }),
    type: "date",
    "class": "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.dob]]), $data.formErrors.dob ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.formErrors.dob), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_cache[27] || (_cache[27] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "block text-gray-700 text-sm font-bold mb-2"
  }, "Gender:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.formData.gender = $event;
    }),
    "class": "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  }, _cache[26] || (_cache[26] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: ""
  }, "Select Gender", -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "Male"
  }, "Male", -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "Female"
  }, "Female", -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "Other"
  }, "Other", -1 /* HOISTED */)]), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.gender]]), $data.formErrors.gender ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.formErrors.gender), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_cache[28] || (_cache[28] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "block text-gray-700 text-sm font-bold mb-2"
  }, "Address:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.formData.address = $event;
    }),
    type: "text",
    "class": "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
    placeholder: "Enter your address"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.address]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    onClick: _cache[12] || (_cache[12] = function () {
      return $options.prevStep && $options.prevStep.apply($options, arguments);
    }),
    "class": "bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg"
  }, " Previous "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    onClick: _cache[13] || (_cache[13] = function () {
      return $options.nextStep && $options.nextStep.apply($options, arguments);
    }),
    "class": "bg-green-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
  }, " Next ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Step 4: Preferences/Settings "), $data.step === 4 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_cache[30] || (_cache[30] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "block text-gray-700 text-sm font-bold mb-2"
  }, "Preferred Language:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $data.formData.language = $event;
    }),
    "class": "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  }, _cache[29] || (_cache[29] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "English"
  }, "English", -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "Hindi"
  }, "Hindi", -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "Spanish"
  }, "Spanish", -1 /* HOISTED */)]), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.language]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_cache[32] || (_cache[32] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "block text-gray-700 text-sm font-bold mb-2"
  }, "Timezone:", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $data.formData.timezone = $event;
    }),
    "class": "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  }, _cache[31] || (_cache[31] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "IST"
  }, "Indian Standard Time (IST)", -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "PST"
  }, "Pacific Standard Time (PST)", -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "EST"
  }, "Eastern Standard Time (EST)", -1 /* HOISTED */)]), 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.timezone]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $data.formData.subscribe = $event;
    }),
    type: "checkbox"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.formData.subscribe]]), _cache[33] || (_cache[33] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Subscribe to newsletter "))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    onClick: _cache[17] || (_cache[17] = function () {
      return $options.prevStep && $options.prevStep.apply($options, arguments);
    }),
    "class": "bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg"
  }, " Previous "), _cache[34] || (_cache[34] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
  }, " Submit ", -1 /* HOISTED */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32 /* NEED_HYDRATION */)]);
}

/***/ }),

/***/ "./resources/js/tool.js":
/*!******************************!*\
  !*** ./resources/js/tool.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Tool */ "./resources/js/pages/Tool.vue");

Nova.booting(function (app, store) {
  Nova.inertia('Profile', _pages_Tool__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "./resources/css/tool.css":
/*!********************************!*\
  !*** ./resources/css/tool.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/pages/Tool.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Tool.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tool.vue?vue&type=template&id=ef10eebe */ "./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe");
/* harmony import */ var _Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tool.vue?vue&type=script&lang=js */ "./resources/js/pages/Tool.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_ashish_nova_nova_nova_components_Profile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_ashish_nova_nova_nova_components_Profile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/Tool.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Tool.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/pages/Tool.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tool.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tool.vue?vue&type=template&id=ef10eebe */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe");


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

module.exports = Vue;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/tool": 0,
/******/ 			"css/tool": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkashish_profile"] = self["webpackChunkashish_profile"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/tool"], () => (__webpack_require__("./resources/js/tool.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/tool"], () => (__webpack_require__("./resources/css/tool.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;