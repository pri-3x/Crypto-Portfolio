import {
    d as we,
    f as Ke,
    e as Xe,
    g as Me,
    r as m,
    j as e,
    N as z,
    P as Fe,
    T as x,
    i as b,
    k as E,
    t as Q,
    C as Be,
    aI as Je,
    a7 as F,
    u as f,
    aq as He,
    ar as We,
    as as oe,
    am as ue,
    ao as me,
    $ as C,
    R as w,
    x as re,
    Z as B,
    a6 as H,
    a2 as _,
    aJ as et,
    aK as tt,
    b as X,
    h as de,
    aL as $e,
    v as J,
    z as ee,
    aM as st,
    M as Y,
    a0 as Ue,
    aN as at,
    aO as nt,
    aP as Ge,
    ak as ct,
    al as it,
    an as K,
    ap as lt,
    at as ot,
    au as _e,
    av as rt,
    a9 as ut,
    az as mt,
    aQ as dt,
    aR as ft,
    aS as Oe,
    aT as pt,
    aU as ht,
    aV as xt,
    aW as gt,
    aX as jt,
    aY as yt,
    aZ as bt,
    a_ as vt,
    aw as Ct,
    a$ as St,
    _ as fe,
    b0 as kt,
    ax as Nt,
    ae as wt,
    aH as D,
    b1 as _t,
    b2 as Te,
    b3 as Ee,
    b4 as Ot,
    b5 as Tt,
    b6 as Et,
    b7 as Pe,
    s as pe,
    b8 as te,
    B as Pt,
    c as Lt,
    b9 as At,
    ba as se,
    bb as Rt,
    L as q,
    D as he,
    bc as It,
    bd as Ve,
    be as ae,
    bf as ne,
    O as Dt,
    Q as Mt,
    bg as Ft,
    bh as Bt,
    V as Ht,
    bi as ze,
    bj as ce,
    bk as Wt,
    w as $t,
    bl as Ut,
    y as Gt,
    W as Le,
    A as Vt,
    E as zt,
    bm as qt,
    af as Qt,
    bn as xe,
    bo as Yt,
    bp as Zt,
    bq as Kt,
    br as Xt,
    a1 as Jt,
    a3 as es,
    bs as ts,
    bt as ss,
    ah as as,
    ai as Z,
    a5 as ns,
    aj as cs,
    aA as is,
    bu as ls,
    aC as Ae,
    aD as os,
    aE as rs,
    aF as T,
    aG as us
} from "./bootstrap-7c5c33c8.js";
import {
    M as ms
} from "./Maintenance-ae1f892f.js";
import {
    f as W,
    B as qe,
    m as P,
    a as ie,
    h as ds,
    b as ge,
    R as je,
    c as fs,
    d as ps,
    P as hs,
    C as xs,
    Q as gs,
    D as js,
    n as ys,
    S as bs,
    W as vs,
    i as Cs,
    T as Ss,
    j as V,
    k as ks,
    l as Ns
} from "./DownloadMobileApp-9278feb8.js";
import {
    G as Qe
} from "./GenericError-4cf31668.js";
import {
    u as ws
} from "./useBreakpoint-f1843395.js";
import "./index-184b0bea.js";
import "./faChevronDown-a9475498.js";
const _s = "/assets/offramp-welcome-light-5e0aa601.png",
    Os = "/assets/offramp-welcome-dark-df6edccb.png",
    Ts = () => e.jsx("div", {
        className: Q("w-6 h-6 rounded-full bg-alternative my-auto flex flex-col justify-center"),
        children: e.jsx(Be, {
            className: "w-4 h-4 m-auto"
        })
    }),
    Es = () => {
        const [s, a] = we(Ke, !1), [t] = we(Xe, !1), i = Me(), c = m.useMemo(() => i ? Os : _s, [i]), n = ["Get up-to-the-minute quotes from trusted providers!", "We're here to guide you along the way."], o = () => {
            Je({
                was_on_ramp_get_started_clicked: t
            }), a(!0)
        };
        return m.useEffect(() => {}, [s]), s ? e.jsx(z, {
            replace: !0,
            to: {
                pathname: "/sell/region"
            }
        }) : e.jsx(Fe, {
            expandHeight: !0,
            children: e.jsxs("div", {
                className: "m-auto md:border md:border-muted !bg-inherit md:!bg-default rounded-xl relative w-full max-w-md space-y-6 flex flex-col p-6",
                "data-testid": "sell-welcome-screen",
                children: [e.jsx(x, {
                    scale: b.HeadingSm,
                    center: !0,
                    bold: !0,
                    children: "Why cash out with MetaMask?"
                }), e.jsx("img", {
                    src: c,
                    alt: "Cash out with metamask"
                }), e.jsx("div", {
                    className: "space-y-6",
                    children: n.map((u, r) => e.jsxs("div", {
                        className: "flex space-x-2",
                        children: [e.jsx(Ts, {}), e.jsx(x, {
                            className: "!leading-6 text-center",
                            scale: b.ParagraphSm,
                            subdued: !0,
                            children: u
                        })]
                    }, r))
                }), e.jsx(E, {
                    onClick: o,
                    children: "Get started"
                })]
            })
        })
    },
    Ps = Es,
    ye = ({
        order: s
    }) => {
        const {
            t: a
        } = F(), {
            txHash: t,
            cryptoAmount: i,
            cryptoCurrency: c
        } = s, n = `https://etherscan.io/tx/${t}`, o = f(He), {
            rampAccount: u
        } = W();
        return e.jsxs("div", {
            className: "p-4 flex flex-col rounded-xl border border-muted w-fit mx-auto space-y-4",
            children: [u && e.jsxs("div", {
                className: "flex space-x-2 justify-center",
                children: [e.jsx(We, {
                    accountIdenticonType: o,
                    className: "rounded-full flex items-center mr-3",
                    address: u || "",
                    size: 6
                }), e.jsx(x, {
                    subdued: !0,
                    scale: b.ParagraphSm,
                    className: "text-center !leading-6",
                    children: oe(u, 12)
                })]
            }), e.jsx(x, {
                center: !0,
                scale: b.HeadingMd,
                bold: !0,
                children: ue(Number(i), c.symbol)
            }), e.jsxs("div", {
                className: "flex space-x-2",
                children: [e.jsx(x, {
                    subdued: !0,
                    scale: b.ParagraphSm,
                    children: a("ramp.orderId")
                }), e.jsx(x, {
                    scale: b.ParagraphSm,
                    children: s.providerOrderId.toUpperCase()
                })]
            }), t && e.jsx(me, {
                className: "m-auto",
                href: n,
                children: a("ramp.viewOnEtherscan")
            })]
        })
    },
    Ls = ({
        status: s
    }) => e.jsx("div", {
        className: Q("w-6 h-6 rounded-full border-2 my-auto flex flex-col justify-center", {
            "border-muted": s === "todo" || s === "complete",
            "border-hovered": s === "inProgress"
        }),
        children: s === "complete" && e.jsx(Be, {
            className: "w-4 h-4 m-auto"
        })
    }),
    As = ({
        text: s,
        status: a
    }) => e.jsxs("div", {
        className: "flex space-x-2",
        children: [e.jsx(Ls, {
            status: a
        }), e.jsx(x, {
            subdued: a === "complete" || a === "todo",
            scale: b.ParagraphSm,
            className: "!leading-6 text-center uppercase",
            children: s
        })]
    }),
    Rs = ({
        status: s = C.OrderStatusEnum.Created
    }) => {
        const a = ["Pending", "Processing", "Sent"];
        let t;
        switch (s) {
            case C.OrderStatusEnum.Created:
                {
                    t = ["inProgress", "todo", "todo"];
                    break
                }
            case C.OrderStatusEnum.Pending:
                {
                    t = ["complete", "inProgress", "todo"];
                    break
                }
            case C.OrderStatusEnum.Completed:
                {
                    t = ["complete", "complete", "complete"];
                    break
                }
            case C.OrderStatusEnum.Failed:
            case C.OrderStatusEnum.Cancelled:
                {
                    t = ["complete", "complete", "todo"];
                    break
                }
            default:
                {
                    t = ["todo", "todo", "todo"];
                    break
                }
        }
        return e.jsx("div", {
            className: "border-b border-muted flex w-full items-center justify-center space-x-16 p-6",
            children: a.map((i, c) => e.jsx(As, {
                text: i,
                status: t[c]
            }, i))
        })
    },
    M = ({
        children: s,
        order: a
    }) => e.jsxs("div", {
        children: [e.jsx(qe, {
            rampType: w.Sell
        }), e.jsx(Rs, {
            status: a == null ? void 0 : a.status
        }), e.jsx("div", {
            className: "min-h-[574px] p-6 flex flex-col justify-between",
            children: s
        })]
    }),
    Is = ({
        invokeTx: s,
        openHelpModal: a
    }) => {
        const {
            t
        } = F(), [i, c] = m.useState(!1);
        return e.jsxs("div", {
            className: "space-y-4 max-w-xl",
            children: [e.jsx(re, {
                message: e.jsxs("div", {
                    className: "space-y-2",
                    children: [e.jsx(x, {
                        className: "text-default",
                        bold: !0,
                        children: t("ramp.beCarefulOfOverspending")
                    }), e.jsxs(x, {
                        className: "text-default",
                        children: [t("ramp.transactionStartedMessage"), e.jsx(E, {
                            variant: "link",
                            onClick: a,
                            className: "ml-1",
                            children: t("ramp.needHelpFindingTransaction")
                        })]
                    })]
                }),
                type: "warning"
            }), e.jsxs("div", {
                className: "flex justify-center items-center mb-4",
                children: [e.jsx("input", {
                    id: "default-checkbox",
                    type: "checkbox",
                    checked: i,
                    onChange: () => c(n => !n),
                    className: "w-4 h-4 text-primary-default bg-default border-default rounded focus:ring-primary-default focus:ring-2"
                }), e.jsx("label", {
                    htmlFor: "default-checkbox",
                    className: "ml-2 text-sm font-medium text-default",
                    children: t("ramp.rejectedTransactionMessage")
                })]
            }), e.jsx(E, {
                width: "full",
                className: "mx-auto",
                onClick: s,
                disabled: !i,
                children: t("ramp.startNewTransaction")
            })]
        })
    },
    Ds = ({
        openHelpModal: s
    }) => {
        const a = B(),
            {
                activeAccount: t
            } = a,
            {
                t: i
            } = F(),
            c = t != null && t.address ? i("ramp.confirmTransaction") : i("ramp.connectMetaMask");
        return e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: "flex justify-center space-x-2",
                children: [e.jsx(H, {
                    size: "sm",
                    className: "my-auto"
                }), e.jsx(x, {
                    scale: b.HeadingMd,
                    children: i("ramp.actionToContinue", {
                        action: c
                    })
                })]
            }), e.jsxs("div", {
                className: "flex space-x-2 justify-center",
                children: [e.jsx(x, {
                    scale: b.ParagraphSm,
                    children: "Need Help?"
                }), e.jsx(E, {
                    variant: "link",
                    onClick: s,
                    children: i("ramp.clickHere")
                })]
            })]
        })
    },
    Ms = () => m.useCallback(async s => {
        var a, t, i, c;
        try {
            const n = {
                crypto_amount: Number(s == null ? void 0 : s.cryptoAmount),
                chain_id_source: `${(a=s==null?void 0:s.cryptoCurrency)==null?void 0:a.network.chainId}`,
                fiat_out: s.fiatAmount,
                currency_destination: (t = s == null ? void 0 : s.fiatCurrency) == null ? void 0 : t.symbol,
                currency_source: (i = s == null ? void 0 : s.cryptoCurrency) == null ? void 0 : i.symbol,
                cash_out_destination_id: _((c = s == null ? void 0 : s.paymentMethod) == null ? void 0 : c.id),
                provider_offramp: s == null ? void 0 : s.provider.name,
                order_id: _(s == null ? void 0 : s.id)
            };
            et(n)
        } catch {}
    }, []),
    Fs = ({
        invokeTx: s,
        order: a
    }) => {
        const t = a.provider.name,
            i = a.cryptoCurrency.symbol,
            c = Ms();
        return m.useEffect(() => {
            c(a)
        }, [c]), e.jsxs(E, {
            width: "full",
            className: "mx-auto",
            onClick: s,
            disabled: !a.depositWallet,
            children: ["Send ", i, " to ", t]
        })
    },
    Bs = () => {
        const {
            cryptoToSellBalance: s
        } = P(), a = (s == null ? void 0 : s.data) || 1;
        return m.useCallback(async (t, i) => {
            var n, o, u, r;
            const c = t != null && t.cryptoAmount ? Number(t == null ? void 0 : t.cryptoAmount) / a : 0;
            try {
                const d = {
                    crypto_amount: Number(t == null ? void 0 : t.cryptoAmount),
                    chain_id_source: `${(n=t==null?void 0:t.cryptoCurrency)==null?void 0:n.network.chainId}`,
                    fiat_out: t.fiatAmount,
                    currency_destination: (o = t == null ? void 0 : t.fiatCurrency) == null ? void 0 : o.symbol,
                    currency_source: (u = t == null ? void 0 : t.cryptoCurrency) == null ? void 0 : u.symbol,
                    cash_out_destination_id: _((r = t == null ? void 0 : t.paymentMethod) == null ? void 0 : r.id),
                    provider_offramp: t == null ? void 0 : t.provider.name,
                    order_id: _(t == null ? void 0 : t.id),
                    percent_of_token_balance: c,
                    hasQueuedTx: i
                };
                tt(d)
            } catch {}
        }, [a])
    },
    Hs = ({
        order: s,
        sendTx: a,
        persistedInvoked: t,
        localInvoked: i
    }) => {
        var S, k;
        const c = B(),
            {
                activeAccount: n
            } = c,
            {
                rampAccount: o
            } = W(),
            u = X(),
            r = Bs(),
            d = (S = s.cryptoCurrency.network) == null ? void 0 : S.chainId,
            l = (k = s.cryptoCurrency.network) == null ? void 0 : k.chainName,
            {
                validateOfframpNetwork: p
            } = de(),
            {
                isOnNetwork: j,
                isSwitchingNetwork: v,
                switchToNetwork: h
            } = $e(J(d) || ee.ChainId.ETHEREUM),
            g = m.useCallback(() => {
                r(s, t || i), u(st(Y.OffRampMetaMaskHelp, {}, {
                    content: {
                        maxHeight: "480px",
                        maxWidth: "480px",
                        width: "100%",
                        height: "100%"
                    }
                }))
            }, [u, i, s, t, r]),
            N = m.useMemo(() => n != null && n.address ? t && !i ? e.jsx(Is, {
                invokeTx: a,
                openHelpModal: g
            }) : t && i ? e.jsx(Ds, {
                openHelpModal: g
            }) : !j && p ? e.jsx(E, {
                width: "full",
                className: "mt-2",
                onClick: h,
                startIcon: v ? e.jsx(H, {
                    size: "sm"
                }) : void 0,
                disabled: v,
                children: v ? `Switching to ${l}` : `Switch to ${l}`
            }) : e.jsx(Fs, {
                invokeTx: a,
                order: s
            }) : e.jsx(Ue, {}), [n == null ? void 0 : n.address, o, t, i, j, p, h, v, l, a, s, g]);
        return e.jsx(M, {
            order: s,
            children: e.jsxs("div", {
                className: "flex-center space-y-8 m-auto",
                children: [t && i && e.jsxs(x, {
                    center: !0,
                    children: [e.jsx("strong", {
                        children: "Tip:"
                    }), " Be sure to confirm your transaction before refreshing this page.", " "]
                }), e.jsx(ye, {
                    order: s
                }), N]
            })
        })
    },
    Ws = () => m.useCallback(async s => {
        var a, t, i, c;
        try {
            const n = {
                crypto_amount: Number(s == null ? void 0 : s.cryptoAmount),
                chain_id_source: `${(a=s==null?void 0:s.cryptoCurrency)==null?void 0:a.network.chainId}`,
                fiat_out: s.fiatAmount,
                currency_destination: (t = s == null ? void 0 : s.fiatCurrency) == null ? void 0 : t.symbol,
                currency_source: (i = s == null ? void 0 : s.cryptoCurrency) == null ? void 0 : i.symbol,
                cash_out_destination_id: _((c = s == null ? void 0 : s.paymentMethod) == null ? void 0 : c.id),
                provider_offramp: s == null ? void 0 : s.provider.name,
                order_id: _(s == null ? void 0 : s.id)
            };
            at(n)
        } catch {}
    }, []),
    $s = ({
        order: s
    }) => {
        const {
            provider: a,
            cryptoCurrency: t
        } = s, {
            t: i
        } = F(), c = Ws();
        return m.useEffect(() => {
            c(s)
        }, [c]), e.jsx(M, {
            order: s,
            children: e.jsxs("div", {
                className: "flex-center space-y-8 m-auto",
                children: [e.jsx(ye, {
                    order: s
                }), e.jsxs("div", {
                    className: "flex space-y-2 flex-col",
                    children: [e.jsxs("div", {
                        className: "flex justify-center space-x-2",
                        children: [e.jsx(nt, {
                            className: "w-5 h-5 my-auto"
                        }), e.jsx(x, {
                            children: i("ramp.sendingCrypto", {
                                cryptoCurrencySymbol: t.symbol
                            })
                        })]
                    }), e.jsxs("div", {
                        className: "flex justify-center space-x-2",
                        "data-tooltip-id": "provider-delay-message",
                        children: [e.jsx(H, {
                            size: "sm",
                            className: "my-auto"
                        }), e.jsx(x, {
                            children: i("ramp.receivedByProvider", {
                                providerName: a.name
                            })
                        }), e.jsx(Ge, {
                            id: "provider-delay-message",
                            content: i("ramp.providerDelayMessage")
                        })]
                    })]
                })]
            })
        })
    },
    Us = ({
        orderStatus: s
    }) => {
        const a = "flex justify-center mx-auto mb-4";
        if (!s) return null;
        switch (s) {
            case C.OrderStatusEnum.Completed:
                return e.jsx(it, {
                    className: a
                });
            case C.OrderStatusEnum.Failed:
            case C.OrderStatusEnum.IdExpired:
            case C.OrderStatusEnum.Cancelled:
                return e.jsx(ct, {
                    className: a
                });
            case C.OrderStatusEnum.Pending:
            case C.OrderStatusEnum.Unknown:
            case C.OrderStatusEnum.Precreated:
            default:
                return e.jsx(H, {
                    className: a,
                    size: "lg"
                })
        }
    },
    Gs = ({
        order: s
    }) => {
        const {
            t: a
        } = F(), {
            status: t,
            statusDescription: i,
            cryptoAmount: c,
            cryptoCurrency: n,
            fiatCurrency: o,
            fiatAmount: u,
            totalFeesFiat: r,
            provider: d,
            providerOrderLink: l
        } = s || {}, p = !u || !r ? void 0 : u - r, j = m.useMemo(() => {
            switch (t) {
                case C.OrderStatusEnum.Completed:
                    return a("ramp.orderSuccessful");
                case C.OrderStatusEnum.Failed:
                case C.OrderStatusEnum.IdExpired:
                    return a("ramp.orderFailed");
                case C.OrderStatusEnum.Pending:
                case C.OrderStatusEnum.Precreated:
                case C.OrderStatusEnum.Unknown:
                    return a("ramp.processingOrder");
                case C.OrderStatusEnum.Cancelled:
                    return a("ramp.orderCancelled")
            }
        }, [t, a]);
        return e.jsxs("div", {
            className: "w-full my-auto",
            children: [t && e.jsx(Us, {
                orderStatus: t
            }), t && e.jsx(x, {
                scale: b.HeadingMd,
                center: !0,
                bold: !0,
                className: "mb-4",
                children: j
            }), i && e.jsx(x, {
                scale: b.ParagraphSm,
                center: !0,
                subdued: !0,
                className: "mb-4",
                children: i
            }), e.jsx(x, {
                scale: b.HeadingMd,
                center: !0,
                bold: !0,
                className: "mb-2",
                children: ue(Number(c), n == null ? void 0 : n.symbol)
            }), e.jsx(x, {
                scale: b.ParagraphSm,
                center: !0,
                subdued: !0,
                className: "mb-4",
                children: K(p, o)
            }), l && e.jsx(me, {
                className: "text-sm text-center block mb-4",
                href: l,
                target: "_blank",
                onClick: () => {
                    lt({
                        external_link: l || ""
                    })
                },
                children: a("ramp.viewOrderStatus", {
                    providerName: d == null ? void 0 : d.name
                })
            })]
        })
    },
    Vs = ({
        addressOverride: s
    }) => {
        const a = f(He),
            {
                activeAccount: t
            } = B();
        if (!t && !s) return null;
        const i = (t == null ? void 0 : t.name.toLowerCase()) === (t == null ? void 0 : t.address.toLowerCase());
        return e.jsx("div", {
            className: Q("rounded-full bg-inherit items-center border border-default flex w-auto p-2 px-3", {
                " w-fit mx-auto mb-4": !!s
            }),
            children: e.jsxs("div", {
                className: "flex items-center",
                children: [e.jsx(We, {
                    accountIdenticonType: a,
                    className: "rounded-full flex items-center mr-3",
                    address: s || (t == null ? void 0 : t.address) || "",
                    size: 6
                }), e.jsxs("div", {
                    className: "flex",
                    children: [e.jsx(x, {
                        scale: b.ParagraphSm,
                        bold: !0,
                        className: "truncate",
                        children: oe(s || (t == null ? void 0 : t.name), 12)
                    }), !i && e.jsxs(x, {
                        scale: b.ParagraphSm,
                        subdued: !0,
                        className: "ml-2",
                        children: ["(", oe(t == null ? void 0 : t.address, 12), ")"]
                    })]
                })]
            })
        })
    },
    zs = ({
        order: s
    }) => {
        var S, k;
        const {
            paymentMethod: a,
            cryptoAmount: t,
            exchangeRate: i,
            cryptoCurrency: c,
            fiatCurrency: n,
            walletAddress: o,
            fiatAmount: u,
            createdAt: r,
            totalFeesFiat: d,
            provider: l,
            providerOrderId: p
        } = s || {}, j = (k = (S = l == null ? void 0 : l.links) == null ? void 0 : S.find(y => y.name === ot.SUPPORT)) == null ? void 0 : k.url, v = m.useMemo(() => {
            if (a != null && a.name) return e.jsxs("div", {
                className: "flex justify-end",
                children: [e.jsx(x, {
                    scale: b.ParagraphSm,
                    subdued: !0,
                    className: "text-end",
                    children: l == null ? void 0 : l.name
                }), j && e.jsxs(e.Fragment, {
                    children: [e.jsx(x, {
                        scale: b.ParagraphSm,
                        subdued: !0,
                        className: "px-2",
                        children: "·"
                    }), e.jsx(me, {
                        className: "text-alternative text-sm text-end underline",
                        href: j,
                        children: "Contact Support"
                    })]
                })]
            })
        }, [a == null ? void 0 : a.name, l == null ? void 0 : l.name, j]), h = !u || u == 0 || !t || t == 0 || !i || i == 0 || !d || d == 0, g = !u || !d ? void 0 : u - d, N = m.useMemo(() => {
            var R;
            const y = [{
                    title: "Order ID",
                    value: p
                }, {
                    title: "Date & time",
                    value: r ? isNaN(r) ? _e((R = new Date(r)) == null ? void 0 : R.getTime()) : _e(r) : "..."
                }, {
                    title: "Destination",
                    value: (a == null ? void 0 : a.name) || "...",
                    details: v
                }],
                L = [{
                    title: "Exchange Rate",
                    value: i ? `1 ${c==null?void 0:c.symbol} @ ${rt(i,n==null?void 0:n.symbol)}` : "..."
                }, {
                    title: "Token Quantity Sold",
                    value: ue(Number(t), c == null ? void 0 : c.symbol)
                }, {
                    title: `${(n==null?void 0:n.symbol)||"Fiat"} value`,
                    value: K(u, n)
                }, {
                    title: "Total Fees",
                    value: K(d, n)
                }, {
                    title: "Amount received total",
                    value: K(g, n),
                    addDivider: !0
                }];
            return h ? y : [...y, ...L]
        }, [g, r, t, c == null ? void 0 : c.symbol, i, u, n, h, a == null ? void 0 : a.name, v, p, d]);
        return e.jsxs("div", {
            className: "p-4 flex flex-col rounded-xl border border-muted w-full",
            children: [e.jsx(Vs, {
                addressOverride: o
            }), e.jsx("div", {
                className: "order-data space-y-3",
                children: N.map(y => e.jsxs("div", {
                    children: [y.addDivider && e.jsx(ut, {
                        className: "mb-4"
                    }), e.jsxs("div", {
                        className: "flex justify-between",
                        children: [e.jsx(x, {
                            scale: b.ParagraphSm,
                            children: y.title
                        }), e.jsx("div", {
                            children: e.jsx(x, {
                                scale: b.ParagraphSm,
                                bold: !0,
                                className: "text-right max-w-[250px]",
                                children: y.value
                            })
                        })]
                    }, y.title), y.details]
                }, y.title))
            })]
        })
    },
    qs = ({
        order: s
    }) => {
        const a = ie(Y.RampOrders);
        return e.jsxs(M, {
            order: s,
            children: [e.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                children: [e.jsx(Gs, {
                    order: s
                }), e.jsx(zs, {
                    order: s
                })]
            }), e.jsxs("div", {
                className: "mt-4",
                children: [e.jsx(mt, {
                    to: "/sell",
                    className: "mt-4 w-[50%] mx-auto",
                    children: "Make another sale"
                }), e.jsx(E, {
                    variant: "link",
                    className: "text-center mt-4 block mx-auto",
                    onClick: a,
                    children: "View all orders"
                })]
            })]
        })
    };

