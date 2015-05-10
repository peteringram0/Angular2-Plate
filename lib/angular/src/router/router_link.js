System.register(["rtts_assert/rtts_assert", "angular2/annotations", "angular2/core", "angular2/src/facade/lang", "angular2/src/dom/dom_adapter", "./router"], function($__export) {
  "use strict";
  var assert,
      Decorator,
      NgElement,
      isPresent,
      DOM,
      Router,
      RouterLink;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Decorator = $__m.Decorator;
    }, function($__m) {
      NgElement = $__m.NgElement;
    }, function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      Router = $__m.Router;
    }],
    execute: function() {
      RouterLink = (function() {
        function RouterLink(ngEl, router) {
          assert.argumentTypes(ngEl, NgElement, router, Router);
          this._domEl = ngEl.domElement;
          this._router = router;
        }
        return ($traceurRuntime.createClass)(RouterLink, {
          set route(changes) {
            this._route = changes;
            this.updateHref();
          },
          set params(changes) {
            this._params = changes;
            this.updateHref();
          },
          updateHref: function() {
            if (isPresent(this._route) && isPresent(this._params)) {
              var newHref = this._router.generate(this._route, this._params);
              DOM.setAttribute(this._domEl, 'href', newHref);
            }
          }
        }, {});
      }());
      $__export("RouterLink", RouterLink);
      Object.defineProperty(RouterLink, "annotations", {get: function() {
          return [new Decorator({
            selector: '[router-link]',
            properties: {
              'route': 'routerLink',
              'params': 'routerParams'
            }
          })];
        }});
      Object.defineProperty(RouterLink, "parameters", {get: function() {
          return [[NgElement], [Router]];
        }});
    }
  };
});
//# sourceMappingURL=router_link.js.map

//# sourceMappingURL=../../src/router/router_link.js.map