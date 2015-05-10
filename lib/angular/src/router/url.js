System.register(["rtts_assert/rtts_assert", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var assert,
      RegExpWrapper,
      StringWrapper,
      specialCharacters,
      escapeRe;
  function escapeRegex(string) {
    assert.argumentTypes(string, assert.type.string);
    return StringWrapper.replaceAllMapped(string, escapeRe, (function(match) {
      return "\\" + match;
    }));
  }
  $__export("escapeRegex", escapeRegex);
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      RegExpWrapper = $__m.RegExpWrapper;
      StringWrapper = $__m.StringWrapper;
    }],
    execute: function() {
      specialCharacters = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
      escapeRe = RegExpWrapper.create('(\\' + specialCharacters.join('|\\') + ')', 'g');
      Object.defineProperty(escapeRegex, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=url.js.map

//# sourceMappingURL=../../src/router/url.js.map