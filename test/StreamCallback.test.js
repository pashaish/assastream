"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Stream_1 = require("../src/Stream/Stream");
const StreamCallback_1 = require("../src/StreamCallback/StreamCallback");
describe("C: StreamCallback", () => {
    it("M: result", () => {
        let result = "";
        const func = (data) => {
            result = data;
            return false;
        };
        const callback = new StreamCallback_1.default(func, new Stream_1.default(), 0);
        callback.result("Hello\n\r\lWorld");
        chai_1.expect(result).equal("Hello\n\r\lWorld");
    });
});
