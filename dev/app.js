System.register(["angular2/angular2"], function($__export) {
  "use strict";
  var Component,
      View,
      bootstrap,
      MyAppComponent;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      bootstrap = $__m.bootstrap;
    }],
    execute: function() {
      MyAppComponent = (function() {
        function MyAppComponent() {
          this.name = 'Alice';
        }
        return ($traceurRuntime.createClass)(MyAppComponent, {
          get name() {
            return assert.returnType((this.$__0), $traceurRuntime.type.string);
          },
          set name(value) {
            assert.argumentTypes(value, $traceurRuntime.type.string);
            this.$__0 = value;
          }
        }, {});
      }());
      Object.defineProperty(MyAppComponent, "annotations", {get: function() {
          return [new Component({selector: 'my-app'}), new View({template: '<h1>Hello {{ name }}</h1>'})];
        }});
      $__export('default', (function() {
        bootstrap(MyAppComponent);
      }));
    }
  };
});