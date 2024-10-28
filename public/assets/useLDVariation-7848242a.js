import {
    bA as d,
    u as l,
    gD as p,
    r as o
} from "./bootstrap-7c5c33c8.js";
const D = (r, n) => {
    const {
        ldClient: t,
        ldUser: c,
        loading: e,
        error: a
    } = d(), {
        isLdIdentified: i
    } = l(p), [u, f] = o.useState(n ? ? !1);
    return o.useEffect(() => {
        if (!(e || a) && i) {
            const s = t == null ? void 0 : t.variation(r, !1);
            f(typeof s == "string" ? s : !!s)
        }
    }, [r, c, i, e, a, t]), u
};
export {
    D as u
};