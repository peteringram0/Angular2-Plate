System.register(["rtts_assert/rtts_assert", "angular2/di", "angular2/src/facade/collection", "./element_injector", "angular2/src/facade/lang", "angular2/src/core/compiler/ng_element", "./view", "./view_manager", "angular2/src/render/api", "angular2/change_detection", "./directive_metadata_reader"], function($__export) {
  "use strict";
  var assert,
      Injectable,
      Injector,
      Binding,
      ListWrapper,
      MapWrapper,
      Map,
      StringMapWrapper,
      List,
      eli,
      isPresent,
      isBlank,
      BaseException,
      NgElement,
      viewModule,
      avmModule,
      Renderer,
      BindingPropagationConfig,
      Locals,
      DirectiveMetadataReader,
      AppViewManagerUtils;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Injectable = $__m.Injectable;
      Injector = $__m.Injector;
      Binding = $__m.Binding;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
      Map = $__m.Map;
      StringMapWrapper = $__m.StringMapWrapper;
      List = $__m.List;
    }, function($__m) {
      eli = $__m;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
    }, function($__m) {
      NgElement = $__m.NgElement;
    }, function($__m) {
      viewModule = $__m;
    }, function($__m) {
      avmModule = $__m;
    }, function($__m) {
      Renderer = $__m.Renderer;
    }, function($__m) {
      BindingPropagationConfig = $__m.BindingPropagationConfig;
      Locals = $__m.Locals;
    }, function($__m) {
      DirectiveMetadataReader = $__m.DirectiveMetadataReader;
    }],
    execute: function() {
      AppViewManagerUtils = (function() {
        function AppViewManagerUtils(metadataReader) {
          assert.argumentTypes(metadataReader, DirectiveMetadataReader);
          this._metadataReader = metadataReader;
        }
        return ($traceurRuntime.createClass)(AppViewManagerUtils, {
          createView: function(protoView, viewManager, renderer) {
            assert.argumentTypes(protoView, viewModule.AppProtoView, viewManager, avmModule.AppViewManager, renderer, Renderer);
            var view = new viewModule.AppView(renderer, protoView, protoView.protoLocals);
            var changeDetector = protoView.protoChangeDetector.instantiate(view, protoView.bindings, protoView.getVariableBindings(), protoView.getdirectiveRecords());
            var binders = protoView.elementBinders;
            var elementInjectors = ListWrapper.createFixedSize(binders.length);
            var rootElementInjectors = [];
            var preBuiltObjects = ListWrapper.createFixedSize(binders.length);
            var componentChildViews = ListWrapper.createFixedSize(binders.length);
            for (var binderIdx = 0; binderIdx < binders.length; binderIdx++) {
              var binder = binders[binderIdx];
              var elementInjector = null;
              var protoElementInjector = binder.protoElementInjector;
              if (isPresent(protoElementInjector)) {
                if (isPresent(protoElementInjector.parent)) {
                  var parentElementInjector = elementInjectors[protoElementInjector.parent.index];
                  elementInjector = protoElementInjector.instantiate(parentElementInjector);
                } else {
                  elementInjector = protoElementInjector.instantiate(null);
                  ListWrapper.push(rootElementInjectors, elementInjector);
                }
              }
              elementInjectors[binderIdx] = elementInjector;
              if (isPresent(elementInjector)) {
                var defaultProtoView = isPresent(binder.viewportDirective) ? binder.nestedProtoView : null;
                preBuiltObjects[binderIdx] = new eli.PreBuiltObjects(viewManager, view, new NgElement(view, binderIdx), defaultProtoView);
              }
            }
            view.init(changeDetector, elementInjectors, rootElementInjectors, preBuiltObjects, componentChildViews);
            return assert.returnType((view), viewModule.AppView);
          },
          attachComponentView: function(hostView, boundElementIndex, componentView) {
            assert.argumentTypes(hostView, viewModule.AppView, boundElementIndex, assert.type.number, componentView, viewModule.AppView);
            var childChangeDetector = componentView.changeDetector;
            hostView.changeDetector.addShadowDomChild(childChangeDetector);
            hostView.componentChildViews[boundElementIndex] = componentView;
          },
          detachComponentView: function(hostView, boundElementIndex) {
            assert.argumentTypes(hostView, viewModule.AppView, boundElementIndex, assert.type.number);
            var componentView = hostView.componentChildViews[boundElementIndex];
            hostView.changeDetector.removeShadowDomChild(componentView.changeDetector);
            hostView.componentChildViews[boundElementIndex] = null;
          },
          hydrateComponentView: function(hostView, boundElementIndex) {
            var injector = arguments[2] !== (void 0) ? arguments[2] : null;
            assert.argumentTypes(hostView, viewModule.AppView, boundElementIndex, assert.type.number, injector, Injector);
            var elementInjector = hostView.elementInjectors[boundElementIndex];
            var componentView = hostView.componentChildViews[boundElementIndex];
            var binder = hostView.proto.elementBinders[boundElementIndex];
            var component;
            if (binder.hasDynamicComponent()) {
              component = elementInjector.getDynamicallyLoadedComponent();
            } else {
              component = elementInjector.getComponent();
            }
            this._hydrateView(componentView, injector, elementInjector, component, null);
          },
          attachAndHydrateInPlaceHostView: function(parentComponentHostView, parentComponentBoundElementIndex, hostView) {
            var injector = arguments[3] !== (void 0) ? arguments[3] : null;
            assert.argumentTypes(parentComponentHostView, viewModule.AppView, parentComponentBoundElementIndex, assert.type.number, hostView, viewModule.AppView, injector, Injector);
            var hostElementInjector = null;
            if (isPresent(parentComponentHostView)) {
              hostElementInjector = parentComponentHostView.elementInjectors[parentComponentBoundElementIndex];
              var parentView = parentComponentHostView.componentChildViews[parentComponentBoundElementIndex];
              parentView.changeDetector.addChild(hostView.changeDetector);
              ListWrapper.push(parentView.imperativeHostViews, hostView);
            }
            this._hydrateView(hostView, injector, hostElementInjector, new Object(), null);
          },
          detachInPlaceHostView: function(parentView, hostView) {
            assert.argumentTypes(parentView, viewModule.AppView, hostView, viewModule.AppView);
            if (isPresent(parentView)) {
              parentView.changeDetector.removeChild(hostView.changeDetector);
              ListWrapper.remove(parentView.imperativeHostViews, hostView);
            }
          },
          attachViewInContainer: function(parentView, boundElementIndex, atIndex, view) {
            assert.argumentTypes(parentView, viewModule.AppView, boundElementIndex, assert.type.number, atIndex, assert.type.number, view, viewModule.AppView);
            parentView.changeDetector.addChild(view.changeDetector);
            var viewContainer = parentView.viewContainers[boundElementIndex];
            if (isBlank(viewContainer)) {
              viewContainer = new viewModule.AppViewContainer();
              parentView.viewContainers[boundElementIndex] = viewContainer;
            }
            ListWrapper.insert(viewContainer.views, atIndex, view);
            var sibling;
            if (atIndex == 0) {
              sibling = null;
            } else {
              sibling = ListWrapper.last(viewContainer.views[atIndex - 1].rootElementInjectors);
            }
            var elementInjector = parentView.elementInjectors[boundElementIndex];
            for (var i = view.rootElementInjectors.length - 1; i >= 0; i--) {
              view.rootElementInjectors[i].linkAfter(elementInjector, sibling);
            }
          },
          detachViewInContainer: function(parentView, boundElementIndex, atIndex) {
            assert.argumentTypes(parentView, viewModule.AppView, boundElementIndex, assert.type.number, atIndex, assert.type.number);
            var viewContainer = parentView.viewContainers[boundElementIndex];
            var view = viewContainer.views[atIndex];
            view.changeDetector.remove();
            ListWrapper.removeAt(viewContainer.views, atIndex);
            for (var i = 0; i < view.rootElementInjectors.length; ++i) {
              view.rootElementInjectors[i].unlink();
            }
          },
          hydrateViewInContainer: function(parentView, boundElementIndex, atIndex, injector) {
            assert.argumentTypes(parentView, viewModule.AppView, boundElementIndex, assert.type.number, atIndex, assert.type.number, injector, Injector);
            var viewContainer = parentView.viewContainers[boundElementIndex];
            var view = viewContainer.views[atIndex];
            var elementInjector = parentView.elementInjectors[boundElementIndex];
            this._hydrateView(view, injector, elementInjector, parentView.context, parentView.locals);
          },
          hydrateDynamicComponentInElementInjector: function(hostView, boundElementIndex, componentBinding) {
            var injector = arguments[3] !== (void 0) ? arguments[3] : null;
            assert.argumentTypes(hostView, viewModule.AppView, boundElementIndex, assert.type.number, componentBinding, Binding, injector, Injector);
            var elementInjector = hostView.elementInjectors[boundElementIndex];
            if (isPresent(elementInjector.getDynamicallyLoadedComponent())) {
              throw new BaseException(("There already is a dynamic component loaded at element " + boundElementIndex));
            }
            if (isBlank(injector)) {
              injector = elementInjector.getLightDomAppInjector();
            }
            var annotation = this._metadataReader.read(componentBinding.token).annotation;
            var componentDirective = eli.DirectiveBinding.createFromBinding(componentBinding, annotation);
            var shadowDomAppInjector = this._createShadowDomAppInjector(componentDirective, injector);
            elementInjector.dynamicallyCreateComponent(componentDirective, shadowDomAppInjector);
          },
          _createShadowDomAppInjector: function(componentDirective, appInjector) {
            var shadowDomAppInjector = null;
            var injectables = componentDirective.resolvedInjectables;
            if (isPresent(injectables)) {
              shadowDomAppInjector = appInjector.createChildFromResolved(injectables);
            } else {
              shadowDomAppInjector = appInjector;
            }
            return shadowDomAppInjector;
          },
          _hydrateView: function(view, appInjector, hostElementInjector, context, parentLocals) {
            assert.argumentTypes(view, viewModule.AppView, appInjector, Injector, hostElementInjector, eli.ElementInjector, context, Object, parentLocals, Locals);
            if (isBlank(appInjector)) {
              appInjector = hostElementInjector.getShadowDomAppInjector();
            }
            if (isBlank(appInjector)) {
              appInjector = hostElementInjector.getLightDomAppInjector();
            }
            view.context = context;
            view.locals.parent = parentLocals;
            view.changeDetector.hydrate(view.context, view.locals, view);
            var binders = view.proto.elementBinders;
            for (var i = 0; i < binders.length; ++i) {
              var elementInjector = view.elementInjectors[i];
              if (isPresent(elementInjector)) {
                var componentDirective = view.proto.elementBinders[i].componentDirective;
                var shadowDomAppInjector = null;
                if (isPresent(componentDirective)) {
                  shadowDomAppInjector = this._createShadowDomAppInjector(componentDirective, appInjector);
                } else {
                  shadowDomAppInjector = null;
                }
                elementInjector.instantiateDirectives(appInjector, hostElementInjector, shadowDomAppInjector, view.preBuiltObjects[i]);
                this._setUpEventEmitters(view, elementInjector, i);
                var exportImplicitName = elementInjector.getExportImplicitName();
                if (elementInjector.isExportingComponent()) {
                  view.locals.set(exportImplicitName, elementInjector.getComponent());
                } else if (elementInjector.isExportingElement()) {
                  view.locals.set(exportImplicitName, elementInjector.getNgElement().domElement);
                }
              }
            }
          },
          _setUpEventEmitters: function(view, elementInjector, boundElementIndex) {
            assert.argumentTypes(view, viewModule.AppView, elementInjector, eli.ElementInjector, boundElementIndex, assert.type.number);
            var emitters = elementInjector.getEventEmitterAccessors();
            for (var directiveIndex = 0; directiveIndex < emitters.length; ++directiveIndex) {
              var directiveEmitters = emitters[directiveIndex];
              var directive = elementInjector.getDirectiveAtIndex(directiveIndex);
              for (var eventIndex = 0; eventIndex < directiveEmitters.length; ++eventIndex) {
                var eventEmitterAccessor = directiveEmitters[eventIndex];
                eventEmitterAccessor.subscribe(view, boundElementIndex, directive);
              }
            }
          },
          dehydrateView: function(view) {
            assert.argumentTypes(view, viewModule.AppView);
            var binders = view.proto.elementBinders;
            for (var i = 0; i < binders.length; ++i) {
              var elementInjector = view.elementInjectors[i];
              if (isPresent(elementInjector)) {
                elementInjector.clearDirectives();
              }
            }
            if (isPresent(view.locals)) {
              view.locals.clearValues();
            }
            view.context = null;
            view.changeDetector.dehydrate();
          }
        }, {});
      }());
      $__export("AppViewManagerUtils", AppViewManagerUtils);
      Object.defineProperty(AppViewManagerUtils, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(AppViewManagerUtils, "parameters", {get: function() {
          return [[DirectiveMetadataReader]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.createView, "parameters", {get: function() {
          return [[viewModule.AppProtoView], [avmModule.AppViewManager], [Renderer]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.attachComponentView, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number], [viewModule.AppView]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.detachComponentView, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.hydrateComponentView, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number], [Injector]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.attachAndHydrateInPlaceHostView, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number], [viewModule.AppView], [Injector]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.detachInPlaceHostView, "parameters", {get: function() {
          return [[viewModule.AppView], [viewModule.AppView]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.attachViewInContainer, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number], [assert.type.number], [viewModule.AppView]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.detachViewInContainer, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number], [assert.type.number]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.hydrateViewInContainer, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number], [assert.type.number], [Injector]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.hydrateDynamicComponentInElementInjector, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number], [Binding], [Injector]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype._hydrateView, "parameters", {get: function() {
          return [[viewModule.AppView], [Injector], [eli.ElementInjector], [Object], [Locals]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype._setUpEventEmitters, "parameters", {get: function() {
          return [[viewModule.AppView], [eli.ElementInjector], [assert.type.number]];
        }});
      Object.defineProperty(AppViewManagerUtils.prototype.dehydrateView, "parameters", {get: function() {
          return [[viewModule.AppView]];
        }});
    }
  };
});
//# sourceMappingURL=view_manager_utils.js.map

//# sourceMappingURL=../../../src/core/compiler/view_manager_utils.js.map