System.register(["rtts_assert/rtts_assert"], function($__export) {
  "use strict";
  var assert,
      OpaqueToken;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }],
    execute: function() {
      OpaqueToken = (function() {
        function OpaqueToken(desc) {
          assert.argumentTypes(desc, assert.type.string);
          this._desc = ("Token(" + desc + ")");
        }
        return ($traceurRuntime.createClass)(OpaqueToken, {toString: function() {
            return assert.returnType((this._desc), assert.type.string);
          }}, {});
      }());
      $__export("OpaqueToken", OpaqueToken);
      Object.defineProperty(OpaqueToken, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=opaque_token.js.map

//# sourceMappingURL=../../src/di/opaque_token.js.map