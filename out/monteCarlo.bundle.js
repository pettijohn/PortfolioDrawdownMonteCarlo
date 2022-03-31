// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const __object_assign$ = Object.assign;
var G = Object.create;
var h = Object.defineProperty;
var J = Object.getOwnPropertyDescriptor;
var K = Object.getOwnPropertyNames;
var Q = Object.getPrototypeOf, X = Object.prototype.hasOwnProperty;
var Z = (e)=>h(e, "__esModule", {
        value: !0
    })
;
((e)=>typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
        get: (t, r)=>(typeof require != "undefined" ? require : t)[r]
    }) : e
)(function(e) {
    if (typeof require != "undefined") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
});
var O = (e, t)=>()=>(t || e((t = {
            exports: {}
        }).exports, t), t.exports)
;
var ee = (e, t, r, u)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let o of K(t))!X.call(e, o) && (r || o !== "default") && h(e, o, {
        get: ()=>t[o]
        ,
        enumerable: !(u = J(t, o)) || u.enumerable
    });
    return e;
}, P = (e, t)=>ee(Z(h(e != null ? G(Q(e)) : {}, "default", !t && e && e.__esModule ? {
        get: ()=>e.default
        ,
        enumerable: !0
    } : {
        value: e,
        enumerable: !0
    })), e)
;
var z = O((n)=>{
    "use strict";
    var S1 = __object_assign$, y1 = 60103, I1 = 60106;
    n.Fragment = 60107;
    n.StrictMode = 60108;
    n.Profiler = 60114;
    var w = 60109, A1 = 60110, F1 = 60112;
    n.Suspense = 60113;
    var L1 = 60115, q1 = 60116;
    typeof Symbol == "function" && Symbol.for && (l1 = Symbol.for, y1 = l1("react.element"), I1 = l1("react.portal"), n.Fragment = l1("react.fragment"), n.StrictMode = l1("react.strict_mode"), n.Profiler = l1("react.profiler"), w = l1("react.provider"), A1 = l1("react.context"), F1 = l1("react.forward_ref"), n.Suspense = l1("react.suspense"), L1 = l1("react.memo"), q1 = l1("react.lazy"));
    var l1, j1 = typeof Symbol == "function" && Symbol.iterator;
    function te2(e) {
        return e === null || typeof e != "object" ? null : (e = j1 && e[j1] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function _(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)t += "&args[]=" + encodeURIComponent(arguments[r]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var D2 = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, M1 = {};
    function d(e, t, r) {
        this.props = e, this.context = t, this.refs = M1, this.updater = r || D2;
    }
    d.prototype.isReactComponent = {};
    d.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error(_(85));
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    d.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function N1() {}
    N1.prototype = d.prototype;
    function C1(e, t, r) {
        this.props = e, this.context = t, this.refs = M1, this.updater = r || D2;
    }
    var R1 = C1.prototype = new N1;
    R1.constructor = C1;
    S1(R1, d.prototype);
    R1.isPureReactComponent = !0;
    var $1 = {
        current: null
    }, U1 = Object.prototype.hasOwnProperty, T1 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function V2(e, t, r) {
        var u, o = {}, f = null, s = null;
        if (t != null) for(u in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (f = "" + t.key), t)U1.call(t, u) && !T1.hasOwnProperty(u) && (o[u] = t[u]);
        var c = arguments.length - 2;
        if (c === 1) o.children = r;
        else if (1 < c) {
            for(var i = Array(c), p = 0; p < c; p++)i[p] = arguments[p + 2];
            o.children = i;
        }
        if (e && e.defaultProps) for(u in c = e.defaultProps, c)o[u] === void 0 && (o[u] = c[u]);
        return {
            $$typeof: y1,
            type: e,
            key: f,
            ref: s,
            props: o,
            _owner: $1.current
        };
    }
    function re2(e, t) {
        return {
            $$typeof: y1,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function k1(e) {
        return typeof e == "object" && e !== null && e.$$typeof === y1;
    }
    function ne2(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(r) {
            return t[r];
        });
    }
    var x = /\/+/g;
    function E(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? ne2("" + e.key) : t.toString(36);
    }
    function m(e, t, r, u, o) {
        var f = typeof e;
        (f === "undefined" || f === "boolean") && (e = null);
        var s = !1;
        if (e === null) s = !0;
        else switch(f){
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch(e.$$typeof){
                    case y1:
                    case I1:
                        s = !0;
                }
        }
        if (s) return s = e, o = o(s), e = u === "" ? "." + E(s, 0) : u, Array.isArray(o) ? (r = "", e != null && (r = e.replace(x, "$&/") + "/"), m(o, t, r, "", function(p) {
            return p;
        })) : o != null && (k1(o) && (o = re2(o, r + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(x, "$&/") + "/") + e)), t.push(o)), 1;
        if (s = 0, u = u === "" ? "." : u + ":", Array.isArray(e)) for(var c = 0; c < e.length; c++){
            f = e[c];
            var i = u + E(f, c);
            s += m(f, t, r, i, o);
        }
        else if (i = te2(e), typeof i == "function") for(e = i.call(e), c = 0; !(f = e.next()).done;)f = f.value, i = u + E(f, c++), s += m(f, t, r, i, o);
        else if (f === "object") throw t = "" + e, Error(_(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
        return s;
    }
    function v1(e, t, r) {
        if (e == null) return e;
        var u = [], o = 0;
        return m(e, u, "", "", function(f) {
            return t.call(r, f, o++);
        }), u;
    }
    function oe1(e) {
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
    var B2 = {
        current: null
    };
    function a() {
        var e = B2.current;
        if (e === null) throw Error(_(321));
        return e;
    }
    var ue2 = {
        ReactCurrentDispatcher: B2,
        ReactCurrentBatchConfig: {
            transition: 0
        },
        ReactCurrentOwner: $1,
        IsSomeRendererActing: {
            current: !1
        },
        assign: S1
    };
    n.Children = {
        map: v1,
        forEach: function(e, t, r) {
            v1(e, function() {
                t.apply(this, arguments);
            }, r);
        },
        count: function(e) {
            var t = 0;
            return v1(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return v1(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!k1(e)) throw Error(_(143));
            return e;
        }
    };
    n.Component = d;
    n.PureComponent = C1;
    n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ue2;
    n.cloneElement = function(e, t, r) {
        if (e == null) throw Error(_(267, e));
        var u = S1({}, e.props), o = e.key, f = e.ref, s = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (f = t.ref, s = $1.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
            for(i in t)U1.call(t, i) && !T1.hasOwnProperty(i) && (u[i] = t[i] === void 0 && c !== void 0 ? c[i] : t[i]);
        }
        var i = arguments.length - 2;
        if (i === 1) u.children = r;
        else if (1 < i) {
            c = Array(i);
            for(var p = 0; p < i; p++)c[p] = arguments[p + 2];
            u.children = c;
        }
        return {
            $$typeof: y1,
            type: e.type,
            key: o,
            ref: f,
            props: u,
            _owner: s
        };
    };
    n.createContext = function(e, t) {
        return t === void 0 && (t = null), e = {
            $$typeof: A1,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, e.Provider = {
            $$typeof: w,
            _context: e
        }, e.Consumer = e;
    };
    n.createElement = V2;
    n.createFactory = function(e) {
        var t = V2.bind(null, e);
        return t.type = e, t;
    };
    n.createRef = function() {
        return {
            current: null
        };
    };
    n.forwardRef = function(e) {
        return {
            $$typeof: F1,
            render: e
        };
    };
    n.isValidElement = k1;
    n.lazy = function(e) {
        return {
            $$typeof: q1,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: oe1
        };
    };
    n.memo = function(e, t) {
        return {
            $$typeof: L1,
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
    n.useDebugValue = function() {};
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
var g = O((le, H1)=>{
    "use strict";
    H1.exports = z();
});
var W = P(g()), Y = P(g()), { Fragment: pe , StrictMode: ae , Profiler: ye , Suspense: de , Children: _e , Component: ve , PureComponent: me , __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: he , cloneElement: Ee , createContext: Se , createElement: Ce , createFactory: Re , createRef: $e , forwardRef: ke , isValidElement: ge , lazy: Oe , memo: Pe , useCallback: je , useContext: xe , useDebugValue: Ie , useEffect: we , useImperativeHandle: Ae , useLayoutEffect: Fe , useMemo: Le , useReducer: qe , useRef: De , useState: Me , version: Ne  } = Y, { default: ie , ...fe } = Y, Ue = (W.default ?? ie) ?? fe;
var B = Object.create;
var C = Object.defineProperty;
var G1 = Object.getOwnPropertyDescriptor;
var ee1 = Object.getOwnPropertyNames;
var ne = Object.getPrototypeOf, te = Object.prototype.hasOwnProperty;
var re = (e)=>C(e, "__esModule", {
        value: !0
    })
;
var V = (e, n)=>()=>(n || e((n = {
            exports: {}
        }).exports, n), n.exports)
;
var le = (e, n, t, l2)=>{
    if (n && typeof n == "object" || typeof n == "function") for (let o of ee1(n))!te.call(e, o) && (t || o !== "default") && C(e, o, {
        get: ()=>n[o]
        ,
        enumerable: !(l2 = G1(n, o)) || l2.enumerable
    });
    return e;
}, H = (e, n)=>le(re(C(e != null ? B(ne(e)) : {}, "default", !n && e && e.__esModule ? {
        get: ()=>e.default
        ,
        enumerable: !0
    } : {
        value: e,
        enumerable: !0
    })), e)
;
var Z1 = V((r)=>{
    "use strict";
    var y2, h2, T2, R2;
    typeof performance == "object" && typeof performance.now == "function" ? (J2 = performance, r.unstable_now = function() {
        return J2.now();
    }) : (L2 = Date, K1 = L2.now(), r.unstable_now = function() {
        return L2.now() - K1;
    });
    var J2, L2, K1;
    typeof window > "u" || typeof MessageChannel != "function" ? (_ = null, N2 = null, j2 = function() {
        if (_ !== null) try {
            var e = r.unstable_now();
            _(!0, e), _ = null;
        } catch (n) {
            throw setTimeout(j2, 0), n;
        }
    }, y2 = function(e) {
        _ !== null ? setTimeout(y2, 0, e) : (_ = e, setTimeout(j2, 0));
    }, h2 = function(e, n) {
        N2 = setTimeout(e, n);
    }, T2 = function() {
        clearTimeout(N2);
    }, r.unstable_shouldYield = function() {
        return !1;
    }, R2 = r.unstable_forceFrameRate = function() {}) : (Q2 = window.setTimeout, S2 = window.clearTimeout, typeof console < "u" && (X2 = window.cancelAnimationFrame, typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof X2 != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")), v2 = !1, w = null, g1 = -1, E = 5, F2 = 0, r.unstable_shouldYield = function() {
        return r.unstable_now() >= F2;
    }, R2 = function() {}, r.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < e ? Math.floor(1000 / e) : 5;
    }, q2 = new MessageChannel, P2 = q2.port2, q2.port1.onmessage = function() {
        if (w !== null) {
            var e = r.unstable_now();
            F2 = e + E;
            try {
                w(!0, e) ? P2.postMessage(null) : (v2 = !1, w = null);
            } catch (n) {
                throw P2.postMessage(null), n;
            }
        } else v2 = !1;
    }, y2 = function(e) {
        w = e, v2 || (v2 = !0, P2.postMessage(null));
    }, h2 = function(e, n) {
        g1 = Q2(function() {
            e(r.unstable_now());
        }, n);
    }, T2 = function() {
        S2(g1), g1 = -1;
    });
    var _, N2, j2, Q2, S2, X2, v2, w, g1, E, F2, q2, P2;
    function Y2(e, n) {
        var t = e.length;
        e.push(n);
        e: for(;;){
            var l3 = t - 1 >>> 1, o = e[l3];
            if (o !== void 0 && 0 < x(o, n)) e[l3] = n, e[t] = o, t = l3;
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
                e: for(var l4 = 0, o = e.length; l4 < o;){
                    var f = 2 * (l4 + 1) - 1, b = e[f], m = f + 1, d = e[m];
                    if (b !== void 0 && 0 > x(b, t)) d !== void 0 && 0 > x(d, b) ? (e[l4] = d, e[m] = t, l4 = m) : (e[l4] = b, e[f] = t, l4 = f);
                    else if (d !== void 0 && 0 > x(d, t)) e[l4] = d, e[m] = t, l4 = m;
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
    var s = [], c = [], oe2 = 1, u = null, i = 3, M2 = !1, p = !1, k2 = !1;
    function $2(e) {
        for(var n = a(c); n !== null;){
            if (n.callback === null) I2(c);
            else if (n.startTime <= e) I2(c), n.sortIndex = n.expirationTime, Y2(s, n);
            else break;
            n = a(c);
        }
    }
    function U2(e) {
        if (k2 = !1, $2(e), !p) if (a(s) !== null) p = !0, y2(W2);
        else {
            var n = a(c);
            n !== null && h2(U2, n.startTime - e);
        }
    }
    function W2(e, n) {
        p = !1, k2 && (k2 = !1, T2()), M2 = !0;
        var t = i;
        try {
            for($2(n), u = a(s); u !== null && (!(u.expirationTime > n) || e && !r.unstable_shouldYield());){
                var l5 = u.callback;
                if (typeof l5 == "function") {
                    u.callback = null, i = u.priorityLevel;
                    var o = l5(u.expirationTime <= n);
                    n = r.unstable_now(), typeof o == "function" ? u.callback = o : u === a(s) && I2(s), $2(n);
                } else I2(s);
                u = a(s);
            }
            if (u !== null) var f = !0;
            else {
                var b = a(c);
                b !== null && h2(U2, b.startTime - n), f = !1;
            }
            return f;
        } finally{
            u = null, i = t, M2 = !1;
        }
    }
    var ie2 = R2;
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
        p || M2 || (p = !0, y2(W2));
    };
    r.unstable_getCurrentPriorityLevel = function() {
        return i;
    };
    r.unstable_getFirstCallbackNode = function() {
        return a(s);
    };
    r.unstable_next = function(e) {
        switch(i){
            case 1:
            case 2:
            case 3:
                var n = 3;
                break;
            default:
                n = i;
        }
        var t = i;
        i = n;
        try {
            return e();
        } finally{
            i = t;
        }
    };
    r.unstable_pauseExecution = function() {};
    r.unstable_requestPaint = ie2;
    r.unstable_runWithPriority = function(e, n) {
        switch(e){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3;
        }
        var t = i;
        i = e;
        try {
            return n();
        } finally{
            i = t;
        }
    };
    r.unstable_scheduleCallback = function(e, n, t) {
        var l6 = r.unstable_now();
        switch(typeof t == "object" && t !== null ? (t = t.delay, t = typeof t == "number" && 0 < t ? l6 + t : l6) : t = l6, e){
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
                o = 10000;
                break;
            default:
                o = 5000;
        }
        return o = t + o, e = {
            id: oe2++,
            callback: n,
            priorityLevel: e,
            startTime: t,
            expirationTime: o,
            sortIndex: -1
        }, t > l6 ? (e.sortIndex = t, Y2(c, e), a(s) === null && e === a(c) && (k2 ? T2() : k2 = !0, h2(U2, t - l6))) : (e.sortIndex = o, Y2(s, e), p || M2 || (p = !0, y2(W2))), e;
    };
    r.unstable_wrapCallback = function(e) {
        var n = i;
        return function() {
            var t = i;
            i = n;
            try {
                return e.apply(this, arguments);
            } finally{
                i = t;
            }
        };
    };
});
var O1 = V((fe, A2)=>{
    "use strict";
    A2.exports = Z1();
});
var D = H(O1()), z1 = H(O1()), { unstable_now: be , unstable_shouldYield: pe1 , unstable_IdlePriority: de1 , unstable_ImmediatePriority: _e1 , unstable_LowPriority: ye1 , unstable_NormalPriority: me1 , unstable_Profiling: ve1 , unstable_UserBlockingPriority: we1 , unstable_cancelCallback: he1 , unstable_continueExecution: ke1 , unstable_getCurrentPriorityLevel: ge1 , unstable_getFirstCallbackNode: Pe1 , unstable_next: xe1 , unstable_pauseExecution: Te , unstable_requestPaint: Ie1 , unstable_runWithPriority: Me1 , unstable_scheduleCallback: Ce1 , unstable_wrapCallback: Le1  } = z1, { default: ue , ...ae1 } = z1, Ne1 = (D.default ?? ue) ?? ae1;
const __object_assign$1 = Object.assign;
var Ps = Object.create;
var Or = Object.defineProperty;
var Ts = Object.getOwnPropertyDescriptor;
var Ls = Object.getOwnPropertyNames;
var zs = Object.getPrototypeOf, Os = Object.prototype.hasOwnProperty;
var Ms = (e)=>Or(e, "__esModule", {
        value: !0
    })
;
((e)=>typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
        get: (n, t)=>(typeof require != "undefined" ? require : n)[t]
    }) : e
)(function(e) {
    if (typeof require != "undefined") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
});
var Ri = (e, n)=>()=>(n || e((n = {
            exports: {}
        }).exports, n), n.exports)
;
var Rs = (e, n, t, r)=>{
    if (n && typeof n == "object" || typeof n == "function") for (let l7 of Ls(n))!Os.call(e, l7) && (t || l7 !== "default") && Or(e, l7, {
        get: ()=>n[l7]
        ,
        enumerable: !(r = Ts(n, l7)) || r.enumerable
    });
    return e;
}, Di = (e, n)=>Rs(Ms(Or(e != null ? Ps(zs(e)) : {}, "default", !n && e && e.__esModule ? {
        get: ()=>e.default
        ,
        enumerable: !0
    } : {
        value: e,
        enumerable: !0
    })), e)
;
var Es = Ri((ie3)=>{
    "use strict";
    var yr1 = Ue, M3 = __object_assign$1, U3 = Ne1;
    function v3(e) {
        for(var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)n += "&args[]=" + encodeURIComponent(arguments[t]);
        return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    if (!yr1) throw Error(v3(227));
    var Ko1 = new Set, ot1 = {};
    function Je1(e, n) {
        kn1(e, n), kn1(e + "Capture", n);
    }
    function kn1(e, n) {
        for(ot1[e] = n, e = 0; e < n.length; e++)Ko1.add(n[e]);
    }
    var we3 = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ds1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ii1 = Object.prototype.hasOwnProperty, Fi1 = {}, ji1 = {};
    function Is1(e) {
        return Ii1.call(ji1, e) ? !0 : Ii1.call(Fi1, e) ? !1 : Ds1.test(e) ? ji1[e] = !0 : (Fi1[e] = !0, !1);
    }
    function Fs1(e, n, t, r) {
        if (t !== null && t.type === 0) return !1;
        switch(typeof n){
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1;
        }
    }
    function js1(e, n, t, r) {
        if (n === null || typeof n > "u" || Fs1(e, n, t, r)) return !0;
        if (r) return !1;
        if (t !== null) switch(t.type){
            case 3:
                return !n;
            case 4:
                return n === !1;
            case 5:
                return isNaN(n);
            case 6:
                return isNaN(n) || 1 > n;
        }
        return !1;
    }
    function X3(e, n, t, r, l8, i, o) {
        this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l8, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = i, this.removeEmptyString = o;
    }
    var H2 = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        H2[e] = new X3(e, 0, !1, e, null, !1, !1);
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
        H2[n] = new X3(n, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        H2[e] = new X3(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        H2[e] = new X3(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        H2[e] = new X3(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        H2[e] = new X3(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        H2[e] = new X3(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        H2[e] = new X3(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        H2[e] = new X3(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var Hl1 = /[\-:]([a-z])/g;
    function Wl1(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var n = e.replace(Hl1, Wl1);
        H2[n] = new X3(n, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var n = e.replace(Hl1, Wl1);
        H2[n] = new X3(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var n = e.replace(Hl1, Wl1);
        H2[n] = new X3(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        H2[e] = new X3(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    H2.xlinkHref = new X3("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        H2[e] = new X3(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Al1(e, n, t, r) {
        var l9 = H2.hasOwnProperty(n) ? H2[n] : null, i = l9 !== null ? l9.type === 0 : r ? !1 : !(!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N");
        i || (js1(n, t, l9, r) && (t = null), r || l9 === null ? Is1(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l9.mustUseProperty ? e[l9.propertyName] = t === null ? l9.type === 3 ? !1 : "" : t : (n = l9.attributeName, r = l9.attributeNamespace, t === null ? e.removeAttribute(n) : (l9 = l9.type, t = l9 === 3 || l9 === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
    }
    var qe2 = yr1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, An1 = 60103, We1 = 60106, ke3 = 60107, $l1 = 60108, Kn1 = 60114, Ql1 = 60109, Yl1 = 60110, gr1 = 60112, Gn1 = 60113, Kt = 60120, wr1 = 60115, Xl1 = 60116, Kl1 = 60121, Gl1 = 60128, Go1 = 60129, Zl1 = 60130, nl1 = 60131;
    typeof Symbol == "function" && Symbol.for && (F3 = Symbol.for, An1 = F3("react.element"), We1 = F3("react.portal"), ke3 = F3("react.fragment"), $l1 = F3("react.strict_mode"), Kn1 = F3("react.profiler"), Ql1 = F3("react.provider"), Yl1 = F3("react.context"), gr1 = F3("react.forward_ref"), Gn1 = F3("react.suspense"), Kt = F3("react.suspense_list"), wr1 = F3("react.memo"), Xl1 = F3("react.lazy"), Kl1 = F3("react.block"), F3("react.scope"), Gl1 = F3("react.opaque.id"), Go1 = F3("react.debug_trace_mode"), Zl1 = F3("react.offscreen"), nl1 = F3("react.legacy_hidden"));
    var F3, Ui1 = typeof Symbol == "function" && Symbol.iterator;
    function On1(e) {
        return e === null || typeof e != "object" ? null : (e = Ui1 && e[Ui1] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var Rr1;
    function $n1(e) {
        if (Rr1 === void 0) try {
            throw Error();
        } catch (t) {
            var n = t.stack.trim().match(/\n( *(at )?)/);
            Rr1 = n && n[1] || "";
        }
        return `
` + Rr1 + e;
    }
    var Dr1 = !1;
    function _t1(e, n) {
        if (!e || Dr1) return "";
        Dr1 = !0;
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
                for(var l10 = s.stack.split(`
`), i = r.stack.split(`
`), o = l10.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l10[o] !== i[u];)u--;
                for(; 1 <= o && 0 <= u; o--, u--)if (l10[o] !== i[u]) {
                    if (o !== 1 || u !== 1) do if (o--, u--, 0 > u || l10[o] !== i[u]) return `
` + l10[o].replace(" at new ", " at ");
                    while (1 <= o && 0 <= u)
                    break;
                }
            }
        } finally{
            Dr1 = !1, Error.prepareStackTrace = t;
        }
        return (e = e ? e.displayName || e.name : "") ? $n1(e) : "";
    }
    function Us1(e) {
        switch(e.tag){
            case 5:
                return $n1(e.type);
            case 16:
                return $n1("Lazy");
            case 13:
                return $n1("Suspense");
            case 19:
                return $n1("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = _t1(e.type, !1), e;
            case 11:
                return e = _t1(e.type.render, !1), e;
            case 22:
                return e = _t1(e.type._render, !1), e;
            case 1:
                return e = _t1(e.type, !0), e;
            default:
                return "";
        }
    }
    function dn1(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case ke3:
                return "Fragment";
            case We1:
                return "Portal";
            case Kn1:
                return "Profiler";
            case $l1:
                return "StrictMode";
            case Gn1:
                return "Suspense";
            case Kt:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case Yl1:
                return (e.displayName || "Context") + ".Consumer";
            case Ql1:
                return (e._context.displayName || "Context") + ".Provider";
            case gr1:
                var n = e.render;
                return n = n.displayName || n.name || "", e.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
            case wr1:
                return dn1(e.type);
            case Kl1:
                return dn1(e._render);
            case Xl1:
                n = e._payload, e = e._init;
                try {
                    return dn1(e(n));
                } catch  {}
        }
        return null;
    }
    function De2(e) {
        switch(typeof e){
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
    function Zo1(e) {
        var n = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
    }
    function Vs1(e) {
        var n = Zo1(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
        if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
            var l11 = t.get, i = t.set;
            return Object.defineProperty(e, n, {
                configurable: !0,
                get: function() {
                    return l11.call(this);
                },
                set: function(o) {
                    r = "" + o, i.call(this, o);
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
    function Nt1(e) {
        e._valueTracker || (e._valueTracker = Vs1(e));
    }
    function Jo1(e) {
        if (!e) return !1;
        var n = e._valueTracker;
        if (!n) return !0;
        var t = n.getValue(), r = "";
        return e && (r = Zo1(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
    }
    function Gt1(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function tl1(e, n) {
        var t = n.checked;
        return M3({}, n, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: t ?? e._wrapperState.initialChecked
        });
    }
    function Vi1(e, n) {
        var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
        t = De2(n.value != null ? n.value : t), e._wrapperState = {
            initialChecked: r,
            initialValue: t,
            controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
        };
    }
    function qo1(e, n) {
        n = n.checked, n != null && Al1(e, "checked", n, !1);
    }
    function rl1(e, n) {
        qo1(e, n);
        var t = De2(n.value), r = n.type;
        if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        n.hasOwnProperty("value") ? ll1(e, n.type, t) : n.hasOwnProperty("defaultValue") && ll1(e, n.type, De2(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
    }
    function Bi1(e, n, t) {
        if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
            var r = n.type;
            if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
            n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
        }
        t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
    }
    function ll1(e, n, t) {
        (n !== "number" || Gt1(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
    }
    function Bs1(e) {
        var n = "";
        return yr1.Children.forEach(e, function(t) {
            t != null && (n += t);
        }), n;
    }
    function il1(e, n) {
        return e = M3({
            children: void 0
        }, n), (n = Bs1(n.children)) && (e.children = n), e;
    }
    function pn1(e, n, t, r) {
        if (e = e.options, n) {
            n = {};
            for(var l12 = 0; l12 < t.length; l12++)n["$" + t[l12]] = !0;
            for(t = 0; t < e.length; t++)l12 = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l12 && (e[t].selected = l12), l12 && r && (e[t].defaultSelected = !0);
        } else {
            for(t = "" + De2(t), n = null, l12 = 0; l12 < e.length; l12++){
                if (e[l12].value === t) {
                    e[l12].selected = !0, r && (e[l12].defaultSelected = !0);
                    return;
                }
                n !== null || e[l12].disabled || (n = e[l12]);
            }
            n !== null && (n.selected = !0);
        }
    }
    function ol1(e, n) {
        if (n.dangerouslySetInnerHTML != null) throw Error(v3(91));
        return M3({}, n, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function Hi1(e, n) {
        var t = n.value;
        if (t == null) {
            if (t = n.children, n = n.defaultValue, t != null) {
                if (n != null) throw Error(v3(92));
                if (Array.isArray(t)) {
                    if (!(1 >= t.length)) throw Error(v3(93));
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
    function bo1(e, n) {
        var t = De2(n.value), r = De2(n.defaultValue);
        t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
    }
    function Wi1(e) {
        var n = e.textContent;
        n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
    }
    var ul1 = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
    };
    function eu(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function sl1(e, n) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? eu(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var Pt1, nu = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l13) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(n, t, r, l13);
            });
        } : e;
    }(function(e, n) {
        if (e.namespaceURI !== ul1.svg || "innerHTML" in e) e.innerHTML = n;
        else {
            for(Pt1 = Pt1 || document.createElement("div"), Pt1.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Pt1.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; n.firstChild;)e.appendChild(n.firstChild);
        }
    });
    function ut1(e, n) {
        if (n) {
            var t = e.firstChild;
            if (t && t === e.lastChild && t.nodeType === 3) {
                t.nodeValue = n;
                return;
            }
        }
        e.textContent = n;
    }
    var Zn1 = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }, Hs1 = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(Zn1).forEach(function(e) {
        Hs1.forEach(function(n) {
            n = n + e.charAt(0).toUpperCase() + e.substring(1), Zn1[n] = Zn1[e];
        });
    });
    function tu(e, n, t) {
        return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Zn1.hasOwnProperty(e) && Zn1[e] ? ("" + n).trim() : n + "px";
    }
    function ru(e, n) {
        e = e.style;
        for(var t in n)if (n.hasOwnProperty(t)) {
            var r = t.indexOf("--") === 0, l14 = tu(t, n[t], r);
            t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l14) : e[t] = l14;
        }
    }
    var Ws1 = M3({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function al1(e, n) {
        if (n) {
            if (Ws1[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(v3(137, e));
            if (n.dangerouslySetInnerHTML != null) {
                if (n.children != null) throw Error(v3(60));
                if (!(typeof n.dangerouslySetInnerHTML == "object" && "__html" in n.dangerouslySetInnerHTML)) throw Error(v3(61));
            }
            if (n.style != null && typeof n.style != "object") throw Error(v3(62));
        }
    }
    function fl1(e, n) {
        if (e.indexOf("-") === -1) return typeof n.is == "string";
        switch(e){
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0;
        }
    }
    function Jl1(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var cl1 = null, mn1 = null, hn1 = null;
    function Ai1(e) {
        if (e = Et1(e)) {
            if (typeof cl1 != "function") throw Error(v3(280));
            var n = e.stateNode;
            n && (n = _r1(n), cl1(e.stateNode, e.type, n));
        }
    }
    function lu(e) {
        mn1 ? hn1 ? hn1.push(e) : hn1 = [
            e
        ] : mn1 = e;
    }
    function iu() {
        if (mn1) {
            var e = mn1, n = hn1;
            if (hn1 = mn1 = null, Ai1(e), n) for(e = 0; e < n.length; e++)Ai1(n[e]);
        }
    }
    function ql1(e, n) {
        return e(n);
    }
    function ou(e, n, t, r, l15) {
        return e(n, t, r, l15);
    }
    function bl1() {}
    var uu = ql1, Ae2 = !1, Ir1 = !1;
    function ei1() {
        (mn1 !== null || hn1 !== null) && (bl1(), iu());
    }
    function As1(e, n, t) {
        if (Ir1) return e(n, t);
        Ir1 = !0;
        try {
            return uu(e, n, t);
        } finally{
            Ir1 = !1, ei1();
        }
    }
    function st1(e, n) {
        var t = e.stateNode;
        if (t === null) return null;
        var r = _r1(t);
        if (r === null) return null;
        t = r[n];
        e: switch(n){
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
                e = !1;
        }
        if (e) return null;
        if (t && typeof t != "function") throw Error(v3(231, n, typeof t));
        return t;
    }
    var dl1 = !1;
    if (we3) try {
        nn1 = {}, Object.defineProperty(nn1, "passive", {
            get: function() {
                dl1 = !0;
            }
        }), window.addEventListener("test", nn1, nn1), window.removeEventListener("test", nn1, nn1);
    } catch  {
        dl1 = !1;
    }
    var nn1;
    function $s1(e, n, t, r, l, i, o, u, s) {
        var d = Array.prototype.slice.call(arguments, 3);
        try {
            n.apply(t, d);
        } catch (y3) {
            this.onError(y3);
        }
    }
    var Jn1 = !1, Zt1 = null, Jt1 = !1, pl1 = null, Qs1 = {
        onError: function(e) {
            Jn1 = !0, Zt1 = e;
        }
    };
    function Ys1(e, n, t, r, l, i, o, u, s) {
        Jn1 = !1, Zt1 = null, $s1.apply(Qs1, arguments);
    }
    function Xs1(e, n, t, r, l, i, o, u, s) {
        if (Ys1.apply(this, arguments), Jn1) {
            if (Jn1) {
                var d = Zt1;
                Jn1 = !1, Zt1 = null;
            } else throw Error(v3(198));
            Jt1 || (Jt1 = !0, pl1 = d);
        }
    }
    function be2(e) {
        var n = e, t = e;
        if (e.alternate) for(; n.return;)n = n.return;
        else {
            e = n;
            do n = e, (n.flags & 1026) !== 0 && (t = n.return), e = n.return;
            while (e)
        }
        return n.tag === 3 ? t : null;
    }
    function su(e) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
        }
        return null;
    }
    function $i1(e) {
        if (be2(e) !== e) throw Error(v3(188));
    }
    function Ks1(e) {
        var n = e.alternate;
        if (!n) {
            if (n = be2(e), n === null) throw Error(v3(188));
            return n !== e ? null : e;
        }
        for(var t = e, r = n;;){
            var l16 = t.return;
            if (l16 === null) break;
            var i = l16.alternate;
            if (i === null) {
                if (r = l16.return, r !== null) {
                    t = r;
                    continue;
                }
                break;
            }
            if (l16.child === i.child) {
                for(i = l16.child; i;){
                    if (i === t) return $i1(l16), e;
                    if (i === r) return $i1(l16), n;
                    i = i.sibling;
                }
                throw Error(v3(188));
            }
            if (t.return !== r.return) t = l16, r = i;
            else {
                for(var o = !1, u = l16.child; u;){
                    if (u === t) {
                        o = !0, t = l16, r = i;
                        break;
                    }
                    if (u === r) {
                        o = !0, r = l16, t = i;
                        break;
                    }
                    u = u.sibling;
                }
                if (!o) {
                    for(u = i.child; u;){
                        if (u === t) {
                            o = !0, t = i, r = l16;
                            break;
                        }
                        if (u === r) {
                            o = !0, r = i, t = l16;
                            break;
                        }
                        u = u.sibling;
                    }
                    if (!o) throw Error(v3(189));
                }
            }
            if (t.alternate !== r) throw Error(v3(190));
        }
        if (t.tag !== 3) throw Error(v3(188));
        return t.stateNode.current === t ? e : n;
    }
    function au(e) {
        if (e = Ks1(e), !e) return null;
        for(var n = e;;){
            if (n.tag === 5 || n.tag === 6) return n;
            if (n.child) n.child.return = n, n = n.child;
            else {
                if (n === e) break;
                for(; !n.sibling;){
                    if (!n.return || n.return === e) return null;
                    n = n.return;
                }
                n.sibling.return = n.return, n = n.sibling;
            }
        }
        return null;
    }
    function Qi1(e, n) {
        for(var t = e.alternate; n !== null;){
            if (n === e || n === t) return !0;
            n = n.return;
        }
        return !1;
    }
    var fu, ni1, cu, du, ml1 = !1, se1 = [], Ne3 = null, Pe3 = null, Te2 = null, at1 = new Map, ft1 = new Map, Mn1 = [], Yi1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function hl1(e, n, t, r, l17) {
        return {
            blockedOn: e,
            domEventName: n,
            eventSystemFlags: t | 16,
            nativeEvent: l17,
            targetContainers: [
                r
            ]
        };
    }
    function Xi1(e, n) {
        switch(e){
            case "focusin":
            case "focusout":
                Ne3 = null;
                break;
            case "dragenter":
            case "dragleave":
                Pe3 = null;
                break;
            case "mouseover":
            case "mouseout":
                Te2 = null;
                break;
            case "pointerover":
            case "pointerout":
                at1.delete(n.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                ft1.delete(n.pointerId);
        }
    }
    function Rn1(e, n, t, r, l18, i) {
        return e === null || e.nativeEvent !== i ? (e = hl1(n, t, r, l18, i), n !== null && (n = Et1(n), n !== null && ni1(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l18 !== null && n.indexOf(l18) === -1 && n.push(l18), e);
    }
    function Gs1(e, n, t, r, l19) {
        switch(n){
            case "focusin":
                return Ne3 = Rn1(Ne3, e, n, t, r, l19), !0;
            case "dragenter":
                return Pe3 = Rn1(Pe3, e, n, t, r, l19), !0;
            case "mouseover":
                return Te2 = Rn1(Te2, e, n, t, r, l19), !0;
            case "pointerover":
                var i = l19.pointerId;
                return at1.set(i, Rn1(at1.get(i) || null, e, n, t, r, l19)), !0;
            case "gotpointercapture":
                return i = l19.pointerId, ft1.set(i, Rn1(ft1.get(i) || null, e, n, t, r, l19)), !0;
        }
        return !1;
    }
    function Zs1(e) {
        var n = $e2(e.target);
        if (n !== null) {
            var t = be2(n);
            if (t !== null) {
                if (n = t.tag, n === 13) {
                    if (n = su(t), n !== null) {
                        e.blockedOn = n, du(e.lanePriority, function() {
                            U3.unstable_runWithPriority(e.priority, function() {
                                cu(t);
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
    function Ut(e) {
        if (e.blockedOn !== null) return !1;
        for(var n = e.targetContainers; 0 < n.length;){
            var t = ii1(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
            if (t !== null) return n = Et1(t), n !== null && ni1(n), e.blockedOn = t, !1;
            n.shift();
        }
        return !0;
    }
    function Ki1(e, n, t) {
        Ut(e) && t.delete(n);
    }
    function Js1() {
        for(ml1 = !1; 0 < se1.length;){
            var e = se1[0];
            if (e.blockedOn !== null) {
                e = Et1(e.blockedOn), e !== null && fu(e);
                break;
            }
            for(var n = e.targetContainers; 0 < n.length;){
                var t = ii1(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
                if (t !== null) {
                    e.blockedOn = t;
                    break;
                }
                n.shift();
            }
            e.blockedOn === null && se1.shift();
        }
        Ne3 !== null && Ut(Ne3) && (Ne3 = null), Pe3 !== null && Ut(Pe3) && (Pe3 = null), Te2 !== null && Ut(Te2) && (Te2 = null), at1.forEach(Ki1), ft1.forEach(Ki1);
    }
    function Dn1(e, n) {
        e.blockedOn === n && (e.blockedOn = null, ml1 || (ml1 = !0, U3.unstable_scheduleCallback(U3.unstable_NormalPriority, Js1)));
    }
    function pu(e) {
        function n(l20) {
            return Dn1(l20, e);
        }
        if (0 < se1.length) {
            Dn1(se1[0], e);
            for(var t = 1; t < se1.length; t++){
                var r = se1[t];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(Ne3 !== null && Dn1(Ne3, e), Pe3 !== null && Dn1(Pe3, e), Te2 !== null && Dn1(Te2, e), at1.forEach(n), ft1.forEach(n), t = 0; t < Mn1.length; t++)r = Mn1[t], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < Mn1.length && (t = Mn1[0], t.blockedOn === null);)Zs1(t), t.blockedOn === null && Mn1.shift();
    }
    function Tt1(e, n) {
        var t = {};
        return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
    }
    var on1 = {
        animationend: Tt1("Animation", "AnimationEnd"),
        animationiteration: Tt1("Animation", "AnimationIteration"),
        animationstart: Tt1("Animation", "AnimationStart"),
        transitionend: Tt1("Transition", "TransitionEnd")
    }, Fr1 = {}, mu = {};
    we3 && (mu = document.createElement("div").style, "AnimationEvent" in window || (delete on1.animationend.animation, delete on1.animationiteration.animation, delete on1.animationstart.animation), "TransitionEvent" in window || delete on1.transitionend.transition);
    function Sr1(e) {
        if (Fr1[e]) return Fr1[e];
        if (!on1[e]) return e;
        var n = on1[e], t;
        for(t in n)if (n.hasOwnProperty(t) && t in mu) return Fr1[e] = n[t];
        return e;
    }
    var hu = Sr1("animationend"), vu = Sr1("animationiteration"), yu = Sr1("animationstart"), gu = Sr1("transitionend"), wu = new Map, ti1 = new Map, qs1 = [
        "abort",
        "abort",
        hu,
        "animationEnd",
        vu,
        "animationIteration",
        yu,
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
        gu,
        "transitionEnd",
        "waiting",
        "waiting"
    ];
    function ri1(e, n) {
        for(var t = 0; t < e.length; t += 2){
            var r = e[t], l21 = e[t + 1];
            l21 = "on" + (l21[0].toUpperCase() + l21.slice(1)), ti1.set(r, n), wu.set(r, l21), Je1(l21, [
                r
            ]);
        }
    }
    var bs1 = U3.unstable_now;
    bs1();
    var L3 = 8;
    function rn1(e) {
        if ((1 & e) !== 0) return L3 = 15, 1;
        if ((2 & e) !== 0) return L3 = 14, 2;
        if ((4 & e) !== 0) return L3 = 13, 4;
        var n = 24 & e;
        return n !== 0 ? (L3 = 12, n) : (e & 32) !== 0 ? (L3 = 11, 32) : (n = 192 & e, n !== 0 ? (L3 = 10, n) : (e & 256) !== 0 ? (L3 = 9, 256) : (n = 3584 & e, n !== 0 ? (L3 = 8, n) : (e & 4096) !== 0 ? (L3 = 7, 4096) : (n = 4186112 & e, n !== 0 ? (L3 = 6, n) : (n = 62914560 & e, n !== 0 ? (L3 = 5, n) : e & 67108864 ? (L3 = 4, 67108864) : (e & 134217728) !== 0 ? (L3 = 3, 134217728) : (n = 805306368 & e, n !== 0 ? (L3 = 2, n) : (1073741824 & e) !== 0 ? (L3 = 1, 1073741824) : (L3 = 8, e))))));
    }
    function ea1(e) {
        switch(e){
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
    function na1(e) {
        switch(e){
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
                throw Error(v3(358, e));
        }
    }
    function ct1(e, n) {
        var t = e.pendingLanes;
        if (t === 0) return L3 = 0;
        var r = 0, l22 = 0, i = e.expiredLanes, o = e.suspendedLanes, u = e.pingedLanes;
        if (i !== 0) r = i, l22 = L3 = 15;
        else if (i = t & 134217727, i !== 0) {
            var s = i & ~o;
            s !== 0 ? (r = rn1(s), l22 = L3) : (u &= i, u !== 0 && (r = rn1(u), l22 = L3));
        } else i = t & ~o, i !== 0 ? (r = rn1(i), l22 = L3) : u !== 0 && (r = rn1(u), l22 = L3);
        if (r === 0) return 0;
        if (r = 31 - Ie3(r), r = t & ((0 > r ? 0 : 1 << r) << 1) - 1, n !== 0 && n !== r && (n & o) === 0) {
            if (rn1(n), l22 <= L3) return n;
            L3 = l22;
        }
        if (n = e.entangledLanes, n !== 0) for(e = e.entanglements, n &= r; 0 < n;)t = 31 - Ie3(n), l22 = 1 << t, r |= e[t], n &= ~l22;
        return r;
    }
    function Su(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function qt1(e, n) {
        switch(e){
            case 15:
                return 1;
            case 14:
                return 2;
            case 12:
                return e = ln1(24 & ~n), e === 0 ? qt1(10, n) : e;
            case 10:
                return e = ln1(192 & ~n), e === 0 ? qt1(8, n) : e;
            case 8:
                return e = ln1(3584 & ~n), e === 0 && (e = ln1(4186112 & ~n), e === 0 && (e = 512)), e;
            case 2:
                return n = ln1(805306368 & ~n), n === 0 && (n = 268435456), n;
        }
        throw Error(v3(358, e));
    }
    function ln1(e) {
        return e & -e;
    }
    function jr1(e) {
        for(var n = [], t = 0; 31 > t; t++)n.push(e);
        return n;
    }
    function Er1(e, n, t) {
        e.pendingLanes |= n;
        var r = n - 1;
        e.suspendedLanes &= r, e.pingedLanes &= r, e = e.eventTimes, n = 31 - Ie3(n), e[n] = t;
    }
    var Ie3 = Math.clz32 ? Math.clz32 : la1, ta1 = Math.log, ra1 = Math.LN2;
    function la1(e) {
        return e === 0 ? 32 : 31 - (ta1(e) / ra1 | 0) | 0;
    }
    var ia1 = U3.unstable_UserBlockingPriority, oa1 = U3.unstable_runWithPriority, Vt1 = !0;
    function ua1(e, n, t, r) {
        Ae2 || bl1();
        var l23 = li1, i = Ae2;
        Ae2 = !0;
        try {
            ou(l23, e, n, t, r);
        } finally{
            (Ae2 = i) || ei1();
        }
    }
    function sa1(e, n, t, r) {
        oa1(ia1, li1.bind(null, e, n, t, r));
    }
    function li1(e, n, t, r) {
        if (Vt1) {
            var l24;
            if ((l24 = (n & 4) === 0) && 0 < se1.length && -1 < Yi1.indexOf(e)) e = hl1(null, e, n, t, r), se1.push(e);
            else {
                var i = ii1(e, n, t, r);
                if (i === null) l24 && Xi1(e, r);
                else {
                    if (l24) {
                        if (-1 < Yi1.indexOf(e)) {
                            e = hl1(i, e, n, t, r), se1.push(e);
                            return;
                        }
                        if (Gs1(i, e, n, t, r)) return;
                        Xi1(e, r);
                    }
                    Ru(e, n, r, null, t);
                }
            }
        }
    }
    function ii1(e, n, t, r) {
        var l25 = Jl1(r);
        if (l25 = $e2(l25), l25 !== null) {
            var i = be2(l25);
            if (i === null) l25 = null;
            else {
                var o = i.tag;
                if (o === 13) {
                    if (l25 = su(i), l25 !== null) return l25;
                    l25 = null;
                } else if (o === 3) {
                    if (i.stateNode.hydrate) return i.tag === 3 ? i.stateNode.containerInfo : null;
                    l25 = null;
                } else i !== l25 && (l25 = null);
            }
        }
        return Ru(e, n, r, l25, t), null;
    }
    var xe3 = null, oi1 = null, Bt1 = null;
    function Eu() {
        if (Bt1) return Bt1;
        var e, n = oi1, t = n.length, r, l26 = "value" in xe3 ? xe3.value : xe3.textContent, i = l26.length;
        for(e = 0; e < t && n[e] === l26[e]; e++);
        var o = t - e;
        for(r = 1; r <= o && n[t - r] === l26[i - r]; r++);
        return Bt1 = l26.slice(e, 1 < r ? 1 - r : void 0);
    }
    function Ht1(e) {
        var n = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Lt() {
        return !0;
    }
    function Gi1() {
        return !1;
    }
    function b(e) {
        function n(t, r, l27, i, o) {
            this._reactName = t, this._targetInst = l27, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
            for(var u in e)e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(i) : i[u]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Lt : Gi1, this.isPropagationStopped = Gi1, this;
        }
        return M3(n.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Lt);
            },
            stopPropagation: function() {
                var t = this.nativeEvent;
                t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Lt);
            },
            persist: function() {},
            isPersistent: Lt
        }), n;
    }
    var Nn1 = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, ui = b(Nn1), St1 = M3({}, Nn1, {
        view: 0,
        detail: 0
    }), aa1 = b(St1), Ur1, Vr1, In1, kr1 = M3({}, St1, {
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
        getModifierState: si1,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== In1 && (In1 && e.type === "mousemove" ? (Ur1 = e.screenX - In1.screenX, Vr1 = e.screenY - In1.screenY) : Vr1 = Ur1 = 0, In1 = e), Ur1);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Vr1;
        }
    }), Zi1 = b(kr1), fa1 = M3({}, kr1, {
        dataTransfer: 0
    }), ca1 = b(fa1), da1 = M3({}, St1, {
        relatedTarget: 0
    }), Br1 = b(da1), pa1 = M3({}, Nn1, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), ma1 = b(pa1), ha1 = M3({}, Nn1, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), va1 = b(ha1), ya1 = M3({}, Nn1, {
        data: 0
    }), Ji1 = b(ya1), ga1 = {
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
    }, wa1 = {
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
    }, Sa1 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Ea1(e) {
        var n = this.nativeEvent;
        return n.getModifierState ? n.getModifierState(e) : (e = Sa1[e]) ? !!n[e] : !1;
    }
    function si1() {
        return Ea1;
    }
    var ka1 = M3({}, St1, {
        key: function(e) {
            if (e.key) {
                var n = ga1[e.key] || e.key;
                if (n !== "Unidentified") return n;
            }
            return e.type === "keypress" ? (e = Ht1(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wa1[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: si1,
        charCode: function(e) {
            return e.type === "keypress" ? Ht1(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? Ht1(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), xa1 = b(ka1), Ca1 = M3({}, kr1, {
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
    }), qi1 = b(Ca1), _a1 = M3({}, St1, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: si1
    }), Na1 = b(_a1), Pa1 = M3({}, Nn1, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Ta1 = b(Pa1), La1 = M3({}, kr1, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), za1 = b(La1), Oa1 = [
        9,
        13,
        27,
        32
    ], ai1 = we3 && "CompositionEvent" in window, qn1 = null;
    we3 && "documentMode" in document && (qn1 = document.documentMode);
    var Ma1 = we3 && "TextEvent" in window && !qn1, ku = we3 && (!ai1 || qn1 && 8 < qn1 && 11 >= qn1), bi1 = String.fromCharCode(32), eo1 = !1;
    function xu(e, n) {
        switch(e){
            case "keyup":
                return Oa1.indexOf(n.keyCode) !== -1;
            case "keydown":
                return n.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1;
        }
    }
    function Cu(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var un1 = !1;
    function Ra1(e, n) {
        switch(e){
            case "compositionend":
                return Cu(n);
            case "keypress":
                return n.which !== 32 ? null : (eo1 = !0, bi1);
            case "textInput":
                return e = n.data, e === bi1 && eo1 ? null : e;
            default:
                return null;
        }
    }
    function Da1(e, n) {
        if (un1) return e === "compositionend" || !ai1 && xu(e, n) ? (e = Eu(), Bt1 = oi1 = xe3 = null, un1 = !1, e) : null;
        switch(e){
            case "paste":
                return null;
            case "keypress":
                if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                    if (n.char && 1 < n.char.length) return n.char;
                    if (n.which) return String.fromCharCode(n.which);
                }
                return null;
            case "compositionend":
                return ku && n.locale !== "ko" ? null : n.data;
            default:
                return null;
        }
    }
    var Ia1 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function no1(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n === "input" ? !!Ia1[e.type] : n === "textarea";
    }
    function _u(e, n, t, r) {
        lu(r), n = bt1(n, "onChange"), 0 < n.length && (t = new ui("onChange", "change", null, t, r), e.push({
            event: t,
            listeners: n
        }));
    }
    var bn1 = null, dt1 = null;
    function Fa1(e) {
        zu(e, 0);
    }
    function xr1(e) {
        var n = an1(e);
        if (Jo1(n)) return e;
    }
    function ja1(e, n) {
        if (e === "change") return n;
    }
    var Nu = !1;
    we3 && (we3 ? (Ot1 = "oninput" in document, Ot1 || (Hr1 = document.createElement("div"), Hr1.setAttribute("oninput", "return;"), Ot1 = typeof Hr1.oninput == "function"), zt1 = Ot1) : zt1 = !1, Nu = zt1 && (!document.documentMode || 9 < document.documentMode));
    var zt1, Ot1, Hr1;
    function to1() {
        bn1 && (bn1.detachEvent("onpropertychange", Pu), dt1 = bn1 = null);
    }
    function Pu(e) {
        if (e.propertyName === "value" && xr1(dt1)) {
            var n = [];
            if (_u(n, dt1, e, Jl1(e)), e = Fa1, Ae2) e(n);
            else {
                Ae2 = !0;
                try {
                    ql1(e, n);
                } finally{
                    Ae2 = !1, ei1();
                }
            }
        }
    }
    function Ua1(e, n, t) {
        e === "focusin" ? (to1(), bn1 = n, dt1 = t, bn1.attachEvent("onpropertychange", Pu)) : e === "focusout" && to1();
    }
    function Va1(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return xr1(dt1);
    }
    function Ba1(e, n) {
        if (e === "click") return xr1(n);
    }
    function Ha1(e, n) {
        if (e === "input" || e === "change") return xr1(n);
    }
    function Wa1(e, n) {
        return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
    }
    var ee3 = typeof Object.is == "function" ? Object.is : Wa1, Aa1 = Object.prototype.hasOwnProperty;
    function pt1(e, n) {
        if (ee3(e, n)) return !0;
        if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
        var t = Object.keys(e), r = Object.keys(n);
        if (t.length !== r.length) return !1;
        for(r = 0; r < t.length; r++)if (!Aa1.call(n, t[r]) || !ee3(e[t[r]], n[t[r]])) return !1;
        return !0;
    }
    function ro1(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function lo1(e, n) {
        var t = ro1(e);
        e = 0;
        for(var r; t;){
            if (t.nodeType === 3) {
                if (r = e + t.textContent.length, e <= n && r >= n) return {
                    node: t,
                    offset: n - e
                };
                e = r;
            }
            e: {
                for(; t;){
                    if (t.nextSibling) {
                        t = t.nextSibling;
                        break e;
                    }
                    t = t.parentNode;
                }
                t = void 0;
            }
            t = ro1(t);
        }
    }
    function Tu(e, n) {
        return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Tu(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
    }
    function io1() {
        for(var e = window, n = Gt1(); n instanceof e.HTMLIFrameElement;){
            try {
                var t = typeof n.contentWindow.location.href == "string";
            } catch  {
                t = !1;
            }
            if (t) e = n.contentWindow;
            else break;
            n = Gt1(e.document);
        }
        return n;
    }
    function vl1(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
    }
    var $a1 = we3 && "documentMode" in document && 11 >= document.documentMode, sn1 = null, yl1 = null, et1 = null, gl1 = !1;
    function oo1(e, n, t) {
        var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
        gl1 || sn1 == null || sn1 !== Gt1(r) || (r = sn1, "selectionStart" in r && vl1(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), et1 && pt1(et1, r) || (et1 = r, r = bt1(yl1, "onSelect"), 0 < r.length && (n = new ui("onSelect", "select", null, n, t), e.push({
            event: n,
            listeners: r
        }), n.target = sn1)));
    }
    ri1("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
    ri1("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
    ri1(qs1, 2);
    for(Wr1 = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Mt1 = 0; Mt1 < Wr1.length; Mt1++)ti1.set(Wr1[Mt1], 0);
    var Wr1, Mt1;
    kn1("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    kn1("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    kn1("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    kn1("onPointerLeave", [
        "pointerout",
        "pointerover"
    ]);
    Je1("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    Je1("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    Je1("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]);
    Je1("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    Je1("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    Je1("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Qn1 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Lu = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qn1));
    function uo1(e, n, t) {
        var r = e.type || "unknown-event";
        e.currentTarget = t, Xs1(r, n, void 0, e), e.currentTarget = null;
    }
    function zu(e, n) {
        n = (n & 4) !== 0;
        for(var t = 0; t < e.length; t++){
            var r = e[t], l28 = r.event;
            r = r.listeners;
            e: {
                var i = void 0;
                if (n) for(var o = r.length - 1; 0 <= o; o--){
                    var u = r[o], s = u.instance, d = u.currentTarget;
                    if (u = u.listener, s !== i && l28.isPropagationStopped()) break e;
                    uo1(l28, u, d), i = s;
                }
                else for(o = 0; o < r.length; o++){
                    if (u = r[o], s = u.instance, d = u.currentTarget, u = u.listener, s !== i && l28.isPropagationStopped()) break e;
                    uo1(l28, u, d), i = s;
                }
            }
        }
        if (Jt1) throw e = pl1, Jt1 = !1, pl1 = null, e;
    }
    function z2(e, n) {
        var t = Iu(n), r = e + "__bubble";
        t.has(r) || (Mu(n, e, 2, !1), t.add(r));
    }
    var so1 = "_reactListening" + Math.random().toString(36).slice(2);
    function Ou(e) {
        e[so1] || (e[so1] = !0, Ko1.forEach(function(n) {
            Lu.has(n) || ao1(n, !1, e, null), ao1(n, !0, e, null);
        }));
    }
    function ao1(e, n, t, r) {
        var l29 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, i = t;
        if (e === "selectionchange" && t.nodeType !== 9 && (i = t.ownerDocument), r !== null && !n && Lu.has(e)) {
            if (e !== "scroll") return;
            l29 |= 2, i = r;
        }
        var o = Iu(i), u = e + "__" + (n ? "capture" : "bubble");
        o.has(u) || (n && (l29 |= 4), Mu(i, e, l29, n), o.add(u));
    }
    function Mu(e, n, t, r) {
        var l30 = ti1.get(n);
        switch(l30 === void 0 ? 2 : l30){
            case 0:
                l30 = ua1;
                break;
            case 1:
                l30 = sa1;
                break;
            default:
                l30 = li1;
        }
        t = l30.bind(null, n, t, e), l30 = void 0, !dl1 || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l30 = !0), r ? l30 !== void 0 ? e.addEventListener(n, t, {
            capture: !0,
            passive: l30
        }) : e.addEventListener(n, t, !0) : l30 !== void 0 ? e.addEventListener(n, t, {
            passive: l30
        }) : e.addEventListener(n, t, !1);
    }
    function Ru(e, n, t, r, l31) {
        var i = r;
        if ((n & 1) === 0 && (n & 2) === 0 && r !== null) e: for(;;){
            if (r === null) return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l31 || u.nodeType === 8 && u.parentNode === l31) break;
                if (o === 4) for(o = r.return; o !== null;){
                    var s = o.tag;
                    if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l31 || s.nodeType === 8 && s.parentNode === l31)) return;
                    o = o.return;
                }
                for(; u !== null;){
                    if (o = $e2(u), o === null) return;
                    if (s = o.tag, s === 5 || s === 6) {
                        r = i = o;
                        continue e;
                    }
                    u = u.parentNode;
                }
            }
            r = r.return;
        }
        As1(function() {
            var d = i, y4 = Jl1(t), C2 = [];
            e: {
                var h3 = wu.get(e);
                if (h3 !== void 0) {
                    var S3 = ui, k3 = e;
                    switch(e){
                        case "keypress":
                            if (Ht1(t) === 0) break e;
                        case "keydown":
                        case "keyup":
                            S3 = xa1;
                            break;
                        case "focusin":
                            k3 = "focus", S3 = Br1;
                            break;
                        case "focusout":
                            k3 = "blur", S3 = Br1;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            S3 = Br1;
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
                            S3 = Zi1;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            S3 = ca1;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            S3 = Na1;
                            break;
                        case hu:
                        case vu:
                        case yu:
                            S3 = ma1;
                            break;
                        case gu:
                            S3 = Ta1;
                            break;
                        case "scroll":
                            S3 = aa1;
                            break;
                        case "wheel":
                            S3 = za1;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            S3 = va1;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            S3 = qi1;
                    }
                    var E = (n & 4) !== 0, c = !E && e === "scroll", a = E ? h3 !== null ? h3 + "Capture" : null : h3;
                    E = [];
                    for(var f = d, p; f !== null;){
                        p = f;
                        var m = p.stateNode;
                        if (p.tag === 5 && m !== null && (p = m, a !== null && (m = st1(f, a), m != null && E.push(mt1(f, m, p)))), c) break;
                        f = f.return;
                    }
                    0 < E.length && (h3 = new S3(h3, k3, null, t, y4), C2.push({
                        event: h3,
                        listeners: E
                    }));
                }
            }
            if ((n & 7) === 0) {
                e: {
                    if (h3 = e === "mouseover" || e === "pointerover", S3 = e === "mouseout" || e === "pointerout", h3 && (n & 16) === 0 && (k3 = t.relatedTarget || t.fromElement) && ($e2(k3) || k3[Pn1])) break e;
                    if ((S3 || h3) && (h3 = y4.window === y4 ? y4 : (h3 = y4.ownerDocument) ? h3.defaultView || h3.parentWindow : window, S3 ? (k3 = t.relatedTarget || t.toElement, S3 = d, k3 = k3 ? $e2(k3) : null, k3 !== null && (c = be2(k3), k3 !== c || k3.tag !== 5 && k3.tag !== 6) && (k3 = null)) : (S3 = null, k3 = d), S3 !== k3)) {
                        if (E = Zi1, m = "onMouseLeave", a = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (E = qi1, m = "onPointerLeave", a = "onPointerEnter", f = "pointer"), c = S3 == null ? h3 : an1(S3), p = k3 == null ? h3 : an1(k3), h3 = new E(m, f + "leave", S3, t, y4), h3.target = c, h3.relatedTarget = p, m = null, $e2(y4) === d && (E = new E(a, f + "enter", k3, t, y4), E.target = p, E.relatedTarget = c, m = E), c = m, S3 && k3) n: {
                            for(E = S3, a = k3, f = 0, p = E; p; p = tn1(p))f++;
                            for(p = 0, m = a; m; m = tn1(m))p++;
                            for(; 0 < f - p;)E = tn1(E), f--;
                            for(; 0 < p - f;)a = tn1(a), p--;
                            for(; f--;){
                                if (E === a || a !== null && E === a.alternate) break n;
                                E = tn1(E), a = tn1(a);
                            }
                            E = null;
                        }
                        else E = null;
                        S3 !== null && fo1(C2, h3, S3, E, !1), k3 !== null && c !== null && fo1(C2, c, k3, E, !0);
                    }
                }
                e: {
                    if (h3 = d ? an1(d) : window, S3 = h3.nodeName && h3.nodeName.toLowerCase(), S3 === "select" || S3 === "input" && h3.type === "file") var _ = ja1;
                    else if (no1(h3)) if (Nu) _ = Ha1;
                    else {
                        _ = Va1;
                        var w = Ua1;
                    }
                    else (S3 = h3.nodeName) && S3.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (_ = Ba1);
                    if (_ && (_ = _(e, d))) {
                        _u(C2, _, t, y4);
                        break e;
                    }
                    w && w(e, h3, d), e === "focusout" && (w = h3._wrapperState) && w.controlled && h3.type === "number" && ll1(h3, "number", h3.value);
                }
                switch(w = d ? an1(d) : window, e){
                    case "focusin":
                        (no1(w) || w.contentEditable === "true") && (sn1 = w, yl1 = d, et1 = null);
                        break;
                    case "focusout":
                        et1 = yl1 = sn1 = null;
                        break;
                    case "mousedown":
                        gl1 = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        gl1 = !1, oo1(C2, t, y4);
                        break;
                    case "selectionchange":
                        if ($a1) break;
                    case "keydown":
                    case "keyup":
                        oo1(C2, t, y4);
                }
                var N3;
                if (ai1) e: {
                    switch(e){
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
                else un1 ? xu(e, t) && (T3 = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (T3 = "onCompositionStart");
                T3 && (ku && t.locale !== "ko" && (un1 || T3 !== "onCompositionStart" ? T3 === "onCompositionEnd" && un1 && (N3 = Eu()) : (xe3 = y4, oi1 = "value" in xe3 ? xe3.value : xe3.textContent, un1 = !0)), w = bt1(d, T3), 0 < w.length && (T3 = new Ji1(T3, e, null, t, y4), C2.push({
                    event: T3,
                    listeners: w
                }), N3 ? T3.data = N3 : (N3 = Cu(t), N3 !== null && (T3.data = N3)))), (N3 = Ma1 ? Ra1(e, t) : Da1(e, t)) && (d = bt1(d, "onBeforeInput"), 0 < d.length && (y4 = new Ji1("onBeforeInput", "beforeinput", null, t, y4), C2.push({
                    event: y4,
                    listeners: d
                }), y4.data = N3));
            }
            zu(C2, n);
        });
    }
    function mt1(e, n, t) {
        return {
            instance: e,
            listener: n,
            currentTarget: t
        };
    }
    function bt1(e, n) {
        for(var t = n + "Capture", r = []; e !== null;){
            var l32 = e, i = l32.stateNode;
            l32.tag === 5 && i !== null && (l32 = i, i = st1(e, t), i != null && r.unshift(mt1(e, i, l32)), i = st1(e, n), i != null && r.push(mt1(e, i, l32))), e = e.return;
        }
        return r;
    }
    function tn1(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5)
        return e || null;
    }
    function fo1(e, n, t, r, l33) {
        for(var i = n._reactName, o = []; t !== null && t !== r;){
            var u = t, s = u.alternate, d = u.stateNode;
            if (s !== null && s === r) break;
            u.tag === 5 && d !== null && (u = d, l33 ? (s = st1(t, i), s != null && o.unshift(mt1(t, s, u))) : l33 || (s = st1(t, i), s != null && o.push(mt1(t, s, u)))), t = t.return;
        }
        o.length !== 0 && e.push({
            event: n,
            listeners: o
        });
    }
    function er1() {}
    var Ar1 = null, $r1 = null;
    function Du(e, n) {
        switch(e){
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!n.autoFocus;
        }
        return !1;
    }
    function wl1(e, n) {
        return e === "textarea" || e === "option" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
    }
    var co1 = typeof setTimeout == "function" ? setTimeout : void 0, Qa1 = typeof clearTimeout == "function" ? clearTimeout : void 0;
    function fi1(e) {
        e.nodeType === 1 ? e.textContent = "" : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = ""));
    }
    function vn1(e) {
        for(; e != null; e = e.nextSibling){
            var n = e.nodeType;
            if (n === 1 || n === 3) break;
        }
        return e;
    }
    function po1(e) {
        e = e.previousSibling;
        for(var n = 0; e;){
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
    var Qr1 = 0;
    function Ya1(e) {
        return {
            $$typeof: Gl1,
            toString: e,
            valueOf: e
        };
    }
    var Cr1 = Math.random().toString(36).slice(2), Ce2 = "__reactFiber$" + Cr1, nr1 = "__reactProps$" + Cr1, Pn1 = "__reactContainer$" + Cr1, mo1 = "__reactEvents$" + Cr1;
    function $e2(e) {
        var n = e[Ce2];
        if (n) return n;
        for(var t = e.parentNode; t;){
            if (n = t[Pn1] || t[Ce2]) {
                if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for(e = po1(e); e !== null;){
                    if (t = e[Ce2]) return t;
                    e = po1(e);
                }
                return n;
            }
            e = t, t = e.parentNode;
        }
        return null;
    }
    function Et1(e) {
        return e = e[Ce2] || e[Pn1], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function an1(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(v3(33));
    }
    function _r1(e) {
        return e[nr1] || null;
    }
    function Iu(e) {
        var n = e[mo1];
        return n === void 0 && (n = e[mo1] = new Set), n;
    }
    var Sl1 = [], fn1 = -1;
    function Ve1(e) {
        return {
            current: e
        };
    }
    function O3(e) {
        0 > fn1 || (e.current = Sl1[fn1], Sl1[fn1] = null, fn1--);
    }
    function D3(e, n) {
        fn1++, Sl1[fn1] = e.current, e.current = n;
    }
    var Fe2 = {}, Q3 = Ve1(Fe2), Z3 = Ve1(!1), Ke1 = Fe2;
    function xn1(e, n) {
        var t = e.type.contextTypes;
        if (!t) return Fe2;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
        var l34 = {}, i;
        for(i in t)l34[i] = n[i];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l34), l34;
    }
    function J3(e) {
        return e = e.childContextTypes, e != null;
    }
    function tr1() {
        O3(Z3), O3(Q3);
    }
    function ho1(e, n, t) {
        if (Q3.current !== Fe2) throw Error(v3(168));
        D3(Q3, n), D3(Z3, t);
    }
    function Fu(e, n, t) {
        var r = e.stateNode;
        if (e = n.childContextTypes, typeof r.getChildContext != "function") return t;
        r = r.getChildContext();
        for(var l35 in r)if (!(l35 in e)) throw Error(v3(108, dn1(n) || "Unknown", l35));
        return M3({}, t, r);
    }
    function Wt1(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fe2, Ke1 = Q3.current, D3(Q3, e), D3(Z3, Z3.current), !0;
    }
    function vo1(e, n, t) {
        var r = e.stateNode;
        if (!r) throw Error(v3(169));
        t ? (e = Fu(e, n, Ke1), r.__reactInternalMemoizedMergedChildContext = e, O3(Z3), O3(Q3), D3(Q3, e)) : O3(Z3), D3(Z3, t);
    }
    var ci1 = null, Xe1 = null, Xa1 = U3.unstable_runWithPriority, di = U3.unstable_scheduleCallback, El1 = U3.unstable_cancelCallback, Ka1 = U3.unstable_shouldYield, yo1 = U3.unstable_requestPaint, kl1 = U3.unstable_now, Ga1 = U3.unstable_getCurrentPriorityLevel, Nr1 = U3.unstable_ImmediatePriority, ju = U3.unstable_UserBlockingPriority, Uu = U3.unstable_NormalPriority, Vu = U3.unstable_LowPriority, Bu = U3.unstable_IdlePriority, Yr1 = {}, Za1 = yo1 !== void 0 ? yo1 : function() {}, me3 = null, At1 = null, Xr1 = !1, go1 = kl1(), A3 = 10000 > go1 ? kl1 : function() {
        return kl1() - go1;
    };
    function Cn1() {
        switch(Ga1()){
            case Nr1:
                return 99;
            case ju:
                return 98;
            case Uu:
                return 97;
            case Vu:
                return 96;
            case Bu:
                return 95;
            default:
                throw Error(v3(332));
        }
    }
    function Hu(e) {
        switch(e){
            case 99:
                return Nr1;
            case 98:
                return ju;
            case 97:
                return Uu;
            case 96:
                return Vu;
            case 95:
                return Bu;
            default:
                throw Error(v3(332));
        }
    }
    function Ge1(e, n) {
        return e = Hu(e), Xa1(e, n);
    }
    function ht1(e, n, t) {
        return e = Hu(e), di(e, n, t);
    }
    function pe3() {
        if (At1 !== null) {
            var e = At1;
            At1 = null, El1(e);
        }
        Wu();
    }
    function Wu() {
        if (!Xr1 && me3 !== null) {
            Xr1 = !0;
            var e = 0;
            try {
                var n = me3;
                Ge1(99, function() {
                    for(; e < n.length; e++){
                        var t = n[e];
                        do t = t(!0);
                        while (t !== null)
                    }
                }), me3 = null;
            } catch (t) {
                throw me3 !== null && (me3 = me3.slice(e + 1)), di(Nr1, pe3), t;
            } finally{
                Xr1 = !1;
            }
        }
    }
    var Ja1 = qe2.ReactCurrentBatchConfig;
    function oe3(e, n) {
        if (e && e.defaultProps) {
            n = M3({}, n), e = e.defaultProps;
            for(var t in e)n[t] === void 0 && (n[t] = e[t]);
            return n;
        }
        return n;
    }
    var rr1 = Ve1(null), lr1 = null, cn1 = null, ir1 = null;
    function pi1() {
        ir1 = cn1 = lr1 = null;
    }
    function mi1(e) {
        var n = rr1.current;
        O3(rr1), e.type._context._currentValue = n;
    }
    function Au(e, n) {
        for(; e !== null;){
            var t = e.alternate;
            if ((e.childLanes & n) === n) {
                if (t === null || (t.childLanes & n) === n) break;
                t.childLanes |= n;
            } else e.childLanes |= n, t !== null && (t.childLanes |= n);
            e = e.return;
        }
    }
    function yn1(e, n) {
        lr1 = e, ir1 = cn1 = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) !== 0 && (ue3 = !0), e.firstContext = null);
    }
    function re3(e, n) {
        if (ir1 !== e && n !== !1 && n !== 0) if ((typeof n != "number" || n === 1073741823) && (ir1 = e, n = 1073741823), n = {
            context: e,
            observedBits: n,
            next: null
        }, cn1 === null) {
            if (lr1 === null) throw Error(v3(308));
            cn1 = n, lr1.dependencies = {
                lanes: 0,
                firstContext: n,
                responders: null
            };
        } else cn1 = cn1.next = n;
        return e._currentValue;
    }
    var Ee2 = !1;
    function hi1(e) {
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
    function $u(e, n) {
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
    function ze1(e, n) {
        if (e = e.updateQueue, e !== null) {
            e = e.shared;
            var t = e.pending;
            t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
        }
    }
    function wo1(e, n) {
        var t = e.updateQueue, r = e.alternate;
        if (r !== null && (r = r.updateQueue, t === r)) {
            var l36 = null, i = null;
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
                    i === null ? l36 = i = o : i = i.next = o, t = t.next;
                }while (t !== null)
                i === null ? l36 = i = n : i = i.next = n;
            } else l36 = i = n;
            t = {
                baseState: r.baseState,
                firstBaseUpdate: l36,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects
            }, e.updateQueue = t;
            return;
        }
        e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
    }
    function vt1(e, n, t, r) {
        var l37 = e.updateQueue;
        Ee2 = !1;
        var i = l37.firstBaseUpdate, o = l37.lastBaseUpdate, u = l37.shared.pending;
        if (u !== null) {
            l37.shared.pending = null;
            var s = u, d = s.next;
            s.next = null, o === null ? i = d : o.next = d, o = s;
            var y5 = e.alternate;
            if (y5 !== null) {
                y5 = y5.updateQueue;
                var C3 = y5.lastBaseUpdate;
                C3 !== o && (C3 === null ? y5.firstBaseUpdate = d : C3.next = d, y5.lastBaseUpdate = s);
            }
        }
        if (i !== null) {
            C3 = l37.baseState, o = 0, y5 = d = s = null;
            do {
                u = i.lane;
                var h4 = i.eventTime;
                if ((r & u) === u) {
                    y5 !== null && (y5 = y5.next = {
                        eventTime: h4,
                        lane: 0,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null
                    });
                    e: {
                        var S4 = e, k4 = i;
                        switch(u = n, h4 = t, k4.tag){
                            case 1:
                                if (S4 = k4.payload, typeof S4 == "function") {
                                    C3 = S4.call(h4, C3, u);
                                    break e;
                                }
                                C3 = S4;
                                break e;
                            case 3:
                                S4.flags = S4.flags & -4097 | 64;
                            case 0:
                                if (S4 = k4.payload, u = typeof S4 == "function" ? S4.call(h4, C3, u) : S4, u == null) break e;
                                C3 = M3({}, C3, u);
                                break e;
                            case 2:
                                Ee2 = !0;
                        }
                    }
                    i.callback !== null && (e.flags |= 32, u = l37.effects, u === null ? l37.effects = [
                        i
                    ] : u.push(i));
                } else h4 = {
                    eventTime: h4,
                    lane: u,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                }, y5 === null ? (d = y5 = h4, s = C3) : y5 = y5.next = h4, o |= u;
                if (i = i.next, i === null) {
                    if (u = l37.shared.pending, u === null) break;
                    i = u.next, u.next = null, l37.lastBaseUpdate = u, l37.shared.pending = null;
                }
            }while (1)
            y5 === null && (s = C3), l37.baseState = s, l37.firstBaseUpdate = d, l37.lastBaseUpdate = y5, xt1 |= o, e.lanes = o, e.memoizedState = C3;
        }
    }
    function So1(e, n, t) {
        if (e = n.effects, n.effects = null, e !== null) for(n = 0; n < e.length; n++){
            var r = e[n], l38 = r.callback;
            if (l38 !== null) {
                if (r.callback = null, r = t, typeof l38 != "function") throw Error(v3(191, l38));
                l38.call(r);
            }
        }
    }
    var Qu = new yr1.Component().refs;
    function or1(e, n, t, r) {
        n = e.memoizedState, t = t(r, n), t = t == null ? n : M3({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
    }
    var Pr1 = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? be2(e) === e : !1;
        },
        enqueueSetState: function(e, n, t) {
            e = e._reactInternals;
            var r = q3(), l39 = Oe2(e), i = Le3(r, l39);
            i.payload = n, t != null && (i.callback = t), ze1(e, i), Me3(e, l39, r);
        },
        enqueueReplaceState: function(e, n, t) {
            e = e._reactInternals;
            var r = q3(), l40 = Oe2(e), i = Le3(r, l40);
            i.tag = 1, i.payload = n, t != null && (i.callback = t), ze1(e, i), Me3(e, l40, r);
        },
        enqueueForceUpdate: function(e, n) {
            e = e._reactInternals;
            var t = q3(), r = Oe2(e), l41 = Le3(t, r);
            l41.tag = 2, n != null && (l41.callback = n), ze1(e, l41), Me3(e, r, t);
        }
    };
    function Eo1(e, n, t, r, l42, i, o) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : n.prototype && n.prototype.isPureReactComponent ? !pt1(t, r) || !pt1(l42, i) : !0;
    }
    function Yu(e, n, t) {
        var r = !1, l43 = Fe2, i = n.contextType;
        return typeof i == "object" && i !== null ? i = re3(i) : (l43 = J3(n) ? Ke1 : Q3.current, r = n.contextTypes, i = (r = r != null) ? xn1(e, l43) : Fe2), n = new n(t, i), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Pr1, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l43, e.__reactInternalMemoizedMaskedChildContext = i), n;
    }
    function ko1(e, n, t, r) {
        e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && Pr1.enqueueReplaceState(n, n.state, null);
    }
    function xl1(e, n, t, r) {
        var l44 = e.stateNode;
        l44.props = t, l44.state = e.memoizedState, l44.refs = Qu, hi1(e);
        var i = n.contextType;
        typeof i == "object" && i !== null ? l44.context = re3(i) : (i = J3(n) ? Ke1 : Q3.current, l44.context = xn1(e, i)), vt1(e, t, l44, r), l44.state = e.memoizedState, i = n.getDerivedStateFromProps, typeof i == "function" && (or1(e, n, i, t), l44.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l44.getSnapshotBeforeUpdate == "function" || typeof l44.UNSAFE_componentWillMount != "function" && typeof l44.componentWillMount != "function" || (n = l44.state, typeof l44.componentWillMount == "function" && l44.componentWillMount(), typeof l44.UNSAFE_componentWillMount == "function" && l44.UNSAFE_componentWillMount(), n !== l44.state && Pr1.enqueueReplaceState(l44, l44.state, null), vt1(e, t, l44, r), l44.state = e.memoizedState), typeof l44.componentDidMount == "function" && (e.flags |= 4);
    }
    var Rt1 = Array.isArray;
    function Fn1(e, n, t) {
        if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (t._owner) {
                if (t = t._owner, t) {
                    if (t.tag !== 1) throw Error(v3(309));
                    var r = t.stateNode;
                }
                if (!r) throw Error(v3(147, e));
                var l45 = "" + e;
                return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === l45 ? n.ref : (n = function(i) {
                    var o = r.refs;
                    o === Qu && (o = r.refs = {}), i === null ? delete o[l45] : o[l45] = i;
                }, n._stringRef = l45, n);
            }
            if (typeof e != "string") throw Error(v3(284));
            if (!t._owner) throw Error(v3(290, e));
        }
        return e;
    }
    function Dt1(e, n) {
        if (e.type !== "textarea") throw Error(v3(31, Object.prototype.toString.call(n) === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : n));
    }
    function Xu(e) {
        function n(c, a) {
            if (e) {
                var f = c.lastEffect;
                f !== null ? (f.nextEffect = a, c.lastEffect = a) : c.firstEffect = c.lastEffect = a, a.nextEffect = null, a.flags = 8;
            }
        }
        function t(c, a) {
            if (!e) return null;
            for(; a !== null;)n(c, a), a = a.sibling;
            return null;
        }
        function r(c, a) {
            for(c = new Map; a !== null;)a.key !== null ? c.set(a.key, a) : c.set(a.index, a), a = a.sibling;
            return c;
        }
        function l46(c, a) {
            return c = Ue2(c, a), c.index = 0, c.sibling = null, c;
        }
        function i(c, a, f) {
            return c.index = f, e ? (f = c.alternate, f !== null ? (f = f.index, f < a ? (c.flags = 2, a) : f) : (c.flags = 2, a)) : a;
        }
        function o(c) {
            return e && c.alternate === null && (c.flags = 2), c;
        }
        function u(c, a, f, p) {
            return a === null || a.tag !== 6 ? (a = qr1(f, c.mode, p), a.return = c, a) : (a = l46(a, f), a.return = c, a);
        }
        function s(c, a, f, p) {
            return a !== null && a.elementType === f.type ? (p = l46(a, f.props), p.ref = Fn1(c, a, f), p.return = c, p) : (p = Xt(f.type, f.key, f.props, null, c.mode, p), p.ref = Fn1(c, a, f), p.return = c, p);
        }
        function d(c, a, f, p) {
            return a === null || a.tag !== 4 || a.stateNode.containerInfo !== f.containerInfo || a.stateNode.implementation !== f.implementation ? (a = br1(f, c.mode, p), a.return = c, a) : (a = l46(a, f.children || []), a.return = c, a);
        }
        function y6(c, a, f, p, m) {
            return a === null || a.tag !== 7 ? (a = En1(f, c.mode, p, m), a.return = c, a) : (a = l46(a, f), a.return = c, a);
        }
        function C4(c, a, f) {
            if (typeof a == "string" || typeof a == "number") return a = qr1("" + a, c.mode, f), a.return = c, a;
            if (typeof a == "object" && a !== null) {
                switch(a.$$typeof){
                    case An1:
                        return f = Xt(a.type, a.key, a.props, null, c.mode, f), f.ref = Fn1(c, null, a), f.return = c, f;
                    case We1:
                        return a = br1(a, c.mode, f), a.return = c, a;
                }
                if (Rt1(a) || On1(a)) return a = En1(a, c.mode, f, null), a.return = c, a;
                Dt1(c, a);
            }
            return null;
        }
        function h5(c, a, f, p) {
            var m = a !== null ? a.key : null;
            if (typeof f == "string" || typeof f == "number") return m !== null ? null : u(c, a, "" + f, p);
            if (typeof f == "object" && f !== null) {
                switch(f.$$typeof){
                    case An1:
                        return f.key === m ? f.type === ke3 ? y6(c, a, f.props.children, p, m) : s(c, a, f, p) : null;
                    case We1:
                        return f.key === m ? d(c, a, f, p) : null;
                }
                if (Rt1(f) || On1(f)) return m !== null ? null : y6(c, a, f, p, null);
                Dt1(c, f);
            }
            return null;
        }
        function S5(c, a, f, p, m) {
            if (typeof p == "string" || typeof p == "number") return c = c.get(f) || null, u(a, c, "" + p, m);
            if (typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case An1:
                        return c = c.get(p.key === null ? f : p.key) || null, p.type === ke3 ? y6(a, c, p.props.children, m, p.key) : s(a, c, p, m);
                    case We1:
                        return c = c.get(p.key === null ? f : p.key) || null, d(a, c, p, m);
                }
                if (Rt1(p) || On1(p)) return c = c.get(f) || null, y6(a, c, p, m, null);
                Dt1(a, p);
            }
            return null;
        }
        function k5(c, a, f, p) {
            for(var m = null, _ = null, w = a, N4 = a = 0, T4 = null; w !== null && N4 < f.length; N4++){
                w.index > N4 ? (T4 = w, w = null) : T4 = w.sibling;
                var P3 = h5(c, w, f[N4], p);
                if (P3 === null) {
                    w === null && (w = T4);
                    break;
                }
                e && w && P3.alternate === null && n(c, w), a = i(P3, a, N4), _ === null ? m = P3 : _.sibling = P3, _ = P3, w = T4;
            }
            if (N4 === f.length) return t(c, w), m;
            if (w === null) {
                for(; N4 < f.length; N4++)w = C4(c, f[N4], p), w !== null && (a = i(w, a, N4), _ === null ? m = w : _.sibling = w, _ = w);
                return m;
            }
            for(w = r(c, w); N4 < f.length; N4++)T4 = S5(w, c, N4, f[N4], p), T4 !== null && (e && T4.alternate !== null && w.delete(T4.key === null ? N4 : T4.key), a = i(T4, a, N4), _ === null ? m = T4 : _.sibling = T4, _ = T4);
            return e && w.forEach(function(Se2) {
                return n(c, Se2);
            }), m;
        }
        function E(c, a, f, p) {
            var m = On1(f);
            if (typeof m != "function") throw Error(v3(150));
            if (f = m.call(f), f == null) throw Error(v3(151));
            for(var _ = m = null, w = a, N5 = a = 0, T5 = null, P4 = f.next(); w !== null && !P4.done; N5++, P4 = f.next()){
                w.index > N5 ? (T5 = w, w = null) : T5 = w.sibling;
                var Se3 = h5(c, w, P4.value, p);
                if (Se3 === null) {
                    w === null && (w = T5);
                    break;
                }
                e && w && Se3.alternate === null && n(c, w), a = i(Se3, a, N5), _ === null ? m = Se3 : _.sibling = Se3, _ = Se3, w = T5;
            }
            if (P4.done) return t(c, w), m;
            if (w === null) {
                for(; !P4.done; N5++, P4 = f.next())P4 = C4(c, P4.value, p), P4 !== null && (a = i(P4, a, N5), _ === null ? m = P4 : _.sibling = P4, _ = P4);
                return m;
            }
            for(w = r(c, w); !P4.done; N5++, P4 = f.next())P4 = S5(w, c, N5, P4.value, p), P4 !== null && (e && P4.alternate !== null && w.delete(P4.key === null ? N5 : P4.key), a = i(P4, a, N5), _ === null ? m = P4 : _.sibling = P4, _ = P4);
            return e && w.forEach(function(Ns1) {
                return n(c, Ns1);
            }), m;
        }
        return function(c, a, f, p) {
            var m = typeof f == "object" && f !== null && f.type === ke3 && f.key === null;
            m && (f = f.props.children);
            var _ = typeof f == "object" && f !== null;
            if (_) switch(f.$$typeof){
                case An1:
                    e: {
                        for(_ = f.key, m = a; m !== null;){
                            if (m.key === _) {
                                switch(m.tag){
                                    case 7:
                                        if (f.type === ke3) {
                                            t(c, m.sibling), a = l46(m, f.props.children), a.return = c, c = a;
                                            break e;
                                        }
                                        break;
                                    default:
                                        if (m.elementType === f.type) {
                                            t(c, m.sibling), a = l46(m, f.props), a.ref = Fn1(c, m, f), a.return = c, c = a;
                                            break e;
                                        }
                                }
                                t(c, m);
                                break;
                            } else n(c, m);
                            m = m.sibling;
                        }
                        f.type === ke3 ? (a = En1(f.props.children, c.mode, p, f.key), a.return = c, c = a) : (p = Xt(f.type, f.key, f.props, null, c.mode, p), p.ref = Fn1(c, a, f), p.return = c, c = p);
                    }
                    return o(c);
                case We1:
                    e: {
                        for(m = f.key; a !== null;){
                            if (a.key === m) if (a.tag === 4 && a.stateNode.containerInfo === f.containerInfo && a.stateNode.implementation === f.implementation) {
                                t(c, a.sibling), a = l46(a, f.children || []), a.return = c, c = a;
                                break e;
                            } else {
                                t(c, a);
                                break;
                            }
                            else n(c, a);
                            a = a.sibling;
                        }
                        a = br1(f, c.mode, p), a.return = c, c = a;
                    }
                    return o(c);
            }
            if (typeof f == "string" || typeof f == "number") return f = "" + f, a !== null && a.tag === 6 ? (t(c, a.sibling), a = l46(a, f), a.return = c, c = a) : (t(c, a), a = qr1(f, c.mode, p), a.return = c, c = a), o(c);
            if (Rt1(f)) return k5(c, a, f, p);
            if (On1(f)) return E(c, a, f, p);
            if (_ && Dt1(c, f), typeof f > "u" && !m) switch(c.tag){
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                    throw Error(v3(152, dn1(c.type) || "Component"));
            }
            return t(c, a);
        };
    }
    var ur1 = Xu(!0), Ku = Xu(!1), kt = {}, ce1 = Ve1(kt), yt1 = Ve1(kt), gt1 = Ve1(kt);
    function Qe1(e) {
        if (e === kt) throw Error(v3(174));
        return e;
    }
    function Cl1(e, n) {
        switch(D3(gt1, n), D3(yt1, e), D3(ce1, kt), e = n.nodeType, e){
            case 9:
            case 11:
                n = (n = n.documentElement) ? n.namespaceURI : sl1(null, "");
                break;
            default:
                e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = sl1(n, e);
        }
        O3(ce1), D3(ce1, n);
    }
    function _n1() {
        O3(ce1), O3(yt1), O3(gt1);
    }
    function xo1(e) {
        Qe1(gt1.current);
        var n = Qe1(ce1.current), t = sl1(n, e.type);
        n !== t && (D3(yt1, e), D3(ce1, t));
    }
    function vi1(e) {
        yt1.current === e && (O3(ce1), O3(yt1));
    }
    var R3 = Ve1(0);
    function sr1(e) {
        for(var n = e; n !== null;){
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
            for(; n.sibling === null;){
                if (n.return === null || n.return === e) return null;
                n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
        }
        return null;
    }
    var ve3 = null, _e3 = null, de3 = !1;
    function Gu(e, n) {
        var t = ne3(5, null, null, 0);
        t.elementType = "DELETED", t.type = "DELETED", t.stateNode = n, t.return = e, t.flags = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = t, e.lastEffect = t) : e.firstEffect = e.lastEffect = t;
    }
    function Co1(e, n) {
        switch(e.tag){
            case 5:
                var t = e.type;
                return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, !0) : !1;
            case 6:
                return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, !0) : !1;
            case 13:
                return !1;
            default:
                return !1;
        }
    }
    function _l1(e) {
        if (de3) {
            var n = _e3;
            if (n) {
                var t = n;
                if (!Co1(e, n)) {
                    if (n = vn1(t.nextSibling), !n || !Co1(e, n)) {
                        e.flags = e.flags & -1025 | 2, de3 = !1, ve3 = e;
                        return;
                    }
                    Gu(ve3, t);
                }
                ve3 = e, _e3 = vn1(n.firstChild);
            } else e.flags = e.flags & -1025 | 2, de3 = !1, ve3 = e;
        }
    }
    function _o1(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        ve3 = e;
    }
    function It1(e) {
        if (e !== ve3) return !1;
        if (!de3) return _o1(e), de3 = !0, !1;
        var n = e.type;
        if (e.tag !== 5 || n !== "head" && n !== "body" && !wl1(n, e.memoizedProps)) for(n = _e3; n;)Gu(e, n), n = vn1(n.nextSibling);
        if (_o1(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(v3(317));
            e: {
                for(e = e.nextSibling, n = 0; e;){
                    if (e.nodeType === 8) {
                        var t = e.data;
                        if (t === "/$") {
                            if (n === 0) {
                                _e3 = vn1(e.nextSibling);
                                break e;
                            }
                            n--;
                        } else t !== "$" && t !== "$!" && t !== "$?" || n++;
                    }
                    e = e.nextSibling;
                }
                _e3 = null;
            }
        } else _e3 = ve3 ? vn1(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Kr1() {
        _e3 = ve3 = null, de3 = !1;
    }
    var gn1 = [];
    function yi1() {
        for(var e = 0; e < gn1.length; e++)gn1[e]._workInProgressVersionPrimary = null;
        gn1.length = 0;
    }
    var nt1 = qe2.ReactCurrentDispatcher, te3 = qe2.ReactCurrentBatchConfig, wt1 = 0, I3 = null, W3 = null, V3 = null, ar1 = !1, tt1 = !1;
    function K2() {
        throw Error(v3(321));
    }
    function gi1(e, n) {
        if (n === null) return !1;
        for(var t = 0; t < n.length && t < e.length; t++)if (!ee3(e[t], n[t])) return !1;
        return !0;
    }
    function wi1(e, n, t, r, l47, i) {
        if (wt1 = i, I3 = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, nt1.current = e === null || e.memoizedState === null ? ba1 : ef, e = t(r, l47), tt1) {
            i = 0;
            do {
                if (tt1 = !1, !(25 > i)) throw Error(v3(301));
                i += 1, V3 = W3 = null, n.updateQueue = null, nt1.current = nf, e = t(r, l47);
            }while (tt1)
        }
        if (nt1.current = pr1, n = W3 !== null && W3.next !== null, wt1 = 0, V3 = W3 = I3 = null, ar1 = !1, n) throw Error(v3(300));
        return e;
    }
    function Ye1() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return V3 === null ? I3.memoizedState = V3 = e : V3 = V3.next = e, V3;
    }
    function en1() {
        if (W3 === null) {
            var e = I3.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = W3.next;
        var n = V3 === null ? I3.memoizedState : V3.next;
        if (n !== null) V3 = n, W3 = e;
        else {
            if (e === null) throw Error(v3(310));
            W3 = e, e = {
                memoizedState: W3.memoizedState,
                baseState: W3.baseState,
                baseQueue: W3.baseQueue,
                queue: W3.queue,
                next: null
            }, V3 === null ? I3.memoizedState = V3 = e : V3 = V3.next = e;
        }
        return V3;
    }
    function ae3(e, n) {
        return typeof n == "function" ? n(e) : n;
    }
    function jn1(e) {
        var n = en1(), t = n.queue;
        if (t === null) throw Error(v3(311));
        t.lastRenderedReducer = e;
        var r = W3, l48 = r.baseQueue, i = t.pending;
        if (i !== null) {
            if (l48 !== null) {
                var o = l48.next;
                l48.next = i.next, i.next = o;
            }
            r.baseQueue = l48 = i, t.pending = null;
        }
        if (l48 !== null) {
            l48 = l48.next, r = r.baseState;
            var u = o = i = null, s = l48;
            do {
                var d = s.lane;
                if ((wt1 & d) === d) u !== null && (u = u.next = {
                    lane: 0,
                    action: s.action,
                    eagerReducer: s.eagerReducer,
                    eagerState: s.eagerState,
                    next: null
                }), r = s.eagerReducer === e ? s.eagerState : e(r, s.action);
                else {
                    var y7 = {
                        lane: d,
                        action: s.action,
                        eagerReducer: s.eagerReducer,
                        eagerState: s.eagerState,
                        next: null
                    };
                    u === null ? (o = u = y7, i = r) : u = u.next = y7, I3.lanes |= d, xt1 |= d;
                }
                s = s.next;
            }while (s !== null && s !== l48)
            u === null ? i = r : u.next = o, ee3(r, n.memoizedState) || (ue3 = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = u, t.lastRenderedState = r;
        }
        return [
            n.memoizedState,
            t.dispatch
        ];
    }
    function Un1(e) {
        var n = en1(), t = n.queue;
        if (t === null) throw Error(v3(311));
        t.lastRenderedReducer = e;
        var r = t.dispatch, l49 = t.pending, i = n.memoizedState;
        if (l49 !== null) {
            t.pending = null;
            var o = l49 = l49.next;
            do i = e(i, o.action), o = o.next;
            while (o !== l49)
            ee3(i, n.memoizedState) || (ue3 = !0), n.memoizedState = i, n.baseQueue === null && (n.baseState = i), t.lastRenderedState = i;
        }
        return [
            i,
            r
        ];
    }
    function No1(e, n, t) {
        var r = n._getVersion;
        r = r(n._source);
        var l50 = n._workInProgressVersionPrimary;
        if (l50 !== null ? e = l50 === r : (e = e.mutableReadLanes, (e = (wt1 & e) === e) && (n._workInProgressVersionPrimary = r, gn1.push(n))), e) return t(n._source);
        throw gn1.push(n), Error(v3(350));
    }
    function Zu(e, n, t, r) {
        var l51 = Y3;
        if (l51 === null) throw Error(v3(349));
        var i = n._getVersion, o = i(n._source), u = nt1.current, s = u.useState(function() {
            return No1(l51, n, t);
        }), d = s[1], y8 = s[0];
        s = V3;
        var C5 = e.memoizedState, h6 = C5.refs, S6 = h6.getSnapshot, k6 = C5.source;
        C5 = C5.subscribe;
        var E = I3;
        return e.memoizedState = {
            refs: h6,
            source: n,
            subscribe: r
        }, u.useEffect(function() {
            h6.getSnapshot = t, h6.setSnapshot = d;
            var c = i(n._source);
            if (!ee3(o, c)) {
                c = t(n._source), ee3(y8, c) || (d(c), c = Oe2(E), l51.mutableReadLanes |= c & l51.pendingLanes), c = l51.mutableReadLanes, l51.entangledLanes |= c;
                for(var a = l51.entanglements, f = c; 0 < f;){
                    var p = 31 - Ie3(f), m = 1 << p;
                    a[p] |= c, f &= ~m;
                }
            }
        }, [
            t,
            n,
            r
        ]), u.useEffect(function() {
            return r(n._source, function() {
                var c = h6.getSnapshot, a = h6.setSnapshot;
                try {
                    a(c(n._source));
                    var f = Oe2(E);
                    l51.mutableReadLanes |= f & l51.pendingLanes;
                } catch (p) {
                    a(function() {
                        throw p;
                    });
                }
            });
        }, [
            n,
            r
        ]), ee3(S6, t) && ee3(k6, n) && ee3(C5, r) || (e = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: ae3,
            lastRenderedState: y8
        }, e.dispatch = d = ki1.bind(null, I3, e), s.queue = e, s.baseQueue = null, y8 = No1(l51, n, t), s.memoizedState = s.baseState = y8), y8;
    }
    function Ju(e, n, t) {
        var r = en1();
        return Zu(r, e, n, t);
    }
    function Vn1(e) {
        var n = Ye1();
        return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = n.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: ae3,
            lastRenderedState: e
        }, e = e.dispatch = ki1.bind(null, I3, e), [
            n.memoizedState,
            e
        ];
    }
    function fr1(e, n, t, r) {
        return e = {
            tag: e,
            create: n,
            destroy: t,
            deps: r,
            next: null
        }, n = I3.updateQueue, n === null ? (n = {
            lastEffect: null
        }, I3.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
    }
    function Po1(e) {
        var n = Ye1();
        return e = {
            current: e
        }, n.memoizedState = e;
    }
    function cr1() {
        return en1().memoizedState;
    }
    function Nl1(e, n, t, r) {
        var l52 = Ye1();
        I3.flags |= e, l52.memoizedState = fr1(1 | n, t, void 0, r === void 0 ? null : r);
    }
    function Si1(e, n, t, r) {
        var l53 = en1();
        r = r === void 0 ? null : r;
        var i = void 0;
        if (W3 !== null) {
            var o = W3.memoizedState;
            if (i = o.destroy, r !== null && gi1(r, o.deps)) {
                fr1(n, t, i, r);
                return;
            }
        }
        I3.flags |= e, l53.memoizedState = fr1(1 | n, t, i, r);
    }
    function To1(e, n) {
        return Nl1(516, 4, e, n);
    }
    function dr1(e, n) {
        return Si1(516, 4, e, n);
    }
    function qu(e, n) {
        return Si1(4, 2, e, n);
    }
    function bu(e, n) {
        if (typeof n == "function") return e = e(), n(e), function() {
            n(null);
        };
        if (n != null) return e = e(), n.current = e, function() {
            n.current = null;
        };
    }
    function es1(e, n, t) {
        return t = t != null ? t.concat([
            e
        ]) : null, Si1(4, 2, bu.bind(null, n, e), t);
    }
    function Ei1() {}
    function ns1(e, n) {
        var t = en1();
        n = n === void 0 ? null : n;
        var r = t.memoizedState;
        return r !== null && n !== null && gi1(n, r[1]) ? r[0] : (t.memoizedState = [
            e,
            n
        ], e);
    }
    function ts1(e, n) {
        var t = en1();
        n = n === void 0 ? null : n;
        var r = t.memoizedState;
        return r !== null && n !== null && gi1(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [
            e,
            n
        ], e);
    }
    function qa1(e, n) {
        var t = Cn1();
        Ge1(98 > t ? 98 : t, function() {
            e(!0);
        }), Ge1(97 < t ? 97 : t, function() {
            var r = te3.transition;
            te3.transition = 1;
            try {
                e(!1), n();
            } finally{
                te3.transition = r;
            }
        });
    }
    function ki1(e, n, t) {
        var r = q3(), l54 = Oe2(e), i = {
            lane: l54,
            action: t,
            eagerReducer: null,
            eagerState: null,
            next: null
        }, o = n.pending;
        if (o === null ? i.next = i : (i.next = o.next, o.next = i), n.pending = i, o = e.alternate, e === I3 || o !== null && o === I3) tt1 = ar1 = !0;
        else {
            if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
                var u = n.lastRenderedState, s = o(u, t);
                if (i.eagerReducer = o, i.eagerState = s, ee3(s, u)) return;
            } catch  {} finally{}
            Me3(e, l54, r);
        }
    }
    var pr1 = {
        readContext: re3,
        useCallback: K2,
        useContext: K2,
        useEffect: K2,
        useImperativeHandle: K2,
        useLayoutEffect: K2,
        useMemo: K2,
        useReducer: K2,
        useRef: K2,
        useState: K2,
        useDebugValue: K2,
        useDeferredValue: K2,
        useTransition: K2,
        useMutableSource: K2,
        useOpaqueIdentifier: K2,
        unstable_isNewReconciler: !1
    }, ba1 = {
        readContext: re3,
        useCallback: function(e, n) {
            return Ye1().memoizedState = [
                e,
                n === void 0 ? null : n
            ], e;
        },
        useContext: re3,
        useEffect: To1,
        useImperativeHandle: function(e, n, t) {
            return t = t != null ? t.concat([
                e
            ]) : null, Nl1(4, 2, bu.bind(null, n, e), t);
        },
        useLayoutEffect: function(e, n) {
            return Nl1(4, 2, e, n);
        },
        useMemo: function(e, n) {
            var t = Ye1();
            return n = n === void 0 ? null : n, e = e(), t.memoizedState = [
                e,
                n
            ], e;
        },
        useReducer: function(e, n, t) {
            var r = Ye1();
            return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = r.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: n
            }, e = e.dispatch = ki1.bind(null, I3, e), [
                r.memoizedState,
                e
            ];
        },
        useRef: Po1,
        useState: Vn1,
        useDebugValue: Ei1,
        useDeferredValue: function(e) {
            var n = Vn1(e), t = n[0], r = n[1];
            return To1(function() {
                var l55 = te3.transition;
                te3.transition = 1;
                try {
                    r(e);
                } finally{
                    te3.transition = l55;
                }
            }, [
                e
            ]), t;
        },
        useTransition: function() {
            var e = Vn1(!1), n = e[0];
            return e = qa1.bind(null, e[1]), Po1(e), [
                e,
                n
            ];
        },
        useMutableSource: function(e, n, t) {
            var r = Ye1();
            return r.memoizedState = {
                refs: {
                    getSnapshot: n,
                    setSnapshot: null
                },
                source: e,
                subscribe: t
            }, Zu(r, e, n, t);
        },
        useOpaqueIdentifier: function() {
            if (de3) {
                var e = !1, n = Ya1(function() {
                    throw e || (e = !0, t("r:" + (Qr1++).toString(36))), Error(v3(355));
                }), t = Vn1(n)[1];
                return (I3.mode & 2) === 0 && (I3.flags |= 516, fr1(5, function() {
                    t("r:" + (Qr1++).toString(36));
                }, void 0, null)), n;
            }
            return n = "r:" + (Qr1++).toString(36), Vn1(n), n;
        },
        unstable_isNewReconciler: !1
    }, ef = {
        readContext: re3,
        useCallback: ns1,
        useContext: re3,
        useEffect: dr1,
        useImperativeHandle: es1,
        useLayoutEffect: qu,
        useMemo: ts1,
        useReducer: jn1,
        useRef: cr1,
        useState: function() {
            return jn1(ae3);
        },
        useDebugValue: Ei1,
        useDeferredValue: function(e) {
            var n = jn1(ae3), t = n[0], r = n[1];
            return dr1(function() {
                var l56 = te3.transition;
                te3.transition = 1;
                try {
                    r(e);
                } finally{
                    te3.transition = l56;
                }
            }, [
                e
            ]), t;
        },
        useTransition: function() {
            var e = jn1(ae3)[0];
            return [
                cr1().current,
                e
            ];
        },
        useMutableSource: Ju,
        useOpaqueIdentifier: function() {
            return jn1(ae3)[0];
        },
        unstable_isNewReconciler: !1
    }, nf = {
        readContext: re3,
        useCallback: ns1,
        useContext: re3,
        useEffect: dr1,
        useImperativeHandle: es1,
        useLayoutEffect: qu,
        useMemo: ts1,
        useReducer: Un1,
        useRef: cr1,
        useState: function() {
            return Un1(ae3);
        },
        useDebugValue: Ei1,
        useDeferredValue: function(e) {
            var n = Un1(ae3), t = n[0], r = n[1];
            return dr1(function() {
                var l57 = te3.transition;
                te3.transition = 1;
                try {
                    r(e);
                } finally{
                    te3.transition = l57;
                }
            }, [
                e
            ]), t;
        },
        useTransition: function() {
            var e = Un1(ae3)[0];
            return [
                cr1().current,
                e
            ];
        },
        useMutableSource: Ju,
        useOpaqueIdentifier: function() {
            return Un1(ae3)[0];
        },
        unstable_isNewReconciler: !1
    }, tf = qe2.ReactCurrentOwner, ue3 = !1;
    function G3(e, n, t, r) {
        n.child = e === null ? Ku(n, null, t, r) : ur1(n, e.child, t, r);
    }
    function Lo1(e, n, t, r, l58) {
        t = t.render;
        var i = n.ref;
        return yn1(n, l58), r = wi1(e, n, t, r, i, l58), e !== null && !ue3 ? (n.updateQueue = e.updateQueue, n.flags &= -517, e.lanes &= ~l58, ye3(e, n, l58)) : (n.flags |= 1, G3(e, n, r, l58), n.child);
    }
    function zo1(e, n, t, r, l59, i) {
        if (e === null) {
            var o = t.type;
            return typeof o == "function" && !Ti1(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, rs1(e, n, o, r, l59, i)) : (e = Xt(t.type, null, r, n, n.mode, i), e.ref = n.ref, e.return = n, n.child = e);
        }
        return o = e.child, (l59 & i) === 0 && (l59 = o.memoizedProps, t = t.compare, t = t !== null ? t : pt1, t(l59, r) && e.ref === n.ref) ? ye3(e, n, i) : (n.flags |= 1, e = Ue2(o, r), e.ref = n.ref, e.return = n, n.child = e);
    }
    function rs1(e, n, t, r, l60, i) {
        if (e !== null && pt1(e.memoizedProps, r) && e.ref === n.ref) if (ue3 = !1, (i & l60) !== 0) (e.flags & 16384) !== 0 && (ue3 = !0);
        else return n.lanes = e.lanes, ye3(e, n, i);
        return Pl1(e, n, t, r, i);
    }
    function Gr1(e, n, t) {
        var r = n.pendingProps, l61 = r.children, i = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding") if ((n.mode & 4) === 0) n.memoizedState = {
            baseLanes: 0
        }, jt1(n, t);
        else if ((t & 1073741824) !== 0) n.memoizedState = {
            baseLanes: 0
        }, jt1(n, i !== null ? i.baseLanes : t);
        else return e = i !== null ? i.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
            baseLanes: e
        }, jt1(n, e), null;
        else i !== null ? (r = i.baseLanes | t, n.memoizedState = null) : r = t, jt1(n, r);
        return G3(e, n, l61, t), n.child;
    }
    function ls1(e, n) {
        var t = n.ref;
        (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 128);
    }
    function Pl1(e, n, t, r, l62) {
        var i = J3(t) ? Ke1 : Q3.current;
        return i = xn1(n, i), yn1(n, l62), t = wi1(e, n, t, r, i, l62), e !== null && !ue3 ? (n.updateQueue = e.updateQueue, n.flags &= -517, e.lanes &= ~l62, ye3(e, n, l62)) : (n.flags |= 1, G3(e, n, t, l62), n.child);
    }
    function Oo1(e, n, t, r, l63) {
        if (J3(t)) {
            var i = !0;
            Wt1(n);
        } else i = !1;
        if (yn1(n, l63), n.stateNode === null) e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), Yu(n, t, r), xl1(n, t, r, l63), r = !0;
        else if (e === null) {
            var o = n.stateNode, u = n.memoizedProps;
            o.props = u;
            var s = o.context, d = t.contextType;
            typeof d == "object" && d !== null ? d = re3(d) : (d = J3(t) ? Ke1 : Q3.current, d = xn1(n, d));
            var y9 = t.getDerivedStateFromProps, C6 = typeof y9 == "function" || typeof o.getSnapshotBeforeUpdate == "function";
            C6 || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== d) && ko1(n, o, r, d), Ee2 = !1;
            var h7 = n.memoizedState;
            o.state = h7, vt1(n, r, o, l63), s = n.memoizedState, u !== r || h7 !== s || Z3.current || Ee2 ? (typeof y9 == "function" && (or1(n, t, y9, r), s = n.memoizedState), (u = Ee2 || Eo1(n, t, u, r, h7, s, d)) ? (C6 || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (n.flags |= 4)) : (typeof o.componentDidMount == "function" && (n.flags |= 4), n.memoizedProps = r, n.memoizedState = s), o.props = r, o.state = s, o.context = d, r = u) : (typeof o.componentDidMount == "function" && (n.flags |= 4), r = !1);
        } else {
            o = n.stateNode, $u(e, n), u = n.memoizedProps, d = n.type === n.elementType ? u : oe3(n.type, u), o.props = d, C6 = n.pendingProps, h7 = o.context, s = t.contextType, typeof s == "object" && s !== null ? s = re3(s) : (s = J3(t) ? Ke1 : Q3.current, s = xn1(n, s));
            var S7 = t.getDerivedStateFromProps;
            (y9 = typeof S7 == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== C6 || h7 !== s) && ko1(n, o, r, s), Ee2 = !1, h7 = n.memoizedState, o.state = h7, vt1(n, r, o, l63);
            var k7 = n.memoizedState;
            u !== C6 || h7 !== k7 || Z3.current || Ee2 ? (typeof S7 == "function" && (or1(n, t, S7, r), k7 = n.memoizedState), (d = Ee2 || Eo1(n, t, d, r, h7, k7, s)) ? (y9 || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k7, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, k7, s)), typeof o.componentDidUpdate == "function" && (n.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 256)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h7 === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h7 === e.memoizedState || (n.flags |= 256), n.memoizedProps = r, n.memoizedState = k7), o.props = r, o.state = k7, o.context = s, r = d) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h7 === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h7 === e.memoizedState || (n.flags |= 256), r = !1);
        }
        return Tl1(e, n, t, r, i, l63);
    }
    function Tl1(e, n, t, r, l64, i) {
        ls1(e, n);
        var o = (n.flags & 64) !== 0;
        if (!r && !o) return l64 && vo1(n, t, !1), ye3(e, n, i);
        r = n.stateNode, tf.current = n;
        var u = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
        return n.flags |= 1, e !== null && o ? (n.child = ur1(n, e.child, null, i), n.child = ur1(n, null, u, i)) : G3(e, n, u, i), n.memoizedState = r.state, l64 && vo1(n, t, !0), n.child;
    }
    function Mo1(e) {
        var n = e.stateNode;
        n.pendingContext ? ho1(e, n.pendingContext, n.pendingContext !== n.context) : n.context && ho1(e, n.context, !1), Cl1(e, n.containerInfo);
    }
    var Ft1 = {
        dehydrated: null,
        retryLane: 0
    };
    function Ro1(e, n, t) {
        var r = n.pendingProps, l65 = R3.current, i = !1, o;
        return (o = (n.flags & 64) !== 0) || (o = e !== null && e.memoizedState === null ? !1 : (l65 & 2) !== 0), o ? (i = !0, n.flags &= -65) : e !== null && e.memoizedState === null || r.fallback === void 0 || r.unstable_avoidThisFallback === !0 || (l65 |= 1), D3(R3, l65 & 1), e === null ? (r.fallback !== void 0 && _l1(n), e = r.children, l65 = r.fallback, i ? (e = Do1(n, e, l65, t), n.child.memoizedState = {
            baseLanes: t
        }, n.memoizedState = Ft1, e) : typeof r.unstable_expectedLoadTime == "number" ? (e = Do1(n, e, l65, t), n.child.memoizedState = {
            baseLanes: t
        }, n.memoizedState = Ft1, n.lanes = 33554432, e) : (t = Li1({
            mode: "visible",
            children: e
        }, n.mode, t, null), t.return = n, n.child = t)) : e.memoizedState !== null ? i ? (r = Fo1(e, n, r.children, r.fallback, t), i = n.child, l65 = e.child.memoizedState, i.memoizedState = l65 === null ? {
            baseLanes: t
        } : {
            baseLanes: l65.baseLanes | t
        }, i.childLanes = e.childLanes & ~t, n.memoizedState = Ft1, r) : (t = Io1(e, n, r.children, t), n.memoizedState = null, t) : i ? (r = Fo1(e, n, r.children, r.fallback, t), i = n.child, l65 = e.child.memoizedState, i.memoizedState = l65 === null ? {
            baseLanes: t
        } : {
            baseLanes: l65.baseLanes | t
        }, i.childLanes = e.childLanes & ~t, n.memoizedState = Ft1, r) : (t = Io1(e, n, r.children, t), n.memoizedState = null, t);
    }
    function Do1(e, n, t, r) {
        var l66 = e.mode, i = e.child;
        return n = {
            mode: "hidden",
            children: n
        }, (l66 & 2) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = n) : i = Li1(n, l66, 0, null), t = En1(t, l66, r, null), i.return = e, t.return = e, i.sibling = t, e.child = i, t;
    }
    function Io1(e, n, t, r) {
        var l67 = e.child;
        return e = l67.sibling, t = Ue2(l67, {
            mode: "visible",
            children: t
        }), (n.mode & 2) === 0 && (t.lanes = r), t.return = n, t.sibling = null, e !== null && (e.nextEffect = null, e.flags = 8, n.firstEffect = n.lastEffect = e), n.child = t;
    }
    function Fo1(e, n, t, r, l68) {
        var i = n.mode, o = e.child;
        e = o.sibling;
        var u = {
            mode: "hidden",
            children: t
        };
        return (i & 2) === 0 && n.child !== o ? (t = n.child, t.childLanes = 0, t.pendingProps = u, o = t.lastEffect, o !== null ? (n.firstEffect = t.firstEffect, n.lastEffect = o, o.nextEffect = null) : n.firstEffect = n.lastEffect = null) : t = Ue2(o, u), e !== null ? r = Ue2(e, r) : (r = En1(r, i, l68, null), r.flags |= 2), r.return = n, t.return = n, t.sibling = r, n.child = t, r;
    }
    function jo1(e, n) {
        e.lanes |= n;
        var t = e.alternate;
        t !== null && (t.lanes |= n), Au(e.return, n);
    }
    function Zr1(e, n, t, r, l69, i) {
        var o = e.memoizedState;
        o === null ? e.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: t,
            tailMode: l69,
            lastEffect: i
        } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l69, o.lastEffect = i);
    }
    function Uo1(e, n, t) {
        var r = n.pendingProps, l70 = r.revealOrder, i = r.tail;
        if (G3(e, n, r.children, t), r = R3.current, (r & 2) !== 0) r = r & 1 | 2, n.flags |= 64;
        else {
            if (e !== null && (e.flags & 64) !== 0) e: for(e = n.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && jo1(e, t);
                else if (e.tag === 19) jo1(e, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue;
                }
                if (e === n) break e;
                for(; e.sibling === null;){
                    if (e.return === null || e.return === n) break e;
                    e = e.return;
                }
                e.sibling.return = e.return, e = e.sibling;
            }
            r &= 1;
        }
        if (D3(R3, r), (n.mode & 2) === 0) n.memoizedState = null;
        else switch(l70){
            case "forwards":
                for(t = n.child, l70 = null; t !== null;)e = t.alternate, e !== null && sr1(e) === null && (l70 = t), t = t.sibling;
                t = l70, t === null ? (l70 = n.child, n.child = null) : (l70 = t.sibling, t.sibling = null), Zr1(n, !1, l70, t, i, n.lastEffect);
                break;
            case "backwards":
                for(t = null, l70 = n.child, n.child = null; l70 !== null;){
                    if (e = l70.alternate, e !== null && sr1(e) === null) {
                        n.child = l70;
                        break;
                    }
                    e = l70.sibling, l70.sibling = t, t = l70, l70 = e;
                }
                Zr1(n, !0, t, null, i, n.lastEffect);
                break;
            case "together":
                Zr1(n, !1, null, null, void 0, n.lastEffect);
                break;
            default:
                n.memoizedState = null;
        }
        return n.child;
    }
    function ye3(e, n, t) {
        if (e !== null && (n.dependencies = e.dependencies), xt1 |= n.lanes, (t & n.childLanes) !== 0) {
            if (e !== null && n.child !== e.child) throw Error(v3(153));
            if (n.child !== null) {
                for(e = n.child, t = Ue2(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null;)e = e.sibling, t = t.sibling = Ue2(e, e.pendingProps), t.return = n;
                t.sibling = null;
            }
            return n.child;
        }
        return null;
    }
    var is1, Ll1, os1, us1;
    is1 = function(e, n) {
        for(var t = n.child; t !== null;){
            if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
            else if (t.tag !== 4 && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === n) break;
            for(; t.sibling === null;){
                if (t.return === null || t.return === n) return;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        }
    };
    Ll1 = function() {};
    os1 = function(e, n, t, r) {
        var l71 = e.memoizedProps;
        if (l71 !== r) {
            e = n.stateNode, Qe1(ce1.current);
            var i = null;
            switch(t){
                case "input":
                    l71 = tl1(e, l71), r = tl1(e, r), i = [];
                    break;
                case "option":
                    l71 = il1(e, l71), r = il1(e, r), i = [];
                    break;
                case "select":
                    l71 = M3({}, l71, {
                        value: void 0
                    }), r = M3({}, r, {
                        value: void 0
                    }), i = [];
                    break;
                case "textarea":
                    l71 = ol1(e, l71), r = ol1(e, r), i = [];
                    break;
                default:
                    typeof l71.onClick != "function" && typeof r.onClick == "function" && (e.onclick = er1);
            }
            al1(t, r);
            var o;
            t = null;
            for(d in l71)if (!r.hasOwnProperty(d) && l71.hasOwnProperty(d) && l71[d] != null) if (d === "style") {
                var u = l71[d];
                for(o in u)u.hasOwnProperty(o) && (t || (t = {}), t[o] = "");
            } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (ot1.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
            for(d in r){
                var s = r[d];
                if (u = l71?.[d], r.hasOwnProperty(d) && s !== u && (s != null || u != null)) if (d === "style") if (u) {
                    for(o in u)!u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (t || (t = {}), t[o] = "");
                    for(o in s)s.hasOwnProperty(o) && u[o] !== s[o] && (t || (t = {}), t[o] = s[o]);
                } else t || (i || (i = []), i.push(d, t)), t = s;
                else d === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(d, s)) : d === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(d, "" + s) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (ot1.hasOwnProperty(d) ? (s != null && d === "onScroll" && z2("scroll", e), i || u === s || (i = [])) : typeof s == "object" && s !== null && s.$$typeof === Gl1 ? s.toString() : (i = i || []).push(d, s));
            }
            t && (i = i || []).push("style", t);
            var d = i;
            (n.updateQueue = d) && (n.flags |= 4);
        }
    };
    us1 = function(e, n, t, r) {
        t !== r && (n.flags |= 4);
    };
    function Bn1(e, n) {
        if (!de3) switch(e.tailMode){
            case "hidden":
                n = e.tail;
                for(var t = null; n !== null;)n.alternate !== null && (t = n), n = n.sibling;
                t === null ? e.tail = null : t.sibling = null;
                break;
            case "collapsed":
                t = e.tail;
                for(var r = null; t !== null;)t.alternate !== null && (r = t), t = t.sibling;
                r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
        }
    }
    function rf(e, n, t) {
        var r = n.pendingProps;
        switch(n.tag){
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
                return J3(n.type) && tr1(), null;
            case 3:
                return _n1(), O3(Z3), O3(Q3), yi1(), r = n.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (It1(n) ? n.flags |= 4 : r.hydrate || (n.flags |= 256)), Ll1(n), null;
            case 5:
                vi1(n);
                var l72 = Qe1(gt1.current);
                if (t = n.type, e !== null && n.stateNode != null) os1(e, n, t, r, l72), e.ref !== n.ref && (n.flags |= 128);
                else {
                    if (!r) {
                        if (n.stateNode === null) throw Error(v3(166));
                        return null;
                    }
                    if (e = Qe1(ce1.current), It1(n)) {
                        r = n.stateNode, t = n.type;
                        var i = n.memoizedProps;
                        switch(r[Ce2] = n, r[nr1] = i, t){
                            case "dialog":
                                z2("cancel", r), z2("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                z2("load", r);
                                break;
                            case "video":
                            case "audio":
                                for(e = 0; e < Qn1.length; e++)z2(Qn1[e], r);
                                break;
                            case "source":
                                z2("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                z2("error", r), z2("load", r);
                                break;
                            case "details":
                                z2("toggle", r);
                                break;
                            case "input":
                                Vi1(r, i), z2("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!i.multiple
                                }, z2("invalid", r);
                                break;
                            case "textarea":
                                Hi1(r, i), z2("invalid", r);
                        }
                        al1(t, i), e = null;
                        for(var o in i)i.hasOwnProperty(o) && (l72 = i[o], o === "children" ? typeof l72 == "string" ? r.textContent !== l72 && (e = [
                            "children",
                            l72
                        ]) : typeof l72 == "number" && r.textContent !== "" + l72 && (e = [
                            "children",
                            "" + l72
                        ]) : ot1.hasOwnProperty(o) && l72 != null && o === "onScroll" && z2("scroll", r));
                        switch(t){
                            case "input":
                                Nt1(r), Bi1(r, i, !0);
                                break;
                            case "textarea":
                                Nt1(r), Wi1(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof i.onClick == "function" && (r.onclick = er1);
                        }
                        r = e, n.updateQueue = r, r !== null && (n.flags |= 4);
                    } else {
                        switch(o = l72.nodeType === 9 ? l72 : l72.ownerDocument, e === ul1.html && (e = eu(t)), e === ul1.html ? t === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(t, {
                            is: r.is
                        }) : (e = o.createElement(t), t === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, t), e[Ce2] = n, e[nr1] = r, is1(e, n, !1, !1), n.stateNode = e, o = fl1(t, r), t){
                            case "dialog":
                                z2("cancel", e), z2("close", e), l72 = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                z2("load", e), l72 = r;
                                break;
                            case "video":
                            case "audio":
                                for(l72 = 0; l72 < Qn1.length; l72++)z2(Qn1[l72], e);
                                l72 = r;
                                break;
                            case "source":
                                z2("error", e), l72 = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                z2("error", e), z2("load", e), l72 = r;
                                break;
                            case "details":
                                z2("toggle", e), l72 = r;
                                break;
                            case "input":
                                Vi1(e, r), l72 = tl1(e, r), z2("invalid", e);
                                break;
                            case "option":
                                l72 = il1(e, r);
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l72 = M3({}, r, {
                                    value: void 0
                                }), z2("invalid", e);
                                break;
                            case "textarea":
                                Hi1(e, r), l72 = ol1(e, r), z2("invalid", e);
                                break;
                            default:
                                l72 = r;
                        }
                        al1(t, l72);
                        var u = l72;
                        for(i in u)if (u.hasOwnProperty(i)) {
                            var s = u[i];
                            i === "style" ? ru(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && nu(e, s)) : i === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && ut1(e, s) : typeof s == "number" && ut1(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ot1.hasOwnProperty(i) ? s != null && i === "onScroll" && z2("scroll", e) : s != null && Al1(e, i, s, o));
                        }
                        switch(t){
                            case "input":
                                Nt1(e), Bi1(e, r, !1);
                                break;
                            case "textarea":
                                Nt1(e), Wi1(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + De2(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? pn1(e, !!r.multiple, i, !1) : r.defaultValue != null && pn1(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l72.onClick == "function" && (e.onclick = er1);
                        }
                        Du(t, r) && (n.flags |= 4);
                    }
                    n.ref !== null && (n.flags |= 128);
                }
                return null;
            case 6:
                if (e && n.stateNode != null) us1(e, n, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && n.stateNode === null) throw Error(v3(166));
                    t = Qe1(gt1.current), Qe1(ce1.current), It1(n) ? (r = n.stateNode, t = n.memoizedProps, r[Ce2] = n, r.nodeValue !== t && (n.flags |= 4)) : (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Ce2] = n, n.stateNode = r);
                }
                return null;
            case 13:
                return O3(R3), r = n.memoizedState, (n.flags & 64) !== 0 ? (n.lanes = t, n) : (r = r !== null, t = !1, e === null ? n.memoizedProps.fallback !== void 0 && It1(n) : t = e.memoizedState !== null, r && !t && (n.mode & 2) !== 0 && (e === null && n.memoizedProps.unstable_avoidThisFallback !== !0 || (R3.current & 1) !== 0 ? B3 === 0 && (B3 = 3) : ((B3 === 0 || B3 === 3) && (B3 = 4), Y3 === null || (xt1 & 134217727) === 0 && (Ln1 & 134217727) === 0 || wn1(Y3, $3))), (r || t) && (n.flags |= 4), null);
            case 4:
                return _n1(), Ll1(n), e === null && Ou(n.stateNode.containerInfo), null;
            case 10:
                return mi1(n), null;
            case 17:
                return J3(n.type) && tr1(), null;
            case 19:
                if (O3(R3), r = n.memoizedState, r === null) return null;
                if (i = (n.flags & 64) !== 0, o = r.rendering, o === null) if (i) Bn1(r, !1);
                else {
                    if (B3 !== 0 || e !== null && (e.flags & 64) !== 0) for(e = n.child; e !== null;){
                        if (o = sr1(e), o !== null) {
                            for(n.flags |= 64, Bn1(r, !1), i = o.updateQueue, i !== null && (n.updateQueue = i, n.flags |= 4), r.lastEffect === null && (n.firstEffect = null), n.lastEffect = r.lastEffect, r = t, t = n.child; t !== null;)i = t, e = r, i.flags &= 2, i.nextEffect = null, i.firstEffect = null, i.lastEffect = null, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), t = t.sibling;
                            return D3(R3, R3.current & 1 | 2), n.child;
                        }
                        e = e.sibling;
                    }
                    r.tail !== null && A3() > Il1 && (n.flags |= 64, i = !0, Bn1(r, !1), n.lanes = 33554432);
                }
                else {
                    if (!i) if (e = sr1(o), e !== null) {
                        if (n.flags |= 64, i = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), Bn1(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !de3) return n = n.lastEffect = r.lastEffect, n !== null && (n.nextEffect = null), null;
                    } else 2 * A3() - r.renderingStartTime > Il1 && t !== 1073741824 && (n.flags |= 64, i = !0, Bn1(r, !1), n.lanes = 33554432);
                    r.isBackwards ? (o.sibling = n.child, n.child = o) : (t = r.last, t !== null ? t.sibling = o : n.child = o, r.last = o);
                }
                return r.tail !== null ? (t = r.tail, r.rendering = t, r.tail = t.sibling, r.lastEffect = n.lastEffect, r.renderingStartTime = A3(), t.sibling = null, n = R3.current, D3(R3, i ? n & 1 | 2 : n & 1), t) : null;
            case 23:
            case 24:
                return Pi1(), e !== null && e.memoizedState !== null != (n.memoizedState !== null) && r.mode !== "unstable-defer-without-hiding" && (n.flags |= 4), null;
        }
        throw Error(v3(156, n.tag));
    }
    function lf(e) {
        switch(e.tag){
            case 1:
                J3(e.type) && tr1();
                var n = e.flags;
                return n & 4096 ? (e.flags = n & -4097 | 64, e) : null;
            case 3:
                if (_n1(), O3(Z3), O3(Q3), yi1(), n = e.flags, (n & 64) !== 0) throw Error(v3(285));
                return e.flags = n & -4097 | 64, e;
            case 5:
                return vi1(e), null;
            case 13:
                return O3(R3), n = e.flags, n & 4096 ? (e.flags = n & -4097 | 64, e) : null;
            case 19:
                return O3(R3), null;
            case 4:
                return _n1(), null;
            case 10:
                return mi1(e), null;
            case 23:
            case 24:
                return Pi1(), null;
            default:
                return null;
        }
    }
    function xi1(e, n) {
        try {
            var t = "", r = n;
            do t += Us1(r), r = r.return;
            while (r)
            var l = t;
        } catch (i) {
            l = `
Error generating stack: ` + i.message + `
` + i.stack;
        }
        return {
            value: e,
            source: n,
            stack: l
        };
    }
    function zl1(e, n) {
        try {
            console.error(n.value);
        } catch (t) {
            setTimeout(function() {
                throw t;
            });
        }
    }
    var of = typeof WeakMap == "function" ? WeakMap : Map;
    function ss1(e, n, t) {
        t = Le3(-1, t), t.tag = 3, t.payload = {
            element: null
        };
        var r = n.value;
        return t.callback = function() {
            hr1 || (hr1 = !0, Fl1 = r), zl1(e, n);
        }, t;
    }
    function as1(e, n, t) {
        t = Le3(-1, t), t.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var l = n.value;
            t.payload = function() {
                return zl1(e, n), r(l);
            };
        }
        var i = e.stateNode;
        return i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
            typeof r != "function" && (fe2 === null ? fe2 = new Set([
                this
            ]) : fe2.add(this), zl1(e, n));
            var o = n.stack;
            this.componentDidCatch(n.value, {
                componentStack: o !== null ? o : ""
            });
        }), t;
    }
    var uf = typeof WeakSet == "function" ? WeakSet : Set;
    function Vo1(e) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (t) {
            Re2(e, t);
        }
        else n.current = null;
    }
    function sf(e, n) {
        switch(n.tag){
            case 0:
            case 11:
            case 15:
            case 22:
                return;
            case 1:
                if (n.flags & 256 && e !== null) {
                    var t = e.memoizedProps, r = e.memoizedState;
                    e = n.stateNode, n = e.getSnapshotBeforeUpdate(n.elementType === n.type ? t : oe3(n.type, t), r), e.__reactInternalSnapshotBeforeUpdate = n;
                }
                return;
            case 3:
                n.flags & 256 && fi1(n.stateNode.containerInfo);
                return;
            case 5:
            case 6:
            case 4:
            case 17:
                return;
        }
        throw Error(v3(163));
    }
    function af(e, n, t) {
        switch(t.tag){
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
                    }while (e !== n)
                }
                if (n = t.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
                    e = n = n.next;
                    do {
                        var l = e;
                        r = l.next, l = l.tag, (l & 4) !== 0 && (l & 1) !== 0 && (gs1(t, e), yf(t, e)), e = r;
                    }while (e !== n)
                }
                return;
            case 1:
                e = t.stateNode, t.flags & 4 && (n === null ? e.componentDidMount() : (r = t.elementType === t.type ? n.memoizedProps : oe3(t.type, n.memoizedProps), e.componentDidUpdate(r, n.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), n = t.updateQueue, n !== null && So1(t, n, e);
                return;
            case 3:
                if (n = t.updateQueue, n !== null) {
                    if (e = null, t.child !== null) switch(t.child.tag){
                        case 5:
                            e = t.child.stateNode;
                            break;
                        case 1:
                            e = t.child.stateNode;
                    }
                    So1(t, n, e);
                }
                return;
            case 5:
                e = t.stateNode, n === null && t.flags & 4 && Du(t.type, t.memoizedProps) && e.focus();
                return;
            case 6:
                return;
            case 4:
                return;
            case 12:
                return;
            case 13:
                t.memoizedState === null && (t = t.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null && pu(t))));
                return;
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
                return;
        }
        throw Error(v3(163));
    }
    function Bo1(e, n) {
        for(var t = e;;){
            if (t.tag === 5) {
                var r = t.stateNode;
                if (n) r = r.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
                else {
                    r = t.stateNode;
                    var l = t.memoizedProps.style;
                    l = l != null && l.hasOwnProperty("display") ? l.display : null, r.style.display = tu("display", l);
                }
            } else if (t.tag === 6) t.stateNode.nodeValue = n ? "" : t.memoizedProps;
            else if ((t.tag !== 23 && t.tag !== 24 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e) break;
            for(; t.sibling === null;){
                if (t.return === null || t.return === e) return;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        }
    }
    function Ho1(e, n) {
        if (Xe1 && typeof Xe1.onCommitFiberUnmount == "function") try {
            Xe1.onCommitFiberUnmount(ci1, n);
        } catch  {}
        switch(n.tag){
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                if (e = n.updateQueue, e !== null && (e = e.lastEffect, e !== null)) {
                    var t = e = e.next;
                    do {
                        var r = t, l = r.destroy;
                        if (r = r.tag, l !== void 0) if ((r & 4) !== 0) gs1(n, t);
                        else {
                            r = n;
                            try {
                                l();
                            } catch (i) {
                                Re2(r, i);
                            }
                        }
                        t = t.next;
                    }while (t !== e)
                }
                break;
            case 1:
                if (Vo1(n), e = n.stateNode, typeof e.componentWillUnmount == "function") try {
                    e.props = n.memoizedProps, e.state = n.memoizedState, e.componentWillUnmount();
                } catch (i) {
                    Re2(n, i);
                }
                break;
            case 5:
                Vo1(n);
                break;
            case 4:
                fs1(e, n);
        }
    }
    function Wo1(e) {
        e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null;
    }
    function Ao1(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function $o1(e) {
        e: {
            for(var n = e.return; n !== null;){
                if (Ao1(n)) break e;
                n = n.return;
            }
            throw Error(v3(160));
        }
        var t = n;
        switch(n = t.stateNode, t.tag){
            case 5:
                var r = !1;
                break;
            case 3:
                n = n.containerInfo, r = !0;
                break;
            case 4:
                n = n.containerInfo, r = !0;
                break;
            default:
                throw Error(v3(161));
        }
        t.flags & 16 && (ut1(n, ""), t.flags &= -17);
        e: n: for(t = e;;){
            for(; t.sibling === null;){
                if (t.return === null || Ao1(t.return)) {
                    t = null;
                    break e;
                }
                t = t.return;
            }
            for(t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;){
                if (t.flags & 2 || t.child === null || t.tag === 4) continue n;
                t.child.return = t, t = t.child;
            }
            if (!(t.flags & 2)) {
                t = t.stateNode;
                break e;
            }
        }
        r ? Ol1(e, t, n) : Ml1(e, t, n);
    }
    function Ol1(e, n, t) {
        var r = e.tag, l = r === 5 || r === 6;
        if (l) e = l ? e.stateNode : e.stateNode.instance, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = er1));
        else if (r !== 4 && (e = e.child, e !== null)) for(Ol1(e, n, t), e = e.sibling; e !== null;)Ol1(e, n, t), e = e.sibling;
    }
    function Ml1(e, n, t) {
        var r = e.tag, l = r === 5 || r === 6;
        if (l) e = l ? e.stateNode : e.stateNode.instance, n ? t.insertBefore(e, n) : t.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(Ml1(e, n, t), e = e.sibling; e !== null;)Ml1(e, n, t), e = e.sibling;
    }
    function fs1(e, n) {
        for(var t = n, r = !1, l, i;;){
            if (!r) {
                r = t.return;
                e: for(;;){
                    if (r === null) throw Error(v3(160));
                    switch(l = r.stateNode, r.tag){
                        case 5:
                            i = !1;
                            break e;
                        case 3:
                            l = l.containerInfo, i = !0;
                            break e;
                        case 4:
                            l = l.containerInfo, i = !0;
                            break e;
                    }
                    r = r.return;
                }
                r = !0;
            }
            if (t.tag === 5 || t.tag === 6) {
                e: for(var o = e, u = t, s = u;;)if (Ho1(o, s), s.child !== null && s.tag !== 4) s.child.return = s, s = s.child;
                else {
                    if (s === u) break e;
                    for(; s.sibling === null;){
                        if (s.return === null || s.return === u) break e;
                        s = s.return;
                    }
                    s.sibling.return = s.return, s = s.sibling;
                }
                i ? (o = l, u = t.stateNode, o.nodeType === 8 ? o.parentNode.removeChild(u) : o.removeChild(u)) : l.removeChild(t.stateNode);
            } else if (t.tag === 4) {
                if (t.child !== null) {
                    l = t.stateNode.containerInfo, i = !0, t.child.return = t, t = t.child;
                    continue;
                }
            } else if (Ho1(e, t), t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === n) break;
            for(; t.sibling === null;){
                if (t.return === null || t.return === n) return;
                t = t.return, t.tag === 4 && (r = !1);
            }
            t.sibling.return = t.return, t = t.sibling;
        }
    }
    function Jr1(e, n) {
        switch(n.tag){
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                var t = n.updateQueue;
                if (t = t !== null ? t.lastEffect : null, t !== null) {
                    var r = t = t.next;
                    do (r.tag & 3) === 3 && (e = r.destroy, r.destroy = void 0, e !== void 0 && e()), r = r.next;
                    while (r !== t)
                }
                return;
            case 1:
                return;
            case 5:
                if (t = n.stateNode, t != null) {
                    r = n.memoizedProps;
                    var l = e !== null ? e.memoizedProps : r;
                    e = n.type;
                    var i = n.updateQueue;
                    if (n.updateQueue = null, i !== null) {
                        for(t[nr1] = r, e === "input" && r.type === "radio" && r.name != null && qo1(t, r), fl1(e, l), n = fl1(e, r), l = 0; l < i.length; l += 2){
                            var o = i[l], u = i[l + 1];
                            o === "style" ? ru(t, u) : o === "dangerouslySetInnerHTML" ? nu(t, u) : o === "children" ? ut1(t, u) : Al1(t, o, u, n);
                        }
                        switch(e){
                            case "input":
                                rl1(t, r);
                                break;
                            case "textarea":
                                bo1(t, r);
                                break;
                            case "select":
                                e = t._wrapperState.wasMultiple, t._wrapperState.wasMultiple = !!r.multiple, i = r.value, i != null ? pn1(t, !!r.multiple, i, !1) : e !== !!r.multiple && (r.defaultValue != null ? pn1(t, !!r.multiple, r.defaultValue, !0) : pn1(t, !!r.multiple, r.multiple ? [] : "", !1));
                        }
                    }
                }
                return;
            case 6:
                if (n.stateNode === null) throw Error(v3(162));
                n.stateNode.nodeValue = n.memoizedProps;
                return;
            case 3:
                t = n.stateNode, t.hydrate && (t.hydrate = !1, pu(t.containerInfo));
                return;
            case 12:
                return;
            case 13:
                n.memoizedState !== null && (Ni1 = A3(), Bo1(n.child, !0)), Qo1(n);
                return;
            case 19:
                Qo1(n);
                return;
            case 17:
                return;
            case 23:
            case 24:
                Bo1(n, n.memoizedState !== null);
                return;
        }
        throw Error(v3(163));
    }
    function Qo1(e) {
        var n = e.updateQueue;
        if (n !== null) {
            e.updateQueue = null;
            var t = e.stateNode;
            t === null && (t = e.stateNode = new uf), n.forEach(function(r) {
                var l = Sf.bind(null, e, r);
                t.has(r) || (t.add(r), r.then(l, l));
            });
        }
    }
    function ff(e, n) {
        return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) ? (n = n.memoizedState, n !== null && n.dehydrated === null) : !1;
    }
    var cf = Math.ceil, mr1 = qe2.ReactCurrentDispatcher, Ci1 = qe2.ReactCurrentOwner, x = 0, Y3 = null, j3 = null, $3 = 0, Ze1 = 0, Rl1 = Ve1(0), B3 = 0, Tr1 = null, Tn1 = 0, xt1 = 0, Ln1 = 0, _i1 = 0, Dl1 = null, Ni1 = 0, Il1 = 1 / 0;
    function zn1() {
        Il1 = A3() + 500;
    }
    var g2 = null, hr1 = !1, Fl1 = null, fe2 = null, je2 = !1, rt1 = null, Yn1 = 90, jl1 = [], Ul1 = [], ge3 = null, lt1 = 0, Vl1 = null, $t1 = -1, he3 = 0, Qt1 = 0, it1 = null, Yt = !1;
    function q3() {
        return (x & 48) !== 0 ? A3() : $t1 !== -1 ? $t1 : $t1 = A3();
    }
    function Oe2(e) {
        if (e = e.mode, (e & 2) === 0) return 1;
        if ((e & 4) === 0) return Cn1() === 99 ? 1 : 2;
        if (he3 === 0 && (he3 = Tn1), Ja1.transition !== 0) {
            Qt1 !== 0 && (Qt1 = Dl1 !== null ? Dl1.pendingLanes : 0), e = he3;
            var n = 4186112 & ~Qt1;
            return n &= -n, n === 0 && (e = 4186112 & ~e, n = e & -e, n === 0 && (n = 8192)), n;
        }
        return e = Cn1(), (x & 4) !== 0 && e === 98 ? e = qt1(12, he3) : (e = ea1(e), e = qt1(e, he3)), e;
    }
    function Me3(e, n, t) {
        if (50 < lt1) throw lt1 = 0, Vl1 = null, Error(v3(185));
        if (e = Lr1(e, n), e === null) return null;
        Er1(e, n, t), e === Y3 && (Ln1 |= n, B3 === 4 && wn1(e, $3));
        var r = Cn1();
        n === 1 ? (x & 8) !== 0 && (x & 48) === 0 ? Bl1(e) : (le2(e, t), x === 0 && (zn1(), pe3())) : ((x & 4) === 0 || r !== 98 && r !== 99 || (ge3 === null ? ge3 = new Set([
            e
        ]) : ge3.add(e)), le2(e, t)), Dl1 = e;
    }
    function Lr1(e, n) {
        e.lanes |= n;
        var t = e.alternate;
        for(t !== null && (t.lanes |= n), t = e, e = e.return; e !== null;)e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
        return t.tag === 3 ? t.stateNode : null;
    }
    function le2(e, n) {
        for(var t = e.callbackNode, r = e.suspendedLanes, l = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;){
            var u = 31 - Ie3(o), s = 1 << u, d = i[u];
            if (d === -1) {
                if ((s & r) === 0 || (s & l) !== 0) {
                    d = n, rn1(s);
                    var y10 = L3;
                    i[u] = 10 <= y10 ? d + 250 : 6 <= y10 ? d + 5000 : -1;
                }
            } else d <= n && (e.expiredLanes |= s);
            o &= ~s;
        }
        if (r = ct1(e, e === Y3 ? $3 : 0), n = L3, r === 0) t !== null && (t !== Yr1 && El1(t), e.callbackNode = null, e.callbackPriority = 0);
        else {
            if (t !== null) {
                if (e.callbackPriority === n) return;
                t !== Yr1 && El1(t);
            }
            n === 15 ? (t = Bl1.bind(null, e), me3 === null ? (me3 = [
                t
            ], At1 = di(Nr1, Wu)) : me3.push(t), t = Yr1) : n === 14 ? t = ht1(99, Bl1.bind(null, e)) : (t = na1(n), t = ht1(t, cs1.bind(null, e))), e.callbackPriority = n, e.callbackNode = t;
        }
    }
    function cs1(e) {
        if ($t1 = -1, Qt1 = he3 = 0, (x & 48) !== 0) throw Error(v3(327));
        var n = e.callbackNode;
        if (Be1() && e.callbackNode !== n) return null;
        var t = ct1(e, e === Y3 ? $3 : 0);
        if (t === 0) return null;
        var r = t, l = x;
        x |= 16;
        var i = hs1();
        (Y3 !== e || $3 !== r) && (zn1(), Sn1(e, r));
        do try {
            mf();
            break;
        } catch (u) {
            ms1(e, u);
        }
        while (1)
        if (pi1(), mr1.current = i, x = l, j3 !== null ? r = 0 : (Y3 = null, $3 = 0, r = B3), (Tn1 & Ln1) !== 0) Sn1(e, 0);
        else if (r !== 0) {
            if (r === 2 && (x |= 64, e.hydrate && (e.hydrate = !1, fi1(e.containerInfo)), t = Su(e), t !== 0 && (r = Xn1(e, t))), r === 1) throw n = Tr1, Sn1(e, 0), wn1(e, t), le2(e, A3()), n;
            switch(e.finishedWork = e.current.alternate, e.finishedLanes = t, r){
                case 0:
                case 1:
                    throw Error(v3(345));
                case 2:
                    He1(e);
                    break;
                case 3:
                    if (wn1(e, t), (t & 62914560) === t && (r = Ni1 + 500 - A3(), 10 < r)) {
                        if (ct1(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & t) !== t) {
                            q3(), e.pingedLanes |= e.suspendedLanes & l;
                            break;
                        }
                        e.timeoutHandle = co1(He1.bind(null, e), r);
                        break;
                    }
                    He1(e);
                    break;
                case 4:
                    if (wn1(e, t), (t & 4186112) === t) break;
                    for(r = e.eventTimes, l = -1; 0 < t;){
                        var o = 31 - Ie3(t);
                        i = 1 << o, o = r[o], o > l && (l = o), t &= ~i;
                    }
                    if (t = l, t = A3() - t, t = (120 > t ? 120 : 480 > t ? 480 : 1080 > t ? 1080 : 1920 > t ? 1920 : 3000 > t ? 3000 : 4320 > t ? 4320 : 1960 * cf(t / 1960)) - t, 10 < t) {
                        e.timeoutHandle = co1(He1.bind(null, e), t);
                        break;
                    }
                    He1(e);
                    break;
                case 5:
                    He1(e);
                    break;
                default:
                    throw Error(v3(329));
            }
        }
        return le2(e, A3()), e.callbackNode === n ? cs1.bind(null, e) : null;
    }
    function wn1(e, n) {
        for(n &= ~_i1, n &= ~Ln1, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n;){
            var t = 31 - Ie3(n), r = 1 << t;
            e[t] = -1, n &= ~r;
        }
    }
    function Bl1(e) {
        if ((x & 48) !== 0) throw Error(v3(327));
        if (Be1(), e === Y3 && (e.expiredLanes & $3) !== 0) {
            var n = $3, t = Xn1(e, n);
            (Tn1 & Ln1) !== 0 && (n = ct1(e, n), t = Xn1(e, n));
        } else n = ct1(e, 0), t = Xn1(e, n);
        if (e.tag !== 0 && t === 2 && (x |= 64, e.hydrate && (e.hydrate = !1, fi1(e.containerInfo)), n = Su(e), n !== 0 && (t = Xn1(e, n))), t === 1) throw t = Tr1, Sn1(e, 0), wn1(e, n), le2(e, A3()), t;
        return e.finishedWork = e.current.alternate, e.finishedLanes = n, He1(e), le2(e, A3()), null;
    }
    function df() {
        if (ge3 !== null) {
            var e = ge3;
            ge3 = null, e.forEach(function(n) {
                n.expiredLanes |= 24 & n.pendingLanes, le2(n, A3());
            });
        }
        pe3();
    }
    function ds1(e, n) {
        var t = x;
        x |= 1;
        try {
            return e(n);
        } finally{
            x = t, x === 0 && (zn1(), pe3());
        }
    }
    function ps1(e, n) {
        var t = x;
        x &= -2, x |= 8;
        try {
            return e(n);
        } finally{
            x = t, x === 0 && (zn1(), pe3());
        }
    }
    function jt1(e, n) {
        D3(Rl1, Ze1), Ze1 |= n, Tn1 |= n;
    }
    function Pi1() {
        Ze1 = Rl1.current, O3(Rl1);
    }
    function Sn1(e, n) {
        e.finishedWork = null, e.finishedLanes = 0;
        var t = e.timeoutHandle;
        if (t !== -1 && (e.timeoutHandle = -1, Qa1(t)), j3 !== null) for(t = j3.return; t !== null;){
            var r = t;
            switch(r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && tr1();
                    break;
                case 3:
                    _n1(), O3(Z3), O3(Q3), yi1();
                    break;
                case 5:
                    vi1(r);
                    break;
                case 4:
                    _n1();
                    break;
                case 13:
                    O3(R3);
                    break;
                case 19:
                    O3(R3);
                    break;
                case 10:
                    mi1(r);
                    break;
                case 23:
                case 24:
                    Pi1();
            }
            t = t.return;
        }
        Y3 = e, j3 = Ue2(e.current, null), $3 = Ze1 = Tn1 = n, B3 = 0, Tr1 = null, _i1 = Ln1 = xt1 = 0;
    }
    function ms1(e, n) {
        do {
            var t = j3;
            try {
                if (pi1(), nt1.current = pr1, ar1) {
                    for(var r = I3.memoizedState; r !== null;){
                        var l = r.queue;
                        l !== null && (l.pending = null), r = r.next;
                    }
                    ar1 = !1;
                }
                if (wt1 = 0, V3 = W3 = I3 = null, tt1 = !1, Ci1.current = null, t === null || t.return === null) {
                    B3 = 1, Tr1 = n, j3 = null;
                    break;
                }
                e: {
                    var i = e, o = t.return, u = t, s = n;
                    if (n = $3, u.flags |= 2048, u.firstEffect = u.lastEffect = null, s !== null && typeof s == "object" && typeof s.then == "function") {
                        var d = s;
                        if ((u.mode & 2) === 0) {
                            var y11 = u.alternate;
                            y11 ? (u.updateQueue = y11.updateQueue, u.memoizedState = y11.memoizedState, u.lanes = y11.lanes) : (u.updateQueue = null, u.memoizedState = null);
                        }
                        var C7 = (R3.current & 1) !== 0, h8 = o;
                        do {
                            var S8;
                            if (S8 = h8.tag === 13) {
                                var k8 = h8.memoizedState;
                                if (k8 !== null) S8 = k8.dehydrated !== null;
                                else {
                                    var E = h8.memoizedProps;
                                    S8 = E.fallback === void 0 ? !1 : E.unstable_avoidThisFallback !== !0 ? !0 : !C7;
                                }
                            }
                            if (S8) {
                                var c = h8.updateQueue;
                                if (c === null) {
                                    var a = new Set;
                                    a.add(d), h8.updateQueue = a;
                                } else c.add(d);
                                if ((h8.mode & 2) === 0) {
                                    if (h8.flags |= 64, u.flags |= 16384, u.flags &= -2981, u.tag === 1) if (u.alternate === null) u.tag = 17;
                                    else {
                                        var f = Le3(-1, 1);
                                        f.tag = 2, ze1(u, f);
                                    }
                                    u.lanes |= 1;
                                    break e;
                                }
                                s = void 0, u = n;
                                var p = i.pingCache;
                                if (p === null ? (p = i.pingCache = new of, s = new Set, p.set(d, s)) : (s = p.get(d), s === void 0 && (s = new Set, p.set(d, s))), !s.has(u)) {
                                    s.add(u);
                                    var m = wf.bind(null, i, d, u);
                                    d.then(m, m);
                                }
                                h8.flags |= 4096, h8.lanes = n;
                                break e;
                            }
                            h8 = h8.return;
                        }while (h8 !== null)
                        s = Error((dn1(u.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
                    }
                    B3 !== 5 && (B3 = 2), s = xi1(s, u), h8 = o;
                    do {
                        switch(h8.tag){
                            case 3:
                                i = s, h8.flags |= 4096, n &= -n, h8.lanes |= n;
                                var _ = ss1(h8, i, n);
                                wo1(h8, _);
                                break e;
                            case 1:
                                i = s;
                                var w = h8.type, N6 = h8.stateNode;
                                if ((h8.flags & 64) === 0 && (typeof w.getDerivedStateFromError == "function" || N6 !== null && typeof N6.componentDidCatch == "function" && (fe2 === null || !fe2.has(N6)))) {
                                    h8.flags |= 4096, n &= -n, h8.lanes |= n;
                                    var T6 = as1(h8, i, n);
                                    wo1(h8, T6);
                                    break e;
                                }
                        }
                        h8 = h8.return;
                    }while (h8 !== null)
                }
                ys1(t);
            } catch (P5) {
                n = P5, j3 === t && t !== null && (j3 = t = t.return);
                continue;
            }
            break;
        }while (1)
    }
    function hs1() {
        var e = mr1.current;
        return mr1.current = pr1, e === null ? pr1 : e;
    }
    function Xn1(e, n) {
        var t = x;
        x |= 16;
        var r = hs1();
        Y3 === e && $3 === n || Sn1(e, n);
        do try {
            pf();
            break;
        } catch (l) {
            ms1(e, l);
        }
        while (1)
        if (pi1(), x = t, mr1.current = r, j3 !== null) throw Error(v3(261));
        return Y3 = null, $3 = 0, B3;
    }
    function pf() {
        for(; j3 !== null;)vs1(j3);
    }
    function mf() {
        for(; j3 !== null && !Ka1();)vs1(j3);
    }
    function vs1(e) {
        var n = ws1(e.alternate, e, Ze1);
        e.memoizedProps = e.pendingProps, n === null ? ys1(e) : j3 = n, Ci1.current = null;
    }
    function ys1(e) {
        var n = e;
        do {
            var t = n.alternate;
            if (e = n.return, (n.flags & 2048) === 0) {
                if (t = rf(t, n, Ze1), t !== null) {
                    j3 = t;
                    return;
                }
                if (t = n, t.tag !== 24 && t.tag !== 23 || t.memoizedState === null || (Ze1 & 1073741824) !== 0 || (t.mode & 4) === 0) {
                    for(var r = 0, l = t.child; l !== null;)r |= l.lanes | l.childLanes, l = l.sibling;
                    t.childLanes = r;
                }
                e !== null && (e.flags & 2048) === 0 && (e.firstEffect === null && (e.firstEffect = n.firstEffect), n.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = n.firstEffect), e.lastEffect = n.lastEffect), 1 < n.flags && (e.lastEffect !== null ? e.lastEffect.nextEffect = n : e.firstEffect = n, e.lastEffect = n));
            } else {
                if (t = lf(n), t !== null) {
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
        }while (n !== null)
        B3 === 0 && (B3 = 5);
    }
    function He1(e) {
        var n = Cn1();
        return Ge1(99, hf.bind(null, e, n)), null;
    }
    function hf(e, n) {
        do Be1();
        while (rt1 !== null)
        if ((x & 48) !== 0) throw Error(v3(327));
        var t = e.finishedWork;
        if (t === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(v3(177));
        e.callbackNode = null;
        var r = t.lanes | t.childLanes, l = r, i = e.pendingLanes & ~l;
        e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= l, e.mutableReadLanes &= l, e.entangledLanes &= l, l = e.entanglements;
        for(var o = e.eventTimes, u = e.expirationTimes; 0 < i;){
            var s = 31 - Ie3(i), d = 1 << s;
            l[s] = 0, o[s] = -1, u[s] = -1, i &= ~d;
        }
        if (ge3 !== null && (r & 24) === 0 && ge3.has(e) && ge3.delete(e), e === Y3 && (j3 = Y3 = null, $3 = 0), 1 < t.flags ? t.lastEffect !== null ? (t.lastEffect.nextEffect = t, r = t.firstEffect) : r = t : r = t.firstEffect, r !== null) {
            if (l = x, x |= 32, Ci1.current = null, Ar1 = Vt1, o = io1(), vl1(o)) {
                if ("selectionStart" in o) u = {
                    start: o.selectionStart,
                    end: o.selectionEnd
                };
                else e: if (u = (u = o.ownerDocument) && u.defaultView || window, (d = u.getSelection && u.getSelection()) && d.rangeCount !== 0) {
                    u = d.anchorNode, i = d.anchorOffset, s = d.focusNode, d = d.focusOffset;
                    try {
                        u.nodeType, s.nodeType;
                    } catch  {
                        u = null;
                        break e;
                    }
                    var y12 = 0, C8 = -1, h9 = -1, S9 = 0, k9 = 0, E = o, c = null;
                    n: for(;;){
                        for(var a; E !== u || i !== 0 && E.nodeType !== 3 || (C8 = y12 + i), E !== s || d !== 0 && E.nodeType !== 3 || (h9 = y12 + d), E.nodeType === 3 && (y12 += E.nodeValue.length), (a = E.firstChild) !== null;)c = E, E = a;
                        for(;;){
                            if (E === o) break n;
                            if (c === u && ++S9 === i && (C8 = y12), c === s && ++k9 === d && (h9 = y12), (a = E.nextSibling) !== null) break;
                            E = c, c = E.parentNode;
                        }
                        E = a;
                    }
                    u = C8 === -1 || h9 === -1 ? null : {
                        start: C8,
                        end: h9
                    };
                } else u = null;
                u = u || {
                    start: 0,
                    end: 0
                };
            } else u = null;
            $r1 = {
                focusedElem: o,
                selectionRange: u
            }, Vt1 = !1, it1 = null, Yt = !1, g2 = r;
            do try {
                vf();
            } catch (P6) {
                if (g2 === null) throw Error(v3(330));
                Re2(g2, P6), g2 = g2.nextEffect;
            }
            while (g2 !== null)
            it1 = null, g2 = r;
            do try {
                for(o = e; g2 !== null;){
                    var f = g2.flags;
                    if (f & 16 && ut1(g2.stateNode, ""), f & 128) {
                        var p = g2.alternate;
                        if (p !== null) {
                            var m = p.ref;
                            m !== null && (typeof m == "function" ? m(null) : m.current = null);
                        }
                    }
                    switch(f & 1038){
                        case 2:
                            $o1(g2), g2.flags &= -3;
                            break;
                        case 6:
                            $o1(g2), g2.flags &= -3, Jr1(g2.alternate, g2);
                            break;
                        case 1024:
                            g2.flags &= -1025;
                            break;
                        case 1028:
                            g2.flags &= -1025, Jr1(g2.alternate, g2);
                            break;
                        case 4:
                            Jr1(g2.alternate, g2);
                            break;
                        case 8:
                            u = g2, fs1(o, u);
                            var _ = u.alternate;
                            Wo1(u), _ !== null && Wo1(_);
                    }
                    g2 = g2.nextEffect;
                }
            } catch (P1) {
                if (g2 === null) throw Error(v3(330));
                Re2(g2, P1), g2 = g2.nextEffect;
            }
            while (g2 !== null)
            if (m = $r1, p = io1(), f = m.focusedElem, o = m.selectionRange, p !== f && f && f.ownerDocument && Tu(f.ownerDocument.documentElement, f)) {
                for(o !== null && vl1(f) && (p = o.start, m = o.end, m === void 0 && (m = p), ("selectionStart" in f) ? (f.selectionStart = p, f.selectionEnd = Math.min(m, f.value.length)) : (m = (p = f.ownerDocument || document) && p.defaultView || window, m.getSelection && (m = m.getSelection(), u = f.textContent.length, _ = Math.min(o.start, u), o = o.end === void 0 ? _ : Math.min(o.end, u), !m.extend && _ > o && (u = o, o = _, _ = u), u = lo1(f, _), i = lo1(f, o), u && i && (m.rangeCount !== 1 || m.anchorNode !== u.node || m.anchorOffset !== u.offset || m.focusNode !== i.node || m.focusOffset !== i.offset) && (p = p.createRange(), p.setStart(u.node, u.offset), m.removeAllRanges(), _ > o ? (m.addRange(p), m.extend(i.node, i.offset)) : (p.setEnd(i.node, i.offset), m.addRange(p)))))), p = [], m = f; m = m.parentNode;)m.nodeType === 1 && p.push({
                    element: m,
                    left: m.scrollLeft,
                    top: m.scrollTop
                });
                for(typeof f.focus == "function" && f.focus(), f = 0; f < p.length; f++)m = p[f], m.element.scrollLeft = m.left, m.element.scrollTop = m.top;
            }
            Vt1 = !!Ar1, $r1 = Ar1 = null, e.current = t, g2 = r;
            do try {
                for(f = e; g2 !== null;){
                    var w = g2.flags;
                    if (w & 36 && af(f, g2.alternate, g2), w & 128) {
                        p = void 0;
                        var N7 = g2.ref;
                        if (N7 !== null) {
                            var T7 = g2.stateNode;
                            switch(g2.tag){
                                case 5:
                                    p = T7;
                                    break;
                                default:
                                    p = T7;
                            }
                            typeof N7 == "function" ? N7(p) : N7.current = p;
                        }
                    }
                    g2 = g2.nextEffect;
                }
            } catch (P2) {
                if (g2 === null) throw Error(v3(330));
                Re2(g2, P2), g2 = g2.nextEffect;
            }
            while (g2 !== null)
            g2 = null, Za1(), x = l;
        } else e.current = t;
        if (je2) je2 = !1, rt1 = e, Yn1 = n;
        else for(g2 = r; g2 !== null;)n = g2.nextEffect, g2.nextEffect = null, g2.flags & 8 && (w = g2, w.sibling = null, w.stateNode = null), g2 = n;
        if (r = e.pendingLanes, r === 0 && (fe2 = null), r === 1 ? e === Vl1 ? lt1++ : (lt1 = 0, Vl1 = e) : lt1 = 0, t = t.stateNode, Xe1 && typeof Xe1.onCommitFiberRoot == "function") try {
            Xe1.onCommitFiberRoot(ci1, t, void 0, (t.current.flags & 64) === 64);
        } catch  {}
        if (le2(e, A3()), hr1) throw hr1 = !1, e = Fl1, Fl1 = null, e;
        return (x & 8) !== 0 || pe3(), null;
    }
    function vf() {
        for(; g2 !== null;){
            var e = g2.alternate;
            Yt || it1 === null || ((g2.flags & 8) !== 0 ? Qi1(g2, it1) && (Yt = !0) : g2.tag === 13 && ff(e, g2) && Qi1(g2, it1) && (Yt = !0));
            var n = g2.flags;
            (n & 256) !== 0 && sf(e, g2), (n & 512) === 0 || je2 || (je2 = !0, ht1(97, function() {
                return Be1(), null;
            })), g2 = g2.nextEffect;
        }
    }
    function Be1() {
        if (Yn1 !== 90) {
            var e = 97 < Yn1 ? 97 : Yn1;
            return Yn1 = 90, Ge1(e, gf);
        }
        return !1;
    }
    function yf(e, n) {
        jl1.push(n, e), je2 || (je2 = !0, ht1(97, function() {
            return Be1(), null;
        }));
    }
    function gs1(e, n) {
        Ul1.push(n, e), je2 || (je2 = !0, ht1(97, function() {
            return Be1(), null;
        }));
    }
    function gf() {
        if (rt1 === null) return !1;
        var e = rt1;
        if (rt1 = null, (x & 48) !== 0) throw Error(v3(331));
        var n = x;
        x |= 32;
        var t = Ul1;
        Ul1 = [];
        for(var r = 0; r < t.length; r += 2){
            var l = t[r], i = t[r + 1], o = l.destroy;
            if (l.destroy = void 0, typeof o == "function") try {
                o();
            } catch (s) {
                if (i === null) throw Error(v3(330));
                Re2(i, s);
            }
        }
        for(t = jl1, jl1 = [], r = 0; r < t.length; r += 2){
            l = t[r], i = t[r + 1];
            try {
                var u = l.create;
                l.destroy = u();
            } catch (s) {
                if (i === null) throw Error(v3(330));
                Re2(i, s);
            }
        }
        for(u = e.current.firstEffect; u !== null;)e = u.nextEffect, u.nextEffect = null, u.flags & 8 && (u.sibling = null, u.stateNode = null), u = e;
        return x = n, pe3(), !0;
    }
    function Yo1(e, n, t) {
        n = xi1(t, n), n = ss1(e, n, 1), ze1(e, n), n = q3(), e = Lr1(e, 1), e !== null && (Er1(e, 1, n), le2(e, n));
    }
    function Re2(e, n) {
        if (e.tag === 3) Yo1(e, e, n);
        else for(var t = e.return; t !== null;){
            if (t.tag === 3) {
                Yo1(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (fe2 === null || !fe2.has(r))) {
                    e = xi1(n, e);
                    var l = as1(t, e, 1);
                    if (ze1(t, l), l = q3(), t = Lr1(t, 1), t !== null) Er1(t, 1, l), le2(t, l);
                    else if (typeof r.componentDidCatch == "function" && (fe2 === null || !fe2.has(r))) try {
                        r.componentDidCatch(n, e);
                    } catch  {}
                    break;
                }
            }
            t = t.return;
        }
    }
    function wf(e, n, t) {
        var r = e.pingCache;
        r !== null && r.delete(n), n = q3(), e.pingedLanes |= e.suspendedLanes & t, Y3 === e && ($3 & t) === t && (B3 === 4 || B3 === 3 && ($3 & 62914560) === $3 && 500 > A3() - Ni1 ? Sn1(e, 0) : _i1 |= t), le2(e, n);
    }
    function Sf(e, n) {
        var t = e.stateNode;
        t !== null && t.delete(n), n = 0, n === 0 && (n = e.mode, (n & 2) === 0 ? n = 1 : (n & 4) === 0 ? n = Cn1() === 99 ? 1 : 2 : (he3 === 0 && (he3 = Tn1), n = ln1(62914560 & ~he3), n === 0 && (n = 4194304))), t = q3(), e = Lr1(e, n), e !== null && (Er1(e, n, t), le2(e, t));
    }
    var ws1;
    ws1 = function(e, n, t) {
        var r = n.lanes;
        if (e !== null) if (e.memoizedProps !== n.pendingProps || Z3.current) ue3 = !0;
        else if ((t & r) !== 0) ue3 = (e.flags & 16384) !== 0;
        else {
            switch(ue3 = !1, n.tag){
                case 3:
                    Mo1(n), Kr1();
                    break;
                case 5:
                    xo1(n);
                    break;
                case 1:
                    J3(n.type) && Wt1(n);
                    break;
                case 4:
                    Cl1(n, n.stateNode.containerInfo);
                    break;
                case 10:
                    r = n.memoizedProps.value;
                    var l = n.type._context;
                    D3(rr1, l._currentValue), l._currentValue = r;
                    break;
                case 13:
                    if (n.memoizedState !== null) return (t & n.child.childLanes) !== 0 ? Ro1(e, n, t) : (D3(R3, R3.current & 1), n = ye3(e, n, t), n !== null ? n.sibling : null);
                    D3(R3, R3.current & 1);
                    break;
                case 19:
                    if (r = (t & n.childLanes) !== 0, (e.flags & 64) !== 0) {
                        if (r) return Uo1(e, n, t);
                        n.flags |= 64;
                    }
                    if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), D3(R3, R3.current), r) break;
                    return null;
                case 23:
                case 24:
                    return n.lanes = 0, Gr1(e, n, t);
            }
            return ye3(e, n, t);
        }
        else ue3 = !1;
        switch(n.lanes = 0, n.tag){
            case 2:
                if (r = n.type, e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), e = n.pendingProps, l = xn1(n, Q3.current), yn1(n, t), l = wi1(null, n, r, e, l, t), n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0) {
                    if (n.tag = 1, n.memoizedState = null, n.updateQueue = null, J3(r)) {
                        var i = !0;
                        Wt1(n);
                    } else i = !1;
                    n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, hi1(n);
                    var o = r.getDerivedStateFromProps;
                    typeof o == "function" && or1(n, r, o, e), l.updater = Pr1, n.stateNode = l, l._reactInternals = n, xl1(n, r, e, t), n = Tl1(null, n, r, !0, i, t);
                } else n.tag = 0, G3(null, n, l, t), n = n.child;
                return n;
            case 16:
                l = n.elementType;
                e: {
                    switch(e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), e = n.pendingProps, i = l._init, l = i(l._payload), n.type = l, i = n.tag = kf(l), e = oe3(l, e), i){
                        case 0:
                            n = Pl1(null, n, l, e, t);
                            break e;
                        case 1:
                            n = Oo1(null, n, l, e, t);
                            break e;
                        case 11:
                            n = Lo1(null, n, l, e, t);
                            break e;
                        case 14:
                            n = zo1(null, n, l, oe3(l.type, e), r, t);
                            break e;
                    }
                    throw Error(v3(306, l, ""));
                }
                return n;
            case 0:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : oe3(r, l), Pl1(e, n, r, l, t);
            case 1:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : oe3(r, l), Oo1(e, n, r, l, t);
            case 3:
                if (Mo1(n), r = n.updateQueue, e === null || r === null) throw Error(v3(282));
                if (r = n.pendingProps, l = n.memoizedState, l = l !== null ? l.element : null, $u(e, n), vt1(n, r, null, t), r = n.memoizedState.element, r === l) Kr1(), n = ye3(e, n, t);
                else {
                    if (l = n.stateNode, (i = l.hydrate) && (_e3 = vn1(n.stateNode.containerInfo.firstChild), ve3 = n, i = de3 = !0), i) {
                        if (e = l.mutableSourceEagerHydrationData, e != null) for(l = 0; l < e.length; l += 2)i = e[l], i._workInProgressVersionPrimary = e[l + 1], gn1.push(i);
                        for(t = Ku(n, null, r, t), n.child = t; t;)t.flags = t.flags & -3 | 1024, t = t.sibling;
                    } else G3(e, n, r, t), Kr1();
                    n = n.child;
                }
                return n;
            case 5:
                return xo1(n), e === null && _l1(n), r = n.type, l = n.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, wl1(r, l) ? o = null : i !== null && wl1(r, i) && (n.flags |= 16), ls1(e, n), G3(e, n, o, t), n.child;
            case 6:
                return e === null && _l1(n), null;
            case 13:
                return Ro1(e, n, t);
            case 4:
                return Cl1(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = ur1(n, null, r, t) : G3(e, n, r, t), n.child;
            case 11:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : oe3(r, l), Lo1(e, n, r, l, t);
            case 7:
                return G3(e, n, n.pendingProps, t), n.child;
            case 8:
                return G3(e, n, n.pendingProps.children, t), n.child;
            case 12:
                return G3(e, n, n.pendingProps.children, t), n.child;
            case 10:
                e: {
                    r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value;
                    var u = n.type._context;
                    if (D3(rr1, u._currentValue), u._currentValue = i, o !== null) if (u = o.value, i = ee3(u, i) ? 0 : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(u, i) : 1073741823) | 0, i === 0) {
                        if (o.children === l.children && !Z3.current) {
                            n = ye3(e, n, t);
                            break e;
                        }
                    } else for(u = n.child, u !== null && (u.return = n); u !== null;){
                        var s = u.dependencies;
                        if (s !== null) {
                            o = u.child;
                            for(var d = s.firstContext; d !== null;){
                                if (d.context === r && (d.observedBits & i) !== 0) {
                                    u.tag === 1 && (d = Le3(-1, t & -t), d.tag = 2, ze1(u, d)), u.lanes |= t, d = u.alternate, d !== null && (d.lanes |= t), Au(u.return, t), s.lanes |= t;
                                    break;
                                }
                                d = d.next;
                            }
                        } else o = u.tag === 10 && u.type === n.type ? null : u.child;
                        if (o !== null) o.return = u;
                        else for(o = u; o !== null;){
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
                    G3(e, n, l.children, t), n = n.child;
                }
                return n;
            case 9:
                return l = n.type, i = n.pendingProps, r = i.children, yn1(n, t), l = re3(l, i.unstable_observedBits), r = r(l), n.flags |= 1, G3(e, n, r, t), n.child;
            case 14:
                return l = n.type, i = oe3(l, n.pendingProps), i = oe3(l.type, i), zo1(e, n, l, i, r, t);
            case 15:
                return rs1(e, n, n.type, n.pendingProps, r, t);
            case 17:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : oe3(r, l), e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), n.tag = 1, J3(r) ? (e = !0, Wt1(n)) : e = !1, yn1(n, t), Yu(n, r, l), xl1(n, r, l, t), Tl1(null, n, r, !0, e, t);
            case 19:
                return Uo1(e, n, t);
            case 23:
                return Gr1(e, n, t);
            case 24:
                return Gr1(e, n, t);
        }
        throw Error(v3(156, n.tag));
    };
    function Ef(e, n, t, r) {
        this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function ne3(e, n, t, r) {
        return new Ef(e, n, t, r);
    }
    function Ti1(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function kf(e) {
        if (typeof e == "function") return Ti1(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === gr1) return 11;
            if (e === wr1) return 14;
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
    function Xt(e, n, t, r, l, i) {
        var o = 2;
        if (r = e, typeof e == "function") Ti1(e) && (o = 1);
        else if (typeof e == "string") o = 5;
        else e: switch(e){
            case ke3:
                return En1(t.children, l, i, n);
            case Go1:
                o = 8, l |= 16;
                break;
            case $l1:
                o = 8, l |= 1;
                break;
            case Kn1:
                return e = ne3(12, t, n, l | 8), e.elementType = Kn1, e.type = Kn1, e.lanes = i, e;
            case Gn1:
                return e = ne3(13, t, n, l), e.type = Gn1, e.elementType = Gn1, e.lanes = i, e;
            case Kt:
                return e = ne3(19, t, n, l), e.elementType = Kt, e.lanes = i, e;
            case Zl1:
                return Li1(t, l, i, n);
            case nl1:
                return e = ne3(24, t, n, l), e.elementType = nl1, e.lanes = i, e;
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case Ql1:
                        o = 10;
                        break e;
                    case Yl1:
                        o = 9;
                        break e;
                    case gr1:
                        o = 11;
                        break e;
                    case wr1:
                        o = 14;
                        break e;
                    case Xl1:
                        o = 16, r = null;
                        break e;
                    case Kl1:
                        o = 22;
                        break e;
                }
                throw Error(v3(130, e == null ? e : typeof e, ""));
        }
        return n = ne3(o, t, n, l), n.elementType = e, n.type = r, n.lanes = i, n;
    }
    function En1(e, n, t, r) {
        return e = ne3(7, e, r, n), e.lanes = t, e;
    }
    function Li1(e, n, t, r) {
        return e = ne3(23, e, r, n), e.elementType = Zl1, e.lanes = t, e;
    }
    function qr1(e, n, t) {
        return e = ne3(6, e, null, n), e.lanes = t, e;
    }
    function br1(e, n, t) {
        return n = ne3(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, n;
    }
    function xf(e, n, t) {
        this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = t, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = jr1(0), this.expirationTimes = jr1(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jr1(0), this.mutableSourceEagerHydrationData = null;
    }
    function Cf(e, n, t) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: We1,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: n,
            implementation: t
        };
    }
    function vr1(e, n, t, r) {
        var l = n.current, i = q3(), o = Oe2(l);
        e: if (t) {
            t = t._reactInternals;
            n: {
                if (be2(t) !== t || t.tag !== 1) throw Error(v3(170));
                var u = t;
                do {
                    switch(u.tag){
                        case 3:
                            u = u.stateNode.context;
                            break n;
                        case 1:
                            if (J3(u.type)) {
                                u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                break n;
                            }
                    }
                    u = u.return;
                }while (u !== null)
                throw Error(v3(171));
            }
            if (t.tag === 1) {
                var s = t.type;
                if (J3(s)) {
                    t = Fu(t, s, u);
                    break e;
                }
            }
            t = u;
        } else t = Fe2;
        return n.context === null ? n.context = t : n.pendingContext = t, n = Le3(i, o), n.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (n.callback = r), ze1(l, n), Me3(l, o, i), o;
    }
    function el1(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function Xo1(e, n) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var t = e.retryLane;
            e.retryLane = t !== 0 && t < n ? t : n;
        }
    }
    function zi1(e, n) {
        Xo1(e, n), (e = e.alternate) && Xo1(e, n);
    }
    function _f() {
        return null;
    }
    function Oi1(e, n, t) {
        var r = t != null && t.hydrationOptions != null && t.hydrationOptions.mutableSources || null;
        if (t = new xf(e, n, t != null && t.hydrate === !0), n = ne3(3, null, null, n === 2 ? 7 : n === 1 ? 3 : 0), t.current = n, n.stateNode = t, hi1(n), e[Pn1] = t.current, Ou(e.nodeType === 8 ? e.parentNode : e), r) for(e = 0; e < r.length; e++){
            n = r[e];
            var l = n._getVersion;
            l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
                n,
                l
            ] : t.mutableSourceEagerHydrationData.push(n, l);
        }
        this._internalRoot = t;
    }
    Oi1.prototype.render = function(e) {
        vr1(e, this._internalRoot, null, null);
    };
    Oi1.prototype.unmount = function() {
        var e = this._internalRoot, n = e.containerInfo;
        vr1(null, e, null, function() {
            n[Pn1] = null;
        });
    };
    function Ct1(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Nf(e, n) {
        if (n || (n = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, n = !(!n || n.nodeType !== 1 || !n.hasAttribute("data-reactroot"))), !n) for(var t; t = e.lastChild;)e.removeChild(t);
        return new Oi1(e, 0, n ? {
            hydrate: !0
        } : void 0);
    }
    function zr1(e, n, t, r, l) {
        var i = t._reactRootContainer;
        if (i) {
            var o = i._internalRoot;
            if (typeof l == "function") {
                var u = l;
                l = function() {
                    var d = el1(o);
                    u.call(d);
                };
            }
            vr1(n, o, e, l);
        } else {
            if (i = t._reactRootContainer = Nf(t, r), o = i._internalRoot, typeof l == "function") {
                var s = l;
                l = function() {
                    var d = el1(o);
                    s.call(d);
                };
            }
            ps1(function() {
                vr1(n, o, e, l);
            });
        }
        return el1(o);
    }
    fu = function(e) {
        if (e.tag === 13) {
            var n = q3();
            Me3(e, 4, n), zi1(e, 4);
        }
    };
    ni1 = function(e) {
        if (e.tag === 13) {
            var n = q3();
            Me3(e, 67108864, n), zi1(e, 67108864);
        }
    };
    cu = function(e) {
        if (e.tag === 13) {
            var n = q3(), t = Oe2(e);
            Me3(e, t, n), zi1(e, t);
        }
    };
    du = function(e, n) {
        return n();
    };
    cl1 = function(e, n, t) {
        switch(n){
            case "input":
                if (rl1(e, t), n = t.name, t.type === "radio" && n != null) {
                    for(t = e; t.parentNode;)t = t.parentNode;
                    for(t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++){
                        var r = t[n];
                        if (r !== e && r.form === e.form) {
                            var l = _r1(r);
                            if (!l) throw Error(v3(90));
                            Jo1(r), rl1(r, l);
                        }
                    }
                }
                break;
            case "textarea":
                bo1(e, t);
                break;
            case "select":
                n = t.value, n != null && pn1(e, !!t.multiple, n, !1);
        }
    };
    ql1 = ds1;
    ou = function(e, n, t, r, l) {
        var i = x;
        x |= 4;
        try {
            return Ge1(98, e.bind(null, n, t, r, l));
        } finally{
            x = i, x === 0 && (zn1(), pe3());
        }
    };
    bl1 = function() {
        (x & 49) === 0 && (df(), Be1());
    };
    uu = function(e, n) {
        var t = x;
        x |= 2;
        try {
            return e(n);
        } finally{
            x = t, x === 0 && (zn1(), pe3());
        }
    };
    function Ss1(e, n) {
        var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Ct1(n)) throw Error(v3(200));
        return Cf(e, n, null, t);
    }
    var Pf = {
        Events: [
            Et1,
            an1,
            _r1,
            lu,
            iu,
            Be1,
            {
                current: !1
            }
        ]
    }, Hn1 = {
        findFiberByHostInstance: $e2,
        bundleType: 0,
        version: "17.0.2",
        rendererPackageName: "react-dom"
    }, Tf = {
        bundleType: Hn1.bundleType,
        version: Hn1.version,
        rendererPackageName: Hn1.rendererPackageName,
        rendererConfig: Hn1.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: qe2.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = au(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Hn1.findFiberByHostInstance || _f,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (Wn1 = __REACT_DEVTOOLS_GLOBAL_HOOK__, !Wn1.isDisabled && Wn1.supportsFiber)) try {
        ci1 = Wn1.inject(Tf), Xe1 = Wn1;
    } catch  {}
    var Wn1;
    ie3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pf;
    ie3.createPortal = Ss1;
    ie3.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var n = e._reactInternals;
        if (n === void 0) throw typeof e.render == "function" ? Error(v3(188)) : Error(v3(268, Object.keys(e)));
        return e = au(n), e = e === null ? null : e.stateNode, e;
    };
    ie3.flushSync = function(e, n) {
        var t = x;
        if ((t & 48) !== 0) return e(n);
        x |= 1;
        try {
            if (e) return Ge1(99, e.bind(null, n));
        } finally{
            x = t, pe3();
        }
    };
    ie3.hydrate = function(e, n, t) {
        if (!Ct1(n)) throw Error(v3(200));
        return zr1(null, e, n, !0, t);
    };
    ie3.render = function(e, n, t) {
        if (!Ct1(n)) throw Error(v3(200));
        return zr1(null, e, n, !1, t);
    };
    ie3.unmountComponentAtNode = function(e) {
        if (!Ct1(e)) throw Error(v3(40));
        return e._reactRootContainer ? (ps1(function() {
            zr1(null, null, e, !1, function() {
                e._reactRootContainer = null, e[Pn1] = null;
            });
        }), !0) : !1;
    };
    ie3.unstable_batchedUpdates = ds1;
    ie3.unstable_createPortal = function(e, n) {
        return Ss1(e, n, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
    };
    ie3.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
        if (!Ct1(t)) throw Error(v3(200));
        if (e == null || e._reactInternals === void 0) throw Error(v3(38));
        return zr1(e, n, t, !1, r);
    };
    ie3.version = "17.0.2";
});
var Mi = Ri((Rf, xs1)=>{
    "use strict";
    function ks1() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ks1);
        } catch (e) {
            console.error(e);
        }
    }
    ks1(), xs1.exports = Es();
});
var Cs = Di(Mi()), _s = Di(Mi()), { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Df , createPortal: If , findDOMNode: Ff , flushSync: jf , hydrate: Uf , render: Vf , unmountComponentAtNode: Bf , unstable_batchedUpdates: Hf , unstable_createPortal: Wf , unstable_renderSubtreeIntoContainer: Af , version: $f  } = _s, { default: Lf , ...zf } = _s, Qf = (Cs.default ?? Lf) ?? zf;
class Allocation extends Ue.Component {
    constructor(props){
        super(props);
        this.formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    }
    formatter;
    render() {
        return Ue.createElement("div", null, Ue.createElement("h2", null, "Portfolio Allocation"), Ue.createElement("ul", null, Ue.createElement("li", null, Ue.createElement("label", {
            htmlFor: "startingBalance",
            className: "slider"
        }, "Total starting balance USD:"), Ue.createElement("input", {
            className: "slider",
            type: "range",
            min: "100000",
            max: "20000000",
            step: "100000",
            id: "startingBalance",
            value: this.props.startingBalance,
            onChange: this.props.onChange
        }), Ue.createElement("span", null, this.formatter.format(this.props.startingBalance))), Ue.createElement("li", null, Ue.createElement("label", {
            htmlFor: "drawdownRate",
            className: "slider"
        }, "Drawdown per Year:"), Ue.createElement("input", {
            className: "slider",
            type: "range",
            min: "0",
            max: "20",
            step: "0.1",
            value: this.props.drawdownRate,
            id: "drawdownRate",
            onChange: this.props.onChange
        }), Ue.createElement("span", null, this.props.drawdownRate, "% == ", this.formatter.format(this.props.startingBalance * (this.props.drawdownRate / 100)), " per year")), Ue.createElement("li", null, Ue.createElement("label", {
            htmlFor: "stocksPercent",
            className: "slider"
        }, "Portfolio Allocation Stocks:"), Ue.createElement("input", {
            className: "slider",
            type: "range",
            min: "0",
            max: "100",
            value: this.props.stocksPercent,
            id: "stocksPercent",
            onChange: this.props.onChange
        }), Ue.createElement("span", null, this.props.stocksPercent, "%")), Ue.createElement("li", null, Ue.createElement("label", {
            htmlFor: "bondsPercent",
            className: "slider"
        }, "Portfolio Allocation Bonds:"), Ue.createElement("input", {
            className: "slider",
            type: "range",
            min: "0",
            max: "100",
            value: this.props.bondsPercent,
            id: "bondsPercent",
            onChange: this.props.onChange
        }), Ue.createElement("span", null, this.props.bondsPercent, "%")), Ue.createElement("li", null, Ue.createElement("label", {
            htmlFor: "cashPercent",
            className: "slider"
        }, "Portfolio Allocation Cash:"), Ue.createElement("input", {
            className: "slider",
            type: "range",
            min: "0",
            max: "100",
            value: this.props.cashPercent,
            id: "cashPercent",
            onChange: this.props.onChange
        }), Ue.createElement("span", null, this.props.cashPercent, "%")), Ue.createElement("li", null, Ue.createElement("label", {
            htmlFor: "simulationRounds",
            className: "slider"
        }, "Simulation Rounds"), Ue.createElement("input", {
            className: "slider",
            type: "range",
            min: "1000",
            max: "100000",
            step: "33000",
            value: this.props.simulationRounds,
            id: "simulationRounds",
            onChange: this.props.onChange
        }), Ue.createElement("span", null, this.props.simulationRounds))), " ");
    }
}
const MONTE_CARLO = {
    historicalData: null,
    MAX_YEARS: 50
};
async function runMonteCarlo(inputs, quantiles) {
    if ("Deno" in window) {
        MONTE_CARLO.historicalData = JSON.parse(await Deno.readTextFile("./data/historicalMarketData.json"));
    } else {
        MONTE_CARLO.historicalData = await (await fetch("./data/historicalMarketData.json")).json();
    }
    let total;
    let error;
    if (isNaN(inputs.withdrawalRate) || inputs.withdrawalRate > 0.2) {
        error = "Invalid withdrawal rate";
    }
    if (isNaN(inputs.savings) || inputs.savings === 0) {
        error = "Invalid savings";
    }
    if (isNaN(inputs.stocks) || isNaN(inputs.bonds) || isNaN(inputs.cash)) {
        error = "Invalid allocation";
    } else {
        total = inputs.stocks + inputs.bonds + inputs.cash;
        if (total > 0) {
            inputs.stocks /= total;
            inputs.bonds /= total;
            inputs.cash /= total;
        } else {
            error = "Invalid allocation";
        }
    }
    if (error === undefined) {
        trace("savings: " + inputs.savings + " withdrawalRate: " + inputs.withdrawalRate + " stocks: " + inputs.stocks + " bonds: " + inputs.bonds + " cash: " + inputs.cash);
        const trials = simulateDecumulation(inputs);
        trace("Simulation complete, computing stats.");
        const simulationStats = computeStats(inputs, trials, quantiles);
        return simulationStats;
    } else {
        trace("SIMULATION FAILED");
        trace(error);
    }
    return null;
}
function trace(msg) {
    try {
        if (typeof console === "undefined") {
            return;
        }
        console.log(msg);
    } catch (_err) {}
}
function simulateDecumulation(inputs) {
    if (MONTE_CARLO.historicalData === null) throw "Historical data not initialized";
    const trials = {};
    const initialWithdrawal = inputs.savings * inputs.withdrawalRate;
    for(let y13 = 1; y13 <= MONTE_CARLO.MAX_YEARS; y13++){
        trials[y13] = {};
    }
    for(let trial = 0; trial < inputs.simulationRounds; trial++){
        let balance = inputs.savings;
        let withdrawal = initialWithdrawal;
        for(let year = 1; year <= MONTE_CARLO.MAX_YEARS; year++){
            const randomYear = Math.floor(Math.random() * MONTE_CARLO.historicalData.length);
            withdrawal *= 1 + MONTE_CARLO.historicalData[randomYear].cpi;
            const startingBalance = balance;
            const arr = MONTE_CARLO.historicalData[randomYear].stocks * inputs.stocks + MONTE_CARLO.historicalData[randomYear].bonds * inputs.bonds + MONTE_CARLO.historicalData[randomYear].cash * inputs.cash;
            if (balance < withdrawal) {
                balance -= withdrawal;
            } else {
                balance = (balance - withdrawal) * (1 + arr);
            }
            trials[year][trial] = {
                startingBalance: startingBalance,
                withdrawal: withdrawal,
                endingBalance: balance,
                growthRate: arr,
                cumulativeInflation: withdrawal / initialWithdrawal,
                endingBalanceTodaysDollars: balance / (withdrawal / initialWithdrawal)
            };
        }
    }
    return trials;
}
function computeStats(inputs, trials, quantiles) {
    const sortedTrials = [];
    if (quantiles < 2) throw "Quantiles too small.";
    for(let year = 1; year <= MONTE_CARLO.MAX_YEARS; year++){
        const resultsForYear = Object.values(trials[year]);
        resultsForYear.sort((t1, t2)=>{
            return t1.endingBalance - t2.endingBalance;
        });
        sortedTrials.push(resultsForYear);
    }
    const results = {};
    for(let year1 = 0; year1 <= MONTE_CARLO.MAX_YEARS; year1++){
        results[year1] = {
            min: inputs.savings,
            max: inputs.savings,
            mean: inputs.savings,
            median: inputs.savings,
            stddev: 0,
            quantiles: []
        };
        for(let q4 = 1; q4 < quantiles; q4++){
            if (year1 === 0) {
                results[0].quantiles.push(inputs.savings);
            } else {
                let index = Math.floor(inputs.simulationRounds * (q4 / quantiles));
                if (index >= inputs.simulationRounds) {
                    index = inputs.simulationRounds - 1;
                }
                results[year1].quantiles.push(sortedTrials[year1 - 1][index].endingBalance);
            }
        }
        if (year1 === 0) continue;
        results[year1].min = sortedTrials[year1 - 1][0].endingBalance;
        results[year1].median = sortedTrials[year1 - 1][Math.floor(inputs.simulationRounds * 0.5)].endingBalance;
        results[year1].max = sortedTrials[year1 - 1][inputs.simulationRounds - 1].endingBalance;
        const simYearTotal = sortedTrials[year1 - 1].reduce((acc, curr)=>acc + curr.endingBalance
        , 0);
        results[year1].mean = simYearTotal / sortedTrials[year1 - 1].length;
        results[year1].stddev = stddev(sortedTrials[year1 - 1].map((t)=>t.endingBalance
        ));
    }
    return results;
}
function stddev(arr) {
    const mean = arr.reduce((acc, curr)=>{
        return acc + curr;
    }, 0) / arr.length;
    arr = arr.map((k10)=>{
        return (k10 - mean) ** 2;
    });
    const sum = arr.reduce((acc, curr)=>acc + curr
    , 0);
    return Math.sqrt(sum / arr.length);
}
var bi = function() {
    return typeof window > "u" ? function(i) {
        return i();
    } : window.requestAnimationFrame;
}();
function xi(i, t, e) {
    let s = e || ((a)=>Array.prototype.slice.call(a)
    ), n = !1, o = [];
    return function(...a) {
        o = s(a), n || (n = !0, bi.call(window, ()=>{
            n = !1, i.apply(t, o);
        }));
    };
}
function Cs1(i, t) {
    let e;
    return function(...s) {
        return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
    };
}
var Ie2 = (i)=>i === "start" ? "left" : i === "end" ? "right" : "center"
, Y1 = (i, t, e)=>i === "start" ? t : i === "end" ? e : (t + e) / 2
, Ds = (i, t, e, s)=>i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t
;
function ot() {}
var Os1 = function() {
    let i = 0;
    return function() {
        return i++;
    };
}();
function L(i) {
    return i === null || typeof i > "u";
}
function I(i) {
    if (Array.isArray && Array.isArray(i)) return !0;
    let t = Object.prototype.toString.call(i);
    return t.substr(0, 7) === "[object" && t.substr(-6) === "Array]";
}
function O2(i) {
    return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
var N = (i)=>(typeof i == "number" || i instanceof Number) && isFinite(+i)
;
function J1(i, t) {
    return N(i) ? i : t;
}
function P1(i, t) {
    return typeof i > "u" ? t : i;
}
var As = (i, t)=>typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : i / t
, _i = (i, t)=>typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i
;
function B1(i, t, e) {
    if (i && typeof i.call == "function") return i.apply(e, t);
}
function R(i, t, e, s) {
    let n, o, a;
    if (I(i)) if (o = i.length, s) for(n = o - 1; n >= 0; n--)t.call(e, i[n], n);
    else for(n = 0; n < o; n++)t.call(e, i[n], n);
    else if (O2(i)) for(a = Object.keys(i), o = a.length, n = 0; n < o; n++)t.call(e, i[a[n]], a[n]);
}
function ee2(i, t) {
    let e, s, n, o;
    if (!i || !t || i.length !== t.length) return !1;
    for(e = 0, s = i.length; e < s; ++e)if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1;
    return !0;
}
function Re1(i) {
    if (I(i)) return i.map(Re1);
    if (O2(i)) {
        let t = Object.create(null), e = Object.keys(i), s = e.length, n = 0;
        for(; n < s; ++n)t[e[n]] = Re1(i[e[n]]);
        return t;
    }
    return i;
}
function Ls1(i) {
    return [
        "__proto__",
        "prototype",
        "constructor"
    ].indexOf(i) === -1;
}
function So(i, t, e, s) {
    if (!Ls1(i)) return;
    let n = t[i], o = e[i];
    O2(n) && O2(o) ? Rt(n, o, s) : t[i] = Re1(o);
}
function Rt(i, t, e) {
    let s = I(t) ? t : [
        t
    ], n = s.length;
    if (!O2(i)) return i;
    e = e || {};
    let o = e.merger || So;
    for(let a = 0; a < n; ++a){
        if (t = s[a], !O2(t)) continue;
        let r = Object.keys(t);
        for(let l = 0, c = r.length; l < c; ++l)o(r[l], i, t, e);
    }
    return i;
}
function Ft(i, t) {
    return Rt(i, t, {
        merger: Po
    });
}
function Po(i, t, e) {
    if (!Ls1(i)) return;
    let s = t[i], n = e[i];
    O2(s) && O2(n) ? Ft(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Re1(n));
}
var Co = "", Do = ".";
function fs(i, t) {
    let e = i.indexOf(Do, t);
    return e === -1 ? i.length : e;
}
function bt(i, t) {
    if (t === Co) return i;
    let e = 0, s = fs(t, e);
    for(; i && s > e;)i = i[t.substr(e, s - e)], e = s + 1, s = fs(t, e);
    return i;
}
function Be(i) {
    return i.charAt(0).toUpperCase() + i.slice(1);
}
var Z2 = (i)=>typeof i < "u"
, ct = (i)=>typeof i == "function"
, yi = (i, t)=>{
    if (i.size !== t.size) return !1;
    for (let e of i)if (!t.has(e)) return !1;
    return !0;
};
function Ts1(i) {
    return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
var V1 = Math.PI, F = 2 * V1, Oo = F + V1, Ee1 = Number.POSITIVE_INFINITY, Ao = V1 / 180, W1 = V1 / 2, qt = V1 / 4, gs = V1 * 2 / 3, Q1 = Math.log10, st = Math.sign;
function vi(i) {
    let t = Math.round(i);
    i = It(i, t, i / 1000) ? t : i;
    let e = Math.pow(10, Math.floor(Q1(i))), s = i / e;
    return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function Rs1(i) {
    let t = [], e = Math.sqrt(i), s;
    for(s = 1; s < e; s++)i % s === 0 && (t.push(s), t.push(i / s));
    return e === (e | 0) && t.push(e), t.sort((n, o)=>n - o
    ).pop(), t;
}
function zt(i) {
    return !isNaN(parseFloat(i)) && isFinite(i);
}
function It(i, t, e) {
    return Math.abs(i - t) < e;
}
function Es1(i, t) {
    let e = Math.round(i);
    return e - t <= i && e + t >= i;
}
function Mi1(i, t, e) {
    let s, n, o;
    for(s = 0, n = i.length; s < n; s++)o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function et(i) {
    return i * (V1 / 180);
}
function Ve(i) {
    return i * (180 / V1);
}
function wi(i) {
    if (!N(i)) return;
    let t = 1, e = 0;
    for(; Math.round(i * t) / t !== i;)t *= 10, e++;
    return e;
}
function ki(i, t) {
    let e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s), o = Math.atan2(s, e);
    return o < -0.5 * V1 && (o += F), {
        angle: o,
        distance: n
    };
}
function Fe1(i, t) {
    return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function Lo(i, t) {
    return (i - t + Oo) % F - V1;
}
function q(i) {
    return (i % F + F) % F;
}
function Bt(i, t, e, s) {
    let n = q(i), o = q(t), a = q(e), r = q(o - n), l = q(a - n), c = q(n - o), h10 = q(n - a);
    return n === o || n === a || s && o === a || r > l && c < h10;
}
function $(i, t, e) {
    return Math.max(t, Math.min(e, i));
}
function Fs(i) {
    return $(i, -32768, 32767);
}
function at(i, t, e, s = 0.000001) {
    return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s;
}
var De1 = (i)=>i === 0 || i === 1
, ps = (i, t, e)=>-(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * F / e))
, ms = (i, t, e)=>Math.pow(2, -10 * i) * Math.sin((i - t) * F / e) + 1
, Tt = {
    linear: (i)=>i
    ,
    easeInQuad: (i)=>i * i
    ,
    easeOutQuad: (i)=>-i * (i - 2)
    ,
    easeInOutQuad: (i)=>(i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1)
    ,
    easeInCubic: (i)=>i * i * i
    ,
    easeOutCubic: (i)=>(i -= 1) * i * i + 1
    ,
    easeInOutCubic: (i)=>(i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2)
    ,
    easeInQuart: (i)=>i * i * i * i
    ,
    easeOutQuart: (i)=>-((i -= 1) * i * i * i - 1)
    ,
    easeInOutQuart: (i)=>(i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2)
    ,
    easeInQuint: (i)=>i * i * i * i * i
    ,
    easeOutQuint: (i)=>(i -= 1) * i * i * i * i + 1
    ,
    easeInOutQuint: (i)=>(i /= 0.5) < 1 ? 0.5 * i * i * i * i * i : 0.5 * ((i -= 2) * i * i * i * i + 2)
    ,
    easeInSine: (i)=>-Math.cos(i * W1) + 1
    ,
    easeOutSine: (i)=>Math.sin(i * W1)
    ,
    easeInOutSine: (i)=>-0.5 * (Math.cos(V1 * i) - 1)
    ,
    easeInExpo: (i)=>i === 0 ? 0 : Math.pow(2, 10 * (i - 1))
    ,
    easeOutExpo: (i)=>i === 1 ? 1 : -Math.pow(2, -10 * i) + 1
    ,
    easeInOutExpo: (i)=>De1(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2)
    ,
    easeInCirc: (i)=>i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1)
    ,
    easeOutCirc: (i)=>Math.sqrt(1 - (i -= 1) * i)
    ,
    easeInOutCirc: (i)=>(i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1)
    ,
    easeInElastic: (i)=>De1(i) ? i : ps(i, 0.075, 0.3)
    ,
    easeOutElastic: (i)=>De1(i) ? i : ms(i, 0.075, 0.3)
    ,
    easeInOutElastic (i) {
        return De1(i) ? i : i < 0.5 ? 0.5 * ps(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * ms(i * 2 - 1, 0.1125, 0.45);
    },
    easeInBack (i) {
        return i * i * ((1.70158 + 1) * i - 1.70158);
    },
    easeOutBack (i) {
        return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
    },
    easeInOutBack (i) {
        let t = 1.70158;
        return (i /= 0.5) < 1 ? 0.5 * (i * i * (((t *= 1.525) + 1) * i - t)) : 0.5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2);
    },
    easeInBounce: (i)=>1 - Tt.easeOutBounce(1 - i)
    ,
    easeOutBounce (i) {
        return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
    },
    easeInOutBounce: (i)=>i < 0.5 ? Tt.easeInBounce(i * 2) * 0.5 : Tt.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
var tt = {
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
}, mi = "0123456789ABCDEF", To = (i)=>mi[i & 15]
, Ro = (i)=>mi[(i & 240) >> 4] + mi[i & 15]
, Oe1 = (i)=>(i & 240) >> 4 === (i & 15)
;
function Eo(i) {
    return Oe1(i.r) && Oe1(i.g) && Oe1(i.b) && Oe1(i.a);
}
function Fo(i) {
    var t = i.length, e;
    return i[0] === "#" && (t === 4 || t === 5 ? e = {
        r: 255 & tt[i[1]] * 17,
        g: 255 & tt[i[2]] * 17,
        b: 255 & tt[i[3]] * 17,
        a: t === 5 ? tt[i[4]] * 17 : 255
    } : (t === 7 || t === 9) && (e = {
        r: tt[i[1]] << 4 | tt[i[2]],
        g: tt[i[3]] << 4 | tt[i[4]],
        b: tt[i[5]] << 4 | tt[i[6]],
        a: t === 9 ? tt[i[7]] << 4 | tt[i[8]] : 255
    })), e;
}
function zo(i) {
    var t = Eo(i) ? To : Ro;
    return i && "#" + t(i.r) + t(i.g) + t(i.b) + (i.a < 255 ? t(i.a) : "");
}
function ie1(i) {
    return i + 0.5 | 0;
}
var We = (i, t, e)=>Math.max(Math.min(i, e), t)
;
function Gt(i) {
    return We(ie1(i * 2.55), 0, 255);
}
function Jt(i) {
    return We(ie1(i * 255), 0, 255);
}
function Si(i) {
    return We(ie1(i / 2.55) / 100, 0, 1);
}
function bs(i) {
    return We(ie1(i * 100), 0, 100);
}
var Io = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Bo(i) {
    let t = Io.exec(i), e = 255, s, n, o;
    if (!!t) {
        if (t[7] !== s) {
            let a = +t[7];
            e = 255 & (t[8] ? Gt(a) : a * 255);
        }
        return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? Gt(s) : s), n = 255 & (t[4] ? Gt(n) : n), o = 255 & (t[6] ? Gt(o) : o), {
            r: s,
            g: n,
            b: o,
            a: e
        };
    }
}
function Vo(i) {
    return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${Si(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
var Wo = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function zs1(i, t, e) {
    let s = t * Math.min(e, 1 - e), n = (o, a = (o + i / 30) % 12)=>e - s * Math.max(Math.min(a - 3, 9 - a, 1), -1)
    ;
    return [
        n(0),
        n(8),
        n(4)
    ];
}
function No(i, t, e) {
    let s = (n, o = (n + i / 60) % 6)=>e - e * t * Math.max(Math.min(o, 4 - o, 1), 0)
    ;
    return [
        s(5),
        s(3),
        s(1)
    ];
}
function Ho(i, t, e) {
    let s = zs1(i, 1, 0.5), n;
    for(t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)s[n] *= 1 - t - e, s[n] += t;
    return s;
}
function Pi(i) {
    let e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), a = Math.min(e, s, n), r = (o + a) / 2, l, c, h11;
    return o !== a && (h11 = o - a, c = r > 0.5 ? h11 / (2 - o - a) : h11 / (o + a), l = o === e ? (s - n) / h11 + (s < n ? 6 : 0) : o === s ? (n - e) / h11 + 2 : (e - s) / h11 + 4, l = l * 60 + 0.5), [
        l | 0,
        c || 0,
        r
    ];
}
function Ci(i, t, e, s) {
    return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(Jt);
}
function Di1(i, t, e) {
    return Ci(zs1, i, t, e);
}
function jo(i, t, e) {
    return Ci(Ho, i, t, e);
}
function $o(i, t, e) {
    return Ci(No, i, t, e);
}
function Is(i) {
    return (i % 360 + 360) % 360;
}
function Yo(i) {
    let t = Wo.exec(i), e = 255, s;
    if (!t) return;
    t[5] !== s && (e = t[6] ? Gt(+t[5]) : Jt(+t[5]));
    let n = Is(+t[2]), o = +t[3] / 100, a = +t[4] / 100;
    return t[1] === "hwb" ? s = jo(n, o, a) : t[1] === "hsv" ? s = $o(n, o, a) : s = Di1(n, o, a), {
        r: s[0],
        g: s[1],
        b: s[2],
        a: e
    };
}
function Xo(i, t) {
    var e = Pi(i);
    e[0] = Is(e[0] + t), e = Di1(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function Uo(i) {
    if (!i) return;
    let t = Pi(i), e = t[0], s = bs(t[1]), n = bs(t[2]);
    return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${Si(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
}
var xs = {
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
}, _s1 = {
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
function Ko() {
    let i = {}, t = Object.keys(_s1), e = Object.keys(xs), s, n, o, a, r;
    for(s = 0; s < t.length; s++){
        for(a = r = t[s], n = 0; n < e.length; n++)o = e[n], r = r.replace(o, xs[o]);
        o = parseInt(_s1[a], 16), i[r] = [
            o >> 16 & 255,
            o >> 8 & 255,
            o & 255
        ];
    }
    return i;
}
var Ae1;
function qo(i) {
    Ae1 || (Ae1 = Ko(), Ae1.transparent = [
        0,
        0,
        0,
        0
    ]);
    let t = Ae1[i.toLowerCase()];
    return t && {
        r: t[0],
        g: t[1],
        b: t[2],
        a: t.length === 4 ? t[3] : 255
    };
}
function Le2(i, t, e) {
    if (i) {
        let s = Pi(i);
        s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = Di1(s), i.r = s[0], i.g = s[1], i.b = s[2];
    }
}
function Bs(i, t) {
    return i && Object.assign(t || {}, i);
}
function ys(i) {
    var t = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
    };
    return Array.isArray(i) ? i.length >= 3 && (t = {
        r: i[0],
        g: i[1],
        b: i[2],
        a: 255
    }, i.length > 3 && (t.a = Jt(i[3]))) : (t = Bs(i, {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    }), t.a = Jt(t.a)), t;
}
function Go(i) {
    return i.charAt(0) === "r" ? Bo(i) : Yo(i);
}
var Qt = class {
    constructor(t){
        if (t instanceof Qt) return t;
        let e = typeof t, s;
        e === "object" ? s = ys(t) : e === "string" && (s = Fo(t) || qo(t) || Go(t)), this._rgb = s, this._valid = !!s;
    }
    get valid() {
        return this._valid;
    }
    get rgb() {
        var t = Bs(this._rgb);
        return t && (t.a = Si(t.a)), t;
    }
    set rgb(t) {
        this._rgb = ys(t);
    }
    rgbString() {
        return this._valid ? Vo(this._rgb) : this._rgb;
    }
    hexString() {
        return this._valid ? zo(this._rgb) : this._rgb;
    }
    hslString() {
        return this._valid ? Uo(this._rgb) : this._rgb;
    }
    mix(t, e) {
        let s = this;
        if (t) {
            let n = s.rgb, o = t.rgb, a, r = e === a ? 0.5 : e, l = 2 * r - 1, c = n.a - o.a, h12 = ((l * c === -1 ? l : (l + c) / (1 + l * c)) + 1) / 2;
            a = 1 - h12, n.r = 255 & h12 * n.r + a * o.r + 0.5, n.g = 255 & h12 * n.g + a * o.g + 0.5, n.b = 255 & h12 * n.b + a * o.b + 0.5, n.a = r * n.a + (1 - r) * o.a, s.rgb = n;
        }
        return s;
    }
    clone() {
        return new Qt(this.rgb);
    }
    alpha(t) {
        return this._rgb.a = Jt(t), this;
    }
    clearer(t) {
        let e = this._rgb;
        return e.a *= 1 - t, this;
    }
    greyscale() {
        let t = this._rgb, e = ie1(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
        return Le2(this._rgb, 2, t), this;
    }
    darken(t) {
        return Le2(this._rgb, 2, -t), this;
    }
    saturate(t) {
        return Le2(this._rgb, 1, t), this;
    }
    desaturate(t) {
        return Le2(this._rgb, 1, -t), this;
    }
    rotate(t) {
        return Xo(this._rgb, t), this;
    }
};
function Vs(i) {
    return new Qt(i);
}
var Ws = (i)=>i instanceof CanvasGradient || i instanceof CanvasPattern
;
function Oi(i) {
    return Ws(i) ? i : Vs(i);
}
function fi(i) {
    return Ws(i) ? i : Vs(i).saturate(0.5).darken(0.1).hexString();
}
var xt = Object.create(null), Ne2 = Object.create(null);
function Zt(i, t) {
    if (!t) return i;
    let e = t.split(".");
    for(let s = 0, n = e.length; s < n; ++s){
        let o = e[s];
        i = i[o] || (i[o] = Object.create(null));
    }
    return i;
}
function gi(i, t, e) {
    return typeof t == "string" ? Rt(Zt(i, t), e) : Rt(Zt(i, ""), t);
}
var Ns = class {
    constructor(t){
        this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (e)=>e.chart.platform.getDevicePixelRatio()
        , this.elements = {}, this.events = [
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
        }, this.hover = {}, this.hoverBackgroundColor = (e, s)=>fi(s.backgroundColor)
        , this.hoverBorderColor = (e, s)=>fi(s.borderColor)
        , this.hoverColor = (e, s)=>fi(s.color)
        , this.indexAxis = "x", this.interaction = {
            mode: "nearest",
            intersect: !0
        }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t);
    }
    set(t, e) {
        return gi(this, t, e);
    }
    get(t) {
        return Zt(this, t);
    }
    describe(t, e) {
        return gi(Ne2, t, e);
    }
    override(t, e) {
        return gi(xt, t, e);
    }
    route(t, e, s, n) {
        let o = Zt(this, t), a = Zt(this, s), r = "_" + e;
        Object.defineProperties(o, {
            [r]: {
                value: o[e],
                writable: !0
            },
            [e]: {
                enumerable: !0,
                get () {
                    let l = this[r], c = a[n];
                    return O2(l) ? Object.assign({}, c, l) : P1(l, c);
                },
                set (l) {
                    this[r] = l;
                }
            }
        });
    }
}, D1 = new Ns({
    _scriptable: (i)=>!i.startsWith("on")
    ,
    _indexable: (i)=>i !== "events"
    ,
    hover: {
        _fallback: "interaction"
    },
    interaction: {
        _scriptable: !1,
        _indexable: !1
    }
});
function Zo(i) {
    return !i || L(i.size) || L(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function te1(i, t, e, s, n) {
    let o = t[n];
    return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function Hs(i, t, e, s) {
    s = s || {};
    let n = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
    s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
    let a = 0, r = e.length, l, c, h13, d, u;
    for(l = 0; l < r; l++)if (d = e[l], d != null && I(d) !== !0) a = te1(i, n, o, a, d);
    else if (I(d)) for(c = 0, h13 = d.length; c < h13; c++)u = d[c], u != null && !I(u) && (a = te1(i, n, o, a, u));
    i.restore();
    let f = o.length / 2;
    if (f > e.length) {
        for(l = 0; l < f; l++)delete n[o[l]];
        o.splice(0, f);
    }
    return a;
}
function _t(i, t, e) {
    let s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
    return Math.round((t - n) * s) / s + n;
}
function Ai(i, t) {
    t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore();
}
function se(i, t, e, s) {
    let n, o, a, r, l, c = t.pointStyle, h14 = t.rotation, d = t.radius, u = (h14 || 0) * Ao;
    if (c && typeof c == "object" && (n = c.toString(), n === "[object HTMLImageElement]" || n === "[object HTMLCanvasElement]")) {
        i.save(), i.translate(e, s), i.rotate(u), i.drawImage(c, -c.width / 2, -c.height / 2, c.width, c.height), i.restore();
        return;
    }
    if (!(isNaN(d) || d <= 0)) {
        switch(i.beginPath(), c){
            default:
                i.arc(e, s, d, 0, F), i.closePath();
                break;
            case "triangle":
                i.moveTo(e + Math.sin(u) * d, s - Math.cos(u) * d), u += gs, i.lineTo(e + Math.sin(u) * d, s - Math.cos(u) * d), u += gs, i.lineTo(e + Math.sin(u) * d, s - Math.cos(u) * d), i.closePath();
                break;
            case "rectRounded":
                l = d * 0.516, r = d - l, o = Math.cos(u + qt) * r, a = Math.sin(u + qt) * r, i.arc(e - o, s - a, l, u - V1, u - W1), i.arc(e + a, s - o, l, u - W1, u), i.arc(e + o, s + a, l, u, u + W1), i.arc(e - a, s + o, l, u + W1, u + V1), i.closePath();
                break;
            case "rect":
                if (!h14) {
                    r = Math.SQRT1_2 * d, i.rect(e - r, s - r, 2 * r, 2 * r);
                    break;
                }
                u += qt;
            case "rectRot":
                o = Math.cos(u) * d, a = Math.sin(u) * d, i.moveTo(e - o, s - a), i.lineTo(e + a, s - o), i.lineTo(e + o, s + a), i.lineTo(e - a, s + o), i.closePath();
                break;
            case "crossRot":
                u += qt;
            case "cross":
                o = Math.cos(u) * d, a = Math.sin(u) * d, i.moveTo(e - o, s - a), i.lineTo(e + o, s + a), i.moveTo(e + a, s - o), i.lineTo(e - a, s + o);
                break;
            case "star":
                o = Math.cos(u) * d, a = Math.sin(u) * d, i.moveTo(e - o, s - a), i.lineTo(e + o, s + a), i.moveTo(e + a, s - o), i.lineTo(e - a, s + o), u += qt, o = Math.cos(u) * d, a = Math.sin(u) * d, i.moveTo(e - o, s - a), i.lineTo(e + o, s + a), i.moveTo(e + a, s - o), i.lineTo(e - a, s + o);
                break;
            case "line":
                o = Math.cos(u) * d, a = Math.sin(u) * d, i.moveTo(e - o, s - a), i.lineTo(e + o, s + a);
                break;
            case "dash":
                i.moveTo(e, s), i.lineTo(e + Math.cos(u) * d, s + Math.sin(u) * d);
                break;
        }
        i.fill(), t.borderWidth > 0 && i.stroke();
    }
}
function mt(i, t, e) {
    return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function ne1(i, t) {
    i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function oe(i) {
    i.restore();
}
function js(i, t, e, s, n) {
    if (!t) return i.lineTo(e.x, e.y);
    if (n === "middle") {
        let o = (t.x + e.x) / 2;
        i.lineTo(o, t.y), i.lineTo(o, e.y);
    } else n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
    i.lineTo(e.x, e.y);
}
function $s(i, t, e, s) {
    if (!t) return i.lineTo(e.x, e.y);
    i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y);
}
function yt(i, t, e, s, n, o = {}) {
    let a = I(t) ? t : [
        t
    ], r = o.strokeWidth > 0 && o.strokeColor !== "", l, c;
    for(i.save(), i.font = n.string, Jo(i, o), l = 0; l < a.length; ++l)c = a[l], r && (o.strokeColor && (i.strokeStyle = o.strokeColor), L(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), Qo(i, e, s, c, o), s += n.lineHeight;
    i.restore();
}
function Jo(i, t) {
    t.translation && i.translate(t.translation[0], t.translation[1]), L(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function Qo(i, t, e, s, n) {
    if (n.strikethrough || n.underline) {
        let o = i.measureText(s), a = t - o.actualBoundingBoxLeft, r = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h15 = n.strikethrough ? (l + c) / 2 : c;
        i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(a, h15), i.lineTo(r, h15), i.stroke();
    }
}
function ae2(i, t) {
    let { x: e , y: s , w: n , h: o , radius: a  } = t;
    i.arc(e + a.topLeft, s + a.topLeft, a.topLeft, -W1, V1, !0), i.lineTo(e, s + o - a.bottomLeft), i.arc(e + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, V1, W1, !0), i.lineTo(e + n - a.bottomRight, s + o), i.arc(e + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, W1, 0, !0), i.lineTo(e + n, s + a.topRight), i.arc(e + n - a.topRight, s + a.topRight, a.topRight, 0, -W1, !0), i.lineTo(e + a.topLeft, s);
}
var ta = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/), ea = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);
function ia(i, t) {
    let e = ("" + i).match(ta);
    if (!e || e[1] === "normal") return t * 1.2;
    switch(i = +e[2], e[3]){
        case "px":
            return i;
        case "%":
            i /= 100;
            break;
    }
    return t * i;
}
var sa = (i)=>+i || 0
;
function He(i, t) {
    let e = {}, s = O2(t), n = s ? Object.keys(t) : t, o = O2(i) ? s ? (a)=>P1(i[a], i[t[a]])
     : (a)=>i[a]
     : ()=>i
    ;
    for (let a1 of n)e[a1] = sa(o(a1));
    return e;
}
function Li(i) {
    return He(i, {
        top: "y",
        right: "x",
        bottom: "y",
        left: "x"
    });
}
function Ct(i) {
    return He(i, [
        "topLeft",
        "topRight",
        "bottomLeft",
        "bottomRight"
    ]);
}
function X1(i) {
    let t = Li(i);
    return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function j(i, t) {
    i = i || {}, t = t || D1.font;
    let e = P1(i.size, t.size);
    typeof e == "string" && (e = parseInt(e, 10));
    let s = P1(i.style, t.style);
    s && !("" + s).match(ea) && (console.warn('Invalid font style specified: "' + s + '"'), s = "");
    let n = {
        family: P1(i.family, t.family),
        lineHeight: ia(P1(i.lineHeight, t.lineHeight), e),
        size: e,
        style: s,
        weight: P1(i.weight, t.weight),
        string: ""
    };
    return n.string = Zo(n), n;
}
function Vt(i, t, e, s) {
    let n = !0, o, a, r;
    for(o = 0, a = i.length; o < a; ++o)if (r = i[o], r !== void 0 && (t !== void 0 && typeof r == "function" && (r = r(t), n = !1), e !== void 0 && I(r) && (r = r[e % r.length], n = !1), r !== void 0)) return s && !n && (s.cacheable = !1), r;
}
function Ys(i, t, e) {
    let { min: s , max: n  } = i, o = _i(t, (n - s) / 2), a = (r, l)=>e && r === 0 ? 0 : r + l
    ;
    return {
        min: a(s, -Math.abs(o)),
        max: a(n, o)
    };
}
function ht(i, t) {
    return Object.assign(Object.create(i), t);
}
function je1(i, t, e) {
    e = e || ((a)=>i[a] < t
    );
    let s = i.length - 1, n = 0, o;
    for(; s - n > 1;)o = n + s >> 1, e(o) ? n = o : s = o;
    return {
        lo: n,
        hi: s
    };
}
var rt = (i, t, e)=>je1(i, e, (s)=>i[s][t] < e
    )
, Xs = (i, t, e)=>je1(i, e, (s)=>i[s][t] >= e
    )
;
function Us(i, t, e) {
    let s = 0, n = i.length;
    for(; s < n && i[s] < t;)s++;
    for(; n > s && i[n - 1] > e;)n--;
    return s > 0 || n < i.length ? i.slice(s, n) : i;
}
var Ks = [
    "push",
    "pop",
    "shift",
    "splice",
    "unshift"
];
function qs(i, t) {
    if (i._chartjs) {
        i._chartjs.listeners.push(t);
        return;
    }
    Object.defineProperty(i, "_chartjs", {
        configurable: !0,
        enumerable: !1,
        value: {
            listeners: [
                t
            ]
        }
    }), Ks.forEach((e)=>{
        let s = "_onData" + Be(e), n = i[e];
        Object.defineProperty(i, e, {
            configurable: !0,
            enumerable: !1,
            value (...o) {
                let a = n.apply(this, o);
                return i._chartjs.listeners.forEach((r)=>{
                    typeof r[s] == "function" && r[s](...o);
                }), a;
            }
        });
    });
}
function Ti(i, t) {
    let e = i._chartjs;
    if (!e) return;
    let s = e.listeners, n = s.indexOf(t);
    n !== -1 && s.splice(n, 1), !(s.length > 0) && (Ks.forEach((o)=>{
        delete i[o];
    }), delete i._chartjs);
}
function Ri1(i) {
    let t = new Set, e, s;
    for(e = 0, s = i.length; e < s; ++e)t.add(i[e]);
    return t.size === s ? i : Array.from(t);
}
function $e1(i, t = [
    ""
], e = i, s, n = ()=>i[0]
) {
    Z2(s) || (s = Js("_fallback", i));
    let o = {
        [Symbol.toStringTag]: "Object",
        _cacheable: !0,
        _scopes: i,
        _rootScopes: e,
        _fallback: s,
        _getTarget: n,
        override: (a)=>$e1([
                a,
                ...i
            ], t, e, s)
    };
    return new Proxy(o, {
        deleteProperty (a, r) {
            return delete a[r], delete a._keys, delete i[0][r], !0;
        },
        get (a, r) {
            return Gs(a, r, ()=>da(r, t, i, a)
            );
        },
        getOwnPropertyDescriptor (a, r) {
            return Reflect.getOwnPropertyDescriptor(a._scopes[0], r);
        },
        getPrototypeOf () {
            return Reflect.getPrototypeOf(i[0]);
        },
        has (a, r) {
            return Ms1(a).includes(r);
        },
        ownKeys (a) {
            return Ms1(a);
        },
        set (a, r, l) {
            let c = a._storage || (a._storage = n());
            return a[r] = c[r] = l, delete a._keys, !0;
        }
    });
}
function Pt(i, t, e, s) {
    let n = {
        _cacheable: !1,
        _proxy: i,
        _context: t,
        _subProxy: e,
        _stack: new Set,
        _descriptors: Ei(i, s),
        setContext: (o)=>Pt(i, o, e, s)
        ,
        override: (o)=>Pt(i.override(o), t, e, s)
    };
    return new Proxy(n, {
        deleteProperty (o, a) {
            return delete o[a], delete i[a], !0;
        },
        get (o, a, r) {
            return Gs(o, a, ()=>oa(o, a, r)
            );
        },
        getOwnPropertyDescriptor (o, a) {
            return o._descriptors.allKeys ? Reflect.has(i, a) ? {
                enumerable: !0,
                configurable: !0
            } : void 0 : Reflect.getOwnPropertyDescriptor(i, a);
        },
        getPrototypeOf () {
            return Reflect.getPrototypeOf(i);
        },
        has (o, a) {
            return Reflect.has(i, a);
        },
        ownKeys () {
            return Reflect.ownKeys(i);
        },
        set (o, a, r) {
            return i[a] = r, delete o[a], !0;
        }
    });
}
function Ei(i, t = {
    scriptable: !0,
    indexable: !0
}) {
    let { _scriptable: e = t.scriptable , _indexable: s = t.indexable , _allKeys: n = t.allKeys  } = i;
    return {
        allKeys: n,
        scriptable: e,
        indexable: s,
        isScriptable: ct(e) ? e : ()=>e
        ,
        isIndexable: ct(s) ? s : ()=>s
    };
}
var na = (i, t)=>i ? i + Be(t) : t
, Fi = (i, t)=>O2(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object)
;
function Gs(i, t, e) {
    if (Object.prototype.hasOwnProperty.call(i, t)) return i[t];
    let s = e();
    return i[t] = s, s;
}
function oa(i, t, e) {
    let { _proxy: s , _context: n , _subProxy: o , _descriptors: a  } = i, r = s[t];
    return ct(r) && a.isScriptable(t) && (r = aa(t, r, i, e)), I(r) && r.length && (r = ra(t, r, i, a.isIndexable)), Fi(t, r) && (r = Pt(r, n, o && o[t], a)), r;
}
function aa(i, t, e, s) {
    let { _proxy: n , _context: o , _subProxy: a , _stack: r  } = e;
    if (r.has(i)) throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + i);
    return r.add(i), t = t(o, a || s), r.delete(i), Fi(i, t) && (t = zi(n._scopes, n, i, t)), t;
}
function ra(i, t, e, s) {
    let { _proxy: n , _context: o , _subProxy: a , _descriptors: r  } = e;
    if (Z2(o.index) && s(i)) t = t[o.index % t.length];
    else if (O2(t[0])) {
        let l = t, c = n._scopes.filter((h16)=>h16 !== l
        );
        t = [];
        for (let h1 of l){
            let d = zi(c, n, i, h1);
            t.push(Pt(d, o, a && a[i], r));
        }
    }
    return t;
}
function Zs(i, t, e) {
    return ct(i) ? i(t, e) : i;
}
var la = (i, t)=>i === !0 ? t : typeof i == "string" ? bt(t, i) : void 0
;
function ca(i, t, e, s, n) {
    for (let o of t){
        let a = la(e, o);
        if (a) {
            i.add(a);
            let r = Zs(a._fallback, e, n);
            if (Z2(r) && r !== e && r !== s) return r;
        } else if (a === !1 && Z2(s) && e !== s) return null;
    }
    return !1;
}
function zi(i, t, e, s) {
    let n = t._rootScopes, o = Zs(t._fallback, e, s), a = [
        ...i,
        ...n
    ], r = new Set;
    r.add(s);
    let l = vs(r, a, e, o || e, s);
    return l === null || Z2(o) && o !== e && (l = vs(r, a, o, l, s), l === null) ? !1 : $e1(Array.from(r), [
        ""
    ], n, o, ()=>ha(t, e, s)
    );
}
function vs(i, t, e, s, n) {
    for(; e;)e = ca(i, t, e, s, n);
    return e;
}
function ha(i, t, e) {
    let s = i._getTarget();
    t in s || (s[t] = {});
    let n = s[t];
    return I(n) && O2(e) ? e : n;
}
function da(i, t, e, s) {
    let n;
    for (let o of t)if (n = Js(na(o, i), e), Z2(n)) return Fi(i, n) ? zi(e, s, i, n) : n;
}
function Js(i, t) {
    for (let e of t){
        if (!e) continue;
        let s = e[i];
        if (Z2(s)) return s;
    }
}
function Ms1(i) {
    let t = i._keys;
    return t || (t = i._keys = ua(i._scopes)), t;
}
function ua(i) {
    let t = new Set;
    for (let e of i)for (let s of Object.keys(e).filter((n)=>!n.startsWith("_")
    ))t.add(s);
    return Array.from(t);
}
var fa = Number.EPSILON || 0.00000000000001, Et = (i, t)=>t < i.length && !i[t].skip && i[t]
, Qs = (i)=>i === "x" ? "y" : "x"
;
function ga(i, t, e, s) {
    let n = i.skip ? t : i, o = t, a = e.skip ? t : e, r = Fe1(o, n), l = Fe1(a, o), c = r / (r + l), h17 = l / (r + l);
    c = isNaN(c) ? 0 : c, h17 = isNaN(h17) ? 0 : h17;
    let d = s * c, u = s * h17;
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
function pa(i, t, e) {
    let s = i.length, n, o, a, r, l, c = Et(i, 0);
    for(let h18 = 0; h18 < s - 1; ++h18)if (l = c, c = Et(i, h18 + 1), !(!l || !c)) {
        if (It(t[h18], 0, fa)) {
            e[h18] = e[h18 + 1] = 0;
            continue;
        }
        n = e[h18] / t[h18], o = e[h18 + 1] / t[h18], r = Math.pow(n, 2) + Math.pow(o, 2), !(r <= 9) && (a = 3 / Math.sqrt(r), e[h18] = n * a * t[h18], e[h18 + 1] = o * a * t[h18]);
    }
}
function ma(i, t, e = "x") {
    let s = Qs(e), n = i.length, o, a, r, l = Et(i, 0);
    for(let c = 0; c < n; ++c){
        if (a = r, r = l, l = Et(i, c + 1), !r) continue;
        let h19 = r[e], d = r[s];
        a && (o = (h19 - a[e]) / 3, r[`cp1${e}`] = h19 - o, r[`cp1${s}`] = d - o * t[c]), l && (o = (l[e] - h19) / 3, r[`cp2${e}`] = h19 + o, r[`cp2${s}`] = d + o * t[c]);
    }
}
function ba(i, t = "x") {
    let e = Qs(t), s = i.length, n = Array(s).fill(0), o = Array(s), a, r, l, c = Et(i, 0);
    for(a = 0; a < s; ++a)if (r = l, l = c, c = Et(i, a + 1), !!l) {
        if (c) {
            let h20 = c[t] - l[t];
            n[a] = h20 !== 0 ? (c[e] - l[e]) / h20 : 0;
        }
        o[a] = r ? c ? st(n[a - 1]) !== st(n[a]) ? 0 : (n[a - 1] + n[a]) / 2 : n[a - 1] : n[a];
    }
    pa(i, n, o), ma(i, o, t);
}
function Te1(i, t, e) {
    return Math.max(Math.min(i, e), t);
}
function xa(i, t) {
    let e, s, n, o, a, r = mt(i[0], t);
    for(e = 0, s = i.length; e < s; ++e)a = o, o = r, r = e < s - 1 && mt(i[e + 1], t), o && (n = i[e], a && (n.cp1x = Te1(n.cp1x, t.left, t.right), n.cp1y = Te1(n.cp1y, t.top, t.bottom)), r && (n.cp2x = Te1(n.cp2x, t.left, t.right), n.cp2y = Te1(n.cp2y, t.top, t.bottom)));
}
function tn(i, t, e, s, n) {
    let o, a, r, l;
    if (t.spanGaps && (i = i.filter((c)=>!c.skip
    )), t.cubicInterpolationMode === "monotone") ba(i, n);
    else {
        let c = s ? i[i.length - 1] : i[0];
        for(o = 0, a = i.length; o < a; ++o)r = i[o], l = ga(c, r, i[Math.min(o + 1, a - (s ? 0 : 1)) % a], t.tension), r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, c = r;
    }
    t.capBezierPoints && xa(i, e);
}
function Ii() {
    return typeof document < "u" && typeof document < "u";
}
function Ye(i) {
    let t = i.parentNode;
    return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function ze(i, t, e) {
    let s;
    return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
}
var Xe = (i)=>window.getComputedStyle(i, null)
;
function _a(i, t) {
    return Xe(i).getPropertyValue(t);
}
var ya = [
    "top",
    "right",
    "bottom",
    "left"
];
function St(i, t, e) {
    let s = {};
    e = e ? "-" + e : "";
    for(let n = 0; n < 4; n++){
        let o = ya[n];
        s[o] = parseFloat(i[t + "-" + o + e]) || 0;
    }
    return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
var va = (i, t, e)=>(i > 0 || t > 0) && (!e || !e.shadowRoot)
;
function Ma(i, t) {
    let e = i.native || i, s = e.touches, n = s && s.length ? s[0] : e, { offsetX: o , offsetY: a  } = n, r = !1, l, c;
    if (va(o, a, e.target)) l = o, c = a;
    else {
        let h21 = t.getBoundingClientRect();
        l = n.clientX - h21.left, c = n.clientY - h21.top, r = !0;
    }
    return {
        x: l,
        y: c,
        box: r
    };
}
function Bi(i, t) {
    let { canvas: e , currentDevicePixelRatio: s  } = t, n = Xe(e), o = n.boxSizing === "border-box", a = St(n, "padding"), r = St(n, "border", "width"), { x: l , y: c , box: h22  } = Ma(i, e), d = a.left + (h22 && r.left), u = a.top + (h22 && r.top), { width: f , height: g3  } = t;
    return o && (f -= a.width + r.width, g3 -= a.height + r.height), {
        x: Math.round((l - d) / f * e.width / s),
        y: Math.round((c - u) / g3 * e.height / s)
    };
}
function wa(i, t, e) {
    let s, n;
    if (t === void 0 || e === void 0) {
        let o = Ye(i);
        if (!o) t = i.clientWidth, e = i.clientHeight;
        else {
            let a = o.getBoundingClientRect(), r = Xe(o), l = St(r, "border", "width"), c = St(r, "padding");
            t = a.width - c.width - l.width, e = a.height - c.height - l.height, s = ze(r.maxWidth, o, "clientWidth"), n = ze(r.maxHeight, o, "clientHeight");
        }
    }
    return {
        width: t,
        height: e,
        maxWidth: s || Ee1,
        maxHeight: n || Ee1
    };
}
var pi = (i)=>Math.round(i * 10) / 10
;
function en(i, t, e, s) {
    let n = Xe(i), o = St(n, "margin"), a = ze(n.maxWidth, i, "clientWidth") || Ee1, r = ze(n.maxHeight, i, "clientHeight") || Ee1, l = wa(i, t, e), { width: c , height: h23  } = l;
    if (n.boxSizing === "content-box") {
        let d = St(n, "border", "width"), u = St(n, "padding");
        c -= u.width + d.width, h23 -= u.height + d.height;
    }
    return c = Math.max(0, c - o.width), h23 = Math.max(0, s ? Math.floor(c / s) : h23 - o.height), c = pi(Math.min(c, a, l.maxWidth)), h23 = pi(Math.min(h23, r, l.maxHeight)), c && !h23 && (h23 = pi(c / 2)), {
        width: c,
        height: h23
    };
}
function Vi(i, t, e) {
    let s = t || 1, n = Math.floor(i.height * s), o = Math.floor(i.width * s);
    i.height = n / s, i.width = o / s;
    let a = i.canvas;
    return a.style && (e || !a.style.height && !a.style.width) && (a.style.height = `${i.height}px`, a.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || a.height !== n || a.width !== o ? (i.currentDevicePixelRatio = s, a.height = n, a.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
var sn = function() {
    let i = !1;
    try {
        let t = {
            get passive () {
                return i = !0, !1;
            }
        };
        window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
    } catch  {}
    return i;
}();
function Wi(i, t) {
    let e = _a(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
    return s ? +s[1] : void 0;
}
function pt(i, t, e, s) {
    return {
        x: i.x + e * (t.x - i.x),
        y: i.y + e * (t.y - i.y)
    };
}
function nn(i, t, e, s) {
    return {
        x: i.x + e * (t.x - i.x),
        y: s === "middle" ? e < 0.5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
    };
}
function on(i, t, e, s) {
    let n = {
        x: i.cp2x,
        y: i.cp2y
    }, o = {
        x: t.cp1x,
        y: t.cp1y
    }, a = pt(i, n, e), r = pt(n, o, e), l = pt(o, t, e), c = pt(a, r, e), h24 = pt(r, l, e);
    return pt(c, h24, e);
}
var ws = new Map;
function ka(i, t) {
    t = t || {};
    let e = i + JSON.stringify(t), s = ws.get(e);
    return s || (s = new Intl.NumberFormat(i, t), ws.set(e, s)), s;
}
function Wt(i, t, e) {
    return ka(t, e).format(i);
}
var Sa = function(i, t) {
    return {
        x (e) {
            return i + i + t - e;
        },
        setWidth (e) {
            t = e;
        },
        textAlign (e) {
            return e === "center" ? e : e === "right" ? "left" : "right";
        },
        xPlus (e, s) {
            return e - s;
        },
        leftForLtr (e, s) {
            return e - s;
        }
    };
}, Pa = function() {
    return {
        x (i) {
            return i;
        },
        setWidth (i) {},
        textAlign (i) {
            return i;
        },
        xPlus (i, t) {
            return i + t;
        },
        leftForLtr (i, t) {
            return i;
        }
    };
};
function Dt(i, t, e) {
    return i ? Sa(t, e) : Pa();
}
function Ni(i, t) {
    let e, s;
    (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [
        e.getPropertyValue("direction"),
        e.getPropertyPriority("direction")
    ], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
}
function Hi(i, t) {
    t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function an(i) {
    return i === "angle" ? {
        between: Bt,
        compare: Lo,
        normalize: q
    } : {
        between: at,
        compare: (t, e)=>t - e
        ,
        normalize: (t)=>t
    };
}
function ks({ start: i , end: t , count: e , loop: s , style: n  }) {
    return {
        start: i % e,
        end: t % e,
        loop: s && (t - i + 1) % e === 0,
        style: n
    };
}
function Ca(i, t, e) {
    let { property: s , start: n , end: o  } = e, { between: a , normalize: r  } = an(s), l = t.length, { start: c , end: h25 , loop: d  } = i, u, f;
    if (d) {
        for(c += l, h25 += l, u = 0, f = l; u < f && a(r(t[c % l][s]), n, o); ++u)c--, h25--;
        c %= l, h25 %= l;
    }
    return h25 < c && (h25 += l), {
        start: c,
        end: h25,
        loop: d,
        style: i.style
    };
}
function ji(i, t, e) {
    if (!e) return [
        i
    ];
    let { property: s , start: n , end: o  } = e, a = t.length, { compare: r , between: l , normalize: c  } = an(s), { start: h26 , end: d , loop: u , style: f  } = Ca(i, t, e), g4 = [], p = !1, m = null, b, x, v4, y14 = ()=>l(n, v4, b) && r(n, v4) !== 0
    , _ = ()=>r(o, b) === 0 || l(o, v4, b)
    , w = ()=>p || y14()
    , M4 = ()=>!p || _()
    ;
    for(let S10 = h26, k11 = h26; S10 <= d; ++S10)x = t[S10 % a], !x.skip && (b = c(x[s]), b !== v4 && (p = l(b, n, o), m === null && w() && (m = r(b, n) === 0 ? S10 : k11), m !== null && M4() && (g4.push(ks({
        start: m,
        end: S10,
        loop: u,
        count: a,
        style: f
    })), m = null), k11 = S10, v4 = b));
    return m !== null && g4.push(ks({
        start: m,
        end: d,
        loop: u,
        count: a,
        style: f
    })), g4;
}
function $i(i, t) {
    let e = [], s = i.segments;
    for(let n = 0; n < s.length; n++){
        let o = ji(s[n], i.points, t);
        o.length && e.push(...o);
    }
    return e;
}
function Da(i, t, e, s) {
    let n = 0, o = t - 1;
    if (e && !s) for(; n < t && !i[n].skip;)n++;
    for(; n < t && i[n].skip;)n++;
    for(n %= t, e && (o += n); o > n && i[o % t].skip;)o--;
    return o %= t, {
        start: n,
        end: o
    };
}
function Oa(i, t, e, s) {
    let n = i.length, o = [], a = t, r = i[t], l;
    for(l = t + 1; l <= e; ++l){
        let c = i[l % n];
        c.skip || c.stop ? r.skip || (s = !1, o.push({
            start: t % n,
            end: (l - 1) % n,
            loop: s
        }), t = a = c.stop ? l : null) : (a = l, r.skip && (t = l)), r = c;
    }
    return a !== null && o.push({
        start: t % n,
        end: a % n,
        loop: s
    }), o;
}
function rn(i, t) {
    let e = i.points, s = i.options.spanGaps, n = e.length;
    if (!n) return [];
    let o = !!i._loop, { start: a , end: r  } = Da(e, n, o, s);
    if (s === !0) return Ss(i, [
        {
            start: a,
            end: r,
            loop: o
        }
    ], e, t);
    let l = r < a ? r + n : r, c = !!i._fullLoop && a === 0 && r === n - 1;
    return Ss(i, Oa(e, a, l, c), e, t);
}
function Ss(i, t, e, s) {
    return !s || !s.setContext || !e ? t : Aa(i, t, e, s);
}
function Aa(i, t, e, s) {
    let n = i._chart.getContext(), o = Ps1(i.options), { _datasetIndex: a , options: { spanGaps: r  }  } = i, l = e.length, c = [], h27 = o, d = t[0].start, u = d;
    function f(g5, p, m, b) {
        let x = r ? -1 : 1;
        if (g5 !== p) {
            for(g5 += l; e[g5 % l].skip;)g5 -= x;
            for(; e[p % l].skip;)p += x;
            g5 % l !== p % l && (c.push({
                start: g5 % l,
                end: p % l,
                loop: m,
                style: b
            }), h27 = b, d = p % l);
        }
    }
    for (let g1 of t){
        d = r ? d : g1.start;
        let p = e[d % l], m;
        for(u = d + 1; u <= g1.end; u++){
            let b = e[u % l];
            m = Ps1(s.setContext(ht(n, {
                type: "segment",
                p0: p,
                p1: b,
                p0DataIndex: (u - 1) % l,
                p1DataIndex: u % l,
                datasetIndex: a
            }))), La(m, h27) && f(d, u - 1, g1.loop, h27), p = b, h27 = m;
        }
        d < u - 1 && f(d, u - 1, g1.loop, h27);
    }
    return c;
}
function Ps1(i) {
    return {
        backgroundColor: i.backgroundColor,
        borderCapStyle: i.borderCapStyle,
        borderDash: i.borderDash,
        borderDashOffset: i.borderDashOffset,
        borderJoinStyle: i.borderJoinStyle,
        borderWidth: i.borderWidth,
        borderColor: i.borderColor
    };
}
function La(i, t) {
    return t && JSON.stringify(i) !== JSON.stringify(t);
}
var Jn = class {
    constructor(){
        this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0;
    }
    _notify(t, e, s, n) {
        let o = e.listeners[n], a = e.duration;
        o.forEach((r)=>r({
                chart: t,
                initial: e.initial,
                numSteps: a,
                currentStep: Math.min(s - e.start, a)
            })
        );
    }
    _refresh() {
        this._request || (this._running = !0, this._request = bi.call(window, ()=>{
            this._update(), this._request = null, this._running && this._refresh();
        }));
    }
    _update(t = Date.now()) {
        let e = 0;
        this._charts.forEach((s, n)=>{
            if (!s.running || !s.items.length) return;
            let o = s.items, a = o.length - 1, r = !1, l;
            for(; a >= 0; --a)l = o[a], l._active ? (l._total > s.duration && (s.duration = l._total), l.tick(t), r = !0) : (o[a] = o[o.length - 1], o.pop());
            r && (n.draw(), this._notify(n, s, t, "progress")), o.length || (s.running = !1, this._notify(n, s, t, "complete"), s.initial = !1), e += o.length;
        }), this._lastDate = t, e === 0 && (this._running = !1);
    }
    _getAnims(t) {
        let e = this._charts, s = e.get(t);
        return s || (s = {
            running: !1,
            initial: !0,
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
        !e || (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((s, n)=>Math.max(s, n._duration)
        , 0), this._refresh());
    }
    running(t) {
        if (!this._running) return !1;
        let e = this._charts.get(t);
        return !(!e || !e.running || !e.items.length);
    }
    stop(t) {
        let e = this._charts.get(t);
        if (!e || !e.items.length) return;
        let s = e.items, n = s.length - 1;
        for(; n >= 0; --n)s[n].cancel();
        e.items = [], this._notify(t, e, Date.now(), "complete");
    }
    remove(t) {
        return this._charts.delete(t);
    }
}, dt = new Jn, ln = "transparent", Ta = {
    boolean (i, t, e) {
        return e > 0.5 ? t : i;
    },
    color (i, t, e) {
        let s = Oi(i || ln), n = s.valid && Oi(t || ln);
        return n && n.valid ? n.mix(s, e).hexString() : t;
    },
    number (i, t, e) {
        return i + (t - i) * e;
    }
}, Qn = class {
    constructor(t, e, s, n){
        let o = e[s];
        n = Vt([
            t.to,
            n,
            o,
            t.from
        ]);
        let a = Vt([
            t.from,
            o,
            n
        ]);
        this._active = !0, this._fn = t.fn || Ta[t.type || typeof a], this._easing = Tt[t.easing] || Tt.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = a, this._to = n, this._promises = void 0;
    }
    active() {
        return this._active;
    }
    update(t, e, s) {
        if (this._active) {
            this._notify(!1);
            let n = this._target[this._prop], o = s - this._start, a = this._duration - o;
            this._start = s, this._duration = Math.floor(Math.max(a, t.duration)), this._total += o, this._loop = !!t.loop, this._to = Vt([
                t.to,
                e,
                n,
                t.from
            ]), this._from = Vt([
                t.from,
                n,
                e
            ]);
        }
    }
    cancel() {
        this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
    }
    tick(t) {
        let e = t - this._start, s = this._duration, n = this._prop, o = this._from, a = this._loop, r = this._to, l;
        if (this._active = o !== r && (a || e < s), !this._active) {
            this._target[n] = r, this._notify(!0);
            return;
        }
        if (e < 0) {
            this._target[n] = o;
            return;
        }
        l = e / s % 2, l = a && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[n] = this._fn(o, r, l);
    }
    wait() {
        let t = this._promises || (this._promises = []);
        return new Promise((e, s)=>{
            t.push({
                res: e,
                rej: s
            });
        });
    }
    _notify(t) {
        let e = t ? "res" : "rej", s = this._promises || [];
        for(let n = 0; n < s.length; n++)s[n][e]();
    }
}, Ra = [
    "x",
    "y",
    "borderWidth",
    "radius",
    "tension"
], Ea = [
    "color",
    "borderColor",
    "backgroundColor"
];
D1.set("animation", {
    delay: void 0,
    duration: 1000,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
});
var Fa = Object.keys(D1.animation);
D1.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (i)=>i !== "onProgress" && i !== "onComplete" && i !== "fn"
});
D1.set("animations", {
    colors: {
        type: "color",
        properties: Ea
    },
    numbers: {
        type: "number",
        properties: Ra
    }
});
D1.describe("animations", {
    _fallback: "animation"
});
D1.set("transitions", {
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
                fn: (i)=>i | 0
            }
        }
    }
});
var rs = class {
    constructor(t, e){
        this._chart = t, this._properties = new Map, this.configure(e);
    }
    configure(t) {
        if (!O2(t)) return;
        let e = this._properties;
        Object.getOwnPropertyNames(t).forEach((s)=>{
            let n = t[s];
            if (!O2(n)) return;
            let o = {};
            for (let a2 of Fa)o[a2] = n[a2];
            (I(n.properties) && n.properties || [
                s
            ]).forEach((a)=>{
                (a === s || !e.has(a)) && e.set(a, o);
            });
        });
    }
    _animateOptions(t, e) {
        let s = e.options, n = Ia(t, s);
        if (!n) return [];
        let o = this._createAnimations(n, s);
        return s.$shared && za(t.options.$animations, s).then(()=>{
            t.options = s;
        }, ()=>{}), o;
    }
    _createAnimations(t, e) {
        let s = this._properties, n = [], o = t.$animations || (t.$animations = {}), a = Object.keys(e), r = Date.now(), l;
        for(l = a.length - 1; l >= 0; --l){
            let c = a[l];
            if (c.charAt(0) === "$") continue;
            if (c === "options") {
                n.push(...this._animateOptions(t, e));
                continue;
            }
            let h28 = e[c], d = o[c], u = s.get(c);
            if (d) if (u && d.active()) {
                d.update(u, h28, r);
                continue;
            } else d.cancel();
            if (!u || !u.duration) {
                t[c] = h28;
                continue;
            }
            o[c] = d = new Qn(u, t, c, h28), n.push(d);
        }
        return n;
    }
    update(t, e) {
        if (this._properties.size === 0) {
            Object.assign(t, e);
            return;
        }
        let s = this._createAnimations(t, e);
        if (s.length) return dt.add(this._chart, s), !0;
    }
};
function za(i, t) {
    let e = [], s = Object.keys(t);
    for(let n = 0; n < s.length; n++){
        let o = i[s[n]];
        o && o.active() && e.push(o.wait());
    }
    return Promise.all(e);
}
function Ia(i, t) {
    if (!t) return;
    let e = i.options;
    if (!e) {
        i.options = t;
        return;
    }
    return e.$shared && (i.options = e = Object.assign({}, e, {
        $shared: !1,
        $animations: {}
    })), e;
}
function cn(i, t) {
    let e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
    return {
        start: s ? o : n,
        end: s ? n : o
    };
}
function Ba(i, t, e) {
    if (e === !1) return !1;
    let s = cn(i, e), n = cn(t, e);
    return {
        top: n.end,
        right: s.end,
        bottom: n.start,
        left: s.start
    };
}
function Va(i) {
    let t, e, s, n;
    return O2(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
        top: t,
        right: e,
        bottom: s,
        left: n,
        disabled: i === !1
    };
}
function to(i, t) {
    let e = [], s = i._getSortedDatasetMetas(t), n, o;
    for(n = 0, o = s.length; n < o; ++n)e.push(s[n].index);
    return e;
}
function hn(i, t, e, s = {}) {
    let n = i.keys, o = s.mode === "single", a, r, l, c;
    if (t !== null) {
        for(a = 0, r = n.length; a < r; ++a){
            if (l = +n[a], l === e) {
                if (s.all) continue;
                break;
            }
            c = i.values[l], N(c) && (o || t === 0 || st(t) === st(c)) && (t += c);
        }
        return t;
    }
}
function Wa(i) {
    let t = Object.keys(i), e = new Array(t.length), s, n, o;
    for(s = 0, n = t.length; s < n; ++s)o = t[s], e[s] = {
        x: o,
        y: i[o]
    };
    return e;
}
function dn(i, t) {
    let e = i && i.options.stacked;
    return e || e === void 0 && t.stack !== void 0;
}
function Na(i, t, e) {
    return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function Ha(i) {
    let { min: t , max: e , minDefined: s , maxDefined: n  } = i.getUserBounds();
    return {
        min: s ? t : Number.NEGATIVE_INFINITY,
        max: n ? e : Number.POSITIVE_INFINITY
    };
}
function ja(i, t, e) {
    let s = i[t] || (i[t] = {});
    return s[e] || (s[e] = {});
}
function un(i, t, e, s) {
    for (let n of t.getMatchingVisibleMetas(s).reverse()){
        let o = i[n.index];
        if (e && o > 0 || !e && o < 0) return n.index;
    }
    return null;
}
function fn(i, t) {
    let { chart: e , _cachedMeta: s  } = i, n = e._stacks || (e._stacks = {}), { iScale: o , vScale: a , index: r  } = s, l = o.axis, c = a.axis, h29 = Na(o, a, s), d = t.length, u;
    for(let f = 0; f < d; ++f){
        let g6 = t[f], { [l]: p , [c]: m  } = g6, b = g6._stacks || (g6._stacks = {});
        u = b[c] = ja(n, h29, p), u[r] = m, u._top = un(u, a, !0, s.type), u._bottom = un(u, a, !1, s.type);
    }
}
function Yi(i, t) {
    let e = i.scales;
    return Object.keys(e).filter((s)=>e[s].axis === t
    ).shift();
}
function $a(i, t) {
    return ht(i, {
        active: !1,
        dataset: void 0,
        datasetIndex: t,
        index: t,
        mode: "default",
        type: "dataset"
    });
}
function Ya(i, t, e) {
    return ht(i, {
        active: !1,
        dataIndex: t,
        parsed: void 0,
        raw: void 0,
        element: e,
        index: t,
        mode: "default",
        type: "data"
    });
}
function re1(i, t) {
    let e = i.controller.index, s = i.vScale && i.vScale.axis;
    if (!!s) {
        t = t || i._parsed;
        for (let n of t){
            let o = n._stacks;
            if (!o || o[s] === void 0 || o[s][e] === void 0) return;
            delete o[s][e];
        }
    }
}
var Xi = (i)=>i === "reset" || i === "none"
, gn = (i, t)=>t ? i : Object.assign({}, i)
, Xa = (i, t, e)=>i && !t.hidden && t._stacked && {
        keys: to(e, !0),
        values: null
    }
, nt = class {
    constructor(t, e){
        this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.$context = void 0, this._syncList = [], this.initialize();
    }
    initialize() {
        let t = this._cachedMeta;
        this.configure(), this.linkScales(), t._stacked = dn(t.vScale, t), this.addElements();
    }
    updateIndex(t) {
        this.index !== t && re1(this._cachedMeta), this.index = t;
    }
    linkScales() {
        let t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (d, u, f, g7)=>d === "x" ? u : d === "r" ? g7 : f
        , o = e.xAxisID = P1(s.xAxisID, Yi(t, "x")), a = e.yAxisID = P1(s.yAxisID, Yi(t, "y")), r = e.rAxisID = P1(s.rAxisID, Yi(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, a, r), h30 = e.vAxisID = n(l, a, o, r);
        e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(a), e.rScale = this.getScaleForId(r), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h30);
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
        this._data && Ti(this._data, this), t._stacked && re1(t);
    }
    _dataCheck() {
        let t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
        if (O2(e)) this._data = Wa(e);
        else if (s !== e) {
            if (s) {
                Ti(s, this);
                let n = this._cachedMeta;
                re1(n), n._parsed = [];
            }
            e && Object.isExtensible(e) && qs(e, this), this._syncList = [], this._data = e;
        }
    }
    addElements() {
        let t = this._cachedMeta;
        this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType);
    }
    buildOrUpdateElements(t) {
        let e = this._cachedMeta, s = this.getDataset(), n = !1;
        this._dataCheck();
        let o = e._stacked;
        e._stacked = dn(e.vScale, e), e.stack !== s.stack && (n = !0, re1(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && fn(this, e._parsed);
    }
    configure() {
        let t = this.chart.config, e = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), e, !0);
        this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
    }
    parse(t, e) {
        let { _cachedMeta: s , _data: n  } = this, { iScale: o , _stacked: a  } = s, r = o.axis, l = t === 0 && e === n.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], h31, d, u;
        if (this._parsing === !1) s._parsed = n, s._sorted = !0, u = n;
        else {
            I(n[t]) ? u = this.parseArrayData(s, n, t, e) : O2(n[t]) ? u = this.parseObjectData(s, n, t, e) : u = this.parsePrimitiveData(s, n, t, e);
            let f = ()=>d[r] === null || c && d[r] < c[r]
            ;
            for(h31 = 0; h31 < e; ++h31)s._parsed[h31 + t] = d = u[h31], l && (f() && (l = !1), c = d);
            s._sorted = l;
        }
        a && fn(this, u);
    }
    parsePrimitiveData(t, e, s, n) {
        let { iScale: o , vScale: a  } = t, r = o.axis, l = a.axis, c = o.getLabels(), h32 = o === a, d = new Array(n), u, f, g8;
        for(u = 0, f = n; u < f; ++u)g8 = u + s, d[u] = {
            [r]: h32 || o.parse(c[g8], g8),
            [l]: a.parse(e[g8], g8)
        };
        return d;
    }
    parseArrayData(t, e, s, n) {
        let { xScale: o , yScale: a  } = t, r = new Array(n), l, c, h33, d;
        for(l = 0, c = n; l < c; ++l)h33 = l + s, d = e[h33], r[l] = {
            x: o.parse(d[0], h33),
            y: a.parse(d[1], h33)
        };
        return r;
    }
    parseObjectData(t, e, s, n) {
        let { xScale: o , yScale: a  } = t, { xAxisKey: r = "x" , yAxisKey: l = "y"  } = this._parsing, c = new Array(n), h34, d, u, f;
        for(h34 = 0, d = n; h34 < d; ++h34)u = h34 + s, f = e[u], c[h34] = {
            x: o.parse(bt(f, r), u),
            y: a.parse(bt(f, l), u)
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
            keys: to(n, !0),
            values: e._stacks[t.axis]
        };
        return hn(r, a, o.index, {
            mode: s
        });
    }
    updateRangeFromParsed(t, e, s, n) {
        let o = s[e.axis], a = o === null ? NaN : o, r = n && s._stacks[e.axis];
        n && r && (n.values = r, a = hn(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, a), t.max = Math.max(t.max, a);
    }
    getMinMax(t, e) {
        let s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, a = n.length, r = this._getOtherScale(t), l = Xa(e, s, this.chart), c = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        }, { min: h35 , max: d  } = Ha(r), u, f;
        function g9() {
            f = n[u];
            let p = f[r.axis];
            return !N(f[t.axis]) || h35 > p || d < p;
        }
        for(u = 0; u < a && !(!g9() && (this.updateRangeFromParsed(c, t, f, l), o)); ++u);
        if (o) {
            for(u = a - 1; u >= 0; --u)if (!g9()) {
                this.updateRangeFromParsed(c, t, f, l);
                break;
            }
        }
        return c;
    }
    getAllParsedValues(t) {
        let e = this._cachedMeta._parsed, s = [], n, o, a;
        for(n = 0, o = e.length; n < o; ++n)a = e[n][t.axis], N(a) && s.push(a);
        return s;
    }
    getMaxOverflow() {
        return !1;
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
        this.update(t || "default"), e._clip = Va(P1(this.options.clip, Ba(e.xScale, e.yScale, this.getMaxOverflow())));
    }
    update(t) {}
    draw() {
        let t = this._ctx, e = this.chart, s = this._cachedMeta, n = s.data || [], o = e.chartArea, a = [], r = this._drawStart || 0, l = this._drawCount || n.length - r, c = this.options.drawActiveElementsOnTop, h36;
        for(s.dataset && s.dataset.draw(t, o, r, l), h36 = r; h36 < r + l; ++h36){
            let d = n[h36];
            d.hidden || (d.active && c ? a.push(d) : d.draw(t, o));
        }
        for(h36 = 0; h36 < a.length; ++h36)a[h36].draw(t, o);
    }
    getStyle(t, e) {
        let s = e ? "active" : "default";
        return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s);
    }
    getContext(t, e, s) {
        let n = this.getDataset(), o;
        if (t >= 0 && t < this._cachedMeta.data.length) {
            let a = this._cachedMeta.data[t];
            o = a.$context || (a.$context = Ya(this.getContext(), t, a)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
        } else o = this.$context || (this.$context = $a(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
        return o.active = !!e, o.mode = s, o;
    }
    resolveDatasetElementOptions(t) {
        return this._resolveElementOptions(this.datasetElementType.id, t);
    }
    resolveDataElementOptions(t, e) {
        return this._resolveElementOptions(this.dataElementType.id, e, t);
    }
    _resolveElementOptions(t, e = "default", s) {
        let n = e === "active", o = this._cachedDataOpts, a = t + "-" + e, r = o[a], l = this.enableOptionSharing && Z2(s);
        if (r) return gn(r, l);
        let c = this.chart.config, h37 = c.datasetElementScopeKeys(this._type, t), d = n ? [
            `${t}Hover`,
            "hover",
            t,
            ""
        ] : [
            t,
            ""
        ], u = c.getOptionScopes(this.getDataset(), h37), f = Object.keys(D1.elements[t]), g10 = ()=>this.getContext(s, n)
        , p = c.resolveNamedOptions(u, f, g10, d);
        return p.$shared && (p.$shared = l, o[a] = Object.freeze(gn(p, l))), p;
    }
    _resolveAnimations(t, e, s) {
        let n = this.chart, o = this._cachedDataOpts, a = `animation-${e}`, r = o[a];
        if (r) return r;
        let l;
        if (n.options.animation !== !1) {
            let h38 = this.chart.config, d = h38.datasetAnimationScopeKeys(this._type, e), u = h38.getOptionScopes(this.getDataset(), d);
            l = h38.createResolver(u, this.getContext(t, s, e));
        }
        let c = new rs(n, l && l.animations);
        return l && l._cacheable && (o[a] = Object.freeze(c)), c;
    }
    getSharedOptions(t) {
        if (!!t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
    }
    includeOptions(t, e) {
        return !e || Xi(t) || this.chart._animationsDisabled;
    }
    updateElement(t, e, s, n) {
        Xi(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
    }
    updateSharedOptions(t, e, s) {
        t && !Xi(e) && this._resolveAnimations(void 0, e).update(t, s);
    }
    _setStyle(t, e, s, n) {
        t.active = n;
        let o = this.getStyle(e, n);
        this._resolveAnimations(e, s, n).update(t, {
            options: !n && this.getSharedOptions(o) || o
        });
    }
    removeHoverStyle(t, e, s) {
        this._setStyle(t, s, "active", !1);
    }
    setHoverStyle(t, e, s) {
        this._setStyle(t, s, "active", !0);
    }
    _removeDatasetHoverStyle() {
        let t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !1);
    }
    _setDatasetHoverStyle() {
        let t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !0);
    }
    _resyncElements(t) {
        let e = this._data, s = this._cachedMeta.data;
        for (let [r, l, c] of this._syncList)this[r](l, c);
        this._syncList = [];
        let n = s.length, o = e.length, a = Math.min(o, n);
        a && this.parse(0, a), o > n ? this._insertElements(n, o - n, t) : o < n && this._removeElements(o, n - o);
    }
    _insertElements(t, e, s = !0) {
        let n = this._cachedMeta, o = n.data, a = t + e, r, l = (c)=>{
            for(c.length += e, r = c.length - 1; r >= a; r--)c[r] = c[r - e];
        };
        for(l(o), r = t; r < a; ++r)o[r] = new this.dataElementType;
        this._parsing && l(n._parsed), this.parse(t, e), s && this.updateElements(o, t, e, "reset");
    }
    updateElements(t, e, s, n) {}
    _removeElements(t, e) {
        let s = this._cachedMeta;
        if (this._parsing) {
            let n = s._parsed.splice(t, e);
            s._stacked && re1(s, n);
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
nt.defaults = {};
nt.prototype.datasetElementType = null;
nt.prototype.dataElementType = null;
function Ua(i, t) {
    if (!i._cache.$bar) {
        let e = i.getMatchingVisibleMetas(t), s = [];
        for(let n1 = 0, o1 = e.length; n1 < o1; n1++)s = s.concat(e[n1].controller.getAllParsedValues(i));
        i._cache.$bar = Ri1(s.sort((n, o)=>n - o
        ));
    }
    return i._cache.$bar;
}
function Ka(i) {
    let t = i.iScale, e = Ua(t, i.type), s = t._length, n, o, a, r, l = ()=>{
        a === 32767 || a === -32768 || (Z2(r) && (s = Math.min(s, Math.abs(a - r) || s)), r = a);
    };
    for(n = 0, o = e.length; n < o; ++n)a = t.getPixelForValue(e[n]), l();
    for(r = void 0, n = 0, o = t.ticks.length; n < o; ++n)a = t.getPixelForTick(n), l();
    return s;
}
function qa(i, t, e, s) {
    let n = e.barThickness, o, a;
    return L(n) ? (o = t.min * e.categoryPercentage, a = e.barPercentage) : (o = n * s, a = 1), {
        chunk: o / s,
        ratio: a,
        start: t.pixels[i] - o / 2
    };
}
function Ga(i, t, e, s) {
    let n = t.pixels, o = n[i], a = i > 0 ? n[i - 1] : null, r = i < n.length - 1 ? n[i + 1] : null, l = e.categoryPercentage;
    a === null && (a = o - (r === null ? t.end - t.start : r - o)), r === null && (r = o + o - a);
    let c = o - (o - Math.min(a, r)) / 2 * l;
    return {
        chunk: Math.abs(r - a) / 2 * l / s,
        ratio: e.barPercentage,
        start: c
    };
}
function Za(i, t, e, s) {
    let n = e.parse(i[0], s), o = e.parse(i[1], s), a = Math.min(n, o), r = Math.max(n, o), l = a, c = r;
    Math.abs(a) > Math.abs(r) && (l = r, c = a), t[e.axis] = c, t._custom = {
        barStart: l,
        barEnd: c,
        start: n,
        end: o,
        min: a,
        max: r
    };
}
function eo(i, t, e, s) {
    return I(i) ? Za(i, t, e, s) : t[e.axis] = e.parse(i, s), t;
}
function pn(i, t, e, s) {
    let n = i.iScale, o = i.vScale, a = n.getLabels(), r = n === o, l = [], c, h39, d, u;
    for(c = e, h39 = e + s; c < h39; ++c)u = t[c], d = {}, d[n.axis] = r || n.parse(a[c], c), l.push(eo(u, d, o, c));
    return l;
}
function Ui(i) {
    return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function Ja(i, t, e) {
    return i !== 0 ? st(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function Qa(i) {
    let t, e, s, n, o;
    return i.horizontal ? (t = i.base > i.x, e = "left", s = "right") : (t = i.base < i.y, e = "bottom", s = "top"), t ? (n = "end", o = "start") : (n = "start", o = "end"), {
        start: e,
        end: s,
        reverse: t,
        top: n,
        bottom: o
    };
}
function tr(i, t, e, s) {
    let n = t.borderSkipped, o = {};
    if (!n) {
        i.borderSkipped = o;
        return;
    }
    let { start: a , end: r , reverse: l , top: c , bottom: h40  } = Qa(i);
    n === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = h40 : (o[mn(h40, a, r, l)] = !0, n = c)), o[mn(n, a, r, l)] = !0, i.borderSkipped = o;
}
function mn(i, t, e, s) {
    return s ? (i = er(i, t, e), i = bn(i, e, t)) : i = bn(i, t, e), i;
}
function er(i, t, e) {
    return i === t ? e : i === e ? t : i;
}
function bn(i, t, e) {
    return i === "start" ? t : i === "end" ? e : i;
}
function ir(i, { inflateAmount: t  }, e) {
    i.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
var _e2 = class extends nt {
    parsePrimitiveData(t, e, s, n) {
        return pn(t, e, s, n);
    }
    parseArrayData(t, e, s, n) {
        return pn(t, e, s, n);
    }
    parseObjectData(t, e, s, n) {
        let { iScale: o , vScale: a  } = t, { xAxisKey: r = "x" , yAxisKey: l = "y"  } = this._parsing, c = o.axis === "x" ? r : l, h41 = a.axis === "x" ? r : l, d = [], u, f, g11, p;
        for(u = s, f = s + n; u < f; ++u)p = e[u], g11 = {}, g11[o.axis] = o.parse(bt(p, c), u), d.push(eo(bt(p, h41), g11, a, u));
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
        let e = this._cachedMeta, { iScale: s , vScale: n  } = e, o = this.getParsed(t), a = o._custom, r = Ui(a) ? "[" + a.start + ", " + a.end + "]" : "" + n.getLabelForValue(o[n.axis]);
        return {
            label: "" + s.getLabelForValue(o[s.axis]),
            value: r
        };
    }
    initialize() {
        this.enableOptionSharing = !0, super.initialize();
        let t = this._cachedMeta;
        t.stack = this.getDataset().stack;
    }
    update(t) {
        let e = this._cachedMeta;
        this.updateElements(e.data, 0, e.data.length, t);
    }
    updateElements(t, e, s, n) {
        let o = n === "reset", { index: a , _cachedMeta: { vScale: r  }  } = this, l = r.getBasePixel(), c = r.isHorizontal(), h42 = this._getRuler(), d = this.resolveDataElementOptions(e, n), u = this.getSharedOptions(d), f = this.includeOptions(n, u);
        this.updateSharedOptions(u, n, d);
        for(let g12 = e; g12 < e + s; g12++){
            let p = this.getParsed(g12), m = o || L(p[r.axis]) ? {
                base: l,
                head: l
            } : this._calculateBarValuePixels(g12), b = this._calculateBarIndexPixels(g12, h42), x = (p._stacks || {})[r.axis], v5 = {
                horizontal: c,
                base: m.base,
                enableBorderRadius: !x || Ui(p._custom) || a === x._top || a === x._bottom,
                x: c ? m.head : b.center,
                y: c ? b.center : m.head,
                height: c ? b.size : Math.abs(m.size),
                width: c ? Math.abs(m.size) : b.size
            };
            f && (v5.options = u || this.resolveDataElementOptions(g12, t[g12].active ? "active" : n));
            let y15 = v5.options || t[g12].options;
            tr(v5, y15, x, a), ir(v5, y15, h42.ratio), this.updateElement(t[g12], g12, v5, n);
        }
    }
    _getStacks(t, e) {
        let n = this._cachedMeta.iScale, o = n.getMatchingVisibleMetas(this._type), a = n.options.stacked, r = o.length, l = [], c, h43;
        for(c = 0; c < r; ++c)if (h43 = o[c], !!h43.controller.options.grouped) {
            if (typeof e < "u") {
                let d = h43.controller.getParsed(e)[h43.controller._cachedMeta.vScale.axis];
                if (L(d) || isNaN(d)) continue;
            }
            if ((a === !1 || l.indexOf(h43.stack) === -1 || a === void 0 && h43.stack === void 0) && l.push(h43.stack), h43.index === t) break;
        }
        return l.length || l.push(void 0), l;
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
        for(o = 0, a = e.data.length; o < a; ++o)n.push(s.getPixelForValue(this.getParsed(o)[s.axis], o));
        let r = t.barThickness;
        return {
            min: r || Ka(e),
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
        let { _cachedMeta: { vScale: e , _stacked: s  } , options: { base: n , minBarLength: o  }  } = this, a = n || 0, r = this.getParsed(t), l = r._custom, c = Ui(l), h44 = r[e.axis], d = 0, u = s ? this.applyStack(e, r, s) : h44, f, g13;
        u !== h44 && (d = u - h44, u = h44), c && (h44 = l.barStart, u = l.barEnd - l.barStart, h44 !== 0 && st(h44) !== st(l.barEnd) && (d = 0), d += h44);
        let p = !L(n) && !c ? n : d, m = e.getPixelForValue(p);
        if (this.chart.getDataVisibility(t) ? f = e.getPixelForValue(d + u) : f = m, g13 = f - m, Math.abs(g13) < o && (g13 = Ja(g13, e, a) * o, h44 === a && (m -= g13 / 2), f = m + g13), m === e.getPixelForValue(a)) {
            let b = st(g13) * e.getLineWidthForValue(a) / 2;
            m += b, g13 -= b;
        }
        return {
            size: g13,
            base: m,
            head: f,
            center: f + g13 / 2
        };
    }
    _calculateBarIndexPixels(t, e) {
        let s = e.scale, n = this.options, o = n.skipNull, a = P1(n.maxBarThickness, 1 / 0), r, l;
        if (e.grouped) {
            let c = o ? this._getStackCount(t) : e.stackCount, h45 = n.barThickness === "flex" ? Ga(t, e, n, c) : qa(t, e, n, c), d = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
            r = h45.start + h45.chunk * d + h45.chunk / 2, l = Math.min(a, h45.chunk * h45.ratio);
        } else r = s.getPixelForValue(this.getParsed(t)[s.axis], t), l = Math.min(a, e.min * e.ratio);
        return {
            base: r - l / 2,
            head: r + l / 2,
            center: r,
            size: l
        };
    }
    draw() {
        let t = this._cachedMeta, e = t.vScale, s = t.data, n = s.length, o = 0;
        for(; o < n; ++o)this.getParsed(o)[e.axis] !== null && s[o].draw(this._ctx);
    }
};
_e2.id = "bar";
_e2.defaults = {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
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
_e2.overrides = {
    scales: {
        _index_: {
            type: "category",
            offset: !0,
            grid: {
                offset: !0
            }
        },
        _value_: {
            type: "linear",
            beginAtZero: !0
        }
    }
};
var ye2 = class extends nt {
    initialize() {
        this.enableOptionSharing = !0, super.initialize();
    }
    parsePrimitiveData(t, e, s, n) {
        let o = super.parsePrimitiveData(t, e, s, n);
        for(let a = 0; a < o.length; a++)o[a]._custom = this.resolveDataElementOptions(a + s).radius;
        return o;
    }
    parseArrayData(t, e, s, n) {
        let o = super.parseArrayData(t, e, s, n);
        for(let a = 0; a < o.length; a++){
            let r = e[s + a];
            o[a]._custom = P1(r[2], this.resolveDataElementOptions(a + s).radius);
        }
        return o;
    }
    parseObjectData(t, e, s, n) {
        let o = super.parseObjectData(t, e, s, n);
        for(let a = 0; a < o.length; a++){
            let r = e[s + a];
            o[a]._custom = P1(r && r.r && +r.r, this.resolveDataElementOptions(a + s).radius);
        }
        return o;
    }
    getMaxOverflow() {
        let t = this._cachedMeta.data, e = 0;
        for(let s = t.length - 1; s >= 0; --s)e = Math.max(e, t[s].size(this.resolveDataElementOptions(s)) / 2);
        return e > 0 && e;
    }
    getLabelAndValue(t) {
        let e = this._cachedMeta, { xScale: s , yScale: n  } = e, o = this.getParsed(t), a = s.getLabelForValue(o.x), r = n.getLabelForValue(o.y), l = o._custom;
        return {
            label: e.label,
            value: "(" + a + ", " + r + (l ? ", " + l : "") + ")"
        };
    }
    update(t) {
        let e = this._cachedMeta.data;
        this.updateElements(e, 0, e.length, t);
    }
    updateElements(t, e, s, n) {
        let o = n === "reset", { iScale: a , vScale: r  } = this._cachedMeta, l = this.resolveDataElementOptions(e, n), c = this.getSharedOptions(l), h46 = this.includeOptions(n, c), d = a.axis, u = r.axis;
        for(let f = e; f < e + s; f++){
            let g14 = t[f], p = !o && this.getParsed(f), m = {}, b = m[d] = o ? a.getPixelForDecimal(0.5) : a.getPixelForValue(p[d]), x = m[u] = o ? r.getBasePixel() : r.getPixelForValue(p[u]);
            m.skip = isNaN(b) || isNaN(x), h46 && (m.options = this.resolveDataElementOptions(f, g14.active ? "active" : n), o && (m.options.radius = 0)), this.updateElement(g14, f, m, n);
        }
        this.updateSharedOptions(c, n, l);
    }
    resolveDataElementOptions(t, e) {
        let s = this.getParsed(t), n = super.resolveDataElementOptions(t, e);
        n.$shared && (n = Object.assign({}, n, {
            $shared: !1
        }));
        let o = n.radius;
        return e !== "active" && (n.radius = 0), n.radius += P1(s && s._custom, o), n;
    }
};
ye2.id = "bubble";
ye2.defaults = {
    datasetElementType: !1,
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
ye2.overrides = {
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
                title () {
                    return "";
                }
            }
        }
    }
};
function sr(i, t, e) {
    let s = 1, n = 1, o = 0, a = 0;
    if (t < F) {
        let r = i, l = r + t, c = Math.cos(r), h47 = Math.sin(r), d = Math.cos(l), u = Math.sin(l), f = (v6, y16, _)=>Bt(v6, r, l, !0) ? 1 : Math.max(y16, y16 * e, _, _ * e)
        , g15 = (v7, y17, _)=>Bt(v7, r, l, !0) ? -1 : Math.min(y17, y17 * e, _, _ * e)
        , p = f(0, c, d), m = f(W1, h47, u), b = g15(V1, c, d), x = g15(V1 + W1, h47, u);
        s = (p - b) / 2, n = (m - x) / 2, o = -(p + b) / 2, a = -(m + x) / 2;
    }
    return {
        ratioX: s,
        ratioY: n,
        offsetX: o,
        offsetY: a
    };
}
var At = class extends nt {
    constructor(t, e){
        super(t, e);
        this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
    }
    linkScales() {}
    parse(t, e) {
        let s = this.getDataset().data, n = this._cachedMeta;
        if (this._parsing === !1) n._parsed = s;
        else {
            let o = (l)=>+s[l]
            ;
            if (O2(s[t])) {
                let { key: l = "value"  } = this._parsing;
                o = (c)=>+bt(s[c], l)
                ;
            }
            let a, r;
            for(a = t, r = t + e; a < r; ++a)n._parsed[a] = o(a);
        }
    }
    _getRotation() {
        return et(this.options.rotation - 90);
    }
    _getCircumference() {
        return et(this.options.circumference);
    }
    _getRotationExtents() {
        let t = F, e = -F;
        for(let s = 0; s < this.chart.data.datasets.length; ++s)if (this.chart.isDatasetVisible(s)) {
            let n = this.chart.getDatasetMeta(s).controller, o = n._getRotation(), a = n._getCircumference();
            t = Math.min(t, o), e = Math.max(e, o + a);
        }
        return {
            rotation: t,
            circumference: e - t
        };
    }
    update(t) {
        let e = this.chart, { chartArea: s  } = e, n = this._cachedMeta, o = n.data, a = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, r = Math.max((Math.min(s.width, s.height) - a) / 2, 0), l = Math.min(As(this.options.cutout, r), 1), c = this._getRingWeight(this.index), { circumference: h48 , rotation: d  } = this._getRotationExtents(), { ratioX: u , ratioY: f , offsetX: g16 , offsetY: p  } = sr(d, h48, l), m = (s.width - a) / u, b = (s.height - a) / f, x = Math.max(Math.min(m, b) / 2, 0), v8 = _i(this.options.radius, x), y18 = Math.max(v8 * l, 0), _ = (v8 - y18) / this._getVisibleDatasetWeightTotal();
        this.offsetX = g16 * v8, this.offsetY = p * v8, n.total = this.calculateTotal(), this.outerRadius = v8 - _ * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - _ * c, 0), this.updateElements(o, 0, o.length, t);
    }
    _circumference(t, e) {
        let s = this.options, n = this._cachedMeta, o = this._getCircumference();
        return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / F);
    }
    updateElements(t, e, s, n) {
        let o = n === "reset", a = this.chart, r = a.chartArea, c = a.options.animation, h49 = (r.left + r.right) / 2, d = (r.top + r.bottom) / 2, u = o && c.animateScale, f = u ? 0 : this.innerRadius, g17 = u ? 0 : this.outerRadius, p = this.resolveDataElementOptions(e, n), m = this.getSharedOptions(p), b = this.includeOptions(n, m), x = this._getRotation(), v9;
        for(v9 = 0; v9 < e; ++v9)x += this._circumference(v9, o);
        for(v9 = e; v9 < e + s; ++v9){
            let y19 = this._circumference(v9, o), _ = t[v9], w = {
                x: h49 + this.offsetX,
                y: d + this.offsetY,
                startAngle: x,
                endAngle: x + y19,
                circumference: y19,
                outerRadius: g17,
                innerRadius: f
            };
            b && (w.options = m || this.resolveDataElementOptions(v9, _.active ? "active" : n)), x += y19, this.updateElement(_, v9, w, n);
        }
        this.updateSharedOptions(m, n, p);
    }
    calculateTotal() {
        let t = this._cachedMeta, e = t.data, s = 0, n;
        for(n = 0; n < e.length; n++){
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
        let e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = Wt(e._parsed[t], s.options.locale);
        return {
            label: n[t] || "",
            value: o
        };
    }
    getMaxBorderWidth(t) {
        let e = 0, s = this.chart, n, o, a, r, l;
        if (!t) {
            for(n = 0, o = s.data.datasets.length; n < o; ++n)if (s.isDatasetVisible(n)) {
                a = s.getDatasetMeta(n), t = a.data, r = a.controller;
                break;
            }
        }
        if (!t) return 0;
        for(n = 0, o = t.length; n < o; ++n)l = r.resolveDataElementOptions(n), l.borderAlign !== "inner" && (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
        return e;
    }
    getMaxOffset(t) {
        let e = 0;
        for(let s = 0, n = t.length; s < n; ++s){
            let o = this.resolveDataElementOptions(s);
            e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
        }
        return e;
    }
    _getRingWeightOffset(t) {
        let e = 0;
        for(let s = 0; s < t; ++s)this.chart.isDatasetVisible(s) && (e += this._getRingWeight(s));
        return e;
    }
    _getRingWeight(t) {
        return Math.max(P1(this.chart.data.datasets[t].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
};
At.id = "doughnut";
At.defaults = {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: {
        animateRotate: !0,
        animateScale: !1
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
At.descriptors = {
    _scriptable: (i)=>i !== "spacing"
    ,
    _indexable: (i)=>i !== "spacing"
};
At.overrides = {
    aspectRatio: 1,
    plugins: {
        legend: {
            labels: {
                generateLabels (i) {
                    let t = i.data;
                    if (t.labels.length && t.datasets.length) {
                        let { labels: { pointStyle: e  }  } = i.legend.options;
                        return t.labels.map((s, n)=>{
                            let a = i.getDatasetMeta(0).controller.getStyle(n);
                            return {
                                text: s,
                                fillStyle: a.backgroundColor,
                                strokeStyle: a.borderColor,
                                lineWidth: a.borderWidth,
                                pointStyle: e,
                                hidden: !i.getDataVisibility(n),
                                index: n
                            };
                        });
                    }
                    return [];
                }
            },
            onClick (i, t, e) {
                e.chart.toggleDataVisibility(t.index), e.chart.update();
            }
        },
        tooltip: {
            callbacks: {
                title () {
                    return "";
                },
                label (i) {
                    let t = i.label, e = ": " + i.formattedValue;
                    return I(t) ? (t = t.slice(), t[0] += e) : t += e, t;
                }
            }
        }
    }
};
var Ht = class extends nt {
    initialize() {
        this.enableOptionSharing = !0, super.initialize();
    }
    update(t) {
        let e = this._cachedMeta, { dataset: s , data: n = [] , _dataset: o  } = e, a = this.chart._animationsDisabled, { start: r , count: l  } = nr(e, n, a);
        this._drawStart = r, this._drawCount = l, or(e) && (r = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
        let c = this.resolveDatasetElementOptions(t);
        this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
            animated: !a,
            options: c
        }, t), this.updateElements(n, r, l, t);
    }
    updateElements(t, e, s, n) {
        let o = n === "reset", { iScale: a , vScale: r , _stacked: l , _dataset: c  } = this._cachedMeta, h50 = this.resolveDataElementOptions(e, n), d = this.getSharedOptions(h50), u = this.includeOptions(n, d), f = a.axis, g18 = r.axis, { spanGaps: p , segment: m  } = this.options, b = zt(p) ? p : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || o || n === "none", v10 = e > 0 && this.getParsed(e - 1);
        for(let y20 = e; y20 < e + s; ++y20){
            let _ = t[y20], w = this.getParsed(y20), M5 = x ? _ : {}, S11 = L(w[g18]), k12 = M5[f] = a.getPixelForValue(w[f], y20), E = M5[g18] = o || S11 ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, w, l) : w[g18], y20);
            M5.skip = isNaN(k12) || isNaN(E) || S11, M5.stop = y20 > 0 && w[f] - v10[f] > b, m && (M5.parsed = w, M5.raw = c.data[y20]), u && (M5.options = d || this.resolveDataElementOptions(y20, _.active ? "active" : n)), x || this.updateElement(_, y20, M5, n), v10 = w;
        }
        this.updateSharedOptions(d, n, h50);
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
Ht.id = "line";
Ht.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1
};
Ht.overrides = {
    scales: {
        _index_: {
            type: "category"
        },
        _value_: {
            type: "linear"
        }
    }
};
function nr(i, t, e) {
    let s = t.length, n = 0, o = s;
    if (i._sorted) {
        let { iScale: a , _parsed: r  } = i, l = a.axis, { min: c , max: h51 , minDefined: d , maxDefined: u  } = a.getUserBounds();
        d && (n = $(Math.min(rt(r, a.axis, c).lo, e ? s : rt(t, l, a.getPixelForValue(c)).lo), 0, s - 1)), u ? o = $(Math.max(rt(r, a.axis, h51).hi + 1, e ? 0 : rt(t, l, a.getPixelForValue(h51)).hi + 1), n, s) - n : o = s - n;
    }
    return {
        start: n,
        count: o
    };
}
function or(i) {
    let { xScale: t , yScale: e , _scaleRanges: s  } = i, n = {
        xmin: t.min,
        xmax: t.max,
        ymin: e.min,
        ymax: e.max
    };
    if (!s) return i._scaleRanges = n, !0;
    let o = s.xmin !== t.min || s.xmax !== t.max || s.ymin !== e.min || s.ymax !== e.max;
    return Object.assign(s, n), o;
}
var ve2 = class extends nt {
    constructor(t, e){
        super(t, e);
        this.innerRadius = void 0, this.outerRadius = void 0;
    }
    getLabelAndValue(t) {
        let e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = Wt(e._parsed[t].r, s.options.locale);
        return {
            label: n[t] || "",
            value: o
        };
    }
    update(t) {
        let e = this._cachedMeta.data;
        this._updateRadius(), this.updateElements(e, 0, e.length, t);
    }
    _updateRadius() {
        let t = this.chart, e = t.chartArea, s = t.options, n = Math.min(e.right - e.left, e.bottom - e.top), o = Math.max(n / 2, 0), a = Math.max(s.cutoutPercentage ? o / 100 * s.cutoutPercentage : 1, 0), r = (o - a) / t.getVisibleDatasetCount();
        this.outerRadius = o - r * this.index, this.innerRadius = this.outerRadius - r;
    }
    updateElements(t, e, s, n) {
        let o = n === "reset", a = this.chart, r = this.getDataset(), c = a.options.animation, h52 = this._cachedMeta.rScale, d = h52.xCenter, u = h52.yCenter, f = h52.getIndexAngle(0) - 0.5 * V1, g19 = f, p, m = 360 / this.countVisibleElements();
        for(p = 0; p < e; ++p)g19 += this._computeAngle(p, n, m);
        for(p = e; p < e + s; p++){
            let b = t[p], x = g19, v11 = g19 + this._computeAngle(p, n, m), y21 = a.getDataVisibility(p) ? h52.getDistanceFromCenterForValue(r.data[p]) : 0;
            g19 = v11, o && (c.animateScale && (y21 = 0), c.animateRotate && (x = v11 = f));
            let _ = {
                x: d,
                y: u,
                innerRadius: 0,
                outerRadius: y21,
                startAngle: x,
                endAngle: v11,
                options: this.resolveDataElementOptions(p, b.active ? "active" : n)
            };
            this.updateElement(b, p, _, n);
        }
    }
    countVisibleElements() {
        let t = this.getDataset(), e = this._cachedMeta, s = 0;
        return e.data.forEach((n, o)=>{
            !isNaN(t.data[o]) && this.chart.getDataVisibility(o) && s++;
        }), s;
    }
    _computeAngle(t, e, s) {
        return this.chart.getDataVisibility(t) ? et(this.resolveDataElementOptions(t, e).angle || s) : 0;
    }
};
ve2.id = "polarArea";
ve2.defaults = {
    dataElementType: "arc",
    animation: {
        animateRotate: !0,
        animateScale: !0
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
ve2.overrides = {
    aspectRatio: 1,
    plugins: {
        legend: {
            labels: {
                generateLabels (i) {
                    let t = i.data;
                    if (t.labels.length && t.datasets.length) {
                        let { labels: { pointStyle: e  }  } = i.legend.options;
                        return t.labels.map((s, n)=>{
                            let a = i.getDatasetMeta(0).controller.getStyle(n);
                            return {
                                text: s,
                                fillStyle: a.backgroundColor,
                                strokeStyle: a.borderColor,
                                lineWidth: a.borderWidth,
                                pointStyle: e,
                                hidden: !i.getDataVisibility(n),
                                index: n
                            };
                        });
                    }
                    return [];
                }
            },
            onClick (i, t, e) {
                e.chart.toggleDataVisibility(t.index), e.chart.update();
            }
        },
        tooltip: {
            callbacks: {
                title () {
                    return "";
                },
                label (i) {
                    return i.chart.data.labels[i.dataIndex] + ": " + i.formattedValue;
                }
            }
        }
    },
    scales: {
        r: {
            type: "radialLinear",
            angleLines: {
                display: !1
            },
            beginAtZero: !0,
            grid: {
                circular: !0
            },
            pointLabels: {
                display: !1
            },
            startAngle: 0
        }
    }
};
var ni = class extends At {
};
ni.id = "pie";
ni.defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
};
var Me2 = class extends nt {
    getLabelAndValue(t) {
        let e = this._cachedMeta.vScale, s = this.getParsed(t);
        return {
            label: e.getLabels()[t],
            value: "" + e.getLabelForValue(s[e.axis])
        };
    }
    update(t) {
        let e = this._cachedMeta, s = e.dataset, n = e.data || [], o = e.iScale.getLabels();
        if (s.points = n, t !== "resize") {
            let a = this.resolveDatasetElementOptions(t);
            this.options.showLine || (a.borderWidth = 0);
            let r = {
                _loop: !0,
                _fullLoop: o.length === n.length,
                options: a
            };
            this.updateElement(s, void 0, r, t);
        }
        this.updateElements(n, 0, n.length, t);
    }
    updateElements(t, e, s, n) {
        let o = this.getDataset(), a = this._cachedMeta.rScale, r = n === "reset";
        for(let l = e; l < e + s; l++){
            let c = t[l], h53 = this.resolveDataElementOptions(l, c.active ? "active" : n), d = a.getPointPositionForValue(l, o.data[l]), u = r ? a.xCenter : d.x, f = r ? a.yCenter : d.y, g20 = {
                x: u,
                y: f,
                angle: d.angle,
                skip: isNaN(u) || isNaN(f),
                options: h53
            };
            this.updateElement(c, l, g20, n);
        }
    }
};
Me2.id = "radar";
Me2.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    indexAxis: "r",
    showLine: !0,
    elements: {
        line: {
            fill: "start"
        }
    }
};
Me2.overrides = {
    aspectRatio: 1,
    scales: {
        r: {
            type: "radialLinear"
        }
    }
};
var we2 = class extends Ht {
};
we2.id = "scatter";
we2.defaults = {
    showLine: !1,
    fill: !1
};
we2.overrides = {
    interaction: {
        mode: "point"
    },
    plugins: {
        tooltip: {
            callbacks: {
                title () {
                    return "";
                },
                label (i) {
                    return "(" + i.label + ", " + i.formattedValue + ")";
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
var ar = Object.freeze({
    __proto__: null,
    BarController: _e2,
    BubbleController: ye2,
    DoughnutController: At,
    LineController: Ht,
    PolarAreaController: ve2,
    PieController: ni,
    RadarController: Me2,
    ScatterController: we2
});
function Ot() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
var ti = class {
    constructor(t){
        this.options = t || {};
    }
    formats() {
        return Ot();
    }
    parse(t, e) {
        return Ot();
    }
    format(t, e) {
        return Ot();
    }
    add(t, e, s) {
        return Ot();
    }
    diff(t, e, s) {
        return Ot();
    }
    startOf(t, e, s) {
        return Ot();
    }
    endOf(t, e) {
        return Ot();
    }
};
ti.override = function(i) {
    Object.assign(ti.prototype, i);
};
var rr = {
    _date: ti
};
function ue1(i, t) {
    return "native" in i ? {
        x: i.x,
        y: i.y
    } : Bi(i, t);
}
function lr(i, t) {
    let e = i.getSortedVisibleDatasetMetas(), s, n, o;
    for(let a = 0, r = e.length; a < r; ++a){
        ({ index: s , data: n  } = e[a]);
        for(let l = 0, c = n.length; l < c; ++l)o = n[l], o.skip || t(o, s, l);
    }
}
function cr(i, t, e, s) {
    let { controller: n , data: o , _sorted: a  } = i, r = n._cachedMeta.iScale;
    if (r && t === r.axis && t !== "r" && a && o.length) {
        let l = r._reversePixels ? Xs : rt;
        if (s) {
            if (n._sharedOptions) {
                let c = o[0], h54 = typeof c.getRange == "function" && c.getRange(t);
                if (h54) {
                    let d = l(o, t, e - h54), u = l(o, t, e + h54);
                    return {
                        lo: d.lo,
                        hi: u.hi
                    };
                }
            }
        } else return l(o, t, e);
    }
    return {
        lo: 0,
        hi: o.length - 1
    };
}
function ls(i, t, e, s, n) {
    let o = i.getSortedVisibleDatasetMetas(), a = e[t];
    for(let r = 0, l = o.length; r < l; ++r){
        let { index: c , data: h55  } = o[r], { lo: d , hi: u  } = cr(o[r], t, a, n);
        for(let f = d; f <= u; ++f){
            let g21 = h55[f];
            g21.skip || s(g21, c, f);
        }
    }
}
function hr(i) {
    let t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
    return function(s, n) {
        let o = t ? Math.abs(s.x - n.x) : 0, a = e ? Math.abs(s.y - n.y) : 0;
        return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2));
    };
}
function Ki(i, t, e, s) {
    let n = [];
    return mt(t, i.chartArea, i._minPadding) && ls(i, e, t, function(a, r, l) {
        a.inRange(t.x, t.y, s) && n.push({
            element: a,
            datasetIndex: r,
            index: l
        });
    }, !0), n;
}
function dr(i, t, e, s) {
    let n = [];
    function o(a, r, l) {
        let { startAngle: c , endAngle: h56  } = a.getProps([
            "startAngle",
            "endAngle"
        ], s), { angle: d  } = ki(a, {
            x: t.x,
            y: t.y
        });
        Bt(d, c, h56) && n.push({
            element: a,
            datasetIndex: r,
            index: l
        });
    }
    return ls(i, e, t, o), n;
}
function ur(i, t, e, s, n) {
    let o = [], a = hr(e), r = Number.POSITIVE_INFINITY;
    function l(c, h57, d) {
        let u = c.inRange(t.x, t.y, n);
        if (s && !u) return;
        let f = c.getCenterPoint(n);
        if (!mt(f, i.chartArea, i._minPadding) && !u) return;
        let p = a(t, f);
        p < r ? (o = [
            {
                element: c,
                datasetIndex: h57,
                index: d
            }
        ], r = p) : p === r && o.push({
            element: c,
            datasetIndex: h57,
            index: d
        });
    }
    return ls(i, e, t, l), o;
}
function qi(i, t, e, s, n) {
    return mt(t, i.chartArea, i._minPadding) ? e === "r" && !s ? dr(i, t, e, n) : ur(i, t, e, s, n) : [];
}
function xn(i, t, e, s) {
    let n = ue1(t, i), o = [], a = e.axis, r = a === "x" ? "inXRange" : "inYRange", l = !1;
    return lr(i, (c, h58, d)=>{
        c[r](n[a], s) && o.push({
            element: c,
            datasetIndex: h58,
            index: d
        }), c.inRange(n.x, n.y, s) && (l = !0);
    }), e.intersect && !l ? [] : o;
}
var fr = {
    modes: {
        index (i, t, e, s) {
            let n = ue1(t, i), o = e.axis || "x", a = e.intersect ? Ki(i, n, o, s) : qi(i, n, o, !1, s), r = [];
            return a.length ? (i.getSortedVisibleDatasetMetas().forEach((l)=>{
                let c = a[0].index, h59 = l.data[c];
                h59 && !h59.skip && r.push({
                    element: h59,
                    datasetIndex: l.index,
                    index: c
                });
            }), r) : [];
        },
        dataset (i, t, e, s) {
            let n = ue1(t, i), o = e.axis || "xy", a = e.intersect ? Ki(i, n, o, s) : qi(i, n, o, !1, s);
            if (a.length > 0) {
                let r = a[0].datasetIndex, l = i.getDatasetMeta(r).data;
                a = [];
                for(let c = 0; c < l.length; ++c)a.push({
                    element: l[c],
                    datasetIndex: r,
                    index: c
                });
            }
            return a;
        },
        point (i, t, e, s) {
            let n = ue1(t, i), o = e.axis || "xy";
            return Ki(i, n, o, s);
        },
        nearest (i, t, e, s) {
            let n = ue1(t, i), o = e.axis || "xy";
            return qi(i, n, o, e.intersect, s);
        },
        x (i, t, e, s) {
            return xn(i, t, {
                axis: "x",
                intersect: e.intersect
            }, s);
        },
        y (i, t, e, s) {
            return xn(i, t, {
                axis: "y",
                intersect: e.intersect
            }, s);
        }
    }
}, io = [
    "left",
    "top",
    "right",
    "bottom"
];
function le1(i, t) {
    return i.filter((e)=>e.pos === t
    );
}
function _n(i, t) {
    return i.filter((e)=>io.indexOf(e.pos) === -1 && e.box.axis === t
    );
}
function ce(i, t) {
    return i.sort((e, s)=>{
        let n = t ? s : e, o = t ? e : s;
        return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
    });
}
function gr(i) {
    let t = [], e, s, n, o, a, r;
    for(e = 0, s = (i || []).length; e < s; ++e)n = i[e], ({ position: o , options: { stack: a , stackWeight: r = 1  }  } = n), t.push({
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
function pr(i) {
    let t = {};
    for (let e of i){
        let { stack: s , pos: n , stackWeight: o  } = e;
        if (!s || !io.includes(n)) continue;
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
function mr(i, t) {
    let e = pr(i), { vBoxMaxWidth: s , hBoxMaxHeight: n  } = t, o, a, r;
    for(o = 0, a = i.length; o < a; ++o){
        r = i[o];
        let { fullSize: l  } = r.box, c = e[r.stack], h60 = c && r.stackWeight / c.weight;
        r.horizontal ? (r.width = h60 ? h60 * s : l && t.availableWidth, r.height = n) : (r.width = s, r.height = h60 ? h60 * n : l && t.availableHeight);
    }
    return e;
}
function br(i) {
    let t = gr(i), e = ce(t.filter((c)=>c.box.fullSize
    ), !0), s = ce(le1(t, "left"), !0), n = ce(le1(t, "right")), o = ce(le1(t, "top"), !0), a = ce(le1(t, "bottom")), r = _n(t, "x"), l = _n(t, "y");
    return {
        fullSize: e,
        leftAndTop: s.concat(o),
        rightAndBottom: n.concat(l).concat(a).concat(r),
        chartArea: le1(t, "chartArea"),
        vertical: s.concat(n).concat(l),
        horizontal: o.concat(a).concat(r)
    };
}
function yn(i, t, e, s) {
    return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function so(i, t) {
    i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function xr(i, t, e, s) {
    let { pos: n , box: o  } = e, a = i.maxPadding;
    if (!O2(n)) {
        e.size && (i[n] -= e.size);
        let d = s[e.stack] || {
            size: 0,
            count: 1
        };
        d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i[n] += e.size;
    }
    o.getPadding && so(a, o.getPadding());
    let r = Math.max(0, t.outerWidth - yn(a, i, "left", "right")), l = Math.max(0, t.outerHeight - yn(a, i, "top", "bottom")), c = r !== i.w, h61 = l !== i.h;
    return i.w = r, i.h = l, e.horizontal ? {
        same: c,
        other: h61
    } : {
        same: h61,
        other: c
    };
}
function _r(i) {
    let t = i.maxPadding;
    function e(s) {
        let n = Math.max(t[s] - i[s], 0);
        return i[s] += n, n;
    }
    i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function yr(i, t) {
    let e = t.maxPadding;
    function s(n) {
        let o = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        return n.forEach((a)=>{
            o[a] = Math.max(t[a], e[a]);
        }), o;
    }
    return s(i ? [
        "left",
        "right"
    ] : [
        "top",
        "bottom"
    ]);
}
function fe1(i, t, e, s) {
    let n = [], o, a, r, l, c, h62;
    for(o = 0, a = i.length, c = 0; o < a; ++o){
        r = i[o], l = r.box, l.update(r.width || t.w, r.height || t.h, yr(r.horizontal, t));
        let { same: d , other: u  } = xr(t, e, r, s);
        c |= d && n.length, h62 = h62 || u, l.fullSize || n.push(r);
    }
    return c && fe1(n, t, e, s) || h62;
}
function Ue1(i, t, e, s, n) {
    i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
}
function vn(i, t, e, s) {
    let n = e.padding, { x: o , y: a  } = t;
    for (let r of i){
        let l = r.box, c = s[r.stack] || {
            count: 1,
            placed: 0,
            weight: 1
        }, h63 = r.stackWeight / c.weight || 1;
        if (r.horizontal) {
            let d = t.w * h63, u = c.size || l.height;
            Z2(c.start) && (a = c.start), l.fullSize ? Ue1(l, n.left, a, e.outerWidth - n.right - n.left, u) : Ue1(l, t.left + c.placed, a, d, u), c.start = a, c.placed += d, a = l.bottom;
        } else {
            let d = t.h * h63, u = c.size || l.width;
            Z2(c.start) && (o = c.start), l.fullSize ? Ue1(l, o, n.top, u, e.outerHeight - n.bottom - n.top) : Ue1(l, o, t.top + c.placed, u, d), c.start = o, c.placed += d, o = l.right;
        }
    }
    t.x = o, t.y = a;
}
D1.set("layout", {
    autoPadding: !0,
    padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
});
var U = {
    addBox (i, t) {
        i.boxes || (i.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
            return [
                {
                    z: 0,
                    draw (e) {
                        t.draw(e);
                    }
                }
            ];
        }, i.boxes.push(t);
    },
    removeBox (i, t) {
        let e = i.boxes ? i.boxes.indexOf(t) : -1;
        e !== -1 && i.boxes.splice(e, 1);
    },
    configure (i, t, e) {
        t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
    },
    update (i, t, e, s) {
        if (!i) return;
        let n = X1(i.options.layout.padding), o = Math.max(t - n.width, 0), a = Math.max(e - n.height, 0), r = br(i.boxes), l = r.vertical, c = r.horizontal;
        R(i.boxes, (p)=>{
            typeof p.beforeLayout == "function" && p.beforeLayout();
        });
        let h64 = l.reduce((p, m)=>m.box.options && m.box.options.display === !1 ? p : p + 1
        , 0) || 1, d = Object.freeze({
            outerWidth: t,
            outerHeight: e,
            padding: n,
            availableWidth: o,
            availableHeight: a,
            vBoxMaxWidth: o / 2 / h64,
            hBoxMaxHeight: a / 2
        }), u = Object.assign({}, n);
        so(u, X1(s));
        let f = Object.assign({
            maxPadding: u,
            w: o,
            h: a,
            x: n.left,
            y: n.top
        }, n), g22 = mr(l.concat(c), d);
        fe1(r.fullSize, f, d, g22), fe1(l, f, d, g22), fe1(c, f, d, g22) && fe1(l, f, d, g22), _r(f), vn(r.leftAndTop, f, d, g22), f.x += f.w, f.y += f.h, vn(r.rightAndBottom, f, d, g22), i.chartArea = {
            left: f.left,
            top: f.top,
            right: f.left + f.w,
            bottom: f.top + f.h,
            height: f.h,
            width: f.w
        }, R(r.chartArea, (p)=>{
            let m = p.box;
            Object.assign(m, i.chartArea), m.update(f.w, f.h, {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            });
        });
    }
}, cs = class {
    acquireContext(t, e) {}
    releaseContext(t) {
        return !1;
    }
    addEventListener(t, e, s) {}
    removeEventListener(t, e, s) {}
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
        return !0;
    }
    updateConfig(t) {}
}, no = class extends cs {
    acquireContext(t) {
        return t && t.getContext && t.getContext("2d") || null;
    }
    updateConfig(t) {
        t.options.animation = !1;
    }
}, Qe = "$chartjs", vr = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout"
}, Mn = (i)=>i === null || i === ""
;
function Mr(i, t) {
    let e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
    if (i[Qe] = {
        initial: {
            height: s,
            width: n,
            style: {
                display: e.display,
                height: e.height,
                width: e.width
            }
        }
    }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Mn(n)) {
        let o = Wi(i, "width");
        o !== void 0 && (i.width = o);
    }
    if (Mn(s)) if (i.style.height === "") i.height = i.width / (t || 2);
    else {
        let o = Wi(i, "height");
        o !== void 0 && (i.height = o);
    }
    return i;
}
var oo = sn ? {
    passive: !0
} : !1;
function wr(i, t, e) {
    i.addEventListener(t, e, oo);
}
function kr(i, t, e) {
    i.canvas.removeEventListener(t, e, oo);
}
function Sr(i, t) {
    let e = vr[i.type] || i.type, { x: s , y: n  } = Bi(i, t);
    return {
        type: e,
        chart: t,
        native: i,
        x: s !== void 0 ? s : null,
        y: n !== void 0 ? n : null
    };
}
function ei(i, t) {
    for (let e of i)if (e === t || e.contains(t)) return !0;
}
function Pr(i, t, e) {
    let s = i.canvas, n = new MutationObserver((o)=>{
        let a = !1;
        for (let r of o)a = a || ei(r.addedNodes, s), a = a && !ei(r.removedNodes, s);
        a && e();
    });
    return n.observe(document, {
        childList: !0,
        subtree: !0
    }), n;
}
function Cr(i, t, e) {
    let s = i.canvas, n = new MutationObserver((o)=>{
        let a = !1;
        for (let r of o)a = a || ei(r.removedNodes, s), a = a && !ei(r.addedNodes, s);
        a && e();
    });
    return n.observe(document, {
        childList: !0,
        subtree: !0
    }), n;
}
var me2 = new Map, wn = 0;
function ao() {
    let i = window.devicePixelRatio;
    i !== wn && (wn = i, me2.forEach((t, e)=>{
        e.currentDevicePixelRatio !== i && t();
    }));
}
function Dr(i, t) {
    me2.size || window.addEventListener("resize", ao), me2.set(i, t);
}
function Or1(i) {
    me2.delete(i), me2.size || window.removeEventListener("resize", ao);
}
function Ar(i, t, e) {
    let s = i.canvas, n = s && Ye(s);
    if (!n) return;
    let o = xi((r, l)=>{
        let c = n.clientWidth;
        e(r, l), c < n.clientWidth && e();
    }, window), a = new ResizeObserver((r)=>{
        let l = r[0], c = l.contentRect.width, h65 = l.contentRect.height;
        c === 0 && h65 === 0 || o(c, h65);
    });
    return a.observe(n), Dr(i, o), a;
}
function Gi(i, t, e) {
    e && e.disconnect(), t === "resize" && Or1(i);
}
function Lr(i, t, e) {
    let s = i.canvas, n = xi((o)=>{
        i.ctx !== null && e(Sr(o, i));
    }, i, (o)=>{
        let a = o[0];
        return [
            a,
            a.offsetX,
            a.offsetY
        ];
    });
    return wr(s, t, n), n;
}
var ro = class extends cs {
    acquireContext(t, e) {
        let s = t && t.getContext && t.getContext("2d");
        return s && s.canvas === t ? (Mr(t, e), s) : null;
    }
    releaseContext(t) {
        let e = t.canvas;
        if (!e[Qe]) return !1;
        let s = e[Qe].initial;
        [
            "height",
            "width"
        ].forEach((o)=>{
            let a = s[o];
            L(a) ? e.removeAttribute(o) : e.setAttribute(o, a);
        });
        let n = s.style || {};
        return Object.keys(n).forEach((o)=>{
            e.style[o] = n[o];
        }), e.width = e.width, delete e[Qe], !0;
    }
    addEventListener(t, e, s) {
        this.removeEventListener(t, e);
        let n = t.$proxies || (t.$proxies = {}), a = {
            attach: Pr,
            detach: Cr,
            resize: Ar
        }[e] || Lr;
        n[e] = a(t, e, s);
    }
    removeEventListener(t, e) {
        let s = t.$proxies || (t.$proxies = {}), n = s[e];
        if (!n) return;
        (({
            attach: Gi,
            detach: Gi,
            resize: Gi
        })[e] || kr)(t, e, n), s[e] = void 0;
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio;
    }
    getMaximumSize(t, e, s, n) {
        return en(t, e, s, n);
    }
    isAttached(t) {
        let e = Ye(t);
        return !!(e && e.isConnected);
    }
};
function Tr(i) {
    return !Ii() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? no : ro;
}
var it = class {
    constructor(){
        this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0;
    }
    tooltipPosition(t) {
        let { x: e , y: s  } = this.getProps([
            "x",
            "y"
        ], t);
        return {
            x: e,
            y: s
        };
    }
    hasValue() {
        return zt(this.x) && zt(this.y);
    }
    getProps(t, e) {
        let s = this.$animations;
        if (!e || !s) return this;
        let n = {};
        return t.forEach((o)=>{
            n[o] = s[o] && s[o].active() ? s[o]._to : this[o];
        }), n;
    }
};
it.defaults = {};
it.defaultRoutes = void 0;
var lo = {
    values (i) {
        return I(i) ? i : "" + i;
    },
    numeric (i, t, e) {
        if (i === 0) return "0";
        let s = this.chart.options.locale, n, o = i;
        if (e.length > 1) {
            let c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
            (c < 0.0001 || c > 1000000000000000) && (n = "scientific"), o = Rr(i, e);
        }
        let a = Q1(Math.abs(o)), r = Math.max(Math.min(-1 * Math.floor(a), 20), 0), l = {
            notation: n,
            minimumFractionDigits: r,
            maximumFractionDigits: r
        };
        return Object.assign(l, this.options.ticks.format), Wt(i, s, l);
    },
    logarithmic (i, t, e) {
        if (i === 0) return "0";
        let s = i / Math.pow(10, Math.floor(Q1(i)));
        return s === 1 || s === 2 || s === 5 ? lo.numeric.call(this, i, t, e) : "";
    }
};
function Rr(i, t) {
    let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
    return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var oi = {
    formatters: lo
};
D1.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    grace: 0,
    grid: {
        display: !0,
        lineWidth: 1,
        drawBorder: !0,
        drawOnChartArea: !0,
        drawTicks: !0,
        tickLength: 8,
        tickWidth: (i, t)=>t.lineWidth
        ,
        tickColor: (i, t)=>t.color
        ,
        offset: !1,
        borderDash: [],
        borderDashOffset: 0,
        borderWidth: 1
    },
    title: {
        display: !1,
        text: "",
        padding: {
            top: 4,
            bottom: 4
        }
    },
    ticks: {
        minRotation: 0,
        maxRotation: 50,
        mirror: !1,
        textStrokeWidth: 0,
        textStrokeColor: "",
        padding: 3,
        display: !0,
        autoSkip: !0,
        autoSkipPadding: 3,
        labelOffset: 0,
        callback: oi.formatters.values,
        minor: {},
        major: {},
        align: "center",
        crossAlign: "near",
        showLabelBackdrop: !1,
        backdropColor: "rgba(255, 255, 255, 0.75)",
        backdropPadding: 2
    }
});
D1.route("scale.ticks", "color", "", "color");
D1.route("scale.grid", "color", "", "borderColor");
D1.route("scale.grid", "borderColor", "", "borderColor");
D1.route("scale.title", "color", "", "color");
D1.describe("scale", {
    _fallback: !1,
    _scriptable: (i)=>!i.startsWith("before") && !i.startsWith("after") && i !== "callback" && i !== "parser"
    ,
    _indexable: (i)=>i !== "borderDash" && i !== "tickBorderDash"
});
D1.describe("scales", {
    _fallback: "scale"
});
D1.describe("scale.ticks", {
    _scriptable: (i)=>i !== "backdropPadding" && i !== "callback"
    ,
    _indexable: (i)=>i !== "backdropPadding"
});
function Er(i, t) {
    let e = i.options.ticks, s = e.maxTicksLimit || Fr(i), n = e.major.enabled ? Ir(t) : [], o = n.length, a = n[0], r = n[o - 1], l = [];
    if (o > s) return Br(t, l, n, o / s), l;
    let c = zr(n, t, s);
    if (o > 0) {
        let h66, d, u = o > 1 ? Math.round((r - a) / (o - 1)) : null;
        for(Ke(t, l, c, L(u) ? 0 : a - u, a), h66 = 0, d = o - 1; h66 < d; h66++)Ke(t, l, c, n[h66], n[h66 + 1]);
        return Ke(t, l, c, r, L(u) ? t.length : r + u), l;
    }
    return Ke(t, l, c), l;
}
function Fr(i) {
    let t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
    return Math.floor(Math.min(s, n));
}
function zr(i, t, e) {
    let s = Vr(i), n = t.length / e;
    if (!s) return Math.max(n, 1);
    let o = Rs1(s);
    for(let a = 0, r = o.length - 1; a < r; a++){
        let l = o[a];
        if (l > n) return l;
    }
    return Math.max(n, 1);
}
function Ir(i) {
    let t = [], e, s;
    for(e = 0, s = i.length; e < s; e++)i[e].major && t.push(e);
    return t;
}
function Br(i, t, e, s) {
    let n = 0, o = e[0], a;
    for(s = Math.ceil(s), a = 0; a < i.length; a++)a === o && (t.push(i[a]), n++, o = e[n * s]);
}
function Ke(i, t, e, s, n) {
    let o = P1(s, 0), a = Math.min(P1(n, i.length), i.length), r = 0, l, c, h67;
    for(e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h67 = o; h67 < 0;)r++, h67 = Math.round(o + r * e);
    for(c = Math.max(o, 0); c < a; c++)c === h67 && (t.push(i[c]), r++, h67 = Math.round(o + r * e));
}
function Vr(i) {
    let t = i.length, e, s;
    if (t < 2) return !1;
    for(s = i[0], e = 1; e < t; ++e)if (i[e] - i[e - 1] !== s) return !1;
    return s;
}
var Wr = (i)=>i === "left" ? "right" : i === "right" ? "left" : i
, kn = (i, t, e)=>t === "top" || t === "left" ? i[t] + e : i[t] - e
;
function Sn(i, t) {
    let e = [], s = i.length / t, n = i.length, o = 0;
    for(; o < n; o += s)e.push(i[Math.floor(o)]);
    return e;
}
function Nr(i, t, e) {
    let s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, a = i._endPixel, r = 0.000001, l = i.getPixelForTick(n), c;
    if (!(e && (s === 1 ? c = Math.max(l - o, a - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - r || l > a + r))) return l;
}
function Hr(i, t) {
    R(i, (e)=>{
        let s = e.gc, n = s.length / 2, o;
        if (n > t) {
            for(o = 0; o < n; ++o)delete e.data[s[o]];
            s.splice(0, n);
        }
    });
}
function he2(i) {
    return i.drawTicks ? i.tickLength : 0;
}
function Pn(i, t) {
    if (!i.display) return 0;
    let e = j(i.font, t), s = X1(i.padding);
    return (I(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function jr(i, t) {
    return ht(i, {
        scale: t,
        type: "scale"
    });
}
function $r(i, t, e) {
    return ht(i, {
        tick: e,
        index: t,
        type: "tick"
    });
}
function Yr(i, t, e) {
    let s = Ie2(i);
    return (e && t !== "right" || !e && t === "right") && (s = Wr(s)), s;
}
function Xr(i, t, e, s) {
    let { top: n , left: o , bottom: a , right: r , chart: l  } = i, { chartArea: c , scales: h68  } = l, d = 0, u, f, g23, p = a - n, m = r - o;
    if (i.isHorizontal()) {
        if (f = Y1(s, o, r), O2(e)) {
            let b = Object.keys(e)[0], x = e[b];
            g23 = h68[b].getPixelForValue(x) + p - t;
        } else e === "center" ? g23 = (c.bottom + c.top) / 2 + p - t : g23 = kn(i, e, t);
        u = r - o;
    } else {
        if (O2(e)) {
            let b = Object.keys(e)[0], x = e[b];
            f = h68[b].getPixelForValue(x) - m + t;
        } else e === "center" ? f = (c.left + c.right) / 2 - m + t : f = kn(i, e, t);
        g23 = Y1(s, a, n), d = e === "left" ? -W1 : W1;
    }
    return {
        titleX: f,
        titleY: g23,
        maxWidth: u,
        rotation: d
    };
}
var wt = class extends it {
    constructor(t){
        super();
        this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
    }
    init(t) {
        this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
    }
    parse(t, e) {
        return t;
    }
    getUserBounds() {
        let { _userMin: t , _userMax: e , _suggestedMin: s , _suggestedMax: n  } = this;
        return t = J1(t, Number.POSITIVE_INFINITY), e = J1(e, Number.NEGATIVE_INFINITY), s = J1(s, Number.POSITIVE_INFINITY), n = J1(n, Number.NEGATIVE_INFINITY), {
            min: J1(t, s),
            max: J1(e, n),
            minDefined: N(t),
            maxDefined: N(e)
        };
    }
    getMinMax(t) {
        let { min: e , max: s , minDefined: n , maxDefined: o  } = this.getUserBounds(), a;
        if (n && o) return {
            min: e,
            max: s
        };
        let r = this.getMatchingVisibleMetas();
        for(let l = 0, c = r.length; l < c; ++l)a = r[l].controller.getMinMax(this, t), n || (e = Math.min(e, a.min)), o || (s = Math.max(s, a.max));
        return e = o && e > s ? s : e, s = n && e > s ? e : s, {
            min: J1(e, J1(s, e)),
            max: J1(s, J1(e, s))
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
        this._cache = {}, this._dataLimitsCached = !1;
    }
    beforeUpdate() {
        B1(this.options.beforeUpdate, [
            this
        ]);
    }
    update(t, e, s) {
        let { beginAtZero: n , grace: o , ticks: a  } = this.options, r = a.sampleSize;
        this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = s = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Ys(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
        let l = r < this.ticks.length;
        this._convertTicksToLabels(l ? Sn(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), a.display && (a.autoSkip || a.source === "auto") && (this.ticks = Er(this, this.ticks), this._labelSizes = null), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
    }
    configure() {
        let t = this.options.reverse, e, s;
        this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
    }
    afterUpdate() {
        B1(this.options.afterUpdate, [
            this
        ]);
    }
    beforeSetDimensions() {
        B1(this.options.beforeSetDimensions, [
            this
        ]);
    }
    setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
    }
    afterSetDimensions() {
        B1(this.options.afterSetDimensions, [
            this
        ]);
    }
    _callHooks(t) {
        this.chart.notifyPlugins(t, this.getContext()), B1(this.options[t], [
            this
        ]);
    }
    beforeDataLimits() {
        this._callHooks("beforeDataLimits");
    }
    determineDataLimits() {}
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
        B1(this.options.beforeTickToLabelConversion, [
            this
        ]);
    }
    generateTickLabels(t) {
        let e = this.options.ticks, s, n, o;
        for(s = 0, n = t.length; s < n; s++)o = t[s], o.label = B1(e.callback, [
            o.value,
            s,
            t
        ], this);
    }
    afterTickToLabelConversion() {
        B1(this.options.afterTickToLabelConversion, [
            this
        ]);
    }
    beforeCalculateLabelRotation() {
        B1(this.options.beforeCalculateLabelRotation, [
            this
        ]);
    }
    calculateLabelRotation() {
        let t = this.options, e = t.ticks, s = this.ticks.length, n = e.minRotation || 0, o = e.maxRotation, a = n, r, l, c;
        if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
            this.labelRotation = n;
            return;
        }
        let h69 = this._getLabelSizes(), d = h69.widest.width, u = h69.highest.height, f = $(this.chart.width - d, 0, this.maxWidth);
        r = t.offset ? this.maxWidth / s : f / (s - 1), d + 6 > r && (r = f / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - he2(t.grid) - e.padding - Pn(t.title, this.chart.options.font), c = Math.sqrt(d * d + u * u), a = Ve(Math.min(Math.asin($((h69.highest.height + 6) / r, -1, 1)), Math.asin($(l / c, -1, 1)) - Math.asin($(u / c, -1, 1)))), a = Math.max(n, Math.min(o, a))), this.labelRotation = a;
    }
    afterCalculateLabelRotation() {
        B1(this.options.afterCalculateLabelRotation, [
            this
        ]);
    }
    beforeFit() {
        B1(this.options.beforeFit, [
            this
        ]);
    }
    fit() {
        let t = {
            width: 0,
            height: 0
        }, { chart: e , options: { ticks: s , title: n , grid: o  }  } = this, a = this._isVisible(), r = this.isHorizontal();
        if (a) {
            let l = Pn(n, e.options.font);
            if (r ? (t.width = this.maxWidth, t.height = he2(o) + l) : (t.height = this.maxHeight, t.width = he2(o) + l), s.display && this.ticks.length) {
                let { first: c , last: h70 , widest: d , highest: u  } = this._getLabelSizes(), f = s.padding * 2, g24 = et(this.labelRotation), p = Math.cos(g24), m = Math.sin(g24);
                if (r) {
                    let b = s.mirror ? 0 : m * d.width + p * u.height;
                    t.height = Math.min(this.maxHeight, t.height + b + f);
                } else {
                    let b = s.mirror ? 0 : p * d.width + m * u.height;
                    t.width = Math.min(this.maxWidth, t.width + b + f);
                }
                this._calculatePadding(c, h70, m, p);
            }
        }
        this._handleMargins(), r ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
    }
    _calculatePadding(t, e, s, n) {
        let { ticks: { align: o , padding: a  } , position: r  } = this.options, l = this.labelRotation !== 0, c = r !== "top" && this.axis === "x";
        if (this.isHorizontal()) {
            let h71 = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1), u = 0, f = 0;
            l ? c ? (u = n * t.width, f = s * e.height) : (u = s * t.height, f = n * e.width) : o === "start" ? f = e.width : o === "end" ? u = t.width : (u = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((u - h71 + a) * this.width / (this.width - h71), 0), this.paddingRight = Math.max((f - d + a) * this.width / (this.width - d), 0);
        } else {
            let h72 = e.height / 2, d = t.height / 2;
            o === "start" ? (h72 = 0, d = t.height) : o === "end" && (h72 = e.height, d = 0), this.paddingTop = h72 + a, this.paddingBottom = d + a;
        }
    }
    _handleMargins() {
        this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
    }
    afterFit() {
        B1(this.options.afterFit, [
            this
        ]);
    }
    isHorizontal() {
        let { axis: t , position: e  } = this.options;
        return e === "top" || e === "bottom" || t === "x";
    }
    isFullSize() {
        return this.options.fullSize;
    }
    _convertTicksToLabels(t) {
        this.beforeTickToLabelConversion(), this.generateTickLabels(t);
        let e, s;
        for(e = 0, s = t.length; e < s; e++)L(t[e].label) && (t.splice(e, 1), s--, e--);
        this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
        let t = this._labelSizes;
        if (!t) {
            let e = this.options.ticks.sampleSize, s = this.ticks;
            e < s.length && (s = Sn(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length);
        }
        return t;
    }
    _computeLabelSizes(t, e) {
        let { ctx: s , _longestTextCache: n  } = this, o = [], a = [], r = 0, l = 0, c, h73, d, u, f, g25, p, m, b, x, v12;
        for(c = 0; c < e; ++c){
            if (u = t[c].label, f = this._resolveTickFontOptions(c), s.font = g25 = f.string, p = n[g25] = n[g25] || {
                data: {},
                gc: []
            }, m = f.lineHeight, b = x = 0, !L(u) && !I(u)) b = te1(s, p.data, p.gc, b, u), x = m;
            else if (I(u)) for(h73 = 0, d = u.length; h73 < d; ++h73)v12 = u[h73], !L(v12) && !I(v12) && (b = te1(s, p.data, p.gc, b, v12), x += m);
            o.push(b), a.push(x), r = Math.max(b, r), l = Math.max(x, l);
        }
        Hr(n, e);
        let y22 = o.indexOf(r), _ = a.indexOf(l), w = (M6)=>({
                width: o[M6] || 0,
                height: a[M6] || 0
            })
        ;
        return {
            first: w(0),
            last: w(e - 1),
            widest: w(y22),
            highest: w(_),
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
    getValueForPixel(t) {}
    getPixelForTick(t) {
        let e = this.ticks;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
    }
    getPixelForDecimal(t) {
        this._reversePixels && (t = 1 - t);
        let e = this._startPixel + t * this._length;
        return Fs(this._alignToPixels ? _t(this.chart, e, 0) : e);
    }
    getDecimalForPixel(t) {
        let e = (t - this._startPixel) / this._length;
        return this._reversePixels ? 1 - e : e;
    }
    getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
        let { min: t , max: e  } = this;
        return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
    }
    getContext(t) {
        let e = this.ticks || [];
        if (t >= 0 && t < e.length) {
            let s = e[t];
            return s.$context || (s.$context = $r(this.getContext(), t, s));
        }
        return this.$context || (this.$context = jr(this.chart.getContext(), this));
    }
    _tickSize() {
        let t = this.options.ticks, e = et(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), a = t.autoSkipPadding || 0, r = o ? o.widest.width + a : 0, l = o ? o.highest.height + a : 0;
        return this.isHorizontal() ? l * s > r * n ? r / s : l / n : l * n < r * s ? l / s : r / n;
    }
    _isVisible() {
        let t = this.options.display;
        return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(t) {
        let e = this.axis, s = this.chart, n = this.options, { grid: o , position: a  } = n, r = o.offset, l = this.isHorizontal(), h74 = this.ticks.length + (r ? 1 : 0), d = he2(o), u = [], f = o.setContext(this.getContext()), g26 = f.drawBorder ? f.borderWidth : 0, p = g26 / 2, m = function(C9) {
            return _t(s, C9, g26);
        }, b, x, v13, y23, _, w, M7, S12, k13, E, T8, A4;
        if (a === "top") b = m(this.bottom), w = this.bottom - d, S12 = b - p, E = m(t.top) + p, A4 = t.bottom;
        else if (a === "bottom") b = m(this.top), E = t.top, A4 = m(t.bottom) - p, w = b + p, S12 = this.top + d;
        else if (a === "left") b = m(this.right), _ = this.right - d, M7 = b - p, k13 = m(t.left) + p, T8 = t.right;
        else if (a === "right") b = m(this.left), k13 = t.left, T8 = m(t.right) - p, _ = b + p, M7 = this.left + d;
        else if (e === "x") {
            if (a === "center") b = m((t.top + t.bottom) / 2 + 0.5);
            else if (O2(a)) {
                let C10 = Object.keys(a)[0], z3 = a[C10];
                b = m(this.chart.scales[C10].getPixelForValue(z3));
            }
            E = t.top, A4 = t.bottom, w = b + p, S12 = w + d;
        } else if (e === "y") {
            if (a === "center") b = m((t.left + t.right) / 2);
            else if (O2(a)) {
                let C11 = Object.keys(a)[0], z4 = a[C11];
                b = m(this.chart.scales[C11].getPixelForValue(z4));
            }
            _ = b - p, M7 = _ - d, k13 = t.left, T8 = t.right;
        }
        let H3 = P1(n.ticks.maxTicksLimit, h74), K3 = Math.max(1, Math.ceil(h74 / H3));
        for(x = 0; x < h74; x += K3){
            let C12 = o.setContext(this.getContext(x)), z5 = C12.lineWidth, Yt = C12.color, kt = o.borderDash || [], Xt = C12.borderDashOffset, Ce3 = C12.tickWidth, Lt = C12.tickColor, Ut = C12.tickBorderDash || [], Kt = C12.tickBorderDashOffset;
            v13 = Nr(this, x, r), v13 !== void 0 && (y23 = _t(s, v13, z5), l ? _ = M7 = k13 = T8 = y23 : w = S12 = E = A4 = y23, u.push({
                tx1: _,
                ty1: w,
                tx2: M7,
                ty2: S12,
                x1: k13,
                y1: E,
                x2: T8,
                y2: A4,
                width: z5,
                color: Yt,
                borderDash: kt,
                borderDashOffset: Xt,
                tickWidth: Ce3,
                tickColor: Lt,
                tickBorderDash: Ut,
                tickBorderDashOffset: Kt
            }));
        }
        return this._ticksLength = h74, this._borderValue = b, u;
    }
    _computeLabelItems(t) {
        let e = this.axis, s = this.options, { position: n , ticks: o  } = s, a = this.isHorizontal(), r = this.ticks, { align: l , crossAlign: c , padding: h75 , mirror: d  } = o, u = he2(s.grid), f = u + h75, g27 = d ? -h75 : f, p = -et(this.labelRotation), m = [], b, x, v14, y24, _, w, M8, S13, k14, E, T9, A5, H4 = "middle";
        if (n === "top") w = this.bottom - g27, M8 = this._getXAxisLabelAlignment();
        else if (n === "bottom") w = this.top + g27, M8 = this._getXAxisLabelAlignment();
        else if (n === "left") {
            let C13 = this._getYAxisLabelAlignment(u);
            M8 = C13.textAlign, _ = C13.x;
        } else if (n === "right") {
            let C14 = this._getYAxisLabelAlignment(u);
            M8 = C14.textAlign, _ = C14.x;
        } else if (e === "x") {
            if (n === "center") w = (t.top + t.bottom) / 2 + f;
            else if (O2(n)) {
                let C15 = Object.keys(n)[0], z6 = n[C15];
                w = this.chart.scales[C15].getPixelForValue(z6) + f;
            }
            M8 = this._getXAxisLabelAlignment();
        } else if (e === "y") {
            if (n === "center") _ = (t.left + t.right) / 2 - f;
            else if (O2(n)) {
                let C16 = Object.keys(n)[0], z7 = n[C16];
                _ = this.chart.scales[C16].getPixelForValue(z7);
            }
            M8 = this._getYAxisLabelAlignment(u).textAlign;
        }
        e === "y" && (l === "start" ? H4 = "top" : l === "end" && (H4 = "bottom"));
        let K4 = this._getLabelSizes();
        for(b = 0, x = r.length; b < x; ++b){
            v14 = r[b], y24 = v14.label;
            let C17 = o.setContext(this.getContext(b));
            S13 = this.getPixelForTick(b) + o.labelOffset, k14 = this._resolveTickFontOptions(b), E = k14.lineHeight, T9 = I(y24) ? y24.length : 1;
            let z8 = T9 / 2, Yt = C17.color, kt = C17.textStrokeColor, Xt = C17.textStrokeWidth;
            a ? (_ = S13, n === "top" ? c === "near" || p !== 0 ? A5 = -T9 * E + E / 2 : c === "center" ? A5 = -K4.highest.height / 2 - z8 * E + E : A5 = -K4.highest.height + E / 2 : c === "near" || p !== 0 ? A5 = E / 2 : c === "center" ? A5 = K4.highest.height / 2 - z8 * E : A5 = K4.highest.height - T9 * E, d && (A5 *= -1)) : (w = S13, A5 = (1 - T9) * E / 2);
            let Ce4;
            if (C17.showLabelBackdrop) {
                let Lt = X1(C17.backdropPadding), Ut = K4.heights[b], Kt = K4.widths[b], di = w + A5 - Lt.top, ui = _ - Lt.left;
                switch(H4){
                    case "middle":
                        di -= Ut / 2;
                        break;
                    case "bottom":
                        di -= Ut;
                        break;
                }
                switch(M8){
                    case "center":
                        ui -= Kt / 2;
                        break;
                    case "right":
                        ui -= Kt;
                        break;
                }
                Ce4 = {
                    left: ui,
                    top: di,
                    width: Kt + Lt.width,
                    height: Ut + Lt.height,
                    color: C17.backdropColor
                };
            }
            m.push({
                rotation: p,
                label: y24,
                font: k14,
                color: Yt,
                strokeColor: kt,
                strokeWidth: Xt,
                textOffset: A5,
                textAlign: M8,
                textBaseline: H4,
                translation: [
                    _,
                    w
                ],
                backdrop: Ce4
            });
        }
        return m;
    }
    _getXAxisLabelAlignment() {
        let { position: t , ticks: e  } = this.options;
        if (-et(this.labelRotation)) return t === "top" ? "left" : "right";
        let n = "center";
        return e.align === "start" ? n = "left" : e.align === "end" && (n = "right"), n;
    }
    _getYAxisLabelAlignment(t) {
        let { position: e , ticks: { crossAlign: s , mirror: n , padding: o  }  } = this.options, a = this._getLabelSizes(), r = t + o, l = a.widest.width, c, h76;
        return e === "left" ? n ? (h76 = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", h76 += l / 2) : (c = "right", h76 += l)) : (h76 = this.right - r, s === "near" ? c = "right" : s === "center" ? (c = "center", h76 -= l / 2) : (c = "left", h76 = this.left)) : e === "right" ? n ? (h76 = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", h76 -= l / 2) : (c = "left", h76 -= l)) : (h76 = this.left + r, s === "near" ? c = "left" : s === "center" ? (c = "center", h76 += l / 2) : (c = "right", h76 = this.right)) : c = "right", {
            textAlign: c,
            x: h76
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
        let { ctx: t , options: { backgroundColor: e  } , left: s , top: n , width: o , height: a  } = this;
        e && (t.save(), t.fillStyle = e, t.fillRect(s, n, o, a), t.restore());
    }
    getLineWidthForValue(t) {
        let e = this.options.grid;
        if (!this._isVisible() || !e.display) return 0;
        let n = this.ticks.findIndex((o)=>o.value === t
        );
        return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
    }
    drawGrid(t) {
        let e = this.options.grid, s = this.ctx, n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t)), o, a, r = (l, c, h77)=>{
            !h77.width || !h77.color || (s.save(), s.lineWidth = h77.width, s.strokeStyle = h77.color, s.setLineDash(h77.borderDash || []), s.lineDashOffset = h77.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore());
        };
        if (e.display) for(o = 0, a = n.length; o < a; ++o){
            let l = n[o];
            e.drawOnChartArea && r({
                x: l.x1,
                y: l.y1
            }, {
                x: l.x2,
                y: l.y2
            }, l), e.drawTicks && r({
                x: l.tx1,
                y: l.ty1
            }, {
                x: l.tx2,
                y: l.ty2
            }, {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset
            });
        }
    }
    drawBorder() {
        let { chart: t , ctx: e , options: { grid: s  }  } = this, n = s.setContext(this.getContext()), o = s.drawBorder ? n.borderWidth : 0;
        if (!o) return;
        let a = s.setContext(this.getContext(0)).lineWidth, r = this._borderValue, l, c, h78, d;
        this.isHorizontal() ? (l = _t(t, this.left, o) - o / 2, c = _t(t, this.right, a) + a / 2, h78 = d = r) : (h78 = _t(t, this.top, o) - o / 2, d = _t(t, this.bottom, a) + a / 2, l = c = r), e.save(), e.lineWidth = n.borderWidth, e.strokeStyle = n.borderColor, e.beginPath(), e.moveTo(l, h78), e.lineTo(c, d), e.stroke(), e.restore();
    }
    drawLabels(t) {
        if (!this.options.ticks.display) return;
        let s = this.ctx, n = this._computeLabelArea();
        n && ne1(s, n);
        let o = this._labelItems || (this._labelItems = this._computeLabelItems(t)), a, r;
        for(a = 0, r = o.length; a < r; ++a){
            let l = o[a], c = l.font, h79 = l.label;
            l.backdrop && (s.fillStyle = l.backdrop.color, s.fillRect(l.backdrop.left, l.backdrop.top, l.backdrop.width, l.backdrop.height));
            let d = l.textOffset;
            yt(s, h79, 0, d, c, l);
        }
        n && oe(s);
    }
    drawTitle() {
        let { ctx: t , options: { position: e , title: s , reverse: n  }  } = this;
        if (!s.display) return;
        let o = j(s.font), a = X1(s.padding), r = s.align, l = o.lineHeight / 2;
        e === "bottom" || e === "center" || O2(e) ? (l += a.bottom, I(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += a.top;
        let { titleX: c , titleY: h80 , maxWidth: d , rotation: u  } = Xr(this, l, e, r);
        yt(t, s.text, 0, 0, o, {
            color: s.color,
            maxWidth: d,
            rotation: u,
            textAlign: Yr(r, e, n),
            textBaseline: "middle",
            translation: [
                c,
                h80
            ]
        });
    }
    draw(t) {
        !this._isVisible() || (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
    }
    _layers() {
        let t = this.options, e = t.ticks && t.ticks.z || 0, s = P1(t.grid && t.grid.z, -1);
        return !this._isVisible() || this.draw !== wt.prototype.draw ? [
            {
                z: e,
                draw: (n)=>{
                    this.draw(n);
                }
            }
        ] : [
            {
                z: s,
                draw: (n)=>{
                    this.drawBackground(), this.drawGrid(n), this.drawTitle();
                }
            },
            {
                z: s + 1,
                draw: ()=>{
                    this.drawBorder();
                }
            },
            {
                z: e,
                draw: (n)=>{
                    this.drawLabels(n);
                }
            }
        ];
    }
    getMatchingVisibleMetas(t) {
        let e = this.chart.getSortedVisibleDatasetMetas(), s = this.axis + "AxisID", n = [], o, a;
        for(o = 0, a = e.length; o < a; ++o){
            let r = e[o];
            r[s] === this.id && (!t || r.type === t) && n.push(r);
        }
        return n;
    }
    _resolveTickFontOptions(t) {
        let e = this.options.ticks.setContext(this.getContext(t));
        return j(e.font);
    }
    _maxDigits() {
        let t = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / t;
    }
}, ge2 = class {
    constructor(t, e, s){
        this.type = t, this.scope = e, this.override = s, this.items = Object.create(null);
    }
    isForType(t) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
    }
    register(t) {
        let e = Object.getPrototypeOf(t), s;
        qr(e) && (s = this.register(e));
        let n = this.items, o = t.id, a = this.scope + "." + o;
        if (!o) throw new Error("class does not have id: " + t);
        return o in n || (n[o] = t, Ur(t, a, s), this.override && D1.override(t.id, t.overrides)), a;
    }
    get(t) {
        return this.items[t];
    }
    unregister(t) {
        let e = this.items, s = t.id, n = this.scope;
        s in e && delete e[s], n && s in D1[n] && (delete D1[n][s], this.override && delete xt[s]);
    }
};
function Ur(i, t, e) {
    let s = Rt(Object.create(null), [
        e ? D1.get(e) : {},
        D1.get(t),
        i.defaults
    ]);
    D1.set(t, s), i.defaultRoutes && Kr(t, i.defaultRoutes), i.descriptors && D1.describe(t, i.descriptors);
}
function Kr(i, t) {
    Object.keys(t).forEach((e)=>{
        let s = e.split("."), n = s.pop(), o = [
            i
        ].concat(s).join("."), a = t[e].split("."), r = a.pop(), l = a.join(".");
        D1.route(o, n, l, r);
    });
}
function qr(i) {
    return "id" in i && "defaults" in i;
}
var co = class {
    constructor(){
        this.controllers = new ge2(nt, "datasets", !0), this.elements = new ge2(it, "elements"), this.plugins = new ge2(Object, "plugins"), this.scales = new ge2(wt, "scales"), this._typedRegistries = [
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
        ].forEach((n)=>{
            let o = s || this._getRegistryForType(n);
            s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : R(n, (a)=>{
                let r = s || this._getRegistryForType(a);
                this._exec(t, r, a);
            });
        });
    }
    _exec(t, e, s) {
        let n = Be(t);
        B1(s["before" + n], [], s), e[t](s), B1(s["after" + n], [], s);
    }
    _getRegistryForType(t) {
        for(let e = 0; e < this._typedRegistries.length; e++){
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
}, ft = new co, ho = class {
    constructor(){
        this._init = [];
    }
    notify(t, e, s, n) {
        e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
        let o = n ? this._descriptors(t).filter(n) : this._descriptors(t), a = this._notify(o, t, e, s);
        return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), a;
    }
    _notify(t, e, s, n) {
        n = n || {};
        for (let o of t){
            let a = o.plugin, r = a[s], l = [
                e,
                n,
                o.options
            ];
            if (B1(r, l, a) === !1 && n.cancelable) return !1;
        }
        return !0;
    }
    invalidate() {
        L(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
    }
    _descriptors(t) {
        if (this._cache) return this._cache;
        let e = this._cache = this._createDescriptors(t);
        return this._notifyStateChanges(t), e;
    }
    _createDescriptors(t, e) {
        let s = t && t.config, n = P1(s.options && s.options.plugins, {}), o = Gr(s);
        return n === !1 && !e ? [] : Jr(t, o, n, e);
    }
    _notifyStateChanges(t) {
        let e = this._oldCache || [], s = this._cache, n = (o, a)=>o.filter((r)=>!a.some((l)=>r.plugin.id === l.plugin.id
                )
            )
        ;
        this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
    }
};
function Gr(i) {
    let t = [], e = Object.keys(ft.plugins.items);
    for(let n = 0; n < e.length; n++)t.push(ft.getPlugin(e[n]));
    let s = i.plugins || [];
    for(let n3 = 0; n3 < s.length; n3++){
        let o = s[n3];
        t.indexOf(o) === -1 && t.push(o);
    }
    return t;
}
function Zr(i, t) {
    return !t && i === !1 ? null : i === !0 ? {} : i;
}
function Jr(i, t, e, s) {
    let n = [], o = i.getContext();
    for(let a = 0; a < t.length; a++){
        let r = t[a], l = r.id, c = Zr(e[l], s);
        c !== null && n.push({
            plugin: r,
            options: Qr(i.config, r, c, o)
        });
    }
    return n;
}
function Qr(i, t, e, s) {
    let n = i.pluginScopeKeys(t), o = i.getOptionScopes(e, n);
    return i.createResolver(o, s, [
        ""
    ], {
        scriptable: !1,
        indexable: !1,
        allKeys: !0
    });
}
function ts(i, t) {
    let e = D1.datasets[i] || {};
    return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function tl(i, t) {
    let e = i;
    return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function el(i, t) {
    return i === t ? "_index_" : "_value_";
}
function il(i) {
    if (i === "top" || i === "bottom") return "x";
    if (i === "left" || i === "right") return "y";
}
function es(i, t) {
    return i === "x" || i === "y" ? i : t.axis || il(t.position) || i.charAt(0).toLowerCase();
}
function sl(i, t) {
    let e = xt[i.type] || {
        scales: {}
    }, s = t.scales || {}, n = ts(i.type, t), o = Object.create(null), a = Object.create(null);
    return Object.keys(s).forEach((r)=>{
        let l = s[r];
        if (!O2(l)) return console.error(`Invalid scale configuration for scale: ${r}`);
        if (l._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
        let c = es(r, l), h81 = el(c, n), d = e.scales || {};
        o[c] = o[c] || r, a[r] = Ft(Object.create(null), [
            {
                axis: c
            },
            l,
            d[c],
            d[h81]
        ]);
    }), i.data.datasets.forEach((r)=>{
        let l = r.type || i.type, c = r.indexAxis || ts(l, t), d = (xt[l] || {}).scales || {};
        Object.keys(d).forEach((u)=>{
            let f = tl(u, c), g28 = r[f + "AxisID"] || o[f] || f;
            a[g28] = a[g28] || Object.create(null), Ft(a[g28], [
                {
                    axis: f
                },
                s[g28],
                d[u]
            ]);
        });
    }), Object.keys(a).forEach((r)=>{
        let l = a[r];
        Ft(l, [
            D1.scales[l.type],
            D1.scale
        ]);
    }), a;
}
function uo(i) {
    let t = i.options || (i.options = {});
    t.plugins = P1(t.plugins, {}), t.scales = sl(i, t);
}
function fo(i) {
    return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function nl(i) {
    return i = i || {}, i.data = fo(i.data), uo(i), i;
}
var Cn = new Map, go = new Set;
function qe1(i, t) {
    let e = Cn.get(i);
    return e || (e = t(), Cn.set(i, e), go.add(e)), e;
}
var de2 = (i, t, e)=>{
    let s = bt(t, e);
    s !== void 0 && i.add(s);
}, po = class {
    constructor(t){
        this._config = nl(t), this._scopeCache = new Map, this._resolverCache = new Map;
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
        this._config.data = fo(t);
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
        this.clearCache(), uo(t);
    }
    clearCache() {
        this._scopeCache.clear(), this._resolverCache.clear();
    }
    datasetScopeKeys(t) {
        return qe1(t, ()=>[
                [
                    `datasets.${t}`,
                    ""
                ]
            ]
        );
    }
    datasetAnimationScopeKeys(t, e) {
        return qe1(`${t}.transition.${e}`, ()=>[
                [
                    `datasets.${t}.transitions.${e}`,
                    `transitions.${e}`
                ],
                [
                    `datasets.${t}`,
                    ""
                ]
            ]
        );
    }
    datasetElementScopeKeys(t, e) {
        return qe1(`${t}-${e}`, ()=>[
                [
                    `datasets.${t}.elements.${e}`,
                    `datasets.${t}`,
                    `elements.${e}`,
                    ""
                ]
            ]
        );
    }
    pluginScopeKeys(t) {
        let e = t.id, s = this.type;
        return qe1(`${s}-plugin-${e}`, ()=>[
                [
                    `plugins.${e}`,
                    ...t.additionalOptionScopes || []
                ]
            ]
        );
    }
    _cachedScopes(t, e) {
        let s = this._scopeCache, n = s.get(t);
        return (!n || e) && (n = new Map, s.set(t, n)), n;
    }
    getOptionScopes(t, e, s) {
        let { options: n , type: o  } = this, a = this._cachedScopes(t, s), r = a.get(e);
        if (r) return r;
        let l = new Set;
        e.forEach((h82)=>{
            t && (l.add(t), h82.forEach((d)=>de2(l, t, d)
            )), h82.forEach((d)=>de2(l, n, d)
            ), h82.forEach((d)=>de2(l, xt[o] || {}, d)
            ), h82.forEach((d)=>de2(l, D1, d)
            ), h82.forEach((d)=>de2(l, Ne2, d)
            );
        });
        let c = Array.from(l);
        return c.length === 0 && c.push(Object.create(null)), go.has(e) && a.set(e, c), c;
    }
    chartOptionScopes() {
        let { options: t , type: e  } = this;
        return [
            t,
            xt[e] || {},
            D1.datasets[e] || {},
            {
                type: e
            },
            D1,
            Ne2
        ];
    }
    resolveNamedOptions(t, e, s, n = [
        ""
    ]) {
        let o = {
            $shared: !0
        }, { resolver: a , subPrefixes: r  } = Dn(this._resolverCache, t, n), l = a;
        if (al(a, e)) {
            o.$shared = !1, s = ct(s) ? s() : s;
            let c = this.createResolver(t, s, r);
            l = Pt(a, s, c);
        }
        for (let c of e)o[c] = l[c];
        return o;
    }
    createResolver(t, e, s = [
        ""
    ], n) {
        let { resolver: o  } = Dn(this._resolverCache, t, s);
        return O2(e) ? Pt(o, e, void 0, n) : o;
    }
};
function Dn(i, t, e) {
    let s = i.get(t);
    s || (s = new Map, i.set(t, s));
    let n = e.join(), o = s.get(n);
    return o || (o = {
        resolver: $e1(t, e),
        subPrefixes: e.filter((r)=>!r.toLowerCase().includes("hover")
        )
    }, s.set(n, o)), o;
}
var ol = (i)=>O2(i) && Object.getOwnPropertyNames(i).reduce((t, e)=>t || ct(i[e])
    , !1)
;
function al(i, t) {
    let { isScriptable: e , isIndexable: s  } = Ei(i);
    for (let n of t){
        let o = e(n), a = s(n), r = (a || o) && i[n];
        if (o && (ct(r) || ol(r)) || a && I(r)) return !0;
    }
    return !1;
}
var rl = "3.7.1", ll = [
    "top",
    "bottom",
    "left",
    "right",
    "chartArea"
];
function On(i, t) {
    return i === "top" || i === "bottom" || ll.indexOf(i) === -1 && t === "x";
}
function An(i, t) {
    return function(e, s) {
        return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
    };
}
function Ln(i) {
    let t = i.chart, e = t.options.animation;
    t.notifyPlugins("afterRender"), B1(e && e.onComplete, [
        i
    ], t);
}
function cl(i) {
    let t = i.chart, e = t.options.animation;
    B1(e && e.onProgress, [
        i
    ], t);
}
function mo(i) {
    return Ii() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
var ii = {}, bo = (i)=>{
    let t = mo(i);
    return Object.values(ii).filter((e)=>e.canvas === t
    ).pop();
};
function hl(i, t, e) {
    let s = Object.keys(i);
    for (let n of s){
        let o = +n;
        if (o >= t) {
            let a = i[n];
            delete i[n], (e > 0 || o > t) && (i[o + e] = a);
        }
    }
}
function dl(i, t, e, s) {
    return !e || i.type === "mouseout" ? null : s ? t : i;
}
var hs = class {
    constructor(t, e){
        let s = this.config = new po(e), n = mo(t), o = bo(n);
        if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas can be reused.");
        let a = s.createResolver(s.chartOptionScopes(), this.getContext());
        this.platform = new (s.platform || Tr(n)), this.platform.updateConfig(s);
        let r = this.platform.acquireContext(n, a.aspectRatio), l = r && r.canvas, c = l && l.height, h83 = l && l.width;
        if (this.id = Os1(), this.ctx = r, this.canvas = l, this.width = h83, this.height = c, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new ho, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Cs1((d)=>this.update(d)
        , a.resizeDelay || 0), this._dataChanges = [], ii[this.id] = this, !r || !l) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return;
        }
        dt.listen(this, "complete", Ln), dt.listen(this, "progress", cl), this._initialize(), this.attached && this.update();
    }
    get aspectRatio() {
        let { options: { aspectRatio: t , maintainAspectRatio: e  } , width: s , height: n , _aspectRatio: o  } = this;
        return L(t) ? e && o ? o : n ? s / n : null : t;
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
        return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Vi(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
    }
    clear() {
        return Ai(this.canvas, this.ctx), this;
    }
    stop() {
        return dt.stop(this), this;
    }
    resize(t, e) {
        dt.running(this) ? this._resizeBeforeDraw = {
            width: t,
            height: e
        } : this._resize(t, e);
    }
    _resize(t, e) {
        let s = this.options, n = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, a = this.platform.getMaximumSize(n, t, e, o), r = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
        this.width = a.width, this.height = a.height, this._aspectRatio = this.aspectRatio, Vi(this, r, !0) && (this.notifyPlugins("resize", {
            size: a
        }), B1(s.onResize, [
            this,
            a
        ], this), this.attached && this._doResize(l) && this.render());
    }
    ensureScalesHaveIDs() {
        let e = this.options.scales || {};
        R(e, (s, n)=>{
            s.id = n;
        });
    }
    buildOrUpdateScales() {
        let t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((a, r)=>(a[r] = !1, a)
        , {}), o = [];
        e && (o = o.concat(Object.keys(e).map((a)=>{
            let r = e[a], l = es(a, r), c = l === "r", h84 = l === "x";
            return {
                options: r,
                dposition: c ? "chartArea" : h84 ? "bottom" : "left",
                dtype: c ? "radialLinear" : h84 ? "category" : "linear"
            };
        }))), R(o, (a)=>{
            let r = a.options, l = r.id, c = es(l, r), h85 = P1(r.type, a.dtype);
            (r.position === void 0 || On(r.position, c) !== On(a.dposition)) && (r.position = a.dposition), n[l] = !0;
            let d = null;
            if (l in s && s[l].type === h85) d = s[l];
            else {
                let u = ft.getScale(h85);
                d = new u({
                    id: l,
                    type: h85,
                    ctx: this.ctx,
                    chart: this
                }), s[d.id] = d;
            }
            d.init(r, t);
        }), R(n, (a, r)=>{
            a || delete s[r];
        }), R(s, (a)=>{
            U.configure(this, a, a.options), U.addBox(this, a);
        });
    }
    _updateMetasets() {
        let t = this._metasets, e = this.data.datasets.length, s = t.length;
        if (t.sort((n, o)=>n.index - o.index
        ), s > e) {
            for(let n = e; n < s; ++n)this._destroyDatasetMeta(n);
            t.splice(e, s - e);
        }
        this._sortedMetasets = t.slice(0).sort(An("order", "index"));
    }
    _removeUnreferencedMetasets() {
        let { _metasets: t , data: { datasets: e  }  } = this;
        t.length > e.length && delete this._stacks, t.forEach((s, n)=>{
            e.filter((o)=>o === s._dataset
            ).length === 0 && this._destroyDatasetMeta(n);
        });
    }
    buildOrUpdateControllers() {
        let t = [], e = this.data.datasets, s, n;
        for(this._removeUnreferencedMetasets(), s = 0, n = e.length; s < n; s++){
            let o = e[s], a = this.getDatasetMeta(s), r = o.type || this.config.type;
            if (a.type && a.type !== r && (this._destroyDatasetMeta(s), a = this.getDatasetMeta(s)), a.type = r, a.indexAxis = o.indexAxis || ts(r, this.options), a.order = o.order || 0, a.index = s, a.label = "" + o.label, a.visible = this.isDatasetVisible(s), a.controller) a.controller.updateIndex(s), a.controller.linkScales();
            else {
                let l = ft.getController(r), { datasetElementType: c , dataElementType: h86  } = D1.datasets[r];
                Object.assign(l.prototype, {
                    dataElementType: ft.getElement(h86),
                    datasetElementType: c && ft.getElement(c)
                }), a.controller = new l(this, s), t.push(a.controller);
            }
        }
        return this._updateMetasets(), t;
    }
    _resetElements() {
        R(this.data.datasets, (t, e)=>{
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
            cancelable: !0
        }) === !1) return;
        let o = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        let a = 0;
        for(let c1 = 0, h87 = this.data.datasets.length; c1 < h87; c1++){
            let { controller: d  } = this.getDatasetMeta(c1), u = !n && o.indexOf(d) === -1;
            d.buildOrUpdateElements(u), a = Math.max(+d.getMaxOverflow(), a);
        }
        a = this._minPadding = s.layout.autoPadding ? a : 0, this._updateLayout(a), n || R(o, (c)=>{
            c.reset();
        }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
            mode: t
        }), this._layers.sort(An("z", "_idx"));
        let { _active: r , _lastEvent: l  } = this;
        l ? this._eventHandler(l, !0) : r.length && this._updateHoverStyles(r, r, !0), this.render();
    }
    _updateScales() {
        R(this.scales, (t)=>{
            U.removeBox(this, t);
        }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
    }
    _checkEventBindings() {
        let t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
        (!yi(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
        let { _hiddenIndices: t  } = this, e = this._getUniformDataChanges() || [];
        for (let { method: s , start: n , count: o  } of e){
            let a = s === "_removeElements" ? -o : o;
            hl(t, n, a);
        }
    }
    _getUniformDataChanges() {
        let t = this._dataChanges;
        if (!t || !t.length) return;
        this._dataChanges = [];
        let e = this.data.datasets.length, s = (o)=>new Set(t.filter((a)=>a[0] === o
            ).map((a, r)=>r + "," + a.splice(1).join(",")
            ))
        , n = s(0);
        for(let o3 = 1; o3 < e; o3++)if (!yi(n, s(o3))) return;
        return Array.from(n).map((o)=>o.split(",")
        ).map((o)=>({
                method: o[1],
                start: +o[2],
                count: +o[3]
            })
        );
    }
    _updateLayout(t) {
        if (this.notifyPlugins("beforeLayout", {
            cancelable: !0
        }) === !1) return;
        U.update(this, this.width, this.height, t);
        let e = this.chartArea, s = e.width <= 0 || e.height <= 0;
        this._layers = [], R(this.boxes, (n)=>{
            s && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()));
        }, this), this._layers.forEach((n, o)=>{
            n._idx = o;
        }), this.notifyPlugins("afterLayout");
    }
    _updateDatasets(t) {
        if (this.notifyPlugins("beforeDatasetsUpdate", {
            mode: t,
            cancelable: !0
        }) !== !1) {
            for(let e = 0, s = this.data.datasets.length; e < s; ++e)this.getDatasetMeta(e).controller.configure();
            for(let e1 = 0, s1 = this.data.datasets.length; e1 < s1; ++e1)this._updateDataset(e1, ct(t) ? t({
                datasetIndex: e1
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
            cancelable: !0
        };
        this.notifyPlugins("beforeDatasetUpdate", n) !== !1 && (s.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n));
    }
    render() {
        this.notifyPlugins("beforeRender", {
            cancelable: !0
        }) !== !1 && (dt.has(this) ? this.attached && !dt.running(this) && dt.start(this) : (this.draw(), Ln({
            chart: this
        })));
    }
    draw() {
        let t;
        if (this._resizeBeforeDraw) {
            let { width: s , height: n  } = this._resizeBeforeDraw;
            this._resize(s, n), this._resizeBeforeDraw = null;
        }
        if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
            cancelable: !0
        }) === !1) return;
        let e = this._layers;
        for(t = 0; t < e.length && e[t].z <= 0; ++t)e[t].draw(this.chartArea);
        for(this._drawDatasets(); t < e.length; ++t)e[t].draw(this.chartArea);
        this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(t) {
        let e = this._sortedMetasets, s = [], n, o;
        for(n = 0, o = e.length; n < o; ++n){
            let a = e[n];
            (!t || a.visible) && s.push(a);
        }
        return s;
    }
    getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
        if (this.notifyPlugins("beforeDatasetsDraw", {
            cancelable: !0
        }) === !1) return;
        let t = this.getSortedVisibleDatasetMetas();
        for(let e = t.length - 1; e >= 0; --e)this._drawDataset(t[e]);
        this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(t) {
        let e = this.ctx, s = t._clip, n = !s.disabled, o = this.chartArea, a = {
            meta: t,
            index: t.index,
            cancelable: !0
        };
        this.notifyPlugins("beforeDatasetDraw", a) !== !1 && (n && ne1(e, {
            left: s.left === !1 ? 0 : o.left - s.left,
            right: s.right === !1 ? this.width : o.right + s.right,
            top: s.top === !1 ? 0 : o.top - s.top,
            bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom
        }), t.controller.draw(), n && oe(e), a.cancelable = !1, this.notifyPlugins("afterDatasetDraw", a));
    }
    getElementsAtEventForMode(t, e, s, n) {
        let o = fr.modes[e];
        return typeof o == "function" ? o(this, t, s, n) : [];
    }
    getDatasetMeta(t) {
        let e = this.data.datasets[t], s = this._metasets, n = s.filter((o)=>o && o._dataset === e
        ).pop();
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
            _sorted: !1
        }, s.push(n)), n;
    }
    getContext() {
        return this.$context || (this.$context = ht(null, {
            chart: this,
            type: "chart"
        }));
    }
    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
        let e = this.data.datasets[t];
        if (!e) return !1;
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
        Z2(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), a.update(o, {
            visible: s
        }), this.update((r)=>r.datasetIndex === t ? n : void 0
        ));
    }
    hide(t, e) {
        this._updateVisibility(t, e, !1);
    }
    show(t, e) {
        this._updateVisibility(t, e, !0);
    }
    _destroyDatasetMeta(t) {
        let e = this._metasets[t];
        e && e.controller && e.controller._destroy(), delete this._metasets[t];
    }
    _stop() {
        let t, e;
        for(this.stop(), dt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)this._destroyDatasetMeta(t);
    }
    destroy() {
        this.notifyPlugins("beforeDestroy");
        let { canvas: t , ctx: e  } = this;
        this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Ai(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), this.notifyPlugins("destroy"), delete ii[this.id], this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...t) {
        return this.canvas.toDataURL(...t);
    }
    bindEvents() {
        this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
    }
    bindUserEvents() {
        let t = this._listeners, e = this.platform, s = (o, a)=>{
            e.addEventListener(this, o, a), t[o] = a;
        }, n = (o, a, r)=>{
            o.offsetX = a, o.offsetY = r, this._eventHandler(o);
        };
        R(this.options.events, (o)=>s(o, n)
        );
    }
    bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        let t = this._responsiveListeners, e = this.platform, s = (l, c)=>{
            e.addEventListener(this, l, c), t[l] = c;
        }, n = (l, c)=>{
            t[l] && (e.removeEventListener(this, l, c), delete t[l]);
        }, o = (l, c)=>{
            this.canvas && this.resize(l, c);
        }, a, r = ()=>{
            n("attach", r), this.attached = !0, this.resize(), s("resize", o), s("detach", a);
        };
        a = ()=>{
            this.attached = !1, n("resize", o), this._stop(), this._resize(0, 0), s("attach", r);
        }, e.isAttached(this.canvas) ? r() : a();
    }
    unbindEvents() {
        R(this._listeners, (t, e)=>{
            this.platform.removeEventListener(this, e, t);
        }), this._listeners = {}, R(this._responsiveListeners, (t, e)=>{
            this.platform.removeEventListener(this, e, t);
        }), this._responsiveListeners = void 0;
    }
    updateHoverStyle(t, e, s) {
        let n = s ? "set" : "remove", o, a, r, l;
        for(e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + n + "DatasetHoverStyle"]()), r = 0, l = t.length; r < l; ++r){
            a = t[r];
            let c = a && this.getDatasetMeta(a.datasetIndex).controller;
            c && c[n + "HoverStyle"](a.element, a.datasetIndex, a.index);
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(t) {
        let e = this._active || [], s = t.map(({ datasetIndex: o , index: a  })=>{
            let r = this.getDatasetMeta(o);
            if (!r) throw new Error("No dataset found at index " + o);
            return {
                datasetIndex: o,
                element: r.data[a],
                index: a
            };
        });
        !ee2(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
    }
    notifyPlugins(t, e, s) {
        return this._plugins.notify(this, t, e, s);
    }
    _updateHoverStyles(t, e, s) {
        let n = this.options.hover, o = (l, c)=>l.filter((h88)=>!c.some((d)=>h88.datasetIndex === d.datasetIndex && h88.index === d.index
                )
            )
        , a = o(e, t), r = s ? t : o(t, e);
        a.length && this.updateHoverStyle(a, n.mode, !1), r.length && n.mode && this.updateHoverStyle(r, n.mode, !0);
    }
    _eventHandler(t, e) {
        let s = {
            event: t,
            replay: e,
            cancelable: !0,
            inChartArea: mt(t, this.chartArea, this._minPadding)
        }, n = (a)=>(a.options.events || this.options.events).includes(t.native.type)
        ;
        if (this.notifyPlugins("beforeEvent", s, n) === !1) return;
        let o = this._handleEvent(t, e, s.inChartArea);
        return s.cancelable = !1, this.notifyPlugins("afterEvent", s, n), (o || s.changed) && this.render(), this;
    }
    _handleEvent(t, e, s) {
        let { _active: n = [] , options: o  } = this, a = e, r = this._getActiveElements(t, n, s, a), l = Ts1(t), c = dl(t, this._lastEvent, s, l);
        s && (this._lastEvent = null, B1(o.onHover, [
            t,
            r,
            this
        ], this), l && B1(o.onClick, [
            t,
            r,
            this
        ], this));
        let h89 = !ee2(r, n);
        return (h89 || e) && (this._active = r, this._updateHoverStyles(r, n, e)), this._lastEvent = c, h89;
    }
    _getActiveElements(t, e, s, n) {
        if (t.type === "mouseout") return [];
        if (!s) return e;
        let o = this.options.hover;
        return this.getElementsAtEventForMode(t, o.mode, o, n);
    }
}, Tn = ()=>R(hs.instances, (i)=>i._plugins.invalidate()
    )
, vt = !0;
Object.defineProperties(hs, {
    defaults: {
        enumerable: vt,
        value: D1
    },
    instances: {
        enumerable: vt,
        value: ii
    },
    overrides: {
        enumerable: vt,
        value: xt
    },
    registry: {
        enumerable: vt,
        value: ft
    },
    version: {
        enumerable: vt,
        value: rl
    },
    getChart: {
        enumerable: vt,
        value: bo
    },
    register: {
        enumerable: vt,
        value: (...i)=>{
            ft.add(...i), Tn();
        }
    },
    unregister: {
        enumerable: vt,
        value: (...i)=>{
            ft.remove(...i), Tn();
        }
    }
});
function xo(i, t, e) {
    let { startAngle: s , pixelMargin: n , x: o , y: a , outerRadius: r , innerRadius: l  } = t, c = n / r;
    i.beginPath(), i.arc(o, a, r, s - c, e + c), l > n ? (c = n / l, i.arc(o, a, l, e + c, s - c, !0)) : i.arc(o, a, n, e + W1, s - W1), i.closePath(), i.clip();
}
function ul(i) {
    return He(i, [
        "outerStart",
        "outerEnd",
        "innerStart",
        "innerEnd"
    ]);
}
function fl(i, t, e, s) {
    let n = ul(i.options.borderRadius), o = (e - t) / 2, a = Math.min(o, s * t / 2), r = (l)=>{
        let c = (e - Math.min(o, l)) * s / 2;
        return $(l, 0, Math.min(o, c));
    };
    return {
        outerStart: r(n.outerStart),
        outerEnd: r(n.outerEnd),
        innerStart: $(n.innerStart, 0, a),
        innerEnd: $(n.innerEnd, 0, a)
    };
}
function Nt(i, t, e, s) {
    return {
        x: e + i * Math.cos(t),
        y: s + i * Math.sin(t)
    };
}
function is(i, t, e, s, n) {
    let { x: o , y: a , startAngle: r , pixelMargin: l , innerRadius: c  } = t, h90 = Math.max(t.outerRadius + s + e - l, 0), d = c > 0 ? c + s + e + l : 0, u = 0, f = n - r;
    if (s) {
        let z9 = c > 0 ? c - s : 0, Yt = h90 > 0 ? h90 - s : 0, kt = (z9 + Yt) / 2, Xt = kt !== 0 ? f * kt / (kt + s) : f;
        u = (f - Xt) / 2;
    }
    let g29 = Math.max(0.001, f * h90 - e / V1) / h90, p = (f - g29) / 2, m = r + p + u, b = n - p - u, { outerStart: x , outerEnd: v15 , innerStart: y25 , innerEnd: _  } = fl(t, d, h90, b - m), w = h90 - x, M9 = h90 - v15, S14 = m + x / w, k15 = b - v15 / M9, E = d + y25, T10 = d + _, A6 = m + y25 / E, H5 = b - _ / T10;
    if (i.beginPath(), i.arc(o, a, h90, S14, k15), v15 > 0) {
        let z10 = Nt(M9, k15, o, a);
        i.arc(z10.x, z10.y, v15, k15, b + W1);
    }
    let K5 = Nt(T10, b, o, a);
    if (i.lineTo(K5.x, K5.y), _ > 0) {
        let z11 = Nt(T10, H5, o, a);
        i.arc(z11.x, z11.y, _, b + W1, H5 + Math.PI);
    }
    if (i.arc(o, a, d, b - _ / d, m + y25 / d, !0), y25 > 0) {
        let z12 = Nt(E, A6, o, a);
        i.arc(z12.x, z12.y, y25, A6 + Math.PI, m - W1);
    }
    let C18 = Nt(w, m, o, a);
    if (i.lineTo(C18.x, C18.y), x > 0) {
        let z13 = Nt(w, S14, o, a);
        i.arc(z13.x, z13.y, x, m - W1, S14);
    }
    i.closePath();
}
function gl(i, t, e, s) {
    let { fullCircles: n , startAngle: o , circumference: a  } = t, r = t.endAngle;
    if (n) {
        is(i, t, e, s, o + F);
        for(let l = 0; l < n; ++l)i.fill();
        isNaN(a) || (r = o + a % F, a % F === 0 && (r += F));
    }
    return is(i, t, e, s, r), i.fill(), r;
}
function pl(i, t, e) {
    let { x: s , y: n , startAngle: o , pixelMargin: a , fullCircles: r  } = t, l = Math.max(t.outerRadius - a, 0), c = t.innerRadius + a, h91;
    for(e && xo(i, t, o + F), i.beginPath(), i.arc(s, n, c, o + F, o, !0), h91 = 0; h91 < r; ++h91)i.stroke();
    for(i.beginPath(), i.arc(s, n, l, o, o + F), h91 = 0; h91 < r; ++h91)i.stroke();
}
function ml(i, t, e, s, n) {
    let { options: o  } = t, { borderWidth: a , borderJoinStyle: r  } = o, l = o.borderAlign === "inner";
    !a || (l ? (i.lineWidth = a * 2, i.lineJoin = r || "round") : (i.lineWidth = a, i.lineJoin = r || "bevel"), t.fullCircles && pl(i, t, l), l && xo(i, t, n), is(i, t, e, s, n), i.stroke());
}
var ke2 = class extends it {
    constructor(t){
        super();
        this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
    }
    inRange(t, e, s) {
        let n = this.getProps([
            "x",
            "y"
        ], s), { angle: o , distance: a  } = ki(n, {
            x: t,
            y: e
        }), { startAngle: r , endAngle: l , innerRadius: c , outerRadius: h92 , circumference: d  } = this.getProps([
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "circumference"
        ], s), u = this.options.spacing / 2, g30 = P1(d, l - r) >= F || Bt(o, r, l), p = at(a, c + u, h92 + u);
        return g30 && p;
    }
    getCenterPoint(t) {
        let { x: e , y: s , startAngle: n , endAngle: o , innerRadius: a , outerRadius: r  } = this.getProps([
            "x",
            "y",
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "circumference"
        ], t), { offset: l , spacing: c  } = this.options, h93 = (n + o) / 2, d = (a + r + c + l) / 2;
        return {
            x: e + Math.cos(h93) * d,
            y: s + Math.sin(h93) * d
        };
    }
    tooltipPosition(t) {
        return this.getCenterPoint(t);
    }
    draw(t) {
        let { options: e , circumference: s  } = this, n = (e.offset || 0) / 2, o = (e.spacing || 0) / 2;
        if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = s > F ? Math.floor(s / F) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0) return;
        t.save();
        let a = 0;
        if (n) {
            a = n / 2;
            let l = (this.startAngle + this.endAngle) / 2;
            t.translate(Math.cos(l) * a, Math.sin(l) * a), this.circumference >= V1 && (a = n);
        }
        t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor;
        let r = gl(t, this, a, o);
        ml(t, this, a, o, r), t.restore();
    }
};
ke2.id = "arc";
ke2.defaults = {
    borderAlign: "center",
    borderColor: "#fff",
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0
};
ke2.defaultRoutes = {
    backgroundColor: "backgroundColor"
};
function _o(i, t, e = t) {
    i.lineCap = P1(e.borderCapStyle, t.borderCapStyle), i.setLineDash(P1(e.borderDash, t.borderDash)), i.lineDashOffset = P1(e.borderDashOffset, t.borderDashOffset), i.lineJoin = P1(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = P1(e.borderWidth, t.borderWidth), i.strokeStyle = P1(e.borderColor, t.borderColor);
}
function bl(i, t, e) {
    i.lineTo(e.x, e.y);
}
function xl(i) {
    return i.stepped ? js : i.tension || i.cubicInterpolationMode === "monotone" ? $s : bl;
}
function yo(i, t, e = {}) {
    let s = i.length, { start: n = 0 , end: o = s - 1  } = e, { start: a , end: r  } = t, l = Math.max(n, a), c = Math.min(o, r), h94 = n < a && o < a || n > r && o > r;
    return {
        count: s,
        start: l,
        loop: t.loop,
        ilen: c < l && !h94 ? s + c - l : c - l
    };
}
function _l(i, t, e, s) {
    let { points: n , options: o  } = t, { count: a , start: r , loop: l , ilen: c  } = yo(n, e, s), h95 = xl(o), { move: d = !0 , reverse: u  } = s || {}, f, g31, p;
    for(f = 0; f <= c; ++f)g31 = n[(r + (u ? c - f : f)) % a], !g31.skip && (d ? (i.moveTo(g31.x, g31.y), d = !1) : h95(i, p, g31, u, o.stepped), p = g31);
    return l && (g31 = n[(r + (u ? c : 0)) % a], h95(i, p, g31, u, o.stepped)), !!l;
}
function yl(i, t, e, s) {
    let n = t.points, { count: o , start: a , ilen: r  } = yo(n, e, s), { move: l = !0 , reverse: c  } = s || {}, h96 = 0, d = 0, u, f, g32, p, m, b, x = (y26)=>(a + (c ? r - y26 : y26)) % o
    , v16 = ()=>{
        p !== m && (i.lineTo(h96, m), i.lineTo(h96, p), i.lineTo(h96, b));
    };
    for(l && (f = n[x(0)], i.moveTo(f.x, f.y)), u = 0; u <= r; ++u){
        if (f = n[x(u)], f.skip) continue;
        let y27 = f.x, _ = f.y, w = y27 | 0;
        w === g32 ? (_ < p ? p = _ : _ > m && (m = _), h96 = (d * h96 + y27) / ++d) : (v16(), i.lineTo(y27, _), g32 = w, d = 0, p = m = _), b = _;
    }
    v16();
}
function ss(i) {
    let t = i.options, e = t.borderDash && t.borderDash.length;
    return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? yl : _l;
}
function vl(i) {
    return i.stepped ? nn : i.tension || i.cubicInterpolationMode === "monotone" ? on : pt;
}
function Ml(i, t, e, s) {
    let n = t._path;
    n || (n = t._path = new Path2D, t.path(n, e, s) && n.closePath()), _o(i, t.options), i.stroke(n);
}
function wl(i, t, e, s) {
    let { segments: n , options: o  } = t, a = ss(t);
    for (let r of n)_o(i, o, r.style), i.beginPath(), a(i, t, r, {
        start: e,
        end: e + s - 1
    }) && i.closePath(), i.stroke();
}
var kl = typeof Path2D == "function";
function Sl(i, t, e, s) {
    kl && !t.options.segment ? Ml(i, t, e, s) : wl(i, t, e, s);
}
var gt = class extends it {
    constructor(t){
        super();
        this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
    }
    updateControlPoints(t, e) {
        let s = this.options;
        if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
            let n = s.spanGaps ? this._loop : this._fullLoop;
            tn(this._points, s, t, n, e), this._pointsUpdated = !0;
        }
    }
    set points(t) {
        this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
    }
    get points() {
        return this._points;
    }
    get segments() {
        return this._segments || (this._segments = rn(this, this.options.segment));
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
        let s = this.options, n = t[e], o = this.points, a = $i(this, {
            property: e,
            start: n,
            end: n
        });
        if (!a.length) return;
        let r = [], l = vl(s), c, h97;
        for(c = 0, h97 = a.length; c < h97; ++c){
            let { start: d , end: u  } = a[c], f = o[d], g33 = o[u];
            if (f === g33) {
                r.push(f);
                continue;
            }
            let p = Math.abs((n - f[e]) / (g33[e] - f[e])), m = l(f, g33, p, s.stepped);
            m[e] = t[e], r.push(m);
        }
        return r.length === 1 ? r[0] : r;
    }
    pathSegment(t, e, s) {
        return ss(this)(t, this, e, s);
    }
    path(t, e, s) {
        let n = this.segments, o = ss(this), a = this._loop;
        e = e || 0, s = s || this.points.length - e;
        for (let r of n)a &= o(t, this, r, {
            start: e,
            end: e + s - 1
        });
        return !!a;
    }
    draw(t, e, s, n) {
        let o = this.options || {};
        (this.points || []).length && o.borderWidth && (t.save(), Sl(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
    }
};
gt.id = "line";
gt.defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0
};
gt.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
};
gt.descriptors = {
    _scriptable: !0,
    _indexable: (i)=>i !== "borderDash" && i !== "fill"
};
function Rn(i, t, e, s) {
    let n = i.options, { [e]: o  } = i.getProps([
        e
    ], s);
    return Math.abs(t - o) < n.radius + n.hitRadius;
}
var Se1 = class extends it {
    constructor(t){
        super();
        this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t);
    }
    inRange(t, e, s) {
        let n = this.options, { x: o , y: a  } = this.getProps([
            "x",
            "y"
        ], s);
        return Math.pow(t - o, 2) + Math.pow(e - a, 2) < Math.pow(n.hitRadius + n.radius, 2);
    }
    inXRange(t, e) {
        return Rn(this, t, "x", e);
    }
    inYRange(t, e) {
        return Rn(this, t, "y", e);
    }
    getCenterPoint(t) {
        let { x: e , y: s  } = this.getProps([
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
        this.skip || s.radius < 0.1 || !mt(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, se(t, s, this.x, this.y));
    }
    getRange() {
        let t = this.options || {};
        return t.radius + t.hitRadius;
    }
};
Se1.id = "point";
Se1.defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0
};
Se1.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
};
function vo(i, t) {
    let { x: e , y: s , base: n , width: o , height: a  } = i.getProps([
        "x",
        "y",
        "base",
        "width",
        "height"
    ], t), r, l, c, h98, d;
    return i.horizontal ? (d = a / 2, r = Math.min(e, n), l = Math.max(e, n), c = s - d, h98 = s + d) : (d = o / 2, r = e - d, l = e + d, c = Math.min(s, n), h98 = Math.max(s, n)), {
        left: r,
        top: c,
        right: l,
        bottom: h98
    };
}
function Mt(i, t, e, s) {
    return i ? 0 : $(t, e, s);
}
function Pl(i, t, e) {
    let s = i.options.borderWidth, n = i.borderSkipped, o = Li(s);
    return {
        t: Mt(n.top, o.top, 0, e),
        r: Mt(n.right, o.right, 0, t),
        b: Mt(n.bottom, o.bottom, 0, e),
        l: Mt(n.left, o.left, 0, t)
    };
}
function Cl(i, t, e) {
    let { enableBorderRadius: s  } = i.getProps([
        "enableBorderRadius"
    ]), n = i.options.borderRadius, o = Ct(n), a = Math.min(t, e), r = i.borderSkipped, l = s || O2(n);
    return {
        topLeft: Mt(!l || r.top || r.left, o.topLeft, 0, a),
        topRight: Mt(!l || r.top || r.right, o.topRight, 0, a),
        bottomLeft: Mt(!l || r.bottom || r.left, o.bottomLeft, 0, a),
        bottomRight: Mt(!l || r.bottom || r.right, o.bottomRight, 0, a)
    };
}
function Dl(i) {
    let t = vo(i), e = t.right - t.left, s = t.bottom - t.top, n = Pl(i, e / 2, s / 2), o = Cl(i, e / 2, s / 2);
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
function Zi(i, t, e, s) {
    let n = t === null, o = e === null, r = i && !(n && o) && vo(i, s);
    return r && (n || at(t, r.left, r.right)) && (o || at(e, r.top, r.bottom));
}
function Ol(i) {
    return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function Al(i, t) {
    i.rect(t.x, t.y, t.w, t.h);
}
function Ji(i, t, e = {}) {
    let s = i.x !== e.x ? -t : 0, n = i.y !== e.y ? -t : 0, o = (i.x + i.w !== e.x + e.w ? t : 0) - s, a = (i.y + i.h !== e.y + e.h ? t : 0) - n;
    return {
        x: i.x + s,
        y: i.y + n,
        w: i.w + o,
        h: i.h + a,
        radius: i.radius
    };
}
var Pe2 = class extends it {
    constructor(t){
        super();
        this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
    }
    draw(t) {
        let { inflateAmount: e , options: { borderColor: s , backgroundColor: n  }  } = this, { inner: o , outer: a  } = Dl(this), r = Ol(a.radius) ? ae2 : Al;
        t.save(), (a.w !== o.w || a.h !== o.h) && (t.beginPath(), r(t, Ji(a, e, o)), t.clip(), r(t, Ji(o, -e, a)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), r(t, Ji(o, e)), t.fillStyle = n, t.fill(), t.restore();
    }
    inRange(t, e, s) {
        return Zi(this, t, e, s);
    }
    inXRange(t, e) {
        return Zi(this, t, null, e);
    }
    inYRange(t, e) {
        return Zi(this, null, t, e);
    }
    getCenterPoint(t) {
        let { x: e , y: s , base: n , horizontal: o  } = this.getProps([
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
Pe2.id = "bar";
Pe2.defaults = {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0
};
Pe2.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
};
var Ll = Object.freeze({
    __proto__: null,
    ArcElement: ke2,
    LineElement: gt,
    PointElement: Se1,
    BarElement: Pe2
});
function Tl(i, t, e, s, n) {
    let o = n.samples || s;
    if (o >= e) return i.slice(t, t + e);
    let a = [], r = (e - 2) / (o - 2), l = 0, c = t + e - 1, h99 = t, d, u, f, g34, p;
    for(a[l++] = i[h99], d = 0; d < o - 2; d++){
        let m = 0, b = 0, x, v17 = Math.floor((d + 1) * r) + 1 + t, y28 = Math.min(Math.floor((d + 2) * r) + 1, e) + t, _ = y28 - v17;
        for(x = v17; x < y28; x++)m += i[x].x, b += i[x].y;
        m /= _, b /= _;
        let w = Math.floor(d * r) + 1 + t, M10 = Math.min(Math.floor((d + 1) * r) + 1, e) + t, { x: S15 , y: k16  } = i[h99];
        for(f = g34 = -1, x = w; x < M10; x++)g34 = 0.5 * Math.abs((S15 - m) * (i[x].y - k16) - (S15 - i[x].x) * (b - k16)), g34 > f && (f = g34, u = i[x], p = x);
        a[l++] = u, h99 = p;
    }
    return a[l++] = i[c], a;
}
function Rl(i, t, e, s) {
    let n = 0, o = 0, a, r, l, c, h100, d, u, f, g35, p, m = [], b = t + e - 1, x = i[t].x, y29 = i[b].x - x;
    for(a = t; a < t + e; ++a){
        r = i[a], l = (r.x - x) / y29 * s, c = r.y;
        let _ = l | 0;
        if (_ === h100) c < g35 ? (g35 = c, d = a) : c > p && (p = c, u = a), n = (o * n + r.x) / ++o;
        else {
            let w = a - 1;
            if (!L(d) && !L(u)) {
                let M11 = Math.min(d, u), S16 = Math.max(d, u);
                M11 !== f && M11 !== w && m.push({
                    ...i[M11],
                    x: n
                }), S16 !== f && S16 !== w && m.push({
                    ...i[S16],
                    x: n
                });
            }
            a > 0 && w !== f && m.push(i[w]), m.push(r), h100 = _, o = 0, g35 = p = c, d = u = f = a;
        }
    }
    return m;
}
function Mo(i) {
    if (i._decimated) {
        let t = i._data;
        delete i._decimated, delete i._data, Object.defineProperty(i, "data", {
            value: t
        });
    }
}
function En(i) {
    i.data.datasets.forEach((t)=>{
        Mo(t);
    });
}
function El(i, t) {
    let e = t.length, s = 0, n, { iScale: o  } = i, { min: a , max: r , minDefined: l , maxDefined: c  } = o.getUserBounds();
    return l && (s = $(rt(t, o.axis, a).lo, 0, e - 1)), c ? n = $(rt(t, o.axis, r).hi + 1, s, e) - s : n = e - s, {
        start: s,
        count: n
    };
}
var Fl = {
    id: "decimation",
    defaults: {
        algorithm: "min-max",
        enabled: !1
    },
    beforeElementsUpdate: (i, t, e)=>{
        if (!e.enabled) {
            En(i);
            return;
        }
        let s = i.width;
        i.data.datasets.forEach((n, o)=>{
            let { _data: a , indexAxis: r  } = n, l = i.getDatasetMeta(o), c = a || n.data;
            if (Vt([
                r,
                i.options.indexAxis
            ]) === "y" || l.type !== "line") return;
            let h101 = i.scales[l.xAxisID];
            if (h101.type !== "linear" && h101.type !== "time" || i.options.parsing) return;
            let { start: d , count: u  } = El(l, c), f = e.threshold || 4 * s;
            if (u <= f) {
                Mo(n);
                return;
            }
            L(a) && (n._data = c, delete n.data, Object.defineProperty(n, "data", {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this._decimated;
                },
                set: function(p) {
                    this._data = p;
                }
            }));
            let g36;
            switch(e.algorithm){
                case "lttb":
                    g36 = Tl(c, d, u, s, e);
                    break;
                case "min-max":
                    g36 = Rl(c, d, u, s);
                    break;
                default:
                    throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
            }
            n._decimated = g36;
        });
    },
    destroy (i) {
        En(i);
    }
};
function zl(i, t) {
    let e = i.getDatasetMeta(t);
    return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function Il(i) {
    let t = i.options, e = t.fill, s = P1(e && e.target, e);
    return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function Bl(i, t, e) {
    let s = Il(i);
    if (O2(s)) return isNaN(s.value) ? !1 : s;
    let n = parseFloat(s);
    return N(n) && Math.floor(n) === n ? ((s[0] === "-" || s[0] === "+") && (n = t + n), n === t || n < 0 || n >= e ? !1 : n) : [
        "origin",
        "start",
        "end",
        "stack",
        "shape"
    ].indexOf(s) >= 0 && s;
}
function Vl(i) {
    let { scale: t = {} , fill: e  } = i, s = null, n;
    return e === "start" ? s = t.bottom : e === "end" ? s = t.top : O2(e) ? s = t.getPixelForValue(e.value) : t.getBasePixel && (s = t.getBasePixel()), N(s) ? (n = t.isHorizontal(), {
        x: n ? s : null,
        y: n ? null : s
    }) : null;
}
var ds = class {
    constructor(t){
        this.x = t.x, this.y = t.y, this.radius = t.radius;
    }
    pathSegment(t, e, s) {
        let { x: n , y: o , radius: a  } = this;
        return e = e || {
            start: 0,
            end: F
        }, t.arc(n, o, a, e.end, e.start, !0), !s.bounds;
    }
    interpolate(t) {
        let { x: e , y: s , radius: n  } = this, o = t.angle;
        return {
            x: e + Math.cos(o) * n,
            y: s + Math.sin(o) * n,
            angle: o
        };
    }
};
function Wl(i) {
    let { scale: t , fill: e  } = i, s = t.options, n = t.getLabels().length, o = [], a = s.reverse ? t.max : t.min, r = s.reverse ? t.min : t.max, l, c, h102;
    if (e === "start" ? h102 = a : e === "end" ? h102 = r : O2(e) ? h102 = e.value : h102 = t.getBaseValue(), s.grid.circular) return c = t.getPointPositionForValue(0, a), new ds({
        x: c.x,
        y: c.y,
        radius: t.getDistanceFromCenterForValue(h102)
    });
    for(l = 0; l < n; ++l)o.push(t.getPointPositionForValue(l, h102));
    return o;
}
function Nl(i) {
    return (i.scale || {}).getPointPositionForValue ? Wl(i) : Vl(i);
}
function us(i, t, e) {
    for(; t > i; t--){
        let s = e[t];
        if (!isNaN(s.x) && !isNaN(s.y)) break;
    }
    return t;
}
function Hl(i, t) {
    let { x: e = null , y: s = null  } = i || {}, n = t.points, o = [];
    return t.segments.forEach(({ start: a , end: r  })=>{
        r = us(a, r, n);
        let l = n[a], c = n[r];
        s !== null ? (o.push({
            x: l.x,
            y: s
        }), o.push({
            x: c.x,
            y: s
        })) : e !== null && (o.push({
            x: e,
            y: l.y
        }), o.push({
            x: e,
            y: c.y
        }));
    }), o;
}
function jl(i) {
    let { scale: t , index: e , line: s  } = i, n = [], o = s.segments, a = s.points, r = $l(t, e);
    r.push(wo({
        x: null,
        y: t.bottom
    }, s));
    for(let l = 0; l < o.length; l++){
        let c = o[l];
        for(let h103 = c.start; h103 <= c.end; h103++)Yl(n, a[h103], r);
    }
    return new gt({
        points: n,
        options: {}
    });
}
function $l(i, t) {
    let e = [], s = i.getMatchingVisibleMetas("line");
    for(let n = 0; n < s.length; n++){
        let o = s[n];
        if (o.index === t) break;
        o.hidden || e.unshift(o.dataset);
    }
    return e;
}
function Yl(i, t, e) {
    let s = [];
    for(let n = 0; n < e.length; n++){
        let o = e[n], { first: a , last: r , point: l  } = Xl(o, t, "x");
        if (!(!l || a && r)) {
            if (a) s.unshift(l);
            else if (i.push(l), !r) break;
        }
    }
    i.push(...s);
}
function Xl(i, t, e) {
    let s = i.interpolate(t, e);
    if (!s) return {};
    let n = s[e], o = i.segments, a = i.points, r = !1, l = !1;
    for(let c = 0; c < o.length; c++){
        let h104 = o[c], d = a[h104.start][e], u = a[h104.end][e];
        if (at(n, d, u)) {
            r = n === d, l = n === u;
            break;
        }
    }
    return {
        first: r,
        last: l,
        point: s
    };
}
function Ul(i) {
    let { chart: t , fill: e , line: s  } = i;
    if (N(e)) return zl(t, e);
    if (e === "stack") return jl(i);
    if (e === "shape") return !0;
    let n = Nl(i);
    return n instanceof ds ? n : wo(n, s);
}
function wo(i, t) {
    let e = [], s = !1;
    return I(i) ? (s = !0, e = i) : e = Hl(i, t), e.length ? new gt({
        points: e,
        options: {
            tension: 0
        },
        _loop: s,
        _fullLoop: s
    }) : null;
}
function Kl(i, t, e) {
    let n = i[t].fill, o = [
        t
    ], a;
    if (!e) return n;
    for(; n !== !1 && o.indexOf(n) === -1;){
        if (!N(n)) return n;
        if (a = i[n], !a) return !1;
        if (a.visible) return n;
        o.push(n), n = a.fill;
    }
    return !1;
}
function Fn(i, t, e) {
    let { segments: s , points: n  } = t, o = !0, a = !1;
    i.beginPath();
    for (let r of s){
        let { start: l , end: c  } = r, h105 = n[l], d = n[us(l, c, n)];
        o ? (i.moveTo(h105.x, h105.y), o = !1) : (i.lineTo(h105.x, e), i.lineTo(h105.x, h105.y)), a = !!t.pathSegment(i, r, {
            move: a
        }), a ? i.closePath() : i.lineTo(d.x, e);
    }
    i.lineTo(t.first().x, e), i.closePath(), i.clip();
}
function ns(i, t, e, s) {
    if (s) return;
    let n = t[i], o = e[i];
    return i === "angle" && (n = q(n), o = q(o)), {
        property: i,
        start: n,
        end: o
    };
}
function zn(i, t, e, s) {
    return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function ql(i, t, e) {
    let s = i.segments, n = i.points, o = t.points, a = [];
    for (let r of s){
        let { start: l , end: c  } = r;
        c = us(l, c, n);
        let h106 = ns(e, n[l], n[c], r.loop);
        if (!t.segments) {
            a.push({
                source: r,
                target: h106,
                start: n[l],
                end: n[c]
            });
            continue;
        }
        let d = $i(t, h106);
        for (let u of d){
            let f = ns(e, o[u.start], o[u.end], u.loop), g37 = ji(r, n, f);
            for (let p of g37)a.push({
                source: p,
                target: u,
                start: {
                    [e]: zn(h106, f, "start", Math.max)
                },
                end: {
                    [e]: zn(h106, f, "end", Math.min)
                }
            });
        }
    }
    return a;
}
function Gl(i, t, e) {
    let { top: s , bottom: n  } = t.chart.chartArea, { property: o , start: a , end: r  } = e || {};
    o === "x" && (i.beginPath(), i.rect(a, s, r - a, n - s), i.clip());
}
function In(i, t, e, s) {
    let n = t.interpolate(e, s);
    n && i.lineTo(n.x, n.y);
}
function Bn(i, t) {
    let { line: e , target: s , property: n , color: o , scale: a  } = t, r = ql(e, s, n);
    for (let { source: l , target: c , start: h107 , end: d  } of r){
        let { style: { backgroundColor: u = o  } = {}  } = l, f = s !== !0;
        i.save(), i.fillStyle = u, Gl(i, a, f && ns(n, h107, d)), i.beginPath();
        let g38 = !!e.pathSegment(i, l), p;
        if (f) {
            g38 ? i.closePath() : In(i, s, d, n);
            let m = !!s.pathSegment(i, c, {
                move: g38,
                reverse: !0
            });
            p = g38 && m, p || In(i, s, h107, n);
        }
        i.closePath(), i.fill(p ? "evenodd" : "nonzero"), i.restore();
    }
}
function Zl(i, t) {
    let { line: e , target: s , above: n , below: o , area: a , scale: r  } = t, l = e._loop ? "angle" : t.axis;
    i.save(), l === "x" && o !== n && (Fn(i, s, a.top), Bn(i, {
        line: e,
        target: s,
        color: n,
        scale: r,
        property: l
    }), i.restore(), i.save(), Fn(i, s, a.bottom)), Bn(i, {
        line: e,
        target: s,
        color: o,
        scale: r,
        property: l
    }), i.restore();
}
function Qi(i, t, e) {
    let s = Ul(t), { line: n , scale: o , axis: a  } = t, r = n.options, l = r.fill, c = r.backgroundColor, { above: h108 = c , below: d = c  } = l || {};
    s && n.points.length && (ne1(i, e), Zl(i, {
        line: n,
        target: s,
        above: h108,
        below: d,
        area: e,
        scale: o,
        axis: a
    }), oe(i));
}
var Jl = {
    id: "filler",
    afterDatasetsUpdate (i, t, e) {
        let s = (i.data.datasets || []).length, n = [], o, a, r, l;
        for(a = 0; a < s; ++a)o = i.getDatasetMeta(a), r = o.dataset, l = null, r && r.options && r instanceof gt && (l = {
            visible: i.isDatasetVisible(a),
            index: a,
            fill: Bl(r, a, s),
            chart: i,
            axis: o.controller.options.indexAxis,
            scale: o.vScale,
            line: r
        }), o.$filler = l, n.push(l);
        for(a = 0; a < s; ++a)l = n[a], !(!l || l.fill === !1) && (l.fill = Kl(n, a, e.propagate));
    },
    beforeDraw (i, t, e) {
        let s = e.drawTime === "beforeDraw", n = i.getSortedVisibleDatasetMetas(), o = i.chartArea;
        for(let a = n.length - 1; a >= 0; --a){
            let r = n[a].$filler;
            !r || (r.line.updateControlPoints(o, r.axis), s && Qi(i.ctx, r, o));
        }
    },
    beforeDatasetsDraw (i, t, e) {
        if (e.drawTime !== "beforeDatasetsDraw") return;
        let s = i.getSortedVisibleDatasetMetas();
        for(let n = s.length - 1; n >= 0; --n){
            let o = s[n].$filler;
            o && Qi(i.ctx, o, i.chartArea);
        }
    },
    beforeDatasetDraw (i, t, e) {
        let s = t.meta.$filler;
        !s || s.fill === !1 || e.drawTime !== "beforeDatasetDraw" || Qi(i.ctx, s, i.chartArea);
    },
    defaults: {
        propagate: !0,
        drawTime: "beforeDatasetDraw"
    }
}, Vn = (i, t)=>{
    let { boxHeight: e = t , boxWidth: s = t  } = i;
    return i.usePointStyle && (e = Math.min(e, t), s = Math.min(s, t)), {
        boxWidth: s,
        boxHeight: e,
        itemHeight: Math.max(t, e)
    };
}, Ql = (i, t)=>i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index
, os = class extends it {
    constructor(t){
        super();
        this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
    }
    update(t, e, s) {
        this.maxWidth = t, this.maxHeight = e, this._margins = s, this.setDimensions(), this.buildLabels(), this.fit();
    }
    setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
    }
    buildLabels() {
        let t = this.options.labels || {}, e = B1(t.generateLabels, [
            this.chart
        ], this) || [];
        t.filter && (e = e.filter((s)=>t.filter(s, this.chart.data)
        )), t.sort && (e = e.sort((s, n)=>t.sort(s, n, this.chart.data)
        )), this.options.reverse && e.reverse(), this.legendItems = e;
    }
    fit() {
        let { options: t , ctx: e  } = this;
        if (!t.display) {
            this.width = this.height = 0;
            return;
        }
        let s = t.labels, n = j(s.font), o = n.size, a = this._computeTitleHeight(), { boxWidth: r , itemHeight: l  } = Vn(s, o), c, h109;
        e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, h109 = this._fitRows(a, o, r, l) + 10) : (h109 = this.maxHeight, c = this._fitCols(a, o, r, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h109, t.maxHeight || this.maxHeight);
    }
    _fitRows(t, e, s, n) {
        let { ctx: o , maxWidth: a , options: { labels: { padding: r  }  }  } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
            0
        ], h110 = n + r, d = t;
        o.textAlign = "left", o.textBaseline = "middle";
        let u = -1, f = -h110;
        return this.legendItems.forEach((g39, p)=>{
            let m = s + e / 2 + o.measureText(g39.text).width;
            (p === 0 || c[c.length - 1] + m + 2 * r > a) && (d += h110, c[c.length - (p > 0 ? 0 : 1)] = 0, f += h110, u++), l[p] = {
                left: 0,
                top: f,
                row: u,
                width: m,
                height: n
            }, c[c.length - 1] += m + r;
        }), d;
    }
    _fitCols(t, e, s, n) {
        let { ctx: o , maxHeight: a , options: { labels: { padding: r  }  }  } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h111 = a - t, d = r, u = 0, f = 0, g40 = 0, p = 0;
        return this.legendItems.forEach((m, b)=>{
            let x = s + e / 2 + o.measureText(m.text).width;
            b > 0 && f + n + 2 * r > h111 && (d += u + r, c.push({
                width: u,
                height: f
            }), g40 += u + r, p++, u = f = 0), l[b] = {
                left: g40,
                top: f,
                col: p,
                width: x,
                height: n
            }, u = Math.max(u, x), f += n + r;
        }), d += u, c.push({
            width: u,
            height: f
        }), d;
    }
    adjustHitBoxes() {
        if (!this.options.display) return;
        let t = this._computeTitleHeight(), { legendHitBoxes: e , options: { align: s , labels: { padding: n  } , rtl: o  }  } = this, a = Dt(o, this.left, this.width);
        if (this.isHorizontal()) {
            let r = 0, l = Y1(s, this.left + n, this.right - this.lineWidths[r]);
            for (let c of e)r !== c.row && (r = c.row, l = Y1(s, this.left + n, this.right - this.lineWidths[r])), c.top += this.top + t + n, c.left = a.leftForLtr(a.x(l), c.width), l += c.width + n;
        } else {
            let r = 0, l = Y1(s, this.top + t + n, this.bottom - this.columnSizes[r].height);
            for (let c of e)c.col !== r && (r = c.col, l = Y1(s, this.top + t + n, this.bottom - this.columnSizes[r].height)), c.top = l, c.left += this.left + n, c.left = a.leftForLtr(a.x(c.left), c.width), l += c.height + n;
        }
    }
    isHorizontal() {
        return this.options.position === "top" || this.options.position === "bottom";
    }
    draw() {
        if (this.options.display) {
            let t = this.ctx;
            ne1(t, this), this._draw(), oe(t);
        }
    }
    _draw() {
        let { options: t , columnSizes: e , lineWidths: s , ctx: n  } = this, { align: o , labels: a  } = t, r = D1.color, l = Dt(t.rtl, this.left, this.width), c = j(a.font), { color: h112 , padding: d  } = a, u = c.size, f = u / 2, g41;
        this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
        let { boxWidth: p , boxHeight: m , itemHeight: b  } = Vn(a, u), x = function(M12, S17, k17) {
            if (isNaN(p) || p <= 0 || isNaN(m) || m < 0) return;
            n.save();
            let E = P1(k17.lineWidth, 1);
            if (n.fillStyle = P1(k17.fillStyle, r), n.lineCap = P1(k17.lineCap, "butt"), n.lineDashOffset = P1(k17.lineDashOffset, 0), n.lineJoin = P1(k17.lineJoin, "miter"), n.lineWidth = E, n.strokeStyle = P1(k17.strokeStyle, r), n.setLineDash(P1(k17.lineDash, [])), a.usePointStyle) {
                let T11 = {
                    radius: p * Math.SQRT2 / 2,
                    pointStyle: k17.pointStyle,
                    rotation: k17.rotation,
                    borderWidth: E
                }, A7 = l.xPlus(M12, p / 2), H6 = S17 + f;
                se(n, T11, A7, H6);
            } else {
                let T12 = S17 + Math.max((u - m) / 2, 0), A8 = l.leftForLtr(M12, p), H7 = Ct(k17.borderRadius);
                n.beginPath(), Object.values(H7).some((K6)=>K6 !== 0
                ) ? ae2(n, {
                    x: A8,
                    y: T12,
                    w: p,
                    h: m,
                    radius: H7
                }) : n.rect(A8, T12, p, m), n.fill(), E !== 0 && n.stroke();
            }
            n.restore();
        }, v18 = function(M13, S18, k18) {
            yt(n, k18.text, M13, S18 + b / 2, c, {
                strikethrough: k18.hidden,
                textAlign: l.textAlign(k18.textAlign)
            });
        }, y30 = this.isHorizontal(), _ = this._computeTitleHeight();
        y30 ? g41 = {
            x: Y1(o, this.left + d, this.right - s[0]),
            y: this.top + d + _,
            line: 0
        } : g41 = {
            x: this.left + d,
            y: Y1(o, this.top + _ + d, this.bottom - e[0].height),
            line: 0
        }, Ni(this.ctx, t.textDirection);
        let w = b + d;
        this.legendItems.forEach((M14, S19)=>{
            n.strokeStyle = M14.fontColor || h112, n.fillStyle = M14.fontColor || h112;
            let k19 = n.measureText(M14.text).width, E = l.textAlign(M14.textAlign || (M14.textAlign = a.textAlign)), T13 = p + f + k19, A9 = g41.x, H8 = g41.y;
            l.setWidth(this.width), y30 ? S19 > 0 && A9 + T13 + d > this.right && (H8 = g41.y += w, g41.line++, A9 = g41.x = Y1(o, this.left + d, this.right - s[g41.line])) : S19 > 0 && H8 + w > this.bottom && (A9 = g41.x = A9 + e[g41.line].width + d, g41.line++, H8 = g41.y = Y1(o, this.top + _ + d, this.bottom - e[g41.line].height));
            let K7 = l.x(A9);
            x(K7, H8, M14), A9 = Ds(E, A9 + p + f, y30 ? A9 + T13 : this.right, t.rtl), v18(l.x(A9), H8, M14), y30 ? g41.x += T13 + d : g41.y += w;
        }), Hi(this.ctx, t.textDirection);
    }
    drawTitle() {
        let t = this.options, e = t.title, s = j(e.font), n = X1(e.padding);
        if (!e.display) return;
        let o = Dt(t.rtl, this.left, this.width), a = this.ctx, r = e.position, l = s.size / 2, c = n.top + l, h113, d = this.left, u = this.width;
        if (this.isHorizontal()) u = Math.max(...this.lineWidths), h113 = this.top + c, d = Y1(t.align, d, this.right - u);
        else {
            let g42 = this.columnSizes.reduce((p, m)=>Math.max(p, m.height)
            , 0);
            h113 = c + Y1(t.align, this.top, this.bottom - g42 - t.labels.padding - this._computeTitleHeight());
        }
        let f = Y1(r, d, d + u);
        a.textAlign = o.textAlign(Ie2(r)), a.textBaseline = "middle", a.strokeStyle = e.color, a.fillStyle = e.color, a.font = s.string, yt(a, e.text, f, h113, s);
    }
    _computeTitleHeight() {
        let t = this.options.title, e = j(t.font), s = X1(t.padding);
        return t.display ? e.lineHeight + s.height : 0;
    }
    _getLegendItemAt(t, e) {
        let s, n, o;
        if (at(t, this.left, this.right) && at(e, this.top, this.bottom)) {
            for(o = this.legendHitBoxes, s = 0; s < o.length; ++s)if (n = o[s], at(t, n.left, n.left + n.width) && at(e, n.top, n.top + n.height)) return this.legendItems[s];
        }
        return null;
    }
    handleEvent(t) {
        let e = this.options;
        if (!tc(t.type, e)) return;
        let s = this._getLegendItemAt(t.x, t.y);
        if (t.type === "mousemove") {
            let n = this._hoveredItem, o = Ql(n, s);
            n && !o && B1(e.onLeave, [
                t,
                n,
                this
            ], this), this._hoveredItem = s, s && !o && B1(e.onHover, [
                t,
                s,
                this
            ], this);
        } else s && B1(e.onClick, [
            t,
            s,
            this
        ], this);
    }
};
function tc(i, t) {
    return !!(i === "mousemove" && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var ec = {
    id: "legend",
    _element: os,
    start (i, t, e) {
        let s = i.legend = new os({
            ctx: i.ctx,
            options: e,
            chart: i
        });
        U.configure(i, s, e), U.addBox(i, s);
    },
    stop (i) {
        U.removeBox(i, i.legend), delete i.legend;
    },
    beforeUpdate (i, t, e) {
        let s = i.legend;
        U.configure(i, s, e), s.options = e;
    },
    afterUpdate (i) {
        let t = i.legend;
        t.buildLabels(), t.adjustHitBoxes();
    },
    afterEvent (i, t) {
        t.replay || i.legend.handleEvent(t.event);
    },
    defaults: {
        display: !0,
        position: "top",
        align: "center",
        fullSize: !0,
        reverse: !1,
        weight: 1000,
        onClick (i, t, e) {
            let s = t.datasetIndex, n = e.chart;
            n.isDatasetVisible(s) ? (n.hide(s), t.hidden = !0) : (n.show(s), t.hidden = !1);
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: (i)=>i.chart.options.color
            ,
            boxWidth: 40,
            padding: 10,
            generateLabels (i) {
                let t = i.data.datasets, { labels: { usePointStyle: e , pointStyle: s , textAlign: n , color: o  }  } = i.legend.options;
                return i._getSortedDatasetMetas().map((a)=>{
                    let r = a.controller.getStyle(e ? 0 : void 0), l = X1(r.borderWidth);
                    return {
                        text: t[a.index].label,
                        fillStyle: r.backgroundColor,
                        fontColor: o,
                        hidden: !a.visible,
                        lineCap: r.borderCapStyle,
                        lineDash: r.borderDash,
                        lineDashOffset: r.borderDashOffset,
                        lineJoin: r.borderJoinStyle,
                        lineWidth: (l.width + l.height) / 4,
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
            color: (i)=>i.chart.options.color
            ,
            display: !1,
            position: "center",
            text: ""
        }
    },
    descriptors: {
        _scriptable: (i)=>!i.startsWith("on")
        ,
        labels: {
            _scriptable: (i)=>![
                    "generateLabels",
                    "filter",
                    "sort"
                ].includes(i)
        }
    }
}, ai = class extends it {
    constructor(t){
        super();
        this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
    }
    update(t, e) {
        let s = this.options;
        if (this.left = 0, this.top = 0, !s.display) {
            this.width = this.height = this.right = this.bottom = 0;
            return;
        }
        this.width = this.right = t, this.height = this.bottom = e;
        let n = I(s.text) ? s.text.length : 1;
        this._padding = X1(s.padding);
        let o = n * j(s.font).lineHeight + this._padding.height;
        this.isHorizontal() ? this.height = o : this.width = o;
    }
    isHorizontal() {
        let t = this.options.position;
        return t === "top" || t === "bottom";
    }
    _drawArgs(t) {
        let { top: e , left: s , bottom: n , right: o , options: a  } = this, r = a.align, l = 0, c, h114, d;
        return this.isHorizontal() ? (h114 = Y1(r, s, o), d = e + t, c = o - s) : (a.position === "left" ? (h114 = s + t, d = Y1(r, n, e), l = V1 * -0.5) : (h114 = o - t, d = Y1(r, e, n), l = V1 * 0.5), c = n - e), {
            titleX: h114,
            titleY: d,
            maxWidth: c,
            rotation: l
        };
    }
    draw() {
        let t = this.ctx, e = this.options;
        if (!e.display) return;
        let s = j(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: a , titleY: r , maxWidth: l , rotation: c  } = this._drawArgs(o);
        yt(t, e.text, 0, 0, s, {
            color: e.color,
            maxWidth: l,
            rotation: c,
            textAlign: Ie2(e.align),
            textBaseline: "middle",
            translation: [
                a,
                r
            ]
        });
    }
};
function ic(i, t) {
    let e = new ai({
        ctx: i.ctx,
        options: t,
        chart: i
    });
    U.configure(i, e, t), U.addBox(i, e), i.titleBlock = e;
}
var sc = {
    id: "title",
    _element: ai,
    start (i, t, e) {
        ic(i, e);
    },
    stop (i) {
        let t = i.titleBlock;
        U.removeBox(i, t), delete i.titleBlock;
    },
    beforeUpdate (i, t, e) {
        let s = i.titleBlock;
        U.configure(i, s, e), s.options = e;
    },
    defaults: {
        align: "center",
        display: !1,
        font: {
            weight: "bold"
        },
        fullSize: !0,
        padding: 10,
        position: "top",
        text: "",
        weight: 2000
    },
    defaultRoutes: {
        color: "color"
    },
    descriptors: {
        _scriptable: !0,
        _indexable: !1
    }
}, Ge = new WeakMap, nc = {
    id: "subtitle",
    start (i, t, e) {
        let s = new ai({
            ctx: i.ctx,
            options: e,
            chart: i
        });
        U.configure(i, s, e), U.addBox(i, s), Ge.set(i, s);
    },
    stop (i) {
        U.removeBox(i, Ge.get(i)), Ge.delete(i);
    },
    beforeUpdate (i, t, e) {
        let s = Ge.get(i);
        U.configure(i, s, e), s.options = e;
    },
    defaults: {
        align: "center",
        display: !1,
        font: {
            weight: "normal"
        },
        fullSize: !0,
        padding: 0,
        position: "top",
        text: "",
        weight: 1500
    },
    defaultRoutes: {
        color: "color"
    },
    descriptors: {
        _scriptable: !0,
        _indexable: !1
    }
}, pe2 = {
    average (i) {
        if (!i.length) return !1;
        let t, e, s = 0, n = 0, o = 0;
        for(t = 0, e = i.length; t < e; ++t){
            let a = i[t].element;
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
    nearest (i, t) {
        if (!i.length) return !1;
        let e = t.x, s = t.y, n = Number.POSITIVE_INFINITY, o, a, r;
        for(o = 0, a = i.length; o < a; ++o){
            let l = i[o].element;
            if (l && l.hasValue()) {
                let c = l.getCenterPoint(), h115 = Fe1(t, c);
                h115 < n && (n = h115, r = l);
            }
        }
        if (r) {
            let l = r.tooltipPosition();
            e = l.x, s = l.y;
        }
        return {
            x: e,
            y: s
        };
    }
};
function lt(i, t) {
    return t && (I(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function ut(i) {
    return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function oc(i, t) {
    let { element: e , datasetIndex: s , index: n  } = t, o = i.getDatasetMeta(s).controller, { label: a , value: r  } = o.getLabelAndValue(n);
    return {
        chart: i,
        label: a,
        parsed: o.getParsed(n),
        raw: i.data.datasets[s].data[n],
        formattedValue: r,
        dataset: o.getDataset(),
        dataIndex: n,
        datasetIndex: s,
        element: e
    };
}
function Wn(i, t) {
    let e = i.chart.ctx, { body: s , footer: n , title: o  } = i, { boxWidth: a , boxHeight: r  } = t, l = j(t.bodyFont), c = j(t.titleFont), h116 = j(t.footerFont), d = o.length, u = n.length, f = s.length, g43 = X1(t.padding), p = g43.height, m = 0, b = s.reduce((y31, _)=>y31 + _.before.length + _.lines.length + _.after.length
    , 0);
    if (b += i.beforeBody.length + i.afterBody.length, d && (p += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), b) {
        let y32 = t.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight;
        p += f * y32 + (b - f) * l.lineHeight + (b - 1) * t.bodySpacing;
    }
    u && (p += t.footerMarginTop + u * h116.lineHeight + (u - 1) * t.footerSpacing);
    let x = 0, v19 = function(y33) {
        m = Math.max(m, e.measureText(y33).width + x);
    };
    return e.save(), e.font = c.string, R(i.title, v19), e.font = l.string, R(i.beforeBody.concat(i.afterBody), v19), x = t.displayColors ? a + 2 + t.boxPadding : 0, R(s, (y34)=>{
        R(y34.before, v19), R(y34.lines, v19), R(y34.after, v19);
    }), x = 0, e.font = h116.string, R(i.footer, v19), e.restore(), m += g43.width, {
        width: m,
        height: p
    };
}
function ac(i, t) {
    let { y: e , height: s  } = t;
    return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function rc(i, t, e, s) {
    let { x: n , width: o  } = s, a = e.caretSize + e.caretPadding;
    if (i === "left" && n + o + a > t.width || i === "right" && n - o - a < 0) return !0;
}
function lc(i, t, e, s) {
    let { x: n , width: o  } = e, { width: a , chartArea: { left: r , right: l  }  } = i, c = "center";
    return s === "center" ? c = n <= (r + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= a - o / 2 && (c = "right"), rc(c, i, t, e) && (c = "center"), c;
}
function Nn(i, t, e) {
    let s = e.yAlign || t.yAlign || ac(i, e);
    return {
        xAlign: e.xAlign || t.xAlign || lc(i, t, e, s),
        yAlign: s
    };
}
function cc(i, t) {
    let { x: e , width: s  } = i;
    return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function hc(i, t, e) {
    let { y: s , height: n  } = i;
    return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function Hn(i, t, e, s) {
    let { caretSize: n , caretPadding: o , cornerRadius: a  } = i, { xAlign: r , yAlign: l  } = e, c = n + o, { topLeft: h117 , topRight: d , bottomLeft: u , bottomRight: f  } = Ct(a), g44 = cc(t, r), p = hc(t, l, c);
    return l === "center" ? r === "left" ? g44 += c : r === "right" && (g44 -= c) : r === "left" ? g44 -= Math.max(h117, u) + n : r === "right" && (g44 += Math.max(d, f) + n), {
        x: $(g44, 0, s.width - t.width),
        y: $(p, 0, s.height - t.height)
    };
}
function Ze(i, t, e) {
    let s = X1(e.padding);
    return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function jn(i) {
    return lt([], ut(i));
}
function dc(i, t, e) {
    return ht(i, {
        tooltip: t,
        tooltipItems: e,
        type: "tooltip"
    });
}
function $n(i, t) {
    let e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
    return e ? i.override(e) : i;
}
var si = class extends it {
    constructor(t){
        super();
        this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart || t._chart, this._chart = this.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
    }
    initialize(t) {
        this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
    }
    _resolveAnimations() {
        let t = this._cachedAnimations;
        if (t) return t;
        let e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, o = new rs(this.chart, n);
        return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
    }
    getContext() {
        return this.$context || (this.$context = dc(this.chart.getContext(), this, this._tooltipItems));
    }
    getTitle(t, e) {
        let { callbacks: s  } = e, n = s.beforeTitle.apply(this, [
            t
        ]), o = s.title.apply(this, [
            t
        ]), a = s.afterTitle.apply(this, [
            t
        ]), r = [];
        return r = lt(r, ut(n)), r = lt(r, ut(o)), r = lt(r, ut(a)), r;
    }
    getBeforeBody(t, e) {
        return jn(e.callbacks.beforeBody.apply(this, [
            t
        ]));
    }
    getBody(t, e) {
        let { callbacks: s  } = e, n = [];
        return R(t, (o)=>{
            let a = {
                before: [],
                lines: [],
                after: []
            }, r = $n(s, o);
            lt(a.before, ut(r.beforeLabel.call(this, o))), lt(a.lines, r.label.call(this, o)), lt(a.after, ut(r.afterLabel.call(this, o))), n.push(a);
        }), n;
    }
    getAfterBody(t, e) {
        return jn(e.callbacks.afterBody.apply(this, [
            t
        ]));
    }
    getFooter(t, e) {
        let { callbacks: s  } = e, n = s.beforeFooter.apply(this, [
            t
        ]), o = s.footer.apply(this, [
            t
        ]), a = s.afterFooter.apply(this, [
            t
        ]), r = [];
        return r = lt(r, ut(n)), r = lt(r, ut(o)), r = lt(r, ut(a)), r;
    }
    _createItems(t) {
        let e = this._active, s = this.chart.data, n = [], o = [], a = [], r = [], l, c;
        for(l = 0, c = e.length; l < c; ++l)r.push(oc(this.chart, e[l]));
        return t.filter && (r = r.filter((h118, d, u)=>t.filter(h118, d, u, s)
        )), t.itemSort && (r = r.sort((h119, d)=>t.itemSort(h119, d, s)
        )), R(r, (h120)=>{
            let d = $n(t.callbacks, h120);
            n.push(d.labelColor.call(this, h120)), o.push(d.labelPointStyle.call(this, h120)), a.push(d.labelTextColor.call(this, h120));
        }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = a, this.dataPoints = r, r;
    }
    update(t, e) {
        let s = this.options.setContext(this.getContext()), n = this._active, o, a = [];
        if (!n.length) this.opacity !== 0 && (o = {
            opacity: 0
        });
        else {
            let r = pe2[s.position].call(this, n, this._eventPosition);
            a = this._createItems(s), this.title = this.getTitle(a, s), this.beforeBody = this.getBeforeBody(a, s), this.body = this.getBody(a, s), this.afterBody = this.getAfterBody(a, s), this.footer = this.getFooter(a, s);
            let l = this._size = Wn(this, s), c = Object.assign({}, r, l), h121 = Nn(this.chart, s, c), d = Hn(s, c, h121, this.chart);
            this.xAlign = h121.xAlign, this.yAlign = h121.yAlign, o = {
                opacity: 1,
                x: d.x,
                y: d.y,
                width: l.width,
                height: l.height,
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
        let { xAlign: n , yAlign: o  } = this, { caretSize: a , cornerRadius: r  } = s, { topLeft: l , topRight: c , bottomLeft: h122 , bottomRight: d  } = Ct(r), { x: u , y: f  } = t, { width: g45 , height: p  } = e, m, b, x, v20, y35, _;
        return o === "center" ? (y35 = f + p / 2, n === "left" ? (m = u, b = m - a, v20 = y35 + a, _ = y35 - a) : (m = u + g45, b = m + a, v20 = y35 - a, _ = y35 + a), x = m) : (n === "left" ? b = u + Math.max(l, h122) + a : n === "right" ? b = u + g45 - Math.max(c, d) - a : b = this.caretX, o === "top" ? (v20 = f, y35 = v20 - a, m = b - a, x = b + a) : (v20 = f + p, y35 = v20 + a, m = b + a, x = b - a), _ = v20), {
            x1: m,
            x2: b,
            x3: x,
            y1: v20,
            y2: y35,
            y3: _
        };
    }
    drawTitle(t, e, s) {
        let n = this.title, o = n.length, a, r, l;
        if (o) {
            let c = Dt(s.rtl, this.x, this.width);
            for(t.x = Ze(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", a = j(s.titleFont), r = s.titleSpacing, e.fillStyle = s.titleColor, e.font = a.string, l = 0; l < o; ++l)e.fillText(n[l], c.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + r, l + 1 === o && (t.y += s.titleMarginBottom - r);
        }
    }
    _drawColorBox(t, e, s, n, o) {
        let a = this.labelColors[s], r = this.labelPointStyles[s], { boxHeight: l , boxWidth: c , boxPadding: h123  } = o, d = j(o.bodyFont), u = Ze(this, "left", o), f = n.x(u), g46 = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0, p = e.y + g46;
        if (o.usePointStyle) {
            let m = {
                radius: Math.min(c, l) / 2,
                pointStyle: r.pointStyle,
                rotation: r.rotation,
                borderWidth: 1
            }, b = n.leftForLtr(f, c) + c / 2, x = p + l / 2;
            t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, se(t, m, b, x), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, se(t, m, b, x);
        } else {
            t.lineWidth = a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0;
            let m = n.leftForLtr(f, c - h123), b = n.leftForLtr(n.xPlus(f, 1), c - h123 - 2), x = Ct(a.borderRadius);
            Object.values(x).some((v21)=>v21 !== 0
            ) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, ae2(t, {
                x: m,
                y: p,
                w: c,
                h: l,
                radius: x
            }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), ae2(t, {
                x: b,
                y: p + 1,
                w: c - 2,
                h: l - 2,
                radius: x
            }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(m, p, c, l), t.strokeRect(m, p, c, l), t.fillStyle = a.backgroundColor, t.fillRect(b, p + 1, c - 2, l - 2));
        }
        t.fillStyle = this.labelTextColors[s];
    }
    drawBody(t, e, s) {
        let { body: n  } = this, { bodySpacing: o , bodyAlign: a , displayColors: r , boxHeight: l , boxWidth: c , boxPadding: h124  } = s, d = j(s.bodyFont), u = d.lineHeight, f = 0, g47 = Dt(s.rtl, this.x, this.width), p = function(S20) {
            e.fillText(S20, g47.x(t.x + f), t.y + u / 2), t.y += u + o;
        }, m = g47.textAlign(a), b, x, v22, y36, _, w, M15;
        for(e.textAlign = a, e.textBaseline = "middle", e.font = d.string, t.x = Ze(this, m, s), e.fillStyle = s.bodyColor, R(this.beforeBody, p), f = r && m !== "right" ? a === "center" ? c / 2 + h124 : c + 2 + h124 : 0, y36 = 0, w = n.length; y36 < w; ++y36){
            for(b = n[y36], x = this.labelTextColors[y36], e.fillStyle = x, R(b.before, p), v22 = b.lines, r && v22.length && (this._drawColorBox(e, t, y36, g47, s), u = Math.max(d.lineHeight, l)), _ = 0, M15 = v22.length; _ < M15; ++_)p(v22[_]), u = d.lineHeight;
            R(b.after, p);
        }
        f = 0, u = d.lineHeight, R(this.afterBody, p), t.y -= o;
    }
    drawFooter(t, e, s) {
        let n = this.footer, o = n.length, a, r;
        if (o) {
            let l = Dt(s.rtl, this.x, this.width);
            for(t.x = Ze(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", a = j(s.footerFont), e.fillStyle = s.footerColor, e.font = a.string, r = 0; r < o; ++r)e.fillText(n[r], l.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + s.footerSpacing;
        }
    }
    drawBackground(t, e, s, n) {
        let { xAlign: o , yAlign: a  } = this, { x: r , y: l  } = t, { width: c , height: h125  } = s, { topLeft: d , topRight: u , bottomLeft: f , bottomRight: g48  } = Ct(n.cornerRadius);
        e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(r + d, l), a === "top" && this.drawCaret(t, e, s, n), e.lineTo(r + c - u, l), e.quadraticCurveTo(r + c, l, r + c, l + u), a === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(r + c, l + h125 - g48), e.quadraticCurveTo(r + c, l + h125, r + c - g48, l + h125), a === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(r + f, l + h125), e.quadraticCurveTo(r, l + h125, r, l + h125 - f), a === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(r, l + d), e.quadraticCurveTo(r, l, r + d, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
    }
    _updateAnimationTarget(t) {
        let e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
        if (n || o) {
            let a = pe2[t.position].call(this, this._active, this._eventPosition);
            if (!a) return;
            let r = this._size = Wn(this, t), l = Object.assign({}, a, this._size), c = Nn(e, t, l), h126 = Hn(t, l, c, e);
            (n._to !== h126.x || o._to !== h126.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = r.width, this.height = r.height, this.caretX = a.x, this.caretY = a.y, this._resolveAnimations().update(this, h126));
        }
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
        s = Math.abs(s) < 0.001 ? 0 : s;
        let a = X1(e.padding), r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        e.enabled && r && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), Ni(t, e.textDirection), o.y += a.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Hi(t, e.textDirection), t.restore());
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(t, e) {
        let s = this._active, n = t.map(({ datasetIndex: r , index: l  })=>{
            let c = this.chart.getDatasetMeta(r);
            if (!c) throw new Error("Cannot find a dataset at index " + r);
            return {
                datasetIndex: r,
                element: c.data[l],
                index: l
            };
        }), o = !ee2(s, n), a = this._positionChanged(n, e);
        (o || a) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
    }
    handleEvent(t, e, s = !0) {
        if (e && this._ignoreReplayEvents) return !1;
        this._ignoreReplayEvents = !1;
        let n = this.options, o = this._active || [], a = this._getActiveElements(t, o, e, s), r = this._positionChanged(a, t), l = e || !ee2(a, o) || r;
        return l && (this._active = a, (n.enabled || n.external) && (this._eventPosition = {
            x: t.x,
            y: t.y
        }, this.update(!0, e))), l;
    }
    _getActiveElements(t, e, s, n) {
        let o = this.options;
        if (t.type === "mouseout") return [];
        if (!n) return e;
        let a = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
        return o.reverse && a.reverse(), a;
    }
    _positionChanged(t, e) {
        let { caretX: s , caretY: n , options: o  } = this, a = pe2[o.position].call(this, t, e);
        return a !== !1 && (s !== a.x || n !== a.y);
    }
};
si.positioners = pe2;
var uc = {
    id: "tooltip",
    _element: si,
    positioners: pe2,
    afterInit (i, t, e) {
        e && (i.tooltip = new si({
            chart: i,
            options: e
        }));
    },
    beforeUpdate (i, t, e) {
        i.tooltip && i.tooltip.initialize(e);
    },
    reset (i, t, e) {
        i.tooltip && i.tooltip.initialize(e);
    },
    afterDraw (i) {
        let t = i.tooltip, e = {
            tooltip: t
        };
        i.notifyPlugins("beforeTooltipDraw", e) !== !1 && (t && t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e));
    },
    afterEvent (i, t) {
        if (i.tooltip) {
            let e = t.replay;
            i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
        }
    },
    defaults: {
        enabled: !0,
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
        boxHeight: (i, t)=>t.bodyFont.size
        ,
        boxWidth: (i, t)=>t.bodyFont.size
        ,
        multiKeyBackground: "#fff",
        displayColors: !0,
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
            beforeTitle: ot,
            title (i) {
                if (i.length > 0) {
                    let t = i[0], e = t.chart.data.labels, s = e ? e.length : 0;
                    if (this && this.options && this.options.mode === "dataset") return t.dataset.label || "";
                    if (t.label) return t.label;
                    if (s > 0 && t.dataIndex < s) return e[t.dataIndex];
                }
                return "";
            },
            afterTitle: ot,
            beforeBody: ot,
            beforeLabel: ot,
            label (i) {
                if (this && this.options && this.options.mode === "dataset") return i.label + ": " + i.formattedValue || i.formattedValue;
                let t = i.dataset.label || "";
                t && (t += ": ");
                let e = i.formattedValue;
                return L(e) || (t += e), t;
            },
            labelColor (i) {
                let e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
                return {
                    borderColor: e.borderColor,
                    backgroundColor: e.backgroundColor,
                    borderWidth: e.borderWidth,
                    borderDash: e.borderDash,
                    borderDashOffset: e.borderDashOffset,
                    borderRadius: 0
                };
            },
            labelTextColor () {
                return this.options.bodyColor;
            },
            labelPointStyle (i) {
                let e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
                return {
                    pointStyle: e.pointStyle,
                    rotation: e.rotation
                };
            },
            afterLabel: ot,
            afterBody: ot,
            beforeFooter: ot,
            footer: ot,
            afterFooter: ot
        }
    },
    defaultRoutes: {
        bodyFont: "font",
        footerFont: "font",
        titleFont: "font"
    },
    descriptors: {
        _scriptable: (i)=>i !== "filter" && i !== "itemSort" && i !== "external"
        ,
        _indexable: !1,
        callbacks: {
            _scriptable: !1,
            _indexable: !1
        },
        animation: {
            _fallback: !1
        },
        animations: {
            _fallback: "animation"
        }
    },
    additionalOptionScopes: [
        "interaction"
    ]
}, fc = Object.freeze({
    __proto__: null,
    Decimation: Fl,
    Filler: Jl,
    Legend: ec,
    SubTitle: nc,
    Title: sc,
    Tooltip: uc
}), gc = (i, t, e, s)=>(typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
        index: e,
        label: t
    })) : isNaN(t) && (e = null), e)
;
function pc(i, t, e, s) {
    let n = i.indexOf(t);
    if (n === -1) return gc(i, t, e, s);
    let o = i.lastIndexOf(t);
    return n !== o ? e : n;
}
var mc = (i, t)=>i === null ? null : $(Math.round(i), 0, t)
, be1 = class extends wt {
    constructor(t){
        super(t);
        this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
    }
    init(t) {
        let e = this._addedLabels;
        if (e.length) {
            let s = this.getLabels();
            for (let { index: n , label: o  } of e)s[n] === o && s.splice(n, 1);
            this._addedLabels = [];
        }
        super.init(t);
    }
    parse(t, e) {
        if (L(t)) return null;
        let s = this.getLabels();
        return e = isFinite(e) && s[e] === t ? e : pc(s, t, P1(e, t), this._addedLabels), mc(e, s.length - 1);
    }
    determineDataLimits() {
        let { minDefined: t , maxDefined: e  } = this.getUserBounds(), { min: s , max: n  } = this.getMinMax(!0);
        this.options.bounds === "ticks" && (t || (s = 0), e || (n = this.getLabels().length - 1)), this.min = s, this.max = n;
    }
    buildTicks() {
        let t = this.min, e = this.max, s = this.options.offset, n = [], o = this.getLabels();
        o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (s ? 0 : 1), 1), this._startValue = this.min - (s ? 0.5 : 0);
        for(let a = t; a <= e; a++)n.push({
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
be1.id = "category";
be1.defaults = {
    ticks: {
        callback: be1.prototype.getLabelForValue
    }
};
function bc(i, t) {
    let e = [], { bounds: n , step: o , min: a , max: r , precision: l , count: c , maxTicks: h127 , maxDigits: d , includeBounds: u  } = i, f = o || 1, g49 = h127 - 1, { min: p , max: m  } = t, b = !L(a), x = !L(r), v23 = !L(c), y37 = (m - p) / (d + 1), _ = vi((m - p) / g49 / f) * f, w, M16, S21, k20;
    if (_ < 0.00000000000001 && !b && !x) return [
        {
            value: p
        },
        {
            value: m
        }
    ];
    k20 = Math.ceil(m / _) - Math.floor(p / _), k20 > g49 && (_ = vi(k20 * _ / g49 / f) * f), L(l) || (w = Math.pow(10, l), _ = Math.ceil(_ * w) / w), n === "ticks" ? (M16 = Math.floor(p / _) * _, S21 = Math.ceil(m / _) * _) : (M16 = p, S21 = m), b && x && o && Es1((r - a) / o, _ / 1000) ? (k20 = Math.round(Math.min((r - a) / _, h127)), _ = (r - a) / k20, M16 = a, S21 = r) : v23 ? (M16 = b ? a : M16, S21 = x ? r : S21, k20 = c - 1, _ = (S21 - M16) / k20) : (k20 = (S21 - M16) / _, It(k20, Math.round(k20), _ / 1000) ? k20 = Math.round(k20) : k20 = Math.ceil(k20));
    let E = Math.max(wi(_), wi(M16));
    w = Math.pow(10, L(l) ? E : l), M16 = Math.round(M16 * w) / w, S21 = Math.round(S21 * w) / w;
    let T14 = 0;
    for(b && (u && M16 !== a ? (e.push({
        value: a
    }), M16 < a && T14++, It(Math.round((M16 + T14 * _) * w) / w, a, Yn(a, y37, i)) && T14++) : M16 < a && T14++); T14 < k20; ++T14)e.push({
        value: Math.round((M16 + T14 * _) * w) / w
    });
    return x && u && S21 !== r ? e.length && It(e[e.length - 1].value, r, Yn(r, y37, i)) ? e[e.length - 1].value = r : e.push({
        value: r
    }) : (!x || S21 === r) && e.push({
        value: S21
    }), e;
}
function Yn(i, t, { horizontal: e , minRotation: s  }) {
    let n = et(s), o = (e ? Math.sin(n) : Math.cos(n)) || 0.001, a = 0.75 * t * ("" + i).length;
    return Math.min(t / o, a);
}
var xe2 = class extends wt {
    constructor(t){
        super(t);
        this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
    }
    parse(t, e) {
        return L(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
    }
    handleTickRangeOptions() {
        let { beginAtZero: t  } = this.options, { minDefined: e , maxDefined: s  } = this.getUserBounds(), { min: n , max: o  } = this, a = (l)=>n = e ? n : l
        , r = (l)=>o = s ? o : l
        ;
        if (t) {
            let l = st(n), c = st(o);
            l < 0 && c < 0 ? r(0) : l > 0 && c > 0 && a(0);
        }
        if (n === o) {
            let l = 1;
            (o >= Number.MAX_SAFE_INTEGER || n <= Number.MIN_SAFE_INTEGER) && (l = Math.abs(o * 0.05)), r(o + l), t || a(n - l);
        }
        this.min = n, this.max = o;
    }
    getTickLimit() {
        let t = this.options.ticks, { maxTicksLimit: e , stepSize: s  } = t, n;
        return s ? (n = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, n > 1000 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1000)) : (n = this.computeTickLimit(), e = e || 11), e && (n = Math.min(e, n)), n;
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
            includeBounds: e.includeBounds !== !1
        }, o = this._range || this, a = bc(n, o);
        return t.bounds === "ticks" && Mi1(a, this, "value"), t.reverse ? (a.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), a;
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
        return Wt(t, this.chart.options.locale, this.options.ticks.format);
    }
}, ri = class extends xe2 {
    determineDataLimits() {
        let { min: t , max: e  } = this.getMinMax(!0);
        this.min = N(t) ? t : 0, this.max = N(e) ? e : 1, this.handleTickRangeOptions();
    }
    computeTickLimit() {
        let t = this.isHorizontal(), e = t ? this.width : this.height, s = et(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || 0.001, o = this._resolveTickFontOptions(0);
        return Math.ceil(e / Math.min(40, o.lineHeight / n));
    }
    getPixelForValue(t) {
        return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
    }
    getValueForPixel(t) {
        return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
    }
};
ri.id = "linear";
ri.defaults = {
    ticks: {
        callback: oi.formatters.numeric
    }
};
function Xn(i) {
    return i / Math.pow(10, Math.floor(Q1(i))) === 1;
}
function xc(i, t) {
    let e = Math.floor(Q1(t.max)), s = Math.ceil(t.max / Math.pow(10, e)), n = [], o = J1(i.min, Math.pow(10, Math.floor(Q1(t.min)))), a = Math.floor(Q1(o)), r = Math.floor(o / Math.pow(10, a)), l = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
    do n.push({
        value: o,
        major: Xn(o)
    }), ++r, r === 10 && (r = 1, ++a, l = a >= 0 ? 1 : l), o = Math.round(r * Math.pow(10, a) * l) / l;
    while (a < e || a === e && r < s)
    let c = J1(i.max, o);
    return n.push({
        value: c,
        major: Xn(o)
    }), n;
}
var li = class extends wt {
    constructor(t){
        super(t);
        this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
    }
    parse(t, e) {
        let s = xe2.prototype.parse.apply(this, [
            t,
            e
        ]);
        if (s === 0) {
            this._zero = !0;
            return;
        }
        return N(s) && s > 0 ? s : null;
    }
    determineDataLimits() {
        let { min: t , max: e  } = this.getMinMax(!0);
        this.min = N(t) ? Math.max(0, t) : null, this.max = N(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
        let { minDefined: t , maxDefined: e  } = this.getUserBounds(), s = this.min, n = this.max, o = (l)=>s = t ? s : l
        , a = (l)=>n = e ? n : l
        , r = (l, c)=>Math.pow(10, Math.floor(Q1(l)) + c)
        ;
        s === n && (s <= 0 ? (o(1), a(10)) : (o(r(s, -1)), a(r(n, 1)))), s <= 0 && o(r(n, -1)), n <= 0 && a(r(s, 1)), this._zero && this.min !== this._suggestedMin && s === r(this.min, 0) && o(r(s, -1)), this.min = s, this.max = n;
    }
    buildTicks() {
        let t = this.options, e = {
            min: this._userMin,
            max: this._userMax
        }, s = xc(e, this);
        return t.bounds === "ticks" && Mi1(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s;
    }
    getLabelForValue(t) {
        return t === void 0 ? "0" : Wt(t, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
        let t = this.min;
        super.configure(), this._startValue = Q1(t), this._valueRange = Q1(this.max) - Q1(t);
    }
    getPixelForValue(t) {
        return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (Q1(t) - this._startValue) / this._valueRange);
    }
    getValueForPixel(t) {
        let e = this.getDecimalForPixel(t);
        return Math.pow(10, this._startValue + e * this._valueRange);
    }
};
li.id = "logarithmic";
li.defaults = {
    ticks: {
        callback: oi.formatters.logarithmic,
        major: {
            enabled: !0
        }
    }
};
function as(i) {
    let t = i.ticks;
    if (t.display && i.display) {
        let e = X1(t.backdropPadding);
        return P1(t.font && t.font.size, D1.font.size) + e.height;
    }
    return 0;
}
function _c(i, t, e) {
    return e = I(e) ? e : [
        e
    ], {
        w: Hs(i, t.string, e),
        h: e.length * t.lineHeight
    };
}
function Un(i, t, e, s, n) {
    return i === s || i === n ? {
        start: t - e / 2,
        end: t + e / 2
    } : i < s || i > n ? {
        start: t - e,
        end: t
    } : {
        start: t,
        end: t + e
    };
}
function yc(i) {
    let t = {
        l: i.left + i._padding.left,
        r: i.right - i._padding.right,
        t: i.top + i._padding.top,
        b: i.bottom - i._padding.bottom
    }, e = Object.assign({}, t), s = [], n = [], o = i._pointLabels.length, a = i.options.pointLabels, r = a.centerPointLabels ? V1 / o : 0;
    for(let l = 0; l < o; l++){
        let c = a.setContext(i.getPointLabelContext(l));
        n[l] = c.padding;
        let h128 = i.getPointPosition(l, i.drawingArea + n[l], r), d = j(c.font), u = _c(i.ctx, d, i._pointLabels[l]);
        s[l] = u;
        let f = q(i.getIndexAngle(l) + r), g50 = Math.round(Ve(f)), p = Un(g50, h128.x, u.w, 0, 180), m = Un(g50, h128.y, u.h, 90, 270);
        vc(e, t, f, p, m);
    }
    i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = Mc(i, s, n);
}
function vc(i, t, e, s, n) {
    let o = Math.abs(Math.sin(e)), a = Math.abs(Math.cos(e)), r = 0, l = 0;
    s.start < t.l ? (r = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - r)) : s.end > t.r && (r = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + r)), n.start < t.t ? (l = (t.t - n.start) / a, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / a, i.b = Math.max(i.b, t.b + l));
}
function Mc(i, t, e) {
    let s = [], n = i._pointLabels.length, o = i.options, a = as(o) / 2, r = i.drawingArea, l = o.pointLabels.centerPointLabels ? V1 / n : 0;
    for(let c = 0; c < n; c++){
        let h129 = i.getPointPosition(c, r + a + e[c], l), d = Math.round(Ve(q(h129.angle + W1))), u = t[c], f = Sc(h129.y, u.h, d), g51 = wc(d), p = kc(h129.x, u.w, g51);
        s.push({
            x: h129.x,
            y: f,
            textAlign: g51,
            left: p,
            top: f,
            right: p + u.w,
            bottom: f + u.h
        });
    }
    return s;
}
function wc(i) {
    return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function kc(i, t, e) {
    return e === "right" ? i -= t : e === "center" && (i -= t / 2), i;
}
function Sc(i, t, e) {
    return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i;
}
function Pc(i, t) {
    let { ctx: e , options: { pointLabels: s  }  } = i;
    for(let n = t - 1; n >= 0; n--){
        let o = s.setContext(i.getPointLabelContext(n)), a = j(o.font), { x: r , y: l , textAlign: c , left: h130 , top: d , right: u , bottom: f  } = i._pointLabelItems[n], { backdropColor: g52  } = o;
        if (!L(g52)) {
            let p = X1(o.backdropPadding);
            e.fillStyle = g52, e.fillRect(h130 - p.left, d - p.top, u - h130 + p.width, f - d + p.height);
        }
        yt(e, i._pointLabels[n], r, l + a.lineHeight / 2, a, {
            color: o.color,
            textAlign: c,
            textBaseline: "middle"
        });
    }
}
function ko(i, t, e, s) {
    let { ctx: n  } = i;
    if (e) n.arc(i.xCenter, i.yCenter, t, 0, F);
    else {
        let o = i.getPointPosition(0, t);
        n.moveTo(o.x, o.y);
        for(let a = 1; a < s; a++)o = i.getPointPosition(a, t), n.lineTo(o.x, o.y);
    }
}
function Cc(i, t, e, s) {
    let n = i.ctx, o = t.circular, { color: a , lineWidth: r  } = t;
    !o && !s || !a || !r || e < 0 || (n.save(), n.strokeStyle = a, n.lineWidth = r, n.setLineDash(t.borderDash), n.lineDashOffset = t.borderDashOffset, n.beginPath(), ko(i, e, o, s), n.closePath(), n.stroke(), n.restore());
}
function Dc(i, t, e) {
    return ht(i, {
        label: e,
        index: t,
        type: "pointLabel"
    });
}
var jt = class extends xe2 {
    constructor(t){
        super(t);
        this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
    }
    setDimensions() {
        let t = this._padding = X1(as(this.options) / 2), e = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
        this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2);
    }
    determineDataLimits() {
        let { min: t , max: e  } = this.getMinMax(!1);
        this.min = N(t) && !isNaN(t) ? t : 0, this.max = N(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
    }
    computeTickLimit() {
        return Math.ceil(this.drawingArea / as(this.options));
    }
    generateTickLabels(t) {
        xe2.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s)=>{
            let n = B1(this.options.pointLabels.callback, [
                e,
                s
            ], this);
            return n || n === 0 ? n : "";
        }).filter((e, s)=>this.chart.getDataVisibility(s)
        );
    }
    fit() {
        let t = this.options;
        t.display && t.pointLabels.display ? yc(this) : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(t, e, s, n) {
        this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n));
    }
    getIndexAngle(t) {
        let e = F / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
        return q(t * e + et(s));
    }
    getDistanceFromCenterForValue(t) {
        if (L(t)) return NaN;
        let e = this.drawingArea / (this.max - this.min);
        return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
    }
    getValueForDistanceFromCenter(t) {
        if (L(t)) return NaN;
        let e = t / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - e : this.min + e;
    }
    getPointLabelContext(t) {
        let e = this._pointLabels || [];
        if (t >= 0 && t < e.length) {
            let s = e[t];
            return Dc(this.getContext(), t, s);
        }
    }
    getPointPosition(t, e, s = 0) {
        let n = this.getIndexAngle(t) - W1 + s;
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
        let { left: e , top: s , right: n , bottom: o  } = this._pointLabelItems[t];
        return {
            left: e,
            top: s,
            right: n,
            bottom: o
        };
    }
    drawBackground() {
        let { backgroundColor: t , grid: { circular: e  }  } = this.options;
        if (t) {
            let s = this.ctx;
            s.save(), s.beginPath(), ko(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
        }
    }
    drawGrid() {
        let t = this.ctx, e = this.options, { angleLines: s , grid: n  } = e, o = this._pointLabels.length, a, r, l;
        if (e.pointLabels.display && Pc(this, o), n.display && this.ticks.forEach((c, h131)=>{
            if (h131 !== 0) {
                r = this.getDistanceFromCenterForValue(c.value);
                let d = n.setContext(this.getContext(h131 - 1));
                Cc(this, d, r, o);
            }
        }), s.display) {
            for(t.save(), a = o - 1; a >= 0; a--){
                let c = s.setContext(this.getPointLabelContext(a)), { color: h132 , lineWidth: d  } = c;
                !d || !h132 || (t.lineWidth = d, t.strokeStyle = h132, t.setLineDash(c.borderDash), t.lineDashOffset = c.borderDashOffset, r = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), l = this.getPointPosition(a, r), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(l.x, l.y), t.stroke());
            }
            t.restore();
        }
    }
    drawBorder() {}
    drawLabels() {
        let t = this.ctx, e = this.options, s = e.ticks;
        if (!s.display) return;
        let n = this.getIndexAngle(0), o, a;
        t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((r, l)=>{
            if (l === 0 && !e.reverse) return;
            let c = s.setContext(this.getContext(l)), h133 = j(c.font);
            if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
                t.font = h133.string, a = t.measureText(r.label).width, t.fillStyle = c.backdropColor;
                let d = X1(c.backdropPadding);
                t.fillRect(-a / 2 - d.left, -o - h133.size / 2 - d.top, a + d.width, h133.size + d.height);
            }
            yt(t, r.label, 0, -o, h133, {
                color: c.color
            });
        }), t.restore();
    }
    drawTitle() {}
};
jt.id = "radialLinear";
jt.defaults = {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
        display: !0,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0
    },
    grid: {
        circular: !1
    },
    startAngle: 0,
    ticks: {
        showLabelBackdrop: !0,
        callback: oi.formatters.numeric
    },
    pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: {
            size: 10
        },
        callback (i) {
            return i;
        },
        padding: 5,
        centerPointLabels: !1
    }
};
jt.defaultRoutes = {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color"
};
jt.descriptors = {
    angleLines: {
        _fallback: "grid"
    }
};
var ci = {
    millisecond: {
        common: !0,
        size: 1,
        steps: 1000
    },
    second: {
        common: !0,
        size: 1000,
        steps: 60
    },
    minute: {
        common: !0,
        size: 60000,
        steps: 60
    },
    hour: {
        common: !0,
        size: 3600000,
        steps: 24
    },
    day: {
        common: !0,
        size: 86400000,
        steps: 30
    },
    week: {
        common: !1,
        size: 604800000,
        steps: 4
    },
    month: {
        common: !0,
        size: 2628000000,
        steps: 12
    },
    quarter: {
        common: !1,
        size: 7884000000,
        steps: 4
    },
    year: {
        common: !0,
        size: 31540000000
    }
}, G2 = Object.keys(ci);
function Oc(i, t) {
    return i - t;
}
function Kn(i, t) {
    if (L(t)) return null;
    let e = i._adapter, { parser: s , round: n , isoWeekday: o  } = i._parseOpts, a = t;
    return typeof s == "function" && (a = s(a)), N(a) || (a = typeof s == "string" ? e.parse(a, s) : e.parse(a)), a === null ? null : (n && (a = n === "week" && (zt(o) || o === !0) ? e.startOf(a, "isoWeek", o) : e.startOf(a, n)), +a);
}
function qn(i, t, e, s) {
    let n = G2.length;
    for(let o = G2.indexOf(i); o < n - 1; ++o){
        let a = ci[G2[o]], r = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
        if (a.common && Math.ceil((e - t) / (r * a.size)) <= s) return G2[o];
    }
    return G2[n - 1];
}
function Ac(i, t, e, s, n) {
    for(let o = G2.length - 1; o >= G2.indexOf(e); o--){
        let a = G2[o];
        if (ci[a].common && i._adapter.diff(n, s, a) >= t - 1) return a;
    }
    return G2[e ? G2.indexOf(e) : 0];
}
function Lc(i) {
    for(let t = G2.indexOf(i) + 1, e = G2.length; t < e; ++t)if (ci[G2[t]].common) return G2[t];
}
function Gn(i, t, e) {
    if (!e) i[t] = !0;
    else if (e.length) {
        let { lo: s , hi: n  } = je1(e, t), o = e[s] >= t ? e[s] : e[n];
        i[o] = !0;
    }
}
function Tc(i, t, e, s) {
    let n = i._adapter, o = +n.startOf(t[0].value, s), a = t[t.length - 1].value, r, l;
    for(r = o; r <= a; r = +n.add(r, 1, s))l = e[r], l >= 0 && (t[l].major = !0);
    return t;
}
function Zn(i, t, e) {
    let s = [], n = {}, o = t.length, a, r;
    for(a = 0; a < o; ++a)r = t[a], n[r] = a, s.push({
        value: r,
        major: !1
    });
    return o === 0 || !e ? s : Tc(i, s, n, e);
}
var $t = class extends wt {
    constructor(t){
        super(t);
        this._cache = {
            data: [],
            labels: [],
            all: []
        }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
    }
    init(t, e) {
        let s = t.time || (t.time = {}), n = this._adapter = new rr._date(t.adapters.date);
        Ft(s.displayFormats, n.formats()), this._parseOpts = {
            parser: s.parser,
            round: s.round,
            isoWeekday: s.isoWeekday
        }, super.init(t), this._normalized = e.normalized;
    }
    parse(t, e) {
        return t === void 0 ? null : Kn(this, t);
    }
    beforeLayout() {
        super.beforeLayout(), this._cache = {
            data: [],
            labels: [],
            all: []
        };
    }
    determineDataLimits() {
        let t = this.options, e = this._adapter, s = t.time.unit || "day", { min: n , max: o , minDefined: a , maxDefined: r  } = this.getUserBounds();
        function l(c) {
            !a && !isNaN(c.min) && (n = Math.min(n, c.min)), !r && !isNaN(c.max) && (o = Math.max(o, c.max));
        }
        (!a || !r) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = N(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = N(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
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
        let o = this.min, a = this.max, r = Us(n, o, a);
        return this._unit = e.unit || (s.autoSkip ? qn(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Ac(this, r.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : Lc(this._unit), this.initOffsets(n), t.reverse && r.reverse(), Zn(this, r, this._majorUnit);
    }
    initOffsets(t) {
        let e = 0, s = 0, n, o;
        this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
        let a = t.length < 3 ? 0.5 : 0.25;
        e = $(e, 0, a), s = $(s, 0, a), this._offsets = {
            start: e,
            end: s,
            factor: 1 / (e + 1 + s)
        };
    }
    _generate() {
        let t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, a = o.unit || qn(o.minUnit, e, s, this._getLabelCapacity(e)), r = P1(o.stepSize, 1), l = a === "week" ? o.isoWeekday : !1, c = zt(l) || l === !0, h134 = {}, d = e, u, f;
        if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : a), t.diff(s, e, a) > 100000 * r) throw new Error(e + " and " + s + " are too far apart with stepSize of " + r + " " + a);
        let g53 = n.ticks.source === "data" && this.getDataTimestamps();
        for(u = d, f = 0; u < s; u = +t.add(u, r, a), f++)Gn(h134, u, g53);
        return (u === s || n.bounds === "ticks" || f === 1) && Gn(h134, u, g53), Object.keys(h134).sort((p, m)=>p - m
        ).map((p)=>+p
        );
    }
    getLabelForValue(t) {
        let e = this._adapter, s = this.options.time;
        return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime);
    }
    _tickFormatFunction(t, e, s, n) {
        let o = this.options, a = o.time.displayFormats, r = this._unit, l = this._majorUnit, c = r && a[r], h135 = l && a[l], d = s[e], u = l && h135 && d && d.major, f = this._adapter.format(t, n || (u ? h135 : c)), g54 = o.ticks.callback;
        return g54 ? B1(g54, [
            f,
            e,
            s
        ], this) : f;
    }
    generateTickLabels(t) {
        let e, s, n;
        for(e = 0, s = t.length; e < s; ++e)n = t[e], n.label = this._tickFormatFunction(n.value, e, t);
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
        let e = this.options.ticks, s = this.ctx.measureText(t).width, n = et(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), a = Math.sin(n), r = this._resolveTickFontOptions(0).size;
        return {
            w: s * o + r * a,
            h: s * a + r * o
        };
    }
    _getLabelCapacity(t) {
        let e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, Zn(this, [
            t
        ], this._majorUnit), n), a = this._getLabelSize(o), r = Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) - 1;
        return r > 0 ? r : 1;
    }
    getDataTimestamps() {
        let t = this._cache.data || [], e, s;
        if (t.length) return t;
        let n = this.getMatchingVisibleMetas();
        if (this._normalized && n.length) return this._cache.data = n[0].controller.getAllParsedValues(this);
        for(e = 0, s = n.length; e < s; ++e)t = t.concat(n[e].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(t);
    }
    getLabelTimestamps() {
        let t = this._cache.labels || [], e, s;
        if (t.length) return t;
        let n = this.getLabels();
        for(e = 0, s = n.length; e < s; ++e)t.push(Kn(this, n[e]));
        return this._cache.labels = this._normalized ? t : this.normalize(t);
    }
    normalize(t) {
        return Ri1(t.sort(Oc));
    }
};
$t.id = "time";
$t.defaults = {
    bounds: "data",
    adapters: {},
    time: {
        parser: !1,
        unit: !1,
        round: !1,
        isoWeekday: !1,
        minUnit: "millisecond",
        displayFormats: {}
    },
    ticks: {
        source: "auto",
        major: {
            enabled: !1
        }
    }
};
function Je(i, t, e) {
    let s = 0, n = i.length - 1, o, a, r, l;
    e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s , hi: n  } = rt(i, "pos", t)), { pos: o , time: r  } = i[s], { pos: a , time: l  } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s , hi: n  } = rt(i, "time", t)), { time: o , pos: r  } = i[s], { time: a , pos: l  } = i[n]);
    let c = a - o;
    return c ? r + (l - r) * (t - o) / c : r;
}
var hi = class extends $t {
    constructor(t){
        super(t);
        this._table = [], this._minPos = void 0, this._tableRange = void 0;
    }
    initOffsets() {
        let t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
        this._minPos = Je(e, this.min), this._tableRange = Je(e, this.max) - this._minPos, super.initOffsets(t);
    }
    buildLookupTable(t) {
        let { min: e , max: s  } = this, n = [], o = [], a, r, l, c, h136;
        for(a = 0, r = t.length; a < r; ++a)c = t[a], c >= e && c <= s && n.push(c);
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
        for(a = 0, r = n.length; a < r; ++a)h136 = n[a + 1], l = n[a - 1], c = n[a], Math.round((h136 + l) / 2) !== c && o.push({
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
        return (Je(this._table, t) - this._minPos) / this._tableRange;
    }
    getValueForPixel(t) {
        let e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
        return Je(this._table, s * this._tableRange + this._minPos, !0);
    }
};
hi.id = "timeseries";
hi.defaults = $t.defaults;
var Rc = Object.freeze({
    __proto__: null,
    CategoryScale: be1,
    LinearScale: ri,
    LogarithmicScale: li,
    RadialLinearScale: jt,
    TimeScale: $t,
    TimeSeriesScale: hi
}), zc = [
    ar,
    Ll,
    fc,
    Rc
];
var v = "label";
function h1(t, e) {
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
function A(t, e) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : v, c = [];
    t.datasets = e.map((n)=>{
        let s = t.datasets.find((d)=>d[a] === n[a]
        );
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
    return y(a, t.labels), A(a, t.datasets, e), a;
}
function T(t, e) {
    let { height: a = 150 , width: c = 300 , redraw: n = !1 , datasetIdKey: s , type: d , data: o , options: u , plugins: R4 = [] , fallbackContent: w , ...D4 } = t, f = De(null), r = De(), g55 = ()=>{
        !f.current || (r.current = new hs(f.current, {
            type: d,
            data: S(o, s),
            options: u,
            plugins: R4
        }), h1(e, r.current));
    }, m = ()=>{
        h1(e, null), r.current && (r.current.destroy(), r.current = null);
    };
    return we(()=>{
        !n && r.current && u && M(r.current, u);
    }, [
        n,
        u
    ]), we(()=>{
        !n && r.current && y(r.current.config.data, o.labels);
    }, [
        n,
        o.labels
    ]), we(()=>{
        !n && r.current && o.datasets && A(r.current.config.data, o.datasets, s);
    }, [
        n,
        o.datasets
    ]), we(()=>{
        !r.current || (n ? (m(), setTimeout(g55)) : r.current.update());
    }, [
        n,
        u,
        o.labels,
        o.datasets
    ]), we(()=>(g55(), ()=>m()
        )
    , []), Ue.createElement("canvas", Object.assign({
        ref: f,
        role: "img",
        height: a,
        width: c
    }, D4), w);
}
var k = ke(T);
function l73(t, e) {
    return hs.register(e), ke((a, c)=>Ue.createElement(k, Object.assign({}, a, {
            ref: c,
            type: t
        }))
    );
}
l73("line", Ht), l73("bar", _e2), l73("radar", Me2), l73("doughnut", At), l73("polarArea", ve2), l73("bubble", ye2), l73("pie", ni), l73("scatter", we2);
hs.register(...zc, be1, ri);
class Charts extends Ue.Component {
    constructor(props){
        super(props);
    }
    render() {
        const data = this.chartData(this.props.results);
        return Ue.createElement(k, {
            type: "line",
            data: data
        });
    }
    chartData(simulationStats) {
        return {
            labels: Object.keys(simulationStats),
            datasets: [
                {
                    label: "min",
                    backgroundColor: 'rgba(255, 0, 255, 0.5)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: Object.values(simulationStats).map((s)=>s.min
                    )
                },
                {
                    label: "mean",
                    backgroundColor: 'rgb(0, 255, 0)',
                    borderColor: 'rgb(0, 0, 0)',
                    data: Object.values(simulationStats).map((s)=>s.mean
                    )
                },
                {
                    label: "stddev_low",
                    backgroundColor: 'rgb(255, 255, 132)',
                    borderColor: 'rgb(255, 255, 132)',
                    data: Object.values(simulationStats).map((s)=>s.mean - s.stddev
                    )
                },
                {
                    label: "stddev_high",
                    backgroundColor: 'rgb(255, 255, 132)',
                    borderColor: 'rgb(255, 255, 132)',
                    data: Object.values(simulationStats).map((s)=>s.mean + s.stddev
                    )
                },
                {
                    label: "q0",
                    backgroundColor: 'rgb(0, 0, 0)',
                    borderColor: 'rgb(255, 0, 0)',
                    data: Object.values(simulationStats).map((s)=>s.quantiles[0]
                    )
                },
                {
                    label: "q1",
                    backgroundColor: 'rgb(0, 0, 0)',
                    borderColor: 'rgb(255, 0, 0)',
                    data: Object.values(simulationStats).map((s)=>s.quantiles[1]
                    )
                },
                {
                    label: "q2",
                    backgroundColor: 'rgb(0, 0, 0)',
                    borderColor: 'rgb(255, 0, 0)',
                    data: Object.values(simulationStats).map((s)=>s.quantiles[2]
                    )
                }, 
            ]
        };
    }
}
class App extends Ue.Component {
    constructor(props){
        super(props);
        const defaultState = {
            stocksPercent: 50,
            bondsPercent: 30,
            cashPercent: 20,
            startingBalance: 1000000,
            drawdownRate: 4,
            simulationRounds: 1000,
            onChange: undefined
        };
        const STORAGE_KEY = "savedState";
        const savedState = window.localStorage.getItem(STORAGE_KEY);
        if (savedState) {
            try {
                this.state = JSON.parse(savedState);
            } catch (error) {
                window.localStorage.removeItem(STORAGE_KEY);
                this.state = defaultState;
            }
        } else {
            this.state = defaultState;
        }
        this.handleAllocationChange = this.handleAllocationChange.bind(this);
        this.runSimulation = this.runSimulation.bind(this);
    }
    render() {
        let charts;
        if (this.state.simulationResults) charts = Ue.createElement(Charts, {
            results: this.state.simulationResults
        });
        else charts = Ue.createElement("span", null, "Run simulation to see results.");
        return Ue.createElement("div", null, Ue.createElement(Allocation, {
            stocksPercent: this.state.stocksPercent,
            bondsPercent: this.state.bondsPercent,
            cashPercent: this.state.cashPercent,
            startingBalance: this.state.startingBalance,
            drawdownRate: this.state.drawdownRate,
            simulationRounds: this.state.simulationRounds,
            onChange: this.handleAllocationChange
        }), Ue.createElement("button", {
            id: "run",
            onClick: this.runSimulation
        }, "Run Simulation"), charts);
    }
    runSimulation(event) {
        const inputs = {
            savings: this.state.startingBalance,
            withdrawalRate: this.state.drawdownRate / 100,
            bonds: this.state.bondsPercent / 100,
            stocks: this.state.stocksPercent / 100,
            cash: this.state.cashPercent / 100,
            simulationRounds: this.state.simulationRounds
        };
        runMonteCarlo(inputs, 4).then((results)=>{
            if (results) this.setState({
                simulationResults: results
            });
        });
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
        });
    }
    handleAllocationChange(event) {
        const value = parseFloat(event.target.value);
        const key = event.target.id;
        switch(key){
            case "startingBalance":
                this.setState({
                    [key]: value
                });
                break;
            case "drawdownRate":
                this.setState({
                    [key]: value
                });
                break;
            case "stocksPercent":
                this.setAllocationState(value, undefined, undefined);
                break;
            case "bondsPercent":
                this.setAllocationState(undefined, value, undefined);
                break;
            case "cashPercent":
                this.setAllocationState(undefined, undefined, value);
                break;
            case "simulationRounds":
                this.setState({
                    [key]: value
                });
                break;
            default:
                break;
        }
    }
}
Qf.render(Ue.createElement(App, null), document.getElementById('root'));
