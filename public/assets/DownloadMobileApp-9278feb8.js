import {
    r as d,
    j as r,
    t as me,
    u as m,
    s as P,
    N as ss,
    R as g,
    aH as U,
    P as ts,
    bv as js,
    b as R,
    bw as As,
    bx as Ps,
    by as as,
    bz as Ns,
    bA as Ls,
    bB as Xe,
    bg as Fe,
    b8 as oe,
    bj as ee,
    bk as Be,
    bC as Ms,
    bD as Fs,
    ba as fe,
    bq as Ue,
    w as $e,
    bE as Bs,
    bl as ns,
    bi as Us,
    bF as $s,
    bG as Ds,
    bb as Ts,
    bH as Gs,
    bI as Hs,
    bJ as Ze,
    bK as Qs,
    bL as Vs,
    bM as De,
    bc as Ys,
    aR as Te,
    v as Ge,
    bN as He,
    bO as Qe,
    bP as ye,
    z as cs,
    bm as Ws,
    bQ as is,
    a2 as S,
    bR as Ks,
    bS as zs,
    bT as rs,
    bU as Xs,
    bV as Zs,
    p as he,
    b5 as we,
    bW as Js,
    bX as qs,
    bY as et,
    bZ as st,
    b_ as tt,
    b$ as os,
    $ as T,
    c0 as ge,
    b2 as Ve,
    c1 as at,
    c2 as Ye,
    b3 as nt,
    c3 as ct,
    c4 as je,
    c5 as it,
    c6 as rt,
    c7 as ot,
    b4 as Pe,
    a7 as pe,
    c8 as ls,
    c9 as lt,
    ao as ie,
    T as G,
    ca as dt,
    cb as ut,
    cc as ds,
    cd as us,
    a6 as We,
    ce as be,
    e as mt,
    f as ft,
    d as ht,
    g as pt,
    aM as ms,
    cf as bt,
    a as se,
    n as te,
    q as Ke,
    cg as xt,
    ch as _t,
    F as xe,
    ci as Ne,
    cj as Ct,
    ck as fs,
    m as vt,
    cl as yt,
    cm as gt,
    X as kt,
    cn as Et,
    co as wt,
    cp as It,
    cq as St,
    G as Ot,
    cr as Rt,
    cs as jt,
    ct as At,
    cu as Pt,
    cv as Nt,
    cw as Lt,
    cx as Mt,
    M as _e,
    L as Ft,
    D as Bt,
    k as Ie,
    Z as hs,
    bp as ke,
    cy as Le,
    cz as Ae,
    cA as Me,
    cB as Ut,
    cC as $t,
    i as re,
    as as Je,
    ac as ps,
    ad as bs,
    ae as xs,
    _ as _s,
    aj as Dt,
    A as Tt,
    am as Gt,
    aP as ce,
    cD as Ht,
    cE as Qt,
    cF as Vt,
    cG as Yt,
    cH as Wt,
    cI as Kt,
    cJ as zt,
    cK as Xt,
    an as qe,
    cL as Zt,
    cM as Jt,
    cN as Cs,
    cO as qt,
    cP as vs,
    cQ as ys,
    cR as Ee,
    cS as ea,
    cT as sa,
    cU as ta,
    a$ as gs,
    cV as aa,
    cW as na,
    cX as ca,
    b1 as ia,
    cY as ra,
    cZ as oa,
    x as es,
    ai as la
} from "./bootstrap-7c5c33c8.js";
import {
    G as da
} from "./GenericError-4cf31668.js";
import {
    T as ua,
    f as ma
} from "./faChevronDown-a9475498.js";
import {
    u as fa
} from "./useBreakpoint-f1843395.js";
const In = ({
        preCountdownText: a,
        onCountdownComplete: s,
        countdownDuration: e = 30,
        shouldRepeat: t = !0,
        className: c,
        redText: o = !0,
        hideCountdownValue: u,
        ...i
    }) => {
        if (e > 60 || e < 1) throw "Countdown duration must be number 1-60";
        const [n, f] = d.useState(e);
        return d.useEffect(() => {
            if (n > 0) {
                const l = setInterval(() => {
                    f(n - 1)
                }, 1e3);
                return () => {
                    clearInterval(l)
                }
            }
        }, [n]), d.useEffect(() => {
            n === 0 && (s && s(), t && f(e))
        }, [e, s, t, n]), u ? null : n > 0 && n <= 60 ? r.jsxs("div", {
            className: me("text-sm whitespace-nowrap tabular-nums bg-alternative w-fit mx-auto py-1 px-3 rounded-full", c),
            ...i,
            children: [a, " ", r.jsxs("span", {
                className: me("font-bold", {
                    "text-error-default": o && n <= 10
                }),
                children: ["0:", n < 10 && "0", n]
            })]
        }) : null
    },
    ha = "/region",
    pa = "/payment-method",
    ba = "/cash-out-destination",
    xa = "/quotes",
    _a = "/build-quote",
    Ca = "/orders",
    va = "/orders/details",
    ya = "/order-process/:providerCode",
    Sn = {
        REGION: ha,
        PAYMENT_METHOD: pa,
        CASH_OUT_DESTINATION: ba,
        QUOTES: xa,
        BUILD_QUOTE: _a,
        ORDERS: Ca,
        ORDER_DETAILS: va,
        ORDER_PROCESS: ya
    },
    ga = ({
        rampType: a
    }) => m(P) ? r.jsx(ss, {
        replace: !0,
        to: {
            pathname: a === g.Buy ? `${U.BUY}/payment-method` : `${U.SELL}/cash-out-destination`
        }
    }) : r.jsx(ts, {
        children: r.jsx(js, {
            rampType: a
        })
    }),
    On = ga;

function Z() {
    const a = R(),
        s = m(As),
        e = d.useCallback(t => {
            a(Ps(t))
        }, [a]);
    return {
        rampAccount: s,
        setRampAccount: e
    }
}

function ka(a, s) {
    for (var e, t = -1, c = a.length; ++t < c;) {
        var o = s(a[t]);
        o !== void 0 && (e = e === void 0 ? o : e + o)
    }
    return e
}
var Ea = ka,
    wa = Ns,
    Ia = Ea;

function Sa(a, s) {
    return a && a.length ? Ia(a, wa(s)) : 0
}
var Oa = Sa;
const ue = as(Oa);

function Ra(a) {
    return a && a.length ? a[0] : void 0
}
var ja = Ra,
    Aa = ja;
const ks = as(Aa);

