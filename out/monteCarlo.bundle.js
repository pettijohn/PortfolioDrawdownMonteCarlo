var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// deno:https://esm.sh/react@17.0.2/denonext/react.mjs
var react_exports = {};
__export(react_exports, {
  Children: () => pe,
  Component: () => ae,
  Fragment: () => ce,
  Profiler: () => se,
  PureComponent: () => ye,
  StrictMode: () => fe,
  Suspense: () => le,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => de,
  cloneElement: () => _e,
  createContext: () => ve,
  createElement: () => me,
  createFactory: () => he,
  createRef: () => Ee,
  default: () => qe,
  forwardRef: () => Se,
  isValidElement: () => Ce,
  lazy: () => Re,
  memo: () => ke,
  useCallback: () => $e,
  useContext: () => ge,
  useDebugValue: () => je,
  useEffect: () => Oe,
  useImperativeHandle: () => Pe,
  useLayoutEffect: () => xe,
  useMemo: () => Ie,
  useReducer: () => we,
  useRef: () => Ae,
  useState: () => Fe,
  version: () => Le
});
var __0$ = /* @__PURE__ */ (() => {
  var e = Object.assign;
  return {
    default: e
  };
})();
var require2 = (n) => {
  const e = (m) => typeof m.default < "u" ? m.default : m, c = (m) => Object.assign({
    __esModule: true
  }, m);
  switch (n) {
    case "npm:object-assign":
      return e(__0$);
    default:
      console.error('module "' + n + '" not found');
      return null;
  }
};
var W = Object.create;
var g = Object.defineProperty;
var Y = Object.getOwnPropertyDescriptor;
var G = Object.getOwnPropertyNames;
var J = Object.getPrototypeOf;
var K = Object.prototype.hasOwnProperty;
var Q = ((e) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(e, {
  get: (t, r) => (typeof require2 < "u" ? require2 : t)[r]
}) : e)(function(e) {
  if (typeof require2 < "u") return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var j = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);
var X = (e, t, r, u) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of G(t)) !K.call(e, o) && o !== r && g(e, o, {
    get: () => t[o],
    enumerable: !(u = Y(t, o)) || u.enumerable
  });
  return e;
};
var Z = (e, t, r) => (r = e != null ? W(J(e)) : {}, X(1 ? g(r, "default", {
  value: e,
  enumerable: true
}) : r, e));
var B = j((n) => {
  "use strict";
  var S2 = Q("npm:object-assign"), y2 = 60103, x = 60106;
  n.Fragment = 60107;
  n.StrictMode = 60108;
  n.Profiler = 60114;
  var I2 = 60109, w = 60110, A3 = 60112;
  n.Suspense = 60113;
  var F2 = 60115, L = 60116;
  typeof Symbol == "function" && Symbol.for && (l2 = Symbol.for, y2 = l2("react.element"), x = l2("react.portal"), n.Fragment = l2("react.fragment"), n.StrictMode = l2("react.strict_mode"), n.Profiler = l2("react.profiler"), I2 = l2("react.provider"), w = l2("react.context"), A3 = l2("react.forward_ref"), n.Suspense = l2("react.suspense"), F2 = l2("react.memo"), L = l2("react.lazy"));
  var l2, O2 = typeof Symbol == "function" && Symbol.iterator;
  function b(e) {
    return e === null || typeof e != "object" ? null : (e = O2 && e[O2] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  function _(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var q = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, D3 = {};
  function d(e, t, r) {
    this.props = e, this.context = t, this.refs = D3, this.updater = r || q;
  }
  d.prototype.isReactComponent = {};
  d.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error(_(85));
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  d.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function M2() {
  }
  M2.prototype = d.prototype;
  function C2(e, t, r) {
    this.props = e, this.context = t, this.refs = D3, this.updater = r || q;
  }
  var R = C2.prototype = new M2();
  R.constructor = C2;
  S2(R, d.prototype);
  R.isPureReactComponent = true;
  var k2 = {
    current: null
  }, N3 = Object.prototype.hasOwnProperty, U3 = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function T3(e, t, r) {
    var u, o = {}, c = null, s = null;
    if (t != null) for (u in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (c = "" + t.key), t) N3.call(t, u) && !U3.hasOwnProperty(u) && (o[u] = t[u]);
    var f = arguments.length - 2;
    if (f === 1) o.children = r;
    else if (1 < f) {
      for (var i3 = Array(f), p = 0; p < f; p++) i3[p] = arguments[p + 2];
      o.children = i3;
    }
    if (e && e.defaultProps) for (u in f = e.defaultProps, f) o[u] === void 0 && (o[u] = f[u]);
    return {
      $$typeof: y2,
      type: e,
      key: c,
      ref: s,
      props: o,
      _owner: k2.current
    };
  }
  function ee3(e, t) {
    return {
      $$typeof: y2,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
    };
  }
  function $2(e) {
    return typeof e == "object" && e !== null && e.$$typeof === y2;
  }
  function te3(e) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(r) {
      return t[r];
    });
  }
  var P = /\/+/g;
  function E2(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? te3("" + e.key) : t.toString(36);
  }
  function m(e, t, r, u, o) {
    var c = typeof e;
    (c === "undefined" || c === "boolean") && (e = null);
    var s = false;
    if (e === null) s = true;
    else switch (c) {
      case "string":
      case "number":
        s = true;
        break;
      case "object":
        switch (e.$$typeof) {
          case y2:
          case x:
            s = true;
        }
    }
    if (s) return s = e, o = o(s), e = u === "" ? "." + E2(s, 0) : u, Array.isArray(o) ? (r = "", e != null && (r = e.replace(P, "$&/") + "/"), m(o, t, r, "", function(p) {
      return p;
    })) : o != null && ($2(o) && (o = ee3(o, r + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(P, "$&/") + "/") + e)), t.push(o)), 1;
    if (s = 0, u = u === "" ? "." : u + ":", Array.isArray(e)) for (var f = 0; f < e.length; f++) {
      c = e[f];
      var i3 = u + E2(c, f);
      s += m(c, t, r, i3, o);
    }
    else if (i3 = b(e), typeof i3 == "function") for (e = i3.call(e), f = 0; !(c = e.next()).done; ) c = c.value, i3 = u + E2(c, f++), s += m(c, t, r, i3, o);
    else if (c === "object") throw t = "" + e, Error(_(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
    return s;
  }
  function v2(e, t, r) {
    if (e == null) return e;
    var u = [], o = 0;
    return m(e, u, "", "", function(c) {
      return t.call(r, c, o++);
    }), u;
  }
  function re2(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), e._status = 0, e._result = t, t.then(function(r) {
        e._status === 0 && (r = r.default, e._status = 1, e._result = r);
      }, function(r) {
        e._status === 0 && (e._status = 2, e._result = r);
      });
    }
    if (e._status === 1) return e._result;
    throw e._result;
  }
  var V4 = {
    current: null
  };
  function a() {
    var e = V4.current;
    if (e === null) throw Error(_(321));
    return e;
  }
  var ne3 = {
    ReactCurrentDispatcher: V4,
    ReactCurrentBatchConfig: {
      transition: 0
    },
    ReactCurrentOwner: k2,
    IsSomeRendererActing: {
      current: false
    },
    assign: S2
  };
  n.Children = {
    map: v2,
    forEach: function(e, t, r) {
      v2(e, function() {
        t.apply(this, arguments);
      }, r);
    },
    count: function(e) {
      var t = 0;
      return v2(e, function() {
        t++;
      }), t;
    },
    toArray: function(e) {
      return v2(e, function(t) {
        return t;
      }) || [];
    },
    only: function(e) {
      if (!$2(e)) throw Error(_(143));
      return e;
    }
  };
  n.Component = d;
  n.PureComponent = C2;
  n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne3;
  n.cloneElement = function(e, t, r) {
    if (e == null) throw Error(_(267, e));
    var u = S2({}, e.props), o = e.key, c = e.ref, s = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (c = t.ref, s = k2.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var f = e.type.defaultProps;
      for (i3 in t) N3.call(t, i3) && !U3.hasOwnProperty(i3) && (u[i3] = t[i3] === void 0 && f !== void 0 ? f[i3] : t[i3]);
    }
    var i3 = arguments.length - 2;
    if (i3 === 1) u.children = r;
    else if (1 < i3) {
      f = Array(i3);
      for (var p = 0; p < i3; p++) f[p] = arguments[p + 2];
      u.children = f;
    }
    return {
      $$typeof: y2,
      type: e.type,
      key: o,
      ref: c,
      props: u,
      _owner: s
    };
  };
  n.createContext = function(e, t) {
    return t === void 0 && (t = null), e = {
      $$typeof: w,
      _calculateChangedBits: t,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, e.Provider = {
      $$typeof: I2,
      _context: e
    }, e.Consumer = e;
  };
  n.createElement = T3;
  n.createFactory = function(e) {
    var t = T3.bind(null, e);
    return t.type = e, t;
  };
  n.createRef = function() {
    return {
      current: null
    };
  };
  n.forwardRef = function(e) {
    return {
      $$typeof: A3,
      render: e
    };
  };
  n.isValidElement = $2;
  n.lazy = function(e) {
    return {
      $$typeof: L,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: re2
    };
  };
  n.memo = function(e, t) {
    return {
      $$typeof: F2,
      type: e,
      compare: t === void 0 ? null : t
    };
  };
  n.useCallback = function(e, t) {
    return a().useCallback(e, t);
  };
  n.useContext = function(e, t) {
    return a().useContext(e, t);
  };
  n.useDebugValue = function() {
  };
  n.useEffect = function(e, t) {
    return a().useEffect(e, t);
  };
  n.useImperativeHandle = function(e, t, r) {
    return a().useImperativeHandle(e, t, r);
  };
  n.useLayoutEffect = function(e, t) {
    return a().useLayoutEffect(e, t);
  };
  n.useMemo = function(e, t) {
    return a().useMemo(e, t);
  };
  n.useReducer = function(e, t, r) {
    return a().useReducer(e, t, r);
  };
  n.useRef = function(e) {
    return a().useRef(e);
  };
  n.useState = function(e) {
    return a().useState(e);
  };
  n.version = "17.0.2";
});
var H = j((ie2, z3) => {
  "use strict";
  z3.exports = B();
});
var h = Z(H());
var { Fragment: ce, StrictMode: fe, Profiler: se, Suspense: le, Children: pe, Component: ae, PureComponent: ye, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: de, cloneElement: _e, createContext: ve, createElement: me, createFactory: he, createRef: Ee, forwardRef: Se, isValidElement: Ce, lazy: Re, memo: ke, useCallback: $e, useContext: ge, useDebugValue: je, useEffect: Oe, useImperativeHandle: Pe, useLayoutEffect: xe, useMemo: Ie, useReducer: we, useRef: Ae, useState: Fe, version: Le } = h;
var qe = h.default ?? h;

// deno:https://esm.sh/scheduler@0.20.2?target=denonext
var scheduler_0_20_exports = {};
__export(scheduler_0_20_exports, {
  default: () => Ie2,
  unstable_IdlePriority: () => ce2,
  unstable_ImmediatePriority: () => fe2,
  unstable_LowPriority: () => be,
  unstable_NormalPriority: () => pe2,
  unstable_Profiling: () => de2,
  unstable_UserBlockingPriority: () => _e2,
  unstable_cancelCallback: () => ye2,
  unstable_continueExecution: () => ve2,
  unstable_getCurrentPriorityLevel: () => me2,
  unstable_getFirstCallbackNode: () => we2,
  unstable_next: () => he2,
  unstable_now: () => ae2,
  unstable_pauseExecution: () => ke2,
  unstable_requestPaint: () => ge2,
  unstable_runWithPriority: () => Pe2,
  unstable_scheduleCallback: () => xe2,
  unstable_shouldYield: () => se2,
  unstable_wrapCallback: () => Te
});

// deno:https://esm.sh/scheduler@0.20.2/denonext/scheduler.mjs
var D = Object.create;
var V = Object.defineProperty;
var z = Object.getOwnPropertyDescriptor;
var B2 = Object.getOwnPropertyNames;
var G2 = Object.getPrototypeOf;
var ee = Object.prototype.hasOwnProperty;
var H2 = (e, n) => () => (n || e((n = {
  exports: {}
}).exports, n), n.exports);
var ne = (e, n, t, l2) => {
  if (n && typeof n == "object" || typeof n == "function") for (let o of B2(n)) !ee.call(e, o) && o !== t && V(e, o, {
    get: () => n[o],
    enumerable: !(l2 = z(n, o)) || l2.enumerable
  });
  return e;
};
var te = (e, n, t) => (t = e != null ? D(G2(e)) : {}, ne(n || !e || !e.__esModule ? V(t, "default", {
  value: e,
  enumerable: true
}) : t, e));
var Z2 = H2((r) => {
  "use strict";
  var y2, h3, T3, R;
  typeof performance == "object" && typeof performance.now == "function" ? (J4 = performance, r.unstable_now = function() {
    return J4.now();
  }) : (C2 = Date, K3 = C2.now(), r.unstable_now = function() {
    return C2.now() - K3;
  });
  var J4, C2, K3;
  typeof globalThis > "u" || typeof MessageChannel != "function" ? (_ = null, L = null, N3 = function() {
    if (_ !== null) try {
      var e = r.unstable_now();
      _(true, e), _ = null;
    } catch (n) {
      throw setTimeout(N3, 0), n;
    }
  }, y2 = function(e) {
    _ !== null ? setTimeout(y2, 0, e) : (_ = e, setTimeout(N3, 0));
  }, h3 = function(e, n) {
    L = setTimeout(e, n);
  }, T3 = function() {
    clearTimeout(L);
  }, r.unstable_shouldYield = function() {
    return false;
  }, R = r.unstable_forceFrameRate = function() {
  }) : (Q4 = globalThis.setTimeout, S2 = globalThis.clearTimeout, typeof console < "u" && (X4 = globalThis.cancelAnimationFrame, typeof globalThis.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof X4 != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")), m = false, w = null, g2 = -1, E2 = 5, F2 = 0, r.unstable_shouldYield = function() {
    return r.unstable_now() >= F2;
  }, R = function() {
  }, r.unstable_forceFrameRate = function(e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E2 = 0 < e ? Math.floor(1e3 / e) : 5;
  }, q = new MessageChannel(), P = q.port2, q.port1.onmessage = function() {
    if (w !== null) {
      var e = r.unstable_now();
      F2 = e + E2;
      try {
        w(true, e) ? P.postMessage(null) : (m = false, w = null);
      } catch (n) {
        throw P.postMessage(null), n;
      }
    } else m = false;
  }, y2 = function(e) {
    w = e, m || (m = true, P.postMessage(null));
  }, h3 = function(e, n) {
    g2 = Q4(function() {
      e(r.unstable_now());
    }, n);
  }, T3 = function() {
    S2(g2), g2 = -1;
  });
  var _, L, N3, Q4, S2, X4, m, w, g2, E2, F2, q, P;
  function Y3(e, n) {
    var t = e.length;
    e.push(n);
    e: for (; ; ) {
      var l2 = t - 1 >>> 1, o = e[l2];
      if (o !== void 0 && 0 < x(o, n)) e[l2] = n, e[t] = o, t = l2;
      else break e;
    }
  }
  function a(e) {
    return e = e[0], e === void 0 ? null : e;
  }
  function I2(e) {
    var n = e[0];
    if (n !== void 0) {
      var t = e.pop();
      if (t !== n) {
        e[0] = t;
        e: for (var l2 = 0, o = e.length; l2 < o; ) {
          var f = 2 * (l2 + 1) - 1, b = e[f], v2 = f + 1, d = e[v2];
          if (b !== void 0 && 0 > x(b, t)) d !== void 0 && 0 > x(d, b) ? (e[l2] = d, e[v2] = t, l2 = v2) : (e[l2] = b, e[f] = t, l2 = f);
          else if (d !== void 0 && 0 > x(d, t)) e[l2] = d, e[v2] = t, l2 = v2;
          else break e;
        }
      }
      return n;
    }
    return null;
  }
  function x(e, n) {
    var t = e.sortIndex - n.sortIndex;
    return t !== 0 ? t : e.id - n.id;
  }
  var s = [], c = [], re2 = 1, u = null, i3 = 3, M2 = false, p = false, k2 = false;
  function U3(e) {
    for (var n = a(c); n !== null; ) {
      if (n.callback === null) I2(c);
      else if (n.startTime <= e) I2(c), n.sortIndex = n.expirationTime, Y3(s, n);
      else break;
      n = a(c);
    }
  }
  function W3(e) {
    if (k2 = false, U3(e), !p) if (a(s) !== null) p = true, y2(O2);
    else {
      var n = a(c);
      n !== null && h3(W3, n.startTime - e);
    }
  }
  function O2(e, n) {
    p = false, k2 && (k2 = false, T3()), M2 = true;
    var t = i3;
    try {
      for (U3(n), u = a(s); u !== null && (!(u.expirationTime > n) || e && !r.unstable_shouldYield()); ) {
        var l2 = u.callback;
        if (typeof l2 == "function") {
          u.callback = null, i3 = u.priorityLevel;
          var o = l2(u.expirationTime <= n);
          n = r.unstable_now(), typeof o == "function" ? u.callback = o : u === a(s) && I2(s), U3(n);
        } else I2(s);
        u = a(s);
      }
      if (u !== null) var f = true;
      else {
        var b = a(c);
        b !== null && h3(W3, b.startTime - n), f = false;
      }
      return f;
    } finally {
      u = null, i3 = t, M2 = false;
    }
  }
  var le3 = R;
  r.unstable_IdlePriority = 5;
  r.unstable_ImmediatePriority = 1;
  r.unstable_LowPriority = 4;
  r.unstable_NormalPriority = 3;
  r.unstable_Profiling = null;
  r.unstable_UserBlockingPriority = 2;
  r.unstable_cancelCallback = function(e) {
    e.callback = null;
  };
  r.unstable_continueExecution = function() {
    p || M2 || (p = true, y2(O2));
  };
  r.unstable_getCurrentPriorityLevel = function() {
    return i3;
  };
  r.unstable_getFirstCallbackNode = function() {
    return a(s);
  };
  r.unstable_next = function(e) {
    switch (i3) {
      case 1:
      case 2:
      case 3:
        var n = 3;
        break;
      default:
        n = i3;
    }
    var t = i3;
    i3 = n;
    try {
      return e();
    } finally {
      i3 = t;
    }
  };
  r.unstable_pauseExecution = function() {
  };
  r.unstable_requestPaint = le3;
  r.unstable_runWithPriority = function(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var t = i3;
    i3 = e;
    try {
      return n();
    } finally {
      i3 = t;
    }
  };
  r.unstable_scheduleCallback = function(e, n, t) {
    var l2 = r.unstable_now();
    switch (typeof t == "object" && t !== null ? (t = t.delay, t = typeof t == "number" && 0 < t ? l2 + t : l2) : t = l2, e) {
      case 1:
        var o = -1;
        break;
      case 2:
        o = 250;
        break;
      case 5:
        o = 1073741823;
        break;
      case 4:
        o = 1e4;
        break;
      default:
        o = 5e3;
    }
    return o = t + o, e = {
      id: re2++,
      callback: n,
      priorityLevel: e,
      startTime: t,
      expirationTime: o,
      sortIndex: -1
    }, t > l2 ? (e.sortIndex = t, Y3(c, e), a(s) === null && e === a(c) && (k2 ? T3() : k2 = true, h3(W3, t - l2))) : (e.sortIndex = o, Y3(s, e), p || M2 || (p = true, y2(O2))), e;
  };
  r.unstable_wrapCallback = function(e) {
    var n = i3;
    return function() {
      var t = i3;
      i3 = n;
      try {
        return e.apply(this, arguments);
      } finally {
        i3 = t;
      }
    };
  };
});
var A = H2((ue2, $2) => {
  "use strict";
  $2.exports = Z2();
});
var j2 = te(A());
var { unstable_now: ae2, unstable_shouldYield: se2, unstable_IdlePriority: ce2, unstable_ImmediatePriority: fe2, unstable_LowPriority: be, unstable_NormalPriority: pe2, unstable_Profiling: de2, unstable_UserBlockingPriority: _e2, unstable_cancelCallback: ye2, unstable_continueExecution: ve2, unstable_getCurrentPriorityLevel: me2, unstable_getFirstCallbackNode: we2, unstable_next: he2, unstable_pauseExecution: ke2, unstable_requestPaint: ge2, unstable_runWithPriority: Pe2, unstable_scheduleCallback: xe2, unstable_wrapCallback: Te } = j2;
var Ie2 = j2.default ?? j2;

// deno:https://esm.sh/react-dom@17.0.2/denonext/react-dom.mjs
var __1$ = /* @__PURE__ */ (() => {
  var e = Object.assign;
  return {
    default: e
  };
})();
var require3 = (n) => {
  const e = (m) => typeof m.default < "u" ? m.default : m, c = (m) => Object.assign({
    __esModule: true
  }, m);
  switch (n) {
    case "react":
      return e(react_exports);
    case "npm:object-assign":
      return e(__1$);
    case "scheduler":
      return e(scheduler_0_20_exports);
    default:
      console.error('module "' + n + '" not found');
      return null;
  }
};
var _s = Object.create;
var Mi = Object.defineProperty;
var Ns = Object.getOwnPropertyDescriptor;
var Ps = Object.getOwnPropertyNames;
var Ts = Object.getPrototypeOf;
var Ls = Object.prototype.hasOwnProperty;
var Mr = ((e) => typeof require3 < "u" ? require3 : typeof Proxy < "u" ? new Proxy(e, {
  get: (n, t) => (typeof require3 < "u" ? require3 : n)[t]
}) : e)(function(e) {
  if (typeof require3 < "u") return require3.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var Ri = (e, n) => () => (n || e((n = {
  exports: {}
}).exports, n), n.exports);
var zs = (e, n, t, r) => {
  if (n && typeof n == "object" || typeof n == "function") for (let l2 of Ps(n)) !Ls.call(e, l2) && l2 !== t && Mi(e, l2, {
    get: () => n[l2],
    enumerable: !(r = Ns(n, l2)) || r.enumerable
  });
  return e;
};
var Os = (e, n, t) => (t = e != null ? _s(Ts(e)) : {}, zs(n || !e || !e.__esModule ? Mi(t, "default", {
  value: e,
  enumerable: true
}) : t, e));
var Ss = Ri((ie2) => {
  "use strict";
  var yr2 = Mr("react"), M2 = Mr("npm:object-assign"), U3 = Mr("scheduler");
  function v2(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  if (!yr2) throw Error(v2(227));
  var Xo2 = /* @__PURE__ */ new Set(), ot2 = {};
  function Je2(e, n) {
    kn2(e, n), kn2(e + "Capture", n);
  }
  function kn2(e, n) {
    for (ot2[e] = n, e = 0; e < n.length; e++) Xo2.add(n[e]);
  }
  var we4 = !(typeof globalThis > "u" || typeof globalThis.document > "u" || typeof globalThis.document.createElement > "u"), Ms2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Di2 = Object.prototype.hasOwnProperty, Ii2 = {}, Fi2 = {};
  function Rs2(e) {
    return Di2.call(Fi2, e) ? true : Di2.call(Ii2, e) ? false : Ms2.test(e) ? Fi2[e] = true : (Ii2[e] = true, false);
  }
  function Ds2(e, n, t, r) {
    if (t !== null && t.type === 0) return false;
    switch (typeof n) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return r ? false : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return false;
    }
  }
  function Is2(e, n, t, r) {
    if (n === null || typeof n > "u" || Ds2(e, n, t, r)) return true;
    if (r) return false;
    if (t !== null) switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === false;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
    return false;
  }
  function X4(e, n, t, r, l2, i3, o) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l2, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = i3, this.removeEmptyString = o;
  }
  var H4 = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    H4[e] = new X4(e, 0, false, e, null, false, false);
  });
  [
    [
      "acceptCharset",
      "accept-charset"
    ],
    [
      "className",
      "class"
    ],
    [
      "htmlFor",
      "for"
    ],
    [
      "httpEquiv",
      "http-equiv"
    ]
  ].forEach(function(e) {
    var n = e[0];
    H4[n] = new X4(n, 1, false, e[1], null, false, false);
  });
  [
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
  ].forEach(function(e) {
    H4[e] = new X4(e, 2, false, e.toLowerCase(), null, false, false);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
  ].forEach(function(e) {
    H4[e] = new X4(e, 2, false, e, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    H4[e] = new X4(e, 3, false, e.toLowerCase(), null, false, false);
  });
  [
    "checked",
    "multiple",
    "muted",
    "selected"
  ].forEach(function(e) {
    H4[e] = new X4(e, 3, true, e, null, false, false);
  });
  [
    "capture",
    "download"
  ].forEach(function(e) {
    H4[e] = new X4(e, 4, false, e, null, false, false);
  });
  [
    "cols",
    "rows",
    "size",
    "span"
  ].forEach(function(e) {
    H4[e] = new X4(e, 6, false, e, null, false, false);
  });
  [
    "rowSpan",
    "start"
  ].forEach(function(e) {
    H4[e] = new X4(e, 5, false, e.toLowerCase(), null, false, false);
  });
  var Hl2 = /[\-:]([a-z])/g;
  function Wl2(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(Hl2, Wl2);
    H4[n] = new X4(n, 1, false, e, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(Hl2, Wl2);
    H4[n] = new X4(n, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  });
  [
    "xml:base",
    "xml:lang",
    "xml:space"
  ].forEach(function(e) {
    var n = e.replace(Hl2, Wl2);
    H4[n] = new X4(n, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  [
    "tabIndex",
    "crossOrigin"
  ].forEach(function(e) {
    H4[e] = new X4(e, 1, false, e.toLowerCase(), null, false, false);
  });
  H4.xlinkHref = new X4("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  [
    "src",
    "href",
    "action",
    "formAction"
  ].forEach(function(e) {
    H4[e] = new X4(e, 1, false, e.toLowerCase(), null, true, true);
  });
  function Al2(e, n, t, r) {
    var l2 = H4.hasOwnProperty(n) ? H4[n] : null, i3 = l2 !== null ? l2.type === 0 : r ? false : !(!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N");
    i3 || (Is2(n, t, l2, r) && (t = null), r || l2 === null ? Rs2(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l2.mustUseProperty ? e[l2.propertyName] = t === null ? l2.type === 3 ? false : "" : t : (n = l2.attributeName, r = l2.attributeNamespace, t === null ? e.removeAttribute(n) : (l2 = l2.type, t = l2 === 3 || l2 === 4 && t === true ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var qe3 = yr2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, An2 = 60103, We2 = 60106, ke4 = 60107, Ql2 = 60108, Kn2 = 60114, $l2 = 60109, Yl2 = 60110, gr2 = 60112, Gn2 = 60113, Kt2 = 60120, wr2 = 60115, Xl2 = 60116, Kl2 = 60121, Gl2 = 60128, Ko2 = 60129, Zl2 = 60130, nl2 = 60131;
  typeof Symbol == "function" && Symbol.for && (F2 = Symbol.for, An2 = F2("react.element"), We2 = F2("react.portal"), ke4 = F2("react.fragment"), Ql2 = F2("react.strict_mode"), Kn2 = F2("react.profiler"), $l2 = F2("react.provider"), Yl2 = F2("react.context"), gr2 = F2("react.forward_ref"), Gn2 = F2("react.suspense"), Kt2 = F2("react.suspense_list"), wr2 = F2("react.memo"), Xl2 = F2("react.lazy"), Kl2 = F2("react.block"), F2("react.scope"), Gl2 = F2("react.opaque.id"), Ko2 = F2("react.debug_trace_mode"), Zl2 = F2("react.offscreen"), nl2 = F2("react.legacy_hidden"));
  var F2, ji2 = typeof Symbol == "function" && Symbol.iterator;
  function On2(e) {
    return e === null || typeof e != "object" ? null : (e = ji2 && e[ji2] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Rr2;
  function Qn2(e) {
    if (Rr2 === void 0) try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      Rr2 = n && n[1] || "";
    }
    return `
` + Rr2 + e;
  }
  var Dr2 = false;
  function _t2(e, n) {
    if (!e || Dr2) return "";
    Dr2 = true;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n) if (n = function() {
        throw Error();
      }, Object.defineProperty(n.prototype, "props", {
        set: function() {
          throw Error();
        }
      }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(n, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (s) {
          r = s;
        }
        e.call(n.prototype);
      }
      else {
        try {
          throw Error();
        } catch (s) {
          r = s;
        }
        e();
      }
    } catch (s) {
      if (s && r && typeof s.stack == "string") {
        for (var l2 = s.stack.split(`
`), i3 = r.stack.split(`
`), o = l2.length - 1, u = i3.length - 1; 1 <= o && 0 <= u && l2[o] !== i3[u]; ) u--;
        for (; 1 <= o && 0 <= u; o--, u--) if (l2[o] !== i3[u]) {
          if (o !== 1 || u !== 1) do
            if (o--, u--, 0 > u || l2[o] !== i3[u]) return `
` + l2[o].replace(" at new ", " at ");
          while (1 <= o && 0 <= u);
          break;
        }
      }
    } finally {
      Dr2 = false, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? Qn2(e) : "";
  }
  function Fs2(e) {
    switch (e.tag) {
      case 5:
        return Qn2(e.type);
      case 16:
        return Qn2("Lazy");
      case 13:
        return Qn2("Suspense");
      case 19:
        return Qn2("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = _t2(e.type, false), e;
      case 11:
        return e = _t2(e.type.render, false), e;
      case 22:
        return e = _t2(e.type._render, false), e;
      case 1:
        return e = _t2(e.type, true), e;
      default:
        return "";
    }
  }
  function dn2(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ke4:
        return "Fragment";
      case We2:
        return "Portal";
      case Kn2:
        return "Profiler";
      case Ql2:
        return "StrictMode";
      case Gn2:
        return "Suspense";
      case Kt2:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Yl2:
        return (e.displayName || "Context") + ".Consumer";
      case $l2:
        return (e._context.displayName || "Context") + ".Provider";
      case gr2:
        var n = e.render;
        return n = n.displayName || n.name || "", e.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case wr2:
        return dn2(e.type);
      case Kl2:
        return dn2(e._render);
      case Xl2:
        n = e._payload, e = e._init;
        try {
          return dn2(e(n));
        } catch {
        }
    }
    return null;
  }
  function De2(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return e;
      default:
        return "";
    }
  }
  function Go2(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function js2(e) {
    var n = Go2(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l2 = t.get, i3 = t.set;
      return Object.defineProperty(e, n, {
        configurable: true,
        get: function() {
          return l2.call(this);
        },
        set: function(o) {
          r = "" + o, i3.call(this, o);
        }
      }), Object.defineProperty(e, n, {
        enumerable: t.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(o) {
          r = "" + o;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function Nt2(e) {
    e._valueTracker || (e._valueTracker = js2(e));
  }
  function Zo2(e) {
    if (!e) return false;
    var n = e._valueTracker;
    if (!n) return true;
    var t = n.getValue(), r = "";
    return e && (r = Go2(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), true) : false;
  }
  function Gt2(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function tl2(e, n) {
    var t = n.checked;
    return M2({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: t ?? e._wrapperState.initialChecked
    });
  }
  function Ui2(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = De2(n.value != null ? n.value : t), e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
    };
  }
  function Jo2(e, n) {
    n = n.checked, n != null && Al2(e, "checked", n, false);
  }
  function rl2(e, n) {
    Jo2(e, n);
    var t = De2(n.value), r = n.type;
    if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? ll2(e, n.type, t) : n.hasOwnProperty("defaultValue") && ll2(e, n.type, De2(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function Vi2(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function ll2(e, n, t) {
    (n !== "number" || Gt2(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  function Us2(e) {
    var n = "";
    return yr2.Children.forEach(e, function(t) {
      t != null && (n += t);
    }), n;
  }
  function il2(e, n) {
    return e = M2({
      children: void 0
    }, n), (n = Us2(n.children)) && (e.children = n), e;
  }
  function pn2(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var l2 = 0; l2 < t.length; l2++) n["$" + t[l2]] = true;
      for (t = 0; t < e.length; t++) l2 = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l2 && (e[t].selected = l2), l2 && r && (e[t].defaultSelected = true);
    } else {
      for (t = "" + De2(t), n = null, l2 = 0; l2 < e.length; l2++) {
        if (e[l2].value === t) {
          e[l2].selected = true, r && (e[l2].defaultSelected = true);
          return;
        }
        n !== null || e[l2].disabled || (n = e[l2]);
      }
      n !== null && (n.selected = true);
    }
  }
  function ol2(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(v2(91));
    return M2({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue
    });
  }
  function Bi2(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null) throw Error(v2(92));
        if (Array.isArray(t)) {
          if (!(1 >= t.length)) throw Error(v2(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = {
      initialValue: De2(t)
    };
  }
  function qo2(e, n) {
    var t = De2(n.value), r = De2(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function Hi2(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  var ul2 = {
    html: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
    svg: "http://www.w3.org/2000/svg"
  };
  function bo2(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function sl2(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? bo2(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Pt2, eu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l2) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, r, l2);
      });
    } : e;
  }(function(e, n) {
    if (e.namespaceURI !== ul2.svg || "innerHTML" in e) e.innerHTML = n;
    else {
      for (Pt2 = Pt2 || document.createElement("div"), Pt2.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Pt2.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
  function ut2(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Zn2 = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, Vs2 = [
    "Webkit",
    "ms",
    "Moz",
    "O"
  ];
  Object.keys(Zn2).forEach(function(e) {
    Vs2.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), Zn2[n] = Zn2[e];
    });
  });
  function nu(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Zn2.hasOwnProperty(e) && Zn2[e] ? ("" + n).trim() : n + "px";
  }
  function tu(e, n) {
    e = e.style;
    for (var t in n) if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0, l2 = nu(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l2) : e[t] = l2;
    }
  }
  var Bs2 = M2({
    menuitem: true
  }, {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  });
  function al2(e, n) {
    if (n) {
      if (Bs2[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(v2(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(v2(60));
        if (!(typeof n.dangerouslySetInnerHTML == "object" && "__html" in n.dangerouslySetInnerHTML)) throw Error(v2(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(v2(62));
    }
  }
  function fl2(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  function Jl2(e) {
    return e = e.target || e.srcElement || globalThis, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var cl2 = null, mn2 = null, hn2 = null;
  function Wi2(e) {
    if (e = Et2(e)) {
      if (typeof cl2 != "function") throw Error(v2(280));
      var n = e.stateNode;
      n && (n = _r2(n), cl2(e.stateNode, e.type, n));
    }
  }
  function ru(e) {
    mn2 ? hn2 ? hn2.push(e) : hn2 = [
      e
    ] : mn2 = e;
  }
  function lu() {
    if (mn2) {
      var e = mn2, n = hn2;
      if (hn2 = mn2 = null, Wi2(e), n) for (e = 0; e < n.length; e++) Wi2(n[e]);
    }
  }
  function ql2(e, n) {
    return e(n);
  }
  function iu(e, n, t, r, l2) {
    return e(n, t, r, l2);
  }
  function bl2() {
  }
  var ou = ql2, Ae3 = false, Ir2 = false;
  function ei2() {
    (mn2 !== null || hn2 !== null) && (bl2(), lu());
  }
  function Hs2(e, n, t) {
    if (Ir2) return e(n, t);
    Ir2 = true;
    try {
      return ou(e, n, t);
    } finally {
      Ir2 = false, ei2();
    }
  }
  function st2(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = _r2(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(v2(231, n, typeof t));
    return t;
  }
  var dl2 = false;
  if (we4) try {
    nn2 = {}, Object.defineProperty(nn2, "passive", {
      get: function() {
        dl2 = true;
      }
    }), globalThis.addEventListener("test", nn2, nn2), globalThis.removeEventListener("test", nn2, nn2);
  } catch {
    dl2 = false;
  }
  var nn2;
  function Ws2(e, n, t, r, l2, i3, o, u, s) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, d);
    } catch (y2) {
      this.onError(y2);
    }
  }
  var Jn2 = false, Zt2 = null, Jt2 = false, pl2 = null, As2 = {
    onError: function(e) {
      Jn2 = true, Zt2 = e;
    }
  };
  function Qs2(e, n, t, r, l2, i3, o, u, s) {
    Jn2 = false, Zt2 = null, Ws2.apply(As2, arguments);
  }
  function $s2(e, n, t, r, l2, i3, o, u, s) {
    if (Qs2.apply(this, arguments), Jn2) {
      if (Jn2) {
        var d = Zt2;
        Jn2 = false, Zt2 = null;
      } else throw Error(v2(198));
      Jt2 || (Jt2 = true, pl2 = d);
    }
  }
  function be3(e) {
    var n = e, t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, (n.flags & 1026) !== 0 && (t = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function uu(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function Ai2(e) {
    if (be3(e) !== e) throw Error(v2(188));
  }
  function Ys2(e) {
    var n = e.alternate;
    if (!n) {
      if (n = be3(e), n === null) throw Error(v2(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l2 = t.return;
      if (l2 === null) break;
      var i3 = l2.alternate;
      if (i3 === null) {
        if (r = l2.return, r !== null) {
          t = r;
          continue;
        }
        break;
      }
      if (l2.child === i3.child) {
        for (i3 = l2.child; i3; ) {
          if (i3 === t) return Ai2(l2), e;
          if (i3 === r) return Ai2(l2), n;
          i3 = i3.sibling;
        }
        throw Error(v2(188));
      }
      if (t.return !== r.return) t = l2, r = i3;
      else {
        for (var o = false, u = l2.child; u; ) {
          if (u === t) {
            o = true, t = l2, r = i3;
            break;
          }
          if (u === r) {
            o = true, r = l2, t = i3;
            break;
          }
          u = u.sibling;
        }
        if (!o) {
          for (u = i3.child; u; ) {
            if (u === t) {
              o = true, t = i3, r = l2;
              break;
            }
            if (u === r) {
              o = true, r = i3, t = l2;
              break;
            }
            u = u.sibling;
          }
          if (!o) throw Error(v2(189));
        }
      }
      if (t.alternate !== r) throw Error(v2(190));
    }
    if (t.tag !== 3) throw Error(v2(188));
    return t.stateNode.current === t ? e : n;
  }
  function su(e) {
    if (e = Ys2(e), !e) return null;
    for (var n = e; ; ) {
      if (n.tag === 5 || n.tag === 6) return n;
      if (n.child) n.child.return = n, n = n.child;
      else {
        if (n === e) break;
        for (; !n.sibling; ) {
          if (!n.return || n.return === e) return null;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return null;
  }
  function Qi2(e, n) {
    for (var t = e.alternate; n !== null; ) {
      if (n === e || n === t) return true;
      n = n.return;
    }
    return false;
  }
  var au, ni2, fu, cu, ml2 = false, se4 = [], Ne2 = null, Pe4 = null, Te3 = null, at2 = /* @__PURE__ */ new Map(), ft2 = /* @__PURE__ */ new Map(), Mn2 = [], $i2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function hl2(e, n, t, r, l2) {
    return {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: t | 16,
      nativeEvent: l2,
      targetContainers: [
        r
      ]
    };
  }
  function Yi2(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ne2 = null;
        break;
      case "dragenter":
      case "dragleave":
        Pe4 = null;
        break;
      case "mouseover":
      case "mouseout":
        Te3 = null;
        break;
      case "pointerover":
      case "pointerout":
        at2.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ft2.delete(n.pointerId);
    }
  }
  function Rn2(e, n, t, r, l2, i3) {
    return e === null || e.nativeEvent !== i3 ? (e = hl2(n, t, r, l2, i3), n !== null && (n = Et2(n), n !== null && ni2(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l2 !== null && n.indexOf(l2) === -1 && n.push(l2), e);
  }
  function Xs2(e, n, t, r, l2) {
    switch (n) {
      case "focusin":
        return Ne2 = Rn2(Ne2, e, n, t, r, l2), true;
      case "dragenter":
        return Pe4 = Rn2(Pe4, e, n, t, r, l2), true;
      case "mouseover":
        return Te3 = Rn2(Te3, e, n, t, r, l2), true;
      case "pointerover":
        var i3 = l2.pointerId;
        return at2.set(i3, Rn2(at2.get(i3) || null, e, n, t, r, l2)), true;
      case "gotpointercapture":
        return i3 = l2.pointerId, ft2.set(i3, Rn2(ft2.get(i3) || null, e, n, t, r, l2)), true;
    }
    return false;
  }
  function Ks2(e) {
    var n = Qe2(e.target);
    if (n !== null) {
      var t = be3(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = uu(t), n !== null) {
            e.blockedOn = n, cu(e.lanePriority, function() {
              U3.unstable_runWithPriority(e.priority, function() {
                fu(t);
              });
            });
            return;
          }
        } else if (n === 3 && t.stateNode.hydrate) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ut2(e) {
    if (e.blockedOn !== null) return false;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = ii2(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t !== null) return n = Et2(t), n !== null && ni2(n), e.blockedOn = t, false;
      n.shift();
    }
    return true;
  }
  function Xi2(e, n, t) {
    Ut2(e) && t.delete(n);
  }
  function Gs2() {
    for (ml2 = false; 0 < se4.length; ) {
      var e = se4[0];
      if (e.blockedOn !== null) {
        e = Et2(e.blockedOn), e !== null && au(e);
        break;
      }
      for (var n = e.targetContainers; 0 < n.length; ) {
        var t = ii2(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
        if (t !== null) {
          e.blockedOn = t;
          break;
        }
        n.shift();
      }
      e.blockedOn === null && se4.shift();
    }
    Ne2 !== null && Ut2(Ne2) && (Ne2 = null), Pe4 !== null && Ut2(Pe4) && (Pe4 = null), Te3 !== null && Ut2(Te3) && (Te3 = null), at2.forEach(Xi2), ft2.forEach(Xi2);
  }
  function Dn2(e, n) {
    e.blockedOn === n && (e.blockedOn = null, ml2 || (ml2 = true, U3.unstable_scheduleCallback(U3.unstable_NormalPriority, Gs2)));
  }
  function du(e) {
    function n(l2) {
      return Dn2(l2, e);
    }
    if (0 < se4.length) {
      Dn2(se4[0], e);
      for (var t = 1; t < se4.length; t++) {
        var r = se4[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Ne2 !== null && Dn2(Ne2, e), Pe4 !== null && Dn2(Pe4, e), Te3 !== null && Dn2(Te3, e), at2.forEach(n), ft2.forEach(n), t = 0; t < Mn2.length; t++) r = Mn2[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Mn2.length && (t = Mn2[0], t.blockedOn === null); ) Ks2(t), t.blockedOn === null && Mn2.shift();
  }
  function Tt2(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var on2 = {
    animationend: Tt2("Animation", "AnimationEnd"),
    animationiteration: Tt2("Animation", "AnimationIteration"),
    animationstart: Tt2("Animation", "AnimationStart"),
    transitionend: Tt2("Transition", "TransitionEnd")
  }, Fr2 = {}, pu = {};
  we4 && (pu = document.createElement("div").style, "AnimationEvent" in globalThis || (delete on2.animationend.animation, delete on2.animationiteration.animation, delete on2.animationstart.animation), "TransitionEvent" in globalThis || delete on2.transitionend.transition);
  function Sr2(e) {
    if (Fr2[e]) return Fr2[e];
    if (!on2[e]) return e;
    var n = on2[e], t;
    for (t in n) if (n.hasOwnProperty(t) && t in pu) return Fr2[e] = n[t];
    return e;
  }
  var mu = Sr2("animationend"), hu = Sr2("animationiteration"), vu = Sr2("animationstart"), yu = Sr2("transitionend"), gu = /* @__PURE__ */ new Map(), ti2 = /* @__PURE__ */ new Map(), Zs2 = [
    "abort",
    "abort",
    mu,
    "animationEnd",
    hu,
    "animationIteration",
    vu,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    yu,
    "transitionEnd",
    "waiting",
    "waiting"
  ];
  function ri2(e, n) {
    for (var t = 0; t < e.length; t += 2) {
      var r = e[t], l2 = e[t + 1];
      l2 = "on" + (l2[0].toUpperCase() + l2.slice(1)), ti2.set(r, n), gu.set(r, l2), Je2(l2, [
        r
      ]);
    }
  }
  var Js2 = U3.unstable_now;
  Js2();
  var L = 8;
  function rn2(e) {
    if ((1 & e) !== 0) return L = 15, 1;
    if ((2 & e) !== 0) return L = 14, 2;
    if ((4 & e) !== 0) return L = 13, 4;
    var n = 24 & e;
    return n !== 0 ? (L = 12, n) : (e & 32) !== 0 ? (L = 11, 32) : (n = 192 & e, n !== 0 ? (L = 10, n) : (e & 256) !== 0 ? (L = 9, 256) : (n = 3584 & e, n !== 0 ? (L = 8, n) : (e & 4096) !== 0 ? (L = 7, 4096) : (n = 4186112 & e, n !== 0 ? (L = 6, n) : (n = 62914560 & e, n !== 0 ? (L = 5, n) : e & 67108864 ? (L = 4, 67108864) : (e & 134217728) !== 0 ? (L = 3, 134217728) : (n = 805306368 & e, n !== 0 ? (L = 2, n) : (1073741824 & e) !== 0 ? (L = 1, 1073741824) : (L = 8, e))))));
  }
  function qs2(e) {
    switch (e) {
      case 99:
        return 15;
      case 98:
        return 10;
      case 97:
      case 96:
        return 8;
      case 95:
        return 2;
      default:
        return 0;
    }
  }
  function bs2(e) {
    switch (e) {
      case 15:
      case 14:
        return 99;
      case 13:
      case 12:
      case 11:
      case 10:
        return 98;
      case 9:
      case 8:
      case 7:
      case 6:
      case 4:
      case 5:
        return 97;
      case 3:
      case 2:
      case 1:
        return 95;
      case 0:
        return 90;
      default:
        throw Error(v2(358, e));
    }
  }
  function ct2(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return L = 0;
    var r = 0, l2 = 0, i3 = e.expiredLanes, o = e.suspendedLanes, u = e.pingedLanes;
    if (i3 !== 0) r = i3, l2 = L = 15;
    else if (i3 = t & 134217727, i3 !== 0) {
      var s = i3 & ~o;
      s !== 0 ? (r = rn2(s), l2 = L) : (u &= i3, u !== 0 && (r = rn2(u), l2 = L));
    } else i3 = t & ~o, i3 !== 0 ? (r = rn2(i3), l2 = L) : u !== 0 && (r = rn2(u), l2 = L);
    if (r === 0) return 0;
    if (r = 31 - Ie4(r), r = t & ((0 > r ? 0 : 1 << r) << 1) - 1, n !== 0 && n !== r && (n & o) === 0) {
      if (rn2(n), l2 <= L) return n;
      L = l2;
    }
    if (n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - Ie4(n), l2 = 1 << t, r |= e[t], n &= ~l2;
    return r;
  }
  function wu(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function qt2(e, n) {
    switch (e) {
      case 15:
        return 1;
      case 14:
        return 2;
      case 12:
        return e = ln2(24 & ~n), e === 0 ? qt2(10, n) : e;
      case 10:
        return e = ln2(192 & ~n), e === 0 ? qt2(8, n) : e;
      case 8:
        return e = ln2(3584 & ~n), e === 0 && (e = ln2(4186112 & ~n), e === 0 && (e = 512)), e;
      case 2:
        return n = ln2(805306368 & ~n), n === 0 && (n = 268435456), n;
    }
    throw Error(v2(358, e));
  }
  function ln2(e) {
    return e & -e;
  }
  function jr2(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function Er2(e, n, t) {
    e.pendingLanes |= n;
    var r = n - 1;
    e.suspendedLanes &= r, e.pingedLanes &= r, e = e.eventTimes, n = 31 - Ie4(n), e[n] = t;
  }
  var Ie4 = Math.clz32 ? Math.clz32 : ta2, ea2 = Math.log, na2 = Math.LN2;
  function ta2(e) {
    return e === 0 ? 32 : 31 - (ea2(e) / na2 | 0) | 0;
  }
  var ra2 = U3.unstable_UserBlockingPriority, la2 = U3.unstable_runWithPriority, Vt = true;
  function ia2(e, n, t, r) {
    Ae3 || bl2();
    var l2 = li2, i3 = Ae3;
    Ae3 = true;
    try {
      iu(l2, e, n, t, r);
    } finally {
      (Ae3 = i3) || ei2();
    }
  }
  function oa2(e, n, t, r) {
    la2(ra2, li2.bind(null, e, n, t, r));
  }
  function li2(e, n, t, r) {
    if (Vt) {
      var l2;
      if ((l2 = (n & 4) === 0) && 0 < se4.length && -1 < $i2.indexOf(e)) e = hl2(null, e, n, t, r), se4.push(e);
      else {
        var i3 = ii2(e, n, t, r);
        if (i3 === null) l2 && Yi2(e, r);
        else {
          if (l2) {
            if (-1 < $i2.indexOf(e)) {
              e = hl2(i3, e, n, t, r), se4.push(e);
              return;
            }
            if (Xs2(i3, e, n, t, r)) return;
            Yi2(e, r);
          }
          Mu(e, n, r, null, t);
        }
      }
    }
  }
  function ii2(e, n, t, r) {
    var l2 = Jl2(r);
    if (l2 = Qe2(l2), l2 !== null) {
      var i3 = be3(l2);
      if (i3 === null) l2 = null;
      else {
        var o = i3.tag;
        if (o === 13) {
          if (l2 = uu(i3), l2 !== null) return l2;
          l2 = null;
        } else if (o === 3) {
          if (i3.stateNode.hydrate) return i3.tag === 3 ? i3.stateNode.containerInfo : null;
          l2 = null;
        } else i3 !== l2 && (l2 = null);
      }
    }
    return Mu(e, n, r, l2, t), null;
  }
  var xe4 = null, oi2 = null, Bt = null;
  function Su() {
    if (Bt) return Bt;
    var e, n = oi2, t = n.length, r, l2 = "value" in xe4 ? xe4.value : xe4.textContent, i3 = l2.length;
    for (e = 0; e < t && n[e] === l2[e]; e++) ;
    var o = t - e;
    for (r = 1; r <= o && n[t - r] === l2[i3 - r]; r++) ;
    return Bt = l2.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ht2(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Lt2() {
    return true;
  }
  function Ki2() {
    return false;
  }
  function b(e) {
    function n(t, r, l2, i3, o) {
      this._reactName = t, this._targetInst = l2, this.type = r, this.nativeEvent = i3, this.target = o, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(i3) : i3[u]);
      return this.isDefaultPrevented = (i3.defaultPrevented != null ? i3.defaultPrevented : i3.returnValue === false) ? Lt2 : Ki2, this.isPropagationStopped = Ki2, this;
    }
    return M2(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var t = this.nativeEvent;
        t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = false), this.isDefaultPrevented = Lt2);
      },
      stopPropagation: function() {
        var t = this.nativeEvent;
        t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = true), this.isPropagationStopped = Lt2);
      },
      persist: function() {
      },
      isPersistent: Lt2
    }), n;
  }
  var Nn2 = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ui2 = b(Nn2), St2 = M2({}, Nn2, {
    view: 0,
    detail: 0
  }), ua2 = b(St2), Ur2, Vr2, In2, kr2 = M2({}, St2, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: si2,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== In2 && (In2 && e.type === "mousemove" ? (Ur2 = e.screenX - In2.screenX, Vr2 = e.screenY - In2.screenY) : Vr2 = Ur2 = 0, In2 = e), Ur2);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Vr2;
    }
  }), Gi2 = b(kr2), sa2 = M2({}, kr2, {
    dataTransfer: 0
  }), aa2 = b(sa2), fa2 = M2({}, St2, {
    relatedTarget: 0
  }), Br2 = b(fa2), ca2 = M2({}, Nn2, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), da2 = b(ca2), pa2 = M2({}, Nn2, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : globalThis.clipboardData;
    }
  }), ma2 = b(pa2), ha2 = M2({}, Nn2, {
    data: 0
  }), Zi2 = b(ha2), va2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, ya2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ga2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function wa2(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = ga2[e]) ? !!n[e] : false;
  }
  function si2() {
    return wa2;
  }
  var Sa2 = M2({}, St2, {
    key: function(e) {
      if (e.key) {
        var n = va2[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = Ht2(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ya2[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: si2,
    charCode: function(e) {
      return e.type === "keypress" ? Ht2(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ht2(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Ea2 = b(Sa2), ka2 = M2({}, kr2, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Ji2 = b(ka2), xa2 = M2({}, St2, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: si2
  }), Ca2 = b(xa2), _a2 = M2({}, Nn2, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Na2 = b(_a2), Pa2 = M2({}, kr2, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ta2 = b(Pa2), La2 = [
    9,
    13,
    27,
    32
  ], ai2 = we4 && "CompositionEvent" in globalThis, qn2 = null;
  we4 && "documentMode" in document && (qn2 = document.documentMode);
  var za2 = we4 && "TextEvent" in globalThis && !qn2, Eu = we4 && (!ai2 || qn2 && 8 < qn2 && 11 >= qn2), qi2 = " ", bi = false;
  function ku(e, n) {
    switch (e) {
      case "keyup":
        return La2.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function xu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var un2 = false;
  function Oa2(e, n) {
    switch (e) {
      case "compositionend":
        return xu(n);
      case "keypress":
        return n.which !== 32 ? null : (bi = true, qi2);
      case "textInput":
        return e = n.data, e === qi2 && bi ? null : e;
      default:
        return null;
    }
  }
  function Ma2(e, n) {
    if (un2) return e === "compositionend" || !ai2 && ku(e, n) ? (e = Su(), Bt = oi2 = xe4 = null, un2 = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Eu && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Ra2 = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function eo2(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Ra2[e.type] : n === "textarea";
  }
  function Cu(e, n, t, r) {
    ru(r), n = bt2(n, "onChange"), 0 < n.length && (t = new ui2("onChange", "change", null, t, r), e.push({
      event: t,
      listeners: n
    }));
  }
  var bn2 = null, dt2 = null;
  function Da2(e) {
    Lu(e, 0);
  }
  function xr2(e) {
    var n = an2(e);
    if (Zo2(n)) return e;
  }
  function Ia2(e, n) {
    if (e === "change") return n;
  }
  var _u = false;
  we4 && (we4 ? (Ot2 = "oninput" in document, Ot2 || (Hr2 = document.createElement("div"), Hr2.setAttribute("oninput", "return;"), Ot2 = typeof Hr2.oninput == "function"), zt2 = Ot2) : zt2 = false, _u = zt2 && (!document.documentMode || 9 < document.documentMode));
  var zt2, Ot2, Hr2;
  function no2() {
    bn2 && (bn2.detachEvent("onpropertychange", Nu), dt2 = bn2 = null);
  }
  function Nu(e) {
    if (e.propertyName === "value" && xr2(dt2)) {
      var n = [];
      if (Cu(n, dt2, e, Jl2(e)), e = Da2, Ae3) e(n);
      else {
        Ae3 = true;
        try {
          ql2(e, n);
        } finally {
          Ae3 = false, ei2();
        }
      }
    }
  }
  function Fa2(e, n, t) {
    e === "focusin" ? (no2(), bn2 = n, dt2 = t, bn2.attachEvent("onpropertychange", Nu)) : e === "focusout" && no2();
  }
  function ja2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return xr2(dt2);
  }
  function Ua2(e, n) {
    if (e === "click") return xr2(n);
  }
  function Va2(e, n) {
    if (e === "input" || e === "change") return xr2(n);
  }
  function Ba2(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var ee3 = typeof Object.is == "function" ? Object.is : Ba2, Ha2 = Object.prototype.hasOwnProperty;
  function pt2(e, n) {
    if (ee3(e, n)) return true;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return false;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length) return false;
    for (r = 0; r < t.length; r++) if (!Ha2.call(n, t[r]) || !ee3(e[t[r]], n[t[r]])) return false;
    return true;
  }
  function to2(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ro2(e, n) {
    var t = to2(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (r = e + t.textContent.length, e <= n && r >= n) return {
          node: t,
          offset: n - e
        };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = to2(t);
    }
  }
  function Pu(e, n) {
    return e && n ? e === n ? true : e && e.nodeType === 3 ? false : n && n.nodeType === 3 ? Pu(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : false : false;
  }
  function lo2() {
    for (var e = globalThis, n = Gt2(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = false;
      }
      if (t) e = n.contentWindow;
      else break;
      n = Gt2(e.document);
    }
    return n;
  }
  function vl2(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var Wa2 = we4 && "documentMode" in document && 11 >= document.documentMode, sn2 = null, yl2 = null, et2 = null, gl2 = false;
  function io2(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    gl2 || sn2 == null || sn2 !== Gt2(r) || (r = sn2, "selectionStart" in r && vl2(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || globalThis).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), et2 && pt2(et2, r) || (et2 = r, r = bt2(yl2, "onSelect"), 0 < r.length && (n = new ui2("onSelect", "select", null, n, t), e.push({
      event: n,
      listeners: r
    }), n.target = sn2)));
  }
  ri2("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
  ri2("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
  ri2(Zs2, 2);
  for (Wr2 = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Mt2 = 0; Mt2 < Wr2.length; Mt2++) ti2.set(Wr2[Mt2], 0);
  var Wr2, Mt2;
  kn2("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  kn2("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  kn2("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  kn2("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  Je2("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  Je2("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  Je2("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  Je2("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  Je2("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  Je2("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var $n2 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Tu = new Set("cancel close invalid load scroll toggle".split(" ").concat($n2));
  function oo2(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, $s2(r, n, void 0, e), e.currentTarget = null;
  }
  function Lu(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], l2 = r.event;
      r = r.listeners;
      e: {
        var i3 = void 0;
        if (n) for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o], s = u.instance, d = u.currentTarget;
          if (u = u.listener, s !== i3 && l2.isPropagationStopped()) break e;
          oo2(l2, u, d), i3 = s;
        }
        else for (o = 0; o < r.length; o++) {
          if (u = r[o], s = u.instance, d = u.currentTarget, u = u.listener, s !== i3 && l2.isPropagationStopped()) break e;
          oo2(l2, u, d), i3 = s;
        }
      }
    }
    if (Jt2) throw e = pl2, Jt2 = false, pl2 = null, e;
  }
  function z3(e, n) {
    var t = Du(n), r = e + "__bubble";
    t.has(r) || (Ou(n, e, 2, false), t.add(r));
  }
  var uo2 = "_reactListening" + Math.random().toString(36).slice(2);
  function zu(e) {
    e[uo2] || (e[uo2] = true, Xo2.forEach(function(n) {
      Tu.has(n) || so2(n, false, e, null), so2(n, true, e, null);
    }));
  }
  function so2(e, n, t, r) {
    var l2 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, i3 = t;
    if (e === "selectionchange" && t.nodeType !== 9 && (i3 = t.ownerDocument), r !== null && !n && Tu.has(e)) {
      if (e !== "scroll") return;
      l2 |= 2, i3 = r;
    }
    var o = Du(i3), u = e + "__" + (n ? "capture" : "bubble");
    o.has(u) || (n && (l2 |= 4), Ou(i3, e, l2, n), o.add(u));
  }
  function Ou(e, n, t, r) {
    var l2 = ti2.get(n);
    switch (l2 === void 0 ? 2 : l2) {
      case 0:
        l2 = ia2;
        break;
      case 1:
        l2 = oa2;
        break;
      default:
        l2 = li2;
    }
    t = l2.bind(null, n, t, e), l2 = void 0, !dl2 || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l2 = true), r ? l2 !== void 0 ? e.addEventListener(n, t, {
      capture: true,
      passive: l2
    }) : e.addEventListener(n, t, true) : l2 !== void 0 ? e.addEventListener(n, t, {
      passive: l2
    }) : e.addEventListener(n, t, false);
  }
  function Mu(e, n, t, r, l2) {
    var i3 = r;
    if ((n & 1) === 0 && (n & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l2 || u.nodeType === 8 && u.parentNode === l2) break;
        if (o === 4) for (o = r.return; o !== null; ) {
          var s = o.tag;
          if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l2 || s.nodeType === 8 && s.parentNode === l2)) return;
          o = o.return;
        }
        for (; u !== null; ) {
          if (o = Qe2(u), o === null) return;
          if (s = o.tag, s === 5 || s === 6) {
            r = i3 = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
    Hs2(function() {
      var d = i3, y2 = Jl2(t), C2 = [];
      e: {
        var h3 = gu.get(e);
        if (h3 !== void 0) {
          var S2 = ui2, k2 = e;
          switch (e) {
            case "keypress":
              if (Ht2(t) === 0) break e;
            case "keydown":
            case "keyup":
              S2 = Ea2;
              break;
            case "focusin":
              k2 = "focus", S2 = Br2;
              break;
            case "focusout":
              k2 = "blur", S2 = Br2;
              break;
            case "beforeblur":
            case "afterblur":
              S2 = Br2;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S2 = Gi2;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S2 = aa2;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S2 = Ca2;
              break;
            case mu:
            case hu:
            case vu:
              S2 = da2;
              break;
            case yu:
              S2 = Na2;
              break;
            case "scroll":
              S2 = ua2;
              break;
            case "wheel":
              S2 = Ta2;
              break;
            case "copy":
            case "cut":
            case "paste":
              S2 = ma2;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S2 = Ji2;
          }
          var E2 = (n & 4) !== 0, c = !E2 && e === "scroll", a = E2 ? h3 !== null ? h3 + "Capture" : null : h3;
          E2 = [];
          for (var f = d, p; f !== null; ) {
            p = f;
            var m = p.stateNode;
            if (p.tag === 5 && m !== null && (p = m, a !== null && (m = st2(f, a), m != null && E2.push(mt2(f, m, p)))), c) break;
            f = f.return;
          }
          0 < E2.length && (h3 = new S2(h3, k2, null, t, y2), C2.push({
            event: h3,
            listeners: E2
          }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (h3 = e === "mouseover" || e === "pointerover", S2 = e === "mouseout" || e === "pointerout", h3 && (n & 16) === 0 && (k2 = t.relatedTarget || t.fromElement) && (Qe2(k2) || k2[Pn2])) break e;
          if ((S2 || h3) && (h3 = y2.window === y2 ? y2 : (h3 = y2.ownerDocument) ? h3.defaultView || h3.parentWindow : globalThis, S2 ? (k2 = t.relatedTarget || t.toElement, S2 = d, k2 = k2 ? Qe2(k2) : null, k2 !== null && (c = be3(k2), k2 !== c || k2.tag !== 5 && k2.tag !== 6) && (k2 = null)) : (S2 = null, k2 = d), S2 !== k2)) {
            if (E2 = Gi2, m = "onMouseLeave", a = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (E2 = Ji2, m = "onPointerLeave", a = "onPointerEnter", f = "pointer"), c = S2 == null ? h3 : an2(S2), p = k2 == null ? h3 : an2(k2), h3 = new E2(m, f + "leave", S2, t, y2), h3.target = c, h3.relatedTarget = p, m = null, Qe2(y2) === d && (E2 = new E2(a, f + "enter", k2, t, y2), E2.target = p, E2.relatedTarget = c, m = E2), c = m, S2 && k2) n: {
              for (E2 = S2, a = k2, f = 0, p = E2; p; p = tn2(p)) f++;
              for (p = 0, m = a; m; m = tn2(m)) p++;
              for (; 0 < f - p; ) E2 = tn2(E2), f--;
              for (; 0 < p - f; ) a = tn2(a), p--;
              for (; f--; ) {
                if (E2 === a || a !== null && E2 === a.alternate) break n;
                E2 = tn2(E2), a = tn2(a);
              }
              E2 = null;
            }
            else E2 = null;
            S2 !== null && ao2(C2, h3, S2, E2, false), k2 !== null && c !== null && ao2(C2, c, k2, E2, true);
          }
        }
        e: {
          if (h3 = d ? an2(d) : globalThis, S2 = h3.nodeName && h3.nodeName.toLowerCase(), S2 === "select" || S2 === "input" && h3.type === "file") var _ = Ia2;
          else if (eo2(h3)) if (_u) _ = Va2;
          else {
            _ = ja2;
            var w = Fa2;
          }
          else (S2 = h3.nodeName) && S2.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (_ = Ua2);
          if (_ && (_ = _(e, d))) {
            Cu(C2, _, t, y2);
            break e;
          }
          w && w(e, h3, d), e === "focusout" && (w = h3._wrapperState) && w.controlled && h3.type === "number" && ll2(h3, "number", h3.value);
        }
        switch (w = d ? an2(d) : globalThis, e) {
          case "focusin":
            (eo2(w) || w.contentEditable === "true") && (sn2 = w, yl2 = d, et2 = null);
            break;
          case "focusout":
            et2 = yl2 = sn2 = null;
            break;
          case "mousedown":
            gl2 = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gl2 = false, io2(C2, t, y2);
            break;
          case "selectionchange":
            if (Wa2) break;
          case "keydown":
          case "keyup":
            io2(C2, t, y2);
        }
        var N3;
        if (ai2) e: {
          switch (e) {
            case "compositionstart":
              var T3 = "onCompositionStart";
              break e;
            case "compositionend":
              T3 = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T3 = "onCompositionUpdate";
              break e;
          }
          T3 = void 0;
        }
        else un2 ? ku(e, t) && (T3 = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (T3 = "onCompositionStart");
        T3 && (Eu && t.locale !== "ko" && (un2 || T3 !== "onCompositionStart" ? T3 === "onCompositionEnd" && un2 && (N3 = Su()) : (xe4 = y2, oi2 = "value" in xe4 ? xe4.value : xe4.textContent, un2 = true)), w = bt2(d, T3), 0 < w.length && (T3 = new Zi2(T3, e, null, t, y2), C2.push({
          event: T3,
          listeners: w
        }), N3 ? T3.data = N3 : (N3 = xu(t), N3 !== null && (T3.data = N3)))), (N3 = za2 ? Oa2(e, t) : Ma2(e, t)) && (d = bt2(d, "onBeforeInput"), 0 < d.length && (y2 = new Zi2("onBeforeInput", "beforeinput", null, t, y2), C2.push({
          event: y2,
          listeners: d
        }), y2.data = N3));
      }
      Lu(C2, n);
    });
  }
  function mt2(e, n, t) {
    return {
      instance: e,
      listener: n,
      currentTarget: t
    };
  }
  function bt2(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l2 = e, i3 = l2.stateNode;
      l2.tag === 5 && i3 !== null && (l2 = i3, i3 = st2(e, t), i3 != null && r.unshift(mt2(e, i3, l2)), i3 = st2(e, n), i3 != null && r.push(mt2(e, i3, l2))), e = e.return;
    }
    return r;
  }
  function tn2(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ao2(e, n, t, r, l2) {
    for (var i3 = n._reactName, o = []; t !== null && t !== r; ) {
      var u = t, s = u.alternate, d = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 && d !== null && (u = d, l2 ? (s = st2(t, i3), s != null && o.unshift(mt2(t, s, u))) : l2 || (s = st2(t, i3), s != null && o.push(mt2(t, s, u)))), t = t.return;
    }
    o.length !== 0 && e.push({
      event: n,
      listeners: o
    });
  }
  function er2() {
  }
  var Ar2 = null, Qr2 = null;
  function Ru(e, n) {
    switch (e) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!n.autoFocus;
    }
    return false;
  }
  function wl2(e, n) {
    return e === "textarea" || e === "option" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var fo2 = typeof setTimeout == "function" ? setTimeout : void 0, Aa2 = typeof clearTimeout == "function" ? clearTimeout : void 0;
  function fi2(e) {
    e.nodeType === 1 ? e.textContent = "" : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = ""));
  }
  function vn2(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
    }
    return e;
  }
  function co2(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0) return e;
          n--;
        } else t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var $r2 = 0;
  function Qa2(e) {
    return {
      $$typeof: Gl2,
      toString: e,
      valueOf: e
    };
  }
  var Cr2 = Math.random().toString(36).slice(2), Ce3 = "__reactFiber$" + Cr2, nr2 = "__reactProps$" + Cr2, Pn2 = "__reactContainer$" + Cr2, po2 = "__reactEvents$" + Cr2;
  function Qe2(e) {
    var n = e[Ce3];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[Pn2] || t[Ce3]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = co2(e); e !== null; ) {
          if (t = e[Ce3]) return t;
          e = co2(e);
        }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function Et2(e) {
    return e = e[Ce3] || e[Pn2], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function an2(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(v2(33));
  }
  function _r2(e) {
    return e[nr2] || null;
  }
  function Du(e) {
    var n = e[po2];
    return n === void 0 && (n = e[po2] = /* @__PURE__ */ new Set()), n;
  }
  var Sl2 = [], fn2 = -1;
  function Ve2(e) {
    return {
      current: e
    };
  }
  function O2(e) {
    0 > fn2 || (e.current = Sl2[fn2], Sl2[fn2] = null, fn2--);
  }
  function D3(e, n) {
    fn2++, Sl2[fn2] = e.current, e.current = n;
  }
  var Fe2 = {}, $2 = Ve2(Fe2), Z4 = Ve2(false), Ke2 = Fe2;
  function xn2(e, n) {
    var t = e.type.contextTypes;
    if (!t) return Fe2;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
    var l2 = {}, i3;
    for (i3 in t) l2[i3] = n[i3];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l2), l2;
  }
  function J4(e) {
    return e = e.childContextTypes, e != null;
  }
  function tr2() {
    O2(Z4), O2($2);
  }
  function mo2(e, n, t) {
    if ($2.current !== Fe2) throw Error(v2(168));
    D3($2, n), D3(Z4, t);
  }
  function Iu(e, n, t) {
    var r = e.stateNode;
    if (e = n.childContextTypes, typeof r.getChildContext != "function") return t;
    r = r.getChildContext();
    for (var l2 in r) if (!(l2 in e)) throw Error(v2(108, dn2(n) || "Unknown", l2));
    return M2({}, t, r);
  }
  function Wt2(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fe2, Ke2 = $2.current, D3($2, e), D3(Z4, Z4.current), true;
  }
  function ho2(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(v2(169));
    t ? (e = Iu(e, n, Ke2), r.__reactInternalMemoizedMergedChildContext = e, O2(Z4), O2($2), D3($2, e)) : O2(Z4), D3(Z4, t);
  }
  var ci2 = null, Xe2 = null, $a2 = U3.unstable_runWithPriority, di2 = U3.unstable_scheduleCallback, El2 = U3.unstable_cancelCallback, Ya2 = U3.unstable_shouldYield, vo2 = U3.unstable_requestPaint, kl2 = U3.unstable_now, Xa2 = U3.unstable_getCurrentPriorityLevel, Nr2 = U3.unstable_ImmediatePriority, Fu = U3.unstable_UserBlockingPriority, ju = U3.unstable_NormalPriority, Uu = U3.unstable_LowPriority, Vu = U3.unstable_IdlePriority, Yr2 = {}, Ka2 = vo2 !== void 0 ? vo2 : function() {
  }, me4 = null, At2 = null, Xr2 = false, yo2 = kl2(), A3 = 1e4 > yo2 ? kl2 : function() {
    return kl2() - yo2;
  };
  function Cn2() {
    switch (Xa2()) {
      case Nr2:
        return 99;
      case Fu:
        return 98;
      case ju:
        return 97;
      case Uu:
        return 96;
      case Vu:
        return 95;
      default:
        throw Error(v2(332));
    }
  }
  function Bu(e) {
    switch (e) {
      case 99:
        return Nr2;
      case 98:
        return Fu;
      case 97:
        return ju;
      case 96:
        return Uu;
      case 95:
        return Vu;
      default:
        throw Error(v2(332));
    }
  }
  function Ge2(e, n) {
    return e = Bu(e), $a2(e, n);
  }
  function ht2(e, n, t) {
    return e = Bu(e), di2(e, n, t);
  }
  function pe4() {
    if (At2 !== null) {
      var e = At2;
      At2 = null, El2(e);
    }
    Hu();
  }
  function Hu() {
    if (!Xr2 && me4 !== null) {
      Xr2 = true;
      var e = 0;
      try {
        var n = me4;
        Ge2(99, function() {
          for (; e < n.length; e++) {
            var t = n[e];
            do
              t = t(true);
            while (t !== null);
          }
        }), me4 = null;
      } catch (t) {
        throw me4 !== null && (me4 = me4.slice(e + 1)), di2(Nr2, pe4), t;
      } finally {
        Xr2 = false;
      }
    }
  }
  var Ga2 = qe3.ReactCurrentBatchConfig;
  function oe2(e, n) {
    if (e && e.defaultProps) {
      n = M2({}, n), e = e.defaultProps;
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  var rr2 = Ve2(null), lr2 = null, cn2 = null, ir2 = null;
  function pi2() {
    ir2 = cn2 = lr2 = null;
  }
  function mi2(e) {
    var n = rr2.current;
    O2(rr2), e.type._context._currentValue = n;
  }
  function Wu(e, n) {
    for (; e !== null; ) {
      var t = e.alternate;
      if ((e.childLanes & n) === n) {
        if (t === null || (t.childLanes & n) === n) break;
        t.childLanes |= n;
      } else e.childLanes |= n, t !== null && (t.childLanes |= n);
      e = e.return;
    }
  }
  function yn2(e, n) {
    lr2 = e, ir2 = cn2 = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) !== 0 && (ue2 = true), e.firstContext = null);
  }
  function re2(e, n) {
    if (ir2 !== e && n !== false && n !== 0) if ((typeof n != "number" || n === 1073741823) && (ir2 = e, n = 1073741823), n = {
      context: e,
      observedBits: n,
      next: null
    }, cn2 === null) {
      if (lr2 === null) throw Error(v2(308));
      cn2 = n, lr2.dependencies = {
        lanes: 0,
        firstContext: n,
        responders: null
      };
    } else cn2 = cn2.next = n;
    return e._currentValue;
  }
  var Ee3 = false;
  function hi2(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null
      },
      effects: null
    };
  }
  function Au(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
    });
  }
  function Le3(e, n) {
    return {
      eventTime: e,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function ze2(e, n) {
    if (e = e.updateQueue, e !== null) {
      e = e.shared;
      var t = e.pending;
      t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
    }
  }
  function go2(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var l2 = null, i3 = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var o = {
            eventTime: t.eventTime,
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: t.callback,
            next: null
          };
          i3 === null ? l2 = i3 = o : i3 = i3.next = o, t = t.next;
        } while (t !== null);
        i3 === null ? l2 = i3 = n : i3 = i3.next = n;
      } else l2 = i3 = n;
      t = {
        baseState: r.baseState,
        firstBaseUpdate: l2,
        lastBaseUpdate: i3,
        shared: r.shared,
        effects: r.effects
      }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function vt2(e, n, t, r) {
    var l2 = e.updateQueue;
    Ee3 = false;
    var i3 = l2.firstBaseUpdate, o = l2.lastBaseUpdate, u = l2.shared.pending;
    if (u !== null) {
      l2.shared.pending = null;
      var s = u, d = s.next;
      s.next = null, o === null ? i3 = d : o.next = d, o = s;
      var y2 = e.alternate;
      if (y2 !== null) {
        y2 = y2.updateQueue;
        var C2 = y2.lastBaseUpdate;
        C2 !== o && (C2 === null ? y2.firstBaseUpdate = d : C2.next = d, y2.lastBaseUpdate = s);
      }
    }
    if (i3 !== null) {
      C2 = l2.baseState, o = 0, y2 = d = s = null;
      do {
        u = i3.lane;
        var h3 = i3.eventTime;
        if ((r & u) === u) {
          y2 !== null && (y2 = y2.next = {
            eventTime: h3,
            lane: 0,
            tag: i3.tag,
            payload: i3.payload,
            callback: i3.callback,
            next: null
          });
          e: {
            var S2 = e, k2 = i3;
            switch (u = n, h3 = t, k2.tag) {
              case 1:
                if (S2 = k2.payload, typeof S2 == "function") {
                  C2 = S2.call(h3, C2, u);
                  break e;
                }
                C2 = S2;
                break e;
              case 3:
                S2.flags = S2.flags & -4097 | 64;
              case 0:
                if (S2 = k2.payload, u = typeof S2 == "function" ? S2.call(h3, C2, u) : S2, u == null) break e;
                C2 = M2({}, C2, u);
                break e;
              case 2:
                Ee3 = true;
            }
          }
          i3.callback !== null && (e.flags |= 32, u = l2.effects, u === null ? l2.effects = [
            i3
          ] : u.push(i3));
        } else h3 = {
          eventTime: h3,
          lane: u,
          tag: i3.tag,
          payload: i3.payload,
          callback: i3.callback,
          next: null
        }, y2 === null ? (d = y2 = h3, s = C2) : y2 = y2.next = h3, o |= u;
        if (i3 = i3.next, i3 === null) {
          if (u = l2.shared.pending, u === null) break;
          i3 = u.next, u.next = null, l2.lastBaseUpdate = u, l2.shared.pending = null;
        }
      } while (true);
      y2 === null && (s = C2), l2.baseState = s, l2.firstBaseUpdate = d, l2.lastBaseUpdate = y2, xt2 |= o, e.lanes = o, e.memoizedState = C2;
    }
  }
  function wo2(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
      var r = e[n], l2 = r.callback;
      if (l2 !== null) {
        if (r.callback = null, r = t, typeof l2 != "function") throw Error(v2(191, l2));
        l2.call(r);
      }
    }
  }
  var Qu = new yr2.Component().refs;
  function or2(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : M2({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var Pr2 = {
    isMounted: function(e) {
      return (e = e._reactInternals) ? be3(e) === e : false;
    },
    enqueueSetState: function(e, n, t) {
      e = e._reactInternals;
      var r = q(), l2 = Oe3(e), i3 = Le3(r, l2);
      i3.payload = n, t != null && (i3.callback = t), ze2(e, i3), Me2(e, l2, r);
    },
    enqueueReplaceState: function(e, n, t) {
      e = e._reactInternals;
      var r = q(), l2 = Oe3(e), i3 = Le3(r, l2);
      i3.tag = 1, i3.payload = n, t != null && (i3.callback = t), ze2(e, i3), Me2(e, l2, r);
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var t = q(), r = Oe3(e), l2 = Le3(t, r);
      l2.tag = 2, n != null && (l2.callback = n), ze2(e, l2), Me2(e, r, t);
    }
  };
  function So2(e, n, t, r, l2, i3, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i3, o) : n.prototype && n.prototype.isPureReactComponent ? !pt2(t, r) || !pt2(l2, i3) : true;
  }
  function $u(e, n, t) {
    var r = false, l2 = Fe2, i3 = n.contextType;
    return typeof i3 == "object" && i3 !== null ? i3 = re2(i3) : (l2 = J4(n) ? Ke2 : $2.current, r = n.contextTypes, i3 = (r = r != null) ? xn2(e, l2) : Fe2), n = new n(t, i3), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Pr2, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l2, e.__reactInternalMemoizedMaskedChildContext = i3), n;
  }
  function Eo2(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && Pr2.enqueueReplaceState(n, n.state, null);
  }
  function xl2(e, n, t, r) {
    var l2 = e.stateNode;
    l2.props = t, l2.state = e.memoizedState, l2.refs = Qu, hi2(e);
    var i3 = n.contextType;
    typeof i3 == "object" && i3 !== null ? l2.context = re2(i3) : (i3 = J4(n) ? Ke2 : $2.current, l2.context = xn2(e, i3)), vt2(e, t, l2, r), l2.state = e.memoizedState, i3 = n.getDerivedStateFromProps, typeof i3 == "function" && (or2(e, n, i3, t), l2.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l2.getSnapshotBeforeUpdate == "function" || typeof l2.UNSAFE_componentWillMount != "function" && typeof l2.componentWillMount != "function" || (n = l2.state, typeof l2.componentWillMount == "function" && l2.componentWillMount(), typeof l2.UNSAFE_componentWillMount == "function" && l2.UNSAFE_componentWillMount(), n !== l2.state && Pr2.enqueueReplaceState(l2, l2.state, null), vt2(e, t, l2, r), l2.state = e.memoizedState), typeof l2.componentDidMount == "function" && (e.flags |= 4);
  }
  var Rt2 = Array.isArray;
  function Fn2(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1) throw Error(v2(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(v2(147, e));
        var l2 = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === l2 ? n.ref : (n = function(i3) {
          var o = r.refs;
          o === Qu && (o = r.refs = {}), i3 === null ? delete o[l2] : o[l2] = i3;
        }, n._stringRef = l2, n);
      }
      if (typeof e != "string") throw Error(v2(284));
      if (!t._owner) throw Error(v2(290, e));
    }
    return e;
  }
  function Dt2(e, n) {
    if (e.type !== "textarea") throw Error(v2(31, Object.prototype.toString.call(n) === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : n));
  }
  function Yu(e) {
    function n(c, a) {
      if (e) {
        var f = c.lastEffect;
        f !== null ? (f.nextEffect = a, c.lastEffect = a) : c.firstEffect = c.lastEffect = a, a.nextEffect = null, a.flags = 8;
      }
    }
    function t(c, a) {
      if (!e) return null;
      for (; a !== null; ) n(c, a), a = a.sibling;
      return null;
    }
    function r(c, a) {
      for (c = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? c.set(a.key, a) : c.set(a.index, a), a = a.sibling;
      return c;
    }
    function l2(c, a) {
      return c = Ue2(c, a), c.index = 0, c.sibling = null, c;
    }
    function i3(c, a, f) {
      return c.index = f, e ? (f = c.alternate, f !== null ? (f = f.index, f < a ? (c.flags = 2, a) : f) : (c.flags = 2, a)) : a;
    }
    function o(c) {
      return e && c.alternate === null && (c.flags = 2), c;
    }
    function u(c, a, f, p) {
      return a === null || a.tag !== 6 ? (a = qr2(f, c.mode, p), a.return = c, a) : (a = l2(a, f), a.return = c, a);
    }
    function s(c, a, f, p) {
      return a !== null && a.elementType === f.type ? (p = l2(a, f.props), p.ref = Fn2(c, a, f), p.return = c, p) : (p = Xt2(f.type, f.key, f.props, null, c.mode, p), p.ref = Fn2(c, a, f), p.return = c, p);
    }
    function d(c, a, f, p) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== f.containerInfo || a.stateNode.implementation !== f.implementation ? (a = br2(f, c.mode, p), a.return = c, a) : (a = l2(a, f.children || []), a.return = c, a);
    }
    function y2(c, a, f, p, m) {
      return a === null || a.tag !== 7 ? (a = En2(f, c.mode, p, m), a.return = c, a) : (a = l2(a, f), a.return = c, a);
    }
    function C2(c, a, f) {
      if (typeof a == "string" || typeof a == "number") return a = qr2("" + a, c.mode, f), a.return = c, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case An2:
            return f = Xt2(a.type, a.key, a.props, null, c.mode, f), f.ref = Fn2(c, null, a), f.return = c, f;
          case We2:
            return a = br2(a, c.mode, f), a.return = c, a;
        }
        if (Rt2(a) || On2(a)) return a = En2(a, c.mode, f, null), a.return = c, a;
        Dt2(c, a);
      }
      return null;
    }
    function h3(c, a, f, p) {
      var m = a !== null ? a.key : null;
      if (typeof f == "string" || typeof f == "number") return m !== null ? null : u(c, a, "" + f, p);
      if (typeof f == "object" && f !== null) {
        switch (f.$$typeof) {
          case An2:
            return f.key === m ? f.type === ke4 ? y2(c, a, f.props.children, p, m) : s(c, a, f, p) : null;
          case We2:
            return f.key === m ? d(c, a, f, p) : null;
        }
        if (Rt2(f) || On2(f)) return m !== null ? null : y2(c, a, f, p, null);
        Dt2(c, f);
      }
      return null;
    }
    function S2(c, a, f, p, m) {
      if (typeof p == "string" || typeof p == "number") return c = c.get(f) || null, u(a, c, "" + p, m);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case An2:
            return c = c.get(p.key === null ? f : p.key) || null, p.type === ke4 ? y2(a, c, p.props.children, m, p.key) : s(a, c, p, m);
          case We2:
            return c = c.get(p.key === null ? f : p.key) || null, d(a, c, p, m);
        }
        if (Rt2(p) || On2(p)) return c = c.get(f) || null, y2(a, c, p, m, null);
        Dt2(a, p);
      }
      return null;
    }
    function k2(c, a, f, p) {
      for (var m = null, _ = null, w = a, N3 = a = 0, T3 = null; w !== null && N3 < f.length; N3++) {
        w.index > N3 ? (T3 = w, w = null) : T3 = w.sibling;
        var P = h3(c, w, f[N3], p);
        if (P === null) {
          w === null && (w = T3);
          break;
        }
        e && w && P.alternate === null && n(c, w), a = i3(P, a, N3), _ === null ? m = P : _.sibling = P, _ = P, w = T3;
      }
      if (N3 === f.length) return t(c, w), m;
      if (w === null) {
        for (; N3 < f.length; N3++) w = C2(c, f[N3], p), w !== null && (a = i3(w, a, N3), _ === null ? m = w : _.sibling = w, _ = w);
        return m;
      }
      for (w = r(c, w); N3 < f.length; N3++) T3 = S2(w, c, N3, f[N3], p), T3 !== null && (e && T3.alternate !== null && w.delete(T3.key === null ? N3 : T3.key), a = i3(T3, a, N3), _ === null ? m = T3 : _.sibling = T3, _ = T3);
      return e && w.forEach(function(Se3) {
        return n(c, Se3);
      }), m;
    }
    function E2(c, a, f, p) {
      var m = On2(f);
      if (typeof m != "function") throw Error(v2(150));
      if (f = m.call(f), f == null) throw Error(v2(151));
      for (var _ = m = null, w = a, N3 = a = 0, T3 = null, P = f.next(); w !== null && !P.done; N3++, P = f.next()) {
        w.index > N3 ? (T3 = w, w = null) : T3 = w.sibling;
        var Se3 = h3(c, w, P.value, p);
        if (Se3 === null) {
          w === null && (w = T3);
          break;
        }
        e && w && Se3.alternate === null && n(c, w), a = i3(Se3, a, N3), _ === null ? m = Se3 : _.sibling = Se3, _ = Se3, w = T3;
      }
      if (P.done) return t(c, w), m;
      if (w === null) {
        for (; !P.done; N3++, P = f.next()) P = C2(c, P.value, p), P !== null && (a = i3(P, a, N3), _ === null ? m = P : _.sibling = P, _ = P);
        return m;
      }
      for (w = r(c, w); !P.done; N3++, P = f.next()) P = S2(w, c, N3, P.value, p), P !== null && (e && P.alternate !== null && w.delete(P.key === null ? N3 : P.key), a = i3(P, a, N3), _ === null ? m = P : _.sibling = P, _ = P);
      return e && w.forEach(function(Cs2) {
        return n(c, Cs2);
      }), m;
    }
    return function(c, a, f, p) {
      var m = typeof f == "object" && f !== null && f.type === ke4 && f.key === null;
      m && (f = f.props.children);
      var _ = typeof f == "object" && f !== null;
      if (_) switch (f.$$typeof) {
        case An2:
          e: {
            for (_ = f.key, m = a; m !== null; ) {
              if (m.key === _) {
                switch (m.tag) {
                  case 7:
                    if (f.type === ke4) {
                      t(c, m.sibling), a = l2(m, f.props.children), a.return = c, c = a;
                      break e;
                    }
                    break;
                  default:
                    if (m.elementType === f.type) {
                      t(c, m.sibling), a = l2(m, f.props), a.ref = Fn2(c, m, f), a.return = c, c = a;
                      break e;
                    }
                }
                t(c, m);
                break;
              } else n(c, m);
              m = m.sibling;
            }
            f.type === ke4 ? (a = En2(f.props.children, c.mode, p, f.key), a.return = c, c = a) : (p = Xt2(f.type, f.key, f.props, null, c.mode, p), p.ref = Fn2(c, a, f), p.return = c, c = p);
          }
          return o(c);
        case We2:
          e: {
            for (m = f.key; a !== null; ) {
              if (a.key === m) if (a.tag === 4 && a.stateNode.containerInfo === f.containerInfo && a.stateNode.implementation === f.implementation) {
                t(c, a.sibling), a = l2(a, f.children || []), a.return = c, c = a;
                break e;
              } else {
                t(c, a);
                break;
              }
              else n(c, a);
              a = a.sibling;
            }
            a = br2(f, c.mode, p), a.return = c, c = a;
          }
          return o(c);
      }
      if (typeof f == "string" || typeof f == "number") return f = "" + f, a !== null && a.tag === 6 ? (t(c, a.sibling), a = l2(a, f), a.return = c, c = a) : (t(c, a), a = qr2(f, c.mode, p), a.return = c, c = a), o(c);
      if (Rt2(f)) return k2(c, a, f, p);
      if (On2(f)) return E2(c, a, f, p);
      if (_ && Dt2(c, f), typeof f > "u" && !m) switch (c.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(v2(152, dn2(c.type) || "Component"));
      }
      return t(c, a);
    };
  }
  var ur2 = Yu(true), Xu = Yu(false), kt2 = {}, ce4 = Ve2(kt2), yt2 = Ve2(kt2), gt2 = Ve2(kt2);
  function $e3(e) {
    if (e === kt2) throw Error(v2(174));
    return e;
  }
  function Cl2(e, n) {
    switch (D3(gt2, n), D3(yt2, e), D3(ce4, kt2), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : sl2(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = sl2(n, e);
    }
    O2(ce4), D3(ce4, n);
  }
  function _n2() {
    O2(ce4), O2(yt2), O2(gt2);
  }
  function ko2(e) {
    $e3(gt2.current);
    var n = $e3(ce4.current), t = sl2(n, e.type);
    n !== t && (D3(yt2, e), D3(ce4, t));
  }
  function vi2(e) {
    yt2.current === e && (O2(ce4), O2(yt2));
  }
  var R = Ve2(0);
  function sr2(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 64) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var ve4 = null, _e4 = null, de4 = false;
  function Ku(e, n) {
    var t = ne3(5, null, null, 0);
    t.elementType = "DELETED", t.type = "DELETED", t.stateNode = n, t.return = e, t.flags = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = t, e.lastEffect = t) : e.firstEffect = e.lastEffect = t;
  }
  function xo2(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, true) : false;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, true) : false;
      case 13:
        return false;
      default:
        return false;
    }
  }
  function _l2(e) {
    if (de4) {
      var n = _e4;
      if (n) {
        var t = n;
        if (!xo2(e, n)) {
          if (n = vn2(t.nextSibling), !n || !xo2(e, n)) {
            e.flags = e.flags & -1025 | 2, de4 = false, ve4 = e;
            return;
          }
          Ku(ve4, t);
        }
        ve4 = e, _e4 = vn2(n.firstChild);
      } else e.flags = e.flags & -1025 | 2, de4 = false, ve4 = e;
    }
  }
  function Co2(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ve4 = e;
  }
  function It2(e) {
    if (e !== ve4) return false;
    if (!de4) return Co2(e), de4 = true, false;
    var n = e.type;
    if (e.tag !== 5 || n !== "head" && n !== "body" && !wl2(n, e.memoizedProps)) for (n = _e4; n; ) Ku(e, n), n = vn2(n.nextSibling);
    if (Co2(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(v2(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                _e4 = vn2(e.nextSibling);
                break e;
              }
              n--;
            } else t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        _e4 = null;
      }
    } else _e4 = ve4 ? vn2(e.stateNode.nextSibling) : null;
    return true;
  }
  function Kr2() {
    _e4 = ve4 = null, de4 = false;
  }
  var gn2 = [];
  function yi() {
    for (var e = 0; e < gn2.length; e++) gn2[e]._workInProgressVersionPrimary = null;
    gn2.length = 0;
  }
  var nt2 = qe3.ReactCurrentDispatcher, te3 = qe3.ReactCurrentBatchConfig, wt2 = 0, I2 = null, W3 = null, V4 = null, ar2 = false, tt2 = false;
  function K3() {
    throw Error(v2(321));
  }
  function gi2(e, n) {
    if (n === null) return false;
    for (var t = 0; t < n.length && t < e.length; t++) if (!ee3(e[t], n[t])) return false;
    return true;
  }
  function wi2(e, n, t, r, l2, i3) {
    if (wt2 = i3, I2 = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, nt2.current = e === null || e.memoizedState === null ? Ja2 : qa2, e = t(r, l2), tt2) {
      i3 = 0;
      do {
        if (tt2 = false, !(25 > i3)) throw Error(v2(301));
        i3 += 1, V4 = W3 = null, n.updateQueue = null, nt2.current = ba2, e = t(r, l2);
      } while (tt2);
    }
    if (nt2.current = pr2, n = W3 !== null && W3.next !== null, wt2 = 0, V4 = W3 = I2 = null, ar2 = false, n) throw Error(v2(300));
    return e;
  }
  function Ye2() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return V4 === null ? I2.memoizedState = V4 = e : V4 = V4.next = e, V4;
  }
  function en2() {
    if (W3 === null) {
      var e = I2.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = W3.next;
    var n = V4 === null ? I2.memoizedState : V4.next;
    if (n !== null) V4 = n, W3 = e;
    else {
      if (e === null) throw Error(v2(310));
      W3 = e, e = {
        memoizedState: W3.memoizedState,
        baseState: W3.baseState,
        baseQueue: W3.baseQueue,
        queue: W3.queue,
        next: null
      }, V4 === null ? I2.memoizedState = V4 = e : V4 = V4.next = e;
    }
    return V4;
  }
  function ae4(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function jn2(e) {
    var n = en2(), t = n.queue;
    if (t === null) throw Error(v2(311));
    t.lastRenderedReducer = e;
    var r = W3, l2 = r.baseQueue, i3 = t.pending;
    if (i3 !== null) {
      if (l2 !== null) {
        var o = l2.next;
        l2.next = i3.next, i3.next = o;
      }
      r.baseQueue = l2 = i3, t.pending = null;
    }
    if (l2 !== null) {
      l2 = l2.next, r = r.baseState;
      var u = o = i3 = null, s = l2;
      do {
        var d = s.lane;
        if ((wt2 & d) === d) u !== null && (u = u.next = {
          lane: 0,
          action: s.action,
          eagerReducer: s.eagerReducer,
          eagerState: s.eagerState,
          next: null
        }), r = s.eagerReducer === e ? s.eagerState : e(r, s.action);
        else {
          var y2 = {
            lane: d,
            action: s.action,
            eagerReducer: s.eagerReducer,
            eagerState: s.eagerState,
            next: null
          };
          u === null ? (o = u = y2, i3 = r) : u = u.next = y2, I2.lanes |= d, xt2 |= d;
        }
        s = s.next;
      } while (s !== null && s !== l2);
      u === null ? i3 = r : u.next = o, ee3(r, n.memoizedState) || (ue2 = true), n.memoizedState = r, n.baseState = i3, n.baseQueue = u, t.lastRenderedState = r;
    }
    return [
      n.memoizedState,
      t.dispatch
    ];
  }
  function Un2(e) {
    var n = en2(), t = n.queue;
    if (t === null) throw Error(v2(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l2 = t.pending, i3 = n.memoizedState;
    if (l2 !== null) {
      t.pending = null;
      var o = l2 = l2.next;
      do
        i3 = e(i3, o.action), o = o.next;
      while (o !== l2);
      ee3(i3, n.memoizedState) || (ue2 = true), n.memoizedState = i3, n.baseQueue === null && (n.baseState = i3), t.lastRenderedState = i3;
    }
    return [
      i3,
      r
    ];
  }
  function _o2(e, n, t) {
    var r = n._getVersion;
    r = r(n._source);
    var l2 = n._workInProgressVersionPrimary;
    if (l2 !== null ? e = l2 === r : (e = e.mutableReadLanes, (e = (wt2 & e) === e) && (n._workInProgressVersionPrimary = r, gn2.push(n))), e) return t(n._source);
    throw gn2.push(n), Error(v2(350));
  }
  function Gu(e, n, t, r) {
    var l2 = Y3;
    if (l2 === null) throw Error(v2(349));
    var i3 = n._getVersion, o = i3(n._source), u = nt2.current, s = u.useState(function() {
      return _o2(l2, n, t);
    }), d = s[1], y2 = s[0];
    s = V4;
    var C2 = e.memoizedState, h3 = C2.refs, S2 = h3.getSnapshot, k2 = C2.source;
    C2 = C2.subscribe;
    var E2 = I2;
    return e.memoizedState = {
      refs: h3,
      source: n,
      subscribe: r
    }, u.useEffect(function() {
      h3.getSnapshot = t, h3.setSnapshot = d;
      var c = i3(n._source);
      if (!ee3(o, c)) {
        c = t(n._source), ee3(y2, c) || (d(c), c = Oe3(E2), l2.mutableReadLanes |= c & l2.pendingLanes), c = l2.mutableReadLanes, l2.entangledLanes |= c;
        for (var a = l2.entanglements, f = c; 0 < f; ) {
          var p = 31 - Ie4(f), m = 1 << p;
          a[p] |= c, f &= ~m;
        }
      }
    }, [
      t,
      n,
      r
    ]), u.useEffect(function() {
      return r(n._source, function() {
        var c = h3.getSnapshot, a = h3.setSnapshot;
        try {
          a(c(n._source));
          var f = Oe3(E2);
          l2.mutableReadLanes |= f & l2.pendingLanes;
        } catch (p) {
          a(function() {
            throw p;
          });
        }
      });
    }, [
      n,
      r
    ]), ee3(S2, t) && ee3(k2, n) && ee3(C2, r) || (e = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: ae4,
      lastRenderedState: y2
    }, e.dispatch = d = ki2.bind(null, I2, e), s.queue = e, s.baseQueue = null, y2 = _o2(l2, n, t), s.memoizedState = s.baseState = y2), y2;
  }
  function Zu(e, n, t) {
    var r = en2();
    return Gu(r, e, n, t);
  }
  function Vn2(e) {
    var n = Ye2();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = n.queue = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: ae4,
      lastRenderedState: e
    }, e = e.dispatch = ki2.bind(null, I2, e), [
      n.memoizedState,
      e
    ];
  }
  function fr2(e, n, t, r) {
    return e = {
      tag: e,
      create: n,
      destroy: t,
      deps: r,
      next: null
    }, n = I2.updateQueue, n === null ? (n = {
      lastEffect: null
    }, I2.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function No2(e) {
    var n = Ye2();
    return e = {
      current: e
    }, n.memoizedState = e;
  }
  function cr2() {
    return en2().memoizedState;
  }
  function Nl2(e, n, t, r) {
    var l2 = Ye2();
    I2.flags |= e, l2.memoizedState = fr2(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function Si2(e, n, t, r) {
    var l2 = en2();
    r = r === void 0 ? null : r;
    var i3 = void 0;
    if (W3 !== null) {
      var o = W3.memoizedState;
      if (i3 = o.destroy, r !== null && gi2(r, o.deps)) {
        fr2(n, t, i3, r);
        return;
      }
    }
    I2.flags |= e, l2.memoizedState = fr2(1 | n, t, i3, r);
  }
  function Po2(e, n) {
    return Nl2(516, 4, e, n);
  }
  function dr2(e, n) {
    return Si2(516, 4, e, n);
  }
  function Ju(e, n) {
    return Si2(4, 2, e, n);
  }
  function qu(e, n) {
    if (typeof n == "function") return e = e(), n(e), function() {
      n(null);
    };
    if (n != null) return e = e(), n.current = e, function() {
      n.current = null;
    };
  }
  function bu(e, n, t) {
    return t = t != null ? t.concat([
      e
    ]) : null, Si2(4, 2, qu.bind(null, n, e), t);
  }
  function Ei2() {
  }
  function es2(e, n) {
    var t = en2();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && gi2(n, r[1]) ? r[0] : (t.memoizedState = [
      e,
      n
    ], e);
  }
  function ns2(e, n) {
    var t = en2();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && gi2(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [
      e,
      n
    ], e);
  }
  function Za2(e, n) {
    var t = Cn2();
    Ge2(98 > t ? 98 : t, function() {
      e(true);
    }), Ge2(97 < t ? 97 : t, function() {
      var r = te3.transition;
      te3.transition = 1;
      try {
        e(false), n();
      } finally {
        te3.transition = r;
      }
    });
  }
  function ki2(e, n, t) {
    var r = q(), l2 = Oe3(e), i3 = {
      lane: l2,
      action: t,
      eagerReducer: null,
      eagerState: null,
      next: null
    }, o = n.pending;
    if (o === null ? i3.next = i3 : (i3.next = o.next, o.next = i3), n.pending = i3, o = e.alternate, e === I2 || o !== null && o === I2) tt2 = ar2 = true;
    else {
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
        var u = n.lastRenderedState, s = o(u, t);
        if (i3.eagerReducer = o, i3.eagerState = s, ee3(s, u)) return;
      } catch {
      } finally {
      }
      Me2(e, l2, r);
    }
  }
  var pr2 = {
    readContext: re2,
    useCallback: K3,
    useContext: K3,
    useEffect: K3,
    useImperativeHandle: K3,
    useLayoutEffect: K3,
    useMemo: K3,
    useReducer: K3,
    useRef: K3,
    useState: K3,
    useDebugValue: K3,
    useDeferredValue: K3,
    useTransition: K3,
    useMutableSource: K3,
    useOpaqueIdentifier: K3,
    unstable_isNewReconciler: false
  }, Ja2 = {
    readContext: re2,
    useCallback: function(e, n) {
      return Ye2().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: re2,
    useEffect: Po2,
    useImperativeHandle: function(e, n, t) {
      return t = t != null ? t.concat([
        e
      ]) : null, Nl2(4, 2, qu.bind(null, n, e), t);
    },
    useLayoutEffect: function(e, n) {
      return Nl2(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var t = Ye2();
      return n = n === void 0 ? null : n, e = e(), t.memoizedState = [
        e,
        n
      ], e;
    },
    useReducer: function(e, n, t) {
      var r = Ye2();
      return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = r.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, e = e.dispatch = ki2.bind(null, I2, e), [
        r.memoizedState,
        e
      ];
    },
    useRef: No2,
    useState: Vn2,
    useDebugValue: Ei2,
    useDeferredValue: function(e) {
      var n = Vn2(e), t = n[0], r = n[1];
      return Po2(function() {
        var l2 = te3.transition;
        te3.transition = 1;
        try {
          r(e);
        } finally {
          te3.transition = l2;
        }
      }, [
        e
      ]), t;
    },
    useTransition: function() {
      var e = Vn2(false), n = e[0];
      return e = Za2.bind(null, e[1]), No2(e), [
        e,
        n
      ];
    },
    useMutableSource: function(e, n, t) {
      var r = Ye2();
      return r.memoizedState = {
        refs: {
          getSnapshot: n,
          setSnapshot: null
        },
        source: e,
        subscribe: t
      }, Gu(r, e, n, t);
    },
    useOpaqueIdentifier: function() {
      if (de4) {
        var e = false, n = Qa2(function() {
          throw e || (e = true, t("r:" + ($r2++).toString(36))), Error(v2(355));
        }), t = Vn2(n)[1];
        return (I2.mode & 2) === 0 && (I2.flags |= 516, fr2(5, function() {
          t("r:" + ($r2++).toString(36));
        }, void 0, null)), n;
      }
      return n = "r:" + ($r2++).toString(36), Vn2(n), n;
    },
    unstable_isNewReconciler: false
  }, qa2 = {
    readContext: re2,
    useCallback: es2,
    useContext: re2,
    useEffect: dr2,
    useImperativeHandle: bu,
    useLayoutEffect: Ju,
    useMemo: ns2,
    useReducer: jn2,
    useRef: cr2,
    useState: function() {
      return jn2(ae4);
    },
    useDebugValue: Ei2,
    useDeferredValue: function(e) {
      var n = jn2(ae4), t = n[0], r = n[1];
      return dr2(function() {
        var l2 = te3.transition;
        te3.transition = 1;
        try {
          r(e);
        } finally {
          te3.transition = l2;
        }
      }, [
        e
      ]), t;
    },
    useTransition: function() {
      var e = jn2(ae4)[0];
      return [
        cr2().current,
        e
      ];
    },
    useMutableSource: Zu,
    useOpaqueIdentifier: function() {
      return jn2(ae4)[0];
    },
    unstable_isNewReconciler: false
  }, ba2 = {
    readContext: re2,
    useCallback: es2,
    useContext: re2,
    useEffect: dr2,
    useImperativeHandle: bu,
    useLayoutEffect: Ju,
    useMemo: ns2,
    useReducer: Un2,
    useRef: cr2,
    useState: function() {
      return Un2(ae4);
    },
    useDebugValue: Ei2,
    useDeferredValue: function(e) {
      var n = Un2(ae4), t = n[0], r = n[1];
      return dr2(function() {
        var l2 = te3.transition;
        te3.transition = 1;
        try {
          r(e);
        } finally {
          te3.transition = l2;
        }
      }, [
        e
      ]), t;
    },
    useTransition: function() {
      var e = Un2(ae4)[0];
      return [
        cr2().current,
        e
      ];
    },
    useMutableSource: Zu,
    useOpaqueIdentifier: function() {
      return Un2(ae4)[0];
    },
    unstable_isNewReconciler: false
  }, ef = qe3.ReactCurrentOwner, ue2 = false;
  function G4(e, n, t, r) {
    n.child = e === null ? Xu(n, null, t, r) : ur2(n, e.child, t, r);
  }
  function To2(e, n, t, r, l2) {
    t = t.render;
    var i3 = n.ref;
    return yn2(n, l2), r = wi2(e, n, t, r, i3, l2), e !== null && !ue2 ? (n.updateQueue = e.updateQueue, n.flags &= -517, e.lanes &= ~l2, ye4(e, n, l2)) : (n.flags |= 1, G4(e, n, r, l2), n.child);
  }
  function Lo2(e, n, t, r, l2, i3) {
    if (e === null) {
      var o = t.type;
      return typeof o == "function" && !Ti2(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, ts2(e, n, o, r, l2, i3)) : (e = Xt2(t.type, null, r, n, n.mode, i3), e.ref = n.ref, e.return = n, n.child = e);
    }
    return o = e.child, (l2 & i3) === 0 && (l2 = o.memoizedProps, t = t.compare, t = t !== null ? t : pt2, t(l2, r) && e.ref === n.ref) ? ye4(e, n, i3) : (n.flags |= 1, e = Ue2(o, r), e.ref = n.ref, e.return = n, n.child = e);
  }
  function ts2(e, n, t, r, l2, i3) {
    if (e !== null && pt2(e.memoizedProps, r) && e.ref === n.ref) if (ue2 = false, (i3 & l2) !== 0) (e.flags & 16384) !== 0 && (ue2 = true);
    else return n.lanes = e.lanes, ye4(e, n, i3);
    return Pl2(e, n, t, r, i3);
  }
  function Gr2(e, n, t) {
    var r = n.pendingProps, l2 = r.children, i3 = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding") if ((n.mode & 4) === 0) n.memoizedState = {
      baseLanes: 0
    }, jt2(n, t);
    else if ((t & 1073741824) !== 0) n.memoizedState = {
      baseLanes: 0
    }, jt2(n, i3 !== null ? i3.baseLanes : t);
    else return e = i3 !== null ? i3.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
      baseLanes: e
    }, jt2(n, e), null;
    else i3 !== null ? (r = i3.baseLanes | t, n.memoizedState = null) : r = t, jt2(n, r);
    return G4(e, n, l2, t), n.child;
  }
  function rs2(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 128);
  }
  function Pl2(e, n, t, r, l2) {
    var i3 = J4(t) ? Ke2 : $2.current;
    return i3 = xn2(n, i3), yn2(n, l2), t = wi2(e, n, t, r, i3, l2), e !== null && !ue2 ? (n.updateQueue = e.updateQueue, n.flags &= -517, e.lanes &= ~l2, ye4(e, n, l2)) : (n.flags |= 1, G4(e, n, t, l2), n.child);
  }
  function zo2(e, n, t, r, l2) {
    if (J4(t)) {
      var i3 = true;
      Wt2(n);
    } else i3 = false;
    if (yn2(n, l2), n.stateNode === null) e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), $u(n, t, r), xl2(n, t, r, l2), r = true;
    else if (e === null) {
      var o = n.stateNode, u = n.memoizedProps;
      o.props = u;
      var s = o.context, d = t.contextType;
      typeof d == "object" && d !== null ? d = re2(d) : (d = J4(t) ? Ke2 : $2.current, d = xn2(n, d));
      var y2 = t.getDerivedStateFromProps, C2 = typeof y2 == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      C2 || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== d) && Eo2(n, o, r, d), Ee3 = false;
      var h3 = n.memoizedState;
      o.state = h3, vt2(n, r, o, l2), s = n.memoizedState, u !== r || h3 !== s || Z4.current || Ee3 ? (typeof y2 == "function" && (or2(n, t, y2, r), s = n.memoizedState), (u = Ee3 || So2(n, t, u, r, h3, s, d)) ? (C2 || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (n.flags |= 4)) : (typeof o.componentDidMount == "function" && (n.flags |= 4), n.memoizedProps = r, n.memoizedState = s), o.props = r, o.state = s, o.context = d, r = u) : (typeof o.componentDidMount == "function" && (n.flags |= 4), r = false);
    } else {
      o = n.stateNode, Au(e, n), u = n.memoizedProps, d = n.type === n.elementType ? u : oe2(n.type, u), o.props = d, C2 = n.pendingProps, h3 = o.context, s = t.contextType, typeof s == "object" && s !== null ? s = re2(s) : (s = J4(t) ? Ke2 : $2.current, s = xn2(n, s));
      var S2 = t.getDerivedStateFromProps;
      (y2 = typeof S2 == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== C2 || h3 !== s) && Eo2(n, o, r, s), Ee3 = false, h3 = n.memoizedState, o.state = h3, vt2(n, r, o, l2);
      var k2 = n.memoizedState;
      u !== C2 || h3 !== k2 || Z4.current || Ee3 ? (typeof S2 == "function" && (or2(n, t, S2, r), k2 = n.memoizedState), (d = Ee3 || So2(n, t, d, r, h3, k2, s)) ? (y2 || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k2, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, k2, s)), typeof o.componentDidUpdate == "function" && (n.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 256)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h3 === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h3 === e.memoizedState || (n.flags |= 256), n.memoizedProps = r, n.memoizedState = k2), o.props = r, o.state = k2, o.context = s, r = d) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h3 === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h3 === e.memoizedState || (n.flags |= 256), r = false);
    }
    return Tl2(e, n, t, r, i3, l2);
  }
  function Tl2(e, n, t, r, l2, i3) {
    rs2(e, n);
    var o = (n.flags & 64) !== 0;
    if (!r && !o) return l2 && ho2(n, t, false), ye4(e, n, i3);
    r = n.stateNode, ef.current = n;
    var u = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && o ? (n.child = ur2(n, e.child, null, i3), n.child = ur2(n, null, u, i3)) : G4(e, n, u, i3), n.memoizedState = r.state, l2 && ho2(n, t, true), n.child;
  }
  function Oo2(e) {
    var n = e.stateNode;
    n.pendingContext ? mo2(e, n.pendingContext, n.pendingContext !== n.context) : n.context && mo2(e, n.context, false), Cl2(e, n.containerInfo);
  }
  var Ft2 = {
    dehydrated: null,
    retryLane: 0
  };
  function Mo2(e, n, t) {
    var r = n.pendingProps, l2 = R.current, i3 = false, o;
    return (o = (n.flags & 64) !== 0) || (o = e !== null && e.memoizedState === null ? false : (l2 & 2) !== 0), o ? (i3 = true, n.flags &= -65) : e !== null && e.memoizedState === null || r.fallback === void 0 || r.unstable_avoidThisFallback === true || (l2 |= 1), D3(R, l2 & 1), e === null ? (r.fallback !== void 0 && _l2(n), e = r.children, l2 = r.fallback, i3 ? (e = Ro2(n, e, l2, t), n.child.memoizedState = {
      baseLanes: t
    }, n.memoizedState = Ft2, e) : typeof r.unstable_expectedLoadTime == "number" ? (e = Ro2(n, e, l2, t), n.child.memoizedState = {
      baseLanes: t
    }, n.memoizedState = Ft2, n.lanes = 33554432, e) : (t = Li2({
      mode: "visible",
      children: e
    }, n.mode, t, null), t.return = n, n.child = t)) : e.memoizedState !== null ? i3 ? (r = Io2(e, n, r.children, r.fallback, t), i3 = n.child, l2 = e.child.memoizedState, i3.memoizedState = l2 === null ? {
      baseLanes: t
    } : {
      baseLanes: l2.baseLanes | t
    }, i3.childLanes = e.childLanes & ~t, n.memoizedState = Ft2, r) : (t = Do2(e, n, r.children, t), n.memoizedState = null, t) : i3 ? (r = Io2(e, n, r.children, r.fallback, t), i3 = n.child, l2 = e.child.memoizedState, i3.memoizedState = l2 === null ? {
      baseLanes: t
    } : {
      baseLanes: l2.baseLanes | t
    }, i3.childLanes = e.childLanes & ~t, n.memoizedState = Ft2, r) : (t = Do2(e, n, r.children, t), n.memoizedState = null, t);
  }
  function Ro2(e, n, t, r) {
    var l2 = e.mode, i3 = e.child;
    return n = {
      mode: "hidden",
      children: n
    }, (l2 & 2) === 0 && i3 !== null ? (i3.childLanes = 0, i3.pendingProps = n) : i3 = Li2(n, l2, 0, null), t = En2(t, l2, r, null), i3.return = e, t.return = e, i3.sibling = t, e.child = i3, t;
  }
  function Do2(e, n, t, r) {
    var l2 = e.child;
    return e = l2.sibling, t = Ue2(l2, {
      mode: "visible",
      children: t
    }), (n.mode & 2) === 0 && (t.lanes = r), t.return = n, t.sibling = null, e !== null && (e.nextEffect = null, e.flags = 8, n.firstEffect = n.lastEffect = e), n.child = t;
  }
  function Io2(e, n, t, r, l2) {
    var i3 = n.mode, o = e.child;
    e = o.sibling;
    var u = {
      mode: "hidden",
      children: t
    };
    return (i3 & 2) === 0 && n.child !== o ? (t = n.child, t.childLanes = 0, t.pendingProps = u, o = t.lastEffect, o !== null ? (n.firstEffect = t.firstEffect, n.lastEffect = o, o.nextEffect = null) : n.firstEffect = n.lastEffect = null) : t = Ue2(o, u), e !== null ? r = Ue2(e, r) : (r = En2(r, i3, l2, null), r.flags |= 2), r.return = n, t.return = n, t.sibling = r, n.child = t, r;
  }
  function Fo2(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    t !== null && (t.lanes |= n), Wu(e.return, n);
  }
  function Zr2(e, n, t, r, l2, i3) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: t,
      tailMode: l2,
      lastEffect: i3
    } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l2, o.lastEffect = i3);
  }
  function jo2(e, n, t) {
    var r = n.pendingProps, l2 = r.revealOrder, i3 = r.tail;
    if (G4(e, n, r.children, t), r = R.current, (r & 2) !== 0) r = r & 1 | 2, n.flags |= 64;
    else {
      if (e !== null && (e.flags & 64) !== 0) e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Fo2(e, t);
        else if (e.tag === 19) Fo2(e, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (D3(R, r), (n.mode & 2) === 0) n.memoizedState = null;
    else switch (l2) {
      case "forwards":
        for (t = n.child, l2 = null; t !== null; ) e = t.alternate, e !== null && sr2(e) === null && (l2 = t), t = t.sibling;
        t = l2, t === null ? (l2 = n.child, n.child = null) : (l2 = t.sibling, t.sibling = null), Zr2(n, false, l2, t, i3, n.lastEffect);
        break;
      case "backwards":
        for (t = null, l2 = n.child, n.child = null; l2 !== null; ) {
          if (e = l2.alternate, e !== null && sr2(e) === null) {
            n.child = l2;
            break;
          }
          e = l2.sibling, l2.sibling = t, t = l2, l2 = e;
        }
        Zr2(n, true, t, null, i3, n.lastEffect);
        break;
      case "together":
        Zr2(n, false, null, null, void 0, n.lastEffect);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function ye4(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), xt2 |= n.lanes, (t & n.childLanes) !== 0) {
      if (e !== null && n.child !== e.child) throw Error(v2(153));
      if (n.child !== null) {
        for (e = n.child, t = Ue2(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = Ue2(e, e.pendingProps), t.return = n;
        t.sibling = null;
      }
      return n.child;
    }
    return null;
  }
  var ls2, Ll2, is2, os2;
  ls2 = function(e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === n) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) return;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  };
  Ll2 = function() {
  };
  is2 = function(e, n, t, r) {
    var l2 = e.memoizedProps;
    if (l2 !== r) {
      e = n.stateNode, $e3(ce4.current);
      var i3 = null;
      switch (t) {
        case "input":
          l2 = tl2(e, l2), r = tl2(e, r), i3 = [];
          break;
        case "option":
          l2 = il2(e, l2), r = il2(e, r), i3 = [];
          break;
        case "select":
          l2 = M2({}, l2, {
            value: void 0
          }), r = M2({}, r, {
            value: void 0
          }), i3 = [];
          break;
        case "textarea":
          l2 = ol2(e, l2), r = ol2(e, r), i3 = [];
          break;
        default:
          typeof l2.onClick != "function" && typeof r.onClick == "function" && (e.onclick = er2);
      }
      al2(t, r);
      var o;
      t = null;
      for (d in l2) if (!r.hasOwnProperty(d) && l2.hasOwnProperty(d) && l2[d] != null) if (d === "style") {
        var u = l2[d];
        for (o in u) u.hasOwnProperty(o) && (t || (t = {}), t[o] = "");
      } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (ot2.hasOwnProperty(d) ? i3 || (i3 = []) : (i3 = i3 || []).push(d, null));
      for (d in r) {
        var s = r[d];
        if (u = l2?.[d], r.hasOwnProperty(d) && s !== u && (s != null || u != null)) if (d === "style") if (u) {
          for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (t || (t = {}), t[o] = "");
          for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (t || (t = {}), t[o] = s[o]);
        } else t || (i3 || (i3 = []), i3.push(d, t)), t = s;
        else d === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i3 = i3 || []).push(d, s)) : d === "children" ? typeof s != "string" && typeof s != "number" || (i3 = i3 || []).push(d, "" + s) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (ot2.hasOwnProperty(d) ? (s != null && d === "onScroll" && z3("scroll", e), i3 || u === s || (i3 = [])) : typeof s == "object" && s !== null && s.$$typeof === Gl2 ? s.toString() : (i3 = i3 || []).push(d, s));
      }
      t && (i3 = i3 || []).push("style", t);
      var d = i3;
      (n.updateQueue = d) && (n.flags |= 4);
    }
  };
  os2 = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function Bn2(e, n) {
    if (!de4) switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; ) n.alternate !== null && (t = n), n = n.sibling;
        t === null ? e.tail = null : t.sibling = null;
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
        r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function nf(e, n, t) {
    var r = n.pendingProps;
    switch (n.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;
      case 1:
        return J4(n.type) && tr2(), null;
      case 3:
        return _n2(), O2(Z4), O2($2), yi(), r = n.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (It2(n) ? n.flags |= 4 : r.hydrate || (n.flags |= 256)), Ll2(n), null;
      case 5:
        vi2(n);
        var l2 = $e3(gt2.current);
        if (t = n.type, e !== null && n.stateNode != null) is2(e, n, t, r, l2), e.ref !== n.ref && (n.flags |= 128);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(v2(166));
            return null;
          }
          if (e = $e3(ce4.current), It2(n)) {
            r = n.stateNode, t = n.type;
            var i3 = n.memoizedProps;
            switch (r[Ce3] = n, r[nr2] = i3, t) {
              case "dialog":
                z3("cancel", r), z3("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                z3("load", r);
                break;
              case "video":
              case "audio":
                for (e = 0; e < $n2.length; e++) z3($n2[e], r);
                break;
              case "source":
                z3("error", r);
                break;
              case "img":
              case "image":
              case "link":
                z3("error", r), z3("load", r);
                break;
              case "details":
                z3("toggle", r);
                break;
              case "input":
                Ui2(r, i3), z3("invalid", r);
                break;
              case "select":
                r._wrapperState = {
                  wasMultiple: !!i3.multiple
                }, z3("invalid", r);
                break;
              case "textarea":
                Bi2(r, i3), z3("invalid", r);
            }
            al2(t, i3), e = null;
            for (var o in i3) i3.hasOwnProperty(o) && (l2 = i3[o], o === "children" ? typeof l2 == "string" ? r.textContent !== l2 && (e = [
              "children",
              l2
            ]) : typeof l2 == "number" && r.textContent !== "" + l2 && (e = [
              "children",
              "" + l2
            ]) : ot2.hasOwnProperty(o) && l2 != null && o === "onScroll" && z3("scroll", r));
            switch (t) {
              case "input":
                Nt2(r), Vi2(r, i3, true);
                break;
              case "textarea":
                Nt2(r), Hi2(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i3.onClick == "function" && (r.onclick = er2);
            }
            r = e, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            switch (o = l2.nodeType === 9 ? l2 : l2.ownerDocument, e === ul2.html && (e = bo2(t)), e === ul2.html ? t === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(t, {
              is: r.is
            }) : (e = o.createElement(t), t === "select" && (o = e, r.multiple ? o.multiple = true : r.size && (o.size = r.size))) : e = o.createElementNS(e, t), e[Ce3] = n, e[nr2] = r, ls2(e, n, false, false), n.stateNode = e, o = fl2(t, r), t) {
              case "dialog":
                z3("cancel", e), z3("close", e), l2 = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                z3("load", e), l2 = r;
                break;
              case "video":
              case "audio":
                for (l2 = 0; l2 < $n2.length; l2++) z3($n2[l2], e);
                l2 = r;
                break;
              case "source":
                z3("error", e), l2 = r;
                break;
              case "img":
              case "image":
              case "link":
                z3("error", e), z3("load", e), l2 = r;
                break;
              case "details":
                z3("toggle", e), l2 = r;
                break;
              case "input":
                Ui2(e, r), l2 = tl2(e, r), z3("invalid", e);
                break;
              case "option":
                l2 = il2(e, r);
                break;
              case "select":
                e._wrapperState = {
                  wasMultiple: !!r.multiple
                }, l2 = M2({}, r, {
                  value: void 0
                }), z3("invalid", e);
                break;
              case "textarea":
                Bi2(e, r), l2 = ol2(e, r), z3("invalid", e);
                break;
              default:
                l2 = r;
            }
            al2(t, l2);
            var u = l2;
            for (i3 in u) if (u.hasOwnProperty(i3)) {
              var s = u[i3];
              i3 === "style" ? tu(e, s) : i3 === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && eu(e, s)) : i3 === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && ut2(e, s) : typeof s == "number" && ut2(e, "" + s) : i3 !== "suppressContentEditableWarning" && i3 !== "suppressHydrationWarning" && i3 !== "autoFocus" && (ot2.hasOwnProperty(i3) ? s != null && i3 === "onScroll" && z3("scroll", e) : s != null && Al2(e, i3, s, o));
            }
            switch (t) {
              case "input":
                Nt2(e), Vi2(e, r, false);
                break;
              case "textarea":
                Nt2(e), Hi2(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + De2(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i3 = r.value, i3 != null ? pn2(e, !!r.multiple, i3, false) : r.defaultValue != null && pn2(e, !!r.multiple, r.defaultValue, true);
                break;
              default:
                typeof l2.onClick == "function" && (e.onclick = er2);
            }
            Ru(t, r) && (n.flags |= 4);
          }
          n.ref !== null && (n.flags |= 128);
        }
        return null;
      case 6:
        if (e && n.stateNode != null) os2(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(v2(166));
          t = $e3(gt2.current), $e3(ce4.current), It2(n) ? (r = n.stateNode, t = n.memoizedProps, r[Ce3] = n, r.nodeValue !== t && (n.flags |= 4)) : (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Ce3] = n, n.stateNode = r);
        }
        return null;
      case 13:
        return O2(R), r = n.memoizedState, (n.flags & 64) !== 0 ? (n.lanes = t, n) : (r = r !== null, t = false, e === null ? n.memoizedProps.fallback !== void 0 && It2(n) : t = e.memoizedState !== null, r && !t && (n.mode & 2) !== 0 && (e === null && n.memoizedProps.unstable_avoidThisFallback !== true || (R.current & 1) !== 0 ? B4 === 0 && (B4 = 3) : ((B4 === 0 || B4 === 3) && (B4 = 4), Y3 === null || (xt2 & 134217727) === 0 && (Ln2 & 134217727) === 0 || wn2(Y3, Q4))), (r || t) && (n.flags |= 4), null);
      case 4:
        return _n2(), Ll2(n), e === null && zu(n.stateNode.containerInfo), null;
      case 10:
        return mi2(n), null;
      case 17:
        return J4(n.type) && tr2(), null;
      case 19:
        if (O2(R), r = n.memoizedState, r === null) return null;
        if (i3 = (n.flags & 64) !== 0, o = r.rendering, o === null) if (i3) Bn2(r, false);
        else {
          if (B4 !== 0 || e !== null && (e.flags & 64) !== 0) for (e = n.child; e !== null; ) {
            if (o = sr2(e), o !== null) {
              for (n.flags |= 64, Bn2(r, false), i3 = o.updateQueue, i3 !== null && (n.updateQueue = i3, n.flags |= 4), r.lastEffect === null && (n.firstEffect = null), n.lastEffect = r.lastEffect, r = t, t = n.child; t !== null; ) i3 = t, e = r, i3.flags &= 2, i3.nextEffect = null, i3.firstEffect = null, i3.lastEffect = null, o = i3.alternate, o === null ? (i3.childLanes = 0, i3.lanes = e, i3.child = null, i3.memoizedProps = null, i3.memoizedState = null, i3.updateQueue = null, i3.dependencies = null, i3.stateNode = null) : (i3.childLanes = o.childLanes, i3.lanes = o.lanes, i3.child = o.child, i3.memoizedProps = o.memoizedProps, i3.memoizedState = o.memoizedState, i3.updateQueue = o.updateQueue, i3.type = o.type, e = o.dependencies, i3.dependencies = e === null ? null : {
                lanes: e.lanes,
                firstContext: e.firstContext
              }), t = t.sibling;
              return D3(R, R.current & 1 | 2), n.child;
            }
            e = e.sibling;
          }
          r.tail !== null && A3() > Il2 && (n.flags |= 64, i3 = true, Bn2(r, false), n.lanes = 33554432);
        }
        else {
          if (!i3) if (e = sr2(o), e !== null) {
            if (n.flags |= 64, i3 = true, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), Bn2(r, true), r.tail === null && r.tailMode === "hidden" && !o.alternate && !de4) return n = n.lastEffect = r.lastEffect, n !== null && (n.nextEffect = null), null;
          } else 2 * A3() - r.renderingStartTime > Il2 && t !== 1073741824 && (n.flags |= 64, i3 = true, Bn2(r, false), n.lanes = 33554432);
          r.isBackwards ? (o.sibling = n.child, n.child = o) : (t = r.last, t !== null ? t.sibling = o : n.child = o, r.last = o);
        }
        return r.tail !== null ? (t = r.tail, r.rendering = t, r.tail = t.sibling, r.lastEffect = n.lastEffect, r.renderingStartTime = A3(), t.sibling = null, n = R.current, D3(R, i3 ? n & 1 | 2 : n & 1), t) : null;
      case 23:
      case 24:
        return Pi2(), e !== null && e.memoizedState !== null != (n.memoizedState !== null) && r.mode !== "unstable-defer-without-hiding" && (n.flags |= 4), null;
    }
    throw Error(v2(156, n.tag));
  }
  function tf(e) {
    switch (e.tag) {
      case 1:
        J4(e.type) && tr2();
        var n = e.flags;
        return n & 4096 ? (e.flags = n & -4097 | 64, e) : null;
      case 3:
        if (_n2(), O2(Z4), O2($2), yi(), n = e.flags, (n & 64) !== 0) throw Error(v2(285));
        return e.flags = n & -4097 | 64, e;
      case 5:
        return vi2(e), null;
      case 13:
        return O2(R), n = e.flags, n & 4096 ? (e.flags = n & -4097 | 64, e) : null;
      case 19:
        return O2(R), null;
      case 4:
        return _n2(), null;
      case 10:
        return mi2(e), null;
      case 23:
      case 24:
        return Pi2(), null;
      default:
        return null;
    }
  }
  function xi(e, n) {
    try {
      var t = "", r = n;
      do
        t += Fs2(r), r = r.return;
      while (r);
      var l2 = t;
    } catch (i3) {
      l2 = `
Error generating stack: ` + i3.message + `
` + i3.stack;
    }
    return {
      value: e,
      source: n,
      stack: l2
    };
  }
  function zl2(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var rf = typeof WeakMap == "function" ? WeakMap : Map;
  function us2(e, n, t) {
    t = Le3(-1, t), t.tag = 3, t.payload = {
      element: null
    };
    var r = n.value;
    return t.callback = function() {
      hr2 || (hr2 = true, Fl2 = r), zl2(e, n);
    }, t;
  }
  function ss2(e, n, t) {
    t = Le3(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l2 = n.value;
      t.payload = function() {
        return zl2(e, n), r(l2);
      };
    }
    var i3 = e.stateNode;
    return i3 !== null && typeof i3.componentDidCatch == "function" && (t.callback = function() {
      typeof r != "function" && (fe4 === null ? fe4 = /* @__PURE__ */ new Set([
        this
      ]) : fe4.add(this), zl2(e, n));
      var o = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: o !== null ? o : ""
      });
    }), t;
  }
  var lf = typeof WeakSet == "function" ? WeakSet : Set;
  function Uo2(e) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (t) {
      Re3(e, t);
    }
    else n.current = null;
  }
  function of(e, n) {
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (n.flags & 256 && e !== null) {
          var t = e.memoizedProps, r = e.memoizedState;
          e = n.stateNode, n = e.getSnapshotBeforeUpdate(n.elementType === n.type ? t : oe2(n.type, t), r), e.__reactInternalSnapshotBeforeUpdate = n;
        }
        return;
      case 3:
        n.flags & 256 && fi2(n.stateNode.containerInfo);
        return;
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(v2(163));
  }
  function uf(e, n, t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        if (n = t.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
          e = n = n.next;
          do {
            if ((e.tag & 3) === 3) {
              var r = e.create;
              e.destroy = r();
            }
            e = e.next;
          } while (e !== n);
        }
        if (n = t.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
          e = n = n.next;
          do {
            var l2 = e;
            r = l2.next, l2 = l2.tag, (l2 & 4) !== 0 && (l2 & 1) !== 0 && (ys2(t, e), hf(t, e)), e = r;
          } while (e !== n);
        }
        return;
      case 1:
        e = t.stateNode, t.flags & 4 && (n === null ? e.componentDidMount() : (r = t.elementType === t.type ? n.memoizedProps : oe2(t.type, n.memoizedProps), e.componentDidUpdate(r, n.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), n = t.updateQueue, n !== null && wo2(t, n, e);
        return;
      case 3:
        if (n = t.updateQueue, n !== null) {
          if (e = null, t.child !== null) switch (t.child.tag) {
            case 5:
              e = t.child.stateNode;
              break;
            case 1:
              e = t.child.stateNode;
          }
          wo2(t, n, e);
        }
        return;
      case 5:
        e = t.stateNode, n === null && t.flags & 4 && Ru(t.type, t.memoizedProps) && e.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        t.memoizedState === null && (t = t.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null && du(t))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }
    throw Error(v2(163));
  }
  function Vo2(e, n) {
    for (var t = e; ; ) {
      if (t.tag === 5) {
        var r = t.stateNode;
        if (n) r = r.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
        else {
          r = t.stateNode;
          var l2 = t.memoizedProps.style;
          l2 = l2 != null && l2.hasOwnProperty("display") ? l2.display : null, r.style.display = nu("display", l2);
        }
      } else if (t.tag === 6) t.stateNode.nodeValue = n ? "" : t.memoizedProps;
      else if ((t.tag !== 23 && t.tag !== 24 || t.memoizedState === null || t === e) && t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  function Bo2(e, n) {
    if (Xe2 && typeof Xe2.onCommitFiberUnmount == "function") try {
      Xe2.onCommitFiberUnmount(ci2, n);
    } catch {
    }
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        if (e = n.updateQueue, e !== null && (e = e.lastEffect, e !== null)) {
          var t = e = e.next;
          do {
            var r = t, l2 = r.destroy;
            if (r = r.tag, l2 !== void 0) if ((r & 4) !== 0) ys2(n, t);
            else {
              r = n;
              try {
                l2();
              } catch (i3) {
                Re3(r, i3);
              }
            }
            t = t.next;
          } while (t !== e);
        }
        break;
      case 1:
        if (Uo2(n), e = n.stateNode, typeof e.componentWillUnmount == "function") try {
          e.props = n.memoizedProps, e.state = n.memoizedState, e.componentWillUnmount();
        } catch (i3) {
          Re3(n, i3);
        }
        break;
      case 5:
        Uo2(n);
        break;
      case 4:
        as2(e, n);
    }
  }
  function Ho2(e) {
    e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null;
  }
  function Wo2(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ao2(e) {
    e: {
      for (var n = e.return; n !== null; ) {
        if (Wo2(n)) break e;
        n = n.return;
      }
      throw Error(v2(160));
    }
    var t = n;
    switch (n = t.stateNode, t.tag) {
      case 5:
        var r = false;
        break;
      case 3:
        n = n.containerInfo, r = true;
        break;
      case 4:
        n = n.containerInfo, r = true;
        break;
      default:
        throw Error(v2(161));
    }
    t.flags & 16 && (ut2(n, ""), t.flags &= -17);
    e: n: for (t = e; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Wo2(t.return)) {
          t = null;
          break e;
        }
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue n;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) {
        t = t.stateNode;
        break e;
      }
    }
    r ? Ol2(e, t, n) : Ml2(e, t, n);
  }
  function Ol2(e, n, t) {
    var r = e.tag, l2 = r === 5 || r === 6;
    if (l2) e = l2 ? e.stateNode : e.stateNode.instance, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = er2));
    else if (r !== 4 && (e = e.child, e !== null)) for (Ol2(e, n, t), e = e.sibling; e !== null; ) Ol2(e, n, t), e = e.sibling;
  }
  function Ml2(e, n, t) {
    var r = e.tag, l2 = r === 5 || r === 6;
    if (l2) e = l2 ? e.stateNode : e.stateNode.instance, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Ml2(e, n, t), e = e.sibling; e !== null; ) Ml2(e, n, t), e = e.sibling;
  }
  function as2(e, n) {
    for (var t = n, r = false, l2, i3; ; ) {
      if (!r) {
        r = t.return;
        e: for (; ; ) {
          if (r === null) throw Error(v2(160));
          switch (l2 = r.stateNode, r.tag) {
            case 5:
              i3 = false;
              break e;
            case 3:
              l2 = l2.containerInfo, i3 = true;
              break e;
            case 4:
              l2 = l2.containerInfo, i3 = true;
              break e;
          }
          r = r.return;
        }
        r = true;
      }
      if (t.tag === 5 || t.tag === 6) {
        e: for (var o = e, u = t, s = u; ; ) if (Bo2(o, s), s.child !== null && s.tag !== 4) s.child.return = s, s = s.child;
        else {
          if (s === u) break e;
          for (; s.sibling === null; ) {
            if (s.return === null || s.return === u) break e;
            s = s.return;
          }
          s.sibling.return = s.return, s = s.sibling;
        }
        i3 ? (o = l2, u = t.stateNode, o.nodeType === 8 ? o.parentNode.removeChild(u) : o.removeChild(u)) : l2.removeChild(t.stateNode);
      } else if (t.tag === 4) {
        if (t.child !== null) {
          l2 = t.stateNode.containerInfo, i3 = true, t.child.return = t, t = t.child;
          continue;
        }
      } else if (Bo2(e, t), t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === n) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) return;
        t = t.return, t.tag === 4 && (r = false);
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  function Jr2(e, n) {
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        var t = n.updateQueue;
        if (t = t !== null ? t.lastEffect : null, t !== null) {
          var r = t = t.next;
          do
            (r.tag & 3) === 3 && (e = r.destroy, r.destroy = void 0, e !== void 0 && e()), r = r.next;
          while (r !== t);
        }
        return;
      case 1:
        return;
      case 5:
        if (t = n.stateNode, t != null) {
          r = n.memoizedProps;
          var l2 = e !== null ? e.memoizedProps : r;
          e = n.type;
          var i3 = n.updateQueue;
          if (n.updateQueue = null, i3 !== null) {
            for (t[nr2] = r, e === "input" && r.type === "radio" && r.name != null && Jo2(t, r), fl2(e, l2), n = fl2(e, r), l2 = 0; l2 < i3.length; l2 += 2) {
              var o = i3[l2], u = i3[l2 + 1];
              o === "style" ? tu(t, u) : o === "dangerouslySetInnerHTML" ? eu(t, u) : o === "children" ? ut2(t, u) : Al2(t, o, u, n);
            }
            switch (e) {
              case "input":
                rl2(t, r);
                break;
              case "textarea":
                qo2(t, r);
                break;
              case "select":
                e = t._wrapperState.wasMultiple, t._wrapperState.wasMultiple = !!r.multiple, i3 = r.value, i3 != null ? pn2(t, !!r.multiple, i3, false) : e !== !!r.multiple && (r.defaultValue != null ? pn2(t, !!r.multiple, r.defaultValue, true) : pn2(t, !!r.multiple, r.multiple ? [] : "", false));
            }
          }
        }
        return;
      case 6:
        if (n.stateNode === null) throw Error(v2(162));
        n.stateNode.nodeValue = n.memoizedProps;
        return;
      case 3:
        t = n.stateNode, t.hydrate && (t.hydrate = false, du(t.containerInfo));
        return;
      case 12:
        return;
      case 13:
        n.memoizedState !== null && (Ni2 = A3(), Vo2(n.child, true)), Qo2(n);
        return;
      case 19:
        Qo2(n);
        return;
      case 17:
        return;
      case 23:
      case 24:
        Vo2(n, n.memoizedState !== null);
        return;
    }
    throw Error(v2(163));
  }
  function Qo2(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new lf()), n.forEach(function(r) {
        var l2 = gf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l2, l2));
      });
    }
  }
  function sf(e, n) {
    return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) ? (n = n.memoizedState, n !== null && n.dehydrated === null) : false;
  }
  var af = Math.ceil, mr2 = qe3.ReactCurrentDispatcher, Ci2 = qe3.ReactCurrentOwner, x = 0, Y3 = null, j3 = null, Q4 = 0, Ze2 = 0, Rl2 = Ve2(0), B4 = 0, Tr2 = null, Tn2 = 0, xt2 = 0, Ln2 = 0, _i = 0, Dl2 = null, Ni2 = 0, Il2 = 1 / 0;
  function zn2() {
    Il2 = A3() + 500;
  }
  var g2 = null, hr2 = false, Fl2 = null, fe4 = null, je3 = false, rt2 = null, Yn2 = 90, jl2 = [], Ul2 = [], ge4 = null, lt2 = 0, Vl2 = null, Qt2 = -1, he3 = 0, $t2 = 0, it2 = null, Yt2 = false;
  function q() {
    return (x & 48) !== 0 ? A3() : Qt2 !== -1 ? Qt2 : Qt2 = A3();
  }
  function Oe3(e) {
    if (e = e.mode, (e & 2) === 0) return 1;
    if ((e & 4) === 0) return Cn2() === 99 ? 1 : 2;
    if (he3 === 0 && (he3 = Tn2), Ga2.transition !== 0) {
      $t2 !== 0 && ($t2 = Dl2 !== null ? Dl2.pendingLanes : 0), e = he3;
      var n = 4186112 & ~$t2;
      return n &= -n, n === 0 && (e = 4186112 & ~e, n = e & -e, n === 0 && (n = 8192)), n;
    }
    return e = Cn2(), (x & 4) !== 0 && e === 98 ? e = qt2(12, he3) : (e = qs2(e), e = qt2(e, he3)), e;
  }
  function Me2(e, n, t) {
    if (50 < lt2) throw lt2 = 0, Vl2 = null, Error(v2(185));
    if (e = Lr2(e, n), e === null) return null;
    Er2(e, n, t), e === Y3 && (Ln2 |= n, B4 === 4 && wn2(e, Q4));
    var r = Cn2();
    n === 1 ? (x & 8) !== 0 && (x & 48) === 0 ? Bl2(e) : (le3(e, t), x === 0 && (zn2(), pe4())) : ((x & 4) === 0 || r !== 98 && r !== 99 || (ge4 === null ? ge4 = /* @__PURE__ */ new Set([
      e
    ]) : ge4.add(e)), le3(e, t)), Dl2 = e;
  }
  function Lr2(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  function le3(e, n) {
    for (var t = e.callbackNode, r = e.suspendedLanes, l2 = e.pingedLanes, i3 = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var u = 31 - Ie4(o), s = 1 << u, d = i3[u];
      if (d === -1) {
        if ((s & r) === 0 || (s & l2) !== 0) {
          d = n, rn2(s);
          var y2 = L;
          i3[u] = 10 <= y2 ? d + 250 : 6 <= y2 ? d + 5e3 : -1;
        }
      } else d <= n && (e.expiredLanes |= s);
      o &= ~s;
    }
    if (r = ct2(e, e === Y3 ? Q4 : 0), n = L, r === 0) t !== null && (t !== Yr2 && El2(t), e.callbackNode = null, e.callbackPriority = 0);
    else {
      if (t !== null) {
        if (e.callbackPriority === n) return;
        t !== Yr2 && El2(t);
      }
      n === 15 ? (t = Bl2.bind(null, e), me4 === null ? (me4 = [
        t
      ], At2 = di2(Nr2, Hu)) : me4.push(t), t = Yr2) : n === 14 ? t = ht2(99, Bl2.bind(null, e)) : (t = bs2(n), t = ht2(t, fs2.bind(null, e))), e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function fs2(e) {
    if (Qt2 = -1, $t2 = he3 = 0, (x & 48) !== 0) throw Error(v2(327));
    var n = e.callbackNode;
    if (Be2() && e.callbackNode !== n) return null;
    var t = ct2(e, e === Y3 ? Q4 : 0);
    if (t === 0) return null;
    var r = t, l2 = x;
    x |= 16;
    var i3 = ms2();
    (Y3 !== e || Q4 !== r) && (zn2(), Sn2(e, r));
    do
      try {
        df();
        break;
      } catch (u) {
        ps2(e, u);
      }
    while (true);
    if (pi2(), mr2.current = i3, x = l2, j3 !== null ? r = 0 : (Y3 = null, Q4 = 0, r = B4), (Tn2 & Ln2) !== 0) Sn2(e, 0);
    else if (r !== 0) {
      if (r === 2 && (x |= 64, e.hydrate && (e.hydrate = false, fi2(e.containerInfo)), t = wu(e), t !== 0 && (r = Xn2(e, t))), r === 1) throw n = Tr2, Sn2(e, 0), wn2(e, t), le3(e, A3()), n;
      switch (e.finishedWork = e.current.alternate, e.finishedLanes = t, r) {
        case 0:
        case 1:
          throw Error(v2(345));
        case 2:
          He2(e);
          break;
        case 3:
          if (wn2(e, t), (t & 62914560) === t && (r = Ni2 + 500 - A3(), 10 < r)) {
            if (ct2(e, 0) !== 0) break;
            if (l2 = e.suspendedLanes, (l2 & t) !== t) {
              q(), e.pingedLanes |= e.suspendedLanes & l2;
              break;
            }
            e.timeoutHandle = fo2(He2.bind(null, e), r);
            break;
          }
          He2(e);
          break;
        case 4:
          if (wn2(e, t), (t & 4186112) === t) break;
          for (r = e.eventTimes, l2 = -1; 0 < t; ) {
            var o = 31 - Ie4(t);
            i3 = 1 << o, o = r[o], o > l2 && (l2 = o), t &= ~i3;
          }
          if (t = l2, t = A3() - t, t = (120 > t ? 120 : 480 > t ? 480 : 1080 > t ? 1080 : 1920 > t ? 1920 : 3e3 > t ? 3e3 : 4320 > t ? 4320 : 1960 * af(t / 1960)) - t, 10 < t) {
            e.timeoutHandle = fo2(He2.bind(null, e), t);
            break;
          }
          He2(e);
          break;
        case 5:
          He2(e);
          break;
        default:
          throw Error(v2(329));
      }
    }
    return le3(e, A3()), e.callbackNode === n ? fs2.bind(null, e) : null;
  }
  function wn2(e, n) {
    for (n &= ~_i, n &= ~Ln2, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - Ie4(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function Bl2(e) {
    if ((x & 48) !== 0) throw Error(v2(327));
    if (Be2(), e === Y3 && (e.expiredLanes & Q4) !== 0) {
      var n = Q4, t = Xn2(e, n);
      (Tn2 & Ln2) !== 0 && (n = ct2(e, n), t = Xn2(e, n));
    } else n = ct2(e, 0), t = Xn2(e, n);
    if (e.tag !== 0 && t === 2 && (x |= 64, e.hydrate && (e.hydrate = false, fi2(e.containerInfo)), n = wu(e), n !== 0 && (t = Xn2(e, n))), t === 1) throw t = Tr2, Sn2(e, 0), wn2(e, n), le3(e, A3()), t;
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, He2(e), le3(e, A3()), null;
  }
  function ff() {
    if (ge4 !== null) {
      var e = ge4;
      ge4 = null, e.forEach(function(n) {
        n.expiredLanes |= 24 & n.pendingLanes, le3(n, A3());
      });
    }
    pe4();
  }
  function cs2(e, n) {
    var t = x;
    x |= 1;
    try {
      return e(n);
    } finally {
      x = t, x === 0 && (zn2(), pe4());
    }
  }
  function ds2(e, n) {
    var t = x;
    x &= -2, x |= 8;
    try {
      return e(n);
    } finally {
      x = t, x === 0 && (zn2(), pe4());
    }
  }
  function jt2(e, n) {
    D3(Rl2, Ze2), Ze2 |= n, Tn2 |= n;
  }
  function Pi2() {
    Ze2 = Rl2.current, O2(Rl2);
  }
  function Sn2(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Aa2(t)), j3 !== null) for (t = j3.return; t !== null; ) {
      var r = t;
      switch (r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && tr2();
          break;
        case 3:
          _n2(), O2(Z4), O2($2), yi();
          break;
        case 5:
          vi2(r);
          break;
        case 4:
          _n2();
          break;
        case 13:
          O2(R);
          break;
        case 19:
          O2(R);
          break;
        case 10:
          mi2(r);
          break;
        case 23:
        case 24:
          Pi2();
      }
      t = t.return;
    }
    Y3 = e, j3 = Ue2(e.current, null), Q4 = Ze2 = Tn2 = n, B4 = 0, Tr2 = null, _i = Ln2 = xt2 = 0;
  }
  function ps2(e, n) {
    do {
      var t = j3;
      try {
        if (pi2(), nt2.current = pr2, ar2) {
          for (var r = I2.memoizedState; r !== null; ) {
            var l2 = r.queue;
            l2 !== null && (l2.pending = null), r = r.next;
          }
          ar2 = false;
        }
        if (wt2 = 0, V4 = W3 = I2 = null, tt2 = false, Ci2.current = null, t === null || t.return === null) {
          B4 = 1, Tr2 = n, j3 = null;
          break;
        }
        e: {
          var i3 = e, o = t.return, u = t, s = n;
          if (n = Q4, u.flags |= 2048, u.firstEffect = u.lastEffect = null, s !== null && typeof s == "object" && typeof s.then == "function") {
            var d = s;
            if ((u.mode & 2) === 0) {
              var y2 = u.alternate;
              y2 ? (u.updateQueue = y2.updateQueue, u.memoizedState = y2.memoizedState, u.lanes = y2.lanes) : (u.updateQueue = null, u.memoizedState = null);
            }
            var C2 = (R.current & 1) !== 0, h3 = o;
            do {
              var S2;
              if (S2 = h3.tag === 13) {
                var k2 = h3.memoizedState;
                if (k2 !== null) S2 = k2.dehydrated !== null;
                else {
                  var E2 = h3.memoizedProps;
                  S2 = E2.fallback === void 0 ? false : E2.unstable_avoidThisFallback !== true ? true : !C2;
                }
              }
              if (S2) {
                var c = h3.updateQueue;
                if (c === null) {
                  var a = /* @__PURE__ */ new Set();
                  a.add(d), h3.updateQueue = a;
                } else c.add(d);
                if ((h3.mode & 2) === 0) {
                  if (h3.flags |= 64, u.flags |= 16384, u.flags &= -2981, u.tag === 1) if (u.alternate === null) u.tag = 17;
                  else {
                    var f = Le3(-1, 1);
                    f.tag = 2, ze2(u, f);
                  }
                  u.lanes |= 1;
                  break e;
                }
                s = void 0, u = n;
                var p = i3.pingCache;
                if (p === null ? (p = i3.pingCache = new rf(), s = /* @__PURE__ */ new Set(), p.set(d, s)) : (s = p.get(d), s === void 0 && (s = /* @__PURE__ */ new Set(), p.set(d, s))), !s.has(u)) {
                  s.add(u);
                  var m = yf.bind(null, i3, d, u);
                  d.then(m, m);
                }
                h3.flags |= 4096, h3.lanes = n;
                break e;
              }
              h3 = h3.return;
            } while (h3 !== null);
            s = Error((dn2(u.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
          }
          B4 !== 5 && (B4 = 2), s = xi(s, u), h3 = o;
          do {
            switch (h3.tag) {
              case 3:
                i3 = s, h3.flags |= 4096, n &= -n, h3.lanes |= n;
                var _ = us2(h3, i3, n);
                go2(h3, _);
                break e;
              case 1:
                i3 = s;
                var w = h3.type, N3 = h3.stateNode;
                if ((h3.flags & 64) === 0 && (typeof w.getDerivedStateFromError == "function" || N3 !== null && typeof N3.componentDidCatch == "function" && (fe4 === null || !fe4.has(N3)))) {
                  h3.flags |= 4096, n &= -n, h3.lanes |= n;
                  var T3 = ss2(h3, i3, n);
                  go2(h3, T3);
                  break e;
                }
            }
            h3 = h3.return;
          } while (h3 !== null);
        }
        vs2(t);
      } catch (P) {
        n = P, j3 === t && t !== null && (j3 = t = t.return);
        continue;
      }
      break;
    } while (true);
  }
  function ms2() {
    var e = mr2.current;
    return mr2.current = pr2, e === null ? pr2 : e;
  }
  function Xn2(e, n) {
    var t = x;
    x |= 16;
    var r = ms2();
    Y3 === e && Q4 === n || Sn2(e, n);
    do
      try {
        cf();
        break;
      } catch (l2) {
        ps2(e, l2);
      }
    while (true);
    if (pi2(), x = t, mr2.current = r, j3 !== null) throw Error(v2(261));
    return Y3 = null, Q4 = 0, B4;
  }
  function cf() {
    for (; j3 !== null; ) hs2(j3);
  }
  function df() {
    for (; j3 !== null && !Ya2(); ) hs2(j3);
  }
  function hs2(e) {
    var n = gs2(e.alternate, e, Ze2);
    e.memoizedProps = e.pendingProps, n === null ? vs2(e) : j3 = n, Ci2.current = null;
  }
  function vs2(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, (n.flags & 2048) === 0) {
        if (t = nf(t, n, Ze2), t !== null) {
          j3 = t;
          return;
        }
        if (t = n, t.tag !== 24 && t.tag !== 23 || t.memoizedState === null || (Ze2 & 1073741824) !== 0 || (t.mode & 4) === 0) {
          for (var r = 0, l2 = t.child; l2 !== null; ) r |= l2.lanes | l2.childLanes, l2 = l2.sibling;
          t.childLanes = r;
        }
        e !== null && (e.flags & 2048) === 0 && (e.firstEffect === null && (e.firstEffect = n.firstEffect), n.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = n.firstEffect), e.lastEffect = n.lastEffect), 1 < n.flags && (e.lastEffect !== null ? e.lastEffect.nextEffect = n : e.firstEffect = n, e.lastEffect = n));
      } else {
        if (t = tf(n), t !== null) {
          t.flags &= 2047, j3 = t;
          return;
        }
        e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048);
      }
      if (n = n.sibling, n !== null) {
        j3 = n;
        return;
      }
      j3 = n = e;
    } while (n !== null);
    B4 === 0 && (B4 = 5);
  }
  function He2(e) {
    var n = Cn2();
    return Ge2(99, pf.bind(null, e, n)), null;
  }
  function pf(e, n) {
    do
      Be2();
    while (rt2 !== null);
    if ((x & 48) !== 0) throw Error(v2(327));
    var t = e.finishedWork;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(v2(177));
    e.callbackNode = null;
    var r = t.lanes | t.childLanes, l2 = r, i3 = e.pendingLanes & ~l2;
    e.pendingLanes = l2, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= l2, e.mutableReadLanes &= l2, e.entangledLanes &= l2, l2 = e.entanglements;
    for (var o = e.eventTimes, u = e.expirationTimes; 0 < i3; ) {
      var s = 31 - Ie4(i3), d = 1 << s;
      l2[s] = 0, o[s] = -1, u[s] = -1, i3 &= ~d;
    }
    if (ge4 !== null && (r & 24) === 0 && ge4.has(e) && ge4.delete(e), e === Y3 && (j3 = Y3 = null, Q4 = 0), 1 < t.flags ? t.lastEffect !== null ? (t.lastEffect.nextEffect = t, r = t.firstEffect) : r = t : r = t.firstEffect, r !== null) {
      if (l2 = x, x |= 32, Ci2.current = null, Ar2 = Vt, o = lo2(), vl2(o)) {
        if ("selectionStart" in o) u = {
          start: o.selectionStart,
          end: o.selectionEnd
        };
        else e: if (u = (u = o.ownerDocument) && u.defaultView || globalThis, (d = u.getSelection && u.getSelection()) && d.rangeCount !== 0) {
          u = d.anchorNode, i3 = d.anchorOffset, s = d.focusNode, d = d.focusOffset;
          try {
            u.nodeType, s.nodeType;
          } catch {
            u = null;
            break e;
          }
          var y2 = 0, C2 = -1, h3 = -1, S2 = 0, k2 = 0, E2 = o, c = null;
          n: for (; ; ) {
            for (var a; E2 !== u || i3 !== 0 && E2.nodeType !== 3 || (C2 = y2 + i3), E2 !== s || d !== 0 && E2.nodeType !== 3 || (h3 = y2 + d), E2.nodeType === 3 && (y2 += E2.nodeValue.length), (a = E2.firstChild) !== null; ) c = E2, E2 = a;
            for (; ; ) {
              if (E2 === o) break n;
              if (c === u && ++S2 === i3 && (C2 = y2), c === s && ++k2 === d && (h3 = y2), (a = E2.nextSibling) !== null) break;
              E2 = c, c = E2.parentNode;
            }
            E2 = a;
          }
          u = C2 === -1 || h3 === -1 ? null : {
            start: C2,
            end: h3
          };
        } else u = null;
        u = u || {
          start: 0,
          end: 0
        };
      } else u = null;
      Qr2 = {
        focusedElem: o,
        selectionRange: u
      }, Vt = false, it2 = null, Yt2 = false, g2 = r;
      do
        try {
          mf();
        } catch (P) {
          if (g2 === null) throw Error(v2(330));
          Re3(g2, P), g2 = g2.nextEffect;
        }
      while (g2 !== null);
      it2 = null, g2 = r;
      do
        try {
          for (o = e; g2 !== null; ) {
            var f = g2.flags;
            if (f & 16 && ut2(g2.stateNode, ""), f & 128) {
              var p = g2.alternate;
              if (p !== null) {
                var m = p.ref;
                m !== null && (typeof m == "function" ? m(null) : m.current = null);
              }
            }
            switch (f & 1038) {
              case 2:
                Ao2(g2), g2.flags &= -3;
                break;
              case 6:
                Ao2(g2), g2.flags &= -3, Jr2(g2.alternate, g2);
                break;
              case 1024:
                g2.flags &= -1025;
                break;
              case 1028:
                g2.flags &= -1025, Jr2(g2.alternate, g2);
                break;
              case 4:
                Jr2(g2.alternate, g2);
                break;
              case 8:
                u = g2, as2(o, u);
                var _ = u.alternate;
                Ho2(u), _ !== null && Ho2(_);
            }
            g2 = g2.nextEffect;
          }
        } catch (P) {
          if (g2 === null) throw Error(v2(330));
          Re3(g2, P), g2 = g2.nextEffect;
        }
      while (g2 !== null);
      if (m = Qr2, p = lo2(), f = m.focusedElem, o = m.selectionRange, p !== f && f && f.ownerDocument && Pu(f.ownerDocument.documentElement, f)) {
        for (o !== null && vl2(f) && (p = o.start, m = o.end, m === void 0 && (m = p), "selectionStart" in f ? (f.selectionStart = p, f.selectionEnd = Math.min(m, f.value.length)) : (m = (p = f.ownerDocument || document) && p.defaultView || globalThis, m.getSelection && (m = m.getSelection(), u = f.textContent.length, _ = Math.min(o.start, u), o = o.end === void 0 ? _ : Math.min(o.end, u), !m.extend && _ > o && (u = o, o = _, _ = u), u = ro2(f, _), i3 = ro2(f, o), u && i3 && (m.rangeCount !== 1 || m.anchorNode !== u.node || m.anchorOffset !== u.offset || m.focusNode !== i3.node || m.focusOffset !== i3.offset) && (p = p.createRange(), p.setStart(u.node, u.offset), m.removeAllRanges(), _ > o ? (m.addRange(p), m.extend(i3.node, i3.offset)) : (p.setEnd(i3.node, i3.offset), m.addRange(p)))))), p = [], m = f; m = m.parentNode; ) m.nodeType === 1 && p.push({
          element: m,
          left: m.scrollLeft,
          top: m.scrollTop
        });
        for (typeof f.focus == "function" && f.focus(), f = 0; f < p.length; f++) m = p[f], m.element.scrollLeft = m.left, m.element.scrollTop = m.top;
      }
      Vt = !!Ar2, Qr2 = Ar2 = null, e.current = t, g2 = r;
      do
        try {
          for (f = e; g2 !== null; ) {
            var w = g2.flags;
            if (w & 36 && uf(f, g2.alternate, g2), w & 128) {
              p = void 0;
              var N3 = g2.ref;
              if (N3 !== null) {
                var T3 = g2.stateNode;
                switch (g2.tag) {
                  case 5:
                    p = T3;
                    break;
                  default:
                    p = T3;
                }
                typeof N3 == "function" ? N3(p) : N3.current = p;
              }
            }
            g2 = g2.nextEffect;
          }
        } catch (P) {
          if (g2 === null) throw Error(v2(330));
          Re3(g2, P), g2 = g2.nextEffect;
        }
      while (g2 !== null);
      g2 = null, Ka2(), x = l2;
    } else e.current = t;
    if (je3) je3 = false, rt2 = e, Yn2 = n;
    else for (g2 = r; g2 !== null; ) n = g2.nextEffect, g2.nextEffect = null, g2.flags & 8 && (w = g2, w.sibling = null, w.stateNode = null), g2 = n;
    if (r = e.pendingLanes, r === 0 && (fe4 = null), r === 1 ? e === Vl2 ? lt2++ : (lt2 = 0, Vl2 = e) : lt2 = 0, t = t.stateNode, Xe2 && typeof Xe2.onCommitFiberRoot == "function") try {
      Xe2.onCommitFiberRoot(ci2, t, void 0, (t.current.flags & 64) === 64);
    } catch {
    }
    if (le3(e, A3()), hr2) throw hr2 = false, e = Fl2, Fl2 = null, e;
    return (x & 8) !== 0 || pe4(), null;
  }
  function mf() {
    for (; g2 !== null; ) {
      var e = g2.alternate;
      Yt2 || it2 === null || ((g2.flags & 8) !== 0 ? Qi2(g2, it2) && (Yt2 = true) : g2.tag === 13 && sf(e, g2) && Qi2(g2, it2) && (Yt2 = true));
      var n = g2.flags;
      (n & 256) !== 0 && of(e, g2), (n & 512) === 0 || je3 || (je3 = true, ht2(97, function() {
        return Be2(), null;
      })), g2 = g2.nextEffect;
    }
  }
  function Be2() {
    if (Yn2 !== 90) {
      var e = 97 < Yn2 ? 97 : Yn2;
      return Yn2 = 90, Ge2(e, vf);
    }
    return false;
  }
  function hf(e, n) {
    jl2.push(n, e), je3 || (je3 = true, ht2(97, function() {
      return Be2(), null;
    }));
  }
  function ys2(e, n) {
    Ul2.push(n, e), je3 || (je3 = true, ht2(97, function() {
      return Be2(), null;
    }));
  }
  function vf() {
    if (rt2 === null) return false;
    var e = rt2;
    if (rt2 = null, (x & 48) !== 0) throw Error(v2(331));
    var n = x;
    x |= 32;
    var t = Ul2;
    Ul2 = [];
    for (var r = 0; r < t.length; r += 2) {
      var l2 = t[r], i3 = t[r + 1], o = l2.destroy;
      if (l2.destroy = void 0, typeof o == "function") try {
        o();
      } catch (s) {
        if (i3 === null) throw Error(v2(330));
        Re3(i3, s);
      }
    }
    for (t = jl2, jl2 = [], r = 0; r < t.length; r += 2) {
      l2 = t[r], i3 = t[r + 1];
      try {
        var u = l2.create;
        l2.destroy = u();
      } catch (s) {
        if (i3 === null) throw Error(v2(330));
        Re3(i3, s);
      }
    }
    for (u = e.current.firstEffect; u !== null; ) e = u.nextEffect, u.nextEffect = null, u.flags & 8 && (u.sibling = null, u.stateNode = null), u = e;
    return x = n, pe4(), true;
  }
  function $o2(e, n, t) {
    n = xi(t, n), n = us2(e, n, 1), ze2(e, n), n = q(), e = Lr2(e, 1), e !== null && (Er2(e, 1, n), le3(e, n));
  }
  function Re3(e, n) {
    if (e.tag === 3) $o2(e, e, n);
    else for (var t = e.return; t !== null; ) {
      if (t.tag === 3) {
        $o2(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (fe4 === null || !fe4.has(r))) {
          e = xi(n, e);
          var l2 = ss2(t, e, 1);
          if (ze2(t, l2), l2 = q(), t = Lr2(t, 1), t !== null) Er2(t, 1, l2), le3(t, l2);
          else if (typeof r.componentDidCatch == "function" && (fe4 === null || !fe4.has(r))) try {
            r.componentDidCatch(n, e);
          } catch {
          }
          break;
        }
      }
      t = t.return;
    }
  }
  function yf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = q(), e.pingedLanes |= e.suspendedLanes & t, Y3 === e && (Q4 & t) === t && (B4 === 4 || B4 === 3 && (Q4 & 62914560) === Q4 && 500 > A3() - Ni2 ? Sn2(e, 0) : _i |= t), le3(e, n);
  }
  function gf(e, n) {
    var t = e.stateNode;
    t !== null && t.delete(n), n = 0, n === 0 && (n = e.mode, (n & 2) === 0 ? n = 1 : (n & 4) === 0 ? n = Cn2() === 99 ? 1 : 2 : (he3 === 0 && (he3 = Tn2), n = ln2(62914560 & ~he3), n === 0 && (n = 4194304))), t = q(), e = Lr2(e, n), e !== null && (Er2(e, n, t), le3(e, t));
  }
  var gs2;
  gs2 = function(e, n, t) {
    var r = n.lanes;
    if (e !== null) if (e.memoizedProps !== n.pendingProps || Z4.current) ue2 = true;
    else if ((t & r) !== 0) ue2 = (e.flags & 16384) !== 0;
    else {
      switch (ue2 = false, n.tag) {
        case 3:
          Oo2(n), Kr2();
          break;
        case 5:
          ko2(n);
          break;
        case 1:
          J4(n.type) && Wt2(n);
          break;
        case 4:
          Cl2(n, n.stateNode.containerInfo);
          break;
        case 10:
          r = n.memoizedProps.value;
          var l2 = n.type._context;
          D3(rr2, l2._currentValue), l2._currentValue = r;
          break;
        case 13:
          if (n.memoizedState !== null) return (t & n.child.childLanes) !== 0 ? Mo2(e, n, t) : (D3(R, R.current & 1), n = ye4(e, n, t), n !== null ? n.sibling : null);
          D3(R, R.current & 1);
          break;
        case 19:
          if (r = (t & n.childLanes) !== 0, (e.flags & 64) !== 0) {
            if (r) return jo2(e, n, t);
            n.flags |= 64;
          }
          if (l2 = n.memoizedState, l2 !== null && (l2.rendering = null, l2.tail = null, l2.lastEffect = null), D3(R, R.current), r) break;
          return null;
        case 23:
        case 24:
          return n.lanes = 0, Gr2(e, n, t);
      }
      return ye4(e, n, t);
    }
    else ue2 = false;
    switch (n.lanes = 0, n.tag) {
      case 2:
        if (r = n.type, e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), e = n.pendingProps, l2 = xn2(n, $2.current), yn2(n, t), l2 = wi2(null, n, r, e, l2, t), n.flags |= 1, typeof l2 == "object" && l2 !== null && typeof l2.render == "function" && l2.$$typeof === void 0) {
          if (n.tag = 1, n.memoizedState = null, n.updateQueue = null, J4(r)) {
            var i3 = true;
            Wt2(n);
          } else i3 = false;
          n.memoizedState = l2.state !== null && l2.state !== void 0 ? l2.state : null, hi2(n);
          var o = r.getDerivedStateFromProps;
          typeof o == "function" && or2(n, r, o, e), l2.updater = Pr2, n.stateNode = l2, l2._reactInternals = n, xl2(n, r, e, t), n = Tl2(null, n, r, true, i3, t);
        } else n.tag = 0, G4(null, n, l2, t), n = n.child;
        return n;
      case 16:
        l2 = n.elementType;
        e: {
          switch (e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), e = n.pendingProps, i3 = l2._init, l2 = i3(l2._payload), n.type = l2, i3 = n.tag = Sf(l2), e = oe2(l2, e), i3) {
            case 0:
              n = Pl2(null, n, l2, e, t);
              break e;
            case 1:
              n = zo2(null, n, l2, e, t);
              break e;
            case 11:
              n = To2(null, n, l2, e, t);
              break e;
            case 14:
              n = Lo2(null, n, l2, oe2(l2.type, e), r, t);
              break e;
          }
          throw Error(v2(306, l2, ""));
        }
        return n;
      case 0:
        return r = n.type, l2 = n.pendingProps, l2 = n.elementType === r ? l2 : oe2(r, l2), Pl2(e, n, r, l2, t);
      case 1:
        return r = n.type, l2 = n.pendingProps, l2 = n.elementType === r ? l2 : oe2(r, l2), zo2(e, n, r, l2, t);
      case 3:
        if (Oo2(n), r = n.updateQueue, e === null || r === null) throw Error(v2(282));
        if (r = n.pendingProps, l2 = n.memoizedState, l2 = l2 !== null ? l2.element : null, Au(e, n), vt2(n, r, null, t), r = n.memoizedState.element, r === l2) Kr2(), n = ye4(e, n, t);
        else {
          if (l2 = n.stateNode, (i3 = l2.hydrate) && (_e4 = vn2(n.stateNode.containerInfo.firstChild), ve4 = n, i3 = de4 = true), i3) {
            if (e = l2.mutableSourceEagerHydrationData, e != null) for (l2 = 0; l2 < e.length; l2 += 2) i3 = e[l2], i3._workInProgressVersionPrimary = e[l2 + 1], gn2.push(i3);
            for (t = Xu(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 1024, t = t.sibling;
          } else G4(e, n, r, t), Kr2();
          n = n.child;
        }
        return n;
      case 5:
        return ko2(n), e === null && _l2(n), r = n.type, l2 = n.pendingProps, i3 = e !== null ? e.memoizedProps : null, o = l2.children, wl2(r, l2) ? o = null : i3 !== null && wl2(r, i3) && (n.flags |= 16), rs2(e, n), G4(e, n, o, t), n.child;
      case 6:
        return e === null && _l2(n), null;
      case 13:
        return Mo2(e, n, t);
      case 4:
        return Cl2(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = ur2(n, null, r, t) : G4(e, n, r, t), n.child;
      case 11:
        return r = n.type, l2 = n.pendingProps, l2 = n.elementType === r ? l2 : oe2(r, l2), To2(e, n, r, l2, t);
      case 7:
        return G4(e, n, n.pendingProps, t), n.child;
      case 8:
        return G4(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return G4(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          r = n.type._context, l2 = n.pendingProps, o = n.memoizedProps, i3 = l2.value;
          var u = n.type._context;
          if (D3(rr2, u._currentValue), u._currentValue = i3, o !== null) if (u = o.value, i3 = ee3(u, i3) ? 0 : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(u, i3) : 1073741823) | 0, i3 === 0) {
            if (o.children === l2.children && !Z4.current) {
              n = ye4(e, n, t);
              break e;
            }
          } else for (u = n.child, u !== null && (u.return = n); u !== null; ) {
            var s = u.dependencies;
            if (s !== null) {
              o = u.child;
              for (var d = s.firstContext; d !== null; ) {
                if (d.context === r && (d.observedBits & i3) !== 0) {
                  u.tag === 1 && (d = Le3(-1, t & -t), d.tag = 2, ze2(u, d)), u.lanes |= t, d = u.alternate, d !== null && (d.lanes |= t), Wu(u.return, t), s.lanes |= t;
                  break;
                }
                d = d.next;
              }
            } else o = u.tag === 10 && u.type === n.type ? null : u.child;
            if (o !== null) o.return = u;
            else for (o = u; o !== null; ) {
              if (o === n) {
                o = null;
                break;
              }
              if (u = o.sibling, u !== null) {
                u.return = o.return, o = u;
                break;
              }
              o = o.return;
            }
            u = o;
          }
          G4(e, n, l2.children, t), n = n.child;
        }
        return n;
      case 9:
        return l2 = n.type, i3 = n.pendingProps, r = i3.children, yn2(n, t), l2 = re2(l2, i3.unstable_observedBits), r = r(l2), n.flags |= 1, G4(e, n, r, t), n.child;
      case 14:
        return l2 = n.type, i3 = oe2(l2, n.pendingProps), i3 = oe2(l2.type, i3), Lo2(e, n, l2, i3, r, t);
      case 15:
        return ts2(e, n, n.type, n.pendingProps, r, t);
      case 17:
        return r = n.type, l2 = n.pendingProps, l2 = n.elementType === r ? l2 : oe2(r, l2), e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), n.tag = 1, J4(r) ? (e = true, Wt2(n)) : e = false, yn2(n, t), $u(n, r, l2), xl2(n, r, l2, t), Tl2(null, n, r, true, e, t);
      case 19:
        return jo2(e, n, t);
      case 23:
        return Gr2(e, n, t);
      case 24:
        return Gr2(e, n, t);
    }
    throw Error(v2(156, n.tag));
  };
  function wf(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ne3(e, n, t, r) {
    return new wf(e, n, t, r);
  }
  function Ti2(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Sf(e) {
    if (typeof e == "function") return Ti2(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === gr2) return 11;
      if (e === wr2) return 14;
    }
    return 2;
  }
  function Ue2(e, n) {
    var t = e.alternate;
    return t === null ? (t = ne3(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.nextEffect = null, t.firstEffect = null, t.lastEffect = null), t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function Xt2(e, n, t, r, l2, i3) {
    var o = 2;
    if (r = e, typeof e == "function") Ti2(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case ke4:
        return En2(t.children, l2, i3, n);
      case Ko2:
        o = 8, l2 |= 16;
        break;
      case Ql2:
        o = 8, l2 |= 1;
        break;
      case Kn2:
        return e = ne3(12, t, n, l2 | 8), e.elementType = Kn2, e.type = Kn2, e.lanes = i3, e;
      case Gn2:
        return e = ne3(13, t, n, l2), e.type = Gn2, e.elementType = Gn2, e.lanes = i3, e;
      case Kt2:
        return e = ne3(19, t, n, l2), e.elementType = Kt2, e.lanes = i3, e;
      case Zl2:
        return Li2(t, l2, i3, n);
      case nl2:
        return e = ne3(24, t, n, l2), e.elementType = nl2, e.lanes = i3, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case $l2:
            o = 10;
            break e;
          case Yl2:
            o = 9;
            break e;
          case gr2:
            o = 11;
            break e;
          case wr2:
            o = 14;
            break e;
          case Xl2:
            o = 16, r = null;
            break e;
          case Kl2:
            o = 22;
            break e;
        }
        throw Error(v2(130, e == null ? e : typeof e, ""));
    }
    return n = ne3(o, t, n, l2), n.elementType = e, n.type = r, n.lanes = i3, n;
  }
  function En2(e, n, t, r) {
    return e = ne3(7, e, r, n), e.lanes = t, e;
  }
  function Li2(e, n, t, r) {
    return e = ne3(23, e, r, n), e.elementType = Zl2, e.lanes = t, e;
  }
  function qr2(e, n, t) {
    return e = ne3(6, e, null, n), e.lanes = t, e;
  }
  function br2(e, n, t) {
    return n = ne3(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, n;
  }
  function Ef(e, n, t) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = t, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = jr2(0), this.expirationTimes = jr2(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jr2(0), this.mutableSourceEagerHydrationData = null;
  }
  function kf(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: We2,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: n,
      implementation: t
    };
  }
  function vr2(e, n, t, r) {
    var l2 = n.current, i3 = q(), o = Oe3(l2);
    e: if (t) {
      t = t._reactInternals;
      n: {
        if (be3(t) !== t || t.tag !== 1) throw Error(v2(170));
        var u = t;
        do {
          switch (u.tag) {
            case 3:
              u = u.stateNode.context;
              break n;
            case 1:
              if (J4(u.type)) {
                u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                break n;
              }
          }
          u = u.return;
        } while (u !== null);
        throw Error(v2(171));
      }
      if (t.tag === 1) {
        var s = t.type;
        if (J4(s)) {
          t = Iu(t, s, u);
          break e;
        }
      }
      t = u;
    } else t = Fe2;
    return n.context === null ? n.context = t : n.pendingContext = t, n = Le3(i3, o), n.payload = {
      element: e
    }, r = r === void 0 ? null : r, r !== null && (n.callback = r), ze2(l2, n), Me2(l2, o, i3), o;
  }
  function el2(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Yo2(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function zi2(e, n) {
    Yo2(e, n), (e = e.alternate) && Yo2(e, n);
  }
  function xf() {
    return null;
  }
  function Oi2(e, n, t) {
    var r = t != null && t.hydrationOptions != null && t.hydrationOptions.mutableSources || null;
    if (t = new Ef(e, n, t != null && t.hydrate === true), n = ne3(3, null, null, n === 2 ? 7 : n === 1 ? 3 : 0), t.current = n, n.stateNode = t, hi2(n), e[Pn2] = t.current, zu(e.nodeType === 8 ? e.parentNode : e), r) for (e = 0; e < r.length; e++) {
      n = r[e];
      var l2 = n._getVersion;
      l2 = l2(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
        n,
        l2
      ] : t.mutableSourceEagerHydrationData.push(n, l2);
    }
    this._internalRoot = t;
  }
  Oi2.prototype.render = function(e) {
    vr2(e, this._internalRoot, null, null);
  };
  Oi2.prototype.unmount = function() {
    var e = this._internalRoot, n = e.containerInfo;
    vr2(null, e, null, function() {
      n[Pn2] = null;
    });
  };
  function Ct(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Cf(e, n) {
    if (n || (n = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, n = !(!n || n.nodeType !== 1 || !n.hasAttribute("data-reactroot"))), !n) for (var t; t = e.lastChild; ) e.removeChild(t);
    return new Oi2(e, 0, n ? {
      hydrate: true
    } : void 0);
  }
  function zr2(e, n, t, r, l2) {
    var i3 = t._reactRootContainer;
    if (i3) {
      var o = i3._internalRoot;
      if (typeof l2 == "function") {
        var u = l2;
        l2 = function() {
          var d = el2(o);
          u.call(d);
        };
      }
      vr2(n, o, e, l2);
    } else {
      if (i3 = t._reactRootContainer = Cf(t, r), o = i3._internalRoot, typeof l2 == "function") {
        var s = l2;
        l2 = function() {
          var d = el2(o);
          s.call(d);
        };
      }
      ds2(function() {
        vr2(n, o, e, l2);
      });
    }
    return el2(o);
  }
  au = function(e) {
    if (e.tag === 13) {
      var n = q();
      Me2(e, 4, n), zi2(e, 4);
    }
  };
  ni2 = function(e) {
    if (e.tag === 13) {
      var n = q();
      Me2(e, 67108864, n), zi2(e, 67108864);
    }
  };
  fu = function(e) {
    if (e.tag === 13) {
      var n = q(), t = Oe3(e);
      Me2(e, t, n), zi2(e, t);
    }
  };
  cu = function(e, n) {
    return n();
  };
  cl2 = function(e, n, t) {
    switch (n) {
      case "input":
        if (rl2(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; ) t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var l2 = _r2(r);
              if (!l2) throw Error(v2(90));
              Zo2(r), rl2(r, l2);
            }
          }
        }
        break;
      case "textarea":
        qo2(e, t);
        break;
      case "select":
        n = t.value, n != null && pn2(e, !!t.multiple, n, false);
    }
  };
  ql2 = cs2;
  iu = function(e, n, t, r, l2) {
    var i3 = x;
    x |= 4;
    try {
      return Ge2(98, e.bind(null, n, t, r, l2));
    } finally {
      x = i3, x === 0 && (zn2(), pe4());
    }
  };
  bl2 = function() {
    (x & 49) === 0 && (ff(), Be2());
  };
  ou = function(e, n) {
    var t = x;
    x |= 2;
    try {
      return e(n);
    } finally {
      x = t, x === 0 && (zn2(), pe4());
    }
  };
  function ws2(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ct(n)) throw Error(v2(200));
    return kf(e, n, null, t);
  }
  var _f = {
    Events: [
      Et2,
      an2,
      _r2,
      ru,
      lu,
      Be2,
      {
        current: false
      }
    ]
  }, Hn2 = {
    findFiberByHostInstance: Qe2,
    bundleType: 0,
    version: "17.0.2",
    rendererPackageName: "react-dom"
  }, Nf = {
    bundleType: Hn2.bundleType,
    version: Hn2.version,
    rendererPackageName: Hn2.rendererPackageName,
    rendererConfig: Hn2.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qe3.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
      return e = su(e), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Hn2.findFiberByHostInstance || xf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (Wn2 = __REACT_DEVTOOLS_GLOBAL_HOOK__, !Wn2.isDisabled && Wn2.supportsFiber)) try {
    ci2 = Wn2.inject(Nf), Xe2 = Wn2;
  } catch {
  }
  var Wn2;
  ie2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _f;
  ie2.createPortal = ws2;
  ie2.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0) throw typeof e.render == "function" ? Error(v2(188)) : Error(v2(268, Object.keys(e)));
    return e = su(n), e = e === null ? null : e.stateNode, e;
  };
  ie2.flushSync = function(e, n) {
    var t = x;
    if ((t & 48) !== 0) return e(n);
    x |= 1;
    try {
      if (e) return Ge2(99, e.bind(null, n));
    } finally {
      x = t, pe4();
    }
  };
  ie2.hydrate = function(e, n, t) {
    if (!Ct(n)) throw Error(v2(200));
    return zr2(null, e, n, true, t);
  };
  ie2.render = function(e, n, t) {
    if (!Ct(n)) throw Error(v2(200));
    return zr2(null, e, n, false, t);
  };
  ie2.unmountComponentAtNode = function(e) {
    if (!Ct(e)) throw Error(v2(40));
    return e._reactRootContainer ? (ds2(function() {
      zr2(null, null, e, false, function() {
        e._reactRootContainer = null, e[Pn2] = null;
      });
    }), true) : false;
  };
  ie2.unstable_batchedUpdates = cs2;
  ie2.unstable_createPortal = function(e, n) {
    return ws2(e, n, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
  };
  ie2.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!Ct(t)) throw Error(v2(200));
    if (e == null || e._reactInternals === void 0) throw Error(v2(38));
    return zr2(e, n, t, false, r);
  };
  ie2.version = "17.0.2";
});
var xs = Ri((Lf, ks2) => {
  "use strict";
  function Es2() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Es2);
    } catch (e) {
      console.error(e);
    }
  }
  Es2(), ks2.exports = Ss();
});
var Or = Os(xs());
var { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: zf, createPortal: Of, findDOMNode: Mf, flushSync: Rf, hydrate: Df, render: If, unmountComponentAtNode: Ff, unstable_batchedUpdates: jf, unstable_createPortal: Uf, unstable_renderSubtreeIntoContainer: Vf, version: Bf } = Or;
var Hf = Or.default ?? Or;

// allocation.tsx
var Allocation = class extends ae {
  constructor(props) {
    super(props);
    this.formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }
  formatter;
  render() {
    return /* @__PURE__ */ me("div", null, /* @__PURE__ */ me("h1", null, "Portfolio Drawdown Monte Carlo Simulation"), /* @__PURE__ */ me("h2", null, "Allocation"), /* @__PURE__ */ me("ul", null, /* @__PURE__ */ me("li", null, /* @__PURE__ */ me("label", {
      htmlFor: "startingBalance",
      className: "slider"
    }, "Total starting balance USD:"), /* @__PURE__ */ me("input", {
      className: "slider",
      type: "range",
      min: "100000",
      max: "20000000",
      step: "100000",
      id: "startingBalance",
      value: this.props.startingBalance,
      onChange: this.props.onChange
    }), /* @__PURE__ */ me("span", null, this.formatter.format(this.props.startingBalance))), /* @__PURE__ */ me("li", null, /* @__PURE__ */ me("label", {
      htmlFor: "drawdownRate",
      className: "slider"
    }, "Drawdown per Year:"), /* @__PURE__ */ me("input", {
      className: "slider",
      type: "range",
      min: "0",
      max: "20",
      step: "0.1",
      value: this.props.drawdownRate,
      id: "drawdownRate",
      onChange: this.props.onChange
    }), /* @__PURE__ */ me("span", null, this.props.drawdownRate, "% == ", this.formatter.format(this.props.startingBalance * (this.props.drawdownRate / 100)), " per year == ", this.formatter.format(this.props.startingBalance * (this.props.drawdownRate / 100 / 12)), " per month")), /* @__PURE__ */ me("li", null, /* @__PURE__ */ me("label", {
      htmlFor: "stocksPercent",
      className: "slider"
    }, "Portfolio Allocation Stocks:"), /* @__PURE__ */ me("input", {
      className: "slider",
      type: "range",
      min: "0",
      max: "100",
      value: this.props.stocksPercent,
      id: "stocksPercent",
      onChange: this.props.onChange
    }), /* @__PURE__ */ me("span", null, this.props.stocksPercent, "% == ", this.formatter.format(this.props.startingBalance * (this.props.stocksPercent / 100)))), /* @__PURE__ */ me("li", null, /* @__PURE__ */ me("label", {
      htmlFor: "bondsPercent",
      className: "slider"
    }, "Portfolio Allocation Bonds:"), /* @__PURE__ */ me("input", {
      className: "slider",
      type: "range",
      min: "0",
      max: "100",
      value: this.props.bondsPercent,
      id: "bondsPercent",
      onChange: this.props.onChange
    }), /* @__PURE__ */ me("span", null, this.props.bondsPercent, "% == ", this.formatter.format(this.props.startingBalance * (this.props.bondsPercent / 100)))), /* @__PURE__ */ me("li", null, /* @__PURE__ */ me("label", {
      htmlFor: "cashPercent",
      className: "slider"
    }, "Portfolio Allocation Cash:"), /* @__PURE__ */ me("input", {
      className: "slider",
      type: "range",
      min: "0",
      max: "100",
      value: this.props.cashPercent,
      id: "cashPercent",
      onChange: this.props.onChange
    }), /* @__PURE__ */ me("span", null, this.props.cashPercent, "% == ", this.formatter.format(this.props.startingBalance * (this.props.cashPercent / 100)))), /* @__PURE__ */ me("li", null, /* @__PURE__ */ me("label", {
      htmlFor: "simulationRounds",
      className: "slider"
    }, "Simulation Rounds"), /* @__PURE__ */ me("input", {
      className: "slider",
      type: "range",
      min: "1000",
      max: "100000",
      step: "33000",
      value: this.props.simulationRounds,
      id: "simulationRounds",
      onChange: this.props.onChange
    }), /* @__PURE__ */ me("span", null, this.props.simulationRounds)), /* @__PURE__ */ me("li", null, /* @__PURE__ */ me("label", {
      htmlFor: "simulationYears",
      className: "slider"
    }, "Simulation Years"), /* @__PURE__ */ me("input", {
      className: "slider",
      type: "range",
      min: "5",
      max: "100",
      step: "5",
      value: this.props.simulationYears,
      id: "simulationYears",
      onChange: this.props.onChange
    }), /* @__PURE__ */ me("span", null, this.props.simulationYears))), " ");
  }
};

// monteCarlo.ts
var SimulationState = /* @__PURE__ */ function(SimulationState2) {
  SimulationState2["Stopped"] = "Click Run to start the simulation";
  SimulationState2["Initializing"] = "Initializing";
  SimulationState2["Running"] = "Running";
  SimulationState2["Analyzing"] = "Analyzing results";
  return SimulationState2;
}({});

// deno:https://esm.sh/chart.js@3.9.1/denonext/chart.mjs
function rt() {
}
var Ws = /* @__PURE__ */ function() {
  let i3 = 0;
  return function() {
    return i3++;
  };
}();
function T(i3) {
  return i3 === null || typeof i3 > "u";
}
function I(i3) {
  if (Array.isArray && Array.isArray(i3)) return true;
  let t = Object.prototype.toString.call(i3);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function O(i3) {
  return i3 !== null && Object.prototype.toString.call(i3) === "[object Object]";
}
var N = (i3) => (typeof i3 == "number" || i3 instanceof Number) && isFinite(+i3);
function Q2(i3, t) {
  return N(i3) ? i3 : t;
}
function D2(i3, t) {
  return typeof i3 > "u" ? t : i3;
}
var Hs = (i3, t) => typeof i3 == "string" && i3.endsWith("%") ? parseFloat(i3) / 100 : i3 / t;
var Oi = (i3, t) => typeof i3 == "string" && i3.endsWith("%") ? parseFloat(i3) / 100 * t : +i3;
function z2(i3, t, e) {
  if (i3 && typeof i3.call == "function") return i3.apply(e, t);
}
function E(i3, t, e, s) {
  let n, o, a;
  if (I(i3)) if (o = i3.length, s) for (n = o - 1; n >= 0; n--) t.call(e, i3[n], n);
  else for (n = 0; n < o; n++) t.call(e, i3[n], n);
  else if (O(i3)) for (a = Object.keys(i3), o = a.length, n = 0; n < o; n++) t.call(e, i3[a[n]], a[n]);
}
function pe3(i3, t) {
  let e, s, n, o;
  if (!i3 || !t || i3.length !== t.length) return false;
  for (e = 0, s = i3.length; e < s; ++e) if (n = i3[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return false;
  return true;
}
function We(i3) {
  if (I(i3)) return i3.map(We);
  if (O(i3)) {
    let t = /* @__PURE__ */ Object.create(null), e = Object.keys(i3), s = e.length, n = 0;
    for (; n < s; ++n) t[e[n]] = We(i3[e[n]]);
    return t;
  }
  return i3;
}
function js(i3) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(i3) === -1;
}
function Lo(i3, t, e, s) {
  if (!js(i3)) return;
  let n = t[i3], o = e[i3];
  O(n) && O(o) ? Ht(n, o, s) : t[i3] = We(o);
}
function Ht(i3, t, e) {
  let s = I(t) ? t : [
    t
  ], n = s.length;
  if (!O(i3)) return i3;
  e = e || {};
  let o = e.merger || Lo;
  for (let a = 0; a < n; ++a) {
    if (t = s[a], !O(t)) continue;
    let r = Object.keys(t);
    for (let l2 = 0, c = r.length; l2 < c; ++l2) o(r[l2], i3, t, e);
  }
  return i3;
}
function Yt(i3, t) {
  return Ht(i3, t, {
    merger: Ro
  });
}
function Ro(i3, t, e) {
  if (!js(i3)) return;
  let s = t[i3], n = e[i3];
  O(s) && O(n) ? Yt(s, n) : Object.prototype.hasOwnProperty.call(t, i3) || (t[i3] = We(n));
}
var Ds = {
  "": (i3) => i3,
  x: (i3) => i3.x,
  y: (i3) => i3.y
};
function gt(i3, t) {
  return (Ds[t] || (Ds[t] = Eo(t)))(i3);
}
function Eo(i3) {
  let t = Fo(i3);
  return (e) => {
    for (let s of t) {
      if (s === "") break;
      e = e && e[s];
    }
    return e;
  };
}
function Fo(i3) {
  let t = i3.split("."), e = [], s = "";
  for (let n of t) s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function Ye(i3) {
  return i3.charAt(0).toUpperCase() + i3.slice(1);
}
var J2 = (i3) => typeof i3 < "u";
var ft = (i3) => typeof i3 == "function";
var Ci = (i3, t) => {
  if (i3.size !== t.size) return false;
  for (let e of i3) if (!t.has(e)) return false;
  return true;
};
function $s(i3) {
  return i3.type === "mouseup" || i3.type === "click" || i3.type === "contextmenu";
}
var B3 = Math.PI;
var F = 2 * B3;
var Io = F + B3;
var He = Number.POSITIVE_INFINITY;
var zo = B3 / 180;
var V2 = B3 / 2;
var de3 = B3 / 4;
var Os2 = B3 * 2 / 3;
var tt = Math.log10;
var ot = Math.sign;
function Ai(i3) {
  let t = Math.round(i3);
  i3 = Xt(i3, t, i3 / 1e3) ? t : i3;
  let e = Math.pow(10, Math.floor(tt(i3))), s = i3 / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function Ys(i3) {
  let t = [], e = Math.sqrt(i3), s;
  for (s = 1; s < e; s++) i3 % s === 0 && (t.push(s), t.push(i3 / s));
  return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t;
}
function Lt(i3) {
  return !isNaN(parseFloat(i3)) && isFinite(i3);
}
function Xt(i3, t, e) {
  return Math.abs(i3 - t) < e;
}
function Xs(i3, t) {
  let e = Math.round(i3);
  return e - t <= i3 && e + t >= i3;
}
function Ti(i3, t, e) {
  let s, n, o;
  for (s = 0, n = i3.length; s < n; s++) o = i3[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function nt(i3) {
  return i3 * (B3 / 180);
}
function Xe(i3) {
  return i3 * (180 / B3);
}
function Li(i3) {
  if (!N(i3)) return;
  let t = 1, e = 0;
  for (; Math.round(i3 * t) / t !== i3; ) t *= 10, e++;
  return e;
}
function Ri2(i3, t) {
  let e = t.x - i3.x, s = t.y - i3.y, n = Math.sqrt(e * e + s * s), o = Math.atan2(s, e);
  return o < -0.5 * B3 && (o += F), {
    angle: o,
    distance: n
  };
}
function je2(i3, t) {
  return Math.sqrt(Math.pow(t.x - i3.x, 2) + Math.pow(t.y - i3.y, 2));
}
function Bo(i3, t) {
  return (i3 - t + Io) % F - B3;
}
function G3(i3) {
  return (i3 % F + F) % F;
}
function Ut(i3, t, e, s) {
  let n = G3(i3), o = G3(t), a = G3(e), r = G3(o - n), l2 = G3(a - n), c = G3(n - o), h3 = G3(n - a);
  return n === o || n === a || s && o === a || r > l2 && c < h3;
}
function Y2(i3, t, e) {
  return Math.max(t, Math.min(e, i3));
}
function Us(i3) {
  return Y2(i3, -32768, 32767);
}
function lt(i3, t, e, s = 1e-6) {
  return i3 >= Math.min(t, e) - s && i3 <= Math.max(t, e) + s;
}
function Ue(i3, t, e) {
  e = e || ((a) => i3[a] < t);
  let s = i3.length - 1, n = 0, o;
  for (; s - n > 1; ) o = n + s >> 1, e(o) ? n = o : s = o;
  return {
    lo: n,
    hi: s
  };
}
var at = (i3, t, e, s) => Ue(i3, e, s ? (n) => i3[n][t] <= e : (n) => i3[n][t] < e);
var Ks = (i3, t, e) => Ue(i3, e, (s) => i3[s][t] >= e);
function qs(i3, t, e) {
  let s = 0, n = i3.length;
  for (; s < n && i3[s] < t; ) s++;
  for (; n > s && i3[n - 1] > e; ) n--;
  return s > 0 || n < i3.length ? i3.slice(s, n) : i3;
}
var Gs = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Zs(i3, t) {
  if (i3._chartjs) {
    i3._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(i3, "_chartjs", {
    configurable: true,
    enumerable: false,
    value: {
      listeners: [
        t
      ]
    }
  }), Gs.forEach((e) => {
    let s = "_onData" + Ye(e), n = i3[e];
    Object.defineProperty(i3, e, {
      configurable: true,
      enumerable: false,
      value(...o) {
        let a = n.apply(this, o);
        return i3._chartjs.listeners.forEach((r) => {
          typeof r[s] == "function" && r[s](...o);
        }), a;
      }
    });
  });
}
function Ei(i3, t) {
  let e = i3._chartjs;
  if (!e) return;
  let s = e.listeners, n = s.indexOf(t);
  n !== -1 && s.splice(n, 1), !(s.length > 0) && (Gs.forEach((o) => {
    delete i3[o];
  }), delete i3._chartjs);
}
function Fi(i3) {
  let t = /* @__PURE__ */ new Set(), e, s;
  for (e = 0, s = i3.length; e < s; ++e) t.add(i3[e]);
  return t.size === s ? i3 : Array.from(t);
}
var Ii = function() {
  return typeof globalThis > "u" ? function(i3) {
    return i3();
  } : globalThis.requestAnimationFrame;
}();
function zi(i3, t, e) {
  let s = e || ((a) => Array.prototype.slice.call(a)), n = false, o = [];
  return function(...a) {
    o = s(a), n || (n = true, Ii.call(globalThis, () => {
      n = false, i3.apply(t, o);
    }));
  };
}
function Js(i3, t) {
  let e;
  return function(...s) {
    return t ? (clearTimeout(e), e = setTimeout(i3, t, s)) : i3.apply(this, s), t;
  };
}
var Ke = (i3) => i3 === "start" ? "left" : i3 === "end" ? "right" : "center";
var X2 = (i3, t, e) => i3 === "start" ? t : i3 === "end" ? e : (t + e) / 2;
var Qs = (i3, t, e, s) => i3 === (s ? "left" : "right") ? e : i3 === "center" ? (t + e) / 2 : t;
function Bi(i3, t, e) {
  let s = t.length, n = 0, o = s;
  if (i3._sorted) {
    let { iScale: a, _parsed: r } = i3, l2 = a.axis, { min: c, max: h3, minDefined: d, maxDefined: u } = a.getUserBounds();
    d && (n = Y2(Math.min(at(r, a.axis, c).lo, e ? s : at(t, l2, a.getPixelForValue(c)).lo), 0, s - 1)), u ? o = Y2(Math.max(at(r, a.axis, h3, true).hi + 1, e ? 0 : at(t, l2, a.getPixelForValue(h3), true).hi + 1), n, s) - n : o = s - n;
  }
  return {
    start: n,
    count: o
  };
}
function Vi(i3) {
  let { xScale: t, yScale: e, _scaleRanges: s } = i3, n = {
    xmin: t.min,
    xmax: t.max,
    ymin: e.min,
    ymax: e.max
  };
  if (!s) return i3._scaleRanges = n, true;
  let o = s.xmin !== t.min || s.xmax !== t.max || s.ymin !== e.min || s.ymax !== e.max;
  return Object.assign(s, n), o;
}
var Ie3 = (i3) => i3 === 0 || i3 === 1;
var Cs = (i3, t, e) => -(Math.pow(2, 10 * (i3 -= 1)) * Math.sin((i3 - t) * F / e));
var As = (i3, t, e) => Math.pow(2, -10 * i3) * Math.sin((i3 - t) * F / e) + 1;
var Wt = {
  linear: (i3) => i3,
  easeInQuad: (i3) => i3 * i3,
  easeOutQuad: (i3) => -i3 * (i3 - 2),
  easeInOutQuad: (i3) => (i3 /= 0.5) < 1 ? 0.5 * i3 * i3 : -0.5 * (--i3 * (i3 - 2) - 1),
  easeInCubic: (i3) => i3 * i3 * i3,
  easeOutCubic: (i3) => (i3 -= 1) * i3 * i3 + 1,
  easeInOutCubic: (i3) => (i3 /= 0.5) < 1 ? 0.5 * i3 * i3 * i3 : 0.5 * ((i3 -= 2) * i3 * i3 + 2),
  easeInQuart: (i3) => i3 * i3 * i3 * i3,
  easeOutQuart: (i3) => -((i3 -= 1) * i3 * i3 * i3 - 1),
  easeInOutQuart: (i3) => (i3 /= 0.5) < 1 ? 0.5 * i3 * i3 * i3 * i3 : -0.5 * ((i3 -= 2) * i3 * i3 * i3 - 2),
  easeInQuint: (i3) => i3 * i3 * i3 * i3 * i3,
  easeOutQuint: (i3) => (i3 -= 1) * i3 * i3 * i3 * i3 + 1,
  easeInOutQuint: (i3) => (i3 /= 0.5) < 1 ? 0.5 * i3 * i3 * i3 * i3 * i3 : 0.5 * ((i3 -= 2) * i3 * i3 * i3 * i3 + 2),
  easeInSine: (i3) => -Math.cos(i3 * V2) + 1,
  easeOutSine: (i3) => Math.sin(i3 * V2),
  easeInOutSine: (i3) => -0.5 * (Math.cos(B3 * i3) - 1),
  easeInExpo: (i3) => i3 === 0 ? 0 : Math.pow(2, 10 * (i3 - 1)),
  easeOutExpo: (i3) => i3 === 1 ? 1 : -Math.pow(2, -10 * i3) + 1,
  easeInOutExpo: (i3) => Ie3(i3) ? i3 : i3 < 0.5 ? 0.5 * Math.pow(2, 10 * (i3 * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i3 * 2 - 1)) + 2),
  easeInCirc: (i3) => i3 >= 1 ? i3 : -(Math.sqrt(1 - i3 * i3) - 1),
  easeOutCirc: (i3) => Math.sqrt(1 - (i3 -= 1) * i3),
  easeInOutCirc: (i3) => (i3 /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i3 * i3) - 1) : 0.5 * (Math.sqrt(1 - (i3 -= 2) * i3) + 1),
  easeInElastic: (i3) => Ie3(i3) ? i3 : Cs(i3, 0.075, 0.3),
  easeOutElastic: (i3) => Ie3(i3) ? i3 : As(i3, 0.075, 0.3),
  easeInOutElastic(i3) {
    return Ie3(i3) ? i3 : i3 < 0.5 ? 0.5 * Cs(i3 * 2, 0.1125, 0.45) : 0.5 + 0.5 * As(i3 * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(i3) {
    return i3 * i3 * ((1.70158 + 1) * i3 - 1.70158);
  },
  easeOutBack(i3) {
    return (i3 -= 1) * i3 * ((1.70158 + 1) * i3 + 1.70158) + 1;
  },
  easeInOutBack(i3) {
    let t = 1.70158;
    return (i3 /= 0.5) < 1 ? 0.5 * (i3 * i3 * (((t *= 1.525) + 1) * i3 - t)) : 0.5 * ((i3 -= 2) * i3 * (((t *= 1.525) + 1) * i3 + t) + 2);
  },
  easeInBounce: (i3) => 1 - Wt.easeOutBounce(1 - i3),
  easeOutBounce(i3) {
    return i3 < 1 / 2.75 ? 7.5625 * i3 * i3 : i3 < 2 / 2.75 ? 7.5625 * (i3 -= 1.5 / 2.75) * i3 + 0.75 : i3 < 2.5 / 2.75 ? 7.5625 * (i3 -= 2.25 / 2.75) * i3 + 0.9375 : 7.5625 * (i3 -= 2.625 / 2.75) * i3 + 0.984375;
  },
  easeInOutBounce: (i3) => i3 < 0.5 ? Wt.easeInBounce(i3 * 2) * 0.5 : Wt.easeOutBounce(i3 * 2 - 1) * 0.5 + 0.5
};
function me3(i3) {
  return i3 + 0.5 | 0;
}
var xt = (i3, t, e) => Math.max(Math.min(i3, e), t);
function ue(i3) {
  return xt(me3(i3 * 2.55), 0, 255);
}
function yt(i3) {
  return xt(me3(i3 * 255), 0, 255);
}
function ut(i3) {
  return xt(me3(i3 / 2.55) / 100, 0, 1);
}
function Ts2(i3) {
  return xt(me3(i3 * 100), 0, 100);
}
var st = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15
};
var Si = [
  ..."0123456789ABCDEF"
];
var Vo = (i3) => Si[i3 & 15];
var No = (i3) => Si[(i3 & 240) >> 4] + Si[i3 & 15];
var ze = (i3) => (i3 & 240) >> 4 === (i3 & 15);
var Wo = (i3) => ze(i3.r) && ze(i3.g) && ze(i3.b) && ze(i3.a);
function Ho(i3) {
  var t = i3.length, e;
  return i3[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & st[i3[1]] * 17,
    g: 255 & st[i3[2]] * 17,
    b: 255 & st[i3[3]] * 17,
    a: t === 5 ? st[i3[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: st[i3[1]] << 4 | st[i3[2]],
    g: st[i3[3]] << 4 | st[i3[4]],
    b: st[i3[5]] << 4 | st[i3[6]],
    a: t === 9 ? st[i3[7]] << 4 | st[i3[8]] : 255
  })), e;
}
var jo = (i3, t) => i3 < 255 ? t(i3) : "";
function $o(i3) {
  var t = Wo(i3) ? Vo : No;
  return i3 ? "#" + t(i3.r) + t(i3.g) + t(i3.b) + jo(i3.a, t) : void 0;
}
var Yo = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function tn(i3, t, e) {
  let s = t * Math.min(e, 1 - e), n = (o, a = (o + i3 / 30) % 12) => e - s * Math.max(Math.min(a - 3, 9 - a, 1), -1);
  return [
    n(0),
    n(8),
    n(4)
  ];
}
function Xo(i3, t, e) {
  let s = (n, o = (n + i3 / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [
    s(5),
    s(3),
    s(1)
  ];
}
function Uo(i3, t, e) {
  let s = tn(i3, 1, 0.5), n;
  for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++) s[n] *= 1 - t - e, s[n] += t;
  return s;
}
function Ko(i3, t, e, s, n) {
  return i3 === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i3) / s + 2 : (i3 - t) / s + 4;
}
function Ni(i3) {
  let e = i3.r / 255, s = i3.g / 255, n = i3.b / 255, o = Math.max(e, s, n), a = Math.min(e, s, n), r = (o + a) / 2, l2, c, h3;
  return o !== a && (h3 = o - a, c = r > 0.5 ? h3 / (2 - o - a) : h3 / (o + a), l2 = Ko(e, s, n, h3, o), l2 = l2 * 60 + 0.5), [
    l2 | 0,
    c || 0,
    r
  ];
}
function Wi(i3, t, e, s) {
  return (Array.isArray(t) ? i3(t[0], t[1], t[2]) : i3(t, e, s)).map(yt);
}
function Hi(i3, t, e) {
  return Wi(tn, i3, t, e);
}
function qo(i3, t, e) {
  return Wi(Uo, i3, t, e);
}
function Go(i3, t, e) {
  return Wi(Xo, i3, t, e);
}
function en(i3) {
  return (i3 % 360 + 360) % 360;
}
function Zo(i3) {
  let t = Yo.exec(i3), e = 255, s;
  if (!t) return;
  t[5] !== s && (e = t[6] ? ue(+t[5]) : yt(+t[5]));
  let n = en(+t[2]), o = +t[3] / 100, a = +t[4] / 100;
  return t[1] === "hwb" ? s = qo(n, o, a) : t[1] === "hsv" ? s = Go(n, o, a) : s = Hi(n, o, a), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: e
  };
}
function Jo(i3, t) {
  var e = Ni(i3);
  e[0] = en(e[0] + t), e = Hi(e), i3.r = e[0], i3.g = e[1], i3.b = e[2];
}
function Qo(i3) {
  if (!i3) return;
  let t = Ni(i3), e = t[0], s = Ts2(t[1]), n = Ts2(t[2]);
  return i3.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${ut(i3.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
}
var Ls2 = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
};
var Rs = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function ta() {
  let i3 = {}, t = Object.keys(Rs), e = Object.keys(Ls2), s, n, o, a, r;
  for (s = 0; s < t.length; s++) {
    for (a = r = t[s], n = 0; n < e.length; n++) o = e[n], r = r.replace(o, Ls2[o]);
    o = parseInt(Rs[a], 16), i3[r] = [
      o >> 16 & 255,
      o >> 8 & 255,
      o & 255
    ];
  }
  return i3;
}
var Be;
function ea(i3) {
  Be || (Be = ta(), Be.transparent = [
    0,
    0,
    0,
    0
  ]);
  let t = Be[i3.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
var ia = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function sa(i3) {
  let t = ia.exec(i3), e = 255, s, n, o;
  if (t) {
    if (t[7] !== s) {
      let a = +t[7];
      e = t[8] ? ue(a) : xt(a * 255, 0, 255);
    }
    return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? ue(s) : xt(s, 0, 255)), n = 255 & (t[4] ? ue(n) : xt(n, 0, 255)), o = 255 & (t[6] ? ue(o) : xt(o, 0, 255)), {
      r: s,
      g: n,
      b: o,
      a: e
    };
  }
}
function na(i3) {
  return i3 && (i3.a < 255 ? `rgba(${i3.r}, ${i3.g}, ${i3.b}, ${ut(i3.a)})` : `rgb(${i3.r}, ${i3.g}, ${i3.b})`);
}
var vi = (i3) => i3 <= 31308e-7 ? i3 * 12.92 : Math.pow(i3, 1 / 2.4) * 1.055 - 0.055;
var Nt = (i3) => i3 <= 0.04045 ? i3 / 12.92 : Math.pow((i3 + 0.055) / 1.055, 2.4);
function oa(i3, t, e) {
  let s = Nt(ut(i3.r)), n = Nt(ut(i3.g)), o = Nt(ut(i3.b));
  return {
    r: yt(vi(s + e * (Nt(ut(t.r)) - s))),
    g: yt(vi(n + e * (Nt(ut(t.g)) - n))),
    b: yt(vi(o + e * (Nt(ut(t.b)) - o))),
    a: i3.a + e * (t.a - i3.a)
  };
}
function Ve(i3, t, e) {
  if (i3) {
    let s = Ni(i3);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = Hi(s), i3.r = s[0], i3.g = s[1], i3.b = s[2];
  }
}
function sn(i3, t) {
  return i3 && Object.assign(t || {}, i3);
}
function Es(i3) {
  var t = {
    r: 0,
    g: 0,
    b: 0,
    a: 255
  };
  return Array.isArray(i3) ? i3.length >= 3 && (t = {
    r: i3[0],
    g: i3[1],
    b: i3[2],
    a: 255
  }, i3.length > 3 && (t.a = yt(i3[3]))) : (t = sn(i3, {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  }), t.a = yt(t.a)), t;
}
function aa(i3) {
  return i3.charAt(0) === "r" ? sa(i3) : Zo(i3);
}
var Pi = class i {
  constructor(t) {
    if (t instanceof i) return t;
    let e = typeof t, s;
    e === "object" ? s = Es(t) : e === "string" && (s = Ho(t) || ea(t) || aa(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = sn(this._rgb);
    return t && (t.a = ut(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Es(t);
  }
  rgbString() {
    return this._valid ? na(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? $o(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Qo(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      let s = this.rgb, n = t.rgb, o, a = e === o ? 0.5 : e, r = 2 * a - 1, l2 = s.a - n.a, c = ((r * l2 === -1 ? r : (r + l2) / (1 + r * l2)) + 1) / 2;
      o = 1 - c, s.r = 255 & c * s.r + o * n.r + 0.5, s.g = 255 & c * s.g + o * n.g + 0.5, s.b = 255 & c * s.b + o * n.b + 0.5, s.a = a * s.a + (1 - a) * n.a, this.rgb = s;
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = oa(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new i(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = yt(t), this;
  }
  clearer(t) {
    let e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    let t = this._rgb, e = me3(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = e, this;
  }
  opaquer(t) {
    let e = this._rgb;
    return e.a *= 1 + t, this;
  }
  negate() {
    let t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return Ve(this._rgb, 2, t), this;
  }
  darken(t) {
    return Ve(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Ve(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Ve(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return Jo(this._rgb, t), this;
  }
};
function nn(i3) {
  return new Pi(i3);
}
function on(i3) {
  if (i3 && typeof i3 == "object") {
    let t = i3.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return false;
}
function ji(i3) {
  return on(i3) ? i3 : nn(i3);
}
function Mi2(i3) {
  return on(i3) ? i3 : nn(i3).saturate(0.5).darken(0.1).hexString();
}
var vt = /* @__PURE__ */ Object.create(null);
var qe2 = /* @__PURE__ */ Object.create(null);
function fe3(i3, t) {
  if (!t) return i3;
  let e = t.split(".");
  for (let s = 0, n = e.length; s < n; ++s) {
    let o = e[s];
    i3 = i3[o] || (i3[o] = /* @__PURE__ */ Object.create(null));
  }
  return i3;
}
function wi(i3, t, e) {
  return typeof t == "string" ? Ht(fe3(i3, t), e) : Ht(fe3(i3, ""), t);
}
var Di = class {
  constructor(t) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (e) => e.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (e, s) => Mi2(s.backgroundColor), this.hoverBorderColor = (e, s) => Mi2(s.borderColor), this.hoverColor = (e, s) => Mi2(s.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: true,
      includeInvisible: false
    }, this.maintainAspectRatio = true, this.onHover = null, this.onClick = null, this.parsing = true, this.plugins = {}, this.responsive = true, this.scale = void 0, this.scales = {}, this.showLine = true, this.drawActiveElementsOnTop = true, this.describe(t);
  }
  set(t, e) {
    return wi(this, t, e);
  }
  get(t) {
    return fe3(this, t);
  }
  describe(t, e) {
    return wi(qe2, t, e);
  }
  override(t, e) {
    return wi(vt, t, e);
  }
  route(t, e, s, n) {
    let o = fe3(this, t), a = fe3(this, s), r = "_" + e;
    Object.defineProperties(o, {
      [r]: {
        value: o[e],
        writable: true
      },
      [e]: {
        enumerable: true,
        get() {
          let l2 = this[r], c = a[n];
          return O(l2) ? Object.assign({}, c, l2) : D2(l2, c);
        },
        set(l2) {
          this[r] = l2;
        }
      }
    });
  }
};
var C = new Di({
  _scriptable: (i3) => !i3.startsWith("on"),
  _indexable: (i3) => i3 !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: false,
    _indexable: false
  }
});
function ra(i3) {
  return !i3 || T(i3.size) || T(i3.family) ? null : (i3.style ? i3.style + " " : "") + (i3.weight ? i3.weight + " " : "") + i3.size + "px " + i3.family;
}
function ge3(i3, t, e, s, n) {
  let o = t[n];
  return o || (o = t[n] = i3.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function an(i3, t, e, s) {
  s = s || {};
  let n = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
  s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i3.save(), i3.font = t;
  let a = 0, r = e.length, l2, c, h3, d, u;
  for (l2 = 0; l2 < r; l2++) if (d = e[l2], d != null && I(d) !== true) a = ge3(i3, n, o, a, d);
  else if (I(d)) for (c = 0, h3 = d.length; c < h3; c++) u = d[c], u != null && !I(u) && (a = ge3(i3, n, o, a, u));
  i3.restore();
  let f = o.length / 2;
  if (f > e.length) {
    for (l2 = 0; l2 < f; l2++) delete n[o[l2]];
    o.splice(0, f);
  }
  return a;
}
function Mt(i3, t, e) {
  let s = i3.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n) * s) / s + n;
}
function $i(i3, t) {
  t = t || i3.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i3.width, i3.height), t.restore();
}
function Ge(i3, t, e, s) {
  Yi(i3, t, e, s, null);
}
function Yi(i3, t, e, s, n) {
  let o, a, r, l2, c, h3, d = t.pointStyle, u = t.rotation, f = t.radius, g2 = (u || 0) * zo;
  if (d && typeof d == "object" && (o = d.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    i3.save(), i3.translate(e, s), i3.rotate(g2), i3.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height), i3.restore();
    return;
  }
  if (!(isNaN(f) || f <= 0)) {
    switch (i3.beginPath(), d) {
      default:
        n ? i3.ellipse(e, s, n / 2, f, 0, 0, F) : i3.arc(e, s, f, 0, F), i3.closePath();
        break;
      case "triangle":
        i3.moveTo(e + Math.sin(g2) * f, s - Math.cos(g2) * f), g2 += Os2, i3.lineTo(e + Math.sin(g2) * f, s - Math.cos(g2) * f), g2 += Os2, i3.lineTo(e + Math.sin(g2) * f, s - Math.cos(g2) * f), i3.closePath();
        break;
      case "rectRounded":
        c = f * 0.516, l2 = f - c, a = Math.cos(g2 + de3) * l2, r = Math.sin(g2 + de3) * l2, i3.arc(e - a, s - r, c, g2 - B3, g2 - V2), i3.arc(e + r, s - a, c, g2 - V2, g2), i3.arc(e + a, s + r, c, g2, g2 + V2), i3.arc(e - r, s + a, c, g2 + V2, g2 + B3), i3.closePath();
        break;
      case "rect":
        if (!u) {
          l2 = Math.SQRT1_2 * f, h3 = n ? n / 2 : l2, i3.rect(e - h3, s - l2, 2 * h3, 2 * l2);
          break;
        }
        g2 += de3;
      case "rectRot":
        a = Math.cos(g2) * f, r = Math.sin(g2) * f, i3.moveTo(e - a, s - r), i3.lineTo(e + r, s - a), i3.lineTo(e + a, s + r), i3.lineTo(e - r, s + a), i3.closePath();
        break;
      case "crossRot":
        g2 += de3;
      case "cross":
        a = Math.cos(g2) * f, r = Math.sin(g2) * f, i3.moveTo(e - a, s - r), i3.lineTo(e + a, s + r), i3.moveTo(e + r, s - a), i3.lineTo(e - r, s + a);
        break;
      case "star":
        a = Math.cos(g2) * f, r = Math.sin(g2) * f, i3.moveTo(e - a, s - r), i3.lineTo(e + a, s + r), i3.moveTo(e + r, s - a), i3.lineTo(e - r, s + a), g2 += de3, a = Math.cos(g2) * f, r = Math.sin(g2) * f, i3.moveTo(e - a, s - r), i3.lineTo(e + a, s + r), i3.moveTo(e + r, s - a), i3.lineTo(e - r, s + a);
        break;
      case "line":
        a = n ? n / 2 : Math.cos(g2) * f, r = Math.sin(g2) * f, i3.moveTo(e - a, s - r), i3.lineTo(e + a, s + r);
        break;
      case "dash":
        i3.moveTo(e, s), i3.lineTo(e + Math.cos(g2) * f, s + Math.sin(g2) * f);
        break;
    }
    i3.fill(), t.borderWidth > 0 && i3.stroke();
  }
}
function jt(i3, t, e) {
  return e = e || 0.5, !t || i3 && i3.x > t.left - e && i3.x < t.right + e && i3.y > t.top - e && i3.y < t.bottom + e;
}
function be2(i3, t) {
  i3.save(), i3.beginPath(), i3.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i3.clip();
}
function _e3(i3) {
  i3.restore();
}
function rn(i3, t, e, s, n) {
  if (!t) return i3.lineTo(e.x, e.y);
  if (n === "middle") {
    let o = (t.x + e.x) / 2;
    i3.lineTo(o, t.y), i3.lineTo(o, e.y);
  } else n === "after" != !!s ? i3.lineTo(t.x, e.y) : i3.lineTo(e.x, t.y);
  i3.lineTo(e.x, e.y);
}
function ln(i3, t, e, s) {
  if (!t) return i3.lineTo(e.x, e.y);
  i3.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y);
}
function wt(i3, t, e, s, n, o = {}) {
  let a = I(t) ? t : [
    t
  ], r = o.strokeWidth > 0 && o.strokeColor !== "", l2, c;
  for (i3.save(), i3.font = n.string, la(i3, o), l2 = 0; l2 < a.length; ++l2) c = a[l2], r && (o.strokeColor && (i3.strokeStyle = o.strokeColor), T(o.strokeWidth) || (i3.lineWidth = o.strokeWidth), i3.strokeText(c, e, s, o.maxWidth)), i3.fillText(c, e, s, o.maxWidth), ca(i3, e, s, c, o), s += n.lineHeight;
  i3.restore();
}
function la(i3, t) {
  t.translation && i3.translate(t.translation[0], t.translation[1]), T(t.rotation) || i3.rotate(t.rotation), t.color && (i3.fillStyle = t.color), t.textAlign && (i3.textAlign = t.textAlign), t.textBaseline && (i3.textBaseline = t.textBaseline);
}
function ca(i3, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    let o = i3.measureText(s), a = t - o.actualBoundingBoxLeft, r = t + o.actualBoundingBoxRight, l2 = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h3 = n.strikethrough ? (l2 + c) / 2 : c;
    i3.strokeStyle = i3.fillStyle, i3.beginPath(), i3.lineWidth = n.decorationWidth || 2, i3.moveTo(a, h3), i3.lineTo(r, h3), i3.stroke();
  }
}
function Kt(i3, t) {
  let { x: e, y: s, w: n, h: o, radius: a } = t;
  i3.arc(e + a.topLeft, s + a.topLeft, a.topLeft, -V2, B3, true), i3.lineTo(e, s + o - a.bottomLeft), i3.arc(e + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, B3, V2, true), i3.lineTo(e + n - a.bottomRight, s + o), i3.arc(e + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, V2, 0, true), i3.lineTo(e + n, s + a.topRight), i3.arc(e + n - a.topRight, s + a.topRight, a.topRight, 0, -V2, true), i3.lineTo(e + a.topLeft, s);
}
var ha = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
var da = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);
function ua(i3, t) {
  let e = ("" + i3).match(ha);
  if (!e || e[1] === "normal") return t * 1.2;
  switch (i3 = +e[2], e[3]) {
    case "px":
      return i3;
    case "%":
      i3 /= 100;
      break;
  }
  return t * i3;
}
var fa = (i3) => +i3 || 0;
function Ze(i3, t) {
  let e = {}, s = O(t), n = s ? Object.keys(t) : t, o = O(i3) ? s ? (a) => D2(i3[a], i3[t[a]]) : (a) => i3[a] : () => i3;
  for (let a of n) e[a] = fa(o(a));
  return e;
}
function Xi(i3) {
  return Ze(i3, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function kt(i3) {
  return Ze(i3, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function U(i3) {
  let t = Xi(i3);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function $(i3, t) {
  i3 = i3 || {}, t = t || C.font;
  let e = D2(i3.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = D2(i3.style, t.style);
  s && !("" + s).match(da) && (console.warn('Invalid font style specified: "' + s + '"'), s = "");
  let n = {
    family: D2(i3.family, t.family),
    lineHeight: ua(D2(i3.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: D2(i3.weight, t.weight),
    string: ""
  };
  return n.string = ra(n), n;
}
function qt(i3, t, e, s) {
  let n = true, o, a, r;
  for (o = 0, a = i3.length; o < a; ++o) if (r = i3[o], r !== void 0 && (t !== void 0 && typeof r == "function" && (r = r(t), n = false), e !== void 0 && I(r) && (r = r[e % r.length], n = false), r !== void 0)) return s && !n && (s.cacheable = false), r;
}
function cn(i3, t, e) {
  let { min: s, max: n } = i3, o = Oi(t, (n - s) / 2), a = (r, l2) => e && r === 0 ? 0 : r + l2;
  return {
    min: a(s, -Math.abs(o)),
    max: a(n, o)
  };
}
function pt(i3, t) {
  return Object.assign(Object.create(i3), t);
}
function Je(i3, t = [
  ""
], e = i3, s, n = () => i3[0]) {
  J2(s) || (s = un("_fallback", i3));
  let o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: true,
    _scopes: i3,
    _rootScopes: e,
    _fallback: s,
    _getTarget: n,
    override: (a) => Je([
      a,
      ...i3
    ], t, e, s)
  };
  return new Proxy(o, {
    deleteProperty(a, r) {
      return delete a[r], delete a._keys, delete i3[0][r], true;
    },
    get(a, r) {
      return hn(a, r, () => va(r, t, i3, a));
    },
    getOwnPropertyDescriptor(a, r) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], r);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i3[0]);
    },
    has(a, r) {
      return Is(a).includes(r);
    },
    ownKeys(a) {
      return Is(a);
    },
    set(a, r, l2) {
      let c = a._storage || (a._storage = n());
      return a[r] = c[r] = l2, delete a._keys, true;
    }
  });
}
function Tt(i3, t, e, s) {
  let n = {
    _cacheable: false,
    _proxy: i3,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: Ui(i3, s),
    setContext: (o) => Tt(i3, o, e, s),
    override: (o) => Tt(i3.override(o), t, e, s)
  };
  return new Proxy(n, {
    deleteProperty(o, a) {
      return delete o[a], delete i3[a], true;
    },
    get(o, a, r) {
      return hn(o, a, () => pa(o, a, r));
    },
    getOwnPropertyDescriptor(o, a) {
      return o._descriptors.allKeys ? Reflect.has(i3, a) ? {
        enumerable: true,
        configurable: true
      } : void 0 : Reflect.getOwnPropertyDescriptor(i3, a);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i3);
    },
    has(o, a) {
      return Reflect.has(i3, a);
    },
    ownKeys() {
      return Reflect.ownKeys(i3);
    },
    set(o, a, r) {
      return i3[a] = r, delete o[a], true;
    }
  });
}
function Ui(i3, t = {
  scriptable: true,
  indexable: true
}) {
  let { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i3;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: ft(e) ? e : () => e,
    isIndexable: ft(s) ? s : () => s
  };
}
var ga = (i3, t) => i3 ? i3 + Ye(t) : t;
var Ki = (i3, t) => O(t) && i3 !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function hn(i3, t, e) {
  if (Object.prototype.hasOwnProperty.call(i3, t)) return i3[t];
  let s = e();
  return i3[t] = s, s;
}
function pa(i3, t, e) {
  let { _proxy: s, _context: n, _subProxy: o, _descriptors: a } = i3, r = s[t];
  return ft(r) && a.isScriptable(t) && (r = ma(t, r, i3, e)), I(r) && r.length && (r = ba(t, r, i3, a.isIndexable)), Ki(t, r) && (r = Tt(r, n, o && o[t], a)), r;
}
function ma(i3, t, e, s) {
  let { _proxy: n, _context: o, _subProxy: a, _stack: r } = e;
  if (r.has(i3)) throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + i3);
  return r.add(i3), t = t(o, a || s), r.delete(i3), Ki(i3, t) && (t = qi(n._scopes, n, i3, t)), t;
}
function ba(i3, t, e, s) {
  let { _proxy: n, _context: o, _subProxy: a, _descriptors: r } = e;
  if (J2(o.index) && s(i3)) t = t[o.index % t.length];
  else if (O(t[0])) {
    let l2 = t, c = n._scopes.filter((h3) => h3 !== l2);
    t = [];
    for (let h3 of l2) {
      let d = qi(c, n, i3, h3);
      t.push(Tt(d, o, a && a[i3], r));
    }
  }
  return t;
}
function dn(i3, t, e) {
  return ft(i3) ? i3(t, e) : i3;
}
var _a = (i3, t) => i3 === true ? t : typeof i3 == "string" ? gt(t, i3) : void 0;
function xa(i3, t, e, s, n) {
  for (let o of t) {
    let a = _a(e, o);
    if (a) {
      i3.add(a);
      let r = dn(a._fallback, e, n);
      if (J2(r) && r !== e && r !== s) return r;
    } else if (a === false && J2(s) && e !== s) return null;
  }
  return false;
}
function qi(i3, t, e, s) {
  let n = t._rootScopes, o = dn(t._fallback, e, s), a = [
    ...i3,
    ...n
  ], r = /* @__PURE__ */ new Set();
  r.add(s);
  let l2 = Fs(r, a, e, o || e, s);
  return l2 === null || J2(o) && o !== e && (l2 = Fs(r, a, o, l2, s), l2 === null) ? false : Je(Array.from(r), [
    ""
  ], n, o, () => ya(t, e, s));
}
function Fs(i3, t, e, s, n) {
  for (; e; ) e = xa(i3, t, e, s, n);
  return e;
}
function ya(i3, t, e) {
  let s = i3._getTarget();
  t in s || (s[t] = {});
  let n = s[t];
  return I(n) && O(e) ? e : n;
}
function va(i3, t, e, s) {
  let n;
  for (let o of t) if (n = un(ga(o, i3), e), J2(n)) return Ki(i3, n) ? qi(e, s, i3, n) : n;
}
function un(i3, t) {
  for (let e of t) {
    if (!e) continue;
    let s = e[i3];
    if (J2(s)) return s;
  }
}
function Is(i3) {
  let t = i3._keys;
  return t || (t = i3._keys = Ma(i3._scopes)), t;
}
function Ma(i3) {
  let t = /* @__PURE__ */ new Set();
  for (let e of i3) for (let s of Object.keys(e).filter((n) => !n.startsWith("_"))) t.add(s);
  return Array.from(t);
}
function Gi(i3, t, e, s) {
  let { iScale: n } = i3, { key: o = "r" } = this._parsing, a = new Array(s), r, l2, c, h3;
  for (r = 0, l2 = s; r < l2; ++r) c = r + e, h3 = t[c], a[r] = {
    r: n.parse(gt(h3, o), c)
  };
  return a;
}
var wa = Number.EPSILON || 1e-14;
var $t = (i3, t) => t < i3.length && !i3[t].skip && i3[t];
var fn = (i3) => i3 === "x" ? "y" : "x";
function ka(i3, t, e, s) {
  let n = i3.skip ? t : i3, o = t, a = e.skip ? t : e, r = je2(o, n), l2 = je2(a, o), c = r / (r + l2), h3 = l2 / (r + l2);
  c = isNaN(c) ? 0 : c, h3 = isNaN(h3) ? 0 : h3;
  let d = s * c, u = s * h3;
  return {
    previous: {
      x: o.x - d * (a.x - n.x),
      y: o.y - d * (a.y - n.y)
    },
    next: {
      x: o.x + u * (a.x - n.x),
      y: o.y + u * (a.y - n.y)
    }
  };
}
function Sa(i3, t, e) {
  let s = i3.length, n, o, a, r, l2, c = $t(i3, 0);
  for (let h3 = 0; h3 < s - 1; ++h3) if (l2 = c, c = $t(i3, h3 + 1), !(!l2 || !c)) {
    if (Xt(t[h3], 0, wa)) {
      e[h3] = e[h3 + 1] = 0;
      continue;
    }
    n = e[h3] / t[h3], o = e[h3 + 1] / t[h3], r = Math.pow(n, 2) + Math.pow(o, 2), !(r <= 9) && (a = 3 / Math.sqrt(r), e[h3] = n * a * t[h3], e[h3 + 1] = o * a * t[h3]);
  }
}
function Pa(i3, t, e = "x") {
  let s = fn(e), n = i3.length, o, a, r, l2 = $t(i3, 0);
  for (let c = 0; c < n; ++c) {
    if (a = r, r = l2, l2 = $t(i3, c + 1), !r) continue;
    let h3 = r[e], d = r[s];
    a && (o = (h3 - a[e]) / 3, r[`cp1${e}`] = h3 - o, r[`cp1${s}`] = d - o * t[c]), l2 && (o = (l2[e] - h3) / 3, r[`cp2${e}`] = h3 + o, r[`cp2${s}`] = d + o * t[c]);
  }
}
function Da(i3, t = "x") {
  let e = fn(t), s = i3.length, n = Array(s).fill(0), o = Array(s), a, r, l2, c = $t(i3, 0);
  for (a = 0; a < s; ++a) if (r = l2, l2 = c, c = $t(i3, a + 1), !!l2) {
    if (c) {
      let h3 = c[t] - l2[t];
      n[a] = h3 !== 0 ? (c[e] - l2[e]) / h3 : 0;
    }
    o[a] = r ? c ? ot(n[a - 1]) !== ot(n[a]) ? 0 : (n[a - 1] + n[a]) / 2 : n[a - 1] : n[a];
  }
  Sa(i3, n, o), Pa(i3, o, t);
}
function Ne(i3, t, e) {
  return Math.max(Math.min(i3, e), t);
}
function Oa(i3, t) {
  let e, s, n, o, a, r = jt(i3[0], t);
  for (e = 0, s = i3.length; e < s; ++e) a = o, o = r, r = e < s - 1 && jt(i3[e + 1], t), o && (n = i3[e], a && (n.cp1x = Ne(n.cp1x, t.left, t.right), n.cp1y = Ne(n.cp1y, t.top, t.bottom)), r && (n.cp2x = Ne(n.cp2x, t.left, t.right), n.cp2y = Ne(n.cp2y, t.top, t.bottom)));
}
function gn(i3, t, e, s, n) {
  let o, a, r, l2;
  if (t.spanGaps && (i3 = i3.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone") Da(i3, n);
  else {
    let c = s ? i3[i3.length - 1] : i3[0];
    for (o = 0, a = i3.length; o < a; ++o) r = i3[o], l2 = ka(c, r, i3[Math.min(o + 1, a - (s ? 0 : 1)) % a], t.tension), r.cp1x = l2.previous.x, r.cp1y = l2.previous.y, r.cp2x = l2.next.x, r.cp2y = l2.next.y, c = r;
  }
  t.capBezierPoints && Oa(i3, e);
}
function Zi() {
  return typeof globalThis < "u" && typeof document < "u";
}
function Qe(i3) {
  let t = i3.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function $e2(i3, t, e) {
  let s;
  return typeof i3 == "string" ? (s = parseInt(i3, 10), i3.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i3, s;
}
var ti = (i3) => globalThis.getComputedStyle(i3, null);
function Ca(i3, t) {
  return ti(i3).getPropertyValue(t);
}
var Aa = [
  "top",
  "right",
  "bottom",
  "left"
];
function At(i3, t, e) {
  let s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    let o = Aa[n];
    s[o] = parseFloat(i3[t + "-" + o + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
var Ta = (i3, t, e) => (i3 > 0 || t > 0) && (!e || !e.shadowRoot);
function La(i3, t) {
  let e = i3.touches, s = e && e.length ? e[0] : i3, { offsetX: n, offsetY: o } = s, a = false, r, l2;
  if (Ta(n, o, i3.target)) r = n, l2 = o;
  else {
    let c = t.getBoundingClientRect();
    r = s.clientX - c.left, l2 = s.clientY - c.top, a = true;
  }
  return {
    x: r,
    y: l2,
    box: a
  };
}
function St(i3, t) {
  if ("native" in i3) return i3;
  let { canvas: e, currentDevicePixelRatio: s } = t, n = ti(e), o = n.boxSizing === "border-box", a = At(n, "padding"), r = At(n, "border", "width"), { x: l2, y: c, box: h3 } = La(i3, e), d = a.left + (h3 && r.left), u = a.top + (h3 && r.top), { width: f, height: g2 } = t;
  return o && (f -= a.width + r.width, g2 -= a.height + r.height), {
    x: Math.round((l2 - d) / f * e.width / s),
    y: Math.round((c - u) / g2 * e.height / s)
  };
}
function Ra(i3, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    let o = Qe(i3);
    if (!o) t = i3.clientWidth, e = i3.clientHeight;
    else {
      let a = o.getBoundingClientRect(), r = ti(o), l2 = At(r, "border", "width"), c = At(r, "padding");
      t = a.width - c.width - l2.width, e = a.height - c.height - l2.height, s = $e2(r.maxWidth, o, "clientWidth"), n = $e2(r.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: s || He,
    maxHeight: n || He
  };
}
var ki = (i3) => Math.round(i3 * 10) / 10;
function pn(i3, t, e, s) {
  let n = ti(i3), o = At(n, "margin"), a = $e2(n.maxWidth, i3, "clientWidth") || He, r = $e2(n.maxHeight, i3, "clientHeight") || He, l2 = Ra(i3, t, e), { width: c, height: h3 } = l2;
  if (n.boxSizing === "content-box") {
    let d = At(n, "border", "width"), u = At(n, "padding");
    c -= u.width + d.width, h3 -= u.height + d.height;
  }
  return c = Math.max(0, c - o.width), h3 = Math.max(0, s ? Math.floor(c / s) : h3 - o.height), c = ki(Math.min(c, a, l2.maxWidth)), h3 = ki(Math.min(h3, r, l2.maxHeight)), c && !h3 && (h3 = ki(c / 2)), {
    width: c,
    height: h3
  };
}
function Ji(i3, t, e) {
  let s = t || 1, n = Math.floor(i3.height * s), o = Math.floor(i3.width * s);
  i3.height = n / s, i3.width = o / s;
  let a = i3.canvas;
  return a.style && (e || !a.style.height && !a.style.width) && (a.style.height = `${i3.height}px`, a.style.width = `${i3.width}px`), i3.currentDevicePixelRatio !== s || a.height !== n || a.width !== o ? (i3.currentDevicePixelRatio = s, a.height = n, a.width = o, i3.ctx.setTransform(s, 0, 0, s, 0, 0), true) : false;
}
var mn = function() {
  let i3 = false;
  try {
    let t = {
      get passive() {
        return i3 = true, false;
      }
    };
    globalThis.addEventListener("test", null, t), globalThis.removeEventListener("test", null, t);
  } catch {
  }
  return i3;
}();
function Qi(i3, t) {
  let e = Ca(i3, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function _t(i3, t, e, s) {
  return {
    x: i3.x + e * (t.x - i3.x),
    y: i3.y + e * (t.y - i3.y)
  };
}
function bn(i3, t, e, s) {
  return {
    x: i3.x + e * (t.x - i3.x),
    y: s === "middle" ? e < 0.5 ? i3.y : t.y : s === "after" ? e < 1 ? i3.y : t.y : e > 0 ? t.y : i3.y
  };
}
function _n(i3, t, e, s) {
  let n = {
    x: i3.cp2x,
    y: i3.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, a = _t(i3, n, e), r = _t(n, o, e), l2 = _t(o, t, e), c = _t(a, r, e), h3 = _t(r, l2, e);
  return _t(c, h3, e);
}
var zs2 = /* @__PURE__ */ new Map();
function Ea(i3, t) {
  t = t || {};
  let e = i3 + JSON.stringify(t), s = zs2.get(e);
  return s || (s = new Intl.NumberFormat(i3, t), zs2.set(e, s)), s;
}
function Gt(i3, t, e) {
  return Ea(t, e).format(i3);
}
var Fa = function(i3, t) {
  return {
    x(e) {
      return i3 + i3 + t - e;
    },
    setWidth(e) {
      t = e;
    },
    textAlign(e) {
      return e === "center" ? e : e === "right" ? "left" : "right";
    },
    xPlus(e, s) {
      return e - s;
    },
    leftForLtr(e, s) {
      return e - s;
    }
  };
};
var Ia = function() {
  return {
    x(i3) {
      return i3;
    },
    setWidth(i3) {
    },
    textAlign(i3) {
      return i3;
    },
    xPlus(i3, t) {
      return i3 + t;
    },
    leftForLtr(i3, t) {
      return i3;
    }
  };
};
function Rt(i3, t, e) {
  return i3 ? Fa(t, e) : Ia();
}
function ts(i3, t) {
  let e, s;
  (t === "ltr" || t === "rtl") && (e = i3.canvas.style, s = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i3.prevTextDirection = s);
}
function es(i3, t) {
  t !== void 0 && (delete i3.prevTextDirection, i3.canvas.style.setProperty("direction", t[0], t[1]));
}
function xn(i3) {
  return i3 === "angle" ? {
    between: Ut,
    compare: Bo,
    normalize: G3
  } : {
    between: lt,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function Bs({ start: i3, end: t, count: e, loop: s, style: n }) {
  return {
    start: i3 % e,
    end: t % e,
    loop: s && (t - i3 + 1) % e === 0,
    style: n
  };
}
function za(i3, t, e) {
  let { property: s, start: n, end: o } = e, { between: a, normalize: r } = xn(s), l2 = t.length, { start: c, end: h3, loop: d } = i3, u, f;
  if (d) {
    for (c += l2, h3 += l2, u = 0, f = l2; u < f && a(r(t[c % l2][s]), n, o); ++u) c--, h3--;
    c %= l2, h3 %= l2;
  }
  return h3 < c && (h3 += l2), {
    start: c,
    end: h3,
    loop: d,
    style: i3.style
  };
}
function is(i3, t, e) {
  if (!e) return [
    i3
  ];
  let { property: s, start: n, end: o } = e, a = t.length, { compare: r, between: l2, normalize: c } = xn(s), { start: h3, end: d, loop: u, style: f } = za(i3, t, e), g2 = [], p = false, m = null, b, _, v2, y2 = () => l2(n, v2, b) && r(n, v2) !== 0, x = () => r(o, b) === 0 || l2(o, v2, b), M2 = () => p || y2(), w = () => !p || x();
  for (let S2 = h3, k2 = h3; S2 <= d; ++S2) _ = t[S2 % a], !_.skip && (b = c(_[s]), b !== v2 && (p = l2(b, n, o), m === null && M2() && (m = r(b, n) === 0 ? S2 : k2), m !== null && w() && (g2.push(Bs({
    start: m,
    end: S2,
    loop: u,
    count: a,
    style: f
  })), m = null), k2 = S2, v2 = b));
  return m !== null && g2.push(Bs({
    start: m,
    end: d,
    loop: u,
    count: a,
    style: f
  })), g2;
}
function ss(i3, t) {
  let e = [], s = i3.segments;
  for (let n = 0; n < s.length; n++) {
    let o = is(s[n], i3.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function Ba(i3, t, e, s) {
  let n = 0, o = t - 1;
  if (e && !s) for (; n < t && !i3[n].skip; ) n++;
  for (; n < t && i3[n].skip; ) n++;
  for (n %= t, e && (o += n); o > n && i3[o % t].skip; ) o--;
  return o %= t, {
    start: n,
    end: o
  };
}
function Va(i3, t, e, s) {
  let n = i3.length, o = [], a = t, r = i3[t], l2;
  for (l2 = t + 1; l2 <= e; ++l2) {
    let c = i3[l2 % n];
    c.skip || c.stop ? r.skip || (s = false, o.push({
      start: t % n,
      end: (l2 - 1) % n,
      loop: s
    }), t = a = c.stop ? l2 : null) : (a = l2, r.skip && (t = l2)), r = c;
  }
  return a !== null && o.push({
    start: t % n,
    end: a % n,
    loop: s
  }), o;
}
function yn(i3, t) {
  let e = i3.points, s = i3.options.spanGaps, n = e.length;
  if (!n) return [];
  let o = !!i3._loop, { start: a, end: r } = Ba(e, n, o, s);
  if (s === true) return Vs(i3, [
    {
      start: a,
      end: r,
      loop: o
    }
  ], e, t);
  let l2 = r < a ? r + n : r, c = !!i3._fullLoop && a === 0 && r === n - 1;
  return Vs(i3, Va(e, a, l2, c), e, t);
}
function Vs(i3, t, e, s) {
  return !s || !s.setContext || !e ? t : Na(i3, t, e, s);
}
function Na(i3, t, e, s) {
  let n = i3._chart.getContext(), o = Ns2(i3.options), { _datasetIndex: a, options: { spanGaps: r } } = i3, l2 = e.length, c = [], h3 = o, d = t[0].start, u = d;
  function f(g2, p, m, b) {
    let _ = r ? -1 : 1;
    if (g2 !== p) {
      for (g2 += l2; e[g2 % l2].skip; ) g2 -= _;
      for (; e[p % l2].skip; ) p += _;
      g2 % l2 !== p % l2 && (c.push({
        start: g2 % l2,
        end: p % l2,
        loop: m,
        style: b
      }), h3 = b, d = p % l2);
    }
  }
  for (let g2 of t) {
    d = r ? d : g2.start;
    let p = e[d % l2], m;
    for (u = d + 1; u <= g2.end; u++) {
      let b = e[u % l2];
      m = Ns2(s.setContext(pt(n, {
        type: "segment",
        p0: p,
        p1: b,
        p0DataIndex: (u - 1) % l2,
        p1DataIndex: u % l2,
        datasetIndex: a
      }))), Wa(m, h3) && f(d, u - 1, g2.loop, h3), p = b, h3 = m;
    }
    d < u - 1 && f(d, u - 1, g2.loop, h3);
  }
  return c;
}
function Ns2(i3) {
  return {
    backgroundColor: i3.backgroundColor,
    borderCapStyle: i3.borderCapStyle,
    borderDash: i3.borderDash,
    borderDashOffset: i3.borderDashOffset,
    borderJoinStyle: i3.borderJoinStyle,
    borderWidth: i3.borderWidth,
    borderColor: i3.borderColor
  };
}
function Wa(i3, t) {
  return t && JSON.stringify(i3) !== JSON.stringify(t);
}
var fs = class {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = false, this._lastDate = void 0;
  }
  _notify(t, e, s, n) {
    let o = e.listeners[n], a = e.duration;
    o.forEach((r) => r({
      chart: t,
      initial: e.initial,
      numSteps: a,
      currentStep: Math.min(s - e.start, a)
    }));
  }
  _refresh() {
    this._request || (this._running = true, this._request = Ii.call(globalThis, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((s, n) => {
      if (!s.running || !s.items.length) return;
      let o = s.items, a = o.length - 1, r = false, l2;
      for (; a >= 0; --a) l2 = o[a], l2._active ? (l2._total > s.duration && (s.duration = l2._total), l2.tick(t), r = true) : (o[a] = o[o.length - 1], o.pop());
      r && (n.draw(), this._notify(n, s, t, "progress")), o.length || (s.running = false, this._notify(n, s, t, "complete"), s.initial = false), e += o.length;
    }), this._lastDate = t, e === 0 && (this._running = false);
  }
  _getAnims(t) {
    let e = this._charts, s = e.get(t);
    return s || (s = {
      running: false,
      initial: true,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(t, s)), s;
  }
  listen(t, e, s) {
    this._getAnims(t).listeners[e].push(s);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    let e = this._charts.get(t);
    e && (e.running = true, e.start = Date.now(), e.duration = e.items.reduce((s, n) => Math.max(s, n._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running) return false;
    let e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    let e = this._charts.get(t);
    if (!e || !e.items.length) return;
    let s = e.items, n = s.length - 1;
    for (; n >= 0; --n) s[n].cancel();
    e.items = [], this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
};
var mt = new fs();
var vn = "transparent";
var Ha = {
  boolean(i3, t, e) {
    return e > 0.5 ? t : i3;
  },
  color(i3, t, e) {
    let s = ji(i3 || vn), n = s.valid && ji(t || vn);
    return n && n.valid ? n.mix(s, e).hexString() : t;
  },
  number(i3, t, e) {
    return i3 + (t - i3) * e;
  }
};
var gs = class {
  constructor(t, e, s, n) {
    let o = e[s];
    n = qt([
      t.to,
      n,
      o,
      t.from
    ]);
    let a = qt([
      t.from,
      o,
      n
    ]);
    this._active = true, this._fn = t.fn || Ha[t.type || typeof a], this._easing = Wt[t.easing] || Wt.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = a, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, s) {
    if (this._active) {
      this._notify(false);
      let n = this._target[this._prop], o = s - this._start, a = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(a, t.duration)), this._total += o, this._loop = !!t.loop, this._to = qt([
        t.to,
        e,
        n,
        t.from
      ]), this._from = qt([
        t.from,
        n,
        e
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = false, this._notify(false));
  }
  tick(t) {
    let e = t - this._start, s = this._duration, n = this._prop, o = this._from, a = this._loop, r = this._to, l2;
    if (this._active = o !== r && (a || e < s), !this._active) {
      this._target[n] = r, this._notify(true);
      return;
    }
    if (e < 0) {
      this._target[n] = o;
      return;
    }
    l2 = e / s % 2, l2 = a && l2 > 1 ? 2 - l2 : l2, l2 = this._easing(Math.min(1, Math.max(0, l2))), this._target[n] = this._fn(o, r, l2);
  }
  wait() {
    let t = this._promises || (this._promises = []);
    return new Promise((e, s) => {
      t.push({
        res: e,
        rej: s
      });
    });
  }
  _notify(t) {
    let e = t ? "res" : "rej", s = this._promises || [];
    for (let n = 0; n < s.length; n++) s[n][e]();
  }
};
var ja = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
];
var $a = [
  "color",
  "borderColor",
  "backgroundColor"
];
C.set("animation", {
  delay: void 0,
  duration: 1e3,
  easing: "easeOutQuart",
  fn: void 0,
  from: void 0,
  loop: void 0,
  to: void 0,
  type: void 0
});
var Ya = Object.keys(C.animation);
C.describe("animation", {
  _fallback: false,
  _indexable: false,
  _scriptable: (i3) => i3 !== "onProgress" && i3 !== "onComplete" && i3 !== "fn"
});
C.set("animations", {
  colors: {
    type: "color",
    properties: $a
  },
  numbers: {
    type: "number",
    properties: ja
  }
});
C.describe("animations", {
  _fallback: "animation"
});
C.set("transitions", {
  active: {
    animation: {
      duration: 400
    }
  },
  resize: {
    animation: {
      duration: 0
    }
  },
  show: {
    animations: {
      colors: {
        from: "transparent"
      },
      visible: {
        type: "boolean",
        duration: 0
      }
    }
  },
  hide: {
    animations: {
      colors: {
        to: "transparent"
      },
      visible: {
        type: "boolean",
        easing: "linear",
        fn: (i3) => i3 | 0
      }
    }
  }
});
var li = class {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!O(t)) return;
    let e = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      let n = t[s];
      if (!O(n)) return;
      let o = {};
      for (let a of Ya) o[a] = n[a];
      (I(n.properties) && n.properties || [
        s
      ]).forEach((a) => {
        (a === s || !e.has(a)) && e.set(a, o);
      });
    });
  }
  _animateOptions(t, e) {
    let s = e.options, n = Ua(t, s);
    if (!n) return [];
    let o = this._createAnimations(n, s);
    return s.$shared && Xa(t.options.$animations, s).then(() => {
      t.options = s;
    }, () => {
    }), o;
  }
  _createAnimations(t, e) {
    let s = this._properties, n = [], o = t.$animations || (t.$animations = {}), a = Object.keys(e), r = Date.now(), l2;
    for (l2 = a.length - 1; l2 >= 0; --l2) {
      let c = a[l2];
      if (c.charAt(0) === "$") continue;
      if (c === "options") {
        n.push(...this._animateOptions(t, e));
        continue;
      }
      let h3 = e[c], d = o[c], u = s.get(c);
      if (d) if (u && d.active()) {
        d.update(u, h3, r);
        continue;
      } else d.cancel();
      if (!u || !u.duration) {
        t[c] = h3;
        continue;
      }
      o[c] = d = new gs(u, t, c, h3), n.push(d);
    }
    return n;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    let s = this._createAnimations(t, e);
    if (s.length) return mt.add(this._chart, s), true;
  }
};
function Xa(i3, t) {
  let e = [], s = Object.keys(t);
  for (let n = 0; n < s.length; n++) {
    let o = i3[s[n]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function Ua(i3, t) {
  if (!t) return;
  let e = i3.options;
  if (!e) {
    i3.options = t;
    return;
  }
  return e.$shared && (i3.options = e = Object.assign({}, e, {
    $shared: false,
    $animations: {}
  })), e;
}
function Mn(i3, t) {
  let e = i3 && i3.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: s ? o : n,
    end: s ? n : o
  };
}
function Ka(i3, t, e) {
  if (e === false) return false;
  let s = Mn(i3, e), n = Mn(t, e);
  return {
    top: n.end,
    right: s.end,
    bottom: n.start,
    left: s.start
  };
}
function qa(i3) {
  let t, e, s, n;
  return O(i3) ? (t = i3.top, e = i3.right, s = i3.bottom, n = i3.left) : t = e = s = n = i3, {
    top: t,
    right: e,
    bottom: s,
    left: n,
    disabled: i3 === false
  };
}
function fo(i3, t) {
  let e = [], s = i3._getSortedDatasetMetas(t), n, o;
  for (n = 0, o = s.length; n < o; ++n) e.push(s[n].index);
  return e;
}
function wn(i3, t, e, s = {}) {
  let n = i3.keys, o = s.mode === "single", a, r, l2, c;
  if (t !== null) {
    for (a = 0, r = n.length; a < r; ++a) {
      if (l2 = +n[a], l2 === e) {
        if (s.all) continue;
        break;
      }
      c = i3.values[l2], N(c) && (o || t === 0 || ot(t) === ot(c)) && (t += c);
    }
    return t;
  }
}
function Ga(i3) {
  let t = Object.keys(i3), e = new Array(t.length), s, n, o;
  for (s = 0, n = t.length; s < n; ++s) o = t[s], e[s] = {
    x: o,
    y: i3[o]
  };
  return e;
}
function kn(i3, t) {
  let e = i3 && i3.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function Za(i3, t, e) {
  return `${i3.id}.${t.id}.${e.stack || e.type}`;
}
function Ja(i3) {
  let { min: t, max: e, minDefined: s, maxDefined: n } = i3.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY
  };
}
function Qa(i3, t, e) {
  let s = i3[t] || (i3[t] = {});
  return s[e] || (s[e] = {});
}
function Sn(i3, t, e, s) {
  for (let n of t.getMatchingVisibleMetas(s).reverse()) {
    let o = i3[n.index];
    if (e && o > 0 || !e && o < 0) return n.index;
  }
  return null;
}
function Pn(i3, t) {
  let { chart: e, _cachedMeta: s } = i3, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: a, index: r } = s, l2 = o.axis, c = a.axis, h3 = Za(o, a, s), d = t.length, u;
  for (let f = 0; f < d; ++f) {
    let g2 = t[f], { [l2]: p, [c]: m } = g2, b = g2._stacks || (g2._stacks = {});
    u = b[c] = Qa(n, h3, p), u[r] = m, u._top = Sn(u, a, true, s.type), u._bottom = Sn(u, a, false, s.type);
  }
}
function ns(i3, t) {
  let e = i3.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function tr(i3, t) {
  return pt(i3, {
    active: false,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function er(i3, t, e) {
  return pt(i3, {
    active: false,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data"
  });
}
function xe3(i3, t) {
  let e = i3.controller.index, s = i3.vScale && i3.vScale.axis;
  if (s) {
    t = t || i3._parsed;
    for (let n of t) {
      let o = n._stacks;
      if (!o || o[s] === void 0 || o[s][e] === void 0) return;
      delete o[s][e];
    }
  }
}
var os = (i3) => i3 === "reset" || i3 === "none";
var Dn = (i3, t) => t ? i3 : Object.assign({}, i3);
var ir = (i3, t, e) => i3 && !t.hidden && t._stacked && {
  keys: fo(e, true),
  values: null
};
var et = class {
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = false, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = false, this.supportsDecimation = false, this.$context = void 0, this._syncList = [], this.initialize();
  }
  initialize() {
    let t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = kn(t.vScale, t), this.addElements();
  }
  updateIndex(t) {
    this.index !== t && xe3(this._cachedMeta), this.index = t;
  }
  linkScales() {
    let t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (d, u, f, g2) => d === "x" ? u : d === "r" ? g2 : f, o = e.xAxisID = D2(s.xAxisID, ns(t, "x")), a = e.yAxisID = D2(s.yAxisID, ns(t, "y")), r = e.rAxisID = D2(s.rAxisID, ns(t, "r")), l2 = e.indexAxis, c = e.iAxisID = n(l2, o, a, r), h3 = e.vAxisID = n(l2, a, o, r);
    e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(a), e.rScale = this.getScaleForId(r), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h3);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    let e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    let t = this._cachedMeta;
    this._data && Ei(this._data, this), t._stacked && xe3(t);
  }
  _dataCheck() {
    let t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
    if (O(e)) this._data = Ga(e);
    else if (s !== e) {
      if (s) {
        Ei(s, this);
        let n = this._cachedMeta;
        xe3(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && Zs(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    let t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    let e = this._cachedMeta, s = this.getDataset(), n = false;
    this._dataCheck();
    let o = e._stacked;
    e._stacked = kn(e.vScale, e), e.stack !== s.stack && (n = true, xe3(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && Pn(this, e._parsed);
  }
  configure() {
    let t = this.chart.config, e = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), e, true);
    this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    let { _cachedMeta: s, _data: n } = this, { iScale: o, _stacked: a } = s, r = o.axis, l2 = t === 0 && e === n.length ? true : s._sorted, c = t > 0 && s._parsed[t - 1], h3, d, u;
    if (this._parsing === false) s._parsed = n, s._sorted = true, u = n;
    else {
      I(n[t]) ? u = this.parseArrayData(s, n, t, e) : O(n[t]) ? u = this.parseObjectData(s, n, t, e) : u = this.parsePrimitiveData(s, n, t, e);
      let f = () => d[r] === null || c && d[r] < c[r];
      for (h3 = 0; h3 < e; ++h3) s._parsed[h3 + t] = d = u[h3], l2 && (f() && (l2 = false), c = d);
      s._sorted = l2;
    }
    a && Pn(this, u);
  }
  parsePrimitiveData(t, e, s, n) {
    let { iScale: o, vScale: a } = t, r = o.axis, l2 = a.axis, c = o.getLabels(), h3 = o === a, d = new Array(n), u, f, g2;
    for (u = 0, f = n; u < f; ++u) g2 = u + s, d[u] = {
      [r]: h3 || o.parse(c[g2], g2),
      [l2]: a.parse(e[g2], g2)
    };
    return d;
  }
  parseArrayData(t, e, s, n) {
    let { xScale: o, yScale: a } = t, r = new Array(n), l2, c, h3, d;
    for (l2 = 0, c = n; l2 < c; ++l2) h3 = l2 + s, d = e[h3], r[l2] = {
      x: o.parse(d[0], h3),
      y: a.parse(d[1], h3)
    };
    return r;
  }
  parseObjectData(t, e, s, n) {
    let { xScale: o, yScale: a } = t, { xAxisKey: r = "x", yAxisKey: l2 = "y" } = this._parsing, c = new Array(n), h3, d, u, f;
    for (h3 = 0, d = n; h3 < d; ++h3) u = h3 + s, f = e[u], c[h3] = {
      x: o.parse(gt(f, r), u),
      y: a.parse(gt(f, l2), u)
    };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, s) {
    let n = this.chart, o = this._cachedMeta, a = e[t.axis], r = {
      keys: fo(n, true),
      values: e._stacks[t.axis]
    };
    return wn(r, a, o.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, e, s, n) {
    let o = s[e.axis], a = o === null ? NaN : o, r = n && s._stacks[e.axis];
    n && r && (n.values = r, a = wn(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, a), t.max = Math.max(t.max, a);
  }
  getMinMax(t, e) {
    let s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, a = n.length, r = this._getOtherScale(t), l2 = ir(e, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: h3, max: d } = Ja(r), u, f;
    function g2() {
      f = n[u];
      let p = f[r.axis];
      return !N(f[t.axis]) || h3 > p || d < p;
    }
    for (u = 0; u < a && !(!g2() && (this.updateRangeFromParsed(c, t, f, l2), o)); ++u) ;
    if (o) {
      for (u = a - 1; u >= 0; --u) if (!g2()) {
        this.updateRangeFromParsed(c, t, f, l2);
        break;
      }
    }
    return c;
  }
  getAllParsedValues(t) {
    let e = this._cachedMeta._parsed, s = [], n, o, a;
    for (n = 0, o = e.length; n < o; ++n) a = e[n][t.axis], N(a) && s.push(a);
    return s;
  }
  getMaxOverflow() {
    return false;
  }
  getLabelAndValue(t) {
    let e = this._cachedMeta, s = e.iScale, n = e.vScale, o = this.getParsed(t);
    return {
      label: s ? "" + s.getLabelForValue(o[s.axis]) : "",
      value: n ? "" + n.getLabelForValue(o[n.axis]) : ""
    };
  }
  _update(t) {
    let e = this._cachedMeta;
    this.update(t || "default"), e._clip = qa(D2(this.options.clip, Ka(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    let t = this._ctx, e = this.chart, s = this._cachedMeta, n = s.data || [], o = e.chartArea, a = [], r = this._drawStart || 0, l2 = this._drawCount || n.length - r, c = this.options.drawActiveElementsOnTop, h3;
    for (s.dataset && s.dataset.draw(t, o, r, l2), h3 = r; h3 < r + l2; ++h3) {
      let d = n[h3];
      d.hidden || (d.active && c ? a.push(d) : d.draw(t, o));
    }
    for (h3 = 0; h3 < a.length; ++h3) a[h3].draw(t, o);
  }
  getStyle(t, e) {
    let s = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s);
  }
  getContext(t, e, s) {
    let n = this.getDataset(), o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      let a = this._cachedMeta.data[t];
      o = a.$context || (a.$context = er(this.getContext(), t, a)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
    } else o = this.$context || (this.$context = tr(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", s) {
    let n = e === "active", o = this._cachedDataOpts, a = t + "-" + e, r = o[a], l2 = this.enableOptionSharing && J2(s);
    if (r) return Dn(r, l2);
    let c = this.chart.config, h3 = c.datasetElementScopeKeys(this._type, t), d = n ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], u = c.getOptionScopes(this.getDataset(), h3), f = Object.keys(C.elements[t]), g2 = () => this.getContext(s, n), p = c.resolveNamedOptions(u, f, g2, d);
    return p.$shared && (p.$shared = l2, o[a] = Object.freeze(Dn(p, l2))), p;
  }
  _resolveAnimations(t, e, s) {
    let n = this.chart, o = this._cachedDataOpts, a = `animation-${e}`, r = o[a];
    if (r) return r;
    let l2;
    if (n.options.animation !== false) {
      let h3 = this.chart.config, d = h3.datasetAnimationScopeKeys(this._type, e), u = h3.getOptionScopes(this.getDataset(), d);
      l2 = h3.createResolver(u, this.getContext(t, s, e));
    }
    let c = new li(n, l2 && l2.animations);
    return l2 && l2._cacheable && (o[a] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || os(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    let s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, o = this.getSharedOptions(s), a = this.includeOptions(e, o) || o !== n;
    return this.updateSharedOptions(o, e, s), {
      sharedOptions: o,
      includeOptions: a
    };
  }
  updateElement(t, e, s, n) {
    os(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !os(e) && this._resolveAnimations(void 0, e).update(t, s);
  }
  _setStyle(t, e, s, n) {
    t.active = n;
    let o = this.getStyle(e, n);
    this._resolveAnimations(e, s, n).update(t, {
      options: !n && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", false);
  }
  setHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", true);
  }
  _removeDatasetHoverStyle() {
    let t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", false);
  }
  _setDatasetHoverStyle() {
    let t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", true);
  }
  _resyncElements(t) {
    let e = this._data, s = this._cachedMeta.data;
    for (let [r, l2, c] of this._syncList) this[r](l2, c);
    this._syncList = [];
    let n = s.length, o = e.length, a = Math.min(o, n);
    a && this.parse(0, a), o > n ? this._insertElements(n, o - n, t) : o < n && this._removeElements(o, n - o);
  }
  _insertElements(t, e, s = true) {
    let n = this._cachedMeta, o = n.data, a = t + e, r, l2 = (c) => {
      for (c.length += e, r = c.length - 1; r >= a; r--) c[r] = c[r - e];
    };
    for (l2(o), r = t; r < a; ++r) o[r] = new this.dataElementType();
    this._parsing && l2(n._parsed), this.parse(t, e), s && this.updateElements(o, t, e, "reset");
  }
  updateElements(t, e, s, n) {
  }
  _removeElements(t, e) {
    let s = this._cachedMeta;
    if (this._parsing) {
      let n = s._parsed.splice(t, e);
      s._stacked && xe3(s, n);
    }
    s.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      let [e, s, n] = t;
      this[e](s, n);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    let t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, e) {
    e && this._sync([
      "_removeElements",
      t,
      e
    ]);
    let s = arguments.length - 2;
    s && this._sync([
      "_insertElements",
      t,
      s
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
};
et.defaults = {};
et.prototype.datasetElementType = null;
et.prototype.dataElementType = null;
function sr(i3, t) {
  if (!i3._cache.$bar) {
    let e = i3.getMatchingVisibleMetas(t), s = [];
    for (let n = 0, o = e.length; n < o; n++) s = s.concat(e[n].controller.getAllParsedValues(i3));
    i3._cache.$bar = Fi(s.sort((n, o) => n - o));
  }
  return i3._cache.$bar;
}
function nr(i3) {
  let t = i3.iScale, e = sr(t, i3.type), s = t._length, n, o, a, r, l2 = () => {
    a === 32767 || a === -32768 || (J2(r) && (s = Math.min(s, Math.abs(a - r) || s)), r = a);
  };
  for (n = 0, o = e.length; n < o; ++n) a = t.getPixelForValue(e[n]), l2();
  for (r = void 0, n = 0, o = t.ticks.length; n < o; ++n) a = t.getPixelForTick(n), l2();
  return s;
}
function or(i3, t, e, s) {
  let n = e.barThickness, o, a;
  return T(n) ? (o = t.min * e.categoryPercentage, a = e.barPercentage) : (o = n * s, a = 1), {
    chunk: o / s,
    ratio: a,
    start: t.pixels[i3] - o / 2
  };
}
function ar(i3, t, e, s) {
  let n = t.pixels, o = n[i3], a = i3 > 0 ? n[i3 - 1] : null, r = i3 < n.length - 1 ? n[i3 + 1] : null, l2 = e.categoryPercentage;
  a === null && (a = o - (r === null ? t.end - t.start : r - o)), r === null && (r = o + o - a);
  let c = o - (o - Math.min(a, r)) / 2 * l2;
  return {
    chunk: Math.abs(r - a) / 2 * l2 / s,
    ratio: e.barPercentage,
    start: c
  };
}
function rr(i3, t, e, s) {
  let n = e.parse(i3[0], s), o = e.parse(i3[1], s), a = Math.min(n, o), r = Math.max(n, o), l2 = a, c = r;
  Math.abs(a) > Math.abs(r) && (l2 = r, c = a), t[e.axis] = c, t._custom = {
    barStart: l2,
    barEnd: c,
    start: n,
    end: o,
    min: a,
    max: r
  };
}
function go(i3, t, e, s) {
  return I(i3) ? rr(i3, t, e, s) : t[e.axis] = e.parse(i3, s), t;
}
function On(i3, t, e, s) {
  let n = i3.iScale, o = i3.vScale, a = n.getLabels(), r = n === o, l2 = [], c, h3, d, u;
  for (c = e, h3 = e + s; c < h3; ++c) u = t[c], d = {}, d[n.axis] = r || n.parse(a[c], c), l2.push(go(u, d, o, c));
  return l2;
}
function as(i3) {
  return i3 && i3.barStart !== void 0 && i3.barEnd !== void 0;
}
function lr(i3, t, e) {
  return i3 !== 0 ? ot(i3) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function cr(i3) {
  let t, e, s, n, o;
  return i3.horizontal ? (t = i3.base > i3.x, e = "left", s = "right") : (t = i3.base < i3.y, e = "bottom", s = "top"), t ? (n = "end", o = "start") : (n = "start", o = "end"), {
    start: e,
    end: s,
    reverse: t,
    top: n,
    bottom: o
  };
}
function hr(i3, t, e, s) {
  let n = t.borderSkipped, o = {};
  if (!n) {
    i3.borderSkipped = o;
    return;
  }
  if (n === true) {
    i3.borderSkipped = {
      top: true,
      right: true,
      bottom: true,
      left: true
    };
    return;
  }
  let { start: a, end: r, reverse: l2, top: c, bottom: h3 } = cr(i3);
  n === "middle" && e && (i3.enableBorderRadius = true, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = h3 : (o[Cn(h3, a, r, l2)] = true, n = c)), o[Cn(n, a, r, l2)] = true, i3.borderSkipped = o;
}
function Cn(i3, t, e, s) {
  return s ? (i3 = dr(i3, t, e), i3 = An(i3, e, t)) : i3 = An(i3, t, e), i3;
}
function dr(i3, t, e) {
  return i3 === t ? e : i3 === e ? t : i3;
}
function An(i3, t, e) {
  return i3 === "start" ? t : i3 === "end" ? e : i3;
}
function ur(i3, { inflateAmount: t }, e) {
  i3.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
var Qt = class extends et {
  parsePrimitiveData(t, e, s, n) {
    return On(t, e, s, n);
  }
  parseArrayData(t, e, s, n) {
    return On(t, e, s, n);
  }
  parseObjectData(t, e, s, n) {
    let { iScale: o, vScale: a } = t, { xAxisKey: r = "x", yAxisKey: l2 = "y" } = this._parsing, c = o.axis === "x" ? r : l2, h3 = a.axis === "x" ? r : l2, d = [], u, f, g2, p;
    for (u = s, f = s + n; u < f; ++u) p = e[u], g2 = {}, g2[o.axis] = o.parse(gt(p, c), u), d.push(go(gt(p, h3), g2, a, u));
    return d;
  }
  updateRangeFromParsed(t, e, s, n) {
    super.updateRangeFromParsed(t, e, s, n);
    let o = s._custom;
    o && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    let e = this._cachedMeta, { iScale: s, vScale: n } = e, o = this.getParsed(t), a = o._custom, r = as(a) ? "[" + a.start + ", " + a.end + "]" : "" + n.getLabelForValue(o[n.axis]);
    return {
      label: "" + s.getLabelForValue(o[s.axis]),
      value: r
    };
  }
  initialize() {
    this.enableOptionSharing = true, super.initialize();
    let t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    let e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, s, n) {
    let o = n === "reset", { index: a, _cachedMeta: { vScale: r } } = this, l2 = r.getBasePixel(), c = r.isHorizontal(), h3 = this._getRuler(), { sharedOptions: d, includeOptions: u } = this._getSharedOptions(e, n);
    for (let f = e; f < e + s; f++) {
      let g2 = this.getParsed(f), p = o || T(g2[r.axis]) ? {
        base: l2,
        head: l2
      } : this._calculateBarValuePixels(f), m = this._calculateBarIndexPixels(f, h3), b = (g2._stacks || {})[r.axis], _ = {
        horizontal: c,
        base: p.base,
        enableBorderRadius: !b || as(g2._custom) || a === b._top || a === b._bottom,
        x: c ? p.head : m.center,
        y: c ? m.center : p.head,
        height: c ? m.size : Math.abs(p.size),
        width: c ? Math.abs(p.size) : m.size
      };
      u && (_.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
      let v2 = _.options || t[f].options;
      hr(_, v2, b, a), ur(_, v2, h3.ratio), this.updateElement(t[f], f, _, n);
    }
  }
  _getStacks(t, e) {
    let { iScale: s } = this._cachedMeta, n = s.getMatchingVisibleMetas(this._type).filter((l2) => l2.controller.options.grouped), o = s.options.stacked, a = [], r = (l2) => {
      let c = l2.controller.getParsed(e), h3 = c && c[l2.vScale.axis];
      if (T(h3) || isNaN(h3)) return true;
    };
    for (let l2 of n) if (!(e !== void 0 && r(l2)) && ((o === false || a.indexOf(l2.stack) === -1 || o === void 0 && l2.stack === void 0) && a.push(l2.stack), l2.index === t)) break;
    return a.length || a.push(void 0), a;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, e, s) {
    let n = this._getStacks(t, s), o = e !== void 0 ? n.indexOf(e) : -1;
    return o === -1 ? n.length - 1 : o;
  }
  _getRuler() {
    let t = this.options, e = this._cachedMeta, s = e.iScale, n = [], o, a;
    for (o = 0, a = e.data.length; o < a; ++o) n.push(s.getPixelForValue(this.getParsed(o)[s.axis], o));
    let r = t.barThickness;
    return {
      min: r || nr(e),
      pixels: n,
      start: s._startPixel,
      end: s._endPixel,
      stackCount: this._getStackCount(),
      scale: s,
      grouped: t.grouped,
      ratio: r ? 1 : t.categoryPercentage * t.barPercentage
    };
  }
  _calculateBarValuePixels(t) {
    let { _cachedMeta: { vScale: e, _stacked: s }, options: { base: n, minBarLength: o } } = this, a = n || 0, r = this.getParsed(t), l2 = r._custom, c = as(l2), h3 = r[e.axis], d = 0, u = s ? this.applyStack(e, r, s) : h3, f, g2;
    u !== h3 && (d = u - h3, u = h3), c && (h3 = l2.barStart, u = l2.barEnd - l2.barStart, h3 !== 0 && ot(h3) !== ot(l2.barEnd) && (d = 0), d += h3);
    let p = !T(n) && !c ? n : d, m = e.getPixelForValue(p);
    if (this.chart.getDataVisibility(t) ? f = e.getPixelForValue(d + u) : f = m, g2 = f - m, Math.abs(g2) < o) {
      g2 = lr(g2, e, a) * o, h3 === a && (m -= g2 / 2);
      let b = e.getPixelForDecimal(0), _ = e.getPixelForDecimal(1), v2 = Math.min(b, _), y2 = Math.max(b, _);
      m = Math.max(Math.min(m, y2), v2), f = m + g2;
    }
    if (m === e.getPixelForValue(a)) {
      let b = ot(g2) * e.getLineWidthForValue(a) / 2;
      m += b, g2 -= b;
    }
    return {
      size: g2,
      base: m,
      head: f,
      center: f + g2 / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    let s = e.scale, n = this.options, o = n.skipNull, a = D2(n.maxBarThickness, 1 / 0), r, l2;
    if (e.grouped) {
      let c = o ? this._getStackCount(t) : e.stackCount, h3 = n.barThickness === "flex" ? ar(t, e, n, c) : or(t, e, n, c), d = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
      r = h3.start + h3.chunk * d + h3.chunk / 2, l2 = Math.min(a, h3.chunk * h3.ratio);
    } else r = s.getPixelForValue(this.getParsed(t)[s.axis], t), l2 = Math.min(a, e.min * e.ratio);
    return {
      base: r - l2 / 2,
      head: r + l2 / 2,
      center: r,
      size: l2
    };
  }
  draw() {
    let t = this._cachedMeta, e = t.vScale, s = t.data, n = s.length, o = 0;
    for (; o < n; ++o) this.getParsed(o)[e.axis] !== null && s[o].draw(this._ctx);
  }
};
Qt.id = "bar";
Qt.defaults = {
  datasetElementType: false,
  dataElementType: "bar",
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: true,
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "base",
        "width",
        "height"
      ]
    }
  }
};
Qt.overrides = {
  scales: {
    _index_: {
      type: "category",
      offset: true,
      grid: {
        offset: true
      }
    },
    _value_: {
      type: "linear",
      beginAtZero: true
    }
  }
};
var te2 = class extends et {
  initialize() {
    this.enableOptionSharing = true, super.initialize();
  }
  parsePrimitiveData(t, e, s, n) {
    let o = super.parsePrimitiveData(t, e, s, n);
    for (let a = 0; a < o.length; a++) o[a]._custom = this.resolveDataElementOptions(a + s).radius;
    return o;
  }
  parseArrayData(t, e, s, n) {
    let o = super.parseArrayData(t, e, s, n);
    for (let a = 0; a < o.length; a++) {
      let r = e[s + a];
      o[a]._custom = D2(r[2], this.resolveDataElementOptions(a + s).radius);
    }
    return o;
  }
  parseObjectData(t, e, s, n) {
    let o = super.parseObjectData(t, e, s, n);
    for (let a = 0; a < o.length; a++) {
      let r = e[s + a];
      o[a]._custom = D2(r && r.r && +r.r, this.resolveDataElementOptions(a + s).radius);
    }
    return o;
  }
  getMaxOverflow() {
    let t = this._cachedMeta.data, e = 0;
    for (let s = t.length - 1; s >= 0; --s) e = Math.max(e, t[s].size(this.resolveDataElementOptions(s)) / 2);
    return e > 0 && e;
  }
  getLabelAndValue(t) {
    let e = this._cachedMeta, { xScale: s, yScale: n } = e, o = this.getParsed(t), a = s.getLabelForValue(o.x), r = n.getLabelForValue(o.y), l2 = o._custom;
    return {
      label: e.label,
      value: "(" + a + ", " + r + (l2 ? ", " + l2 : "") + ")"
    };
  }
  update(t) {
    let e = this._cachedMeta.data;
    this.updateElements(e, 0, e.length, t);
  }
  updateElements(t, e, s, n) {
    let o = n === "reset", { iScale: a, vScale: r } = this._cachedMeta, { sharedOptions: l2, includeOptions: c } = this._getSharedOptions(e, n), h3 = a.axis, d = r.axis;
    for (let u = e; u < e + s; u++) {
      let f = t[u], g2 = !o && this.getParsed(u), p = {}, m = p[h3] = o ? a.getPixelForDecimal(0.5) : a.getPixelForValue(g2[h3]), b = p[d] = o ? r.getBasePixel() : r.getPixelForValue(g2[d]);
      p.skip = isNaN(m) || isNaN(b), c && (p.options = l2 || this.resolveDataElementOptions(u, f.active ? "active" : n), o && (p.options.radius = 0)), this.updateElement(f, u, p, n);
    }
  }
  resolveDataElementOptions(t, e) {
    let s = this.getParsed(t), n = super.resolveDataElementOptions(t, e);
    n.$shared && (n = Object.assign({}, n, {
      $shared: false
    }));
    let o = n.radius;
    return e !== "active" && (n.radius = 0), n.radius += D2(s && s._custom, o), n;
  }
};
te2.id = "bubble";
te2.defaults = {
  datasetElementType: false,
  dataElementType: "point",
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "borderWidth",
        "radius"
      ]
    }
  }
};
te2.overrides = {
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return "";
        }
      }
    }
  }
};
function fr(i3, t, e) {
  let s = 1, n = 1, o = 0, a = 0;
  if (t < F) {
    let r = i3, l2 = r + t, c = Math.cos(r), h3 = Math.sin(r), d = Math.cos(l2), u = Math.sin(l2), f = (v2, y2, x) => Ut(v2, r, l2, true) ? 1 : Math.max(y2, y2 * e, x, x * e), g2 = (v2, y2, x) => Ut(v2, r, l2, true) ? -1 : Math.min(y2, y2 * e, x, x * e), p = f(0, c, d), m = f(V2, h3, u), b = g2(B3, c, d), _ = g2(B3 + V2, h3, u);
    s = (p - b) / 2, n = (m - _) / 2, o = -(p + b) / 2, a = -(m + _) / 2;
  }
  return {
    ratioX: s,
    ratioY: n,
    offsetX: o,
    offsetY: a
  };
}
var Ot = class extends et {
  constructor(t, e) {
    super(t, e), this.enableOptionSharing = true, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, e) {
    let s = this.getDataset().data, n = this._cachedMeta;
    if (this._parsing === false) n._parsed = s;
    else {
      let o = (l2) => +s[l2];
      if (O(s[t])) {
        let { key: l2 = "value" } = this._parsing;
        o = (c) => +gt(s[c], l2);
      }
      let a, r;
      for (a = t, r = t + e; a < r; ++a) n._parsed[a] = o(a);
    }
  }
  _getRotation() {
    return nt(this.options.rotation - 90);
  }
  _getCircumference() {
    return nt(this.options.circumference);
  }
  _getRotationExtents() {
    let t = F, e = -F;
    for (let s = 0; s < this.chart.data.datasets.length; ++s) if (this.chart.isDatasetVisible(s)) {
      let n = this.chart.getDatasetMeta(s).controller, o = n._getRotation(), a = n._getCircumference();
      t = Math.min(t, o), e = Math.max(e, o + a);
    }
    return {
      rotation: t,
      circumference: e - t
    };
  }
  update(t) {
    let e = this.chart, { chartArea: s } = e, n = this._cachedMeta, o = n.data, a = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, r = Math.max((Math.min(s.width, s.height) - a) / 2, 0), l2 = Math.min(Hs(this.options.cutout, r), 1), c = this._getRingWeight(this.index), { circumference: h3, rotation: d } = this._getRotationExtents(), { ratioX: u, ratioY: f, offsetX: g2, offsetY: p } = fr(d, h3, l2), m = (s.width - a) / u, b = (s.height - a) / f, _ = Math.max(Math.min(m, b) / 2, 0), v2 = Oi(this.options.radius, _), y2 = Math.max(v2 * l2, 0), x = (v2 - y2) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g2 * v2, this.offsetY = p * v2, n.total = this.calculateTotal(), this.outerRadius = v2 - x * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - x * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    let s = this.options, n = this._cachedMeta, o = this._getCircumference();
    return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / F);
  }
  updateElements(t, e, s, n) {
    let o = n === "reset", a = this.chart, r = a.chartArea, c = a.options.animation, h3 = (r.left + r.right) / 2, d = (r.top + r.bottom) / 2, u = o && c.animateScale, f = u ? 0 : this.innerRadius, g2 = u ? 0 : this.outerRadius, { sharedOptions: p, includeOptions: m } = this._getSharedOptions(e, n), b = this._getRotation(), _;
    for (_ = 0; _ < e; ++_) b += this._circumference(_, o);
    for (_ = e; _ < e + s; ++_) {
      let v2 = this._circumference(_, o), y2 = t[_], x = {
        x: h3 + this.offsetX,
        y: d + this.offsetY,
        startAngle: b,
        endAngle: b + v2,
        circumference: v2,
        outerRadius: g2,
        innerRadius: f
      };
      m && (x.options = p || this.resolveDataElementOptions(_, y2.active ? "active" : n)), b += v2, this.updateElement(y2, _, x, n);
    }
  }
  calculateTotal() {
    let t = this._cachedMeta, e = t.data, s = 0, n;
    for (n = 0; n < e.length; n++) {
      let o = t._parsed[n];
      o !== null && !isNaN(o) && this.chart.getDataVisibility(n) && !e[n].hidden && (s += Math.abs(o));
    }
    return s;
  }
  calculateCircumference(t) {
    let e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? F * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    let e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = Gt(e._parsed[t], s.options.locale);
    return {
      label: n[t] || "",
      value: o
    };
  }
  getMaxBorderWidth(t) {
    let e = 0, s = this.chart, n, o, a, r, l2;
    if (!t) {
      for (n = 0, o = s.data.datasets.length; n < o; ++n) if (s.isDatasetVisible(n)) {
        a = s.getDatasetMeta(n), t = a.data, r = a.controller;
        break;
      }
    }
    if (!t) return 0;
    for (n = 0, o = t.length; n < o; ++n) l2 = r.resolveDataElementOptions(n), l2.borderAlign !== "inner" && (e = Math.max(e, l2.borderWidth || 0, l2.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let s = 0, n = t.length; s < n; ++s) {
      let o = this.resolveDataElementOptions(s);
      e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let s = 0; s < t; ++s) this.chart.isDatasetVisible(s) && (e += this._getRingWeight(s));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(D2(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
};
Ot.id = "doughnut";
Ot.defaults = {
  datasetElementType: false,
  dataElementType: "arc",
  animation: {
    animateRotate: true,
    animateScale: false
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "circumference",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "startAngle",
        "x",
        "y",
        "offset",
        "borderWidth",
        "spacing"
      ]
    }
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r"
};
Ot.descriptors = {
  _scriptable: (i3) => i3 !== "spacing",
  _indexable: (i3) => i3 !== "spacing"
};
Ot.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(i3) {
          let t = i3.data;
          if (t.labels.length && t.datasets.length) {
            let { labels: { pointStyle: e } } = i3.legend.options;
            return t.labels.map((s, n) => {
              let a = i3.getDatasetMeta(0).controller.getStyle(n);
              return {
                text: s,
                fillStyle: a.backgroundColor,
                strokeStyle: a.borderColor,
                lineWidth: a.borderWidth,
                pointStyle: e,
                hidden: !i3.getDataVisibility(n),
                index: n
              };
            });
          }
          return [];
        }
      },
      onClick(i3, t, e) {
        e.chart.toggleDataVisibility(t.index), e.chart.update();
      }
    },
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
        label(i3) {
          let t = i3.label, e = ": " + i3.formattedValue;
          return I(t) ? (t = t.slice(), t[0] += e) : t += e, t;
        }
      }
    }
  }
};
var ee2 = class extends et {
  initialize() {
    this.enableOptionSharing = true, this.supportsDecimation = true, super.initialize();
  }
  update(t) {
    let e = this._cachedMeta, { dataset: s, data: n = [], _dataset: o } = e, a = this.chart._animationsDisabled, { start: r, count: l2 } = Bi(e, n, a);
    this._drawStart = r, this._drawCount = l2, Vi(e) && (r = 0, l2 = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
    let c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !a,
      options: c
    }, t), this.updateElements(n, r, l2, t);
  }
  updateElements(t, e, s, n) {
    let o = n === "reset", { iScale: a, vScale: r, _stacked: l2, _dataset: c } = this._cachedMeta, { sharedOptions: h3, includeOptions: d } = this._getSharedOptions(e, n), u = a.axis, f = r.axis, { spanGaps: g2, segment: p } = this.options, m = Lt(g2) ? g2 : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || o || n === "none", _ = e > 0 && this.getParsed(e - 1);
    for (let v2 = e; v2 < e + s; ++v2) {
      let y2 = t[v2], x = this.getParsed(v2), M2 = b ? y2 : {}, w = T(x[f]), S2 = M2[u] = a.getPixelForValue(x[u], v2), k2 = M2[f] = o || w ? r.getBasePixel() : r.getPixelForValue(l2 ? this.applyStack(r, x, l2) : x[f], v2);
      M2.skip = isNaN(S2) || isNaN(k2) || w, M2.stop = v2 > 0 && Math.abs(x[u] - _[u]) > m, p && (M2.parsed = x, M2.raw = c.data[v2]), d && (M2.options = h3 || this.resolveDataElementOptions(v2, y2.active ? "active" : n)), b || this.updateElement(y2, v2, M2, n), _ = x;
    }
  }
  getMaxOverflow() {
    let t = this._cachedMeta, e = t.dataset, s = e.options && e.options.borderWidth || 0, n = t.data || [];
    if (!n.length) return s;
    let o = n[0].size(this.resolveDataElementOptions(0)), a = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
    return Math.max(s, o, a) / 2;
  }
  draw() {
    let t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
};
ee2.id = "line";
ee2.defaults = {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: true,
  spanGaps: false
};
ee2.overrides = {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
};
var ie = class extends et {
  constructor(t, e) {
    super(t, e), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(t) {
    let e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = Gt(e._parsed[t].r, s.options.locale);
    return {
      label: n[t] || "",
      value: o
    };
  }
  parseObjectData(t, e, s, n) {
    return Gi.bind(this)(t, e, s, n);
  }
  update(t) {
    let e = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(e, 0, e.length, t);
  }
  getMinMax() {
    let t = this._cachedMeta, e = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    return t.data.forEach((s, n) => {
      let o = this.getParsed(n).r;
      !isNaN(o) && this.chart.getDataVisibility(n) && (o < e.min && (e.min = o), o > e.max && (e.max = o));
    }), e;
  }
  _updateRadius() {
    let t = this.chart, e = t.chartArea, s = t.options, n = Math.min(e.right - e.left, e.bottom - e.top), o = Math.max(n / 2, 0), a = Math.max(s.cutoutPercentage ? o / 100 * s.cutoutPercentage : 1, 0), r = (o - a) / t.getVisibleDatasetCount();
    this.outerRadius = o - r * this.index, this.innerRadius = this.outerRadius - r;
  }
  updateElements(t, e, s, n) {
    let o = n === "reset", a = this.chart, l2 = a.options.animation, c = this._cachedMeta.rScale, h3 = c.xCenter, d = c.yCenter, u = c.getIndexAngle(0) - 0.5 * B3, f = u, g2, p = 360 / this.countVisibleElements();
    for (g2 = 0; g2 < e; ++g2) f += this._computeAngle(g2, n, p);
    for (g2 = e; g2 < e + s; g2++) {
      let m = t[g2], b = f, _ = f + this._computeAngle(g2, n, p), v2 = a.getDataVisibility(g2) ? c.getDistanceFromCenterForValue(this.getParsed(g2).r) : 0;
      f = _, o && (l2.animateScale && (v2 = 0), l2.animateRotate && (b = _ = u));
      let y2 = {
        x: h3,
        y: d,
        innerRadius: 0,
        outerRadius: v2,
        startAngle: b,
        endAngle: _,
        options: this.resolveDataElementOptions(g2, m.active ? "active" : n)
      };
      this.updateElement(m, g2, y2, n);
    }
  }
  countVisibleElements() {
    let t = this._cachedMeta, e = 0;
    return t.data.forEach((s, n) => {
      !isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && e++;
    }), e;
  }
  _computeAngle(t, e, s) {
    return this.chart.getDataVisibility(t) ? nt(this.resolveDataElementOptions(t, e).angle || s) : 0;
  }
};
ie.id = "polarArea";
ie.defaults = {
  dataElementType: "arc",
  animation: {
    animateRotate: true,
    animateScale: true
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius"
      ]
    }
  },
  indexAxis: "r",
  startAngle: 0
};
ie.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(i3) {
          let t = i3.data;
          if (t.labels.length && t.datasets.length) {
            let { labels: { pointStyle: e } } = i3.legend.options;
            return t.labels.map((s, n) => {
              let a = i3.getDatasetMeta(0).controller.getStyle(n);
              return {
                text: s,
                fillStyle: a.backgroundColor,
                strokeStyle: a.borderColor,
                lineWidth: a.borderWidth,
                pointStyle: e,
                hidden: !i3.getDataVisibility(n),
                index: n
              };
            });
          }
          return [];
        }
      },
      onClick(i3, t, e) {
        e.chart.toggleDataVisibility(t.index), e.chart.update();
      }
    },
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
        label(i3) {
          return i3.chart.data.labels[i3.dataIndex] + ": " + i3.formattedValue;
        }
      }
    }
  },
  scales: {
    r: {
      type: "radialLinear",
      angleLines: {
        display: false
      },
      beginAtZero: true,
      grid: {
        circular: true
      },
      pointLabels: {
        display: false
      },
      startAngle: 0
    }
  }
};
var Pe3 = class extends Ot {
};
Pe3.id = "pie";
Pe3.defaults = {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
};
var se3 = class extends et {
  getLabelAndValue(t) {
    let e = this._cachedMeta.vScale, s = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: "" + e.getLabelForValue(s[e.axis])
    };
  }
  parseObjectData(t, e, s, n) {
    return Gi.bind(this)(t, e, s, n);
  }
  update(t) {
    let e = this._cachedMeta, s = e.dataset, n = e.data || [], o = e.iScale.getLabels();
    if (s.points = n, t !== "resize") {
      let a = this.resolveDatasetElementOptions(t);
      this.options.showLine || (a.borderWidth = 0);
      let r = {
        _loop: true,
        _fullLoop: o.length === n.length,
        options: a
      };
      this.updateElement(s, void 0, r, t);
    }
    this.updateElements(n, 0, n.length, t);
  }
  updateElements(t, e, s, n) {
    let o = this._cachedMeta.rScale, a = n === "reset";
    for (let r = e; r < e + s; r++) {
      let l2 = t[r], c = this.resolveDataElementOptions(r, l2.active ? "active" : n), h3 = o.getPointPositionForValue(r, this.getParsed(r).r), d = a ? o.xCenter : h3.x, u = a ? o.yCenter : h3.y, f = {
        x: d,
        y: u,
        angle: h3.angle,
        skip: isNaN(d) || isNaN(u),
        options: c
      };
      this.updateElement(l2, r, f, n);
    }
  }
};
se3.id = "radar";
se3.defaults = {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: true,
  elements: {
    line: {
      fill: "start"
    }
  }
};
se3.overrides = {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
};
var it = class {
  constructor() {
    this.x = void 0, this.y = void 0, this.active = false, this.options = void 0, this.$animations = void 0;
  }
  tooltipPosition(t) {
    let { x: e, y: s } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: s
    };
  }
  hasValue() {
    return Lt(this.x) && Lt(this.y);
  }
  getProps(t, e) {
    let s = this.$animations;
    if (!e || !s) return this;
    let n = {};
    return t.forEach((o) => {
      n[o] = s[o] && s[o].active() ? s[o]._to : this[o];
    }), n;
  }
};
it.defaults = {};
it.defaultRoutes = void 0;
var po = {
  values(i3) {
    return I(i3) ? i3 : "" + i3;
  },
  numeric(i3, t, e) {
    if (i3 === 0) return "0";
    let s = this.chart.options.locale, n, o = i3;
    if (e.length > 1) {
      let c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), o = gr(i3, e);
    }
    let a = tt(Math.abs(o)), r = Math.max(Math.min(-1 * Math.floor(a), 20), 0), l2 = {
      notation: n,
      minimumFractionDigits: r,
      maximumFractionDigits: r
    };
    return Object.assign(l2, this.options.ticks.format), Gt(i3, s, l2);
  },
  logarithmic(i3, t, e) {
    if (i3 === 0) return "0";
    let s = i3 / Math.pow(10, Math.floor(tt(i3)));
    return s === 1 || s === 2 || s === 5 ? po.numeric.call(this, i3, t, e) : "";
  }
};
function gr(i3, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i3 !== Math.floor(i3) && (e = i3 - Math.floor(i3)), e;
}
var pi = {
  formatters: po
};
C.set("scale", {
  display: true,
  offset: false,
  reverse: false,
  beginAtZero: false,
  bounds: "ticks",
  grace: 0,
  grid: {
    display: true,
    lineWidth: 1,
    drawBorder: true,
    drawOnChartArea: true,
    drawTicks: true,
    tickLength: 8,
    tickWidth: (i3, t) => t.lineWidth,
    tickColor: (i3, t) => t.color,
    offset: false,
    borderDash: [],
    borderDashOffset: 0,
    borderWidth: 1
  },
  title: {
    display: false,
    text: "",
    padding: {
      top: 4,
      bottom: 4
    }
  },
  ticks: {
    minRotation: 0,
    maxRotation: 50,
    mirror: false,
    textStrokeWidth: 0,
    textStrokeColor: "",
    padding: 3,
    display: true,
    autoSkip: true,
    autoSkipPadding: 3,
    labelOffset: 0,
    callback: pi.formatters.values,
    minor: {},
    major: {},
    align: "center",
    crossAlign: "near",
    showLabelBackdrop: false,
    backdropColor: "rgba(255, 255, 255, 0.75)",
    backdropPadding: 2
  }
});
C.route("scale.ticks", "color", "", "color");
C.route("scale.grid", "color", "", "borderColor");
C.route("scale.grid", "borderColor", "", "borderColor");
C.route("scale.title", "color", "", "color");
C.describe("scale", {
  _fallback: false,
  _scriptable: (i3) => !i3.startsWith("before") && !i3.startsWith("after") && i3 !== "callback" && i3 !== "parser",
  _indexable: (i3) => i3 !== "borderDash" && i3 !== "tickBorderDash"
});
C.describe("scales", {
  _fallback: "scale"
});
C.describe("scale.ticks", {
  _scriptable: (i3) => i3 !== "backdropPadding" && i3 !== "callback",
  _indexable: (i3) => i3 !== "backdropPadding"
});
function pr(i3, t) {
  let e = i3.options.ticks, s = e.maxTicksLimit || mr(i3), n = e.major.enabled ? _r(t) : [], o = n.length, a = n[0], r = n[o - 1], l2 = [];
  if (o > s) return xr(t, l2, n, o / s), l2;
  let c = br(n, t, s);
  if (o > 0) {
    let h3, d, u = o > 1 ? Math.round((r - a) / (o - 1)) : null;
    for (ei(t, l2, c, T(u) ? 0 : a - u, a), h3 = 0, d = o - 1; h3 < d; h3++) ei(t, l2, c, n[h3], n[h3 + 1]);
    return ei(t, l2, c, r, T(u) ? t.length : r + u), l2;
  }
  return ei(t, l2, c), l2;
}
function mr(i3) {
  let t = i3.options.offset, e = i3._tickSize(), s = i3._length / e + (t ? 0 : 1), n = i3._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function br(i3, t, e) {
  let s = yr(i3), n = t.length / e;
  if (!s) return Math.max(n, 1);
  let o = Ys(s);
  for (let a = 0, r = o.length - 1; a < r; a++) {
    let l2 = o[a];
    if (l2 > n) return l2;
  }
  return Math.max(n, 1);
}
function _r(i3) {
  let t = [], e, s;
  for (e = 0, s = i3.length; e < s; e++) i3[e].major && t.push(e);
  return t;
}
function xr(i3, t, e, s) {
  let n = 0, o = e[0], a;
  for (s = Math.ceil(s), a = 0; a < i3.length; a++) a === o && (t.push(i3[a]), n++, o = e[n * s]);
}
function ei(i3, t, e, s, n) {
  let o = D2(s, 0), a = Math.min(D2(n, i3.length), i3.length), r = 0, l2, c, h3;
  for (e = Math.ceil(e), n && (l2 = n - s, e = l2 / Math.floor(l2 / e)), h3 = o; h3 < 0; ) r++, h3 = Math.round(o + r * e);
  for (c = Math.max(o, 0); c < a; c++) c === h3 && (t.push(i3[c]), r++, h3 = Math.round(o + r * e));
}
function yr(i3) {
  let t = i3.length, e, s;
  if (t < 2) return false;
  for (s = i3[0], e = 1; e < t; ++e) if (i3[e] - i3[e - 1] !== s) return false;
  return s;
}
var vr = (i3) => i3 === "left" ? "right" : i3 === "right" ? "left" : i3;
var Tn = (i3, t, e) => t === "top" || t === "left" ? i3[t] + e : i3[t] - e;
function Ln(i3, t) {
  let e = [], s = i3.length / t, n = i3.length, o = 0;
  for (; o < n; o += s) e.push(i3[Math.floor(o)]);
  return e;
}
function Mr2(i3, t, e) {
  let s = i3.ticks.length, n = Math.min(t, s - 1), o = i3._startPixel, a = i3._endPixel, r = 1e-6, l2 = i3.getPixelForTick(n), c;
  if (!(e && (s === 1 ? c = Math.max(l2 - o, a - l2) : t === 0 ? c = (i3.getPixelForTick(1) - l2) / 2 : c = (l2 - i3.getPixelForTick(n - 1)) / 2, l2 += n < t ? c : -c, l2 < o - r || l2 > a + r))) return l2;
}
function wr(i3, t) {
  E(i3, (e) => {
    let s = e.gc, n = s.length / 2, o;
    if (n > t) {
      for (o = 0; o < n; ++o) delete e.data[s[o]];
      s.splice(0, n);
    }
  });
}
function ye3(i3) {
  return i3.drawTicks ? i3.tickLength : 0;
}
function Rn(i3, t) {
  if (!i3.display) return 0;
  let e = $(i3.font, t), s = U(i3.padding);
  return (I(i3.text) ? i3.text.length : 1) * e.lineHeight + s.height;
}
function kr(i3, t) {
  return pt(i3, {
    scale: t,
    type: "scale"
  });
}
function Sr(i3, t, e) {
  return pt(i3, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function Pr(i3, t, e) {
  let s = Ke(i3);
  return (e && t !== "right" || !e && t === "right") && (s = vr(s)), s;
}
function Dr(i3, t, e, s) {
  let { top: n, left: o, bottom: a, right: r, chart: l2 } = i3, { chartArea: c, scales: h3 } = l2, d = 0, u, f, g2, p = a - n, m = r - o;
  if (i3.isHorizontal()) {
    if (f = X2(s, o, r), O(e)) {
      let b = Object.keys(e)[0], _ = e[b];
      g2 = h3[b].getPixelForValue(_) + p - t;
    } else e === "center" ? g2 = (c.bottom + c.top) / 2 + p - t : g2 = Tn(i3, e, t);
    u = r - o;
  } else {
    if (O(e)) {
      let b = Object.keys(e)[0], _ = e[b];
      f = h3[b].getPixelForValue(_) - m + t;
    } else e === "center" ? f = (c.left + c.right) / 2 - m + t : f = Tn(i3, e, t);
    g2 = X2(s, a, n), d = e === "left" ? -V2 : V2;
  }
  return {
    titleX: f,
    titleY: g2,
    maxWidth: u,
    rotation: d
  };
}
var Ft = class i2 extends it {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = false, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = false, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: s, _suggestedMax: n } = this;
    return t = Q2(t, Number.POSITIVE_INFINITY), e = Q2(e, Number.NEGATIVE_INFINITY), s = Q2(s, Number.POSITIVE_INFINITY), n = Q2(n, Number.NEGATIVE_INFINITY), {
      min: Q2(t, s),
      max: Q2(e, n),
      minDefined: N(t),
      maxDefined: N(e)
    };
  }
  getMinMax(t) {
    let { min: e, max: s, minDefined: n, maxDefined: o } = this.getUserBounds(), a;
    if (n && o) return {
      min: e,
      max: s
    };
    let r = this.getMatchingVisibleMetas();
    for (let l2 = 0, c = r.length; l2 < c; ++l2) a = r[l2].controller.getMinMax(this, t), n || (e = Math.min(e, a.min)), o || (s = Math.max(s, a.max));
    return e = o && e > s ? s : e, s = n && e > s ? e : s, {
      min: Q2(e, Q2(s, e)),
      max: Q2(s, Q2(e, s))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    let t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = false;
  }
  beforeUpdate() {
    z2(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, e, s) {
    let { beginAtZero: n, grace: o, ticks: a } = this.options, r = a.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = s = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = cn(this, o, n), this._dataLimitsCached = true), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    let l2 = r < this.ticks.length;
    this._convertTicksToLabels(l2 ? Ln(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), a.display && (a.autoSkip || a.source === "auto") && (this.ticks = pr(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l2 && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, s;
    this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    z2(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    z2(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    z2(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), z2(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    z2(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    let e = this.options.ticks, s, n, o;
    for (s = 0, n = t.length; s < n; s++) o = t[s], o.label = z2(e.callback, [
      o.value,
      s,
      t
    ], this);
  }
  afterTickToLabelConversion() {
    z2(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    z2(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    let t = this.options, e = t.ticks, s = this.ticks.length, n = e.minRotation || 0, o = e.maxRotation, a = n, r, l2, c;
    if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    let h3 = this._getLabelSizes(), d = h3.widest.width, u = h3.highest.height, f = Y2(this.chart.width - d, 0, this.maxWidth);
    r = t.offset ? this.maxWidth / s : f / (s - 1), d + 6 > r && (r = f / (s - (t.offset ? 0.5 : 1)), l2 = this.maxHeight - ye3(t.grid) - e.padding - Rn(t.title, this.chart.options.font), c = Math.sqrt(d * d + u * u), a = Xe(Math.min(Math.asin(Y2((h3.highest.height + 6) / r, -1, 1)), Math.asin(Y2(l2 / c, -1, 1)) - Math.asin(Y2(u / c, -1, 1)))), a = Math.max(n, Math.min(o, a))), this.labelRotation = a;
  }
  afterCalculateLabelRotation() {
    z2(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    z2(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    let t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: s, title: n, grid: o } } = this, a = this._isVisible(), r = this.isHorizontal();
    if (a) {
      let l2 = Rn(n, e.options.font);
      if (r ? (t.width = this.maxWidth, t.height = ye3(o) + l2) : (t.height = this.maxHeight, t.width = ye3(o) + l2), s.display && this.ticks.length) {
        let { first: c, last: h3, widest: d, highest: u } = this._getLabelSizes(), f = s.padding * 2, g2 = nt(this.labelRotation), p = Math.cos(g2), m = Math.sin(g2);
        if (r) {
          let b = s.mirror ? 0 : m * d.width + p * u.height;
          t.height = Math.min(this.maxHeight, t.height + b + f);
        } else {
          let b = s.mirror ? 0 : p * d.width + m * u.height;
          t.width = Math.min(this.maxWidth, t.width + b + f);
        }
        this._calculatePadding(c, h3, m, p);
      }
    }
    this._handleMargins(), r ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, s, n) {
    let { ticks: { align: o, padding: a }, position: r } = this.options, l2 = this.labelRotation !== 0, c = r !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      let h3 = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1), u = 0, f = 0;
      l2 ? c ? (u = n * t.width, f = s * e.height) : (u = s * t.height, f = n * e.width) : o === "start" ? f = e.width : o === "end" ? u = t.width : o !== "inner" && (u = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((u - h3 + a) * this.width / (this.width - h3), 0), this.paddingRight = Math.max((f - d + a) * this.width / (this.width - d), 0);
    } else {
      let h3 = e.height / 2, d = t.height / 2;
      o === "start" ? (h3 = 0, d = t.height) : o === "end" && (h3 = e.height, d = 0), this.paddingTop = h3 + a, this.paddingBottom = d + a;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    z2(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    let { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, s;
    for (e = 0, s = t.length; e < s; e++) T(t[e].label) && (t.splice(e, 1), s--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      let e = this.options.ticks.sampleSize, s = this.ticks;
      e < s.length && (s = Ln(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length);
    }
    return t;
  }
  _computeLabelSizes(t, e) {
    let { ctx: s, _longestTextCache: n } = this, o = [], a = [], r = 0, l2 = 0, c, h3, d, u, f, g2, p, m, b, _, v2;
    for (c = 0; c < e; ++c) {
      if (u = t[c].label, f = this._resolveTickFontOptions(c), s.font = g2 = f.string, p = n[g2] = n[g2] || {
        data: {},
        gc: []
      }, m = f.lineHeight, b = _ = 0, !T(u) && !I(u)) b = ge3(s, p.data, p.gc, b, u), _ = m;
      else if (I(u)) for (h3 = 0, d = u.length; h3 < d; ++h3) v2 = u[h3], !T(v2) && !I(v2) && (b = ge3(s, p.data, p.gc, b, v2), _ += m);
      o.push(b), a.push(_), r = Math.max(b, r), l2 = Math.max(_, l2);
    }
    wr(n, e);
    let y2 = o.indexOf(r), x = a.indexOf(l2), M2 = (w) => ({
      width: o[w] || 0,
      height: a[w] || 0
    });
    return {
      first: M2(0),
      last: M2(e - 1),
      widest: M2(y2),
      highest: M2(x),
      widths: o,
      heights: a
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    let e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    let e = this._startPixel + t * this._length;
    return Us(this._alignToPixels ? Mt(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    let e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    let { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    let e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      let s = e[t];
      return s.$context || (s.$context = Sr(this.getContext(), t, s));
    }
    return this.$context || (this.$context = kr(this.chart.getContext(), this));
  }
  _tickSize() {
    let t = this.options.ticks, e = nt(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), a = t.autoSkipPadding || 0, r = o ? o.widest.width + a : 0, l2 = o ? o.highest.height + a : 0;
    return this.isHorizontal() ? l2 * s > r * n ? r / s : l2 / n : l2 * n < r * s ? l2 / s : r / n;
  }
  _isVisible() {
    let t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    let e = this.axis, s = this.chart, n = this.options, { grid: o, position: a } = n, r = o.offset, l2 = this.isHorizontal(), h3 = this.ticks.length + (r ? 1 : 0), d = ye3(o), u = [], f = o.setContext(this.getContext()), g2 = f.drawBorder ? f.borderWidth : 0, p = g2 / 2, m = function(P) {
      return Mt(s, P, g2);
    }, b, _, v2, y2, x, M2, w, S2, k2, L, R, A3;
    if (a === "top") b = m(this.bottom), M2 = this.bottom - d, S2 = b - p, L = m(t.top) + p, A3 = t.bottom;
    else if (a === "bottom") b = m(this.top), L = t.top, A3 = m(t.bottom) - p, M2 = b + p, S2 = this.top + d;
    else if (a === "left") b = m(this.right), x = this.right - d, w = b - p, k2 = m(t.left) + p, R = t.right;
    else if (a === "right") b = m(this.left), k2 = t.left, R = m(t.right) - p, x = b + p, w = this.left + d;
    else if (e === "x") {
      if (a === "center") b = m((t.top + t.bottom) / 2 + 0.5);
      else if (O(a)) {
        let P = Object.keys(a)[0], j3 = a[P];
        b = m(this.chart.scales[P].getPixelForValue(j3));
      }
      L = t.top, A3 = t.bottom, M2 = b + p, S2 = M2 + d;
    } else if (e === "y") {
      if (a === "center") b = m((t.left + t.right) / 2);
      else if (O(a)) {
        let P = Object.keys(a)[0], j3 = a[P];
        b = m(this.chart.scales[P].getPixelForValue(j3));
      }
      x = b - p, w = x - d, k2 = t.left, R = t.right;
    }
    let H4 = D2(n.ticks.maxTicksLimit, h3), q = Math.max(1, Math.ceil(h3 / H4));
    for (_ = 0; _ < h3; _ += q) {
      let P = o.setContext(this.getContext(_)), j3 = P.lineWidth, W3 = P.color, Ct = P.borderDash || [], bi = P.borderDashOffset, Bt = P.tickWidth, Fe2 = P.tickColor, Vt = P.tickBorderDash || [], he3 = P.tickBorderDashOffset;
      v2 = Mr2(this, _, r), v2 !== void 0 && (y2 = Mt(s, v2, j3), l2 ? x = w = k2 = R = y2 : M2 = S2 = L = A3 = y2, u.push({
        tx1: x,
        ty1: M2,
        tx2: w,
        ty2: S2,
        x1: k2,
        y1: L,
        x2: R,
        y2: A3,
        width: j3,
        color: W3,
        borderDash: Ct,
        borderDashOffset: bi,
        tickWidth: Bt,
        tickColor: Fe2,
        tickBorderDash: Vt,
        tickBorderDashOffset: he3
      }));
    }
    return this._ticksLength = h3, this._borderValue = b, u;
  }
  _computeLabelItems(t) {
    let e = this.axis, s = this.options, { position: n, ticks: o } = s, a = this.isHorizontal(), r = this.ticks, { align: l2, crossAlign: c, padding: h3, mirror: d } = o, u = ye3(s.grid), f = u + h3, g2 = d ? -h3 : f, p = -nt(this.labelRotation), m = [], b, _, v2, y2, x, M2, w, S2, k2, L, R, A3, H4 = "middle";
    if (n === "top") M2 = this.bottom - g2, w = this._getXAxisLabelAlignment();
    else if (n === "bottom") M2 = this.top + g2, w = this._getXAxisLabelAlignment();
    else if (n === "left") {
      let P = this._getYAxisLabelAlignment(u);
      w = P.textAlign, x = P.x;
    } else if (n === "right") {
      let P = this._getYAxisLabelAlignment(u);
      w = P.textAlign, x = P.x;
    } else if (e === "x") {
      if (n === "center") M2 = (t.top + t.bottom) / 2 + f;
      else if (O(n)) {
        let P = Object.keys(n)[0], j3 = n[P];
        M2 = this.chart.scales[P].getPixelForValue(j3) + f;
      }
      w = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center") x = (t.left + t.right) / 2 - f;
      else if (O(n)) {
        let P = Object.keys(n)[0], j3 = n[P];
        x = this.chart.scales[P].getPixelForValue(j3);
      }
      w = this._getYAxisLabelAlignment(u).textAlign;
    }
    e === "y" && (l2 === "start" ? H4 = "top" : l2 === "end" && (H4 = "bottom"));
    let q = this._getLabelSizes();
    for (b = 0, _ = r.length; b < _; ++b) {
      v2 = r[b], y2 = v2.label;
      let P = o.setContext(this.getContext(b));
      S2 = this.getPixelForTick(b) + o.labelOffset, k2 = this._resolveTickFontOptions(b), L = k2.lineHeight, R = I(y2) ? y2.length : 1;
      let j3 = R / 2, W3 = P.color, Ct = P.textStrokeColor, bi = P.textStrokeWidth, Bt = w;
      a ? (x = S2, w === "inner" && (b === _ - 1 ? Bt = this.options.reverse ? "left" : "right" : b === 0 ? Bt = this.options.reverse ? "right" : "left" : Bt = "center"), n === "top" ? c === "near" || p !== 0 ? A3 = -R * L + L / 2 : c === "center" ? A3 = -q.highest.height / 2 - j3 * L + L : A3 = -q.highest.height + L / 2 : c === "near" || p !== 0 ? A3 = L / 2 : c === "center" ? A3 = q.highest.height / 2 - j3 * L : A3 = q.highest.height - R * L, d && (A3 *= -1)) : (M2 = S2, A3 = (1 - R) * L / 2);
      let Fe2;
      if (P.showLabelBackdrop) {
        let Vt = U(P.backdropPadding), he3 = q.heights[b], _i = q.widths[b], xi = M2 + A3 - Vt.top, yi = x - Vt.left;
        switch (H4) {
          case "middle":
            xi -= he3 / 2;
            break;
          case "bottom":
            xi -= he3;
            break;
        }
        switch (w) {
          case "center":
            yi -= _i / 2;
            break;
          case "right":
            yi -= _i;
            break;
        }
        Fe2 = {
          left: yi,
          top: xi,
          width: _i + Vt.width,
          height: he3 + Vt.height,
          color: P.backdropColor
        };
      }
      m.push({
        rotation: p,
        label: y2,
        font: k2,
        color: W3,
        strokeColor: Ct,
        strokeWidth: bi,
        textOffset: A3,
        textAlign: Bt,
        textBaseline: H4,
        translation: [
          x,
          M2
        ],
        backdrop: Fe2
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    let { position: t, ticks: e } = this.options;
    if (-nt(this.labelRotation)) return t === "top" ? "left" : "right";
    let n = "center";
    return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n;
  }
  _getYAxisLabelAlignment(t) {
    let { position: e, ticks: { crossAlign: s, mirror: n, padding: o } } = this.options, a = this._getLabelSizes(), r = t + o, l2 = a.widest.width, c, h3;
    return e === "left" ? n ? (h3 = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", h3 += l2 / 2) : (c = "right", h3 += l2)) : (h3 = this.right - r, s === "near" ? c = "right" : s === "center" ? (c = "center", h3 -= l2 / 2) : (c = "left", h3 = this.left)) : e === "right" ? n ? (h3 = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", h3 -= l2 / 2) : (c = "left", h3 -= l2)) : (h3 = this.left + r, s === "near" ? c = "left" : s === "center" ? (c = "center", h3 += l2 / 2) : (c = "right", h3 = this.right)) : c = "right", {
      textAlign: c,
      x: h3
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    let t = this.chart, e = this.options.position;
    if (e === "left" || e === "right") return {
      top: 0,
      left: this.left,
      bottom: t.height,
      right: this.right
    };
    if (e === "top" || e === "bottom") return {
      top: this.top,
      left: 0,
      bottom: this.bottom,
      right: t.width
    };
  }
  drawBackground() {
    let { ctx: t, options: { backgroundColor: e }, left: s, top: n, width: o, height: a } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(s, n, o, a), t.restore());
  }
  getLineWidthForValue(t) {
    let e = this.options.grid;
    if (!this._isVisible() || !e.display) return 0;
    let n = this.ticks.findIndex((o) => o.value === t);
    return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
  }
  drawGrid(t) {
    let e = this.options.grid, s = this.ctx, n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t)), o, a, r = (l2, c, h3) => {
      !h3.width || !h3.color || (s.save(), s.lineWidth = h3.width, s.strokeStyle = h3.color, s.setLineDash(h3.borderDash || []), s.lineDashOffset = h3.borderDashOffset, s.beginPath(), s.moveTo(l2.x, l2.y), s.lineTo(c.x, c.y), s.stroke(), s.restore());
    };
    if (e.display) for (o = 0, a = n.length; o < a; ++o) {
      let l2 = n[o];
      e.drawOnChartArea && r({
        x: l2.x1,
        y: l2.y1
      }, {
        x: l2.x2,
        y: l2.y2
      }, l2), e.drawTicks && r({
        x: l2.tx1,
        y: l2.ty1
      }, {
        x: l2.tx2,
        y: l2.ty2
      }, {
        color: l2.tickColor,
        width: l2.tickWidth,
        borderDash: l2.tickBorderDash,
        borderDashOffset: l2.tickBorderDashOffset
      });
    }
  }
  drawBorder() {
    let { chart: t, ctx: e, options: { grid: s } } = this, n = s.setContext(this.getContext()), o = s.drawBorder ? n.borderWidth : 0;
    if (!o) return;
    let a = s.setContext(this.getContext(0)).lineWidth, r = this._borderValue, l2, c, h3, d;
    this.isHorizontal() ? (l2 = Mt(t, this.left, o) - o / 2, c = Mt(t, this.right, a) + a / 2, h3 = d = r) : (h3 = Mt(t, this.top, o) - o / 2, d = Mt(t, this.bottom, a) + a / 2, l2 = c = r), e.save(), e.lineWidth = n.borderWidth, e.strokeStyle = n.borderColor, e.beginPath(), e.moveTo(l2, h3), e.lineTo(c, d), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    let s = this.ctx, n = this._computeLabelArea();
    n && be2(s, n);
    let o = this._labelItems || (this._labelItems = this._computeLabelItems(t)), a, r;
    for (a = 0, r = o.length; a < r; ++a) {
      let l2 = o[a], c = l2.font, h3 = l2.label;
      l2.backdrop && (s.fillStyle = l2.backdrop.color, s.fillRect(l2.backdrop.left, l2.backdrop.top, l2.backdrop.width, l2.backdrop.height));
      let d = l2.textOffset;
      wt(s, h3, 0, d, c, l2);
    }
    n && _e3(s);
  }
  drawTitle() {
    let { ctx: t, options: { position: e, title: s, reverse: n } } = this;
    if (!s.display) return;
    let o = $(s.font), a = U(s.padding), r = s.align, l2 = o.lineHeight / 2;
    e === "bottom" || e === "center" || O(e) ? (l2 += a.bottom, I(s.text) && (l2 += o.lineHeight * (s.text.length - 1))) : l2 += a.top;
    let { titleX: c, titleY: h3, maxWidth: d, rotation: u } = Dr(this, l2, e, r);
    wt(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: d,
      rotation: u,
      textAlign: Pr(r, e, n),
      textBaseline: "middle",
      translation: [
        c,
        h3
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    let t = this.options, e = t.ticks && t.ticks.z || 0, s = D2(t.grid && t.grid.z, -1);
    return !this._isVisible() || this.draw !== i2.prototype.draw ? [
      {
        z: e,
        draw: (n) => {
          this.draw(n);
        }
      }
    ] : [
      {
        z: s,
        draw: (n) => {
          this.drawBackground(), this.drawGrid(n), this.drawTitle();
        }
      },
      {
        z: s + 1,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: e,
        draw: (n) => {
          this.drawLabels(n);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    let e = this.chart.getSortedVisibleDatasetMetas(), s = this.axis + "AxisID", n = [], o, a;
    for (o = 0, a = e.length; o < a; ++o) {
      let r = e[o];
      r[s] === this.id && (!t || r.type === t) && n.push(r);
    }
    return n;
  }
  _resolveTickFontOptions(t) {
    let e = this.options.ticks.setContext(this.getContext(t));
    return $(e.font);
  }
  _maxDigits() {
    let t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
};
var Jt = class {
  constructor(t, e, s) {
    this.type = t, this.scope = e, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    let e = Object.getPrototypeOf(t), s;
    Ar(e) && (s = this.register(e));
    let n = this.items, o = t.id, a = this.scope + "." + o;
    if (!o) throw new Error("class does not have id: " + t);
    return o in n || (n[o] = t, Or2(t, a, s), this.override && C.override(t.id, t.overrides)), a;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    let e = this.items, s = t.id, n = this.scope;
    s in e && delete e[s], n && s in C[n] && (delete C[n][s], this.override && delete vt[s]);
  }
};
function Or2(i3, t, e) {
  let s = Ht(/* @__PURE__ */ Object.create(null), [
    e ? C.get(e) : {},
    C.get(t),
    i3.defaults
  ]);
  C.set(t, s), i3.defaultRoutes && Cr(t, i3.defaultRoutes), i3.descriptors && C.describe(t, i3.descriptors);
}
function Cr(i3, t) {
  Object.keys(t).forEach((e) => {
    let s = e.split("."), n = s.pop(), o = [
      i3
    ].concat(s).join("."), a = t[e].split("."), r = a.pop(), l2 = a.join(".");
    C.route(o, n, l2, r);
  });
}
function Ar(i3) {
  return "id" in i3 && "defaults" in i3;
}
var ps = class {
  constructor() {
    this.controllers = new Jt(et, "datasets", true), this.elements = new Jt(it, "elements"), this.plugins = new Jt(Object, "plugins"), this.scales = new Jt(Ft, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, s) {
    [
      ...e
    ].forEach((n) => {
      let o = s || this._getRegistryForType(n);
      s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : E(n, (a) => {
        let r = s || this._getRegistryForType(a);
        this._exec(t, r, a);
      });
    });
  }
  _exec(t, e, s) {
    let n = Ye(t);
    z2(s["before" + n], [], s), e[t](s), z2(s["after" + n], [], s);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      let s = this._typedRegistries[e];
      if (s.isForType(t)) return s;
    }
    return this.plugins;
  }
  _get(t, e, s) {
    let n = e.get(t);
    if (n === void 0) throw new Error('"' + t + '" is not a registered ' + s + ".");
    return n;
  }
};
var ht = new ps();
var ne2 = class extends et {
  update(t) {
    let e = this._cachedMeta, { data: s = [] } = e, n = this.chart._animationsDisabled, { start: o, count: a } = Bi(e, s, n);
    if (this._drawStart = o, this._drawCount = a, Vi(e) && (o = 0, a = s.length), this.options.showLine) {
      let { dataset: r, _dataset: l2 } = e;
      r._chart = this.chart, r._datasetIndex = this.index, r._decimated = !!l2._decimated, r.points = s;
      let c = this.resolveDatasetElementOptions(t);
      c.segment = this.options.segment, this.updateElement(r, void 0, {
        animated: !n,
        options: c
      }, t);
    }
    this.updateElements(s, o, a, t);
  }
  addElements() {
    let { showLine: t } = this.options;
    !this.datasetElementType && t && (this.datasetElementType = ht.getElement("line")), super.addElements();
  }
  updateElements(t, e, s, n) {
    let o = n === "reset", { iScale: a, vScale: r, _stacked: l2, _dataset: c } = this._cachedMeta, h3 = this.resolveDataElementOptions(e, n), d = this.getSharedOptions(h3), u = this.includeOptions(n, d), f = a.axis, g2 = r.axis, { spanGaps: p, segment: m } = this.options, b = Lt(p) ? p : Number.POSITIVE_INFINITY, _ = this.chart._animationsDisabled || o || n === "none", v2 = e > 0 && this.getParsed(e - 1);
    for (let y2 = e; y2 < e + s; ++y2) {
      let x = t[y2], M2 = this.getParsed(y2), w = _ ? x : {}, S2 = T(M2[g2]), k2 = w[f] = a.getPixelForValue(M2[f], y2), L = w[g2] = o || S2 ? r.getBasePixel() : r.getPixelForValue(l2 ? this.applyStack(r, M2, l2) : M2[g2], y2);
      w.skip = isNaN(k2) || isNaN(L) || S2, w.stop = y2 > 0 && Math.abs(M2[f] - v2[f]) > b, m && (w.parsed = M2, w.raw = c.data[y2]), u && (w.options = d || this.resolveDataElementOptions(y2, x.active ? "active" : n)), _ || this.updateElement(x, y2, w, n), v2 = M2;
    }
    this.updateSharedOptions(d, n, h3);
  }
  getMaxOverflow() {
    let t = this._cachedMeta, e = t.data || [];
    if (!this.options.showLine) {
      let r = 0;
      for (let l2 = e.length - 1; l2 >= 0; --l2) r = Math.max(r, e[l2].size(this.resolveDataElementOptions(l2)) / 2);
      return r > 0 && r;
    }
    let s = t.dataset, n = s.options && s.options.borderWidth || 0;
    if (!e.length) return n;
    let o = e[0].size(this.resolveDataElementOptions(0)), a = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
    return Math.max(n, o, a) / 2;
  }
};
ne2.id = "scatter";
ne2.defaults = {
  datasetElementType: false,
  dataElementType: "point",
  showLine: false,
  fill: false
};
ne2.overrides = {
  interaction: {
    mode: "point"
  },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
        label(i3) {
          return "(" + i3.label + ", " + i3.formattedValue + ")";
        }
      }
    }
  },
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
};
var Tr = Object.freeze({
  __proto__: null,
  BarController: Qt,
  BubbleController: te2,
  DoughnutController: Ot,
  LineController: ee2,
  PolarAreaController: ie,
  PieController: Pe3,
  RadarController: se3,
  ScatterController: ne2
});
function Et() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
var De = class {
  constructor(t) {
    this.options = t || {};
  }
  init(t) {
  }
  formats() {
    return Et();
  }
  parse(t, e) {
    return Et();
  }
  format(t, e) {
    return Et();
  }
  add(t, e, s) {
    return Et();
  }
  diff(t, e, s) {
    return Et();
  }
  startOf(t, e, s) {
    return Et();
  }
  endOf(t, e) {
    return Et();
  }
};
De.override = function(i3) {
  Object.assign(De.prototype, i3);
};
var Lr = {
  _date: De
};
function Rr(i3, t, e, s) {
  let { controller: n, data: o, _sorted: a } = i3, r = n._cachedMeta.iScale;
  if (r && t === r.axis && t !== "r" && a && o.length) {
    let l2 = r._reversePixels ? Ks : at;
    if (s) {
      if (n._sharedOptions) {
        let c = o[0], h3 = typeof c.getRange == "function" && c.getRange(t);
        if (h3) {
          let d = l2(o, t, e - h3), u = l2(o, t, e + h3);
          return {
            lo: d.lo,
            hi: u.hi
          };
        }
      }
    } else return l2(o, t, e);
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function Ee2(i3, t, e, s, n) {
  let o = i3.getSortedVisibleDatasetMetas(), a = e[t];
  for (let r = 0, l2 = o.length; r < l2; ++r) {
    let { index: c, data: h3 } = o[r], { lo: d, hi: u } = Rr(o[r], t, a, n);
    for (let f = d; f <= u; ++f) {
      let g2 = h3[f];
      g2.skip || s(g2, c, f);
    }
  }
}
function Er(i3) {
  let t = i3.indexOf("x") !== -1, e = i3.indexOf("y") !== -1;
  return function(s, n) {
    let o = t ? Math.abs(s.x - n.x) : 0, a = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2));
  };
}
function rs(i3, t, e, s, n) {
  let o = [];
  return !n && !i3.isPointInArea(t) || Ee2(i3, e, t, function(r, l2, c) {
    !n && !jt(r, i3.chartArea, 0) || r.inRange(t.x, t.y, s) && o.push({
      element: r,
      datasetIndex: l2,
      index: c
    });
  }, true), o;
}
function Fr(i3, t, e, s) {
  let n = [];
  function o(a, r, l2) {
    let { startAngle: c, endAngle: h3 } = a.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: d } = Ri2(a, {
      x: t.x,
      y: t.y
    });
    Ut(d, c, h3) && n.push({
      element: a,
      datasetIndex: r,
      index: l2
    });
  }
  return Ee2(i3, e, t, o), n;
}
function Ir(i3, t, e, s, n, o) {
  let a = [], r = Er(e), l2 = Number.POSITIVE_INFINITY;
  function c(h3, d, u) {
    let f = h3.inRange(t.x, t.y, n);
    if (s && !f) return;
    let g2 = h3.getCenterPoint(n);
    if (!(!!o || i3.isPointInArea(g2)) && !f) return;
    let m = r(t, g2);
    m < l2 ? (a = [
      {
        element: h3,
        datasetIndex: d,
        index: u
      }
    ], l2 = m) : m === l2 && a.push({
      element: h3,
      datasetIndex: d,
      index: u
    });
  }
  return Ee2(i3, e, t, c), a;
}
function ls(i3, t, e, s, n, o) {
  return !o && !i3.isPointInArea(t) ? [] : e === "r" && !s ? Fr(i3, t, e, n) : Ir(i3, t, e, s, n, o);
}
function En(i3, t, e, s, n) {
  let o = [], a = e === "x" ? "inXRange" : "inYRange", r = false;
  return Ee2(i3, e, t, (l2, c, h3) => {
    l2[a](t[e], n) && (o.push({
      element: l2,
      datasetIndex: c,
      index: h3
    }), r = r || l2.inRange(t.x, t.y, n));
  }), s && !r ? [] : o;
}
var zr = {
  evaluateInteractionItems: Ee2,
  modes: {
    index(i3, t, e, s) {
      let n = St(t, i3), o = e.axis || "x", a = e.includeInvisible || false, r = e.intersect ? rs(i3, n, o, s, a) : ls(i3, n, o, false, s, a), l2 = [];
      return r.length ? (i3.getSortedVisibleDatasetMetas().forEach((c) => {
        let h3 = r[0].index, d = c.data[h3];
        d && !d.skip && l2.push({
          element: d,
          datasetIndex: c.index,
          index: h3
        });
      }), l2) : [];
    },
    dataset(i3, t, e, s) {
      let n = St(t, i3), o = e.axis || "xy", a = e.includeInvisible || false, r = e.intersect ? rs(i3, n, o, s, a) : ls(i3, n, o, false, s, a);
      if (r.length > 0) {
        let l2 = r[0].datasetIndex, c = i3.getDatasetMeta(l2).data;
        r = [];
        for (let h3 = 0; h3 < c.length; ++h3) r.push({
          element: c[h3],
          datasetIndex: l2,
          index: h3
        });
      }
      return r;
    },
    point(i3, t, e, s) {
      let n = St(t, i3), o = e.axis || "xy", a = e.includeInvisible || false;
      return rs(i3, n, o, s, a);
    },
    nearest(i3, t, e, s) {
      let n = St(t, i3), o = e.axis || "xy", a = e.includeInvisible || false;
      return ls(i3, n, o, e.intersect, s, a);
    },
    x(i3, t, e, s) {
      let n = St(t, i3);
      return En(i3, n, "x", e.intersect, s);
    },
    y(i3, t, e, s) {
      let n = St(t, i3);
      return En(i3, n, "y", e.intersect, s);
    }
  }
};
var mo = [
  "left",
  "top",
  "right",
  "bottom"
];
function ve3(i3, t) {
  return i3.filter((e) => e.pos === t);
}
function Fn(i3, t) {
  return i3.filter((e) => mo.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Me(i3, t) {
  return i3.sort((e, s) => {
    let n = t ? s : e, o = t ? e : s;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function Br(i3) {
  let t = [], e, s, n, o, a, r;
  for (e = 0, s = (i3 || []).length; e < s; ++e) n = i3[e], { position: o, options: { stack: a, stackWeight: r = 1 } } = n, t.push({
    index: e,
    box: n,
    pos: o,
    horizontal: n.isHorizontal(),
    weight: n.weight,
    stack: a && o + a,
    stackWeight: r
  });
  return t;
}
function Vr(i3) {
  let t = {};
  for (let e of i3) {
    let { stack: s, pos: n, stackWeight: o } = e;
    if (!s || !mo.includes(n)) continue;
    let a = t[s] || (t[s] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    a.count++, a.weight += o;
  }
  return t;
}
function Nr(i3, t) {
  let e = Vr(i3), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t, o, a, r;
  for (o = 0, a = i3.length; o < a; ++o) {
    r = i3[o];
    let { fullSize: l2 } = r.box, c = e[r.stack], h3 = c && r.stackWeight / c.weight;
    r.horizontal ? (r.width = h3 ? h3 * s : l2 && t.availableWidth, r.height = n) : (r.width = s, r.height = h3 ? h3 * n : l2 && t.availableHeight);
  }
  return e;
}
function Wr(i3) {
  let t = Br(i3), e = Me(t.filter((c) => c.box.fullSize), true), s = Me(ve3(t, "left"), true), n = Me(ve3(t, "right")), o = Me(ve3(t, "top"), true), a = Me(ve3(t, "bottom")), r = Fn(t, "x"), l2 = Fn(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(o),
    rightAndBottom: n.concat(l2).concat(a).concat(r),
    chartArea: ve3(t, "chartArea"),
    vertical: s.concat(n).concat(l2),
    horizontal: o.concat(a).concat(r)
  };
}
function In(i3, t, e, s) {
  return Math.max(i3[e], t[e]) + Math.max(i3[s], t[s]);
}
function bo(i3, t) {
  i3.top = Math.max(i3.top, t.top), i3.left = Math.max(i3.left, t.left), i3.bottom = Math.max(i3.bottom, t.bottom), i3.right = Math.max(i3.right, t.right);
}
function Hr(i3, t, e, s) {
  let { pos: n, box: o } = e, a = i3.maxPadding;
  if (!O(n)) {
    e.size && (i3[n] -= e.size);
    let d = s[e.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i3[n] += e.size;
  }
  o.getPadding && bo(a, o.getPadding());
  let r = Math.max(0, t.outerWidth - In(a, i3, "left", "right")), l2 = Math.max(0, t.outerHeight - In(a, i3, "top", "bottom")), c = r !== i3.w, h3 = l2 !== i3.h;
  return i3.w = r, i3.h = l2, e.horizontal ? {
    same: c,
    other: h3
  } : {
    same: h3,
    other: c
  };
}
function jr(i3) {
  let t = i3.maxPadding;
  function e(s) {
    let n = Math.max(t[s] - i3[s], 0);
    return i3[s] += n, n;
  }
  i3.y += e("top"), i3.x += e("left"), e("right"), e("bottom");
}
function $r(i3, t) {
  let e = t.maxPadding;
  function s(n) {
    let o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return n.forEach((a) => {
      o[a] = Math.max(t[a], e[a]);
    }), o;
  }
  return s(i3 ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function ke3(i3, t, e, s) {
  let n = [], o, a, r, l2, c, h3;
  for (o = 0, a = i3.length, c = 0; o < a; ++o) {
    r = i3[o], l2 = r.box, l2.update(r.width || t.w, r.height || t.h, $r(r.horizontal, t));
    let { same: d, other: u } = Hr(t, e, r, s);
    c |= d && n.length, h3 = h3 || u, l2.fullSize || n.push(r);
  }
  return c && ke3(n, t, e, s) || h3;
}
function ii(i3, t, e, s, n) {
  i3.top = e, i3.left = t, i3.right = t + s, i3.bottom = e + n, i3.width = s, i3.height = n;
}
function zn(i3, t, e, s) {
  let n = e.padding, { x: o, y: a } = t;
  for (let r of i3) {
    let l2 = r.box, c = s[r.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    }, h3 = r.stackWeight / c.weight || 1;
    if (r.horizontal) {
      let d = t.w * h3, u = c.size || l2.height;
      J2(c.start) && (a = c.start), l2.fullSize ? ii(l2, n.left, a, e.outerWidth - n.right - n.left, u) : ii(l2, t.left + c.placed, a, d, u), c.start = a, c.placed += d, a = l2.bottom;
    } else {
      let d = t.h * h3, u = c.size || l2.width;
      J2(c.start) && (o = c.start), l2.fullSize ? ii(l2, o, n.top, u, e.outerHeight - n.bottom - n.top) : ii(l2, o, t.top + c.placed, u, d), c.start = o, c.placed += d, o = l2.right;
    }
  }
  t.x = o, t.y = a;
}
C.set("layout", {
  autoPadding: true,
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});
var K2 = {
  addBox(i3, t) {
    i3.boxes || (i3.boxes = []), t.fullSize = t.fullSize || false, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(e) {
            t.draw(e);
          }
        }
      ];
    }, i3.boxes.push(t);
  },
  removeBox(i3, t) {
    let e = i3.boxes ? i3.boxes.indexOf(t) : -1;
    e !== -1 && i3.boxes.splice(e, 1);
  },
  configure(i3, t, e) {
    t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
  },
  update(i3, t, e, s) {
    if (!i3) return;
    let n = U(i3.options.layout.padding), o = Math.max(t - n.width, 0), a = Math.max(e - n.height, 0), r = Wr(i3.boxes), l2 = r.vertical, c = r.horizontal;
    E(i3.boxes, (p) => {
      typeof p.beforeLayout == "function" && p.beforeLayout();
    });
    let h3 = l2.reduce((p, m) => m.box.options && m.box.options.display === false ? p : p + 1, 0) || 1, d = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: n,
      availableWidth: o,
      availableHeight: a,
      vBoxMaxWidth: o / 2 / h3,
      hBoxMaxHeight: a / 2
    }), u = Object.assign({}, n);
    bo(u, U(s));
    let f = Object.assign({
      maxPadding: u,
      w: o,
      h: a,
      x: n.left,
      y: n.top
    }, n), g2 = Nr(l2.concat(c), d);
    ke3(r.fullSize, f, d, g2), ke3(l2, f, d, g2), ke3(c, f, d, g2) && ke3(l2, f, d, g2), jr(f), zn(r.leftAndTop, f, d, g2), f.x += f.w, f.y += f.h, zn(r.rightAndBottom, f, d, g2), i3.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, E(r.chartArea, (p) => {
      let m = p.box;
      Object.assign(m, i3.chartArea), m.update(f.w, f.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
var ci = class {
  acquireContext(t, e) {
  }
  releaseContext(t) {
    return false;
  }
  addEventListener(t, e, s) {
  }
  removeEventListener(t, e, s) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, s, n) {
    return e = Math.max(0, e || t.width), s = s || t.height, {
      width: e,
      height: Math.max(0, n ? Math.floor(e / n) : s)
    };
  }
  isAttached(t) {
    return true;
  }
  updateConfig(t) {
  }
};
var ms = class extends ci {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = false;
  }
};
var ri = "$chartjs";
var Yr = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
};
var Bn = (i3) => i3 === null || i3 === "";
function Xr(i3, t) {
  let e = i3.style, s = i3.getAttribute("height"), n = i3.getAttribute("width");
  if (i3[ri] = {
    initial: {
      height: s,
      width: n,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Bn(n)) {
    let o = Qi(i3, "width");
    o !== void 0 && (i3.width = o);
  }
  if (Bn(s)) if (i3.style.height === "") i3.height = i3.width / (t || 2);
  else {
    let o = Qi(i3, "height");
    o !== void 0 && (i3.height = o);
  }
  return i3;
}
var _o = mn ? {
  passive: true
} : false;
function Ur(i3, t, e) {
  i3.addEventListener(t, e, _o);
}
function Kr(i3, t, e) {
  i3.canvas.removeEventListener(t, e, _o);
}
function qr(i3, t) {
  let e = Yr[i3.type] || i3.type, { x: s, y: n } = St(i3, t);
  return {
    type: e,
    chart: t,
    native: i3,
    x: s !== void 0 ? s : null,
    y: n !== void 0 ? n : null
  };
}
function hi(i3, t) {
  for (let e of i3) if (e === t || e.contains(t)) return true;
}
function Gr(i3, t, e) {
  let s = i3.canvas, n = new MutationObserver((o) => {
    let a = false;
    for (let r of o) a = a || hi(r.addedNodes, s), a = a && !hi(r.removedNodes, s);
    a && e();
  });
  return n.observe(document, {
    childList: true,
    subtree: true
  }), n;
}
function Zr(i3, t, e) {
  let s = i3.canvas, n = new MutationObserver((o) => {
    let a = false;
    for (let r of o) a = a || hi(r.removedNodes, s), a = a && !hi(r.addedNodes, s);
    a && e();
  });
  return n.observe(document, {
    childList: true,
    subtree: true
  }), n;
}
var Oe2 = /* @__PURE__ */ new Map();
var Vn = 0;
function xo() {
  let i3 = globalThis.devicePixelRatio;
  i3 !== Vn && (Vn = i3, Oe2.forEach((t, e) => {
    e.currentDevicePixelRatio !== i3 && t();
  }));
}
function Jr(i3, t) {
  Oe2.size || globalThis.addEventListener("resize", xo), Oe2.set(i3, t);
}
function Qr(i3) {
  Oe2.delete(i3), Oe2.size || globalThis.removeEventListener("resize", xo);
}
function tl(i3, t, e) {
  let s = i3.canvas, n = s && Qe(s);
  if (!n) return;
  let o = zi((r, l2) => {
    let c = n.clientWidth;
    e(r, l2), c < n.clientWidth && e();
  }, globalThis), a = new ResizeObserver((r) => {
    let l2 = r[0], c = l2.contentRect.width, h3 = l2.contentRect.height;
    c === 0 && h3 === 0 || o(c, h3);
  });
  return a.observe(n), Jr(i3, o), a;
}
function cs(i3, t, e) {
  e && e.disconnect(), t === "resize" && Qr(i3);
}
function el(i3, t, e) {
  let s = i3.canvas, n = zi((o) => {
    i3.ctx !== null && e(qr(o, i3));
  }, i3, (o) => {
    let a = o[0];
    return [
      a,
      a.offsetX,
      a.offsetY
    ];
  });
  return Ur(s, t, n), n;
}
var bs = class extends ci {
  acquireContext(t, e) {
    let s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (Xr(t, e), s) : null;
  }
  releaseContext(t) {
    let e = t.canvas;
    if (!e[ri]) return false;
    let s = e[ri].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      let a = s[o];
      T(a) ? e.removeAttribute(o) : e.setAttribute(o, a);
    });
    let n = s.style || {};
    return Object.keys(n).forEach((o) => {
      e.style[o] = n[o];
    }), e.width = e.width, delete e[ri], true;
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    let n = t.$proxies || (t.$proxies = {}), a = {
      attach: Gr,
      detach: Zr,
      resize: tl
    }[e] || el;
    n[e] = a(t, e, s);
  }
  removeEventListener(t, e) {
    let s = t.$proxies || (t.$proxies = {}), n = s[e];
    if (!n) return;
    ({
      attach: cs,
      detach: cs,
      resize: cs
    }[e] || Kr)(t, e, n), s[e] = void 0;
  }
  getDevicePixelRatio() {
    return globalThis.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return pn(t, e, s, n);
  }
  isAttached(t) {
    let e = Qe(t);
    return !!(e && e.isConnected);
  }
};
function il(i3) {
  return !Zi() || typeof OffscreenCanvas < "u" && i3 instanceof OffscreenCanvas ? ms : bs;
}
var _s2 = class {
  constructor() {
    this._init = [];
  }
  notify(t, e, s, n) {
    e === "beforeInit" && (this._init = this._createDescriptors(t, true), this._notify(this._init, t, "install"));
    let o = n ? this._descriptors(t).filter(n) : this._descriptors(t), a = this._notify(o, t, e, s);
    return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), a;
  }
  _notify(t, e, s, n) {
    n = n || {};
    for (let o of t) {
      let a = o.plugin, r = a[s], l2 = [
        e,
        n,
        o.options
      ];
      if (z2(r, l2, a) === false && n.cancelable) return false;
    }
    return true;
  }
  invalidate() {
    T(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    let e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    let s = t && t.config, n = D2(s.options && s.options.plugins, {}), o = sl(s);
    return n === false && !e ? [] : ol(t, o, n, e);
  }
  _notifyStateChanges(t) {
    let e = this._oldCache || [], s = this._cache, n = (o, a) => o.filter((r) => !a.some((l2) => r.plugin.id === l2.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
};
function sl(i3) {
  let t = {}, e = [], s = Object.keys(ht.plugins.items);
  for (let o = 0; o < s.length; o++) e.push(ht.getPlugin(s[o]));
  let n = i3.plugins || [];
  for (let o = 0; o < n.length; o++) {
    let a = n[o];
    e.indexOf(a) === -1 && (e.push(a), t[a.id] = true);
  }
  return {
    plugins: e,
    localIds: t
  };
}
function nl(i3, t) {
  return !t && i3 === false ? null : i3 === true ? {} : i3;
}
function ol(i3, { plugins: t, localIds: e }, s, n) {
  let o = [], a = i3.getContext();
  for (let r of t) {
    let l2 = r.id, c = nl(s[l2], n);
    c !== null && o.push({
      plugin: r,
      options: al(i3.config, {
        plugin: r,
        local: e[l2]
      }, c, a)
    });
  }
  return o;
}
function al(i3, { plugin: t, local: e }, s, n) {
  let o = i3.pluginScopeKeys(t), a = i3.getOptionScopes(s, o);
  return e && t.defaults && a.push(t.defaults), i3.createResolver(a, n, [
    ""
  ], {
    scriptable: false,
    indexable: false,
    allKeys: true
  });
}
function xs2(i3, t) {
  let e = C.datasets[i3] || {};
  return ((t.datasets || {})[i3] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function rl(i3, t) {
  let e = i3;
  return i3 === "_index_" ? e = t : i3 === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function ll(i3, t) {
  return i3 === t ? "_index_" : "_value_";
}
function cl(i3) {
  if (i3 === "top" || i3 === "bottom") return "x";
  if (i3 === "left" || i3 === "right") return "y";
}
function ys(i3, t) {
  return i3 === "x" || i3 === "y" ? i3 : t.axis || cl(t.position) || i3.charAt(0).toLowerCase();
}
function hl(i3, t) {
  let e = vt[i3.type] || {
    scales: {}
  }, s = t.scales || {}, n = xs2(i3.type, t), o = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((r) => {
    let l2 = s[r];
    if (!O(l2)) return console.error(`Invalid scale configuration for scale: ${r}`);
    if (l2._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    let c = ys(r, l2), h3 = ll(c, n), d = e.scales || {};
    o[c] = o[c] || r, a[r] = Yt(/* @__PURE__ */ Object.create(null), [
      {
        axis: c
      },
      l2,
      d[c],
      d[h3]
    ]);
  }), i3.data.datasets.forEach((r) => {
    let l2 = r.type || i3.type, c = r.indexAxis || xs2(l2, t), d = (vt[l2] || {}).scales || {};
    Object.keys(d).forEach((u) => {
      let f = rl(u, c), g2 = r[f + "AxisID"] || o[f] || f;
      a[g2] = a[g2] || /* @__PURE__ */ Object.create(null), Yt(a[g2], [
        {
          axis: f
        },
        s[g2],
        d[u]
      ]);
    });
  }), Object.keys(a).forEach((r) => {
    let l2 = a[r];
    Yt(l2, [
      C.scales[l2.type],
      C.scale
    ]);
  }), a;
}
function yo(i3) {
  let t = i3.options || (i3.options = {});
  t.plugins = D2(t.plugins, {}), t.scales = hl(i3, t);
}
function vo(i3) {
  return i3 = i3 || {}, i3.datasets = i3.datasets || [], i3.labels = i3.labels || [], i3;
}
function dl(i3) {
  return i3 = i3 || {}, i3.data = vo(i3.data), yo(i3), i3;
}
var Nn = /* @__PURE__ */ new Map();
var Mo = /* @__PURE__ */ new Set();
function si(i3, t) {
  let e = Nn.get(i3);
  return e || (e = t(), Nn.set(i3, e), Mo.add(e)), e;
}
var we3 = (i3, t, e) => {
  let s = gt(t, e);
  s !== void 0 && i3.add(s);
};
var vs = class {
  constructor(t) {
    this._config = dl(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = vo(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    let t = this._config;
    this.clearCache(), yo(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return si(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return si(`${t}.transition.${e}`, () => [
      [
        `datasets.${t}.transitions.${e}`,
        `transitions.${e}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return si(`${t}-${e}`, () => [
      [
        `datasets.${t}.elements.${e}`,
        `datasets.${t}`,
        `elements.${e}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    let e = t.id, s = this.type;
    return si(`${s}-plugin-${e}`, () => [
      [
        `plugins.${e}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, e) {
    let s = this._scopeCache, n = s.get(t);
    return (!n || e) && (n = /* @__PURE__ */ new Map(), s.set(t, n)), n;
  }
  getOptionScopes(t, e, s) {
    let { options: n, type: o } = this, a = this._cachedScopes(t, s), r = a.get(e);
    if (r) return r;
    let l2 = /* @__PURE__ */ new Set();
    e.forEach((h3) => {
      t && (l2.add(t), h3.forEach((d) => we3(l2, t, d))), h3.forEach((d) => we3(l2, n, d)), h3.forEach((d) => we3(l2, vt[o] || {}, d)), h3.forEach((d) => we3(l2, C, d)), h3.forEach((d) => we3(l2, qe2, d));
    });
    let c = Array.from(l2);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Mo.has(e) && a.set(e, c), c;
  }
  chartOptionScopes() {
    let { options: t, type: e } = this;
    return [
      t,
      vt[e] || {},
      C.datasets[e] || {},
      {
        type: e
      },
      C,
      qe2
    ];
  }
  resolveNamedOptions(t, e, s, n = [
    ""
  ]) {
    let o = {
      $shared: true
    }, { resolver: a, subPrefixes: r } = Wn(this._resolverCache, t, n), l2 = a;
    if (fl(a, e)) {
      o.$shared = false, s = ft(s) ? s() : s;
      let c = this.createResolver(t, s, r);
      l2 = Tt(a, s, c);
    }
    for (let c of e) o[c] = l2[c];
    return o;
  }
  createResolver(t, e, s = [
    ""
  ], n) {
    let { resolver: o } = Wn(this._resolverCache, t, s);
    return O(e) ? Tt(o, e, void 0, n) : o;
  }
};
function Wn(i3, t, e) {
  let s = i3.get(t);
  s || (s = /* @__PURE__ */ new Map(), i3.set(t, s));
  let n = e.join(), o = s.get(n);
  return o || (o = {
    resolver: Je(t, e),
    subPrefixes: e.filter((r) => !r.toLowerCase().includes("hover"))
  }, s.set(n, o)), o;
}
var ul = (i3) => O(i3) && Object.getOwnPropertyNames(i3).reduce((t, e) => t || ft(i3[e]), false);
function fl(i3, t) {
  let { isScriptable: e, isIndexable: s } = Ui(i3);
  for (let n of t) {
    let o = e(n), a = s(n), r = (a || o) && i3[n];
    if (o && (ft(r) || ul(r)) || a && I(r)) return true;
  }
  return false;
}
var gl = "3.9.1";
var pl = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Hn(i3, t) {
  return i3 === "top" || i3 === "bottom" || pl.indexOf(i3) === -1 && t === "x";
}
function jn(i3, t) {
  return function(e, s) {
    return e[i3] === s[i3] ? e[t] - s[t] : e[i3] - s[i3];
  };
}
function $n(i3) {
  let t = i3.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), z2(e && e.onComplete, [
    i3
  ], t);
}
function ml(i3) {
  let t = i3.chart, e = t.options.animation;
  z2(e && e.onProgress, [
    i3
  ], t);
}
function wo(i3) {
  return Zi() && typeof i3 == "string" ? i3 = document.getElementById(i3) : i3 && i3.length && (i3 = i3[0]), i3 && i3.canvas && (i3 = i3.canvas), i3;
}
var di = {};
var ko = (i3) => {
  let t = wo(i3);
  return Object.values(di).filter((e) => e.canvas === t).pop();
};
function bl(i3, t, e) {
  let s = Object.keys(i3);
  for (let n of s) {
    let o = +n;
    if (o >= t) {
      let a = i3[n];
      delete i3[n], (e > 0 || o > t) && (i3[o + e] = a);
    }
  }
}
function _l(i3, t, e, s) {
  return !e || i3.type === "mouseout" ? null : s ? t : i3;
}
var ui = class {
  constructor(t, e) {
    let s = this.config = new vs(e), n = wo(t), o = ko(n);
    if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    let a = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || il(n))(), this.platform.updateConfig(s);
    let r = this.platform.acquireContext(n, a.aspectRatio), l2 = r && r.canvas, c = l2 && l2.height, h3 = l2 && l2.width;
    if (this.id = Ws(), this.ctx = r, this.canvas = l2, this.width = h3, this.height = c, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new _s2(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = false, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Js((d) => this.update(d), a.resizeDelay || 0), this._dataChanges = [], di[this.id] = this, !r || !l2) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    mt.listen(this, "complete", $n), mt.listen(this, "progress", ml), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    let { options: { aspectRatio: t, maintainAspectRatio: e }, width: s, height: n, _aspectRatio: o } = this;
    return T(t) ? e && o ? o : n ? s / n : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Ji(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return $i(this.canvas, this.ctx), this;
  }
  stop() {
    return mt.stop(this), this;
  }
  resize(t, e) {
    mt.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    let s = this.options, n = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, a = this.platform.getMaximumSize(n, t, e, o), r = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l2 = this.width ? "resize" : "attach";
    this.width = a.width, this.height = a.height, this._aspectRatio = this.aspectRatio, Ji(this, r, true) && (this.notifyPlugins("resize", {
      size: a
    }), z2(s.onResize, [
      this,
      a
    ], this), this.attached && this._doResize(l2) && this.render());
  }
  ensureScalesHaveIDs() {
    let e = this.options.scales || {};
    E(e, (s, n) => {
      s.id = n;
    });
  }
  buildOrUpdateScales() {
    let t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((a, r) => (a[r] = false, a), {}), o = [];
    e && (o = o.concat(Object.keys(e).map((a) => {
      let r = e[a], l2 = ys(a, r), c = l2 === "r", h3 = l2 === "x";
      return {
        options: r,
        dposition: c ? "chartArea" : h3 ? "bottom" : "left",
        dtype: c ? "radialLinear" : h3 ? "category" : "linear"
      };
    }))), E(o, (a) => {
      let r = a.options, l2 = r.id, c = ys(l2, r), h3 = D2(r.type, a.dtype);
      (r.position === void 0 || Hn(r.position, c) !== Hn(a.dposition)) && (r.position = a.dposition), n[l2] = true;
      let d = null;
      if (l2 in s && s[l2].type === h3) d = s[l2];
      else {
        let u = ht.getScale(h3);
        d = new u({
          id: l2,
          type: h3,
          ctx: this.ctx,
          chart: this
        }), s[d.id] = d;
      }
      d.init(r, t);
    }), E(n, (a, r) => {
      a || delete s[r];
    }), E(s, (a) => {
      K2.configure(this, a, a.options), K2.addBox(this, a);
    });
  }
  _updateMetasets() {
    let t = this._metasets, e = this.data.datasets.length, s = t.length;
    if (t.sort((n, o) => n.index - o.index), s > e) {
      for (let n = e; n < s; ++n) this._destroyDatasetMeta(n);
      t.splice(e, s - e);
    }
    this._sortedMetasets = t.slice(0).sort(jn("order", "index"));
  }
  _removeUnreferencedMetasets() {
    let { _metasets: t, data: { datasets: e } } = this;
    t.length > e.length && delete this._stacks, t.forEach((s, n) => {
      e.filter((o) => o === s._dataset).length === 0 && this._destroyDatasetMeta(n);
    });
  }
  buildOrUpdateControllers() {
    let t = [], e = this.data.datasets, s, n;
    for (this._removeUnreferencedMetasets(), s = 0, n = e.length; s < n; s++) {
      let o = e[s], a = this.getDatasetMeta(s), r = o.type || this.config.type;
      if (a.type && a.type !== r && (this._destroyDatasetMeta(s), a = this.getDatasetMeta(s)), a.type = r, a.indexAxis = o.indexAxis || xs2(r, this.options), a.order = o.order || 0, a.index = s, a.label = "" + o.label, a.visible = this.isDatasetVisible(s), a.controller) a.controller.updateIndex(s), a.controller.linkScales();
      else {
        let l2 = ht.getController(r), { datasetElementType: c, dataElementType: h3 } = C.datasets[r];
        Object.assign(l2.prototype, {
          dataElementType: ht.getElement(h3),
          datasetElementType: c && ht.getElement(c)
        }), a.controller = new l2(this, s), t.push(a.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    E(this.data.datasets, (t, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    let e = this.config;
    e.update();
    let s = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), n = this._animationsDisabled = !s.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: true
    }) === false) return;
    let o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let a = 0;
    for (let c = 0, h3 = this.data.datasets.length; c < h3; c++) {
      let { controller: d } = this.getDatasetMeta(c), u = !n && o.indexOf(d) === -1;
      d.buildOrUpdateElements(u), a = Math.max(+d.getMaxOverflow(), a);
    }
    a = this._minPadding = s.layout.autoPadding ? a : 0, this._updateLayout(a), n || E(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(jn("z", "_idx"));
    let { _active: r, _lastEvent: l2 } = this;
    l2 ? this._eventHandler(l2, true) : r.length && this._updateHoverStyles(r, r, true), this.render();
  }
  _updateScales() {
    E(this.scales, (t) => {
      K2.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    let t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!Ci(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    let { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (let { method: s, start: n, count: o } of e) {
      let a = s === "_removeElements" ? -o : o;
      bl(t, n, a);
    }
  }
  _getUniformDataChanges() {
    let t = this._dataChanges;
    if (!t || !t.length) return;
    this._dataChanges = [];
    let e = this.data.datasets.length, s = (o) => new Set(t.filter((a) => a[0] === o).map((a, r) => r + "," + a.splice(1).join(","))), n = s(0);
    for (let o = 1; o < e; o++) if (!Ci(n, s(o))) return;
    return Array.from(n).map((o) => o.split(",")).map((o) => ({
      method: o[1],
      start: +o[2],
      count: +o[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: true
    }) === false) return;
    K2.update(this, this.width, this.height, t);
    let e = this.chartArea, s = e.width <= 0 || e.height <= 0;
    this._layers = [], E(this.boxes, (n) => {
      s && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()));
    }, this), this._layers.forEach((n, o) => {
      n._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: true
    }) !== false) {
      for (let e = 0, s = this.data.datasets.length; e < s; ++e) this.getDatasetMeta(e).controller.configure();
      for (let e = 0, s = this.data.datasets.length; e < s; ++e) this._updateDataset(e, ft(t) ? t({
        datasetIndex: e
      }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, e) {
    let s = this.getDatasetMeta(t), n = {
      meta: s,
      index: t,
      mode: e,
      cancelable: true
    };
    this.notifyPlugins("beforeDatasetUpdate", n) !== false && (s.controller._update(e), n.cancelable = false, this.notifyPlugins("afterDatasetUpdate", n));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: true
    }) !== false && (mt.has(this) ? this.attached && !mt.running(this) && mt.start(this) : (this.draw(), $n({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      let { width: s, height: n } = this._resizeBeforeDraw;
      this._resize(s, n), this._resizeBeforeDraw = null;
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: true
    }) === false) return;
    let e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    let e = this._sortedMetasets, s = [], n, o;
    for (n = 0, o = e.length; n < o; ++n) {
      let a = e[n];
      (!t || a.visible) && s.push(a);
    }
    return s;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(true);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: true
    }) === false) return;
    let t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    let e = this.ctx, s = t._clip, n = !s.disabled, o = this.chartArea, a = {
      meta: t,
      index: t.index,
      cancelable: true
    };
    this.notifyPlugins("beforeDatasetDraw", a) !== false && (n && be2(e, {
      left: s.left === false ? 0 : o.left - s.left,
      right: s.right === false ? this.width : o.right + s.right,
      top: s.top === false ? 0 : o.top - s.top,
      bottom: s.bottom === false ? this.height : o.bottom + s.bottom
    }), t.controller.draw(), n && _e3(e), a.cancelable = false, this.notifyPlugins("afterDatasetDraw", a));
  }
  isPointInArea(t) {
    return jt(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, n) {
    let o = zr.modes[e];
    return typeof o == "function" ? o(this, t, s, n) : [];
  }
  getDatasetMeta(t) {
    let e = this.data.datasets[t], s = this._metasets, n = s.filter((o) => o && o._dataset === e).pop();
    return n || (n = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: e && e.order || 0,
      index: t,
      _dataset: e,
      _parsed: [],
      _sorted: false
    }, s.push(n)), n;
  }
  getContext() {
    return this.$context || (this.$context = pt(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    let e = this.data.datasets[t];
    if (!e) return false;
    let s = this.getDatasetMeta(t);
    return typeof s.hidden == "boolean" ? !s.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    let s = this.getDatasetMeta(t);
    s.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, s) {
    let n = s ? "show" : "hide", o = this.getDatasetMeta(t), a = o.controller._resolveAnimations(void 0, n);
    J2(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), a.update(o, {
      visible: s
    }), this.update((r) => r.datasetIndex === t ? n : void 0));
  }
  hide(t, e) {
    this._updateVisibility(t, e, false);
  }
  show(t, e) {
    this._updateVisibility(t, e, true);
  }
  _destroyDatasetMeta(t) {
    let e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (this.stop(), mt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    let { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), $i(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), this.notifyPlugins("destroy"), delete di[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = true;
  }
  bindUserEvents() {
    let t = this._listeners, e = this.platform, s = (o, a) => {
      e.addEventListener(this, o, a), t[o] = a;
    }, n = (o, a, r) => {
      o.offsetX = a, o.offsetY = r, this._eventHandler(o);
    };
    E(this.options.events, (o) => s(o, n));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    let t = this._responsiveListeners, e = this.platform, s = (l2, c) => {
      e.addEventListener(this, l2, c), t[l2] = c;
    }, n = (l2, c) => {
      t[l2] && (e.removeEventListener(this, l2, c), delete t[l2]);
    }, o = (l2, c) => {
      this.canvas && this.resize(l2, c);
    }, a, r = () => {
      n("attach", r), this.attached = true, this.resize(), s("resize", o), s("detach", a);
    };
    a = () => {
      this.attached = false, n("resize", o), this._stop(), this._resize(0, 0), s("attach", r);
    }, e.isAttached(this.canvas) ? r() : a();
  }
  unbindEvents() {
    E(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, E(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, s) {
    let n = s ? "set" : "remove", o, a, r, l2;
    for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + n + "DatasetHoverStyle"]()), r = 0, l2 = t.length; r < l2; ++r) {
      a = t[r];
      let c = a && this.getDatasetMeta(a.datasetIndex).controller;
      c && c[n + "HoverStyle"](a.element, a.datasetIndex, a.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    let e = this._active || [], s = t.map(({ datasetIndex: o, index: a }) => {
      let r = this.getDatasetMeta(o);
      if (!r) throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: r.data[a],
        index: a
      };
    });
    !pe3(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
  }
  notifyPlugins(t, e, s) {
    return this._plugins.notify(this, t, e, s);
  }
  _updateHoverStyles(t, e, s) {
    let n = this.options.hover, o = (l2, c) => l2.filter((h3) => !c.some((d) => h3.datasetIndex === d.datasetIndex && h3.index === d.index)), a = o(e, t), r = s ? t : o(t, e);
    a.length && this.updateHoverStyle(a, n.mode, false), r.length && n.mode && this.updateHoverStyle(r, n.mode, true);
  }
  _eventHandler(t, e) {
    let s = {
      event: t,
      replay: e,
      cancelable: true,
      inChartArea: this.isPointInArea(t)
    }, n = (a) => (a.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", s, n) === false) return;
    let o = this._handleEvent(t, e, s.inChartArea);
    return s.cancelable = false, this.notifyPlugins("afterEvent", s, n), (o || s.changed) && this.render(), this;
  }
  _handleEvent(t, e, s) {
    let { _active: n = [], options: o } = this, a = e, r = this._getActiveElements(t, n, s, a), l2 = $s(t), c = _l(t, this._lastEvent, s, l2);
    s && (this._lastEvent = null, z2(o.onHover, [
      t,
      r,
      this
    ], this), l2 && z2(o.onClick, [
      t,
      r,
      this
    ], this));
    let h3 = !pe3(r, n);
    return (h3 || e) && (this._active = r, this._updateHoverStyles(r, n, e)), this._lastEvent = c, h3;
  }
  _getActiveElements(t, e, s, n) {
    if (t.type === "mouseout") return [];
    if (!s) return e;
    let o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, n);
  }
};
var Yn = () => E(ui.instances, (i3) => i3._plugins.invalidate());
var Pt = true;
Object.defineProperties(ui, {
  defaults: {
    enumerable: Pt,
    value: C
  },
  instances: {
    enumerable: Pt,
    value: di
  },
  overrides: {
    enumerable: Pt,
    value: vt
  },
  registry: {
    enumerable: Pt,
    value: ht
  },
  version: {
    enumerable: Pt,
    value: gl
  },
  getChart: {
    enumerable: Pt,
    value: ko
  },
  register: {
    enumerable: Pt,
    value: (...i3) => {
      ht.add(...i3), Yn();
    }
  },
  unregister: {
    enumerable: Pt,
    value: (...i3) => {
      ht.remove(...i3), Yn();
    }
  }
});
function So(i3, t, e) {
  let { startAngle: s, pixelMargin: n, x: o, y: a, outerRadius: r, innerRadius: l2 } = t, c = n / r;
  i3.beginPath(), i3.arc(o, a, r, s - c, e + c), l2 > n ? (c = n / l2, i3.arc(o, a, l2, e + c, s - c, true)) : i3.arc(o, a, n, e + V2, s - V2), i3.closePath(), i3.clip();
}
function xl(i3) {
  return Ze(i3, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function yl(i3, t, e, s) {
  let n = xl(i3.options.borderRadius), o = (e - t) / 2, a = Math.min(o, s * t / 2), r = (l2) => {
    let c = (e - Math.min(o, l2)) * s / 2;
    return Y2(l2, 0, Math.min(o, c));
  };
  return {
    outerStart: r(n.outerStart),
    outerEnd: r(n.outerEnd),
    innerStart: Y2(n.innerStart, 0, a),
    innerEnd: Y2(n.innerEnd, 0, a)
  };
}
function Zt(i3, t, e, s) {
  return {
    x: e + i3 * Math.cos(t),
    y: s + i3 * Math.sin(t)
  };
}
function Ms(i3, t, e, s, n, o) {
  let { x: a, y: r, startAngle: l2, pixelMargin: c, innerRadius: h3 } = t, d = Math.max(t.outerRadius + s + e - c, 0), u = h3 > 0 ? h3 + s + e + c : 0, f = 0, g2 = n - l2;
  if (s) {
    let P = h3 > 0 ? h3 - s : 0, j3 = d > 0 ? d - s : 0, W3 = (P + j3) / 2, Ct = W3 !== 0 ? g2 * W3 / (W3 + s) : g2;
    f = (g2 - Ct) / 2;
  }
  let p = Math.max(1e-3, g2 * d - e / B3) / d, m = (g2 - p) / 2, b = l2 + m + f, _ = n - m - f, { outerStart: v2, outerEnd: y2, innerStart: x, innerEnd: M2 } = yl(t, u, d, _ - b), w = d - v2, S2 = d - y2, k2 = b + v2 / w, L = _ - y2 / S2, R = u + x, A3 = u + M2, H4 = b + x / R, q = _ - M2 / A3;
  if (i3.beginPath(), o) {
    if (i3.arc(a, r, d, k2, L), y2 > 0) {
      let W3 = Zt(S2, L, a, r);
      i3.arc(W3.x, W3.y, y2, L, _ + V2);
    }
    let P = Zt(A3, _, a, r);
    if (i3.lineTo(P.x, P.y), M2 > 0) {
      let W3 = Zt(A3, q, a, r);
      i3.arc(W3.x, W3.y, M2, _ + V2, q + Math.PI);
    }
    if (i3.arc(a, r, u, _ - M2 / u, b + x / u, true), x > 0) {
      let W3 = Zt(R, H4, a, r);
      i3.arc(W3.x, W3.y, x, H4 + Math.PI, b - V2);
    }
    let j3 = Zt(w, b, a, r);
    if (i3.lineTo(j3.x, j3.y), v2 > 0) {
      let W3 = Zt(w, k2, a, r);
      i3.arc(W3.x, W3.y, v2, b - V2, k2);
    }
  } else {
    i3.moveTo(a, r);
    let P = Math.cos(k2) * d + a, j3 = Math.sin(k2) * d + r;
    i3.lineTo(P, j3);
    let W3 = Math.cos(L) * d + a, Ct = Math.sin(L) * d + r;
    i3.lineTo(W3, Ct);
  }
  i3.closePath();
}
function vl(i3, t, e, s, n) {
  let { fullCircles: o, startAngle: a, circumference: r } = t, l2 = t.endAngle;
  if (o) {
    Ms(i3, t, e, s, a + F, n);
    for (let c = 0; c < o; ++c) i3.fill();
    isNaN(r) || (l2 = a + r % F, r % F === 0 && (l2 += F));
  }
  return Ms(i3, t, e, s, l2, n), i3.fill(), l2;
}
function Ml(i3, t, e) {
  let { x: s, y: n, startAngle: o, pixelMargin: a, fullCircles: r } = t, l2 = Math.max(t.outerRadius - a, 0), c = t.innerRadius + a, h3;
  for (e && So(i3, t, o + F), i3.beginPath(), i3.arc(s, n, c, o + F, o, true), h3 = 0; h3 < r; ++h3) i3.stroke();
  for (i3.beginPath(), i3.arc(s, n, l2, o, o + F), h3 = 0; h3 < r; ++h3) i3.stroke();
}
function wl(i3, t, e, s, n, o) {
  let { options: a } = t, { borderWidth: r, borderJoinStyle: l2 } = a, c = a.borderAlign === "inner";
  r && (c ? (i3.lineWidth = r * 2, i3.lineJoin = l2 || "round") : (i3.lineWidth = r, i3.lineJoin = l2 || "bevel"), t.fullCircles && Ml(i3, t, c), c && So(i3, t, n), Ms(i3, t, e, s, n, o), i3.stroke());
}
var oe = class extends it {
  constructor(t) {
    super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
  }
  inRange(t, e, s) {
    let n = this.getProps([
      "x",
      "y"
    ], s), { angle: o, distance: a } = Ri2(n, {
      x: t,
      y: e
    }), { startAngle: r, endAngle: l2, innerRadius: c, outerRadius: h3, circumference: d } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], s), u = this.options.spacing / 2, g2 = D2(d, l2 - r) >= F || Ut(o, r, l2), p = lt(a, c + u, h3 + u);
    return g2 && p;
  }
  getCenterPoint(t) {
    let { x: e, y: s, startAngle: n, endAngle: o, innerRadius: a, outerRadius: r } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], t), { offset: l2, spacing: c } = this.options, h3 = (n + o) / 2, d = (a + r + c + l2) / 2;
    return {
      x: e + Math.cos(h3) * d,
      y: s + Math.sin(h3) * d
    };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    let { options: e, circumference: s } = this, n = (e.offset || 0) / 2, o = (e.spacing || 0) / 2, a = e.circular;
    if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = s > F ? Math.floor(s / F) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0) return;
    t.save();
    let r = 0;
    if (n) {
      r = n / 2;
      let c = (this.startAngle + this.endAngle) / 2;
      t.translate(Math.cos(c) * r, Math.sin(c) * r), this.circumference >= B3 && (r = n);
    }
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor;
    let l2 = vl(t, this, r, o, a);
    wl(t, this, r, o, l2, a), t.restore();
  }
};
oe.id = "arc";
oe.defaults = {
  borderAlign: "center",
  borderColor: "#fff",
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: true
};
oe.defaultRoutes = {
  backgroundColor: "backgroundColor"
};
function Po(i3, t, e = t) {
  i3.lineCap = D2(e.borderCapStyle, t.borderCapStyle), i3.setLineDash(D2(e.borderDash, t.borderDash)), i3.lineDashOffset = D2(e.borderDashOffset, t.borderDashOffset), i3.lineJoin = D2(e.borderJoinStyle, t.borderJoinStyle), i3.lineWidth = D2(e.borderWidth, t.borderWidth), i3.strokeStyle = D2(e.borderColor, t.borderColor);
}
function kl(i3, t, e) {
  i3.lineTo(e.x, e.y);
}
function Sl(i3) {
  return i3.stepped ? rn : i3.tension || i3.cubicInterpolationMode === "monotone" ? ln : kl;
}
function Do(i3, t, e = {}) {
  let s = i3.length, { start: n = 0, end: o = s - 1 } = e, { start: a, end: r } = t, l2 = Math.max(n, a), c = Math.min(o, r), h3 = n < a && o < a || n > r && o > r;
  return {
    count: s,
    start: l2,
    loop: t.loop,
    ilen: c < l2 && !h3 ? s + c - l2 : c - l2
  };
}
function Pl(i3, t, e, s) {
  let { points: n, options: o } = t, { count: a, start: r, loop: l2, ilen: c } = Do(n, e, s), h3 = Sl(o), { move: d = true, reverse: u } = s || {}, f, g2, p;
  for (f = 0; f <= c; ++f) g2 = n[(r + (u ? c - f : f)) % a], !g2.skip && (d ? (i3.moveTo(g2.x, g2.y), d = false) : h3(i3, p, g2, u, o.stepped), p = g2);
  return l2 && (g2 = n[(r + (u ? c : 0)) % a], h3(i3, p, g2, u, o.stepped)), !!l2;
}
function Dl(i3, t, e, s) {
  let n = t.points, { count: o, start: a, ilen: r } = Do(n, e, s), { move: l2 = true, reverse: c } = s || {}, h3 = 0, d = 0, u, f, g2, p, m, b, _ = (y2) => (a + (c ? r - y2 : y2)) % o, v2 = () => {
    p !== m && (i3.lineTo(h3, m), i3.lineTo(h3, p), i3.lineTo(h3, b));
  };
  for (l2 && (f = n[_(0)], i3.moveTo(f.x, f.y)), u = 0; u <= r; ++u) {
    if (f = n[_(u)], f.skip) continue;
    let y2 = f.x, x = f.y, M2 = y2 | 0;
    M2 === g2 ? (x < p ? p = x : x > m && (m = x), h3 = (d * h3 + y2) / ++d) : (v2(), i3.lineTo(y2, x), g2 = M2, d = 0, p = m = x), b = x;
  }
  v2();
}
function ws(i3) {
  let t = i3.options, e = t.borderDash && t.borderDash.length;
  return !i3._decimated && !i3._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Dl : Pl;
}
function Ol(i3) {
  return i3.stepped ? bn : i3.tension || i3.cubicInterpolationMode === "monotone" ? _n : _t;
}
function Cl(i3, t, e, s) {
  let n = t._path;
  n || (n = t._path = new Path2D(), t.path(n, e, s) && n.closePath()), Po(i3, t.options), i3.stroke(n);
}
function Al(i3, t, e, s) {
  let { segments: n, options: o } = t, a = ws(t);
  for (let r of n) Po(i3, o, r.style), i3.beginPath(), a(i3, t, r, {
    start: e,
    end: e + s - 1
  }) && i3.closePath(), i3.stroke();
}
var Tl = typeof Path2D == "function";
function Ll(i3, t, e, s) {
  Tl && !t.options.segment ? Cl(i3, t, e, s) : Al(i3, t, e, s);
}
var dt = class extends it {
  constructor(t) {
    super(), this.animated = true, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = false, this._pointsUpdated = false, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    let s = this.options;
    if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
      let n = s.spanGaps ? this._loop : this._fullLoop;
      gn(this._points, s, t, n, e), this._pointsUpdated = true;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = false;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = yn(this, this.options.segment));
  }
  first() {
    let t = this.segments, e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    let t = this.segments, e = this.points, s = t.length;
    return s && e[t[s - 1].end];
  }
  interpolate(t, e) {
    let s = this.options, n = t[e], o = this.points, a = ss(this, {
      property: e,
      start: n,
      end: n
    });
    if (!a.length) return;
    let r = [], l2 = Ol(s), c, h3;
    for (c = 0, h3 = a.length; c < h3; ++c) {
      let { start: d, end: u } = a[c], f = o[d], g2 = o[u];
      if (f === g2) {
        r.push(f);
        continue;
      }
      let p = Math.abs((n - f[e]) / (g2[e] - f[e])), m = l2(f, g2, p, s.stepped);
      m[e] = t[e], r.push(m);
    }
    return r.length === 1 ? r[0] : r;
  }
  pathSegment(t, e, s) {
    return ws(this)(t, this, e, s);
  }
  path(t, e, s) {
    let n = this.segments, o = ws(this), a = this._loop;
    e = e || 0, s = s || this.points.length - e;
    for (let r of n) a &= o(t, this, r, {
      start: e,
      end: e + s - 1
    });
    return !!a;
  }
  draw(t, e, s, n) {
    let o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), Ll(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = false, this._path = void 0);
  }
};
dt.id = "line";
dt.defaults = {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: true,
  cubicInterpolationMode: "default",
  fill: false,
  spanGaps: false,
  stepped: false,
  tension: 0
};
dt.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
};
dt.descriptors = {
  _scriptable: true,
  _indexable: (i3) => i3 !== "borderDash" && i3 !== "fill"
};
function Xn(i3, t, e, s) {
  let n = i3.options, { [e]: o } = i3.getProps([
    e
  ], s);
  return Math.abs(t - o) < n.radius + n.hitRadius;
}
var ae3 = class extends it {
  constructor(t) {
    super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t);
  }
  inRange(t, e, s) {
    let n = this.options, { x: o, y: a } = this.getProps([
      "x",
      "y"
    ], s);
    return Math.pow(t - o, 2) + Math.pow(e - a, 2) < Math.pow(n.hitRadius + n.radius, 2);
  }
  inXRange(t, e) {
    return Xn(this, t, "x", e);
  }
  inYRange(t, e) {
    return Xn(this, t, "y", e);
  }
  getCenterPoint(t) {
    let { x: e, y: s } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: s
    };
  }
  size(t) {
    t = t || this.options || {};
    let e = t.radius || 0;
    e = Math.max(e, e && t.hoverRadius || 0);
    let s = e && t.borderWidth || 0;
    return (e + s) * 2;
  }
  draw(t, e) {
    let s = this.options;
    this.skip || s.radius < 0.1 || !jt(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, Ge(t, s, this.x, this.y));
  }
  getRange() {
    let t = this.options || {};
    return t.radius + t.hitRadius;
  }
};
ae3.id = "point";
ae3.defaults = {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
};
ae3.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
};
function Oo(i3, t) {
  let { x: e, y: s, base: n, width: o, height: a } = i3.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t), r, l2, c, h3, d;
  return i3.horizontal ? (d = a / 2, r = Math.min(e, n), l2 = Math.max(e, n), c = s - d, h3 = s + d) : (d = o / 2, r = e - d, l2 = e + d, c = Math.min(s, n), h3 = Math.max(s, n)), {
    left: r,
    top: c,
    right: l2,
    bottom: h3
  };
}
function Dt(i3, t, e, s) {
  return i3 ? 0 : Y2(t, e, s);
}
function Rl(i3, t, e) {
  let s = i3.options.borderWidth, n = i3.borderSkipped, o = Xi(s);
  return {
    t: Dt(n.top, o.top, 0, e),
    r: Dt(n.right, o.right, 0, t),
    b: Dt(n.bottom, o.bottom, 0, e),
    l: Dt(n.left, o.left, 0, t)
  };
}
function El(i3, t, e) {
  let { enableBorderRadius: s } = i3.getProps([
    "enableBorderRadius"
  ]), n = i3.options.borderRadius, o = kt(n), a = Math.min(t, e), r = i3.borderSkipped, l2 = s || O(n);
  return {
    topLeft: Dt(!l2 || r.top || r.left, o.topLeft, 0, a),
    topRight: Dt(!l2 || r.top || r.right, o.topRight, 0, a),
    bottomLeft: Dt(!l2 || r.bottom || r.left, o.bottomLeft, 0, a),
    bottomRight: Dt(!l2 || r.bottom || r.right, o.bottomRight, 0, a)
  };
}
function Fl(i3) {
  let t = Oo(i3), e = t.right - t.left, s = t.bottom - t.top, n = Rl(i3, e / 2, s / 2), o = El(i3, e / 2, s / 2);
  return {
    outer: {
      x: t.left,
      y: t.top,
      w: e,
      h: s,
      radius: o
    },
    inner: {
      x: t.left + n.l,
      y: t.top + n.t,
      w: e - n.l - n.r,
      h: s - n.t - n.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
        topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(n.b, n.r))
      }
    }
  };
}
function hs(i3, t, e, s) {
  let n = t === null, o = e === null, r = i3 && !(n && o) && Oo(i3, s);
  return r && (n || lt(t, r.left, r.right)) && (o || lt(e, r.top, r.bottom));
}
function Il(i3) {
  return i3.topLeft || i3.topRight || i3.bottomLeft || i3.bottomRight;
}
function zl(i3, t) {
  i3.rect(t.x, t.y, t.w, t.h);
}
function ds(i3, t, e = {}) {
  let s = i3.x !== e.x ? -t : 0, n = i3.y !== e.y ? -t : 0, o = (i3.x + i3.w !== e.x + e.w ? t : 0) - s, a = (i3.y + i3.h !== e.y + e.h ? t : 0) - n;
  return {
    x: i3.x + s,
    y: i3.y + n,
    w: i3.w + o,
    h: i3.h + a,
    radius: i3.radius
  };
}
var re = class extends it {
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    let { inflateAmount: e, options: { borderColor: s, backgroundColor: n } } = this, { inner: o, outer: a } = Fl(this), r = Il(a.radius) ? Kt : zl;
    t.save(), (a.w !== o.w || a.h !== o.h) && (t.beginPath(), r(t, ds(a, e, o)), t.clip(), r(t, ds(o, -e, a)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), r(t, ds(o, e)), t.fillStyle = n, t.fill(), t.restore();
  }
  inRange(t, e, s) {
    return hs(this, t, e, s);
  }
  inXRange(t, e) {
    return hs(this, t, null, e);
  }
  inYRange(t, e) {
    return hs(this, null, t, e);
  }
  getCenterPoint(t) {
    let { x: e, y: s, base: n, horizontal: o } = this.getProps([
      "x",
      "y",
      "base",
      "horizontal"
    ], t);
    return {
      x: o ? (e + n) / 2 : e,
      y: o ? s : (s + n) / 2
    };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
};
re.id = "bar";
re.defaults = {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
};
re.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
};
var Bl = Object.freeze({
  __proto__: null,
  ArcElement: oe,
  LineElement: dt,
  PointElement: ae3,
  BarElement: re
});
function Vl(i3, t, e, s, n) {
  let o = n.samples || s;
  if (o >= e) return i3.slice(t, t + e);
  let a = [], r = (e - 2) / (o - 2), l2 = 0, c = t + e - 1, h3 = t, d, u, f, g2, p;
  for (a[l2++] = i3[h3], d = 0; d < o - 2; d++) {
    let m = 0, b = 0, _, v2 = Math.floor((d + 1) * r) + 1 + t, y2 = Math.min(Math.floor((d + 2) * r) + 1, e) + t, x = y2 - v2;
    for (_ = v2; _ < y2; _++) m += i3[_].x, b += i3[_].y;
    m /= x, b /= x;
    let M2 = Math.floor(d * r) + 1 + t, w = Math.min(Math.floor((d + 1) * r) + 1, e) + t, { x: S2, y: k2 } = i3[h3];
    for (f = g2 = -1, _ = M2; _ < w; _++) g2 = 0.5 * Math.abs((S2 - m) * (i3[_].y - k2) - (S2 - i3[_].x) * (b - k2)), g2 > f && (f = g2, u = i3[_], p = _);
    a[l2++] = u, h3 = p;
  }
  return a[l2++] = i3[c], a;
}
function Nl(i3, t, e, s) {
  let n = 0, o = 0, a, r, l2, c, h3, d, u, f, g2, p, m = [], b = t + e - 1, _ = i3[t].x, y2 = i3[b].x - _;
  for (a = t; a < t + e; ++a) {
    r = i3[a], l2 = (r.x - _) / y2 * s, c = r.y;
    let x = l2 | 0;
    if (x === h3) c < g2 ? (g2 = c, d = a) : c > p && (p = c, u = a), n = (o * n + r.x) / ++o;
    else {
      let M2 = a - 1;
      if (!T(d) && !T(u)) {
        let w = Math.min(d, u), S2 = Math.max(d, u);
        w !== f && w !== M2 && m.push({
          ...i3[w],
          x: n
        }), S2 !== f && S2 !== M2 && m.push({
          ...i3[S2],
          x: n
        });
      }
      a > 0 && M2 !== f && m.push(i3[M2]), m.push(r), h3 = x, o = 0, g2 = p = c, d = u = f = a;
    }
  }
  return m;
}
function Co(i3) {
  if (i3._decimated) {
    let t = i3._data;
    delete i3._decimated, delete i3._data, Object.defineProperty(i3, "data", {
      value: t
    });
  }
}
function Un(i3) {
  i3.data.datasets.forEach((t) => {
    Co(t);
  });
}
function Wl(i3, t) {
  let e = t.length, s = 0, n, { iScale: o } = i3, { min: a, max: r, minDefined: l2, maxDefined: c } = o.getUserBounds();
  return l2 && (s = Y2(at(t, o.axis, a).lo, 0, e - 1)), c ? n = Y2(at(t, o.axis, r).hi + 1, s, e) - s : n = e - s, {
    start: s,
    count: n
  };
}
var Hl = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: false
  },
  beforeElementsUpdate: (i3, t, e) => {
    if (!e.enabled) {
      Un(i3);
      return;
    }
    let s = i3.width;
    i3.data.datasets.forEach((n, o) => {
      let { _data: a, indexAxis: r } = n, l2 = i3.getDatasetMeta(o), c = a || n.data;
      if (qt([
        r,
        i3.options.indexAxis
      ]) === "y" || !l2.controller.supportsDecimation) return;
      let h3 = i3.scales[l2.xAxisID];
      if (h3.type !== "linear" && h3.type !== "time" || i3.options.parsing) return;
      let { start: d, count: u } = Wl(l2, c), f = e.threshold || 4 * s;
      if (u <= f) {
        Co(n);
        return;
      }
      T(a) && (n._data = c, delete n.data, Object.defineProperty(n, "data", {
        configurable: true,
        enumerable: true,
        get: function() {
          return this._decimated;
        },
        set: function(p) {
          this._data = p;
        }
      }));
      let g2;
      switch (e.algorithm) {
        case "lttb":
          g2 = Vl(c, d, u, s, e);
          break;
        case "min-max":
          g2 = Nl(c, d, u, s);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      n._decimated = g2;
    });
  },
  destroy(i3) {
    Un(i3);
  }
};
function jl(i3, t, e) {
  let s = i3.segments, n = i3.points, o = t.points, a = [];
  for (let r of s) {
    let { start: l2, end: c } = r;
    c = Ps2(l2, c, n);
    let h3 = ks(e, n[l2], n[c], r.loop);
    if (!t.segments) {
      a.push({
        source: r,
        target: h3,
        start: n[l2],
        end: n[c]
      });
      continue;
    }
    let d = ss(t, h3);
    for (let u of d) {
      let f = ks(e, o[u.start], o[u.end], u.loop), g2 = is(r, n, f);
      for (let p of g2) a.push({
        source: p,
        target: u,
        start: {
          [e]: Kn(h3, f, "start", Math.max)
        },
        end: {
          [e]: Kn(h3, f, "end", Math.min)
        }
      });
    }
  }
  return a;
}
function ks(i3, t, e, s) {
  if (s) return;
  let n = t[i3], o = e[i3];
  return i3 === "angle" && (n = G3(n), o = G3(o)), {
    property: i3,
    start: n,
    end: o
  };
}
function $l(i3, t) {
  let { x: e = null, y: s = null } = i3 || {}, n = t.points, o = [];
  return t.segments.forEach(({ start: a, end: r }) => {
    r = Ps2(a, r, n);
    let l2 = n[a], c = n[r];
    s !== null ? (o.push({
      x: l2.x,
      y: s
    }), o.push({
      x: c.x,
      y: s
    })) : e !== null && (o.push({
      x: e,
      y: l2.y
    }), o.push({
      x: e,
      y: c.y
    }));
  }), o;
}
function Ps2(i3, t, e) {
  for (; t > i3; t--) {
    let s = e[t];
    if (!isNaN(s.x) && !isNaN(s.y)) break;
  }
  return t;
}
function Kn(i3, t, e, s) {
  return i3 && t ? s(i3[e], t[e]) : i3 ? i3[e] : t ? t[e] : 0;
}
function Ao(i3, t) {
  let e = [], s = false;
  return I(i3) ? (s = true, e = i3) : e = $l(i3, t), e.length ? new dt({
    points: e,
    options: {
      tension: 0
    },
    _loop: s,
    _fullLoop: s
  }) : null;
}
function qn(i3) {
  return i3 && i3.fill !== false;
}
function Yl(i3, t, e) {
  let n = i3[t].fill, o = [
    t
  ], a;
  if (!e) return n;
  for (; n !== false && o.indexOf(n) === -1; ) {
    if (!N(n)) return n;
    if (a = i3[n], !a) return false;
    if (a.visible) return n;
    o.push(n), n = a.fill;
  }
  return false;
}
function Xl(i3, t, e) {
  let s = Gl(i3);
  if (O(s)) return isNaN(s.value) ? false : s;
  let n = parseFloat(s);
  return N(n) && Math.floor(n) === n ? Ul(s[0], t, n, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(s) >= 0 && s;
}
function Ul(i3, t, e, s) {
  return (i3 === "-" || i3 === "+") && (e = t + e), e === t || e < 0 || e >= s ? false : e;
}
function Kl(i3, t) {
  let e = null;
  return i3 === "start" ? e = t.bottom : i3 === "end" ? e = t.top : O(i3) ? e = t.getPixelForValue(i3.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function ql(i3, t, e) {
  let s;
  return i3 === "start" ? s = e : i3 === "end" ? s = t.options.reverse ? t.min : t.max : O(i3) ? s = i3.value : s = t.getBaseValue(), s;
}
function Gl(i3) {
  let t = i3.options, e = t.fill, s = D2(e && e.target, e);
  return s === void 0 && (s = !!t.backgroundColor), s === false || s === null ? false : s === true ? "origin" : s;
}
function Zl(i3) {
  let { scale: t, index: e, line: s } = i3, n = [], o = s.segments, a = s.points, r = Jl(t, e);
  r.push(Ao({
    x: null,
    y: t.bottom
  }, s));
  for (let l2 = 0; l2 < o.length; l2++) {
    let c = o[l2];
    for (let h3 = c.start; h3 <= c.end; h3++) Ql(n, a[h3], r);
  }
  return new dt({
    points: n,
    options: {}
  });
}
function Jl(i3, t) {
  let e = [], s = i3.getMatchingVisibleMetas("line");
  for (let n = 0; n < s.length; n++) {
    let o = s[n];
    if (o.index === t) break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function Ql(i3, t, e) {
  let s = [];
  for (let n = 0; n < e.length; n++) {
    let o = e[n], { first: a, last: r, point: l2 } = tc(o, t, "x");
    if (!(!l2 || a && r)) {
      if (a) s.unshift(l2);
      else if (i3.push(l2), !r) break;
    }
  }
  i3.push(...s);
}
function tc(i3, t, e) {
  let s = i3.interpolate(t, e);
  if (!s) return {};
  let n = s[e], o = i3.segments, a = i3.points, r = false, l2 = false;
  for (let c = 0; c < o.length; c++) {
    let h3 = o[c], d = a[h3.start][e], u = a[h3.end][e];
    if (lt(n, d, u)) {
      r = n === d, l2 = n === u;
      break;
    }
  }
  return {
    first: r,
    last: l2,
    point: s
  };
}
var fi = class {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, s) {
    let { x: n, y: o, radius: a } = this;
    return e = e || {
      start: 0,
      end: F
    }, t.arc(n, o, a, e.end, e.start, true), !s.bounds;
  }
  interpolate(t) {
    let { x: e, y: s, radius: n } = this, o = t.angle;
    return {
      x: e + Math.cos(o) * n,
      y: s + Math.sin(o) * n,
      angle: o
    };
  }
};
function ec(i3) {
  let { chart: t, fill: e, line: s } = i3;
  if (N(e)) return ic(t, e);
  if (e === "stack") return Zl(i3);
  if (e === "shape") return true;
  let n = sc(i3);
  return n instanceof fi ? n : Ao(n, s);
}
function ic(i3, t) {
  let e = i3.getDatasetMeta(t);
  return e && i3.isDatasetVisible(t) ? e.dataset : null;
}
function sc(i3) {
  return (i3.scale || {}).getPointPositionForValue ? oc(i3) : nc(i3);
}
function nc(i3) {
  let { scale: t = {}, fill: e } = i3, s = Kl(e, t);
  if (N(s)) {
    let n = t.isHorizontal();
    return {
      x: n ? s : null,
      y: n ? null : s
    };
  }
  return null;
}
function oc(i3) {
  let { scale: t, fill: e } = i3, s = t.options, n = t.getLabels().length, o = s.reverse ? t.max : t.min, a = ql(e, t, o), r = [];
  if (s.grid.circular) {
    let l2 = t.getPointPositionForValue(0, o);
    return new fi({
      x: l2.x,
      y: l2.y,
      radius: t.getDistanceFromCenterForValue(a)
    });
  }
  for (let l2 = 0; l2 < n; ++l2) r.push(t.getPointPositionForValue(l2, a));
  return r;
}
function us(i3, t, e) {
  let s = ec(t), { line: n, scale: o, axis: a } = t, r = n.options, l2 = r.fill, c = r.backgroundColor, { above: h3 = c, below: d = c } = l2 || {};
  s && n.points.length && (be2(i3, e), ac(i3, {
    line: n,
    target: s,
    above: h3,
    below: d,
    area: e,
    scale: o,
    axis: a
  }), _e3(i3));
}
function ac(i3, t) {
  let { line: e, target: s, above: n, below: o, area: a, scale: r } = t, l2 = e._loop ? "angle" : t.axis;
  i3.save(), l2 === "x" && o !== n && (Gn(i3, s, a.top), Zn(i3, {
    line: e,
    target: s,
    color: n,
    scale: r,
    property: l2
  }), i3.restore(), i3.save(), Gn(i3, s, a.bottom)), Zn(i3, {
    line: e,
    target: s,
    color: o,
    scale: r,
    property: l2
  }), i3.restore();
}
function Gn(i3, t, e) {
  let { segments: s, points: n } = t, o = true, a = false;
  i3.beginPath();
  for (let r of s) {
    let { start: l2, end: c } = r, h3 = n[l2], d = n[Ps2(l2, c, n)];
    o ? (i3.moveTo(h3.x, h3.y), o = false) : (i3.lineTo(h3.x, e), i3.lineTo(h3.x, h3.y)), a = !!t.pathSegment(i3, r, {
      move: a
    }), a ? i3.closePath() : i3.lineTo(d.x, e);
  }
  i3.lineTo(t.first().x, e), i3.closePath(), i3.clip();
}
function Zn(i3, t) {
  let { line: e, target: s, property: n, color: o, scale: a } = t, r = jl(e, s, n);
  for (let { source: l2, target: c, start: h3, end: d } of r) {
    let { style: { backgroundColor: u = o } = {} } = l2, f = s !== true;
    i3.save(), i3.fillStyle = u, rc(i3, a, f && ks(n, h3, d)), i3.beginPath();
    let g2 = !!e.pathSegment(i3, l2), p;
    if (f) {
      g2 ? i3.closePath() : Jn(i3, s, d, n);
      let m = !!s.pathSegment(i3, c, {
        move: g2,
        reverse: true
      });
      p = g2 && m, p || Jn(i3, s, h3, n);
    }
    i3.closePath(), i3.fill(p ? "evenodd" : "nonzero"), i3.restore();
  }
}
function rc(i3, t, e) {
  let { top: s, bottom: n } = t.chart.chartArea, { property: o, start: a, end: r } = e || {};
  o === "x" && (i3.beginPath(), i3.rect(a, s, r - a, n - s), i3.clip());
}
function Jn(i3, t, e, s) {
  let n = t.interpolate(e, s);
  n && i3.lineTo(n.x, n.y);
}
var lc = {
  id: "filler",
  afterDatasetsUpdate(i3, t, e) {
    let s = (i3.data.datasets || []).length, n = [], o, a, r, l2;
    for (a = 0; a < s; ++a) o = i3.getDatasetMeta(a), r = o.dataset, l2 = null, r && r.options && r instanceof dt && (l2 = {
      visible: i3.isDatasetVisible(a),
      index: a,
      fill: Xl(r, a, s),
      chart: i3,
      axis: o.controller.options.indexAxis,
      scale: o.vScale,
      line: r
    }), o.$filler = l2, n.push(l2);
    for (a = 0; a < s; ++a) l2 = n[a], !(!l2 || l2.fill === false) && (l2.fill = Yl(n, a, e.propagate));
  },
  beforeDraw(i3, t, e) {
    let s = e.drawTime === "beforeDraw", n = i3.getSortedVisibleDatasetMetas(), o = i3.chartArea;
    for (let a = n.length - 1; a >= 0; --a) {
      let r = n[a].$filler;
      r && (r.line.updateControlPoints(o, r.axis), s && r.fill && us(i3.ctx, r, o));
    }
  },
  beforeDatasetsDraw(i3, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw") return;
    let s = i3.getSortedVisibleDatasetMetas();
    for (let n = s.length - 1; n >= 0; --n) {
      let o = s[n].$filler;
      qn(o) && us(i3.ctx, o, i3.chartArea);
    }
  },
  beforeDatasetDraw(i3, t, e) {
    let s = t.meta.$filler;
    !qn(s) || e.drawTime !== "beforeDatasetDraw" || us(i3.ctx, s, i3.chartArea);
  },
  defaults: {
    propagate: true,
    drawTime: "beforeDatasetDraw"
  }
};
var Qn = (i3, t) => {
  let { boxHeight: e = t, boxWidth: s = t } = i3;
  return i3.usePointStyle && (e = Math.min(e, t), s = i3.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
};
var cc = (i3, t) => i3 !== null && t !== null && i3.datasetIndex === t.datasetIndex && i3.index === t.index;
var gi = class extends it {
  constructor(t) {
    super(), this._added = false, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = false, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e, s) {
    this.maxWidth = t, this.maxHeight = e, this._margins = s, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    let t = this.options.labels || {}, e = z2(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (e = e.filter((s) => t.filter(s, this.chart.data))), t.sort && (e = e.sort((s, n) => t.sort(s, n, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    let { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    let s = t.labels, n = $(s.font), o = n.size, a = this._computeTitleHeight(), { boxWidth: r, itemHeight: l2 } = Qn(s, o), c, h3;
    e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, h3 = this._fitRows(a, o, r, l2) + 10) : (h3 = this.maxHeight, c = this._fitCols(a, o, r, l2) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h3, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, s, n) {
    let { ctx: o, maxWidth: a, options: { labels: { padding: r } } } = this, l2 = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], h3 = n + r, d = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let u = -1, f = -h3;
    return this.legendItems.forEach((g2, p) => {
      let m = s + e / 2 + o.measureText(g2.text).width;
      (p === 0 || c[c.length - 1] + m + 2 * r > a) && (d += h3, c[c.length - (p > 0 ? 0 : 1)] = 0, f += h3, u++), l2[p] = {
        left: 0,
        top: f,
        row: u,
        width: m,
        height: n
      }, c[c.length - 1] += m + r;
    }), d;
  }
  _fitCols(t, e, s, n) {
    let { ctx: o, maxHeight: a, options: { labels: { padding: r } } } = this, l2 = this.legendHitBoxes = [], c = this.columnSizes = [], h3 = a - t, d = r, u = 0, f = 0, g2 = 0, p = 0;
    return this.legendItems.forEach((m, b) => {
      let _ = s + e / 2 + o.measureText(m.text).width;
      b > 0 && f + n + 2 * r > h3 && (d += u + r, c.push({
        width: u,
        height: f
      }), g2 += u + r, p++, u = f = 0), l2[b] = {
        left: g2,
        top: f,
        col: p,
        width: _,
        height: n
      }, u = Math.max(u, _), f += n + r;
    }), d += u, c.push({
      width: u,
      height: f
    }), d;
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    let t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n }, rtl: o } } = this, a = Rt(o, this.left, this.width);
    if (this.isHorizontal()) {
      let r = 0, l2 = X2(s, this.left + n, this.right - this.lineWidths[r]);
      for (let c of e) r !== c.row && (r = c.row, l2 = X2(s, this.left + n, this.right - this.lineWidths[r])), c.top += this.top + t + n, c.left = a.leftForLtr(a.x(l2), c.width), l2 += c.width + n;
    } else {
      let r = 0, l2 = X2(s, this.top + t + n, this.bottom - this.columnSizes[r].height);
      for (let c of e) c.col !== r && (r = c.col, l2 = X2(s, this.top + t + n, this.bottom - this.columnSizes[r].height)), c.top = l2, c.left += this.left + n, c.left = a.leftForLtr(a.x(c.left), c.width), l2 += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      let t = this.ctx;
      be2(t, this), this._draw(), _e3(t);
    }
  }
  _draw() {
    let { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: a } = t, r = C.color, l2 = Rt(t.rtl, this.left, this.width), c = $(a.font), { color: h3, padding: d } = a, u = c.size, f = u / 2, g2;
    this.drawTitle(), n.textAlign = l2.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    let { boxWidth: p, boxHeight: m, itemHeight: b } = Qn(a, u), _ = function(w, S2, k2) {
      if (isNaN(p) || p <= 0 || isNaN(m) || m < 0) return;
      n.save();
      let L = D2(k2.lineWidth, 1);
      if (n.fillStyle = D2(k2.fillStyle, r), n.lineCap = D2(k2.lineCap, "butt"), n.lineDashOffset = D2(k2.lineDashOffset, 0), n.lineJoin = D2(k2.lineJoin, "miter"), n.lineWidth = L, n.strokeStyle = D2(k2.strokeStyle, r), n.setLineDash(D2(k2.lineDash, [])), a.usePointStyle) {
        let R = {
          radius: m * Math.SQRT2 / 2,
          pointStyle: k2.pointStyle,
          rotation: k2.rotation,
          borderWidth: L
        }, A3 = l2.xPlus(w, p / 2), H4 = S2 + f;
        Yi(n, R, A3, H4, a.pointStyleWidth && p);
      } else {
        let R = S2 + Math.max((u - m) / 2, 0), A3 = l2.leftForLtr(w, p), H4 = kt(k2.borderRadius);
        n.beginPath(), Object.values(H4).some((q) => q !== 0) ? Kt(n, {
          x: A3,
          y: R,
          w: p,
          h: m,
          radius: H4
        }) : n.rect(A3, R, p, m), n.fill(), L !== 0 && n.stroke();
      }
      n.restore();
    }, v2 = function(w, S2, k2) {
      wt(n, k2.text, w, S2 + b / 2, c, {
        strikethrough: k2.hidden,
        textAlign: l2.textAlign(k2.textAlign)
      });
    }, y2 = this.isHorizontal(), x = this._computeTitleHeight();
    y2 ? g2 = {
      x: X2(o, this.left + d, this.right - s[0]),
      y: this.top + d + x,
      line: 0
    } : g2 = {
      x: this.left + d,
      y: X2(o, this.top + x + d, this.bottom - e[0].height),
      line: 0
    }, ts(this.ctx, t.textDirection);
    let M2 = b + d;
    this.legendItems.forEach((w, S2) => {
      n.strokeStyle = w.fontColor || h3, n.fillStyle = w.fontColor || h3;
      let k2 = n.measureText(w.text).width, L = l2.textAlign(w.textAlign || (w.textAlign = a.textAlign)), R = p + f + k2, A3 = g2.x, H4 = g2.y;
      l2.setWidth(this.width), y2 ? S2 > 0 && A3 + R + d > this.right && (H4 = g2.y += M2, g2.line++, A3 = g2.x = X2(o, this.left + d, this.right - s[g2.line])) : S2 > 0 && H4 + M2 > this.bottom && (A3 = g2.x = A3 + e[g2.line].width + d, g2.line++, H4 = g2.y = X2(o, this.top + x + d, this.bottom - e[g2.line].height));
      let q = l2.x(A3);
      _(q, H4, w), A3 = Qs(L, A3 + p + f, y2 ? A3 + R : this.right, t.rtl), v2(l2.x(A3), H4, w), y2 ? g2.x += R + d : g2.y += M2;
    }), es(this.ctx, t.textDirection);
  }
  drawTitle() {
    let t = this.options, e = t.title, s = $(e.font), n = U(e.padding);
    if (!e.display) return;
    let o = Rt(t.rtl, this.left, this.width), a = this.ctx, r = e.position, l2 = s.size / 2, c = n.top + l2, h3, d = this.left, u = this.width;
    if (this.isHorizontal()) u = Math.max(...this.lineWidths), h3 = this.top + c, d = X2(t.align, d, this.right - u);
    else {
      let g2 = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
      h3 = c + X2(t.align, this.top, this.bottom - g2 - t.labels.padding - this._computeTitleHeight());
    }
    let f = X2(r, d, d + u);
    a.textAlign = o.textAlign(Ke(r)), a.textBaseline = "middle", a.strokeStyle = e.color, a.fillStyle = e.color, a.font = s.string, wt(a, e.text, f, h3, s);
  }
  _computeTitleHeight() {
    let t = this.options.title, e = $(t.font), s = U(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, n, o;
    if (lt(t, this.left, this.right) && lt(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s) if (n = o[s], lt(t, n.left, n.left + n.width) && lt(e, n.top, n.top + n.height)) return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    let e = this.options;
    if (!hc(t.type, e)) return;
    let s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      let n = this._hoveredItem, o = cc(n, s);
      n && !o && z2(e.onLeave, [
        t,
        n,
        this
      ], this), this._hoveredItem = s, s && !o && z2(e.onHover, [
        t,
        s,
        this
      ], this);
    } else s && z2(e.onClick, [
      t,
      s,
      this
    ], this);
  }
};
function hc(i3, t) {
  return !!((i3 === "mousemove" || i3 === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i3 === "click" || i3 === "mouseup"));
}
var dc = {
  id: "legend",
  _element: gi,
  start(i3, t, e) {
    let s = i3.legend = new gi({
      ctx: i3.ctx,
      options: e,
      chart: i3
    });
    K2.configure(i3, s, e), K2.addBox(i3, s);
  },
  stop(i3) {
    K2.removeBox(i3, i3.legend), delete i3.legend;
  },
  beforeUpdate(i3, t, e) {
    let s = i3.legend;
    K2.configure(i3, s, e), s.options = e;
  },
  afterUpdate(i3) {
    let t = i3.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(i3, t) {
    t.replay || i3.legend.handleEvent(t.event);
  },
  defaults: {
    display: true,
    position: "top",
    align: "center",
    fullSize: true,
    reverse: false,
    weight: 1e3,
    onClick(i3, t, e) {
      let s = t.datasetIndex, n = e.chart;
      n.isDatasetVisible(s) ? (n.hide(s), t.hidden = true) : (n.show(s), t.hidden = false);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i3) => i3.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i3) {
        let t = i3.data.datasets, { labels: { usePointStyle: e, pointStyle: s, textAlign: n, color: o } } = i3.legend.options;
        return i3._getSortedDatasetMetas().map((a) => {
          let r = a.controller.getStyle(e ? 0 : void 0), l2 = U(r.borderWidth);
          return {
            text: t[a.index].label,
            fillStyle: r.backgroundColor,
            fontColor: o,
            hidden: !a.visible,
            lineCap: r.borderCapStyle,
            lineDash: r.borderDash,
            lineDashOffset: r.borderDashOffset,
            lineJoin: r.borderJoinStyle,
            lineWidth: (l2.width + l2.height) / 4,
            strokeStyle: r.borderColor,
            pointStyle: s || r.pointStyle,
            rotation: r.rotation,
            textAlign: n || r.textAlign,
            borderRadius: 0,
            datasetIndex: a.index
          };
        }, this);
      }
    },
    title: {
      color: (i3) => i3.chart.options.color,
      display: false,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (i3) => !i3.startsWith("on"),
    labels: {
      _scriptable: (i3) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(i3)
    }
  }
};
var Ce2 = class extends it {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e) {
    let s = this.options;
    if (this.left = 0, this.top = 0, !s.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = e;
    let n = I(s.text) ? s.text.length : 1;
    this._padding = U(s.padding);
    let o = n * $(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    let t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    let { top: e, left: s, bottom: n, right: o, options: a } = this, r = a.align, l2 = 0, c, h3, d;
    return this.isHorizontal() ? (h3 = X2(r, s, o), d = e + t, c = o - s) : (a.position === "left" ? (h3 = s + t, d = X2(r, n, e), l2 = B3 * -0.5) : (h3 = o - t, d = X2(r, e, n), l2 = B3 * 0.5), c = n - e), {
      titleX: h3,
      titleY: d,
      maxWidth: c,
      rotation: l2
    };
  }
  draw() {
    let t = this.ctx, e = this.options;
    if (!e.display) return;
    let s = $(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: a, titleY: r, maxWidth: l2, rotation: c } = this._drawArgs(o);
    wt(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l2,
      rotation: c,
      textAlign: Ke(e.align),
      textBaseline: "middle",
      translation: [
        a,
        r
      ]
    });
  }
};
function uc(i3, t) {
  let e = new Ce2({
    ctx: i3.ctx,
    options: t,
    chart: i3
  });
  K2.configure(i3, e, t), K2.addBox(i3, e), i3.titleBlock = e;
}
var fc = {
  id: "title",
  _element: Ce2,
  start(i3, t, e) {
    uc(i3, e);
  },
  stop(i3) {
    let t = i3.titleBlock;
    K2.removeBox(i3, t), delete i3.titleBlock;
  },
  beforeUpdate(i3, t, e) {
    let s = i3.titleBlock;
    K2.configure(i3, s, e), s.options = e;
  },
  defaults: {
    align: "center",
    display: false,
    font: {
      weight: "bold"
    },
    fullSize: true,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: true,
    _indexable: false
  }
};
var ni = /* @__PURE__ */ new WeakMap();
var gc = {
  id: "subtitle",
  start(i3, t, e) {
    let s = new Ce2({
      ctx: i3.ctx,
      options: e,
      chart: i3
    });
    K2.configure(i3, s, e), K2.addBox(i3, s), ni.set(i3, s);
  },
  stop(i3) {
    K2.removeBox(i3, ni.get(i3)), ni.delete(i3);
  },
  beforeUpdate(i3, t, e) {
    let s = ni.get(i3);
    K2.configure(i3, s, e), s.options = e;
  },
  defaults: {
    align: "center",
    display: false,
    font: {
      weight: "normal"
    },
    fullSize: true,
    padding: 0,
    position: "top",
    text: "",
    weight: 1500
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: true,
    _indexable: false
  }
};
var Se2 = {
  average(i3) {
    if (!i3.length) return false;
    let t, e, s = 0, n = 0, o = 0;
    for (t = 0, e = i3.length; t < e; ++t) {
      let a = i3[t].element;
      if (a && a.hasValue()) {
        let r = a.tooltipPosition();
        s += r.x, n += r.y, ++o;
      }
    }
    return {
      x: s / o,
      y: n / o
    };
  },
  nearest(i3, t) {
    if (!i3.length) return false;
    let e = t.x, s = t.y, n = Number.POSITIVE_INFINITY, o, a, r;
    for (o = 0, a = i3.length; o < a; ++o) {
      let l2 = i3[o].element;
      if (l2 && l2.hasValue()) {
        let c = l2.getCenterPoint(), h3 = je2(t, c);
        h3 < n && (n = h3, r = l2);
      }
    }
    if (r) {
      let l2 = r.tooltipPosition();
      e = l2.x, s = l2.y;
    }
    return {
      x: e,
      y: s
    };
  }
};
function ct(i3, t) {
  return t && (I(t) ? Array.prototype.push.apply(i3, t) : i3.push(t)), i3;
}
function bt(i3) {
  return (typeof i3 == "string" || i3 instanceof String) && i3.indexOf(`
`) > -1 ? i3.split(`
`) : i3;
}
function pc(i3, t) {
  let { element: e, datasetIndex: s, index: n } = t, o = i3.getDatasetMeta(s).controller, { label: a, value: r } = o.getLabelAndValue(n);
  return {
    chart: i3,
    label: a,
    parsed: o.getParsed(n),
    raw: i3.data.datasets[s].data[n],
    formattedValue: r,
    dataset: o.getDataset(),
    dataIndex: n,
    datasetIndex: s,
    element: e
  };
}
function to(i3, t) {
  let e = i3.chart.ctx, { body: s, footer: n, title: o } = i3, { boxWidth: a, boxHeight: r } = t, l2 = $(t.bodyFont), c = $(t.titleFont), h3 = $(t.footerFont), d = o.length, u = n.length, f = s.length, g2 = U(t.padding), p = g2.height, m = 0, b = s.reduce((y2, x) => y2 + x.before.length + x.lines.length + x.after.length, 0);
  if (b += i3.beforeBody.length + i3.afterBody.length, d && (p += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), b) {
    let y2 = t.displayColors ? Math.max(r, l2.lineHeight) : l2.lineHeight;
    p += f * y2 + (b - f) * l2.lineHeight + (b - 1) * t.bodySpacing;
  }
  u && (p += t.footerMarginTop + u * h3.lineHeight + (u - 1) * t.footerSpacing);
  let _ = 0, v2 = function(y2) {
    m = Math.max(m, e.measureText(y2).width + _);
  };
  return e.save(), e.font = c.string, E(i3.title, v2), e.font = l2.string, E(i3.beforeBody.concat(i3.afterBody), v2), _ = t.displayColors ? a + 2 + t.boxPadding : 0, E(s, (y2) => {
    E(y2.before, v2), E(y2.lines, v2), E(y2.after, v2);
  }), _ = 0, e.font = h3.string, E(i3.footer, v2), e.restore(), m += g2.width, {
    width: m,
    height: p
  };
}
function mc(i3, t) {
  let { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i3.height - s / 2 ? "bottom" : "center";
}
function bc(i3, t, e, s) {
  let { x: n, width: o } = s, a = e.caretSize + e.caretPadding;
  if (i3 === "left" && n + o + a > t.width || i3 === "right" && n - o - a < 0) return true;
}
function _c(i3, t, e, s) {
  let { x: n, width: o } = e, { width: a, chartArea: { left: r, right: l2 } } = i3, c = "center";
  return s === "center" ? c = n <= (r + l2) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= a - o / 2 && (c = "right"), bc(c, i3, t, e) && (c = "center"), c;
}
function eo(i3, t, e) {
  let s = e.yAlign || t.yAlign || mc(i3, e);
  return {
    xAlign: e.xAlign || t.xAlign || _c(i3, t, e, s),
    yAlign: s
  };
}
function xc(i3, t) {
  let { x: e, width: s } = i3;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function yc(i3, t, e) {
  let { y: s, height: n } = i3;
  return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function io(i3, t, e, s) {
  let { caretSize: n, caretPadding: o, cornerRadius: a } = i3, { xAlign: r, yAlign: l2 } = e, c = n + o, { topLeft: h3, topRight: d, bottomLeft: u, bottomRight: f } = kt(a), g2 = xc(t, r), p = yc(t, l2, c);
  return l2 === "center" ? r === "left" ? g2 += c : r === "right" && (g2 -= c) : r === "left" ? g2 -= Math.max(h3, u) + n : r === "right" && (g2 += Math.max(d, f) + n), {
    x: Y2(g2, 0, s.width - t.width),
    y: Y2(p, 0, s.height - t.height)
  };
}
function oi(i3, t, e) {
  let s = U(e.padding);
  return t === "center" ? i3.x + i3.width / 2 : t === "right" ? i3.x + i3.width - s.right : i3.x + s.left;
}
function so(i3) {
  return ct([], bt(i3));
}
function vc(i3, t, e) {
  return pt(i3, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function no(i3, t) {
  let e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i3.override(e) : i3;
}
var Ae2 = class extends it {
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart || t._chart, this._chart = this.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    let t = this._cachedAnimations;
    if (t) return t;
    let e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, o = new li(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = vc(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    let { callbacks: s } = e, n = s.beforeTitle.apply(this, [
      t
    ]), o = s.title.apply(this, [
      t
    ]), a = s.afterTitle.apply(this, [
      t
    ]), r = [];
    return r = ct(r, bt(n)), r = ct(r, bt(o)), r = ct(r, bt(a)), r;
  }
  getBeforeBody(t, e) {
    return so(e.callbacks.beforeBody.apply(this, [
      t
    ]));
  }
  getBody(t, e) {
    let { callbacks: s } = e, n = [];
    return E(t, (o) => {
      let a = {
        before: [],
        lines: [],
        after: []
      }, r = no(s, o);
      ct(a.before, bt(r.beforeLabel.call(this, o))), ct(a.lines, r.label.call(this, o)), ct(a.after, bt(r.afterLabel.call(this, o))), n.push(a);
    }), n;
  }
  getAfterBody(t, e) {
    return so(e.callbacks.afterBody.apply(this, [
      t
    ]));
  }
  getFooter(t, e) {
    let { callbacks: s } = e, n = s.beforeFooter.apply(this, [
      t
    ]), o = s.footer.apply(this, [
      t
    ]), a = s.afterFooter.apply(this, [
      t
    ]), r = [];
    return r = ct(r, bt(n)), r = ct(r, bt(o)), r = ct(r, bt(a)), r;
  }
  _createItems(t) {
    let e = this._active, s = this.chart.data, n = [], o = [], a = [], r = [], l2, c;
    for (l2 = 0, c = e.length; l2 < c; ++l2) r.push(pc(this.chart, e[l2]));
    return t.filter && (r = r.filter((h3, d, u) => t.filter(h3, d, u, s))), t.itemSort && (r = r.sort((h3, d) => t.itemSort(h3, d, s))), E(r, (h3) => {
      let d = no(t.callbacks, h3);
      n.push(d.labelColor.call(this, h3)), o.push(d.labelPointStyle.call(this, h3)), a.push(d.labelTextColor.call(this, h3));
    }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = a, this.dataPoints = r, r;
  }
  update(t, e) {
    let s = this.options.setContext(this.getContext()), n = this._active, o, a = [];
    if (!n.length) this.opacity !== 0 && (o = {
      opacity: 0
    });
    else {
      let r = Se2[s.position].call(this, n, this._eventPosition);
      a = this._createItems(s), this.title = this.getTitle(a, s), this.beforeBody = this.getBeforeBody(a, s), this.body = this.getBody(a, s), this.afterBody = this.getAfterBody(a, s), this.footer = this.getFooter(a, s);
      let l2 = this._size = to(this, s), c = Object.assign({}, r, l2), h3 = eo(this.chart, s, c), d = io(s, c, h3, this.chart);
      this.xAlign = h3.xAlign, this.yAlign = h3.yAlign, o = {
        opacity: 1,
        x: d.x,
        y: d.y,
        width: l2.width,
        height: l2.height,
        caretX: r.x,
        caretY: r.y
      };
    }
    this._tooltipItems = a, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && s.external && s.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: e
    });
  }
  drawCaret(t, e, s, n) {
    let o = this.getCaretPosition(t, s, n);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, s) {
    let { xAlign: n, yAlign: o } = this, { caretSize: a, cornerRadius: r } = s, { topLeft: l2, topRight: c, bottomLeft: h3, bottomRight: d } = kt(r), { x: u, y: f } = t, { width: g2, height: p } = e, m, b, _, v2, y2, x;
    return o === "center" ? (y2 = f + p / 2, n === "left" ? (m = u, b = m - a, v2 = y2 + a, x = y2 - a) : (m = u + g2, b = m + a, v2 = y2 - a, x = y2 + a), _ = m) : (n === "left" ? b = u + Math.max(l2, h3) + a : n === "right" ? b = u + g2 - Math.max(c, d) - a : b = this.caretX, o === "top" ? (v2 = f, y2 = v2 - a, m = b - a, _ = b + a) : (v2 = f + p, y2 = v2 + a, m = b + a, _ = b - a), x = v2), {
      x1: m,
      x2: b,
      x3: _,
      y1: v2,
      y2,
      y3: x
    };
  }
  drawTitle(t, e, s) {
    let n = this.title, o = n.length, a, r, l2;
    if (o) {
      let c = Rt(s.rtl, this.x, this.width);
      for (t.x = oi(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", a = $(s.titleFont), r = s.titleSpacing, e.fillStyle = s.titleColor, e.font = a.string, l2 = 0; l2 < o; ++l2) e.fillText(n[l2], c.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + r, l2 + 1 === o && (t.y += s.titleMarginBottom - r);
    }
  }
  _drawColorBox(t, e, s, n, o) {
    let a = this.labelColors[s], r = this.labelPointStyles[s], { boxHeight: l2, boxWidth: c, boxPadding: h3 } = o, d = $(o.bodyFont), u = oi(this, "left", o), f = n.x(u), g2 = l2 < d.lineHeight ? (d.lineHeight - l2) / 2 : 0, p = e.y + g2;
    if (o.usePointStyle) {
      let m = {
        radius: Math.min(c, l2) / 2,
        pointStyle: r.pointStyle,
        rotation: r.rotation,
        borderWidth: 1
      }, b = n.leftForLtr(f, c) + c / 2, _ = p + l2 / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Ge(t, m, b, _), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, Ge(t, m, b, _);
    } else {
      t.lineWidth = O(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0;
      let m = n.leftForLtr(f, c - h3), b = n.leftForLtr(n.xPlus(f, 1), c - h3 - 2), _ = kt(a.borderRadius);
      Object.values(_).some((v2) => v2 !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Kt(t, {
        x: m,
        y: p,
        w: c,
        h: l2,
        radius: _
      }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), Kt(t, {
        x: b,
        y: p + 1,
        w: c - 2,
        h: l2 - 2,
        radius: _
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(m, p, c, l2), t.strokeRect(m, p, c, l2), t.fillStyle = a.backgroundColor, t.fillRect(b, p + 1, c - 2, l2 - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, e, s) {
    let { body: n } = this, { bodySpacing: o, bodyAlign: a, displayColors: r, boxHeight: l2, boxWidth: c, boxPadding: h3 } = s, d = $(s.bodyFont), u = d.lineHeight, f = 0, g2 = Rt(s.rtl, this.x, this.width), p = function(S2) {
      e.fillText(S2, g2.x(t.x + f), t.y + u / 2), t.y += u + o;
    }, m = g2.textAlign(a), b, _, v2, y2, x, M2, w;
    for (e.textAlign = a, e.textBaseline = "middle", e.font = d.string, t.x = oi(this, m, s), e.fillStyle = s.bodyColor, E(this.beforeBody, p), f = r && m !== "right" ? a === "center" ? c / 2 + h3 : c + 2 + h3 : 0, y2 = 0, M2 = n.length; y2 < M2; ++y2) {
      for (b = n[y2], _ = this.labelTextColors[y2], e.fillStyle = _, E(b.before, p), v2 = b.lines, r && v2.length && (this._drawColorBox(e, t, y2, g2, s), u = Math.max(d.lineHeight, l2)), x = 0, w = v2.length; x < w; ++x) p(v2[x]), u = d.lineHeight;
      E(b.after, p);
    }
    f = 0, u = d.lineHeight, E(this.afterBody, p), t.y -= o;
  }
  drawFooter(t, e, s) {
    let n = this.footer, o = n.length, a, r;
    if (o) {
      let l2 = Rt(s.rtl, this.x, this.width);
      for (t.x = oi(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l2.textAlign(s.footerAlign), e.textBaseline = "middle", a = $(s.footerFont), e.fillStyle = s.footerColor, e.font = a.string, r = 0; r < o; ++r) e.fillText(n[r], l2.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, e, s, n) {
    let { xAlign: o, yAlign: a } = this, { x: r, y: l2 } = t, { width: c, height: h3 } = s, { topLeft: d, topRight: u, bottomLeft: f, bottomRight: g2 } = kt(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(r + d, l2), a === "top" && this.drawCaret(t, e, s, n), e.lineTo(r + c - u, l2), e.quadraticCurveTo(r + c, l2, r + c, l2 + u), a === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(r + c, l2 + h3 - g2), e.quadraticCurveTo(r + c, l2 + h3, r + c - g2, l2 + h3), a === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(r + f, l2 + h3), e.quadraticCurveTo(r, l2 + h3, r, l2 + h3 - f), a === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(r, l2 + d), e.quadraticCurveTo(r, l2, r + d, l2), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    let e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
    if (n || o) {
      let a = Se2[t.position].call(this, this._active, this._eventPosition);
      if (!a) return;
      let r = this._size = to(this, t), l2 = Object.assign({}, a, this._size), c = eo(e, t, l2), h3 = io(t, l2, c, e);
      (n._to !== h3.x || o._to !== h3.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = r.width, this.height = r.height, this.caretX = a.x, this.caretY = a.y, this._resolveAnimations().update(this, h3));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    let e = this.options.setContext(this.getContext()), s = this.opacity;
    if (!s) return;
    this._updateAnimationTarget(e);
    let n = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    s = Math.abs(s) < 1e-3 ? 0 : s;
    let a = U(e.padding), r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && r && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), ts(t, e.textDirection), o.y += a.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), es(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    let s = this._active, n = t.map(({ datasetIndex: r, index: l2 }) => {
      let c = this.chart.getDatasetMeta(r);
      if (!c) throw new Error("Cannot find a dataset at index " + r);
      return {
        datasetIndex: r,
        element: c.data[l2],
        index: l2
      };
    }), o = !pe3(s, n), a = this._positionChanged(n, e);
    (o || a) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = true, this.update(true));
  }
  handleEvent(t, e, s = true) {
    if (e && this._ignoreReplayEvents) return false;
    this._ignoreReplayEvents = false;
    let n = this.options, o = this._active || [], a = this._getActiveElements(t, o, e, s), r = this._positionChanged(a, t), l2 = e || !pe3(a, o) || r;
    return l2 && (this._active = a, (n.enabled || n.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(true, e))), l2;
  }
  _getActiveElements(t, e, s, n) {
    let o = this.options;
    if (t.type === "mouseout") return [];
    if (!n) return e;
    let a = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
    return o.reverse && a.reverse(), a;
  }
  _positionChanged(t, e) {
    let { caretX: s, caretY: n, options: o } = this, a = Se2[o.position].call(this, t, e);
    return a !== false && (s !== a.x || n !== a.y);
  }
};
Ae2.positioners = Se2;
var Mc = {
  id: "tooltip",
  _element: Ae2,
  positioners: Se2,
  afterInit(i3, t, e) {
    e && (i3.tooltip = new Ae2({
      chart: i3,
      options: e
    }));
  },
  beforeUpdate(i3, t, e) {
    i3.tooltip && i3.tooltip.initialize(e);
  },
  reset(i3, t, e) {
    i3.tooltip && i3.tooltip.initialize(e);
  },
  afterDraw(i3) {
    let t = i3.tooltip;
    if (t && t._willRender()) {
      let e = {
        tooltip: t
      };
      if (i3.notifyPlugins("beforeTooltipDraw", e) === false) return;
      t.draw(i3.ctx), i3.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(i3, t) {
    if (i3.tooltip) {
      let e = t.replay;
      i3.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = true);
    }
  },
  defaults: {
    enabled: true,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (i3, t) => t.bodyFont.size,
    boxWidth: (i3, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: true,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: {
      beforeTitle: rt,
      title(i3) {
        if (i3.length > 0) {
          let t = i3[0], e = t.chart.data.labels, s = e ? e.length : 0;
          if (this && this.options && this.options.mode === "dataset") return t.dataset.label || "";
          if (t.label) return t.label;
          if (s > 0 && t.dataIndex < s) return e[t.dataIndex];
        }
        return "";
      },
      afterTitle: rt,
      beforeBody: rt,
      beforeLabel: rt,
      label(i3) {
        if (this && this.options && this.options.mode === "dataset") return i3.label + ": " + i3.formattedValue || i3.formattedValue;
        let t = i3.dataset.label || "";
        t && (t += ": ");
        let e = i3.formattedValue;
        return T(e) || (t += e), t;
      },
      labelColor(i3) {
        let e = i3.chart.getDatasetMeta(i3.datasetIndex).controller.getStyle(i3.dataIndex);
        return {
          borderColor: e.borderColor,
          backgroundColor: e.backgroundColor,
          borderWidth: e.borderWidth,
          borderDash: e.borderDash,
          borderDashOffset: e.borderDashOffset,
          borderRadius: 0
        };
      },
      labelTextColor() {
        return this.options.bodyColor;
      },
      labelPointStyle(i3) {
        let e = i3.chart.getDatasetMeta(i3.datasetIndex).controller.getStyle(i3.dataIndex);
        return {
          pointStyle: e.pointStyle,
          rotation: e.rotation
        };
      },
      afterLabel: rt,
      afterBody: rt,
      beforeFooter: rt,
      footer: rt,
      afterFooter: rt
    }
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (i3) => i3 !== "filter" && i3 !== "itemSort" && i3 !== "external",
    _indexable: false,
    callbacks: {
      _scriptable: false,
      _indexable: false
    },
    animation: {
      _fallback: false
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
};
var wc = Object.freeze({
  __proto__: null,
  Decimation: Hl,
  Filler: lc,
  Legend: dc,
  SubTitle: gc,
  Title: fc,
  Tooltip: Mc
});
var kc = (i3, t, e, s) => (typeof t == "string" ? (e = i3.push(t) - 1, s.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function Sc(i3, t, e, s) {
  let n = i3.indexOf(t);
  if (n === -1) return kc(i3, t, e, s);
  let o = i3.lastIndexOf(t);
  return n !== o ? e : n;
}
var Pc = (i3, t) => i3 === null ? null : Y2(Math.round(i3), 0, t);
var le2 = class extends Ft {
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    let e = this._addedLabels;
    if (e.length) {
      let s = this.getLabels();
      for (let { index: n, label: o } of e) s[n] === o && s.splice(n, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (T(t)) return null;
    let s = this.getLabels();
    return e = isFinite(e) && s[e] === t ? e : Sc(s, t, D2(e, t), this._addedLabels), Pc(e, s.length - 1);
  }
  determineDataLimits() {
    let { minDefined: t, maxDefined: e } = this.getUserBounds(), { min: s, max: n } = this.getMinMax(true);
    this.options.bounds === "ticks" && (t || (s = 0), e || (n = this.getLabels().length - 1)), this.min = s, this.max = n;
  }
  buildTicks() {
    let t = this.min, e = this.max, s = this.options.offset, n = [], o = this.getLabels();
    o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (s ? 0 : 1), 1), this._startValue = this.min - (s ? 0.5 : 0);
    for (let a = t; a <= e; a++) n.push({
      value: a
    });
    return n;
  }
  getLabelForValue(t) {
    let e = this.getLabels();
    return t >= 0 && t < e.length ? e[t] : t;
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    let e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
};
le2.id = "category";
le2.defaults = {
  ticks: {
    callback: le2.prototype.getLabelForValue
  }
};
function Dc(i3, t) {
  let e = [], { bounds: n, step: o, min: a, max: r, precision: l2, count: c, maxTicks: h3, maxDigits: d, includeBounds: u } = i3, f = o || 1, g2 = h3 - 1, { min: p, max: m } = t, b = !T(a), _ = !T(r), v2 = !T(c), y2 = (m - p) / (d + 1), x = Ai((m - p) / g2 / f) * f, M2, w, S2, k2;
  if (x < 1e-14 && !b && !_) return [
    {
      value: p
    },
    {
      value: m
    }
  ];
  k2 = Math.ceil(m / x) - Math.floor(p / x), k2 > g2 && (x = Ai(k2 * x / g2 / f) * f), T(l2) || (M2 = Math.pow(10, l2), x = Math.ceil(x * M2) / M2), n === "ticks" ? (w = Math.floor(p / x) * x, S2 = Math.ceil(m / x) * x) : (w = p, S2 = m), b && _ && o && Xs((r - a) / o, x / 1e3) ? (k2 = Math.round(Math.min((r - a) / x, h3)), x = (r - a) / k2, w = a, S2 = r) : v2 ? (w = b ? a : w, S2 = _ ? r : S2, k2 = c - 1, x = (S2 - w) / k2) : (k2 = (S2 - w) / x, Xt(k2, Math.round(k2), x / 1e3) ? k2 = Math.round(k2) : k2 = Math.ceil(k2));
  let L = Math.max(Li(x), Li(w));
  M2 = Math.pow(10, T(l2) ? L : l2), w = Math.round(w * M2) / M2, S2 = Math.round(S2 * M2) / M2;
  let R = 0;
  for (b && (u && w !== a ? (e.push({
    value: a
  }), w < a && R++, Xt(Math.round((w + R * x) * M2) / M2, a, oo(a, y2, i3)) && R++) : w < a && R++); R < k2; ++R) e.push({
    value: Math.round((w + R * x) * M2) / M2
  });
  return _ && u && S2 !== r ? e.length && Xt(e[e.length - 1].value, r, oo(r, y2, i3)) ? e[e.length - 1].value = r : e.push({
    value: r
  }) : (!_ || S2 === r) && e.push({
    value: S2
  }), e;
}
function oo(i3, t, { horizontal: e, minRotation: s }) {
  let n = nt(s), o = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, a = 0.75 * t * ("" + i3).length;
  return Math.min(t / o, a);
}
var ce3 = class extends Ft {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return T(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    let { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s } = this.getUserBounds(), { min: n, max: o } = this, a = (l2) => n = e ? n : l2, r = (l2) => o = s ? o : l2;
    if (t) {
      let l2 = ot(n), c = ot(o);
      l2 < 0 && c < 0 ? r(0) : l2 > 0 && c > 0 && a(0);
    }
    if (n === o) {
      let l2 = 1;
      (o >= Number.MAX_SAFE_INTEGER || n <= Number.MIN_SAFE_INTEGER) && (l2 = Math.abs(o * 0.05)), r(o + l2), t || a(n - l2);
    }
    this.min = n, this.max = o;
  }
  getTickLimit() {
    let t = this.options.ticks, { maxTicksLimit: e, stepSize: s } = t, n;
    return s ? (n = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), e = e || 11), e && (n = Math.min(e, n)), n;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    let t = this.options, e = t.ticks, s = this.getTickLimit();
    s = Math.max(2, s);
    let n = {
      maxTicks: s,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: e.precision,
      step: e.stepSize,
      count: e.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: e.minRotation || 0,
      includeBounds: e.includeBounds !== false
    }, o = this._range || this, a = Dc(n, o);
    return t.bounds === "ticks" && Ti(a, this, "value"), t.reverse ? (a.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), a;
  }
  configure() {
    let t = this.ticks, e = this.min, s = this.max;
    if (super.configure(), this.options.offset && t.length) {
      let n = (s - e) / Math.max(t.length - 1, 1) / 2;
      e -= n, s += n;
    }
    this._startValue = e, this._endValue = s, this._valueRange = s - e;
  }
  getLabelForValue(t) {
    return Gt(t, this.chart.options.locale, this.options.ticks.format);
  }
};
var Te2 = class extends ce3 {
  determineDataLimits() {
    let { min: t, max: e } = this.getMinMax(true);
    this.min = N(t) ? t : 0, this.max = N(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    let t = this.isHorizontal(), e = t ? this.width : this.height, s = nt(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / n));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
};
Te2.id = "linear";
Te2.defaults = {
  ticks: {
    callback: pi.formatters.numeric
  }
};
function ao(i3) {
  return i3 / Math.pow(10, Math.floor(tt(i3))) === 1;
}
function Oc(i3, t) {
  let e = Math.floor(tt(t.max)), s = Math.ceil(t.max / Math.pow(10, e)), n = [], o = Q2(i3.min, Math.pow(10, Math.floor(tt(t.min)))), a = Math.floor(tt(o)), r = Math.floor(o / Math.pow(10, a)), l2 = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
  do
    n.push({
      value: o,
      major: ao(o)
    }), ++r, r === 10 && (r = 1, ++a, l2 = a >= 0 ? 1 : l2), o = Math.round(r * Math.pow(10, a) * l2) / l2;
  while (a < e || a === e && r < s);
  let c = Q2(i3.max, o);
  return n.push({
    value: c,
    major: ao(o)
  }), n;
}
var Le2 = class extends Ft {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    let s = ce3.prototype.parse.apply(this, [
      t,
      e
    ]);
    if (s === 0) {
      this._zero = true;
      return;
    }
    return N(s) && s > 0 ? s : null;
  }
  determineDataLimits() {
    let { min: t, max: e } = this.getMinMax(true);
    this.min = N(t) ? Math.max(0, t) : null, this.max = N(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = true), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    let { minDefined: t, maxDefined: e } = this.getUserBounds(), s = this.min, n = this.max, o = (l2) => s = t ? s : l2, a = (l2) => n = e ? n : l2, r = (l2, c) => Math.pow(10, Math.floor(tt(l2)) + c);
    s === n && (s <= 0 ? (o(1), a(10)) : (o(r(s, -1)), a(r(n, 1)))), s <= 0 && o(r(n, -1)), n <= 0 && a(r(s, 1)), this._zero && this.min !== this._suggestedMin && s === r(this.min, 0) && o(r(s, -1)), this.min = s, this.max = n;
  }
  buildTicks() {
    let t = this.options, e = {
      min: this._userMin,
      max: this._userMax
    }, s = Oc(e, this);
    return t.bounds === "ticks" && Ti(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : Gt(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    let t = this.min;
    super.configure(), this._startValue = tt(t), this._valueRange = tt(this.max) - tt(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (tt(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    let e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
};
Le2.id = "logarithmic";
Le2.defaults = {
  ticks: {
    callback: pi.formatters.logarithmic,
    major: {
      enabled: true
    }
  }
};
function Ss2(i3) {
  let t = i3.ticks;
  if (t.display && i3.display) {
    let e = U(t.backdropPadding);
    return D2(t.font && t.font.size, C.font.size) + e.height;
  }
  return 0;
}
function Cc(i3, t, e) {
  return e = I(e) ? e : [
    e
  ], {
    w: an(i3, t.string, e),
    h: e.length * t.lineHeight
  };
}
function ro(i3, t, e, s, n) {
  return i3 === s || i3 === n ? {
    start: t - e / 2,
    end: t + e / 2
  } : i3 < s || i3 > n ? {
    start: t - e,
    end: t
  } : {
    start: t,
    end: t + e
  };
}
function Ac(i3) {
  let t = {
    l: i3.left + i3._padding.left,
    r: i3.right - i3._padding.right,
    t: i3.top + i3._padding.top,
    b: i3.bottom - i3._padding.bottom
  }, e = Object.assign({}, t), s = [], n = [], o = i3._pointLabels.length, a = i3.options.pointLabels, r = a.centerPointLabels ? B3 / o : 0;
  for (let l2 = 0; l2 < o; l2++) {
    let c = a.setContext(i3.getPointLabelContext(l2));
    n[l2] = c.padding;
    let h3 = i3.getPointPosition(l2, i3.drawingArea + n[l2], r), d = $(c.font), u = Cc(i3.ctx, d, i3._pointLabels[l2]);
    s[l2] = u;
    let f = G3(i3.getIndexAngle(l2) + r), g2 = Math.round(Xe(f)), p = ro(g2, h3.x, u.w, 0, 180), m = ro(g2, h3.y, u.h, 90, 270);
    Tc(e, t, f, p, m);
  }
  i3.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i3._pointLabelItems = Lc(i3, s, n);
}
function Tc(i3, t, e, s, n) {
  let o = Math.abs(Math.sin(e)), a = Math.abs(Math.cos(e)), r = 0, l2 = 0;
  s.start < t.l ? (r = (t.l - s.start) / o, i3.l = Math.min(i3.l, t.l - r)) : s.end > t.r && (r = (s.end - t.r) / o, i3.r = Math.max(i3.r, t.r + r)), n.start < t.t ? (l2 = (t.t - n.start) / a, i3.t = Math.min(i3.t, t.t - l2)) : n.end > t.b && (l2 = (n.end - t.b) / a, i3.b = Math.max(i3.b, t.b + l2));
}
function Lc(i3, t, e) {
  let s = [], n = i3._pointLabels.length, o = i3.options, a = Ss2(o) / 2, r = i3.drawingArea, l2 = o.pointLabels.centerPointLabels ? B3 / n : 0;
  for (let c = 0; c < n; c++) {
    let h3 = i3.getPointPosition(c, r + a + e[c], l2), d = Math.round(Xe(G3(h3.angle + V2))), u = t[c], f = Fc(h3.y, u.h, d), g2 = Rc(d), p = Ec(h3.x, u.w, g2);
    s.push({
      x: h3.x,
      y: f,
      textAlign: g2,
      left: p,
      top: f,
      right: p + u.w,
      bottom: f + u.h
    });
  }
  return s;
}
function Rc(i3) {
  return i3 === 0 || i3 === 180 ? "center" : i3 < 180 ? "left" : "right";
}
function Ec(i3, t, e) {
  return e === "right" ? i3 -= t : e === "center" && (i3 -= t / 2), i3;
}
function Fc(i3, t, e) {
  return e === 90 || e === 270 ? i3 -= t / 2 : (e > 270 || e < 90) && (i3 -= t), i3;
}
function Ic(i3, t) {
  let { ctx: e, options: { pointLabels: s } } = i3;
  for (let n = t - 1; n >= 0; n--) {
    let o = s.setContext(i3.getPointLabelContext(n)), a = $(o.font), { x: r, y: l2, textAlign: c, left: h3, top: d, right: u, bottom: f } = i3._pointLabelItems[n], { backdropColor: g2 } = o;
    if (!T(g2)) {
      let p = kt(o.borderRadius), m = U(o.backdropPadding);
      e.fillStyle = g2;
      let b = h3 - m.left, _ = d - m.top, v2 = u - h3 + m.width, y2 = f - d + m.height;
      Object.values(p).some((x) => x !== 0) ? (e.beginPath(), Kt(e, {
        x: b,
        y: _,
        w: v2,
        h: y2,
        radius: p
      }), e.fill()) : e.fillRect(b, _, v2, y2);
    }
    wt(e, i3._pointLabels[n], r, l2 + a.lineHeight / 2, a, {
      color: o.color,
      textAlign: c,
      textBaseline: "middle"
    });
  }
}
function To(i3, t, e, s) {
  let { ctx: n } = i3;
  if (e) n.arc(i3.xCenter, i3.yCenter, t, 0, F);
  else {
    let o = i3.getPointPosition(0, t);
    n.moveTo(o.x, o.y);
    for (let a = 1; a < s; a++) o = i3.getPointPosition(a, t), n.lineTo(o.x, o.y);
  }
}
function zc(i3, t, e, s) {
  let n = i3.ctx, o = t.circular, { color: a, lineWidth: r } = t;
  !o && !s || !a || !r || e < 0 || (n.save(), n.strokeStyle = a, n.lineWidth = r, n.setLineDash(t.borderDash), n.lineDashOffset = t.borderDashOffset, n.beginPath(), To(i3, e, o, s), n.closePath(), n.stroke(), n.restore());
}
function Bc(i3, t, e) {
  return pt(i3, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
var It = class extends ce3 {
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    let t = this._padding = U(Ss2(this.options) / 2), e = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2);
  }
  determineDataLimits() {
    let { min: t, max: e } = this.getMinMax(false);
    this.min = N(t) && !isNaN(t) ? t : 0, this.max = N(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Ss2(this.options));
  }
  generateTickLabels(t) {
    ce3.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s) => {
      let n = z2(this.options.pointLabels.callback, [
        e,
        s
      ], this);
      return n || n === 0 ? n : "";
    }).filter((e, s) => this.chart.getDataVisibility(s));
  }
  fit() {
    let t = this.options;
    t.display && t.pointLabels.display ? Ac(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, s, n) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n));
  }
  getIndexAngle(t) {
    let e = F / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
    return G3(t * e + nt(s));
  }
  getDistanceFromCenterForValue(t) {
    if (T(t)) return NaN;
    let e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (T(t)) return NaN;
    let e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    let e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      let s = e[t];
      return Bc(this.getContext(), t, s);
    }
  }
  getPointPosition(t, e, s = 0) {
    let n = this.getIndexAngle(t) - V2 + s;
    return {
      x: Math.cos(n) * e + this.xCenter,
      y: Math.sin(n) * e + this.yCenter,
      angle: n
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    let { left: e, top: s, right: n, bottom: o } = this._pointLabelItems[t];
    return {
      left: e,
      top: s,
      right: n,
      bottom: o
    };
  }
  drawBackground() {
    let { backgroundColor: t, grid: { circular: e } } = this.options;
    if (t) {
      let s = this.ctx;
      s.save(), s.beginPath(), To(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
    }
  }
  drawGrid() {
    let t = this.ctx, e = this.options, { angleLines: s, grid: n } = e, o = this._pointLabels.length, a, r, l2;
    if (e.pointLabels.display && Ic(this, o), n.display && this.ticks.forEach((c, h3) => {
      if (h3 !== 0) {
        r = this.getDistanceFromCenterForValue(c.value);
        let d = n.setContext(this.getContext(h3 - 1));
        zc(this, d, r, o);
      }
    }), s.display) {
      for (t.save(), a = o - 1; a >= 0; a--) {
        let c = s.setContext(this.getPointLabelContext(a)), { color: h3, lineWidth: d } = c;
        !d || !h3 || (t.lineWidth = d, t.strokeStyle = h3, t.setLineDash(c.borderDash), t.lineDashOffset = c.borderDashOffset, r = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), l2 = this.getPointPosition(a, r), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(l2.x, l2.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    let t = this.ctx, e = this.options, s = e.ticks;
    if (!s.display) return;
    let n = this.getIndexAngle(0), o, a;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((r, l2) => {
      if (l2 === 0 && !e.reverse) return;
      let c = s.setContext(this.getContext(l2)), h3 = $(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l2].value), c.showLabelBackdrop) {
        t.font = h3.string, a = t.measureText(r.label).width, t.fillStyle = c.backdropColor;
        let d = U(c.backdropPadding);
        t.fillRect(-a / 2 - d.left, -o - h3.size / 2 - d.top, a + d.width, h3.size + d.height);
      }
      wt(t, r.label, 0, -o, h3, {
        color: c.color
      });
    }), t.restore();
  }
  drawTitle() {
  }
};
It.id = "radialLinear";
It.defaults = {
  display: true,
  animate: true,
  position: "chartArea",
  angleLines: {
    display: true,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0
  },
  grid: {
    circular: false
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: true,
    callback: pi.formatters.numeric
  },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: true,
    font: {
      size: 10
    },
    callback(i3) {
      return i3;
    },
    padding: 5,
    centerPointLabels: false
  }
};
It.defaultRoutes = {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
};
It.descriptors = {
  angleLines: {
    _fallback: "grid"
  }
};
var mi = {
  millisecond: {
    common: true,
    size: 1,
    steps: 1e3
  },
  second: {
    common: true,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: true,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: true,
    size: 36e5,
    steps: 24
  },
  day: {
    common: true,
    size: 864e5,
    steps: 30
  },
  week: {
    common: false,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: true,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: false,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: true,
    size: 3154e7
  }
};
var Z3 = Object.keys(mi);
function Vc(i3, t) {
  return i3 - t;
}
function lo(i3, t) {
  if (T(t)) return null;
  let e = i3._adapter, { parser: s, round: n, isoWeekday: o } = i3._parseOpts, a = t;
  return typeof s == "function" && (a = s(a)), N(a) || (a = typeof s == "string" ? e.parse(a, s) : e.parse(a)), a === null ? null : (n && (a = n === "week" && (Lt(o) || o === true) ? e.startOf(a, "isoWeek", o) : e.startOf(a, n)), +a);
}
function co(i3, t, e, s) {
  let n = Z3.length;
  for (let o = Z3.indexOf(i3); o < n - 1; ++o) {
    let a = mi[Z3[o]], r = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
    if (a.common && Math.ceil((e - t) / (r * a.size)) <= s) return Z3[o];
  }
  return Z3[n - 1];
}
function Nc(i3, t, e, s, n) {
  for (let o = Z3.length - 1; o >= Z3.indexOf(e); o--) {
    let a = Z3[o];
    if (mi[a].common && i3._adapter.diff(n, s, a) >= t - 1) return a;
  }
  return Z3[e ? Z3.indexOf(e) : 0];
}
function Wc(i3) {
  for (let t = Z3.indexOf(i3) + 1, e = Z3.length; t < e; ++t) if (mi[Z3[t]].common) return Z3[t];
}
function ho(i3, t, e) {
  if (!e) i3[t] = true;
  else if (e.length) {
    let { lo: s, hi: n } = Ue(e, t), o = e[s] >= t ? e[s] : e[n];
    i3[o] = true;
  }
}
function Hc(i3, t, e, s) {
  let n = i3._adapter, o = +n.startOf(t[0].value, s), a = t[t.length - 1].value, r, l2;
  for (r = o; r <= a; r = +n.add(r, 1, s)) l2 = e[r], l2 >= 0 && (t[l2].major = true);
  return t;
}
function uo(i3, t, e) {
  let s = [], n = {}, o = t.length, a, r;
  for (a = 0; a < o; ++a) r = t[a], n[r] = a, s.push({
    value: r,
    major: false
  });
  return o === 0 || !e ? s : Hc(i3, s, n, e);
}
var zt = class extends Ft {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = false, this._parseOpts = void 0;
  }
  init(t, e) {
    let s = t.time || (t.time = {}), n = this._adapter = new Lr._date(t.adapters.date);
    n.init(e), Yt(s.displayFormats, n.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : lo(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    let t = this.options, e = this._adapter, s = t.time.unit || "day", { min: n, max: o, minDefined: a, maxDefined: r } = this.getUserBounds();
    function l2(c) {
      !a && !isNaN(c.min) && (n = Math.min(n, c.min)), !r && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!a || !r) && (l2(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l2(this.getMinMax(false))), n = N(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = N(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
  }
  _getLabelBounds() {
    let t = this.getLabelTimestamps(), e = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
    return t.length && (e = t[0], s = t[t.length - 1]), {
      min: e,
      max: s
    };
  }
  buildTicks() {
    let t = this.options, e = t.time, s = t.ticks, n = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
    let o = this.min, a = this.max, r = qs(n, o, a);
    return this._unit = e.unit || (s.autoSkip ? co(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Nc(this, r.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : Wc(this._unit), this.initOffsets(n), t.reverse && r.reverse(), uo(this, r, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t) {
    let e = 0, s = 0, n, o;
    this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    let a = t.length < 3 ? 0.5 : 0.25;
    e = Y2(e, 0, a), s = Y2(s, 0, a), this._offsets = {
      start: e,
      end: s,
      factor: 1 / (e + 1 + s)
    };
  }
  _generate() {
    let t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, a = o.unit || co(o.minUnit, e, s, this._getLabelCapacity(e)), r = D2(o.stepSize, 1), l2 = a === "week" ? o.isoWeekday : false, c = Lt(l2) || l2 === true, h3 = {}, d = e, u, f;
    if (c && (d = +t.startOf(d, "isoWeek", l2)), d = +t.startOf(d, c ? "day" : a), t.diff(s, e, a) > 1e5 * r) throw new Error(e + " and " + s + " are too far apart with stepSize of " + r + " " + a);
    let g2 = n.ticks.source === "data" && this.getDataTimestamps();
    for (u = d, f = 0; u < s; u = +t.add(u, r, a), f++) ho(h3, u, g2);
    return (u === s || n.bounds === "ticks" || f === 1) && ho(h3, u, g2), Object.keys(h3).sort((p, m) => p - m).map((p) => +p);
  }
  getLabelForValue(t) {
    let e = this._adapter, s = this.options.time;
    return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime);
  }
  _tickFormatFunction(t, e, s, n) {
    let o = this.options, a = o.time.displayFormats, r = this._unit, l2 = this._majorUnit, c = r && a[r], h3 = l2 && a[l2], d = s[e], u = l2 && h3 && d && d.major, f = this._adapter.format(t, n || (u ? h3 : c)), g2 = o.ticks.callback;
    return g2 ? z2(g2, [
      f,
      e,
      s
    ], this) : f;
  }
  generateTickLabels(t) {
    let e, s, n;
    for (e = 0, s = t.length; e < s; ++e) n = t[e], n.label = this._tickFormatFunction(n.value, e, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    let e = this._offsets, s = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + s) * e.factor);
  }
  getValueForPixel(t) {
    let e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + s * (this.max - this.min);
  }
  _getLabelSize(t) {
    let e = this.options.ticks, s = this.ctx.measureText(t).width, n = nt(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), a = Math.sin(n), r = this._resolveTickFontOptions(0).size;
    return {
      w: s * o + r * a,
      h: s * a + r * o
    };
  }
  _getLabelCapacity(t) {
    let e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, uo(this, [
      t
    ], this._majorUnit), n), a = this._getLabelSize(o), r = Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) - 1;
    return r > 0 ? r : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], e, s;
    if (t.length) return t;
    let n = this.getMatchingVisibleMetas();
    if (this._normalized && n.length) return this._cache.data = n[0].controller.getAllParsedValues(this);
    for (e = 0, s = n.length; e < s; ++e) t = t.concat(n[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    let t = this._cache.labels || [], e, s;
    if (t.length) return t;
    let n = this.getLabels();
    for (e = 0, s = n.length; e < s; ++e) t.push(lo(this, n[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return Fi(t.sort(Vc));
  }
};
zt.id = "time";
zt.defaults = {
  bounds: "data",
  adapters: {},
  time: {
    parser: false,
    unit: false,
    round: false,
    isoWeekday: false,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    major: {
      enabled: false
    }
  }
};
function ai(i3, t, e) {
  let s = 0, n = i3.length - 1, o, a, r, l2;
  e ? (t >= i3[s].pos && t <= i3[n].pos && ({ lo: s, hi: n } = at(i3, "pos", t)), { pos: o, time: r } = i3[s], { pos: a, time: l2 } = i3[n]) : (t >= i3[s].time && t <= i3[n].time && ({ lo: s, hi: n } = at(i3, "time", t)), { time: o, pos: r } = i3[s], { time: a, pos: l2 } = i3[n]);
  let c = a - o;
  return c ? r + (l2 - r) * (t - o) / c : r;
}
var Re2 = class extends zt {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    let t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = ai(e, this.min), this._tableRange = ai(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    let { min: e, max: s } = this, n = [], o = [], a, r, l2, c, h3;
    for (a = 0, r = t.length; a < r; ++a) c = t[a], c >= e && c <= s && n.push(c);
    if (n.length < 2) return [
      {
        time: e,
        pos: 0
      },
      {
        time: s,
        pos: 1
      }
    ];
    for (a = 0, r = n.length; a < r; ++a) h3 = n[a + 1], l2 = n[a - 1], c = n[a], Math.round((h3 + l2) / 2) !== c && o.push({
      time: c,
      pos: a / (r - 1)
    });
    return o;
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    let e = this.getDataTimestamps(), s = this.getLabelTimestamps();
    return e.length && s.length ? t = this.normalize(e.concat(s)) : t = e.length ? e : s, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (ai(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    let e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return ai(this._table, s * this._tableRange + this._minPos, true);
  }
};
Re2.id = "timeseries";
Re2.defaults = zt.defaults;
var jc = Object.freeze({
  __proto__: null,
  CategoryScale: le2,
  LinearScale: Te2,
  LogarithmicScale: Le2,
  RadialLinearScale: It,
  TimeScale: zt,
  TimeSeriesScale: Re2
});
var Xc = [
  Tr,
  Bl,
  wc,
  jc
];

// deno:https://esm.sh/react-chartjs-2@4.0.1/denonext/react-chartjs-2.mjs
var v = "label";
function h2(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
function M(t, e) {
  t.options = {
    ...e
  };
}
function y(t, e) {
  t.labels = e;
}
function A2(t, e) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : v, c = [];
  t.datasets = e.map((n) => {
    let s = t.datasets.find((d) => d[a] === n[a]);
    return !s || !n.data || c.includes(s) ? {
      ...n
    } : (c.push(s), Object.assign(s, n), s);
  });
}
function S(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : v, a = {
    labels: [],
    datasets: []
  };
  return y(a, t.labels), A2(a, t.datasets, e), a;
}
function T2(t, e) {
  let { height: a = 150, width: c = 300, redraw: n = false, datasetIdKey: s, type: d, data: o, options: u, plugins: R = [], fallbackContent: w, ...D3 } = t, f = Ae(null), r = Ae(), g2 = () => {
    f.current && (r.current = new ui(f.current, {
      type: d,
      data: S(o, s),
      options: u,
      plugins: R
    }), h2(e, r.current));
  }, m = () => {
    h2(e, null), r.current && (r.current.destroy(), r.current = null);
  };
  return Oe(() => {
    !n && r.current && u && M(r.current, u);
  }, [
    n,
    u
  ]), Oe(() => {
    !n && r.current && y(r.current.config.data, o.labels);
  }, [
    n,
    o.labels
  ]), Oe(() => {
    !n && r.current && o.datasets && A2(r.current.config.data, o.datasets, s);
  }, [
    n,
    o.datasets
  ]), Oe(() => {
    r.current && (n ? (m(), setTimeout(g2)) : r.current.update());
  }, [
    n,
    u,
    o.labels,
    o.datasets
  ]), Oe(() => (g2(), () => m()), []), qe.createElement("canvas", Object.assign({
    ref: f,
    role: "img",
    height: a,
    width: c
  }, D3), w);
}
var k = Se(T2);
function l(t, e) {
  return ui.register(e), Se((a, c) => qe.createElement(k, Object.assign({}, a, {
    ref: c,
    type: t
  })));
}
var H3 = l("line", ee2);
var J3 = l("bar", Qt);
var N2 = l("radar", se3);
var Q3 = l("doughnut", Ot);
var U2 = l("polarArea", ie);
var V3 = l("bubble", te2);
var W2 = l("pie", Pe3);
var X3 = l("scatter", ne2);

// charts.tsx
ui.register(...Xc, le2, Te2);
var ChartDollarMode = /* @__PURE__ */ function(ChartDollarMode2) {
  ChartDollarMode2["Nominal"] = "nominal";
  ChartDollarMode2["InflationAdjusted"] = "inflationAdjusted";
  return ChartDollarMode2;
}({});
var Charts = class extends ae {
  constructor(props) {
    super(props);
  }
  render() {
    const data = this.chartData(this.props.results, this.props.dollarMode);
    const ruinData = this.ruinProbabilityChartData(this.props.results);
    const ruinOptions = this.ruinProbabilityChartOptions();
    return /* @__PURE__ */ me("div", null, /* @__PURE__ */ me(k, {
      type: "line",
      data
    }), /* @__PURE__ */ me(k, {
      type: "line",
      data: ruinData,
      options: ruinOptions
    }));
  }
  chartData(simulationStats, dollarMode) {
    const stats = Object.values(simulationStats).map((s) => this.selectStats(s, dollarMode));
    return {
      labels: Object.keys(simulationStats),
      datasets: [
        {
          label: "P10",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgb(255, 99, 132)",
          data: stats.map((s) => s.p10)
        },
        {
          label: "P25",
          backgroundColor: "rgba(255, 159, 64, 0.5)",
          borderColor: "rgb(255, 159, 64)",
          data: stats.map((s) => s.p25)
        },
        {
          label: "Median",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderColor: "rgb(0, 0, 0)",
          data: stats.map((s) => s.median)
        },
        {
          label: "Mean",
          backgroundColor: "rgba(0, 200, 0, 0.5)",
          borderColor: "rgb(0, 160, 0)",
          data: stats.map((s) => s.mean)
        },
        {
          label: "P75",
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgb(54, 162, 235)",
          data: stats.map((s) => s.p75)
        },
        {
          label: "P90",
          backgroundColor: "rgba(153, 102, 255, 0.5)",
          borderColor: "rgb(153, 102, 255)",
          data: stats.map((s) => s.p90)
        }
      ]
    };
  }
  ruinProbabilityChartData(simulationStats) {
    return {
      labels: Object.keys(simulationStats),
      datasets: [
        {
          label: "Probability of ruin (%)",
          backgroundColor: "rgba(220, 0, 0, 0.5)",
          borderColor: "rgb(220, 0, 0)",
          data: Object.values(simulationStats).map((s) => s.ruinProbability * 100)
        }
      ]
    };
  }
  ruinProbabilityChartOptions() {
    return {
      scales: {
        y: {
          min: 0,
          max: 100
        }
      }
    };
  }
  selectStats(stat, dollarMode) {
    if (dollarMode === ChartDollarMode.InflationAdjusted) {
      return stat.inflationAdjusted;
    }
    return stat;
  }
};

// monteCarloApp.tsx
var SimulationRuntime = /* @__PURE__ */ function(SimulationRuntime2) {
  SimulationRuntime2["TypeScript"] = "typescript";
  SimulationRuntime2["RustWasm"] = "rustWasm";
  return SimulationRuntime2;
}(SimulationRuntime || {});
var App = class extends ae {
  constructor(props) {
    super(props);
    const defaultState = {
      stocksPercent: 50,
      bondsPercent: 30,
      cashPercent: 20,
      startingBalance: 1e6,
      drawdownRate: 4,
      simulationRounds: 1e3,
      simulationYears: 50,
      chartDollarMode: ChartDollarMode.Nominal,
      runtime: SimulationRuntime.TypeScript,
      onChange: void 0
    };
    this.state = this.stateFromUrl(defaultState);
    this.handleAllocationChange = this.handleAllocationChange.bind(this);
    this.handleChartDollarModeChange = this.handleChartDollarModeChange.bind(this);
    this.handleRuntimeChange = this.handleRuntimeChange.bind(this);
    this.handleWorkerMessage = this.handleWorkerMessage.bind(this);
    this.runSimulation = this.runSimulation.bind(this);
    this.updateUrlFromState = this.updateUrlFromState.bind(this);
  }
  simulationRequestId = 0;
  simulationWorker;
  render() {
    let charts;
    if (this.state.simulationResults) charts = /* @__PURE__ */ me(Charts, {
      results: this.state.simulationResults,
      dollarMode: this.state.chartDollarMode
    });
    return /* @__PURE__ */ me("div", null, /* @__PURE__ */ me(Allocation, {
      stocksPercent: this.state.stocksPercent,
      bondsPercent: this.state.bondsPercent,
      cashPercent: this.state.cashPercent,
      startingBalance: this.state.startingBalance,
      drawdownRate: this.state.drawdownRate,
      simulationRounds: this.state.simulationRounds,
      simulationYears: this.state.simulationYears,
      onChange: this.handleAllocationChange
    }), /* @__PURE__ */ me("label", {
      htmlFor: "chartDollarMode"
    }, "Show chart in "), /* @__PURE__ */ me("select", {
      id: "chartDollarMode",
      value: this.state.chartDollarMode,
      onChange: this.handleChartDollarModeChange
    }, /* @__PURE__ */ me("option", {
      value: ChartDollarMode.Nominal
    }, "Real Dollars"), /* @__PURE__ */ me("option", {
      value: ChartDollarMode.InflationAdjusted
    }, "Inflation-Adjusted (Today's Dollars)")), "\xA0", /* @__PURE__ */ me("label", {
      htmlFor: "runtime"
    }, "Runtime: "), /* @__PURE__ */ me("select", {
      id: "runtime",
      value: this.state.runtime,
      onChange: this.handleRuntimeChange
    }, /* @__PURE__ */ me("option", {
      value: SimulationRuntime.TypeScript
    }, "TypeScript"), /* @__PURE__ */ me("option", {
      value: SimulationRuntime.RustWasm
    }, "Rust (WASM)")), "\xA0", /* @__PURE__ */ me("button", {
      id: "run",
      onClick: this.runSimulation
    }, "Run Simulation"), this.state.simulationState, charts);
  }
  handleChartDollarModeChange(event) {
    this.setState({
      chartDollarMode: event.target.value
    }, this.updateUrlFromState);
  }
  handleRuntimeChange(event) {
    this.setState({
      runtime: event.target.value
    }, this.updateUrlFromState);
  }
  async runSimulation(_event) {
    const inputs = {
      savings: this.state.startingBalance,
      withdrawalRate: this.state.drawdownRate / 100,
      bonds: this.state.bondsPercent / 100,
      stocks: this.state.stocksPercent / 100,
      cash: this.state.cashPercent / 100,
      simulationRounds: this.state.simulationRounds,
      simulationYears: this.state.simulationYears,
      quantiles: 4
    };
    this.simulationWorker?.terminate();
    const requestId = ++this.simulationRequestId;
    const worker = new Worker(this.workerUrl(), {
      type: "module"
    });
    this.simulationWorker = worker;
    worker.onmessage = this.handleWorkerMessage;
    worker.onerror = (error) => {
      if (requestId !== this.simulationRequestId) {
        return;
      }
      this.simulationWorker?.terminate();
      this.simulationWorker = void 0;
      this.setState({
        simulationState: SimulationState.Stopped
      });
      console.error(error);
    };
    this.setState({
      simulationState: SimulationState.Initializing
    });
    const message = {
      type: "run",
      requestId,
      config: inputs
    };
    worker.postMessage(message);
  }
  workerUrl() {
    if (this.state.runtime === SimulationRuntime.RustWasm) {
      return "./out/rustMonteCarloWorker.js";
    }
    return "./out/monteCarlo.worker.js";
  }
  handleWorkerMessage(event) {
    const message = event.data;
    if (message.requestId !== this.simulationRequestId) {
      return;
    }
    switch (message.type) {
      case "state":
        this.setState({
          simulationState: message.state
        });
        break;
      case "result":
        this.simulationWorker?.terminate();
        this.simulationWorker = void 0;
        this.setState({
          simulationResults: message.results ?? void 0,
          simulationState: SimulationState.Stopped
        });
        break;
      case "error":
        this.simulationWorker?.terminate();
        this.simulationWorker = void 0;
        this.setState({
          simulationState: SimulationState.Stopped
        });
        console.error(message.message);
        break;
    }
  }
  setAllocationState(stocks, bonds, cash) {
    this.setState(function(state, _props) {
      if (stocks != null) {
        const balance = 100 - stocks;
        let bondBalance = balance - state.cashPercent;
        if (bondBalance < 0) bondBalance = 0;
        return {
          stocksPercent: stocks,
          bondsPercent: bondBalance,
          cashPercent: 100 - stocks - bondBalance
        };
      } else if (bonds != null) {
        let cashBalance = 100 - state.stocksPercent - bonds;
        if (cashBalance < 0) cashBalance = 0;
        return {
          stocksPercent: 100 - bonds - cashBalance,
          bondsPercent: bonds,
          cashPercent: cashBalance
        };
      } else if (cash != null) {
        let bondBalance = 100 - state.stocksPercent - cash;
        if (bondBalance < 0) bondBalance = 0;
        return {
          stocksPercent: 100 - bondBalance - cash,
          bondsPercent: bondBalance,
          cashPercent: cash
        };
      } else return {
        ...state
      };
    }, this.updateUrlFromState);
  }
  handleAllocationChange(event) {
    const value = parseFloat(event.target.value);
    const key = event.target.id;
    switch (key) {
      case "startingBalance":
        this.setState({
          [key]: value
        }, this.updateUrlFromState);
        break;
      case "drawdownRate":
        this.setState({
          [key]: value
        }, this.updateUrlFromState);
        break;
      case "stocksPercent":
        this.setAllocationState(value, void 0, void 0);
        break;
      case "bondsPercent":
        this.setAllocationState(void 0, value, void 0);
        break;
      case "cashPercent":
        this.setAllocationState(void 0, void 0, value);
        break;
      case "simulationRounds":
        this.setState({
          [key]: value
        }, this.updateUrlFromState);
        break;
      case "simulationYears":
        this.setState({
          [key]: value
        }, this.updateUrlFromState);
        break;
      default:
        break;
    }
  }
  stateFromUrl(defaultState) {
    const params = new URLSearchParams(window.location.search);
    const state = {
      ...defaultState
    };
    const numberKeys = [
      "startingBalance",
      "drawdownRate",
      "stocksPercent",
      "bondsPercent",
      "cashPercent",
      "simulationRounds",
      "simulationYears"
    ];
    for (const key of numberKeys) {
      const value = params.get(key);
      if (value === null) {
        continue;
      }
      const parsedValue = Number(value);
      if (Number.isFinite(parsedValue)) {
        state[key] = parsedValue;
      }
    }
    const chartDollarMode = params.get("chartDollarMode");
    if (chartDollarMode === ChartDollarMode.Nominal || chartDollarMode === ChartDollarMode.InflationAdjusted) {
      state.chartDollarMode = chartDollarMode;
    }
    const runtime = params.get("runtime");
    if (runtime === SimulationRuntime.TypeScript || runtime === SimulationRuntime.RustWasm) {
      state.runtime = runtime;
    }
    return state;
  }
  updateUrlFromState() {
    const url = new URL(window.location.href);
    url.searchParams.set("startingBalance", String(this.state.startingBalance));
    url.searchParams.set("drawdownRate", String(this.state.drawdownRate));
    url.searchParams.set("stocksPercent", String(this.state.stocksPercent));
    url.searchParams.set("bondsPercent", String(this.state.bondsPercent));
    url.searchParams.set("cashPercent", String(this.state.cashPercent));
    url.searchParams.set("simulationRounds", String(this.state.simulationRounds));
    url.searchParams.set("simulationYears", String(this.state.simulationYears));
    url.searchParams.set("chartDollarMode", this.state.chartDollarMode);
    url.searchParams.set("runtime", this.state.runtime);
    window.history.replaceState({}, "", url);
  }
};
If(/* @__PURE__ */ me(App, null), document.getElementById("root"));
/*! Bundled license information:

react/cjs/react.production.min.js:
  (** @license React v17.0.2
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

scheduler/cjs/scheduler.production.min.js:
  (** @license React v0.20.2
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react-dom/cjs/react-dom.production.min.js:
  (** @license React v17.0.2
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

chart.js/dist/chunks/helpers.segment.mjs:
chart.js/dist/chart.mjs:
  (*!
   * Chart.js v3.9.1
   * https://www.chartjs.org
   * (c) 2022 Chart.js Contributors
   * Released under the MIT License
   *)

chart.js/dist/chunks/helpers.segment.mjs:
  (*!
   * @kurkle/color v0.2.1
   * https://github.com/kurkle/color#readme
   * (c) 2022 Jukka Kurkela
   * Released under the MIT License
   *)
*/
