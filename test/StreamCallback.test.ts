
import { expect } from "chai";
import StreamCallback from "./../class/Stream/StreamCallback";
describe("C: StreamCallback", () => {
    it("M: result",  () => {
        let result: string = "";
        const func = (data: string): boolean => {
            result = data;
            return false;
        };
        const callback = new StreamCallback<string>(func, 0);
        callback.result("Hello\n\r\lWorld");
        expect(result).equal("Hello\n\r\lWorld");
    });
});
