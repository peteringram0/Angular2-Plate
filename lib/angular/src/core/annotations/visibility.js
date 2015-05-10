System.register(["angular2/src/facade/lang", "angular2/di"], function($__export) {
  "use strict";
  var CONST,
      DependencyAnnotation,
      Parent,
      Ancestor;
  return {
    setters: [function($__m) {
      CONST = $__m.CONST;
    }, function($__m) {
      DependencyAnnotation = $__m.DependencyAnnotation;
    }],
    execute: function() {
      Parent = (function($__super) {
        function Parent() {
          $traceurRuntime.superConstructor(Parent).call(this);
        }
        return ($traceurRuntime.createClass)(Parent, {}, {}, $__super);
      }(DependencyAnnotation));
      $__export("Parent", Parent);
      Object.defineProperty(Parent, "annotations", {get: function() {
          return [new CONST()];
        }});
      Ancestor = (function($__super) {
        function Ancestor() {
          $traceurRuntime.superConstructor(Ancestor).call(this);
        }
        return ($traceurRuntime.createClass)(Ancestor, {}, {}, $__super);
      }(DependencyAnnotation));
      $__export("Ancestor", Ancestor);
      Object.defineProperty(Ancestor, "annotations", {get: function() {
          return [new CONST()];
        }});
    }
  };
});
//# sourceMappingURL=visibility.js.map

//# sourceMappingURL=../../../src/core/annotations/visibility.js.map