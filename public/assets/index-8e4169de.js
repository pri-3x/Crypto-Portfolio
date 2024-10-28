import {
    j as e,
    u as g,
    gE as we,
    dz as te,
    w as O,
    gF as ne,
    dT as ie,
    ds as H,
    av as je,
    t as ve,
    y as Ce,
    b as L,
    gG as Se,
    dK as Ne,
    fW as ye,
    gH as _,
    z,
    gI as Ae,
    fG as be,
    gJ as _e,
    fe as le,
    Z as q,
    gK as oe,
    gL as B,
    gM as re,
    gN as de,
    gO as ce,
    gP as ke,
    gQ as Ee,
    gR as Q,
    gS as Re,
    gT as ue,
    k as xe,
    gU as Te,
    gV as Me,
    r as C,
    gW as he,
    gX as Le,
    gY as Ie,
    gZ as Pe,
    g_ as Fe,
    g$ as De,
    h0 as We,
    h1 as Oe,
    em as He,
    a6 as G,
    h2 as Qe,
    bq as me,
    h3 as Ue,
    ax as qe,
    N as k,
    h4 as Be,
    aD as X,
    aE as pe,
    aF as T,
    h5 as J,
    aH as Y,
    a$ as Ge,
    h as fe,
    ag as D,
    dU as Ve,
    h6 as U,
    d as Ze,
    h7 as E,
    h8 as $e,
    h9 as Ke,
    cc as ze,
    cd as Xe,
    aA as Je
} from "./bootstrap-7c5c33c8.js";
import {
    S as Ye
} from "./SwapElement-e8cb8d58.js";
import {
    M as ee
} from "./Maintenance-ae1f892f.js";
import "./index-184b0bea.js";
const W = ({
    children: n
}) => e.jsx("div", {
    id: "swap-element",
    className: "!bg-inherit md:!bg-default w-full rounded-2xl sm:max-w-md py-4 sm:px-3 md:px-8 sm:py-8",
    children: n
});

