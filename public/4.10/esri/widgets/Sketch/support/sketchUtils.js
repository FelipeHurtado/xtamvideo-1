// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../geometry ../../../geometry/Circle ../../../geometry/geometryEngine ../../../geometry/support/spatialReferenceUtils".split(
    " "
), function(v, h, k, t, r, u) {
    function q(a, b) {
        a = a.map(function(a) {
            return Array.apply([], a);
        });
        a.forEach(function(a, b) {
            (a[0][0] === a[a.length - 1][0] &&
                a[0][1] === a[a.length - 1][1]) ||
                a.push(a[0]);
        });
        var c = new k.Polygon({
            rings: a,
            spatialReference: b.spatialReference
        });
        c.rings.forEach(function(a) {
            c.isClockwise(a) || a.reverse();
        });
        c.isSelfIntersecting &&
            u.isValid(b.spatialReference) &&
            (c = r.simplify(c));
        return c;
    }
    Object.defineProperty(h, "__esModule", { value: !0 });
    var b = new k.ScreenPoint(),
        f = new k.ScreenPoint(),
        l = new k.Point(),
        m = new k.Point(),
        n = new k.Point(),
        p = new k.Point();
    h.createPolygon = q;
    h.createPolyline = function(a, b) {
        return new k.Polyline({
            paths: a,
            spatialReference: b.spatialReference
        });
    };
    h.createMultipoint = function(a, b) {
        return new k.Multipoint({
            points: a,
            spatialReference: b.spatialReference
        });
    };
    h.createRectangle = function(a, c, d) {
        var g = [];
        c.toScreen(a[0][0], a[0][1], null, b);
        c.toScreen(a[1][0], a[1][1], null, f);
        d
            ? ((a = Math.round(f.x - b.x)),
              (d = Math.round(f.y - b.y)),
              g.push(
                  [b.x - a, b.y - d],
                  [f.x, b.y - d],
                  [f.x, f.y],
                  [b.x - a, f.y]
              ))
            : g.push([b.x, b.y], [f.x, b.y], [f.x, f.y], [b.x, f.y]);
        g = g.map(function(a) {
            c.toMap(a[0], a[1], p);
            return [p.x, p.y];
        });
        return q([g], c);
    };
    h.createSquare = function(a, c, d) {
        var g = [];
        c.toScreen(a[0][0], a[0][1], null, b);
        c.toScreen(a[1][0], a[1][1], null, f);
        var e = Math.round(f.x - b.x),
            h = Math.round(f.y - b.y);
        a = Math.max(Math.abs(e), Math.abs(h));
        d
            ? ((d = new k.ScreenPoint(b.x + a, b.y + a)),
              (a = new k.ScreenPoint(b.x - a, b.y - a)),
              g.push([d.x, a.y], [a.x, a.y], [a.x, d.y], [d.x, d.y]))
            : ((d = new k.ScreenPoint({
                  x: 0 < e ? b.x + a : b.x - a,
                  y: 0 < h ? b.y + a : b.y - a
              })),
              g.push([b.x, b.y], [d.x, b.y], [d.x, d.y], [b.x, d.y]));
        g = g.map(function(a) {
            c.toMap(a[0], a[1], p);
            return [p.x, p.y];
        });
        return q([g], c);
    };
    h.createEllipse = function(a, c, d) {
        c.toScreen(a[0][0], a[0][1], null, b);
        c.toScreen(a[1][0], a[1][1], null, f);
        a = Math.round(f.x - b.x);
        var g = Math.round(f.y - b.y),
            e = new k.Point({
                x: d ? b.x : b.x + a / 2,
                y: d ? b.y : b.y + g / 2
            });
        c = k.Polygon.createEllipse({
            center: e,
            longAxis: d ? a : a / 2,
            shortAxis: d ? g : g / 2,
            numberOfPoints: 60,
            view: c
        });
        c.isClockwise(c.rings[0]) || (c.rings[0].reverse(), (c = c.clone()));
        return c;
    };
    h.createCircle = function(a, c, d) {
        var g = null,
            e = null;
        if (d)
            (g = new k.Point({
                x: a[0][0],
                y: a[0][1],
                spatialReference: c.spatialReference
            })),
                (e = new k.Point({
                    x: a[1][0],
                    y: a[1][1],
                    spatialReference: c.spatialReference
                }));
        else {
            c.toScreen(a[0][0], a[0][1], null, b);
            c.toScreen(a[1][0], a[1][1], null, f);
            a = Math.round(f.x - b.x);
            d = Math.round(f.y - b.y);
            var e = Math.max(Math.abs(a), Math.abs(d)),
                h = new k.ScreenPoint({
                    x: 0 < a ? b.x + e / 2 : b.x - e / 2,
                    y: 0 < d ? b.y + e / 2 : b.y - e / 2
                }),
                g = c.toMap(h),
                e = c.toMap(
                    Math.abs(a) > Math.abs(d) ? h.x - e / 2 : h.x,
                    Math.abs(a) > Math.abs(d) ? h.y : h.y - e / 2
                );
        }
        a = r.distance(g, e, "meters");
        return new t({
            center: g,
            radius: a,
            radiusUnit: "meters",
            spatialReference: c.spatialReference
        });
    };
    h.createTriangle = function(a, c, d, g) {
        c.toScreen(a[0][0], a[0][1], null, b);
        c.toScreen(a[1][0], a[1][1], null, f);
        a = Math.round(f.x - b.x);
        var e = Math.round(f.y - b.y);
        d && g
            ? ((a = Math.sqrt(a * a + e * e)),
              c.toMap(-0.8660254037844386 * a + b.x, 0.5 * a + b.y, l),
              c.toMap(0.8660254037844386 * a + b.x, 0.5 * a + b.y, m),
              c.toMap(b.x, b.y - a, n))
            : d
            ? (c.toMap(0 < e ? f.x : b.x, b.y + e, l),
              c.toMap(b.x - a, 0 < e ? f.y : b.y - e, m),
              c.toMap(0 < e ? b.x : f.x, b.y - e, n))
            : g
            ? ((d = Math.max(Math.abs(a), Math.abs(e))),
              (g = (d * Math.sqrt(3)) / 2),
              c.toMap(b.x, 0 < e ? b.y + d : b.y, l),
              c.toMap(0 < a ? b.x + d : b.x - d, 0 < e ? b.y + d : b.y, m),
              c.toMap(
                  0 < a ? b.x + d / 2 : b.x - d / 2,
                  0 < e ? b.y + d - g : b.y - g,
                  n
              ))
            : (c.toMap(0 < e ? b.x + a / 2 : f.x, b.y, l),
              c.toMap(0 < e ? b.x : b.x + a / 2, f.y, m),
              c.toMap(0 < e ? f.x : b.x, 0 < e ? f.y : b.y, n));
        return q([[[l.x, l.y], [n.x, n.y], [m.x, m.y]]], c);
    };
    h.getVerticesForPolygon = function(a) {
        a = a.rings.map(function(a) {
            return Array.apply([], a);
        });
        a.forEach(function(a) {
            a[0][0] === a[a.length - 1][0] &&
                a[0][1] === a[a.length - 1][1] &&
                a.pop();
        });
        return a;
    };
    h.getVerticesForPolyline = function(a) {
        return a.paths.map(function(a) {
            return Array.apply([], a);
        });
    };
});
