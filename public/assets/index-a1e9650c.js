import {
    c8 as R,
    u as C,
    c_ as b,
    c$ as E,
    bA as P,
    d0 as T,
    r as i,
    d1 as _,
    d2 as A,
    d3 as f,
    d4 as w,
    j as e,
    T as c,
    k as u,
    cJ as p,
    i as S,
    h as D,
    d5 as B,
    d6 as U,
    d7 as G,
    cc as F,
    cd as W,
    ca as V,
    x as H,
    aA as Y,
    aE as q,
    aF as k,
    aG as O
} from "./bootstrap-7c5c33c8.js";
import {
    S as J
} from "./SparklesIcon-d4c4fb1e.js";
import "./index-184b0bea.js";
const $ = "/assets/card-hero-art-sm-3ee20239.png",
    K = R() ? "https://ew2foxuat-card.foxcard.io/account/login" : "http://metamask.withcl.com/account/login",
    Q = ({
        enableGetStartedButton: a,
        enableLoginButton: t,
        enableWaitlistButton: n
    }) => {
        const s = C(b),
            [m, {
                error: x,
                isLoading: o
            }] = E(),
            {
                ldUser: r
            } = P(),
            l = (r == null ? void 0 : r.key) ? ? "",
            {
                data: N,
                isLoading: h
            } = T(l, {
                skip: !r || !r.key || !a
            }),
            {
                redeemed: I
            } = N ? ? {},
            [d, y] = i.useState(!1),
            M = i.useCallback(async () => {
                if (!d) {
                    y(!0);
                    try {
                        _({});
                        const g = await m({
                            id: l
                        }).unwrap();
                        g.link && (window.location.href = g.link)
                    } catch (g) {
                        console.error("Error generating unique link ID:", g), y(!1)
                    }
                }
            }, [m, d, l]),
            j = i.useCallback(() => {
                A({
                    waitlist_mode: n
                }), window.location.href = K
            }, [n]),
            L = i.useCallback(() => {
                f({
                    button_type: "button",
                    eligible: s
                }), window.location.href = w
            }, [s]),
            v = i.useMemo(() => h ? "" : d || o ? "Redirecting" : "Get Started", [o, d, h]);
        return e.jsxs("div", {
            className: "hero hero-image",
            children: [e.jsx("img", {
                src: $,
                alt: "metamask card",
                className: "hero-img-sm"
            }), e.jsxs("div", {
                className: "hero-content",
                children: [e.jsx(c, {
                    className: "hero-text",
                    children: "Spend crypto like cash with MetaMask Card"
                }), e.jsx(c, {
                    className: "text-white hero-subtext",
                    children: "Securely and instantly spend your crypto everywhere Mastercard is accepted."
                }), a && e.jsxs("div", {
                    children: [I ? e.jsx(u, {
                        onClick: j,
                        width: "full",
                        className: "get-started-btn",
                        endIcon: e.jsx(p, {}),
                        children: "View Card"
                    }) : e.jsx(u, {
                        isLoading: o || h || d,
                        loadingText: v,
                        width: "full",
                        className: "get-started-btn",
                        endIcon: o ? e.jsx(e.Fragment, {}) : e.jsx(p, {}),
                        onClick: M,
                        children: "Get Started"
                    }), x && e.jsx(c, {
                        scale: S.ParagraphSm,
                        center: !0,
                        className: "text-white get-started-btn !my-1",
                        children: "Failed to generate link. Please try again."
                    })]
                }), e.jsxs("div", {
                    className: "flex space-x-4",
                    children: [n && e.jsx(u, {
                        onClick: L,
                        className: "get-started-btn",
                        children: "Join the Waitlist"
                    }), t && e.jsx(u, {
                        onClick: j,
                        variant: "outline",
                        endIcon: e.jsx(p, {}),
                        children: "Login"
                    })]
                })]
            })]
        })
    },
    X = "/assets/card-page-coin-illustration-834c1c95.png",
    z = "/assets/card-page-secure-illustration-e7b9269a.png",
    Z = "/assets/card-page-mastercard-illustration-c0dedb1c.png",
    ee = [{
        img: X,
        title: "Seamlessly spend crypto, everywhere you go",
        body: "Set up your MetaMask Card in minutes and start using USDC, USDT, and WETH anywhere Mastercard is accepted, instantly on Linea."
    }, {
        img: z,
        title: "Your crypto stays in your control",
        body: "You're in total control of your crypto until you're ready to spend it, without sacrificing custody of your assets."
    }, {
        img: Z,
        title: "Powered by Mastercard and CryptoLife",
        body: "Mastercard's network and CryptoLife's experience make it easy to spend your crypto anywhere in the world."
    }],
    te = ({
        img: a,
        title: t,
        body: n
    }) => e.jsxs("div", {
        className: "flex flex-col p-4 rounded-lg bg-default",
        children: [e.jsx("img", {
            src: a,
            alt: t,
            className: "mb-4 w-full h-auto"
        }), e.jsx(c, {
            bold: !0,
            className: "mb-2 text-base sm:text-lg lg:text-xl",
            children: t
        }), e.jsx(c, {
            subdued: !0,
            className: "text-sm sm:text-base lg:text-lg",
            children: n
        })]
    }),
    se = () => e.jsx("div", {
        className: "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        children: ee.map((a, t) => e.jsx(te, { ...a
        }, t))
    }),
    ae = () => {
        const a = D(),
            {
                cardFeatureWaitlistMode: t,
                enableCardSurvey: n
            } = a,
            s = C(b),
            m = B(U.CARD_SURVEY);
        i.useEffect(() => {
            G({
                eligible: s,
                waitlist_mode: t
            })
        }, [s, t]), i.useEffect(() => {
            s && n && m()
        }, [n, s]);
        const x = s && !t,
            o = s && t,
            r = !s || t,
            l = () => {
                f({
                    button_type: "banner",
                    eligible: s
                }), window.location.href = w
            };
        return e.jsxs(F, {
            children: [e.jsx(W, {
                title: e.jsx(e.Fragment, {
                    children: e.jsxs(c, {
                        scale: S.HeadingSm,
                        bold: !0,
                        children: ["MetaMask Card", e.jsx(V, {
                            variant: "infoSubdued",
                            className: "font-normal inline-block align-middle mx-1 text-xs sm:text-xs lg:mx-3",
                            children: "Pilot"
                        })]
                    })
                })
            }), t && e.jsx(H, {
                className: "mb-6",
                title: "MetaMask Card pilot is at capacity ",
                type: "info",
                customIcon: J,
                message: e.jsxs("div", {
                    className: "flex gap-1.5",
                    children: ["We'll let you know when you can sign up after you", " ", e.jsx(u, {
                        variant: "link",
                        onClick: l,
                        children: "join the waitlist!"
                    })]
                })
            }), e.jsx(Q, {
                enableGetStartedButton: x,
                enableLoginButton: o,
                enableWaitlistButton: r
            }), s && e.jsx(se, {})]
        })
    },
    ne = ae;

function ce() {
    return Y("Metamask Card"), e.jsxs(q, {
        children: [e.jsx(k, {
            index: !0,
            element: e.jsx(ne, {})
        }), e.jsx(k, {
            path: "*",
            element: e.jsx(O, {})
        })]
    })
}
export {
    ce as
    default
};