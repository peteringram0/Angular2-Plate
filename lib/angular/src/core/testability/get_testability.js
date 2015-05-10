System.register(["rtts_assert/rtts_assert", "angular2/src/core/testability/testability", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var assert,
      TestabilityRegistry,
      Testability,
      global,
      PublicTestability,
      GetTestability;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      TestabilityRegistry = $__m.TestabilityRegistry;
      Testability = $__m.Testability;
    }, function($__m) {
      global = $__m.global;
    }],
    execute: function() {
      PublicTestability = (function() {
        function PublicTestability(testability) {
          assert.argumentTypes(testability, Testability);
          this._testability = testability;
        }
        return ($traceurRuntime.createClass)(PublicTestability, {
          whenStable: function(callback) {
            assert.argumentTypes(callback, Function);
            this._testability.whenStable(callback);
          },
          findBindings: function(using, binding, exactMatch) {
            assert.argumentTypes(using, assert.type.any, binding, assert.type.string, exactMatch, assert.type.boolean);
            return this._testability.findBindings(using, binding, exactMatch);
          }
        }, {});
      }());
      Object.defineProperty(PublicTestability, "parameters", {get: function() {
          return [[Testability]];
        }});
      Object.defineProperty(PublicTestability.prototype.whenStable, "parameters", {get: function() {
          return [[Function]];
        }});
      Object.defineProperty(PublicTestability.prototype.findBindings, "parameters", {get: function() {
          return [[], [assert.type.string], [assert.type.boolean]];
        }});
      GetTestability = (function() {
        function GetTestability() {}
        return ($traceurRuntime.createClass)(GetTestability, {}, {addToWindow: function(registry) {
            assert.argumentTypes(registry, TestabilityRegistry);
            global.getAngularTestability = function(elem) {
              var testability = registry.findTestabilityInTree(elem);
              if (testability == null) {
                throw new Error('Could not find testability for element.');
              }
              return assert.returnType((new PublicTestability(testability)), PublicTestability);
            };
          }});
      }());
      $__export("GetTestability", GetTestability);
      Object.defineProperty(GetTestability.addToWindow, "parameters", {get: function() {
          return [[TestabilityRegistry]];
        }});
    }
  };
});
//# sourceMappingURL=get_testability.js.map

//# sourceMappingURL=../../../src/core/testability/get_testability.js.map