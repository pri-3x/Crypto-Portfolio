import {
    a7 as t,
    j as e,
    P as l,
    cK as d,
    T as a,
    i as s
} from "./bootstrap-7c5c33c8.js";
const i = () => {
    const {
        t: r
    } = t();
    return e.jsx(l, {
        children: e.jsx("div", {
            className: "m-auto md:border md:border-muted !bg-inherit md:!bg-default rounded-xl relative overflow-hidden p-6 w-full max-w-md",
            children: e.jsxs("div", {
                className: "p-8 space-y-4 flex flex-col",
                children: [e.jsx(d, {
                    className: "stroke-error-inverse fill-error-default w-9 h-9 mx-auto mb-8"
                }), e.jsx(a, {
                    scale: s.ParagraphBase,
                    bold: !0,
                    center: !0,
                    children: r("ramp.errorTitle")
                }), e.jsx(a, {
                    scale: s.ParagraphSm,
                    subdued: !0,
                    center: !0,
                    children: r("ramp.errorMessage")
                })]
            })
        })
    })
};
export {
    i as G
};