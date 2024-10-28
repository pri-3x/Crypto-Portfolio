var So = Object.defineProperty;
var Co = (i, t, e) => t in i ? So(i, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : i[t] = e;
var b = (i, t, e) => (Co(i, typeof t != "symbol" ? t + "" : t, e), e);
import {
    pl as S,
    pm as U,
    pn as ye,
    po as _e,
    pp as Dn,
    pq as Fi,
    pr as Lo,
    ps as Ao,
    pt as fe,
    pu as Pn,
    pv as Io,
    pw as Fo,
    px as Tn,
    py as Eo,
    pz as ts,
    pA as Ro,
    pB as es,
    pC as zo,
    r as gt,
    aj as Ho,
    pD as No,
    pE as Bo,
    pF as Wo,
    pG as Vo
} from "./bootstrap-7c5c33c8.js";
import {
    d as si
} from "./differenceInMilliseconds-d6e71353.js";

function ni(i, t) {
    const e = S(i);
    return isNaN(t) ? U(i, NaN) : (t && e.setDate(e.getDate() + t), e)
}

function Ei(i, t) {
    const e = S(i);
    if (isNaN(t)) return U(i, NaN);
    if (!t) return e;
    const s = e.getDate(),
        n = U(i, e.getTime());
    n.setMonth(e.getMonth() + t + 1, 0);
    const o = n.getDate();
    return s >= o ? n : (e.setFullYear(n.getFullYear(), n.getMonth(), s), e)
}

function oi(i, t) {
    const e = +S(i);
    return U(i, e + t)
}

function Yo(i, t) {
    return oi(i, t * ye)
}

function jo(i, t) {
    return oi(i, t * _e)
}

function $o(i, t) {
    const e = t * 3;
    return Ei(i, e)
}

function Xo(i, t) {
    return oi(i, t * 1e3)
}

function Uo(i, t) {
    const e = t * 7;
    return ni(i, e)
}

function qo(i, t) {
    return Ei(i, t * 12)
}

function ae(i, t) {
    const e = S(i),
        s = S(t),
        n = e.getTime() - s.getTime();
    return n < 0 ? -1 : n > 0 ? 1 : n
}

function Zo(i, t) {
    const e = S(i),
        s = S(t),
        n = e.getFullYear() - s.getFullYear(),
        o = e.getMonth() - s.getMonth();
    return n * 12 + o
}

function Go(i, t) {
    const e = S(i),
        s = S(t);
    return e.getFullYear() - s.getFullYear()
}

function we(i) {
    return t => {
        const s = (i ? Math[i] : Math.trunc)(t);
        return s === 0 ? 0 : s
    }
}

function Ko(i, t, e) {
    const s = si(i, t) / ye;
    return we(e == null ? void 0 : e.roundingMethod)(s)
}

function Qo(i, t, e) {
    const s = si(i, t) / _e;
    return we(e == null ? void 0 : e.roundingMethod)(s)
}

function On(i) {
    const t = S(i);
    return t.setHours(23, 59, 59, 999), t
}

function Sn(i) {
    const t = S(i),
        e = t.getMonth();
    return t.setFullYear(t.getFullYear(), e + 1, 0), t.setHours(23, 59, 59, 999), t
}

function Jo(i) {
    const t = S(i);
    return +On(t) == +Sn(t)
}

function Cn(i, t) {
    const e = S(i),
        s = S(t),
        n = ae(e, s),
        o = Math.abs(Zo(e, s));
    let r;
    if (o < 1) r = 0;
    else {
        e.getMonth() === 1 && e.getDate() > 27 && e.setDate(30), e.setMonth(e.getMonth() - n * o);
        let a = ae(e, s) === -n;
        Jo(S(i)) && o === 1 && ae(i, s) === 1 && (a = !1), r = n * (o - Number(a))
    }
    return r === 0 ? 0 : r
}

function tr(i, t, e) {
    const s = Cn(i, t) / 3;
    return we(e == null ? void 0 : e.roundingMethod)(s)
}

function er(i, t, e) {
    const s = si(i, t) / 1e3;
    return we(e == null ? void 0 : e.roundingMethod)(s)
}

function ir(i, t, e) {
    const s = Dn(i, t) / 7;
    return we(e == null ? void 0 : e.roundingMethod)(s)
}

function sr(i, t) {
    const e = S(i),
        s = S(t),
        n = ae(e, s),
        o = Math.abs(Go(e, s));
    e.setFullYear(1584), s.setFullYear(1584);
    const r = ae(e, s) === -n,
        a = n * (o - +r);
    return a === 0 ? 0 : a
}

function nr(i) {
    const t = S(i);
    return t.setSeconds(0, 0), t
}

function or(i) {
    const t = S(i),
        e = t.getMonth(),
        s = e - e % 3;
    return t.setMonth(s, 1), t.setHours(0, 0, 0, 0), t
}

function rr(i) {
    const t = S(i);
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
}

function ar(i) {
    const t = S(i),
        e = t.getFullYear();
    return t.setFullYear(e + 1, 0, 0), t.setHours(23, 59, 59, 999), t
}

function lr(i) {
    const t = S(i);
    return t.setMinutes(59, 59, 999), t
}

function cr(i, t) {
    var a, l, c, h;
    const e = Fi(),
        s = (t == null ? void 0 : t.weekStartsOn) ? ? ((l = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) == null ? void 0 : l.weekStartsOn) ? ? e.weekStartsOn ? ? ((h = (c = e.locale) == null ? void 0 : c.options) == null ? void 0 : h.weekStartsOn) ? ? 0,
        n = S(i),
        o = n.getDay(),
        r = (o < s ? -7 : 0) + 6 - (o - s);
    return n.setDate(n.getDate() + r), n.setHours(23, 59, 59, 999), n
}

function hr(i) {
    const t = S(i);
    return t.setSeconds(59, 999), t
}

function ur(i) {
    const t = S(i),
        e = t.getMonth(),
        s = e - e % 3 + 3;
    return t.setMonth(s, 0), t.setHours(23, 59, 59, 999), t
}

function dr(i) {
    const t = S(i);
    return t.setMilliseconds(999), t
}

function fr() {
    return Object.assign({}, Fi())
}

function gr(i) {
    let e = S(i).getDay();
    return e === 0 && (e = 7), e
}

function pr(i, t) {
    const e = t instanceof Date ? U(t, 0) : new t(0);
    return e.setFullYear(i.getFullYear(), i.getMonth(), i.getDate()), e.setHours(i.getHours(), i.getMinutes(), i.getSeconds(), i.getMilliseconds()), e
}
const mr = 10;
class Ln {
    constructor() {
        b(this, "subPriority", 0)
    }
    validate(t, e) {
        return !0
    }
}
class br extends Ln {
    constructor(t, e, s, n, o) {
        super(), this.value = t, this.validateValue = e, this.setValue = s, this.priority = n, o && (this.subPriority = o)
    }
    validate(t, e) {
        return this.validateValue(t, this.value, e)
    }
    set(t, e, s) {
        return this.setValue(t, e, this.value, s)
    }
}
class xr extends Ln {
    constructor() {
        super(...arguments);
        b(this, "priority", mr);
        b(this, "subPriority", -1)
    }
    set(e, s) {
        return s.timestampIsSet ? e : U(e, pr(e, Date))
    }
}
class I {
    run(t, e, s, n) {
        const o = this.parse(t, e, s, n);
        return o ? {
            setter: new br(o.value, this.validate, this.set, this.priority, this.subPriority),
            rest: o.rest
        } : null
    }
    validate(t, e, s) {
        return !0
    }
}
class yr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 140);
        b(this, "incompatibleTokens", ["R", "u", "t", "T"])
    }
    parse(e, s, n) {
        switch (s) {
            case "G":
            case "GG":
            case "GGG":
                return n.era(e, {
                    width: "abbreviated"
                }) || n.era(e, {
                    width: "narrow"
                });
            case "GGGGG":
                return n.era(e, {
                    width: "narrow"
                });
            case "GGGG":
            default:
                return n.era(e, {
                    width: "wide"
                }) || n.era(e, {
                    width: "abbreviated"
                }) || n.era(e, {
                    width: "narrow"
                })
        }
    }
    set(e, s, n) {
        return s.era = n, e.setFullYear(n, 0, 1), e.setHours(0, 0, 0, 0), e
    }
}
const Y = {
        month: /^(1[0-2]|0?\d)/,
        date: /^(3[0-1]|[0-2]?\d)/,
        dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
        week: /^(5[0-3]|[0-4]?\d)/,
        hour23h: /^(2[0-3]|[0-1]?\d)/,
        hour24h: /^(2[0-4]|[0-1]?\d)/,
        hour11h: /^(1[0-1]|0?\d)/,
        hour12h: /^(1[0-2]|0?\d)/,
        minute: /^[0-5]?\d/,
        second: /^[0-5]?\d/,
        singleDigit: /^\d/,
        twoDigits: /^\d{1,2}/,
        threeDigits: /^\d{1,3}/,
        fourDigits: /^\d{1,4}/,
        anyDigitsSigned: /^-?\d+/,
        singleDigitSigned: /^-?\d/,
        twoDigitsSigned: /^-?\d{1,2}/,
        threeDigitsSigned: /^-?\d{1,3}/,
        fourDigitsSigned: /^-?\d{1,4}/
    },
    ut = {
        basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
        basic: /^([+-])(\d{2})(\d{2})|Z/,
        basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        extended: /^([+-])(\d{2}):(\d{2})|Z/,
        extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
    };

function j(i, t) {
    return i && {
        value: t(i.value),
        rest: i.rest
    }
}

function H(i, t) {
    const e = t.match(i);
    return e ? {
        value: parseInt(e[0], 10),
        rest: t.slice(e[0].length)
    } : null
}

function dt(i, t) {
    const e = t.match(i);
    if (!e) return null;
    if (e[0] === "Z") return {
        value: 0,
        rest: t.slice(1)
    };
    const s = e[1] === "+" ? 1 : -1,
        n = e[2] ? parseInt(e[2], 10) : 0,
        o = e[3] ? parseInt(e[3], 10) : 0,
        r = e[5] ? parseInt(e[5], 10) : 0;
    return {
        value: s * (n * ye + o * _e + r * Lo),
        rest: t.slice(e[0].length)
    }
}

function An(i) {
    return H(Y.anyDigitsSigned, i)
}

function W(i, t) {
    switch (i) {
        case 1:
            return H(Y.singleDigit, t);
        case 2:
            return H(Y.twoDigits, t);
        case 3:
            return H(Y.threeDigits, t);
        case 4:
            return H(Y.fourDigits, t);
        default:
            return H(new RegExp("^\\d{1," + i + "}"), t)
    }
}

function $e(i, t) {
    switch (i) {
        case 1:
            return H(Y.singleDigitSigned, t);
        case 2:
            return H(Y.twoDigitsSigned, t);
        case 3:
            return H(Y.threeDigitsSigned, t);
        case 4:
            return H(Y.fourDigitsSigned, t);
        default:
            return H(new RegExp("^-?\\d{1," + i + "}"), t)
    }
}

function Ri(i) {
    switch (i) {
        case "morning":
            return 4;
        case "evening":
            return 17;
        case "pm":
        case "noon":
        case "afternoon":
            return 12;
        case "am":
        case "midnight":
        case "night":
        default:
            return 0
    }
}

function In(i, t) {
    const e = t > 0,
        s = e ? t : 1 - t;
    let n;
    if (s <= 50) n = i || 100;
    else {
        const o = s + 50,
            r = Math.trunc(o / 100) * 100,
            a = i >= o % 100;
        n = i + r - (a ? 100 : 0)
    }
    return e ? n : 1 - n
}

function Fn(i) {
    return i % 400 === 0 || i % 4 === 0 && i % 100 !== 0
}
class _r extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 130);
        b(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"])
    }
    parse(e, s, n) {
        const o = r => ({
            year: r,
            isTwoDigitYear: s === "yy"
        });
        switch (s) {
            case "y":
                return j(W(4, e), o);
            case "yo":
                return j(n.ordinalNumber(e, {
                    unit: "year"
                }), o);
            default:
                return j(W(s.length, e), o)
        }
    }
    validate(e, s) {
        return s.isTwoDigitYear || s.year > 0
    }
    set(e, s, n) {
        const o = e.getFullYear();
        if (n.isTwoDigitYear) {
            const a = In(n.year, o);
            return e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e
        }
        const r = !("era" in s) || s.era === 1 ? n.year : 1 - n.year;
        return e.setFullYear(r, 0, 1), e.setHours(0, 0, 0, 0), e
    }
}
class wr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 130);
        b(this, "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"])
    }
    parse(e, s, n) {
        const o = r => ({
            year: r,
            isTwoDigitYear: s === "YY"
        });
        switch (s) {
            case "Y":
                return j(W(4, e), o);
            case "Yo":
                return j(n.ordinalNumber(e, {
                    unit: "year"
                }), o);
            default:
                return j(W(s.length, e), o)
        }
    }
    validate(e, s) {
        return s.isTwoDigitYear || s.year > 0
    }
    set(e, s, n, o) {
        const r = Ao(e, o);
        if (n.isTwoDigitYear) {
            const l = In(n.year, r);
            return e.setFullYear(l, 0, o.firstWeekContainsDate), e.setHours(0, 0, 0, 0), fe(e, o)
        }
        const a = !("era" in s) || s.era === 1 ? n.year : 1 - n.year;
        return e.setFullYear(a, 0, o.firstWeekContainsDate), e.setHours(0, 0, 0, 0), fe(e, o)
    }
}
class vr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 130);
        b(this, "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"])
    }
    parse(e, s) {
        return $e(s === "R" ? 4 : s.length, e)
    }
    set(e, s, n) {
        const o = U(e, 0);
        return o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0), Pn(o)
    }
}
class kr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 130);
        b(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"])
    }
    parse(e, s) {
        return $e(s === "u" ? 4 : s.length, e)
    }
    set(e, s, n) {
        return e.setFullYear(n, 0, 1), e.setHours(0, 0, 0, 0), e
    }
}
class Mr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 120);
        b(this, "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"])
    }
    parse(e, s, n) {
        switch (s) {
            case "Q":
            case "QQ":
                return W(s.length, e);
            case "Qo":
                return n.ordinalNumber(e, {
                    unit: "quarter"
                });
            case "QQQ":
                return n.quarter(e, {
                    width: "abbreviated",
                    context: "formatting"
                }) || n.quarter(e, {
                    width: "narrow",
                    context: "formatting"
                });
            case "QQQQQ":
                return n.quarter(e, {
                    width: "narrow",
                    context: "formatting"
                });
            case "QQQQ":
            default:
                return n.quarter(e, {
                    width: "wide",
                    context: "formatting"
                }) || n.quarter(e, {
                    width: "abbreviated",
                    context: "formatting"
                }) || n.quarter(e, {
                    width: "narrow",
                    context: "formatting"
                })
        }
    }
    validate(e, s) {
        return s >= 1 && s <= 4
    }
    set(e, s, n) {
        return e.setMonth((n - 1) * 3, 1), e.setHours(0, 0, 0, 0), e
    }
}
class Dr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 120);
        b(this, "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"])
    }
    parse(e, s, n) {
        switch (s) {
            case "q":
            case "qq":
                return W(s.length, e);
            case "qo":
                return n.ordinalNumber(e, {
                    unit: "quarter"
                });
            case "qqq":
                return n.quarter(e, {
                    width: "abbreviated",
                    context: "standalone"
                }) || n.quarter(e, {
                    width: "narrow",
                    context: "standalone"
                });
            case "qqqqq":
                return n.quarter(e, {
                    width: "narrow",
                    context: "standalone"
                });
            case "qqqq":
            default:
                return n.quarter(e, {
                    width: "wide",
                    context: "standalone"
                }) || n.quarter(e, {
                    width: "abbreviated",
                    context: "standalone"
                }) || n.quarter(e, {
                    width: "narrow",
                    context: "standalone"
                })
        }
    }
    validate(e, s) {
        return s >= 1 && s <= 4
    }
    set(e, s, n) {
        return e.setMonth((n - 1) * 3, 1), e.setHours(0, 0, 0, 0), e
    }
}
class Pr extends I {
    constructor() {
        super(...arguments);
        b(this, "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]);
        b(this, "priority", 110)
    }
    parse(e, s, n) {
        const o = r => r - 1;
        switch (s) {
            case "M":
                return j(H(Y.month, e), o);
            case "MM":
                return j(W(2, e), o);
            case "Mo":
                return j(n.ordinalNumber(e, {
                    unit: "month"
                }), o);
            case "MMM":
                return n.month(e, {
                    width: "abbreviated",
                    context: "formatting"
                }) || n.month(e, {
                    width: "narrow",
                    context: "formatting"
                });
            case "MMMMM":
                return n.month(e, {
                    width: "narrow",
                    context: "formatting"
                });
            case "MMMM":
            default:
                return n.month(e, {
                    width: "wide",
                    context: "formatting"
                }) || n.month(e, {
                    width: "abbreviated",
                    context: "formatting"
                }) || n.month(e, {
                    width: "narrow",
                    context: "formatting"
                })
        }
    }
    validate(e, s) {
        return s >= 0 && s <= 11
    }
    set(e, s, n) {
        return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e
    }
}
class Tr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 110);
        b(this, "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"])
    }
    parse(e, s, n) {
        const o = r => r - 1;
        switch (s) {
            case "L":
                return j(H(Y.month, e), o);
            case "LL":
                return j(W(2, e), o);
            case "Lo":
                return j(n.ordinalNumber(e, {
                    unit: "month"
                }), o);
            case "LLL":
                return n.month(e, {
                    width: "abbreviated",
                    context: "standalone"
                }) || n.month(e, {
                    width: "narrow",
                    context: "standalone"
                });
            case "LLLLL":
                return n.month(e, {
                    width: "narrow",
                    context: "standalone"
                });
            case "LLLL":
            default:
                return n.month(e, {
                    width: "wide",
                    context: "standalone"
                }) || n.month(e, {
                    width: "abbreviated",
                    context: "standalone"
                }) || n.month(e, {
                    width: "narrow",
                    context: "standalone"
                })
        }
    }
    validate(e, s) {
        return s >= 0 && s <= 11
    }
    set(e, s, n) {
        return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e
    }
}

function Or(i, t, e) {
    const s = S(i),
        n = Io(s, e) - t;
    return s.setDate(s.getDate() - n * 7), s
}
class Sr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 100);
        b(this, "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"])
    }
    parse(e, s, n) {
        switch (s) {
            case "w":
                return H(Y.week, e);
            case "wo":
                return n.ordinalNumber(e, {
                    unit: "week"
                });
            default:
                return W(s.length, e)
        }
    }
    validate(e, s) {
        return s >= 1 && s <= 53
    }
    set(e, s, n, o) {
        return fe(Or(e, n, o), o)
    }
}

function Cr(i, t) {
    const e = S(i),
        s = Fo(e) - t;
    return e.setDate(e.getDate() - s * 7), e
}
class Lr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 100);
        b(this, "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"])
    }
    parse(e, s, n) {
        switch (s) {
            case "I":
                return H(Y.week, e);
            case "Io":
                return n.ordinalNumber(e, {
                    unit: "week"
                });
            default:
                return W(s.length, e)
        }
    }
    validate(e, s) {
        return s >= 1 && s <= 53
    }
    set(e, s, n) {
        return Pn(Cr(e, n))
    }
}
const Ar = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Ir = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
class Fr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 90);
        b(this, "subPriority", 1);
        b(this, "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"])
    }
    parse(e, s, n) {
        switch (s) {
            case "d":
                return H(Y.date, e);
            case "do":
                return n.ordinalNumber(e, {
                    unit: "date"
                });
            default:
                return W(s.length, e)
        }
    }
    validate(e, s) {
        const n = e.getFullYear(),
            o = Fn(n),
            r = e.getMonth();
        return o ? s >= 1 && s <= Ir[r] : s >= 1 && s <= Ar[r]
    }
    set(e, s, n) {
        return e.setDate(n), e.setHours(0, 0, 0, 0), e
    }
}
class Er extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 90);
        b(this, "subpriority", 1);
        b(this, "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"])
    }
    parse(e, s, n) {
        switch (s) {
            case "D":
            case "DD":
                return H(Y.dayOfYear, e);
            case "Do":
                return n.ordinalNumber(e, {
                    unit: "date"
                });
            default:
                return W(s.length, e)
        }
    }
    validate(e, s) {
        const n = e.getFullYear();
        return Fn(n) ? s >= 1 && s <= 366 : s >= 1 && s <= 365
    }
    set(e, s, n) {
        return e.setMonth(0, n), e.setHours(0, 0, 0, 0), e
    }
}

function zi(i, t, e) {
    var u, d, f, g;
    const s = Fi(),
        n = (e == null ? void 0 : e.weekStartsOn) ? ? ((d = (u = e == null ? void 0 : e.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ? ? s.weekStartsOn ? ? ((g = (f = s.locale) == null ? void 0 : f.options) == null ? void 0 : g.weekStartsOn) ? ? 0,
        o = S(i),
        r = o.getDay(),
        l = (t % 7 + 7) % 7,
        c = 7 - n,
        h = t < 0 || t > 6 ? t - (r + c) % 7 : (l + c) % 7 - (r + c) % 7;
    return ni(o, h)
}
class Rr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 90);
        b(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"])
    }
    parse(e, s, n) {
        switch (s) {
            case "E":
            case "EE":
            case "EEE":
                return n.day(e, {
                    width: "abbreviated",
                    context: "formatting"
                }) || n.day(e, {
                    width: "short",
                    context: "formatting"
                }) || n.day(e, {
                    width: "narrow",
                    context: "formatting"
                });
            case "EEEEE":
                return n.day(e, {
                    width: "narrow",
                    context: "formatting"
                });
            case "EEEEEE":
                return n.day(e, {
                    width: "short",
                    context: "formatting"
                }) || n.day(e, {
                    width: "narrow",
                    context: "formatting"
                });
            case "EEEE":
            default:
                return n.day(e, {
                    width: "wide",
                    context: "formatting"
                }) || n.day(e, {
                    width: "abbreviated",
                    context: "formatting"
                }) || n.day(e, {
                    width: "short",
                    context: "formatting"
                }) || n.day(e, {
                    width: "narrow",
                    context: "formatting"
                })
        }
    }
    validate(e, s) {
        return s >= 0 && s <= 6
    }
    set(e, s, n, o) {
        return e = zi(e, n, o), e.setHours(0, 0, 0, 0), e
    }
}
class zr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 90);
        b(this, "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"])
    }
    parse(e, s, n, o) {
        const r = a => {
            const l = Math.floor((a - 1) / 7) * 7;
            return (a + o.weekStartsOn + 6) % 7 + l
        };
        switch (s) {
            case "e":
            case "ee":
                return j(W(s.length, e), r);
            case "eo":
                return j(n.ordinalNumber(e, {
                    unit: "day"
                }), r);
            case "eee":
                return n.day(e, {
                    width: "abbreviated",
                    context: "formatting"
                }) || n.day(e, {
                    width: "short",
                    context: "formatting"
                }) || n.day(e, {
                    width: "narrow",
                    context: "formatting"
                });
            case "eeeee":
                return n.day(e, {
                    width: "narrow",
                    context: "formatting"
                });
            case "eeeeee":
                return n.day(e, {
                    width: "short",
                    context: "formatting"
                }) || n.day(e, {
                    width: "narrow",
                    context: "formatting"
                });
            case "eeee":
            default:
                return n.day(e, {
                    width: "wide",
                    context: "formatting"
                }) || n.day(e, {
                    width: "abbreviated",
                    context: "formatting"
                }) || n.day(e, {
                    width: "short",
                    context: "formatting"
                }) || n.day(e, {
                    width: "narrow",
                    context: "formatting"
                })
        }
    }
    validate(e, s) {
        return s >= 0 && s <= 6
    }
    set(e, s, n, o) {
        return e = zi(e, n, o), e.setHours(0, 0, 0, 0), e
    }
}
class Hr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 90);
        b(this, "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"])
    }
    parse(e, s, n, o) {
        const r = a => {
            const l = Math.floor((a - 1) / 7) * 7;
            return (a + o.weekStartsOn + 6) % 7 + l
        };
        switch (s) {
            case "c":
            case "cc":
                return j(W(s.length, e), r);
            case "co":
                return j(n.ordinalNumber(e, {
                    unit: "day"
                }), r);
            case "ccc":
                return n.day(e, {
                    width: "abbreviated",
                    context: "standalone"
                }) || n.day(e, {
                    width: "short",
                    context: "standalone"
                }) || n.day(e, {
                    width: "narrow",
                    context: "standalone"
                });
            case "ccccc":
                return n.day(e, {
                    width: "narrow",
                    context: "standalone"
                });
            case "cccccc":
                return n.day(e, {
                    width: "short",
                    context: "standalone"
                }) || n.day(e, {
                    width: "narrow",
                    context: "standalone"
                });
            case "cccc":
            default:
                return n.day(e, {
                    width: "wide",
                    context: "standalone"
                }) || n.day(e, {
                    width: "abbreviated",
                    context: "standalone"
                }) || n.day(e, {
                    width: "short",
                    context: "standalone"
                }) || n.day(e, {
                    width: "narrow",
                    context: "standalone"
                })
        }
    }
    validate(e, s) {
        return s >= 0 && s <= 6
    }
    set(e, s, n, o) {
        return e = zi(e, n, o), e.setHours(0, 0, 0, 0), e
    }
}

function Nr(i, t) {
    const e = S(i),
        s = gr(e),
        n = t - s;
    return ni(e, n)
}
class Br extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 90);
        b(this, "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"])
    }
    parse(e, s, n) {
        const o = r => r === 0 ? 7 : r;
        switch (s) {
            case "i":
            case "ii":
                return W(s.length, e);
            case "io":
                return n.ordinalNumber(e, {
                    unit: "day"
                });
            case "iii":
                return j(n.day(e, {
                    width: "abbreviated",
                    context: "formatting"
                }) || n.day(e, {
                    width: "short",
                    context: "formatting"
                }) || n.day(e, {
                    width: "narrow",
                    context: "formatting"
                }), o);
            case "iiiii":
                return j(n.day(e, {
                    width: "narrow",
                    context: "formatting"
                }), o);
            case "iiiiii":
                return j(n.day(e, {
                    width: "short",
                    context: "formatting"
                }) || n.day(e, {
                    width: "narrow",
                    context: "formatting"
                }), o);
            case "iiii":
            default:
                return j(n.day(e, {
                    width: "wide",
                    context: "formatting"
                }) || n.day(e, {
                    width: "abbreviated",
                    context: "formatting"
                }) || n.day(e, {
                    width: "short",
                    context: "formatting"
                }) || n.day(e, {
                    width: "narrow",
                    context: "formatting"
                }), o)
        }
    }
    validate(e, s) {
        return s >= 1 && s <= 7
    }
    set(e, s, n) {
        return e = Nr(e, n), e.setHours(0, 0, 0, 0), e
    }
}
class Wr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 80);
        b(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"])
    }
    parse(e, s, n) {
        switch (s) {
            case "a":
            case "aa":
            case "aaa":
                return n.dayPeriod(e, {
                    width: "abbreviated",
                    context: "formatting"
                }) || n.dayPeriod(e, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaaa":
                return n.dayPeriod(e, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return n.dayPeriod(e, {
                    width: "wide",
                    context: "formatting"
                }) || n.dayPeriod(e, {
                    width: "abbreviated",
                    context: "formatting"
                }) || n.dayPeriod(e, {
                    width: "narrow",
                    context: "formatting"
                })
        }
    }
    set(e, s, n) {
        return e.setHours(Ri(n), 0, 0, 0), e
    }
}
class Vr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 80);
        b(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"])
    }
    parse(e, s, n) {
        switch (s) {
            case "b":
            case "bb":
            case "bbb":
                return n.dayPeriod(e, {
                    width: "abbreviated",
                    context: "formatting"
                }) || n.dayPeriod(e, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbbb":
                return n.dayPeriod(e, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return n.dayPeriod(e, {
                    width: "wide",
                    context: "formatting"
                }) || n.dayPeriod(e, {
                    width: "abbreviated",
                    context: "formatting"
                }) || n.dayPeriod(e, {
                    width: "narrow",
                    context: "formatting"
                })
        }
    }
    set(e, s, n) {
        return e.setHours(Ri(n), 0, 0, 0), e
    }
}
class Yr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 80);
        b(this, "incompatibleTokens", ["a", "b", "t", "T"])
    }
    parse(e, s, n) {
        switch (s) {
            case "B":
            case "BB":
            case "BBB":
                return n.dayPeriod(e, {
                    width: "abbreviated",
                    context: "formatting"
                }) || n.dayPeriod(e, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBBB":
                return n.dayPeriod(e, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return n.dayPeriod(e, {
                    width: "wide",
                    context: "formatting"
                }) || n.dayPeriod(e, {
                    width: "abbreviated",
                    context: "formatting"
                }) || n.dayPeriod(e, {
                    width: "narrow",
                    context: "formatting"
                })
        }
    }
    set(e, s, n) {
        return e.setHours(Ri(n), 0, 0, 0), e
    }
}
class jr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 70);
        b(this, "incompatibleTokens", ["H", "K", "k", "t", "T"])
    }
    parse(e, s, n) {
        switch (s) {
            case "h":
                return H(Y.hour12h, e);
            case "ho":
                return n.ordinalNumber(e, {
                    unit: "hour"
                });
            default:
                return W(s.length, e)
        }
    }
    validate(e, s) {
        return s >= 1 && s <= 12
    }
    set(e, s, n) {
        const o = e.getHours() >= 12;
        return o && n < 12 ? e.setHours(n + 12, 0, 0, 0) : !o && n === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(n, 0, 0, 0), e
    }
}
class $r extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 70);
        b(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"])
    }
    parse(e, s, n) {
        switch (s) {
            case "H":
                return H(Y.hour23h, e);
            case "Ho":
                return n.ordinalNumber(e, {
                    unit: "hour"
                });
            default:
                return W(s.length, e)
        }
    }
    validate(e, s) {
        return s >= 0 && s <= 23
    }
    set(e, s, n) {
        return e.setHours(n, 0, 0, 0), e
    }
}
class Xr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 70);
        b(this, "incompatibleTokens", ["h", "H", "k", "t", "T"])
    }
    parse(e, s, n) {
        switch (s) {
            case "K":
                return H(Y.hour11h, e);
            case "Ko":
                return n.ordinalNumber(e, {
                    unit: "hour"
                });
            default:
                return W(s.length, e)
        }
    }
    validate(e, s) {
        return s >= 0 && s <= 11
    }
    set(e, s, n) {
        return e.getHours() >= 12 && n < 12 ? e.setHours(n + 12, 0, 0, 0) : e.setHours(n, 0, 0, 0), e
    }
}
class Ur extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 70);
        b(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"])
    }
    parse(e, s, n) {
        switch (s) {
            case "k":
                return H(Y.hour24h, e);
            case "ko":
                return n.ordinalNumber(e, {
                    unit: "hour"
                });
            default:
                return W(s.length, e)
        }
    }
    validate(e, s) {
        return s >= 1 && s <= 24
    }
    set(e, s, n) {
        const o = n <= 24 ? n % 24 : n;
        return e.setHours(o, 0, 0, 0), e
    }
}
class qr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 60);
        b(this, "incompatibleTokens", ["t", "T"])
    }
    parse(e, s, n) {
        switch (s) {
            case "m":
                return H(Y.minute, e);
            case "mo":
                return n.ordinalNumber(e, {
                    unit: "minute"
                });
            default:
                return W(s.length, e)
        }
    }
    validate(e, s) {
        return s >= 0 && s <= 59
    }
    set(e, s, n) {
        return e.setMinutes(n, 0, 0), e
    }
}
class Zr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 50);
        b(this, "incompatibleTokens", ["t", "T"])
    }
    parse(e, s, n) {
        switch (s) {
            case "s":
                return H(Y.second, e);
            case "so":
                return n.ordinalNumber(e, {
                    unit: "second"
                });
            default:
                return W(s.length, e)
        }
    }
    validate(e, s) {
        return s >= 0 && s <= 59
    }
    set(e, s, n) {
        return e.setSeconds(n, 0), e
    }
}
class Gr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 30);
        b(this, "incompatibleTokens", ["t", "T"])
    }
    parse(e, s) {
        const n = o => Math.trunc(o * Math.pow(10, -s.length + 3));
        return j(W(s.length, e), n)
    }
    set(e, s, n) {
        return e.setMilliseconds(n), e
    }
}
class Kr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 10);
        b(this, "incompatibleTokens", ["t", "T", "x"])
    }
    parse(e, s) {
        switch (s) {
            case "X":
                return dt(ut.basicOptionalMinutes, e);
            case "XX":
                return dt(ut.basic, e);
            case "XXXX":
                return dt(ut.basicOptionalSeconds, e);
            case "XXXXX":
                return dt(ut.extendedOptionalSeconds, e);
            case "XXX":
            default:
                return dt(ut.extended, e)
        }
    }
    set(e, s, n) {
        return s.timestampIsSet ? e : U(e, e.getTime() - Tn(e) - n)
    }
}
class Qr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 10);
        b(this, "incompatibleTokens", ["t", "T", "X"])
    }
    parse(e, s) {
        switch (s) {
            case "x":
                return dt(ut.basicOptionalMinutes, e);
            case "xx":
                return dt(ut.basic, e);
            case "xxxx":
                return dt(ut.basicOptionalSeconds, e);
            case "xxxxx":
                return dt(ut.extendedOptionalSeconds, e);
            case "xxx":
            default:
                return dt(ut.extended, e)
        }
    }
    set(e, s, n) {
        return s.timestampIsSet ? e : U(e, e.getTime() - Tn(e) - n)
    }
}
class Jr extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 40);
        b(this, "incompatibleTokens", "*")
    }
    parse(e) {
        return An(e)
    }
    set(e, s, n) {
        return [U(e, n * 1e3), {
            timestampIsSet: !0
        }]
    }
}
class ta extends I {
    constructor() {
        super(...arguments);
        b(this, "priority", 20);
        b(this, "incompatibleTokens", "*")
    }
    parse(e) {
        return An(e)
    }
    set(e, s, n) {
        return [U(e, n), {
            timestampIsSet: !0
        }]
    }
}
const ea = {
        G: new yr,
        y: new _r,
        Y: new wr,
        R: new vr,
        u: new kr,
        Q: new Mr,
        q: new Dr,
        M: new Pr,
        L: new Tr,
        w: new Sr,
        I: new Lr,
        d: new Fr,
        D: new Er,
        E: new Rr,
        e: new zr,
        c: new Hr,
        i: new Br,
        a: new Wr,
        b: new Vr,
        B: new Yr,
        h: new jr,
        H: new $r,
        K: new Xr,
        k: new Ur,
        m: new qr,
        s: new Zr,
        S: new Gr,
        X: new Kr,
        x: new Qr,
        t: new Jr,
        T: new ta
    },
    ia = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    sa = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    na = /^'([^]*?)'?$/,
    oa = /''/g,
    ra = /\S/,
    aa = /[a-zA-Z]/;

function la(i, t, e, s) {
    var p, m, x, v, k, M, w, D;
    const n = fr(),
        o = (s == null ? void 0 : s.locale) ? ? n.locale ? ? Eo,
        r = (s == null ? void 0 : s.firstWeekContainsDate) ? ? ((m = (p = s == null ? void 0 : s.locale) == null ? void 0 : p.options) == null ? void 0 : m.firstWeekContainsDate) ? ? n.firstWeekContainsDate ? ? ((v = (x = n.locale) == null ? void 0 : x.options) == null ? void 0 : v.firstWeekContainsDate) ? ? 1,
        a = (s == null ? void 0 : s.weekStartsOn) ? ? ((M = (k = s == null ? void 0 : s.locale) == null ? void 0 : k.options) == null ? void 0 : M.weekStartsOn) ? ? n.weekStartsOn ? ? ((D = (w = n.locale) == null ? void 0 : w.options) == null ? void 0 : D.weekStartsOn) ? ? 0;
    if (t === "") return i === "" ? S(e) : U(e, NaN);
    const l = {
            firstWeekContainsDate: r,
            weekStartsOn: a,
            locale: o
        },
        c = [new xr],
        h = t.match(sa).map(y => {
            const _ = y[0];
            if (_ in ts) {
                const P = ts[_];
                return P(y, o.formatLong)
            }
            return y
        }).join("").match(ia),
        u = [];
    for (let y of h) {
        !(s != null && s.useAdditionalWeekYearTokens) && Ro(y) && es(y, t, i), !(s != null && s.useAdditionalDayOfYearTokens) && zo(y) && es(y, t, i);
        const _ = y[0],
            P = ea[_];
        if (P) {
            const {
                incompatibleTokens: L
            } = P;
            if (Array.isArray(L)) {
                const A = u.find(q => L.includes(q.token) || q.token === _);
                if (A) throw new RangeError(`The format string mustn't contain \`${A.fullToken}\` and \`${y}\` at the same time`)
            } else if (P.incompatibleTokens === "*" && u.length > 0) throw new RangeError(`The format string mustn't contain \`${y}\` and any other token at the same time`);
            u.push({
                token: _,
                fullToken: y
            });
            const T = P.run(i, y, o.match, l);
            if (!T) return U(e, NaN);
            c.push(T.setter), i = T.rest
        } else {
            if (_.match(aa)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + _ + "`");
            if (y === "''" ? y = "'" : _ === "'" && (y = ca(y)), i.indexOf(y) === 0) i = i.slice(y.length);
            else return U(e, NaN)
        }
    }
    if (i.length > 0 && ra.test(i)) return U(e, NaN);
    const d = c.map(y => y.priority).sort((y, _) => _ - y).filter((y, _, P) => P.indexOf(y) === _).map(y => c.filter(_ => _.priority === y).sort((_, P) => P.subPriority - _.subPriority)).map(y => y[0]);
    let f = S(e);
    if (isNaN(f.getTime())) return U(e, NaN);
    const g = {};
    for (const y of d) {
        if (!y.validate(f, l)) return U(e, NaN);
        const _ = y.set(f, g, l);
        Array.isArray(_) ? (f = _[0], Object.assign(g, _[1])) : f = _
    }
    return U(e, f)
}

function ca(i) {
    return i.match(na)[1].replace(oa, "'")
}

