System.register(["rtts_assert/rtts_assert", "angular2/src/facade/collection", "angular2/src/facade/async", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var assert,
      Map,
      MapWrapper,
      StringMap,
      StringMapWrapper,
      List,
      ListWrapper,
      Promise,
      PromiseWrapper,
      isPresent,
      RouteParams,
      Instruction,
      noopInstruction;
  function mapObjAsync(obj, fn) {
    assert.argumentTypes(obj, StringMap, fn, assert.type.any);
    return PromiseWrapper.all(mapObj(obj, fn));
  }
  function mapObj(obj, fn) {
    var result = ListWrapper.create();
    StringMapWrapper.forEach(obj, (function(value, key) {
      return ListWrapper.push(result, fn(value, key));
    }));
    return assert.returnType((result), List);
  }
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Map = $__m.Map;
      MapWrapper = $__m.MapWrapper;
      StringMap = $__m.StringMap;
      StringMapWrapper = $__m.StringMapWrapper;
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      isPresent = $__m.isPresent;
    }],
    execute: function() {
      RouteParams = (function() {
        function RouteParams(params) {
          assert.argumentTypes(params, StringMap);
          this.params = params;
        }
        return ($traceurRuntime.createClass)(RouteParams, {get: function(param) {
            assert.argumentTypes(param, assert.type.string);
            return StringMapWrapper.get(this.params, param);
          }}, {});
      }());
      $__export("RouteParams", RouteParams);
      Object.defineProperty(RouteParams, "parameters", {get: function() {
          return [[StringMap]];
        }});
      Object.defineProperty(RouteParams.prototype.get, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Instruction = (function() {
        function Instruction() {
          var $__2 = arguments[0] !== (void 0) ? arguments[0] : {},
              params = $__2.params,
              component = $__2.component,
              children = $__2.children,
              matchedUrl = $__2.matchedUrl;
          this.matchedUrl = matchedUrl;
          if (isPresent(children)) {
            this._children = children;
            var childUrl;
            StringMapWrapper.forEach(this._children, (function(child, _) {
              childUrl = child.matchedUrl;
            }));
            if (isPresent(childUrl)) {
              this.matchedUrl += childUrl;
            }
          } else {
            this._children = StringMapWrapper.create();
          }
          this.component = component;
          this.params = params;
        }
        return ($traceurRuntime.createClass)(Instruction, {
          getChildInstruction: function(outletName) {
            assert.argumentTypes(outletName, assert.type.string);
            return StringMapWrapper.get(this._children, outletName);
          },
          forEachChild: function(fn) {
            assert.argumentTypes(fn, Function);
            StringMapWrapper.forEach(this._children, fn);
          },
          mapChildrenAsync: function(fn) {
            return assert.returnType((mapObjAsync(this._children, fn)), Promise);
          },
          traverseSync: function(fn) {
            var $__0 = this;
            this.forEachChild((function(childInstruction, _) {
              return fn($__0, childInstruction);
            }));
            this.forEachChild((function(childInstruction, _) {
              return childInstruction.traverseSync(fn);
            }));
          }
        }, {});
      }());
      $__export("Instruction", Instruction);
      Object.defineProperty(Instruction.prototype.getChildInstruction, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(Instruction.prototype.forEachChild, "parameters", {get: function() {
          return [[Function]];
        }});
      Object.defineProperty(Instruction.prototype.traverseSync, "parameters", {get: function() {
          return [[Function]];
        }});
      Object.defineProperty(mapObjAsync, "parameters", {get: function() {
          return [[StringMap], []];
        }});
      Object.defineProperty(mapObj, "parameters", {get: function() {
          return [[StringMap], []];
        }});
      noopInstruction = new Instruction();
      $__export("noopInstruction", noopInstruction);
    }
  };
});
//# sourceMappingURL=instruction.js.map

//# sourceMappingURL=../../src/router/instruction.js.map