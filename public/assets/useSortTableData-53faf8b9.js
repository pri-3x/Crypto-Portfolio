import {
    j as n,
    r as a,
    hR as x
} from "./bootstrap-7c5c33c8.js";
const D = ({
        className: o
    }) => n.jsx("svg", {
        width: "10",
        height: "5",
        viewBox: "0 0 10 5",
        className: o,
        xmlns: "http://www.w3.org/2000/svg",
        children: n.jsx("path", {
            d: "M10 5L5 -4.37114e-07L0 5L10 5Z"
        })
    }),
    m = ({
        defaultValue: o,
        data: i,
        columns: c
    }) => {
        const [p, e] = a.useState(o), [r, s] = p.split(" "), h = (c.find(t => t.sortId === r) || c.find(t => t.sortDefault)).sortSelector, d = x(i, [h(s)], [s]);
        a.useEffect(() => {
            e(o)
        }, [o]);
        const l = a.useCallback(t => () => {
            r === t ? s === "desc" ? e(`${t} asc`) : s === "asc" && e("") : e(`${t} desc`)
        }, [r, s, e]);
        return {
            sortType: r,
            sortDirection: s,
            handleSort: l,
            sortedData: d
        }
    };
export {
    D as A, m as u
};