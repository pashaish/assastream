import StreamCallback from "../StreamCallback/StreamCallback";
/**
 * You can send data to the stream and create
 * listeners that will respond to incoming data
 */
export default class<T_data> {
    private callbackStack;
    /**
     * Sends data to a stream
     */
    add(...data: T_data[]): void;
    /**
     * Adds a listener to the stream.
     * If the listener returns false,
     * then the listener will be deleted
     */
    listen(callback: (data: T_data) => void): StreamCallback<T_data>;
    removeListenner(id: number): boolean;
    /**
     * Performs callbacks of current listeners
     */
    private _runCallbacks;
}
