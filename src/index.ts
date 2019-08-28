import express from "express";
import bodyParser from "body-parser"
import Response from "./Response"

const app = express();
const port = 8080;

app.use( bodyParser.json() );

app.get( "/", ( req, res ) => {
    res.send( "Hello to FirstData Node.js Projec!" );
} );

app.post( "/api/v1/parse", ( req, res ) => {
    const stringData = req.body.data;
    const namesArray = stringData.match(/\D+0+/g);
    const clientId = stringData.match(/[1-9]+/g);

    const response:Response = {
      statusCode: 200,
      data: {
        firstName: namesArray[0], 
        lastName: namesArray[1], 
        clientId: clientId.join('')
      }
    };

    res.json( response );
} );

app.post( "/api/v2/parse", ( req, res ) => {
    const stringData = req.body.data;
    const namesArray = stringData.match(/\D+/g);
    const clientId = stringData.match(/[1-9]/g);
    clientId.splice(3, 0, '-')

    const response:Response = {
      statusCode: 200,
      data: {
        firstName: namesArray[0], 
        lastName: namesArray[1], 
        clientId: clientId.join('')
      }
    };

    res.json( response );
} );

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
