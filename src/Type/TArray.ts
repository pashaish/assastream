import Type from "./Type";

class TArray<T> extends Type<Array<T>> {
  private elementsType: any;
  constructor(type: Type<T>, ...val: T[]) {
    super(new Array, val);
    this.elementsType = type;

    const pval = new Proxy(val, {
      set: (target, prop: string | number | symbol, val: T) => {
        // @ts-ignore
        (this.elementsType as Type<T>).checkType(target[prop]);
        target[prop] = val;
        return true;
      },
    });
    this._value = pval;
  }
}

export default TArray;
