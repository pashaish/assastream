import Stream from "../Stream/Stream";
export default class<T> {
    ID: number;
    private func;
    private stream;
    constructor(func: (data: T) => void, stream: Stream<T>, id: number);
    /** Returns the result of the function with the argument passed */
    result(data: T): void;
    remove(): void;
    readonly id: number;
}
