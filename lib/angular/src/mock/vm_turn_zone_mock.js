System.register(["angular2/src/core/zone/vm_turn_zone"], function($__export) {
  "use strict";
  var VmTurnZone,
      MockVmTurnZone;
  return {
    setters: [function($__m) {
      VmTurnZone = $__m.VmTurnZone;
    }],
    execute: function() {
      MockVmTurnZone = (function($__super) {
        function MockVmTurnZone() {
          $traceurRuntime.superConstructor(MockVmTurnZone).call(this, {enableLongStackTrace: false});
        }
        return ($traceurRuntime.createClass)(MockVmTurnZone, {
          run: function(fn) {
            fn();
          },
          runOutsideAngular: function(fn) {
            return fn();
          }
        }, {}, $__super);
      }(VmTurnZone));
      $__export("MockVmTurnZone", MockVmTurnZone);
    }
  };
});
//# sourceMappingURL=vm_turn_zone_mock.js.map

//# sourceMappingURL=../../src/mock/vm_turn_zone_mock.js.map