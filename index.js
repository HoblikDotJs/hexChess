const http = require('http');
const express = require('express')
const socketio = require('socket.io');
const path = require('path');
const uniqid = require('uniqid');
const {
    Game
} = require('./game');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(express.static(path.join(__dirname, 'public')));

let games = {}
let queues = [
    [],
    [],
    []
];
let onlinePlayers = 0;
io.on('connection', (socket) => {
    onlinePlayers++;
    console.log(onlinePlayers)
    socket.on('joinRoom', ({
        id,
        index //timeIndex
    }) => {
        index = parseInt(index)
        console.log('user ' + socket.id + ' joined ' + id)
        socket.join(id)
        if (!games[id]) {
            games[id] = new Game(index);
        }
        games[id].setId(socket.id)
        if (games[id].idWhite && games[id].idBlack) {
            if (games[id].lastMove) io.in(id).emit('lastMove', games[id].lastMove);
            io.to(games[id].idWhite).emit('color', 1)
            io.to(games[id].idBlack).emit('color', -1)
            io.in(id).emit('board', games[id].getSimplifiedBoard());
            io.in(id).emit('availableMoves', games[id].getNewActions());
        }
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
                let times = games[id].getTimes();
                io.in(id).emit('updateTime', times);
                io.in(id).emit('onMove', games[id].whoMoves);
                //let bestMove = games[id].getBestMove(3);
                //console.log(bestMove)
            }
        });
        socket.on('disconnect', () => {
            if (games[id] != undefined) {
                if (games[id].idWhite == socket.id) {
                    console.log("changing white")
                    games[id].resetId(1);
                }
                if (games[id].idBlack == socket.id) {
                    console.log("changing black")
                    games[id].resetId(-1)
                }
                if (!games[id].idWhite && !games[id].idBlack) {
                    delete games[id];
                    console.log('deleted')
                }
                console.log('user disconnected');
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
                let times = games[id].getTimes();
                io.in(id).emit('updateTime', times);
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
                io.in(id).emit('stopFlipColorsReq');
            }
        });
    });
    socket.on('joinQueues', (index) => {
        if (queues[index].includes(socket.id)) {
            queues[index].splice(queues[index].indexOf(socket.id, 1))
            io.to(socket.id).emit('stopQueuesReq', index);
            io.emit('roomFill', [queues[0].length, queues[1].length, queues[2].length]);
            return
        }
        if (index <= queues.length - 1) {
            console.log('user ' + socket.id + ' joined queue ' + index);
            queues[index].push(socket.id);
            io.emit('roomFill', [queues[0].length, queues[1].length, queues[2].length]);
            io.to(socket.id).emit('joinQueuesReq', index);

            if (queues[index].length > 1) {
                console.log("two players waiting in:" + index)
                let roomid = uniqid()
                let id1 = queues[index][0];
                let id2 = queues[index][1];
                let keys = Object.keys(games);
                /*for (let i = keys.length - 1; i >= 0; i--) {
                    if (games[keys[i]].idWhite == id1 || games[keys[i]].idBlack == id1) {
                        delete games[keys[i]];
                        keys.splice(i, 1)
                        console.log('deleting game: ' + keys[i])
                    }
                }
                for (let i = keys.length - 1; i >= 0; i--) {
                    if (games[keys[i]].idWhite == id2 || games[keys[i]].idBlack == id2) {
                        delete games[keys[i]];
                        keys.splice(i, 1)
                        console.log('deleting game: ' + keys[i])
                    }
                }*/
                for (game in games) {
                    if (games[game].idWhite == id1 || games[game].idBlack == id1) {
                        delete games[game];
                        console.log('deleting game: ' + game)
                    }
                }
                for (game in games) {
                    if (games[game].idWhite == id2 || games[game].idBlack == id2) {
                        delete games[game];
                        console.log('deleting game: ' + game)
                    }
                }
                io.to(id1).emit('joinGameFromQueue', {
                    id: roomid,
                    index
                });
                io.to(id2).emit('joinGameFromQueue', {
                    id: roomid,
                    index
                });
                io.to(id1).emit('stopQueuesReq');
                io.to(id2).emit('stopQueuesReq');
                for (let i = queues.length - 1; i >= 0; i--) {
                    if (i != index) {
                        if (queues[i].includes(id1)) {
                            queues[i].splice(queues[i].indexOf(id1, 1))
                            console.log("1: " + id1)
                        }
                        if (queues[i].includes(id2)) {
                            queues[i].splice(queues[i].indexOf(id2, 1))
                            console.log("2: " + id2)
                        }
                    }
                }
                queues[index].shift()
                queues[index].shift()
                io.emit('roomFill', [queues[0].length, queues[1].length, queues[2].length]);
            }
        }
    })

    socket.on('disconnect', () => {
        onlinePlayers--;
        console.log(onlinePlayers);
        console.log(Object.keys(games))
    });
    io.emit('roomFill', [queues[0].length, queues[1].length, queues[2].length]);
})
//TODO:
// 
//
//
//-------------------------------------------------
//flip colors doesnt flip players timers - problem?
//players have different colors on board - problem?
/////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
const PORT = 8080
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));