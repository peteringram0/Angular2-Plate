System.register(["angular2/src/facade/lang"], function($__export) {
  "use strict";
  var CONST,
      RouteConfig;
  return {
    setters: [function($__m) {
      CONST = $__m.CONST;
    }],
    execute: function() {
      RouteConfig = (function() {
        function RouteConfig() {
          var $__1 = arguments[0] !== (void 0) ? arguments[0] : {},
              path = $__1.path,
              component = $__1.component,
              redirectTo = $__1.redirectTo;
          this.path = path;
          this.component = component;
          this.redirectTo = redirectTo;
        }
        return ($traceurRuntime.createClass)(RouteConfig, {}, {});
      }());
      $__export("RouteConfig", RouteConfig);
      Object.defineProperty(RouteConfig, "annotations", {get: function() {
          return [new CONST()];
        }});
    }
  };
});
//# sourceMappingURL=route_config.js.map

//# sourceMappingURL=../../src/router/route_config.js.map