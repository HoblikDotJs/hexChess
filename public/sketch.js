var socket = io();
let board;
let w;
let offset
let actions;
let highlighted = [];
let clickedPiece, myColor;
let pieces = {}
let colorMult = 0;
let lastMove = {
    from: {
        x: 100,
        y: 100
    },
    to: {
        x: 100,
        y: 100
    }
};

function preload() {
    pieces.bBishop = loadImage('https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png');
    pieces.bPawn = loadImage('https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png');
    pieces.bKnight = loadImage('https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png');
    pieces.bQueen = loadImage('https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png');
    pieces.bKing = loadImage('https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_kdt60.png');
    pieces.bRook = loadImage('https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png');
    pieces.wPawn = loadImage('https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png');
    pieces.wKnight = loadImage('https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png');
    pieces.wQueen = loadImage('https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png');
    pieces.wRook = loadImage('https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png');
    pieces.wBishop = loadImage('https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png');
    pieces.wKing = loadImage('https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt60.png');
}

socket.on('board', msg => {
    board = msg;
    if (myColor == "-") {
        colorMult = 1
        reverseBoard()
    }
})

socket.on('lastMove', msg => {
    lastMove = msg;
})

function reverseBoard() {
    //console.table(board);
    board = board.reverse();
    for (let i = 0; i < board.length; i++) {
        board[i].reverse()
    }
    //console.table(board);
}

socket.on('color', msg => {
    myColor = msg;
    if (msg == 1) {
        myColor = "+"
    }
    if (msg == -1) {
        myColor = "-"
    }
})

socket.on('availableMoves', msg => {
    actions = msg;
    for (let i = 0; i < actions.length; i++) {
        actions[i].x = abs(7 * colorMult - actions[i].x)
        actions[i].y = abs(7 * colorMult - actions[i].y)
        for (let j = 0; j < actions[i].actions.length; j++) {
            //console.log(actions[i].actions[j].x)
            actions[i].actions[j].x = abs(7 * colorMult - actions[i].actions[j].x)
            actions[i].actions[j].y = abs(7 * colorMult - actions[i].actions[j].y)
        }
    }
})

function setup() {
    let roomId = new URLSearchParams(window.location.search).get("invite");
    if (roomId) {
        socket.emit('joinRoom', roomId)
    }
    imageMode(CENTER);
    createCanvas(min(windowWidth, windowHeight), min(windowWidth, windowHeight) * 1.1);
    w = min(windowWidth, windowHeight) * 0.112
    let button = createButton('UNDO')
    button.mousePressed(() => {
        socket.emit('undo');
        highlighted = []
    })
    if (!roomId) {
        let button2 = createButton('INVITE')
        button2.mousePressed(() => {
            socket.emit('joinRoom', "room" + socket.id);
            if (navigator.share) {
                navigator.share({
                        title: document.title,
                        text: "Invitation",
                        url: window.location.origin + "?invite=room" + socket.id
                    })
                    .then(() => console.log('Successful share'))
                    .catch(error => console.log('Error sharing:', error));
            } else {
                alert("Please share this to your opponent: " + "room" + socket.id)
            }
        })
    }
}