function Es() {
    const [a, s] = d.useState(!0);
    return d.useEffect(() => {
        const e = () => {
            s(!document.hidden)
        };
        return document.addEventListener("visibilitychange", e), () => {
            document.removeEventListener("visibilitychange", e)
        }
    }, []), a
}
const ws = () => {
        const {
            ldClient: a,
            ldUser: s,
            loading: e,
            error: t
        } = Ls();
        return d.useCallback(async (c, o) => {
            if (!e) {
                if (t) {
                    Xe(t);
                    return
                }
                try {
                    a && s && a.identify({
                        key: s.key,
                        custom: { ...s.custom,
                            ...c
                        }
                    }, void 0, o)
                } catch (u) {
                    throw Xe(u), u
                }
            }
        }, [s, e, t, a])
    },
    Pa = a => {
        var b, y;
        const s = R(),
            e = m(P),
            t = m(Fe),
            c = m(oe),
            o = m(ee),
            u = m(Be),
            i = m(Ms),
            n = m(Fs),
            f = m(fe),
            {
                chain: l
            } = Ue(),
            x = l == null ? void 0 : l.id,
            h = (y = (b = $e[x || 1]) == null ? void 0 : b.nativeCurrency) == null ? void 0 : y.symbol,
            v = d.useMemo(() => {
                if (u.length === 0 || i) return null;
                const k = u.find(_ => _.symbol === h && `${_.network.chainId}` == `${x}`);
                if (k) return k;
                const E = u.find(_ => {
                    var C;
                    return _.symbol === "ETH" && `${(C=_==null?void 0:_.network)==null?void 0:C.chainId}` == "1"
                });
                return E || (u[0] ? ? null)
            }, [x, u, i, h]);
        d.useEffect(() => {
            a && e && c && f && s(Bs({
                sdk: a,
                regionId: e.id,
                cashOutDestinationId: c.id,
                fiatToReceiveId: f.id
            }))
        }, [s, f, c, e, a, t.length]), d.useEffect(() => {
            v && (!o || !n) && s(ns(v))
        }, [o, s, n, v])
    },
    Na = a => {
        const s = m(P),
            e = m(Us),
            t = m(Fe),
            c = R();
        d.useEffect(() => {
            a && (s != null && s.id) && c($s({
                sdk: a,
                regionId: s == null ? void 0 : s.id
            }))
        }, [c, s == null ? void 0 : s.id, a]), d.useEffect(() => {
            t.length > 0 && !e && c(Ds(t[0]))
        }, [t, c, e])
    },
    La = a => {
        const s = m(P),
            e = m(oe),
            t = m(Ts),
            c = m(Gs),
            o = R();
        d.useEffect(() => {
            a && (s != null && s.id) && (e != null && e.id) && o(Hs({
                sdk: a,
                regionId: s.id,
                cashOutDestinationId: e.id
            }))
        }, [e == null ? void 0 : e.id, o, s == null ? void 0 : s.id, a]), d.useEffect(() => {
            s && c ? o(Ze(c)) : s && t.length > 0 && o(Ze(t[0]))
        }, [t, s, o, c])
    },
    Ma = (a, s) => {
        var i, n, f, l;
        const e = R(),
            t = (i = m(P)) == null ? void 0 : i.id,
            c = (n = m(ee)) == null ? void 0 : n.id,
            o = (f = m(fe)) == null ? void 0 : f.id,
            u = (l = m(oe)) == null ? void 0 : l.id;
        d.useEffect(() => {
            a && t && c && s > 0 && o && u && e(Qs({
                sdk: a,
                regionId: t,
                cryptoToSellId: c,
                amountToSell: s,
                fiatToReceiveId: o,
                cashoutDestinationId: u
            }))
        }, [u, c, e, o, t, a, s])
    },
    Fa = a => {
        const s = m(P),
            e = m(oe),
            t = m(ee),
            c = m(fe),
            o = R();
        d.useEffect(() => {
            a && s && e && t && c && o(Vs({
                sdk: a,
                regionId: s.id,
                cashOutDestinationId: e.id,
                cryptoToSellId: t.id,
                fiatToReceiveId: c.id
            }))
        }, [e, t, o, c, s, a])
    },
    Is = d.createContext(void 0),
    Ba = ({
        value: a,
        ...s
    }) => {
        var J, le;
        const e = d.useContext(De),
            t = ws(),
            {
                sdk: c
            } = e,
            o = Es(),
            {
                rampAccount: u
            } = Z(),
            i = m(P),
            n = m(oe),
            f = m(fe),
            l = m(ee),
            x = m(Ys),
            [h, v] = d.useState(0),
            [b, y] = d.useState(""),
            [k, E] = d.useState(!1),
            _ = d.useCallback(async () => {
                var N;
                E(!0), y("");
                const A = (N = l == null ? void 0 : l.network) == null ? void 0 : N.chainId;
                if (A && Te(Ge(A))) try {
                    const L = await He(),
                        K = Qe(L);
                    v(K)
                } catch {
                    y("Couldn't fetch balance")
                } else try {
                    const L = await ye(Number(A) || cs.ChainId.ETHEREUM, u || "", l == null ? void 0 : l.decimals, l == null ? void 0 : l.address);
                    v(L)
                } catch {
                    y("Couldn't fetch balance")
                }
                E(!1)
            }, [u, l == null ? void 0 : l.address, l == null ? void 0 : l.decimals, (J = l == null ? void 0 : l.network) == null ? void 0 : J.chainId]);
        d.useEffect(() => {
            _()
        }, [_]);
        const C = d.useMemo(() => ({
                data: h,
                isFetching: k,
                error: b
            }), [h, b, k]),
            [p, I] = d.useState(0);
        d.useEffect(() => {
            I(0)
        }, [i == null ? void 0 : i.id]);
        const $ = d.useMemo(() => p > 0 && !!x && p > x.maxAmount, [p, x]),
            V = d.useMemo(() => p > 0 && !!x && p < x.minAmount, [p, x]),
            z = !u || !!(C != null && C.data && p <= (C == null ? void 0 : C.data)),
            {
                estimatedGasFeeInEth: Y
            } = Ws(21e3 * 1.2),
            H = !!(p && (C != null && C.data) && p > 0 && z && p + Y > (C == null ? void 0 : C.data)),
            j = d.useMemo(() => {
                const A = !!c,
                    Q = !!(i != null && i.id),
                    N = !!(n != null && n.id),
                    L = !!(l != null && l.id),
                    K = !!(f != null && f.id),
                    q = !!p && p > 0;
                return !!(A && Q && N && L && K && q)
            }, [c, i == null ? void 0 : i.id, n == null ? void 0 : n.id, l == null ? void 0 : l.id, f == null ? void 0 : f.id, p]),
            [w, M] = is(c, {
                method: "getSellQuotes",
                onMount: !1
            }, i == null ? void 0 : i.id, n == null ? void 0 : n.id, l == null ? void 0 : l.id, f == null ? void 0 : f.id, p, u),
            W = d.useCallback(async A => {
                var Q, N, L, K, q, F;
                if (j) try {
                    const ae = {
                        cash_out_destination: S(n == null ? void 0 : n.id),
                        chain_id_source: `${(Q=l==null?void 0:l.network)==null?void 0:Q.chainId}`,
                        crypto_amount: p,
                        currency_destination: S(f == null ? void 0 : f.id),
                        currency_source: S(l == null ? void 0 : l.id),
                        percent_of_token_balance: Ks(C == null ? void 0 : C.data, p),
                        region: i == null ? void 0 : i.id
                    };
                    o && zs(ae);
                    const O = await M();
                    if (o) {
                        const B = (O == null ? void 0 : O.filter(D => !D.error)) || [],
                            de = (O == null ? void 0 : O.filter(D => D.error)) || [];
                        if (B.length > 0) {
                            const D = Re => Re / B.length,
                                ne = ue(B, "amountIn"),
                                X = ue(B, "providerFee"),
                                ve = {
                                    average_fiat_out: D(ne),
                                    average_processing_fee: D(X),
                                    cash_out_destination_id: S(n == null ? void 0 : n.id),
                                    chain_id_source: `${(N=l==null?void 0:l.network)==null?void 0:N.chainId}`,
                                    crypto_amount: p,
                                    currency_destination: f == null ? void 0 : f.symbol,
                                    currency_source: l == null ? void 0 : l.symbol,
                                    provider_offramp_first: ((K = (L = ks(B)) == null ? void 0 : L.provider) == null ? void 0 : K.name) || "",
                                    provider_offramp_last: ((F = (q = rs(B)) == null ? void 0 : q.provider) == null ? void 0 : F.name) || "",
                                    provider_offramp_list: B.map(Re => {
                                        var ze;
                                        return (ze = Re.provider) == null ? void 0 : ze.name
                                    }),
                                    refresh_count: A,
                                    results_count: B.length
                                };
                            Xs(ve)
                        }
                        de.length > 0 && de.forEach(D => {
                            var ne, X;
                            Zs({
                                cash_out_destination_id: S(n == null ? void 0 : n.id),
                                chain_id_source: `${(ne=l==null?void 0:l.network)==null?void 0:ne.chainId}`,
                                crypto_amount: p,
                                currency_destination: (f == null ? void 0 : f.symbol) || "",
                                currency_source: (l == null ? void 0 : l.symbol) || "",
                                error_message: D.message || "",
                                provider_offramp: ((X = D.provider) == null ? void 0 : X.name) || ""
                            })
                        })
                    }
                } catch (ae) {
                    console.error("Error fetching quotes", ae)
                }
            }, [o, M, n == null ? void 0 : n.id, l == null ? void 0 : l.id, (le = l == null ? void 0 : l.network) == null ? void 0 : le.chainId, l == null ? void 0 : l.symbol, C == null ? void 0 : C.data, f == null ? void 0 : f.id, f == null ? void 0 : f.symbol, j, i == null ? void 0 : i.id, p]);
        d.useEffect(() => {
            W(0)
        }, [W]), d.useEffect(() => {
            t({
                rampRegion: i == null ? void 0 : i.id.replace("/regions/", ""),
                rampPaymentMethod: n == null ? void 0 : n.id.replace("/payments/", ""),
                rampCurrencySource: l == null ? void 0 : l.symbol,
                rampCurrencyDestination: f == null ? void 0 : f.symbol
            })
        }, [n, l, f, i, t]), Na(c), Pa(c), La(c), Ma(c, p), Fa(c), d.useEffect(() => {
            u && W(0)
        }, [u, W]);
        const Ce = { ...e,
            cryptoToSellBalance: C,
            sellAmount: p,
            setSellAmount: I,
            isSellAmountMoreThanMax: $,
            isSellAmountLessThanMin: V,
            isSellAmountWithinBalance: z,
            insufficientGasBalance: H,
            sellQuotes: w,
            refetchSellQuotes: W
        };
        return r.jsx(Is.Provider, {
            value: a || Ce,
            ...s
        })
    },
    Rn = Ba,
    Se = () => d.useContext(Is) || {},
    Ua = () => {
        const {
            cryptoToSellBalance: a
        } = Se(), s = (a == null ? void 0 : a.data) || 1, e = he();
        return d.useCallback(async t => {
            var c, o, u, i, n;
            if (we(t)) {
                e == null || e.track("offramp-sale-completed");
                const f = t != null && t.cryptoAmount ? Number(t == null ? void 0 : t.cryptoAmount) / s : 0;
                Js({
                    crypto_amount: Number(t == null ? void 0 : t.cryptoAmount),
                    chain_id_source: `${(c=t==null?void 0:t.cryptoCurrency)==null?void 0:c.network.chainId}`,
                    fiat_out: t.fiatAmount,
                    currency_destination: (o = t == null ? void 0 : t.fiatCurrency) == null ? void 0 : o.symbol,
                    currency_source: (u = t == null ? void 0 : t.cryptoCurrency) == null ? void 0 : u.symbol,
                    cash_out_destination_id: S((i = t == null ? void 0 : t.paymentMethod) == null ? void 0 : i.id),
                    provider_offramp: t == null ? void 0 : t.provider.name,
                    order_id: S(t == null ? void 0 : t.id),
                    exchange_rate: t.exchangeRate,
                    percent_of_token_balance: f,
                    total_fee: t.totalFeesFiat
                })
            } else e == null || e.track("onramp-purchase-completed"), qs({
                amount: t.fiatAmount,
                amount_in_usd: t.fiatAmountInUsd,
                chain_id_destination: `${(n=t==null?void 0:t.cryptoCurrency)==null?void 0:n.network.chainId}`,
                crypto_out: Number(t.cryptoAmount),
                currency_destination: t.cryptoCurrency.symbol,
                currency_source: t.fiatCurrency.symbol,
                exchange_rate: t.exchangeRate,
                order_type: et.Buy,
                provider_onramp: t.provider.name,
                total_fee: t.totalFeesFiat
            })
        }, [s, e])
    },
    $a = () => {
        const {
            cryptoToSellBalance: a
        } = Se(), s = (a == null ? void 0 : a.data) || 1;
        return d.useCallback(async e => {
            var t, c, o, u, i, n;
            if (we(e)) {
                const f = e != null && e.cryptoAmount ? Number(e == null ? void 0 : e.cryptoAmount) / s : 0;
                st({
                    crypto_amount: Number(e == null ? void 0 : e.cryptoAmount),
                    chain_id_source: `${(t=e==null?void 0:e.cryptoCurrency)==null?void 0:t.network.chainId}`,
                    fiat_out: e.fiatAmount,
                    currency_destination: (c = e == null ? void 0 : e.fiatCurrency) == null ? void 0 : c.symbol,
                    currency_source: (o = e == null ? void 0 : e.cryptoCurrency) == null ? void 0 : o.symbol,
                    cash_out_destination_id: S((u = e == null ? void 0 : e.paymentMethod) == null ? void 0 : u.id),
                    provider_offramp: e == null ? void 0 : e.provider.name,
                    order_id: S(e == null ? void 0 : e.id),
                    exchange_rate: e.exchangeRate,
                    percent_of_token_balance: f,
                    total_fee: e.totalFeesFiat
                })
            } else tt({
                chain_id_destination: `${(i=e==null?void 0:e.cryptoCurrency)==null?void 0:i.network.chainId}`,
                currency_destination: e.cryptoCurrency.symbol,
                currency_source: e.fiatCurrency.symbol,
                order_id: e.id,
                order_type: os.Buy,
                payment_method_id: S((n = e == null ? void 0 : e.paymentMethod) == null ? void 0 : n.id),
                provider_onramp: e == null ? void 0 : e.provider.name
            })
        }, [s])
    },
    Da = () => {
        const a = Ua(),
            s = $a(),
            [e, t] = d.useState("");
        return d.useCallback(async c => {
            if (c.id !== e) switch (c.status) {
                case T.OrderStatusEnum.Completed:
                    await a(c), t(c.id);
                    break;
                case T.OrderStatusEnum.Failed:
                    await s(c), t(c.id);
                    break
            }
        }, [e, a, s])
    },
    Ta = () => {
        const a = R(),
            s = Da();
        return d.useCallback(async e => {
            const t = { ...e
                },
                c = Date.now();
            if (t.lastTimeFetched || (t.lastTimeFetched = 0), t.errorCount === void 0 && (t.errorCount = 0), t != null && t.pollingSecondsMinimum && t.pollingSecondsMinimum > 0 && t.lastTimeFetched + t.pollingSecondsMinimum * 1e3 > c || t.errorCount > 0 && t.lastTimeFetched + Math.pow(ge / 1e3, t.errorCount + 1) * 1e3 > c) return;
            const o = await Ve.orders(),
                u = we(t) ? "getSellOrder" : "getOrder",
                i = await o[u](t.id, t.walletAddress);
            i.id !== t.id ? (a(at(t)), a(Ye(i))) : (i.lastTimeFetched = c, i.status === T.OrderStatusEnum.Unknown && (i.errorCount = t.errorCount + 1), a(nt(i))), i.status !== t.status && t.status !== T.OrderStatusEnum.Unknown && await s(i)
        }, [a, s])
    },
    Ga = () => {
        const a = R();
        return d.useCallback(async s => {
            const e = { ...s
                },
                t = Date.now();
            if (e.lastTimeFetched + Math.pow(ge / 1e3, e.errorCount + 1) * 1e3 > t) return;
            const c = await Ve.orders(),
                o = we(e) ? "getSellOrder" : "getOrder",
                u = await c[o](e.id, e.account);
            switch (u.status) {
                case T.OrderStatusEnum.Completed:
                case T.OrderStatusEnum.Cancelled:
                case T.OrderStatusEnum.Failed:
                case T.OrderStatusEnum.Pending:
                    a(je(e)), a(Ye(u));
                    break;
                case T.OrderStatusEnum.IdExpired:
                    {
                        a(je(e));
                        break
                    }
                case T.OrderStatusEnum.Precreated:
                    break;
                case T.OrderStatusEnum.Unknown:
                    if (e.errorCount > ct) a(je(e));
                    else {
                        const i = { ...e,
                            lastTimeFetched: t,
                            errorCount: e.errorCount + 1
                        };
                        a(it(i));
                        break
                    }
            }
        }, [a])
    },
    Ha = () => {
        const a = m(rt),
            s = m(ot),
            e = Ta(),
            t = Ga();
        Pe(async () => {
            await Promise.all(s.map(e))
        }, s.length > 0 ? ge : null), Pe(async () => {
            await Promise.all(a.map(t))
        }, a.length > 0 ? ge : null)
    },
    Qa = Ha,
    Va = () => d.useContext(De) || {},
    Ss = Va,
    Ya = () => {
        const {
            t: a
        } = pe(), s = ls(), t = m(lt).filter(({
            isActive: c
        }) => c);
        return s ? t.length ? r.jsx("div", {
            className: "flex space-x-2 justify-center mt-4 w-full",
            children: t.map(c => r.jsx(ie, {
                to: "/settings/buy",
                children: r.jsx(dt, {
                    variant: "subdued",
                    className: "cursor-pointer",
                    children: c.label || ut(c.key)
                })
            }, c.key))
        }) : r.jsxs("div", {
            className: "flex space-x-1 justify-center mt-4 w-full",
            children: [r.jsx(ie, {
                to: "/settings/buy",
                children: a("ramp.manageActivationKeys")
            }), r.jsx(G, {
                children: a("ramp.toSeeQuotes")
            })]
        }) : null
    },
    Wa = Ya;

