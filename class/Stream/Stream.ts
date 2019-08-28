import StreamCallback from "./StreamCallback";

/**
 * You can send data to the stream and create
 * listeners that will respond to incoming data
 */
export default class Stream<T_data> {
  private callBackStack: Array<StreamCallback<T_data>> = [];
  /**
   * Sends data to a stream
   */
  public add(...data: T_data[]) {
    for (const dataUnit of data) {
      this._runCallbacks(dataUnit);
    }
  }

  /**
   * Adds a listener to the stream.
   * If the listener returns false,
   * then the listener will be deleted
   */
  public listen(callback: (data: T_data) => boolean) {
    this.callBackStack.push(new StreamCallback<T_data>(callback));
  }

  /**
   * Performs callbacks of current listeners
   */
  private async _runCallbacks(data: T_data): Promise<void> {
    return new Promise((resolve) => {
      for (const key in this.callBackStack) {
        if ((this.callBackStack[key].result(data)) === false) {
          this.callBackStack[key] = null;
        }
      }
      this.callBackStack = this.callBackStack.filter((func) => func != null);
      resolve();
    });
  }
}
