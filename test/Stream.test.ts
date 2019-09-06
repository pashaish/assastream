import { expect } from "chai";
import Stream from "../class/Stream/Stream";

const stream = new Stream<number>();
describe("C: Stream", () => {
  describe("M: listen", () => {
    it("A: Add Listenner", async () => {
      let result = 0;
      stream.listen((data) => {
        result = data;
      });
      await stream.add(25);
      expect(result).equal(25);
    });

    it("A: Remove Listenner", async () => {
      let result = 0;
      const listenner = stream.listen((data) => {
        result = data;
      });
      await stream.add(25);
      listenner.remove();
      await stream.add(251);
      expect(result).equal(25);
    });
    it("A: Add Listenner with timeout", async () => {
      let result = 0;
      stream.timeout(100).listen((data) => {
        result = data;
      });
      stream.add(25);
      expect(result).equal(0);
      await wait(150);
      expect(result).equal(25);
    });
  });

  it("M: add", async () => {
    let result: number;
    stream.listen((data) => {
      result = data;
      return true;
    });
    await stream.add(5);
    expect(result).equal(5);
    await stream.add(0, 2.25);
    expect(result).equal(2.25);
  });
});

async function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    });
  });
}
