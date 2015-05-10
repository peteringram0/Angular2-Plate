System.register(["rtts_assert/rtts_assert", "angular2/di", "angular2/src/facade/collection", "angular2/src/facade/lang", "./element_injector", "./view", "angular2/src/render/api", "./view_manager_utils", "./view_pool"], function($__export) {
  "use strict";
  var assert,
      Injector,
      Injectable,
      Binding,
      ListWrapper,
      MapWrapper,
      Map,
      StringMapWrapper,
      List,
      isPresent,
      isBlank,
      BaseException,
      eli,
      viewModule,
      Renderer,
      ViewRef,
      RenderViewContainerRef,
      AppViewManagerUtils,
      AppViewPool,
      AppViewManager;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Injector = $__m.Injector;
      Injectable = $__m.Injectable;
      Binding = $__m.Binding;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
      Map = $__m.Map;
      StringMapWrapper = $__m.StringMapWrapper;
      List = $__m.List;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
    }, function($__m) {
      eli = $__m;
    }, function($__m) {
      viewModule = $__m;
    }, function($__m) {
      Renderer = $__m.Renderer;
      ViewRef = $__m.ViewRef;
      RenderViewContainerRef = $__m.RenderViewContainerRef;
    }, function($__m) {
      AppViewManagerUtils = $__m.AppViewManagerUtils;
    }, function($__m) {
      AppViewPool = $__m.AppViewPool;
    }],
    execute: function() {
      AppViewManager = (function() {
        function AppViewManager(viewPool, utils, renderer) {
          assert.argumentTypes(viewPool, AppViewPool, utils, AppViewManagerUtils, renderer, Renderer);
          this._renderer = renderer;
          this._viewPool = viewPool;
          this._utils = utils;
        }
        return ($traceurRuntime.createClass)(AppViewManager, {
          createDynamicComponentView: function(hostLocation, componentProtoView, componentBinding, injector) {
            assert.argumentTypes(hostLocation, eli.ElementRef, componentProtoView, viewModule.AppProtoView, componentBinding, Binding, injector, Injector);
            var hostView = hostLocation.hostView;
            var boundElementIndex = hostLocation.boundElementIndex;
            var binder = hostView.proto.elementBinders[boundElementIndex];
            if (!binder.hasDynamicComponent()) {
              throw new BaseException(("There is no dynamic component directive at element " + boundElementIndex));
            }
            var componentView = this._createViewRecurse(componentProtoView);
            var renderViewRefs = this._renderer.createDynamicComponentView(hostView.render, boundElementIndex, componentProtoView.render);
            componentView.render = renderViewRefs[0];
            this._utils.attachComponentView(hostView, boundElementIndex, componentView);
            this._utils.hydrateDynamicComponentInElementInjector(hostView, boundElementIndex, componentBinding, injector);
            this._utils.hydrateComponentView(hostView, boundElementIndex);
            this._viewHydrateRecurse(componentView, renderViewRefs, 1);
            return assert.returnType((componentView), viewModule.AppView);
          },
          createInPlaceHostView: function(parentComponentLocation, hostElementSelector, hostProtoView, injector) {
            assert.argumentTypes(parentComponentLocation, eli.ElementRef, hostElementSelector, assert.type.any, hostProtoView, viewModule.AppProtoView, injector, Injector);
            var parentComponentHostView = null;
            var parentComponentBoundElementIndex = null;
            var parentRenderViewRef = null;
            if (isPresent(parentComponentLocation)) {
              parentComponentHostView = parentComponentLocation.hostView;
              parentComponentBoundElementIndex = parentComponentLocation.boundElementIndex;
              parentRenderViewRef = parentComponentHostView.componentChildViews[parentComponentBoundElementIndex].render;
            }
            var hostView = this._createViewRecurse(hostProtoView);
            var renderViewRefs = this._renderer.createInPlaceHostView(parentRenderViewRef, hostElementSelector, hostView.proto.render);
            hostView.render = renderViewRefs[0];
            this._utils.attachAndHydrateInPlaceHostView(parentComponentHostView, parentComponentBoundElementIndex, hostView, injector);
            this._viewHydrateRecurse(hostView, renderViewRefs, 1);
            return assert.returnType((hostView), viewModule.AppView);
          },
          destroyInPlaceHostView: function(parentComponentLocation, hostView) {
            assert.argumentTypes(parentComponentLocation, eli.ElementRef, hostView, viewModule.AppView);
            var parentView = null;
            var parentRenderViewRef = null;
            if (isPresent(parentComponentLocation)) {
              parentView = parentComponentLocation.hostView.componentChildViews[parentComponentLocation.boundElementIndex];
              parentRenderViewRef = parentView.render;
            }
            var hostViewRenderRef = hostView.render;
            this._viewDehydrateRecurse(hostView);
            this._utils.detachInPlaceHostView(parentView, hostView);
            this._renderer.destroyInPlaceHostView(parentRenderViewRef, hostViewRenderRef);
            this._destroyView(hostView);
          },
          createViewInContainer: function(viewContainerLocation, atIndex, protoView) {
            var injector = arguments[3] !== (void 0) ? arguments[3] : null;
            assert.argumentTypes(viewContainerLocation, eli.ElementRef, atIndex, assert.type.number, protoView, viewModule.AppProtoView, injector, Injector);
            var parentView = viewContainerLocation.hostView;
            var boundElementIndex = assert.type(viewContainerLocation.boundElementIndex, assert.type.number);
            var view = this._createViewRecurse(protoView);
            var renderViewRefs = this._renderer.createViewInContainer(this._getRenderViewContainerRef(parentView, boundElementIndex), atIndex, view.proto.render);
            view.render = renderViewRefs[0];
            this._utils.attachViewInContainer(parentView, boundElementIndex, atIndex, view);
            this._utils.hydrateViewInContainer(parentView, boundElementIndex, atIndex, injector);
            this._viewHydrateRecurse(view, renderViewRefs, 1);
            return assert.returnType((view), viewModule.AppView);
          },
          destroyViewInContainer: function(viewContainerLocation, atIndex) {
            assert.argumentTypes(viewContainerLocation, eli.ElementRef, atIndex, assert.type.number);
            var parentView = viewContainerLocation.hostView;
            var boundElementIndex = assert.type(viewContainerLocation.boundElementIndex, assert.type.number);
            var viewContainer = parentView.viewContainers[boundElementIndex];
            var view = viewContainer.views[atIndex];
            this._viewDehydrateRecurse(view);
            this._utils.detachViewInContainer(parentView, boundElementIndex, atIndex);
            this._renderer.destroyViewInContainer(this._getRenderViewContainerRef(parentView, boundElementIndex), atIndex);
            this._destroyView(view);
          },
          attachViewInContainer: function(viewContainerLocation, atIndex, view) {
            assert.argumentTypes(viewContainerLocation, eli.ElementRef, atIndex, assert.type.number, view, viewModule.AppView);
            var parentView = viewContainerLocation.hostView;
            var boundElementIndex = assert.type(viewContainerLocation.boundElementIndex, assert.type.number);
            this._utils.attachViewInContainer(parentView, boundElementIndex, atIndex, view);
            this._renderer.insertViewIntoContainer(this._getRenderViewContainerRef(parentView, boundElementIndex), atIndex, view.render);
            return assert.returnType((view), viewModule.AppView);
          },
          detachViewInContainer: function(viewContainerLocation, atIndex) {
            assert.argumentTypes(viewContainerLocation, eli.ElementRef, atIndex, assert.type.number);
            var parentView = viewContainerLocation.hostView;
            var boundElementIndex = assert.type(viewContainerLocation.boundElementIndex, assert.type.number);
            var viewContainer = parentView.viewContainers[boundElementIndex];
            var view = viewContainer.views[atIndex];
            this._utils.detachViewInContainer(parentView, boundElementIndex, atIndex);
            this._renderer.detachViewFromContainer(this._getRenderViewContainerRef(parentView, boundElementIndex), atIndex);
            return assert.returnType((view), viewModule.AppView);
          },
          _getRenderViewContainerRef: function(parentView, boundElementIndex) {
            assert.argumentTypes(parentView, viewModule.AppView, boundElementIndex, assert.type.number);
            return new RenderViewContainerRef(parentView.render, boundElementIndex);
          },
          _createViewRecurse: function(protoView) {
            assert.argumentTypes(protoView, viewModule.AppProtoView);
            var view = this._viewPool.getView(protoView);
            if (isBlank(view)) {
              view = this._utils.createView(protoView, this, this._renderer);
              var binders = protoView.elementBinders;
              for (var binderIdx = 0; binderIdx < binders.length; binderIdx++) {
                var binder = binders[binderIdx];
                if (binder.hasStaticComponent()) {
                  var childView = this._createViewRecurse(binder.nestedProtoView);
                  this._utils.attachComponentView(view, binderIdx, childView);
                }
              }
            }
            return view;
          },
          _destroyView: function(view) {
            assert.argumentTypes(view, viewModule.AppView);
            this._viewPool.returnView(view);
          },
          _viewHydrateRecurse: function(view, renderComponentViewRefs, renderComponentIndex) {
            assert.argumentTypes(view, viewModule.AppView, renderComponentViewRefs, assert.genericType(List, ViewRef), renderComponentIndex, assert.type.number);
            this._renderer.setEventDispatcher(view.render, view);
            var binders = view.proto.elementBinders;
            for (var i = 0; i < binders.length; ++i) {
              if (binders[i].hasStaticComponent()) {
                var childView = view.componentChildViews[i];
                childView.render = renderComponentViewRefs[renderComponentIndex++];
                this._utils.hydrateComponentView(view, i);
                renderComponentIndex = this._viewHydrateRecurse(view.componentChildViews[i], renderComponentViewRefs, renderComponentIndex);
              }
            }
            return assert.returnType((renderComponentIndex), assert.type.number);
          },
          _viewDehydrateRecurse: function(view) {
            assert.argumentTypes(view, viewModule.AppView);
            this._utils.dehydrateView(view);
            var binders = view.proto.elementBinders;
            for (var i = 0; i < binders.length; i++) {
              var componentView = view.componentChildViews[i];
              if (isPresent(componentView)) {
                this._viewDehydrateRecurse(componentView);
                if (binders[i].hasDynamicComponent()) {
                  this._utils.detachComponentView(view, i);
                  this._destroyView(componentView);
                }
              }
              var vc = view.viewContainers[i];
              if (isPresent(vc)) {
                for (var j = vc.views.length - 1; j >= 0; j--) {
                  var childView = vc.views[j];
                  this._viewDehydrateRecurse(childView);
                  this._utils.detachViewInContainer(view, i, j);
                  this._destroyView(childView);
                }
              }
            }
            for (var i = 0; i < view.imperativeHostViews.length; i++) {
              var hostView = view.imperativeHostViews[i];
              this._viewDehydrateRecurse(hostView);
              this._utils.detachInPlaceHostView(view, hostView);
              this._destroyView(hostView);
            }
            view.render = null;
          }
        }, {});
      }());
      $__export("AppViewManager", AppViewManager);
      Object.defineProperty(AppViewManager, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(AppViewManager, "parameters", {get: function() {
          return [[AppViewPool], [AppViewManagerUtils], [Renderer]];
        }});
      Object.defineProperty(AppViewManager.prototype.createDynamicComponentView, "parameters", {get: function() {
          return [[eli.ElementRef], [viewModule.AppProtoView], [Binding], [Injector]];
        }});
      Object.defineProperty(AppViewManager.prototype.createInPlaceHostView, "parameters", {get: function() {
          return [[eli.ElementRef], [], [viewModule.AppProtoView], [Injector]];
        }});
      Object.defineProperty(AppViewManager.prototype.destroyInPlaceHostView, "parameters", {get: function() {
          return [[eli.ElementRef], [viewModule.AppView]];
        }});
      Object.defineProperty(AppViewManager.prototype.createViewInContainer, "parameters", {get: function() {
          return [[eli.ElementRef], [assert.type.number], [viewModule.AppProtoView], [Injector]];
        }});
      Object.defineProperty(AppViewManager.prototype.destroyViewInContainer, "parameters", {get: function() {
          return [[eli.ElementRef], [assert.type.number]];
        }});
      Object.defineProperty(AppViewManager.prototype.attachViewInContainer, "parameters", {get: function() {
          return [[eli.ElementRef], [assert.type.number], [viewModule.AppView]];
        }});
      Object.defineProperty(AppViewManager.prototype.detachViewInContainer, "parameters", {get: function() {
          return [[eli.ElementRef], [assert.type.number]];
        }});
      Object.defineProperty(AppViewManager.prototype._getRenderViewContainerRef, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number]];
        }});
      Object.defineProperty(AppViewManager.prototype._createViewRecurse, "parameters", {get: function() {
          return [[viewModule.AppProtoView]];
        }});
      Object.defineProperty(AppViewManager.prototype._destroyView, "parameters", {get: function() {
          return [[viewModule.AppView]];
        }});
      Object.defineProperty(AppViewManager.prototype._viewHydrateRecurse, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.genericType(List, ViewRef)], [assert.type.number]];
        }});
      Object.defineProperty(AppViewManager.prototype._viewDehydrateRecurse, "parameters", {get: function() {
          return [[viewModule.AppView]];
        }});
    }
  };
});
//# sourceMappingURL=view_manager.js.map

//# sourceMappingURL=../../../src/core/compiler/view_manager.js.map