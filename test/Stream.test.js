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
const chai_1 = require("chai");
const Stream_1 = require("../class/Stream/Stream");
const stream = new Stream_1.default();
describe("C: Stream", () => {
    describe("M: add", () => {
        it("A: listenner return true", () => __awaiter(this, void 0, void 0, function* () {
            let result;
            stream.listen((data) => {
                result = data;
                return true;
            });
            stream.add(5);
            chai_1.expect(result).equal(5);
            stream.add(0, 2.25);
            chai_1.expect(result).equal(2.25);
        }));
        it("A: listenner return false", () => __awaiter(this, void 0, void 0, function* () {
            let result;
            stream.listen((data) => {
                result = data;
                return false;
            });
            stream.add(-265, -21);
            chai_1.expect(result).equal(-265);
            stream.add(11, 10.05);
            chai_1.expect(result).equal(-265);
        }));
    });
});
