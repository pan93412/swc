// @target: es2019
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _class_private_field_init from "@swc/helpers/src/_class_private_field_init.mjs";
import _class_private_field_set from "@swc/helpers/src/_class_private_field_set.mjs";
var _foo = /*#__PURE__*/ new WeakMap();
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        _class_call_check(this, C);
        _class_private_field_init(this, _foo, {
            get: void 0,
            set: set_foo
        });
    }
    var _proto = C.prototype;
    _proto.bar = function bar() {
        var x = _class_private_field_set(this, _foo, 42 * 2);
        console.log(x); // 84
    };
    return C;
}();
function set_foo(a) {}
new C().bar();
