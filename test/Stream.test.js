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
describe("Stream Add ", () => {
    it("More Data", () => __awaiter(this, void 0, void 0, function* () {
        let result;
        stream.listen((data) => __awaiter(this, void 0, void 0, function* () {
            result = data;
        }));
        stream.add(5);
        chai_1.expect(result).equal(5);
        stream.add(212);
        chai_1.expect(result).equal(212);
        stream.add(63);
        chai_1.expect(result).equal(63);
    }));
    it("Post first 'add' return false", () => __awaiter(this, void 0, void 0, function* () {
        let result;
        stream.listen((data) => __awaiter(this, void 0, void 0, function* () {
            result = data;
            return false;
        }));
        stream.add(265);
        chai_1.expect(result).equal(265);
        yield awaiter(5);
        stream.add(11);
        chai_1.expect(result).equal(265);
    }));
});
const awaiter = (time) => __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => {
            resolve();
        }, time);
    });
});
