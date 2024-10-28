import {
    u,
    s as se,
    a as D,
    b as Ae,
    j as e,
    N as q,
    P as Me,
    B as We,
    c as qe,
    S as $e,
    d as Ne,
    e as Ge,
    f as Qe,
    g as de,
    r as x,
    p as Ve,
    h as ae,
    o as Ye,
    T as p,
    i as b,
    k as T,
    t as M,
    C as ze,
    l as Ke,
    m as ne,
    n as G,
    q as Ze,
    M as Q,
    v as Xe,
    w as Je,
    R as C,
    L as $,
    x as Ie,
    D as ue,
    y as et,
    z as tt,
    W as st,
    A as Re,
    E as at,
    F as R,
    G as me,
    H as nt,
    I as xe,
    J as he,
    K as Fe,
    O as rt,
    Q as ot,
    U as lt,
    V as it,
    X as ct,
    Y as dt,
    Z as De,
    _ as pe,
    $ as P,
    a0 as ut,
    a1 as mt,
    a2 as te,
    a3 as xt,
    a4 as ht,
    a5 as re,
    a6 as V,
    a7 as fe,
    a8 as pt,
    a9 as ce,
    aa as ft,
    ab as jt,
    ac as gt,
    ad as bt,
    ae as yt,
    af as vt,
    ag as H,
    ah as wt,
    ai as U,
    aj as St,
    ak as Ct,
    al as Nt,
    am as Te,
    an as ee,
    ao as Be,
    ap as kt,
    aq as Pt,
    ar as Lt,
    as as ke,
    at as _t,
    au as Pe,
    av as Ot,
    aw as Et,
    ax as At,
    ay as Mt,
    az as It,
    aA as Rt,
    aB as Ft,
    aC as Le,
    aD as Dt,
    aE as Tt,
    aF as E,
    aG as Bt,
    aH as Ht
} from "./bootstrap-7c5c33c8.js";
import {
    M as Ut
} from "./Maintenance-ae1f892f.js";
import {
    u as F,
    a as Y,
    b as je,
    R as ge,
    c as Wt,
    d as qt,
    P as $t,
    C as z,
    Q as K,
    e as Gt,
    f as Qt,
    g as Vt,
    B as Yt,
    V as zt,
    h as Kt,
    D as Zt,
    O as Xt,
    S as Jt,
    W as es,
    i as ts,
    T as ss,
    j as W,
    k as as,
    l as ns
} from "./DownloadMobileApp-9278feb8.js";
import {
    u as rs
} from "./useLDVariation-7848242a.js";
import {
    G as os
} from "./GenericError-4cf31668.js";
import {
    u as ls
} from "./useBreakpoint-f1843395.js";
import "./index-184b0bea.js";
import "./faChevronDown-a9475498.js";
const is = () => {
        const n = u(se),
            t = u(D),
            s = Ae();
        return n ? t ? e.jsx(q, {
            replace: !0,
            to: {
                pathname: "/buy/build-quote"
            }
        }) : e.jsxs(Me, {
            children: [e.jsx(We, {
                onClickBack: () => s(qe(null))
            }), e.jsx($e, {})]
        }) : e.jsx(q, {
            replace: !0,
            to: {
                pathname: "/buy"
            }
        })
    },
    cs = is,
    ds = "/assets/onramp-welcome-light-80008614.png",
    us = "/assets/onramp-welcome-dark-707f8b69.png",
    ms = () => e.jsx("div", {
        className: M("w-6 h-6 rounded-full bg-alternative my-auto flex flex-col justify-center"),
        children: e.jsx(ze, {
            className: "w-4 h-4 m-auto"
        })
    }),
    xs = () => {
        const [n, t] = Ne(Ge, !1), [s] = Ne(Qe, !1), l = de(), r = x.useMemo(() => l ? us : ds, [l]), o = Ve(), a = ["Access to hundreds of tokens on 15+ chains", "Instantly fund your wallet with secure payment options", "Save on gas fees (and time)!"], i = ae(), {
            adblockerTest: h
        } = i, c = () => {
            o == null || o.track("onramp-get-started-button-clicked"), Ke({
                was_off_ramp_get_started_clicked: s
            }), t(!0)
        };
        return x.useEffect(() => {
            n || Ye({})
        }, [n]), n ? e.jsx(q, {
            replace: !0,
            to: {
                pathname: "/buy/region"
            }
        }) : e.jsx(Me, {
            expandHeight: !0,
            children: e.jsxs("div", {
                className: "m-auto md:border md:border-muted !bg-inherit md:!bg-default rounded-xl relative w-full max-w-md space-y-6 flex flex-col p-6",
                "data-testid": "buy-welcome-screen",
                children: [e.jsx(p, {
                    scale: b.HeadingSm,
                    center: !0,
                    bold: !0,
                    children: "Buying crypto made easy"
                }), e.jsx("img", {
                    src: r,
                    alt: "Buy with metamask"
                }), e.jsx(p, {
                    bold: !0,
                    children: "Buy crypto how you want, when you want with MetaMask"
                }), e.jsxs(p, {
                    scale: b.ParagraphSm,
                    subdued: !0,
                    children: ["You're in control when you buy crypto directly in your MetaMask wallet", h ? "!" : ".", " We'll connect you with quotes from trusted providers and guide you along the way, making self-custody simple."]
                }), e.jsx("div", {
                    className: "space-y-6",
                    children: a.map((m, y) => e.jsxs("div", {
                        className: "flex space-x-2",
                        children: [e.jsx(ms, {}), e.jsx(p, {
                            className: "!leading-6 text-center",
                            scale: b.ParagraphSm,
                            subdued: !0,
                            children: m
                        })]
                    }, y))
                }), e.jsx(T, {
                    onClick: c,
                    children: "Get started"
                })]
            })
        })
    },
    hs = xs,
    ps = ({
        isFetching: n
    }) => {
        var v;
        const {
            cryptoToBuyBalance: t
        } = F(), s = u(ne), {
            data: l,
            isFetching: r,
            error: o
        } = t, a = u(G), i = u(Ze), h = at(l), c = !!(!s || i && i.length <= 1), m = Y(Q.OnrampSelectCrypto), y = x.useMemo(() => a != null && a.network.chainId ? Xe(a == null ? void 0 : a.network.chainId) : void 0, [a == null ? void 0 : a.network.chainId]), g = x.useMemo(() => {
            var w, S;
            return ((S = (w = Je[y ? ? 1]) == null ? void 0 : w.nativeCurrency) == null ? void 0 : S.symbol) === (a == null ? void 0 : a.symbol)
        }, [y, a == null ? void 0 : a.symbol]), f = je(C.Buy, ge.CRYPTO), d = x.useCallback(() => {
            c || (m(), f())
        }, [c, m, f]);
        return n ? e.jsx($, {
            className: "w-full"
        }) : (i == null ? void 0 : i.length) === 0 ? e.jsx(Ie, {
            type: "info",
            message: "No tokens available for this payment method"
        }) : e.jsx(ue, {
            "data-testid": "crypto-to-buy-selector",
            className: "w-full px-4 sm:px-6 py-4 relative bg-alternative rounded-lg flex items-center justify-between",
            enableChevron: !0,
            onClick: d,
            disabled: c,
            value: e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                    className: "flex items-center flex-grow",
                    children: [a && e.jsx(et, {
                        token: a,
                        hideNetwork: g,
                        chainId: y || tt.ChainId.ETHEREUM,
                        className: "mr-3 aspect-square"
                    }), e.jsxs("div", {
                        children: [e.jsx(p, {
                            scale: b.HeadingXs,
                            bold: !0,
                            className: "text-left",
                            children: a == null ? void 0 : a.name
                        }), e.jsx(p, {
                            scale: b.ParagraphXs,
                            subdued: !0,
                            className: "text-left",
                            children: (v = a == null ? void 0 : a.network) == null ? void 0 : v.chainName
                        })]
                    })]
                }), e.jsx("div", {
                    className: "flex space-x-2 items-center",
                    children: r ? e.jsx($, {
                        className: "w-16 h-6 mt-0"
                    }) : o ? null : e.jsxs(e.Fragment, {
                        children: [e.jsx(st, {}), e.jsxs(p, {
                            subdued: !0,
                            scale: b.ParagraphXs,
                            children: [Re(l).format(h), " ", a == null ? void 0 : a.symbol]
                        })]
                    })
                })]
            })
        })
    };

