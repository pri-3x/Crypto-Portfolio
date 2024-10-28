import {
    u as y,
    gU as q,
    gV as I,
    r as x,
    b as W,
    fe as F,
    bq as U,
    w as O,
    gW as A,
    iy as V,
    ds as B,
    gX as D,
    gY as G,
    z as E,
    j as s,
    aO as $,
    a6 as L,
    gR as v,
    h1 as Q,
    h2 as z,
    h3 as K,
    ax as Y,
    N as j,
    p4 as X,
    aD as k,
    aE as Z,
    aF as _,
    p5 as T,
    aH as C,
    p6 as M
} from "./bootstrap-7c5c33c8.js";
import {
    M as P
} from "./Maintenance-ae1f892f.js";

function H() {
    var b;
    const {
        transaction: a,
        transactionReceipt: e,
        isLoadingTransaction: u,
        transactionError: t,
        transactionStatus: p
    } = y(q), o = y(I), r = x.useMemo(() => o === "MMS" ? {
        swap_types: ["MMS"]
    } : {}, [o]), i = W(), f = F(), {
        chain: c
    } = U(), m = c == null ? void 0 : c.id, {
        blockExplorerUrl: g
    } = O[m || 1], {
        findSwapTo: h
    } = A(), d = x.useMemo(() => {
        var l;
        return (l = f.state) == null ? void 0 : l.swapMetaData
    }, [f.state]);
    x.useEffect(() => () => {
        i(V())
    }, [i]), x.useEffect(() => {
        const l = e != null && e.gasUsed && d.reg_tx_fee_in_eth ? `${new B(e==null?void 0:e.gasUsed.toString(),16).div(d.reg_tx_fee_in_eth,10).times(100).toFormat(2)}%` : void 0;
        e != null && e.transactionHash && D({ ...d,
            ...r,
            token_to_amount_received: void 0,
            quote_vs_executionRatio: void 0,
            estimated_vs_used_gasRatio: l,
            approval_gas_cost_in_eth: void 0,
            trade_gas_cost_in_eth: void 0,
            trade_and_approval_gas_cost_in_eth: void 0
        })
    }, [e == null ? void 0 : e.transactionHash, e == null ? void 0 : e.gasUsed, d, r]), x.useEffect(() => {
        var l;
        t && G({
            error_message: (l = t == null ? void 0 : t.error) == null ? void 0 : l.message,
            ...r
        })
    }, [t, r]);
    const n = () => {
            z({ ...r
            })
        },
        w = (e == null ? void 0 : e.transactionHash) || (a == null ? void 0 : a.hash),
        S = [E.ChainId.ZKSYNC, E.ChainId.LINEA].includes(m || 1);
    return e != null && e.transactionHash || p === 2 ? s.jsxs("div", {
        children: [s.jsxs("div", {
            className: "grid grid-cols-3 gap-4 items-end",
            children: [s.jsx("div", {
                className: "text-sm text-primary-default text-left"
            }), s.jsx("div", {
                className: "text-default text-lg text-center",
                children: "Swap"
            }), s.jsx("div", {
                className: "text-sm text-primary-default text-right"
            })]
        }), s.jsxs("div", {
            className: "flex flex-col justify-center items-center h-96 space-y-3",
            children: [s.jsxs("div", {
                className: "text-xl flex items-center space-x-3",
                children: [e != null && e.transactionHash ? s.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [s.jsx($, {
                        className: "text-success-default h-5 w-5"
                    }), s.jsx("span", {
                        children: "Confirmed"
                    })]
                }) : s.jsx("span", {
                    children: "Submitted"
                }), p === 2 && s.jsx(L, {
                    size: "sm"
                })]
            }), w && !S && s.jsx(v, {
                to: `/?tab=transactions&transactionHash=${(e==null?void 0:e.transactionHash)||(a==null?void 0:a.hash)}`,
                children: s.jsx("p", {
                    className: "text-primary-default",
                    children: "View transaction"
                })
            }), w && S && s.jsx("a", {
                href: `${g}/tx/${w}`,
                target: "_blank",
                rel: "noreferrer",
                children: s.jsx("p", {
                    className: "text-primary-default",
                    children: "View transaction"
                })
            }), s.jsx("div", {
                className: "mt-5",
                children: s.jsx(v, {
                    to: h("swap"),
                    onClick: n,
                    children: s.jsx("p", {
                        className: "btn",
                        children: "Go back"
                    })
                })
            })]
        })]
    }) : u ? s.jsx("div", {
        className: "flex justify-center items-center h-96",
        children: s.jsx("div", {
            className: "align-middle animate-spin spinner-border inline-block w-10 h-10 border-primary-muted border-t-primary-default border-4 rounded-full",
            role: "status",
            children: s.jsx("span", {
                className: "hidden",
                children: "Loading..."
            })
        })
    }) : s.jsx("div", {
        className: "flex flex-col justify-center h-96 items-center",
        children: s.jsx(Q, {
            title: "Error",
            description: ((b = t == null ? void 0 : t.error) == null ? void 0 : b.message) || "Transaction error",
            action: s.jsx("div", {
                className: "mt-5",
                children: s.jsx(v, {
                    to: h("swap"),
                    onClick: n,
                    children: s.jsx("p", {
                        className: "btn",
                        children: "Go back"
                    })
                })
            })
        })
    })
}
const N = ({
    children: a
}) => s.jsx("div", {
    id: "swap-element",
    className: "!bg-inherit md:!bg-default w-full rounded-2xl sm:max-w-md py-4 sm:px-3 md:px-8 sm:py-8",
    children: a
});

