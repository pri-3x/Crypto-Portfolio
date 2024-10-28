import {
    j as e,
    nW as re,
    av as $,
    H as I,
    fh as _,
    T as U,
    f1 as B,
    r as k,
    a0 as oe,
    g as de,
    ic as ce,
    aC as M,
    oR as me,
    a7 as fe,
    oS as G,
    oT as ue,
    oU as he,
    t as X,
    i as K,
    b as te,
    u as O,
    oV as ge,
    fN as xe,
    oW as pe,
    oX as ye,
    cW as q,
    oY as be,
    aM as ve,
    e9 as Se,
    ea as we,
    dH as je,
    oZ as Ne,
    M as Ce,
    fv as ke,
    aA as He,
    cV as ae,
    dU as Be,
    Z as Te,
    bq as ze,
    o_ as Me,
    dz as V,
    gE as De,
    dR as We,
    v as se,
    aR as Ee,
    o$ as Pe,
    p0 as Ae,
    p1 as Fe,
    w as Re,
    z as ie,
    gF as Le,
    cc as Ie,
    cd as Oe,
    gB as $e,
    p2 as _e,
    y as Ue,
    dG as Ge,
    k as Ve,
    dI as Xe,
    az as Ke,
    em as Ze,
    dJ as qe
} from "./bootstrap-7c5c33c8.js";
import {
    L as Qe,
    S as Ye
} from "./SwapToken-f1103743.js";
import {
    B as Je
} from "./BalanceConversionText-e8458c4f.js";
import {
    C as et,
    a as tt,
    T as at,
    L as st,
    P as it,
    b as lt,
    p as nt,
    c as rt,
    d as ot,
    i as dt,
    e as ct,
    f as mt,
    g as ft
} from "./chartjs-plugin-crosshair.esm-34f1689e.js";
import {
    L as ut
} from "./LoadingPulseCircle-5fb146d3.js";
import {
    S as ht
} from "./SwapElement-e8cb8d58.js";
import {
    T as gt
} from "./index-6d5a5f87.js";
import {
    u as Q
} from "./useBreakpoint-f1843395.js";
import {
    u as xt,
    B as F
} from "./useSearchQuery-0403b373.js";
import "./index-184b0bea.js";
import "./differenceInMilliseconds-d6e71353.js";
import "./Maintenance-ae1f892f.js";

function pt({
    percent: t,
    startValue: s,
    endValue: h
}) {
    return e.jsxs("div", {
        children: [e.jsx("div", {
            className: "w-full h-1 bg-alternative",
            children: e.jsx("div", {
                className: "bg-primary-default h-1",
                style: {
                    width: `${t}%`
                }
            })
        }), e.jsxs("div", {
            className: "flex justify-between py-1 text-xs text-alternative",
            children: [e.jsx("div", {
                children: s
            }), e.jsx("div", {
                children: h
            })]
        })]
    })
}
const yt = ({
        name: t,
        address: s,
        avatarUri: h,
        balance: o,
        marketValue: a,
        symbol: g,
        baseCurrency: y
    }) => e.jsxs("div", {
        id: `account-balance-${s}`,
        className: "flex items-center p-4 sm:px-6 space-x-8 hover:bg-hover",
        children: [e.jsx(re, {
            address: s,
            accountName: t,
            avatarUri: h
        }), e.jsx(Je, {
            formattedMarketValue: $(a, y),
            balance: Number(o).toLocaleString("en-US", {
                maximumFractionDigits: 4
            }),
            symbol: g,
            variant: "large",
            className: "text-right"
        })]
    }),
    bt = ({
        accounts: t,
        isLoading: s
    }) => {
        const h = t.reduce((g, y) => g + y.marketValue, 0),
            {
                baseCurrency: o
            } = I(),
            a = t.filter(g => g.balance > 0);
        return e.jsxs(_, {
            id: "account-balance-list",
            className: "px-0 sm:px-0",
            children: [e.jsxs("div", {
                className: "mb-2 px-4 sm:px-6 justify-between flex items-center",
                children: [e.jsx(U, {
                    className: "font-semibold",
                    children: "Holdings"
                }), s ? e.jsx(B, {
                    className: "rounded-md w-20"
                }) : e.jsx("div", {
                    className: "font-semibold text-xl text-default",
                    children: $(h, o)
                })]
            }), a.length || s ? e.jsx(k.Fragment, {
                children: s ? [1, 2, 3].map(g => e.jsx(Qe, {
                    className: "rounded-md p-4 w-full mx-auto"
                }, `account-balance-list-${g}`)) : a.map(g => e.jsx(yt, { ...g,
                    avatarUri: g == null ? void 0 : g.ensAvatar,
                    baseCurrency: o
                }, `${g.address}`))
            }) : e.jsx("div", {
                className: "flex justify-center my-5 items-center",
                children: e.jsx(oe, {
                    className: "max-w-[16rem]"
                })
            })]
        })
    },
    vt = bt;
