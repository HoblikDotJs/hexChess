const http = require('http');
const express = require('express')
const socketio = require('socket.io');
const path = require('path');
const {
    getSimplifiedBoard,
    move,
    getNewActions,
    getPreviousBoard,
    hasHistory
} = require('./game');
const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('user connected')
    io.emit('board', getSimplifiedBoard());
    io.emit('availableMoves', getNewActions());
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('move', ({
        from,
        to
    }) => {
        let newBoard = move(from, to);
        io.emit('board', newBoard);
        let newActions = getNewActions()
        io.emit('availableMoves', newActions);
    });
    socket.on('undo', () => {
        if (hasHistory()) {
            let newBoard = getPreviousBoard();
            io.emit('board', newBoard);
            let newActions = getNewActions()
            io.emit('availableMoves', newActions);
        }
    })
});

const PORT = 3000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));