System.register(["rtts_assert/rtts_assert", "angular2/src/facade/async", "angular2/annotations", "angular2/core", "angular2/di", "./router", "./instruction"], function($__export) {
  "use strict";
  var assert,
      Promise,
      PromiseWrapper,
      Decorator,
      Compiler,
      ViewContainerRef,
      Injector,
      bind,
      routerMod,
      Instruction,
      RouteParams,
      RouterOutlet;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      Decorator = $__m.Decorator;
    }, function($__m) {
      Compiler = $__m.Compiler;
      ViewContainerRef = $__m.ViewContainerRef;
    }, function($__m) {
      Injector = $__m.Injector;
      bind = $__m.bind;
    }, function($__m) {
      routerMod = $__m;
    }, function($__m) {
      Instruction = $__m.Instruction;
      RouteParams = $__m.RouteParams;
    }],
    execute: function() {
      RouterOutlet = (function() {
        function RouterOutlet(viewContainer, compiler, router, injector) {
          assert.argumentTypes(viewContainer, ViewContainerRef, compiler, Compiler, router, routerMod.Router, injector, Injector);
          this._router = router;
          this._viewContainer = viewContainer;
          this._compiler = compiler;
          this._injector = injector;
          this._router.registerOutlet(this);
        }
        return ($traceurRuntime.createClass)(RouterOutlet, {
          activate: function(instruction) {
            var $__0 = this;
            assert.argumentTypes(instruction, Instruction);
            return this._compiler.compileInHost(instruction.component).then((function(pv) {
              var outletInjector = $__0._injector.resolveAndCreateChild([bind(RouteParams).toValue(new RouteParams(instruction.params)), bind(routerMod.Router).toValue(instruction.router)]);
              $__0._viewContainer.clear();
              $__0._viewContainer.create(0, pv, outletInjector);
            }));
          },
          canActivate: function(instruction) {
            assert.argumentTypes(instruction, assert.type.any);
            return PromiseWrapper.resolve(true);
          },
          canDeactivate: function(instruction) {
            assert.argumentTypes(instruction, assert.type.any);
            return PromiseWrapper.resolve(true);
          }
        }, {});
      }());
      $__export("RouterOutlet", RouterOutlet);
      Object.defineProperty(RouterOutlet, "annotations", {get: function() {
          return [new Decorator({selector: 'router-outlet'})];
        }});
      Object.defineProperty(RouterOutlet, "parameters", {get: function() {
          return [[ViewContainerRef], [Compiler], [routerMod.Router], [Injector]];
        }});
      Object.defineProperty(RouterOutlet.prototype.activate, "parameters", {get: function() {
          return [[Instruction]];
        }});
      Object.defineProperty(RouterOutlet.prototype.canActivate, "parameters", {get: function() {
          return [[assert.type.any]];
        }});
      Object.defineProperty(RouterOutlet.prototype.canDeactivate, "parameters", {get: function() {
          return [[assert.type.any]];
        }});
    }
  };
});
//# sourceMappingURL=router_outlet.js.map

//# sourceMappingURL=../../src/router/router_outlet.js.map