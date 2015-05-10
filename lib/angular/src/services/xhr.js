System.register(["rtts_assert/rtts_assert", "angular2/src/facade/async"], function($__export) {
  "use strict";
  var assert,
      Promise,
      XHR;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Promise = $__m.Promise;
    }],
    execute: function() {
      XHR = (function() {
        function XHR() {}
        return ($traceurRuntime.createClass)(XHR, {get: function(url) {
            assert.argumentTypes(url, assert.type.string);
            return assert.returnType((null), assert.genericType(Promise, assert.type.string));
          }}, {});
      }());
      $__export("XHR", XHR);
      Object.defineProperty(XHR.prototype.get, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=xhr.js.map

//# sourceMappingURL=../../src/services/xhr.js.map