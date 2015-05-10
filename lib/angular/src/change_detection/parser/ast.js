System.register(["rtts_assert/rtts_assert", "angular2/src/facade/lang", "angular2/src/facade/collection"], function($__export) {
  "use strict";
  var assert,
      autoConvertAdd,
      isBlank,
      isPresent,
      FunctionWrapper,
      BaseException,
      List,
      Map,
      ListWrapper,
      StringMapWrapper,
      AST,
      EmptyExpr,
      ImplicitReceiver,
      Chain,
      Conditional,
      AccessMember,
      KeyedAccess,
      Pipe,
      LiteralPrimitive,
      LiteralArray,
      LiteralMap,
      Interpolation,
      Binary,
      PrefixNot,
      Assignment,
      MethodCall,
      FunctionCall,
      ASTWithSource,
      TemplateBinding,
      AstVisitor,
      AstTransformer,
      _evalListCache;
  function evalList(context, locals, exps) {
    assert.argumentTypes(context, assert.type.any, locals, assert.type.any, exps, List);
    var length = exps.length;
    if (length > 10) {
      throw new BaseException("Cannot have more than 10 argument");
    }
    var result = _evalListCache[length];
    for (var i = 0; i < length; i++) {
      result[i] = exps[i].eval(context, locals);
    }
    return result;
  }
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      autoConvertAdd = $__m.autoConvertAdd;
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      FunctionWrapper = $__m.FunctionWrapper;
      BaseException = $__m.BaseException;
    }, function($__m) {
      List = $__m.List;
      Map = $__m.Map;
      ListWrapper = $__m.ListWrapper;
      StringMapWrapper = $__m.StringMapWrapper;
    }],
    execute: function() {
      AST = (function() {
        function AST() {}
        return ($traceurRuntime.createClass)(AST, {
          eval: function(context, locals) {
            throw new BaseException("Not supported");
          },
          get isAssignable() {
            return assert.returnType((false), assert.type.boolean);
          },
          assign: function(context, locals, value) {
            throw new BaseException("Not supported");
          },
          visit: function(visitor) {},
          toString: function() {
            return assert.returnType(("AST"), assert.type.string);
          }
        }, {});
      }());
      $__export("AST", AST);
      EmptyExpr = (function($__super) {
        function EmptyExpr() {
          $traceurRuntime.superConstructor(EmptyExpr).apply(this, arguments);
        }
        return ($traceurRuntime.createClass)(EmptyExpr, {
          eval: function(context, locals) {
            return null;
          },
          visit: function(visitor) {}
        }, {}, $__super);
      }(AST));
      $__export("EmptyExpr", EmptyExpr);
      ImplicitReceiver = (function($__super) {
        function ImplicitReceiver() {
          $traceurRuntime.superConstructor(ImplicitReceiver).apply(this, arguments);
        }
        return ($traceurRuntime.createClass)(ImplicitReceiver, {
          eval: function(context, locals) {
            return context;
          },
          visit: function(visitor) {
            return visitor.visitImplicitReceiver(this);
          }
        }, {}, $__super);
      }(AST));
      $__export("ImplicitReceiver", ImplicitReceiver);
      Chain = (function($__super) {
        function Chain(expressions) {
          assert.argumentTypes(expressions, List);
          $traceurRuntime.superConstructor(Chain).call(this);
          this.expressions = expressions;
        }
        return ($traceurRuntime.createClass)(Chain, {
          eval: function(context, locals) {
            var result;
            for (var i = 0; i < this.expressions.length; i++) {
              var last = this.expressions[i].eval(context, locals);
              if (isPresent(last))
                result = last;
            }
            return result;
          },
          visit: function(visitor) {
            return visitor.visitChain(this);
          }
        }, {}, $__super);
      }(AST));
      $__export("Chain", Chain);
      Object.defineProperty(Chain, "parameters", {get: function() {
          return [[List]];
        }});
      Conditional = (function($__super) {
        function Conditional(condition, trueExp, falseExp) {
          assert.argumentTypes(condition, AST, trueExp, AST, falseExp, AST);
          $traceurRuntime.superConstructor(Conditional).call(this);
          this.condition = condition;
          this.trueExp = trueExp;
          this.falseExp = falseExp;
        }
        return ($traceurRuntime.createClass)(Conditional, {
          eval: function(context, locals) {
            if (this.condition.eval(context, locals)) {
              return this.trueExp.eval(context, locals);
            } else {
              return this.falseExp.eval(context, locals);
            }
          },
          visit: function(visitor) {
            return visitor.visitConditional(this);
          }
        }, {}, $__super);
      }(AST));
      $__export("Conditional", Conditional);
      Object.defineProperty(Conditional, "parameters", {get: function() {
          return [[AST], [AST], [AST]];
        }});
      AccessMember = (function($__super) {
        function AccessMember(receiver, name, getter, setter) {
          assert.argumentTypes(receiver, AST, name, assert.type.string, getter, Function, setter, Function);
          $traceurRuntime.superConstructor(AccessMember).call(this);
          this.receiver = receiver;
          this.name = name;
          this.getter = getter;
          this.setter = setter;
        }
        return ($traceurRuntime.createClass)(AccessMember, {
          eval: function(context, locals) {
            if (this.receiver instanceof ImplicitReceiver && isPresent(locals) && locals.contains(this.name)) {
              return locals.get(this.name);
            } else {
              var evaluatedReceiver = this.receiver.eval(context, locals);
              return this.getter(evaluatedReceiver);
            }
          },
          get isAssignable() {
            return assert.returnType((true), assert.type.boolean);
          },
          assign: function(context, locals, value) {
            var evaluatedContext = this.receiver.eval(context, locals);
            if (this.receiver instanceof ImplicitReceiver && isPresent(locals) && locals.contains(this.name)) {
              throw new BaseException(("Cannot reassign a variable binding " + this.name));
            } else {
              return this.setter(evaluatedContext, value);
            }
          },
          visit: function(visitor) {
            return visitor.visitAccessMember(this);
          }
        }, {}, $__super);
      }(AST));
      $__export("AccessMember", AccessMember);
      Object.defineProperty(AccessMember, "parameters", {get: function() {
          return [[AST], [assert.type.string], [Function], [Function]];
        }});
      KeyedAccess = (function($__super) {
        function KeyedAccess(obj, key) {
          assert.argumentTypes(obj, AST, key, AST);
          $traceurRuntime.superConstructor(KeyedAccess).call(this);
          this.obj = obj;
          this.key = key;
        }
        return ($traceurRuntime.createClass)(KeyedAccess, {
          eval: function(context, locals) {
            var obj = this.obj.eval(context, locals);
            var key = this.key.eval(context, locals);
            return obj[key];
          },
          get isAssignable() {
            return assert.returnType((true), assert.type.boolean);
          },
          assign: function(context, locals, value) {
            var obj = this.obj.eval(context, locals);
            var key = this.key.eval(context, locals);
            obj[key] = value;
            return value;
          },
          visit: function(visitor) {
            return visitor.visitKeyedAccess(this);
          }
        }, {}, $__super);
      }(AST));
      $__export("KeyedAccess", KeyedAccess);
      Object.defineProperty(KeyedAccess, "parameters", {get: function() {
          return [[AST], [AST]];
        }});
      Pipe = (function($__super) {
        function Pipe(exp, name, args, inBinding) {
          assert.argumentTypes(exp, AST, name, assert.type.string, args, List, inBinding, assert.type.boolean);
          $traceurRuntime.superConstructor(Pipe).call(this);
          this.exp = exp;
          this.name = name;
          this.args = args;
          this.inBinding = inBinding;
        }
        return ($traceurRuntime.createClass)(Pipe, {visit: function(visitor) {
            return visitor.visitPipe(this);
          }}, {}, $__super);
      }(AST));
      $__export("Pipe", Pipe);
      Object.defineProperty(Pipe, "parameters", {get: function() {
          return [[AST], [assert.type.string], [List], [assert.type.boolean]];
        }});
      LiteralPrimitive = (function($__super) {
        function LiteralPrimitive(value) {
          $traceurRuntime.superConstructor(LiteralPrimitive).call(this);
          this.value = value;
        }
        return ($traceurRuntime.createClass)(LiteralPrimitive, {
          eval: function(context, locals) {
            return this.value;
          },
          visit: function(visitor) {
            return visitor.visitLiteralPrimitive(this);
          }
        }, {}, $__super);
      }(AST));
      $__export("LiteralPrimitive", LiteralPrimitive);
      LiteralArray = (function($__super) {
        function LiteralArray(expressions) {
          assert.argumentTypes(expressions, List);
          $traceurRuntime.superConstructor(LiteralArray).call(this);
          this.expressions = expressions;
        }
        return ($traceurRuntime.createClass)(LiteralArray, {
          eval: function(context, locals) {
            return ListWrapper.map(this.expressions, (function(e) {
              return e.eval(context, locals);
            }));
          },
          visit: function(visitor) {
            return visitor.visitLiteralArray(this);
          }
        }, {}, $__super);
      }(AST));
      $__export("LiteralArray", LiteralArray);
      Object.defineProperty(LiteralArray, "parameters", {get: function() {
          return [[List]];
        }});
      LiteralMap = (function($__super) {
        function LiteralMap(keys, values) {
          assert.argumentTypes(keys, List, values, List);
          $traceurRuntime.superConstructor(LiteralMap).call(this);
          this.keys = keys;
          this.values = values;
        }
        return ($traceurRuntime.createClass)(LiteralMap, {
          eval: function(context, locals) {
            var res = StringMapWrapper.create();
            for (var i = 0; i < this.keys.length; ++i) {
              StringMapWrapper.set(res, this.keys[i], this.values[i].eval(context, locals));
            }
            return res;
          },
          visit: function(visitor) {
            return visitor.visitLiteralMap(this);
          }
        }, {}, $__super);
      }(AST));
      $__export("LiteralMap", LiteralMap);
      Object.defineProperty(LiteralMap, "parameters", {get: function() {
          return [[List], [List]];
        }});
      Interpolation = (function($__super) {
        function Interpolation(strings, expressions) {
          assert.argumentTypes(strings, List, expressions, List);
          $traceurRuntime.superConstructor(Interpolation).call(this);
          this.strings = strings;
          this.expressions = expressions;
        }
        return ($traceurRuntime.createClass)(Interpolation, {
          eval: function(context, locals) {
            throw new BaseException("evaluating an Interpolation is not supported");
          },
          visit: function(visitor) {
            visitor.visitInterpolation(this);
          }
        }, {}, $__super);
      }(AST));
      $__export("Interpolation", Interpolation);
      Object.defineProperty(Interpolation, "parameters", {get: function() {
          return [[List], [List]];
        }});
      Binary = (function($__super) {
        function Binary(operation, left, right) {
          assert.argumentTypes(operation, assert.type.string, left, AST, right, AST);
          $traceurRuntime.superConstructor(Binary).call(this);
          this.operation = operation;
          this.left = left;
          this.right = right;
        }
        return ($traceurRuntime.createClass)(Binary, {
          eval: function(context, locals) {
            var left = this.left.eval(context, locals);
            switch (this.operation) {
              case '&&':
                return left && this.right.eval(context, locals);
              case '||':
                return left || this.right.eval(context, locals);
            }
            var right = this.right.eval(context, locals);
            switch (this.operation) {
              case '+':
                return left + right;
              case '-':
                return left - right;
              case '*':
                return left * right;
              case '/':
                return left / right;
              case '%':
                return left % right;
              case '==':
                return left == right;
              case '!=':
                return left != right;
              case '===':
                return left === right;
              case '!==':
                return left !== right;
              case '<':
                return left < right;
              case '>':
                return left > right;
              case '<=':
                return left <= right;
              case '>=':
                return left >= right;
              case '^':
                return left ^ right;
              case '&':
                return left & right;
            }
            throw 'Internal error [$operation] not handled';
          },
          visit: function(visitor) {
            return visitor.visitBinary(this);
          }
        }, {}, $__super);
      }(AST));
      $__export("Binary", Binary);
      Object.defineProperty(Binary, "parameters", {get: function() {
          return [[assert.type.string], [AST], [AST]];
        }});
      PrefixNot = (function($__super) {
        function PrefixNot(expression) {
          assert.argumentTypes(expression, AST);
          $traceurRuntime.superConstructor(PrefixNot).call(this);
          this.expression = expression;
        }
        return ($traceurRuntime.createClass)(PrefixNot, {
          eval: function(context, locals) {
            return !this.expression.eval(context, locals);
          },
          visit: function(visitor) {
            return visitor.visitPrefixNot(this);
          }
        }, {}, $__super);
      }(AST));
      $__export("PrefixNot", PrefixNot);
      Object.defineProperty(PrefixNot, "parameters", {get: function() {
          return [[AST]];
        }});
      Assignment = (function($__super) {
        function Assignment(target, value) {
          assert.argumentTypes(target, AST, value, AST);
          $traceurRuntime.superConstructor(Assignment).call(this);
          this.target = target;
          this.value = value;
        }
        return ($traceurRuntime.createClass)(Assignment, {
          eval: function(context, locals) {
            return this.target.assign(context, locals, this.value.eval(context, locals));
          },
          visit: function(visitor) {
            return visitor.visitAssignment(this);
          }
        }, {}, $__super);
      }(AST));
      $__export("Assignment", Assignment);
      Object.defineProperty(Assignment, "parameters", {get: function() {
          return [[AST], [AST]];
        }});
      MethodCall = (function($__super) {
        function MethodCall(receiver, name, fn, args) {
          assert.argumentTypes(receiver, AST, name, assert.type.string, fn, Function, args, List);
          $traceurRuntime.superConstructor(MethodCall).call(this);
          this.receiver = receiver;
          this.fn = fn;
          this.args = args;
          this.name = name;
        }
        return ($traceurRuntime.createClass)(MethodCall, {
          eval: function(context, locals) {
            var evaluatedArgs = evalList(context, locals, this.args);
            if (this.receiver instanceof ImplicitReceiver && isPresent(locals) && locals.contains(this.name)) {
              var fn = locals.get(this.name);
              return FunctionWrapper.apply(fn, evaluatedArgs);
            } else {
              var evaluatedReceiver = this.receiver.eval(context, locals);
              return this.fn(evaluatedReceiver, evaluatedArgs);
            }
          },
          visit: function(visitor) {
            return visitor.visitMethodCall(this);
          }
        }, {}, $__super);
      }(AST));
      $__export("MethodCall", MethodCall);
      Object.defineProperty(MethodCall, "parameters", {get: function() {
          return [[AST], [assert.type.string], [Function], [List]];
        }});
      FunctionCall = (function($__super) {
        function FunctionCall(target, args) {
          assert.argumentTypes(target, AST, args, List);
          $traceurRuntime.superConstructor(FunctionCall).call(this);
          this.target = target;
          this.args = args;
        }
        return ($traceurRuntime.createClass)(FunctionCall, {
          eval: function(context, locals) {
            var obj = this.target.eval(context, locals);
            if (!(obj instanceof Function)) {
              throw new BaseException((obj + " is not a function"));
            }
            return FunctionWrapper.apply(obj, evalList(context, locals, this.args));
          },
          visit: function(visitor) {
            return visitor.visitFunctionCall(this);
          }
        }, {}, $__super);
      }(AST));
      $__export("FunctionCall", FunctionCall);
      Object.defineProperty(FunctionCall, "parameters", {get: function() {
          return [[AST], [List]];
        }});
      ASTWithSource = (function($__super) {
        function ASTWithSource(ast, source, location) {
          assert.argumentTypes(ast, AST, source, assert.type.string, location, assert.type.string);
          $traceurRuntime.superConstructor(ASTWithSource).call(this);
          this.source = source;
          this.location = location;
          this.ast = ast;
        }
        return ($traceurRuntime.createClass)(ASTWithSource, {
          eval: function(context, locals) {
            return this.ast.eval(context, locals);
          },
          get isAssignable() {
            return assert.returnType((this.ast.isAssignable), assert.type.boolean);
          },
          assign: function(context, locals, value) {
            return this.ast.assign(context, locals, value);
          },
          visit: function(visitor) {
            return this.ast.visit(visitor);
          },
          toString: function() {
            return assert.returnType(((this.source + " in " + this.location)), assert.type.string);
          }
        }, {}, $__super);
      }(AST));
      $__export("ASTWithSource", ASTWithSource);
      Object.defineProperty(ASTWithSource, "parameters", {get: function() {
          return [[AST], [assert.type.string], [assert.type.string]];
        }});
      TemplateBinding = (function() {
        function TemplateBinding(key, keyIsVar, name, expression) {
          assert.argumentTypes(key, assert.type.string, keyIsVar, assert.type.boolean, name, assert.type.string, expression, ASTWithSource);
          this.key = key;
          this.keyIsVar = keyIsVar;
          this.name = name;
          this.expression = expression;
        }
        return ($traceurRuntime.createClass)(TemplateBinding, {}, {});
      }());
      $__export("TemplateBinding", TemplateBinding);
      Object.defineProperty(TemplateBinding, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.boolean], [assert.type.string], [ASTWithSource]];
        }});
      AstVisitor = (function() {
        function AstVisitor() {}
        return ($traceurRuntime.createClass)(AstVisitor, {
          visitAccessMember: function(ast) {
            assert.argumentTypes(ast, AccessMember);
          },
          visitAssignment: function(ast) {
            assert.argumentTypes(ast, Assignment);
          },
          visitBinary: function(ast) {
            assert.argumentTypes(ast, Binary);
          },
          visitChain: function(ast) {
            assert.argumentTypes(ast, Chain);
          },
          visitConditional: function(ast) {
            assert.argumentTypes(ast, Conditional);
          },
          visitPipe: function(ast) {
            assert.argumentTypes(ast, Pipe);
          },
          visitFunctionCall: function(ast) {
            assert.argumentTypes(ast, FunctionCall);
          },
          visitImplicitReceiver: function(ast) {
            assert.argumentTypes(ast, ImplicitReceiver);
          },
          visitKeyedAccess: function(ast) {
            assert.argumentTypes(ast, KeyedAccess);
          },
          visitLiteralArray: function(ast) {
            assert.argumentTypes(ast, LiteralArray);
          },
          visitLiteralMap: function(ast) {
            assert.argumentTypes(ast, LiteralMap);
          },
          visitLiteralPrimitive: function(ast) {
            assert.argumentTypes(ast, LiteralPrimitive);
          },
          visitMethodCall: function(ast) {
            assert.argumentTypes(ast, MethodCall);
          },
          visitPrefixNot: function(ast) {
            assert.argumentTypes(ast, PrefixNot);
          }
        }, {});
      }());
      $__export("AstVisitor", AstVisitor);
      Object.defineProperty(AstVisitor.prototype.visitAccessMember, "parameters", {get: function() {
          return [[AccessMember]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitAssignment, "parameters", {get: function() {
          return [[Assignment]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitBinary, "parameters", {get: function() {
          return [[Binary]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitChain, "parameters", {get: function() {
          return [[Chain]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitConditional, "parameters", {get: function() {
          return [[Conditional]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitPipe, "parameters", {get: function() {
          return [[Pipe]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitFunctionCall, "parameters", {get: function() {
          return [[FunctionCall]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitImplicitReceiver, "parameters", {get: function() {
          return [[ImplicitReceiver]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitKeyedAccess, "parameters", {get: function() {
          return [[KeyedAccess]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitLiteralArray, "parameters", {get: function() {
          return [[LiteralArray]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitLiteralMap, "parameters", {get: function() {
          return [[LiteralMap]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitLiteralPrimitive, "parameters", {get: function() {
          return [[LiteralPrimitive]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitMethodCall, "parameters", {get: function() {
          return [[MethodCall]];
        }});
      Object.defineProperty(AstVisitor.prototype.visitPrefixNot, "parameters", {get: function() {
          return [[PrefixNot]];
        }});
      AstTransformer = (function() {
        function AstTransformer() {}
        return ($traceurRuntime.createClass)(AstTransformer, {
          visitImplicitReceiver: function(ast) {
            assert.argumentTypes(ast, ImplicitReceiver);
            return ast;
          },
          visitInterpolation: function(ast) {
            assert.argumentTypes(ast, Interpolation);
            return new Interpolation(ast.strings, this.visitAll(ast.expressions));
          },
          visitLiteralPrimitive: function(ast) {
            assert.argumentTypes(ast, LiteralPrimitive);
            return new LiteralPrimitive(ast.value);
          },
          visitAccessMember: function(ast) {
            assert.argumentTypes(ast, AccessMember);
            return new AccessMember(ast.receiver.visit(this), ast.name, ast.getter, ast.setter);
          },
          visitMethodCall: function(ast) {
            assert.argumentTypes(ast, MethodCall);
            return new MethodCall(ast.receiver.visit(this), ast.name, ast.fn, this.visitAll(ast.args));
          },
          visitFunctionCall: function(ast) {
            assert.argumentTypes(ast, FunctionCall);
            return new FunctionCall(ast.target.visit(this), this.visitAll(ast.args));
          },
          visitLiteralArray: function(ast) {
            assert.argumentTypes(ast, LiteralArray);
            return new LiteralArray(this.visitAll(ast.expressions));
          },
          visitLiteralMap: function(ast) {
            assert.argumentTypes(ast, LiteralMap);
            return new LiteralMap(ast.keys, this.visitAll(ast.values));
          },
          visitBinary: function(ast) {
            assert.argumentTypes(ast, Binary);
            return new Binary(ast.operation, ast.left.visit(this), ast.right.visit(this));
          },
          visitPrefixNot: function(ast) {
            assert.argumentTypes(ast, PrefixNot);
            return new PrefixNot(ast.expression.visit(this));
          },
          visitConditional: function(ast) {
            assert.argumentTypes(ast, Conditional);
            return new Conditional(ast.condition.visit(this), ast.trueExp.visit(this), ast.falseExp.visit(this));
          },
          visitPipe: function(ast) {
            assert.argumentTypes(ast, Pipe);
            return new Pipe(ast.exp.visit(this), ast.name, this.visitAll(ast.args), ast.inBinding);
          },
          visitKeyedAccess: function(ast) {
            assert.argumentTypes(ast, KeyedAccess);
            return new KeyedAccess(ast.obj.visit(this), ast.key.visit(this));
          },
          visitAll: function(asts) {
            assert.argumentTypes(asts, List);
            var res = ListWrapper.createFixedSize(asts.length);
            for (var i = 0; i < asts.length; ++i) {
              res[i] = asts[i].visit(this);
            }
            return res;
          }
        }, {});
      }());
      $__export("AstTransformer", AstTransformer);
      Object.defineProperty(AstTransformer.prototype.visitImplicitReceiver, "parameters", {get: function() {
          return [[ImplicitReceiver]];
        }});
      Object.defineProperty(AstTransformer.prototype.visitInterpolation, "parameters", {get: function() {
          return [[Interpolation]];
        }});
      Object.defineProperty(AstTransformer.prototype.visitLiteralPrimitive, "parameters", {get: function() {
          return [[LiteralPrimitive]];
        }});
      Object.defineProperty(AstTransformer.prototype.visitAccessMember, "parameters", {get: function() {
          return [[AccessMember]];
        }});
      Object.defineProperty(AstTransformer.prototype.visitMethodCall, "parameters", {get: function() {
          return [[MethodCall]];
        }});
      Object.defineProperty(AstTransformer.prototype.visitFunctionCall, "parameters", {get: function() {
          return [[FunctionCall]];
        }});
      Object.defineProperty(AstTransformer.prototype.visitLiteralArray, "parameters", {get: function() {
          return [[LiteralArray]];
        }});
      Object.defineProperty(AstTransformer.prototype.visitLiteralMap, "parameters", {get: function() {
          return [[LiteralMap]];
        }});
      Object.defineProperty(AstTransformer.prototype.visitBinary, "parameters", {get: function() {
          return [[Binary]];
        }});
      Object.defineProperty(AstTransformer.prototype.visitPrefixNot, "parameters", {get: function() {
          return [[PrefixNot]];
        }});
      Object.defineProperty(AstTransformer.prototype.visitConditional, "parameters", {get: function() {
          return [[Conditional]];
        }});
      Object.defineProperty(AstTransformer.prototype.visitPipe, "parameters", {get: function() {
          return [[Pipe]];
        }});
      Object.defineProperty(AstTransformer.prototype.visitKeyedAccess, "parameters", {get: function() {
          return [[KeyedAccess]];
        }});
      Object.defineProperty(AstTransformer.prototype.visitAll, "parameters", {get: function() {
          return [[List]];
        }});
      _evalListCache = [[], [0], [0, 0], [0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]];
      Object.defineProperty(evalList, "parameters", {get: function() {
          return [[], [], [List]];
        }});
    }
  };
});
//# sourceMappingURL=ast.js.map

//# sourceMappingURL=../../../src/change_detection/parser/ast.js.map