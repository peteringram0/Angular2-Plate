System.register([], function($__export) {
  "use strict";
  var win,
      document,
      location,
      gc;
  return {
    setters: [],
    execute: function() {
      win = window;
      $__export("window", win);
      document = window.document;
      $__export("document", document);
      location = window.location;
      $__export("location", location);
      gc = window.gc ? (function() {
        return window.gc();
      }) : (function() {
        return null;
      });
      $__export("gc", gc);
    }
  };
});
//# sourceMappingURL=browser.js.map

//# sourceMappingURL=../../src/facade/browser.js.map