var i = {
        grey100: "#d6d9dc",
        grey200: "#bbc0c5",
        grey300: "#9fa6ae",
        grey400: "#848c96",
        grey500: "#6a737d",
        grey600: "#535a61",
        grey700: "#3b4046",
        grey800: "#24272a",
        grey900: "#141618",
        grey1000: "#000000",
        grey050: "#f2f4f6",
        grey000: "#ffffff",
        grey025: "#fafbfc",
        blue100: "#a7d9fe",
        blue200: "#75c4fd",
        blue300: "#43aefc",
        blue400: "#1098fc",
        blue500: "#0376c9",
        blue600: "#0260a4",
        blue700: "#024272",
        blue800: "#01253f",
        blue900: "#00080d",
        blue050: "#eaf6ff",
        blue025: "#eaf6ff",
        green100: "#afecbd",
        green200: "#5dd879",
        green300: "#28a745",
        green400: "#28a745",
        green500: "#1c8234",
        green600: "#145523",
        green700: "#145523",
        green800: "#0a2c12",
        green900: "#041007",
        green050: "#d6ffdf",
        green025: "#f3fcf5",
        red100: "#f7d5d8",
        red200: "#f1b9be",
        red300: "#e88f97",
        red400: "#e06470",
        red500: "#d73847",
        red600: "#8e1d28",
        red700: "#64141c",
        red800: "#3a0c10",
        red900: "#3a0c10",
        red050: "#fcf2f3",
        red025: "#fcf2f3",
        yellow100: "#ffdf70",
        yellow200: "#ffc70a",
        yellow300: "#f8883b",
        yellow400: "#f66a0a",
        yellow500: "#bf5208",
        yellow600: "#954005",
        yellow700: "#632b04",
        yellow800: "#321602",
        yellow900: "#321602",
        yellow050: "#fff2c5",
        yellow025: "#fefcde",
        orange100: "#fbc49d",
        orange200: "#faa66c",
        orange300: "#f8883b",
        orange400: "#f66a0a",
        orange500: "#bf5208",
        orange600: "#954005",
        orange700: "#632b04",
        orange800: "#321602",
        orange900: "#321602",
        orange050: "#fde2cf",
        orange025: "#fef5ef",
        purple100: "#efd2ff",
        purple200: "#cfb5f0",
        purple300: "#d27dff",
        purple400: "#b864f5",
        purple500: "#8b45b6",
        purple600: "#6c2ab2",
        purple700: "#4c1178",
        purple800: "#32054d",
        purple900: "#280a00",
        purple050: "#fbf2ff",
        purple025: "#fcf6ff",
        lime100: "#b8ef4a",
        lime200: "#95ca45",
        lime300: "#7ab040",
        lime400: "#64993d",
        lime500: "#457a39",
        lime600: "#275b35",
        lime700: "#093a31",
        lime800: "#022321",
        lime900: "#011515",
        lime025: "#effed9",
        lime050: "#e3febd",
        white: "#ffffff",
        black: "#000000"
    },
    R = {
        background: {
            default: i.grey800,
            alternative: i.grey900,
            defaultHover: "#313235",
            defaultPressed: "#3f4145",
            alternativeHover: "#1f2123",
            alternativePressed: "#2e3033",
            hover: "#ffffff0a",
            pressed: "#ffffff14"
        },
        text: {
            default: i.grey000,
            alternative: i.grey200,
            muted: i.grey400
        },
        icon: {
            default: i.grey000,
            alternative: i.grey200,
            muted: i.grey400
        },
        border: {
            default: i.grey400,
            muted: "#848c9629"
        },
        overlay: {
            default: "#00000099",
            alternative: "#000000cc",
            inverse: i.grey000
        },
        primary: {
            default: i.blue300,
            alternative: i.blue200,
            muted: "#43aefc26",
            inverse: i.grey900,
            defaultHover: "#26a2fc",
            defaultPressed: "#3baafd"
        },
        error: {
            default: i.red300,
            alternative: i.red200,
            muted: "#e88f9726",
            inverse: i.grey900,
            defaultHover: "#e47782",
            defaultPressed: "#e78891"
        },
        warning: {
            default: i.yellow100,
            muted: "#ffdf7026",
            inverse: i.grey900,
            defaultHover: "#ffe485",
            defaultPressed: "#ffe899"
        },
        success: {
            default: i.green300,
            muted: "#28a74526",
            inverse: i.grey900,
            defaultHover: "#2cb94c",
            defaultPressed: "#30ca53"
        },
        info: {
            default: i.blue300,
            muted: "#43aefc26",
            inverse: i.grey900
        },
        flask: {
            default: i.purple300,
            inverse: i.grey900
        },
        shadow: {
            default: "#00000066",
            primary: "#43aefc33",
            error: "#ff758466"
        }
    },
    St = {
        size: {
            xs: {
                shadowColor: R.shadow.default,
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 1,
                shadowRadius: 4
            },
            sm: {
                shadowColor: R.shadow.default,
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 1,
                shadowRadius: 8
            },
            md: {
                shadowColor: R.shadow.default,
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 1,
                shadowRadius: 16
            },
            lg: {
                shadowColor: R.shadow.default,
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 1,
                shadowRadius: 40
            }
        }
    },
    d = {
        euclidCircularB: "Euclid Circular B"
    },
    c = {
        fontSize1: 10,
        fontSize2: 12,
        fontSize3: 14,
        fontSize4: 16,
        fontSize5: 18,
        fontSize6: 24,
        fontSize7: 32,
        fontSize8: 48
    },
    m = {
        regular: "400",
        medium: "500",
        bold: "700"
    },
    f = {
        letterSpacing0: 0,
        letterSpacing1: .25
    },
    u = {
        lineHeight1: 16,
        lineHeight2: 20,
        lineHeight3: 22,
        lineHeight4: 24,
        lineHeight5: 32,
        lineHeight6: 40,
        lineHeight7: 56
    },
    le = {
        sDisplayMD: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.bold,
            fontSize: c.fontSize7,
            lineHeight: u.lineHeight6,
            letterSpacing: f.letterSpacing0
        },
        sHeadingLG: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.bold,
            fontSize: c.fontSize6,
            lineHeight: u.lineHeight5,
            letterSpacing: f.letterSpacing0
        },
        sHeadingMD: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.bold,
            fontSize: c.fontSize5,
            lineHeight: u.lineHeight4,
            letterSpacing: f.letterSpacing0
        },
        sHeadingSM: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.bold,
            fontSize: c.fontSize4,
            lineHeight: u.lineHeight4,
            letterSpacing: f.letterSpacing0
        },
        sHeadingSMRegular: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.regular,
            fontSize: c.fontSize4,
            lineHeight: u.lineHeight4,
            letterSpacing: f.letterSpacing0
        },
        sBodyLGMedium: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.medium,
            fontSize: c.fontSize4,
            lineHeight: u.lineHeight4,
            letterSpacing: f.letterSpacing0
        },
        sBodyMD: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.regular,
            fontSize: c.fontSize3,
            lineHeight: u.lineHeight3,
            letterSpacing: f.letterSpacing0
        },
        sBodyMDMedium: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.medium,
            fontSize: c.fontSize3,
            lineHeight: u.lineHeight3,
            letterSpacing: f.letterSpacing0
        },
        sBodyMDBold: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.bold,
            fontSize: c.fontSize3,
            lineHeight: u.lineHeight3,
            letterSpacing: f.letterSpacing0
        },
        sBodySM: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.regular,
            fontSize: c.fontSize2,
            lineHeight: u.lineHeight2,
            letterSpacing: f.letterSpacing0
        },
        sBodySMMedium: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.medium,
            fontSize: c.fontSize2,
            lineHeight: u.lineHeight2,
            letterSpacing: f.letterSpacing0
        },
        sBodySMBold: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.bold,
            fontSize: c.fontSize2,
            lineHeight: u.lineHeight2,
            letterSpacing: f.letterSpacing0
        },
        sBodyXS: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.regular,
            fontSize: c.fontSize1,
            lineHeight: u.lineHeight1,
            letterSpacing: f.letterSpacing1
        },
        sBodyXSMedium: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.medium,
            fontSize: c.fontSize1,
            lineHeight: u.lineHeight1,
            letterSpacing: f.letterSpacing1
        },
        lDisplayMD: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.medium,
            fontSize: c.fontSize8,
            lineHeight: u.lineHeight7,
            letterSpacing: f.letterSpacing0
        },
        lHeadingLG: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.bold,
            fontSize: c.fontSize7,
            lineHeight: u.lineHeight6,
            letterSpacing: f.letterSpacing0
        },
        lHeadingMD: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.bold,
            fontSize: c.fontSize6,
            lineHeight: u.lineHeight5,
            letterSpacing: f.letterSpacing0
        },
        lHeadingSM: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.bold,
            fontSize: c.fontSize5,
            lineHeight: u.lineHeight4,
            letterSpacing: f.letterSpacing0
        },
        lHeadingSMRegular: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.regular,
            fontSize: c.fontSize5,
            lineHeight: u.lineHeight4,
            letterSpacing: f.letterSpacing0
        },
        lBodyLGMedium: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.medium,
            fontSize: c.fontSize5,
            lineHeight: u.lineHeight4,
            letterSpacing: f.letterSpacing0
        },
        lBodyMD: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.regular,
            fontSize: c.fontSize4,
            lineHeight: u.lineHeight4,
            letterSpacing: f.letterSpacing0
        },
        lBodyMDMedium: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.medium,
            fontSize: c.fontSize4,
            lineHeight: u.lineHeight4,
            letterSpacing: f.letterSpacing0
        },
        lBodyMDBold: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.bold,
            fontSize: c.fontSize4,
            lineHeight: u.lineHeight4,
            letterSpacing: f.letterSpacing0
        },
        lBodySM: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.regular,
            fontSize: c.fontSize3,
            lineHeight: u.lineHeight3,
            letterSpacing: f.letterSpacing0
        },
        lBodySMMedium: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.medium,
            fontSize: c.fontSize3,
            lineHeight: u.lineHeight3,
            letterSpacing: f.letterSpacing0
        },
        lBodySMBold: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.bold,
            fontSize: c.fontSize3,
            lineHeight: u.lineHeight3,
            letterSpacing: f.letterSpacing0
        },
        lBodyXS: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.regular,
            fontSize: c.fontSize2,
            lineHeight: u.lineHeight2,
            letterSpacing: f.letterSpacing1
        },
        lBodyXSMedium: {
            fontFamily: d.euclidCircularB,
            fontWeight: m.medium,
            fontSize: c.fontSize2,
            lineHeight: u.lineHeight2,
            letterSpacing: f.letterSpacing1
        }
    },
    wt = {
        colors: R,
        typography: le,
        shadows: St
    },
    L = {
        background: {
            default: i.grey000,
            alternative: i.grey050,
            defaultHover: "#f5f5f5",
            defaultPressed: "#ebebeb",
            alternativeHover: "#e7ebee",
            alternativePressed: "#dbe0e6",
            hover: "#0000000a",
            pressed: "#00000014"
        },
        text: {
            default: i.grey900,
            alternative: i.grey500,
            muted: i.grey300
        },
        icon: {
            default: i.grey900,
            alternative: i.grey500,
            muted: i.grey300
        },
        border: {
            default: i.grey200,
            muted: "#bbc0c566"
        },
        overlay: {
            default: "#00000099",
            alternative: "#000000cc",
            inverse: i.grey000
        },
        primary: {
            default: i.blue500,
            alternative: i.blue600,
            muted: "#0376c91a",
            inverse: i.grey000,
            defaultHover: "#036ab5",
            defaultPressed: "#025ea1"
        },
        error: {
            default: i.red500,
            alternative: i.red600,
            muted: "#d738471a",
            inverse: i.grey000,
            defaultHover: "#d02a3a",
            defaultPressed: "#bf2635"
        },
        warning: {
            default: i.yellow500,
            muted: "#bf52081a",
            inverse: i.grey000,
            defaultHover: "#ac4a07",
            defaultPressed: "#984106"
        },
        success: {
            default: i.green500,
            muted: "#1c82341a",
            inverse: i.grey000,
            defaultHover: "#18712d",
            defaultPressed: "#156127"
        },
        info: {
            default: i.blue500,
            muted: "#0376c91a",
            inverse: i.grey000
        },
        flask: {
            default: i.purple500,
            inverse: i.grey000
        },
        shadow: {
            default: "#0000001a",
            primary: "#0376c933",
            error: "#ca354266"
        }
    },
    jt = {
        size: {
            xs: {
                shadowColor: L.shadow.default,
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 1,
                shadowRadius: 4
            },
            sm: {
                shadowColor: L.shadow.default,
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 1,
                shadowRadius: 8
            },
            md: {
                shadowColor: L.shadow.default,
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 1,
                shadowRadius: 16
            },
            lg: {
                shadowColor: L.shadow.default,
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 1,
                shadowRadius: 40
            }
        }
    },
    Nt = {
        colors: L,
        typography: le,
        shadows: jt
    };
