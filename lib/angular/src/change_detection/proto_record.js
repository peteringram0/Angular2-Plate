System.register(["rtts_assert/rtts_assert", "angular2/src/facade/collection", "./binding_record", "./directive_record"], function($__export) {
  "use strict";
  var assert,
      List,
      BindingRecord,
      DirectiveIndex,
      RECORD_TYPE_SELF,
      RECORD_TYPE_CONST,
      RECORD_TYPE_PRIMITIVE_OP,
      RECORD_TYPE_PROPERTY,
      RECORD_TYPE_LOCAL,
      RECORD_TYPE_INVOKE_METHOD,
      RECORD_TYPE_INVOKE_CLOSURE,
      RECORD_TYPE_KEYED_ACCESS,
      RECORD_TYPE_PIPE,
      RECORD_TYPE_BINDING_PIPE,
      RECORD_TYPE_INTERPOLATE,
      ProtoRecord;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      List = $__m.List;
    }, function($__m) {
      BindingRecord = $__m.BindingRecord;
    }, function($__m) {
      DirectiveIndex = $__m.DirectiveIndex;
    }],
    execute: function() {
      RECORD_TYPE_SELF = 0;
      $__export("RECORD_TYPE_SELF", RECORD_TYPE_SELF);
      RECORD_TYPE_CONST = 1;
      $__export("RECORD_TYPE_CONST", RECORD_TYPE_CONST);
      RECORD_TYPE_PRIMITIVE_OP = 2;
      $__export("RECORD_TYPE_PRIMITIVE_OP", RECORD_TYPE_PRIMITIVE_OP);
      RECORD_TYPE_PROPERTY = 3;
      $__export("RECORD_TYPE_PROPERTY", RECORD_TYPE_PROPERTY);
      RECORD_TYPE_LOCAL = 4;
      $__export("RECORD_TYPE_LOCAL", RECORD_TYPE_LOCAL);
      RECORD_TYPE_INVOKE_METHOD = 5;
      $__export("RECORD_TYPE_INVOKE_METHOD", RECORD_TYPE_INVOKE_METHOD);
      RECORD_TYPE_INVOKE_CLOSURE = 6;
      $__export("RECORD_TYPE_INVOKE_CLOSURE", RECORD_TYPE_INVOKE_CLOSURE);
      RECORD_TYPE_KEYED_ACCESS = 7;
      $__export("RECORD_TYPE_KEYED_ACCESS", RECORD_TYPE_KEYED_ACCESS);
      RECORD_TYPE_PIPE = 8;
      $__export("RECORD_TYPE_PIPE", RECORD_TYPE_PIPE);
      RECORD_TYPE_BINDING_PIPE = 9;
      $__export("RECORD_TYPE_BINDING_PIPE", RECORD_TYPE_BINDING_PIPE);
      RECORD_TYPE_INTERPOLATE = 10;
      $__export("RECORD_TYPE_INTERPOLATE", RECORD_TYPE_INTERPOLATE);
      ProtoRecord = (function() {
        function ProtoRecord(mode, name, funcOrValue, args, fixedArgs, contextIndex, directiveIndex, selfIndex, bindingRecord, expressionAsString, lastInBinding, lastInDirective) {
          assert.argumentTypes(mode, assert.type.number, name, assert.type.string, funcOrValue, assert.type.any, args, List, fixedArgs, List, contextIndex, assert.type.number, directiveIndex, DirectiveIndex, selfIndex, assert.type.number, bindingRecord, BindingRecord, expressionAsString, assert.type.string, lastInBinding, assert.type.boolean, lastInDirective, assert.type.boolean);
          this.mode = mode;
          this.name = name;
          this.funcOrValue = funcOrValue;
          this.args = args;
          this.fixedArgs = fixedArgs;
          this.contextIndex = contextIndex;
          this.directiveIndex = directiveIndex;
          this.selfIndex = selfIndex;
          this.bindingRecord = bindingRecord;
          this.lastInBinding = lastInBinding;
          this.lastInDirective = lastInDirective;
          this.expressionAsString = expressionAsString;
        }
        return ($traceurRuntime.createClass)(ProtoRecord, {isPureFunction: function() {
            return assert.returnType((this.mode === RECORD_TYPE_INTERPOLATE || this.mode === RECORD_TYPE_PRIMITIVE_OP), assert.type.boolean);
          }}, {});
      }());
      $__export("ProtoRecord", ProtoRecord);
      Object.defineProperty(ProtoRecord, "parameters", {get: function() {
          return [[assert.type.number], [assert.type.string], [], [List], [List], [assert.type.number], [DirectiveIndex], [assert.type.number], [BindingRecord], [assert.type.string], [assert.type.boolean], [assert.type.boolean]];
        }});
    }
  };
});
//# sourceMappingURL=proto_record.js.map

//# sourceMappingURL=../../src/change_detection/proto_record.js.map