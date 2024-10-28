import {
    j as e,
    cK as r,
    T as s,
    f0 as t
} from "./bootstrap-7c5c33c8.js";
const l = () => e.jsx(e.Fragment, {
    children: e.jsx("tr", {
        className: "w-full h-[200px]",
        "data-testid": "table-error-component",
        children: e.jsxs("td", {
            className: "w-full flex flex-col items-center justify-center my-6",
            children: [e.jsx(r, {
                className: "mb-6 text-error-default"
            }), e.jsx(s, {
                center: !0,
                children: e.jsxs(t, {
                    i18nKey: "main.tableError",
                    children: ["Something went wrong. ", e.jsx("br", {}), " Go outside, get some fresh air, and check back later."]
                })
            })]
        })
    })
});
export {
    l as T
};