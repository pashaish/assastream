import { expect } from "chai";
import { test } from "mocha";
import Stream from "../Stream/Stream";

const stream = new Stream<number>();

test("Stream Add ", () => {
  stream.add(5);
  stream.listen((data) => {
    expect(data).equal(5);
  });
});
