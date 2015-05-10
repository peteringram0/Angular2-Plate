System.register(["rtts_assert/rtts_assert", "./route_recognizer", "./instruction", "angular2/src/facade/collection", "angular2/src/facade/lang", "./route_config", "angular2/src/reflection/reflection"], function($__export) {
  "use strict";
  var assert,
      RouteRecognizer,
      Instruction,
      noopInstruction,
      List,
      ListWrapper,
      Map,
      MapWrapper,
      StringMap,
      StringMapWrapper,
      isPresent,
      isBlank,
      isType,
      StringWrapper,
      RouteConfig,
      reflector,
      RouteRegistry;
  function handlerToLeafInstructions(context, parentComponent) {
    var children = StringMapWrapper.create();
    StringMapWrapper.forEach(context['handler']['components'], (function(component, outletName) {
      children[outletName] = new Instruction({
        component: component,
        params: context['params']
      });
    }));
    return new Instruction({
      component: parentComponent,
      children: children,
      matchedUrl: context['matchedUrl']
    });
  }
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      RouteRecognizer = $__m.RouteRecognizer;
    }, function($__m) {
      Instruction = $__m.Instruction;
      noopInstruction = $__m.noopInstruction;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
      Map = $__m.Map;
      MapWrapper = $__m.MapWrapper;
      StringMap = $__m.StringMap;
      StringMapWrapper = $__m.StringMapWrapper;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      isType = $__m.isType;
      StringWrapper = $__m.StringWrapper;
    }, function($__m) {
      RouteConfig = $__m.RouteConfig;
    }, function($__m) {
      reflector = $__m.reflector;
    }],
    execute: function() {
      RouteRegistry = (function() {
        function RouteRegistry() {
          this._rules = MapWrapper.create();
        }
        return ($traceurRuntime.createClass)(RouteRegistry, {
          config: function(parentComponent, path, component) {
            var alias = arguments[3] !== (void 0) ? arguments[3] : null;
            assert.argumentTypes(parentComponent, assert.type.any, path, assert.type.string, component, assert.type.any, alias, assert.type.string);
            if (parentComponent === 'app') {
              parentComponent = '/';
            }
            var recognizer;
            if (MapWrapper.contains(this._rules, parentComponent)) {
              recognizer = MapWrapper.get(this._rules, parentComponent);
            } else {
              recognizer = new RouteRecognizer();
              MapWrapper.set(this._rules, parentComponent, recognizer);
            }
            this._configFromComponent(component);
            var components = StringMapWrapper.create();
            StringMapWrapper.set(components, 'default', component);
            var handler = StringMapWrapper.create();
            StringMapWrapper.set(handler, 'components', components);
            recognizer.addConfig(path, handler, alias);
          },
          _configFromComponent: function(component) {
            if (!isType(component)) {
              return ;
            }
            if (MapWrapper.contains(this._rules, component)) {
              return ;
            }
            var annotations = reflector.annotations(component);
            if (isPresent(annotations)) {
              for (var i = 0; i < annotations.length; i++) {
                var annotation = annotations[i];
                if (annotation instanceof RouteConfig) {
                  this.config(component, annotation.path, annotation.component);
                }
              }
            }
          },
          recognize: function(url) {
            var parentComponent = arguments[1] !== (void 0) ? arguments[1] : '/';
            var $__0 = this;
            assert.argumentTypes(url, assert.type.string, parentComponent, assert.type.any);
            var componentRecognizer = MapWrapper.get(this._rules, parentComponent);
            if (isBlank(componentRecognizer)) {
              return null;
            }
            var solutions = componentRecognizer.recognize(url);
            for (var i = 0; i < solutions.length; i++) {
              var candidate = solutions[i];
              if (candidate['unmatchedUrl'].length == 0) {
                return handlerToLeafInstructions(candidate, parentComponent);
              }
              var children = StringMapWrapper.create(),
                  allMapped = true;
              StringMapWrapper.forEach(candidate['handler']['components'], (function(component, name) {
                if (!allMapped) {
                  return ;
                }
                var childInstruction = $__0.recognize(candidate['unmatchedUrl'], component);
                if (isPresent(childInstruction)) {
                  childInstruction.params = candidate['params'];
                  children[name] = childInstruction;
                } else {
                  allMapped = false;
                }
              }));
              if (allMapped) {
                return new Instruction({
                  component: parentComponent,
                  children: children,
                  matchedUrl: candidate['matchedUrl']
                });
              }
            }
            return null;
          },
          generate: function(name, params) {
            assert.argumentTypes(name, assert.type.string, params, assert.type.any);
            var componentRecognizer = MapWrapper.get(this._rules, '/');
            if (isPresent(componentRecognizer)) {
              return componentRecognizer.generate(name, params);
            }
          }
        }, {});
      }());
      $__export("RouteRegistry", RouteRegistry);
      Object.defineProperty(RouteRegistry.prototype.config, "parameters", {get: function() {
          return [[], [assert.type.string], [assert.type.any], [assert.type.string]];
        }});
      Object.defineProperty(RouteRegistry.prototype.recognize, "parameters", {get: function() {
          return [[assert.type.string], []];
        }});
      Object.defineProperty(RouteRegistry.prototype.generate, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.any]];
        }});
    }
  };
});
//# sourceMappingURL=route_registry.js.map

//# sourceMappingURL=../../src/router/route_registry.js.map