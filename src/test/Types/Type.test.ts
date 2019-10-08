import { expect } from "chai";
import Type from "../../Type/Type";

describe("C: Type", () => {
  describe("M: CheckType", () => {
    it("A: Valid Types", () => {
      expect(Type.checkType(1, new Number()));
      expect(Type.checkType("1", String));
      expect(Type.checkType(new Object(1), new Object(1)));
    });
    it("A: Not Valid Types", () => {
      expect(errorTrap(() => Type.checkType(new Object(1), new Object()))).equal(true);
      expect(errorTrap(() => Type.checkType(new Object(1), new Object("1")))).equal(true);
      expect(errorTrap(() => Type.checkType("1", new Object()))).equal(true);
      expect(errorTrap(() => Type.checkType(1, new Object()))).equal(true);
    });
  });
  it("M/A: SetValue", () => {
    expect(new Type(1, new Number()));
    expect(new Type("Hello World", new String()));
    const t = new Type(0, new Number());
    t.value = 365;
    expect(errorTrap(() => {t.value = "Hello"})).equal(true);
    expect(t.value).equal(365);
  });
});

function errorTrap(func: () => any) {
  try {
    func();
    return false;
  } catch (e) {
    return true;
  }
}
