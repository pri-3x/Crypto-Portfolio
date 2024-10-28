(function() {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload")) return;
    for (const t of document.querySelectorAll('link[rel="modulepreload"]')) c(t);
    new MutationObserver(t => {
        for (const e of t)
            if (e.type === "childList")
                for (const r of e.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && c(r)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function i(t) {
        const e = {};
        return t.integrity && (e.integrity = t.integrity), t.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), t.crossOrigin === "use-credentials" ? e.credentials = "include" : t.crossOrigin === "anonymous" ? e.credentials = "omit" : e.credentials = "same-origin", e
    }

    function c(t) {
        if (t.ep) return;
        t.ep = !0;
        const e = i(t);
        fetch(t.href, e)
    }
})();
const d = "modulepreload",
    m = function(s) {
        return "/" + s
    },
    u = {},
    h = function(o, i, c) {
        if (!i || i.length === 0) return o();
        const t = document.getElementsByTagName("link");
        return Promise.all(i.map(e => {
            if (e = m(e), e in u) return;
            u[e] = !0;
            const r = e.endsWith(".css"),
                f = r ? '[rel="stylesheet"]' : "";
            if (!!c)
                for (let l = t.length - 1; l >= 0; l--) {
                    const a = t[l];
                    if (a.href === e && (!r || a.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${e}"]${f}`)) return;
            const n = document.createElement("link");
            if (n.rel = r ? "stylesheet" : d, r || (n.as = "script", n.crossOrigin = ""), n.href = e, document.head.appendChild(n), r) return new Promise((l, a) => {
                n.addEventListener("load", l), n.addEventListener("error", () => a(new Error(`Unable to preload CSS for ${e}`)))
            })
        })).then(() => o()).catch(e => {
            const r = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (r.payload = e, window.dispatchEvent(r), !r.defaultPrevented) throw e
        })
    };
h(() =>
    import ("./bootstrap-7c5c33c8.js").then(s => s.qg), ["assets/bootstrap-7c5c33c8.js", "assets/bootstrap-61672557.css"]);
window.global || (window.global = window);
export {
    h as _
};