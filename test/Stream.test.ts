import { expect } from "chai";
import Stream from "../class/Stream/Stream";

const stream = new Stream<number>();
describe("C: Stream", () => {
  describe("M: add", () => {
    it("A: listenner return true", async () => {
      let result: number;
      stream.listen((data) => {
        result = data;
        return true;
      });
      stream.add(5);
      expect(result).equal(5);
      stream.add(0, 2.25);
      expect(result).equal(2.25);
    });
    it("A: listenner return false", async () => {
      let result: number;
      stream.listen((data) => {
        result = data;
        return false;
      });
      stream.add(-265, -21);
      expect(result).equal(-265);
      stream.add(11, 10.05);
      expect(result).equal(-265);
    });
  });
});
