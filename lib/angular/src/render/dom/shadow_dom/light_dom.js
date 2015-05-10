System.register(["rtts_assert/rtts_assert", "angular2/src/dom/dom_adapter", "angular2/src/facade/collection", "angular2/src/facade/lang", "../view/view", "./content_tag"], function($__export) {
  "use strict";
  var assert,
      DOM,
      List,
      ListWrapper,
      isBlank,
      isPresent,
      viewModule,
      Content,
      DestinationLightDom,
      _Root,
      LightDom;
  function redistributeNodes(contents, nodes) {
    for (var i = 0; i < contents.length; ++i) {
      var content = contents[i];
      var select = content.select;
      if (select.length === 0) {
        content.insert(ListWrapper.clone(nodes));
        ListWrapper.clear(nodes);
      } else {
        var matchSelector = (function(n) {
          return DOM.elementMatches(n, select);
        });
        var matchingNodes = ListWrapper.filter(nodes, matchSelector);
        content.insert(matchingNodes);
        ListWrapper.removeAll(nodes, matchingNodes);
      }
    }
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (isPresent(node.parentNode)) {
        DOM.remove(nodes[i]);
      }
    }
  }
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
    }, function($__m) {
      viewModule = $__m;
    }, function($__m) {
      Content = $__m.Content;
    }],
    execute: function() {
      DestinationLightDom = (function() {
        function DestinationLightDom() {}
        return ($traceurRuntime.createClass)(DestinationLightDom, {}, {});
      }());
      $__export("DestinationLightDom", DestinationLightDom);
      _Root = (function() {
        function _Root(node, boundElementIndex) {
          this.node = node;
          this.boundElementIndex = boundElementIndex;
        }
        return ($traceurRuntime.createClass)(_Root, {}, {});
      }());
      LightDom = (function() {
        function LightDom(lightDomView, shadowDomView, element) {
          assert.argumentTypes(lightDomView, viewModule.RenderView, shadowDomView, viewModule.RenderView, element, assert.type.any);
          this.lightDomView = lightDomView;
          this.shadowDomView = shadowDomView;
          this.nodes = DOM.childNodesAsList(element);
          this.roots = null;
        }
        return ($traceurRuntime.createClass)(LightDom, {
          redistribute: function() {
            redistributeNodes(this.contentTags(), this.expandedDomNodes());
          },
          contentTags: function() {
            return assert.returnType((this._collectAllContentTags(this.shadowDomView, [])), assert.genericType(List, Content));
          },
          _collectAllContentTags: function(view, acc) {
            var $__0 = this;
            assert.argumentTypes(view, viewModule.RenderView, acc, assert.genericType(List, Content));
            var contentTags = view.contentTags;
            var vcs = view.viewContainers;
            for (var i = 0; i < vcs.length; i++) {
              var vc = vcs[i];
              var contentTag = contentTags[i];
              if (isPresent(contentTag)) {
                ListWrapper.push(acc, contentTag);
              }
              if (isPresent(vc)) {
                ListWrapper.forEach(vc.contentTagContainers(), (function(view) {
                  $__0._collectAllContentTags(view, acc);
                }));
              }
            }
            return assert.returnType((acc), assert.genericType(List, Content));
          },
          expandedDomNodes: function() {
            var res = [];
            var roots = this._roots();
            for (var i = 0; i < roots.length; ++i) {
              var root = roots[i];
              if (isPresent(root.boundElementIndex)) {
                var vc = this.lightDomView.viewContainers[root.boundElementIndex];
                var content = this.lightDomView.contentTags[root.boundElementIndex];
                if (isPresent(vc)) {
                  res = ListWrapper.concat(res, vc.nodes());
                } else if (isPresent(content)) {
                  res = ListWrapper.concat(res, content.nodes());
                } else {
                  ListWrapper.push(res, root.node);
                }
              } else {
                ListWrapper.push(res, root.node);
              }
            }
            return assert.returnType((res), List);
          },
          _roots: function() {
            if (isPresent(this.roots))
              return this.roots;
            var boundElements = this.lightDomView.boundElements;
            this.roots = ListWrapper.map(this.nodes, (function(n) {
              var boundElementIndex = null;
              for (var i = 0; i < boundElements.length; i++) {
                var boundEl = boundElements[i];
                if (isPresent(boundEl) && boundEl === n) {
                  boundElementIndex = i;
                  break;
                }
              }
              return new _Root(n, boundElementIndex);
            }));
            return this.roots;
          }
        }, {});
      }());
      $__export("LightDom", LightDom);
      Object.defineProperty(LightDom, "parameters", {get: function() {
          return [[viewModule.RenderView], [viewModule.RenderView], []];
        }});
      Object.defineProperty(LightDom.prototype._collectAllContentTags, "parameters", {get: function() {
          return [[viewModule.RenderView], [assert.genericType(List, Content)]];
        }});
      Object.defineProperty(redistributeNodes, "parameters", {get: function() {
          return [[assert.genericType(List, Content)], [List]];
        }});
    }
  };
});
//# sourceMappingURL=light_dom.js.map

//# sourceMappingURL=../../../../src/render/dom/shadow_dom/light_dom.js.map