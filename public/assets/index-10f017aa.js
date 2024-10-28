import {
    j as e,
    t as m,
    T as l,
    i as r
} from "./bootstrap-7c5c33c8.js";
const p = ({
    subtitle: a,
    title: c,
    button: s,
    icon: x,
    className: d,
    transparent: n,
    bottomText: t
}) => e.jsxs("div", {
    "data-testid": "table-empty-component",
    className: m("bg-default rounded-lg py-6 flex flex-col items-center justify-center gap-2", {
        "bg-transparent": n
    }, d),
    children: [e.jsx("div", {
        className: "rounded-full max-w-min p-2 bg-default-pressed",
        children: x
    }), e.jsx(l, {
        className: "text-center font-bold",
        scale: r.ParagraphBase,
        children: c
    }), a && e.jsx(l, {
        className: "text-xs sm:text-sm text-center text-alternative max-w-[90%]",
        scale: r.ParagraphXs,
        children: a
    }), s && e.jsx("div", {
        className: "mt-2",
        children: s
    }), t && e.jsx("div", {
        className: "mt-4 text-xs",
        children: t
    })]
});
export {
    p as F
};