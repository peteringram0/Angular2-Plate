System.register(["./base_query_list"], function($__export) {
  "use strict";
  var BaseQueryList,
      QueryList;
  return {
    setters: [function($__m) {
      BaseQueryList = $__m.BaseQueryList;
    }],
    execute: function() {
      QueryList = (function($__super) {
        function QueryList() {
          $traceurRuntime.superConstructor(QueryList).apply(this, arguments);
        }
        return ($traceurRuntime.createClass)(QueryList, {
          onChange: function(callback) {
            return $traceurRuntime.superGet(this, QueryList.prototype, "onChange").call(this, callback);
          },
          removeCallback: function(callback) {
            return $traceurRuntime.superGet(this, QueryList.prototype, "removeCallback").call(this, callback);
          }
        }, {}, $__super);
      }(BaseQueryList));
      $__export("QueryList", QueryList);
    }
  };
});
//# sourceMappingURL=query_list.js.map

//# sourceMappingURL=../../../src/core/compiler/query_list.js.map