et.register(tt, at, st, it, lt, nt, rt, ot, dt, ct, mt);

function Ct(t) {
    const s = t.createLinearGradient(0, 0, 0, 500);
    return s.addColorStop(0, "rgba(73,108,233,0.3)"), s.addColorStop(.35, "rgba(73,108,233,0)"), s
}
const kt = ({
        priceData: t,
        onHover: s
    }) => {
        const h = de(),
            o = k.useRef(),
            [a, g] = k.useState({
                datasets: []
            }),
            [y, b] = k.useState({
                min: 0,
                max: 0
            }),
            {
                baseCurrency: T,
                exchangeRate: r
            } = I(),
            N = k.useMemo(() => ce(S => {
                s(S || null)
            }, 10), [s]),
            j = [{
                id: "customEvent",
                beforeEvent(S, l) {
                    const x = l.event;
                    (x.type === "mouseout" || x.type === "touchend") && N()
                }
            }],
            C = {
                responsive: !0,
                maintainAspectRatio: !1,
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"],
                onHover: S => {
                    var p, w, n;
                    const l = S.chart,
                        x = (p = l == null ? void 0 : l.tooltip) != null && p.dataPoints ? (w = l == null ? void 0 : l.tooltip) == null ? void 0 : w.dataPoints[0] : null;
                    if (x) {
                        const D = x.label,
                            z = (n = x.raw) == null ? void 0 : n.y;
                        try {
                            N({
                                label: D,
                                value: z
                            })
                        } catch (E) {
                            console.error(E)
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: !1
                    },
                    tooltip: {
                        mode: "index",
                        displayColors: !1,
                        intersect: !1,
                        enabled: !1,
                        external: function(S) {
                            var E;
                            let l = document.getElementById("chartjs-tooltip");
                            l || (l = document.createElement("div"), l.id = "chartjs-tooltip", l.innerHTML = "<table></table>", document.body.appendChild(l));
                            const x = S.tooltip;
                            if (x.opacity === 0) {
                                l.style.opacity = "0";
                                return
                            }
                            l.classList.remove("above", "below", "no-transform"), x.yAlign ? l.classList.add(x.yAlign) : l.classList.add("no-transform");
                            let p = 0;
                            if (x.body) {
                                const A = l.querySelector("table");
                                A && (A.innerHTML = `<div class="hidden sm:flex text-xs bg-default shadow-lg border border-muted space-x-1 rounded-lg p-2 whitespace-nowrap"><div class="text-alternative">${x.title}</div></div>`, p = A.getBoundingClientRect().width)
                            }
                            const w = S.chart.canvas.getBoundingClientRect(),
                                n = x.caretX,
                                D = ((E = S.chart) == null ? void 0 : E.scales.y.width) || 0,
                                z = w.left + n + p / 2 >= w.right ? w.left + n - (p - (w.width - n)) : n >= p / 2 ? w.left + window.pageXOffset + n - p / 2 : w.left + window.pageXOffset + n - (n - D);
                            l.style.opacity = "1", l.style.position = "absolute", l.style.left = z + "px", l.style.top = w.top + window.pageYOffset + "px", l.style.padding = x.padding + "px " + x.padding + "px", l.style.pointerEvents = "none"
                        }
                    },
                    hover: {
                        mode: "index",
                        intersect: !1
                    },
                    crosshair: {
                        line: {
                            color: "#aaa",
                            width: 1
                        },
                        sync: {
                            enabled: !1
                        },
                        zoom: {
                            enabled: !1,
                            zoomboxBackgroundColor: "rgba(73,108,233,0.3)",
                            zoomboxBorderColor: "#48F",
                            zoomButtonText: "Reset Zoom",
                            zoomButtonClass: "absolute -mt-[4.5rem] text-xs ml-[1.45rem] bg-default hover:bg-default-hover border rounded-lg px-2 text-icon-default border-muted"
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: !1,
                        grid: {
                            display: !M,
                            drawBorder: !1
                        },
                        stacked: !0,
                        ticks: {
                            maxTicksLimit: M ? 4 : 5,
                            min: 4,
                            display: !M,
                            color: "rgb(100 116 139)"
                        }
                    },
                    x: {
                        title: {
                            display: !1
                        },
                        type: "time",
                        ticks: {
                            display: !M,
                            maxTicksLimit: M ? 4 : 5,
                            maxRotation: 0,
                            color: "rgb(100 116 139)"
                        },
                        grid: {
                            display: !1,
                            drawBorder: !1
                        }
                    }
                },
                elements: {
                    point: {
                        radius: 0,
                        hoverRadius: 5
                    }
                }
            };
        k.useEffect(() => {
            const S = o.current;
            if (S && S) {
                const l = t == null ? void 0 : t.map(([p, w]) => ({
                        x: p,
                        y: w
                    })),
                    x = l == null ? void 0 : l.map(p => p == null ? void 0 : p.y);
                if (x) {
                    const p = Math.min(...x),
                        w = Math.max(...x);
                    b({
                        min: p,
                        max: w
                    })
                }
                g({
                    datasets: [{
                        data: l,
                        fill: !0,
                        tension: .5,
                        backgroundColor: Ct(S.ctx),
                        borderColor: h ? wt.colors.primary.default : Nt.colors.primary.default,
                        borderWidth: 2
                    }]
                })
            }
        }, [t, h]);
        const v = r ? y.min * r : y.min,
            W = r ? y.max * r : y.max;
        return e.jsxs("div", {
            id: "token-chart",
            className: "h-64 md:-mr-[1px] -ml-4 -mr-3 md:mx-0 relative",
            children: [e.jsx("div", {
                className: "flex sm:hidden text-xs justify-start -mb-2 mx-4 mt-2 text-alternative",
                children: $(W, T)
            }), e.jsx(ft, {
                type: "line",
                ref: o,
                data: a,
                options: C,
                plugins: j
            }), e.jsx("div", {
                className: "flex sm:hidden text-xs justify-start -mt-10 mb-2 mx-4 text-alternative",
                children: $(v, T)
            })]
        })
    },
    Ht = kt;

function Y({
    tokenId: t
}) {
    const {
        data: s,
        isSuccess: h,
        isError: o
    } = me({
        tokenId: t
    }), {
        t: a
    } = fe(), {
        exchangeRate: g,
        formatPriceWithCurrency: y
    } = I(), [b, T] = k.useState(!M);
    if (!s || o) return null;
    const {
        price: r,
        marketCap: N,
        totalVolume: j,
        low1d: C,
        high1d: v,
        allTimeLow: W,
        allTimeHigh: S,
        circulatingSupply: l
    } = s || {}, x = C && v && Math.round(r / (C + v) * 100);
    return e.jsx("div", {
        id: "token-market-data-card",
        className: "mt-6 md:mt-8 mb-4",
        children: h ? e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                children: [e.jsxs("div", {
                    className: "col-span-1 flex flex-col",
                    children: [e.jsx("div", {
                        className: "text-sm text-alternative mb-2",
                        children: a("home.tokenDetails.marketCap")
                    }), e.jsx("div", {
                        className: "text-sm md:text-base flex",
                        children: e.jsx("span", {
                            children: N ? G(N * g) : "-"
                        })
                    })]
                }), e.jsxs("div", {
                    className: "col-span-1 text-left flex flex-col",
                    children: [e.jsx("div", {
                        className: "text-sm text-alternative mb-2",
                        children: a("home.tokenDetails.totalVolume")
                    }), e.jsx("div", {
                        className: "text-sm md:text-base",
                        children: j ? G(j * g) : "-"
                    })]
                }), e.jsxs("div", {
                    className: "col-span-1 flex flex-col",
                    children: [e.jsx("div", {
                        className: "text-sm text-alternative mb-2",
                        children: a("home.tokenDetails.volumeMarketCap")
                    }), e.jsx("div", {
                        className: "text-sm md:text-base",
                        children: j && N ? (j / N).toFixed(4) : "-"
                    })]
                }), e.jsxs("div", {
                    className: "col-span-1 text-left flex flex-col",
                    children: [e.jsx("div", {
                        className: "text-sm text-alternative mb-2",
                        children: a("home.tokenDetails.circulatingSupply")
                    }), e.jsx("div", {
                        className: "text-sm md:text-base",
                        children: l ? G(l * g) : "-"
                    })]
                }), b && e.jsxs(e.Fragment, {
                    children: [e.jsxs("div", {
                        className: "col-span-1 flex flex-col",
                        children: [e.jsx("div", {
                            className: "text-sm text-alternative mb-2",
                            children: a("home.tokenDetails.dayRange")
                        }), e.jsx("div", {
                            className: "min-w-[10rem] sm:max-w-xs",
                            children: e.jsx(pt, {
                                percent: x && x || 0,
                                startValue: C && y(C) || "-",
                                endValue: v && y(v) || "-"
                            })
                        })]
                    }), e.jsxs("div", {
                        className: "col-span-1 flex flex-col",
                        children: [e.jsx("div", {
                            className: "text-sm text-alternative mb-2",
                            children: a("home.tokenDetails.allTimeLow")
                        }), e.jsx("div", {
                            className: "text-sm md:text-base",
                            children: W ? y(W) : "-"
                        })]
                    }), e.jsxs("div", {
                        className: "col-span-1 text-left flex flex-col",
                        children: [e.jsx("div", {
                            className: "text-sm text-alternative mb-2",
                            children: a("home.tokenDetails.allTimeHigh")
                        }), e.jsx("div", {
                            className: "text-sm md:text-base",
                            children: S ? y(S) : "-"
                        })]
                    })]
                })]
            }), e.jsx("div", {
                className: "flex mb-2 mt-6 justify-center md:hidden",
                children: e.jsx("button", {
                    className: "border-b border-primary-default text-primary-default",
                    onClick: () => T(!b),
                    children: a(b ? "home.tokenDetails.hideDetails" : "home.tokenDetails.seeMoreDetails")
                })
            })]
        }) : e.jsx("div", {
            className: "rounded-md w-full mx-auto",
            children: e.jsx("div", {
                className: "animate-pulse flex items-center space-x-6",
                children: e.jsx("div", {
                    className: "flex-1",
                    children: e.jsxs("div", {
                        className: "items-center grid grid-cols-1 space-y-6",
                        children: [e.jsxs("div", {
                            className: "flex justify-between space-x-3",
                            children: [e.jsx(B, {
                                className: "h-5 w-32"
                            }), e.jsx(B, {
                                className: "h-5 w-full"
                            })]
                        }), e.jsxs("div", {
                            className: "flex justify-between space-x-3",
                            children: [e.jsx(B, {
                                className: "h-5 w-32"
                            }), e.jsx(B, {
                                className: "h-5 w-full"
                            })]
                        }), e.jsxs("div", {
                            className: "flex justify-between space-x-3",
                            children: [e.jsx(B, {
                                className: "h-5 w-32"
                            }), e.jsx(B, {
                                className: "h-5 w-full"
                            })]
                        }), e.jsxs("div", {
                            className: "hidden md:flex justify-between space-x-3",
                            children: [e.jsx(B, {
                                className: "h-5 w-32"
                            }), e.jsx(B, {
                                className: "h-5 w-full"
                            })]
                        })]
                    })
                })
            })
        })
    })
}
const J = ["1d", "1w", "1m", "1y"],
    Bt = {
        "1d": "day",
        "1w": "week",
        "1m": "month",
        "1y": "year"
    },
    Tt = {
        "1d": "Today",
        "1w": "This week",
        "1m": "This month",
        "1y": "This year"
    },
    ee = ({
        intervals: t,
        activeInterval: s,
        setInterval: h,
        buttonClasses: o
    }) => e.jsx(e.Fragment, {
        children: t.map(a => e.jsx("button", {
            id: a,
            onClick: () => {
                he({
                    time_series: Bt[a] || ""
                }), h(a)
            },
            className: X(o, {
                "bg-primary-default font-semibold text-primary-inverse dark:text-default": a === s,
                "bg-default sm:bg-alternative text-alternative font-medium": a !== s
            }),
            children: e.jsx("span", {
                className: "text-xs",
                children: a.toUpperCase()
            })
        }, a))
    });

