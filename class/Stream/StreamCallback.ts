export default class StreamCallback<T> {
  private func: (data: T) => Promise<any>;
  constructor(func: (data: T) => Promise<any>) {
    this.func = func;
  }

  public async result(data: T): Promise<boolean> {
    const result = await this.func(data);
    if (result === true) {
      return true;
    }
    return false;
  }
}
