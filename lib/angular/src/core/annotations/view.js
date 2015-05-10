System.register(["angular2/src/facade/lang"], function($__export) {
  "use strict";
  var ABSTRACT,
      CONST,
      Type,
      View;
  return {
    setters: [function($__m) {
      ABSTRACT = $__m.ABSTRACT;
      CONST = $__m.CONST;
      Type = $__m.Type;
    }],
    execute: function() {
      View = (function() {
        function View($__1) {
          var $__2 = $__1,
              templateUrl = $__2.templateUrl,
              template = $__2.template,
              directives = $__2.directives,
              renderer = $__2.renderer;
          this.templateUrl = templateUrl;
          this.template = template;
          this.directives = directives;
          this.renderer = renderer;
        }
        return ($traceurRuntime.createClass)(View, {}, {});
      }());
      $__export("View", View);
      Object.defineProperty(View, "annotations", {get: function() {
          return [new CONST()];
        }});
    }
  };
});
//# sourceMappingURL=view.js.map

//# sourceMappingURL=../../../src/core/annotations/view.js.map