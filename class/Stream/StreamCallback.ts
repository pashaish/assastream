import Stream from "./Stream";

export default class StreamCallback<T> {
  public ID: number;
  private func: (data: T) => void;
  private stream: Stream<T>;

  constructor(func: (data: T) => void, stream: Stream<T>, id: number) {
    this.func = func;
    this.stream = stream;
    this.ID = id;
  }

  /** Returns the result of the function with the argument passed */
  public result(data: T): void {
    this.func(data);
  }

  public remove() {
    this.stream.removeListenner(this.ID);
  }

  get id(): number {
    return this.ID;
  }
}
