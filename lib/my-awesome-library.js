!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define("my-awesome-library", [], t)
      : "object" == typeof exports
        ? (exports["my-awesome-library"] = t())
        : (e["my-awesome-library"] = t());
})(this, function() {
  return (function(e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var r = (n[o] = { i: o, l: !1, exports: {} });
      return e[o].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function(e, n, o) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
          });
      }),
      (t.n = function(e) {
        var n =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = "./src/index.js"))
    );
  })({
    "./node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize!./src/components/Button/Button.css": function(
      e,
      t,
      n
    ) {
      (t = e.exports = n("./node_modules/css-loader/lib/css-base.js")(!0)),
        t.push([
          e.i,
          ".Button__button___2a549 {\n\tpadding: 10px 25px;\n\tcolor: #fff;\n\tbackground-color: #ffab19;\n\tborder-radius: 7px;\n\ttext-align: center;\n\tcursor: pointer;\n\tborder: 0;\n\ttext-transform: uppercase;\n\tfont-size: 16px;\n\tline-height: 19px;\n}",
          "",
          {
            version: 3,
            sources: [
              "/Users/tobiasmartin/Projects/ds-workshop-styleguidist-boilerplate/src/components/Button/Button.css"
            ],
            names: [],
            mappings:
              "AAAA;CACC,mBAAmB;CACnB,YAAY;CACZ,0BAA0B;CAC1B,mBAAmB;CACnB,mBAAmB;CACnB,gBAAgB;CAChB,UAAU;CACV,0BAA0B;CAC1B,gBAAgB;CAChB,kBAAkB;CAClB",
            file: "Button.css",
            sourcesContent: [
              ".button {\n\tpadding: 10px 25px;\n\tcolor: #fff;\n\tbackground-color: #ffab19;\n\tborder-radius: 7px;\n\ttext-align: center;\n\tcursor: pointer;\n\tborder: 0;\n\ttext-transform: uppercase;\n\tfont-size: 16px;\n\tline-height: 19px;\n}"
            ],
            sourceRoot: ""
          }
        ]),
        (t.locals = { button: "Button__button___2a549" });
    },
    "./node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize!./src/components/Placeholder/Placeholder.css": function(
      e,
      t,
      n
    ) {
      (t = e.exports = n("./node_modules/css-loader/lib/css-base.js")(!0)),
        t.push([
          e.i,
          ".Placeholder__placeholder___3l3EE {\n\tbackground: #ccc;\n}\n",
          "",
          {
            version: 3,
            sources: [
              "/Users/tobiasmartin/Projects/ds-workshop-styleguidist-boilerplate/src/components/Placeholder/Placeholder.css"
            ],
            names: [],
            mappings: "AAAA;CACC,iBAAiB;CACjB",
            file: "Placeholder.css",
            sourcesContent: [".placeholder {\n\tbackground: #ccc;\n}\n"],
            sourceRoot: ""
          }
        ]),
        (t.locals = { placeholder: "Placeholder__placeholder___3l3EE" });
    },
    "./node_modules/css-loader/lib/css-base.js": function(e, t) {
      function n(e, t) {
        var n = e[1] || "",
          r = e[3];
        if (!r) return n;
        if (t && "function" == typeof btoa) {
          var s = o(r);
          return [n]
            .concat(
              r.sources.map(function(e) {
                return "/*# sourceURL=" + r.sourceRoot + e + " */";
              })
            )
            .concat([s])
            .join("\n");
        }
        return [n].join("\n");
      }
      function o(e) {
        return (
          "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
          btoa(unescape(encodeURIComponent(JSON.stringify(e)))) +
          " */"
        );
      }
      e.exports = function(e) {
        var t = [];
        return (
          (t.toString = function() {
            return this.map(function(t) {
              var o = n(t, e);
              return t[2] ? "@media " + t[2] + "{" + o + "}" : o;
            }).join("");
          }),
          (t.i = function(e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var o = {}, r = 0; r < this.length; r++) {
              var s = this[r][0];
              "number" == typeof s && (o[s] = !0);
            }
            for (r = 0; r < e.length; r++) {
              var a = e[r];
              ("number" == typeof a[0] && o[a[0]]) ||
                (n && !a[2]
                  ? (a[2] = n)
                  : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                t.push(a));
            }
          }),
          t
        );
      };
    },
    "./node_modules/style-loader/lib/addStyles.js": function(e, t, n) {
      function o(e, t) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n],
            r = m[o.id];
          if (r) {
            r.refs++;
            for (var s = 0; s < r.parts.length; s++) r.parts[s](o.parts[s]);
            for (; s < o.parts.length; s++) r.parts.push(u(o.parts[s], t));
          } else {
            for (var a = [], s = 0; s < o.parts.length; s++)
              a.push(u(o.parts[s], t));
            m[o.id] = { id: o.id, refs: 1, parts: a };
          }
        }
      }
      function r(e, t) {
        for (var n = [], o = {}, r = 0; r < e.length; r++) {
          var s = e[r],
            a = t.base ? s[0] + t.base : s[0],
            i = s[1],
            c = s[2],
            l = s[3],
            u = { css: i, media: c, sourceMap: l };
          o[a] ? o[a].parts.push(u) : n.push((o[a] = { id: a, parts: [u] }));
        }
        return n;
      }
      function s(e, t) {
        var n = b(e.insertInto);
        if (!n)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        var o = _[_.length - 1];
        if ("top" === e.insertAt)
          o
            ? o.nextSibling
              ? n.insertBefore(t, o.nextSibling)
              : n.appendChild(t)
            : n.insertBefore(t, n.firstChild),
            _.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
          if ("object" != typeof e.insertAt || !e.insertAt.before)
            throw new Error(
              "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
            );
          var r = b(e.insertInto + " " + e.insertAt.before);
          n.insertBefore(t, r);
        }
      }
      function a(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = _.indexOf(e);
        t >= 0 && _.splice(t, 1);
      }
      function i(e) {
        var t = document.createElement("style");
        return (e.attrs.type = "text/css"), l(t, e.attrs), s(e, t), t;
      }
      function c(e) {
        var t = document.createElement("link");
        return (
          (e.attrs.type = "text/css"),
          (e.attrs.rel = "stylesheet"),
          l(t, e.attrs),
          s(e, t),
          t
        );
      }
      function l(e, t) {
        Object.keys(t).forEach(function(n) {
          e.setAttribute(n, t[n]);
        });
      }
      function u(e, t) {
        var n, o, r, s;
        if (t.transform && e.css) {
          if (!(s = t.transform(e.css))) return function() {};
          e.css = s;
        }
        if (t.singleton) {
          var l = v++;
          (n = y || (y = i(t))),
            (o = d.bind(null, n, l, !1)),
            (r = d.bind(null, n, l, !0));
        } else
          e.sourceMap &&
          "function" == typeof URL &&
          "function" == typeof URL.createObjectURL &&
          "function" == typeof URL.revokeObjectURL &&
          "function" == typeof Blob &&
          "function" == typeof btoa
            ? ((n = c(t)),
              (o = p.bind(null, n, t)),
              (r = function() {
                a(n), n.href && URL.revokeObjectURL(n.href);
              }))
            : ((n = i(t)),
              (o = f.bind(null, n)),
              (r = function() {
                a(n);
              }));
        return (
          o(e),
          function(t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              o((e = t));
            } else r();
          }
        );
      }
      function d(e, t, n, o) {
        var r = n ? "" : o.css;
        if (e.styleSheet) e.styleSheet.cssText = x(t, r);
        else {
          var s = document.createTextNode(r),
            a = e.childNodes;
          a[t] && e.removeChild(a[t]),
            a.length ? e.insertBefore(s, a[t]) : e.appendChild(s);
        }
      }
      function f(e, t) {
        var n = t.css,
          o = t.media;
        if ((o && e.setAttribute("media", o), e.styleSheet))
          e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      }
      function p(e, t, n) {
        var o = n.css,
          r = n.sourceMap,
          s = void 0 === t.convertToAbsoluteUrls && r;
        (t.convertToAbsoluteUrls || s) && (o = g(o)),
          r &&
            (o +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
              " */");
        var a = new Blob([o], { type: "text/css" }),
          i = e.href;
        (e.href = URL.createObjectURL(a)), i && URL.revokeObjectURL(i);
      }
      var m = {},
        h = (function(e) {
          var t;
          return function() {
            return void 0 === t && (t = e.apply(this, arguments)), t;
          };
        })(function() {
          return window && document && document.all && !window.atob;
        }),
        b = (function(e) {
          var t = {};
          return function(n) {
            if (void 0 === t[n]) {
              var o = e.call(this, n);
              if (o instanceof window.HTMLIFrameElement)
                try {
                  o = o.contentDocument.head;
                } catch (e) {
                  o = null;
                }
              t[n] = o;
            }
            return t[n];
          };
        })(function(e) {
          return document.querySelector(e);
        }),
        y = null,
        v = 0,
        _ = [],
        g = n("./node_modules/style-loader/lib/urls.js");
      e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
          throw new Error(
            "The style-loader cannot be used in a non-browser environment"
          );
        (t = t || {}),
          (t.attrs = "object" == typeof t.attrs ? t.attrs : {}),
          t.singleton || (t.singleton = h()),
          t.insertInto || (t.insertInto = "head"),
          t.insertAt || (t.insertAt = "bottom");
        var n = r(e, t);
        return (
          o(n, t),
          function(e) {
            for (var s = [], a = 0; a < n.length; a++) {
              var i = n[a],
                c = m[i.id];
              c.refs--, s.push(c);
            }
            if (e) {
              o(r(e, t), t);
            }
            for (var a = 0; a < s.length; a++) {
              var c = s[a];
              if (0 === c.refs) {
                for (var l = 0; l < c.parts.length; l++) c.parts[l]();
                delete m[c.id];
              }
            }
          }
        );
      };
      var x = (function() {
        var e = [];
        return function(t, n) {
          return (e[t] = n), e.filter(Boolean).join("\n");
        };
      })();
    },
    "./node_modules/style-loader/lib/urls.js": function(e, t) {
      e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
          o = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(
          /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
          function(e, t) {
            var r = t
              .trim()
              .replace(/^"(.*)"$/, function(e, t) {
                return t;
              })
              .replace(/^'(.*)'$/, function(e, t) {
                return t;
              });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))
              return e;
            var s;
            return (
              (s =
                0 === r.indexOf("//")
                  ? r
                  : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, "")),
              "url(" + JSON.stringify(s) + ")"
            );
          }
        );
      };
    },
    "./src/components/Button/Button.css": function(e, t, n) {
      var o = n(
        "./node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize!./src/components/Button/Button.css"
      );
      "string" == typeof o && (o = [[e.i, o, ""]]);
      var r = { hmr: !0 };
      r.transform = void 0;
      n("./node_modules/style-loader/lib/addStyles.js")(o, r);
      o.locals && (e.exports = o.locals);
    },
    "./src/components/Button/Button.js": function(e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("react"),
        s = o(r),
        a = n("prop-types"),
        i = o(a),
        c = n("./src/components/Button/Button.css"),
        l = o(c),
        u = function(e) {
          var t = (e.color, e.size, e.onClick),
            n = e.children;
          return (
            console.log(l.default),
            s.default.createElement(
              "button",
              { className: l.default.button, onClick: t },
              n
            )
          );
        };
      (t.default = u),
        (u.propTypes = {
          children: i.default.string.isRequired,
          color: i.default.string,
          size: i.default.oneOf(["small", "normal", "large"]),
          onClick: i.default.func
        }),
        (u.defaultProps = {
          color: "#333",
          size: "normal",
          onClick: function(e) {
            console.log("You have clicked me!", e.target);
          }
        }),
        (u.sizes = { small: "10px", normal: "14px", large: "18px" });
    },
    "./src/components/Button/index.js": function(e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("./src/components/Button/Button.js");
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return o(r).default;
        }
      });
    },
    "./src/components/Placeholder/Placeholder.css": function(e, t, n) {
      var o = n(
        "./node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize!./src/components/Placeholder/Placeholder.css"
      );
      "string" == typeof o && (o = [[e.i, o, ""]]);
      var r = { hmr: !0 };
      r.transform = void 0;
      n("./node_modules/style-loader/lib/addStyles.js")(o, r);
      o.locals && (e.exports = o.locals);
    },
    "./src/components/Placeholder/Placeholder.js": function(e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        c = n("react"),
        l = o(c),
        u = n("prop-types"),
        d = o(u);
      n("./src/components/Placeholder/Placeholder.css");
      var f = (function(e) {
        function t() {
          return (
            r(this, t),
            s(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          a(t, e),
          i(t, [
            {
              key: "getImageUrl",
              value: function() {
                var e = this.props,
                  t = e.type,
                  n = e.width,
                  o = e.height;
                return {
                  animal: "http://placeimg.com/" + n + "/" + o + "/animals",
                  bacon: "http://baconmockup.com/" + n + "/" + o,
                  bear: "http://www.placebear.com/" + n + "/" + o,
                  beard: "http://placebeard.it/" + n + "/" + o,
                  cat: "http://lorempixel.com/" + n + "/" + o + "/cats",
                  city: "http://lorempixel.com/" + n + "/" + o + "/city",
                  food: "http://lorempixel.com/" + n + "/" + o + "/food",
                  nature: "http://lorempixel.com/" + n + "/" + o + "/nature",
                  people: "http://lorempixel.com/" + n + "/" + o + "/people"
                }[t];
              }
            },
            {
              key: "render",
              value: function() {
                var e = this.props,
                  t = e.width,
                  n = e.height;
                return l.default.createElement("img", {
                  className: "placeholder",
                  src: this.getImageUrl(),
                  width: t,
                  height: n
                });
              }
            }
          ]),
          t
        );
      })(c.Component);
      (f.propTypes = {
        type: d.default.oneOf([
          "animal",
          "bacon",
          "beard",
          "bear",
          "cat",
          "food",
          "city",
          "nature",
          "people"
        ]),
        width: d.default.number,
        height: d.default.number
      }),
        (f.defaultProps = { type: "animal", width: 150, height: 150 }),
        (t.default = f);
    },
    "./src/components/Placeholder/index.js": function(e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("./src/components/Placeholder/Placeholder.js");
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return o(r).default;
        }
      });
    },
    "./src/index.js": function(e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Placeholder = t.Button = void 0);
      var r = n("./src/components/Button/index.js"),
        s = o(r),
        a = n("./src/components/Placeholder/index.js"),
        i = o(a);
      (t.Button = s.default), (t.Placeholder = i.default);
    },
    "prop-types": function(e, t) {
      e.exports = require("prop-types");
    },
    react: function(e, t) {
      e.exports = require("react");
    }
  });
});
