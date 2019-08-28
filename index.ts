
import Stream from "./class/Stream/Stream";

const stream = new Stream<number>();

stream.listen((data) => {
    if (data === 1) {
        return false;
    }
    console.debug(data);
    return true;
});

stream.add(25534);
stream.add(52.26);
stream.add(1);
stream.add(243);
