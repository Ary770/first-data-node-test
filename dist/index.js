"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = 8080;
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello to FirstData Node.js Projec!");
});
app.post("/api/v1/parse", (req, res) => {
    const stringData = req.body.data;
    const namesArray = stringData.match(/\D+0+/g);
    const clientId = stringData.match(/[1-9]+/g);
    const response = {
        statusCode: 200,
        data: {
            firstName: namesArray[0],
            lastName: namesArray[1],
            clientId: clientId.join('')
        }
    };
    res.json(response);
});
app.post("/api/v2/parse", (req, res) => {
    const stringData = req.body.data;
    const namesArray = stringData.match(/\D+/g);
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
    res.json(response);
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map