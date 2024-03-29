/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
	"use strict";
	var t = [],
		E = C.document,
		r = Object.getPrototypeOf,
		s = t.slice,
		g = t.concat,
		u = t.push,
		i = t.indexOf,
		n = {},
		o = n.toString,
		v = n.hasOwnProperty,
		a = v.toString,
		l = a.call(Object),
		y = {},
		m = function(e) {
			return "function" == typeof e && "number" != typeof e.nodeType
		},
		x = function(e) {
			return null != e && e === e.window
		},
		c = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0
		};

	function b(e, t, n) {
		var r, i, o = (n = n || E).createElement("script");
		if (o.text = e, t)
			for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
		n.head.appendChild(o).parentNode.removeChild(o)
	}

	function w(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
	}
	var f = "3.4.1",
		k = function(e, t) {
			return new k.fn.init(e, t)
		},
		p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	function d(e) {
		var t = !!e && "length" in e && e.length,
			n = w(e);
		return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}
	k.fn = k.prototype = {
		jquery: f,
		constructor: k,
		length: 0,
		toArray: function() {
			return s.call(this)
		},
		get: function(e) {
			return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function(e) {
			var t = k.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function(e) {
			return k.each(this, e)
		},
		map: function(n) {
			return this.pushStack(k.map(this, function(e, t) {
				return n.call(e, t, e)
			}))
		},
		slice: function() {
			return this.pushStack(s.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= n && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: u,
		sort: t.sort,
		splice: t.splice
	}, k.extend = k.fn.extend = function() {
		var e, t, n, r, i, o, a = arguments[0] || {},
			s = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s ===
			u && (a = this, s--); s < u; s++)
			if (null != (e = arguments[s]))
				for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ?
					(n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) :
					void 0 !== r && (a[t] = r));
		return a
	}, k.extend({
		expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isPlainObject: function(e) {
			var t, n;
			return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t,
				"constructor") && t.constructor) && a.call(n) === l)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		globalEval: function(e, t) {
			b(e, {
				nonce: t && t.nonce
			})
		},
		each: function(e, t) {
			var n, r = 0;
			if (d(e)) {
				for (n = e.length; r < n; r++)
					if (!1 === t.call(e[r], r, e[r])) break
			} else
				for (r in e)
					if (!1 === t.call(e[r], r, e[r])) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(p, "")
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : i.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
			return r
		},
		map: function(e, t, n) {
			var r, i, o = 0,
				a = [];
			if (d(e))
				for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
			else
				for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
			return g.apply([], a)
		},
		guid: 1,
		support: y
	}), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each(
		"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
		function(e, t) {
			n["[object " + t + "]"] = t.toLowerCase()
		});
	var h = function(n) {
		var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date,
			m = n.document,
			S = 0,
			r = 0,
			p = ue(),
			x = ue(),
			N = ue(),
			A = ue(),
			D = function(e, t) {
				return e === t && (l = !0), 0
			},
			j = {}.hasOwnProperty,
			t = [],
			q = t.pop,
			L = t.push,
			H = t.push,
			O = t.slice,
			P = function(e, t) {
				for (var n = 0, r = e.length; n < r; n++)
					if (e[n] === t) return n;
				return -1
			},
			R =
			"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			M = "[\\x20\\t\\r\\n\\f]",
			I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M +
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
			$ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W +
			")*)|.*)\\)|)",
			F = new RegExp(M + "+", "g"),
			B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
			_ = new RegExp("^" + M + "*," + M + "*"),
			z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
			U = new RegExp(M + "|>"),
			X = new RegExp($),
			V = new RegExp("^" + I + "$"),
			G = {
				ID: new RegExp("^#(" + I + ")"),
				CLASS: new RegExp("^\\.(" + I + ")"),
				TAG: new RegExp("^(" + I + "|[*])"),
				ATTR: new RegExp("^" + W),
				PSEUDO: new RegExp("^" + $),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" +
					M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + R + ")$", "i"),
				needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" +
					M + "*\\)|)(?=[^-]|$)", "i")
			},
			Y = /HTML$/i,
			Q = /^(?:input|select|textarea|button)$/i,
			J = /^h\d$/i,
			K = /^[^{]+\{\s*\[native \w/,
			Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ee = /[+~]/,
			te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
			ne = function(e, t, n) {
				var r = "0x" + t - 65536;
				return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r |
					56320)
			},
			re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			ie = function(e, t) {
				return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" +
					e
			},
			oe = function() {
				T()
			},
			ae = be(function(e) {
				return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType
		} catch (e) {
			H = {
				apply: t.length ? function(e, t) {
					L.apply(e, O.call(t))
				} : function(e, t) {
					var n = e.length,
						r = 0;
					while (e[n++] = t[r++]);
					e.length = n - 1
				}
			}
		}

		function se(t, e, n, r) {
			var i, o, a, s, u, l, c, f = e && e.ownerDocument,
				p = e ? e.nodeType : 9;
			if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
			if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
				if (11 !== p && (u = Z.exec(t)))
					if (i = u[1]) {
						if (9 === p) {
							if (!(a = e.getElementById(i))) return n;
							if (a.id === i) return n.push(a), n
						} else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
					} else {
						if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
						if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(
							i)), n
					} if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
					if (c = t, f = e, 1 === p && U.test(t)) {
						(s = e.getAttribute("id")) ? s = s.replace(re, ie): e.setAttribute("id", s = k), o = (l = h(t)).length;
						while (o--) l[o] = "#" + s + " " + xe(l[o]);
						c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e
					}
					try {
						return H.apply(n, f.querySelectorAll(c)), n
					} catch (e) {
						A(t, !0)
					} finally {
						s === k && e.removeAttribute("id")
					}
				}
			}
			return g(t.replace(B, "$1"), e, n, r)
		}

		function ue() {
			var r = [];
			return function e(t, n) {
				return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
			}
		}

		function le(e) {
			return e[k] = !0, e
		}

		function ce(e) {
			var t = C.createElement("fieldset");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function fe(e, t) {
			var n = e.split("|"),
				r = n.length;
			while (r--) b.attrHandle[n[r]] = t
		}

		function pe(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (r) return r;
			if (n)
				while (n = n.nextSibling)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function de(t) {
			return function(e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}

		function he(n) {
			return function(e) {
				var t = e.nodeName.toLowerCase();
				return ("input" === t || "button" === t) && e.type === n
			}
		}

		function ge(t) {
			return function(e) {
				return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled ===
					t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in
					e && e.disabled === t
			}
		}

		function ve(a) {
			return le(function(o) {
				return o = +o, le(function(e, t) {
					var n, r = a([], e.length, o),
						i = r.length;
					while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
				})
			})
		}

		function ye(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}
		for (e in d = se.support = {}, i = se.isXML = function(e) {
				var t = e.namespaceURI,
					n = (e.ownerDocument || e).documentElement;
				return !Y.test(t || n && n.nodeName || "HTML")
			}, T = se.setDocument = function(e) {
				var t, n, r = e ? e.ownerDocument || e : m;
				return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n =
						C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent &&
						n.attachEvent("onunload", oe)), d.attributes = ce(function(e) {
						return e.className = "i", !e.getAttribute("className")
					}), d.getElementsByTagName = ce(function(e) {
						return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
					}), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
						return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length
					}), d.getById ? (b.filter.ID = function(e) {
						var t = e.replace(te, ne);
						return function(e) {
							return e.getAttribute("id") === t
						}
					}, b.find.ID = function(e, t) {
						if ("undefined" != typeof t.getElementById && E) {
							var n = t.getElementById(e);
							return n ? [n] : []
						}
					}) : (b.filter.ID = function(e) {
						var n = e.replace(te, ne);
						return function(e) {
							var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
							return t && t.value === n
						}
					}, b.find.ID = function(e, t) {
						if ("undefined" != typeof t.getElementById && E) {
							var n, r, i, o = t.getElementById(e);
							if (o) {
								if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
								i = t.getElementsByName(e), r = 0;
								while (o = i[r++])
									if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
							}
							return []
						}
					}), b.find.TAG = d.getElementsByTagName ? function(e, t) {
						return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) :
							void 0
					} : function(e, t) {
						var n, r = [],
							i = 0,
							o = t.getElementsByTagName(e);
						if ("*" === e) {
							while (n = o[i++]) 1 === n.nodeType && r.push(n);
							return r
						}
						return o
					}, b.find.CLASS = d.getElementsByClassName && function(e, t) {
						if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
					}, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
						a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k +
							"-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll(
								"[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length ||
							v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
							e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length ||
							v.push(".#.+[+~]")
					}), ce(function(e) {
						e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
						var t = C.createElement("input");
						t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]")
							.length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(
								":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length &&
							v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
					})), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector ||
						a.msMatchesSelector)) && ce(function(e) {
						d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $)
					}), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition),
					y = t || K.test(a.contains) ? function(e, t) {
						var n = 9 === e.nodeType ? e.documentElement : e,
							r = t && t.parentNode;
						return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 &
							e.compareDocumentPosition(r)))
					} : function(e, t) {
						if (t)
							while (t = t.parentNode)
								if (t === e) return !0;
						return !1
					}, D = t ? function(e, t) {
						if (e === t) return l = !0, 0;
						var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
							!d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t ===
							C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
					} : function(e, t) {
						if (e === t) return l = !0, 0;
						var n, r = 0,
							i = e.parentNode,
							o = t.parentNode,
							a = [e],
							s = [t];
						if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
						if (i === o) return pe(e, t);
						n = e;
						while (n = n.parentNode) a.unshift(n);
						n = t;
						while (n = n.parentNode) s.unshift(n);
						while (a[r] === s[r]) r++;
						return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
					}), C
			}, se.matches = function(e, t) {
				return se(e, null, null, t)
			}, se.matchesSelector = function(e, t) {
				if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !
						v.test(t))) try {
					var n = c.call(e, t);
					if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch (e) {
					A(t, !0)
				}
				return 0 < se(t, C, null, [e]).length
			}, se.contains = function(e, t) {
				return (e.ownerDocument || e) !== C && T(e), y(e, t)
			}, se.attr = function(e, t) {
				(e.ownerDocument || e) !== C && T(e);
				var n = b.attrHandle[t.toLowerCase()],
					r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
				return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r
					.value : null
			}, se.escape = function(e) {
				return (e + "").replace(re, ie)
			}, se.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, se.uniqueSort = function(e) {
				var t, n = [],
					r = 0,
					i = 0;
				if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
					while (t = e[i++]) t === e[i] && (r = n.push(i));
					while (r--) e.splice(n[r], 1)
				}
				return u = null, e
			}, o = se.getText = function(e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else
					while (t = e[r++]) n += o(t);
				return n
			}, (b = se.selectors = {
				cacheLength: 50,
				createPseudo: le,
				match: G,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[
							3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] +
								(e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] &&
							se.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t =
							n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(te, ne).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = p[e + " "];
						return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function(e) {
							return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute(
								"class") || "")
						})
					},
					ATTR: function(n, r, i) {
						return function(e) {
							var t = se.attr(e, n);
							return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i &&
								0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i :
								"~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length +
									1) === i + "-"))
						}
					},
					CHILD: function(h, e, t, g, v) {
						var y = "nth" !== h.slice(0, 3),
							m = "last" !== h.slice(-4),
							x = "of-type" === e;
						return 1 === g && 0 === v ? function(e) {
							return !!e.parentNode
						} : function(e, t, n) {
							var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
								c = e.parentNode,
								f = x && e.nodeName.toLowerCase(),
								p = !n && !x,
								d = !1;
							if (c) {
								if (y) {
									while (l) {
										a = e;
										while (a = a[l])
											if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
										u = l = "only" === h && !u && "nextSibling"
									}
									return !0
								}
								if (u = [m ? c.firstChild : c.lastChild], m && p) {
									d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] ===
										S && r[1]) && r[2], a = s && c.childNodes[s];
									while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
										if (1 === a.nodeType && ++d && a === e) {
											i[h] = [S, s, d];
											break
										}
								} else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] ||
										[])[0] === S && r[1]), !1 === d)
									while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
										if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[
												a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
								return (d -= v) === g || d % g == 0 && 0 <= d / g
							}
						}
					},
					PSEUDO: function(e, o) {
						var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
						return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(
							function(e, t) {
								var n, r = a(e, o),
									i = r.length;
								while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
							}) : function(e) {
							return a(e, 0, t)
						}) : a
					}
				},
				pseudos: {
					not: le(function(e) {
						var r = [],
							i = [],
							s = f(e.replace(B, "$1"));
						return s[k] ? le(function(e, t, n, r) {
							var i, o = s(e, null, r, []),
								a = e.length;
							while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
						}) : function(e, t, n) {
							return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
						}
					}),
					has: le(function(t) {
						return function(e) {
							return 0 < se(t, e).length
						}
					}),
					contains: le(function(t) {
						return t = t.replace(te, ne),
							function(e) {
								return -1 < (e.textContent || o(e)).indexOf(t)
							}
					}),
					lang: le(function(n) {
						return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
							function(e) {
								var t;
								do {
									if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) ===
										n || 0 === t.indexOf(n + "-")
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
					}),
					target: function(e) {
						var t = n.location && n.location.hash;
						return t && t.slice(1) === e.id
					},
					root: function(e) {
						return e === a
					},
					focus: function(e) {
						return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: ge(!1),
					disabled: ge(!0),
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !b.pseudos.empty(e)
					},
					header: function(e) {
						return J.test(e.nodeName)
					},
					input: function(e) {
						return Q.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) ||
							"text" === t.toLowerCase())
					},
					first: ve(function() {
						return [0]
					}),
					last: ve(function(e, t) {
						return [t - 1]
					}),
					eq: ve(function(e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: ve(function(e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e
					}),
					odd: ve(function(e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e
					}),
					lt: ve(function(e, t, n) {
						for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
						return e
					}),
					gt: ve(function(e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
						return e
					})
				}
			}).pseudos.nth = b.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) b.pseudos[e] = de(e);
		for (e in {
				submit: !0,
				reset: !0
			}) b.pseudos[e] = he(e);

		function me() {}

		function xe(e) {
			for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
			return r
		}

		function be(s, e, t) {
			var u = e.dir,
				l = e.next,
				c = l || u,
				f = t && "parentNode" === c,
				p = r++;
			return e.first ? function(e, t, n) {
				while (e = e[u])
					if (1 === e.nodeType || f) return s(e, t, n);
				return !1
			} : function(e, t, n) {
				var r, i, o, a = [S, p];
				if (n) {
					while (e = e[u])
						if ((1 === e.nodeType || f) && s(e, t, n)) return !0
				} else
					while (e = e[u])
						if (1 === e.nodeType || f)
							if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e =
								e[u] || e;
							else {
								if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
								if ((i[c] = a)[2] = s(e, t, n)) return !0
							} return !1
			}
		}

		function we(i) {
			return 1 < i.length ? function(e, t, n) {
				var r = i.length;
				while (r--)
					if (!i[r](e, t, n)) return !1;
				return !0
			} : i[0]
		}

		function Te(e, t, n, r, i) {
			for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o),
				l && t.push(s)));
			return a
		}

		function Ce(d, h, g, v, y, e) {
			return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function(e, t, n, r) {
				var i, o, a, s = [],
					u = [],
					l = t.length,
					c = e || function(e, t, n) {
						for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
						return n
					}(h || "*", n.nodeType ? [n] : n, []),
					f = !d || !e && h ? c : Te(c, s, d, n, r),
					p = g ? y || (e ? d : l || v) ? [] : t : f;
				if (g && g(f, p, n, r), v) {
					i = Te(p, u), v(i, [], n, r), o = i.length;
					while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
				}
				if (e) {
					if (y || d) {
						if (y) {
							i = [], o = p.length;
							while (o--)(a = p[o]) && i.push(f[o] = a);
							y(null, p = [], i, r)
						}
						o = p.length;
						while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
					}
				} else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
			})
		}

		function Ee(e) {
			for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(
					function(e) {
						return e === i
					}, a, !0), l = be(function(e) {
					return -1 < P(i, e)
				}, a, !0), c = [function(e, t, n) {
					var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
					return i = null, r
				}]; s < r; s++)
				if (t = b.relative[e[s].type]) c = [be(we(c), t)];
				else {
					if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
						for (n = ++s; n < r; n++)
							if (b.relative[e[n].type]) break;
						return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
					}
					c.push(t)
				} return we(c)
		}
		return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
			var n, r, i, o, a, s, u, l = x[e + " "];
			if (l) return t ? 0 : l.slice(0);
			a = e, s = [], u = b.preFilter;
			while (a) {
				for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) &&
					(n = r.shift(), i.push({
						value: n,
						type: r[0].replace(B, " ")
					}), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
					value: n,
					type: o,
					matches: r
				}), a = a.slice(n.length));
				if (!n) break
			}
			return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
		}, f = se.compile = function(e, t) {
			var n, v, y, m, x, r, i = [],
				o = [],
				a = N[e + " "];
			if (!a) {
				t || (t = h(e)), n = t.length;
				while (n--)(a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
				(a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
					var o, a, s, u = 0,
						l = "0",
						c = e && [],
						f = [],
						p = w,
						d = e || x && b.find.TAG("*", i),
						h = S += null == p ? 1 : Math.random() || .1,
						g = d.length;
					for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
						if (x && o) {
							a = 0, t || o.ownerDocument === C || (T(o), n = !E);
							while (s = v[a++])
								if (s(o, t || C, n)) {
									r.push(o);
									break
								} i && (S = h)
						}
						m && ((o = !s && o) && u--, e && c.push(o))
					}
					if (u += l, m && l !== u) {
						a = 0;
						while (s = y[a++]) s(c, f, t, n);
						if (e) {
							if (0 < u)
								while (l--) c[l] || f[l] || (f[l] = q.call(r));
							f = Te(f)
						}
						H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
					}
					return i && (S = h, w = p), c
				}, m ? le(r) : r))).selector = e
			}
			return a
		}, g = se.select = function(e, t, n, r) {
			var i, o, a, s, u, l = "function" == typeof e && e,
				c = !r && h(e = l.selector || e);
			if (n = n || [], 1 === c.length) {
				if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1]
						.type]) {
					if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
					l && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				i = G.needsContext.test(e) ? 0 : o.length;
				while (i--) {
					if (a = o[i], b.relative[s = a.type]) break;
					if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
						if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
						break
					}
				}
			}
			return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
		}, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(
			e) {
			return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
		}), ce(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || fe("type|href|height|width", function(e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), d.attributes && ce(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute(
				"value")
		}) || fe("value", function(e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), ce(function(e) {
			return null == e.getAttribute("disabled")
		}) || fe(R, function(e, t, n) {
			var r;
			if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), se
	}(C);
	k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText,
		k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;
	var T = function(e, t, n) {
			var r = [],
				i = void 0 !== n;
			while ((e = e[t]) && 9 !== e.nodeType)
				if (1 === e.nodeType) {
					if (i && k(e).is(n)) break;
					r.push(e)
				} return r
		},
		S = function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		N = k.expr.match.needsContext;

	function A(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function j(e, n, r) {
		return m(n) ? k.grep(e, function(e, t) {
			return !!n.call(e, t, e) !== r
		}) : n.nodeType ? k.grep(e, function(e) {
			return e === n !== r
		}) : "string" != typeof n ? k.grep(e, function(e) {
			return -1 < i.call(n, e) !== r
		}) : k.filter(n, e, r)
	}
	k.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] :
			k.find.matches(e, k.grep(t, function(e) {
				return 1 === e.nodeType
			}))
	}, k.fn.extend({
		find: function(e) {
			var t, n, r = this.length,
				i = this;
			if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
				for (t = 0; t < r; t++)
					if (k.contains(i[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
			return 1 < r ? k.uniqueSort(n) : n
		},
		filter: function(e) {
			return this.pushStack(j(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(j(this, e || [], !0))
		},
		is: function(e) {
			return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length
		}
	});
	var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(k.fn.init = function(e, t, n) {
		var r, i;
		if (!e) return this;
		if (n = n || q, "string" == typeof e) {
			if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t)
				return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
			if (r[1]) {
				if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
					D.test(r[1]) && k.isPlainObject(t))
					for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
				return this
			}
			return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
		}
		return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(
			e, this)
	}).prototype = k.fn, q = k(E);
	var H = /^(?:parents|prev(?:Until|All))/,
		O = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function P(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType);
		return e
	}
	k.fn.extend({
		has: function(e) {
			var t = k(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; e < n; e++)
					if (k.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				a = "string" != typeof e && k(e);
			if (!N.test(e))
				for (; r < i; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
							o.push(n);
							break
						} return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0]
				.parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), k.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return T(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return T(e, "parentNode", n)
		},
		next: function(e) {
			return P(e, "nextSibling")
		},
		prev: function(e) {
			return P(e, "previousSibling")
		},
		nextAll: function(e) {
			return T(e, "nextSibling")
		},
		prevAll: function(e) {
			return T(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return T(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return T(e, "previousSibling", n)
		},
		siblings: function(e) {
			return S((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return S(e.firstChild)
		},
		contents: function(e) {
			return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e),
				k.merge([], e.childNodes))
		}
	}, function(r, i) {
		k.fn[r] = function(e, t) {
			var n = k.map(this, i, e);
			return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length &&
				(O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n)
		}
	});
	var R = /[^\x20\t\r\n\f]+/g;

	function M(e) {
		return e
	}

	function I(e) {
		throw e
	}

	function W(e, t, n, r) {
		var i;
		try {
			e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(
				r))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}
	k.Callbacks = function(r) {
		var e, n;
		r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function(e, t) {
			n[t] = !0
		}), n) : k.extend({}, r);
		var i, t, o, a, s = [],
			u = [],
			l = -1,
			c = function() {
				for (a = a || r.once, o = i = !0; u.length; l = -1) {
					t = u.shift();
					while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
				}
				r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
			},
			f = {
				add: function() {
					return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
						k.each(e, function(e, t) {
							m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
						})
					}(arguments), t && !i && c()), this
				},
				remove: function() {
					return k.each(arguments, function(e, t) {
						var n;
						while (-1 < (n = k.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
					}), this
				},
				has: function(e) {
					return e ? -1 < k.inArray(e, s) : 0 < s.length
				},
				empty: function() {
					return s && (s = []), this
				},
				disable: function() {
					return a = u = [], s = t = "", this
				},
				disabled: function() {
					return !s
				},
				lock: function() {
					return a = u = [], t || i || (s = t = ""), this
				},
				locked: function() {
					return !!a
				},
				fireWith: function(e, t) {
					return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!o
				}
			};
		return f
	}, k.extend({
		Deferred: function(e) {
			var o = [
					["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
					["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
				],
				i = "pending",
				a = {
					state: function() {
						return i
					},
					always: function() {
						return s.done(arguments).fail(arguments), this
					},
					"catch": function(e) {
						return a.then(null, e)
					},
					pipe: function() {
						var i = arguments;
						return k.Deferred(function(r) {
							k.each(o, function(e, t) {
								var n = m(i[t[4]]) && i[t[4]];
								s[t[1]](function() {
									var e = n && n.apply(this, arguments);
									e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"]
										(this, n ? [e] : arguments)
								})
							}), i = null
						}).promise()
					},
					then: function(t, n, r) {
						var u = 0;

						function l(i, o, a, s) {
							return function() {
								var n = this,
									r = arguments,
									e = function() {
										var e, t;
										if (!(i < u)) {
											if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
											t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s),
												l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !==
												M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
										}
									},
									t = s ? e : function() {
										try {
											e()
										} catch (e) {
											k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n =
												void 0, r = [e]), o.rejectWith(n, r))
										}
									};
								i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
							}
						}
						return k.Deferred(function(e) {
							o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e,
								m(n) ? n : I))
						}).promise()
					},
					promise: function(e) {
						return null != e ? k.extend(e, a) : a
					}
				},
				s = {};
			return k.each(o, function(e, t) {
				var n = t[2],
					r = t[5];
				a[t[1]] = n.add, r && n.add(function() {
						i = r
					}, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] =
					function() {
						return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
					}, s[t[0] + "With"] = n.fireWith
			}), a.promise(s), e && e.call(s, s), s
		},
		when: function(e) {
			var n = arguments.length,
				t = n,
				r = Array(t),
				i = s.call(arguments),
				o = k.Deferred(),
				a = function(t) {
					return function(e) {
						r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
					}
				};
			if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o
				.then();
			while (t--) W(i[t], a(t), o.reject);
			return o.promise()
		}
	});
	var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	k.Deferred.exceptionHook = function(e, t) {
		C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack,
			t)
	}, k.readyException = function(e) {
		C.setTimeout(function() {
			throw e
		})
	};
	var F = k.Deferred();

	function B() {
		E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready()
	}
	k.fn.ready = function(e) {
			return F.then(e)["catch"](function(e) {
				k.readyException(e)
			}), this
		}, k.extend({
			isReady: !1,
			readyWait: 1,
			ready: function(e) {
				(!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
			}
		}), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ?
		C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
	var _ = function(e, t, n, r, i, o, a) {
			var s = 0,
				u = e.length,
				l = null == n;
			if ("object" === w(n))
				for (s in i = !0, n) _(e, t, s, n[s], !0, o, a);
			else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t,
					n) {
					return l.call(k(e), n)
				})), t))
				for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
		},
		z = /^-ms-/,
		U = /-([a-z])/g;

	function X(e, t) {
		return t.toUpperCase()
	}

	function V(e) {
		return e.replace(z, "ms-").replace(U, X)
	}
	var G = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	};

	function Y() {
		this.expando = k.expando + Y.uid++
	}
	Y.uid = 1, Y.prototype = {
		cache: function(e) {
			var t = e[this.expando];
			return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var r, i = this.cache(e);
			if ("string" == typeof t) i[V(t)] = n;
			else
				for (r in t) i[V(r)] = t[r];
			return i
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
		},
		access: function(e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !==
				n ? n : t)
		},
		remove: function(e, t) {
			var n, r = e[this.expando];
			if (void 0 !== r) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
					while (n--) delete r[t[n]]
				}(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			var t = e[this.expando];
			return void 0 !== t && !k.isEmptyObject(t)
		}
	};
	var Q = new Y,
		J = new Y,
		K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Z = /[A-Z]/g;

	function ee(e, t, n) {
		var r, i;
		if (void 0 === n && 1 === e.nodeType)
			if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
				try {
					n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) :
						i)
				} catch (e) {}
				J.set(e, t, n)
			} else n = void 0;
		return n
	}
	k.extend({
		hasData: function(e) {
			return J.hasData(e) || Q.hasData(e)
		},
		data: function(e, t, n) {
			return J.access(e, t, n)
		},
		removeData: function(e, t) {
			J.remove(e, t)
		},
		_data: function(e, t, n) {
			return Q.access(e, t, n)
		},
		_removeData: function(e, t) {
			Q.remove(e, t)
		}
	}), k.fn.extend({
		data: function(n, e) {
			var t, r, i, o = this[0],
				a = o && o.attributes;
			if (void 0 === n) {
				if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
					t = a.length;
					while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
					Q.set(o, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof n ? this.each(function() {
				J.set(this, n)
			}) : _(this, function(e) {
				var t;
				if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
				this.each(function() {
					J.set(this, n, e)
				})
			}, null, e, 1 < arguments.length, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				J.remove(this, e)
			})
		}
	}), k.extend({
		queue: function(e, t, n) {
			var r;
			if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(
				n)) : r.push(n)), r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = k.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = k._queueHooks(e, t);
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e,
				function() {
					k.dequeue(e, t)
				}, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return Q.get(e, n) || Q.access(e, n, {
				empty: k.Callbacks("once memory").add(function() {
					Q.remove(e, [t + "queue", n])
				})
			})
		}
	}), k.fn.extend({
		queue: function(t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 ===
				n ? this : this.each(function() {
					var e = k.queue(this, t, n);
					k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
				})
		},
		dequeue: function(e) {
			return this.each(function() {
				k.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = k.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--r || i.resolveWith(o, [o])
				};
			"string" != typeof e && (t = e, e = void 0), e = e || "fx";
			while (a--)(n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
			return s(), i.promise(t)
		}
	});
	var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
		re = ["Top", "Right", "Bottom", "Left"],
		ie = E.documentElement,
		oe = function(e) {
			return k.contains(e.ownerDocument, e)
		},
		ae = {
			composed: !0
		};
	ie.getRootNode && (oe = function(e) {
		return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
	});
	var se = function(e, t) {
			return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display")
		},
		ue = function(e, t, n, r) {
			var i, o, a = {};
			for (o in t) a[o] = e.style[o], e.style[o] = t[o];
			for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
			return i
		};

	function le(e, t, n, r) {
		var i, o, a = 20,
			s = r ? function() {
				return r.cur()
			} : function() {
				return k.css(e, t, "")
			},
			u = s(),
			l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
			c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
		if (c && c[3] !== l) {
			u /= 2, l = l || c[3], c = +u || 1;
			while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
			c *= 2, k.style(e, t, c + l), n = n || []
		}
		return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)),
			i
	}
	var ce = {};

	function fe(e, t) {
		for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ?
			("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display &&
				se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(
					a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[
					s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
		for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
		return e
	}
	k.fn.extend({
		show: function() {
			return fe(this, !0)
		},
		hide: function() {
			return fe(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				se(this) ? k(this).show() : k(this).hide()
			})
		}
	});
	var pe = /^(?:checkbox|radio)$/i,
		de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		he = /^$|^module$|\/(?:java|ecma)script/i,
		ge = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};

	function ve(e, t) {
		var n;
		return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e
			.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n
	}

	function ye(e, t) {
		for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
	}
	ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
	var me, xe, be = /<|&#?\w+;/;

	function we(e, t, n, r, i) {
		for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
			if ((o = e[d]) || 0 === o)
				if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
				else if (be.test(o)) {
			a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default,
				a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];
			while (c--) a = a.lastChild;
			k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
		} else p.push(t.createTextNode(o));
		f.textContent = "", d = 0;
		while (o = p[d++])
			if (r && -1 < k.inArray(o, r)) i && i.push(o);
			else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
			c = 0;
			while (o = a[c++]) he.test(o.type || "") && n.push(o)
		}
		return f
	}
	me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute(
			"type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone =
		me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(
			!0).lastChild.defaultValue;
	var Te = /^key/,
		Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Ee = /^([^.]*)(?:\.(.+)|)/;

	function ke() {
		return !0
	}

	function Se() {
		return !1
	}

	function Ne(e, t) {
		return e === function() {
			try {
				return E.activeElement
			} catch (e) {}
		}() == ("focus" === t)
	}

	function Ae(e, t, n, r, i, o) {
		var a, s;
		if ("object" == typeof t) {
			for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o);
			return e
		}
		if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i =
				r, r = n, n = void 0)), !1 === i) i = Se;
		else if (!i) return e;
		return 1 === o && (a = i, (i = function(e) {
			return k().off(e), a.apply(this, arguments)
		}).guid = a.guid || (a.guid = k.guid++)), e.each(function() {
			k.event.add(this, t, i, r, n)
		})
	}

	function De(e, i, o) {
		o ? (Q.set(e, i, !1), k.event.add(e, i, {
			namespace: !1,
			handler: function(e) {
				var t, n, r = Q.get(this, i);
				if (1 & e.isTrigger && this[i]) {
					if (r.length)(k.event.special[i] || {}).delegateType && e.stopPropagation();
					else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ?
						Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
				} else r.length && (Q.set(this, i, {
					value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
				}), e.stopImmediatePropagation())
			}
		})) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
	}
	k.event = {
		global: {},
		add: function(t, e, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t);
			if (v) {
				n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++),
					(u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(e) {
						return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
					}), l = (e = (e || "").match(R) || [""]).length;
				while (l--) d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[
					d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
					type: d,
					origType: g,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && k.expr.match.needsContext.test(i),
					namespace: h.join(".")
				}, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener &&
					t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(
					p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0)
			}
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
			if (v && (u = v.events)) {
				l = (t = (t || "").match(R) || [""]).length;
				while (l--)
					if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
						f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp(
							"(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
						while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !==
							c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove
								.call(e, c));
						a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle),
							delete u[d])
					} else
						for (d in u) k.event.remove(e, d + t[l], n, r, !0);
				k.isEmptyObject(u) && Q.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			var t, n, r, i, o, a, s = k.event.fix(e),
				u = new Array(arguments.length),
				l = (Q.get(this, "events") || {})[s.type] || [],
				c = k.event.special[s.type] || {};
			for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
			if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
				a = k.event.handlers.call(this, s, l), t = 0;
				while ((i = a[t++]) && !s.isPropagationStopped()) {
					s.currentTarget = i.elem, n = 0;
					while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace
						.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle ||
							o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()))
				}
				return c.postDispatch && c.postDispatch.call(this, s), s.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, a, s = [],
				u = t.delegateCount,
				l = e.target;
			if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
						for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ?
							-1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
						o.length && s.push({
							elem: l,
							handlers: o
						})
					} return l = this, u < t.length && s.push({
				elem: l,
				handlers: t.slice(u)
			}), s
		},
		addProp: function(t, e) {
			Object.defineProperty(k.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: m(e) ? function() {
					if (this.originalEvent) return e(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[t]
				},
				set: function(e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e
					})
				}
			})
		},
		fix: function(e) {
			return e[k.expando] ? e : new k.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				setup: function(e) {
					var t = this || e;
					return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1
				},
				trigger: function(e) {
					var t = this || e;
					return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0
				},
				_default: function(e) {
					var t = e.target;
					return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, k.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, k.Event = function(e, t) {
		if (!(this instanceof k.Event)) return new k.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 ===
				e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target
				.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type =
			e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
	}, k.Event.prototype = {
		constructor: k.Event,
		isDefaultPrevented: Se,
		isPropagationStopped: Se,
		isImmediatePropagationStopped: Se,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, k.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		"char": !0,
		code: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function(e) {
			var t = e.button;
			return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !==
				t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, k.event.addProp), k.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		k.event.special[e] = {
			setup: function() {
				return De(this, e, Ne), !1
			},
			trigger: function() {
				return De(this, e), !0
			},
			delegateType: t
		}
	}), k.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, i) {
		k.event.special[e] = {
			delegateType: i,
			bindType: i,
			handle: function(e) {
				var t, n = e.relatedTarget,
					r = e.handleObj;
				return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments),
					e.type = i), t
			}
		}
	}), k.fn.extend({
		on: function(e, t, n, r) {
			return Ae(this, e, t, n, r)
		},
		one: function(e, t, n, r) {
			return Ae(this, e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType +
				"." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
				k.event.remove(this, e, n, t)
			})
		}
	});
	var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		qe = /<script|<style|<link/i,
		Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
		He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function Oe(e, t) {
		return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
	}

	function Pe(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function Re(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}

	function Me(e, t) {
		var n, r, i, o, a, s, u, l;
		if (1 === t.nodeType) {
			if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events))
				for (i in delete a.handle, a.events = {}, l)
					for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
			J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u))
		}
	}

	function Ie(n, r, i, o) {
		r = g.apply([], r);
		var e, t, a, s, u, l, c = 0,
			f = n.length,
			p = f - 1,
			d = r[0],
			h = m(d);
		if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function(e) {
			var t = n.eq(e);
			h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o)
		});
		if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
			for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(
				a, ve(u, "script"))), i.call(n[c], u, c);
			if (s)
				for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Q.access(
					u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule &&
					k._evalUrl(u.src, {
						nonce: u.nonce || u.getAttribute("nonce")
					}) : b(u.textContent.replace(He, ""), u, l))
		}
		return n
	}

	function We(e, t, n) {
		for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ve(r)),
			r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
		return e
	}
	k.extend({
		htmlPrefilter: function(e) {
			return e.replace(je, "<$1></$2>")
		},
		clone: function(e, t, n) {
			var r, i, o, a, s, u, l, c = e.cloneNode(!0),
				f = oe(e);
			if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
				for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName
					.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue =
					s.defaultValue);
			if (t)
				if (n)
					for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]);
				else Me(e, c);
			return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
		},
		cleanData: function(e) {
			for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
				if (G(n)) {
					if (t = n[Q.expando]) {
						if (t.events)
							for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
						n[Q.expando] = void 0
					}
					n[J.expando] && (n[J.expando] = void 0)
				}
		}
	}), k.fn.extend({
		detach: function(e) {
			return We(this, e, !0)
		},
		remove: function(e) {
			return We(this, e)
		},
		text: function(e) {
			return _(this, function(e) {
				return void 0 === e ? k.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return Ie(this, arguments, function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
			})
		},
		prepend: function() {
			return Ie(this, arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Oe(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return Ie(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return Ie(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return k.clone(this, e, t)
			})
		},
		html: function(e) {
			return _(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = k.htmlPrefilter(e);
					try {
						for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var n = [];
			return Ie(this, arguments, function(e) {
				var t = this.parentNode;
				k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this))
			}, n)
		}
	}), k.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, a) {
		k.fn[e] = function(e) {
			for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[
				a](t), u.apply(n, t.get());
			return this.pushStack(n)
		}
	});
	var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
		Fe = function(e) {
			var t = e.ownerDocument.defaultView;
			return t && t.opener || (t = C), t.getComputedStyle(e)
		},
		Be = new RegExp(re.join("|"), "i");

	function _e(e, t, n) {
		var r, i, o, a, s = e.style;
		return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() &&
			$e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a =
				n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
	}

	function ze(e, t) {
		return {
			get: function() {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}! function() {
		function e() {
			if (u) {
				s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText =
					"position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
					ie.appendChild(s).appendChild(u);
				var e = C.getComputedStyle(u);
				n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width),
					u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null
			}
		}

		function t(e) {
			return Math.round(parseFloat(e))
		}
		var n, r, i, o, a, s = E.createElement("div"),
			u = E.createElement("div");
		u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle =
			"content-box" === u.style.backgroundClip, k.extend(y, {
				boxSizingReliable: function() {
					return e(), r
				},
				pixelBoxStyles: function() {
					return e(), o
				},
				pixelPosition: function() {
					return e(), n
				},
				reliableMarginLeft: function() {
					return e(), a
				},
				scrollboxSize: function() {
					return e(), i
				}
			}))
	}();
	var Ue = ["Webkit", "Moz", "ms"],
		Xe = E.createElement("div").style,
		Ve = {};

	function Ge(e) {
		var t = k.cssProps[e] || Ve[e];
		return t || (e in Xe ? e : Ve[e] = function(e) {
			var t = e[0].toUpperCase() + e.slice(1),
				n = Ue.length;
			while (n--)
				if ((e = Ue[n] + t) in Xe) return e
		}(e) || e)
	}
	var Ye = /^(none|table(?!-c[ea]).+)/,
		Qe = /^--/,
		Je = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ke = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function Ze(e, t, n) {
		var r = ne.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
	}

	function et(e, t, n, r, i, o) {
		var a = "width" === t ? 1 : 0,
			s = 0,
			u = 0;
		if (n === (r ? "border" : "content")) return 0;
		for (; a < 4; a += 2) "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e,
			"padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e,
			"padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e,
			"border" + re[a] + "Width", !0, i));
		return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) ||
			0), u
	}

	function tt(e, t, n) {
		var r = Fe(e),
			i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
			o = i,
			a = _e(e, t, r),
			s = "offset" + t[0].toUpperCase() + t.slice(1);
		if ($e.test(a)) {
			if (!n) return a;
			a = "auto"
		}
		return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) &&
			e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a =
				parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
	}

	function nt(e, t, n, r, i) {
		return new nt.prototype.init(e, t, n, r, i)
	}
	k.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = _e(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, a, s = V(t),
					u = Qe.test(t),
					l = e.style;
				if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i =
					a.get(e, !1, r)) ? i : l[t];
				"string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n &&
					("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !==
						t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(
							t, n) : l[t] = n))
			}
		},
		css: function(e, t, n, r) {
			var i, o, a, s = V(t);
			return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
				void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i),
					!0 === n || isFinite(o) ? o || 0 : i) : i
		}
	}), k.each(["height", "width"], function(e, u) {
		k.cssHooks[u] = {
			get: function(e, t, n) {
				if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ?
					tt(e, u, n) : ue(e, Je, function() {
						return tt(e, u, n)
					})
			},
			set: function(e, t, n) {
				var r, i = Fe(e),
					o = !y.scrollboxSize() && "absolute" === i.position,
					a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
					s = n ? et(e, u, n, a, i) : 0;
				return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u,
						"border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)),
					Ze(0, t, s)
			}
		}
	}), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) {
		if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
			marginLeft: 0
		}, function() {
			return e.getBoundingClientRect().left
		})) + "px"
	}), k.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(i, o) {
		k.cssHooks[i + o] = {
			expand: function(e) {
				for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] ||
					r[t - 2] || r[0];
				return n
			}
		}, "margin" !== i && (k.cssHooks[i + o].set = Ze)
	}), k.fn.extend({
		css: function(e, t) {
			return _(this, function(e, t, n) {
				var r, i, o = {},
					a = 0;
				if (Array.isArray(t)) {
					for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
					return o
				}
				return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
			}, e, t, 1 < arguments.length)
		}
	}), ((k.Tween = nt).prototype = {
		constructor: nt,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now =
				this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = nt.propHooks[this.prop];
			return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = nt.propHooks[this.prop];
			return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options
					.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options
				.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
		}
	}).init.prototype = nt.prototype, (nt.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t =
					k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function(e) {
				k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[
					Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}).scrollTop = nt.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, k.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, k.fx = nt.prototype.init, k.fx.step = {};
	var rt, it, ot, at, st = /^(?:toggle|show|hide)$/,
		ut = /queueHooks$/;

	function lt() {
		it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k
			.fx.tick())
	}

	function ct() {
		return C.setTimeout(function() {
			rt = void 0
		}), rt = Date.now()
	}

	function ft(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function pt(e, t, n) {
		for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function dt(o, e, t) {
		var n, a, r = 0,
			i = dt.prefilters.length,
			s = k.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if (a) return !1;
				for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i =
						l.tweens.length; r < i; r++) l.tweens[r].run(n);
				return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
			},
			l = s.promise({
				elem: o,
				props: k.extend({}, e),
				opts: k.extend(!0, {
					specialEasing: {},
					easing: k.easing._default
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: rt || ct(),
				duration: t.duration,
				tweens: [],
				createTween: function(e, t) {
					var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
					return l.tweens.push(n), n
				},
				stop: function(e) {
					var t = 0,
						n = e ? l.tweens.length : 0;
					if (a) return this;
					for (a = !0; t < n; t++) l.tweens[t].run(1);
					return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
				}
			}),
			c = l.props;
		for (! function(e, t) {
				var n, r, i, o, a;
				for (n in e)
					if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]),
						(a = k.cssHooks[r]) && "expand" in a)
						for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
					else t[r] = i
			}(c, l.opts.specialEasing); r < i; r++)
			if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop
				.bind(n)), n;
		return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts
			.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
			elem: o,
			anim: l,
			queue: l.opts.queue
		})), l
	}
	k.Animation = k.extend(dt, {
			tweeners: {
				"*": [function(e, t) {
					var n = this.createTween(e, t);
					return le(n.elem, e, ne.exec(t), n), n
				}]
			},
			tweener: function(e, t) {
				m(e) ? (t = e, e = ["*"]) : e = e.match(R);
				for (var n, r = 0, i = e.length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(
					t)
			},
			prefilters: [function(e, t, n) {
				var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
					p = this,
					d = {},
					h = e.style,
					g = e.nodeType && se(e),
					v = Q.get(e, "fxshow");
				for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty
						.fire = function() {
							a.unqueued || s()
						}), a.unqueued++, p.always(function() {
						p.always(function() {
							a.unqueued--, k.queue(e, "fx").length || a.empty.fire()
						})
					})), t)
					if (i = t[r], st.test(i)) {
						if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
							if ("show" !== i || !v || void 0 === v[r]) continue;
							g = !0
						}
						d[r] = v && v[r] || k.style(e, r)
					} if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
					for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) &&
							(l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display ||
								l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" ===
							k.css(e, "float") && (u || (p.done(function() {
								h.display = l
							}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h
							.overflow = "hidden", p.always(function() {
								h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
							})), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
						display: l
					}), o && (v.hidden = !g), g && fe([e], !0), p.done(function() {
						for (r in g || fe([e]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r])
					})), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
			}],
			prefilter: function(e, t) {
				t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
			}
		}), k.speed = function(e, t, n) {
			var r = e && "object" == typeof e ? k.extend({}, e) : {
				complete: n || !n && t || m(e) && e,
				duration: e,
				easing: n && t || t && !m(t) && t
			};
			return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[
					r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old =
				r.complete, r.complete = function() {
					m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
				}, r
		}, k.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(se).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function(t, e, n, r) {
				var i = k.isEmptyObject(t),
					o = k.speed(e, n, r),
					a = function() {
						var e = dt(this, k.extend({}, t), o);
						(i || Q.get(this, "finish")) && e.stop(!0)
					};
				return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function(i, e, o) {
				var a = function(e) {
					var t = e.stop;
					delete e.stop, t(o)
				};
				return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(
					function() {
						var e = !0,
							t = null != i && i + "queueHooks",
							n = k.timers,
							r = Q.get(this);
						if (t) r[t] && r[t].stop && a(r[t]);
						else
							for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
						for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n
							.splice(t, 1));
						!e && o || k.dequeue(this, i)
					})
			},
			finish: function(a) {
				return !1 !== a && (a = a || "fx"), this.each(function() {
					var e, t = Q.get(this),
						n = t[a + "queue"],
						r = t[a + "queueHooks"],
						i = k.timers,
						o = n ? n.length : 0;
					for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem ===
						this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
					for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
					delete t.finish
				})
			}
		}), k.each(["toggle", "show", "hide"], function(e, r) {
			var i = k.fn[r];
			k.fn[r] = function(e, t, n) {
				return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n)
			}
		}), k.each({
			slideDown: ft("show"),
			slideUp: ft("hide"),
			slideToggle: ft("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, r) {
			k.fn[e] = function(e, t, n) {
				return this.animate(r, e, t, n)
			}
		}), k.timers = [], k.fx.tick = function() {
			var e, t = 0,
				n = k.timers;
			for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
			n.length || k.fx.stop(), rt = void 0
		}, k.fx.timer = function(e) {
			k.timers.push(e), k.fx.start()
		}, k.fx.interval = 13, k.fx.start = function() {
			it || (it = !0, lt())
		}, k.fx.stop = function() {
			it = null
		}, k.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, k.fn.delay = function(r, e) {
			return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
				var n = C.setTimeout(e, r);
				t.stop = function() {
					C.clearTimeout(n)
				}
			})
		}, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type =
		"checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t",
		ot.type = "radio", y.radioValue = "t" === ot.value;
	var ht, gt = k.expr.attrHandle;
	k.fn.extend({
		attr: function(e, t) {
			return _(this, k.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function(e) {
			return this.each(function() {
				k.removeAttr(this, e)
			})
		}
	}), k.extend({
		attr: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k
				.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !==
				n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(
					t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 :
				r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!y.radioValue && "radio" === t && A(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var n, r = 0,
				i = t && t.match(R);
			if (i && 1 === e.nodeType)
				while (n = i[r++]) e.removeAttribute(n)
		}
	}), ht = {
		set: function(e, t, n) {
			return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var a = gt[t] || k.find.attr;
		gt[t] = function(e, t, n) {
			var r, i, o = t.toLowerCase();
			return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r
		}
	});
	var vt = /^(?:input|select|textarea|button)$/i,
		yt = /^(?:a|area)$/i;

	function mt(e) {
		return (e.match(R) || []).join(" ")
	}

	function xt(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function bt(e) {
		return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
	}
	k.fn.extend({
		prop: function(e, t) {
			return _(this, k.prop, e, t, 1 < arguments.length)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[k.propFix[e] || e]
			})
		}
	}), k.extend({
		prop: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]),
				void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !==
				(r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = k.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), y.optSelected || (k.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap",
		"frameBorder", "contentEditable"
	], function() {
		k.propFix[this.toLowerCase()] = this
	}), k.fn.extend({
		addClass: function(t) {
			var e, n, r, i, o, a, s, u = 0;
			if (m(t)) return this.each(function(e) {
				k(this).addClass(t.call(this, e, xt(this)))
			});
			if ((e = bt(t)).length)
				while (n = this[u++])
					if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
						a = 0;
						while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
						i !== (s = mt(r)) && n.setAttribute("class", s)
					} return this
		},
		removeClass: function(t) {
			var e, n, r, i, o, a, s, u = 0;
			if (m(t)) return this.each(function(e) {
				k(this).removeClass(t.call(this, e, xt(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ((e = bt(t)).length)
				while (n = this[u++])
					if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
						a = 0;
						while (o = e[a++])
							while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
						i !== (s = mt(r)) && n.setAttribute("class", s)
					} return this
		},
		toggleClass: function(i, t) {
			var o = typeof i,
				a = "string" === o || Array.isArray(i);
			return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
				k(this).toggleClass(i.call(this, e, xt(this), t), t)
			}) : this.each(function() {
				var e, t, n, r;
				if (a) {
					t = 0, n = k(this), r = bt(i);
					while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
				} else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute &&
					this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""))
			})
		},
		hasClass: function(e) {
			var t, n, r = 0;
			t = " " + e + " ";
			while (n = this[r++])
				if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
			return !1
		}
	});
	var wt = /\r/g;
	k.fn.extend({
		val: function(n) {
			var r, e, i, t = this[0];
			return arguments.length ? (i = m(n), this.each(function(e) {
				var t;
				1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ?
					t += "" : Array.isArray(t) && (t = k.map(t, function(e) {
						return null == e ? "" : e + ""
					})), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(
						this, t, "value") || (this.value = t))
			})) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(
				t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
		}
	}), k.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = k.find.attr(e, "value");
					return null != t ? t : mt(k.text(e))
				}
			},
			select: {
				get: function(e) {
					var t, n, r, i = e.options,
						o = e.selectedIndex,
						a = "select-one" === e.type,
						s = a ? null : [],
						u = a ? o + 1 : i.length;
					for (r = o < 0 ? u : a ? o : 0; r < u; r++)
						if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
							if (t = k(n).val(), a) return t;
							s.push(t)
						} return s
				},
				set: function(e, t) {
					var n, r, i = e.options,
						o = k.makeArray(t),
						a = i.length;
					while (a--)((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), k.each(["radio", "checkbox"], function() {
		k.valHooks[this] = {
			set: function(e, t) {
				if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
			}
		}, y.checkOn || (k.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), y.focusin = "onfocusin" in C;
	var Tt = /^(?:focusinfocus|focusoutblur)$/,
		Ct = function(e) {
			e.stopPropagation()
		};
	k.extend(k.event, {
		trigger: function(e, t, n, r) {
			var i, o, a, s, u, l, c, f, p = [n || E],
				d = v.call(e, "type") ? e.type : e,
				h = v.call(e, "namespace") ? e.namespace.split(".") : [];
			if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(
						".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e :
						new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e
					.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target ||
					(e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !==
					c.trigger.apply(n, t))) {
				if (!r && !c.noBubble && !x(n)) {
					for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
					a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
				}
				i = 0;
				while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o,
					"events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result =
					l.apply(o, t), !1 === e.result && e.preventDefault());
				return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) ||
					u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(
						d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (
						n[u] = a)), e.result
			}
		},
		simulate: function(e, t, n) {
			var r = k.extend(new k.Event, n, {
				type: e,
				isSimulated: !0
			});
			k.event.trigger(r, null, t)
		}
	}), k.fn.extend({
		trigger: function(e, t) {
			return this.each(function() {
				k.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return k.event.trigger(e, t, n, !0)
		}
	}), y.focusin || k.each({
		focus: "focusin",
		blur: "focusout"
	}, function(n, r) {
		var i = function(e) {
			k.event.simulate(r, e.target, k.event.fix(e))
		};
		k.event.special[r] = {
			setup: function() {
				var e = this.ownerDocument || this,
					t = Q.access(e, r);
				t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1)
			},
			teardown: function() {
				var e = this.ownerDocument || this,
					t = Q.access(e, r) - 1;
				t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r))
			}
		}
	});
	var Et = C.location,
		kt = Date.now(),
		St = /\?/;
	k.parseXML = function(e) {
		var t;
		if (!e || "string" != typeof e) return null;
		try {
			t = (new C.DOMParser).parseFromString(e, "text/xml")
		} catch (e) {
			t = void 0
		}
		return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
	};
	var Nt = /\[\]$/,
		At = /\r?\n/g,
		Dt = /^(?:submit|button|image|reset|file)$/i,
		jt = /^(?:input|select|textarea|keygen)/i;

	function qt(n, e, r, i) {
		var t;
		if (Array.isArray(e)) k.each(e, function(e, t) {
			r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
		});
		else if (r || "object" !== w(e)) i(n, e);
		else
			for (t in e) qt(n + "[" + t + "]", e[t], r, i)
	}
	k.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				var n = m(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (null == e) return "";
		if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() {
			i(this.name, this.value)
		});
		else
			for (n in e) qt(n, e[n], t, i);
		return r.join("&")
	}, k.fn.extend({
		serialize: function() {
			return k.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = k.prop(this, "elements");
				return e ? k.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe
					.test(e))
			}).map(function(e, t) {
				var n = k(this).val();
				return null == n ? null : Array.isArray(n) ? k.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(At, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(At, "\r\n")
				}
			}).get()
		}
	});
	var Lt = /%20/g,
		Ht = /#.*$/,
		Ot = /([?&])_=[^&]*/,
		Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Rt = /^(?:GET|HEAD)$/,
		Mt = /^\/\//,
		It = {},
		Wt = {},
		$t = "*/".concat("*"),
		Ft = E.createElement("a");

	function Bt(o) {
		return function(e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n, r = 0,
				i = e.toLowerCase().match(R) || [];
			if (m(t))
				while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(
					t)
		}
	}

	function _t(t, i, o, a) {
		var s = {},
			u = t === Wt;

		function l(e) {
			var r;
			return s[e] = !0, k.each(t[e] || [], function(e, t) {
				var n = t(i, o, a);
				return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
			}), r
		}
		return l(i.dataTypes[0]) || !s["*"] && l("*")
	}

	function zt(e, t) {
		var n, r, i = k.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && k.extend(!0, e, r), e
	}
	Ft.href = Et.href, k.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Et.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": $t,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": k.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
		},
		ajaxPrefilter: Bt(It),
		ajaxTransport: Bt(Wt),
		ajax: function(e, t) {
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t),
				y = v.context || v,
				m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
				x = k.Deferred(),
				b = k.Callbacks("once memory"),
				w = v.statusCode || {},
				a = {},
				s = {},
				u = "canceled",
				T = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (h) {
							if (!n) {
								n = {};
								while (t = Pt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
							}
							t = n[e.toLowerCase() + " "]
						}
						return null == t ? null : t.join(", ")
					},
					getAllResponseHeaders: function() {
						return h ? p : null
					},
					setRequestHeader: function(e, t) {
						return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
					},
					overrideMimeType: function(e) {
						return null == h && (v.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (h) T.always(e[T.status]);
							else
								for (t in e) w[t] = [w[t], e[t]];
						return this
					},
					abort: function(e) {
						var t = e || u;
						return c && c.abort(t), l(0, t), this
					}
				};
			if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t
				.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain
			) {
				r = E.createElement("a");
				try {
					r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host
				} catch (e) {
					v.crossDomain = !0
				}
			}
			if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v,
					t, T), h) return T;
			for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(),
				v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType ||
					"").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length),
					v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data),
					!1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v
				.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T
					.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) &&
				T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[
					0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers
			) T.setRequestHeader(i, v.headers[i]);
			if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
			if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
				if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
				v.async && 0 < v.timeout && (d = C.setTimeout(function() {
					T.abort("timeout")
				}, v.timeout));
				try {
					h = !1, c.send(a, l)
				} catch (e) {
					if (h) throw e;
					l(-1, e)
				}
			} else l(-1, "No Transport");

			function l(e, t, n, r) {
				var i, o, a, s, u, l = t;
				h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e <
					300 || 304 === e, n && (s = function(e, t, n) {
						var r, i, o, a, s = e.contents,
							u = e.dataTypes;
						while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
						if (r)
							for (i in s)
								if (s[i] && s[i].test(r)) {
									u.unshift(i);
									break
								} if (u[0] in n) o = u[0];
						else {
							for (i in n) {
								if (!u[0] || e.converters[i + " " + u[0]]) {
									o = i;
									break
								}
								a || (a = i)
							}
							o = o || a
						}
						if (o) return o !== u[0] && u.unshift(o), n[o]
					}(v, T, n)), s = function(e, t, n, r) {
						var i, o, a, s, u, l = {},
							c = e.dataTypes.slice();
						if (c[1])
							for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
						o = c.shift();
						while (o)
							if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
								u = o, o = c.shift())
								if ("*" === o) o = u;
								else if ("*" !== u && u !== o) {
							if (!(a = l[u + " " + o] || l["* " + o]))
								for (i in l)
									if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
										!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
										break
									} if (!0 !== a)
								if (a && e["throws"]) t = a(t);
								else try {
									t = a(t)
								} catch (e) {
									return {
										state: "parsererror",
										error: a ? e : "No conversion from " + u + " to " + o
									}
								}
						}
						return {
							state: "success",
							data: t
						}
					}(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (
							u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" :
						304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l =
						"error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x
					.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v,
						i ? o : a
					]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop"))
				)
			}
			return T
		},
		getJSON: function(e, t, n) {
			return k.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return k.get(e, void 0, t, "script")
		}
	}), k.each(["get", "post"], function(e, i) {
		k[i] = function(e, t, n, r) {
			return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
				url: e,
				type: i,
				dataType: r,
				data: t,
				success: n
			}, k.isPlainObject(e) && e))
		}
	}), k._evalUrl = function(e, t) {
		return k.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			converters: {
				"text script": function() {}
			},
			dataFilter: function(e) {
				k.globalEval(e, t)
			}
		})
	}, k.fn.extend({
		wrapAll: function(e) {
			var t;
			return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode &&
				t.insertBefore(this[0]), t.map(function() {
					var e = this;
					while (e.firstElementChild) e = e.firstElementChild;
					return e
				}).append(this)), this
		},
		wrapInner: function(n) {
			return m(n) ? this.each(function(e) {
				k(this).wrapInner(n.call(this, e))
			}) : this.each(function() {
				var e = k(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap: function(t) {
			var n = m(t);
			return this.each(function(e) {
				k(this).wrapAll(n ? t.call(this, e) : t)
			})
		},
		unwrap: function(e) {
			return this.parent(e).not("body").each(function() {
				k(this).replaceWith(this.childNodes)
			}), this
		}
	}), k.expr.pseudos.hidden = function(e) {
		return !k.expr.pseudos.visible(e)
	}, k.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, k.ajaxSettings.xhr = function() {
		try {
			return new C.XMLHttpRequest
		} catch (e) {}
	};
	var Ut = {
			0: 200,
			1223: 204
		},
		Xt = k.ajaxSettings.xhr();
	y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function(i) {
		var o, a;
		if (y.cors || Xt && !i.crossDomain) return {
			send: function(e, t) {
				var n, r = i.xhr();
				if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
					for (n in i.xhrFields) r[n] = i.xhrFields[n];
				for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e[
						"X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
				o = function(e) {
						return function() {
							o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ?
								r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(
									Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ?
									{
										binary: r.response
									} : {
										text: r.responseText
									}, r.getAllResponseHeaders()))
						}
					}, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange =
					function() {
						4 === r.readyState && C.setTimeout(function() {
							o && a()
						})
					}, o = o("abort");
				try {
					r.send(i.hasContent && i.data || null)
				} catch (e) {
					if (o) throw e
				}
			},
			abort: function() {
				o && o()
			}
		}
	}), k.ajaxPrefilter(function(e) {
		e.crossDomain && (e.contents.script = !1)
	}), k.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return k.globalEval(e), e
			}
		}
	}), k.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), k.ajaxTransport("script", function(n) {
		var r, i;
		if (n.crossDomain || n.scriptAttrs) return {
			send: function(e, t) {
				r = k("<script>").attr(n.scriptAttrs || {}).prop({
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", i = function(e) {
					r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
				}), E.head.appendChild(r[0])
			},
			abort: function() {
				i && i()
			}
		}
	});
	var Vt, Gt = [],
		Yt = /(=)\?(?=&|$)|\?\?/;
	k.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var e = Gt.pop() || k.expando + "_" + kt++;
				return this[e] = !0, e
			}
		}), k.ajaxPrefilter("json jsonp", function(e, t, n) {
			var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType ||
				"").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
			if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
				a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" +
					r), e.converters["script json"] = function() {
					return o || k.error(r + " was not called"), o[0]
				}, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
					o = arguments
				}, n.always(function() {
					void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(
						i) && i(o[0]), o = i = void 0
				}), "script"
		}), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML =
			"<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function(e, t, n) {
			return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t =
					E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) :
				t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(),
				k.merge([], i.childNodes)));
			var r, i, o
		}, k.fn.load = function(e, t, n) {
			var r, i, o, a = this,
				s = e.indexOf(" ");
			return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t &&
				(i = "POST"), 0 < a.length && k.ajax({
					url: e,
					type: i || "GET",
					dataType: "html",
					data: t
				}).done(function(e) {
					o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
				}).always(n && function(e, t) {
					a.each(function() {
						n.apply(this, o || [e.responseText, t, e])
					})
				}), this
		}, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
			k.fn[t] = function(e) {
				return this.on(t, e)
			}
		}), k.expr.pseudos.animated = function(t) {
			return k.grep(k.timers, function(e) {
				return t === e.elem
			}).length
		}, k.offset = {
			setOffset: function(e, t, n) {
				var r, i, o, a, s, u, l = k.css(e, "position"),
					c = k(e),
					f = {};
				"static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), (
						"absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) :
					(a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top &&
					(f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) :
					c.css(f)
			}
		}, k.fn.extend({
			offset: function(t) {
				if (arguments.length) return void 0 === t ? this : this.each(function(e) {
					k.offset.setOffset(this, t, e)
				});
				var e, n, r = this[0];
				return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
					top: e.top + n.pageYOffset,
					left: e.left + n.pageXOffset
				}) : {
					top: 0,
					left: 0
				} : void 0
			},
			position: function() {
				if (this[0]) {
					var e, t, n, r = this[0],
						i = {
							top: 0,
							left: 0
						};
					if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
					else {
						t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
						while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) e = e.parentNode;
						e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(
							e, "borderLeftWidth", !0))
					}
					return {
						top: t.top - i.top - k.css(r, "marginTop", !0),
						left: t.left - i.left - k.css(r, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					var e = this.offsetParent;
					while (e && "static" === k.css(e, "position")) e = e.offsetParent;
					return e || ie
				})
			}
		}), k.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(t, i) {
			var o = "pageYOffset" === i;
			k.fn[t] = function(e) {
				return _(this, function(e, t, n) {
					var r;
					if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
					r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
				}, t, e, arguments.length)
			}
		}), k.each(["top", "left"], function(e, n) {
			k.cssHooks[n] = ze(y.pixelPosition, function(e, t) {
				if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t
			})
		}), k.each({
			Height: "height",
			Width: "width"
		}, function(a, s) {
			k.each({
				padding: "inner" + a,
				content: s,
				"": "outer" + a
			}, function(r, o) {
				k.fn[o] = function(e, t) {
					var n = arguments.length && (r || "boolean" != typeof e),
						i = r || (!0 === e || !0 === t ? "margin" : "border");
					return _(this, function(e, t, n) {
						var r;
						return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 ===
							e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a],
								r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
					}, s, n ? e : void 0, n)
				}
			})
		}), k.each(
			"blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu"
			.split(" "),
			function(e, n) {
				k.fn[n] = function(e, t) {
					return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
				}
			}), k.fn.extend({
			hover: function(e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			}
		}), k.fn.extend({
			bind: function(e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function(e, t) {
				return this.off(e, null, t)
			},
			delegate: function(e, t, n, r) {
				return this.on(t, e, n, r)
			},
			undelegate: function(e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			}
		}), k.proxy = function(e, t) {
			var n, r, i;
			if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
				return e.apply(t || this, r.concat(s.call(arguments)))
			}).guid = e.guid = e.guid || k.guid++, i
		}, k.holdReady = function(e) {
			e ? k.readyWait++ : k.ready(!0)
		}, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase =
		V, k.type = w, k.now = Date.now, k.isNumeric = function(e) {
			var t = k.type(e);
			return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
		}, "function" == typeof define && define.amd && define("jquery", [], function() {
			return k
		});
	var Qt = C.jQuery,
		Jt = C.$;
	return k.noConflict = function(e) {
		return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k
	}, e || (C.jQuery = C.$ = k), k
});
const API_URL = 'https://api.tool.dute.me';
const STATIC_URL = 'https://cdn.tool.dute.me/assets/';
const debug = false;
! function(t) {
	function e(e, a, r) {
		return r = g(a, r), this.on("click.pjax", e, function(e) {
			var a = r;
			a.container || ((a = t.extend({}, r)).container = t(this).attr("data-pjax")), n(e, a)
		})
	}

	function n(e, n, a) {
		a = g(n, a);
		var i = e.currentTarget,
			o = t(i);
		if ("A" !== i.tagName.toUpperCase()) throw "$.fn.pjax or $.pjax.click requires an anchor element";
		if (!(e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || location.protocol !== i.protocol || location
				.hostname !== i.hostname || i.href.indexOf("#") > -1 && x(i) == x(location) || e.isDefaultPrevented())) {
			var s = {
					url: i.href,
					container: o.attr("data-pjax"),
					target: i
				},
				c = t.extend({}, s, a),
				u = t.Event("pjax:click");
			o.trigger(u, [c]), u.isDefaultPrevented() || (r(c), e.preventDefault(), o.trigger("pjax:clicked", [c]))
		}
	}

	function a(e, n, a) {
		a = g(n, a);
		var i = e.currentTarget,
			o = t(i);
		if ("FORM" !== i.tagName.toUpperCase()) throw "$.pjax.submit requires a form element";
		var s = {
			type: (o.attr("method") || "GET").toUpperCase(),
			url: o.attr("action"),
			container: o.attr("data-pjax"),
			target: i
		};
		if ("GET" !== s.type && void 0 !== window.FormData) s.data = new FormData(i), s.processData = !1, s.contentType = !1;
		else {
			if (o.find(":file").length) return;
			s.data = o.serializeArray()
		}
		r(t.extend({}, s, a)), e.preventDefault()
	}

	function r(e) {
		e = t.extend(!0, {}, t.ajaxSettings, r.defaults, e), t.isFunction(e.url) && (e.url = e.url());
		var n = v(e.url).hash,
			a = t.type(e.container);
		if ("string" !== a) throw "expected string value for 'container' option; got " + a;
		var i, s = e.context = t(e.container);
		if (!s.length) throw "the container selector '" + e.container + "' did not match anything";

		function c(n, a, r) {
			r || (r = {}), r.relatedTarget = e.target;
			var i = t.Event(n, r);
			return s.trigger(i, a), !i.isDefaultPrevented()
		}
		e.data || (e.data = {}), t.isArray(e.data) ? e.data.push({
			name: "_pjax",
			value: e.container
		}) : e.data._pjax = e.container, e.beforeSend = function(t, a) {
			if ("GET" !== a.type && (a.timeout = 0), t.setRequestHeader("X-PJAX", "true"), t.setRequestHeader(
					"X-PJAX-Container", e.container), !c("pjax:beforeSend", [t, a])) return !1;
			a.timeout > 0 && (i = setTimeout(function() {
				c("pjax:timeout", [t, e]) && t.abort("timeout")
			}, a.timeout), a.timeout = 0);
			var r = v(a.url);
			n && (r.hash = n), e.requestUrl = m(r)
		}, e.complete = function(t, n) {
			i && clearTimeout(i), c("pjax:complete", [t, n, e]), c("pjax:end", [t, e])
		}, e.error = function(t, n, a) {
			var r = w("", t, e),
				i = c("pjax:error", [t, n, a, e]);
			"GET" == e.type && "abort" !== n && i && o(r.url)
		}, e.success = function(a, i, u) {
			var l = r.state,
				p = "function" == typeof t.pjax.defaults.version ? t.pjax.defaults.version() : t.pjax.defaults.version,
				d = u.getResponseHeader("X-PJAX-Version"),
				h = w(a, u, e),
				m = v(h.url);
			if (n && (m.hash = n, h.url = m.href), p && d && p !== d) o(h.url);
			else if (h.contents) {
				if (r.state = {
						id: e.id || f(),
						url: h.url,
						title: h.title,
						container: e.container,
						fragment: e.fragment,
						timeout: e.timeout
					}, (e.push || e.replace) && window.history.replaceState(r.state, h.title, h.url), t.contains(s, document.activeElement))
					try {
						document.activeElement.blur()
					} catch (t) {}
				h.title && (document.title = h.title), c("pjax:beforeReplace", [h.contents, e], {
					state: r.state,
					previousState: l
				}), s.html(h.contents);
				var x = s.find("input[autofocus], textarea[autofocus]").last()[0];
				x && document.activeElement !== x && x.focus(),
					function(e) {
						if (!e) return;
						var n = t("script[src]");
						e.each(function() {
							var e = this.src,
								a = n.filter(function() {
									return this.src === e
								});
							if (!a.length) {
								var r = document.createElement("script"),
									i = t(this).attr("type");
								i && (r.type = i), r.src = t(this).attr("src"), document.head.appendChild(r)
							}
						})
					}(h.scripts);
				var g = e.scrollTo;
				if (n) {
					var y = decodeURIComponent(n.slice(1)),
						j = document.getElementById(y) || document.getElementsByName(y)[0];
					j && (g = t(j).offset().top)
				}
				"number" == typeof g && t(window).scrollTop(g), c("pjax:success", [a, i, u, e])
			} else o(h.url)
		}, r.state || (r.state = {
			id: f(),
			url: window.location.href,
			title: document.title,
			container: e.container,
			fragment: e.fragment,
			timeout: e.timeout
		}, window.history.replaceState(r.state, document.title)), d(r.xhr), r.options = e;
		var u, l, p = r.xhr = t.ajax(e);
		return p.readyState > 0 && (e.push && !e.replace && (u = r.state.id, l = [e.container, h(s)], b[u] = l, E.push(u), S(
				T, 0), S(E, r.defaults.maxCacheLength), window.history.pushState(null, "", e.requestUrl)), c("pjax:start", [p, e]),
			c("pjax:send", [p, e])), r.xhr
	}

	function i(e, n) {
		var a = {
			url: window.location.href,
			push: !1,
			replace: !0,
			scrollTo: !1
		};
		return r(t.extend(a, g(e, n)))
	}

	function o(t) {
		window.history.replaceState(null, "", r.state.url), window.location.replace(t)
	}
	var s = !0,
		c = window.location.href,
		u = window.history.state;

	function l(e) {
		s || d(r.xhr);
		var n, a = r.state,
			i = e.state;
		if (i && i.container) {
			if (s && c == i.url) return;
			if (a) {
				if (a.id === i.id) return;
				n = a.id < i.id ? "forward" : "back"
			}
			var u = b[i.id] || [],
				l = u[0] || i.container,
				p = t(l),
				f = u[1];
			if (p.length) {
				a && function(t, e, n) {
					var a, i;
					b[e] = n, "forward" === t ? (a = E, i = T) : (a = T, i = E);
					a.push(e), (e = i.pop()) && delete b[e];
					S(a, r.defaults.maxCacheLength)
				}(n, a.id, [l, h(p)]);
				var m = t.Event("pjax:popstate", {
					state: i,
					direction: n
				});
				p.trigger(m);
				var v = {
					id: i.id,
					url: i.url,
					container: l,
					push: !1,
					fragment: i.fragment,
					timeout: i.timeout,
					scrollTo: !1
				};
				if (f) {
					p.trigger("pjax:start", [null, v]), r.state = i, i.title && (document.title = i.title);
					var x = t.Event("pjax:beforeReplace", {
						state: i,
						previousState: a
					});
					p.trigger(x, [f, v]), p.html(f), p.trigger("pjax:end", [null, v])
				} else r(v);
				p[0].offsetHeight
			} else o(location.href)
		}
		s = !1
	}

	function p(e) {
		var n = t.isFunction(e.url) ? e.url() : e.url,
			a = e.type ? e.type.toUpperCase() : "GET",
			r = t("<form>", {
				method: "GET" === a ? "GET" : "POST",
				action: n,
				style: "display:none"
			});
		"GET" !== a && "POST" !== a && r.append(t("<input>", {
			type: "hidden",
			name: "_method",
			value: a.toLowerCase()
		}));
		var i = e.data;
		if ("string" == typeof i) t.each(i.split("&"), function(e, n) {
			var a = n.split("=");
			r.append(t("<input>", {
				type: "hidden",
				name: a[0],
				value: a[1]
			}))
		});
		else if (t.isArray(i)) t.each(i, function(e, n) {
			r.append(t("<input>", {
				type: "hidden",
				name: n.name,
				value: n.value
			}))
		});
		else if ("object" == typeof i) {
			var o;
			for (o in i) r.append(t("<input>", {
				type: "hidden",
				name: o,
				value: i[o]
			}))
		}
		t(document.body).append(r), r.submit()
	}

	function d(e) {
		e && e.readyState < 4 && (e.onreadystatechange = t.noop, e.abort())
	}

	function f() {
		return (new Date).getTime()
	}

	function h(e) {
		var n = e.clone();
		return n.find("script").each(function() {
			this.src || t._data(this, "globalEval", !1)
		}), n.contents()
	}

	function m(t) {
		return t.search = t.search.replace(/([?&])(_pjax|_)=[^&]*/g, "").replace(/^&/, ""), t.href.replace(/\?($|#)/, "$1")
	}

	function v(t) {
		var e = document.createElement("a");
		return e.href = t, e
	}

	function x(t) {
		return t.href.replace(/#.*/, "")
	}

	function g(e, n) {
		return e && n ? ((n = t.extend({}, n)).container = e, n) : t.isPlainObject(e) ? e : {
			container: e
		}
	}

	function y(t, e) {
		return t.filter(e).add(t.find(e))
	}

	function j(e) {
		return t.parseHTML(e, document, !0)
	}

	function w(e, n, a) {
		var r, i, o = {},
			s = /<html/i.test(e),
			c = n.getResponseHeader("X-PJAX-URL");
		if (o.url = c ? m(v(c)) : a.requestUrl, s) {
			i = t(j(e.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));
			var u = e.match(/<head[^>]*>([\s\S.]*)<\/head>/i);
			r = null != u ? t(j(u[0])) : i
		} else r = i = t(j(e));
		if (0 === i.length) return o;
		if (o.title = y(r, "title").last().text(), a.fragment) {
			var l = i;
			"body" !== a.fragment && (l = y(l, a.fragment).first()), l.length && (o.contents = "body" === a.fragment ? l : l.contents(),
				o.title || (o.title = l.attr("title") || l.data("title")))
		} else s || (o.contents = i);
		return o.contents && (o.contents = o.contents.not(function() {
			return t(this).is("title")
		}), o.contents.find("title").remove(), o.scripts = y(o.contents, "script[src]").remove(), o.contents = o.contents.not(
			o.scripts)), o.title && (o.title = t.trim(o.title)), o
	}
	u && u.container && (r.state = u), "state" in window.history && (s = !1);
	var b = {},
		T = [],
		E = [];

	function S(t, e) {
		for (; t.length > e;) delete b[t.shift()]
	}

	function P() {
		return t("meta").filter(function() {
			var e = t(this).attr("http-equiv");
			return e && "X-PJAX-VERSION" === e.toUpperCase()
		}).attr("content")
	}

	function C() {
		t.fn.pjax = e, t.pjax = r, t.pjax.enable = t.noop, t.pjax.disable = A, t.pjax.click = n, t.pjax.submit = a, t.pjax.reload =
			i, t.pjax.defaults = {
				timeout: 650,
				push: !0,
				replace: !1,
				type: "GET",
				dataType: "html",
				scrollTo: 0,
				maxCacheLength: 20,
				version: P
			}, t(window).on("popstate.pjax", l)
	}

	function A() {
		t.fn.pjax = function() {
				return this
			}, t.pjax = p, t.pjax.enable = C, t.pjax.disable = t.noop, t.pjax.click = t.noop, t.pjax.submit = t.noop, t.pjax.reload =
			function() {
				window.location.reload()
			}, t(window).off("popstate.pjax", l)
	}
	t.event.props && t.inArray("state", t.event.props) < 0 ? t.event.props.push("state") : "state" in t.Event.prototype ||
		t.event.addProp("state"), t.support.pjax = window.history && window.history.pushState && window.history.replaceState &&
		!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/), t.support.pjax ? C() : A()
}(jQuery);;
(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.NProgress = factory();
	}
})(this, function() {
	var NProgress = {};
	NProgress.version = '0.2.0';
	var Settings = NProgress.settings = {
		minimum: 0.08,
		easing: 'ease',
		positionUsing: '',
		speed: 200,
		trickle: true,
		trickleRate: 0.02,
		trickleSpeed: 800,
		showSpinner: true,
		barSelector: '[role="bar"]',
		spinnerSelector: '[role="spinner"]',
		parent: 'body',
		template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
	};
	NProgress.configure = function(options) {
		var key, value;
		for (key in options) {
			value = options[key];
			if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
		}
		return this;
	};
	NProgress.status = null;
	NProgress.set = function(n) {
		var started = NProgress.isStarted();
		n = clamp(n, Settings.minimum, 1);
		NProgress.status = (n === 1 ? null : n);
		var progress = NProgress.render(!started),
			bar = progress.querySelector(Settings.barSelector),
			speed = Settings.speed,
			ease = Settings.easing;
		progress.offsetWidth;
		queue(function(next) {
			if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();
			css(bar, barPositionCSS(n, speed, ease));
			if (n === 1) {
				css(progress, {
					transition: 'none',
					opacity: 1
				});
				progress.offsetWidth;
				setTimeout(function() {
					css(progress, {
						transition: 'all ' + speed + 'ms linear',
						opacity: 0
					});
					setTimeout(function() {
						NProgress.remove();
						next();
					}, speed);
				}, speed);
			} else {
				setTimeout(next, speed);
			}
		});
		return this;
	};
	NProgress.isStarted = function() {
		return typeof NProgress.status === 'number';
	};
	NProgress.start = function() {
		if (!NProgress.status) NProgress.set(0);
		var work = function() {
			setTimeout(function() {
				if (!NProgress.status) return;
				NProgress.trickle();
				work();
			}, Settings.trickleSpeed);
		};
		if (Settings.trickle) work();
		return this;
	};
	NProgress.done = function(force) {
		if (!force && !NProgress.status) return this;
		return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
	};
	NProgress.inc = function(amount) {
		var n = NProgress.status;
		if (!n) {
			return NProgress.start();
		} else {
			if (typeof amount !== 'number') {
				amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
			}
			n = clamp(n + amount, 0, 0.994);
			return NProgress.set(n);
		}
	};
	NProgress.trickle = function() {
		return NProgress.inc(Math.random() * Settings.trickleRate);
	};
	(function() {
		var initial = 0,
			current = 0;
		NProgress.promise = function($promise) {
			if (!$promise || $promise.state() === "resolved") {
				return this;
			}
			if (current === 0) {
				NProgress.start();
			}
			initial++;
			current++;
			$promise.always(function() {
				current--;
				if (current === 0) {
					initial = 0;
					NProgress.done();
				} else {
					NProgress.set((initial - current) / initial);
				}
			});
			return this;
		};
	})();
	NProgress.render = function(fromStart) {
		if (NProgress.isRendered()) return document.getElementById('nprogress');
		addClass(document.documentElement, 'nprogress-busy');
		var progress = document.createElement('div');
		progress.id = 'nprogress';
		progress.innerHTML = Settings.template;
		var bar = progress.querySelector(Settings.barSelector),
			perc = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
			parent = document.querySelector(Settings.parent),
			spinner;
		css(bar, {
			transition: 'all 0 linear',
			transform: 'translate3d(' + perc + '%,0,0)'
		});
		if (!Settings.showSpinner) {
			spinner = progress.querySelector(Settings.spinnerSelector);
			spinner && removeElement(spinner);
		}
		if (parent != document.body) {
			addClass(parent, 'nprogress-custom-parent');
		}
		parent.appendChild(progress);
		return progress;
	};
	NProgress.remove = function() {
		removeClass(document.documentElement, 'nprogress-busy');
		removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
		var progress = document.getElementById('nprogress');
		progress && removeElement(progress);
	};
	NProgress.isRendered = function() {
		return !!document.getElementById('nprogress');
	};
	NProgress.getPositioningCSS = function() {
		var bodyStyle = document.body.style;
		var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' : ('MozTransform' in bodyStyle) ? 'Moz' : (
			'msTransform' in bodyStyle) ? 'ms' : ('OTransform' in bodyStyle) ? 'O' : '';
		if (vendorPrefix + 'Perspective' in bodyStyle) {
			return 'translate3d';
		} else if (vendorPrefix + 'Transform' in bodyStyle) {
			return 'translate';
		} else {
			return 'margin';
		}
	};

	function clamp(n, min, max) {
		if (n < min) return min;
		if (n > max) return max;
		return n;
	}

	function toBarPerc(n) {
		return (-1 + n) * 100;
	}

	function barPositionCSS(n, speed, ease) {
		var barCSS;
		if (Settings.positionUsing === 'translate3d') {
			barCSS = {
				transform: 'translate3d(' + toBarPerc(n) + '%,0,0)'
			};
		} else if (Settings.positionUsing === 'translate') {
			barCSS = {
				transform: 'translate(' + toBarPerc(n) + '%,0)'
			};
		} else {
			barCSS = {
				'margin-left': toBarPerc(n) + '%'
			};
		}
		barCSS.transition = 'all ' + speed + 'ms ' + ease;
		return barCSS;
	}
	var queue = (function() {
		var pending = [];

		function next() {
			var fn = pending.shift();
			if (fn) {
				fn(next);
			}
		}
		return function(fn) {
			pending.push(fn);
			if (pending.length == 1) next();
		};
	})();
	var css = (function() {
		var cssPrefixes = ['Webkit', 'O', 'Moz', 'ms'],
			cssProps = {};

		function camelCase(string) {
			return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
				return letter.toUpperCase();
			});
		}

		function getVendorProp(name) {
			var style = document.body.style;
			if (name in style) return name;
			var i = cssPrefixes.length,
				capName = name.charAt(0).toUpperCase() + name.slice(1),
				vendorName;
			while (i--) {
				vendorName = cssPrefixes[i] + capName;
				if (vendorName in style) return vendorName;
			}
			return name;
		}

		function getStyleProp(name) {
			name = camelCase(name);
			return cssProps[name] || (cssProps[name] = getVendorProp(name));
		}

		function applyCss(element, prop, value) {
			prop = getStyleProp(prop);
			element.style[prop] = value;
		}
		return function(element, properties) {
			var args = arguments,
				prop, value;
			if (args.length == 2) {
				for (prop in properties) {
					value = properties[prop];
					if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
				}
			} else {
				applyCss(element, args[1], args[2]);
			}
		}
	})();

	function hasClass(element, name) {
		var list = typeof element == 'string' ? element : classList(element);
		return list.indexOf(' ' + name + ' ') >= 0;
	}

	function addClass(element, name) {
		var oldList = classList(element),
			newList = oldList + name;
		if (hasClass(oldList, name)) return;
		element.className = newList.substring(1);
	}

	function removeClass(element, name) {
		var oldList = classList(element),
			newList;
		if (!hasClass(element, name)) return;
		newList = oldList.replace(' ' + name + ' ', ' ');
		element.className = newList.substring(1, newList.length - 1);
	}

	function classList(element) {
		return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
	}

	function removeElement(element) {
		element && element.parentNode && element.parentNode.removeChild(element);
	}
	return NProgress;
});
var QRCode;
(function() {
	function QR8bitByte(data) {
		this.mode = QRMode.MODE_8BIT_BYTE;
		this.data = data;
		this.parsedData = [];
		for (var i = 0, l = this.data.length; i < l; i++) {
			var byteArray = [];
			var code = this.data.charCodeAt(i);
			if (code > 0x10000) {
				byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
				byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
				byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
				byteArray[3] = 0x80 | (code & 0x3F);
			} else if (code > 0x800) {
				byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
				byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
				byteArray[2] = 0x80 | (code & 0x3F);
			} else if (code > 0x80) {
				byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
				byteArray[1] = 0x80 | (code & 0x3F);
			} else {
				byteArray[0] = code;
			}
			this.parsedData.push(byteArray);
		}
		this.parsedData = Array.prototype.concat.apply([], this.parsedData);
		if (this.parsedData.length != this.data.length) {
			this.parsedData.unshift(191);
			this.parsedData.unshift(187);
			this.parsedData.unshift(239);
		}
	}
	QR8bitByte.prototype = {
		getLength: function(buffer) {
			return this.parsedData.length;
		},
		write: function(buffer) {
			for (var i = 0, l = this.parsedData.length; i < l; i++) {
				buffer.put(this.parsedData[i], 8);
			}
		}
	};

	function QRCodeModel(typeNumber, errorCorrectLevel) {
		this.typeNumber = typeNumber;
		this.errorCorrectLevel = errorCorrectLevel;
		this.modules = null;
		this.moduleCount = 0;
		this.dataCache = null;
		this.dataList = [];
	}
	QRCodeModel.prototype = {
		addData: function(data) {
			var newData = new QR8bitByte(data);
			this.dataList.push(newData);
			this.dataCache = null;
		},
		isDark: function(row, col) {
			if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
				throw new Error(row + "," + col);
			}
			return this.modules[row][col];
		},
		getModuleCount: function() {
			return this.moduleCount;
		},
		make: function() {
			this.makeImpl(false, this.getBestMaskPattern());
		},
		makeImpl: function(test, maskPattern) {
			this.moduleCount = this.typeNumber * 4 + 17;
			this.modules = new Array(this.moduleCount);
			for (var row = 0; row < this.moduleCount; row++) {
				this.modules[row] = new Array(this.moduleCount);
				for (var col = 0; col < this.moduleCount; col++) {
					this.modules[row][col] = null;
				}
			}
			this.setupPositionProbePattern(0, 0);
			this.setupPositionProbePattern(this.moduleCount - 7, 0);
			this.setupPositionProbePattern(0, this.moduleCount - 7);
			this.setupPositionAdjustPattern();
			this.setupTimingPattern();
			this.setupTypeInfo(test, maskPattern);
			if (this.typeNumber >= 7) {
				this.setupTypeNumber(test);
			}
			if (this.dataCache == null) {
				this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
			}
			this.mapData(this.dataCache, maskPattern);
		},
		setupPositionProbePattern: function(row, col) {
			for (var r = -1; r <= 7; r++) {
				if (row + r <= -1 || this.moduleCount <= row + r) continue;
				for (var c = -1; c <= 7; c++) {
					if (col + c <= -1 || this.moduleCount <= col + c) continue;
					if ((0 <= r && r <= 6 && (c == 0 || c == 6)) || (0 <= c && c <= 6 && (r == 0 || r == 6)) || (2 <= r && r <= 4 &&
							2 <= c && c <= 4)) {
						this.modules[row + r][col + c] = true;
					} else {
						this.modules[row + r][col + c] = false;
					}
				}
			}
		},
		getBestMaskPattern: function() {
			var minLostPoint = 0;
			var pattern = 0;
			for (var i = 0; i < 8; i++) {
				this.makeImpl(true, i);
				var lostPoint = QRUtil.getLostPoint(this);
				if (i == 0 || minLostPoint > lostPoint) {
					minLostPoint = lostPoint;
					pattern = i;
				}
			}
			return pattern;
		},
		createMovieClip: function(target_mc, instance_name, depth) {
			var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
			var cs = 1;
			this.make();
			for (var row = 0; row < this.modules.length; row++) {
				var y = row * cs;
				for (var col = 0; col < this.modules[row].length; col++) {
					var x = col * cs;
					var dark = this.modules[row][col];
					if (dark) {
						qr_mc.beginFill(0, 100);
						qr_mc.moveTo(x, y);
						qr_mc.lineTo(x + cs, y);
						qr_mc.lineTo(x + cs, y + cs);
						qr_mc.lineTo(x, y + cs);
						qr_mc.endFill();
					}
				}
			}
			return qr_mc;
		},
		setupTimingPattern: function() {
			for (var r = 8; r < this.moduleCount - 8; r++) {
				if (this.modules[r][6] != null) {
					continue;
				}
				this.modules[r][6] = (r % 2 == 0);
			}
			for (var c = 8; c < this.moduleCount - 8; c++) {
				if (this.modules[6][c] != null) {
					continue;
				}
				this.modules[6][c] = (c % 2 == 0);
			}
		},
		setupPositionAdjustPattern: function() {
			var pos = QRUtil.getPatternPosition(this.typeNumber);
			for (var i = 0; i < pos.length; i++) {
				for (var j = 0; j < pos.length; j++) {
					var row = pos[i];
					var col = pos[j];
					if (this.modules[row][col] != null) {
						continue;
					}
					for (var r = -2; r <= 2; r++) {
						for (var c = -2; c <= 2; c++) {
							if (r == -2 || r == 2 || c == -2 || c == 2 || (r == 0 && c == 0)) {
								this.modules[row + r][col + c] = true;
							} else {
								this.modules[row + r][col + c] = false;
							}
						}
					}
				}
			}
		},
		setupTypeNumber: function(test) {
			var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
			for (var i = 0; i < 18; i++) {
				var mod = (!test && ((bits >> i) & 1) == 1);
				this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
			}
			for (var i = 0; i < 18; i++) {
				var mod = (!test && ((bits >> i) & 1) == 1);
				this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
			}
		},
		setupTypeInfo: function(test, maskPattern) {
			var data = (this.errorCorrectLevel << 3) | maskPattern;
			var bits = QRUtil.getBCHTypeInfo(data);
			for (var i = 0; i < 15; i++) {
				var mod = (!test && ((bits >> i) & 1) == 1);
				if (i < 6) {
					this.modules[i][8] = mod;
				} else if (i < 8) {
					this.modules[i + 1][8] = mod;
				} else {
					this.modules[this.moduleCount - 15 + i][8] = mod;
				}
			}
			for (var i = 0; i < 15; i++) {
				var mod = (!test && ((bits >> i) & 1) == 1);
				if (i < 8) {
					this.modules[8][this.moduleCount - i - 1] = mod;
				} else if (i < 9) {
					this.modules[8][15 - i - 1 + 1] = mod;
				} else {
					this.modules[8][15 - i - 1] = mod;
				}
			}
			this.modules[this.moduleCount - 8][8] = (!test);
		},
		mapData: function(data, maskPattern) {
			var inc = -1;
			var row = this.moduleCount - 1;
			var bitIndex = 7;
			var byteIndex = 0;
			for (var col = this.moduleCount - 1; col > 0; col -= 2) {
				if (col == 6) col--;
				while (true) {
					for (var c = 0; c < 2; c++) {
						if (this.modules[row][col - c] == null) {
							var dark = false;
							if (byteIndex < data.length) {
								dark = (((data[byteIndex] >>> bitIndex) & 1) == 1);
							}
							var mask = QRUtil.getMask(maskPattern, row, col - c);
							if (mask) {
								dark = !dark;
							}
							this.modules[row][col - c] = dark;
							bitIndex--;
							if (bitIndex == -1) {
								byteIndex++;
								bitIndex = 7;
							}
						}
					}
					row += inc;
					if (row < 0 || this.moduleCount <= row) {
						row -= inc;
						inc = -inc;
						break;
					}
				}
			}
		}
	};
	QRCodeModel.PAD0 = 0xEC;
	QRCodeModel.PAD1 = 0x11;
	QRCodeModel.createData = function(typeNumber, errorCorrectLevel, dataList) {
		var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
		var buffer = new QRBitBuffer();
		for (var i = 0; i < dataList.length; i++) {
			var data = dataList[i];
			buffer.put(data.mode, 4);
			buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
			data.write(buffer);
		}
		var totalDataCount = 0;
		for (var i = 0; i < rsBlocks.length; i++) {
			totalDataCount += rsBlocks[i].dataCount;
		}
		if (buffer.getLengthInBits() > totalDataCount * 8) {
			throw new Error("code length overflow. (" +
				buffer.getLengthInBits() +
				">" +
				totalDataCount * 8 +
				")");
		}
		if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
			buffer.put(0, 4);
		}
		while (buffer.getLengthInBits() % 8 != 0) {
			buffer.putBit(false);
		}
		while (true) {
			if (buffer.getLengthInBits() >= totalDataCount * 8) {
				break;
			}
			buffer.put(QRCodeModel.PAD0, 8);
			if (buffer.getLengthInBits() >= totalDataCount * 8) {
				break;
			}
			buffer.put(QRCodeModel.PAD1, 8);
		}
		return QRCodeModel.createBytes(buffer, rsBlocks);
	};
	QRCodeModel.createBytes = function(buffer, rsBlocks) {
		var offset = 0;
		var maxDcCount = 0;
		var maxEcCount = 0;
		var dcdata = new Array(rsBlocks.length);
		var ecdata = new Array(rsBlocks.length);
		for (var r = 0; r < rsBlocks.length; r++) {
			var dcCount = rsBlocks[r].dataCount;
			var ecCount = rsBlocks[r].totalCount - dcCount;
			maxDcCount = Math.max(maxDcCount, dcCount);
			maxEcCount = Math.max(maxEcCount, ecCount);
			dcdata[r] = new Array(dcCount);
			for (var i = 0; i < dcdata[r].length; i++) {
				dcdata[r][i] = 0xff & buffer.buffer[i + offset];
			}
			offset += dcCount;
			var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
			var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
			var modPoly = rawPoly.mod(rsPoly);
			ecdata[r] = new Array(rsPoly.getLength() - 1);
			for (var i = 0; i < ecdata[r].length; i++) {
				var modIndex = i + modPoly.getLength() - ecdata[r].length;
				ecdata[r][i] = (modIndex >= 0) ? modPoly.get(modIndex) : 0;
			}
		}
		var totalCodeCount = 0;
		for (var i = 0; i < rsBlocks.length; i++) {
			totalCodeCount += rsBlocks[i].totalCount;
		}
		var data = new Array(totalCodeCount);
		var index = 0;
		for (var i = 0; i < maxDcCount; i++) {
			for (var r = 0; r < rsBlocks.length; r++) {
				if (i < dcdata[r].length) {
					data[index++] = dcdata[r][i];
				}
			}
		}
		for (var i = 0; i < maxEcCount; i++) {
			for (var r = 0; r < rsBlocks.length; r++) {
				if (i < ecdata[r].length) {
					data[index++] = ecdata[r][i];
				}
			}
		}
		return data;
	};
	var QRMode = {
		MODE_NUMBER: 1 << 0,
		MODE_ALPHA_NUM: 1 << 1,
		MODE_8BIT_BYTE: 1 << 2,
		MODE_KANJI: 1 << 3
	};
	var QRErrorCorrectLevel = {
		L: 1,
		M: 0,
		Q: 3,
		H: 2
	};
	var QRMaskPattern = {
		PATTERN000: 0,
		PATTERN001: 1,
		PATTERN010: 2,
		PATTERN011: 3,
		PATTERN100: 4,
		PATTERN101: 5,
		PATTERN110: 6,
		PATTERN111: 7
	};
	var QRUtil = {
		PATTERN_POSITION_TABLE: [
			[],
			[6, 18],
			[6, 22],
			[6, 26],
			[6, 30],
			[6, 34],
			[6, 22, 38],
			[6, 24, 42],
			[6, 26, 46],
			[6, 28, 50],
			[6, 30, 54],
			[6, 32, 58],
			[6, 34, 62],
			[6, 26, 46, 66],
			[6, 26, 48, 70],
			[6, 26, 50, 74],
			[6, 30, 54, 78],
			[6, 30, 56, 82],
			[6, 30, 58, 86],
			[6, 34, 62, 90],
			[6, 28, 50, 72, 94],
			[6, 26, 50, 74, 98],
			[6, 30, 54, 78, 102],
			[6, 28, 54, 80, 106],
			[6, 32, 58, 84, 110],
			[6, 30, 58, 86, 114],
			[6, 34, 62, 90, 118],
			[6, 26, 50, 74, 98, 122],
			[6, 30, 54, 78, 102, 126],
			[6, 26, 52, 78, 104, 130],
			[6, 30, 56, 82, 108, 134],
			[6, 34, 60, 86, 112, 138],
			[6, 30, 58, 86, 114, 142],
			[6, 34, 62, 90, 118, 146],
			[6, 30, 54, 78, 102, 126, 150],
			[6, 24, 50, 76, 102, 128, 154],
			[6, 28, 54, 80, 106, 132, 158],
			[6, 32, 58, 84, 110, 136, 162],
			[6, 26, 54, 82, 110, 138, 166],
			[6, 30, 58, 86, 114, 142, 170]
		],
		G15: (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
		G18: (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
		G15_MASK: (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),
		getBCHTypeInfo: function(data) {
			var d = data << 10;
			while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
				d ^= (QRUtil.G15 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15)));
			}
			return ((data << 10) | d) ^ QRUtil.G15_MASK;
		},
		getBCHTypeNumber: function(data) {
			var d = data << 12;
			while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
				d ^= (QRUtil.G18 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18)));
			}
			return (data << 12) | d;
		},
		getBCHDigit: function(data) {
			var digit = 0;
			while (data != 0) {
				digit++;
				data >>>= 1;
			}
			return digit;
		},
		getPatternPosition: function(typeNumber) {
			return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
		},
		getMask: function(maskPattern, i, j) {
			switch (maskPattern) {
				case QRMaskPattern.PATTERN000:
					return (i + j) % 2 == 0;
				case QRMaskPattern.PATTERN001:
					return i % 2 == 0;
				case QRMaskPattern.PATTERN010:
					return j % 3 == 0;
				case QRMaskPattern.PATTERN011:
					return (i + j) % 3 == 0;
				case QRMaskPattern.PATTERN100:
					return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
				case QRMaskPattern.PATTERN101:
					return (i * j) % 2 + (i * j) % 3 == 0;
				case QRMaskPattern.PATTERN110:
					return ((i * j) % 2 + (i * j) % 3) % 2 == 0;
				case QRMaskPattern.PATTERN111:
					return ((i * j) % 3 + (i + j) % 2) % 2 == 0;
				default:
					throw new Error("bad maskPattern:" + maskPattern);
			}
		},
		getErrorCorrectPolynomial: function(errorCorrectLength) {
			var a = new QRPolynomial([1], 0);
			for (var i = 0; i < errorCorrectLength; i++) {
				a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
			}
			return a;
		},
		getLengthInBits: function(mode, type) {
			if (1 <= type && type < 10) {
				switch (mode) {
					case QRMode.MODE_NUMBER:
						return 10;
					case QRMode.MODE_ALPHA_NUM:
						return 9;
					case QRMode.MODE_8BIT_BYTE:
						return 8;
					case QRMode.MODE_KANJI:
						return 8;
					default:
						throw new Error("mode:" + mode);
				}
			} else if (type < 27) {
				switch (mode) {
					case QRMode.MODE_NUMBER:
						return 12;
					case QRMode.MODE_ALPHA_NUM:
						return 11;
					case QRMode.MODE_8BIT_BYTE:
						return 16;
					case QRMode.MODE_KANJI:
						return 10;
					default:
						throw new Error("mode:" + mode);
				}
			} else if (type < 41) {
				switch (mode) {
					case QRMode.MODE_NUMBER:
						return 14;
					case QRMode.MODE_ALPHA_NUM:
						return 13;
					case QRMode.MODE_8BIT_BYTE:
						return 16;
					case QRMode.MODE_KANJI:
						return 12;
					default:
						throw new Error("mode:" + mode);
				}
			} else {
				throw new Error("type:" + type);
			}
		},
		getLostPoint: function(qrCode) {
			var moduleCount = qrCode.getModuleCount();
			var lostPoint = 0;
			for (var row = 0; row < moduleCount; row++) {
				for (var col = 0; col < moduleCount; col++) {
					var sameCount = 0;
					var dark = qrCode.isDark(row, col);
					for (var r = -1; r <= 1; r++) {
						if (row + r < 0 || moduleCount <= row + r) {
							continue;
						}
						for (var c = -1; c <= 1; c++) {
							if (col + c < 0 || moduleCount <= col + c) {
								continue;
							}
							if (r == 0 && c == 0) {
								continue;
							}
							if (dark == qrCode.isDark(row + r, col + c)) {
								sameCount++;
							}
						}
					}
					if (sameCount > 5) {
						lostPoint += (3 + sameCount - 5);
					}
				}
			}
			for (var row = 0; row < moduleCount - 1; row++) {
				for (var col = 0; col < moduleCount - 1; col++) {
					var count = 0;
					if (qrCode.isDark(row, col)) count++;
					if (qrCode.isDark(row + 1, col)) count++;
					if (qrCode.isDark(row, col + 1)) count++;
					if (qrCode.isDark(row + 1, col + 1)) count++;
					if (count == 0 || count == 4) {
						lostPoint += 3;
					}
				}
			}
			for (var row = 0; row < moduleCount; row++) {
				for (var col = 0; col < moduleCount - 6; col++) {
					if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row,
							col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
						lostPoint += 40;
					}
				}
			}
			for (var col = 0; col < moduleCount; col++) {
				for (var row = 0; row < moduleCount - 6; row++) {
					if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row +
							3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
						lostPoint += 40;
					}
				}
			}
			var darkCount = 0;
			for (var col = 0; col < moduleCount; col++) {
				for (var row = 0; row < moduleCount; row++) {
					if (qrCode.isDark(row, col)) {
						darkCount++;
					}
				}
			}
			var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
			lostPoint += ratio * 10;
			return lostPoint;
		}
	};
	var QRMath = {
		glog: function(n) {
			if (n < 1) {
				throw new Error("glog(" + n + ")");
			}
			return QRMath.LOG_TABLE[n];
		},
		gexp: function(n) {
			while (n < 0) {
				n += 255;
			}
			while (n >= 256) {
				n -= 255;
			}
			return QRMath.EXP_TABLE[n];
		},
		EXP_TABLE: new Array(256),
		LOG_TABLE: new Array(256)
	};
	for (var i = 0; i < 8; i++) {
		QRMath.EXP_TABLE[i] = 1 << i;
	}
	for (var i = 8; i < 256; i++) {
		QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[
			i - 8];
	}
	for (var i = 0; i < 255; i++) {
		QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
	}

	function QRPolynomial(num, shift) {
		if (num.length == undefined) {
			throw new Error(num.length + "/" + shift);
		}
		var offset = 0;
		while (offset < num.length && num[offset] == 0) {
			offset++;
		}
		this.num = new Array(num.length - offset + shift);
		for (var i = 0; i < num.length - offset; i++) {
			this.num[i] = num[i + offset];
		}
	}
	QRPolynomial.prototype = {
		get: function(index) {
			return this.num[index];
		},
		getLength: function() {
			return this.num.length;
		},
		multiply: function(e) {
			var num = new Array(this.getLength() + e.getLength() - 1);
			for (var i = 0; i < this.getLength(); i++) {
				for (var j = 0; j < e.getLength(); j++) {
					num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
				}
			}
			return new QRPolynomial(num, 0);
		},
		mod: function(e) {
			if (this.getLength() - e.getLength() < 0) {
				return this;
			}
			var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
			var num = new Array(this.getLength());
			for (var i = 0; i < this.getLength(); i++) {
				num[i] = this.get(i);
			}
			for (var i = 0; i < e.getLength(); i++) {
				num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
			}
			return new QRPolynomial(num, 0).mod(e);
		}
	};

	function QRRSBlock(totalCount, dataCount) {
		this.totalCount = totalCount;
		this.dataCount = dataCount;
	}
	QRRSBlock.RS_BLOCK_TABLE = [
		[1, 26, 19],
		[1, 26, 16],
		[1, 26, 13],
		[1, 26, 9],
		[1, 44, 34],
		[1, 44, 28],
		[1, 44, 22],
		[1, 44, 16],
		[1, 70, 55],
		[1, 70, 44],
		[2, 35, 17],
		[2, 35, 13],
		[1, 100, 80],
		[2, 50, 32],
		[2, 50, 24],
		[4, 25, 9],
		[1, 134, 108],
		[2, 67, 43],
		[2, 33, 15, 2, 34, 16],
		[2, 33, 11, 2, 34, 12],
		[2, 86, 68],
		[4, 43, 27],
		[4, 43, 19],
		[4, 43, 15],
		[2, 98, 78],
		[4, 49, 31],
		[2, 32, 14, 4, 33, 15],
		[4, 39, 13, 1, 40, 14],
		[2, 121, 97],
		[2, 60, 38, 2, 61, 39],
		[4, 40, 18, 2, 41, 19],
		[4, 40, 14, 2, 41, 15],
		[2, 146, 116],
		[3, 58, 36, 2, 59, 37],
		[4, 36, 16, 4, 37, 17],
		[4, 36, 12, 4, 37, 13],
		[2, 86, 68, 2, 87, 69],
		[4, 69, 43, 1, 70, 44],
		[6, 43, 19, 2, 44, 20],
		[6, 43, 15, 2, 44, 16],
		[4, 101, 81],
		[1, 80, 50, 4, 81, 51],
		[4, 50, 22, 4, 51, 23],
		[3, 36, 12, 8, 37, 13],
		[2, 116, 92, 2, 117, 93],
		[6, 58, 36, 2, 59, 37],
		[4, 46, 20, 6, 47, 21],
		[7, 42, 14, 4, 43, 15],
		[4, 133, 107],
		[8, 59, 37, 1, 60, 38],
		[8, 44, 20, 4, 45, 21],
		[12, 33, 11, 4, 34, 12],
		[3, 145, 115, 1, 146, 116],
		[4, 64, 40, 5, 65, 41],
		[11, 36, 16, 5, 37, 17],
		[11, 36, 12, 5, 37, 13],
		[5, 109, 87, 1, 110, 88],
		[5, 65, 41, 5, 66, 42],
		[5, 54, 24, 7, 55, 25],
		[11, 36, 12],
		[5, 122, 98, 1, 123, 99],
		[7, 73, 45, 3, 74, 46],
		[15, 43, 19, 2, 44, 20],
		[3, 45, 15, 13, 46, 16],
		[1, 135, 107, 5, 136, 108],
		[10, 74, 46, 1, 75, 47],
		[1, 50, 22, 15, 51, 23],
		[2, 42, 14, 17, 43, 15],
		[5, 150, 120, 1, 151, 121],
		[9, 69, 43, 4, 70, 44],
		[17, 50, 22, 1, 51, 23],
		[2, 42, 14, 19, 43, 15],
		[3, 141, 113, 4, 142, 114],
		[3, 70, 44, 11, 71, 45],
		[17, 47, 21, 4, 48, 22],
		[9, 39, 13, 16, 40, 14],
		[3, 135, 107, 5, 136, 108],
		[3, 67, 41, 13, 68, 42],
		[15, 54, 24, 5, 55, 25],
		[15, 43, 15, 10, 44, 16],
		[4, 144, 116, 4, 145, 117],
		[17, 68, 42],
		[17, 50, 22, 6, 51, 23],
		[19, 46, 16, 6, 47, 17],
		[2, 139, 111, 7, 140, 112],
		[17, 74, 46],
		[7, 54, 24, 16, 55, 25],
		[34, 37, 13],
		[4, 151, 121, 5, 152, 122],
		[4, 75, 47, 14, 76, 48],
		[11, 54, 24, 14, 55, 25],
		[16, 45, 15, 14, 46, 16],
		[6, 147, 117, 4, 148, 118],
		[6, 73, 45, 14, 74, 46],
		[11, 54, 24, 16, 55, 25],
		[30, 46, 16, 2, 47, 17],
		[8, 132, 106, 4, 133, 107],
		[8, 75, 47, 13, 76, 48],
		[7, 54, 24, 22, 55, 25],
		[22, 45, 15, 13, 46, 16],
		[10, 142, 114, 2, 143, 115],
		[19, 74, 46, 4, 75, 47],
		[28, 50, 22, 6, 51, 23],
		[33, 46, 16, 4, 47, 17],
		[8, 152, 122, 4, 153, 123],
		[22, 73, 45, 3, 74, 46],
		[8, 53, 23, 26, 54, 24],
		[12, 45, 15, 28, 46, 16],
		[3, 147, 117, 10, 148, 118],
		[3, 73, 45, 23, 74, 46],
		[4, 54, 24, 31, 55, 25],
		[11, 45, 15, 31, 46, 16],
		[7, 146, 116, 7, 147, 117],
		[21, 73, 45, 7, 74, 46],
		[1, 53, 23, 37, 54, 24],
		[19, 45, 15, 26, 46, 16],
		[5, 145, 115, 10, 146, 116],
		[19, 75, 47, 10, 76, 48],
		[15, 54, 24, 25, 55, 25],
		[23, 45, 15, 25, 46, 16],
		[13, 145, 115, 3, 146, 116],
		[2, 74, 46, 29, 75, 47],
		[42, 54, 24, 1, 55, 25],
		[23, 45, 15, 28, 46, 16],
		[17, 145, 115],
		[10, 74, 46, 23, 75, 47],
		[10, 54, 24, 35, 55, 25],
		[19, 45, 15, 35, 46, 16],
		[17, 145, 115, 1, 146, 116],
		[14, 74, 46, 21, 75, 47],
		[29, 54, 24, 19, 55, 25],
		[11, 45, 15, 46, 46, 16],
		[13, 145, 115, 6, 146, 116],
		[14, 74, 46, 23, 75, 47],
		[44, 54, 24, 7, 55, 25],
		[59, 46, 16, 1, 47, 17],
		[12, 151, 121, 7, 152, 122],
		[12, 75, 47, 26, 76, 48],
		[39, 54, 24, 14, 55, 25],
		[22, 45, 15, 41, 46, 16],
		[6, 151, 121, 14, 152, 122],
		[6, 75, 47, 34, 76, 48],
		[46, 54, 24, 10, 55, 25],
		[2, 45, 15, 64, 46, 16],
		[17, 152, 122, 4, 153, 123],
		[29, 74, 46, 14, 75, 47],
		[49, 54, 24, 10, 55, 25],
		[24, 45, 15, 46, 46, 16],
		[4, 152, 122, 18, 153, 123],
		[13, 74, 46, 32, 75, 47],
		[48, 54, 24, 14, 55, 25],
		[42, 45, 15, 32, 46, 16],
		[20, 147, 117, 4, 148, 118],
		[40, 75, 47, 7, 76, 48],
		[43, 54, 24, 22, 55, 25],
		[10, 45, 15, 67, 46, 16],
		[19, 148, 118, 6, 149, 119],
		[18, 75, 47, 31, 76, 48],
		[34, 54, 24, 34, 55, 25],
		[20, 45, 15, 61, 46, 16]
	];
	QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
		var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
		if (rsBlock == undefined) {
			throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
		}
		var length = rsBlock.length / 3;
		var list = [];
		for (var i = 0; i < length; i++) {
			var count = rsBlock[i * 3 + 0];
			var totalCount = rsBlock[i * 3 + 1];
			var dataCount = rsBlock[i * 3 + 2];
			for (var j = 0; j < count; j++) {
				list.push(new QRRSBlock(totalCount, dataCount));
			}
		}
		return list;
	};
	QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {
		switch (errorCorrectLevel) {
			case QRErrorCorrectLevel.L:
				return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
			case QRErrorCorrectLevel.M:
				return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
			case QRErrorCorrectLevel.Q:
				return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
			case QRErrorCorrectLevel.H:
				return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
			default:
				return undefined;
		}
	};

	function QRBitBuffer() {
		this.buffer = [];
		this.length = 0;
	}
	QRBitBuffer.prototype = {
		get: function(index) {
			var bufIndex = Math.floor(index / 8);
			return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) == 1;
		},
		put: function(num, length) {
			for (var i = 0; i < length; i++) {
				this.putBit(((num >>> (length - i - 1)) & 1) == 1);
			}
		},
		getLengthInBits: function() {
			return this.length;
		},
		putBit: function(bit) {
			var bufIndex = Math.floor(this.length / 8);
			if (this.buffer.length <= bufIndex) {
				this.buffer.push(0);
			}
			if (bit) {
				this.buffer[bufIndex] |= (0x80 >>> (this.length % 8));
			}
			this.length++;
		}
	};
	var QRCodeLimitLength = [
		[17, 14, 11, 7],
		[32, 26, 20, 14],
		[53, 42, 32, 24],
		[78, 62, 46, 34],
		[106, 84, 60, 44],
		[134, 106, 74, 58],
		[154, 122, 86, 64],
		[192, 152, 108, 84],
		[230, 180, 130, 98],
		[271, 213, 151, 119],
		[321, 251, 177, 137],
		[367, 287, 203, 155],
		[425, 331, 241, 177],
		[458, 362, 258, 194],
		[520, 412, 292, 220],
		[586, 450, 322, 250],
		[644, 504, 364, 280],
		[718, 560, 394, 310],
		[792, 624, 442, 338],
		[858, 666, 482, 382],
		[929, 711, 509, 403],
		[1003, 779, 565, 439],
		[1091, 857, 611, 461],
		[1171, 911, 661, 511],
		[1273, 997, 715, 535],
		[1367, 1059, 751, 593],
		[1465, 1125, 805, 625],
		[1528, 1190, 868, 658],
		[1628, 1264, 908, 698],
		[1732, 1370, 982, 742],
		[1840, 1452, 1030, 790],
		[1952, 1538, 1112, 842],
		[2068, 1628, 1168, 898],
		[2188, 1722, 1228, 958],
		[2303, 1809, 1283, 983],
		[2431, 1911, 1351, 1051],
		[2563, 1989, 1423, 1093],
		[2699, 2099, 1499, 1139],
		[2809, 2213, 1579, 1219],
		[2953, 2331, 1663, 1273]
	];

	function _isSupportCanvas() {
		return typeof CanvasRenderingContext2D != "undefined";
	}

	function _getAndroid() {
		var android = false;
		var sAgent = navigator.userAgent;
		if (/android/i.test(sAgent)) {
			android = true;
			var aMat = sAgent.toString().match(/android ([0-9]\.[0-9])/i);
			if (aMat && aMat[1]) {
				android = parseFloat(aMat[1]);
			}
		}
		return android;
	}
	var svgDrawer = (function() {
		var Drawing = function(el, htOption) {
			this._el = el;
			this._htOption = htOption;
		};
		Drawing.prototype.draw = function(oQRCode) {
			var _htOption = this._htOption;
			var _el = this._el;
			var nCount = oQRCode.getModuleCount();
			var nWidth = Math.floor(_htOption.width / nCount);
			var nHeight = Math.floor(_htOption.height / nCount);
			this.clear();

			function makeSVG(tag, attrs) {
				var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
				for (var k in attrs)
					if (attrs.hasOwnProperty(k)) el.setAttribute(k, attrs[k]);
				return el;
			}
			var svg = makeSVG("svg", {
				'viewBox': '0 0 ' + String(nCount) + " " + String(nCount),
				'width': '100%',
				'height': '100%',
				'fill': _htOption.colorLight
			});
			svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns", "http://www.w3.org/2000/svg");
			_el.appendChild(svg);
			svg.appendChild(makeSVG("rect", {
				"fill": _htOption.colorLight,
				"width": "100%",
				"height": "100%"
			}));
			var path = [];
			for (var row = 0; row < nCount; row++) {
				for (var col = 0; col < nCount; col++) {
					var width = 0;
					while (col + width < nCount && oQRCode.isDark(row, col + width))
						width++;
					if (width > 0) {
						path.push("M" + col + " " + row + "v1h" + width + "v-1z");
						col += width;
					}
				}
			}
			var child = makeSVG("path", {
				"d": path.join(""),
				"fill": _htOption.colorDark
			});
			svg.appendChild(child);
		};
		Drawing.prototype.clear = function() {
			if (this._el.hasChildNodes()) {
				var children = this._el.childNodes;
				for (var i = 0; i < children.length; i++) {
					if (children[i].nodeName == 'SVG') {
						this._el.removeChild(children[i]);
					}
				}
			}
		};
		return Drawing;
	})();
	var useSVG = document.documentElement.tagName.toLowerCase() === "svg";
	var Drawing = useSVG ? svgDrawer : !_isSupportCanvas() ? (function() {
		var Drawing = function(el, htOption) {
			this._el = el;
			this._htOption = htOption;
		};
		Drawing.prototype.draw = function(oQRCode) {
			var _htOption = this._htOption;
			var _el = this._el;
			var nCount = oQRCode.getModuleCount();
			var nWidth = Math.floor(_htOption.width / nCount);
			var nHeight = Math.floor(_htOption.height / nCount);
			var aHTML = ['<table style="border:0;border-collapse:collapse;">'];
			for (var row = 0; row < nCount; row++) {
				aHTML.push('<tr>');
				for (var col = 0; col < nCount; col++) {
					aHTML.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + nWidth + 'px;height:' +
						nHeight + 'px;background-color:' + (oQRCode.isDark(row, col) ? _htOption.colorDark : _htOption.colorLight) +
						';"></td>');
				}
				aHTML.push('</tr>');
			}
			aHTML.push('</table>');
			_el.innerHTML = aHTML.join('');
			var elTable = _el.childNodes[0];
			var nLeftMarginTable = (_htOption.width - elTable.offsetWidth) / 2;
			var nTopMarginTable = (_htOption.height - elTable.offsetHeight) / 2;
			if (nLeftMarginTable > 0 && nTopMarginTable > 0) {
				elTable.style.margin = nTopMarginTable + "px " + nLeftMarginTable + "px";
			}
		};
		Drawing.prototype.clear = function() {
			this._el.innerHTML = '';
		};
		return Drawing;
	})() : (function() {
		function _onMakeImage() {
			this._elImage.src = this._elCanvas.toDataURL("image/png");
			this._elImage.style.display = "block";
			this._elCanvas.style.display = "none";
		}
		if (this._android && this._android <= 2.1) {
			var factor = 1 / window.devicePixelRatio;
			var drawImage = CanvasRenderingContext2D.prototype.drawImage;
			CanvasRenderingContext2D.prototype.drawImage = function(image, sx, sy, sw, sh, dx, dy, dw, dh) {
				if (("nodeName" in image) && /img/i.test(image.nodeName)) {
					for (var i = arguments.length - 1; i >= 1; i--) {
						arguments[i] = arguments[i] * factor;
					}
				} else if (typeof dw == "undefined") {
					arguments[1] *= factor;
					arguments[2] *= factor;
					arguments[3] *= factor;
					arguments[4] *= factor;
				}
				drawImage.apply(this, arguments);
			};
		}

		function _safeSetDataURI(fSuccess, fFail) {
			var self = this;
			self._fFail = fFail;
			self._fSuccess = fSuccess;
			if (self._bSupportDataURI === null) {
				var el = document.createElement("img");
				var fOnError = function() {
					self._bSupportDataURI = false;
					if (self._fFail) {
						self._fFail.call(self);
					}
				};
				var fOnSuccess = function() {
					self._bSupportDataURI = true;
					if (self._fSuccess) {
						self._fSuccess.call(self);
					}
				};
				el.onabort = fOnError;
				el.onerror = fOnError;
				el.onload = fOnSuccess;
				el.src =
					"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
				return;
			} else if (self._bSupportDataURI === true && self._fSuccess) {
				self._fSuccess.call(self);
			} else if (self._bSupportDataURI === false && self._fFail) {
				self._fFail.call(self);
			}
		};
		var Drawing = function(el, htOption) {
			this._bIsPainted = false;
			this._android = _getAndroid();
			this._htOption = htOption;
			this._elCanvas = document.createElement("canvas");
			this._elCanvas.width = htOption.width + htOption.border * 2;
			this._elCanvas.height = htOption.height + htOption.border * 2;
			this._elCanvas.style.backgroundColor = htOption.colorLight;
			el.appendChild(this._elCanvas);
			this._el = el;
			this._oContext = this._elCanvas.getContext("2d");
			this._bIsPainted = false;
			this._elImage = document.createElement("img");
			this._elImage.alt = "Scan me!";
			this._elImage.style.display = "none";
			this._el.appendChild(this._elImage);
			this._bSupportDataURI = null;
		};
		Drawing.prototype.draw = function(oQRCode) {
			var _elImage = this._elImage;
			var _oContext = this._oContext;
			var _htOption = this._htOption;
			var nCount = oQRCode.getModuleCount();
			var nWidth = _htOption.width / nCount;
			var nHeight = _htOption.height / nCount;
			var nRoundedWidth = Math.round(nWidth);
			var nRoundedHeight = Math.round(nHeight);
			_elImage.style.display = "none";
			this.clear();
			for (var row = 0; row < nCount; row++) {
				for (var col = 0; col < nCount; col++) {
					var bIsDark = oQRCode.isDark(row, col);
					var nLeft = col * nWidth;
					var nTop = row * nHeight;
					_oContext.strokeStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
					_oContext.lineWidth = 1;
					_oContext.fillStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
					_oContext.fillRect(nLeft + _htOption.border, nTop + _htOption.border, nWidth, nHeight);
					_oContext.strokeRect(Math.floor(nLeft + _htOption.border) + 0.5, Math.floor(nTop + _htOption.border) + 0.5,
						nRoundedWidth, nRoundedHeight);
					_oContext.strokeRect(Math.ceil(nLeft + _htOption.border) - 0.5, Math.ceil(nTop + _htOption.border) - 0.5,
						nRoundedWidth, nRoundedHeight);
				}
			}
			this._bIsPainted = true;
		};

		function drawRoundRect(ctx, x, y, width, height, radius, lineWidth, lineColor) {
			ctx.lineWidth = lineWidth;
			ctx.strokeStyle = lineColor
			ctx.beginPath();
			ctx.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2);
			ctx.lineTo(width - radius + x, y);
			ctx.arc(width - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2);
			ctx.lineTo(width + x, height + y - radius);
			ctx.arc(width - radius + x, height - radius + y, radius, 0, Math.PI * 1 / 2);
			ctx.lineTo(radius + x, height + y);
			ctx.arc(radius + x, height - radius + y, radius, Math.PI * 1 / 2, Math.PI);
			ctx.closePath();
			ctx.stroke();
		};
		Drawing.prototype.addIcon = async function(iconSrc) {
			const image = await new Promise((resolve, reject) => {
				const image = new Image();
				image.crossOrigin = "anonymous";
				image.src = iconSrc;
				image.onload = () => {
					resolve(image);
				};
			});
			const ratio = 0.275;
			const radius = 10;
			const marginRatio = (1 - ratio) / 2;
			const x = this._htOption.width * marginRatio + this._htOption.border;
			const y = this._htOption.height * marginRatio + this._htOption.border;
			const width = this._htOption.width * ratio;
			const height = this._htOption.height * ratio;
			drawRoundRect(this._oContext, x, y, width, height, this._htOption.iconRadius, this._htOption.iconBorderWidth,
				this._htOption.iconBorderColor);
			this._oContext.clip();
			this._oContext.drawImage(image, x, y, width, height);
			this._oContext.restore();
		};
		Drawing.prototype.makeImage = function() {
			if (this._bIsPainted) {
				_safeSetDataURI.call(this, _onMakeImage);
			}
		};
		Drawing.prototype.isPainted = function() {
			return this._bIsPainted;
		};
		Drawing.prototype.clear = function() {
			this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
			if (this._htOption.hasBg) {
				this._oContext.fillStyle = this._htOption.colorLight;
				this._oContext.fillRect(0, 0, this._elCanvas.width, this._elCanvas.height);
			}
			this._bIsPainted = false;
		};
		Drawing.prototype.round = function(nNumber) {
			if (!nNumber) {
				return nNumber;
			}
			return Math.floor(nNumber * 1000) / 1000;
		};
		return Drawing;
	})();

	function _getTypeNumber(sText, nCorrectLevel) {
		var nType = 1;
		var length = _getUTF8Length(sText);
		for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
			var nLimit = 0;
			switch (nCorrectLevel) {
				case QRErrorCorrectLevel.L:
					nLimit = QRCodeLimitLength[i][0];
					break;
				case QRErrorCorrectLevel.M:
					nLimit = QRCodeLimitLength[i][1];
					break;
				case QRErrorCorrectLevel.Q:
					nLimit = QRCodeLimitLength[i][2];
					break;
				case QRErrorCorrectLevel.H:
					nLimit = QRCodeLimitLength[i][3];
					break;
			}
			if (length <= nLimit) {
				break;
			} else {
				nType++;
			}
		}
		if (nType > QRCodeLimitLength.length) {
			throw new Error("Too long data");
		}
		return nType;
	}

	function _getUTF8Length(sText) {
		var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
		return replacedText.length + (replacedText.length != sText ? 3 : 0);
	}
	QRCode = function(el, vOption) {
		if (el === undefined) {
			console.error('QRCode: `el` is undefined.');
			return false;
		}
		this._htOption = {
			showTitle: false,
			width: 256,
			height: 256,
			typeNumber: 4,
			colorDark: "#000000",
			colorLight: "#ffffff",
			correctLevel: QRErrorCorrectLevel.H,
			border: 20,
			hasBg: true,
			iconSrc: null,
			iconBorderWidth: 0,
			iconBorderColor: "#ffffff",
		};
		if (typeof vOption === 'string') {
			vOption = {
				text: vOption
			};
		}
		if (vOption) {
			for (var i in vOption) {
				this._htOption[i] = vOption[i];
			}
		}
		if (typeof el == "string") {
			el = document.getElementById(el);
		}
		var Drawer = this._htOption.useSVG ? svgDrawer : Drawing;
		this._android = _getAndroid();
		this._el = el;
		this._oQRCode = null;
		this._oDrawing = new Drawer(this._el, this._htOption);
		if (this._htOption.text) {
			this.makeCode(this._htOption.text);
		}
	};
	QRCode.prototype.makeCode = async function(sText) {
		this._oQRCode = new QRCodeModel(_getTypeNumber(sText, this._htOption.correctLevel), this._htOption.correctLevel);
		this._oQRCode.addData(sText);
		this._oQRCode.make();
		if (this._htOption.showTitle === true && sText) {
			this._el.title = sText;
		}
		this._oDrawing.draw(this._oQRCode);
		if (this._htOption.iconSrc != undefined && typeof this._oDrawing.addIcon === 'function') {
			await this._oDrawing.addIcon(this._htOption.iconSrc);
		}
		this.makeImage();
	};
	QRCode.prototype.makeImage = function() {
		if (typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3)) {
			this._oDrawing.makeImage();
		}
	};
	QRCode.prototype.clear = function() {
		this._oDrawing.clear();
	};
	QRCode.CorrectLevel = QRErrorCorrectLevel;
})();
! function(t, o) {
	"function" == typeof define && define.amd ? define(o) : "object" == typeof exports ? module.exports = o() : t.tingle =
		o()
}(this, function() {
	function t(t) {
		var o = {
			onClose: null,
			onOpen: null,
			beforeOpen: null,
			beforeClose: null,
			stickyFooter: !1,
			footer: !1,
			cssClass: [],
			closeLabel: "Close",
			closeMethods: ["overlay", "button", "escape"]
		};
		this.opts = r({}, o, t), this.init()
	}

	function o() {
		this.modalBoxFooter && (this.modalBoxFooter.style.width = this.modalBox.clientWidth + "px", this.modalBoxFooter.style
			.left = this.modalBox.offsetLeft + "px")
	}

	function e() {
		this.modal = document.createElement("div"), this.modal.classList.add("tingle-modal"), 0 !== this.opts.closeMethods.length &&
			-1 !== this.opts.closeMethods.indexOf("overlay") || this.modal.classList.add("tingle-modal--noOverlayClose"), this.modal
			.style.display = "none", this.opts.cssClass.forEach(function(t) {
				"string" == typeof t && this.modal.classList.add(t)
			}, this), -1 !== this.opts.closeMethods.indexOf("button") && (this.modalCloseBtn = document.createElement("button"),
				this.modalCloseBtn.type = "button", this.modalCloseBtn.classList.add("tingle-modal__close"), this.modalCloseBtnIcon =
				document.createElement("span"), this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"), this.modalCloseBtnIcon
				.innerHTML = "×", this.modalCloseBtnLabel = document.createElement("span"), this.modalCloseBtnLabel.classList.add(
					"tingle-modal__closeLabel"), this.modalCloseBtnLabel.innerHTML = this.opts.closeLabel, this.modalCloseBtn.appendChild(
					this.modalCloseBtnIcon), this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)), this.modalBox = document.createElement(
				"div"), this.modalBox.classList.add("tingle-modal-box"), this.modalBoxContent = document.createElement("div"),
			this.modalBoxContent.classList.add("tingle-modal-box__content"), this.modalBox.appendChild(this.modalBoxContent), -
			1 !== this.opts.closeMethods.indexOf("button") && this.modal.appendChild(this.modalCloseBtn), this.modal.appendChild(
				this.modalBox)
	}

	function s() {
		this.modalBoxFooter = document.createElement("div"), this.modalBoxFooter.classList.add("tingle-modal-box__footer"),
			this.modalBox.appendChild(this.modalBoxFooter)
	}

	function i() {
		this._events = {
				clickCloseBtn: this.close.bind(this),
				clickOverlay: l.bind(this),
				resize: this.checkOverflow.bind(this),
				keyboardNav: n.bind(this)
			}, -1 !== this.opts.closeMethods.indexOf("button") && this.modalCloseBtn.addEventListener("click", this._events.clickCloseBtn),
			this.modal.addEventListener("mousedown", this._events.clickOverlay), window.addEventListener("resize", this._events
				.resize), document.addEventListener("keydown", this._events.keyboardNav)
	}

	function n(t) {
		-1 !== this.opts.closeMethods.indexOf("escape") && 27 === t.which && this.isOpen() && this.close()
	}

	function l(t) {
		-1 !== this.opts.closeMethods.indexOf("overlay") && !d(t.target, "tingle-modal") && t.clientX < this.modal.clientWidth &&
			this.close()
	}

	function d(t, o) {
		for (;
			(t = t.parentElement) && !t.classList.contains(o););
		return t
	}

	function a() {
		-1 !== this.opts.closeMethods.indexOf("button") && this.modalCloseBtn.removeEventListener("click", this._events.clickCloseBtn),
			this.modal.removeEventListener("mousedown", this._events.clickOverlay), window.removeEventListener("resize", this._events
				.resize), document.removeEventListener("keydown", this._events.keyboardNav)
	}

	function r() {
		for (var t = 1; t < arguments.length; t++)
			for (var o in arguments[t]) arguments[t].hasOwnProperty(o) && (arguments[0][o] = arguments[t][o]);
		return arguments[0]
	}
	var h = function() {
			var t, o = document.createElement("tingle-test-transition"),
				e = {
					transition: "transitionend",
					OTransition: "oTransitionEnd",
					MozTransition: "transitionend",
					WebkitTransition: "webkitTransitionEnd"
				};
			for (t in e)
				if (void 0 !== o.style[t]) return e[t]
		}(),
		c = !1;
	return t.prototype.init = function() {
		if (!this.modal) return e.call(this), i.call(this), document.body.insertBefore(this.modal, document.body.firstChild),
			this.opts.footer && this.addFooter(), this
	}, t.prototype._busy = function(t) {
		c = t
	}, t.prototype._isBusy = function() {
		return c
	}, t.prototype.destroy = function() {
		null !== this.modal && (this.isOpen() && this.close(!0), a.call(this), this.modal.parentNode.removeChild(this.modal),
			this.modal = null)
	}, t.prototype.isOpen = function() {
		return !!this.modal.classList.contains("tingle-modal--visible")
	}, t.prototype.open = function() {
		if (!this._isBusy()) {
			this._busy(!0);
			var t = this;
			return "function" == typeof t.opts.beforeOpen && t.opts.beforeOpen(), this.modal.style.removeProperty ? this.modal
				.style.removeProperty("display") : this.modal.style.removeAttribute("display"), this._scrollPosition = window.pageYOffset,
				document.body.classList.add("tingle-enabled"), document.body.style.top = -this._scrollPosition + "px", this.setStickyFooter(
					this.opts.stickyFooter), this.modal.classList.add("tingle-modal--visible"), h ? this.modal.addEventListener(h,
					function o() {
						"function" == typeof t.opts.onOpen && t.opts.onOpen.call(t), t.modal.removeEventListener(h, o, !1), t._busy(!1)
					}, !1) : ("function" == typeof t.opts.onOpen && t.opts.onOpen.call(t), t._busy(!1)), this.checkOverflow(), this
		}
	}, t.prototype.close = function(t) {
		if (!this._isBusy()) {
			if (this._busy(!0), t = t || !1, "function" == typeof this.opts.beforeClose) {
				if (!this.opts.beforeClose.call(this)) return
			}
			document.body.classList.remove("tingle-enabled"), window.scrollTo(0, this._scrollPosition), document.body.style.top =
				null, this.modal.classList.remove("tingle-modal--visible");
			var o = this;
			t ? (o.modal.style.display = "none", "function" == typeof o.opts.onClose && o.opts.onClose.call(this), o._busy(!1)) :
				h ? this.modal.addEventListener(h, function t() {
					o.modal.removeEventListener(h, t, !1), o.modal.style.display = "none", "function" == typeof o.opts.onClose && o
						.opts.onClose.call(this), o._busy(!1)
				}, !1) : (o.modal.style.display = "none", "function" == typeof o.opts.onClose && o.opts.onClose.call(this), o._busy(
					!1))
		}
	}, t.prototype.setContent = function(t) {
		return "string" == typeof t ? this.modalBoxContent.innerHTML = t : (this.modalBoxContent.innerHTML = "", this.modalBoxContent
			.appendChild(t)), this.isOpen() && this.checkOverflow(), this
	}, t.prototype.getContent = function() {
		return this.modalBoxContent
	}, t.prototype.addFooter = function() {
		return s.call(this), this
	}, t.prototype.setFooterContent = function(t) {
		return this.modalBoxFooter.innerHTML = t, this
	}, t.prototype.getFooterContent = function() {
		return this.modalBoxFooter
	}, t.prototype.setStickyFooter = function(t) {
		return this.isOverflow() || (t = !1), t ? this.modalBox.contains(this.modalBoxFooter) && (this.modalBox.removeChild(
				this.modalBoxFooter), this.modal.appendChild(this.modalBoxFooter), this.modalBoxFooter.classList.add(
				"tingle-modal-box__footer--sticky"), o.call(this), this.modalBoxContent.style["padding-bottom"] = this.modalBoxFooter
			.clientHeight + 20 + "px") : this.modalBoxFooter && (this.modalBox.contains(this.modalBoxFooter) || (this.modal.removeChild(
				this.modalBoxFooter), this.modalBox.appendChild(this.modalBoxFooter), this.modalBoxFooter.style.width = "auto",
			this.modalBoxFooter.style.left = "", this.modalBoxContent.style["padding-bottom"] = "", this.modalBoxFooter.classList
			.remove("tingle-modal-box__footer--sticky"))), this
	}, t.prototype.addFooterBtn = function(t, o, e) {
		var s = document.createElement("button");
		return s.innerHTML = t, s.addEventListener("click", e), "string" == typeof o && o.length && o.split(" ").forEach(
			function(t) {
				s.classList.add(t)
			}), this.modalBoxFooter.appendChild(s), s
	}, t.prototype.resize = function() {
		console.warn("Resize is deprecated and will be removed in version 1.0")
	}, t.prototype.isOverflow = function() {
		var t = window.innerHeight;
		return this.modalBox.clientHeight >= t
	}, t.prototype.checkOverflow = function() {
		this.modal.classList.contains("tingle-modal--visible") && (this.isOverflow() ? this.modal.classList.add(
				"tingle-modal--overflow") : this.modal.classList.remove("tingle-modal--overflow"), !this.isOverflow() && this.opts
			.stickyFooter ? this.setStickyFooter(!1) : this.isOverflow() && this.opts.stickyFooter && (o.call(this), this.setStickyFooter(
				!0)))
	}, {
		modal: t
	}
});
var modal = class {
	constructor(content = '', options = {}) {
		if (!window.jQuery) {
			throw "jQuery is required.";
		}
		if (typeof tingle === 'undefined') {
			throw "tingle modal lib is required.";
		}
		var onOpen = null;
		if (options.onOpen) {
			onOpen = options.onOpen;
			delete options.onOpen;
		}
		var footerButtons = [];
		if (options.footerButtons) {
			footerButtons = options.footerButtons;
			delete options.footerButtons;
		}
		this.options = {
			footer: false,
			stickyFooter: false,
			closeMethods: ['button', 'escape'],
			closeLabel: "Close",
			onOpen: function() {
				if (this.opts.closeMethods && $.inArray('button', this.opts.closeMethods) !== -1) {
					var close = document.querySelector(".tingle-modal--visible > .tingle-modal__close");
					if (close) {
						document.querySelector(".tingle-modal--visible .tingle-modal-box__content").appendChild(close);
					}
				}
				if (onOpen && typeof onOpen === 'function') {
					onOpen();
				}
			},
			cssClass: ['modal-container'],
		}
		$.extend(this.options, options);
		this.modal = new tingle.modal(this.options);
		this.modal.setContent(content);
		if (footerButtons) {
			for (let footerBtn of footerButtons) {
				let callback = footerBtn.callback;
				if (typeof callback === 'function') {
					callback = callback.bind(this.modal);
				}
				this.modal.addFooterBtn(footerBtn.label, footerBtn.cssClass, callback);
			}
		}
	}
	open() {
		this.modal.open();
		return this;
	}
	close() {
		this.modal.close();
		return this;
	}
	destroy() {
		this.modal.destroy();
		this.modal = null;
		return this;
	}
};
(function(e, t) {
	'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define &&
		define.amd ? define(t) : e.Popper = t()
})(this, function() {
	'use strict';

	function e(e) {
		return e && '[object Function]' === {}.toString.call(e)
	}

	function t(e, t) {
		if (1 !== e.nodeType) return [];
		var o = e.ownerDocument.defaultView,
			n = o.getComputedStyle(e, null);
		return t ? n[t] : n
	}

	function o(e) {
		return 'HTML' === e.nodeName ? e : e.parentNode || e.host
	}

	function n(e) {
		if (!e) return document.body;
		switch (e.nodeName) {
			case 'HTML':
			case 'BODY':
				return e.ownerDocument.body;
			case '#document':
				return e.body;
		}
		var i = t(e),
			r = i.overflow,
			p = i.overflowX,
			s = i.overflowY;
		return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
	}

	function r(e) {
		return 11 === e ? pe : 10 === e ? se : pe || se
	}

	function p(e) {
		if (!e) return document.documentElement;
		for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;) n = (e = e.nextElementSibling)
			.offsetParent;
		var i = n && n.nodeName;
		return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n,
			'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
	}

	function s(e) {
		var t = e.nodeName;
		return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
	}

	function d(e) {
		return null === e.parentNode ? e : d(e.parentNode)
	}

	function a(e, t) {
		if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
		var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
			n = o ? e : t,
			i = o ? t : e,
			r = document.createRange();
		r.setStart(n, 0), r.setEnd(i, 0);
		var l = r.commonAncestorContainer;
		if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
		var f = d(e);
		return f.host ? a(f.host, t) : a(e, d(t).host)
	}

	function l(e) {
		var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
			o = 'top' === t ? 'scrollTop' : 'scrollLeft',
			n = e.nodeName;
		if ('BODY' === n || 'HTML' === n) {
			var i = e.ownerDocument.documentElement,
				r = e.ownerDocument.scrollingElement || i;
			return r[o]
		}
		return e[o]
	}

	function f(e, t) {
		var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
			n = l(t, 'top'),
			i = l(t, 'left'),
			r = o ? -1 : 1;
		return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e
	}

	function m(e, t) {
		var o = 'x' === t ? 'Left' : 'Top',
			n = 'Left' == o ? 'Right' : 'Bottom';
		return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
	}

	function h(e, t, o, n) {
		return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o[
			'offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' ===
			e ? 'Bottom' : 'Right')]) : 0)
	}

	function c(e) {
		var t = e.body,
			o = e.documentElement,
			n = r(10) && getComputedStyle(o);
		return {
			height: h('Height', t, o, n),
			width: h('Width', t, o, n)
		}
	}

	function g(e) {
		return fe({}, e, {
			right: e.left + e.width,
			bottom: e.top + e.height
		})
	}

	function u(e) {
		var o = {};
		try {
			if (r(10)) {
				o = e.getBoundingClientRect();
				var n = l(e, 'top'),
					i = l(e, 'left');
				o.top += n, o.left += i, o.bottom += n, o.right += i
			} else o = e.getBoundingClientRect()
		} catch (t) {}
		var p = {
				left: o.left,
				top: o.top,
				width: o.right - o.left,
				height: o.bottom - o.top
			},
			s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {},
			d = s.width || e.clientWidth || p.right - p.left,
			a = s.height || e.clientHeight || p.bottom - p.top,
			f = e.offsetWidth - d,
			h = e.offsetHeight - a;
		if (f || h) {
			var u = t(e);
			f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h
		}
		return g(p)
	}

	function b(e, o) {
		var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
			p = r(10),
			s = 'HTML' === o.nodeName,
			d = u(e),
			a = u(o),
			l = n(e),
			m = t(o),
			h = parseFloat(m.borderTopWidth, 10),
			c = parseFloat(m.borderLeftWidth, 10);
		i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0));
		var b = g({
			top: d.top - a.top - h,
			left: d.left - a.left - c,
			width: d.width,
			height: d.height
		});
		if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
			var w = parseFloat(m.marginTop, 10),
				y = parseFloat(m.marginLeft, 10);
			b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y
		}
		return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b
	}

	function w(e) {
		var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
			o = e.ownerDocument.documentElement,
			n = b(e, o),
			i = ee(o.clientWidth, window.innerWidth || 0),
			r = ee(o.clientHeight, window.innerHeight || 0),
			p = t ? 0 : l(o),
			s = t ? 0 : l(o, 'left'),
			d = {
				top: p - n.top + n.marginTop,
				left: s - n.left + n.marginLeft,
				width: i,
				height: r
			};
		return g(d)
	}

	function y(e) {
		var n = e.nodeName;
		return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || y(o(e))
	}

	function E(e) {
		if (!e || !e.parentElement || r()) return document.documentElement;
		for (var o = e.parentElement; o && 'none' === t(o, 'transform');) o = o.parentElement;
		return o || document.documentElement
	}

	function v(e, t, i, r) {
		var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
			s = {
				top: 0,
				left: 0
			},
			d = p ? E(e) : a(e, t);
		if ('viewport' === r) s = w(d, p);
		else {
			var l;
			'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' ===
				r ? l = e.ownerDocument.documentElement : l = r;
			var f = b(l, d, p);
			if ('HTML' === l.nodeName && !y(d)) {
				var m = c(e.ownerDocument),
					h = m.height,
					g = m.width;
				s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left
			} else s = f
		}
		i = i || 0;
		var u = 'number' == typeof i;
		return s.left += u ? i : i.left || 0, s.top += u ? i : i.top || 0, s.right -= u ? i : i.right || 0, s.bottom -= u ?
			i : i.bottom || 0, s
	}

	function x(e) {
		var t = e.width,
			o = e.height;
		return t * o
	}

	function O(e, t, o, n, i) {
		var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
		if (-1 === e.indexOf('auto')) return e;
		var p = v(o, n, r, i),
			s = {
				top: {
					width: p.width,
					height: t.top - p.top
				},
				right: {
					width: p.right - t.right,
					height: p.height
				},
				bottom: {
					width: p.width,
					height: p.bottom - t.bottom
				},
				left: {
					width: t.left - p.left,
					height: p.height
				}
			},
			d = Object.keys(s).map(function(e) {
				return fe({
					key: e
				}, s[e], {
					area: x(s[e])
				})
			}).sort(function(e, t) {
				return t.area - e.area
			}),
			a = d.filter(function(e) {
				var t = e.width,
					n = e.height;
				return t >= o.clientWidth && n >= o.clientHeight
			}),
			l = 0 < a.length ? a[0].key : d[0].key,
			f = e.split('-')[1];
		return l + (f ? '-' + f : '')
	}

	function L(e, t, o) {
		var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
			i = n ? E(t) : a(t, o);
		return b(o, i, n)
	}

	function S(e) {
		var t = e.ownerDocument.defaultView,
			o = t.getComputedStyle(e),
			n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
			i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
			r = {
				width: e.offsetWidth + i,
				height: e.offsetHeight + n
			};
		return r
	}

	function T(e) {
		var t = {
			left: 'right',
			right: 'left',
			bottom: 'top',
			top: 'bottom'
		};
		return e.replace(/left|right|bottom|top/g, function(e) {
			return t[e]
		})
	}

	function D(e, t, o) {
		o = o.split('-')[0];
		var n = S(e),
			i = {
				width: n.width,
				height: n.height
			},
			r = -1 !== ['right', 'left'].indexOf(o),
			p = r ? 'top' : 'left',
			s = r ? 'left' : 'top',
			d = r ? 'height' : 'width',
			a = r ? 'width' : 'height';
		return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i
	}

	function C(e, t) {
		return Array.prototype.find ? e.find(t) : e.filter(t)[0]
	}

	function N(e, t, o) {
		if (Array.prototype.findIndex) return e.findIndex(function(e) {
			return e[t] === o
		});
		var n = C(e, function(e) {
			return e[t] === o
		});
		return e.indexOf(n)
	}

	function P(t, o, n) {
		var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
		return i.forEach(function(t) {
			t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
			var n = t['function'] || t.fn;
			t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(
				o, t))
		}), o
	}

	function k() {
		if (!this.state.isDestroyed) {
			var e = {
				instance: this,
				styles: {},
				arrowStyles: {},
				attributes: {},
				flipped: !1,
				offsets: {}
			};
			e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options
					.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this
					.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed,
				e.offsets.popper = D(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ?
				'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !
					0, this.options.onCreate(e))
		}
	}

	function W(e, t) {
		return e.some(function(e) {
			var o = e.name,
				n = e.enabled;
			return n && o === t
		})
	}

	function H(e) {
		for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
			var i = t[n],
				r = i ? '' + i + o : e;
			if ('undefined' != typeof document.body.style[r]) return r
		}
		return null
	}

	function B() {
		return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'),
				this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right =
				'', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[H('transform')] = ''),
			this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
	}

	function A(e) {
		var t = e.ownerDocument;
		return t ? t.defaultView : window
	}

	function M(e, t, o, i) {
		var r = 'BODY' === e.nodeName,
			p = r ? e.ownerDocument.defaultView : e;
		p.addEventListener(t, o, {
			passive: !0
		}), r || M(n(p.parentNode), t, o, i), i.push(p)
	}

	function F(e, t, o, i) {
		o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {
			passive: !0
		});
		var r = n(e);
		return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
	}

	function I() {
		this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate))
	}

	function R(e, t) {
		return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) {
			e.removeEventListener('scroll', t.updateBound)
		}), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
	}

	function U() {
		this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state))
	}

	function Y(e) {
		return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
	}

	function j(e, t) {
		Object.keys(t).forEach(function(o) {
			var n = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[
				o] = t[o] + n
		})
	}

	function V(e, t) {
		Object.keys(t).forEach(function(o) {
			var n = t[o];
			!1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
		})
	}

	function q(e, t) {
		var o = e.offsets,
			n = o.popper,
			i = o.reference,
			r = -1 !== ['left', 'right'].indexOf(e.placement),
			p = -1 !== e.placement.indexOf('-'),
			s = i.width % 2 == n.width % 2,
			d = 1 == i.width % 2 && 1 == n.width % 2,
			a = function(e) {
				return e
			},
			l = t ? r || p || s ? $ : Z : a,
			f = t ? $ : a;
		return {
			left: l(d && !p && t ? n.left - 1 : n.left),
			top: f(n.top),
			bottom: f(n.bottom),
			right: l(n.right)
		}
	}

	function K(e, t, o) {
		var n = C(e, function(e) {
				var o = e.name;
				return o === t
			}),
			i = !!n && e.some(function(e) {
				return e.name === o && e.enabled && e.order < n.order
			});
		if (!i) {
			var r = '`' + t + '`';
			console.warn('`' + o + '`' + ' modifier is required by ' + r +
				' modifier in order to work, be sure to include it before ' + r + '!')
		}
		return i
	}

	function z(e) {
		return 'end' === e ? 'start' : 'start' === e ? 'end' : e
	}

	function G(e) {
		var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
			o = ce.indexOf(e),
			n = ce.slice(o + 1).concat(ce.slice(0, o));
		return t ? n.reverse() : n
	}

	function _(e, t, o, n) {
		var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
			r = +i[1],
			p = i[2];
		if (!r) return e;
		if (0 === p.indexOf('%')) {
			var s;
			switch (p) {
				case '%p':
					s = o;
					break;
				case '%':
				case '%r':
				default:
					s = n;
			}
			var d = g(s);
			return d[t] / 100 * r
		}
		if ('vh' === p || 'vw' === p) {
			var a;
			return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement
				.clientWidth, window.innerWidth || 0), a / 100 * r
		}
		return r
	}

	function X(e, t, o, n) {
		var i = [0, 0],
			r = -1 !== ['right', 'left'].indexOf(n),
			p = e.split(/(\+|\-)/).map(function(e) {
				return e.trim()
			}),
			s = p.indexOf(C(p, function(e) {
				return -1 !== e.search(/,|\s/)
			}));
		p[s] && -1 === p[s].indexOf(',') && console.warn(
			'Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
		var d = /\s*,\s*|\s+/,
			a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
		return a = a.map(function(e, n) {
			var i = (1 === n ? !r : r) ? 'height' : 'width',
				p = !1;
			return e.reduce(function(e, t) {
				return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length -
					1] += t, p = !1, e) : e.concat(t)
			}, []).map(function(e) {
				return _(e, i, t, o)
			})
		}), a.forEach(function(e, t) {
			e.forEach(function(o, n) {
				Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
			})
		}), i
	}

	function J(e, t) {
		var o, n = t.offset,
			i = e.placement,
			r = e.offsets,
			p = r.popper,
			s = r.reference,
			d = i.split('-')[0];
		return o = Y(+n) ? [+n, 0] : X(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top +=
			o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top +=
			o[1]), e.popper = p, e
	}
	for (var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = 'undefined' != typeof window &&
			'undefined' != typeof document, oe = ['Edge', 'Trident', 'Firefox'], ne = 0, ie = 0; ie < oe.length; ie += 1)
		if (te && 0 <= navigator.userAgent.indexOf(oe[ie])) {
			ne = 1;
			break
		} var i = te && window.Promise,
		re = i ? function(e) {
			var t = !1;
			return function() {
				t || (t = !0, window.Promise.resolve().then(function() {
					t = !1, e()
				}))
			}
		} : function(e) {
			var t = !1;
			return function() {
				t || (t = !0, setTimeout(function() {
					t = !1, e()
				}, ne))
			}
		},
		pe = te && !!(window.MSInputMethodContext && document.documentMode),
		se = te && /MSIE 10/.test(navigator.userAgent),
		de = function(e, t) {
			if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
		},
		ae = function() {
			function e(e, t) {
				for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in
					o && (o.writable = !0), Object.defineProperty(e, o.key, o)
			}
			return function(t, o, n) {
				return o && e(t.prototype, o), n && e(t, n), t
			}
		}(),
		le = function(e, t, o) {
			return t in e ? Object.defineProperty(e, t, {
				value: o,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = o, e
		},
		fe = Object.assign || function(e) {
			for (var t, o = 1; o < arguments.length; o++)
				for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
			return e
		},
		me = te && /Firefox/i.test(navigator.userAgent),
		he = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end',
			'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'
		],
		ce = he.slice(3),
		ge = {
			FLIP: 'flip',
			CLOCKWISE: 'clockwise',
			COUNTERCLOCKWISE: 'counterclockwise'
		},
		ue = function() {
			function t(o, n) {
				var i = this,
					r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
				de(this, t), this.scheduleUpdate = function() {
						return requestAnimationFrame(i.update)
					}, this.update = re(this.update.bind(this)), this.options = fe({}, t.Defaults, r), this.state = {
						isDestroyed: !1,
						isCreated: !1,
						scrollParents: []
					}, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {},
					Object.keys(fe({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
						i.options.modifiers[e] = fe({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
					}), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
						return fe({
							name: e
						}, i.options.modifiers[e])
					}).sort(function(e, t) {
						return e.order - t.order
					}), this.modifiers.forEach(function(t) {
						t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
					}), this.update();
				var p = this.options.eventsEnabled;
				p && this.enableEventListeners(), this.state.eventsEnabled = p
			}
			return ae(t, [{
				key: 'update',
				value: function() {
					return k.call(this)
				}
			}, {
				key: 'destroy',
				value: function() {
					return B.call(this)
				}
			}, {
				key: 'enableEventListeners',
				value: function() {
					return I.call(this)
				}
			}, {
				key: 'disableEventListeners',
				value: function() {
					return U.call(this)
				}
			}]), t
		}();
	return ue.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ue.placements = he, ue.Defaults = {
		placement: 'bottom',
		positionFixed: !1,
		eventsEnabled: !0,
		removeOnDestroy: !1,
		onCreate: function() {},
		onUpdate: function() {},
		modifiers: {
			shift: {
				order: 100,
				enabled: !0,
				fn: function(e) {
					var t = e.placement,
						o = t.split('-')[0],
						n = t.split('-')[1];
					if (n) {
						var i = e.offsets,
							r = i.reference,
							p = i.popper,
							s = -1 !== ['bottom', 'top'].indexOf(o),
							d = s ? 'left' : 'top',
							a = s ? 'width' : 'height',
							l = {
								start: le({}, d, r[d]),
								end: le({}, d, r[d] + r[a] - p[a])
							};
						e.offsets.popper = fe({}, p, l[n])
					}
					return e
				}
			},
			offset: {
				order: 200,
				enabled: !0,
				fn: J,
				offset: 0
			},
			preventOverflow: {
				order: 300,
				enabled: !0,
				fn: function(e, t) {
					var o = t.boundariesElement || p(e.instance.popper);
					e.instance.reference === o && (o = p(o));
					var n = H('transform'),
						i = e.instance.popper.style,
						r = i.top,
						s = i.left,
						d = i[n];
					i.top = '', i.left = '', i[n] = '';
					var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
					i.top = r, i.left = s, i[n] = d, t.boundaries = a;
					var l = t.priority,
						f = e.offsets.popper,
						m = {
							primary: function(e) {
								var o = f[e];
								return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), le({}, e, o)
							},
							secondary: function(e) {
								var o = 'right' === e ? 'left' : 'top',
									n = f[o];
								return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))),
									le({}, o, n)
							}
						};
					return l.forEach(function(e) {
						var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
						f = fe({}, f, m[t](e))
					}), e.offsets.popper = f, e
				},
				priority: ['left', 'right', 'top', 'bottom'],
				padding: 5,
				boundariesElement: 'scrollParent'
			},
			keepTogether: {
				order: 400,
				enabled: !0,
				fn: function(e) {
					var t = e.offsets,
						o = t.popper,
						n = t.reference,
						i = e.placement.split('-')[0],
						r = Z,
						p = -1 !== ['top', 'bottom'].indexOf(i),
						s = p ? 'right' : 'bottom',
						d = p ? 'left' : 'top',
						a = p ? 'width' : 'height';
					return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
						e
				}
			},
			arrow: {
				order: 500,
				enabled: !0,
				fn: function(e, o) {
					var n;
					if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
					var i = o.element;
					if ('string' == typeof i) {
						if (i = e.instance.popper.querySelector(i), !i) return e;
					} else if (!e.instance.popper.contains(i)) return console.warn(
						'WARNING: `arrow.element` must be child of its popper element!'), e;
					var r = e.placement.split('-')[0],
						p = e.offsets,
						s = p.popper,
						d = p.reference,
						a = -1 !== ['left', 'right'].indexOf(r),
						l = a ? 'height' : 'width',
						f = a ? 'Top' : 'Left',
						m = f.toLowerCase(),
						h = a ? 'left' : 'top',
						c = a ? 'bottom' : 'right',
						u = S(i)[l];
					d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] +
						u - s[c]), e.offsets.popper = g(e.offsets.popper);
					var b = d[m] + d[l] / 2 - u / 2,
						w = t(e.instance.popper),
						y = parseFloat(w['margin' + f], 10),
						E = parseFloat(w['border' + f + 'Width'], 10),
						v = b - e.offsets.popper[m] - y - E;
					return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, le(n, m, $(v)), le(n, h, ''),
						n), e
				},
				element: '[x-arrow]'
			},
			flip: {
				order: 600,
				enabled: !0,
				fn: function(e, t) {
					if (W(e.instance.modifiers, 'inner')) return e;
					if (e.flipped && e.placement === e.originalPlacement) return e;
					var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
						n = e.placement.split('-')[0],
						i = T(n),
						r = e.placement.split('-')[1] || '',
						p = [];
					switch (t.behavior) {
						case ge.FLIP:
							p = [n, i];
							break;
						case ge.CLOCKWISE:
							p = G(n);
							break;
						case ge.COUNTERCLOCKWISE:
							p = G(n, !0);
							break;
						default:
							p = t.behavior;
					}
					return p.forEach(function(s, d) {
						if (n !== s || p.length === d + 1) return e;
						n = e.placement.split('-')[0], i = T(n);
						var a = e.offsets.popper,
							l = e.offsets.reference,
							f = Z,
							m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a
								.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
							h = f(a.left) < f(o.left),
							c = f(a.right) > f(o.right),
							g = f(a.top) < f(o.top),
							u = f(a.bottom) > f(o.bottom),
							b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
							w = -1 !== ['top', 'bottom'].indexOf(n),
							y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g ||
								!w && 'end' === r && u);
						(m || b || y) && (e.flipped = !0, (m || b) && (n = p[d + 1]), y && (r = z(r)), e.placement = n + (r ? '-' +
								r : ''), e.offsets.popper = fe({}, e.offsets.popper, D(e.instance.popper, e.offsets.reference, e.placement)),
							e = P(e.instance.modifiers, e, 'flip'))
					}), e
				},
				behavior: 'flip',
				padding: 5,
				boundariesElement: 'viewport'
			},
			inner: {
				order: 700,
				enabled: !1,
				fn: function(e) {
					var t = e.placement,
						o = t.split('-')[0],
						n = e.offsets,
						i = n.popper,
						r = n.reference,
						p = -1 !== ['left', 'right'].indexOf(o),
						s = -1 === ['top', 'left'].indexOf(o);
					return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper =
						g(i), e
				}
			},
			hide: {
				order: 800,
				enabled: !0,
				fn: function(e) {
					if (!K(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
					var t = e.offsets.reference,
						o = C(e.instance.modifiers, function(e) {
							return 'preventOverflow' === e.name
						}).boundaries;
					if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
						if (!0 === e.hide) return e;
						e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
					} else {
						if (!1 === e.hide) return e;
						e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
					}
					return e
				}
			},
			computeStyle: {
				order: 850,
				enabled: !0,
				fn: function(e, t) {
					var o = t.x,
						n = t.y,
						i = e.offsets.popper,
						r = C(e.instance.modifiers, function(e) {
							return 'applyStyle' === e.name
						}).gpuAcceleration;
					void 0 !== r && console.warn(
						'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
					);
					var s, d, a = void 0 === r ? t.gpuAcceleration : r,
						l = p(e.instance.popper),
						f = u(l),
						m = {
							position: i.position
						},
						h = q(e, 2 > window.devicePixelRatio || !me),
						c = 'bottom' === o ? 'top' : 'bottom',
						g = 'right' === n ? 'left' : 'right',
						b = H('transform');
					if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s =
						'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] =
						'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';
					else {
						var w = 'bottom' == c ? -1 : 1,
							y = 'right' == g ? -1 : 1;
						m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g
					}
					var E = {
						"x-placement": e.placement
					};
					return e.attributes = fe({}, E, e.attributes), e.styles = fe({}, m, e.styles), e.arrowStyles = fe({}, e.offsets
						.arrow, e.arrowStyles), e
				},
				gpuAcceleration: !0,
				x: 'bottom',
				y: 'right'
			},
			applyStyle: {
				order: 900,
				enabled: !0,
				fn: function(e) {
					return j(e.instance.popper, e.styles), V(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles)
						.length && j(e.arrowElement, e.arrowStyles), e
				},
				onLoad: function(e, t, o, n, i) {
					var r = L(i, t, e, o.positionFixed),
						p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
					return t.setAttribute('x-placement', p), j(t, {
						position: o.positionFixed ? 'fixed' : 'absolute'
					}), o
				},
				gpuAcceleration: void 0
			}
		}
	}, ue
});;
(function(a, b) {
	'object' == typeof exports && 'undefined' != typeof module ? module.exports = b(require('popper.js')) : 'function' ==
		typeof define && define.amd ? define(['popper.js'], b) : a.Tooltip = b(a.Popper)
})(this, function(a) {
	'use strict';

	function b(a) {
		return a && '[object Function]' === {}.toString.call(a)
	}
	a = a && a.hasOwnProperty('default') ? a['default'] : a;
	var c = function(a, b) {
			if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function')
		},
		d = function() {
			function a(a, b) {
				for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, 'value' in
					c && (c.writable = !0), Object.defineProperty(a, c.key, c)
			}
			return function(b, c, d) {
				return c && a(b.prototype, c), d && a(b, d), b
			}
		}(),
		e = Object.assign || function(a) {
			for (var b, c = 1; c < arguments.length; c++)
				for (var d in b = arguments[c], b) Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
			return a
		},
		f = {
			container: !1,
			delay: 0,
			html: !1,
			placement: 'top',
			title: '',
			template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			trigger: 'hover focus',
			offset: 0,
			arrowSelector: '.tooltip-arrow, .tooltip__arrow',
			innerSelector: '.tooltip-inner, .tooltip__inner'
		},
		g = function() {
			function g(a, b) {
				c(this, g), h.call(this), b = e({}, f, b), a.jquery && (a = a[0]), this.reference = a, this.options = b;
				var d = 'string' == typeof b.trigger ? b.trigger.split(' ').filter(function(a) {
					return -1 !== ['click', 'hover', 'focus'].indexOf(a)
				}) : [];
				this._isOpen = !1, this._popperOptions = {}, this._setEventListeners(a, d, b)
			}
			return d(g, [{
				key: '_create',
				value: function(a, b, c, d) {
					var e = window.document.createElement('div');
					e.innerHTML = b.trim();
					var f = e.childNodes[0];
					f.id = 'tooltip_' + Math.random().toString(36).substr(2, 10), f.setAttribute('aria-hidden', 'false');
					var g = e.querySelector(this.options.innerSelector);
					return this._addTitleContent(a, c, d, g), f
				}
			}, {
				key: '_addTitleContent',
				value: function(a, c, d, e) {
					if (1 === c.nodeType || 11 === c.nodeType) d && e.appendChild(c);
					else if (b(c)) {
						var f = c.call(a);
						d ? e.innerHTML = f : e.textContent = f
					} else d ? e.innerHTML = c : e.textContent = c
				}
			}, {
				key: '_show',
				value: function(b, c) {
					if (this._isOpen && !this._isOpening) return this;
					if (this._isOpen = !0, this._tooltipNode) return this._tooltipNode.style.visibility = 'visible', this._tooltipNode
						.setAttribute('aria-hidden', 'false'), this.popperInstance.update(), this;
					var d = b.getAttribute('title') || c.title;
					if (!d) return this;
					var f = this._create(b, c.template, d, c.html);
					b.setAttribute('aria-describedby', f.id);
					var g = this._findContainer(c.container, b);
					return this._append(f, g), this._popperOptions = e({}, c.popperOptions, {
						placement: c.placement
					}), this._popperOptions.modifiers = e({}, this._popperOptions.modifiers, {
						arrow: {
							element: this.options.arrowSelector
						},
						offset: {
							offset: c.offset
						}
					}), c.boundariesElement && (this._popperOptions.modifiers.preventOverflow = {
						boundariesElement: c.boundariesElement
					}), this.popperInstance = new a(b, f, this._popperOptions), this._tooltipNode = f, this
				}
			}, {
				key: '_hide',
				value: function() {
					return this._isOpen ? (this._isOpen = !1, this._tooltipNode.style.visibility = 'hidden', this._tooltipNode.setAttribute(
						'aria-hidden', 'true'), this) : this
				}
			}, {
				key: '_dispose',
				value: function() {
					var a = this;
					return this._events.forEach(function(b) {
						var c = b.func,
							d = b.event;
						a.reference.removeEventListener(d, c)
					}), this._events = [], this._tooltipNode && (this._hide(), this.popperInstance.destroy(), !this.popperInstance
						.options.removeOnDestroy && (this._tooltipNode.parentNode.removeChild(this._tooltipNode), this._tooltipNode =
							null)), this
				}
			}, {
				key: '_findContainer',
				value: function(a, b) {
					return 'string' == typeof a ? a = window.document.querySelector(a) : !1 === a && (a = b.parentNode), a
				}
			}, {
				key: '_append',
				value: function(a, b) {
					b.appendChild(a)
				}
			}, {
				key: '_setEventListeners',
				value: function(a, b, c) {
					var d = this,
						e = [],
						f = [];
					b.forEach(function(a) {
						'hover' === a ? (e.push('mouseenter'), f.push('mouseleave')) : 'focus' === a ? (e.push('focus'), f.push(
							'blur')) : 'click' === a ? (e.push('click'), f.push('click')) : void 0
					}), e.forEach(function(b) {
						var e = function(b) {
							!0 === d._isOpening || (b.usedByTooltip = !0, d._scheduleShow(a, c.delay, c, b))
						};
						d._events.push({
							event: b,
							func: e
						}), a.addEventListener(b, e)
					}), f.forEach(function(b) {
						var f = function(b) {
							!0 === b.usedByTooltip || d._scheduleHide(a, c.delay, c, b)
						};
						d._events.push({
							event: b,
							func: f
						}), a.addEventListener(b, f), 'click' === b && c.closeOnClickOutside && document.addEventListener(
							'mousedown',
							function(b) {
								if (d._isOpening) {
									var c = d.popperInstance.popper;
									a.contains(b.target) || c.contains(b.target) || f(b)
								}
							}, !0)
					})
				}
			}, {
				key: '_scheduleShow',
				value: function(a, b, c) {
					var d = this;
					this._isOpening = !0;
					var e = b && b.show || b || 0;
					this._showTimeout = window.setTimeout(function() {
						return d._show(a, c)
					}, e)
				}
			}, {
				key: '_scheduleHide',
				value: function(a, b, c, d) {
					var e = this;
					this._isOpening = !1;
					var f = b && b.hide || b || 0;
					window.setTimeout(function() {
						if ((window.clearTimeout(e._showTimeout), !1 !== e._isOpen) && document.body.contains(e._tooltipNode)) {
							if ('mouseleave' === d.type) {
								var f = e._setTooltipNodeEvent(d, a, b, c);
								if (f) return
							}
							e._hide(a, c)
						}
					}, f)
				}
			}, {
				key: '_updateTitleContent',
				value: function(a) {
					if ('undefined' == typeof this._tooltipNode) return void('undefined' != typeof this.options.title && (this.options
						.title = a));
					var b = this._tooltipNode.parentNode.querySelector(this.options.innerSelector);
					this._clearTitleContent(b, this.options.html, this.reference.getAttribute('title') || this.options.title),
						this._addTitleContent(this.reference, a, this.options.html, b), this.options.title = a, this.popperInstance.update()
				}
			}, {
				key: '_clearTitleContent',
				value: function(a, b, c) {
					1 === c.nodeType || 11 === c.nodeType ? b && a.removeChild(c) : b ? a.innerHTML = '' : a.textContent = ''
				}
			}]), g
		}(),
		h = function() {
			var a = this;
			this.show = function() {
				return a._show(a.reference, a.options)
			}, this.hide = function() {
				return a._hide()
			}, this.dispose = function() {
				return a._dispose()
			}, this.toggle = function() {
				return a._isOpen ? a.hide() : a.show()
			}, this.updateTitleContent = function(b) {
				return a._updateTitleContent(b)
			}, this._events = [], this._setTooltipNodeEvent = function(b, c, d, e) {
				var f = b.relatedreference || b.toElement || b.relatedTarget;
				return !!a._tooltipNode.contains(f) && (a._tooltipNode.addEventListener(b.type, function d(f) {
					var g = f.relatedreference || f.toElement || f.relatedTarget;
					a._tooltipNode.removeEventListener(b.type, d), c.contains(g) || a._scheduleHide(c, e.delay, e, f)
				}), !0)
			}
		};
	return g
});;
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ?
	self : {},
	Prism = function(g) {
		var c = /\blang(?:uage)?-([\w-]+)\b/i,
			a = 0,
			C = {
				manual: g.Prism && g.Prism.manual,
				disableWorkerMessageHandler: g.Prism && g.Prism.disableWorkerMessageHandler,
				util: {
					encode: function(e) {
						return e instanceof M ? new M(e.type, C.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(C.util.encode) :
							e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
					},
					type: function(e) {
						return Object.prototype.toString.call(e).slice(8, -1)
					},
					objId: function(e) {
						return e.__id || Object.defineProperty(e, "__id", {
							value: ++a
						}), e.__id
					},
					clone: function n(e, t) {
						var r, a, i = C.util.type(e);
						switch (t = t || {}, i) {
							case "Object":
								if (a = C.util.objId(e), t[a]) return t[a];
								for (var l in r = {}, t[a] = r, e) e.hasOwnProperty(l) && (r[l] = n(e[l], t));
								return r;
							case "Array":
								return a = C.util.objId(e), t[a] ? t[a] : (r = [], t[a] = r, e.forEach(function(e, a) {
									r[a] = n(e, t)
								}), r);
							default:
								return e
						}
					}
				},
				languages: {
					extend: function(e, a) {
						var n = C.util.clone(C.languages[e]);
						for (var t in a) n[t] = a[t];
						return n
					},
					insertBefore: function(n, e, a, t) {
						var r = (t = t || C.languages)[n],
							i = {};
						for (var l in r)
							if (r.hasOwnProperty(l)) {
								if (l == e)
									for (var o in a) a.hasOwnProperty(o) && (i[o] = a[o]);
								a.hasOwnProperty(l) || (i[l] = r[l])
							} var s = t[n];
						return t[n] = i, C.languages.DFS(C.languages, function(e, a) {
							a === s && e != n && (this[e] = i)
						}), i
					},
					DFS: function e(a, n, t, r) {
						r = r || {};
						var i = C.util.objId;
						for (var l in a)
							if (a.hasOwnProperty(l)) {
								n.call(a, l, a[l], t || l);
								var o = a[l],
									s = C.util.type(o);
								"Object" !== s || r[i(o)] ? "Array" !== s || r[i(o)] || (r[i(o)] = !0, e(o, n, l, r)) : (r[i(o)] = !0, e(o, n,
									null, r))
							}
					}
				},
				plugins: {},
				highlightAll: function(e, a) {
					C.highlightAllUnder(document, e, a)
				},
				highlightAllUnder: function(e, a, n) {
					var t = {
						callback: n,
						selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
					};
					C.hooks.run("before-highlightall", t);
					for (var r, i = t.elements || e.querySelectorAll(t.selector), l = 0; r = i[l++];) C.highlightElement(r, !0 === a,
						t.callback)
				},
				highlightElement: function(e, a, n) {
					for (var t, r = "none", i = e; i && !c.test(i.className);) i = i.parentNode;
					i && (r = (i.className.match(c) || [, "none"])[1].toLowerCase(), t = C.languages[r]), e.className = e.className.replace(
						c, "").replace(/\s+/g, " ") + " language-" + r, e.parentNode && (i = e.parentNode, /pre/i.test(i.nodeName) && (
						i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r));
					var l = {
							element: e,
							language: r,
							grammar: t,
							code: e.textContent
						},
						o = function(e) {
							l.highlightedCode = e, C.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, C.hooks.run(
								"after-highlight", l), C.hooks.run("complete", l), n && n.call(l.element)
						};
					if (C.hooks.run("before-sanity-check", l), l.code)
						if (C.hooks.run("before-highlight", l), l.grammar)
							if (a && g.Worker) {
								var s = new Worker(C.filename);
								s.onmessage = function(e) {
									o(e.data)
								}, s.postMessage(JSON.stringify({
									language: l.language,
									code: l.code,
									immediateClose: !0
								}))
							} else o(C.highlight(l.code, l.grammar, l.language));
					else o(C.util.encode(l.code));
					else C.hooks.run("complete", l)
				},
				highlight: function(e, a, n) {
					var t = {
						code: e,
						grammar: a,
						language: n
					};
					return C.hooks.run("before-tokenize", t), t.tokens = C.tokenize(t.code, t.grammar), C.hooks.run("after-tokenize",
						t), M.stringify(C.util.encode(t.tokens), t.language)
				},
				matchGrammar: function(e, a, n, t, r, i, l) {
					for (var o in n)
						if (n.hasOwnProperty(o) && n[o]) {
							if (o == l) return;
							var s = n[o];
							s = "Array" === C.util.type(s) ? s : [s];
							for (var g = 0; g < s.length; ++g) {
								var c = s[g],
									u = c.inside,
									h = !!c.lookbehind,
									f = !!c.greedy,
									d = 0,
									m = c.alias;
								if (f && !c.pattern.global) {
									var p = c.pattern.toString().match(/[imuy]*$/)[0];
									c.pattern = RegExp(c.pattern.source, p + "g")
								}
								c = c.pattern || c;
								for (var y = t, v = r; y < a.length; v += a[y].length, ++y) {
									var k = a[y];
									if (a.length > e.length) return;
									if (!(k instanceof M)) {
										if (f && y != a.length - 1) {
											if (c.lastIndex = v, !(x = c.exec(e))) break;
											for (var b = x.index + (h ? x[1].length : 0), w = x.index + x[0].length, A = y, P = v, O = a.length; A < O &&
												(P < w || !a[A].type && !a[A - 1].greedy); ++A)(P += a[A].length) <= b && (++y, v = P);
											if (a[y] instanceof M) continue;
											N = A - y, k = e.slice(v, P), x.index -= v
										} else {
											c.lastIndex = 0;
											var x = c.exec(k),
												N = 1
										}
										if (x) {
											h && (d = x[1] ? x[1].length : 0);
											w = (b = x.index + d) + (x = x[0].slice(d)).length;
											var j = k.slice(0, b),
												S = k.slice(w),
												E = [y, N];
											j && (++y, v += j.length, E.push(j));
											var _ = new M(o, u ? C.tokenize(x, u) : x, m, x, f);
											if (E.push(_), S && E.push(S), Array.prototype.splice.apply(a, E), 1 != N && C.matchGrammar(e, a, n, y, v,
													!0, o), i) break
										} else if (i) break
									}
								}
							}
						}
				},
				tokenize: function(e, a) {
					var n = [e],
						t = a.rest;
					if (t) {
						for (var r in t) a[r] = t[r];
						delete a.rest
					}
					return C.matchGrammar(e, n, a, 0, 0, !1), n
				},
				hooks: {
					all: {},
					add: function(e, a) {
						var n = C.hooks.all;
						n[e] = n[e] || [], n[e].push(a)
					},
					run: function(e, a) {
						var n = C.hooks.all[e];
						if (n && n.length)
							for (var t, r = 0; t = n[r++];) t(a)
					}
				},
				Token: M
			};

		function M(e, a, n, t, r) {
			this.type = e, this.content = a, this.alias = n, this.length = 0 | (t || "").length, this.greedy = !!r
		}
		if (g.Prism = C, M.stringify = function(e, a) {
				if ("string" == typeof e) return e;
				if (Array.isArray(e)) return e.map(function(e) {
					return M.stringify(e, a)
				}).join("");
				var n = {
					type: e.type,
					content: M.stringify(e.content, a),
					tag: "span",
					classes: ["token", e.type],
					attributes: {},
					language: a
				};
				if (e.alias) {
					var t = Array.isArray(e.alias) ? e.alias : [e.alias];
					Array.prototype.push.apply(n.classes, t)
				}
				C.hooks.run("wrap", n);
				var r = Object.keys(n.attributes).map(function(e) {
					return e + '="' + (n.attributes[e] || "").replace(/"/g, "&quot;") + '"'
				}).join(" ");
				return "<" + n.tag + ' class="' + n.classes.join(" ") + '"' + (r ? " " + r : "") + ">" + n.content + "</" + n.tag +
					">"
			}, !g.document) return g.addEventListener && (C.disableWorkerMessageHandler || g.addEventListener("message",
			function(e) {
				var a = JSON.parse(e.data),
					n = a.language,
					t = a.code,
					r = a.immediateClose;
				g.postMessage(C.highlight(t, C.languages[n], n)), r && g.close()
			}, !1)), C;
		var e = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
		return e && (C.filename = e.src, C.manual || e.hasAttribute("data-manual") || ("loading" !== document.readyState ?
			window.requestAnimationFrame ? window.requestAnimationFrame(C.highlightAll) : window.setTimeout(C.highlightAll, 16) :
			document.addEventListener("DOMContentLoaded", C.highlightAll))), C
	}(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism =
	Prism);
Prism.languages.markup = {
		comment: /<!--[\s\S]*?-->/,
		prolog: /<\?[\s\S]+?\?>/,
		doctype: /<!DOCTYPE[\s\S]+?>/i,
		cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
		tag: {
			pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
			greedy: !0,
			inside: {
				tag: {
					pattern: /^<\/?[^\s>\/]+/i,
					inside: {
						punctuation: /^<\/?/,
						namespace: /^[^\s>\/:]+:/
					}
				},
				"attr-value": {
					pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
					inside: {
						punctuation: [/^=/, {
							pattern: /^(\s*)["']|["']$/,
							lookbehind: !0
						}]
					}
				},
				punctuation: /\/?>/,
				"attr-name": {
					pattern: /[^\s>\/]+/,
					inside: {
						namespace: /^[^\s>\/:]+:/
					}
				}
			}
		},
		entity: /&#?[\da-z]{1,8};/i
	}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add(
		"wrap",
		function(a) {
			"entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
		}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
		value: function(a, e) {
			var s = {};
			s["language-" + e] = {
				pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
				lookbehind: !0,
				inside: Prism.languages[e]
			}, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
			var n = {
				"included-cdata": {
					pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
					inside: s
				}
			};
			n["language-" + e] = {
				pattern: /[\s\S]+/,
				inside: Prism.languages[e]
			};
			var i = {};
			i[a] = {
				pattern: RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g, a),
					"i"),
				lookbehind: !0,
				greedy: !0,
				inside: n
			}, Prism.languages.insertBefore("markup", "cdata", i)
		}
	}), Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.html = Prism.languages.markup, Prism.languages
	.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
