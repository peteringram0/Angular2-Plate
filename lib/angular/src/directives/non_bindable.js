System.register(["angular2/src/core/annotations/annotations"], function($__export) {
  "use strict";
  var Decorator,
      NonBindable;
  return {
    setters: [function($__m) {
      Decorator = $__m.Decorator;
    }],
    execute: function() {
      NonBindable = (function() {
        function NonBindable() {}
        return ($traceurRuntime.createClass)(NonBindable, {}, {});
      }());
      $__export("NonBindable", NonBindable);
      Object.defineProperty(NonBindable, "annotations", {get: function() {
          return [new Decorator({
            selector: '[non-bindable]',
            compileChildren: false
          })];
        }});
    }
  };
});
//# sourceMappingURL=non_bindable.js.map

//# sourceMappingURL=../../src/directives/non_bindable.js.map