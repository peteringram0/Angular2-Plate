System.register(["rtts_assert/rtts_assert"], function($__export) {
  "use strict";
  var assert,
      NO_CHANGE,
      Pipe;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }],
    execute: function() {
      NO_CHANGE = new Object();
      $__export("NO_CHANGE", NO_CHANGE);
      Pipe = (function() {
        function Pipe() {}
        return ($traceurRuntime.createClass)(Pipe, {
          supports: function(obj) {
            return assert.returnType((false), assert.type.boolean);
          },
          onDestroy: function() {},
          transform: function(value) {
            assert.argumentTypes(value, assert.type.any);
            return assert.returnType((null), assert.type.any);
          }
        }, {});
      }());
      $__export("Pipe", Pipe);
      Object.defineProperty(Pipe.prototype.transform, "parameters", {get: function() {
          return [[assert.type.any]];
        }});
    }
  };
});
//# sourceMappingURL=pipe.js.map

//# sourceMappingURL=../../../src/change_detection/pipes/pipe.js.map