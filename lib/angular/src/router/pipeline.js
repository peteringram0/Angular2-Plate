System.register(["rtts_assert/rtts_assert", "angular2/src/facade/async", "angular2/src/facade/collection", "./instruction"], function($__export) {
  "use strict";
  var assert,
      Promise,
      PromiseWrapper,
      List,
      ListWrapper,
      Instruction,
      Pipeline;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      Instruction = $__m.Instruction;
    }],
    execute: function() {
      Pipeline = (function() {
        function Pipeline() {
          this.steps = [(function(instruction) {
            return instruction.traverseSync((function(parentInstruction, childInstruction) {
              childInstruction.router = parentInstruction.router.childRouter(childInstruction.component);
            }));
          }), (function(instruction) {
            return instruction.router.traverseOutlets((function(outlet, name) {
              return outlet.canDeactivate(instruction.getChildInstruction(name));
            }));
          }), (function(instruction) {
            return instruction.router.traverseOutlets((function(outlet, name) {
              return outlet.canActivate(instruction.getChildInstruction(name));
            }));
          }), (function(instruction) {
            return instruction.router.activateOutlets(instruction);
          })];
        }
        return ($traceurRuntime.createClass)(Pipeline, {process: function(instruction) {
            assert.argumentTypes(instruction, Instruction);
            var steps = this.steps,
                currentStep = 0;
            function processOne() {
              var result = arguments[0] !== (void 0) ? arguments[0] : true;
              assert.argumentTypes(result, assert.type.any);
              if (currentStep >= steps.length) {
                return assert.returnType((PromiseWrapper.resolve(result)), Promise);
              }
              var step = steps[currentStep];
              currentStep += 1;
              return assert.returnType((PromiseWrapper.resolve(step(instruction)).then(processOne)), Promise);
            }
            Object.defineProperty(processOne, "parameters", {get: function() {
                return [[assert.type.any]];
              }});
            return assert.returnType((processOne()), Promise);
          }}, {});
      }());
      $__export("Pipeline", Pipeline);
      Object.defineProperty(Pipeline.prototype.process, "parameters", {get: function() {
          return [[Instruction]];
        }});
    }
  };
});
//# sourceMappingURL=pipeline.js.map

//# sourceMappingURL=../../src/router/pipeline.js.map