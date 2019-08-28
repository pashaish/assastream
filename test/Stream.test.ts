import { expect } from "chai";
import Stream from "../class/Stream/Stream";

const stream = new Stream<number>();
describe("Stream Add ", () => {
  it("More Data", async () => {
    let result: number;
    stream.listen(async (data) => {
      result = data;
    });
    stream.add(5);
    expect(result).equal(5);
    stream.add(212);
    expect(result).equal(212);
    stream.add(63);
    expect(result).equal(63);
  });
  it("Post first 'add' return false", async () => {
    let result: number;
    stream.listen(async (data) => {
      result = data;
      return false;
    });
    stream.add(265);
    expect(result).equal(265);
    await awaiter(5);
    stream.add(11);
    expect(result).equal(265);
  });
});

const awaiter = async (time): Promise<number> => {
  return new Promise((resolve) => {
    // @ts-ignore
      setTimeout(() => {
          resolve();
      }, time);
  });
};