function Qs() {
    const {
        rampAccount: s
    } = W();
    return m.useCallback(async a => {
        const {
            cryptoCurrency: t,
            cryptoAmount: i,
            depositWallet: c
        } = a, n = await dt(gt), o = ee.getAtomicAmountFromDisplayAmount(String(i), t.decimals);
        let u;
        if (c)
            if (ft(J(t.network.chainId))) {
                const r = {
                        amounts: {
                            [c]: String(i)
                        },
                        subtractFeeFrom: [],
                        replaceable: !1
                    },
                    l = (await Oe.listAccounts())[0];
                return await Oe.sendMany(l.id, r)
            } else {
                if (pt(t.address)) return u = {
                    from: s,
                    to: c,
                    value: BigInt(o)
                }, n.sendTransaction(u); {
                    const d = new ht(xt).encodeFunctionData("transfer", [c, o]);
                    return u = {
                        from: s,
                        to: t.address,
                        data: d
                    }, n.sendTransaction(u)
                }
            }
    }, [s])
}
const Ys = ({
        order: s,
        invokeTx: a
    }) => e.jsx(M, {
        order: s,
        children: e.jsxs("div", {
            className: "flex-center space-y-8 m-auto",
            children: [e.jsx(ye, {
                order: s
            }), e.jsxs("div", {
                className: "flex",
                children: [e.jsx(jt, {
                    className: "my-auto mr-4 w-8 h-8"
                }), e.jsx(x, {
                    scale: b.HeadingMd,
                    children: "Your transaction was rejected"
                })]
            }), e.jsx(E, {
                width: "full",
                onClick: a,
                children: "Resume Transaction"
            })]
        })
    }),
    Zs = () => {
        const {
            cryptoToSellBalance: s
        } = P(), a = (s == null ? void 0 : s.data) || 1;
        return m.useCallback(async t => {
            var c, n, o, u;
            const i = t != null && t.cryptoAmount ? Number(t == null ? void 0 : t.cryptoAmount) / a : 0;
            try {
                const r = {
                    crypto_amount: Number(t == null ? void 0 : t.cryptoAmount),
                    chain_id_source: `${(c=t==null?void 0:t.cryptoCurrency)==null?void 0:c.network.chainId}`,
                    fiat_out: t.fiatAmount,
                    currency_destination: (n = t == null ? void 0 : t.fiatCurrency) == null ? void 0 : n.symbol,
                    currency_source: (o = t == null ? void 0 : t.cryptoCurrency) == null ? void 0 : o.symbol,
                    cash_out_destination_id: _((u = t == null ? void 0 : t.paymentMethod) == null ? void 0 : u.id),
                    provider_offramp: t == null ? void 0 : t.provider.name,
                    order_id: _(t == null ? void 0 : t.id),
                    percent_of_token_balance: i
                };
                yt(r)
            } catch {}
        }, [a])
    },
    Ks = () => {
        const {
            cryptoToSellBalance: s
        } = P(), a = (s == null ? void 0 : s.data) || 1;
        return m.useCallback(async t => {
            var c, n, o, u;
            const i = t != null && t.cryptoAmount ? Number(t == null ? void 0 : t.cryptoAmount) / a : 0;
            try {
                const r = {
                    crypto_amount: Number(t == null ? void 0 : t.cryptoAmount),
                    chain_id_source: `${(c=t==null?void 0:t.cryptoCurrency)==null?void 0:c.network.chainId}`,
                    fiat_out: t.fiatAmount,
                    currency_destination: (n = t == null ? void 0 : t.fiatCurrency) == null ? void 0 : n.symbol,
                    currency_source: (o = t == null ? void 0 : t.cryptoCurrency) == null ? void 0 : o.symbol,
                    cash_out_destination_id: _((u = t == null ? void 0 : t.paymentMethod) == null ? void 0 : u.id),
                    provider_offramp: t == null ? void 0 : t.provider.name,
                    order_id: _(t == null ? void 0 : t.id),
                    percent_of_token_balance: i
                };
                bt(r)
            } catch {}
        }, [a])
    },
    Xs = () => {
        const {
            cryptoToSellBalance: s
        } = P(), a = (s == null ? void 0 : s.data) || 1;
        return m.useCallback(async t => {
            var c, n, o, u;
            const i = t != null && t.cryptoAmount ? Number(t == null ? void 0 : t.cryptoAmount) / a : 0;
            try {
                const r = {
                    crypto_amount: Number(t == null ? void 0 : t.cryptoAmount),
                    chain_id_source: `${(c=t==null?void 0:t.cryptoCurrency)==null?void 0:c.network.chainId}`,
                    fiat_out: t.fiatAmount,
                    currency_destination: (n = t == null ? void 0 : t.fiatCurrency) == null ? void 0 : n.symbol,
                    currency_source: (o = t == null ? void 0 : t.cryptoCurrency) == null ? void 0 : o.symbol,
                    cash_out_destination_id: _((u = t == null ? void 0 : t.paymentMethod) == null ? void 0 : u.id),
                    provider_offramp: t == null ? void 0 : t.provider.name,
                    order_id: _(t == null ? void 0 : t.id),
                    percent_of_token_balance: i
                };
                vt(r)
            } catch {}
        }, [a])
    },
    Js = 8e3,
    ea = () => {
        var Ne;
        Ct();
        const s = X(),
            a = B(),
            {
                activeAccount: t
            } = a,
            {
                rampAccount: i
            } = W(),
            c = St(),
            {
                validateOfframpNetwork: n
            } = de(),
            o = f(fe),
            u = f(kt),
            [r] = Nt(),
            d = r.get("orderId"),
            l = o == null ? void 0 : o.find(O => (O == null ? void 0 : O.id) === d),
            p = u == null ? void 0 : u.find(O => (O == null ? void 0 : O.id) === d),
            [j, v] = m.useState(!1),
            h = (l == null ? void 0 : l.status) === C.OrderStatusEnum.Created,
            [g, N] = m.useState(l && h),
            [S, k] = m.useState(h),
            y = p == null ? void 0 : p.invoked,
            L = h && !!(p != null && p.txHash) || !j && y,
            R = Zs(),
            A = Ks(),
            $ = Xs(),
            le = m.useCallback(() => p != null && p.rejected ? "transactionRejected" : h && (p != null && p.txHash) ? "waitingForProviderToReceiveCrypto" : h ? "confirmTransaction" : "processingOrder", [h, p]),
            [U, I] = m.useState(le);
        m.useEffect(() => {
            I(le)
        }, [le]);
        const be = Qs();
        m.useEffect(() => {
            (async () => {
                if (l && (l.orderType === wt.OrderOrderTypeEnum.Buy && c({
                        pathname: `${D.BUY}/orders/details`,
                        search: `?${_t({orderId:l.id})}`
                    }), h)) {
                    const G = await (await Te.orders()).getSellOrder(l.id, l.walletAddress);
                    G.status !== C.OrderStatusEnum.Unknown ? s(Ee(G)) : I("genericError"), k(!1), N(!1)
                }
            })()
        }, []), Ot(async () => {
            if (!l) return;
            k(!0);
            const G = await (await Te.orders()).getSellOrder(l.id, l.walletAddress);
            G.status !== C.OrderStatusEnum.Unknown && s(Ee(G)), k(!1)
        }, L && !S ? Js : null), m.useEffect(() => {
            l && l.status !== C.OrderStatusEnum.Created && I("processingOrder")
        }, [l]);
        const ve = (Ne = l == null ? void 0 : l.cryptoCurrency) == null ? void 0 : Ne.network.chainId,
            Ze = ve ? J(ve) : ee.ChainId.ETHEREUM,
            {
                isOnNetwork: Ce,
                switchToNetwork: Se
            } = $e(Ze),
            ke = m.useCallback(async () => {
                if (!(!l || !Tt(l) || !t || !i)) {
                    if (!Ce && n) {
                        await Se();
                        return
                    }
                    try {
                        I("confirmTransaction"), v(!0), s(Et({
                            id: l.id,
                            invoked: !0,
                            rejected: !1
                        })), A(l);
                        const O = await be(l);
                        $(l), s(Pe({
                            id: l.id,
                            txHash: O,
                            invoked: !1,
                            rejected: !1
                        })), I("waitingForProviderToReceiveCrypto")
                    } catch (O) {
                        O.cause.code === 4001 ? (R(l), v(!1), s(Pe({
                            id: l.id,
                            invoked: !1,
                            rejected: !0
                        }))) : (I("genericError"), console.error(O))
                    }
                }
            }, [l, t, i, Ce, n, Se, s, A, be, $, R]);
        return g ? e.jsx(M, {
            children: e.jsx(H, {
                className: "absolute m-auto left-0 right-0"
            })
        }) : !l || !(l != null && l.id) || l.status === C.OrderStatusEnum.Unknown || U === "genericError" ? e.jsx(M, {
            children: e.jsx(Qe, {})
        }) : U === "confirmTransaction" ? e.jsx(Hs, {
            order: l,
            sendTx: ke,
            localInvoked: j,
            persistedInvoked: !!y
        }) : U === "waitingForProviderToReceiveCrypto" ? e.jsx($s, {
            order: l
        }) : U === "transactionRejected" ? e.jsx(Ys, {
            order: l,
            invokeTx: ke
        }) : U === "processingOrder" ? e.jsx(qs, {
            order: l
        }) : null
    },
    ta = ea,
    sa = () => {
        const s = X(),
            a = f(pe),
            t = f(te);
        return a ? t ? e.jsx(z, {
            replace: !0,
            to: {
                pathname: `${D.SELL}/build-quote`
            }
        }) : e.jsxs(Fe, {
            className: "relative",
            children: [e.jsx(Pt, {
                onClickBack: () => s(Lt(null))
            }), e.jsx(At, {})]
        }) : e.jsx(z, {
            replace: !0,
            to: {
                pathname: D.SELL
            }
        })
    },
    aa = sa,
    na = () => {
        const s = ds(w.Sell);
        return s ? e.jsx("div", {
            className: "flex text-center justify-center h-96 items-center",
            children: s
        }) : e.jsx("div", {
            className: "flex text-center justify-center h-96 items-center",
            children: e.jsx(H, {
                size: "lg"
            })
        })
    },
    ca = na,
    ia = ({
        isFetching: s
    }) => {
        const a = f(se),
            t = f(Rt),
            i = ie(Y.OffRampSelectFiat),
            c = ge(w.Sell, je.FIAT),
            n = m.useCallback(() => {
                c(), i()
            }, [c, i]);
        return e.jsx(e.Fragment, {
            children: s ? e.jsx(q, {
                className: "w-16 h-10 mt-0"
            }) : e.jsx(he, {
                disabled: t.length <= 1,
                className: "w-fit py-0 bg-alternative rounded-lg flex items-center",
                valueClassName: "text-alternative",
                onClick: n,
                value: a == null ? void 0 : a.symbol,
                "data-testid": "fiat-selector"
            })
        })
    },
    la = () => {
        var k;
        const {
            sellAmount: s,
            setSellAmount: a,
            isSellAmountMoreThanMax: t,
            isSellAmountLessThanMin: i,
            sellQuotes: c
        } = P(), [n, o] = m.useState(!1), u = f(It), r = f(Ve), d = f(ae), {
            cryptoToSell: l,
            cryptosToSell: p,
            status: j
        } = f(ne), v = j === "loading", {
            symbol: h
        } = l || {}, g = (k = c == null ? void 0 : c.data) == null ? void 0 : k.filter(y => !y.error), N = m.useCallback(y => `${Dt(y.toString(),{thousandSeparator:!0})} ${h}`, [h]), S = m.useCallback(() => {
            n || a(.05)
        }, [n, a]);
        return m.useEffect(() => {
            !s && !n && !r && (o(!0), S())
        }, [n, s, l, a, r, S]), m.useEffect(() => {
            r || S()
        }, [r, S]), e.jsxs("div", {
            className: "flex flex-grow flex-col justify-center relative",
            children: [d || v ? e.jsx(q, {
                className: "w-48 m-auto"
            }) : !l || p.length === 0 ? null : e.jsx(Mt, {
                "data-testid": "sell-amount-input",
                autoFocus: !0,
                disabled: d || r,
                className: Q("bg-transparent border-transparent focus:border-transparent focus:ring-0 font-bold text-center w-full text-5xl", {
                    "text-error-default": (g == null ? void 0 : g.length) === 0 && (t || i),
                    "text-6xl": (s || 0).toString().length < 6
                }),
                value: s || void 0,
                onValueChange: y => {
                    a(y.floatValue || 0)
                },
                placeholder: `0 ${h}`,
                suffix: ` ${h}`,
                thousandSeparator: !0,
                allowNegative: !1,
                decimalScale: 5
            }), (g == null ? void 0 : g.length) === 0 && u && (t || i) && e.jsxs(x, {
                scale: b.ParagraphSm,
                className: "absolute bottom-0.5 left-0 right-0 mt-2 text-error-default center text-center",
                children: ["Enter a value between ", N(u.minAmount), " and ", N(u.maxAmount)]
            })]
        })
    },
    oa = ({
        isFetching: s
    }) => {
        const a = f(Ft),
            t = f(te),
            i = ie(Y.OffRampSelectCashOutDestination),
            c = !a || a.length <= 1,
            n = ge(w.Sell, je.PAYMENT_METHOD),
            o = m.useCallback(() => {
                c || (n(), i())
            }, [c, i, n]);
        return s ? e.jsx(q, {
            className: "w-full"
        }) : t != null && t.customAction || a.length === 0 ? null : e.jsx(he, {
            className: "w-full px-4 sm:px-6 py-4 relative bg-alternative rounded-lg flex items-center justify-between",
            enableChevron: !0,
            onClick: o,
            disabled: c,
            value: e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                    className: "flex flex-grow items-center",
                    children: [e.jsx(Bt, {
                        cashOutDestinationType: t == null ? void 0 : t.paymentType,
                        subdued: c
                    }), e.jsx(x, {
                        scale: b.ParagraphSm,
                        className: "ml-2",
                        subdued: c,
                        children: t == null ? void 0 : t.name
                    })]
                }), e.jsx(Ht, {
                    payment: t
                })]
            })
        })
    },
    ra = ({
        isFetching: s
    }) => {
        var k;
        const a = X(),
            {
                cryptoToSellBalance: t
            } = P(),
            i = f(ze),
            {
                rampAccount: c
            } = W(),
            n = f(ce),
            o = f(Wt),
            u = m.useMemo(() => n != null && n.network.chainId ? J(n == null ? void 0 : n.network.chainId) : void 0, [n == null ? void 0 : n.network.chainId]),
            r = f(te),
            {
                data: d,
                error: l,
                isFetching: p
            } = t || {},
            j = zt(d),
            v = !i || o.length <= 1,
            h = ie(Y.OffRampSelectCrypto),
            g = m.useMemo(() => {
                var y, L;
                return ((L = (y = $t[u ? ? 1]) == null ? void 0 : y.nativeCurrency) == null ? void 0 : L.symbol) === (n == null ? void 0 : n.symbol)
            }, [u, n == null ? void 0 : n.symbol]),
            N = ge(w.Sell, je.CRYPTO),
            S = m.useCallback(() => {
                v || (h(), N())
            }, [v, h, N]);
        return m.useEffect(() => {
            o && n && !o.find(y => y.id === (n == null ? void 0 : n.id)) && a(Ut(null))
        }, [o, n, a]), s ? e.jsx(q, {
            className: "w-full"
        }) : (o == null ? void 0 : o.length) === 0 ? r ? e.jsx(re, {
            type: "info",
            message: "No tokens available for this currency. Try USD."
        }) : e.jsx(re, {
            type: "info",
            message: "No tokens available for this cash-out destination"
        }) : e.jsx(he, {
            className: "w-full px-4 sm:px-6 py-4 relative bg-alternative rounded-lg flex items-center justify-between",
            enableChevron: !0,
            onClick: S,
            disabled: v,
            value: e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                    className: "flex items-center flex-grow",
                    children: [n && e.jsx(Gt, {
                        token: n,
                        hideNetwork: g,
                        chainId: u || ee.ChainId.ETHEREUM,
                        className: "mr-3 aspect-square"
                    }), e.jsxs("div", {
                        children: [e.jsx(x, {
                            scale: b.HeadingXs,
                            bold: !0,
                            className: "text-left",
                            children: n == null ? void 0 : n.name
                        }), e.jsx(x, {
                            scale: b.ParagraphXs,
                            subdued: !0,
                            className: "text-left",
                            children: (k = n == null ? void 0 : n.network) == null ? void 0 : k.chainName
                        })]
                    })]
                }), e.jsx("div", {
                    className: "flex space-x-2 items-center",
                    children: c ? p ? e.jsx(q, {
                        className: "w-16 h-6 mt-0"
                    }) : l ? null : e.jsxs(e.Fragment, {
                        children: [e.jsx(Le, {}), e.jsxs(x, {
                            subdued: !0,
                            scale: b.ParagraphXs,
                            children: [Vt(d).format(j), " ", n == null ? void 0 : n.symbol]
                        })]
                    }) : e.jsxs(e.Fragment, {
                        children: [e.jsx(Le, {}), e.jsxs(x, {
                            subdued: !0,
                            scale: b.ParagraphXs,
                            children: ["0 ", n == null ? void 0 : n.symbol]
                        })]
                    })
                })]
            })
        })
    },
    ua = () => e.jsxs("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [e.jsx("path", {
            d: "M5.17197 9.93193C5.21625 9.76748 5.44956 9.76748 5.49384 9.93193L5.87364 11.3425C5.88909 11.3999 5.93389 11.4447 5.99125 11.4601L7.40185 11.8399C7.5663 11.8842 7.5663 12.1175 7.40185 12.1618L5.99125 12.5416C5.93389 12.5571 5.88909 12.6019 5.87364 12.6592L5.49384 14.0698C5.44956 14.2343 5.21625 14.2343 5.17197 14.0698L4.79217 12.6592C4.77672 12.6019 4.73192 12.5571 4.67456 12.5416L3.26396 12.1618C3.09951 12.1175 3.09951 11.8842 3.26396 11.8399L4.67456 11.4601C4.73192 11.4447 4.77672 11.3999 4.79217 11.3425L5.17197 9.93193Z",
            className: "fill-icon-default"
        }), e.jsx("path", {
            d: "M9.17067 3.26396C9.21494 3.09951 9.44826 3.09951 9.49254 3.26396L10.438 6.77555C10.4535 6.8329 10.4983 6.87771 10.5556 6.89315L14.0672 7.83864C14.2317 7.88291 14.2317 8.11623 14.0672 8.16051L10.5556 9.106C10.4983 9.12144 10.4535 9.16624 10.438 9.2236L9.49254 12.7352C9.44826 12.8996 9.21494 12.8996 9.17067 12.7352L8.22518 9.2236C8.20974 9.16624 8.16493 9.12144 8.10758 9.106L4.59599 8.16051C4.43154 8.11623 4.43154 7.88291 4.59599 7.83864L8.10758 6.89315C8.16493 6.87771 8.20974 6.8329 8.22518 6.77555L9.17067 3.26396Z",
            className: "fill-icon-default"
        }), e.jsx("path", {
            d: "M3.83994 2.59599C3.88422 2.43154 4.11753 2.43154 4.16181 2.59599L4.54161 4.0066C4.55706 4.06395 4.60186 4.10876 4.65922 4.1242L6.06982 4.504C6.23427 4.54828 6.23427 4.7816 6.06982 4.82587L4.65922 5.20567C4.60186 5.22112 4.55706 5.26592 4.54161 5.32328L4.16181 6.73388C4.11753 6.89833 3.88422 6.89833 3.83994 6.73388L3.46014 5.32328C3.44469 5.26592 3.39989 5.22112 3.34253 5.20567L1.93193 4.82587C1.76748 4.7816 1.76748 4.54828 1.93193 4.504L3.34253 4.1242C3.39989 4.10876 3.44469 4.06395 3.46014 4.0066L3.83994 2.59599Z",
            className: "fill-icon-default"
        })]
    });

