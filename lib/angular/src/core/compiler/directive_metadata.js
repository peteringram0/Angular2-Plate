System.register(["rtts_assert/rtts_assert", "angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/core/annotations/annotations", "angular2/di"], function($__export) {
  "use strict";
  var assert,
      Type,
      List,
      Directive,
      ResolvedBinding,
      DirectiveMetadata;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Type = $__m.Type;
    }, function($__m) {
      List = $__m.List;
    }, function($__m) {
      Directive = $__m.Directive;
    }, function($__m) {
      ResolvedBinding = $__m.ResolvedBinding;
    }],
    execute: function() {
      DirectiveMetadata = (function() {
        function DirectiveMetadata(type, annotation, resolvedInjectables) {
          assert.argumentTypes(type, Type, annotation, Directive, resolvedInjectables, assert.genericType(List, ResolvedBinding));
          this.annotation = annotation;
          this.type = type;
          this.resolvedInjectables = resolvedInjectables;
        }
        return ($traceurRuntime.createClass)(DirectiveMetadata, {}, {});
      }());
      $__export("DirectiveMetadata", DirectiveMetadata);
      Object.defineProperty(DirectiveMetadata, "parameters", {get: function() {
          return [[Type], [Directive], [assert.genericType(List, ResolvedBinding)]];
        }});
    }
  };
});
//# sourceMappingURL=directive_metadata.js.map

//# sourceMappingURL=../../../src/core/compiler/directive_metadata.js.map