import TypedClass from "../Type/TypedClass";

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

const test = new TestClass();


test.boolean = true;