function M({
    token: n,
    displayAmount: a,
    tokenRate: t,
    chainId: r,
    baseCurrency: u,
    exchangeRate: l
}) {
    var S, N, w, v;
    const {
        tokenMarketData: i,
        isLoadingTokenMarketData: h
    } = g(we, te), o = r ? O[r] : O[ne.chainId], {
        exchangeRates: p
    } = g(ie), d = !h && (i == null ? void 0 : i.id) === ((S = o.nativeCurrency) == null ? void 0 : S.coingeckoId) ? i : {}, f = (d == null ? void 0 : d.price) && a, c = (N = o.nativeCurrency) == null ? void 0 : N.symbol, x = c && ((w = p[c]) != null && w.value) ? 1 / ((v = p[c]) == null ? void 0 : v.value) : d.price, s = t * x, m = new H(a).multipliedBy(s).toNumber(), y = je(new H(m).multipliedBy(l).toNumber(), u);
    return e.jsxs("div", {
        id: "token-area",
        className: "flex w-full grow flex-col relative rounded-l-lg bg-default border border-muted p-2 rounded-lg",
        children: [e.jsxs("div", {
            className: "flex items-center gap-x-1",
            children: [e.jsx("div", {
                className: ve("text-left overflow-hidden flex items-center max-w-[400px] h-full"),
                children: e.jsxs("div", {
                    className: "flex w-[200px] items-center space-x-3",
                    children: [e.jsx(Ce, {
                        hideNetwork: !0,
                        token: n,
                        chainId: r
                    }), e.jsx("div", {
                        className: "text-default text-lg font-medium truncate",
                        children: n.symbol
                    })]
                })
            }), e.jsx("div", {
                className: "flex justify-end w-full",
                children: a
            })]
        }), f && m && e.jsxs("div", {
            className: "flex justify-end w-full text-xs text-alternative",
            children: ["≈", y]
        })]
    })
}
const es = ({
    fromToken: n,
    toToken: a,
    chainId: t,
    nativeCurrencyExchangeRate: r
}) => {
    const u = L(),
        l = Se(),
        {
            accountAddresses: i
        } = Ne(),
        h = g(ye, te),
        o = {
            accountAddresses: i,
            chainIds: h
        };
    return {
        handleSubmitSwap: d => {
            if (!(_(d) ? (d == null ? void 0 : d.approvalNeeded.length) > 0 : d.approvalNeeded) && l) {
                const {
                    from: c,
                    to: x,
                    data: s,
                    value: m
                } = d.trade, S = (n == null ? void 0 : n.address) === z.ZERO_ADDRESS ? null : {
                    object: "erc20Transaction",
                    fromAddress: c,
                    toAddress: x,
                    tokenAddress: n == null ? void 0 : n.address,
                    value: "TODO",
                    isFromTransfer: !0,
                    indexed: !1,
                    ...n
                }, w = {
                    object: (a == null ? void 0 : a.address) === z.ZERO_ADDRESS ? "internalTransaction" : "erc20Transaction",
                    fromAddress: x,
                    toAddress: c,
                    tokenAddress: a == null ? void 0 : a.address,
                    value: "TODO",
                    isFromTransfer: !1,
                    indexed: !1,
                    ...a
                }, v = {
                    chainId: t,
                    transactionCategory: "EXCHANGE",
                    transactionProtocol: "METAMASK_V1",
                    subTransactions: [S, w].filter(Boolean),
                    nativeAssetPriceUsd: r
                }, A = m === "0x0" ? "0" : m, I = m === "0" ? Ae(A).toHexString() : be(A, "wei").toHexString();
                u(_e({
                    provider: l,
                    transactionData: {
                        chainId: t,
                        from: c,
                        to: x,
                        data: s,
                        value: I
                    },
                    tokensToUpdate: [{
                        accountAddress: c,
                        tokenAddress: n.address,
                        chainId: t
                    }, {
                        accountAddress: c,
                        tokenAddress: a.address,
                        chainId: t
                    }],
                    request: o,
                    metadata: v
                }))
            }
        }
    }
};

function se() {
    const n = le(),
        {
            activeChainId: a,
            baseCurrency: t,
            exchangeRate: r,
            selectedFromTokens: u,
            toToken: l,
            slippageTolerance: i,
            customSlippage: h
        } = n.state,
        {
            activeAccount: o
        } = q(),
        p = oe(o == null ? void 0 : o.address),
        {
            quoteRequest: d,
            multiQuoteRequest: f,
            sortedValidMultiQuotesWithGasEstimates: c,
            sortedValidQuotesWithGasEstimates: x
        } = g(B),
        s = re(x, c),
        m = de(s, u),
        y = ce(s, l);
    ke({
        chainId: a,
        quoteRequest: d || f,
        baseCurrency: t,
        exchangeRate: r,
        slippageTolerance: i,
        customSlippage: h
    });
    const {
        nativeCurrencyExchangeRate: S
    } = Ee(a), {
        handleSubmitSwap: N
    } = es({
        fromToken: u[0],
        toToken: l,
        chainId: a,
        nativeCurrencyExchangeRate: S
    }), w = () => {
        s && N(s)
    };
    return e.jsxs("div", {
        className: "space-y-3",
        children: [e.jsxs("div", {
            className: "flex justify-center relative font-semibold",
            children: [e.jsx(Q, {
                className: "absolute left-0",
                to: "/swap",
                children: e.jsx(Re, {})
            }), e.jsx("div", {
                children: "Review and confirm"
            })]
        }), e.jsxs("div", {
            className: "space-y-3",
            children: [e.jsx("div", {
                className: "font-bold text-left text-default",
                children: "Swap from"
            }), m && s && u.map((v, A) => e.jsx(M, {
                token: v,
                displayAmount: m[A],
                tokenRate: _(s) ? s.sourceTokenRates[A] : s.sourceTokenRate,
                chainId: a,
                baseCurrency: t,
                exchangeRate: r
            }))]
        }), e.jsxs("div", {
            className: "space-y-3",
            children: [e.jsx("div", {
                className: "font-bold text-left text-default",
                children: "Swap to"
            }), y && s && e.jsx(M, {
                token: l,
                displayAmount: y,
                tokenRate: _(s) ? s.destinationTokenRates[0] : s.destinationTokenRate,
                chainId: a,
                baseCurrency: t,
                exchangeRate: r
            })]
        }), e.jsxs("div", {
            className: "text-center w-full space-y-4",
            children: [e.jsx(ue, {
                chainId: a,
                exchangeRate: r,
                slippageTolerance: i,
                customSlippage: h,
                allowAdjust: !1,
                dropdownOpen: !0,
                dropdownContainsAll: !0,
                baseCurrency: t,
                nativeTokenBalance: p
            }), e.jsx(xe, {
                onClick: w,
                disabled: !s,
                width: "full",
                children: "Submit swap"
            })]
        })]
    })
}

