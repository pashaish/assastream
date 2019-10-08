import TypedClass from "../Type/TypedClass";
import TArray from "../Type/TArray";
import Type from "../Type/Type";

class PostClass extends TypedClass {
  constructor() {
    super();
    this.runTypingProperties();
  }

  public gool = false;
}

class TestClass extends TypedClass {
  public boolean: boolean = false;
  public post = new PostClass();
  constructor() {
    super();
    this.runTypingProperties();
  }
}

const arr = new TArray(new Type(new Number));


// @ts-ignore
// str.value = 14;

arr.value[0] = "5";
