System.register(["angular2/src/facade/lang"], function($__export) {
  "use strict";
  var CONST,
      Inject,
      InjectPromise,
      InjectLazy,
      Optional,
      DependencyAnnotation,
      Injectable;
  return {
    setters: [function($__m) {
      CONST = $__m.CONST;
    }],
    execute: function() {
      Inject = (function() {
        function Inject(token) {
          this.token = token;
        }
        return ($traceurRuntime.createClass)(Inject, {}, {});
      }());
      $__export("Inject", Inject);
      Object.defineProperty(Inject, "annotations", {get: function() {
          return [new CONST()];
        }});
      InjectPromise = (function() {
        function InjectPromise(token) {
          this.token = token;
        }
        return ($traceurRuntime.createClass)(InjectPromise, {}, {});
      }());
      $__export("InjectPromise", InjectPromise);
      Object.defineProperty(InjectPromise, "annotations", {get: function() {
          return [new CONST()];
        }});
      InjectLazy = (function() {
        function InjectLazy(token) {
          this.token = token;
        }
        return ($traceurRuntime.createClass)(InjectLazy, {}, {});
      }());
      $__export("InjectLazy", InjectLazy);
      Object.defineProperty(InjectLazy, "annotations", {get: function() {
          return [new CONST()];
        }});
      Optional = (function() {
        function Optional() {}
        return ($traceurRuntime.createClass)(Optional, {}, {});
      }());
      $__export("Optional", Optional);
      Object.defineProperty(Optional, "annotations", {get: function() {
          return [new CONST()];
        }});
      DependencyAnnotation = (function() {
        function DependencyAnnotation() {}
        return ($traceurRuntime.createClass)(DependencyAnnotation, {get token() {
            return null;
          }}, {});
      }());
      $__export("DependencyAnnotation", DependencyAnnotation);
      Object.defineProperty(DependencyAnnotation, "annotations", {get: function() {
          return [new CONST()];
        }});
      Injectable = (function() {
        function Injectable() {}
        return ($traceurRuntime.createClass)(Injectable, {}, {});
      }());
      $__export("Injectable", Injectable);
      Object.defineProperty(Injectable, "annotations", {get: function() {
          return [new CONST()];
        }});
    }
  };
});
//# sourceMappingURL=annotations.js.map

//# sourceMappingURL=../../src/di/annotations.js.map