function ss() {
    return e.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        className: "fill-primary-default",
        children: [e.jsx("g", {
            "clip-path": "url(#clip0_923_30375)",
            children: e.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M31.7605 9.7089C26.949 4.19789 18.7618 2.67219 12.1868 6.46828C7.68994 9.06452 4.97056 13.5568 4.45926 18.3604C4.33748 19.5045 3.31125 20.3333 2.16712 20.2115C1.02299 20.0897 0.194215 19.0635 0.315999 17.9194C0.962203 11.8484 4.40446 6.15014 10.1034 2.85984C18.705 -2.10628 29.4848 0.118049 35.4827 7.66783L35.709 6.82327C36.0067 5.71188 37.1491 5.05234 38.2605 5.35013C39.3719 5.64793 40.0314 6.7903 39.7336 7.90169L38.2085 13.5935C37.9107 14.7048 36.7684 15.3644 35.657 15.0666L29.9652 13.5415C28.8538 13.2437 28.1943 12.1013 28.4921 10.9899C28.7899 9.87855 29.9322 9.219 31.0436 9.5168L31.7605 9.7089ZM19.9993 8.5416C21.1498 8.5416 22.0826 9.47434 22.0826 10.6249V18.8204L26.2794 21.3385C27.2661 21.9305 27.586 23.2102 26.994 24.1968C26.4021 25.1834 25.1223 25.5033 24.1357 24.9114L18.9274 21.7864C18.2999 21.4099 17.9159 20.7317 17.9159 19.9999V10.6249C17.9159 9.47434 18.8487 8.5416 19.9993 8.5416ZM37.8312 19.7884C38.9754 19.9102 39.8041 20.9365 39.6823 22.0806C39.0361 28.1516 35.5939 33.8498 29.8949 37.1401C21.2934 42.1062 10.5136 39.8819 4.51579 32.3322L4.28956 33.1766C3.99176 34.288 2.84939 34.9475 1.738 34.6497C0.626616 34.3519 -0.0329311 33.2096 0.264864 32.0982L1.78997 26.4064C2.08777 25.295 3.23013 24.6355 4.34152 24.9333L10.0333 26.4584C11.1447 26.7562 11.8042 27.8985 11.5064 29.0099C11.2086 30.1213 10.0663 30.7809 8.95488 30.4831L8.23764 30.2909C13.0492 35.802 21.2365 37.3278 27.8116 33.5317C32.3084 30.9354 35.0278 26.4432 35.5391 21.6396C35.6609 20.4954 36.6871 19.6667 37.8312 19.7884Z"
            })
        }), e.jsx("defs", {
            children: e.jsx("clipPath", {
                id: "clip0_923_30375",
                children: e.jsx("rect", {
                    width: "40",
                    height: "40"
                })
            })
        })]
    })
}

