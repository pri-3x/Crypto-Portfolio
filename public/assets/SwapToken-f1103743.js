import {
    j as s,
    t as l,
    p3 as o,
    f1 as m,
    a$ as p,
    dH as g,
    er as x,
    ha as h
} from "./bootstrap-7c5c33c8.js";
import {
    L as u
} from "./LoadingPulseCircle-5fb146d3.js";
const d = ["lg:col-span-2", "hidden md:block", "hidden sm:block"],
    k = ({
        avatar: e = !0,
        rows: a = 2,
        columns: i = 3,
        className: n,
        ...t
    }) => s.jsxs("div", {
        className: l("animate-pulse flex items-center space-x-4", n),
        ...t,
        children: [e && s.jsx(u, {}), s.jsx("div", {
            className: "flex-1",
            children: s.jsx("div", {
                className: "items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5 space-x-2",
                children: o(i).map(c => s.jsx("div", {
                    className: l("space-y-2", d[c] || d[d.length - 1]),
                    children: o(a).map(r => s.jsx(m, {}, `row-${r}`))
                }, `column-${c}`))
            })
        })]
    }),
    w = ({
        token: e,
        onClose: a
    }) => {
        const i = p(),
            n = t => {
                const c = `/swap?chainId=${e.chainId}&fromAddress=${e.address}`;
                t.stopPropagation(), h({
                    selected_token: e.symbol,
                    action_type: "swap"
                }), a && a(), i(c)
            };
        return s.jsx(g, {
            Icon: x,
            text: "Swap",
            onClick: n
        })
    };
export {
    k as L, w as S
};