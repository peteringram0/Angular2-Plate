System.register(["rtts_assert/rtts_assert", "angular2/src/facade/lang", "angular2/src/facade/collection", "./path_recognizer"], function($__export) {
  "use strict";
  var assert,
      RegExp,
      RegExpWrapper,
      StringWrapper,
      isPresent,
      Map,
      MapWrapper,
      List,
      ListWrapper,
      StringMap,
      StringMapWrapper,
      PathRecognizer,
      RouteRecognizer;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      RegExp = $__m.RegExp;
      RegExpWrapper = $__m.RegExpWrapper;
      StringWrapper = $__m.StringWrapper;
      isPresent = $__m.isPresent;
    }, function($__m) {
      Map = $__m.Map;
      MapWrapper = $__m.MapWrapper;
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
      StringMap = $__m.StringMap;
      StringMapWrapper = $__m.StringMapWrapper;
    }, function($__m) {
      PathRecognizer = $__m.PathRecognizer;
    }],
    execute: function() {
      RouteRecognizer = (function() {
        function RouteRecognizer() {
          this.names = MapWrapper.create();
          this.matchers = MapWrapper.create();
          this.redirects = MapWrapper.create();
        }
        return ($traceurRuntime.createClass)(RouteRecognizer, {
          addRedirect: function(path, target) {
            assert.argumentTypes(path, assert.type.string, target, assert.type.string);
            MapWrapper.set(this.redirects, path, target);
          },
          addConfig: function(path, handler) {
            var alias = arguments[2] !== (void 0) ? arguments[2] : null;
            assert.argumentTypes(path, assert.type.string, handler, assert.type.any, alias, assert.type.string);
            var recognizer = new PathRecognizer(path, handler);
            MapWrapper.set(this.matchers, recognizer.regex, recognizer);
            if (isPresent(alias)) {
              MapWrapper.set(this.names, alias, recognizer);
            }
          },
          recognize: function(url) {
            assert.argumentTypes(url, assert.type.string);
            var solutions = [];
            MapWrapper.forEach(this.redirects, (function(target, path) {
              if (StringWrapper.startsWith(url, path)) {
                url = target + StringWrapper.substring(url, path.length);
              }
            }));
            MapWrapper.forEach(this.matchers, (function(pathRecognizer, regex) {
              var match;
              if (isPresent(match = RegExpWrapper.firstMatch(regex, url))) {
                var solution = StringMapWrapper.create();
                StringMapWrapper.set(solution, 'handler', pathRecognizer.handler);
                StringMapWrapper.set(solution, 'params', pathRecognizer.parseParams(url));
                StringMapWrapper.set(solution, 'matchedUrl', match[0]);
                var unmatchedUrl = StringWrapper.substring(url, match[0].length);
                StringMapWrapper.set(solution, 'unmatchedUrl', unmatchedUrl);
                ListWrapper.push(solutions, solution);
              }
            }));
            return assert.returnType((solutions), assert.genericType(List, StringMap));
          },
          hasRoute: function(name) {
            assert.argumentTypes(name, assert.type.string);
            return MapWrapper.contains(this.names, name);
          },
          generate: function(name, params) {
            assert.argumentTypes(name, assert.type.string, params, assert.type.any);
            var pathRecognizer = MapWrapper.get(this.names, name);
            return pathRecognizer.generate(params);
          }
        }, {});
      }());
      $__export("RouteRecognizer", RouteRecognizer);
      Object.defineProperty(RouteRecognizer.prototype.addRedirect, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(RouteRecognizer.prototype.addConfig, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.any], [assert.type.string]];
        }});
      Object.defineProperty(RouteRecognizer.prototype.recognize, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(RouteRecognizer.prototype.hasRoute, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(RouteRecognizer.prototype.generate, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.any]];
        }});
    }
  };
});
//# sourceMappingURL=route_recognizer.js.map

//# sourceMappingURL=../../src/router/route_recognizer.js.map