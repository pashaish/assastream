import { expect } from "chai";
import Stream from "../../Stream/Stream";

const stream = new Stream<number>();
describe("C: Stream", () => {
  describe("M: listen", () => {
    it("A: Add Listenner", () => {
      let result = 0;
      stream.listen((data) => {
        result = data;
      });
      expect(typeof result === "number").equal(true);
      stream.add(25);
      expect(result).equal(25);
    });
    it("A: Remove Listenner", () => {
      let result = 0;
      const listenner = stream.listen((data) => {
        result = data;
      });
      expect(typeof result === "number").equal(true);
      stream.add(25);
      listenner.remove();
      stream.add(251);
      expect(result).equal(25);
    });
  });

  it("M/A: add", async () => {
    let result = 0;
    stream.listen((data) => {
      result = data;
      return true;
    });
    expect(typeof result === "number").equal(true);
    stream.add(5);
    expect(result).equal(5);
    stream.add(0, 2.25);
    expect(result).equal(2.25);
  });
});
