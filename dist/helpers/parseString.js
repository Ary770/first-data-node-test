"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseString(stringData, clean) {
    const regex = /\D*0*/g;
    const namesArray = stringData.match(regex);
    const clientId = stringData.replace(regex, '');
    const formatedClientId = [clientId.slice(0, 3), '-', clientId.slice(3)].join('');
    if (clean) {
    }
    return { namesArray: namesArray, clientId: formatedClientId };
}
;
exports.default = parseString;
//# sourceMappingURL=parseString.js.map