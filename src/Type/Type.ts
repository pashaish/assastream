class Type<T> {
  public static getTypeFromCtr(obj: any) {
    return obj.constructor.toString().replace(/(function|class)\s+(\S+)\b.+/, "$2");
  }
  public static checkType(val: any, typeInstance: any): void {
    let type;
    try {
        type = new typeInstance;
    } catch (e) {
        type = typeInstance;
    }

    const pval = val.__proto__;
    const ptype = type.__proto__;

    const valTypeName = this.getTypeFromCtr(val);
    let instanceValTypeName;
    try {
      instanceValTypeName = this.getTypeFromCtr(new typeInstance);
    } catch (e) {
      instanceValTypeName = this.getTypeFromCtr(type);
    }
    
    if (instanceValTypeName === "Object" || valTypeName === "Object") {
        throw new Error("You cannot specify empty objects in a type\nNeed to create a class");
    }
    const equalProto = pval === ptype && valTypeName === instanceValTypeName;
    const equalConstructor = pval.constructor === type.constructor;
    if (!equalProto || !equalConstructor ) {
      throw new Error(`TypeError: ${valTypeName} !== ${instanceValTypeName}`);
    }
  }


  protected _value?: T;
  public value!: T;
  protected _typeInstance: T;
  constructor(Type: T, value?: T) {
    
    this._value = value;
    this._typeInstance = Type;
    this.checkType(value);

    this.defineProperty.apply(this);
  }
  private defineProperty() {
    Object.defineProperty(this, "value", {
      get: () => {
        return this._value;
      },
      set: (val) => {
        this.checkType(val);
        this._value = val;
      },
    });
  }
  public checkType(val?: T) {
    if (val) {
      Type.checkType(val, this._typeInstance);
    }
  }
}

export default Type;
