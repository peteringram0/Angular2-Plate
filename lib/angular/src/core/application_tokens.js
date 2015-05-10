System.register(["rtts_assert/rtts_assert", "angular2/di"], function($__export) {
  "use strict";
  var assert,
      OpaqueToken,
      appComponentRefToken,
      appChangeDetectorToken,
      appElementToken,
      appComponentAnnotatedTypeToken,
      appDocumentToken;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      OpaqueToken = $__m.OpaqueToken;
    }],
    execute: function() {
      appComponentRefToken = assert.type(new OpaqueToken('ComponentRef'), OpaqueToken);
      $__export("appComponentRefToken", appComponentRefToken);
      appChangeDetectorToken = assert.type(new OpaqueToken('AppChangeDetector'), OpaqueToken);
      $__export("appChangeDetectorToken", appChangeDetectorToken);
      appElementToken = assert.type(new OpaqueToken('AppElement'), OpaqueToken);
      $__export("appElementToken", appElementToken);
      appComponentAnnotatedTypeToken = assert.type(new OpaqueToken('AppComponentAnnotatedType'), OpaqueToken);
      $__export("appComponentAnnotatedTypeToken", appComponentAnnotatedTypeToken);
      appDocumentToken = assert.type(new OpaqueToken('AppDocument'), OpaqueToken);
      $__export("appDocumentToken", appDocumentToken);
    }
  };
});
//# sourceMappingURL=application_tokens.js.map

//# sourceMappingURL=../../src/core/application_tokens.js.map