function ha(i) {
    const t = S(i);
    return t.setMinutes(0, 0, 0), t
}

function ua(i) {
    const t = S(i);
    return t.setMilliseconds(0), t
}

function da(i, t) {
    const e = (t == null ? void 0 : t.additionalDigits) ? ? 2,
        s = ma(i);
    let n;
    if (s.date) {
        const l = ba(s.date, e);
        n = xa(l.restDateString, l.year)
    }
    if (!n || isNaN(n.getTime())) return new Date(NaN);
    const o = n.getTime();
    let r = 0,
        a;
    if (s.time && (r = ya(s.time), isNaN(r))) return new Date(NaN);
    if (s.timezone) {
        if (a = _a(s.timezone), isNaN(a)) return new Date(NaN)
    } else {
        const l = new Date(o + r),
            c = new Date(0);
        return c.setFullYear(l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()), c.setHours(l.getUTCHours(), l.getUTCMinutes(), l.getUTCSeconds(), l.getUTCMilliseconds()), c
    }
    return new Date(o + r + a)
}
const Te = {
        dateTimeDelimiter: /[T ]/,
        timeZoneDelimiter: /[Z ]/i,
        timezone: /([Z+-].*)$/
    },
    fa = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
    ga = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
    pa = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function ma(i) {
    const t = {},
        e = i.split(Te.dateTimeDelimiter);
    let s;
    if (e.length > 2) return t;
    if (/:/.test(e[0]) ? s = e[0] : (t.date = e[0], s = e[1], Te.timeZoneDelimiter.test(t.date) && (t.date = i.split(Te.timeZoneDelimiter)[0], s = i.substr(t.date.length, i.length))), s) {
        const n = Te.timezone.exec(s);
        n ? (t.time = s.replace(n[1], ""), t.timezone = n[1]) : t.time = s
    }
    return t
}

function ba(i, t) {
    const e = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"),
        s = i.match(e);
    if (!s) return {
        year: NaN,
        restDateString: ""
    };
    const n = s[1] ? parseInt(s[1]) : null,
        o = s[2] ? parseInt(s[2]) : null;
    return {
        year: o === null ? n : o * 100,
        restDateString: i.slice((s[1] || s[2]).length)
    }
}

function xa(i, t) {
    if (t === null) return new Date(NaN);
    const e = i.match(fa);
    if (!e) return new Date(NaN);
    const s = !!e[4],
        n = Qt(e[1]),
        o = Qt(e[2]) - 1,
        r = Qt(e[3]),
        a = Qt(e[4]),
        l = Qt(e[5]) - 1;
    if (s) return Da(t, a, l) ? wa(t, a, l) : new Date(NaN); {
        const c = new Date(0);
        return !ka(t, o, r) || !Ma(t, n) ? new Date(NaN) : (c.setUTCFullYear(t, o, Math.max(n, r)), c)
    }
}

function Qt(i) {
    return i ? parseInt(i) : 1
}

function ya(i) {
    const t = i.match(ga);
    if (!t) return NaN;
    const e = ui(t[1]),
        s = ui(t[2]),
        n = ui(t[3]);
    return Pa(e, s, n) ? e * ye + s * _e + n * 1e3 : NaN
}

function ui(i) {
    return i && parseFloat(i.replace(",", ".")) || 0
}

function _a(i) {
    if (i === "Z") return 0;
    const t = i.match(pa);
    if (!t) return 0;
    const e = t[1] === "+" ? -1 : 1,
        s = parseInt(t[2]),
        n = t[3] && parseInt(t[3]) || 0;
    return Ta(s, n) ? e * (s * ye + n * _e) : NaN
}

function wa(i, t, e) {
    const s = new Date(0);
    s.setUTCFullYear(i, 0, 4);
    const n = s.getUTCDay() || 7,
        o = (t - 1) * 7 + e + 1 - n;
    return s.setUTCDate(s.getUTCDate() + o), s
}
const va = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function En(i) {
    return i % 400 === 0 || i % 4 === 0 && i % 100 !== 0
}

function ka(i, t, e) {
    return t >= 0 && t <= 11 && e >= 1 && e <= (va[t] || (En(i) ? 29 : 28))
}

function Ma(i, t) {
    return t >= 1 && t <= (En(i) ? 366 : 365)
}

function Da(i, t, e) {
    return t >= 1 && t <= 53 && e >= 0 && e <= 6
}

function Pa(i, t, e) {
    return i === 24 ? t === 0 && e === 0 : e >= 0 && e < 60 && t >= 0 && t < 60 && i >= 0 && i < 25
}

function Ta(i, t) {
    return t >= 0 && t <= 59
}
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function ve(i) {
    return i + .5 | 0
}
const wt = (i, t, e) => Math.max(Math.min(i, e), t);

function ne(i) {
    return wt(ve(i * 2.55), 0, 255)
}

function Mt(i) {
    return wt(ve(i * 255), 0, 255)
}

function bt(i) {
    return wt(ve(i / 2.55) / 100, 0, 1)
}

function is(i) {
    return wt(ve(i * 100), 0, 100)
}
const ot = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15
    },
    Mi = [..."0123456789ABCDEF"],
    Oa = i => Mi[i & 15],
    Sa = i => Mi[(i & 240) >> 4] + Mi[i & 15],
    Oe = i => (i & 240) >> 4 === (i & 15),
    Ca = i => Oe(i.r) && Oe(i.g) && Oe(i.b) && Oe(i.a);

function La(i) {
    var t = i.length,
        e;
    return i[0] === "#" && (t === 4 || t === 5 ? e = {
        r: 255 & ot[i[1]] * 17,
        g: 255 & ot[i[2]] * 17,
        b: 255 & ot[i[3]] * 17,
        a: t === 5 ? ot[i[4]] * 17 : 255
    } : (t === 7 || t === 9) && (e = {
        r: ot[i[1]] << 4 | ot[i[2]],
        g: ot[i[3]] << 4 | ot[i[4]],
        b: ot[i[5]] << 4 | ot[i[6]],
        a: t === 9 ? ot[i[7]] << 4 | ot[i[8]] : 255
    })), e
}
const Aa = (i, t) => i < 255 ? t(i) : "";

function Ia(i) {
    var t = Ca(i) ? Oa : Sa;
    return i ? "#" + t(i.r) + t(i.g) + t(i.b) + Aa(i.a, t) : void 0
}
const Fa = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

function Rn(i, t, e) {
    const s = t * Math.min(e, 1 - e),
        n = (o, r = (o + i / 30) % 12) => e - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
    return [n(0), n(8), n(4)]
}

function Ea(i, t, e) {
    const s = (n, o = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
    return [s(5), s(3), s(1)]
}

function Ra(i, t, e) {
    const s = Rn(i, 1, .5);
    let n;
    for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++) s[n] *= 1 - t - e, s[n] += t;
    return s
}

function za(i, t, e, s, n) {
    return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4
}

function Hi(i) {
    const e = i.r / 255,
        s = i.g / 255,
        n = i.b / 255,
        o = Math.max(e, s, n),
        r = Math.min(e, s, n),
        a = (o + r) / 2;
    let l, c, h;
    return o !== r && (h = o - r, c = a > .5 ? h / (2 - o - r) : h / (o + r), l = za(e, s, n, h, o), l = l * 60 + .5), [l | 0, c || 0, a]
}

function Ni(i, t, e, s) {
    return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(Mt)
}

function Bi(i, t, e) {
    return Ni(Rn, i, t, e)
}

function Ha(i, t, e) {
    return Ni(Ra, i, t, e)
}

function Na(i, t, e) {
    return Ni(Ea, i, t, e)
}

function zn(i) {
    return (i % 360 + 360) % 360
}

function Ba(i) {
    const t = Fa.exec(i);
    let e = 255,
        s;
    if (!t) return;
    t[5] !== s && (e = t[6] ? ne(+t[5]) : Mt(+t[5]));
    const n = zn(+t[2]),
        o = +t[3] / 100,
        r = +t[4] / 100;
    return t[1] === "hwb" ? s = Ha(n, o, r) : t[1] === "hsv" ? s = Na(n, o, r) : s = Bi(n, o, r), {
        r: s[0],
        g: s[1],
        b: s[2],
        a: e
    }
}

function Wa(i, t) {
    var e = Hi(i);
    e[0] = zn(e[0] + t), e = Bi(e), i.r = e[0], i.g = e[1], i.b = e[2]
}

function Va(i) {
    if (!i) return;
    const t = Hi(i),
        e = t[0],
        s = is(t[1]),
        n = is(t[2]);
    return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${bt(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`
}
const ss = {
        x: "dark",
        Z: "light",
        Y: "re",
        X: "blu",
        W: "gr",
        V: "medium",
        U: "slate",
        A: "ee",
        T: "ol",
        S: "or",
        B: "ra",
        C: "lateg",
        D: "ights",
        R: "in",
        Q: "turquois",
        E: "hi",
        P: "ro",
        O: "al",
        N: "le",
        M: "de",
        L: "yello",
        F: "en",
        K: "ch",
        G: "arks",
        H: "ea",
        I: "ightg",
        J: "wh"
    },
    ns = {
        OiceXe: "f0f8ff",
        antiquewEte: "faebd7",
        aqua: "ffff",
        aquamarRe: "7fffd4",
        azuY: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "0",
        blanKedOmond: "ffebcd",
        Xe: "ff",
        XeviTet: "8a2be2",
        bPwn: "a52a2a",
        burlywood: "deb887",
        caMtXe: "5f9ea0",
        KartYuse: "7fff00",
        KocTate: "d2691e",
        cSO: "ff7f50",
        cSnflowerXe: "6495ed",
        cSnsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "ffff",
        xXe: "8b",
        xcyan: "8b8b",
        xgTMnPd: "b8860b",
        xWay: "a9a9a9",
        xgYF: "6400",
        xgYy: "a9a9a9",
        xkhaki: "bdb76b",
        xmagFta: "8b008b",
        xTivegYF: "556b2f",
        xSange: "ff8c00",
        xScEd: "9932cc",
        xYd: "8b0000",
        xsOmon: "e9967a",
        xsHgYF: "8fbc8f",
        xUXe: "483d8b",
        xUWay: "2f4f4f",
        xUgYy: "2f4f4f",
        xQe: "ced1",
        xviTet: "9400d3",
        dAppRk: "ff1493",
        dApskyXe: "bfff",
        dimWay: "696969",
        dimgYy: "696969",
        dodgerXe: "1e90ff",
        fiYbrick: "b22222",
        flSOwEte: "fffaf0",
        foYstWAn: "228b22",
        fuKsia: "ff00ff",
        gaRsbSo: "dcdcdc",
        ghostwEte: "f8f8ff",
        gTd: "ffd700",
        gTMnPd: "daa520",
        Way: "808080",
        gYF: "8000",
        gYFLw: "adff2f",
        gYy: "808080",
        honeyMw: "f0fff0",
        hotpRk: "ff69b4",
        RdianYd: "cd5c5c",
        Rdigo: "4b0082",
        ivSy: "fffff0",
        khaki: "f0e68c",
        lavFMr: "e6e6fa",
        lavFMrXsh: "fff0f5",
        lawngYF: "7cfc00",
        NmoncEffon: "fffacd",
        ZXe: "add8e6",
        ZcSO: "f08080",
        Zcyan: "e0ffff",
        ZgTMnPdLw: "fafad2",
        ZWay: "d3d3d3",
        ZgYF: "90ee90",
        ZgYy: "d3d3d3",
        ZpRk: "ffb6c1",
        ZsOmon: "ffa07a",
        ZsHgYF: "20b2aa",
        ZskyXe: "87cefa",
        ZUWay: "778899",
        ZUgYy: "778899",
        ZstAlXe: "b0c4de",
        ZLw: "ffffe0",
        lime: "ff00",
        limegYF: "32cd32",
        lRF: "faf0e6",
        magFta: "ff00ff",
        maPon: "800000",
        VaquamarRe: "66cdaa",
        VXe: "cd",
        VScEd: "ba55d3",
        VpurpN: "9370db",
        VsHgYF: "3cb371",
        VUXe: "7b68ee",
        VsprRggYF: "fa9a",
        VQe: "48d1cc",
        VviTetYd: "c71585",
        midnightXe: "191970",
        mRtcYam: "f5fffa",
        mistyPse: "ffe4e1",
        moccasR: "ffe4b5",
        navajowEte: "ffdead",
        navy: "80",
        Tdlace: "fdf5e6",
        Tive: "808000",
        TivedBb: "6b8e23",
        Sange: "ffa500",
        SangeYd: "ff4500",
        ScEd: "da70d6",
        pOegTMnPd: "eee8aa",
        pOegYF: "98fb98",
        pOeQe: "afeeee",
        pOeviTetYd: "db7093",
        papayawEp: "ffefd5",
        pHKpuff: "ffdab9",
        peru: "cd853f",
        pRk: "ffc0cb",
        plum: "dda0dd",
        powMrXe: "b0e0e6",
        purpN: "800080",
        YbeccapurpN: "663399",
        Yd: "ff0000",
        Psybrown: "bc8f8f",
        PyOXe: "4169e1",
        saddNbPwn: "8b4513",
        sOmon: "fa8072",
        sandybPwn: "f4a460",
        sHgYF: "2e8b57",
        sHshell: "fff5ee",
        siFna: "a0522d",
        silver: "c0c0c0",
        skyXe: "87ceeb",
        UXe: "6a5acd",
        UWay: "708090",
        UgYy: "708090",
        snow: "fffafa",
        sprRggYF: "ff7f",
        stAlXe: "4682b4",
        tan: "d2b48c",
        teO: "8080",
        tEstN: "d8bfd8",
        tomato: "ff6347",
        Qe: "40e0d0",
        viTet: "ee82ee",
        JHt: "f5deb3",
        wEte: "ffffff",
        wEtesmoke: "f5f5f5",
        Lw: "ffff00",
        LwgYF: "9acd32"
    };

function Ya() {
    const i = {},
        t = Object.keys(ns),
        e = Object.keys(ss);
    let s, n, o, r, a;
    for (s = 0; s < t.length; s++) {
        for (r = a = t[s], n = 0; n < e.length; n++) o = e[n], a = a.replace(o, ss[o]);
        o = parseInt(ns[r], 16), i[a] = [o >> 16 & 255, o >> 8 & 255, o & 255]
    }
    return i
}
let Se;

function ja(i) {
    Se || (Se = Ya(), Se.transparent = [0, 0, 0, 0]);
    const t = Se[i.toLowerCase()];
    return t && {
        r: t[0],
        g: t[1],
        b: t[2],
        a: t.length === 4 ? t[3] : 255
    }
}
const $a = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;

function Xa(i) {
    const t = $a.exec(i);
    let e = 255,
        s, n, o;
    if (t) {
        if (t[7] !== s) {
            const r = +t[7];
            e = t[8] ? ne(r) : wt(r * 255, 0, 255)
        }
        return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? ne(s) : wt(s, 0, 255)), n = 255 & (t[4] ? ne(n) : wt(n, 0, 255)), o = 255 & (t[6] ? ne(o) : wt(o, 0, 255)), {
            r: s,
            g: n,
            b: o,
            a: e
        }
    }
}

function Ua(i) {
    return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${bt(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`)
}
const di = i => i <= .0031308 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - .055,
    Yt = i => i <= .04045 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);

function qa(i, t, e) {
    const s = Yt(bt(i.r)),
        n = Yt(bt(i.g)),
        o = Yt(bt(i.b));
    return {
        r: Mt(di(s + e * (Yt(bt(t.r)) - s))),
        g: Mt(di(n + e * (Yt(bt(t.g)) - n))),
        b: Mt(di(o + e * (Yt(bt(t.b)) - o))),
        a: i.a + e * (t.a - i.a)
    }
}

function Ce(i, t, e) {
    if (i) {
        let s = Hi(i);
        s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = Bi(s), i.r = s[0], i.g = s[1], i.b = s[2]
    }
}

function Hn(i, t) {
    return i && Object.assign(t || {}, i)
}

function os(i) {
    var t = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
    };
    return Array.isArray(i) ? i.length >= 3 && (t = {
        r: i[0],
        g: i[1],
        b: i[2],
        a: 255
    }, i.length > 3 && (t.a = Mt(i[3]))) : (t = Hn(i, {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    }), t.a = Mt(t.a)), t
}

function Za(i) {
    return i.charAt(0) === "r" ? Xa(i) : Ba(i)
}
class ge {
    constructor(t) {
        if (t instanceof ge) return t;
        const e = typeof t;
        let s;
        e === "object" ? s = os(t) : e === "string" && (s = La(t) || ja(t) || Za(t)), this._rgb = s, this._valid = !!s
    }
    get valid() {
        return this._valid
    }
    get rgb() {
        var t = Hn(this._rgb);
        return t && (t.a = bt(t.a)), t
    }
    set rgb(t) {
        this._rgb = os(t)
    }
    rgbString() {
        return this._valid ? Ua(this._rgb) : void 0
    }
    hexString() {
        return this._valid ? Ia(this._rgb) : void 0
    }
    hslString() {
        return this._valid ? Va(this._rgb) : void 0
    }
    mix(t, e) {
        if (t) {
            const s = this.rgb,
                n = t.rgb;
            let o;
            const r = e === o ? .5 : e,
                a = 2 * r - 1,
                l = s.a - n.a,
                c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
            o = 1 - c, s.r = 255 & c * s.r + o * n.r + .5, s.g = 255 & c * s.g + o * n.g + .5, s.b = 255 & c * s.b + o * n.b + .5, s.a = r * s.a + (1 - r) * n.a, this.rgb = s
        }
        return this
    }
    interpolate(t, e) {
        return t && (this._rgb = qa(this._rgb, t._rgb, e)), this
    }
    clone() {
        return new ge(this.rgb)
    }
    alpha(t) {
        return this._rgb.a = Mt(t), this
    }
    clearer(t) {
        const e = this._rgb;
        return e.a *= 1 - t, this
    }
    greyscale() {
        const t = this._rgb,
            e = ve(t.r * .3 + t.g * .59 + t.b * .11);
        return t.r = t.g = t.b = e, this
    }
    opaquer(t) {
        const e = this._rgb;
        return e.a *= 1 + t, this
    }
    negate() {
        const t = this._rgb;
        return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
    }
    lighten(t) {
        return Ce(this._rgb, 2, t), this
    }
    darken(t) {
        return Ce(this._rgb, 2, -t), this
    }
    saturate(t) {
        return Ce(this._rgb, 1, t), this
    }
    desaturate(t) {
        return Ce(this._rgb, 1, -t), this
    }
    rotate(t) {
        return Wa(this._rgb, t), this
    }
}
/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
function ft() {}
const Ga = (() => {
    let i = 0;
    return () => i++
})();

function R(i) {
    return i === null || typeof i > "u"
}

function z(i) {
    if (Array.isArray && Array.isArray(i)) return !0;
    const t = Object.prototype.toString.call(i);
    return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]"
}

function C(i) {
    return i !== null && Object.prototype.toString.call(i) === "[object Object]"
}

function N(i) {
    return (typeof i == "number" || i instanceof Number) && isFinite(+i)
}

function tt(i, t) {
    return N(i) ? i : t
}

function O(i, t) {
    return typeof i > "u" ? t : i
}
const Ka = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;

function E(i, t, e) {
    if (i && typeof i.call == "function") return i.apply(e, t)
}

function F(i, t, e, s) {
    let n, o, r;
    if (z(i))
        if (o = i.length, s)
            for (n = o - 1; n >= 0; n--) t.call(e, i[n], n);
        else
            for (n = 0; n < o; n++) t.call(e, i[n], n);
    else if (C(i))
        for (r = Object.keys(i), o = r.length, n = 0; n < o; n++) t.call(e, i[r[n]], r[n])
}

function Xe(i, t) {
    let e, s, n, o;
    if (!i || !t || i.length !== t.length) return !1;
    for (e = 0, s = i.length; e < s; ++e)
        if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1;
    return !0
}

function Ue(i) {
    if (z(i)) return i.map(Ue);
    if (C(i)) {
        const t = Object.create(null),
            e = Object.keys(i),
            s = e.length;
        let n = 0;
        for (; n < s; ++n) t[e[n]] = Ue(i[e[n]]);
        return t
    }
    return i
}

function Nn(i) {
    return ["__proto__", "prototype", "constructor"].indexOf(i) === -1
}

function Qa(i, t, e, s) {
    if (!Nn(i)) return;
    const n = t[i],
        o = e[i];
    C(n) && C(o) ? pe(n, o, s) : t[i] = Ue(o)
}

function pe(i, t, e) {
    const s = z(t) ? t : [t],
        n = s.length;
    if (!C(i)) return i;
    e = e || {};
    const o = e.merger || Qa;
    let r;
    for (let a = 0; a < n; ++a) {
        if (r = s[a], !C(r)) continue;
        const l = Object.keys(r);
        for (let c = 0, h = l.length; c < h; ++c) o(l[c], i, r, e)
    }
    return i
}

function le(i, t) {
    return pe(i, t, {
        merger: Ja
    })
}

function Ja(i, t, e) {
    if (!Nn(i)) return;
    const s = t[i],
        n = e[i];
    C(s) && C(n) ? le(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Ue(n))
}
const rs = {
    "": i => i,
    x: i => i.x,
    y: i => i.y
};

function tl(i) {
    const t = i.split("."),
        e = [];
    let s = "";
    for (const n of t) s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
    return e
}

function el(i) {
    const t = tl(i);
    return e => {
        for (const s of t) {
            if (s === "") break;
            e = e && e[s]
        }
        return e
    }
}

function qe(i, t) {
    return (rs[t] || (rs[t] = el(t)))(i)
}

function Wi(i) {
    return i.charAt(0).toUpperCase() + i.slice(1)
}
const Ze = i => typeof i < "u",
    Dt = i => typeof i == "function",
    as = (i, t) => {
        if (i.size !== t.size) return !1;
        for (const e of i)
            if (!t.has(e)) return !1;
        return !0
    };

function il(i) {
    return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu"
}
const $ = Math.PI,
    st = 2 * $,
    sl = st + $,
    Ge = Number.POSITIVE_INFINITY,
    nl = $ / 180,
    it = $ / 2,
    St = $ / 4,
    ls = $ * 2 / 3,
    vt = Math.log10,
    Ut = Math.sign;

function ce(i, t, e) {
    return Math.abs(i - t) < e
}

function cs(i) {
    const t = Math.round(i);
    i = ce(i, t, i / 1e3) ? t : i;
    const e = Math.pow(10, Math.floor(vt(i))),
        s = i / e;
    return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e
}

function ol(i) {
    const t = [],
        e = Math.sqrt(i);
    let s;
    for (s = 1; s < e; s++) i % s === 0 && (t.push(s), t.push(i / s));
    return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t
}

function me(i) {
    return !isNaN(parseFloat(i)) && isFinite(i)
}

function rl(i, t) {
    const e = Math.round(i);
    return e - t <= i && e + t >= i
}

function Bn(i, t, e) {
    let s, n, o;
    for (s = 0, n = i.length; s < n; s++) o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o))
}

function kt(i) {
    return i * ($ / 180)
}

function Vi(i) {
    return i * (180 / $)
}

function hs(i) {
    if (!N(i)) return;
    let t = 1,
        e = 0;
    for (; Math.round(i * t) / t !== i;) t *= 10, e++;
    return e
}

function al(i, t) {
    const e = t.x - i.x,
        s = t.y - i.y,
        n = Math.sqrt(e * e + s * s);
    let o = Math.atan2(s, e);
    return o < -.5 * $ && (o += st), {
        angle: o,
        distance: n
    }
}

function Di(i, t) {
    return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2))
}

function ll(i, t) {
    return (i - t + sl) % st - $
}

function et(i) {
    return (i % st + st) % st
}

function Wn(i, t, e, s) {
    const n = et(i),
        o = et(t),
        r = et(e),
        a = et(o - n),
        l = et(r - n),
        c = et(n - o),
        h = et(n - r);
    return n === o || n === r || s && o === r || a > l && c < h
}

function rt(i, t, e) {
    return Math.max(t, Math.min(e, i))
}

function cl(i) {
    return rt(i, -32768, 32767)
}

function jt(i, t, e, s = 1e-6) {
    return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s
}

function Yi(i, t, e) {
    e = e || (r => i[r] < t);
    let s = i.length - 1,
        n = 0,
        o;
    for (; s - n > 1;) o = n + s >> 1, e(o) ? n = o : s = o;
    return {
        lo: n,
        hi: s
    }
}
const Et = (i, t, e, s) => Yi(i, e, s ? n => {
        const o = i[n][t];
        return o < e || o === e && i[n + 1][t] === e
    } : n => i[n][t] < e),
    hl = (i, t, e) => Yi(i, e, s => i[s][t] >= e);

function ul(i, t, e) {
    let s = 0,
        n = i.length;
    for (; s < n && i[s] < t;) s++;
    for (; n > s && i[n - 1] > e;) n--;
    return s > 0 || n < i.length ? i.slice(s, n) : i
}
const Vn = ["push", "pop", "shift", "splice", "unshift"];

function dl(i, t) {
    if (i._chartjs) {
        i._chartjs.listeners.push(t);
        return
    }
    Object.defineProperty(i, "_chartjs", {
        configurable: !0,
        enumerable: !1,
        value: {
            listeners: [t]
        }
    }), Vn.forEach(e => {
        const s = "_onData" + Wi(e),
            n = i[e];
        Object.defineProperty(i, e, {
            configurable: !0,
            enumerable: !1,
            value(...o) {
                const r = n.apply(this, o);
                return i._chartjs.listeners.forEach(a => {
                    typeof a[s] == "function" && a[s](...o)
                }), r
            }
        })
    })
}

function us(i, t) {
    const e = i._chartjs;
    if (!e) return;
    const s = e.listeners,
        n = s.indexOf(t);
    n !== -1 && s.splice(n, 1), !(s.length > 0) && (Vn.forEach(o => {
        delete i[o]
    }), delete i._chartjs)
}

function fl(i) {
    const t = new Set(i);
    return t.size === i.length ? i : Array.from(t)
}
const Yn = function() {
    return typeof window > "u" ? function(i) {
        return i()
    } : window.requestAnimationFrame
}();

function jn(i, t) {
    let e = [],
        s = !1;
    return function(...n) {
        e = n, s || (s = !0, Yn.call(window, () => {
            s = !1, i.apply(t, e)
        }))
    }
}

function gl(i, t) {
    let e;
    return function(...s) {
        return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t
    }
}
const ji = i => i === "start" ? "left" : i === "end" ? "right" : "center",
    G = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2,
    pl = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;

function ml(i, t, e) {
    const s = t.length;
    let n = 0,
        o = s;
    if (i._sorted) {
        const {
            iScale: r,
            _parsed: a
        } = i, l = r.axis, {
            min: c,
            max: h,
            minDefined: u,
            maxDefined: d
        } = r.getUserBounds();
        u && (n = rt(Math.min(Et(a, l, c).lo, e ? s : Et(t, l, r.getPixelForValue(c)).lo), 0, s - 1)), d ? o = rt(Math.max(Et(a, r.axis, h, !0).hi + 1, e ? 0 : Et(t, l, r.getPixelForValue(h), !0).hi + 1), n, s) - n : o = s - n
    }
    return {
        start: n,
        count: o
    }
}

function bl(i) {
    const {
        xScale: t,
        yScale: e,
        _scaleRanges: s
    } = i, n = {
        xmin: t.min,
        xmax: t.max,
        ymin: e.min,
        ymax: e.max
    };
    if (!s) return i._scaleRanges = n, !0;
    const o = s.xmin !== t.min || s.xmax !== t.max || s.ymin !== e.min || s.ymax !== e.max;
    return Object.assign(s, n), o
}
const Le = i => i === 0 || i === 1,
    ds = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * st / e)),
    fs = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * st / e) + 1,
    he = {
        linear: i => i,
        easeInQuad: i => i * i,
        easeOutQuad: i => -i * (i - 2),
        easeInOutQuad: i => (i /= .5) < 1 ? .5 * i * i : -.5 * (--i * (i - 2) - 1),
        easeInCubic: i => i * i * i,
        easeOutCubic: i => (i -= 1) * i * i + 1,
        easeInOutCubic: i => (i /= .5) < 1 ? .5 * i * i * i : .5 * ((i -= 2) * i * i + 2),
        easeInQuart: i => i * i * i * i,
        easeOutQuart: i => -((i -= 1) * i * i * i - 1),
        easeInOutQuart: i => (i /= .5) < 1 ? .5 * i * i * i * i : -.5 * ((i -= 2) * i * i * i - 2),
        easeInQuint: i => i * i * i * i * i,
        easeOutQuint: i => (i -= 1) * i * i * i * i + 1,
        easeInOutQuint: i => (i /= .5) < 1 ? .5 * i * i * i * i * i : .5 * ((i -= 2) * i * i * i * i + 2),
        easeInSine: i => -Math.cos(i * it) + 1,
        easeOutSine: i => Math.sin(i * it),
        easeInOutSine: i => -.5 * (Math.cos($ * i) - 1),
        easeInExpo: i => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
        easeOutExpo: i => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
        easeInOutExpo: i => Le(i) ? i : i < .5 ? .5 * Math.pow(2, 10 * (i * 2 - 1)) : .5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
        easeInCirc: i => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
        easeOutCirc: i => Math.sqrt(1 - (i -= 1) * i),
        easeInOutCirc: i => (i /= .5) < 1 ? -.5 * (Math.sqrt(1 - i * i) - 1) : .5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
        easeInElastic: i => Le(i) ? i : ds(i, .075, .3),
        easeOutElastic: i => Le(i) ? i : fs(i, .075, .3),
        easeInOutElastic(i) {
            return Le(i) ? i : i < .5 ? .5 * ds(i * 2, .1125, .45) : .5 + .5 * fs(i * 2 - 1, .1125, .45)
        },
        easeInBack(i) {
            return i * i * ((1.70158 + 1) * i - 1.70158)
        },
        easeOutBack(i) {
            return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1
        },
        easeInOutBack(i) {
            let t = 1.70158;
            return (i /= .5) < 1 ? .5 * (i * i * (((t *= 1.525) + 1) * i - t)) : .5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2)
        },
        easeInBounce: i => 1 - he.easeOutBounce(1 - i),
        easeOutBounce(i) {
            return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + .75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + .9375 : 7.5625 * (i -= 2.625 / 2.75) * i + .984375
        },
        easeInOutBounce: i => i < .5 ? he.easeInBounce(i * 2) * .5 : he.easeOutBounce(i * 2 - 1) * .5 + .5
    };

function $i(i) {
    if (i && typeof i == "object") {
        const t = i.toString();
        return t === "[object CanvasPattern]" || t === "[object CanvasGradient]"
    }
    return !1
}

function gs(i) {
    return $i(i) ? i : new ge(i)
}

function fi(i) {
    return $i(i) ? i : new ge(i).saturate(.5).darken(.1).hexString()
}
const xl = ["x", "y", "borderWidth", "radius", "tension"],
    yl = ["color", "borderColor", "backgroundColor"];

function _l(i) {
    i.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0
    }), i.describe("animation", {
        _fallback: !1,
        _indexable: !1,
        _scriptable: t => t !== "onProgress" && t !== "onComplete" && t !== "fn"
    }), i.set("animations", {
        colors: {
            type: "color",
            properties: yl
        },
        numbers: {
            type: "number",
            properties: xl
        }
    }), i.describe("animations", {
        _fallback: "animation"
    }), i.set("transitions", {
        active: {
            animation: {
                duration: 400
            }
        },
        resize: {
            animation: {
                duration: 0
            }
        },
        show: {
            animations: {
                colors: {
                    from: "transparent"
                },
                visible: {
                    type: "boolean",
                    duration: 0
                }
            }
        },
        hide: {
            animations: {
                colors: {
                    to: "transparent"
                },
                visible: {
                    type: "boolean",
                    easing: "linear",
                    fn: t => t | 0
                }
            }
        }
    })
}

function wl(i) {
    i.set("layout", {
        autoPadding: !0,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    })
}
const ps = new Map;

function vl(i, t) {
    t = t || {};
    const e = i + JSON.stringify(t);
    let s = ps.get(e);
    return s || (s = new Intl.NumberFormat(i, t), ps.set(e, s)), s
}

function Xi(i, t, e) {
    return vl(t, e).format(i)
}
const $n = {
    values(i) {
        return z(i) ? i : "" + i
    },
    numeric(i, t, e) {
        if (i === 0) return "0";
        const s = this.chart.options.locale;
        let n, o = i;
        if (e.length > 1) {
            const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
            (c < 1e-4 || c > 1e15) && (n = "scientific"), o = kl(i, e)
        }
        const r = vt(Math.abs(o)),
            a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0),
            l = {
                notation: n,
                minimumFractionDigits: a,
                maximumFractionDigits: a
            };
        return Object.assign(l, this.options.ticks.format), Xi(i, s, l)
    },
    logarithmic(i, t, e) {
        if (i === 0) return "0";
        const s = e[t].significand || i / Math.pow(10, Math.floor(vt(i)));
        return [1, 2, 3, 5, 10, 15].includes(s) || t > .8 * e.length ? $n.numeric.call(this, i, t, e) : ""
    }
};

function kl(i, t) {
    let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
    return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e
}
var ri = {
    formatters: $n
};

function Ml(i) {
    i.set("scale", {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: "ticks",
        clip: !0,
        grace: 0,
        grid: {
            display: !0,
            lineWidth: 1,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: (t, e) => e.lineWidth,
            tickColor: (t, e) => e.color,
            offset: !1
        },
        border: {
            display: !0,
            dash: [],
            dashOffset: 0,
            width: 1
        },
        title: {
            display: !1,
            text: "",
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: "",
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: ri.formatters.values,
            minor: {},
            major: {},
            align: "center",
            crossAlign: "near",
            showLabelBackdrop: !1,
            backdropColor: "rgba(255, 255, 255, 0.75)",
            backdropPadding: 2
        }
    }), i.route("scale.ticks", "color", "", "color"), i.route("scale.grid", "color", "", "borderColor"), i.route("scale.border", "color", "", "borderColor"), i.route("scale.title", "color", "", "color"), i.describe("scale", {
        _fallback: !1,
        _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
        _indexable: t => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
    }), i.describe("scales", {
        _fallback: "scale"
    }), i.describe("scale.ticks", {
        _scriptable: t => t !== "backdropPadding" && t !== "callback",
        _indexable: t => t !== "backdropPadding"
    })
}
const Ht = Object.create(null),
    Pi = Object.create(null);

function ue(i, t) {
    if (!t) return i;
    const e = t.split(".");
    for (let s = 0, n = e.length; s < n; ++s) {
        const o = e[s];
        i = i[o] || (i[o] = Object.create(null))
    }
    return i
}

function gi(i, t, e) {
    return typeof t == "string" ? pe(ue(i, t), e) : pe(ue(i, ""), t)
}
class Dl {
    constructor(t, e) {
        this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = s => s.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: "normal",
            lineHeight: 1.2,
            weight: null
        }, this.hover = {}, this.hoverBackgroundColor = (s, n) => fi(n.backgroundColor), this.hoverBorderColor = (s, n) => fi(n.borderColor), this.hoverColor = (s, n) => fi(n.color), this.indexAxis = "x", this.interaction = {
            mode: "nearest",
            intersect: !0,
            includeInvisible: !1
        }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e)
    }
    set(t, e) {
        return gi(this, t, e)
    }
    get(t) {
        return ue(this, t)
    }
    describe(t, e) {
        return gi(Pi, t, e)
    }
    override(t, e) {
        return gi(Ht, t, e)
    }
    route(t, e, s, n) {
        const o = ue(this, t),
            r = ue(this, s),
            a = "_" + e;
        Object.defineProperties(o, {
            [a]: {
                value: o[e],
                writable: !0
            },
            [e]: {
                enumerable: !0,
                get() {
                    const l = this[a],
                        c = r[n];
                    return C(l) ? Object.assign({}, c, l) : O(l, c)
                },
                set(l) {
                    this[a] = l
                }
            }
        })
    }
    apply(t) {
        t.forEach(e => e(this))
    }
}
var B = new Dl({
    _scriptable: i => !i.startsWith("on"),
    _indexable: i => i !== "events",
    hover: {
        _fallback: "interaction"
    },
    interaction: {
        _scriptable: !1,
        _indexable: !1
    }
}, [_l, wl, Ml]);