function zt({
    tokenId: t
}) {
    const {
        formatPriceWithCurrency: s
    } = I(), [h, o] = k.useState("1m"), [a, g] = k.useState(null), {
        data: y,
        isSuccess: b,
        isError: T
    } = ue({
        tokenId: t
    }), r = y && y[h].prices, [, N] = r != null && r.length ? r[r.length - 1] : [0, 0], [, j] = r != null && r.length ? r[0] : [0, 0], C = a != null && a.value ? (a.value / j - 1) * 100 : (N / j - 1) * 100, v = a != null && a.value ? a.value - j : N - j;
    return T ? e.jsx(Mt, {}) : e.jsxs(_, {
        className: "md:py-5 md:px-6 md:!bg-default !bg-inherit border-0 shadow-none px-0 py-0",
        children: [e.jsxs("div", {
            id: "token-chart-card",
            children: [e.jsxs("div", {
                className: "flex justify-between space-x-2 items-start",
                children: [e.jsxs("div", {
                    className: "flex mb-4 items-center relative flex-shrink-1 truncate",
                    children: [" ", b ? e.jsx(e.Fragment, {
                        children: e.jsxs("div", {
                            className: "flex flex-col",
                            children: [e.jsx("div", {
                                className: "ml-2 font-semibold text-2xl md:text-3xl text-default",
                                children: s(a ? a.value : N)
                            }), !!C && e.jsxs("div", {
                                className: `${C>0?"text-success-default":"text-error-default"} text-sm ml-2 sm:text-base`,
                                children: [e.jsx("span", {
                                    className: "mr-2",
                                    children: `${v>0?"+":""}${s(v)}`
                                }), e.jsxs("span", {
                                    children: ["(", `${C>0?"+":""}${C.toFixed(2)}%`, ")"]
                                }), !a && e.jsx("span", {
                                    className: "ml-2 text-sm text-alternative",
                                    children: Tt[h]
                                })]
                            })]
                        })
                    }) : e.jsxs("div", {
                        className: "animate-pulse",
                        children: [e.jsx(B, {
                            className: "h-6 w-32 md:w-40"
                        }), e.jsx(B, {
                            className: "h-10 w-32 md:w-40"
                        })]
                    })]
                }), e.jsx("div", {
                    className: "flex text-right",
                    children: e.jsx("div", {
                        className: "hidden sm:flex justify-center space-x-3",
                        children: e.jsx(ee, {
                            intervals: J,
                            activeInterval: h,
                            setInterval: o,
                            buttonClasses: "flex grow sm:grow-0 rounded-md text-center items-center cursor-pointer py-1 px-4"
                        })
                    })
                })]
            }), e.jsx("div", {
                className: "flex md:mb-7 justify-end sm:justify-between",
                children: M && e.jsx("div", {
                    className: "text-alternative text-xs sm:text-sm whitespace-pre text-right",
                    children: a ? a.label : " "
                })
            }), e.jsx("div", {
                className: "mb-8 sm:mb-5",
                children: e.jsx(Ht, {
                    priceData: r,
                    onHover: g
                })
            }), e.jsx("div", {
                className: "sm:hidden flex justify-center space-x-3 my-3",
                children: e.jsx(ee, {
                    intervals: J,
                    activeInterval: h,
                    setInterval: o,
                    buttonClasses: "flex justify-center grow sm:grow-0 rounded-md text-center items-center cursor-pointer py-1.5 px-4"
                })
            })]
        }), M ? e.jsxs(_, {
            className: "mt-8",
            children: [e.jsx("span", {
                className: "font-semibold text-base",
                children: "Token Details"
            }), e.jsx(Y, {
                tokenId: t
            })]
        }) : e.jsx(Y, {
            tokenId: t
        })]
    })
}
const Mt = () => e.jsx(_, {
        className: "flex items-center justify-center h-36 sm:h-[200px]",
        children: e.jsx(U, {
            scale: K.ParagraphBase,
            bold: !0,
            center: !0,
            children: "Token details currently unavailable"
        })
    }),
    Dt = ({
        token: t
    }) => {
        const s = te(),
            h = O(ge),
            o = k.useCallback(() => {
                s(xe())
            }, [s]),
            a = h.findIndex(b => String(b.chainId) === String(t.chainId) && b.address === t.address) > -1,
            g = k.useCallback(b => {
                b.preventDefault(), b.stopPropagation(), s(pe(t)), a ? ye({
                    address: t.address,
                    chain_id: q.hexlify(t.chainId || "1"),
                    isWatched: !a
                }) : be({
                    address: t.address,
                    chain_id: q.hexlify(t.chainId || "1"),
                    isWatched: !a
                }), o()
            }, [s, t, a, o]),
            y = k.useCallback(b => {
                b.preventDefault(), b.stopPropagation(), s(ve(Ce.MobileActionMenu, {
                    actions: [{
                        content: e.jsx(Se, {
                            address: t.address,
                            urlType: we.TOKEN,
                            chainId: t.chainId ? ? 1,
                            tokenSymbol: t.symbol
                        })
                    }, {
                        content: e.jsx(Ye, {
                            token: t,
                            onClose: o
                        })
                    }, {
                        content: e.jsx(je, {
                            Icon: Ne,
                            iconClassName: a ? "!text-primary-default" : void 0,
                            text: a ? "Remove from watchlist" : "Add to watchlist",
                            onClick: g
                        })
                    }],
                    bottomButton: !1
                }))
            }, [s, o, g, a, t]);
        return e.jsx("button", {
            className: "rounded-lg hover:bg-hover",
            onClick: b => y(b),
            children: e.jsx(ke, {
                className: "w-4 h-4"
            })
        })
    },
    Wt = Dt;