function draw() {
    background(0);
    translate(w * 0.85, w / 3)
    noStroke()
    if (board) {
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                offset = 0;
                let colors = [255, 50, 125]
                if (x % 2 != 0) {
                    offset = w / 2
                    colors = [125, 255, 50]
                }
                let drawY = y * w * 1.05 + w / 2 + offset
                let drawX = x * w * 0.9 + w / 2
                fill(255)
                hexagon(drawX, drawY, w * 0.004, colors[y % 3], x, y)
                let imgW = w * 0.9;
                switch (board[y][x]) {
                    case "+R":
                        image(pieces.wRook, drawX, drawY, imgW, imgW)
                        break;
                    case "+N":
                        image(pieces.wKnight, drawX, drawY, imgW, imgW)
                        break;
                    case "+B":
                        image(pieces.wBishop, drawX, drawY, imgW, imgW)
                        break;
                    case "+Q":
                        image(pieces.wQueen, drawX, drawY, imgW, imgW)
                        break;
                    case "+K":
                        image(pieces.wKing, drawX, drawY, imgW, imgW)
                        break;
                    case "+I":
                        push()
                        translate(drawX, drawY)
                        scale(1, -1)
                        image(pieces.wRook, 0, 0, imgW, imgW)
                        pop()
                        break;
                    case "+P":
                        image(pieces.wPawn, drawX, drawY, imgW, imgW)
                        break;
                    case "-R":
                        image(pieces.bRook, drawX, drawY, imgW, imgW)
                        break;
                    case "-N":
                        image(pieces.bKnight, drawX, drawY, imgW, imgW)
                        break;
                    case "-B":
                        image(pieces.bBishop, drawX, drawY, imgW, imgW)
                        break;
                    case "-Q":
                        image(pieces.bQueen, drawX, drawY, imgW, imgW)
                        break;
                    case "-K":
                        image(pieces.bKing, drawX, drawY, imgW, imgW)
                        break;
                    case "-I":
                        push()
                        translate(drawX, drawY)
                        scale(1, -1)
                        image(pieces.bRook, 0, 0, imgW, imgW)
                        pop()
                        break;
                    case "-P":
                        image(pieces.bPawn, drawX, drawY, imgW, imgW)
                        break;
                }
            }
        }
        for (let obj of highlighted) {
            offset = 0;
            if (obj.x % 2 != 0) {
                offset = w / 2
            }
            let drawY = obj.y * w * 1.05 + w / 2 + offset
            let drawX = obj.x * w * 0.9 + w / 2
            fill(255, 150, 150);
            noStroke()
            ellipse(drawX, drawY, w / 3)
        }
    }
}

function showAvailableMoves(x, y) {

    for (let action of actions) {
        if (action.x == x && action.y == y && board[y][x].slice(0, 1) == myColor) {
            highlighted = action.actions
            if (highlighted.length > 0) {
                clickedPiece = {
                    x: abs(7 * colorMult - x),
                    y: abs(7 * colorMult - y)
                }
            }
        }
    }
}

let readyToMove = true;

function mousePressed() {
    if (readyToMove == false) return
    for (let obj of highlighted) {
        offset = 0;
        if (obj.x % 2 != 0) {
            offset = w / 2
        }
        let drawY = obj.y * w * 1.05 + w / 2 + offset
        let drawX = obj.x * w * 0.9 + w / 2
        if (sqrt(pow(drawX - mouseX + w * 0.85, 2) + pow(drawY - mouseY + w / 3, 2)) < w / 2) {
            socket.emit('move', {
                from: clickedPiece,
                to: {
                    x: abs(7 * colorMult - obj.x),
                    y: abs(7 * colorMult - obj.y)
                }
            })
            readyToMove = false;
            setTimeout(() => readyToMove = true, 350);
            highlighted = []
            return
        } else {
            highlighted = []
        }
    }
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            offset = 0;
            if (x % 2 != 0) {
                offset = w / 2
            }
            let drawY = y * w * 1.05 + w / 2 + offset
            let drawX = x * w * 0.9 + w / 2
            if (sqrt(pow(drawX - mouseX + w * 0.85, 2) + pow(drawY - mouseY + w / 3, 2)) < w / 2) {
                showAvailableMoves(x, y);
            }
        }
    }

}

function hexagon(transX, transY, s, c, x, y) {
    stroke(255);
    strokeWeight(5);
    fill(c);
    console.log()
    if ((abs(7 * colorMult - lastMove.from.x) == x && abs(7 * colorMult - lastMove.from.y) == y) || (abs(7 * colorMult - lastMove.to.x) == x && abs(7 * colorMult - lastMove.to.y) == y)) fill(150, 255, 150)
    push();
    translate(transX, transY);
    scale(s);
    beginShape();
    vertex(-75, -130);
    vertex(75, -130);
    vertex(150, 0);
    vertex(75, 130);
    vertex(-75, 130);
    vertex(-150, 0);
    endShape(CLOSE);
    pop();
}