const WebSocket = require('ws');

const wss = new WebSocket.Server( { port: 8082 });

wss.on("connection" , ws => {
    //console.log("new client connected");

    ws.on('message', function(message) {
        console.log("Received: "+message);
        
        wss.clients.forEach(function e(client) {
            if (client != ws)
                client.send(""+message);
        });



        //ws.send("From server : "+message);
    });

    ws.on("close", () => {
        console.log("client disconnected");
    });
    console.log("one more client connected");
});