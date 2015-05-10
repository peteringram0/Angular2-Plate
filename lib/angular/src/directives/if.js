System.register(["rtts_assert/rtts_assert", "angular2/src/core/annotations/annotations", "angular2/src/core/compiler/view_container_ref", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var assert,
      Viewport,
      ViewContainerRef,
      isBlank,
      If;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Viewport = $__m.Viewport;
    }, function($__m) {
      ViewContainerRef = $__m.ViewContainerRef;
    }, function($__m) {
      isBlank = $__m.isBlank;
    }],
    execute: function() {
      If = (function() {
        function If(viewContainer) {
          assert.argumentTypes(viewContainer, ViewContainerRef);
          this.viewContainer = viewContainer;
          this.prevCondition = null;
        }
        return ($traceurRuntime.createClass)(If, {set condition(newCondition) {
            if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
              this.prevCondition = true;
              this.viewContainer.create();
            } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
              this.prevCondition = false;
              this.viewContainer.clear();
            }
          }}, {});
      }());
      $__export("If", If);
      Object.defineProperty(If, "annotations", {get: function() {
          return [new Viewport({
            selector: '[if]',
            properties: {'condition': 'if'}
          })];
        }});
      Object.defineProperty(If, "parameters", {get: function() {
          return [[ViewContainerRef]];
        }});
    }
  };
});
//# sourceMappingURL=if.js.map

//# sourceMappingURL=../../src/directives/if.js.map