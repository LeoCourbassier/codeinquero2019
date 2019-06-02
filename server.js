const io = require('socket.io')();

let clients = [];
let index = 0;

io.on('connection', (client) => {
    clients.push({ id: ++index, socket: client });
    client.on('write', res => {
        for (let i = 0; i < index; i++)
        {
            if (clients[i].socket != client && index > 1)
            {
                console.log("client[" + i + "] sent: " + res);
                clients[i].socket.emit('read', res);
            }
        }
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);