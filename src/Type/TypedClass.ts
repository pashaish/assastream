import Type from "./Type";

class TypedClass {
  constructor() {
  }
  protected runTypingProperties() {
    const types: Map<String, Type<any>> = new Map();
    for (const key in this) {
      types.set(key, new Type(this[key], this[key]));
      Object.defineProperty(this, key, {
        get: () => {
          const typingVal = types.get(key);
          if (typingVal) {
            return typingVal.value;
          }
          throw new Error("Not found typingVal");
        },
        set: (val) => {
          const typingVal = types.get(key);
          if (typingVal) {
            typingVal.value = val;
            return;
          }
          throw new Error("Not found typingVal");
        }
      })
    }
    Object.preventExtensions(this);
  }
}

export default TypedClass;
