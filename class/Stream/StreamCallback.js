"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StreamCallback {
    constructor(func, stream, id) {
        this.func = func;
        this.stream = stream;
        this.ID = id;
    }
    /** Returns the result of the function with the argument passed */
    result(data) {
        this.func(data);
    }
    remove() {
        this.stream.removeListenner(this.ID);
    }
    get id() {
        return this.ID;
    }
}
exports.default = StreamCallback;