function ss({
    baseCurrency: a = "usd",
    exchangeRate: e = 1,
    useQueryString: u = !1,
    fromAddress: t,
    toAddress: p
}) {
    const {
        chain: o
    } = U(), r = o == null ? void 0 : o.id, [i, f] = x.useState(void 0), c = n => {
        f(n)
    }, {
        swapPage: m,
        isLoading: g
    } = K(), [h] = Y(), {
        findSwapTo: d
    } = A();
    if (g) return s.jsx(N, {
        children: s.jsx("div", {
            className: "flex flex-col justify-center h-96 items-center",
            children: s.jsx(L, {})
        })
    });
    if (u) {
        let n = s.jsx(T, {
            toAddress: p,
            fromAddress: t,
            handeQuoteRequest: c,
            baseCurrency: a,
            exchangeRate: e
        });
        if (h.get("swapPage") === "review") {
            if (!i || !r) return s.jsx(j, {
                to: d("swap")
            });
            n = s.jsx(M, {
                quoteRequest: i,
                baseCurrency: a,
                exchangeRate: e
            })
        } else if (h.get("swapPage") === "confirmed") {
            if (!i || !r) return s.jsx(j, {
                to: d("swap")
            });
            n = s.jsx(H, {})
        }
        return s.jsx(X.Provider, {
            value: {
                useQueryString: u
            },
            children: s.jsx(N, {
                children: m ? n : s.jsx(P, {
                    routeName: k.SWAP
                })
            })
        })
    }
    return s.jsx(N, {
        children: m ? s.jsxs(Z, {
            children: [s.jsx(_, {
                path: "/",
                element: s.jsx(T, {
                    handeQuoteRequest: c,
                    baseCurrency: a,
                    exchangeRate: e
                })
            }), s.jsx(_, {
                path: "/review",
                element: !i || !r ? s.jsx(j, {
                    replace: !0,
                    to: C.SWAP
                }) : s.jsx(M, {
                    quoteRequest: i,
                    baseCurrency: a,
                    exchangeRate: e
                })
            }), s.jsx(_, {
                path: "/confirmed",
                element: !i || !r ? s.jsx(j, {
                    replace: !0,
                    to: C.SWAP
                }) : s.jsx(H, {})
            })]
        }) : s.jsx(P, {
            routeName: k.SWAP
        })
    })
}
export {
    ss as S
};