System.register(["rtts_assert/rtts_assert", "angular2/src/facade/lang", "angular2/src/facade/collection", "./url"], function($__export) {
  "use strict";
  var assert,
      RegExp,
      RegExpWrapper,
      RegExpMatcherWrapper,
      StringWrapper,
      isPresent,
      Map,
      MapWrapper,
      StringMap,
      StringMapWrapper,
      List,
      ListWrapper,
      escapeRegex,
      StaticSegment,
      DynamicSegment,
      StarSegment,
      paramMatcher,
      wildcardMatcher,
      SLASH_RE,
      PathRecognizer;
  function parsePathString(route) {
    assert.argumentTypes(route, assert.type.string);
    if (route[0] === "/") {
      route = StringWrapper.substring(route, 1);
    }
    var segments = splitBySlash(route);
    var results = ListWrapper.create();
    for (var i = 0; i < segments.length; i++) {
      var segment = segments[i],
          match = void 0;
      if (isPresent(match = RegExpWrapper.firstMatch(paramMatcher, segment))) {
        ListWrapper.push(results, new DynamicSegment(match[1]));
      } else if (isPresent(match = RegExpWrapper.firstMatch(wildcardMatcher, segment))) {
        ListWrapper.push(results, new StarSegment(match[1]));
      } else if (segment.length > 0) {
        ListWrapper.push(results, new StaticSegment(segment));
      }
    }
    return assert.returnType((results), List);
  }
  function splitBySlash(url) {
    assert.argumentTypes(url, assert.type.string);
    return assert.returnType((StringWrapper.split(url, SLASH_RE)), assert.genericType(List, assert.type.string));
  }
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      RegExp = $__m.RegExp;
      RegExpWrapper = $__m.RegExpWrapper;
      RegExpMatcherWrapper = $__m.RegExpMatcherWrapper;
      StringWrapper = $__m.StringWrapper;
      isPresent = $__m.isPresent;
    }, function($__m) {
      Map = $__m.Map;
      MapWrapper = $__m.MapWrapper;
      StringMap = $__m.StringMap;
      StringMapWrapper = $__m.StringMapWrapper;
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      escapeRegex = $__m.escapeRegex;
    }],
    execute: function() {
      StaticSegment = (function() {
        function StaticSegment(string) {
          assert.argumentTypes(string, assert.type.string);
          this.string = string;
          this.name = '';
          this.regex = escapeRegex(string);
        }
        return ($traceurRuntime.createClass)(StaticSegment, {generate: function(params) {
            return this.string;
          }}, {});
      }());
      Object.defineProperty(StaticSegment, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      DynamicSegment = (function() {
        function DynamicSegment(name) {
          assert.argumentTypes(name, assert.type.string);
          this.name = name;
          this.regex = "([^/]+)";
        }
        return ($traceurRuntime.createClass)(DynamicSegment, {generate: function(params) {
            assert.argumentTypes(params, StringMap);
            return StringMapWrapper.get(params, this.name);
          }}, {});
      }());
      Object.defineProperty(DynamicSegment, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(DynamicSegment.prototype.generate, "parameters", {get: function() {
          return [[StringMap]];
        }});
      StarSegment = (function() {
        function StarSegment(name) {
          assert.argumentTypes(name, assert.type.string);
          this.name = name;
          this.regex = "(.+)";
        }
        return ($traceurRuntime.createClass)(StarSegment, {generate: function(params) {
            assert.argumentTypes(params, StringMap);
            return StringMapWrapper.get(params, this.name);
          }}, {});
      }());
      Object.defineProperty(StarSegment, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(StarSegment.prototype.generate, "parameters", {get: function() {
          return [[StringMap]];
        }});
      paramMatcher = RegExpWrapper.create("^:([^\/]+)$");
      wildcardMatcher = RegExpWrapper.create("^\\*([^\/]+)$");
      Object.defineProperty(parsePathString, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      SLASH_RE = RegExpWrapper.create('/');
      Object.defineProperty(splitBySlash, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      PathRecognizer = (function() {
        function PathRecognizer(path, handler) {
          assert.argumentTypes(path, assert.type.string, handler, assert.type.any);
          this.handler = handler;
          this.segments = ListWrapper.create();
          var segments = parsePathString(path);
          var regexString = '^';
          ListWrapper.forEach(segments, (function(segment) {
            regexString += '/' + segment.regex;
          }));
          this.regex = RegExpWrapper.create(regexString);
          this.segments = segments;
        }
        return ($traceurRuntime.createClass)(PathRecognizer, {
          parseParams: function(url) {
            assert.argumentTypes(url, assert.type.string);
            var params = StringMapWrapper.create();
            var urlPart = url;
            for (var i = 0; i < this.segments.length; i++) {
              var segment = this.segments[i];
              var match = RegExpWrapper.firstMatch(RegExpWrapper.create('/' + segment.regex), urlPart);
              urlPart = StringWrapper.substring(urlPart, match[0].length);
              if (segment.name.length > 0) {
                StringMapWrapper.set(params, segment.name, match[1]);
              }
            }
            return assert.returnType((params), StringMap);
          },
          generate: function(params) {
            return assert.returnType((ListWrapper.join(ListWrapper.map(this.segments, (function(segment) {
              return '/' + segment.generate(params);
            })), '')), assert.type.string);
          }
        }, {});
      }());
      $__export("PathRecognizer", PathRecognizer);
      Object.defineProperty(PathRecognizer, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.any]];
        }});
      Object.defineProperty(PathRecognizer.prototype.parseParams, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(PathRecognizer.prototype.generate, "parameters", {get: function() {
          return [[StringMap]];
        }});
    }
  };
});
//# sourceMappingURL=path_recognizer.js.map

//# sourceMappingURL=../../src/router/path_recognizer.js.map