function jn({
    isLoading: a = !1,
    title: s
}) {
    Qa();
    const {
        sdk: e,
        sdkError: t
    } = Ss();
    return r.jsxs(ds, {
        children: [r.jsx(us, {
            title: s
        }), r.jsx("div", {
            id: "onramp-page",
            children: !e || a ? r.jsx("div", {
                className: "fixed inset-0 flex items-center justify-center",
                children: r.jsx(We, {})
            }) : t ? r.jsx(da, {}) : r.jsxs(r.Fragment, {
                children: [r.jsx(be, {}), r.jsx(Wa, {})]
            })
        })]
    })
}
const Ka = ({
        rampType: a
    }) => {
        const s = a === g.Buy ? mt : ft,
            [e] = ht(s);
        return e ? r.jsx(be, {}) : r.jsx(ss, {
            replace: !0,
            to: {
                pathname: a === g.Buy ? U.BUY : U.SELL
            }
        })
    },
    An = Ka,
    Oe = (a, s) => {
        const e = R(),
            t = pt();
        return d.useCallback(c => {
            e(ms(a, {
                hideModalOnSelect: !0,
                ...c,
                ...s
            }, {
                content: {
                    maxWidth: "480px",
                    backgroundColor: t ? "rgb(30 31 37)" : "white",
                    overflow: "scroll"
                }
            }))
        }, [s, e, t, a])
    },
    za = a => {
        const s = R(),
            {
                intendedCryptoToBuy: e,
                isBuyIntent: t
            } = bt(),
            c = m(P),
            o = m(se),
            u = m(te),
            i = m(Ke),
            n = m(xt),
            f = m(_t),
            l = m(xe),
            {
                chain: x
            } = Ue(),
            h = x == null ? void 0 : x.id,
            v = d.useCallback((y, k) => i.find(E => E.symbol === y && E.network.chainId === k), [i]),
            b = d.useMemo(() => {
                var E, _;
                if (i.length === 0 || n) return null;
                if (t && e) return e;
                const y = v((_ = (E = $e[h || 1]) == null ? void 0 : E.nativeCurrency) == null ? void 0 : _.symbol, `${h||1}`);
                if (y) return y;
                const k = v("ETH", "1");
                return k || (i[0] ? i[0] : null)
            }, [i, n, h, v, t, e]);
        d.useEffect(() => {
            h && s(Ne(b))
        }, [h, b, s]), d.useEffect(() => {
            a && c && o && l && s(Ct({
                sdk: a,
                regionId: c.id,
                paymentMethodId: o.id,
                fiatToPayId: l.id
            }))
        }, [s, l, o, c, a]), d.useEffect(() => {
            b && (!u || !f) && s(Ne(b))
        }, [u, b, s, f])
    },
    Xa = a => {
        const s = m(P),
            e = m(fs),
            t = m(se),
            c = m(vt),
            o = R();
        d.useEffect(() => {
            a && (s != null && s.id) && o(yt({
                sdk: a,
                regionId: s.id
            }))
        }, [o, s == null ? void 0 : s.id, a]), d.useEffect(() => {
            t && !c && e && e.length > 0 && o(gt(e[0]))
        }, [t, o, e, c])
    },
    Za = a => {
        const s = m(P),
            e = m(se),
            t = m(kt),
            c = m(Et),
            o = R();
        d.useEffect(() => {
            a && (s != null && s.id) && (e != null && e.id) && o(wt({
                sdk: a,
                regionId: s.id,
                paymentMethodId: e.id
            }))
        }, [e == null ? void 0 : e.id, o, s == null ? void 0 : s.id, a]), d.useEffect(() => {
            s && c && o(It(c))
        }, [s, o, t, c])
    },
    Ja = a => {
        const s = m(P),
            e = m(se),
            t = m(te),
            c = m(xe),
            o = R();
        d.useEffect(() => {
            a && s && e && t && c && o(St({
                sdk: a,
                regionId: s.id,
                paymentMethodId: e.id,
                cryptoToBuyId: t.id,
                fiatToPayId: c.id
            }))
        }, [t, o, c, e, s, a])
    },
    Os = d.createContext(void 0),
    qa = ({
        value: a,
        ...s
    }) => {
        var Ce;
        const e = d.useContext(De),
            {
                sdk: t
            } = e,
            c = ws(),
            o = m(P),
            u = m(se),
            i = m(xe),
            n = m(te),
            f = m(Ot),
            {
                rampAccount: l
            } = Z(),
            x = Es(),
            [h, v] = d.useState(0),
            [b, y] = d.useState(""),
            [k, E] = d.useState(!1),
            _ = d.useCallback(async () => {
                var A, Q;
                E(!0), y("");
                const J = (A = n == null ? void 0 : n.network) == null ? void 0 : A.chainId;
                if (J && Te(Ge(J))) try {
                    const N = await He(),
                        L = Qe(N);
                    v(L)
                } catch {
                    y("Couldn't fetch balance")
                } else try {
                    const N = await ye(Number((Q = n == null ? void 0 : n.network) == null ? void 0 : Q.chainId) || cs.ChainId.ETHEREUM, l || "", n == null ? void 0 : n.decimals, n == null ? void 0 : n.address);
                    v(N)
                } catch {
                    y("Couldn't fetch balance")
                }
                E(!1)
            }, [l, n == null ? void 0 : n.address, n == null ? void 0 : n.decimals, (Ce = n == null ? void 0 : n.network) == null ? void 0 : Ce.chainId]);
        d.useEffect(() => {
            _()
        }, [_]);
        const C = d.useMemo(() => ({
                data: h,
                isFetching: k,
                error: b
            }), [h, b, k]),
            [p, I] = d.useState(0);
        d.useEffect(() => {
            I(0)
        }, [o == null ? void 0 : o.id]);
        const [$, V] = d.useState(!1), z = d.useMemo(() => p > 0 && !!f && p > f.maxAmount, [p, f]), Y = d.useMemo(() => p > 0 && !!f && p < f.minAmount, [p, f]), H = d.useMemo(() => !!(t && (o != null && o.id) && (u != null && u.id) && (n != null && n.id) && (i != null && i.id) && p && p > 0 && f), [t, o == null ? void 0 : o.id, u == null ? void 0 : u.id, n == null ? void 0 : n.id, i == null ? void 0 : i.id, p, f]), [j, w] = is(t, {
            method: "getQuotes",
            onMount: !1,
            resetBetweenCalls: !1
        }, o == null ? void 0 : o.id, u == null ? void 0 : u.id, n == null ? void 0 : n.id, i == null ? void 0 : i.id, p, l), M = d.useCallback(async J => {
            var Q, N, L, K, q;
            if (!H) return;
            const le = {
                amount: p,
                chain_id_destination: `${(Q=n==null?void 0:n.network)==null?void 0:Q.chainId}`,
                currency_destination: n == null ? void 0 : n.symbol,
                currency_source: i == null ? void 0 : i.symbol
            };
            x && Rt(le);
            const A = await w();
            if (x) {
                const F = (A == null ? void 0 : A.filter(O => !O.error)) || [],
                    ae = (A == null ? void 0 : A.filter(O => O.error)) || [];
                if (F.length > 0) {
                    const O = X => F.length === 0 ? 0 : X / F.length,
                        B = ue(F, "amountOut"),
                        de = ue(F, "networkFee"),
                        D = ue(F, "providerFee"),
                        ne = {
                            amount: p,
                            average_crypto_out: O(B),
                            average_gas_fee: O(de),
                            average_processing_fee: O(D),
                            average_total_fee: O(de + D),
                            chain_id_destination: `${n==null?void 0:n.network.chainId}`,
                            currency_destination: (n == null ? void 0 : n.symbol) || "",
                            currency_source: (i == null ? void 0 : i.symbol) || "",
                            payment_method_id: S(u == null ? void 0 : u.id),
                            provider_onramp_first: ((L = (N = ks(F)) == null ? void 0 : N.provider) == null ? void 0 : L.name) || "",
                            provider_onramp_last: ((q = (K = rs(F)) == null ? void 0 : K.provider) == null ? void 0 : q.name) || "",
                            provider_onramp_list: F.map(X => {
                                var ve;
                                return (ve = X.provider) == null ? void 0 : ve.name
                            }),
                            refresh_count: J,
                            results_count: F.length
                        };
                    jt(ne)
                }
                ae.length > 0 && ae.forEach(O => {
                    var B;
                    At({
                        amount: p,
                        chain_id_destination: `${n==null?void 0:n.network.chainId}`,
                        currency_destination: (n == null ? void 0 : n.symbol) || "",
                        currency_source: (i == null ? void 0 : i.symbol) || "",
                        error_message: O.message || "",
                        payment_method_id: S(u == null ? void 0 : u.id),
                        provider_onramp: ((B = O.provider) == null ? void 0 : B.name) || ""
                    })
                })
            }
        }, [x, H, p, n == null ? void 0 : n.network.chainId, n == null ? void 0 : n.symbol, i == null ? void 0 : i.symbol, w, u == null ? void 0 : u.id]);
        d.useEffect(() => {
            M(0)
        }, [l]), d.useEffect(() => {
            c({
                rampRegion: o == null ? void 0 : o.id.replace("/regions/", ""),
                rampPaymentMethod: u == null ? void 0 : u.id.replace("/payments/", ""),
                rampCurrencyDestination: n == null ? void 0 : n.symbol,
                rampCurrencySource: i == null ? void 0 : i.symbol
            })
        }, [n == null ? void 0 : n.symbol, i == null ? void 0 : i.symbol, u, o, c]), za(t), Xa(t), Za(t), Ja(t), d.useEffect(() => {
            l && M(0)
        }, [l, M]);
        const W = { ...e,
            isPurchaseAmountMoreThanMax: z,
            isPurchaseAmountLessThanMin: Y,
            cryptoToBuyBalance: C,
            purchaseAmount: p,
            setPurchaseAmount: I,
            isPurchaseInputDirty: $,
            setIsPurchaseInputDirty: V,
            purchaseQuotes: j,
            isReadyToFetchPurchaseQuotes: H,
            refetchPurchaseQuotes: M
        };
        return r.jsx(Os.Provider, {
            value: a || W,
            ...s
        })
    },
    Pn = qa,
    en = () => d.useContext(Os) || {};
