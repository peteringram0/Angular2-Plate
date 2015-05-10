System.register(["rtts_assert/rtts_assert", "angular2/src/facade/collection", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var assert,
      MapWrapper,
      stringify,
      Key,
      KeyRegistry,
      _globalKeyRegistry;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      stringify = $__m.stringify;
    }],
    execute: function() {
      Key = (function() {
        function Key(token, id) {
          this.token = token;
          this.id = id;
        }
        return ($traceurRuntime.createClass)(Key, {get displayName() {
            return stringify(this.token);
          }}, {
          get: function(token) {
            return assert.returnType((_globalKeyRegistry.get(token)), Key);
          },
          get numberOfKeys() {
            return _globalKeyRegistry.numberOfKeys;
          }
        });
      }());
      $__export("Key", Key);
      KeyRegistry = (function() {
        function KeyRegistry() {
          this._allKeys = MapWrapper.create();
        }
        return ($traceurRuntime.createClass)(KeyRegistry, {
          get: function(token) {
            if (token instanceof Key)
              return assert.returnType((token), Key);
            if (MapWrapper.contains(this._allKeys, token)) {
              return assert.returnType((MapWrapper.get(this._allKeys, token)), Key);
            }
            var newKey = new Key(token, Key.numberOfKeys);
            MapWrapper.set(this._allKeys, token, newKey);
            return assert.returnType((newKey), Key);
          },
          get numberOfKeys() {
            return MapWrapper.size(this._allKeys);
          }
        }, {});
      }());
      $__export("KeyRegistry", KeyRegistry);
      _globalKeyRegistry = new KeyRegistry();
    }
  };
});
//# sourceMappingURL=key.js.map

//# sourceMappingURL=../../src/di/key.js.map