function fs(n, t) {
    return Math.round(n * t / 5) * 5
}
const js = ["USD", "EUR", "GBP", "CAD", "AUD", "CHF", "BRL", "NOK", "SEK", "SGD"],
    gs = () => {
        const n = u(R),
            t = u(me),
            {
                minAmount: s
            } = t || {},
            {
                exchangeRates: l
            } = nt(),
            r = n == null ? void 0 : n.symbol.toLowerCase();
        let o = 0,
            a = 0;
        if (s && isFinite(s) && (o = s, a = 1.5), r) {
            const h = Object.values(l).find(({
                ticker: c,
                currencyType: m
            }) => m === "fiat" && c === r);
            h && (a = h.value, o = js.includes(r.toUpperCase()) ? 100 : 50)
        }
        const i = fs(o, a);
        return s && isFinite(s) && i < s ? s * 1.5 : i
    },
    bs = () => {
        var k;
        const {
            purchaseAmount: n,
            setPurchaseAmount: t,
            isPurchaseAmountMoreThanMax: s,
            isPurchaseAmountLessThanMin: l,
            setIsPurchaseInputDirty: r,
            purchaseQuotes: o
        } = F(), a = gs(), i = u(ne), [h, c] = x.useState(!1), {
            cryptoToBuy: m,
            cryptosToBuy: y,
            status: g
        } = u(xe), f = g === "loading", d = u(R), v = u(he), w = u(me), S = u(Fe), {
            denomSymbol: j
        } = d || {}, L = (k = o == null ? void 0 : o.data) == null ? void 0 : k.filter(_ => !_.error), O = x.useCallback(_ => `${j}${rt(_.toString(),{thousandSeparator:!0})}`, [j]);
        return x.useEffect(() => {
            !n && !h && !S && a && (c(!0), t(a))
        }, [h, n, d, t, a, S]), x.useEffect(() => {
            !S && a && t(a)
        }, [a, S, t]), e.jsxs("div", {
            className: "flex flex-grow flex-col justify-center relative",
            children: [v || f ? e.jsx($, {
                className: "w-48 m-auto"
            }) : !m || y.length === 0 ? null : e.jsx(ot, {
                "data-testid": "purchase-amount-input",
                autoFocus: !0,
                disabled: v || S || !i,
                className: M("bg-transparent border-transparent focus:border-transparent focus:ring-0 font-bold text-center w-full text-5xl", {
                    "text-error-default": (L == null ? void 0 : L.length) === 0 && (s || l),
                    "text-6xl": n.toString().length < 6
                }),
                value: n || void 0,
                onValueChange: _ => {
                    r(!0), t(_.floatValue || 0)
                },
                placeholder: `${j}0`,
                prefix: j || "",
                thousandSeparator: !0,
                allowNegative: !1,
                decimalScale: 2
            }), (L == null ? void 0 : L.length) === 0 && w && (s || l) ? e.jsxs(p, {
                scale: b.ParagraphSm,
                className: "mt-2 text-error-default center text-center absolute bottom-0.5 left-0 right-0",
                children: ["Enter a value between ", O(w.minAmount), " and ", O(w.maxAmount)]
            }) : null]
        })
    },
    ys = ({
        isFetching: n
    }) => {
        const t = u(D),
            s = Y(Q.OnrampSelectPaymentMethod),
            l = je(C.Buy, ge.PAYMENT_METHOD),
            r = x.useCallback(() => {
                l(), s()
            }, [l, s]);
        return n ? e.jsx($, {
            className: "w-full"
        }) : e.jsx(ue, {
            className: "w-full px-4 sm:px-6 py-4 relative bg-alternative rounded-lg flex items-center justify-between",
            "data-testid": "payment-method-selector",
            enableChevron: !0,
            onClick: r,
            value: e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                    className: "flex flex-grow items-center",
                    children: [e.jsx(lt, {
                        paymentMethodType: t == null ? void 0 : t.paymentType
                    }), e.jsx(p, {
                        scale: b.ParagraphSm,
                        className: "ml-2",
                        children: t == null ? void 0 : t.name
                    })]
                }), e.jsx(it, {
                    payment: t
                })]
            })
        })
    },
    vs = ({
        prices: n
    }) => {
        const {
            setPurchaseAmount: t
        } = F();
        return e.jsx("div", {
            className: "m-auto",
            children: e.jsx("div", {
                className: M("button-group"),
                children: n.map(s => e.jsxs(T, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => t(s),
                    className: "hover:border-default hover:cursor-pointer hover:bg-hover",
                    children: ["$", Re(s).format("0,0a")]
                }, s))
            })
        })
    },
    ws = ({
        isFetching: n
    }) => {
        const t = u(ct),
            s = u(R),
            l = Y(Q.OnrampSelectFiat),
            r = je(C.Buy, ge.FIAT),
            o = x.useCallback(() => {
                r(), l()
            }, [r, l]);
        return e.jsx(e.Fragment, {
            children: n ? e.jsx($, {
                className: "w-16 h-10 mt-0"
            }) : e.jsx(ue, {
                disabled: t.length === 0,
                className: "w-fit py-0 bg-alternative rounded-lg flex items-center",
                valueClassName: "text-alternative",
                onClick: o,
                value: s == null ? void 0 : s.symbol,
                "data-testid": "fiat-selector"
            })
        })
    },
    _e = ({
        setColToDisplay: n
    }) => {
        const t = u(se),
            {
                paymentMethod: s,
                status: l
            } = u(dt),
            r = u(ne),
            o = u(R),
            {
                cryptoToBuy: a,
                status: i
            } = u(xe),
            {
                activeAccount: h
            } = De(),
            c = u(pe),
            m = i === "loading",
            y = u(he),
            g = l === "loading",
            f = x.useMemo(() => c.filter(S => S.status === P.OrderStatusEnum.Pending).length, [c]),
            d = x.useMemo(() => !!(m || y || g), [m, y, g]),
            v = x.useMemo(() => !!t && !!a && !!o && r, [t, a, o, r]),
            w = x.useMemo(() => h ? n ? e.jsx(T, {
                width: "full",
                onClick: () => n("select"),
                disabled: !v,
                children: "Get Quotes"
            }) : null : e.jsx(ut, {
                walletType: mt.METAMASK
            }), [h, n, v]);
        return t ? s ? e.jsx("div", {
            className: "w-full h-full",
            id: "build-quote-page",
            children: e.jsxs("div", {
                className: "flex flex-col space-y-4 h-full",
                children: [e.jsxs("div", {
                    className: "flex justify-center space-x-2",
                    children: [e.jsx(Wt, {
                        disabled: d,
                        rampType: C.Buy
                    }), e.jsx(qt, {
                        isFetching: d,
                        rampType: C.Buy
                    }), e.jsx(ws, {
                        isFetching: d
                    })]
                }), e.jsx(bs, {}), (o == null ? void 0 : o.symbol) === "USD" && e.jsx(vs, {
                    prices: [50, 100, 250, 500, 1e3]
                }), e.jsx(ps, {
                    isFetching: d,
                    placeholder: ""
                }), e.jsx(ys, {
                    isFetching: d
                }), w && e.jsx("div", {
                    className: "m-0",
                    children: w
                }), e.jsx($t, {
                    processingOrdersCount: f
                })]
            })
        }) : e.jsx(q, {
            to: "/buy/payment-method"
        }) : e.jsx(q, {
            to: "/buy/region"
        })
    },
    Ss = n => {
        const {
            purchaseQuotes: t
        } = F(), s = u(pe), l = u(D), r = u(R), o = u(G);
        return x.useCallback(a => {
            var i;
            if (t && t.data && a && o && r && l) {
                const h = (s == null ? void 0 : s.some(f => {
                        var d;
                        return f.status === P.OrderStatusEnum.Completed && f.provider.id === ((d = a == null ? void 0 : a.provider) == null ? void 0 : d.id)
                    })) ? ? !1,
                    c = t.data,
                    m = Number(a.amountOut),
                    g = {
                        amount: Number(a.amountIn),
                        chain_id_destination: `${o==null?void 0:o.network.chainId}`,
                        currency_destination: o == null ? void 0 : o.symbol,
                        currency_source: r == null ? void 0 : r.symbol,
                        crypto_out: m,
                        exchange_rate: a.exchangeRate || 0,
                        gas_fee: a.networkFee || 0,
                        payment_method_id: te(l == null ? void 0 : l.id),
                        processing_fee: a.providerFee || 0,
                        provider_onramp: (i = a == null ? void 0 : a.provider) == null ? void 0 : i.name,
                        quote_position: c.findIndex(f => {
                            var d;
                            return f.provider.id === ((d = a == null ? void 0 : a.provider) == null ? void 0 : d.id)
                        }) + 1,
                        quotes_sort_method: xt.Price,
                        refresh_count: n,
                        results_count: c.length,
                        total_fee: (Number(a.providerFee) || 0) + (Number(a.providerFee) || 0),
                        is_previously_successful: h
                    };
                ht(g)
            }
        }, [s, t, o, r, l, n])
    },
    Cs = ({
        refetchCount: n,
        maxQuoteRefreshCount: t,
        refetchQuotes: s,
        quotes: l,
        activeQuoteIndex: r,
        setActiveQuoteIndex: o,
        trackQuoteSelected: a,
        loadingQuotes: i
    }) => i ? e.jsx(re, {}) : e.jsxs(e.Fragment, {
        children: [n <= t && e.jsx(z, {
            onCountdownComplete: s,
            preCountdownText: "New quotes in",
            className: "mb-4"
        }), e.jsx(K, {
            quotes: l,
            trackQuoteSelected: a,
            activeQuoteIndex: r,
            setActiveQuoteIndex: o,
            rampType: C.Buy
        })]
    }),
    Ns = ({
        quotes: n,
        trackQuoteSelected: t,
        refetchCount: s,
        maxQuoteRefreshCount: l,
        refetchQuotes: r,
        loadingQuotes: o,
        activeQuoteIndex: a,
        setActiveQuoteIndex: i
    }) => o ? e.jsx(re, {}) : e.jsxs(e.Fragment, {
        children: [s <= l && !o && e.jsx(z, {
            onCountdownComplete: r,
            preCountdownText: "New quotes in",
            className: "mb-4",
            redText: !1
        }), o && e.jsxs("div", {
            className: M("text-sm whitespace-nowrap tabular-nums bg-alternative w-fit m-auto py-1 px-3 rounded-full mb-4 flex items-center justify-center"),
            children: [e.jsx(V, {
                size: "xs",
                className: "mr-2"
            }), e.jsx(p, {
                scale: b.ParagraphSm,
                children: "Fetching best price..."
            })]
        }), e.jsx(K, {
            quotes: n,
            trackQuoteSelected: t,
            activeQuoteIndex: a,
            setActiveQuoteIndex: i,
            rampType: C.Buy
        })]
    }),
    ks = ({
        quotes: n,
        trackQuoteSelected: t,
        refetchCount: s,
        maxQuoteRefreshCount: l,
        refetchQuotes: r,
        loadingQuotes: o,
        activeQuoteIndex: a,
        setActiveQuoteIndex: i
    }) => e.jsxs(e.Fragment, {
        children: [s <= l && !o && e.jsx(z, {
            onCountdownComplete: r,
            preCountdownText: "New quotes in",
            className: "mb-4",
            redText: !1
        }), o && e.jsxs("div", {
            className: M("text-sm whitespace-nowrap tabular-nums bg-alternative w-fit m-auto py-1 px-3 rounded-full mb-4 flex items-center justify-center"),
            children: [e.jsx(V, {
                size: "xs",
                className: "mr-2"
            }), e.jsx(p, {
                scale: b.ParagraphSm,
                children: "Fetching best price..."
            })]
        }), e.jsx(K, {
            quotes: n,
            trackQuoteSelected: t,
            activeQuoteIndex: a,
            setActiveQuoteIndex: i,
            rampType: C.Buy
        })]
    }),
    Ps = ({
        quotes: n,
        trackQuoteSelected: t,
        refetchCount: s,
        maxQuoteRefreshCount: l,
        refetchQuotes: r,
        loadingQuotes: o,
        activeQuoteIndex: a,
        setActiveQuoteIndex: i
    }) => {
        const {
            t: h
        } = fe();
        return e.jsxs(e.Fragment, {
            children: [s <= l && !o && e.jsx(z, {
                hideCountdownValue: !0,
                onCountdownComplete: r
            }), o && e.jsxs("div", {
                className: M("text-sm whitespace-nowrap tabular-nums bg-alternative w-fit m-auto py-1 px-3 rounded-full mb-4 flex items-center justify-center"),
                children: [e.jsx(V, {
                    size: "xs",
                    className: "mr-2"
                }), e.jsx(p, {
                    scale: b.ParagraphSm,
                    children: h("ramp.fetchingBestPrice")
                })]
            }), e.jsx(K, {
                quotes: n,
                trackQuoteSelected: t,
                activeQuoteIndex: a,
                setActiveQuoteIndex: i,
                rampType: C.Buy
            })]
        })
    },
    Ls = ({
        quotes: n,
        trackQuoteSelected: t,
        refetchCount: s,
        maxQuoteRefreshCount: l,
        refetchQuotes: r,
        loadingQuotes: o,
        activeQuoteIndex: a,
        setActiveQuoteIndex: i
    }) => e.jsxs(e.Fragment, {
        children: [s <= l && !o && e.jsx(z, {
            hideCountdownValue: !0,
            countdownDuration: 5,
            onCountdownComplete: r
        }), e.jsx(K, {
            quotes: n,
            trackQuoteSelected: t,
            activeQuoteIndex: a,
            setActiveQuoteIndex: i,
            rampType: C.Buy
        })]
    }),
    ie = 3,
    _s = ({
        quotes: n,
        trackQuoteSelected: t,
        refetchCount: s,
        maxQuoteRefreshCount: l,
        refetchQuotes: r,
        loadingQuotes: o
    }) => {
        const a = rs("ramps-quote-list-ui"),
            [i, h] = x.useState(0),
            c = Gt(),
            [m, y] = x.useState(!1);
        let g = [...n].sort((L, O) => {
            const k = c(L),
                _ = c(O);
            return k && !_ ? -1 : !k && _ ? 1 : 0
        });
        g.length > ie && !m && (g = g.slice(0, ie));
        const f = u(D),
            d = u(G),
            v = u(R),
            {
                purchaseAmount: w
            } = F(),
            S = x.useCallback(() => {
                var O, k;
                y(!0);
                const L = {
                    payment_method_id: f == null ? void 0 : f.id,
                    amount: w.toString(),
                    refresh_count: s.toString(),
                    results_count: n.length.toString(),
                    provider_onramp_first: (k = (O = g[0]) == null ? void 0 : O.provider) == null ? void 0 : k.name,
                    provider_onramp_list: JSON.stringify(n.map(({
                        provider: _
                    }) => _.name)),
                    previously_used_count: n.filter(c).length.toString(),
                    chain_id_destination: `${d==null?void 0:d.network.chainId}`,
                    currency_source: v == null ? void 0 : v.symbol,
                    currency_destination: d == null ? void 0 : d.symbol
                };
                pt(L)
            }, [c, d == null ? void 0 : d.network.chainId, d == null ? void 0 : d.symbol, v == null ? void 0 : v.symbol, w, n, s, g, f == null ? void 0 : f.id]),
            j = {
                quotes: g,
                maxQuoteRefreshCount: l,
                refetchQuotes: r,
                refetchCount: s,
                trackQuoteSelected: t,
                loadingQuotes: o,
                activeQuoteIndex: i,
                setActiveQuoteIndex: h
            };
        return a === "treatment-1" ? e.jsx(Ns, { ...j
        }) : a === "treatment-2" ? e.jsx(ks, { ...j
        }) : a === "treatment-3" ? e.jsx(Ps, { ...j
        }) : a === "treatment-4" ? e.jsx(Ls, { ...j
        }) : e.jsxs(e.Fragment, {
            children: [e.jsx(Cs, { ...j
            }), !m && !o && n.length > ie && e.jsxs("div", {
                className: "flex flex-grow",
                children: [e.jsx(ce, {
                    className: "self-center"
                }), e.jsxs(T, {
                    className: "mx-4 flex self-center text-default",
                    variant: "link",
                    onClick: S,
                    children: ["Load more quotes ", e.jsx(ft, {
                        className: "h-4 w-4 self-center ml-1"
                    })]
                }), e.jsx(ce, {
                    className: "self-center"
                })]
            })]
        })
    },
    Os = "/assets/paypal-metamask-dark-buy-3b4ab868.png",
    Es = "/assets/paypal-metamask-light-buy-d4e72363.png",
    As = () => {
        const {
            purchaseAmount: n
        } = F(), t = u(se), s = u(D), l = u(R), r = u(G);
        return x.useCallback(o => {
            if (r && l && s) {
                const a = {
                    amount: n,
                    chain_id_destination: `${r==null?void 0:r.network.chainId}`,
                    currency_destination: r == null ? void 0 : r.symbol,
                    currency_source: l == null ? void 0 : l.symbol,
                    payment_method_id: te(s == null ? void 0 : s.id),
                    provider_onramp: o,
                    region: te(t == null ? void 0 : t.id)
                };
                jt(a)
            }
        }, [n, r, l, s, t == null ? void 0 : t.id])
    },
    Ms = (n, t) => {
        if (n.text) return e.jsx(p, {
            bold: !0,
            style: {
                color: t
            },
            className: "mr-2",
            children: n.text
        }, n.text);
        if (n.image) {
            const {
                url: s,
                width: l,
                height: r
            } = n.image;
            return e.jsx("img", {
                alt: "Continue",
                src: s,
                style: {
                    width: l,
                    height: r
                }
            }, s)
        }
    },
    Is = ({
        disabled: n,
        customProvider: t
    }) => {
        const s = Ae(),
            [l, r] = x.useState(!1),
            {
                rampAccount: o
            } = Qt(),
            {
                sdk: a
            } = Vt(),
            {
                purchaseAmount: i
            } = F(),
            h = u(R),
            c = u(se),
            m = u(G),
            y = As(),
            f = `${gt()}/buy/order-process/{providerCode}`,
            d = t == null ? void 0 : t.customAction,
            w = de() ? "dark" : "light",
            {
                backgroundColor: S,
                textColor: j,
                value: L
            } = d.button[w],
            O = x.useCallback(async () => {
                if (!(!a || !d)) try {
                    r(!0);
                    const k = await a.getProvider(c == null ? void 0 : c.id, d.buy.providerId),
                        _ = await a.getBuyUrl(k.provider, c == null ? void 0 : c.id, t == null ? void 0 : t.id, m == null ? void 0 : m.id, h == null ? void 0 : h.id, i, o),
                        {
                            url: Z,
                            orderId: N
                        } = await _.createWidget(f);
                    y(k.provider.name);
                    const I = window.open("about:blank", "_blank");
                    I && (I.location.href = Z, N && s(bt({
                        id: N,
                        chainId: m ? m == null ? void 0 : m.network.chainId.toString() : "1",
                        account: o,
                        orderType: yt.OrderOrderTypeEnum.Buy
                    })))
                } finally {
                    r(!1)
                }
            }, [a, d, c == null ? void 0 : c.id, t == null ? void 0 : t.id, m, h == null ? void 0 : h.id, i, o, f, y, s]);
        return e.jsx(T, {
            isLoading: l,
            disabled: n,
            style: {
                backgroundColor: S
            },
            className: M("border-0 m-auto w-full"),
            onClick: O,
            children: L.map(k => Ms(k, j))
        })
    },
    Rs = "https://metamask.io/pyusd/?utm_source=portfolio&utm_medium=placement&utm_campaign=pyusd_zero_fee_awareness",
    Fs = () => e.jsx("div", {
        className: "mr-4",
        children: e.jsxs("svg", {
            width: "37",
            height: "36",
            viewBox: "0 0 37 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [e.jsx("path", {
                d: "M18.5 36C28.4411 36 36.5 27.9411 36.5 18C36.5 8.05887 28.4411 0 18.5 0C8.55887 0 0.5 8.05887 0.5 18C0.5 27.9411 8.55887 36 18.5 36Z",
                fill: "#0070E0"
            }), e.jsx("path", {
                d: "M21.1035 7.28635H19.136V7.28964L14.7728 7.28635C14.0643 7.28635 13.4645 7.80044 13.3557 8.49909L12.9108 11.3596L12.9076 11.3826L10.7853 11.3761H10.782C10.2151 11.3761 9.75706 11.8341 9.75376 12.401C9.75376 12.9678 10.2118 13.4292 10.7787 13.4324L12.5813 13.439L12.2682 15.4229L12.2452 15.5712H10.1229C9.55603 15.5712 9.09467 16.0326 9.09467 16.5994C9.09467 17.1662 9.55603 17.6276 10.1229 17.6276H11.9222L10.95 23.8034L10.637 25.8631L10.4722 26.9605C10.3404 27.8272 11.0126 28.6082 11.8892 28.6082H13.2602H15.1353H16.6414C17.3466 28.6082 17.9464 28.0974 18.0584 27.4021L18.9713 21.7206H19.5117H21.2188C25.2426 21.7206 28.5084 18.4086 28.4326 14.3651C28.3634 10.4138 25.0548 7.28635 21.1035 7.28635ZM14.6673 13.4456L21.0738 13.4621C21.6538 13.4621 22.1284 13.9367 22.1284 14.5167C22.1284 15.0967 21.6538 15.5712 21.0738 15.5712H14.3345L14.6673 13.4456ZM21.1298 19.6576H20.0357H19.5183H18.444C17.7388 19.6576 17.139 20.1684 17.0269 20.8638L16.1108 26.5452H12.6274L14.0115 17.6276H21.0738C22.7875 17.6276 24.1847 16.2336 24.1847 14.5167C24.1847 12.7997 22.7907 11.4057 21.0771 11.4057L14.9903 11.3892L15.31 9.34933L21.2221 9.34603C24.1056 9.34603 26.4422 11.7254 26.3762 14.6254C26.3103 17.4398 23.9442 19.6576 21.1298 19.6576Z",
                fill: "white"
            })]
        })
    }),
    Ds = n => {
        const [t, s] = x.useState(!0);
        return t ? e.jsx(Ie, { ...n,
            onClose: () => s(!1),
            title: "Buy PayPal USD (PYUSD) with zero provider fees from March 25th to April 8th, 2024.",
            links: [{
                linkText: "Read more about the promotion here.",
                href: Rs,
                target: "_blank"
            }],
            customIcon: Fs,
            className: n.className
        }) : null
    },
    Ts = ({
        paymentMethod: n
    }) => {
        const {
            t
        } = fe(), s = de(), {
            showPyusdZeroFeesBanner: l
        } = ae();
        return e.jsxs("div", {
            children: [e.jsxs("div", {
                className: "flex flex-col bg-alternative rounded-xl p-8 mb-8",
                children: [e.jsx("img", {
                    src: s ? Os : Es,
                    alt: "PayPal & MetaMask"
                }), e.jsx(p, {
                    center: !0,
                    bold: !0,
                    className: "mt-8",
                    children: t("ramp.buyWithPayPalTitle")
                }), e.jsx(p, {
                    center: !0,
                    scale: b.ParagraphSm,
                    className: "mt-4",
                    children: t("ramp.buyWithPayPalDescription")
                })]
            }), e.jsx(Is, {
                customProvider: n
            }), l && e.jsx(Ds, {
                className: "mt-8"
            })]
        })
    },
    Oe = 6,
    Ee = () => {
        const {
            purchaseQuotes: n,
            isReadyToFetchPurchaseQuotes: t,
            refetchPurchaseQuotes: s,
            purchaseAmount: l
        } = F(), {
            region: r,
            status: o
        } = u(vt), a = o === "loading", i = u(D), h = u(ne), {
            cryptoToBuy: c,
            cryptosToBuy: m,
            status: y
        } = u(xe), g = y === "loading", f = y === "idle", d = u(R), v = u(he), w = u(me), S = u(Fe), j = H(r == null ? void 0 : r.id), L = H(d == null ? void 0 : d.id), O = H(i == null ? void 0 : i.id), k = H(c == null ? void 0 : c.id), _ = H(l), Z = x.useMemo(() => j !== (r == null ? void 0 : r.id) || L !== (d == null ? void 0 : d.id) || O !== (i == null ? void 0 : i.id) || k !== (c == null ? void 0 : c.id) || _ !== l, [k, L, O, _, j, l, c == null ? void 0 : c.id, d == null ? void 0 : d.id, i == null ? void 0 : i.id, r == null ? void 0 : r.id]), N = x.useMemo(() => !!(i != null && i.customAction), [i == null ? void 0 : i.customAction]), [I, He] = x.useState(!1), {
            data: X,
            error: be,
            isFetching: J
        } = n || {}, [A, ye] = x.useState(0), ve = Ss(A), we = x.useMemo(() => !!(r && d && c && i && w) && !(v || g || S || a), [g, S, a, w, c, d, i, r, v]), oe = x.useMemo(() => wt((X || []).filter(le => !le.error), ""), [X]), B = x.useCallback(async () => {
            N || (ye(0), await s(A))
        }, [N, A, s]), Se = x.useCallback(async () => {
            N || (ye(A + 1), await s(A))
        }, [N, A, s]);
        x.useEffect(() => {
            (async () => {
                t && !I && !N && (await B(), He(!0))
            })()
        }, [I, A, t, B, N]), x.useEffect(() => {
            t && Z && I && !N && B()
        }, [B, Z, I, N, t]);
        const Ce = x.useMemo(() => A > Oe, [A]),
            Ue = x.useMemo(() => we ? Ce && !N ? e.jsx(U, {
                header: "Quotes have expired",
                subTitle: e.jsx(T, {
                    variant: "link",
                    onClick: B,
                    children: "Refetch quotes"
                })
            }) : N ? e.jsx(Ts, {
                paymentMethod: i
            }) : h ? J && !I || X === null ? e.jsx(re, {}) : be ? e.jsx(os, {}) : oe.length > 0 || J ? e.jsx(_s, {
                quotes: oe,
                trackQuoteSelected: ve,
                refetchCount: A,
                maxQuoteRefreshCount: Oe,
                refetchQuotes: Se,
                loadingQuotes: J
            }) : e.jsx(U, {
                header: "More options may be available to you",
                subTitle: "Broaden your search by entering a different amount or changing your payment method."
            }) : e.jsx(U, {
                header: "Your payment method is not available",
                subTitle: "Please choose a different payment method or region."
            }) : (m == null ? void 0 : m.length) === 0 && !f && !g ? e.jsx(U, {
                header: "No Quotes Available",
                subTitle: "Try changing your payment method."
            }) : e.jsx(U, {
                subTitle: "Loading..."
            }), [we, Ce, N, h, J, I, X, be, oe, m == null ? void 0 : m.length, f, g, B, i, ve, A, Se]);
        return e.jsxs("div", {
            className: "flex flex-col overflow-y-scroll no-scrollbar w-full h-full",
            children: [e.jsx(p, {
                center: !0,
                className: M({
                    "mb-4": N,
                    "mb-2": !N
                }),
                scale: b.HeadingXs,
                bold: !0,
                children: "How do you want to buy your crypto?"
            }), !N && e.jsx(p, {
                center: !0,
                className: "mb-4",
                subdued: !0,
                children: "Compare rates from these providers. Quotes are sorted by overall price."
            }), Ue]
        })
    },
    Bs = () => e.jsx("div", {
        className: "w-[1px] h-auto bg-border-muted"
    }),
    Hs = () => {
        const n = ls("lg"),
            [t, s] = St.useState("build"),
            l = u(D),
            r = l == null ? void 0 : l.name.toLowerCase().includes("paypal"),
            {
                showPyusdZeroFeesBanner: o
            } = ae();
        return e.jsxs("div", {
            "data-testid": "build-select-buy-quote-page",
            children: [e.jsx(Yt, {
                rampType: C.Buy,
                colToDisplay: t,
                setColToDisplay: s
            }), n ? e.jsxs("div", {
                className: M("space-x-8 p-8 flex h-[574px]", {
                    "h-[655px]": o && r
                }),
                children: [e.jsx(_e, {}), e.jsx(Bs, {}), e.jsx(Ee, {})]
            }) : e.jsxs("div", {
                className: M("p-8 overflow-y-scroll no-scrollbar h-[574px]", {
                    "h-[715px]": o && r
                }),
                children: [t === "build" && e.jsx(_e, {
                    setColToDisplay: s
                }), t === "select" && e.jsx(Ee, {})]
            })]
        })
    },
    Us = Hs,
    Ws = ({
        orderStatus: n
    }) => {
        const t = "flex justify-center mx-auto mb-4";
        if (!n) return null;
        switch (n) {
            case P.OrderStatusEnum.Completed:
                return e.jsx(Nt, {
                    className: t
                });
            case P.OrderStatusEnum.Failed:
            case P.OrderStatusEnum.IdExpired:
            case P.OrderStatusEnum.Cancelled:
                return e.jsx(Ct, {
                    className: t
                });
            case P.OrderStatusEnum.Pending:
            case P.OrderStatusEnum.Unknown:
            case P.OrderStatusEnum.Precreated:
            default:
                return e.jsx(V, {
                    className: t,
                    size: "lg"
                })
        }
    },
    qs = ({
        order: n
    }) => {
        const {
            t
        } = fe(), {
            status: s,
            statusDescription: l,
            cryptoAmount: r,
            cryptoCurrency: o,
            fiatCurrency: a,
            fiatAmount: i,
            provider: h,
            providerOrderLink: c
        } = n || {}, m = x.useMemo(() => {
            switch (s) {
                case P.OrderStatusEnum.Completed:
                    return t("ramp.transactionSuccessful");
                case P.OrderStatusEnum.Failed:
                case P.OrderStatusEnum.IdExpired:
                    return t("ramp.transactionFailed");
                case P.OrderStatusEnum.Pending:
                case P.OrderStatusEnum.Precreated:
                case P.OrderStatusEnum.Unknown:
                    return t("ramp.processingTransaction");
                case P.OrderStatusEnum.Cancelled:
                    return t("ramp.transactionCancelled")
            }
        }, [s, t]);
        return e.jsxs("div", {
            className: "w-full my-auto",
            children: [s && e.jsx(Ws, {
                orderStatus: s
            }), s && e.jsx(p, {
                scale: b.HeadingMd,
                center: !0,
                bold: !0,
                className: "mb-4",
                "data-testid": "order-status",
                children: m
            }), l && e.jsx(p, {
                scale: b.ParagraphSm,
                center: !0,
                subdued: !0,
                className: "mb-4",
                "data-testid": "status-description",
                children: l
            }), e.jsx(p, {
                scale: b.HeadingMd,
                center: !0,
                bold: !0,
                className: "mb-2",
                "data-testid": "crypto-amount",
                children: Te(Number(r), o == null ? void 0 : o.symbol)
            }), e.jsx(p, {
                scale: b.ParagraphSm,
                center: !0,
                subdued: !0,
                className: "mb-4",
                "data-testid": "fiat-amount",
                children: ee(i, a)
            }), c && e.jsx(Be, {
                className: "text-sm text-center block mb-4",
                href: c,
                target: "_blank",
                onClick: () => {
                    kt({
                        external_link: c || ""
                    })
                },
                "data-testid": "provider-order-link",
                children: t("ramp.viewOrderStatus", {
                    providerName: h == null ? void 0 : h.name
                })
            })]
        })
    },
    $s = ({
        addressOverride: n
    }) => {
        const t = u(Pt),
            {
                activeAccount: s
            } = De();
        if (!s && !n) return null;
        const l = (s == null ? void 0 : s.name.toLowerCase()) === (s == null ? void 0 : s.address.toLowerCase());
        return e.jsx("div", {
            className: M("max-w-[243px] overflow-x-hidden rounded-lg bg-alternative items-center border border-default flex w-auto p-2 px-4", {
                "mx-auto mb-4": !!n
            }),
            children: e.jsxs("div", {
                className: "flex items-center",
                children: [e.jsx(Lt, {
                    accountIdenticonType: t,
                    className: "rounded-full flex items-center mr-3",
                    address: n || (s == null ? void 0 : s.address) || "",
                    avatarUri: s == null ? void 0 : s.ensAvatar,
                    size: 6
                }), e.jsxs("div", {
                    children: [e.jsx(p, {
                        scale: b.ParagraphSm,
                        bold: !0,
                        className: "truncate",
                        children: ke(n || (s == null ? void 0 : s.name), 12)
                    }), !l && e.jsxs(p, {
                        scale: b.ParagraphXs,
                        subdued: !0,
                        className: "truncate",
                        children: ["(", ke(s == null ? void 0 : s.address, 12), ")"]
                    })]
                })]
            })
        })
    },
    Gs = ({
        order: n
    }) => {
        var w, S;
        const {
            paymentMethod: t,
            cryptoAmount: s,
            exchangeRate: l,
            cryptoCurrency: r,
            fiatCurrency: o,
            walletAddress: a,
            fiatAmount: i,
            createdAt: h,
            totalFeesFiat: c,
            provider: m,
            providerOrderId: y
        } = n || {}, g = (S = (w = m == null ? void 0 : m.links) == null ? void 0 : w.find(j => j.name === _t.SUPPORT)) == null ? void 0 : S.url, f = x.useMemo(() => {
            if (t != null && t.name) return e.jsxs("div", {
                className: "flex justify-end",
                children: [e.jsx(p, {
                    scale: b.ParagraphSm,
                    subdued: !0,
                    className: "text-end",
                    "data-testid": "provider-name",
                    children: m == null ? void 0 : m.name
                }), g && e.jsxs(e.Fragment, {
                    children: [e.jsx(p, {
                        scale: b.ParagraphSm,
                        subdued: !0,
                        className: "px-2",
                        children: "·"
                    }), e.jsx(Be, {
                        className: "text-alternative text-sm text-end underline",
                        href: g,
                        "data-testid": "provider-support-link",
                        children: "Contact Support"
                    })]
                })]
            })
        }, [t == null ? void 0 : t.name, m == null ? void 0 : m.name, g]), d = x.useMemo(() => {
            if (!(!i || !c)) return i - c
        }, [i, c]), v = x.useMemo(() => {
            var j;
            return [{
                title: "Order ID",
                value: y || "..."
            }, {
                title: "Date & time",
                value: h ? isNaN(h) ? Pe((j = new Date(h)) == null ? void 0 : j.getTime()) : Pe(h) : "..."
            }, {
                title: "Payment Method",
                value: (t == null ? void 0 : t.name) || "...",
                details: f || "..."
            }, {
                title: "Token Amount",
                value: s ? Te(Number(s), r == null ? void 0 : r.symbol) : "..."
            }, {
                title: "Exchange Rate",
                value: l ? `1 ${r==null?void 0:r.symbol} @ ${Ot(l,o==null?void 0:o.symbol)}` : "..."
            }, {
                title: `${o==null?void 0:o.symbol} amount`,
                value: d ? ee(d, o) : "..."
            }, {
                title: "Total Fees",
                value: c ? ee(c, o) : "..."
            }, {
                title: "Purchase amount total",
                value: i ? ee(i, o) : "...",
                addDivider: !0
            }]
        }, [d, h, s, r == null ? void 0 : r.symbol, l, i, o, t == null ? void 0 : t.name, f, y, c]);
        return e.jsxs("div", {
            className: "p-4 flex flex-col rounded-xl border border-muted w-full",
            "data-testid": "order-data",
            children: [e.jsx($s, {
                addressOverride: a
            }), e.jsx("div", {
                className: "order-data space-y-3",
                children: v.map(j => e.jsxs("div", {
                    children: [j.addDivider && e.jsx(ce, {
                        className: "mb-4"
                    }), e.jsxs("div", {
                        className: "flex justify-between",
                        "data-testid": "order-detail-item",
                        children: [e.jsx(p, {
                            scale: b.ParagraphSm,
                            children: j.title
                        }), e.jsx("div", {
                            children: e.jsx(p, {
                                scale: b.ParagraphSm,
                                bold: !0,
                                className: "text-right max-w-[250px]",
                                children: j.value
                            })
                        })]
                    }, j.title), j.details]
                }, j.title))
            })]
        })
    },
    Qs = () => {
        const n = Y(Q.RampOrders);
        return e.jsxs("div", {
            className: "border-b border-muted flex w-full items-center justify-between p-6",
            children: [e.jsx("div", {
                id: "flex-placeholder",
                className: "w-[30px]"
            }), e.jsx(p, {
                scale: b.HeadingSm,
                bold: !0,
                center: !0,
                children: "Order Details"
            }), e.jsx(zt, {
                openOrdersModal: n
            })]
        })
    },
    Vs = () => {
        Et();
        const n = Y(Q.RampOrders),
            [t, s] = x.useState(null),
            [l] = At(),
            r = l.get("orderId"),
            o = u(pe);
        return x.useEffect(() => {
            var a, i;
            t && Mt({
                order_id: t.id,
                status: t.status,
                payment_method_id: te((a = t.paymentMethod) == null ? void 0 : a.id),
                provider: (i = t.provider) == null ? void 0 : i.name,
                type: t.orderType
            })
        }, [t]), x.useEffect(() => {
            const a = o == null ? void 0 : o.find(i => (i == null ? void 0 : i.id) === r);
            a && s(a)
        }, [r, o]), t != null && t.id ? e.jsxs("div", {
            "data-testid": "order-details-page",
            children: [e.jsx(Qs, {}), e.jsxs("div", {
                className: "min-h-[574px] p-6 flex flex-col justify-between",
                children: [e.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                    children: [e.jsx(qs, {
                        order: t
                    }), e.jsx(Gs, {
                        order: t
                    })]
                }), e.jsxs("div", {
                    className: "mt-4",
                    children: [e.jsx(It, {
                        to: "/buy",
                        className: "mt-4 w-[50%] mx-auto",
                        children: "Make another purchase"
                    }), e.jsx(T, {
                        variant: "link",
                        className: "text-center mt-4 block mx-auto",
                        onClick: n,
                        children: "View all orders"
                    })]
                })]
            })]
        }) : e.jsx(re, {})
    },
    Ys = Vs,
    zs = () => {
        const n = Kt(C.Buy);
        return n ? e.jsx("div", {
            className: "flex text-center justify-center h-96 items-center",
            children: n
        }) : e.jsx("div", {
            className: "flex text-center justify-center h-96 items-center",
            children: e.jsx(V, {
                size: "lg"
            })
        })
    },
    Ks = zs;

