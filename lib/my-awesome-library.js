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
          ".Button__button___2a549 {\n\tpadding: .5em 1.5em;\n\tcolor: #666;\n\tbackground-color: #fff;\n\tborder: 1px solid currentColor;\n\tborder-radius: .3em;\n\ttext-align: center;\n\tvertical-align: middle;\n\tcursor: pointer;\n}\n\n.Button__checks___1fxJE {\n\tbackground-image: linear-gradient(45deg, #f5f5f5 25%, transparent 25%), linear-gradient(-45deg, #f5f5f5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f5f5f5 75%), linear-gradient(-45deg, transparent 75%, #f5f5f5 75%);\n\tbackground-size: 16px 16px;\n\tbackground-position: 0 0, 0 8px, 8px -8px, -8px 0px;\n}\n",
          "",
          {
            version: 3,
            sources: [
              "/Users/varyastepanova/WebDev/SC5/design-systems/ds-workshop/ds-workshop-styleguidist-boilerplate/src/components/Button/Button.css"
            ],
            names: [],
            mappings:
              "AAAA;CACC,oBAAoB;CACpB,YAAY;CACZ,uBAAuB;CACvB,+BAA+B;CAC/B,oBAAoB;CACpB,mBAAmB;CACnB,uBAAuB;CACvB,gBAAgB;CAChB;;AAED;CACC,2OAA2O;CAC3O,2BAA2B;CAC3B,oDAAoD;CACpD",
            file: "Button.css",
            sourcesContent: [
              ".button {\n\tpadding: .5em 1.5em;\n\tcolor: #666;\n\tbackground-color: #fff;\n\tborder: 1px solid currentColor;\n\tborder-radius: .3em;\n\ttext-align: center;\n\tvertical-align: middle;\n\tcursor: pointer;\n}\n\n.checks {\n\tbackground-image: linear-gradient(45deg, #f5f5f5 25%, transparent 25%), linear-gradient(-45deg, #f5f5f5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f5f5f5 75%), linear-gradient(-45deg, transparent 75%, #f5f5f5 75%);\n\tbackground-size: 16px 16px;\n\tbackground-position: 0 0, 0 8px, 8px -8px, -8px 0px;\n}\n"
            ],
            sourceRoot: ""
          }
        ]),
        (t.locals = {
          button: "Button__button___2a549",
          checks: "Button__checks___1fxJE"
        });
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
              "/Users/varyastepanova/WebDev/SC5/design-systems/ds-workshop/ds-workshop-styleguidist-boilerplate/src/components/Placeholder/Placeholder.css"
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
    "./node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize!./src/components/PushButton/PushButton.css": function(
      e,
      t,
      n
    ) {
      (t = e.exports = n("./node_modules/css-loader/lib/css-base.js")(!0)),
        t.push([
          e.i,
          ".PushButton__push-button___1Y8p4 {\n\tpadding: .5em 1.5em;\n\tcolor: #666;\n\tbackground-color: #fff;\n\tborder: 1px solid currentColor;\n\tborder-radius: .3em;\n\ttext-align: center;\n\tvertical-align: middle;\n\tcursor: pointer;\n}\n",
          "",
          {
            version: 3,
            sources: [
              "/Users/varyastepanova/WebDev/SC5/design-systems/ds-workshop/ds-workshop-styleguidist-boilerplate/src/components/PushButton/PushButton.css"
            ],
            names: [],
            mappings:
              "AAAA;CACC,oBAAoB;CACpB,YAAY;CACZ,uBAAuB;CACvB,+BAA+B;CAC/B,oBAAoB;CACpB,mBAAmB;CACnB,uBAAuB;CACvB,gBAAgB;CAChB",
            file: "PushButton.css",
            sourcesContent: [
              ".push-button {\n\tpadding: .5em 1.5em;\n\tcolor: #666;\n\tbackground-color: #fff;\n\tborder: 1px solid currentColor;\n\tborder-radius: .3em;\n\ttext-align: center;\n\tvertical-align: middle;\n\tcursor: pointer;\n}\n"
            ],
            sourceRoot: ""
          }
        ]),
        (t.locals = { "push-button": "PushButton__push-button___1Y8p4" });
    },
    "./node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize!./src/components/RandomButton/RandomButton.css": function(
      e,
      t,
      n
    ) {
      (t = e.exports = n("./node_modules/css-loader/lib/css-base.js")(!0)),
        t.push([
          e.i,
          ".RandomButton__random-button___1qh1L {\n\tpadding: .5em 1.5em;\n\tcolor: #666;\n\tbackground-color: #fff;\n\tborder: 1px solid currentColor;\n\tborder-radius: .3em;\n\tfont-size: 16px;\n\tfont-weight: bold;\n\ttext-align: center;\n\tvertical-align: middle;\n\tcursor: pointer;\n}\n",
          "",
          {
            version: 3,
            sources: [
              "/Users/varyastepanova/WebDev/SC5/design-systems/ds-workshop/ds-workshop-styleguidist-boilerplate/src/components/RandomButton/RandomButton.css"
            ],
            names: [],
            mappings:
              "AAAA;CACC,oBAAoB;CACpB,YAAY;CACZ,uBAAuB;CACvB,+BAA+B;CAC/B,oBAAoB;CACpB,gBAAgB;CAChB,kBAAkB;CAClB,mBAAmB;CACnB,uBAAuB;CACvB,gBAAgB;CAChB",
            file: "RandomButton.css",
            sourcesContent: [
              ".random-button {\n\tpadding: .5em 1.5em;\n\tcolor: #666;\n\tbackground-color: #fff;\n\tborder: 1px solid currentColor;\n\tborder-radius: .3em;\n\tfont-size: 16px;\n\tfont-weight: bold;\n\ttext-align: center;\n\tvertical-align: middle;\n\tcursor: pointer;\n}\n"
            ],
            sourceRoot: ""
          }
        ]),
        (t.locals = { "random-button": "RandomButton__random-button___1qh1L" });
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
            for (; s < o.parts.length; s++) r.parts.push(c(o.parts[s], t));
          } else {
            for (var a = [], s = 0; s < o.parts.length; s++)
              a.push(c(o.parts[s], t));
            m[o.id] = { id: o.id, refs: 1, parts: a };
          }
        }
      }
      function r(e, t) {
        for (var n = [], o = {}, r = 0; r < e.length; r++) {
          var s = e[r],
            a = t.base ? s[0] + t.base : s[0],
            u = s[1],
            i = s[2],
            l = s[3],
            c = { css: u, media: i, sourceMap: l };
          o[a] ? o[a].parts.push(c) : n.push((o[a] = { id: a, parts: [c] }));
        }
        return n;
      }
      function s(e, t) {
        var n = b(e.insertInto);
        if (!n)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        var o = v[v.length - 1];
        if ("top" === e.insertAt)
          o
            ? o.nextSibling
              ? n.insertBefore(t, o.nextSibling)
              : n.appendChild(t)
            : n.insertBefore(t, n.firstChild),
            v.push(t);
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
        var t = v.indexOf(e);
        t >= 0 && v.splice(t, 1);
      }
      function u(e) {
        var t = document.createElement("style");
        return (e.attrs.type = "text/css"), l(t, e.attrs), s(e, t), t;
      }
      function i(e) {
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
      function c(e, t) {
        var n, o, r, s;
        if (t.transform && e.css) {
          if (!(s = t.transform(e.css))) return function() {};
          e.css = s;
        }
        if (t.singleton) {
          var l = y++;
          (n = _ || (_ = u(t))),
            (o = d.bind(null, n, l, !1)),
            (r = d.bind(null, n, l, !0));
        } else
          e.sourceMap &&
          "function" == typeof URL &&
          "function" == typeof URL.createObjectURL &&
          "function" == typeof URL.revokeObjectURL &&
          "function" == typeof Blob &&
          "function" == typeof btoa
            ? ((n = i(t)),
              (o = f.bind(null, n, t)),
              (r = function() {
                a(n), n.href && URL.revokeObjectURL(n.href);
              }))
            : ((n = u(t)),
              (o = p.bind(null, n)),
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
        if (e.styleSheet) e.styleSheet.cssText = g(t, r);
        else {
          var s = document.createTextNode(r),
            a = e.childNodes;
          a[t] && e.removeChild(a[t]),
            a.length ? e.insertBefore(s, a[t]) : e.appendChild(s);
        }
      }
      function p(e, t) {
        var n = t.css,
          o = t.media;
        if ((o && e.setAttribute("media", o), e.styleSheet))
          e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      }
      function f(e, t, n) {
        var o = n.css,
          r = n.sourceMap,
          s = void 0 === t.convertToAbsoluteUrls && r;
        (t.convertToAbsoluteUrls || s) && (o = B(o)),
          r &&
            (o +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
              " */");
        var a = new Blob([o], { type: "text/css" }),
          u = e.href;
        (e.href = URL.createObjectURL(a)), u && URL.revokeObjectURL(u);
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
        _ = null,
        y = 0,
        v = [],
        B = n("./node_modules/style-loader/lib/urls.js");
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
              var u = n[a],
                i = m[u.id];
              i.refs--, s.push(i);
            }
            if (e) {
              o(r(e, t), t);
            }
            for (var a = 0; a < s.length; a++) {
              var i = s[a];
              if (0 === i.refs) {
                for (var l = 0; l < i.parts.length; l++) i.parts[l]();
                delete m[i.id];
              }
            }
          }
        );
      };
      var g = (function() {
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
        u = o(a),
        i = n("./src/components/Button/Button.css"),
        l = o(i),
        c = function(e) {
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
      (t.default = c),
        (c.propTypes = {
          children: u.default.string.isRequired,
          color: u.default.string,
          size: u.default.oneOf(["small", "normal", "large"]),
          onClick: u.default.func
        }),
        (c.defaultProps = {
          color: "#333",
          size: "normal",
          onClick: function(e) {
            console.log("You have clicked me!", e.target);
          }
        }),
        (c.sizes = { small: "10px", normal: "14px", large: "18px" });
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
    "./src/components/CounterButton/CounterButton.js": function(e, t, n) {
      "use strict";
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function s(e, t) {
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
      var a = (function() {
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
        u = n("react"),
        i = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(u),
        l = (function(e) {
          function t() {
            o(this, t);
            var e = r(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this)
            );
            return (e.state = { value: 0 }), e;
          }
          return (
            s(t, e),
            a(t, [
              {
                key: "set",
                value: function(e) {
                  this.setState({ value: parseInt(e, 10) });
                }
              },
              {
                key: "increment",
                value: function() {
                  this.setState({ value: this.state.value + 1 });
                }
              },
              {
                key: "render",
                value: function() {
                  return i.default.createElement(
                    "button",
                    { className: "button", onClick: this.increment.bind(this) },
                    this.state.value
                  );
                }
              }
            ]),
            t
          );
        })(u.Component);
      t.default = l;
    },
    "./src/components/CounterButton/index.js": function(e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("./src/components/CounterButton/CounterButton.js");
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
      var u = (function() {
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
        i = n("react"),
        l = o(i),
        c = n("prop-types"),
        d = o(c);
      n("./src/components/Placeholder/Placeholder.css");
      var p = (function(e) {
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
          u(t, [
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
      })(i.Component);
      (p.propTypes = {
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
        (p.defaultProps = { type: "animal", width: 150, height: 150 }),
        (t.default = p);
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
    "./src/components/PushButton/PushButton.css": function(e, t, n) {
      var o = n(
        "./node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize!./src/components/PushButton/PushButton.css"
      );
      "string" == typeof o && (o = [[e.i, o, ""]]);
      var r = { hmr: !0 };
      r.transform = void 0;
      n("./node_modules/style-loader/lib/addStyles.js")(o, r);
      o.locals && (e.exports = o.locals);
    },
    "./src/components/PushButton/PushButton.js": function(e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("react"),
        s = o(r),
        a = n("prop-types"),
        u = o(a);
      n("./src/components/PushButton/PushButton.css");
      var i = function e(t) {
        var n = t.color,
          o = t.size,
          r = t.children,
          a = { color: n, fontSize: e.sizes[o] };
        return s.default.createElement(
          "button",
          { className: "push-button", style: a },
          r
        );
      };
      (t.default = i),
        (i.propTypes = {
          children: u.default.string.isRequired,
          color: u.default.string,
          size: u.default.oneOf(["small", "normal", "large"])
        }),
        (i.defaultProps = { color: "#333", size: "normal" }),
        (i.sizes = { small: "10px", normal: "14px", large: "18px" });
    },
    "./src/components/PushButton/index.js": function(e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("./src/components/PushButton/PushButton.js");
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return o(r).default;
        }
      });
    },
    "./src/components/RandomButton/RandomButton.css": function(e, t, n) {
      var o = n(
        "./node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize!./src/components/RandomButton/RandomButton.css"
      );
      "string" == typeof o && (o = [[e.i, o, ""]]);
      var r = { hmr: !0 };
      r.transform = void 0;
      n("./node_modules/style-loader/lib/addStyles.js")(o, r);
      o.locals && (e.exports = o.locals);
    },
    "./src/components/RandomButton/RandomButton.js": function(e, t, n) {
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
      var u = (function() {
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
        i = n("react"),
        l = o(i),
        c = n("prop-types"),
        d = o(c),
        p = n("lodash/sample"),
        f = o(p);
      n("./src/components/RandomButton/RandomButton.css");
      var m = (function(e) {
        function t(e) {
          r(this, t);
          var n = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (n.state = { label: (0, f.default)(e.variants) }), n;
        }
        return (
          a(t, e),
          u(t, [
            {
              key: "handleClick",
              value: function() {
                this.setState({ label: (0, f.default)(this.props.variants) });
              }
            },
            {
              key: "render",
              value: function() {
                return l.default.createElement(
                  "button",
                  {
                    className: "random-button",
                    onClick: this.handleClick.bind(this)
                  },
                  this.state.label
                );
              }
            }
          ]),
          t
        );
      })(i.Component);
      (m.propTypes = { variants: d.default.array.isRequired }), (t.default = m);
    },
    "./src/components/RandomButton/index.js": function(e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("./src/components/RandomButton/RandomButton.js");
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return o(r).default;
        }
      });
    },
    "./src/components/WrappedButton/WrappedButton.js": function(e, t, n) {
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
      var u = (function() {
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
        i = n("react"),
        l = o(i),
        c = n("prop-types"),
        d = o(c),
        p = function e(t) {
          var n = t.color,
            o = t.size,
            r = t.children,
            s = { color: n, fontSize: e.sizes[o] };
          return l.default.createElement(
            "button",
            { className: "wrapped-button", style: s },
            r
          );
        };
      (p.propTypes = {
        children: d.default.string.isRequired,
        color: d.default.string,
        size: d.default.oneOf(["small", "normal", "large"]),
        width: d.default.number,
        onClick: d.default.func,
        ignoredProp: d.default.bool
      }),
        (p.defaultProps = { color: "#333", size: "normal" }),
        (p.sizes = { small: "10px", normal: "14px", large: "18px" });
      t.default = (function(e) {
        return (function(t) {
          function n() {
            return (
              r(this, n),
              s(
                this,
                (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments)
              )
            );
          }
          return (
            a(n, t),
            u(n, [
              {
                key: "render",
                value: function() {
                  return l.default.createElement(e, this.props);
                }
              }
            ]),
            n
          );
        })(i.Component);
      })(p);
    },
    "./src/components/WrappedButton/index.js": function(e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("./src/components/WrappedButton/WrappedButton.js");
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
        (t.WrappedButton = t.RandomButton = t.PushButton = t.Placeholder = t.CounterButton = t.Button = void 0);
      var r = n("./src/components/Button/index.js"),
        s = o(r),
        a = n("./src/components/CounterButton/index.js"),
        u = o(a),
        i = n("./src/components/Placeholder/index.js"),
        l = o(i),
        c = n("./src/components/PushButton/index.js"),
        d = o(c),
        p = n("./src/components/RandomButton/index.js"),
        f = o(p),
        m = n("./src/components/WrappedButton/index.js"),
        h = o(m);
      (t.Button = s.default),
        (t.CounterButton = u.default),
        (t.Placeholder = l.default),
        (t.PushButton = d.default),
        (t.RandomButton = f.default),
        (t.WrappedButton = h.default);
    },
    "lodash/sample": function(e, t) {
      e.exports = require("lodash/sample");
    },
    "prop-types": function(e, t) {
      e.exports = require("prop-types");
    },
    react: function(e, t) {
      e.exports = require("react");
    }
  });
});
