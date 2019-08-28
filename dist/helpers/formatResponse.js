"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatResponse(stringData, clean) {
    let regex = /\D+0+/g;
    if (clean) {
        regex = /\D+/g;
    }
    const namesArray = stringData.match(regex);
    const clientId = stringData.match(/[1-9]/g);
    clientId.splice(3, 0, '-');
    const response = {
        statusCode: 200,
        data: {
            firstName: namesArray[0],
            lastName: namesArray[1],
            clientId: clientId.join('')
        }
    };
}
;
exports.default = formatResponse;
//# sourceMappingURL=formatResponse.js.map