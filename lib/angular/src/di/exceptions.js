System.register(["rtts_assert/rtts_assert", "angular2/src/facade/collection", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var assert,
      ListWrapper,
      List,
      stringify,
      AbstractBindingError,
      NoBindingError,
      AsyncBindingError,
      CyclicDependencyError,
      InstantiationError,
      InvalidBindingError,
      NoAnnotationError;
  function findFirstClosedCycle(keys) {
    assert.argumentTypes(keys, List);
    var res = [];
    for (var i = 0; i < keys.length; ++i) {
      if (ListWrapper.contains(res, keys[i])) {
        ListWrapper.push(res, keys[i]);
        return assert.returnType((res), List);
      } else {
        ListWrapper.push(res, keys[i]);
      }
    }
    return assert.returnType((res), List);
  }
  function constructResolvingPath(keys) {
    if (keys.length > 1) {
      var reversed = findFirstClosedCycle(ListWrapper.reversed(keys));
      var tokenStrs = ListWrapper.map(reversed, (function(k) {
        return stringify(k.token);
      }));
      return assert.returnType((" (" + tokenStrs.join(' -> ') + ")"), assert.type.string);
    } else {
      return assert.returnType((""), assert.type.string);
    }
  }
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      List = $__m.List;
    }, function($__m) {
      stringify = $__m.stringify;
    }],
    execute: function() {
      Object.defineProperty(findFirstClosedCycle, "parameters", {get: function() {
          return [[List]];
        }});
      Object.defineProperty(constructResolvingPath, "parameters", {get: function() {
          return [[List]];
        }});
      AbstractBindingError = (function($__super) {
        function AbstractBindingError(key, constructResolvingMessage) {
          assert.argumentTypes(key, assert.type.any, constructResolvingMessage, Function);
          $traceurRuntime.superConstructor(AbstractBindingError).call(this);
          this.keys = [key];
          this.constructResolvingMessage = constructResolvingMessage;
          this.message = this.constructResolvingMessage(this.keys);
        }
        return ($traceurRuntime.createClass)(AbstractBindingError, {
          addKey: function(key) {
            ListWrapper.push(this.keys, key);
            this.message = this.constructResolvingMessage(this.keys);
          },
          toString: function() {
            return assert.returnType((this.message), assert.type.string);
          }
        }, {}, $__super);
      }(Error));
      $__export("AbstractBindingError", AbstractBindingError);
      Object.defineProperty(AbstractBindingError, "parameters", {get: function() {
          return [[], [Function]];
        }});
      NoBindingError = (function($__super) {
        function NoBindingError(key) {
          $traceurRuntime.superConstructor(NoBindingError).call(this, key, function(keys) {
            assert.argumentTypes(keys, List);
            var first = stringify(ListWrapper.first(keys).token);
            return ("No provider for " + first + "!" + constructResolvingPath(keys));
          });
        }
        return ($traceurRuntime.createClass)(NoBindingError, {}, {}, $__super);
      }(AbstractBindingError));
      $__export("NoBindingError", NoBindingError);
      AsyncBindingError = (function($__super) {
        function AsyncBindingError(key) {
          $traceurRuntime.superConstructor(AsyncBindingError).call(this, key, function(keys) {
            assert.argumentTypes(keys, List);
            var first = stringify(ListWrapper.first(keys).token);
            return ("Cannot instantiate " + first + " synchronously. ") + ("It is provided as a promise!" + constructResolvingPath(keys));
          });
        }
        return ($traceurRuntime.createClass)(AsyncBindingError, {}, {}, $__super);
      }(AbstractBindingError));
      $__export("AsyncBindingError", AsyncBindingError);
      CyclicDependencyError = (function($__super) {
        function CyclicDependencyError(key) {
          $traceurRuntime.superConstructor(CyclicDependencyError).call(this, key, function(keys) {
            assert.argumentTypes(keys, List);
            return ("Cannot instantiate cyclic dependency!" + constructResolvingPath(keys));
          });
        }
        return ($traceurRuntime.createClass)(CyclicDependencyError, {}, {}, $__super);
      }(AbstractBindingError));
      $__export("CyclicDependencyError", CyclicDependencyError);
      InstantiationError = (function($__super) {
        function InstantiationError(cause, key) {
          $traceurRuntime.superConstructor(InstantiationError).call(this, key, function(keys) {
            assert.argumentTypes(keys, List);
            var first = stringify(ListWrapper.first(keys).token);
            return ("Error during instantiation of " + first + "!" + constructResolvingPath(keys) + ".") + (" ORIGINAL ERROR: " + cause);
          });
          this.cause = cause;
          this.causeKey = key;
        }
        return ($traceurRuntime.createClass)(InstantiationError, {}, {}, $__super);
      }(AbstractBindingError));
      $__export("InstantiationError", InstantiationError);
      InvalidBindingError = (function($__super) {
        function InvalidBindingError(binding) {
          $traceurRuntime.superConstructor(InvalidBindingError).call(this);
          this.message = ("Invalid binding " + binding);
        }
        return ($traceurRuntime.createClass)(InvalidBindingError, {toString: function() {
            return assert.returnType((this.message), assert.type.string);
          }}, {}, $__super);
      }(Error));
      $__export("InvalidBindingError", InvalidBindingError);
      NoAnnotationError = (function($__super) {
        function NoAnnotationError(typeOrFunc) {
          $traceurRuntime.superConstructor(NoAnnotationError).call(this);
          this.message = ("Cannot resolve all parameters for " + stringify(typeOrFunc) + ".") + " Make sure they all have valid type or annotations.";
        }
        return ($traceurRuntime.createClass)(NoAnnotationError, {toString: function() {
            return assert.returnType((this.message), assert.type.string);
          }}, {}, $__super);
      }(Error));
      $__export("NoAnnotationError", NoAnnotationError);
    }
  };
});
//# sourceMappingURL=exceptions.js.map

//# sourceMappingURL=../../src/di/exceptions.js.map