var Rs = (a => (a.REGION = "REGION", a.CRYPTO = "CRYPTO", a.PAYMENT_METHOD = "PAYMENT_METHOD", a.FIAT = "FIAT", a))(Rs || {});
const sn = {
        CRYPTO: Pt,
        PAYMENT_METHOD: Nt,
        FIAT: Lt,
        REGION: Mt
    },
    tn = {
        CRYPTO: "ramps-crypto-selector-clicked",
        PAYMENT_METHOD: "ramps-payment-method-selector-clicked",
        FIAT: "ramps-fiat-selector-clicked",
        REGION: "ramps-region-selector-clicked"
    },
    an = (a, s) => {
        const e = he(),
            t = sn[s],
            c = d.useCallback(() => e == null ? void 0 : e.track(tn[s]), [s, e]),
            {
                purchaseAmount: o
            } = en(),
            {
                sellAmount: u
            } = Se(),
            i = m(P),
            n = m(te),
            f = m(ee),
            l = m(xe),
            x = m(fe),
            h = m(se),
            v = m(oe),
            b = m(fs),
            y = m(Fe),
            k = d.useMemo(() => ({
                amount: o || 0,
                chain_id: `${n==null?void 0:n.network.chainId}`,
                crypto_id: n == null ? void 0 : n.name,
                fiat_id: l == null ? void 0 : l.name,
                payment_method_id: h == null ? void 0 : h.name
            }), [o, n, l, h]),
            E = d.useMemo(() => ({
                amount: u || 0,
                chain_id: `${f==null?void 0:f.network.chainId}`,
                crypto_id: f == null ? void 0 : f.name,
                fiat_id: x == null ? void 0 : x.name,
                payment_method_id: v == null ? void 0 : v.name
            }), [u, f, x, v]),
            _ = d.useMemo(() => ({ ...a === g.Buy ? k : E,
                ramp_type: a,
                region_id: i == null ? void 0 : i.id,
                payment_method_list: a === g.Buy ? b.map(p => p.name) : y.map(p => p.name),
                payment_method_count: a === g.Buy ? b.length : y.length
            }), [a, k, E, i == null ? void 0 : i.id, b, y]);
        return d.useCallback(() => {
            t(_), c()
        }, [c, _, t])
    },
    Nn = ({
        isFetching: a,
        rampType: s
    }) => {
        const e = Oe(_e.RampRegion),
            t = m(P),
            c = an(s, Rs.REGION),
            o = d.useCallback(() => {
                c(), e()
            }, [c, e]);
        return r.jsx(r.Fragment, {
            children: a ? r.jsx(Ft, {
                className: "w-16 h-10 mt-0"
            }) : r.jsx(Bt, {
                className: "w-fit py-0 bg-alternative rounded-lg text-xl",
                onClick: o,
                value: t == null ? void 0 : t.emoji,
                "data-testid": "region-selector"
            })
        })
    },
    Ln = ({
        processingOrdersCount: a
    }) => {
        const s = Oe(_e.RampOrders),
            {
                t: e
            } = pe();
        return a === 0 ? null : r.jsxs("div", {
            className: "flex justify-center space-x-2",
            children: [r.jsx(We, {
                size: "xs",
                className: "self-center"
            }), r.jsx(Ie, {
                variant: "link",
                onClick: s,
                children: a === 1 ? e("ramp.processingOrderOne") : e("ramp.processingOrderMany", {
                    count: a
                })
            })]
        })
    },
    nn = a => {
        var Y, H;
        const s = R(),
            {
                rampAccount: e,
                setRampAccount: t
            } = Z(),
            {
                activeAccount: c,
                connectedAccounts: o
            } = hs(ke.ALL),
            {
                chain: u
            } = Ue(),
            i = u == null ? void 0 : u.id,
            n = m(te),
            f = m(Ke),
            l = m(ee),
            x = m(Be),
            h = a === g.Buy ? n : l,
            v = a === g.Buy ? f : x,
            b = a === g.Buy ? Ne : ns,
            y = d.useMemo(() => Le(h), [h]),
            k = d.useMemo(() => v.find(Le), [v]),
            E = o.find(j => Ae(j.address)),
            _ = d.useCallback((j, w) => v.find(M => M.symbol === j && M.network.chainId === `${w}`), [v]),
            C = d.useMemo(() => e && o.some(j => Me(j.address, e)), [e, o]),
            p = Me(e, c == null ? void 0 : c.address),
            I = e && Ae(e),
            $ = (H = (Y = $e[i]) == null ? void 0 : Y.nativeCurrency) == null ? void 0 : H.symbol,
            V = _($, i);
        return d.useEffect(() => {
            (!e || !C) && t(c == null ? void 0 : c.address)
        }, [c == null ? void 0 : c.address, C, e, t]), d.useEffect(() => {
            y && !I && E && t(E.address)
        }, [E, o, I, y, t]), d.useEffect(() => {
            !y && I && t(c == null ? void 0 : c.address)
        }, [c == null ? void 0 : c.address, y, I, t]), d.useEffect(() => {
            I && k && s(b(k))
        }, [I, s, k, b]), d.useEffect(() => {
            !I && !y && !_(h == null ? void 0 : h.symbol, `${h==null?void 0:h.network.chainId}`) && $ && (h == null ? void 0 : h.symbol) !== $ && s(b(V))
        }, [i, I, y, v, s, h, $, V, _, b]), {
            rampAccount: e,
            activeAccount: c,
            activeChainId: i,
            isRampsAccountActive: p,
            isBtcAccountSelected: I,
            handleAccountSelect: j => {
                if (t(j), Ae(j)) {
                    s(b(k));
                    return
                }
                if (y && $) {
                    s(b(V));
                    return
                }
                const w = _(h == null ? void 0 : h.symbol, `${i}`);
                if (w) {
                    s(b(w));
                    return
                }
                if ($) {
                    s(b(V));
                    return
                }
            }
        }
    },
    Mn = ({
        disabled: a,
        rampType: s
    }) => {
        const {
            rampAccount: e,
            activeAccount: t,
            activeChainId: c,
            isRampsAccountActive: o,
            isBtcAccountSelected: u,
            handleAccountSelect: i
        } = nn(s), n = m(Ke), f = m(Be), l = (t == null ? void 0 : t.name.toLowerCase()) === (t == null ? void 0 : t.address.toLowerCase()), x = s === g.Buy ? n : f, v = d.useMemo(() => !!x.find(Le), [x]) ? ke.ALL : ke.EVM;
        return r.jsxs("div", {
            className: "relative flex-grow",
            children: [r.jsx(Ut, {
                accountTypeFilter: v,
                selectedAccountAddress: e,
                onSelectAccountAddress: i,
                hideConnectButton: !0,
                hideAlert: !0,
                disabled: a || !(t != null && t.address),
                activeChainId: c,
                avatarSize: 5,
                chainIds: $t,
                position: "right",
                dropdownClassName: me("border w-full px-4 py-2.5 bg-alternative", {
                    "border-error-default": s === g.Sell && !o && !u
                }),
                renderAccountLabel: b => r.jsxs("div", {
                    children: [r.jsx(G, {
                        scale: re.ParagraphSm,
                        className: "max-w-8 overflow-ellipsis",
                        children: Je(b == null ? void 0 : b.name, 12)
                    }), l ? null : r.jsx(G, {
                        scale: re.ParagraphXs,
                        className: "text-alternative",
                        children: Je(b == null ? void 0 : b.address, 12)
                    })]
                })
            }), r.jsx("div", {
                className: me("absolute text-error-default top-[45px] text-xs", {
                    hidden: s === g.Buy || o || u
                }),
                children: "Switch accounts to continue"
            })]
        })
    },
    cn = a => {
        const s = ps(),
            e = m(te),
            t = R(),
            {
                rampAccount: c
            } = Z(),
            o = `${s}/buy/order-process/{providerCode}`;
        return d.useCallback(async () => {
            if (a) try {
                const u = await a.buy(),
                    {
                        url: i,
                        orderId: n
                    } = await u.createWidget(o);
                return n && t(bs({
                    id: n,
                    chainId: e ? e == null ? void 0 : e.network.chainId.toString() : "1",
                    account: c,
                    orderType: xs.OrderOrderTypeEnum.Buy
                })), i
            } catch {
                return null
            }
        }, [a, o, t, e, c])
    },
    rn = a => {
        const s = ps(),
            e = R(),
            t = m(ee),
            {
                rampAccount: c
            } = Z(),
            o = `${s}/sell/order-process/{providerCode}`;
        return d.useCallback(async () => {
            if (a) try {
                const u = await a.sell(),
                    {
                        url: i,
                        orderId: n
                    } = await u.createWidget(o);
                return n && e(bs({
                    id: n,
                    chainId: t ? `${t==null?void 0:t.network.chainId}` : "1",
                    account: c,
                    orderType: xs.OrderOrderTypeEnum.Sell
                })), i
            } catch {
                return null
            }
        }, [c, o, t, e, a])
    },
    on = () => {
        const a = m(_s);
        return d.useCallback(s => a.some(e => e.status === T.OrderStatusEnum.Completed && e.provider.id === s.provider.id), [a])
    },
    ln = ({
        status: a
    }) => {
        switch (a) {
            case "error":
                return r.jsx(Xt, {
                    size: "18px"
                });
            case "loading":
                return r.jsx(We, {
                    size: "xs"
                });
            default:
                return r.jsx(zt, {
                    size: "18px"
                })
        }
    },
    dn = ({
        rampType: a,
        quote: s,
        onQuoteClick: e,
        isActive: t,
        onCheckoutTriggered: c,
        isSelectable: o = !0
    }) => {
        var H, j;
        const u = Dt.useRef(null),
            i = R(),
            {
                activeAccount: n
            } = hs(ke.ALL),
            {
                rampAccount: f
            } = Z(),
            [l, x] = d.useState(!1),
            [h, v] = d.useState(!1),
            b = ((s == null ? void 0 : s.networkFee) || 0) + ((s == null ? void 0 : s.providerFee) || 0),
            y = ((s == null ? void 0 : s.amountIn) || 0) - b,
            k = on(),
            {
                insufficientGasBalance: E,
                isSellAmountWithinBalance: _
            } = Se(),
            C = w => w != null && w.toString().includes("e-") ? qe(0, s.fiat) : qe(w, s.fiat),
            p = cn(s),
            I = rn(s),
            $ = a === g.Buy ? `${Tt(s==null?void 0:s.amountOut).format("0,0.00[0000]")} ${(H=s.crypto)==null?void 0:H.symbol}` : `≈ ${C(s==null?void 0:s.amountOut)}`,
            V = a === g.Buy ? `≈ ${C((s==null?void 0:s.amountOutInFiat)||y)}` : Gt(s == null ? void 0 : s.amountIn, (j = s.crypto) == null ? void 0 : j.symbol),
            z = async (w = !1) => {
                if (u.current && u.current.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest"
                    }), o && !t && e) {
                    e();
                    return
                }
                if (o && !w || !(n != null && n.address) || a === g.Sell && (!_ || E) || l) return;
                v(!1), x(!0);
                const M = a === g.Buy ? await p() : await I();
                if (x(!1), M) {
                    const W = window.open("about:blank", "_blank");
                    W ? (W.location.href = M, c()) : (v(!0), x(!1))
                } else v(!0), x(!1)
            },
            Y = Me(f, n == null ? void 0 : n.address);
        return r.jsxs("li", {
            role: "presentation",
            ref: u,
            children: [!(n != null && n.address) && r.jsx(ce, {
                id: "order-list-item",
                content: "Connect your MetaMask Wallet"
            }), a === g.Sell && !Y && r.jsx(ce, {
                id: "order-list-item",
                content: "Switch accounts to continue"
            }), a === g.Sell && Y && !_ && r.jsx(ce, {
                id: "order-list-item",
                content: "Insufficient balance"
            }), a === g.Sell && Y && E && r.jsx(ce, {
                id: "order-list-item",
                content: "Insufficient balance for gas fee"
            }), r.jsxs(Ht, {
                onClick: () => z(),
                isActive: t,
                "data-tooltip-id": "order-list-item",
                className: "cursor-pointer",
                children: [r.jsxs("div", {
                    className: "flex justify-between",
                    children: [r.jsxs("div", {
                        className: "flex flex-col my-auto",
                        children: [r.jsxs("div", {
                            className: "flex space-x-2",
                            children: [r.jsx(Qt, {
                                provider: s.provider
                            }), s.provider.environmentType === Vt.ProviderEnvironmentTypeEnum.Staging && r.jsx(G, {
                                subdued: !0,
                                scale: re.ParagraphXs,
                                className: "mt-1",
                                children: "(staging)"
                            }), r.jsx(Yt, {
                                className: "cursor-pointer stroke-icon-alternative hover:stroke-icon-default mt-1 rounded-full",
                                size: "16px",
                                onClick: w => {
                                    w.defaultPrevented || (w.stopPropagation(), w.preventDefault(), i(ms(_e.PaymentProviderDetails, {
                                        quote: s
                                    })), Wt({
                                        provider: s.provider.id || ""
                                    }))
                                }
                            })]
                        }), k(s) && !h && r.jsx("div", {
                            className: "flex mt-2",
                            children: r.jsx(Kt, {
                                className: "cursor-pointer",
                                children: "Previously used"
                            })
                        })]
                    }), r.jsxs("div", {
                        className: "flex",
                        children: [r.jsxs("div", {
                            className: "flex flex-col",
                            children: [r.jsx(G, {
                                className: "text-right",
                                bold: !0,
                                children: $
                            }), r.jsx(G, {
                                className: "text-right",
                                subdued: !0,
                                children: V
                            })]
                        }), !o && r.jsx("div", {
                            className: "my-auto ml-2",
                            children: r.jsx(ln, {
                                status: h ? "error" : l ? "loading" : "default"
                            })
                        })]
                    })]
                }), o && t && r.jsxs(Ie, {
                    width: "full",
                    className: "mt-2",
                    isLoading: l,
                    loadingText: `Redirecting to ${s.provider.name}`,
                    onClick: () => z(!0),
                    children: ["Continue with ", s.provider.name]
                }), h && r.jsxs(G, {
                    center: !0,
                    className: "mt-2 text-error-default",
                    children: ["Error with ", s.provider.name, ". Please try again later."]
                })]
            })]
        }, s.provider.id)
    },
    Fn = ({
        quotes: a,
        trackQuoteSelected: s,
        activeQuoteIndex: e,
        setActiveQuoteIndex: t,
        rampType: c
    }) => {
        const o = he();
        return r.jsx("ul", {
            className: "space-y-4 overflow-y-scroll no-scrollbar",
            children: a.map((u, i) => r.jsx(dn, {
                isActive: i === e,
                onQuoteClick: () => t(i),
                rampType: c,
                quote: u,
                onCheckoutTriggered: () => {
                    o == null || o.track(c === g.Sell ? "off-ramp-quote-selected" : "onramp-quote-selected"), s(u)
                }
            }, u.provider.id))
        })
    },
    un = ({
        className: a,
        openOrdersModal: s,
        ...e
    }) => r.jsxs("div", {
        className: me("w-fit", a),
        ...e,
        children: [r.jsx("span", {
            "data-tooltip-id": "view-orders",
            "data-testid": "view-orders",
            children: r.jsx(ua, {
                onClick: () => {
                    Zt({}), s()
                },
                className: "cursor-pointer hover:bg-hover"
            })
        }), r.jsx(ce, {
            id: "view-orders",
            content: "View all orders"
        })]
    }),
    Bn = ({
        setColToDisplay: a,
        colToDisplay: s,
        rampType: e
    }) => {
        const {
            t
        } = pe(), c = fa("lg"), o = Oe(_e.RampOrders), {
            isTooltipOpen: u,
            closeTooltip: i
        } = Ss();
        return r.jsxs("div", {
            className: "border-b border-muted",
            children: [r.jsxs(ce, {
                id: "extension-redirect-tooltip",
                className: "max-w-xs relative",
                isOpen: u,
                clickable: !0,
                children: [r.jsx(Jt, {
                    "aria-label": "Close modal",
                    className: "cursor-pointer h-4 w-4 absolute right-2 z-50",
                    onClick: i
                }), r.jsx(G, {
                    invertColor: !0,
                    bold: !0,
                    className: "mb-2",
                    children: t("ramp.newCashOut")
                }), r.jsx(G, {
                    invertColor: !0,
                    children: t("ramp.sellFeature")
                })]
            }), r.jsxs("div", {
                className: "flex w-full px-6 justify-between",
                children: [!c && a && s === "select" && r.jsx("button", {
                    onClick: () => a("build"),
                    className: "rounded-lg hover:bg-hover",
                    children: r.jsx(Cs, {
                        size: "lg",
                        icon: qt.faChevronLeft,
                        className: "h-4 w-4 text-default",
                        "aria-hidden": !0
                    })
                }), !a || c || s === "build" ? r.jsx(vs, {
                    variant: "link",
                    className: "!bg-inherit border-b-0 p-0",
                    selectedIndex: e === g.Sell ? 1 : 0,
                    children: r.jsxs(ys, {
                        children: [r.jsx(ie, {
                            to: U.BUY,
                            children: r.jsx(Ee, {
                                "data-testid": "buy-header-button",
                                children: t("ramp.buy")
                            })
                        }), r.jsx(ie, {
                            to: U.SELL,
                            "data-tooltip-id": "extension-redirect-tooltip",
                            onClick: i,
                            children: r.jsx(Ee, {
                                "data-testid": "sell-header-button",
                                children: t("ramp.sell")
                            })
                        })]
                    })
                }) : r.jsx(G, {
                    scale: re.HeadingSm,
                    bold: !0,
                    center: !0,
                    className: "my-4",
                    children: t("ramp.selectQuote")
                }), r.jsx("div", {
                    className: "flex flex-col justify-center items-center",
                    children: r.jsx(un, {
                        openOrdersModal: o
                    })
                })]
            })]
        })
    },
    mn = () => r.jsx("div", {
        className: "m-auto md:border md:border-muted !bg-inherit md:!bg-default rounded-xl relative overflow-hidden w-full max-w-md",
        children: r.jsx(be, {})
    }),
    Un = mn,
    fn = () => r.jsx("div", {
        className: "m-auto md:border md:border-muted !bg-inherit md:!bg-default rounded-xl relative max-w-[960px]",
        children: r.jsx(be, {})
    }),
    $n = fn,
    hn = () => {
        const a = m(P),
            s = m(se),
            e = m(xe),
            t = m(te);
        return d.useCallback(c => {
            ea({
                country_iso_code: S(a == null ? void 0 : a.id),
                currency_destination: t == null ? void 0 : t.symbol,
                currency_source: e == null ? void 0 : e.symbol,
                error_message: c || "",
                payment_method_id: S(s == null ? void 0 : s.id),
                state_iso_code: ""
            })
        }, [t == null ? void 0 : t.symbol, e == null ? void 0 : e.symbol, s == null ? void 0 : s.id, a == null ? void 0 : a.id])
    },
    pn = a => {
        const s = hn(),
            e = d.useCallback(() => {
                console.error("offramp error tracking not implemented")
            }, []);
        return a === g.Buy ? s : e
    },
    bn = () => {
        const {
            rampAccount: a
        } = Z(), s = he();
        return d.useCallback(async e => {
            var x;
            const t = a || "",
                c = e == null ? void 0 : e.cryptoCurrency,
                {
                    decimals: o,
                    address: u,
                    network: i
                } = c || {};
            let n, f;
            if (i) {
                const h = Ge(i.chainId);
                if (Te(h)) {
                    const b = await He();
                    f = Qe(b)
                } else n = await ye(h, t, o, u), f = await ye(h, t)
            }
            const l = {
                amount: e == null ? void 0 : e.fiatAmount,
                crypto_out: Number(e == null ? void 0 : e.cryptoAmount),
                chain_id_destination: e == null ? void 0 : e.cryptoCurrency.network.chainId,
                currency_destination: e == null ? void 0 : e.cryptoCurrency.symbol,
                currency_source: e == null ? void 0 : e.fiatCurrency.symbol,
                has_zero_currency_destination_balance: n === 0,
                has_zero_native_balance: f === 0,
                order_type: os.Buy,
                payment_method_id: S((x = e == null ? void 0 : e.paymentMethod) == null ? void 0 : x.id),
                provider_onramp: e == null ? void 0 : e.provider.name
            };
            s == null || s.track("onramp-purchase-submitted"), sa(l)
        }, [a, s])
    },
    xn = () => {
        const a = he();
        return d.useCallback(async s => {
            var e, t, c, o;
            try {
                const u = {
                    crypto_amount: Number(s == null ? void 0 : s.cryptoAmount),
                    chain_id_source: `${(e=s==null?void 0:s.cryptoCurrency)==null?void 0:e.network.chainId}`,
                    fiat_out: s.fiatAmount,
                    currency_destination: (t = s == null ? void 0 : s.fiatCurrency) == null ? void 0 : t.symbol,
                    currency_source: (c = s == null ? void 0 : s.cryptoCurrency) == null ? void 0 : c.symbol,
                    cash_out_destination_id: S((o = s == null ? void 0 : s.paymentMethod) == null ? void 0 : o.id),
                    provider_offramp: s == null ? void 0 : s.provider.name,
                    order_id: S(s == null ? void 0 : s.id)
                };
                a == null || a.track("offramp-sale-submitted"), ta(u)
            } catch {}
        }, [a])
    },
    _n = a => {
        const s = bn(),
            e = xn();
        return a === g.Buy ? s : e
    },
    Dn = (a = g.Buy) => {
        const s = gs(),
            {
                providerCode: e
            } = aa(),
            {
                rampAccount: t
            } = Z(),
            c = t || "",
            o = R(),
            u = _n(a),
            [i, n] = d.useState(null),
            f = pn(a),
            l = a === g.Buy ? U.BUY : U.SELL,
            x = d.useCallback(async () => {
                try {
                    const h = window.location.href;
                    if (!([...new URL(h).searchParams].length > 0)) {
                        s({
                            pathname: l
                        });
                        return
                    }
                    const b = `/providers/${e}`,
                        y = await Ve.orders();
                    let k = c;
                    try {
                        k = na.getAddress(c)
                    } catch {}
                    const E = a === g.Buy ? "getOrderFromCallback" : "getSellOrderFromCallback",
                        _ = await y[E](b, h, k);
                    _ === null ? s({
                        pathname: l
                    }) : _ != null && _.id && (o((C, p) => {
                        const I = _s(p());
                        ca(I, _.id) || (C(Ye(_)), u(_))
                    }), s({
                        pathname: `${l}/orders/details`,
                        search: `?${ia({orderId:_.id})}`
                    }))
                } catch (h) {
                    f(), n(h == null ? void 0 : h.message)
                }
            }, [c, o, s, e, l, a, f, u]);
        return Pe(async () => {
            c && e && !i && await x()
        }, 1e3), i
    },
    Cn = ({
        rampType: a
    }) => {
        const {
            t: s
        } = pe(), e = m(P), t = Oe(_e.RampRegion), c = gs(), [o, u] = d.useState(a === g.Buy ? 0 : 1);
        return d.useEffect(() => {
            var f, l;
            const i = !!((f = e == null ? void 0 : e.support) != null && f.sell),
                n = !!((l = e == null ? void 0 : e.support) != null && l.buy);
            ra({
                country_iso_code: S(e == null ? void 0 : e.id),
                is_unsupported_off_ramp: !i,
                is_unsupported_on_ramp: !n,
                state_iso_code: S(e == null ? void 0 : e.id)
            })
        }, [e]), r.jsxs("div", {
            className: "m-auto md:border md:border-muted !bg-inherit md:!bg-default rounded-xl relative overflow-hidden w-full max-w-md h-[640px] flex flex-col",
            children: [r.jsx(vs, {
                onChange: u,
                selectedIndex: o,
                variant: "link",
                className: "!bg-inherit justify-center w-full",
                children: r.jsxs(ys, {
                    children: [r.jsx(ie, {
                        to: U.BUY,
                        className: "w-full",
                        children: r.jsx(Ee, {
                            className: "w-full",
                            children: s("ramp.buy")
                        })
                    }), r.jsx(ie, {
                        to: U.SELL,
                        className: "w-full",
                        children: r.jsx(Ee, {
                            className: "w-full",
                            children: s("ramp.sell")
                        })
                    })]
                })
            }), r.jsx(G, {
                scale: re.ParagraphSm,
                center: !0,
                subdued: !0,
                className: "mt-6",
                children: s("ramp.availabilityMessage")
            }), r.jsxs("div", {
                className: "p-6 flex-grow flex flex-col justify-between",
                children: [r.jsxs("div", {
                    children: [r.jsx(oa, {
                        className: "bg-alternative rounded-xl p-4 border border-muted cursor-pointer hover:border-default mb-6",
                        onClick: t,
                        children: r.jsxs("div", {
                            className: "flex justify-between",
                            children: [r.jsxs("div", {
                                className: "flex items-center",
                                children: [r.jsx(G, {
                                    scale: re.HeadingXs,
                                    bold: !0,
                                    children: e == null ? void 0 : e.name
                                }), r.jsx("span", {
                                    className: "ml-2",
                                    children: e == null ? void 0 : e.emoji
                                })]
                            }), r.jsx(Cs, {
                                icon: ma.faChevronDown,
                                className: "text-alternative my-auto"
                            })]
                        })
                    }), ls() && r.jsx(es, {
                        className: "mb-6",
                        variant: "full",
                        type: "warning",
                        title: "Check you activation keys",
                        message: "You are in a non-production environment. Make sure you have the correct activation keys.",
                        links: [{
                            linkText: "Settings",
                            href: U.SETTINGS
                        }]
                    }), r.jsx(es, {
                        variant: "full",
                        type: "critical",
                        title: s("ramp.regionNotSupported"),
                        message: s("ramp.expandCoverageMessage", {
                            action: a === g.Buy ? String(s("ramp.buy")).toLowerCase() : String(s("ramp.sell")).toLowerCase()
                        }),
                        links: [{
                            linkText: s("ramp.learnMore"),
                            href: "https://metamask.zendesk.com/hc/en-us/articles/4863623238683"
                        }]
                    })]
                }), r.jsx(Ie, {
                    className: "justify-self-end",
                    onClick: () => {
                        c(a === g.Buy ? U.BUY : U.SELL)
                    },
                    width: "full",
                    disabled: !0,
                    children: s("ramp.continue")
                })]
            })]
        })
    },
    vn = Cn;

