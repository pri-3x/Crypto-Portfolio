import {
    j as e,
    t as u,
    L as j,
    gd as s,
    T as t,
    i as p
} from "./bootstrap-7c5c33c8.js";
const h = ({
    className: a,
    containerClassName: l,
    formattedMarketValue: r,
    balance: n,
    symbol: c,
    variant: i,
    loadingPulseClassName: x,
    loadingPulseContainerClassName: m,
    isLoadingMarketValue: o = !1,
    isShowingBalanceAndSymbol: d = !0,
    trailingIcon: f
}) => e.jsxs("div", {
    className: u("flex flex-col justify-center", l),
    children: [o ? e.jsx(j, {
        className: s("max-w-full h-6 mt-0", x),
        containerClassName: m
    }) : e.jsxs("div", {
        className: "flex items-center gap-2 justify-end md:justify-start",
        children: [e.jsx(t, {
            className: s("font-semibold truncate", a),
            children: r
        }), f]
    }), e.jsx(t, {
        scale: p.ParagraphSm,
        className: s("text-alternative truncate uppercase", i === "large" && "!text-base font-semibold", a),
        children: d && `${n} ${c}`
    })]
});
export {
    h as B
};