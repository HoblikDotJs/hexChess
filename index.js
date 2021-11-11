const http = require('http');
const express = require('express')
const socketio = require('socket.io');
const path = require('path');
const {
    Game
} = require('./game');
const {
    Room
} = require('./room');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(express.static(path.join(__dirname, 'public')));

let games = {}

io.on('connection', (socket) => {
    socket.on('joinRoom', (id) => {
        console.log('user ' + socket.id + ' joined ' + id)
        socket.join(id)
        if (!games[id]) {
            games[id] = new Game();
        }
        games[id].setId(socket.id)
        if (games[id].idWhite && games[id].idBlack) {
            io.to(games[id].idWhite).emit('color', 1)
            io.to(games[id].idBlack).emit('color', -1)
            io.in(id).emit('board', games[id].getSimplifiedBoard());
            io.in(id).emit('availableMoves', games[id].getNewActions());
        }
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
        socket.on('move', ({
            from,
            to
        }) => {
            if (games[id].canMove(socket.id)) {
                let newBoard = games[id].move(from, to);
                io.in(id).emit('board', newBoard);
                let newActions = games[id].getNewActions();
                io.in(id).emit('availableMoves', newActions);
            }
        });
        socket.on('undo', () => {
            if (games[id].hasHistory()) {
                let newBoard = games[id].getPreviousBoard();
                io.in(id).emit('board', newBoard);
                let newActions = games[id].getNewActions()
                io.in(id).emit('availableMoves', newActions);
            }
        })
    })
});

const PORT = 8080
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));