function ma(s, a) {
    return Math.trunc(s * Math.pow(10, a)) / Math.pow(10, a)
}
const da = () => {
        const s = [25, 50, 75, 100],
            {
                setSellAmount: a,
                cryptoToSellBalance: t
            } = P(),
            i = f(Ve),
            c = f(ce),
            n = f(ae),
            {
                estimatedGasFeeInEth: o
            } = qt(21e3 * 1.2),
            u = r => {
                let l = ((t == null ? void 0 : t.data) || 0) * (r / 100);
                return r === 100 && (l = l - (o || 0)), ma(l, 5)
            };
        return n || i || !c || (t == null ? void 0 : t.data) === 0 ? null : e.jsx("div", {
            className: "m-auto",
            children: e.jsx("div", {
                className: Q("button-group"),
                children: s.map(r => r === 100 ? e.jsxs(E, {
                    startIcon: e.jsx(ua, {}),
                    variant: "outline",
                    size: "sm",
                    onClick: () => a(u(r)),
                    "data-tooltip-id": "gas-helper-text",
                    className: "hover:border-default hover:cursor-pointer hover:bg-hover",
                    children: ["Sell Max", e.jsx(Ge, {
                        id: "gas-helper-text",
                        content: "Max is your total balance of ETH minus priority gas fee"
                    })]
                }, r) : e.jsxs(E, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => a(u(r)),
                    className: "hover:border-default hover:cursor-pointer hover:bg-hover",
                    children: [r, "%"]
                }, r))
            })
        })
    },
    Ye = () => {
        const {
            region: s,
            status: a
        } = f(Qt), t = a === "loading" || a === "idle", {
            cashOutDestination: i,
            status: c
        } = f(xe), n = c === "loading" || c === "idle", {
            cryptoToSell: o,
            status: u
        } = f(ne), r = u === "loading" || u === "idle", d = f(se), l = f(Yt), p = f(ae);
        return m.useMemo(() => !!(o && s && d && i) && !!!(t || p || l || r || n), [i, o, d, n, r, p, t, l, s])
    },
    fa = () => {
        const {
            cryptoToSellBalance: s,
            sellAmount: a
        } = P(), t = Ye(), {
            connectedAccounts: i
        } = B(Zt.ALL), {
            rampAccount: c
        } = W(), {
            chain: n
        } = Kt(), o = n == null ? void 0 : n.id, u = (s == null ? void 0 : s.data) === 0 && !!c, r = s == null ? void 0 : s.isFetching, d = f(pe), l = f(ce);
        m.useEffect(() => {
            if (c && !r && u && t && a > 0) {
                const p = {
                    connected_accounts_count: String((i == null ? void 0 : i.length) || 0),
                    connected_chain_id: o,
                    currency_source: _(l == null ? void 0 : l.symbol),
                    currency_source_chain_id: `${l==null?void 0:l.network.chainId}`,
                    region_id: _(d == null ? void 0 : d.id),
                    amount: a
                };
                Xt(p)
            }
        }, [u, r, t, a, c])
    },
    Re = ({
        setColToDisplay: s
    }) => {
        const a = f(fe),
            t = f(pe),
            i = f(se),
            c = f(ae),
            {
                cashOutDestination: n,
                status: o
            } = f(xe),
            u = f(ze),
            r = o === "loading",
            {
                cryptoToSell: d,
                status: l
            } = f(ne),
            p = l === "loading",
            {
                activeAccount: j
            } = B();
        fa();
        const v = m.useMemo(() => a.filter(S => S.status === C.OrderStatusEnum.Pending).length, [a]),
            h = m.useMemo(() => !!(p || c || r), [p, c, r]),
            g = !!t && !!d && !!i && u,
            N = m.useMemo(() => j ? s ? e.jsx(E, {
                width: "full",
                onClick: () => s("select"),
                disabled: !g,
                children: "Get Quotes"
            }) : null : e.jsx(Ue, {
                walletType: Jt.METAMASK
            }), [j, s, g]);
        return t ? n ? e.jsx("div", {
            className: "w-full h-full",
            id: "build-quote-page",
            children: e.jsxs("div", {
                className: "flex flex-col space-y-4 h-full",
                children: [e.jsxs("div", {
                    className: "flex justify-center space-x-2",
                    children: [e.jsx(fs, {
                        disabled: h,
                        rampType: w.Sell
                    }), e.jsx(ps, {
                        isFetching: h,
                        rampType: w.Sell
                    }), e.jsx(ia, {
                        isFetching: h
                    })]
                }), e.jsx(la, {}), e.jsx(da, {}), e.jsx(ra, {
                    isFetching: h
                }), e.jsx(oa, {
                    isFetching: h
                }), N && e.jsx("div", {
                    className: "m-0",
                    children: N
                }), e.jsx(hs, {
                    processingOrdersCount: v
                })]
            })
        }) : e.jsx(z, {
            to: `${D.SELL}/cash-out-destination`
        }) : e.jsx(z, {
            to: `${D.SELL}/region`
        })
    },
    pa = ({
        quotes: s,
        trackQuoteSelected: a,
        refetchCount: t,
        maxQuoteRefreshCount: i,
        refetchQuotes: c
    }) => {
        const [n, o] = m.useState(0);
        return e.jsxs("div", {
            children: [t <= i && e.jsx(xs, {
                onCountdownComplete: c,
                preCountdownText: "New quotes in",
                className: "mb-4"
            }), e.jsx(gs, {
                quotes: s,
                trackQuoteSelected: a,
                activeQuoteIndex: n,
                setActiveQuoteIndex: o,
                rampType: w.Sell
            })]
        })
    },
    ha = "/assets/paypal-metamask-dark-sell-42c4b4d5.png",
    xa = "/assets/paypal-metamask-light-sell-23f99142.png",
    ga = () => {
        const {
            t: s
        } = F(), a = Me();
        return e.jsxs("div", {
            className: "flex flex-col bg-alternative rounded-xl p-16",
            children: [e.jsx("img", {
                src: a ? ha : xa,
                alt: "PayPal & MetaMask"
            }), e.jsx(x, {
                center: !0,
                bold: !0,
                className: "mt-8",
                children: s("ramp.sellWithPayPalTitle")
            }), e.jsx(x, {
                center: !0,
                scale: b.ParagraphSm,
                className: "mt-4",
                children: s("ramp.sellWithPayPalDescription")
            })]
        })
    },
    ja = s => {
        const {
            sellQuotes: a
        } = P(), t = f(te), i = f(se), c = f(ce), n = f(fe);
        return m.useCallback(o => {
            var u;
            if (a && a.data && o && c && i && t) {
                const r = (n == null ? void 0 : n.some(v => {
                        var h;
                        return v.status === C.OrderStatusEnum.Completed && v.provider.id === ((h = o == null ? void 0 : o.provider) == null ? void 0 : h.id)
                    })) ? ? !1,
                    d = a.data,
                    l = Number(o.amountIn),
                    p = Number(o.amountOut),
                    j = {
                        cash_out_destination_id: _(t == null ? void 0 : t.id),
                        chain_id_source: `${c==null?void 0:c.network.chainId}`,
                        crypto_amount: l,
                        currency_destination: c == null ? void 0 : c.symbol,
                        currency_source: i == null ? void 0 : i.symbol,
                        custom_action_options: void 0,
                        exchange_rate: o.exchangeRate || 0,
                        fiat_out: p,
                        is_previously_successful: r,
                        processing_fee: o.providerFee || 0,
                        provider_offramp: (u = o == null ? void 0 : o.provider) == null ? void 0 : u.name,
                        quote_position: d.findIndex(v => {
                            var h;
                            return v.provider.id === ((h = o == null ? void 0 : o.provider) == null ? void 0 : h.id)
                        }) + 1,
                        quotes_sort_method: es.Price,
                        refresh_count: s,
                        results_count: d.length
                    };
                ts(j)
            }
        }, [n, a, c, i, t, s])
    },
    Ie = 6,
    De = () => {
        const {
            sellQuotes: s,
            refetchSellQuotes: a
        } = P(), {
            cashOutDestinations: t
        } = f(xe), i = f(ss), {
            data: c,
            error: n,
            isFetching: o
        } = s || {}, u = Ye(), {
            cryptosToSell: r,
            status: d
        } = f(ne), l = d === "loading", p = d === "idle", j = m.useMemo(() => c ? as(c.filter(A => !A.error), "") : null, [c]), v = c && (c == null ? void 0 : c.length) > 0 && (c == null ? void 0 : c.some(A => {
            var $;
            return A.error && (($ = A == null ? void 0 : A.technicalDetails) == null ? void 0 : $.includes("ERR_CANCELED"))
        })), h = m.useMemo(() => o || v, [o, v]), [g, N] = m.useState(0), S = m.useMemo(() => g > Ie, [g]), k = ja(g), y = m.useCallback(async () => {
            N(0), await a(g)
        }, [g, a]), L = m.useCallback(async () => {
            N(g + 1), await a(g)
        }, [g, a]), R = m.useMemo(() => u ? t.length === 0 && i.length > 0 ? e.jsx(ga, {}) : S ? e.jsx(Z, {
            header: "Your available quotes expired",
            subTitle: e.jsx(E, {
                variant: "link",
                onClick: y,
                children: "Refetch quotes"
            })
        }) : h ? e.jsx(ns, {}) : n ? e.jsx(Qe, {}) : j !== null && j.length > 0 ? e.jsx(pa, {
            quotes: j,
            trackQuoteSelected: k,
            refetchCount: g,
            maxQuoteRefreshCount: Ie,
            refetchQuotes: L
        }) : e.jsx(Z, {
            header: "More options may be available to you",
            subTitle: "Broaden your search by entering a different amount or changing your cashout destination."
        }) : (r == null ? void 0 : r.length) === 0 && !p && !l ? e.jsx(Z, {
            header: "No crypto available for purchase",
            subTitle: "Please update your region or payment method."
        }) : e.jsx(Z, {
            subTitle: "Loading..."
        }), [u, t.length, i.length, S, h, n, j, r == null ? void 0 : r.length, p, l, y, k, g, L]);
        return e.jsxs("div", {
            className: "flex flex-col overflow-y-scroll no-scrollbar w-full",
            children: [e.jsx(x, {
                center: !0,
                className: "mb-2",
                scale: b.HeadingXs,
                bold: !0,
                children: "How do you want to sell your crypto?"
            }), j !== null && j.length > 1 && e.jsx(x, {
                center: !0,
                subdued: !0,
                className: "mb-4",
                children: "Compare rates from these providers. Quotes are sorted by overall price."
            }), R]
        })
    },
    ya = () => e.jsx("div", {
        className: "w-[1px] h-auto bg-border-muted"
    }),
    ba = () => {
        const s = ws("lg"),
            [a, t] = cs.useState("build");
        return e.jsxs("div", {
            "data-testid": "build-select-sell-quote-page",
            children: [e.jsx(qe, {
                rampType: w.Sell,
                colToDisplay: a,
                setColToDisplay: t
            }), s ? e.jsxs("div", {
                className: "space-x-8 p-8 flex h-[574px]",
                children: [e.jsx(Re, {}), e.jsx(ya, {}), e.jsx(De, {})]
            }) : e.jsxs("div", {
                className: "p-8 h-[574px] overflow-y-scroll no-scrollbar",
                children: [a === "build" && e.jsx(Re, {
                    setColToDisplay: t
                }), a === "select" && e.jsx(De, {})]
            })]
        })
    },
    va = ba;

