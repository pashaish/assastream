"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stream_1 = require("./class/Stream/Stream");
const stream = new Stream_1.default();
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
