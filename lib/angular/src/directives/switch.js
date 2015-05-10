System.register(["rtts_assert/rtts_assert", "angular2/src/core/annotations/annotations", "angular2/src/core/compiler/view_container_ref", "angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/core/annotations/visibility"], function($__export) {
  "use strict";
  var assert,
      Decorator,
      Viewport,
      ViewContainerRef,
      isPresent,
      isBlank,
      normalizeBlank,
      ListWrapper,
      List,
      MapWrapper,
      Map,
      Parent,
      Switch,
      SwitchWhen,
      SwitchDefault,
      _whenDefault;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Decorator = $__m.Decorator;
      Viewport = $__m.Viewport;
    }, function($__m) {
      ViewContainerRef = $__m.ViewContainerRef;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      normalizeBlank = $__m.normalizeBlank;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      List = $__m.List;
      MapWrapper = $__m.MapWrapper;
      Map = $__m.Map;
    }, function($__m) {
      Parent = $__m.Parent;
    }],
    execute: function() {
      Switch = (function() {
        function Switch() {
          this._valueViewContainers = MapWrapper.create();
          this._activeViewContainers = ListWrapper.create();
          this._useDefault = false;
        }
        return ($traceurRuntime.createClass)(Switch, {
          set value(value) {
            this._emptyAllActiveViewContainers();
            this._useDefault = false;
            var containers = MapWrapper.get(this._valueViewContainers, value);
            if (isBlank(containers)) {
              this._useDefault = true;
              containers = normalizeBlank(MapWrapper.get(this._valueViewContainers, _whenDefault));
            }
            this._activateViewContainers(containers);
            this._switchValue = value;
          },
          _onWhenValueChanged: function(oldWhen, newWhen, viewContainer) {
            assert.argumentTypes(oldWhen, assert.type.any, newWhen, assert.type.any, viewContainer, ViewContainerRef);
            this._deregisterViewContainer(oldWhen, viewContainer);
            this._registerViewContainer(newWhen, viewContainer);
            if (oldWhen === this._switchValue) {
              viewContainer.remove();
              ListWrapper.remove(this._activeViewContainers, viewContainer);
            } else if (newWhen === this._switchValue) {
              if (this._useDefault) {
                this._useDefault = false;
                this._emptyAllActiveViewContainers();
              }
              viewContainer.create();
              ListWrapper.push(this._activeViewContainers, viewContainer);
            }
            if (this._activeViewContainers.length === 0 && !this._useDefault) {
              this._useDefault = true;
              this._activateViewContainers(MapWrapper.get(this._valueViewContainers, _whenDefault));
            }
          },
          _emptyAllActiveViewContainers: function() {
            var activeContainers = this._activeViewContainers;
            for (var i = 0; i < activeContainers.length; i++) {
              activeContainers[i].remove();
            }
            this._activeViewContainers = ListWrapper.create();
          },
          _activateViewContainers: function(containers) {
            assert.argumentTypes(containers, assert.genericType(List, ViewContainerRef));
            if (isPresent(containers)) {
              for (var i = 0; i < containers.length; i++) {
                containers[i].create();
              }
              this._activeViewContainers = containers;
            }
          },
          _registerViewContainer: function(value, container) {
            assert.argumentTypes(value, assert.type.any, container, ViewContainerRef);
            var containers = MapWrapper.get(this._valueViewContainers, value);
            if (isBlank(containers)) {
              containers = ListWrapper.create();
              MapWrapper.set(this._valueViewContainers, value, containers);
            }
            ListWrapper.push(containers, container);
          },
          _deregisterViewContainer: function(value, container) {
            assert.argumentTypes(value, assert.type.any, container, ViewContainerRef);
            if (value == _whenDefault)
              return ;
            var containers = MapWrapper.get(this._valueViewContainers, value);
            if (containers.length == 1) {
              MapWrapper.delete(this._valueViewContainers, value);
            } else {
              ListWrapper.remove(containers, container);
            }
          }
        }, {});
      }());
      $__export("Switch", Switch);
      Object.defineProperty(Switch, "annotations", {get: function() {
          return [new Decorator({
            selector: '[switch]',
            properties: {'value': 'switch'}
          })];
        }});
      Object.defineProperty(Switch.prototype._onWhenValueChanged, "parameters", {get: function() {
          return [[], [], [ViewContainerRef]];
        }});
      Object.defineProperty(Switch.prototype._activateViewContainers, "parameters", {get: function() {
          return [[assert.genericType(List, ViewContainerRef)]];
        }});
      Object.defineProperty(Switch.prototype._registerViewContainer, "parameters", {get: function() {
          return [[], [ViewContainerRef]];
        }});
      Object.defineProperty(Switch.prototype._deregisterViewContainer, "parameters", {get: function() {
          return [[], [ViewContainerRef]];
        }});
      SwitchWhen = (function() {
        function SwitchWhen(viewContainer, sswitch) {
          assert.argumentTypes(viewContainer, ViewContainerRef, sswitch, Switch);
          this._value = _whenDefault;
          this._switch = sswitch;
          this._viewContainer = viewContainer;
        }
        return ($traceurRuntime.createClass)(SwitchWhen, {set when(value) {
            this._switch._onWhenValueChanged(this._value, value, this._viewContainer);
            this._value = value;
          }}, {});
      }());
      $__export("SwitchWhen", SwitchWhen);
      Object.defineProperty(SwitchWhen, "annotations", {get: function() {
          return [new Viewport({
            selector: '[switch-when]',
            properties: {'when': 'switch-when'}
          })];
        }});
      Object.defineProperty(SwitchWhen, "parameters", {get: function() {
          return [[ViewContainerRef], [Switch, new Parent()]];
        }});
      SwitchDefault = (function() {
        function SwitchDefault(viewContainer, sswitch) {
          assert.argumentTypes(viewContainer, ViewContainerRef, sswitch, Switch);
          sswitch._registerViewContainer(_whenDefault, viewContainer);
        }
        return ($traceurRuntime.createClass)(SwitchDefault, {}, {});
      }());
      $__export("SwitchDefault", SwitchDefault);
      Object.defineProperty(SwitchDefault, "annotations", {get: function() {
          return [new Viewport({selector: '[switch-default]'})];
        }});
      Object.defineProperty(SwitchDefault, "parameters", {get: function() {
          return [[ViewContainerRef], [Switch, new Parent()]];
        }});
      _whenDefault = new Object();
    }
  };
});
//# sourceMappingURL=switch.js.map

//# sourceMappingURL=../../src/directives/switch.js.map