function Ta() {
    is(w.Sell);
    const {
        onrampMaintenanceMode: s
    } = de(), a = [s].some(t => t === void 0);
    return m.useEffect(() => {
        ls({
            href: window.location.href
        })
    }, []), m.useEffect(() => {
        Ae && (window.location.href = "metamask://sell-crypto")
    }, []), !a && s ? e.jsx(ms, {
        routeName: os.SELL
    }) : Ae ? e.jsx(js, {
        title: w.Sell
    }) : e.jsx(ys, {
        children: e.jsx(rs, {
            children: e.jsxs(T, {
                element: e.jsx(bs, {
                    isLoading: a,
                    title: w.Sell
                }),
                children: [e.jsx(T, {
                    path: "/",
                    element: e.jsx(Ps, {})
                }), e.jsxs(T, {
                    element: e.jsx(vs, {
                        rampType: w.Sell
                    }),
                    children: [e.jsxs(T, {
                        element: e.jsx(Cs, {
                            rampType: w.Sell
                        }),
                        children: [e.jsxs(T, {
                            element: e.jsx(Ss, {}),
                            children: [e.jsx(T, {
                                path: V.REGION,
                                element: e.jsx(ks, {
                                    rampType: w.Sell
                                })
                            }), e.jsx(T, {
                                path: V.CASH_OUT_DESTINATION,
                                element: e.jsx(aa, {})
                            }), e.jsx(T, {
                                path: V.ORDER_PROCESS,
                                element: e.jsx(ca, {})
                            })]
                        }), e.jsxs(T, {
                            element: e.jsx(Ns, {}),
                            children: [e.jsx(T, {
                                path: V.BUILD_QUOTE,
                                element: e.jsx(va, {})
                            }), e.jsx(T, {
                                path: V.ORDER_DETAILS,
                                element: e.jsx(ta, {})
                            })]
                        })]
                    }), e.jsx(T, {
                        path: "*",
                        element: e.jsx(us, {
                            path: D.SELL
                        })
                    })]
                })]
            })
        })
    })
}
export {
    Ta as
    default
};