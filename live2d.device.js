!function(n) {
    function o(t) {
        if (e[t])
            return e[t].exports;
        var r = e[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return n[t].call(r.exports, r, r.exports, o),
        r.l = !0,
        r.exports
    }
    var e = {};
    o.m = n,
    o.c = e,
    o.d = function(n, e, t) {
        o.o(n, e) || Object.defineProperty(n, e, {
            configurable: !1,
            enumerable: !0,
            get: t
        })
    }
    ,
    o.n = function(n) {
        var e = n && n.__esModule ? function() {
            return n.default
        }
        : function() {
            return n
        }
        ;
        return o.d(e, "a", e),
        e
    }
    ,
    o.o = function(n, o) {
        return Object.prototype.hasOwnProperty.call(n, o)
    }
    ,
    o.p = "",
    o(o.s = 0)
}([function(n, o, e) {
    n.exports = e(1)
}
, function(n, o, e) {
    "use strict";
    o.__esModule = !0;
    var t, r, i, a, d, c, u, l, s, b, w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
        return typeof n
    }
    : function(n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }
    ;
    r = window.device,
    t = {},
    window.device = t,
    a = window.document.documentElement,
    b = window.navigator.userAgent.toLowerCase(),
    t.macos = function() {
        return d("mac")
    }
    ,
    t.ios = function() {
        return t.iphone() || t.ipod() || t.ipad()
    }
    ,
    t.iphone = function() {
        return !t.windows() && d("iphone")
    }
    ,
    t.ipod = function() {
        return d("ipod")
    }
    ,
    t.ipad = function() {
        return d("ipad")
    }
    ,
    t.android = function() {
        return !t.windows() && d("android")
    }
    ,
    t.androidPhone = function() {
        return t.android() && d("mobile")
    }
    ,
    t.androidTablet = function() {
        return t.android() && !d("mobile")
    }
    ,
    t.blackberry = function() {
        return d("blackberry") || d("bb10") || d("rim")
    }
    ,
    t.blackberryPhone = function() {
        return t.blackberry() && !d("tablet")
    }
    ,
    t.blackberryTablet = function() {
        return t.blackberry() && d("tablet")
    }
    ,
    t.windows = function() {
        return d("windows")
    }
    ,
    t.windowsPhone = function() {
        return t.windows() && d("phone")
    }
    ,
    t.windowsTablet = function() {
        return t.windows() && d("touch") && !t.windowsPhone()
    }
    ,
    t.fxos = function() {
        return (d("(mobile;") || d("(tablet;")) && d("; rv:")
    }
    ,
    t.fxosPhone = function() {
        return t.fxos() && d("mobile")
    }
    ,
    t.fxosTablet = function() {
        return t.fxos() && d("tablet")
    }
    ,
    t.meego = function() {
        return d("meego")
    }
    ,
    t.cordova = function() {
        return window.cordova && "file:" === location.protocol
    }
    ,
    t.nodeWebkit = function() {
        return "object" === w(window.process)
    }
    ,
    t.mobile = function() {
        return t.androidPhone() || t.iphone() || t.ipod() || t.windowsPhone() || t.blackberryPhone() || t.fxosPhone() || t.meego()
    }
    ,
    t.tablet = function() {
        return t.ipad() || t.androidTablet() || t.blackberryTablet() || t.windowsTablet() || t.fxosTablet()
    }
    ,
    t.desktop = function() {
        return !t.tablet() && !t.mobile()
    }
    ,
    t.television = function() {
        var n, o = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"];
        for (n = 0; n < o.length; ) {
            if (d(o[n]))
                return !0;
            n++
        }
        return !1
    }
    ,
    t.portrait = function() {
        return window.innerHeight / window.innerWidth > 1
    }
    ,
    t.landscape = function() {
        return window.innerHeight / window.innerWidth < 1
    }
    ,
    t.noConflict = function() {
        return window.device = r,
        this
    }
    ,
    d = function(n) {
        return -1 !== b.indexOf(n)
    }
    ,
    u = function(n) {
        var o;
        return o = new RegExp(n,"i"),
        a.className.match(o)
    }
    ,
    i = function(n) {
        var o = null;
        u(n) || (o = a.className.replace(/^\s+|\s+$/g, ""),
        a.className = o + " " + n)
    }
    ,
    s = function(n) {
        u(n) && (a.className = a.className.replace(" " + n, ""))
    }
    ,
    t.ios() ? t.ipad() ? i("ios ipad tablet") : t.iphone() ? i("ios iphone mobile") : t.ipod() && i("ios ipod mobile") : t.macos() ? i("macos desktop") : t.android() ? i(t.androidTablet() ? "android tablet" : "android mobile") : t.blackberry() ? i(t.blackberryTablet() ? "blackberry tablet" : "blackberry mobile") : t.windows() ? i(t.windowsTablet() ? "windows tablet" : t.windowsPhone() ? "windows mobile" : "windows desktop") : t.fxos() ? i(t.fxosTablet() ? "fxos tablet" : "fxos mobile") : t.meego() ? i("meego mobile") : t.nodeWebkit() ? i("node-webkit") : t.television() ? i("television") : t.desktop() && i("desktop"),
    t.cordova() && i("cordova"),
    c = function() {
        t.landscape() ? (s("portrait"),
        i("landscape")) : (s("landscape"),
        i("portrait"))
    }
    ,
    l = Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? "orientationchange" : "resize",
    window.addEventListener ? window.addEventListener(l, c, !1) : window.attachEvent ? window.attachEvent(l, c) : window[l] = c,
    c(),
    o.default = t,
    n.exports = o.default
}
]);
