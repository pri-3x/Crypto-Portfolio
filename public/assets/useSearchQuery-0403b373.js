import {
    h as F,
    p7 as l,
    p8 as L,
    fe as b,
    a$ as v,
    r as s,
    p9 as m,
    aH as R
} from "./bootstrap-7c5c33c8.js";
const U = {
        hardBridgeDecimalCutoff: !0,
        bridgeSlippageLimit: l,
        bridgeTransferLimits: L,
        bridgePage: !0,
        bridgeSuggestedSlippageValues: [2, l],
        bridgeDestTokenSelectionEnabled: !1,
        bridgeTokenServiceEnabled: !1,
        bridgeSupportedRefuelChainIds: {
            src: [],
            dest: []
        }
    },
    D = () => {
        var a;
        const t = F();
        return { ...U,
            ...t,
            showUnmappedTokens: ((a = t.bridgeTokenMapping) == null ? void 0 : a.length) === 0
        }
    },
    N = D;
var I = (t => (t.SRC_TOKEN = "token", t.DEST_TOKEN = "destToken", t.SRC_CHAIN = "srcChain", t.DEST_CHAIN = "destChain", t.METAMASK_ENTRY = "metamaskEntry", t.FROM_ADDRESS = "fromAddress", t))(I || {});
const M = () => {
    const {
        pathname: t,
        search: a
    } = b(), S = v(), e = s.useMemo(() => new URLSearchParams(a), [a]), [g, T] = s.useState(void 0), [h, C] = s.useState(void 0), [k, u] = s.useState(void 0), [f, E] = s.useState(void 0), [p, A] = s.useState(void 0), d = o => o ? Number(o) : void 0;
    return s.useEffect(() => {
        const o = d(e.get("srcChain"));
        o && (E(o), e.delete("srcChain"));
        const c = d(e.get("destChain"));
        c && (A(c), e.delete("destChain"));
        const n = e.get("token");
        n && (C((n === "native" ? m : n).toLowerCase()), e.delete("token"));
        const i = e.get("destToken");
        i && (u((i === "native" ? m : i).toLowerCase()), e.delete("destToken"));
        const r = e.get("fromAddress");
        r && (r != null && r.startsWith("0x") && T(r), e.delete("fromAddress")), e.get("metamaskEntry") && t === R.BRIDGE && e.delete("metamaskEntry"), S(`${t}` + e ? `?${e.toString()}` : "")
    }, [e]), {
        sourceTokenFromUrl: h,
        destTokenFromUrl: k,
        srcChainFromUrl: f,
        destChainFromUrl: p,
        addressFromUrl: g
    }
};
export {
    I as B, M as a, N as u
};