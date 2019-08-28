import StreamCallback from "./StreamCallback";

export default class Stream<T_data> {
  private callBackStack: Array<StreamCallback<T_data>> = [];

  public add(data: T_data) {
    this._runCallbacks(data);
  }

  public listen(callback: (data: T_data) => Promise<any>) {
    this.callBackStack.push(new StreamCallback<T_data>(callback));
  }

  private async _runCallbacks(data: T_data): Promise<void> {
    return new Promise(async (resolve) => {
      // tslint:disable-next-line:forin
      for (const key in this.callBackStack) {
        const result = await this.callBackStack[key].result(data);
        if (result === false) {
          this.callBackStack[key] = null;
        }
      }
      this.callBackStack = this.callBackStack.filter((func) => func != null);
      resolve();
    });
  }
}