function as() {
    return e.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "38",
        height: "38",
        viewBox: "0 0 38 38",
        fill: "none",
        children: e.jsx("path", {
            d: "M34.1427 18.9286C34.1427 22.9447 32.5473 26.7964 29.7075 29.6362C26.8676 32.476 23.016 34.0714 18.9999 34.0714C14.9837 34.0714 11.1321 32.476 8.29224 29.6362C5.45241 26.7964 3.857 22.9447 3.857 18.9286C3.857 14.9124 5.45241 11.0608 8.29224 8.22095C11.1321 5.38112 14.9837 3.78571 18.9999 3.78571C20.4384 3.78571 21.8391 3.99393 23.1641 4.3725L26.1359 1.40071C23.9402 0.492143 21.5363 0 18.9999 0C16.5141 0 14.0527 0.489602 11.7562 1.44085C9.45969 2.3921 7.37302 3.78637 5.61534 5.54405C2.06554 9.09385 0.0712891 13.9084 0.0712891 18.9286C0.0712891 23.9487 2.06554 28.7633 5.61534 32.3131C7.37302 34.0708 9.45969 35.465 11.7562 36.4163C14.0527 37.3675 16.5141 37.8571 18.9999 37.8571C24.02 37.8571 28.8346 35.8629 32.3844 32.3131C35.9342 28.7633 37.9284 23.9487 37.9284 18.9286H34.1427ZM11.2581 15.2943L8.58915 17.9821L17.107 26.5L36.0356 7.57143L33.3666 4.88357L17.107 21.1432L11.2581 15.2943Z",
            className: "fill-success-default"
        })
    })
}

