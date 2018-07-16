module.exports = function(e) {
 var t = {};
 function n(e) {
  return "" + ({
   0: "css-languageserver"
  }[e] || e) + ".js";
 }
 function r(t) {
  var r = n(t);
  var i = require(__dirname + "/" + r);
  var a = i.modules, o = i.ids;
  for (var s in a) {
   e[s] = a[s];
  }
 }
 var i = [ [ "GJ21" ] ];
 for (var a = 0; a < i.length; ++a) {
  var o = i[a];
  for (var s = 1; s < o.length; ++s) {
   var l = o[s];
   r(l);
  }
 }
 function c(n) {
  if (t[n]) {
   return t[n].exports;
  }
  var r = t[n] = {
   i: n,
   l: false,
   exports: {}
  };
  e[n].call(r.exports, r, r.exports, c);
  r.l = true;
  return r.exports;
 }
 c.m = e;
 c.c = t;
 c.d = function(e, t, n) {
  if (!c.o(e, t)) {
   Object.defineProperty(e, t, {
    enumerable: true,
    get: n
   });
  }
 };
 c.r = function(e) {
  if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
   Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
   });
  }
  Object.defineProperty(e, "__esModule", {
   value: true
  });
 };
 c.t = function(e, t) {
  if (t & 1) e = c(e);
  if (t & 8) return e;
  if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
  var n = Object.create(null);
  c.r(n);
  Object.defineProperty(n, "default", {
   enumerable: true,
   value: e
  });
  if (t & 2 && typeof e != "string") for (var r in e) c.d(n, r, function(t) {
   return e[t];
  }.bind(null, r));
  return n;
 };
 c.n = function(e) {
  var t = e && e.__esModule ? function t() {
   return e["default"];
  } : function t() {
   return e;
  };
  c.d(t, "a", t);
  return t;
 };
 c.o = function(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
 };
 c.p = "";
 return c(c.s = "GJ21");
}({
 "+cRy": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("owkM");
  const i = n("C+6V");
  const a = n("CcFB");
  t.ImplementationRequest = a.ImplementationRequest;
  const o = n("8ahE");
  t.TypeDefinitionRequest = o.TypeDefinitionRequest;
  const s = n("VqZt");
  t.WorkspaceFoldersRequest = s.WorkspaceFoldersRequest;
  t.DidChangeWorkspaceFoldersNotification = s.DidChangeWorkspaceFoldersNotification;
  const l = n("sKb1");
  t.ConfigurationRequest = l.ConfigurationRequest;
  const c = n("zZpG");
  t.DocumentColorRequest = c.DocumentColorRequest;
  t.ColorPresentationRequest = c.ColorPresentationRequest;
  var h;
  (function(e) {
   function t(e) {
    let t = e;
    return r.string(t.language) || r.string(t.scheme) || r.string(t.pattern);
   }
   e.is = t;
  })(h = t.DocumentFilter || (t.DocumentFilter = {}));
  var d;
  (function(e) {
   e.type = new i.RequestType("client/registerCapability");
  })(d = t.RegistrationRequest || (t.RegistrationRequest = {}));
  var u;
  (function(e) {
   e.type = new i.RequestType("client/unregisterCapability");
  })(u = t.UnregistrationRequest || (t.UnregistrationRequest = {}));
  var p;
  (function(e) {
   e.None = 0;
   e.Full = 1;
   e.Incremental = 2;
  })(p = t.TextDocumentSyncKind || (t.TextDocumentSyncKind = {}));
  var m;
  (function(e) {
   e.type = new i.RequestType("initialize");
  })(m = t.InitializeRequest || (t.InitializeRequest = {}));
  var f;
  (function(e) {
   e.unknownProtocolVersion = 1;
  })(f = t.InitializeError || (t.InitializeError = {}));
  var g;
  (function(e) {
   e.type = new i.NotificationType("initialized");
  })(g = t.InitializedNotification || (t.InitializedNotification = {}));
  var b;
  (function(e) {
   e.type = new i.RequestType0("shutdown");
  })(b = t.ShutdownRequest || (t.ShutdownRequest = {}));
  var y;
  (function(e) {
   e.type = new i.NotificationType0("exit");
  })(y = t.ExitNotification || (t.ExitNotification = {}));
  var v;
  (function(e) {
   e.type = new i.NotificationType("workspace/didChangeConfiguration");
  })(v = t.DidChangeConfigurationNotification || (t.DidChangeConfigurationNotification = {}));
  var w;
  (function(e) {
   e.Error = 1;
   e.Warning = 2;
   e.Info = 3;
   e.Log = 4;
  })(w = t.MessageType || (t.MessageType = {}));
  var x;
  (function(e) {
   e.type = new i.NotificationType("window/showMessage");
  })(x = t.ShowMessageNotification || (t.ShowMessageNotification = {}));
  var k;
  (function(e) {
   e.type = new i.RequestType("window/showMessageRequest");
  })(k = t.ShowMessageRequest || (t.ShowMessageRequest = {}));
  var C;
  (function(e) {
   e.type = new i.NotificationType("window/logMessage");
  })(C = t.LogMessageNotification || (t.LogMessageNotification = {}));
  var S;
  (function(e) {
   e.type = new i.NotificationType("telemetry/event");
  })(S = t.TelemetryEventNotification || (t.TelemetryEventNotification = {}));
  var F;
  (function(e) {
   e.type = new i.NotificationType("textDocument/didOpen");
  })(F = t.DidOpenTextDocumentNotification || (t.DidOpenTextDocumentNotification = {}));
  var E;
  (function(e) {
   e.type = new i.NotificationType("textDocument/didChange");
  })(E = t.DidChangeTextDocumentNotification || (t.DidChangeTextDocumentNotification = {}));
  var T;
  (function(e) {
   e.type = new i.NotificationType("textDocument/didClose");
  })(T = t.DidCloseTextDocumentNotification || (t.DidCloseTextDocumentNotification = {}));
  var I;
  (function(e) {
   e.type = new i.NotificationType("textDocument/didSave");
  })(I = t.DidSaveTextDocumentNotification || (t.DidSaveTextDocumentNotification = {}));
  var _;
  (function(e) {
   e.type = new i.NotificationType("textDocument/willSave");
  })(_ = t.WillSaveTextDocumentNotification || (t.WillSaveTextDocumentNotification = {}));
  var R;
  (function(e) {
   e.type = new i.RequestType("textDocument/willSaveWaitUntil");
  })(R = t.WillSaveTextDocumentWaitUntilRequest || (t.WillSaveTextDocumentWaitUntilRequest = {}));
  var P;
  (function(e) {
   e.type = new i.NotificationType("workspace/didChangeWatchedFiles");
  })(P = t.DidChangeWatchedFilesNotification || (t.DidChangeWatchedFilesNotification = {}));
  var D;
  (function(e) {
   e.Created = 1;
   e.Changed = 2;
   e.Deleted = 3;
  })(D = t.FileChangeType || (t.FileChangeType = {}));
  var A;
  (function(e) {
   e.Create = 1;
   e.Change = 2;
   e.Delete = 4;
  })(A = t.WatchKind || (t.WatchKind = {}));
  var O;
  (function(e) {
   e.type = new i.NotificationType("textDocument/publishDiagnostics");
  })(O = t.PublishDiagnosticsNotification || (t.PublishDiagnosticsNotification = {}));
  var z;
  (function(e) {
   e.Invoked = 1;
   e.TriggerCharacter = 2;
   e.TriggerForIncompleteCompletions = 3;
  })(z = t.CompletionTriggerKind || (t.CompletionTriggerKind = {}));
  var N;
  (function(e) {
   e.type = new i.RequestType("textDocument/completion");
  })(N = t.CompletionRequest || (t.CompletionRequest = {}));
  var M;
  (function(e) {
   e.type = new i.RequestType("completionItem/resolve");
  })(M = t.CompletionResolveRequest || (t.CompletionResolveRequest = {}));
  var U;
  (function(e) {
   e.type = new i.RequestType("textDocument/hover");
  })(U = t.HoverRequest || (t.HoverRequest = {}));
  var q;
  (function(e) {
   e.type = new i.RequestType("textDocument/signatureHelp");
  })(q = t.SignatureHelpRequest || (t.SignatureHelpRequest = {}));
  var j;
  (function(e) {
   e.type = new i.RequestType("textDocument/definition");
  })(j = t.DefinitionRequest || (t.DefinitionRequest = {}));
  var L;
  (function(e) {
   e.type = new i.RequestType("textDocument/references");
  })(L = t.ReferencesRequest || (t.ReferencesRequest = {}));
  var V;
  (function(e) {
   e.type = new i.RequestType("textDocument/documentHighlight");
  })(V = t.DocumentHighlightRequest || (t.DocumentHighlightRequest = {}));
  var B;
  (function(e) {
   e.type = new i.RequestType("textDocument/documentSymbol");
  })(B = t.DocumentSymbolRequest || (t.DocumentSymbolRequest = {}));
  var W;
  (function(e) {
   e.type = new i.RequestType("workspace/symbol");
  })(W = t.WorkspaceSymbolRequest || (t.WorkspaceSymbolRequest = {}));
  var K;
  (function(e) {
   e.type = new i.RequestType("textDocument/codeAction");
  })(K = t.CodeActionRequest || (t.CodeActionRequest = {}));
  var $;
  (function(e) {
   e.type = new i.RequestType("textDocument/codeLens");
  })($ = t.CodeLensRequest || (t.CodeLensRequest = {}));
  var G;
  (function(e) {
   e.type = new i.RequestType("codeLens/resolve");
  })(G = t.CodeLensResolveRequest || (t.CodeLensResolveRequest = {}));
  var H;
  (function(e) {
   e.type = new i.RequestType("textDocument/formatting");
  })(H = t.DocumentFormattingRequest || (t.DocumentFormattingRequest = {}));
  var J;
  (function(e) {
   e.type = new i.RequestType("textDocument/rangeFormatting");
  })(J = t.DocumentRangeFormattingRequest || (t.DocumentRangeFormattingRequest = {}));
  var X;
  (function(e) {
   e.type = new i.RequestType("textDocument/onTypeFormatting");
  })(X = t.DocumentOnTypeFormattingRequest || (t.DocumentOnTypeFormattingRequest = {}));
  var Y;
  (function(e) {
   e.type = new i.RequestType("textDocument/rename");
  })(Y = t.RenameRequest || (t.RenameRequest = {}));
  var Q;
  (function(e) {
   e.type = new i.RequestType("textDocument/documentLink");
  })(Q = t.DocumentLinkRequest || (t.DocumentLinkRequest = {}));
  var Z;
  (function(e) {
   e.type = new i.RequestType("documentLink/resolve");
  })(Z = t.DocumentLinkResolveRequest || (t.DocumentLinkResolveRequest = {}));
  var ee;
  (function(e) {
   e.type = new i.RequestType("workspace/executeCommand");
  })(ee = t.ExecuteCommandRequest || (t.ExecuteCommandRequest = {}));
  var te;
  (function(e) {
   e.type = new i.RequestType("workspace/applyEdit");
  })(te = t.ApplyWorkspaceEditRequest || (t.ApplyWorkspaceEditRequest = {}));
 },
 "/7TX": function(e, t, n) {
  "use strict";
  var r = this && this.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var i = n("1vg8");
  var a;
  (function(e) {
   e.ParseError = -32700;
   e.InvalidRequest = -32600;
   e.MethodNotFound = -32601;
   e.InvalidParams = -32602;
   e.InternalError = -32603;
   e.serverErrorStart = -32099;
   e.serverErrorEnd = -32e3;
   e.ServerNotInitialized = -32002;
   e.UnknownErrorCode = -32001;
   e.RequestCancelled = -32800;
   e.MessageWriteError = 1;
   e.MessageReadError = 2;
  })(a = t.ErrorCodes || (t.ErrorCodes = {}));
  var o = function(e) {
   r(t, e);
   function t(n, r, o) {
    var s = e.call(this, r) || this;
    s.code = i.number(n) ? n : a.UnknownErrorCode;
    s.data = o;
    Object.setPrototypeOf(s, t.prototype);
    return s;
   }
   t.prototype.toJson = function() {
    return {
     code: this.code,
     message: this.message,
     data: this.data
    };
   };
   return t;
  }(Error);
  t.ResponseError = o;
  var s = function() {
   function e(e, t) {
    this._method = e;
    this._numberOfParams = t;
   }
   Object.defineProperty(e.prototype, "method", {
    get: function() {
     return this._method;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "numberOfParams", {
    get: function() {
     return this._numberOfParams;
    },
    enumerable: true,
    configurable: true
   });
   return e;
  }();
  t.AbstractMessageType = s;
  var l = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 0) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType0 = l;
  var c = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 1) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType = c;
  var h = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 1) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType1 = h;
  var d = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 2) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType2 = d;
  var u = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 3) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType3 = u;
  var p = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 4) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType4 = p;
  var m = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 5) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType5 = m;
  var f = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 6) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType6 = f;
  var g = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 7) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType7 = g;
  var b = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 8) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType8 = b;
  var y = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 9) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType9 = y;
  var v = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 1) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType = v;
  var w = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 0) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType0 = w;
  var x = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 1) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType1 = x;
  var k = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 2) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType2 = k;
  var C = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 3) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType3 = C;
  var S = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 4) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType4 = S;
  var F = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 5) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType5 = F;
  var E = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 6) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType6 = E;
  var T = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 7) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType7 = T;
  var I = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 8) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType8 = I;
  var _ = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 9) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType9 = _;
  function R(e) {
   var t = e;
   return t && i.string(t.method) && (i.string(t.id) || i.number(t.id));
  }
  t.isRequestMessage = R;
  function P(e) {
   var t = e;
   return t && i.string(t.method) && e.id === void 0;
  }
  t.isNotificationMessage = P;
  function D(e) {
   var t = e;
   return t && (t.result !== void 0 || !!t.error) && (i.string(t.id) || i.number(t.id) || t.id === null);
  }
  t.isResponseMessage = D;
 },
 "1vg8": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = Object.prototype.toString;
  function i(e) {
   return e === true || e === false;
  }
  t.boolean = i;
  function a(e) {
   return r.call(e) === "[object String]";
  }
  t.string = a;
  function o(e) {
   return r.call(e) === "[object Number]";
  }
  t.number = o;
  function s(e) {
   return r.call(e) === "[object Error]";
  }
  t.error = s;
  function l(e) {
   return r.call(e) === "[object Function]";
  }
  t.func = l;
  function c(e) {
   return Array.isArray(e);
  }
  t.array = c;
  function h(e) {
   return c(e) && e.every(function(e) {
    return a(e);
   });
  }
  t.stringArray = h;
 },
 "2Sr3": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  function r(e, t, n) {
   var r = {};
   var i = 0;
   var a = void 0;
   if (t > 0) {
    a = setInterval(function() {
     var e = Date.now() - t * 1e3;
     var n = Object.keys(r);
     for (var a = 0, o = n; a < o.length; a++) {
      var s = o[a];
      var l = r[s];
      if (l.cTime < e) {
       delete r[s];
       i--;
      }
     }
    }, t * 1e3);
   }
   return {
    get: function(t) {
     var a = t.version;
     var o = t.languageId;
     var s = r[t.uri];
     if (s && s.version === a && s.languageId === o) {
      s.cTime = Date.now();
      return s.languageModel;
     }
     var l = n(t);
     r[t.uri] = {
      languageModel: l,
      version: a,
      languageId: o,
      cTime: Date.now()
     };
     if (!s) {
      i++;
     }
     if (i === e) {
      var c = Number.MAX_VALUE;
      var h = null;
      for (var d in r) {
       var u = r[d];
       if (u.cTime < c) {
        h = d;
        c = u.cTime;
       }
      }
      if (h) {
       delete r[h];
       i--;
      }
     }
     return l;
    },
    onDocumentRemoved: function(e) {
     var t = e.uri;
     if (r[t]) {
      delete r[t];
      i--;
     }
    },
    dispose: function() {
     if (typeof a !== "undefined") {
      clearInterval(a);
      a = void 0;
      r = {};
      i = 0;
     }
    }
   };
  }
  t.getLanguageModelCache = r;
 },
 "4E7l": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  function r(e, t) {
   if (e.length < t.length) {
    return false;
   }
   for (var n = 0; n < t.length; n++) {
    if (e[n] !== t[n]) {
     return false;
    }
   }
   return true;
  }
  t.startsWith = r;
 },
 "4Wfv": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r;
  (function(e) {
   e.None = 0;
   e.First = 1;
   e.Last = 2;
  })(r = t.Touch || (t.Touch = {}));
  var i = function() {
   function e() {
    this._map = new Map();
    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
   }
   e.prototype.clear = function() {
    this._map.clear();
    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
   };
   e.prototype.isEmpty = function() {
    return !this._head && !this._tail;
   };
   Object.defineProperty(e.prototype, "size", {
    get: function() {
     return this._size;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.has = function(e) {
    return this._map.has(e);
   };
   e.prototype.get = function(e) {
    var t = this._map.get(e);
    if (!t) {
     return undefined;
    }
    return t.value;
   };
   e.prototype.set = function(e, t, n) {
    if (n === void 0) {
     n = r.None;
    }
    var i = this._map.get(e);
    if (i) {
     i.value = t;
     if (n !== r.None) {
      this.touch(i, n);
     }
    } else {
     i = {
      key: e,
      value: t,
      next: undefined,
      previous: undefined
     };
     switch (n) {
     case r.None:
      this.addItemLast(i);
      break;

     case r.First:
      this.addItemFirst(i);
      break;

     case r.Last:
      this.addItemLast(i);
      break;

     default:
      this.addItemLast(i);
      break;
     }
     this._map.set(e, i);
     this._size++;
    }
   };
   e.prototype.delete = function(e) {
    var t = this._map.get(e);
    if (!t) {
     return false;
    }
    this._map.delete(e);
    this.removeItem(t);
    this._size--;
    return true;
   };
   e.prototype.shift = function() {
    if (!this._head && !this._tail) {
     return undefined;
    }
    if (!this._head || !this._tail) {
     throw new Error("Invalid list");
    }
    var e = this._head;
    this._map.delete(e.key);
    this.removeItem(e);
    this._size--;
    return e.value;
   };
   e.prototype.forEach = function(e, t) {
    var n = this._head;
    while (n) {
     if (t) {
      e.bind(t)(n.value, n.key, this);
     } else {
      e(n.value, n.key, this);
     }
     n = n.next;
    }
   };
   e.prototype.forEachReverse = function(e, t) {
    var n = this._tail;
    while (n) {
     if (t) {
      e.bind(t)(n.value, n.key, this);
     } else {
      e(n.value, n.key, this);
     }
     n = n.previous;
    }
   };
   e.prototype.values = function() {
    var e = [];
    var t = this._head;
    while (t) {
     e.push(t.value);
     t = t.next;
    }
    return e;
   };
   e.prototype.keys = function() {
    var e = [];
    var t = this._head;
    while (t) {
     e.push(t.key);
     t = t.next;
    }
    return e;
   };
   e.prototype.addItemFirst = function(e) {
    if (!this._head && !this._tail) {
     this._tail = e;
    } else if (!this._head) {
     throw new Error("Invalid list");
    } else {
     e.next = this._head;
     this._head.previous = e;
    }
    this._head = e;
   };
   e.prototype.addItemLast = function(e) {
    if (!this._head && !this._tail) {
     this._head = e;
    } else if (!this._tail) {
     throw new Error("Invalid list");
    } else {
     e.previous = this._tail;
     this._tail.next = e;
    }
    this._tail = e;
   };
   e.prototype.removeItem = function(e) {
    if (e === this._head && e === this._tail) {
     this._head = undefined;
     this._tail = undefined;
    } else if (e === this._head) {
     this._head = e.next;
    } else if (e === this._tail) {
     this._tail = e.previous;
    } else {
     var t = e.next;
     var n = e.previous;
     if (!t || !n) {
      throw new Error("Invalid list");
     }
     t.previous = n;
     n.next = t;
    }
   };
   e.prototype.touch = function(e, t) {
    if (!this._head || !this._tail) {
     throw new Error("Invalid list");
    }
    if (t !== r.First && t !== r.Last) {
     return;
    }
    if (t === r.First) {
     if (e === this._head) {
      return;
     }
     var n = e.next;
     var i = e.previous;
     if (e === this._tail) {
      i.next = undefined;
      this._tail = i;
     } else {
      n.previous = i;
      i.next = n;
     }
     e.previous = undefined;
     e.next = this._head;
     this._head.previous = e;
     this._head = e;
    } else if (t === r.Last) {
     if (e === this._tail) {
      return;
     }
     var n = e.next;
     var i = e.previous;
     if (e === this._head) {
      n.previous = undefined;
      this._head = n;
     } else {
      n.previous = i;
      i.next = n;
     }
     e.next = undefined;
     e.previous = this._tail;
     this._tail.next = e;
     this._tail = e;
    }
   };
   return e;
  }();
  t.LinkedMap = i;
 },
 "5W09": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("COhr");
  function i(e, t) {
   if (t instanceof Error) {
    var n = t;
    return e + ": " + n.message + "\n" + n.stack;
   } else if (typeof t === "string") {
    return e + ": " + t;
   } else if (t) {
    return e + ": " + t.toString();
   }
   return e;
  }
  t.formatError = i;
  function a(e, t, n, r) {
   return new Promise(function(a, s) {
    setImmediate(function() {
     if (r.isCancellationRequested) {
      a(o());
     } else {
      try {
       var s = e();
       if (r.isCancellationRequested) {
        a(o());
        return;
       } else {
        a(s);
       }
      } catch (e) {
       console.error(i(n, e));
       a(t);
      }
     }
    });
   });
  }
  t.runSafe = a;
  function o() {
   return new r.ResponseError(r.ErrorCodes.RequestCancelled, "Request cancelled");
  }
 },
 "8ahE": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("C+6V");
  var i;
  (function(e) {
   e.type = new r.RequestType("textDocument/typeDefinition");
  })(i = t.TypeDefinitionRequest || (t.TypeDefinitionRequest = {}));
 },
 ALIN: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("Qs2e");
  var i = n("uWpP");
  var a = n("vIUA");
  function o(e, t) {
   if (t === void 0) {
    t = "utf-8";
   }
   var n;
   var o = new Promise(function(e, t) {
    n = e;
   });
   return new Promise(function(s, l) {
    var c = r.createServer(function(e) {
     c.close();
     n([ new i.SocketMessageReader(e, t), new a.SocketMessageWriter(e, t) ]);
    });
    c.on("error", l);
    c.listen(e, "127.0.0.1", function() {
     c.removeListener("error", l);
     s({
      onConnected: function() {
       return o;
      }
     });
    });
   });
  }
  t.createClientSocketTransport = o;
  function s(e, t) {
   if (t === void 0) {
    t = "utf-8";
   }
   var n = r.createConnection(e, "127.0.0.1");
   return [ new i.SocketMessageReader(n, t), new a.SocketMessageWriter(n, t) ];
  }
  t.createServerSocketTransport = s;
 },
 BOov: function(e, t, n) {
  "use strict";
  function r(e) {
   for (var n in e) if (!t.hasOwnProperty(n)) t[n] = e[n];
  }
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const i = n("C+6V");
  t.ErrorCodes = i.ErrorCodes;
  t.ResponseError = i.ResponseError;
  t.CancellationToken = i.CancellationToken;
  t.CancellationTokenSource = i.CancellationTokenSource;
  t.Disposable = i.Disposable;
  t.Event = i.Event;
  t.Emitter = i.Emitter;
  t.Trace = i.Trace;
  t.SetTraceNotification = i.SetTraceNotification;
  t.LogTraceNotification = i.LogTraceNotification;
  t.RequestType = i.RequestType;
  t.RequestType0 = i.RequestType0;
  t.NotificationType = i.NotificationType;
  t.NotificationType0 = i.NotificationType0;
  t.MessageReader = i.MessageReader;
  t.MessageWriter = i.MessageWriter;
  t.ConnectionStrategy = i.ConnectionStrategy;
  t.StreamMessageReader = i.StreamMessageReader;
  t.StreamMessageWriter = i.StreamMessageWriter;
  t.IPCMessageReader = i.IPCMessageReader;
  t.IPCMessageWriter = i.IPCMessageWriter;
  t.createClientPipeTransport = i.createClientPipeTransport;
  t.createServerPipeTransport = i.createServerPipeTransport;
  t.generateRandomPipeName = i.generateRandomPipeName;
  t.createClientSocketTransport = i.createClientSocketTransport;
  t.createServerSocketTransport = i.createServerSocketTransport;
  r(n("kmEW"));
  r(n("+cRy"));
  function a(e, t, n, r) {
   return i.createMessageConnection(e, t, n, r);
  }
  t.createProtocolConnection = a;
 },
 "C+6V": function(e, t, n) {
  "use strict";
  var r = this && this.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  function i(e) {
   for (var n in e) if (!t.hasOwnProperty(n)) t[n] = e[n];
  }
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var a = n("1vg8");
  var o = n("/7TX");
  t.RequestType = o.RequestType;
  t.RequestType0 = o.RequestType0;
  t.RequestType1 = o.RequestType1;
  t.RequestType2 = o.RequestType2;
  t.RequestType3 = o.RequestType3;
  t.RequestType4 = o.RequestType4;
  t.RequestType5 = o.RequestType5;
  t.RequestType6 = o.RequestType6;
  t.RequestType7 = o.RequestType7;
  t.RequestType8 = o.RequestType8;
  t.RequestType9 = o.RequestType9;
  t.ResponseError = o.ResponseError;
  t.ErrorCodes = o.ErrorCodes;
  t.NotificationType = o.NotificationType;
  t.NotificationType0 = o.NotificationType0;
  t.NotificationType1 = o.NotificationType1;
  t.NotificationType2 = o.NotificationType2;
  t.NotificationType3 = o.NotificationType3;
  t.NotificationType4 = o.NotificationType4;
  t.NotificationType5 = o.NotificationType5;
  t.NotificationType6 = o.NotificationType6;
  t.NotificationType7 = o.NotificationType7;
  t.NotificationType8 = o.NotificationType8;
  t.NotificationType9 = o.NotificationType9;
  var s = n("uWpP");
  t.MessageReader = s.MessageReader;
  t.StreamMessageReader = s.StreamMessageReader;
  t.IPCMessageReader = s.IPCMessageReader;
  t.SocketMessageReader = s.SocketMessageReader;
  var l = n("vIUA");
  t.MessageWriter = l.MessageWriter;
  t.StreamMessageWriter = l.StreamMessageWriter;
  t.IPCMessageWriter = l.IPCMessageWriter;
  t.SocketMessageWriter = l.SocketMessageWriter;
  var c = n("Z5Ki");
  t.Disposable = c.Disposable;
  t.Event = c.Event;
  t.Emitter = c.Emitter;
  var h = n("Ff8q");
  t.CancellationTokenSource = h.CancellationTokenSource;
  t.CancellationToken = h.CancellationToken;
  var d = n("4Wfv");
  i(n("qL5x"));
  i(n("ALIN"));
  var u;
  (function(e) {
   e.type = new o.NotificationType("$/cancelRequest");
  })(u || (u = {}));
  t.NullLogger = Object.freeze({
   error: function() {},
   warn: function() {},
   info: function() {},
   log: function() {}
  });
  var p;
  (function(e) {
   e[e["Off"] = 0] = "Off";
   e[e["Messages"] = 1] = "Messages";
   e[e["Verbose"] = 2] = "Verbose";
  })(p = t.Trace || (t.Trace = {}));
  (function(e) {
   function t(t) {
    t = t.toLowerCase();
    switch (t) {
    case "off":
     return e.Off;

    case "messages":
     return e.Messages;

    case "verbose":
     return e.Verbose;

    default:
     return e.Off;
    }
   }
   e.fromString = t;
   function n(t) {
    switch (t) {
    case e.Off:
     return "off";

    case e.Messages:
     return "messages";

    case e.Verbose:
     return "verbose";

    default:
     return "off";
    }
   }
   e.toString = n;
  })(p = t.Trace || (t.Trace = {}));
  var m;
  (function(e) {
   e.type = new o.NotificationType("$/setTraceNotification");
  })(m = t.SetTraceNotification || (t.SetTraceNotification = {}));
  var f;
  (function(e) {
   e.type = new o.NotificationType("$/logTraceNotification");
  })(f = t.LogTraceNotification || (t.LogTraceNotification = {}));
  var g;
  (function(e) {
   e[e["Closed"] = 1] = "Closed";
   e[e["Disposed"] = 2] = "Disposed";
   e[e["AlreadyListening"] = 3] = "AlreadyListening";
  })(g = t.ConnectionErrors || (t.ConnectionErrors = {}));
  var b = function(e) {
   r(t, e);
   function t(n, r) {
    var i = e.call(this, r) || this;
    i.code = n;
    Object.setPrototypeOf(i, t.prototype);
    return i;
   }
   return t;
  }(Error);
  t.ConnectionError = b;
  var y;
  (function(e) {
   function t(e) {
    var t = e;
    return t && a.func(t.cancelUndispatched);
   }
   e.is = t;
  })(y = t.ConnectionStrategy || (t.ConnectionStrategy = {}));
  var v;
  (function(e) {
   e[e["New"] = 1] = "New";
   e[e["Listening"] = 2] = "Listening";
   e[e["Closed"] = 3] = "Closed";
   e[e["Disposed"] = 4] = "Disposed";
  })(v || (v = {}));
  function w(e, t, n, r) {
   var i = 0;
   var s = 0;
   var l = 0;
   var y = "2.0";
   var w = undefined;
   var x = Object.create(null);
   var k = undefined;
   var C = Object.create(null);
   var S;
   var F = new d.LinkedMap();
   var E = Object.create(null);
   var T = Object.create(null);
   var I = p.Off;
   var _;
   var R = v.New;
   var P = new c.Emitter();
   var D = new c.Emitter();
   var A = new c.Emitter();
   var O = new c.Emitter();
   function z(e) {
    return "req-" + e.toString();
   }
   function N(e) {
    if (e === null) {
     return "res-unknown-" + (++l).toString();
    } else {
     return "res-" + e.toString();
    }
   }
   function M() {
    return "not-" + (++s).toString();
   }
   function U(e, t) {
    if (o.isRequestMessage(t)) {
     e.set(z(t.id), t);
    } else if (o.isResponseMessage(t)) {
     e.set(N(t.id), t);
    } else {
     e.set(M(), t);
    }
   }
   function q(e) {
    return undefined;
   }
   function j() {
    return R === v.Listening;
   }
   function L() {
    return R === v.Closed;
   }
   function V() {
    return R === v.Disposed;
   }
   function B() {
    if (R === v.New || R === v.Listening) {
     R = v.Closed;
     D.fire(undefined);
    }
   }
   function W(e) {
    P.fire([ e, undefined, undefined ]);
   }
   function K(e) {
    P.fire(e);
   }
   e.onClose(B);
   e.onError(W);
   t.onClose(B);
   t.onError(K);
   function $() {
    if (S || F.size === 0) {
     return;
    }
    S = setImmediate(function() {
     S = undefined;
     G();
    });
   }
   function G() {
    if (F.size === 0) {
     return;
    }
    var e = F.shift();
    try {
     if (o.isRequestMessage(e)) {
      J(e);
     } else if (o.isNotificationMessage(e)) {
      Y(e);
     } else if (o.isResponseMessage(e)) {
      X(e);
     } else {
      Q(e);
     }
    } finally {
     $();
    }
   }
   var H = function(e) {
    try {
     if (o.isNotificationMessage(e) && e.method === u.type.method) {
      var n = z(e.params.id);
      var i = F.get(n);
      if (o.isRequestMessage(i)) {
       var a = r && r.cancelUndispatched ? r.cancelUndispatched(i, q) : q(i);
       if (a && (a.error !== void 0 || a.result !== void 0)) {
        F.delete(n);
        a.id = i.id;
        te(a, e.method, Date.now());
        t.write(a);
        return;
       }
      }
     }
     U(F, e);
    } finally {
     $();
    }
   };
   function J(e) {
    if (V()) {
     return;
    }
    function n(n, r, i) {
     var a = {
      jsonrpc: y,
      id: e.id
     };
     if (n instanceof o.ResponseError) {
      a.error = n.toJson();
     } else {
      a.result = n === void 0 ? null : n;
     }
     te(a, r, i);
     t.write(a);
    }
    function r(n, r, i) {
     var a = {
      jsonrpc: y,
      id: e.id,
      error: n.toJson()
     };
     te(a, r, i);
     t.write(a);
    }
    function i(n, r, i) {
     if (n === void 0) {
      n = null;
     }
     var a = {
      jsonrpc: y,
      id: e.id,
      result: n
     };
     te(a, r, i);
     t.write(a);
    }
    ne(e);
    var s = x[e.method];
    var l;
    var c;
    if (s) {
     l = s.type;
     c = s.handler;
    }
    var d = Date.now();
    if (c || w) {
     var u = new h.CancellationTokenSource();
     var p = String(e.id);
     T[p] = u;
     try {
      var m = void 0;
      if (e.params === void 0 || l !== void 0 && l.numberOfParams === 0) {
       m = c ? c(u.token) : w(e.method, u.token);
      } else if (a.array(e.params) && (l === void 0 || l.numberOfParams > 1)) {
       m = c ? c.apply(void 0, e.params.concat([ u.token ])) : w.apply(void 0, [ e.method ].concat(e.params, [ u.token ]));
      } else {
       m = c ? c(e.params, u.token) : w(e.method, e.params, u.token);
      }
      var f = m;
      if (!m) {
       delete T[p];
       i(m, e.method, d);
      } else if (f.then) {
       f.then(function(t) {
        delete T[p];
        n(t, e.method, d);
       }, function(t) {
        delete T[p];
        if (t instanceof o.ResponseError) {
         r(t, e.method, d);
        } else if (t && a.string(t.message)) {
         r(new o.ResponseError(o.ErrorCodes.InternalError, "Request " + e.method + " failed with message: " + t.message), e.method, d);
        } else {
         r(new o.ResponseError(o.ErrorCodes.InternalError, "Request " + e.method + " failed unexpectedly without providing any details."), e.method, d);
        }
       });
      } else {
       delete T[p];
       n(m, e.method, d);
      }
     } catch (t) {
      delete T[p];
      if (t instanceof o.ResponseError) {
       n(t, e.method, d);
      } else if (t && a.string(t.message)) {
       r(new o.ResponseError(o.ErrorCodes.InternalError, "Request " + e.method + " failed with message: " + t.message), e.method, d);
      } else {
       r(new o.ResponseError(o.ErrorCodes.InternalError, "Request " + e.method + " failed unexpectedly without providing any details."), e.method, d);
      }
     }
    } else {
     r(new o.ResponseError(o.ErrorCodes.MethodNotFound, "Unhandled method " + e.method), e.method, d);
    }
   }
   function X(e) {
    if (V()) {
     return;
    }
    if (e.id === null) {
     if (e.error) {
      n.error("Received response message without id: Error is: \n" + JSON.stringify(e.error, undefined, 4));
     } else {
      n.error("Received response message without id. No further error information provided.");
     }
    } else {
     var t = String(e.id);
     var r = E[t];
     ie(e, r);
     if (r) {
      delete E[t];
      try {
       if (e.error) {
        var i = e.error;
        r.reject(new o.ResponseError(i.code, i.message, i.data));
       } else if (e.result !== void 0) {
        r.resolve(e.result);
       } else {
        throw new Error("Should never happen.");
       }
      } catch (i) {
       if (i.message) {
        n.error("Response handler '" + r.method + "' failed with message: " + i.message);
       } else {
        n.error("Response handler '" + r.method + "' failed unexpectedly.");
       }
      }
     }
    }
   }
   function Y(e) {
    if (V()) {
     return;
    }
    var t = undefined;
    var r;
    if (e.method === u.type.method) {
     r = function(e) {
      var t = e.id;
      var n = T[String(t)];
      if (n) {
       n.cancel();
      }
     };
    } else {
     var i = C[e.method];
     if (i) {
      r = i.handler;
      t = i.type;
     }
    }
    if (r || k) {
     try {
      re(e);
      if (e.params === void 0 || t !== void 0 && t.numberOfParams === 0) {
       r ? r() : k(e.method);
      } else if (a.array(e.params) && (t === void 0 || t.numberOfParams > 1)) {
       r ? r.apply(void 0, e.params) : k.apply(void 0, [ e.method ].concat(e.params));
      } else {
       r ? r(e.params) : k(e.method, e.params);
      }
     } catch (t) {
      if (t.message) {
       n.error("Notification handler '" + e.method + "' failed with message: " + t.message);
      } else {
       n.error("Notification handler '" + e.method + "' failed unexpectedly.");
      }
     }
    } else {
     A.fire(e);
    }
   }
   function Q(e) {
    if (!e) {
     n.error("Received empty message.");
     return;
    }
    n.error("Received message which is neither a response nor a notification message:\n" + JSON.stringify(e, null, 4));
    var t = e;
    if (a.string(t.id) || a.number(t.id)) {
     var r = String(t.id);
     var i = E[r];
     if (i) {
      i.reject(new Error("The received response has neither a result nor an error property."));
     }
    }
   }
   function Z(e) {
    if (I === p.Off || !_) {
     return;
    }
    var t = undefined;
    if (I === p.Verbose && e.params) {
     t = "Params: " + JSON.stringify(e.params, null, 4) + "\n\n";
    }
    _.log("Sending request '" + e.method + " - (" + e.id + ")'.", t);
   }
   function ee(e) {
    if (I === p.Off || !_) {
     return;
    }
    var t = undefined;
    if (I === p.Verbose) {
     if (e.params) {
      t = "Params: " + JSON.stringify(e.params, null, 4) + "\n\n";
     } else {
      t = "No parameters provided.\n\n";
     }
    }
    _.log("Sending notification '" + e.method + "'.", t);
   }
   function te(e, t, n) {
    if (I === p.Off || !_) {
     return;
    }
    var r = undefined;
    if (I === p.Verbose) {
     if (e.error && e.error.data) {
      r = "Error data: " + JSON.stringify(e.error.data, null, 4) + "\n\n";
     } else {
      if (e.result) {
       r = "Result: " + JSON.stringify(e.result, null, 4) + "\n\n";
      } else if (e.error === void 0) {
       r = "No result returned.\n\n";
      }
     }
    }
    _.log("Sending response '" + t + " - (" + e.id + ")'. Processing request took " + (Date.now() - n) + "ms", r);
   }
   function ne(e) {
    if (I === p.Off || !_) {
     return;
    }
    var t = undefined;
    if (I === p.Verbose && e.params) {
     t = "Params: " + JSON.stringify(e.params, null, 4) + "\n\n";
    }
    _.log("Received request '" + e.method + " - (" + e.id + ")'.", t);
   }
   function re(e) {
    if (I === p.Off || !_ || e.method === f.type.method) {
     return;
    }
    var t = undefined;
    if (I === p.Verbose) {
     if (e.params) {
      t = "Params: " + JSON.stringify(e.params, null, 4) + "\n\n";
     } else {
      t = "No parameters provided.\n\n";
     }
    }
    _.log("Received notification '" + e.method + "'.", t);
   }
   function ie(e, t) {
    if (I === p.Off || !_) {
     return;
    }
    var n = undefined;
    if (I === p.Verbose) {
     if (e.error && e.error.data) {
      n = "Error data: " + JSON.stringify(e.error.data, null, 4) + "\n\n";
     } else {
      if (e.result) {
       n = "Result: " + JSON.stringify(e.result, null, 4) + "\n\n";
      } else if (e.error === void 0) {
       n = "No result returned.\n\n";
      }
     }
    }
    if (t) {
     var r = e.error ? " Request failed: " + e.error.message + " (" + e.error.code + ")." : "";
     _.log("Received response '" + t.method + " - (" + e.id + ")' in " + (Date.now() - t.timerStart) + "ms." + r, n);
    } else {
     _.log("Received response " + e.id + " without active response promise.", n);
    }
   }
   function ae() {
    if (L()) {
     throw new b(g.Closed, "Connection is closed.");
    }
    if (V()) {
     throw new b(g.Disposed, "Connection is disposed.");
    }
   }
   function oe() {
    if (j()) {
     throw new b(g.AlreadyListening, "Connection is already listening");
    }
   }
   function se() {
    if (!j()) {
     throw new Error("Call listen() first.");
    }
   }
   function le(e) {
    if (e === void 0) {
     return null;
    } else {
     return e;
    }
   }
   function ce(e, t) {
    var n;
    var r = e.numberOfParams;
    switch (r) {
    case 0:
     n = null;
     break;

    case 1:
     n = le(t[0]);
     break;

    default:
     n = [];
     for (var i = 0; i < t.length && i < r; i++) {
      n.push(le(t[i]));
     }
     if (t.length < r) {
      for (var i = t.length; i < r; i++) {
       n.push(null);
      }
     }
     break;
    }
    return n;
   }
   var he = {
    sendNotification: function(e) {
     var n = [];
     for (var r = 1; r < arguments.length; r++) {
      n[r - 1] = arguments[r];
     }
     ae();
     var i;
     var o;
     if (a.string(e)) {
      i = e;
      switch (n.length) {
      case 0:
       o = null;
       break;

      case 1:
       o = n[0];
       break;

      default:
       o = n;
       break;
      }
     } else {
      i = e.method;
      o = ce(e, n);
     }
     var s = {
      jsonrpc: y,
      method: i,
      params: o
     };
     ee(s);
     t.write(s);
    },
    onNotification: function(e, t) {
     ae();
     if (a.func(e)) {
      k = e;
     } else if (t) {
      if (a.string(e)) {
       C[e] = {
        type: undefined,
        handler: t
       };
      } else {
       C[e.method] = {
        type: e,
        handler: t
       };
      }
     }
    },
    sendRequest: function(e) {
     var n = [];
     for (var r = 1; r < arguments.length; r++) {
      n[r - 1] = arguments[r];
     }
     ae();
     se();
     var s;
     var l;
     var c = undefined;
     if (a.string(e)) {
      s = e;
      switch (n.length) {
      case 0:
       l = null;
       break;

      case 1:
       if (h.CancellationToken.is(n[0])) {
        l = null;
        c = n[0];
       } else {
        l = le(n[0]);
       }
       break;

      default:
       var d = n.length - 1;
       if (h.CancellationToken.is(n[d])) {
        c = n[d];
        if (n.length === 2) {
         l = le(n[0]);
        } else {
         l = n.slice(0, d).map(function(e) {
          return le(e);
         });
        }
       } else {
        l = n.map(function(e) {
         return le(e);
        });
       }
       break;
      }
     } else {
      s = e.method;
      l = ce(e, n);
      var p = e.numberOfParams;
      c = h.CancellationToken.is(n[p]) ? n[p] : undefined;
     }
     var m = i++;
     var f = new Promise(function(e, n) {
      var r = {
       jsonrpc: y,
       id: m,
       method: s,
       params: l
      };
      var i = {
       method: s,
       timerStart: Date.now(),
       resolve: e,
       reject: n
      };
      Z(r);
      try {
       t.write(r);
      } catch (e) {
       i.reject(new o.ResponseError(o.ErrorCodes.MessageWriteError, e.message ? e.message : "Unknown reason"));
       i = null;
      }
      if (i) {
       E[String(m)] = i;
      }
     });
     if (c) {
      c.onCancellationRequested(function() {
       he.sendNotification(u.type, {
        id: m
       });
      });
     }
     return f;
    },
    onRequest: function(e, t) {
     ae();
     if (a.func(e)) {
      w = e;
     } else if (t) {
      if (a.string(e)) {
       x[e] = {
        type: undefined,
        handler: t
       };
      } else {
       x[e.method] = {
        type: e,
        handler: t
       };
      }
     }
    },
    trace: function(e, t, n) {
     if (n === void 0) {
      n = false;
     }
     I = e;
     if (I === p.Off) {
      _ = undefined;
     } else {
      _ = t;
     }
     if (n && !L() && !V()) {
      he.sendNotification(m.type, {
       value: p.toString(e)
      });
     }
    },
    onError: P.event,
    onClose: D.event,
    onUnhandledNotification: A.event,
    onDispose: O.event,
    dispose: function() {
     if (V()) {
      return;
     }
     R = v.Disposed;
     O.fire(undefined);
     var n = new Error("Connection got disposed.");
     Object.keys(E).forEach(function(e) {
      E[e].reject(n);
     });
     E = Object.create(null);
     T = Object.create(null);
     F = new d.LinkedMap();
     if (a.func(t.dispose)) {
      t.dispose();
     }
     if (a.func(e.dispose)) {
      e.dispose();
     }
    },
    listen: function() {
     ae();
     oe();
     R = v.Listening;
     e.listen(H);
    },
    inspect: function() {
     console.log("inspect");
    }
   };
   he.onNotification(f.type, function(e) {
    if (I === p.Off || !_) {
     return;
    }
    _.log(e.message, I === p.Verbose ? e.verbose : undefined);
   });
   return he;
  }
  function x(e) {
   return e.listen !== void 0 && e.read === void 0;
  }
  function k(e) {
   return e.write !== void 0 && e.end === void 0;
  }
  function C(e, n, r, i) {
   if (!r) {
    r = t.NullLogger;
   }
   var a = x(e) ? e : new s.StreamMessageReader(e);
   var o = k(n) ? n : new l.StreamMessageWriter(n);
   return w(a, o, r, i);
  }
  t.createMessageConnection = C;
 },
 COhr: function(e, t, n) {
  "use strict";
  function r(e) {
   for (var n in e) if (!t.hasOwnProperty(n)) t[n] = e[n];
  }
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const i = n("BOov");
  t.Event = i.Event;
  const a = n("Qhc/");
  const o = n("Jf2r");
  const s = n("Krw1");
  const l = n("mz6j");
  r(n("BOov"));
  const c = n("tGke");
  var h;
  (function(e) {
   e.uriToFilePath = c.uriToFilePath;
   e.resolveGlobalNodePath = c.resolveGlobalNodePath;
   e.resolveGlobalYarnPath = c.resolveGlobalYarnPath;
   e.resolve = c.resolve;
   e.resolveModule = c.resolveModule;
   e.resolveModule2 = c.resolveModule2;
   e.resolveModulePath = c.resolveModulePath;
  })(h = t.Files || (t.Files = {}));
  let d = false;
  let u = undefined;
  function p() {
   const e = "--clientProcessId";
   function t(e) {
    try {
     let t = parseInt(e);
     if (!isNaN(t)) {
      u = setInterval(() => {
       try {
        process.kill(t, 0);
       } catch (e) {
        process.exit(d ? 0 : 1);
       }
      }, 3e3);
     }
    } catch (e) {}
   }
   for (let n = 2; n < process.argv.length; n++) {
    let r = process.argv[n];
    if (r === e && n + 1 < process.argv.length) {
     t(process.argv[n + 1]);
     return;
    } else {
     let n = r.split("=");
     if (n[0] === e) {
      t(n[1]);
     }
    }
   }
  }
  p();
  function m(e) {
   if (e === null) {
    return void 0;
   }
   return e;
  }
  class f {
   constructor() {
    this._documents = Object.create(null);
    this._onDidChangeContent = new i.Emitter();
    this._onDidOpen = new i.Emitter();
    this._onDidClose = new i.Emitter();
    this._onDidSave = new i.Emitter();
    this._onWillSave = new i.Emitter();
   }
   get syncKind() {
    return i.TextDocumentSyncKind.Full;
   }
   get onDidChangeContent() {
    return this._onDidChangeContent.event;
   }
   get onDidOpen() {
    return this._onDidOpen.event;
   }
   get onWillSave() {
    return this._onWillSave.event;
   }
   onWillSaveWaitUntil(e) {
    this._willSaveWaitUntil = e;
   }
   get onDidSave() {
    return this._onDidSave.event;
   }
   get onDidClose() {
    return this._onDidClose.event;
   }
   get(e) {
    return this._documents[e];
   }
   all() {
    return Object.keys(this._documents).map(e => this._documents[e]);
   }
   keys() {
    return Object.keys(this._documents);
   }
   listen(e) {
    function t(e) {
     return s.func(e.update);
    }
    e.__textDocumentSync = i.TextDocumentSyncKind.Full;
    e.onDidOpenTextDocument(e => {
     let t = e.textDocument;
     let n = i.TextDocument.create(t.uri, t.languageId, t.version, t.text);
     this._documents[t.uri] = n;
     let r = Object.freeze({
      document: n
     });
     this._onDidOpen.fire(r);
     this._onDidChangeContent.fire(r);
    });
    e.onDidChangeTextDocument(e => {
     let n = e.textDocument;
     let r = e.contentChanges;
     let i = r.length > 0 ? r[r.length - 1] : undefined;
     if (i) {
      let e = this._documents[n.uri];
      if (e && t(e)) {
       if (n.version === null || n.version === void 0) {
        throw new Error(`Recevied document change event for ${n.uri} without valid version identifier`);
       }
       e.update(i, n.version);
       this._onDidChangeContent.fire(Object.freeze({
        document: e
       }));
      }
     }
    });
    e.onDidCloseTextDocument(e => {
     let t = this._documents[e.textDocument.uri];
     if (t) {
      delete this._documents[e.textDocument.uri];
      this._onDidClose.fire(Object.freeze({
       document: t
      }));
     }
    });
    e.onWillSaveTextDocument(e => {
     let t = this._documents[e.textDocument.uri];
     if (t) {
      this._onWillSave.fire(Object.freeze({
       document: t,
       reason: e.reason
      }));
     }
    });
    e.onWillSaveTextDocumentWaitUntil((e, t) => {
     let n = this._documents[e.textDocument.uri];
     if (n && this._willSaveWaitUntil) {
      return this._willSaveWaitUntil(Object.freeze({
       document: n,
       reason: e.reason
      }), t);
     } else {
      return [];
     }
    });
    e.onDidSaveTextDocument(e => {
     let t = this._documents[e.textDocument.uri];
     if (t) {
      this._onDidSave.fire(Object.freeze({
       document: t
      }));
     }
    });
   }
  }
  t.TextDocuments = f;
  class g {
   constructor() {
    this._messages = Object.create(null);
   }
   add(e) {
    let t = this._messages[e];
    if (!t) {
     t = 0;
    }
    t++;
    this._messages[e] = t;
   }
   sendErrors(e) {
    Object.keys(this._messages).forEach(t => {
     e.window.showErrorMessage(t);
    });
   }
  }
  t.ErrorMessageTracker = g;
  var b;
  (function(e) {
   function t() {
    return new y();
   }
   e.create = t;
  })(b = t.BulkRegistration || (t.BulkRegistration = {}));
  class y {
   constructor() {
    this._registrations = [];
    this._registered = new Set();
   }
   add(e, t) {
    const n = s.string(e) ? e : e.method;
    if (this._registered.has(n)) {
     throw new Error(`${n} is already added to this registration`);
    }
    const r = l.generateUuid();
    this._registrations.push({
     id: r,
     method: n,
     registerOptions: t || {}
    });
    this._registered.add(n);
   }
   asRegistrationParams() {
    return {
     registrations: this._registrations
    };
   }
  }
  var v;
  (function(e) {
   function t() {
    return new w(undefined, []);
   }
   e.create = t;
  })(v = t.BulkUnregistration || (t.BulkUnregistration = {}));
  class w {
   constructor(e, t) {
    this._connection = e;
    this._unregistrations = new Map();
    t.forEach(e => {
     this._unregistrations.set(e.method, e);
    });
   }
   get isAttached() {
    return !!this._connection;
   }
   attach(e) {
    this._connection = e;
   }
   add(e) {
    this._unregistrations.set(e.method, e);
   }
   dispose() {
    let e = [];
    for (let t of this._unregistrations.values()) {
     e.push(t);
    }
    let t = {
     unregisterations: e
    };
    this._connection.sendRequest(i.UnregistrationRequest.type, t).then(undefined, e => {
     this._connection.console.info(`Bulk unregistration failed.`);
    });
   }
   disposeSingle(e) {
    const t = s.string(e) ? e : e.method;
    const n = this._unregistrations.get(t);
    if (!n) {
     return false;
    }
    let r = {
     unregisterations: [ n ]
    };
    this._connection.sendRequest(i.UnregistrationRequest.type, r).then(() => {
     this._unregistrations.delete(t);
    }, e => {
     this._connection.console.info(`Unregistering request handler for ${n.id} failed.`);
    });
    return true;
   }
  }
  class x {
   constructor() {}
   rawAttach(e) {
    this._rawConnection = e;
   }
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   fillServerCapabilities(e) {}
   initialize(e) {}
   error(e) {
    this.send(i.MessageType.Error, e);
   }
   warn(e) {
    this.send(i.MessageType.Warning, e);
   }
   info(e) {
    this.send(i.MessageType.Info, e);
   }
   log(e) {
    this.send(i.MessageType.Log, e);
   }
   send(e, t) {
    if (this._rawConnection) {
     this._rawConnection.sendNotification(i.LogMessageNotification.type, {
      type: e,
      message: t
     });
    }
   }
  }
  class k {
   constructor() {}
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   showErrorMessage(e, ...t) {
    let n = {
     type: i.MessageType.Error,
     message: e,
     actions: t
    };
    return this._connection.sendRequest(i.ShowMessageRequest.type, n).then(m);
   }
   showWarningMessage(e, ...t) {
    let n = {
     type: i.MessageType.Warning,
     message: e,
     actions: t
    };
    return this._connection.sendRequest(i.ShowMessageRequest.type, n).then(m);
   }
   showInformationMessage(e, ...t) {
    let n = {
     type: i.MessageType.Info,
     message: e,
     actions: t
    };
    return this._connection.sendRequest(i.ShowMessageRequest.type, n).then(m);
   }
  }
  class C {
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   register(e, t, n) {
    if (e instanceof y) {
     return this.registerMany(e);
    } else if (e instanceof w) {
     return this.registerSingle1(e, t, n);
    } else {
     return this.registerSingle2(e, t);
    }
   }
   registerSingle1(e, t, n) {
    const r = s.string(t) ? t : t.method;
    const a = l.generateUuid();
    let o = {
     registrations: [ {
      id: a,
      method: r,
      registerOptions: n || {}
     } ]
    };
    if (!e.isAttached) {
     e.attach(this._connection);
    }
    return this._connection.sendRequest(i.RegistrationRequest.type, o).then(t => {
     e.add({
      id: a,
      method: r
     });
     return e;
    }, e => {
     this.connection.console.info(`Registering request handler for ${r} failed.`);
     return Promise.reject(e);
    });
   }
   registerSingle2(e, t) {
    const n = s.string(e) ? e : e.method;
    const r = l.generateUuid();
    let a = {
     registrations: [ {
      id: r,
      method: n,
      registerOptions: t || {}
     } ]
    };
    return this._connection.sendRequest(i.RegistrationRequest.type, a).then(e => {
     return i.Disposable.create(() => {
      this.unregisterSingle(r, n);
     });
    }, e => {
     this.connection.console.info(`Registering request handler for ${n} failed.`);
     return Promise.reject(e);
    });
   }
   unregisterSingle(e, t) {
    let n = {
     unregisterations: [ {
      id: e,
      method: t
     } ]
    };
    return this._connection.sendRequest(i.UnregistrationRequest.type, n).then(undefined, t => {
     this.connection.console.info(`Unregistering request handler for ${e} failed.`);
    });
   }
   registerMany(e) {
    let t = e.asRegistrationParams();
    return this._connection.sendRequest(i.RegistrationRequest.type, t).then(() => {
     return new w(this._connection, t.registrations.map(e => {
      return {
       id: e.id,
       method: e.method
      };
     }));
    }, e => {
     this.connection.console.info(`Bulk registration failed.`);
     return Promise.reject(e);
    });
   }
  }
  class S {
   constructor() {}
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   applyEdit(e) {
    function t(e) {
     return e && !!e.edit;
    }
    let n = t(e) ? e : {
     edit: e
    };
    return this._connection.sendRequest(i.ApplyWorkspaceEditRequest.type, n);
   }
  }
  const F = o.WorkspaceFoldersFeature(a.ConfigurationFeature(S));
  class E {
   constructor() {
    this._trace = i.Trace.Off;
   }
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   set trace(e) {
    this._trace = e;
   }
   log(e, t) {
    if (this._trace === i.Trace.Off) {
     return;
    }
    this._connection.sendNotification(i.LogTraceNotification.type, {
     message: e,
     verbose: this._trace === i.Trace.Verbose ? t : undefined
    });
   }
  }
  class T {
   constructor() {}
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   logEvent(e) {
    this._connection.sendNotification(i.TelemetryEventNotification.type, e);
   }
  }
  function I(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineConsoleFeatures = I;
  function _(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineTelemetryFeatures = _;
  function R(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineTracerFeatures = R;
  function P(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineClientFeatures = P;
  function D(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineWindowFeatures = D;
  function A(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineWorkspaceFeatures = A;
  function O(e, t) {
   function n(e, t, n) {
    if (e && t) {
     return n(e, t);
    } else if (e) {
     return e;
    } else {
     return t;
    }
   }
   let r = {
    __brand: "features",
    console: n(e.console, t.console, I),
    tracer: n(e.tracer, t.tracer, R),
    telemetry: n(e.telemetry, t.telemetry, _),
    client: n(e.client, t.client, P),
    window: n(e.window, t.window, D),
    workspace: n(e.workspace, t.workspace, A)
   };
   return r;
  }
  t.combineFeatures = O;
  function z(e, t, n, r) {
   let a;
   let o;
   let s;
   let l;
   if (e !== void 0 && e.__brand === "features") {
    a = e;
    e = t;
    t = n;
    n = r;
   }
   if (i.ConnectionStrategy.is(e)) {
    l = e;
   } else {
    o = e;
    s = t;
    l = n;
   }
   return N(o, s, l, a);
  }
  t.createConnection = z;
  function N(e, t, n, r) {
   if (!e && !t && process.argv.length > 2) {
    let n = void 0;
    let r = void 0;
    let o = process.argv.slice(2);
    for (let s = 0; s < o.length; s++) {
     let l = o[s];
     if (l === "--node-ipc") {
      e = new i.IPCMessageReader(process);
      t = new i.IPCMessageWriter(process);
      break;
     } else if (l === "--stdio") {
      e = process.stdin;
      t = process.stdout;
      break;
     } else if (l === "--socket") {
      n = parseInt(o[s + 1]);
      break;
     } else if (l === "--pipe") {
      r = o[s + 1];
      break;
     } else {
      var a = l.split("=");
      if (a[0] === "--socket") {
       n = parseInt(a[1]);
       break;
      } else if (a[0] === "--pipe") {
       r = a[1];
       break;
      }
     }
    }
    if (n) {
     let r = i.createServerSocketTransport(n);
     e = r[0];
     t = r[1];
    } else if (r) {
     let n = i.createServerPipeTransport(r);
     e = n[0];
     t = n[1];
    }
   }
   var o = "Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";
   if (!e) {
    throw new Error("Connection input stream is not set. " + o);
   }
   if (!t) {
    throw new Error("Connection output stream is not set. " + o);
   }
   if (s.func(e.read) && s.func(e.on)) {
    let t = e;
    t.on("end", () => {
     process.exit(d ? 0 : 1);
    });
    t.on("close", () => {
     process.exit(d ? 0 : 1);
    });
   }
   const l = r && r.console ? new (r.console(x))() : new x();
   const c = i.createProtocolConnection(e, t, l, n);
   l.rawAttach(c);
   const h = r && r.tracer ? new (r.tracer(E))() : new E();
   const p = r && r.telemetry ? new (r.telemetry(T))() : new T();
   const m = r && r.client ? new (r.client(C))() : new C();
   const f = r && r.window ? new (r.window(k))() : new k();
   const g = r && r.workspace ? new (r.workspace(F))() : new F();
   const b = [ l, h, p, m, f, g ];
   function y(e) {
    if (s.thenable(e)) {
     return e;
    } else {
     return Promise.resolve(e);
    }
   }
   let v = undefined;
   let w = undefined;
   let S = undefined;
   let I = {
    listen: () => c.listen(),
    sendRequest: (e, ...t) => c.sendRequest(s.string(e) ? e : e.method, ...t),
    onRequest: (e, t) => c.onRequest(e, t),
    sendNotification: (e, t) => {
     const n = s.string(e) ? e : e.method;
     if (arguments.length === 1) {
      c.sendNotification(n);
     } else {
      c.sendNotification(n, t);
     }
    },
    onNotification: (e, t) => c.onNotification(e, t),
    onInitialize: e => w = e,
    onInitialized: e => c.onNotification(i.InitializedNotification.type, e),
    onShutdown: e => v = e,
    onExit: e => S = e,
    get console() {
     return l;
    },
    get telemetry() {
     return p;
    },
    get tracer() {
     return h;
    },
    get client() {
     return m;
    },
    get window() {
     return f;
    },
    get workspace() {
     return g;
    },
    onDidChangeConfiguration: e => c.onNotification(i.DidChangeConfigurationNotification.type, e),
    onDidChangeWatchedFiles: e => c.onNotification(i.DidChangeWatchedFilesNotification.type, e),
    __textDocumentSync: undefined,
    onDidOpenTextDocument: e => c.onNotification(i.DidOpenTextDocumentNotification.type, e),
    onDidChangeTextDocument: e => c.onNotification(i.DidChangeTextDocumentNotification.type, e),
    onDidCloseTextDocument: e => c.onNotification(i.DidCloseTextDocumentNotification.type, e),
    onWillSaveTextDocument: e => c.onNotification(i.WillSaveTextDocumentNotification.type, e),
    onWillSaveTextDocumentWaitUntil: e => c.onRequest(i.WillSaveTextDocumentWaitUntilRequest.type, e),
    onDidSaveTextDocument: e => c.onNotification(i.DidSaveTextDocumentNotification.type, e),
    sendDiagnostics: e => c.sendNotification(i.PublishDiagnosticsNotification.type, e),
    onHover: e => c.onRequest(i.HoverRequest.type, e),
    onCompletion: e => c.onRequest(i.CompletionRequest.type, e),
    onCompletionResolve: e => c.onRequest(i.CompletionResolveRequest.type, e),
    onSignatureHelp: e => c.onRequest(i.SignatureHelpRequest.type, e),
    onDefinition: e => c.onRequest(i.DefinitionRequest.type, e),
    onTypeDefinition: e => c.onRequest(i.TypeDefinitionRequest.type, e),
    onImplementation: e => c.onRequest(i.ImplementationRequest.type, e),
    onReferences: e => c.onRequest(i.ReferencesRequest.type, e),
    onDocumentHighlight: e => c.onRequest(i.DocumentHighlightRequest.type, e),
    onDocumentSymbol: e => c.onRequest(i.DocumentSymbolRequest.type, e),
    onWorkspaceSymbol: e => c.onRequest(i.WorkspaceSymbolRequest.type, e),
    onCodeAction: e => c.onRequest(i.CodeActionRequest.type, e),
    onCodeLens: e => c.onRequest(i.CodeLensRequest.type, e),
    onCodeLensResolve: e => c.onRequest(i.CodeLensResolveRequest.type, e),
    onDocumentFormatting: e => c.onRequest(i.DocumentFormattingRequest.type, e),
    onDocumentRangeFormatting: e => c.onRequest(i.DocumentRangeFormattingRequest.type, e),
    onDocumentOnTypeFormatting: e => c.onRequest(i.DocumentOnTypeFormattingRequest.type, e),
    onRenameRequest: e => c.onRequest(i.RenameRequest.type, e),
    onDocumentLinks: e => c.onRequest(i.DocumentLinkRequest.type, e),
    onDocumentLinkResolve: e => c.onRequest(i.DocumentLinkResolveRequest.type, e),
    onDocumentColor: e => c.onRequest(i.DocumentColorRequest.type, e),
    onColorPresentation: e => c.onRequest(i.ColorPresentationRequest.type, e),
    onExecuteCommand: e => c.onRequest(i.ExecuteCommandRequest.type, e),
    dispose: () => c.dispose()
   };
   for (let e of b) {
    e.attach(I);
   }
   c.onRequest(i.InitializeRequest.type, e => {
    if (s.number(e.processId) && u === void 0) {
     setInterval(() => {
      try {
       process.kill(e.processId, 0);
      } catch (e) {
       process.exit(d ? 0 : 1);
      }
     }, 3e3);
    }
    if (s.string(e.trace)) {
     h.trace = i.Trace.fromString(e.trace);
    }
    for (let t of b) {
     t.initialize(e.capabilities);
    }
    if (w) {
     let t = w(e, new i.CancellationTokenSource().token);
     return y(t).then(e => {
      if (e instanceof i.ResponseError) {
       return e;
      }
      let t = e;
      if (!t) {
       t = {
        capabilities: {}
       };
      }
      let n = t.capabilities;
      if (!n) {
       n = {};
       t.capabilities = n;
      }
      if (!n.textDocumentSync) {
       n.textDocumentSync = s.number(I.__textDocumentSync) ? I.__textDocumentSync : i.TextDocumentSyncKind.None;
      } else if (!s.number(n.textDocumentSync) && !s.number(n.textDocumentSync.change)) {
       n.textDocumentSync.change = s.number(I.__textDocumentSync) ? I.__textDocumentSync : i.TextDocumentSyncKind.None;
      }
      for (let e of b) {
       e.fillServerCapabilities(n);
      }
      return t;
     });
    } else {
     let e = {
      capabilities: {
       textDocumentSync: i.TextDocumentSyncKind.None
      }
     };
     for (let t of b) {
      t.fillServerCapabilities(e.capabilities);
     }
     return e;
    }
   });
   c.onRequest(i.ShutdownRequest.type, () => {
    d = true;
    if (v) {
     return v(new i.CancellationTokenSource().token);
    } else {
     return undefined;
    }
   });
   c.onNotification(i.ExitNotification.type, () => {
    try {
     if (S) {
      S();
     }
    } finally {
     if (d) {
      process.exit(0);
     } else {
      process.exit(1);
     }
    }
   });
   c.onNotification(i.SetTraceNotification.type, e => {
    h.trace = i.Trace.fromString(e.value);
   });
   return I;
  }
  var M;
  (function(e) {
   e.all = {
    __brand: "features"
   };
  })(M = t.ProposedFeatures || (t.ProposedFeatures = {}));
 },
 CcFB: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("C+6V");
  var i;
  (function(e) {
   e.type = new r.RequestType("textDocument/implementation");
  })(i = t.ImplementationRequest || (t.ImplementationRequest = {}));
 },
 D7GY: function(e, t, n) {
  "use strict";
  n.r(t);
  var r;
  (function(e) {
   e[e["Ident"] = 0] = "Ident";
   e[e["AtKeyword"] = 1] = "AtKeyword";
   e[e["String"] = 2] = "String";
   e[e["BadString"] = 3] = "BadString";
   e[e["UnquotedString"] = 4] = "UnquotedString";
   e[e["Hash"] = 5] = "Hash";
   e[e["Num"] = 6] = "Num";
   e[e["Percentage"] = 7] = "Percentage";
   e[e["Dimension"] = 8] = "Dimension";
   e[e["UnicodeRange"] = 9] = "UnicodeRange";
   e[e["CDO"] = 10] = "CDO";
   e[e["CDC"] = 11] = "CDC";
   e[e["Colon"] = 12] = "Colon";
   e[e["SemiColon"] = 13] = "SemiColon";
   e[e["CurlyL"] = 14] = "CurlyL";
   e[e["CurlyR"] = 15] = "CurlyR";
   e[e["ParenthesisL"] = 16] = "ParenthesisL";
   e[e["ParenthesisR"] = 17] = "ParenthesisR";
   e[e["BracketL"] = 18] = "BracketL";
   e[e["BracketR"] = 19] = "BracketR";
   e[e["Whitespace"] = 20] = "Whitespace";
   e[e["Includes"] = 21] = "Includes";
   e[e["Dashmatch"] = 22] = "Dashmatch";
   e[e["SubstringOperator"] = 23] = "SubstringOperator";
   e[e["PrefixOperator"] = 24] = "PrefixOperator";
   e[e["SuffixOperator"] = 25] = "SuffixOperator";
   e[e["Delim"] = 26] = "Delim";
   e[e["EMS"] = 27] = "EMS";
   e[e["EXS"] = 28] = "EXS";
   e[e["Length"] = 29] = "Length";
   e[e["Angle"] = 30] = "Angle";
   e[e["Time"] = 31] = "Time";
   e[e["Freq"] = 32] = "Freq";
   e[e["Exclamation"] = 33] = "Exclamation";
   e[e["Resolution"] = 34] = "Resolution";
   e[e["Comma"] = 35] = "Comma";
   e[e["Charset"] = 36] = "Charset";
   e[e["EscapedJavaScript"] = 37] = "EscapedJavaScript";
   e[e["BadEscapedJavaScript"] = 38] = "BadEscapedJavaScript";
   e[e["Comment"] = 39] = "Comment";
   e[e["SingleLineComment"] = 40] = "SingleLineComment";
   e[e["EOF"] = 41] = "EOF";
   e[e["CustomToken"] = 42] = "CustomToken";
  })(r || (r = {}));
  var i = function() {
   function e(e) {
    this.source = e;
    this.len = e.length;
    this.position = 0;
   }
   e.prototype.substring = function(e, t) {
    if (t === void 0) {
     t = this.position;
    }
    return this.source.substring(e, t);
   };
   e.prototype.eos = function() {
    return this.len <= this.position;
   };
   e.prototype.pos = function() {
    return this.position;
   };
   e.prototype.goBackTo = function(e) {
    this.position = e;
   };
   e.prototype.goBack = function(e) {
    this.position -= e;
   };
   e.prototype.advance = function(e) {
    this.position += e;
   };
   e.prototype.nextChar = function() {
    return this.source.charCodeAt(this.position++) || 0;
   };
   e.prototype.peekChar = function(e) {
    if (e === void 0) {
     e = 0;
    }
    return this.source.charCodeAt(this.position + e) || 0;
   };
   e.prototype.lookbackChar = function(e) {
    if (e === void 0) {
     e = 0;
    }
    return this.source.charCodeAt(this.position - e) || 0;
   };
   e.prototype.advanceIfChar = function(e) {
    if (e === this.source.charCodeAt(this.position)) {
     this.position++;
     return true;
    }
    return false;
   };
   e.prototype.advanceIfChars = function(e) {
    var t;
    if (this.position + e.length > this.source.length) {
     return false;
    }
    for (t = 0; t < e.length; t++) {
     if (this.source.charCodeAt(this.position + t) !== e[t]) {
      return false;
     }
    }
    this.advance(t);
    return true;
   };
   e.prototype.advanceWhileChar = function(e) {
    var t = this.position;
    while (this.position < this.len && e(this.source.charCodeAt(this.position))) {
     this.position++;
    }
    return this.position - t;
   };
   return e;
  }();
  var a = "a".charCodeAt(0);
  var o = "f".charCodeAt(0);
  var s = "z".charCodeAt(0);
  var l = "A".charCodeAt(0);
  var c = "F".charCodeAt(0);
  var h = "Z".charCodeAt(0);
  var d = "0".charCodeAt(0);
  var u = "9".charCodeAt(0);
  var p = "~".charCodeAt(0);
  var m = "^".charCodeAt(0);
  var f = "=".charCodeAt(0);
  var g = "|".charCodeAt(0);
  var b = "-".charCodeAt(0);
  var y = "_".charCodeAt(0);
  var v = "%".charCodeAt(0);
  var w = "*".charCodeAt(0);
  var x = "(".charCodeAt(0);
  var k = ")".charCodeAt(0);
  var C = "<".charCodeAt(0);
  var S = ">".charCodeAt(0);
  var F = "@".charCodeAt(0);
  var E = "#".charCodeAt(0);
  var T = "$".charCodeAt(0);
  var I = "\\".charCodeAt(0);
  var _ = "/".charCodeAt(0);
  var R = "\n".charCodeAt(0);
  var P = "\r".charCodeAt(0);
  var D = "\f".charCodeAt(0);
  var A = '"'.charCodeAt(0);
  var O = "'".charCodeAt(0);
  var z = " ".charCodeAt(0);
  var N = "\t".charCodeAt(0);
  var M = ";".charCodeAt(0);
  var U = ":".charCodeAt(0);
  var q = "{".charCodeAt(0);
  var j = "}".charCodeAt(0);
  var L = "[".charCodeAt(0);
  var V = "]".charCodeAt(0);
  var B = ",".charCodeAt(0);
  var W = ".".charCodeAt(0);
  var K = "!".charCodeAt(0);
  var $ = {};
  $[M] = r.SemiColon;
  $[U] = r.Colon;
  $[q] = r.CurlyL;
  $[j] = r.CurlyR;
  $[V] = r.BracketR;
  $[L] = r.BracketL;
  $[x] = r.ParenthesisL;
  $[k] = r.ParenthesisR;
  $[B] = r.Comma;
  var G = {};
  G["em"] = r.EMS;
  G["ex"] = r.EXS;
  G["px"] = r.Length;
  G["cm"] = r.Length;
  G["mm"] = r.Length;
  G["in"] = r.Length;
  G["pt"] = r.Length;
  G["pc"] = r.Length;
  G["deg"] = r.Angle;
  G["rad"] = r.Angle;
  G["grad"] = r.Angle;
  G["ms"] = r.Time;
  G["s"] = r.Time;
  G["hz"] = r.Freq;
  G["khz"] = r.Freq;
  G["%"] = r.Percentage;
  G["fr"] = r.Percentage;
  G["dpi"] = r.Resolution;
  G["dpcm"] = r.Resolution;
  var H = function() {
   function e() {
    this.stream = new i("");
    this.ignoreComment = true;
    this.ignoreWhitespace = true;
    this.inURL = false;
   }
   e.prototype.setSource = function(e) {
    this.stream = new i(e);
   };
   e.prototype.finishToken = function(e, t, n) {
    return {
     offset: e,
     len: this.stream.pos() - e,
     type: t,
     text: n || this.stream.substring(e)
    };
   };
   e.prototype.substring = function(e, t) {
    return this.stream.substring(e, e + t);
   };
   e.prototype.pos = function() {
    return this.stream.pos();
   };
   e.prototype.goBackTo = function(e) {
    this.stream.goBackTo(e);
   };
   e.prototype.scanUnquotedString = function() {
    var e = this.stream.pos();
    var t = [];
    if (this._unquotedString(t)) {
     return this.finishToken(e, r.UnquotedString, t.join(""));
    }
    return null;
   };
   e.prototype.scan = function() {
    var e = this.trivia();
    if (e !== null) {
     return e;
    }
    var t = this.stream.pos();
    if (this.stream.eos()) {
     return this.finishToken(t, r.EOF);
    }
    return this.scanNext(t);
   };
   e.prototype.scanNext = function(e) {
    if (this.stream.advanceIfChars([ C, K, b, b ])) {
     return this.finishToken(e, r.CDO);
    }
    if (this.stream.advanceIfChars([ b, b, S ])) {
     return this.finishToken(e, r.CDC);
    }
    var t = [];
    if (this.ident(t)) {
     return this.finishToken(e, r.Ident, t.join(""));
    }
    if (this.stream.advanceIfChar(F)) {
     t = [ "@" ];
     if (this._name(t)) {
      var n = t.join("");
      if (n === "@charset") {
       return this.finishToken(e, r.Charset, n);
      }
      return this.finishToken(e, r.AtKeyword, n);
     } else {
      return this.finishToken(e, r.Delim);
     }
    }
    if (this.stream.advanceIfChar(E)) {
     t = [ "#" ];
     if (this._name(t)) {
      return this.finishToken(e, r.Hash, t.join(""));
     } else {
      return this.finishToken(e, r.Delim);
     }
    }
    if (this.stream.advanceIfChar(K)) {
     return this.finishToken(e, r.Exclamation);
    }
    if (this._number()) {
     var i = this.stream.pos();
     t = [ this.stream.substring(e, i) ];
     if (this.stream.advanceIfChar(v)) {
      return this.finishToken(e, r.Percentage);
     } else if (this.ident(t)) {
      var a = this.stream.substring(i).toLowerCase();
      var o = G[a];
      if (typeof o !== "undefined") {
       return this.finishToken(e, o, t.join(""));
      } else {
       return this.finishToken(e, r.Dimension, t.join(""));
      }
     }
     return this.finishToken(e, r.Num);
    }
    t = [];
    var s = this._string(t);
    if (s !== null) {
     return this.finishToken(e, s, t.join(""));
    }
    s = $[this.stream.peekChar()];
    if (typeof s !== "undefined") {
     this.stream.advance(1);
     return this.finishToken(e, s);
    }
    if (this.stream.peekChar(0) === p && this.stream.peekChar(1) === f) {
     this.stream.advance(2);
     return this.finishToken(e, r.Includes);
    }
    if (this.stream.peekChar(0) === g && this.stream.peekChar(1) === f) {
     this.stream.advance(2);
     return this.finishToken(e, r.Dashmatch);
    }
    if (this.stream.peekChar(0) === w && this.stream.peekChar(1) === f) {
     this.stream.advance(2);
     return this.finishToken(e, r.SubstringOperator);
    }
    if (this.stream.peekChar(0) === m && this.stream.peekChar(1) === f) {
     this.stream.advance(2);
     return this.finishToken(e, r.PrefixOperator);
    }
    if (this.stream.peekChar(0) === T && this.stream.peekChar(1) === f) {
     this.stream.advance(2);
     return this.finishToken(e, r.SuffixOperator);
    }
    this.stream.nextChar();
    return this.finishToken(e, r.Delim);
   };
   e.prototype._matchWordAnyCase = function(e) {
    var t = 0;
    this.stream.advanceWhileChar(function(n) {
     var r = e[t] === n || e[t + 1] === n;
     if (r) {
      t += 2;
     }
     return r;
    });
    if (t === e.length) {
     return true;
    } else {
     this.stream.goBack(t / 2);
     return false;
    }
   };
   e.prototype.trivia = function() {
    while (true) {
     var e = this.stream.pos();
     if (this._whitespace()) {
      if (!this.ignoreWhitespace) {
       return this.finishToken(e, r.Whitespace);
      }
     } else if (this.comment()) {
      if (!this.ignoreComment) {
       return this.finishToken(e, r.Comment);
      }
     } else {
      return null;
     }
    }
   };
   e.prototype.comment = function() {
    if (this.stream.advanceIfChars([ _, w ])) {
     var e = false, t = false;
     this.stream.advanceWhileChar(function(n) {
      if (t && n === _) {
       e = true;
       return false;
      }
      t = n === w;
      return true;
     });
     if (e) {
      this.stream.advance(1);
     }
     return true;
    }
    return false;
   };
   e.prototype._number = function() {
    var e = 0, t;
    if (this.stream.peekChar() === W) {
     e = 1;
    }
    t = this.stream.peekChar(e);
    if (t >= d && t <= u) {
     this.stream.advance(e + 1);
     this.stream.advanceWhileChar(function(t) {
      return t >= d && t <= u || e === 0 && t === W;
     });
     return true;
    }
    return false;
   };
   e.prototype._newline = function(e) {
    var t = this.stream.peekChar();
    switch (t) {
    case P:
    case D:
    case R:
     this.stream.advance(1);
     e.push(String.fromCharCode(t));
     if (t === P && this.stream.advanceIfChar(R)) {
      e.push("\n");
     }
     return true;
    }
    return false;
   };
   e.prototype._escape = function(e, t) {
    var n = this.stream.peekChar();
    if (n === I) {
     this.stream.advance(1);
     n = this.stream.peekChar();
     var r = 0;
     while (r < 6 && (n >= d && n <= u || n >= a && n <= o || n >= l && n <= c)) {
      this.stream.advance(1);
      n = this.stream.peekChar();
      r++;
     }
     if (r > 0) {
      try {
       var i = parseInt(this.stream.substring(this.stream.pos() - r), 16);
       if (i) {
        e.push(String.fromCharCode(i));
       }
      } catch (e) {}
      if (n === z || n === N) {
       this.stream.advance(1);
      } else {
       this._newline([]);
      }
      return true;
     }
     if (n !== P && n !== D && n !== R) {
      this.stream.advance(1);
      e.push(String.fromCharCode(n));
      return true;
     } else if (t) {
      return this._newline(e);
     }
    }
    return false;
   };
   e.prototype._stringChar = function(e, t) {
    var n = this.stream.peekChar();
    if (n !== 0 && n !== e && n !== I && n !== P && n !== D && n !== R) {
     this.stream.advance(1);
     t.push(String.fromCharCode(n));
     return true;
    }
    return false;
   };
   e.prototype._string = function(e) {
    if (this.stream.peekChar() === O || this.stream.peekChar() === A) {
     var t = this.stream.nextChar();
     e.push(String.fromCharCode(t));
     while (this._stringChar(t, e) || this._escape(e, true)) {}
     if (this.stream.peekChar() === t) {
      this.stream.nextChar();
      e.push(String.fromCharCode(t));
      return r.String;
     } else {
      return r.BadString;
     }
    }
    return null;
   };
   e.prototype._unquotedChar = function(e) {
    var t = this.stream.peekChar();
    if (t !== 0 && t !== I && t !== O && t !== A && t !== x && t !== k && t !== z && t !== N && t !== R && t !== D && t !== P) {
     this.stream.advance(1);
     e.push(String.fromCharCode(t));
     return true;
    }
    return false;
   };
   e.prototype._unquotedString = function(e) {
    var t = false;
    while (this._unquotedChar(e) || this._escape(e)) {
     t = true;
    }
    return t;
   };
   e.prototype._whitespace = function() {
    var e = this.stream.advanceWhileChar(function(e) {
     return e === z || e === N || e === R || e === D || e === P;
    });
    return e > 0;
   };
   e.prototype._name = function(e) {
    var t = false;
    while (this._identChar(e) || this._escape(e)) {
     t = true;
    }
    return t;
   };
   e.prototype.ident = function(e) {
    var t = this.stream.pos();
    var n = this._minus(e);
    if (n && this._minus(e)) {
     if (this._identFirstChar(e) || this._escape(e)) {
      while (this._identChar(e) || this._escape(e)) {}
      return true;
     }
    } else if (this._identFirstChar(e) || this._escape(e)) {
     while (this._identChar(e) || this._escape(e)) {}
     return true;
    }
    this.stream.goBackTo(t);
    return false;
   };
   e.prototype._identFirstChar = function(e) {
    var t = this.stream.peekChar();
    if (t === y || t >= a && t <= s || t >= l && t <= h || t >= 128 && t <= 65535) {
     this.stream.advance(1);
     e.push(String.fromCharCode(t));
     return true;
    }
    return false;
   };
   e.prototype._minus = function(e) {
    var t = this.stream.peekChar();
    if (t === b) {
     this.stream.advance(1);
     e.push(String.fromCharCode(t));
     return true;
    }
    return false;
   };
   e.prototype._identChar = function(e) {
    var t = this.stream.peekChar();
    if (t === y || t === b || t >= a && t <= s || t >= l && t <= h || t >= d && t <= u || t >= 128 && t <= 65535) {
     this.stream.advance(1);
     e.push(String.fromCharCode(t));
     return true;
    }
    return false;
   };
   return e;
  }();
  var J = undefined && undefined.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  var X;
  (function(e) {
   e[e["Undefined"] = 0] = "Undefined";
   e[e["Identifier"] = 1] = "Identifier";
   e[e["Stylesheet"] = 2] = "Stylesheet";
   e[e["Ruleset"] = 3] = "Ruleset";
   e[e["Selector"] = 4] = "Selector";
   e[e["SimpleSelector"] = 5] = "SimpleSelector";
   e[e["SelectorInterpolation"] = 6] = "SelectorInterpolation";
   e[e["SelectorCombinator"] = 7] = "SelectorCombinator";
   e[e["SelectorCombinatorParent"] = 8] = "SelectorCombinatorParent";
   e[e["SelectorCombinatorSibling"] = 9] = "SelectorCombinatorSibling";
   e[e["SelectorCombinatorAllSiblings"] = 10] = "SelectorCombinatorAllSiblings";
   e[e["SelectorCombinatorShadowPiercingDescendant"] = 11] = "SelectorCombinatorShadowPiercingDescendant";
   e[e["Page"] = 12] = "Page";
   e[e["PageBoxMarginBox"] = 13] = "PageBoxMarginBox";
   e[e["ClassSelector"] = 14] = "ClassSelector";
   e[e["IdentifierSelector"] = 15] = "IdentifierSelector";
   e[e["ElementNameSelector"] = 16] = "ElementNameSelector";
   e[e["PseudoSelector"] = 17] = "PseudoSelector";
   e[e["AttributeSelector"] = 18] = "AttributeSelector";
   e[e["Declaration"] = 19] = "Declaration";
   e[e["Declarations"] = 20] = "Declarations";
   e[e["Property"] = 21] = "Property";
   e[e["Expression"] = 22] = "Expression";
   e[e["BinaryExpression"] = 23] = "BinaryExpression";
   e[e["Term"] = 24] = "Term";
   e[e["Operator"] = 25] = "Operator";
   e[e["Value"] = 26] = "Value";
   e[e["StringLiteral"] = 27] = "StringLiteral";
   e[e["URILiteral"] = 28] = "URILiteral";
   e[e["EscapedValue"] = 29] = "EscapedValue";
   e[e["Function"] = 30] = "Function";
   e[e["NumericValue"] = 31] = "NumericValue";
   e[e["HexColorValue"] = 32] = "HexColorValue";
   e[e["MixinDeclaration"] = 33] = "MixinDeclaration";
   e[e["MixinReference"] = 34] = "MixinReference";
   e[e["VariableName"] = 35] = "VariableName";
   e[e["VariableDeclaration"] = 36] = "VariableDeclaration";
   e[e["Prio"] = 37] = "Prio";
   e[e["Interpolation"] = 38] = "Interpolation";
   e[e["NestedProperties"] = 39] = "NestedProperties";
   e[e["ExtendsReference"] = 40] = "ExtendsReference";
   e[e["SelectorPlaceholder"] = 41] = "SelectorPlaceholder";
   e[e["Debug"] = 42] = "Debug";
   e[e["If"] = 43] = "If";
   e[e["Else"] = 44] = "Else";
   e[e["For"] = 45] = "For";
   e[e["Each"] = 46] = "Each";
   e[e["While"] = 47] = "While";
   e[e["MixinContent"] = 48] = "MixinContent";
   e[e["Media"] = 49] = "Media";
   e[e["Keyframe"] = 50] = "Keyframe";
   e[e["FontFace"] = 51] = "FontFace";
   e[e["Import"] = 52] = "Import";
   e[e["Namespace"] = 53] = "Namespace";
   e[e["Invocation"] = 54] = "Invocation";
   e[e["FunctionDeclaration"] = 55] = "FunctionDeclaration";
   e[e["ReturnStatement"] = 56] = "ReturnStatement";
   e[e["MediaQuery"] = 57] = "MediaQuery";
   e[e["FunctionParameter"] = 58] = "FunctionParameter";
   e[e["FunctionArgument"] = 59] = "FunctionArgument";
   e[e["KeyframeSelector"] = 60] = "KeyframeSelector";
   e[e["ViewPort"] = 61] = "ViewPort";
   e[e["Document"] = 62] = "Document";
   e[e["AtApplyRule"] = 63] = "AtApplyRule";
   e[e["CustomPropertyDeclaration"] = 64] = "CustomPropertyDeclaration";
   e[e["CustomPropertySet"] = 65] = "CustomPropertySet";
   e[e["ListEntry"] = 66] = "ListEntry";
   e[e["Supports"] = 67] = "Supports";
   e[e["SupportsCondition"] = 68] = "SupportsCondition";
   e[e["NamespacePrefix"] = 69] = "NamespacePrefix";
   e[e["GridLine"] = 70] = "GridLine";
   e[e["Plugin"] = 71] = "Plugin";
  })(X || (X = {}));
  var Y;
  (function(e) {
   e[e["Mixin"] = 0] = "Mixin";
   e[e["Rule"] = 1] = "Rule";
   e[e["Variable"] = 2] = "Variable";
   e[e["Function"] = 3] = "Function";
   e[e["Keyframe"] = 4] = "Keyframe";
   e[e["Unknown"] = 5] = "Unknown";
  })(Y || (Y = {}));
  function Q(e, t) {
   var n = null;
   if (!e || t < e.offset || t > e.end) {
    return null;
   }
   e.accept(function(e) {
    if (e.offset === -1 && e.length === -1) {
     return true;
    }
    if (e.offset <= t && e.end >= t) {
     if (!n) {
      n = e;
     } else if (e.length <= n.length) {
      n = e;
     }
     return true;
    }
    return false;
   });
   return n;
  }
  function Z(e, t) {
   var n = Q(e, t);
   var r = [];
   while (n) {
    r.unshift(n);
    n = n.parent;
   }
   return r;
  }
  function ee(e) {
   var t = e.findParent(X.Declaration);
   if (t && t.getValue() && t.getValue().encloses(e)) {
    return t;
   }
   return null;
  }
  var te = function() {
   function e(e, t, n) {
    if (e === void 0) {
     e = -1;
    }
    if (t === void 0) {
     t = -1;
    }
    this.parent = null;
    this.offset = e;
    this.length = t;
    if (n) {
     this.nodeType = n;
    }
   }
   Object.defineProperty(e.prototype, "end", {
    get: function() {
     return this.offset + this.length;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "type", {
    get: function() {
     return this.nodeType || X.Undefined;
    },
    set: function(e) {
     this.nodeType = e;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.getTextProvider = function() {
    var e = this;
    while (e && !e.textProvider) {
     e = e.parent;
    }
    if (e) {
     return e.textProvider;
    }
    return function() {
     return "unknown";
    };
   };
   e.prototype.getText = function() {
    return this.getTextProvider()(this.offset, this.length);
   };
   e.prototype.matches = function(e) {
    return this.length === e.length && this.getTextProvider()(this.offset, this.length) === e;
   };
   e.prototype.startsWith = function(e) {
    return this.length >= e.length && this.getTextProvider()(this.offset, e.length) === e;
   };
   e.prototype.endsWith = function(e) {
    return this.length >= e.length && this.getTextProvider()(this.end - e.length, e.length) === e;
   };
   e.prototype.accept = function(e) {
    if (e(this) && this.children) {
     for (var t = 0, n = this.children; t < n.length; t++) {
      var r = n[t];
      r.accept(e);
     }
    }
   };
   e.prototype.acceptVisitor = function(e) {
    this.accept(e.visitNode.bind(e));
   };
   e.prototype.adoptChild = function(e, t) {
    if (t === void 0) {
     t = -1;
    }
    if (e.parent && e.parent.children) {
     var n = e.parent.children.indexOf(e);
     if (n >= 0) {
      e.parent.children.splice(n, 1);
     }
    }
    e.parent = this;
    var r = this.children;
    if (!r) {
     r = this.children = [];
    }
    if (t !== -1) {
     r.splice(t, 0, e);
    } else {
     r.push(e);
    }
    return e;
   };
   e.prototype.attachTo = function(e, t) {
    if (t === void 0) {
     t = -1;
    }
    if (e) {
     e.adoptChild(this, t);
    }
    return this;
   };
   e.prototype.collectIssues = function(e) {
    if (this.issues) {
     e.push.apply(e, this.issues);
    }
   };
   e.prototype.addIssue = function(e) {
    if (!this.issues) {
     this.issues = [];
    }
    this.issues.push(e);
   };
   e.prototype.hasIssue = function(e) {
    return Array.isArray(this.issues) && this.issues.some(function(t) {
     return t.getRule() === e;
    });
   };
   e.prototype.isErroneous = function(e) {
    if (e === void 0) {
     e = false;
    }
    if (this.issues && this.issues.length > 0) {
     return true;
    }
    return e && Array.isArray(this.children) && this.children.some(function(e) {
     return e.isErroneous(true);
    });
   };
   e.prototype.setNode = function(e, t, n) {
    if (n === void 0) {
     n = -1;
    }
    if (t) {
     t.attachTo(this, n);
     this[e] = t;
     return true;
    }
    return false;
   };
   e.prototype.addChild = function(e) {
    if (e) {
     if (!this.children) {
      this.children = [];
     }
     e.attachTo(this);
     this.updateOffsetAndLength(e);
     return true;
    }
    return false;
   };
   e.prototype.updateOffsetAndLength = function(e) {
    if (e.offset < this.offset || this.offset === -1) {
     this.offset = e.offset;
    }
    var t = e.end;
    if (t > this.end || this.length === -1) {
     this.length = t - this.offset;
    }
   };
   e.prototype.hasChildren = function() {
    return this.children && this.children.length > 0;
   };
   e.prototype.getChildren = function() {
    return this.children ? this.children.slice(0) : [];
   };
   e.prototype.getChild = function(e) {
    if (this.children && e < this.children.length) {
     return this.children[e];
    }
    return null;
   };
   e.prototype.addChildren = function(e) {
    for (var t = 0, n = e; t < n.length; t++) {
     var r = n[t];
     this.addChild(r);
    }
   };
   e.prototype.findFirstChildBeforeOffset = function(e) {
    if (this.children) {
     var t = null;
     for (var n = this.children.length - 1; n >= 0; n--) {
      t = this.children[n];
      if (t.offset <= e) {
       return t;
      }
     }
    }
    return null;
   };
   e.prototype.findChildAtOffset = function(e, t) {
    var n = this.findFirstChildBeforeOffset(e);
    if (n && n.end >= e) {
     if (t) {
      return n.findChildAtOffset(e, true) || n;
     }
     return n;
    }
    return null;
   };
   e.prototype.encloses = function(e) {
    return this.offset <= e.offset && this.offset + this.length >= e.offset + e.length;
   };
   e.prototype.getParent = function() {
    var e = this.parent;
    while (e instanceof ne) {
     e = e.parent;
    }
    return e;
   };
   e.prototype.findParent = function(e) {
    var t = this;
    while (t && t.type !== e) {
     t = t.parent;
    }
    return t;
   };
   e.prototype.setData = function(e, t) {
    if (!this.options) {
     this.options = {};
    }
    this.options[e] = t;
   };
   e.prototype.getData = function(e) {
    if (!this.options || !this.options.hasOwnProperty(e)) {
     return null;
    }
    return this.options[e];
   };
   return e;
  }();
  var ne = function(e) {
   J(t, e);
   function t(t, n) {
    if (n === void 0) {
     n = -1;
    }
    var r = e.call(this, -1, -1) || this;
    r.attachTo(t, n);
    r.offset = -1;
    r.length = -1;
    return r;
   }
   return t;
  }(te);
  var re = function(e) {
   J(t, e);
   function t(t, n) {
    var r = e.call(this, t, n) || this;
    r.isCustomProperty = false;
    return r;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Identifier;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.containsInterpolation = function() {
    return this.hasChildren();
   };
   return t;
  }(te);
  var ie = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Stylesheet;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setName = function(e) {
    this.name = e;
   };
   return t;
  }(te);
  var ae = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Declarations;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(te);
  var oe = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   t.prototype.getDeclarations = function() {
    return this.declarations;
   };
   t.prototype.setDeclarations = function(e) {
    return this.setNode("declarations", e);
   };
   return t;
  }(te);
  var se = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Ruleset;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.getSelectors = function() {
    if (!this.selectors) {
     this.selectors = new ne(this);
    }
    return this.selectors;
   };
   t.prototype.isNested = function() {
    return !!this.parent && this.parent.findParent(X.Declarations) !== null;
   };
   return t;
  }(oe);
  var le = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Selector;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(te);
  var ce = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.SimpleSelector;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(te);
  var he = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.AtApplyRule;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setIdentifier = function(e) {
    return this.setNode("identifier", e, 0);
   };
   t.prototype.getIdentifier = function() {
    return this.identifier;
   };
   t.prototype.getName = function() {
    return this.identifier ? this.identifier.getText() : "";
   };
   return t;
  }(te);
  var de = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   return t;
  }(te);
  var ue = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.CustomPropertyDeclaration;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setProperty = function(e) {
    return this.setNode("property", e);
   };
   t.prototype.getProperty = function() {
    return this.property;
   };
   t.prototype.setValue = function(e) {
    return this.setNode("value", e);
   };
   t.prototype.getValue = function() {
    return this.value;
   };
   t.prototype.setPropertySet = function(e) {
    return this.setNode("propertySet", e);
   };
   t.prototype.getPropertySet = function() {
    return this.propertySet;
   };
   return t;
  }(de);
  var pe = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.CustomPropertySet;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(oe);
  var me = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Declaration;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setProperty = function(e) {
    return this.setNode("property", e);
   };
   t.prototype.getProperty = function() {
    return this.property;
   };
   t.prototype.getFullPropertyName = function() {
    var e = this.property ? this.property.getName() : "unknown";
    if (this.parent instanceof ae && this.parent.getParent() instanceof Ie) {
     var n = this.parent.getParent().getParent();
     if (n instanceof t) {
      return n.getFullPropertyName() + e;
     }
    }
    return e;
   };
   t.prototype.getNonPrefixedPropertyName = function() {
    var e = this.getFullPropertyName();
    if (e && e.charAt(0) === "-") {
     var t = e.indexOf("-", 1);
     if (t !== -1) {
      return e.substring(t + 1);
     }
    }
    return e;
   };
   t.prototype.setValue = function(e) {
    return this.setNode("value", e);
   };
   t.prototype.getValue = function() {
    return this.value;
   };
   t.prototype.setNestedProperties = function(e) {
    return this.setNode("nestedProprties", e);
   };
   t.prototype.getNestedProperties = function() {
    return this.nestedProprties;
   };
   return t;
  }(de);
  var fe = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Property;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setIdentifier = function(e) {
    return this.setNode("identifier", e);
   };
   t.prototype.getIdentifier = function() {
    return this.identifier;
   };
   t.prototype.getName = function() {
    return this.getText();
   };
   t.prototype.isCustomProperty = function() {
    return this.identifier.isCustomProperty;
   };
   return t;
  }(te);
  var ge = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Invocation;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.getArguments = function() {
    if (!this.arguments) {
     this.arguments = new ne(this);
    }
    return this.arguments;
   };
   return t;
  }(te);
  var be = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Function;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setIdentifier = function(e) {
    return this.setNode("identifier", e, 0);
   };
   t.prototype.getIdentifier = function() {
    return this.identifier;
   };
   t.prototype.getName = function() {
    return this.identifier ? this.identifier.getText() : "";
   };
   return t;
  }(ge);
  var ye = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.FunctionParameter;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setIdentifier = function(e) {
    return this.setNode("identifier", e, 0);
   };
   t.prototype.getIdentifier = function() {
    return this.identifier;
   };
   t.prototype.getName = function() {
    return this.identifier ? this.identifier.getText() : "";
   };
   t.prototype.setDefaultValue = function(e) {
    return this.setNode("defaultValue", e, 0);
   };
   t.prototype.getDefaultValue = function() {
    return this.defaultValue;
   };
   return t;
  }(te);
  var ve = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.FunctionArgument;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setIdentifier = function(e) {
    return this.setNode("identifier", e, 0);
   };
   t.prototype.getIdentifier = function() {
    return this.identifier;
   };
   t.prototype.getName = function() {
    return this.identifier ? this.identifier.getText() : "";
   };
   t.prototype.setValue = function(e) {
    return this.setNode("value", e, 0);
   };
   t.prototype.getValue = function() {
    return this.value;
   };
   return t;
  }(te);
  var we = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.If;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setExpression = function(e) {
    return this.setNode("expression", e, 0);
   };
   t.prototype.setElseClause = function(e) {
    return this.setNode("elseClause", e);
   };
   return t;
  }(oe);
  var xe = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.For;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setVariable = function(e) {
    return this.setNode("variable", e, 0);
   };
   return t;
  }(oe);
  var ke = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Each;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.getVariables = function() {
    if (!this.variables) {
     this.variables = new ne(this);
    }
    return this.variables;
   };
   return t;
  }(oe);
  var Ce = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.While;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(oe);
  var Se = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Else;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(oe);
  var Fe = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.FunctionDeclaration;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setIdentifier = function(e) {
    return this.setNode("identifier", e, 0);
   };
   t.prototype.getIdentifier = function() {
    return this.identifier;
   };
   t.prototype.getName = function() {
    return this.identifier ? this.identifier.getText() : "";
   };
   t.prototype.getParameters = function() {
    if (!this.parameters) {
     this.parameters = new ne(this);
    }
    return this.parameters;
   };
   return t;
  }(oe);
  var Ee = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.ViewPort;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(oe);
  var Te = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.FontFace;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(oe);
  var Ie = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.NestedProperties;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(oe);
  var _e = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Keyframe;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setKeyword = function(e) {
    return this.setNode("keyword", e, 0);
   };
   t.prototype.getKeyword = function() {
    return this.keyword;
   };
   t.prototype.setIdentifier = function(e) {
    return this.setNode("identifier", e, 0);
   };
   t.prototype.getIdentifier = function() {
    return this.identifier;
   };
   t.prototype.getName = function() {
    return this.identifier ? this.identifier.getText() : "";
   };
   return t;
  }(oe);
  var Re = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.KeyframeSelector;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(oe);
  var Pe = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Import;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setMedialist = function(e) {
    if (e) {
     e.attachTo(this);
     this.medialist = e;
     return true;
    }
    return false;
   };
   return t;
  }(te);
  var De = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Namespace;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(te);
  var Ae = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Media;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(oe);
  var Oe = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Supports;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(oe);
  var ze = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Document;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(oe);
  var Ne = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   t.prototype.getMediums = function() {
    if (!this.mediums) {
     this.mediums = new ne(this);
    }
    return this.mediums;
   };
   return t;
  }(te);
  var Me = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.MediaQuery;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(te);
  var Ue = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.SupportsCondition;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(te);
  var qe = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Page;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(oe);
  var je = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.PageBoxMarginBox;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(oe);
  var Le = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Expression;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(te);
  var Ve = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.BinaryExpression;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setLeft = function(e) {
    return this.setNode("left", e);
   };
   t.prototype.getLeft = function() {
    return this.left;
   };
   t.prototype.setRight = function(e) {
    return this.setNode("right", e);
   };
   t.prototype.getRight = function() {
    return this.right;
   };
   t.prototype.setOperator = function(e) {
    return this.setNode("operator", e);
   };
   t.prototype.getOperator = function() {
    return this.operator;
   };
   return t;
  }(te);
  var Be = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Term;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setOperator = function(e) {
    return this.setNode("operator", e);
   };
   t.prototype.getOperator = function() {
    return this.operator;
   };
   t.prototype.setExpression = function(e) {
    return this.setNode("expression", e);
   };
   t.prototype.getExpression = function() {
    return this.expression;
   };
   return t;
  }(te);
  var We = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.AttributeSelector;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setNamespacePrefix = function(e) {
    return this.setNode("namespacePrefix", e);
   };
   t.prototype.getNamespacePrefix = function() {
    return this.namespacePrefix;
   };
   t.prototype.setIdentifier = function(e) {
    return this.setNode("identifier", e);
   };
   t.prototype.getIdentifier = function() {
    return this.identifier;
   };
   t.prototype.setOperator = function(e) {
    return this.setNode("operator", e);
   };
   t.prototype.getOperator = function() {
    return this.operator;
   };
   t.prototype.setValue = function(e) {
    return this.setNode("value", e);
   };
   t.prototype.getValue = function() {
    return this.value;
   };
   return t;
  }(te);
  var Ke = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Operator;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(te);
  var $e = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.HexColorValue;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(te);
  var Ge = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.NumericValue;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.getValue = function() {
    var e = this.getText();
    var t = 0, n, r = ".".charCodeAt(0), i = "0".charCodeAt(0), a = "9".charCodeAt(0);
    for (var o = 0, s = e.length; o < s; o++) {
     n = e.charCodeAt(o);
     if (!(i <= n && n <= a || n === r)) {
      break;
     }
     t += 1;
    }
    return {
     value: e.substring(0, t),
     unit: t < e.length ? e.substring(t) : undefined
    };
   };
   return t;
  }(te);
  var He = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.VariableDeclaration;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setVariable = function(e) {
    if (e) {
     e.attachTo(this);
     this.variable = e;
     return true;
    }
    return false;
   };
   t.prototype.getVariable = function() {
    return this.variable;
   };
   t.prototype.getName = function() {
    return this.variable ? this.variable.getName() : "";
   };
   t.prototype.setValue = function(e) {
    if (e) {
     e.attachTo(this);
     this.value = e;
     return true;
    }
    return false;
   };
   t.prototype.getValue = function() {
    return this.value;
   };
   return t;
  }(de);
  var Je = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.Interpolation;
    },
    enumerable: true,
    configurable: true
   });
   return t;
  }(te);
  var Xe = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.VariableName;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.getName = function() {
    return this.getText();
   };
   return t;
  }(te);
  var Ye = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.ExtendsReference;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.getSelectors = function() {
    if (!this.selectors) {
     this.selectors = new ne(this);
    }
    return this.selectors;
   };
   return t;
  }(te);
  var Qe = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.MixinReference;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.getNamespaces = function() {
    if (!this.namespaces) {
     this.namespaces = new ne(this);
    }
    return this.namespaces;
   };
   t.prototype.setIdentifier = function(e) {
    return this.setNode("identifier", e, 0);
   };
   t.prototype.getIdentifier = function() {
    return this.identifier;
   };
   t.prototype.getName = function() {
    return this.identifier ? this.identifier.getText() : "";
   };
   t.prototype.getArguments = function() {
    if (!this.arguments) {
     this.arguments = new ne(this);
    }
    return this.arguments;
   };
   t.prototype.setContent = function(e) {
    return this.setNode("content", e);
   };
   t.prototype.getContent = function() {
    return this.content;
   };
   return t;
  }(te);
  var Ze = function(e) {
   J(t, e);
   function t(t, n) {
    return e.call(this, t, n) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.MixinDeclaration;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setIdentifier = function(e) {
    return this.setNode("identifier", e, 0);
   };
   t.prototype.getIdentifier = function() {
    return this.identifier;
   };
   t.prototype.getName = function() {
    return this.identifier ? this.identifier.getText() : "";
   };
   t.prototype.getParameters = function() {
    if (!this.parameters) {
     this.parameters = new ne(this);
    }
    return this.parameters;
   };
   t.prototype.setGuard = function(e) {
    if (e) {
     e.attachTo(this);
     this.guard = e;
    }
    return false;
   };
   return t;
  }(oe);
  var et = function(e) {
   J(t, e);
   function t() {
    return e !== null && e.apply(this, arguments) || this;
   }
   Object.defineProperty(t.prototype, "type", {
    get: function() {
     return X.ListEntry;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.setKey = function(e) {
    return this.setNode("key", e, 0);
   };
   t.prototype.setValue = function(e) {
    return this.setNode("value", e, 1);
   };
   return t;
  }(te);
  var tt = function(e) {
   J(t, e);
   function t() {
    return e !== null && e.apply(this, arguments) || this;
   }
   t.prototype.getConditions = function() {
    if (!this.conditions) {
     this.conditions = new ne(this);
    }
    return this.conditions;
   };
   return t;
  }(te);
  var nt = function(e) {
   J(t, e);
   function t() {
    return e !== null && e.apply(this, arguments) || this;
   }
   t.prototype.setVariable = function(e) {
    return this.setNode("variable", e);
   };
   return t;
  }(te);
  var rt;
  (function(e) {
   e[e["Ignore"] = 1] = "Ignore";
   e[e["Warning"] = 2] = "Warning";
   e[e["Error"] = 4] = "Error";
  })(rt || (rt = {}));
  var it = function() {
   function e(e, t, n, r, i, a) {
    if (i === void 0) {
     i = e.offset;
    }
    if (a === void 0) {
     a = e.length;
    }
    this.node = e;
    this.rule = t;
    this.level = n;
    this.message = r || t.message;
    this.offset = i;
    this.length = a;
   }
   e.prototype.getRule = function() {
    return this.rule;
   };
   e.prototype.getLevel = function() {
    return this.level;
   };
   e.prototype.getOffset = function() {
    return this.offset;
   };
   e.prototype.getLength = function() {
    return this.length;
   };
   e.prototype.getNode = function() {
    return this.node;
   };
   e.prototype.getMessage = function() {
    return this.message;
   };
   return e;
  }();
  var at = function() {
   function e() {
    this.entries = [];
   }
   e.entries = function(t) {
    var n = new e();
    t.acceptVisitor(n);
    return n.entries;
   };
   e.prototype.visitNode = function(e) {
    if (e.isErroneous()) {
     e.collectIssues(this.entries);
    }
    return true;
   };
   return e;
  }();
  var ot = n("wpTr");
  var st = ot["loadMessageBundle"]();
  var lt = function() {
   function e(e, t) {
    this.id = e;
    this.message = t;
   }
   return e;
  }();
  var ct = {
   NumberExpected: new lt("css-numberexpected", st("expected.number", "number expected")),
   ConditionExpected: new lt("css-conditionexpected", st("expected.condt", "condition expected")),
   RuleOrSelectorExpected: new lt("css-ruleorselectorexpected", st("expected.ruleorselector", "at-rule or selector expected")),
   DotExpected: new lt("css-dotexpected", st("expected.dot", "dot expected")),
   ColonExpected: new lt("css-colonexpected", st("expected.colon", "colon expected")),
   SemiColonExpected: new lt("css-semicolonexpected", st("expected.semicolon", "semi-colon expected")),
   TermExpected: new lt("css-termexpected", st("expected.term", "term expected")),
   ExpressionExpected: new lt("css-expressionexpected", st("expected.expression", "expression expected")),
   OperatorExpected: new lt("css-operatorexpected", st("expected.operator", "operator expected")),
   IdentifierExpected: new lt("css-identifierexpected", st("expected.ident", "identifier expected")),
   PercentageExpected: new lt("css-percentageexpected", st("expected.percentage", "percentage expected")),
   URIOrStringExpected: new lt("css-uriorstringexpected", st("expected.uriorstring", "uri or string expected")),
   URIExpected: new lt("css-uriexpected", st("expected.uri", "URI expected")),
   VariableNameExpected: new lt("css-varnameexpected", st("expected.varname", "variable name expected")),
   VariableValueExpected: new lt("css-varvalueexpected", st("expected.varvalue", "variable value expected")),
   PropertyValueExpected: new lt("css-propertyvalueexpected", st("expected.propvalue", "property value expected")),
   LeftCurlyExpected: new lt("css-lcurlyexpected", st("expected.lcurly", "{ expected")),
   RightCurlyExpected: new lt("css-rcurlyexpected", st("expected.rcurly", "} expected")),
   LeftSquareBracketExpected: new lt("css-rbracketexpected", st("expected.lsquare", "[ expected")),
   RightSquareBracketExpected: new lt("css-lbracketexpected", st("expected.rsquare", "] expected")),
   LeftParenthesisExpected: new lt("css-lparentexpected", st("expected.lparen", "( expected")),
   RightParenthesisExpected: new lt("css-rparentexpected", st("expected.rparent", ") expected")),
   CommaExpected: new lt("css-commaexpected", st("expected.comma", "comma expected")),
   PageDirectiveOrDeclarationExpected: new lt("css-pagedirordeclexpected", st("expected.pagedirordecl", "page directive or declaraton expected")),
   UnknownAtRule: new lt("css-unknownatrule", st("unknown.atrule", "at-rule unknown")),
   UnknownKeyword: new lt("css-unknownkeyword", st("unknown.keyword", "unknown keyword")),
   SelectorExpected: new lt("css-selectorexpected", st("expected.selector", "selector expected")),
   StringLiteralExpected: new lt("css-stringliteralexpected", st("expected.stringliteral", "string literal expected")),
   WhitespaceExpected: new lt("css-whitespaceexpected", st("expected.whitespace", "whitespace expected")),
   MediaQueryExpected: new lt("css-mediaqueryexpected", st("expected.mediaquery", "media query expected"))
  };
  var ht = {
   css: {
    atdirectives: [ {
     name: "@charset",
     desc: "Defines character set of the document."
    }, {
     name: "@counter-style",
     desc: "Defines a custom counter style.",
     browsers: "FF33"
    }, {
     name: "@font-face",
     desc: "Allows for linking to fonts that are automatically activated when needed. This permits authors to work around the limitation of 'web-safe' fonts, allowing for consistent rendering independent of the fonts available in a given user's environment."
    }, {
     name: "@font-feature-values",
     desc: "Defines named values for the indices used to select alternate glyphs for a given font family.",
     browsers: "FF34"
    }, {
     name: "@import",
     desc: "Includes content of another file."
    }, {
     name: "@keyframes",
     desc: "Defines set of animation key frames.",
     browsers: "E,C43,FF16,IE10,O30,S9"
    }, {
     name: "@media",
     desc: "Defines a stylesheet for a particular media type."
    }, {
     name: "@-moz-document",
     desc: "Gecko-specific at-rule that restricts the style rules contained within it based on the URL of the document.",
     browsers: "FF1.8"
    }, {
     name: "@-moz-keyframes",
     desc: "Defines set of animation key frames.",
     browsers: "FF5"
    }, {
     name: "@-ms-viewport",
     desc: "Specifies the size, zoom factor, and orientation of the viewport.",
     browsers: "E,IE10"
    }, {
     name: "@namespace",
     desc: "Declares a prefix and associates it with a namespace name.",
     browsers: "E,C,FF1,IE9,O8,S1"
    }, {
     name: "@-o-keyframes",
     desc: "Defines set of animation key frames.",
     browsers: "O12"
    }, {
     name: "@-o-viewport",
     desc: "Specifies the size, zoom factor, and orientation of the viewport.",
     browsers: "O11"
    }, {
     name: "@page",
     desc: "Directive defines various page parameters."
    }, {
     name: "@supports",
     desc: "A conditional group rule whose condition tests whether the user agent supports CSS property:value pairs.",
     browsers: "E,C28,FF22,O12.1,S9"
    }, {
     name: "@-webkit-keyframes",
     desc: "Defines set of animation key frames.",
     browsers: "C,S4"
    } ],
    pseudoclasses: [ {
     name: ":active",
     desc: "Applies while an element is being activated by the user. For example, between the times the user presses the mouse button and releases it."
    }, {
     name: ":any-link",
     desc: "Represents an element that acts as the source anchor of a hyperlink. Applies to both visited and unvisited links.",
     browsers: "S9"
    }, {
     name: ":checked",
     desc: "Radio and checkbox elements can be toggled by the user. Some menu items are 'checked' when the user selects them. When such elements are toggled 'on' the :checked pseudo-class applies.",
     browsers: "E,C,FF1,IE9,O9,S3.13"
    }, {
     name: ":corner-present",
     desc: "Non-standard. Indicates whether or not a scrollbar corner is present.",
     browsers: "C,S5"
    }, {
     name: ":decrement",
     desc: "Non-standard. Applies to buttons and track pieces. Indicates whether or not the button or track piece will decrement the view’s position when used.",
     browsers: "C,S5"
    }, {
     name: ":default",
     desc: "Applies to the one or more UI elements that are the default among a set of similar elements. Typically applies to context menu items, buttons, and select lists/menus.",
     browsers: "C,FF3,O10,S5"
    }, {
     name: ":disabled",
     desc: "Represents user interface elements that are in a disabled state; such elements have a corresponding enabled state.",
     browsers: "E,C,FF1.5,IE9,O9,S3.1"
    }, {
     name: ":double-button",
     desc: "Non-standard. Applies to buttons and track pieces. Applies when both buttons are displayed together at the same end of the scrollbar.",
     browsers: "C,S5"
    }, {
     name: ":empty",
     desc: "Represents an element that has no children at all.",
     browsers: "E,C,FF1.5,IE9,O9,S3.1"
    }, {
     name: ":enabled",
     desc: "Represents user interface elements that are in an enabled state; such elements have a corresponding disabled state.",
     browsers: "E,C,FF1.5,IE9,O9,S3.1"
    }, {
     name: ":end",
     desc: "Non-standard. Applies to buttons and track pieces. Indicates whether the object is placed after the thumb.",
     browsers: "C,S5"
    }, {
     name: ":first",
     desc: "When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context."
    }, {
     name: ":first-child",
     desc: "Same as :nth-child(1). Represents an element that is the first child of some other element.",
     browsers: "E,C,FF3,IE7,O9.5,S3.1"
    }, {
     name: ":first-of-type",
     desc: "Same as :nth-of-type(1). Represents an element that is the first sibling of its type in the list of children of its parent element.",
     browsers: "E,C,FF3.5,IE9,O9.5,S3.2"
    }, {
     name: ":focus",
     desc: "Applies while an element has the focus (accepts keyboard or mouse events, or other forms of input)."
    }, {
     name: ":fullscreen",
     desc: "Matches any element that has its fullscreen flag set.",
     browsers: "E"
    }, {
     name: ":future",
     desc: "Represents any element that is defined to occur entirely after a :current element.",
     browsers: "C,O16,S6"
    }, {
     name: ":horizontal",
     desc: "Non-standard. Applies to any scrollbar pieces that have a horizontal orientation.",
     browsers: "C,S5"
    }, {
     name: ":host",
     desc: "When evaluated in the context of a shadow tree, matches the shadow tree’s host element.",
     browsers: "C35,O22"
    }, {
     name: ":host()",
     desc: "When evaluated in the context of a shadow tree, it matches the shadow tree’s host element if the host element, in its normal context, matches the selector argument.",
     browsers: "C35,O22"
    }, {
     name: ":host-context()",
     desc: "Tests whether there is an ancestor, outside the shadow tree, which matches a particular selector.",
     browsers: "C35,O22"
    }, {
     name: ":hover",
     desc: "Applies while the user designates an element with a pointing device, but does not necessarily activate it. For example, a visual user agent could apply this pseudo-class when the cursor (mouse pointer) hovers over a box generated by the element."
    }, {
     name: ":increment",
     desc: "Non-standard. Applies to buttons and track pieces. Indicates whether or not the button or track piece will increment the view’s position when used.",
     browsers: "C,S5"
    }, {
     name: ":indeterminate",
     desc: "Applies to UI elements whose value is in an indeterminate state.",
     browsers: "E,C,FF3.6,IE9,O10.6,S3"
    }, {
     name: ":in-range",
     desc: "Used in conjunction with the min and max attributes, whether on a range input, a number field, or any other types that accept those attributes.",
     browsers: "E13,C,FF10,O9.6,S5.1"
    }, {
     name: ":invalid",
     desc: "An element is :valid or :invalid when it is, respectively, valid or invalid with respect to data validity semantics defined by a different specification.",
     browsers: "E,C,FF4,IE10,O10,S5"
    }, {
     name: ":lang()",
     desc: "Represents an element that is in language specified.",
     browsers: "E,C,FF1,IE8,O8,S3"
    }, {
     name: ":last-child",
     desc: "Same as :nth-last-child(1). Represents an element that is the last child of some other element.",
     browsers: "E,C,FF1,IE9,O9.5,S3.1"
    }, {
     name: ":last-of-type",
     desc: "Same as :nth-last-of-type(1). Represents an element that is the last sibling of its type in the list of children of its parent element.",
     browsers: "E,C,FF3.5,IE9,O9.5,S3.1"
    }, {
     name: ":left",
     desc: "When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context."
    }, {
     name: ":link",
     desc: "Applies to links that have not yet been visited."
    }, {
     name: ":matches()",
     desc: "Takes a selector list as its argument. It represents an element that is represented by its argument.",
     browsers: "S9"
    }, {
     name: ":-moz-any()",
     desc: "Represents an element that is represented by the selector list passed as its argument. Standardized as :matches().",
     browsers: "FF4"
    }, {
     name: ":-moz-any-link",
     desc: "Represents an element that acts as the source anchor of a hyperlink. Applies to both visited and unvisited links.",
     browsers: "FF1"
    }, {
     name: ":-moz-broken",
     desc: "Non-standard. Matches elements representing broken images.",
     browsers: "FF3"
    }, {
     name: ":-moz-drag-over",
     desc: "Non-standard. Matches elements when a drag-over event applies to it.",
     browsers: "FF1"
    }, {
     name: ":-moz-first-node",
     desc: "Non-standard. Represents an element that is the first child node of some other element.",
     browsers: "FF1"
    }, {
     name: ":-moz-focusring",
     desc: "Non-standard. Matches an element that has focus and focus ring drawing is enabled in the browser.",
     browsers: "FF4"
    }, {
     name: ":-moz-full-screen",
     desc: "Matches any element that has its fullscreen flag set. Standardized as :fullscreen.",
     browsers: "FF9"
    }, {
     name: ":-moz-last-node",
     desc: "Non-standard. Represents an element that is the last child node of some other element.",
     browsers: "FF1"
    }, {
     name: ":-moz-loading",
     desc: "Non-standard. Matches elements, such as images, that haven’t started loading yet.",
     browsers: "FF3"
    }, {
     name: ":-moz-only-whitespace",
     desc: "The same as :empty, except that it additionally matches elements that only contain code points affected by whitespace processing. Standardized as :blank.",
     browsers: "FF1.5"
    }, {
     name: ":-moz-placeholder",
     desc: "Deprecated. Represents placeholder text in an input field. Use ::-moz-placeholder for Firefox 19+.",
     browsers: "FF4"
    }, {
     name: ":-moz-submit-invalid",
     desc: "Non-standard. Represents any submit button when the contents of the associated form are not valid.",
     browsers: "FF4"
    }, {
     name: ":-moz-suppressed",
     desc: "Non-standard. Matches elements representing images that have been blocked from loading.",
     browsers: "FF3"
    }, {
     name: ":-moz-ui-invalid",
     desc: "Non-standard. Represents any validated form element whose value isn't valid ",
     browsers: "FF4"
    }, {
     name: ":-moz-ui-valid",
     desc: "Non-standard. Represents any validated form element whose value is valid ",
     browsers: "FF4"
    }, {
     name: ":-moz-user-disabled",
     desc: "Non-standard. Matches elements representing images that have been disabled due to the user’s preferences.",
     browsers: "FF3"
    }, {
     name: ":-moz-window-inactive",
     desc: "Non-standard. Matches elements in an inactive window.",
     browsers: "FF4"
    }, {
     name: ":-ms-fullscreen",
     desc: "Matches any element that has its fullscreen flag set.",
     browsers: "IE11"
    }, {
     name: ":-ms-input-placeholder",
     desc: "Represents placeholder text in an input field. Note: for Edge use the pseudo-element ::-ms-input-placeholder. Standardized as ::placeholder.",
     browsers: "IE10"
    }, {
     name: ":-ms-keyboard-active",
     desc: "Windows Store apps only. Applies one or more styles to an element when it has focus and the user presses the space bar.",
     browsers: "IE10"
    }, {
     name: ":-ms-lang()",
     desc: "Represents an element that is in the language specified. Accepts a comma seperated list of language tokens.",
     browsers: "E,IE10"
    }, {
     name: ":no-button",
     desc: "Non-standard. Applies to track pieces. Applies when there is no button at that end of the track.",
     browsers: "C,S5"
    }, {
     name: ":not()",
     desc: "The negation pseudo-class, :not(X), is a functional notation taking a simple selector (excluding the negation pseudo-class itself) as an argument. It represents an element that is not represented by its argument.",
     browsers: "E,C,FF1,IE9,O9.5,S2"
    }, {
     name: ":nth-child()",
     desc: "Represents an element that has an+b-1 siblings before it in the document tree, for any positive integer or zero value of n, and has a parent element.",
     browsers: "E,C,FF3.5,IE9,O9.5,S3.1"
    }, {
     name: ":nth-last-child()",
     desc: "Represents an element that has an+b-1 siblings after it in the document tree, for any positive integer or zero value of n, and has a parent element.",
     browsers: "E,C,FF3.5,IE9,O9.5,S3.1"
    }, {
     name: ":nth-last-of-type()",
     desc: "Represents an element that has an+b-1 siblings with the same expanded element name after it in the document tree, for any zero or positive integer value of n, and has a parent element.",
     browsers: "E,C,FF3.5,IE9,O9.5,S3.1"
    }, {
     name: ":nth-of-type()",
     desc: "Represents an element that has an+b-1 siblings with the same expanded element name before it in the document tree, for any zero or positive integer value of n, and has a parent element.",
     browsers: "E,C,FF3.5,IE9,O9.5,S3.1"
    }, {
     name: ":only-child",
     desc: "Represents an element that has a parent element and whose parent element has no other element children. Same as :first-child:last-child or :nth-child(1):nth-last-child(1), but with a lower specificity.",
     browsers: "E,C,FF1.5,IE9,O9.5,S3.1"
    }, {
     name: ":only-of-type",
     desc: "Matches every element that is the only child of its type, of its parent. Same as :first-of-type:last-of-type or :nth-of-type(1):nth-last-of-type(1), but with a lower specificity.",
     browsers: "E,C,FF3.5,IE9,O9.5,S3.2"
    }, {
     name: ":optional",
     desc: "A form element is :required or :optional if a value for it is, respectively, required or optional before the form it belongs to is submitted. Elements that are not form elements are neither required nor optional.",
     browsers: "E,C,FF4,IE10,O10,S5"
    }, {
     name: ":out-of-range",
     desc: "Used in conjunction with the min and max attributes, whether on a range input, a number field, or any other types that accept those attributes.",
     browsers: "E13,C,FF10,O9.6,S5.1"
    }, {
     name: ":past",
     desc: "Represents any element that is defined to occur entirely prior to a :current element.",
     browsers: "C,O16,S6"
    }, {
     name: ":read-only",
     desc: "An element whose contents are not user-alterable is :read-only. However, elements whose contents are user-alterable (such as text input fields) are considered to be in a :read-write state. In typical documents, most elements are :read-only.",
     browsers: "E13,C,FF10,O9,S4"
    }, {
     name: ":read-write",
     desc: "An element whose contents are not user-alterable is :read-only. However, elements whose contents are user-alterable (such as text input fields) are considered to be in a :read-write state. In typical documents, most elements are :read-only.",
     browsers: "E13,C,FF10,O9,S4"
    }, {
     name: ":required",
     desc: "A form element is :required or :optional if a value for it is, respectively, required or optional before the form it belongs to is submitted. Elements that are not form elements are neither required nor optional.",
     browsers: "E,C,FF4,IE10,O10,S5"
    }, {
     name: ":right",
     desc: "When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context."
    }, {
     name: ":root",
     desc: "Represents an element that is the root of the document. In HTML 4, this is always the HTML element.",
     browsers: "E,C,FF1,IE9,O9.5,S1"
    }, {
     name: ":scope",
     desc: "Represents any element that is in the contextual reference element set.",
     browsers: "FF32,S6"
    }, {
     name: ":single-button",
     desc: "Non-standard. Applies to buttons and track pieces. Applies when both buttons are displayed separately at either end of the scrollbar.",
     browsers: "C,S5"
    }, {
     name: ":start",
     desc: "Non-standard. Applies to buttons and track pieces. Indicates whether the object is placed before the thumb.",
     browsers: "C,S5"
    }, {
     name: ":target",
     desc: "Some URIs refer to a location within a resource. This kind of URI ends with a 'number sign' (#) followed by an anchor identifier (called the fragment identifier).",
     browsers: "E,C,FF1,IE9,O9.5,S1"
    }, {
     name: ":valid",
     desc: "An element is :valid or :invalid when it is, respectively, valid or invalid with respect to data validity semantics defined by a different specification.",
     browsers: "E,C,FF4,IE10,O10,S5"
    }, {
     name: ":vertical",
     desc: "Non-standard. Applies to any scrollbar pieces that have a vertical orientation.",
     browsers: "C,S5"
    }, {
     name: ":visited",
     desc: "Applies once the link has been visited by the user."
    }, {
     name: ":-webkit-any()",
     desc: "Represents an element that is represented by the selector list passed as its argument. Standardized as :matches().",
     browsers: "C,S5"
    }, {
     name: ":-webkit-full-screen",
     desc: "Matches any element that has its fullscreen flag set. Standardized as :fullscreen.",
     browsers: "C,S6"
    }, {
     name: ":window-inactive",
     desc: "Non-standard. Applies to all scrollbar pieces. Indicates whether or not the window containing the scrollbar is currently active.",
     browsers: "C,S3"
    } ],
    pseudoelements: [ {
     name: "::after",
     desc: "Represents a styleable child pseudo-element immediately after the originating element’s actual content.",
     browsers: "E,C,FF1.5,IE9,O9,S4"
    }, {
     name: "::backdrop",
     desc: "Used to create a backdrop that hides the underlying document for an element in a top layer (such as an element that is displayed fullscreen).",
     browsers: "E"
    }, {
     name: "::before",
     desc: "Represents a styleable child pseudo-element immediately before the originating element’s actual content.",
     browsers: "E,C,FF1.5,IE9,O9,S4"
    }, {
     name: "::content",
     desc: "Deprecated. Matches the distribution list itself, on elements that have one. Use ::slotted for forward compatibility.",
     browsers: "C35,O22"
    }, {
     name: "::cue",
     browsers: "C,O16,S6"
    }, {
     name: "::cue()",
     browsers: "C,O16,S6"
    }, {
     name: "::cue-region",
     browsers: "C,O16,S6"
    }, {
     name: "::cue-region()",
     browsers: "C,O16,S6"
    }, {
     name: "::first-letter",
     desc: "Represents the first letter of an element, if it is not preceded by any other content (such as images or inline tables) on its line.",
     browsers: "E,C,FF1.5,IE9,O7,S1"
    }, {
     name: "::first-line",
     desc: "Describes the contents of the first formatted line of its originating element.",
     browsers: "E,C,FF1.5,IE9,O7,S1"
    }, {
     name: "::-moz-focus-inner",
     browsers: "FF4"
    }, {
     name: "::-moz-focus-outer",
     browsers: "FF4"
    }, {
     name: "::-moz-list-bullet",
     desc: "Used to style the bullet of a list element. Similar to the standardized ::marker.",
     browsers: "FF1"
    }, {
     name: "::-moz-list-number",
     desc: "Used to style the numbers of a list element. Similar to the standardized ::marker.",
     browsers: "FF1"
    }, {
     name: "::-moz-placeholder",
     desc: "Represents placeholder text in an input field",
     browsers: "FF19"
    }, {
     name: "::-moz-progress-bar",
     desc: "Represents the bar portion of a progress bar.",
     browsers: "FF9"
    }, {
     name: "::-moz-selection",
     desc: "Represents the portion of a document that has been highlighted by the user.",
     browsers: "FF1"
    }, {
     name: "::-ms-backdrop",
     desc: "Used to create a backdrop that hides the underlying document for an element in a top layer (such as an element that is displayed fullscreen).",
     browsers: "IE11"
    }, {
     name: "::-ms-browse",
     desc: "Represents the browse button of an input type=file control.",
     browsers: "E,IE10"
    }, {
     name: "::-ms-check",
     desc: "Represents the check of a checkbox or radio button input control.",
     browsers: "E,IE10"
    }, {
     name: "::-ms-clear",
     desc: "Represents the clear button of a text input control",
     browsers: "E,IE10"
    }, {
     name: "::-ms-expand",
     desc: "Represents the drop-down button of a select control.",
     browsers: "E,IE10"
    }, {
     name: "::-ms-fill",
     desc: "Represents the bar portion of a progress bar.",
     browsers: "E,IE10"
    }, {
     name: "::-ms-fill-lower",
     desc: "Represents the portion of the slider track from its smallest value up to the value currently selected by the thumb. In a left-to-right layout, this is the portion of the slider track to the left of the thumb.",
     browsers: "E,IE10"
    }, {
     name: "::-ms-fill-upper",
     desc: "Represents the portion of the slider track from the value currently selected by the thumb up to the slider's largest value. In a left-to-right layout, this is the portion of the slider track to the right of the thumb.",
     browsers: "E,IE10"
    }, {
     name: "::-ms-reveal",
     desc: "Represents the password reveal button of an input type=password control.",
     browsers: "E,IE10"
    }, {
     name: "::-ms-thumb",
     desc: "Represents the portion of range input control (also known as a slider control) that the user drags.",
     browsers: "E,IE10"
    }, {
     name: "::-ms-ticks-after",
     desc: "Represents the tick marks of a slider that begin just after the thumb and continue up to the slider's largest value. In a left-to-right layout, these are the ticks to the right of the thumb.",
     browsers: "E,IE10"
    }, {
     name: "::-ms-ticks-before",
     desc: "Represents the tick marks of a slider that represent its smallest values up to the value currently selected by the thumb. In a left-to-right layout, these are the ticks to the left of the thumb.",
     browsers: "E,IE10"
    }, {
     name: "::-ms-tooltip",
     desc: "Represents the tooltip of a slider (input type=range).",
     browsers: "E,IE10"
    }, {
     name: "::-ms-track",
     desc: "Represents the track of a slider.",
     browsers: "E,IE10"
    }, {
     name: "::-ms-value",
     desc: "Represents the content of a text or password input control, or a select control.",
     browsers: "E,IE10"
    }, {
     name: "::selection",
     desc: "Represents the portion of a document that has been highlighted by the user.",
     browsers: "E,C,IE9,O9.5,S1.1"
    }, {
     name: "::shadow",
     desc: "Matches the shadow root if an element has a shadow tree.",
     browsers: "C35,O22"
    }, {
     name: "::-webkit-file-upload-button",
     browsers: "C,O,S6"
    }, {
     name: "::-webkit-inner-spin-button",
     browsers: "C,O,S6"
    }, {
     name: "::-webkit-input-placeholder",
     browsers: "C,S4"
    }, {
     name: "::-webkit-keygen-select",
     browsers: "C,O,S6"
    }, {
     name: "::-webkit-meter-bar",
     browsers: "E13,C,O15,S6"
    }, {
     name: "::-webkit-meter-even-less-good-value",
     browsers: "E13,C,O15,S6"
    }, {
     name: "::-webkit-meter-optimum-value",
     browsers: "E13,C,O15,S6"
    }, {
     name: "::-webkit-meter-suboptimal-value",
     browsers: "E13,C,O15,S6"
    }, {
     name: "::-webkit-outer-spin-button",
     browsers: "C,O,S6"
    }, {
     name: "::-webkit-progress-bar",
     browsers: "C,S3"
    }, {
     name: "::-webkit-progress-inner-element",
     browsers: "C,S3"
    }, {
     name: "::-webkit-progress-value",
     browsers: "C,S3"
    }, {
     name: "::-webkit-resizer",
     browsers: "C,S5"
    }, {
     name: "::-webkit-scrollbar",
     browsers: "C,S5"
    }, {
     name: "::-webkit-scrollbar-button",
     browsers: "C,S5"
    }, {
     name: "::-webkit-scrollbar-corner",
     browsers: "C,S5"
    }, {
     name: "::-webkit-scrollbar-thumb",
     browsers: "C,S5"
    }, {
     name: "::-webkit-scrollbar-track",
     browsers: "C,S5"
    }, {
     name: "::-webkit-scrollbar-track-piece",
     browsers: "C,S5"
    }, {
     name: "::-webkit-search-cancel-button",
     browsers: "C,S4"
    }, {
     name: "::-webkit-search-decoration",
     browsers: "C,S4"
    }, {
     name: "::-webkit-search-results-button",
     browsers: "C,S4"
    }, {
     name: "::-webkit-search-results-decoration",
     browsers: "C,S4"
    }, {
     name: "::-webkit-slider-runnable-track",
     browsers: "C,O,S6"
    }, {
     name: "::-webkit-slider-thumb",
     browsers: "C,O,S6"
    }, {
     name: "::-webkit-textfield-decoration-container",
     browsers: "C,O,S6"
    }, {
     name: "::-webkit-validation-bubble",
     browsers: "C,O,S6"
    }, {
     name: "::-webkit-validation-bubble-arrow",
     browsers: "C,O,S6"
    }, {
     name: "::-webkit-validation-bubble-arrow-clipper",
     browsers: "C,O,S6"
    }, {
     name: "::-webkit-validation-bubble-heading",
     browsers: "C,O,S6"
    }, {
     name: "::-webkit-validation-bubble-message",
     browsers: "C,O,S6"
    }, {
     name: "::-webkit-validation-bubble-text-block",
     browsers: "C,O,S6"
    } ],
    properties: [ {
     name: "additive-symbols",
     desc: "@counter-style descriptor. Specifies the symbols used by the marker-construction algorithm specified by the system descriptor. Needs to be specified if the counter system is 'additive'.",
     browsers: "FF33",
     restriction: "integer, string, image, identifier",
     syntax: "[ <integer> && <symbol> ]#"
    }, {
     name: "align-content",
     desc: "Aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how 'justify-content' aligns individual items within the main-axis.",
     browsers: "E,C29,FF22,IE11,O12.1,S9",
     restriction: "enum",
     values: [ {
      name: "center",
      desc: "Lines are packed toward the center of the flex container."
     }, {
      name: "flex-end",
      desc: "Lines are packed toward the end of the flex container."
     }, {
      name: "flex-start",
      desc: "Lines are packed toward the start of the flex container."
     }, {
      name: "space-around",
      desc: "Lines are evenly distributed in the flex container, with half-size spaces on either end."
     }, {
      name: "space-between",
      desc: "Lines are evenly distributed in the flex container."
     }, {
      name: "stretch",
      desc: "Lines stretch to take up the remaining space."
     } ],
     syntax: "normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>"
    }, {
     name: "align-items",
     desc: "Aligns flex items along the cross axis of the current line of the flex container.",
     browsers: "E,C29,FF22,IE11,O12.1,S9",
     restriction: "enum",
     values: [ {
      name: "baseline",
      desc: "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
     }, {
      name: "center",
      desc: "The flex item’s margin box is centered in the cross axis within the line."
     }, {
      name: "flex-end",
      desc: "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
     }, {
      name: "flex-start",
      desc: "The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line."
     }, {
      name: "stretch",
      desc: "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
     } ],
     syntax: "normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]"
    }, {
     name: "justify-items",
     desc: "Defines the default justify-self for all items of the box, given them the default way of justifying each box along the appropriate axi",
     browsers: "FF45",
     restriction: "enum",
     values: [ {
      name: "auto"
     }, {
      name: "normal"
     }, {
      name: "end"
     }, {
      name: "start"
     }, {
      name: "flex-end",
      desc: '"Flex items are packed toward the end of the line."'
     }, {
      name: "flex-start",
      desc: '"Flex items are packed toward the start of the line."'
     }, {
      name: "self-end"
     }, {
      name: "self-start"
     }, {
      name: "center",
      desc: "The items are packed flush to each other toward the center of the of the alignment container."
     }, {
      name: "left"
     }, {
      name: "right"
     }, {
      name: "baseline"
     }, {
      name: "first baseline"
     }, {
      name: "last baseline"
     }, {
      name: "stretch",
      desc: "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
     }, {
      name: "save"
     }, {
      name: "unsave"
     }, {
      name: "legacy"
     } ],
     syntax: "normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]"
    }, {
     name: "justify-self",
     desc: "Defines the way of justifying a box inside its container along the appropriate axis.",
     browsers: "FF45",
     restriction: "enum",
     values: [ {
      name: "auto"
     }, {
      name: "normal"
     }, {
      name: "end"
     }, {
      name: "start"
     }, {
      name: "flex-end",
      desc: '"Flex items are packed toward the end of the line."'
     }, {
      name: "flex-start",
      desc: '"Flex items are packed toward the start of the line."'
     }, {
      name: "self-end"
     }, {
      name: "self-start"
     }, {
      name: "center",
      desc: "The items are packed flush to each other toward the center of the of the alignment container."
     }, {
      name: "left"
     }, {
      name: "right"
     }, {
      name: "baseline"
     }, {
      name: "first baseline"
     }, {
      name: "last baseline"
     }, {
      name: "stretch",
      desc: "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
     }, {
      name: "save"
     }, {
      name: "unsave"
     } ],
     syntax: "auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]"
    }, {
     name: "align-self",
     desc: "Allows the default alignment along the cross axis to be overridden for individual flex items.",
     browsers: "E,C29,FF22,IE11,O12.1,S9",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Computes to the value of 'align-items' on the element’s parent, or 'stretch' if the element has no parent. On absolutely positioned elements, it computes to itself."
     }, {
      name: "baseline",
      desc: "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
     }, {
      name: "center",
      desc: "The flex item’s margin box is centered in the cross axis within the line."
     }, {
      name: "flex-end",
      desc: "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
     }, {
      name: "flex-start",
      desc: "The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line."
     }, {
      name: "stretch",
      desc: "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
     } ],
     syntax: "auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>"
    }, {
     name: "all",
     desc: "Shorthand that resets all properties except 'direction' and 'unicode-bidi'.",
     browsers: "C37,FF27,O24",
     restriction: "enum",
     values: [],
     syntax: "initial | inherit | unset | revert"
    }, {
     name: "alt",
     desc: "Provides alternative text for assistive technology to replace the genenerated content of a ::before or ::after element.",
     browsers: "S9",
     restriction: "string, enum",
     values: []
    }, {
     name: "animation",
     desc: "Shorthand property combines six of the animation properties into a single property.",
     browsers: "E,C43,FF16,IE10,O12.1,S9",
     restriction: "time, timing-function, enum, identifier, number",
     values: [ {
      name: "alternate"
     }, {
      name: "alternate-reverse"
     }, {
      name: "backwards"
     }, {
      name: "both",
      desc: "Both forwards and backwards fill modes are applied."
     }, {
      name: "forwards"
     }, {
      name: "infinite",
      desc: "Causes the animation to repeat forever."
     }, {
      name: "none",
      desc: "No animation is performed"
     }, {
      name: "normal",
      desc: "Normal playback."
     }, {
      name: "reverse",
      desc: "All iterations of the animation are played in the reverse direction from the way they were specified."
     } ],
     syntax: "<single-animation>#"
    }, {
     name: "animation-delay",
     desc: "Defines when the animation will start.",
     browsers: "E,C43,FF16,IE10,O12.1,S9",
     restriction: "time",
     syntax: "<time>#"
    }, {
     name: "animation-direction",
     desc: "Defines whether or not the animation should play in reverse on alternate cycles.",
     browsers: "E,C43,FF16,IE10,O12.1,S9",
     restriction: "enum",
     values: [ {
      name: "alternate"
     }, {
      name: "alternate-reverse"
     }, {
      name: "normal",
      desc: "Normal playback."
     }, {
      name: "reverse",
      desc: "All iterations of the animation are played in the reverse direction from the way they were specified."
     } ],
     syntax: "<single-animation-direction>#"
    }, {
     name: "animation-duration",
     desc: "Defines the length of time that an animation takes to complete one cycle.",
     browsers: "E,C43,FF16,IE10,O12.1,S9",
     restriction: "time",
     syntax: "<time>#"
    }, {
     name: "animation-fill-mode",
     desc: "Defines what values are applied by the animation outside the time it is executing.",
     browsers: "E,C43,FF16,IE10,O12.1,S9",
     restriction: "enum",
     values: [ {
      name: "backwards"
     }, {
      name: "both",
      desc: "Both forwards and backwards fill modes are applied."
     }, {
      name: "forwards"
     }, {
      name: "none",
      desc: "There is no change to the property value between the time the animation is applied and the time the animation begins playing or after the animation completes."
     } ],
     syntax: "<single-animation-fill-mode>#"
    }, {
     name: "animation-iteration-count",
     desc: "Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.",
     browsers: "E,C43,FF16,IE10,O12.1,S9",
     restriction: "number, enum",
     values: [ {
      name: "infinite",
      desc: "Causes the animation to repeat forever."
     } ],
     syntax: "<single-animation-iteration-count>#"
    }, {
     name: "animation-name",
     desc: "Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.",
     browsers: "E,C43,FF16,IE10,O12.1,S9",
     restriction: "identifier, enum",
     values: [ {
      name: "none",
      desc: "No animation is performed"
     } ],
     syntax: "[ none | <keyframes-name> ]#"
    }, {
     name: "animation-play-state",
     desc: "Defines whether the animation is running or paused.",
     browsers: "E,C43,FF16,IE10,O12.1,S9",
     restriction: "enum",
     values: [ {
      name: "paused"
     }, {
      name: "running"
     } ],
     syntax: "<single-animation-play-state>#"
    }, {
     name: "animation-timing-function",
     desc: "Describes how the animation will progress over one cycle of its duration.",
     browsers: "E,C43,FF16,IE10,O12.1,S9",
     restriction: "timing-function",
     syntax: "<single-timing-function>#"
    }, {
     name: "backface-visibility",
     desc: "Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.",
     browsers: "E,C36,FF16,IE10,O23",
     restriction: "enum",
     values: [ {
      name: "hidden",
      desc: "Back side is hidden."
     }, {
      name: "visible",
      desc: "Back side is visible."
     } ],
     syntax: "visible | hidden"
    }, {
     name: "background",
     desc: "Shorthand property for setting most background properties at the same place in the style sheet.",
     restriction: "enum, image, color, position, length, repeat, percentage, box",
     values: [ {
      name: "fixed",
      desc: "The background is fixed with regard to the viewport. In paged media where there is no viewport, a 'fixed' background is fixed with respect to the page box and therefore replicated on every page."
     }, {
      name: "local",
      desc: "The background is fixed with regard to the element's contents: if the element has a scrolling mechanism, the background scrolls with the element's contents."
     }, {
      name: "scroll",
      desc: "The background is fixed with regard to the element itself and does not scroll with its contents. (It is effectively attached to the element's border.)"
     } ],
     syntax: "[ <bg-layer> , ]* <final-bg-layer>"
    }, {
     name: "background-attachment",
     desc: "Specifies whether the background images are fixed with regard to the viewport ('fixed') or scroll along with the element ('scroll') or its contents ('local').",
     restriction: "enum",
     values: [ {
      name: "fixed",
      desc: "The background is fixed with regard to the viewport. In paged media where there is no viewport, a 'fixed' background is fixed with respect to the page box and therefore replicated on every page."
     }, {
      name: "local",
      desc: "The background is fixed with regard to the element’s contents: if the element has a scrolling mechanism, the background scrolls with the element’s contents.",
      browsers: "E,C,FF25,IE9,O11.5,S5"
     }, {
      name: "scroll",
      desc: "The background is fixed with regard to the element itself and does not scroll with its contents. (It is effectively attached to the element’s border.)"
     } ],
     syntax: "<attachment>#"
    }, {
     name: "background-blend-mode",
     desc: "Defines the blending mode of each background layer.",
     browsers: "C35,FF30,O22,S7.1",
     restriction: "enum",
     values: [ {
      name: "normal",
      desc: "Default attribute which specifies no blending"
     }, {
      name: "multiply"
     }, {
      name: "screen"
     }, {
      name: "overlay"
     }, {
      name: "darken"
     }, {
      name: "lighten"
     }, {
      name: "color-dodge"
     }, {
      name: "color-burn"
     }, {
      name: "hard-light"
     }, {
      name: "soft-light"
     }, {
      name: "difference"
     }, {
      name: "exclusion"
     }, {
      name: "hue",
      browsers: "C35,FF30,O22"
     }, {
      name: "saturation",
      browsers: "C35,FF30,O22"
     }, {
      name: "color",
      browsers: "C35,FF30,O22"
     }, {
      name: "luminosity",
      browsers: "C35,FF30,O22"
     } ],
     syntax: "<blend-mode>#"
    }, {
     name: "background-clip",
     desc: "Determines the background painting area.",
     browsers: "E,C,FF4,IE9,O10.5,S3",
     restriction: "box",
     syntax: "<box>#"
    }, {
     name: "background-color",
     desc: "Sets the background color of an element.",
     restriction: "color",
     syntax: "<color>"
    }, {
     name: "background-image",
     desc: "Sets the background image(s) of an element.",
     restriction: "image, enum",
     values: [ {
      name: "none",
      desc: "Counts as an image layer but draws nothing."
     } ],
     syntax: "<bg-image>#"
    }, {
     name: "background-origin",
     desc: "For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).",
     browsers: "E,C,FF4,IE9,O10.5,S3",
     restriction: "box",
     syntax: "<box>#"
    }, {
     name: "background-position",
     desc: "Specifies the initial position of the background image(s) (after any resizing) within their corresponding background positioning area.",
     restriction: "position, length, percentage",
     syntax: "<bg-position>#"
    }, {
     name: "background-position-x",
     desc: "If background images have been specified, this property specifies their initial position (after any resizing) within their corresponding background positioning area.",
     browsers: "E,IE6",
     restriction: "length, percentage",
     values: [ {
      name: "center",
      desc: "Equivalent to '50%' ('left 50%') for the horizontal position if the horizontal position is not otherwise specified, or '50%' ('top 50%') for the vertical position if it is."
     }, {
      name: "left",
      desc: "Equivalent to '0%' for the horizontal position if one or two values are given, otherwise specifies the left edge as the origin for the next offset."
     }, {
      name: "right",
      desc: "Equivalent to '100%' for the horizontal position if one or two values are given, otherwise specifies the right edge as the origin for the next offset."
     } ],
     status: "e",
     syntax: "[ center | [ left | right | x-start | x-end ]? <length-percentage>? ]#"
    }, {
     name: "background-position-y",
     desc: "If background images have been specified, this property specifies their initial position (after any resizing) within their corresponding background positioning area.",
     browsers: "E,IE6",
     restriction: "length, percentage",
     values: [ {
      name: "bottom",
      desc: "Equivalent to '100%' for the vertical position if one or two values are given, otherwise specifies the bottom edge as the origin for the next offset."
     }, {
      name: "center",
      desc: "Equivalent to '50%' ('left 50%') for the horizontal position if the horizontal position is not otherwise specified, or '50%' ('top 50%') for the vertical position if it is."
     }, {
      name: "top",
      desc: "Equivalent to '0%' for the vertical position if one or two values are given, otherwise specifies the top edge as the origin for the next offset."
     } ],
     status: "e",
     syntax: "[ center | [ top | bottom | y-start | y-end ]? <length-percentage>? ]#"
    }, {
     name: "background-repeat",
     desc: "Specifies how background images are tiled after they have been sized and positioned.",
     restriction: "repeat",
     values: [],
     syntax: "<repeat-style>#"
    }, {
     name: "background-size",
     desc: "Specifies the size of the background images.",
     browsers: "E,C,FF4,IE9,O10,S4.1",
     restriction: "length, percentage",
     values: [ {
      name: "auto",
      desc: "Resolved by using the image’s intrinsic ratio and the size of the other dimension, or failing that, using the image’s intrinsic size, or failing that, treating it as 100%."
     }, {
      name: "contain",
      desc: "Scale the image, while preserving its intrinsic aspect ratio (if any), to the largest size such that both its width and its height can fit inside the background positioning area."
     }, {
      name: "cover",
      desc: "Scale the image, while preserving its intrinsic aspect ratio (if any), to the smallest size such that both its width and its height can completely cover the background positioning area."
     } ],
     syntax: "<bg-size>#"
    }, {
     name: "behavior",
     desc: "IE only. Used to extend behaviors of the browser.",
     browsers: "IE6",
     restriction: "url"
    }, {
     name: "block-size",
     desc: "Logical 'width'. Mapping depends on the element’s 'writing-mode'.",
     browsers: "FF41",
     restriction: "length, percentage",
     values: [ {
      name: "auto",
      desc: "Depends on the values of other properties."
     } ],
     syntax: "<'width'>"
    }, {
     name: "border",
     desc: "Shorthand property for setting border width, style, and color.",
     restriction: "length, line-width, line-style, color",
     syntax: "<br-width> || <br-style> || <color>"
    }, {
     name: "border-block-end",
     desc: "Logical 'border-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, line-width, line-style, color",
     syntax: "<'border-width'> || <'border-style'> || <'color'>"
    }, {
     name: "border-block-start",
     desc: "Logical 'border-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, line-width, line-style, color",
     syntax: "<'border-width'> || <'border-style'> || <'color'>"
    }, {
     name: "border-block-end-color",
     desc: "Logical 'border-bottom-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "color",
     syntax: "<'color'>"
    }, {
     name: "border-block-start-color",
     desc: "Logical 'border-top-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "color",
     syntax: "<'color'>"
    }, {
     name: "border-block-end-style",
     desc: "Logical 'border-bottom-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "line-style",
     syntax: "<'border-style'>"
    }, {
     name: "border-block-start-style",
     desc: "Logical 'border-top-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "lline-style",
     syntax: "<'border-style'>"
    }, {
     name: "border-block-end-width",
     desc: "Logical 'border-bottom-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, line-width",
     syntax: "<'border-width'>"
    }, {
     name: "border-block-start-width",
     desc: "Logical 'border-top-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, line-width",
     syntax: "<'border-width'>"
    }, {
     name: "border-bottom",
     desc: "Shorthand property for setting border width, style and color.",
     restriction: "length, line-width, line-style, color",
     syntax: "<br-width> || <br-style> || <color>"
    }, {
     name: "border-bottom-color",
     desc: "Sets the color of the bottom border.",
     restriction: "color",
     syntax: "<color>"
    }, {
     name: "border-bottom-left-radius",
     desc: "Defines the radii of the bottom left outer border edge.",
     browsers: "E,C,FF4,IE9,O10.5,S5",
     restriction: "length, percentage",
     syntax: "<length-percentage>{1,2}"
    }, {
     name: "border-bottom-right-radius",
     desc: "Defines the radii of the bottom right outer border edge.",
     browsers: "E,C,FF4,IE9,O10.5,S5",
     restriction: "length, percentage",
     syntax: "<length-percentage>{1,2}"
    }, {
     name: "border-bottom-style",
     desc: "Sets the style of the bottom border.",
     restriction: "line-style",
     syntax: "<br-style>"
    }, {
     name: "border-bottom-width",
     desc: "Sets the thickness of the bottom border.",
     restriction: "length, line-width",
     syntax: "<br-width>"
    }, {
     name: "border-collapse",
     desc: "Selects a table's border model.",
     restriction: "enum",
     values: [ {
      name: "collapse",
      desc: "Selects the collapsing borders model."
     }, {
      name: "separate",
      desc: "Selects the separated borders border model."
     } ],
     syntax: "collapse | separate"
    }, {
     name: "border-color",
     desc: "The color of the border around all four edges of an element.",
     restriction: "color",
     values: [],
     syntax: "<color>{1,4}"
    }, {
     name: "border-image",
     desc: "Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.",
     browsers: "E,C16,FF15,IE11,O15,S6",
     restriction: "length, percentage, number, url, enum",
     values: [ {
      name: "auto",
      desc: "If 'auto' is specified then the border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
     }, {
      name: "fill",
      desc: "Causes the middle part of the border-image to be preserved."
     }, {
      name: "none",
      desc: "Use the border styles."
     }, {
      name: "repeat"
     }, {
      name: "round",
      desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
     }, {
      name: "space",
      desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
     }, {
      name: "stretch",
      desc: "The image is stretched to fill the area."
     }, {
      name: "url()"
     } ],
     syntax: "<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>"
    }, {
     name: "border-image-outset",
     desc: "The values specify the amount by which the border image area extends beyond the border box on the top, right, bottom, and left sides respectively. If the fourth value is absent, it is the same as the second. If the third one is also absent, it is the same as the first. If the second one is also absent, it is the same as the first. Numbers represent multiples of the corresponding border-width.",
     browsers: "E,C16,FF15,IE11,O15,S6",
     restriction: "length, number",
     syntax: "[ <length> | <number> ]{1,4}"
    }, {
     name: "border-image-repeat",
     desc: "Specifies how the images for the sides and the middle part of the border image are scaled and tiled. If the second keyword is absent, it is assumed to be the same as the first.",
     browsers: "E,C16,FF15,IE11,O15,S6",
     restriction: "enum",
     values: [ {
      name: "repeat"
     }, {
      name: "round",
      desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
     }, {
      name: "space",
      desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
     }, {
      name: "stretch",
      desc: "The image is stretched to fill the area."
     } ],
     syntax: "[ stretch | repeat | round | space ]{1,2}"
    }, {
     name: "border-image-slice",
     desc: "Specifies inward offsets from the top, right, bottom, and left edges of the image, dividing it into nine regions: four corners, four edges and a middle.",
     browsers: "E,C16,FF15,IE11,O15,S6",
     restriction: "number, percentage",
     values: [ {
      name: "fill",
      desc: "Causes the middle part of the border-image to be preserved."
     } ],
     syntax: "<number-percentage>{1,4} && fill?"
    }, {
     name: "border-image-source",
     desc: "Specifies an image to use instead of the border styles given by the 'border-style' properties and as an additional background layer for the element. If the value is 'none' or if the image cannot be displayed, the border styles will be used.",
     browsers: "E,C16,FF15,IE11,O15,S6",
     restriction: "image",
     values: [ {
      name: "none",
      desc: "Use the border styles."
     } ],
     syntax: "none | <image>"
    }, {
     name: "border-image-width",
     desc: "The four values of 'border-image-width' specify offsets that are used to divide the border image area into nine parts. They represent inward distances from the top, right, bottom, and left sides of the area, respectively.",
     browsers: "E,C16,FF15,IE11,O15,S6",
     restriction: "length, percentage, number",
     values: [ {
      name: "auto",
      desc: "The border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
     } ],
     syntax: "[ <length-percentage> | <number> | auto ]{1,4}"
    }, {
     name: "border-inline-end",
     desc: "Logical 'border-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, line-width, line-style, color",
     syntax: "<'border-width'> || <'border-style'> || <'color'>"
    }, {
     name: "border-inline-start",
     desc: "Logical 'border-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, line-width, line-style, color",
     syntax: "<'border-width'> || <'border-style'> || <'color'>"
    }, {
     name: "border-inline-end-color",
     desc: "Logical 'border-right-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "color",
     syntax: "<'color'>"
    }, {
     name: "border-inline-start-color",
     desc: "Logical 'border-left-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "color",
     syntax: "<'color'>"
    }, {
     name: "border-inline-end-style",
     desc: "Logical 'border-right-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "line-style",
     syntax: "<'border-style'>"
    }, {
     name: "border-inline-start-style",
     desc: "Logical 'border-left-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "lline-style",
     syntax: "<'border-style'>"
    }, {
     name: "border-inline-end-width",
     desc: "Logical 'border-right-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, line-width",
     syntax: "<'border-width'>"
    }, {
     name: "border-inline-start-width",
     desc: "Logical 'border-left-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, line-width",
     syntax: "<'border-width'>"
    }, {
     name: "border-left",
     desc: "Shorthand property for setting border width, style and color",
     restriction: "length, line-width, line-style, color",
     syntax: "<br-width> || <br-style> || <color>"
    }, {
     name: "border-left-color",
     desc: "Sets the color of the left border.",
     restriction: "color",
     syntax: "<color>"
    }, {
     name: "border-left-style",
     desc: "Sets the style of the left border.",
     restriction: "line-style",
     syntax: "<br-style>"
    }, {
     name: "border-left-width",
     desc: "Sets the thickness of the left border.",
     restriction: "length, line-width",
     syntax: "<br-width>"
    }, {
     name: "border-radius",
     desc: "Defines the radii of the outer border edge.",
     browsers: "E,C,FF4,IE9,O10.5,S5",
     restriction: "length, percentage",
     syntax: "<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?"
    }, {
     name: "border-right",
     desc: "Shorthand property for setting border width, style and color",
     restriction: "length, line-width, line-style, color",
     syntax: "<br-width> || <br-style> || <color>"
    }, {
     name: "border-right-color",
     desc: "Sets the color of the right border.",
     restriction: "color",
     syntax: "<color>"
    }, {
     name: "border-right-style",
     desc: "Sets the style of the right border.",
     restriction: "line-style",
     syntax: "<br-style>"
    }, {
     name: "border-right-width",
     desc: "Sets the thickness of the right border.",
     restriction: "length, line-width",
     syntax: "<br-width>"
    }, {
     name: "border-spacing",
     desc: "The lengths specify the distance that separates adjoining cell borders. If one length is specified, it gives both the horizontal and vertical spacing. If two are specified, the first gives the horizontal spacing and the second the vertical spacing. Lengths may not be negative.",
     browsers: "E,C,FF1,IE8,O7,S1.2",
     restriction: "length",
     syntax: "<length> <length>?"
    }, {
     name: "border-style",
     desc: "The style of the border around edges of an element.",
     restriction: "line-style",
     values: [],
     syntax: "<br-style>{1,4}"
    }, {
     name: "border-top",
     desc: "Shorthand property for setting border width, style and color",
     restriction: "length, line-width, line-style, color",
     syntax: "<br-width> || <br-style> || <color>"
    }, {
     name: "border-top-color",
     desc: "Sets the color of the top border.",
     restriction: "color",
     syntax: "<color>"
    }, {
     name: "border-top-left-radius",
     desc: "Defines the radii of the top left outer border edge.",
     browsers: "E,C,FF4,IE9,O10.5,S5",
     restriction: "length, percentage",
     syntax: "<length-percentage>{1,2}"
    }, {
     name: "border-top-right-radius",
     desc: "Defines the radii of the top right outer border edge.",
     browsers: "E,C,FF4,IE9,O10.5,S5",
     restriction: "length, percentage",
     syntax: "<length-percentage>{1,2}"
    }, {
     name: "border-top-style",
     desc: "Sets the style of the top border.",
     restriction: "line-style",
     syntax: "<br-style>"
    }, {
     name: "border-top-width",
     desc: "Sets the thickness of the top border.",
     restriction: "length, line-width",
     syntax: "<br-width>"
    }, {
     name: "border-width",
     desc: "Shorthand that sets the four 'border-*-width' properties. If it has four values, they set top, right, bottom and left in that order. If left is missing, it is the same as right; if bottom is missing, it is the same as top; if right is missing, it is the same as top.",
     restriction: "length, line-width",
     values: [],
     syntax: "<br-width>{1,4}"
    }, {
     name: "bottom",
     desc: "Specifies how far an absolutely positioned box's bottom margin edge is offset above the bottom edge of the box's 'containing block'.",
     restriction: "length, percentage",
     values: [ {
      name: "auto",
      desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
     } ],
     syntax: "<length> | <percentage> | auto"
    }, {
     name: "box-decoration-break",
     desc: "Specifies whether individual boxes are treated as broken pieces of one continuous box, or whether each box is individually wrapped with the border and padding.",
     browsers: "FF32,O11",
     restriction: "enum",
     values: [ {
      name: "clone"
     }, {
      name: "slice"
     } ],
     syntax: "slice | clone"
    }, {
     name: "box-shadow",
     desc: "Attaches one or more drop-shadows to the box. The property is a comma-separated list of shadows, each specified by 2-4 length values, an optional color, and an optional 'inset' keyword. Omitted lengths are 0; omitted colors are a user agent chosen color.",
     browsers: "E,C,FF4,IE9,O11.5,S5.1",
     restriction: "length, color, enum",
     values: [ {
      name: "inset"
     } ],
     syntax: "none | <shadow>#"
    }, {
     name: "box-sizing",
     desc: "Specifies the behavior of the 'width' and 'height' properties.",
     browsers: "E,C10,FF29,IE8,O8,S5.1",
     restriction: "enum",
     values: [ {
      name: "border-box"
     }, {
      name: "content-box"
     } ],
     syntax: "content-box | border-box"
    }, {
     name: "break-after",
     desc: "Describes the page/column/region break behavior after the generated box.",
     browsers: "E,IE10,O11.5",
     restriction: "enum",
     values: [ {
      name: "always",
      desc: "Always force a page break before/after the generated box."
     }, {
      name: "auto",
      desc: "Neither force nor forbid a page/column break before/after the principal box."
     }, {
      name: "avoid",
      desc: "Avoid a break before/after the principal box."
     }, {
      name: "avoid-column",
      desc: "Avoid a column break before/after the principal box."
     }, {
      name: "avoid-page",
      desc: "Avoid a page break before/after the principal box."
     }, {
      name: "column",
      desc: "Always force a column break before/after the principal box."
     }, {
      name: "left",
      desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
     }, {
      name: "page",
      desc: "Always force a page break before/after the principal box."
     }, {
      name: "right",
      desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
     } ],
     syntax: "auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region"
    }, {
     name: "break-before",
     desc: "Describes the page/column/region break behavior before the generated box.",
     browsers: "E,IE10,O11.5",
     restriction: "enum",
     values: [ {
      name: "always",
      desc: "Always force a page break before/after the generated box."
     }, {
      name: "auto",
      desc: "Neither force nor forbid a page/column break before/after the principal box."
     }, {
      name: "avoid",
      desc: "Avoid a break before/after the principal box."
     }, {
      name: "avoid-column",
      desc: "Avoid a column break before/after the principal box."
     }, {
      name: "avoid-page",
      desc: "Avoid a page break before/after the principal box."
     }, {
      name: "column",
      desc: "Always force a column break before/after the principal box."
     }, {
      name: "left",
      desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
     }, {
      name: "page",
      desc: "Always force a page break before/after the principal box."
     }, {
      name: "right",
      desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
     } ],
     syntax: "auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region"
    }, {
     name: "break-inside",
     desc: "Describes the page/column/region break behavior inside the principal box.",
     browsers: "E,IE10,O11.5",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Impose no additional breaking constraints within the box."
     }, {
      name: "avoid",
      desc: "Avoid breaks within the box."
     }, {
      name: "avoid-column",
      desc: "Avoid a column break within the box."
     }, {
      name: "avoid-page",
      desc: "Avoid a page break within the box."
     } ],
     syntax: "auto | avoid | avoid-page | avoid-column | avoid-region"
    }, {
     name: "caption-side",
     desc: "Specifies the position of the caption box with respect to the table box.",
     browsers: "E,C,FF,IE8,O,S",
     restriction: "enum",
     values: [ {
      name: "bottom",
      desc: "Positions the caption box below the table box."
     }, {
      name: "top",
      desc: "Positions the caption box above the table box."
     } ],
     syntax: "top | bottom | block-start | block-end | inline-start | inline-end"
    }, {
     name: "caret-color",
     desc: "Controls the color of the text insertion indicator.",
     browsers: "C60,FF55,O46",
     restriction: "color, enum",
     values: [ {
      name: "auto",
      desc: "The user agent selects an appropriate color for the caret. This is generally currentcolor, but the user agent may choose a different color to ensure good visibility and contrast with the surrounding content, taking into account the value of currentcolor, the background, shadows, and other factors."
     } ],
     syntax: "auto | <color>"
    }, {
     name: "clear",
     desc: "Indicates which sides of an element's box(es) may not be adjacent to an earlier floating box. The 'clear' property does not consider floats inside the element itself or in other block formatting contexts.",
     restriction: "enum",
     values: [ {
      name: "both",
      desc: "The clearance of the generated box is set to the amount necessary to place the top border edge below the bottom outer edge of any right-floating and left-floating boxes that resulted from elements earlier in the source document."
     }, {
      name: "left",
      desc: "The clearance of the generated box is set to the amount necessary to place the top border edge below the bottom outer edge of any left-floating boxes that resulted from elements earlier in the source document."
     }, {
      name: "none",
      desc: "No constraint on the box's position with respect to floats."
     }, {
      name: "right",
      desc: "The clearance of the generated box is set to the amount necessary to place the top border edge below the bottom outer edge of any right-floating boxes that resulted from elements earlier in the source document."
     } ],
     syntax: "none | left | right | both | inline-start | inline-end"
    }, {
     name: "clip",
     desc: "Deprecated. Use the 'clip-path' property when support allows. Defines the visible portion of an element’s box.",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "The element does not clip."
     }, {
      name: "rect()"
     } ],
     syntax: "<shape> | auto"
    }, {
     name: "clip-path",
     desc: "Specifies a clipping path where everything inside the path is visable and everything outside is clipped out.",
     browsers: "FF3.5",
     restriction: "url, shape, geometry-box, enum",
     values: [ {
      name: "none",
      desc: "No clipping path gets created."
     }, {
      name: "url()",
      desc: "References a <clipPath> element to create a clipping path."
     } ],
     syntax: "<clip-source> | [ <basic-shape> || <geometry-box> ] | none"
    }, {
     name: "clip-rule",
     desc: "Indicates the algorithm which is to be used to determine what parts of the canvas are included inside the shape.",
     browsers: "E,C5,FF3,IE10,O9,S6",
     restriction: "enum",
     values: [ {
      name: "evenodd"
     }, {
      name: "nonzero"
     } ]
    }, {
     name: "color",
     desc: "Color of an element's text",
     restriction: "color",
     syntax: "<color>"
    }, {
     name: "color-interpolation-filters",
     desc: "Specifies the color space for imaging operations performed via filter effects.",
     browsers: "E,C5,FF3,IE10,O9,S6",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Color operations are not required to occur in a particular color space."
     }, {
      name: "linearRGB"
     }, {
      name: "sRGB"
     } ]
    }, {
     name: "column-count",
     desc: "Describes the optimal number of columns into which the content of the element will be flowed.",
     browsers: "E,IE10,O11.5,S9",
     restriction: "integer, enum",
     values: [ {
      name: "auto",
      desc: "Determines the number of columns by the 'column-width' property and the element width."
     } ],
     syntax: "<integer> | auto"
    }, {
     name: "column-fill",
     desc: "In continuous media, this property will only be consulted if the length of columns has been constrained. Otherwise, columns will automatically be balanced.",
     browsers: "E,IE10,O11.5,S9",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Fills columns sequentially."
     }, {
      name: "balance"
     } ],
     syntax: "auto | balance | balance-all"
    }, {
     name: "column-gap",
     desc: "Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.",
     browsers: "E,IE10,O11.5,S9",
     restriction: "length, enum",
     values: [ {
      name: "normal",
      desc: "User agent specific and typically equivalent to 1em."
     } ],
     syntax: "normal | <length-percentage>"
    }, {
     name: "column-rule",
     desc: "Shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.",
     browsers: "E,IE10,O11.5,S9",
     restriction: "length, line-width, line-style, color",
     syntax: "<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>"
    }, {
     name: "column-rule-color",
     desc: "Sets the color of the column rule",
     browsers: "E,IE10,O11.6",
     restriction: "color",
     syntax: "<color>"
    }, {
     name: "column-rule-style",
     desc: "Sets the style of the rule between columns of an element.",
     browsers: "E,IE10,O11.5,S6",
     restriction: "line-style",
     syntax: "<'border-style'>"
    }, {
     name: "column-rule-width",
     desc: "Sets the width of the rule between columns. Negative values are not allowed.",
     browsers: "E,IE10,O11.5,S9",
     restriction: "length, line-width",
     syntax: "<'border-width'>"
    }, {
     name: "columns",
     desc: "A shorthand property which sets both 'column-width' and 'column-count'.",
     browsers: "E,IE10,O11.5,S9",
     restriction: "length, integer, enum",
     values: [ {
      name: "auto",
      desc: "The width depends on the values of other properties."
     } ],
     syntax: "<'column-width'> || <'column-count'>"
    }, {
     name: "column-span",
     desc: "Describes the page/column break behavior after the generated box.",
     browsers: "E,IE10,O11.5,S9",
     restriction: "enum",
     values: [ {
      name: "all",
      desc: "The element spans across all columns. Content in the normal flow that appears before the element is automatically balanced across all columns before the element appear."
     }, {
      name: "none",
      desc: "The element does not span multiple columns."
     } ],
     syntax: "none | all"
    }, {
     name: "column-width",
     desc: "Describes the width of columns in multicol elements.",
     browsers: "E,IE10,O11.5,S9",
     restriction: "length, enum",
     values: [ {
      name: "auto",
      desc: "The width depends on the values of other properties."
     } ],
     syntax: "<length> | auto"
    }, {
     name: "contain",
     desc: "Indicates that an element and its contents are, as much as possible, independent of the rest of the document tree.",
     browsers: "C52,O40",
     restriction: "enum",
     values: [ {
      name: "none",
      desc: "Indicates that the property has no effect."
     }, {
      name: "strict",
      desc: "Turns on all forms of containment for the element."
     }, {
      name: "content",
      desc: "All containment rules except size are applied to the element."
     }, {
      name: "size"
     }, {
      name: "layout"
     }, {
      name: "style",
      desc: "Turns on style containment for the element."
     }, {
      name: "paint"
     } ],
     status: "e",
     syntax: "none | strict | content | [ size || layout || style || paint ]"
    }, {
     name: "content",
     desc: "Determines which page-based occurrence of a given element is applied to a counter or string value.",
     browsers: "E,C,FF1,IE8,O4,S1",
     restriction: "string, url",
     values: [ {
      name: "attr()"
     }, {
      name: "counter(name)"
     }, {
      name: "icon",
      desc: "The (pseudo-)element is replaced in its entirety by the resource referenced by its 'icon' property, and treated as a replaced element."
     }, {
      name: "none",
      desc: "On elements, this inhibits the children of the element from being rendered as children of this element, as if the element was empty. On pseudo-elements it causes the pseudo-element to have no content."
     }, {
      name: "normal",
      desc: "See http://www.w3.org/TR/css3-content/#content for computation rules."
     }, {
      name: "url()"
     } ],
     syntax: "normal | none | [ <content-replacement> | <content-list> ] [/ <string> ]?"
    }, {
     name: "counter-increment",
     desc: "Manipulate the value of existing counters.",
     browsers: "E,C,FF1.5,IE8,O10.5,S3",
     restriction: "identifier, integer",
     values: [ {
      name: "none",
      desc: "This element does not alter the value of any counters."
     } ],
     syntax: "[ <custom-ident> <integer>? ]+ | none"
    }, {
     name: "counter-reset",
     desc: "Property accepts one or more names of counters (identifiers), each one optionally followed by an integer. The integer gives the value that the counter is set to on each occurrence of the element.",
     browsers: "E,C,FF1.5,IE8,O10.5,S3",
     restriction: "identifier, integer",
     values: [ {
      name: "none",
      desc: "The counter is not modified."
     } ],
     syntax: "[ <custom-ident> <integer>? ]+ | none"
    }, {
     name: "cursor",
     desc: "Allows control over cursor appearance in an element",
     restriction: "url, number, enum",
     values: [ {
      name: "alias"
     }, {
      name: "all-scroll"
     }, {
      name: "auto",
      desc: "The UA determines the cursor to display based on the current context."
     }, {
      name: "cell"
     }, {
      name: "col-resize"
     }, {
      name: "context-menu"
     }, {
      name: "copy"
     }, {
      name: "crosshair"
     }, {
      name: "default",
      desc: "The platform-dependent default cursor. Often rendered as an arrow."
     }, {
      name: "e-resize"
     }, {
      name: "ew-resize"
     }, {
      name: "grab",
      browsers: "FF27"
     }, {
      name: "grabbing",
      browsers: "FF27"
     }, {
      name: "help"
     }, {
      name: "move"
     }, {
      name: "-moz-grab",
      browsers: "FF1.5"
     }, {
      name: "-moz-grabbing",
      browsers: "FF1.5"
     }, {
      name: "-moz-zoom-in",
      browsers: "FF"
     }, {
      name: "-moz-zoom-out",
      browsers: "FF"
     }, {
      name: "ne-resize"
     }, {
      name: "nesw-resize"
     }, {
      name: "no-drop"
     }, {
      name: "none",
      desc: "No cursor is rendered for the element."
     }, {
      name: "not-allowed"
     }, {
      name: "n-resize"
     }, {
      name: "ns-resize"
     }, {
      name: "nw-resize"
     }, {
      name: "nwse-resize"
     }, {
      name: "pointer"
     }, {
      name: "progress"
     }, {
      name: "row-resize"
     }, {
      name: "se-resize"
     }, {
      name: "s-resize"
     }, {
      name: "sw-resize"
     }, {
      name: "text",
      desc: "Indicates text that may be selected. Often rendered as a vertical I-beam."
     }, {
      name: "vertical-text"
     }, {
      name: "wait"
     }, {
      name: "-webkit-grab",
      browsers: "C,S4"
     }, {
      name: "-webkit-grabbing",
      browsers: "C,S4"
     }, {
      name: "-webkit-zoom-in",
      browsers: "C,S1.2"
     }, {
      name: "-webkit-zoom-out",
      browsers: "C,S1.2"
     }, {
      name: "w-resize"
     }, {
      name: "zoom-in",
      browsers: "E,C37,FF24,O12.1,S9"
     }, {
      name: "zoom-out",
      browsers: "E,C37,FF24,O12.1,S9"
     } ],
     syntax: "[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]"
    }, {
     name: "direction",
     desc: "Specifies the inline base direction or directionality of any bidi paragraph, embedding, isolate, or override established by the box. Note: for HTML content use the 'dir' attribute and 'bdo' element rather than this property.",
     restriction: "enum",
     values: [ {
      name: "ltr"
     }, {
      name: "rtl"
     } ],
     syntax: "ltr | rtl"
    }, {
     name: "display",
     desc: "In combination with 'float' and 'position', determines the type of box or boxes that are generated for an element.",
     restriction: "enum",
     values: [ {
      name: "block"
     }, {
      name: "contents",
      desc: "The element itself does not generate any boxes, but its children and pseudo-elements still generate boxes as normal.",
      browsers: "FF37"
     }, {
      name: "flex",
      browsers: "E,C29,FF22,IE11,O12.1,S9"
     }, {
      name: "flexbox",
      browsers: "O12.1"
     }, {
      name: "flow-root",
      browsers: "C58,FF53,O45"
     }, {
      name: "grid",
      browsers: "FF52,C57,S10.1,O44"
     }, {
      name: "inline",
      desc: "The element generates an inline-level box."
     }, {
      name: "inline-block"
     }, {
      name: "inline-flex",
      browsers: "E,C29,FF22,IE11,O12.1,S9"
     }, {
      name: "inline-flexbox",
      browsers: "O12.1"
     }, {
      name: "inline-table"
     }, {
      name: "list-item"
     }, {
      name: "-moz-box",
      browsers: "FF"
     }, {
      name: "-moz-deck",
      browsers: "FF"
     }, {
      name: "-moz-grid",
      browsers: "FF"
     }, {
      name: "-moz-grid-group",
      browsers: "FF"
     }, {
      name: "-moz-grid-line",
      browsers: "FF"
     }, {
      name: "-moz-groupbox",
      browsers: "FF"
     }, {
      name: "-moz-inline-box",
      browsers: "FF"
     }, {
      name: "-moz-inline-grid",
      browsers: "FF"
     }, {
      name: "-moz-inline-stack",
      browsers: "FF"
     }, {
      name: "-moz-marker",
      browsers: "FF"
     }, {
      name: "-moz-popup",
      browsers: "FF"
     }, {
      name: "-moz-stack",
      browsers: "FF"
     }, {
      name: "-ms-flexbox",
      browsers: "IE10"
     }, {
      name: "-ms-grid",
      browsers: "E,IE10"
     }, {
      name: "-ms-inline-flexbox",
      browsers: "IE10"
     }, {
      name: "-ms-inline-grid",
      browsers: "E,IE10"
     }, {
      name: "none",
      desc: "The element and its descendants generates no boxes."
     }, {
      name: "ruby",
      desc: "The element generates a principal ruby container box, and establishes a ruby formatting context."
     }, {
      name: "ruby-base"
     }, {
      name: "ruby-base-container"
     }, {
      name: "ruby-text"
     }, {
      name: "ruby-text-container"
     }, {
      name: "run-in",
      browsers: "IE8"
     }, {
      name: "table"
     }, {
      name: "table-caption"
     }, {
      name: "table-cell"
     }, {
      name: "table-column"
     }, {
      name: "table-column-group"
     }, {
      name: "table-footer-group"
     }, {
      name: "table-header-group"
     }, {
      name: "table-row"
     }, {
      name: "table-row-group"
     }, {
      name: "-webkit-box",
      browsers: "C,S1"
     }, {
      name: "-webkit-flex",
      browsers: "C21,O15,S6.1"
     }, {
      name: "-webkit-inline-box",
      browsers: "C,S1"
     }, {
      name: "-webkit-inline-flex",
      browsers: "C21,O15,S6.1"
     } ],
     syntax: "[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>"
    }, {
     name: "empty-cells",
     desc: "In the separated borders model, this property controls the rendering of borders and backgrounds around cells that have no visible content.",
     browsers: "E,C,FF1,IE7,O4,S1.2",
     restriction: "enum",
     values: [ {
      name: "hide"
     }, {
      name: "-moz-show-background",
      browsers: "FF"
     }, {
      name: "show"
     } ],
     syntax: "show | hide"
    }, {
     name: "enable-background",
     desc: "Deprecated. Use 'isolation' property instead when support allows. Specifies how the accumulation of the background image is managed.",
     restriction: "integer, length, percentage, enum",
     values: [ {
      name: "accumulate"
     }, {
      name: "new"
     } ]
    }, {
     name: "fallback",
     desc: "@counter-style descriptor. Specifies a fallback counter style to be used when the current counter style can’t create a representation for a given counter value.",
     browsers: "FF33",
     restriction: "identifier",
     syntax: "<counter-style-name>"
    }, {
     name: "fill",
     desc: "Paints the interior of the given graphical element.",
     restriction: "color, enum, url",
     values: [ {
      name: "url()",
      desc: "A URL reference to a paint server element, which is an element that defines a paint server: ‘hatch’, ‘linearGradient’, ‘mesh’, ‘pattern’, ‘radialGradient’ and ‘solidcolor’."
     } ]
    }, {
     name: "fill-opacity",
     desc: "Specifies the opacity of the painting operation used to paint the interior the current object.",
     restriction: "number(0-1)"
    }, {
     name: "fill-rule",
     desc: "Indicates the algorithm (or winding rule) which is to be used to determine what parts of the canvas are included inside the shape.",
     restriction: "enum",
     values: [ {
      name: "evenodd"
     }, {
      name: "nonzero"
     } ]
    }, {
     name: "filter",
     desc: "Processes an element’s rendering before it is displayed in the document, by applying one or more filter effects.",
     browsers: "E13,FF35",
     restriction: "enum, url",
     values: [ {
      name: "none",
      desc: "No filter effects are applied."
     }, {
      name: "blur()"
     }, {
      name: "brightness()"
     }, {
      name: "contrast()"
     }, {
      name: "drop-shadow()"
     }, {
      name: "grayscale()"
     }, {
      name: "hue-rotate()"
     }, {
      name: "invert()"
     }, {
      name: "opacity()"
     }, {
      name: "saturate()"
     }, {
      name: "sepia()"
     }, {
      name: "url()",
      desc: "A filter reference to a <filter> element.",
      browsers: "FF3.6"
     } ],
     syntax: "none | <filter-function-list>"
    }, {
     name: "flex",
     desc: "Specifies the components of a flexible length: the flex grow factor and flex shrink factor, and the flex basis.",
     browsers: "E,C29,FF22,IE11,O12.1,S9",
     restriction: "length, number, percentage",
     values: [ {
      name: "auto",
      desc: "Retrieves the value of the main size property as the used 'flex-basis'."
     }, {
      name: "content",
      desc: "Indicates automatic sizing, based on the flex item’s content.",
      browsers: "E,IE11"
     }, {
      name: "none",
      desc: "Expands to '0 0 auto'."
     } ],
     syntax: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]"
    }, {
     name: "flex-basis",
     desc: "Sets the flex basis.",
     browsers: "E,C29,FF22,IE11,O12.1,S9",
     restriction: "length, number, percentage",
     values: [ {
      name: "auto",
      desc: "Retrieves the value of the main size property as the used 'flex-basis'."
     }, {
      name: "content",
      desc: "Indicates automatic sizing, based on the flex item’s content.",
      browsers: "E,IE11"
     } ],
     syntax: "content | <'width'>"
    }, {
     name: "flex-direction",
     desc: "Specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis.",
     browsers: "E,C29,FF22,IE11,O12.1,S9",
     restriction: "enum",
     values: [ {
      name: "column",
      desc: "The flex container’s main axis has the same orientation as the block axis of the current writing mode."
     }, {
      name: "column-reverse"
     }, {
      name: "row",
      desc: "The flex container’s main axis has the same orientation as the inline axis of the current writing mode."
     }, {
      name: "row-reverse"
     } ],
     syntax: "row | row-reverse | column | column-reverse"
    }, {
     name: "flex-flow",
     desc: "Specifies how flexbox items are placed in the flexbox.",
     browsers: "E,C29,FF28,IE11,O12.1,S9",
     restriction: "enum",
     values: [ {
      name: "column",
      desc: "The flex container’s main axis has the same orientation as the block axis of the current writing mode."
     }, {
      name: "column-reverse"
     }, {
      name: "nowrap",
      desc: "The flex container is single-line."
     }, {
      name: "row",
      desc: "The flex container’s main axis has the same orientation as the inline axis of the current writing mode."
     }, {
      name: "row-reverse"
     }, {
      name: "wrap",
      desc: "The flexbox is multi-line."
     }, {
      name: "wrap-reverse"
     } ],
     syntax: "<'flex-direction'> || <'flex-wrap'>"
    }, {
     name: "flex-grow",
     desc: "Sets the flex grow factor. Negative numbers are invalid.",
     browsers: "E,C29,FF22,IE11,O12.1,S9",
     restriction: "number",
     syntax: "<number>"
    }, {
     name: "flex-shrink",
     desc: "Sets the flex shrink factor. Negative numbers are invalid.",
     browsers: "E,C29,FF22,IE11,O12.1,S9",
     restriction: "number",
     syntax: "<number>"
    }, {
     name: "flex-wrap",
     desc: "Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.",
     browsers: "E,C29,FF28,IE11,O12.1,S9",
     restriction: "enum",
     values: [ {
      name: "nowrap",
      desc: "The flex container is single-line."
     }, {
      name: "wrap",
      desc: "The flexbox is multi-line."
     }, {
      name: "wrap-reverse"
     } ],
     syntax: "nowrap | wrap | wrap-reverse"
    }, {
     name: "float",
     desc: "Specifies how a box should be floated. It may be set for any element, but only applies to elements that generate boxes that are not absolutely positioned.",
     restriction: "enum",
     values: [ {
      name: "inline-end",
      browsers: "FF55"
     }, {
      name: "inline-start",
      browsers: "FF55"
     }, {
      name: "left",
      desc: "The element generates a block box that is floated to the left. Content flows on the right side of the box, starting at the top (subject to the 'clear' property)."
     }, {
      name: "none",
      desc: "The box is not floated."
     }, {
      name: "right",
      desc: "Similar to 'left', except the box is floated to the right, and content flows on the left side of the box, starting at the top."
     } ],
     syntax: "left | right | none | inline-start | inline-end"
    }, {
     name: "flood-color",
     desc: "Indicates what color to use to flood the current filter primitive subregion.",
     browsers: "E,C5,FF3,IE10,O9,S6",
     restriction: "color"
    }, {
     name: "flood-opacity",
     desc: "Indicates what opacity to use to flood the current filter primitive subregion.",
     browsers: "E,C5,FF3,IE10,O9,S6",
     restriction: "number(0-1), percentage"
    }, {
     name: "font",
     desc: "Shorthand property for setting 'font-style', 'font-variant', 'font-weight', 'font-size', 'line-height', and 'font-family', at the same place in the style sheet. The syntax of this property is based on a traditional typographical shorthand notation to set multiple properties related to fonts.",
     restriction: "font",
     values: [ {
      name: "100"
     }, {
      name: "200"
     }, {
      name: "300"
     }, {
      name: "400"
     }, {
      name: "500"
     }, {
      name: "600"
     }, {
      name: "700"
     }, {
      name: "800"
     }, {
      name: "900"
     }, {
      name: "bold"
     }, {
      name: "bolder"
     }, {
      name: "caption"
     }, {
      name: "icon",
      desc: "The font used to label icons."
     }, {
      name: "italic",
      desc: "Selects a font that is labeled 'italic', or, if that is not available, one labeled 'oblique'."
     }, {
      name: "large"
     }, {
      name: "larger"
     }, {
      name: "lighter"
     }, {
      name: "medium"
     }, {
      name: "menu"
     }, {
      name: "message-box"
     }, {
      name: "normal",
      desc: "Specifies a face that is not labeled as a small-caps font."
     }, {
      name: "oblique",
      desc: "Selects a font that is labeled 'oblique'."
     }, {
      name: "small"
     }, {
      name: "small-caps",
      desc: "Specifies a font that is labeled as a small-caps font. If a genuine small-caps font is not available, user agents should simulate a small-caps font."
     }, {
      name: "small-caption"
     }, {
      name: "smaller"
     }, {
      name: "status-bar"
     }, {
      name: "x-large"
     }, {
      name: "x-small"
     }, {
      name: "xx-large"
     }, {
      name: "xx-small"
     } ],
     syntax: "[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar"
    }, {
     name: "font-family",
     desc: "Specifies a prioritized list of font family names or generic family names. A user agent iterates through the list of family names until it matches an available font that contains a glyph for the character to be rendered.",
     restriction: "font",
     values: [ {
      name: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
     }, {
      name: "Arial, Helvetica, sans-serif"
     }, {
      name: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
     }, {
      name: "'Courier New', Courier, monospace"
     }, {
      name: "cursive"
     }, {
      name: "fantasy"
     }, {
      name: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
     }, {
      name: "Georgia, 'Times New Roman', Times, serif"
     }, {
      name: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
     }, {
      name: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
     }, {
      name: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
     }, {
      name: "monospace"
     }, {
      name: "sans-serif"
     }, {
      name: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
     }, {
      name: "serif"
     }, {
      name: "'Times New Roman', Times, serif"
     }, {
      name: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
     }, {
      name: "Verdana, Geneva, Tahoma, sans-serif"
     } ],
     syntax: "<family-name>"
    }, {
     name: "font-feature-settings",
     desc: "Provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.",
     browsers: "E,FF34,IE10",
     restriction: "string, integer",
     values: [ {
      name: '"aalt"'
     }, {
      name: '"abvf"'
     }, {
      name: '"abvm"'
     }, {
      name: '"abvs"'
     }, {
      name: '"afrc"'
     }, {
      name: '"akhn"'
     }, {
      name: '"blwf"'
     }, {
      name: '"blwm"'
     }, {
      name: '"blws"'
     }, {
      name: '"calt"'
     }, {
      name: '"case"'
     }, {
      name: '"ccmp"'
     }, {
      name: '"cfar"'
     }, {
      name: '"cjct"'
     }, {
      name: '"clig"'
     }, {
      name: '"cpct"'
     }, {
      name: '"cpsp"'
     }, {
      name: '"cswh"'
     }, {
      name: '"curs"'
     }, {
      name: '"c2pc"'
     }, {
      name: '"c2cs"',
      desc: "Small Capitals From Capitals. Applies only to bicameral scripts."
     }, {
      name: '"dist"'
     }, {
      name: '"dlig"',
      desc: "Discretionary ligatures."
     }, {
      name: '"dnom"'
     }, {
      name: '"dtls"'
     }, {
      name: '"expt"'
     }, {
      name: '"falt"'
     }, {
      name: '"fin2"'
     }, {
      name: '"fin3"'
     }, {
      name: '"fina"'
     }, {
      name: '"flac"'
     }, {
      name: '"frac"'
     }, {
      name: '"fwid"'
     }, {
      name: '"half"'
     }, {
      name: '"haln"'
     }, {
      name: '"halt"'
     }, {
      name: '"hist"'
     }, {
      name: '"hkna"'
     }, {
      name: '"hlig"'
     }, {
      name: '"hngl"'
     }, {
      name: '"hojo"'
     }, {
      name: '"hwid"'
     }, {
      name: '"init"'
     }, {
      name: '"isol"'
     }, {
      name: '"ital"'
     }, {
      name: '"jalt"'
     }, {
      name: '"jp78"'
     }, {
      name: '"jp83"'
     }, {
      name: '"jp90"'
     }, {
      name: '"jp04"'
     }, {
      name: '"kern"',
      desc: "Kerning."
     }, {
      name: '"lfbd"'
     }, {
      name: '"liga"',
      desc: "Standard Ligatures."
     }, {
      name: '"ljmo"'
     }, {
      name: '"lnum"',
      desc: "Lining Figures."
     }, {
      name: '"locl"'
     }, {
      name: '"ltra"'
     }, {
      name: '"ltrm"'
     }, {
      name: '"mark"'
     }, {
      name: '"med2"'
     }, {
      name: '"medi"'
     }, {
      name: '"mgrk"'
     }, {
      name: '"mkmk"'
     }, {
      name: '"nalt"'
     }, {
      name: '"nlck"'
     }, {
      name: '"nukt"'
     }, {
      name: '"numr"'
     }, {
      name: '"onum"',
      desc: "Oldstyle Figures."
     }, {
      name: '"opbd"'
     }, {
      name: '"ordn"'
     }, {
      name: '"ornm"'
     }, {
      name: '"palt"'
     }, {
      name: '"pcap"'
     }, {
      name: '"pkna"'
     }, {
      name: '"pnum"'
     }, {
      name: '"pref"'
     }, {
      name: '"pres"'
     }, {
      name: '"pstf"'
     }, {
      name: '"psts"'
     }, {
      name: '"pwid"'
     }, {
      name: '"qwid"'
     }, {
      name: '"rand"'
     }, {
      name: '"rclt"'
     }, {
      name: '"rlig"'
     }, {
      name: '"rkrf"'
     }, {
      name: '"rphf"'
     }, {
      name: '"rtbd"'
     }, {
      name: '"rtla"'
     }, {
      name: '"rtlm"'
     }, {
      name: '"ruby"'
     }, {
      name: '"salt"'
     }, {
      name: '"sinf"'
     }, {
      name: '"size"'
     }, {
      name: '"smcp"',
      desc: "Small Capitals. Applies only to bicameral scripts."
     }, {
      name: '"smpl"'
     }, {
      name: '"ssty"'
     }, {
      name: '"stch"'
     }, {
      name: '"subs"'
     }, {
      name: '"sups"'
     }, {
      name: '"swsh"',
      desc: "Swash. Does not apply to ideographic scripts."
     }, {
      name: '"titl"'
     }, {
      name: '"tjmo"'
     }, {
      name: '"tnam"'
     }, {
      name: '"tnum"',
      desc: "Tabular Figures."
     }, {
      name: '"trad"'
     }, {
      name: '"twid"'
     }, {
      name: '"unic"'
     }, {
      name: '"valt"'
     }, {
      name: '"vatu"'
     }, {
      name: '"vert"'
     }, {
      name: '"vhal"'
     }, {
      name: '"vjmo"'
     }, {
      name: '"vkna"'
     }, {
      name: '"vkrn"'
     }, {
      name: '"vpal"'
     }, {
      name: '"vrt2"'
     }, {
      name: '"zero"'
     }, {
      name: "normal",
      desc: "No change in glyph substitution or positioning occurs."
     }, {
      name: "off",
      desc: "Disable feature."
     }, {
      name: "on",
      desc: "Enable feature."
     } ],
     syntax: "normal | <feature-tag-value>#"
    }, {
     name: "font-kerning",
     desc: "Kerning is the contextual adjustment of inter-glyph spacing. This property controls metric kerning, kerning that utilizes adjustment data contained in the font.",
     browsers: "C33,FF34,O20",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Specifies that kerning is applied at the discretion of the user agent."
     }, {
      name: "none",
      desc: "Specifies that kerning is not applied."
     }, {
      name: "normal",
      desc: "Specifies that kerning is applied."
     } ],
     syntax: "auto | normal | none"
    }, {
     name: "font-language-override",
     desc: "The value of 'normal' implies that when rendering with OpenType fonts the language of the document is used to infer the OpenType language system, used to select language specific features when rendering.",
     browsers: "FF34",
     restriction: "string",
     values: [ {
      name: "normal",
      desc: "Implies that when rendering with OpenType fonts the language of the document is used to infer the OpenType language system, used to select language specific features when rendering."
     } ],
     syntax: "normal | <string>"
    }, {
     name: "font-size",
     desc: "Indicates the desired height of glyphs from the font. For scalable fonts, the font-size is a scale factor applied to the EM unit of the font. (Note that certain glyphs may bleed outside their EM box.) For non-scalable fonts, the font-size is converted into absolute units and matched against the declared font-size of the font, using the same absolute coordinate space for both of the matched values.",
     restriction: "length, percentage",
     values: [ {
      name: "large"
     }, {
      name: "larger"
     }, {
      name: "medium"
     }, {
      name: "small"
     }, {
      name: "smaller"
     }, {
      name: "x-large"
     }, {
      name: "x-small"
     }, {
      name: "xx-large"
     }, {
      name: "xx-small"
     } ],
     syntax: "<absolute-size> | <relative-size> | <length-percentage>"
    }, {
     name: "font-size-adjust",
     desc: "Preserves the readability of text when font fallback occurs by adjusting the font-size so that the x-height is the same irregardless of the font used.",
     browsers: "E,FF3,IE10",
     restriction: "number",
     values: [ {
      name: "none",
      desc: "Do not preserve the font’s x-height."
     } ],
     syntax: "none | <number>"
    }, {
     name: "font-stretch",
     desc: "Selects a normal, condensed, or expanded face from a font family.",
     browsers: "E,FF9,IE9",
     restriction: "enum",
     values: [ {
      name: "condensed"
     }, {
      name: "expanded"
     }, {
      name: "extra-condensed"
     }, {
      name: "extra-expanded"
     }, {
      name: "narrower",
      browsers: "E,IE10"
     }, {
      name: "normal"
     }, {
      name: "semi-condensed"
     }, {
      name: "semi-expanded"
     }, {
      name: "ultra-condensed"
     }, {
      name: "ultra-expanded"
     }, {
      name: "wider",
      browsers: "E,IE10"
     } ],
     syntax: "normal | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded"
    }, {
     name: "font-style",
     desc: "Allows italic or oblique faces to be selected. Italic forms are generally cursive in nature while oblique faces are typically sloped versions of the regular face.",
     restriction: "enum",
     values: [ {
      name: "italic",
      desc: "Selects a font that is labeled as an 'italic' face, or an 'oblique' face if one is not"
     }, {
      name: "normal",
      desc: "Selects a face that is classified as 'normal'."
     }, {
      name: "oblique",
      desc: "Selects a font that is labeled as an 'oblique' face, or an 'italic' face if one is not."
     } ],
     syntax: "normal | italic | oblique"
    }, {
     name: "font-synthesis",
     desc: "Controls whether user agents are allowed to synthesize bold or oblique font faces when a font family lacks bold or italic faces.",
     browsers: "FF34,S9",
     restriction: "enum",
     values: [ {
      name: "none",
      desc: "Disallow all synthetic faces."
     }, {
      name: "style",
      desc: "Allow synthetic italic faces."
     }, {
      name: "weight"
     } ],
     syntax: "none | [ weight || style ]"
    }, {
     name: "font-variant",
     desc: "Specifies variant representations of the font",
     restriction: "enum",
     values: [ {
      name: "normal",
      desc: "Specifies a face that is not labeled as a small-caps font."
     }, {
      name: "small-caps",
      desc: "Specifies a font that is labeled as a small-caps font. If a genuine small-caps font is not available, user agents should simulate a small-caps font."
     } ],
     syntax: "normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic(<feature-value-name>) || historical-forms || styleset(<feature-value-name>#) || character-variant(<feature-value-name>#) || swash(<feature-value-name>) || ornaments(<feature-value-name>) || annotation(<feature-value-name>) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]"
    }, {
     name: "font-variant-alternates",
     desc: "For any given character, fonts can provide a variety of alternate glyphs in addition to the default glyph for that character. This property provides control over the selection of these alternate glyphs.",
     browsers: "FF34",
     restriction: "enum",
     values: [ {
      name: "annotation()"
     }, {
      name: "character-variant()"
     }, {
      name: "historical-forms"
     }, {
      name: "normal",
      desc: "None of the features are enabled."
     }, {
      name: "ornaments()"
     }, {
      name: "styleset()"
     }, {
      name: "stylistic()"
     }, {
      name: "swash()"
     } ],
     syntax: "normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]"
    }, {
     name: "font-variant-caps",
     desc: "Specifies control over capitalized forms.",
     browsers: "FF34",
     restriction: "enum",
     values: [ {
      name: "all-petite-caps"
     }, {
      name: "all-small-caps"
     }, {
      name: "normal",
      desc: "None of the features are enabled."
     }, {
      name: "petite-caps"
     }, {
      name: "small-caps",
      desc: "Enables display of small capitals. Small-caps glyphs typically use the form of uppercase letters but are reduced to the size of lowercase letters."
     }, {
      name: "titling-caps"
     }, {
      name: "unicase"
     } ],
     syntax: "normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps"
    }, {
     name: "font-variant-east-asian",
     desc: "Allows control of glyph substitute and positioning in East Asian text.",
     browsers: "FF34",
     restriction: "enum",
     values: [ {
      name: "full-width"
     }, {
      name: "jis04"
     }, {
      name: "jis78"
     }, {
      name: "jis83"
     }, {
      name: "jis90"
     }, {
      name: "normal",
      desc: "None of the features are enabled."
     }, {
      name: "proportional-width"
     }, {
      name: "ruby",
      desc: "Enables display of ruby variant glyphs."
     }, {
      name: "simplified"
     }, {
      name: "traditional"
     } ],
     syntax: "normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]"
    }, {
     name: "font-variant-ligatures",
     desc: "Specifies control over which ligatures are enabled or disabled. A value of ‘normal’ implies that the defaults set by the font are used.",
     browsers: "C18,FF34,O15,S6",
     restriction: "enum",
     values: [ {
      name: "additional-ligatures"
     }, {
      name: "common-ligatures"
     }, {
      name: "contextual",
      browsers: "C35,F34,O22"
     }, {
      name: "discretionary-ligatures"
     }, {
      name: "historical-ligatures"
     }, {
      name: "no-additional-ligatures"
     }, {
      name: "no-common-ligatures"
     }, {
      name: "no-contextual",
      browsers: "C35,F34,O22"
     }, {
      name: "no-discretionary-ligatures"
     }, {
      name: "no-historical-ligatures"
     }, {
      name: "none",
      desc: "Disables all ligatures.",
      browsers: "FF34"
     }, {
      name: "normal",
      desc: "Implies that the defaults set by the font are used."
     } ],
     syntax: "normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]"
    }, {
     name: "font-variant-numeric",
     desc: "Specifies control over numerical forms.",
     browsers: "FF34",
     restriction: "enum",
     values: [ {
      name: "diagonal-fractions"
     }, {
      name: "lining-nums"
     }, {
      name: "normal",
      desc: "None of the features are enabled."
     }, {
      name: "oldstyle-nums"
     }, {
      name: "ordinal"
     }, {
      name: "proportional-nums"
     }, {
      name: "slashed-zero"
     }, {
      name: "stacked-fractions"
     }, {
      name: "tabular-nums"
     } ],
     syntax: "normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]"
    }, {
     name: "font-variant-position",
     desc: "Specifies the vertical position",
     browsers: "FF34",
     restriction: "enum",
     values: [ {
      name: "normal",
      desc: "None of the features are enabled."
     }, {
      name: "sub",
      desc: "Enables display of subscript variants (OpenType feature: subs)."
     }, {
      name: "super",
      desc: "Enables display of superscript variants (OpenType feature: sups)."
     } ],
     syntax: "normal | sub | super"
    }, {
     name: "font-weight",
     desc: "Specifies weight of glyphs in the font, their degree of blackness or stroke thickness.",
     restriction: "enum",
     values: [ {
      name: "100"
     }, {
      name: "200"
     }, {
      name: "300"
     }, {
      name: "400"
     }, {
      name: "500"
     }, {
      name: "600"
     }, {
      name: "700"
     }, {
      name: "800"
     }, {
      name: "900"
     }, {
      name: "bold"
     }, {
      name: "bolder"
     }, {
      name: "lighter"
     }, {
      name: "normal",
      desc: "Same as 400"
     } ],
     syntax: "normal | bold | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900"
    }, {
     name: "glyph-orientation-horizontal",
     desc: "Controls glyph orientation when the inline-progression-direction is horizontal.",
     restriction: "angle, number"
    }, {
     name: "glyph-orientation-vertical",
     desc: "Controls glyph orientation when the inline-progression-direction is vertical.",
     restriction: "angle, number, enum",
     values: [ {
      name: "auto",
      desc: "Sets the orientation based on the fullwidth or non-fullwidth characters and the most common orientation."
     } ]
    }, {
     name: "grid-area",
     desc: "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement. Shorthand for 'grid-row-start', 'grid-column-start', 'grid-row-end', and 'grid-column-end'.",
     browsers: "FF52,C57,S10.1,O44",
     restriction: "identifier, integer",
     values: [ {
      name: "auto",
      desc: "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
     }, {
      name: "span"
     } ],
     syntax: "<grid-line> [ / <grid-line> ]{0,3}"
    }, {
     name: "grid",
     desc: "The grid CSS property is a shorthand property that sets all of the explicit grid properties ('grid-template-rows', 'grid-template-columns', and 'grid-template-areas'), and all the implicit grid properties ('grid-auto-rows', 'grid-auto-columns', and 'grid-auto-flow'), in a single declaration.",
     browsers: "FF52,C57,E16,S10.1,O44",
     restriction: "identifier, length, percentage, string, enum",
     syntax: "<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>"
    }, {
     name: "grid-auto-columns",
     desc: "Specifies the size of implicitly created columns.",
     browsers: "FF52,C57,S10.1,O44",
     restriction: "length, percentage",
     values: [ {
      name: "min-content",
      desc: "Represents the largest min-content contribution of the grid items occupying the grid track."
     }, {
      name: "max-content",
      desc: "Represents the largest max-content contribution of the grid items occupying the grid track."
     }, {
      name: "auto",
      desc: "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
     }, {
      name: "minmax()"
     } ],
     syntax: "<track-size>+"
    }, {
     name: "grid-auto-flow",
     desc: "Controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.",
     browsers: "FF52,C57,S10.1,O44",
     restriction: "enum",
     values: [ {
      name: "row",
      desc: "The auto-placement algorithm places items by filling each row in turn, adding new rows as necessary."
     }, {
      name: "column",
      desc: "The auto-placement algorithm places items by filling each column in turn, adding new columns as necessary."
     }, {
      name: "dense"
     } ],
     syntax: "[ row | column ] || dense"
    }, {
     name: "grid-auto-rows",
     desc: "Specifies the size of implicitly created rows.",
     browsers: "FF52,C57,S10.1,O44",
     restriction: "length, percentage",
     values: [ {
      name: "min-content",
      desc: "Represents the largest min-content contribution of the grid items occupying the grid track."
     }, {
      name: "max-content",
      desc: "Represents the largest max-content contribution of the grid items occupying the grid track."
     }, {
      name: "auto",
      desc: "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
     }, {
      name: "minmax()"
     } ],
     syntax: "<track-size>+"
    }, {
     name: "grid-column",
     desc: "Shorthand for 'grid-column-start' and 'grid-column-end'.",
     browsers: "FF52,C57,S10.1,O44",
     restriction: "identifier, integer, enum",
     values: [ {
      name: "auto",
      desc: "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
     }, {
      name: "span"
     } ],
     syntax: "<grid-line> [ / <grid-line> ]?"
    }, {
     name: "grid-column-end",
     desc: "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.",
     browsers: "FF52,C57,S10.1,O44",
     restriction: "identifier, integer, enum",
     values: [ {
      name: "auto",
      desc: "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
     }, {
      name: "span"
     } ],
     syntax: "<grid-line>"
    }, {
     name: "grid-column-gap",
     desc: "Specifies the gutters between grid columns.",
     browsers: "FF52,C57,S10.1,O44",
     restriction: "length",
     status: "o",
     syntax: "<length-percentage>"
    }, {
     name: "grid-column-start",
     desc: "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.",
     browsers: "FF52,C57,S10.1,O44",
     restriction: "identifier, integer, enum",
     values: [ {
      name: "auto",
      desc: "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
     }, {
      name: "span"
     } ],
     syntax: "<grid-line>"
    }, {
     name: "grid-gap",
     desc: "Shorthand that specifies the gutters between grid columns and grid rows in one declaration.",
     browsers: "FF52,C57,S10.1,O44",
     restriction: "length",
     status: "o",
     syntax: "<'grid-row-gap'> <'grid-column-gap'>?"
    }, {
     name: "grid-row",
     desc: "Shorthand for 'grid-row-start' and 'grid-row-end'.",
     browsers: "FF52,C57,S10.1,O44",
     restriction: "identifier, integer, enum",
     values: [ {
      name: "auto",
      desc: "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
     }, {
      name: "span"
     } ],
     syntax: "<grid-line> [ / <grid-line> ]?"
    }, {
     name: "grid-row-end",
     desc: "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.",
     browsers: "FF52,C57,S10.1,O44",
     restriction: "identifier, integer, enum",
     values: [ {
      name: "auto",
      desc: "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
     }, {
      name: "span"
     } ],
     syntax: "<grid-line>"
    }, {
     name: "grid-row-gap",
     desc: "Specifies the gutters between grid rows.",
     browsers: "FF52,C57,S10.1,O44",
     restriction: "length",
     status: "o",
     syntax: "<length-percentage>"
    }, {
     name: "grid-row-start",
     desc: "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.",
     browsers: "FF52,C57,S10.1,O44",
     restriction: "identifier, integer, enum",
     values: [ {
      name: "auto",
      desc: "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
     }, {
      name: "span"
     } ],
     syntax: "<grid-line>"
    }, {
     name: "grid-template",
     desc: "Shorthand for setting grid-template-columns, grid-template-rows, and grid-template-areas in a single declaration.",
     browsers: "FF52,C57,S10.1,O44",
     restriction: "identifier, length, percentage, string, enum",
     values: [ {
      name: "none",
      desc: "Sets all three properties to their initial values."
     }, {
      name: "min-content",
      desc: "Represents the largest min-content contribution of the grid items occupying the grid track."
     }, {
      name: "max-content",
      desc: "Represents the largest max-content contribution of the grid items occupying the grid track."
     }, {
      name: "auto",
      desc: "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
     }, {
      name: "subgrid",
      desc: "Sets 'grid-template-rows' and 'grid-template-columns' to 'subgrid', and 'grid-template-areas' to its initial value."
     }, {
      name: "minmax()"
     }, {
      name: "repeat()",
      desc: "Represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form."
     } ],
     syntax: "none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?"
    }, {
     name: "grid-template-areas",
     desc: "Specifies named grid areas, which are not associated with any particular grid item, but can be referenced from the grid-placement properties.",
     browsers: "FF52,C57,S10.1,O44",
     restriction: "string",
     values: [ {
      name: "none",
      desc: "The grid container doesn’t define any named grid areas."
     } ],
     syntax: "none | <string>+"
    }, {
     name: "grid-template-columns",
     desc: "specifies, as a space-separated track list, the line names and track sizing functions of the grid.",
     browsers: "FF52,C57,S10.1,O44",
     restriction: "identifier, length, percentage, enum",
     values: [ {
      name: "none",
      desc: "There is no explicit grid; any rows/columns will be implicitly generated."
     }, {
      name: "min-content",
      desc: "Represents the largest min-content contribution of the grid items occupying the grid track."
     }, {
      name: "max-content",
      desc: "Represents the largest max-content contribution of the grid items occupying the grid track."
     }, {
      name: "auto",
      desc: "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
     }, {
      name: "subgrid",
      desc: "Indicates that the grid will align to its parent grid in that axis."
     }, {
      name: "minmax()"
     }, {
      name: "repeat()",
      desc: "Represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form."
     } ],
     syntax: "none | <track-list> | <auto-track-list>"
    }, {
     name: "grid-template-rows",
     desc: "specifies, as a space-separated track list, the line names and track sizing functions of the grid.",
     browsers: "FF52,C57,S10.1,O44",
     restriction: "identifier, length, percentage, string, enum",
     values: [ {
      name: "none",
      desc: "There is no explicit grid; any rows/columns will be implicitly generated."
     }, {
      name: "min-content",
      desc: "Represents the largest min-content contribution of the grid items occupying the grid track."
     }, {
      name: "max-content",
      desc: "Represents the largest max-content contribution of the grid items occupying the grid track."
     }, {
      name: "auto",
      desc: "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
     }, {
      name: "subgrid",
      desc: "Indicates that the grid will align to its parent grid in that axis."
     }, {
      name: "minmax()"
     }, {
      name: "repeat()",
      desc: "Represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form."
     } ],
     syntax: "none | <track-list> | <auto-track-list>"
    }, {
     name: "height",
     desc: "Specifies the height of the content area, padding area or border area (depending on 'box-sizing') of certain boxes.",
     restriction: "length, percentage",
     values: [ {
      name: "auto",
      desc: "The height depends on the values of other properties."
     }, {
      name: "fit-content",
      browsers: "C46,O33"
     }, {
      name: "max-content",
      desc: "Use the max-content inline size or max-content block size, as appropriate to the writing mode.",
      browsers: "C46,O33"
     }, {
      name: "min-content",
      desc: "Use the min-content inline size or min-content block size, as appropriate to the writing mode.",
      browsers: "C46,O33"
     } ],
     syntax: "<viewport-length>{1,2}"
    }, {
     name: "hyphens",
     desc: "Controls whether hyphenation is allowed to create more break opportunities within a line of text.",
     browsers: "C55,FF43,O44",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Conditional hyphenation characters inside a word, if present, take priority over automatic resources when determining hyphenation points within the word."
     }, {
      name: "manual"
     }, {
      name: "none",
      desc: "Words are not broken at line breaks, even if characters inside the word suggest line break points."
     } ],
     syntax: "none | manual | auto"
    }, {
     name: "image-orientation",
     desc: "Specifies an orthogonal rotation to be applied to an image before it is laid out.",
     browsers: "FF26",
     restriction: "angle",
     values: [ {
      name: "flip"
     }, {
      name: "from-image"
     } ],
     syntax: "from-image | <angle> | [ <angle>? flip ]"
    }, {
     name: "image-rendering",
     desc: "Provides a hint to the user-agent about what aspects of an image are most important to preserve when the image is scaled, to aid the user-agent in the choice of an appropriate scaling algorithm.",
     browsers: "C,FF3.6,O11.6,S",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "The image should be scaled with an algorithm that maximizes the appearance of the image."
     }, {
      name: "crisp-edges"
     }, {
      name: "-moz-crisp-edges",
      browsers: "FF"
     }, {
      name: "optimizeQuality"
     }, {
      name: "optimizeSpeed",
      desc: "Deprecated."
     }, {
      name: "pixelated"
     } ],
     syntax: "auto | crisp-edges | pixelated"
    }, {
     name: "ime-mode",
     desc: "Controls the state of the input method editor for text fields.",
     browsers: "E,FF3,IE5",
     restriction: "enum",
     values: [ {
      name: "active"
     }, {
      name: "auto",
      desc: "No change is made to the current input method editor state. This is the default."
     }, {
      name: "disabled"
     }, {
      name: "inactive"
     }, {
      name: "normal",
      desc: "The IME state should be normal; this value can be used in a user style sheet to override the page setting."
     } ],
     status: "o",
     syntax: "auto | normal | active | inactive | disabled"
    }, {
     name: "inline-size",
     desc: "Logical 'height'. Mapping depends on the element’s 'writing-mode'.",
     browsers: "FF41",
     restriction: "length, percentage",
     values: [ {
      name: "auto",
      desc: "Depends on the values of other properties."
     } ],
     syntax: "<'width'>"
    }, {
     name: "isolation",
     desc: "In CSS setting to 'isolate' will turn the element into a stacking context. In SVG, it defines whether an element is isolated or not.",
     browsers: "C,FF,O,S",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Elements are not isolated unless an operation is applied that causes the creation of a stacking context."
     }, {
      name: "isolate",
      desc: "In CSS will turn the element into a stacking context."
     } ],
     syntax: "auto | isolate"
    }, {
     name: "justify-content",
     desc: "Aligns flex items along the main axis of the current line of the flex container.",
     browsers: "E,C29,FF22,IE11,O12.1,S9",
     restriction: "enum",
     values: [ {
      name: "center",
      desc: "Flex items are packed toward the center of the line."
     }, {
      name: "start",
      desc: "The items are packed flush to each other toward the start edge of the alignment container in the main axis."
     }, {
      name: "end",
      desc: "The items are packed flush to each other toward the end edge of the alignment container in the main axis."
     }, {
      name: "left",
      desc: "The items are packed flush to each other toward the left edge of the alignment container in the main axis."
     }, {
      name: "right",
      desc: "The items are packed flush to each other toward the right edge of the alignment container in the main axis."
     }, {
      name: "safe"
     }, {
      name: "unsafe"
     }, {
      name: "stretch",
      desc: "If the combined size of the alignment subjects is less than the size of the alignment container, any auto-sized alignment subjects have their size increased equally (not proportionally), while still respecting the constraints imposed by max-height/max-width (or equivalent functionality), so that the combined size exactly fills the alignment container."
     }, {
      name: "space-evenly"
     }, {
      name: "flex-end",
      desc: "Flex items are packed toward the end of the line."
     }, {
      name: "flex-start",
      desc: "Flex items are packed toward the start of the line."
     }, {
      name: "space-around",
      desc: "Flex items are evenly distributed in the line, with half-size spaces on either end."
     }, {
      name: "space-between",
      desc: "Flex items are evenly distributed in the line."
     }, {
      name: "baseline",
      desc: "Specifies participation in first-baseline alignment."
     }, {
      name: "first baseline",
      desc: "Specifies participation in first-baseline alignment."
     }, {
      name: "last baseline",
      desc: "Specifies participation in last-baseline alignment."
     } ],
     syntax: "normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]"
    }, {
     name: "kerning",
     desc: "Indicates whether the user agent should adjust inter-glyph spacing based on kerning tables that are included in the relevant font or instead disable auto-kerning and set inter-character spacing to a specific length.",
     restriction: "length, enum",
     values: [ {
      name: "auto",
      desc: "Indicates that the user agent should adjust inter-glyph spacing based on kerning tables that are included in the font that will be used."
     } ]
    }, {
     name: "left",
     desc: "Specifies how far an absolutely positioned box's left margin edge is offset to the right of the left edge of the box's 'containing block'.",
     restriction: "length, percentage",
     values: [ {
      name: "auto",
      desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
     } ],
     syntax: "<length> | <percentage> | auto"
    }, {
     name: "letter-spacing",
     desc: "Specifies the minimum, maximum, and optimal spacing between grapheme clusters.",
     restriction: "length",
     values: [ {
      name: "normal",
      desc: "The spacing is the normal spacing for the current font. It is typically zero-length."
     } ],
     syntax: "normal | <length>"
    }, {
     name: "lighting-color",
     desc: "Defines the color of the light source for filter primitives 'feDiffuseLighting' and 'feSpecularLighting'.",
     browsers: "E,C5,FF3,IE10,O9,S6",
     restriction: "color"
    }, {
     name: "line-break",
     desc: "Specifies what set of line breaking restrictions are in effect within the element.",
     browsers: "E,IE5.5,C58,O45,S",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "The UA determines the set of line-breaking restrictions to use for CJK scripts, and it may vary the restrictions based on the length of the line; e.g., use a less restrictive set of line-break rules for short lines."
     }, {
      name: "loose",
      desc: "Breaks text using the least restrictive set of line-breaking rules. Typically used for short lines, such as in newspapers."
     }, {
      name: "normal",
      desc: "Breaks text using the most common set of line-breaking rules."
     }, {
      name: "strict",
      desc: "Breaks CJK scripts using a more restrictive set of line-breaking rules than 'normal'."
     } ],
     syntax: "auto | loose | normal | strict"
    }, {
     name: "line-height",
     desc: "Determines the block-progression dimension of the text content area of an inline box.",
     restriction: "number, length, percentage",
     values: [ {
      name: "normal",
      desc: "Tells user agents to set the computed value to a 'reasonable' value based on the font size of the element."
     } ],
     syntax: "normal | <number> | <length> | <percentage>"
    }, {
     name: "list-style",
     desc: "Shorthand for setting 'list-style-type', 'list-style-position' and 'list-style-image'",
     restriction: "image, enum, url",
     values: [ {
      name: "armenian"
     }, {
      name: "circle"
     }, {
      name: "decimal"
     }, {
      name: "decimal-leading-zero"
     }, {
      name: "disc"
     }, {
      name: "georgian"
     }, {
      name: "inside"
     }, {
      name: "lower-alpha"
     }, {
      name: "lower-greek"
     }, {
      name: "lower-latin"
     }, {
      name: "lower-roman"
     }, {
      name: "none"
     }, {
      name: "outside"
     }, {
      name: "square",
      desc: "A filled square."
     }, {
      name: "symbols()",
      browsers: "FF35"
     }, {
      name: "upper-alpha"
     }, {
      name: "upper-latin"
     }, {
      name: "upper-roman"
     }, {
      name: "url()"
     } ],
     syntax: "<'list-style-type'> || <'list-style-position'> || <'list-style-image'>"
    }, {
     name: "list-style-image",
     desc: "Sets the image that will be used as the list item marker. When the image is available, it will replace the marker set with the 'list-style-type' marker.",
     restriction: "image",
     values: [ {
      name: "none",
      desc: "The default contents of the of the list item’s marker are given by 'list-style-type' instead."
     } ],
     syntax: "<url> | none"
    }, {
     name: "list-style-position",
     desc: "Specifies the position of the '::marker' pseudo-element's box in the list item.",
     restriction: "enum",
     values: [ {
      name: "inside"
     }, {
      name: "outside"
     } ],
     syntax: "inside | outside"
    }, {
     name: "list-style-type",
     desc: "Used to construct the default contents of a list item’s marker",
     restriction: "enum, string",
     values: [ {
      name: "armenian",
      desc: "Traditional uppercase Armenian numbering."
     }, {
      name: "circle"
     }, {
      name: "decimal",
      desc: "Western decimal numbers."
     }, {
      name: "decimal-leading-zero",
      desc: "Decimal numbers padded by initial zeros."
     }, {
      name: "disc"
     }, {
      name: "georgian",
      desc: "Traditional Georgian numbering."
     }, {
      name: "lower-alpha",
      desc: "Lowercase ASCII letters."
     }, {
      name: "lower-greek",
      desc: "Lowercase classical Greek."
     }, {
      name: "lower-latin",
      desc: "Lowercase ASCII letters."
     }, {
      name: "lower-roman",
      desc: "Lowercase ASCII Roman numerals."
     }, {
      name: "none",
      desc: "No marker"
     }, {
      name: "square",
      desc: "A filled square."
     }, {
      name: "symbols()",
      browsers: "FF35"
     }, {
      name: "upper-alpha",
      desc: "Uppercase ASCII letters."
     }, {
      name: "upper-latin",
      desc: "Uppercase ASCII letters."
     }, {
      name: "upper-roman",
      desc: "Uppercase ASCII Roman numerals."
     } ],
     syntax: "<counter-style> | <string> | none"
    }, {
     name: "margin",
     desc: "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits.",
     restriction: "length, percentage",
     values: [ {
      name: "auto"
     } ],
     syntax: "[ <length> | <percentage> | auto ]{1,4}"
    }, {
     name: "margin-block-end",
     desc: "Logical 'margin-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, percentage",
     values: [ {
      name: "auto"
     } ],
     syntax: "<'margin-left'>"
    }, {
     name: "margin-block-start",
     desc: "Logical 'margin-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, percentage",
     values: [ {
      name: "auto"
     } ],
     syntax: "<'margin-left'>"
    }, {
     name: "margin-bottom",
     desc: "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
     restriction: "length, percentage",
     values: [ {
      name: "auto"
     } ],
     syntax: "<length> | <percentage> | auto"
    }, {
     name: "margin-inline-end",
     desc: "Logical 'margin-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, percentage",
     values: [ {
      name: "auto"
     } ],
     syntax: "<'margin-left'>"
    }, {
     name: "margin-inline-start",
     desc: "Logical 'margin-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, percentage",
     values: [ {
      name: "auto"
     } ],
     syntax: "<'margin-left'>"
    }, {
     name: "margin-left",
     desc: "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
     restriction: "length, percentage",
     values: [ {
      name: "auto"
     } ],
     syntax: "<length> | <percentage> | auto"
    }, {
     name: "margin-right",
     desc: "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
     restriction: "length, percentage",
     values: [ {
      name: "auto"
     } ],
     syntax: "<length> | <percentage> | auto"
    }, {
     name: "margin-top",
     desc: "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
     restriction: "length, percentage",
     values: [ {
      name: "auto"
     } ],
     syntax: "<length> | <percentage> | auto"
    }, {
     name: "marker",
     desc: "Specifies the marker symbol that shall be used for all points on the sets the value for all vertices on the given ‘path’ element or basic shape.",
     restriction: "url",
     values: [ {
      name: "none",
      desc: "Indicates that no marker symbol will be drawn at the given vertex or vertices."
     }, {
      name: "url()",
      desc: "Indicates that the <marker> element referenced will be used."
     } ]
    }, {
     name: "marker-end",
     desc: "Specifies the marker that will be drawn at the last vertices of the given markable element.",
     restriction: "url",
     values: [ {
      name: "none",
      desc: "Indicates that no marker symbol will be drawn at the given vertex or vertices."
     }, {
      name: "url()",
      desc: "Indicates that the <marker> element referenced will be used."
     } ]
    }, {
     name: "marker-mid",
     desc: "Specifies the marker that will be drawn at all vertices except the first and last.",
     restriction: "url",
     values: [ {
      name: "none",
      desc: "Indicates that no marker symbol will be drawn at the given vertex or vertices."
     }, {
      name: "url()",
      desc: "Indicates that the <marker> element referenced will be used."
     } ]
    }, {
     name: "marker-start",
     desc: "Specifies the marker that will be drawn at the first vertices of the given markable element.",
     restriction: "url",
     values: [ {
      name: "none",
      desc: "Indicates that no marker symbol will be drawn at the given vertex or vertices."
     }, {
      name: "url()",
      desc: "Indicates that the <marker> element referenced will be used."
     } ]
    }, {
     name: "mask-image",
     desc: "Sets the mask layer image of an element.",
     browsers: "E,FF53",
     restriction: "url, image, enum",
     values: [ {
      name: "none",
      desc: "Counts as a transparent black image layer."
     }, {
      name: "url()",
      desc: "Reference to a <mask element or to a CSS image."
     } ],
     syntax: "<mask-reference>#"
    }, {
     name: "mask-mode",
     desc: "Indicates whether the mask layer image is treated as luminance mask or alpha mask.",
     browsers: "FF53",
     restriction: "url, image, enum",
     values: [ {
      name: "alpha",
      desc: "Alpha values of the mask layer image should be used as the mask values."
     }, {
      name: "auto",
      desc: "Use alpha values if 'mask-image' is an image, luminance if a <mask> element or a CSS image."
     }, {
      name: "luminance",
      desc: "Luminance values of the mask layer image should be used as the mask values."
     } ],
     syntax: "<masking-mode>#"
    }, {
     name: "mask-origin",
     desc: "Specifies the mask positioning area.",
     browsers: "FF53",
     restriction: "geometry-box, enum",
     syntax: "<geometry-box>#"
    }, {
     name: "mask-position",
     desc: "Specifies how mask layer images are positioned.",
     browsers: "FF53",
     restriction: "position, length, percentage",
     syntax: "<position>#"
    }, {
     name: "mask-repeat",
     desc: "Specifies how mask layer images are tiled after they have been sized and positioned.",
     browsers: "FF53",
     restriction: "repeat",
     syntax: "<repeat-style>#"
    }, {
     name: "mask-size",
     desc: "Specifies the size of the mask layer images.",
     browsers: "F53",
     restriction: "length, percentage, enum",
     values: [ {
      name: "auto",
      desc: "Resolved by using the image’s intrinsic ratio and the size of the other dimension, or failing that, using the image’s intrinsic size, or failing that, treating it as 100%."
     }, {
      name: "contain",
      desc: "Scale the image, while preserving its intrinsic aspect ratio (if any), to the largest size such that both its width and its height can fit inside the background positioning area."
     }, {
      name: "cover",
      desc: "Scale the image, while preserving its intrinsic aspect ratio (if any), to the smallest size such that both its width and its height can completely cover the background positioning area."
     } ],
     syntax: "<bg-size>#"
    }, {
     name: "mask-type",
     desc: "Defines whether the content of the <mask> element is treated as as luminance mask or alpha mask.",
     browsers: "C24,FF35,O15,S7",
     restriction: "enum",
     values: [ {
      name: "alpha",
      desc: "Indicates that the alpha values of the mask should be used."
     }, {
      name: "luminance",
      desc: "Indicates that the luminance values of the mask should be used."
     } ],
     syntax: "luminance | alpha"
    }, {
     name: "max-block-size",
     desc: "Logical 'max-width'. Mapping depends on the element’s 'writing-mode'.",
     browsers: "FF41",
     restriction: "length, percentage",
     values: [ {
      name: "none",
      desc: "No limit on the width of the box."
     } ],
     status: "e",
     syntax: "<'max-width'>"
    }, {
     name: "max-height",
     desc: "Allows authors to constrain content height to a certain range.",
     browsers: "E,C,FF1,IE7,O7,S1",
     restriction: "length, percentage",
     values: [ {
      name: "none",
      desc: "No limit on the height of the box."
     }, {
      name: "fit-content",
      browsers: "C46,O33"
     }, {
      name: "max-content",
      desc: "Use the max-content inline size or max-content block size, as appropriate to the writing mode.",
      browsers: "C46,O33"
     }, {
      name: "min-content",
      desc: "Use the min-content inline size or min-content block size, as appropriate to the writing mode.",
      browsers: "C46,O33"
     } ],
     syntax: "<viewport-length>"
    }, {
     name: "max-inline-size",
     desc: "Logical 'max-height'. Mapping depends on the element’s 'writing-mode'.",
     browsers: "FF41",
     restriction: "length, percentage",
     values: [ {
      name: "none",
      desc: "No limit on the height of the box."
     } ],
     status: "e",
     syntax: "<'max-width'>"
    }, {
     name: "max-width",
     desc: "Allows authors to constrain content width to a certain range.",
     browsers: "E,C,FF1,IE7,O7,S1",
     restriction: "length, percentage",
     values: [ {
      name: "none",
      desc: "No limit on the width of the box."
     }, {
      name: "fit-content",
      browsers: "C46,O33"
     }, {
      name: "max-content",
      desc: "Use the max-content inline size or max-content block size, as appropriate to the writing mode.",
      browsers: "C46,O33"
     }, {
      name: "min-content",
      desc: "Use the min-content inline size or min-content block size, as appropriate to the writing mode.",
      browsers: "C46,O33"
     } ],
     syntax: "<viewport-length>"
    }, {
     name: "min-block-size",
     desc: "Logical 'min-width'. Mapping depends on the element’s 'writing-mode'.",
     browsers: "FF41",
     restriction: "length, percentage",
     syntax: "<'min-width'>"
    }, {
     name: "min-height",
     desc: "Allows authors to constrain content height to a certain range.",
     browsers: "E,C,FF1,IE7,O7,S1",
     restriction: "length, percentage",
     values: [ {
      name: "auto",
      browsers: "E,IE11"
     }, {
      name: "fit-content",
      browsers: "C46,O33"
     }, {
      name: "max-content",
      desc: "Use the max-content inline size or max-content block size, as appropriate to the writing mode.",
      browsers: "C46,O33"
     }, {
      name: "min-content",
      desc: "Use the min-content inline size or min-content block size, as appropriate to the writing mode.",
      browsers: "C46,O33"
     } ],
     syntax: "<viewport-length>"
    }, {
     name: "min-inline-size",
     desc: "Logical 'min-height'. Mapping depends on the element’s 'writing-mode'.",
     browsers: "FF41",
     restriction: "length, percentage",
     syntax: "<'min-width'>"
    }, {
     name: "min-width",
     desc: "Allows authors to constrain content width to a certain range.",
     browsers: "E,C,FF1,IE7,O7,S1",
     restriction: "length, percentage",
     values: [ {
      name: "auto",
      browsers: "E,IE11"
     }, {
      name: "fit-content",
      browsers: "C46,O33"
     }, {
      name: "max-content",
      desc: "Use the max-content inline size or max-content block size, as appropriate to the writing mode.",
      browsers: "C46,O33"
     }, {
      name: "min-content",
      desc: "Use the min-content inline size or min-content block size, as appropriate to the writing mode.",
      browsers: "C46,O33"
     } ],
     syntax: "<viewport-length>"
    }, {
     name: "mix-blend-mode",
     desc: "Defines the formula that must be used to mix the colors with the backdrop.",
     browsers: "C41,FF32,O29,S7.1",
     restriction: "enum",
     values: [ {
      name: "normal",
      desc: "Default attribute which specifies no blending"
     }, {
      name: "multiply"
     }, {
      name: "screen"
     }, {
      name: "overlay"
     }, {
      name: "darken"
     }, {
      name: "lighten"
     }, {
      name: "color-dodge"
     }, {
      name: "color-burn"
     }, {
      name: "hard-light"
     }, {
      name: "soft-light"
     }, {
      name: "difference"
     }, {
      name: "exclusion"
     }, {
      name: "hue",
      browsers: "C41,FF32,O29"
     }, {
      name: "saturation",
      browsers: "C41,FF32,O29"
     }, {
      name: "color",
      browsers: "C41,FF32,O29"
     }, {
      name: "luminosity",
      browsers: "C41,FF32,O29"
     } ],
     syntax: "<blend-mode>"
    }, {
     name: "motion",
     desc: "Shorthand property for setting 'motion-path', 'motion-offset' and 'motion-rotation'.",
     browsers: "C46,O33",
     restriction: "url, length, percentage, angle, shape, geometry-box, enum",
     values: [ {
      name: "none",
      desc: "No motion path gets created."
     }, {
      name: "path()"
     }, {
      name: "auto",
      desc: "Indicates that the object is rotated by the angle of the direction of the motion path."
     }, {
      name: "reverse",
      desc: "Indicates that the object is rotated by the angle of the direction of the motion path plus 180 degrees."
     } ]
    }, {
     name: "motion-offset",
     desc: "A distance that describes the position along the specified motion path.",
     browsers: "C46,O33",
     restriction: "length, percentage"
    }, {
     name: "motion-path",
     desc: "Specifies the motion path the element gets positioned at.",
     browsers: "C46,O33",
     restriction: "url, shape, geometry-box, enum",
     values: [ {
      name: "none",
      desc: "No motion path gets created."
     }, {
      name: "path()"
     } ]
    }, {
     name: "motion-rotation",
     desc: "Defines the direction of the element while positioning along the motion path.",
     browsers: "C46,O33",
     restriction: "angle",
     values: [ {
      name: "auto",
      desc: "Indicates that the object is rotated by the angle of the direction of the motion path."
     }, {
      name: "reverse",
      desc: "Indicates that the object is rotated by the angle of the direction of the motion path plus 180 degrees."
     } ]
    }, {
     name: "-moz-animation",
     desc: "Shorthand property combines six of the animation properties into a single property.",
     browsers: "FF9",
     restriction: "time, enum, timing-function, identifier, number",
     values: [ {
      name: "alternate"
     }, {
      name: "alternate-reverse"
     }, {
      name: "backwards"
     }, {
      name: "both",
      desc: "Both forwards and backwards fill modes are applied."
     }, {
      name: "forwards"
     }, {
      name: "infinite",
      desc: "Causes the animation to repeat forever."
     }, {
      name: "none",
      desc: "No animation is performed"
     }, {
      name: "normal",
      desc: "Normal playback."
     }, {
      name: "reverse",
      desc: "All iterations of the animation are played in the reverse direction from the way they were specified."
     } ]
    }, {
     name: "-moz-animation-delay",
     desc: "Defines when the animation will start.",
     browsers: "FF9",
     restriction: "time"
    }, {
     name: "-moz-animation-direction",
     desc: "Defines whether or not the animation should play in reverse on alternate cycles.",
     browsers: "FF9",
     restriction: "enum",
     values: [ {
      name: "alternate"
     }, {
      name: "alternate-reverse"
     }, {
      name: "normal",
      desc: "Normal playback."
     }, {
      name: "reverse",
      desc: "All iterations of the animation are played in the reverse direction from the way they were specified."
     } ]
    }, {
     name: "-moz-animation-duration",
     desc: "Defines the length of time that an animation takes to complete one cycle.",
     browsers: "FF9",
     restriction: "time"
    }, {
     name: "-moz-animation-iteration-count",
     desc: "Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.",
     browsers: "FF9",
     restriction: "number, enum",
     values: [ {
      name: "infinite",
      desc: "Causes the animation to repeat forever."
     } ]
    }, {
     name: "-moz-animation-name",
     desc: "Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.",
     browsers: "FF9",
     restriction: "identifier, enum",
     values: [ {
      name: "none",
      desc: "No animation is performed"
     } ]
    }, {
     name: "-moz-animation-play-state",
     desc: "Defines whether the animation is running or paused.",
     browsers: "FF9",
     restriction: "enum",
     values: [ {
      name: "paused"
     }, {
      name: "running"
     } ]
    }, {
     name: "-moz-animation-timing-function",
     desc: "Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.",
     browsers: "FF9",
     restriction: "timing-function"
    }, {
     name: "-moz-appearance",
     desc: "Used in Gecko (Firefox) to display an element using a platform-native styling based on the operating system's theme.",
     browsers: "FF1",
     restriction: "enum",
     values: [ {
      name: "button"
     }, {
      name: "button-arrow-down"
     }, {
      name: "button-arrow-next"
     }, {
      name: "button-arrow-previous"
     }, {
      name: "button-arrow-up"
     }, {
      name: "button-bevel"
     }, {
      name: "checkbox"
     }, {
      name: "checkbox-container"
     }, {
      name: "checkbox-label"
     }, {
      name: "dialog"
     }, {
      name: "groupbox"
     }, {
      name: "listbox"
     }, {
      name: "menuarrow"
     }, {
      name: "menuimage"
     }, {
      name: "menuitem"
     }, {
      name: "menuitemtext"
     }, {
      name: "menulist"
     }, {
      name: "menulist-button"
     }, {
      name: "menulist-text"
     }, {
      name: "menulist-textfield"
     }, {
      name: "menupopup"
     }, {
      name: "menuradio"
     }, {
      name: "menuseparator"
     }, {
      name: "-moz-mac-unified-toolbar"
     }, {
      name: "-moz-win-borderless-glass"
     }, {
      name: "-moz-win-browsertabbar-toolbox"
     }, {
      name: "-moz-win-communications-toolbox"
     }, {
      name: "-moz-win-glass"
     }, {
      name: "-moz-win-media-toolbox"
     }, {
      name: "none"
     }, {
      name: "progressbar"
     }, {
      name: "progresschunk"
     }, {
      name: "radio"
     }, {
      name: "radio-container"
     }, {
      name: "radio-label"
     }, {
      name: "radiomenuitem"
     }, {
      name: "resizer"
     }, {
      name: "resizerpanel"
     }, {
      name: "scrollbarbutton-down"
     }, {
      name: "scrollbarbutton-left"
     }, {
      name: "scrollbarbutton-right"
     }, {
      name: "scrollbarbutton-up"
     }, {
      name: "scrollbar-small"
     }, {
      name: "scrollbartrack-horizontal"
     }, {
      name: "scrollbartrack-vertical"
     }, {
      name: "separator"
     }, {
      name: "spinner"
     }, {
      name: "spinner-downbutton"
     }, {
      name: "spinner-textfield"
     }, {
      name: "spinner-upbutton"
     }, {
      name: "statusbar"
     }, {
      name: "statusbarpanel"
     }, {
      name: "tab"
     }, {
      name: "tabpanels"
     }, {
      name: "tab-scroll-arrow-back"
     }, {
      name: "tab-scroll-arrow-forward"
     }, {
      name: "textfield"
     }, {
      name: "textfield-multiline"
     }, {
      name: "toolbar"
     }, {
      name: "toolbox"
     }, {
      name: "tooltip"
     }, {
      name: "treeheadercell"
     }, {
      name: "treeheadersortarrow"
     }, {
      name: "treeitem"
     }, {
      name: "treetwistyopen"
     }, {
      name: "treeview"
     }, {
      name: "treewisty"
     }, {
      name: "window"
     } ],
     status: "n",
     syntax: "none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized"
    }, {
     name: "-moz-backface-visibility",
     desc: "Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.",
     browsers: "FF10",
     restriction: "enum",
     values: [ {
      name: "hidden"
     }, {
      name: "visible"
     } ]
    }, {
     name: "-moz-background-clip",
     desc: "Determines the background painting area.",
     browsers: "FF1-3.6",
     restriction: "box, enum",
     values: [ {
      name: "padding"
     } ]
    }, {
     name: "-moz-background-inline-policy",
     desc: "In Gecko-based applications like Firefox, the -moz-background-inline-policy CSS property specifies how the background image of an inline element is determined when the content of the inline element wraps onto multiple lines. The choice of position has significant effects on repetition.",
     browsers: "FF1",
     restriction: "enum",
     values: [ {
      name: "bounding-box"
     }, {
      name: "continuous"
     }, {
      name: "each-box"
     } ]
    }, {
     name: "-moz-background-origin",
     desc: "For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).",
     browsers: "FF1",
     restriction: "box"
    }, {
     name: "-moz-border-bottom-colors",
     desc: "Sets a list of colors for the bottom border.",
     browsers: "FF1",
     restriction: "color",
     status: "n",
     syntax: "[ <color> ]* <color> | none"
    }, {
     name: "-moz-border-image",
     desc: "Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.",
     browsers: "FF3.6",
     restriction: "length, percentage, number, url, enum",
     values: [ {
      name: "auto",
      desc: "If 'auto' is specified then the border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
     }, {
      name: "fill",
      desc: "Causes the middle part of the border-image to be preserved."
     }, {
      name: "none"
     }, {
      name: "repeat"
     }, {
      name: "round",
      desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
     }, {
      name: "space",
      desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
     }, {
      name: "stretch",
      desc: "The image is stretched to fill the area."
     }, {
      name: "url()"
     } ]
    }, {
     name: "-moz-border-left-colors",
     desc: "Sets a list of colors for the bottom border.",
     browsers: "FF1",
     restriction: "color",
     status: "n",
     syntax: "[ <color> ]* <color> | none"
    }, {
     name: "-moz-border-right-colors",
     desc: "Sets a list of colors for the bottom border.",
     browsers: "FF1",
     restriction: "color",
     status: "n",
     syntax: "[ <color> ]* <color> | none"
    }, {
     name: "-moz-border-top-colors",
     desc: "Ske Firefox, -moz-border-bottom-colors sets a list of colors for the bottom border.",
     browsers: "FF1",
     restriction: "color",
     status: "n",
     syntax: "[ <color> ]* <color> | none"
    }, {
     name: "-moz-box-align",
     desc: "Specifies how a XUL box aligns its contents across (perpendicular to) the direction of its layout. The effect of this is only visible if there is extra space in the box.",
     browsers: "FF1",
     restriction: "enum",
     values: [ {
      name: "baseline",
      desc: "If this box orientation is inline-axis or horizontal, all children are placed with their baselines aligned, and extra space placed before or after as necessary. For block flows, the baseline of the first non-empty line box located within the element is used. For tables, the baseline of the first cell is used."
     }, {
      name: "center",
      desc: "Any extra space is divided evenly, with half placed above the child and the other half placed after the child."
     }, {
      name: "end",
      desc: "For normal direction boxes, the bottom edge of each child is placed along the bottom of the box. Extra space is placed above the element. For reverse direction boxes, the top edge of each child is placed along the top of the box. Extra space is placed below the element."
     }, {
      name: "start",
      desc: "For normal direction boxes, the top edge of each child is placed along the top of the box. Extra space is placed below the element. For reverse direction boxes, the bottom edge of each child is placed along the bottom of the box. Extra space is placed above the element."
     }, {
      name: "stretch",
      desc: "The height of each child is adjusted to that of the containing block."
     } ]
    }, {
     name: "-moz-box-direction",
     desc: "Specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).",
     browsers: "FF1",
     restriction: "enum",
     values: [ {
      name: "normal",
      desc: "A box with a computed value of horizontal for box-orient displays its children from left to right. A box with a computed value of vertical displays its children from top to bottom."
     }, {
      name: "reverse",
      desc: "A box with a computed value of horizontal for box-orient displays its children from right to left. A box with a computed value of vertical displays its children from bottom to top."
     } ]
    }, {
     name: "-moz-box-flex",
     desc: "Specifies how a box grows to fill the box that contains it, in the direction of the containing box's layout.",
     browsers: "FF1",
     restriction: "number"
    }, {
     name: "-moz-box-flexgroup",
     desc: "Flexible elements can be assigned to flex groups using the 'box-flex-group' property.",
     browsers: "FF1",
     restriction: "integer"
    }, {
     name: "-moz-box-ordinal-group",
     desc: "Indicates the ordinal group the element belongs to. Elements with a lower ordinal group are displayed before those with a higher ordinal group.",
     browsers: "FF1",
     restriction: "integer"
    }, {
     name: "-moz-box-orient",
     desc: "In Mozilla applications, -moz-box-orient specifies whether a box lays out its contents horizontally or vertically.",
     browsers: "FF1",
     restriction: "enum",
     values: [ {
      name: "block-axis"
     }, {
      name: "horizontal",
      desc: "The box displays its children from left to right in a horizontal line."
     }, {
      name: "inline-axis"
     }, {
      name: "vertical",
      desc: "The box displays its children from stacked from top to bottom vertically."
     } ]
    }, {
     name: "-moz-box-pack",
     desc: "Specifies how a box packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.",
     browsers: "FF1",
     restriction: "enum",
     values: [ {
      name: "center",
      desc: "The extra space is divided evenly, with half placed before the first child and the other half placed after the last child."
     }, {
      name: "end",
      desc: "For normal direction boxes, the right edge of the last child is placed at the right side, with all extra space placed before the first child. For reverse direction boxes, the left edge of the first child is placed at the left side, with all extra space placed after the last child."
     }, {
      name: "justify",
      desc: "The space is divided evenly in-between each child, with none of the extra space placed before the first child or after the last child. If there is only one child, treat the pack value as if it were start."
     }, {
      name: "start",
      desc: "For normal direction boxes, the left edge of the first child is placed at the left side, with all extra space placed after the last child. For reverse direction boxes, the right edge of the last child is placed at the right side, with all extra space placed before the first child."
     } ]
    }, {
     name: "-moz-box-sizing",
     desc: "Box Model addition in CSS3.",
     browsers: "FF1",
     restriction: "enum",
     values: [ {
      name: "border-box"
     }, {
      name: "content-box"
     }, {
      name: "padding-box"
     } ]
    }, {
     name: "-moz-column-count",
     desc: "Describes the optimal number of columns into which the content of the element will be flowed.",
     browsers: "FF3.5",
     restriction: "integer",
     values: [ {
      name: "auto",
      desc: "Determines the number of columns by the 'column-width' property and the element width."
     } ]
    }, {
     name: "-moz-column-gap",
     desc: "Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.",
     browsers: "FF3.5",
     restriction: "length",
     values: [ {
      name: "normal",
      desc: "User agent specific and typically equivalent to 1em."
     } ]
    }, {
     name: "-moz-column-rule",
     desc: "Shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.",
     browsers: "FF3.5",
     restriction: "length, line-width, line-style, color"
    }, {
     name: "-moz-column-rule-color",
     desc: "Sets the color of the column rule",
     browsers: "FF3.5",
     restriction: "color"
    }, {
     name: "-moz-column-rule-style",
     desc: "Sets the style of the rule between columns of an element.",
     browsers: "FF3.5",
     restriction: "line-style"
    }, {
     name: "-moz-column-rule-width",
     desc: "Sets the width of the rule between columns. Negative values are not allowed.",
     browsers: "FF3.5",
     restriction: "length, line-width"
    }, {
     name: "-moz-columns",
     desc: "A shorthand property which sets both 'column-width' and 'column-count'.",
     browsers: "FF9",
     restriction: "length, integer",
     values: [ {
      name: "auto",
      desc: "The width depends on the values of other properties."
     } ]
    }, {
     name: "-moz-column-width",
     desc: "This property describes the width of columns in multicol elements.",
     browsers: "FF3.5",
     restriction: "length",
     values: [ {
      name: "auto",
      desc: "The width depends on the values of other properties."
     } ]
    }, {
     name: "-moz-font-feature-settings",
     desc: "Provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.",
     browsers: "FF4",
     restriction: "string, integer",
     values: [ {
      name: '"c2cs"'
     }, {
      name: '"dlig"'
     }, {
      name: '"kern"'
     }, {
      name: '"liga"'
     }, {
      name: '"lnum"'
     }, {
      name: '"onum"'
     }, {
      name: '"smcp"'
     }, {
      name: '"swsh"'
     }, {
      name: '"tnum"'
     }, {
      name: "normal",
      desc: "No change in glyph substitution or positioning occurs."
     }, {
      name: "off",
      browsers: "FF15"
     }, {
      name: "on",
      browsers: "FF15"
     } ]
    }, {
     name: "-moz-hyphens",
     desc: "Controls whether hyphenation is allowed to create more break opportunities within a line of text.",
     browsers: "FF9",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Conditional hyphenation characters inside a word, if present, take priority over automatic resources when determining hyphenation points within the word."
     }, {
      name: "manual"
     }, {
      name: "none",
      desc: "Words are not broken at line breaks, even if characters inside the word suggest line break points."
     } ]
    }, {
     name: "-moz-perspective",
     desc: "Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.",
     browsers: "FF10",
     restriction: "length",
     values: [ {
      name: "none",
      desc: "No perspective transform is applied."
     } ]
    }, {
     name: "-moz-perspective-origin",
     desc: "Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.",
     browsers: "FF10",
     restriction: "position, percentage, length"
    }, {
     name: "-moz-text-align-last",
     desc: "Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.",
     browsers: "FF12",
     restriction: "enum",
     values: [ {
      name: "auto"
     }, {
      name: "center",
      desc: "The inline contents are centered within the line box."
     }, {
      name: "justify",
      desc: "The text is justified according to the method specified by the 'text-justify' property."
     }, {
      name: "left",
      desc: "The inline contents are aligned to the left edge of the line box. In vertical text, 'left' aligns to the edge of the line box that would be the start edge for left-to-right text."
     }, {
      name: "right",
      desc: "The inline contents are aligned to the right edge of the line box. In vertical text, 'right' aligns to the edge of the line box that would be the end edge for left-to-right text."
     } ]
    }, {
     name: "-moz-text-decoration-color",
     desc: "Specifies the color of text decoration (underlines overlines, and line-throughs) set on the element with text-decoration-line.",
     browsers: "FF6",
     restriction: "color"
    }, {
     name: "-moz-text-decoration-line",
     desc: "Specifies what line decorations, if any, are added to the element.",
     browsers: "FF6",
     restriction: "enum",
     values: [ {
      name: "line-through"
     }, {
      name: "none",
      desc: "Neither produces nor inhibits text decoration."
     }, {
      name: "overline"
     }, {
      name: "underline"
     } ]
    }, {
     name: "-moz-text-decoration-style",
     desc: "Specifies the line style for underline, line-through and overline text decoration.",
     browsers: "FF6",
     restriction: "enum",
     values: [ {
      name: "dashed"
     }, {
      name: "dotted"
     }, {
      name: "double"
     }, {
      name: "none",
      desc: "Produces no line."
     }, {
      name: "solid"
     }, {
      name: "wavy"
     } ]
    }, {
     name: "-moz-text-size-adjust",
     desc: "Specifies a size adjustment for displaying text content in mobile browsers.",
     browsers: "FF",
     restriction: "enum, percentage",
     values: [ {
      name: "auto",
      desc: "Renderers must use the default size adjustment when displaying on a small device."
     }, {
      name: "none",
      desc: "Renderers must not do size adjustment when displaying on a small device."
     } ]
    }, {
     name: "-moz-transform",
     desc: "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
     browsers: "FF3.5",
     restriction: "enum",
     values: [ {
      name: "matrix()"
     }, {
      name: "matrix3d()"
     }, {
      name: "none"
     }, {
      name: "perspective"
     }, {
      name: "rotate()"
     }, {
      name: "rotate3d()"
     }, {
      name: "rotateX('angle')"
     }, {
      name: "rotateY('angle')"
     }, {
      name: "rotateZ('angle')"
     }, {
      name: "scale()"
     }, {
      name: "scale3d()"
     }, {
      name: "scaleX()"
     }, {
      name: "scaleY()"
     }, {
      name: "scaleZ()"
     }, {
      name: "skew()"
     }, {
      name: "skewX()"
     }, {
      name: "skewY()"
     }, {
      name: "translate()"
     }, {
      name: "translate3d()"
     }, {
      name: "translateX()"
     }, {
      name: "translateY()"
     }, {
      name: "translateZ()"
     } ]
    }, {
     name: "-moz-transform-origin",
     desc: "Establishes the origin of transformation for an element.",
     browsers: "FF3.5",
     restriction: "position, length, percentage"
    }, {
     name: "-moz-transition",
     desc: "Shorthand property combines four of the transition properties into a single property.",
     browsers: "FF4",
     restriction: "time, property, timing-function, enum",
     values: [ {
      name: "all",
      desc: "Every property that is able to undergo a transition will do so."
     }, {
      name: "none",
      desc: "No property will transition."
     } ]
    }, {
     name: "-moz-transition-delay",
     desc: "Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.",
     browsers: "FF4",
     restriction: "time"
    }, {
     name: "-moz-transition-duration",
     desc: "Specifies how long the transition from the old value to the new value should take.",
     browsers: "FF4",
     restriction: "time"
    }, {
     name: "-moz-transition-property",
     desc: "Specifies the name of the CSS property to which the transition is applied.",
     browsers: "FF4",
     restriction: "property",
     values: [ {
      name: "all",
      desc: "Every property that is able to undergo a transition will do so."
     }, {
      name: "none",
      desc: "No property will transition."
     } ]
    }, {
     name: "-moz-transition-timing-function",
     desc: "Describes how the intermediate values used during a transition will be calculated.",
     browsers: "FF4",
     restriction: "timing-function"
    }, {
     name: "-moz-user-focus",
     desc: "Used to indicate whether the element can have focus.",
     browsers: "FF1.5",
     values: [ {
      name: "ignore"
     }, {
      name: "normal"
     } ],
     status: "n",
     syntax: "ignore | normal | select-after | select-before | select-menu | select-same | select-all | none"
    }, {
     name: "-moz-user-select",
     desc: "Controls the appearance of selection.",
     browsers: "FF1.5",
     restriction: "enum",
     values: [ {
      name: "all"
     }, {
      name: "element"
     }, {
      name: "elements"
     }, {
      name: "-moz-all"
     }, {
      name: "-moz-none"
     }, {
      name: "none"
     }, {
      name: "text"
     }, {
      name: "toggle"
     } ]
    }, {
     name: "-ms-accelerator",
     desc: "IE only. Has the ability to turn off its system underlines for accelerator keys until the ALT key is pressed",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "false"
     }, {
      name: "true"
     } ],
     status: "n",
     syntax: "false | true"
    }, {
     name: "-ms-behavior",
     desc: "IE only. Used to extend behaviors of the browser",
     browsers: "IE8",
     restriction: "url"
    }, {
     name: "-ms-block-progression",
     desc: "Sets the block-progression value and the flow orientation",
     browsers: "IE8",
     restriction: "enum",
     values: [ {
      name: "bt"
     }, {
      name: "lr"
     }, {
      name: "rl"
     }, {
      name: "tb"
     } ],
     status: "n",
     syntax: "tb | rl | bt | lr"
    }, {
     name: "-ms-content-zoom-chaining",
     desc: "Specifies the zoom behavior that occurs when a user hits the zoom limit during a manipulation.",
     browsers: "E,IE10",
     values: [ {
      name: "chained",
      desc: "The nearest zoomable parent element begins zooming when the user hits a zoom limit during a manipulation. No bounce effect is shown."
     }, {
      name: "none",
      desc: "A bounce effect is shown when the user hits a zoom limit during a manipulation."
     } ],
     status: "n",
     syntax: "none | chained"
    }, {
     name: "-ms-content-zooming",
     desc: "Specifies whether zooming is enabled.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "none",
      desc: "The element is not zoomable."
     }, {
      name: "zoom"
     } ],
     status: "n",
     syntax: "none | zoom"
    }, {
     name: "-ms-content-zoom-limit",
     desc: "Shorthand property for the -ms-content-zoom-limit-min and -ms-content-zoom-limit-max properties.",
     browsers: "E,IE10",
     restriction: "percentage",
     status: "n",
     syntax: "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>"
    }, {
     name: "-ms-content-zoom-limit-max",
     desc: "Specifies the maximum zoom factor.",
     browsers: "E,IE10",
     restriction: "percentage",
     status: "n",
     syntax: "<percentage>"
    }, {
     name: "-ms-content-zoom-limit-min",
     desc: "Specifies the minimum zoom factor.",
     browsers: "E,IE10",
     restriction: "percentage",
     status: "n",
     syntax: "<percentage>"
    }, {
     name: "-ms-content-zoom-snap",
     desc: "Shorthand property for the -ms-content-zoom-snap-type and -ms-content-zoom-snap-points properties.",
     browsers: "E,IE10",
     values: [ {
      name: "mandatory",
      desc: "Indicates that the motion of the content after the contact is picked up is always adjusted so that it lands on a snap-point."
     }, {
      name: "none",
      desc: "Indicates that zooming is unaffected by any defined snap-points."
     }, {
      name: "proximity",
      desc: 'Indicates that the motion of the content after the contact is picked up may be adjusted if the content would normally stop "close enough" to a snap-point.'
     }, {
      name: "snapInterval(100%, 100%)",
      desc: "Specifies where the snap-points will be placed."
     }, {
      name: "snapList()",
      desc: "Specifies the position of individual snap-points as a comma-separated list of zoom factors."
     } ],
     status: "n",
     syntax: "<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>"
    }, {
     name: "-ms-content-zoom-snap-points",
     desc: "Defines where zoom snap-points are located.",
     browsers: "E,IE10",
     values: [ {
      name: "snapInterval(100%, 100%)",
      desc: "Specifies where the snap-points will be placed."
     }, {
      name: "snapList()",
      desc: "Specifies the position of individual snap-points as a comma-separated list of zoom factors."
     } ],
     status: "n",
     syntax: "snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )"
    }, {
     name: "-ms-content-zoom-snap-type",
     desc: "Specifies how zooming is affected by defined snap-points.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "mandatory",
      desc: "Indicates that the motion of the content after the contact is picked up is always adjusted so that it lands on a snap-point."
     }, {
      name: "none",
      desc: "Indicates that zooming is unaffected by any defined snap-points."
     }, {
      name: "proximity",
      desc: 'Indicates that the motion of the content after the contact is picked up may be adjusted if the content would normally stop "close enough" to a snap-point.'
     } ],
     status: "n",
     syntax: "none | proximity | mandatory"
    }, {
     name: "-ms-filter",
     desc: "IE only. Used to produce visual effects.",
     browsers: "IE8-9",
     restriction: "string",
     status: "n",
     syntax: "<string>"
    }, {
     name: "-ms-flex",
     desc: "specifies the parameters of a flexible length: the positive and negative flexibility, and the preferred size.",
     browsers: "IE10",
     restriction: "length, number, percentage",
     values: [ {
      name: "auto",
      desc: "Retrieves the value of the main size property as the used 'flex-basis'."
     }, {
      name: "none",
      desc: "Expands to '0 0 auto'."
     } ]
    }, {
     name: "-ms-flex-align",
     desc: "Aligns flex items along the cross axis of the current line of the flex container.",
     browsers: "IE10",
     restriction: "enum",
     values: [ {
      name: "baseline",
      desc: "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
     }, {
      name: "center",
      desc: "The flex item’s margin box is centered in the cross axis within the line."
     }, {
      name: "end",
      desc: "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
     }, {
      name: "start",
      desc: "The cross-start margin edge of the flexbox item is placed flush with the cross-start edge of the line."
     }, {
      name: "stretch",
      desc: "If the cross size property of the flexbox item is anything other than 'auto', this value is identical to 'start'."
     } ]
    }, {
     name: "-ms-flex-direction",
     desc: "Specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis.",
     browsers: "IE10",
     restriction: "enum",
     values: [ {
      name: "column",
      desc: "The flex container’s main axis has the same orientation as the block axis of the current writing mode."
     }, {
      name: "column-reverse"
     }, {
      name: "row",
      desc: "The flex container’s main axis has the same orientation as the inline axis of the current writing mode."
     }, {
      name: "row-reverse"
     } ]
    }, {
     name: "-ms-flex-flow",
     desc: "Specifies how flexbox items are placed in the flexbox.",
     browsers: "IE10",
     restriction: "enum",
     values: [ {
      name: "column",
      desc: "The flex container’s main axis has the same orientation as the block axis of the current writing mode."
     }, {
      name: "column-reverse"
     }, {
      name: "nowrap",
      desc: "The flex container is single-line."
     }, {
      name: "row",
      desc: "The flex container’s main axis has the same orientation as the inline axis of the current writing mode."
     }, {
      name: "wrap",
      desc: "The flexbox is multi-line."
     }, {
      name: "wrap-reverse"
     } ]
    }, {
     name: "-ms-flex-item-align",
     desc: "Allows the default alignment along the cross axis to be overridden for individual flex items.",
     browsers: "IE10",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Computes to the value of 'align-items' on the element’s parent, or 'stretch' if the element has no parent. On absolutely positioned elements, it computes to itself."
     }, {
      name: "baseline",
      desc: "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
     }, {
      name: "center",
      desc: "The flex item’s margin box is centered in the cross axis within the line."
     }, {
      name: "end",
      desc: "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
     }, {
      name: "start",
      desc: "The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line."
     }, {
      name: "stretch",
      desc: "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
     } ]
    }, {
     name: "-ms-flex-line-pack",
     desc: "Aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how 'justify-content' aligns individual items within the main-axis.",
     browsers: "IE10",
     restriction: "enum",
     values: [ {
      name: "center",
      desc: "Lines are packed toward the center of the flex container."
     }, {
      name: "distribute",
      desc: "Lines are evenly distributed in the flex container, with half-size spaces on either end."
     }, {
      name: "end",
      desc: "Lines are packed toward the end of the flex container."
     }, {
      name: "justify",
      desc: "Lines are evenly distributed in the flex container."
     }, {
      name: "start",
      desc: "Lines are packed toward the start of the flex container."
     }, {
      name: "stretch",
      desc: "Lines stretch to take up the remaining space."
     } ]
    }, {
     name: "-ms-flex-order",
     desc: "Controls the order in which children of a flex container appear within the flex container, by assigning them to ordinal groups.",
     browsers: "IE10",
     restriction: "integer"
    }, {
     name: "-ms-flex-pack",
     desc: "Aligns flex items along the main axis of the current line of the flex container.",
     browsers: "IE10",
     restriction: "enum",
     values: [ {
      name: "center",
      desc: "Flex items are packed toward the center of the line."
     }, {
      name: "distribute",
      desc: "Flex items are evenly distributed in the line, with half-size spaces on either end."
     }, {
      name: "end",
      desc: "Flex items are packed toward the end of the line."
     }, {
      name: "justify",
      desc: "Flex items are evenly distributed in the line."
     }, {
      name: "start",
      desc: "Flex items are packed toward the start of the line."
     } ]
    }, {
     name: "-ms-flex-wrap",
     desc: "Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.",
     browsers: "IE10",
     restriction: "enum",
     values: [ {
      name: "nowrap",
      desc: "The flex container is single-line."
     }, {
      name: "wrap",
      desc: "The flexbox is multi-line."
     }, {
      name: "wrap-reverse"
     } ]
    }, {
     name: "-ms-flow-from",
     desc: "Makes a block container a region and associates it with a named flow.",
     browsers: "E,IE10",
     restriction: "identifier",
     values: [ {
      name: "none",
      desc: "The block container is not a CSS Region."
     } ],
     status: "n",
     syntax: "[ none | <custom-ident> ]#"
    }, {
     name: "-ms-flow-into",
     desc: "Places an element or its contents into a named flow.",
     browsers: "E,IE10",
     restriction: "identifier",
     values: [ {
      name: "none",
      desc: "The element is not moved to a named flow and normal CSS processing takes place."
     } ],
     status: "n",
     syntax: "[ none | <custom-ident> ]#"
    }, {
     name: "-ms-grid-column",
     desc: "Used to place grid items and explicitly defined grid cells in the Grid.",
     browsers: "E,IE10",
     restriction: "integer, string, enum",
     values: [ {
      name: "auto"
     }, {
      name: "end"
     }, {
      name: "start"
     } ]
    }, {
     name: "-ms-grid-column-align",
     desc: "Aligns the columns in a grid.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "center",
      desc: "Places the center of the Grid Item's margin box at the center of the Grid Item's column."
     }, {
      name: "end",
      desc: "Aligns the end edge of the Grid Item's margin box to the end edge of the Grid Item's column."
     }, {
      name: "start",
      desc: "Aligns the starting edge of the Grid Item's margin box to the starting edge of the Grid Item's column."
     }, {
      name: "stretch",
      desc: "Ensures that the Grid Item's margin box is equal to the size of the Grid Item's column."
     } ]
    }, {
     name: "-ms-grid-columns",
     desc: "Lays out the columns of the grid.",
     browsers: "E,IE10"
    }, {
     name: "-ms-grid-column-span",
     desc: "Specifies the number of columns to span.",
     browsers: "E,IE10",
     restriction: "integer"
    }, {
     name: "-ms-grid-layer",
     desc: "Grid-layer is similar in concept to z-index, but avoids overloading the meaning of the z-index property, which is applicable only to positioned elements.",
     browsers: "E,IE10",
     restriction: "integer"
    }, {
     name: "-ms-grid-row",
     desc: "grid-row is used to place grid items and explicitly defined grid cells in the Grid.",
     browsers: "E,IE10",
     restriction: "integer, string, enum",
     values: [ {
      name: "auto"
     }, {
      name: "end"
     }, {
      name: "start"
     } ]
    }, {
     name: "-ms-grid-row-align",
     desc: "Aligns the rows in a grid.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "center",
      desc: "Places the center of the Grid Item's margin box at the center of the Grid Item's row."
     }, {
      name: "end",
      desc: "Aligns the end edge of the Grid Item's margin box to the end edge of the Grid Item's row."
     }, {
      name: "start",
      desc: "Aligns the starting edge of the Grid Item's margin box to the starting edge of the Grid Item's row."
     }, {
      name: "stretch",
      desc: "Ensures that the Grid Item's margin box is equal to the size of the Grid Item's row."
     } ]
    }, {
     name: "-ms-grid-rows",
     desc: "Lays out the columns of the grid.",
     browsers: "E,IE10"
    }, {
     name: "-ms-grid-row-span",
     desc: "Specifies the number of rows to span.",
     browsers: "E,IE10",
     restriction: "integer"
    }, {
     name: "-ms-high-contrast-adjust",
     desc: "Specifies if properties should be adjusted in high contrast mode.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Properties will be adjusted as applicable."
     }, {
      name: "none",
      desc: "No adjustments will be applied."
     } ],
     status: "n",
     syntax: "auto | none"
    }, {
     name: "-ms-hyphenate-limit-chars",
     desc: "Specifies the minimum number of characters in a hyphenated word.",
     browsers: "E,IE10",
     restriction: "integer",
     values: [ {
      name: "auto",
      desc: "The user agent chooses a value that adapts to the current layout."
     } ],
     status: "n",
     syntax: "auto | <integer>{1,3}"
    }, {
     name: "-ms-hyphenate-limit-lines",
     desc: "Indicates the maximum number of successive hyphenated lines in an element.",
     browsers: "E,IE10",
     restriction: "integer",
     values: [ {
      name: "no-limit"
     } ],
     status: "n",
     syntax: "no-limit | <integer>"
    }, {
     name: "-ms-hyphenate-limit-zone",
     desc: "Specifies the maximum amount of unfilled space (before justification) that may be left in the line box before hyphenation is triggered to pull part of a word from the next line back up into the current line.",
     browsers: "E,IE10",
     restriction: "percentage, length",
     status: "n",
     syntax: "<percentage> | <length>"
    }, {
     name: "-ms-hyphens",
     desc: "Controls whether hyphenation is allowed to create more break opportunities within a line of text.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Conditional hyphenation characters inside a word, if present, take priority over automatic resources when determining hyphenation points within the word."
     }, {
      name: "manual"
     }, {
      name: "none",
      desc: "Words are not broken at line breaks, even if characters inside the word suggest line break points."
     } ]
    }, {
     name: "-ms-ime-mode",
     desc: "Controls the state of the input method editor for text fields.",
     browsers: "IE10",
     restriction: "enum",
     values: [ {
      name: "active"
     }, {
      name: "auto",
      desc: "No change is made to the current input method editor state. This is the default."
     }, {
      name: "disabled"
     }, {
      name: "inactive"
     }, {
      name: "normal",
      desc: "The IME state should be normal; this value can be used in a user style sheet to override the page setting."
     } ]
    }, {
     name: "-ms-interpolation-mode",
     desc: "Gets or sets the interpolation (resampling) method used to stretch images.",
     browsers: "IE7",
     restriction: "enum",
     values: [ {
      name: "bicubic"
     }, {
      name: "nearest-neighbor"
     } ]
    }, {
     name: "-ms-layout-grid",
     desc: "Sets or retrieves the composite document grid properties that specify the layout of text characters.",
     browsers: "E,IE10",
     values: [ {
      name: "char",
      desc: "Any of the range of character values available to the -ms-layout-grid-char property."
     }, {
      name: "line",
      desc: "Any of the range of line values available to the -ms-layout-grid-line property."
     }, {
      name: "mode"
     }, {
      name: "type"
     } ]
    }, {
     name: "-ms-layout-grid-char",
     desc: "Sets or retrieves the size of the character grid used for rendering the text content of an element.",
     browsers: "E,IE10",
     restriction: "enum, length, percentage",
     values: [ {
      name: "auto",
      desc: "Largest character in the font of the element is used to set the character grid."
     }, {
      name: "none",
      desc: "Default. No character grid is set."
     } ]
    }, {
     name: "-ms-layout-grid-line",
     desc: "Sets or retrieves the gridline value used for rendering the text content of an element.",
     browsers: "E,IE10",
     restriction: "length",
     values: [ {
      name: "auto",
      desc: "Largest character in the font of the element is used to set the character grid."
     }, {
      name: "none",
      desc: "Default. No grid line is set."
     } ]
    }, {
     name: "-ms-layout-grid-mode",
     desc: "Gets or sets whether the text layout grid uses two dimensions.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "both",
      desc: "Default. Both the char and line grid modes are enabled. This setting is necessary to fully enable the layout grid on an element."
     }, {
      name: "char",
      desc: "Only a character grid is used. This is recommended for use with block-level elements, such as a blockquote, where the line grid is intended to be disabled."
     }, {
      name: "line",
      desc: "Only a line grid is used. This is recommended for use with inline elements, such as a span, to disable the horizontal grid on runs of text that act as a single entity in the grid layout."
     }, {
      name: "none",
      desc: "No grid is used."
     } ]
    }, {
     name: "-ms-layout-grid-type",
     desc: "Sets or retrieves the type of grid used for rendering the text content of an element.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "fixed",
      desc: "Grid used for monospaced layout. All noncursive characters are treated as equal; every character is centered within a single grid space by default."
     }, {
      name: "loose",
      desc: "Default. Grid used for Japanese and Korean characters."
     }, {
      name: "strict",
      desc: "Grid used for Chinese, as well as Japanese (Genko) and Korean characters. Only the ideographs, kanas, and wide characters are snapped to the grid."
     } ]
    }, {
     name: "-ms-line-break",
     desc: "Specifies what set of line breaking restrictions are in effect within the element.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "The UA determines the set of line-breaking restrictions to use for CJK scripts, and it may vary the restrictions based on the length of the line; e.g., use a less restrictive set of line-break rules for short lines."
     }, {
      name: "keep-all",
      desc: "Sequences of CJK characters can no longer break on implied break points. This option should only be used where the presence of word separator characters still creates line-breaking opportunities, as in Korean."
     }, {
      name: "newspaper",
      desc: "Breaks CJK scripts using the least restrictive set of line-breaking rules. Typically used for short lines, such as in newspapers."
     }, {
      name: "normal",
      desc: "Breaks CJK scripts using a normal set of line-breaking rules."
     }, {
      name: "strict",
      desc: "Breaks CJK scripts using a more restrictive set of line-breaking rules than 'normal'."
     } ]
    }, {
     name: "-ms-overflow-style",
     desc: "Specify whether content is clipped when it overflows the element's content area.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "No preference, UA should use the first scrolling method in the list that it supports."
     }, {
      name: "-ms-autohiding-scrollbar"
     }, {
      name: "none",
      desc: "Indicates the element does not display scrollbars or panning indicators, even when its content overflows."
     }, {
      name: "scrollbar"
     } ],
     status: "n",
     syntax: "auto | none | scrollbar | -ms-autohiding-scrollbar"
    }, {
     name: "-ms-perspective",
     desc: "Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.",
     browsers: "IE10",
     restriction: "length",
     values: [ {
      name: "none",
      desc: "No perspective transform is applied."
     } ]
    }, {
     name: "-ms-perspective-origin",
     desc: "Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.",
     browsers: "IE10",
     restriction: "position, percentage, length"
    }, {
     name: "-ms-perspective-origin-x",
     desc: "Establishes the origin for the perspective property. It effectively sets the X  position at which the viewer appears to be looking at the children of the element.",
     browsers: "IE10",
     restriction: "position, percentage, length"
    }, {
     name: "-ms-perspective-origin-y",
     desc: "Establishes the origin for the perspective property. It effectively sets the Y position at which the viewer appears to be looking at the children of the element.",
     browsers: "IE10",
     restriction: "position, percentage, length"
    }, {
     name: "-ms-progress-appearance",
     desc: "Gets or sets a value that specifies whether a progress control displays as a bar or a ring.",
     browsers: "IE10",
     restriction: "enum",
     values: [ {
      name: "bar"
     }, {
      name: "ring"
     } ]
    }, {
     name: "-ms-scrollbar-3dlight-color",
     desc: "Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.",
     browsers: "IE8",
     restriction: "color",
     status: "n",
     syntax: "<color>"
    }, {
     name: "-ms-scrollbar-arrow-color",
     desc: "Determines the color of the arrow elements of a scroll arrow.",
     browsers: "IE8",
     restriction: "color",
     status: "n",
     syntax: "<color>"
    }, {
     name: "-ms-scrollbar-base-color",
     desc: "Determines the color of the main elements of a scroll bar, which include the scroll box, track, and scroll arrows.",
     browsers: "IE8",
     restriction: "color",
     status: "n",
     syntax: "<color>"
    }, {
     name: "-ms-scrollbar-darkshadow-color",
     desc: "Determines the color of the gutter of a scroll bar.",
     browsers: "IE8",
     restriction: "color",
     status: "n",
     syntax: "<color>"
    }, {
     name: "-ms-scrollbar-face-color",
     desc: "Determines the color of the scroll box and scroll arrows of a scroll bar.",
     browsers: "IE8",
     restriction: "color",
     status: "n",
     syntax: "<color>"
    }, {
     name: "-ms-scrollbar-highlight-color",
     desc: "Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.",
     browsers: "IE8",
     restriction: "color",
     status: "n",
     syntax: "<color>"
    }, {
     name: "-ms-scrollbar-shadow-color",
     desc: "Determines the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.",
     browsers: "IE8",
     restriction: "color",
     status: "n",
     syntax: "<color>"
    }, {
     name: "-ms-scrollbar-track-color",
     desc: "Determines the color of the track element of a scroll bar.",
     browsers: "IE8",
     restriction: "color",
     status: "n",
     syntax: "<color>"
    }, {
     name: "-ms-scroll-chaining",
     desc: "Gets or sets a value that indicates the scrolling behavior that occurs when a user hits the content boundary during a manipulation.",
     browsers: "E,IE10",
     restriction: "enum, length",
     values: [ {
      name: "chained"
     }, {
      name: "none"
     } ],
     status: "n",
     syntax: "chained | none"
    }, {
     name: "-ms-scroll-limit",
     desc: "Gets or sets a shorthand value that sets values for the -ms-scroll-limit-x-min, -ms-scroll-limit-y-min, -ms-scroll-limit-x-max, and -ms-scroll-limit-y-max properties.",
     browsers: "E,IE10",
     restriction: "length",
     values: [ {
      name: "auto"
     } ],
     status: "n",
     syntax: "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>"
    }, {
     name: "-ms-scroll-limit-x-max",
     desc: "Gets or sets a value that specifies the maximum value for the scrollLeft property.",
     browsers: "E,IE10",
     restriction: "length",
     values: [ {
      name: "auto"
     } ],
     status: "n",
     syntax: "auto | <length>"
    }, {
     name: "-ms-scroll-limit-x-min",
     desc: "Gets or sets a value that specifies the minimum value for the scrollLeft property.",
     browsers: "E,IE10",
     restriction: "length",
     status: "n",
     syntax: "<length>"
    }, {
     name: "-ms-scroll-limit-y-max",
     desc: "Gets or sets a value that specifies the maximum value for the scrollTop property.",
     browsers: "E,IE10",
     restriction: "length",
     values: [ {
      name: "auto"
     } ],
     status: "n",
     syntax: "auto | <length>"
    }, {
     name: "-ms-scroll-limit-y-min",
     desc: "Gets or sets a value that specifies the minimum value for the scrollTop property.",
     browsers: "E,IE10",
     restriction: "length",
     status: "n",
     syntax: "<length>"
    }, {
     name: "-ms-scroll-rails",
     desc: "Gets or sets a value that indicates whether or not small motions perpendicular to the primary axis of motion will result in either changes to both the scrollTop and scrollLeft properties or a change to the primary axis (for instance, either the scrollTop or scrollLeft properties will change, but not both).",
     browsers: "E,IE10",
     restriction: "enum, length",
     values: [ {
      name: "none"
     }, {
      name: "railed"
     } ],
     status: "n",
     syntax: "none | railed"
    }, {
     name: "-ms-scroll-snap-points-x",
     desc: "Gets or sets a value that defines where snap-points will be located along the x-axis.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "snapInterval(100%, 100%)"
     }, {
      name: "snapList()"
     } ],
     status: "n",
     syntax: "snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )"
    }, {
     name: "-ms-scroll-snap-points-y",
     desc: "Gets or sets a value that defines where snap-points will be located along the y-axis.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "snapInterval(100%, 100%)"
     }, {
      name: "snapList()"
     } ],
     status: "n",
     syntax: "snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )"
    }, {
     name: "-ms-scroll-snap-type",
     desc: "Gets or sets a value that defines what type of snap-point should be used for the current element. There are two type of snap-points, with the primary difference being whether or not the user is guaranteed to always stop on a snap-point.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "none",
      desc: "The visual viewport of this scroll container must ignore snap points, if any, when scrolled."
     }, {
      name: "mandatory",
      desc: "The visual viewport of this scroll container is guaranteed to rest on a snap point when there are no active scrolling operations."
     }, {
      name: "proximity",
      desc: "The visual viewport of this scroll container may come to rest on a snap point at the termination of a scroll at the discretion of the UA given the parameters of the scroll."
     } ],
     status: "n",
     syntax: "none | proximity | mandatory"
    }, {
     name: "-ms-scroll-snap-x",
     desc: "Gets or sets a shorthand value that sets values for the -ms-scroll-snap-type and -ms-scroll-snap-points-x properties.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "mandatory"
     }, {
      name: "none"
     }, {
      name: "proximity"
     }, {
      name: "snapInterval(100%, 100%)"
     }, {
      name: "snapList()"
     } ],
     status: "n",
     syntax: "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>"
    }, {
     name: "-ms-scroll-snap-y",
     desc: "Gets or sets a shorthand value that sets values for the -ms-scroll-snap-type and -ms-scroll-snap-points-y properties.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "mandatory"
     }, {
      name: "none"
     }, {
      name: "proximity"
     }, {
      name: "snapInterval(100%, 100%)"
     }, {
      name: "snapList()"
     } ],
     status: "n",
     syntax: "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>"
    }, {
     name: "-ms-scroll-translation",
     desc: "Gets or sets a value that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "none"
     }, {
      name: "vertical-to-horizontal"
     } ],
     status: "n",
     syntax: "none | vertical-to-horizontal"
    }, {
     name: "-ms-text-align-last",
     desc: "Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.",
     browsers: "E,IE8",
     restriction: "enum",
     values: [ {
      name: "auto"
     }, {
      name: "center",
      desc: "The inline contents are centered within the line box."
     }, {
      name: "justify",
      desc: "The text is justified according to the method specified by the 'text-justify' property."
     }, {
      name: "left",
      desc: "The inline contents are aligned to the left edge of the line box. In vertical text, 'left' aligns to the edge of the line box that would be the start edge for left-to-right text."
     }, {
      name: "right",
      desc: "The inline contents are aligned to the right edge of the line box. In vertical text, 'right' aligns to the edge of the line box that would be the end edge for left-to-right text."
     } ]
    }, {
     name: "-ms-text-autospace",
     desc: "Determines whether or not a full-width punctuation mark character should be trimmed if it appears at the beginning of a line, so that its 'ink' lines up with the first glyph in the line above and below.",
     browsers: "E,IE8",
     restriction: "enum",
     values: [ {
      name: "ideograph-alpha"
     }, {
      name: "ideograph-numeric"
     }, {
      name: "ideograph-parenthesis"
     }, {
      name: "ideograph-space"
     }, {
      name: "none",
      desc: "No extra space is created."
     }, {
      name: "punctuation"
     } ],
     status: "n",
     syntax: "none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space"
    }, {
     name: "-ms-text-combine-horizontal",
     desc: "This property specifies the combination of multiple characters into the space of a single character.",
     browsers: "E,IE11",
     restriction: "enum, integer",
     values: [ {
      name: "all",
      desc: "Attempt to typeset horizontally all consecutive characters within the box such that they take up the space of a single character within the vertical line box."
     }, {
      name: "digits"
     }, {
      name: "none",
      desc: "No special processing."
     } ]
    }, {
     name: "-ms-text-justify",
     desc: "Selects the justification algorithm used when 'text-align' is set to 'justify'. The property applies to block containers, but the UA may (but is not required to) also support it on inline elements.",
     browsers: "E,IE8",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "The UA determines the justification algorithm to follow, based on a balance between performance and adequate presentation quality."
     }, {
      name: "distribute",
      desc: "Justification primarily changes spacing both at word separators and at grapheme cluster boundaries in all scripts except those in the connected and cursive groups. This value is sometimes used in e.g. Japanese, often with the 'text-align-last' property."
     }, {
      name: "inter-cluster"
     }, {
      name: "inter-ideograph"
     }, {
      name: "inter-word"
     }, {
      name: "kashida"
     } ]
    }, {
     name: "-ms-text-kashida-space",
     desc: "Sets or retrieves the ratio of kashida expansion to white space expansion when justifying lines of text in the object.",
     browsers: "E,IE10",
     restriction: "percentage"
    }, {
     name: "-ms-text-overflow",
     desc: "Text can overflow for example when it is prevented from wrapping",
     browsers: "IE10",
     restriction: "enum",
     values: [ {
      name: "clip"
     }, {
      name: "ellipsis"
     } ]
    }, {
     name: "-ms-text-size-adjust",
     desc: "Specifies a size adjustment for displaying text content in mobile browsers.",
     browsers: "E,IE10",
     restriction: "enum, percentage",
     values: [ {
      name: "auto",
      desc: "Renderers must use the default size adjustment when displaying on a small device."
     }, {
      name: "none",
      desc: "Renderers must not do size adjustment when displaying on a small device."
     } ]
    }, {
     name: "-ms-text-underline-position",
     desc: "Sets the position of an underline specified on the same element: it does not affect underlines specified by ancestor elements.This property is typically used in vertical writing contexts such as in Japanese documents where it often desired to have the underline appear 'over' (to the right of) the affected run of text",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "alphabetic",
      desc: "The underline is aligned with the alphabetic baseline. In this case the underline is likely to cross some descenders."
     }, {
      name: "auto",
      desc: "The user agent may use any algorithm to determine the underline's position. In horizontal line layout, the underline should be aligned as for alphabetic. In vertical line layout, if the language is set to Japanese or Korean, the underline should be aligned as for over."
     }, {
      name: "over"
     }, {
      name: "under"
     } ]
    }, {
     name: "-ms-touch-action",
     desc: "Gets or sets a value that indicates whether and how a given region can be manipulated by the user.",
     browsers: "IE10",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "The element is a passive element, with several exceptions."
     }, {
      name: "double-tap-zoom",
      desc: "The element will zoom on double-tap."
     }, {
      name: "manipulation",
      desc: "The element is a manipulation-causing element."
     }, {
      name: "none",
      desc: "The element is a manipulation-blocking element."
     }, {
      name: "pan-x",
      desc: "The element permits touch-driven panning on the horizontal axis. The touch pan is performed on the nearest ancestor with horizontally scrollable content."
     }, {
      name: "pan-y",
      desc: "The element permits touch-driven panning on the vertical axis. The touch pan is performed on the nearest ancestor with vertically scrollable content."
     }, {
      name: "pinch-zoom",
      desc: "The element permits pinch-zooming. The pinch-zoom is performed on the nearest ancestor with zoomable content."
     } ]
    }, {
     name: "-ms-touch-select",
     desc: "Gets or sets a value that toggles the 'gripper' visual elements that enable touch text selection.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "grippers"
     }, {
      name: "none",
      desc: "Grippers are always off."
     } ],
     status: "n",
     syntax: "grippers | none"
    }, {
     name: "-ms-transform",
     desc: "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
     browsers: "IE9-9",
     restriction: "enum",
     values: [ {
      name: "matrix()"
     }, {
      name: "matrix3d()"
     }, {
      name: "none"
     }, {
      name: "rotate()"
     }, {
      name: "rotate3d()"
     }, {
      name: "rotateX('angle')"
     }, {
      name: "rotateY('angle')"
     }, {
      name: "rotateZ('angle')"
     }, {
      name: "scale()"
     }, {
      name: "scale3d()"
     }, {
      name: "scaleX()"
     }, {
      name: "scaleY()"
     }, {
      name: "scaleZ()"
     }, {
      name: "skew()"
     }, {
      name: "skewX()"
     }, {
      name: "skewY()"
     }, {
      name: "translate()"
     }, {
      name: "translate3d()"
     }, {
      name: "translateX()"
     }, {
      name: "translateY()"
     }, {
      name: "translateZ()"
     } ]
    }, {
     name: "-ms-transform-origin",
     desc: "Establishes the origin of transformation for an element.",
     browsers: "IE9-9",
     restriction: "position, length, percentage"
    }, {
     name: "-ms-transform-origin-x",
     desc: "The x coordinate of the origin for transforms applied to an element with respect to its border box.",
     browsers: "IE10",
     restriction: "length, percentage"
    }, {
     name: "-ms-transform-origin-y",
     desc: "The y coordinate of the origin for transforms applied to an element with respect to its border box.",
     browsers: "IE10",
     restriction: "length, percentage"
    }, {
     name: "-ms-transform-origin-z",
     desc: "The z coordinate of the origin for transforms applied to an element with respect to its border box.",
     browsers: "IE10",
     restriction: "length, percentage"
    }, {
     name: "-ms-user-select",
     desc: "Controls the appearance of selection.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "element"
     }, {
      name: "none"
     }, {
      name: "text"
     } ],
     status: "n",
     syntax: "none | element | text"
    }, {
     name: "-ms-word-break",
     desc: "Specifies line break opportunities for non-CJK scripts.",
     browsers: "IE8",
     restriction: "enum",
     values: [ {
      name: "break-all"
     }, {
      name: "keep-all",
      desc: "Block characters can no longer create implied break points."
     }, {
      name: "normal",
      desc: "Breaks non-CJK scripts according to their own rules."
     } ]
    }, {
     name: "-ms-word-wrap",
     desc: "Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit.",
     browsers: "IE8",
     restriction: "enum",
     values: [ {
      name: "break-word",
      desc: "An unbreakable 'word' may be broken at an arbitrary point if there are no otherwise-acceptable break points in the line."
     }, {
      name: "normal",
      desc: "Lines may break only at allowed break points."
     } ]
    }, {
     name: "-ms-wrap-flow",
     desc: "An element becomes an exclusion when its 'wrap-flow' property has a computed value other than 'auto'.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "For floats an exclusion is created, for all other elements an exclusion is not created."
     }, {
      name: "both",
      desc: "Inline flow content can flow on all sides of the exclusion."
     }, {
      name: "clear"
     }, {
      name: "end",
      desc: "Inline flow content can wrap on the end side of the exclusion area but must leave the area to the start edge of the exclusion area empty."
     }, {
      name: "maximum"
     }, {
      name: "minimum"
     }, {
      name: "start",
      desc: "Inline flow content can wrap on the start edge of the exclusion area but must leave the area to end edge of the exclusion area empty."
     } ],
     status: "n",
     syntax: "auto | both | start | end | maximum | clear"
    }, {
     name: "-ms-wrap-margin",
     desc: "Gets or sets a value that is used to offset the inner wrap shape from other shapes.",
     browsers: "E,IE10",
     restriction: "length, percentage",
     status: "n",
     syntax: "<length>"
    }, {
     name: "-ms-wrap-through",
     desc: "Specifies if an element inherits its parent wrapping context. In other words if it is subject to the exclusions defined outside the element.",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "none",
      desc: "The exclusion element does not inherit its parent node's wrapping context. Its descendants are only subject to exclusion shapes defined inside the element."
     }, {
      name: "wrap",
      desc: "The exclusion element inherits its parent node's wrapping context. Its descendant inline content wraps around exclusions defined outside the element."
     } ],
     status: "n",
     syntax: "wrap | none"
    }, {
     name: "-ms-writing-mode",
     desc: "Shorthand property for both 'direction' and 'block-progression'.",
     browsers: "IE8",
     restriction: "enum",
     values: [ {
      name: "bt-lr"
     }, {
      name: "bt-rl"
     }, {
      name: "lr-bt"
     }, {
      name: "lr-tb"
     }, {
      name: "rl-bt"
     }, {
      name: "rl-tb"
     }, {
      name: "tb-lr"
     }, {
      name: "tb-rl"
     } ]
    }, {
     name: "-ms-zoom",
     desc: "Sets or retrieves the magnification scale of the object.",
     browsers: "IE8",
     restriction: "enum, integer, number, percentage",
     values: [ {
      name: "normal"
     } ]
    }, {
     name: "-ms-zoom-animation",
     desc: "Gets or sets a value that indicates whether an animation is used when zooming.",
     browsers: "IE10",
     restriction: "enum",
     values: [ {
      name: "default"
     }, {
      name: "none"
     } ]
    }, {
     name: "nav-down",
     desc: "Provides an way to control directional focus navigation.",
     browsers: "O9.5",
     restriction: "enum, identifier, string",
     values: [ {
      name: "auto",
      desc: "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
     }, {
      name: "current"
     }, {
      name: "root"
     } ]
    }, {
     name: "nav-index",
     desc: "Provides an input-method-neutral way of specifying the sequential navigation order (also known as 'tabbing order').",
     browsers: "O9.5",
     restriction: "number",
     values: [ {
      name: "auto",
      desc: "The element's sequential navigation order is assigned automatically by the user agent."
     } ]
    }, {
     name: "nav-left",
     desc: "Provides an way to control directional focus navigation.",
     browsers: "O9.5",
     restriction: "enum, identifier, string",
     values: [ {
      name: "auto",
      desc: "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
     }, {
      name: "current"
     }, {
      name: "root"
     } ]
    }, {
     name: "nav-right",
     desc: "Provides an way to control directional focus navigation.",
     browsers: "O9.5",
     restriction: "enum, identifier, string",
     values: [ {
      name: "auto",
      desc: "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
     }, {
      name: "current"
     }, {
      name: "root"
     } ]
    }, {
     name: "nav-up",
     desc: "Provides an way to control directional focus navigation.",
     browsers: "O9.5",
     restriction: "enum, identifier, string",
     values: [ {
      name: "auto",
      desc: "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
     }, {
      name: "current"
     }, {
      name: "root"
     } ]
    }, {
     name: "negative",
     desc: "@counter-style descriptor. Defines how to alter the representation when the counter value is negative.",
     browsers: "FF33",
     restriction: "image, identifier, string",
     syntax: "<symbol> <symbol>?"
    }, {
     name: "-o-animation",
     desc: "Shorthand property combines six of the animation properties into a single property.",
     browsers: "O12",
     restriction: "time, enum, timing-function, identifier, number",
     values: [ {
      name: "alternate"
     }, {
      name: "alternate-reverse"
     }, {
      name: "backwards"
     }, {
      name: "both",
      desc: "Both forwards and backwards fill modes are applied."
     }, {
      name: "forwards"
     }, {
      name: "infinite",
      desc: "Causes the animation to repeat forever."
     }, {
      name: "none",
      desc: "No animation is performed"
     }, {
      name: "normal",
      desc: "Normal playback."
     }, {
      name: "reverse",
      desc: "All iterations of the animation are played in the reverse direction from the way they were specified."
     } ]
    }, {
     name: "-o-animation-delay",
     desc: "Defines when the animation will start.",
     browsers: "O12",
     restriction: "time"
    }, {
     name: "-o-animation-direction",
     desc: "Defines whether or not the animation should play in reverse on alternate cycles.",
     browsers: "O12",
     restriction: "enum",
     values: [ {
      name: "alternate"
     }, {
      name: "alternate-reverse"
     }, {
      name: "normal",
      desc: "Normal playback."
     }, {
      name: "reverse",
      desc: "All iterations of the animation are played in the reverse direction from the way they were specified."
     } ]
    }, {
     name: "-o-animation-duration",
     desc: "Defines the length of time that an animation takes to complete one cycle.",
     browsers: "O12",
     restriction: "time"
    }, {
     name: "-o-animation-fill-mode",
     desc: "Defines what values are applied by the animation outside the time it is executing.",
     browsers: "O12",
     restriction: "enum",
     values: [ {
      name: "backwards"
     }, {
      name: "both",
      desc: "Both forwards and backwards fill modes are applied."
     }, {
      name: "forwards"
     }, {
      name: "none",
      desc: "There is no change to the property value between the time the animation is applied and the time the animation begins playing or after the animation completes."
     } ]
    }, {
     name: "-o-animation-iteration-count",
     desc: "Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.",
     browsers: "O12",
     restriction: "number, enum",
     values: [ {
      name: "infinite",
      desc: "Causes the animation to repeat forever."
     } ]
    }, {
     name: "-o-animation-name",
     desc: "Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.",
     browsers: "O12",
     restriction: "identifier, enum",
     values: [ {
      name: "none",
      desc: "No animation is performed"
     } ]
    }, {
     name: "-o-animation-play-state",
     desc: "Defines whether the animation is running or paused.",
     browsers: "O12",
     restriction: "enum",
     values: [ {
      name: "paused"
     }, {
      name: "running"
     } ]
    }, {
     name: "-o-animation-timing-function",
     desc: "Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.",
     browsers: "O12",
     restriction: "timing-function"
    }, {
     name: "object-fit",
     desc: "Specifies how the contents of a replaced element should be scaled relative to the box established by its used height and width.",
     browsers: "C32,FF36,O19,S7.1",
     restriction: "enum",
     values: [ {
      name: "contain",
      desc: "The replaced content is sized to maintain its aspect ratio while fitting within the element’s content box: its concrete object size is resolved as a contain constraint against the element's used width and height."
     }, {
      name: "cover",
      desc: "The replaced content is sized to maintain its aspect ratio while filling the element's entire content box: its concrete object size is resolved as a cover constraint against the element’s used width and height."
     }, {
      name: "fill",
      desc: "The replaced content is sized to fill the element’s content box: the object's concrete object size is the element's used width and height."
     }, {
      name: "none",
      desc: "The replaced content is not resized to fit inside the element's content box"
     }, {
      name: "scale-down"
     } ],
     syntax: "fill | contain | cover | none | scale-down"
    }, {
     name: "object-position",
     desc: "Determines the alignment of the replaced element inside its box.",
     browsers: "C32,FF36,O19",
     restriction: "position, length, percentage",
     syntax: "<position>"
    }, {
     name: "-o-border-image",
     desc: "Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.",
     browsers: "O11.6",
     restriction: "length, percentage, number, image, enum",
     values: [ {
      name: "auto",
      desc: "If 'auto' is specified then the border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
     }, {
      name: "fill",
      desc: "Causes the middle part of the border-image to be preserved."
     }, {
      name: "none"
     }, {
      name: "repeat"
     }, {
      name: "round",
      desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
     }, {
      name: "space",
      desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
     }, {
      name: "stretch",
      desc: "The image is stretched to fill the area."
     } ]
    }, {
     name: "-o-object-fit",
     desc: "Specifies how the contents of a replaced element should be scaled relative to the box established by its used height and width.",
     browsers: "O10.6",
     restriction: "enum",
     values: [ {
      name: "contain",
      desc: "The replaced content is sized to maintain its aspect ratio while fitting within the element’s content box: its concrete object size is resolved as a contain constraint against the element's used width and height."
     }, {
      name: "cover",
      desc: "The replaced content is sized to maintain its aspect ratio while filling the element's entire content box: its concrete object size is resolved as a cover constraint against the element’s used width and height."
     }, {
      name: "fill",
      desc: "The replaced content is sized to fill the element’s content box: the object's concrete object size is the element's used width and height."
     }, {
      name: "none",
      desc: "The replaced content is not resized to fit inside the element's content box"
     }, {
      name: "scale-down"
     } ]
    }, {
     name: "-o-object-position",
     desc: "Determines the alignment of the replaced element inside its box.",
     browsers: "O10.6",
     restriction: "position, length, percentage"
    }, {
     name: "opacity",
     desc: "Opacity of an element's text, where 1 is opaque and 0 is entirely transparent.",
     browsers: "C,FF3.6,IE9,O9,S1.2",
     restriction: "number(0-1)",
     syntax: "<number>"
    }, {
     name: "order",
     desc: "Controls the order in which children of a flex container appear within the flex container, by assigning them to ordinal groups.",
     browsers: "E,C29,FF22,IE11,O12.1,S9",
     restriction: "integer",
     syntax: "<integer>"
    }, {
     name: "orphans",
     desc: "Specifies the minimum number of line boxes in a block container that must be left in a fragment before a fragmentation break.",
     browsers: "C,IE8,O7,S1.3",
     restriction: "integer",
     syntax: "<integer>"
    }, {
     name: "-o-table-baseline",
     desc: "Determines which row of a inline-table should be used as baseline of inline-table.",
     browsers: "O9.6",
     restriction: "integer"
    }, {
     name: "-o-tab-size",
     desc: "This property determines the width of the tab character (U+0009), in space characters (U+0020), when rendered.",
     browsers: "O10.6",
     restriction: "integer, length"
    }, {
     name: "-o-text-overflow",
     desc: "Text can overflow for example when it is prevented from wrapping",
     browsers: "O10",
     restriction: "enum",
     values: [ {
      name: "clip"
     }, {
      name: "ellipsis"
     } ]
    }, {
     name: "-o-transform",
     desc: "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
     browsers: "O10.5",
     restriction: "enum",
     values: [ {
      name: "matrix()"
     }, {
      name: "matrix3d()"
     }, {
      name: "none"
     }, {
      name: "rotate()"
     }, {
      name: "rotate3d()"
     }, {
      name: "rotateX('angle')"
     }, {
      name: "rotateY('angle')"
     }, {
      name: "rotateZ('angle')"
     }, {
      name: "scale()"
     }, {
      name: "scale3d()"
     }, {
      name: "scaleX()"
     }, {
      name: "scaleY()"
     }, {
      name: "scaleZ()"
     }, {
      name: "skew()"
     }, {
      name: "skewX()"
     }, {
      name: "skewY()"
     }, {
      name: "translate()"
     }, {
      name: "translate3d()"
     }, {
      name: "translateX()"
     }, {
      name: "translateY()"
     }, {
      name: "translateZ()"
     } ]
    }, {
     name: "-o-transform-origin",
     desc: "Establishes the origin of transformation for an element.",
     browsers: "O10.5",
     restriction: "positon, length, percentage"
    }, {
     name: "-o-transition",
     desc: "Shorthand property combines four of the transition properties into a single property.",
     browsers: "O11.5",
     restriction: "time, property, timing-function, enum",
     values: [ {
      name: "all",
      desc: "Every property that is able to undergo a transition will do so."
     }, {
      name: "none",
      desc: "No property will transition."
     } ]
    }, {
     name: "-o-transition-delay",
     desc: "Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.",
     browsers: "O11.5",
     restriction: "time"
    }, {
     name: "-o-transition-duration",
     desc: "Specifies how long the transition from the old value to the new value should take.",
     browsers: "O11.5",
     restriction: "time"
    }, {
     name: "-o-transition-property",
     desc: "Specifies the name of the CSS property to which the transition is applied.",
     browsers: "O11.5",
     restriction: "property",
     values: [ {
      name: "all",
      desc: "Every property that is able to undergo a transition will do so."
     }, {
      name: "none",
      desc: "No property will transition."
     } ]
    }, {
     name: "-o-transition-timing-function",
     desc: "Describes how the intermediate values used during a transition will be calculated.",
     browsers: "O11.5",
     restriction: "timing-function"
    }, {
     name: "offset-block-end",
     desc: "Logical 'bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, percentage",
     values: [ {
      name: "auto",
      desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
     } ],
     syntax: "<'left'>"
    }, {
     name: "offset-block-start",
     desc: "Logical 'top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, percentage",
     values: [ {
      name: "auto",
      desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
     } ],
     syntax: "<'left'>"
    }, {
     name: "offset-inline-end",
     desc: "Logical 'right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, percentage",
     values: [ {
      name: "auto",
      desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
     } ],
     syntax: "<'left'>"
    }, {
     name: "offset-inline-start",
     desc: "Logical 'left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, percentage",
     values: [ {
      name: "auto",
      desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
     } ],
     syntax: "<'left'>"
    }, {
     name: "outline",
     desc: "Shorthand property for 'outline-style', 'outline-width', and 'outline-color'.",
     browsers: "E,C,FF1.5,IE8,O8,S1.2",
     restriction: "length, line-width, line-style, color, enum",
     values: [ {
      name: "auto",
      desc: "Permits the user agent to render a custom outline style, typically the default platform style."
     }, {
      name: "invert",
      browsers: "E,IE8,O"
     } ],
     syntax: "[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]"
    }, {
     name: "outline-color",
     desc: "The color of the outline.",
     browsers: "E,C,FF1.5,IE8,O8,S1.2",
     restriction: "enum, color",
     values: [ {
      name: "invert",
      browsers: "E,IE8,O"
     } ],
     syntax: "<color> | invert"
    }, {
     name: "outline-offset",
     desc: "Offset the outline and draw it beyond the border edge.",
     browsers: "C,FF1.5,O9.5,S1.2",
     restriction: "length",
     syntax: "<length>"
    }, {
     name: "outline-style",
     desc: "Style of the outline.",
     browsers: "E,C,FF1.5,IE8,O8,S1.2",
     restriction: "line-style, enum",
     values: [ {
      name: "auto",
      desc: "Permits the user agent to render a custom outline style, typically the default platform style."
     } ],
     syntax: "auto | <br-style>"
    }, {
     name: "outline-width",
     desc: "Width of the outline.",
     browsers: "E,C,FF1.5,IE8,O8,S1.2",
     restriction: "length, line-width",
     syntax: "<br-width>"
    }, {
     name: "overflow",
     desc: "Shorthand for setting 'overflow-x' and 'overflow-y'.",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "The behavior of the 'auto' value is UA-dependent, but should cause a scrolling mechanism to be provided for overflowing boxes."
     }, {
      name: "hidden",
      desc: "Content is clipped and no scrolling mechanism should be provided to view the content outside the clipping region."
     }, {
      name: "-moz-hidden-unscrollable",
      browsers: "FF"
     }, {
      name: "scroll",
      desc: "Content is clipped and if the user agent uses a scrolling mechanism that is visible on the screen (such as a scroll bar or a panner), that mechanism should be displayed for a box whether or not any of its content is clipped."
     }, {
      name: "visible",
      desc: "Content is not clipped, i.e., it may be rendered outside the content box."
     } ],
     syntax: "[ visible | hidden | clip | scroll | auto ]{1,2}"
    }, {
     name: "overflow-wrap",
     desc: "Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit within the line box.",
     browsers: "C23,O12.1,S6.1",
     restriction: "enum",
     values: [ {
      name: "break-word",
      desc: "An otherwise unbreakable sequence of characters may be broken at an arbitrary point if there are no otherwise-acceptable break points in the line."
     }, {
      name: "normal",
      desc: "Lines may break only at allowed break points."
     } ],
     syntax: "normal | break-word"
    }, {
     name: "overflow-x",
     desc: "Specifies the handling of overflow in the horizontal direction.",
     browsers: "E,C,FF1.5,IE5,O9.5,S3",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "The behavior of the 'auto' value is UA-dependent, but should cause a scrolling mechanism to be provided for overflowing boxes."
     }, {
      name: "hidden",
      desc: "Content is clipped and no scrolling mechanism should be provided to view the content outside the clipping region."
     }, {
      name: "scroll",
      desc: "Content is clipped and if the user agent uses a scrolling mechanism that is visible on the screen (such as a scroll bar or a panner), that mechanism should be displayed for a box whether or not any of its content is clipped."
     }, {
      name: "visible",
      desc: "Content is not clipped, i.e., it may be rendered outside the content box."
     } ],
     syntax: "visible | hidden | clip | scroll | auto"
    }, {
     name: "overflow-y",
     desc: "Specifies the handling of overflow in the vertical direction.",
     browsers: "E,C,FF1.5,IE5,O9.5,S3",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "The behavior of the 'auto' value is UA-dependent, but should cause a scrolling mechanism to be provided for overflowing boxes."
     }, {
      name: "hidden",
      desc: "Content is clipped and no scrolling mechanism should be provided to view the content outside the clipping region."
     }, {
      name: "scroll",
      desc: "Content is clipped and if the user agent uses a scrolling mechanism that is visible on the screen (such as a scroll bar or a panner), that mechanism should be displayed for a box whether or not any of its content is clipped."
     }, {
      name: "visible",
      desc: "Content is not clipped, i.e., it may be rendered outside the content box."
     } ],
     syntax: "visible | hidden | clip | scroll | auto"
    }, {
     name: "pad",
     desc: "@counter-style descriptor. Specifies a “fixed-width” counter style, where representations shorter than the pad value are padded with a particular <symbol>",
     browsers: "FF33",
     restriction: "integer, image, string, identifier",
     syntax: "<integer> && <symbol>"
    }, {
     name: "padding",
     desc: "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
     restriction: "length, percentage",
     values: [],
     syntax: "[ <length> | <percentage> ]{1,4}"
    }, {
     name: "padding-bottom",
     desc: "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
     restriction: "length, percentage",
     syntax: "<length> | <percentage>"
    }, {
     name: "padding-block-end",
     desc: "Logical 'padding-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, percentage",
     syntax: "<'padding-left'>"
    }, {
     name: "padding-block-start",
     desc: "Logical 'padding-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, percentage",
     syntax: "<'padding-left'>"
    }, {
     name: "padding-inline-end",
     desc: "Logical 'padding-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, percentage",
     syntax: "<'padding-left'>"
    }, {
     name: "padding-inline-start",
     desc: "Logical 'padding-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
     browsers: "FF41",
     restriction: "length, percentage",
     syntax: "<'padding-left'>"
    }, {
     name: "padding-left",
     desc: "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
     restriction: "length, percentage",
     syntax: "<length> | <percentage>"
    }, {
     name: "padding-right",
     desc: "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
     restriction: "length, percentage",
     syntax: "<length> | <percentage>"
    }, {
     name: "padding-top",
     desc: "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
     restriction: "length, percentage",
     syntax: "<length> | <percentage>"
    }, {
     name: "page-break-after",
     desc: "Defines rules for page breaks after an element.",
     restriction: "enum",
     values: [ {
      name: "always",
      desc: "Always force a page break after the generated box."
     }, {
      name: "auto",
      desc: "Neither force nor forbid a page break after generated box."
     }, {
      name: "avoid",
      desc: "Avoid a page break after the generated box."
     }, {
      name: "left",
      desc: "Force one or two page breaks after the generated box so that the next page is formatted as a left page."
     }, {
      name: "right",
      desc: "Force one or two page breaks after the generated box so that the next page is formatted as a right page."
     } ],
     syntax: "auto | always | avoid | left | right | recto | verso"
    }, {
     name: "page-break-before",
     desc: "Defines rules for page breaks before an element.",
     restriction: "enum",
     values: [ {
      name: "always",
      desc: "Always force a page break before the generated box."
     }, {
      name: "auto",
      desc: "Neither force nor forbid a page break before the generated box."
     }, {
      name: "avoid",
      desc: "Avoid a page break before the generated box."
     }, {
      name: "left",
      desc: "Force one or two page breaks before the generated box so that the next page is formatted as a left page."
     }, {
      name: "right",
      desc: "Force one or two page breaks before the generated box so that the next page is formatted as a right page."
     } ],
     syntax: "auto | always | avoid | left | right | recto | verso"
    }, {
     name: "page-break-inside",
     desc: "Defines rules for page breaks inside an element.",
     browsers: "C,IE8,O7,S1.3",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Neither force nor forbid a page break inside the generated box."
     }, {
      name: "avoid",
      desc: "Avoid a page break inside the generated box."
     } ],
     syntax: "auto | avoid"
    }, {
     name: "paint-order",
     desc: "Controls the order that the three paint operations that shapes and text are rendered with: their fill, their stroke and any markers they might have.",
     browsers: "C35,FF31,O22,S7.1",
     restriction: "enum",
     values: [ {
      name: "fill"
     }, {
      name: "markers"
     }, {
      name: "normal",
      desc: "The element is painted with the standard order of painting operations: the 'fill' is painted first, then its 'stroke' and finally its markers."
     }, {
      name: "stroke"
     } ],
     status: "e",
     syntax: "normal | [ fill || stroke || markers ]"
    }, {
     name: "perspective",
     desc: "Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.",
     browsers: "E,C36,FF16,IE10,O23,S9",
     restriction: "length, enum",
     values: [ {
      name: "none",
      desc: "No perspective transform is applied."
     } ],
     syntax: "none | <length>"
    }, {
     name: "perspective-origin",
     desc: "Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.",
     browsers: "E,C36,FF16,IE10,O23,S9",
     restriction: "position, percentage, length",
     syntax: "<position>"
    }, {
     name: "pointer-events",
     desc: "Specifies under what circumstances a given element can be the target element for a pointer event.",
     restriction: "enum",
     values: [ {
      name: "all",
      desc: "The given element can be the target element for pointer events whenever the pointer is over either the interior or the perimeter of the element."
     }, {
      name: "fill",
      desc: "The given element can be the target element for pointer events whenever the pointer is over the interior of the element."
     }, {
      name: "none",
      desc: "The given element does not receive pointer events."
     }, {
      name: "painted"
     }, {
      name: "stroke",
      desc: "The given element can be the target element for pointer events whenever the pointer is over the perimeter of the element."
     }, {
      name: "visible",
      desc: "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and the pointer is over either the interior or the perimete of the element."
     }, {
      name: "visibleFill"
     }, {
      name: "visiblePainted"
     }, {
      name: "visibleStroke"
     } ],
     syntax: "auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit"
    }, {
     name: "position",
     restriction: "enum",
     values: [ {
      name: "absolute"
     }, {
      name: "fixed",
      desc: "The box's position is calculated according to the 'absolute' model, but in addition, the box is fixed with respect to some reference. As with the 'absolute' model, the box's margins do not collapse with any other margins."
     }, {
      name: "-ms-page",
      browsers: "E,IE10"
     }, {
      name: "relative"
     }, {
      name: "static"
     }, {
      name: "sticky",
      browsers: "C56,FF32"
     }, {
      name: "-webkit-sticky",
      browsers: "S6.1"
     } ],
     syntax: "static | relative | absolute | sticky | fixed"
    }, {
     name: "prefix",
     desc: "@counter-style descriptor. Specifies a <symbol> that is prepended to the marker representation.",
     browsers: "FF33",
     restriction: "image, string, identifier",
     syntax: "<symbol>"
    }, {
     name: "quotes",
     desc: "Specifies quotation marks for any number of embedded quotations.",
     browsers: "E,C,FF1.5,IE8,O8,S5.1",
     restriction: "string",
     values: [ {
      name: "none",
      desc: "The 'open-quote' and 'close-quote' values of the 'content' property produce no quotations marks, as if they were 'no-open-quote' and 'no-close-quote' respectively."
     } ],
     syntax: "none | [ <string> <string> ]+"
    }, {
     name: "range",
     desc: "@counter-style descriptor. Defines the ranges over which the counter style is defined.",
     browsers: "FF33",
     restriction: "integer, enum",
     values: [ {
      name: "auto",
      desc: "The range depends on the counter system."
     }, {
      name: "infinite",
      desc: "If used as the first value in a range, it represents negative infinity; if used as the second value, it represents positive infinity."
     } ],
     syntax: "[ [ <integer> | infinite ]{2} ]# | auto"
    }, {
     name: "resize",
     desc: "Specifies whether or not an element is resizable by the user, and if so, along which axis/axes.",
     browsers: "C,FF4,O15,S3",
     restriction: "enum",
     values: [ {
      name: "both",
      desc: "The UA presents a bidirectional resizing mechanism to allow the user to adjust both the height and the width of the element."
     }, {
      name: "horizontal",
      desc: "The UA presents a unidirectional horizontal resizing mechanism to allow the user to adjust only the width of the element."
     }, {
      name: "none",
      desc: "The UA does not present a resizing mechanism on the element, and the user is given no direct manipulation mechanism to resize the element."
     }, {
      name: "vertical",
      desc: "The UA presents a unidirectional vertical resizing mechanism to allow the user to adjust only the height of the element."
     } ],
     syntax: "none | both | horizontal | vertical"
    }, {
     name: "right",
     desc: "Specifies how far an absolutely positioned box's right margin edge is offset to the left of the right edge of the box's 'containing block'.",
     restriction: "length, percentage",
     values: [ {
      name: "auto",
      desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
     } ],
     syntax: "<length> | <percentage> | auto"
    }, {
     name: "ruby-align",
     desc: "Specifies how text is distributed within the various ruby boxes when their contents do not exactly fill their respective boxes.",
     browsers: "FF10,IE5",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "The user agent determines how the ruby contents are aligned. This is the initial value.",
      browsers: "E,IE5"
     }, {
      name: "center",
      desc: "The ruby content is centered within its box."
     }, {
      name: "distribute-letter",
      browsers: "E,IE5"
     }, {
      name: "distribute-space",
      browsers: "E,IE5"
     }, {
      name: "left",
      desc: "The ruby text content is aligned with the start edge of the base."
     }, {
      name: "line-edge",
      browsers: "E,IE5"
     }, {
      name: "right",
      desc: "The ruby text content is aligned with the end edge of the base.",
      browsers: "E,IE5"
     }, {
      name: "start",
      desc: "The ruby text content is aligned with the start edge of the base.",
      browsers: "FF10"
     }, {
      name: "space-between",
      desc: "The ruby content expands as defined for normal text justification (as defined by 'text-justify'),",
      browsers: "FF10"
     }, {
      name: "space-around",
      desc: "As for 'space-between' except that there exists an extra justification opportunities whose space is distributed half before and half after the ruby content.",
      browsers: "FF10"
     } ],
     syntax: "start | center | space-between | space-around"
    }, {
     name: "ruby-overhang",
     desc: "Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base.",
     browsers: "FF10,IE5",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "The ruby text can overhang text adjacent to the base on either side. This is the initial value."
     }, {
      name: "end",
      desc: "The ruby text can overhang the text that follows it."
     }, {
      name: "none",
      desc: "The ruby text cannot overhang any text adjacent to its base, only its own base."
     }, {
      name: "start",
      desc: "The ruby text can overhang the text that precedes it."
     } ]
    }, {
     name: "ruby-position",
     desc: "Used by the parent of elements with display: ruby-text to control the position of the ruby text with respect to its base.",
     browsers: "FF10,IE5",
     restriction: "enum",
     values: [ {
      name: "after"
     }, {
      name: "before"
     }, {
      name: "inline"
     }, {
      name: "right",
      desc: "The ruby text appears on the right of the base. Unlike 'before' and 'after', this value is not relative to the text flow direction."
     } ],
     syntax: "over | under | inter-character"
    }, {
     name: "ruby-span",
     desc: "Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base.",
     browsers: "FF10",
     restriction: "enum",
     values: [ {
      name: "attr(x)"
     }, {
      name: "none",
      desc: "No spanning. The computed value is '1'."
     } ]
    }, {
     name: "scrollbar-3dlight-color",
     desc: "Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.",
     browsers: "IE6",
     restriction: "color"
    }, {
     name: "scrollbar-arrow-color",
     desc: "Determines the color of the arrow elements of a scroll arrow.",
     browsers: "IE6",
     restriction: "color"
    }, {
     name: "scrollbar-base-color",
     desc: "Determines the color of the main elements of a scroll bar, which include the scroll box, track, and scroll arrows.",
     browsers: "IE6",
     restriction: "color"
    }, {
     name: "scrollbar-darkshadow-color",
     desc: "Determines the color of the gutter of a scroll bar.",
     browsers: "IE6",
     restriction: "color"
    }, {
     name: "scrollbar-face-color",
     desc: "Determines the color of the scroll box and scroll arrows of a scroll bar.",
     browsers: "IE6",
     restriction: "color"
    }, {
     name: "scrollbar-highlight-color",
     desc: "Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.",
     browsers: "IE6",
     restriction: "color"
    }, {
     name: "scrollbar-shadow-color",
     desc: "Determines the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.",
     browsers: "IE6",
     restriction: "color"
    }, {
     name: "scrollbar-track-color",
     desc: "Determines the color of the track element of a scroll bar.",
     browsers: "IE6",
     restriction: "color"
    }, {
     name: "scroll-behavior",
     desc: "Specifies the scrolling behavior for a scrolling box, when scrolling happens due to navigation or CSSOM scrolling APIs.",
     browsers: "FF36",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Scrolls in an instant fashion."
     }, {
      name: "smooth"
     } ],
     syntax: "auto | smooth"
    }, {
     name: "scroll-snap-coordinate",
     desc: "Defines the x and y coordinate within the element which will align with the nearest ancestor scroll container’s snap-destination for the respective axis.",
     browsers: "FF39",
     restriction: "position, length, percentage, enum",
     values: [ {
      name: "none",
      desc: "Specifies that this element does not contribute a snap point."
     } ],
     syntax: "none | <position>#"
    }, {
     name: "scroll-snap-destination",
     desc: "Define the x and y coordinate within the scroll container’s visual viewport which element snap points will align with.",
     browsers: "FF39",
     restriction: "position, length, percentage",
     syntax: "<position>"
    }, {
     name: "scroll-snap-points-x",
     desc: "Defines the positioning of snap points along the x axis of the scroll container it is applied to.",
     browsers: "FF39",
     restriction: "enum",
     values: [ {
      name: "none",
      desc: "No snap points are defined by this scroll container."
     }, {
      name: "repeat()",
      desc: "Defines an interval at which snap points are defined, starting from the container’s relevant start edge."
     } ],
     status: "o",
     syntax: "none | repeat( <length-percentage> )"
    }, {
     name: "scroll-snap-points-y",
     desc: "Defines the positioning of snap points alobg the y axis of the scroll container it is applied to.",
     browsers: "FF39",
     restriction: "enum",
     values: [ {
      name: "none",
      desc: "No snap points are defined by this scroll container."
     }, {
      name: "repeat()",
      desc: "Defines an interval at which snap points are defined, starting from the container’s relevant start edge."
     } ],
     status: "o",
     syntax: "none | repeat( <length-percentage> )"
    }, {
     name: "scroll-snap-type",
     desc: "Defines how strictly snap points are enforced on the scroll container.",
     browsers: "FF39",
     restriction: "enum",
     values: [ {
      name: "none",
      desc: "The visual viewport of this scroll container must ignore snap points, if any, when scrolled."
     }, {
      name: "mandatory",
      desc: "The visual viewport of this scroll container is guaranteed to rest on a snap point when there are no active scrolling operations."
     }, {
      name: "proximity",
      desc: "The visual viewport of this scroll container may come to rest on a snap point at the termination of a scroll at the discretion of the UA given the parameters of the scroll."
     } ],
     syntax: "none | mandatory | proximity"
    }, {
     name: "shape-image-threshold",
     desc: "Defines the alpha channel threshold used to extract the shape using an image. A value of 0.5 means that the shape will enclose all the pixels that are more than 50% opaque.",
     browsers: "C37,O24",
     restriction: "number",
     syntax: "<number>"
    }, {
     name: "shape-margin",
     desc: "Adds a margin to a 'shape-outside'. This defines a new shape that is the smallest contour that includes all the points that are the 'shape-margin' distance outward in the perpendicular direction from a point on the underlying shape.",
     browsers: "C37,O24",
     restriction: "url, length, percentage",
     syntax: "<length-percentage>"
    }, {
     name: "shape-outside",
     desc: "Specifies an orthogonal rotation to be applied to an image before it is laid out.",
     browsers: "C37,O24",
     restriction: "image, box, shape, enum",
     values: [ {
      name: "margin-box"
     }, {
      name: "none",
      desc: "The float area is unaffected."
     } ],
     syntax: "none | <shape-box> || <basic-shape> | <image>"
    }, {
     name: "shape-rendering",
     desc: "Provides hints about what tradeoffs to make as it renders vector graphics elements such as <path> elements and basic shapes such as circles and rectangles.",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Suppresses aural rendering."
     }, {
      name: "crispEdges"
     }, {
      name: "geometricPrecision",
      desc: "Emphasize geometric precision over speed and crisp edges."
     }, {
      name: "optimizeSpeed",
      desc: "Emphasize rendering speed over geometric precision and crisp edges."
     } ]
    }, {
     name: "size",
     browsers: "C,O8",
     restriction: "length"
    }, {
     name: "src",
     desc: "@font-face descriptor. Specifies the resource containing font data. It is required, whether the font is downloadable or locally installed.",
     restriction: "enum, url, identifier",
     values: [ {
      name: "url()",
      desc: "Reference font by URL"
     }, {
      name: "format()"
     }, {
      name: "local()"
     } ],
     syntax: "[ <url> format(<string>#)? | local(<family-name>) ]#"
    }, {
     name: "stop-color",
     desc: "Indicates what color to use at that gradient stop.",
     restriction: "color"
    }, {
     name: "stop-opacity",
     desc: "Defines the opacity of a given gradient stop.",
     restriction: "number(0-1)"
    }, {
     name: "stroke",
     desc: "Paints along the outline of the given graphical element.",
     restriction: "color, enum, url",
     values: [ {
      name: "url()",
      desc: "A URL reference to a paint server element, which is an element that defines a paint server: ‘hatch’, ‘linearGradient’, ‘mesh’, ‘pattern’, ‘radialGradient’ and ‘solidcolor’."
     } ]
    }, {
     name: "stroke-dasharray",
     desc: "Controls the pattern of dashes and gaps used to stroke paths.",
     restriction: "length, percentage, number, enum",
     values: [ {
      name: "none",
      desc: "Indicates that no dashing is used."
     } ]
    }, {
     name: "stroke-dashoffset",
     desc: "Specifies the distance into the dash pattern to start the dash.",
     restriction: "percentage, length"
    }, {
     name: "stroke-linecap",
     desc: "Specifies the shape to be used at the end of open subpaths when they are stroked.",
     restriction: "enum",
     values: [ {
      name: "butt"
     }, {
      name: "round",
      desc: "Indicates that at each end of each subpath, the shape representing the stroke will be extended by a half circle with a radius equal to the stroke width."
     }, {
      name: "square",
      desc: "Indicates that at the end of each subpath, the shape representing the stroke will be extended by a rectangle with the same width as the stroke width and whose length is half of the stroke width."
     } ]
    }, {
     name: "stroke-linejoin",
     desc: "Specifies the shape to be used at the corners of paths or basic shapes when they are stroked.",
     restriction: "enum",
     values: [ {
      name: "bevel"
     }, {
      name: "miter"
     }, {
      name: "round",
      desc: "Indicates that a round corner is to be used to join path segments."
     } ]
    }, {
     name: "stroke-miterlimit",
     desc: "When two line segments meet at a sharp angle and miter joins have been specified for 'stroke-linejoin', it is possible for the miter to extend far beyond the thickness of the line stroking the path.",
     restriction: "number"
    }, {
     name: "stroke-opacity",
     desc: "Specifies the opacity of the painting operation used to stroke the current object.",
     restriction: "number(0-1)"
    }, {
     name: "stroke-width",
     desc: "Specifies the width of the stroke on the current object.",
     restriction: "percentage, length"
    }, {
     name: "suffix",
     desc: "@counter-style descriptor. Specifies a <symbol> that is appended to the marker representation.",
     browsers: "FF33",
     restriction: "image, string, identifier",
     syntax: "<symbol>"
    }, {
     name: "system",
     desc: "@counter-style descriptor. Specifies which algorithm will be used to construct the counter’s representation based on the counter value.",
     browsers: "FF33",
     restriction: "enum, integer",
     values: [ {
      name: "additive"
     }, {
      name: "alphabetic",
      desc: 'Interprets the list of counter symbols as digits to an alphabetic numbering system, similar to the default lower-alpha counter style, which wraps from "a", "b", "c", to "aa", "ab", "ac".'
     }, {
      name: "cyclic"
     }, {
      name: "extends"
     }, {
      name: "fixed",
      desc: "Runs through its list of counter symbols once, then falls back."
     }, {
      name: "numeric"
     }, {
      name: "symbolic"
     } ],
     syntax: "cyclic | numeric | alphabetic | symbolic | additive | [ fixed <integer>? ] | [ extends <counter-style-name> ]"
    }, {
     name: "symbols",
     desc: "@counter-style descriptor. Specifies the symbols used by the marker-construction algorithm specified by the system descriptor.",
     browsers: "FF33",
     restriction: "image, string, identifier",
     syntax: "<symbol>+"
    }, {
     name: "table-layout",
     desc: "Controls the algorithm used to lay out the table cells, rows, and columns.",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Use any automatic table layout algorithm."
     }, {
      name: "fixed",
      desc: "Use the fixed table layout algorithm."
     } ],
     syntax: "auto | fixed"
    }, {
     name: "tab-size",
     desc: "Determines the width of the tab character (U+0009), in space characters (U+0020), when rendered.",
     browsers: "C21,O15,S6.1",
     restriction: "integer, length",
     syntax: "<integer> | <length>"
    }, {
     name: "text-align",
     desc: "Describes how inline contents of a block are horizontally aligned if the contents do not completely fill the line box.",
     restriction: "string",
     values: [ {
      name: "center",
      desc: "The inline contents are centered within the line box."
     }, {
      name: "end",
      desc: "The inline contents are aligned to the end edge of the line box.",
      browsers: "C,FF3.6,O15,S3.1"
     }, {
      name: "justify",
      desc: "The text is justified according to the method specified by the 'text-justify' property."
     }, {
      name: "left",
      desc: "The inline contents are aligned to the left edge of the line box. In vertical text, 'left' aligns to the edge of the line box that would be the start edge for left-to-right text."
     }, {
      name: "right",
      desc: "The inline contents are aligned to the right edge of the line box. In vertical text, 'right' aligns to the edge of the line box that would be the end edge for left-to-right text."
     }, {
      name: "start",
      desc: "The inline contents are aligned to the start edge of the line box.",
      browsers: "C,FF1,O15,S3.1"
     } ],
     syntax: "start | end | left | right | center | justify | match-parent"
    }, {
     name: "text-align-last",
     desc: "Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.",
     browsers: "E,FF12,IE5",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Content on the affected line is aligned per 'text-align' unless 'text-align' is set to 'justify', in which case it is 'start-aligned'."
     }, {
      name: "center",
      desc: "The inline contents are centered within the line box."
     }, {
      name: "justify",
      desc: "The text is justified according to the method specified by the 'text-justify' property."
     }, {
      name: "left",
      desc: "The inline contents are aligned to the left edge of the line box. In vertical text, 'left' aligns to the edge of the line box that would be the start edge for left-to-right text."
     }, {
      name: "right",
      desc: "The inline contents are aligned to the right edge of the line box. In vertical text, 'right' aligns to the edge of the line box that would be the end edge for left-to-right text."
     } ],
     syntax: "auto | start | end | left | right | center | justify"
    }, {
     name: "text-anchor",
     desc: "Used to align (start-, middle- or end-alignment) a string of text relative to a given point.",
     restriction: "enum",
     values: [ {
      name: "end",
      desc: "The rendered characters are aligned such that the end of the resulting rendered text is at the initial current text position."
     }, {
      name: "middle",
      desc: "The rendered characters are aligned such that the geometric middle of the resulting rendered text is at the initial current text position."
     }, {
      name: "start",
      desc: "The rendered characters are aligned such that the start of the resulting rendered text is at the initial current text position."
     } ]
    }, {
     name: "text-decoration",
     desc: "Decorations applied to font used for an element's text.",
     restriction: "enum, color",
     values: [ {
      name: "dashed"
     }, {
      name: "dotted"
     }, {
      name: "double"
     }, {
      name: "line-through"
     }, {
      name: "overline"
     }, {
      name: "solid"
     }, {
      name: "underline"
     }, {
      name: "wavy"
     } ],
     syntax: "<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'>"
    }, {
     name: "text-decoration-color",
     desc: "Specifies the color of text decoration (underlines overlines, and line-throughs) set on the element with text-decoration-line.",
     browsers: "FF36,C57,O44",
     restriction: "color",
     syntax: "<color>"
    }, {
     name: "text-decoration-line",
     desc: "Specifies what line decorations, if any, are added to the element.",
     browsers: "FF36",
     restriction: "enum",
     values: [ {
      name: "line-through"
     }, {
      name: "none",
      desc: "Neither produces nor inhibits text decoration."
     }, {
      name: "overline"
     }, {
      name: "underline"
     } ],
     syntax: "none | [ underline || overline || line-through || blink ]"
    }, {
     name: "text-decoration-style",
     desc: "Specifies the line style for underline, line-through and overline text decoration.",
     browsers: "FF36",
     restriction: "enum",
     values: [ {
      name: "dashed"
     }, {
      name: "dotted"
     }, {
      name: "double"
     }, {
      name: "none",
      desc: "Produces no line."
     }, {
      name: "solid"
     }, {
      name: "wavy"
     } ],
     syntax: "solid | double | dotted | dashed | wavy"
    }, {
     name: "text-indent",
     desc: "Specifies the indentation applied to lines of inline content in a block. The indentation only affects the first line of inline content in the block unless the 'hanging' keyword is specified, in which case it affects all lines except the first.",
     restriction: "percentage, length",
     values: [],
     syntax: "<length-percentage> && hanging? && each-line?"
    }, {
     name: "text-justify",
     desc: "Selects the justification algorithm used when 'text-align' is set to 'justify'. The property applies to block containers, but the UA may (but is not required to) also support it on inline elements.",
     browsers: "E,IE5.5",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "The UA determines the justification algorithm to follow, based on a balance between performance and adequate presentation quality."
     }, {
      name: "distribute",
      desc: "Justification primarily changes spacing both at word separators and at grapheme cluster boundaries in all scripts except those in the connected and cursive groups. This value is sometimes used in e.g. Japanese, often with the 'text-align-last' property."
     }, {
      name: "distribute-all-lines"
     }, {
      name: "inter-cluster"
     }, {
      name: "inter-ideograph"
     }, {
      name: "inter-word"
     }, {
      name: "kashida"
     }, {
      name: "newspaper"
     } ],
     syntax: "auto | inter-character | inter-word | none"
    }, {
     name: "text-orientation",
     desc: "Specifies the orientation of text within a line.",
     browsers: "C,O15,S5.1",
     restriction: "enum",
     values: [ {
      name: "sideways",
      browsers: "C25,O15,S6.1"
     }, {
      name: "sideways-right",
      browsers: "C25,O15,S6.1"
     }, {
      name: "upright"
     } ],
     syntax: "mixed | upright | sideways"
    }, {
     name: "text-overflow",
     desc: "Text can overflow for example when it is prevented from wrapping.",
     browsers: "E,C,FF9,IE5.5,O11.6,S2",
     restriction: "enum, string",
     values: [ {
      name: "clip"
     }, {
      name: "ellipsis"
     } ],
     syntax: "[ clip | ellipsis | <string> ]{1,2}"
    }, {
     name: "text-rendering",
     desc: "The creator of SVG content might want to provide a hint to the implementation about what tradeoffs to make as it renders text. The ‘text-rendering’ property provides these hints.",
     browsers: "C,FF3,O9,S5",
     restriction: "enum",
     values: [ {
      name: "auto"
     }, {
      name: "geometricPrecision",
      desc: "Indicates that the user agent shall emphasize geometric precision over legibility and rendering speed."
     }, {
      name: "optimizeLegibility"
     }, {
      name: "optimizeSpeed",
      desc: "Indicates that the user agent shall emphasize rendering speed over legibility and geometric precision."
     } ],
     syntax: "auto | optimizeSpeed | optimizeLegibility | geometricPrecision"
    }, {
     name: "text-shadow",
     desc: "Enables shadow effects to be applied to the text of the element.",
     browsers: "E,C,FF3.6,IE10,O9.5,S1.1",
     restriction: "length, color",
     values: [],
     syntax: "none | <shadow-t>#"
    }, {
     name: "text-transform",
     desc: "Controls capitalization effects of an element’s text.",
     restriction: "enum",
     values: [ {
      name: "capitalize"
     }, {
      name: "lowercase"
     }, {
      name: "none",
      desc: "No effects."
     }, {
      name: "uppercase"
     } ],
     syntax: "none | capitalize | uppercase | lowercase | full-width"
    }, {
     name: "text-underline-position",
     desc: "Sets the position of an underline specified on the same element: it does not affect underlines specified by ancestor elements. This property is typically used in vertical writing contexts such as in Japanese documents where it often desired to have the underline appear 'over' (to the right of) the affected run of text",
     browsers: "E,IE10",
     restriction: "enum",
     values: [ {
      name: "above"
     }, {
      name: "auto",
      desc: "The user agent may use any algorithm to determine the underline’s position. In horizontal line layout, the underline should be aligned as for alphabetic. In vertical line layout, if the language is set to Japanese or Korean, the underline should be aligned as for over."
     }, {
      name: "below",
      desc: "The underline is aligned with the under edge of the element’s content box."
     } ],
     syntax: "auto | [ under || [ left | right ] ]"
    }, {
     name: "top",
     desc: "Specifies how far an absolutely positioned box's top margin edge is offset below the top edge of the box's 'containing block'.",
     restriction: "length, percentage",
     values: [ {
      name: "auto",
      desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
     } ],
     syntax: "<length> | <percentage> | auto"
    }, {
     name: "touch-action",
     desc: "Determines whether touch input may trigger default behavior supplied by user agent.",
     browsers: "E,C36,IE11,O23",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "The user agent may determine any permitted touch behaviors for touches that begin on the element."
     }, {
      name: "cross-slide-x",
      browsers: "E,IE11"
     }, {
      name: "cross-slide-y",
      browsers: "E,IE11"
     }, {
      name: "double-tap-zoom",
      browsers: "E,IE11"
     }, {
      name: "manipulation",
      desc: "The user agent may consider touches that begin on the element only for the purposes of scrolling and continuous zooming."
     }, {
      name: "none",
      desc: "Touches that begin on the element must not trigger default touch behaviors."
     }, {
      name: "pan-x",
      desc: "The user agent may consider touches that begin on the element only for the purposes of horizontally scrolling the element’s nearest ancestor with horizontally scrollable content."
     }, {
      name: "pan-y",
      desc: "The user agent may consider touches that begin on the element only for the purposes of vertically scrolling the element’s nearest ancestor with vertically scrollable content."
     }, {
      name: "pinch-zoom",
      browsers: "E,IE11"
     } ],
     syntax: "auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation"
    }, {
     name: "transform",
     desc: "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
     browsers: "E,C36,FF16,IE10,O12.1,S9",
     restriction: "enum",
     values: [ {
      name: "matrix()"
     }, {
      name: "matrix3d()"
     }, {
      name: "none"
     }, {
      name: "perspective()"
     }, {
      name: "rotate()"
     }, {
      name: "rotate3d()"
     }, {
      name: "rotateX('angle')"
     }, {
      name: "rotateY('angle')"
     }, {
      name: "rotateZ('angle')"
     }, {
      name: "scale()"
     }, {
      name: "scale3d()"
     }, {
      name: "scaleX()"
     }, {
      name: "scaleY()"
     }, {
      name: "scaleZ()"
     }, {
      name: "skew()"
     }, {
      name: "skewX()"
     }, {
      name: "skewY()"
     }, {
      name: "translate()"
     }, {
      name: "translate3d()"
     }, {
      name: "translateX()"
     }, {
      name: "translateY()"
     }, {
      name: "translateZ()"
     } ],
     syntax: "none | <transform-list>"
    }, {
     name: "transform-origin",
     desc: "Establishes the origin of transformation for an element.",
     browsers: "E,C36,FF16,IE10,O12.1,S9",
     restriction: "position, length, percentage",
     syntax: "[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?"
    }, {
     name: "transform-style",
     desc: "Defines how nested elements are rendered in 3D space.",
     browsers: "E,C36,FF16,IE10,O23,S9",
     restriction: "enum",
     values: [ {
      name: "flat"
     }, {
      name: "preserve-3d",
      browsers: "E,C36,FF16,O23,S9"
     } ],
     syntax: "flat | preserve-3d"
    }, {
     name: "transition",
     desc: "Shorthand property combines four of the transition properties into a single property.",
     browsers: "E,FF16,IE10,O12.5",
     restriction: "time, property, timing-function, enum",
     values: [ {
      name: "all",
      desc: "Every property that is able to undergo a transition will do so."
     }, {
      name: "none",
      desc: "No property will transition."
     } ],
     syntax: "<single-transition>#"
    }, {
     name: "transition-delay",
     desc: "Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.",
     browsers: "E,FF16,IE10,O12.5",
     restriction: "time",
     syntax: "<time>#"
    }, {
     name: "transition-duration",
     desc: "Specifies how long the transition from the old value to the new value should take.",
     browsers: "E,FF16,IE10,O12.5",
     restriction: "time",
     syntax: "<time>#"
    }, {
     name: "transition-property",
     desc: "Specifies the name of the CSS property to which the transition is applied.",
     browsers: "E,FF16,IE10,O12.5",
     restriction: "property",
     values: [ {
      name: "all",
      desc: "Every property that is able to undergo a transition will do so."
     }, {
      name: "none",
      desc: "No property will transition."
     } ],
     syntax: "none | <single-transition-property>#"
    }, {
     name: "transition-timing-function",
     desc: "Describes how the intermediate values used during a transition will be calculated.",
     browsers: "E,FF16,IE10,O12.5",
     restriction: "timing-function",
     syntax: "<single-transition-timing-function>#"
    }, {
     name: "unicode-bidi",
     desc: "The level of embedding with respect to the bidirectional algorithm.",
     restriction: "enum",
     values: [ {
      name: "bidi-override"
     }, {
      name: "embed"
     }, {
      name: "isolate",
      desc: "The contents of the element are considered to be inside a separate, independent paragraph.",
      browsers: "C,FF10,O15,S5.1"
     }, {
      name: "isolate-override",
      browsers: "C,FF17,O15,S6.1"
     }, {
      name: "normal",
      desc: "The element does not open an additional level of embedding with respect to the bidirectional algorithm. For inline-level elements, implicit reordering works across element boundaries."
     }, {
      name: "plaintext",
      browsers: "C,FF10,O15,S6"
     } ],
     syntax: "normal | embed | isolate | bidi-override | isolate-override | plaintext"
    }, {
     name: "unicode-range",
     desc: "@font-face descriptor. Defines the set of Unicode codepoints that may be supported by the font face for which it is declared.",
     restriction: "unicode-range",
     values: [ {
      name: "U+26"
     }, {
      name: "U+20-24F, U+2B0-2FF, U+370-4FF, U+1E00-1EFF, U+2000-20CF, U+2100-23FF, U+2500-26FF, U+E000-F8FF, U+FB00–FB4F"
     }, {
      name: "U+20-17F, U+2B0-2FF, U+2000-206F, U+20A0-20CF, U+2100-21FF, U+2600-26FF"
     }, {
      name: "U+20-2FF, U+370-4FF, U+1E00-20CF, U+2100-23FF, U+2500-26FF, U+FB00-FB4F, U+FFF0-FFFD"
     }, {
      name: "U+20-4FF, U+530-58F, U+10D0-10FF, U+1E00-23FF, U+2440-245F, U+2500-26FF, U+FB00-FB4F, U+FE20-FE2F, U+FFF0-FFFD"
     }, {
      name: "U+00-7F"
     }, {
      name: "U+80-FF"
     }, {
      name: "U+100-17F"
     }, {
      name: "U+180-24F"
     }, {
      name: "U+1E00-1EFF"
     }, {
      name: "U+250-2AF"
     }, {
      name: "U+370-3FF"
     }, {
      name: "U+1F00-1FFF"
     }, {
      name: "U+400-4FF"
     }, {
      name: "U+500-52F"
     }, {
      name: "U+00-52F, U+1E00-1FFF, U+2200–22FF"
     }, {
      name: "U+530–58F"
     }, {
      name: "U+590–5FF"
     }, {
      name: "U+600–6FF"
     }, {
      name: "U+750–77F"
     }, {
      name: "U+8A0–8FF"
     }, {
      name: "U+700–74F"
     }, {
      name: "U+900–97F"
     }, {
      name: "U+980–9FF"
     }, {
      name: "U+A00–A7F"
     }, {
      name: "U+A80–AFF"
     }, {
      name: "U+B00–B7F"
     }, {
      name: "U+B80–BFF"
     }, {
      name: "U+C00–C7F"
     }, {
      name: "U+C80–CFF"
     }, {
      name: "U+D00–D7F"
     }, {
      name: "U+D80–DFF"
     }, {
      name: "U+118A0–118FF"
     }, {
      name: "U+E00–E7F"
     }, {
      name: "U+1A20–1AAF"
     }, {
      name: "U+AA80–AADF"
     }, {
      name: "U+E80–EFF"
     }, {
      name: "U+F00–FFF"
     }, {
      name: "U+1000–109F"
     }, {
      name: "U+10A0–10FF"
     }, {
      name: "U+1200–137F"
     }, {
      name: "U+1380–139F"
     }, {
      name: "U+2D80–2DDF"
     }, {
      name: "U+AB00–AB2F"
     }, {
      name: "U+1780–17FF"
     }, {
      name: "U+1800–18AF"
     }, {
      name: "U+1B80–1BBF"
     }, {
      name: "U+1CC0–1CCF"
     }, {
      name: "U+4E00–9FD5"
     }, {
      name: "U+3400–4DB5"
     }, {
      name: "U+2F00–2FDF"
     }, {
      name: "U+2E80–2EFF"
     }, {
      name: "U+1100–11FF"
     }, {
      name: "U+AC00–D7AF"
     }, {
      name: "U+3040–309F"
     }, {
      name: "U+30A0–30FF"
     }, {
      name: "U+A5, U+4E00-9FFF, U+30??, U+FF00-FF9F"
     }, {
      name: "U+A4D0–A4FF"
     }, {
      name: "U+A000–A48F"
     }, {
      name: "U+A490–A4CF"
     }, {
      name: "U+2000-206F"
     }, {
      name: "U+3000–303F"
     }, {
      name: "U+2070–209F"
     }, {
      name: "U+20A0–20CF"
     }, {
      name: "U+2100–214F"
     }, {
      name: "U+2150–218F"
     }, {
      name: "U+2190–21FF"
     }, {
      name: "U+2200–22FF"
     }, {
      name: "U+2300–23FF"
     }, {
      name: "U+E000-F8FF"
     }, {
      name: "U+FB00–FB4F"
     }, {
      name: "U+FB50–FDFF"
     }, {
      name: "U+1F600–1F64F"
     }, {
      name: "U+2600–26FF"
     }, {
      name: "U+1F300–1F5FF"
     }, {
      name: "U+1F900–1F9FF"
     }, {
      name: "U+1F680–1F6FF"
     } ],
     syntax: "<unicode-range>#"
    }, {
     name: "user-select",
     desc: "Controls the appearance of selection.",
     restriction: "enum",
     values: [ {
      name: "all",
      desc: "The content of the element must be selected atomically"
     }, {
      name: "auto"
     }, {
      name: "contain",
      desc: "UAs must not allow a selection which is started in this element to be extended outside of this element."
     }, {
      name: "none",
      desc: "The UA must not allow selections to be started in this element."
     }, {
      name: "text",
      desc: "The element imposes no constraint on the selection."
     } ],
     status: "n",
     syntax: "auto | text | none | contain | all"
    }, {
     name: "vertical-align",
     desc: "Affects the vertical positioning of the inline boxes generated by an inline-level element inside a line box.",
     restriction: "percentage, length",
     values: [ {
      name: "auto",
      desc: "Align the dominant baseline of the parent box with the equivalent, or heuristically reconstructed, baseline of the element inline box."
     }, {
      name: "baseline",
      desc: "Align the 'alphabetic' baseline of the element with the 'alphabetic' baseline of the parent element."
     }, {
      name: "bottom",
      desc: "Align the after edge of the extended inline box with the after-edge of the line box."
     }, {
      name: "middle",
      desc: "Align the 'middle' baseline of the inline element with the middle baseline of the parent."
     }, {
      name: "sub",
      desc: "Lower the baseline of the box to the proper position for subscripts of the parent's box. (This value has no effect on the font size of the element's text.)"
     }, {
      name: "super",
      desc: "Raise the baseline of the box to the proper position for superscripts of the parent's box. (This value has no effect on the font size of the element's text.)"
     }, {
      name: "text-bottom"
     }, {
      name: "text-top"
     }, {
      name: "top",
      desc: "Align the before edge of the extended inline box with the before-edge of the line box."
     }, {
      name: "-webkit-baseline-middle",
      browsers: "C,S1"
     } ],
     syntax: "baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>"
    }, {
     name: "visibility",
     desc: "Specifies whether the boxes generated by an element are rendered. Invisible boxes still affect layout (set the ‘display’ property to ‘none’ to suppress box generation altogether).",
     restriction: "enum",
     values: [ {
      name: "collapse",
      desc: "Table-specific. If used on elements other than rows, row groups, columns, or column groups, 'collapse' has the same meaning as 'hidden'."
     }, {
      name: "hidden",
      desc: "The generated box is invisible (fully transparent, nothing is drawn), but still affects layout."
     }, {
      name: "visible",
      desc: "The generated box is visible."
     } ],
     syntax: "visible | hidden | collapse"
    }, {
     name: "-webkit-animation",
     desc: "Shorthand property combines six of the animation properties into a single property.",
     browsers: "C,S5",
     restriction: "time, enum, timing-function, identifier, number",
     values: [ {
      name: "alternate"
     }, {
      name: "alternate-reverse"
     }, {
      name: "backwards"
     }, {
      name: "both",
      desc: "Both forwards and backwards fill modes are applied."
     }, {
      name: "forwards"
     }, {
      name: "infinite",
      desc: "Causes the animation to repeat forever."
     }, {
      name: "none",
      desc: "No animation is performed"
     }, {
      name: "normal",
      desc: "Normal playback."
     }, {
      name: "reverse",
      desc: "All iterations of the animation are played in the reverse direction from the way they were specified."
     } ]
    }, {
     name: "-webkit-animation-delay",
     desc: "Defines when the animation will start.",
     browsers: "C,S5",
     restriction: "time"
    }, {
     name: "-webkit-animation-direction",
     desc: "Defines whether or not the animation should play in reverse on alternate cycles.",
     browsers: "C,S5",
     restriction: "enum",
     values: [ {
      name: "alternate"
     }, {
      name: "alternate-reverse"
     }, {
      name: "normal",
      desc: "Normal playback."
     }, {
      name: "reverse",
      desc: "All iterations of the animation are played in the reverse direction from the way they were specified."
     } ]
    }, {
     name: "-webkit-animation-duration",
     desc: "Defines the length of time that an animation takes to complete one cycle.",
     browsers: "C,S5",
     restriction: "time"
    }, {
     name: "-webkit-animation-fill-mode",
     desc: "Defines what values are applied by the animation outside the time it is executing.",
     browsers: "C,S5",
     restriction: "enum",
     values: [ {
      name: "backwards"
     }, {
      name: "both",
      desc: "Both forwards and backwards fill modes are applied."
     }, {
      name: "forwards"
     }, {
      name: "none",
      desc: "There is no change to the property value between the time the animation is applied and the time the animation begins playing or after the animation completes."
     } ]
    }, {
     name: "-webkit-animation-iteration-count",
     desc: "Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.",
     browsers: "C,S5",
     restriction: "number, enum",
     values: [ {
      name: "infinite",
      desc: "Causes the animation to repeat forever."
     } ]
    }, {
     name: "-webkit-animation-name",
     desc: "Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.",
     browsers: "C,S5",
     restriction: "identifier, enum",
     values: [ {
      name: "none",
      desc: "No animation is performed"
     } ]
    }, {
     name: "-webkit-animation-play-state",
     desc: "Defines whether the animation is running or paused.",
     browsers: "C,S5",
     restriction: "enum",
     values: [ {
      name: "paused"
     }, {
      name: "running"
     } ]
    }, {
     name: "-webkit-animation-timing-function",
     desc: "Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.",
     browsers: "C,S5",
     restriction: "timing-function"
    }, {
     name: "-webkit-appearance",
     desc: "Changes the appearance of buttons and other controls to resemble native controls.",
     browsers: "C,S3",
     restriction: "enum",
     values: [ {
      name: "button"
     }, {
      name: "button-bevel"
     }, {
      name: "caps-lock-indicator"
     }, {
      name: "caret"
     }, {
      name: "checkbox"
     }, {
      name: "default-button"
     }, {
      name: "listbox"
     }, {
      name: "listitem"
     }, {
      name: "media-fullscreen-button"
     }, {
      name: "media-mute-button"
     }, {
      name: "media-play-button"
     }, {
      name: "media-seek-back-button"
     }, {
      name: "media-seek-forward-button"
     }, {
      name: "media-slider"
     }, {
      name: "media-sliderthumb"
     }, {
      name: "menulist"
     }, {
      name: "menulist-button"
     }, {
      name: "menulist-text"
     }, {
      name: "menulist-textfield"
     }, {
      name: "none"
     }, {
      name: "push-button"
     }, {
      name: "radio"
     }, {
      name: "scrollbarbutton-down"
     }, {
      name: "scrollbarbutton-left"
     }, {
      name: "scrollbarbutton-right"
     }, {
      name: "scrollbarbutton-up"
     }, {
      name: "scrollbargripper-horizontal"
     }, {
      name: "scrollbargripper-vertical"
     }, {
      name: "scrollbarthumb-horizontal"
     }, {
      name: "scrollbarthumb-vertical"
     }, {
      name: "scrollbartrack-horizontal"
     }, {
      name: "scrollbartrack-vertical"
     }, {
      name: "searchfield"
     }, {
      name: "searchfield-cancel-button"
     }, {
      name: "searchfield-decoration"
     }, {
      name: "searchfield-results-button"
     }, {
      name: "searchfield-results-decoration"
     }, {
      name: "slider-horizontal"
     }, {
      name: "sliderthumb-horizontal"
     }, {
      name: "sliderthumb-vertical"
     }, {
      name: "slider-vertical"
     }, {
      name: "square-button"
     }, {
      name: "textarea"
     }, {
      name: "textfield"
     } ]
    }, {
     name: "-webkit-backdrop-filter",
     desc: "Applies a filter effect where the first filter in the list takes the element's background image as the input image.",
     browsers: "S9",
     restriction: "enum, url",
     values: [ {
      name: "none",
      desc: "No filter effects are applied."
     }, {
      name: "blur()"
     }, {
      name: "brightness()"
     }, {
      name: "contrast()"
     }, {
      name: "drop-shadow()"
     }, {
      name: "grayscale()"
     }, {
      name: "hue-rotate()"
     }, {
      name: "invert()"
     }, {
      name: "opacity()"
     }, {
      name: "saturate()"
     }, {
      name: "sepia()"
     }, {
      name: "url()",
      desc: "A filter reference to a <filter> element."
     } ]
    }, {
     name: "-webkit-backface-visibility",
     desc: "Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.",
     browsers: "C,S5",
     restriction: "enum",
     values: [ {
      name: "hidden"
     }, {
      name: "visible"
     } ]
    }, {
     name: "-webkit-background-clip",
     desc: "Determines the background painting area.",
     browsers: "C,S3",
     restriction: "box"
    }, {
     name: "-webkit-background-composite",
     browsers: "C,S3",
     restriction: "enum",
     values: [ {
      name: "border"
     }, {
      name: "padding"
     } ]
    }, {
     name: "-webkit-background-origin",
     desc: "For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).",
     browsers: "C,S3",
     restriction: "box"
    }, {
     name: "-webkit-border-image",
     desc: "Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.",
     browsers: "C,S5",
     restriction: "length, percentage, number, url, enum",
     values: [ {
      name: "auto",
      desc: "If 'auto' is specified then the border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
     }, {
      name: "fill",
      desc: "Causes the middle part of the border-image to be preserved."
     }, {
      name: "none"
     }, {
      name: "repeat"
     }, {
      name: "round",
      desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
     }, {
      name: "space",
      desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
     }, {
      name: "stretch",
      desc: "The image is stretched to fill the area."
     }, {
      name: "url()"
     } ]
    }, {
     name: "-webkit-box-align",
     desc: "Specifies the alignment of nested elements within an outer flexible box element.",
     browsers: "C,S3",
     restriction: "enum",
     values: [ {
      name: "baseline",
      desc: "If this box orientation is inline-axis or horizontal, all children are placed with their baselines aligned, and extra space placed before or after as necessary. For block flows, the baseline of the first non-empty line box located within the element is used. For tables, the baseline of the first cell is used."
     }, {
      name: "center",
      desc: "Any extra space is divided evenly, with half placed above the child and the other half placed after the child."
     }, {
      name: "end",
      desc: "For normal direction boxes, the bottom edge of each child is placed along the bottom of the box. Extra space is placed above the element. For reverse direction boxes, the top edge of each child is placed along the top of the box. Extra space is placed below the element."
     }, {
      name: "start",
      desc: "For normal direction boxes, the top edge of each child is placed along the top of the box. Extra space is placed below the element. For reverse direction boxes, the bottom edge of each child is placed along the bottom of the box. Extra space is placed above the element."
     }, {
      name: "stretch",
      desc: "The height of each child is adjusted to that of the containing block."
     } ]
    }, {
     name: "-webkit-box-direction",
     desc: "In webkit applications, -webkit-box-direction specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).",
     browsers: "C,S3",
     restriction: "enum",
     values: [ {
      name: "normal",
      desc: "A box with a computed value of horizontal for box-orient displays its children from left to right. A box with a computed value of vertical displays its children from top to bottom."
     }, {
      name: "reverse",
      desc: "A box with a computed value of horizontal for box-orient displays its children from right to left. A box with a computed value of vertical displays its children from bottom to top."
     } ]
    }, {
     name: "-webkit-box-flex",
     desc: "Specifies an element's flexibility.",
     browsers: "C,S3",
     restriction: "number"
    }, {
     name: "-webkit-box-flex-group",
     desc: "Flexible elements can be assigned to flex groups using the 'box-flex-group' property.",
     browsers: "C,S3",
     restriction: "integer"
    }, {
     name: "-webkit-box-ordinal-group",
     desc: "Indicates the ordinal group the element belongs to. Elements with a lower ordinal group are displayed before those with a higher ordinal group.",
     browsers: "C,S3",
     restriction: "integer"
    }, {
     name: "-webkit-box-orient",
     desc: "In webkit applications, -webkit-box-orient specifies whether a box lays out its contents horizontally or vertically.",
     browsers: "C,S3",
     restriction: "enum",
     values: [ {
      name: "block-axis"
     }, {
      name: "horizontal",
      desc: "The box displays its children from left to right in a horizontal line."
     }, {
      name: "inline-axis"
     }, {
      name: "vertical",
      desc: "The box displays its children from stacked from top to bottom vertically."
     } ]
    }, {
     name: "-webkit-box-pack",
     desc: "Specifies alignment of child elements within the current element in the direction of orientation.",
     browsers: "C,S3",
     restriction: "enum",
     values: [ {
      name: "center",
      desc: "The extra space is divided evenly, with half placed before the first child and the other half placed after the last child."
     }, {
      name: "end",
      desc: "For normal direction boxes, the right edge of the last child is placed at the right side, with all extra space placed before the first child. For reverse direction boxes, the left edge of the first child is placed at the left side, with all extra space placed after the last child."
     }, {
      name: "justify",
      desc: "The space is divided evenly in-between each child, with none of the extra space placed before the first child or after the last child. If there is only one child, treat the pack value as if it were start."
     }, {
      name: "start",
      desc: "For normal direction boxes, the left edge of the first child is placed at the left side, with all extra space placed after the last child. For reverse direction boxes, the right edge of the last child is placed at the right side, with all extra space placed before the first child."
     } ]
    }, {
     name: "-webkit-box-reflect",
     desc: "Defines a reflection of a border box.",
     browsers: "C,S4",
     values: [ {
      name: "above",
      desc: "The reflection appears above the border box."
     }, {
      name: "below",
      desc: "The reflection appears below the border box."
     }, {
      name: "left",
      desc: "The reflection appears to the left of the border box."
     }, {
      name: "right",
      desc: "The reflection appears to the right of the border box."
     } ],
     status: "n",
     syntax: "[ above | below | right | left ]? <length>? <image>?"
    }, {
     name: "-webkit-box-sizing",
     desc: "Box Model addition in CSS3.",
     browsers: "C,S3",
     restriction: "enum",
     values: [ {
      name: "border-box"
     }, {
      name: "content-box"
     } ]
    }, {
     name: "-webkit-break-after",
     desc: "Describes the page/column break behavior before the generated box.",
     browsers: "S7",
     restriction: "enum",
     values: [ {
      name: "always",
      desc: "Always force a page break before/after the generated box."
     }, {
      name: "auto",
      desc: "Neither force nor forbid a page/column break before/after the generated box."
     }, {
      name: "avoid",
      desc: "Avoid a page/column break before/after the generated box."
     }, {
      name: "avoid-column",
      desc: "Avoid a column break before/after the generated box."
     }, {
      name: "avoid-page",
      desc: "Avoid a page break before/after the generated box."
     }, {
      name: "avoid-region"
     }, {
      name: "column",
      desc: "Always force a column break before/after the generated box."
     }, {
      name: "left",
      desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
     }, {
      name: "page",
      desc: "Always force a page break before/after the generated box."
     }, {
      name: "region"
     }, {
      name: "right",
      desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
     } ]
    }, {
     name: "-webkit-break-before",
     desc: "Describes the page/column break behavior before the generated box.",
     browsers: "S7",
     restriction: "enum",
     values: [ {
      name: "always",
      desc: "Always force a page break before/after the generated box."
     }, {
      name: "auto",
      desc: "Neither force nor forbid a page/column break before/after the generated box."
     }, {
      name: "avoid",
      desc: "Avoid a page/column break before/after the generated box."
     }, {
      name: "avoid-column",
      desc: "Avoid a column break before/after the generated box."
     }, {
      name: "avoid-page",
      desc: "Avoid a page break before/after the generated box."
     }, {
      name: "avoid-region"
     }, {
      name: "column",
      desc: "Always force a column break before/after the generated box."
     }, {
      name: "left",
      desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
     }, {
      name: "page",
      desc: "Always force a page break before/after the generated box."
     }, {
      name: "region"
     }, {
      name: "right",
      desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
     } ]
    }, {
     name: "-webkit-break-inside",
     desc: "Describes the page/column break behavior inside the generated box.",
     browsers: "S7",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Neither force nor forbid a page/column break inside the generated box."
     }, {
      name: "avoid",
      desc: "Avoid a page/column break inside the generated box."
     }, {
      name: "avoid-column",
      desc: "Avoid a column break inside the generated box."
     }, {
      name: "avoid-page",
      desc: "Avoid a page break inside the generated box."
     }, {
      name: "avoid-region"
     } ]
    }, {
     name: "-webkit-column-break-after",
     desc: "Describes the page/column break behavior before the generated box.",
     browsers: "C,S3",
     restriction: "enum",
     values: [ {
      name: "always",
      desc: "Always force a page break before/after the generated box."
     }, {
      name: "auto",
      desc: "Neither force nor forbid a page/column break before/after the generated box."
     }, {
      name: "avoid",
      desc: "Avoid a page/column break before/after the generated box."
     }, {
      name: "avoid-column",
      desc: "Avoid a column break before/after the generated box."
     }, {
      name: "avoid-page",
      desc: "Avoid a page break before/after the generated box."
     }, {
      name: "avoid-region"
     }, {
      name: "column",
      desc: "Always force a column break before/after the generated box."
     }, {
      name: "left",
      desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
     }, {
      name: "page",
      desc: "Always force a page break before/after the generated box."
     }, {
      name: "region"
     }, {
      name: "right",
      desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
     } ]
    }, {
     name: "-webkit-column-break-before",
     desc: "Describes the page/column break behavior before the generated box.",
     browsers: "C,S3",
     restriction: "enum",
     values: [ {
      name: "always",
      desc: "Always force a page break before/after the generated box."
     }, {
      name: "auto",
      desc: "Neither force nor forbid a page/column break before/after the generated box."
     }, {
      name: "avoid",
      desc: "Avoid a page/column break before/after the generated box."
     }, {
      name: "avoid-column",
      desc: "Avoid a column break before/after the generated box."
     }, {
      name: "avoid-page",
      desc: "Avoid a page break before/after the generated box."
     }, {
      name: "avoid-region"
     }, {
      name: "column",
      desc: "Always force a column break before/after the generated box."
     }, {
      name: "left",
      desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
     }, {
      name: "page",
      desc: "Always force a page break before/after the generated box."
     }, {
      name: "region"
     }, {
      name: "right",
      desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
     } ]
    }, {
     name: "-webkit-column-break-inside",
     desc: "Describes the page/column break behavior inside the generated box.",
     browsers: "C,S3",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Neither force nor forbid a page/column break inside the generated box."
     }, {
      name: "avoid",
      desc: "Avoid a page/column break inside the generated box."
     }, {
      name: "avoid-column",
      desc: "Avoid a column break inside the generated box."
     }, {
      name: "avoid-page",
      desc: "Avoid a page break inside the generated box."
     }, {
      name: "avoid-region"
     } ]
    }, {
     name: "-webkit-column-count",
     desc: "Describes the optimal number of columns into which the content of the element will be flowed.",
     browsers: "C,S3",
     restriction: "integer",
     values: [ {
      name: "auto",
      desc: "Determines the number of columns by the 'column-width' property and the element width."
     } ]
    }, {
     name: "-webkit-column-gap",
     desc: "Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.",
     browsers: "C,S3",
     restriction: "length",
     values: [ {
      name: "normal",
      desc: "User agent specific and typically equivalent to 1em."
     } ]
    }, {
     name: "-webkit-column-rule",
     desc: "This property is a shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.",
     browsers: "C,S3",
     restriction: "length, line-width, line-style, color"
    }, {
     name: "-webkit-column-rule-color",
     desc: "Sets the color of the column rule",
     browsers: "C,S3",
     restriction: "color"
    }, {
     name: "-webkit-column-rule-style",
     desc: "Sets the style of the rule between columns of an element.",
     browsers: "C,S3",
     restriction: "line-style"
    }, {
     name: "-webkit-column-rule-width",
     desc: "Sets the width of the rule between columns. Negative values are not allowed.",
     browsers: "C,S3",
     restriction: "length, line-width"
    }, {
     name: "-webkit-columns",
     desc: "A shorthand property which sets both 'column-width' and 'column-count'.",
     browsers: "C,S3",
     restriction: "length, integer",
     values: [ {
      name: "auto",
      desc: "The width depends on the values of other properties."
     } ]
    }, {
     name: "-webkit-column-span",
     desc: "Describes the page/column break behavior after the generated box.",
     browsers: "C,S3",
     restriction: "enum",
     values: [ {
      name: "all",
      desc: "The element spans across all columns. Content in the normal flow that appears before the element is automatically balanced across all columns before the element appear."
     }, {
      name: "none",
      desc: "The element does not span multiple columns."
     } ]
    }, {
     name: "-webkit-column-width",
     desc: "This property describes the width of columns in multicol elements.",
     browsers: "C,S3",
     restriction: "length",
     values: [ {
      name: "auto",
      desc: "The width depends on the values of other properties."
     } ]
    }, {
     name: "-webkit-filter",
     desc: "Processes an element’s rendering before it is displayed in the document, by applying one or more filter effects.",
     browsers: "C18,O15,S6",
     restriction: "enum, url",
     values: [ {
      name: "none",
      desc: "No filter effects are applied."
     }, {
      name: "blur()"
     }, {
      name: "brightness()"
     }, {
      name: "contrast()"
     }, {
      name: "drop-shadow()"
     }, {
      name: "grayscale()"
     }, {
      name: "hue-rotate()"
     }, {
      name: "invert()"
     }, {
      name: "opacity()"
     }, {
      name: "saturate()"
     }, {
      name: "sepia()"
     }, {
      name: "url()",
      desc: "A filter reference to a <filter> element."
     } ]
    }, {
     name: "-webkit-flow-from",
     desc: "Makes a block container a region and associates it with a named flow.",
     browsers: "S6.1",
     restriction: "identifier",
     values: [ {
      name: "none",
      desc: "The block container is not a CSS Region."
     } ]
    }, {
     name: "-webkit-flow-into",
     desc: "Places an element or its contents into a named flow.",
     browsers: "S6.1",
     restriction: "identifier",
     values: [ {
      name: "none",
      desc: "The element is not moved to a named flow and normal CSS processing takes place."
     } ]
    }, {
     name: "-webkit-font-feature-settings",
     desc: "This property provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.",
     browsers: "C16",
     restriction: "string, integer",
     values: [ {
      name: '"c2cs"'
     }, {
      name: '"dlig"'
     }, {
      name: '"kern"'
     }, {
      name: '"liga"'
     }, {
      name: '"lnum"'
     }, {
      name: '"onum"'
     }, {
      name: '"smcp"'
     }, {
      name: '"swsh"'
     }, {
      name: '"tnum"'
     }, {
      name: "normal",
      desc: "No change in glyph substitution or positioning occurs."
     }, {
      name: "off"
     }, {
      name: "on"
     } ]
    }, {
     name: "-webkit-hyphens",
     desc: "Controls whether hyphenation is allowed to create more break opportunities within a line of text.",
     browsers: "S5.1",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Conditional hyphenation characters inside a word, if present, take priority over automatic resources when determining hyphenation points within the word."
     }, {
      name: "manual"
     }, {
      name: "none",
      desc: "Words are not broken at line breaks, even if characters inside the word suggest line break points."
     } ]
    }, {
     name: "-webkit-line-break",
     desc: "Specifies line-breaking rules for CJK (Chinese, Japanese, and Korean) text.",
     browsers: "C,S3",
     values: [ {
      name: "after-white-space"
     }, {
      name: "normal"
     } ]
    }, {
     name: "-webkit-margin-bottom-collapse",
     browsers: "C,S3",
     restriction: "enum",
     values: [ {
      name: "collapse"
     }, {
      name: "discard"
     }, {
      name: "separate"
     } ]
    }, {
     name: "-webkit-margin-collapse",
     browsers: "C,S3",
     restriction: "enum",
     values: [ {
      name: "collapse"
     }, {
      name: "discard"
     }, {
      name: "separate"
     } ]
    }, {
     name: "-webkit-margin-start",
     browsers: "C,S3",
     restriction: "percentage, length",
     values: [ {
      name: "auto"
     } ]
    }, {
     name: "-webkit-margin-top-collapse",
     browsers: "C,S3",
     restriction: "enum",
     values: [ {
      name: "collapse"
     }, {
      name: "discard"
     }, {
      name: "separate"
     } ]
    }, {
     name: "-webkit-mask-clip",
     desc: "Determines the mask painting area, which determines the area that is affected by the mask.",
     browsers: "C,O15,S4",
     restriction: "box",
     status: "n",
     syntax: "[ border | border-box | padding | padding-box | content | content-box | text ]#"
    }, {
     name: "-webkit-mask-image",
     desc: "Sets the mask layer image of an element.",
     browsers: "C,O15,S4",
     restriction: "url, image, enum",
     values: [ {
      name: "none",
      desc: "Counts as a transparent black image layer."
     }, {
      name: "url()",
      desc: "Reference to a <mask element or to a CSS image."
     } ],
     status: "n",
     syntax: "<mask-image> [, <mask-image> ]*"
    }, {
     name: "-webkit-mask-origin",
     desc: "Specifies the mask positioning area.",
     browsers: "C,O15,S4",
     restriction: "box",
     status: "n",
     syntax: "[ padding | border | content ] [, [ border | padding | content ] ]*"
    }, {
     name: "-webkit-mask-repeat",
     desc: "Specifies how mask layer images are tiled after they have been sized and positioned.",
     browsers: "C,O15,S4",
     restriction: "repeat",
     status: "n",
     syntax: "<repeat-style> [, <repeat-style> ]*"
    }, {
     name: "-webkit-mask-size",
     desc: "Specifies the size of the mask layer images.",
     browsers: "C,O15,S4",
     restriction: "length, percentage, enum",
     values: [ {
      name: "auto",
      desc: "Resolved by using the image’s intrinsic ratio and the size of the other dimension, or failing that, using the image’s intrinsic size, or failing that, treating it as 100%."
     }, {
      name: "contain",
      desc: "Scale the image, while preserving its intrinsic aspect ratio (if any), to the largest size such that both its width and its height can fit inside the background positioning area."
     }, {
      name: "cover",
      desc: "Scale the image, while preserving its intrinsic aspect ratio (if any), to the smallest size such that both its width and its height can completely cover the background positioning area."
     } ]
    }, {
     name: "-webkit-nbsp-mode",
     desc: "Defines the behavior of nonbreaking spaces within text.",
     browsers: "C,S3",
     values: [ {
      name: "normal"
     }, {
      name: "space"
     } ]
    }, {
     name: "-webkit-overflow-scrolling",
     desc: "Specifies whether to use native-style scrolling in an overflow:scroll element.",
     browsers: "C,S5",
     values: [ {
      name: "auto"
     }, {
      name: "touch"
     } ],
     status: "n",
     syntax: "auto | touch"
    }, {
     name: "-webkit-padding-start",
     browsers: "C,S3",
     restriction: "percentage, length"
    }, {
     name: "-webkit-perspective",
     desc: "Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.",
     browsers: "C,S4",
     restriction: "length",
     values: [ {
      name: "none",
      desc: "No perspective transform is applied."
     } ]
    }, {
     name: "-webkit-perspective-origin",
     desc: "Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.",
     browsers: "C,S4",
     restriction: "position, percentage, length"
    }, {
     name: "-webkit-region-fragment",
     desc: "The 'region-fragment' property controls the behavior of the last region associated with a named flow.",
     browsers: "S7",
     restriction: "enum",
     values: [ {
      name: "auto",
      desc: "Content flows as it would in a regular content box."
     }, {
      name: "break"
     } ]
    }, {
     name: "-webkit-tap-highlight-color",
     browsers: "E,C,S3.1",
     restriction: "color",
     status: "n",
     syntax: "<color>"
    }, {
     name: "-webkit-text-fill-color",
     browsers: "E,C,S3",
     restriction: "color",
     status: "n",
     syntax: "<color>"
    }, {
     name: "-webkit-text-size-adjust",
     desc: "Specifies a size adjustment for displaying text content in mobile browsers.",
     browsers: "E,C,S3",
     restriction: "percentage",
     values: [ {
      name: "auto",
      desc: "Renderers must use the default size adjustment when displaying on a small device."
     }, {
      name: "none",
      desc: "Renderers must not do size adjustment when displaying on a small device."
     } ]
    }, {
     name: "-webkit-text-stroke",
     browsers: "S3",
     restriction: "length, line-width, color, percentage",
     status: "n",
     syntax: "<length> || <color>"
    }, {
     name: "-webkit-text-stroke-color",
     browsers: "S3",
     restriction: "color",
     status: "n",
     syntax: "<color>"
    }, {
     name: "-webkit-text-stroke-width",
     browsers: "S3",
     restriction: "length, line-width, percentage",
     status: "n",
     syntax: "<length>"
    }, {
     name: "-webkit-touch-callout",
     browsers: "S3",
     restriction: "enum",
     values: [ {
      name: "none"
     } ],
     status: "n",
     syntax: "default | none"
    }, {
     name: "-webkit-transform",
     desc: "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
     browsers: "C,O12,S3.1",
     restriction: "enum",
     values: [ {
      name: "matrix()"
     }, {
      name: "matrix3d()"
     }, {
      name: "none"
     }, {
      name: "perspective()"
     }, {
      name: "rotate()"
     }, {
      name: "rotate3d()"
     }, {
      name: "rotateX('angle')"
     }, {
      name: "rotateY('angle')"
     }, {
      name: "rotateZ('angle')"
     }, {
      name: "scale()"
     }, {
      name: "scale3d()"
     }, {
      name: "scaleX()"
     }, {
      name: "scaleY()"
     }, {
      name: "scaleZ()"
     }, {
      name: "skew()"
     }, {
      name: "skewX()"
     }, {
      name: "skewY()"
     }, {
      name: "translate()"
     }, {
      name: "translate3d()"
     }, {
      name: "translateX()"
     }, {
      name: "translateY()"
     }, {
      name: "translateZ()"
     } ]
    }, {
     name: "-webkit-transform-origin",
     desc: "Establishes the origin of transformation for an element.",
     browsers: "C,O15,S3.1",
     restriction: "position, length, percentage"
    }, {
     name: "-webkit-transform-origin-x",
     desc: "The x coordinate of the origin for transforms applied to an element with respect to its border box.",
     browsers: "C,S3.1",
     restriction: "length, percentage"
    }, {
     name: "-webkit-transform-origin-y",
     desc: "The y coordinate of the origin for transforms applied to an element with respect to its border box.",
     browsers: "C,S3.1",
     restriction: "length, percentage"
    }, {
     name: "-webkit-transform-origin-z",
     desc: "The z coordinate of the origin for transforms applied to an element with respect to its border box.",
     browsers: "C,S4",
     restriction: "length, percentage"
    }, {
     name: "-webkit-transform-style",
     desc: "Defines how nested elements are rendered in 3D space.",
     browsers: "C,S4",
     restriction: "enum",
     values: [ {
      name: "flat"
     } ]
    }, {
     name: "-webkit-transition",
     desc: "Shorthand property combines four of the transition properties into a single property.",
     browsers: "C,O12,S5",
     restriction: "time, property, timing-function, enum",
     values: [ {
      name: "all",
      desc: "Every property that is able to undergo a transition will do so."
     }, {
      name: "none",
      desc: "No property will transition."
     } ]
    }, {
     name: "-webkit-transition-delay",
     desc: "Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.",
     browsers: "C,O12,S5",
     restriction: "time"
    }, {
     name: "-webkit-transition-duration",
     desc: "Specifies how long the transition from the old value to the new value should take.",
     browsers: "C,O12,S5",
     restriction: "time"
    }, {
     name: "-webkit-transition-property",
     desc: "Specifies the name of the CSS property to which the transition is applied.",
     browsers: "C,O12,S5",
     restriction: "property",
     values: [ {
      name: "all",
      desc: "Every property that is able to undergo a transition will do so."
     }, {
      name: "none",
      desc: "No property will transition."
     } ]
    }, {
     name: "-webkit-transition-timing-function",
     desc: "Describes how the intermediate values used during a transition will be calculated.",
     browsers: "C,O12,S5",
     restriction: "timing-function"
    }, {
     name: "-webkit-user-drag",
     browsers: "S3",
     restriction: "enum",
     values: [ {
      name: "auto"
     }, {
      name: "element"
     }, {
      name: "none"
     } ]
    }, {
     name: "-webkit-user-modify",
     desc: "Determines whether a user can edit the content of an element.",
     browsers: "C,S3",
     restriction: "enum",
     values: [ {
      name: "read-only"
     }, {
      name: "read-write"
     }, {
      name: "read-write-plaintext-only"
     } ],
     status: "n",
     syntax: "read-only | read-write | read-write-plaintext-only"
    }, {
     name: "-webkit-user-select",
     desc: "Controls the appearance of selection.",
     browsers: "C,S3",
     restriction: "enum",
     values: [ {
      name: "auto"
     }, {
      name: "none"
     }, {
      name: "text"
     } ]
    }, {
     name: "white-space",
     desc: "Shorthand property for the 'white-space-collapsing' and 'text-wrap' properties.",
     restriction: "enum",
     values: [ {
      name: "normal",
      desc: "Sets 'white-space-collapsing' to 'collapse' and 'text-wrap' to 'normal'."
     }, {
      name: "nowrap",
      desc: "Sets 'white-space-collapsing' to 'collapse' and 'text-wrap' to 'none'."
     }, {
      name: "pre"
     }, {
      name: "pre-line"
     }, {
      name: "pre-wrap"
     } ],
     syntax: "normal | pre | nowrap | pre-wrap | pre-line"
    }, {
     name: "widows",
     desc: "Specifies the minimum number of line boxes of a block container that must be left in a fragment after a break.",
     browsers: "C,IE8,O9.5,S1",
     restriction: "integer",
     syntax: "<integer>"
    }, {
     name: "width",
     desc: "Specifies the width of the content area, padding area or border area (depending on 'box-sizing') of certain boxes.",
     restriction: "length, percentage",
     values: [ {
      name: "auto",
      desc: "The width depends on the values of other properties."
     }, {
      name: "fit-content",
      browsers: "C46,O33"
     }, {
      name: "max-content",
      desc: "Use the max-content inline size or max-content block size, as appropriate to the writing mode.",
      browsers: "C46,O33"
     }, {
      name: "min-content",
      desc: "Use the min-content inline size or min-content block size, as appropriate to the writing mode.",
      browsers: "C46,O33"
     } ],
     syntax: "<viewport-length>{1,2}"
    }, {
     name: "will-change",
     desc: "Provides a rendering hint to the user agent, stating what kinds of changes the author expects to perform on the element.",
     browsers: "C36,FF36,O24",
     restriction: "enum, identifier",
     values: [ {
      name: "auto",
      desc: "Expresses no particular intent."
     }, {
      name: "contents",
      desc: "Indicates that the author expects to animate or change something about the element’s contents in the near future."
     }, {
      name: "scroll-position"
     } ],
     syntax: "auto | <animateable-feature>#"
    }, {
     name: "word-break",
     desc: "Specifies line break opportunities for non-CJK scripts.",
     browsers: "E,C,FF15,IE5,S3",
     restriction: "enum",
     values: [ {
      name: "break-all"
     }, {
      name: "keep-all",
      desc: "Block characters can no longer create implied break points."
     }, {
      name: "normal",
      desc: "Breaks non-CJK scripts according to their own rules."
     } ],
     syntax: "normal | break-all | keep-all | break-word"
    }, {
     name: "word-spacing",
     desc: "Specifies additional spacing between “words”.",
     restriction: "length, percentage",
     values: [ {
      name: "normal",
      desc: "No additional spacing is applied. Computes to zero."
     } ],
     syntax: "normal | <length-percentage>"
    }, {
     name: "word-wrap",
     desc: "Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit.",
     restriction: "enum",
     values: [ {
      name: "break-word",
      desc: "An otherwise unbreakable sequence of characters may be broken at an arbitrary point if there are no otherwise-acceptable break points in the line."
     }, {
      name: "normal",
      desc: "Lines may break only at allowed break points."
     } ],
     syntax: "normal | break-word"
    }, {
     name: "writing-mode",
     desc: "This is a shorthand property for both 'direction' and 'block-progression'.",
     browsers: "E,FF41",
     restriction: "enum",
     values: [ {
      name: "horizontal-tb"
     }, {
      name: "sideways-lr",
      browsers: "FF43"
     }, {
      name: "sideways-rl",
      browsers: "FF43"
     }, {
      name: "vertical-lr"
     }, {
      name: "vertical-rl"
     } ],
     syntax: "horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr"
    }, {
     name: "z-index",
     desc: "For a positioned box, the 'z-index' property specifies the stack level of the box in the current stacking context and whether the box establishes a local stacking context.",
     restriction: "integer",
     values: [ {
      name: "auto",
      desc: "The stack level of the generated box in the current stacking context is 0. The box does not establish a new stacking context unless it is the root element."
     } ],
     syntax: "auto | <integer>"
    }, {
     name: "zoom",
     desc: "Non-standard. Specifies the magnification scale of the object. See 'transform: scale()' for a standards-based alternative.",
     browsers: "E,C,IE6,O15,S4",
     restriction: "enum, integer, number, percentage",
     values: [ {
      name: "normal"
     } ],
     syntax: "auto | <number> | <percentage>"
    }, {
     name: "-ms-ime-align",
     desc: "Aligns the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active.",
     restriction: "none",
     status: "n",
     syntax: "auto | after"
    }, {
     name: "-moz-binding",
     desc: "The -moz-binding CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element.",
     restriction: "none",
     status: "n",
     syntax: "<url> | none"
    }, {
     name: "-moz-context-properties",
     desc: "If you reference an SVG image in a webpage (such as with the <img> element or as a background image), the SVG image can coordinate with the embedding element (its context) to have the image adopt property values set on the embedding element. To do this the embedding element needs to list the properties that are to be made available to the image by listing them as values of the -moz-context-properties property, and the image needs to opt in to using those properties by using values such as the context-fill value.\n\nThis feature is available since Firefox 55, but is only currently supported with SVG images loaded via chrome:// or resource:// URLs. To experiment with the feature in SVG on the Web it is necessary to set the svg.context-properties.content.enabled pref to true.",
     restriction: "none",
     status: "n",
     syntax: "none | [ fill | fill-opacity | stroke | stroke-opacity ]#"
    }, {
     name: "-moz-float-edge",
     desc: "The non-standard -moz-float-edge CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.",
     restriction: "none",
     status: "n",
     syntax: "border-box | content-box | margin-box | padding-box"
    }, {
     name: "-moz-force-broken-image-icon",
     desc: "The -moz-force-broken-image-icon extended CSS property can be used to force the broken image icon to be shown even when a broken image has an alt attribute.",
     restriction: "none",
     status: "n",
     syntax: "<integer>"
    }, {
     name: "-moz-image-region",
     desc: "For certain XUL elements and pseudo-elements that use an image from the list-style-image property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.",
     restriction: "none",
     status: "n",
     syntax: "<shape> | auto"
    }, {
     name: "-moz-orient",
     desc: "The -moz-orient CSS property specifies the orientation of the element to which it's applied.",
     restriction: "none",
     status: "n",
     syntax: "inline | block | horizontal | vertical"
    }, {
     name: "-moz-outline-radius",
     desc: "In Mozilla applications like Firefox, the -moz-outline-radius CSS property can be used to give an element's outline rounded corners.",
     restriction: "none",
     status: "n",
     syntax: "<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?"
    }, {
     name: "-moz-outline-radius-bottomleft",
     desc: "In Mozilla applications, the -moz-outline-radius-bottomleft CSS property can be used to round the bottom-left corner of an element's outline.",
     restriction: "none",
     status: "n",
     syntax: "<outline-radius>"
    }, {
     name: "-moz-outline-radius-bottomright",
     desc: "In Mozilla applications, the -moz-outline-radius-bottomright CSS property can be used to round the bottom-right corner of an element's outline.",
     restriction: "none",
     status: "n",
     syntax: "<outline-radius>"
    }, {
     name: "-moz-outline-radius-topleft",
     desc: "In Mozilla applications, the -moz-outline-radius-topleft CSS property can be used to round the top-left corner of an element's outline.",
     restriction: "none",
     status: "n",
     syntax: "<outline-radius>"
    }, {
     name: "-moz-outline-radius-topright",
     desc: "In Mozilla applications, the -moz-outline-radius-topright CSS property can be used to round the top-right corner of an element's outline.",
     restriction: "none",
     status: "n",
     syntax: "<outline-radius>"
    }, {
     name: "-moz-stack-sizing",
     desc: "-moz-stack-sizing is an extended CSS property. Normally, a stack will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.",
     restriction: "none",
     status: "n",
     syntax: "ignore | stretch-to-fit"
    }, {
     name: "-moz-text-blink",
     desc: "The -moz-text-blink non-standard Mozilla CSS extension specifies the blink mode.",
     restriction: "none",
     status: "n",
     syntax: "none | blink"
    }, {
     name: "-moz-user-input",
     desc: "In Mozilla applications, -moz-user-input determines if an element will accept user input.",
     restriction: "none",
     status: "n",
     syntax: "auto | none | enabled | disabled"
    }, {
     name: "-moz-user-modify",
     desc: "The -moz-user-modify property has no effect. It was originally planned to determine whether or not the content of an element can be edited by a user.",
     restriction: "none",
     status: "n",
     syntax: "read-only | read-write | write-only"
    }, {
     name: "-moz-window-dragging",
     desc: "The -moz-window-dragging CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.",
     restriction: "none",
     status: "n",
     syntax: "drag | no-drag"
    }, {
     name: "-moz-window-shadow",
     desc: "The -moz-window-shadow CSS property specifies whether a window will have a shadow. It only works on Mac OS X.",
     restriction: "none",
     status: "n",
     syntax: "default | menu | tooltip | sheet | none"
    }, {
     name: "-webkit-border-before",
     desc: "The -webkit-border-before CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.",
     restriction: "none",
     status: "n",
     syntax: "<'border-width'> || <'border-style'> || <'color'>"
    }, {
     name: "-webkit-border-before-color",
     desc: "The -webkit-border-before-color CSS property sets the color of the individual logical block start border in a single place in the style sheet.",
     restriction: "none",
     status: "n",
     syntax: "<'color'>"
    }, {
     name: "-webkit-border-before-style",
     desc: "The -webkit-border-before-style CSS property sets the style of the individual logical block start border in a single place in the style sheet.",
     restriction: "none",
     status: "n",
     syntax: "<'border-style'>"
    }, {
     name: "-webkit-border-before-width",
     desc: "The -webkit-border-before-width CSS property sets the width of the individual logical block start border in a single place in the style sheet.",
     restriction: "none",
     status: "n",
     syntax: "<'border-width'>"
    }, {
     name: "-webkit-mask",
     desc: "The mask CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points.",
     restriction: "none",
     status: "n",
     syntax: "<mask-image> [ <'-webkit-mask-repeat'> || <'-webkit-mask-attachment'> || <'-webkit-mask-position'> || <'-webkit-mask-origin'> || <'-webkit-mask-clip'> ]*"
    }, {
     name: "-webkit-mask-attachment",
     desc: "If a -webkit-mask-image is specified, -webkit-mask-attachment determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.",
     restriction: "none",
     status: "n",
     syntax: "<attachment> [, <attachment> ]*"
    }, {
     name: "-webkit-mask-composite",
     desc: "The -webkit-mask-composite property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the -webkit-mask-image property.",
     restriction: "none",
     status: "n",
     syntax: "<composite-style> [, <composite-style> ]*"
    }, {
     name: "-webkit-mask-position",
     desc: "The mask-position CSS property sets the initial position, relative to the mask position layer defined by mask-origin, for each defined mask image.",
     restriction: "none",
     status: "n",
     syntax: "<mask-position>#"
    }, {
     name: "-webkit-mask-position-x",
     desc: "The -webkit-mask-position-x CSS property sets the initial horizontal position of a mask image.",
     restriction: "none",
     status: "n",
     syntax: "[ <length-percentage> | left | center | right ]#"
    }, {
     name: "-webkit-mask-position-y",
     desc: "The -webkit-mask-position-y CSS property sets the initial vertical position of a mask image.",
     restriction: "none",
     status: "n",
     syntax: "[ <length-percentage> | top | center | bottom ]#"
    }, {
     name: "-webkit-mask-repeat-x",
     desc: "The -webkit-mask-repeat-x property specifies whether and how a mask image is repeated (tiled) horizontally.",
     restriction: "none",
     status: "n",
     syntax: "repeat | no-repeat | space | round"
    }, {
     name: "-webkit-mask-repeat-y",
     desc: "The -webkit-mask-repeat-y property specifies whether and how a mask image is repeated (tiled) vertically.",
     restriction: "none",
     status: "n",
     syntax: "repeat | no-repeat | space | round"
    }, {
     name: "appearance",
     desc: "Changes the appearance of buttons and other controls to resemble native controls.",
     restriction: "none",
     status: "e",
     syntax: "auto | none"
    }, {
     name: "azimuth",
     desc: "In combination with elevation, the azimuth CSS property enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage.",
     restriction: "none",
     status: "o",
     syntax: "<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards"
    }, {
     name: "backdrop-filter",
     desc: "The backdrop-filter CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything behind the element, to see the effect you must make the element or its background at least partially transparent.",
     restriction: "none",
     status: "e",
     syntax: "none | <filter-function-list>"
    }, {
     name: "block-overflow",
     desc: "",
     restriction: "none",
     status: "e",
     syntax: "clip | ellipsis | <string>"
    }, {
     name: "box-align",
     desc: "The box-align CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.",
     restriction: "none",
     status: "n",
     syntax: "start | center | end | baseline | stretch"
    }, {
     name: "box-direction",
     desc: "The box-direction CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).",
     restriction: "none",
     status: "n",
     syntax: "normal | reverse | inherit"
    }, {
     name: "box-flex",
     desc: "The -moz-box-flex and -webkit-box-flex CSS properties specify how a -moz-box or -webkit-box grows to fill the box that contains it, in the direction of the containing box's layout.",
     restriction: "none",
     status: "n",
     syntax: "<number>"
    }, {
     name: "box-flex-group",
     desc: "The box-flex-group CSS property assigns the flexbox's child elements to a flex group.",
     restriction: "none",
     status: "n",
     syntax: "<integer>"
    }, {
     name: "box-lines",
     desc: "The box-lines CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).",
     restriction: "none",
     status: "n",
     syntax: "single | multiple"
    }, {
     name: "box-ordinal-group",
     desc: "The box-ordinal-group CSS property assigns the flexbox's child elements to an ordinal group.",
     restriction: "none",
     status: "n",
     syntax: "<integer>"
    }, {
     name: "box-orient",
     desc: "The box-orient CSS property specifies whether an element lays out its contents horizontally or vertically.",
     restriction: "none",
     status: "n",
     syntax: "horizontal | vertical | inline-axis | block-axis | inherit"
    }, {
     name: "box-pack",
     desc: "The -moz-box-pack and -webkit-box-pack CSS properties specify how a -moz-box or -webkit-box packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.",
     restriction: "none",
     status: "n",
     syntax: "start | center | end | justify"
    }, {
     name: "color-adjust",
     desc: "The color-adjust property is a non-standard CSS extension that can be used to force printing of background colors and images in browsers based on the WebKit engine.",
     restriction: "none",
     syntax: "economy | exact"
    }, {
     name: "font-variation-settings",
     desc: "The font-variation-settings CSS property provides low-level control over OpenType or TrueType font variations, by specifying the four letter axis names of the features you want to vary, along with their variation values.",
     restriction: "none",
     syntax: "normal | [ <string> <number>] #"
    }, {
     name: "gap",
     desc: "The gap CSS property is a shorthand property for row-gap and column-gap specifying the gutters between grid rows and columns.",
     restriction: "none",
     syntax: "<'row-gap'> <'column-gap'>?"
    }, {
     name: "hanging-punctuation",
     desc: "The hanging-punctuation CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.",
     restriction: "none",
     syntax: "none | [ first || [ force-end | allow-end ] || last ]"
    }, {
     name: "image-resolution",
     desc: "The image-resolution property specifies the intrinsic resolution of all raster images used in or on the element. It affects both content images (e.g. replaced elements and generated content) and decorative images (such as background-image). The intrinsic resolution of an image is used to determine the image’s intrinsic dimensions.",
     restriction: "none",
     status: "e",
     syntax: "[ from-image || <resolution> ] && snap?"
    }, {
     name: "initial-letter",
     desc: "The initial-letter CSS property specifies styling for dropped, raised, and sunken initial letters.",
     restriction: "none",
     status: "e",
     syntax: "normal | [ <number> <integer>? ]"
    }, {
     name: "initial-letter-align",
     desc: "The initial-letter-align CSS property specifies the alignment of initial letters within a paragraph.",
     restriction: "none",
     status: "e",
     syntax: "[ auto | alphabetic | hanging | ideographic ]"
    }, {
     name: "line-clamp",
     desc: "",
     restriction: "none",
     status: "e",
     syntax: "none | <integer>"
    }, {
     name: "line-height-step",
     desc: "The line-height-step CSS property defines the step units for line box heights. When the step unit is positive, line box heights are rounded up to the closest multiple of the unit. Negative values are invalid.",
     restriction: "none",
     status: "e",
     syntax: "none | <length>"
    }, {
     name: "mask",
     desc: "The mask CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points.",
     restriction: "none",
     syntax: "<mask-layer>#"
    }, {
     name: "mask-border",
     desc: "The mask-border CSS property lets you create a mask along the edge of an element's border.\n\nThis property is a shorthand for mask-border-source, mask-border-slice, mask-border-width, mask-border-outset, mask-border-repeat, and mask-border-mode. As with all shorthand properties, any omitted sub-values will be set to their initial value.",
     restriction: "none",
     status: "e",
     syntax: "<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>"
    }, {
     name: "mask-border-mode",
     desc: "The mask-border-mode CSS property specifies the blending mode used in a mask border.",
     restriction: "none",
     status: "e",
     syntax: "luminance | alpha"
    }, {
     name: "mask-border-outset",
     desc: "The mask-border-outset CSS property specifies the distance by which an element's mask border is set out from its border box.",
     restriction: "none",
     status: "e",
     syntax: "[ <length> | <number> ]{1,4}"
    }, {
     name: "mask-border-repeat",
     desc: "The mask-border-repeat CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.",
     restriction: "none",
     status: "e",
     syntax: "[ stretch | repeat | round | space ]{1,2}"
    }, {
     name: "mask-border-slice",
     desc: "The mask-border-slice CSS property divides the image specified by mask-border-source into regions. These regions are used to form the components of an element's mask border.",
     restriction: "none",
     status: "e",
     syntax: "<number-percentage>{1,4} fill?"
    }, {
     name: "mask-border-source",
     desc: "The mask-border-source CSS property specifies the source image used to create an element's mask border.\n\nThe mask-border-slice property is used to divide the source image into regions, which are then dynamically applied to the final mask border.",
     restriction: "none",
     status: "e",
     syntax: "none | <image>"
    }, {
     name: "mask-border-width",
     desc: "The mask-border-width CSS property specifies the width of an element's mask border.",
     restriction: "none",
     status: "e",
     syntax: "[ <length-percentage> | <number> | auto ]{1,4}"
    }, {
     name: "mask-clip",
     desc: "The mask-clip CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area.",
     restriction: "none",
     syntax: "[ <geometry-box> | no-clip ]#"
    }, {
     name: "mask-composite",
     desc: "The mask-composite CSS property represents a compositing operation used on the current mask layer with the mask layers below it.",
     restriction: "none",
     syntax: "<compositing-operator>#"
    }, {
     name: "max-lines",
     desc: "",
     restriction: "none",
     status: "e",
     syntax: "none | <integer>"
    }, {
     name: "offset",
     desc: "The offset CSS property is a shorthand property for animating an element along a defined path.",
     restriction: "none",
     status: "e",
     syntax: "[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?"
    }, {
     name: "offset-anchor",
     desc: "Defines an anchor point of the box positioned along the path. The anchor point specifies the point of the box which is to be considered as the point that is moved along the path.",
     restriction: "none",
     status: "e",
     syntax: "auto | <position>"
    }, {
     name: "offset-distance",
     desc: "The offset-distance CSS property specifies a position along an offset-path.",
     restriction: "none",
     status: "e",
     syntax: "<length-percentage>"
    }, {
     name: "offset-path",
     desc: 'The offset-path CSS property specifies the offset path where the element gets positioned. The exact element’s position on the offset path is determined by the offset-distance property. An offset path is either a specified path with one or multiple sub-paths or the geometry of a not-styled basic shape. Each shape or path must define an initial position for the computed value of "0" for offset-distance and an initial direction which specifies the rotation of the object to the initial position.\n\nIn this specification, a direction (or rotation) of 0 degrees is equivalent to the direction of the positive x-axis in the object’s local coordinate system. In other words, a rotation of 0 degree points to the right side of the UA if the object and its ancestors have no transformation applied.',
     restriction: "none",
     status: "e",
     syntax: "none | ray( [ <angle> && <size>? && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]"
    }, {
     name: "offset-position",
     desc: "Specifies the initial position of the offset path. If position is specified with static, offset-position would be ignored.",
     restriction: "none",
     status: "e",
     syntax: "auto | <position>"
    }, {
     name: "offset-rotate",
     desc: "The offset-rotate CSS property defines the direction of the element while positioning along the offset path.",
     restriction: "none",
     status: "e",
     syntax: "[ auto | reverse ] || <angle>"
    }, {
     name: "overflow-anchor",
     desc: "",
     restriction: "none",
     status: "e",
     syntax: "auto | none"
    }, {
     name: "overflow-block",
     desc: "",
     restriction: "none",
     status: "e",
     syntax: "<'overflow'>"
    }, {
     name: "overflow-clip-box",
     desc: "The overflow-clip-box CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the overflow-clip-box-inline and overflow-clip-box-block properties.",
     restriction: "none",
     status: "n",
     syntax: "padding-box | content-box"
    }, {
     name: "overflow-inline",
     desc: "",
     restriction: "none",
     status: "e",
     syntax: "<'overflow'>"
    }, {
     name: "overscroll-behavior",
     desc: "The overscroll-behavior CSS property is shorthand for the overscroll-behavior-x and overscroll-behavior-y properties, which allow you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached.",
     restriction: "none",
     status: "n",
     syntax: "[ contain | none | auto ]{1,2}"
    }, {
     name: "overscroll-behavior-x",
     desc: "The overscroll-behavior-x CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the x axis direction.",
     restriction: "none",
     status: "n",
     syntax: "contain | none | auto"
    }, {
     name: "overscroll-behavior-y",
     desc: "The overscroll-behavior-y CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the y axis direction.",
     restriction: "none",
     status: "n",
     syntax: "contain | none | auto"
    }, {
     name: "place-content",
     desc: "The place-content CSS shorthand property sets both the align-content and justify-content properties.",
     restriction: "none",
     syntax: "<'align-content'> <'justify-content'>?"
    }, {
     name: "rotate",
     desc: "The rotate CSS property allows you to specify rotation transforms individually and independantly of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.",
     restriction: "none",
     syntax: "none | [ x | y | z | <number>{3} ]? && <angle>"
    }, {
     name: "row-gap",
     desc: "The row-gap CSS property specifies the gutter between grid rows.",
     restriction: "none",
     syntax: "normal | <length-percentage>"
    }, {
     name: "ruby-merge",
     desc: "This property controls how ruby annotation boxes should be rendered when there are more than one in a ruby container box: whether each pair should be kept separate, the annotations should be collapsed and rendered as a group, or the separation should be determined based on the space available.",
     restriction: "none",
     syntax: "separate | collapse | auto"
    }, {
     name: "scale",
     desc: "The scale CSS property allows you to specify scale transforms individually and independantly of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.",
     restriction: "none",
     syntax: "none | <number>{1,3}"
    }, {
     name: "scroll-snap-type-x",
     desc: "The scroll-snap-type-x CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.\n\nSpecifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent.",
     restriction: "none",
     status: "n",
     syntax: "none | mandatory | proximity"
    }, {
     name: "scroll-snap-type-y",
     desc: "The scroll-snap-type-y CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.\n\nSpecifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent.",
     restriction: "none",
     status: "n",
     syntax: "none | mandatory | proximity"
    }, {
     name: "text-combine-upright",
     desc: "The text-combine-upright CSS property specifies the combination of multiple characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\nThis is used to produce an effect that is known as tate-chū-yoko (縦中横) in Japanese, or as 直書橫向 in Chinese.",
     restriction: "none",
     syntax: "none | all | [ digits <integer>? ]"
    }, {
     name: "text-decoration-skip",
     desc: "The text-decoration-skip CSS property specifies what parts of the element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.",
     restriction: "none",
     status: "e",
     syntax: "none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]"
    }, {
     name: "text-decoration-skip-ink",
     desc: "The text-decoration-skip-ink CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.",
     restriction: "none",
     status: "e",
     syntax: "auto | none"
    }, {
     name: "text-emphasis",
     desc: "The text-emphasis CSS property is a shorthand property for setting text-emphasis-style and text-emphasis-color in one declaration. This property will apply the specified emphasis mark to each character of the element's text, except separator characters, like spaces,  and control characters.",
     restriction: "none",
     syntax: "<'text-emphasis-style'> || <'text-emphasis-color'>"
    }, {
     name: "text-emphasis-color",
     desc: "The text-emphasis-color CSS property defines the color used to draw emphasis marks on text being rendered in the HTML document. This value can also be set and reset using the text-emphasis shorthand.",
     restriction: "none",
     syntax: "<color>"
    }, {
     name: "text-emphasis-position",
     desc: "The text-emphasis-position CSS property describes where emphasis marks are drawn at. The effect of emphasis marks on the line height is the same as for ruby text: if there isn't enough place, the line height is increased.",
     restriction: "none",
     syntax: "[ over | under ] && [ right | left ]"
    }, {
     name: "text-emphasis-style",
     desc: "The text-emphasis-style CSS property defines the type of emphasis used. It can also be set, and reset, using the text-emphasis shorthand.",
     restriction: "none",
     syntax: "none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>"
    }, {
     name: "text-size-adjust",
     desc: "The text-size-adjust CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.",
     restriction: "none",
     status: "e",
     syntax: "none | auto | <percentage>"
    }, {
     name: "transform-box",
     desc: "The transform-box CSS property defines the layout box to which the transform and transform-origin properties relate.",
     restriction: "none",
     syntax: "border-box | fill-box | view-box"
    }, {
     name: "translate",
     desc: "The translate CSS property allows you to specify translation transforms individually and independantly of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.",
     restriction: "none",
     syntax: "none | <length-percentage> [ <length-percentage> <length>? ]?"
    }, {
     name: "speak-as",
     desc: "The speak-as descriptor specifies how a counter symbol constructed with a given @counter-style will be represented in the spoken form. For example, an author can specify a counter symbol to be either spoken as its numerical value or just represented with an audio cue.",
     restriction: "none",
     syntax: "auto | bullets | numbers | words | spell-out | <counter-style-name>"
    }, {
     name: "font-display",
     desc: "The font-display descriptor determines how a font face is displayed based on whether and when it is downloaded and ready to use.",
     restriction: "none",
     status: "e",
     syntax: "[ auto | block | swap | fallback | optional ]"
    }, {
     name: "bleed",
     desc: "The bleed CSS at-rule descriptor, used with the @page at-rule, specifies the extent of the page bleed area outside the page box. This property only has effect if crop marks are enabled using the marks property.",
     restriction: "none",
     status: "e",
     syntax: "auto | <length>"
    }, {
     name: "marks",
     desc: "The marks CSS at-rule descriptor, used with the @page at-rule, adds crop and/or cross marks to the presentation of the document. Crop marks indicate where the page should be cut. Cross marks are used to align sheets.",
     restriction: "none",
     status: "e",
     syntax: "none | [ crop || cross ]"
    }, {
     name: "max-zoom",
     desc: "The max-zoom CSS descriptor sets the maximum zoom factor of a document defined by the @viewport at-rule. The browser will not zoom in any further than this, whether automatically or at the user's request.\n\nA zoom factor of 1.0 or 100% corresponds to no zooming. Larger values are zoomed in. Smaller values are zoomed out.",
     restriction: "none",
     syntax: "auto | <number> | <percentage>"
    }, {
     name: "min-zoom",
     desc: "The min-zoom CSS descriptor sets the minimum zoom factor of a document defined by the @viewport at-rule. The browser will not zoom out any further than this, whether automatically or at the user's request.\n\nA zoom factor of 1.0 or 100% corresponds to no zooming. Larger values are zoomed in. Smaller values are zoomed out.",
     restriction: "none",
     syntax: "auto | <number> | <percentage>"
    }, {
     name: "orientation",
     desc: "The orientation CSS @media media feature can be used to apply styles based on the orientation of the viewport (or the page box, for paged media).",
     restriction: "none",
     syntax: "auto | portrait | landscape"
    }, {
     name: "user-zoom",
     desc: "The user-zoom CSS descriptor controls whether or not the user can change the zoom factor of a document defined by @viewport.",
     restriction: "none",
     syntax: "zoom | fixed"
    } ]
   }
  };
  var dt = {
   100: "Thin",
   200: "Extra Light (Ultra Light)",
   300: "Light",
   400: "Normal",
   500: "Medium",
   600: "Semi Bold (Demi Bold)",
   700: "Bold",
   800: "Extra Bold (Ultra Bold)",
   900: "Black (Heavy)",
   "self-end": "The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.",
   "self-start": "The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis..",
   alternate: "The animation cycle iterations that are odd counts are played in the normal direction, and the animation cycle iterations that are even counts are played in a reverse direction.",
   "alternate-reverse": "The animation cycle iterations that are odd counts are played in the reverse direction, and the animation cycle iterations that are even counts are played in a normal direction.",
   backwards: "The beginning property value (as defined in the first @keyframes at-rule) is applied before the animation is displayed, during the period defined by 'animation-delay'.",
   forwards: "The final property value (as defined in the last @keyframes at-rule) is maintained after the animation completes.",
   paused: "A running animation will be paused.",
   running: "Resume playback of a paused animation.",
   multiply: "The source color is multiplied by the destination color and replaces the destination.",
   screen: "Multiplies the complements of the backdrop and source color values, then complements the result.",
   overlay: "Multiplies or screens the colors, depending on the backdrop color value.",
   darken: "Selects the darker of the backdrop and source colors.",
   lighten: "Selects the lighter of the backdrop and source colors.",
   "color-dodge": "Brightens the backdrop color to reflect the source color.",
   "color-burn": "Darkens the backdrop color to reflect the source color.",
   "hard-light": "Multiplies or screens the colors, depending on the source color value.",
   "soft-light": "Darkens or lightens the colors, depending on the source color value.",
   difference: "Subtracts the darker of the two constituent colors from the lighter color..",
   exclusion: "Produces an effect similar to that of the Difference mode but lower in contrast.",
   hue: "Creates a color with the hue of the source color and the saturation and luminosity of the backdrop color.",
   saturation: "Creates a color with the saturation of the source color and the hue and luminosity of the backdrop color.",
   color: "Creates a color with the hue and saturation of the source color and the luminosity of the backdrop color.",
   luminosity: "Creates a color with the luminosity of the source color and the hue and saturation of the backdrop color.",
   repeat: "The image is tiled (repeated) to fill the area.",
   clone: "Each box is independently wrapped with the border and padding.",
   slice: "The effect is as though the element were rendered with no breaks present, and then sliced by the breaks afterward.",
   inset: "Changes the drop shadow from an outer shadow (one that shadows the box onto the canvas, as if it were lifted above the canvas) to an inner shadow (one that shadows the canvas onto the box, as if the box were cut out of the canvas and shifted behind it).",
   "border-box": "The specified width and height (and respective min/max properties) on this element determine the border box of the element.",
   "content-box": "Behavior of width and height as specified by CSS2.1. The specified width and height (and respective min/max properties) apply to the width and height respectively of the content box of the element.",
   "rect()": "Specifies offsets from the edges of the border box.",
   evenodd: "Determines the ‘insideness’ of a point on the canvas by drawing a ray from that point to infinity in any direction and counting the number of path segments from the given shape that the ray crosses.",
   nonzero: "Determines the ‘insideness’ of a point on the canvas by drawing a ray from that point to infinity in any direction and then examining the places where a segment of the shape crosses the ray.",
   linearRGB: "Color operations should occur in the linearized RGB color space.",
   sRGB: "Color operations should occur in the sRGB color space.",
   balance: "Balance content equally between columns, if possible.",
   size: "For properties that can have effects on more than just an element and its descendants, those effects don't escape the containing element.",
   layout: "Turns on layout containment for the element.",
   paint: "Turns on paint containment for the element.",
   "attr()": "The attr(n) function returns as a string the value of attribute n for the subject of the selector.",
   "counter(name)": "Counters are denoted by identifiers (see the 'counter-increment' and 'counter-reset' properties).",
   alias: "Indicates an alias of/shortcut to something is to be created. Often rendered as an arrow with a small curved arrow next to it.",
   "all-scroll": "Indicates that the something can be scrolled in any direction. Often rendered as arrows pointing up, down, left, and right with a dot in the middle.",
   cell: "Indicates that a cell or set of cells may be selected. Often rendered as a thick plus-sign with a dot in the middle.",
   "col-resize": "Indicates that the item/column can be resized horizontally. Often rendered as arrows pointing left and right with a vertical bar separating them.",
   "context-menu": "A context menu is available for the object under the cursor. Often rendered as an arrow with a small menu-like graphic next to it.",
   copy: "Indicates something is to be copied. Often rendered as an arrow with a small plus sign next to it.",
   crosshair: "A simple crosshair (e.g., short line segments resembling a '+' sign). Often used to indicate a two dimensional bitmap selection mode.",
   "e-resize": "Indicates that east edge is to be moved.",
   "ew-resize": "Indicates a bidirectional east-west resize cursor.",
   grab: "Indicates that something can be grabbed.",
   grabbing: "Indicates that something is being grabbed.",
   help: "Help is available for the object under the cursor. Often rendered as a question mark or a balloon.",
   move: "Indicates something is to be moved.",
   "-moz-grab": "Indicates that something can be grabbed.",
   "-moz-grabbing": "Indicates that something is being grabbed.",
   "-moz-zoom-in": "Indicates that something can be zoomed (magnified) in.",
   "-moz-zoom-out": "Indicates that something can be zoomed (magnified) out.",
   "ne-resize": "Indicates that movement starts from north-east corner.",
   "nesw-resize": "Indicates a bidirectional north-east/south-west cursor.",
   "no-drop": "Indicates that the dragged item cannot be dropped at the current cursor location. Often rendered as a hand or pointer with a small circle with a line through it.",
   "not-allowed": "Indicates that the requested action will not be carried out. Often rendered as a circle with a line through it.",
   "n-resize": "Indicates that north edge is to be moved.",
   "ns-resize": "Indicates a bidirectional north-south cursor.",
   "nw-resize": "Indicates that movement starts from north-west corner.",
   "nwse-resize": "Indicates a bidirectional north-west/south-east cursor.",
   pointer: "The cursor is a pointer that indicates a link.",
   progress: "A progress indicator. The program is performing some processing, but is different from 'wait' in that the user may still interact with the program. Often rendered as a spinning beach ball, or an arrow with a watch or hourglass.",
   "row-resize": "Indicates that the item/row can be resized vertically. Often rendered as arrows pointing up and down with a horizontal bar separating them.",
   "se-resize": "Indicates that movement starts from south-east corner.",
   "s-resize": "Indicates that south edge is to be moved.",
   "sw-resize": "Indicates that movement starts from south-west corner.",
   "vertical-text": "Indicates vertical-text that may be selected. Often rendered as a horizontal I-beam.",
   wait: "Indicates that the program is busy and the user should wait. Often rendered as a watch or hourglass.",
   "-webkit-grab": "Indicates that something can be grabbed.",
   "-webkit-grabbing": "Indicates that something is being grabbed.",
   "-webkit-zoom-in": "Indicates that something can be zoomed (magnified) in.",
   "-webkit-zoom-out": "Indicates that something can be zoomed (magnified) out.",
   "w-resize": "Indicates that west edge is to be moved.",
   "zoom-in": "Indicates that something can be zoomed (magnified) in.",
   "zoom-out": "Indicates that something can be zoomed (magnified) out.",
   ltr: "Left-to-right direction.",
   rtl: "Right-to-left direction.",
   block: "The element generates a block-level box",
   flex: "The element generates a principal flex container box and establishes a flex formatting context.",
   flexbox: "The element lays out its contents using flow layout (block-and-inline layout). Standardized as 'flex'.",
   "flow-root": "The element generates a block container box, and lays out its contents using flow layout.",
   grid: "The element generates a principal grid container box, and establishes a grid formatting context.",
   "inline-block": "A block box, which itself is flowed as a single inline box, similar to a replaced element. The inside of an inline-block is formatted as a block box, and the box itself is formatted as an inline box.",
   "inline-flex": "Inline-level flex container.",
   "inline-flexbox": "Inline-level flex container. Standardized as 'inline-flex'",
   "inline-table": "Inline-level table wrapper box containing table box.",
   "list-item": "One or more block boxes and one marker box.",
   "-moz-box": "The element lays out its contents using flow layout (block-and-inline layout). Standardized as 'flex'.",
   "-moz-inline-box": "Inline-level flex container. Standardized as 'inline-flex'",
   "-ms-flexbox": "The element lays out its contents using flow layout (block-and-inline layout). Standardized as 'flex'.",
   "-ms-grid": "The element generates a principal grid container box, and establishes a grid formatting context.",
   "-ms-inline-flexbox": "Inline-level flex container. Standardized as 'inline-flex'",
   "-ms-inline-grid": "Inline-level grid container.",
   "run-in": "The element generates a run-in box. Run-in elements act like inlines or blocks, depending on the surrounding elements.",
   table: "The element generates a principal table wrapper box containing an additionally-generated table box, and establishes a table formatting context.",
   "-webkit-box": "The element lays out its contents using flow layout (block-and-inline layout). Standardized as 'flex'.",
   "-webkit-flex": "The element lays out its contents using flow layout (block-and-inline layout).",
   "-webkit-inline-box": "Inline-level flex container. Standardized as 'inline-flex'",
   "-webkit-inline-flex": "Inline-level flex container.",
   hide: "No borders or backgrounds are drawn around/behind empty cells.",
   show: "Borders and backgrounds are drawn around/behind empty cells (like normal cells).",
   accumulate: "If the ancestor container element has a property of new, then all graphics elements within the current container are rendered both on the parent's background image and onto the target.",
   new: "Create a new background image canvas. All children of the current container element can access the background, and they will be rendered onto both the parent's background image canvas in addition to the target device.",
   "blur()": "Applies a Gaussian blur to the input image.",
   "brightness()": "Applies a linear multiplier to input image, making it appear more or less bright.",
   "contrast()": "Adjusts the contrast of the input.",
   "drop-shadow()": "Applies a drop shadow effect to the input image.",
   "grayscale()": "Converts the input image to grayscale.",
   "hue-rotate()": "Applies a hue rotation on the input image. ",
   "invert()": "Inverts the samples in the input image.",
   "opacity()": "Applies transparency to the samples in the input image.",
   "saturate()": "Saturates the input image.",
   "sepia()": "Converts the input image to sepia.",
   "column-reverse": "Same as 'column', except the main-start and main-end directions are swapped.",
   "row-reverse": "Same as 'row', except the main-start and main-end directions are swapped.",
   "wrap-reverse": "Same as 'wrap', except the cross-start and cross-end directions are swapped.",
   "inline-end": "A keyword indicating that the element must float on the end side of its containing block. That is the right side with ltr scripts, and the left side with rtl scripts.",
   "inline-start": "A keyword indicating that the element must float on the start side of its containing block. That is the left side with ltr scripts, and the right side with rtl scripts.",
   bold: "Same as 700",
   bolder: "Specifies the weight of the face bolder than the inherited value.",
   caption: "The font used for captioned controls (e.g., buttons, drop-downs, etc.).",
   lighter: "Specifies the weight of the face lighter than the inherited value.",
   menu: "The font used in menus (e.g., dropdown menus and menu lists).",
   "message-box": "The font used in dialog boxes.",
   "small-caption": "The font used for labeling small controls.",
   "status-bar": "The font used in window status bars.",
   '"aalt"': "Access All Alternates.",
   '"abvf"': "Above-base Forms. Required in Khmer script.",
   '"abvm"': "Above-base Mark Positioning. Required in Indic scripts.",
   '"abvs"': "Above-base Substitutions. Required in Indic scripts.",
   '"afrc"': "Alternative Fractions.",
   '"akhn"': "Akhand. Required in most Indic scripts.",
   '"blwf"': "Below-base Form. Required in a number of Indic scripts.",
   '"blwm"': "Below-base Mark Positioning. Required in Indic scripts.",
   '"blws"': "Below-base Substitutions. Required in Indic scripts.",
   '"calt"': "Contextual Alternates.",
   '"case"': "Case-Sensitive Forms. Applies only to European scripts; particularly prominent in Spanish-language setting.",
   '"ccmp"': "Glyph Composition/Decomposition.",
   '"cfar"': "Conjunct Form After Ro. Required in Khmer scripts.",
   '"cjct"': "Conjunct Forms. Required in Indic scripts that show similarity to Devanagari.",
   '"clig"': "Contextual Ligatures.",
   '"cpct"': "Centered CJK Punctuation. Used primarily in Chinese fonts.",
   '"cpsp"': "Capital Spacing. Should not be used in connecting scripts (e.g. most Arabic).",
   '"cswh"': "Contextual Swash.",
   '"curs"': "Cursive Positioning. Can be used in any cursive script.",
   '"c2pc"': "Petite Capitals From Capitals. Applies only to bicameral scripts.",
   '"dist"': "Distances. Required in Indic scripts.",
   '"dnom"': "Denominators.",
   '"dtls"': "Dotless Forms. Applied to math formula layout.",
   '"expt"': "Expert Forms. Applies only to Japanese.",
   '"falt"': "Final Glyph on Line Alternates. Can be used in any cursive script.",
   '"fin2"': "Terminal Form #2. Used only with the Syriac script.",
   '"fin3"': "Terminal Form #3. Used only with the Syriac script.",
   '"fina"': "Terminal Forms. Can be used in any alphabetic script.",
   '"flac"': "Flattened ascent forms. Applied to math formula layout.",
   '"frac"': "Fractions.",
   '"fwid"': "Full Widths. Applies to any script which can use monospaced forms.",
   '"half"': "Half Forms. Required in Indic scripts that show similarity to Devanagari.",
   '"haln"': "Halant Forms. Required in Indic scripts.",
   '"halt"': "Alternate Half Widths. Used only in CJKV fonts.",
   '"hist"': "Historical Forms.",
   '"hkna"': "Horizontal Kana Alternates. Applies only to fonts that support kana (hiragana and katakana).",
   '"hlig"': "Historical Ligatures.",
   '"hngl"': "Hangul. Korean only.",
   '"hojo"': "Hojo Kanji Forms (JIS X 0212-1990 Kanji Forms). Used only with Kanji script.",
   '"hwid"': "Half Widths. Generally used only in CJKV fonts.",
   '"init"': "Initial Forms. Can be used in any alphabetic script.",
   '"isol"': "Isolated Forms. Can be used in any cursive script.",
   '"ital"': "Italics. Applies mostly to Latin; note that many non-Latin fonts contain Latin as well.",
   '"jalt"': "Justification Alternates. Can be used in any cursive script.",
   '"jp78"': "JIS78 Forms. Applies only to Japanese.",
   '"jp83"': "JIS83 Forms. Applies only to Japanese.",
   '"jp90"': "JIS90 Forms. Applies only to Japanese.",
   '"jp04"': "JIS2004 Forms. Applies only to Japanese.",
   '"lfbd"': "Left Bounds.",
   '"ljmo"': "Leading Jamo Forms. Required for Hangul script when Ancient Hangul writing system is supported.",
   '"locl"': "Localized Forms.",
   '"ltra"': "Left-to-right glyph alternates.",
   '"ltrm"': "Left-to-right mirrored forms.",
   '"mark"': "Mark Positioning.",
   '"med2"': "Medial Form #2. Used only with the Syriac script.",
   '"medi"': "Medial Forms.",
   '"mgrk"': "Mathematical Greek.",
   '"mkmk"': "Mark to Mark Positioning.",
   '"nalt"': "Alternate Annotation Forms.",
   '"nlck"': "NLC Kanji Forms. Used only with Kanji script.",
   '"nukt"': "Nukta Forms. Required in Indic scripts..",
   '"numr"': "Numerators.",
   '"opbd"': "Optical Bounds.",
   '"ordn"': "Ordinals. Applies mostly to Latin script.",
   '"ornm"': "Ornaments.",
   '"palt"': "Proportional Alternate Widths. Used mostly in CJKV fonts.",
   '"pcap"': "Petite Capitals.",
   '"pkna"': "Proportional Kana. Generally used only in Japanese fonts.",
   '"pnum"': "Proportional Figures.",
   '"pref"': "Pre-base Forms. Required in Khmer and Myanmar (Burmese) scripts and southern Indic scripts that may display a pre-base form of Ra.",
   '"pres"': "Pre-base Substitutions. Required in Indic scripts.",
   '"pstf"': "Post-base Forms. Required in scripts of south and southeast Asia that have post-base forms for consonants eg: Gurmukhi, Malayalam, Khmer.",
   '"psts"': "Post-base Substitutions.",
   '"pwid"': "Proportional Widths.",
   '"qwid"': "Quarter Widths. Generally used only in CJKV fonts.",
   '"rand"': "Randomize.",
   '"rclt"': "Required Contextual Alternates. May apply to any script, but is especially important for many styles of Arabic.",
   '"rlig"': "Required Ligatures. Applies to Arabic and Syriac. May apply to some other scripts.",
   '"rkrf"': "Rakar Forms. Required in Devanagari and Gujarati scripts.",
   '"rphf"': "Reph Form. Required in Indic scripts. E.g. Devanagari, Kannada.",
   '"rtbd"': "Right Bounds.",
   '"rtla"': "Right-to-left alternates.",
   '"rtlm"': "Right-to-left mirrored forms.",
   '"ruby"': "Ruby Notation Forms. Applies only to Japanese.",
   '"salt"': "Stylistic Alternates.",
   '"sinf"': "Scientific Inferiors.",
   '"size"': "Optical size.",
   '"smpl"': "Simplified Forms. Applies only to Chinese and Japanese.",
   '"ssty"': "Math script style alternates.",
   '"stch"': "Stretching Glyph Decomposition.",
   '"subs"': "Subscript.",
   '"sups"': "Superscript.",
   '"titl"': "Titling.",
   '"tjmo"': "Trailing Jamo Forms. Required for Hangul script when Ancient Hangul writing system is supported.",
   '"tnam"': "Traditional Name Forms. Applies only to Japanese.",
   '"trad"': "Traditional Forms. Applies only to Chinese and Japanese.",
   '"twid"': "Third Widths. Generally used only in CJKV fonts.",
   '"unic"': "Unicase.",
   '"valt"': "Alternate Vertical Metrics. Applies only to scripts with vertical writing modes.",
   '"vatu"': "Vattu Variants. Used for Indic scripts. E.g. Devanagari.",
   '"vert"': "Vertical Alternates. Applies only to scripts with vertical writing modes.",
   '"vhal"': "Alternate Vertical Half Metrics. Used only in CJKV fonts.",
   '"vjmo"': "Vowel Jamo Forms. Required for Hangul script when Ancient Hangul writing system is supported.",
   '"vkna"': "Vertical Kana Alternates. Applies only to fonts that support kana (hiragana and katakana).",
   '"vkrn"': "Vertical Kerning.",
   '"vpal"': "Proportional Alternate Vertical Metrics. Used mostly in CJKV fonts.",
   '"vrt2"': "Vertical Alternates and Rotation. Applies only to scripts with vertical writing modes.",
   '"zero"': "Slashed Zero.",
   narrower: "Indicates a narrower value relative to the width of the parent element.",
   wider: "Indicates a wider value relative to the width of the parent element.",
   weight: "Allow synthetic bold faces.",
   "annotation()": "Enables display of alternate annotation forms.",
   "character-variant()": "Enables display of specific character variants.",
   "historical-forms": "Enables display of historical forms.",
   "ornaments()": "Enables replacement of default glyphs with ornaments, if provided in the font.",
   "styleset()": "Enables display with stylistic sets.",
   "stylistic()": "Enables display of stylistic alternates.",
   "swash()": "Enables display of swash glyphs.",
   "all-petite-caps": "Enables display of petite capitals for both upper and lowercase letters.",
   "all-small-caps": "Enables display of small capitals for both upper and lowercase letters.",
   "petite-caps": "Enables display of petite capitals.",
   "titling-caps": "Enables display of titling capitals.",
   unicase: "Enables display of mixture of small capitals for uppercase letters with normal lowercase letters.",
   "full-width": "Enables rendering of full-width variants.",
   jis04: "Enables rendering of JIS04 forms.",
   jis78: "Enables rendering of JIS78 forms.",
   jis83: "Enables rendering of JIS83 forms.",
   jis90: "Enables rendering of JIS90 forms.",
   "proportional-width": "Enables rendering of proportionally-spaced variants.",
   simplified: "Enables rendering of simplified forms.",
   traditional: "Enables rendering of traditional forms.",
   "additional-ligatures": "Enables display of additional ligatures.",
   "common-ligatures": "Enables display of common ligatures.",
   contextual: "Enables display of contextual alternates.",
   "discretionary-ligatures": "Enables display of discretionary ligatures.",
   "historical-ligatures": "Enables display of historical ligatures.",
   "no-additional-ligatures": "Disables display of additional ligatures.",
   "no-common-ligatures": "Disables display of common ligatures.",
   "no-contextual": "Disables display of contextual alternates.",
   "no-discretionary-ligatures": "Disables display of discretionary ligatures.",
   "no-historical-ligatures": "Disables display of historical ligatures.",
   "diagonal-fractions": "Enables display of lining diagonal fractions.",
   "lining-nums": "Enables display of lining numerals.",
   "oldstyle-nums": "Enables display of old-style numerals.",
   ordinal: "Enables display of letter forms used with ordinal numbers.",
   "proportional-nums": "Enables display of proportional numerals.",
   "slashed-zero": "Enables display of slashed zeros.",
   "stacked-fractions": "Enables display of lining stacked fractions.",
   "tabular-nums": "Enables display of tabular numerals.",
   span: "Contributes a grid span to the grid item’s placement such that the corresponding edge of the grid item’s grid area is N lines from its opposite edge.",
   "minmax()": "Defines a size range greater than or equal to min and less than or equal to max.",
   dense: "If specified, the auto-placement algorithm uses a “dense” packing algorithm, which attempts to fill in holes earlier in the grid if smaller items come up later.",
   "fit-content": "Use the fit-content inline size or fit-content block size, as appropriate to the writing mode.",
   manual: "Words are only broken at line breaks where there are characters inside the word that suggest line break opportunities",
   flip: "After rotating by the precededing angle, the image is flipped horizontally. Defaults to 0deg if the angle is ommitted.",
   "from-image": "If the image has an orientation specified in its metadata, such as EXIF, this value computes to the angle that the metadata specifies is necessary to correctly orient the image.",
   "crisp-edges": "The image must be scaled with an algorithm that preserves contrast and edges in the image, and which does not smooth colors or introduce blur to the image in the process.",
   optimizeQuality: "Deprecated.",
   pixelated: "When scaling the image up, the 'nearest neighbor' or similar algorithm must be used, so that the image appears to be simply composed of very large pixels.",
   active: "The input method editor is initially active; text entry is performed using it unless the user specifically dismisses it.",
   disabled: "The input method editor is disabled and may not be activated by the user.",
   inactive: "The input method editor is initially inactive, but the user may activate it if they wish.",
   safe: "If the size of the item overflows the alignment container, the item is instead aligned as if the alignment mode were start.",
   unsafe: "Regardless of the relative sizes of the item and alignment container, the given alignment value is honored.",
   "space-evenly": "The items are evenly distributed within the alignment container along the main axis.",
   circle: "A hollow circle.",
   disc: "A filled circle.",
   inside: "The marker box is outside the principal block box, as described in the section on the ::marker pseudo-element below.",
   outside: "The ::marker pseudo-element is an inline element placed immediately before all ::before pseudo-elements in the principal block box, after which the element's content flows.",
   "symbols()": "Allows a counter style to be defined inline.",
   "path()": "Defines an SVG path as a string, with optional 'fill-rule' as the first argument.",
   "block-axis": "Elements are oriented along the box's axis.",
   "inline-axis": "Elements are oriented vertically.",
   "padding-box": "The specified width and height (and respective min/max properties) on this element determine the padding box of the element.",
   "line-through": "Each line of text has a line through the middle.",
   overline: "Each line of text has a line above it.",
   underline: "Each line of text is underlined.",
   dashed: "Produces a dashed line style.",
   dotted: "Produces a dotted line.",
   double: "Produces a double line.",
   solid: "Produces a solid line.",
   wavy: "Produces a wavy line.",
   "matrix()": "Specifies a 2D transformation in the form of a transformation matrix of six values. matrix(a,b,c,d,e,f) is equivalent to applying the transformation matrix [a b c d e f]",
   "matrix3d()": "Specifies a 3D transformation as a 4x4 homogeneous matrix of 16 values in column-major order.",
   perspective: "Specifies a perspective projection matrix.",
   "rotate()": "Specifies a 2D rotation by the angle specified in the parameter about the origin of the element, as defined by the transform-origin property.",
   "rotate3d()": "Specifies a clockwise 3D rotation by the angle specified in last parameter about the [x,y,z] direction vector described by the first 3 parameters.",
   "rotateX('angle')": "Specifies a clockwise rotation by the given angle about the X axis.",
   "rotateY('angle')": "Specifies a clockwise rotation by the given angle about the Y axis.",
   "rotateZ('angle')": "Specifies a clockwise rotation by the given angle about the Z axis.",
   "scale()": "Specifies a 2D scale operation by the [sx,sy] scaling vector described by the 2 parameters. If the second parameter is not provided, it is takes a value equal to the first.",
   "scale3d()": "Specifies a 3D scale operation by the [sx,sy,sz] scaling vector described by the 3 parameters.",
   "scaleX()": "Specifies a scale operation using the [sx,1] scaling vector, where sx is given as the parameter.",
   "scaleY()": "Specifies a scale operation using the [sy,1] scaling vector, where sy is given as the parameter.",
   "scaleZ()": "Specifies a scale operation using the [1,1,sz] scaling vector, where sz is given as the parameter.",
   "skew()": "Specifies a skew transformation along the X and Y axes. The first angle parameter specifies the skew on the X axis. The second angle parameter specifies the skew on the Y axis. If the second parameter is not given then a value of 0 is used for the Y angle (ie: no skew on the Y axis).",
   "skewX()": "Specifies a skew transformation along the X axis by the given angle.",
   "skewY()": "Specifies a skew transformation along the Y axis by the given angle.",
   "translate()": "Specifies a 2D translation by the vector [tx, ty], where tx is the first translation-value parameter and ty is the optional second translation-value parameter.",
   "translate3d()": "Specifies a 3D translation by the vector [tx,ty,tz], with tx, ty and tz being the first, second and third translation-value parameters respectively.",
   "translateX()": "Specifies a translation by the given amount in the X direction.",
   "translateY()": "Specifies a translation by the given amount in the Y direction.",
   "translateZ()": "Specifies a translation by the given amount in the Z direction. Note that percentage values are not allowed in the translateZ translation-value, and if present are evaluated as 0.",
   false: "The element does not contain an accelerator key sequence.",
   true: "The element contains an accelerator key sequence.",
   bt: "Bottom-to-top block flow. Layout is horizontal.",
   lr: "Left-to-right direction. The flow orientation is vertical.",
   rl: "Right-to-left direction. The flow orientation is vertical.",
   tb: "Top-to-bottom direction. The flow orientation is horizontal.",
   zoom: "The element is zoomable.",
   "no-limit": "There is no limit.",
   mode: "Any of the range of mode values available to the -ms-layout-grid-mode property.",
   type: "Any of the range of type values available to the -ms-layout-grid-type property.",
   "-ms-autohiding-scrollbar": "Indicates the element displays auto-hiding scrollbars during mouse interactions and panning indicators during touch and keyboard interactions.",
   scrollbar: 'Scrollbars are typically narrow strips inserted on one or two edges of an element and which often have arrows to click on and a "thumb" to drag up and down (or left and right) to move the contents of the element.',
   "ideograph-alpha": "Creates 1/4em extra spacing between runs of ideographic letters and non-ideographic letters, such as Latin-based, Cyrillic, Greek, Arabic or Hebrew.",
   "ideograph-numeric": "Creates 1/4em extra spacing between runs of ideographic letters and numeric glyphs.",
   "ideograph-parenthesis": "Creates extra spacing between normal (non wide) parenthesis and ideographs.",
   "ideograph-space": "Extends the width of the space character while surrounded by ideographs.",
   punctuation: "Creates extra non-breaking spacing around punctuation as required by language-specific typographic conventions.",
   digits: "Attempt to typeset horizontally each maximal sequence of consecutive ASCII digits (U+0030–U+0039) that has as many or fewer characters than the specified integer such that it takes up the space of a single character within the vertical line box.",
   "inter-cluster": "Justification primarily changes spacing at word separators and at grapheme cluster boundaries in clustered scripts. This value is typically used for Southeast Asian scripts such as Thai.",
   "inter-ideograph": "Justification primarily changes spacing at word separators and at inter-graphemic boundaries in scripts that use no word spaces. This value is typically used for CJK languages.",
   "inter-word": "Justification primarily changes spacing at word separators. This value is typically used for languages that separate words using spaces, like English or (sometimes) Korean.",
   kashida: "Justification primarily stretches Arabic and related scripts through the use of kashida or other calligraphic elongation.",
   clip: "Clip inline content that overflows. Characters may be only partially rendered.",
   ellipsis: "Render an ellipsis character (U+2026) to represent clipped inline content.",
   over: "The underline is aligned with the 'top' (right in vertical writing) edge of the element's em-box. In this mode, an overline also switches sides.",
   under: "The underline is aligned with the 'bottom' (left in vertical writing) edge of the element's em-box. In this case the underline usually does not cross the descenders. This is sometimes called 'accounting' underline.",
   grippers: "Grippers are always on.",
   "break-all": "Lines may break between any two grapheme clusters for non-CJK scripts.",
   clear: "Inline flow content can only wrap on top and bottom of the exclusion and must leave the areas to the start and end edges of the exclusion box empty.",
   maximum: "Inline flow content can wrap on the side of the exclusion with the largest available space for the given line, and must leave the other side of the exclusion empty.",
   minimum: "Inline flow content can flow around the edge of the exclusion with the smallest available space within the flow content’s containing block, and must leave the other edge of the exclusion empty.",
   current: "Indicates that the user agent should target the frame that the element is in.",
   root: "Indicates that the user agent should target the full window.",
   "scale-down": "Size the content as if ‘none’ or ‘contain’ were specified, whichever would result in a smaller concrete object size.",
   invert: "Performs a color inversion on the pixels on the screen.",
   "-moz-hidden-unscrollable": "Same as the standardized 'clip', except doesn’t establish a block formatting context.",
   painted: 'The given element can be the target element for pointer events when the pointer is over a "painted" area. ',
   visibleFill: "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and when the pointer is over the interior of the element.",
   visiblePainted: "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and when the pointer is over a ‘painted’ area.",
   visibleStroke: "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and when the pointer is over the perimeter of the element.",
   absolute: "The box's position (and possibly size) is specified with the 'top', 'right', 'bottom', and 'left' properties. These properties specify offsets with respect to the box's 'containing block'.",
   "-ms-page": "The box's position is calculated according to the 'absolute' model.",
   relative: "The box's position is calculated according to the normal flow (this is called the position in normal flow). Then the box is offset relative to its normal position.",
   static: "The box is a normal box, laid out according to the normal flow. The 'top', 'right', 'bottom', and 'left' properties do not apply.",
   sticky: "The box's position is calculated according to the normal flow. Then the box is offset relative to its flow root and containing block and in all cases, including table elements, does not affect the position of any following boxes.",
   "-webkit-sticky": "The box's position is calculated according to the normal flow. Then the box is offset relative to its flow root and containing block and in all cases, including table elements, does not affect the position of any following boxes.",
   "distribute-letter": "If the width of the ruby text is smaller than that of the base, then the ruby text contents are evenly distributed across the width of the base, with the first and last ruby text glyphs lining up with the corresponding first and last base glyphs. If the width of the ruby text is at least the width of the base, then the letters of the base are evenly distributed across the width of the ruby text.",
   "distribute-space": "If the width of the ruby text is smaller than that of the base, then the ruby text contents are evenly distributed across the width of the base, with a certain amount of white space preceding the first and following the last character in the ruby text. That amount of white space is normally equal to half the amount of inter-character space of the ruby text.",
   "line-edge": "If the ruby text is not adjacent to a line edge, it is aligned as in 'auto'. If it is adjacent to a line edge, then it is still aligned as in auto, but the side of the ruby text that touches the end of the line is lined up with the corresponding edge of the base.",
   after: "The ruby text appears after the base. This is a relatively rare setting used in ideographic East Asian writing systems, most easily found in educational text.",
   before: "The ruby text appears before the base. This is the most common setting used in ideographic East Asian writing systems.",
   "attr(x)": "The value of attribute 'x' is a string value. The string value is evaluated as a <number> to determine the number of ruby base elements to be spanned by the annotation element.",
   smooth: "Scrolls in a smooth fashion using a user-agent-defined timing function and time period.",
   "margin-box": "The background is painted within (clipped to) the margin box.",
   crispEdges: "Emphasize the contrast between clean edges of artwork over rendering speed and geometric precision.",
   "format()": "Optional hint describing the format of the font resource.",
   "local()": "Format-specific string that identifies a locally available copy of a given font.",
   butt: "Indicates that the stroke for each subpath does not extend beyond its two endpoints.",
   bevel: "Indicates that a bevelled corner is to be used to join path segments.",
   miter: "Indicates that a sharp corner is to be used to join path segments.",
   additive: "Represents “sign-value” numbering systems, which, rather than using reusing digits in different positions to change their value, define additional digits with much larger values, so that the value of the number can be obtained by adding all the digits together.",
   cyclic: "Cycles repeatedly through its provided symbols, looping back to the beginning when it reaches the end of the list.",
   extends: "Use the algorithm of another counter style, but alter other aspects.",
   numeric: "interprets the list of counter symbols as digits to a \"place-value\" numbering system, similar to the default 'decimal' counter style.",
   symbolic: "Cycles repeatedly through its provided symbols, doubling, tripling, etc. the symbols on each successive pass through the list.",
   sideways: "This value is equivalent to 'sideways-right' in 'vertical-rl' writing mode and equivalent to 'sideways-left' in 'vertical-lr' writing mode.",
   "sideways-right": "In vertical writing modes, this causes text to be set as if in a horizontal layout, but rotated 90° clockwise.",
   upright: "In vertical writing modes, characters from horizontal-only scripts are rendered upright, i.e. in their standard horizontal orientation.",
   optimizeLegibility: "Indicates that the user agent shall emphasize legibility over rendering speed and geometric precision.",
   capitalize: "Puts the first typographic letter unit of each word in titlecase.",
   lowercase: "Puts all letters in lowercase.",
   uppercase: "Puts all letters in uppercase.",
   "perspective()": "Specifies a perspective projection matrix.",
   flat: "All children of this element are rendered flattened into the 2D plane of the element.",
   "preserve-3d": "Flattening is not performed, so children maintain their position in 3D space.",
   "bidi-override": "Inside the element, reordering is strictly in sequence according to the 'direction' property; the implicit part of the bidirectional algorithm is ignored.",
   embed: "If the element is inline-level, this value opens an additional level of embedding with respect to the bidirectional algorithm. The direction of this embedding level is given by the 'direction' property.",
   "isolate-override": "This combines the isolation behavior of 'isolate' with the directional override behavior of 'bidi-override'",
   plaintext: "For the purposes of the Unicode bidirectional algorithm, the base directionality of each bidi paragraph for which the element forms the containing block is determined not by the element's computed 'direction'.",
   "U+26": "Ampersand.",
   "U+20-24F, U+2B0-2FF, U+370-4FF, U+1E00-1EFF, U+2000-20CF, U+2100-23FF, U+2500-26FF, U+E000-F8FF, U+FB00–FB4F": "WGL4 character set (Pan-European).",
   "U+20-17F, U+2B0-2FF, U+2000-206F, U+20A0-20CF, U+2100-21FF, U+2600-26FF": "The Multilingual European Subset No. 1. Latin. Covers ~44 languages.",
   "U+20-2FF, U+370-4FF, U+1E00-20CF, U+2100-23FF, U+2500-26FF, U+FB00-FB4F, U+FFF0-FFFD": "The Multilingual European Subset No. 2. Latin, Greek, and Cyrillic. Covers ~128 language.",
   "U+20-4FF, U+530-58F, U+10D0-10FF, U+1E00-23FF, U+2440-245F, U+2500-26FF, U+FB00-FB4F, U+FE20-FE2F, U+FFF0-FFFD": "The Multilingual European Subset No. 3. Covers all characters belonging to European scripts.",
   "U+00-7F": "Basic Latin (ASCII).",
   "U+80-FF": "Latin-1 Supplement. Accented characters for Western European languages, common punctuation characters, multiplication and division signs.",
   "U+100-17F": "Latin Extended-A. Accented characters for for Czech, Dutch, Polish, and Turkish.",
   "U+180-24F": "Latin Extended-B. Croatian, Slovenian, Romanian, Non-European and historic latin, Khoisan, Pinyin, Livonian, Sinology.",
   "U+1E00-1EFF": "Latin Extended Additional. Vietnamese, German captial sharp s, Medievalist, Latin general use.",
   "U+250-2AF": "International Phonetic Alphabet Extensions.",
   "U+370-3FF": "Greek and Coptic.",
   "U+1F00-1FFF": "Greek Extended. Accented characters for polytonic Greek.",
   "U+400-4FF": "Cyrillic.",
   "U+500-52F": "Cyrillic Supplement. Extra letters for Komi, Khanty, Chukchi, Mordvin, Kurdish, Aleut, Chuvash, Abkhaz, Azerbaijani, and Orok.",
   "U+00-52F, U+1E00-1FFF, U+2200–22FF": "Latin, Greek, Cyrillic, some punctuation and symbols.",
   "U+530–58F": "Armenian.",
   "U+590–5FF": "Hebrew.",
   "U+600–6FF": "Arabic.",
   "U+750–77F": "Arabic Supplement. Additional letters for African languages, Khowar, Torwali, Burushaski, and early Persian.",
   "U+8A0–8FF": "Arabic Extended-A. Additional letters for African languages, European and Central Asian languages, Rohingya, Tamazight, Arwi, and Koranic annotation signs.",
   "U+700–74F": "Syriac.",
   "U+900–97F": "Devanagari.",
   "U+980–9FF": "Bengali.",
   "U+A00–A7F": "Gurmukhi.",
   "U+A80–AFF": "Gujarati.",
   "U+B00–B7F": "Oriya.",
   "U+B80–BFF": "Tamil.",
   "U+C00–C7F": "Telugu.",
   "U+C80–CFF": "Kannada.",
   "U+D00–D7F": "Malayalam.",
   "U+D80–DFF": "Sinhala.",
   "U+118A0–118FF": "Warang Citi.",
   "U+E00–E7F": "Thai.",
   "U+1A20–1AAF": "Tai Tham.",
   "U+AA80–AADF": "Tai Viet.",
   "U+E80–EFF": "Lao.",
   "U+F00–FFF": "Tibetan.",
   "U+1000–109F": "Myanmar (Burmese).",
   "U+10A0–10FF": "Georgian.",
   "U+1200–137F": "Ethiopic.",
   "U+1380–139F": "Ethiopic Supplement. Extra Syllables for Sebatbeit, and Tonal marks",
   "U+2D80–2DDF": "Ethiopic Extended. Extra Syllables for Me'en, Blin, and Sebatbeit.",
   "U+AB00–AB2F": "Ethiopic Extended-A. Extra characters for Gamo-Gofa-Dawro, Basketo, and Gumuz.",
   "U+1780–17FF": "Khmer.",
   "U+1800–18AF": "Mongolian.",
   "U+1B80–1BBF": "Sundanese.",
   "U+1CC0–1CCF": "Sundanese Supplement. Punctuation.",
   "U+4E00–9FD5": "CJK (Chinese, Japanese, Korean) Unified Ideographs. Most common ideographs for modern Chinese and Japanese.",
   "U+3400–4DB5": "CJK Unified Ideographs Extension A. Rare ideographs.",
   "U+2F00–2FDF": "Kangxi Radicals.",
   "U+2E80–2EFF": "CJK Radicals Supplement. Alternative forms of Kangxi Radicals.",
   "U+1100–11FF": "Hangul Jamo.",
   "U+AC00–D7AF": "Hangul Syllables.",
   "U+3040–309F": "Hiragana.",
   "U+30A0–30FF": "Katakana.",
   "U+A5, U+4E00-9FFF, U+30??, U+FF00-FF9F": "Japanese Kanji, Hiragana and Katakana characters plus Yen/Yuan symbol.",
   "U+A4D0–A4FF": "Lisu.",
   "U+A000–A48F": "Yi Syllables.",
   "U+A490–A4CF": "Yi Radicals.",
   "U+2000-206F": "General Punctuation.",
   "U+3000–303F": "CJK Symbols and Punctuation.",
   "U+2070–209F": "Superscripts and Subscripts.",
   "U+20A0–20CF": "Currency Symbols.",
   "U+2100–214F": "Letterlike Symbols.",
   "U+2150–218F": "Number Forms.",
   "U+2190–21FF": "Arrows.",
   "U+2200–22FF": "Mathematical Operators.",
   "U+2300–23FF": "Miscellaneous Technical.",
   "U+E000-F8FF": "Private Use Area.",
   "U+FB00–FB4F": "Alphabetic Presentation Forms. Ligatures for latin, Armenian, and Hebrew.",
   "U+FB50–FDFF": "Arabic Presentation Forms-A. Contextual forms / ligatures for Persian, Urdu, Sindhi, Central Asian languages, etc, Arabic pedagogical symbols, word ligatures.",
   "U+1F600–1F64F": "Emoji: Emoticons.",
   "U+2600–26FF": "Emoji: Miscellaneous Symbols.",
   "U+1F300–1F5FF": "Emoji: Miscellaneous Symbols and Pictographs.",
   "U+1F900–1F9FF": "Emoji: Supplemental Symbols and Pictographs.",
   "U+1F680–1F6FF": "Emoji: Transport and Map Symbols.",
   "text-bottom": "Align the bottom of the box with the after-edge of the parent element's font.",
   "text-top": "Align the top of the box with the before-edge of the parent element's font.",
   break: "If the content fits within the CSS Region, then this property has no effect.",
   pre: "Sets 'white-space-collapsing' to 'preserve' and 'text-wrap' to 'none'.",
   "pre-line": "Sets 'white-space-collapsing' to 'preserve-breaks' and 'text-wrap' to 'normal'.",
   "pre-wrap": "Sets 'white-space-collapsing' to 'preserve' and 'text-wrap' to 'normal'.",
   "scroll-position": "Indicates that the author expects to animate or change the scroll position of the element in the near future.",
   "horizontal-tb": "Top-to-bottom block flow direction. The writing mode is horizontal.",
   "sideways-lr": "Left-to-right block flow direction. The writing mode is vertical, while the typographic mode is horizontal.",
   "sideways-rl": "Right-to-left block flow direction. The writing mode is vertical, while the typographic mode is horizontal.",
   "vertical-lr": "Left-to-right block flow direction. The writing mode is vertical.",
   "vertical-rl": "Right-to-left block flow direction. The writing mode is vertical."
  };
  var ut = ot["loadMessageBundle"]();
  var pt = {
   aliceblue: "#f0f8ff",
   antiquewhite: "#faebd7",
   aqua: "#00ffff",
   aquamarine: "#7fffd4",
   azure: "#f0ffff",
   beige: "#f5f5dc",
   bisque: "#ffe4c4",
   black: "#000000",
   blanchedalmond: "#ffebcd",
   blue: "#0000ff",
   blueviolet: "#8a2be2",
   brown: "#a52a2a",
   burlywood: "#deb887",
   cadetblue: "#5f9ea0",
   chartreuse: "#7fff00",
   chocolate: "#d2691e",
   coral: "#ff7f50",
   cornflowerblue: "#6495ed",
   cornsilk: "#fff8dc",
   crimson: "#dc143c",
   cyan: "#00ffff",
   darkblue: "#00008b",
   darkcyan: "#008b8b",
   darkgoldenrod: "#b8860b",
   darkgray: "#a9a9a9",
   darkgrey: "#a9a9a9",
   darkgreen: "#006400",
   darkkhaki: "#bdb76b",
   darkmagenta: "#8b008b",
   darkolivegreen: "#556b2f",
   darkorange: "#ff8c00",
   darkorchid: "#9932cc",
   darkred: "#8b0000",
   darksalmon: "#e9967a",
   darkseagreen: "#8fbc8f",
   darkslateblue: "#483d8b",
   darkslategray: "#2f4f4f",
   darkslategrey: "#2f4f4f",
   darkturquoise: "#00ced1",
   darkviolet: "#9400d3",
   deeppink: "#ff1493",
   deepskyblue: "#00bfff",
   dimgray: "#696969",
   dimgrey: "#696969",
   dodgerblue: "#1e90ff",
   firebrick: "#b22222",
   floralwhite: "#fffaf0",
   forestgreen: "#228b22",
   fuchsia: "#ff00ff",
   gainsboro: "#dcdcdc",
   ghostwhite: "#f8f8ff",
   gold: "#ffd700",
   goldenrod: "#daa520",
   gray: "#808080",
   grey: "#808080",
   green: "#008000",
   greenyellow: "#adff2f",
   honeydew: "#f0fff0",
   hotpink: "#ff69b4",
   indianred: "#cd5c5c",
   indigo: "#4b0082",
   ivory: "#fffff0",
   khaki: "#f0e68c",
   lavender: "#e6e6fa",
   lavenderblush: "#fff0f5",
   lawngreen: "#7cfc00",
   lemonchiffon: "#fffacd",
   lightblue: "#add8e6",
   lightcoral: "#f08080",
   lightcyan: "#e0ffff",
   lightgoldenrodyellow: "#fafad2",
   lightgray: "#d3d3d3",
   lightgrey: "#d3d3d3",
   lightgreen: "#90ee90",
   lightpink: "#ffb6c1",
   lightsalmon: "#ffa07a",
   lightseagreen: "#20b2aa",
   lightskyblue: "#87cefa",
   lightslategray: "#778899",
   lightslategrey: "#778899",
   lightsteelblue: "#b0c4de",
   lightyellow: "#ffffe0",
   lime: "#00ff00",
   limegreen: "#32cd32",
   linen: "#faf0e6",
   magenta: "#ff00ff",
   maroon: "#800000",
   mediumaquamarine: "#66cdaa",
   mediumblue: "#0000cd",
   mediumorchid: "#ba55d3",
   mediumpurple: "#9370d8",
   mediumseagreen: "#3cb371",
   mediumslateblue: "#7b68ee",
   mediumspringgreen: "#00fa9a",
   mediumturquoise: "#48d1cc",
   mediumvioletred: "#c71585",
   midnightblue: "#191970",
   mintcream: "#f5fffa",
   mistyrose: "#ffe4e1",
   moccasin: "#ffe4b5",
   navajowhite: "#ffdead",
   navy: "#000080",
   oldlace: "#fdf5e6",
   olive: "#808000",
   olivedrab: "#6b8e23",
   orange: "#ffa500",
   orangered: "#ff4500",
   orchid: "#da70d6",
   palegoldenrod: "#eee8aa",
   palegreen: "#98fb98",
   paleturquoise: "#afeeee",
   palevioletred: "#d87093",
   papayawhip: "#ffefd5",
   peachpuff: "#ffdab9",
   peru: "#cd853f",
   pink: "#ffc0cb",
   plum: "#dda0dd",
   powderblue: "#b0e0e6",
   purple: "#800080",
   red: "#ff0000",
   rebeccapurple: "#663399",
   rosybrown: "#bc8f8f",
   royalblue: "#4169e1",
   saddlebrown: "#8b4513",
   salmon: "#fa8072",
   sandybrown: "#f4a460",
   seagreen: "#2e8b57",
   seashell: "#fff5ee",
   sienna: "#a0522d",
   silver: "#c0c0c0",
   skyblue: "#87ceeb",
   slateblue: "#6a5acd",
   slategray: "#708090",
   slategrey: "#708090",
   snow: "#fffafa",
   springgreen: "#00ff7f",
   steelblue: "#4682b4",
   tan: "#d2b48c",
   teal: "#008080",
   thistle: "#d8bfd8",
   tomato: "#ff6347",
   turquoise: "#40e0d0",
   violet: "#ee82ee",
   wheat: "#f5deb3",
   white: "#ffffff",
   whitesmoke: "#f5f5f5",
   yellow: "#ffff00",
   yellowgreen: "#9acd32"
  };
  var mt = {
   currentColor: "The value of the 'color' property. The computed value of the 'currentColor' keyword is the computed value of the 'color' property. If the 'currentColor' keyword is set on the 'color' property itself, it is treated as 'color:inherit' at parse time.",
   transparent: "Fully transparent. This keyword can be considered a shorthand for rgba(0,0,0,0) which is its computed value."
  };
  var ft = {
   bottom: "Computes to ‘100%’ for the vertical position if one or two values are given, otherwise specifies the bottom edge as the origin for the next offset.",
   center: "Computes to ‘50%’ (‘left 50%’) for the horizontal position if the horizontal position is not otherwise specified, or ‘50%’ (‘top 50%’) for the vertical position if it is.",
   left: "Computes to ‘0%’ for the horizontal position if one or two values are given, otherwise specifies the left edge as the origin for the next offset.",
   right: "Computes to ‘100%’ for the horizontal position if one or two values are given, otherwise specifies the right edge as the origin for the next offset.",
   top: "Computes to ‘0%’ for the vertical position if one or two values are given, otherwise specifies the top edge as the origin for the next offset."
  };
  var gt = {
   "no-repeat": "Placed once and not repeated in this direction.",
   repeat: "Repeated in this direction as often as needed to cover the background painting area.",
   "repeat-x": "Computes to ‘repeat no-repeat’.",
   "repeat-y": "Computes to ‘no-repeat repeat’.",
   round: "Repeated as often as will fit within the background positioning area. If it doesn’t fit a whole number of times, it is rescaled so that it does.",
   space: "Repeated as often as will fit within the background positioning area without being clipped and then the images are spaced out to fill the area."
  };
  var bt = {
   dashed: "A series of square-ended dashes.",
   dotted: "A series of round dots.",
   double: "Two parallel solid lines with some space between them.",
   groove: "Looks as if it were carved in the canvas.",
   hidden: "Same as ‘none’, but has different behavior in the border conflict resolution rules for border-collapsed tables.",
   inset: "Looks as if the content on the inside of the border is sunken into the canvas.",
   none: "No border. Color and width are ignored.",
   outset: "Looks as if the content on the inside of the border is coming out of the canvas.",
   ridge: "Looks as if it were coming out of the canvas.",
   solid: "A single line segment."
  };
  var yt = [ "medium", "thick", "thin" ];
  var vt = {
   "border-box": "The background is painted within (clipped to) the border box.",
   "content-box": "The background is painted within (clipped to) the content box.",
   "padding-box": "The background is painted within (clipped to) the padding box."
  };
  var wt = {
   "margin-box": "Uses the margin box as reference box.",
   "fill-box": "Uses the object bounding box as reference box.",
   "stroke-box": "Uses the stroke bounding box as reference box.",
   "view-box": "Uses the nearest SVG viewport as reference box."
  };
  var xt = {
   initial: "Represents the value specified as the property’s initial value.",
   inherit: "Represents the computed value of the property on the element’s parent.",
   unset: "Acts as either `inherit` or `initial`, depending on whether the property is inherited or not."
  };
  var kt = [ {
   func: "rgb($red, $green, $blue)",
   desc: ut("css.builtin.rgb", "Creates a Color from red, green, and blue values.")
  }, {
   func: "rgba($red, $green, $blue, $alpha)",
   desc: ut("css.builtin.rgba", "Creates a Color from red, green, blue, and alpha values.")
  }, {
   func: "hsl($hue, $saturation, $lightness)",
   desc: ut("css.builtin.hsl", "Creates a Color from hue, saturation, and lightness values.")
  }, {
   func: "hsla($hue, $saturation, $lightness, $alpha)",
   desc: ut("css.builtin.hsla", "Creates a Color from hue, saturation, lightness, and alpha values.")
  } ];
  var Ct = {
   "url()": "Reference an image file by URL",
   "image()": "Provide image fallbacks and annotations.",
   "-webkit-image-set()": "Provide multiple resolutions. Remember to use unprefixed image-set() in addition.",
   "image-set()": "Provide multiple resolutions of an image and let the UA decide which is most appropriate in a given situation.",
   "-moz-element()": "Use an element in the document as an image. Remember to use unprefixed element() in addition.",
   "element()": "Use an element in the document as an image.",
   "cross-fade()": "Indicates the two images to be combined and how far along in the transition the combination is.",
   "-webkit-gradient()": "Deprecated. Use modern linear-gradient() or radial-gradient() instead.",
   "-webkit-linear-gradient()": "Linear gradient. Remember to use unprefixed version in addition.",
   "-moz-linear-gradient()": "Linear gradient. Remember to use unprefixed version in addition.",
   "-o-linear-gradient()": "Linear gradient. Remember to use unprefixed version in addition.",
   "linear-gradient()": "A linear gradient is created by specifying a straight gradient line, and then several colors placed along that line.",
   "-webkit-repeating-linear-gradient()": "Repeating Linear gradient. Remember to use unprefixed version in addition.",
   "-moz-repeating-linear-gradient()": "Repeating Linear gradient. Remember to use unprefixed version in addition.",
   "-o-repeating-linear-gradient()": "RepeatingLinear gradient. Remember to use unprefixed version in addition.",
   "repeating-linear-gradient()": "Same as linear-gradient, except the color-stops are repeated infinitely in both directions, with their positions shifted by multiples of the difference between the last specified color-stop’s position and the first specified color-stop’s position.",
   "-webkit-radial-gradient()": "Radial gradient. Remember to use unprefixed version in addition.",
   "-moz-radial-gradient()": "Radial gradient. Remember to use unprefixed version in addition.",
   "radial-gradient()": "Colors emerge from a single point and smoothly spread outward in a circular or elliptical shape.",
   "-webkit-repeating-radial-gradient()": "Repeating radial gradient. Remember to use unprefixed version in addition.",
   "-moz-repeating-radial-gradient()": "Repeating radial gradient. Remember to use unprefixed version in addition.",
   "repeating-radial-gradient()": "Same as radial-gradient, except the color-stops are repeated infinitely in both directions, with their positions shifted by multiples of the difference between the last specified color-stop’s position and the first specified color-stop’s position."
  };
  var St = {
   ease: "Equivalent to cubic-bezier(0.25, 0.1, 0.25, 1.0).",
   "ease-in": "Equivalent to cubic-bezier(0.42, 0, 1.0, 1.0).",
   "ease-in-out": "Equivalent to cubic-bezier(0.42, 0, 0.58, 1.0).",
   "ease-out": "Equivalent to cubic-bezier(0, 0, 0.58, 1.0).",
   linear: "Equivalent to cubic-bezier(0.0, 0.0, 1.0, 1.0).",
   "step-end": "Equivalent to steps(1, end).",
   "step-start": "Equivalent to steps(1, start).",
   "steps()": "The first parameter specifies the number of intervals in the function. The second parameter, which is optional, is either the value “start” or “end”.",
   "cubic-bezier()": "Specifies a cubic-bezier curve. The four values specify points P1 and P2  of the curve as (x1, y1, x2, y2).",
   "cubic-bezier(0.6, -0.28, 0.735, 0.045)": "Ease-in Back. Overshoots.",
   "cubic-bezier(0.68, -0.55, 0.265, 1.55)": "Ease-in-out Back. Overshoots.",
   "cubic-bezier(0.175, 0.885, 0.32, 1.275)": "Ease-out Back. Overshoots.",
   "cubic-bezier(0.6, 0.04, 0.98, 0.335)": "Ease-in Circular. Based on half circle.",
   "cubic-bezier(0.785, 0.135, 0.15, 0.86)": "Ease-in-out Circular. Based on half circle.",
   "cubic-bezier(0.075, 0.82, 0.165, 1)": "Ease-out Circular. Based on half circle.",
   "cubic-bezier(0.55, 0.055, 0.675, 0.19)": "Ease-in Cubic. Based on power of three.",
   "cubic-bezier(0.645, 0.045, 0.355, 1)": "Ease-in-out Cubic. Based on power of three.",
   "cubic-bezier(0.215, 0.610, 0.355, 1)": "Ease-out Cubic. Based on power of three.",
   "cubic-bezier(0.95, 0.05, 0.795, 0.035)": "Ease-in Exponential. Based on two to the power ten.",
   "cubic-bezier(1, 0, 0, 1)": "Ease-in-out Exponential. Based on two to the power ten.",
   "cubic-bezier(0.19, 1, 0.22, 1)": "Ease-out Exponential. Based on two to the power ten.",
   "cubic-bezier(0.47, 0, 0.745, 0.715)": "Ease-in Sine.",
   "cubic-bezier(0.445, 0.05, 0.55, 0.95)": "Ease-in-out Sine.",
   "cubic-bezier(0.39, 0.575, 0.565, 1)": "Ease-out Sine.",
   "cubic-bezier(0.55, 0.085, 0.68, 0.53)": "Ease-in Quadratic. Based on power of two.",
   "cubic-bezier(0.455, 0.03, 0.515, 0.955)": "Ease-in-out Quadratic. Based on power of two.",
   "cubic-bezier(0.25, 0.46, 0.45, 0.94)": "Ease-out Quadratic. Based on power of two.",
   "cubic-bezier(0.895, 0.03, 0.685, 0.22)": "Ease-in Quartic. Based on power of four.",
   "cubic-bezier(0.77, 0, 0.175, 1)": "Ease-in-out Quartic. Based on power of four.",
   "cubic-bezier(0.165, 0.84, 0.44, 1)": "Ease-out Quartic. Based on power of four.",
   "cubic-bezier(0.755, 0.05, 0.855, 0.06)": "Ease-in Quintic. Based on power of five.",
   "cubic-bezier(0.86, 0, 0.07, 1)": "Ease-in-out Quintic. Based on power of five.",
   "cubic-bezier(0.23, 1, 0.320, 1)": "Ease-out Quintic. Based on power of five."
  };
  var Ft = {
   "circle()": "Defines a circle.",
   "ellipse()": "Defines an ellipse.",
   "inset()": "Defines an inset rectangle.",
   "polygon()": "Defines a polygon."
  };
  var Et = {
   length: [ "em", "rem", "ex", "px", "cm", "mm", "in", "pt", "pc", "ch", "vw", "vh", "vmin", "vmax" ],
   angle: [ "deg", "rad", "grad", "turn" ],
   time: [ "ms", "s" ],
   frequency: [ "Hz", "kHz" ],
   resolution: [ "dpi", "dpcm", "dppx" ],
   percentage: [ "%", "fr" ]
  };
  var Tt = [ "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "let", "video", "wbr" ];
  var It = [ "circle", "clipPath", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "hatch", "hatchpath", "image", "line", "linearGradient", "marker", "mask", "mesh", "meshpatch", "meshrow", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "solidcolor", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use", "view" ];
  function _t(e) {
   var t = e.getName();
   if (!t) {
    return false;
   }
   return /^(rgb|rgba|hsl|hsla)$/gi.test(t);
  }
  function Rt(e) {
   if (e.type === X.HexColorValue) {
    return true;
   } else if (e.type === X.Function) {
    return _t(e);
   } else if (e.type === X.Identifier) {
    if (e.parent && e.parent.type !== X.Term) {
     return false;
    }
    var t = e.getText().toLowerCase();
    if (t === "none") {
     return false;
    }
    if (pt[t]) {
     return true;
    }
   }
   return false;
  }
  var Pt = 48;
  var Dt = 57;
  var At = 65;
  var Ot = 70;
  var zt = 97;
  var Nt = 102;
  function Mt(e) {
   if (e < Pt) {
    return 0;
   }
   if (e <= Dt) {
    return e - Pt;
   }
   if (e < zt) {
    e += zt - At;
   }
   if (e >= zt && e <= Nt) {
    return e - zt + 10;
   }
   return 0;
  }
  function Ut(e) {
   if (e[0] !== "#") {
    return null;
   }
   switch (e.length) {
   case 4:
    return {
     red: Mt(e.charCodeAt(1)) * 17 / 255,
     green: Mt(e.charCodeAt(2)) * 17 / 255,
     blue: Mt(e.charCodeAt(3)) * 17 / 255,
     alpha: 1
    };

   case 5:
    return {
     red: Mt(e.charCodeAt(1)) * 17 / 255,
     green: Mt(e.charCodeAt(2)) * 17 / 255,
     blue: Mt(e.charCodeAt(3)) * 17 / 255,
     alpha: Mt(e.charCodeAt(4)) * 17 / 255
    };

   case 7:
    return {
     red: (Mt(e.charCodeAt(1)) * 16 + Mt(e.charCodeAt(2))) / 255,
     green: (Mt(e.charCodeAt(3)) * 16 + Mt(e.charCodeAt(4))) / 255,
     blue: (Mt(e.charCodeAt(5)) * 16 + Mt(e.charCodeAt(6))) / 255,
     alpha: 1
    };

   case 9:
    return {
     red: (Mt(e.charCodeAt(1)) * 16 + Mt(e.charCodeAt(2))) / 255,
     green: (Mt(e.charCodeAt(3)) * 16 + Mt(e.charCodeAt(4))) / 255,
     blue: (Mt(e.charCodeAt(5)) * 16 + Mt(e.charCodeAt(6))) / 255,
     alpha: (Mt(e.charCodeAt(7)) * 16 + Mt(e.charCodeAt(8))) / 255
    };
   }
   return null;
  }
  function qt(e, t, n, r) {
   if (r === void 0) {
    r = 1;
   }
   return {
    red: e / 255,
    green: t / 255,
    blue: n / 255,
    alpha: r
   };
  }
  function jt(e, t, n, r) {
   if (r === void 0) {
    r = 1;
   }
   e = e / 60;
   if (t === 0) {
    return {
     red: n,
     green: n,
     blue: n,
     alpha: r
    };
   } else {
    var i = function(e, t, n) {
     while (n < 0) {
      n += 6;
     }
     while (n >= 6) {
      n -= 6;
     }
     if (n < 1) {
      return (t - e) * n + e;
     }
     if (n < 3) {
      return t;
     }
     if (n < 4) {
      return (t - e) * (4 - n) + e;
     }
     return e;
    };
    var a = n <= .5 ? n * (t + 1) : n + t - n * t;
    var o = n * 2 - a;
    return {
     red: i(o, a, e + 2),
     green: i(o, a, e),
     blue: i(o, a, e - 2),
     alpha: r
    };
   }
  }
  function Lt(e) {
   var t = e.red;
   var n = e.green;
   var r = e.blue;
   var i = e.alpha;
   var a = Math.max(t, n, r);
   var o = Math.min(t, n, r);
   var s = 0;
   var l = 0;
   var c = (o + a) / 2;
   var h = a - o;
   if (h > 0) {
    l = Math.min(c <= .5 ? h / (2 * c) : h / (2 - 2 * c), 1);
    switch (a) {
    case t:
     s = (n - r) / h + (n < r ? 6 : 0);
     break;

    case n:
     s = (r - t) / h + 2;
     break;

    case r:
     s = (t - n) / h + 4;
     break;
    }
    s *= 60;
    s = Math.round(s);
   }
   return {
    h: s,
    s: l,
    l: c,
    a: i
   };
  }
  function Vt(e) {
   if (e.type === X.HexColorValue) {
    var t = e.getText();
    return Ut(t);
   } else if (e.type === X.Function) {
    var n = e;
    var r = n.getName();
    var i = n.getArguments().getChildren();
    if (!r || i.length < 3 || i.length > 4) {
     return null;
    }
    try {
     var a = i.length === 4 ? Bt(i[3], 1) : 1;
     if (r === "rgb" || r === "rgba") {
      return {
       red: Bt(i[0], 255),
       green: Bt(i[1], 255),
       blue: Bt(i[2], 255),
       alpha: a
      };
     } else if (r === "hsl" || r === "hsla") {
      var o = Wt(i[0]);
      var s = Bt(i[1], 100);
      var l = Bt(i[2], 100);
      return jt(o, s, l, a);
     }
    } catch (e) {
     return null;
    }
   } else if (e.type === X.Identifier) {
    if (e.parent && e.parent.type !== X.Term) {
     return null;
    }
    var c = e.parent;
    if (c.parent && c.parent.type === X.BinaryExpression) {
     var h = c.parent;
     if (h.parent && h.parent.type === X.ListEntry && h.parent.key === h) {
      return null;
     }
    }
    var d = e.getText().toLowerCase();
    if (d === "none") {
     return null;
    }
    var u = pt[d];
    if (u) {
     return Ut(u);
    }
   }
   return null;
  }
  function Bt(e, t) {
   var n = e.getText();
   var r = n.match(/^([-+]?[0-9]*\.?[0-9]+)(%?)$/);
   if (r) {
    if (r[2]) {
     t = 100;
    }
    var i = parseFloat(r[1]) / t;
    if (i >= 0 && i <= 1) {
     return i;
    }
   }
   throw new Error();
  }
  function Wt(e) {
   var t = e.getText();
   var n = t.match(/^([-+]?[0-9]*\.?[0-9]+)(deg)?$/);
   if (n) {
    return parseFloat(t) % 360;
   }
   throw new Error();
  }
  function Kt(e) {
   if (!e) {
    return false;
   } else {
    e = e.toLowerCase();
    return an().hasOwnProperty(e);
   }
  }
  function $t(e) {
   if (!e) {
    return false;
   } else {
    e = e.toLowerCase();
    var t = an()[e];
    return t && t.status === "standard";
   }
  }
  function Gt(e) {
   return e.browsers.count > 1;
  }
  function Ht() {
   return [ "@bottom-center", "@bottom-left", "@bottom-left-corner", "@bottom-right", "@bottom-right-corner", "@left-bottom", "@left-middle", "@left-top", "@right-bottom", "@right-middle", "@right-top", "@top-center", "@top-left", "@top-left-corner", "@top-right", "@top-right-corner" ];
  }
  function Jt(e) {
   if (!e.description || e.description === "") {
    return null;
   }
   var t = "";
   if (e.data && e.data.status) {
    t += Yt(e.data.status);
   }
   t += e.description;
   var n = Qt(e.browsers);
   if (n) {
    t += "\n(" + n + ")";
   }
   if (e.data && e.data.syntax) {
    t += "\n\nSyntax: " + e.data.syntax;
   }
   return t;
  }
  function Xt(e) {
   switch (e) {
   case "e":
    return "experimental";

   case "n":
    return "nonstandard";

   case "o":
    return "obsolete";

   default:
    return "standard";
   }
  }
  function Yt(e) {
   switch (e) {
   case "e":
    return "⚠️ Property is experimental. Be cautious when using it.️\n\n";

   case "n":
    return "🚨️ Property is nonstandard. Avoid using it.\n\n";

   case "o":
    return "🚨️️️ Property is obsolete. Avoid using it.\n\n";

   default:
    return "";
   }
  }
  function Qt(e) {
   var t = "";
   if (!e || e.all || e.count === 0) {
    return null;
   }
   for (var n in fn) {
    if (typeof e[n] === "string") {
     if (t.length > 0) {
      t = t + ", ";
     }
     t = t + fn[n];
     var r = e[n];
     if (r.length > 0) {
      t = t + " " + r;
     }
    }
   }
   return t;
  }
  function Zt(e) {
   var t = {
    all: false,
    count: 0,
    onCodeComplete: false
   };
   var n = 0;
   if (e) {
    for (var r = 0, i = e.split(","); r < i.length; r++) {
     var a = i[r];
     a = a.trim();
     if (a === "all") {
      t.all = true;
      n = Number.MAX_VALUE;
     } else if (a !== "none") {
      for (var o in fn) {
       if (a.indexOf(o) === 0) {
        t[o] = a.substring(o.length).trim();
        n++;
       }
      }
     }
    }
   } else {
    t.all = true;
    n = Number.MAX_VALUE;
   }
   t.count = n;
   t.onCodeComplete = n > 0;
   return t;
  }
  var en = function() {
   function e(e) {
    this.data = e;
   }
   Object.defineProperty(e.prototype, "name", {
    get: function() {
     return this.data.name;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "description", {
    get: function() {
     return this.data.desc || dt[this.data.name];
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "browsers", {
    get: function() {
     if (!this.browserEntry) {
      this.browserEntry = Zt(this.data.browsers);
     }
     return this.browserEntry;
    },
    enumerable: true,
    configurable: true
   });
   return e;
  }();
  var tn = function() {
   function e(e) {
    this.data = e;
   }
   Object.defineProperty(e.prototype, "name", {
    get: function() {
     return this.data.name;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "description", {
    get: function() {
     return this.data.desc || dt[this.data.name];
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "browsers", {
    get: function() {
     if (!this.browserEntry) {
      this.browserEntry = Zt(this.data.browsers);
     }
     return this.browserEntry;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "restrictions", {
    get: function() {
     if (this.data.restriction) {
      return this.data.restriction.split(",").map(function(e) {
       return e.trim();
      });
     } else {
      return [];
     }
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "status", {
    get: function() {
     return Xt(this.data.status);
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "values", {
    get: function() {
     if (!this.data.values) {
      return [];
     }
     if (!Array.isArray(this.data.values)) {
      return [ new en(this.data.values.value) ];
     }
     return this.data.values.map(function(e) {
      return new en(e);
     });
    },
    enumerable: true,
    configurable: true
   });
   return e;
  }();
  var nn;
  var rn = ht.css.properties;
  function an() {
   if (!nn) {
    nn = {};
    for (var e = 0; e < rn.length; e++) {
     var t = rn[e];
     nn[t.name] = new tn(t);
    }
   }
   return nn;
  }
  var on = ht.css.atdirectives;
  var sn;
  function ln() {
   if (!sn) {
    sn = [];
    for (var e = 0; e < on.length; e++) {
     var t = on[e];
     sn.push(new tn(t));
    }
   }
   return sn;
  }
  var cn = ht.css.pseudoelements;
  var hn;
  function dn() {
   if (!hn) {
    hn = [];
    for (var e = 0; e < cn.length; e++) {
     var t = cn[e];
     hn.push(new tn(t));
    }
   }
   return hn;
  }
  var un = ht.css.pseudoclasses;
  var pn;
  function mn() {
   if (!pn) {
    pn = [];
    for (var e = 0; e < un.length; e++) {
     var t = un[e];
     pn.push(new tn(t));
    }
   }
   return pn;
  }
  var fn = {
   E: "Edge",
   FF: "Firefox",
   S: "Safari",
   C: "Chrome",
   IE: "IE",
   O: "Opera"
  };
  var gn = function() {
   function e(e) {
    if (e === void 0) {
     e = new H();
    }
    this.keyframeRegex = /^@(\-(webkit|ms|moz|o)\-)?keyframes$/i;
    this.scanner = e;
    this.token = null;
    this.prevToken = null;
   }
   e.prototype.peekIdent = function(e) {
    return r.Ident === this.token.type && e.length === this.token.text.length && e === this.token.text.toLowerCase();
   };
   e.prototype.peekKeyword = function(e) {
    return r.AtKeyword === this.token.type && e.length === this.token.text.length && e === this.token.text.toLowerCase();
   };
   e.prototype.peekDelim = function(e) {
    return r.Delim === this.token.type && e === this.token.text;
   };
   e.prototype.peek = function(e) {
    return e === this.token.type;
   };
   e.prototype.peekRegExp = function(e, t) {
    if (e !== this.token.type) {
     return false;
    }
    return t.test(this.token.text);
   };
   e.prototype.hasWhitespace = function() {
    return this.prevToken && this.prevToken.offset + this.prevToken.len !== this.token.offset;
   };
   e.prototype.consumeToken = function() {
    this.prevToken = this.token;
    this.token = this.scanner.scan();
   };
   e.prototype.mark = function() {
    return {
     prev: this.prevToken,
     curr: this.token,
     pos: this.scanner.pos()
    };
   };
   e.prototype.restoreAtMark = function(e) {
    this.prevToken = e.prev;
    this.token = e.curr;
    this.scanner.goBackTo(e.pos);
   };
   e.prototype.try = function(e) {
    var t = this.mark();
    var n = e();
    if (!n) {
     this.restoreAtMark(t);
     return null;
    }
    return n;
   };
   e.prototype.acceptOneKeyword = function(e) {
    if (r.AtKeyword === this.token.type) {
     for (var t = 0, n = e; t < n.length; t++) {
      var i = n[t];
      if (i.length === this.token.text.length && i === this.token.text.toLowerCase()) {
       this.consumeToken();
       return true;
      }
     }
    }
    return false;
   };
   e.prototype.accept = function(e) {
    if (e === this.token.type) {
     this.consumeToken();
     return true;
    }
    return false;
   };
   e.prototype.acceptIdent = function(e) {
    if (this.peekIdent(e)) {
     this.consumeToken();
     return true;
    }
    return false;
   };
   e.prototype.acceptKeyword = function(e) {
    if (this.peekKeyword(e)) {
     this.consumeToken();
     return true;
    }
    return false;
   };
   e.prototype.acceptDelim = function(e) {
    if (this.peekDelim(e)) {
     this.consumeToken();
     return true;
    }
    return false;
   };
   e.prototype.acceptUnquotedString = function() {
    var e = this.scanner.pos();
    this.scanner.goBackTo(this.token.offset);
    var t = this.scanner.scanUnquotedString();
    if (t) {
     this.token = t;
     this.consumeToken();
     return true;
    }
    this.scanner.goBackTo(e);
    return false;
   };
   e.prototype.resync = function(e, t) {
    while (true) {
     if (e && e.indexOf(this.token.type) !== -1) {
      this.consumeToken();
      return true;
     } else if (t && t.indexOf(this.token.type) !== -1) {
      return true;
     } else {
      if (this.token.type === r.EOF) {
       return false;
      }
      this.token = this.scanner.scan();
     }
    }
   };
   e.prototype.createNode = function(e) {
    return new te(this.token.offset, this.token.len, e);
   };
   e.prototype.create = function(e) {
    var t = Object.create(e.prototype);
    e.apply(t, [ this.token.offset, this.token.len ]);
    return t;
   };
   e.prototype.finish = function(e, t, n, r) {
    if (!(e instanceof ne)) {
     if (t) {
      this.markError(e, t, n, r);
     }
     if (this.prevToken !== null) {
      var i = this.prevToken.offset + this.prevToken.len;
      e.length = i > e.offset ? i - e.offset : 0;
     }
    }
    return e;
   };
   e.prototype.markError = function(e, t, n, r) {
    if (this.token !== this.lastErrorToken) {
     e.addIssue(new it(e, t, rt.Error, null, this.token.offset, this.token.len));
     this.lastErrorToken = this.token;
    }
    if (n || r) {
     this.resync(n, r);
    }
   };
   e.prototype.parseStylesheet = function(e) {
    var t = e.version;
    var n = function(n, r) {
     if (e.version !== t) {
      throw new Error("Underlying model has changed, AST is no longer valid");
     }
     return e.getText().substr(n, r);
    };
    return this.internalParse(e.getText(), this._parseStylesheet, n);
   };
   e.prototype.internalParse = function(e, t, n) {
    this.scanner.setSource(e);
    this.token = this.scanner.scan();
    var r = t.bind(this)();
    if (r) {
     if (n) {
      r.textProvider = n;
     } else {
      r.textProvider = function(t, n) {
       return e.substr(t, n);
      };
     }
    }
    return r;
   };
   e.prototype._parseStylesheet = function() {
    var e = this.create(ie);
    e.addChild(this._parseCharset());
    var t = false;
    do {
     var n = false;
     do {
      n = false;
      var i = this._parseStylesheetStatement();
      if (i) {
       e.addChild(i);
       n = true;
       t = false;
       if (!this.peek(r.EOF) && this._needsSemicolonAfter(i) && !this.accept(r.SemiColon)) {
        this.markError(e, ct.SemiColonExpected);
       }
      }
      while (this.accept(r.SemiColon) || this.accept(r.CDO) || this.accept(r.CDC)) {
       n = true;
       t = false;
      }
     } while (n);
     if (this.peek(r.EOF)) {
      break;
     }
     if (!t) {
      if (this.peek(r.AtKeyword)) {
       this.markError(e, ct.UnknownAtRule);
      } else {
       this.markError(e, ct.RuleOrSelectorExpected);
      }
      t = true;
     }
     this.consumeToken();
    } while (!this.peek(r.EOF));
    return this.finish(e);
   };
   e.prototype._parseStylesheetStatement = function() {
    if (this.peek(r.AtKeyword)) {
     return this._parseImport() || this._parseMedia() || this._parsePage() || this._parseFontFace() || this._parseKeyframe() || this._parseSupports() || this._parseViewPort() || this._parseNamespace() || this._parseDocument();
    }
    return this._parseRuleset(false);
   };
   e.prototype._tryParseRuleset = function(e) {
    var t = this.mark();
    if (this._parseSelector(e)) {
     while (this.accept(r.Comma) && this._parseSelector(e)) {}
     if (this.accept(r.CurlyL)) {
      this.restoreAtMark(t);
      return this._parseRuleset(e);
     }
    }
    this.restoreAtMark(t);
    return null;
   };
   e.prototype._parseRuleset = function(e) {
    if (e === void 0) {
     e = false;
    }
    var t = this.create(se);
    if (!t.getSelectors().addChild(this._parseSelector(e))) {
     return null;
    }
    while (this.accept(r.Comma) && t.getSelectors().addChild(this._parseSelector(e))) {}
    return this._parseBody(t, this._parseRuleSetDeclaration.bind(this));
   };
   e.prototype._parseRuleSetDeclaration = function() {
    return this._parseAtApply() || this._tryParseCustomPropertyDeclaration() || this._parseDeclaration();
   };
   e.prototype._parseAtApply = function() {
    if (!this.peekKeyword("@apply")) {
     return null;
    }
    var e = this.create(he);
    this.consumeToken();
    if (!e.setIdentifier(this._parseIdent([ Y.Variable ]))) {
     return this.finish(e, ct.IdentifierExpected);
    }
    return this.finish(e);
   };
   e.prototype._needsSemicolonAfter = function(e) {
    switch (e.type) {
    case X.Keyframe:
    case X.ViewPort:
    case X.Media:
    case X.Ruleset:
    case X.Namespace:
    case X.If:
    case X.For:
    case X.Each:
    case X.While:
    case X.MixinDeclaration:
    case X.FunctionDeclaration:
     return false;

    case X.VariableDeclaration:
    case X.ExtendsReference:
    case X.MixinContent:
    case X.ReturnStatement:
    case X.MediaQuery:
    case X.Debug:
    case X.Import:
    case X.AtApplyRule:
    case X.CustomPropertyDeclaration:
     return true;

    case X.MixinReference:
     return !e.getContent();

    case X.Declaration:
     return !e.getNestedProperties();
    }
    return false;
   };
   e.prototype._parseDeclarations = function(e) {
    var t = this.create(ae);
    if (!this.accept(r.CurlyL)) {
     return null;
    }
    var n = e();
    while (t.addChild(n)) {
     if (this.peek(r.CurlyR)) {
      break;
     }
     if (this._needsSemicolonAfter(n) && !this.accept(r.SemiColon)) {
      return this.finish(t, ct.SemiColonExpected, [ r.SemiColon, r.CurlyR ]);
     }
     while (this.accept(r.SemiColon)) {}
     n = e();
    }
    if (!this.accept(r.CurlyR)) {
     return this.finish(t, ct.RightCurlyExpected, [ r.CurlyR, r.SemiColon ]);
    }
    return this.finish(t);
   };
   e.prototype._parseBody = function(e, t) {
    if (!e.setDeclarations(this._parseDeclarations(t))) {
     return this.finish(e, ct.LeftCurlyExpected, [ r.CurlyR, r.SemiColon ]);
    }
    return this.finish(e);
   };
   e.prototype._parseSelector = function(e) {
    var t = this.create(le);
    var n = false;
    if (e) {
     n = t.addChild(this._parseCombinator());
    }
    while (t.addChild(this._parseSimpleSelector())) {
     n = true;
     t.addChild(this._parseCombinator());
    }
    return n ? this.finish(t) : null;
   };
   e.prototype._parseDeclaration = function(e) {
    var t = this.create(me);
    if (!t.setProperty(this._parseProperty())) {
     return null;
    }
    if (!this.accept(r.Colon)) {
     return this.finish(t, ct.ColonExpected, [ r.Colon ], e);
    }
    t.colonPosition = this.prevToken.offset;
    if (!t.setValue(this._parseExpr())) {
     return this.finish(t, ct.PropertyValueExpected);
    }
    t.addChild(this._parsePrio());
    if (this.peek(r.SemiColon)) {
     t.semicolonPosition = this.token.offset;
    }
    return this.finish(t);
   };
   e.prototype._tryParseCustomPropertyDeclaration = function() {
    if (!this.peekRegExp(r.Ident, /^--/)) {
     return null;
    }
    var e = this.create(ue);
    if (!e.setProperty(this._parseProperty())) {
     return null;
    }
    if (!this.accept(r.Colon)) {
     return this.finish(e, ct.ColonExpected, [ r.Colon ]);
    }
    e.colonPosition = this.prevToken.offset;
    var t = this.mark();
    if (this.peek(r.CurlyL)) {
     var n = this.create(pe);
     var i = this._parseDeclarations(this._parseRuleSetDeclaration.bind(this));
     if (n.setDeclarations(i) && !i.isErroneous(true)) {
      n.addChild(this._parsePrio());
      if (this.peek(r.SemiColon)) {
       this.finish(n);
       e.setPropertySet(n);
       e.semicolonPosition = this.token.offset;
       return this.finish(e);
      }
     }
     this.restoreAtMark(t);
    }
    var a = this._parseExpr();
    if (a && !a.isErroneous(true)) {
     this._parsePrio();
     if (this.peek(r.SemiColon)) {
      e.setValue(a);
      e.semicolonPosition = this.token.offset;
      return this.finish(e);
     }
    }
    this.restoreAtMark(t);
    e.addChild(this._parseCustomPropertyValue());
    e.addChild(this._parsePrio());
    if (this.token.offset === e.colonPosition + 1) {
     return this.finish(e, ct.PropertyValueExpected);
    }
    return this.finish(e);
   };
   e.prototype._parseCustomPropertyValue = function() {
    var e = this.create(te);
    var t = function() {
     return n === 0 && i === 0 && a === 0;
    };
    var n = 0;
    var i = 0;
    var a = 0;
    e: while (true) {
     switch (this.token.type) {
     case r.SemiColon:
      if (t()) {
       break e;
      }
      break;

     case r.Exclamation:
      if (t()) {
       break e;
      }
      break;

     case r.CurlyL:
      n++;
      break;

     case r.CurlyR:
      n--;
      if (n < 0) {
       if (i === 0 && a === 0) {
        break e;
       }
       return this.finish(e, ct.LeftCurlyExpected);
      }
      break;

     case r.ParenthesisL:
      i++;
      break;

     case r.ParenthesisR:
      i--;
      if (i < 0) {
       return this.finish(e, ct.LeftParenthesisExpected);
      }
      break;

     case r.BracketL:
      a++;
      break;

     case r.BracketR:
      a--;
      if (a < 0) {
       return this.finish(e, ct.LeftSquareBracketExpected);
      }
      break;

     case r.BadString:
      break e;

     case r.EOF:
      var o = ct.RightCurlyExpected;
      if (a > 0) {
       o = ct.RightSquareBracketExpected;
      } else if (i > 0) {
       o = ct.RightParenthesisExpected;
      }
      return this.finish(e, o);
     }
     this.consumeToken();
    }
    return this.finish(e);
   };
   e.prototype._tryToParseDeclaration = function() {
    var e = this.mark();
    if (this._parseProperty() && this.accept(r.Colon)) {
     this.restoreAtMark(e);
     return this._parseDeclaration();
    }
    this.restoreAtMark(e);
    return null;
   };
   e.prototype._parseProperty = function() {
    var e = this.create(fe);
    var t = this.mark();
    if (this.acceptDelim("*") || this.acceptDelim("_")) {
     if (this.hasWhitespace()) {
      this.restoreAtMark(t);
      return null;
     }
    }
    if (e.setIdentifier(this._parsePropertyIdentifier())) {
     return this.finish(e);
    }
    return null;
   };
   e.prototype._parsePropertyIdentifier = function() {
    return this._parseIdent();
   };
   e.prototype._parseCharset = function() {
    if (!this.peek(r.Charset)) {
     return null;
    }
    var e = this.create(te);
    this.consumeToken();
    if (!this.accept(r.String)) {
     return this.finish(e, ct.IdentifierExpected);
    }
    if (!this.accept(r.SemiColon)) {
     return this.finish(e, ct.SemiColonExpected);
    }
    return this.finish(e);
   };
   e.prototype._parseImport = function() {
    if (!this.peekKeyword("@import")) {
     return null;
    }
    var e = this.create(Pe);
    this.consumeToken();
    if (!e.addChild(this._parseURILiteral()) && !e.addChild(this._parseStringLiteral())) {
     return this.finish(e, ct.URIOrStringExpected);
    }
    if (!this.peek(r.SemiColon) && !this.peek(r.EOF)) {
     e.setMedialist(this._parseMediaQueryList());
    }
    return this.finish(e);
   };
   e.prototype._parseNamespace = function() {
    if (!this.peekKeyword("@namespace")) {
     return null;
    }
    var e = this.create(De);
    this.consumeToken();
    if (!e.addChild(this._parseURILiteral())) {
     e.addChild(this._parseIdent());
     if (!e.addChild(this._parseURILiteral()) && !e.addChild(this._parseStringLiteral())) {
      return this.finish(e, ct.URIExpected, [ r.SemiColon ]);
     }
    }
    if (!this.accept(r.SemiColon)) {
     return this.finish(e, ct.SemiColonExpected);
    }
    return this.finish(e);
   };
   e.prototype._parseFontFace = function() {
    if (!this.peekKeyword("@font-face")) {
     return null;
    }
    var e = this.create(Te);
    this.consumeToken();
    return this._parseBody(e, this._parseRuleSetDeclaration.bind(this));
   };
   e.prototype._parseViewPort = function() {
    if (!this.peekKeyword("@-ms-viewport") && !this.peekKeyword("@-o-viewport") && !this.peekKeyword("@viewport")) {
     return null;
    }
    var e = this.create(Ee);
    this.consumeToken();
    return this._parseBody(e, this._parseRuleSetDeclaration.bind(this));
   };
   e.prototype._parseKeyframe = function() {
    if (!this.peekRegExp(r.AtKeyword, this.keyframeRegex)) {
     return null;
    }
    var e = this.create(_e);
    var t = this.create(te);
    this.consumeToken();
    e.setKeyword(this.finish(t));
    if (t.getText() === "@-ms-keyframes") {
     this.markError(t, ct.UnknownKeyword);
    }
    if (!e.setIdentifier(this._parseKeyframeIdent())) {
     return this.finish(e, ct.IdentifierExpected, [ r.CurlyR ]);
    }
    return this._parseBody(e, this._parseKeyframeSelector.bind(this));
   };
   e.prototype._parseKeyframeIdent = function() {
    return this._parseIdent([ Y.Keyframe ]);
   };
   e.prototype._parseKeyframeSelector = function() {
    var e = this.create(Re);
    if (!e.addChild(this._parseIdent()) && !this.accept(r.Percentage)) {
     return null;
    }
    while (this.accept(r.Comma)) {
     if (!e.addChild(this._parseIdent()) && !this.accept(r.Percentage)) {
      return this.finish(e, ct.PercentageExpected);
     }
    }
    return this._parseBody(e, this._parseRuleSetDeclaration.bind(this));
   };
   e.prototype._tryParseKeyframeSelector = function() {
    var e = this.create(Re);
    var t = this.mark();
    if (!e.addChild(this._parseIdent()) && !this.accept(r.Percentage)) {
     return null;
    }
    while (this.accept(r.Comma)) {
     if (!e.addChild(this._parseIdent()) && !this.accept(r.Percentage)) {
      this.restoreAtMark(t);
      return null;
     }
    }
    if (!this.peek(r.CurlyL)) {
     this.restoreAtMark(t);
     return null;
    }
    return this._parseBody(e, this._parseRuleSetDeclaration.bind(this));
   };
   e.prototype._parseSupports = function(e) {
    if (e === void 0) {
     e = false;
    }
    if (!this.peekKeyword("@supports")) {
     return null;
    }
    var t = this.create(Oe);
    this.consumeToken();
    t.addChild(this._parseSupportsCondition());
    return this._parseBody(t, this._parseSupportsDeclaration.bind(this, e));
   };
   e.prototype._parseSupportsDeclaration = function(e) {
    if (e === void 0) {
     e = false;
    }
    if (e) {
     return this._tryParseRuleset(e) || this._tryToParseDeclaration() || this._parseStylesheetStatement();
    }
    return this._parseStylesheetStatement();
   };
   e.prototype._parseSupportsCondition = function() {
    var e = this.create(Ue);
    if (this.acceptIdent("not")) {
     e.addChild(this._parseSupportsConditionInParens());
    } else {
     e.addChild(this._parseSupportsConditionInParens());
     if (this.peekRegExp(r.Ident, /^(and|or)$/i)) {
      var t = this.token.text.toLowerCase();
      while (this.acceptIdent(t)) {
       e.addChild(this._parseSupportsConditionInParens());
      }
     }
    }
    return this.finish(e);
   };
   e.prototype._parseSupportsConditionInParens = function() {
    var e = this.create(Ue);
    if (this.accept(r.ParenthesisL)) {
     e.lParent = this.prevToken.offset;
     if (!e.addChild(this._tryToParseDeclaration())) {
      if (!this._parseSupportsCondition()) {
       return this.finish(e, ct.ConditionExpected);
      }
     }
     if (!this.accept(r.ParenthesisR)) {
      return this.finish(e, ct.RightParenthesisExpected, [ r.ParenthesisR ], []);
     }
     e.rParent = this.prevToken.offset;
     return this.finish(e);
    } else if (this.peek(r.Ident)) {
     var t = this.mark();
     this.consumeToken();
     if (!this.hasWhitespace() && this.accept(r.ParenthesisL)) {
      var n = 1;
      while (this.token.type !== r.EOF && n !== 0) {
       if (this.token.type === r.ParenthesisL) {
        n++;
       } else if (this.token.type === r.ParenthesisR) {
        n--;
       }
       this.consumeToken();
      }
      return this.finish(e);
     } else {
      this.restoreAtMark(t);
     }
    }
    return this.finish(e, ct.LeftParenthesisExpected, [], [ r.ParenthesisL ]);
   };
   e.prototype._parseMediaDeclaration = function(e) {
    if (e === void 0) {
     e = false;
    }
    return this._tryParseRuleset(e) || this._tryToParseDeclaration() || this._parseStylesheetStatement();
   };
   e.prototype._parseMedia = function(e) {
    if (e === void 0) {
     e = false;
    }
    if (!this.peekKeyword("@media")) {
     return null;
    }
    var t = this.create(Ae);
    this.consumeToken();
    if (!t.addChild(this._parseMediaQueryList())) {
     return this.finish(t, ct.MediaQueryExpected);
    }
    return this._parseBody(t, this._parseMediaDeclaration.bind(this, e));
   };
   e.prototype._parseMediaQueryList = function() {
    var e = this.create(Ne);
    if (!e.addChild(this._parseMediaQuery([ r.CurlyL ]))) {
     return this.finish(e, ct.MediaQueryExpected);
    }
    while (this.accept(r.Comma)) {
     if (!e.addChild(this._parseMediaQuery([ r.CurlyL ]))) {
      return this.finish(e, ct.MediaQueryExpected);
     }
    }
    return this.finish(e);
   };
   e.prototype._parseMediaQuery = function(e) {
    var t = this.create(Me);
    var n = true;
    var i = false;
    if (!this.peek(r.ParenthesisL)) {
     if (this.acceptIdent("only") || this.acceptIdent("not")) {}
     if (!t.addChild(this._parseIdent())) {
      return null;
     }
     i = true;
     n = this.acceptIdent("and");
    }
    while (n) {
     if (!this.accept(r.ParenthesisL)) {
      if (i) {
       return this.finish(t, ct.LeftParenthesisExpected, [], e);
      }
      return null;
     }
     if (!t.addChild(this._parseMediaFeatureName())) {
      return this.finish(t, ct.IdentifierExpected, [], e);
     }
     if (this.accept(r.Colon)) {
      if (!t.addChild(this._parseExpr())) {
       return this.finish(t, ct.TermExpected, [], e);
      }
     }
     if (!this.accept(r.ParenthesisR)) {
      return this.finish(t, ct.RightParenthesisExpected, [], e);
     }
     n = this.acceptIdent("and");
    }
    return this.finish(t);
   };
   e.prototype._parseMediaFeatureName = function() {
    return this._parseIdent();
   };
   e.prototype._parseMedium = function() {
    var e = this.create(te);
    if (e.addChild(this._parseIdent())) {
     return this.finish(e);
    } else {
     return null;
    }
   };
   e.prototype._parsePageDeclaration = function() {
    return this._parsePageMarginBox() || this._parseRuleSetDeclaration();
   };
   e.prototype._parsePage = function() {
    if (!this.peekKeyword("@page")) {
     return null;
    }
    var e = this.create(qe);
    this.consumeToken();
    if (e.addChild(this._parsePageSelector())) {
     while (this.accept(r.Comma)) {
      if (!e.addChild(this._parsePageSelector())) {
       return this.finish(e, ct.IdentifierExpected);
      }
     }
    }
    return this._parseBody(e, this._parsePageDeclaration.bind(this));
   };
   e.prototype._parsePageMarginBox = function() {
    if (!this.peek(r.AtKeyword)) {
     return null;
    }
    var e = this.create(je);
    if (!this.acceptOneKeyword(Ht())) {
     this.markError(e, ct.UnknownAtRule, [], [ r.CurlyL ]);
    }
    return this._parseBody(e, this._parseRuleSetDeclaration.bind(this));
   };
   e.prototype._parsePageSelector = function() {
    if (!this.peek(r.Ident) && !this.peek(r.Colon)) {
     return null;
    }
    var e = this.create(te);
    e.addChild(this._parseIdent());
    if (this.accept(r.Colon)) {
     if (!e.addChild(this._parseIdent())) {
      return this.finish(e, ct.IdentifierExpected);
     }
    }
    return this.finish(e);
   };
   e.prototype._parseDocument = function() {
    if (!this.peekKeyword("@-moz-document")) {
     return null;
    }
    var e = this.create(ze);
    this.consumeToken();
    this.resync([], [ r.CurlyL ]);
    return this._parseBody(e, this._parseStylesheetStatement.bind(this));
   };
   e.prototype._parseOperator = function() {
    if (this.peekDelim("/") || this.peekDelim("*") || this.peekDelim("+") || this.peekDelim("-") || this.peek(r.Dashmatch) || this.peek(r.Includes) || this.peek(r.SubstringOperator) || this.peek(r.PrefixOperator) || this.peek(r.SuffixOperator) || this.peekDelim("=")) {
     var e = this.createNode(X.Operator);
     this.consumeToken();
     return this.finish(e);
    } else {
     return null;
    }
   };
   e.prototype._parseUnaryOperator = function() {
    if (!this.peekDelim("+") && !this.peekDelim("-")) {
     return null;
    }
    var e = this.create(te);
    this.consumeToken();
    return this.finish(e);
   };
   e.prototype._parseCombinator = function() {
    if (this.peekDelim(">")) {
     var e = this.create(te);
     this.consumeToken();
     var t = this.mark();
     if (!this.hasWhitespace() && this.acceptDelim(">")) {
      if (!this.hasWhitespace() && this.acceptDelim(">")) {
       e.type = X.SelectorCombinatorShadowPiercingDescendant;
       return this.finish(e);
      }
      this.restoreAtMark(t);
     }
     e.type = X.SelectorCombinatorParent;
     return this.finish(e);
    } else if (this.peekDelim("+")) {
     var e = this.create(te);
     this.consumeToken();
     e.type = X.SelectorCombinatorSibling;
     return this.finish(e);
    } else if (this.peekDelim("~")) {
     var e = this.create(te);
     this.consumeToken();
     e.type = X.SelectorCombinatorAllSiblings;
     return this.finish(e);
    } else if (this.peekDelim("/")) {
     var e = this.create(te);
     this.consumeToken();
     var t = this.mark();
     if (!this.hasWhitespace() && this.acceptIdent("deep") && !this.hasWhitespace() && this.acceptDelim("/")) {
      e.type = X.SelectorCombinatorShadowPiercingDescendant;
      return this.finish(e);
     }
     this.restoreAtMark(t);
    } else {
     return null;
    }
   };
   e.prototype._parseSimpleSelector = function() {
    var e = this.create(ce);
    var t = 0;
    if (e.addChild(this._parseElementName())) {
     t++;
    }
    while ((t === 0 || !this.hasWhitespace()) && e.addChild(this._parseSimpleSelectorBody())) {
     t++;
    }
    return t > 0 ? this.finish(e) : null;
   };
   e.prototype._parseSimpleSelectorBody = function() {
    return this._parsePseudo() || this._parseHash() || this._parseClass() || this._parseAttrib();
   };
   e.prototype._parseSelectorIdent = function() {
    return this._parseIdent();
   };
   e.prototype._parseHash = function() {
    if (!this.peek(r.Hash) && !this.peekDelim("#")) {
     return null;
    }
    var e = this.createNode(X.IdentifierSelector);
    if (this.acceptDelim("#")) {
     if (this.hasWhitespace() || !e.addChild(this._parseSelectorIdent())) {
      return this.finish(e, ct.IdentifierExpected);
     }
    } else {
     this.consumeToken();
    }
    return this.finish(e);
   };
   e.prototype._parseClass = function() {
    if (!this.peekDelim(".")) {
     return null;
    }
    var e = this.createNode(X.ClassSelector);
    this.consumeToken();
    if (this.hasWhitespace() || !e.addChild(this._parseSelectorIdent())) {
     return this.finish(e, ct.IdentifierExpected);
    }
    return this.finish(e);
   };
   e.prototype._parseElementName = function() {
    var e = this.mark();
    var t = this.createNode(X.ElementNameSelector);
    t.addChild(this._parseNamespacePrefix());
    if (!t.addChild(this._parseSelectorIdent()) && !this.acceptDelim("*")) {
     this.restoreAtMark(e);
     return null;
    }
    return this.finish(t);
   };
   e.prototype._parseNamespacePrefix = function() {
    var e = this.mark();
    var t = this.createNode(X.NamespacePrefix);
    if (!t.addChild(this._parseIdent()) && !this.acceptDelim("*")) {}
    if (!this.acceptDelim("|")) {
     this.restoreAtMark(e);
     return null;
    }
    return this.finish(t);
   };
   e.prototype._parseAttrib = function() {
    if (!this.peek(r.BracketL)) {
     return null;
    }
    var e = this.create(We);
    this.consumeToken();
    e.setNamespacePrefix(this._parseNamespacePrefix());
    if (!e.setIdentifier(this._parseIdent())) {
     return this.finish(e, ct.IdentifierExpected);
    }
    if (e.setOperator(this._parseOperator())) {
     e.setValue(this._parseBinaryExpr());
     this.acceptIdent("i");
    }
    if (!this.accept(r.BracketR)) {
     return this.finish(e, ct.RightSquareBracketExpected);
    }
    return this.finish(e);
   };
   e.prototype._parsePseudo = function() {
    var e = this;
    var t = this._tryParsePseudoIdentifier();
    if (t) {
     if (!this.hasWhitespace() && this.accept(r.ParenthesisL)) {
      var n = function() {
       var t = e.create(te);
       if (!t.addChild(e._parseSelector(false))) {
        return null;
       }
       while (e.accept(r.Comma) && t.addChild(e._parseSelector(false))) {}
       if (e.peek(r.ParenthesisR)) {
        return e.finish(t);
       }
      };
      t.addChild(this.try(n) || this._parseBinaryExpr());
      if (!this.accept(r.ParenthesisR)) {
       return this.finish(t, ct.RightParenthesisExpected);
      }
     }
     return this.finish(t);
    }
    return null;
   };
   e.prototype._tryParsePseudoIdentifier = function() {
    if (!this.peek(r.Colon)) {
     return null;
    }
    var e = this.mark();
    var t = this.createNode(X.PseudoSelector);
    this.consumeToken();
    if (this.hasWhitespace()) {
     this.restoreAtMark(e);
     return null;
    }
    if (this.accept(r.Colon) && this.hasWhitespace()) {
     this.markError(t, ct.IdentifierExpected);
    }
    if (!t.addChild(this._parseIdent())) {
     this.markError(t, ct.IdentifierExpected);
    }
    return t;
   };
   e.prototype._tryParsePrio = function() {
    var e = this.mark();
    var t = this._parsePrio();
    if (t) {
     return t;
    }
    this.restoreAtMark(e);
    return null;
   };
   e.prototype._parsePrio = function() {
    if (!this.peek(r.Exclamation)) {
     return null;
    }
    var e = this.createNode(X.Prio);
    if (this.accept(r.Exclamation) && this.acceptIdent("important")) {
     return this.finish(e);
    }
    return null;
   };
   e.prototype._parseExpr = function(e) {
    if (e === void 0) {
     e = false;
    }
    var t = this.create(Le);
    if (!t.addChild(this._parseBinaryExpr())) {
     return null;
    }
    while (true) {
     if (this.peek(r.Comma)) {
      if (e) {
       return this.finish(t);
      }
      this.consumeToken();
     }
     if (!t.addChild(this._parseBinaryExpr())) {
      break;
     }
    }
    return this.finish(t);
   };
   e.prototype._parseNamedLine = function() {
    if (!this.peek(r.BracketL)) {
     return null;
    }
    var e = this.createNode(X.GridLine);
    this.consumeToken();
    while (e.addChild(this._parseIdent())) {}
    if (!this.accept(r.BracketR)) {
     return this.finish(e, ct.RightSquareBracketExpected);
    }
    return this.finish(e);
   };
   e.prototype._parseBinaryExpr = function(e, t) {
    var n = this.create(Ve);
    if (!n.setLeft(e || this._parseTerm())) {
     return null;
    }
    if (!n.setOperator(t || this._parseOperator())) {
     return this.finish(n);
    }
    if (!n.setRight(this._parseTerm())) {
     return this.finish(n, ct.TermExpected);
    }
    n = this.finish(n);
    var r = this._parseOperator();
    if (r) {
     n = this._parseBinaryExpr(n, r);
    }
    return this.finish(n);
   };
   e.prototype._parseTerm = function() {
    var e = this.create(Be);
    e.setOperator(this._parseUnaryOperator());
    if (e.setExpression(this._parseURILiteral()) || e.setExpression(this._parseFunction()) || e.setExpression(this._parseIdent()) || e.setExpression(this._parseStringLiteral()) || e.setExpression(this._parseNumeric()) || e.setExpression(this._parseHexColor()) || e.setExpression(this._parseOperation()) || e.setExpression(this._parseNamedLine())) {
     return this.finish(e);
    }
    return null;
   };
   e.prototype._parseOperation = function() {
    if (!this.peek(r.ParenthesisL)) {
     return null;
    }
    var e = this.create(te);
    this.consumeToken();
    e.addChild(this._parseExpr());
    if (!this.accept(r.ParenthesisR)) {
     return this.finish(e, ct.RightParenthesisExpected);
    }
    return this.finish(e);
   };
   e.prototype._parseNumeric = function() {
    if (this.peek(r.Num) || this.peek(r.Percentage) || this.peek(r.Resolution) || this.peek(r.Length) || this.peek(r.EMS) || this.peek(r.EXS) || this.peek(r.Angle) || this.peek(r.Time) || this.peek(r.Dimension) || this.peek(r.Freq)) {
     var e = this.create(Ge);
     this.consumeToken();
     return this.finish(e);
    }
    return null;
   };
   e.prototype._parseStringLiteral = function() {
    if (!this.peek(r.String) && !this.peek(r.BadString)) {
     return null;
    }
    var e = this.createNode(X.StringLiteral);
    this.consumeToken();
    return this.finish(e);
   };
   e.prototype._parseURILiteral = function() {
    if (!this.peekRegExp(r.Ident, /^url(-prefix)?$/i)) {
     return null;
    }
    var e = this.mark();
    var t = this.createNode(X.URILiteral);
    this.accept(r.Ident);
    if (this.hasWhitespace() || !this.peek(r.ParenthesisL)) {
     this.restoreAtMark(e);
     return null;
    }
    this.scanner.inURL = true;
    this.consumeToken();
    t.addChild(this._parseURLArgument());
    this.scanner.inURL = false;
    if (!this.accept(r.ParenthesisR)) {
     return this.finish(t, ct.RightParenthesisExpected);
    }
    return this.finish(t);
   };
   e.prototype._parseURLArgument = function() {
    var e = this.create(te);
    if (!this.accept(r.String) && !this.accept(r.BadString) && !this.acceptUnquotedString()) {
     return null;
    }
    return this.finish(e);
   };
   e.prototype._parseIdent = function(e) {
    if (!this.peek(r.Ident)) {
     return null;
    }
    var t = this.create(re);
    if (e) {
     t.referenceTypes = e;
    }
    t.isCustomProperty = this.peekRegExp(r.Ident, /^--/);
    this.consumeToken();
    return this.finish(t);
   };
   e.prototype._parseFunction = function() {
    var e = this.mark();
    var t = this.create(be);
    if (!t.setIdentifier(this._parseFunctionIdentifier())) {
     return null;
    }
    if (this.hasWhitespace() || !this.accept(r.ParenthesisL)) {
     this.restoreAtMark(e);
     return null;
    }
    if (t.getArguments().addChild(this._parseFunctionArgument())) {
     while (this.accept(r.Comma)) {
      if (!t.getArguments().addChild(this._parseFunctionArgument())) {
       this.markError(t, ct.ExpressionExpected);
      }
     }
    }
    if (!this.accept(r.ParenthesisR)) {
     return this.finish(t, ct.RightParenthesisExpected);
    }
    return this.finish(t);
   };
   e.prototype._parseFunctionIdentifier = function() {
    if (!this.peek(r.Ident)) {
     return null;
    }
    var e = this.create(re);
    e.referenceTypes = [ Y.Function ];
    if (this.acceptIdent("progid")) {
     if (this.accept(r.Colon)) {
      while (this.accept(r.Ident) && this.acceptDelim(".")) {}
     }
     return this.finish(e);
    }
    this.consumeToken();
    return this.finish(e);
   };
   e.prototype._parseFunctionArgument = function() {
    var e = this.create(ve);
    if (e.setValue(this._parseExpr(true))) {
     return this.finish(e);
    }
    return null;
   };
   e.prototype._parseHexColor = function() {
    if (this.peekRegExp(r.Hash, /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/g)) {
     var e = this.create($e);
     this.consumeToken();
     return this.finish(e);
    } else {
     return null;
    }
   };
   return e;
  }();
  function bn(e, t) {
   var n = 0, r = e.length;
   if (r === 0) {
    return 0;
   }
   while (n < r) {
    var i = Math.floor((n + r) / 2);
    if (t(e[i])) {
     r = i;
    } else {
     n = i + 1;
    }
   }
   return n;
  }
  var yn = undefined && undefined.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  var vn = function() {
   function e(e, t) {
    this.offset = e;
    this.length = t;
    this.symbols = [];
    this.parent = null;
    this.children = [];
   }
   e.prototype.addChild = function(e) {
    this.children.push(e);
    e.setParent(this);
   };
   e.prototype.setParent = function(e) {
    this.parent = e;
   };
   e.prototype.findScope = function(e, t) {
    if (t === void 0) {
     t = 0;
    }
    if (this.offset <= e && this.offset + this.length > e + t || this.offset === e && this.length === t) {
     return this.findInScope(e, t);
    }
    return null;
   };
   e.prototype.findInScope = function(e, t) {
    if (t === void 0) {
     t = 0;
    }
    var n = e + t;
    var r = bn(this.children, function(e) {
     return e.offset > n;
    });
    if (r === 0) {
     return this;
    }
    var i = this.children[r - 1];
    if (i.offset <= e && i.offset + i.length >= e + t) {
     return i.findInScope(e, t);
    }
    return this;
   };
   e.prototype.addSymbol = function(e) {
    this.symbols.push(e);
   };
   e.prototype.getSymbol = function(e, t) {
    for (var n = 0; n < this.symbols.length; n++) {
     var r = this.symbols[n];
     if (r.name === e && r.type === t) {
      return r;
     }
    }
    return null;
   };
   e.prototype.getSymbols = function() {
    return this.symbols;
   };
   return e;
  }();
  var wn = function(e) {
   yn(t, e);
   function t() {
    return e.call(this, 0, Number.MAX_VALUE) || this;
   }
   return t;
  }(vn);
  var xn = function() {
   function e(e, t, n, r) {
    this.name = e;
    this.value = t;
    this.node = n;
    this.type = r;
   }
   return e;
  }();
  var kn = function() {
   function e(e) {
    this.scope = e;
   }
   e.prototype.addSymbol = function(e, t, n, r) {
    if (e.offset !== -1) {
     var i = this.scope.findScope(e.offset, e.length);
     if (i) {
      i.addSymbol(new xn(t, n, e, r));
     }
    }
   };
   e.prototype.addScope = function(e) {
    if (e.offset !== -1) {
     var t = this.scope.findScope(e.offset, e.length);
     if (t && (t.offset !== e.offset || t.length !== e.length)) {
      var n = new vn(e.offset, e.length);
      t.addChild(n);
      return n;
     }
     return t;
    }
    return null;
   };
   e.prototype.addSymbolToChildScope = function(e, t, n, r, i) {
    if (e && e.offset !== -1) {
     var a = this.addScope(e);
     if (a) {
      a.addSymbol(new xn(n, r, t, i));
     }
    }
   };
   e.prototype.visitNode = function(e) {
    switch (e.type) {
    case X.Keyframe:
     this.addSymbol(e, e.getName(), void 0, Y.Keyframe);
     return true;

    case X.CustomPropertyDeclaration:
     return this.visitCustomPropertyDeclarationNode(e);

    case X.VariableDeclaration:
     return this.visitVariableDeclarationNode(e);

    case X.Ruleset:
     return this.visitRuleSet(e);

    case X.MixinDeclaration:
     this.addSymbol(e, e.getName(), void 0, Y.Mixin);
     return true;

    case X.FunctionDeclaration:
     this.addSymbol(e, e.getName(), void 0, Y.Function);
     return true;

    case X.FunctionParameter:
     {
      return this.visitFunctionParameterNode(e);
     }

    case X.Declarations:
     this.addScope(e);
     return true;

    case X.For:
     var t = e;
     var n = t.getDeclarations();
     if (n) {
      this.addSymbolToChildScope(n, t.variable, t.variable.getName(), void 0, Y.Variable);
     }
     return true;

    case X.Each:
     {
      var r = e;
      var i = r.getDeclarations();
      if (i) {
       var a = r.getVariables().getChildren();
       for (var o = 0, s = a; o < s.length; o++) {
        var l = s[o];
        this.addSymbolToChildScope(i, l, l.getName(), void 0, Y.Variable);
       }
      }
      return true;
     }
    }
    return true;
   };
   e.prototype.visitRuleSet = function(e) {
    var t = this.scope.findScope(e.offset, e.length);
    if (t) {
     for (var n = 0, r = e.getSelectors().getChildren(); n < r.length; n++) {
      var i = r[n];
      if (i instanceof le) {
       if (i.getChildren().length === 1) {
        t.addSymbol(new xn(i.getChild(0).getText(), void 0, i, Y.Rule));
       }
      }
     }
    }
    return true;
   };
   e.prototype.visitVariableDeclarationNode = function(e) {
    var t = e.getValue() ? e.getValue().getText() : void 0;
    this.addSymbol(e, e.getName(), t, Y.Variable);
    return true;
   };
   e.prototype.visitFunctionParameterNode = function(e) {
    var t = e.getParent().getDeclarations();
    if (t) {
     var n = e.getDefaultValue();
     var r = n ? n.getText() : void 0;
     this.addSymbolToChildScope(t, e, e.getName(), r, Y.Variable);
    }
    return true;
   };
   e.prototype.visitCustomPropertyDeclarationNode = function(e) {
    var t = e.getValue() ? e.getValue().getText() : "";
    this.addCSSVariable(e.getProperty(), e.getProperty().getName(), t, Y.Variable);
    return true;
   };
   e.prototype.addCSSVariable = function(e, t, n, r) {
    if (e.offset !== -1) {
     this.scope.addSymbol(new xn(t, n, e, r));
    }
   };
   return e;
  }();
  var Cn = function() {
   function e(e) {
    this.global = new wn();
    e.acceptVisitor(new kn(this.global));
   }
   e.prototype.findSymbolsAtOffset = function(e, t) {
    var n = this.global.findScope(e, 0);
    var r = [];
    var i = {};
    while (n) {
     var a = n.getSymbols();
     for (var o = 0; o < a.length; o++) {
      var s = a[o];
      if (s.type === t && !i[s.name]) {
       r.push(s);
       i[s.name] = true;
      }
     }
     n = n.parent;
    }
    return r;
   };
   e.prototype.internalFindSymbol = function(e, t) {
    var n = e;
    if (e.parent instanceof ye && e.parent.getParent() instanceof oe) {
     n = e.parent.getParent().getDeclarations();
    }
    if (e.parent instanceof ve && e.parent.getParent() instanceof be) {
     var r = e.parent.getParent().getIdentifier();
     if (r) {
      var i = this.internalFindSymbol(r, [ Y.Function ]);
      if (i) {
       n = i.node.getDeclarations();
      }
     }
    }
    if (!n) {
     return null;
    }
    var a = e.getText();
    var o = this.global.findScope(n.offset, n.length);
    while (o) {
     for (var s = 0; s < t.length; s++) {
      var l = t[s];
      var c = o.getSymbol(a, l);
      if (c) {
       return c;
      }
     }
     o = o.parent;
    }
    return null;
   };
   e.prototype.evaluateReferenceTypes = function(e) {
    if (e instanceof re) {
     var t = e.referenceTypes;
     if (t) {
      return t;
     } else {
      if (e.isCustomProperty) {
       return [ Y.Variable ];
      }
      var n = ee(e);
      if (n) {
       var r = n.getNonPrefixedPropertyName();
       if ((r === "animation" || r === "animation-name") && n.getValue() && n.getValue().offset === e.offset) {
        return [ Y.Keyframe ];
       }
      }
     }
    } else if (e instanceof Xe) {
     return [ Y.Variable ];
    }
    var i = e.findParent(X.Selector);
    if (i) {
     return [ Y.Rule ];
    }
    var a = e.findParent(X.ExtendsReference);
    if (a) {
     return [ Y.Rule ];
    }
    return null;
   };
   e.prototype.findSymbolFromNode = function(e) {
    if (!e) {
     return null;
    }
    while (e.type === X.Interpolation) {
     e = e.getParent();
    }
    var t = this.evaluateReferenceTypes(e);
    if (t) {
     return this.internalFindSymbol(e, t);
    }
    return null;
   };
   e.prototype.matchesSymbol = function(e, t) {
    if (!e) {
     return false;
    }
    while (e.type === X.Interpolation) {
     e = e.getParent();
    }
    if (t.name.length !== e.length || t.name !== e.getText()) {
     return false;
    }
    var n = this.evaluateReferenceTypes(e);
    if (!n || n.indexOf(t.type) === -1) {
     return false;
    }
    var r = this.internalFindSymbol(e, n);
    return r === t;
   };
   e.prototype.findSymbol = function(e, t, n) {
    var r = this.global.findScope(n);
    while (r) {
     var i = r.getSymbol(e, t);
     if (i) {
      return i;
     }
     r = r.parent;
    }
    return null;
   };
   return e;
  }();
  function Sn(e, t) {
   if (e.length < t.length) {
    return false;
   }
   for (var n = 0; n < t.length; n++) {
    if (e[n] !== t[n]) {
     return false;
    }
   }
   return true;
  }
  function Fn(e, t) {
   var n = e.length - t.length;
   if (n > 0) {
    return e.lastIndexOf(t) === n;
   } else if (n === 0) {
    return e === t;
   } else {
    return false;
   }
  }
  function En(e, t, n) {
   if (n === void 0) {
    n = 4;
   }
   var r = Math.abs(e.length - t.length);
   if (r > n) {
    return 0;
   }
   var i = [];
   var a = [];
   var o, s;
   for (o = 0; o < t.length + 1; ++o) {
    a.push(0);
   }
   for (o = 0; o < e.length + 1; ++o) {
    i.push(a);
   }
   for (o = 1; o < e.length + 1; ++o) {
    for (s = 1; s < t.length + 1; ++s) {
     if (e[o - 1] === t[s - 1]) {
      i[o][s] = i[o - 1][s - 1] + 1;
     } else {
      i[o][s] = Math.max(i[o - 1][s], i[o][s - 1]);
     }
    }
   }
   return i[e.length][t.length] - Math.sqrt(r);
  }
  function Tn(e, t) {
   if (t === void 0) {
    t = true;
   }
   if (!e) {
    return "";
   }
   if (e.length < 140) {
    return e;
   }
   return e.slice(0, 140) + (t ? "…" : "");
  }
  var In = n("kmEW");
  var _n = ot["loadMessageBundle"]();
  var Rn = In["InsertTextFormat"].Snippet;
  var Pn = function() {
   function e(e) {
    if (e === void 0) {
     e = null;
    }
    this.completionParticipants = [];
    this.valueTypes = [ X.Identifier, X.Value, X.StringLiteral, X.URILiteral, X.NumericValue, X.HexColorValue, X.VariableName, X.Prio ];
    this.variablePrefix = e;
   }
   e.prototype.getSymbolContext = function() {
    if (!this.symbolContext) {
     this.symbolContext = new Cn(this.styleSheet);
    }
    return this.symbolContext;
   };
   e.prototype.setCompletionParticipants = function(e) {
    this.completionParticipants = e || [];
   };
   e.prototype.doComplete = function(e, t, n) {
    this.offset = e.offsetAt(t);
    this.position = t;
    this.currentWord = Mn(e, this.offset);
    this.defaultReplaceRange = In["Range"].create(In["Position"].create(this.position.line, this.position.character - this.currentWord.length), this.position);
    this.textDocument = e;
    this.styleSheet = n;
    try {
     var r = {
      isIncomplete: false,
      items: []
     };
     this.nodePath = Z(this.styleSheet, this.offset);
     for (var i = this.nodePath.length - 1; i >= 0; i--) {
      var a = this.nodePath[i];
      if (a instanceof fe) {
       this.getCompletionsForDeclarationProperty(a.getParent(), r);
      } else if (a instanceof Le) {
       if (a.parent instanceof Je) {
        this.getVariableProposals(null, r);
       } else {
        this.getCompletionsForExpression(a, r);
       }
      } else if (a instanceof ce) {
       var o = a.findParent(X.ExtendsReference);
       if (o) {
        this.getCompletionsForExtendsReference(o, a, r);
       } else {
        var s = a.findParent(X.Ruleset);
        this.getCompletionsForSelector(s, s && s.isNested(), r);
       }
      } else if (a instanceof ve) {
       this.getCompletionsForFunctionArgument(a, a.getParent(), r);
      } else if (a instanceof ae) {
       this.getCompletionsForDeclarations(a, r);
      } else if (a instanceof He) {
       this.getCompletionsForVariableDeclaration(a, r);
      } else if (a instanceof se) {
       this.getCompletionsForRuleSet(a, r);
      } else if (a instanceof Je) {
       this.getCompletionsForInterpolation(a, r);
      } else if (a instanceof Fe) {
       this.getCompletionsForFunctionDeclaration(a, r);
      } else if (a instanceof Qe) {
       this.getCompletionsForMixinReference(a, r);
      } else if (a instanceof be) {
       this.getCompletionsForFunctionArgument(null, a, r);
      } else if (a instanceof Oe) {
       this.getCompletionsForSupports(a, r);
      } else if (a instanceof Ue) {
       this.getCompletionsForSupportsCondition(a, r);
      } else if (a instanceof Ye) {
       this.getCompletionsForExtendsReference(a, null, r);
      } else if (a.type === X.URILiteral) {
       this.getCompletionForUriLiteralValue(a, r);
      } else if (a.parent === null) {
       this.getCompletionForTopLevel(r);
      } else {
       continue;
      }
      if (r.items.length > 0 || this.offset > a.offset) {
       return this.finalize(r);
      }
     }
     this.getCompletionsForStylesheet(r);
     if (r.items.length === 0) {
      if (this.variablePrefix && this.currentWord.indexOf(this.variablePrefix) === 0) {
       this.getVariableProposals(null, r);
      }
     }
     return this.finalize(r);
    } finally {
     this.position = null;
     this.currentWord = null;
     this.textDocument = null;
     this.styleSheet = null;
     this.symbolContext = null;
     this.defaultReplaceRange = null;
     this.nodePath = null;
    }
   };
   e.prototype.finalize = function(e) {
    var t = e.items.some(function(e) {
     return !!e.sortText;
    });
    if (t) {
     for (var n = 0, r = e.items; n < r.length; n++) {
      var i = r[n];
      if (!i.sortText) {
       i.sortText = "d";
      }
     }
    }
    return e;
   };
   e.prototype.findInNodePath = function() {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
     e[t] = arguments[t];
    }
    for (var n = this.nodePath.length - 1; n >= 0; n--) {
     var r = this.nodePath[n];
     if (e.indexOf(r.type) !== -1) {
      return r;
     }
    }
    return null;
   };
   e.prototype.getCompletionsForDeclarationProperty = function(e, t) {
    return this.getPropertyProposals(e, t);
   };
   e.prototype.getPropertyProposals = function(e, t) {
    var n = this;
    var r = an();
    for (var i in r) {
     if (r.hasOwnProperty(i)) {
      var a = r[i];
      if (a.browsers.onCodeComplete) {
       var o = void 0;
       var s = void 0;
       var l = false;
       if (e) {
        o = this.getCompletionRange(e.getProperty());
        s = a.name;
        if (!Nn(e.colonPosition)) {
         s += ": ";
         l = true;
        }
       } else {
        o = this.getCompletionRange(null);
        s = a.name + ": ";
        l = true;
       }
       var c = {
        label: a.name,
        documentation: Jt(a),
        textEdit: In["TextEdit"].replace(o, s),
        kind: In["CompletionItemKind"].Property
       };
       if (a.restrictions.length === 1 && a.restrictions[0] === "none") {
        l = false;
       }
       if (l) {
        c.command = {
         title: "Suggest",
         command: "editor.action.triggerSuggest"
        };
       }
       if (Sn(a.name, "-")) {
        c.sortText = "x";
       }
       t.items.push(c);
      }
     }
    }
    this.completionParticipants.forEach(function(e) {
     if (e.onCssProperty) {
      e.onCssProperty({
       propertyName: n.currentWord,
       range: n.defaultReplaceRange
      });
     }
    });
    return t;
   };
   e.prototype.getCompletionsForDeclarationValue = function(e, t) {
    var n = this;
    var r = e.getFullPropertyName();
    var i = an()[r];
    var a = e.getValue();
    while (a && a.hasChildren()) {
     a = a.findChildAtOffset(this.offset, false);
    }
    this.completionParticipants.forEach(function(e) {
     if (e.onCssPropertyValue) {
      e.onCssPropertyValue({
       propertyName: r,
       propertyValue: n.currentWord,
       range: n.getCompletionRange(a)
      });
     }
    });
    if (i) {
     for (var o = 0, s = i.restrictions; o < s.length; o++) {
      var l = s[o];
      switch (l) {
      case "color":
       this.getColorProposals(i, a, t);
       break;

      case "position":
       this.getPositionProposals(i, a, t);
       break;

      case "repeat":
       this.getRepeatStyleProposals(i, a, t);
       break;

      case "line-style":
       this.getLineStyleProposals(i, a, t);
       break;

      case "line-width":
       this.getLineWidthProposals(i, a, t);
       break;

      case "geometry-box":
       this.getGeometryBoxProposals(i, a, t);
       break;

      case "box":
       this.getBoxProposals(i, a, t);
       break;

      case "image":
       this.getImageProposals(i, a, t);
       break;

      case "timing-function":
       this.getTimingFunctionProposals(i, a, t);
       break;

      case "shape":
       this.getBasicShapeProposals(i, a, t);
       break;
      }
     }
     this.getValueEnumProposals(i, a, t);
     this.getCSSWideKeywordProposals(i, a, t);
     this.getUnitProposals(i, a, t);
    } else {
     var c = On(this.styleSheet, e);
     for (var h = 0, d = c.getEntries(); h < d.length; h++) {
      var u = d[h];
      t.items.push({
       label: u,
       textEdit: In["TextEdit"].replace(this.getCompletionRange(a), u),
       kind: In["CompletionItemKind"].Value
      });
     }
    }
    this.getVariableProposals(a, t);
    this.getTermProposals(i, a, t);
    return t;
   };
   e.prototype.getValueEnumProposals = function(e, t, n) {
    if (e.values) {
     for (var r = 0, i = e.values; r < i.length; r++) {
      var a = i[r];
      if (Gt(a)) {
       var o = a.name;
       var s = void 0;
       if (Fn(o, ")")) {
        var l = o.lastIndexOf("(");
        if (l !== -1) {
         o = o.substr(0, l) + "($1)";
         s = Rn;
        }
       }
       var c = {
        label: a.name,
        documentation: Jt(a),
        textEdit: In["TextEdit"].replace(this.getCompletionRange(t), o),
        kind: In["CompletionItemKind"].Value,
        insertTextFormat: s
       };
       n.items.push(c);
      }
     }
    }
    return n;
   };
   e.prototype.getCSSWideKeywordProposals = function(e, t, n) {
    for (var r in xt) {
     n.items.push({
      label: r,
      documentation: xt[r],
      textEdit: In["TextEdit"].replace(this.getCompletionRange(t), r),
      kind: In["CompletionItemKind"].Value
     });
    }
    return n;
   };
   e.prototype.getCompletionsForInterpolation = function(e, t) {
    if (this.offset >= e.offset + 2) {
     this.getVariableProposals(null, t);
    }
    return t;
   };
   e.prototype.getVariableProposals = function(e, t) {
    var n = this.getSymbolContext().findSymbolsAtOffset(this.offset, Y.Variable);
    for (var r = 0, i = n; r < i.length; r++) {
     var a = i[r];
     var o = Sn(a.name, "--") ? "var(" + a.name + ")" : a.name;
     var s = {
      label: a.name,
      documentation: a.value ? Tn(a.value) : a.value,
      textEdit: In["TextEdit"].replace(this.getCompletionRange(e), o),
      kind: In["CompletionItemKind"].Variable,
      sortText: "z"
     };
     if (a.node.type === X.FunctionParameter) {
      var l = a.node.getParent();
      if (l.type === X.MixinDeclaration) {
       s.detail = _n("completion.argument", "argument from '{0}'", l.getName());
      }
     }
     t.items.push(s);
    }
    return t;
   };
   e.prototype.getVariableProposalsForCSSVarFunction = function(e) {
    var t = this.getSymbolContext().findSymbolsAtOffset(this.offset, Y.Variable);
    t = t.filter(function(e) {
     return Sn(e.name, "--");
    });
    for (var n = 0, r = t; n < r.length; n++) {
     var i = r[n];
     e.items.push({
      label: i.name,
      documentation: i.value ? Tn(i.value) : i.value,
      textEdit: In["TextEdit"].replace(this.getCompletionRange(null), i.name),
      kind: In["CompletionItemKind"].Variable
     });
    }
    return e;
   };
   e.prototype.getUnitProposals = function(e, t, n) {
    var r = "0";
    if (this.currentWord.length > 0) {
     var i = this.currentWord.match(/^-?\d[\.\d+]*/);
     if (i) {
      r = i[0];
      n.isIncomplete = r.length === this.currentWord.length;
     }
    } else if (this.currentWord.length === 0) {
     n.isIncomplete = true;
    }
    if (t && t.parent && t.parent.type === X.Term) {
     t = t.getParent();
    }
    for (var a = 0, o = e.restrictions; a < o.length; a++) {
     var s = o[a];
     var l = Et[s];
     if (l) {
      for (var c = 0, h = l; c < h.length; c++) {
       var d = h[c];
       var u = r + d;
       n.items.push({
        label: u,
        textEdit: In["TextEdit"].replace(this.getCompletionRange(t), u),
        kind: In["CompletionItemKind"].Unit
       });
      }
     }
    }
    return n;
   };
   e.prototype.getCompletionRange = function(e) {
    if (e && e.offset <= this.offset) {
     var t = e.end !== -1 ? this.textDocument.positionAt(e.end) : this.position;
     return In["Range"].create(this.textDocument.positionAt(e.offset), t);
    }
    return this.defaultReplaceRange;
   };
   e.prototype.getColorProposals = function(e, t, n) {
    for (var r in pt) {
     n.items.push({
      label: r,
      documentation: pt[r],
      textEdit: In["TextEdit"].replace(this.getCompletionRange(t), r),
      kind: In["CompletionItemKind"].Color
     });
    }
    for (var r in mt) {
     n.items.push({
      label: r,
      documentation: mt[r],
      textEdit: In["TextEdit"].replace(this.getCompletionRange(t), r),
      kind: In["CompletionItemKind"].Value
     });
    }
    var i = new Dn();
    this.styleSheet.acceptVisitor(new zn(i, this.offset));
    for (var a = 0, o = i.getEntries(); a < o.length; a++) {
     var r = o[a];
     n.items.push({
      label: r,
      textEdit: In["TextEdit"].replace(this.getCompletionRange(t), r),
      kind: In["CompletionItemKind"].Color
     });
    }
    var s = function(e) {
     var r = 1;
     var i = function(e, t) {
      return "${" + r++ + ":" + t + "}";
     };
     var a = e.func.replace(/\[?\$(\w+)\]?/g, i);
     n.items.push({
      label: e.func.substr(0, e.func.indexOf("(")),
      detail: e.func,
      documentation: e.desc,
      textEdit: In["TextEdit"].replace(l.getCompletionRange(t), a),
      insertTextFormat: Rn,
      kind: In["CompletionItemKind"].Function
     });
    };
    var l = this;
    for (var c = 0, h = kt; c < h.length; c++) {
     var d = h[c];
     s(d);
    }
    return n;
   };
   e.prototype.getPositionProposals = function(e, t, n) {
    for (var r in ft) {
     n.items.push({
      label: r,
      documentation: ft[r],
      textEdit: In["TextEdit"].replace(this.getCompletionRange(t), r),
      kind: In["CompletionItemKind"].Value
     });
    }
    return n;
   };
   e.prototype.getRepeatStyleProposals = function(e, t, n) {
    for (var r in gt) {
     n.items.push({
      label: r,
      documentation: gt[r],
      textEdit: In["TextEdit"].replace(this.getCompletionRange(t), r),
      kind: In["CompletionItemKind"].Value
     });
    }
    return n;
   };
   e.prototype.getLineStyleProposals = function(e, t, n) {
    for (var r in bt) {
     n.items.push({
      label: r,
      documentation: bt[r],
      textEdit: In["TextEdit"].replace(this.getCompletionRange(t), r),
      kind: In["CompletionItemKind"].Value
     });
    }
    return n;
   };
   e.prototype.getLineWidthProposals = function(e, t, n) {
    for (var r = 0, i = yt; r < i.length; r++) {
     var a = i[r];
     n.items.push({
      label: a,
      textEdit: In["TextEdit"].replace(this.getCompletionRange(t), a),
      kind: In["CompletionItemKind"].Value
     });
    }
    return n;
   };
   e.prototype.getGeometryBoxProposals = function(e, t, n) {
    for (var r in wt) {
     n.items.push({
      label: r,
      documentation: wt[r],
      textEdit: In["TextEdit"].replace(this.getCompletionRange(t), r),
      kind: In["CompletionItemKind"].Value
     });
    }
    return n;
   };
   e.prototype.getBoxProposals = function(e, t, n) {
    for (var r in vt) {
     n.items.push({
      label: r,
      documentation: vt[r],
      textEdit: In["TextEdit"].replace(this.getCompletionRange(t), r),
      kind: In["CompletionItemKind"].Value
     });
    }
    return n;
   };
   e.prototype.getImageProposals = function(e, t, n) {
    for (var r in Ct) {
     var i = An(r);
     n.items.push({
      label: r,
      documentation: Ct[r],
      textEdit: In["TextEdit"].replace(this.getCompletionRange(t), i),
      kind: In["CompletionItemKind"].Function,
      insertTextFormat: r !== i ? Rn : void 0
     });
    }
    return n;
   };
   e.prototype.getTimingFunctionProposals = function(e, t, n) {
    for (var r in St) {
     var i = An(r);
     n.items.push({
      label: r,
      documentation: St[r],
      textEdit: In["TextEdit"].replace(this.getCompletionRange(t), i),
      kind: In["CompletionItemKind"].Function,
      insertTextFormat: r !== i ? Rn : void 0
     });
    }
    return n;
   };
   e.prototype.getBasicShapeProposals = function(e, t, n) {
    for (var r in Ft) {
     var i = An(r);
     n.items.push({
      label: r,
      documentation: Ft[r],
      textEdit: In["TextEdit"].replace(this.getCompletionRange(t), i),
      kind: In["CompletionItemKind"].Function,
      insertTextFormat: r !== i ? Rn : void 0
     });
    }
    return n;
   };
   e.prototype.getCompletionsForStylesheet = function(e) {
    var t = this.styleSheet.findFirstChildBeforeOffset(this.offset);
    if (!t) {
     return this.getCompletionForTopLevel(e);
    }
    if (t instanceof se) {
     return this.getCompletionsForRuleSet(t, e);
    }
    if (t instanceof Oe) {
     return this.getCompletionsForSupports(t, e);
    }
    return e;
   };
   e.prototype.getCompletionForTopLevel = function(e) {
    for (var t = 0, n = ln(); t < n.length; t++) {
     var r = n[t];
     if (r.browsers.count > 0) {
      e.items.push({
       label: r.name,
       textEdit: In["TextEdit"].replace(this.getCompletionRange(null), r.name),
       documentation: Jt(r),
       kind: In["CompletionItemKind"].Keyword
      });
     }
    }
    this.getCompletionsForSelector(null, false, e);
    return e;
   };
   e.prototype.getCompletionsForRuleSet = function(e, t) {
    var n = e.getDeclarations();
    var r = n && n.endsWith("}") && this.offset >= n.end;
    if (r) {
     return this.getCompletionForTopLevel(t);
    }
    var i = !n || this.offset <= n.offset;
    if (i) {
     return this.getCompletionsForSelector(e, e.isNested(), t);
    }
    e.findParent(X.Ruleset);
    return this.getCompletionsForDeclarations(e.getDeclarations(), t);
   };
   e.prototype.getCompletionsForSelector = function(e, t, n) {
    var r = this;
    var i = this.findInNodePath(X.PseudoSelector, X.IdentifierSelector, X.ClassSelector, X.ElementNameSelector);
    if (!i && this.offset - this.currentWord.length > 0 && this.textDocument.getText()[this.offset - this.currentWord.length - 1] === ":") {
     this.currentWord = ":" + this.currentWord;
     this.defaultReplaceRange = In["Range"].create(In["Position"].create(this.position.line, this.position.character - this.currentWord.length), this.position);
    }
    for (var a = 0, o = mn(); a < o.length; a++) {
     var s = o[a];
     if (s.browsers.onCodeComplete) {
      var l = An(s.name);
      var c = {
       label: s.name,
       textEdit: In["TextEdit"].replace(this.getCompletionRange(i), l),
       documentation: Jt(s),
       kind: In["CompletionItemKind"].Function,
       insertTextFormat: s.name !== l ? Rn : void 0
      };
      if (Sn(s.name, ":-")) {
       c.sortText = "x";
      }
      n.items.push(c);
     }
    }
    for (var h = 0, d = dn(); h < d.length; h++) {
     var s = d[h];
     if (s.browsers.onCodeComplete) {
      var l = An(s.name);
      var c = {
       label: s.name,
       textEdit: In["TextEdit"].replace(this.getCompletionRange(i), l),
       documentation: Jt(s),
       kind: In["CompletionItemKind"].Function,
       insertTextFormat: s.name !== l ? Rn : void 0
      };
      if (Sn(s.name, "::-")) {
       c.sortText = "x";
      }
      n.items.push(c);
     }
    }
    if (!t) {
     for (var u = 0, p = Tt; u < p.length; u++) {
      var s = p[u];
      n.items.push({
       label: s,
       textEdit: In["TextEdit"].replace(this.getCompletionRange(i), s),
       kind: In["CompletionItemKind"].Keyword
      });
     }
     for (var m = 0, f = It; m < f.length; m++) {
      var s = f[m];
      n.items.push({
       label: s,
       textEdit: In["TextEdit"].replace(this.getCompletionRange(i), s),
       kind: In["CompletionItemKind"].Keyword
      });
     }
    }
    var g = {};
    g[this.currentWord] = true;
    var b = this.styleSheet.getTextProvider();
    this.styleSheet.accept(function(e) {
     if (e.type === X.SimpleSelector && e.length > 0) {
      var t = b(e.offset, e.length);
      if (t.charAt(0) === "." && !g[t]) {
       g[t] = true;
       n.items.push({
        label: t,
        textEdit: In["TextEdit"].replace(r.getCompletionRange(i), t),
        kind: In["CompletionItemKind"].Keyword
       });
      }
      return false;
     }
     return true;
    });
    if (e && e.isNested()) {
     var y = e.getSelectors().findFirstChildBeforeOffset(this.offset);
     if (y && e.getSelectors().getChildren().indexOf(y) === 0) {
      this.getPropertyProposals(null, n);
     }
    }
    return n;
   };
   e.prototype.getCompletionsForDeclarations = function(e, t) {
    if (!e || this.offset === e.offset) {
     return t;
    }
    var n = e.findFirstChildBeforeOffset(this.offset);
    if (!n) {
     return this.getCompletionsForDeclarationProperty(null, t);
    }
    if (n instanceof de) {
     var r = n;
     if (!Nn(r.colonPosition) || this.offset <= r.colonPosition) {
      return this.getCompletionsForDeclarationProperty(r, t);
     } else if (Nn(r.semicolonPosition) && r.semicolonPosition < this.offset) {
      if (this.offset === r.semicolonPosition + 1) {
       return t;
      }
      return this.getCompletionsForDeclarationProperty(null, t);
     }
     if (r instanceof me) {
      return this.getCompletionsForDeclarationValue(r, t);
     }
    } else if (n instanceof Ye) {
     this.getCompletionsForExtendsReference(n, null, t);
    } else if (this.currentWord && this.currentWord[0] === "@") {
     this.getCompletionsForDeclarationProperty(null, t);
    }
    return t;
   };
   e.prototype.getCompletionsForVariableDeclaration = function(e, t) {
    if (this.offset > e.colonPosition) {
     this.getVariableProposals(e.getValue(), t);
    }
    return t;
   };
   e.prototype.getCompletionsForExpression = function(e, t) {
    if (e.getParent() instanceof ve) {
     this.getCompletionsForFunctionArgument(e.getParent(), e.getParent().getParent(), t);
     return t;
    }
    var n = e.findParent(X.Declaration);
    if (!n) {
     this.getTermProposals(null, null, t);
     return t;
    }
    var r = e.findChildAtOffset(this.offset, true);
    if (!r) {
     return this.getCompletionsForDeclarationValue(n, t);
    }
    if (r instanceof Ge || r instanceof re) {
     return this.getCompletionsForDeclarationValue(n, t);
    }
    return t;
   };
   e.prototype.getCompletionsForFunctionArgument = function(e, t, n) {
    if (t.getIdentifier().getText() === "var") {
     if (!t.getArguments().hasChildren() || t.getArguments().getChild(0) === e) {
      this.getVariableProposalsForCSSVarFunction(n);
     }
    }
    return n;
   };
   e.prototype.getCompletionsForFunctionDeclaration = function(e, t) {
    var n = e.getDeclarations();
    if (n && this.offset > n.offset && this.offset < n.end) {
     this.getTermProposals(null, null, t);
    }
    return t;
   };
   e.prototype.getCompletionsForMixinReference = function(e, t) {
    var n = this.getSymbolContext().findSymbolsAtOffset(this.offset, Y.Mixin);
    for (var r = 0, i = n; r < i.length; r++) {
     var a = i[r];
     if (a.node instanceof Ze) {
      t.items.push(this.makeTermProposal(a, a.node.getParameters(), null));
     }
    }
    return t;
   };
   e.prototype.getTermProposals = function(e, t, n) {
    var r = this.getSymbolContext().findSymbolsAtOffset(this.offset, Y.Function);
    for (var i = 0, a = r; i < a.length; i++) {
     var o = a[i];
     if (o.node instanceof Fe) {
      n.items.push(this.makeTermProposal(o, o.node.getParameters(), t));
     }
    }
    return n;
   };
   e.prototype.makeTermProposal = function(e, t, n) {
    var r = e.node;
    var i = t.getChildren().map(function(e) {
     return e instanceof ye ? e.getName() : e.getText();
    });
    var a = e.name + "(" + i.map(function(e, t) {
     return "${" + (t + 1) + ":" + e + "}";
    }).join(", ") + ")";
    return {
     label: e.name,
     detail: e.name + "(" + i.join(", ") + ")",
     textEdit: In["TextEdit"].replace(this.getCompletionRange(n), a),
     insertTextFormat: Rn,
     kind: In["CompletionItemKind"].Function,
     sortText: "z"
    };
   };
   e.prototype.getCompletionsForSupportsCondition = function(e, t) {
    var n = e.findFirstChildBeforeOffset(this.offset);
    if (n) {
     if (n instanceof me) {
      if (!Nn(n.colonPosition || this.offset <= n.colonPosition)) {
       return this.getCompletionsForDeclarationProperty(n, t);
      } else {
       return this.getCompletionsForDeclarationValue(n, t);
      }
     } else if (n instanceof Ue) {
      return this.getCompletionsForSupportsCondition(n, t);
     }
    }
    if (Nn(e.lParent) && this.offset > e.lParent && (!Nn(e.rParent) || this.offset <= e.rParent)) {
     return this.getCompletionsForDeclarationProperty(null, t);
    }
    return t;
   };
   e.prototype.getCompletionsForSupports = function(e, t) {
    var n = e.getDeclarations();
    var r = !n || this.offset <= n.offset;
    if (r) {
     var i = e.findFirstChildBeforeOffset(this.offset);
     if (i instanceof Ue) {
      return this.getCompletionsForSupportsCondition(i, t);
     }
     return t;
    }
    return this.getCompletionForTopLevel(t);
   };
   e.prototype.getCompletionsForExtendsReference = function(e, t, n) {
    return n;
   };
   e.prototype.getCompletionForUriLiteralValue = function(e, t) {
    var n;
    var r;
    var i;
    if (e.getChildren().length === 0) {
     n = "";
     r = this.position;
     var a = this.textDocument.positionAt(e.offset + "url(".length);
     i = In["Range"].create(a, a);
    } else {
     var o = e.getChild(0);
     n = o.getText();
     r = this.position;
     i = this.getCompletionRange(o);
    }
    this.completionParticipants.forEach(function(e) {
     if (e.onCssURILiteralValue) {
      e.onCssURILiteralValue({
       uriValue: n,
       position: r,
       range: i
      });
     }
    });
    return t;
   };
   return e;
  }();
  var Dn = function() {
   function e() {
    this.entries = {};
   }
   e.prototype.add = function(e) {
    this.entries[e] = true;
   };
   e.prototype.getEntries = function() {
    return Object.keys(this.entries);
   };
   return e;
  }();
  function An(e) {
   return e.replace(/\(\)$/, "($1)");
  }
  function On(e, t) {
   var n = t.getFullPropertyName();
   var r = new Dn();
   function i(e) {
    if (e instanceof re || e instanceof Ge || e instanceof $e) {
     r.add(e.getText());
    }
    return true;
   }
   function a(e) {
    var t = e.getFullPropertyName();
    return n === t;
   }
   function o(e) {
    if (e instanceof me && e !== t) {
     if (a(e)) {
      var n = e.getValue();
      if (n) {
       n.accept(i);
      }
     }
    }
    return true;
   }
   e.accept(o);
   return r;
  }
  var zn = function() {
   function e(e, t) {
    this.entries = e;
    this.currentOffset = t;
   }
   e.prototype.visitNode = function(e) {
    if (e instanceof $e || e instanceof be && _t(e)) {
     if (this.currentOffset < e.offset || e.end < this.currentOffset) {
      this.entries.add(e.getText());
     }
    }
    return true;
   };
   return e;
  }();
  function Nn(e) {
   return typeof e !== "undefined";
  }
  function Mn(e, t) {
   var n = t - 1;
   var r = e.getText();
   while (n >= 0 && ' \t\n\r":{[()]},*>+'.indexOf(r.charAt(n)) === -1) {
    n--;
   }
   return r.substring(n + 1, t);
  }
  var Un = undefined && undefined.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  var qn = function() {
   function e() {}
   e.prototype.findAttribute = function(e) {
    if (this.attributes) {
     for (var t = 0, n = this.attributes; t < n.length; t++) {
      var r = n[t];
      if (r.name === e) {
       return r.value;
      }
     }
    }
    return null;
   };
   e.prototype.addChild = function(t) {
    if (t instanceof e) {
     t.parent = this;
    }
    if (!this.children) {
     this.children = [];
    }
    this.children.push(t);
   };
   e.prototype.append = function(e) {
    if (this.attributes) {
     var t = this.attributes[this.attributes.length - 1];
     t.value = t.value + e;
    }
   };
   e.prototype.prepend = function(e) {
    if (this.attributes) {
     var t = this.attributes[0];
     t.value = e + t.value;
    }
   };
   e.prototype.findRoot = function() {
    var e = this;
    while (e.parent && !(e.parent instanceof jn)) {
     e = e.parent;
    }
    return e;
   };
   e.prototype.removeChild = function(e) {
    if (this.children) {
     var t = this.children.indexOf(e);
     if (t !== -1) {
      this.children.splice(t, 1);
      return true;
     }
    }
    return false;
   };
   e.prototype.addAttr = function(e, t) {
    if (!this.attributes) {
     this.attributes = [];
    }
    for (var n = 0, r = this.attributes; n < r.length; n++) {
     var i = r[n];
     if (i.name === e) {
      i.value += " " + t;
      return;
     }
    }
    this.attributes.push({
     name: e,
     value: t
    });
   };
   e.prototype.clone = function(t) {
    if (t === void 0) {
     t = true;
    }
    var n = new e();
    if (this.attributes) {
     n.attributes = [];
     for (var r = 0, i = this.attributes; r < i.length; r++) {
      var a = i[r];
      n.addAttr(a.name, a.value);
     }
    }
    if (t && this.children) {
     n.children = [];
     for (var o = 0; o < this.children.length; o++) {
      n.addChild(this.children[o].clone());
     }
    }
    return n;
   };
   e.prototype.cloneWithParent = function() {
    var e = this.clone(false);
    if (this.parent && !(this.parent instanceof jn)) {
     var t = this.parent.cloneWithParent();
     t.addChild(e);
    }
    return e;
   };
   return e;
  }();
  var jn = function(e) {
   Un(t, e);
   function t() {
    return e !== null && e.apply(this, arguments) || this;
   }
   return t;
  }(qn);
  var Ln = function(e) {
   Un(t, e);
   function t(t) {
    var n = e.call(this) || this;
    n.addAttr("name", t);
    return n;
   }
   return t;
  }(qn);
  var Vn = function() {
   function e(e) {
    this.quote = e;
   }
   e.prototype.print = function(e) {
    this.result = [];
    if (e instanceof jn) {
     this.doPrint(e.children, 0);
    } else {
     this.doPrint([ e ], 0);
    }
    var t = this.result.join("\n");
    return [ {
     language: "html",
     value: t
    } ];
   };
   e.prototype.doPrint = function(e, t) {
    for (var n = 0, r = e; n < r.length; n++) {
     var i = r[n];
     this.doPrintElement(i, t);
     if (i.children) {
      this.doPrint(i.children, t + 1);
     }
    }
   };
   e.prototype.writeLine = function(e, t) {
    var n = new Array(e + 1).join("  ");
    this.result.push(n + t);
   };
   e.prototype.doPrintElement = function(e, t) {
    var n = e.findAttribute("name");
    if (e instanceof Ln || n === "…") {
     this.writeLine(t, n);
     return;
    }
    var r = [ "<" ];
    if (n) {
     r.push(n);
    } else {
     r.push("element");
    }
    if (e.attributes) {
     for (var i = 0, a = e.attributes; i < a.length; i++) {
      var o = a[i];
      if (o.name !== "name") {
       r.push(" ");
       r.push(o.name);
       var s = o.value;
       if (s) {
        r.push("=");
        r.push(Bn.ensure(s, this.quote));
       }
      }
     }
    }
    r.push(">");
    this.writeLine(t, r.join(""));
   };
   return e;
  }();
  var Bn;
  (function(e) {
   function t(e, t) {
    return t + n(e) + t;
   }
   e.ensure = t;
   function n(e) {
    var t = e.match(/^['"](.*)["']$/);
    if (t) {
     return t[1];
    }
    return e;
   }
   e.remove = n;
  })(Bn || (Bn = {}));
  function Wn(e, t) {
   var n = new qn();
   for (var r = 0, i = e.getChildren(); r < i.length; r++) {
    var a = i[r];
    switch (a.type) {
    case X.SelectorCombinator:
     if (t) {
      var o = a.getText().split("&");
      if (o.length === 1) {
       n.addAttr("name", o[0]);
       break;
      }
      n = t.cloneWithParent();
      if (o[0]) {
       var s = n.findRoot();
       s.prepend(o[0]);
      }
      for (var l = 1; l < o.length; l++) {
       if (l > 1) {
        var c = t.cloneWithParent();
        n.addChild(c.findRoot());
        n = c;
       }
       n.append(o[l]);
      }
     }
     break;

    case X.SelectorPlaceholder:
     if (a.getText() === "@at-root") {
      return n;
     }

    case X.ElementNameSelector:
     var h = a.getText();
     n.addAttr("name", h === "*" ? "element" : Kn(h));
     break;

    case X.ClassSelector:
     n.addAttr("class", Kn(a.getText().substring(1)));
     break;

    case X.IdentifierSelector:
     n.addAttr("id", Kn(a.getText().substring(1)));
     break;

    case X.MixinDeclaration:
     n.addAttr("class", a.getName());
     break;

    case X.PseudoSelector:
     n.addAttr(Kn(a.getText()), "");
     break;

    case X.AttributeSelector:
     var d = a;
     var u = d.getIdentifier();
     if (u) {
      var p = d.getValue();
      var m = d.getOperator();
      var f = void 0;
      if (p) {
       switch (Kn(m.getText())) {
       case "|=":
        f = Bn.remove(Kn(p.getText())) + "-…";
        break;

       case "^=":
        f = Bn.remove(Kn(p.getText())) + "…";
        break;

       case "$=":
        f = "…" + Bn.remove(Kn(p.getText()));
        break;

       case "~=":
        f = " … " + Bn.remove(Kn(p.getText())) + " … ";
        break;

       case "*=":
        f = "…" + Bn.remove(Kn(p.getText())) + "…";
        break;

       default:
        f = Bn.remove(Kn(p.getText()));
        break;
       }
      }
      n.addAttr(Kn(u.getText()), f);
     }
     break;
    }
   }
   return n;
  }
  function Kn(e) {
   var t = new H();
   t.setSource(e);
   var n = t.scanUnquotedString();
   if (n) {
    return n.text;
   }
   return e;
  }
  function $n(e) {
   var t = Xn(e);
   return new Vn('"').print(t);
  }
  function Gn(e) {
   var t = Wn(e);
   return new Vn('"').print(t);
  }
  var Hn = function() {
   function e(e) {
    this.prev = null;
    this.element = e;
   }
   e.prototype.processSelector = function(e) {
    var t = null;
    if (!(this.element instanceof jn)) {
     if (e.getChildren().some(function(e) {
      return e.hasChildren() && e.getChild(0).type === X.SelectorCombinator;
     })) {
      var n = this.element.findRoot();
      if (n.parent instanceof jn) {
       t = this.element;
       this.element = n.parent;
       this.element.removeChild(n);
       this.prev = null;
      }
     }
    }
    for (var r = 0, i = e.getChildren(); r < i.length; r++) {
     var a = i[r];
     if (a instanceof ce) {
      if (this.prev instanceof ce) {
       var o = new Ln("…");
       this.element.addChild(o);
       this.element = o;
      } else if (this.prev && (this.prev.matches("+") || this.prev.matches("~"))) {
       this.element = this.element.parent;
      }
      if (this.prev && this.prev.matches("~")) {
       this.element.addChild(Wn(a));
       this.element.addChild(new Ln("⋮"));
      }
      var s = Wn(a, t);
      var l = s.findRoot();
      this.element.addChild(l);
      this.element = s;
     }
     if (a instanceof ce || a.type === X.SelectorCombinatorParent || a.type === X.SelectorCombinatorShadowPiercingDescendant || a.type === X.SelectorCombinatorSibling || a.type === X.SelectorCombinatorAllSiblings) {
      this.prev = a;
     }
    }
   };
   return e;
  }();
  function Jn(e) {
   switch (e.type) {
   case X.MixinDeclaration:
   case X.Stylesheet:
    return true;
   }
   return false;
  }
  function Xn(e) {
   if (e.matches("@at-root")) {
    return null;
   }
   var t = new jn();
   var n = [];
   if (e.getParent() instanceof se) {
    var r = e.getParent().getParent();
    while (r && !Jn(r)) {
     if (r instanceof se) {
      if (r.getSelectors().matches("@at-root")) {
       break;
      }
      n.push(r);
     }
     r = r.getParent();
    }
   }
   var i = new Hn(t);
   for (var a = n.length - 1; a >= 0; a--) {
    var o = n[a].getSelectors().getChild(0);
    if (o) {
     i.processSelector(o);
    }
   }
   i.processSelector(e);
   return t;
  }
  var Yn = function() {
   function e() {}
   e.prototype.doHover = function(e, t, n) {
    function r(t) {
     return In["Range"].create(e.positionAt(t.offset), e.positionAt(t.end));
    }
    var i = e.offsetAt(t);
    var a = Z(n, i);
    for (var o = 0; o < a.length; o++) {
     var s = a[o];
     if (s instanceof le) {
      return {
       contents: $n(s),
       range: r(s)
      };
     }
     if (s instanceof ce) {
      return {
       contents: Gn(s),
       range: r(s)
      };
     }
     if (s instanceof me) {
      var l = s.getFullPropertyName();
      var c = an()[l];
      if (c) {
       var h = [];
       if (c.description) {
        h.push(In["MarkedString"].fromPlainText(c.description));
       }
       var d = Qt(c.browsers);
       if (d) {
        h.push(In["MarkedString"].fromPlainText(d));
       }
       if (h.length) {
        return {
         contents: h,
         range: r(s)
        };
       }
      }
     }
    }
    return null;
   };
   return e;
  }();
  var Qn = ot["loadMessageBundle"]();
  var Zn = function() {
   function e() {}
   e.prototype.findDefinition = function(e, t, n) {
    var r = new Cn(n);
    var i = e.offsetAt(t);
    var a = Q(n, i);
    if (!a) {
     return null;
    }
    var o = r.findSymbolFromNode(a);
    if (!o) {
     return null;
    }
    return {
     uri: e.uri,
     range: tr(o.node, e)
    };
   };
   e.prototype.findReferences = function(e, t, n) {
    var r = this.findDocumentHighlights(e, t, n);
    return r.map(function(t) {
     return {
      uri: e.uri,
      range: t.range
     };
    });
   };
   e.prototype.findDocumentHighlights = function(e, t, n) {
    var r = [];
    var i = e.offsetAt(t);
    var a = Q(n, i);
    if (!a || a.type === X.Stylesheet || a.type === X.Declarations) {
     return r;
    }
    var o = new Cn(n);
    var s = o.findSymbolFromNode(a);
    var l = a.getText();
    n.accept(function(t) {
     if (s) {
      if (o.matchesSymbol(t, s)) {
       r.push({
        kind: nr(t),
        range: tr(t, e)
       });
       return false;
      }
     } else if (a.type === t.type && a.length === t.length && l === t.getText()) {
      r.push({
       kind: nr(t),
       range: tr(t, e)
      });
     }
     return true;
    });
    return r;
   };
   e.prototype.findDocumentSymbols = function(e, t) {
    var n = [];
    t.accept(function(t) {
     var r = {
      name: null,
      kind: In["SymbolKind"].Class,
      location: null
     };
     var i = t;
     if (t instanceof le) {
      r.name = t.getText();
      i = t.findParent(X.Ruleset);
     } else if (t instanceof He) {
      r.name = t.getName();
      r.kind = In["SymbolKind"].Variable;
     } else if (t instanceof Ze) {
      r.name = t.getName();
      r.kind = In["SymbolKind"].Method;
     } else if (t instanceof Fe) {
      r.name = t.getName();
      r.kind = In["SymbolKind"].Function;
     } else if (t instanceof _e) {
      r.name = Qn("literal.keyframes", "@keyframes {0}", t.getName());
     } else if (t instanceof Te) {
      r.name = Qn("literal.fontface", "@font-face");
     }
     if (r.name) {
      r.location = In["Location"].create(e.uri, tr(i, e));
      n.push(r);
     }
     return true;
    });
    return n;
   };
   e.prototype.findDocumentColors = function(e, t) {
    var n = [];
    t.accept(function(t) {
     var r = er(t, e);
     if (r) {
      n.push(r);
     }
     return true;
    });
    return n;
   };
   e.prototype.getColorPresentations = function(e, t, n, r) {
    var i = [];
    var a = Math.round(n.red * 255), o = Math.round(n.green * 255), s = Math.round(n.blue * 255);
    var l;
    if (n.alpha === 1) {
     l = "rgb(" + a + ", " + o + ", " + s + ")";
    } else {
     l = "rgba(" + a + ", " + o + ", " + s + ", " + n.alpha + ")";
    }
    i.push({
     label: l,
     textEdit: In["TextEdit"].replace(r, l)
    });
    if (n.alpha === 1) {
     l = "#" + rr(a) + rr(o) + rr(s);
    } else {
     l = "#" + rr(a) + rr(o) + rr(s) + rr(Math.round(n.alpha * 255));
    }
    i.push({
     label: l,
     textEdit: In["TextEdit"].replace(r, l)
    });
    var c = Lt(n);
    if (c.a === 1) {
     l = "hsl(" + c.h + ", " + Math.round(c.s * 100) + "%, " + Math.round(c.l * 100) + "%)";
    } else {
     l = "hsla(" + c.h + ", " + Math.round(c.s * 100) + "%, " + Math.round(c.l * 100) + "%, " + c.a + ")";
    }
    i.push({
     label: l,
     textEdit: In["TextEdit"].replace(r, l)
    });
    return i;
   };
   e.prototype.doRename = function(e, t, n, r) {
    var i = this.findDocumentHighlights(e, t, r);
    var a = i.map(function(e) {
     return In["TextEdit"].replace(e.range, n);
    });
    return {
     changes: (o = {}, o[e.uri] = a, o)
    };
    var o;
   };
   return e;
  }();
  function er(e, t) {
   var n = Vt(e);
   if (n) {
    var r = tr(e, t);
    return {
     color: n,
     range: r
    };
   }
   return null;
  }
  function tr(e, t) {
   return In["Range"].create(t.positionAt(e.offset), t.positionAt(e.end));
  }
  function nr(e) {
   if (e.type === X.Selector) {
    return In["DocumentHighlightKind"].Write;
   }
   if (e instanceof re) {
    if (e.parent && e.parent instanceof fe) {
     if (e.isCustomProperty) {
      return In["DocumentHighlightKind"].Write;
     }
    }
   }
   if (e.parent) {
    switch (e.parent.type) {
    case X.FunctionDeclaration:
    case X.MixinDeclaration:
    case X.Keyframe:
    case X.VariableDeclaration:
    case X.FunctionParameter:
     return In["DocumentHighlightKind"].Write;
    }
   }
   return In["DocumentHighlightKind"].Read;
  }
  function rr(e) {
   var t = e.toString(16);
   return t.length !== 2 ? "0" + t : t;
  }
  var ir = ot["loadMessageBundle"]();
  var ar = rt.Warning;
  var or = rt.Error;
  var sr = rt.Ignore;
  var lr = function() {
   function e(e, t, n) {
    this.id = e;
    this.message = t;
    this.defaultValue = n;
   }
   return e;
  }();
  var cr = {
   AllVendorPrefixes: new lr("compatibleVendorPrefixes", ir("rule.vendorprefixes.all", "When using a vendor-specific prefix make sure to also include all other vendor-specific properties"), sr),
   IncludeStandardPropertyWhenUsingVendorPrefix: new lr("vendorPrefix", ir("rule.standardvendorprefix.all", "When using a vendor-specific prefix also include the standard property"), ar),
   DuplicateDeclarations: new lr("duplicateProperties", ir("rule.duplicateDeclarations", "Do not use duplicate style definitions"), sr),
   EmptyRuleSet: new lr("emptyRules", ir("rule.emptyRuleSets", "Do not use empty rulesets"), ar),
   ImportStatemement: new lr("importStatement", ir("rule.importDirective", "Import statements do not load in parallel"), sr),
   BewareOfBoxModelSize: new lr("boxModel", ir("rule.bewareOfBoxModelSize", "Do not use width or height when using padding or border"), sr),
   UniversalSelector: new lr("universalSelector", ir("rule.universalSelector", "The universal selector (*) is known to be slow"), sr),
   ZeroWithUnit: new lr("zeroUnits", ir("rule.zeroWidthUnit", "No unit for zero needed"), sr),
   RequiredPropertiesForFontFace: new lr("fontFaceProperties", ir("rule.fontFaceProperties", "@font-face rule must define 'src' and 'font-family' properties"), ar),
   HexColorLength: new lr("hexColorLength", ir("rule.hexColor", "Hex colors must consist of three, four, six or eight hex numbers"), or),
   ArgsInColorFunction: new lr("argumentsInColorFunction", ir("rule.colorFunction", "Invalid number of parameters"), or),
   UnknownProperty: new lr("unknownProperties", ir("rule.unknownProperty", "Unknown property."), ar),
   IEStarHack: new lr("ieHack", ir("rule.ieHack", "IE hacks are only necessary when supporting IE7 and older"), sr),
   UnknownVendorSpecificProperty: new lr("unknownVendorSpecificProperties", ir("rule.unknownVendorSpecificProperty", "Unknown vendor specific property."), sr),
   PropertyIgnoredDueToDisplay: new lr("propertyIgnoredDueToDisplay", ir("rule.propertyIgnoredDueToDisplay", "Property is ignored due to the display."), ar),
   AvoidImportant: new lr("important", ir("rule.avoidImportant", "Avoid using !important. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored."), sr),
   AvoidFloat: new lr("float", ir("rule.avoidFloat", "Avoid using 'float'. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes."), sr),
   AvoidIdSelector: new lr("idSelector", ir("rule.avoidIdSelector", "Selectors should not contain IDs because these rules are too tightly coupled with the HTML."), sr)
  };
  var hr = function() {
   function e(e) {
    if (e === void 0) {
     e = {};
    }
    this.conf = e;
   }
   e.prototype.get = function(e) {
    if (this.conf.hasOwnProperty(e.id)) {
     var t = dr(this.conf[e.id]);
     if (t) {
      return t;
     }
    }
    return e.defaultValue;
   };
   return e;
  }();
  function dr(e) {
   switch (e) {
   case "ignore":
    return rt.Ignore;

   case "warning":
    return rt.Warning;

   case "error":
    return rt.Error;
   }
   return null;
  }
  var ur = ot["loadMessageBundle"]();
  var pr = function() {
   function e() {}
   e.prototype.doCodeActions = function(e, t, n, r) {
    var i = [];
    if (n.diagnostics) {
     for (var a = 0, o = n.diagnostics; a < o.length; a++) {
      var s = o[a];
      this.appendFixesForMarker(e, r, s, i);
     }
    }
    return i;
   };
   e.prototype.getFixesForUnknownProperty = function(e, t, n, r) {
    var i = t.getName();
    var a = [];
    for (var o in an()) {
     var s = En(i, o);
     if (s >= i.length / 2) {
      a.push({
       property: o,
       score: s
      });
     }
    }
    a.sort(function(e, t) {
     return t.score - e.score;
    });
    var l = 3;
    for (var c = 0, h = a; c < h.length; c++) {
     var d = h[c];
     var u = d.property;
     var p = ur("css.codeaction.rename", "Rename to '{0}'", u);
     var m = In["TextEdit"].replace(n.range, u);
     r.push(In["Command"].create(p, "_css.applyCodeAction", e.uri, e.version, [ m ]));
     if (--l <= 0) {
      return;
     }
    }
   };
   e.prototype.appendFixesForMarker = function(e, t, n, r) {
    if (n.code !== cr.UnknownProperty.id) {
     return;
    }
    var i = e.offsetAt(n.range.start);
    var a = e.offsetAt(n.range.end);
    var o = Z(t, i);
    for (var s = o.length - 1; s >= 0; s--) {
     var l = o[s];
     if (l instanceof me) {
      var c = l.getProperty();
      if (c && c.offset === i && c.end === a) {
       this.getFixesForUnknownProperty(e, c, n, r);
       return;
      }
     }
    }
   };
   return e;
  }();
  var mr = ot["loadMessageBundle"]();
  var fr = function() {
   function e(e, t) {
    this.name = e;
    this.node = t;
   }
   return e;
  }();
  var gr = function() {
   function e() {
    this.data = {};
   }
   e.prototype.add = function(e, t, n) {
    var r = this.data[e];
    if (!r) {
     r = {
      nodes: [],
      names: []
     };
     this.data[e] = r;
    }
    r.names.push(t);
    if (n) {
     r.nodes.push(n);
    }
   };
   return e;
  }();
  var br = function() {
   function e(e, t) {
    this.warnings = [];
    this.settings = t;
    this.documentText = e.getText();
    this.keyframes = new gr();
   }
   e.entries = function(t, n, r, i) {
    var a = new e(n, r);
    t.acceptVisitor(a);
    a.completeValidations();
    return a.getEntries(i);
   };
   e.prototype.fetch = function(e, t) {
    var n = [];
    for (var r = 0, i = e; r < i.length; r++) {
     var a = i[r];
     if (a.name === t) {
      n.push(a);
     }
    }
    return n;
   };
   e.prototype.fetchWithValue = function(e, t, n) {
    var r = [];
    for (var i = 0, a = e; i < a.length; i++) {
     var o = a[i];
     if (o.name === t) {
      var s = o.node.getValue();
      if (s && this.findValueInExpression(s, n)) {
       r.push(o);
      }
     }
    }
    return r;
   };
   e.prototype.findValueInExpression = function(e, t) {
    var n = false;
    e.accept(function(e) {
     if (e.type === X.Identifier && e.getText() === t) {
      n = true;
     }
     return !n;
    });
    return n;
   };
   e.prototype.getEntries = function(e) {
    if (e === void 0) {
     e = rt.Warning | rt.Error;
    }
    return this.warnings.filter(function(t) {
     return (t.getLevel() & e) !== 0;
    });
   };
   e.prototype.addEntry = function(e, t, n) {
    var r = new it(e, t, this.settings.get(t), n);
    this.warnings.push(r);
   };
   e.prototype.getMissingNames = function(e, t) {
    e = e.slice(0);
    for (var n = 0; n < t.length; n++) {
     var r = e.indexOf(t[n]);
     if (r !== -1) {
      e[r] = null;
     }
    }
    var i = null;
    for (var n = 0; n < e.length; n++) {
     var a = e[n];
     if (a) {
      if (i === null) {
       i = mr("namelist.single", "'{0}'", a);
      } else {
       i = mr("namelist.concatenated", "{0}, '{1}'", i, a);
      }
     }
    }
    return i;
   };
   e.prototype.visitNode = function(e) {
    switch (e.type) {
    case X.Keyframe:
     return this.visitKeyframe(e);

    case X.FontFace:
     return this.visitFontFace(e);

    case X.Ruleset:
     return this.visitRuleSet(e);

    case X.SimpleSelector:
     return this.visitSimpleSelector(e);

    case X.Function:
     return this.visitFunction(e);

    case X.NumericValue:
     return this.visitNumericValue(e);

    case X.Import:
     return this.visitImport(e);

    case X.HexColorValue:
     return this.visitHexColorValue(e);

    case X.Prio:
     return this.visitPrio(e);
    }
    return true;
   };
   e.prototype.completeValidations = function() {
    this.validateKeyframes();
   };
   e.prototype.visitKeyframe = function(e) {
    var t = e.getKeyword();
    var n = t.getText();
    this.keyframes.add(e.getName(), n, n !== "@keyframes" ? t : null);
    return true;
   };
   e.prototype.validateKeyframes = function() {
    var e = [ "@-webkit-keyframes", "@-moz-keyframes", "@-o-keyframes" ];
    for (var t in this.keyframes.data) {
     var n = this.keyframes.data[t].names;
     var r = n.indexOf("@keyframes") === -1;
     if (!r && n.length === 1) {
      continue;
     }
     var i = this.getMissingNames(e, n);
     if (i || r) {
      for (var a = 0, o = this.keyframes.data[t].nodes; a < o.length; a++) {
       var s = o[a];
       if (r) {
        var l = mr("keyframes.standardrule.missing", "Always define standard rule '@keyframes' when defining keyframes.");
        this.addEntry(s, cr.IncludeStandardPropertyWhenUsingVendorPrefix, l);
       }
       if (i) {
        var l = mr("keyframes.vendorspecific.missing", "Always include all vendor specific rules: Missing: {0}", i);
        this.addEntry(s, cr.AllVendorPrefixes, l);
       }
      }
     }
    }
    return true;
   };
   e.prototype.visitSimpleSelector = function(e) {
    var t = this.documentText.charAt(e.offset);
    if (e.length === 1 && t === "*") {
     this.addEntry(e, cr.UniversalSelector);
    }
    if (t === "#") {
     this.addEntry(e, cr.AvoidIdSelector);
    }
    return true;
   };
   e.prototype.visitImport = function(e) {
    this.addEntry(e, cr.ImportStatemement);
    return true;
   };
   e.prototype.visitRuleSet = function(t) {
    var n = t.getDeclarations();
    if (!n) {
     return false;
    }
    if (!n.hasChildren()) {
     this.addEntry(t.getSelectors(), cr.EmptyRuleSet);
    }
    var r = this;
    var i = [];
    for (var a = 0, o = n.getChildren(); a < o.length; a++) {
     var s = o[a];
     if (s instanceof me) {
      var l = s;
      i.push(new fr(l.getFullPropertyName().toLowerCase(), l));
     }
    }
    if (this.fetch(i, "box-sizing").length === 0) {
     var c = this.fetch(i, "width");
     if (c.length > 0) {
      var h = false;
      for (var d = 0, u = [ "border", "border-left", "border-right", "padding", "padding-left", "padding-right" ]; d < u.length; d++) {
       var p = u[d];
       var m = this.fetch(i, p);
       for (var f = 0, g = m; f < g.length; f++) {
        var s = g[f];
        var b = s.node.getValue();
        if (b && !b.matches("none")) {
         this.addEntry(s.node, cr.BewareOfBoxModelSize);
         h = true;
        }
       }
      }
      if (h) {
       for (var y = 0, v = c; y < v.length; y++) {
        var w = v[y];
        this.addEntry(w.node, cr.BewareOfBoxModelSize);
       }
      }
     }
     var x = this.fetch(i, "height");
     if (x.length > 0) {
      var h = false;
      for (var k = 0, C = [ "border", "border-top", "border-bottom", "padding", "padding-top", "padding-bottom" ]; k < C.length; k++) {
       var p = C[k];
       var S = this.fetch(i, p);
       for (var F = 0, E = S; F < E.length; F++) {
        var s = E[F];
        var b = s.node.getValue();
        if (b && !b.matches("none")) {
         this.addEntry(s.node, cr.BewareOfBoxModelSize);
         h = true;
        }
       }
      }
      if (h) {
       for (var T = 0, I = x; T < I.length; T++) {
        var _ = I[T];
        this.addEntry(_.node, cr.BewareOfBoxModelSize);
       }
      }
     }
    }
    var R = this.fetchWithValue(i, "display", "inline");
    if (R.length > 0) {
     for (var P = 0, D = [ "width", "height", "margin-top", "margin-bottom", "float" ]; P < D.length; P++) {
      var A = D[P];
      var O = r.fetch(i, A);
      for (var z = 0; z < O.length; z++) {
       var N = O[z].node;
       var b = N.getValue();
       if (A === "float" && (!b || b.matches("none"))) {
        continue;
       }
       r.addEntry(N, cr.PropertyIgnoredDueToDisplay, mr("rule.propertyIgnoredDueToDisplayInline", "Property is ignored due to the display. With 'display: inline', the width, height, margin-top, margin-bottom, and float properties have no effect."));
      }
     }
    }
    R = this.fetchWithValue(i, "display", "inline-block");
    if (R.length > 0) {
     var O = this.fetch(i, "float");
     for (var z = 0; z < O.length; z++) {
      var M = O[z].node;
      var b = M.getValue();
      if (b && !b.matches("none")) {
       this.addEntry(M, cr.PropertyIgnoredDueToDisplay, mr("rule.propertyIgnoredDueToDisplayInlineBlock", "inline-block is ignored due to the float. If 'float' has a value other than 'none', the box is floated and 'display' is treated as 'block'"));
      }
     }
    }
    R = this.fetchWithValue(i, "display", "block");
    if (R.length > 0) {
     var O = this.fetch(i, "vertical-align");
     for (var z = 0; z < O.length; z++) {
      this.addEntry(O[z].node, cr.PropertyIgnoredDueToDisplay, mr("rule.propertyIgnoredDueToDisplayBlock", "Property is ignored due to the display. With 'display: block', vertical-align should not be used."));
     }
    }
    var U = this.fetch(i, "float");
    for (var z = 0; z < U.length; z++) {
     this.addEntry(U[z].node, cr.AvoidFloat);
    }
    for (var q = 0; q < i.length; q++) {
     var s = i[q];
     if (s.name !== "background") {
      var b = s.node.getValue();
      if (b && this.documentText.charAt(b.offset) !== "-") {
       var j = this.fetch(i, s.name);
       if (j.length > 1) {
        for (var L = 0; L < j.length; L++) {
         var V = j[L].node.getValue();
         if (V && this.documentText.charAt(V.offset) !== "-" && j[L] !== s) {
          this.addEntry(s.node, cr.DuplicateDeclarations);
         }
        }
       }
      }
     }
    }
    var B = new gr();
    var W = false;
    for (var K = 0, $ = n.getChildren(); K < $.length; K++) {
     var G = $[K];
     if (this.isCSSDeclaration(G)) {
      var l = G;
      var H = l.getFullPropertyName();
      var J = H.charAt(0);
      if (J === "-") {
       if (H.charAt(1) !== "-") {
        if (!Kt(H)) {
         this.addEntry(l.getProperty(), cr.UnknownVendorSpecificProperty);
        }
        var X = l.getNonPrefixedPropertyName();
        B.add(X, H, l.getProperty());
       }
      } else {
       if (J === "*" || J === "_") {
        this.addEntry(l.getProperty(), cr.IEStarHack);
        H = H.substr(1);
       }
       if (!Kt(H)) {
        this.addEntry(l.getProperty(), cr.UnknownProperty, mr("property.unknownproperty.detailed", "Unknown property: '{0}'", H));
       }
       B.add(H, H, null);
      }
     } else {
      W = true;
     }
    }
    if (!W) {
     for (var Y in B.data) {
      var Q = B.data[Y];
      var Z = Q.names;
      var ee = $t(Y) && Z.indexOf(Y) === -1;
      if (!ee && Z.length === 1) {
       continue;
      }
      var te = [];
      for (var q = 0, ne = e.prefixes.length; q < ne; q++) {
       var re = e.prefixes[q];
       if ($t(re + Y)) {
        te.push(re + Y);
       }
      }
      var ie = this.getMissingNames(te, Z);
      if (ie || ee) {
       for (var ae = 0, oe = Q.nodes; ae < oe.length; ae++) {
        var se = oe[ae];
        if (ee) {
         var le = mr("property.standard.missing", "Also define the standard property '{0}' for compatibility", Y);
         this.addEntry(se, cr.IncludeStandardPropertyWhenUsingVendorPrefix, le);
        }
        if (ie) {
         var le = mr("property.vendorspecific.missing", "Always include all vendor specific properties: Missing: {0}", ie);
         this.addEntry(se, cr.AllVendorPrefixes, le);
        }
       }
      }
     }
    }
    return true;
   };
   e.prototype.visitPrio = function(e) {
    this.addEntry(e, cr.AvoidImportant);
    return true;
   };
   e.prototype.visitNumericValue = function(e) {
    var t = e.findParent(X.Declaration);
    if (t) {
     var n = t.getValue();
     if (n && n.offset === e.offset && n.length === e.length) {
      var r = e.getValue();
      if (!r.unit || Et.length.indexOf(r.unit.toLowerCase()) === -1) {
       return true;
      }
      if (parseFloat(r.value) === 0 && !!r.unit) {
       this.addEntry(e, cr.ZeroWithUnit);
      }
     }
    }
    return true;
   };
   e.prototype.visitFontFace = function(e) {
    var t = e.getDeclarations();
    if (!t) {
     return;
    }
    var n = false, r = false;
    var i = false;
    for (var a = 0, o = t.getChildren(); a < o.length; a++) {
     var s = o[a];
     if (this.isCSSDeclaration(s)) {
      var l = s.getProperty().getName().toLowerCase();
      if (l === "src") {
       n = true;
      }
      if (l === "font-family") {
       r = true;
      }
     } else {
      i = true;
     }
    }
    if (!i && (!n || !r)) {
     this.addEntry(e, cr.RequiredPropertiesForFontFace);
    }
    return true;
   };
   e.prototype.isCSSDeclaration = function(e) {
    if (e instanceof me) {
     if (!e.getValue()) {
      return false;
     }
     var t = e.getProperty();
     if (!t || t.getIdentifier().containsInterpolation()) {
      return false;
     }
     return true;
    }
    return false;
   };
   e.prototype.visitHexColorValue = function(e) {
    var t = e.length;
    if (t !== 9 && t !== 7 && t !== 5 && t !== 4) {
     this.addEntry(e, cr.HexColorLength);
    }
    return false;
   };
   e.prototype.visitFunction = function(e) {
    var t = e.getName().toLowerCase();
    var n = -1;
    var r = 0;
    switch (t) {
    case "rgb(":
    case "hsl(":
     n = 3;
     break;

    case "rgba(":
    case "hsla(":
     n = 4;
     break;
    }
    if (n !== -1) {
     e.getArguments().accept(function(e) {
      if (e instanceof Ve) {
       r += 1;
       return false;
      }
      return true;
     });
     if (r !== n) {
      this.addEntry(e, cr.ArgsInColorFunction);
     }
    }
    return true;
   };
   e.prefixes = [ "-ms-", "-moz-", "-o-", "-webkit-" ];
   return e;
  }();
  var yr = function() {
   function e() {}
   e.prototype.configure = function(e) {
    this.settings = e;
   };
   e.prototype.doValidation = function(e, t, n) {
    if (n === void 0) {
     n = this.settings;
    }
    if (n && n.validate === false) {
     return [];
    }
    var r = [];
    r.push.apply(r, at.entries(t));
    r.push.apply(r, br.entries(t, e, new hr(n && n.lint)));
    function i(t) {
     var n = In["Range"].create(e.positionAt(t.getOffset()), e.positionAt(t.getOffset() + t.getLength()));
     return {
      code: t.getRule().id,
      source: e.languageId,
      message: t.getMessage(),
      severity: t.getLevel() === rt.Warning ? In["DiagnosticSeverity"].Warning : In["DiagnosticSeverity"].Error,
      range: n
     };
    }
    return r.filter(function(e) {
     return e.getLevel() !== rt.Ignore;
    }).map(i);
   };
   return e;
  }();
  var vr = undefined && undefined.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  var wr = "/".charCodeAt(0);
  var xr = "\n".charCodeAt(0);
  var kr = "\r".charCodeAt(0);
  var Cr = "\f".charCodeAt(0);
  var Sr = "$".charCodeAt(0);
  var Fr = "#".charCodeAt(0);
  var Er = "{".charCodeAt(0);
  var Tr = "=".charCodeAt(0);
  var Ir = "!".charCodeAt(0);
  var _r = "<".charCodeAt(0);
  var Rr = ">".charCodeAt(0);
  var Pr = ".".charCodeAt(0);
  var Dr = r.CustomToken;
  var Ar = Dr++;
  var Or = Dr++;
  var zr = Dr++;
  var Nr = Dr++;
  var Mr = Dr++;
  var Ur = Dr++;
  var qr = Dr++;
  var jr = Dr++;
  var Lr = function(e) {
   vr(t, e);
   function t() {
    return e !== null && e.apply(this, arguments) || this;
   }
   t.prototype.scanNext = function(t) {
    if (this.stream.advanceIfChar(Sr)) {
     var n = [ "$" ];
     if (this.ident(n)) {
      return this.finishToken(t, Ar, n.join(""));
     } else {
      this.stream.goBackTo(t);
     }
    }
    if (this.stream.advanceIfChars([ Fr, Er ])) {
     return this.finishToken(t, Or);
    }
    if (this.stream.advanceIfChars([ Tr, Tr ])) {
     return this.finishToken(t, Nr);
    }
    if (this.stream.advanceIfChars([ Ir, Tr ])) {
     return this.finishToken(t, Mr);
    }
    if (this.stream.advanceIfChar(_r)) {
     if (this.stream.advanceIfChar(Tr)) {
      return this.finishToken(t, qr);
     }
     return this.finishToken(t, r.Delim);
    }
    if (this.stream.advanceIfChar(Rr)) {
     if (this.stream.advanceIfChar(Tr)) {
      return this.finishToken(t, Ur);
     }
     return this.finishToken(t, r.Delim);
    }
    if (this.stream.advanceIfChars([ Pr, Pr, Pr ])) {
     return this.finishToken(t, jr);
    }
    return e.prototype.scanNext.call(this, t);
   };
   t.prototype.comment = function() {
    if (e.prototype.comment.call(this)) {
     return true;
    }
    if (!this.inURL && this.stream.advanceIfChars([ wr, wr ])) {
     this.stream.advanceWhileChar(function(e) {
      switch (e) {
      case xr:
      case kr:
      case Cr:
       return false;

      default:
       return true;
      }
     });
     return true;
    } else {
     return false;
    }
   };
   return t;
  }(H);
  var Vr = ot["loadMessageBundle"]();
  var Br = function() {
   function e(e, t) {
    this.id = e;
    this.message = t;
   }
   return e;
  }();
  var Wr = {
   FromExpected: new Br("scss-fromexpected", Vr("expected.from", "'from' expected")),
   ThroughOrToExpected: new Br("scss-throughexpected", Vr("expected.through", "'through' or 'to' expected")),
   InExpected: new Br("scss-fromexpected", Vr("expected.in", "'in' expected"))
  };
  var Kr = undefined && undefined.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  var $r = function(e) {
   Kr(t, e);
   function t() {
    return e.call(this, new Lr()) || this;
   }
   t.prototype._parseStylesheetStatement = function() {
    var t = e.prototype._parseStylesheetStatement.call(this);
    if (t) {
     return t;
    }
    if (this.peek(r.AtKeyword)) {
     return this._parseWarnAndDebug() || this._parseControlStatement() || this._parseMixinDeclaration() || this._parseMixinContent() || this._parseMixinReference() || this._parseFunctionDeclaration();
    }
    return this._parseVariableDeclaration();
   };
   t.prototype._parseImport = function() {
    if (!this.peekKeyword("@import")) {
     return null;
    }
    var e = this.create(Pe);
    this.consumeToken();
    if (!e.addChild(this._parseURILiteral()) && !e.addChild(this._parseStringLiteral())) {
     return this.finish(e, ct.URIOrStringExpected);
    }
    while (this.accept(r.Comma)) {
     if (!e.addChild(this._parseURILiteral()) && !e.addChild(this._parseStringLiteral())) {
      return this.finish(e, ct.URIOrStringExpected);
     }
    }
    if (!this.peek(r.SemiColon) && !this.peek(r.EOF)) {
     e.setMedialist(this._parseMediaQueryList());
    }
    return this.finish(e);
   };
   t.prototype._parseVariableDeclaration = function(e) {
    if (e === void 0) {
     e = [];
    }
    if (!this.peek(Ar)) {
     return null;
    }
    var t = this.create(He);
    if (!t.setVariable(this._parseVariable())) {
     return null;
    }
    if (!this.accept(r.Colon)) {
     return this.finish(t, ct.ColonExpected);
    }
    t.colonPosition = this.prevToken.offset;
    if (!t.setValue(this._parseExpr())) {
     return this.finish(t, ct.VariableValueExpected, [], e);
    }
    while (this.accept(r.Exclamation)) {
     if (!this.peekRegExp(r.Ident, /^(default|global)$/)) {
      return this.finish(t, ct.UnknownKeyword);
     }
     this.consumeToken();
    }
    if (this.peek(r.SemiColon)) {
     t.semicolonPosition = this.token.offset;
    }
    return this.finish(t);
   };
   t.prototype._parseMediaFeatureName = function() {
    return this._parseFunction() || this._parseIdent() || this._parseVariable();
   };
   t.prototype._parseKeyframeSelector = function() {
    return this._tryParseKeyframeSelector() || this._parseControlStatement(this._parseKeyframeSelector.bind(this)) || this._parseVariableDeclaration() || this._parseMixinContent();
   };
   t.prototype._parseVariable = function() {
    if (!this.peek(Ar)) {
     return null;
    }
    var e = this.create(Xe);
    this.consumeToken();
    return e;
   };
   t.prototype._parseIdent = function(e) {
    var t = this;
    if (!this.peek(r.Ident) && !this.peek(Or) && !this.peekDelim("-")) {
     return null;
    }
    var n = this.create(re);
    n.referenceTypes = e;
    var i = false;
    var a = function() {
     if (!t.acceptDelim("-")) {
      return null;
     }
     if (!t.hasWhitespace() && t.acceptDelim("-")) {
      n.isCustomProperty = true;
     }
     if (!t.hasWhitespace()) {
      return t._parseInterpolation();
     }
     return null;
    };
    while (this.accept(r.Ident) || n.addChild(this._parseInterpolation() || this.try(a))) {
     i = true;
     if (!this.hasWhitespace() && this.acceptDelim("-")) {}
     if (this.hasWhitespace()) {
      break;
     }
    }
    return i ? this.finish(n) : null;
   };
   t.prototype._parseTerm = function() {
    var t = e.prototype._parseTerm.call(this);
    if (t) {
     return t;
    }
    t = this.create(Be);
    if (t.setExpression(this._parseVariable()) || t.setExpression(this._parseSelectorCombinator()) || t.setExpression(this._tryParsePrio())) {
     return this.finish(t);
    }
    return null;
   };
   t.prototype._parseInterpolation = function() {
    if (this.peek(Or)) {
     var e = this.create(Je);
     this.consumeToken();
     if (!e.addChild(this._parseExpr()) && !this._parseSelectorCombinator()) {
      if (this.accept(r.CurlyR)) {
       return this.finish(e);
      }
      return this.finish(e, ct.ExpressionExpected);
     }
     if (!this.accept(r.CurlyR)) {
      return this.finish(e, ct.RightCurlyExpected);
     }
     return this.finish(e);
    }
    return null;
   };
   t.prototype._parseOperator = function() {
    if (this.peek(Nr) || this.peek(Mr) || this.peek(Ur) || this.peek(qr) || this.peekDelim(">") || this.peekDelim("<") || this.peekIdent("and") || this.peekIdent("or") || this.peekDelim("%")) {
     var t = this.createNode(X.Operator);
     this.consumeToken();
     return this.finish(t);
    }
    return e.prototype._parseOperator.call(this);
   };
   t.prototype._parseUnaryOperator = function() {
    if (this.peekIdent("not")) {
     var t = this.create(te);
     this.consumeToken();
     return this.finish(t);
    }
    return e.prototype._parseUnaryOperator.call(this);
   };
   t.prototype._parseRuleSetDeclaration = function() {
    if (this.peek(r.AtKeyword)) {
     return this._parseKeyframe() || this._parseImport() || this._parseMedia(true) || this._parseFontFace() || this._parseWarnAndDebug() || this._parseControlStatement() || this._parseFunctionDeclaration() || this._parseExtends() || this._parseMixinReference() || this._parseMixinContent() || this._parseMixinDeclaration() || this._parseRuleset(true) || this._parseSupports(true);
    }
    return this._parseVariableDeclaration() || this._tryParseRuleset(true) || e.prototype._parseRuleSetDeclaration.call(this);
   };
   t.prototype._parseDeclaration = function(e) {
    var t = this.create(me);
    if (!t.setProperty(this._parseProperty())) {
     return null;
    }
    if (!this.accept(r.Colon)) {
     return this.finish(t, ct.ColonExpected, [ r.Colon ], e);
    }
    t.colonPosition = this.prevToken.offset;
    var n = false;
    if (t.setValue(this._parseExpr())) {
     n = true;
     t.addChild(this._parsePrio());
    }
    if (this.peek(r.CurlyL)) {
     t.setNestedProperties(this._parseNestedProperties());
    } else {
     if (!n) {
      return this.finish(t, ct.PropertyValueExpected);
     }
    }
    if (this.peek(r.SemiColon)) {
     t.semicolonPosition = this.token.offset;
    }
    return this.finish(t);
   };
   t.prototype._parseNestedProperties = function() {
    var e = this.create(Ie);
    return this._parseBody(e, this._parseDeclaration.bind(this));
   };
   t.prototype._parseExtends = function() {
    if (this.peekKeyword("@extend")) {
     var e = this.create(Ye);
     this.consumeToken();
     if (!e.getSelectors().addChild(this._parseSimpleSelector())) {
      return this.finish(e, ct.SelectorExpected);
     }
     while (this.accept(r.Comma)) {
      e.getSelectors().addChild(this._parseSimpleSelector());
     }
     if (this.accept(r.Exclamation)) {
      if (!this.acceptIdent("optional")) {
       return this.finish(e, ct.UnknownKeyword);
      }
     }
     return this.finish(e);
    }
    return null;
   };
   t.prototype._parseSimpleSelectorBody = function() {
    return this._parseSelectorCombinator() || this._parseSelectorPlaceholder() || e.prototype._parseSimpleSelectorBody.call(this);
   };
   t.prototype._parseSelectorCombinator = function() {
    if (this.peekDelim("&")) {
     var e = this.createNode(X.SelectorCombinator);
     this.consumeToken();
     while (!this.hasWhitespace() && (this.acceptDelim("-") || this.accept(r.Num) || this.accept(r.Dimension) || e.addChild(this._parseIdent()) || this.acceptDelim("&"))) {}
     return this.finish(e);
    }
    return null;
   };
   t.prototype._parseSelectorPlaceholder = function() {
    if (this.peekDelim("%")) {
     var e = this.createNode(X.SelectorPlaceholder);
     this.consumeToken();
     this._parseIdent();
     return this.finish(e);
    } else if (this.peekKeyword("@at-root")) {
     var e = this.createNode(X.SelectorPlaceholder);
     this.consumeToken();
     return this.finish(e);
    }
    return null;
   };
   t.prototype._parseElementName = function() {
    var t = this.mark();
    var n = e.prototype._parseElementName.call(this);
    if (n && !this.hasWhitespace() && this.peek(r.ParenthesisL)) {
     this.restoreAtMark(t);
     return null;
    }
    return n;
   };
   t.prototype._tryParsePseudoIdentifier = function() {
    return this._parseInterpolation() || e.prototype._tryParsePseudoIdentifier.call(this);
   };
   t.prototype._parseWarnAndDebug = function() {
    if (!this.peekKeyword("@debug") && !this.peekKeyword("@warn") && !this.peekKeyword("@error")) {
     return null;
    }
    var e = this.createNode(X.Debug);
    this.consumeToken();
    e.addChild(this._parseExpr());
    return this.finish(e);
   };
   t.prototype._parseControlStatement = function(e) {
    if (e === void 0) {
     e = this._parseRuleSetDeclaration.bind(this);
    }
    if (!this.peek(r.AtKeyword)) {
     return null;
    }
    return this._parseIfStatement(e) || this._parseForStatement(e) || this._parseEachStatement(e) || this._parseWhileStatement(e);
   };
   t.prototype._parseIfStatement = function(e) {
    if (!this.peekKeyword("@if")) {
     return null;
    }
    return this._internalParseIfStatement(e);
   };
   t.prototype._internalParseIfStatement = function(e) {
    var t = this.create(we);
    this.consumeToken();
    if (!t.setExpression(this._parseExpr(true))) {
     return this.finish(t, ct.ExpressionExpected);
    }
    this._parseBody(t, e);
    if (this.acceptKeyword("@else")) {
     if (this.peekIdent("if")) {
      t.setElseClause(this._internalParseIfStatement(e));
     } else if (this.peek(r.CurlyL)) {
      var n = this.create(Se);
      this._parseBody(n, e);
      t.setElseClause(n);
     }
    }
    return this.finish(t);
   };
   t.prototype._parseForStatement = function(e) {
    if (!this.peekKeyword("@for")) {
     return null;
    }
    var t = this.create(xe);
    this.consumeToken();
    if (!t.setVariable(this._parseVariable())) {
     return this.finish(t, ct.VariableNameExpected, [ r.CurlyR ]);
    }
    if (!this.acceptIdent("from")) {
     return this.finish(t, Wr.FromExpected, [ r.CurlyR ]);
    }
    if (!t.addChild(this._parseBinaryExpr())) {
     return this.finish(t, ct.ExpressionExpected, [ r.CurlyR ]);
    }
    if (!this.acceptIdent("to") && !this.acceptIdent("through")) {
     return this.finish(t, Wr.ThroughOrToExpected, [ r.CurlyR ]);
    }
    if (!t.addChild(this._parseBinaryExpr())) {
     return this.finish(t, ct.ExpressionExpected, [ r.CurlyR ]);
    }
    return this._parseBody(t, e);
   };
   t.prototype._parseEachStatement = function(e) {
    if (!this.peekKeyword("@each")) {
     return null;
    }
    var t = this.create(ke);
    this.consumeToken();
    var n = t.getVariables();
    if (!n.addChild(this._parseVariable())) {
     return this.finish(t, ct.VariableNameExpected, [ r.CurlyR ]);
    }
    while (this.accept(r.Comma)) {
     if (!n.addChild(this._parseVariable())) {
      return this.finish(t, ct.VariableNameExpected, [ r.CurlyR ]);
     }
    }
    this.finish(n);
    if (!this.acceptIdent("in")) {
     return this.finish(t, Wr.InExpected, [ r.CurlyR ]);
    }
    if (!t.addChild(this._parseExpr())) {
     return this.finish(t, ct.ExpressionExpected, [ r.CurlyR ]);
    }
    return this._parseBody(t, e);
   };
   t.prototype._parseWhileStatement = function(e) {
    if (!this.peekKeyword("@while")) {
     return null;
    }
    var t = this.create(Ce);
    this.consumeToken();
    if (!t.addChild(this._parseBinaryExpr())) {
     return this.finish(t, ct.ExpressionExpected, [ r.CurlyR ]);
    }
    return this._parseBody(t, e);
   };
   t.prototype._parseFunctionBodyDeclaration = function() {
    return this._parseVariableDeclaration() || this._parseReturnStatement() || this._parseWarnAndDebug() || this._parseControlStatement(this._parseFunctionBodyDeclaration.bind(this));
   };
   t.prototype._parseFunctionDeclaration = function() {
    if (!this.peekKeyword("@function")) {
     return null;
    }
    var e = this.create(Fe);
    this.consumeToken();
    if (!e.setIdentifier(this._parseIdent([ Y.Function ]))) {
     return this.finish(e, ct.IdentifierExpected, [ r.CurlyR ]);
    }
    if (!this.accept(r.ParenthesisL)) {
     return this.finish(e, ct.LeftParenthesisExpected, [ r.CurlyR ]);
    }
    if (e.getParameters().addChild(this._parseParameterDeclaration())) {
     while (this.accept(r.Comma)) {
      if (!e.getParameters().addChild(this._parseParameterDeclaration())) {
       return this.finish(e, ct.VariableNameExpected);
      }
     }
    }
    if (!this.accept(r.ParenthesisR)) {
     return this.finish(e, ct.RightParenthesisExpected, [ r.CurlyR ]);
    }
    return this._parseBody(e, this._parseFunctionBodyDeclaration.bind(this));
   };
   t.prototype._parseReturnStatement = function() {
    if (!this.peekKeyword("@return")) {
     return null;
    }
    var e = this.createNode(X.ReturnStatement);
    this.consumeToken();
    if (!e.addChild(this._parseExpr())) {
     return this.finish(e, ct.ExpressionExpected);
    }
    return this.finish(e);
   };
   t.prototype._parseMixinDeclaration = function() {
    if (!this.peekKeyword("@mixin")) {
     return null;
    }
    var e = this.create(Ze);
    this.consumeToken();
    if (!e.setIdentifier(this._parseIdent([ Y.Mixin ]))) {
     return this.finish(e, ct.IdentifierExpected, [ r.CurlyR ]);
    }
    if (this.accept(r.ParenthesisL)) {
     if (e.getParameters().addChild(this._parseParameterDeclaration())) {
      while (this.accept(r.Comma)) {
       if (!e.getParameters().addChild(this._parseParameterDeclaration())) {
        return this.finish(e, ct.VariableNameExpected);
       }
      }
     }
     if (!this.accept(r.ParenthesisR)) {
      return this.finish(e, ct.RightParenthesisExpected, [ r.CurlyR ]);
     }
    }
    return this._parseBody(e, this._parseRuleSetDeclaration.bind(this));
   };
   t.prototype._parseParameterDeclaration = function() {
    var e = this.create(ye);
    if (!e.setIdentifier(this._parseVariable())) {
     return null;
    }
    if (this.accept(jr)) {}
    if (this.accept(r.Colon)) {
     if (!e.setDefaultValue(this._parseExpr(true))) {
      return this.finish(e, ct.VariableValueExpected, [], [ r.Comma, r.ParenthesisR ]);
     }
    }
    return this.finish(e);
   };
   t.prototype._parseMixinContent = function() {
    if (!this.peekKeyword("@content")) {
     return null;
    }
    var e = this.createNode(X.MixinContent);
    this.consumeToken();
    return this.finish(e);
   };
   t.prototype._parseMixinReference = function() {
    if (!this.peekKeyword("@include")) {
     return null;
    }
    var e = this.create(Qe);
    this.consumeToken();
    if (!e.setIdentifier(this._parseIdent([ Y.Mixin ]))) {
     return this.finish(e, ct.IdentifierExpected, [ r.CurlyR ]);
    }
    if (this.accept(r.ParenthesisL)) {
     if (e.getArguments().addChild(this._parseFunctionArgument())) {
      while (this.accept(r.Comma)) {
       if (!e.getArguments().addChild(this._parseFunctionArgument())) {
        return this.finish(e, ct.ExpressionExpected);
       }
      }
     }
     if (!this.accept(r.ParenthesisR)) {
      return this.finish(e, ct.RightParenthesisExpected);
     }
    }
    if (this.peek(r.CurlyL)) {
     var t = this.create(oe);
     this._parseBody(t, this._parseMixinReferenceBodyStatement.bind(this));
     e.setContent(t);
    }
    return this.finish(e);
   };
   t.prototype._parseMixinReferenceBodyStatement = function() {
    return this._tryParseKeyframeSelector() || this._parseRuleSetDeclaration();
   };
   t.prototype._parseFunctionArgument = function() {
    var e = this.create(ve);
    var t = this.mark();
    var n = this._parseVariable();
    if (n) {
     if (!this.accept(r.Colon)) {
      if (this.accept(jr)) {
       e.setValue(n);
       return this.finish(e);
      } else {
       this.restoreAtMark(t);
      }
     } else {
      e.setIdentifier(n);
     }
    }
    if (e.setValue(this._parseExpr(true))) {
     this.accept(jr);
     e.addChild(this._parsePrio());
     return this.finish(e);
    }
    return null;
   };
   t.prototype._parseURLArgument = function() {
    var t = this.mark();
    var n = e.prototype._parseURLArgument.call(this);
    if (!n || !this.peek(r.ParenthesisR)) {
     this.restoreAtMark(t);
     var i = this.create(te);
     i.addChild(this._parseBinaryExpr());
     return this.finish(i);
    }
    return n;
   };
   t.prototype._parseOperation = function() {
    if (!this.peek(r.ParenthesisL)) {
     return null;
    }
    var e = this.create(te);
    this.consumeToken();
    while (e.addChild(this._parseListElement())) {
     this.accept(r.Comma);
    }
    if (!this.accept(r.ParenthesisR)) {
     return this.finish(e, ct.RightParenthesisExpected);
    }
    return this.finish(e);
   };
   t.prototype._parseListElement = function() {
    var e = this.create(et);
    var t = this._parseBinaryExpr();
    if (!t) {
     return null;
    }
    if (this.accept(r.Colon)) {
     e.setKey(t);
     if (!e.setValue(this._parseBinaryExpr())) {
      return this.finish(e, ct.ExpressionExpected);
     }
    } else {
     e.setValue(t);
    }
    return this.finish(e);
   };
   return t;
  }(gn);
  var Gr = undefined && undefined.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  var Hr = ot["loadMessageBundle"]();
  var Jr = function(e) {
   Gr(t, e);
   function t() {
    return e.call(this, "$") || this;
   }
   t.prototype.createReplaceFunction = function() {
    var e = 1;
    return function(n, r) {
     return "\\" + r + ": ${" + e++ + ":" + (t.variableDefaults[r] || "") + "}";
    };
   };
   t.prototype.createFunctionProposals = function(e, t, n, r) {
    for (var i = 0, a = e; i < a.length; i++) {
     var o = a[i];
     var s = o.func.replace(/\[?(\$\w+)\]?/g, this.createReplaceFunction());
     var l = o.func.substr(0, o.func.indexOf("("));
     var c = {
      label: l,
      detail: o.func,
      documentation: o.desc,
      textEdit: In["TextEdit"].replace(this.getCompletionRange(t), s),
      insertTextFormat: In["InsertTextFormat"].Snippet,
      kind: In["CompletionItemKind"].Function
     };
     if (n) {
      c.sortText = "z";
     }
     r.items.push(c);
    }
    return r;
   };
   t.prototype.getCompletionsForSelector = function(n, r, i) {
    this.createFunctionProposals(t.selectorFuncs, void 0, true, i);
    return e.prototype.getCompletionsForSelector.call(this, n, r, i);
   };
   t.prototype.getTermProposals = function(n, r, i) {
    var a = t.builtInFuncs;
    if (n) {
     a = a.filter(function(e) {
      return !e.type || n.restrictions.indexOf(e.type) !== -1;
     });
    }
    this.createFunctionProposals(a, r, true, i);
    return e.prototype.getTermProposals.call(this, n, r, i);
   };
   t.prototype.getColorProposals = function(n, r, i) {
    this.createFunctionProposals(t.colorProposals, r, false, i);
    return e.prototype.getColorProposals.call(this, n, r, i);
   };
   t.prototype.getCompletionsForDeclarationProperty = function(t, n) {
    this.getCompletionForAtDirectives(n);
    this.getCompletionsForSelector(null, true, n);
    return e.prototype.getCompletionsForDeclarationProperty.call(this, t, n);
   };
   t.prototype.getCompletionsForExtendsReference = function(e, t, n) {
    var r = this.getSymbolContext().findSymbolsAtOffset(this.offset, Y.Rule);
    for (var i = 0, a = r; i < a.length; i++) {
     var o = a[i];
     var s = {
      label: o.name,
      textEdit: In["TextEdit"].replace(this.getCompletionRange(t), o.name),
      kind: In["CompletionItemKind"].Function
     };
     n.items.push(s);
    }
    return n;
   };
   t.prototype.getCompletionForAtDirectives = function(e) {
    (n = e.items).push.apply(n, t.scssAtDirectives);
    return e;
    var n;
   };
   t.prototype.getCompletionForTopLevel = function(t) {
    this.getCompletionForAtDirectives(t);
    e.prototype.getCompletionForTopLevel.call(this, t);
    return t;
   };
   t.variableDefaults = {
    $red: "1",
    $green: "2",
    $blue: "3",
    $alpha: "1.0",
    $color: "#000000",
    $weight: "0.5",
    $hue: "0",
    $saturation: "0%",
    $lightness: "0%",
    $degrees: "0",
    $amount: "0",
    $string: '""',
    $substring: '"s"',
    $number: "0",
    $limit: "1"
   };
   t.colorProposals = [ {
    func: "red($color)",
    desc: Hr("scss.builtin.red", "Gets the red component of a color.")
   }, {
    func: "green($color)",
    desc: Hr("scss.builtin.green", "Gets the green component of a color.")
   }, {
    func: "blue($color)",
    desc: Hr("scss.builtin.blue", "Gets the blue component of a color.")
   }, {
    func: "mix($color, $color, [$weight])",
    desc: Hr("scss.builtin.mix", "Mixes two colors together.")
   }, {
    func: "hue($color)",
    desc: Hr("scss.builtin.hue", "Gets the hue component of a color.")
   }, {
    func: "saturation($color)",
    desc: Hr("scss.builtin.saturation", "Gets the saturation component of a color.")
   }, {
    func: "lightness($color)",
    desc: Hr("scss.builtin.lightness", "Gets the lightness component of a color.")
   }, {
    func: "adjust-hue($color, $degrees)",
    desc: Hr("scss.builtin.adjust-hue", "Changes the hue of a color.")
   }, {
    func: "lighten($color, $amount)",
    desc: Hr("scss.builtin.lighten", "Makes a color lighter.")
   }, {
    func: "darken($color, $amount)",
    desc: Hr("scss.builtin.darken", "Makes a color darker.")
   }, {
    func: "saturate($color, $amount)",
    desc: Hr("scss.builtin.saturate", "Makes a color more saturated.")
   }, {
    func: "desaturate($color, $amount)",
    desc: Hr("scss.builtin.desaturate", "Makes a color less saturated.")
   }, {
    func: "grayscale($color)",
    desc: Hr("scss.builtin.grayscale", "Converts a color to grayscale.")
   }, {
    func: "complement($color)",
    desc: Hr("scss.builtin.complement", "Returns the complement of a color.")
   }, {
    func: "invert($color)",
    desc: Hr("scss.builtin.invert", "Returns the inverse of a color.")
   }, {
    func: "alpha($color)",
    desc: Hr("scss.builtin.alpha", "Gets the opacity component of a color.")
   }, {
    func: "opacity($color)",
    desc: "Gets the alpha component (opacity) of a color."
   }, {
    func: "rgba($color, $alpha)",
    desc: Hr("scss.builtin.rgba", "Changes the alpha component for a color.")
   }, {
    func: "opacify($color, $amount)",
    desc: Hr("scss.builtin.opacify", "Makes a color more opaque.")
   }, {
    func: "fade-in($color, $amount)",
    desc: Hr("scss.builtin.fade-in", "Makes a color more opaque.")
   }, {
    func: "transparentize($color, $amount)",
    desc: Hr("scss.builtin.transparentize", "Makes a color more transparent.")
   }, {
    func: "fade-out($color, $amount)",
    desc: Hr("scss.builtin.fade-out", "Makes a color more transparent.")
   }, {
    func: "adjust-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])",
    desc: Hr("scss.builtin.adjust-color", "Increases or decreases one or more components of a color.")
   }, {
    func: "scale-color($color, [$red], [$green], [$blue], [$saturation], [$lightness], [$alpha])",
    desc: Hr("scss.builtin.scale-color", "Fluidly scales one or more properties of a color.")
   }, {
    func: "change-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])",
    desc: Hr("scss.builtin.change-color", "Changes one or more properties of a color.")
   }, {
    func: "ie-hex-str($color)",
    desc: Hr("scss.builtin.ie-hex-str", "Converts a color into the format understood by IE filters.")
   } ];
   t.selectorFuncs = [ {
    func: "selector-nest($selectors…)",
    desc: Hr("scss.builtin.selector-nest", "Nests selector beneath one another like they would be nested in the stylesheet.")
   }, {
    func: "selector-append($selectors…)",
    desc: Hr("scss.builtin.selector-append", "Appends selectors to one another without spaces in between.")
   }, {
    func: "selector-extend($selector, $extendee, $extender)",
    desc: Hr("scss.builtin.selector-extend", "Extends $extendee with $extender within $selector.")
   }, {
    func: "selector-replace($selector, $original, $replacement)",
    desc: Hr("scss.builtin.selector-replace", "Replaces $original with $replacement within $selector.")
   }, {
    func: "selector-unify($selector1, $selector2)",
    desc: Hr("scss.builtin.selector-unify", "Unifies two selectors to produce a selector that matches elements matched by both.")
   }, {
    func: "is-superselector($super, $sub)",
    desc: Hr("scss.builtin.is-superselector", "Returns whether $super matches all the elements $sub does, and possibly more.")
   }, {
    func: "simple-selectors($selector)",
    desc: Hr("scss.builtin.simple-selectors", "Returns the simple selectors that comprise a compound selector.")
   }, {
    func: "selector-parse($selector)",
    desc: Hr("scss.builtin.selector-parse", "Parses a selector into the format returned by &.")
   } ];
   t.builtInFuncs = [ {
    func: "unquote($string)",
    desc: Hr("scss.builtin.unquote", "Removes quotes from a string.")
   }, {
    func: "quote($string)",
    desc: Hr("scss.builtin.quote", "Adds quotes to a string.")
   }, {
    func: "str-length($string)",
    desc: Hr("scss.builtin.str-length", "Returns the number of characters in a string.")
   }, {
    func: "str-insert($string, $insert, $index)",
    desc: Hr("scss.builtin.str-insert", "Inserts $insert into $string at $index.")
   }, {
    func: "str-index($string, $substring)",
    desc: Hr("scss.builtin.str-index", "Returns the index of the first occurance of $substring in $string.")
   }, {
    func: "str-slice($string, $start-at, [$end-at])",
    desc: Hr("scss.builtin.str-slice", "Extracts a substring from $string.")
   }, {
    func: "to-upper-case($string)",
    desc: Hr("scss.builtin.to-upper-case", "Converts a string to upper case.")
   }, {
    func: "to-lower-case($string)",
    desc: Hr("scss.builtin.to-lower-case", "Converts a string to lower case.")
   }, {
    func: "percentage($number)",
    desc: Hr("scss.builtin.percentage", "Converts a unitless number to a percentage."),
    type: "percentage"
   }, {
    func: "round($number)",
    desc: Hr("scss.builtin.round", "Rounds a number to the nearest whole number.")
   }, {
    func: "ceil($number)",
    desc: Hr("scss.builtin.ceil", "Rounds a number up to the next whole number.")
   }, {
    func: "floor($number)",
    desc: Hr("scss.builtin.floor", "Rounds a number down to the previous whole number.")
   }, {
    func: "abs($number)",
    desc: Hr("scss.builtin.abs", "Returns the absolute value of a number.")
   }, {
    func: "min($numbers)",
    desc: Hr("scss.builtin.min", "Finds the minimum of several numbers.")
   }, {
    func: "max($numbers)",
    desc: Hr("scss.builtin.max", "Finds the maximum of several numbers.")
   }, {
    func: "random([$limit])",
    desc: Hr("scss.builtin.random", "Returns a random number.")
   }, {
    func: "length($list)",
    desc: Hr("scss.builtin.length", "Returns the length of a list.")
   }, {
    func: "nth($list, $n)",
    desc: Hr("scss.builtin.nth", "Returns a specific item in a list.")
   }, {
    func: "set-nth($list, $n, $value)",
    desc: Hr("scss.builtin.set-nth", "Replaces the nth item in a list.")
   }, {
    func: "join($list1, $list2, [$separator])",
    desc: Hr("scss.builtin.join", "Joins together two lists into one.")
   }, {
    func: "append($list1, $val, [$separator])",
    desc: Hr("scss.builtin.append", "Appends a single value onto the end of a list.")
   }, {
    func: "zip($lists)",
    desc: Hr("scss.builtin.zip", "Combines several lists into a single multidimensional list.")
   }, {
    func: "index($list, $value)",
    desc: Hr("scss.builtin.index", "Returns the position of a value within a list.")
   }, {
    func: "list-separator(#list)",
    desc: Hr("scss.builtin.list-separator", "Returns the separator of a list.")
   }, {
    func: "map-get($map, $key)",
    desc: Hr("scss.builtin.map-get", "Returns the value in a map associated with a given key.")
   }, {
    func: "map-merge($map1, $map2)",
    desc: Hr("scss.builtin.map-merge", "Merges two maps together into a new map.")
   }, {
    func: "map-remove($map, $keys)",
    desc: Hr("scss.builtin.map-remove", "Returns a new map with keys removed.")
   }, {
    func: "map-keys($map)",
    desc: Hr("scss.builtin.map-keys", "Returns a list of all keys in a map.")
   }, {
    func: "map-values($map)",
    desc: Hr("scss.builtin.map-values", "Returns a list of all values in a map.")
   }, {
    func: "map-has-key($map, $key)",
    desc: Hr("scss.builtin.map-has-key", "Returns whether a map has a value associated with a given key.")
   }, {
    func: "keywords($args)",
    desc: Hr("scss.builtin.keywords", "Returns the keywords passed to a function that takes variable arguments.")
   }, {
    func: "feature-exists($feature)",
    desc: Hr("scss.builtin.feature-exists", "Returns whether a feature exists in the current Sass runtime.")
   }, {
    func: "variable-exists($name)",
    desc: Hr("scss.builtin.variable-exists", "Returns whether a variable with the given name exists in the current scope.")
   }, {
    func: "global-variable-exists($name)",
    desc: Hr("scss.builtin.global-variable-exists", "Returns whether a variable with the given name exists in the global scope.")
   }, {
    func: "function-exists($name)",
    desc: Hr("scss.builtin.function-exists", "Returns whether a function with the given name exists.")
   }, {
    func: "mixin-exists($name)",
    desc: Hr("scss.builtin.mixin-exists", "Returns whether a mixin with the given name exists.")
   }, {
    func: "inspect($value)",
    desc: Hr("scss.builtin.inspect", "Returns the string representation of a value as it would be represented in Sass.")
   }, {
    func: "type-of($value)",
    desc: Hr("scss.builtin.type-of", "Returns the type of a value.")
   }, {
    func: "unit($number)",
    desc: Hr("scss.builtin.unit", "Returns the unit(s) associated with a number.")
   }, {
    func: "unitless($number)",
    desc: Hr("scss.builtin.unitless", "Returns whether a number has units.")
   }, {
    func: "comparable($number1, $number2)",
    desc: Hr("scss.builtin.comparable", "Returns whether two numbers can be added, subtracted, or compared.")
   }, {
    func: "call($name, $args…)",
    desc: Hr("scss.builtin.call", "Dynamically calls a Sass function.")
   } ];
   t.scssAtDirectives = [ {
    label: "@extend",
    documentation: Hr("scss.builtin.@extend", "Inherits the styles of another selector."),
    kind: In["CompletionItemKind"].Keyword
   }, {
    label: "@at-root",
    documentation: Hr("scss.builtin.@at-root", "Causes one or more rules to be emitted at the root of the document."),
    kind: In["CompletionItemKind"].Keyword
   }, {
    label: "@debug",
    documentation: Hr("scss.builtin.@debug", "Prints the value of an expression to the standard error output stream. Useful for debugging complicated Sass files."),
    kind: In["CompletionItemKind"].Keyword
   }, {
    label: "@warn",
    documentation: Hr("scss.builtin.@warn", "Prints the value of an expression to the standard error output stream. Useful for libraries that need to warn users of deprecations or recovering from minor mixin usage mistakes. Warnings can be turned off with the `--quiet` command-line option or the `:quiet` Sass option."),
    kind: In["CompletionItemKind"].Keyword
   }, {
    label: "@error",
    documentation: Hr("scss.builtin.@error", "Throws the value of an expression as a fatal error with stack trace. Useful for validating arguments to mixins and functions."),
    kind: In["CompletionItemKind"].Keyword
   }, {
    label: "@if",
    documentation: Hr("scss.builtin.@if", "Includes the body if the expression does not evaluate to `false` or `null`."),
    insertText: "@if ${1:expr} {\n\t$0\n}",
    insertTextFormat: In["InsertTextFormat"].Snippet,
    kind: In["CompletionItemKind"].Keyword
   }, {
    label: "@for",
    documentation: Hr("scss.builtin.@for", "For loop that repeatedly outputs a set of styles for each `$var` in the `from/through` or `from/to` clause."),
    insertText: "@for \\$${1:var} from ${2:start} ${3|to,through|} ${4:end} {\n\t$0\n}",
    insertTextFormat: In["InsertTextFormat"].Snippet,
    kind: In["CompletionItemKind"].Keyword
   }, {
    label: "@each",
    documentation: Hr("scss.builtin.@each", "Each loop that sets `$var` to each item in the list or map, then outputs the styles it contains using that value of `$var`."),
    insertText: "@each \\$${1:var} in ${2:list} {\n\t$0\n}",
    insertTextFormat: In["InsertTextFormat"].Snippet,
    kind: In["CompletionItemKind"].Keyword
   }, {
    label: "@while",
    documentation: Hr("scss.builtin.@while", "While loop that takes an expression and repeatedly outputs the nested styles until the statement evaluates to `false`."),
    insertText: "@while ${1:condition} {\n\t$0\n}",
    insertTextFormat: In["InsertTextFormat"].Snippet,
    kind: In["CompletionItemKind"].Keyword
   }, {
    label: "@mixin",
    documentation: Hr("scss.builtin.@mixin", "Defines styles that can be re-used throughout the stylesheet with `@include`."),
    insertText: "@mixin ${1:name} {\n\t$0\n}",
    insertTextFormat: In["InsertTextFormat"].Snippet,
    kind: In["CompletionItemKind"].Keyword
   }, {
    label: "@include",
    documentation: Hr("scss.builtin.@include", "Includes the styles defined by another mixin into the current rule."),
    kind: In["CompletionItemKind"].Keyword
   } ];
   return t;
  }(Pn);
  var Xr = undefined && undefined.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  var Yr = "/".charCodeAt(0);
  var Qr = "\n".charCodeAt(0);
  var Zr = "\r".charCodeAt(0);
  var ei = "\f".charCodeAt(0);
  var ti = "`".charCodeAt(0);
  var ni = ".".charCodeAt(0);
  var ri = r.CustomToken;
  var ii = ri++;
  var ai = function(e) {
   Xr(t, e);
   function t() {
    return e !== null && e.apply(this, arguments) || this;
   }
   t.prototype.scanNext = function(t) {
    var n = this.escapedJavaScript();
    if (n !== null) {
     return this.finishToken(t, n);
    }
    if (this.stream.advanceIfChars([ ni, ni, ni ])) {
     return this.finishToken(t, ii);
    }
    return e.prototype.scanNext.call(this, t);
   };
   t.prototype.comment = function() {
    if (e.prototype.comment.call(this)) {
     return true;
    }
    if (!this.inURL && this.stream.advanceIfChars([ Yr, Yr ])) {
     this.stream.advanceWhileChar(function(e) {
      switch (e) {
      case Qr:
      case Zr:
      case ei:
       return false;

      default:
       return true;
      }
     });
     return true;
    } else {
     return false;
    }
   };
   t.prototype.escapedJavaScript = function() {
    var e = this.stream.peekChar();
    if (e === ti) {
     this.stream.advance(1);
     this.stream.advanceWhileChar(function(e) {
      return e !== ti;
     });
     return this.stream.advanceIfChar(ti) ? r.EscapedJavaScript : r.BadEscapedJavaScript;
    }
    return null;
   };
   return t;
  }(H);
  var oi = undefined && undefined.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  var si = function(e) {
   oi(t, e);
   function t() {
    return e.call(this, new ai()) || this;
   }
   t.prototype._parseStylesheetStatement = function() {
    return this._tryParseMixinDeclaration() || this._tryParseMixinReference(true) || e.prototype._parseStylesheetStatement.call(this) || this._parseVariableDeclaration() || this._parsePlugin();
   };
   t.prototype._parseImport = function() {
    if (!this.peekKeyword("@import") && !this.peekKeyword("@import-once")) {
     return null;
    }
    var e = this.create(Pe);
    this.consumeToken();
    if (this.accept(r.ParenthesisL)) {
     if (!this.accept(r.Ident)) {
      return this.finish(e, ct.IdentifierExpected, [ r.SemiColon ]);
     }
     do {
      if (!this.accept(r.Comma)) {
       break;
      }
     } while (this.accept(r.Ident));
     if (!this.accept(r.ParenthesisR)) {
      return this.finish(e, ct.RightParenthesisExpected, [ r.SemiColon ]);
     }
    }
    if (!e.addChild(this._parseURILiteral()) && !e.addChild(this._parseStringLiteral())) {
     return this.finish(e, ct.URIOrStringExpected, [ r.SemiColon ]);
    }
    if (!this.peek(r.SemiColon) && !this.peek(r.EOF)) {
     e.setMedialist(this._parseMediaQueryList());
    }
    return this.finish(e);
   };
   t.prototype._parsePlugin = function() {
    if (!this.peekKeyword("@plugin")) {
     return null;
    }
    var e = this.createNode(X.Plugin);
    this.consumeToken();
    if (!e.addChild(this._parseStringLiteral())) {
     return this.finish(e, ct.StringLiteralExpected);
    }
    if (!this.accept(r.SemiColon)) {
     return this.finish(e, ct.SemiColonExpected);
    }
    return this.finish(e);
   };
   t.prototype._parseMediaQuery = function(t) {
    var n = e.prototype._parseMediaQuery.call(this, t);
    if (!n) {
     var r = this.create(Me);
     if (r.addChild(this._parseVariable())) {
      return this.finish(r);
     }
     return null;
    }
    return n;
   };
   t.prototype._parseMediaDeclaration = function(e) {
    if (e === void 0) {
     e = false;
    }
    return this._tryParseRuleset(e) || this._tryToParseDeclaration() || this._tryParseMixinDeclaration() || this._tryParseMixinReference() || this._parseDetachedRuleSetMixin() || this._parseStylesheetStatement();
   };
   t.prototype._parseMediaFeatureName = function() {
    return this._parseIdent() || this._parseVariable();
   };
   t.prototype._parseVariableDeclaration = function(e) {
    if (e === void 0) {
     e = [];
    }
    var t = this.create(He);
    var n = this.mark();
    if (!t.setVariable(this._parseVariable())) {
     return null;
    }
    if (this.accept(r.Colon)) {
     t.colonPosition = this.prevToken.offset;
     if (!t.setValue(this._parseDetachedRuleSet() || this._parseExpr())) {
      return this.finish(t, ct.VariableValueExpected, [], e);
     }
     t.addChild(this._parsePrio());
    } else {
     this.restoreAtMark(n);
     return null;
    }
    if (this.peek(r.SemiColon)) {
     t.semicolonPosition = this.token.offset;
    }
    return this.finish(t);
   };
   t.prototype._parseDetachedRuleSet = function() {
    if (!this.peek(r.CurlyL)) {
     return null;
    }
    var e = this.create(oe);
    this._parseBody(e, this._parseDetachedRuleSetBody.bind(this));
    return this.finish(e);
   };
   t.prototype._parseDetachedRuleSetBody = function() {
    return this._tryParseKeyframeSelector() || this._tryParseRuleset(true) || e.prototype._parseRuleSetDeclaration.call(this);
   };
   t.prototype._parseVariable = function() {
    if (!this.peekDelim("@") && !this.peek(r.AtKeyword)) {
     return null;
    }
    var e = this.create(Xe);
    var t = this.mark();
    while (this.acceptDelim("@")) {
     if (this.hasWhitespace()) {
      this.restoreAtMark(t);
      return null;
     }
    }
    if (!this.accept(r.AtKeyword)) {
     this.restoreAtMark(t);
     return null;
    }
    return e;
   };
   t.prototype._parseTerm = function() {
    var t = e.prototype._parseTerm.call(this);
    if (t) {
     return t;
    }
    t = this.create(Be);
    if (t.setExpression(this._parseVariable()) || t.setExpression(this._parseEscaped())) {
     return this.finish(t);
    }
    return null;
   };
   t.prototype._parseEscaped = function() {
    if (this.peek(r.EscapedJavaScript) || this.peek(r.BadEscapedJavaScript)) {
     var e = this.createNode(X.EscapedValue);
     this.consumeToken();
     return this.finish(e);
    }
    if (this.peekDelim("~")) {
     var e = this.createNode(X.EscapedValue);
     this.consumeToken();
     return this.finish(e, this.accept(r.String) ? null : ct.TermExpected);
    }
    return null;
   };
   t.prototype._parseOperator = function() {
    var t = this._parseGuardOperator();
    if (t) {
     return t;
    } else {
     return e.prototype._parseOperator.call(this);
    }
   };
   t.prototype._parseGuardOperator = function() {
    if (this.peekDelim(">")) {
     var e = this.createNode(X.Operator);
     this.consumeToken();
     this.acceptDelim("=");
     return e;
    } else if (this.peekDelim("=")) {
     var e = this.createNode(X.Operator);
     this.consumeToken();
     this.acceptDelim("<");
     return e;
    } else if (this.peekDelim("<")) {
     var e = this.createNode(X.Operator);
     this.consumeToken();
     this.acceptDelim("=");
     return e;
    }
    return null;
   };
   t.prototype._parseRuleSetDeclaration = function() {
    if (this.peek(r.AtKeyword)) {
     return this._parseKeyframe() || this._parseMedia(true) || this._parseImport() || this._parseSupports(true) || this._parseDetachedRuleSetMixin() || this._parseVariableDeclaration();
    }
    return this._tryParseMixinDeclaration() || this._tryParseRuleset(true) || this._tryParseMixinReference() || this._parseExtend() || e.prototype._parseRuleSetDeclaration.call(this);
   };
   t.prototype._parseKeyframeIdent = function() {
    return this._parseIdent([ Y.Keyframe ]) || this._parseVariable();
   };
   t.prototype._parseKeyframeSelector = function() {
    return this._parseDetachedRuleSetMixin() || e.prototype._parseKeyframeSelector.call(this);
   };
   t.prototype._parseSimpleSelectorBody = function() {
    return this._parseSelectorCombinator() || e.prototype._parseSimpleSelectorBody.call(this);
   };
   t.prototype._parseSelector = function(e) {
    var t = this.create(le);
    var n = false;
    if (e) {
     n = t.addChild(this._parseCombinator());
    }
    while (t.addChild(this._parseSimpleSelector())) {
     n = true;
     var i = this.mark();
     if (t.addChild(this._parseGuard()) && this.peek(r.CurlyL)) {
      break;
     }
     this.restoreAtMark(i);
     t.addChild(this._parseCombinator());
    }
    return n ? this.finish(t) : null;
   };
   t.prototype._parseSelectorCombinator = function() {
    if (this.peekDelim("&")) {
     var e = this.createNode(X.SelectorCombinator);
     this.consumeToken();
     while (!this.hasWhitespace() && (this.acceptDelim("-") || this.accept(r.Num) || this.accept(r.Dimension) || e.addChild(this._parseIdent()) || this.acceptDelim("&"))) {}
     return this.finish(e);
    }
    return null;
   };
   t.prototype._parseSelectorIdent = function() {
    if (!this.peekInterpolatedIdent()) {
     return null;
    }
    var e = this.createNode(X.SelectorInterpolation);
    var t = this._acceptInterpolatedIdent(e);
    return t ? this.finish(e) : null;
   };
   t.prototype._parsePropertyIdentifier = function() {
    if (!this.peekInterpolatedIdent()) {
     return null;
    }
    var e = this.create(re);
    e.isCustomProperty = this.peekRegExp(r.Ident, /^--/);
    var t = this._acceptInterpolatedIdent(e);
    if (t && !this.hasWhitespace()) {
     this.acceptDelim("+");
     if (!this.hasWhitespace()) {
      this.acceptIdent("_");
     }
    }
    return t ? this.finish(e) : null;
   };
   t.prototype.peekInterpolatedIdent = function() {
    return this.peek(r.Ident) || this.peekDelim("@") || this.peekDelim("-");
   };
   t.prototype._acceptInterpolatedIdent = function(e) {
    var t = this;
    var n = false;
    var i = function() {
     if (!t.acceptDelim("-")) {
      return null;
     }
     if (!t.hasWhitespace() && t.acceptDelim("-")) {}
     if (!t.hasWhitespace()) {
      return t._parseInterpolation();
     }
     return null;
    };
    while (this.accept(r.Ident) || e.addChild(this._parseInterpolation() || this.try(i))) {
     n = true;
     if (!this.hasWhitespace() && this.acceptDelim("-")) {}
     if (this.hasWhitespace()) {
      break;
     }
    }
    return n;
   };
   t.prototype._parseInterpolation = function() {
    var e = this.mark();
    if (this.peekDelim("@")) {
     var t = this.createNode(X.Interpolation);
     this.consumeToken();
     if (this.hasWhitespace() || !this.accept(r.CurlyL)) {
      this.restoreAtMark(e);
      return null;
     }
     if (!t.addChild(this._parseIdent())) {
      return this.finish(t, ct.IdentifierExpected);
     }
     if (!this.accept(r.CurlyR)) {
      return this.finish(t, ct.RightCurlyExpected);
     }
     return this.finish(t);
    }
    return null;
   };
   t.prototype._tryParseMixinDeclaration = function() {
    var e = this.mark();
    var t = this.create(Ze);
    if (!t.setIdentifier(this._parseMixinDeclarationIdentifier()) || !this.accept(r.ParenthesisL)) {
     this.restoreAtMark(e);
     return null;
    }
    if (t.getParameters().addChild(this._parseMixinParameter())) {
     while (this.accept(r.Comma) || this.accept(r.SemiColon)) {
      if (this.peek(r.ParenthesisR)) {
       break;
      }
      if (!t.getParameters().addChild(this._parseMixinParameter())) {
       this.markError(t, ct.IdentifierExpected, [], [ r.ParenthesisR ]);
      }
     }
    }
    if (!this.accept(r.ParenthesisR)) {
     this.restoreAtMark(e);
     return null;
    }
    t.setGuard(this._parseGuard());
    if (!this.peek(r.CurlyL)) {
     this.restoreAtMark(e);
     return null;
    }
    return this._parseBody(t, this._parseMixInBodyDeclaration.bind(this));
   };
   t.prototype._parseMixInBodyDeclaration = function() {
    return this._parseFontFace() || this._parseRuleSetDeclaration();
   };
   t.prototype._parseMixinDeclarationIdentifier = function() {
    var e;
    if (this.peekDelim("#") || this.peekDelim(".")) {
     e = this.create(re);
     this.consumeToken();
     if (this.hasWhitespace() || !e.addChild(this._parseIdent())) {
      return null;
     }
    } else if (this.peek(r.Hash)) {
     e = this.create(re);
     this.consumeToken();
    } else {
     return null;
    }
    e.referenceTypes = [ Y.Mixin ];
    return this.finish(e);
   };
   t.prototype._parsePseudo = function() {
    if (!this.peek(r.Colon)) {
     return null;
    }
    var t = this.mark();
    var n = this.create(Ye);
    this.consumeToken();
    if (this.acceptIdent("extend")) {
     return this._completeExtends(n);
    }
    this.restoreAtMark(t);
    return e.prototype._parsePseudo.call(this);
   };
   t.prototype._parseExtend = function() {
    if (!this.peekDelim("&")) {
     return null;
    }
    var e = this.mark();
    var t = this.create(Ye);
    this.consumeToken();
    if (this.hasWhitespace() || !this.accept(r.Colon) || !this.acceptIdent("extend")) {
     this.restoreAtMark(e);
     return null;
    }
    return this._completeExtends(t);
   };
   t.prototype._completeExtends = function(e) {
    if (!this.accept(r.ParenthesisL)) {
     return this.finish(e, ct.LeftParenthesisExpected);
    }
    var t = e.getSelectors();
    if (!t.addChild(this._parseSelector(true))) {
     return this.finish(e, ct.SelectorExpected);
    }
    while (this.accept(r.Comma)) {
     if (!t.addChild(this._parseSelector(true))) {
      return this.finish(e, ct.SelectorExpected);
     }
    }
    if (!this.accept(r.ParenthesisR)) {
     return this.finish(e, ct.RightParenthesisExpected);
    }
    return this.finish(e);
   };
   t.prototype._parseDetachedRuleSetMixin = function() {
    if (!this.peek(r.AtKeyword)) {
     return null;
    }
    var e = this.mark();
    var t = this.create(Qe);
    if (!t.addChild(this._parseVariable()) || !this.accept(r.ParenthesisL)) {
     this.restoreAtMark(e);
     return null;
    }
    if (!this.accept(r.ParenthesisR)) {
     return this.finish(t, ct.RightParenthesisExpected);
    }
    return this.finish(t);
   };
   t.prototype._tryParseMixinReference = function(e) {
    if (e === void 0) {
     e = false;
    }
    var t = this.mark();
    var n = this.create(Qe);
    var i = this._parseMixinDeclarationIdentifier();
    while (i) {
     this.acceptDelim(">");
     var a = this._parseMixinDeclarationIdentifier();
     if (a) {
      n.getNamespaces().addChild(i);
      i = a;
     } else {
      break;
     }
    }
    if (!n.setIdentifier(i)) {
     this.restoreAtMark(t);
     return null;
    }
    var o = false;
    if (!this.hasWhitespace() && this.accept(r.ParenthesisL)) {
     o = true;
     if (n.getArguments().addChild(this._parseMixinArgument())) {
      while (this.accept(r.Comma) || this.accept(r.SemiColon)) {
       if (this.peek(r.ParenthesisR)) {
        break;
       }
       if (!n.getArguments().addChild(this._parseMixinArgument())) {
        return this.finish(n, ct.ExpressionExpected);
       }
      }
     }
     if (!this.accept(r.ParenthesisR)) {
      return this.finish(n, ct.RightParenthesisExpected);
     }
     i.referenceTypes = [ Y.Mixin ];
    } else {
     i.referenceTypes = [ Y.Mixin, Y.Rule ];
    }
    n.addChild(this._parsePrio());
    if (!o && !this.peek(r.SemiColon) && !this.peek(r.CurlyR) && !this.peek(r.EOF)) {
     this.restoreAtMark(t);
     return null;
    }
    return this.finish(n);
   };
   t.prototype._parseMixinArgument = function() {
    var e = this.create(ve);
    var t = this.mark();
    var n = this._parseVariable();
    if (n) {
     if (!this.accept(r.Colon)) {
      this.restoreAtMark(t);
     } else {
      e.setIdentifier(n);
     }
    }
    if (e.setValue(this._parseDetachedRuleSet() || this._parseExpr(true))) {
     return this.finish(e);
    }
    this.restoreAtMark(t);
    return null;
   };
   t.prototype._parseMixinParameter = function() {
    var e = this.create(ye);
    if (this.peekKeyword("@rest")) {
     var t = this.create(te);
     this.consumeToken();
     if (!this.accept(ii)) {
      return this.finish(e, ct.DotExpected, [], [ r.Comma, r.ParenthesisR ]);
     }
     e.setIdentifier(this.finish(t));
     return this.finish(e);
    }
    if (this.peek(ii)) {
     var n = this.create(te);
     this.consumeToken();
     e.setIdentifier(this.finish(n));
     return this.finish(e);
    }
    var i = false;
    if (e.setIdentifier(this._parseVariable())) {
     this.accept(r.Colon);
     i = true;
    }
    if (!e.setDefaultValue(this._parseExpr(true)) && !i) {
     return null;
    }
    return this.finish(e);
   };
   t.prototype._parseGuard = function() {
    if (!this.peekIdent("when")) {
     return null;
    }
    var e = this.create(tt);
    this.consumeToken();
    e.isNegated = this.acceptIdent("not");
    if (!e.getConditions().addChild(this._parseGuardCondition())) {
     return this.finish(e, ct.ConditionExpected);
    }
    while (this.acceptIdent("and") || this.accept(r.Comma)) {
     if (!e.getConditions().addChild(this._parseGuardCondition())) {
      return this.finish(e, ct.ConditionExpected);
     }
    }
    return this.finish(e);
   };
   t.prototype._parseGuardCondition = function() {
    if (!this.peek(r.ParenthesisL)) {
     return null;
    }
    var e = this.create(nt);
    this.consumeToken();
    if (!e.addChild(this._parseExpr())) {}
    if (!this.accept(r.ParenthesisR)) {
     return this.finish(e, ct.RightParenthesisExpected);
    }
    return this.finish(e);
   };
   t.prototype._parseFunctionIdentifier = function() {
    if (this.peekDelim("%")) {
     var t = this.create(re);
     t.referenceTypes = [ Y.Function ];
     this.consumeToken();
     return this.finish(t);
    }
    return e.prototype._parseFunctionIdentifier.call(this);
   };
   t.prototype._parseURLArgument = function() {
    var t = this.mark();
    var n = e.prototype._parseURLArgument.call(this);
    if (!n || !this.peek(r.ParenthesisR)) {
     this.restoreAtMark(t);
     var i = this.create(te);
     i.addChild(this._parseBinaryExpr());
     return this.finish(i);
    }
    return n;
   };
   return t;
  }(gn);
  var li = undefined && undefined.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  var ci = ot["loadMessageBundle"]();
  var hi = function(e) {
   li(t, e);
   function t() {
    return e.call(this, "@") || this;
   }
   t.prototype.createFunctionProposals = function(e, t, n, r) {
    for (var i = 0, a = e; i < a.length; i++) {
     var o = a[i];
     var s = {
      label: o.name,
      detail: o.example,
      documentation: o.description,
      textEdit: In["TextEdit"].replace(this.getCompletionRange(t), o.name + "($0)"),
      insertTextFormat: In["InsertTextFormat"].Snippet,
      kind: In["CompletionItemKind"].Function
     };
     if (n) {
      s.sortText = "z";
     }
     r.items.push(s);
    }
    return r;
   };
   t.prototype.getTermProposals = function(n, r, i) {
    var a = t.builtInProposals;
    if (n) {
     a = a.filter(function(e) {
      return !e.type || n.restrictions.indexOf(e.type) !== -1;
     });
    }
    this.createFunctionProposals(a, r, true, i);
    return e.prototype.getTermProposals.call(this, n, r, i);
   };
   t.prototype.getColorProposals = function(n, r, i) {
    this.createFunctionProposals(t.colorProposals, r, false, i);
    return e.prototype.getColorProposals.call(this, n, r, i);
   };
   t.prototype.getCompletionsForDeclarationProperty = function(t, n) {
    this.getCompletionsForSelector(null, true, n);
    return e.prototype.getCompletionsForDeclarationProperty.call(this, t, n);
   };
   t.builtInProposals = [ {
    name: "escape",
    example: "escape(@string);",
    description: ci("less.builtin.escape", "URL encodes a string")
   }, {
    name: "e",
    example: "e(@string);",
    description: ci("less.builtin.e", "escape string content")
   }, {
    name: "replace",
    example: "replace(@string, @pattern, @replacement[, @flags]);",
    description: ci("less.builtin.replace", "string replace")
   }, {
    name: "unit",
    example: "unit(@dimension, [@unit: '']);",
    description: ci("less.builtin.unit", "remove or change the unit of a dimension")
   }, {
    name: "color",
    example: "color(@string);",
    description: ci("less.builtin.color", "parses a string to a color"),
    type: "color"
   }, {
    name: "convert",
    example: "convert(@value, unit);",
    description: ci("less.builtin.convert", "converts numbers from one type into another")
   }, {
    name: "data-uri",
    example: "data-uri([mimetype,] url);",
    description: ci("less.builtin.data-uri", "inlines a resource and falls back to `url()`"),
    type: "url"
   }, {
    name: "length",
    example: "length(@list);",
    description: ci("less.builtin.length", "returns the number of elements in a value list")
   }, {
    name: "extract",
    example: "extract(@list, index);",
    description: ci("less.builtin.extract", "returns a value at the specified position in the list")
   }, {
    name: "abs",
    description: ci("less.builtin.abs", "absolute value of a number"),
    example: "abs(number);"
   }, {
    name: "acos",
    description: ci("less.builtin.acos", "arccosine - inverse of cosine function"),
    example: "acos(number);"
   }, {
    name: "asin",
    description: ci("less.builtin.asin", "arcsine - inverse of sine function"),
    example: "asin(number);"
   }, {
    name: "ceil",
    example: "ceil(@number);",
    description: ci("less.builtin.ceil", "rounds up to an integer")
   }, {
    name: "cos",
    description: ci("less.builtin.cos", "cosine function"),
    example: "cos(number);"
   }, {
    name: "floor",
    description: ci("less.builtin.floor", "rounds down to an integer"),
    example: "floor(@number);"
   }, {
    name: "percentage",
    description: ci("less.builtin.percentage", "converts to a %, e.g. 0.5 > 50%"),
    example: "percentage(@number);",
    type: "percentage"
   }, {
    name: "round",
    description: ci("less.builtin.round", "rounds a number to a number of places"),
    example: "round(number, [places: 0]);"
   }, {
    name: "sqrt",
    description: ci("less.builtin.sqrt", "calculates square root of a number"),
    example: "sqrt(number);"
   }, {
    name: "sin",
    description: ci("less.builtin.sin", "sine function"),
    example: "sin(number);"
   }, {
    name: "tan",
    description: ci("less.builtin.tan", "tangent function"),
    example: "tan(number);"
   }, {
    name: "atan",
    description: ci("less.builtin.atan", "arctangent - inverse of tangent function"),
    example: "atan(number);"
   }, {
    name: "pi",
    description: ci("less.builtin.pi", "returns pi"),
    example: "pi();"
   }, {
    name: "pow",
    description: ci("less.builtin.pow", "first argument raised to the power of the second argument"),
    example: "pow(@base, @exponent);"
   }, {
    name: "mod",
    description: ci("less.builtin.mod", "first argument modulus second argument"),
    example: "mod(number, number);"
   }, {
    name: "min",
    description: ci("less.builtin.min", "returns the lowest of one or more values"),
    example: "min(@x, @y);"
   }, {
    name: "max",
    description: ci("less.builtin.max", "returns the lowest of one or more values"),
    example: "max(@x, @y);"
   } ];
   t.colorProposals = [ {
    name: "argb",
    example: "argb(@color);",
    description: ci("less.builtin.argb", "creates a #AARRGGBB")
   }, {
    name: "hsl",
    example: "hsl(@hue, @saturation, @lightness);",
    description: ci("less.builtin.hsl", "creates a color")
   }, {
    name: "hsla",
    example: "hsla(@hue, @saturation, @lightness, @alpha);",
    description: ci("less.builtin.hsla", "creates a color")
   }, {
    name: "hsv",
    example: "hsv(@hue, @saturation, @value);",
    description: ci("less.builtin.hsv", "creates a color")
   }, {
    name: "hsva",
    example: "hsva(@hue, @saturation, @value, @alpha);",
    description: ci("less.builtin.hsva", "creates a color")
   }, {
    name: "hue",
    example: "hue(@color);",
    description: ci("less.builtin.hue", "returns the `hue` channel of `@color` in the HSL space")
   }, {
    name: "saturation",
    example: "saturation(@color);",
    description: ci("less.builtin.saturation", "returns the `saturation` channel of `@color` in the HSL space")
   }, {
    name: "lightness",
    example: "lightness(@color);",
    description: ci("less.builtin.lightness", "returns the `lightness` channel of `@color` in the HSL space")
   }, {
    name: "hsvhue",
    example: "hsvhue(@color);",
    description: ci("less.builtin.hsvhue", "returns the `hue` channel of `@color` in the HSV space")
   }, {
    name: "hsvsaturation",
    example: "hsvsaturation(@color);",
    description: ci("less.builtin.hsvsaturation", "returns the `saturation` channel of `@color` in the HSV space")
   }, {
    name: "hsvvalue",
    example: "hsvvalue(@color);",
    description: ci("less.builtin.hsvvalue", "returns the `value` channel of `@color` in the HSV space")
   }, {
    name: "red",
    example: "red(@color);",
    description: ci("less.builtin.red", "returns the `red` channel of `@color`")
   }, {
    name: "green",
    example: "green(@color);",
    description: ci("less.builtin.green", "returns the `green` channel of `@color`")
   }, {
    name: "blue",
    example: "blue(@color);",
    description: ci("less.builtin.blue", "returns the `blue` channel of `@color`")
   }, {
    name: "alpha",
    example: "alpha(@color);",
    description: ci("less.builtin.alpha", "returns the `alpha` channel of `@color`")
   }, {
    name: "luma",
    example: "luma(@color);",
    description: ci("less.builtin.luma", "returns the `luma` value (perceptual brightness) of `@color`")
   }, {
    name: "saturate",
    example: "saturate(@color, 10%);",
    description: ci("less.builtin.saturate", "return `@color` 10% points more saturated")
   }, {
    name: "desaturate",
    example: "desaturate(@color, 10%);",
    description: ci("less.builtin.desaturate", "return `@color` 10% points less saturated")
   }, {
    name: "lighten",
    example: "lighten(@color, 10%);",
    description: ci("less.builtin.lighten", "return `@color` 10% points lighter")
   }, {
    name: "darken",
    example: "darken(@color, 10%);",
    description: ci("less.builtin.darken", "return `@color` 10% points darker")
   }, {
    name: "fadein",
    example: "fadein(@color, 10%);",
    description: ci("less.builtin.fadein", "return `@color` 10% points less transparent")
   }, {
    name: "fadeout",
    example: "fadeout(@color, 10%);",
    description: ci("less.builtin.fadeout", "return `@color` 10% points more transparent")
   }, {
    name: "fade",
    example: "fade(@color, 50%);",
    description: ci("less.builtin.fade", "return `@color` with 50% transparency")
   }, {
    name: "spin",
    example: "spin(@color, 10);",
    description: ci("less.builtin.spin", "return `@color` with a 10 degree larger in hue")
   }, {
    name: "mix",
    example: "mix(@color1, @color2, [@weight: 50%]);",
    description: ci("less.builtin.mix", "return a mix of `@color1` and `@color2`")
   }, {
    name: "greyscale",
    example: "greyscale(@color);",
    description: ci("less.builtin.greyscale", "returns a grey, 100% desaturated color")
   }, {
    name: "contrast",
    example: "contrast(@color1, [@darkcolor: black], [@lightcolor: white], [@threshold: 43%]);",
    description: ci("less.builtin.contrast", "return `@darkcolor` if `@color1 is> 43% luma` otherwise return `@lightcolor`, see notes")
   }, {
    name: "multiply",
    example: "multiply(@color1, @color2);"
   }, {
    name: "screen",
    example: "screen(@color1, @color2);"
   }, {
    name: "overlay",
    example: "overlay(@color1, @color2);"
   }, {
    name: "softlight",
    example: "softlight(@color1, @color2);"
   }, {
    name: "hardlight",
    example: "hardlight(@color1, @color2);"
   }, {
    name: "difference",
    example: "difference(@color1, @color2);"
   }, {
    name: "exclusion",
    example: "exclusion(@color1, @color2);"
   }, {
    name: "average",
    example: "average(@color1, @color2);"
   }, {
    name: "negation",
    example: "negation(@color1, @color2);"
   } ];
   return t;
  }(Pn);
  function di(e, t) {
   var n = ui(e);
   return mi(n, t);
  }
  function ui(e) {
   function t(t) {
    return e.positionAt(t.offset).line;
   }
   function n(t) {
    return e.positionAt(t.offset + t.len).line;
   }
   function i() {
    switch (e.languageId) {
    case "scss":
     return new Lr();

    case "less":
     return new ai();

    default:
     return new H();
    }
   }
   function a(e, r) {
    var i = t(e);
    var a = n(e);
    if (i !== a) {
     return {
      startLine: i,
      endLine: a,
      kind: r
     };
    } else {
     return null;
    }
   }
   var o = [];
   var s = [];
   var l = i();
   l.ignoreComment = false;
   l.setSource(e.getText());
   var c = l.scan();
   var h;
   var d = function() {
    switch (c.type) {
    case r.CurlyL:
    case Or:
     {
      s.push({
       line: t(c),
       type: "brace",
       isStart: true
      });
      break;
     }

    case r.CurlyR:
     {
      if (s.length !== 0) {
       var i = pi(s, "brace");
       if (!i) {
        break;
       }
       var d = n(c);
       if (i.type === "brace") {
        if (n(h) !== d) {
         d--;
        }
        if (i.line !== d) {
         o.push({
          startLine: i.line,
          endLine: d,
          kind: undefined
         });
        }
       }
      }
      break;
     }

    case r.Comment:
     {
      var u = function(e) {
       if (e === "#region") {
        return {
         line: t(c),
         type: "comment",
         isStart: true
        };
       } else {
        return {
         line: n(c),
         type: "comment",
         isStart: false
        };
       }
      };
      var p = function(t) {
       var n = t.text.match(/^\s*\/\*\s*(#region|#endregion)\b\s*(.*?)\s*\*\//);
       if (n) {
        return u(n[1]);
       } else if (e.languageId === "scss" || e.languageId === "less") {
        var r = t.text.match(/^\s*\/\/\s*(#region|#endregion)\b\s*(.*?)\s*/);
        if (r) {
         return u(r[1]);
        }
       }
       return null;
      };
      var m = p(c);
      if (m) {
       if (m.isStart) {
        s.push(m);
       } else {
        var i = pi(s, "comment");
        if (!i) {
         break;
        }
        if (i.type === "comment") {
         if (i.line !== m.line) {
          o.push({
           startLine: i.line,
           endLine: m.line,
           kind: "region"
          });
         }
        }
       }
      } else {
       var f = a(c, "comment");
       if (f) {
        o.push(f);
       }
      }
      break;
     }
    }
    h = c;
    c = l.scan();
   };
   while (c.type !== r.EOF) {
    d();
   }
   return o;
  }
  function pi(e, t) {
   if (e.length === 0) {
    return null;
   }
   for (var n = e.length - 1; n >= 0; n--) {
    if (e[n].type === t && e[n].isStart) {
     return e.splice(n, 1)[0];
    }
   }
   return null;
  }
  function mi(e, t) {
   var n = t && t.rangeLimit || Number.MAX_VALUE;
   var r = e.sort(function(e, t) {
    var n = e.startLine - t.startLine;
    if (n === 0) {
     n = e.endLine - t.endLine;
    }
    return n;
   });
   var i = [];
   var a = -1;
   r.forEach(function(e) {
    if (!(e.startLine < a && a < e.endLine)) {
     i.push(e);
     a = e.endLine;
    }
   });
   if (i.length < n) {
    return i;
   } else {
    return i.slice(0, n);
   }
  }
  var fi;
  (function(e) {
   e["Comment"] = "comment";
   e["Imports"] = "imports";
   e["Region"] = "region";
  })(fi || (fi = {}));
  n.d(t, "getCSSLanguageService", function() {
   return bi;
  });
  n.d(t, "getSCSSLanguageService", function() {
   return yi;
  });
  n.d(t, "getLESSLanguageService", function() {
   return vi;
  });
  n.d(t, "Range", function() {
   return In["Range"];
  });
  n.d(t, "TextEdit", function() {
   return In["TextEdit"];
  });
  n.d(t, "Position", function() {
   return In["Position"];
  });
  n.d(t, "FoldingRangeKind", function() {
   return fi;
  });
  function gi(e, t, n, r, i, a) {
   return {
    configure: a.configure.bind(a),
    doValidation: a.doValidation.bind(a),
    parseStylesheet: e.parseStylesheet.bind(e),
    doComplete: t.doComplete.bind(t),
    setCompletionParticipants: t.setCompletionParticipants.bind(t),
    doHover: n.doHover.bind(n),
    findDefinition: r.findDefinition.bind(r),
    findReferences: r.findReferences.bind(r),
    findDocumentHighlights: r.findDocumentHighlights.bind(r),
    findDocumentSymbols: r.findDocumentSymbols.bind(r),
    doCodeActions: i.doCodeActions.bind(i),
    findColorSymbols: function(e, t) {
     return r.findDocumentColors(e, t).map(function(e) {
      return e.range;
     });
    },
    findDocumentColors: r.findDocumentColors.bind(r),
    getColorPresentations: r.getColorPresentations.bind(r),
    doRename: r.doRename.bind(r),
    getFoldingRanges: di
   };
  }
  function bi() {
   return gi(new gn(), new Pn(), new Yn(), new Zn(), new pr(), new yr());
  }
  function yi() {
   return gi(new $r(), new Jr(), new Yn(), new Zn(), new pr(), new yr());
  }
  function vi() {
   return gi(new si(), new hi(), new Yn(), new Zn(), new pr(), new yr());
  }
 },
 Ff8q: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("Z5Ki");
  var i = n("1vg8");
  var a;
  (function(e) {
   e.None = Object.freeze({
    isCancellationRequested: false,
    onCancellationRequested: r.Event.None
   });
   e.Cancelled = Object.freeze({
    isCancellationRequested: true,
    onCancellationRequested: r.Event.None
   });
   function t(t) {
    var n = t;
    return n && (n === e.None || n === e.Cancelled || i.boolean(n.isCancellationRequested) && !!n.onCancellationRequested);
   }
   e.is = t;
  })(a = t.CancellationToken || (t.CancellationToken = {}));
  var o = Object.freeze(function(e, t) {
   var n = setTimeout(e.bind(t), 0);
   return {
    dispose: function() {
     clearTimeout(n);
    }
   };
  });
  var s = function() {
   function e() {
    this._isCancelled = false;
   }
   e.prototype.cancel = function() {
    if (!this._isCancelled) {
     this._isCancelled = true;
     if (this._emitter) {
      this._emitter.fire(undefined);
      this._emitter = undefined;
     }
    }
   };
   Object.defineProperty(e.prototype, "isCancellationRequested", {
    get: function() {
     return this._isCancelled;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "onCancellationRequested", {
    get: function() {
     if (this._isCancelled) {
      return o;
     }
     if (!this._emitter) {
      this._emitter = new r.Emitter();
     }
     return this._emitter.event;
    },
    enumerable: true,
    configurable: true
   });
   return e;
  }();
  var l = function() {
   function e() {}
   Object.defineProperty(e.prototype, "token", {
    get: function() {
     if (!this._token) {
      this._token = new s();
     }
     return this._token;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.cancel = function() {
    if (!this._token) {
     this._token = a.Cancelled;
    } else {
     this._token.cancel();
    }
   };
   e.prototype.dispose = function() {
    this.cancel();
   };
   return e;
  }();
  t.CancellationTokenSource = l;
 },
 GJ21: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("COhr");
  var i = n("D7GY");
  var a = n("2Sr3");
  var o = n("5W09");
  var s = n("hde3");
  var l = n("Ux9y");
  var c = n("ZTF0");
  var h = r.createConnection();
  console.log = h.console.log.bind(h.console);
  console.error = h.console.error.bind(h.console);
  process.on("unhandledRejection", function(e) {
   h.console.error(o.formatError("Unhandled exception", e));
  });
  var d = new r.TextDocuments();
  d.listen(h);
  var u = a.getLanguageModelCache(10, 60, function(e) {
   return b(e).parseStylesheet(e);
  });
  d.onDidClose(function(e) {
   u.onDocumentRemoved(e.document);
  });
  h.onShutdown(function() {
   u.dispose();
  });
  var p = false;
  var m = Number.MAX_VALUE;
  var f;
  h.onInitialize(function(e) {
   f = e.workspaceFolders;
   if (!Array.isArray(f)) {
    f = [];
    if (e.rootPath) {
     f.push({
      name: "",
      uri: s.default.file(e.rootPath).toString()
     });
    }
   }
   function t(t, n) {
    var r = t.split(".");
    var i = e.capabilities;
    for (var a = 0; i && a < r.length; a++) {
     if (!i.hasOwnProperty(r[a])) {
      return n;
     }
     i = i[r[a]];
    }
    return i;
   }
   var n = !!t("textDocument.completion.completionItem.snippetSupport", false);
   p = !!t("workspace.configuration", false);
   m = t("textDocument.foldingRange.rangeLimit", Number.MAX_VALUE);
   var r = {
    textDocumentSync: d.syncKind,
    completionProvider: n ? {
     resolveProvider: false,
     triggerCharacters: [ "/" ]
    } : undefined,
    hoverProvider: true,
    documentSymbolProvider: true,
    referencesProvider: true,
    definitionProvider: true,
    documentHighlightProvider: true,
    codeActionProvider: true,
    renameProvider: true,
    colorProvider: {},
    foldingRangeProvider: true
   };
   return {
    capabilities: r
   };
  });
  var g = {
   css: i.getCSSLanguageService(),
   scss: i.getSCSSLanguageService(),
   less: i.getLESSLanguageService()
  };
  function b(e) {
   var t = g[e.languageId];
   if (!t) {
    h.console.log("Document type is " + e.languageId + ", using css instead.");
    t = g["css"];
   }
   return t;
  }
  var y = {};
  d.onDidClose(function(e) {
   delete y[e.document.uri];
  });
  function v(e) {
   if (p) {
    var t = y[e.uri];
    if (!t) {
     var n = {
      items: [ {
       scopeUri: e.uri,
       section: e.languageId
      } ]
     };
     t = h.sendRequest(r.ConfigurationRequest.type, n).then(function(e) {
      return e[0];
     });
     y[e.uri] = t;
    }
    return t;
   }
   return Promise.resolve(void 0);
  }
  h.onDidChangeConfiguration(function(e) {
   w(e.settings);
  });
  function w(e) {
   for (var t in g) {
    g[t].configure(e[t]);
   }
   y = {};
   d.all().forEach(S);
  }
  var x = {};
  var k = 500;
  d.onDidChangeContent(function(e) {
   S(e.document);
  });
  d.onDidClose(function(e) {
   C(e.document);
   h.sendDiagnostics({
    uri: e.document.uri,
    diagnostics: []
   });
  });
  function C(e) {
   var t = x[e.uri];
   if (t) {
    clearTimeout(t);
    delete x[e.uri];
   }
  }
  function S(e) {
   C(e);
   x[e.uri] = setTimeout(function() {
    delete x[e.uri];
    F(e);
   }, k);
  }
  function F(e) {
   var t = v(e);
   t.then(function(t) {
    var n = u.get(e);
    var r = b(e).doValidation(e, n, t);
    h.sendDiagnostics({
     uri: e.uri,
     diagnostics: r
    });
   }, function(t) {
    h.console.error(o.formatError("Error while validating " + e.uri, t));
   });
  }
  h.onCompletion(function(e, t) {
   return o.runSafe(function() {
    var t = d.get(e.textDocument.uri);
    if (!t) {
     return null;
    }
    var n = b(t);
    var r = {
     isIncomplete: false,
     items: []
    };
    n.setCompletionParticipants([ l.getPathCompletionParticipant(t, f, r) ]);
    var i = n.doComplete(t, e.position, u.get(t));
    return {
     isIncomplete: r.isIncomplete,
     items: r.items.concat(i.items)
    };
   }, null, "Error while computing completions for " + e.textDocument.uri, t);
  });
  h.onHover(function(e, t) {
   return o.runSafe(function() {
    var t = d.get(e.textDocument.uri);
    if (t) {
     var n = u.get(t);
     return b(t).doHover(t, e.position, n);
    }
    return null;
   }, null, "Error while computing hover for " + e.textDocument.uri, t);
  });
  h.onDocumentSymbol(function(e, t) {
   return o.runSafe(function() {
    var t = d.get(e.textDocument.uri);
    if (t) {
     var n = u.get(t);
     return b(t).findDocumentSymbols(t, n);
    }
    return [];
   }, [], "Error while computing document symbols for " + e.textDocument.uri, t);
  });
  h.onDefinition(function(e, t) {
   return o.runSafe(function() {
    var t = d.get(e.textDocument.uri);
    if (t) {
     var n = u.get(t);
     return b(t).findDefinition(t, e.position, n);
    }
    return null;
   }, null, "Error while computing definitions for " + e.textDocument.uri, t);
  });
  h.onDocumentHighlight(function(e, t) {
   return o.runSafe(function() {
    var t = d.get(e.textDocument.uri);
    if (t) {
     var n = u.get(t);
     return b(t).findDocumentHighlights(t, e.position, n);
    }
    return [];
   }, [], "Error while computing document highlights for " + e.textDocument.uri, t);
  });
  h.onReferences(function(e, t) {
   return o.runSafe(function() {
    var t = d.get(e.textDocument.uri);
    if (t) {
     var n = u.get(t);
     return b(t).findReferences(t, e.position, n);
    }
    return [];
   }, [], "Error while computing references for " + e.textDocument.uri, t);
  });
  h.onCodeAction(function(e, t) {
   return o.runSafe(function() {
    var t = d.get(e.textDocument.uri);
    if (t) {
     var n = u.get(t);
     return b(t).doCodeActions(t, e.range, e.context, n);
    }
    return [];
   }, [], "Error while computing code actions for " + e.textDocument.uri, t);
  });
  h.onDocumentColor(function(e, t) {
   return o.runSafe(function() {
    var t = d.get(e.textDocument.uri);
    if (t) {
     var n = u.get(t);
     return b(t).findDocumentColors(t, n);
    }
    return [];
   }, [], "Error while computing document colors for " + e.textDocument.uri, t);
  });
  h.onColorPresentation(function(e, t) {
   return o.runSafe(function() {
    var t = d.get(e.textDocument.uri);
    if (t) {
     var n = u.get(t);
     return b(t).getColorPresentations(t, n, e.color, e.range);
    }
    return [];
   }, [], "Error while computing color presentations for " + e.textDocument.uri, t);
  });
  h.onRenameRequest(function(e, t) {
   return o.runSafe(function() {
    var t = d.get(e.textDocument.uri);
    if (t) {
     var n = u.get(t);
     return b(t).doRename(t, e.position, e.newName, n);
    }
    return null;
   }, null, "Error while computing renames for " + e.textDocument.uri, t);
  });
  h.onRequest(c.FoldingRangeRequest.type, function(e, t) {
   return o.runSafe(function() {
    var t = d.get(e.textDocument.uri);
    if (t) {
     return b(t).getFoldingRanges(t, {
      rangeLimit: m
     });
    }
    return null;
   }, null, "Error while computing folding ranges for " + e.textDocument.uri, t);
  });
  h.listen();
 },
 Jf2r: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("BOov");
  t.WorkspaceFoldersFeature = (e => {
   return class extends e {
    initialize(e) {
     let t = e.workspace;
     if (t && t.workspaceFolders) {
      this._onDidChangeWorkspaceFolders = new r.Emitter();
      this.connection.onNotification(r.DidChangeWorkspaceFoldersNotification.type, e => {
       this._onDidChangeWorkspaceFolders.fire(e.event);
      });
     }
    }
    getWorkspaceFolders() {
     return this.connection.sendRequest(r.WorkspaceFoldersRequest.type);
    }
    get onDidChangeWorkspaceFolders() {
     if (!this._onDidChangeWorkspaceFolders) {
      throw new Error("Client doesn't support sending workspace folder change events.");
     }
     if (!this._unregistration) {
      this._unregistration = this.connection.client.register(r.DidChangeWorkspaceFoldersNotification.type);
     }
     return this._onDidChangeWorkspaceFolders.event;
    }
   };
  });
 },
 Krw1: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = Object.prototype.toString;
  function i(e) {
   return typeof e !== "undefined";
  }
  t.defined = i;
  function a(e) {
   return typeof e === "undefined";
  }
  t.undefined = a;
  function o(e) {
   return e === null;
  }
  t.nil = o;
  function s(e) {
   return e === true || e === false;
  }
  t.boolean = s;
  function l(e) {
   return r.call(e) === "[object String]";
  }
  t.string = l;
  function c(e) {
   return r.call(e) === "[object Number]";
  }
  t.number = c;
  function h(e) {
   return r.call(e) === "[object Error]";
  }
  t.error = h;
  function d(e) {
   return r.call(e) === "[object Function]";
  }
  t.func = d;
  function u(e) {
   return Array.isArray(e);
  }
  t.array = u;
  function p(e) {
   return u(e) && e.every(e => l(e));
  }
  t.stringArray = p;
  function m(e, t) {
   return Array.isArray(e) && e.every(t);
  }
  t.typedArray = m;
  function f(e) {
   return e && d(e.then);
  }
  t.thenable = f;
 },
 MxNS: function(e, t) {
  function n(e) {
   return require(e);
  }
  n.keys = function() {
   return [];
  };
  n.resolve = require.resolve;
  e.exports = n;
  n.id = "MxNS";
 },
 PJMN: function(e, t) {
  e.exports = require("crypto");
 },
 QduZ: function(e, t) {
  e.exports = require("child_process");
 },
 "Qhc/": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("BOov");
  const i = n("Krw1");
  t.ConfigurationFeature = (e => {
   return class extends e {
    getConfiguration(e) {
     if (!e) {
      return this._getConfiguration({});
     } else if (i.string(e)) {
      return this._getConfiguration({
       section: e
      });
     } else {
      return this._getConfiguration(e);
     }
    }
    _getConfiguration(e) {
     let t = {
      items: Array.isArray(e) ? e : [ e ]
     };
     return this.connection.sendRequest(r.ConfigurationRequest.type, t).then(t => {
      return Array.isArray(e) ? t : t[0];
     });
    }
   };
  });
 },
 Qs2e: function(e, t) {
  e.exports = require("net");
 },
 Ux9y: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("oyvS");
  var i = n("mw/K");
  var a = n("hde3");
  var o = n("kmEW");
  var s = n("4E7l");
  function l(e, t, n) {
   return {
    onCssURILiteralValue: function(r) {
     var i = r.position, o = r.range, l = r.uriValue;
     var d = s.startsWith(l, "'") || s.startsWith(l, '"');
     var m = c(l);
     var g = d ? m.slice(0, i.character - (o.start.character + 1)) : m.slice(0, i.character - o.start.character);
     if (m === "." || m === "..") {
      n.isIncomplete = true;
      return;
     }
     if (!t || t.length === 0) {
      return;
     }
     var y = f(e, t);
     var v = h(g, a.default.parse(e.uri).fsPath, y);
     var w = d ? b(o, 1, -1) : o;
     var x = u(g, m, w);
     var k = v.map(function(e) {
      return p(e, x);
     });
     n.items = k.concat(n.items);
    }
   };
  }
  t.getPathCompletionParticipant = l;
  function c(e) {
   if (s.startsWith(e, "'") || s.startsWith(e, '"')) {
    return e.slice(1, -1);
   } else {
    return e;
   }
  }
  function h(e, t, n) {
   if (s.startsWith(e, "/") && !n) {
    return [];
   }
   var a = e.lastIndexOf("/");
   var o = e.slice(0, a + 1);
   var l = s.startsWith(e, "/") ? r.resolve(n, "." + o) : r.resolve(t, "..", o);
   try {
    return i.readdirSync(l).map(function(e) {
     return d(r.resolve(l, e)) ? e + "/" : e;
    });
   } catch (e) {
    return [];
   }
  }
  var d = function(e) {
   try {
    return i.statSync(e).isDirectory();
   } catch (e) {
    return false;
   }
  };
  function u(e, t, n) {
   var r;
   var i = e.lastIndexOf("/");
   if (i === -1) {
    r = n;
   } else {
    var a = t.slice(i + 1);
    var s = g(n.end, -a.length);
    var l = a.indexOf(" ");
    var c = void 0;
    if (l !== -1) {
     c = g(s, l);
    } else {
     c = n.end;
    }
    r = o.Range.create(s, c);
   }
   return r;
  }
  function p(e, t) {
   var n = e[e.length - 1] === "/";
   if (n) {
    return {
     label: m(e),
     kind: o.CompletionItemKind.Folder,
     textEdit: o.TextEdit.replace(t, m(e)),
     command: {
      title: "Suggest",
      command: "editor.action.triggerSuggest"
     }
    };
   } else {
    return {
     label: m(e),
     kind: o.CompletionItemKind.File,
     textEdit: o.TextEdit.replace(t, m(e))
    };
   }
  }
  function m(e) {
   return e.replace(/(\s|\(|\)|,|"|')/g, "\\$1");
  }
  function f(e, t) {
   for (var n = 0; n < t.length; n++) {
    if (s.startsWith(e.uri, t[n].uri)) {
     return r.resolve(a.default.parse(t[n].uri).fsPath);
    }
   }
  }
  function g(e, t) {
   return o.Position.create(e.line, e.character + t);
  }
  function b(e, t, n) {
   var r = g(e.start, t);
   var i = g(e.end, n);
   return o.Range.create(r, i);
  }
 },
 VqZt: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("C+6V");
  var i;
  (function(e) {
   e.type = new r.RequestType0("workspace/workspaceFolders");
  })(i = t.WorkspaceFoldersRequest || (t.WorkspaceFoldersRequest = {}));
  var a;
  (function(e) {
   e.type = new r.NotificationType("workspace/didChangeWorkspaceFolders");
  })(a = t.DidChangeWorkspaceFoldersNotification || (t.DidChangeWorkspaceFoldersNotification = {}));
 },
 Z5Ki: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r;
  (function(e) {
   function t(e) {
    return {
     dispose: e
    };
   }
   e.create = t;
  })(r = t.Disposable || (t.Disposable = {}));
  var i;
  (function(e) {
   var t = {
    dispose: function() {}
   };
   e.None = function() {
    return t;
   };
  })(i = t.Event || (t.Event = {}));
  var a = function() {
   function e() {}
   e.prototype.add = function(e, t, n) {
    var r = this;
    if (t === void 0) {
     t = null;
    }
    if (!this._callbacks) {
     this._callbacks = [];
     this._contexts = [];
    }
    this._callbacks.push(e);
    this._contexts.push(t);
    if (Array.isArray(n)) {
     n.push({
      dispose: function() {
       return r.remove(e, t);
      }
     });
    }
   };
   e.prototype.remove = function(e, t) {
    if (t === void 0) {
     t = null;
    }
    if (!this._callbacks) {
     return;
    }
    var n = false;
    for (var r = 0, i = this._callbacks.length; r < i; r++) {
     if (this._callbacks[r] === e) {
      if (this._contexts[r] === t) {
       this._callbacks.splice(r, 1);
       this._contexts.splice(r, 1);
       return;
      } else {
       n = true;
      }
     }
    }
    if (n) {
     throw new Error("When adding a listener with a context, you should remove it with the same context");
    }
   };
   e.prototype.invoke = function() {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
     e[t] = arguments[t];
    }
    if (!this._callbacks) {
     return [];
    }
    var n = [], r = this._callbacks.slice(0), i = this._contexts.slice(0);
    for (var a = 0, o = r.length; a < o; a++) {
     try {
      n.push(r[a].apply(i[a], e));
     } catch (e) {
      console.error(e);
     }
    }
    return n;
   };
   e.prototype.isEmpty = function() {
    return !this._callbacks || this._callbacks.length === 0;
   };
   e.prototype.dispose = function() {
    this._callbacks = undefined;
    this._contexts = undefined;
   };
   return e;
  }();
  var o = function() {
   function e(e) {
    this._options = e;
   }
   Object.defineProperty(e.prototype, "event", {
    get: function() {
     var t = this;
     if (!this._event) {
      this._event = function(n, r, i) {
       if (!t._callbacks) {
        t._callbacks = new a();
       }
       if (t._options && t._options.onFirstListenerAdd && t._callbacks.isEmpty()) {
        t._options.onFirstListenerAdd(t);
       }
       t._callbacks.add(n, r);
       var o;
       o = {
        dispose: function() {
         t._callbacks.remove(n, r);
         o.dispose = e._noop;
         if (t._options && t._options.onLastListenerRemove && t._callbacks.isEmpty()) {
          t._options.onLastListenerRemove(t);
         }
        }
       };
       if (Array.isArray(i)) {
        i.push(o);
       }
       return o;
      };
     }
     return this._event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fire = function(e) {
    if (this._callbacks) {
     this._callbacks.invoke.call(this._callbacks, e);
    }
   };
   e.prototype.dispose = function() {
    if (this._callbacks) {
     this._callbacks.dispose();
     this._callbacks = undefined;
    }
   };
   e._noop = function() {};
   return e;
  }();
  t.Emitter = o;
 },
 ZTF0: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("BOov");
  var i;
  (function(e) {
   e["Comment"] = "comment";
   e["Imports"] = "imports";
   e["Region"] = "region";
  })(i = t.FoldingRangeKind || (t.FoldingRangeKind = {}));
  var a;
  (function(e) {
   e.type = new r.RequestType("textDocument/foldingRange");
  })(a = t.FoldingRangeRequest || (t.FoldingRangeRequest = {}));
 },
 bzos: function(e, t) {
  e.exports = require("url");
 },
 hde3: function(e, t, n) {
  "use strict";
  n.r(t);
  var r = undefined && undefined.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  var i;
  if (typeof process === "object") {
   i = process.platform === "win32";
  } else if (typeof navigator === "object") {
   var a = navigator.userAgent;
   i = a.indexOf("Windows") >= 0;
  }
  var o = /^\w[\w\d+.-]*$/;
  var s = /^\//;
  var l = /^\/\//;
  function c(e) {
   if (e.scheme && !o.test(e.scheme)) {
    throw new Error("[UriError]: Scheme contains illegal characters.");
   }
   if (e.path) {
    if (e.authority) {
     if (!s.test(e.path)) {
      throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
     }
    } else {
     if (l.test(e.path)) {
      throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
     }
    }
   }
  }
  function h(e, t) {
   switch (e) {
   case "https":
   case "http":
   case "file":
    if (!t) {
     t = u;
    } else if (t[0] !== u) {
     t = u + t;
    }
    break;
   }
   return t;
  }
  var d = "";
  var u = "/";
  var p = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
  var m = function() {
   function e(e, t, n, r, i) {
    if (typeof e === "object") {
     this.scheme = e.scheme || d;
     this.authority = e.authority || d;
     this.path = e.path || d;
     this.query = e.query || d;
     this.fragment = e.fragment || d;
    } else {
     this.scheme = e || d;
     this.authority = t || d;
     this.path = h(this.scheme, n || d);
     this.query = r || d;
     this.fragment = i || d;
     c(this);
    }
   }
   e.isUri = function(t) {
    if (t instanceof e) {
     return true;
    }
    if (!t) {
     return false;
    }
    return typeof t.authority === "string" && typeof t.fragment === "string" && typeof t.path === "string" && typeof t.query === "string" && typeof t.scheme === "string";
   };
   Object.defineProperty(e.prototype, "fsPath", {
    get: function() {
     return v(this);
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.with = function(e) {
    if (!e) {
     return this;
    }
    var t = e.scheme, n = e.authority, r = e.path, i = e.query, a = e.fragment;
    if (t === void 0) {
     t = this.scheme;
    } else if (t === null) {
     t = d;
    }
    if (n === void 0) {
     n = this.authority;
    } else if (n === null) {
     n = d;
    }
    if (r === void 0) {
     r = this.path;
    } else if (r === null) {
     r = d;
    }
    if (i === void 0) {
     i = this.query;
    } else if (i === null) {
     i = d;
    }
    if (a === void 0) {
     a = this.fragment;
    } else if (a === null) {
     a = d;
    }
    if (t === this.scheme && n === this.authority && r === this.path && i === this.query && a === this.fragment) {
     return this;
    }
    return new f(t, n, r, i, a);
   };
   e.parse = function(e) {
    var t = p.exec(e);
    if (!t) {
     return new f(d, d, d, d, d);
    }
    return new f(t[2] || d, decodeURIComponent(t[4] || d), decodeURIComponent(t[5] || d), decodeURIComponent(t[7] || d), decodeURIComponent(t[9] || d));
   };
   e.file = function(e) {
    var t = d;
    if (i) {
     e = e.replace(/\\/g, u);
    }
    if (e[0] === u && e[1] === u) {
     var n = e.indexOf(u, 2);
     if (n === -1) {
      t = e.substring(2);
      e = u;
     } else {
      t = e.substring(2, n);
      e = e.substring(n) || u;
     }
    }
    return new f("file", t, e, d, d);
   };
   e.from = function(e) {
    return new f(e.scheme, e.authority, e.path, e.query, e.fragment);
   };
   e.prototype.toString = function(e) {
    if (e === void 0) {
     e = false;
    }
    return w(this, e);
   };
   e.prototype.toJSON = function() {
    return this;
   };
   e.revive = function(t) {
    if (!t) {
     return t;
    } else if (t instanceof e) {
     return t;
    } else {
     var n = new f(t);
     n._fsPath = t.fsPath;
     n._formatted = t.external;
     return n;
    }
   };
   return e;
  }();
  t["default"] = m;
  var f = function(e) {
   r(t, e);
   function t() {
    var t = e !== null && e.apply(this, arguments) || this;
    t._formatted = null;
    t._fsPath = null;
    return t;
   }
   Object.defineProperty(t.prototype, "fsPath", {
    get: function() {
     if (!this._fsPath) {
      this._fsPath = v(this);
     }
     return this._fsPath;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.toString = function(e) {
    if (e === void 0) {
     e = false;
    }
    if (!e) {
     if (!this._formatted) {
      this._formatted = w(this, false);
     }
     return this._formatted;
    } else {
     return w(this, true);
    }
   };
   t.prototype.toJSON = function() {
    var e = {
     $mid: 1
    };
    if (this._fsPath) {
     e.fsPath = this._fsPath;
    }
    if (this._formatted) {
     e.external = this._formatted;
    }
    if (this.path) {
     e.path = this.path;
    }
    if (this.scheme) {
     e.scheme = this.scheme;
    }
    if (this.authority) {
     e.authority = this.authority;
    }
    if (this.query) {
     e.query = this.query;
    }
    if (this.fragment) {
     e.fragment = this.fragment;
    }
    return e;
   };
   return t;
  }(m);
  var g = (x = {}, x[58] = "%3A", x[47] = "%2F", x[63] = "%3F", x[35] = "%23", x[91] = "%5B", 
  x[93] = "%5D", x[64] = "%40", x[33] = "%21", x[36] = "%24", x[38] = "%26", x[39] = "%27", 
  x[40] = "%28", x[41] = "%29", x[42] = "%2A", x[43] = "%2B", x[44] = "%2C", x[59] = "%3B", 
  x[61] = "%3D", x[32] = "%20", x);
  function b(e, t) {
   var n = undefined;
   var r = -1;
   for (var i = 0; i < e.length; i++) {
    var a = e.charCodeAt(i);
    if (a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || a === 45 || a === 46 || a === 95 || a === 126 || t && a === 47) {
     if (r !== -1) {
      n += encodeURIComponent(e.substring(r, i));
      r = -1;
     }
     if (n !== undefined) {
      n += e.charAt(i);
     }
    } else {
     if (n === undefined) {
      n = e.substr(0, i);
     }
     var o = g[a];
     if (o !== undefined) {
      if (r !== -1) {
       n += encodeURIComponent(e.substring(r, i));
       r = -1;
      }
      n += o;
     } else if (r === -1) {
      r = i;
     }
    }
   }
   if (r !== -1) {
    n += encodeURIComponent(e.substring(r));
   }
   return n !== undefined ? n : e;
  }
  function y(e) {
   var t = undefined;
   for (var n = 0; n < e.length; n++) {
    var r = e.charCodeAt(n);
    if (r === 35 || r === 63) {
     if (t === undefined) {
      t = e.substr(0, n);
     }
     t += g[r];
    } else {
     if (t !== undefined) {
      t += e[n];
     }
    }
   }
   return t !== undefined ? t : e;
  }
  function v(e) {
   var t;
   if (e.authority && e.path.length > 1 && e.scheme === "file") {
    t = "//" + e.authority + e.path;
   } else if (e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58) {
    t = e.path[1].toLowerCase() + e.path.substr(2);
   } else {
    t = e.path;
   }
   if (i) {
    t = t.replace(/\//g, "\\");
   }
   return t;
  }
  function w(e, t) {
   var n = !t ? b : y;
   var r = "";
   var i = e.scheme, a = e.authority, o = e.path, s = e.query, l = e.fragment;
   if (i) {
    r += i;
    r += ":";
   }
   if (a || i === "file") {
    r += u;
    r += u;
   }
   if (a) {
    var c = a.indexOf("@");
    if (c !== -1) {
     var h = a.substr(0, c);
     a = a.substr(c + 1);
     c = h.indexOf(":");
     if (c === -1) {
      r += n(h, false);
     } else {
      r += n(h.substr(0, c), false);
      r += ":";
      r += n(h.substr(c + 1), false);
     }
     r += "@";
    }
    a = a.toLowerCase();
    c = a.indexOf(":");
    if (c === -1) {
     r += n(a, false);
    } else {
     r += n(a.substr(0, c), false);
     r += a.substr(c);
    }
   }
   if (o) {
    if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
     var d = o.charCodeAt(1);
     if (d >= 65 && d <= 90) {
      o = "/" + String.fromCharCode(d + 32) + ":" + o.substr(3);
     }
    } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
     var d = o.charCodeAt(0);
     if (d >= 65 && d <= 90) {
      o = String.fromCharCode(d + 32) + ":" + o.substr(2);
     }
    }
    r += n(o, true);
   }
   if (s) {
    r += "?";
    r += n(s, false);
   }
   if (l) {
    r += "#";
    r += n(l, false);
   }
   return r;
  }
  var x;
 },
 "jle/": function(e, t) {
  e.exports = require("os");
 },
 kmEW: function(e, t, n) {
  "use strict";
  n.r(t);
  n.d(t, "Position", function() {
   return r;
  });
  n.d(t, "Range", function() {
   return i;
  });
  n.d(t, "Location", function() {
   return a;
  });
  n.d(t, "DiagnosticRelatedInformation", function() {
   return o;
  });
  n.d(t, "DiagnosticSeverity", function() {
   return s;
  });
  n.d(t, "Diagnostic", function() {
   return l;
  });
  n.d(t, "Command", function() {
   return c;
  });
  n.d(t, "TextEdit", function() {
   return h;
  });
  n.d(t, "TextDocumentEdit", function() {
   return d;
  });
  n.d(t, "WorkspaceEdit", function() {
   return u;
  });
  n.d(t, "WorkspaceChange", function() {
   return m;
  });
  n.d(t, "TextDocumentIdentifier", function() {
   return f;
  });
  n.d(t, "VersionedTextDocumentIdentifier", function() {
   return g;
  });
  n.d(t, "TextDocumentItem", function() {
   return b;
  });
  n.d(t, "MarkupKind", function() {
   return y;
  });
  n.d(t, "MarkupContent", function() {
   return v;
  });
  n.d(t, "CompletionItemKind", function() {
   return w;
  });
  n.d(t, "InsertTextFormat", function() {
   return x;
  });
  n.d(t, "CompletionItem", function() {
   return k;
  });
  n.d(t, "CompletionList", function() {
   return C;
  });
  n.d(t, "MarkedString", function() {
   return S;
  });
  n.d(t, "Hover", function() {
   return F;
  });
  n.d(t, "ParameterInformation", function() {
   return E;
  });
  n.d(t, "SignatureInformation", function() {
   return T;
  });
  n.d(t, "DocumentHighlightKind", function() {
   return I;
  });
  n.d(t, "DocumentHighlight", function() {
   return _;
  });
  n.d(t, "SymbolKind", function() {
   return R;
  });
  n.d(t, "SymbolInformation", function() {
   return P;
  });
  n.d(t, "CodeActionKind", function() {
   return D;
  });
  n.d(t, "CodeActionContext", function() {
   return A;
  });
  n.d(t, "CodeAction", function() {
   return O;
  });
  n.d(t, "CodeLens", function() {
   return z;
  });
  n.d(t, "FormattingOptions", function() {
   return N;
  });
  n.d(t, "DocumentLink", function() {
   return M;
  });
  n.d(t, "EOL", function() {
   return U;
  });
  n.d(t, "TextDocument", function() {
   return q;
  });
  n.d(t, "TextDocumentSaveReason", function() {
   return j;
  });
  var r;
  (function(e) {
   function t(e, t) {
    return {
     line: e,
     character: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return V.objectLiteral(t) && V.number(t.line) && V.number(t.character);
   }
   e.is = n;
  })(r || (r = {}));
  var i;
  (function(e) {
   function t(e, t, n, i) {
    if (V.number(e) && V.number(t) && V.number(n) && V.number(i)) {
     return {
      start: r.create(e, t),
      end: r.create(n, i)
     };
    } else if (r.is(e) && r.is(t)) {
     return {
      start: e,
      end: t
     };
    } else {
     throw new Error("Range#create called with invalid arguments[" + e + ", " + t + ", " + n + ", " + i + "]");
    }
   }
   e.create = t;
   function n(e) {
    var t = e;
    return V.objectLiteral(t) && r.is(t.start) && r.is(t.end);
   }
   e.is = n;
  })(i || (i = {}));
  var a;
  (function(e) {
   function t(e, t) {
    return {
     uri: e,
     range: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return V.defined(t) && i.is(t.range) && (V.string(t.uri) || V.undefined(t.uri));
   }
   e.is = n;
  })(a || (a = {}));
  var o;
  (function(e) {
   function t(e, t) {
    return {
     location: e,
     message: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return V.defined(t) && a.is(t.location) && V.string(t.message);
   }
   e.is = n;
  })(o || (o = {}));
  var s;
  (function(e) {
   e.Error = 1;
   e.Warning = 2;
   e.Information = 3;
   e.Hint = 4;
  })(s || (s = {}));
  var l;
  (function(e) {
   function t(e, t, n, r, i, a) {
    var o = {
     range: e,
     message: t
    };
    if (V.defined(n)) {
     o.severity = n;
    }
    if (V.defined(r)) {
     o.code = r;
    }
    if (V.defined(i)) {
     o.source = i;
    }
    if (V.defined(a)) {
     o.relatedInformation = a;
    }
    return o;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return V.defined(t) && i.is(t.range) && V.string(t.message) && (V.number(t.severity) || V.undefined(t.severity)) && (V.number(t.code) || V.string(t.code) || V.undefined(t.code)) && (V.string(t.source) || V.undefined(t.source)) && (V.undefined(t.relatedInformation) || V.typedArray(t.relatedInformation, o.is));
   }
   e.is = n;
  })(l || (l = {}));
  var c;
  (function(e) {
   function t(e, t) {
    var n = [];
    for (var r = 2; r < arguments.length; r++) {
     n[r - 2] = arguments[r];
    }
    var i = {
     title: e,
     command: t
    };
    if (V.defined(n) && n.length > 0) {
     i.arguments = n;
    }
    return i;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return V.defined(t) && V.string(t.title) && V.string(t.command);
   }
   e.is = n;
  })(c || (c = {}));
  var h;
  (function(e) {
   function t(e, t) {
    return {
     range: e,
     newText: t
    };
   }
   e.replace = t;
   function n(e, t) {
    return {
     range: {
      start: e,
      end: e
     },
     newText: t
    };
   }
   e.insert = n;
   function r(e) {
    return {
     range: e,
     newText: ""
    };
   }
   e.del = r;
  })(h || (h = {}));
  var d;
  (function(e) {
   function t(e, t) {
    return {
     textDocument: e,
     edits: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return V.defined(t) && g.is(t.textDocument) && Array.isArray(t.edits);
   }
   e.is = n;
  })(d || (d = {}));
  var u;
  (function(e) {
   function t(e) {
    var t = e;
    return t && (t.changes !== void 0 || t.documentChanges !== void 0) && (t.documentChanges === void 0 || V.typedArray(t.documentChanges, d.is));
   }
   e.is = t;
  })(u || (u = {}));
  var p = function() {
   function e(e) {
    this.edits = e;
   }
   e.prototype.insert = function(e, t) {
    this.edits.push(h.insert(e, t));
   };
   e.prototype.replace = function(e, t) {
    this.edits.push(h.replace(e, t));
   };
   e.prototype.delete = function(e) {
    this.edits.push(h.del(e));
   };
   e.prototype.add = function(e) {
    this.edits.push(e);
   };
   e.prototype.all = function() {
    return this.edits;
   };
   e.prototype.clear = function() {
    this.edits.splice(0, this.edits.length);
   };
   return e;
  }();
  var m = function() {
   function e(e) {
    var t = this;
    this._textEditChanges = Object.create(null);
    if (e) {
     this._workspaceEdit = e;
     if (e.documentChanges) {
      e.documentChanges.forEach(function(e) {
       var n = new p(e.edits);
       t._textEditChanges[e.textDocument.uri] = n;
      });
     } else if (e.changes) {
      Object.keys(e.changes).forEach(function(n) {
       var r = new p(e.changes[n]);
       t._textEditChanges[n] = r;
      });
     }
    }
   }
   Object.defineProperty(e.prototype, "edit", {
    get: function() {
     return this._workspaceEdit;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.getTextEditChange = function(e) {
    if (g.is(e)) {
     if (!this._workspaceEdit) {
      this._workspaceEdit = {
       documentChanges: []
      };
     }
     if (!this._workspaceEdit.documentChanges) {
      throw new Error("Workspace edit is not configured for versioned document changes.");
     }
     var t = e;
     var n = this._textEditChanges[t.uri];
     if (!n) {
      var r = [];
      var i = {
       textDocument: t,
       edits: r
      };
      this._workspaceEdit.documentChanges.push(i);
      n = new p(r);
      this._textEditChanges[t.uri] = n;
     }
     return n;
    } else {
     if (!this._workspaceEdit) {
      this._workspaceEdit = {
       changes: Object.create(null)
      };
     }
     if (!this._workspaceEdit.changes) {
      throw new Error("Workspace edit is not configured for normal text edit changes.");
     }
     var n = this._textEditChanges[e];
     if (!n) {
      var r = [];
      this._workspaceEdit.changes[e] = r;
      n = new p(r);
      this._textEditChanges[e] = n;
     }
     return n;
    }
   };
   return e;
  }();
  var f;
  (function(e) {
   function t(e) {
    return {
     uri: e
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return V.defined(t) && V.string(t.uri);
   }
   e.is = n;
  })(f || (f = {}));
  var g;
  (function(e) {
   function t(e, t) {
    return {
     uri: e,
     version: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return V.defined(t) && V.string(t.uri) && V.number(t.version);
   }
   e.is = n;
  })(g || (g = {}));
  var b;
  (function(e) {
   function t(e, t, n, r) {
    return {
     uri: e,
     languageId: t,
     version: n,
     text: r
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return V.defined(t) && V.string(t.uri) && V.string(t.languageId) && V.number(t.version) && V.string(t.text);
   }
   e.is = n;
  })(b || (b = {}));
  var y;
  (function(e) {
   e.PlainText = "plaintext";
   e.Markdown = "markdown";
  })(y || (y = {}));
  (function(e) {
   function t(t) {
    var n = t;
    return n === e.PlainText || n === e.Markdown;
   }
   e.is = t;
  })(y || (y = {}));
  var v;
  (function(e) {
   function t(e) {
    var t = e;
    return V.objectLiteral(e) && y.is(t.kind) && V.string(t.value);
   }
   e.is = t;
  })(v || (v = {}));
  var w;
  (function(e) {
   e.Text = 1;
   e.Method = 2;
   e.Function = 3;
   e.Constructor = 4;
   e.Field = 5;
   e.Variable = 6;
   e.Class = 7;
   e.Interface = 8;
   e.Module = 9;
   e.Property = 10;
   e.Unit = 11;
   e.Value = 12;
   e.Enum = 13;
   e.Keyword = 14;
   e.Snippet = 15;
   e.Color = 16;
   e.File = 17;
   e.Reference = 18;
   e.Folder = 19;
   e.EnumMember = 20;
   e.Constant = 21;
   e.Struct = 22;
   e.Event = 23;
   e.Operator = 24;
   e.TypeParameter = 25;
  })(w || (w = {}));
  var x;
  (function(e) {
   e.PlainText = 1;
   e.Snippet = 2;
  })(x || (x = {}));
  var k;
  (function(e) {
   function t(e) {
    return {
     label: e
    };
   }
   e.create = t;
  })(k || (k = {}));
  var C;
  (function(e) {
   function t(e, t) {
    return {
     items: e ? e : [],
     isIncomplete: !!t
    };
   }
   e.create = t;
  })(C || (C = {}));
  var S;
  (function(e) {
   function t(e) {
    return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
   }
   e.fromPlainText = t;
   function n(e) {
    var t = e;
    return V.string(t) || V.objectLiteral(t) && V.string(t.language) && V.string(t.value);
   }
   e.is = n;
  })(S || (S = {}));
  var F;
  (function(e) {
   function t(e) {
    var t = e;
    return V.objectLiteral(t) && (v.is(t.contents) || S.is(t.contents) || V.typedArray(t.contents, S.is)) && (e.range === void 0 || i.is(e.range));
   }
   e.is = t;
  })(F || (F = {}));
  var E;
  (function(e) {
   function t(e, t) {
    return t ? {
     label: e,
     documentation: t
    } : {
     label: e
    };
   }
   e.create = t;
  })(E || (E = {}));
  var T;
  (function(e) {
   function t(e, t) {
    var n = [];
    for (var r = 2; r < arguments.length; r++) {
     n[r - 2] = arguments[r];
    }
    var i = {
     label: e
    };
    if (V.defined(t)) {
     i.documentation = t;
    }
    if (V.defined(n)) {
     i.parameters = n;
    } else {
     i.parameters = [];
    }
    return i;
   }
   e.create = t;
  })(T || (T = {}));
  var I;
  (function(e) {
   e.Text = 1;
   e.Read = 2;
   e.Write = 3;
  })(I || (I = {}));
  var _;
  (function(e) {
   function t(e, t) {
    var n = {
     range: e
    };
    if (V.number(t)) {
     n.kind = t;
    }
    return n;
   }
   e.create = t;
  })(_ || (_ = {}));
  var R;
  (function(e) {
   e.File = 1;
   e.Module = 2;
   e.Namespace = 3;
   e.Package = 4;
   e.Class = 5;
   e.Method = 6;
   e.Property = 7;
   e.Field = 8;
   e.Constructor = 9;
   e.Enum = 10;
   e.Interface = 11;
   e.Function = 12;
   e.Variable = 13;
   e.Constant = 14;
   e.String = 15;
   e.Number = 16;
   e.Boolean = 17;
   e.Array = 18;
   e.Object = 19;
   e.Key = 20;
   e.Null = 21;
   e.EnumMember = 22;
   e.Struct = 23;
   e.Event = 24;
   e.Operator = 25;
   e.TypeParameter = 26;
  })(R || (R = {}));
  var P;
  (function(e) {
   function t(e, t, n, r, i) {
    var a = {
     name: e,
     kind: t,
     location: {
      uri: r,
      range: n
     }
    };
    if (i) {
     a.containerName = i;
    }
    return a;
   }
   e.create = t;
  })(P || (P = {}));
  var D;
  (function(e) {
   e.QuickFix = "quickfix";
   e.Refactor = "refactor";
   e.RefactorExtract = "refactor.extract";
   e.RefactorInline = "refactor.inline";
   e.RefactorRewrite = "refactor.rewrite";
   e.Source = "source";
   e.SourceOrganizeImports = "source.organizeImports";
  })(D || (D = {}));
  var A;
  (function(e) {
   function t(e, t) {
    var n = {
     diagnostics: e
    };
    if (t !== void 0 && t !== null) {
     n.only = t;
    }
    return n;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return V.defined(t) && V.typedArray(t.diagnostics, l.is) && (t.only === void 0 || V.typedArray(t.only, V.string));
   }
   e.is = n;
  })(A || (A = {}));
  var O;
  (function(e) {
   function t(e, t, n) {
    var r = {
     title: e
    };
    if (c.is(t)) {
     r.command = t;
    } else {
     r.edit = t;
    }
    if (n !== void null) {
     r.kind = n;
    }
    return r;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return t && V.string(t.title) && (t.diagnostics === void 0 || V.typedArray(t.diagnostics, l.is)) && (t.kind === void 0 || V.string(t.kind)) && (t.edit !== void 0 || t.command !== void 0) && (t.command === void 0 || c.is(t.command)) && (t.edit === void 0 || u.is(t.edit));
   }
   e.is = n;
  })(O || (O = {}));
  var z;
  (function(e) {
   function t(e, t) {
    var n = {
     range: e
    };
    if (V.defined(t)) n.data = t;
    return n;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return V.defined(t) && i.is(t.range) && (V.undefined(t.command) || c.is(t.command));
   }
   e.is = n;
  })(z || (z = {}));
  var N;
  (function(e) {
   function t(e, t) {
    return {
     tabSize: e,
     insertSpaces: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return V.defined(t) && V.number(t.tabSize) && V.boolean(t.insertSpaces);
   }
   e.is = n;
  })(N || (N = {}));
  var M = function() {
   function e() {}
   return e;
  }();
  (function(e) {
   function t(e, t, n) {
    return {
     range: e,
     target: t,
     data: n
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return V.defined(t) && i.is(t.range) && (V.undefined(t.target) || V.string(t.target));
   }
   e.is = n;
  })(M || (M = {}));
  var U = [ "\n", "\r\n", "\r" ];
  var q;
  (function(e) {
   function t(e, t, n, r) {
    return new L(e, t, n, r);
   }
   e.create = t;
   function n(e) {
    var t = e;
    return V.defined(t) && V.string(t.uri) && (V.undefined(t.languageId) || V.string(t.languageId)) && V.number(t.lineCount) && V.func(t.getText) && V.func(t.positionAt) && V.func(t.offsetAt) ? true : false;
   }
   e.is = n;
   function r(e, t) {
    var n = e.getText();
    var r = i(t, function(e, t) {
     var n = e.range.start.line - t.range.start.line;
     if (n === 0) {
      return e.range.start.character - t.range.start.character;
     }
     return n;
    });
    var a = n.length;
    for (var o = r.length - 1; o >= 0; o--) {
     var s = r[o];
     var l = e.offsetAt(s.range.start);
     var c = e.offsetAt(s.range.end);
     if (c <= a) {
      n = n.substring(0, l) + s.newText + n.substring(c, n.length);
     } else {
      throw new Error("Ovelapping edit");
     }
     a = l;
    }
    return n;
   }
   e.applyEdits = r;
   function i(e, t) {
    if (e.length <= 1) {
     return e;
    }
    var n = e.length / 2 | 0;
    var r = e.slice(0, n);
    var a = e.slice(n);
    i(r, t);
    i(a, t);
    var o = 0;
    var s = 0;
    var l = 0;
    while (o < r.length && s < a.length) {
     var c = t(r[o], a[s]);
     if (c <= 0) {
      e[l++] = r[o++];
     } else {
      e[l++] = a[s++];
     }
    }
    while (o < r.length) {
     e[l++] = r[o++];
    }
    while (s < a.length) {
     e[l++] = a[s++];
    }
    return e;
   }
  })(q || (q = {}));
  var j;
  (function(e) {
   e.Manual = 1;
   e.AfterDelay = 2;
   e.FocusOut = 3;
  })(j || (j = {}));
  var L = function() {
   function e(e, t, n, r) {
    this._uri = e;
    this._languageId = t;
    this._version = n;
    this._content = r;
    this._lineOffsets = null;
   }
   Object.defineProperty(e.prototype, "uri", {
    get: function() {
     return this._uri;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "languageId", {
    get: function() {
     return this._languageId;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "version", {
    get: function() {
     return this._version;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.getText = function(e) {
    if (e) {
     var t = this.offsetAt(e.start);
     var n = this.offsetAt(e.end);
     return this._content.substring(t, n);
    }
    return this._content;
   };
   e.prototype.update = function(e, t) {
    this._content = e.text;
    this._version = t;
    this._lineOffsets = null;
   };
   e.prototype.getLineOffsets = function() {
    if (this._lineOffsets === null) {
     var e = [];
     var t = this._content;
     var n = true;
     for (var r = 0; r < t.length; r++) {
      if (n) {
       e.push(r);
       n = false;
      }
      var i = t.charAt(r);
      n = i === "\r" || i === "\n";
      if (i === "\r" && r + 1 < t.length && t.charAt(r + 1) === "\n") {
       r++;
      }
     }
     if (n && t.length > 0) {
      e.push(t.length);
     }
     this._lineOffsets = e;
    }
    return this._lineOffsets;
   };
   e.prototype.positionAt = function(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    var t = this.getLineOffsets();
    var n = 0, i = t.length;
    if (i === 0) {
     return r.create(0, e);
    }
    while (n < i) {
     var a = Math.floor((n + i) / 2);
     if (t[a] > e) {
      i = a;
     } else {
      n = a + 1;
     }
    }
    var o = n - 1;
    return r.create(o, e - t[o]);
   };
   e.prototype.offsetAt = function(e) {
    var t = this.getLineOffsets();
    if (e.line >= t.length) {
     return this._content.length;
    } else if (e.line < 0) {
     return 0;
    }
    var n = t[e.line];
    var r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
    return Math.max(Math.min(n + e.character, r), n);
   };
   Object.defineProperty(e.prototype, "lineCount", {
    get: function() {
     return this.getLineOffsets().length;
    },
    enumerable: true,
    configurable: true
   });
   return e;
  }();
  var V;
  (function(e) {
   var t = Object.prototype.toString;
   function n(e) {
    return typeof e !== "undefined";
   }
   e.defined = n;
   function r(e) {
    return typeof e === "undefined";
   }
   e.undefined = r;
   function i(e) {
    return e === true || e === false;
   }
   e.boolean = i;
   function a(e) {
    return t.call(e) === "[object String]";
   }
   e.string = a;
   function o(e) {
    return t.call(e) === "[object Number]";
   }
   e.number = o;
   function s(e) {
    return t.call(e) === "[object Function]";
   }
   e.func = s;
   function l(e) {
    return e !== null && typeof e === "object";
   }
   e.objectLiteral = l;
   function c(e, t) {
    return Array.isArray(e) && e.every(t);
   }
   e.typedArray = c;
  })(V || (V = {}));
 },
 "mw/K": function(e, t) {
  e.exports = require("fs");
 },
 mz6j: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  class r {
   constructor(e) {
    this._value = e;
   }
   asHex() {
    return this._value;
   }
   equals(e) {
    return this.asHex() === e.asHex();
   }
  }
  class i extends r {
   constructor() {
    super([ i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), "-", i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), "-", "4", i._randomHex(), i._randomHex(), i._randomHex(), "-", i._oneOf(i._timeHighBits), i._randomHex(), i._randomHex(), i._randomHex(), "-", i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex() ].join(""));
   }
   static _oneOf(e) {
    return e[Math.floor(e.length * Math.random())];
   }
   static _randomHex() {
    return i._oneOf(i._chars);
   }
  }
  i._chars = [ "0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
  i._timeHighBits = [ "8", "9", "a", "b" ];
  t.empty = new r("00000000-0000-0000-0000-000000000000");
  function a() {
   return new i();
  }
  t.v4 = a;
  const o = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  function s(e) {
   return o.test(e);
  }
  t.isUUID = s;
  function l(e) {
   if (!s(e)) {
    throw new Error("invalid uuid");
   }
   return new r(e);
  }
  t.parse = l;
  function c() {
   return a().asHex();
  }
  t.generateUuid = c;
 },
 owkM: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = Object.prototype.toString;
  function i(e) {
   return e === true || e === false;
  }
  t.boolean = i;
  function a(e) {
   return r.call(e) === "[object String]";
  }
  t.string = a;
  function o(e) {
   return r.call(e) === "[object Number]";
  }
  t.number = o;
  function s(e) {
   return r.call(e) === "[object Error]";
  }
  t.error = s;
  function l(e) {
   return r.call(e) === "[object Function]";
  }
  t.func = l;
  function c(e) {
   return Array.isArray(e);
  }
  t.array = c;
  function h(e) {
   return c(e) && e.every(e => a(e));
  }
  t.stringArray = h;
  function d(e, t) {
   return Array.isArray(e) && e.every(t);
  }
  t.typedArray = d;
  function u(e) {
   return e && l(e.then);
  }
  t.thenable = u;
 },
 oyvS: function(e, t) {
  e.exports = require("path");
 },
 qL5x: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("oyvS");
  var i = n("jle/");
  var a = n("PJMN");
  var o = n("Qs2e");
  var s = n("uWpP");
  var l = n("vIUA");
  function c() {
   var e = a.randomBytes(21).toString("hex");
   if (process.platform === "win32") {
    return "\\\\.\\pipe\\vscode-jsonrpc-" + e + "-sock";
   } else {
    return r.join(i.tmpdir(), "vscode-" + e + ".sock");
   }
  }
  t.generateRandomPipeName = c;
  function h(e, t) {
   if (t === void 0) {
    t = "utf-8";
   }
   var n;
   var r = new Promise(function(e, t) {
    n = e;
   });
   return new Promise(function(i, a) {
    var c = o.createServer(function(e) {
     c.close();
     n([ new s.SocketMessageReader(e, t), new l.SocketMessageWriter(e, t) ]);
    });
    c.on("error", a);
    c.listen(e, function() {
     c.removeListener("error", a);
     i({
      onConnected: function() {
       return r;
      }
     });
    });
   });
  }
  t.createClientPipeTransport = h;
  function d(e, t) {
   if (t === void 0) {
    t = "utf-8";
   }
   var n = o.createConnection(e);
   return [ new s.SocketMessageReader(n, t), new l.SocketMessageWriter(n, t) ];
  }
  t.createServerPipeTransport = d;
 },
 sKb1: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("C+6V");
  var i;
  (function(e) {
   e.type = new r.RequestType("workspace/configuration");
  })(i = t.ConfigurationRequest || (t.ConfigurationRequest = {}));
 },
 tGke: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("bzos");
  const i = n("oyvS");
  const a = n("mw/K");
  const o = n("QduZ");
  function s(e) {
   let t = r.parse(e);
   if (t.protocol !== "file:" || !t.path) {
    return undefined;
   }
   let n = t.path.split("/");
   for (var a = 0, o = n.length; a < o; a++) {
    n[a] = decodeURIComponent(n[a]);
   }
   if (process.platform === "win32" && n.length > 1) {
    let e = n[0];
    let t = n[1];
    if (e.length === 0 && t.length > 1 && t[1] === ":") {
     n.shift();
    }
   }
   return i.normalize(n.join("/"));
  }
  t.uriToFilePath = s;
  function l() {
   return process.platform === "win32";
  }
  function c(e, t) {
   let r = "NODE_PATH";
   return new Promise((a, s) => {
    let c = [];
    if (e) {
     c.push(i.join(e, "node_modules"));
    }
    o.exec("npm config get prefix", (e, h, d) => {
     if (!e) {
      let e = h.replace(/[\s\r\n]+$/, "");
      if (e.length > 0) {
       if (l()) {
        c.push(i.join(e, "node_modules"));
       } else {
        c.push(i.join(e, "lib", "node_modules"));
       }
      }
     }
     let u = l() ? ";" : ":";
     let p = process.env;
     let m = Object.create(null);
     Object.keys(p).forEach(e => m[e] = p[e]);
     if (m[r]) {
      m[r] = c.join(u) + u + m[r];
     } else {
      m[r] = c.join(u);
     }
     try {
      let r = o.fork(i.join(__dirname, "resolve.js"), [], {
       env: m,
       execArgv: []
      });
      r.on("message", e => {
       if (e.command === "resolve") {
        let i = t;
        if (e.success) {
         i = e.result;
        }
        r.send({
         command: "exit"
        });
        try {
         a(n("tduj")(i));
        } catch (e) {
         s(e);
        }
       }
      });
      let l = {
       command: "resolve",
       args: t
      };
      r.send(l);
     } catch (e) {
      s(e);
     }
    });
   });
  }
  t.resolveModule = c;
  function h(e, t, n, r) {
   const a = "NODE_PATH";
   const s = [ "var p = process;", "p.on('message',function(m){", "if(m.c==='e'){", "p.exit(0);", "}", "else if(m.c==='rs'){", "try{", "var r=require.resolve(m.a);", "p.send({c:'r',s:true,r:r});", "}", "catch(err){", "p.send({c:'r',s:false});", "}", "}", "});" ].join("");
   return new Promise((l, c) => {
    let h = process.env;
    let d = Object.create(null);
    Object.keys(h).forEach(e => d[e] = h[e]);
    if (t) {
     if (d[a]) {
      d[a] = t + i.delimiter + d[a];
     } else {
      d[a] = t;
     }
     if (r) {
      r(`NODE_PATH value is: ${d[a]}`);
     }
    }
    d["ATOM_SHELL_INTERNAL_RUN_AS_NODE"] = "1";
    try {
     let t = o.fork("", [], {
      cwd: n,
      env: d,
      execArgv: [ "-e", s ]
     });
     t.on("error", e => {
      c(e);
     });
     t.on("message", n => {
      if (n.c === "r") {
       t.send({
        c: "e"
       });
       if (n.s) {
        l(n.r);
       } else {
        c(new Error(`Failed to resolve module: ${e}`));
       }
      }
     });
     let r = {
      c: "rs",
      a: e
     };
     t.send(r);
    } catch (e) {
     c(e);
    }
   });
  }
  t.resolve = h;
  function d(e) {
   let t = "npm";
   let n = {
    encoding: "utf8"
   };
   if (l()) {
    t = "npm.cmd";
    n.shell = true;
   }
   let r = o.spawnSync(t, [ "config", "get", "prefix" ], n).stdout;
   if (!r) {
    if (e) {
     e(`'npm config get prefix' didn't return a value.`);
    }
    return undefined;
   }
   let a = r.trim();
   if (e) {
    e(`'npm config get prefix' value is: ${a}`);
   }
   if (a.length > 0) {
    if (l()) {
     return i.join(a, "node_modules");
    } else {
     return i.join(a, "lib", "node_modules");
    }
   }
   return undefined;
  }
  t.resolveGlobalNodePath = d;
  function u(e) {
   let t = "yarn";
   let n = {
    encoding: "utf8"
   };
   if (l()) {
    t = "yarn.cmd";
    n.shell = true;
   }
   let r = o.spawnSync(t, [ "global", "dir", "--json" ], n);
   let a = r.stdout;
   if (!a) {
    if (e) {
     e(`'yarn global dir' didn't return a value.`);
     if (r.stderr) {
      e(r.stderr);
     }
    }
    return undefined;
   }
   let s = a.trim().split(/\r?\n/);
   for (let e of s) {
    try {
     let t = JSON.parse(e);
     if (t.type === "log") {
      return i.join(t.data, "node_modules");
     }
    } catch (e) {}
   }
   return undefined;
  }
  t.resolveGlobalYarnPath = u;
  var p;
  (function(e) {
   let t = undefined;
   function n() {
    if (t !== void 0) {
     return t;
    }
    if (process.platform === "win32") {
     t = false;
    } else {
     t = !a.existsSync(__filename.toUpperCase()) || !a.existsSync(__filename.toLowerCase());
    }
    return t;
   }
   e.isCaseSensitive = n;
   function r(e, t) {
    if (n()) {
     return i.normalize(t).indexOf(i.normalize(e)) === 0;
    } else {
     return i.normalize(t).toLowerCase().indexOf(i.normalize(e).toLowerCase()) == 0;
    }
   }
   e.isParent = r;
  })(p = t.FileSystem || (t.FileSystem = {}));
  function m(e, t, n, r) {
   if (n) {
    if (!i.isAbsolute(n)) {
     n = i.join(e, n);
    }
    return h(t, n, n, r).then(e => {
     if (p.isParent(n, e)) {
      return e;
     } else {
      return Promise.reject(new Error(`Failed to load ${t} from node path location.`));
     }
    }).then(undefined, n => {
     return h(t, d(r), e, r);
    });
   } else {
    return h(t, d(r), e, r);
   }
  }
  t.resolveModulePath = m;
  function f(e, t, r, i) {
   return m(e, t, r, i).then(e => {
    if (i) {
     i(`Module ${t} got resolved to ${e}`);
    }
    return n("tduj")(e);
   });
  }
  t.resolveModule2 = f;
 },
 tduj: function(e, t) {
  function n(e) {
   return require(e);
  }
  n.keys = function() {
   return [];
  };
  n.resolve = require.resolve;
  e.exports = n;
  n.id = "tduj";
 },
 uWpP: function(e, t, n) {
  "use strict";
  var r = this && this.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var i = n("Z5Ki");
  var a = n("1vg8");
  var o = 8192;
  var s = new Buffer("\r", "ascii")[0];
  var l = new Buffer("\n", "ascii")[0];
  var c = "\r\n";
  var h = function() {
   function e(e) {
    if (e === void 0) {
     e = "utf8";
    }
    this.encoding = e;
    this.index = 0;
    this.buffer = new Buffer(o);
   }
   e.prototype.append = function(e) {
    var t = e;
    if (typeof e === "string") {
     var n = e;
     var r = Buffer.byteLength(n, this.encoding);
     t = new Buffer(r);
     t.write(n, 0, r, this.encoding);
    }
    if (this.buffer.length - this.index >= t.length) {
     t.copy(this.buffer, this.index, 0, t.length);
    } else {
     var i = (Math.ceil((this.index + t.length) / o) + 1) * o;
     if (this.index === 0) {
      this.buffer = new Buffer(i);
      t.copy(this.buffer, 0, 0, t.length);
     } else {
      this.buffer = Buffer.concat([ this.buffer.slice(0, this.index), t ], i);
     }
    }
    this.index += t.length;
   };
   e.prototype.tryReadHeaders = function() {
    var e = undefined;
    var t = 0;
    while (t + 3 < this.index && (this.buffer[t] !== s || this.buffer[t + 1] !== l || this.buffer[t + 2] !== s || this.buffer[t + 3] !== l)) {
     t++;
    }
    if (t + 3 >= this.index) {
     return e;
    }
    e = Object.create(null);
    var n = this.buffer.toString("ascii", 0, t).split(c);
    n.forEach(function(t) {
     var n = t.indexOf(":");
     if (n === -1) {
      throw new Error("Message header must separate key and value using :");
     }
     var r = t.substr(0, n);
     var i = t.substr(n + 1).trim();
     e[r] = i;
    });
    var r = t + 4;
    this.buffer = this.buffer.slice(r);
    this.index = this.index - r;
    return e;
   };
   e.prototype.tryReadContent = function(e) {
    if (this.index < e) {
     return null;
    }
    var t = this.buffer.toString(this.encoding, 0, e);
    var n = e;
    this.buffer.copy(this.buffer, 0, n);
    this.index = this.index - n;
    return t;
   };
   Object.defineProperty(e.prototype, "numberOfBytes", {
    get: function() {
     return this.index;
    },
    enumerable: true,
    configurable: true
   });
   return e;
  }();
  var d;
  (function(e) {
   function t(e) {
    var t = e;
    return t && a.func(t.listen) && a.func(t.dispose) && a.func(t.onError) && a.func(t.onClose) && a.func(t.onPartialMessage);
   }
   e.is = t;
  })(d = t.MessageReader || (t.MessageReader = {}));
  var u = function() {
   function e() {
    this.errorEmitter = new i.Emitter();
    this.closeEmitter = new i.Emitter();
    this.partialMessageEmitter = new i.Emitter();
   }
   e.prototype.dispose = function() {
    this.errorEmitter.dispose();
    this.closeEmitter.dispose();
   };
   Object.defineProperty(e.prototype, "onError", {
    get: function() {
     return this.errorEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fireError = function(e) {
    this.errorEmitter.fire(this.asError(e));
   };
   Object.defineProperty(e.prototype, "onClose", {
    get: function() {
     return this.closeEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fireClose = function() {
    this.closeEmitter.fire(undefined);
   };
   Object.defineProperty(e.prototype, "onPartialMessage", {
    get: function() {
     return this.partialMessageEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.firePartialMessage = function(e) {
    this.partialMessageEmitter.fire(e);
   };
   e.prototype.asError = function(e) {
    if (e instanceof Error) {
     return e;
    } else {
     return new Error("Reader recevied error. Reason: " + (a.string(e.message) ? e.message : "unknown"));
    }
   };
   return e;
  }();
  t.AbstractMessageReader = u;
  var p = function(e) {
   r(t, e);
   function t(t, n) {
    if (n === void 0) {
     n = "utf8";
    }
    var r = e.call(this) || this;
    r.readable = t;
    r.buffer = new h(n);
    r._partialMessageTimeout = 1e4;
    return r;
   }
   Object.defineProperty(t.prototype, "partialMessageTimeout", {
    get: function() {
     return this._partialMessageTimeout;
    },
    set: function(e) {
     this._partialMessageTimeout = e;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.listen = function(e) {
    var t = this;
    this.nextMessageLength = -1;
    this.messageToken = 0;
    this.partialMessageTimer = undefined;
    this.callback = e;
    this.readable.on("data", function(e) {
     t.onData(e);
    });
    this.readable.on("error", function(e) {
     return t.fireError(e);
    });
    this.readable.on("close", function() {
     return t.fireClose();
    });
   };
   t.prototype.onData = function(e) {
    this.buffer.append(e);
    while (true) {
     if (this.nextMessageLength === -1) {
      var t = this.buffer.tryReadHeaders();
      if (!t) {
       return;
      }
      var n = t["Content-Length"];
      if (!n) {
       throw new Error("Header must provide a Content-Length property.");
      }
      var r = parseInt(n);
      if (isNaN(r)) {
       throw new Error("Content-Length value must be a number.");
      }
      this.nextMessageLength = r;
     }
     var i = this.buffer.tryReadContent(this.nextMessageLength);
     if (i === null) {
      this.setPartialMessageTimer();
      return;
     }
     this.clearPartialMessageTimer();
     this.nextMessageLength = -1;
     this.messageToken++;
     var a = JSON.parse(i);
     this.callback(a);
    }
   };
   t.prototype.clearPartialMessageTimer = function() {
    if (this.partialMessageTimer) {
     clearTimeout(this.partialMessageTimer);
     this.partialMessageTimer = undefined;
    }
   };
   t.prototype.setPartialMessageTimer = function() {
    var e = this;
    this.clearPartialMessageTimer();
    if (this._partialMessageTimeout <= 0) {
     return;
    }
    this.partialMessageTimer = setTimeout(function(t, n) {
     e.partialMessageTimer = undefined;
     if (t === e.messageToken) {
      e.firePartialMessage({
       messageToken: t,
       waitingTime: n
      });
      e.setPartialMessageTimer();
     }
    }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
   };
   return t;
  }(u);
  t.StreamMessageReader = p;
  var m = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this) || this;
    n.process = t;
    var r = n.process;
    r.on("error", function(e) {
     return n.fireError(e);
    });
    r.on("close", function() {
     return n.fireClose();
    });
    return n;
   }
   t.prototype.listen = function(e) {
    this.process.on("message", e);
   };
   return t;
  }(u);
  t.IPCMessageReader = m;
  var f = function(e) {
   r(t, e);
   function t(t, n) {
    if (n === void 0) {
     n = "utf-8";
    }
    return e.call(this, t, n) || this;
   }
   return t;
  }(p);
  t.SocketMessageReader = f;
 },
 vIUA: function(e, t, n) {
  "use strict";
  var r = this && this.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var i = n("Z5Ki");
  var a = n("1vg8");
  var o = "Content-Length: ";
  var s = "\r\n";
  var l;
  (function(e) {
   function t(e) {
    var t = e;
    return t && a.func(t.dispose) && a.func(t.onClose) && a.func(t.onError) && a.func(t.write);
   }
   e.is = t;
  })(l = t.MessageWriter || (t.MessageWriter = {}));
  var c = function() {
   function e() {
    this.errorEmitter = new i.Emitter();
    this.closeEmitter = new i.Emitter();
   }
   e.prototype.dispose = function() {
    this.errorEmitter.dispose();
    this.closeEmitter.dispose();
   };
   Object.defineProperty(e.prototype, "onError", {
    get: function() {
     return this.errorEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fireError = function(e, t, n) {
    this.errorEmitter.fire([ this.asError(e), t, n ]);
   };
   Object.defineProperty(e.prototype, "onClose", {
    get: function() {
     return this.closeEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fireClose = function() {
    this.closeEmitter.fire(undefined);
   };
   e.prototype.asError = function(e) {
    if (e instanceof Error) {
     return e;
    } else {
     return new Error("Writer recevied error. Reason: " + (a.string(e.message) ? e.message : "unknown"));
    }
   };
   return e;
  }();
  t.AbstractMessageWriter = c;
  var h = function(e) {
   r(t, e);
   function t(t, n) {
    if (n === void 0) {
     n = "utf8";
    }
    var r = e.call(this) || this;
    r.writable = t;
    r.encoding = n;
    r.errorCount = 0;
    r.writable.on("error", function(e) {
     return r.fireError(e);
    });
    r.writable.on("close", function() {
     return r.fireClose();
    });
    return r;
   }
   t.prototype.write = function(e) {
    var t = JSON.stringify(e);
    var n = Buffer.byteLength(t, this.encoding);
    var r = [ o, n.toString(), s, s ];
    try {
     this.writable.write(r.join(""), "ascii");
     this.writable.write(t, this.encoding);
     this.errorCount = 0;
    } catch (t) {
     this.errorCount++;
     this.fireError(t, e, this.errorCount);
    }
   };
   return t;
  }(c);
  t.StreamMessageWriter = h;
  var d = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this) || this;
    n.process = t;
    n.errorCount = 0;
    n.queue = [];
    n.sending = false;
    var r = n.process;
    r.on("error", function(e) {
     return n.fireError(e);
    });
    r.on("close", function() {
     return n.fireClose;
    });
    return n;
   }
   t.prototype.write = function(e) {
    if (!this.sending && this.queue.length === 0) {
     this.doWriteMessage(e);
    } else {
     this.queue.push(e);
    }
   };
   t.prototype.doWriteMessage = function(e) {
    var t = this;
    try {
     if (this.process.send) {
      this.sending = true;
      this.process.send(e, undefined, undefined, function(n) {
       t.sending = false;
       if (n) {
        t.errorCount++;
        t.fireError(n, e, t.errorCount);
       } else {
        t.errorCount = 0;
       }
       if (t.queue.length > 0) {
        t.doWriteMessage(t.queue.shift());
       }
      });
     }
    } catch (t) {
     this.errorCount++;
     this.fireError(t, e, this.errorCount);
    }
   };
   return t;
  }(c);
  t.IPCMessageWriter = d;
  var u = function(e) {
   r(t, e);
   function t(t, n) {
    if (n === void 0) {
     n = "utf8";
    }
    var r = e.call(this) || this;
    r.socket = t;
    r.queue = [];
    r.sending = false;
    r.encoding = n;
    r.errorCount = 0;
    r.socket.on("error", function(e) {
     return r.fireError(e);
    });
    r.socket.on("close", function() {
     return r.fireClose();
    });
    return r;
   }
   t.prototype.write = function(e) {
    if (!this.sending && this.queue.length === 0) {
     this.doWriteMessage(e);
    } else {
     this.queue.push(e);
    }
   };
   t.prototype.doWriteMessage = function(e) {
    var t = this;
    var n = JSON.stringify(e);
    var r = Buffer.byteLength(n, this.encoding);
    var i = [ o, r.toString(), s, s ];
    try {
     this.sending = true;
     this.socket.write(i.join(""), "ascii", function(r) {
      if (r) {
       t.handleError(r, e);
      }
      try {
       t.socket.write(n, t.encoding, function(n) {
        t.sending = false;
        if (n) {
         t.handleError(n, e);
        } else {
         t.errorCount = 0;
        }
        if (t.queue.length > 0) {
         t.doWriteMessage(t.queue.shift());
        }
       });
      } catch (r) {
       t.handleError(r, e);
      }
     });
    } catch (t) {
     this.handleError(t, e);
    }
   };
   t.prototype.handleError = function(e, t) {
    this.errorCount++;
    this.fireError(e, t, this.errorCount);
   };
   return t;
  }(c);
  t.SocketMessageWriter = u;
 },
 wpTr: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("oyvS");
  var i = n("mw/K");
  var a = Object.prototype.toString;
  function o(e) {
   return typeof e !== "undefined";
  }
  function s(e) {
   return a.call(e) === "[object Number]";
  }
  function l(e) {
   return a.call(e) === "[object String]";
  }
  function c(e) {
   return e === true || e === false;
  }
  var h;
  (function(e) {
   e["file"] = "file";
   e["bundle"] = "bundle";
   e["both"] = "both";
  })(h = t.MessageFormat || (t.MessageFormat = {}));
  var d;
  (function(e) {
   function t(e) {
    var t = e;
    return t && o(t.key) && o(t.comment);
   }
   e.is = t;
  })(d || (d = {}));
  var u;
  var p;
  var m;
  var f;
  function g() {
   m = {
    locale: undefined,
    cacheLanguageResolution: true,
    messageFormat: h.bundle
   };
   if (l(process.env.VSCODE_NLS_CONFIG)) {
    try {
     var e = JSON.parse(process.env.VSCODE_NLS_CONFIG);
     if (l(e.locale)) {
      m.locale = e.locale.toLowerCase();
     }
     if (l(e._cacheRoot)) {
      m.cacheRoot = e._cacheRoot;
     }
     if (l(e._languagePackId)) {
      m.languagePackId = e._languagePackId;
     }
     if (l(e._translationsConfigFile)) {
      m.translationsConfigFile = e._translationsConfigFile;
      try {
       m.translationsConfig = n("MxNS")(m.translationsConfigFile);
      } catch (e) {}
     }
    } catch (e) {}
   }
   f = m.locale === "pseudo";
   u = undefined;
   p = Object.create(null);
  }
  g();
  function b() {
   return m.cacheRoot !== undefined && m.languagePackId !== undefined && m.translationsConfigFile !== undefined && m.translationsConfig !== undefined;
  }
  function y(e, t) {
   var n;
   if (f) {
    e = "［" + e.replace(/[aouei]/g, "$&$&") + "］";
   }
   if (t.length === 0) {
    n = e;
   } else {
    n = e.replace(/\{(\d+)\}/g, function(e, n) {
     var r = n[0];
     return typeof t[r] !== "undefined" ? t[r] : e;
    });
   }
   return n;
  }
  function v(e) {
   return function(t, n) {
    var r = [];
    for (var i = 2; i < arguments.length; i++) {
     r[i - 2] = arguments[i];
    }
    if (s(t)) {
     if (t >= e.length) {
      console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: " + new Error("").stack);
      return;
     }
     return y(e[t], r);
    } else {
     if (l(n)) {
      console.warn("Message " + n + " didn't get externalized correctly.");
      return y(n, r);
     } else {
      console.error("Broken localize call found. Stacktrace is\n: " + new Error("").stack);
     }
    }
   };
  }
  function w(e, t) {
   var n = [];
   for (var r = 2; r < arguments.length; r++) {
    n[r - 2] = arguments[r];
   }
   return y(t, n);
  }
  function x(e) {
   var t;
   if (m.cacheLanguageResolution && t) {
    t = t;
   } else {
    if (f || !m.locale) {
     t = ".nls.json";
    } else {
     var n = m.locale;
     while (n) {
      var r = ".nls." + n + ".json";
      if (i.existsSync(e + r)) {
       t = r;
       break;
      } else {
       var a = n.lastIndexOf("-");
       if (a > 0) {
        n = n.substring(0, a);
       } else {
        t = ".nls.json";
        n = null;
       }
      }
     }
    }
    if (m.cacheLanguageResolution) {
     t = t;
    }
   }
   return e + t;
  }
  function k(e) {
   var t = m.locale;
   while (t) {
    var n = r.join(e, "nls.bundle." + t + ".json");
    if (i.existsSync(n)) {
     return n;
    } else {
     var a = t.lastIndexOf("-");
     if (a > 0) {
      t = t.substring(0, a);
     } else {
      t = undefined;
     }
    }
   }
   if (t === undefined) {
    var n = r.join(e, "nls.bundle.json");
    if (i.existsSync(n)) {
     return n;
    }
   }
   return undefined;
  }
  function C(e) {
   try {
    i.mkdirSync(e);
   } catch (n) {
    if (n.code === "EEXIST") {
     return;
    } else if (n.code === "ENOENT") {
     var t = r.dirname(e);
     if (t !== e) {
      C(t);
      i.mkdirSync(e);
     }
    } else {
     throw n;
    }
   }
  }
  function S(e) {
   var t = n("MxNS")(r.join(e, "nls.metadata.json"));
   var i = Object.create(null);
   for (var a in t) {
    var o = t[a];
    i[a] = o.messages;
   }
   return i;
  }
  function F(e, t) {
   var i = m.translationsConfig[e.id];
   if (!i) {
    return undefined;
   }
   var a = n("MxNS")(i).contents;
   var o = n("MxNS")(r.join(t, "nls.metadata.json"));
   var s = Object.create(null);
   for (var c in o) {
    var h = o[c];
    var d = a[e.outDir + "/" + c];
    if (d) {
     var u = [];
     for (var p = 0; p < h.keys.length; p++) {
      var f = h.keys[p];
      var g = l(f) ? f : f.key;
      var b = d[g];
      if (b === undefined) {
       b = h.messages[p];
      }
      u.push(b);
     }
     s[c] = u;
    } else {
     s[c] = h.messages;
    }
   }
   return s;
  }
  function E(e) {
   var t = new Date();
   i.utimes(e, t, t, function() {});
  }
  function T(e, t) {
   p[e] = t;
   return t;
  }
  function I(e, t) {
   var n;
   var a = r.join(m.cacheRoot, e.id + "-" + e.hash + ".json");
   var o = false;
   var s = false;
   try {
    n = JSON.parse(i.readFileSync(a, {
     encoding: "utf8",
     flag: "r"
    }));
    E(a);
    return n;
   } catch (e) {
    if (e.code === "ENOENT") {
     s = true;
    } else if (e instanceof SyntaxError) {
     console.log("Syntax error parsing message bundle: " + e.message);
     o = true;
    } else {
     throw e;
    }
   }
   n = F(e, t);
   if (!n || o) {
    return n;
   }
   if (s) {
    try {
     i.writeFileSync(a, JSON.stringify(n), {
      encoding: "utf8",
      flag: "wx"
     });
    } catch (e) {
     if (e.code === "EEXIST") {
      return n;
     }
     throw e;
    }
   }
   return n;
  }
  function _(e, t) {
   var r;
   if (b()) {
    try {
     r = I(e, t);
    } catch (e) {
     console.log("Load or create bundle failed ", e);
    }
   }
   if (!r) {
    var i = k(t);
    if (i) {
     try {
      return n("MxNS")(i);
     } catch (e) {
      console.log("Loading in the box message bundle failed.", e);
     }
    }
    try {
     r = S(t);
    } catch (e) {
     console.log("Generating default bundle from meta data failed.", e);
     r = undefined;
    }
   }
   return r;
  }
  function R(e) {
   var t;
   var n = r.dirname(e);
   while (true) {
    t = r.join(n, "nls.metadata.header.json");
    if (i.existsSync(t)) {
     break;
    }
    var a = r.dirname(n);
    if (a === n) {
     t = undefined;
     break;
    } else {
     n = a;
    }
   }
   return t;
  }
  function P(e) {
   if (!e) {
    return w;
   }
   var t = r.extname(e);
   if (t) {
    e = e.substr(0, e.length - t.length);
   }
   if (m.messageFormat === h.both || m.messageFormat === h.bundle) {
    var a = R(e);
    if (a) {
     var s = r.dirname(a);
     var l = p[s];
     if (l === undefined) {
      try {
       var c = JSON.parse(i.readFileSync(a, "utf8"));
       try {
        var d = _(c, s);
        l = T(s, d ? {
         header: c,
         nlsBundle: d
        } : null);
       } catch (e) {
        console.error("Failed to load nls bundle", e);
        l = T(s, null);
       }
      } catch (e) {
       console.error("Failed to read header file", e);
       l = T(s, null);
      }
     }
     if (l) {
      var u = e.substr(s.length + 1).replace(/\\/g, "/");
      var f = l.nlsBundle[u];
      if (f === undefined) {
       console.error("Messages for file " + e + " not found. See console for details.");
       return function() {
        return "Messages not found.";
       };
      }
      return v(f);
     }
    }
   }
   if (m.messageFormat === h.both || m.messageFormat === h.file) {
    try {
     var g = n("MxNS")(x(e));
     if (Array.isArray(g)) {
      return v(g);
     } else {
      if (o(g.messages) && o(g.keys)) {
       return v(g.messages);
      } else {
       console.error("String bundle '" + e + "' uses an unsupported format.");
       return function() {
        return "File bundle has unsupported format. See console for details";
       };
      }
     }
    } catch (e) {
     if (e.code !== "ENOENT") {
      console.error("Failed to load single file bundle", e);
     }
    }
   }
   console.error("Failed to load message bundle for file " + e);
   return function() {
    return "Failed to load message bundle. See console for details.";
   };
  }
  t.loadMessageBundle = P;
  function D(e) {
   if (e) {
    if (l(e.locale)) {
     m.locale = e.locale.toLowerCase();
     u = undefined;
     p = Object.create(null);
    }
    if (e.messageFormat !== undefined) {
     m.messageFormat = e.messageFormat;
    }
   }
   f = m.locale === "pseudo";
   return P;
  }
  t.config = D;
 },
 zZpG: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("C+6V");
  var i;
  (function(e) {
   e.type = new r.RequestType("textDocument/documentColor");
  })(i = t.DocumentColorRequest || (t.DocumentColorRequest = {}));
  var a;
  (function(e) {
   e.type = new r.RequestType("textDocument/colorPresentation");
  })(a = t.ColorPresentationRequest || (t.ColorPresentationRequest = {}));
 }
});