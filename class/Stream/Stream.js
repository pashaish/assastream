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
class Stream {
    constructor() {
        this.callBackStack = [];
    }
    add(data) {
        this._runCallbacks(data);
    }
    listen(callback) {
        this.callBackStack.push(new StreamCallback_1.default(callback));
    }
    _runCallbacks(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                // tslint:disable-next-line:forin
                for (const key in this.callBackStack) {
                    const result = yield this.callBackStack[key].result(data);
                    if (result === false) {
                        this.callBackStack[key] = null;
                    }
                }
                this.callBackStack = this.callBackStack.filter((func) => func != null);
                resolve();
            }));
        });
    }
}
exports.default = Stream;
