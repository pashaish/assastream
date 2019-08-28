"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StreamCallback {
    constructor(func) {
        this.func = func;
    }
    /** Returns the result of the function with the argument passed */
    result(data) {
        const result = this.func(data);
        if (result === true) {
            return true;
        }
        return false;
    }
}
exports.default = StreamCallback;
