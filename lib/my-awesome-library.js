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
          ".Button__button___2a549 {\n\tpadding: 10px 25px;\n\tcolor: #fff;\n\tbackground-color: #ffab19;\n\tborder-radius: 7px;\n\ttext-align: center;\n\tcursor: pointer;\n\tborder: 0;\n\ttext-transform: uppercase;\n\tfont-size: 16px;\n\tline-height: 19px;\n\tborder-radius: 50%;\n}",
          "",
          {
            version: 3,
            sources: [
              "/Users/tuirepeurala/Projects/ds-workshop-styleguidist-boilerplate-copy/src/components/Button/Button.css"
            ],
            names: [],
            mappings:
              "AAAA;CACC,mBAAmB;CACnB,YAAY;CACZ,0BAA0B;CAC1B,mBAAmB;CACnB,mBAAmB;CACnB,gBAAgB;CAChB,UAAU;CACV,0BAA0B;CAC1B,gBAAgB;CAChB,kBAAkB;CAClB,mBAAmB;CACnB",
            file: "Button.css",
            sourcesContent: [
              ".button {\n\tpadding: 10px 25px;\n\tcolor: #fff;\n\tbackground-color: #ffab19;\n\tborder-radius: 7px;\n\ttext-align: center;\n\tcursor: pointer;\n\tborder: 0;\n\ttext-transform: uppercase;\n\tfont-size: 16px;\n\tline-height: 19px;\n\tborder-radius: 50%;\n}"
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
              "/Users/tuirepeurala/Projects/ds-workshop-styleguidist-boilerplate-copy/src/components/Placeholder/Placeholder.css"
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
    "./node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize!./src/components/Teaser/Teaser.css": function(
      e,
      t,
      n
    ) {
      (t = e.exports = n("./node_modules/css-loader/lib/css-base.js")(!0)),
        t.push([
          e.i,
          ".Teaser__teaser___3iga5 {\n\tpadding: 10px;\n\tdisplay: flex;\n}\n\n.Teaser__teaserDate___362Gy {\n\tborder: 1px solid #3D578D;\n\tborder-radius: 50%;\n\tcolor: #3D578D;\n\ttext-transform: uppercase;\n\tfont-family: 'Lato', sans-serif;\n\twidth: 114px;\n\theight: 114px;\n\ttext-align: center;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.Teaser__day___wJcoL {\n\tfont-size: 51px;\n}\n\n.Teaser__monthYear___2xaPH {\n\tfont-size: 17px;\n}\n\n.Teaser__teaserContent___1oIH0 {\n\tpadding-left: 20px;\n}\n\n.Teaser__teaserTags___3J4-g {\n\tlist-style: none;\n\tcolor: #3D578D;\n\n}\n\nul {\n\tmargin:12px 0;\n\tpadding: 0;\n}\n\nli {\n\tdisplay: inline-block;\n}\n\nli:after {\n\tcontent: '|';\n\tpadding: 0 5px;\n}\n\n\nli:last-of-type:after {\n\tcontent: none;\n}",
          "",
          {
            version: 3,
            sources: [
              "/Users/tuirepeurala/Projects/ds-workshop-styleguidist-boilerplate-copy/src/components/Teaser/Teaser.css"
            ],
            names: [],
            mappings:
              "AAAA;CACC,cAAc;CACd,cAAc;CACd;;AAED;CACC,0BAA0B;CAC1B,mBAAmB;CACnB,eAAe;CACf,0BAA0B;CAC1B,gCAAgC;CAChC,aAAa;CACb,cAAc;CACd,mBAAmB;CACnB,cAAc;CACd,wBAAwB;CACxB,oBAAoB;CACpB;;AAED;CACC,gBAAgB;CAChB;;AAED;CACC,gBAAgB;CAChB;;AAED;CACC,mBAAmB;CACnB;;AAED;CACC,iBAAiB;CACjB,eAAe;;CAEf;;AAED;CACC,cAAc;CACd,WAAW;CACX;;AAED;CACC,sBAAsB;CACtB;;AAED;CACC,aAAa;CACb,eAAe;CACf;;;AAGD;CACC,cAAc;CACd",
            file: "Teaser.css",
            sourcesContent: [
              ".teaser {\n\tpadding: 10px;\n\tdisplay: flex;\n}\n\n.teaserDate {\n\tborder: 1px solid #3D578D;\n\tborder-radius: 50%;\n\tcolor: #3D578D;\n\ttext-transform: uppercase;\n\tfont-family: 'Lato', sans-serif;\n\twidth: 114px;\n\theight: 114px;\n\ttext-align: center;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.day {\n\tfont-size: 51px;\n}\n\n.monthYear {\n\tfont-size: 17px;\n}\n\n.teaserContent {\n\tpadding-left: 20px;\n}\n\n.teaserTags {\n\tlist-style: none;\n\tcolor: #3D578D;\n\n}\n\nul {\n\tmargin:12px 0;\n\tpadding: 0;\n}\n\nli {\n\tdisplay: inline-block;\n}\n\nli:after {\n\tcontent: '|';\n\tpadding: 0 5px;\n}\n\n\nli:last-of-type:after {\n\tcontent: none;\n}"
            ],
            sourceRoot: ""
          }
        ]),
        (t.locals = {
          teaser: "Teaser__teaser___3iga5",
          teaserDate: "Teaser__teaserDate___362Gy",
          day: "Teaser__day___wJcoL",
          monthYear: "Teaser__monthYear___2xaPH",
          teaserContent: "Teaser__teaserContent___1oIH0",
          teaserTags: "Teaser__teaserTags___3J4-g"
        });
    },
    "./node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize!./src/components/TeaserTags/TeaserTags.css": function(
      e,
      t,
      n
    ) {
      (t = e.exports = n("./node_modules/css-loader/lib/css-base.js")(!0)),
        t.push([
          e.i,
          "\n.TeaserTags__teaserTags___2Q3eL {\n\tlist-style: none;\n\tcolor: #3D578D;\n\n}\n\n.TeaserTags__teaserTags___2Q3eL ul {\n\tmargin:12px 0;\n\tpadding: 0;\n}\n\n.TeaserTags__teaserTags___2Q3eL li {\n\tdisplay: inline-block;\n}\n\n.TeaserTags__teaserTags___2Q3eL li:after {\n\tcontent: '|';\n\tpadding: 0 5px;\n}\n\n\n.TeaserTags__teaserTags___2Q3eL li:last-of-type:after {\n\tcontent: none;\n}",
          "",
          {
            version: 3,
            sources: [
              "/Users/tuirepeurala/Projects/ds-workshop-styleguidist-boilerplate-copy/src/components/TeaserTags/TeaserTags.css"
            ],
            names: [],
            mappings:
              ";AACA;CACC,iBAAiB;CACjB,eAAe;;CAEf;;AAED;CACC,cAAc;CACd,WAAW;CACX;;AAED;CACC,sBAAsB;CACtB;;AAED;CACC,aAAa;CACb,eAAe;CACf;;;AAGD;CACC,cAAc;CACd",
            file: "TeaserTags.css",
            sourcesContent: [
              "\n.teaserTags {\n\tlist-style: none;\n\tcolor: #3D578D;\n\n}\n\n.teaserTags ul {\n\tmargin:12px 0;\n\tpadding: 0;\n}\n\n.teaserTags li {\n\tdisplay: inline-block;\n}\n\n.teaserTags li:after {\n\tcontent: '|';\n\tpadding: 0 5px;\n}\n\n\n.teaserTags li:last-of-type:after {\n\tcontent: none;\n}"
            ],
            sourceRoot: ""
          }
        ]),
        (t.locals = { teaserTags: "TeaserTags__teaserTags___2Q3eL" });
    },
    "./node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize!./src/components/Typography/Typography.css": function(
      e,
      t,
      n
    ) {
      (t = e.exports = n("./node_modules/css-loader/lib/css-base.js")(!0)),
        t.push([
          e.i,
          "@import url(https://fonts.googleapis.com/css?family=Indie+Flower);",
          ""
        ]),
        t.push([
          e.i,
          "@import url(https://fonts.googleapis.com/css?family=Raleway);",
          ""
        ]),
        t.push([
          e.i,
          "body {\n\tfont-family: 'Raleway', sans-serif;\n\tcolor: darkgray;\n}\n\nh1 {\n\tfont-size: 50px;\n}\n\nh2 {\n    font-family: 'Indie Flower', sans-serif;\n\tfont-size: 29px;\n\tcolor: gray;\n\n}\n\nh2:after {\n    content: \"\";\n    width: 80px!important;\n    height: 1px;\n    border-bottom: 4px solid #ffab19;\n    margin-top: 8px;\n    position: relative;\n    left: 0;\n    display: block;\n }\n\n .author {\n \tcolor: gray;\n }\n\n a {\n \tcolor: #3D578D;\n \ttext-decoration: none;\n };",
          "",
          {
            version: 3,
            sources: [
              "/Users/tuirepeurala/Projects/ds-workshop-styleguidist-boilerplate-copy/src/components/Typography/Typography.css"
            ],
            names: [],
            mappings:
              "AAGA;CACC,mCAAmC;CACnC,gBAAgB;CAChB;;AAED;CACC,gBAAgB;CAChB;;AAED;IACI,wCAAwC;CAC3C,gBAAgB;CAChB,YAAY;;CAEZ;;AAED;IACI,YAAY;IACZ,sBAAsB;IACtB,YAAY;IACZ,iCAAiC;IACjC,gBAAgB;IAChB,mBAAmB;IACnB,QAAQ;IACR,eAAe;EACjB;;CAED;EACC,YAAY;EACZ;;CAED;EACC,eAAe;EACf,sBAAsB;EACtB",
            file: "Typography.css",
            sourcesContent: [
              "@import url('https://fonts.googleapis.com/css?family=Indie+Flower');\n@import url('https://fonts.googleapis.com/css?family=Raleway');\n\n:global body {\n\tfont-family: 'Raleway', sans-serif;\n\tcolor: darkgray;\n}\n\nh1 {\n\tfont-size: 50px;\n}\n\n:global h2 {\n    font-family: 'Indie Flower', sans-serif;\n\tfont-size: 29px;\n\tcolor: gray;\n\n}\n\n:global h2:after {\n    content: \"\";\n    width: 80px!important;\n    height: 1px;\n    border-bottom: 4px solid #ffab19;\n    margin-top: 8px;\n    position: relative;\n    left: 0;\n    display: block;\n }\n\n :global .author {\n \tcolor: gray;\n }\n\n :global a {\n \tcolor: #3D578D;\n \ttext-decoration: none;\n };"
            ],
            sourceRoot: ""
          }
        ]);
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
            l = s[1],
            i = s[2],
            c = s[3],
            u = { css: l, media: i, sourceMap: c };
          o[a] ? o[a].parts.push(u) : n.push((o[a] = { id: a, parts: [u] }));
        }
        return n;
      }
      function s(e, t) {
        var n = h(e.insertInto);
        if (!n)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        var o = g[g.length - 1];
        if ("top" === e.insertAt)
          o
            ? o.nextSibling
              ? n.insertBefore(t, o.nextSibling)
              : n.appendChild(t)
            : n.insertBefore(t, n.firstChild),
            g.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
          if ("object" != typeof e.insertAt || !e.insertAt.before)
            throw new Error(
              "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
            );
          var r = h(e.insertInto + " " + e.insertAt.before);
          n.insertBefore(t, r);
        }
      }
      function a(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = g.indexOf(e);
        t >= 0 && g.splice(t, 1);
      }
      function l(e) {
        var t = document.createElement("style");
        return (e.attrs.type = "text/css"), c(t, e.attrs), s(e, t), t;
      }
      function i(e) {
        var t = document.createElement("link");
        return (
          (e.attrs.type = "text/css"),
          (e.attrs.rel = "stylesheet"),
          c(t, e.attrs),
          s(e, t),
          t
        );
      }
      function c(e, t) {
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
          var c = C++;
          (n = _ || (_ = l(t))),
            (o = d.bind(null, n, c, !1)),
            (r = d.bind(null, n, c, !0));
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
            : ((n = l(t)),
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
        if (e.styleSheet) e.styleSheet.cssText = b(t, r);
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
        (t.convertToAbsoluteUrls || s) && (o = y(o)),
          r &&
            (o +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
              " */");
        var a = new Blob([o], { type: "text/css" }),
          l = e.href;
        (e.href = URL.createObjectURL(a)), l && URL.revokeObjectURL(l);
      }
      var m = {},
        A = (function(e) {
          var t;
          return function() {
            return void 0 === t && (t = e.apply(this, arguments)), t;
          };
        })(function() {
          return window && document && document.all && !window.atob;
        }),
        h = (function(e) {
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
        C = 0,
        g = [],
        y = n("./node_modules/style-loader/lib/urls.js");
      e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
          throw new Error(
            "The style-loader cannot be used in a non-browser environment"
          );
        (t = t || {}),
          (t.attrs = "object" == typeof t.attrs ? t.attrs : {}),
          t.singleton || (t.singleton = A()),
          t.insertInto || (t.insertInto = "head"),
          t.insertAt || (t.insertAt = "bottom");
        var n = r(e, t);
        return (
          o(n, t),
          function(e) {
            for (var s = [], a = 0; a < n.length; a++) {
              var l = n[a],
                i = m[l.id];
              i.refs--, s.push(i);
            }
            if (e) {
              o(r(e, t), t);
            }
            for (var a = 0; a < s.length; a++) {
              var i = s[a];
              if (0 === i.refs) {
                for (var c = 0; c < i.parts.length; c++) i.parts[c]();
                delete m[i.id];
              }
            }
          }
        );
      };
      var b = (function() {
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
        l = o(a),
        i = n("./src/components/Button/Button.css"),
        c = o(i),
        u = function(e) {
          var t = (e.color, e.size, e.onClick),
            n = e.children;
          return s.default.createElement(
            "button",
            { className: c.default.button, onClick: t },
            n
          );
        };
      (t.default = u),
        (u.propTypes = {
          children: l.default.string.isRequired,
          color: l.default.string,
          size: l.default.oneOf(["small", "normal", "large"]),
          onClick: l.default.func
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
      var l = (function() {
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
        c = o(i),
        u = n("prop-types"),
        d = o(u);
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
          l(t, [
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
                return c.default.createElement("img", {
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
    "./src/components/Teaser/Teaser.css": function(e, t, n) {
      var o = n(
        "./node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize!./src/components/Teaser/Teaser.css"
      );
      "string" == typeof o && (o = [[e.i, o, ""]]);
      var r = { hmr: !0 };
      r.transform = void 0;
      n("./node_modules/style-loader/lib/addStyles.js")(o, r);
      o.locals && (e.exports = o.locals);
    },
    "./src/components/Teaser/Teaser.js": function(e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r() {
        return parseInt(30 * Math.random());
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = n("react"),
        a = o(s),
        l = n("./src/components/Teaser/Teaser.css"),
        i = o(l),
        c = n("./src/components/Button/Button.js"),
        u = o(c),
        d = n("./src/components/TeaserTags/TeaserTags.js"),
        p = o(d),
        f = n("./src/components/Typography/Typography.css"),
        m = (o(f),
        function(e) {
          var t = e.title,
            n = e.author,
            o = e.content,
            s = e.tags;
          return (
            console.log(o),
            a.default.createElement(
              "div",
              { className: i.default.teaser },
              a.default.createElement(
                "div",
                { className: i.default.dateContainer },
                a.default.createElement(
                  "div",
                  { className: i.default.teaserDate },
                  a.default.createElement(
                    "span",
                    { className: i.default.day },
                    r()
                  ),
                  a.default.createElement(
                    "span",
                    { className: i.default.monthYear },
                    "Nov",
                    a.default.createElement("br", null),
                    "2017"
                  )
                )
              ),
              a.default.createElement(
                "div",
                { className: i.default.teaserContent },
                a.default.createElement("h2", null, t),
                a.default.createElement("div", { className: "author" }, n),
                a.default.createElement("div", {
                  className: i.default.teaserText
                }),
                a.default.createElement(u.default, null, "Read more"),
                a.default.createElement(p.default, { tags: s })
              )
            )
          );
        });
      t.default = m;
    },
    "./src/components/Teaser/index.js": function(e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("./src/components/Teaser/Teaser.js");
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return o(r).default;
        }
      });
    },
    "./src/components/TeaserTags/TeaserTags.css": function(e, t, n) {
      var o = n(
        "./node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize!./src/components/TeaserTags/TeaserTags.css"
      );
      "string" == typeof o && (o = [[e.i, o, ""]]);
      var r = { hmr: !0 };
      r.transform = void 0;
      n("./node_modules/style-loader/lib/addStyles.js")(o, r);
      o.locals && (e.exports = o.locals);
    },
    "./src/components/TeaserTags/TeaserTags.js": function(e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n("react"),
        s = o(r),
        a = n("./src/components/TeaserTags/TeaserTags.css"),
        l = o(a),
        i = n("./src/components/Typography/Typography.css"),
        c = (o(i),
        function() {
          return s.default.createElement(
            "div",
            { className: l.default.teaserTags },
            s.default.createElement(
              "ul",
              null,
              s.default.createElement(
                "li",
                null,
                s.default.createElement("a", { href: "#" }, "Teaser tag")
              ),
              s.default.createElement(
                "li",
                null,
                s.default.createElement("a", { href: "#" }, "Teaser tag")
              ),
              s.default.createElement(
                "li",
                null,
                s.default.createElement("a", { href: "#" }, "Teaser tag")
              )
            )
          );
        });
      t.default = c;
    },
    "./src/components/Typography/Typography.css": function(e, t, n) {
      var o = n(
        "./node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize!./src/components/Typography/Typography.css"
      );
      "string" == typeof o && (o = [[e.i, o, ""]]);
      var r = { hmr: !0 };
      r.transform = void 0;
      n("./node_modules/style-loader/lib/addStyles.js")(o, r);
      o.locals && (e.exports = o.locals);
    },
    "./src/index.js": function(e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Teaser = t.Placeholder = t.Button = void 0);
      var r = n("./src/components/Button/index.js"),
        s = o(r),
        a = n("./src/components/Placeholder/index.js"),
        l = o(a),
        i = n("./src/components/Teaser/index.js"),
        c = o(i);
      (t.Button = s.default),
        (t.Placeholder = l.default),
        (t.Teaser = c.default);
    },
    "prop-types": function(e, t) {
      e.exports = require("prop-types");
    },
    react: function(e, t) {
      e.exports = require("react");
    }
  });
});