function ae() {
    var $;
    const n = le(),
        {
            swapMetaData: a,
            activeChainId: t,
            baseCurrency: r,
            exchangeRate: u,
            selectedFromTokens: l,
            toToken: i,
            slippageTolerance: h,
            customSlippage: o
        } = n.state,
        {
            activeAccount: p
        } = q(),
        d = oe(p == null ? void 0 : p.address),
        f = L(),
        {
            blockExplorerUrl: c
        } = O[t || 1],
        {
            transaction: x,
            transactionReceipt: s,
            transactionError: m,
            isLoadingTransaction: y,
            transactionStatus: S
        } = g(Te),
        N = g(Me),
        w = C.useMemo(() => N === "MMS" ? {
            swap_types: ["MMS"]
        } : {}, [N]),
        {
            findSwapTo: v
        } = he(),
        {
            sortedValidMultiQuotesWithGasEstimates: A,
            sortedValidQuotesWithGasEstimates: I
        } = g(B),
        j = re(I, A),
        V = de(j, l),
        Z = ce(j, i);
    C.useEffect(() => {
        const b = s != null && s.gasUsed && a.reg_tx_fee_in_eth ? `${new H(s==null?void 0:s.gasUsed.toString(),16).div(a.reg_tx_fee_in_eth,10).times(100).toFormat(2)}%` : void 0;
        s != null && s.transactionHash && Le({ ...a,
            ...w,
            token_to_amount_received: void 0,
            quote_vs_executionRatio: void 0,
            estimated_vs_used_gasRatio: b,
            approval_gas_cost_in_eth: void 0,
            trade_gas_cost_in_eth: void 0,
            trade_and_approval_gas_cost_in_eth: void 0
        })
    }, [s == null ? void 0 : s.transactionHash, s == null ? void 0 : s.gasUsed, a, w]), C.useEffect(() => {
        var b;
        m && Ie({
            error_message: (b = m == null ? void 0 : m.error) == null ? void 0 : b.message,
            ...w
        })
    }, [m, w]);
    const P = C.useCallback(() => {
            f(Pe()), f(Fe()), f(De()), f(We())
        }, [f]),
        F = () => {
            Qe({ ...w
            }), P()
        };
    if (C.useEffect(() => () => {
            P()
        }, [f, P]), y) return e.jsx("div", {
        className: "flex justify-center items-center h-96",
        children: e.jsx("div", {
            className: "align-middle animate-spin spinner-border inline-block w-10 h-10 border-primary-muted border-t-primary-default border-4 rounded-full",
            role: "status",
            children: e.jsx("span", {
                className: "hidden",
                children: "Loading..."
            })
        })
    });
    if (S === 3) return e.jsx("div", {
        className: "flex flex-col justify-center h-96 items-center",
        children: e.jsx(Oe, {
            title: "Error",
            description: (($ = m == null ? void 0 : m.error) == null ? void 0 : $.message) || "Transaction error",
            action: e.jsx("div", {
                className: "mt-5",
                children: e.jsx(Q, {
                    to: v("swap"),
                    onClick: F,
                    children: e.jsx("p", {
                        className: "btn",
                        children: "Go back"
                    })
                })
            })
        })
    });
    const ge = `${c}/tx/${(s==null?void 0:s.transactionHash)||(x==null?void 0:x.hash)}`;
    return e.jsxs("div", {
        className: "space-y-3",
        children: [e.jsxs("div", {
            className: "flex flex-col justify-center items-center relative font-semibold gap-y-2",
            children: [s != null && s.transactionHash ? e.jsxs(e.Fragment, {
                children: [e.jsx(as, {}), e.jsx("div", {
                    children: "Swap complete!"
                })]
            }) : e.jsxs(e.Fragment, {
                children: [e.jsx(ss, {}), e.jsx("div", {
                    children: "Submitting swap"
                })]
            }), ((s == null ? void 0 : s.transactionHash) || (x == null ? void 0 : x.hash)) && e.jsxs("a", {
                href: ge,
                target: "_blank",
                rel: "noreferrer",
                className: "flex items-center gap-x-2 text-primary-default",
                children: [e.jsx(He, {}), "View transaction"]
            })]
        }), !(s != null && s.transactionHash) && e.jsx("div", {
            className: "flex justify-center",
            children: e.jsx(G, {
                size: "sm"
            })
        }), e.jsxs("div", {
            className: "space-y-3",
            children: [e.jsx("div", {
                className: "font-bold text-left text-default",
                children: "Swap from"
            }), V && j && l.map((b, K) => e.jsx(M, {
                token: b,
                displayAmount: V[K],
                tokenRate: _(j) ? j.sourceTokenRates[K] : j.sourceTokenRate,
                chainId: t,
                baseCurrency: r,
                exchangeRate: u
            }))]
        }), e.jsxs("div", {
            className: "space-y-3",
            children: [e.jsx("div", {
                className: "font-bold text-left text-default",
                children: "Swap to"
            }), Z && j && e.jsx(M, {
                token: i,
                displayAmount: Z,
                tokenRate: _(j) ? j.destinationTokenRates[0] : j.destinationTokenRate,
                chainId: t,
                baseCurrency: r,
                exchangeRate: u
            })]
        }), e.jsxs("div", {
            className: "text-center w-full space-y-4",
            children: [e.jsx(ue, {
                chainId: t,
                exchangeRate: u,
                slippageTolerance: h,
                customSlippage: o,
                allowAdjust: !1,
                dropdownOpen: !1,
                dropdownContainsAll: !0,
                baseCurrency: r,
                nativeTokenBalance: d
            }), (s == null ? void 0 : s.transactionHash) && e.jsx("div", {
                children: e.jsx(Q, {
                    to: v("swap"),
                    onClick: F,
                    children: e.jsx(xe, {
                        onClick: F,
                        disabled: !j,
                        width: "full",
                        children: "Create new swap"
                    })
                })
            })]
        })]
    })
}