function qt() {
    He("Token Detail");
    const s = new URLSearchParams(window.location.search).get("accountAddress"),
        h = Q("xl"),
        o = Q("lg"),
        a = te(),
        {
            exchangeRate: g,
            baseCurrency: y
        } = I(),
        {
            chainId: b,
            tokenId: T,
            tokenAddress: r
        } = ae(),
        N = Be(),
        {
            connectedAccounts: j
        } = Te(),
        {
            isConnected: C
        } = ze(),
        {
            tokenBalance: v,
            isLoadingTokenBalances: W
        } = O(Me, V),
        {
            isLoadingTokenMarketData: S
        } = O(De, V),
        {
            accounts: l
        } = O(We, V),
        x = j == null ? void 0 : j.some(H => H.address.toLowerCase() == (s == null ? void 0 : s.toLowerCase())),
        {
            bridgeSupportedChainIds: p
        } = xt(),
        w = v.accounts.map(H => {
            var Z;
            const P = l == null ? void 0 : l.find(ne => ne.address.toLowerCase() === H.accountAddress.toLowerCase());
            return {
                name: (P == null ? void 0 : P.name) || H.accountAddress,
                address: H.accountAddress,
                ensAvatar: P == null ? void 0 : P.ensAvatar,
                readOnly: !0,
                active: !1,
                marketValue: (Z = H == null ? void 0 : H.value) != null && Z.marketValue ? H.value.marketValue * g : 0,
                balance: (H == null ? void 0 : H.balance) || 0,
                symbol: v == null ? void 0 : v.symbol
            }
        }),
        n = se(b),
        D = Ee(n);
    k.useEffect(() => (n && T && r && a(Pe(n, l, r)), () => {
        a(Ae()), a(Fe())
    }), [n, l, r, T, a]);
    const z = n ? Re[n] : {},
        E = n && r ? `https://static.cx.metamask.io/api/v1/tokenIcons/${n}/${r.toLowerCase()}.png` : v.iconUrl,
        A = k.useMemo(() => ({
            SEND: {
                href: `/send?tokenAddress=${r}&tokenChainId=${n}&accountAddress=${s}`,
                displayCondition: x,
                name: "Send"
            },
            SWAP: {
                href: `/swap?chainId=${n}&fromAddress=${s}`,
                displayCondition: !!n && N.includes(n)
            },
            BRIDGE: {
                href: `/bridge?${x?F.SRC_CHAIN:F.DEST_CHAIN}=${n}&${x?F.SRC_TOKEN:F.DEST_TOKEN}=${r}&${F.FROM_ADDRESS}=${s}`,
                displayCondition: !!n && (p == null ? void 0 : p.includes(+n))
            },
            STAKE: {
                displayCondition: r === ie.ZERO_ADDRESS && n === Le.chainId.toString()
            }
        }), [s, n, N, p, r, x]);
    return e.jsxs(Ie, {
        children: [e.jsx(Oe, {
            hideSearch: !h,
            actions: S ? e.jsx(Et, {}) : e.jsx(Pt, {
                tokenSymbol: D ? z.chainShortName : v.symbol,
                networkName: z == null ? void 0 : z.chainShortName
            }),
            containerClassName: "md:pb-4"
        }), e.jsxs("div", {
            className: X("hidden md:flex justify-between w-full mb-4", {
                "justify-end": !C
            }),
            children: [C && e.jsx(gt, {
                location: $e.TokenDetails,
                customTokenActionData: A,
                actions: ["SEND", "SWAP", "BRIDGE", "STAKE"]
            }), e.jsxs("div", {
                className: "flex items-center justify-end gap-4",
                children: [o && n && e.jsx(_e, {
                    chainId: n,
                    coingeckoId: T,
                    address: r,
                    symbol: v.symbol,
                    iconUrl: E,
                    name: v.name
                }), h && n && e.jsx(At, {
                    tokenBalance: v,
                    chainId: n,
                    tokenAddress: r
                }), o && e.jsx(Ft, {
                    tokenAddress: r,
                    blockExplorerUrl: z == null ? void 0 : z.blockExplorerUrl
                }), M && e.jsx(Wt, {
                    token: v
                })]
            })]
        }), e.jsxs("div", {
            className: "gap-6 grid grid-cols-12",
            children: [e.jsxs("div", {
                className: X("col-span-12 xl:col-span-8", {
                    "xl:col-span-12": D
                }),
                children: [T && r && n && e.jsx(zt, {
                    tokenId: T
                }), e.jsx("div", {
                    className: "my-4"
                }), !D && e.jsx(vt, {
                    accounts: w,
                    isLoading: W
                })]
            }), !D && e.jsx("div", {
                className: "hidden xl:block xl:col-span-4 h-[400px] sticky top-10",
                children: e.jsx(ht, {
                    fromAddress: r,
                    baseCurrency: y,
                    exchangeRate: g,
                    useQueryString: !0
                })
            })]
        })]
    })
}
const Et = () => e.jsxs("div", {
        className: "flex items-center animate-pulse",
        children: [e.jsx("div", {
            className: "flex relative shrink-0 mr-3 aspect-square",
            children: e.jsx(ut, {
                className: "h-8 w-8"
            })
        }), e.jsx("div", {
            className: "flex flex-1 max-w-20 sm:w-auto",
            children: e.jsxs("div", {
                className: "flex items-end truncate space-x-3",
                children: [e.jsx("div", {
                    className: "text-2xl md:text-3xl font-semibold text-default",
                    children: e.jsx(B, {
                        className: "h-9 w-24"
                    })
                }), e.jsx("div", {
                    className: "text-lg text-alternative truncate max-w-[9rem] sm:max-w-none",
                    children: e.jsx(B, {
                        className: "h-7 w-24"
                    })
                })]
            })
        })]
    }),
    Pt = ({
        tokenSymbol: t,
        networkName: s
    }) => {
        const {
            chainId: h,
            tokenAddress: o
        } = ae();
        return e.jsxs("div", {
            className: "flex items-center gap-4",
            children: [e.jsx(Ue, {
                className: "flex",
                chainId: se(h) ? ? 1,
                token: {
                    address: o || "",
                    symbol: t
                },
                badgePosition: "bottomRight"
            }), e.jsxs("div", {
                className: "flex flex-col justiy-center sm:max-w-[14rem]",
                children: [e.jsx(U, {
                    className: "font-bold truncate",
                    scale: K.HeadingXs,
                    children: t
                }), s && e.jsxs(U, {
                    className: "text-muted font-light truncate !leading-4",
                    scale: K.ParagraphBase,
                    children: [s, " network"]
                })]
            })]
        })
    },
    At = ({
        tokenBalance: t,
        chainId: s,
        tokenAddress: h
    }) => {
        const {
            data: o
        } = Ge();
        if (h === ie.ZERO_ADDRESS || !(t != null && t.symbol) || !(t != null && t.decimals)) return null;
        const a = () => {
            o == null || o.watchAsset({
                type: "ERC20",
                options: {
                    symbol: t.symbol,
                    decimals: t.decimals,
                    address: t.address,
                    image: t.iconUrl
                }
            }), qe({
                chain_id: parseInt(s),
                token_address: h
            })
        };
        return e.jsx("div", {
            className: "flex items-center justify-center",
            children: e.jsx(Ve, {
                id: "add-token-to-metamask",
                "data-tooltip-id": "add-token-to-metamask",
                variant: "outline",
                className: "p-2",
                onClick: a,
                endIcon: e.jsx(Xe, {
                    className: "w-4 h-4"
                }),
                children: "Add to MetaMask"
            })
        })
    },
    Ft = ({
        tokenAddress: t,
        blockExplorerUrl: s
    }) => e.jsx(Ke, {
        target: "_blank",
        variant: "outline",
        className: "p-2",
        href: `${s}/address/${t==null?void 0:t.toLowerCase()}`,
        endIcon: e.jsx(Ze, {
            className: "w-4 h-4"
        }),
        children: "View on block explorer"
    });
export {
    qt as
    default
};