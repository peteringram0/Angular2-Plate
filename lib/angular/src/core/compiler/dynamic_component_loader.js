System.register(["rtts_assert/rtts_assert", "angular2/di", "./compiler", "angular2/src/facade/lang", "angular2/src/facade/async", "angular2/src/core/compiler/view_manager", "./element_injector", "./view"], function($__export) {
  "use strict";
  var assert,
      Key,
      Injector,
      Injectable,
      ResolvedBinding,
      Binding,
      bind,
      Compiler,
      Type,
      BaseException,
      stringify,
      isPresent,
      Promise,
      AppViewManager,
      ElementRef,
      AppView,
      ComponentRef,
      DynamicComponentLoader;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Key = $__m.Key;
      Injector = $__m.Injector;
      Injectable = $__m.Injectable;
      ResolvedBinding = $__m.ResolvedBinding;
      Binding = $__m.Binding;
      bind = $__m.bind;
    }, function($__m) {
      Compiler = $__m.Compiler;
    }, function($__m) {
      Type = $__m.Type;
      BaseException = $__m.BaseException;
      stringify = $__m.stringify;
      isPresent = $__m.isPresent;
    }, function($__m) {
      Promise = $__m.Promise;
    }, function($__m) {
      AppViewManager = $__m.AppViewManager;
    }, function($__m) {
      ElementRef = $__m.ElementRef;
    }, function($__m) {
      AppView = $__m.AppView;
    }],
    execute: function() {
      ComponentRef = (function() {
        function ComponentRef(location, instance, componentView, dispose) {
          assert.argumentTypes(location, ElementRef, instance, assert.type.any, componentView, AppView, dispose, Function);
          this.location = location;
          this.instance = instance;
          this.componentView = componentView;
          this._dispose = dispose;
        }
        return ($traceurRuntime.createClass)(ComponentRef, {
          get injector() {
            return this.location.injector;
          },
          get hostView() {
            return this.location.hostView;
          },
          dispose: function() {
            this._dispose();
          }
        }, {});
      }());
      $__export("ComponentRef", ComponentRef);
      Object.defineProperty(ComponentRef, "parameters", {get: function() {
          return [[ElementRef], [assert.type.any], [AppView], [Function]];
        }});
      DynamicComponentLoader = (function() {
        function DynamicComponentLoader(compiler, viewManager) {
          assert.argumentTypes(compiler, Compiler, viewManager, AppViewManager);
          this._compiler = compiler;
          this._viewManager = viewManager;
        }
        return ($traceurRuntime.createClass)(DynamicComponentLoader, {
          loadIntoExistingLocation: function(typeOrBinding, location) {
            var injector = arguments[2] !== (void 0) ? arguments[2] : null;
            var $__0 = this;
            assert.argumentTypes(typeOrBinding, assert.type.any, location, ElementRef, injector, Injector);
            var binding = this._getBinding(typeOrBinding);
            return assert.returnType((this._compiler.compile(binding.token).then((function(componentProtoView) {
              var componentView = $__0._viewManager.createDynamicComponentView(location, componentProtoView, binding, injector);
              var dispose = (function() {
                throw new BaseException("Not implemented");
              });
              return new ComponentRef(location, location.elementInjector.getDynamicallyLoadedComponent(), componentView, dispose);
            }))), assert.genericType(Promise, ComponentRef));
          },
          loadIntoNewLocation: function(typeOrBinding, parentComponentLocation, elementOrSelector) {
            var injector = arguments[3] !== (void 0) ? arguments[3] : null;
            var $__0 = this;
            assert.argumentTypes(typeOrBinding, assert.type.any, parentComponentLocation, ElementRef, elementOrSelector, assert.type.any, injector, Injector);
            return assert.returnType((this._compiler.compileInHost(this._getBinding(typeOrBinding)).then((function(hostProtoView) {
              var hostView = $__0._viewManager.createInPlaceHostView(parentComponentLocation, elementOrSelector, hostProtoView, injector);
              var newLocation = hostView.elementInjectors[0].getElementRef();
              var component = hostView.elementInjectors[0].getComponent();
              var dispose = (function() {
                $__0._viewManager.destroyInPlaceHostView(parentComponentLocation, hostView);
              });
              return new ComponentRef(newLocation, component, hostView.componentChildViews[0], dispose);
            }))), assert.genericType(Promise, ComponentRef));
          },
          loadNextToExistingLocation: function(typeOrBinding, location) {
            var injector = arguments[2] !== (void 0) ? arguments[2] : null;
            assert.argumentTypes(typeOrBinding, assert.type.any, location, ElementRef, injector, Injector);
            var binding = this._getBinding(typeOrBinding);
            return assert.returnType((this._compiler.compileInHost(binding).then((function(hostProtoView) {
              var hostView = location.viewContainer.create(-1, hostProtoView, injector);
              var newLocation = hostView.elementInjectors[0].getElementRef();
              var component = hostView.elementInjectors[0].getComponent();
              var dispose = (function() {
                var index = location.viewContainer.indexOf(hostView);
                location.viewContainer.remove(index);
              });
              return new ComponentRef(newLocation, component, hostView.componentChildViews[0], dispose);
            }))), assert.genericType(Promise, ComponentRef));
          },
          _getBinding: function(typeOrBinding) {
            var binding;
            if (typeOrBinding instanceof Binding) {
              binding = typeOrBinding;
            } else {
              binding = bind(typeOrBinding).toClass(typeOrBinding);
            }
            return binding;
          }
        }, {});
      }());
      $__export("DynamicComponentLoader", DynamicComponentLoader);
      Object.defineProperty(DynamicComponentLoader, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(DynamicComponentLoader, "parameters", {get: function() {
          return [[Compiler], [AppViewManager]];
        }});
      Object.defineProperty(DynamicComponentLoader.prototype.loadIntoExistingLocation, "parameters", {get: function() {
          return [[], [ElementRef], [Injector]];
        }});
      Object.defineProperty(DynamicComponentLoader.prototype.loadIntoNewLocation, "parameters", {get: function() {
          return [[], [ElementRef], [assert.type.any], [Injector]];
        }});
      Object.defineProperty(DynamicComponentLoader.prototype.loadNextToExistingLocation, "parameters", {get: function() {
          return [[], [ElementRef], [Injector]];
        }});
    }
  };
});
//# sourceMappingURL=dynamic_component_loader.js.map

//# sourceMappingURL=../../../src/core/compiler/dynamic_component_loader.js.map