import {
    aD as n,
    aH as r,
    j as e,
    gC as k,
    pW as a,
    er as m,
    cJ as S,
    pX as h,
    dp as g,
    pY as E,
    k6 as p,
    t as f,
    az as w,
    pa as N
} from "./bootstrap-7c5c33c8.js";
const x = {
        BUY: {
            name: n.BUY,
            href: r.BUY,
            startIcon: e.jsx(k, {
                className: "w-4 h-4"
            }),
            trackingId: a.Buy
        },
        SWAP: {
            name: n.SWAP,
            href: r.SWAP,
            startIcon: e.jsx(m, {
                className: "w-4 h-4"
            }),
            trackingId: a.Swap
        },
        SEND: {
            name: n.SEND,
            href: r.SEND,
            startIcon: e.jsx(S, {
                className: "w-4 h-4"
            }),
            trackingId: a.Send
        },
        BRIDGE: {
            name: n.BRIDGE,
            href: r.BRIDGE,
            startIcon: e.jsx(h, {
                size: 16,
                className: "fill-current"
            }),
            trackingId: a.Bridge
        },
        STAKE: {
            name: n.STAKE,
            href: r.STAKE,
            startIcon: e.jsx(g, {
                className: "stroke-current w-4 h-4"
            }),
            trackingId: a.Stake
        },
        SELL: {
            name: n.SELL,
            href: r.SELL,
            startIcon: e.jsx(E, {
                className: "w-4 h-4"
            }),
            trackingId: a.Sell
        },
        VIEW_TOKENS: {
            name: "View your tokens",
            href: r.PORTFOLIO,
            endIcon: e.jsx(p, {
                className: "w-4 h-4"
            }),
            trackingId: a.ViewTokens
        }
    },
    j = (i, t) => i.map(c => ({ ...x[c],
        ...t == null ? void 0 : t[c]
    })),
    u = ({
        actions: i,
        location: t,
        customTokenActionData: c,
        className: d
    }) => {
        const l = j(i, c);
        return e.jsx("div", {
            className: f("flex items-center gap-4", d),
            children: l == null ? void 0 : l.map(s => {
                const o = s.trackingId === a.ViewTokens;
                return s.displayCondition === !1 ? null : e.jsx(w, {
                    size: "sm",
                    to: s.href,
                    startIcon: s.startIcon,
                    endIcon: s.endIcon,
                    variant: o ? "outline" : "filled",
                    onClick: () => {
                        var I;
                        N({
                            action_type: s.trackingId,
                            location: t
                        }), (I = s.onClick) == null || I.call(s)
                    },
                    children: s.name
                }, s.name)
            })
        })
    };
export {
    u as T, j as g
};