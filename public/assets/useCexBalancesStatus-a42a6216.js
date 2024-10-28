import {
    a7 as v,
    b as x,
    r as d,
    aM as g,
    M as p,
    j as n,
    cN as j,
    aP as A,
    ok as w,
    d9 as b,
    aR as k,
    nX as N,
    fv as D,
    db as P,
    fA as E,
    fB as I,
    ol as R,
    dH as h,
    fC as B,
    om as S,
    er as _,
    n_ as O,
    fM as $,
    n$ as T,
    o0 as V,
    u as m,
    fT as y,
    on as z,
    fU as L,
    g3 as H,
    oo as W
} from "./bootstrap-7c5c33c8.js";
var C = {},
    M = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = "fas",
        s = "ellipsis-vertical",
        o = 128,
        l = 512,
        i = ["ellipsis-v"],
        c = "f142",
        u = "M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z";
    e.definition = {
        prefix: a,
        iconName: s,
        icon: [o, l, i, c, u]
    }, e.faEllipsisVertical = e.definition, e.prefix = a, e.iconName = s, e.width = o, e.height = l, e.ligatures = i, e.unicode = c, e.svgPathData = u, e.aliases = i
})(M);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = M;
    e.definition = {
        prefix: a.prefix,
        iconName: a.iconName,
        icon: [a.width, a.height, a.aliases, a.unicode, a.svgPathData]
    }, e.faEllipsisV = e.definition, e.prefix = a.prefix, e.iconName = a.iconName, e.width = a.width, e.height = a.height, e.ligatures = a.aliases, e.unicode = a.unicode, e.svgPathData = a.svgPathData, e.aliases = a.aliases
})(C);
const X = ({
    account: e,
    accountBalances: a
}) => {
    const {
        t: s
    } = v(), o = x(), l = d.useCallback(i => {
        i.preventDefault(), i.stopPropagation(), o(g(p.AccountContextMenu, {
            account: e,
            accountBalances: a
        }))
    }, [o, e, a]);
    return n.jsxs("button", {
        id: `accounts-more-${e.address}`,
        className: "rounded-lg inline-flex justify-center items-center w-6 h-6 text-icon-alternative hover:bg-hover transition-colors",
        "data-tooltip-id": `accountMore-${e.address}`,
        onClick: l,
        children: [n.jsx(j, {
            icon: C.faEllipsisV
        }), n.jsx(A, {
            id: `accountMore-${e.address}`,
            children: s("home.moreActions")
        })]
    })
};

function q({
    account: e,
    accountBalances: a
}) {
    const s = x(),
        [o, l] = d.useState(!1),
        i = d.useRef(null),
        {
            t: c
        } = v(),
        {
            handleTokenBalanceRefetch: u
        } = w();
    b(i, () => l(!1));
    const r = k(e == null ? void 0 : e.chainId);
    return n.jsxs("div", {
        id: "accounts-more-menu",
        ref: i,
        className: "relative sm:inline-block text-left",
        "data-testid": "accounts-more-menu",
        children: [n.jsx("div", {
            className: "flex",
            children: n.jsxs("button", {
                className: "rounded-lg inline-flex justify-center items-center w-6 h-6 hover:bg-hover text-icon-alternative transition-colors",
                onClick: t => {
                    t.preventDefault(), t.stopPropagation(), N({}), l(!o)
                },
                "data-tooltip-id": `accountMore-${e.address}`,
                "aria-label": "Account actions",
                children: [n.jsx(D, {
                    className: "w-4 h-4"
                }), n.jsx(A, {
                    id: `accountMore-${e.address}`,
                    content: c("home.moreActions")
                })]
            })
        }), n.jsxs(P, {
            isOpen: o,
            position: "right",
            className: "w-max p-1 origin",
            children: [!r && n.jsx(E, {
                data: a,
                onClick: t => {
                    t.stopPropagation(), I({
                        download_type: "csv",
                        app_source: "portfolio",
                        download_object: "portfolio_balances"
                    })
                },
                headers: R,
                filename: `account-${e.address}-${new Date().toISOString()}.csv`,
                target: "_blank",
                children: n.jsx(h, {
                    Icon: B,
                    text: c("home.downloadBalances")
                })
            }), !r && n.jsx(h, {
                onClick: t => {
                    t.preventDefault(), t.stopPropagation(), u(), S({})
                },
                Icon: _,
                text: c("home.hardRefreshBalances")
            }), n.jsx(h, {
                onClick: t => {
                    t.preventDefault(), t.stopPropagation(), s(g(p.RenameAccount, {
                        accountAddress: e.address,
                        accountName: e.name
                    })), O({})
                },
                Icon: $,
                text: c("home.rename")
            }), !r && n.jsx(h, {
                onClick: t => {
                    t.preventDefault(), t.stopPropagation(), s(g(p.RemoveAccount, {
                        account: e
                    })), T({})
                },
                Icon: V,
                text: c("home.removeAccount"),
                variant: "red"
            })]
        })]
    })
}
const G = () => {
    const e = m(y),
        a = m(z),
        s = m(L),
        o = m(H),
        l = d.useCallback(r => {
            if (a === "loading") return !0;
            if (r) return o.map(t => t.institutionId).includes(r);
            if (s.length > 1 && o.length > 0) return !0;
            if (s.length === 1) {
                const t = o.map(f => f.institutionId);
                return s.map(f => f.institutionId).some(f => t.includes(f))
            }
            return !1
        }, [a, s, o]),
        i = d.useMemo(() => a === "error" ? (W({}), !0) : !1, [a]),
        c = d.useMemo(() => e.some(r => r.needsRepair), [e]);
    return {
        allSelectedCexAccountsExpired: d.useMemo(() => s.every(r => r.needsRepair), [s]),
        areCexBalancesLoading: l,
        isCexBalancesError: i,
        oneOrMoreCexAccountExpired: c
    }
};
export {
    q as A, X as M, G as u
};