function ts({
    baseCurrency: n = "usd",
    exchangeRate: a = 1,
    useQueryString: t = !1,
    fromAddress: r,
    toAddress: u
}) {
    const {
        chain: l
    } = me(), i = l == null ? void 0 : l.id, {
        quoteRequest: h,
        multiQuoteRequest: o
    } = g(B), {
        swapPage: p,
        isLoading: d
    } = Ue(), [f] = qe(), {
        findSwapTo: c
    } = he();
    if (d) return e.jsx(W, {
        children: e.jsx("div", {
            className: "flex flex-col justify-center h-96 items-center",
            children: e.jsx(G, {})
        })
    });
    if (t) {
        let x = e.jsx(J, {
            toAddress: u,
            fromAddress: r,
            baseCurrency: n,
            exchangeRate: a,
            quoteRequest: o
        });
        if (f.get("swapPage") === "review") {
            if (!o || !i) return e.jsx(k, {
                to: c("swap")
            });
            x = e.jsx(se, {})
        } else if (f.get("swapPage") === "confirmed") {
            if (!o || !i) return e.jsx(k, {
                to: c("swap")
            });
            x = e.jsx(ae, {})
        }
        return e.jsx(Be.Provider, {
            value: {
                useQueryString: t
            },
            children: e.jsx(W, {
                children: p ? x : e.jsx(ee, {
                    routeName: X.SWAP
                })
            })
        })
    }
    return e.jsx(W, {
        children: p ? e.jsxs(pe, {
            children: [e.jsx(T, {
                path: "/",
                element: e.jsx(J, {
                    baseCurrency: n,
                    exchangeRate: a,
                    quoteRequest: h || o
                })
            }), e.jsx(T, {
                path: "/review",
                element: !(h || o) || !i ? e.jsx(k, {
                    replace: !0,
                    to: Y.SWAP
                }) : e.jsx(se, {})
            }), e.jsx(T, {
                path: "/confirmed",
                element: !(h || o) || !i ? e.jsx(k, {
                    replace: !0,
                    to: Y.SWAP
                }) : e.jsx(ae, {})
            })]
        }) : e.jsx(ee, {
            routeName: X.SWAP
        })
    })
}
const ns = n => {
        const a = Ge(),
            t = fe();
        C.useEffect(() => {
            t[n] === !1 && a("/")
        }, [a, t, n])
    },
    is = ns,
    R = (n, a) => n && a.includes(n) ? n : ne.chainId,
    ls = () => {
        const {
            chain: n
        } = me(), a = L(), t = n == null ? void 0 : n.id, r = D(t), {
            activeAccount: u
        } = q(), l = u == null ? void 0 : u.address, i = Ve(), h = g(U), o = D(g(U)), [p, d] = Ze("swaps:cachedWalletChainId"), f = D(p);
        C.useEffect(() => {
            a(E(R(t, i)))
        }, []), C.useEffect(() => {
            t !== void 0 && r !== t && d(t.toString());
            const c = Number(p);
            if (l && t && p !== null && h !== c && h !== t && i.includes(t)) try {
                isNaN(c) ? a(E(R(t, i))) : a(E(R(c, i)))
            } catch {
                a(E(R(t, i)))
            }
        }, [t, r, p, i, l, d, f, a, h, o])
    },
    os = ls;

function rs() {
    var o;
    os(), is("swapPage");
    const n = L(),
        a = g(ie),
        t = g($e),
        {
            multiAssetSwaps: r
        } = fe(),
        u = g(U),
        l = a.baseCurrency,
        i = (o = a.exchangeRates) != null && o.usd ? a.exchangeRates[l].value : 1,
        h = Object.keys(t).length ? [t, {
            title: "Swap",
            href: "/swap"
        }] : void 0;
    return C.useEffect(() => () => {
        Object.keys(t).length && n(Ke())
    }, [t, n]), e.jsxs(ze, {
        children: [e.jsx(Xe, {
            title: "Swap",
            pagination: h
        }), u ? e.jsx("div", {
            className: "justify-center flex py-2 sm:py-3",
            children: r ? e.jsx(ts, {
                baseCurrency: l,
                exchangeRate: i
            }) : e.jsx(Ye, {
                baseCurrency: l,
                exchangeRate: i
            })
        }) : e.jsx("div", {
            className: "flex flex-col justify-center h-96 items-center",
            children: e.jsx(G, {})
        })]
    })
}

function hs() {
    return Je("Swap"), e.jsx(pe, {
        children: e.jsx(T, {
            path: "*",
            element: e.jsx(rs, {})
        })
    })
}
export {
    hs as
    default
};