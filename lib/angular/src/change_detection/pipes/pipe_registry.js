System.register(["rtts_assert/rtts_assert", "angular2/src/facade/collection", "angular2/src/facade/lang", "./pipe", "angular2/di", "../change_detector_ref"], function($__export) {
  "use strict";
  var assert,
      List,
      ListWrapper,
      isBlank,
      isPresent,
      BaseException,
      CONST,
      Pipe,
      Injectable,
      ChangeDetectorRef,
      PipeRegistry;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      BaseException = $__m.BaseException;
      CONST = $__m.CONST;
    }, function($__m) {
      Pipe = $__m.Pipe;
    }, function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      ChangeDetectorRef = $__m.ChangeDetectorRef;
    }],
    execute: function() {
      PipeRegistry = (function() {
        function PipeRegistry(config) {
          this.config = config;
        }
        return ($traceurRuntime.createClass)(PipeRegistry, {get: function(type, obj, cdRef) {
            var listOfConfigs = this.config[type];
            if (isBlank(listOfConfigs)) {
              throw new BaseException(("Cannot find '" + type + "' pipe supporting object '" + obj + "'"));
            }
            var matchingConfig = ListWrapper.find(listOfConfigs, (function(pipeConfig) {
              return pipeConfig.supports(obj);
            }));
            if (isBlank(matchingConfig)) {
              throw new BaseException(("Cannot find '" + type + "' pipe supporting object '" + obj + "'"));
            }
            return assert.returnType((matchingConfig.create(cdRef)), Pipe);
          }}, {});
      }());
      $__export("PipeRegistry", PipeRegistry);
      Object.defineProperty(PipeRegistry, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(PipeRegistry.prototype.get, "parameters", {get: function() {
          return [[assert.type.string], [], [ChangeDetectorRef]];
        }});
    }
  };
});
//# sourceMappingURL=pipe_registry.js.map

//# sourceMappingURL=../../../src/change_detection/pipes/pipe_registry.js.map