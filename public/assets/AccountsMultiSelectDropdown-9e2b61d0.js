import {
    j as s,
    t as c,
    r as f,
    k as I,
    dK as S,
    ee as b,
    fP as T,
    kI as A,
    dV as _,
    ec as D,
    a7 as E,
    d9 as M,
    u as P,
    aq as B,
    D as L,
    kJ as $,
    aC as g,
    ar as F,
    as as U,
    el as w,
    db as H,
    kK as K,
    ej as R
} from "./bootstrap-7c5c33c8.js";
const q = ({
        children: n,
        maxDisplayed: t,
        isOpen: o,
        size: e = 6,
        className: r,
        overflowClassName: l
    }) => s.jsxs("div", {
        className: c("flex -space-x-1.5", r),
        children: [n.slice(0, t).map(a => f.cloneElement(a, {
            className: c(a.props.className, "rounded-full ring-4 ring-border-muted flex-shrink-0 group-hover:ring-primary-default", `h-${e} w-${e}`, {
                "ring-primary-default": o
            })
        })), n.length > t && s.jsx("div", {
            className: c("flex items-center justify-center rounded-full bg-primary-default !text-primary-inverse border border-primary-default", `h-${e} w-${e}`, {
                "text-xxs": e <= 6,
                "text-xs": e > 6
            }, l),
            children: s.jsxs("span", {
                children: ["+", n.length - t]
            })
        }, "more-networks")]
    }),
    G = (n, t) => {
        const o = t - n + 1;
        return Array.from({
            length: o
        }, (e, r) => r + n)
    },
    V = ({
        totalCount: n,
        pageSize: t = 25,
        currentPage: o
    }) => {
        const e = f.useMemo(() => {
                const i = Math.ceil(n / t);
                return G(1, i)
            }, [n, t]),
            r = o * t,
            l = r,
            a = l - t;
        return {
            startItem: a + 1,
            startItemIndex: a,
            endItem: l,
            endItemIndex: r,
            paginationRange: e
        }
    },
    X = ({
        totalCount: n,
        pageSize: t = 25,
        currentPage: o,
        onChange: e,
        className: r,
        hasMore: l
    }) => {
        const a = Math.max(o, 1),
            {
                startItem: h,
                startItemIndex: i,
                endItem: d,
                endItemIndex: m
            } = V({
                totalCount: n,
                pageSize: t,
                currentPage: a
            }),
            u = x => {
                e({
                    nextPage: x,
                    startItemIndex: i,
                    endItemIndex: m
                })
            };
        return s.jsx(s.Fragment, {
            children: n > t && s.jsxs("div", {
                className: c("pt-4 pb-1 px-0 sm:px-6 flex w-full items-center justify-between", r),
                children: [s.jsxs("div", {
                    className: "hidden sm:block whitespace-nowrap",
                    children: ["Showing ", s.jsx("span", {
                        className: "font-medium",
                        children: h
                    }), " to", " ", s.jsxs("span", {
                        className: "font-medium",
                        children: [d >= n ? n : d, " "]
                    }), " of", s.jsxs("span", {
                        className: "font-medium",
                        children: [" ", n]
                    })]
                }), s.jsxs("div", {
                    className: "flex flex-1 justify-between sm:justify-end space-x-3",
                    children: [s.jsx(I, {
                        variant: "outline",
                        className: c({
                            hidden: a === 1
                        }),
                        onClick: () => u(a - 1),
                        children: "Previous"
                    }), s.jsx(I, {
                        variant: "outline",
                        className: c({
                            hidden: d >= n && !l
                        }),
                        onClick: () => u(a + 1),
                        children: "Next"
                    })]
                })]
            })
        })
    };

function Q({
    accountValues: n,
    className: t,
    dropdownClassName: o,
    accountTypeFilter: e
}) {
    const {
        accounts: r,
        connectedAccounts: l
    } = S(e), i = b() === T.ALLOWANCES ? l : r, d = i.filter(x => x.selected), {
        handleItemSelect: m,
        handleAccountSelect: u
    } = A(d);
    return s.jsx(J, {
        accountValues: n,
        className: t,
        dropdownClassName: o,
        selectedAccounts: d,
        allAccounts: i,
        handleItemSelect: m,
        handleAccountSelect: u,
        accountTypeFilter: e
    })
}

function J({
    accountValues: n,
    className: t,
    dropdownClassName: o,
    selectedAccounts: e,
    allAccounts: r,
    handleItemSelect: l,
    handleAccountSelect: a,
    accountTypeFilter: h
}) {
    var N, j;
    const {
        requestInfo: {
            isLoading: i
        }
    } = _(D), {
        t: d
    } = E(), [m, u] = f.useState(!1), x = f.useRef(null);
    M(x, () => u(!1));
    const v = P(B),
        y = e.length === 3 ? 3 : 2,
        O = e.length === 4 ? 4 : 3,
        C = g ? y : O,
        k = R ? "fixed right-auto overflow-auto" : "fixed sm:max-h-96 sm:absolute sm:w-max sm:left-auto sm:right-0";
    return s.jsxs("div", {
        id: "accounts-multi-dropdown",
        ref: x,
        className: "relative sm:inline-block text-left",
        children: [s.jsx("div", {
            children: s.jsx(L, {
                className: c("group py-2.5", t),
                onClick: () => {
                    $({}), u(!m)
                },
                isOpen: m,
                startIcon: s.jsx(q, {
                    isOpen: m,
                    maxDisplayed: C,
                    className: "hidden xl:flex",
                    size: g ? 6 : 5,
                    children: e.map(p => s.jsx(F, {
                        accountIdenticonType: v,
                        address: p.address,
                        avatarUri: p == null ? void 0 : p.ensAvatar,
                        size: g ? 6 : 5
                    }, p.address))
                }),
                value: s.jsx("span", {
                    id: "account-multi-name",
                    className: c({
                        "py-0.5": e.length === 0,
                        truncate: e.length !== 0
                    }),
                    children: e.length === 1 ? U(w((N = e[0]) == null ? void 0 : N.name) || w((j = e[0]) == null ? void 0 : j.address), 15) : r.length === e.length ? d("home.allAccounts") : `${e.length} Accounts`
                }),
                status: i ? "loading" : void 0
            })
        }), s.jsx(H, {
            isOpen: m,
            className: c(`${k} overflow-y-auto overflow-x-hidden hide-scrollbar inset-x-3 max-h-72 py-0 pt-4 divide-y border-muted`, o),
            children: s.jsx(K, {
                selectedAccounts: e,
                handleItemSelect: l,
                handleAccountSelect: a,
                accountValues: n,
                accountTypeFilter: h
            })
        })]
    })
}
export {
    Q as A, q as D, X as P, J as a
};