export default class StreamCallback<T> {
  private func: (data: T) => boolean;
  constructor(func: (data: T) => boolean) {
    this.func = func;
  }

  /** Returns the result of the function with the argument passed */
  public result(data: T): boolean {
    const result = this.func(data);
    if (result === true) {
      return true;
    }
    return false;
  }
}
