const WebSocket = require('ws');


const dispatchServer = new WebSocket.Server({ port: 5000 });
let nextRoomNumber = 1;
