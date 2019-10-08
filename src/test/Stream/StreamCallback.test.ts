
import { expect } from "chai";
import Stream from "../../Stream/Stream";
import StreamCallback from "../../Stream/StreamCallback";

describe("C: StreamCallback", () => {
    it("M/A: result",  () => {
        let result: string = "";
        const func = (data: string): boolean => {
            result = data;
            return false;
        };
        const callback = new StreamCallback<string>(func, new Stream<string>(), 0);
        callback.result("Hello\n\r\lWorld");
        expect(result).equal("Hello\n\r\lWorld");
    });
});
