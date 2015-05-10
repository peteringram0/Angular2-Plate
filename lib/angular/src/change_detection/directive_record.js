System.register(["rtts_assert/rtts_assert", "./constants", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var assert,
      ON_PUSH,
      StringWrapper,
      DirectiveIndex,
      DirectiveRecord;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      ON_PUSH = $__m.ON_PUSH;
    }, function($__m) {
      StringWrapper = $__m.StringWrapper;
    }],
    execute: function() {
      DirectiveIndex = (function() {
        function DirectiveIndex(elementIndex, directiveIndex) {
          assert.argumentTypes(elementIndex, assert.type.number, directiveIndex, assert.type.number);
          this.elementIndex = elementIndex;
          this.directiveIndex = directiveIndex;
        }
        return ($traceurRuntime.createClass)(DirectiveIndex, {get name() {
            return (this.elementIndex + "_" + this.directiveIndex);
          }}, {});
      }());
      $__export("DirectiveIndex", DirectiveIndex);
      Object.defineProperty(DirectiveIndex, "parameters", {get: function() {
          return [[assert.type.number], [assert.type.number]];
        }});
      DirectiveRecord = (function() {
        function DirectiveRecord(directiveIndex, callOnAllChangesDone, callOnChange, changeDetection) {
          assert.argumentTypes(directiveIndex, DirectiveIndex, callOnAllChangesDone, assert.type.boolean, callOnChange, assert.type.boolean, changeDetection, assert.type.string);
          this.directiveIndex = directiveIndex;
          this.callOnAllChangesDone = callOnAllChangesDone;
          this.callOnChange = callOnChange;
          this.changeDetection = changeDetection;
        }
        return ($traceurRuntime.createClass)(DirectiveRecord, {isOnPushChangeDetection: function() {
            return assert.returnType((StringWrapper.equals(this.changeDetection, ON_PUSH)), assert.type.boolean);
          }}, {});
      }());
      $__export("DirectiveRecord", DirectiveRecord);
      Object.defineProperty(DirectiveRecord, "parameters", {get: function() {
          return [[DirectiveIndex], [assert.type.boolean], [assert.type.boolean], [assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=directive_record.js.map

//# sourceMappingURL=../../src/change_detection/directive_record.js.map