"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const StreamCallback_1 = require("./StreamCallback");
/**
 * You can send data to the stream and create
 * listeners that will respond to incoming data
 */
class Stream {
    constructor() {
        this.callBackStack = [];
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
        this.callBackStack.push(new StreamCallback_1.default(callback));
    }
    /**
     * Performs callbacks of current listeners
     */
    _runCallbacks(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                for (const key in this.callBackStack) {
                    if ((this.callBackStack[key].result(data)) === false) {
                        this.callBackStack[key] = null;
                    }
                }
                this.callBackStack = this.callBackStack.filter((func) => func != null);
                resolve();
            });
        });
    }
}
exports.default = Stream;
