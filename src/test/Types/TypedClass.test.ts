import { expect } from "chai";
import TypedClass from "../../Type/TypedClass";

interface IObj {
  a: string;
  b: number;
}
interface IObjDeep {
  a: string;
  b: number;
  c: IObj;
}

class Test extends TypedClass {
  constructor() {
    super();
    this.runTypingProperties();
  }

  public num: number = 15;
  public str: string = "Hello World";
  public bool: boolean = false;
  public obj: IObj = {
    a: "1",
    b: 0
  };
  public objDeep: IObjDeep = {
    a: "1",
    b: 1,
    c: {
      a: "1",
      b: 2
    }
  }
}

describe("C: TypedClass", () => {
  it("M/A: primitiveType", () => {
    const test = new Test();
    expect(test.num).equal(15);
    test.num = -31;
    expect(test.num).equal(-31);
    expect(isError(() => {
      // @ts-ignore
      test.num = "62";
    })).equal(true);
  });
  it("M/A: obj", () => {
    const test = new Test();
    test.obj.a = "36";
    expect(isError(() => {
      // @ts-ignore
      test.obj.a = 42;
    })).equal(false);
  });
})

function isError(func: () => any): boolean {
  try {
    func();
    return false;
  } catch (e) {
    return true;
  }
}
