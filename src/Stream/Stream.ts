import StreamCallback from "../StreamCallback/StreamCallback";

/**
 * You can send data to the stream and create
 * listeners that will respond to incoming data
 */
export default class <T_data> {
  private callbackStack: Array<StreamCallback<T_data>> = [];

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
  public listen(callback: (data: T_data) => void): StreamCallback<T_data> {
    const streamCallback = new StreamCallback<T_data>(
      callback,
      this,
      this.callbackStack.length,
    );
    this.callbackStack.push(streamCallback);
    return streamCallback;
  }

  public removeListenner(id: number): boolean {
    if (this.callbackStack[id] != null) {
      this.callbackStack[id] = null;
      this.callbackStack = this.callbackStack.filter((func) => func !== null);
      this.callbackStack = this.callbackStack.map((func, index) => {
        func.ID = index;
        return func;
      });
      return true;
    }
    return false;
  }

  /**
   * Performs callbacks of current listeners
   */
  private async _runCallbacks(data: T_data): Promise<void> {
    return new Promise((resolve) => {
      // tslint:disable-next-line:forin
      for (const key in this.callbackStack) {
        this.callbackStack[key].result(data);
      }
      resolve();
    });
  }
}
