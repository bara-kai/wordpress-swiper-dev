!(function () {
  'use strict';
  function e(t) {
    return (
      (e =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      e(t)
    );
  }
  function t(t) {
    return (
      null !== t &&
      'object' === e(t) &&
      'constructor' in t &&
      t.constructor === Object
    );
  }
  function a() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    Object.keys(r).forEach(function (n) {
      void 0 === e[n]
        ? (e[n] = r[n])
        : t(r[n]) && t(e[n]) && Object.keys(r[n]).length > 0 && a(e[n], r[n]);
    });
  }
  var r = {
    body: {},
    addEventListener: function () {},
    removeEventListener: function () {},
    activeElement: { blur: function () {}, nodeName: '' },
    querySelector: function () {
      return null;
    },
    querySelectorAll: function () {
      return [];
    },
    getElementById: function () {
      return null;
    },
    createEvent: function () {
      return { initEvent: function () {} };
    },
    createElement: function () {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function () {},
        getElementsByTagName: function () {
          return [];
        },
      };
    },
    createElementNS: function () {
      return {};
    },
    importNode: function () {
      return null;
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
  };
  function n() {
    var e = 'undefined' != typeof document ? document : {};
    return a(e, r), e;
  }
  var i = {
    document: r,
    navigator: { userAgent: '' },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
    history: {
      replaceState: function () {},
      pushState: function () {},
      go: function () {},
      back: function () {},
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return '';
        },
      };
    },
    Image: function () {},
    Date: function () {},
    screen: {},
    setTimeout: function () {},
    clearTimeout: function () {},
    matchMedia: function () {
      return {};
    },
    requestAnimationFrame: function (e) {
      return 'undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function (e) {
      'undefined' != typeof setTimeout && clearTimeout(e);
    },
  };
  function s() {
    var e = 'undefined' != typeof window ? window : {};
    return a(e, i), e;
  }
  function o(e) {
    return (
      (o =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      o(e)
    );
  }
  function l(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return c(e);
      })(e) ||
      (function (e) {
        if (
          ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ('string' == typeof e) return c(e, t);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === a && e.constructor && (a = e.constructor.name),
            'Map' === a || 'Set' === a
              ? Array.from(e)
              : 'Arguments' === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? c(e, t)
              : void 0
          );
        }
      })(e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function c(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
    return r;
  }
  function d(e, t) {
    if (t && ('object' === o(t) || 'function' == typeof t)) return t;
    if (void 0 !== t)
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      );
    return p(e);
  }
  function p(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function u(e) {
    var t = 'function' == typeof Map ? new Map() : void 0;
    return (
      (u = function (e) {
        if (
          null === e ||
          ((a = e), -1 === Function.toString.call(a).indexOf('[native code]'))
        )
          return e;
        var a;
        if ('function' != typeof e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, r);
        }
        function r() {
          return f(e, arguments, m(this).constructor);
        }
        return (
          (r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          v(r, e)
        );
      }),
      u(e)
    );
  }
  function f(e, t, a) {
    return (
      (f = h()
        ? Reflect.construct
        : function (e, t, a) {
            var r = [null];
            r.push.apply(r, t);
            var n = new (Function.bind.apply(e, r))();
            return a && v(n, a.prototype), n;
          }),
      f.apply(null, arguments)
    );
  }
  function h() {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function v(e, t) {
    return (
      (v =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        }),
      v(e, t)
    );
  }
  function m(e) {
    return (
      (m = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      m(e)
    );
  }
  var g = (function (e) {
    !(function (e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && v(e, t);
    })(i, e);
    var t,
      a,
      r,
      n =
        ((t = i),
        (a = h()),
        function () {
          var e,
            r = m(t);
          if (a) {
            var n = m(this).constructor;
            e = Reflect.construct(r, arguments, n);
          } else e = r.apply(this, arguments);
          return d(this, e);
        });
    function i(e) {
      var t, a, r;
      return (
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, i),
        'number' == typeof e
          ? (t = n.call(this, e))
          : ((a = p((t = n.call.apply(n, [this].concat(l(e || [])))))),
            (r = a.__proto__),
            Object.defineProperty(a, '__proto__', {
              get: function () {
                return r;
              },
              set: function (e) {
                r.__proto__ = e;
              },
            })),
        d(t)
      );
    }
    return (r = i), Object.defineProperty(r, 'prototype', { writable: !1 }), r;
  })(u(Array));
  function b() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t = [];
    return (
      e.forEach(function (e) {
        Array.isArray(e) ? t.push.apply(t, l(b(e))) : t.push(e);
      }),
      t
    );
  }
  function w(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function y(e, t) {
    var a = s(),
      r = n(),
      i = [];
    if (!t && e instanceof g) return e;
    if (!e) return new g(i);
    if ('string' == typeof e) {
      var o = e.trim();
      if (o.indexOf('<') >= 0 && o.indexOf('>') >= 0) {
        var l = 'div';
        0 === o.indexOf('<li') && (l = 'ul'),
          0 === o.indexOf('<tr') && (l = 'tbody'),
          (0 !== o.indexOf('<td') && 0 !== o.indexOf('<th')) || (l = 'tr'),
          0 === o.indexOf('<tbody') && (l = 'table'),
          0 === o.indexOf('<option') && (l = 'select');
        var c = r.createElement(l);
        c.innerHTML = o;
        for (var d = 0; d < c.childNodes.length; d += 1)
          i.push(c.childNodes[d]);
      } else
        i = (function (e, t) {
          if ('string' != typeof e) return [e];
          for (
            var a = [], r = t.querySelectorAll(e), n = 0;
            n < r.length;
            n += 1
          )
            a.push(r[n]);
          return a;
        })(e.trim(), t || r);
    } else if (e.nodeType || e === a || e === r) i.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof g) return e;
      i = e;
    }
    return new g(
      (function (e) {
        for (var t = [], a = 0; a < e.length; a += 1)
          -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t;
      })(i)
    );
  }
  y.fn = g.prototype;
  var x = 'resize scroll'.split(' ');
  function E(e) {
    return function () {
      for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++)
        a[r] = arguments[r];
      if (void 0 === a[0]) {
        for (var n = 0; n < this.length; n += 1)
          x.indexOf(e) < 0 &&
            (e in this[n] ? this[n][e]() : y(this[n]).trigger(e));
        return this;
      }
      return this.on.apply(this, [e].concat(a));
    };
  }
  E('click'),
    E('blur'),
    E('focus'),
    E('focusin'),
    E('focusout'),
    E('keyup'),
    E('keydown'),
    E('keypress'),
    E('submit'),
    E('change'),
    E('mousedown'),
    E('mousemove'),
    E('mouseup'),
    E('mouseenter'),
    E('mouseleave'),
    E('mouseout'),
    E('mouseover'),
    E('touchstart'),
    E('touchend'),
    E('touchmove'),
    E('resize'),
    E('scroll');
  var S = {
    addClass: function () {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
        t[a] = arguments[a];
      var r = b(
        t.map(function (e) {
          return e.split(' ');
        })
      );
      return (
        this.forEach(function (e) {
          var t;
          (t = e.classList).add.apply(t, l(r));
        }),
        this
      );
    },
    removeClass: function () {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
        t[a] = arguments[a];
      var r = b(
        t.map(function (e) {
          return e.split(' ');
        })
      );
      return (
        this.forEach(function (e) {
          var t;
          (t = e.classList).remove.apply(t, l(r));
        }),
        this
      );
    },
    hasClass: function () {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
        t[a] = arguments[a];
      var r = b(
        t.map(function (e) {
          return e.split(' ');
        })
      );
      return (
        w(this, function (e) {
          return (
            r.filter(function (t) {
              return e.classList.contains(t);
            }).length > 0
          );
        }).length > 0
      );
    },
    toggleClass: function () {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
        t[a] = arguments[a];
      var r = b(
        t.map(function (e) {
          return e.split(' ');
        })
      );
      this.forEach(function (e) {
        r.forEach(function (t) {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && 'string' == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (var a = 0; a < this.length; a += 1)
        if (2 === arguments.length) this[a].setAttribute(e, t);
        else
          for (var r in e) (this[a][r] = e[r]), this[a].setAttribute(r, e[r]);
      return this;
    },
    removeAttr: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (var t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration =
          'string' != typeof e ? ''.concat(e, 'ms') : e;
      return this;
    },
    on: function () {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
        t[a] = arguments[a];
      var r = t[0],
        n = t[1],
        i = t[2],
        s = t[3];
      function o(e) {
        var t = e.target;
        if (t) {
          var a = e.target.dom7EventData || [];
          if ((a.indexOf(e) < 0 && a.unshift(e), y(t).is(n))) i.apply(t, a);
          else
            for (var r = y(t).parents(), s = 0; s < r.length; s += 1)
              y(r[s]).is(n) && i.apply(r[s], a);
        }
      }
      function l(e) {
        var t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
      }
      'function' == typeof t[1] &&
        ((r = t[0]), (i = t[1]), (s = t[2]), (n = void 0)),
        s || (s = !1);
      for (var c, d = r.split(' '), p = 0; p < this.length; p += 1) {
        var u = this[p];
        if (n)
          for (c = 0; c < d.length; c += 1) {
            var f = d[c];
            u.dom7LiveListeners || (u.dom7LiveListeners = {}),
              u.dom7LiveListeners[f] || (u.dom7LiveListeners[f] = []),
              u.dom7LiveListeners[f].push({ listener: i, proxyListener: o }),
              u.addEventListener(f, o, s);
          }
        else
          for (c = 0; c < d.length; c += 1) {
            var h = d[c];
            u.dom7Listeners || (u.dom7Listeners = {}),
              u.dom7Listeners[h] || (u.dom7Listeners[h] = []),
              u.dom7Listeners[h].push({ listener: i, proxyListener: l }),
              u.addEventListener(h, l, s);
          }
      }
      return this;
    },
    off: function () {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
        t[a] = arguments[a];
      var r = t[0],
        n = t[1],
        i = t[2],
        s = t[3];
      'function' == typeof t[1] &&
        ((r = t[0]), (i = t[1]), (s = t[2]), (n = void 0)),
        s || (s = !1);
      for (var o = r.split(' '), l = 0; l < o.length; l += 1)
        for (var c = o[l], d = 0; d < this.length; d += 1) {
          var p = this[d],
            u = void 0;
          if (
            (!n && p.dom7Listeners
              ? (u = p.dom7Listeners[c])
              : n && p.dom7LiveListeners && (u = p.dom7LiveListeners[c]),
            u && u.length)
          )
            for (var f = u.length - 1; f >= 0; f -= 1) {
              var h = u[f];
              (i && h.listener === i) ||
              (i &&
                h.listener &&
                h.listener.dom7proxy &&
                h.listener.dom7proxy === i)
                ? (p.removeEventListener(c, h.proxyListener, s), u.splice(f, 1))
                : i ||
                  (p.removeEventListener(c, h.proxyListener, s),
                  u.splice(f, 1));
            }
        }
      return this;
    },
    trigger: function () {
      for (
        var e = s(), t = arguments.length, a = new Array(t), r = 0;
        r < t;
        r++
      )
        a[r] = arguments[r];
      for (var n = a[0].split(' '), i = a[1], o = 0; o < n.length; o += 1)
        for (var l = n[o], c = 0; c < this.length; c += 1) {
          var d = this[c];
          if (e.CustomEvent) {
            var p = new e.CustomEvent(l, {
              detail: i,
              bubbles: !0,
              cancelable: !0,
            });
            (d.dom7EventData = a.filter(function (e, t) {
              return t > 0;
            })),
              d.dispatchEvent(p),
              (d.dom7EventData = []),
              delete d.dom7EventData;
          }
        }
      return this;
    },
    transitionEnd: function (e) {
      var t = this;
      return (
        e &&
          t.on('transitionend', function a(r) {
            r.target === this && (e.call(this, r), t.off('transitionend', a));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(t.getPropertyValue('margin-right')) +
            parseFloat(t.getPropertyValue('margin-left'))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(t.getPropertyValue('margin-top')) +
            parseFloat(t.getPropertyValue('margin-bottom'))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      var e = s();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        var e = s(),
          t = n(),
          a = this[0],
          r = a.getBoundingClientRect(),
          i = t.body,
          o = a.clientTop || i.clientTop || 0,
          l = a.clientLeft || i.clientLeft || 0,
          c = a === e ? e.scrollY : a.scrollTop,
          d = a === e ? e.scrollX : a.scrollLeft;
        return { top: r.top + c - o, left: r.left + d - l };
      }
      return null;
    },
    css: function (e, t) {
      var a,
        r = s();
      if (1 === arguments.length) {
        if ('string' != typeof e) {
          for (a = 0; a < this.length; a += 1)
            for (var n in e) this[a].style[n] = e[n];
          return this;
        }
        if (this[0])
          return r.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && 'string' == typeof e) {
        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach(function (t, a) {
            e.apply(t, [t, a]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      var t,
        a,
        r = s(),
        i = n(),
        o = this[0];
      if (!o || void 0 === e) return !1;
      if ('string' == typeof e) {
        if (o.matches) return o.matches(e);
        if (o.webkitMatchesSelector) return o.webkitMatchesSelector(e);
        if (o.msMatchesSelector) return o.msMatchesSelector(e);
        for (t = y(e), a = 0; a < t.length; a += 1) if (t[a] === o) return !0;
        return !1;
      }
      if (e === i) return o === i;
      if (e === r) return o === r;
      if (e.nodeType || e instanceof g) {
        for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
          if (t[a] === o) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      var e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      var t = this.length;
      if (e > t - 1) return y([]);
      if (e < 0) {
        var a = t + e;
        return y(a < 0 ? [] : [this[a]]);
      }
      return y([this[e]]);
    },
    append: function () {
      for (var e, t = n(), a = 0; a < arguments.length; a += 1) {
        e = a < 0 || arguments.length <= a ? void 0 : arguments[a];
        for (var r = 0; r < this.length; r += 1)
          if ('string' == typeof e) {
            var i = t.createElement('div');
            for (i.innerHTML = e; i.firstChild; )
              this[r].appendChild(i.firstChild);
          } else if (e instanceof g)
            for (var s = 0; s < e.length; s += 1) this[r].appendChild(e[s]);
          else this[r].appendChild(e);
      }
      return this;
    },
    prepend: function (e) {
      var t,
        a,
        r = n();
      for (t = 0; t < this.length; t += 1)
        if ('string' == typeof e) {
          var i = r.createElement('div');
          for (i.innerHTML = e, a = i.childNodes.length - 1; a >= 0; a -= 1)
            this[t].insertBefore(i.childNodes[a], this[t].childNodes[0]);
        } else if (e instanceof g)
          for (a = 0; a < e.length; a += 1)
            this[t].insertBefore(e[a], this[t].childNodes[0]);
        else this[t].insertBefore(e, this[t].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && y(this[0].nextElementSibling).is(e)
            ? y([this[0].nextElementSibling])
            : y([])
          : this[0].nextElementSibling
          ? y([this[0].nextElementSibling])
          : y([])
        : y([]);
    },
    nextAll: function (e) {
      var t = [],
        a = this[0];
      if (!a) return y([]);
      for (; a.nextElementSibling; ) {
        var r = a.nextElementSibling;
        e ? y(r).is(e) && t.push(r) : t.push(r), (a = r);
      }
      return y(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        var t = this[0];
        return e
          ? t.previousElementSibling && y(t.previousElementSibling).is(e)
            ? y([t.previousElementSibling])
            : y([])
          : t.previousElementSibling
          ? y([t.previousElementSibling])
          : y([]);
      }
      return y([]);
    },
    prevAll: function (e) {
      var t = [],
        a = this[0];
      if (!a) return y([]);
      for (; a.previousElementSibling; ) {
        var r = a.previousElementSibling;
        e ? y(r).is(e) && t.push(r) : t.push(r), (a = r);
      }
      return y(t);
    },
    parent: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        null !== this[a].parentNode &&
          (e
            ? y(this[a].parentNode).is(e) && t.push(this[a].parentNode)
            : t.push(this[a].parentNode));
      return y(t);
    },
    parents: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (var r = this[a].parentNode; r; )
          e ? y(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
      return y(t);
    },
    closest: function (e) {
      var t = this;
      return void 0 === e ? y([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (var r = this[a].querySelectorAll(e), n = 0; n < r.length; n += 1)
          t.push(r[n]);
      return y(t);
    },
    children: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (var r = this[a].children, n = 0; n < r.length; n += 1)
          (e && !y(r[n]).is(e)) || t.push(r[n]);
      return y(t);
    },
    filter: function (e) {
      return y(w(this, e));
    },
    remove: function () {
      for (var e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  Object.keys(S).forEach(function (e) {
    Object.defineProperty(y.fn, e, { value: S[e], writable: !0 });
  });
  var T,
    C,
    M,
    P = y;
  function k(e, t, a) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = a),
      e
    );
  }
  function $(e) {
    return (
      ($ =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      $(e)
    );
  }
  function z(e) {
    var t = e;
    Object.keys(t).forEach(function (e) {
      try {
        t[e] = null;
      } catch (e) {}
      try {
        delete t[e];
      } catch (e) {}
    });
  }
  function O(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return setTimeout(e, t);
  }
  function I() {
    return Date.now();
  }
  function L(e) {
    var t,
      a = s();
    return (
      a.getComputedStyle && (t = a.getComputedStyle(e, null)),
      !t && e.currentStyle && (t = e.currentStyle),
      t || (t = e.style),
      t
    );
  }
  function A(e) {
    var t,
      a,
      r,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'x',
      i = s(),
      o = L(e);
    return (
      i.WebKitCSSMatrix
        ? ((a = o.transform || o.webkitTransform).split(',').length > 6 &&
            (a = a
              .split(', ')
              .map(function (e) {
                return e.replace(',', '.');
              })
              .join(', ')),
          (r = new i.WebKitCSSMatrix('none' === a ? '' : a)))
        : (t = (r =
            o.MozTransform ||
            o.OTransform ||
            o.MsTransform ||
            o.msTransform ||
            o.transform ||
            o
              .getPropertyValue('transform')
              .replace('translate(', 'matrix(1, 0, 0, 1,'))
            .toString()
            .split(',')),
      'x' === n &&
        (a = i.WebKitCSSMatrix
          ? r.m41
          : 16 === t.length
          ? parseFloat(t[12])
          : parseFloat(t[4])),
      'y' === n &&
        (a = i.WebKitCSSMatrix
          ? r.m42
          : 16 === t.length
          ? parseFloat(t[13])
          : parseFloat(t[5])),
      a || 0
    );
  }
  function D(e) {
    return (
      'object' === $(e) &&
      null !== e &&
      e.constructor &&
      'Object' === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function G(e) {
    return 'undefined' != typeof window && void 0 !== window.HTMLElement
      ? e instanceof HTMLElement
      : e && (1 === e.nodeType || 11 === e.nodeType);
  }
  function B() {
    for (
      var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ['__proto__', 'constructor', 'prototype'],
        a = 1;
      a < arguments.length;
      a += 1
    ) {
      var r = a < 0 || arguments.length <= a ? void 0 : arguments[a];
      if (null != r && !G(r))
        for (
          var n = Object.keys(Object(r)).filter(function (e) {
              return t.indexOf(e) < 0;
            }),
            i = 0,
            s = n.length;
          i < s;
          i += 1
        ) {
          var o = n[i],
            l = Object.getOwnPropertyDescriptor(r, o);
          void 0 !== l &&
            l.enumerable &&
            (D(e[o]) && D(r[o])
              ? r[o].__swiper__
                ? (e[o] = r[o])
                : B(e[o], r[o])
              : !D(e[o]) && D(r[o])
              ? ((e[o] = {}), r[o].__swiper__ ? (e[o] = r[o]) : B(e[o], r[o]))
              : (e[o] = r[o]));
        }
    }
    return e;
  }
  function N(e, t, a) {
    e.style.setProperty(t, a);
  }
  function j(e) {
    var t,
      a = e.swiper,
      r = e.targetPosition,
      n = e.side,
      i = s(),
      o = -a.translate,
      l = null,
      c = a.params.speed;
    (a.wrapperEl.style.scrollSnapType = 'none'),
      i.cancelAnimationFrame(a.cssModeFrameID);
    var d = r > o ? 'next' : 'prev',
      p = function (e, t) {
        return ('next' === d && e >= t) || ('prev' === d && e <= t);
      };
    !(function e() {
      (t = new Date().getTime()), null === l && (l = t);
      var s = Math.max(Math.min((t - l) / c, 1), 0),
        d = 0.5 - Math.cos(s * Math.PI) / 2,
        u = o + d * (r - o);
      if ((p(u, r) && (u = r), a.wrapperEl.scrollTo(k({}, n, u)), p(u, r)))
        return (
          (a.wrapperEl.style.overflow = 'hidden'),
          (a.wrapperEl.style.scrollSnapType = ''),
          setTimeout(function () {
            (a.wrapperEl.style.overflow = ''),
              a.wrapperEl.scrollTo(k({}, n, u));
          }),
          void i.cancelAnimationFrame(a.cssModeFrameID)
        );
      a.cssModeFrameID = i.requestAnimationFrame(e);
    })();
  }
  function X() {
    return (
      T ||
        (T = (function () {
          var e = s(),
            t = n();
          return {
            smoothScroll:
              t.documentElement && 'scrollBehavior' in t.documentElement.style,
            touch: !!(
              'ontouchstart' in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              var t = !1;
              try {
                var a = Object.defineProperty({}, 'passive', {
                  get: function () {
                    t = !0;
                  },
                });
                e.addEventListener('testPassiveListener', null, a);
              } catch (e) {}
              return t;
            })(),
            gestures: 'ongesturestart' in e,
          };
        })()),
      T
    );
  }
  function H() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.userAgent,
      a = X(),
      r = s(),
      n = r.navigator.platform,
      i = t || r.navigator.userAgent,
      o = { ios: !1, android: !1 },
      l = r.screen.width,
      c = r.screen.height,
      d = i.match(/(Android);?[\s\/]+([\d.]+)?/),
      p = i.match(/(iPad).*OS\s([\d_]+)/),
      u = i.match(/(iPod)(.*OS\s([\d_]+))?/),
      f = !p && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      h = 'Win32' === n,
      v = 'MacIntel' === n,
      m = [
        '1024x1366',
        '1366x1024',
        '834x1194',
        '1194x834',
        '834x1112',
        '1112x834',
        '768x1024',
        '1024x768',
        '820x1180',
        '1180x820',
        '810x1080',
        '1080x810',
      ];
    return (
      !p &&
        v &&
        a.touch &&
        m.indexOf(''.concat(l, 'x').concat(c)) >= 0 &&
        ((p = i.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, '13_0_0']),
        (v = !1)),
      d && !h && ((o.os = 'android'), (o.android = !0)),
      (p || f || u) && ((o.os = 'ios'), (o.ios = !0)),
      o
    );
  }
  function Y() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return C || (C = H(e)), C;
  }
  function R() {
    return (
      M ||
        (M = (function () {
          var e,
            t = s();
          return {
            isSafari:
              ((e = t.navigator.userAgent.toLowerCase()),
              e.indexOf('safari') >= 0 &&
                e.indexOf('chrome') < 0 &&
                e.indexOf('android') < 0),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              t.navigator.userAgent
            ),
          };
        })()),
      M
    );
  }
  function _(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return W(e);
      })(e) ||
      (function (e) {
        if (
          ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ('string' == typeof e) return W(e, t);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === a && e.constructor && (a = e.constructor.name),
            'Map' === a || 'Set' === a
              ? Array.from(e)
              : 'Arguments' === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? W(e, t)
              : void 0
          );
        }
      })(e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function W(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
    return r;
  }
  var V = {
    on: function (e, t, a) {
      var r = this;
      if ('function' != typeof t) return r;
      var n = a ? 'unshift' : 'push';
      return (
        e.split(' ').forEach(function (e) {
          r.eventsListeners[e] || (r.eventsListeners[e] = []),
            r.eventsListeners[e][n](t);
        }),
        r
      );
    },
    once: function (e, t, a) {
      var r = this;
      if ('function' != typeof t) return r;
      function n() {
        r.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
        for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
          i[s] = arguments[s];
        t.apply(r, i);
      }
      return (n.__emitterProxy = t), r.on(e, n, a);
    },
    onAny: function (e, t) {
      var a = this;
      if ('function' != typeof e) return a;
      var r = t ? 'unshift' : 'push';
      return (
        a.eventsAnyListeners.indexOf(e) < 0 && a.eventsAnyListeners[r](e), a
      );
    },
    offAny: function (e) {
      var t = this;
      if (!t.eventsAnyListeners) return t;
      var a = t.eventsAnyListeners.indexOf(e);
      return a >= 0 && t.eventsAnyListeners.splice(a, 1), t;
    },
    off: function (e, t) {
      var a = this;
      return a.eventsListeners
        ? (e.split(' ').forEach(function (e) {
            void 0 === t
              ? (a.eventsListeners[e] = [])
              : a.eventsListeners[e] &&
                a.eventsListeners[e].forEach(function (r, n) {
                  (r === t || (r.__emitterProxy && r.__emitterProxy === t)) &&
                    a.eventsListeners[e].splice(n, 1);
                });
          }),
          a)
        : a;
    },
    emit: function () {
      var e,
        t,
        a,
        r = this;
      if (!r.eventsListeners) return r;
      for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
        i[s] = arguments[s];
      'string' == typeof i[0] || Array.isArray(i[0])
        ? ((e = i[0]), (t = i.slice(1, i.length)), (a = r))
        : ((e = i[0].events), (t = i[0].data), (a = i[0].context || r)),
        t.unshift(a);
      var o = Array.isArray(e) ? e : e.split(' ');
      return (
        o.forEach(function (e) {
          r.eventsAnyListeners &&
            r.eventsAnyListeners.length &&
            r.eventsAnyListeners.forEach(function (r) {
              r.apply(a, [e].concat(_(t)));
            }),
            r.eventsListeners &&
              r.eventsListeners[e] &&
              r.eventsListeners[e].forEach(function (e) {
                e.apply(a, t);
              });
        }),
        r
      );
    },
  };
  function q(e, t, a) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = a),
      e
    );
  }
  var F = {
    updateSize: function () {
      var e,
        t,
        a = this,
        r = a.$el;
      (e =
        void 0 !== a.params.width && null !== a.params.width
          ? a.params.width
          : r[0].clientWidth),
        (t =
          void 0 !== a.params.height && null !== a.params.height
            ? a.params.height
            : r[0].clientHeight),
        (0 === e && a.isHorizontal()) ||
          (0 === t && a.isVertical()) ||
          ((e =
            e -
            parseInt(r.css('padding-left') || 0, 10) -
            parseInt(r.css('padding-right') || 0, 10)),
          (t =
            t -
            parseInt(r.css('padding-top') || 0, 10) -
            parseInt(r.css('padding-bottom') || 0, 10)),
          Number.isNaN(e) && (e = 0),
          Number.isNaN(t) && (t = 0),
          Object.assign(a, {
            width: e,
            height: t,
            size: a.isHorizontal() ? e : t,
          }));
    },
    updateSlides: function () {
      var e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: 'height',
              'margin-top': 'margin-left',
              'margin-bottom ': 'margin-right',
              'margin-left': 'margin-top',
              'margin-right': 'margin-bottom',
              'padding-left': 'padding-top',
              'padding-right': 'padding-bottom',
              marginRight: 'marginBottom',
            }[t];
      }
      function a(e, a) {
        return parseFloat(e.getPropertyValue(t(a)) || 0);
      }
      var r = e.params,
        n = e.$wrapperEl,
        i = e.size,
        s = e.rtlTranslate,
        o = e.wrongRTL,
        l = e.virtual && r.virtual.enabled,
        c = l ? e.virtual.slides.length : e.slides.length,
        d = n.children('.'.concat(e.params.slideClass)),
        p = l ? e.virtual.slides.length : d.length,
        u = [],
        f = [],
        h = [],
        v = r.slidesOffsetBefore;
      'function' == typeof v && (v = r.slidesOffsetBefore.call(e));
      var m = r.slidesOffsetAfter;
      'function' == typeof m && (m = r.slidesOffsetAfter.call(e));
      var g = e.snapGrid.length,
        b = e.slidesGrid.length,
        w = r.spaceBetween,
        y = -v,
        x = 0,
        E = 0;
      if (void 0 !== i) {
        'string' == typeof w &&
          w.indexOf('%') >= 0 &&
          (w = (parseFloat(w.replace('%', '')) / 100) * i),
          (e.virtualSize = -w),
          s
            ? d.css({ marginLeft: '', marginBottom: '', marginTop: '' })
            : d.css({ marginRight: '', marginBottom: '', marginTop: '' }),
          r.centeredSlides &&
            r.cssMode &&
            (N(e.wrapperEl, '--swiper-centered-offset-before', ''),
            N(e.wrapperEl, '--swiper-centered-offset-after', ''));
        var S,
          T = r.grid && r.grid.rows > 1 && e.grid;
        T && e.grid.initSlides(p);
        for (
          var C =
              'auto' === r.slidesPerView &&
              r.breakpoints &&
              Object.keys(r.breakpoints).filter(function (e) {
                return void 0 !== r.breakpoints[e].slidesPerView;
              }).length > 0,
            M = 0;
          M < p;
          M += 1
        ) {
          S = 0;
          var P = d.eq(M);
          if (
            (T && e.grid.updateSlide(M, P, p, t), 'none' !== P.css('display'))
          ) {
            if ('auto' === r.slidesPerView) {
              C && (d[M].style[t('width')] = '');
              var k = getComputedStyle(P[0]),
                $ = P[0].style.transform,
                z = P[0].style.webkitTransform;
              if (
                ($ && (P[0].style.transform = 'none'),
                z && (P[0].style.webkitTransform = 'none'),
                r.roundLengths)
              )
                S = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
              else {
                var O = a(k, 'width'),
                  I = a(k, 'padding-left'),
                  L = a(k, 'padding-right'),
                  A = a(k, 'margin-left'),
                  D = a(k, 'margin-right'),
                  G = k.getPropertyValue('box-sizing');
                if (G && 'border-box' === G) S = O + A + D;
                else {
                  var B = P[0],
                    j = B.clientWidth;
                  S = O + I + L + A + D + (B.offsetWidth - j);
                }
              }
              $ && (P[0].style.transform = $),
                z && (P[0].style.webkitTransform = z),
                r.roundLengths && (S = Math.floor(S));
            } else
              (S = (i - (r.slidesPerView - 1) * w) / r.slidesPerView),
                r.roundLengths && (S = Math.floor(S)),
                d[M] && (d[M].style[t('width')] = ''.concat(S, 'px'));
            d[M] && (d[M].swiperSlideSize = S),
              h.push(S),
              r.centeredSlides
                ? ((y = y + S / 2 + x / 2 + w),
                  0 === x && 0 !== M && (y = y - i / 2 - w),
                  0 === M && (y = y - i / 2 - w),
                  Math.abs(y) < 0.001 && (y = 0),
                  r.roundLengths && (y = Math.floor(y)),
                  E % r.slidesPerGroup == 0 && u.push(y),
                  f.push(y))
                : (r.roundLengths && (y = Math.floor(y)),
                  (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                    e.params.slidesPerGroup ==
                    0 && u.push(y),
                  f.push(y),
                  (y = y + S + w)),
              (e.virtualSize += S + w),
              (x = S),
              (E += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, i) + m),
          s &&
            o &&
            ('slide' === r.effect || 'coverflow' === r.effect) &&
            n.css({ width: ''.concat(e.virtualSize + r.spaceBetween, 'px') }),
          r.setWrapperSize &&
            n.css(
              q({}, t('width'), ''.concat(e.virtualSize + r.spaceBetween, 'px'))
            ),
          T && e.grid.updateWrapperSize(S, u, t),
          !r.centeredSlides)
        ) {
          for (var X = [], H = 0; H < u.length; H += 1) {
            var Y = u[H];
            r.roundLengths && (Y = Math.floor(Y)),
              u[H] <= e.virtualSize - i && X.push(Y);
          }
          (u = X),
            Math.floor(e.virtualSize - i) - Math.floor(u[u.length - 1]) > 1 &&
              u.push(e.virtualSize - i);
        }
        if ((0 === u.length && (u = [0]), 0 !== r.spaceBetween)) {
          var R = e.isHorizontal() && s ? 'marginLeft' : t('marginRight');
          d.filter(function (e, t) {
            return !r.cssMode || t !== d.length - 1;
          }).css(q({}, R, ''.concat(w, 'px')));
        }
        if (r.centeredSlides && r.centeredSlidesBounds) {
          var _ = 0;
          h.forEach(function (e) {
            _ += e + (r.spaceBetween ? r.spaceBetween : 0);
          });
          var W = (_ -= r.spaceBetween) - i;
          u = u.map(function (e) {
            return e < 0 ? -v : e > W ? W + m : e;
          });
        }
        if (r.centerInsufficientSlides) {
          var V = 0;
          if (
            (h.forEach(function (e) {
              V += e + (r.spaceBetween ? r.spaceBetween : 0);
            }),
            (V -= r.spaceBetween) < i)
          ) {
            var F = (i - V) / 2;
            u.forEach(function (e, t) {
              u[t] = e - F;
            }),
              f.forEach(function (e, t) {
                f[t] = e + F;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: u,
            slidesGrid: f,
            slidesSizesGrid: h,
          }),
          r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
        ) {
          N(
            e.wrapperEl,
            '--swiper-centered-offset-before',
            ''.concat(-u[0], 'px')
          ),
            N(
              e.wrapperEl,
              '--swiper-centered-offset-after',
              ''.concat(e.size / 2 - h[h.length - 1] / 2, 'px')
            );
          var U = -e.snapGrid[0],
            K = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map(function (e) {
            return e + U;
          })),
            (e.slidesGrid = e.slidesGrid.map(function (e) {
              return e + K;
            }));
        }
        p !== c && e.emit('slidesLengthChange'),
          u.length !== g &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit('snapGridLengthChange')),
          f.length !== b && e.emit('slidesGridLengthChange'),
          r.watchSlidesProgress && e.updateSlidesOffset();
      }
    },
    updateAutoHeight: function (e) {
      var t,
        a = this,
        r = [],
        n = a.virtual && a.params.virtual.enabled,
        i = 0;
      'number' == typeof e
        ? a.setTransition(e)
        : !0 === e && a.setTransition(a.params.speed);
      var s = function (e) {
        return n
          ? a.slides.filter(function (t) {
              return (
                parseInt(t.getAttribute('data-swiper-slide-index'), 10) === e
              );
            })[0]
          : a.slides.eq(e)[0];
      };
      if ('auto' !== a.params.slidesPerView && a.params.slidesPerView > 1)
        if (a.params.centeredSlides)
          a.visibleSlides.each(function (e) {
            r.push(e);
          });
        else
          for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
            var o = a.activeIndex + t;
            if (o > a.slides.length && !n) break;
            r.push(s(o));
          }
      else r.push(s(a.activeIndex));
      for (t = 0; t < r.length; t += 1)
        if (void 0 !== r[t]) {
          var l = r[t].offsetHeight;
          i = l > i ? l : i;
        }
      (i || 0 === i) && a.$wrapperEl.css('height', ''.concat(i, 'px'));
    },
    updateSlidesOffset: function () {
      for (var e = this.slides, t = 0; t < e.length; t += 1)
        e[t].swiperSlideOffset = this.isHorizontal()
          ? e[t].offsetLeft
          : e[t].offsetTop;
    },
    updateSlidesProgress: function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : (this && this.translate) || 0,
        t = this,
        a = t.params,
        r = t.slides,
        n = t.rtlTranslate,
        i = t.snapGrid;
      if (0 !== r.length) {
        void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
        var s = -e;
        n && (s = e),
          r.removeClass(a.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (var o = 0; o < r.length; o += 1) {
          var l = r[o],
            c = l.swiperSlideOffset;
          a.cssMode && a.centeredSlides && (c -= r[0].swiperSlideOffset);
          var d =
              (s + (a.centeredSlides ? t.minTranslate() : 0) - c) /
              (l.swiperSlideSize + a.spaceBetween),
            p =
              (s - i[0] + (a.centeredSlides ? t.minTranslate() : 0) - c) /
              (l.swiperSlideSize + a.spaceBetween),
            u = -(s - c),
            f = u + t.slidesSizesGrid[o],
            h =
              (u >= 0 && u < t.size - 1) ||
              (f > 1 && f <= t.size) ||
              (u <= 0 && f >= t.size);
          h &&
            (t.visibleSlides.push(l),
            t.visibleSlidesIndexes.push(o),
            r.eq(o).addClass(a.slideVisibleClass)),
            (l.progress = n ? -d : d),
            (l.originalProgress = n ? -p : p);
        }
        t.visibleSlides = P(t.visibleSlides);
      }
    },
    updateProgress: function (e) {
      var t = this;
      if (void 0 === e) {
        var a = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * a) || 0;
      }
      var r = t.params,
        n = t.maxTranslate() - t.minTranslate(),
        i = t.progress,
        s = t.isBeginning,
        o = t.isEnd,
        l = s,
        c = o;
      0 === n
        ? ((i = 0), (s = !0), (o = !0))
        : ((s = (i = (e - t.minTranslate()) / n) <= 0), (o = i >= 1)),
        Object.assign(t, { progress: i, isBeginning: s, isEnd: o }),
        (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) &&
          t.updateSlidesProgress(e),
        s && !l && t.emit('reachBeginning toEdge'),
        o && !c && t.emit('reachEnd toEdge'),
        ((l && !s) || (c && !o)) && t.emit('fromEdge'),
        t.emit('progress', i);
    },
    updateSlidesClasses: function () {
      var e,
        t = this,
        a = t.slides,
        r = t.params,
        n = t.$wrapperEl,
        i = t.activeIndex,
        s = t.realIndex,
        o = t.virtual && r.virtual.enabled;
      a.removeClass(
        ''
          .concat(r.slideActiveClass, ' ')
          .concat(r.slideNextClass, ' ')
          .concat(r.slidePrevClass, ' ')
          .concat(r.slideDuplicateActiveClass, ' ')
          .concat(r.slideDuplicateNextClass, ' ')
          .concat(r.slideDuplicatePrevClass)
      ),
        (e = o
          ? t.$wrapperEl.find(
              '.'
                .concat(r.slideClass, '[data-swiper-slide-index="')
                .concat(i, '"]')
            )
          : a.eq(i)).addClass(r.slideActiveClass),
        r.loop &&
          (e.hasClass(r.slideDuplicateClass)
            ? n
                .children(
                  '.'
                    .concat(r.slideClass, ':not(.')
                    .concat(
                      r.slideDuplicateClass,
                      ')[data-swiper-slide-index="'
                    )
                    .concat(s, '"]')
                )
                .addClass(r.slideDuplicateActiveClass)
            : n
                .children(
                  '.'
                    .concat(r.slideClass, '.')
                    .concat(r.slideDuplicateClass, '[data-swiper-slide-index="')
                    .concat(s, '"]')
                )
                .addClass(r.slideDuplicateActiveClass));
      var l = e
        .nextAll('.'.concat(r.slideClass))
        .eq(0)
        .addClass(r.slideNextClass);
      r.loop && 0 === l.length && (l = a.eq(0)).addClass(r.slideNextClass);
      var c = e
        .prevAll('.'.concat(r.slideClass))
        .eq(0)
        .addClass(r.slidePrevClass);
      r.loop && 0 === c.length && (c = a.eq(-1)).addClass(r.slidePrevClass),
        r.loop &&
          (l.hasClass(r.slideDuplicateClass)
            ? n
                .children(
                  '.'
                    .concat(r.slideClass, ':not(.')
                    .concat(
                      r.slideDuplicateClass,
                      ')[data-swiper-slide-index="'
                    )
                    .concat(l.attr('data-swiper-slide-index'), '"]')
                )
                .addClass(r.slideDuplicateNextClass)
            : n
                .children(
                  '.'
                    .concat(r.slideClass, '.')
                    .concat(r.slideDuplicateClass, '[data-swiper-slide-index="')
                    .concat(l.attr('data-swiper-slide-index'), '"]')
                )
                .addClass(r.slideDuplicateNextClass),
          c.hasClass(r.slideDuplicateClass)
            ? n
                .children(
                  '.'
                    .concat(r.slideClass, ':not(.')
                    .concat(
                      r.slideDuplicateClass,
                      ')[data-swiper-slide-index="'
                    )
                    .concat(c.attr('data-swiper-slide-index'), '"]')
                )
                .addClass(r.slideDuplicatePrevClass)
            : n
                .children(
                  '.'
                    .concat(r.slideClass, '.')
                    .concat(r.slideDuplicateClass, '[data-swiper-slide-index="')
                    .concat(c.attr('data-swiper-slide-index'), '"]')
                )
                .addClass(r.slideDuplicatePrevClass)),
        t.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      var t,
        a = this,
        r = a.rtlTranslate ? a.translate : -a.translate,
        n = a.slidesGrid,
        i = a.snapGrid,
        s = a.params,
        o = a.activeIndex,
        l = a.realIndex,
        c = a.snapIndex,
        d = e;
      if (void 0 === d) {
        for (var p = 0; p < n.length; p += 1)
          void 0 !== n[p + 1]
            ? r >= n[p] && r < n[p + 1] - (n[p + 1] - n[p]) / 2
              ? (d = p)
              : r >= n[p] && r < n[p + 1] && (d = p + 1)
            : r >= n[p] && (d = p);
        s.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
      }
      if (i.indexOf(r) >= 0) t = i.indexOf(r);
      else {
        var u = Math.min(s.slidesPerGroupSkip, d);
        t = u + Math.floor((d - u) / s.slidesPerGroup);
      }
      if ((t >= i.length && (t = i.length - 1), d !== o)) {
        var f = parseInt(
          a.slides.eq(d).attr('data-swiper-slide-index') || d,
          10
        );
        Object.assign(a, {
          snapIndex: t,
          realIndex: f,
          previousIndex: o,
          activeIndex: d,
        }),
          a.emit('activeIndexChange'),
          a.emit('snapIndexChange'),
          l !== f && a.emit('realIndexChange'),
          (a.initialized || a.params.runCallbacksOnInit) &&
            a.emit('slideChange');
      } else t !== c && ((a.snapIndex = t), a.emit('snapIndexChange'));
    },
    updateClickedSlide: function (e) {
      var t,
        a = this,
        r = a.params,
        n = P(e).closest('.'.concat(r.slideClass))[0],
        i = !1;
      if (n)
        for (var s = 0; s < a.slides.length; s += 1)
          if (a.slides[s] === n) {
            (i = !0), (t = s);
            break;
          }
      if (!n || !i)
        return (a.clickedSlide = void 0), void (a.clickedIndex = void 0);
      (a.clickedSlide = n),
        a.virtual && a.params.virtual.enabled
          ? (a.clickedIndex = parseInt(
              P(n).attr('data-swiper-slide-index'),
              10
            ))
          : (a.clickedIndex = t),
        r.slideToClickedSlide &&
          void 0 !== a.clickedIndex &&
          a.clickedIndex !== a.activeIndex &&
          a.slideToClickedSlide();
    },
  };
  function U(e, t, a) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = a),
      e
    );
  }
  var K = {
    getTranslate: function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : this.isHorizontal()
            ? 'x'
            : 'y',
        t = this,
        a = t.params,
        r = t.rtlTranslate,
        n = t.translate,
        i = t.$wrapperEl;
      if (a.virtualTranslate) return r ? -n : n;
      if (a.cssMode) return n;
      var s = A(i[0], e);
      return r && (s = -s), s || 0;
    },
    setTranslate: function (e, t) {
      var a = this,
        r = a.rtlTranslate,
        n = a.params,
        i = a.$wrapperEl,
        s = a.wrapperEl,
        o = a.progress,
        l = 0,
        c = 0;
      a.isHorizontal() ? (l = r ? -e : e) : (c = e),
        n.roundLengths && ((l = Math.floor(l)), (c = Math.floor(c))),
        n.cssMode
          ? (s[a.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = a.isHorizontal()
              ? -l
              : -c)
          : n.virtualTranslate ||
            i.transform(
              'translate3d('
                .concat(l, 'px, ')
                .concat(c, 'px, ')
                .concat(0, 'px)')
            ),
        (a.previousTranslate = a.translate),
        (a.translate = a.isHorizontal() ? l : c);
      var d = a.maxTranslate() - a.minTranslate();
      (0 === d ? 0 : (e - a.minTranslate()) / d) !== o && a.updateProgress(e),
        a.emit('setTranslate', a.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : this.params.speed,
        a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        n = arguments.length > 4 ? arguments[4] : void 0,
        i = this,
        s = i.params,
        o = i.wrapperEl;
      if (i.animating && s.preventInteractionOnTransition) return !1;
      var l,
        c = i.minTranslate(),
        d = i.maxTranslate();
      if (
        ((l = r && e > c ? c : r && e < d ? d : e),
        i.updateProgress(l),
        s.cssMode)
      ) {
        var p = i.isHorizontal();
        if (0 === t) o[p ? 'scrollLeft' : 'scrollTop'] = -l;
        else {
          var u;
          if (!i.support.smoothScroll)
            return (
              j({ swiper: i, targetPosition: -l, side: p ? 'left' : 'top' }), !0
            );
          o.scrollTo(
            (U((u = {}), p ? 'left' : 'top', -l), U(u, 'behavior', 'smooth'), u)
          );
        }
        return !0;
      }
      return (
        0 === t
          ? (i.setTransition(0),
            i.setTranslate(l),
            a &&
              (i.emit('beforeTransitionStart', t, n), i.emit('transitionEnd')))
          : (i.setTransition(t),
            i.setTranslate(l),
            a &&
              (i.emit('beforeTransitionStart', t, n),
              i.emit('transitionStart')),
            i.animating ||
              ((i.animating = !0),
              i.onTranslateToWrapperTransitionEnd ||
                (i.onTranslateToWrapperTransitionEnd = function (e) {
                  i &&
                    !i.destroyed &&
                    e.target === this &&
                    (i.$wrapperEl[0].removeEventListener(
                      'transitionend',
                      i.onTranslateToWrapperTransitionEnd
                    ),
                    i.$wrapperEl[0].removeEventListener(
                      'webkitTransitionEnd',
                      i.onTranslateToWrapperTransitionEnd
                    ),
                    (i.onTranslateToWrapperTransitionEnd = null),
                    delete i.onTranslateToWrapperTransitionEnd,
                    a && i.emit('transitionEnd'));
                }),
              i.$wrapperEl[0].addEventListener(
                'transitionend',
                i.onTranslateToWrapperTransitionEnd
              ),
              i.$wrapperEl[0].addEventListener(
                'webkitTransitionEnd',
                i.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function Z(e) {
    var t = e.swiper,
      a = e.runCallbacks,
      r = e.direction,
      n = e.step,
      i = t.activeIndex,
      s = t.previousIndex,
      o = r;
    if (
      (o || (o = i > s ? 'next' : i < s ? 'prev' : 'reset'),
      t.emit('transition'.concat(n)),
      a && i !== s)
    ) {
      if ('reset' === o) return void t.emit('slideResetTransition'.concat(n));
      t.emit('slideChangeTransition'.concat(n)),
        'next' === o
          ? t.emit('slideNextTransition'.concat(n))
          : t.emit('slidePrevTransition'.concat(n));
    }
  }
  var J = {
    setTransition: function (e, t) {
      var a = this;
      a.params.cssMode || a.$wrapperEl.transition(e),
        a.emit('setTransition', e, t);
    },
    transitionStart: function () {
      var e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0,
        a = this,
        r = a.params;
      r.cssMode ||
        (r.autoHeight && a.updateAutoHeight(),
        Z({ swiper: a, runCallbacks: e, direction: t, step: 'Start' }));
    },
    transitionEnd: function () {
      var e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0,
        a = this,
        r = a.params;
      (a.animating = !1),
        r.cssMode ||
          (a.setTransition(0),
          Z({ swiper: a, runCallbacks: e, direction: t, step: 'End' }));
    },
  };
  function Q(e, t, a) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = a),
      e
    );
  }
  function ee(e) {
    return (
      (ee =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      ee(e)
    );
  }
  var te = {
      slideTo: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.params.speed,
          a =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          r = arguments.length > 3 ? arguments[3] : void 0,
          n = arguments.length > 4 ? arguments[4] : void 0;
        if ('number' != typeof e && 'string' != typeof e)
          throw new Error(
            "The 'index' argument cannot have type other than 'number' or 'string'. [".concat(
              ee(e),
              '] given.'
            )
          );
        if ('string' == typeof e) {
          var i = parseInt(e, 10),
            s = isFinite(i);
          if (!s)
            throw new Error(
              "The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(
                e,
                '] given.'
              )
            );
          e = i;
        }
        var o = this,
          l = e;
        l < 0 && (l = 0);
        var c = o.params,
          d = o.snapGrid,
          p = o.slidesGrid,
          u = o.previousIndex,
          f = o.activeIndex,
          h = o.rtlTranslate,
          v = o.wrapperEl,
          m = o.enabled;
        if (
          (o.animating && c.preventInteractionOnTransition) ||
          (!m && !r && !n)
        )
          return !1;
        var g = Math.min(o.params.slidesPerGroupSkip, l),
          b = g + Math.floor((l - g) / o.params.slidesPerGroup);
        b >= d.length && (b = d.length - 1),
          (f || c.initialSlide || 0) === (u || 0) &&
            a &&
            o.emit('beforeSlideChangeStart');
        var w,
          y = -d[b];
        if ((o.updateProgress(y), c.normalizeSlideIndex))
          for (var x = 0; x < p.length; x += 1) {
            var E = -Math.floor(100 * y),
              S = Math.floor(100 * p[x]),
              T = Math.floor(100 * p[x + 1]);
            void 0 !== p[x + 1]
              ? E >= S && E < T - (T - S) / 2
                ? (l = x)
                : E >= S && E < T && (l = x + 1)
              : E >= S && (l = x);
          }
        if (o.initialized && l !== f) {
          if (!o.allowSlideNext && y < o.translate && y < o.minTranslate())
            return !1;
          if (
            !o.allowSlidePrev &&
            y > o.translate &&
            y > o.maxTranslate() &&
            (f || 0) !== l
          )
            return !1;
        }
        if (
          ((w = l > f ? 'next' : l < f ? 'prev' : 'reset'),
          (h && -y === o.translate) || (!h && y === o.translate))
        )
          return (
            o.updateActiveIndex(l),
            c.autoHeight && o.updateAutoHeight(),
            o.updateSlidesClasses(),
            'slide' !== c.effect && o.setTranslate(y),
            'reset' !== w && (o.transitionStart(a, w), o.transitionEnd(a, w)),
            !1
          );
        if (c.cssMode) {
          var C = o.isHorizontal(),
            M = h ? y : -y;
          if (0 === t) {
            var P = o.virtual && o.params.virtual.enabled;
            P &&
              ((o.wrapperEl.style.scrollSnapType = 'none'),
              (o._immediateVirtual = !0)),
              (v[C ? 'scrollLeft' : 'scrollTop'] = M),
              P &&
                requestAnimationFrame(function () {
                  (o.wrapperEl.style.scrollSnapType = ''),
                    (o._swiperImmediateVirtual = !1);
                });
          } else {
            var k;
            if (!o.support.smoothScroll)
              return (
                j({ swiper: o, targetPosition: M, side: C ? 'left' : 'top' }),
                !0
              );
            v.scrollTo(
              (Q((k = {}), C ? 'left' : 'top', M),
              Q(k, 'behavior', 'smooth'),
              k)
            );
          }
          return !0;
        }
        return (
          o.setTransition(t),
          o.setTranslate(y),
          o.updateActiveIndex(l),
          o.updateSlidesClasses(),
          o.emit('beforeTransitionStart', t, r),
          o.transitionStart(a, w),
          0 === t
            ? o.transitionEnd(a, w)
            : o.animating ||
              ((o.animating = !0),
              o.onSlideToWrapperTransitionEnd ||
                (o.onSlideToWrapperTransitionEnd = function (e) {
                  o &&
                    !o.destroyed &&
                    e.target === this &&
                    (o.$wrapperEl[0].removeEventListener(
                      'transitionend',
                      o.onSlideToWrapperTransitionEnd
                    ),
                    o.$wrapperEl[0].removeEventListener(
                      'webkitTransitionEnd',
                      o.onSlideToWrapperTransitionEnd
                    ),
                    (o.onSlideToWrapperTransitionEnd = null),
                    delete o.onSlideToWrapperTransitionEnd,
                    o.transitionEnd(a, w));
                }),
              o.$wrapperEl[0].addEventListener(
                'transitionend',
                o.onSlideToWrapperTransitionEnd
              ),
              o.$wrapperEl[0].addEventListener(
                'webkitTransitionEnd',
                o.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.params.speed,
          a =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          r = arguments.length > 3 ? arguments[3] : void 0,
          n = this,
          i = e;
        return n.params.loop && (i += n.loopedSlides), n.slideTo(i, t, a, r);
      },
      slideNext: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.params.speed,
          t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          a = arguments.length > 2 ? arguments[2] : void 0,
          r = this,
          n = r.animating,
          i = r.enabled,
          s = r.params;
        if (!i) return r;
        var o = s.slidesPerGroup;
        'auto' === s.slidesPerView &&
          1 === s.slidesPerGroup &&
          s.slidesPerGroupAuto &&
          (o = Math.max(r.slidesPerViewDynamic('current', !0), 1));
        var l = r.activeIndex < s.slidesPerGroupSkip ? 1 : o;
        if (s.loop) {
          if (n && s.loopPreventsSlide) return !1;
          r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
        }
        return s.rewind && r.isEnd
          ? r.slideTo(0, e, t, a)
          : r.slideTo(r.activeIndex + l, e, t, a);
      },
      slidePrev: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.params.speed,
          t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          a = arguments.length > 2 ? arguments[2] : void 0,
          r = this,
          n = r.params,
          i = r.animating,
          s = r.snapGrid,
          o = r.slidesGrid,
          l = r.rtlTranslate,
          c = r.enabled;
        if (!c) return r;
        if (n.loop) {
          if (i && n.loopPreventsSlide) return !1;
          r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
        }
        var d = l ? r.translate : -r.translate;
        function p(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        var u,
          f = p(d),
          h = s.map(function (e) {
            return p(e);
          }),
          v = s[h.indexOf(f) - 1];
        void 0 === v &&
          n.cssMode &&
          (s.forEach(function (e, t) {
            f >= e && (u = t);
          }),
          void 0 !== u && (v = s[u > 0 ? u - 1 : u]));
        var m = 0;
        return (
          void 0 !== v &&
            ((m = o.indexOf(v)) < 0 && (m = r.activeIndex - 1),
            'auto' === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              ((m = m - r.slidesPerViewDynamic('previous', !0) + 1),
              (m = Math.max(m, 0)))),
          n.rewind && r.isBeginning
            ? r.slideTo(r.slides.length - 1, e, t, a)
            : r.slideTo(m, e, t, a)
        );
      },
      slideReset: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.params.speed,
          t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          a = arguments.length > 2 ? arguments[2] : void 0,
          r = this;
        return r.slideTo(r.activeIndex, e, t, a);
      },
      slideToClosest: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.params.speed,
          t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          a = arguments.length > 2 ? arguments[2] : void 0,
          r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 0.5,
          n = this,
          i = n.activeIndex,
          s = Math.min(n.params.slidesPerGroupSkip, i),
          o = s + Math.floor((i - s) / n.params.slidesPerGroup),
          l = n.rtlTranslate ? n.translate : -n.translate;
        if (l >= n.snapGrid[o]) {
          var c = n.snapGrid[o],
            d = n.snapGrid[o + 1];
          l - c > (d - c) * r && (i += n.params.slidesPerGroup);
        } else {
          var p = n.snapGrid[o - 1],
            u = n.snapGrid[o];
          l - p <= (u - p) * r && (i -= n.params.slidesPerGroup);
        }
        return (
          (i = Math.max(i, 0)),
          (i = Math.min(i, n.slidesGrid.length - 1)),
          n.slideTo(i, e, t, a)
        );
      },
      slideToClickedSlide: function () {
        var e,
          t = this,
          a = t.params,
          r = t.$wrapperEl,
          n =
            'auto' === a.slidesPerView
              ? t.slidesPerViewDynamic()
              : a.slidesPerView,
          i = t.clickedIndex;
        if (a.loop) {
          if (t.animating) return;
          (e = parseInt(P(t.clickedSlide).attr('data-swiper-slide-index'), 10)),
            a.centeredSlides
              ? i < t.loopedSlides - n / 2 ||
                i > t.slides.length - t.loopedSlides + n / 2
                ? (t.loopFix(),
                  (i = r
                    .children(
                      '.'
                        .concat(a.slideClass, '[data-swiper-slide-index="')
                        .concat(e, '"]:not(.')
                        .concat(a.slideDuplicateClass, ')')
                    )
                    .eq(0)
                    .index()),
                  O(function () {
                    t.slideTo(i);
                  }))
                : t.slideTo(i)
              : i > t.slides.length - n
              ? (t.loopFix(),
                (i = r
                  .children(
                    '.'
                      .concat(a.slideClass, '[data-swiper-slide-index="')
                      .concat(e, '"]:not(.')
                      .concat(a.slideDuplicateClass, ')')
                  )
                  .eq(0)
                  .index()),
                O(function () {
                  t.slideTo(i);
                }))
              : t.slideTo(i);
        } else t.slideTo(i);
      },
    },
    ae = {
      loopCreate: function () {
        var e = this,
          t = n(),
          a = e.params,
          r = e.$wrapperEl,
          i = r.children().length > 0 ? P(r.children()[0].parentNode) : r;
        i.children(
          '.'.concat(a.slideClass, '.').concat(a.slideDuplicateClass)
        ).remove();
        var s = i.children('.'.concat(a.slideClass));
        if (a.loopFillGroupWithBlank) {
          var o = a.slidesPerGroup - (s.length % a.slidesPerGroup);
          if (o !== a.slidesPerGroup) {
            for (var l = 0; l < o; l += 1) {
              var c = P(t.createElement('div')).addClass(
                ''.concat(a.slideClass, ' ').concat(a.slideBlankClass)
              );
              i.append(c);
            }
            s = i.children('.'.concat(a.slideClass));
          }
        }
        'auto' !== a.slidesPerView ||
          a.loopedSlides ||
          (a.loopedSlides = s.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(a.loopedSlides || a.slidesPerView, 10)
          )),
          (e.loopedSlides += a.loopAdditionalSlides),
          e.loopedSlides > s.length && (e.loopedSlides = s.length);
        var d = [],
          p = [];
        s.each(function (t, a) {
          var r = P(t);
          a < e.loopedSlides && p.push(t),
            a < s.length && a >= s.length - e.loopedSlides && d.push(t),
            r.attr('data-swiper-slide-index', a);
        });
        for (var u = 0; u < p.length; u += 1)
          i.append(P(p[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
        for (var f = d.length - 1; f >= 0; f -= 1)
          i.prepend(P(d[f].cloneNode(!0)).addClass(a.slideDuplicateClass));
      },
      loopFix: function () {
        var e = this;
        e.emit('beforeLoopFix');
        var t,
          a = e.activeIndex,
          r = e.slides,
          n = e.loopedSlides,
          i = e.allowSlidePrev,
          s = e.allowSlideNext,
          o = e.snapGrid,
          l = e.rtlTranslate;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        var c = -o[a] - e.getTranslate();
        a < n
          ? ((t = r.length - 3 * n + a),
            (t += n),
            e.slideTo(t, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((l ? -e.translate : e.translate) - c))
          : a >= r.length - n &&
            ((t = -r.length + a + n),
            (t += n),
            e.slideTo(t, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((l ? -e.translate : e.translate) - c)),
          (e.allowSlidePrev = i),
          (e.allowSlideNext = s),
          e.emit('loopFix');
      },
      loopDestroy: function () {
        var e = this,
          t = e.$wrapperEl,
          a = e.params,
          r = e.slides;
        t
          .children(
            '.'
              .concat(a.slideClass, '.')
              .concat(a.slideDuplicateClass, ',.')
              .concat(a.slideClass, '.')
              .concat(a.slideBlankClass)
          )
          .remove(),
          r.removeAttr('data-swiper-slide-index');
      },
    };
  function re(e) {
    var t = this,
      a = n(),
      r = s(),
      i = t.touchEventsData,
      o = t.params,
      l = t.touches;
    if (t.enabled && (!t.animating || !o.preventInteractionOnTransition)) {
      !t.animating && o.cssMode && o.loop && t.loopFix();
      var c = e;
      c.originalEvent && (c = c.originalEvent);
      var d = P(c.target);
      if (
        ('wrapper' !== o.touchEventsTarget || d.closest(t.wrapperEl).length) &&
        ((i.isTouchEvent = 'touchstart' === c.type),
        (i.isTouchEvent || !('which' in c) || 3 !== c.which) &&
          !(
            (!i.isTouchEvent && 'button' in c && c.button > 0) ||
            (i.isTouched && i.isMoved)
          ))
      ) {
        o.noSwipingClass &&
          '' !== o.noSwipingClass &&
          c.target &&
          c.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (d = P(e.path[0]));
        var p = o.noSwipingSelector
            ? o.noSwipingSelector
            : '.'.concat(o.noSwipingClass),
          u = !(!c.target || !c.target.shadowRoot);
        if (
          o.noSwiping &&
          (u
            ? (function (e) {
                function t(a) {
                  return a && a !== n() && a !== s()
                    ? (a.assignedSlot && (a = a.assignedSlot),
                      a.closest(e) || t(a.getRootNode().host))
                    : null;
                }
                return t(
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this
                );
              })(p, c.target)
            : d.closest(p)[0])
        )
          t.allowClick = !0;
        else if (!o.swipeHandler || d.closest(o.swipeHandler)[0]) {
          (l.currentX =
            'touchstart' === c.type ? c.targetTouches[0].pageX : c.pageX),
            (l.currentY =
              'touchstart' === c.type ? c.targetTouches[0].pageY : c.pageY);
          var f = l.currentX,
            h = l.currentY,
            v = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
            m = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
          if (v && (f <= m || f >= r.innerWidth - m)) {
            if ('prevent' !== v) return;
            e.preventDefault();
          }
          if (
            (Object.assign(i, {
              isTouched: !0,
              isMoved: !1,
              allowTouchCallbacks: !0,
              isScrolling: void 0,
              startMoving: void 0,
            }),
            (l.startX = f),
            (l.startY = h),
            (i.touchStartTime = I()),
            (t.allowClick = !0),
            t.updateSize(),
            (t.swipeDirection = void 0),
            o.threshold > 0 && (i.allowThresholdMove = !1),
            'touchstart' !== c.type)
          ) {
            var g = !0;
            d.is(i.focusableElements) && (g = !1),
              a.activeElement &&
                P(a.activeElement).is(i.focusableElements) &&
                a.activeElement !== d[0] &&
                a.activeElement.blur();
            var b = g && t.allowTouchMove && o.touchStartPreventDefault;
            (!o.touchStartForcePreventDefault && !b) ||
              d[0].isContentEditable ||
              c.preventDefault();
          }
          t.emit('touchStart', c);
        }
      }
    }
  }
  function ne(e) {
    var t = n(),
      a = this,
      r = a.touchEventsData,
      i = a.params,
      s = a.touches,
      o = a.rtlTranslate;
    if (a.enabled) {
      var l = e;
      if ((l.originalEvent && (l = l.originalEvent), r.isTouched)) {
        if (!r.isTouchEvent || 'touchmove' === l.type) {
          var c =
              'touchmove' === l.type &&
              l.targetTouches &&
              (l.targetTouches[0] || l.changedTouches[0]),
            d = 'touchmove' === l.type ? c.pageX : l.pageX,
            p = 'touchmove' === l.type ? c.pageY : l.pageY;
          if (l.preventedByNestedSwiper)
            return (s.startX = d), void (s.startY = p);
          if (!a.allowTouchMove)
            return (
              (a.allowClick = !1),
              void (
                r.isTouched &&
                (Object.assign(s, {
                  startX: d,
                  startY: p,
                  currentX: d,
                  currentY: p,
                }),
                (r.touchStartTime = I()))
              )
            );
          if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
            if (a.isVertical()) {
              if (
                (p < s.startY && a.translate <= a.maxTranslate()) ||
                (p > s.startY && a.translate >= a.minTranslate())
              )
                return (r.isTouched = !1), void (r.isMoved = !1);
            } else if (
              (d < s.startX && a.translate <= a.maxTranslate()) ||
              (d > s.startX && a.translate >= a.minTranslate())
            )
              return;
          if (
            r.isTouchEvent &&
            t.activeElement &&
            l.target === t.activeElement &&
            P(l.target).is(r.focusableElements)
          )
            return (r.isMoved = !0), void (a.allowClick = !1);
          if (
            (r.allowTouchCallbacks && a.emit('touchMove', l),
            !(l.targetTouches && l.targetTouches.length > 1))
          ) {
            (s.currentX = d), (s.currentY = p);
            var u,
              f = s.currentX - s.startX,
              h = s.currentY - s.startY;
            if (
              !(
                a.params.threshold &&
                Math.sqrt(Math.pow(f, 2) + Math.pow(h, 2)) < a.params.threshold
              )
            )
              if (
                (void 0 === r.isScrolling &&
                  ((a.isHorizontal() && s.currentY === s.startY) ||
                  (a.isVertical() && s.currentX === s.startX)
                    ? (r.isScrolling = !1)
                    : f * f + h * h >= 25 &&
                      ((u =
                        (180 * Math.atan2(Math.abs(h), Math.abs(f))) / Math.PI),
                      (r.isScrolling = a.isHorizontal()
                        ? u > i.touchAngle
                        : 90 - u > i.touchAngle))),
                r.isScrolling && a.emit('touchMoveOpposite', l),
                void 0 === r.startMoving &&
                  ((s.currentX === s.startX && s.currentY === s.startY) ||
                    (r.startMoving = !0)),
                r.isScrolling)
              )
                r.isTouched = !1;
              else if (r.startMoving) {
                (a.allowClick = !1),
                  !i.cssMode && l.cancelable && l.preventDefault(),
                  i.touchMoveStopPropagation &&
                    !i.nested &&
                    l.stopPropagation(),
                  r.isMoved ||
                    (i.loop && !i.cssMode && a.loopFix(),
                    (r.startTranslate = a.getTranslate()),
                    a.setTransition(0),
                    a.animating &&
                      a.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
                    (r.allowMomentumBounce = !1),
                    !i.grabCursor ||
                      (!0 !== a.allowSlideNext && !0 !== a.allowSlidePrev) ||
                      a.setGrabCursor(!0),
                    a.emit('sliderFirstMove', l)),
                  a.emit('sliderMove', l),
                  (r.isMoved = !0);
                var v = a.isHorizontal() ? f : h;
                (s.diff = v),
                  (v *= i.touchRatio),
                  o && (v = -v),
                  (a.swipeDirection = v > 0 ? 'prev' : 'next'),
                  (r.currentTranslate = v + r.startTranslate);
                var m = !0,
                  g = i.resistanceRatio;
                if (
                  (i.touchReleaseOnEdges && (g = 0),
                  v > 0 && r.currentTranslate > a.minTranslate()
                    ? ((m = !1),
                      i.resistance &&
                        (r.currentTranslate =
                          a.minTranslate() -
                          1 +
                          Math.pow(
                            -a.minTranslate() + r.startTranslate + v,
                            g
                          )))
                    : v < 0 &&
                      r.currentTranslate < a.maxTranslate() &&
                      ((m = !1),
                      i.resistance &&
                        (r.currentTranslate =
                          a.maxTranslate() +
                          1 -
                          Math.pow(
                            a.maxTranslate() - r.startTranslate - v,
                            g
                          ))),
                  m && (l.preventedByNestedSwiper = !0),
                  !a.allowSlideNext &&
                    'next' === a.swipeDirection &&
                    r.currentTranslate < r.startTranslate &&
                    (r.currentTranslate = r.startTranslate),
                  !a.allowSlidePrev &&
                    'prev' === a.swipeDirection &&
                    r.currentTranslate > r.startTranslate &&
                    (r.currentTranslate = r.startTranslate),
                  a.allowSlidePrev ||
                    a.allowSlideNext ||
                    (r.currentTranslate = r.startTranslate),
                  i.threshold > 0)
                ) {
                  if (!(Math.abs(v) > i.threshold || r.allowThresholdMove))
                    return void (r.currentTranslate = r.startTranslate);
                  if (!r.allowThresholdMove)
                    return (
                      (r.allowThresholdMove = !0),
                      (s.startX = s.currentX),
                      (s.startY = s.currentY),
                      (r.currentTranslate = r.startTranslate),
                      void (s.diff = a.isHorizontal()
                        ? s.currentX - s.startX
                        : s.currentY - s.startY)
                    );
                }
                i.followFinger &&
                  !i.cssMode &&
                  (((i.freeMode && i.freeMode.enabled && a.freeMode) ||
                    i.watchSlidesProgress) &&
                    (a.updateActiveIndex(), a.updateSlidesClasses()),
                  a.params.freeMode &&
                    i.freeMode.enabled &&
                    a.freeMode &&
                    a.freeMode.onTouchMove(),
                  a.updateProgress(r.currentTranslate),
                  a.setTranslate(r.currentTranslate));
              }
          }
        }
      } else r.startMoving && r.isScrolling && a.emit('touchMoveOpposite', l);
    }
  }
  function ie(e) {
    var t = this,
      a = t.touchEventsData,
      r = t.params,
      n = t.touches,
      i = t.rtlTranslate,
      s = t.slidesGrid;
    if (t.enabled) {
      var o = e;
      if (
        (o.originalEvent && (o = o.originalEvent),
        a.allowTouchCallbacks && t.emit('touchEnd', o),
        (a.allowTouchCallbacks = !1),
        !a.isTouched)
      )
        return (
          a.isMoved && r.grabCursor && t.setGrabCursor(!1),
          (a.isMoved = !1),
          void (a.startMoving = !1)
        );
      r.grabCursor &&
        a.isMoved &&
        a.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      var l,
        c = I(),
        d = c - a.touchStartTime;
      if (t.allowClick) {
        var p = o.path || (o.composedPath && o.composedPath());
        t.updateClickedSlide((p && p[0]) || o.target),
          t.emit('tap click', o),
          d < 300 &&
            c - a.lastClickTime < 300 &&
            t.emit('doubleTap doubleClick', o);
      }
      if (
        ((a.lastClickTime = I()),
        O(function () {
          t.destroyed || (t.allowClick = !0);
        }),
        !a.isTouched ||
          !a.isMoved ||
          !t.swipeDirection ||
          0 === n.diff ||
          a.currentTranslate === a.startTranslate)
      )
        return (a.isTouched = !1), (a.isMoved = !1), void (a.startMoving = !1);
      if (
        ((a.isTouched = !1),
        (a.isMoved = !1),
        (a.startMoving = !1),
        (l = r.followFinger
          ? i
            ? t.translate
            : -t.translate
          : -a.currentTranslate),
        !r.cssMode)
      )
        if (t.params.freeMode && r.freeMode.enabled)
          t.freeMode.onTouchEnd({ currentPos: l });
        else {
          for (
            var u = 0, f = t.slidesSizesGrid[0], h = 0;
            h < s.length;
            h += h < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
          ) {
            var v = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            void 0 !== s[h + v]
              ? l >= s[h] && l < s[h + v] && ((u = h), (f = s[h + v] - s[h]))
              : l >= s[h] && ((u = h), (f = s[s.length - 1] - s[s.length - 2]));
          }
          var m = (l - s[u]) / f,
            g = u < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
          if (d > r.longSwipesMs) {
            if (!r.longSwipes) return void t.slideTo(t.activeIndex);
            'next' === t.swipeDirection &&
              (m >= r.longSwipesRatio ? t.slideTo(u + g) : t.slideTo(u)),
              'prev' === t.swipeDirection &&
                (m > 1 - r.longSwipesRatio ? t.slideTo(u + g) : t.slideTo(u));
          } else {
            if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
            !t.navigation ||
            (o.target !== t.navigation.nextEl &&
              o.target !== t.navigation.prevEl)
              ? ('next' === t.swipeDirection && t.slideTo(u + g),
                'prev' === t.swipeDirection && t.slideTo(u))
              : o.target === t.navigation.nextEl
              ? t.slideTo(u + g)
              : t.slideTo(u);
          }
        }
    }
  }
  function se() {
    var e = this,
      t = e.params,
      a = e.el;
    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var r = e.allowSlideNext,
        n = e.allowSlidePrev,
        i = e.snapGrid;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ('auto' === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = r),
        e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
    }
  }
  function oe(e) {
    var t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function le() {
    var e = this,
      t = e.wrapperEl,
      a = e.rtlTranslate;
    if (e.enabled) {
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      var r = e.maxTranslate() - e.minTranslate();
      (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress &&
        e.updateProgress(a ? -e.translate : e.translate),
        e.emit('setTranslate', e.translate, !1);
    }
  }
  var ce = !1;
  function de() {}
  var pe = function (e, t) {
      var a = n(),
        r = e.params,
        i = e.touchEvents,
        s = e.el,
        o = e.wrapperEl,
        l = e.device,
        c = e.support,
        d = !!r.nested,
        p = 'on' === t ? 'addEventListener' : 'removeEventListener',
        u = t;
      if (c.touch) {
        var f = !(
          'touchstart' !== i.start ||
          !c.passiveListener ||
          !r.passiveListeners
        ) && { passive: !0, capture: !1 };
        s[p](i.start, e.onTouchStart, f),
          s[p](
            i.move,
            e.onTouchMove,
            c.passiveListener ? { passive: !1, capture: d } : d
          ),
          s[p](i.end, e.onTouchEnd, f),
          i.cancel && s[p](i.cancel, e.onTouchEnd, f);
      } else
        s[p](i.start, e.onTouchStart, !1),
          a[p](i.move, e.onTouchMove, d),
          a[p](i.end, e.onTouchEnd, !1);
      (r.preventClicks || r.preventClicksPropagation) &&
        s[p]('click', e.onClick, !0),
        r.cssMode && o[p]('scroll', e.onScroll),
        r.updateOnWindowResize
          ? e[u](
              l.ios || l.android
                ? 'resize orientationchange observerUpdate'
                : 'resize observerUpdate',
              se,
              !0
            )
          : e[u]('observerUpdate', se, !0);
    },
    ue = {
      attachEvents: function () {
        var e = this,
          t = n(),
          a = e.params,
          r = e.support;
        (e.onTouchStart = re.bind(e)),
          (e.onTouchMove = ne.bind(e)),
          (e.onTouchEnd = ie.bind(e)),
          a.cssMode && (e.onScroll = le.bind(e)),
          (e.onClick = oe.bind(e)),
          r.touch && !ce && (t.addEventListener('touchstart', de), (ce = !0)),
          pe(e, 'on');
      },
      detachEvents: function () {
        pe(this, 'off');
      },
    },
    fe = function (e, t) {
      return e.grid && t.grid && t.grid.rows > 1;
    },
    he = {
      setBreakpoint: function () {
        var e = this,
          t = e.activeIndex,
          a = e.initialized,
          r = e.loopedSlides,
          n = void 0 === r ? 0 : r,
          i = e.params,
          s = e.$el,
          o = i.breakpoints;
        if (o && (!o || 0 !== Object.keys(o).length)) {
          var l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
          if (l && e.currentBreakpoint !== l) {
            var c = (l in o ? o[l] : void 0) || e.originalParams,
              d = fe(e, i),
              p = fe(e, c),
              u = i.enabled;
            d && !p
              ? (s.removeClass(
                  ''
                    .concat(i.containerModifierClass, 'grid ')
                    .concat(i.containerModifierClass, 'grid-column')
                ),
                e.emitContainerClasses())
              : !d &&
                p &&
                (s.addClass(''.concat(i.containerModifierClass, 'grid')),
                ((c.grid.fill && 'column' === c.grid.fill) ||
                  (!c.grid.fill && 'column' === i.grid.fill)) &&
                  s.addClass(
                    ''.concat(i.containerModifierClass, 'grid-column')
                  ),
                e.emitContainerClasses());
            var f = c.direction && c.direction !== i.direction,
              h = i.loop && (c.slidesPerView !== i.slidesPerView || f);
            f && a && e.changeDirection(), B(e.params, c);
            var v = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              u && !v ? e.disable() : !u && v && e.enable(),
              (e.currentBreakpoint = l),
              e.emit('_beforeBreakpoint', c),
              h &&
                a &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - n + e.loopedSlides, 0, !1)),
              e.emit('breakpoint', c);
          }
        }
      },
      getBreakpoint: function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'window',
          a = arguments.length > 2 ? arguments[2] : void 0;
        if (e && ('container' !== t || a)) {
          var r = !1,
            n = s(),
            i = 'window' === t ? n.innerHeight : a.clientHeight,
            o = Object.keys(e).map(function (e) {
              if ('string' == typeof e && 0 === e.indexOf('@')) {
                var t = parseFloat(e.substr(1));
                return { value: i * t, point: e };
              }
              return { value: e, point: e };
            });
          o.sort(function (e, t) {
            return parseInt(e.value, 10) - parseInt(t.value, 10);
          });
          for (var l = 0; l < o.length; l += 1) {
            var c = o[l],
              d = c.point,
              p = c.value;
            'window' === t
              ? n.matchMedia('(min-width: '.concat(p, 'px)')).matches && (r = d)
              : p <= a.clientWidth && (r = d);
          }
          return r || 'max';
        }
      },
    };
  function ve(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return me(e);
      })(e) ||
      (function (e) {
        if (
          ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ('string' == typeof e) return me(e, t);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === a && e.constructor && (a = e.constructor.name),
            'Map' === a || 'Set' === a
              ? Array.from(e)
              : 'Arguments' === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? me(e, t)
              : void 0
          );
        }
      })(e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function me(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
    return r;
  }
  function ge(e) {
    return (
      (ge =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      ge(e)
    );
  }
  var be = {
      addClasses: function () {
        var e,
          t,
          a,
          r = this,
          n = r.classNames,
          i = r.params,
          s = r.rtl,
          o = r.$el,
          l = r.device,
          c = r.support,
          d =
            ((e = [
              'initialized',
              i.direction,
              { 'pointer-events': !c.touch },
              { 'free-mode': r.params.freeMode && i.freeMode.enabled },
              { autoheight: i.autoHeight },
              { rtl: s },
              { grid: i.grid && i.grid.rows > 1 },
              {
                'grid-column':
                  i.grid && i.grid.rows > 1 && 'column' === i.grid.fill,
              },
              { android: l.android },
              { ios: l.ios },
              { 'css-mode': i.cssMode },
              { centered: i.cssMode && i.centeredSlides },
            ]),
            (t = i.containerModifierClass),
            (a = []),
            e.forEach(function (e) {
              'object' === ge(e)
                ? Object.keys(e).forEach(function (r) {
                    e[r] && a.push(t + r);
                  })
                : 'string' == typeof e && a.push(t + e);
            }),
            a);
        n.push.apply(n, ve(d)),
          o.addClass(ve(n).join(' ')),
          r.emitContainerClasses();
      },
      removeClasses: function () {
        var e = this,
          t = e.$el,
          a = e.classNames;
        t.removeClass(a.join(' ')), e.emitContainerClasses();
      },
    },
    we = {
      init: !0,
      direction: 'horizontal',
      touchEventsTarget: 'wrapper',
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        'input, select, option, textarea, button, video, label',
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: 'slide',
      breakpoints: void 0,
      breakpointsBase: 'window',
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: 'swiper-',
      slideClass: 'swiper-slide',
      slideBlankClass: 'swiper-slide-invisible-blank',
      slideActiveClass: 'swiper-slide-active',
      slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slideDuplicateNextClass: 'swiper-slide-duplicate-next',
      slidePrevClass: 'swiper-slide-prev',
      slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
      wrapperClass: 'swiper-wrapper',
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
  function ye(e) {
    return (
      (ye =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      ye(e)
    );
  }
  function xe(e, t) {
    return function () {
      var a =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = Object.keys(a)[0],
        n = a[r];
      'object' === ye(n) && null !== n
        ? (['navigation', 'pagination', 'scrollbar'].indexOf(r) >= 0 &&
            !0 === e[r] &&
            (e[r] = { auto: !0 }),
          r in e && 'enabled' in n
            ? (!0 === e[r] && (e[r] = { enabled: !0 }),
              'object' !== ye(e[r]) || 'enabled' in e[r] || (e[r].enabled = !0),
              e[r] || (e[r] = { enabled: !1 }),
              B(t, a))
            : B(t, a))
        : B(t, a);
    };
  }
  function Ee(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return Se(e);
      })(e) ||
      (function (e) {
        if (
          ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ('string' == typeof e) return Se(e, t);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === a && e.constructor && (a = e.constructor.name),
            'Map' === a || 'Set' === a
              ? Array.from(e)
              : 'Arguments' === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? Se(e, t)
              : void 0
          );
        }
      })(e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function Se(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
    return r;
  }
  function Te(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  function Ce(e, t) {
    for (var a = 0; a < t.length; a++) {
      var r = t[a];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  var Me = {
      eventsEmitter: V,
      update: F,
      translate: K,
      transition: J,
      slide: te,
      loop: ae,
      grabCursor: {
        setGrabCursor: function (e) {
          var t = this;
          if (
            !(
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
          ) {
            var a =
              'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (a.style.cursor = 'move'),
              (a.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
              (a.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
              (a.style.cursor = e ? 'grabbing' : 'grab');
          }
        },
        unsetGrabCursor: function () {
          var e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              'container' === e.params.touchEventsTarget ? 'el' : 'wrapperEl'
            ].style.cursor = '');
        },
      },
      events: ue,
      breakpoints: he,
      checkOverflow: {
        checkOverflow: function () {
          var e = this,
            t = e.isLocked,
            a = e.params,
            r = a.slidesOffsetBefore;
          if (r) {
            var n = e.slides.length - 1,
              i = e.slidesGrid[n] + e.slidesSizesGrid[n] + 2 * r;
            e.isLocked = e.size > i;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === a.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === a.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
        },
      },
      classes: be,
      images: {
        loadImage: function (e, t, a, r, n, i) {
          var o,
            l = s();
          function c() {
            i && i();
          }
          P(e).parent('picture')[0] || (e.complete && n)
            ? c()
            : t
            ? (((o = new l.Image()).onload = c),
              (o.onerror = c),
              r && (o.sizes = r),
              a && (o.srcset = a),
              t && (o.src = t))
            : c();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit('imagesReady')));
          }
          e.imagesToLoad = e.$el.find('img');
          for (var a = 0; a < e.imagesToLoad.length; a += 1) {
            var r = e.imagesToLoad[a];
            e.loadImage(
              r,
              r.currentSrc || r.getAttribute('src'),
              r.srcset || r.getAttribute('srcset'),
              r.sizes || r.getAttribute('sizes'),
              !0,
              t
            );
          }
        },
      },
    },
    Pe = {},
    ke = (function () {
      function e() {
        var t, a;
        Te(this, e);
        for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
          n[i] = arguments[i];
        if (
          (1 === n.length &&
          n[0].constructor &&
          'Object' === Object.prototype.toString.call(n[0]).slice(8, -1)
            ? (a = n[0])
            : ((t = n[0]), (a = n[1])),
          a || (a = {}),
          (a = B({}, a)),
          t && !a.el && (a.el = t),
          a.el && P(a.el).length > 1)
        ) {
          var s = [];
          return (
            P(a.el).each(function (t) {
              var r = B({}, a, { el: t });
              s.push(new e(r));
            }),
            s
          );
        }
        var o,
          l = this;
        (l.__swiper__ = !0),
          (l.support = X()),
          (l.device = Y({ userAgent: a.userAgent })),
          (l.browser = R()),
          (l.eventsListeners = {}),
          (l.eventsAnyListeners = []),
          (l.modules = Ee(l.__modules__)),
          a.modules &&
            Array.isArray(a.modules) &&
            (o = l.modules).push.apply(o, Ee(a.modules));
        var c = {};
        l.modules.forEach(function (e) {
          e({
            swiper: l,
            extendParams: xe(a, c),
            on: l.on.bind(l),
            once: l.once.bind(l),
            off: l.off.bind(l),
            emit: l.emit.bind(l),
          });
        });
        var d,
          p,
          u = B({}, we, c);
        return (
          (l.params = B({}, u, Pe, a)),
          (l.originalParams = B({}, l.params)),
          (l.passedParams = B({}, a)),
          l.params &&
            l.params.on &&
            Object.keys(l.params.on).forEach(function (e) {
              l.on(e, l.params.on[e]);
            }),
          l.params && l.params.onAny && l.onAny(l.params.onAny),
          (l.$ = P),
          Object.assign(l, {
            enabled: l.params.enabled,
            el: t,
            classNames: [],
            slides: P(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function () {
              return 'horizontal' === l.params.direction;
            },
            isVertical: function () {
              return 'vertical' === l.params.direction;
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            touchEvents:
              ((d = ['touchstart', 'touchmove', 'touchend', 'touchcancel']),
              (p = ['pointerdown', 'pointermove', 'pointerup']),
              (l.touchEventsTouch = {
                start: d[0],
                move: d[1],
                end: d[2],
                cancel: d[3],
              }),
              (l.touchEventsDesktop = { start: p[0], move: p[1], end: p[2] }),
              l.support.touch || !l.params.simulateTouch
                ? l.touchEventsTouch
                : l.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: l.params.focusableElements,
              lastClickTime: I(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: l.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          l.emit('_swiper'),
          l.params.init && l.init(),
          l
        );
      }
      var t, a, r;
      return (
        (t = e),
        (a = [
          {
            key: 'enable',
            value: function () {
              var e = this;
              e.enabled ||
                ((e.enabled = !0),
                e.params.grabCursor && e.setGrabCursor(),
                e.emit('enable'));
            },
          },
          {
            key: 'disable',
            value: function () {
              var e = this;
              e.enabled &&
                ((e.enabled = !1),
                e.params.grabCursor && e.unsetGrabCursor(),
                e.emit('disable'));
            },
          },
          {
            key: 'setProgress',
            value: function (e, t) {
              var a = this;
              e = Math.min(Math.max(e, 0), 1);
              var r = a.minTranslate(),
                n = (a.maxTranslate() - r) * e + r;
              a.translateTo(n, void 0 === t ? 0 : t),
                a.updateActiveIndex(),
                a.updateSlidesClasses();
            },
          },
          {
            key: 'emitContainerClasses',
            value: function () {
              var e = this;
              if (e.params._emitClasses && e.el) {
                var t = e.el.className.split(' ').filter(function (t) {
                  return (
                    0 === t.indexOf('swiper') ||
                    0 === t.indexOf(e.params.containerModifierClass)
                  );
                });
                e.emit('_containerClasses', t.join(' '));
              }
            },
          },
          {
            key: 'getSlideClasses',
            value: function (e) {
              var t = this;
              return e.className
                .split(' ')
                .filter(function (e) {
                  return (
                    0 === e.indexOf('swiper-slide') ||
                    0 === e.indexOf(t.params.slideClass)
                  );
                })
                .join(' ');
            },
          },
          {
            key: 'emitSlidesClasses',
            value: function () {
              var e = this;
              if (e.params._emitClasses && e.el) {
                var t = [];
                e.slides.each(function (a) {
                  var r = e.getSlideClasses(a);
                  t.push({ slideEl: a, classNames: r }),
                    e.emit('_slideClass', a, r);
                }),
                  e.emit('_slideClasses', t);
              }
            },
          },
          {
            key: 'slidesPerViewDynamic',
            value: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 'current',
                t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                a = this,
                r = a.params,
                n = a.slides,
                i = a.slidesGrid,
                s = a.slidesSizesGrid,
                o = a.size,
                l = a.activeIndex,
                c = 1;
              if (r.centeredSlides) {
                for (
                  var d, p = n[l].swiperSlideSize, u = l + 1;
                  u < n.length;
                  u += 1
                )
                  n[u] &&
                    !d &&
                    ((c += 1), (p += n[u].swiperSlideSize) > o && (d = !0));
                for (var f = l - 1; f >= 0; f -= 1)
                  n[f] &&
                    !d &&
                    ((c += 1), (p += n[f].swiperSlideSize) > o && (d = !0));
              } else if ('current' === e)
                for (var h = l + 1; h < n.length; h += 1) {
                  var v = t ? i[h] + s[h] - i[l] < o : i[h] - i[l] < o;
                  v && (c += 1);
                }
              else
                for (var m = l - 1; m >= 0; m -= 1) {
                  var g = i[l] - i[m] < o;
                  g && (c += 1);
                }
              return c;
            },
          },
          {
            key: 'update',
            value: function () {
              var e = this;
              if (e && !e.destroyed) {
                var t = e.snapGrid,
                  a = e.params;
                a.breakpoints && e.setBreakpoint(),
                  e.updateSize(),
                  e.updateSlides(),
                  e.updateProgress(),
                  e.updateSlidesClasses(),
                  e.params.freeMode && e.params.freeMode.enabled
                    ? (r(), e.params.autoHeight && e.updateAutoHeight())
                    : (('auto' === e.params.slidesPerView ||
                        e.params.slidesPerView > 1) &&
                      e.isEnd &&
                      !e.params.centeredSlides
                        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                        : e.slideTo(e.activeIndex, 0, !1, !0)) || r(),
                  a.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                  e.emit('update');
              }
              function r() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                  a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(a),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses();
              }
            },
          },
          {
            key: 'changeDirection',
            value: function (e) {
              var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                a = this,
                r = a.params.direction;
              return (
                e || (e = 'horizontal' === r ? 'vertical' : 'horizontal'),
                e === r ||
                  ('horizontal' !== e && 'vertical' !== e) ||
                  (a.$el
                    .removeClass(
                      ''.concat(a.params.containerModifierClass).concat(r)
                    )
                    .addClass(
                      ''.concat(a.params.containerModifierClass).concat(e)
                    ),
                  a.emitContainerClasses(),
                  (a.params.direction = e),
                  a.slides.each(function (t) {
                    'vertical' === e
                      ? (t.style.width = '')
                      : (t.style.height = '');
                  }),
                  a.emit('changeDirection'),
                  t && a.update()),
                a
              );
            },
          },
          {
            key: 'mount',
            value: function (e) {
              var t = this;
              if (t.mounted) return !0;
              var a = P(e || t.params.el);
              if (!(e = a[0])) return !1;
              e.swiper = t;
              var r = function () {
                  return '.'.concat(
                    (t.params.wrapperClass || '').trim().split(' ').join('.')
                  );
                },
                i = (function () {
                  if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    var t = P(e.shadowRoot.querySelector(r()));
                    return (
                      (t.children = function (e) {
                        return a.children(e);
                      }),
                      t
                    );
                  }
                  return a.children(r());
                })();
              if (0 === i.length && t.params.createElements) {
                var s = n().createElement('div');
                (i = P(s)),
                  (s.className = t.params.wrapperClass),
                  a.append(s),
                  a
                    .children('.'.concat(t.params.slideClass))
                    .each(function (e) {
                      i.append(e);
                    });
              }
              return (
                Object.assign(t, {
                  $el: a,
                  el: e,
                  $wrapperEl: i,
                  wrapperEl: i[0],
                  mounted: !0,
                  rtl:
                    'rtl' === e.dir.toLowerCase() ||
                    'rtl' === a.css('direction'),
                  rtlTranslate:
                    'horizontal' === t.params.direction &&
                    ('rtl' === e.dir.toLowerCase() ||
                      'rtl' === a.css('direction')),
                  wrongRTL: '-webkit-box' === i.css('display'),
                }),
                !0
              );
            },
          },
          {
            key: 'init',
            value: function (e) {
              var t = this;
              return (
                t.initialized ||
                  !1 === t.mount(e) ||
                  (t.emit('beforeInit'),
                  t.params.breakpoints && t.setBreakpoint(),
                  t.addClasses(),
                  t.params.loop && t.loopCreate(),
                  t.updateSize(),
                  t.updateSlides(),
                  t.params.watchOverflow && t.checkOverflow(),
                  t.params.grabCursor && t.enabled && t.setGrabCursor(),
                  t.params.preloadImages && t.preloadImages(),
                  t.params.loop
                    ? t.slideTo(
                        t.params.initialSlide + t.loopedSlides,
                        0,
                        t.params.runCallbacksOnInit,
                        !1,
                        !0
                      )
                    : t.slideTo(
                        t.params.initialSlide,
                        0,
                        t.params.runCallbacksOnInit,
                        !1,
                        !0
                      ),
                  t.attachEvents(),
                  (t.initialized = !0),
                  t.emit('init'),
                  t.emit('afterInit')),
                t
              );
            },
          },
          {
            key: 'destroy',
            value: function () {
              var e =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0],
                t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                a = this,
                r = a.params,
                n = a.$el,
                i = a.$wrapperEl,
                s = a.slides;
              return (
                void 0 === a.params ||
                  a.destroyed ||
                  (a.emit('beforeDestroy'),
                  (a.initialized = !1),
                  a.detachEvents(),
                  r.loop && a.loopDestroy(),
                  t &&
                    (a.removeClasses(),
                    n.removeAttr('style'),
                    i.removeAttr('style'),
                    s &&
                      s.length &&
                      s
                        .removeClass(
                          [
                            r.slideVisibleClass,
                            r.slideActiveClass,
                            r.slideNextClass,
                            r.slidePrevClass,
                          ].join(' ')
                        )
                        .removeAttr('style')
                        .removeAttr('data-swiper-slide-index')),
                  a.emit('destroy'),
                  Object.keys(a.eventsListeners).forEach(function (e) {
                    a.off(e);
                  }),
                  !1 !== e && ((a.$el[0].swiper = null), z(a)),
                  (a.destroyed = !0)),
                null
              );
            },
          },
        ]),
        (r = [
          {
            key: 'extendDefaults',
            value: function (e) {
              B(Pe, e);
            },
          },
          {
            key: 'extendedDefaults',
            get: function () {
              return Pe;
            },
          },
          {
            key: 'defaults',
            get: function () {
              return we;
            },
          },
          {
            key: 'installModule',
            value: function (t) {
              e.prototype.__modules__ || (e.prototype.__modules__ = []);
              var a = e.prototype.__modules__;
              'function' == typeof t && a.indexOf(t) < 0 && a.push(t);
            },
          },
          {
            key: 'use',
            value: function (t) {
              return Array.isArray(t)
                ? (t.forEach(function (t) {
                    return e.installModule(t);
                  }),
                  e)
                : (e.installModule(t), e);
            },
          },
        ]),
        a && Ce(t.prototype, a),
        r && Ce(t, r),
        Object.defineProperty(t, 'prototype', { writable: !1 }),
        e
      );
    })();
  Object.keys(Me).forEach(function (e) {
    Object.keys(Me[e]).forEach(function (t) {
      ke.prototype[t] = Me[e][t];
    });
  }),
    ke.use([
      function (e) {
        var t = e.swiper,
          a = e.on,
          r = e.emit,
          n = s(),
          i = null,
          o = function () {
            t &&
              !t.destroyed &&
              t.initialized &&
              (r('beforeResize'), r('resize'));
          },
          l = function () {
            t && !t.destroyed && t.initialized && r('orientationchange');
          };
        a('init', function () {
          t.params.resizeObserver && void 0 !== n.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              (i = new ResizeObserver(function (e) {
                var a = t.width,
                  r = t.height,
                  n = a,
                  i = r;
                e.forEach(function (e) {
                  var a = e.contentBoxSize,
                    r = e.contentRect,
                    s = e.target;
                  (s && s !== t.el) ||
                    ((n = r ? r.width : (a[0] || a).inlineSize),
                    (i = r ? r.height : (a[0] || a).blockSize));
                }),
                  (n === a && i === r) || o();
              })).observe(t.el)
            : (n.addEventListener('resize', o),
              n.addEventListener('orientationchange', l));
        }),
          a('destroy', function () {
            i && i.unobserve && t.el && (i.unobserve(t.el), (i = null)),
              n.removeEventListener('resize', o),
              n.removeEventListener('orientationchange', l);
          });
      },
      function (e) {
        var t = e.swiper,
          a = e.extendParams,
          r = e.on,
          n = e.emit,
          i = [],
          o = s(),
          l = function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              a = o.MutationObserver || o.WebkitMutationObserver,
              r = new a(function (e) {
                if (1 !== e.length) {
                  var t = function () {
                    n('observerUpdate', e[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(t)
                    : o.setTimeout(t, 0);
                } else n('observerUpdate', e[0]);
              });
            r.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              i.push(r);
          };
        a({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          r('init', function () {
            if (t.params.observer) {
              if (t.params.observeParents)
                for (var e = t.$el.parents(), a = 0; a < e.length; a += 1)
                  l(e[a]);
              l(t.$el[0], { childList: t.params.observeSlideChildren }),
                l(t.$wrapperEl[0], { attributes: !1 });
            }
          }),
          r('destroy', function () {
            i.forEach(function (e) {
              e.disconnect();
            }),
              i.splice(0, i.length);
          });
      },
    ]);
  var $e = ke;
  function ze(e) {
    return (
      (ze =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      ze(e)
    );
  }
  function Oe(e, t, a, r) {
    var i = n();
    return (
      e.params.createElements &&
        Object.keys(r).forEach(function (n) {
          if (!a[n] && !0 === a.auto) {
            var s = e.$el.children('.'.concat(r[n]))[0];
            s ||
              (((s = i.createElement('div')).className = r[n]),
              e.$el.append(s)),
              (a[n] = s),
              (t[n] = s);
          }
        }),
      a
    );
  }
  function Ie() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
    return '.'.concat(
      e
        .trim()
        .replace(/([\.:!\/])/g, '\\$1')
        .replace(/ /g, '.')
    );
  }
  function Le(e) {
    return (
      (Le =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      Le(e)
    );
  }
  function Ae(e) {
    var t = this,
      a = t.$wrapperEl,
      r = t.params;
    if ((r.loop && t.loopDestroy(), 'object' === Le(e) && 'length' in e))
      for (var n = 0; n < e.length; n += 1) e[n] && a.append(e[n]);
    else a.append(e);
    r.loop && t.loopCreate(), r.observer || t.update();
  }
  function De(e) {
    return (
      (De =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      De(e)
    );
  }
  function Ge(e) {
    var t = this,
      a = t.params,
      r = t.$wrapperEl,
      n = t.activeIndex;
    a.loop && t.loopDestroy();
    var i = n + 1;
    if ('object' === De(e) && 'length' in e) {
      for (var s = 0; s < e.length; s += 1) e[s] && r.prepend(e[s]);
      i = n + e.length;
    } else r.prepend(e);
    a.loop && t.loopCreate(), a.observer || t.update(), t.slideTo(i, 0, !1);
  }
  function Be(e) {
    return (
      (Be =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      Be(e)
    );
  }
  function Ne(e, t) {
    var a = this,
      r = a.$wrapperEl,
      n = a.params,
      i = a.activeIndex;
    n.loop &&
      ((i -= a.loopedSlides),
      a.loopDestroy(),
      (a.slides = r.children('.'.concat(n.slideClass))));
    var s = a.slides.length;
    if (e <= 0) a.prependSlide(t);
    else if (e >= s) a.appendSlide(t);
    else {
      for (var o = i > e ? i + 1 : i, l = [], c = s - 1; c >= e; c -= 1) {
        var d = a.slides.eq(c);
        d.remove(), l.unshift(d);
      }
      if ('object' === Be(t) && 'length' in t) {
        for (var p = 0; p < t.length; p += 1) t[p] && r.append(t[p]);
        o = i > e ? i + t.length : i;
      } else r.append(t);
      for (var u = 0; u < l.length; u += 1) r.append(l[u]);
      n.loop && a.loopCreate(),
        n.observer || a.update(),
        n.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1);
    }
  }
  function je(e) {
    return (
      (je =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      je(e)
    );
  }
  function Xe(e) {
    var t = this,
      a = t.params,
      r = t.$wrapperEl,
      n = t.activeIndex;
    a.loop &&
      ((n -= t.loopedSlides),
      t.loopDestroy(),
      (t.slides = r.children('.'.concat(a.slideClass))));
    var i,
      s = n;
    if ('object' === je(e) && 'length' in e) {
      for (var o = 0; o < e.length; o += 1)
        (i = e[o]), t.slides[i] && t.slides.eq(i).remove(), i < s && (s -= 1);
      s = Math.max(s, 0);
    } else
      (i = e),
        t.slides[i] && t.slides.eq(i).remove(),
        i < s && (s -= 1),
        (s = Math.max(s, 0));
    a.loop && t.loopCreate(),
      a.observer || t.update(),
      a.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1);
  }
  function He() {
    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
    this.removeSlide(e);
  }
  function Ye(e) {
    var t = e.effect,
      a = e.swiper,
      r = e.on,
      n = e.setTranslate,
      i = e.setTransition,
      s = e.overwriteParams,
      o = e.perspective;
    r('beforeInit', function () {
      if (a.params.effect === t) {
        a.classNames.push(''.concat(a.params.containerModifierClass).concat(t)),
          o &&
            o() &&
            a.classNames.push(''.concat(a.params.containerModifierClass, '3d'));
        var e = s ? s() : {};
        Object.assign(a.params, e), Object.assign(a.originalParams, e);
      }
    }),
      r('setTranslate', function () {
        a.params.effect === t && n();
      }),
      r('setTransition', function (e, r) {
        a.params.effect === t && i(r);
      });
  }
  function Re(e, t) {
    return e.transformEl
      ? t
          .find(e.transformEl)
          .css({
            'backface-visibility': 'hidden',
            '-webkit-backface-visibility': 'hidden',
          })
      : t;
  }
  function _e(e) {
    var t = e.swiper,
      a = e.duration,
      r = e.transformEl,
      n = e.allSlides,
      i = t.slides,
      s = t.activeIndex,
      o = t.$wrapperEl;
    if (t.params.virtualTranslate && 0 !== a) {
      var l = !1;
      (n ? (r ? i.find(r) : i) : r ? i.eq(s).find(r) : i.eq(s)).transitionEnd(
        function () {
          if (!l && t && !t.destroyed) {
            (l = !0), (t.animating = !1);
            for (
              var e = ['webkitTransitionEnd', 'transitionend'], a = 0;
              a < e.length;
              a += 1
            )
              o.trigger(e[a]);
          }
        }
      );
    }
  }
  function We(e, t, a) {
    var r = 'swiper-slide-shadow'.concat(a ? '-'.concat(a) : ''),
      n = e.transformEl ? t.find(e.transformEl) : t,
      i = n.children('.'.concat(r));
    return (
      i.length ||
        ((i = P(
          '<div class="swiper-slide-shadow'.concat(
            a ? '-'.concat(a) : '',
            '"></div>'
          )
        )),
        n.append(i)),
      i
    );
  }
  var Ve = [
    function (e) {
      var t,
        a = e.swiper,
        r = e.extendParams,
        n = e.on;
      function i(e, t) {
        var r = a.params.virtual;
        if (r.cache && a.virtual.cache[t]) return a.virtual.cache[t];
        var n = r.renderSlide
          ? P(r.renderSlide.call(a, e, t))
          : P(
              '<div class="'
                .concat(a.params.slideClass, '" data-swiper-slide-index="')
                .concat(t, '">')
                .concat(e, '</div>')
            );
        return (
          n.attr('data-swiper-slide-index') ||
            n.attr('data-swiper-slide-index', t),
          r.cache && (a.virtual.cache[t] = n),
          n
        );
      }
      function s(e) {
        var t = a.params,
          r = t.slidesPerView,
          n = t.slidesPerGroup,
          s = t.centeredSlides,
          o = a.params.virtual,
          l = o.addSlidesBefore,
          c = o.addSlidesAfter,
          d = a.virtual,
          p = d.from,
          u = d.to,
          f = d.slides,
          h = d.slidesGrid,
          v = d.offset;
        a.params.cssMode || a.updateActiveIndex();
        var m,
          g,
          b,
          w = a.activeIndex || 0;
        (m = a.rtlTranslate ? 'right' : a.isHorizontal() ? 'left' : 'top'),
          s
            ? ((g = Math.floor(r / 2) + n + c), (b = Math.floor(r / 2) + n + l))
            : ((g = r + (n - 1) + c), (b = n + l));
        var y = Math.max((w || 0) - b, 0),
          x = Math.min((w || 0) + g, f.length - 1),
          E = (a.slidesGrid[y] || 0) - (a.slidesGrid[0] || 0);
        function S() {
          a.updateSlides(),
            a.updateProgress(),
            a.updateSlidesClasses(),
            a.lazy && a.params.lazy.enabled && a.lazy.load();
        }
        if (
          (Object.assign(a.virtual, {
            from: y,
            to: x,
            offset: E,
            slidesGrid: a.slidesGrid,
          }),
          p === y && u === x && !e)
        )
          return (
            a.slidesGrid !== h &&
              E !== v &&
              a.slides.css(m, ''.concat(E, 'px')),
            void a.updateProgress()
          );
        if (a.params.virtual.renderExternal)
          return (
            a.params.virtual.renderExternal.call(a, {
              offset: E,
              from: y,
              to: x,
              slides: (function () {
                for (var e = [], t = y; t <= x; t += 1) e.push(f[t]);
                return e;
              })(),
            }),
            void (a.params.virtual.renderExternalUpdate && S())
          );
        var T = [],
          C = [];
        if (e) a.$wrapperEl.find('.'.concat(a.params.slideClass)).remove();
        else
          for (var M = p; M <= u; M += 1)
            (M < y || M > x) &&
              a.$wrapperEl
                .find(
                  '.'
                    .concat(a.params.slideClass, '[data-swiper-slide-index="')
                    .concat(M, '"]')
                )
                .remove();
        for (var P = 0; P < f.length; P += 1)
          P >= y &&
            P <= x &&
            (void 0 === u || e
              ? C.push(P)
              : (P > u && C.push(P), P < p && T.push(P)));
        C.forEach(function (e) {
          a.$wrapperEl.append(i(f[e], e));
        }),
          T.sort(function (e, t) {
            return t - e;
          }).forEach(function (e) {
            a.$wrapperEl.prepend(i(f[e], e));
          }),
          a.$wrapperEl.children('.swiper-slide').css(m, ''.concat(E, 'px')),
          S();
      }
      r({
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      }),
        (a.virtual = {
          cache: {},
          from: void 0,
          to: void 0,
          slides: [],
          offset: 0,
          slidesGrid: [],
        }),
        n('beforeInit', function () {
          a.params.virtual.enabled &&
            ((a.virtual.slides = a.params.virtual.slides),
            a.classNames.push(
              ''.concat(a.params.containerModifierClass, 'virtual')
            ),
            (a.params.watchSlidesProgress = !0),
            (a.originalParams.watchSlidesProgress = !0),
            a.params.initialSlide || s());
        }),
        n('setTranslate', function () {
          a.params.virtual.enabled &&
            (a.params.cssMode && !a._immediateVirtual
              ? (clearTimeout(t),
                (t = setTimeout(function () {
                  s();
                }, 100)))
              : s());
        }),
        n('init update resize', function () {
          a.params.virtual.enabled &&
            a.params.cssMode &&
            N(
              a.wrapperEl,
              '--swiper-virtual-size',
              ''.concat(a.virtualSize, 'px')
            );
        }),
        Object.assign(a.virtual, {
          appendSlide: function (e) {
            if ('object' === ze(e) && 'length' in e)
              for (var t = 0; t < e.length; t += 1)
                e[t] && a.virtual.slides.push(e[t]);
            else a.virtual.slides.push(e);
            s(!0);
          },
          prependSlide: function (e) {
            var t = a.activeIndex,
              r = t + 1,
              n = 1;
            if (Array.isArray(e)) {
              for (var i = 0; i < e.length; i += 1)
                e[i] && a.virtual.slides.unshift(e[i]);
              (r = t + e.length), (n = e.length);
            } else a.virtual.slides.unshift(e);
            if (a.params.virtual.cache) {
              var o = a.virtual.cache,
                l = {};
              Object.keys(o).forEach(function (e) {
                var t = o[e],
                  a = t.attr('data-swiper-slide-index');
                a && t.attr('data-swiper-slide-index', parseInt(a, 10) + n),
                  (l[parseInt(e, 10) + n] = t);
              }),
                (a.virtual.cache = l);
            }
            s(!0), a.slideTo(r, 0);
          },
          removeSlide: function (e) {
            if (null != e) {
              var t = a.activeIndex;
              if (Array.isArray(e))
                for (var r = e.length - 1; r >= 0; r -= 1)
                  a.virtual.slides.splice(e[r], 1),
                    a.params.virtual.cache && delete a.virtual.cache[e[r]],
                    e[r] < t && (t -= 1),
                    (t = Math.max(t, 0));
              else
                a.virtual.slides.splice(e, 1),
                  a.params.virtual.cache && delete a.virtual.cache[e],
                  e < t && (t -= 1),
                  (t = Math.max(t, 0));
              s(!0), a.slideTo(t, 0);
            }
          },
          removeAllSlides: function () {
            (a.virtual.slides = []),
              a.params.virtual.cache && (a.virtual.cache = {}),
              s(!0),
              a.slideTo(0, 0);
          },
          update: s,
        });
    },
    function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on,
        i = e.emit,
        o = n(),
        l = s();
      function c(e) {
        if (t.enabled) {
          var a = t.rtlTranslate,
            r = e;
          r.originalEvent && (r = r.originalEvent);
          var n = r.keyCode || r.charCode,
            s = t.params.keyboard.pageUpDown,
            c = s && 33 === n,
            d = s && 34 === n,
            p = 37 === n,
            u = 39 === n,
            f = 38 === n,
            h = 40 === n;
          if (
            !t.allowSlideNext &&
            ((t.isHorizontal() && u) || (t.isVertical() && h) || d)
          )
            return !1;
          if (
            !t.allowSlidePrev &&
            ((t.isHorizontal() && p) || (t.isVertical() && f) || c)
          )
            return !1;
          if (
            !(
              r.shiftKey ||
              r.altKey ||
              r.ctrlKey ||
              r.metaKey ||
              (o.activeElement &&
                o.activeElement.nodeName &&
                ('input' === o.activeElement.nodeName.toLowerCase() ||
                  'textarea' === o.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (c || d || p || u || f || h)
            ) {
              var v = !1;
              if (
                t.$el.parents('.'.concat(t.params.slideClass)).length > 0 &&
                0 ===
                  t.$el.parents('.'.concat(t.params.slideActiveClass)).length
              )
                return;
              var m = t.$el,
                g = m[0].clientWidth,
                b = m[0].clientHeight,
                w = l.innerWidth,
                y = l.innerHeight,
                x = t.$el.offset();
              a && (x.left -= t.$el[0].scrollLeft);
              for (
                var E = [
                    [x.left, x.top],
                    [x.left + g, x.top],
                    [x.left, x.top + b],
                    [x.left + g, x.top + b],
                  ],
                  S = 0;
                S < E.length;
                S += 1
              ) {
                var T = E[S];
                if (T[0] >= 0 && T[0] <= w && T[1] >= 0 && T[1] <= y) {
                  if (0 === T[0] && 0 === T[1]) continue;
                  v = !0;
                }
              }
              if (!v) return;
            }
            t.isHorizontal()
              ? ((c || d || p || u) &&
                  (r.preventDefault
                    ? r.preventDefault()
                    : (r.returnValue = !1)),
                (((d || u) && !a) || ((c || p) && a)) && t.slideNext(),
                (((c || p) && !a) || ((d || u) && a)) && t.slidePrev())
              : ((c || d || f || h) &&
                  (r.preventDefault
                    ? r.preventDefault()
                    : (r.returnValue = !1)),
                (d || h) && t.slideNext(),
                (c || f) && t.slidePrev()),
              i('keyPress', n);
          }
        }
      }
      function d() {
        t.keyboard.enabled ||
          (P(o).on('keydown', c), (t.keyboard.enabled = !0));
      }
      function p() {
        t.keyboard.enabled &&
          (P(o).off('keydown', c), (t.keyboard.enabled = !1));
      }
      (t.keyboard = { enabled: !1 }),
        a({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
        r('init', function () {
          t.params.keyboard.enabled && d();
        }),
        r('destroy', function () {
          t.keyboard.enabled && p();
        }),
        Object.assign(t.keyboard, { enable: d, disable: p });
    },
    function (e) {
      var t,
        a = e.swiper,
        r = e.extendParams,
        n = e.on,
        i = e.emit,
        o = s();
      r({
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: 'container',
          thresholdDelta: null,
          thresholdTime: null,
        },
      }),
        (a.mousewheel = { enabled: !1 });
      var l,
        c = I(),
        d = [];
      function p() {
        a.enabled && (a.mouseEntered = !0);
      }
      function u() {
        a.enabled && (a.mouseEntered = !1);
      }
      function f(e) {
        return !(
          (a.params.mousewheel.thresholdDelta &&
            e.delta < a.params.mousewheel.thresholdDelta) ||
          (a.params.mousewheel.thresholdTime &&
            I() - c < a.params.mousewheel.thresholdTime) ||
          (!(e.delta >= 6 && I() - c < 60) &&
            (e.direction < 0
              ? (a.isEnd && !a.params.loop) ||
                a.animating ||
                (a.slideNext(), i('scroll', e.raw))
              : (a.isBeginning && !a.params.loop) ||
                a.animating ||
                (a.slidePrev(), i('scroll', e.raw)),
            (c = new o.Date().getTime()),
            1))
        );
      }
      function h(e) {
        var r = e;
        if (a.enabled) {
          var n = a.params.mousewheel;
          a.params.cssMode && r.preventDefault();
          var s = a.$el;
          if (
            ('container' !== a.params.mousewheel.eventsTarget &&
              (s = P(a.params.mousewheel.eventsTarget)),
            !a.mouseEntered && !s[0].contains(r.target) && !n.releaseOnEdges)
          )
            return !0;
          r.originalEvent && (r = r.originalEvent);
          var o = 0,
            c = a.rtlTranslate ? -1 : 1,
            p = (function (e) {
              var t = 0,
                a = 0,
                r = 0,
                n = 0;
              return (
                'detail' in e && (a = e.detail),
                'wheelDelta' in e && (a = -e.wheelDelta / 120),
                'wheelDeltaY' in e && (a = -e.wheelDeltaY / 120),
                'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
                'axis' in e &&
                  e.axis === e.HORIZONTAL_AXIS &&
                  ((t = a), (a = 0)),
                (r = 10 * t),
                (n = 10 * a),
                'deltaY' in e && (n = e.deltaY),
                'deltaX' in e && (r = e.deltaX),
                e.shiftKey && !r && ((r = n), (n = 0)),
                (r || n) &&
                  e.deltaMode &&
                  (1 === e.deltaMode
                    ? ((r *= 40), (n *= 40))
                    : ((r *= 800), (n *= 800))),
                r && !t && (t = r < 1 ? -1 : 1),
                n && !a && (a = n < 1 ? -1 : 1),
                { spinX: t, spinY: a, pixelX: r, pixelY: n }
              );
            })(r);
          if (n.forceToAxis)
            if (a.isHorizontal()) {
              if (!(Math.abs(p.pixelX) > Math.abs(p.pixelY))) return !0;
              o = -p.pixelX * c;
            } else {
              if (!(Math.abs(p.pixelY) > Math.abs(p.pixelX))) return !0;
              o = -p.pixelY;
            }
          else
            o =
              Math.abs(p.pixelX) > Math.abs(p.pixelY)
                ? -p.pixelX * c
                : -p.pixelY;
          if (0 === o) return !0;
          n.invert && (o = -o);
          var u = a.getTranslate() + o * n.sensitivity;
          if (
            (u >= a.minTranslate() && (u = a.minTranslate()),
            u <= a.maxTranslate() && (u = a.maxTranslate()),
            (!!a.params.loop ||
              !(u === a.minTranslate() || u === a.maxTranslate())) &&
              a.params.nested &&
              r.stopPropagation(),
            a.params.freeMode && a.params.freeMode.enabled)
          ) {
            var h = { time: I(), delta: Math.abs(o), direction: Math.sign(o) },
              v =
                l &&
                h.time < l.time + 500 &&
                h.delta <= l.delta &&
                h.direction === l.direction;
            if (!v) {
              (l = void 0), a.params.loop && a.loopFix();
              var m = a.getTranslate() + o * n.sensitivity,
                g = a.isBeginning,
                b = a.isEnd;
              if (
                (m >= a.minTranslate() && (m = a.minTranslate()),
                m <= a.maxTranslate() && (m = a.maxTranslate()),
                a.setTransition(0),
                a.setTranslate(m),
                a.updateProgress(),
                a.updateActiveIndex(),
                a.updateSlidesClasses(),
                ((!g && a.isBeginning) || (!b && a.isEnd)) &&
                  a.updateSlidesClasses(),
                a.params.freeMode.sticky)
              ) {
                clearTimeout(t), (t = void 0), d.length >= 15 && d.shift();
                var w = d.length ? d[d.length - 1] : void 0,
                  y = d[0];
                if (
                  (d.push(h),
                  w && (h.delta > w.delta || h.direction !== w.direction))
                )
                  d.splice(0);
                else if (
                  d.length >= 15 &&
                  h.time - y.time < 500 &&
                  y.delta - h.delta >= 1 &&
                  h.delta <= 6
                ) {
                  var x = o > 0 ? 0.8 : 0.2;
                  (l = h),
                    d.splice(0),
                    (t = O(function () {
                      a.slideToClosest(a.params.speed, !0, void 0, x);
                    }, 0));
                }
                t ||
                  (t = O(function () {
                    (l = h),
                      d.splice(0),
                      a.slideToClosest(a.params.speed, !0, void 0, 0.5);
                  }, 500));
              }
              if (
                (v || i('scroll', r),
                a.params.autoplay &&
                  a.params.autoplayDisableOnInteraction &&
                  a.autoplay.stop(),
                m === a.minTranslate() || m === a.maxTranslate())
              )
                return !0;
            }
          } else {
            var E = {
              time: I(),
              delta: Math.abs(o),
              direction: Math.sign(o),
              raw: e,
            };
            d.length >= 2 && d.shift();
            var S = d.length ? d[d.length - 1] : void 0;
            if (
              (d.push(E),
              S
                ? (E.direction !== S.direction ||
                    E.delta > S.delta ||
                    E.time > S.time + 150) &&
                  f(E)
                : f(E),
              (function (e) {
                var t = a.params.mousewheel;
                if (e.direction < 0) {
                  if (a.isEnd && !a.params.loop && t.releaseOnEdges) return !0;
                } else if (a.isBeginning && !a.params.loop && t.releaseOnEdges)
                  return !0;
                return !1;
              })(E))
            )
              return !0;
          }
          return (
            r.preventDefault ? r.preventDefault() : (r.returnValue = !1), !1
          );
        }
      }
      function v(e) {
        var t = a.$el;
        'container' !== a.params.mousewheel.eventsTarget &&
          (t = P(a.params.mousewheel.eventsTarget)),
          t[e]('mouseenter', p),
          t[e]('mouseleave', u),
          t[e]('wheel', h);
      }
      function m() {
        return a.params.cssMode
          ? (a.wrapperEl.removeEventListener('wheel', h), !0)
          : !a.mousewheel.enabled && (v('on'), (a.mousewheel.enabled = !0), !0);
      }
      function g() {
        return a.params.cssMode
          ? (a.wrapperEl.addEventListener(event, h), !0)
          : !!a.mousewheel.enabled &&
              (v('off'), (a.mousewheel.enabled = !1), !0);
      }
      n('init', function () {
        !a.params.mousewheel.enabled && a.params.cssMode && g(),
          a.params.mousewheel.enabled && m();
      }),
        n('destroy', function () {
          a.params.cssMode && m(), a.mousewheel.enabled && g();
        }),
        Object.assign(a.mousewheel, { enable: m, disable: g });
    },
    function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on,
        n = e.emit;
      function i(e) {
        var a;
        return (
          e &&
            ((a = P(e)),
            t.params.uniqueNavElements &&
              'string' == typeof e &&
              a.length > 1 &&
              1 === t.$el.find(e).length &&
              (a = t.$el.find(e))),
          a
        );
      }
      function s(e, a) {
        var r = t.params.navigation;
        e &&
          e.length > 0 &&
          (e[a ? 'addClass' : 'removeClass'](r.disabledClass),
          e[0] && 'BUTTON' === e[0].tagName && (e[0].disabled = a),
          t.params.watchOverflow &&
            t.enabled &&
            e[t.isLocked ? 'addClass' : 'removeClass'](r.lockClass));
      }
      function o() {
        if (!t.params.loop) {
          var e = t.navigation,
            a = e.$nextEl;
          s(e.$prevEl, t.isBeginning && !t.params.rewind),
            s(a, t.isEnd && !t.params.rewind);
        }
      }
      function l(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
      }
      function c(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
      }
      function d() {
        var e = t.params.navigation;
        if (
          ((t.params.navigation = Oe(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' }
          )),
          e.nextEl || e.prevEl)
        ) {
          var a = i(e.nextEl),
            r = i(e.prevEl);
          a && a.length > 0 && a.on('click', c),
            r && r.length > 0 && r.on('click', l),
            Object.assign(t.navigation, {
              $nextEl: a,
              nextEl: a && a[0],
              $prevEl: r,
              prevEl: r && r[0],
            }),
            t.enabled ||
              (a && a.addClass(e.lockClass), r && r.addClass(e.lockClass));
        }
      }
      function p() {
        var e = t.navigation,
          a = e.$nextEl,
          r = e.$prevEl;
        a &&
          a.length &&
          (a.off('click', c), a.removeClass(t.params.navigation.disabledClass)),
          r &&
            r.length &&
            (r.off('click', l),
            r.removeClass(t.params.navigation.disabledClass));
      }
      a({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
          lockClass: 'swiper-button-lock',
        },
      }),
        (t.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        r('init', function () {
          d(), o();
        }),
        r('toEdge fromEdge lock unlock', function () {
          o();
        }),
        r('destroy', function () {
          p();
        }),
        r('enable disable', function () {
          var e = t.navigation,
            a = e.$nextEl,
            r = e.$prevEl;
          a &&
            a[t.enabled ? 'removeClass' : 'addClass'](
              t.params.navigation.lockClass
            ),
            r &&
              r[t.enabled ? 'removeClass' : 'addClass'](
                t.params.navigation.lockClass
              );
        }),
        r('click', function (e, a) {
          var r = t.navigation,
            i = r.$nextEl,
            s = r.$prevEl,
            o = a.target;
          if (t.params.navigation.hideOnClick && !P(o).is(s) && !P(o).is(i)) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === o || t.pagination.el.contains(o))
            )
              return;
            var l;
            i
              ? (l = i.hasClass(t.params.navigation.hiddenClass))
              : s && (l = s.hasClass(t.params.navigation.hiddenClass)),
              n(!0 === l ? 'navigationShow' : 'navigationHide'),
              i && i.toggleClass(t.params.navigation.hiddenClass),
              s && s.toggleClass(t.params.navigation.hiddenClass);
          }
        }),
        Object.assign(t.navigation, { update: o, init: d, destroy: p });
    },
    function (e) {
      var t,
        a = e.swiper,
        r = e.extendParams,
        n = e.on,
        i = e.emit,
        s = 'swiper-pagination';
      r({
        pagination: {
          el: null,
          bulletElement: 'span',
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: 'bullets',
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: function (e) {
            return e;
          },
          formatFractionTotal: function (e) {
            return e;
          },
          bulletClass: ''.concat(s, '-bullet'),
          bulletActiveClass: ''.concat(s, '-bullet-active'),
          modifierClass: ''.concat(s, '-'),
          currentClass: ''.concat(s, '-current'),
          totalClass: ''.concat(s, '-total'),
          hiddenClass: ''.concat(s, '-hidden'),
          progressbarFillClass: ''.concat(s, '-progressbar-fill'),
          progressbarOppositeClass: ''.concat(s, '-progressbar-opposite'),
          clickableClass: ''.concat(s, '-clickable'),
          lockClass: ''.concat(s, '-lock'),
          horizontalClass: ''.concat(s, '-horizontal'),
          verticalClass: ''.concat(s, '-vertical'),
        },
      }),
        (a.pagination = { el: null, $el: null, bullets: [] });
      var o = 0;
      function l() {
        return (
          !a.params.pagination.el ||
          !a.pagination.el ||
          !a.pagination.$el ||
          0 === a.pagination.$el.length
        );
      }
      function c(e, t) {
        var r = a.params.pagination.bulletActiveClass;
        e[t]()
          .addClass(''.concat(r, '-').concat(t))
          [t]()
          .addClass(''.concat(r, '-').concat(t, '-').concat(t));
      }
      function d() {
        var e = a.rtl,
          r = a.params.pagination;
        if (!l()) {
          var n,
            s =
              a.virtual && a.params.virtual.enabled
                ? a.virtual.slides.length
                : a.slides.length,
            d = a.pagination.$el,
            p = a.params.loop
              ? Math.ceil((s - 2 * a.loopedSlides) / a.params.slidesPerGroup)
              : a.snapGrid.length;
          if (
            (a.params.loop
              ? ((n = Math.ceil(
                  (a.activeIndex - a.loopedSlides) / a.params.slidesPerGroup
                )) >
                  s - 1 - 2 * a.loopedSlides && (n -= s - 2 * a.loopedSlides),
                n > p - 1 && (n -= p),
                n < 0 && 'bullets' !== a.params.paginationType && (n = p + n))
              : (n = void 0 !== a.snapIndex ? a.snapIndex : a.activeIndex || 0),
            'bullets' === r.type &&
              a.pagination.bullets &&
              a.pagination.bullets.length > 0)
          ) {
            var u,
              f,
              h,
              v = a.pagination.bullets;
            if (
              (r.dynamicBullets &&
                ((t = v
                  .eq(0)
                  [a.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                d.css(
                  a.isHorizontal() ? 'width' : 'height',
                  ''.concat(t * (r.dynamicMainBullets + 4), 'px')
                ),
                r.dynamicMainBullets > 1 &&
                  void 0 !== a.previousIndex &&
                  ((o += n - (a.previousIndex - a.loopedSlides || 0)) >
                  r.dynamicMainBullets - 1
                    ? (o = r.dynamicMainBullets - 1)
                    : o < 0 && (o = 0)),
                (u = Math.max(n - o, 0)),
                (h =
                  ((f = u + (Math.min(v.length, r.dynamicMainBullets) - 1)) +
                    u) /
                  2)),
              v.removeClass(
                ['', '-next', '-next-next', '-prev', '-prev-prev', '-main']
                  .map(function (e) {
                    return ''.concat(r.bulletActiveClass).concat(e);
                  })
                  .join(' ')
              ),
              d.length > 1)
            )
              v.each(function (e) {
                var t = P(e),
                  a = t.index();
                a === n && t.addClass(r.bulletActiveClass),
                  r.dynamicBullets &&
                    (a >= u &&
                      a <= f &&
                      t.addClass(''.concat(r.bulletActiveClass, '-main')),
                    a === u && c(t, 'prev'),
                    a === f && c(t, 'next'));
              });
            else {
              var m = v.eq(n),
                g = m.index();
              if ((m.addClass(r.bulletActiveClass), r.dynamicBullets)) {
                for (var b = v.eq(u), w = v.eq(f), y = u; y <= f; y += 1)
                  v.eq(y).addClass(''.concat(r.bulletActiveClass, '-main'));
                if (a.params.loop)
                  if (g >= v.length) {
                    for (var x = r.dynamicMainBullets; x >= 0; x -= 1)
                      v.eq(v.length - x).addClass(
                        ''.concat(r.bulletActiveClass, '-main')
                      );
                    v.eq(v.length - r.dynamicMainBullets - 1).addClass(
                      ''.concat(r.bulletActiveClass, '-prev')
                    );
                  } else c(b, 'prev'), c(w, 'next');
                else c(b, 'prev'), c(w, 'next');
              }
            }
            if (r.dynamicBullets) {
              var E = Math.min(v.length, r.dynamicMainBullets + 4),
                S = (t * E - t) / 2 - h * t,
                T = e ? 'right' : 'left';
              v.css(a.isHorizontal() ? T : 'top', ''.concat(S, 'px'));
            }
          }
          if (
            ('fraction' === r.type &&
              (d.find(Ie(r.currentClass)).text(r.formatFractionCurrent(n + 1)),
              d.find(Ie(r.totalClass)).text(r.formatFractionTotal(p))),
            'progressbar' === r.type)
          ) {
            var C;
            C = r.progressbarOpposite
              ? a.isHorizontal()
                ? 'vertical'
                : 'horizontal'
              : a.isHorizontal()
              ? 'horizontal'
              : 'vertical';
            var M = (n + 1) / p,
              k = 1,
              $ = 1;
            'horizontal' === C ? (k = M) : ($ = M),
              d
                .find(Ie(r.progressbarFillClass))
                .transform(
                  'translate3d(0,0,0) scaleX('
                    .concat(k, ') scaleY(')
                    .concat($, ')')
                )
                .transition(a.params.speed);
          }
          'custom' === r.type && r.renderCustom
            ? (d.html(r.renderCustom(a, n + 1, p)), i('paginationRender', d[0]))
            : i('paginationUpdate', d[0]),
            a.params.watchOverflow &&
              a.enabled &&
              d[a.isLocked ? 'addClass' : 'removeClass'](r.lockClass);
        }
      }
      function p() {
        var e = a.params.pagination;
        if (!l()) {
          var t =
              a.virtual && a.params.virtual.enabled
                ? a.virtual.slides.length
                : a.slides.length,
            r = a.pagination.$el,
            n = '';
          if ('bullets' === e.type) {
            var s = a.params.loop
              ? Math.ceil((t - 2 * a.loopedSlides) / a.params.slidesPerGroup)
              : a.snapGrid.length;
            a.params.freeMode &&
              a.params.freeMode.enabled &&
              !a.params.loop &&
              s > t &&
              (s = t);
            for (var o = 0; o < s; o += 1)
              e.renderBullet
                ? (n += e.renderBullet.call(a, o, e.bulletClass))
                : (n += '<'
                    .concat(e.bulletElement, ' class="')
                    .concat(e.bulletClass, '"></')
                    .concat(e.bulletElement, '>'));
            r.html(n), (a.pagination.bullets = r.find(Ie(e.bulletClass)));
          }
          'fraction' === e.type &&
            ((n = e.renderFraction
              ? e.renderFraction.call(a, e.currentClass, e.totalClass)
              : '<span class="'.concat(e.currentClass, '"></span>') +
                ' / ' +
                '<span class="'.concat(e.totalClass, '"></span>')),
            r.html(n)),
            'progressbar' === e.type &&
              ((n = e.renderProgressbar
                ? e.renderProgressbar.call(a, e.progressbarFillClass)
                : '<span class="'.concat(e.progressbarFillClass, '"></span>')),
              r.html(n)),
            'custom' !== e.type && i('paginationRender', a.pagination.$el[0]);
        }
      }
      function u() {
        a.params.pagination = Oe(
          a,
          a.originalParams.pagination,
          a.params.pagination,
          { el: 'swiper-pagination' }
        );
        var e = a.params.pagination;
        if (e.el) {
          var t = P(e.el);
          0 !== t.length &&
            (a.params.uniqueNavElements &&
              'string' == typeof e.el &&
              t.length > 1 &&
              (t = a.$el.find(e.el)).length > 1 &&
              (t = t.filter(function (e) {
                return P(e).parents('.swiper')[0] === a.el;
              })),
            'bullets' === e.type && e.clickable && t.addClass(e.clickableClass),
            t.addClass(e.modifierClass + e.type),
            t.addClass(e.modifierClass + a.params.direction),
            'bullets' === e.type &&
              e.dynamicBullets &&
              (t.addClass(
                ''.concat(e.modifierClass).concat(e.type, '-dynamic')
              ),
              (o = 0),
              e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            'progressbar' === e.type &&
              e.progressbarOpposite &&
              t.addClass(e.progressbarOppositeClass),
            e.clickable &&
              t.on('click', Ie(e.bulletClass), function (e) {
                e.preventDefault();
                var t = P(this).index() * a.params.slidesPerGroup;
                a.params.loop && (t += a.loopedSlides), a.slideTo(t);
              }),
            Object.assign(a.pagination, { $el: t, el: t[0] }),
            a.enabled || t.addClass(e.lockClass));
        }
      }
      function f() {
        var e = a.params.pagination;
        if (!l()) {
          var t = a.pagination.$el;
          t.removeClass(e.hiddenClass),
            t.removeClass(e.modifierClass + e.type),
            t.removeClass(e.modifierClass + a.params.direction),
            a.pagination.bullets &&
              a.pagination.bullets.removeClass &&
              a.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && t.off('click', Ie(e.bulletClass));
        }
      }
      n('init', function () {
        u(), p(), d();
      }),
        n('activeIndexChange', function () {
          (a.params.loop || void 0 === a.snapIndex) && d();
        }),
        n('snapIndexChange', function () {
          a.params.loop || d();
        }),
        n('slidesLengthChange', function () {
          a.params.loop && (p(), d());
        }),
        n('snapGridLengthChange', function () {
          a.params.loop || (p(), d());
        }),
        n('destroy', function () {
          f();
        }),
        n('enable disable', function () {
          var e = a.pagination.$el;
          e &&
            e[a.enabled ? 'removeClass' : 'addClass'](
              a.params.pagination.lockClass
            );
        }),
        n('lock unlock', function () {
          d();
        }),
        n('click', function (e, t) {
          var r = t.target,
            n = a.pagination.$el;
          if (
            a.params.pagination.el &&
            a.params.pagination.hideOnClick &&
            n.length > 0 &&
            !P(r).hasClass(a.params.pagination.bulletClass)
          ) {
            if (
              a.navigation &&
              ((a.navigation.nextEl && r === a.navigation.nextEl) ||
                (a.navigation.prevEl && r === a.navigation.prevEl))
            )
              return;
            var s = n.hasClass(a.params.pagination.hiddenClass);
            i(!0 === s ? 'paginationShow' : 'paginationHide'),
              n.toggleClass(a.params.pagination.hiddenClass);
          }
        }),
        Object.assign(a.pagination, {
          render: p,
          update: d,
          init: u,
          destroy: f,
        });
    },
    function (e) {
      var t,
        a,
        r,
        i,
        s = e.swiper,
        o = e.extendParams,
        l = e.on,
        c = e.emit,
        d = n(),
        p = !1,
        u = null,
        f = null;
      function h() {
        if (s.params.scrollbar.el && s.scrollbar.el) {
          var e = s.scrollbar,
            t = s.rtlTranslate,
            n = s.progress,
            i = e.$dragEl,
            o = e.$el,
            l = s.params.scrollbar,
            c = a,
            d = (r - a) * n;
          t
            ? (d = -d) > 0
              ? ((c = a - d), (d = 0))
              : -d + a > r && (c = r + d)
            : d < 0
            ? ((c = a + d), (d = 0))
            : d + a > r && (c = r - d),
            s.isHorizontal()
              ? (i.transform('translate3d('.concat(d, 'px, 0, 0)')),
                (i[0].style.width = ''.concat(c, 'px')))
              : (i.transform('translate3d(0px, '.concat(d, 'px, 0)')),
                (i[0].style.height = ''.concat(c, 'px'))),
            l.hide &&
              (clearTimeout(u),
              (o[0].style.opacity = 1),
              (u = setTimeout(function () {
                (o[0].style.opacity = 0), o.transition(400);
              }, 1e3)));
        }
      }
      function v() {
        if (s.params.scrollbar.el && s.scrollbar.el) {
          var e = s.scrollbar,
            t = e.$dragEl,
            n = e.$el;
          (t[0].style.width = ''),
            (t[0].style.height = ''),
            (r = s.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight),
            (i =
              s.size /
              (s.virtualSize +
                s.params.slidesOffsetBefore -
                (s.params.centeredSlides ? s.snapGrid[0] : 0))),
            (a =
              'auto' === s.params.scrollbar.dragSize
                ? r * i
                : parseInt(s.params.scrollbar.dragSize, 10)),
            s.isHorizontal()
              ? (t[0].style.width = ''.concat(a, 'px'))
              : (t[0].style.height = ''.concat(a, 'px')),
            (n[0].style.display = i >= 1 ? 'none' : ''),
            s.params.scrollbar.hide && (n[0].style.opacity = 0),
            s.params.watchOverflow &&
              s.enabled &&
              e.$el[s.isLocked ? 'addClass' : 'removeClass'](
                s.params.scrollbar.lockClass
              );
        }
      }
      function m(e) {
        return s.isHorizontal()
          ? 'touchstart' === e.type || 'touchmove' === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
          : 'touchstart' === e.type || 'touchmove' === e.type
          ? e.targetTouches[0].clientY
          : e.clientY;
      }
      function g(e) {
        var n,
          i = s.scrollbar,
          o = s.rtlTranslate,
          l = i.$el;
        (n =
          (m(e) -
            l.offset()[s.isHorizontal() ? 'left' : 'top'] -
            (null !== t ? t : a / 2)) /
          (r - a)),
          (n = Math.max(Math.min(n, 1), 0)),
          o && (n = 1 - n);
        var c = s.minTranslate() + (s.maxTranslate() - s.minTranslate()) * n;
        s.updateProgress(c),
          s.setTranslate(c),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      function b(e) {
        var a = s.params.scrollbar,
          r = s.scrollbar,
          n = s.$wrapperEl,
          i = r.$el,
          o = r.$dragEl;
        (p = !0),
          (t =
            e.target === o[0] || e.target === o
              ? m(e) -
                e.target.getBoundingClientRect()[
                  s.isHorizontal() ? 'left' : 'top'
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          n.transition(100),
          o.transition(100),
          g(e),
          clearTimeout(f),
          i.transition(0),
          a.hide && i.css('opacity', 1),
          s.params.cssMode && s.$wrapperEl.css('scroll-snap-type', 'none'),
          c('scrollbarDragStart', e);
      }
      function w(e) {
        var t = s.scrollbar,
          a = s.$wrapperEl,
          r = t.$el,
          n = t.$dragEl;
        p &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          g(e),
          a.transition(0),
          r.transition(0),
          n.transition(0),
          c('scrollbarDragMove', e));
      }
      function y(e) {
        var t = s.params.scrollbar,
          a = s.scrollbar,
          r = s.$wrapperEl,
          n = a.$el;
        p &&
          ((p = !1),
          s.params.cssMode &&
            (s.$wrapperEl.css('scroll-snap-type', ''), r.transition('')),
          t.hide &&
            (clearTimeout(f),
            (f = O(function () {
              n.css('opacity', 0), n.transition(400);
            }, 1e3))),
          c('scrollbarDragEnd', e),
          t.snapOnRelease && s.slideToClosest());
      }
      function x(e) {
        var t = s.scrollbar,
          a = s.touchEventsTouch,
          r = s.touchEventsDesktop,
          n = s.params,
          i = s.support,
          o = t.$el[0],
          l = !(!i.passiveListener || !n.passiveListeners) && {
            passive: !1,
            capture: !1,
          },
          c = !(!i.passiveListener || !n.passiveListeners) && {
            passive: !0,
            capture: !1,
          };
        if (o) {
          var p = 'on' === e ? 'addEventListener' : 'removeEventListener';
          i.touch
            ? (o[p](a.start, b, l), o[p](a.move, w, l), o[p](a.end, y, c))
            : (o[p](r.start, b, l), d[p](r.move, w, l), d[p](r.end, y, c));
        }
      }
      function E() {
        var e = s.scrollbar,
          t = s.$el;
        s.params.scrollbar = Oe(
          s,
          s.originalParams.scrollbar,
          s.params.scrollbar,
          { el: 'swiper-scrollbar' }
        );
        var a = s.params.scrollbar;
        if (a.el) {
          var r = P(a.el);
          s.params.uniqueNavElements &&
            'string' == typeof a.el &&
            r.length > 1 &&
            1 === t.find(a.el).length &&
            (r = t.find(a.el));
          var n = r.find('.'.concat(s.params.scrollbar.dragClass));
          0 === n.length &&
            ((n = P(
              '<div class="'.concat(s.params.scrollbar.dragClass, '"></div>')
            )),
            r.append(n)),
            Object.assign(e, { $el: r, el: r[0], $dragEl: n, dragEl: n[0] }),
            a.draggable && s.params.scrollbar.el && x('on'),
            r &&
              r[s.enabled ? 'removeClass' : 'addClass'](
                s.params.scrollbar.lockClass
              );
        }
      }
      function S() {
        s.params.scrollbar.el && x('off');
      }
      o({
        scrollbar: {
          el: null,
          dragSize: 'auto',
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: 'swiper-scrollbar-lock',
          dragClass: 'swiper-scrollbar-drag',
        },
      }),
        (s.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
        l('init', function () {
          E(), v(), h();
        }),
        l('update resize observerUpdate lock unlock', function () {
          v();
        }),
        l('setTranslate', function () {
          h();
        }),
        l('setTransition', function (e, t) {
          !(function (e) {
            s.params.scrollbar.el &&
              s.scrollbar.el &&
              s.scrollbar.$dragEl.transition(e);
          })(t);
        }),
        l('enable disable', function () {
          var e = s.scrollbar.$el;
          e &&
            e[s.enabled ? 'removeClass' : 'addClass'](
              s.params.scrollbar.lockClass
            );
        }),
        l('destroy', function () {
          S();
        }),
        Object.assign(s.scrollbar, {
          updateSize: v,
          setTranslate: h,
          init: E,
          destroy: S,
        });
    },
    function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({ parallax: { enabled: !1 } });
      var n = function (e, a) {
          var r = t.rtl,
            n = P(e),
            i = r ? -1 : 1,
            s = n.attr('data-swiper-parallax') || '0',
            o = n.attr('data-swiper-parallax-x'),
            l = n.attr('data-swiper-parallax-y'),
            c = n.attr('data-swiper-parallax-scale'),
            d = n.attr('data-swiper-parallax-opacity');
          if (
            (o || l
              ? ((o = o || '0'), (l = l || '0'))
              : t.isHorizontal()
              ? ((o = s), (l = '0'))
              : ((l = s), (o = '0')),
            (o =
              o.indexOf('%') >= 0
                ? ''.concat(parseInt(o, 10) * a * i, '%')
                : ''.concat(o * a * i, 'px')),
            (l =
              l.indexOf('%') >= 0
                ? ''.concat(parseInt(l, 10) * a, '%')
                : ''.concat(l * a, 'px')),
            null != d)
          ) {
            var p = d - (d - 1) * (1 - Math.abs(a));
            n[0].style.opacity = p;
          }
          if (null == c)
            n.transform('translate3d('.concat(o, ', ').concat(l, ', 0px)'));
          else {
            var u = c - (c - 1) * (1 - Math.abs(a));
            n.transform(
              'translate3d('
                .concat(o, ', ')
                .concat(l, ', 0px) scale(')
                .concat(u, ')')
            );
          }
        },
        i = function () {
          var e = t.$el,
            a = t.slides,
            r = t.progress,
            i = t.snapGrid;
          e
            .children(
              '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
            )
            .each(function (e) {
              n(e, r);
            }),
            a.each(function (e, a) {
              var s = e.progress;
              t.params.slidesPerGroup > 1 &&
                'auto' !== t.params.slidesPerView &&
                (s += Math.ceil(a / 2) - r * (i.length - 1)),
                (s = Math.min(Math.max(s, -1), 1)),
                P(e)
                  .find(
                    '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                  )
                  .each(function (e) {
                    n(e, s);
                  });
            });
        };
      r('beforeInit', function () {
        t.params.parallax.enabled &&
          ((t.params.watchSlidesProgress = !0),
          (t.originalParams.watchSlidesProgress = !0));
      }),
        r('init', function () {
          t.params.parallax.enabled && i();
        }),
        r('setTranslate', function () {
          t.params.parallax.enabled && i();
        }),
        r('setTransition', function (e, a) {
          t.params.parallax.enabled &&
            (function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : t.params.speed;
              t.$el
                .find(
                  '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                )
                .each(function (t) {
                  var a = P(t),
                    r =
                      parseInt(a.attr('data-swiper-parallax-duration'), 10) ||
                      e;
                  0 === e && (r = 0), a.transition(r);
                });
            })(a);
        });
    },
    function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on,
        n = e.emit,
        i = s();
      a({
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: 'swiper-zoom-container',
          zoomedSlideClass: 'swiper-slide-zoomed',
        },
      }),
        (t.zoom = { enabled: !1 });
      var o,
        l,
        c,
        d = 1,
        p = !1,
        u = {
          $slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          $imageEl: void 0,
          $imageWrapEl: void 0,
          maxRatio: 3,
        },
        f = {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {},
        },
        h = {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0,
        },
        v = 1;
      function m(e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          r = e.targetTouches[1].pageX,
          n = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(r - t, 2) + Math.pow(n - a, 2));
      }
      function g(e) {
        var a = t.support,
          r = t.params.zoom;
        if (((l = !1), (c = !1), !a.gestures)) {
          if (
            'touchstart' !== e.type ||
            ('touchstart' === e.type && e.targetTouches.length < 2)
          )
            return;
          (l = !0), (u.scaleStart = m(e));
        }
        (u.$slideEl && u.$slideEl.length) ||
        ((u.$slideEl = P(e.target).closest('.'.concat(t.params.slideClass))),
        0 === u.$slideEl.length && (u.$slideEl = t.slides.eq(t.activeIndex)),
        (u.$imageEl = u.$slideEl
          .find('.'.concat(r.containerClass))
          .eq(0)
          .find('picture, img, svg, canvas, .swiper-zoom-target')
          .eq(0)),
        (u.$imageWrapEl = u.$imageEl.parent('.'.concat(r.containerClass))),
        (u.maxRatio = u.$imageWrapEl.attr('data-swiper-zoom') || r.maxRatio),
        0 !== u.$imageWrapEl.length)
          ? (u.$imageEl && u.$imageEl.transition(0), (p = !0))
          : (u.$imageEl = void 0);
      }
      function b(e) {
        var a = t.support,
          r = t.params.zoom,
          n = t.zoom;
        if (!a.gestures) {
          if (
            'touchmove' !== e.type ||
            ('touchmove' === e.type && e.targetTouches.length < 2)
          )
            return;
          (c = !0), (u.scaleMove = m(e));
        }
        u.$imageEl && 0 !== u.$imageEl.length
          ? (a.gestures
              ? (n.scale = e.scale * d)
              : (n.scale = (u.scaleMove / u.scaleStart) * d),
            n.scale > u.maxRatio &&
              (n.scale =
                u.maxRatio - 1 + Math.pow(n.scale - u.maxRatio + 1, 0.5)),
            n.scale < r.minRatio &&
              (n.scale =
                r.minRatio + 1 - Math.pow(r.minRatio - n.scale + 1, 0.5)),
            u.$imageEl.transform(
              'translate3d(0,0,0) scale('.concat(n.scale, ')')
            ))
          : 'gesturechange' === e.type && g(e);
      }
      function w(e) {
        var a = t.device,
          r = t.support,
          n = t.params.zoom,
          i = t.zoom;
        if (!r.gestures) {
          if (!l || !c) return;
          if (
            'touchend' !== e.type ||
            ('touchend' === e.type && e.changedTouches.length < 2 && !a.android)
          )
            return;
          (l = !1), (c = !1);
        }
        u.$imageEl &&
          0 !== u.$imageEl.length &&
          ((i.scale = Math.max(Math.min(i.scale, u.maxRatio), n.minRatio)),
          u.$imageEl
            .transition(t.params.speed)
            .transform('translate3d(0,0,0) scale('.concat(i.scale, ')')),
          (d = i.scale),
          (p = !1),
          1 === i.scale && (u.$slideEl = void 0));
      }
      function y(e) {
        var a = t.zoom;
        if (
          u.$imageEl &&
          0 !== u.$imageEl.length &&
          ((t.allowClick = !1), f.isTouched && u.$slideEl)
        ) {
          f.isMoved ||
            ((f.width = u.$imageEl[0].offsetWidth),
            (f.height = u.$imageEl[0].offsetHeight),
            (f.startX = A(u.$imageWrapEl[0], 'x') || 0),
            (f.startY = A(u.$imageWrapEl[0], 'y') || 0),
            (u.slideWidth = u.$slideEl[0].offsetWidth),
            (u.slideHeight = u.$slideEl[0].offsetHeight),
            u.$imageWrapEl.transition(0));
          var r = f.width * a.scale,
            n = f.height * a.scale;
          if (!(r < u.slideWidth && n < u.slideHeight)) {
            if (
              ((f.minX = Math.min(u.slideWidth / 2 - r / 2, 0)),
              (f.maxX = -f.minX),
              (f.minY = Math.min(u.slideHeight / 2 - n / 2, 0)),
              (f.maxY = -f.minY),
              (f.touchesCurrent.x =
                'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX),
              (f.touchesCurrent.y =
                'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY),
              !f.isMoved && !p)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(f.minX) === Math.floor(f.startX) &&
                  f.touchesCurrent.x < f.touchesStart.x) ||
                  (Math.floor(f.maxX) === Math.floor(f.startX) &&
                    f.touchesCurrent.x > f.touchesStart.x))
              )
                return void (f.isTouched = !1);
              if (
                !t.isHorizontal() &&
                ((Math.floor(f.minY) === Math.floor(f.startY) &&
                  f.touchesCurrent.y < f.touchesStart.y) ||
                  (Math.floor(f.maxY) === Math.floor(f.startY) &&
                    f.touchesCurrent.y > f.touchesStart.y))
              )
                return void (f.isTouched = !1);
            }
            e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              (f.isMoved = !0),
              (f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX),
              (f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY),
              f.currentX < f.minX &&
                (f.currentX =
                  f.minX + 1 - Math.pow(f.minX - f.currentX + 1, 0.8)),
              f.currentX > f.maxX &&
                (f.currentX =
                  f.maxX - 1 + Math.pow(f.currentX - f.maxX + 1, 0.8)),
              f.currentY < f.minY &&
                (f.currentY =
                  f.minY + 1 - Math.pow(f.minY - f.currentY + 1, 0.8)),
              f.currentY > f.maxY &&
                (f.currentY =
                  f.maxY - 1 + Math.pow(f.currentY - f.maxY + 1, 0.8)),
              h.prevPositionX || (h.prevPositionX = f.touchesCurrent.x),
              h.prevPositionY || (h.prevPositionY = f.touchesCurrent.y),
              h.prevTime || (h.prevTime = Date.now()),
              (h.x =
                (f.touchesCurrent.x - h.prevPositionX) /
                (Date.now() - h.prevTime) /
                2),
              (h.y =
                (f.touchesCurrent.y - h.prevPositionY) /
                (Date.now() - h.prevTime) /
                2),
              Math.abs(f.touchesCurrent.x - h.prevPositionX) < 2 && (h.x = 0),
              Math.abs(f.touchesCurrent.y - h.prevPositionY) < 2 && (h.y = 0),
              (h.prevPositionX = f.touchesCurrent.x),
              (h.prevPositionY = f.touchesCurrent.y),
              (h.prevTime = Date.now()),
              u.$imageWrapEl.transform(
                'translate3d('
                  .concat(f.currentX, 'px, ')
                  .concat(f.currentY, 'px,0)')
              );
          }
        }
      }
      function x() {
        var e = t.zoom;
        u.$slideEl &&
          t.previousIndex !== t.activeIndex &&
          (u.$imageEl && u.$imageEl.transform('translate3d(0,0,0) scale(1)'),
          u.$imageWrapEl && u.$imageWrapEl.transform('translate3d(0,0,0)'),
          (e.scale = 1),
          (d = 1),
          (u.$slideEl = void 0),
          (u.$imageEl = void 0),
          (u.$imageWrapEl = void 0));
      }
      function E(e) {
        var a,
          r,
          n,
          s,
          o,
          l,
          c,
          p,
          h,
          v,
          m,
          g,
          b,
          w,
          y,
          x,
          E = t.zoom,
          S = t.params.zoom;
        u.$slideEl ||
          (e &&
            e.target &&
            (u.$slideEl = P(e.target).closest('.'.concat(t.params.slideClass))),
          u.$slideEl ||
            (t.params.virtual && t.params.virtual.enabled && t.virtual
              ? (u.$slideEl = t.$wrapperEl.children(
                  '.'.concat(t.params.slideActiveClass)
                ))
              : (u.$slideEl = t.slides.eq(t.activeIndex))),
          (u.$imageEl = u.$slideEl
            .find('.'.concat(S.containerClass))
            .eq(0)
            .find('picture, img, svg, canvas, .swiper-zoom-target')
            .eq(0)),
          (u.$imageWrapEl = u.$imageEl.parent('.'.concat(S.containerClass)))),
          u.$imageEl &&
            0 !== u.$imageEl.length &&
            u.$imageWrapEl &&
            0 !== u.$imageWrapEl.length &&
            (t.params.cssMode &&
              ((t.wrapperEl.style.overflow = 'hidden'),
              (t.wrapperEl.style.touchAction = 'none')),
            u.$slideEl.addClass(''.concat(S.zoomedSlideClass)),
            void 0 === f.touchesStart.x && e
              ? ((a =
                  'touchend' === e.type ? e.changedTouches[0].pageX : e.pageX),
                (r =
                  'touchend' === e.type ? e.changedTouches[0].pageY : e.pageY))
              : ((a = f.touchesStart.x), (r = f.touchesStart.y)),
            (E.scale = u.$imageWrapEl.attr('data-swiper-zoom') || S.maxRatio),
            (d = u.$imageWrapEl.attr('data-swiper-zoom') || S.maxRatio),
            e
              ? ((y = u.$slideEl[0].offsetWidth),
                (x = u.$slideEl[0].offsetHeight),
                (n = u.$slideEl.offset().left + i.scrollX + y / 2 - a),
                (s = u.$slideEl.offset().top + i.scrollY + x / 2 - r),
                (c = u.$imageEl[0].offsetWidth),
                (p = u.$imageEl[0].offsetHeight),
                (h = c * E.scale),
                (v = p * E.scale),
                (b = -(m = Math.min(y / 2 - h / 2, 0))),
                (w = -(g = Math.min(x / 2 - v / 2, 0))),
                (o = n * E.scale) < m && (o = m),
                o > b && (o = b),
                (l = s * E.scale) < g && (l = g),
                l > w && (l = w))
              : ((o = 0), (l = 0)),
            u.$imageWrapEl
              .transition(300)
              .transform('translate3d('.concat(o, 'px, ').concat(l, 'px,0)')),
            u.$imageEl
              .transition(300)
              .transform('translate3d(0,0,0) scale('.concat(E.scale, ')')));
      }
      function S() {
        var e = t.zoom,
          a = t.params.zoom;
        u.$slideEl ||
          (t.params.virtual && t.params.virtual.enabled && t.virtual
            ? (u.$slideEl = t.$wrapperEl.children(
                '.'.concat(t.params.slideActiveClass)
              ))
            : (u.$slideEl = t.slides.eq(t.activeIndex)),
          (u.$imageEl = u.$slideEl
            .find('.'.concat(a.containerClass))
            .eq(0)
            .find('picture, img, svg, canvas, .swiper-zoom-target')
            .eq(0)),
          (u.$imageWrapEl = u.$imageEl.parent('.'.concat(a.containerClass)))),
          u.$imageEl &&
            0 !== u.$imageEl.length &&
            u.$imageWrapEl &&
            0 !== u.$imageWrapEl.length &&
            (t.params.cssMode &&
              ((t.wrapperEl.style.overflow = ''),
              (t.wrapperEl.style.touchAction = '')),
            (e.scale = 1),
            (d = 1),
            u.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'),
            u.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)'),
            u.$slideEl.removeClass(''.concat(a.zoomedSlideClass)),
            (u.$slideEl = void 0));
      }
      function T(e) {
        var a = t.zoom;
        a.scale && 1 !== a.scale ? S() : E(e);
      }
      function C() {
        var e = t.support;
        return {
          passiveListener: !(
            'touchstart' !== t.touchEvents.start ||
            !e.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 },
          activeListenerWithCapture: !e.passiveListener || {
            passive: !1,
            capture: !0,
          },
        };
      }
      function M() {
        return '.'.concat(t.params.slideClass);
      }
      function k(e) {
        var a = C().passiveListener,
          r = M();
        t.$wrapperEl[e]('gesturestart', r, g, a),
          t.$wrapperEl[e]('gesturechange', r, b, a),
          t.$wrapperEl[e]('gestureend', r, w, a);
      }
      function $() {
        o || ((o = !0), k('on'));
      }
      function z() {
        o && ((o = !1), k('off'));
      }
      function O() {
        var e = t.zoom;
        if (!e.enabled) {
          e.enabled = !0;
          var a = t.support,
            r = C(),
            n = r.passiveListener,
            i = r.activeListenerWithCapture,
            s = M();
          a.gestures
            ? (t.$wrapperEl.on(t.touchEvents.start, $, n),
              t.$wrapperEl.on(t.touchEvents.end, z, n))
            : 'touchstart' === t.touchEvents.start &&
              (t.$wrapperEl.on(t.touchEvents.start, s, g, n),
              t.$wrapperEl.on(t.touchEvents.move, s, b, i),
              t.$wrapperEl.on(t.touchEvents.end, s, w, n),
              t.touchEvents.cancel &&
                t.$wrapperEl.on(t.touchEvents.cancel, s, w, n)),
            t.$wrapperEl.on(
              t.touchEvents.move,
              '.'.concat(t.params.zoom.containerClass),
              y,
              i
            );
        }
      }
      function I() {
        var e = t.zoom;
        if (e.enabled) {
          var a = t.support;
          e.enabled = !1;
          var r = C(),
            n = r.passiveListener,
            i = r.activeListenerWithCapture,
            s = M();
          a.gestures
            ? (t.$wrapperEl.off(t.touchEvents.start, $, n),
              t.$wrapperEl.off(t.touchEvents.end, z, n))
            : 'touchstart' === t.touchEvents.start &&
              (t.$wrapperEl.off(t.touchEvents.start, s, g, n),
              t.$wrapperEl.off(t.touchEvents.move, s, b, i),
              t.$wrapperEl.off(t.touchEvents.end, s, w, n),
              t.touchEvents.cancel &&
                t.$wrapperEl.off(t.touchEvents.cancel, s, w, n)),
            t.$wrapperEl.off(
              t.touchEvents.move,
              '.'.concat(t.params.zoom.containerClass),
              y,
              i
            );
        }
      }
      Object.defineProperty(t.zoom, 'scale', {
        get: function () {
          return v;
        },
        set: function (e) {
          if (v !== e) {
            var t = u.$imageEl ? u.$imageEl[0] : void 0,
              a = u.$slideEl ? u.$slideEl[0] : void 0;
            n('zoomChange', e, t, a);
          }
          v = e;
        },
      }),
        r('init', function () {
          t.params.zoom.enabled && O();
        }),
        r('destroy', function () {
          I();
        }),
        r('touchStart', function (e, a) {
          t.zoom.enabled &&
            (function (e) {
              var a = t.device;
              u.$imageEl &&
                0 !== u.$imageEl.length &&
                (f.isTouched ||
                  (a.android && e.cancelable && e.preventDefault(),
                  (f.isTouched = !0),
                  (f.touchesStart.x =
                    'touchstart' === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX),
                  (f.touchesStart.y =
                    'touchstart' === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY)));
            })(a);
        }),
        r('touchEnd', function (e, a) {
          t.zoom.enabled &&
            (function () {
              var e = t.zoom;
              if (u.$imageEl && 0 !== u.$imageEl.length) {
                if (!f.isTouched || !f.isMoved)
                  return (f.isTouched = !1), void (f.isMoved = !1);
                (f.isTouched = !1), (f.isMoved = !1);
                var a = 300,
                  r = 300,
                  n = h.x * a,
                  i = f.currentX + n,
                  s = h.y * r,
                  o = f.currentY + s;
                0 !== h.x && (a = Math.abs((i - f.currentX) / h.x)),
                  0 !== h.y && (r = Math.abs((o - f.currentY) / h.y));
                var l = Math.max(a, r);
                (f.currentX = i), (f.currentY = o);
                var c = f.width * e.scale,
                  d = f.height * e.scale;
                (f.minX = Math.min(u.slideWidth / 2 - c / 2, 0)),
                  (f.maxX = -f.minX),
                  (f.minY = Math.min(u.slideHeight / 2 - d / 2, 0)),
                  (f.maxY = -f.minY),
                  (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
                  (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
                  u.$imageWrapEl
                    .transition(l)
                    .transform(
                      'translate3d('
                        .concat(f.currentX, 'px, ')
                        .concat(f.currentY, 'px,0)')
                    );
              }
            })();
        }),
        r('doubleTap', function (e, a) {
          !t.animating &&
            t.params.zoom.enabled &&
            t.zoom.enabled &&
            t.params.zoom.toggle &&
            T(a);
        }),
        r('transitionEnd', function () {
          t.zoom.enabled && t.params.zoom.enabled && x();
        }),
        r('slideChange', function () {
          t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && x();
        }),
        Object.assign(t.zoom, {
          enable: O,
          disable: I,
          in: E,
          out: S,
          toggle: T,
        });
    },
    function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on,
        n = e.emit;
      a({
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: '',
          elementClass: 'swiper-lazy',
          loadingClass: 'swiper-lazy-loading',
          loadedClass: 'swiper-lazy-loaded',
          preloaderClass: 'swiper-lazy-preloader',
        },
      }),
        (t.lazy = {});
      var i = !1,
        o = !1;
      function l(e) {
        var a =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          r = t.params.lazy;
        if (void 0 !== e && 0 !== t.slides.length) {
          var i = t.virtual && t.params.virtual.enabled,
            s = i
              ? t.$wrapperEl.children(
                  '.'
                    .concat(t.params.slideClass, '[data-swiper-slide-index="')
                    .concat(e, '"]')
                )
              : t.slides.eq(e),
            o = s.find(
              '.'
                .concat(r.elementClass, ':not(.')
                .concat(r.loadedClass, '):not(.')
                .concat(r.loadingClass, ')')
            );
          !s.hasClass(r.elementClass) ||
            s.hasClass(r.loadedClass) ||
            s.hasClass(r.loadingClass) ||
            o.push(s[0]),
            0 !== o.length &&
              o.each(function (e) {
                var i = P(e);
                i.addClass(r.loadingClass);
                var o = i.attr('data-background'),
                  c = i.attr('data-src'),
                  d = i.attr('data-srcset'),
                  p = i.attr('data-sizes'),
                  u = i.parent('picture');
                t.loadImage(i[0], c || o, d, p, !1, function () {
                  if (null != t && t && (!t || t.params) && !t.destroyed) {
                    if (
                      (o
                        ? (i.css('background-image', 'url("'.concat(o, '")')),
                          i.removeAttr('data-background'))
                        : (d &&
                            (i.attr('srcset', d), i.removeAttr('data-srcset')),
                          p && (i.attr('sizes', p), i.removeAttr('data-sizes')),
                          u.length &&
                            u.children('source').each(function (e) {
                              var t = P(e);
                              t.attr('data-srcset') &&
                                (t.attr('srcset', t.attr('data-srcset')),
                                t.removeAttr('data-srcset'));
                            }),
                          c && (i.attr('src', c), i.removeAttr('data-src'))),
                      i.addClass(r.loadedClass).removeClass(r.loadingClass),
                      s.find('.'.concat(r.preloaderClass)).remove(),
                      t.params.loop && a)
                    ) {
                      var e = s.attr('data-swiper-slide-index');
                      s.hasClass(t.params.slideDuplicateClass)
                        ? l(
                            t.$wrapperEl
                              .children(
                                '[data-swiper-slide-index="'
                                  .concat(e, '"]:not(.')
                                  .concat(t.params.slideDuplicateClass, ')')
                              )
                              .index(),
                            !1
                          )
                        : l(
                            t.$wrapperEl
                              .children(
                                '.'
                                  .concat(
                                    t.params.slideDuplicateClass,
                                    '[data-swiper-slide-index="'
                                  )
                                  .concat(e, '"]')
                              )
                              .index(),
                            !1
                          );
                    }
                    n('lazyImageReady', s[0], i[0]),
                      t.params.autoHeight && t.updateAutoHeight();
                  }
                }),
                  n('lazyImageLoad', s[0], i[0]);
              });
        }
      }
      function c() {
        var e = t.$wrapperEl,
          a = t.params,
          r = t.slides,
          n = t.activeIndex,
          i = t.virtual && a.virtual.enabled,
          s = a.lazy,
          c = a.slidesPerView;
        function d(t) {
          if (i) {
            if (
              e.children(
                '.'
                  .concat(a.slideClass, '[data-swiper-slide-index="')
                  .concat(t, '"]')
              ).length
            )
              return !0;
          } else if (r[t]) return !0;
          return !1;
        }
        function p(e) {
          return i ? P(e).attr('data-swiper-slide-index') : P(e).index();
        }
        if (
          ('auto' === c && (c = 0), o || (o = !0), t.params.watchSlidesProgress)
        )
          e.children('.'.concat(a.slideVisibleClass)).each(function (e) {
            l(i ? P(e).attr('data-swiper-slide-index') : P(e).index());
          });
        else if (c > 1) for (var u = n; u < n + c; u += 1) d(u) && l(u);
        else l(n);
        if (s.loadPrevNext)
          if (c > 1 || (s.loadPrevNextAmount && s.loadPrevNextAmount > 1)) {
            for (
              var f = s.loadPrevNextAmount,
                h = c,
                v = Math.min(n + h + Math.max(f, h), r.length),
                m = Math.max(n - Math.max(h, f), 0),
                g = n + c;
              g < v;
              g += 1
            )
              d(g) && l(g);
            for (var b = m; b < n; b += 1) d(b) && l(b);
          } else {
            var w = e.children('.'.concat(a.slideNextClass));
            w.length > 0 && l(p(w));
            var y = e.children('.'.concat(a.slidePrevClass));
            y.length > 0 && l(p(y));
          }
      }
      function d() {
        var e = s();
        if (t && !t.destroyed) {
          var a = t.params.lazy.scrollingElement
              ? P(t.params.lazy.scrollingElement)
              : P(e),
            r = a[0] === e,
            n = r ? e.innerWidth : a[0].offsetWidth,
            o = r ? e.innerHeight : a[0].offsetHeight,
            l = t.$el.offset(),
            p = !1;
          t.rtlTranslate && (l.left -= t.$el[0].scrollLeft);
          for (
            var u = [
                [l.left, l.top],
                [l.left + t.width, l.top],
                [l.left, l.top + t.height],
                [l.left + t.width, l.top + t.height],
              ],
              f = 0;
            f < u.length;
            f += 1
          ) {
            var h = u[f];
            if (h[0] >= 0 && h[0] <= n && h[1] >= 0 && h[1] <= o) {
              if (0 === h[0] && 0 === h[1]) continue;
              p = !0;
            }
          }
          var v = !(
            'touchstart' !== t.touchEvents.start ||
            !t.support.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          p
            ? (c(), a.off('scroll', d, v))
            : i || ((i = !0), a.on('scroll', d, v));
        }
      }
      r('beforeInit', function () {
        t.params.lazy.enabled &&
          t.params.preloadImages &&
          (t.params.preloadImages = !1);
      }),
        r('init', function () {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? d() : c());
        }),
        r('scroll', function () {
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.freeMode.sticky &&
            c();
        }),
        r('scrollbarDragMove resize _freeModeNoMomentumRelease', function () {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? d() : c());
        }),
        r('transitionStart', function () {
          t.params.lazy.enabled &&
            (t.params.lazy.loadOnTransitionStart ||
              (!t.params.lazy.loadOnTransitionStart && !o)) &&
            (t.params.lazy.checkInView ? d() : c());
        }),
        r('transitionEnd', function () {
          t.params.lazy.enabled &&
            !t.params.lazy.loadOnTransitionStart &&
            (t.params.lazy.checkInView ? d() : c());
        }),
        r('slideChange', function () {
          var e = t.params,
            a = e.lazy,
            r = e.cssMode,
            n = e.watchSlidesProgress,
            i = e.touchReleaseOnEdges,
            s = e.resistanceRatio;
          a.enabled && (r || (n && (i || 0 === s))) && c();
        }),
        Object.assign(t.lazy, { load: c, loadInSlide: l });
    },
    function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      function n(e, t) {
        var a, r, n, i, s;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((s = (function (e, t) {
                  for (r = -1, a = e.length; a - r > 1; )
                    e[(n = (a + r) >> 1)] <= t ? (r = n) : (a = n);
                  return a;
                })(this.x, e)),
                (i = s - 1),
                ((e - this.x[i]) * (this.y[s] - this.y[i])) /
                  (this.x[s] - this.x[i]) +
                  this.y[i])
              : 0;
          }),
          this
        );
      }
      function i() {
        t.controller.control &&
          t.controller.spline &&
          ((t.controller.spline = void 0), delete t.controller.spline);
      }
      a({ controller: { control: void 0, inverse: !1, by: 'slide' } }),
        (t.controller = { control: void 0 }),
        r('beforeInit', function () {
          t.controller.control = t.params.controller.control;
        }),
        r('update', function () {
          i();
        }),
        r('resize', function () {
          i();
        }),
        r('observerUpdate', function () {
          i();
        }),
        r('setTranslate', function (e, a, r) {
          t.controller.control && t.controller.setTranslate(a, r);
        }),
        r('setTransition', function (e, a, r) {
          t.controller.control && t.controller.setTransition(a, r);
        }),
        Object.assign(t.controller, {
          setTranslate: function (e, a) {
            var r,
              i,
              s = t.controller.control,
              o = t.constructor;
            function l(e) {
              var a = t.rtlTranslate ? -t.translate : t.translate;
              'slide' === t.params.controller.by &&
                ((function (e) {
                  t.controller.spline ||
                    (t.controller.spline = t.params.loop
                      ? new n(t.slidesGrid, e.slidesGrid)
                      : new n(t.snapGrid, e.snapGrid));
                })(e),
                (i = -t.controller.spline.interpolate(-a))),
                (i && 'container' !== t.params.controller.by) ||
                  ((r =
                    (e.maxTranslate() - e.minTranslate()) /
                    (t.maxTranslate() - t.minTranslate())),
                  (i = (a - t.minTranslate()) * r + e.minTranslate())),
                t.params.controller.inverse && (i = e.maxTranslate() - i),
                e.updateProgress(i),
                e.setTranslate(i, t),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            if (Array.isArray(s))
              for (var c = 0; c < s.length; c += 1)
                s[c] !== a && s[c] instanceof o && l(s[c]);
            else s instanceof o && a !== s && l(s);
          },
          setTransition: function (e, a) {
            var r,
              n = t.constructor,
              i = t.controller.control;
            function s(a) {
              a.setTransition(e, t),
                0 !== e &&
                  (a.transitionStart(),
                  a.params.autoHeight &&
                    O(function () {
                      a.updateAutoHeight();
                    }),
                  a.$wrapperEl.transitionEnd(function () {
                    i &&
                      (a.params.loop &&
                        'slide' === t.params.controller.by &&
                        a.loopFix(),
                      a.transitionEnd());
                  }));
            }
            if (Array.isArray(i))
              for (r = 0; r < i.length; r += 1)
                i[r] !== a && i[r] instanceof n && s(i[r]);
            else i instanceof n && a !== i && s(i);
          },
        });
    },
    function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({
        a11y: {
          enabled: !0,
          notificationClass: 'swiper-notification',
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}',
          slideLabelMessage: '{{index}} / {{slidesLength}}',
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: 'group',
        },
      });
      var n = null;
      function i(e) {
        var t = n;
        0 !== t.length && (t.html(''), t.html(e));
      }
      function s(e) {
        e.attr('tabIndex', '0');
      }
      function o(e) {
        e.attr('tabIndex', '-1');
      }
      function l(e, t) {
        e.attr('role', t);
      }
      function c(e, t) {
        e.attr('aria-roledescription', t);
      }
      function d(e, t) {
        e.attr('aria-label', t);
      }
      function p(e) {
        e.attr('aria-disabled', !0);
      }
      function u(e) {
        e.attr('aria-disabled', !1);
      }
      function f(e) {
        if (13 === e.keyCode || 32 === e.keyCode) {
          var a = t.params.a11y,
            r = P(e.target);
          t.navigation &&
            t.navigation.$nextEl &&
            r.is(t.navigation.$nextEl) &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
            t.isEnd ? i(a.lastSlideMessage) : i(a.nextSlideMessage)),
            t.navigation &&
              t.navigation.$prevEl &&
              r.is(t.navigation.$prevEl) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning ? i(a.firstSlideMessage) : i(a.prevSlideMessage)),
            t.pagination &&
              r.is(Ie(t.params.pagination.bulletClass)) &&
              r[0].click();
        }
      }
      function h() {
        if (!t.params.loop && !t.params.rewind && t.navigation) {
          var e = t.navigation,
            a = e.$nextEl,
            r = e.$prevEl;
          r && r.length > 0 && (t.isBeginning ? (p(r), o(r)) : (u(r), s(r))),
            a && a.length > 0 && (t.isEnd ? (p(a), o(a)) : (u(a), s(a)));
        }
      }
      function v() {
        return (
          t.pagination && t.pagination.bullets && t.pagination.bullets.length
        );
      }
      function m() {
        return v() && t.params.pagination.clickable;
      }
      var g = function (e, t, a) {
        s(e),
          'BUTTON' !== e[0].tagName && (l(e, 'button'), e.on('keydown', f)),
          d(e, a),
          (function (e, t) {
            e.attr('aria-controls', t);
          })(e, t);
      };
      r('beforeInit', function () {
        n = P(
          '<span class="'.concat(
            t.params.a11y.notificationClass,
            '" aria-live="assertive" aria-atomic="true"></span>'
          )
        );
      }),
        r('afterInit', function () {
          t.params.a11y.enabled &&
            ((function () {
              var e = t.params.a11y;
              t.$el.append(n);
              var a = t.$el;
              e.containerRoleDescriptionMessage &&
                c(a, e.containerRoleDescriptionMessage),
                e.containerMessage && d(a, e.containerMessage);
              var r,
                i = t.$wrapperEl,
                s =
                  i.attr('id') ||
                  'swiper-wrapper-'.concat(
                    (function () {
                      var e = function () {
                        return Math.round(16 * Math.random()).toString(16);
                      };
                      return 'x'
                        .repeat(
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 16
                        )
                        .replace(/x/g, e);
                    })(16)
                  ),
                o =
                  t.params.autoplay && t.params.autoplay.enabled
                    ? 'off'
                    : 'polite';
              (r = s),
                i.attr('id', r),
                (function (e, t) {
                  e.attr('aria-live', t);
                })(i, o),
                e.itemRoleDescriptionMessage &&
                  c(P(t.slides), e.itemRoleDescriptionMessage),
                l(P(t.slides), e.slideRole);
              var p,
                u,
                h = t.params.loop
                  ? t.slides.filter(function (e) {
                      return !e.classList.contains(
                        t.params.slideDuplicateClass
                      );
                    }).length
                  : t.slides.length;
              t.slides.each(function (a, r) {
                var n = P(a),
                  i = t.params.loop
                    ? parseInt(n.attr('data-swiper-slide-index'), 10)
                    : r;
                d(
                  n,
                  e.slideLabelMessage
                    .replace(/\{\{index\}\}/, i + 1)
                    .replace(/\{\{slidesLength\}\}/, h)
                );
              }),
                t.navigation &&
                  t.navigation.$nextEl &&
                  (p = t.navigation.$nextEl),
                t.navigation &&
                  t.navigation.$prevEl &&
                  (u = t.navigation.$prevEl),
                p && p.length && g(p, s, e.nextSlideMessage),
                u && u.length && g(u, s, e.prevSlideMessage),
                m() &&
                  t.pagination.$el.on(
                    'keydown',
                    Ie(t.params.pagination.bulletClass),
                    f
                  );
            })(),
            h());
        }),
        r('toEdge', function () {
          t.params.a11y.enabled && h();
        }),
        r('fromEdge', function () {
          t.params.a11y.enabled && h();
        }),
        r('paginationUpdate', function () {
          var e;
          t.params.a11y.enabled &&
            ((e = t.params.a11y),
            v() &&
              t.pagination.bullets.each(function (a) {
                var r = P(a);
                t.params.pagination.clickable &&
                  (s(r),
                  t.params.pagination.renderBullet ||
                    (l(r, 'button'),
                    d(
                      r,
                      e.paginationBulletMessage.replace(
                        /\{\{index\}\}/,
                        r.index() + 1
                      )
                    ))),
                  r.is('.'.concat(t.params.pagination.bulletActiveClass))
                    ? r.attr('aria-current', 'true')
                    : r.removeAttr('aria-current');
              }));
        }),
        r('destroy', function () {
          var e, a;
          t.params.a11y.enabled &&
            (n && n.length > 0 && n.remove(),
            t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl),
            t.navigation && t.navigation.$prevEl && (a = t.navigation.$prevEl),
            e && e.off('keydown', f),
            a && a.off('keydown', f),
            m() &&
              t.pagination.$el.off(
                'keydown',
                Ie(t.params.pagination.bulletClass),
                f
              ));
        });
    },
    function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({
        history: { enabled: !1, root: '', replaceState: !1, key: 'slides' },
      });
      var n = !1,
        i = {},
        o = function (e) {
          return e
            .toString()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
        },
        l = function (e) {
          var t = s(),
            a = (e ? new URL(e) : t.location).pathname
              .slice(1)
              .split('/')
              .filter(function (e) {
                return '' !== e;
              }),
            r = a.length;
          return { key: a[r - 2], value: a[r - 1] };
        },
        c = function (e, a) {
          var r = s();
          if (n && t.params.history.enabled) {
            var i;
            i = t.params.url ? new URL(t.params.url) : r.location;
            var l = t.slides.eq(a),
              c = o(l.attr('data-history'));
            if (t.params.history.root.length > 0) {
              var d = t.params.history.root;
              '/' === d[d.length - 1] && (d = d.slice(0, d.length - 1)),
                (c = ''.concat(d, '/').concat(e, '/').concat(c));
            } else i.pathname.includes(e) || (c = ''.concat(e, '/').concat(c));
            var p = r.history.state;
            (p && p.value === c) ||
              (t.params.history.replaceState
                ? r.history.replaceState({ value: c }, null, c)
                : r.history.pushState({ value: c }, null, c));
          }
        },
        d = function (e, a, r) {
          if (a)
            for (var n = 0, i = t.slides.length; n < i; n += 1) {
              var s = t.slides.eq(n);
              if (
                o(s.attr('data-history')) === a &&
                !s.hasClass(t.params.slideDuplicateClass)
              ) {
                var l = s.index();
                t.slideTo(l, e, r);
              }
            }
          else t.slideTo(0, e, r);
        },
        p = function () {
          (i = l(t.params.url)), d(t.params.speed, t.paths.value, !1);
        };
      r('init', function () {
        t.params.history.enabled &&
          (function () {
            var e = s();
            if (t.params.history) {
              if (!e.history || !e.history.pushState)
                return (
                  (t.params.history.enabled = !1),
                  void (t.params.hashNavigation.enabled = !0)
                );
              (n = !0),
                ((i = l(t.params.url)).key || i.value) &&
                  (d(0, i.value, t.params.runCallbacksOnInit),
                  t.params.history.replaceState ||
                    e.addEventListener('popstate', p));
            }
          })();
      }),
        r('destroy', function () {
          t.params.history.enabled &&
            (function () {
              var e = s();
              t.params.history.replaceState ||
                e.removeEventListener('popstate', p);
            })();
        }),
        r('transitionEnd _freeModeNoMomentumRelease', function () {
          n && c(t.params.history.key, t.activeIndex);
        }),
        r('slideChange', function () {
          n && t.params.cssMode && c(t.params.history.key, t.activeIndex);
        });
    },
    function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.emit,
        i = e.on,
        o = !1,
        l = n(),
        c = s();
      a({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
      var d = function () {
          r('hashChange');
          var e = l.location.hash.replace('#', '');
          if (e !== t.slides.eq(t.activeIndex).attr('data-hash')) {
            var a = t.$wrapperEl
              .children(
                '.'.concat(t.params.slideClass, '[data-hash="').concat(e, '"]')
              )
              .index();
            if (void 0 === a) return;
            t.slideTo(a);
          }
        },
        p = function () {
          if (o && t.params.hashNavigation.enabled)
            if (
              t.params.hashNavigation.replaceState &&
              c.history &&
              c.history.replaceState
            )
              c.history.replaceState(
                null,
                null,
                '#'.concat(t.slides.eq(t.activeIndex).attr('data-hash')) || 0
              ),
                r('hashSet');
            else {
              var e = t.slides.eq(t.activeIndex),
                a = e.attr('data-hash') || e.attr('data-history');
              (l.location.hash = a || ''), r('hashSet');
            }
        };
      i('init', function () {
        t.params.hashNavigation.enabled &&
          (function () {
            if (
              !(
                !t.params.hashNavigation.enabled ||
                (t.params.history && t.params.history.enabled)
              )
            ) {
              o = !0;
              var e = l.location.hash.replace('#', '');
              if (e)
                for (var a = 0, r = t.slides.length; a < r; a += 1) {
                  var n = t.slides.eq(a);
                  if (
                    (n.attr('data-hash') || n.attr('data-history')) === e &&
                    !n.hasClass(t.params.slideDuplicateClass)
                  ) {
                    var i = n.index();
                    t.slideTo(i, 0, t.params.runCallbacksOnInit, !0);
                  }
                }
              t.params.hashNavigation.watchState && P(c).on('hashchange', d);
            }
          })();
      }),
        i('destroy', function () {
          t.params.hashNavigation.enabled &&
            t.params.hashNavigation.watchState &&
            P(c).off('hashchange', d);
        }),
        i('transitionEnd _freeModeNoMomentumRelease', function () {
          o && p();
        }),
        i('slideChange', function () {
          o && t.params.cssMode && p();
        });
    },
    function (e) {
      var t,
        a = e.swiper,
        r = e.extendParams,
        i = e.on,
        s = e.emit;
      function o() {
        var e = a.slides.eq(a.activeIndex),
          r = a.params.autoplay.delay;
        e.attr('data-swiper-autoplay') &&
          (r = e.attr('data-swiper-autoplay') || a.params.autoplay.delay),
          clearTimeout(t),
          (t = O(function () {
            var e;
            a.params.autoplay.reverseDirection
              ? a.params.loop
                ? (a.loopFix(),
                  (e = a.slidePrev(a.params.speed, !0, !0)),
                  s('autoplay'))
                : a.isBeginning
                ? a.params.autoplay.stopOnLastSlide
                  ? c()
                  : ((e = a.slideTo(
                      a.slides.length - 1,
                      a.params.speed,
                      !0,
                      !0
                    )),
                    s('autoplay'))
                : ((e = a.slidePrev(a.params.speed, !0, !0)), s('autoplay'))
              : a.params.loop
              ? (a.loopFix(),
                (e = a.slideNext(a.params.speed, !0, !0)),
                s('autoplay'))
              : a.isEnd
              ? a.params.autoplay.stopOnLastSlide
                ? c()
                : ((e = a.slideTo(0, a.params.speed, !0, !0)), s('autoplay'))
              : ((e = a.slideNext(a.params.speed, !0, !0)), s('autoplay')),
              ((a.params.cssMode && a.autoplay.running) || !1 === e) && o();
          }, r));
      }
      function l() {
        return (
          void 0 === t &&
          !a.autoplay.running &&
          ((a.autoplay.running = !0), s('autoplayStart'), o(), !0)
        );
      }
      function c() {
        return (
          !!a.autoplay.running &&
          void 0 !== t &&
          (t && (clearTimeout(t), (t = void 0)),
          (a.autoplay.running = !1),
          s('autoplayStop'),
          !0)
        );
      }
      function d(e) {
        a.autoplay.running &&
          (a.autoplay.paused ||
            (t && clearTimeout(t),
            (a.autoplay.paused = !0),
            0 !== e && a.params.autoplay.waitForTransition
              ? ['transitionend', 'webkitTransitionEnd'].forEach(function (e) {
                  a.$wrapperEl[0].addEventListener(e, u);
                })
              : ((a.autoplay.paused = !1), o())));
      }
      function p() {
        var e = n();
        'hidden' === e.visibilityState && a.autoplay.running && d(),
          'visible' === e.visibilityState &&
            a.autoplay.paused &&
            (o(), (a.autoplay.paused = !1));
      }
      function u(e) {
        a &&
          !a.destroyed &&
          a.$wrapperEl &&
          e.target === a.$wrapperEl[0] &&
          (['transitionend', 'webkitTransitionEnd'].forEach(function (e) {
            a.$wrapperEl[0].removeEventListener(e, u);
          }),
          (a.autoplay.paused = !1),
          a.autoplay.running ? o() : c());
      }
      function f() {
        a.params.autoplay.disableOnInteraction ? c() : d(),
          ['transitionend', 'webkitTransitionEnd'].forEach(function (e) {
            a.$wrapperEl[0].removeEventListener(e, u);
          });
      }
      function h() {
        a.params.autoplay.disableOnInteraction ||
          ((a.autoplay.paused = !1), o());
      }
      (a.autoplay = { running: !1, paused: !1 }),
        r({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }),
        i('init', function () {
          a.params.autoplay.enabled &&
            (l(),
            n().addEventListener('visibilitychange', p),
            a.params.autoplay.pauseOnMouseEnter &&
              (a.$el.on('mouseenter', f), a.$el.on('mouseleave', h)));
        }),
        i('beforeTransitionStart', function (e, t, r) {
          a.autoplay.running &&
            (r || !a.params.autoplay.disableOnInteraction
              ? a.autoplay.pause(t)
              : c());
        }),
        i('sliderFirstMove', function () {
          a.autoplay.running &&
            (a.params.autoplay.disableOnInteraction ? c() : d());
        }),
        i('touchEnd', function () {
          a.params.cssMode &&
            a.autoplay.paused &&
            !a.params.autoplay.disableOnInteraction &&
            o();
        }),
        i('destroy', function () {
          a.$el.off('mouseenter', f),
            a.$el.off('mouseleave', h),
            a.autoplay.running && c(),
            n().removeEventListener('visibilitychange', p);
        }),
        Object.assign(a.autoplay, { pause: d, run: o, start: l, stop: c });
    },
    function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: 'swiper-slide-thumb-active',
          thumbsContainerClass: 'swiper-thumbs',
        },
      });
      var n = !1,
        i = !1;
      function s() {
        var e = t.thumbs.swiper;
        if (e) {
          var a = e.clickedIndex,
            r = e.clickedSlide;
          if (
            !(
              (r && P(r).hasClass(t.params.thumbs.slideThumbActiveClass)) ||
              null == a
            )
          ) {
            var n;
            if (
              ((n = e.params.loop
                ? parseInt(
                    P(e.clickedSlide).attr('data-swiper-slide-index'),
                    10
                  )
                : a),
              t.params.loop)
            ) {
              var i = t.activeIndex;
              t.slides.eq(i).hasClass(t.params.slideDuplicateClass) &&
                (t.loopFix(),
                (t._clientLeft = t.$wrapperEl[0].clientLeft),
                (i = t.activeIndex));
              var s = t.slides
                  .eq(i)
                  .prevAll('[data-swiper-slide-index="'.concat(n, '"]'))
                  .eq(0)
                  .index(),
                o = t.slides
                  .eq(i)
                  .nextAll('[data-swiper-slide-index="'.concat(n, '"]'))
                  .eq(0)
                  .index();
              n = void 0 === s ? o : void 0 === o ? s : o - i < i - s ? o : s;
            }
            t.slideTo(n);
          }
        }
      }
      function o() {
        var e = t.params.thumbs;
        if (n) return !1;
        n = !0;
        var a = t.constructor;
        if (e.swiper instanceof a)
          (t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            });
        else if (D(e.swiper)) {
          var r = Object.assign({}, e.swiper);
          Object.assign(r, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (t.thumbs.swiper = new a(r)),
            (i = !0);
        }
        return (
          t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
          t.thumbs.swiper.on('tap', s),
          !0
        );
      }
      function l(e) {
        var a = t.thumbs.swiper;
        if (a) {
          var r =
              'auto' === a.params.slidesPerView
                ? a.slidesPerViewDynamic()
                : a.params.slidesPerView,
            n = t.params.thumbs.autoScrollOffset,
            i = n && !a.params.loop;
          if (t.realIndex !== a.realIndex || i) {
            var s,
              o,
              l = a.activeIndex;
            if (a.params.loop) {
              a.slides.eq(l).hasClass(a.params.slideDuplicateClass) &&
                (a.loopFix(),
                (a._clientLeft = a.$wrapperEl[0].clientLeft),
                (l = a.activeIndex));
              var c = a.slides
                  .eq(l)
                  .prevAll(
                    '[data-swiper-slide-index="'.concat(t.realIndex, '"]')
                  )
                  .eq(0)
                  .index(),
                d = a.slides
                  .eq(l)
                  .nextAll(
                    '[data-swiper-slide-index="'.concat(t.realIndex, '"]')
                  )
                  .eq(0)
                  .index();
              (s =
                void 0 === c
                  ? d
                  : void 0 === d
                  ? c
                  : d - l == l - c
                  ? a.params.slidesPerGroup > 1
                    ? d
                    : l
                  : d - l < l - c
                  ? d
                  : c),
                (o = t.activeIndex > t.previousIndex ? 'next' : 'prev');
            } else o = (s = t.realIndex) > t.previousIndex ? 'next' : 'prev';
            i && (s += 'next' === o ? n : -1 * n),
              a.visibleSlidesIndexes &&
                a.visibleSlidesIndexes.indexOf(s) < 0 &&
                (a.params.centeredSlides
                  ? (s =
                      s > l
                        ? s - Math.floor(r / 2) + 1
                        : s + Math.floor(r / 2) - 1)
                  : s > l && a.params.slidesPerGroup,
                a.slideTo(s, e ? 0 : void 0));
          }
          var p = 1,
            u = t.params.thumbs.slideThumbActiveClass;
          if (
            (t.params.slidesPerView > 1 &&
              !t.params.centeredSlides &&
              (p = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (p = 1),
            (p = Math.floor(p)),
            a.slides.removeClass(u),
            a.params.loop || (a.params.virtual && a.params.virtual.enabled))
          )
            for (var f = 0; f < p; f += 1)
              a.$wrapperEl
                .children(
                  '[data-swiper-slide-index="'.concat(t.realIndex + f, '"]')
                )
                .addClass(u);
          else
            for (var h = 0; h < p; h += 1)
              a.slides.eq(t.realIndex + h).addClass(u);
        }
      }
      (t.thumbs = { swiper: null }),
        r('beforeInit', function () {
          var e = t.params.thumbs;
          e && e.swiper && (o(), l(!0));
        }),
        r('slideChange update resize observerUpdate', function () {
          t.thumbs.swiper && l();
        }),
        r('setTransition', function (e, a) {
          var r = t.thumbs.swiper;
          r && r.setTransition(a);
        }),
        r('beforeDestroy', function () {
          var e = t.thumbs.swiper;
          e && i && e && e.destroy();
        }),
        Object.assign(t.thumbs, { init: o, update: l });
    },
    function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.emit,
        n = e.once;
      a({
        freeMode: {
          enabled: !1,
          momentum: !0,
          momentumRatio: 1,
          momentumBounce: !0,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: !1,
          minimumVelocity: 0.02,
        },
      }),
        Object.assign(t, {
          freeMode: {
            onTouchMove: function () {
              var e = t.touchEventsData,
                a = t.touches;
              0 === e.velocities.length &&
                e.velocities.push({
                  position: a[t.isHorizontal() ? 'startX' : 'startY'],
                  time: e.touchStartTime,
                }),
                e.velocities.push({
                  position: a[t.isHorizontal() ? 'currentX' : 'currentY'],
                  time: I(),
                });
            },
            onTouchEnd: function (e) {
              var a = e.currentPos,
                i = t.params,
                s = t.$wrapperEl,
                o = t.rtlTranslate,
                l = t.snapGrid,
                c = t.touchEventsData,
                d = I() - c.touchStartTime;
              if (a < -t.minTranslate()) t.slideTo(t.activeIndex);
              else if (a > -t.maxTranslate())
                t.slides.length < l.length
                  ? t.slideTo(l.length - 1)
                  : t.slideTo(t.slides.length - 1);
              else {
                if (i.freeMode.momentum) {
                  if (c.velocities.length > 1) {
                    var p = c.velocities.pop(),
                      u = c.velocities.pop(),
                      f = p.position - u.position,
                      h = p.time - u.time;
                    (t.velocity = f / h),
                      (t.velocity /= 2),
                      Math.abs(t.velocity) < i.freeMode.minimumVelocity &&
                        (t.velocity = 0),
                      (h > 150 || I() - p.time > 300) && (t.velocity = 0);
                  } else t.velocity = 0;
                  (t.velocity *= i.freeMode.momentumVelocityRatio),
                    (c.velocities.length = 0);
                  var v = 1e3 * i.freeMode.momentumRatio,
                    m = t.velocity * v,
                    g = t.translate + m;
                  o && (g = -g);
                  var b,
                    w,
                    y = !1,
                    x =
                      20 *
                      Math.abs(t.velocity) *
                      i.freeMode.momentumBounceRatio;
                  if (g < t.maxTranslate())
                    i.freeMode.momentumBounce
                      ? (g + t.maxTranslate() < -x &&
                          (g = t.maxTranslate() - x),
                        (b = t.maxTranslate()),
                        (y = !0),
                        (c.allowMomentumBounce = !0))
                      : (g = t.maxTranslate()),
                      i.loop && i.centeredSlides && (w = !0);
                  else if (g > t.minTranslate())
                    i.freeMode.momentumBounce
                      ? (g - t.minTranslate() > x && (g = t.minTranslate() + x),
                        (b = t.minTranslate()),
                        (y = !0),
                        (c.allowMomentumBounce = !0))
                      : (g = t.minTranslate()),
                      i.loop && i.centeredSlides && (w = !0);
                  else if (i.freeMode.sticky) {
                    for (var E, S = 0; S < l.length; S += 1)
                      if (l[S] > -g) {
                        E = S;
                        break;
                      }
                    g = -(g =
                      Math.abs(l[E] - g) < Math.abs(l[E - 1] - g) ||
                      'next' === t.swipeDirection
                        ? l[E]
                        : l[E - 1]);
                  }
                  if (
                    (w &&
                      n('transitionEnd', function () {
                        t.loopFix();
                      }),
                    0 !== t.velocity)
                  ) {
                    if (
                      ((v = o
                        ? Math.abs((-g - t.translate) / t.velocity)
                        : Math.abs((g - t.translate) / t.velocity)),
                      i.freeMode.sticky)
                    ) {
                      var T = Math.abs((o ? -g : g) - t.translate),
                        C = t.slidesSizesGrid[t.activeIndex];
                      v =
                        T < C
                          ? i.speed
                          : T < 2 * C
                          ? 1.5 * i.speed
                          : 2.5 * i.speed;
                    }
                  } else if (i.freeMode.sticky) return void t.slideToClosest();
                  i.freeMode.momentumBounce && y
                    ? (t.updateProgress(b),
                      t.setTransition(v),
                      t.setTranslate(g),
                      t.transitionStart(!0, t.swipeDirection),
                      (t.animating = !0),
                      s.transitionEnd(function () {
                        t &&
                          !t.destroyed &&
                          c.allowMomentumBounce &&
                          (r('momentumBounce'),
                          t.setTransition(i.speed),
                          setTimeout(function () {
                            t.setTranslate(b),
                              s.transitionEnd(function () {
                                t && !t.destroyed && t.transitionEnd();
                              });
                          }, 0));
                      }))
                    : t.velocity
                    ? (r('_freeModeNoMomentumRelease'),
                      t.updateProgress(g),
                      t.setTransition(v),
                      t.setTranslate(g),
                      t.transitionStart(!0, t.swipeDirection),
                      t.animating ||
                        ((t.animating = !0),
                        s.transitionEnd(function () {
                          t && !t.destroyed && t.transitionEnd();
                        })))
                    : t.updateProgress(g),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses();
                } else {
                  if (i.freeMode.sticky) return void t.slideToClosest();
                  i.freeMode && r('_freeModeNoMomentumRelease');
                }
                (!i.freeMode.momentum || d >= i.longSwipesMs) &&
                  (t.updateProgress(),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses());
              }
            },
          },
        });
    },
    function (e) {
      var t,
        a,
        r,
        n = e.swiper;
      (0, e.extendParams)({ grid: { rows: 1, fill: 'column' } }),
        (n.grid = {
          initSlides: function (e) {
            var i = n.params.slidesPerView,
              s = n.params.grid,
              o = s.rows,
              l = s.fill;
            (a = t / o),
              (r = Math.floor(e / o)),
              (t = Math.floor(e / o) === e / o ? e : Math.ceil(e / o) * o),
              'auto' !== i && 'row' === l && (t = Math.max(t, i * o));
          },
          updateSlide: function (e, i, s, o) {
            var l,
              c,
              d,
              p = n.params,
              u = p.slidesPerGroup,
              f = p.spaceBetween,
              h = n.params.grid,
              v = h.rows,
              m = h.fill;
            if ('row' === m && u > 1) {
              var g = Math.floor(e / (u * v)),
                b = e - v * u * g,
                w = 0 === g ? u : Math.min(Math.ceil((s - g * v * u) / v), u);
              (l = (c = b - (d = Math.floor(b / w)) * w + g * u) + (d * t) / v),
                i.css({ '-webkit-order': l, order: l });
            } else
              'column' === m
                ? ((d = e - (c = Math.floor(e / v)) * v),
                  (c > r || (c === r && d === v - 1)) &&
                    (d += 1) >= v &&
                    ((d = 0), (c += 1)))
                : (c = e - (d = Math.floor(e / a)) * a);
            i.css(o('margin-top'), 0 !== d ? f && ''.concat(f, 'px') : '');
          },
          updateWrapperSize: function (e, a, r) {
            var i,
              s,
              o,
              l = n.params,
              c = l.spaceBetween,
              d = l.centeredSlides,
              p = l.roundLengths,
              u = n.params.grid.rows;
            if (
              ((n.virtualSize = (e + c) * t),
              (n.virtualSize = Math.ceil(n.virtualSize / u) - c),
              n.$wrapperEl.css(
                ((i = {}),
                (s = r('width')),
                (o = ''.concat(n.virtualSize + c, 'px')),
                s in i
                  ? Object.defineProperty(i, s, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (i[s] = o),
                i)
              ),
              d)
            ) {
              a.splice(0, a.length);
              for (var f = [], h = 0; h < a.length; h += 1) {
                var v = a[h];
                p && (v = Math.floor(v)),
                  a[h] < n.virtualSize + a[0] && f.push(v);
              }
              a.push.apply(a, f);
            }
          },
        });
    },
    function (e) {
      var t = e.swiper;
      Object.assign(t, {
        appendSlide: Ae.bind(t),
        prependSlide: Ge.bind(t),
        addSlide: Ne.bind(t),
        removeSlide: Xe.bind(t),
        removeAllSlides: He.bind(t),
      });
    },
    function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({ fadeEffect: { crossFade: !1, transformEl: null } }),
        Ye({
          effect: 'fade',
          swiper: t,
          on: r,
          setTranslate: function () {
            for (
              var e = t.slides, a = t.params.fadeEffect, r = 0;
              r < e.length;
              r += 1
            ) {
              var n = t.slides.eq(r),
                i = -n[0].swiperSlideOffset;
              t.params.virtualTranslate || (i -= t.translate);
              var s = 0;
              t.isHorizontal() || ((s = i), (i = 0));
              var o = t.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(n[0].progress), 0)
                : 1 + Math.min(Math.max(n[0].progress, -1), 0);
              Re(a, n)
                .css({ opacity: o })
                .transform(
                  'translate3d('.concat(i, 'px, ').concat(s, 'px, 0px)')
                );
            }
          },
          setTransition: function (e) {
            var a = t.params.fadeEffect.transformEl;
            (a ? t.slides.find(a) : t.slides).transition(e),
              _e({ swiper: t, duration: e, transformEl: a, allSlides: !0 });
          },
          overwriteParams: function () {
            return {
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !t.params.cssMode,
            };
          },
        });
    },
    function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      }),
        Ye({
          effect: 'cube',
          swiper: t,
          on: r,
          setTranslate: function () {
            var e,
              a = t.$el,
              r = t.$wrapperEl,
              n = t.slides,
              i = t.width,
              s = t.height,
              o = t.rtlTranslate,
              l = t.size,
              c = t.browser,
              d = t.params.cubeEffect,
              p = t.isHorizontal(),
              u = t.virtual && t.params.virtual.enabled,
              f = 0;
            d.shadow &&
              (p
                ? (0 === (e = r.find('.swiper-cube-shadow')).length &&
                    ((e = P('<div class="swiper-cube-shadow"></div>')),
                    r.append(e)),
                  e.css({ height: ''.concat(i, 'px') }))
                : 0 === (e = a.find('.swiper-cube-shadow')).length &&
                  ((e = P('<div class="swiper-cube-shadow"></div>')),
                  a.append(e)));
            for (var h = 0; h < n.length; h += 1) {
              var v = n.eq(h),
                m = h;
              u && (m = parseInt(v.attr('data-swiper-slide-index'), 10));
              var g = 90 * m,
                b = Math.floor(g / 360);
              o && ((g = -g), (b = Math.floor(-g / 360)));
              var w = Math.max(Math.min(v[0].progress, 1), -1),
                y = 0,
                x = 0,
                E = 0;
              m % 4 == 0
                ? ((y = 4 * -b * l), (E = 0))
                : (m - 1) % 4 == 0
                ? ((y = 0), (E = 4 * -b * l))
                : (m - 2) % 4 == 0
                ? ((y = l + 4 * b * l), (E = l))
                : (m - 3) % 4 == 0 && ((y = -l), (E = 3 * l + 4 * l * b)),
                o && (y = -y),
                p || ((x = y), (y = 0));
              var S = 'rotateX('
                .concat(p ? 0 : -g, 'deg) rotateY(')
                .concat(p ? g : 0, 'deg) translate3d(')
                .concat(y, 'px, ')
                .concat(x, 'px, ')
                .concat(E, 'px)');
              if (
                (w <= 1 &&
                  w > -1 &&
                  ((f = 90 * m + 90 * w), o && (f = 90 * -m - 90 * w)),
                v.transform(S),
                d.slideShadows)
              ) {
                var T = p
                    ? v.find('.swiper-slide-shadow-left')
                    : v.find('.swiper-slide-shadow-top'),
                  C = p
                    ? v.find('.swiper-slide-shadow-right')
                    : v.find('.swiper-slide-shadow-bottom');
                0 === T.length &&
                  ((T = P(
                    '<div class="swiper-slide-shadow-'.concat(
                      p ? 'left' : 'top',
                      '"></div>'
                    )
                  )),
                  v.append(T)),
                  0 === C.length &&
                    ((C = P(
                      '<div class="swiper-slide-shadow-'.concat(
                        p ? 'right' : 'bottom',
                        '"></div>'
                      )
                    )),
                    v.append(C)),
                  T.length && (T[0].style.opacity = Math.max(-w, 0)),
                  C.length && (C[0].style.opacity = Math.max(w, 0));
              }
            }
            if (
              (r.css({
                '-webkit-transform-origin': '50% 50% -'.concat(l / 2, 'px'),
                'transform-origin': '50% 50% -'.concat(l / 2, 'px'),
              }),
              d.shadow)
            )
              if (p)
                e.transform(
                  'translate3d(0px, '
                    .concat(i / 2 + d.shadowOffset, 'px, ')
                    .concat(-i / 2, 'px) rotateX(90deg) rotateZ(0deg) scale(')
                    .concat(d.shadowScale, ')')
                );
              else {
                var M = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                  k =
                    1.5 -
                    (Math.sin((2 * M * Math.PI) / 360) / 2 +
                      Math.cos((2 * M * Math.PI) / 360) / 2),
                  $ = d.shadowScale,
                  z = d.shadowScale / k,
                  O = d.shadowOffset;
                e.transform(
                  'scale3d('
                    .concat($, ', 1, ')
                    .concat(z, ') translate3d(0px, ')
                    .concat(s / 2 + O, 'px, ')
                    .concat(-s / 2 / z, 'px) rotateX(-90deg)')
                );
              }
            var I = c.isSafari || c.isWebView ? -l / 2 : 0;
            r.transform(
              'translate3d(0px,0,'
                .concat(I, 'px) rotateX(')
                .concat(t.isHorizontal() ? 0 : f, 'deg) rotateY(')
                .concat(t.isHorizontal() ? -f : 0, 'deg)')
            );
          },
          setTransition: function (e) {
            var a = t.$el;
            t.slides
              .transition(e)
              .find(
                '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
              )
              .transition(e),
              t.params.cubeEffect.shadow &&
                !t.isHorizontal() &&
                a.find('.swiper-cube-shadow').transition(e);
          },
          perspective: function () {
            return !0;
          },
          overwriteParams: function () {
            return {
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0,
            };
          },
        });
    },
    function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({
        flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null },
      }),
        Ye({
          effect: 'flip',
          swiper: t,
          on: r,
          setTranslate: function () {
            for (
              var e = t.slides,
                a = t.rtlTranslate,
                r = t.params.flipEffect,
                n = 0;
              n < e.length;
              n += 1
            ) {
              var i = e.eq(n),
                s = i[0].progress;
              t.params.flipEffect.limitRotation &&
                (s = Math.max(Math.min(i[0].progress, 1), -1));
              var o = i[0].swiperSlideOffset,
                l = -180 * s,
                c = 0,
                d = t.params.cssMode ? -o - t.translate : -o,
                p = 0;
              if (
                (t.isHorizontal()
                  ? a && (l = -l)
                  : ((p = d), (d = 0), (c = -l), (l = 0)),
                (i[0].style.zIndex = -Math.abs(Math.round(s)) + e.length),
                r.slideShadows)
              ) {
                var u = t.isHorizontal()
                    ? i.find('.swiper-slide-shadow-left')
                    : i.find('.swiper-slide-shadow-top'),
                  f = t.isHorizontal()
                    ? i.find('.swiper-slide-shadow-right')
                    : i.find('.swiper-slide-shadow-bottom');
                0 === u.length &&
                  (u = We(r, i, t.isHorizontal() ? 'left' : 'top')),
                  0 === f.length &&
                    (f = We(r, i, t.isHorizontal() ? 'right' : 'bottom')),
                  u.length && (u[0].style.opacity = Math.max(-s, 0)),
                  f.length && (f[0].style.opacity = Math.max(s, 0));
              }
              var h = 'translate3d('
                .concat(d, 'px, ')
                .concat(p, 'px, 0px) rotateX(')
                .concat(c, 'deg) rotateY(')
                .concat(l, 'deg)');
              Re(r, i).transform(h);
            }
          },
          setTransition: function (e) {
            var a = t.params.flipEffect.transformEl;
            (a ? t.slides.find(a) : t.slides)
              .transition(e)
              .find(
                '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
              )
              .transition(e),
              _e({ swiper: t, duration: e, transformEl: a });
          },
          perspective: function () {
            return !0;
          },
          overwriteParams: function () {
            return {
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !t.params.cssMode,
            };
          },
        });
    },
    function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0,
          transformEl: null,
        },
      }),
        Ye({
          effect: 'coverflow',
          swiper: t,
          on: r,
          setTranslate: function () {
            for (
              var e = t.width,
                a = t.height,
                r = t.slides,
                n = t.slidesSizesGrid,
                i = t.params.coverflowEffect,
                s = t.isHorizontal(),
                o = t.translate,
                l = s ? e / 2 - o : a / 2 - o,
                c = s ? i.rotate : -i.rotate,
                d = i.depth,
                p = 0,
                u = r.length;
              p < u;
              p += 1
            ) {
              var f = r.eq(p),
                h = n[p],
                v = ((l - f[0].swiperSlideOffset - h / 2) / h) * i.modifier,
                m = s ? c * v : 0,
                g = s ? 0 : c * v,
                b = -d * Math.abs(v),
                w = i.stretch;
              'string' == typeof w &&
                -1 !== w.indexOf('%') &&
                (w = (parseFloat(i.stretch) / 100) * h);
              var y = s ? 0 : w * v,
                x = s ? w * v : 0,
                E = 1 - (1 - i.scale) * Math.abs(v);
              Math.abs(x) < 0.001 && (x = 0),
                Math.abs(y) < 0.001 && (y = 0),
                Math.abs(b) < 0.001 && (b = 0),
                Math.abs(m) < 0.001 && (m = 0),
                Math.abs(g) < 0.001 && (g = 0),
                Math.abs(E) < 0.001 && (E = 0);
              var S = 'translate3d('
                .concat(x, 'px,')
                .concat(y, 'px,')
                .concat(b, 'px)  rotateX(')
                .concat(g, 'deg) rotateY(')
                .concat(m, 'deg) scale(')
                .concat(E, ')');
              if (
                (Re(i, f).transform(S),
                (f[0].style.zIndex = 1 - Math.abs(Math.round(v))),
                i.slideShadows)
              ) {
                var T = s
                    ? f.find('.swiper-slide-shadow-left')
                    : f.find('.swiper-slide-shadow-top'),
                  C = s
                    ? f.find('.swiper-slide-shadow-right')
                    : f.find('.swiper-slide-shadow-bottom');
                0 === T.length && (T = We(i, f, s ? 'left' : 'top')),
                  0 === C.length && (C = We(i, f, s ? 'right' : 'bottom')),
                  T.length && (T[0].style.opacity = v > 0 ? v : 0),
                  C.length && (C[0].style.opacity = -v > 0 ? -v : 0);
              }
            }
          },
          setTransition: function (e) {
            var a = t.params.coverflowEffect.transformEl;
            (a ? t.slides.find(a) : t.slides)
              .transition(e)
              .find(
                '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
              )
              .transition(e);
          },
          perspective: function () {
            return !0;
          },
          overwriteParams: function () {
            return { watchSlidesProgress: !0 };
          },
        });
    },
    function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({
        creativeEffect: {
          transformEl: null,
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
        },
      }),
        Ye({
          effect: 'creative',
          swiper: t,
          on: r,
          setTranslate: function () {
            var e = t.slides,
              a = t.$wrapperEl,
              r = t.slidesSizesGrid,
              n = t.params.creativeEffect,
              i = n.progressMultiplier,
              s = t.params.centeredSlides;
            if (s) {
              var o = r[0] / 2 - t.params.slidesOffsetBefore || 0;
              a.transform('translateX(calc(50% - '.concat(o, 'px))'));
            }
            for (
              var l = function (a) {
                  var r = e.eq(a),
                    o = r[0].progress,
                    l = Math.min(
                      Math.max(r[0].progress, -n.limitProgress),
                      n.limitProgress
                    ),
                    c = l;
                  s ||
                    (c = Math.min(
                      Math.max(r[0].originalProgress, -n.limitProgress),
                      n.limitProgress
                    ));
                  var d = r[0].swiperSlideOffset,
                    p = [t.params.cssMode ? -d - t.translate : -d, 0, 0],
                    u = [0, 0, 0],
                    f = !1;
                  t.isHorizontal() || ((p[1] = p[0]), (p[0] = 0));
                  var h = {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    scale: 1,
                    opacity: 1,
                  };
                  l < 0
                    ? ((h = n.next), (f = !0))
                    : l > 0 && ((h = n.prev), (f = !0)),
                    p.forEach(function (e, t) {
                      p[t] = 'calc('
                        .concat(e, 'px + (')
                        .concat(
                          (function (e) {
                            return 'string' == typeof e
                              ? e
                              : ''.concat(e, 'px');
                          })(h.translate[t]),
                          ' * '
                        )
                        .concat(Math.abs(l * i), '))');
                    }),
                    u.forEach(function (e, t) {
                      u[t] = h.rotate[t] * Math.abs(l * i);
                    }),
                    (r[0].style.zIndex = -Math.abs(Math.round(o)) + e.length);
                  var v = p.join(', '),
                    m = 'rotateX('
                      .concat(u[0], 'deg) rotateY(')
                      .concat(u[1], 'deg) rotateZ(')
                      .concat(u[2], 'deg)'),
                    g = 'scale('.concat(
                      c < 0
                        ? 1 + (1 - h.scale) * c * i
                        : 1 - (1 - h.scale) * c * i,
                      ')'
                    ),
                    b =
                      c < 0
                        ? 1 + (1 - h.opacity) * c * i
                        : 1 - (1 - h.opacity) * c * i,
                    w = 'translate3d('.concat(v, ') ').concat(m, ' ').concat(g);
                  if ((f && h.shadow) || !f) {
                    var y = r.children('.swiper-slide-shadow');
                    if (
                      (0 === y.length && h.shadow && (y = We(n, r)), y.length)
                    ) {
                      var x = n.shadowPerProgress
                        ? l * (1 / n.limitProgress)
                        : l;
                      y[0].style.opacity = Math.min(
                        Math.max(Math.abs(x), 0),
                        1
                      );
                    }
                  }
                  var E = Re(n, r);
                  E.transform(w).css({ opacity: b }),
                    h.origin && E.css('transform-origin', h.origin);
                },
                c = 0;
              c < e.length;
              c += 1
            )
              l(c);
          },
          setTransition: function (e) {
            var a = t.params.creativeEffect.transformEl;
            (a ? t.slides.find(a) : t.slides)
              .transition(e)
              .find('.swiper-slide-shadow')
              .transition(e),
              _e({ swiper: t, duration: e, transformEl: a, allSlides: !0 });
          },
          perspective: function () {
            return t.params.creativeEffect.perspective;
          },
          overwriteParams: function () {
            return {
              watchSlidesProgress: !0,
              virtualTranslate: !t.params.cssMode,
            };
          },
        });
    },
    function (e) {
      var t = e.swiper,
        a = e.extendParams,
        r = e.on;
      a({ cardsEffect: { slideShadows: !0, transformEl: null } }),
        Ye({
          effect: 'cards',
          swiper: t,
          on: r,
          setTranslate: function () {
            for (
              var e = t.slides,
                a = t.activeIndex,
                r = t.params.cardsEffect,
                n = t.touchEventsData,
                i = n.startTranslate,
                s = n.isTouched,
                o = t.translate,
                l = 0;
              l < e.length;
              l += 1
            ) {
              var c = e.eq(l),
                d = c[0].progress,
                p = Math.min(Math.max(d, -4), 4),
                u = c[0].swiperSlideOffset;
              t.params.centeredSlides &&
                !t.params.cssMode &&
                t.$wrapperEl.transform(
                  'translateX('.concat(t.minTranslate(), 'px)')
                ),
                t.params.centeredSlides &&
                  t.params.cssMode &&
                  (u -= e[0].swiperSlideOffset);
              var f = t.params.cssMode ? -u - t.translate : -u,
                h = 0,
                v = -100 * Math.abs(p),
                m = 1,
                g = -2 * p,
                b = 8 - 0.75 * Math.abs(p),
                w =
                  (l === a || l === a - 1) &&
                  p > 0 &&
                  p < 1 &&
                  (s || t.params.cssMode) &&
                  o < i,
                y =
                  (l === a || l === a + 1) &&
                  p < 0 &&
                  p > -1 &&
                  (s || t.params.cssMode) &&
                  o > i;
              if (w || y) {
                var x = Math.pow(1 - Math.abs((Math.abs(p) - 0.5) / 0.5), 0.5);
                (g += -28 * p * x),
                  (m += -0.5 * x),
                  (b += 96 * x),
                  (h = ''.concat(-25 * x * Math.abs(p), '%'));
              }
              if (
                ((f =
                  p < 0
                    ? 'calc('.concat(f, 'px + (').concat(b * Math.abs(p), '%))')
                    : p > 0
                    ? 'calc('
                        .concat(f, 'px + (-')
                        .concat(b * Math.abs(p), '%))')
                    : ''.concat(f, 'px')),
                !t.isHorizontal())
              ) {
                var E = h;
                (h = f), (f = E);
              }
              var S = ''.concat(p < 0 ? 1 + (1 - m) * p : 1 - (1 - m) * p),
                T = '\n        translate3d('
                  .concat(f, ', ')
                  .concat(h, ', ')
                  .concat(v, 'px)\n        rotateZ(')
                  .concat(g, 'deg)\n        scale(')
                  .concat(S, ')\n      ');
              if (r.slideShadows) {
                var C = c.find('.swiper-slide-shadow');
                0 === C.length && (C = We(r, c)),
                  C.length &&
                    (C[0].style.opacity = Math.min(
                      Math.max((Math.abs(p) - 0.5) / 0.5, 0),
                      1
                    ));
              }
              (c[0].style.zIndex = -Math.abs(Math.round(d)) + e.length),
                Re(r, c).transform(T);
            }
          },
          setTransition: function (e) {
            var a = t.params.cardsEffect.transformEl;
            (a ? t.slides.find(a) : t.slides)
              .transition(e)
              .find('.swiper-slide-shadow')
              .transition(e),
              _e({ swiper: t, duration: e, transformEl: a });
          },
          perspective: function () {
            return !0;
          },
          overwriteParams: function () {
            return {
              watchSlidesProgress: !0,
              virtualTranslate: !t.params.cssMode,
            };
          },
        });
    },
  ];
  $e.use(Ve),
    new $e('.swiper', {
      pagination: { el: '.swiper-pagination', type: 'bullets', clickable: !0 },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1.15,
      spaceBetween: 15,
      centeredSlides: !0,
    });
})();