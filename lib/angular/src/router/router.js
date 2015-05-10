System.register(["rtts_assert/rtts_assert", "angular2/src/facade/async", "angular2/src/facade/collection", "angular2/src/facade/lang", "./route_registry", "./pipeline", "./instruction", "./router_outlet"], function($__export) {
  "use strict";
  var assert,
      Promise,
      PromiseWrapper,
      EventEmitter,
      ObservableWrapper,
      Map,
      MapWrapper,
      List,
      ListWrapper,
      isBlank,
      RouteRegistry,
      Pipeline,
      Instruction,
      RouterOutlet,
      Router,
      RootRouter,
      ChildRouter;
  function mapObjAsync(obj, fn) {
    assert.argumentTypes(obj, Map, fn, assert.type.any);
    return PromiseWrapper.all(mapObj(obj, fn));
  }
  function mapObj(obj, fn) {
    var result = ListWrapper.create();
    MapWrapper.forEach(obj, (function(value, key) {
      return ListWrapper.push(result, fn(value, key));
    }));
    return assert.returnType((result), List);
  }
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
      EventEmitter = $__m.EventEmitter;
      ObservableWrapper = $__m.ObservableWrapper;
    }, function($__m) {
      Map = $__m.Map;
      MapWrapper = $__m.MapWrapper;
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      isBlank = $__m.isBlank;
    }, function($__m) {
      RouteRegistry = $__m.RouteRegistry;
    }, function($__m) {
      Pipeline = $__m.Pipeline;
    }, function($__m) {
      Instruction = $__m.Instruction;
    }, function($__m) {
      RouterOutlet = $__m.RouterOutlet;
    }],
    execute: function() {
      Router = (function() {
        function Router(registry, pipeline) {
          var parent = arguments[2] !== (void 0) ? arguments[2] : null;
          var name = arguments[3] !== (void 0) ? arguments[3] : '/';
          assert.argumentTypes(registry, RouteRegistry, pipeline, Pipeline, parent, Router, name, assert.type.any);
          this.name = name;
          this.navigating = false;
          this.parent = parent;
          this.previousUrl = null;
          this._outlets = MapWrapper.create();
          this._children = MapWrapper.create();
          this._registry = registry;
          this._pipeline = pipeline;
          this._subject = new EventEmitter();
        }
        return ($traceurRuntime.createClass)(Router, {
          childRouter: function() {
            var outletName = arguments[0] !== (void 0) ? arguments[0] : 'default';
            if (!MapWrapper.contains(this._children, outletName)) {
              MapWrapper.set(this._children, outletName, new ChildRouter(this, outletName));
            }
            return MapWrapper.get(this._children, outletName);
          },
          registerOutlet: function(outlet) {
            var name = arguments[1] !== (void 0) ? arguments[1] : 'default';
            assert.argumentTypes(outlet, RouterOutlet, name, assert.type.any);
            MapWrapper.set(this._outlets, name, outlet);
            return assert.returnType((this.renavigate()), Promise);
          },
          config: function(path, component) {
            var alias = arguments[2] !== (void 0) ? arguments[2] : null;
            assert.argumentTypes(path, assert.type.string, component, assert.type.any, alias, assert.type.string);
            this._registry.config(this.name, path, component, alias);
            return this.renavigate();
          },
          navigate: function(url) {
            var $__0 = this;
            if (this.navigating) {
              return assert.returnType((PromiseWrapper.resolve(true)), Promise);
            }
            this.lastNavigationAttempt = url;
            var instruction = this.recognize(url);
            if (isBlank(instruction)) {
              return assert.returnType((PromiseWrapper.resolve(false)), Promise);
            }
            instruction.router = this;
            this._startNavigating();
            var result = this._pipeline.process(instruction).then((function(_) {
              ObservableWrapper.callNext($__0._subject, instruction.matchedUrl);
            })).then((function(_) {
              return $__0._finishNavigating();
            }));
            PromiseWrapper.catchError(result, (function(_) {
              return $__0._finishNavigating();
            }));
            return assert.returnType((result), Promise);
          },
          _startNavigating: function() {
            this.navigating = true;
          },
          _finishNavigating: function() {
            this.navigating = false;
          },
          subscribe: function(onNext) {
            ObservableWrapper.subscribe(this._subject, onNext);
          },
          activateOutlets: function(instruction) {
            return assert.returnType((this._queryOutlets((function(outlet, name) {
              return outlet.activate(instruction.getChildInstruction(name));
            })).then((function(_) {
              return instruction.mapChildrenAsync((function(instruction, _) {
                return instruction.router.activateOutlets(instruction);
              }));
            }))), Promise);
          },
          traverseOutlets: function(fn) {
            var $__0 = this;
            return assert.returnType((this._queryOutlets(fn).then((function(_) {
              return mapObjAsync($__0._children, (function(child, _) {
                return child.traverseOutlets(fn);
              }));
            }))), Promise);
          },
          _queryOutlets: function(fn) {
            return assert.returnType((mapObjAsync(this._outlets, fn)), Promise);
          },
          recognize: function(url) {
            assert.argumentTypes(url, assert.type.string);
            return this._registry.recognize(url);
          },
          renavigate: function() {
            var destination = isBlank(this.previousUrl) ? this.lastNavigationAttempt : this.previousUrl;
            if (this.navigating || isBlank(destination)) {
              return assert.returnType((PromiseWrapper.resolve(false)), Promise);
            }
            return assert.returnType((this.navigate(destination)), Promise);
          },
          generate: function(name, params) {
            assert.argumentTypes(name, assert.type.string, params, assert.type.any);
            return this._registry.generate(name, params);
          }
        }, {getRoot: function() {
            return assert.returnType((new RootRouter(new Pipeline())), Router);
          }});
      }());
      $__export("Router", Router);
      Object.defineProperty(Router, "parameters", {get: function() {
          return [[RouteRegistry], [Pipeline], [Router], []];
        }});
      Object.defineProperty(Router.prototype.registerOutlet, "parameters", {get: function() {
          return [[RouterOutlet], []];
        }});
      Object.defineProperty(Router.prototype.config, "parameters", {get: function() {
          return [[assert.type.string], [], [assert.type.string]];
        }});
      Object.defineProperty(Router.prototype.navigate, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(Router.prototype.activateOutlets, "parameters", {get: function() {
          return [[Instruction]];
        }});
      Object.defineProperty(Router.prototype.recognize, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(Router.prototype.generate, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.any]];
        }});
      RootRouter = (function($__super) {
        function RootRouter(pipeline) {
          assert.argumentTypes(pipeline, Pipeline);
          $traceurRuntime.superConstructor(RootRouter).call(this, new RouteRegistry(), pipeline, null, '/');
        }
        return ($traceurRuntime.createClass)(RootRouter, {}, {}, $__super);
      }(Router));
      $__export("RootRouter", RootRouter);
      Object.defineProperty(RootRouter, "parameters", {get: function() {
          return [[Pipeline]];
        }});
      ChildRouter = (function($__super) {
        function ChildRouter(parent, name) {
          $traceurRuntime.superConstructor(ChildRouter).call(this, parent._registry, parent._pipeline, parent, name);
          this.parent = parent;
        }
        return ($traceurRuntime.createClass)(ChildRouter, {}, {}, $__super);
      }(Router));
      Object.defineProperty(mapObjAsync, "parameters", {get: function() {
          return [[Map], []];
        }});
      Object.defineProperty(mapObj, "parameters", {get: function() {
          return [[Map], []];
        }});
    }
  };
});
//# sourceMappingURL=router.js.map

//# sourceMappingURL=../../src/router/router.js.map