function oa() {
    Rt(C.Buy);
    const {
        onrampMaintenanceMode: n,
        onrampWideScreenBuildQuoteUi: t
    } = ae(), s = [n].some(l => l === void 0);
    return x.useEffect(() => {
        Ft({
            href: window.location.href,
            widget_design_type: t ? "wide" : "narrow"
        })
    }, [t]), x.useEffect(() => {
        Le && (window.location.href = "metamask://buy-crypto")
    }, []), !s && n ? e.jsx(Ut, {
        routeName: Dt.BUY
    }) : Le ? e.jsx(Zt, {
        title: C.Buy
    }) : e.jsx(Xt, {
        children: e.jsx(Tt, {
            children: e.jsxs(E, {
                element: e.jsx(Jt, {
                    isLoading: s,
                    title: C.Buy
                }),
                children: [e.jsx(E, {
                    path: "/",
                    element: e.jsx(hs, {})
                }), e.jsx(E, {
                    element: e.jsx(es, {
                        rampType: C.Buy
                    }),
                    children: e.jsxs(E, {
                        element: e.jsx(ts, {
                            rampType: C.Buy
                        }),
                        children: [e.jsxs(E, {
                            element: e.jsx(ss, {}),
                            children: [e.jsx(E, {
                                path: W.REGION,
                                element: e.jsx(as, {
                                    rampType: C.Buy
                                })
                            }), e.jsx(E, {
                                path: W.PAYMENT_METHOD,
                                element: e.jsx(cs, {})
                            }), e.jsx(E, {
                                path: W.ORDER_PROCESS,
                                element: e.jsx(Ks, {})
                            })]
                        }), e.jsxs(E, {
                            element: e.jsx(ns, {}),
                            children: [e.jsx(E, {
                                path: W.BUILD_QUOTE,
                                element: e.jsx(Us, {})
                            }), e.jsx(E, {
                                path: W.ORDER_DETAILS,
                                element: e.jsx(Ys, {})
                            })]
                        })]
                    })
                }), e.jsx(E, {
                    path: "*",
                    element: e.jsx(Bt, {
                        path: Ht.BUY
                    })
                })]
            })
        })
    })
}
export {
    oa as
    default
};