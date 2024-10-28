import {
    r as g,
    aj as c,
    d8 as l,
    j as t,
    f1 as i
} from "./bootstrap-7c5c33c8.js";
import {
    L as j
} from "./LoadingPulseCircle-5fb146d3.js";

function p() {
    return p = Object.assign || function(e) {
        for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
        }
        return e
    }, p.apply(this, arguments)
}

function m(e, a) {
    if (e == null) return {};
    var s = x(e, a),
        r, n;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++) r = o[n], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
    }
    return s
}

function x(e, a) {
    if (e == null) return {};
    var s = {},
        r = Object.keys(e),
        n, o;
    for (o = 0; o < r.length; o++) n = r[o], !(a.indexOf(n) >= 0) && (s[n] = e[n]);
    return s
}
var d = g.forwardRef(function(e, a) {
    var s = e.color,
        r = s === void 0 ? "currentColor" : s,
        n = e.size,
        o = n === void 0 ? 24 : n,
        f = m(e, ["color", "size"]);
    return c.createElement("svg", p({
        ref: a,
        xmlns: "http://www.w3.org/2000/svg",
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: r,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, f), c.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
    }), c.createElement("polyline", {
        points: "12 6 12 12 16 14"
    }))
});
d.propTypes = {
    color: l.string,
    size: l.oneOfType([l.string, l.number])
};
d.displayName = "Clock";
const h = d,
    v = () => t.jsx(c.Fragment, {
        children: [1, 2, 3].map(e => t.jsxs("tr", {
            "data-testid": "table-loading-component",
            className: "animate-pulse w-full grid grid-cols-2 3 lg:grid-cols-4",
            children: [t.jsxs("td", {
                className: "py-4 flex gap-6 md:gap-8 items-center",
                children: [t.jsx(j, {}), t.jsxs("div", {
                    className: "flex-1 space-y-2",
                    children: [t.jsx(i, {}), t.jsx(i, {})]
                })]
            }), t.jsxs("td", {
                className: "py-4 space-y-2 hidden lg:table-cell",
                children: [t.jsx(i, {}), t.jsx(i, {})]
            }), t.jsxs("td", {
                className: "py-4 space-y-2",
                children: [t.jsx(i, {}), t.jsx(i, {})]
            }), t.jsxs("td", {
                className: "px-4 py-4 space-y-2 hidden lg:table-cell",
                children: [t.jsx(i, {}), t.jsx(i, {})]
            })]
        }, e))
    });
export {
    h as C, v as T
};