function Pl(i) {
    return !i || R(i.size) || R(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family
}

function Ke(i, t, e, s, n) {
    let o = t[n];
    return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s
}

function Tl(i, t, e, s) {
    s = s || {};
    let n = s.data = s.data || {},
        o = s.garbageCollect = s.garbageCollect || [];
    s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
    let r = 0;
    const a = e.length;
    let l, c, h, u, d;
    for (l = 0; l < a; l++)
        if (u = e[l], u != null && !z(u)) r = Ke(i, n, o, r, u);
        else if (z(u))
        for (c = 0, h = u.length; c < h; c++) d = u[c], d != null && !z(d) && (r = Ke(i, n, o, r, d));
    i.restore();
    const f = o.length / 2;
    if (f > e.length) {
        for (l = 0; l < f; l++) delete n[o[l]];
        o.splice(0, f)
    }
    return r
}

function Ct(i, t, e) {
    const s = i.currentDevicePixelRatio,
        n = e !== 0 ? Math.max(e / 2, .5) : 0;
    return Math.round((t - n) * s) / s + n
}

function ms(i, t) {
    t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore()
}

function Ti(i, t, e, s) {
    Xn(i, t, e, s, null)
}

function Xn(i, t, e, s, n) {
    let o, r, a, l, c, h, u, d;
    const f = t.pointStyle,
        g = t.rotation,
        p = t.radius;
    let m = (g || 0) * nl;
    if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
        i.save(), i.translate(e, s), i.rotate(m), i.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), i.restore();
        return
    }
    if (!(isNaN(p) || p <= 0)) {
        switch (i.beginPath(), f) {
            default: n ? i.ellipse(e, s, n / 2, p, 0, 0, st) : i.arc(e, s, p, 0, st),
            i.closePath();
            break;
            case "triangle":
                    h = n ? n / 2 : p,
                i.moveTo(e + Math.sin(m) * h, s - Math.cos(m) * p),
                m += ls,
                i.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * p),
                m += ls,
                i.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * p),
                i.closePath();
                break;
            case "rectRounded":
                    c = p * .516,
                l = p - c,
                r = Math.cos(m + St) * l,
                u = Math.cos(m + St) * (n ? n / 2 - c : l),
                a = Math.sin(m + St) * l,
                d = Math.sin(m + St) * (n ? n / 2 - c : l),
                i.arc(e - u, s - a, c, m - $, m - it),
                i.arc(e + d, s - r, c, m - it, m),
                i.arc(e + u, s + a, c, m, m + it),
                i.arc(e - d, s + r, c, m + it, m + $),
                i.closePath();
                break;
            case "rect":
                    if (!g) {
                    l = Math.SQRT1_2 * p, h = n ? n / 2 : l, i.rect(e - h, s - l, 2 * h, 2 * l);
                    break
                }m += St;
            case "rectRot":
                    u = Math.cos(m) * (n ? n / 2 : p),
                r = Math.cos(m) * p,
                a = Math.sin(m) * p,
                d = Math.sin(m) * (n ? n / 2 : p),
                i.moveTo(e - u, s - a),
                i.lineTo(e + d, s - r),
                i.lineTo(e + u, s + a),
                i.lineTo(e - d, s + r),
                i.closePath();
                break;
            case "crossRot":
                    m += St;
            case "cross":
                    u = Math.cos(m) * (n ? n / 2 : p),
                r = Math.cos(m) * p,
                a = Math.sin(m) * p,
                d = Math.sin(m) * (n ? n / 2 : p),
                i.moveTo(e - u, s - a),
                i.lineTo(e + u, s + a),
                i.moveTo(e + d, s - r),
                i.lineTo(e - d, s + r);
                break;
            case "star":
                    u = Math.cos(m) * (n ? n / 2 : p),
                r = Math.cos(m) * p,
                a = Math.sin(m) * p,
                d = Math.sin(m) * (n ? n / 2 : p),
                i.moveTo(e - u, s - a),
                i.lineTo(e + u, s + a),
                i.moveTo(e + d, s - r),
                i.lineTo(e - d, s + r),
                m += St,
                u = Math.cos(m) * (n ? n / 2 : p),
                r = Math.cos(m) * p,
                a = Math.sin(m) * p,
                d = Math.sin(m) * (n ? n / 2 : p),
                i.moveTo(e - u, s - a),
                i.lineTo(e + u, s + a),
                i.moveTo(e + d, s - r),
                i.lineTo(e - d, s + r);
                break;
            case "line":
                    r = n ? n / 2 : Math.cos(m) * p,
                a = Math.sin(m) * p,
                i.moveTo(e - r, s - a),
                i.lineTo(e + r, s + a);
                break;
            case "dash":
                    i.moveTo(e, s),
                i.lineTo(e + Math.cos(m) * (n ? n / 2 : p), s + Math.sin(m) * p);
                break;
            case !1:
                    i.closePath();
                break
        }
        i.fill(), t.borderWidth > 0 && i.stroke()
    }
}

function xt(i, t, e) {
    return e = e || .5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e
}

function ai(i, t) {
    i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip()
}

function li(i) {
    i.restore()
}

function Ol(i, t, e, s, n) {
    if (!t) return i.lineTo(e.x, e.y);
    if (n === "middle") {
        const o = (t.x + e.x) / 2;
        i.lineTo(o, t.y), i.lineTo(o, e.y)
    } else n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
    i.lineTo(e.x, e.y)
}

function Sl(i, t, e, s) {
    if (!t) return i.lineTo(e.x, e.y);
    i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y)
}

function Cl(i, t) {
    t.translation && i.translate(t.translation[0], t.translation[1]), R(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline)
}

function Ll(i, t, e, s, n) {
    if (n.strikethrough || n.underline) {
        const o = i.measureText(s),
            r = t - o.actualBoundingBoxLeft,
            a = t + o.actualBoundingBoxRight,
            l = e - o.actualBoundingBoxAscent,
            c = e + o.actualBoundingBoxDescent,
            h = n.strikethrough ? (l + c) / 2 : c;
        i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(r, h), i.lineTo(a, h), i.stroke()
    }
}

function Al(i, t) {
    const e = i.fillStyle;
    i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e
}

function Nt(i, t, e, s, n, o = {}) {
    const r = z(t) ? t : [t],
        a = o.strokeWidth > 0 && o.strokeColor !== "";
    let l, c;
    for (i.save(), i.font = n.string, Cl(i, o), l = 0; l < r.length; ++l) c = r[l], o.backdrop && Al(i, o.backdrop), a && (o.strokeColor && (i.strokeStyle = o.strokeColor), R(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), Ll(i, e, s, c, o), s += Number(n.lineHeight);
    i.restore()
}

function Qe(i, t) {
    const {
        x: e,
        y: s,
        w: n,
        h: o,
        radius: r
    } = t;
    i.arc(e + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * $, $, !0), i.lineTo(e, s + o - r.bottomLeft), i.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, $, it, !0), i.lineTo(e + n - r.bottomRight, s + o), i.arc(e + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, it, 0, !0), i.lineTo(e + n, s + r.topRight), i.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -it, !0), i.lineTo(e + r.topLeft, s)
}
const Il = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    Fl = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;

function El(i, t) {
    const e = ("" + i).match(Il);
    if (!e || e[1] === "normal") return t * 1.2;
    switch (i = +e[2], e[3]) {
        case "px":
            return i;
        case "%":
            i /= 100;
            break
    }
    return t * i
}
const Rl = i => +i || 0;

function Un(i, t) {
    const e = {},
        s = C(t),
        n = s ? Object.keys(t) : t,
        o = C(i) ? s ? r => O(i[r], i[t[r]]) : r => i[r] : () => i;
    for (const r of n) e[r] = Rl(o(r));
    return e
}

function zl(i) {
    return Un(i, {
        top: "y",
        right: "x",
        bottom: "y",
        left: "x"
    })
}

