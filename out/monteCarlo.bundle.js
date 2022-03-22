// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

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
function Cs(i, t) {
    let e;
    return function(...s) {
        return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
    };
}
var Ie = (i)=>i === "start" ? "left" : i === "end" ? "right" : "center"
, Y = (i, t, e)=>i === "start" ? t : i === "end" ? e : (t + e) / 2
, Ds = (i, t, e, s)=>i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t
;
function ot() {}
var Os = function() {
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
function O(i) {
    return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
var N = (i)=>(typeof i == "number" || i instanceof Number) && isFinite(+i)
;
function J(i, t) {
    return N(i) ? i : t;
}
function P(i, t) {
    return typeof i > "u" ? t : i;
}
var As = (i, t)=>typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : i / t
, _i = (i, t)=>typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i
;
function B(i, t, e) {
    if (i && typeof i.call == "function") return i.apply(e, t);
}
function R(i, t, e, s) {
    let n, o, a;
    if (I(i)) if (o = i.length, s) for(n = o - 1; n >= 0; n--)t.call(e, i[n], n);
    else for(n = 0; n < o; n++)t.call(e, i[n], n);
    else if (O(i)) for(a = Object.keys(i), o = a.length, n = 0; n < o; n++)t.call(e, i[a[n]], a[n]);
}
function ee(i, t) {
    let e, s, n, o;
    if (!i || !t || i.length !== t.length) return !1;
    for(e = 0, s = i.length; e < s; ++e)if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1;
    return !0;
}
function Re(i) {
    if (I(i)) return i.map(Re);
    if (O(i)) {
        let t = Object.create(null), e = Object.keys(i), s = e.length, n = 0;
        for(; n < s; ++n)t[e[n]] = Re(i[e[n]]);
        return t;
    }
    return i;
}
function Ls(i) {
    return [
        "__proto__",
        "prototype",
        "constructor"
    ].indexOf(i) === -1;
}
function So(i, t, e, s) {
    if (!Ls(i)) return;
    let n = t[i], o = e[i];
    O(n) && O(o) ? Rt(n, o, s) : t[i] = Re(o);
}
function Rt(i, t, e) {
    let s = I(t) ? t : [
        t
    ], n = s.length;
    if (!O(i)) return i;
    e = e || {};
    let o = e.merger || So;
    for(let a = 0; a < n; ++a){
        if (t = s[a], !O(t)) continue;
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
    if (!Ls(i)) return;
    let s = t[i], n = e[i];
    O(s) && O(n) ? Ft(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Re(n));
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
var Z = (i)=>typeof i < "u"
, ct = (i)=>typeof i == "function"
, yi = (i, t)=>{
    if (i.size !== t.size) return !1;
    for (let e of i)if (!t.has(e)) return !1;
    return !0;
};
function Ts(i) {
    return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
var V = Math.PI, F = 2 * V, Oo = F + V, Ee = Number.POSITIVE_INFINITY, Ao = V / 180, W = V / 2, qt = V / 4, gs = V * 2 / 3, Q = Math.log10, st = Math.sign;
function vi(i) {
    let t = Math.round(i);
    i = It(i, t, i / 1000) ? t : i;
    let e = Math.pow(10, Math.floor(Q(i))), s = i / e;
    return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function Rs(i) {
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
function Es(i, t) {
    let e = Math.round(i);
    return e - t <= i && e + t >= i;
}
function Mi(i, t, e) {
    let s, n, o;
    for(s = 0, n = i.length; s < n; s++)o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function et(i) {
    return i * (V / 180);
}
function Ve(i) {
    return i * (180 / V);
}
function wi(i) {
    if (!N(i)) return;
    let t = 1, e = 0;
    for(; Math.round(i * t) / t !== i;)t *= 10, e++;
    return e;
}
function ki(i, t) {
    let e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s), o = Math.atan2(s, e);
    return o < -0.5 * V && (o += F), {
        angle: o,
        distance: n
    };
}
function Fe(i, t) {
    return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function Lo(i, t) {
    return (i - t + Oo) % F - V;
}
function q(i) {
    return (i % F + F) % F;
}
function Bt(i, t, e, s) {
    let n = q(i), o = q(t), a = q(e), r = q(o - n), l = q(a - n), c = q(n - o), h = q(n - a);
    return n === o || n === a || s && o === a || r > l && c < h;
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
var De = (i)=>i === 0 || i === 1
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
    easeInSine: (i)=>-Math.cos(i * W) + 1
    ,
    easeOutSine: (i)=>Math.sin(i * W)
    ,
    easeInOutSine: (i)=>-0.5 * (Math.cos(V * i) - 1)
    ,
    easeInExpo: (i)=>i === 0 ? 0 : Math.pow(2, 10 * (i - 1))
    ,
    easeOutExpo: (i)=>i === 1 ? 1 : -Math.pow(2, -10 * i) + 1
    ,
    easeInOutExpo: (i)=>De(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2)
    ,
    easeInCirc: (i)=>i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1)
    ,
    easeOutCirc: (i)=>Math.sqrt(1 - (i -= 1) * i)
    ,
    easeInOutCirc: (i)=>(i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1)
    ,
    easeInElastic: (i)=>De(i) ? i : ps(i, 0.075, 0.3)
    ,
    easeOutElastic: (i)=>De(i) ? i : ms(i, 0.075, 0.3)
    ,
    easeInOutElastic (i) {
        return De(i) ? i : i < 0.5 ? 0.5 * ps(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * ms(i * 2 - 1, 0.1125, 0.45);
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
, Oe = (i)=>(i & 240) >> 4 === (i & 15)
;
function Eo(i) {
    return Oe(i.r) && Oe(i.g) && Oe(i.b) && Oe(i.a);
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
function ie(i) {
    return i + 0.5 | 0;
}
var We = (i, t, e)=>Math.max(Math.min(i, e), t)
;
function Gt(i) {
    return We(ie(i * 2.55), 0, 255);
}
function Jt(i) {
    return We(ie(i * 255), 0, 255);
}
function Si(i) {
    return We(ie(i / 2.55) / 100, 0, 1);
}
function bs(i) {
    return We(ie(i * 100), 0, 100);
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
function zs(i, t, e) {
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
    let s = zs(i, 1, 0.5), n;
    for(t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)s[n] *= 1 - t - e, s[n] += t;
    return s;
}
function Pi(i) {
    let e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), a = Math.min(e, s, n), r = (o + a) / 2, l, c, h;
    return o !== a && (h = o - a, c = r > 0.5 ? h / (2 - o - a) : h / (o + a), l = o === e ? (s - n) / h + (s < n ? 6 : 0) : o === s ? (n - e) / h + 2 : (e - s) / h + 4, l = l * 60 + 0.5), [
        l | 0,
        c || 0,
        r
    ];
}
function Ci(i, t, e, s) {
    return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(Jt);
}
function Di(i, t, e) {
    return Ci(zs, i, t, e);
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
    return t[1] === "hwb" ? s = jo(n, o, a) : t[1] === "hsv" ? s = $o(n, o, a) : s = Di(n, o, a), {
        r: s[0],
        g: s[1],
        b: s[2],
        a: e
    };
}
function Xo(i, t) {
    var e = Pi(i);
    e[0] = Is(e[0] + t), e = Di(e), i.r = e[0], i.g = e[1], i.b = e[2];
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
}, _s = {
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
    let i = {}, t = Object.keys(_s), e = Object.keys(xs), s, n, o, a, r;
    for(s = 0; s < t.length; s++){
        for(a = r = t[s], n = 0; n < e.length; n++)o = e[n], r = r.replace(o, xs[o]);
        o = parseInt(_s[a], 16), i[r] = [
            o >> 16 & 255,
            o >> 8 & 255,
            o & 255
        ];
    }
    return i;
}
var Ae;
function qo(i) {
    Ae || (Ae = Ko(), Ae.transparent = [
        0,
        0,
        0,
        0
    ]);
    let t = Ae[i.toLowerCase()];
    return t && {
        r: t[0],
        g: t[1],
        b: t[2],
        a: t.length === 4 ? t[3] : 255
    };
}
function Le(i, t, e) {
    if (i) {
        let s = Pi(i);
        s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = Di(s), i.r = s[0], i.g = s[1], i.b = s[2];
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
            let n = s.rgb, o = t.rgb, a, r = e === a ? 0.5 : e, l = 2 * r - 1, c = n.a - o.a, h = ((l * c === -1 ? l : (l + c) / (1 + l * c)) + 1) / 2;
            a = 1 - h, n.r = 255 & h * n.r + a * o.r + 0.5, n.g = 255 & h * n.g + a * o.g + 0.5, n.b = 255 & h * n.b + a * o.b + 0.5, n.a = r * n.a + (1 - r) * o.a, s.rgb = n;
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
        let t = this._rgb, e = ie(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
        return Le(this._rgb, 2, t), this;
    }
    darken(t) {
        return Le(this._rgb, 2, -t), this;
    }
    saturate(t) {
        return Le(this._rgb, 1, t), this;
    }
    desaturate(t) {
        return Le(this._rgb, 1, -t), this;
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
var xt = Object.create(null), Ne = Object.create(null);
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
        return gi(Ne, t, e);
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
                    return O(l) ? Object.assign({}, c, l) : P(l, c);
                },
                set (l) {
                    this[r] = l;
                }
            }
        });
    }
}, D = new Ns({
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
function te(i, t, e, s, n) {
    let o = t[n];
    return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function Hs(i, t, e, s) {
    s = s || {};
    let n = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
    s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
    let a = 0, r = e.length, l, c, h, d, u;
    for(l = 0; l < r; l++)if (d = e[l], d != null && I(d) !== !0) a = te(i, n, o, a, d);
    else if (I(d)) for(c = 0, h = d.length; c < h; c++)u = d[c], u != null && !I(u) && (a = te(i, n, o, a, u));
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
    let n, o, a, r, l, c = t.pointStyle, h = t.rotation, d = t.radius, u = (h || 0) * Ao;
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
                l = d * 0.516, r = d - l, o = Math.cos(u + qt) * r, a = Math.sin(u + qt) * r, i.arc(e - o, s - a, l, u - V, u - W), i.arc(e + a, s - o, l, u - W, u), i.arc(e + o, s + a, l, u, u + W), i.arc(e - a, s + o, l, u + W, u + V), i.closePath();
                break;
            case "rect":
                if (!h) {
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
function ne(i, t) {
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
        let o = i.measureText(s), a = t - o.actualBoundingBoxLeft, r = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = n.strikethrough ? (l + c) / 2 : c;
        i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(a, h), i.lineTo(r, h), i.stroke();
    }
}
function ae(i, t) {
    let { x: e , y: s , w: n , h: o , radius: a  } = t;
    i.arc(e + a.topLeft, s + a.topLeft, a.topLeft, -W, V, !0), i.lineTo(e, s + o - a.bottomLeft), i.arc(e + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, V, W, !0), i.lineTo(e + n - a.bottomRight, s + o), i.arc(e + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, W, 0, !0), i.lineTo(e + n, s + a.topRight), i.arc(e + n - a.topRight, s + a.topRight, a.topRight, 0, -W, !0), i.lineTo(e + a.topLeft, s);
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
    let e = {}, s = O(t), n = s ? Object.keys(t) : t, o = O(i) ? s ? (a)=>P(i[a], i[t[a]])
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
function X(i) {
    let t = Li(i);
    return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function j(i, t) {
    i = i || {}, t = t || D.font;
    let e = P(i.size, t.size);
    typeof e == "string" && (e = parseInt(e, 10));
    let s = P(i.style, t.style);
    s && !("" + s).match(ea) && (console.warn('Invalid font style specified: "' + s + '"'), s = "");
    let n = {
        family: P(i.family, t.family),
        lineHeight: ia(P(i.lineHeight, t.lineHeight), e),
        size: e,
        style: s,
        weight: P(i.weight, t.weight),
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
function je(i, t, e) {
    e = e || ((a)=>i[a] < t
    );
    let s = i.length - 1, n = 0, o;
    for(; s - n > 1;)o = n + s >> 1, e(o) ? n = o : s = o;
    return {
        lo: n,
        hi: s
    };
}
var rt = (i, t, e)=>je(i, e, (s)=>i[s][t] < e
    )
, Xs = (i, t, e)=>je(i, e, (s)=>i[s][t] >= e
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
function Ri(i) {
    let t = new Set, e, s;
    for(e = 0, s = i.length; e < s; ++e)t.add(i[e]);
    return t.size === s ? i : Array.from(t);
}
function $e(i, t = [
    ""
], e = i, s, n = ()=>i[0]
) {
    Z(s) || (s = Js("_fallback", i));
    let o = {
        [Symbol.toStringTag]: "Object",
        _cacheable: !0,
        _scopes: i,
        _rootScopes: e,
        _fallback: s,
        _getTarget: n,
        override: (a)=>$e([
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
            return Ms(a).includes(r);
        },
        ownKeys (a) {
            return Ms(a);
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
, Fi = (i, t)=>O(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object)
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
    if (Z(o.index) && s(i)) t = t[o.index % t.length];
    else if (O(t[0])) {
        let l = t, c = n._scopes.filter((h)=>h !== l
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
            if (Z(r) && r !== e && r !== s) return r;
        } else if (a === !1 && Z(s) && e !== s) return null;
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
    return l === null || Z(o) && o !== e && (l = vs(r, a, o, l, s), l === null) ? !1 : $e(Array.from(r), [
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
    return I(n) && O(e) ? e : n;
}
function da(i, t, e, s) {
    let n;
    for (let o of t)if (n = Js(na(o, i), e), Z(n)) return Fi(i, n) ? zi(e, s, i, n) : n;
}
function Js(i, t) {
    for (let e of t){
        if (!e) continue;
        let s = e[i];
        if (Z(s)) return s;
    }
}
function Ms(i) {
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
    let n = i.skip ? t : i, o = t, a = e.skip ? t : e, r = Fe(o, n), l = Fe(a, o), c = r / (r + l), h = l / (r + l);
    c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
    let d = s * c, u = s * h;
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
    for(let h = 0; h < s - 1; ++h)if (l = c, c = Et(i, h + 1), !(!l || !c)) {
        if (It(t[h], 0, fa)) {
            e[h] = e[h + 1] = 0;
            continue;
        }
        n = e[h] / t[h], o = e[h + 1] / t[h], r = Math.pow(n, 2) + Math.pow(o, 2), !(r <= 9) && (a = 3 / Math.sqrt(r), e[h] = n * a * t[h], e[h + 1] = o * a * t[h]);
    }
}
function ma(i, t, e = "x") {
    let s = Qs(e), n = i.length, o, a, r, l = Et(i, 0);
    for(let c = 0; c < n; ++c){
        if (a = r, r = l, l = Et(i, c + 1), !r) continue;
        let h = r[e], d = r[s];
        a && (o = (h - a[e]) / 3, r[`cp1${e}`] = h - o, r[`cp1${s}`] = d - o * t[c]), l && (o = (l[e] - h) / 3, r[`cp2${e}`] = h + o, r[`cp2${s}`] = d + o * t[c]);
    }
}
function ba(i, t = "x") {
    let e = Qs(t), s = i.length, n = Array(s).fill(0), o = Array(s), a, r, l, c = Et(i, 0);
    for(a = 0; a < s; ++a)if (r = l, l = c, c = Et(i, a + 1), !!l) {
        if (c) {
            let h = c[t] - l[t];
            n[a] = h !== 0 ? (c[e] - l[e]) / h : 0;
        }
        o[a] = r ? c ? st(n[a - 1]) !== st(n[a]) ? 0 : (n[a - 1] + n[a]) / 2 : n[a - 1] : n[a];
    }
    pa(i, n, o), ma(i, o, t);
}
function Te(i, t, e) {
    return Math.max(Math.min(i, e), t);
}
function xa(i, t) {
    let e, s, n, o, a, r = mt(i[0], t);
    for(e = 0, s = i.length; e < s; ++e)a = o, o = r, r = e < s - 1 && mt(i[e + 1], t), o && (n = i[e], a && (n.cp1x = Te(n.cp1x, t.left, t.right), n.cp1y = Te(n.cp1y, t.top, t.bottom)), r && (n.cp2x = Te(n.cp2x, t.left, t.right), n.cp2y = Te(n.cp2y, t.top, t.bottom)));
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
        let h = t.getBoundingClientRect();
        l = n.clientX - h.left, c = n.clientY - h.top, r = !0;
    }
    return {
        x: l,
        y: c,
        box: r
    };
}
function Bi(i, t) {
    let { canvas: e , currentDevicePixelRatio: s  } = t, n = Xe(e), o = n.boxSizing === "border-box", a = St(n, "padding"), r = St(n, "border", "width"), { x: l , y: c , box: h  } = Ma(i, e), d = a.left + (h && r.left), u = a.top + (h && r.top), { width: f , height: g  } = t;
    return o && (f -= a.width + r.width, g -= a.height + r.height), {
        x: Math.round((l - d) / f * e.width / s),
        y: Math.round((c - u) / g * e.height / s)
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
        maxWidth: s || Ee,
        maxHeight: n || Ee
    };
}
var pi = (i)=>Math.round(i * 10) / 10
;
function en(i, t, e, s) {
    let n = Xe(i), o = St(n, "margin"), a = ze(n.maxWidth, i, "clientWidth") || Ee, r = ze(n.maxHeight, i, "clientHeight") || Ee, l = wa(i, t, e), { width: c , height: h  } = l;
    if (n.boxSizing === "content-box") {
        let d = St(n, "border", "width"), u = St(n, "padding");
        c -= u.width + d.width, h -= u.height + d.height;
    }
    return c = Math.max(0, c - o.width), h = Math.max(0, s ? Math.floor(c / s) : h - o.height), c = pi(Math.min(c, a, l.maxWidth)), h = pi(Math.min(h, r, l.maxHeight)), c && !h && (h = pi(c / 2)), {
        width: c,
        height: h
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
    }, a = pt(i, n, e), r = pt(n, o, e), l = pt(o, t, e), c = pt(a, r, e), h = pt(r, l, e);
    return pt(c, h, e);
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
    let { property: s , start: n , end: o  } = e, { between: a , normalize: r  } = an(s), l = t.length, { start: c , end: h , loop: d  } = i, u, f;
    if (d) {
        for(c += l, h += l, u = 0, f = l; u < f && a(r(t[c % l][s]), n, o); ++u)c--, h--;
        c %= l, h %= l;
    }
    return h < c && (h += l), {
        start: c,
        end: h,
        loop: d,
        style: i.style
    };
}
function ji(i, t, e) {
    if (!e) return [
        i
    ];
    let { property: s , start: n , end: o  } = e, a = t.length, { compare: r , between: l , normalize: c  } = an(s), { start: h , end: d , loop: u , style: f  } = Ca(i, t, e), g = [], p = !1, m = null, b, x, v, y = ()=>l(n, v, b) && r(n, v) !== 0
    , _ = ()=>r(o, b) === 0 || l(o, v, b)
    , w = ()=>p || y()
    , M = ()=>!p || _()
    ;
    for(let S = h, k = h; S <= d; ++S)x = t[S % a], !x.skip && (b = c(x[s]), b !== v && (p = l(b, n, o), m === null && w() && (m = r(b, n) === 0 ? S : k), m !== null && M() && (g.push(ks({
        start: m,
        end: S,
        loop: u,
        count: a,
        style: f
    })), m = null), k = S, v = b));
    return m !== null && g.push(ks({
        start: m,
        end: d,
        loop: u,
        count: a,
        style: f
    })), g;
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
    let n = i._chart.getContext(), o = Ps(i.options), { _datasetIndex: a , options: { spanGaps: r  }  } = i, l = e.length, c = [], h = o, d = t[0].start, u = d;
    function f(g, p, m, b) {
        let x = r ? -1 : 1;
        if (g !== p) {
            for(g += l; e[g % l].skip;)g -= x;
            for(; e[p % l].skip;)p += x;
            g % l !== p % l && (c.push({
                start: g % l,
                end: p % l,
                loop: m,
                style: b
            }), h = b, d = p % l);
        }
    }
    for (let g1 of t){
        d = r ? d : g1.start;
        let p = e[d % l], m;
        for(u = d + 1; u <= g1.end; u++){
            let b = e[u % l];
            m = Ps(s.setContext(ht(n, {
                type: "segment",
                p0: p,
                p1: b,
                p0DataIndex: (u - 1) % l,
                p1DataIndex: u % l,
                datasetIndex: a
            }))), La(m, h) && f(d, u - 1, g1.loop, h), p = b, h = m;
        }
        d < u - 1 && f(d, u - 1, g1.loop, h);
    }
    return c;
}
function Ps(i) {
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
D.set("animation", {
    delay: void 0,
    duration: 1000,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
});
var Fa = Object.keys(D.animation);
D.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (i)=>i !== "onProgress" && i !== "onComplete" && i !== "fn"
});
D.set("animations", {
    colors: {
        type: "color",
        properties: Ea
    },
    numbers: {
        type: "number",
        properties: Ra
    }
});
D.describe("animations", {
    _fallback: "animation"
});
D.set("transitions", {
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
        if (!O(t)) return;
        let e = this._properties;
        Object.getOwnPropertyNames(t).forEach((s)=>{
            let n = t[s];
            if (!O(n)) return;
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
            let h = e[c], d = o[c], u = s.get(c);
            if (d) if (u && d.active()) {
                d.update(u, h, r);
                continue;
            } else d.cancel();
            if (!u || !u.duration) {
                t[c] = h;
                continue;
            }
            o[c] = d = new Qn(u, t, c, h), n.push(d);
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
    return O(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
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
    let { chart: e , _cachedMeta: s  } = i, n = e._stacks || (e._stacks = {}), { iScale: o , vScale: a , index: r  } = s, l = o.axis, c = a.axis, h = Na(o, a, s), d = t.length, u;
    for(let f = 0; f < d; ++f){
        let g = t[f], { [l]: p , [c]: m  } = g, b = g._stacks || (g._stacks = {});
        u = b[c] = ja(n, h, p), u[r] = m, u._top = un(u, a, !0, s.type), u._bottom = un(u, a, !1, s.type);
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
function re(i, t) {
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
        this.index !== t && re(this._cachedMeta), this.index = t;
    }
    linkScales() {
        let t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (d, u, f, g)=>d === "x" ? u : d === "r" ? g : f
        , o = e.xAxisID = P(s.xAxisID, Yi(t, "x")), a = e.yAxisID = P(s.yAxisID, Yi(t, "y")), r = e.rAxisID = P(s.rAxisID, Yi(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, a, r), h = e.vAxisID = n(l, a, o, r);
        e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(a), e.rScale = this.getScaleForId(r), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h);
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
        this._data && Ti(this._data, this), t._stacked && re(t);
    }
    _dataCheck() {
        let t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
        if (O(e)) this._data = Wa(e);
        else if (s !== e) {
            if (s) {
                Ti(s, this);
                let n = this._cachedMeta;
                re(n), n._parsed = [];
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
        e._stacked = dn(e.vScale, e), e.stack !== s.stack && (n = !0, re(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && fn(this, e._parsed);
    }
    configure() {
        let t = this.chart.config, e = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), e, !0);
        this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
    }
    parse(t, e) {
        let { _cachedMeta: s , _data: n  } = this, { iScale: o , _stacked: a  } = s, r = o.axis, l = t === 0 && e === n.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], h, d, u;
        if (this._parsing === !1) s._parsed = n, s._sorted = !0, u = n;
        else {
            I(n[t]) ? u = this.parseArrayData(s, n, t, e) : O(n[t]) ? u = this.parseObjectData(s, n, t, e) : u = this.parsePrimitiveData(s, n, t, e);
            let f = ()=>d[r] === null || c && d[r] < c[r]
            ;
            for(h = 0; h < e; ++h)s._parsed[h + t] = d = u[h], l && (f() && (l = !1), c = d);
            s._sorted = l;
        }
        a && fn(this, u);
    }
    parsePrimitiveData(t, e, s, n) {
        let { iScale: o , vScale: a  } = t, r = o.axis, l = a.axis, c = o.getLabels(), h = o === a, d = new Array(n), u, f, g;
        for(u = 0, f = n; u < f; ++u)g = u + s, d[u] = {
            [r]: h || o.parse(c[g], g),
            [l]: a.parse(e[g], g)
        };
        return d;
    }
    parseArrayData(t, e, s, n) {
        let { xScale: o , yScale: a  } = t, r = new Array(n), l, c, h, d;
        for(l = 0, c = n; l < c; ++l)h = l + s, d = e[h], r[l] = {
            x: o.parse(d[0], h),
            y: a.parse(d[1], h)
        };
        return r;
    }
    parseObjectData(t, e, s, n) {
        let { xScale: o , yScale: a  } = t, { xAxisKey: r = "x" , yAxisKey: l = "y"  } = this._parsing, c = new Array(n), h, d, u, f;
        for(h = 0, d = n; h < d; ++h)u = h + s, f = e[u], c[h] = {
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
        }, { min: h , max: d  } = Ha(r), u, f;
        function g() {
            f = n[u];
            let p = f[r.axis];
            return !N(f[t.axis]) || h > p || d < p;
        }
        for(u = 0; u < a && !(!g() && (this.updateRangeFromParsed(c, t, f, l), o)); ++u);
        if (o) {
            for(u = a - 1; u >= 0; --u)if (!g()) {
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
        this.update(t || "default"), e._clip = Va(P(this.options.clip, Ba(e.xScale, e.yScale, this.getMaxOverflow())));
    }
    update(t) {}
    draw() {
        let t = this._ctx, e = this.chart, s = this._cachedMeta, n = s.data || [], o = e.chartArea, a = [], r = this._drawStart || 0, l = this._drawCount || n.length - r, c = this.options.drawActiveElementsOnTop, h;
        for(s.dataset && s.dataset.draw(t, o, r, l), h = r; h < r + l; ++h){
            let d = n[h];
            d.hidden || (d.active && c ? a.push(d) : d.draw(t, o));
        }
        for(h = 0; h < a.length; ++h)a[h].draw(t, o);
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
        let n = e === "active", o = this._cachedDataOpts, a = t + "-" + e, r = o[a], l = this.enableOptionSharing && Z(s);
        if (r) return gn(r, l);
        let c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), d = n ? [
            `${t}Hover`,
            "hover",
            t,
            ""
        ] : [
            t,
            ""
        ], u = c.getOptionScopes(this.getDataset(), h), f = Object.keys(D.elements[t]), g = ()=>this.getContext(s, n)
        , p = c.resolveNamedOptions(u, f, g, d);
        return p.$shared && (p.$shared = l, o[a] = Object.freeze(gn(p, l))), p;
    }
    _resolveAnimations(t, e, s) {
        let n = this.chart, o = this._cachedDataOpts, a = `animation-${e}`, r = o[a];
        if (r) return r;
        let l;
        if (n.options.animation !== !1) {
            let h = this.chart.config, d = h.datasetAnimationScopeKeys(this._type, e), u = h.getOptionScopes(this.getDataset(), d);
            l = h.createResolver(u, this.getContext(t, s, e));
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
            s._stacked && re(s, n);
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
        i._cache.$bar = Ri(s.sort((n, o)=>n - o
        ));
    }
    return i._cache.$bar;
}
function Ka(i) {
    let t = i.iScale, e = Ua(t, i.type), s = t._length, n, o, a, r, l = ()=>{
        a === 32767 || a === -32768 || (Z(r) && (s = Math.min(s, Math.abs(a - r) || s)), r = a);
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
    let n = i.iScale, o = i.vScale, a = n.getLabels(), r = n === o, l = [], c, h, d, u;
    for(c = e, h = e + s; c < h; ++c)u = t[c], d = {}, d[n.axis] = r || n.parse(a[c], c), l.push(eo(u, d, o, c));
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
    let { start: a , end: r , reverse: l , top: c , bottom: h  } = Qa(i);
    n === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = h : (o[mn(h, a, r, l)] = !0, n = c)), o[mn(n, a, r, l)] = !0, i.borderSkipped = o;
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
var _e = class extends nt {
    parsePrimitiveData(t, e, s, n) {
        return pn(t, e, s, n);
    }
    parseArrayData(t, e, s, n) {
        return pn(t, e, s, n);
    }
    parseObjectData(t, e, s, n) {
        let { iScale: o , vScale: a  } = t, { xAxisKey: r = "x" , yAxisKey: l = "y"  } = this._parsing, c = o.axis === "x" ? r : l, h = a.axis === "x" ? r : l, d = [], u, f, g, p;
        for(u = s, f = s + n; u < f; ++u)p = e[u], g = {}, g[o.axis] = o.parse(bt(p, c), u), d.push(eo(bt(p, h), g, a, u));
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
        let o = n === "reset", { index: a , _cachedMeta: { vScale: r  }  } = this, l = r.getBasePixel(), c = r.isHorizontal(), h = this._getRuler(), d = this.resolveDataElementOptions(e, n), u = this.getSharedOptions(d), f = this.includeOptions(n, u);
        this.updateSharedOptions(u, n, d);
        for(let g = e; g < e + s; g++){
            let p = this.getParsed(g), m = o || L(p[r.axis]) ? {
                base: l,
                head: l
            } : this._calculateBarValuePixels(g), b = this._calculateBarIndexPixels(g, h), x = (p._stacks || {})[r.axis], v = {
                horizontal: c,
                base: m.base,
                enableBorderRadius: !x || Ui(p._custom) || a === x._top || a === x._bottom,
                x: c ? m.head : b.center,
                y: c ? b.center : m.head,
                height: c ? b.size : Math.abs(m.size),
                width: c ? Math.abs(m.size) : b.size
            };
            f && (v.options = u || this.resolveDataElementOptions(g, t[g].active ? "active" : n));
            let y = v.options || t[g].options;
            tr(v, y, x, a), ir(v, y, h.ratio), this.updateElement(t[g], g, v, n);
        }
    }
    _getStacks(t, e) {
        let n = this._cachedMeta.iScale, o = n.getMatchingVisibleMetas(this._type), a = n.options.stacked, r = o.length, l = [], c, h;
        for(c = 0; c < r; ++c)if (h = o[c], !!h.controller.options.grouped) {
            if (typeof e < "u") {
                let d = h.controller.getParsed(e)[h.controller._cachedMeta.vScale.axis];
                if (L(d) || isNaN(d)) continue;
            }
            if ((a === !1 || l.indexOf(h.stack) === -1 || a === void 0 && h.stack === void 0) && l.push(h.stack), h.index === t) break;
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
        let { _cachedMeta: { vScale: e , _stacked: s  } , options: { base: n , minBarLength: o  }  } = this, a = n || 0, r = this.getParsed(t), l = r._custom, c = Ui(l), h = r[e.axis], d = 0, u = s ? this.applyStack(e, r, s) : h, f, g;
        u !== h && (d = u - h, u = h), c && (h = l.barStart, u = l.barEnd - l.barStart, h !== 0 && st(h) !== st(l.barEnd) && (d = 0), d += h);
        let p = !L(n) && !c ? n : d, m = e.getPixelForValue(p);
        if (this.chart.getDataVisibility(t) ? f = e.getPixelForValue(d + u) : f = m, g = f - m, Math.abs(g) < o && (g = Ja(g, e, a) * o, h === a && (m -= g / 2), f = m + g), m === e.getPixelForValue(a)) {
            let b = st(g) * e.getLineWidthForValue(a) / 2;
            m += b, g -= b;
        }
        return {
            size: g,
            base: m,
            head: f,
            center: f + g / 2
        };
    }
    _calculateBarIndexPixels(t, e) {
        let s = e.scale, n = this.options, o = n.skipNull, a = P(n.maxBarThickness, 1 / 0), r, l;
        if (e.grouped) {
            let c = o ? this._getStackCount(t) : e.stackCount, h = n.barThickness === "flex" ? Ga(t, e, n, c) : qa(t, e, n, c), d = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
            r = h.start + h.chunk * d + h.chunk / 2, l = Math.min(a, h.chunk * h.ratio);
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
_e.id = "bar";
_e.defaults = {
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
_e.overrides = {
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
var ye = class extends nt {
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
            o[a]._custom = P(r[2], this.resolveDataElementOptions(a + s).radius);
        }
        return o;
    }
    parseObjectData(t, e, s, n) {
        let o = super.parseObjectData(t, e, s, n);
        for(let a = 0; a < o.length; a++){
            let r = e[s + a];
            o[a]._custom = P(r && r.r && +r.r, this.resolveDataElementOptions(a + s).radius);
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
        let o = n === "reset", { iScale: a , vScale: r  } = this._cachedMeta, l = this.resolveDataElementOptions(e, n), c = this.getSharedOptions(l), h = this.includeOptions(n, c), d = a.axis, u = r.axis;
        for(let f = e; f < e + s; f++){
            let g = t[f], p = !o && this.getParsed(f), m = {}, b = m[d] = o ? a.getPixelForDecimal(0.5) : a.getPixelForValue(p[d]), x = m[u] = o ? r.getBasePixel() : r.getPixelForValue(p[u]);
            m.skip = isNaN(b) || isNaN(x), h && (m.options = this.resolveDataElementOptions(f, g.active ? "active" : n), o && (m.options.radius = 0)), this.updateElement(g, f, m, n);
        }
        this.updateSharedOptions(c, n, l);
    }
    resolveDataElementOptions(t, e) {
        let s = this.getParsed(t), n = super.resolveDataElementOptions(t, e);
        n.$shared && (n = Object.assign({}, n, {
            $shared: !1
        }));
        let o = n.radius;
        return e !== "active" && (n.radius = 0), n.radius += P(s && s._custom, o), n;
    }
};
ye.id = "bubble";
ye.defaults = {
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
ye.overrides = {
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
        let r = i, l = r + t, c = Math.cos(r), h = Math.sin(r), d = Math.cos(l), u = Math.sin(l), f = (v, y, _)=>Bt(v, r, l, !0) ? 1 : Math.max(y, y * e, _, _ * e)
        , g = (v, y, _)=>Bt(v, r, l, !0) ? -1 : Math.min(y, y * e, _, _ * e)
        , p = f(0, c, d), m = f(W, h, u), b = g(V, c, d), x = g(V + W, h, u);
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
            if (O(s[t])) {
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
        let e = this.chart, { chartArea: s  } = e, n = this._cachedMeta, o = n.data, a = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, r = Math.max((Math.min(s.width, s.height) - a) / 2, 0), l = Math.min(As(this.options.cutout, r), 1), c = this._getRingWeight(this.index), { circumference: h , rotation: d  } = this._getRotationExtents(), { ratioX: u , ratioY: f , offsetX: g , offsetY: p  } = sr(d, h, l), m = (s.width - a) / u, b = (s.height - a) / f, x = Math.max(Math.min(m, b) / 2, 0), v = _i(this.options.radius, x), y = Math.max(v * l, 0), _ = (v - y) / this._getVisibleDatasetWeightTotal();
        this.offsetX = g * v, this.offsetY = p * v, n.total = this.calculateTotal(), this.outerRadius = v - _ * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - _ * c, 0), this.updateElements(o, 0, o.length, t);
    }
    _circumference(t, e) {
        let s = this.options, n = this._cachedMeta, o = this._getCircumference();
        return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / F);
    }
    updateElements(t, e, s, n) {
        let o = n === "reset", a = this.chart, r = a.chartArea, c = a.options.animation, h = (r.left + r.right) / 2, d = (r.top + r.bottom) / 2, u = o && c.animateScale, f = u ? 0 : this.innerRadius, g = u ? 0 : this.outerRadius, p = this.resolveDataElementOptions(e, n), m = this.getSharedOptions(p), b = this.includeOptions(n, m), x = this._getRotation(), v;
        for(v = 0; v < e; ++v)x += this._circumference(v, o);
        for(v = e; v < e + s; ++v){
            let y = this._circumference(v, o), _ = t[v], w = {
                x: h + this.offsetX,
                y: d + this.offsetY,
                startAngle: x,
                endAngle: x + y,
                circumference: y,
                outerRadius: g,
                innerRadius: f
            };
            b && (w.options = m || this.resolveDataElementOptions(v, _.active ? "active" : n)), x += y, this.updateElement(_, v, w, n);
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
        return Math.max(P(this.chart.data.datasets[t].weight, 1), 0);
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
        let o = n === "reset", { iScale: a , vScale: r , _stacked: l , _dataset: c  } = this._cachedMeta, h = this.resolveDataElementOptions(e, n), d = this.getSharedOptions(h), u = this.includeOptions(n, d), f = a.axis, g = r.axis, { spanGaps: p , segment: m  } = this.options, b = zt(p) ? p : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || o || n === "none", v = e > 0 && this.getParsed(e - 1);
        for(let y = e; y < e + s; ++y){
            let _ = t[y], w = this.getParsed(y), M = x ? _ : {}, S = L(w[g]), k = M[f] = a.getPixelForValue(w[f], y), E = M[g] = o || S ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, w, l) : w[g], y);
            M.skip = isNaN(k) || isNaN(E) || S, M.stop = y > 0 && w[f] - v[f] > b, m && (M.parsed = w, M.raw = c.data[y]), u && (M.options = d || this.resolveDataElementOptions(y, _.active ? "active" : n)), x || this.updateElement(_, y, M, n), v = w;
        }
        this.updateSharedOptions(d, n, h);
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
        let { iScale: a , _parsed: r  } = i, l = a.axis, { min: c , max: h , minDefined: d , maxDefined: u  } = a.getUserBounds();
        d && (n = $(Math.min(rt(r, a.axis, c).lo, e ? s : rt(t, l, a.getPixelForValue(c)).lo), 0, s - 1)), u ? o = $(Math.max(rt(r, a.axis, h).hi + 1, e ? 0 : rt(t, l, a.getPixelForValue(h)).hi + 1), n, s) - n : o = s - n;
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
var ve = class extends nt {
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
        let o = n === "reset", a = this.chart, r = this.getDataset(), c = a.options.animation, h = this._cachedMeta.rScale, d = h.xCenter, u = h.yCenter, f = h.getIndexAngle(0) - 0.5 * V, g = f, p, m = 360 / this.countVisibleElements();
        for(p = 0; p < e; ++p)g += this._computeAngle(p, n, m);
        for(p = e; p < e + s; p++){
            let b = t[p], x = g, v = g + this._computeAngle(p, n, m), y = a.getDataVisibility(p) ? h.getDistanceFromCenterForValue(r.data[p]) : 0;
            g = v, o && (c.animateScale && (y = 0), c.animateRotate && (x = v = f));
            let _ = {
                x: d,
                y: u,
                innerRadius: 0,
                outerRadius: y,
                startAngle: x,
                endAngle: v,
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
ve.id = "polarArea";
ve.defaults = {
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
ve.overrides = {
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
var Me = class extends nt {
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
            let c = t[l], h = this.resolveDataElementOptions(l, c.active ? "active" : n), d = a.getPointPositionForValue(l, o.data[l]), u = r ? a.xCenter : d.x, f = r ? a.yCenter : d.y, g = {
                x: u,
                y: f,
                angle: d.angle,
                skip: isNaN(u) || isNaN(f),
                options: h
            };
            this.updateElement(c, l, g, n);
        }
    }
};
Me.id = "radar";
Me.defaults = {
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
Me.overrides = {
    aspectRatio: 1,
    scales: {
        r: {
            type: "radialLinear"
        }
    }
};
var we = class extends Ht {
};
we.id = "scatter";
we.defaults = {
    showLine: !1,
    fill: !1
};
we.overrides = {
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
    BarController: _e,
    BubbleController: ye,
    DoughnutController: At,
    LineController: Ht,
    PolarAreaController: ve,
    PieController: ni,
    RadarController: Me,
    ScatterController: we
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
function ue(i, t) {
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
                let c = o[0], h = typeof c.getRange == "function" && c.getRange(t);
                if (h) {
                    let d = l(o, t, e - h), u = l(o, t, e + h);
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
        let { index: c , data: h  } = o[r], { lo: d , hi: u  } = cr(o[r], t, a, n);
        for(let f = d; f <= u; ++f){
            let g = h[f];
            g.skip || s(g, c, f);
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
        let { startAngle: c , endAngle: h  } = a.getProps([
            "startAngle",
            "endAngle"
        ], s), { angle: d  } = ki(a, {
            x: t.x,
            y: t.y
        });
        Bt(d, c, h) && n.push({
            element: a,
            datasetIndex: r,
            index: l
        });
    }
    return ls(i, e, t, o), n;
}
function ur(i, t, e, s, n) {
    let o = [], a = hr(e), r = Number.POSITIVE_INFINITY;
    function l(c, h, d) {
        let u = c.inRange(t.x, t.y, n);
        if (s && !u) return;
        let f = c.getCenterPoint(n);
        if (!mt(f, i.chartArea, i._minPadding) && !u) return;
        let p = a(t, f);
        p < r ? (o = [
            {
                element: c,
                datasetIndex: h,
                index: d
            }
        ], r = p) : p === r && o.push({
            element: c,
            datasetIndex: h,
            index: d
        });
    }
    return ls(i, e, t, l), o;
}
function qi(i, t, e, s, n) {
    return mt(t, i.chartArea, i._minPadding) ? e === "r" && !s ? dr(i, t, e, n) : ur(i, t, e, s, n) : [];
}
function xn(i, t, e, s) {
    let n = ue(t, i), o = [], a = e.axis, r = a === "x" ? "inXRange" : "inYRange", l = !1;
    return lr(i, (c, h, d)=>{
        c[r](n[a], s) && o.push({
            element: c,
            datasetIndex: h,
            index: d
        }), c.inRange(n.x, n.y, s) && (l = !0);
    }), e.intersect && !l ? [] : o;
}
var fr = {
    modes: {
        index (i, t, e, s) {
            let n = ue(t, i), o = e.axis || "x", a = e.intersect ? Ki(i, n, o, s) : qi(i, n, o, !1, s), r = [];
            return a.length ? (i.getSortedVisibleDatasetMetas().forEach((l)=>{
                let c = a[0].index, h = l.data[c];
                h && !h.skip && r.push({
                    element: h,
                    datasetIndex: l.index,
                    index: c
                });
            }), r) : [];
        },
        dataset (i, t, e, s) {
            let n = ue(t, i), o = e.axis || "xy", a = e.intersect ? Ki(i, n, o, s) : qi(i, n, o, !1, s);
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
            let n = ue(t, i), o = e.axis || "xy";
            return Ki(i, n, o, s);
        },
        nearest (i, t, e, s) {
            let n = ue(t, i), o = e.axis || "xy";
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
function le(i, t) {
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
        let { fullSize: l  } = r.box, c = e[r.stack], h = c && r.stackWeight / c.weight;
        r.horizontal ? (r.width = h ? h * s : l && t.availableWidth, r.height = n) : (r.width = s, r.height = h ? h * n : l && t.availableHeight);
    }
    return e;
}
function br(i) {
    let t = gr(i), e = ce(t.filter((c)=>c.box.fullSize
    ), !0), s = ce(le(t, "left"), !0), n = ce(le(t, "right")), o = ce(le(t, "top"), !0), a = ce(le(t, "bottom")), r = _n(t, "x"), l = _n(t, "y");
    return {
        fullSize: e,
        leftAndTop: s.concat(o),
        rightAndBottom: n.concat(l).concat(a).concat(r),
        chartArea: le(t, "chartArea"),
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
    if (!O(n)) {
        e.size && (i[n] -= e.size);
        let d = s[e.stack] || {
            size: 0,
            count: 1
        };
        d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i[n] += e.size;
    }
    o.getPadding && so(a, o.getPadding());
    let r = Math.max(0, t.outerWidth - yn(a, i, "left", "right")), l = Math.max(0, t.outerHeight - yn(a, i, "top", "bottom")), c = r !== i.w, h = l !== i.h;
    return i.w = r, i.h = l, e.horizontal ? {
        same: c,
        other: h
    } : {
        same: h,
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
function fe(i, t, e, s) {
    let n = [], o, a, r, l, c, h;
    for(o = 0, a = i.length, c = 0; o < a; ++o){
        r = i[o], l = r.box, l.update(r.width || t.w, r.height || t.h, yr(r.horizontal, t));
        let { same: d , other: u  } = xr(t, e, r, s);
        c |= d && n.length, h = h || u, l.fullSize || n.push(r);
    }
    return c && fe(n, t, e, s) || h;
}
function Ue(i, t, e, s, n) {
    i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
}
function vn(i, t, e, s) {
    let n = e.padding, { x: o , y: a  } = t;
    for (let r of i){
        let l = r.box, c = s[r.stack] || {
            count: 1,
            placed: 0,
            weight: 1
        }, h = r.stackWeight / c.weight || 1;
        if (r.horizontal) {
            let d = t.w * h, u = c.size || l.height;
            Z(c.start) && (a = c.start), l.fullSize ? Ue(l, n.left, a, e.outerWidth - n.right - n.left, u) : Ue(l, t.left + c.placed, a, d, u), c.start = a, c.placed += d, a = l.bottom;
        } else {
            let d = t.h * h, u = c.size || l.width;
            Z(c.start) && (o = c.start), l.fullSize ? Ue(l, o, n.top, u, e.outerHeight - n.bottom - n.top) : Ue(l, o, t.top + c.placed, u, d), c.start = o, c.placed += d, o = l.right;
        }
    }
    t.x = o, t.y = a;
}
D.set("layout", {
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
        let n = X(i.options.layout.padding), o = Math.max(t - n.width, 0), a = Math.max(e - n.height, 0), r = br(i.boxes), l = r.vertical, c = r.horizontal;
        R(i.boxes, (p)=>{
            typeof p.beforeLayout == "function" && p.beforeLayout();
        });
        let h = l.reduce((p, m)=>m.box.options && m.box.options.display === !1 ? p : p + 1
        , 0) || 1, d = Object.freeze({
            outerWidth: t,
            outerHeight: e,
            padding: n,
            availableWidth: o,
            availableHeight: a,
            vBoxMaxWidth: o / 2 / h,
            hBoxMaxHeight: a / 2
        }), u = Object.assign({}, n);
        so(u, X(s));
        let f = Object.assign({
            maxPadding: u,
            w: o,
            h: a,
            x: n.left,
            y: n.top
        }, n), g = mr(l.concat(c), d);
        fe(r.fullSize, f, d, g), fe(l, f, d, g), fe(c, f, d, g) && fe(l, f, d, g), _r(f), vn(r.leftAndTop, f, d, g), f.x += f.w, f.y += f.h, vn(r.rightAndBottom, f, d, g), i.chartArea = {
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
var me = new Map, wn = 0;
function ao() {
    let i = window.devicePixelRatio;
    i !== wn && (wn = i, me.forEach((t, e)=>{
        e.currentDevicePixelRatio !== i && t();
    }));
}
function Dr(i, t) {
    me.size || window.addEventListener("resize", ao), me.set(i, t);
}
function Or(i) {
    me.delete(i), me.size || window.removeEventListener("resize", ao);
}
function Ar(i, t, e) {
    let s = i.canvas, n = s && Ye(s);
    if (!n) return;
    let o = xi((r, l)=>{
        let c = n.clientWidth;
        e(r, l), c < n.clientWidth && e();
    }, window), a = new ResizeObserver((r)=>{
        let l = r[0], c = l.contentRect.width, h = l.contentRect.height;
        c === 0 && h === 0 || o(c, h);
    });
    return a.observe(n), Dr(i, o), a;
}
function Gi(i, t, e) {
    e && e.disconnect(), t === "resize" && Or(i);
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
        let a = Q(Math.abs(o)), r = Math.max(Math.min(-1 * Math.floor(a), 20), 0), l = {
            notation: n,
            minimumFractionDigits: r,
            maximumFractionDigits: r
        };
        return Object.assign(l, this.options.ticks.format), Wt(i, s, l);
    },
    logarithmic (i, t, e) {
        if (i === 0) return "0";
        let s = i / Math.pow(10, Math.floor(Q(i)));
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
D.set("scale", {
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
D.route("scale.ticks", "color", "", "color");
D.route("scale.grid", "color", "", "borderColor");
D.route("scale.grid", "borderColor", "", "borderColor");
D.route("scale.title", "color", "", "color");
D.describe("scale", {
    _fallback: !1,
    _scriptable: (i)=>!i.startsWith("before") && !i.startsWith("after") && i !== "callback" && i !== "parser"
    ,
    _indexable: (i)=>i !== "borderDash" && i !== "tickBorderDash"
});
D.describe("scales", {
    _fallback: "scale"
});
D.describe("scale.ticks", {
    _scriptable: (i)=>i !== "backdropPadding" && i !== "callback"
    ,
    _indexable: (i)=>i !== "backdropPadding"
});
function Er(i, t) {
    let e = i.options.ticks, s = e.maxTicksLimit || Fr(i), n = e.major.enabled ? Ir(t) : [], o = n.length, a = n[0], r = n[o - 1], l = [];
    if (o > s) return Br(t, l, n, o / s), l;
    let c = zr(n, t, s);
    if (o > 0) {
        let h, d, u = o > 1 ? Math.round((r - a) / (o - 1)) : null;
        for(Ke(t, l, c, L(u) ? 0 : a - u, a), h = 0, d = o - 1; h < d; h++)Ke(t, l, c, n[h], n[h + 1]);
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
    let o = Rs(s);
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
    let o = P(s, 0), a = Math.min(P(n, i.length), i.length), r = 0, l, c, h;
    for(e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0;)r++, h = Math.round(o + r * e);
    for(c = Math.max(o, 0); c < a; c++)c === h && (t.push(i[c]), r++, h = Math.round(o + r * e));
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
function he(i) {
    return i.drawTicks ? i.tickLength : 0;
}
function Pn(i, t) {
    if (!i.display) return 0;
    let e = j(i.font, t), s = X(i.padding);
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
    let s = Ie(i);
    return (e && t !== "right" || !e && t === "right") && (s = Wr(s)), s;
}
function Xr(i, t, e, s) {
    let { top: n , left: o , bottom: a , right: r , chart: l  } = i, { chartArea: c , scales: h  } = l, d = 0, u, f, g, p = a - n, m = r - o;
    if (i.isHorizontal()) {
        if (f = Y(s, o, r), O(e)) {
            let b = Object.keys(e)[0], x = e[b];
            g = h[b].getPixelForValue(x) + p - t;
        } else e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = kn(i, e, t);
        u = r - o;
    } else {
        if (O(e)) {
            let b = Object.keys(e)[0], x = e[b];
            f = h[b].getPixelForValue(x) - m + t;
        } else e === "center" ? f = (c.left + c.right) / 2 - m + t : f = kn(i, e, t);
        g = Y(s, a, n), d = e === "left" ? -W : W;
    }
    return {
        titleX: f,
        titleY: g,
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
        return t = J(t, Number.POSITIVE_INFINITY), e = J(e, Number.NEGATIVE_INFINITY), s = J(s, Number.POSITIVE_INFINITY), n = J(n, Number.NEGATIVE_INFINITY), {
            min: J(t, s),
            max: J(e, n),
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
            min: J(e, J(s, e)),
            max: J(s, J(e, s))
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
        B(this.options.beforeUpdate, [
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
        B(this.options.afterUpdate, [
            this
        ]);
    }
    beforeSetDimensions() {
        B(this.options.beforeSetDimensions, [
            this
        ]);
    }
    setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
    }
    afterSetDimensions() {
        B(this.options.afterSetDimensions, [
            this
        ]);
    }
    _callHooks(t) {
        this.chart.notifyPlugins(t, this.getContext()), B(this.options[t], [
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
        B(this.options.beforeTickToLabelConversion, [
            this
        ]);
    }
    generateTickLabels(t) {
        let e = this.options.ticks, s, n, o;
        for(s = 0, n = t.length; s < n; s++)o = t[s], o.label = B(e.callback, [
            o.value,
            s,
            t
        ], this);
    }
    afterTickToLabelConversion() {
        B(this.options.afterTickToLabelConversion, [
            this
        ]);
    }
    beforeCalculateLabelRotation() {
        B(this.options.beforeCalculateLabelRotation, [
            this
        ]);
    }
    calculateLabelRotation() {
        let t = this.options, e = t.ticks, s = this.ticks.length, n = e.minRotation || 0, o = e.maxRotation, a = n, r, l, c;
        if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
            this.labelRotation = n;
            return;
        }
        let h = this._getLabelSizes(), d = h.widest.width, u = h.highest.height, f = $(this.chart.width - d, 0, this.maxWidth);
        r = t.offset ? this.maxWidth / s : f / (s - 1), d + 6 > r && (r = f / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - he(t.grid) - e.padding - Pn(t.title, this.chart.options.font), c = Math.sqrt(d * d + u * u), a = Ve(Math.min(Math.asin($((h.highest.height + 6) / r, -1, 1)), Math.asin($(l / c, -1, 1)) - Math.asin($(u / c, -1, 1)))), a = Math.max(n, Math.min(o, a))), this.labelRotation = a;
    }
    afterCalculateLabelRotation() {
        B(this.options.afterCalculateLabelRotation, [
            this
        ]);
    }
    beforeFit() {
        B(this.options.beforeFit, [
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
            if (r ? (t.width = this.maxWidth, t.height = he(o) + l) : (t.height = this.maxHeight, t.width = he(o) + l), s.display && this.ticks.length) {
                let { first: c , last: h , widest: d , highest: u  } = this._getLabelSizes(), f = s.padding * 2, g = et(this.labelRotation), p = Math.cos(g), m = Math.sin(g);
                if (r) {
                    let b = s.mirror ? 0 : m * d.width + p * u.height;
                    t.height = Math.min(this.maxHeight, t.height + b + f);
                } else {
                    let b = s.mirror ? 0 : p * d.width + m * u.height;
                    t.width = Math.min(this.maxWidth, t.width + b + f);
                }
                this._calculatePadding(c, h, m, p);
            }
        }
        this._handleMargins(), r ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
    }
    _calculatePadding(t, e, s, n) {
        let { ticks: { align: o , padding: a  } , position: r  } = this.options, l = this.labelRotation !== 0, c = r !== "top" && this.axis === "x";
        if (this.isHorizontal()) {
            let h = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1), u = 0, f = 0;
            l ? c ? (u = n * t.width, f = s * e.height) : (u = s * t.height, f = n * e.width) : o === "start" ? f = e.width : o === "end" ? u = t.width : (u = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((u - h + a) * this.width / (this.width - h), 0), this.paddingRight = Math.max((f - d + a) * this.width / (this.width - d), 0);
        } else {
            let h = e.height / 2, d = t.height / 2;
            o === "start" ? (h = 0, d = t.height) : o === "end" && (h = e.height, d = 0), this.paddingTop = h + a, this.paddingBottom = d + a;
        }
    }
    _handleMargins() {
        this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
    }
    afterFit() {
        B(this.options.afterFit, [
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
        let { ctx: s , _longestTextCache: n  } = this, o = [], a = [], r = 0, l = 0, c, h, d, u, f, g, p, m, b, x, v;
        for(c = 0; c < e; ++c){
            if (u = t[c].label, f = this._resolveTickFontOptions(c), s.font = g = f.string, p = n[g] = n[g] || {
                data: {},
                gc: []
            }, m = f.lineHeight, b = x = 0, !L(u) && !I(u)) b = te(s, p.data, p.gc, b, u), x = m;
            else if (I(u)) for(h = 0, d = u.length; h < d; ++h)v = u[h], !L(v) && !I(v) && (b = te(s, p.data, p.gc, b, v), x += m);
            o.push(b), a.push(x), r = Math.max(b, r), l = Math.max(x, l);
        }
        Hr(n, e);
        let y = o.indexOf(r), _ = a.indexOf(l), w = (M)=>({
                width: o[M] || 0,
                height: a[M] || 0
            })
        ;
        return {
            first: w(0),
            last: w(e - 1),
            widest: w(y),
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
        let e = this.axis, s = this.chart, n = this.options, { grid: o , position: a  } = n, r = o.offset, l = this.isHorizontal(), h = this.ticks.length + (r ? 1 : 0), d = he(o), u = [], f = o.setContext(this.getContext()), g = f.drawBorder ? f.borderWidth : 0, p = g / 2, m = function(C) {
            return _t(s, C, g);
        }, b, x, v, y, _, w, M, S, k, E, T, A;
        if (a === "top") b = m(this.bottom), w = this.bottom - d, S = b - p, E = m(t.top) + p, A = t.bottom;
        else if (a === "bottom") b = m(this.top), E = t.top, A = m(t.bottom) - p, w = b + p, S = this.top + d;
        else if (a === "left") b = m(this.right), _ = this.right - d, M = b - p, k = m(t.left) + p, T = t.right;
        else if (a === "right") b = m(this.left), k = t.left, T = m(t.right) - p, _ = b + p, M = this.left + d;
        else if (e === "x") {
            if (a === "center") b = m((t.top + t.bottom) / 2 + 0.5);
            else if (O(a)) {
                let C = Object.keys(a)[0], z = a[C];
                b = m(this.chart.scales[C].getPixelForValue(z));
            }
            E = t.top, A = t.bottom, w = b + p, S = w + d;
        } else if (e === "y") {
            if (a === "center") b = m((t.left + t.right) / 2);
            else if (O(a)) {
                let C = Object.keys(a)[0], z = a[C];
                b = m(this.chart.scales[C].getPixelForValue(z));
            }
            _ = b - p, M = _ - d, k = t.left, T = t.right;
        }
        let H = P(n.ticks.maxTicksLimit, h), K = Math.max(1, Math.ceil(h / H));
        for(x = 0; x < h; x += K){
            let C = o.setContext(this.getContext(x)), z = C.lineWidth, Yt = C.color, kt = o.borderDash || [], Xt = C.borderDashOffset, Ce = C.tickWidth, Lt = C.tickColor, Ut = C.tickBorderDash || [], Kt = C.tickBorderDashOffset;
            v = Nr(this, x, r), v !== void 0 && (y = _t(s, v, z), l ? _ = M = k = T = y : w = S = E = A = y, u.push({
                tx1: _,
                ty1: w,
                tx2: M,
                ty2: S,
                x1: k,
                y1: E,
                x2: T,
                y2: A,
                width: z,
                color: Yt,
                borderDash: kt,
                borderDashOffset: Xt,
                tickWidth: Ce,
                tickColor: Lt,
                tickBorderDash: Ut,
                tickBorderDashOffset: Kt
            }));
        }
        return this._ticksLength = h, this._borderValue = b, u;
    }
    _computeLabelItems(t) {
        let e = this.axis, s = this.options, { position: n , ticks: o  } = s, a = this.isHorizontal(), r = this.ticks, { align: l , crossAlign: c , padding: h , mirror: d  } = o, u = he(s.grid), f = u + h, g = d ? -h : f, p = -et(this.labelRotation), m = [], b, x, v, y, _, w, M, S, k, E, T, A, H = "middle";
        if (n === "top") w = this.bottom - g, M = this._getXAxisLabelAlignment();
        else if (n === "bottom") w = this.top + g, M = this._getXAxisLabelAlignment();
        else if (n === "left") {
            let C = this._getYAxisLabelAlignment(u);
            M = C.textAlign, _ = C.x;
        } else if (n === "right") {
            let C = this._getYAxisLabelAlignment(u);
            M = C.textAlign, _ = C.x;
        } else if (e === "x") {
            if (n === "center") w = (t.top + t.bottom) / 2 + f;
            else if (O(n)) {
                let C = Object.keys(n)[0], z = n[C];
                w = this.chart.scales[C].getPixelForValue(z) + f;
            }
            M = this._getXAxisLabelAlignment();
        } else if (e === "y") {
            if (n === "center") _ = (t.left + t.right) / 2 - f;
            else if (O(n)) {
                let C = Object.keys(n)[0], z = n[C];
                _ = this.chart.scales[C].getPixelForValue(z);
            }
            M = this._getYAxisLabelAlignment(u).textAlign;
        }
        e === "y" && (l === "start" ? H = "top" : l === "end" && (H = "bottom"));
        let K = this._getLabelSizes();
        for(b = 0, x = r.length; b < x; ++b){
            v = r[b], y = v.label;
            let C = o.setContext(this.getContext(b));
            S = this.getPixelForTick(b) + o.labelOffset, k = this._resolveTickFontOptions(b), E = k.lineHeight, T = I(y) ? y.length : 1;
            let z = T / 2, Yt = C.color, kt = C.textStrokeColor, Xt = C.textStrokeWidth;
            a ? (_ = S, n === "top" ? c === "near" || p !== 0 ? A = -T * E + E / 2 : c === "center" ? A = -K.highest.height / 2 - z * E + E : A = -K.highest.height + E / 2 : c === "near" || p !== 0 ? A = E / 2 : c === "center" ? A = K.highest.height / 2 - z * E : A = K.highest.height - T * E, d && (A *= -1)) : (w = S, A = (1 - T) * E / 2);
            let Ce;
            if (C.showLabelBackdrop) {
                let Lt = X(C.backdropPadding), Ut = K.heights[b], Kt = K.widths[b], di = w + A - Lt.top, ui = _ - Lt.left;
                switch(H){
                    case "middle":
                        di -= Ut / 2;
                        break;
                    case "bottom":
                        di -= Ut;
                        break;
                }
                switch(M){
                    case "center":
                        ui -= Kt / 2;
                        break;
                    case "right":
                        ui -= Kt;
                        break;
                }
                Ce = {
                    left: ui,
                    top: di,
                    width: Kt + Lt.width,
                    height: Ut + Lt.height,
                    color: C.backdropColor
                };
            }
            m.push({
                rotation: p,
                label: y,
                font: k,
                color: Yt,
                strokeColor: kt,
                strokeWidth: Xt,
                textOffset: A,
                textAlign: M,
                textBaseline: H,
                translation: [
                    _,
                    w
                ],
                backdrop: Ce
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
        let { position: e , ticks: { crossAlign: s , mirror: n , padding: o  }  } = this.options, a = this._getLabelSizes(), r = t + o, l = a.widest.width, c, h;
        return e === "left" ? n ? (h = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - r, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? n ? (h = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + r, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
            textAlign: c,
            x: h
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
        let e = this.options.grid, s = this.ctx, n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t)), o, a, r = (l, c, h)=>{
            !h.width || !h.color || (s.save(), s.lineWidth = h.width, s.strokeStyle = h.color, s.setLineDash(h.borderDash || []), s.lineDashOffset = h.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore());
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
        let a = s.setContext(this.getContext(0)).lineWidth, r = this._borderValue, l, c, h, d;
        this.isHorizontal() ? (l = _t(t, this.left, o) - o / 2, c = _t(t, this.right, a) + a / 2, h = d = r) : (h = _t(t, this.top, o) - o / 2, d = _t(t, this.bottom, a) + a / 2, l = c = r), e.save(), e.lineWidth = n.borderWidth, e.strokeStyle = n.borderColor, e.beginPath(), e.moveTo(l, h), e.lineTo(c, d), e.stroke(), e.restore();
    }
    drawLabels(t) {
        if (!this.options.ticks.display) return;
        let s = this.ctx, n = this._computeLabelArea();
        n && ne(s, n);
        let o = this._labelItems || (this._labelItems = this._computeLabelItems(t)), a, r;
        for(a = 0, r = o.length; a < r; ++a){
            let l = o[a], c = l.font, h = l.label;
            l.backdrop && (s.fillStyle = l.backdrop.color, s.fillRect(l.backdrop.left, l.backdrop.top, l.backdrop.width, l.backdrop.height));
            let d = l.textOffset;
            yt(s, h, 0, d, c, l);
        }
        n && oe(s);
    }
    drawTitle() {
        let { ctx: t , options: { position: e , title: s , reverse: n  }  } = this;
        if (!s.display) return;
        let o = j(s.font), a = X(s.padding), r = s.align, l = o.lineHeight / 2;
        e === "bottom" || e === "center" || O(e) ? (l += a.bottom, I(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += a.top;
        let { titleX: c , titleY: h , maxWidth: d , rotation: u  } = Xr(this, l, e, r);
        yt(t, s.text, 0, 0, o, {
            color: s.color,
            maxWidth: d,
            rotation: u,
            textAlign: Yr(r, e, n),
            textBaseline: "middle",
            translation: [
                c,
                h
            ]
        });
    }
    draw(t) {
        !this._isVisible() || (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
    }
    _layers() {
        let t = this.options, e = t.ticks && t.ticks.z || 0, s = P(t.grid && t.grid.z, -1);
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
}, ge = class {
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
        return o in n || (n[o] = t, Ur(t, a, s), this.override && D.override(t.id, t.overrides)), a;
    }
    get(t) {
        return this.items[t];
    }
    unregister(t) {
        let e = this.items, s = t.id, n = this.scope;
        s in e && delete e[s], n && s in D[n] && (delete D[n][s], this.override && delete xt[s]);
    }
};
function Ur(i, t, e) {
    let s = Rt(Object.create(null), [
        e ? D.get(e) : {},
        D.get(t),
        i.defaults
    ]);
    D.set(t, s), i.defaultRoutes && Kr(t, i.defaultRoutes), i.descriptors && D.describe(t, i.descriptors);
}
function Kr(i, t) {
    Object.keys(t).forEach((e)=>{
        let s = e.split("."), n = s.pop(), o = [
            i
        ].concat(s).join("."), a = t[e].split("."), r = a.pop(), l = a.join(".");
        D.route(o, n, l, r);
    });
}
function qr(i) {
    return "id" in i && "defaults" in i;
}
var co = class {
    constructor(){
        this.controllers = new ge(nt, "datasets", !0), this.elements = new ge(it, "elements"), this.plugins = new ge(Object, "plugins"), this.scales = new ge(wt, "scales"), this._typedRegistries = [
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
        B(s["before" + n], [], s), e[t](s), B(s["after" + n], [], s);
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
            if (B(r, l, a) === !1 && n.cancelable) return !1;
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
        let s = t && t.config, n = P(s.options && s.options.plugins, {}), o = Gr(s);
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
    let e = D.datasets[i] || {};
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
        if (!O(l)) return console.error(`Invalid scale configuration for scale: ${r}`);
        if (l._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
        let c = es(r, l), h = el(c, n), d = e.scales || {};
        o[c] = o[c] || r, a[r] = Ft(Object.create(null), [
            {
                axis: c
            },
            l,
            d[c],
            d[h]
        ]);
    }), i.data.datasets.forEach((r)=>{
        let l = r.type || i.type, c = r.indexAxis || ts(l, t), d = (xt[l] || {}).scales || {};
        Object.keys(d).forEach((u)=>{
            let f = tl(u, c), g = r[f + "AxisID"] || o[f] || f;
            a[g] = a[g] || Object.create(null), Ft(a[g], [
                {
                    axis: f
                },
                s[g],
                d[u]
            ]);
        });
    }), Object.keys(a).forEach((r)=>{
        let l = a[r];
        Ft(l, [
            D.scales[l.type],
            D.scale
        ]);
    }), a;
}
function uo(i) {
    let t = i.options || (i.options = {});
    t.plugins = P(t.plugins, {}), t.scales = sl(i, t);
}
function fo(i) {
    return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function nl(i) {
    return i = i || {}, i.data = fo(i.data), uo(i), i;
}
var Cn = new Map, go = new Set;
function qe(i, t) {
    let e = Cn.get(i);
    return e || (e = t(), Cn.set(i, e), go.add(e)), e;
}
var de = (i, t, e)=>{
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
        return qe(t, ()=>[
                [
                    `datasets.${t}`,
                    ""
                ]
            ]
        );
    }
    datasetAnimationScopeKeys(t, e) {
        return qe(`${t}.transition.${e}`, ()=>[
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
        return qe(`${t}-${e}`, ()=>[
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
        return qe(`${s}-plugin-${e}`, ()=>[
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
        e.forEach((h)=>{
            t && (l.add(t), h.forEach((d)=>de(l, t, d)
            )), h.forEach((d)=>de(l, n, d)
            ), h.forEach((d)=>de(l, xt[o] || {}, d)
            ), h.forEach((d)=>de(l, D, d)
            ), h.forEach((d)=>de(l, Ne, d)
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
            D.datasets[e] || {},
            {
                type: e
            },
            D,
            Ne
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
        return O(e) ? Pt(o, e, void 0, n) : o;
    }
};
function Dn(i, t, e) {
    let s = i.get(t);
    s || (s = new Map, i.set(t, s));
    let n = e.join(), o = s.get(n);
    return o || (o = {
        resolver: $e(t, e),
        subPrefixes: e.filter((r)=>!r.toLowerCase().includes("hover")
        )
    }, s.set(n, o)), o;
}
var ol = (i)=>O(i) && Object.getOwnPropertyNames(i).reduce((t, e)=>t || ct(i[e])
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
    t.notifyPlugins("afterRender"), B(e && e.onComplete, [
        i
    ], t);
}
function cl(i) {
    let t = i.chart, e = t.options.animation;
    B(e && e.onProgress, [
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
        let r = this.platform.acquireContext(n, a.aspectRatio), l = r && r.canvas, c = l && l.height, h = l && l.width;
        if (this.id = Os(), this.ctx = r, this.canvas = l, this.width = h, this.height = c, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new ho, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Cs((d)=>this.update(d)
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
        }), B(s.onResize, [
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
            let r = e[a], l = es(a, r), c = l === "r", h = l === "x";
            return {
                options: r,
                dposition: c ? "chartArea" : h ? "bottom" : "left",
                dtype: c ? "radialLinear" : h ? "category" : "linear"
            };
        }))), R(o, (a)=>{
            let r = a.options, l = r.id, c = es(l, r), h = P(r.type, a.dtype);
            (r.position === void 0 || On(r.position, c) !== On(a.dposition)) && (r.position = a.dposition), n[l] = !0;
            let d = null;
            if (l in s && s[l].type === h) d = s[l];
            else {
                let u = ft.getScale(h);
                d = new u({
                    id: l,
                    type: h,
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
                let l = ft.getController(r), { datasetElementType: c , dataElementType: h  } = D.datasets[r];
                Object.assign(l.prototype, {
                    dataElementType: ft.getElement(h),
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
        for(let c1 = 0, h = this.data.datasets.length; c1 < h; c1++){
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
        this.notifyPlugins("beforeDatasetDraw", a) !== !1 && (n && ne(e, {
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
        Z(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), a.update(o, {
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
        !ee(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
    }
    notifyPlugins(t, e, s) {
        return this._plugins.notify(this, t, e, s);
    }
    _updateHoverStyles(t, e, s) {
        let n = this.options.hover, o = (l, c)=>l.filter((h)=>!c.some((d)=>h.datasetIndex === d.datasetIndex && h.index === d.index
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
        let { _active: n = [] , options: o  } = this, a = e, r = this._getActiveElements(t, n, s, a), l = Ts(t), c = dl(t, this._lastEvent, s, l);
        s && (this._lastEvent = null, B(o.onHover, [
            t,
            r,
            this
        ], this), l && B(o.onClick, [
            t,
            r,
            this
        ], this));
        let h = !ee(r, n);
        return (h || e) && (this._active = r, this._updateHoverStyles(r, n, e)), this._lastEvent = c, h;
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
        value: D
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
    i.beginPath(), i.arc(o, a, r, s - c, e + c), l > n ? (c = n / l, i.arc(o, a, l, e + c, s - c, !0)) : i.arc(o, a, n, e + W, s - W), i.closePath(), i.clip();
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
    let { x: o , y: a , startAngle: r , pixelMargin: l , innerRadius: c  } = t, h = Math.max(t.outerRadius + s + e - l, 0), d = c > 0 ? c + s + e + l : 0, u = 0, f = n - r;
    if (s) {
        let z = c > 0 ? c - s : 0, Yt = h > 0 ? h - s : 0, kt = (z + Yt) / 2, Xt = kt !== 0 ? f * kt / (kt + s) : f;
        u = (f - Xt) / 2;
    }
    let g = Math.max(0.001, f * h - e / V) / h, p = (f - g) / 2, m = r + p + u, b = n - p - u, { outerStart: x , outerEnd: v , innerStart: y , innerEnd: _  } = fl(t, d, h, b - m), w = h - x, M = h - v, S = m + x / w, k = b - v / M, E = d + y, T = d + _, A = m + y / E, H = b - _ / T;
    if (i.beginPath(), i.arc(o, a, h, S, k), v > 0) {
        let z = Nt(M, k, o, a);
        i.arc(z.x, z.y, v, k, b + W);
    }
    let K = Nt(T, b, o, a);
    if (i.lineTo(K.x, K.y), _ > 0) {
        let z = Nt(T, H, o, a);
        i.arc(z.x, z.y, _, b + W, H + Math.PI);
    }
    if (i.arc(o, a, d, b - _ / d, m + y / d, !0), y > 0) {
        let z = Nt(E, A, o, a);
        i.arc(z.x, z.y, y, A + Math.PI, m - W);
    }
    let C = Nt(w, m, o, a);
    if (i.lineTo(C.x, C.y), x > 0) {
        let z = Nt(w, S, o, a);
        i.arc(z.x, z.y, x, m - W, S);
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
    let { x: s , y: n , startAngle: o , pixelMargin: a , fullCircles: r  } = t, l = Math.max(t.outerRadius - a, 0), c = t.innerRadius + a, h;
    for(e && xo(i, t, o + F), i.beginPath(), i.arc(s, n, c, o + F, o, !0), h = 0; h < r; ++h)i.stroke();
    for(i.beginPath(), i.arc(s, n, l, o, o + F), h = 0; h < r; ++h)i.stroke();
}
function ml(i, t, e, s, n) {
    let { options: o  } = t, { borderWidth: a , borderJoinStyle: r  } = o, l = o.borderAlign === "inner";
    !a || (l ? (i.lineWidth = a * 2, i.lineJoin = r || "round") : (i.lineWidth = a, i.lineJoin = r || "bevel"), t.fullCircles && pl(i, t, l), l && xo(i, t, n), is(i, t, e, s, n), i.stroke());
}
var ke = class extends it {
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
        }), { startAngle: r , endAngle: l , innerRadius: c , outerRadius: h , circumference: d  } = this.getProps([
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "circumference"
        ], s), u = this.options.spacing / 2, g = P(d, l - r) >= F || Bt(o, r, l), p = at(a, c + u, h + u);
        return g && p;
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
        ], t), { offset: l , spacing: c  } = this.options, h = (n + o) / 2, d = (a + r + c + l) / 2;
        return {
            x: e + Math.cos(h) * d,
            y: s + Math.sin(h) * d
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
            t.translate(Math.cos(l) * a, Math.sin(l) * a), this.circumference >= V && (a = n);
        }
        t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor;
        let r = gl(t, this, a, o);
        ml(t, this, a, o, r), t.restore();
    }
};
ke.id = "arc";
ke.defaults = {
    borderAlign: "center",
    borderColor: "#fff",
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0
};
ke.defaultRoutes = {
    backgroundColor: "backgroundColor"
};
function _o(i, t, e = t) {
    i.lineCap = P(e.borderCapStyle, t.borderCapStyle), i.setLineDash(P(e.borderDash, t.borderDash)), i.lineDashOffset = P(e.borderDashOffset, t.borderDashOffset), i.lineJoin = P(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = P(e.borderWidth, t.borderWidth), i.strokeStyle = P(e.borderColor, t.borderColor);
}
function bl(i, t, e) {
    i.lineTo(e.x, e.y);
}
function xl(i) {
    return i.stepped ? js : i.tension || i.cubicInterpolationMode === "monotone" ? $s : bl;
}
function yo(i, t, e = {}) {
    let s = i.length, { start: n = 0 , end: o = s - 1  } = e, { start: a , end: r  } = t, l = Math.max(n, a), c = Math.min(o, r), h = n < a && o < a || n > r && o > r;
    return {
        count: s,
        start: l,
        loop: t.loop,
        ilen: c < l && !h ? s + c - l : c - l
    };
}
function _l(i, t, e, s) {
    let { points: n , options: o  } = t, { count: a , start: r , loop: l , ilen: c  } = yo(n, e, s), h = xl(o), { move: d = !0 , reverse: u  } = s || {}, f, g, p;
    for(f = 0; f <= c; ++f)g = n[(r + (u ? c - f : f)) % a], !g.skip && (d ? (i.moveTo(g.x, g.y), d = !1) : h(i, p, g, u, o.stepped), p = g);
    return l && (g = n[(r + (u ? c : 0)) % a], h(i, p, g, u, o.stepped)), !!l;
}
function yl(i, t, e, s) {
    let n = t.points, { count: o , start: a , ilen: r  } = yo(n, e, s), { move: l = !0 , reverse: c  } = s || {}, h = 0, d = 0, u, f, g, p, m, b, x = (y)=>(a + (c ? r - y : y)) % o
    , v = ()=>{
        p !== m && (i.lineTo(h, m), i.lineTo(h, p), i.lineTo(h, b));
    };
    for(l && (f = n[x(0)], i.moveTo(f.x, f.y)), u = 0; u <= r; ++u){
        if (f = n[x(u)], f.skip) continue;
        let y = f.x, _ = f.y, w = y | 0;
        w === g ? (_ < p ? p = _ : _ > m && (m = _), h = (d * h + y) / ++d) : (v(), i.lineTo(y, _), g = w, d = 0, p = m = _), b = _;
    }
    v();
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
        let r = [], l = vl(s), c, h;
        for(c = 0, h = a.length; c < h; ++c){
            let { start: d , end: u  } = a[c], f = o[d], g = o[u];
            if (f === g) {
                r.push(f);
                continue;
            }
            let p = Math.abs((n - f[e]) / (g[e] - f[e])), m = l(f, g, p, s.stepped);
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
var Se = class extends it {
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
Se.id = "point";
Se.defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0
};
Se.defaultRoutes = {
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
    ], t), r, l, c, h, d;
    return i.horizontal ? (d = a / 2, r = Math.min(e, n), l = Math.max(e, n), c = s - d, h = s + d) : (d = o / 2, r = e - d, l = e + d, c = Math.min(s, n), h = Math.max(s, n)), {
        left: r,
        top: c,
        right: l,
        bottom: h
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
    ]), n = i.options.borderRadius, o = Ct(n), a = Math.min(t, e), r = i.borderSkipped, l = s || O(n);
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
var Pe = class extends it {
    constructor(t){
        super();
        this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
    }
    draw(t) {
        let { inflateAmount: e , options: { borderColor: s , backgroundColor: n  }  } = this, { inner: o , outer: a  } = Dl(this), r = Ol(a.radius) ? ae : Al;
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
Pe.id = "bar";
Pe.defaults = {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0
};
Pe.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
};
var Ll = Object.freeze({
    __proto__: null,
    ArcElement: ke,
    LineElement: gt,
    PointElement: Se,
    BarElement: Pe
});
function Tl(i, t, e, s, n) {
    let o = n.samples || s;
    if (o >= e) return i.slice(t, t + e);
    let a = [], r = (e - 2) / (o - 2), l = 0, c = t + e - 1, h = t, d, u, f, g, p;
    for(a[l++] = i[h], d = 0; d < o - 2; d++){
        let m = 0, b = 0, x, v = Math.floor((d + 1) * r) + 1 + t, y = Math.min(Math.floor((d + 2) * r) + 1, e) + t, _ = y - v;
        for(x = v; x < y; x++)m += i[x].x, b += i[x].y;
        m /= _, b /= _;
        let w = Math.floor(d * r) + 1 + t, M = Math.min(Math.floor((d + 1) * r) + 1, e) + t, { x: S , y: k  } = i[h];
        for(f = g = -1, x = w; x < M; x++)g = 0.5 * Math.abs((S - m) * (i[x].y - k) - (S - i[x].x) * (b - k)), g > f && (f = g, u = i[x], p = x);
        a[l++] = u, h = p;
    }
    return a[l++] = i[c], a;
}
function Rl(i, t, e, s) {
    let n = 0, o = 0, a, r, l, c, h, d, u, f, g, p, m = [], b = t + e - 1, x = i[t].x, y = i[b].x - x;
    for(a = t; a < t + e; ++a){
        r = i[a], l = (r.x - x) / y * s, c = r.y;
        let _ = l | 0;
        if (_ === h) c < g ? (g = c, d = a) : c > p && (p = c, u = a), n = (o * n + r.x) / ++o;
        else {
            let w = a - 1;
            if (!L(d) && !L(u)) {
                let M = Math.min(d, u), S = Math.max(d, u);
                M !== f && M !== w && m.push({
                    ...i[M],
                    x: n
                }), S !== f && S !== w && m.push({
                    ...i[S],
                    x: n
                });
            }
            a > 0 && w !== f && m.push(i[w]), m.push(r), h = _, o = 0, g = p = c, d = u = f = a;
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
            let h = i.scales[l.xAxisID];
            if (h.type !== "linear" && h.type !== "time" || i.options.parsing) return;
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
            let g;
            switch(e.algorithm){
                case "lttb":
                    g = Tl(c, d, u, s, e);
                    break;
                case "min-max":
                    g = Rl(c, d, u, s);
                    break;
                default:
                    throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
            }
            n._decimated = g;
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
    let t = i.options, e = t.fill, s = P(e && e.target, e);
    return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function Bl(i, t, e) {
    let s = Il(i);
    if (O(s)) return isNaN(s.value) ? !1 : s;
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
    return e === "start" ? s = t.bottom : e === "end" ? s = t.top : O(e) ? s = t.getPixelForValue(e.value) : t.getBasePixel && (s = t.getBasePixel()), N(s) ? (n = t.isHorizontal(), {
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
    let { scale: t , fill: e  } = i, s = t.options, n = t.getLabels().length, o = [], a = s.reverse ? t.max : t.min, r = s.reverse ? t.min : t.max, l, c, h;
    if (e === "start" ? h = a : e === "end" ? h = r : O(e) ? h = e.value : h = t.getBaseValue(), s.grid.circular) return c = t.getPointPositionForValue(0, a), new ds({
        x: c.x,
        y: c.y,
        radius: t.getDistanceFromCenterForValue(h)
    });
    for(l = 0; l < n; ++l)o.push(t.getPointPositionForValue(l, h));
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
        for(let h = c.start; h <= c.end; h++)Yl(n, a[h], r);
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
        let h = o[c], d = a[h.start][e], u = a[h.end][e];
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
        let { start: l , end: c  } = r, h = n[l], d = n[us(l, c, n)];
        o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)), a = !!t.pathSegment(i, r, {
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
        let h = ns(e, n[l], n[c], r.loop);
        if (!t.segments) {
            a.push({
                source: r,
                target: h,
                start: n[l],
                end: n[c]
            });
            continue;
        }
        let d = $i(t, h);
        for (let u of d){
            let f = ns(e, o[u.start], o[u.end], u.loop), g = ji(r, n, f);
            for (let p of g)a.push({
                source: p,
                target: u,
                start: {
                    [e]: zn(h, f, "start", Math.max)
                },
                end: {
                    [e]: zn(h, f, "end", Math.min)
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
    for (let { source: l , target: c , start: h , end: d  } of r){
        let { style: { backgroundColor: u = o  } = {}  } = l, f = s !== !0;
        i.save(), i.fillStyle = u, Gl(i, a, f && ns(n, h, d)), i.beginPath();
        let g = !!e.pathSegment(i, l), p;
        if (f) {
            g ? i.closePath() : In(i, s, d, n);
            let m = !!s.pathSegment(i, c, {
                move: g,
                reverse: !0
            });
            p = g && m, p || In(i, s, h, n);
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
    let s = Ul(t), { line: n , scale: o , axis: a  } = t, r = n.options, l = r.fill, c = r.backgroundColor, { above: h = c , below: d = c  } = l || {};
    s && n.points.length && (ne(i, e), Zl(i, {
        line: n,
        target: s,
        above: h,
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
        let t = this.options.labels || {}, e = B(t.generateLabels, [
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
        let s = t.labels, n = j(s.font), o = n.size, a = this._computeTitleHeight(), { boxWidth: r , itemHeight: l  } = Vn(s, o), c, h;
        e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(a, o, r, l) + 10) : (h = this.maxHeight, c = this._fitCols(a, o, r, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
    }
    _fitRows(t, e, s, n) {
        let { ctx: o , maxWidth: a , options: { labels: { padding: r  }  }  } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
            0
        ], h = n + r, d = t;
        o.textAlign = "left", o.textBaseline = "middle";
        let u = -1, f = -h;
        return this.legendItems.forEach((g, p)=>{
            let m = s + e / 2 + o.measureText(g.text).width;
            (p === 0 || c[c.length - 1] + m + 2 * r > a) && (d += h, c[c.length - (p > 0 ? 0 : 1)] = 0, f += h, u++), l[p] = {
                left: 0,
                top: f,
                row: u,
                width: m,
                height: n
            }, c[c.length - 1] += m + r;
        }), d;
    }
    _fitCols(t, e, s, n) {
        let { ctx: o , maxHeight: a , options: { labels: { padding: r  }  }  } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = a - t, d = r, u = 0, f = 0, g = 0, p = 0;
        return this.legendItems.forEach((m, b)=>{
            let x = s + e / 2 + o.measureText(m.text).width;
            b > 0 && f + n + 2 * r > h && (d += u + r, c.push({
                width: u,
                height: f
            }), g += u + r, p++, u = f = 0), l[b] = {
                left: g,
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
            let r = 0, l = Y(s, this.left + n, this.right - this.lineWidths[r]);
            for (let c of e)r !== c.row && (r = c.row, l = Y(s, this.left + n, this.right - this.lineWidths[r])), c.top += this.top + t + n, c.left = a.leftForLtr(a.x(l), c.width), l += c.width + n;
        } else {
            let r = 0, l = Y(s, this.top + t + n, this.bottom - this.columnSizes[r].height);
            for (let c of e)c.col !== r && (r = c.col, l = Y(s, this.top + t + n, this.bottom - this.columnSizes[r].height)), c.top = l, c.left += this.left + n, c.left = a.leftForLtr(a.x(c.left), c.width), l += c.height + n;
        }
    }
    isHorizontal() {
        return this.options.position === "top" || this.options.position === "bottom";
    }
    draw() {
        if (this.options.display) {
            let t = this.ctx;
            ne(t, this), this._draw(), oe(t);
        }
    }
    _draw() {
        let { options: t , columnSizes: e , lineWidths: s , ctx: n  } = this, { align: o , labels: a  } = t, r = D.color, l = Dt(t.rtl, this.left, this.width), c = j(a.font), { color: h , padding: d  } = a, u = c.size, f = u / 2, g;
        this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
        let { boxWidth: p , boxHeight: m , itemHeight: b  } = Vn(a, u), x = function(M, S, k) {
            if (isNaN(p) || p <= 0 || isNaN(m) || m < 0) return;
            n.save();
            let E = P(k.lineWidth, 1);
            if (n.fillStyle = P(k.fillStyle, r), n.lineCap = P(k.lineCap, "butt"), n.lineDashOffset = P(k.lineDashOffset, 0), n.lineJoin = P(k.lineJoin, "miter"), n.lineWidth = E, n.strokeStyle = P(k.strokeStyle, r), n.setLineDash(P(k.lineDash, [])), a.usePointStyle) {
                let T = {
                    radius: p * Math.SQRT2 / 2,
                    pointStyle: k.pointStyle,
                    rotation: k.rotation,
                    borderWidth: E
                }, A = l.xPlus(M, p / 2), H = S + f;
                se(n, T, A, H);
            } else {
                let T = S + Math.max((u - m) / 2, 0), A = l.leftForLtr(M, p), H = Ct(k.borderRadius);
                n.beginPath(), Object.values(H).some((K)=>K !== 0
                ) ? ae(n, {
                    x: A,
                    y: T,
                    w: p,
                    h: m,
                    radius: H
                }) : n.rect(A, T, p, m), n.fill(), E !== 0 && n.stroke();
            }
            n.restore();
        }, v = function(M, S, k) {
            yt(n, k.text, M, S + b / 2, c, {
                strikethrough: k.hidden,
                textAlign: l.textAlign(k.textAlign)
            });
        }, y = this.isHorizontal(), _ = this._computeTitleHeight();
        y ? g = {
            x: Y(o, this.left + d, this.right - s[0]),
            y: this.top + d + _,
            line: 0
        } : g = {
            x: this.left + d,
            y: Y(o, this.top + _ + d, this.bottom - e[0].height),
            line: 0
        }, Ni(this.ctx, t.textDirection);
        let w = b + d;
        this.legendItems.forEach((M, S)=>{
            n.strokeStyle = M.fontColor || h, n.fillStyle = M.fontColor || h;
            let k = n.measureText(M.text).width, E = l.textAlign(M.textAlign || (M.textAlign = a.textAlign)), T = p + f + k, A = g.x, H = g.y;
            l.setWidth(this.width), y ? S > 0 && A + T + d > this.right && (H = g.y += w, g.line++, A = g.x = Y(o, this.left + d, this.right - s[g.line])) : S > 0 && H + w > this.bottom && (A = g.x = A + e[g.line].width + d, g.line++, H = g.y = Y(o, this.top + _ + d, this.bottom - e[g.line].height));
            let K = l.x(A);
            x(K, H, M), A = Ds(E, A + p + f, y ? A + T : this.right, t.rtl), v(l.x(A), H, M), y ? g.x += T + d : g.y += w;
        }), Hi(this.ctx, t.textDirection);
    }
    drawTitle() {
        let t = this.options, e = t.title, s = j(e.font), n = X(e.padding);
        if (!e.display) return;
        let o = Dt(t.rtl, this.left, this.width), a = this.ctx, r = e.position, l = s.size / 2, c = n.top + l, h, d = this.left, u = this.width;
        if (this.isHorizontal()) u = Math.max(...this.lineWidths), h = this.top + c, d = Y(t.align, d, this.right - u);
        else {
            let g = this.columnSizes.reduce((p, m)=>Math.max(p, m.height)
            , 0);
            h = c + Y(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
        }
        let f = Y(r, d, d + u);
        a.textAlign = o.textAlign(Ie(r)), a.textBaseline = "middle", a.strokeStyle = e.color, a.fillStyle = e.color, a.font = s.string, yt(a, e.text, f, h, s);
    }
    _computeTitleHeight() {
        let t = this.options.title, e = j(t.font), s = X(t.padding);
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
            n && !o && B(e.onLeave, [
                t,
                n,
                this
            ], this), this._hoveredItem = s, s && !o && B(e.onHover, [
                t,
                s,
                this
            ], this);
        } else s && B(e.onClick, [
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
                    let r = a.controller.getStyle(e ? 0 : void 0), l = X(r.borderWidth);
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
        this._padding = X(s.padding);
        let o = n * j(s.font).lineHeight + this._padding.height;
        this.isHorizontal() ? this.height = o : this.width = o;
    }
    isHorizontal() {
        let t = this.options.position;
        return t === "top" || t === "bottom";
    }
    _drawArgs(t) {
        let { top: e , left: s , bottom: n , right: o , options: a  } = this, r = a.align, l = 0, c, h, d;
        return this.isHorizontal() ? (h = Y(r, s, o), d = e + t, c = o - s) : (a.position === "left" ? (h = s + t, d = Y(r, n, e), l = V * -0.5) : (h = o - t, d = Y(r, e, n), l = V * 0.5), c = n - e), {
            titleX: h,
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
            textAlign: Ie(e.align),
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
}, pe = {
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
                let c = l.getCenterPoint(), h = Fe(t, c);
                h < n && (n = h, r = l);
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
    let e = i.chart.ctx, { body: s , footer: n , title: o  } = i, { boxWidth: a , boxHeight: r  } = t, l = j(t.bodyFont), c = j(t.titleFont), h = j(t.footerFont), d = o.length, u = n.length, f = s.length, g = X(t.padding), p = g.height, m = 0, b = s.reduce((y, _)=>y + _.before.length + _.lines.length + _.after.length
    , 0);
    if (b += i.beforeBody.length + i.afterBody.length, d && (p += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), b) {
        let y = t.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight;
        p += f * y + (b - f) * l.lineHeight + (b - 1) * t.bodySpacing;
    }
    u && (p += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
    let x = 0, v = function(y) {
        m = Math.max(m, e.measureText(y).width + x);
    };
    return e.save(), e.font = c.string, R(i.title, v), e.font = l.string, R(i.beforeBody.concat(i.afterBody), v), x = t.displayColors ? a + 2 + t.boxPadding : 0, R(s, (y)=>{
        R(y.before, v), R(y.lines, v), R(y.after, v);
    }), x = 0, e.font = h.string, R(i.footer, v), e.restore(), m += g.width, {
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
    let { caretSize: n , caretPadding: o , cornerRadius: a  } = i, { xAlign: r , yAlign: l  } = e, c = n + o, { topLeft: h , topRight: d , bottomLeft: u , bottomRight: f  } = Ct(a), g = cc(t, r), p = hc(t, l, c);
    return l === "center" ? r === "left" ? g += c : r === "right" && (g -= c) : r === "left" ? g -= Math.max(h, u) + n : r === "right" && (g += Math.max(d, f) + n), {
        x: $(g, 0, s.width - t.width),
        y: $(p, 0, s.height - t.height)
    };
}
function Ze(i, t, e) {
    let s = X(e.padding);
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
        return t.filter && (r = r.filter((h, d, u)=>t.filter(h, d, u, s)
        )), t.itemSort && (r = r.sort((h, d)=>t.itemSort(h, d, s)
        )), R(r, (h)=>{
            let d = $n(t.callbacks, h);
            n.push(d.labelColor.call(this, h)), o.push(d.labelPointStyle.call(this, h)), a.push(d.labelTextColor.call(this, h));
        }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = a, this.dataPoints = r, r;
    }
    update(t, e) {
        let s = this.options.setContext(this.getContext()), n = this._active, o, a = [];
        if (!n.length) this.opacity !== 0 && (o = {
            opacity: 0
        });
        else {
            let r = pe[s.position].call(this, n, this._eventPosition);
            a = this._createItems(s), this.title = this.getTitle(a, s), this.beforeBody = this.getBeforeBody(a, s), this.body = this.getBody(a, s), this.afterBody = this.getAfterBody(a, s), this.footer = this.getFooter(a, s);
            let l = this._size = Wn(this, s), c = Object.assign({}, r, l), h = Nn(this.chart, s, c), d = Hn(s, c, h, this.chart);
            this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
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
        let { xAlign: n , yAlign: o  } = this, { caretSize: a , cornerRadius: r  } = s, { topLeft: l , topRight: c , bottomLeft: h , bottomRight: d  } = Ct(r), { x: u , y: f  } = t, { width: g , height: p  } = e, m, b, x, v, y, _;
        return o === "center" ? (y = f + p / 2, n === "left" ? (m = u, b = m - a, v = y + a, _ = y - a) : (m = u + g, b = m + a, v = y - a, _ = y + a), x = m) : (n === "left" ? b = u + Math.max(l, h) + a : n === "right" ? b = u + g - Math.max(c, d) - a : b = this.caretX, o === "top" ? (v = f, y = v - a, m = b - a, x = b + a) : (v = f + p, y = v + a, m = b + a, x = b - a), _ = v), {
            x1: m,
            x2: b,
            x3: x,
            y1: v,
            y2: y,
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
        let a = this.labelColors[s], r = this.labelPointStyles[s], { boxHeight: l , boxWidth: c , boxPadding: h  } = o, d = j(o.bodyFont), u = Ze(this, "left", o), f = n.x(u), g = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0, p = e.y + g;
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
            let m = n.leftForLtr(f, c - h), b = n.leftForLtr(n.xPlus(f, 1), c - h - 2), x = Ct(a.borderRadius);
            Object.values(x).some((v)=>v !== 0
            ) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, ae(t, {
                x: m,
                y: p,
                w: c,
                h: l,
                radius: x
            }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), ae(t, {
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
        let { body: n  } = this, { bodySpacing: o , bodyAlign: a , displayColors: r , boxHeight: l , boxWidth: c , boxPadding: h  } = s, d = j(s.bodyFont), u = d.lineHeight, f = 0, g = Dt(s.rtl, this.x, this.width), p = function(S) {
            e.fillText(S, g.x(t.x + f), t.y + u / 2), t.y += u + o;
        }, m = g.textAlign(a), b, x, v, y, _, w, M;
        for(e.textAlign = a, e.textBaseline = "middle", e.font = d.string, t.x = Ze(this, m, s), e.fillStyle = s.bodyColor, R(this.beforeBody, p), f = r && m !== "right" ? a === "center" ? c / 2 + h : c + 2 + h : 0, y = 0, w = n.length; y < w; ++y){
            for(b = n[y], x = this.labelTextColors[y], e.fillStyle = x, R(b.before, p), v = b.lines, r && v.length && (this._drawColorBox(e, t, y, g, s), u = Math.max(d.lineHeight, l)), _ = 0, M = v.length; _ < M; ++_)p(v[_]), u = d.lineHeight;
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
        let { xAlign: o , yAlign: a  } = this, { x: r , y: l  } = t, { width: c , height: h  } = s, { topLeft: d , topRight: u , bottomLeft: f , bottomRight: g  } = Ct(n.cornerRadius);
        e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(r + d, l), a === "top" && this.drawCaret(t, e, s, n), e.lineTo(r + c - u, l), e.quadraticCurveTo(r + c, l, r + c, l + u), a === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(r + c, l + h - g), e.quadraticCurveTo(r + c, l + h, r + c - g, l + h), a === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(r + f, l + h), e.quadraticCurveTo(r, l + h, r, l + h - f), a === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(r, l + d), e.quadraticCurveTo(r, l, r + d, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
    }
    _updateAnimationTarget(t) {
        let e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
        if (n || o) {
            let a = pe[t.position].call(this, this._active, this._eventPosition);
            if (!a) return;
            let r = this._size = Wn(this, t), l = Object.assign({}, a, this._size), c = Nn(e, t, l), h = Hn(t, l, c, e);
            (n._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = r.width, this.height = r.height, this.caretX = a.x, this.caretY = a.y, this._resolveAnimations().update(this, h));
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
        let a = X(e.padding), r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
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
        }), o = !ee(s, n), a = this._positionChanged(n, e);
        (o || a) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
    }
    handleEvent(t, e, s = !0) {
        if (e && this._ignoreReplayEvents) return !1;
        this._ignoreReplayEvents = !1;
        let n = this.options, o = this._active || [], a = this._getActiveElements(t, o, e, s), r = this._positionChanged(a, t), l = e || !ee(a, o) || r;
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
        let { caretX: s , caretY: n , options: o  } = this, a = pe[o.position].call(this, t, e);
        return a !== !1 && (s !== a.x || n !== a.y);
    }
};
si.positioners = pe;
var uc = {
    id: "tooltip",
    _element: si,
    positioners: pe,
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
, be = class extends wt {
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
        return e = isFinite(e) && s[e] === t ? e : pc(s, t, P(e, t), this._addedLabels), mc(e, s.length - 1);
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
be.id = "category";
be.defaults = {
    ticks: {
        callback: be.prototype.getLabelForValue
    }
};
function bc(i, t) {
    let e = [], { bounds: n , step: o , min: a , max: r , precision: l , count: c , maxTicks: h , maxDigits: d , includeBounds: u  } = i, f = o || 1, g = h - 1, { min: p , max: m  } = t, b = !L(a), x = !L(r), v = !L(c), y = (m - p) / (d + 1), _ = vi((m - p) / g / f) * f, w, M, S, k;
    if (_ < 0.00000000000001 && !b && !x) return [
        {
            value: p
        },
        {
            value: m
        }
    ];
    k = Math.ceil(m / _) - Math.floor(p / _), k > g && (_ = vi(k * _ / g / f) * f), L(l) || (w = Math.pow(10, l), _ = Math.ceil(_ * w) / w), n === "ticks" ? (M = Math.floor(p / _) * _, S = Math.ceil(m / _) * _) : (M = p, S = m), b && x && o && Es((r - a) / o, _ / 1000) ? (k = Math.round(Math.min((r - a) / _, h)), _ = (r - a) / k, M = a, S = r) : v ? (M = b ? a : M, S = x ? r : S, k = c - 1, _ = (S - M) / k) : (k = (S - M) / _, It(k, Math.round(k), _ / 1000) ? k = Math.round(k) : k = Math.ceil(k));
    let E = Math.max(wi(_), wi(M));
    w = Math.pow(10, L(l) ? E : l), M = Math.round(M * w) / w, S = Math.round(S * w) / w;
    let T = 0;
    for(b && (u && M !== a ? (e.push({
        value: a
    }), M < a && T++, It(Math.round((M + T * _) * w) / w, a, Yn(a, y, i)) && T++) : M < a && T++); T < k; ++T)e.push({
        value: Math.round((M + T * _) * w) / w
    });
    return x && u && S !== r ? e.length && It(e[e.length - 1].value, r, Yn(r, y, i)) ? e[e.length - 1].value = r : e.push({
        value: r
    }) : (!x || S === r) && e.push({
        value: S
    }), e;
}
function Yn(i, t, { horizontal: e , minRotation: s  }) {
    let n = et(s), o = (e ? Math.sin(n) : Math.cos(n)) || 0.001, a = 0.75 * t * ("" + i).length;
    return Math.min(t / o, a);
}
var xe = class extends wt {
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
        return t.bounds === "ticks" && Mi(a, this, "value"), t.reverse ? (a.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), a;
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
}, ri = class extends xe {
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
    return i / Math.pow(10, Math.floor(Q(i))) === 1;
}
function xc(i, t) {
    let e = Math.floor(Q(t.max)), s = Math.ceil(t.max / Math.pow(10, e)), n = [], o = J(i.min, Math.pow(10, Math.floor(Q(t.min)))), a = Math.floor(Q(o)), r = Math.floor(o / Math.pow(10, a)), l = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
    do n.push({
        value: o,
        major: Xn(o)
    }), ++r, r === 10 && (r = 1, ++a, l = a >= 0 ? 1 : l), o = Math.round(r * Math.pow(10, a) * l) / l;
    while (a < e || a === e && r < s)
    let c = J(i.max, o);
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
        let s = xe.prototype.parse.apply(this, [
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
        , r = (l, c)=>Math.pow(10, Math.floor(Q(l)) + c)
        ;
        s === n && (s <= 0 ? (o(1), a(10)) : (o(r(s, -1)), a(r(n, 1)))), s <= 0 && o(r(n, -1)), n <= 0 && a(r(s, 1)), this._zero && this.min !== this._suggestedMin && s === r(this.min, 0) && o(r(s, -1)), this.min = s, this.max = n;
    }
    buildTicks() {
        let t = this.options, e = {
            min: this._userMin,
            max: this._userMax
        }, s = xc(e, this);
        return t.bounds === "ticks" && Mi(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s;
    }
    getLabelForValue(t) {
        return t === void 0 ? "0" : Wt(t, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
        let t = this.min;
        super.configure(), this._startValue = Q(t), this._valueRange = Q(this.max) - Q(t);
    }
    getPixelForValue(t) {
        return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (Q(t) - this._startValue) / this._valueRange);
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
        let e = X(t.backdropPadding);
        return P(t.font && t.font.size, D.font.size) + e.height;
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
    }, e = Object.assign({}, t), s = [], n = [], o = i._pointLabels.length, a = i.options.pointLabels, r = a.centerPointLabels ? V / o : 0;
    for(let l = 0; l < o; l++){
        let c = a.setContext(i.getPointLabelContext(l));
        n[l] = c.padding;
        let h = i.getPointPosition(l, i.drawingArea + n[l], r), d = j(c.font), u = _c(i.ctx, d, i._pointLabels[l]);
        s[l] = u;
        let f = q(i.getIndexAngle(l) + r), g = Math.round(Ve(f)), p = Un(g, h.x, u.w, 0, 180), m = Un(g, h.y, u.h, 90, 270);
        vc(e, t, f, p, m);
    }
    i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = Mc(i, s, n);
}
function vc(i, t, e, s, n) {
    let o = Math.abs(Math.sin(e)), a = Math.abs(Math.cos(e)), r = 0, l = 0;
    s.start < t.l ? (r = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - r)) : s.end > t.r && (r = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + r)), n.start < t.t ? (l = (t.t - n.start) / a, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / a, i.b = Math.max(i.b, t.b + l));
}
function Mc(i, t, e) {
    let s = [], n = i._pointLabels.length, o = i.options, a = as(o) / 2, r = i.drawingArea, l = o.pointLabels.centerPointLabels ? V / n : 0;
    for(let c = 0; c < n; c++){
        let h = i.getPointPosition(c, r + a + e[c], l), d = Math.round(Ve(q(h.angle + W))), u = t[c], f = Sc(h.y, u.h, d), g = wc(d), p = kc(h.x, u.w, g);
        s.push({
            x: h.x,
            y: f,
            textAlign: g,
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
        let o = s.setContext(i.getPointLabelContext(n)), a = j(o.font), { x: r , y: l , textAlign: c , left: h , top: d , right: u , bottom: f  } = i._pointLabelItems[n], { backdropColor: g  } = o;
        if (!L(g)) {
            let p = X(o.backdropPadding);
            e.fillStyle = g, e.fillRect(h - p.left, d - p.top, u - h + p.width, f - d + p.height);
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
var jt = class extends xe {
    constructor(t){
        super(t);
        this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
    }
    setDimensions() {
        let t = this._padding = X(as(this.options) / 2), e = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
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
        xe.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s)=>{
            let n = B(this.options.pointLabels.callback, [
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
        let n = this.getIndexAngle(t) - W + s;
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
        if (e.pointLabels.display && Pc(this, o), n.display && this.ticks.forEach((c, h)=>{
            if (h !== 0) {
                r = this.getDistanceFromCenterForValue(c.value);
                let d = n.setContext(this.getContext(h - 1));
                Cc(this, d, r, o);
            }
        }), s.display) {
            for(t.save(), a = o - 1; a >= 0; a--){
                let c = s.setContext(this.getPointLabelContext(a)), { color: h , lineWidth: d  } = c;
                !d || !h || (t.lineWidth = d, t.strokeStyle = h, t.setLineDash(c.borderDash), t.lineDashOffset = c.borderDashOffset, r = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), l = this.getPointPosition(a, r), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(l.x, l.y), t.stroke());
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
            let c = s.setContext(this.getContext(l)), h = j(c.font);
            if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
                t.font = h.string, a = t.measureText(r.label).width, t.fillStyle = c.backdropColor;
                let d = X(c.backdropPadding);
                t.fillRect(-a / 2 - d.left, -o - h.size / 2 - d.top, a + d.width, h.size + d.height);
            }
            yt(t, r.label, 0, -o, h, {
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
}, G = Object.keys(ci);
function Oc(i, t) {
    return i - t;
}
function Kn(i, t) {
    if (L(t)) return null;
    let e = i._adapter, { parser: s , round: n , isoWeekday: o  } = i._parseOpts, a = t;
    return typeof s == "function" && (a = s(a)), N(a) || (a = typeof s == "string" ? e.parse(a, s) : e.parse(a)), a === null ? null : (n && (a = n === "week" && (zt(o) || o === !0) ? e.startOf(a, "isoWeek", o) : e.startOf(a, n)), +a);
}
function qn(i, t, e, s) {
    let n = G.length;
    for(let o = G.indexOf(i); o < n - 1; ++o){
        let a = ci[G[o]], r = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
        if (a.common && Math.ceil((e - t) / (r * a.size)) <= s) return G[o];
    }
    return G[n - 1];
}
function Ac(i, t, e, s, n) {
    for(let o = G.length - 1; o >= G.indexOf(e); o--){
        let a = G[o];
        if (ci[a].common && i._adapter.diff(n, s, a) >= t - 1) return a;
    }
    return G[e ? G.indexOf(e) : 0];
}
function Lc(i) {
    for(let t = G.indexOf(i) + 1, e = G.length; t < e; ++t)if (ci[G[t]].common) return G[t];
}
function Gn(i, t, e) {
    if (!e) i[t] = !0;
    else if (e.length) {
        let { lo: s , hi: n  } = je(e, t), o = e[s] >= t ? e[s] : e[n];
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
        let t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, a = o.unit || qn(o.minUnit, e, s, this._getLabelCapacity(e)), r = P(o.stepSize, 1), l = a === "week" ? o.isoWeekday : !1, c = zt(l) || l === !0, h = {}, d = e, u, f;
        if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : a), t.diff(s, e, a) > 100000 * r) throw new Error(e + " and " + s + " are too far apart with stepSize of " + r + " " + a);
        let g = n.ticks.source === "data" && this.getDataTimestamps();
        for(u = d, f = 0; u < s; u = +t.add(u, r, a), f++)Gn(h, u, g);
        return (u === s || n.bounds === "ticks" || f === 1) && Gn(h, u, g), Object.keys(h).sort((p, m)=>p - m
        ).map((p)=>+p
        );
    }
    getLabelForValue(t) {
        let e = this._adapter, s = this.options.time;
        return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime);
    }
    _tickFormatFunction(t, e, s, n) {
        let o = this.options, a = o.time.displayFormats, r = this._unit, l = this._majorUnit, c = r && a[r], h = l && a[l], d = s[e], u = l && h && d && d.major, f = this._adapter.format(t, n || (u ? h : c)), g = o.ticks.callback;
        return g ? B(g, [
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
        return Ri(t.sort(Oc));
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
        let { min: e , max: s  } = this, n = [], o = [], a, r, l, c, h;
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
        for(a = 0, r = n.length; a < r; ++a)h = n[a + 1], l = n[a - 1], c = n[a], Math.round((h + l) / 2) !== c && o.push({
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
    CategoryScale: be,
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
class MonteCarloInputs {
    years = 50;
    savings = 1000000;
    withdrawalRate = 0.04;
    stocks = 0.5;
    bonds = 0.3;
    cash = 0.2;
}
let historicalData;
if ("Deno" in window) {
    historicalData = JSON.parse(await Deno.readTextFile("./data/historicalMarketData.json"));
} else {
    historicalData = await (await fetch("./data/historicalMarketData.json")).json();
}
const MONTE_CARLO = {
    inputs: new MonteCarloInputs(),
    historicalData: historicalData,
    TOTAL_TRIALS: 100000,
    MAX_YEARS: 50
};
function runMonteCarlo(quantiles) {
    let total;
    let error;
    if (isNaN(MONTE_CARLO.inputs.years) || MONTE_CARLO.inputs.years < 5 || MONTE_CARLO.inputs.years > 50) {
        error = "Invalid years";
    }
    if (isNaN(MONTE_CARLO.inputs.withdrawalRate) || MONTE_CARLO.inputs.withdrawalRate > 0.2) {
        error = "Invalid withdrawal rate";
    }
    if (isNaN(MONTE_CARLO.inputs.savings) || MONTE_CARLO.inputs.savings === 0) {
        error = "Invalid savings";
    }
    if (isNaN(MONTE_CARLO.inputs.stocks) || isNaN(MONTE_CARLO.inputs.bonds) || isNaN(MONTE_CARLO.inputs.cash)) {
        error = "Invalid allocation";
    } else {
        total = MONTE_CARLO.inputs.stocks + MONTE_CARLO.inputs.bonds + MONTE_CARLO.inputs.cash;
        if (total > 0) {
            MONTE_CARLO.inputs.stocks /= total;
            MONTE_CARLO.inputs.bonds /= total;
            MONTE_CARLO.inputs.cash /= total;
        } else {
            error = "Invalid allocation";
        }
    }
    if (error === undefined) {
        trace("savings: " + MONTE_CARLO.inputs.savings + " years: " + MONTE_CARLO.inputs.years + " withdrawalRate: " + MONTE_CARLO.inputs.withdrawalRate + " stocks: " + MONTE_CARLO.inputs.stocks + " bonds: " + MONTE_CARLO.inputs.bonds + " cash: " + MONTE_CARLO.inputs.cash);
        const trials = simulateDecumulation();
        trace("Simulation complete, computing stats.");
        const simulationStats = computeStats(trials, quantiles);
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
function simulateDecumulation() {
    const trials = {};
    const initialWithdrawal = MONTE_CARLO.inputs.savings * MONTE_CARLO.inputs.withdrawalRate;
    for(let y = 1; y <= MONTE_CARLO.MAX_YEARS; y++){
        trials[y] = {};
    }
    for(let trial = 0; trial < MONTE_CARLO.TOTAL_TRIALS; trial++){
        let balance = MONTE_CARLO.inputs.savings;
        let withdrawal = initialWithdrawal;
        for(let year = 1; year <= MONTE_CARLO.MAX_YEARS; year++){
            const randomYear = Math.floor(Math.random() * MONTE_CARLO.historicalData.length);
            withdrawal *= 1 + MONTE_CARLO.historicalData[randomYear].cpi;
            const startingBalance = balance;
            const arr = MONTE_CARLO.historicalData[randomYear].stocks * MONTE_CARLO.inputs.stocks + MONTE_CARLO.historicalData[randomYear].bonds * MONTE_CARLO.inputs.bonds + MONTE_CARLO.historicalData[randomYear].cash * MONTE_CARLO.inputs.cash;
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
function computeStats(trials, quantiles) {
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
            min: MONTE_CARLO.inputs.savings,
            max: MONTE_CARLO.inputs.savings,
            mean: MONTE_CARLO.inputs.savings,
            median: MONTE_CARLO.inputs.savings,
            stddev: 0,
            quantiles: []
        };
        for(let q1 = 1; q1 < quantiles; q1++){
            if (year1 === 0) {
                results[0].quantiles.push(MONTE_CARLO.inputs.savings);
            } else {
                let index = Math.floor(MONTE_CARLO.TOTAL_TRIALS * (q1 / quantiles));
                if (index >= MONTE_CARLO.TOTAL_TRIALS) {
                    index = MONTE_CARLO.TOTAL_TRIALS - 1;
                }
                results[year1].quantiles.push(sortedTrials[year1 - 1][index].endingBalance);
            }
        }
        if (year1 === 0) continue;
        results[year1].min = sortedTrials[year1 - 1][0].endingBalance;
        results[year1].median = sortedTrials[year1 - 1][Math.floor(MONTE_CARLO.TOTAL_TRIALS * 0.5)].endingBalance;
        results[year1].max = sortedTrials[year1 - 1][MONTE_CARLO.TOTAL_TRIALS - 1].endingBalance;
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
    arr = arr.map((k)=>{
        return (k - mean) ** 2;
    });
    const sum = arr.reduce((acc, curr)=>acc + curr
    , 0);
    return Math.sqrt(sum / arr.length);
}
function drawChart(ctx, simulationStats) {
    hs.register(...zc);
    new hs(ctx, {
        type: 'line',
        data: {
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
        },
        options: {}
    });
}
export { MonteCarloInputs as MonteCarloInputs };
export { runMonteCarlo as runMonteCarlo };
export { drawChart as drawChart };
