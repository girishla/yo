"use strict";
var SimpleSet = (function () {
    function SimpleSet() {
        this.objects = [];
    }
    SimpleSet.prototype.indexOf = function (object) {
        return this.objects.indexOf(object);
    };
    SimpleSet.prototype.add = function (object) {
        var idx = this.indexOf(object);
        if (idx == -1) {
            this.objects.push(object);
        }
    };
    SimpleSet.prototype.remove = function (object) {
        var idx = this.indexOf(object);
        if (idx > -1) {
            this.objects.splice(idx, 1);
        }
    };
    return SimpleSet;
}());
exports.SimpleSet = SimpleSet;
