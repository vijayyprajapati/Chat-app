const WebSocket = require('ws');
require('dotenv').config({path:'./dev.env'})

const PORT=process.env.PORT
const wss = new WebSocket.Server( { port: PORT });


wss.on("connection" , ws => {
    ws.on('message', function(message) {
        wss.clients.forEach(function (client) {
            if (client !== ws){
                client.send(message);
            }
        });
    });

    ws.on("close", () => {
        console.log("client disconnected");
    });
    console.log("one more client connected");
});
