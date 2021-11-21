const http = require('http');
const express = require('express')
const socketio = require('socket.io');
const path = require('path');
const {
    Game
} = require('./game');
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
            if (games[id].lastMove) io.in(id).emit('lastMove', games[id].lastMove);
            io.to(games[id].idWhite).emit('color', 1)
            io.to(games[id].idBlack).emit('color', -1)
            io.in(id).emit('board', games[id].getSimplifiedBoard());
            io.in(id).emit('availableMoves', games[id].getNewActions());
        }
        socket.on('disconnect', () => {
            if (games[id].idWhite == socket.id) {
                console.log("changing white")
                games[id].resetId(1);
            }
            if (games[id].idBlack == socket.id) {
                console.log("changing black")
                games[id].resetId(-1)
            }
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
                games[id].setLastMove({
                    from,
                    to
                })
                let lastMove = games[id].getLastMove()
                io.in(id).emit('lastMove', lastMove);
            }
        });
        socket.on('undo', () => {
            io.in(id).emit('newUndoReq');
            if (games[id].newUndoRequest(socket.id)) {
                if (games[id].hasHistory()) {
                    let newBoard = games[id].getPreviousBoard();
                    io.in(id).emit('board', newBoard);
                    let newActions = games[id].getNewActions()
                    io.in(id).emit('availableMoves', newActions);
                    let newLastMove = games[id].getPreviousMove();
                    io.in(id).emit('lastMove', newLastMove);
                }
                io.in(id).emit('stopUndoReq');
            }
        });
        socket.on('newGame', () => {
            io.in(id).emit('newGameReq');
            if (games[id].newGameRequest(socket.id)) {
                io.in(id).emit('lastMove', {
                    from: {
                        x: 100,
                        y: 100
                    },
                    to: {
                        x: 100,
                        y: 100
                    }
                });
                io.in(id).emit('board', games[id].getSimplifiedBoard());
                io.in(id).emit('availableMoves', games[id].getNewActions());
                io.in(id).emit('newGame');
            }
        });
        socket.on('flipColors', () => {
            io.in(id).emit('flipColorsReq');
            if (games[id].flipColorsRequest(socket.id)) {
                games[id].flipColors();
                io.to(games[id].idWhite).emit('color', 1)
                io.to(games[id].idBlack).emit('color', -1)
                io.in(id).emit('board', games[id].getSimplifiedBoard());
                io.in(id).emit('availableMoves', games[id].getNewActions());
                //if (games[id].lastMove) io.in(id).emit('lastMove', games[id].lastMove);
                io.in(id).emit('stopFlipColorsReq');
            }
        });
    })
});
// bug flip colors
// queue
const PORT = 8080
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));