function $t(i) {
    return Un(i, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
}

function K(i) {
    const t = zl(i);
    return t.width = t.left + t.right, t.height = t.top + t.bottom, t
}

function X(i, t) {
    i = i || {}, t = t || B.font;
    let e = O(i.size, t.size);
    typeof e == "string" && (e = parseInt(e, 10));
    let s = O(i.style, t.style);
    s && !("" + s).match(Fl) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
    const n = {
        family: O(i.family, t.family),
        lineHeight: El(O(i.lineHeight, t.lineHeight), e),
        size: e,
        style: s,
        weight: O(i.weight, t.weight),
        string: ""
    };
    return n.string = Pl(n), n
}

function Ae(i, t, e, s) {
    let n = !0,
        o, r, a;
    for (o = 0, r = i.length; o < r; ++o)
        if (a = i[o], a !== void 0 && (t !== void 0 && typeof a == "function" && (a = a(t), n = !1), e !== void 0 && z(a) && (a = a[e % a.length], n = !1), a !== void 0)) return s && !n && (s.cacheable = !1), a
}

function Hl(i, t, e) {
    const {
        min: s,
        max: n
    } = i, o = Ka(t, (n - s) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
    return {
        min: r(s, -Math.abs(o)),
        max: r(n, o)
    }
}

function Pt(i, t) {
    return Object.assign(Object.create(i), t)
}

function Ui(i, t = [""], e, s, n = () => i[0]) {
    const o = e || i;
    typeof s > "u" && (s = Kn("_fallback", i));
    const r = {
        [Symbol.toStringTag]: "Object",
        _cacheable: !0,
        _scopes: i,
        _rootScopes: o,
        _fallback: s,
        _getTarget: n,
        override: a => Ui([a, ...i], t, o, s)
    };
    return new Proxy(r, {
        deleteProperty(a, l) {
            return delete a[l], delete a._keys, delete i[0][l], !0
        },
        get(a, l) {
            return Zn(a, l, () => Xl(l, t, i, a))
        },
        getOwnPropertyDescriptor(a, l) {
            return Reflect.getOwnPropertyDescriptor(a._scopes[0], l)
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(i[0])
        },
        has(a, l) {
            return xs(a).includes(l)
        },
        ownKeys(a) {
            return xs(a)
        },
        set(a, l, c) {
            const h = a._storage || (a._storage = n());
            return a[l] = h[l] = c, delete a._keys, !0
        }
    })
}

function qt(i, t, e, s) {
    const n = {
        _cacheable: !1,
        _proxy: i,
        _context: t,
        _subProxy: e,
        _stack: new Set,
        _descriptors: qn(i, s),
        setContext: o => qt(i, o, e, s),
        override: o => qt(i.override(o), t, e, s)
    };
    return new Proxy(n, {
        deleteProperty(o, r) {
            return delete o[r], delete i[r], !0
        },
        get(o, r, a) {
            return Zn(o, r, () => Bl(o, r, a))
        },
        getOwnPropertyDescriptor(o, r) {
            return o._descriptors.allKeys ? Reflect.has(i, r) ? {
                enumerable: !0,
                configurable: !0
            } : void 0 : Reflect.getOwnPropertyDescriptor(i, r)
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(i)
        },
        has(o, r) {
            return Reflect.has(i, r)
        },
        ownKeys() {
            return Reflect.ownKeys(i)
        },
        set(o, r, a) {
            return i[r] = a, delete o[r], !0
        }
    })
}

function qn(i, t = {
    scriptable: !0,
    indexable: !0
}) {
    const {
        _scriptable: e = t.scriptable,
        _indexable: s = t.indexable,
        _allKeys: n = t.allKeys
    } = i;
    return {
        allKeys: n,
        scriptable: e,
        indexable: s,
        isScriptable: Dt(e) ? e : () => e,
        isIndexable: Dt(s) ? s : () => s
    }
}
const Nl = (i, t) => i ? i + Wi(t) : t,
    qi = (i, t) => C(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);

function Zn(i, t, e) {
    if (Object.prototype.hasOwnProperty.call(i, t)) return i[t];
    const s = e();
    return i[t] = s, s
}

function Bl(i, t, e) {
    const {
        _proxy: s,
        _context: n,
        _subProxy: o,
        _descriptors: r
    } = i;
    let a = s[t];
    return Dt(a) && r.isScriptable(t) && (a = Wl(t, a, i, e)), z(a) && a.length && (a = Vl(t, a, i, r.isIndexable)), qi(t, a) && (a = qt(a, n, o && o[t], r)), a
}

function Wl(i, t, e, s) {
    const {
        _proxy: n,
        _context: o,
        _subProxy: r,
        _stack: a
    } = e;
    if (a.has(i)) throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
    a.add(i);
    let l = t(o, r || s);
    return a.delete(i), qi(i, l) && (l = Zi(n._scopes, n, i, l)), l
}

function Vl(i, t, e, s) {
    const {
        _proxy: n,
        _context: o,
        _subProxy: r,
        _descriptors: a
    } = e;
    if (typeof o.index < "u" && s(i)) return t[o.index % t.length];
    if (C(t[0])) {
        const l = t,
            c = n._scopes.filter(h => h !== l);
        t = [];
        for (const h of l) {
            const u = Zi(c, n, i, h);
            t.push(qt(u, o, r && r[i], a))
        }
    }
    return t
}

function Gn(i, t, e) {
    return Dt(i) ? i(t, e) : i
}
const Yl = (i, t) => i === !0 ? t : typeof i == "string" ? qe(t, i) : void 0;

function jl(i, t, e, s, n) {
    for (const o of t) {
        const r = Yl(e, o);
        if (r) {
            i.add(r);
            const a = Gn(r._fallback, e, n);
            if (typeof a < "u" && a !== e && a !== s) return a
        } else if (r === !1 && typeof s < "u" && e !== s) return null
    }
    return !1
}

function Zi(i, t, e, s) {
    const n = t._rootScopes,
        o = Gn(t._fallback, e, s),
        r = [...i, ...n],
        a = new Set;
    a.add(s);
    let l = bs(a, r, e, o || e, s);
    return l === null || typeof o < "u" && o !== e && (l = bs(a, r, o, l, s), l === null) ? !1 : Ui(Array.from(a), [""], n, o, () => $l(t, e, s))
}

function bs(i, t, e, s, n) {
    for (; e;) e = jl(i, t, e, s, n);
    return e
}

function $l(i, t, e) {
    const s = i._getTarget();
    t in s || (s[t] = {});
    const n = s[t];
    return z(n) && C(e) ? e : n || {}
}

function Xl(i, t, e, s) {
    let n;
    for (const o of t)
        if (n = Kn(Nl(o, i), e), typeof n < "u") return qi(i, n) ? Zi(e, s, i, n) : n
}

function Kn(i, t) {
    for (const e of t) {
        if (!e) continue;
        const s = e[i];
        if (typeof s < "u") return s
    }
}

function xs(i) {
    let t = i._keys;
    return t || (t = i._keys = Ul(i._scopes)), t
}

function Ul(i) {
    const t = new Set;
    for (const e of i)
        for (const s of Object.keys(e).filter(n => !n.startsWith("_"))) t.add(s);
    return Array.from(t)
}
const ql = Number.EPSILON || 1e-14,
    Zt = (i, t) => t < i.length && !i[t].skip && i[t],
    Qn = i => i === "x" ? "y" : "x";

function Zl(i, t, e, s) {
    const n = i.skip ? t : i,
        o = t,
        r = e.skip ? t : e,
        a = Di(o, n),
        l = Di(r, o);
    let c = a / (a + l),
        h = l / (a + l);
    c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
    const u = s * c,
        d = s * h;
    return {
        previous: {
            x: o.x - u * (r.x - n.x),
            y: o.y - u * (r.y - n.y)
        },
        next: {
            x: o.x + d * (r.x - n.x),
            y: o.y + d * (r.y - n.y)
        }
    }
}

function Gl(i, t, e) {
    const s = i.length;
    let n, o, r, a, l, c = Zt(i, 0);
    for (let h = 0; h < s - 1; ++h)
        if (l = c, c = Zt(i, h + 1), !(!l || !c)) {
            if (ce(t[h], 0, ql)) {
                e[h] = e[h + 1] = 0;
                continue
            }
            n = e[h] / t[h], o = e[h + 1] / t[h], a = Math.pow(n, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[h] = n * r * t[h], e[h + 1] = o * r * t[h])
        }
}

function Kl(i, t, e = "x") {
    const s = Qn(e),
        n = i.length;
    let o, r, a, l = Zt(i, 0);
    for (let c = 0; c < n; ++c) {
        if (r = a, a = l, l = Zt(i, c + 1), !a) continue;
        const h = a[e],
            u = a[s];
        r && (o = (h - r[e]) / 3, a[`cp1${e}`] = h - o, a[`cp1${s}`] = u - o * t[c]), l && (o = (l[e] - h) / 3, a[`cp2${e}`] = h + o, a[`cp2${s}`] = u + o * t[c])
    }
}

function Ql(i, t = "x") {
    const e = Qn(t),
        s = i.length,
        n = Array(s).fill(0),
        o = Array(s);
    let r, a, l, c = Zt(i, 0);
    for (r = 0; r < s; ++r)
        if (a = l, l = c, c = Zt(i, r + 1), !!l) {
            if (c) {
                const h = c[t] - l[t];
                n[r] = h !== 0 ? (c[e] - l[e]) / h : 0
            }
            o[r] = a ? c ? Ut(n[r - 1]) !== Ut(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r]
        }
    Gl(i, n, o), Kl(i, o, t)
}

function Ie(i, t, e) {
    return Math.max(Math.min(i, e), t)
}

function Jl(i, t) {
    let e, s, n, o, r, a = xt(i[0], t);
    for (e = 0, s = i.length; e < s; ++e) r = o, o = a, a = e < s - 1 && xt(i[e + 1], t), o && (n = i[e], r && (n.cp1x = Ie(n.cp1x, t.left, t.right), n.cp1y = Ie(n.cp1y, t.top, t.bottom)), a && (n.cp2x = Ie(n.cp2x, t.left, t.right), n.cp2y = Ie(n.cp2y, t.top, t.bottom)))
}

function tc(i, t, e, s, n) {
    let o, r, a, l;
    if (t.spanGaps && (i = i.filter(c => !c.skip)), t.cubicInterpolationMode === "monotone") Ql(i, n);
    else {
        let c = s ? i[i.length - 1] : i[0];
        for (o = 0, r = i.length; o < r; ++o) a = i[o], l = Zl(c, a, i[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a
    }
    t.capBezierPoints && Jl(i, e)
}

function Gi() {
    return typeof window < "u" && typeof document < "u"
}

function Ki(i) {
    let t = i.parentNode;
    return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t
}

function Je(i, t, e) {
    let s;
    return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s
}
const ci = i => i.ownerDocument.defaultView.getComputedStyle(i, null);

function ec(i, t) {
    return ci(i).getPropertyValue(t)
}
const ic = ["top", "right", "bottom", "left"];

function zt(i, t, e) {
    const s = {};
    e = e ? "-" + e : "";
    for (let n = 0; n < 4; n++) {
        const o = ic[n];
        s[o] = parseFloat(i[t + "-" + o + e]) || 0
    }
    return s.width = s.left + s.right, s.height = s.top + s.bottom, s
}
const sc = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);

function nc(i, t) {
    const e = i.touches,
        s = e && e.length ? e[0] : i,
        {
            offsetX: n,
            offsetY: o
        } = s;
    let r = !1,
        a, l;
    if (sc(n, o, i.target)) a = n, l = o;
    else {
        const c = t.getBoundingClientRect();
        a = s.clientX - c.left, l = s.clientY - c.top, r = !0
    }
    return {
        x: a,
        y: l,
        box: r
    }
}

function It(i, t) {
    if ("native" in i) return i;
    const {
        canvas: e,
        currentDevicePixelRatio: s
    } = t, n = ci(e), o = n.boxSizing === "border-box", r = zt(n, "padding"), a = zt(n, "border", "width"), {
        x: l,
        y: c,
        box: h
    } = nc(i, e), u = r.left + (h && a.left), d = r.top + (h && a.top);
    let {
        width: f,
        height: g
    } = t;
    return o && (f -= r.width + a.width, g -= r.height + a.height), {
        x: Math.round((l - u) / f * e.width / s),
        y: Math.round((c - d) / g * e.height / s)
    }
}

function oc(i, t, e) {
    let s, n;
    if (t === void 0 || e === void 0) {
        const o = Ki(i);
        if (!o) t = i.clientWidth, e = i.clientHeight;
        else {
            const r = o.getBoundingClientRect(),
                a = ci(o),
                l = zt(a, "border", "width"),
                c = zt(a, "padding");
            t = r.width - c.width - l.width, e = r.height - c.height - l.height, s = Je(a.maxWidth, o, "clientWidth"), n = Je(a.maxHeight, o, "clientHeight")
        }
    }
    return {
        width: t,
        height: e,
        maxWidth: s || Ge,
        maxHeight: n || Ge
    }
}
const Fe = i => Math.round(i * 10) / 10;

function rc(i, t, e, s) {
    const n = ci(i),
        o = zt(n, "margin"),
        r = Je(n.maxWidth, i, "clientWidth") || Ge,
        a = Je(n.maxHeight, i, "clientHeight") || Ge,
        l = oc(i, t, e);
    let {
        width: c,
        height: h
    } = l;
    if (n.boxSizing === "content-box") {
        const d = zt(n, "border", "width"),
            f = zt(n, "padding");
        c -= f.width + d.width, h -= f.height + d.height
    }
    return c = Math.max(0, c - o.width), h = Math.max(0, s ? c / s : h - o.height), c = Fe(Math.min(c, r, l.maxWidth)), h = Fe(Math.min(h, a, l.maxHeight)), c && !h && (h = Fe(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && h > l.height && (h = l.height, c = Fe(Math.floor(h * s))), {
        width: c,
        height: h
    }
}

function ys(i, t, e) {
    const s = t || 1,
        n = Math.floor(i.height * s),
        o = Math.floor(i.width * s);
    i.height = Math.floor(i.height), i.width = Math.floor(i.width);
    const r = i.canvas;
    return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${i.height}px`, r.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || r.height !== n || r.width !== o ? (i.currentDevicePixelRatio = s, r.height = n, r.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1
}
const ac = function() {
    let i = !1;
    try {
        const t = {
            get passive() {
                return i = !0, !1
            }
        };
        Gi() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t))
    } catch {}
    return i
}();

function _s(i, t) {
    const e = ec(i, t),
        s = e && e.match(/^(\d+)(\.\d+)?px$/);
    return s ? +s[1] : void 0
}

function Ft(i, t, e, s) {
    return {
        x: i.x + e * (t.x - i.x),
        y: i.y + e * (t.y - i.y)
    }
}

function lc(i, t, e, s) {
    return {
        x: i.x + e * (t.x - i.x),
        y: s === "middle" ? e < .5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
    }
}

function cc(i, t, e, s) {
    const n = {
            x: i.cp2x,
            y: i.cp2y
        },
        o = {
            x: t.cp1x,
            y: t.cp1y
        },
        r = Ft(i, n, e),
        a = Ft(n, o, e),
        l = Ft(o, t, e),
        c = Ft(r, a, e),
        h = Ft(a, l, e);
    return Ft(c, h, e)
}
const hc = function(i, t) {
        return {
            x(e) {
                return i + i + t - e
            },
            setWidth(e) {
                t = e
            },
            textAlign(e) {
                return e === "center" ? e : e === "right" ? "left" : "right"
            },
            xPlus(e, s) {
                return e - s
            },
            leftForLtr(e, s) {
                return e - s
            }
        }
    },
    uc = function() {
        return {
            x(i) {
                return i
            },
            setWidth(i) {},
            textAlign(i) {
                return i
            },
            xPlus(i, t) {
                return i + t
            },
            leftForLtr(i, t) {
                return i
            }
        }
    };

function Xt(i, t, e) {
    return i ? hc(t, e) : uc()
}

function Jn(i, t) {
    let e, s;
    (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [e.getPropertyValue("direction"), e.getPropertyPriority("direction")], e.setProperty("direction", t, "important"), i.prevTextDirection = s)
}

function to(i, t) {
    t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]))
}

function eo(i) {
    return i === "angle" ? {
        between: Wn,
        compare: ll,
        normalize: et
    } : {
        between: jt,
        compare: (t, e) => t - e,
        normalize: t => t
    }
}

function ws({
    start: i,
    end: t,
    count: e,
    loop: s,
    style: n
}) {
    return {
        start: i % e,
        end: t % e,
        loop: s && (t - i + 1) % e === 0,
        style: n
    }
}

function dc(i, t, e) {
    const {
        property: s,
        start: n,
        end: o
    } = e, {
        between: r,
        normalize: a
    } = eo(s), l = t.length;
    let {
        start: c,
        end: h,
        loop: u
    } = i, d, f;
    if (u) {
        for (c += l, h += l, d = 0, f = l; d < f && r(a(t[c % l][s]), n, o); ++d) c--, h--;
        c %= l, h %= l
    }
    return h < c && (h += l), {
        start: c,
        end: h,
        loop: u,
        style: i.style
    }
}

function io(i, t, e) {
    if (!e) return [i];
    const {
        property: s,
        start: n,
        end: o
    } = e, r = t.length, {
        compare: a,
        between: l,
        normalize: c
    } = eo(s), {
        start: h,
        end: u,
        loop: d,
        style: f
    } = dc(i, t, e), g = [];
    let p = !1,
        m = null,
        x, v, k;
    const M = () => l(n, k, x) && a(n, k) !== 0,
        w = () => a(o, x) === 0 || l(o, k, x),
        D = () => p || M(),
        y = () => !p || w();
    for (let _ = h, P = h; _ <= u; ++_) v = t[_ % r], !v.skip && (x = c(v[s]), x !== k && (p = l(x, n, o), m === null && D() && (m = a(x, n) === 0 ? _ : P), m !== null && y() && (g.push(ws({
        start: m,
        end: _,
        loop: d,
        count: r,
        style: f
    })), m = null), P = _, k = x));
    return m !== null && g.push(ws({
        start: m,
        end: u,
        loop: d,
        count: r,
        style: f
    })), g
}

function so(i, t) {
    const e = [],
        s = i.segments;
    for (let n = 0; n < s.length; n++) {
        const o = io(s[n], i.points, t);
        o.length && e.push(...o)
    }
    return e
}

function fc(i, t, e, s) {
    let n = 0,
        o = t - 1;
    if (e && !s)
        for (; n < t && !i[n].skip;) n++;
    for (; n < t && i[n].skip;) n++;
    for (n %= t, e && (o += n); o > n && i[o % t].skip;) o--;
    return o %= t, {
        start: n,
        end: o
    }
}

function gc(i, t, e, s) {
    const n = i.length,
        o = [];
    let r = t,
        a = i[t],
        l;
    for (l = t + 1; l <= e; ++l) {
        const c = i[l % n];
        c.skip || c.stop ? a.skip || (s = !1, o.push({
            start: t % n,
            end: (l - 1) % n,
            loop: s
        }), t = r = c.stop ? l : null) : (r = l, a.skip && (t = l)), a = c
    }
    return r !== null && o.push({
        start: t % n,
        end: r % n,
        loop: s
    }), o
}

function pc(i, t) {
    const e = i.points,
        s = i.options.spanGaps,
        n = e.length;
    if (!n) return [];
    const o = !!i._loop,
        {
            start: r,
            end: a
        } = fc(e, n, o, s);
    if (s === !0) return vs(i, [{
        start: r,
        end: a,
        loop: o
    }], e, t);
    const l = a < r ? a + n : a,
        c = !!i._fullLoop && r === 0 && a === n - 1;
    return vs(i, gc(e, r, l, c), e, t)
}

function vs(i, t, e, s) {
    return !s || !s.setContext || !e ? t : mc(i, t, e, s)
}

function mc(i, t, e, s) {
    const n = i._chart.getContext(),
        o = ks(i.options),
        {
            _datasetIndex: r,
            options: {
                spanGaps: a
            }
        } = i,
        l = e.length,
        c = [];
    let h = o,
        u = t[0].start,
        d = u;

    function f(g, p, m, x) {
        const v = a ? -1 : 1;
        if (g !== p) {
            for (g += l; e[g % l].skip;) g -= v;
            for (; e[p % l].skip;) p += v;
            g % l !== p % l && (c.push({
                start: g % l,
                end: p % l,
                loop: m,
                style: x
            }), h = x, u = p % l)
        }
    }
    for (const g of t) {
        u = a ? u : g.start;
        let p = e[u % l],
            m;
        for (d = u + 1; d <= g.end; d++) {
            const x = e[d % l];
            m = ks(s.setContext(Pt(n, {
                type: "segment",
                p0: p,
                p1: x,
                p0DataIndex: (d - 1) % l,
                p1DataIndex: d % l,
                datasetIndex: r
            }))), bc(m, h) && f(u, d - 1, g.loop, h), p = x, h = m
        }
        u < d - 1 && f(u, d - 1, g.loop, h)
    }
    return c
}

function ks(i) {
    return {
        backgroundColor: i.backgroundColor,
        borderCapStyle: i.borderCapStyle,
        borderDash: i.borderDash,
        borderDashOffset: i.borderDashOffset,
        borderJoinStyle: i.borderJoinStyle,
        borderWidth: i.borderWidth,
        borderColor: i.borderColor
    }
}

function bc(i, t) {
    if (!t) return !1;
    const e = [],
        s = function(n, o) {
            return $i(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o
        };
    return JSON.stringify(i, s) !== JSON.stringify(t, s)
}
/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
class xc {
    constructor() {
        this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0
    }
    _notify(t, e, s, n) {
        const o = e.listeners[n],
            r = e.duration;
        o.forEach(a => a({
            chart: t,
            initial: e.initial,
            numSteps: r,
            currentStep: Math.min(s - e.start, r)
        }))
    }
    _refresh() {
        this._request || (this._running = !0, this._request = Yn.call(window, () => {
            this._update(), this._request = null, this._running && this._refresh()
        }))
    }
    _update(t = Date.now()) {
        let e = 0;
        this._charts.forEach((s, n) => {
            if (!s.running || !s.items.length) return;
            const o = s.items;
            let r = o.length - 1,
                a = !1,
                l;
            for (; r >= 0; --r) l = o[r], l._active ? (l._total > s.duration && (s.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
            a && (n.draw(), this._notify(n, s, t, "progress")), o.length || (s.running = !1, this._notify(n, s, t, "complete"), s.initial = !1), e += o.length
        }), this._lastDate = t, e === 0 && (this._running = !1)
    }
    _getAnims(t) {
        const e = this._charts;
        let s = e.get(t);
        return s || (s = {
            running: !1,
            initial: !0,
            items: [],
            listeners: {
                complete: [],
                progress: []
            }
        }, e.set(t, s)), s
    }
    listen(t, e, s) {
        this._getAnims(t).listeners[e].push(s)
    }
    add(t, e) {
        !e || !e.length || this._getAnims(t).items.push(...e)
    }
    has(t) {
        return this._getAnims(t).items.length > 0
    }
    start(t) {
        const e = this._charts.get(t);
        e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((s, n) => Math.max(s, n._duration), 0), this._refresh())
    }
    running(t) {
        if (!this._running) return !1;
        const e = this._charts.get(t);
        return !(!e || !e.running || !e.items.length)
    }
    stop(t) {
        const e = this._charts.get(t);
        if (!e || !e.items.length) return;
        const s = e.items;
        let n = s.length - 1;
        for (; n >= 0; --n) s[n].cancel();
        e.items = [], this._notify(t, e, Date.now(), "complete")
    }
    remove(t) {
        return this._charts.delete(t)
    }
}
var pt = new xc;
const Ms = "transparent",
    yc = {
        boolean(i, t, e) {
            return e > .5 ? t : i
        },
        color(i, t, e) {
            const s = gs(i || Ms),
                n = s.valid && gs(t || Ms);
            return n && n.valid ? n.mix(s, e).hexString() : t
        },
        number(i, t, e) {
            return i + (t - i) * e
        }
    };
class _c {
    constructor(t, e, s, n) {
        const o = e[s];
        n = Ae([t.to, n, o, t.from]);
        const r = Ae([t.from, o, n]);
        this._active = !0, this._fn = t.fn || yc[t.type || typeof r], this._easing = he[t.easing] || he.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = r, this._to = n, this._promises = void 0
    }
    active() {
        return this._active
    }
    update(t, e, s) {
        if (this._active) {
            this._notify(!1);
            const n = this._target[this._prop],
                o = s - this._start,
                r = this._duration - o;
            this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = Ae([t.to, e, n, t.from]), this._from = Ae([t.from, n, e])
        }
    }
    cancel() {
        this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1))
    }
    tick(t) {
        const e = t - this._start,
            s = this._duration,
            n = this._prop,
            o = this._from,
            r = this._loop,
            a = this._to;
        let l;
        if (this._active = o !== a && (r || e < s), !this._active) {
            this._target[n] = a, this._notify(!0);
            return
        }
        if (e < 0) {
            this._target[n] = o;
            return
        }
        l = e / s % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[n] = this._fn(o, a, l)
    }
    wait() {
        const t = this._promises || (this._promises = []);
        return new Promise((e, s) => {
            t.push({
                res: e,
                rej: s
            })
        })
    }
    _notify(t) {
        const e = t ? "res" : "rej",
            s = this._promises || [];
        for (let n = 0; n < s.length; n++) s[n][e]()
    }
}
class no {
    constructor(t, e) {
        this._chart = t, this._properties = new Map, this.configure(e)
    }
    configure(t) {
        if (!C(t)) return;
        const e = Object.keys(B.animation),
            s = this._properties;
        Object.getOwnPropertyNames(t).forEach(n => {
            const o = t[n];
            if (!C(o)) return;
            const r = {};
            for (const a of e) r[a] = o[a];
            (z(o.properties) && o.properties || [n]).forEach(a => {
                (a === n || !s.has(a)) && s.set(a, r)
            })
        })
    }
    _animateOptions(t, e) {
        const s = e.options,
            n = vc(t, s);
        if (!n) return [];
        const o = this._createAnimations(n, s);
        return s.$shared && wc(t.options.$animations, s).then(() => {
            t.options = s
        }, () => {}), o
    }
    _createAnimations(t, e) {
        const s = this._properties,
            n = [],
            o = t.$animations || (t.$animations = {}),
            r = Object.keys(e),
            a = Date.now();
        let l;
        for (l = r.length - 1; l >= 0; --l) {
            const c = r[l];
            if (c.charAt(0) === "$") continue;
            if (c === "options") {
                n.push(...this._animateOptions(t, e));
                continue
            }
            const h = e[c];
            let u = o[c];
            const d = s.get(c);
            if (u)
                if (d && u.active()) {
                    u.update(d, h, a);
                    continue
                } else u.cancel();
            if (!d || !d.duration) {
                t[c] = h;
                continue
            }
            o[c] = u = new _c(d, t, c, h), n.push(u)
        }
        return n
    }
    update(t, e) {
        if (this._properties.size === 0) {
            Object.assign(t, e);
            return
        }
        const s = this._createAnimations(t, e);
        if (s.length) return pt.add(this._chart, s), !0
    }
}

function wc(i, t) {
    const e = [],
        s = Object.keys(t);
    for (let n = 0; n < s.length; n++) {
        const o = i[s[n]];
        o && o.active() && e.push(o.wait())
    }
    return Promise.all(e)
}

function vc(i, t) {
    if (!t) return;
    let e = i.options;
    if (!e) {
        i.options = t;
        return
    }
    return e.$shared && (i.options = e = Object.assign({}, e, {
        $shared: !1,
        $animations: {}
    })), e
}

function Ds(i, t) {
    const e = i && i.options || {},
        s = e.reverse,
        n = e.min === void 0 ? t : 0,
        o = e.max === void 0 ? t : 0;
    return {
        start: s ? o : n,
        end: s ? n : o
    }
}

function kc(i, t, e) {
    if (e === !1) return !1;
    const s = Ds(i, e),
        n = Ds(t, e);
    return {
        top: n.end,
        right: s.end,
        bottom: n.start,
        left: s.start
    }
}

function Mc(i) {
    let t, e, s, n;
    return C(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
        top: t,
        right: e,
        bottom: s,
        left: n,
        disabled: i === !1
    }
}

function oo(i, t) {
    const e = [],
        s = i._getSortedDatasetMetas(t);
    let n, o;
    for (n = 0, o = s.length; n < o; ++n) e.push(s[n].index);
    return e
}

function Ps(i, t, e, s = {}) {
    const n = i.keys,
        o = s.mode === "single";
    let r, a, l, c;
    if (t !== null) {
        for (r = 0, a = n.length; r < a; ++r) {
            if (l = +n[r], l === e) {
                if (s.all) continue;
                break
            }
            c = i.values[l], N(c) && (o || t === 0 || Ut(t) === Ut(c)) && (t += c)
        }
        return t
    }
}

function Dc(i) {
    const t = Object.keys(i),
        e = new Array(t.length);
    let s, n, o;
    for (s = 0, n = t.length; s < n; ++s) o = t[s], e[s] = {
        x: o,
        y: i[o]
    };
    return e
}

function Ts(i, t) {
    const e = i && i.options.stacked;
    return e || e === void 0 && t.stack !== void 0
}

function Pc(i, t, e) {
    return `${i.id}.${t.id}.${e.stack||e.type}`
}

function Tc(i) {
    const {
        min: t,
        max: e,
        minDefined: s,
        maxDefined: n
    } = i.getUserBounds();
    return {
        min: s ? t : Number.NEGATIVE_INFINITY,
        max: n ? e : Number.POSITIVE_INFINITY
    }
}

function Oc(i, t, e) {
    const s = i[t] || (i[t] = {});
    return s[e] || (s[e] = {})
}

function Os(i, t, e, s) {
    for (const n of t.getMatchingVisibleMetas(s).reverse()) {
        const o = i[n.index];
        if (e && o > 0 || !e && o < 0) return n.index
    }
    return null
}

function Ss(i, t) {
    const {
        chart: e,
        _cachedMeta: s
    } = i, n = e._stacks || (e._stacks = {}), {
        iScale: o,
        vScale: r,
        index: a
    } = s, l = o.axis, c = r.axis, h = Pc(o, r, s), u = t.length;
    let d;
    for (let f = 0; f < u; ++f) {
        const g = t[f],
            {
                [l]: p,
                [c]: m
            } = g,
            x = g._stacks || (g._stacks = {});
        d = x[c] = Oc(n, h, p), d[a] = m, d._top = Os(d, r, !0, s.type), d._bottom = Os(d, r, !1, s.type);
        const v = d._visualValues || (d._visualValues = {});
        v[a] = m
    }
}

function pi(i, t) {
    const e = i.scales;
    return Object.keys(e).filter(s => e[s].axis === t).shift()
}

function Sc(i, t) {
    return Pt(i, {
        active: !1,
        dataset: void 0,
        datasetIndex: t,
        index: t,
        mode: "default",
        type: "dataset"
    })
}

function Cc(i, t, e) {
    return Pt(i, {
        active: !1,
        dataIndex: t,
        parsed: void 0,
        raw: void 0,
        element: e,
        index: t,
        mode: "default",
        type: "data"
    })
}

function Jt(i, t) {
    const e = i.controller.index,
        s = i.vScale && i.vScale.axis;
    if (s) {
        t = t || i._parsed;
        for (const n of t) {
            const o = n._stacks;
            if (!o || o[s] === void 0 || o[s][e] === void 0) return;
            delete o[s][e], o[s]._visualValues !== void 0 && o[s]._visualValues[e] !== void 0 && delete o[s]._visualValues[e]
        }
    }
}
const mi = i => i === "reset" || i === "none",
    Cs = (i, t) => t ? i : Object.assign({}, i),
    Lc = (i, t, e) => i && !t.hidden && t._stacked && {
        keys: oo(e, !0),
        values: null
    };
class de {
    constructor(t, e) {
        this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize()
    }
    initialize() {
        const t = this._cachedMeta;
        this.configure(), this.linkScales(), t._stacked = Ts(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")
    }
    updateIndex(t) {
        this.index !== t && Jt(this._cachedMeta), this.index = t
    }
    linkScales() {
        const t = this.chart,
            e = this._cachedMeta,
            s = this.getDataset(),
            n = (u, d, f, g) => u === "x" ? d : u === "r" ? g : f,
            o = e.xAxisID = O(s.xAxisID, pi(t, "x")),
            r = e.yAxisID = O(s.yAxisID, pi(t, "y")),
            a = e.rAxisID = O(s.rAxisID, pi(t, "r")),
            l = e.indexAxis,
            c = e.iAxisID = n(l, o, r, a),
            h = e.vAxisID = n(l, r, o, a);
        e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(r), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h)
    }
    getDataset() {
        return this.chart.data.datasets[this.index]
    }
    getMeta() {
        return this.chart.getDatasetMeta(this.index)
    }
    getScaleForId(t) {
        return this.chart.scales[t]
    }
    _getOtherScale(t) {
        const e = this._cachedMeta;
        return t === e.iScale ? e.vScale : e.iScale
    }
    reset() {
        this._update("reset")
    }
    _destroy() {
        const t = this._cachedMeta;
        this._data && us(this._data, this), t._stacked && Jt(t)
    }
    _dataCheck() {
        const t = this.getDataset(),
            e = t.data || (t.data = []),
            s = this._data;
        if (C(e)) this._data = Dc(e);
        else if (s !== e) {
            if (s) {
                us(s, this);
                const n = this._cachedMeta;
                Jt(n), n._parsed = []
            }
            e && Object.isExtensible(e) && dl(e, this), this._syncList = [], this._data = e
        }
    }
    addElements() {
        const t = this._cachedMeta;
        this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType)
    }
    buildOrUpdateElements(t) {
        const e = this._cachedMeta,
            s = this.getDataset();
        let n = !1;
        this._dataCheck();
        const o = e._stacked;
        e._stacked = Ts(e.vScale, e), e.stack !== s.stack && (n = !0, Jt(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && Ss(this, e._parsed)
    }
    configure() {
        const t = this.chart.config,
            e = t.datasetScopeKeys(this._type),
            s = t.getOptionScopes(this.getDataset(), e, !0);
        this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {}
    }
    parse(t, e) {
        const {
            _cachedMeta: s,
            _data: n
        } = this, {
            iScale: o,
            _stacked: r
        } = s, a = o.axis;
        let l = t === 0 && e === n.length ? !0 : s._sorted,
            c = t > 0 && s._parsed[t - 1],
            h, u, d;
        if (this._parsing === !1) s._parsed = n, s._sorted = !0, d = n;
        else {
            z(n[t]) ? d = this.parseArrayData(s, n, t, e) : C(n[t]) ? d = this.parseObjectData(s, n, t, e) : d = this.parsePrimitiveData(s, n, t, e);
            const f = () => u[a] === null || c && u[a] < c[a];
            for (h = 0; h < e; ++h) s._parsed[h + t] = u = d[h], l && (f() && (l = !1), c = u);
            s._sorted = l
        }
        r && Ss(this, d)
    }
    parsePrimitiveData(t, e, s, n) {
        const {
            iScale: o,
            vScale: r
        } = t, a = o.axis, l = r.axis, c = o.getLabels(), h = o === r, u = new Array(n);
        let d, f, g;
        for (d = 0, f = n; d < f; ++d) g = d + s, u[d] = {
            [a]: h || o.parse(c[g], g),
            [l]: r.parse(e[g], g)
        };
        return u
    }
    parseArrayData(t, e, s, n) {
        const {
            xScale: o,
            yScale: r
        } = t, a = new Array(n);
        let l, c, h, u;
        for (l = 0, c = n; l < c; ++l) h = l + s, u = e[h], a[l] = {
            x: o.parse(u[0], h),
            y: r.parse(u[1], h)
        };
        return a
    }
    parseObjectData(t, e, s, n) {
        const {
            xScale: o,
            yScale: r
        } = t, {
            xAxisKey: a = "x",
            yAxisKey: l = "y"
        } = this._parsing, c = new Array(n);
        let h, u, d, f;
        for (h = 0, u = n; h < u; ++h) d = h + s, f = e[d], c[h] = {
            x: o.parse(qe(f, a), d),
            y: r.parse(qe(f, l), d)
        };
        return c
    }
    getParsed(t) {
        return this._cachedMeta._parsed[t]
    }
    getDataElement(t) {
        return this._cachedMeta.data[t]
    }
    applyStack(t, e, s) {
        const n = this.chart,
            o = this._cachedMeta,
            r = e[t.axis],
            a = {
                keys: oo(n, !0),
                values: e._stacks[t.axis]._visualValues
            };
        return Ps(a, r, o.index, {
            mode: s
        })
    }
    updateRangeFromParsed(t, e, s, n) {
        const o = s[e.axis];
        let r = o === null ? NaN : o;
        const a = n && s._stacks[e.axis];
        n && a && (n.values = a, r = Ps(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r)
    }
    getMinMax(t, e) {
        const s = this._cachedMeta,
            n = s._parsed,
            o = s._sorted && t === s.iScale,
            r = n.length,
            a = this._getOtherScale(t),
            l = Lc(e, s, this.chart),
            c = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY
            },
            {
                min: h,
                max: u
            } = Tc(a);
        let d, f;

        function g() {
            f = n[d];
            const p = f[a.axis];
            return !N(f[t.axis]) || h > p || u < p
        }
        for (d = 0; d < r && !(!g() && (this.updateRangeFromParsed(c, t, f, l), o)); ++d);
        if (o) {
            for (d = r - 1; d >= 0; --d)
                if (!g()) {
                    this.updateRangeFromParsed(c, t, f, l);
                    break
                }
        }
        return c
    }
    getAllParsedValues(t) {
        const e = this._cachedMeta._parsed,
            s = [];
        let n, o, r;
        for (n = 0, o = e.length; n < o; ++n) r = e[n][t.axis], N(r) && s.push(r);
        return s
    }
    getMaxOverflow() {
        return !1
    }
    getLabelAndValue(t) {
        const e = this._cachedMeta,
            s = e.iScale,
            n = e.vScale,
            o = this.getParsed(t);
        return {
            label: s ? "" + s.getLabelForValue(o[s.axis]) : "",
            value: n ? "" + n.getLabelForValue(o[n.axis]) : ""
        }
    }
    _update(t) {
        const e = this._cachedMeta;
        this.update(t || "default"), e._clip = Mc(O(this.options.clip, kc(e.xScale, e.yScale, this.getMaxOverflow())))
    }
    update(t) {}
    draw() {
        const t = this._ctx,
            e = this.chart,
            s = this._cachedMeta,
            n = s.data || [],
            o = e.chartArea,
            r = [],
            a = this._drawStart || 0,
            l = this._drawCount || n.length - a,
            c = this.options.drawActiveElementsOnTop;
        let h;
        for (s.dataset && s.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
            const u = n[h];
            u.hidden || (u.active && c ? r.push(u) : u.draw(t, o))
        }
        for (h = 0; h < r.length; ++h) r[h].draw(t, o)
    }
    getStyle(t, e) {
        const s = e ? "active" : "default";
        return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s)
    }
    getContext(t, e, s) {
        const n = this.getDataset();
        let o;
        if (t >= 0 && t < this._cachedMeta.data.length) {
            const r = this._cachedMeta.data[t];
            o = r.$context || (r.$context = Cc(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t
        } else o = this.$context || (this.$context = Sc(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
        return o.active = !!e, o.mode = s, o
    }
    resolveDatasetElementOptions(t) {
        return this._resolveElementOptions(this.datasetElementType.id, t)
    }
    resolveDataElementOptions(t, e) {
        return this._resolveElementOptions(this.dataElementType.id, e, t)
    }
    _resolveElementOptions(t, e = "default", s) {
        const n = e === "active",
            o = this._cachedDataOpts,
            r = t + "-" + e,
            a = o[r],
            l = this.enableOptionSharing && Ze(s);
        if (a) return Cs(a, l);
        const c = this.chart.config,
            h = c.datasetElementScopeKeys(this._type, t),
            u = n ? [`${t}Hover`, "hover", t, ""] : [t, ""],
            d = c.getOptionScopes(this.getDataset(), h),
            f = Object.keys(B.elements[t]),
            g = () => this.getContext(s, n, e),
            p = c.resolveNamedOptions(d, f, g, u);
        return p.$shared && (p.$shared = l, o[r] = Object.freeze(Cs(p, l))), p
    }
    _resolveAnimations(t, e, s) {
        const n = this.chart,
            o = this._cachedDataOpts,
            r = `animation-${e}`,
            a = o[r];
        if (a) return a;
        let l;
        if (n.options.animation !== !1) {
            const h = this.chart.config,
                u = h.datasetAnimationScopeKeys(this._type, e),
                d = h.getOptionScopes(this.getDataset(), u);
            l = h.createResolver(d, this.getContext(t, s, e))
        }
        const c = new no(n, l && l.animations);
        return l && l._cacheable && (o[r] = Object.freeze(c)), c
    }
    getSharedOptions(t) {
        if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
    }
    includeOptions(t, e) {
        return !e || mi(t) || this.chart._animationsDisabled
    }
    _getSharedOptions(t, e) {
        const s = this.resolveDataElementOptions(t, e),
            n = this._sharedOptions,
            o = this.getSharedOptions(s),
            r = this.includeOptions(e, o) || o !== n;
        return this.updateSharedOptions(o, e, s), {
            sharedOptions: o,
            includeOptions: r
        }
    }
    updateElement(t, e, s, n) {
        mi(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s)
    }
    updateSharedOptions(t, e, s) {
        t && !mi(e) && this._resolveAnimations(void 0, e).update(t, s)
    }
    _setStyle(t, e, s, n) {
        t.active = n;
        const o = this.getStyle(e, n);
        this._resolveAnimations(e, s, n).update(t, {
            options: !n && this.getSharedOptions(o) || o
        })
    }
    removeHoverStyle(t, e, s) {
        this._setStyle(t, s, "active", !1)
    }
    setHoverStyle(t, e, s) {
        this._setStyle(t, s, "active", !0)
    }
    _removeDatasetHoverStyle() {
        const t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !1)
    }
    _setDatasetHoverStyle() {
        const t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !0)
    }
    _resyncElements(t) {
        const e = this._data,
            s = this._cachedMeta.data;
        for (const [a, l, c] of this._syncList) this[a](l, c);
        this._syncList = [];
        const n = s.length,
            o = e.length,
            r = Math.min(o, n);
        r && this.parse(0, r), o > n ? this._insertElements(n, o - n, t) : o < n && this._removeElements(o, n - o)
    }
    _insertElements(t, e, s = !0) {
        const n = this._cachedMeta,
            o = n.data,
            r = t + e;
        let a;
        const l = c => {
            for (c.length += e, a = c.length - 1; a >= r; a--) c[a] = c[a - e]
        };
        for (l(o), a = t; a < r; ++a) o[a] = new this.dataElementType;
        this._parsing && l(n._parsed), this.parse(t, e), s && this.updateElements(o, t, e, "reset")
    }
    updateElements(t, e, s, n) {}
    _removeElements(t, e) {
        const s = this._cachedMeta;
        if (this._parsing) {
            const n = s._parsed.splice(t, e);
            s._stacked && Jt(s, n)
        }
        s.data.splice(t, e)
    }
    _sync(t) {
        if (this._parsing) this._syncList.push(t);
        else {
            const [e, s, n] = t;
            this[e](s, n)
        }
        this.chart._dataChanges.push([this.index, ...t])
    }
    _onDataPush() {
        const t = arguments.length;
        this._sync(["_insertElements", this.getDataset().data.length - t, t])
    }
    _onDataPop() {
        this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
    }
    _onDataShift() {
        this._sync(["_removeElements", 0, 1])
    }
    _onDataSplice(t, e) {
        e && this._sync(["_removeElements", t, e]);
        const s = arguments.length - 2;
        s && this._sync(["_insertElements", t, s])
    }
    _onDataUnshift() {
        this._sync(["_insertElements", 0, arguments.length])
    }
}
b(de, "defaults", {}), b(de, "datasetElementType", null), b(de, "dataElementType", null);
class bi extends de {
    initialize() {
        this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize()
    }
    update(t) {
        const e = this._cachedMeta,
            {
                dataset: s,
                data: n = [],
                _dataset: o
            } = e,
            r = this.chart._animationsDisabled;
        let {
            start: a,
            count: l
        } = ml(e, n, r);
        this._drawStart = a, this._drawCount = l, bl(e) && (a = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
        const c = this.resolveDatasetElementOptions(t);
        this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
            animated: !r,
            options: c
        }, t), this.updateElements(n, a, l, t)
    }
    updateElements(t, e, s, n) {
        const o = n === "reset",
            {
                iScale: r,
                vScale: a,
                _stacked: l,
                _dataset: c
            } = this._cachedMeta,
            {
                sharedOptions: h,
                includeOptions: u
            } = this._getSharedOptions(e, n),
            d = r.axis,
            f = a.axis,
            {
                spanGaps: g,
                segment: p
            } = this.options,
            m = me(g) ? g : Number.POSITIVE_INFINITY,
            x = this.chart._animationsDisabled || o || n === "none",
            v = e + s,
            k = t.length;
        let M = e > 0 && this.getParsed(e - 1);
        for (let w = 0; w < k; ++w) {
            const D = t[w],
                y = x ? D : {};
            if (w < e || w >= v) {
                y.skip = !0;
                continue
            }
            const _ = this.getParsed(w),
                P = R(_[f]),
                L = y[d] = r.getPixelForValue(_[d], w),
                T = y[f] = o || P ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, _, l) : _[f], w);
            y.skip = isNaN(L) || isNaN(T) || P, y.stop = w > 0 && Math.abs(_[d] - M[d]) > m, p && (y.parsed = _, y.raw = c.data[w]), u && (y.options = h || this.resolveDataElementOptions(w, D.active ? "active" : n)), x || this.updateElement(D, w, y, n), M = _
        }
    }
    getMaxOverflow() {
        const t = this._cachedMeta,
            e = t.dataset,
            s = e.options && e.options.borderWidth || 0,
            n = t.data || [];
        if (!n.length) return s;
        const o = n[0].size(this.resolveDataElementOptions(0)),
            r = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
        return Math.max(s, o, r) / 2
    }
    draw() {
        const t = this._cachedMeta;
        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
    }
}
b(bi, "id", "line"), b(bi, "defaults", {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1
}), b(bi, "overrides", {
    scales: {
        _index_: {
            type: "category"
        },
        _value_: {
            type: "linear"
        }
    }
});

function Lt() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
}
class Qi {
    constructor(t) {
        b(this, "options");
        this.options = t || {}
    }
    static override(t) {
        Object.assign(Qi.prototype, t)
    }
    init() {}
    formats() {
        return Lt()
    }
    parse() {
        return Lt()
    }
    format() {
        return Lt()
    }
    add() {
        return Lt()
    }
    diff() {
        return Lt()
    }
    startOf() {
        return Lt()
    }
    endOf() {
        return Lt()
    }
}
var ro = {
    _date: Qi
};

function Ac(i, t, e, s) {
    const {
        controller: n,
        data: o,
        _sorted: r
    } = i, a = n._cachedMeta.iScale;
    if (a && t === a.axis && t !== "r" && r && o.length) {
        const l = a._reversePixels ? hl : Et;
        if (s) {
            if (n._sharedOptions) {
                const c = o[0],
                    h = typeof c.getRange == "function" && c.getRange(t);
                if (h) {
                    const u = l(o, t, e - h),
                        d = l(o, t, e + h);
                    return {
                        lo: u.lo,
                        hi: d.hi
                    }
                }
            }
        } else return l(o, t, e)
    }
    return {
        lo: 0,
        hi: o.length - 1
    }
}

function ke(i, t, e, s, n) {
    const o = i.getSortedVisibleDatasetMetas(),
        r = e[t];
    for (let a = 0, l = o.length; a < l; ++a) {
        const {
            index: c,
            data: h
        } = o[a], {
            lo: u,
            hi: d
        } = Ac(o[a], t, r, n);
        for (let f = u; f <= d; ++f) {
            const g = h[f];
            g.skip || s(g, c, f)
        }
    }
}

function Ic(i) {
    const t = i.indexOf("x") !== -1,
        e = i.indexOf("y") !== -1;
    return function(s, n) {
        const o = t ? Math.abs(s.x - n.x) : 0,
            r = e ? Math.abs(s.y - n.y) : 0;
        return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2))
    }
}

function xi(i, t, e, s, n) {
    const o = [];
    return !n && !i.isPointInArea(t) || ke(i, e, t, function(a, l, c) {
        !n && !xt(a, i.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
            element: a,
            datasetIndex: l,
            index: c
        })
    }, !0), o
}

function Fc(i, t, e, s) {
    let n = [];

    function o(r, a, l) {
        const {
            startAngle: c,
            endAngle: h
        } = r.getProps(["startAngle", "endAngle"], s), {
            angle: u
        } = al(r, {
            x: t.x,
            y: t.y
        });
        Wn(u, c, h) && n.push({
            element: r,
            datasetIndex: a,
            index: l
        })
    }
    return ke(i, e, t, o), n
}

function Ec(i, t, e, s, n, o) {
    let r = [];
    const a = Ic(e);
    let l = Number.POSITIVE_INFINITY;

    function c(h, u, d) {
        const f = h.inRange(t.x, t.y, n);
        if (s && !f) return;
        const g = h.getCenterPoint(n);
        if (!(!!o || i.isPointInArea(g)) && !f) return;
        const m = a(t, g);
        m < l ? (r = [{
            element: h,
            datasetIndex: u,
            index: d
        }], l = m) : m === l && r.push({
            element: h,
            datasetIndex: u,
            index: d
        })
    }
    return ke(i, e, t, c), r
}

function yi(i, t, e, s, n, o) {
    return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? Fc(i, t, e, n) : Ec(i, t, e, s, n, o)
}

function Ls(i, t, e, s, n) {
    const o = [],
        r = e === "x" ? "inXRange" : "inYRange";
    let a = !1;
    return ke(i, e, t, (l, c, h) => {
        l[r](t[e], n) && (o.push({
            element: l,
            datasetIndex: c,
            index: h
        }), a = a || l.inRange(t.x, t.y, n))
    }), s && !a ? [] : o
}
var Rc = {
    evaluateInteractionItems: ke,
    modes: {
        index(i, t, e, s) {
            const n = It(t, i),
                o = e.axis || "x",
                r = e.includeInvisible || !1,
                a = e.intersect ? xi(i, n, o, s, r) : yi(i, n, o, !1, s, r),
                l = [];
            return a.length ? (i.getSortedVisibleDatasetMetas().forEach(c => {
                const h = a[0].index,
                    u = c.data[h];
                u && !u.skip && l.push({
                    element: u,
                    datasetIndex: c.index,
                    index: h
                })
            }), l) : []
        },
        dataset(i, t, e, s) {
            const n = It(t, i),
                o = e.axis || "xy",
                r = e.includeInvisible || !1;
            let a = e.intersect ? xi(i, n, o, s, r) : yi(i, n, o, !1, s, r);
            if (a.length > 0) {
                const l = a[0].datasetIndex,
                    c = i.getDatasetMeta(l).data;
                a = [];
                for (let h = 0; h < c.length; ++h) a.push({
                    element: c[h],
                    datasetIndex: l,
                    index: h
                })
            }
            return a
        },
        point(i, t, e, s) {
            const n = It(t, i),
                o = e.axis || "xy",
                r = e.includeInvisible || !1;
            return xi(i, n, o, s, r)
        },
        nearest(i, t, e, s) {
            const n = It(t, i),
                o = e.axis || "xy",
                r = e.includeInvisible || !1;
            return yi(i, n, o, e.intersect, s, r)
        },
        x(i, t, e, s) {
            const n = It(t, i);
            return Ls(i, n, "x", e.intersect, s)
        },
        y(i, t, e, s) {
            const n = It(t, i);
            return Ls(i, n, "y", e.intersect, s)
        }
    }
};
const ao = ["left", "top", "right", "bottom"];

function te(i, t) {
    return i.filter(e => e.pos === t)
}

function As(i, t) {
    return i.filter(e => ao.indexOf(e.pos) === -1 && e.box.axis === t)
}

function ee(i, t) {
    return i.sort((e, s) => {
        const n = t ? s : e,
            o = t ? e : s;
        return n.weight === o.weight ? n.index - o.index : n.weight - o.weight
    })
}

function zc(i) {
    const t = [];
    let e, s, n, o, r, a;
    for (e = 0, s = (i || []).length; e < s; ++e) n = i[e], {
        position: o,
        options: {
            stack: r,
            stackWeight: a = 1
        }
    } = n, t.push({
        index: e,
        box: n,
        pos: o,
        horizontal: n.isHorizontal(),
        weight: n.weight,
        stack: r && o + r,
        stackWeight: a
    });
    return t
}

function Hc(i) {
    const t = {};
    for (const e of i) {
        const {
            stack: s,
            pos: n,
            stackWeight: o
        } = e;
        if (!s || !ao.includes(n)) continue;
        const r = t[s] || (t[s] = {
            count: 0,
            placed: 0,
            weight: 0,
            size: 0
        });
        r.count++, r.weight += o
    }
    return t
}

function Nc(i, t) {
    const e = Hc(i),
        {
            vBoxMaxWidth: s,
            hBoxMaxHeight: n
        } = t;
    let o, r, a;
    for (o = 0, r = i.length; o < r; ++o) {
        a = i[o];
        const {
            fullSize: l
        } = a.box, c = e[a.stack], h = c && a.stackWeight / c.weight;
        a.horizontal ? (a.width = h ? h * s : l && t.availableWidth, a.height = n) : (a.width = s, a.height = h ? h * n : l && t.availableHeight)
    }
    return e
}

function Bc(i) {
    const t = zc(i),
        e = ee(t.filter(c => c.box.fullSize), !0),
        s = ee(te(t, "left"), !0),
        n = ee(te(t, "right")),
        o = ee(te(t, "top"), !0),
        r = ee(te(t, "bottom")),
        a = As(t, "x"),
        l = As(t, "y");
    return {
        fullSize: e,
        leftAndTop: s.concat(o),
        rightAndBottom: n.concat(l).concat(r).concat(a),
        chartArea: te(t, "chartArea"),
        vertical: s.concat(n).concat(l),
        horizontal: o.concat(r).concat(a)
    }
}

function Is(i, t, e, s) {
    return Math.max(i[e], t[e]) + Math.max(i[s], t[s])
}

function lo(i, t) {
    i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right)
}

function Wc(i, t, e, s) {
    const {
        pos: n,
        box: o
    } = e, r = i.maxPadding;
    if (!C(n)) {
        e.size && (i[n] -= e.size);
        const u = s[e.stack] || {
            size: 0,
            count: 1
        };
        u.size = Math.max(u.size, e.horizontal ? o.height : o.width), e.size = u.size / u.count, i[n] += e.size
    }
    o.getPadding && lo(r, o.getPadding());
    const a = Math.max(0, t.outerWidth - Is(r, i, "left", "right")),
        l = Math.max(0, t.outerHeight - Is(r, i, "top", "bottom")),
        c = a !== i.w,
        h = l !== i.h;
    return i.w = a, i.h = l, e.horizontal ? {
        same: c,
        other: h
    } : {
        same: h,
        other: c
    }
}

function Vc(i) {
    const t = i.maxPadding;

    function e(s) {
        const n = Math.max(t[s] - i[s], 0);
        return i[s] += n, n
    }
    i.y += e("top"), i.x += e("left"), e("right"), e("bottom")
}

function Yc(i, t) {
    const e = t.maxPadding;

    function s(n) {
        const o = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        return n.forEach(r => {
            o[r] = Math.max(t[r], e[r])
        }), o
    }
    return s(i ? ["left", "right"] : ["top", "bottom"])
}

function oe(i, t, e, s) {
    const n = [];
    let o, r, a, l, c, h;
    for (o = 0, r = i.length, c = 0; o < r; ++o) {
        a = i[o], l = a.box, l.update(a.width || t.w, a.height || t.h, Yc(a.horizontal, t));
        const {
            same: u,
            other: d
        } = Wc(t, e, a, s);
        c |= u && n.length, h = h || d, l.fullSize || n.push(a)
    }
    return c && oe(n, t, e, s) || h
}

function Ee(i, t, e, s, n) {
    i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n
}

function Fs(i, t, e, s) {
    const n = e.padding;
    let {
        x: o,
        y: r
    } = t;
    for (const a of i) {
        const l = a.box,
            c = s[a.stack] || {
                count: 1,
                placed: 0,
                weight: 1
            },
            h = a.stackWeight / c.weight || 1;
        if (a.horizontal) {
            const u = t.w * h,
                d = c.size || l.height;
            Ze(c.start) && (r = c.start), l.fullSize ? Ee(l, n.left, r, e.outerWidth - n.right - n.left, d) : Ee(l, t.left + c.placed, r, u, d), c.start = r, c.placed += u, r = l.bottom
        } else {
            const u = t.h * h,
                d = c.size || l.width;
            Ze(c.start) && (o = c.start), l.fullSize ? Ee(l, o, n.top, d, e.outerHeight - n.bottom - n.top) : Ee(l, o, t.top + c.placed, d, u), c.start = o, c.placed += u, o = l.right
        }
    }
    t.x = o, t.y = r
}
var at = {
    addBox(i, t) {
        i.boxes || (i.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
            return [{
                z: 0,
                draw(e) {
                    t.draw(e)
                }
            }]
        }, i.boxes.push(t)
    },
    removeBox(i, t) {
        const e = i.boxes ? i.boxes.indexOf(t) : -1;
        e !== -1 && i.boxes.splice(e, 1)
    },
    configure(i, t, e) {
        t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight
    },
    update(i, t, e, s) {
        if (!i) return;
        const n = K(i.options.layout.padding),
            o = Math.max(t - n.width, 0),
            r = Math.max(e - n.height, 0),
            a = Bc(i.boxes),
            l = a.vertical,
            c = a.horizontal;
        F(i.boxes, p => {
            typeof p.beforeLayout == "function" && p.beforeLayout()
        });
        const h = l.reduce((p, m) => m.box.options && m.box.options.display === !1 ? p : p + 1, 0) || 1,
            u = Object.freeze({
                outerWidth: t,
                outerHeight: e,
                padding: n,
                availableWidth: o,
                availableHeight: r,
                vBoxMaxWidth: o / 2 / h,
                hBoxMaxHeight: r / 2
            }),
            d = Object.assign({}, n);
        lo(d, K(s));
        const f = Object.assign({
                maxPadding: d,
                w: o,
                h: r,
                x: n.left,
                y: n.top
            }, n),
            g = Nc(l.concat(c), u);
        oe(a.fullSize, f, u, g), oe(l, f, u, g), oe(c, f, u, g) && oe(l, f, u, g), Vc(f), Fs(a.leftAndTop, f, u, g), f.x += f.w, f.y += f.h, Fs(a.rightAndBottom, f, u, g), i.chartArea = {
            left: f.left,
            top: f.top,
            right: f.left + f.w,
            bottom: f.top + f.h,
            height: f.h,
            width: f.w
        }, F(a.chartArea, p => {
            const m = p.box;
            Object.assign(m, i.chartArea), m.update(f.w, f.h, {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            })
        })
    }
};
class co {
    acquireContext(t, e) {}
    releaseContext(t) {
        return !1
    }
    addEventListener(t, e, s) {}
    removeEventListener(t, e, s) {}
    getDevicePixelRatio() {
        return 1
    }
    getMaximumSize(t, e, s, n) {
        return e = Math.max(0, e || t.width), s = s || t.height, {
            width: e,
            height: Math.max(0, n ? Math.floor(e / n) : s)
        }
    }
    isAttached(t) {
        return !0
    }
    updateConfig(t) {}
}
class jc extends co {
    acquireContext(t) {
        return t && t.getContext && t.getContext("2d") || null
    }
    updateConfig(t) {
        t.options.animation = !1
    }
}
const Ye = "$chartjs",
    $c = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
    },
    Es = i => i === null || i === "";

function Xc(i, t) {
    const e = i.style,
        s = i.getAttribute("height"),
        n = i.getAttribute("width");
    if (i[Ye] = {
            initial: {
                height: s,
                width: n,
                style: {
                    display: e.display,
                    height: e.height,
                    width: e.width
                }
            }
        }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Es(n)) {
        const o = _s(i, "width");
        o !== void 0 && (i.width = o)
    }
    if (Es(s))
        if (i.style.height === "") i.height = i.width / (t || 2);
        else {
            const o = _s(i, "height");
            o !== void 0 && (i.height = o)
        }
    return i
}
const ho = ac ? {
    passive: !0
} : !1;

function Uc(i, t, e) {
    i.addEventListener(t, e, ho)
}

function qc(i, t, e) {
    i.canvas.removeEventListener(t, e, ho)
}

function Zc(i, t) {
    const e = $c[i.type] || i.type,
        {
            x: s,
            y: n
        } = It(i, t);
    return {
        type: e,
        chart: t,
        native: i,
        x: s !== void 0 ? s : null,
        y: n !== void 0 ? n : null
    }
}

function ti(i, t) {
    for (const e of i)
        if (e === t || e.contains(t)) return !0
}

function Gc(i, t, e) {
    const s = i.canvas,
        n = new MutationObserver(o => {
            let r = !1;
            for (const a of o) r = r || ti(a.addedNodes, s), r = r && !ti(a.removedNodes, s);
            r && e()
        });
    return n.observe(document, {
        childList: !0,
        subtree: !0
    }), n
}

function Kc(i, t, e) {
    const s = i.canvas,
        n = new MutationObserver(o => {
            let r = !1;
            for (const a of o) r = r || ti(a.removedNodes, s), r = r && !ti(a.addedNodes, s);
            r && e()
        });
    return n.observe(document, {
        childList: !0,
        subtree: !0
    }), n
}
const be = new Map;
let Rs = 0;

function uo() {
    const i = window.devicePixelRatio;
    i !== Rs && (Rs = i, be.forEach((t, e) => {
        e.currentDevicePixelRatio !== i && t()
    }))
}

function Qc(i, t) {
    be.size || window.addEventListener("resize", uo), be.set(i, t)
}

function Jc(i) {
    be.delete(i), be.size || window.removeEventListener("resize", uo)
}

function th(i, t, e) {
    const s = i.canvas,
        n = s && Ki(s);
    if (!n) return;
    const o = jn((a, l) => {
            const c = n.clientWidth;
            e(a, l), c < n.clientWidth && e()
        }, window),
        r = new ResizeObserver(a => {
            const l = a[0],
                c = l.contentRect.width,
                h = l.contentRect.height;
            c === 0 && h === 0 || o(c, h)
        });
    return r.observe(n), Qc(i, o), r
}

function _i(i, t, e) {
    e && e.disconnect(), t === "resize" && Jc(i)
}

function eh(i, t, e) {
    const s = i.canvas,
        n = jn(o => {
            i.ctx !== null && e(Zc(o, i))
        }, i);
    return Uc(s, t, n), n
}
class ih extends co {
    acquireContext(t, e) {
        const s = t && t.getContext && t.getContext("2d");
        return s && s.canvas === t ? (Xc(t, e), s) : null
    }
    releaseContext(t) {
        const e = t.canvas;
        if (!e[Ye]) return !1;
        const s = e[Ye].initial;
        ["height", "width"].forEach(o => {
            const r = s[o];
            R(r) ? e.removeAttribute(o) : e.setAttribute(o, r)
        });
        const n = s.style || {};
        return Object.keys(n).forEach(o => {
            e.style[o] = n[o]
        }), e.width = e.width, delete e[Ye], !0
    }
    addEventListener(t, e, s) {
        this.removeEventListener(t, e);
        const n = t.$proxies || (t.$proxies = {}),
            r = {
                attach: Gc,
                detach: Kc,
                resize: th
            }[e] || eh;
        n[e] = r(t, e, s)
    }
    removeEventListener(t, e) {
        const s = t.$proxies || (t.$proxies = {}),
            n = s[e];
        if (!n) return;
        ({
            attach: _i,
            detach: _i,
            resize: _i
        }[e] || qc)(t, e, n), s[e] = void 0
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio
    }
    getMaximumSize(t, e, s, n) {
        return rc(t, e, s, n)
    }
    isAttached(t) {
        const e = Ki(t);
        return !!(e && e.isConnected)
    }
}

function sh(i) {
    return !Gi() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? jc : ih
}
class yt {
    constructor() {
        b(this, "x");
        b(this, "y");
        b(this, "active", !1);
        b(this, "options");
        b(this, "$animations")
    }
    tooltipPosition(t) {
        const {
            x: e,
            y: s
        } = this.getProps(["x", "y"], t);
        return {
            x: e,
            y: s
        }
    }
    hasValue() {
        return me(this.x) && me(this.y)
    }
    getProps(t, e) {
        const s = this.$animations;
        if (!e || !s) return this;
        const n = {};
        return t.forEach(o => {
            n[o] = s[o] && s[o].active() ? s[o]._to : this[o]
        }), n
    }
}
b(yt, "defaults", {}), b(yt, "defaultRoutes");

function nh(i, t) {
    const e = i.options.ticks,
        s = oh(i),
        n = Math.min(e.maxTicksLimit || s, s),
        o = e.major.enabled ? ah(t) : [],
        r = o.length,
        a = o[0],
        l = o[r - 1],
        c = [];
    if (r > n) return lh(t, c, o, r / n), c;
    const h = rh(o, t, n);
    if (r > 0) {
        let u, d;
        const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
        for (Re(t, c, h, R(f) ? 0 : a - f, a), u = 0, d = r - 1; u < d; u++) Re(t, c, h, o[u], o[u + 1]);
        return Re(t, c, h, l, R(f) ? t.length : l + f), c
    }
    return Re(t, c, h), c
}

function oh(i) {
    const t = i.options.offset,
        e = i._tickSize(),
        s = i._length / e + (t ? 0 : 1),
        n = i._maxLength / e;
    return Math.floor(Math.min(s, n))
}

function rh(i, t, e) {
    const s = ch(i),
        n = t.length / e;
    if (!s) return Math.max(n, 1);
    const o = ol(s);
    for (let r = 0, a = o.length - 1; r < a; r++) {
        const l = o[r];
        if (l > n) return l
    }
    return Math.max(n, 1)
}

function ah(i) {
    const t = [];
    let e, s;
    for (e = 0, s = i.length; e < s; e++) i[e].major && t.push(e);
    return t
}

function lh(i, t, e, s) {
    let n = 0,
        o = e[0],
        r;
    for (s = Math.ceil(s), r = 0; r < i.length; r++) r === o && (t.push(i[r]), n++, o = e[n * s])
}

function Re(i, t, e, s, n) {
    const o = O(s, 0),
        r = Math.min(O(n, i.length), i.length);
    let a = 0,
        l, c, h;
    for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0;) a++, h = Math.round(o + a * e);
    for (c = Math.max(o, 0); c < r; c++) c === h && (t.push(i[c]), a++, h = Math.round(o + a * e))
}

function ch(i) {
    const t = i.length;
    let e, s;
    if (t < 2) return !1;
    for (s = i[0], e = 1; e < t; ++e)
        if (i[e] - i[e - 1] !== s) return !1;
    return s
}
const hh = i => i === "left" ? "right" : i === "right" ? "left" : i,
    zs = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e,
    Hs = (i, t) => Math.min(t || i, i);

function Ns(i, t) {
    const e = [],
        s = i.length / t,
        n = i.length;
    let o = 0;
    for (; o < n; o += s) e.push(i[Math.floor(o)]);
    return e
}

function uh(i, t, e) {
    const s = i.ticks.length,
        n = Math.min(t, s - 1),
        o = i._startPixel,
        r = i._endPixel,
        a = 1e-6;
    let l = i.getPixelForTick(n),
        c;
    if (!(e && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - a || l > r + a))) return l
}

function dh(i, t) {
    F(i, e => {
        const s = e.gc,
            n = s.length / 2;
        let o;
        if (n > t) {
            for (o = 0; o < n; ++o) delete e.data[s[o]];
            s.splice(0, n)
        }
    })
}

function ie(i) {
    return i.drawTicks ? i.tickLength : 0
}

function Bs(i, t) {
    if (!i.display) return 0;
    const e = X(i.font, t),
        s = K(i.padding);
    return (z(i.text) ? i.text.length : 1) * e.lineHeight + s.height
}

function fh(i, t) {
    return Pt(i, {
        scale: t,
        type: "scale"
    })
}

function gh(i, t, e) {
    return Pt(i, {
        tick: e,
        index: t,
        type: "tick"
    })
}

function ph(i, t, e) {
    let s = ji(i);
    return (e && t !== "right" || !e && t === "right") && (s = hh(s)), s
}

function mh(i, t, e, s) {
    const {
        top: n,
        left: o,
        bottom: r,
        right: a,
        chart: l
    } = i, {
        chartArea: c,
        scales: h
    } = l;
    let u = 0,
        d, f, g;
    const p = r - n,
        m = a - o;
    if (i.isHorizontal()) {
        if (f = G(s, o, a), C(e)) {
            const x = Object.keys(e)[0],
                v = e[x];
            g = h[x].getPixelForValue(v) + p - t
        } else e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = zs(i, e, t);
        d = a - o
    } else {
        if (C(e)) {
            const x = Object.keys(e)[0],
                v = e[x];
            f = h[x].getPixelForValue(v) - m + t
        } else e === "center" ? f = (c.left + c.right) / 2 - m + t : f = zs(i, e, t);
        g = G(s, r, n), u = e === "left" ? -it : it
    }
    return {
        titleX: f,
        titleY: g,
        maxWidth: d,
        rotation: u
    }
}
class Bt extends yt {
    constructor(t) {
        super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0
    }
    init(t) {
        this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax)
    }
    parse(t, e) {
        return t
    }
    getUserBounds() {
        let {
            _userMin: t,
            _userMax: e,
            _suggestedMin: s,
            _suggestedMax: n
        } = this;
        return t = tt(t, Number.POSITIVE_INFINITY), e = tt(e, Number.NEGATIVE_INFINITY), s = tt(s, Number.POSITIVE_INFINITY), n = tt(n, Number.NEGATIVE_INFINITY), {
            min: tt(t, s),
            max: tt(e, n),
            minDefined: N(t),
            maxDefined: N(e)
        }
    }
    getMinMax(t) {
        let {
            min: e,
            max: s,
            minDefined: n,
            maxDefined: o
        } = this.getUserBounds(), r;
        if (n && o) return {
            min: e,
            max: s
        };
        const a = this.getMatchingVisibleMetas();
        for (let l = 0, c = a.length; l < c; ++l) r = a[l].controller.getMinMax(this, t), n || (e = Math.min(e, r.min)), o || (s = Math.max(s, r.max));
        return e = o && e > s ? s : e, s = n && e > s ? e : s, {
            min: tt(e, tt(s, e)),
            max: tt(s, tt(e, s))
        }
    }
    getPadding() {
        return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
        }
    }
    getTicks() {
        return this.ticks
    }
    getLabels() {
        const t = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
    }
    getLabelItems(t = this.chart.chartArea) {
        return this._labelItems || (this._labelItems = this._computeLabelItems(t))
    }
    beforeLayout() {
        this._cache = {}, this._dataLimitsCached = !1
    }
    beforeUpdate() {
        E(this.options.beforeUpdate, [this])
    }
    update(t, e, s) {
        const {
            beginAtZero: n,
            grace: o,
            ticks: r
        } = this.options, a = r.sampleSize;
        this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = s = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Hl(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
        const l = a < this.ticks.length;
        this._convertTicksToLabels(l ? Ns(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = nh(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate()
    }
    configure() {
        let t = this.options.reverse,
            e, s;
        this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels
    }
    afterUpdate() {
        E(this.options.afterUpdate, [this])
    }
    beforeSetDimensions() {
        E(this.options.beforeSetDimensions, [this])
    }
    setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0
    }
    afterSetDimensions() {
        E(this.options.afterSetDimensions, [this])
    }
    _callHooks(t) {
        this.chart.notifyPlugins(t, this.getContext()), E(this.options[t], [this])
    }
    beforeDataLimits() {
        this._callHooks("beforeDataLimits")
    }
    determineDataLimits() {}
    afterDataLimits() {
        this._callHooks("afterDataLimits")
    }
    beforeBuildTicks() {
        this._callHooks("beforeBuildTicks")
    }
    buildTicks() {
        return []
    }
    afterBuildTicks() {
        this._callHooks("afterBuildTicks")
    }
    beforeTickToLabelConversion() {
        E(this.options.beforeTickToLabelConversion, [this])
    }
    generateTickLabels(t) {
        const e = this.options.ticks;
        let s, n, o;
        for (s = 0, n = t.length; s < n; s++) o = t[s], o.label = E(e.callback, [o.value, s, t], this)
    }
    afterTickToLabelConversion() {
        E(this.options.afterTickToLabelConversion, [this])
    }
    beforeCalculateLabelRotation() {
        E(this.options.beforeCalculateLabelRotation, [this])
    }
    calculateLabelRotation() {
        const t = this.options,
            e = t.ticks,
            s = Hs(this.ticks.length, t.ticks.maxTicksLimit),
            n = e.minRotation || 0,
            o = e.maxRotation;
        let r = n,
            a, l, c;
        if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
            this.labelRotation = n;
            return
        }
        const h = this._getLabelSizes(),
            u = h.widest.width,
            d = h.highest.height,
            f = rt(this.chart.width - u, 0, this.maxWidth);
        a = t.offset ? this.maxWidth / s : f / (s - 1), u + 6 > a && (a = f / (s - (t.offset ? .5 : 1)), l = this.maxHeight - ie(t.grid) - e.padding - Bs(t.title, this.chart.options.font), c = Math.sqrt(u * u + d * d), r = Vi(Math.min(Math.asin(rt((h.highest.height + 6) / a, -1, 1)), Math.asin(rt(l / c, -1, 1)) - Math.asin(rt(d / c, -1, 1)))), r = Math.max(n, Math.min(o, r))), this.labelRotation = r
    }
    afterCalculateLabelRotation() {
        E(this.options.afterCalculateLabelRotation, [this])
    }
    afterAutoSkip() {}
    beforeFit() {
        E(this.options.beforeFit, [this])
    }
    fit() {
        const t = {
                width: 0,
                height: 0
            },
            {
                chart: e,
                options: {
                    ticks: s,
                    title: n,
                    grid: o
                }
            } = this,
            r = this._isVisible(),
            a = this.isHorizontal();
        if (r) {
            const l = Bs(n, e.options.font);
            if (a ? (t.width = this.maxWidth, t.height = ie(o) + l) : (t.height = this.maxHeight, t.width = ie(o) + l), s.display && this.ticks.length) {
                const {
                    first: c,
                    last: h,
                    widest: u,
                    highest: d
                } = this._getLabelSizes(), f = s.padding * 2, g = kt(this.labelRotation), p = Math.cos(g), m = Math.sin(g);
                if (a) {
                    const x = s.mirror ? 0 : m * u.width + p * d.height;
                    t.height = Math.min(this.maxHeight, t.height + x + f)
                } else {
                    const x = s.mirror ? 0 : p * u.width + m * d.height;
                    t.width = Math.min(this.maxWidth, t.width + x + f)
                }
                this._calculatePadding(c, h, m, p)
            }
        }
        this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom)
    }
    _calculatePadding(t, e, s, n) {
        const {
            ticks: {
                align: o,
                padding: r
            },
            position: a
        } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
        if (this.isHorizontal()) {
            const h = this.getPixelForTick(0) - this.left,
                u = this.right - this.getPixelForTick(this.ticks.length - 1);
            let d = 0,
                f = 0;
            l ? c ? (d = n * t.width, f = s * e.height) : (d = s * t.height, f = n * e.width) : o === "start" ? f = e.width : o === "end" ? d = t.width : o !== "inner" && (d = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((d - h + r) * this.width / (this.width - h), 0), this.paddingRight = Math.max((f - u + r) * this.width / (this.width - u), 0)
        } else {
            let h = e.height / 2,
                u = t.height / 2;
            o === "start" ? (h = 0, u = t.height) : o === "end" && (h = e.height, u = 0), this.paddingTop = h + r, this.paddingBottom = u + r
        }
    }
    _handleMargins() {
        this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom))
    }
    afterFit() {
        E(this.options.afterFit, [this])
    }
    isHorizontal() {
        const {
            axis: t,
            position: e
        } = this.options;
        return e === "top" || e === "bottom" || t === "x"
    }
    isFullSize() {
        return this.options.fullSize
    }
    _convertTicksToLabels(t) {
        this.beforeTickToLabelConversion(), this.generateTickLabels(t);
        let e, s;
        for (e = 0, s = t.length; e < s; e++) R(t[e].label) && (t.splice(e, 1), s--, e--);
        this.afterTickToLabelConversion()
    }
    _getLabelSizes() {
        let t = this._labelSizes;
        if (!t) {
            const e = this.options.ticks.sampleSize;
            let s = this.ticks;
            e < s.length && (s = Ns(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit)
        }
        return t
    }
    _computeLabelSizes(t, e, s) {
        const {
            ctx: n,
            _longestTextCache: o
        } = this, r = [], a = [], l = Math.floor(e / Hs(e, s));
        let c = 0,
            h = 0,
            u, d, f, g, p, m, x, v, k, M, w;
        for (u = 0; u < e; u += l) {
            if (g = t[u].label, p = this._resolveTickFontOptions(u), n.font = m = p.string, x = o[m] = o[m] || {
                    data: {},
                    gc: []
                }, v = p.lineHeight, k = M = 0, !R(g) && !z(g)) k = Ke(n, x.data, x.gc, k, g), M = v;
            else if (z(g))
                for (d = 0, f = g.length; d < f; ++d) w = g[d], !R(w) && !z(w) && (k = Ke(n, x.data, x.gc, k, w), M += v);
            r.push(k), a.push(M), c = Math.max(k, c), h = Math.max(M, h)
        }
        dh(o, e);
        const D = r.indexOf(c),
            y = a.indexOf(h),
            _ = P => ({
                width: r[P] || 0,
                height: a[P] || 0
            });
        return {
            first: _(0),
            last: _(e - 1),
            widest: _(D),
            highest: _(y),
            widths: r,
            heights: a
        }
    }
    getLabelForValue(t) {
        return t
    }
    getPixelForValue(t, e) {
        return NaN
    }
    getValueForPixel(t) {}
    getPixelForTick(t) {
        const e = this.ticks;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
    }
    getPixelForDecimal(t) {
        this._reversePixels && (t = 1 - t);
        const e = this._startPixel + t * this._length;
        return cl(this._alignToPixels ? Ct(this.chart, e, 0) : e)
    }
    getDecimalForPixel(t) {
        const e = (t - this._startPixel) / this._length;
        return this._reversePixels ? 1 - e : e
    }
    getBasePixel() {
        return this.getPixelForValue(this.getBaseValue())
    }
    getBaseValue() {
        const {
            min: t,
            max: e
        } = this;
        return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
    }
    getContext(t) {
        const e = this.ticks || [];
        if (t >= 0 && t < e.length) {
            const s = e[t];
            return s.$context || (s.$context = gh(this.getContext(), t, s))
        }
        return this.$context || (this.$context = fh(this.chart.getContext(), this))
    }
    _tickSize() {
        const t = this.options.ticks,
            e = kt(this.labelRotation),
            s = Math.abs(Math.cos(e)),
            n = Math.abs(Math.sin(e)),
            o = this._getLabelSizes(),
            r = t.autoSkipPadding || 0,
            a = o ? o.widest.width + r : 0,
            l = o ? o.highest.height + r : 0;
        return this.isHorizontal() ? l * s > a * n ? a / s : l / n : l * n < a * s ? l / s : a / n
    }
    _isVisible() {
        const t = this.options.display;
        return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0
    }
    _computeGridLineItems(t) {
        const e = this.axis,
            s = this.chart,
            n = this.options,
            {
                grid: o,
                position: r,
                border: a
            } = n,
            l = o.offset,
            c = this.isHorizontal(),
            u = this.ticks.length + (l ? 1 : 0),
            d = ie(o),
            f = [],
            g = a.setContext(this.getContext()),
            p = g.display ? g.width : 0,
            m = p / 2,
            x = function(Z) {
                return Ct(s, Z, p)
            };
        let v, k, M, w, D, y, _, P, L, T, A, q;
        if (r === "top") v = x(this.bottom), y = this.bottom - d, P = v - m, T = x(t.top) + m, q = t.bottom;
        else if (r === "bottom") v = x(this.top), T = t.top, q = x(t.bottom) - m, y = v + m, P = this.top + d;
        else if (r === "left") v = x(this.right), D = this.right - d, _ = v - m, L = x(t.left) + m, A = t.right;
        else if (r === "right") v = x(this.left), L = t.left, A = x(t.right) - m, D = v + m, _ = this.left + d;
        else if (e === "x") {
            if (r === "center") v = x((t.top + t.bottom) / 2 + .5);
            else if (C(r)) {
                const Z = Object.keys(r)[0],
                    nt = r[Z];
                v = x(this.chart.scales[Z].getPixelForValue(nt))
            }
            T = t.top, q = t.bottom, y = v + m, P = y + d
        } else if (e === "y") {
            if (r === "center") v = x((t.left + t.right) / 2);
            else if (C(r)) {
                const Z = Object.keys(r)[0],
                    nt = r[Z];
                v = x(this.chart.scales[Z].getPixelForValue(nt))
            }
            D = v - m, _ = D - d, L = t.left, A = t.right
        }
        const lt = O(n.ticks.maxTicksLimit, u),
            V = Math.max(1, Math.ceil(u / lt));
        for (k = 0; k < u; k += V) {
            const Z = this.getContext(k),
                nt = o.setContext(Z),
                Me = a.setContext(Z),
                De = nt.lineWidth,
                Wt = nt.color,
                Pe = Me.dash || [],
                Vt = Me.dashOffset,
                Gt = nt.tickWidth,
                Tt = nt.tickColor,
                Kt = nt.tickBorderDash || [],
                Ot = nt.tickBorderDashOffset;
            M = uh(this, k, l), M !== void 0 && (w = Ct(s, M, De), c ? D = _ = L = A = w : y = P = T = q = w, f.push({
                tx1: D,
                ty1: y,
                tx2: _,
                ty2: P,
                x1: L,
                y1: T,
                x2: A,
                y2: q,
                width: De,
                color: Wt,
                borderDash: Pe,
                borderDashOffset: Vt,
                tickWidth: Gt,
                tickColor: Tt,
                tickBorderDash: Kt,
                tickBorderDashOffset: Ot
            }))
        }
        return this._ticksLength = u, this._borderValue = v, f
    }
    _computeLabelItems(t) {
        const e = this.axis,
            s = this.options,
            {
                position: n,
                ticks: o
            } = s,
            r = this.isHorizontal(),
            a = this.ticks,
            {
                align: l,
                crossAlign: c,
                padding: h,
                mirror: u
            } = o,
            d = ie(s.grid),
            f = d + h,
            g = u ? -h : f,
            p = -kt(this.labelRotation),
            m = [];
        let x, v, k, M, w, D, y, _, P, L, T, A, q = "middle";
        if (n === "top") D = this.bottom - g, y = this._getXAxisLabelAlignment();
        else if (n === "bottom") D = this.top + g, y = this._getXAxisLabelAlignment();
        else if (n === "left") {
            const V = this._getYAxisLabelAlignment(d);
            y = V.textAlign, w = V.x
        } else if (n === "right") {
            const V = this._getYAxisLabelAlignment(d);
            y = V.textAlign, w = V.x
        } else if (e === "x") {
            if (n === "center") D = (t.top + t.bottom) / 2 + f;
            else if (C(n)) {
                const V = Object.keys(n)[0],
                    Z = n[V];
                D = this.chart.scales[V].getPixelForValue(Z) + f
            }
            y = this._getXAxisLabelAlignment()
        } else if (e === "y") {
            if (n === "center") w = (t.left + t.right) / 2 - f;
            else if (C(n)) {
                const V = Object.keys(n)[0],
                    Z = n[V];
                w = this.chart.scales[V].getPixelForValue(Z)
            }
            y = this._getYAxisLabelAlignment(d).textAlign
        }
        e === "y" && (l === "start" ? q = "top" : l === "end" && (q = "bottom"));
        const lt = this._getLabelSizes();
        for (x = 0, v = a.length; x < v; ++x) {
            k = a[x], M = k.label;
            const V = o.setContext(this.getContext(x));
            _ = this.getPixelForTick(x) + o.labelOffset, P = this._resolveTickFontOptions(x), L = P.lineHeight, T = z(M) ? M.length : 1;
            const Z = T / 2,
                nt = V.color,
                Me = V.textStrokeColor,
                De = V.textStrokeWidth;
            let Wt = y;
            r ? (w = _, y === "inner" && (x === v - 1 ? Wt = this.options.reverse ? "left" : "right" : x === 0 ? Wt = this.options.reverse ? "right" : "left" : Wt = "center"), n === "top" ? c === "near" || p !== 0 ? A = -T * L + L / 2 : c === "center" ? A = -lt.highest.height / 2 - Z * L + L : A = -lt.highest.height + L / 2 : c === "near" || p !== 0 ? A = L / 2 : c === "center" ? A = lt.highest.height / 2 - Z * L : A = lt.highest.height - T * L, u && (A *= -1), p !== 0 && !V.showLabelBackdrop && (w += L / 2 * Math.sin(p))) : (D = _, A = (1 - T) * L / 2);
            let Pe;
            if (V.showLabelBackdrop) {
                const Vt = K(V.backdropPadding),
                    Gt = lt.heights[x],
                    Tt = lt.widths[x];
                let Kt = A - Vt.top,
                    Ot = 0 - Vt.left;
                switch (q) {
                    case "middle":
                        Kt -= Gt / 2;
                        break;
                    case "bottom":
                        Kt -= Gt;
                        break
                }
                switch (y) {
                    case "center":
                        Ot -= Tt / 2;
                        break;
                    case "right":
                        Ot -= Tt;
                        break;
                    case "inner":
                        x === v - 1 ? Ot -= Tt : x > 0 && (Ot -= Tt / 2);
                        break
                }
                Pe = {
                    left: Ot,
                    top: Kt,
                    width: Tt + Vt.width,
                    height: Gt + Vt.height,
                    color: V.backdropColor
                }
            }
            m.push({
                label: M,
                font: P,
                textOffset: A,
                options: {
                    rotation: p,
                    color: nt,
                    strokeColor: Me,
                    strokeWidth: De,
                    textAlign: Wt,
                    textBaseline: q,
                    translation: [w, D],
                    backdrop: Pe
                }
            })
        }
        return m
    }
    _getXAxisLabelAlignment() {
        const {
            position: t,
            ticks: e
        } = this.options;
        if (-kt(this.labelRotation)) return t === "top" ? "left" : "right";
        let n = "center";
        return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n
    }
    _getYAxisLabelAlignment(t) {
        const {
            position: e,
            ticks: {
                crossAlign: s,
                mirror: n,
                padding: o
            }
        } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
        let c, h;
        return e === "left" ? n ? (h = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - a, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? n ? (h = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + a, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
            textAlign: c,
            x: h
        }
    }
    _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        const t = this.chart,
            e = this.options.position;
        if (e === "left" || e === "right") return {
            top: 0,
            left: this.left,
            bottom: t.height,
            right: this.right
        };
        if (e === "top" || e === "bottom") return {
            top: this.top,
            left: 0,
            bottom: this.bottom,
            right: t.width
        }
    }
    drawBackground() {
        const {
            ctx: t,
            options: {
                backgroundColor: e
            },
            left: s,
            top: n,
            width: o,
            height: r
        } = this;
        e && (t.save(), t.fillStyle = e, t.fillRect(s, n, o, r), t.restore())
    }
    getLineWidthForValue(t) {
        const e = this.options.grid;
        if (!this._isVisible() || !e.display) return 0;
        const n = this.ticks.findIndex(o => o.value === t);
        return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0
    }
    drawGrid(t) {
        const e = this.options.grid,
            s = this.ctx,
            n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
        let o, r;
        const a = (l, c, h) => {
            !h.width || !h.color || (s.save(), s.lineWidth = h.width, s.strokeStyle = h.color, s.setLineDash(h.borderDash || []), s.lineDashOffset = h.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore())
        };
        if (e.display)
            for (o = 0, r = n.length; o < r; ++o) {
                const l = n[o];
                e.drawOnChartArea && a({
                    x: l.x1,
                    y: l.y1
                }, {
                    x: l.x2,
                    y: l.y2
                }, l), e.drawTicks && a({
                    x: l.tx1,
                    y: l.ty1
                }, {
                    x: l.tx2,
                    y: l.ty2
                }, {
                    color: l.tickColor,
                    width: l.tickWidth,
                    borderDash: l.tickBorderDash,
                    borderDashOffset: l.tickBorderDashOffset
                })
            }
    }
    drawBorder() {
        const {
            chart: t,
            ctx: e,
            options: {
                border: s,
                grid: n
            }
        } = this, o = s.setContext(this.getContext()), r = s.display ? o.width : 0;
        if (!r) return;
        const a = n.setContext(this.getContext(0)).lineWidth,
            l = this._borderValue;
        let c, h, u, d;
        this.isHorizontal() ? (c = Ct(t, this.left, r) - r / 2, h = Ct(t, this.right, a) + a / 2, u = d = l) : (u = Ct(t, this.top, r) - r / 2, d = Ct(t, this.bottom, a) + a / 2, c = h = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, u), e.lineTo(h, d), e.stroke(), e.restore()
    }
    drawLabels(t) {
        if (!this.options.ticks.display) return;
        const s = this.ctx,
            n = this._computeLabelArea();
        n && ai(s, n);
        const o = this.getLabelItems(t);
        for (const r of o) {
            const a = r.options,
                l = r.font,
                c = r.label,
                h = r.textOffset;
            Nt(s, c, 0, h, l, a)
        }
        n && li(s)
    }
    drawTitle() {
        const {
            ctx: t,
            options: {
                position: e,
                title: s,
                reverse: n
            }
        } = this;
        if (!s.display) return;
        const o = X(s.font),
            r = K(s.padding),
            a = s.align;
        let l = o.lineHeight / 2;
        e === "bottom" || e === "center" || C(e) ? (l += r.bottom, z(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
        const {
            titleX: c,
            titleY: h,
            maxWidth: u,
            rotation: d
        } = mh(this, l, e, a);
        Nt(t, s.text, 0, 0, o, {
            color: s.color,
            maxWidth: u,
            rotation: d,
            textAlign: ph(a, e, n),
            textBaseline: "middle",
            translation: [c, h]
        })
    }
    draw(t) {
        this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t))
    }
    _layers() {
        const t = this.options,
            e = t.ticks && t.ticks.z || 0,
            s = O(t.grid && t.grid.z, -1),
            n = O(t.border && t.border.z, 0);
        return !this._isVisible() || this.draw !== Bt.prototype.draw ? [{
            z: e,
            draw: o => {
                this.draw(o)
            }
        }] : [{
            z: s,
            draw: o => {
                this.drawBackground(), this.drawGrid(o), this.drawTitle()
            }
        }, {
            z: n,
            draw: () => {
                this.drawBorder()
            }
        }, {
            z: e,
            draw: o => {
                this.drawLabels(o)
            }
        }]
    }
    getMatchingVisibleMetas(t) {
        const e = this.chart.getSortedVisibleDatasetMetas(),
            s = this.axis + "AxisID",
            n = [];
        let o, r;
        for (o = 0, r = e.length; o < r; ++o) {
            const a = e[o];
            a[s] === this.id && (!t || a.type === t) && n.push(a)
        }
        return n
    }
    _resolveTickFontOptions(t) {
        const e = this.options.ticks.setContext(this.getContext(t));
        return X(e.font)
    }
    _maxDigits() {
        const t = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / t
    }
}
class ze {
    constructor(t, e, s) {
        this.type = t, this.scope = e, this.override = s, this.items = Object.create(null)
    }
    isForType(t) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
    }
    register(t) {
        const e = Object.getPrototypeOf(t);
        let s;
        yh(e) && (s = this.register(e));
        const n = this.items,
            o = t.id,
            r = this.scope + "." + o;
        if (!o) throw new Error("class does not have id: " + t);
        return o in n || (n[o] = t, bh(t, r, s), this.override && B.override(t.id, t.overrides)), r
    }
    get(t) {
        return this.items[t]
    }
    unregister(t) {
        const e = this.items,
            s = t.id,
            n = this.scope;
        s in e && delete e[s], n && s in B[n] && (delete B[n][s], this.override && delete Ht[s])
    }
}

function bh(i, t, e) {
    const s = pe(Object.create(null), [e ? B.get(e) : {}, B.get(t), i.defaults]);
    B.set(t, s), i.defaultRoutes && xh(t, i.defaultRoutes), i.descriptors && B.describe(t, i.descriptors)
}

function xh(i, t) {
    Object.keys(t).forEach(e => {
        const s = e.split("."),
            n = s.pop(),
            o = [i].concat(s).join("."),
            r = t[e].split("."),
            a = r.pop(),
            l = r.join(".");
        B.route(o, n, l, a)
    })
}

function yh(i) {
    return "id" in i && "defaults" in i
}
class _h {
    constructor() {
        this.controllers = new ze(de, "datasets", !0), this.elements = new ze(yt, "elements"), this.plugins = new ze(Object, "plugins"), this.scales = new ze(Bt, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements]
    }
    add(...t) {
        this._each("register", t)
    }
    remove(...t) {
        this._each("unregister", t)
    }
    addControllers(...t) {
        this._each("register", t, this.controllers)
    }
    addElements(...t) {
        this._each("register", t, this.elements)
    }
    addPlugins(...t) {
        this._each("register", t, this.plugins)
    }
    addScales(...t) {
        this._each("register", t, this.scales)
    }
    getController(t) {
        return this._get(t, this.controllers, "controller")
    }
    getElement(t) {
        return this._get(t, this.elements, "element")
    }
    getPlugin(t) {
        return this._get(t, this.plugins, "plugin")
    }
    getScale(t) {
        return this._get(t, this.scales, "scale")
    }
    removeControllers(...t) {
        this._each("unregister", t, this.controllers)
    }
    removeElements(...t) {
        this._each("unregister", t, this.elements)
    }
    removePlugins(...t) {
        this._each("unregister", t, this.plugins)
    }
    removeScales(...t) {
        this._each("unregister", t, this.scales)
    }
    _each(t, e, s) {
        [...e].forEach(n => {
            const o = s || this._getRegistryForType(n);
            s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : F(n, r => {
                const a = s || this._getRegistryForType(r);
                this._exec(t, a, r)
            })
        })
    }
    _exec(t, e, s) {
        const n = Wi(t);
        E(s["before" + n], [], s), e[t](s), E(s["after" + n], [], s)
    }
    _getRegistryForType(t) {
        for (let e = 0; e < this._typedRegistries.length; e++) {
            const s = this._typedRegistries[e];
            if (s.isForType(t)) return s
        }
        return this.plugins
    }
    _get(t, e, s) {
        const n = e.get(t);
        if (n === void 0) throw new Error('"' + t + '" is not a registered ' + s + ".");
        return n
    }
}
var ht = new _h;
class wh {
    constructor() {
        this._init = []
    }
    notify(t, e, s, n) {
        e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
        const o = n ? this._descriptors(t).filter(n) : this._descriptors(t),
            r = this._notify(o, t, e, s);
        return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), r
    }
    _notify(t, e, s, n) {
        n = n || {};
        for (const o of t) {
            const r = o.plugin,
                a = r[s],
                l = [e, n, o.options];
            if (E(a, l, r) === !1 && n.cancelable) return !1
        }
        return !0
    }
    invalidate() {
        R(this._cache) || (this._oldCache = this._cache, this._cache = void 0)
    }
    _descriptors(t) {
        if (this._cache) return this._cache;
        const e = this._cache = this._createDescriptors(t);
        return this._notifyStateChanges(t), e
    }
    _createDescriptors(t, e) {
        const s = t && t.config,
            n = O(s.options && s.options.plugins, {}),
            o = vh(s);
        return n === !1 && !e ? [] : Mh(t, o, n, e)
    }
    _notifyStateChanges(t) {
        const e = this._oldCache || [],
            s = this._cache,
            n = (o, r) => o.filter(a => !r.some(l => a.plugin.id === l.plugin.id));
        this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start")
    }
}

function vh(i) {
    const t = {},
        e = [],
        s = Object.keys(ht.plugins.items);
    for (let o = 0; o < s.length; o++) e.push(ht.getPlugin(s[o]));
    const n = i.plugins || [];
    for (let o = 0; o < n.length; o++) {
        const r = n[o];
        e.indexOf(r) === -1 && (e.push(r), t[r.id] = !0)
    }
    return {
        plugins: e,
        localIds: t
    }
}

function kh(i, t) {
    return !t && i === !1 ? null : i === !0 ? {} : i
}

function Mh(i, {
    plugins: t,
    localIds: e
}, s, n) {
    const o = [],
        r = i.getContext();
    for (const a of t) {
        const l = a.id,
            c = kh(s[l], n);
        c !== null && o.push({
            plugin: a,
            options: Dh(i.config, {
                plugin: a,
                local: e[l]
            }, c, r)
        })
    }
    return o
}

function Dh(i, {
    plugin: t,
    local: e
}, s, n) {
    const o = i.pluginScopeKeys(t),
        r = i.getOptionScopes(s, o);
    return e && t.defaults && r.push(t.defaults), i.createResolver(r, n, [""], {
        scriptable: !1,
        indexable: !1,
        allKeys: !0
    })
}

function Oi(i, t) {
    const e = B.datasets[i] || {};
    return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x"
}

function Ph(i, t) {
    let e = i;
    return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e
}

function Th(i, t) {
    return i === t ? "_index_" : "_value_"
}

function Ws(i) {
    if (i === "x" || i === "y" || i === "r") return i
}

function Oh(i) {
    if (i === "top" || i === "bottom") return "x";
    if (i === "left" || i === "right") return "y"
}

function Si(i, ...t) {
    if (Ws(i)) return i;
    for (const e of t) {
        const s = e.axis || Oh(e.position) || i.length > 1 && Ws(i[0].toLowerCase());
        if (s) return s
    }
    throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)
}

function Vs(i, t, e) {
    if (e[t + "AxisID"] === i) return {
        axis: t
    }
}

function Sh(i, t) {
    if (t.data && t.data.datasets) {
        const e = t.data.datasets.filter(s => s.xAxisID === i || s.yAxisID === i);
        if (e.length) return Vs(i, "x", e[0]) || Vs(i, "y", e[0])
    }
    return {}
}

function Ch(i, t) {
    const e = Ht[i.type] || {
            scales: {}
        },
        s = t.scales || {},
        n = Oi(i.type, t),
        o = Object.create(null);
    return Object.keys(s).forEach(r => {
        const a = s[r];
        if (!C(a)) return console.error(`Invalid scale configuration for scale: ${r}`);
        if (a._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
        const l = Si(r, a, Sh(r, i), B.scales[a.type]),
            c = Th(l, n),
            h = e.scales || {};
        o[r] = le(Object.create(null), [{
            axis: l
        }, a, h[l], h[c]])
    }), i.data.datasets.forEach(r => {
        const a = r.type || i.type,
            l = r.indexAxis || Oi(a, t),
            h = (Ht[a] || {}).scales || {};
        Object.keys(h).forEach(u => {
            const d = Ph(u, l),
                f = r[d + "AxisID"] || d;
            o[f] = o[f] || Object.create(null), le(o[f], [{
                axis: d
            }, s[f], h[u]])
        })
    }), Object.keys(o).forEach(r => {
        const a = o[r];
        le(a, [B.scales[a.type], B.scale])
    }), o
}

function fo(i) {
    const t = i.options || (i.options = {});
    t.plugins = O(t.plugins, {}), t.scales = Ch(i, t)
}

function go(i) {
    return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i
}

function Lh(i) {
    return i = i || {}, i.data = go(i.data), fo(i), i
}
const Ys = new Map,
    po = new Set;

function He(i, t) {
    let e = Ys.get(i);
    return e || (e = t(), Ys.set(i, e), po.add(e)), e
}
const se = (i, t, e) => {
    const s = qe(t, e);
    s !== void 0 && i.add(s)
};
class Ah {
    constructor(t) {
        this._config = Lh(t), this._scopeCache = new Map, this._resolverCache = new Map
    }
    get platform() {
        return this._config.platform
    }
    get type() {
        return this._config.type
    }
    set type(t) {
        this._config.type = t
    }
    get data() {
        return this._config.data
    }
    set data(t) {
        this._config.data = go(t)
    }
    get options() {
        return this._config.options
    }
    set options(t) {
        this._config.options = t
    }
    get plugins() {
        return this._config.plugins
    }
    update() {
        const t = this._config;
        this.clearCache(), fo(t)
    }
    clearCache() {
        this._scopeCache.clear(), this._resolverCache.clear()
    }
    datasetScopeKeys(t) {
        return He(t, () => [
            [`datasets.${t}`, ""]
        ])
    }
    datasetAnimationScopeKeys(t, e) {
        return He(`${t}.transition.${e}`, () => [
            [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
            [`datasets.${t}`, ""]
        ])
    }
    datasetElementScopeKeys(t, e) {
        return He(`${t}-${e}`, () => [
            [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]
        ])
    }
    pluginScopeKeys(t) {
        const e = t.id,
            s = this.type;
        return He(`${s}-plugin-${e}`, () => [
            [`plugins.${e}`, ...t.additionalOptionScopes || []]
        ])
    }
    _cachedScopes(t, e) {
        const s = this._scopeCache;
        let n = s.get(t);
        return (!n || e) && (n = new Map, s.set(t, n)), n
    }
    getOptionScopes(t, e, s) {
        const {
            options: n,
            type: o
        } = this, r = this._cachedScopes(t, s), a = r.get(e);
        if (a) return a;
        const l = new Set;
        e.forEach(h => {
            t && (l.add(t), h.forEach(u => se(l, t, u))), h.forEach(u => se(l, n, u)), h.forEach(u => se(l, Ht[o] || {}, u)), h.forEach(u => se(l, B, u)), h.forEach(u => se(l, Pi, u))
        });
        const c = Array.from(l);
        return c.length === 0 && c.push(Object.create(null)), po.has(e) && r.set(e, c), c
    }
    chartOptionScopes() {
        const {
            options: t,
            type: e
        } = this;
        return [t, Ht[e] || {}, B.datasets[e] || {}, {
            type: e
        }, B, Pi]
    }
    resolveNamedOptions(t, e, s, n = [""]) {
        const o = {
                $shared: !0
            },
            {
                resolver: r,
                subPrefixes: a
            } = js(this._resolverCache, t, n);
        let l = r;
        if (Fh(r, e)) {
            o.$shared = !1, s = Dt(s) ? s() : s;
            const c = this.createResolver(t, s, a);
            l = qt(r, s, c)
        }
        for (const c of e) o[c] = l[c];
        return o
    }
    createResolver(t, e, s = [""], n) {
        const {
            resolver: o
        } = js(this._resolverCache, t, s);
        return C(e) ? qt(o, e, void 0, n) : o
    }
}

function js(i, t, e) {
    let s = i.get(t);
    s || (s = new Map, i.set(t, s));
    const n = e.join();
    let o = s.get(n);
    return o || (o = {
        resolver: Ui(t, e),
        subPrefixes: e.filter(a => !a.toLowerCase().includes("hover"))
    }, s.set(n, o)), o
}
const Ih = i => C(i) && Object.getOwnPropertyNames(i).some(t => Dt(i[t]));

function Fh(i, t) {
    const {
        isScriptable: e,
        isIndexable: s
    } = qn(i);
    for (const n of t) {
        const o = e(n),
            r = s(n),
            a = (r || o) && i[n];
        if (o && (Dt(a) || Ih(a)) || r && z(a)) return !0
    }
    return !1
}
var Eh = "4.4.1";
const Rh = ["top", "bottom", "left", "right", "chartArea"];

function $s(i, t) {
    return i === "top" || i === "bottom" || Rh.indexOf(i) === -1 && t === "x"
}

function Xs(i, t) {
    return function(e, s) {
        return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i]
    }
}

function Us(i) {
    const t = i.chart,
        e = t.options.animation;
    t.notifyPlugins("afterRender"), E(e && e.onComplete, [i], t)
}

function zh(i) {
    const t = i.chart,
        e = t.options.animation;
    E(e && e.onProgress, [i], t)
}

function mo(i) {
    return Gi() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i
}
const je = {},
    qs = i => {
        const t = mo(i);
        return Object.values(je).filter(e => e.canvas === t).pop()
    };

function Hh(i, t, e) {
    const s = Object.keys(i);
    for (const n of s) {
        const o = +n;
        if (o >= t) {
            const r = i[n];
            delete i[n], (e > 0 || o > t) && (i[o + e] = r)
        }
    }
}

function Nh(i, t, e, s) {
    return !e || i.type === "mouseout" ? null : s ? t : i
}

function Ne(i, t, e) {
    return i.options.clip ? i[e] : t[e]
}

function Bh(i, t) {
    const {
        xScale: e,
        yScale: s
    } = i;
    return e && s ? {
        left: Ne(e, t, "left"),
        right: Ne(e, t, "right"),
        top: Ne(s, t, "top"),
        bottom: Ne(s, t, "bottom")
    } : t
}
var _t;
let bo = (_t = class {
    static register(...t) {
        ht.add(...t), Zs()
    }
    static unregister(...t) {
        ht.remove(...t), Zs()
    }
    constructor(t, e) {
        const s = this.config = new Ah(e),
            n = mo(t),
            o = qs(n);
        if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
        const r = s.createResolver(s.chartOptionScopes(), this.getContext());
        this.platform = new(s.platform || sh(n)), this.platform.updateConfig(s);
        const a = this.platform.acquireContext(n, r.aspectRatio),
            l = a && a.canvas,
            c = l && l.height,
            h = l && l.width;
        if (this.id = Ga(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new wh, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = gl(u => this.update(u), r.resizeDelay || 0), this._dataChanges = [], je[this.id] = this, !a || !l) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return
        }
        pt.listen(this, "complete", Us), pt.listen(this, "progress", zh), this._initialize(), this.attached && this.update()
    }
    get aspectRatio() {
        const {
            options: {
                aspectRatio: t,
                maintainAspectRatio: e
            },
            width: s,
            height: n,
            _aspectRatio: o
        } = this;
        return R(t) ? e && o ? o : n ? s / n : null : t
    }
    get data() {
        return this.config.data
    }
    set data(t) {
        this.config.data = t
    }
    get options() {
        return this._options
    }
    set options(t) {
        this.config.options = t
    }
    get registry() {
        return ht
    }
    _initialize() {
        return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : ys(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this
    }
    clear() {
        return ms(this.canvas, this.ctx), this
    }
    stop() {
        return pt.stop(this), this
    }
    resize(t, e) {
        pt.running(this) ? this._resizeBeforeDraw = {
            width: t,
            height: e
        } : this._resize(t, e)
    }
    _resize(t, e) {
        const s = this.options,
            n = this.canvas,
            o = s.maintainAspectRatio && this.aspectRatio,
            r = this.platform.getMaximumSize(n, t, e, o),
            a = s.devicePixelRatio || this.platform.getDevicePixelRatio(),
            l = this.width ? "resize" : "attach";
        this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, ys(this, a, !0) && (this.notifyPlugins("resize", {
            size: r
        }), E(s.onResize, [this, r], this), this.attached && this._doResize(l) && this.render())
    }
    ensureScalesHaveIDs() {
        const e = this.options.scales || {};
        F(e, (s, n) => {
            s.id = n
        })
    }
    buildOrUpdateScales() {
        const t = this.options,
            e = t.scales,
            s = this.scales,
            n = Object.keys(s).reduce((r, a) => (r[a] = !1, r), {});
        let o = [];
        e && (o = o.concat(Object.keys(e).map(r => {
            const a = e[r],
                l = Si(r, a),
                c = l === "r",
                h = l === "x";
            return {
                options: a,
                dposition: c ? "chartArea" : h ? "bottom" : "left",
                dtype: c ? "radialLinear" : h ? "category" : "linear"
            }
        }))), F(o, r => {
            const a = r.options,
                l = a.id,
                c = Si(l, a),
                h = O(a.type, r.dtype);
            (a.position === void 0 || $s(a.position, c) !== $s(r.dposition)) && (a.position = r.dposition), n[l] = !0;
            let u = null;
            if (l in s && s[l].type === h) u = s[l];
            else {
                const d = ht.getScale(h);
                u = new d({
                    id: l,
                    type: h,
                    ctx: this.ctx,
                    chart: this
                }), s[u.id] = u
            }
            u.init(a, t)
        }), F(n, (r, a) => {
            r || delete s[a]
        }), F(s, r => {
            at.configure(this, r, r.options), at.addBox(this, r)
        })
    }
    _updateMetasets() {
        const t = this._metasets,
            e = this.data.datasets.length,
            s = t.length;
        if (t.sort((n, o) => n.index - o.index), s > e) {
            for (let n = e; n < s; ++n) this._destroyDatasetMeta(n);
            t.splice(e, s - e)
        }
        this._sortedMetasets = t.slice(0).sort(Xs("order", "index"))
    }
    _removeUnreferencedMetasets() {
        const {
            _metasets: t,
            data: {
                datasets: e
            }
        } = this;
        t.length > e.length && delete this._stacks, t.forEach((s, n) => {
            e.filter(o => o === s._dataset).length === 0 && this._destroyDatasetMeta(n)
        })
    }
    buildOrUpdateControllers() {
        const t = [],
            e = this.data.datasets;
        let s, n;
        for (this._removeUnreferencedMetasets(), s = 0, n = e.length; s < n; s++) {
            const o = e[s];
            let r = this.getDatasetMeta(s);
            const a = o.type || this.config.type;
            if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || Oi(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller) r.controller.updateIndex(s), r.controller.linkScales();
            else {
                const l = ht.getController(a),
                    {
                        datasetElementType: c,
                        dataElementType: h
                    } = B.datasets[a];
                Object.assign(l, {
                    dataElementType: ht.getElement(h),
                    datasetElementType: c && ht.getElement(c)
                }), r.controller = new l(this, s), t.push(r.controller)
            }
        }
        return this._updateMetasets(), t
    }
    _resetElements() {
        F(this.data.datasets, (t, e) => {
            this.getDatasetMeta(e).controller.reset()
        }, this)
    }
    reset() {
        this._resetElements(), this.notifyPlugins("reset")
    }
    update(t) {
        const e = this.config;
        e.update();
        const s = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()),
            n = this._animationsDisabled = !s.animation;
        if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
                mode: t,
                cancelable: !0
            }) === !1) return;
        const o = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        let r = 0;
        for (let c = 0, h = this.data.datasets.length; c < h; c++) {
            const {
                controller: u
            } = this.getDatasetMeta(c), d = !n && o.indexOf(u) === -1;
            u.buildOrUpdateElements(d), r = Math.max(+u.getMaxOverflow(), r)
        }
        r = this._minPadding = s.layout.autoPadding ? r : 0, this._updateLayout(r), n || F(o, c => {
            c.reset()
        }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
            mode: t
        }), this._layers.sort(Xs("z", "_idx"));
        const {
            _active: a,
            _lastEvent: l
        } = this;
        l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render()
    }
    _updateScales() {
        F(this.scales, t => {
            at.removeBox(this, t)
        }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales()
    }
    _checkEventBindings() {
        const t = this.options,
            e = new Set(Object.keys(this._listeners)),
            s = new Set(t.events);
        (!as(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents())
    }
    _updateHiddenIndices() {
        const {
            _hiddenIndices: t
        } = this, e = this._getUniformDataChanges() || [];
        for (const {
                method: s,
                start: n,
                count: o
            } of e) {
            const r = s === "_removeElements" ? -o : o;
            Hh(t, n, r)
        }
    }
    _getUniformDataChanges() {
        const t = this._dataChanges;
        if (!t || !t.length) return;
        this._dataChanges = [];
        const e = this.data.datasets.length,
            s = o => new Set(t.filter(r => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))),
            n = s(0);
        for (let o = 1; o < e; o++)
            if (!as(n, s(o))) return;
        return Array.from(n).map(o => o.split(",")).map(o => ({
            method: o[1],
            start: +o[2],
            count: +o[3]
        }))
    }
    _updateLayout(t) {
        if (this.notifyPlugins("beforeLayout", {
                cancelable: !0
            }) === !1) return;
        at.update(this, this.width, this.height, t);
        const e = this.chartArea,
            s = e.width <= 0 || e.height <= 0;
        this._layers = [], F(this.boxes, n => {
            s && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()))
        }, this), this._layers.forEach((n, o) => {
            n._idx = o
        }), this.notifyPlugins("afterLayout")
    }
    _updateDatasets(t) {
        if (this.notifyPlugins("beforeDatasetsUpdate", {
                mode: t,
                cancelable: !0
            }) !== !1) {
            for (let e = 0, s = this.data.datasets.length; e < s; ++e) this.getDatasetMeta(e).controller.configure();
            for (let e = 0, s = this.data.datasets.length; e < s; ++e) this._updateDataset(e, Dt(t) ? t({
                datasetIndex: e
            }) : t);
            this.notifyPlugins("afterDatasetsUpdate", {
                mode: t
            })
        }
    }
    _updateDataset(t, e) {
        const s = this.getDatasetMeta(t),
            n = {
                meta: s,
                index: t,
                mode: e,
                cancelable: !0
            };
        this.notifyPlugins("beforeDatasetUpdate", n) !== !1 && (s.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n))
    }
    render() {
        this.notifyPlugins("beforeRender", {
            cancelable: !0
        }) !== !1 && (pt.has(this) ? this.attached && !pt.running(this) && pt.start(this) : (this.draw(), Us({
            chart: this
        })))
    }
    draw() {
        let t;
        if (this._resizeBeforeDraw) {
            const {
                width: s,
                height: n
            } = this._resizeBeforeDraw;
            this._resize(s, n), this._resizeBeforeDraw = null
        }
        if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
                cancelable: !0
            }) === !1) return;
        const e = this._layers;
        for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
        for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
        this.notifyPlugins("afterDraw")
    }
    _getSortedDatasetMetas(t) {
        const e = this._sortedMetasets,
            s = [];
        let n, o;
        for (n = 0, o = e.length; n < o; ++n) {
            const r = e[n];
            (!t || r.visible) && s.push(r)
        }
        return s
    }
    getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0)
    }
    _drawDatasets() {
        if (this.notifyPlugins("beforeDatasetsDraw", {
                cancelable: !0
            }) === !1) return;
        const t = this.getSortedVisibleDatasetMetas();
        for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
        this.notifyPlugins("afterDatasetsDraw")
    }
    _drawDataset(t) {
        const e = this.ctx,
            s = t._clip,
            n = !s.disabled,
            o = Bh(t, this.chartArea),
            r = {
                meta: t,
                index: t.index,
                cancelable: !0
            };
        this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (n && ai(e, {
            left: s.left === !1 ? 0 : o.left - s.left,
            right: s.right === !1 ? this.width : o.right + s.right,
            top: s.top === !1 ? 0 : o.top - s.top,
            bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom
        }), t.controller.draw(), n && li(e), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r))
    }
    isPointInArea(t) {
        return xt(t, this.chartArea, this._minPadding)
    }
    getElementsAtEventForMode(t, e, s, n) {
        const o = Rc.modes[e];
        return typeof o == "function" ? o(this, t, s, n) : []
    }
    getDatasetMeta(t) {
        const e = this.data.datasets[t],
            s = this._metasets;
        let n = s.filter(o => o && o._dataset === e).pop();
        return n || (n = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: e && e.order || 0,
            index: t,
            _dataset: e,
            _parsed: [],
            _sorted: !1
        }, s.push(n)), n
    }
    getContext() {
        return this.$context || (this.$context = Pt(null, {
            chart: this,
            type: "chart"
        }))
    }
    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length
    }
    isDatasetVisible(t) {
        const e = this.data.datasets[t];
        if (!e) return !1;
        const s = this.getDatasetMeta(t);
        return typeof s.hidden == "boolean" ? !s.hidden : !e.hidden
    }
    setDatasetVisibility(t, e) {
        const s = this.getDatasetMeta(t);
        s.hidden = !e
    }
    toggleDataVisibility(t) {
        this._hiddenIndices[t] = !this._hiddenIndices[t]
    }
    getDataVisibility(t) {
        return !this._hiddenIndices[t]
    }
    _updateVisibility(t, e, s) {
        const n = s ? "show" : "hide",
            o = this.getDatasetMeta(t),
            r = o.controller._resolveAnimations(void 0, n);
        Ze(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
            visible: s
        }), this.update(a => a.datasetIndex === t ? n : void 0))
    }
    hide(t, e) {
        this._updateVisibility(t, e, !1)
    }
    show(t, e) {
        this._updateVisibility(t, e, !0)
    }
    _destroyDatasetMeta(t) {
        const e = this._metasets[t];
        e && e.controller && e.controller._destroy(), delete this._metasets[t]
    }
    _stop() {
        let t, e;
        for (this.stop(), pt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t)
    }
    destroy() {
        this.notifyPlugins("beforeDestroy");
        const {
            canvas: t,
            ctx: e
        } = this;
        this._stop(), this.config.clearCache(), t && (this.unbindEvents(), ms(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete je[this.id], this.notifyPlugins("afterDestroy")
    }
    toBase64Image(...t) {
        return this.canvas.toDataURL(...t)
    }
    bindEvents() {
        this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
    }
    bindUserEvents() {
        const t = this._listeners,
            e = this.platform,
            s = (o, r) => {
                e.addEventListener(this, o, r), t[o] = r
            },
            n = (o, r, a) => {
                o.offsetX = r, o.offsetY = a, this._eventHandler(o)
            };
        F(this.options.events, o => s(o, n))
    }
    bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        const t = this._responsiveListeners,
            e = this.platform,
            s = (l, c) => {
                e.addEventListener(this, l, c), t[l] = c
            },
            n = (l, c) => {
                t[l] && (e.removeEventListener(this, l, c), delete t[l])
            },
            o = (l, c) => {
                this.canvas && this.resize(l, c)
            };
        let r;
        const a = () => {
            n("attach", a), this.attached = !0, this.resize(), s("resize", o), s("detach", r)
        };
        r = () => {
            this.attached = !1, n("resize", o), this._stop(), this._resize(0, 0), s("attach", a)
        }, e.isAttached(this.canvas) ? a() : r()
    }
    unbindEvents() {
        F(this._listeners, (t, e) => {
            this.platform.removeEventListener(this, e, t)
        }), this._listeners = {}, F(this._responsiveListeners, (t, e) => {
            this.platform.removeEventListener(this, e, t)
        }), this._responsiveListeners = void 0
    }
    updateHoverStyle(t, e, s) {
        const n = s ? "set" : "remove";
        let o, r, a, l;
        for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + n + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
            r = t[a];
            const c = r && this.getDatasetMeta(r.datasetIndex).controller;
            c && c[n + "HoverStyle"](r.element, r.datasetIndex, r.index)
        }
    }
    getActiveElements() {
        return this._active || []
    }
    setActiveElements(t) {
        const e = this._active || [],
            s = t.map(({
                datasetIndex: o,
                index: r
            }) => {
                const a = this.getDatasetMeta(o);
                if (!a) throw new Error("No dataset found at index " + o);
                return {
                    datasetIndex: o,
                    element: a.data[r],
                    index: r
                }
            });
        !Xe(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e))
    }
    notifyPlugins(t, e, s) {
        return this._plugins.notify(this, t, e, s)
    }
    isPluginEnabled(t) {
        return this._plugins._cache.filter(e => e.plugin.id === t).length === 1
    }
    _updateHoverStyles(t, e, s) {
        const n = this.options.hover,
            o = (l, c) => l.filter(h => !c.some(u => h.datasetIndex === u.datasetIndex && h.index === u.index)),
            r = o(e, t),
            a = s ? t : o(t, e);
        r.length && this.updateHoverStyle(r, n.mode, !1), a.length && n.mode && this.updateHoverStyle(a, n.mode, !0)
    }
    _eventHandler(t, e) {
        const s = {
                event: t,
                replay: e,
                cancelable: !0,
                inChartArea: this.isPointInArea(t)
            },
            n = r => (r.options.events || this.options.events).includes(t.native.type);
        if (this.notifyPlugins("beforeEvent", s, n) === !1) return;
        const o = this._handleEvent(t, e, s.inChartArea);
        return s.cancelable = !1, this.notifyPlugins("afterEvent", s, n), (o || s.changed) && this.render(), this
    }
    _handleEvent(t, e, s) {
        const {
            _active: n = [],
            options: o
        } = this, r = e, a = this._getActiveElements(t, n, s, r), l = il(t), c = Nh(t, this._lastEvent, s, l);
        s && (this._lastEvent = null, E(o.onHover, [t, a, this], this), l && E(o.onClick, [t, a, this], this));
        const h = !Xe(a, n);
        return (h || e) && (this._active = a, this._updateHoverStyles(a, n, e)), this._lastEvent = c, h
    }
    _getActiveElements(t, e, s, n) {
        if (t.type === "mouseout") return [];
        if (!s) return e;
        const o = this.options.hover;
        return this.getElementsAtEventForMode(t, o.mode, o, n)
    }
}, b(_t, "defaults", B), b(_t, "instances", je), b(_t, "overrides", Ht), b(_t, "registry", ht), b(_t, "version", Eh), b(_t, "getChart", qs), _t);

function Zs() {
    return F(bo.instances, i => i._plugins.invalidate())
}

function xo(i, t, e = t) {
    i.lineCap = O(e.borderCapStyle, t.borderCapStyle), i.setLineDash(O(e.borderDash, t.borderDash)), i.lineDashOffset = O(e.borderDashOffset, t.borderDashOffset), i.lineJoin = O(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = O(e.borderWidth, t.borderWidth), i.strokeStyle = O(e.borderColor, t.borderColor)
}

function Wh(i, t, e) {
    i.lineTo(e.x, e.y)
}

function Vh(i) {
    return i.stepped ? Ol : i.tension || i.cubicInterpolationMode === "monotone" ? Sl : Wh
}

function yo(i, t, e = {}) {
    const s = i.length,
        {
            start: n = 0,
            end: o = s - 1
        } = e,
        {
            start: r,
            end: a
        } = t,
        l = Math.max(n, r),
        c = Math.min(o, a),
        h = n < r && o < r || n > a && o > a;
    return {
        count: s,
        start: l,
        loop: t.loop,
        ilen: c < l && !h ? s + c - l : c - l
    }
}

function Yh(i, t, e, s) {
    const {
        points: n,
        options: o
    } = t, {
        count: r,
        start: a,
        loop: l,
        ilen: c
    } = yo(n, e, s), h = Vh(o);
    let {
        move: u = !0,
        reverse: d
    } = s || {}, f, g, p;
    for (f = 0; f <= c; ++f) g = n[(a + (d ? c - f : f)) % r], !g.skip && (u ? (i.moveTo(g.x, g.y), u = !1) : h(i, p, g, d, o.stepped), p = g);
    return l && (g = n[(a + (d ? c : 0)) % r], h(i, p, g, d, o.stepped)), !!l
}

function jh(i, t, e, s) {
    const n = t.points,
        {
            count: o,
            start: r,
            ilen: a
        } = yo(n, e, s),
        {
            move: l = !0,
            reverse: c
        } = s || {};
    let h = 0,
        u = 0,
        d, f, g, p, m, x;
    const v = M => (r + (c ? a - M : M)) % o,
        k = () => {
            p !== m && (i.lineTo(h, m), i.lineTo(h, p), i.lineTo(h, x))
        };
    for (l && (f = n[v(0)], i.moveTo(f.x, f.y)), d = 0; d <= a; ++d) {
        if (f = n[v(d)], f.skip) continue;
        const M = f.x,
            w = f.y,
            D = M | 0;
        D === g ? (w < p ? p = w : w > m && (m = w), h = (u * h + M) / ++u) : (k(), i.lineTo(M, w), g = D, u = 0, p = m = w), x = w
    }
    k()
}

function Ci(i) {
    const t = i.options,
        e = t.borderDash && t.borderDash.length;
    return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? jh : Yh
}

function $h(i) {
    return i.stepped ? lc : i.tension || i.cubicInterpolationMode === "monotone" ? cc : Ft
}

function Xh(i, t, e, s) {
    let n = t._path;
    n || (n = t._path = new Path2D, t.path(n, e, s) && n.closePath()), xo(i, t.options), i.stroke(n)
}

function Uh(i, t, e, s) {
    const {
        segments: n,
        options: o
    } = t, r = Ci(t);
    for (const a of n) xo(i, o, a.style), i.beginPath(), r(i, t, a, {
        start: e,
        end: e + s - 1
    }) && i.closePath(), i.stroke()
}
const qh = typeof Path2D == "function";

function Zh(i, t, e, s) {
    qh && !t.options.segment ? Xh(i, t, e, s) : Uh(i, t, e, s)
}
class Rt extends yt {
    constructor(t) {
        super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t)
    }
    updateControlPoints(t, e) {
        const s = this.options;
        if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
            const n = s.spanGaps ? this._loop : this._fullLoop;
            tc(this._points, s, t, n, e), this._pointsUpdated = !0
        }
    }
    set points(t) {
        this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1
    }
    get points() {
        return this._points
    }
    get segments() {
        return this._segments || (this._segments = pc(this, this.options.segment))
    }
    first() {
        const t = this.segments,
            e = this.points;
        return t.length && e[t[0].start]
    }
    last() {
        const t = this.segments,
            e = this.points,
            s = t.length;
        return s && e[t[s - 1].end]
    }
    interpolate(t, e) {
        const s = this.options,
            n = t[e],
            o = this.points,
            r = so(this, {
                property: e,
                start: n,
                end: n
            });
        if (!r.length) return;
        const a = [],
            l = $h(s);
        let c, h;
        for (c = 0, h = r.length; c < h; ++c) {
            const {
                start: u,
                end: d
            } = r[c], f = o[u], g = o[d];
            if (f === g) {
                a.push(f);
                continue
            }
            const p = Math.abs((n - f[e]) / (g[e] - f[e])),
                m = l(f, g, p, s.stepped);
            m[e] = t[e], a.push(m)
        }
        return a.length === 1 ? a[0] : a
    }
    pathSegment(t, e, s) {
        return Ci(this)(t, this, e, s)
    }
    path(t, e, s) {
        const n = this.segments,
            o = Ci(this);
        let r = this._loop;
        e = e || 0, s = s || this.points.length - e;
        for (const a of n) r &= o(t, this, a, {
            start: e,
            end: e + s - 1
        });
        return !!r
    }
    draw(t, e, s, n) {
        const o = this.options || {};
        (this.points || []).length && o.borderWidth && (t.save(), Zh(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0)
    }
}
b(Rt, "id", "line"), b(Rt, "defaults", {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0
}), b(Rt, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
}), b(Rt, "descriptors", {
    _scriptable: !0,
    _indexable: t => t !== "borderDash" && t !== "fill"
});

function Gs(i, t, e, s) {
    const n = i.options,
        {
            [e]: o
        } = i.getProps([e], s);
    return Math.abs(t - o) < n.radius + n.hitRadius
}
class wi extends yt {
    constructor(e) {
        super();
        b(this, "parsed");
        b(this, "skip");
        b(this, "stop");
        this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, e && Object.assign(this, e)
    }
    inRange(e, s, n) {
        const o = this.options,
            {
                x: r,
                y: a
            } = this.getProps(["x", "y"], n);
        return Math.pow(e - r, 2) + Math.pow(s - a, 2) < Math.pow(o.hitRadius + o.radius, 2)
    }
    inXRange(e, s) {
        return Gs(this, e, "x", s)
    }
    inYRange(e, s) {
        return Gs(this, e, "y", s)
    }
    getCenterPoint(e) {
        const {
            x: s,
            y: n
        } = this.getProps(["x", "y"], e);
        return {
            x: s,
            y: n
        }
    }
    size(e) {
        e = e || this.options || {};
        let s = e.radius || 0;
        s = Math.max(s, s && e.hoverRadius || 0);
        const n = s && e.borderWidth || 0;
        return (s + n) * 2
    }
    draw(e, s) {
        const n = this.options;
        this.skip || n.radius < .1 || !xt(this, s, this.size(n) / 2) || (e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.fillStyle = n.backgroundColor, Ti(e, n, this.x, this.y))
    }
    getRange() {
        const e = this.options || {};
        return e.radius + e.hitRadius
    }
}
b(wi, "id", "point"), b(wi, "defaults", {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0
}), b(wi, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
});

function Gh(i, t, e) {
    const s = i.segments,
        n = i.points,
        o = t.points,
        r = [];
    for (const a of s) {
        let {
            start: l,
            end: c
        } = a;
        c = Ji(l, c, n);
        const h = Li(e, n[l], n[c], a.loop);
        if (!t.segments) {
            r.push({
                source: a,
                target: h,
                start: n[l],
                end: n[c]
            });
            continue
        }
        const u = so(t, h);
        for (const d of u) {
            const f = Li(e, o[d.start], o[d.end], d.loop),
                g = io(a, n, f);
            for (const p of g) r.push({
                source: p,
                target: d,
                start: {
                    [e]: Ks(h, f, "start", Math.max)
                },
                end: {
                    [e]: Ks(h, f, "end", Math.min)
                }
            })
        }
    }
    return r
}

function Li(i, t, e, s) {
    if (s) return;
    let n = t[i],
        o = e[i];
    return i === "angle" && (n = et(n), o = et(o)), {
        property: i,
        start: n,
        end: o
    }
}

function Kh(i, t) {
    const {
        x: e = null,
        y: s = null
    } = i || {}, n = t.points, o = [];
    return t.segments.forEach(({
        start: r,
        end: a
    }) => {
        a = Ji(r, a, n);
        const l = n[r],
            c = n[a];
        s !== null ? (o.push({
            x: l.x,
            y: s
        }), o.push({
            x: c.x,
            y: s
        })) : e !== null && (o.push({
            x: e,
            y: l.y
        }), o.push({
            x: e,
            y: c.y
        }))
    }), o
}

function Ji(i, t, e) {
    for (; t > i; t--) {
        const s = e[t];
        if (!isNaN(s.x) && !isNaN(s.y)) break
    }
    return t
}

function Ks(i, t, e, s) {
    return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0
}

function _o(i, t) {
    let e = [],
        s = !1;
    return z(i) ? (s = !0, e = i) : e = Kh(i, t), e.length ? new Rt({
        points: e,
        options: {
            tension: 0
        },
        _loop: s,
        _fullLoop: s
    }) : null
}

function Qs(i) {
    return i && i.fill !== !1
}

function Qh(i, t, e) {
    let n = i[t].fill;
    const o = [t];
    let r;
    if (!e) return n;
    for (; n !== !1 && o.indexOf(n) === -1;) {
        if (!N(n)) return n;
        if (r = i[n], !r) return !1;
        if (r.visible) return n;
        o.push(n), n = r.fill
    }
    return !1
}

function Jh(i, t, e) {
    const s = su(i);
    if (C(s)) return isNaN(s.value) ? !1 : s;
    let n = parseFloat(s);
    return N(n) && Math.floor(n) === n ? tu(s[0], t, n, e) : ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s
}

function tu(i, t, e, s) {
    return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e
}

function eu(i, t) {
    let e = null;
    return i === "start" ? e = t.bottom : i === "end" ? e = t.top : C(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e
}

function iu(i, t, e) {
    let s;
    return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : C(i) ? s = i.value : s = t.getBaseValue(), s
}

function su(i) {
    const t = i.options,
        e = t.fill;
    let s = O(e && e.target, e);
    return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s
}

function nu(i) {
    const {
        scale: t,
        index: e,
        line: s
    } = i, n = [], o = s.segments, r = s.points, a = ou(t, e);
    a.push(_o({
        x: null,
        y: t.bottom
    }, s));
    for (let l = 0; l < o.length; l++) {
        const c = o[l];
        for (let h = c.start; h <= c.end; h++) ru(n, r[h], a)
    }
    return new Rt({
        points: n,
        options: {}
    })
}

function ou(i, t) {
    const e = [],
        s = i.getMatchingVisibleMetas("line");
    for (let n = 0; n < s.length; n++) {
        const o = s[n];
        if (o.index === t) break;
        o.hidden || e.unshift(o.dataset)
    }
    return e
}

function ru(i, t, e) {
    const s = [];
    for (let n = 0; n < e.length; n++) {
        const o = e[n],
            {
                first: r,
                last: a,
                point: l
            } = au(o, t, "x");
        if (!(!l || r && a)) {
            if (r) s.unshift(l);
            else if (i.push(l), !a) break
        }
    }
    i.push(...s)
}

function au(i, t, e) {
    const s = i.interpolate(t, e);
    if (!s) return {};
    const n = s[e],
        o = i.segments,
        r = i.points;
    let a = !1,
        l = !1;
    for (let c = 0; c < o.length; c++) {
        const h = o[c],
            u = r[h.start][e],
            d = r[h.end][e];
        if (jt(n, u, d)) {
            a = n === u, l = n === d;
            break
        }
    }
    return {
        first: a,
        last: l,
        point: s
    }
}
class wo {
    constructor(t) {
        this.x = t.x, this.y = t.y, this.radius = t.radius
    }
    pathSegment(t, e, s) {
        const {
            x: n,
            y: o,
            radius: r
        } = this;
        return e = e || {
            start: 0,
            end: st
        }, t.arc(n, o, r, e.end, e.start, !0), !s.bounds
    }
    interpolate(t) {
        const {
            x: e,
            y: s,
            radius: n
        } = this, o = t.angle;
        return {
            x: e + Math.cos(o) * n,
            y: s + Math.sin(o) * n,
            angle: o
        }
    }
}

function lu(i) {
    const {
        chart: t,
        fill: e,
        line: s
    } = i;
    if (N(e)) return cu(t, e);
    if (e === "stack") return nu(i);
    if (e === "shape") return !0;
    const n = hu(i);
    return n instanceof wo ? n : _o(n, s)
}

function cu(i, t) {
    const e = i.getDatasetMeta(t);
    return e && i.isDatasetVisible(t) ? e.dataset : null
}

function hu(i) {
    return (i.scale || {}).getPointPositionForValue ? du(i) : uu(i)
}

function uu(i) {
    const {
        scale: t = {},
        fill: e
    } = i, s = eu(e, t);
    if (N(s)) {
        const n = t.isHorizontal();
        return {
            x: n ? s : null,
            y: n ? null : s
        }
    }
    return null
}

function du(i) {
    const {
        scale: t,
        fill: e
    } = i, s = t.options, n = t.getLabels().length, o = s.reverse ? t.max : t.min, r = iu(e, t, o), a = [];
    if (s.grid.circular) {
        const l = t.getPointPositionForValue(0, o);
        return new wo({
            x: l.x,
            y: l.y,
            radius: t.getDistanceFromCenterForValue(r)
        })
    }
    for (let l = 0; l < n; ++l) a.push(t.getPointPositionForValue(l, r));
    return a
}

function vi(i, t, e) {
    const s = lu(t),
        {
            line: n,
            scale: o,
            axis: r
        } = t,
        a = n.options,
        l = a.fill,
        c = a.backgroundColor,
        {
            above: h = c,
            below: u = c
        } = l || {};
    s && n.points.length && (ai(i, e), fu(i, {
        line: n,
        target: s,
        above: h,
        below: u,
        area: e,
        scale: o,
        axis: r
    }), li(i))
}

function fu(i, t) {
    const {
        line: e,
        target: s,
        above: n,
        below: o,
        area: r,
        scale: a
    } = t, l = e._loop ? "angle" : t.axis;
    i.save(), l === "x" && o !== n && (Js(i, s, r.top), tn(i, {
        line: e,
        target: s,
        color: n,
        scale: a,
        property: l
    }), i.restore(), i.save(), Js(i, s, r.bottom)), tn(i, {
        line: e,
        target: s,
        color: o,
        scale: a,
        property: l
    }), i.restore()
}

function Js(i, t, e) {
    const {
        segments: s,
        points: n
    } = t;
    let o = !0,
        r = !1;
    i.beginPath();
    for (const a of s) {
        const {
            start: l,
            end: c
        } = a, h = n[l], u = n[Ji(l, c, n)];
        o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)), r = !!t.pathSegment(i, a, {
            move: r
        }), r ? i.closePath() : i.lineTo(u.x, e)
    }
    i.lineTo(t.first().x, e), i.closePath(), i.clip()
}

function tn(i, t) {
    const {
        line: e,
        target: s,
        property: n,
        color: o,
        scale: r
    } = t, a = Gh(e, s, n);
    for (const {
            source: l,
            target: c,
            start: h,
            end: u
        } of a) {
        const {
            style: {
                backgroundColor: d = o
            } = {}
        } = l, f = s !== !0;
        i.save(), i.fillStyle = d, gu(i, r, f && Li(n, h, u)), i.beginPath();
        const g = !!e.pathSegment(i, l);
        let p;
        if (f) {
            g ? i.closePath() : en(i, s, u, n);
            const m = !!s.pathSegment(i, c, {
                move: g,
                reverse: !0
            });
            p = g && m, p || en(i, s, h, n)
        }
        i.closePath(), i.fill(p ? "evenodd" : "nonzero"), i.restore()
    }
}

function gu(i, t, e) {
    const {
        top: s,
        bottom: n
    } = t.chart.chartArea, {
        property: o,
        start: r,
        end: a
    } = e || {};
    o === "x" && (i.beginPath(), i.rect(r, s, a - r, n - s), i.clip())
}

function en(i, t, e, s) {
    const n = t.interpolate(e, s);
    n && i.lineTo(n.x, n.y)
}
var nd = {
    id: "filler",
    afterDatasetsUpdate(i, t, e) {
        const s = (i.data.datasets || []).length,
            n = [];
        let o, r, a, l;
        for (r = 0; r < s; ++r) o = i.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof Rt && (l = {
            visible: i.isDatasetVisible(r),
            index: r,
            fill: Jh(a, r, s),
            chart: i,
            axis: o.controller.options.indexAxis,
            scale: o.vScale,
            line: a
        }), o.$filler = l, n.push(l);
        for (r = 0; r < s; ++r) l = n[r], !(!l || l.fill === !1) && (l.fill = Qh(n, r, e.propagate))
    },
    beforeDraw(i, t, e) {
        const s = e.drawTime === "beforeDraw",
            n = i.getSortedVisibleDatasetMetas(),
            o = i.chartArea;
        for (let r = n.length - 1; r >= 0; --r) {
            const a = n[r].$filler;
            a && (a.line.updateControlPoints(o, a.axis), s && a.fill && vi(i.ctx, a, o))
        }
    },
    beforeDatasetsDraw(i, t, e) {
        if (e.drawTime !== "beforeDatasetsDraw") return;
        const s = i.getSortedVisibleDatasetMetas();
        for (let n = s.length - 1; n >= 0; --n) {
            const o = s[n].$filler;
            Qs(o) && vi(i.ctx, o, i.chartArea)
        }
    },
    beforeDatasetDraw(i, t, e) {
        const s = t.meta.$filler;
        !Qs(s) || e.drawTime !== "beforeDatasetDraw" || vi(i.ctx, s, i.chartArea)
    },
    defaults: {
        propagate: !0,
        drawTime: "beforeDatasetDraw"
    }
};
const sn = (i, t) => {
        let {
            boxHeight: e = t,
            boxWidth: s = t
        } = i;
        return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
            boxWidth: s,
            boxHeight: e,
            itemHeight: Math.max(t, e)
        }
    },
    pu = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class nn extends yt {
    constructor(t) {
        super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
    }
    update(t, e, s) {
        this.maxWidth = t, this.maxHeight = e, this._margins = s, this.setDimensions(), this.buildLabels(), this.fit()
    }
    setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height)
    }
    buildLabels() {
        const t = this.options.labels || {};
        let e = E(t.generateLabels, [this.chart], this) || [];
        t.filter && (e = e.filter(s => t.filter(s, this.chart.data))), t.sort && (e = e.sort((s, n) => t.sort(s, n, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e
    }
    fit() {
        const {
            options: t,
            ctx: e
        } = this;
        if (!t.display) {
            this.width = this.height = 0;
            return
        }
        const s = t.labels,
            n = X(s.font),
            o = n.size,
            r = this._computeTitleHeight(),
            {
                boxWidth: a,
                itemHeight: l
            } = sn(s, o);
        let c, h;
        e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(r, o, a, l) + 10) : (h = this.maxHeight, c = this._fitCols(r, n, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight)
    }
    _fitRows(t, e, s, n) {
        const {
            ctx: o,
            maxWidth: r,
            options: {
                labels: {
                    padding: a
                }
            }
        } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [0], h = n + a;
        let u = t;
        o.textAlign = "left", o.textBaseline = "middle";
        let d = -1,
            f = -h;
        return this.legendItems.forEach((g, p) => {
            const m = s + e / 2 + o.measureText(g.text).width;
            (p === 0 || c[c.length - 1] + m + 2 * a > r) && (u += h, c[c.length - (p > 0 ? 0 : 1)] = 0, f += h, d++), l[p] = {
                left: 0,
                top: f,
                row: d,
                width: m,
                height: n
            }, c[c.length - 1] += m + a
        }), u
    }
    _fitCols(t, e, s, n) {
        const {
            ctx: o,
            maxHeight: r,
            options: {
                labels: {
                    padding: a
                }
            }
        } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = r - t;
        let u = a,
            d = 0,
            f = 0,
            g = 0,
            p = 0;
        return this.legendItems.forEach((m, x) => {
            const {
                itemWidth: v,
                itemHeight: k
            } = mu(s, e, o, m, n);
            x > 0 && f + k + 2 * a > h && (u += d + a, c.push({
                width: d,
                height: f
            }), g += d + a, p++, d = f = 0), l[x] = {
                left: g,
                top: f,
                col: p,
                width: v,
                height: k
            }, d = Math.max(d, v), f += k + a
        }), u += d, c.push({
            width: d,
            height: f
        }), u
    }
    adjustHitBoxes() {
        if (!this.options.display) return;
        const t = this._computeTitleHeight(),
            {
                legendHitBoxes: e,
                options: {
                    align: s,
                    labels: {
                        padding: n
                    },
                    rtl: o
                }
            } = this,
            r = Xt(o, this.left, this.width);
        if (this.isHorizontal()) {
            let a = 0,
                l = G(s, this.left + n, this.right - this.lineWidths[a]);
            for (const c of e) a !== c.row && (a = c.row, l = G(s, this.left + n, this.right - this.lineWidths[a])), c.top += this.top + t + n, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + n
        } else {
            let a = 0,
                l = G(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
            for (const c of e) c.col !== a && (a = c.col, l = G(s, this.top + t + n, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + n, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + n
        }
    }
    isHorizontal() {
        return this.options.position === "top" || this.options.position === "bottom"
    }
    draw() {
        if (this.options.display) {
            const t = this.ctx;
            ai(t, this), this._draw(), li(t)
        }
    }
    _draw() {
        const {
            options: t,
            columnSizes: e,
            lineWidths: s,
            ctx: n
        } = this, {
            align: o,
            labels: r
        } = t, a = B.color, l = Xt(t.rtl, this.left, this.width), c = X(r.font), {
            padding: h
        } = r, u = c.size, d = u / 2;
        let f;
        this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = .5, n.font = c.string;
        const {
            boxWidth: g,
            boxHeight: p,
            itemHeight: m
        } = sn(r, u), x = function(D, y, _) {
            if (isNaN(g) || g <= 0 || isNaN(p) || p < 0) return;
            n.save();
            const P = O(_.lineWidth, 1);
            if (n.fillStyle = O(_.fillStyle, a), n.lineCap = O(_.lineCap, "butt"), n.lineDashOffset = O(_.lineDashOffset, 0), n.lineJoin = O(_.lineJoin, "miter"), n.lineWidth = P, n.strokeStyle = O(_.strokeStyle, a), n.setLineDash(O(_.lineDash, [])), r.usePointStyle) {
                const L = {
                        radius: p * Math.SQRT2 / 2,
                        pointStyle: _.pointStyle,
                        rotation: _.rotation,
                        borderWidth: P
                    },
                    T = l.xPlus(D, g / 2),
                    A = y + d;
                Xn(n, L, T, A, r.pointStyleWidth && g)
            } else {
                const L = y + Math.max((u - p) / 2, 0),
                    T = l.leftForLtr(D, g),
                    A = $t(_.borderRadius);
                n.beginPath(), Object.values(A).some(q => q !== 0) ? Qe(n, {
                    x: T,
                    y: L,
                    w: g,
                    h: p,
                    radius: A
                }) : n.rect(T, L, g, p), n.fill(), P !== 0 && n.stroke()
            }
            n.restore()
        }, v = function(D, y, _) {
            Nt(n, _.text, D, y + m / 2, c, {
                strikethrough: _.hidden,
                textAlign: l.textAlign(_.textAlign)
            })
        }, k = this.isHorizontal(), M = this._computeTitleHeight();
        k ? f = {
            x: G(o, this.left + h, this.right - s[0]),
            y: this.top + h + M,
            line: 0
        } : f = {
            x: this.left + h,
            y: G(o, this.top + M + h, this.bottom - e[0].height),
            line: 0
        }, Jn(this.ctx, t.textDirection);
        const w = m + h;
        this.legendItems.forEach((D, y) => {
            n.strokeStyle = D.fontColor, n.fillStyle = D.fontColor;
            const _ = n.measureText(D.text).width,
                P = l.textAlign(D.textAlign || (D.textAlign = r.textAlign)),
                L = g + d + _;
            let T = f.x,
                A = f.y;
            l.setWidth(this.width), k ? y > 0 && T + L + h > this.right && (A = f.y += w, f.line++, T = f.x = G(o, this.left + h, this.right - s[f.line])) : y > 0 && A + w > this.bottom && (T = f.x = T + e[f.line].width + h, f.line++, A = f.y = G(o, this.top + M + h, this.bottom - e[f.line].height));
            const q = l.x(T);
            if (x(q, A, D), T = pl(P, T + g + d, k ? T + L : this.right, t.rtl), v(l.x(T), A, D), k) f.x += L + h;
            else if (typeof D.text != "string") {
                const lt = c.lineHeight;
                f.y += vo(D, lt) + h
            } else f.y += w
        }), to(this.ctx, t.textDirection)
    }
    drawTitle() {
        const t = this.options,
            e = t.title,
            s = X(e.font),
            n = K(e.padding);
        if (!e.display) return;
        const o = Xt(t.rtl, this.left, this.width),
            r = this.ctx,
            a = e.position,
            l = s.size / 2,
            c = n.top + l;
        let h, u = this.left,
            d = this.width;
        if (this.isHorizontal()) d = Math.max(...this.lineWidths), h = this.top + c, u = G(t.align, u, this.right - d);
        else {
            const g = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
            h = c + G(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight())
        }
        const f = G(a, u, u + d);
        r.textAlign = o.textAlign(ji(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = s.string, Nt(r, e.text, f, h, s)
    }
    _computeTitleHeight() {
        const t = this.options.title,
            e = X(t.font),
            s = K(t.padding);
        return t.display ? e.lineHeight + s.height : 0
    }
    _getLegendItemAt(t, e) {
        let s, n, o;
        if (jt(t, this.left, this.right) && jt(e, this.top, this.bottom)) {
            for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
                if (n = o[s], jt(t, n.left, n.left + n.width) && jt(e, n.top, n.top + n.height)) return this.legendItems[s]
        }
        return null
    }
    handleEvent(t) {
        const e = this.options;
        if (!yu(t.type, e)) return;
        const s = this._getLegendItemAt(t.x, t.y);
        if (t.type === "mousemove" || t.type === "mouseout") {
            const n = this._hoveredItem,
                o = pu(n, s);
            n && !o && E(e.onLeave, [t, n, this], this), this._hoveredItem = s, s && !o && E(e.onHover, [t, s, this], this)
        } else s && E(e.onClick, [t, s, this], this)
    }
}

function mu(i, t, e, s, n) {
    const o = bu(s, i, t, e),
        r = xu(n, s, t.lineHeight);
    return {
        itemWidth: o,
        itemHeight: r
    }
}

function bu(i, t, e, s) {
    let n = i.text;
    return n && typeof n != "string" && (n = n.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + s.measureText(n).width
}

function xu(i, t, e) {
    let s = i;
    return typeof t.text != "string" && (s = vo(t, e)), s
}

function vo(i, t) {
    const e = i.text ? i.text.length : 0;
    return t * e
}

function yu(i, t) {
    return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"))
}
var od = {
    id: "legend",
    _element: nn,
    start(i, t, e) {
        const s = i.legend = new nn({
            ctx: i.ctx,
            options: e,
            chart: i
        });
        at.configure(i, s, e), at.addBox(i, s)
    },
    stop(i) {
        at.removeBox(i, i.legend), delete i.legend
    },
    beforeUpdate(i, t, e) {
        const s = i.legend;
        at.configure(i, s, e), s.options = e
    },
    afterUpdate(i) {
        const t = i.legend;
        t.buildLabels(), t.adjustHitBoxes()
    },
    afterEvent(i, t) {
        t.replay || i.legend.handleEvent(t.event)
    },
    defaults: {
        display: !0,
        position: "top",
        align: "center",
        fullSize: !0,
        reverse: !1,
        weight: 1e3,
        onClick(i, t, e) {
            const s = t.datasetIndex,
                n = e.chart;
            n.isDatasetVisible(s) ? (n.hide(s), t.hidden = !0) : (n.show(s), t.hidden = !1)
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: i => i.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(i) {
                const t = i.data.datasets,
                    {
                        labels: {
                            usePointStyle: e,
                            pointStyle: s,
                            textAlign: n,
                            color: o,
                            useBorderRadius: r,
                            borderRadius: a
                        }
                    } = i.legend.options;
                return i._getSortedDatasetMetas().map(l => {
                    const c = l.controller.getStyle(e ? 0 : void 0),
                        h = K(c.borderWidth);
                    return {
                        text: t[l.index].label,
                        fillStyle: c.backgroundColor,
                        fontColor: o,
                        hidden: !l.visible,
                        lineCap: c.borderCapStyle,
                        lineDash: c.borderDash,
                        lineDashOffset: c.borderDashOffset,
                        lineJoin: c.borderJoinStyle,
                        lineWidth: (h.width + h.height) / 4,
                        strokeStyle: c.borderColor,
                        pointStyle: s || c.pointStyle,
                        rotation: c.rotation,
                        textAlign: n || c.textAlign,
                        borderRadius: r && (a || c.borderRadius),
                        datasetIndex: l.index
                    }
                }, this)
            }
        },
        title: {
            color: i => i.chart.options.color,
            display: !1,
            position: "center",
            text: ""
        }
    },
    descriptors: {
        _scriptable: i => !i.startsWith("on"),
        labels: {
            _scriptable: i => !["generateLabels", "filter", "sort"].includes(i)
        }
    }
};
class ko extends yt {
    constructor(t) {
        super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
    }
    update(t, e) {
        const s = this.options;
        if (this.left = 0, this.top = 0, !s.display) {
            this.width = this.height = this.right = this.bottom = 0;
            return
        }
        this.width = this.right = t, this.height = this.bottom = e;
        const n = z(s.text) ? s.text.length : 1;
        this._padding = K(s.padding);
        const o = n * X(s.font).lineHeight + this._padding.height;
        this.isHorizontal() ? this.height = o : this.width = o
    }
    isHorizontal() {
        const t = this.options.position;
        return t === "top" || t === "bottom"
    }
    _drawArgs(t) {
        const {
            top: e,
            left: s,
            bottom: n,
            right: o,
            options: r
        } = this, a = r.align;
        let l = 0,
            c, h, u;
        return this.isHorizontal() ? (h = G(a, s, o), u = e + t, c = o - s) : (r.position === "left" ? (h = s + t, u = G(a, n, e), l = $ * -.5) : (h = o - t, u = G(a, e, n), l = $ * .5), c = n - e), {
            titleX: h,
            titleY: u,
            maxWidth: c,
            rotation: l
        }
    }
    draw() {
        const t = this.ctx,
            e = this.options;
        if (!e.display) return;
        const s = X(e.font),
            o = s.lineHeight / 2 + this._padding.top,
            {
                titleX: r,
                titleY: a,
                maxWidth: l,
                rotation: c
            } = this._drawArgs(o);
        Nt(t, e.text, 0, 0, s, {
            color: e.color,
            maxWidth: l,
            rotation: c,
            textAlign: ji(e.align),
            textBaseline: "middle",
            translation: [r, a]
        })
    }
}

function _u(i, t) {
    const e = new ko({
        ctx: i.ctx,
        options: t,
        chart: i
    });
    at.configure(i, e, t), at.addBox(i, e), i.titleBlock = e
}
var rd = {
    id: "title",
    _element: ko,
    start(i, t, e) {
        _u(i, e)
    },
    stop(i) {
        const t = i.titleBlock;
        at.removeBox(i, t), delete i.titleBlock
    },
    beforeUpdate(i, t, e) {
        const s = i.titleBlock;
        at.configure(i, s, e), s.options = e
    },
    defaults: {
        align: "center",
        display: !1,
        font: {
            weight: "bold"
        },
        fullSize: !0,
        padding: 10,
        position: "top",
        text: "",
        weight: 2e3
    },
    defaultRoutes: {
        color: "color"
    },
    descriptors: {
        _scriptable: !0,
        _indexable: !1
    }
};
const re = {
    average(i) {
        if (!i.length) return !1;
        let t, e, s = 0,
            n = 0,
            o = 0;
        for (t = 0, e = i.length; t < e; ++t) {
            const r = i[t].element;
            if (r && r.hasValue()) {
                const a = r.tooltipPosition();
                s += a.x, n += a.y, ++o
            }
        }
        return {
            x: s / o,
            y: n / o
        }
    },
    nearest(i, t) {
        if (!i.length) return !1;
        let e = t.x,
            s = t.y,
            n = Number.POSITIVE_INFINITY,
            o, r, a;
        for (o = 0, r = i.length; o < r; ++o) {
            const l = i[o].element;
            if (l && l.hasValue()) {
                const c = l.getCenterPoint(),
                    h = Di(t, c);
                h < n && (n = h, a = l)
            }
        }
        if (a) {
            const l = a.tooltipPosition();
            e = l.x, s = l.y
        }
        return {
            x: e,
            y: s
        }
    }
};

function ct(i, t) {
    return t && (z(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i
}

function mt(i) {
    return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i
}

function wu(i, t) {
    const {
        element: e,
        datasetIndex: s,
        index: n
    } = t, o = i.getDatasetMeta(s).controller, {
        label: r,
        value: a
    } = o.getLabelAndValue(n);
    return {
        chart: i,
        label: r,
        parsed: o.getParsed(n),
        raw: i.data.datasets[s].data[n],
        formattedValue: a,
        dataset: o.getDataset(),
        dataIndex: n,
        datasetIndex: s,
        element: e
    }
}

function on(i, t) {
    const e = i.chart.ctx,
        {
            body: s,
            footer: n,
            title: o
        } = i,
        {
            boxWidth: r,
            boxHeight: a
        } = t,
        l = X(t.bodyFont),
        c = X(t.titleFont),
        h = X(t.footerFont),
        u = o.length,
        d = n.length,
        f = s.length,
        g = K(t.padding);
    let p = g.height,
        m = 0,
        x = s.reduce((M, w) => M + w.before.length + w.lines.length + w.after.length, 0);
    if (x += i.beforeBody.length + i.afterBody.length, u && (p += u * c.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom), x) {
        const M = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
        p += f * M + (x - f) * l.lineHeight + (x - 1) * t.bodySpacing
    }
    d && (p += t.footerMarginTop + d * h.lineHeight + (d - 1) * t.footerSpacing);
    let v = 0;
    const k = function(M) {
        m = Math.max(m, e.measureText(M).width + v)
    };
    return e.save(), e.font = c.string, F(i.title, k), e.font = l.string, F(i.beforeBody.concat(i.afterBody), k), v = t.displayColors ? r + 2 + t.boxPadding : 0, F(s, M => {
        F(M.before, k), F(M.lines, k), F(M.after, k)
    }), v = 0, e.font = h.string, F(i.footer, k), e.restore(), m += g.width, {
        width: m,
        height: p
    }
}

function vu(i, t) {
    const {
        y: e,
        height: s
    } = t;
    return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center"
}

function ku(i, t, e, s) {
    const {
        x: n,
        width: o
    } = s, r = e.caretSize + e.caretPadding;
    if (i === "left" && n + o + r > t.width || i === "right" && n - o - r < 0) return !0
}

function Mu(i, t, e, s) {
    const {
        x: n,
        width: o
    } = e, {
        width: r,
        chartArea: {
            left: a,
            right: l
        }
    } = i;
    let c = "center";
    return s === "center" ? c = n <= (a + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= r - o / 2 && (c = "right"), ku(c, i, t, e) && (c = "center"), c
}

function rn(i, t, e) {
    const s = e.yAlign || t.yAlign || vu(i, e);
    return {
        xAlign: e.xAlign || t.xAlign || Mu(i, t, e, s),
        yAlign: s
    }
}

function Du(i, t) {
    let {
        x: e,
        width: s
    } = i;
    return t === "right" ? e -= s : t === "center" && (e -= s / 2), e
}

function Pu(i, t, e) {
    let {
        y: s,
        height: n
    } = i;
    return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s
}

function an(i, t, e, s) {
    const {
        caretSize: n,
        caretPadding: o,
        cornerRadius: r
    } = i, {
        xAlign: a,
        yAlign: l
    } = e, c = n + o, {
        topLeft: h,
        topRight: u,
        bottomLeft: d,
        bottomRight: f
    } = $t(r);
    let g = Du(t, a);
    const p = Pu(t, l, c);
    return l === "center" ? a === "left" ? g += c : a === "right" && (g -= c) : a === "left" ? g -= Math.max(h, d) + n : a === "right" && (g += Math.max(u, f) + n), {
        x: rt(g, 0, s.width - t.width),
        y: rt(p, 0, s.height - t.height)
    }
}

function Be(i, t, e) {
    const s = K(e.padding);
    return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left
}

function ln(i) {
    return ct([], mt(i))
}

function Tu(i, t, e) {
    return Pt(i, {
        tooltip: t,
        tooltipItems: e,
        type: "tooltip"
    })
}

function cn(i, t) {
    const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
    return e ? i.override(e) : i
}
const Mo = {
    beforeTitle: ft,
    title(i) {
        if (i.length > 0) {
            const t = i[0],
                e = t.chart.data.labels,
                s = e ? e.length : 0;
            if (this && this.options && this.options.mode === "dataset") return t.dataset.label || "";
            if (t.label) return t.label;
            if (s > 0 && t.dataIndex < s) return e[t.dataIndex]
        }
        return ""
    },
    afterTitle: ft,
    beforeBody: ft,
    beforeLabel: ft,
    label(i) {
        if (this && this.options && this.options.mode === "dataset") return i.label + ": " + i.formattedValue || i.formattedValue;
        let t = i.dataset.label || "";
        t && (t += ": ");
        const e = i.formattedValue;
        return R(e) || (t += e), t
    },
    labelColor(i) {
        const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
        return {
            borderColor: e.borderColor,
            backgroundColor: e.backgroundColor,
            borderWidth: e.borderWidth,
            borderDash: e.borderDash,
            borderDashOffset: e.borderDashOffset,
            borderRadius: 0
        }
    },
    labelTextColor() {
        return this.options.bodyColor
    },
    labelPointStyle(i) {
        const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
        return {
            pointStyle: e.pointStyle,
            rotation: e.rotation
        }
    },
    afterLabel: ft,
    afterBody: ft,
    beforeFooter: ft,
    footer: ft,
    afterFooter: ft
};

function Q(i, t, e, s) {
    const n = i[t].call(e, s);
    return typeof n > "u" ? Mo[t].call(e, s) : n
}
class Ai extends yt {
    constructor(t) {
        super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0
    }
    initialize(t) {
        this.options = t, this._cachedAnimations = void 0, this.$context = void 0
    }
    _resolveAnimations() {
        const t = this._cachedAnimations;
        if (t) return t;
        const e = this.chart,
            s = this.options.setContext(this.getContext()),
            n = s.enabled && e.options.animation && s.animations,
            o = new no(this.chart, n);
        return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o
    }
    getContext() {
        return this.$context || (this.$context = Tu(this.chart.getContext(), this, this._tooltipItems))
    }
    getTitle(t, e) {
        const {
            callbacks: s
        } = e, n = Q(s, "beforeTitle", this, t), o = Q(s, "title", this, t), r = Q(s, "afterTitle", this, t);
        let a = [];
        return a = ct(a, mt(n)), a = ct(a, mt(o)), a = ct(a, mt(r)), a
    }
    getBeforeBody(t, e) {
        return ln(Q(e.callbacks, "beforeBody", this, t))
    }
    getBody(t, e) {
        const {
            callbacks: s
        } = e, n = [];
        return F(t, o => {
            const r = {
                    before: [],
                    lines: [],
                    after: []
                },
                a = cn(s, o);
            ct(r.before, mt(Q(a, "beforeLabel", this, o))), ct(r.lines, Q(a, "label", this, o)), ct(r.after, mt(Q(a, "afterLabel", this, o))), n.push(r)
        }), n
    }
    getAfterBody(t, e) {
        return ln(Q(e.callbacks, "afterBody", this, t))
    }
    getFooter(t, e) {
        const {
            callbacks: s
        } = e, n = Q(s, "beforeFooter", this, t), o = Q(s, "footer", this, t), r = Q(s, "afterFooter", this, t);
        let a = [];
        return a = ct(a, mt(n)), a = ct(a, mt(o)), a = ct(a, mt(r)), a
    }
    _createItems(t) {
        const e = this._active,
            s = this.chart.data,
            n = [],
            o = [],
            r = [];
        let a = [],
            l, c;
        for (l = 0, c = e.length; l < c; ++l) a.push(wu(this.chart, e[l]));
        return t.filter && (a = a.filter((h, u, d) => t.filter(h, u, d, s))), t.itemSort && (a = a.sort((h, u) => t.itemSort(h, u, s))), F(a, h => {
            const u = cn(t.callbacks, h);
            n.push(Q(u, "labelColor", this, h)), o.push(Q(u, "labelPointStyle", this, h)), r.push(Q(u, "labelTextColor", this, h))
        }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = a, a
    }
    update(t, e) {
        const s = this.options.setContext(this.getContext()),
            n = this._active;
        let o, r = [];
        if (!n.length) this.opacity !== 0 && (o = {
            opacity: 0
        });
        else {
            const a = re[s.position].call(this, n, this._eventPosition);
            r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
            const l = this._size = on(this, s),
                c = Object.assign({}, a, l),
                h = rn(this.chart, s, c),
                u = an(s, c, h, this.chart);
            this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
                opacity: 1,
                x: u.x,
                y: u.y,
                width: l.width,
                height: l.height,
                caretX: a.x,
                caretY: a.y
            }
        }
        this._tooltipItems = r, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && s.external && s.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay: e
        })
    }
    drawCaret(t, e, s, n) {
        const o = this.getCaretPosition(t, s, n);
        e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3)
    }
    getCaretPosition(t, e, s) {
        const {
            xAlign: n,
            yAlign: o
        } = this, {
            caretSize: r,
            cornerRadius: a
        } = s, {
            topLeft: l,
            topRight: c,
            bottomLeft: h,
            bottomRight: u
        } = $t(a), {
            x: d,
            y: f
        } = t, {
            width: g,
            height: p
        } = e;
        let m, x, v, k, M, w;
        return o === "center" ? (M = f + p / 2, n === "left" ? (m = d, x = m - r, k = M + r, w = M - r) : (m = d + g, x = m + r, k = M - r, w = M + r), v = m) : (n === "left" ? x = d + Math.max(l, h) + r : n === "right" ? x = d + g - Math.max(c, u) - r : x = this.caretX, o === "top" ? (k = f, M = k - r, m = x - r, v = x + r) : (k = f + p, M = k + r, m = x + r, v = x - r), w = k), {
            x1: m,
            x2: x,
            x3: v,
            y1: k,
            y2: M,
            y3: w
        }
    }
    drawTitle(t, e, s) {
        const n = this.title,
            o = n.length;
        let r, a, l;
        if (o) {
            const c = Xt(s.rtl, this.x, this.width);
            for (t.x = Be(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", r = X(s.titleFont), a = s.titleSpacing, e.fillStyle = s.titleColor, e.font = r.string, l = 0; l < o; ++l) e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a)
        }
    }
    _drawColorBox(t, e, s, n, o) {
        const r = this.labelColors[s],
            a = this.labelPointStyles[s],
            {
                boxHeight: l,
                boxWidth: c
            } = o,
            h = X(o.bodyFont),
            u = Be(this, "left", o),
            d = n.x(u),
            f = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0,
            g = e.y + f;
        if (o.usePointStyle) {
            const p = {
                    radius: Math.min(c, l) / 2,
                    pointStyle: a.pointStyle,
                    rotation: a.rotation,
                    borderWidth: 1
                },
                m = n.leftForLtr(d, c) + c / 2,
                x = g + l / 2;
            t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Ti(t, p, m, x), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, Ti(t, p, m, x)
        } else {
            t.lineWidth = C(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
            const p = n.leftForLtr(d, c),
                m = n.leftForLtr(n.xPlus(d, 1), c - 2),
                x = $t(r.borderRadius);
            Object.values(x).some(v => v !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Qe(t, {
                x: p,
                y: g,
                w: c,
                h: l,
                radius: x
            }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), Qe(t, {
                x: m,
                y: g + 1,
                w: c - 2,
                h: l - 2,
                radius: x
            }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(p, g, c, l), t.strokeRect(p, g, c, l), t.fillStyle = r.backgroundColor, t.fillRect(m, g + 1, c - 2, l - 2))
        }
        t.fillStyle = this.labelTextColors[s]
    }
    drawBody(t, e, s) {
        const {
            body: n
        } = this, {
            bodySpacing: o,
            bodyAlign: r,
            displayColors: a,
            boxHeight: l,
            boxWidth: c,
            boxPadding: h
        } = s, u = X(s.bodyFont);
        let d = u.lineHeight,
            f = 0;
        const g = Xt(s.rtl, this.x, this.width),
            p = function(_) {
                e.fillText(_, g.x(t.x + f), t.y + d / 2), t.y += d + o
            },
            m = g.textAlign(r);
        let x, v, k, M, w, D, y;
        for (e.textAlign = r, e.textBaseline = "middle", e.font = u.string, t.x = Be(this, m, s), e.fillStyle = s.bodyColor, F(this.beforeBody, p), f = a && m !== "right" ? r === "center" ? c / 2 + h : c + 2 + h : 0, M = 0, D = n.length; M < D; ++M) {
            for (x = n[M], v = this.labelTextColors[M], e.fillStyle = v, F(x.before, p), k = x.lines, a && k.length && (this._drawColorBox(e, t, M, g, s), d = Math.max(u.lineHeight, l)), w = 0, y = k.length; w < y; ++w) p(k[w]), d = u.lineHeight;
            F(x.after, p)
        }
        f = 0, d = u.lineHeight, F(this.afterBody, p), t.y -= o
    }
    drawFooter(t, e, s) {
        const n = this.footer,
            o = n.length;
        let r, a;
        if (o) {
            const l = Xt(s.rtl, this.x, this.width);
            for (t.x = Be(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", r = X(s.footerFont), e.fillStyle = s.footerColor, e.font = r.string, a = 0; a < o; ++a) e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing
        }
    }
    drawBackground(t, e, s, n) {
        const {
            xAlign: o,
            yAlign: r
        } = this, {
            x: a,
            y: l
        } = t, {
            width: c,
            height: h
        } = s, {
            topLeft: u,
            topRight: d,
            bottomLeft: f,
            bottomRight: g
        } = $t(n.cornerRadius);
        e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + u, l), r === "top" && this.drawCaret(t, e, s, n), e.lineTo(a + c - d, l), e.quadraticCurveTo(a + c, l, a + c, l + d), r === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(a + c, l + h - g), e.quadraticCurveTo(a + c, l + h, a + c - g, l + h), r === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(a + f, l + h), e.quadraticCurveTo(a, l + h, a, l + h - f), r === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(a, l + u), e.quadraticCurveTo(a, l, a + u, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke()
    }
    _updateAnimationTarget(t) {
        const e = this.chart,
            s = this.$animations,
            n = s && s.x,
            o = s && s.y;
        if (n || o) {
            const r = re[t.position].call(this, this._active, this._eventPosition);
            if (!r) return;
            const a = this._size = on(this, t),
                l = Object.assign({}, r, this._size),
                c = rn(e, t, l),
                h = an(t, l, c, e);
            (n._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, h))
        }
    }
    _willRender() {
        return !!this.opacity
    }
    draw(t) {
        const e = this.options.setContext(this.getContext());
        let s = this.opacity;
        if (!s) return;
        this._updateAnimationTarget(e);
        const n = {
                width: this.width,
                height: this.height
            },
            o = {
                x: this.x,
                y: this.y
            };
        s = Math.abs(s) < .001 ? 0 : s;
        const r = K(e.padding),
            a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        e.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), Jn(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), to(t, e.textDirection), t.restore())
    }
    getActiveElements() {
        return this._active || []
    }
    setActiveElements(t, e) {
        const s = this._active,
            n = t.map(({
                datasetIndex: a,
                index: l
            }) => {
                const c = this.chart.getDatasetMeta(a);
                if (!c) throw new Error("Cannot find a dataset at index " + a);
                return {
                    datasetIndex: a,
                    element: c.data[l],
                    index: l
                }
            }),
            o = !Xe(s, n),
            r = this._positionChanged(n, e);
        (o || r) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0))
    }
    handleEvent(t, e, s = !0) {
        if (e && this._ignoreReplayEvents) return !1;
        this._ignoreReplayEvents = !1;
        const n = this.options,
            o = this._active || [],
            r = this._getActiveElements(t, o, e, s),
            a = this._positionChanged(r, t),
            l = e || !Xe(r, o) || a;
        return l && (this._active = r, (n.enabled || n.external) && (this._eventPosition = {
            x: t.x,
            y: t.y
        }, this.update(!0, e))), l
    }
    _getActiveElements(t, e, s, n) {
        const o = this.options;
        if (t.type === "mouseout") return [];
        if (!n) return e.filter(a => this.chart.data.datasets[a.datasetIndex] && this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index) !== void 0);
        const r = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
        return o.reverse && r.reverse(), r
    }
    _positionChanged(t, e) {
        const {
            caretX: s,
            caretY: n,
            options: o
        } = this, r = re[o.position].call(this, t, e);
        return r !== !1 && (s !== r.x || n !== r.y)
    }
}
b(Ai, "positioners", re);
var ad = {
    id: "tooltip",
    _element: Ai,
    positioners: re,
    afterInit(i, t, e) {
        e && (i.tooltip = new Ai({
            chart: i,
            options: e
        }))
    },
    beforeUpdate(i, t, e) {
        i.tooltip && i.tooltip.initialize(e)
    },
    reset(i, t, e) {
        i.tooltip && i.tooltip.initialize(e)
    },
    afterDraw(i) {
        const t = i.tooltip;
        if (t && t._willRender()) {
            const e = {
                tooltip: t
            };
            if (i.notifyPlugins("beforeTooltipDraw", { ...e,
                    cancelable: !0
                }) === !1) return;
            t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e)
        }
    },
    afterEvent(i, t) {
        if (i.tooltip) {
            const e = t.replay;
            i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0)
        }
    },
    defaults: {
        enabled: !0,
        external: null,
        position: "average",
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#fff",
        titleFont: {
            weight: "bold"
        },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: "left",
        bodyColor: "#fff",
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: "left",
        footerColor: "#fff",
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: {
            weight: "bold"
        },
        footerAlign: "left",
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (i, t) => t.bodyFont.size,
        boxWidth: (i, t) => t.bodyFont.size,
        multiKeyBackground: "#fff",
        displayColors: !0,
        boxPadding: 0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        animation: {
            duration: 400,
            easing: "easeOutQuart"
        },
        animations: {
            numbers: {
                type: "number",
                properties: ["x", "y", "width", "height", "caretX", "caretY"]
            },
            opacity: {
                easing: "linear",
                duration: 200
            }
        },
        callbacks: Mo
    },
    defaultRoutes: {
        bodyFont: "font",
        footerFont: "font",
        titleFont: "font"
    },
    descriptors: {
        _scriptable: i => i !== "filter" && i !== "itemSort" && i !== "external",
        _indexable: !1,
        callbacks: {
            _scriptable: !1,
            _indexable: !1
        },
        animation: {
            _fallback: !1
        },
        animations: {
            _fallback: "animation"
        }
    },
    additionalOptionScopes: ["interaction"]
};
const Ou = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
    index: e,
    label: t
})) : isNaN(t) && (e = null), e);

function Su(i, t, e, s) {
    const n = i.indexOf(t);
    if (n === -1) return Ou(i, t, e, s);
    const o = i.lastIndexOf(t);
    return n !== o ? e : n
}
const Cu = (i, t) => i === null ? null : rt(Math.round(i), 0, t);

function hn(i) {
    const t = this.getLabels();
    return i >= 0 && i < t.length ? t[i] : i
}
class un extends Bt {
    constructor(t) {
        super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = []
    }
    init(t) {
        const e = this._addedLabels;
        if (e.length) {
            const s = this.getLabels();
            for (const {
                    index: n,
                    label: o
                } of e) s[n] === o && s.splice(n, 1);
            this._addedLabels = []
        }
        super.init(t)
    }
    parse(t, e) {
        if (R(t)) return null;
        const s = this.getLabels();
        return e = isFinite(e) && s[e] === t ? e : Su(s, t, O(e, t), this._addedLabels), Cu(e, s.length - 1)
    }
    determineDataLimits() {
        const {
            minDefined: t,
            maxDefined: e
        } = this.getUserBounds();
        let {
            min: s,
            max: n
        } = this.getMinMax(!0);
        this.options.bounds === "ticks" && (t || (s = 0), e || (n = this.getLabels().length - 1)), this.min = s, this.max = n
    }
    buildTicks() {
        const t = this.min,
            e = this.max,
            s = this.options.offset,
            n = [];
        let o = this.getLabels();
        o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (s ? 0 : 1), 1), this._startValue = this.min - (s ? .5 : 0);
        for (let r = t; r <= e; r++) n.push({
            value: r
        });
        return n
    }
    getLabelForValue(t) {
        return hn.call(this, t)
    }
    configure() {
        super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels)
    }
    getPixelForValue(t) {
        return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    }
    getPixelForTick(t) {
        const e = this.ticks;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
    }
    getValueForPixel(t) {
        return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
    }
    getBasePixel() {
        return this.bottom
    }
}
b(un, "id", "category"), b(un, "defaults", {
    ticks: {
        callback: hn
    }
});

function Lu(i, t) {
    const e = [],
        {
            bounds: n,
            step: o,
            min: r,
            max: a,
            precision: l,
            count: c,
            maxTicks: h,
            maxDigits: u,
            includeBounds: d
        } = i,
        f = o || 1,
        g = h - 1,
        {
            min: p,
            max: m
        } = t,
        x = !R(r),
        v = !R(a),
        k = !R(c),
        M = (m - p) / (u + 1);
    let w = cs((m - p) / g / f) * f,
        D, y, _, P;
    if (w < 1e-14 && !x && !v) return [{
        value: p
    }, {
        value: m
    }];
    P = Math.ceil(m / w) - Math.floor(p / w), P > g && (w = cs(P * w / g / f) * f), R(l) || (D = Math.pow(10, l), w = Math.ceil(w * D) / D), n === "ticks" ? (y = Math.floor(p / w) * w, _ = Math.ceil(m / w) * w) : (y = p, _ = m), x && v && o && rl((a - r) / o, w / 1e3) ? (P = Math.round(Math.min((a - r) / w, h)), w = (a - r) / P, y = r, _ = a) : k ? (y = x ? r : y, _ = v ? a : _, P = c - 1, w = (_ - y) / P) : (P = (_ - y) / w, ce(P, Math.round(P), w / 1e3) ? P = Math.round(P) : P = Math.ceil(P));
    const L = Math.max(hs(w), hs(y));
    D = Math.pow(10, R(l) ? L : l), y = Math.round(y * D) / D, _ = Math.round(_ * D) / D;
    let T = 0;
    for (x && (d && y !== r ? (e.push({
            value: r
        }), y < r && T++, ce(Math.round((y + T * w) * D) / D, r, dn(r, M, i)) && T++) : y < r && T++); T < P; ++T) {
        const A = Math.round((y + T * w) * D) / D;
        if (v && A > a) break;
        e.push({
            value: A
        })
    }
    return v && d && _ !== a ? e.length && ce(e[e.length - 1].value, a, dn(a, M, i)) ? e[e.length - 1].value = a : e.push({
        value: a
    }) : (!v || _ === a) && e.push({
        value: _
    }), e
}

function dn(i, t, {
    horizontal: e,
    minRotation: s
}) {
    const n = kt(s),
        o = (e ? Math.sin(n) : Math.cos(n)) || .001,
        r = .75 * t * ("" + i).length;
    return Math.min(t / o, r)
}
class ei extends Bt {
    constructor(t) {
        super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0
    }
    parse(t, e) {
        return R(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t
    }
    handleTickRangeOptions() {
        const {
            beginAtZero: t
        } = this.options, {
            minDefined: e,
            maxDefined: s
        } = this.getUserBounds();
        let {
            min: n,
            max: o
        } = this;
        const r = l => n = e ? n : l,
            a = l => o = s ? o : l;
        if (t) {
            const l = Ut(n),
                c = Ut(o);
            l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0)
        }
        if (n === o) {
            let l = o === 0 ? 1 : Math.abs(o * .05);
            a(o + l), t || r(n - l)
        }
        this.min = n, this.max = o
    }
    getTickLimit() {
        const t = this.options.ticks;
        let {
            maxTicksLimit: e,
            stepSize: s
        } = t, n;
        return s ? (n = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), e = e || 11), e && (n = Math.min(e, n)), n
    }
    computeTickLimit() {
        return Number.POSITIVE_INFINITY
    }
    buildTicks() {
        const t = this.options,
            e = t.ticks;
        let s = this.getTickLimit();
        s = Math.max(2, s);
        const n = {
                maxTicks: s,
                bounds: t.bounds,
                min: t.min,
                max: t.max,
                precision: e.precision,
                step: e.stepSize,
                count: e.count,
                maxDigits: this._maxDigits(),
                horizontal: this.isHorizontal(),
                minRotation: e.minRotation || 0,
                includeBounds: e.includeBounds !== !1
            },
            o = this._range || this,
            r = Lu(n, o);
        return t.bounds === "ticks" && Bn(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r
    }
    configure() {
        const t = this.ticks;
        let e = this.min,
            s = this.max;
        if (super.configure(), this.options.offset && t.length) {
            const n = (s - e) / Math.max(t.length - 1, 1) / 2;
            e -= n, s += n
        }
        this._startValue = e, this._endValue = s, this._valueRange = s - e
    }
    getLabelForValue(t) {
        return Xi(t, this.chart.options.locale, this.options.ticks.format)
    }
}
class fn extends ei {
    determineDataLimits() {
        const {
            min: t,
            max: e
        } = this.getMinMax(!0);
        this.min = N(t) ? t : 0, this.max = N(e) ? e : 1, this.handleTickRangeOptions()
    }
    computeTickLimit() {
        const t = this.isHorizontal(),
            e = t ? this.width : this.height,
            s = kt(this.options.ticks.minRotation),
            n = (t ? Math.sin(s) : Math.cos(s)) || .001,
            o = this._resolveTickFontOptions(0);
        return Math.ceil(e / Math.min(40, o.lineHeight / n))
    }
    getPixelForValue(t) {
        return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    }
    getValueForPixel(t) {
        return this._startValue + this.getDecimalForPixel(t) * this._valueRange
    }
}
b(fn, "id", "linear"), b(fn, "defaults", {
    ticks: {
        callback: ri.formatters.numeric
    }
});
const xe = i => Math.floor(vt(i)),
    At = (i, t) => Math.pow(10, xe(i) + t);

function gn(i) {
    return i / Math.pow(10, xe(i)) === 1
}

function pn(i, t, e) {
    const s = Math.pow(10, e),
        n = Math.floor(i / s);
    return Math.ceil(t / s) - n
}

function Au(i, t) {
    const e = t - i;
    let s = xe(e);
    for (; pn(i, t, s) > 10;) s++;
    for (; pn(i, t, s) < 10;) s--;
    return Math.min(s, xe(i))
}

function Iu(i, {
    min: t,
    max: e
}) {
    t = tt(i.min, t);
    const s = [],
        n = xe(t);
    let o = Au(t, e),
        r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
    const a = Math.pow(10, o),
        l = n > o ? Math.pow(10, n) : 0,
        c = Math.round((t - l) * r) / r,
        h = Math.floor((t - l) / a / 10) * a * 10;
    let u = Math.floor((c - h) / Math.pow(10, o)),
        d = tt(i.min, Math.round((l + h + u * Math.pow(10, o)) * r) / r);
    for (; d < e;) s.push({
        value: d,
        major: gn(d),
        significand: u
    }), u >= 10 ? u = u < 15 ? 15 : 20 : u++, u >= 20 && (o++, u = 2, r = o >= 0 ? 1 : r), d = Math.round((l + h + u * Math.pow(10, o)) * r) / r;
    const f = tt(i.max, d);
    return s.push({
        value: f,
        major: gn(f),
        significand: u
    }), s
}
class mn extends Bt {
    constructor(t) {
        super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0
    }
    parse(t, e) {
        const s = ei.prototype.parse.apply(this, [t, e]);
        if (s === 0) {
            this._zero = !0;
            return
        }
        return N(s) && s > 0 ? s : null
    }
    determineDataLimits() {
        const {
            min: t,
            max: e
        } = this.getMinMax(!0);
        this.min = N(t) ? Math.max(0, t) : null, this.max = N(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !N(this._userMin) && (this.min = t === At(this.min, 0) ? At(this.min, -1) : At(this.min, 0)), this.handleTickRangeOptions()
    }
    handleTickRangeOptions() {
        const {
            minDefined: t,
            maxDefined: e
        } = this.getUserBounds();
        let s = this.min,
            n = this.max;
        const o = a => s = t ? s : a,
            r = a => n = e ? n : a;
        s === n && (s <= 0 ? (o(1), r(10)) : (o(At(s, -1)), r(At(n, 1)))), s <= 0 && o(At(n, -1)), n <= 0 && r(At(s, 1)), this.min = s, this.max = n
    }
    buildTicks() {
        const t = this.options,
            e = {
                min: this._userMin,
                max: this._userMax
            },
            s = Iu(e, this);
        return t.bounds === "ticks" && Bn(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s
    }
    getLabelForValue(t) {
        return t === void 0 ? "0" : Xi(t, this.chart.options.locale, this.options.ticks.format)
    }
    configure() {
        const t = this.min;
        super.configure(), this._startValue = vt(t), this._valueRange = vt(this.max) - vt(t)
    }
    getPixelForValue(t) {
        return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (vt(t) - this._startValue) / this._valueRange)
    }
    getValueForPixel(t) {
        const e = this.getDecimalForPixel(t);
        return Math.pow(10, this._startValue + e * this._valueRange)
    }
}
b(mn, "id", "logarithmic"), b(mn, "defaults", {
    ticks: {
        callback: ri.formatters.logarithmic,
        major: {
            enabled: !0
        }
    }
});

function Ii(i) {
    const t = i.ticks;
    if (t.display && i.display) {
        const e = K(t.backdropPadding);
        return O(t.font && t.font.size, B.font.size) + e.height
    }
    return 0
}

function Fu(i, t, e) {
    return e = z(e) ? e : [e], {
        w: Tl(i, t.string, e),
        h: e.length * t.lineHeight
    }
}

function bn(i, t, e, s, n) {
    return i === s || i === n ? {
        start: t - e / 2,
        end: t + e / 2
    } : i < s || i > n ? {
        start: t - e,
        end: t
    } : {
        start: t,
        end: t + e
    }
}

function Eu(i) {
    const t = {
            l: i.left + i._padding.left,
            r: i.right - i._padding.right,
            t: i.top + i._padding.top,
            b: i.bottom - i._padding.bottom
        },
        e = Object.assign({}, t),
        s = [],
        n = [],
        o = i._pointLabels.length,
        r = i.options.pointLabels,
        a = r.centerPointLabels ? $ / o : 0;
    for (let l = 0; l < o; l++) {
        const c = r.setContext(i.getPointLabelContext(l));
        n[l] = c.padding;
        const h = i.getPointPosition(l, i.drawingArea + n[l], a),
            u = X(c.font),
            d = Fu(i.ctx, u, i._pointLabels[l]);
        s[l] = d;
        const f = et(i.getIndexAngle(l) + a),
            g = Math.round(Vi(f)),
            p = bn(g, h.x, d.w, 0, 180),
            m = bn(g, h.y, d.h, 90, 270);
        Ru(e, t, f, p, m)
    }
    i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = Nu(i, s, n)
}

function Ru(i, t, e, s, n) {
    const o = Math.abs(Math.sin(e)),
        r = Math.abs(Math.cos(e));
    let a = 0,
        l = 0;
    s.start < t.l ? (a = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - a)) : s.end > t.r && (a = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + a)), n.start < t.t ? (l = (t.t - n.start) / r, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / r, i.b = Math.max(i.b, t.b + l))
}

function zu(i, t, e) {
    const s = i.drawingArea,
        {
            extra: n,
            additionalAngle: o,
            padding: r,
            size: a
        } = e,
        l = i.getPointPosition(t, s + n + r, o),
        c = Math.round(Vi(et(l.angle + it))),
        h = Vu(l.y, a.h, c),
        u = Bu(c),
        d = Wu(l.x, a.w, u);
    return {
        visible: !0,
        x: l.x,
        y: h,
        textAlign: u,
        left: d,
        top: h,
        right: d + a.w,
        bottom: h + a.h
    }
}

function Hu(i, t) {
    if (!t) return !0;
    const {
        left: e,
        top: s,
        right: n,
        bottom: o
    } = i;
    return !(xt({
        x: e,
        y: s
    }, t) || xt({
        x: e,
        y: o
    }, t) || xt({
        x: n,
        y: s
    }, t) || xt({
        x: n,
        y: o
    }, t))
}

function Nu(i, t, e) {
    const s = [],
        n = i._pointLabels.length,
        o = i.options,
        {
            centerPointLabels: r,
            display: a
        } = o.pointLabels,
        l = {
            extra: Ii(o) / 2,
            additionalAngle: r ? $ / n : 0
        };
    let c;
    for (let h = 0; h < n; h++) {
        l.padding = e[h], l.size = t[h];
        const u = zu(i, h, l);
        s.push(u), a === "auto" && (u.visible = Hu(u, c), u.visible && (c = u))
    }
    return s
}

function Bu(i) {
    return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right"
}

function Wu(i, t, e) {
    return e === "right" ? i -= t : e === "center" && (i -= t / 2), i
}

function Vu(i, t, e) {
    return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i
}

function Yu(i, t, e) {
    const {
        left: s,
        top: n,
        right: o,
        bottom: r
    } = e, {
        backdropColor: a
    } = t;
    if (!R(a)) {
        const l = $t(t.borderRadius),
            c = K(t.backdropPadding);
        i.fillStyle = a;
        const h = s - c.left,
            u = n - c.top,
            d = o - s + c.width,
            f = r - n + c.height;
        Object.values(l).some(g => g !== 0) ? (i.beginPath(), Qe(i, {
            x: h,
            y: u,
            w: d,
            h: f,
            radius: l
        }), i.fill()) : i.fillRect(h, u, d, f)
    }
}

function ju(i, t) {
    const {
        ctx: e,
        options: {
            pointLabels: s
        }
    } = i;
    for (let n = t - 1; n >= 0; n--) {
        const o = i._pointLabelItems[n];
        if (!o.visible) continue;
        const r = s.setContext(i.getPointLabelContext(n));
        Yu(e, r, o);
        const a = X(r.font),
            {
                x: l,
                y: c,
                textAlign: h
            } = o;
        Nt(e, i._pointLabels[n], l, c + a.lineHeight / 2, a, {
            color: r.color,
            textAlign: h,
            textBaseline: "middle"
        })
    }
}

function Do(i, t, e, s) {
    const {
        ctx: n
    } = i;
    if (e) n.arc(i.xCenter, i.yCenter, t, 0, st);
    else {
        let o = i.getPointPosition(0, t);
        n.moveTo(o.x, o.y);
        for (let r = 1; r < s; r++) o = i.getPointPosition(r, t), n.lineTo(o.x, o.y)
    }
}

function $u(i, t, e, s, n) {
    const o = i.ctx,
        r = t.circular,
        {
            color: a,
            lineWidth: l
        } = t;
    !r && !s || !a || !l || e < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(n.dash), o.lineDashOffset = n.dashOffset, o.beginPath(), Do(i, e, r, s), o.closePath(), o.stroke(), o.restore())
}

function Xu(i, t, e) {
    return Pt(i, {
        label: e,
        index: t,
        type: "pointLabel"
    })
}
class We extends ei {
    constructor(t) {
        super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = []
    }
    setDimensions() {
        const t = this._padding = K(Ii(this.options) / 2),
            e = this.width = this.maxWidth - t.width,
            s = this.height = this.maxHeight - t.height;
        this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2)
    }
    determineDataLimits() {
        const {
            min: t,
            max: e
        } = this.getMinMax(!1);
        this.min = N(t) && !isNaN(t) ? t : 0, this.max = N(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions()
    }
    computeTickLimit() {
        return Math.ceil(this.drawingArea / Ii(this.options))
    }
    generateTickLabels(t) {
        ei.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s) => {
            const n = E(this.options.pointLabels.callback, [e, s], this);
            return n || n === 0 ? n : ""
        }).filter((e, s) => this.chart.getDataVisibility(s))
    }
    fit() {
        const t = this.options;
        t.display && t.pointLabels.display ? Eu(this) : this.setCenterPoint(0, 0, 0, 0)
    }
    setCenterPoint(t, e, s, n) {
        this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n))
    }
    getIndexAngle(t) {
        const e = st / (this._pointLabels.length || 1),
            s = this.options.startAngle || 0;
        return et(t * e + kt(s))
    }
    getDistanceFromCenterForValue(t) {
        if (R(t)) return NaN;
        const e = this.drawingArea / (this.max - this.min);
        return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
    }
    getValueForDistanceFromCenter(t) {
        if (R(t)) return NaN;
        const e = t / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - e : this.min + e
    }
    getPointLabelContext(t) {
        const e = this._pointLabels || [];
        if (t >= 0 && t < e.length) {
            const s = e[t];
            return Xu(this.getContext(), t, s)
        }
    }
    getPointPosition(t, e, s = 0) {
        const n = this.getIndexAngle(t) - it + s;
        return {
            x: Math.cos(n) * e + this.xCenter,
            y: Math.sin(n) * e + this.yCenter,
            angle: n
        }
    }
    getPointPositionForValue(t, e) {
        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
    }
    getBasePosition(t) {
        return this.getPointPositionForValue(t || 0, this.getBaseValue())
    }
    getPointLabelPosition(t) {
        const {
            left: e,
            top: s,
            right: n,
            bottom: o
        } = this._pointLabelItems[t];
        return {
            left: e,
            top: s,
            right: n,
            bottom: o
        }
    }
    drawBackground() {
        const {
            backgroundColor: t,
            grid: {
                circular: e
            }
        } = this.options;
        if (t) {
            const s = this.ctx;
            s.save(), s.beginPath(), Do(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore()
        }
    }
    drawGrid() {
        const t = this.ctx,
            e = this.options,
            {
                angleLines: s,
                grid: n,
                border: o
            } = e,
            r = this._pointLabels.length;
        let a, l, c;
        if (e.pointLabels.display && ju(this, r), n.display && this.ticks.forEach((h, u) => {
                if (u !== 0) {
                    l = this.getDistanceFromCenterForValue(h.value);
                    const d = this.getContext(u),
                        f = n.setContext(d),
                        g = o.setContext(d);
                    $u(this, f, l, r, g)
                }
            }), s.display) {
            for (t.save(), a = r - 1; a >= 0; a--) {
                const h = s.setContext(this.getPointLabelContext(a)),
                    {
                        color: u,
                        lineWidth: d
                    } = h;
                !d || !u || (t.lineWidth = d, t.strokeStyle = u, t.setLineDash(h.borderDash), t.lineDashOffset = h.borderDashOffset, l = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), c = this.getPointPosition(a, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke())
            }
            t.restore()
        }
    }
    drawBorder() {}
    drawLabels() {
        const t = this.ctx,
            e = this.options,
            s = e.ticks;
        if (!s.display) return;
        const n = this.getIndexAngle(0);
        let o, r;
        t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((a, l) => {
            if (l === 0 && !e.reverse) return;
            const c = s.setContext(this.getContext(l)),
                h = X(c.font);
            if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
                t.font = h.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
                const u = K(c.backdropPadding);
                t.fillRect(-r / 2 - u.left, -o - h.size / 2 - u.top, r + u.width, h.size + u.height)
            }
            Nt(t, a.label, 0, -o, h, {
                color: c.color,
                strokeColor: c.textStrokeColor,
                strokeWidth: c.textStrokeWidth
            })
        }), t.restore()
    }
    drawTitle() {}
}
b(We, "id", "radialLinear"), b(We, "defaults", {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
        display: !0,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0
    },
    grid: {
        circular: !1
    },
    startAngle: 0,
    ticks: {
        showLabelBackdrop: !0,
        callback: ri.formatters.numeric
    },
    pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: {
            size: 10
        },
        callback(t) {
            return t
        },
        padding: 5,
        centerPointLabels: !1
    }
}), b(We, "defaultRoutes", {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color"
}), b(We, "descriptors", {
    angleLines: {
        _fallback: "grid"
    }
});
const hi = {
        millisecond: {
            common: !0,
            size: 1,
            steps: 1e3
        },
        second: {
            common: !0,
            size: 1e3,
            steps: 60
        },
        minute: {
            common: !0,
            size: 6e4,
            steps: 60
        },
        hour: {
            common: !0,
            size: 36e5,
            steps: 24
        },
        day: {
            common: !0,
            size: 864e5,
            steps: 30
        },
        week: {
            common: !1,
            size: 6048e5,
            steps: 4
        },
        month: {
            common: !0,
            size: 2628e6,
            steps: 12
        },
        quarter: {
            common: !1,
            size: 7884e6,
            steps: 4
        },
        year: {
            common: !0,
            size: 3154e7
        }
    },
    J = Object.keys(hi);

function xn(i, t) {
    return i - t
}

function yn(i, t) {
    if (R(t)) return null;
    const e = i._adapter,
        {
            parser: s,
            round: n,
            isoWeekday: o
        } = i._parseOpts;
    let r = t;
    return typeof s == "function" && (r = s(r)), N(r) || (r = typeof s == "string" ? e.parse(r, s) : e.parse(r)), r === null ? null : (n && (r = n === "week" && (me(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, n)), +r)
}

function _n(i, t, e, s) {
    const n = J.length;
    for (let o = J.indexOf(i); o < n - 1; ++o) {
        const r = hi[J[o]],
            a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
        if (r.common && Math.ceil((e - t) / (a * r.size)) <= s) return J[o]
    }
    return J[n - 1]
}

function Uu(i, t, e, s, n) {
    for (let o = J.length - 1; o >= J.indexOf(e); o--) {
        const r = J[o];
        if (hi[r].common && i._adapter.diff(n, s, r) >= t - 1) return r
    }
    return J[e ? J.indexOf(e) : 0]
}

function qu(i) {
    for (let t = J.indexOf(i) + 1, e = J.length; t < e; ++t)
        if (hi[J[t]].common) return J[t]
}

function wn(i, t, e) {
    if (!e) i[t] = !0;
    else if (e.length) {
        const {
            lo: s,
            hi: n
        } = Yi(e, t), o = e[s] >= t ? e[s] : e[n];
        i[o] = !0
    }
}

function Zu(i, t, e, s) {
    const n = i._adapter,
        o = +n.startOf(t[0].value, s),
        r = t[t.length - 1].value;
    let a, l;
    for (a = o; a <= r; a = +n.add(a, 1, s)) l = e[a], l >= 0 && (t[l].major = !0);
    return t
}

function vn(i, t, e) {
    const s = [],
        n = {},
        o = t.length;
    let r, a;
    for (r = 0; r < o; ++r) a = t[r], n[a] = r, s.push({
        value: a,
        major: !1
    });
    return o === 0 || !e ? s : Zu(i, s, n, e)
}
class ii extends Bt {
    constructor(t) {
        super(t), this._cache = {
            data: [],
            labels: [],
            all: []
        }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0
    }
    init(t, e = {}) {
        const s = t.time || (t.time = {}),
            n = this._adapter = new ro._date(t.adapters.date);
        n.init(e), le(s.displayFormats, n.formats()), this._parseOpts = {
            parser: s.parser,
            round: s.round,
            isoWeekday: s.isoWeekday
        }, super.init(t), this._normalized = e.normalized
    }
    parse(t, e) {
        return t === void 0 ? null : yn(this, t)
    }
    beforeLayout() {
        super.beforeLayout(), this._cache = {
            data: [],
            labels: [],
            all: []
        }
    }
    determineDataLimits() {
        const t = this.options,
            e = this._adapter,
            s = t.time.unit || "day";
        let {
            min: n,
            max: o,
            minDefined: r,
            maxDefined: a
        } = this.getUserBounds();

        function l(c) {
            !r && !isNaN(c.min) && (n = Math.min(n, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max))
        }(!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = N(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = N(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o)
    }
    _getLabelBounds() {
        const t = this.getLabelTimestamps();
        let e = Number.POSITIVE_INFINITY,
            s = Number.NEGATIVE_INFINITY;
        return t.length && (e = t[0], s = t[t.length - 1]), {
            min: e,
            max: s
        }
    }
    buildTicks() {
        const t = this.options,
            e = t.time,
            s = t.ticks,
            n = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
        t.bounds === "ticks" && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
        const o = this.min,
            r = this.max,
            a = ul(n, o, r);
        return this._unit = e.unit || (s.autoSkip ? _n(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Uu(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : qu(this._unit), this.initOffsets(n), t.reverse && a.reverse(), vn(this, a, this._majorUnit)
    }
    afterAutoSkip() {
        this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(t => +t.value))
    }
    initOffsets(t = []) {
        let e = 0,
            s = 0,
            n, o;
        this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
        const r = t.length < 3 ? .5 : .25;
        e = rt(e, 0, r), s = rt(s, 0, r), this._offsets = {
            start: e,
            end: s,
            factor: 1 / (e + 1 + s)
        }
    }
    _generate() {
        const t = this._adapter,
            e = this.min,
            s = this.max,
            n = this.options,
            o = n.time,
            r = o.unit || _n(o.minUnit, e, s, this._getLabelCapacity(e)),
            a = O(n.ticks.stepSize, 1),
            l = r === "week" ? o.isoWeekday : !1,
            c = me(l) || l === !0,
            h = {};
        let u = e,
            d, f;
        if (c && (u = +t.startOf(u, "isoWeek", l)), u = +t.startOf(u, c ? "day" : r), t.diff(s, e, r) > 1e5 * a) throw new Error(e + " and " + s + " are too far apart with stepSize of " + a + " " + r);
        const g = n.ticks.source === "data" && this.getDataTimestamps();
        for (d = u, f = 0; d < s; d = +t.add(d, a, r), f++) wn(h, d, g);
        return (d === s || n.bounds === "ticks" || f === 1) && wn(h, d, g), Object.keys(h).sort(xn).map(p => +p)
    }
    getLabelForValue(t) {
        const e = this._adapter,
            s = this.options.time;
        return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime)
    }
    format(t, e) {
        const n = this.options.time.displayFormats,
            o = this._unit,
            r = e || n[o];
        return this._adapter.format(t, r)
    }
    _tickFormatFunction(t, e, s, n) {
        const o = this.options,
            r = o.ticks.callback;
        if (r) return E(r, [t, e, s], this);
        const a = o.time.displayFormats,
            l = this._unit,
            c = this._majorUnit,
            h = l && a[l],
            u = c && a[c],
            d = s[e],
            f = c && u && d && d.major;
        return this._adapter.format(t, n || (f ? u : h))
    }
    generateTickLabels(t) {
        let e, s, n;
        for (e = 0, s = t.length; e < s; ++e) n = t[e], n.label = this._tickFormatFunction(n.value, e, t)
    }
    getDecimalForValue(t) {
        return t === null ? NaN : (t - this.min) / (this.max - this.min)
    }
    getPixelForValue(t) {
        const e = this._offsets,
            s = this.getDecimalForValue(t);
        return this.getPixelForDecimal((e.start + s) * e.factor)
    }
    getValueForPixel(t) {
        const e = this._offsets,
            s = this.getDecimalForPixel(t) / e.factor - e.end;
        return this.min + s * (this.max - this.min)
    }
    _getLabelSize(t) {
        const e = this.options.ticks,
            s = this.ctx.measureText(t).width,
            n = kt(this.isHorizontal() ? e.maxRotation : e.minRotation),
            o = Math.cos(n),
            r = Math.sin(n),
            a = this._resolveTickFontOptions(0).size;
        return {
            w: s * o + a * r,
            h: s * r + a * o
        }
    }
    _getLabelCapacity(t) {
        const e = this.options.time,
            s = e.displayFormats,
            n = s[e.unit] || s.millisecond,
            o = this._tickFormatFunction(t, 0, vn(this, [t], this._majorUnit), n),
            r = this._getLabelSize(o),
            a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
        return a > 0 ? a : 1
    }
    getDataTimestamps() {
        let t = this._cache.data || [],
            e, s;
        if (t.length) return t;
        const n = this.getMatchingVisibleMetas();
        if (this._normalized && n.length) return this._cache.data = n[0].controller.getAllParsedValues(this);
        for (e = 0, s = n.length; e < s; ++e) t = t.concat(n[e].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(t)
    }
    getLabelTimestamps() {
        const t = this._cache.labels || [];
        let e, s;
        if (t.length) return t;
        const n = this.getLabels();
        for (e = 0, s = n.length; e < s; ++e) t.push(yn(this, n[e]));
        return this._cache.labels = this._normalized ? t : this.normalize(t)
    }
    normalize(t) {
        return fl(t.sort(xn))
    }
}
b(ii, "id", "time"), b(ii, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
        parser: !1,
        unit: !1,
        round: !1,
        isoWeekday: !1,
        minUnit: "millisecond",
        displayFormats: {}
    },
    ticks: {
        source: "auto",
        callback: !1,
        major: {
            enabled: !1
        }
    }
});

function Ve(i, t, e) {
    let s = 0,
        n = i.length - 1,
        o, r, a, l;
    e ? (t >= i[s].pos && t <= i[n].pos && ({
        lo: s,
        hi: n
    } = Et(i, "pos", t)), {
        pos: o,
        time: a
    } = i[s], {
        pos: r,
        time: l
    } = i[n]) : (t >= i[s].time && t <= i[n].time && ({
        lo: s,
        hi: n
    } = Et(i, "time", t)), {
        time: o,
        pos: a
    } = i[s], {
        time: r,
        pos: l
    } = i[n]);
    const c = r - o;
    return c ? a + (l - a) * (t - o) / c : a
}
class kn extends ii {
    constructor(t) {
        super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0
    }
    initOffsets() {
        const t = this._getTimestampsForTable(),
            e = this._table = this.buildLookupTable(t);
        this._minPos = Ve(e, this.min), this._tableRange = Ve(e, this.max) - this._minPos, super.initOffsets(t)
    }
    buildLookupTable(t) {
        const {
            min: e,
            max: s
        } = this, n = [], o = [];
        let r, a, l, c, h;
        for (r = 0, a = t.length; r < a; ++r) c = t[r], c >= e && c <= s && n.push(c);
        if (n.length < 2) return [{
            time: e,
            pos: 0
        }, {
            time: s,
            pos: 1
        }];
        for (r = 0, a = n.length; r < a; ++r) h = n[r + 1], l = n[r - 1], c = n[r], Math.round((h + l) / 2) !== c && o.push({
            time: c,
            pos: r / (a - 1)
        });
        return o
    }
    _generate() {
        const t = this.min,
            e = this.max;
        let s = super.getDataTimestamps();
        return (!s.includes(t) || !s.length) && s.splice(0, 0, t), (!s.includes(e) || s.length === 1) && s.push(e), s.sort((n, o) => n - o)
    }
    _getTimestampsForTable() {
        let t = this._cache.all || [];
        if (t.length) return t;
        const e = this.getDataTimestamps(),
            s = this.getLabelTimestamps();
        return e.length && s.length ? t = this.normalize(e.concat(s)) : t = e.length ? e : s, t = this._cache.all = t, t
    }
    getDecimalForValue(t) {
        return (Ve(this._table, t) - this._minPos) / this._tableRange
    }
    getValueForPixel(t) {
        const e = this._offsets,
            s = this.getDecimalForPixel(t) / e.factor - e.end;
        return Ve(this._table, s * this._tableRange + this._minPos, !0)
    }
}
b(kn, "id", "timeseries"), b(kn, "defaults", ii.defaults);
const Po = "label";

function Mn(i, t) {
    typeof i == "function" ? i(t) : i && (i.current = t)
}

function Gu(i, t) {
    Object.assign(i.options, t)
}

function To(i, t) {
    i.labels = t
}

function Oo(i, t) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Po;
    const s = [];
    i.datasets = t.map(n => {
        const o = i.datasets.find(r => r[e] === n[e]);
        return !o || !n.data || s.includes(o) ? { ...n
        } : (s.push(o), Object.assign(o, n), o)
    })
}

function Ku(i) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Po;
    const e = {
        labels: [],
        datasets: []
    };
    return To(e, i.labels), Oo(e, i.datasets, t), e
}

function Qu(i, t) {
    let {
        height: e = 150,
        width: s = 300,
        redraw: n = !1,
        datasetIdKey: o,
        type: r,
        data: a,
        options: l,
        plugins: c = [],
        fallbackContent: h,
        updateMode: u,
        ...d
    } = i;
    const f = gt.useRef(null),
        g = gt.useRef(),
        p = () => {
            f.current && (g.current = new bo(f.current, {
                type: r,
                data: Ku(a, o),
                options: l && { ...l
                },
                plugins: c
            }), Mn(t, g.current))
        },
        m = () => {
            Mn(t, null), g.current && (g.current.destroy(), g.current = null)
        };
    return gt.useEffect(() => {
        !n && g.current && l && Gu(g.current, l)
    }, [n, l]), gt.useEffect(() => {
        !n && g.current && To(g.current.config.data, a.labels)
    }, [n, a.labels]), gt.useEffect(() => {
        !n && g.current && a.datasets && Oo(g.current.config.data, a.datasets, o)
    }, [n, a.datasets]), gt.useEffect(() => {
        g.current && (n ? (m(), setTimeout(p)) : g.current.update(u))
    }, [n, l, a.labels, a.datasets, u]), gt.useEffect(() => {
        g.current && (m(), setTimeout(p))
    }, [r]), gt.useEffect(() => (p(), () => m()), []), Ho.createElement("canvas", Object.assign({
        ref: f,
        role: "img",
        height: e,
        width: s
    }, d), h)
}
const ld = gt.forwardRef(Qu);
/*!
 * chartjs-adapter-date-fns v3.0.0
 * https://www.chartjs.org
 * (c) 2022 chartjs-adapter-date-fns Contributors
 * Released under the MIT license
 */
const Ju = {
    datetime: "MMM d, yyyy, h:mm:ss aaaa",
    millisecond: "h:mm:ss.SSS aaaa",
    second: "h:mm:ss aaaa",
    minute: "h:mm aaaa",
    hour: "ha",
    day: "MMM d",
    week: "PP",
    month: "MMM yyyy",
    quarter: "qqq - yyyy",
    year: "yyyy"
};
ro._date.override({
    _id: "date-fns",
    formats: function() {
        return Ju
    },
    parse: function(i, t) {
        if (i === null || typeof i > "u") return null;
        const e = typeof i;
        return e === "number" || i instanceof Date ? i = S(i) : e === "string" && (typeof t == "string" ? i = la(i, t, new Date, this.options) : i = da(i, this.options)), No(i) ? i.getTime() : null
    },
    format: function(i, t) {
        return Bo(i, t, this.options)
    },
    add: function(i, t, e) {
        switch (e) {
            case "millisecond":
                return oi(i, t);
            case "second":
                return Xo(i, t);
            case "minute":
                return jo(i, t);
            case "hour":
                return Yo(i, t);
            case "day":
                return ni(i, t);
            case "week":
                return Uo(i, t);
            case "month":
                return Ei(i, t);
            case "quarter":
                return $o(i, t);
            case "year":
                return qo(i, t);
            default:
                return i
        }
    },
    diff: function(i, t, e) {
        switch (e) {
            case "millisecond":
                return si(i, t);
            case "second":
                return er(i, t);
            case "minute":
                return Qo(i, t);
            case "hour":
                return Ko(i, t);
            case "day":
                return Dn(i, t);
            case "week":
                return ir(i, t);
            case "month":
                return Cn(i, t);
            case "quarter":
                return tr(i, t);
            case "year":
                return sr(i, t);
            default:
                return 0
        }
    },
    startOf: function(i, t, e) {
        switch (t) {
            case "second":
                return ua(i);
            case "minute":
                return nr(i);
            case "hour":
                return ha(i);
            case "day":
                return Vo(i);
            case "week":
                return fe(i);
            case "isoWeek":
                return fe(i, {
                    weekStartsOn: +e
                });
            case "month":
                return rr(i);
            case "quarter":
                return or(i);
            case "year":
                return Wo(i);
            default:
                return i
        }
    },
    endOf: function(i, t) {
        switch (t) {
            case "second":
                return dr(i);
            case "minute":
                return hr(i);
            case "hour":
                return lr(i);
            case "day":
                return On(i);
            case "week":
                return cr(i);
            case "month":
                return Sn(i);
            case "quarter":
                return ur(i);
            case "year":
                return ar(i);
            default:
                return i
        }
    }
});
var ki = {
        line: {
            color: "#F66",
            width: 1,
            dashPattern: []
        },
        sync: {
            enabled: !0,
            group: 1,
            suppressTooltips: !1
        },
        zoom: {
            enabled: !0,
            zoomboxBackgroundColor: "rgba(66,133,244,0.2)",
            zoomboxBorderColor: "#48F",
            zoomButtonText: "Reset Zoom",
            zoomButtonClass: "reset-zoom"
        },
        snap: {
            enabled: !1
        },
        callbacks: {
            beforeZoom: function(i, t) {
                return !0
            },
            afterZoom: function(i, t) {}
        }
    },
    cd = {
        id: "crosshair",
        afterInit: function(i) {
            if (i.config.options.scales.x) {
                var t = i.config.options.scales.x.type;
                if (!(t !== "linear" && t !== "time" && t !== "category" && t !== "logarithmic")) {
                    i.options.plugins.crosshair === void 0 && (i.options.plugins.crosshair = ki), i.crosshair = {
                        enabled: !1,
                        suppressUpdate: !1,
                        x: null,
                        originalData: [],
                        originalXRange: {},
                        dragStarted: !1,
                        dragStartX: null,
                        dragEndX: null,
                        suppressTooltips: !1,
                        ignoreNextEvents: 0,
                        reset: (function() {
                            this.resetZoom(i, !1, !1)
                        }).bind(this)
                    };
                    var e = this.getOption(i, "sync", "enabled");
                    e && (i.crosshair.syncEventHandler = (function(s) {
                        this.handleSyncEvent(i, s)
                    }).bind(this), i.crosshair.resetZoomEventHandler = (function(s) {
                        var n = this.getOption(i, "sync", "group");
                        s.chartId !== i.id && s.syncGroup === n && this.resetZoom(i, !0)
                    }).bind(this), window.addEventListener("sync-event", i.crosshair.syncEventHandler), window.addEventListener("reset-zoom-event", i.crosshair.resetZoomEventHandler)), i.panZoom = this.panZoom.bind(this, i)
                }
            }
        },
        afterDestroy: function(i) {
            var t = this.getOption(i, "sync", "enabled");
            t && (window.removeEventListener("sync-event", i.crosshair.syncEventHandler), window.removeEventListener("reset-zoom-event", i.crosshair.resetZoomEventHandler))
        },
        panZoom: function(i, t) {
            if (i.crosshair.originalData.length !== 0) {
                var e = i.crosshair.end - i.crosshair.start,
                    s = i.crosshair.min,
                    n = i.crosshair.max;
                t < 0 ? (i.crosshair.start = Math.max(i.crosshair.start + t, s), i.crosshair.end = i.crosshair.start === s ? s + e : i.crosshair.end + t) : (i.crosshair.end = Math.min(i.crosshair.end + t, i.crosshair.max), i.crosshair.start = i.crosshair.end === n ? n - e : i.crosshair.start + t), this.doZoom(i, i.crosshair.start, i.crosshair.end)
            }
        },
        getOption: function(i, t, e) {
            return O(i.options.plugins.crosshair[t] ? i.options.plugins.crosshair[t][e] : void 0, ki[t][e])
        },
        getXScale: function(i) {
            return i.data.datasets.length ? i.scales[i.getDatasetMeta(0).xAxisID] : null
        },
        getYScale: function(i) {
            return i.scales[i.getDatasetMeta(0).yAxisID]
        },
        handleSyncEvent: function(i, t) {
            var e = this.getOption(i, "sync", "group");
            if (t.chartId !== i.id && t.syncGroup === e) {
                var s = this.getXScale(i);
                if (s) {
                    var n = t.original.native.buttons === void 0 ? t.original.native.which : t.original.native.buttons;
                    t.original.type === "mouseup" && (n = 0);
                    var o = {
                        type: t.original.type == "click" ? "mousemove" : t.original.type,
                        chart: i,
                        x: s.getPixelForValue(t.xValue),
                        y: t.original.y,
                        native: {
                            buttons: n
                        },
                        stop: !0
                    };
                    i._eventHandler(o)
                }
            }
        },
        afterEvent: function(i, t) {
            if (i.config.options.scales.x.length == 0) return;
            let e = t.event;
            var s = i.config.options.scales.x.type;
            if (!(s !== "linear" && s !== "time" && s !== "category" && xscaleType !== "logarithmic")) {
                var n = this.getXScale(i);
                if (n) {
                    if (i.crosshair.ignoreNextEvents > 0) {
                        i.crosshair.ignoreNextEvents -= 1;
                        return
                    }
                    var o = e.native.buttons === void 0 ? e.native.which : e.native.buttons;
                    e.native.type === "mouseup" && (o = 0);
                    var r = this.getOption(i, "sync", "enabled"),
                        a = this.getOption(i, "sync", "group");
                    if (!e.stop && r) {
                        var t = new CustomEvent("sync-event");
                        t.chartId = i.id, t.syncGroup = a, t.original = e, t.xValue = n.getValueForPixel(e.x), window.dispatchEvent(t)
                    }
                    var l = this.getOption(i, "sync", "suppressTooltips");
                    if (i.crosshair.suppressTooltips = e.stop && l, i.crosshair.enabled = e.type !== "mouseout" && e.x > n.getPixelForValue(n.min) && e.x < n.getPixelForValue(n.max), !i.crosshair.enabled && !i.crosshair.suppressUpdate) return e.x > n.getPixelForValue(n.max) && (i.crosshair.suppressUpdate = !0, i.update("none")), i.crosshair.dragStarted = !1, !1;
                    i.crosshair.suppressUpdate = !1;
                    var c = this.getOption(i, "zoom", "enabled");
                    if (o === 1 && !i.crosshair.dragStarted && c && (i.crosshair.dragStartX = e.x, i.crosshair.dragStarted = !0), i.crosshair.dragStarted && o === 0) {
                        i.crosshair.dragStarted = !1;
                        var h = n.getValueForPixel(i.crosshair.dragStartX),
                            u = n.getValueForPixel(i.crosshair.x);
                        Math.abs(i.crosshair.dragStartX - i.crosshair.x) > 1 && this.doZoom(i, h, u), i.update("none")
                    }
                    i.crosshair.x = e.x, i.draw()
                }
            }
        },
        afterDraw: function(i) {
            if (i.crosshair.enabled) return i.crosshair.dragStarted ? this.drawZoombox(i) : (this.drawTraceLine(i), this.interpolateValues(i), this.drawTracePoints(i)), !0
        },
        beforeTooltipDraw: function(i) {
            return !i.crosshair.dragStarted && !i.crosshair.suppressTooltips
        },
        resetZoom: function(i) {
            var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
            if (e) {
                if (i.crosshair.originalData.length > 0)
                    for (var s = 0; s < i.data.datasets.length; s++) {
                        var n = i.data.datasets[s];
                        n.data = i.crosshair.originalData.shift(0)
                    }
                i.crosshair.originalXRange.min ? (i.options.scales.x.min = i.crosshair.originalXRange.min, i.crosshair.originalXRange.min = null) : delete i.options.scales.x.min, i.crosshair.originalXRange.max ? (i.options.scales.x.max = i.crosshair.originalXRange.max, i.crosshair.originalXRange.max = null) : delete i.options.scales.x.max
            }
            i.crosshair.button && i.crosshair.button.parentNode && (i.crosshair.button.parentNode.removeChild(i.crosshair.button), i.crosshair.button = !1);
            var o = this.getOption(i, "sync", "enabled");
            if (!t && e && o) {
                var r = this.getOption(i, "sync", "group"),
                    a = new CustomEvent("reset-zoom-event");
                a.chartId = i.id, a.syncGroup = r, window.dispatchEvent(a)
            }
            e && i.update("none")
        },
        doZoom: function(i, t, e) {
            if (t > e) {
                var s = t;
                t = e, e = s
            }
            var n = O(i.options.plugins.crosshair.callbacks ? i.options.plugins.crosshair.callbacks.beforeZoom : void 0, ki.callbacks.beforeZoom);
            if (!n(t, e)) return !1;
            if (i.crosshair.dragStarted = !1, i.options.scales.x.min && i.crosshair.originalData.length === 0 && (i.crosshair.originalXRange.min = i.options.scales.x.min), i.options.scales.x.max && i.crosshair.originalData.length === 0 && (i.crosshair.originalXRange.max = i.options.scales.x.max), !i.crosshair.button) {
                var o = document.createElement("button"),
                    r = this.getOption(i, "zoom", "zoomButtonText"),
                    a = this.getOption(i, "zoom", "zoomButtonClass"),
                    l = document.createTextNode(r);
                o.appendChild(l), o.className = a, o.addEventListener("click", (function() {
                    this.resetZoom(i)
                }).bind(this)), i.canvas.parentNode.appendChild(o), i.crosshair.button = o
            }
            i.options.scales.x.min = t, i.options.scales.x.max = e;
            var c = i.crosshair.originalData.length === 0,
                h = i.config.options.scales.x.type !== "category";
            if (h)
                for (var u = 0; u < i.data.datasets.length; u++) {
                    var d = [],
                        f = 0,
                        g = !1,
                        p = !1;
                    c && (i.crosshair.originalData[u] = i.data.datasets[u].data);
                    for (var m = i.crosshair.originalData[u], x = 0; x < m.length; x++) {
                        var v = m[x],
                            k = v.x !== void 0 ? v.x : NaN;
                        k >= t && !g && f > 0 && (d.push(m[f - 1]), g = !0), k >= t && k <= e && d.push(v), k > e && !p && f < m.length && (d.push(v), p = !0), f += 1
                    }
                    i.data.datasets[u].data = d
                }
            if (i.crosshair.start = t, i.crosshair.end = e, c) {
                var M = this.getXScale(i);
                i.crosshair.min = M.min, i.crosshair.max = M.max
            }
            i.crosshair.ignoreNextEvents = 2, i.update("none");
            var w = this.getOption(i, "callbacks", "afterZoom");
            w(t, e)
        },
        drawZoombox: function(i) {
            var t = this.getYScale(i),
                e = this.getOption(i, "zoom", "zoomboxBorderColor"),
                s = this.getOption(i, "zoom", "zoomboxBackgroundColor");
            i.ctx.beginPath(), i.ctx.rect(i.crosshair.dragStartX, t.getPixelForValue(t.max), i.crosshair.x - i.crosshair.dragStartX, t.getPixelForValue(t.min) - t.getPixelForValue(t.max)), i.ctx.lineWidth = 1, i.ctx.strokeStyle = e, i.ctx.fillStyle = s, i.ctx.fill(), i.ctx.fillStyle = "", i.ctx.stroke(), i.ctx.closePath()
        },
        drawTraceLine: function(i) {
            var t = this.getYScale(i),
                e = this.getOption(i, "line", "width"),
                s = this.getOption(i, "line", "color"),
                n = this.getOption(i, "line", "dashPattern"),
                o = this.getOption(i, "snap", "enabled"),
                r = i.crosshair.x;
            o && i._active.length && (r = i._active[0].element.x), i.ctx.beginPath(), i.ctx.setLineDash(n), i.ctx.moveTo(r, t.getPixelForValue(t.max)), i.ctx.lineWidth = e, i.ctx.strokeStyle = s, i.ctx.lineTo(r, t.getPixelForValue(t.min)), i.ctx.stroke(), i.ctx.setLineDash([])
        },
        drawTracePoints: function(i) {
            for (var t = 0; t < i.data.datasets.length; t++) {
                var e = i.data.datasets[t],
                    s = i.getDatasetMeta(t),
                    n = i.scales[s.yAxisID];
                s.hidden || !e.interpolate || (i.ctx.beginPath(), i.ctx.arc(i.crosshair.x, n.getPixelForValue(e.interpolatedValue), 3, 0, 2 * Math.PI, !1), i.ctx.fillStyle = "white", i.ctx.lineWidth = 2, i.ctx.strokeStyle = e.borderColor, i.ctx.fill(), i.ctx.stroke())
            }
        },
        interpolateValues: function(i) {
            for (var t = 0; t < i.data.datasets.length; t++) {
                var e = i.data.datasets[t],
                    s = i.getDatasetMeta(t),
                    n = i.scales[s.xAxisID],
                    o = n.getValueForPixel(i.crosshair.x);
                if (!(s.hidden || !e.interpolate)) {
                    var r = e.data,
                        a = r.findIndex(function(u) {
                            return u.x >= o
                        }),
                        l = r[a - 1],
                        c = r[a];
                    if (i.data.datasets[t].steppedLine && l) e.interpolatedValue = l.y;
                    else if (l && c) {
                        var h = (c.y - l.y) / (c.x - l.x);
                        e.interpolatedValue = l.y + (o - l.x) * h
                    } else e.interpolatedValue = NaN
                }
            }
        }
    };
export {
    bo as C, fn as L, wi as P, ii as T, un as a, Rt as b, ad as c, od as d, bi as e, cd as f, ld as g, nd as i, rd as p
};