function Tn({
    rampType: a
}) {
    const s = m(P),
        e = a === g.Buy ? "buy" : "sell";
    return s != null && s.unsupported || s && !(s != null && s.support[e]) ? r.jsx(vn, {
        rampType: a
    }) : r.jsx(be, {})
}
const yn = ({
        title: a
    }) => {
        const {
            t: s
        } = pe();
        return r.jsxs(ds, {
            children: [r.jsx(us, {
                title: a
            }), r.jsx(ts, {
                expandHeight: !0,
                children: r.jsx("div", {
                    className: "m-auto md:border md:border-muted !bg-inherit md:!bg-default rounded-xl relative overflow-hidden w-full max-w-md space-y-6 flex flex-col p-6",
                    children: r.jsx(la, {
                        header: s("main.downloadMetaMaskHeader"),
                        subTitle: r.jsx(Ie, {
                            className: "mt-4",
                            onClick: () => {
                                window.location.href = "https://metamask.app.link/buy-crypto"
                            },
                            children: s("main.downloadMetaMaskButton")
                        })
                    })
                })
            })]
        })
    },
    Gn = yn;
export {
    Bn as B, In as C, Gn as D, Pn as O, Ln as P, Fn as Q, Rs as R, jn as S, Un as T, un as V, An as W, Oe as a, an as b, Mn as c, Nn as d, on as e, Z as f, Ss as g, Dn as h, Tn as i, Sn as j, On as k, $n as l, Se as m, Rn as n, en as u
};