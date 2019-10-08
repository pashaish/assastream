class Type {
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
    Object.preventExtensions(val);
  }


  public value?: any;
  private typeInstance?: any;
  private _value?: any;
  private _typeInstance?: any;
  constructor(Type: any, value: any) {
    
    this._value = value;
    this._typeInstance = Type;

    this.checkType();

    this.defineProperty.apply(this);
  }
  private defineProperty() {
    Object.defineProperty(this, "value", {
      get: () => {
        this.checkType();
        return this._value;
      },
      set: (val) => {
        Type.checkType(val, this.typeInstance);
        this._value = val;
      },
    });
    Object.defineProperty(this, "typeInstance", {
      get: () => {
        this.checkType();
        return this._typeInstance;
      },
      set: (val) => {
        Type.checkType(val, this.typeInstance);
        this._typeInstance = val;
      },
    });

  }
  public checkType() {
    Type.checkType(this._value, this._typeInstance);
  }
}

export default Type;
