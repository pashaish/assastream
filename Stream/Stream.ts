export default class Stream<T_data> {
  private callBackStack: Array<(data: T_data) => void|boolean> = [];

  public add(data: T_data) {
    this._runCallbacks(data);
  }

  public listen(callback: (data: T_data) => void| boolean) {
    this.callBackStack.push(callback);
  }

  private async _runCallbacks(data: T_data): Promise<void> {
    for (const key in this.callBackStack) {
      if (this.callBackStack[key](data) === false) {
        this.callBackStack[key] = null;
      }
    }
    this.callBackStack.filter((func) => func != null);
  }
}
