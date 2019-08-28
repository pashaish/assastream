"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const StreamCallback_1 = require("./../class/Stream/StreamCallback");
describe("C: StreamCallback", () => {
    it("M: result", () => {
        let result = "";
        const func = (data) => {
            result = data;
            return false;
        };
        const callback = new StreamCallback_1.default(func);
        callback.result("Hello\n\r\lWorld");
        chai_1.expect(result).equal("Hello\n\r\lWorld");
    });
});
