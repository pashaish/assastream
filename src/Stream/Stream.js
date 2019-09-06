"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const StreamCallback_1 = require("../StreamCallback/StreamCallback");
/**
 * You can send data to the stream and create
 * listeners that will respond to incoming data
 */
class default_1 {
    constructor() {
        this.callbackStack = [];
    }
    /**
     * Sends data to a stream
     */
    add(...data) {
        for (const dataUnit of data) {
            this._runCallbacks(dataUnit);
        }
    }
    /**
     * Adds a listener to the stream.
     * If the listener returns false,
     * then the listener will be deleted
     */
    listen(callback) {
        const streamCallback = new StreamCallback_1.default(callback, this, this.callbackStack.length);
        this.callbackStack.push(streamCallback);
        return streamCallback;
    }
    removeListenner(id) {
        if (this.callbackStack[id] != null) {
            this.callbackStack[id] = null;
            this.callbackStack = this.callbackStack.filter((func) => func !== null);
            this.callbackStack = this.callbackStack.map((func, index) => {
                func.ID = index;
                return func;
            });
            return true;
        }
        return false;
    }
    /**
     * Performs callbacks of current listeners
     */
    _runCallbacks(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                // tslint:disable-next-line:forin
                for (const key in this.callbackStack) {
                    this.callbackStack[key].result(data);
                }
                resolve();
            });
        });
    }
}
exports.default = default_1;