! function(s) {
	var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
	s.languages.css = {
		comment: /\/\*[\s\S]*?\*\//,
		atrule: {
			pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
			inside: {
				rule: /@[\w-]+/
			}
		},
		url: {
			pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"),
			inside: {
				function: /^url/i,
				punctuation: /^\(|\)$/
			}
		},
		selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
		string: {
			pattern: t,
			greedy: !0
		},
		property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
		important: /!important\b/i,
		function: /[-a-z0-9]+(?=\()/i,
		punctuation: /[(){};:,]/
	}, s.languages.css.atrule.inside.rest = s.languages.css;
	var e = s.languages.markup;
	e && (e.tag.addInlined("style", "css"), s.languages.insertBefore("inside", "attr-value", {
		"style-attr": {
			pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
			inside: {
				"attr-name": {
					pattern: /^\s*style/i,
					inside: e.tag.inside
				},
				punctuation: /^\s*=\s*['"]|['"]\s*$/,
				"attr-value": {
					pattern: /.+/i,
					inside: s.languages.css
				}
			},
			alias: "language-css"
		}
	}, e.tag))
}(Prism);
Prism.languages.clike = {
	comment: [{
		pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
		lookbehind: !0
	}, {
		pattern: /(^|[^\\:])\/\/.*/,
		lookbehind: !0,
		greedy: !0
	}],
	string: {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: !0
	},
	"class-name": {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
		lookbehind: !0,
		inside: {
			punctuation: /[.\\]/
		}
	},
	keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	boolean: /\b(?:true|false)\b/,
	function: /\w+(?=\()/,
	number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
		"class-name": [Prism.languages.clike["class-name"], {
			pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
			lookbehind: !0
		}],
		keyword: [{
			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
			lookbehind: !0
		}, {
			pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: !0
		}],
		number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
		function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
		operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
	}), Prism.languages.javascript["class-name"][0].pattern =
	/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript",
		"keyword", {
			regex: {
				pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
				lookbehind: !0,
				greedy: !0
			},
			"function-variable": {
				pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
				alias: "function"
			},
			parameter: [{
				pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
				lookbehind: !0,
				inside: Prism.languages.javascript
			}, {
				pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
				inside: Prism.languages.javascript
			}, {
				pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
				lookbehind: !0,
				inside: Prism.languages.javascript
			}, {
				pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
				lookbehind: !0,
				inside: Prism.languages.javascript
			}],
			constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
		}), Prism.languages.insertBefore("javascript", "string", {
		"template-string": {
			pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|[^\\`])*`/,
			greedy: !0,
			inside: {
				interpolation: {
					pattern: /\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
					inside: {
						"interpolation-punctuation": {
							pattern: /^\${|}$/,
							alias: "punctuation"
						},
						rest: Prism.languages.javascript
					}
				},
				string: /[\s\S]+/
			}
		}
	}), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js =
	Prism.languages.javascript;
Prism.languages.c = Prism.languages.extend("clike", {
	"class-name": {
		pattern: /(\b(?:enum|struct)\s+)\w+/,
		lookbehind: !0
	},
	keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
	operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
	number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
}), Prism.languages.insertBefore("c", "string", {
	macro: {
		pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
		lookbehind: !0,
		alias: "property",
		inside: {
			string: {
				pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
				lookbehind: !0
			},
			directive: {
				pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
				lookbehind: !0,
				alias: "keyword"
			}
		}
	},
	constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
}), delete Prism.languages.c.boolean;
! function(h) {
	function v(e, n) {
		return "___" + e.toUpperCase() + n + "___"
	}
	Object.defineProperties(h.languages["markup-templating"] = {}, {
		buildPlaceholders: {
			value: function(a, r, e, o) {
				if (a.language === r) {
					var c = a.tokenStack = [];
					a.code = a.code.replace(e, function(e) {
						if ("function" == typeof o && !o(e)) return e;
						for (var n, t = c.length; - 1 !== a.code.indexOf(n = v(r, t));) ++t;
						return c[t] = e, n
					}), a.grammar = h.languages.markup
				}
			}
		},
		tokenizePlaceholders: {
			value: function(p, k) {
				if (p.language === k && p.tokenStack) {
					p.grammar = h.languages[k];
					var m = 0,
						d = Object.keys(p.tokenStack);
					! function e(n) {
						for (var t = 0; t < n.length && !(m >= d.length); t++) {
							var a = n[t];
							if ("string" == typeof a || a.content && "string" == typeof a.content) {
								var r = d[m],
									o = p.tokenStack[r],
									c = "string" == typeof a ? a : a.content,
									i = v(k, r),
									u = c.indexOf(i);
								if (-1 < u) {
									++m;
									var g = c.substring(0, u),
										l = new h.Token(k, h.tokenize(o, p.grammar), "language-" + k, o),
										s = c.substring(u + i.length),
										f = [];
									g && f.push.apply(f, e([g])), f.push(l), s && f.push.apply(f, e([s])), "string" == typeof a ? n.splice.apply(
										n, [t, 1].concat(f)) : a.content = f
								}
							} else a.content && e(a.content)
						}
						return n
					}(p.tokens)
				}
			}
		}
	})
}(Prism);
! function(n) {
	n.languages.php = n.languages.extend("clike", {
		keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
		boolean: {
			pattern: /\b(?:false|true)\b/i,
			alias: "constant"
		},
		constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
		comment: {
			pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
			lookbehind: !0
		}
	}), n.languages.insertBefore("php", "string", {
		"shell-comment": {
			pattern: /(^|[^\\])#.*/,
			lookbehind: !0,
			alias: "comment"
		}
	}), n.languages.insertBefore("php", "comment", {
		delimiter: {
			pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
			alias: "important"
		}
	}), n.languages.insertBefore("php", "keyword", {
		variable: /\$+(?:\w+\b|(?={))/i,
		package: {
			pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
			lookbehind: !0,
			inside: {
				punctuation: /\\/
			}
		}
	}), n.languages.insertBefore("php", "operator", {
		property: {
			pattern: /(->)[\w]+/,
			lookbehind: !0
		}
	});
	var e = {
		pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
		lookbehind: !0,
		inside: {
			rest: n.languages.php
		}
	};
	n.languages.insertBefore("php", "string", {
		"nowdoc-string": {
			pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
			greedy: !0,
			alias: "string",
			inside: {
				delimiter: {
					pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
					alias: "symbol",
					inside: {
						punctuation: /^<<<'?|[';]$/
					}
				}
			}
		},
		"heredoc-string": {
			pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
			greedy: !0,
			alias: "string",
			inside: {
				delimiter: {
					pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
					alias: "symbol",
					inside: {
						punctuation: /^<<<"?|[";]$/
					}
				},
				interpolation: e
			}
		},
		"single-quoted-string": {
			pattern: /'(?:\\[\s\S]|[^\\'])*'/,
			greedy: !0,
			alias: "string"
		},
		"double-quoted-string": {
			pattern: /"(?:\\[\s\S]|[^\\"])*"/,
			greedy: !0,
			alias: "string",
			inside: {
				interpolation: e
			}
		}
	}), delete n.languages.php.string, n.hooks.add("before-tokenize", function(e) {
		if (/<\?/.test(e.code)) {
			n.languages["markup-templating"].buildPlaceholders(e, "php",
				/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi
			)
		}
	}), n.hooks.add("after-tokenize", function(e) {
		n.languages["markup-templating"].tokenizePlaceholders(e, "php")
	})
}(Prism);
Prism.languages.markdown = Prism.languages.extend("markup", {}), Prism.languages.insertBefore("markdown", "prolog", {
	blockquote: {
		pattern: /^>(?:[\t ]*>)*/m,
		alias: "punctuation"
	},
	code: [{
		pattern: /^(?: {4}|\t).+/m,
		alias: "keyword"
	}, {
		pattern: /``.+?``|`[^`\n]+`/,
		alias: "keyword"
	}, {
		pattern: /^```[\s\S]*?^```$/m,
		greedy: !0,
		inside: {
			"code-block": {
				pattern: /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
				lookbehind: !0
			},
			"code-language": {
				pattern: /^(```).+/,
				lookbehind: !0
			},
			punctuation: /```/
		}
	}],
	title: [{
		pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)/,
		alias: "important",
		inside: {
			punctuation: /==+$|--+$/
		}
	}, {
		pattern: /(^\s*)#+.+/m,
		lookbehind: !0,
		alias: "important",
		inside: {
			punctuation: /^#+|#+$/
		}
	}],
	hr: {
		pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
		lookbehind: !0,
		alias: "punctuation"
	},
	list: {
		pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
		lookbehind: !0,
		alias: "punctuation"
	},
	"url-reference": {
		pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
		inside: {
			variable: {
				pattern: /^(!?\[)[^\]]+/,
				lookbehind: !0
			},
			string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
			punctuation: /^[\[\]!:]|[<>]/
		},
		alias: "url"
	},
	bold: {
		pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
		lookbehind: !0,
		greedy: !0,
		inside: {
			punctuation: /^\*\*|^__|\*\*$|__$/
		}
	},
	italic: {
		pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
		lookbehind: !0,
		greedy: !0,
		inside: {
			punctuation: /^[*_]|[*_]$/
		}
	},
	strike: {
		pattern: /(^|[^\\])(~~?)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
		lookbehind: !0,
		greedy: !0,
		inside: {
			punctuation: /^~~?|~~?$/
		}
	},
	url: {
		pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
		inside: {
			variable: {
				pattern: /(!?\[)[^\]]+(?=\]$)/,
				lookbehind: !0
			},
			string: {
				pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
			}
		}
	}
}), ["bold", "italic", "strike"].forEach(function(a) {
	["url", "bold", "italic", "strike"].forEach(function(n) {
		a !== n && (Prism.languages.markdown[a].inside[n] = Prism.languages.markdown[n])
	})
}), Prism.hooks.add("after-tokenize", function(n) {
	"markdown" !== n.language && "md" !== n.language || ! function n(a) {
		if (a && "string" != typeof a)
			for (var t = 0, e = a.length; t < e; t++) {
				var r = a[t];
				if ("code" === r.type) {
					var i = r.content[1],
						o = r.content[3];
					if (i && o && "code-language" === i.type && "code-block" === o.type && "string" == typeof i.content) {
						var s = "language-" + i.content.trim().split(/\s+/)[0].toLowerCase();
						o.alias ? "string" == typeof o.alias ? o.alias = [o.alias, s] : o.alias.push(s) : o.alias = [s]
					}
				} else n(r.content)
			}
	}(n.tokens)
}), Prism.hooks.add("wrap", function(n) {
	if ("code-block" === n.type) {
		for (var a = "", t = 0, e = n.classes.length; t < e; t++) {
			var r = n.classes[t],
				i = /language-(.+)/.exec(r);
			if (i) {
				a = i[1];
				break
			}
		}
		var o = Prism.languages[a];
		if (o) {
			var s = n.content.replace(/&lt;/g, "<").replace(/&amp;/g, "&");
			n.content = Prism.highlight(s, o, a)
		}
	}
}), Prism.languages.md = Prism.languages.markdown;
Prism.languages.sql = {
	comment: {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
		lookbehind: !0
	},
	variable: [{
		pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
		greedy: !0
	}, /@[\w.$]+/],
	string: {
		pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
		greedy: !0,
		lookbehind: !0
	},
	function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
	keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
	boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
	number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
	operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
	punctuation: /[;[\]()`,.]/
};
! function(E) {
	var A = E.languages.plsql = E.languages.extend("sql", {
			comment: [/\/\*[\s\S]*?\*\//, /--.*/]
		}),
		T = A.keyword;
	Array.isArray(T) || (T = A.keyword = [T]), T.unshift(
		/\b(?:ACCESS|AGENT|AGGREGATE|ARRAY|ARROW|AT|ATTRIBUTE|AUDIT|AUTHID|BFILE_BASE|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BYTE|CALLING|CHAR_BASE|CHARSET(?:FORM|ID)|CLOB_BASE|COLAUTH|COLLECT|CLUSTERS?|COMPILED|COMPRESS|CONSTANT|CONSTRUCTOR|CONTEXT|CRASH|CUSTOMDATUM|DANGLING|DATE_BASE|DEFINE|DETERMINISTIC|DURATION|ELEMENT|EMPTY|EXCEPTIONS?|EXCLUSIVE|EXTERNAL|FINAL|FORALL|FORM|FOUND|GENERAL|HEAP|HIDDEN|IDENTIFIED|IMMEDIATE|INCLUDING|INCREMENT|INDICATOR|INDEXES|INDICES|INFINITE|INITIAL|ISOPEN|INSTANTIABLE|INTERFACE|INVALIDATE|JAVA|LARGE|LEADING|LENGTH|LIBRARY|LIKE[24C]|LIMITED|LONG|LOOP|MAP|MAXEXTENTS|MAXLEN|MEMBER|MINUS|MLSLABEL|MULTISET|NAME|NAN|NATIVE|NEW|NOAUDIT|NOCOMPRESS|NOCOPY|NOTFOUND|NOWAIT|NUMBER(?:_BASE)?|OBJECT|OCI(?:COLL|DATE|DATETIME|DURATION|INTERVAL|LOBLOCATOR|NUMBER|RAW|REF|REFCURSOR|ROWID|STRING|TYPE)|OFFLINE|ONLINE|ONLY|OPAQUE|OPERATOR|ORACLE|ORADATA|ORGANIZATION|ORL(?:ANY|VARY)|OTHERS|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETERS?|PASCAL|PCTFREE|PIPE(?:LINED)?|PRAGMA|PRIOR|PRIVATE|RAISE|RANGE|RAW|RECORD|REF|REFERENCE|REM|REMAINDER|RESULT|RESOURCE|RETURNING|REVERSE|ROW(?:ID|NUM|TYPE)|SAMPLE|SB[124]|SEGMENT|SELF|SEPARATE|SEQUENCE|SHORT|SIZE(?:_T)?|SPARSE|SQL(?:CODE|DATA|NAME|STATE)|STANDARD|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUCCESSFUL|SYNONYM|SYSDATE|TABAUTH|TDO|THE|TIMEZONE_(?:ABBR|HOUR|MINUTE|REGION)|TRAILING|TRANSAC(?:TIONAL)?|TRUSTED|UB[124]|UID|UNDER|UNTRUSTED|VALIDATE|VALIST|VARCHAR2|VARIABLE|VARIANCE|VARRAY|VIEWS|VOID|WHENEVER|WRAPPED|ZONE)\b/i
	);
	var R = A.operator;
	Array.isArray(R) || (R = A.operator = [R]), R.unshift(/:=/)
}(Prism);
Prism.languages.yaml = {
	scalar: {
		pattern: /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
		lookbehind: !0,
		alias: "string"
	},
	comment: /#.*/,
	key: {
		pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
		lookbehind: !0,
		alias: "atrule"
	},
	directive: {
		pattern: /(^[ \t]*)%.+/m,
		lookbehind: !0,
		alias: "important"
	},
	datetime: {
		pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
		lookbehind: !0,
		alias: "number"
	},
	boolean: {
		pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
		lookbehind: !0,
		alias: "important"
	},
	null: {
		pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,
		lookbehind: !0,
		alias: "important"
	},
	string: {
		pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}|\s*#))/m,
		lookbehind: !0,
		greedy: !0
	},
	number: {
		pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
		lookbehind: !0
	},
	tag: /![^\s]+/,
	important: /[&*][\w]+/,
	punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
}, Prism.languages.yml = Prism.languages.yaml;
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
! function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define
		.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function() {
	return function(n) {
		var o = {};

		function r(t) {
			if (o[t]) return o[t].exports;
			var e = o[t] = {
				i: t,
				l: !1,
				exports: {}
			};
			return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports
		}
		return r.m = n, r.c = o, r.d = function(t, e, n) {
			r.o(t, e) || Object.defineProperty(t, e, {
				enumerable: !0,
				get: n
			})
		}, r.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, r.t = function(e, t) {
			if (1 & t && (e = r(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var n = Object.create(null);
			if (r.r(n), Object.defineProperty(n, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && "string" != typeof e)
				for (var o in e) r.d(n, o, function(t) {
					return e[t]
				}.bind(null, o));
			return n
		}, r.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return r.d(e, "a", e), e
		}, r.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, r.p = "", r(r.s = 0)
	}([function(t, e, n) {
		"use strict";
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" :
					typeof t
			},
			i = function() {
				function o(t, e) {
					for (var n = 0; n < e.length; n++) {
						var o = e[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(
							t, o.key, o)
					}
				}
				return function(t, e, n) {
					return e && o(t.prototype, e), n && o(t, n), t
				}
			}(),
			a = o(n(1)),
			c = o(n(3)),
			u = o(n(4));

		function o(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var l = function(t) {
			function o(t, e) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, o);
				var n = function(t, e) {
					if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !e || "object" != typeof e && "function" != typeof e ? t : e
				}(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
				return n.resolveOptions(e), n.listenClick(t), n
			}
			return function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError(
					"Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}(o, c.default), i(o, [{
				key: "resolveOptions",
				value: function() {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
					this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" ==
						typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this
						.defaultText, this.container = "object" === r(t.container) ? t.container : document.body
				}
			}, {
				key: "listenClick",
				value: function(t) {
					var e = this;
					this.listener = (0, u.default)(t, "click", function(t) {
						return e.onClick(t)
					})
				}
			}, {
				key: "onClick",
				value: function(t) {
					var e = t.delegateTarget || t.currentTarget;
					this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new a.default({
						action: this.action(e),
						target: this.target(e),
						text: this.text(e),
						container: this.container,
						trigger: e,
						emitter: this
					})
				}
			}, {
				key: "defaultAction",
				value: function(t) {
					return s("action", t)
				}
			}, {
				key: "defaultTarget",
				value: function(t) {
					var e = s("target", t);
					if (e) return document.querySelector(e)
				}
			}, {
				key: "defaultText",
				value: function(t) {
					return s("text", t)
				}
			}, {
				key: "destroy",
				value: function() {
					this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction =
						null)
				}
			}], [{
				key: "isSupported",
				value: function() {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
						e = "string" == typeof t ? [t] : t,
						n = !!document.queryCommandSupported;
					return e.forEach(function(t) {
						n = n && !!document.queryCommandSupported(t)
					}), n
				}
			}]), o
		}();

		function s(t, e) {
			var n = "data-clipboard-" + t;
			if (e.hasAttribute(n)) return e.getAttribute(n)
		}
		t.exports = l
	}, function(t, e, n) {
		"use strict";
		var o, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" :
					typeof t
			},
			i = function() {
				function o(t, e) {
					for (var n = 0; n < e.length; n++) {
						var o = e[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(
							t, o.key, o)
					}
				}
				return function(t, e, n) {
					return e && o(t.prototype, e), n && o(t, n), t
				}
			}(),
			a = n(2),
			c = (o = a) && o.__esModule ? o : {
				default: o
			};
		var u = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.resolveOptions(t), this.initSelection()
			}
			return i(e, [{
				key: "resolveOptions",
				value: function() {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
					this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target,
						this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
				}
			}, {
				key: "initSelection",
				value: function() {
					this.text ? this.selectFake() : this.target && this.selectTarget()
				}
			}, {
				key: "selectFake",
				value: function() {
					var t = this,
						e = "rtl" == document.documentElement.getAttribute("dir");
					this.removeFake(), this.fakeHandlerCallback = function() {
							return t.removeFake()
						}, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem =
						document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border =
						"0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position =
						"absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
					var n = window.pageYOffset || document.documentElement.scrollTop;
					this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value =
						this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, c.default)(this.fakeElem),
						this.copyText()
				}
			}, {
				key: "removeFake",
				value: function() {
					this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler =
						null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem),
						this.fakeElem = null)
				}
			}, {
				key: "selectTarget",
				value: function() {
					this.selectedText = (0, c.default)(this.target), this.copyText()
				}
			}, {
				key: "copyText",
				value: function() {
					var e = void 0;
					try {
						e = document.execCommand(this.action)
					} catch (t) {
						e = !1
					}
					this.handleResult(e)
				}
			}, {
				key: "handleResult",
				value: function(t) {
					this.emitter.emit(t ? "success" : "error", {
						action: this.action,
						text: this.selectedText,
						trigger: this.trigger,
						clearSelection: this.clearSelection.bind(this)
					})
				}
			}, {
				key: "clearSelection",
				value: function() {
					this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
				}
			}, {
				key: "destroy",
				value: function() {
					this.removeFake()
				}
			}, {
				key: "action",
				set: function() {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
					if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error(
						'Invalid "action" value, use either "copy" or "cut"')
				},
				get: function() {
					return this._action
				}
			}, {
				key: "target",
				set: function(t) {
					if (void 0 !== t) {
						if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error(
							'Invalid "target" value, use a valid Element');
						if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error(
							'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
						if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error(
							'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
						);
						this._target = t
					}
				},
				get: function() {
					return this._target
				}
			}]), e
		}();
		t.exports = u
	}, function(t, e) {
		t.exports = function(t) {
			var e;
			if ("SELECT" === t.nodeName) t.focus(), e = t.value;
			else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
				var n = t.hasAttribute("readonly");
				n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute(
					"readonly"), e = t.value
			} else {
				t.hasAttribute("contenteditable") && t.focus();
				var o = window.getSelection(),
					r = document.createRange();
				r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString()
			}
			return e
		}
	}, function(t, e) {
		function n() {}
		n.prototype = {
			on: function(t, e, n) {
				var o = this.e || (this.e = {});
				return (o[t] || (o[t] = [])).push({
					fn: e,
					ctx: n
				}), this
			},
			once: function(t, e, n) {
				var o = this;

				function r() {
					o.off(t, r), e.apply(n, arguments)
				}
				return r._ = e, this.on(t, r, n)
			},
			emit: function(t) {
				for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o <
					r; o++) n[o].fn.apply(n[o].ctx, e);
				return this
			},
			off: function(t, e) {
				var n = this.e || (this.e = {}),
					o = n[t],
					r = [];
				if (o && e)
					for (var i = 0, a = o.length; i < a; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
				return r.length ? n[t] = r : delete n[t], this
			}
		}, t.exports = n
	}, function(t, e, n) {
		var d = n(5),
			h = n(6);
		t.exports = function(t, e, n) {
			if (!t && !e && !n) throw new Error("Missing required arguments");
			if (!d.string(e)) throw new TypeError("Second argument must be a String");
			if (!d.fn(n)) throw new TypeError("Third argument must be a Function");
			if (d.node(t)) return s = e, f = n, (l = t).addEventListener(s, f), {
				destroy: function() {
					l.removeEventListener(s, f)
				}
			};
			if (d.nodeList(t)) return a = t, c = e, u = n, Array.prototype.forEach.call(a, function(t) {
				t.addEventListener(c, u)
			}), {
				destroy: function() {
					Array.prototype.forEach.call(a, function(t) {
						t.removeEventListener(c, u)
					})
				}
			};
			if (d.string(t)) return o = t, r = e, i = n, h(document.body, o, r, i);
			throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
			var o, r, i, a, c, u, l, s, f
		}
	}, function(t, n) {
		n.node = function(t) {
			return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
		}, n.nodeList = function(t) {
			var e = Object.prototype.toString.call(t);
			return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 ===
				t.length || n.node(t[0]))
		}, n.string = function(t) {
			return "string" == typeof t || t instanceof String
		}, n.fn = function(t) {
			return "[object Function]" === Object.prototype.toString.call(t)
		}
	}, function(t, e, n) {
		var a = n(7);

		function i(t, e, n, o, r) {
			var i = function(e, n, t, o) {
				return function(t) {
					t.delegateTarget = a(t.target, n), t.delegateTarget && o.call(e, t)
				}
			}.apply(this, arguments);
			return t.addEventListener(n, i, r), {
				destroy: function() {
					t.removeEventListener(n, i, r)
				}
			}
		}
		t.exports = function(t, e, n, o, r) {
			return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(
				null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype
				.map.call(t, function(t) {
					return i(t, e, n, o, r)
				}))
		}
	}, function(t, e) {
		if ("undefined" != typeof Element && !Element.prototype.matches) {
			var n = Element.prototype;
			n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
		}
		t.exports = function(t, e) {
			for (; t && 9 !== t.nodeType;) {
				if ("function" == typeof t.matches && t.matches(e)) return t;
				t = t.parentNode
			}
		}
	}])
});
let util = {
	test: {
		isEmail: function(str) {
			const regex =
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return regex.test(str);
		},
		isUrl: function(str) {
			const regex = /\b(https?):\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_|‌​]/;
			return regex.test(str);
		},
		isChinese: function(str) {
			const regex = /^[\u4e00-\u9fa5]+$/;
			return regex.test(str);
		},
		isChinesePhoneNumber: function(str) {
			const regex = /1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}/;
			return regex.test(str);
		},
		isChineseIdCardNumber: function(str) {
			const regex = /\d{17}[\d|x]/i;
			return regex.test(str);
		},
		isIPv4: function(str) {
			const regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
			return regex.test(str);
		}
	},
	array: {
		unique: function(items) {
			return [...new Set(items)];
		},
		shuffle: function(array) {
			var index = -1,
				length = array.length,
				lastIndex = length - 1;
			while (++index < length) {
				var rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
				value = array[rand];
				array[rand] = array[index];
				array[index] = value;
			}
			return array;
		}
	},
	string: {
		format: function(str) {
			if (arguments.length) {
				var t = typeof arguments[1];
				var key;
				var args = ("string" === t || "number" === t) ? Array.prototype.slice.call(arguments, 1) : arguments[1];
				for (key in args) {
					str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
				}
			}
			return str;
		},
		slugify: function(str) {
			return str.toString().toLowerCase().replace(/\s+/g, '-').replace(/"/g, '').replace(/\-\-+/g, '-').replace(/^-+/,
				'').replace(/-+$/, '');
		},
		randomId: function() {
			return Math.random().toString(36).substring(2);
		}
	},
	date: {
		format: function(date, fmt) {
			var o = {
				"M+": date.getMonth() + 1,
				"d+": date.getDate(),
				"h+": date.getHours(),
				"m+": date.getMinutes(),
				"s+": date.getSeconds(),
				"q+": Math.floor((date.getMonth() + 3) / 3),
				"S": date.getMilliseconds()
			};
			var result;
			if (/(y+)/.test(fmt)) {
				result = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
			}
			for (var k in o) {
				if (new RegExp("(" + k + ")").test(result)) {
					result = result.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
				}
			}
			return result;
		}
	},
	number: {
		byteFormat: function(fileSize) {
			var i = -1;
			var byteUnits = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
			do {
				fileSize = fileSize / 1024;
				i++;
			} while (fileSize > 1024);
			return Math.max(fileSize, 0.1).toFixed(2) + ' ' + byteUnits[i];
		}
	},
	captcha: {
		refresh: function() {
			var $captcha = $('.captcha');
			var src = $captcha.attr('src');
			src = src.substring(0, src.indexOf('t=') + 2);
			var random = Math.random().toString().substring(2);
			$captcha.attr('src', src + random);
		}
	},
	image: {
		src: function(img, rawBase64 = true) {
			if (!img) {
				return '';
			}
			var src = img.src;
			if (src === undefined) {
				return '';
			}
			var pattern = /^data:image\/(.+?);base64,(.+)/;
			if (rawBase64 && pattern.test(src)) {
				src = src.replace(pattern, '$2');
			}
			return src;
		},
		ext: function(img, withDot = false) {
			if (!img) {
				return '';
			}
			var src = img.src;
			if (src === undefined) {
				return '';
			}
			var ext = '';
			var matches = /^data:image\/(.+?);base64,(.+)/.exec(src);
			if (matches !== null) {
				ext = matches[1];
			} else {
				ext = src.substr(src.lastIndexOf('.') + 1);
			}
			return withDot ? '.' + ext : ext;
		}
	},
	download: {
		file: function(options = {}) {
			var type = options.type || null;
			if (!type) {
				throw "`type` is required.";
			}
			var $form = $('<form>', {
				action: uri.apiUrl('download/' + type),
				method: 'post'
			});
			var params = options.params || {};
			$.each(params, function(key, val) {
				$('<input>').attr({
					type: "hidden",
					name: key,
					value: val
				}).appendTo($form);
			});
			$form.appendTo('body').submit().remove();
		},
		img: function(img, options) {
			options = options || {};
			var filename = options.filename ? options.filename : '下载';
			var ext = util.image.ext(img);
			if (ext) {
				ext = '.' + ext;
			}
			var link = document.createElement('a');
			link.href = img.src;
			link.download = filename + ext;
			link.dispatchEvent(new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
				view: window
			}));
		},
		image: function(canvas, options) {
			options = options || {};
			var filename = options.filename ? options.filename : '下载';
			var ext = options.ext ? options.ext : 'png';
			var type = 'image/png';
			if (ext == 'jpg') {
				type = 'image/jpg';
			} else if (ext == 'gif') {
				type = 'image/gif';
			}
			var image = canvas.toDataURL(type, 1.0).replace(type, "image/octet-stream");
			var link = document.createElement('a');
			link.href = image;
			link.download = filename + "." + ext;
			link.dispatchEvent(new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
				view: window
			}));
		},
		svg: function(svg, options) {
			options = options || {};
			var filename = options.filename ? options.filename : '下载';
			var svgBlob = new Blob([svg], {
				type: "image/svg+xml;charset=utf-8"
			});
			var svgUrl = URL.createObjectURL(svgBlob);
			var link = document.createElement('a');
			link.href = svgUrl;
			link.download = filename + ".svg";
			link.dispatchEvent(new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
				view: window
			}));
		}
	}
};
let uri = {
	rootUrl: function() {
		let location = window.location;
		let baseUrl = location.origin;
		if (!baseUrl) {
			baseUrl = location.protocol + '//' + location.host;
		}
		baseUrl = baseUrl.replace(/\/*$/, '/');
		return baseUrl;
	},
	siteUrl: function(segment) {
		let baseUrl = this.rootUrl();
		if (segment === undefined) {
			return baseUrl;
		}
		if (util.test.isUrl(segment)) {
			return segment;
		}
		return baseUrl + segment;
	},
	apiUrl: function(segment) {
		if (segment === undefined || !segment) {
			return API_URL;
		}
		segment = segment.replace(/^\/*/, '').replace(/\/*$/, '');
		if (segment === '') {
			return API_URL;
		}
		return API_URL + '/' + segment;
	},
	prep: function(str) {
		if (!/^https?:\/\//i.test(str)) {
			return 'http://' + str;
		}
		return str;
	}
};
let http = {
	ajax: function(url, params, callback) {
		params = params || {};
		let type = params.type ? params.type : 'get',
			data = params.data ? params.data : null,
			beforeSend = params.beforeSend && typeof(params.beforeSend) === 'function' ? params.beforeSend : null;
		let isCrossDomain = params.crossDomain ? params.crossDomain : false;
		url = isCrossDomain ? url : uri.siteUrl(url);
		let option = {
			url: url,
			type: type,
			data: data,
			beforeSend: beforeSend
		};
		if (isCrossDomain) {
			$.extend(option, {
				type: 'get',
				crossDomain: true,
				dataType: 'jsonp',
				jsonpCallback: 'callback',
				success: callback
			});
		}
		let deferred = $.ajax(option);
		if (debug) {
			deferred.fail(function(data) {
				console.error('responseText: ' + data.responseText);
				console.error('status: ' + data.statusText + ' (' + data.status + ')');
			});
		}
		if (!isCrossDomain && callback !== null) {
			let always = null,
				failed = null,
				done = null;
			if (typeof(callback) == 'function') {
				done = callback;
			} else if (typeof(callback) == 'object') {
				if (callback.always && $.inArray(typeof(callback.always), ['function', 'object']) != -1) {
					always = callback.always;
				}
				if (callback.failed && $.inArray(typeof(callback.failed), ['function', 'object']) != -1) {
					failed = callback.failed;
				}
				if (callback.done && $.inArray(typeof(callback.done), ['function', 'object']) != -1) {
					done = callback.done;
				}
			}
			if (always) {
				deferred = deferred.always(always);
			}
			if (failed) {
				deferred = deferred.failed(failed);
			}
			if (done) {
				deferred = deferred.done(done);
			}
		}
		return deferred;
	},
	tool: function(name, params, callback) {
		let url = uri.apiUrl('tool/' + name);
		params = $.extend({
			type: 'post'
		}, params);
		return this.ajax(url, params, callback);
	},
	redirect: function(url, method) {
		if (method === null) {
			method = 'r';
		}
		switch (method) {
			case 'r':
				window.location.replace(url);
				break;
			case 'c':
				window.location.href = url;
				break;
			default:
				window.location.replace(url);
				break;
		}
	}
};
let dom = {
	enable: function(selector, text) {
		if (selector === null) {
			return this;
		}
		selector = typeof selector === 'string' ? $(selector) : selector;
		selector = selector.prop('disabled', false);
		if (text) {
			if (selector.is('button')) {
				selector.html(text);
			} else if (selector.is('input')) {
				selector.val(text);
			}
		}
		return this;
	},
	disable: function(selector, text) {
		if (selector === null) {
			return this;
		}
		selector = typeof selector === 'string' ? $(selector) : selector;
		selector = selector.prop('disabled', true);
		if (text) {
			if (selector.is('button')) {
				selector.html(text);
			} else if (selector.is('input')) {
				selector.val(text);
			}
		}
		return this;
	},
	scrollTo: function(selector = 'body', offset = 10, duration = 'slow') {
		selector = typeof selector === 'string' ? $(selector) : selector;
		$("html,body").stop(true, false).animate({
			scrollTop: selector.offset().top - offset
		}, duration);
	}
};
let loader = {
	scripts: function(files, callback) {
		var version = 1.01;
		var head = document.getElementsByTagName('head')[0];
		var _load_index = 0;

		function onScriptLoad(node, e, url) {
			var readyRegExp = navigator.platform === 'PLaySTATION 3' ? /^complete$/ : /^(complete|loaded)$/;
			if (e.type === 'load' || (readyRegExp.test((e.currentTarget || e.srcElement).readyState))) {
				head.removeChild(node);
				onCallback();
			}
		}

		function onCallback() {
			_load_index++;
			if (_load_index == files.length) {
				if (callback) {
					callback();
				}
			} else {
				load(files[_load_index]);
			}
		}
		var isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]';

		function load(url) {
			var node = document.createElement('script');
			node.async = true;
			node.charset = 'utf-8';
			node.src = url + '?v=' + version;
			head.appendChild(node);
			if (node.attachEvent && !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) &&
				!isOpera) {
				node.attachEvent('onreadystatechange', function(e) {
					onScriptLoad(node, e, url);
				});
			} else {
				node.addEventListener('load', function(e) {
					onScriptLoad(node, e, url);
				}, false);
			}
		}
		load(files[_load_index]);
	},
	style: function(file) {
		let style = document.createElement('link');
		style.href = file;
		style.rel = 'stylesheet';
		style.type = 'text/css';
		style.className = 'async-page-style';
		document.getElementsByTagName('head')[0].appendChild(style);
	}
};
