//~+~~+~~+~~PIECES~~+~~+~~+~//
class Hexagon {
    constructor(x, y, piece) {
        this.x = x;
        this.y = y;
        this.piece = piece;
    }
}

class Rook {
    constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.c = c;
        this.notation = "R";
        this.value = 4;
    }
    getAvailableMoves(board) {
        let result = [];
        //~~+~~+~~+~~+~UP&DOWN~+~~+~~+~~+~~//
        for (let y = this.y + 1; y <= 7; y++) {
            if (board[y][this.x].piece.notation == "") {
                result.push({
                    x: this.x,
                    y: y,
                })
            } else {
                if (this.c != board[y][this.x].piece.c) {
                    result.push({
                        x: this.x,
                        y: y,
                    })
                }
                break;
            }
        }
        for (let y = this.y - 1; y >= 0; y--) {
            if (board[y][this.x].piece.notation == "") {
                result.push({
                    x: this.x,
                    y: y,
                })
            } else {
                if (this.c != board[y][this.x].piece.c) {
                    result.push({
                        x: this.x,
                        y: y,
                    })
                }
                break;
            }
        }
        //~~+~~+~~+~~+~UP&DOWN~+~~+~~+~~+~~//
        if (isOdd(this.x)) { // ODD
            if (this.c == -1) { //-1
                for (let x = this.x + 1; x <= 7; x++) {
                    let zigzag = isOdd(x) ? 0 : 1
                    if (board[this.y + zigzag][x].piece.notation == "") {
                        result.push({
                            x: x,
                            y: this.y + zigzag,
                        })
                    } else {
                        if (this.c != board[this.y + zigzag][x].piece.c) {
                            result.push({
                                x: x,
                                y: this.y + zigzag,
                            })
                        }
                        break;
                    }
                }
                for (let x = this.x - 1; x >= 0; x--) {
                    let zigzag = isOdd(x) ? 0 : 1
                    if (board[this.y + zigzag][x].piece.notation == "") {
                        result.push({
                            x: x,
                            y: this.y + zigzag,
                        })
                    } else {
                        if (this.c != board[this.y + zigzag][x].piece.c) {
                            result.push({
                                x: x,
                                y: this.y + zigzag,
                            })
                        }
                        break;
                    }
                }
            } else { //+1
                for (let x = this.x + 1; x <= 7; x++) {
                    if (board[this.y][x].piece.notation == "") {
                        result.push({
                            x: x,
                            y: this.y,
                        })
                    } else {
                        if (this.c != board[this.y][x].piece.c) {
                            result.push({
                                x: x,
                                y: this.y,
                            })
                        }
                        break;
                    }
                }
                for (let x = this.x - 1; x >= 0; x--) {
                    if (board[this.y][x].piece.notation == "") {
                        result.push({
                            x: x,
                            y: this.y,
                        })
                    } else {
                        if (this.c != board[this.y][x].piece.c) {
                            result.push({
                                x: x,
                                y: this.y,
                            })
                        }
                        break;
                    }
                }
            }
        } else { // EVEN
            if (this.c == -1) { // -1
                for (let x = this.x + 1; x <= 7; x++) {
                    if (board[this.y][x].piece.notation == "") {
                        result.push({
                            x: x,
                            y: this.y,
                        })
                    } else {
                        if (this.c != board[this.y][x].piece.c) {
                            result.push({
                                x: x,
                                y: this.y,
                            })
                        }
                        break;
                    }
                }
                for (let x = this.x - 1; x >= 0; x--) {
                    if (board[this.y][x].piece.notation == "") {
                        result.push({
                            x: x,
                            y: this.y,
                        })
                    } else {
                        if (this.c != board[this.y][x].piece.c) {
                            result.push({
                                x: x,
                                y: this.y,
                            })
                        }
                        break;
                    }
                }
            } else { // +1
                for (let x = this.x + 1; x <= 7; x++) {
                    let zigzag = isOdd(x) ? -1 : 0
                    if (board[this.y + zigzag][x].piece.notation == "") {
                        result.push({
                            x: x,
                            y: this.y + zigzag,
                        })
                    } else {
                        if (this.c != board[this.y + zigzag][x].piece.c) {
                            result.push({
                                x: x,
                                y: this.y + zigzag,
                            })
                        }
                        break;
                    }
                }
                for (let x = this.x - 1; x >= 0; x--) {
                    let zigzag = isOdd(x) ? -1 : 0
                    if (board[this.y + zigzag][x].piece.notation == "") {
                        result.push({
                            x: x,
                            y: this.y + zigzag,
                        })
                    } else {
                        if (this.c != board[this.y + zigzag][x].piece.c) {
                            result.push({
                                x: x,
                                y: this.y + zigzag,
                            })
                        }
                        break;
                    }
                }
            }
        }
        this.availableMoves = result;
    }
}

class InvertedRook {
    constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.c = c;
        this.notation = "I";
        this.value = 4;
    }
    getAvailableMoves(board) {
        let result = [];
        //~~+~~+~~+~~+~UP&DOWN~+~~+~~+~~+~~//
        for (let y = this.y + 1; y <= 7; y++) {
            if (board[y][this.x].piece.notation == "") {
                result.push({
                    x: this.x,
                    y: y,
                })
            } else {
                if (this.c != board[y][this.x].piece.c) {
                    result.push({
                        x: this.x,
                        y: y,
                    })
                }
                break;
            }
        }
        for (let y = this.y - 1; y >= 0; y--) {
            if (board[y][this.x].piece.notation == "") {
                result.push({
                    x: this.x,
                    y: y,
                })
            } else {
                if (this.c != board[y][this.x].piece.c) {
                    result.push({
                        x: this.x,
                        y: y,
                    })
                }
                break;
            }
        }
        //~~+~~+~~+~~+~UP&DOWN~+~~+~~+~~+~~//
        if (isOdd(this.x)) { // ODD
            if (this.c == -1) { //-1
                //
                for (let x = this.x + 1; x <= 7; x++) {
                    if (board[this.y][x].piece.notation == "") {
                        result.push({
                            x: x,
                            y: this.y,
                        })
                    } else {
                        if (this.c != board[this.y][x].piece.c) {
                            result.push({
                                x: x,
                                y: this.y,
                            })
                        }
                        break;
                    }
                }
                for (let x = this.x - 1; x >= 0; x--) {
                    if (board[this.y][x].piece.notation == "") {
                        result.push({
                            x: x,
                            y: this.y,
                        })
                    } else {
                        if (this.c != board[this.y][x].piece.c) {
                            result.push({
                                x: x,
                                y: this.y,
                            })
                        }
                        break;
                    }
                }
                //

            } else { //+1
                for (let x = this.x + 1; x <= 7; x++) {
                    let zigzag = isOdd(x) ? 0 : 1
                    let y = this.y + zigzag
                    if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                    if (board[y][x].piece.notation == "") {
                        result.push({
                            x,
                            y
                        })
                    } else {
                        if (this.c != board[y][x].piece.c) {
                            result.push({
                                x,
                                y
                            })
                        }
                        break;
                    }
                }
                for (let x = this.x - 1; x >= 0; x--) {
                    let zigzag = isOdd(x) ? 0 : 1
                    let y = this.y + zigzag
                    if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                    if (board[y][x].piece.notation == "") {
                        result.push({
                            x,
                            y
                        })
                    } else {
                        if (this.c != board[y][x].piece.c) {
                            result.push({
                                x,
                                y
                            })
                        }
                        break;
                    }
                }
            }
        } else { // EVEN
            if (this.c == -1) { // -1
                //
                for (let x = this.x + 1; x <= 7; x++) {
                    let zigzag = isOdd(x) ? -1 : 0
                    let y = this.y + zigzag;
                    if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                    if (board[y][x].piece.notation == "") {
                        result.push({
                            x,
                            y
                        })
                    } else {
                        if (this.c != board[y][x].piece.c) {
                            result.push({
                                x,
                                y
                            })
                        }
                        break;
                    }
                }
                for (let x = this.x - 1; x >= 0; x--) {
                    let zigzag = isOdd(x) ? -1 : 0
                    let y = this.y + zigzag
                    if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                    if (board[y][x].piece.notation == "") {
                        result.push({
                            x,
                            y
                        })
                    } else {
                        if (this.c != board[y][x].piece.c) {
                            result.push({
                                x,
                                y
                            })
                        }
                        break;
                    }
                }
                //
            } else { // +1
                for (let x = this.x + 1; x <= 7; x++) {
                    if (board[this.y][x].piece.notation == "") {
                        result.push({
                            x: x,
                            y: this.y,
                        })
                    } else {
                        if (this.c != board[this.y][x].piece.c) {
                            result.push({
                                x: x,
                                y: this.y,
                            })
                        }
                        break;
                    }
                }
                for (let x = this.x - 1; x >= 0; x--) {
                    if (board[this.y][x].piece.notation == "") {
                        result.push({
                            x: x,
                            y: this.y,
                        })
                    } else {
                        if (this.c != board[this.y][x].piece.c) {
                            result.push({
                                x: x,
                                y: this.y,
                            })
                        }
                        break;
                    }
                }
            }
        }
        this.availableMoves = result;
    }
}

class Knight {
    constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.c = c;
        this.notation = "N";
        this.value = 5;
    }
    getAvailableMoves(board) {
        let result = [];
        //~+~~+~~+~~UP~~+~~+~~+~//
        if (isOdd(this.x)) {
            let Xs = [0, 1, 2, 2, 2, 1, 0, -1, -2, -2, -2, -1]
            let Ys = [-2, -1, -1, 0, 1, 2, 2, 2, 1, 0, -1, -1]
            for (let i = 0; i < Xs.length; i++) {
                let x = this.x + Xs[i];
                let y = this.y + Ys[i];
                if (y >= 0 && y < 8 && x >= 0 && x < 8 && board[y][x].piece.c != this.c) {
                    result.push({
                        x,
                        y
                    })
                }
            }
        } else { // EVEN
            let Xs = [0, 1, 2, 2, 2, 1, 0, -1, -2, -2, -2, -1]
            let Ys = [-2, -2, -1, 0, 1, 1, 2, 1, 1, 0, -1, -2]
            for (let i = 0; i < Xs.length; i++) {
                let x = this.x + Xs[i];
                let y = this.y + Ys[i];
                if (y >= 0 && y < 8 && x >= 0 && x < 8 && board[y][x].piece.c != this.c) {
                    result.push({
                        x,
                        y
                    })
                }
            }
        }
        this.availableMoves = result;
    }
}

class Bishop {
    constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.c = c;
        this.notation = "B";
        this.value = 3;
    }
    getAvailableMoves(board) {
        let result = [];
        if (isOdd(this.x)) {
            //~~+~~+~~+~~+~RIGHT UP~+~~+~~+~~+~~//
            let temp = false;
            let sum = 0;
            for (let x = this.x + 1; x <= 7; x++) {
                let zigzag = temp ? -1 : 0;
                let y = this.y + zigzag + sum
                if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                if (board[y][x].piece.notation == "") {
                    result.push({
                        x,
                        y
                    })
                    sum += temp ? -1 : 0
                    temp = !temp

                } else {
                    if (this.c != board[y][x].piece.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                    break;
                }
            }
            //~~+~~+~~+~~+~LEFT DOWN~+~~+~~+~~+~~//
            temp = true;
            sum = 0;
            for (let x = this.x - 1; x >= 0; x--) {
                let zigzag = temp ? 1 : 0;
                let y = this.y + zigzag + sum;
                if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                if (board[y][x].piece.notation == "") {
                    result.push({
                        x,
                        y
                    })
                    sum += temp ? 1 : 0
                    temp = !temp
                } else {
                    if (this.c != board[y][x].piece.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                    break;
                }
            }


            //~~+~~+~~+~~+~RIGHT DOWN~+~~+~~+~~+~~//
            temp = true;
            sum = 0;
            for (let x = this.x + 1; x <= 7; x++) {
                let zigzag = temp ? 1 : 0;
                let y = this.y + zigzag + sum
                if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                if (board[y][x].piece.notation == "") {
                    result.push({
                        x,
                        y
                    })
                    sum += temp ? 1 : 0
                    temp = !temp

                } else {
                    if (this.c != board[y][x].piece.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                    break;
                }
            }
            //~~+~~+~~+~~+~LEFT UP~+~~+~~+~~+~~//
            temp = false;
            sum = 0;
            for (let x = this.x - 1; x >= 0; x--) {
                let zigzag = temp ? -1 : 0;
                let y = this.y + zigzag + sum
                if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                if (board[y][x].piece.notation == "") {
                    result.push({
                        x,
                        y
                    })
                    sum += temp ? -1 : 0
                    temp = !temp
                } else {
                    if (this.c != board[y][x].piece.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                    break;
                }
            }
        } else { // EVEN
            //~~+~~+~~+~~+~RIGHT UP~+~~+~~+~~+~~//
            let temp = true;
            let sum = 0;
            for (let x = this.x + 1; x <= 7; x++) {
                let zigzag = temp ? -1 : 0;
                let y = this.y + zigzag + sum;
                if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                if (board[y][x].piece.notation == "") {
                    result.push({
                        x,
                        y,
                    })
                    sum += temp ? -1 : 0
                    temp = !temp
                } else {
                    if (this.c != board[y][x].piece.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                    break;
                }
            }
            //~~+~~+~~+~~+~LEFT DOWN~+~~+~~+~~+~~//
            temp = false;
            sum = 0;
            for (let x = this.x - 1; x >= 0; x--) {
                let zigzag = temp ? 1 : 0;
                let y = this.y + zigzag + sum
                if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                if (board[y][x].piece.notation == "") {
                    result.push({
                        x: x,
                        y: y,
                    })
                    sum += temp ? 1 : 0
                    temp = !temp
                } else {
                    if (this.c != board[y][x].piece.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                    break;
                }
            }

            //~~+~~+~~+~~+~RIGHT DOWN~+~~+~~+~~+~~//
            temp = false;
            sum = 0;
            for (let x = this.x + 1; x <= 7; x++) {
                let zigzag = temp ? 1 : 0;
                let y = this.y + zigzag + sum
                if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                if (board[y][x].piece.notation == "") {
                    result.push({
                        x,
                        y
                    })
                    sum += temp ? 1 : 0
                    temp = !temp

                } else {
                    if (this.c != board[y][x].piece.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                    break;
                }
            }
            //~~+~~+~~+~~+~LEFT UP~+~~+~~+~~+~~//
            temp = true;
            sum = 0;
            for (let x = this.x - 1; x >= 0; x--) {
                let zigzag = temp ? -1 : 0;
                let y = this.y + zigzag + sum
                if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                if (board[y][x].piece.notation == "") {
                    result.push({
                        x,
                        y
                    })
                    sum += temp ? -1 : 0
                    temp = !temp
                } else {
                    if (this.c != board[this.y + zigzag + sum][x].piece.c) {
                        result.push({
                            x: x,
                            y: this.y + zigzag + sum,
                        })
                    }
                    break;
                }
            }
        }
        this.availableMoves = result;
    }
}

class King {
    constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.c = c;
        this.notation = "K";
        this.value = 99999999999999999;
    }
    getAvailableMoves(board) {
        let result = [];
        //~+~~+~~+~~UP~~+~~+~~+~//
        if (isOdd(this.x)) {
            let Xs = [0, 1, 1, 0, -1, -1]
            let Ys = [-1, 0, 1, 1, 1, 0]
            for (let i = 0; i < Xs.length; i++) {
                let x = this.x + Xs[i];
                let y = this.y + Ys[i];
                if (y >= 0 && y < 8 && x >= 0 && x < 8 && board[y][x].piece.c != this.c) {
                    result.push({
                        x,
                        y
                    })
                }
            }
        } else { // EVEN
            let Xs = [0, 1, 1, 0, -1, -1]
            let Ys = [-1, -1, 0, 1, 0, -1]
            for (let i = 0; i < Xs.length; i++) {
                let x = this.x + Xs[i];
                let y = this.y + Ys[i];
                if (y >= 0 && y < 8 && x >= 0 && x < 8 && board[y][x].piece.c != this.c) {
                    result.push({
                        x,
                        y
                    })
                }
            }
        }
        this.availableMoves = result;
    }
}

class Queen {
    constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.c = c;
        this.notation = "Q";
        this.value = 9;
    }
    getAvailableMoves(board) {
        let result = [];
        //~~+~~+~~+~~+~UP&DOWN~+~~+~~+~~+~~//
        for (let y = this.y + 1; y <= 7; y++) {
            if (board[y][this.x].piece.notation == "") {
                result.push({
                    x: this.x,
                    y: y,
                })
            } else {
                if (this.c != board[y][this.x].piece.c) {
                    result.push({
                        x: this.x,
                        y: y,
                    })
                }
                break;
            }
        }
        for (let y = this.y - 1; y >= 0; y--) {
            if (board[y][this.x].piece.notation == "") {
                result.push({
                    x: this.x,
                    y: y,
                })
            } else {
                if (this.c != board[y][this.x].piece.c) {
                    result.push({
                        x: this.x,
                        y: y,
                    })
                }
                break;
            }
        }
        //~~+~~+~~+~~+~UP&DOWN~+~~+~~+~~+~~//
        if (isOdd(this.x)) {
            //~~+~~+~~+~~+~RIGHT UP~+~~+~~+~~+~~//
            let temp = false;
            let sum = 0;
            for (let x = this.x + 1; x <= 7; x++) {
                let zigzag = temp ? -1 : 0;
                let y = this.y + zigzag + sum
                if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                if (board[y][x].piece.notation == "") {
                    result.push({
                        x,
                        y
                    })
                    sum += temp ? -1 : 0
                    temp = !temp

                } else {
                    if (this.c != board[y][x].piece.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                    break;
                }
            }
            //~~+~~+~~+~~+~LEFT DOWN~+~~+~~+~~+~~//
            temp = true;
            sum = 0;
            for (let x = this.x - 1; x >= 0; x--) {
                let zigzag = temp ? 1 : 0;
                let y = this.y + zigzag + sum
                if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                if (board[y][x].piece.notation == "") {
                    result.push({
                        x,
                        y
                    })
                    sum += temp ? 1 : 0
                    temp = !temp
                } else {
                    if (this.c != board[y][x].piece.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                    break;
                }
            }


            //~~+~~+~~+~~+~RIGHT DOWN~+~~+~~+~~+~~//
            temp = true;
            sum = 0;
            for (let x = this.x + 1; x <= 7; x++) {
                let zigzag = temp ? 1 : 0;
                let y = this.y + zigzag + sum
                if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                if (board[y][x].piece.notation == "") {
                    result.push({
                        x: x,
                        y: y,
                    })
                    sum += temp ? 1 : 0
                    temp = !temp

                } else {
                    if (this.c != board[y][x].piece.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                    break;
                }
            }
            //~~+~~+~~+~~+~LEFT UP~+~~+~~+~~+~~//
            temp = false;
            sum = 0;
            for (let x = this.x - 1; x >= 0; x--) {
                let zigzag = temp ? -1 : 0;
                let y = this.y + zigzag + sum
                if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                if (board[y][x].piece.notation == "") {
                    result.push({
                        x,
                        y
                    })
                    sum += temp ? -1 : 0
                    temp = !temp
                } else {
                    if (this.c != board[y][x].piece.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                    break;
                }
            }
        } else { // EVEN
            //~~+~~+~~+~~+~RIGHT UP~+~~+~~+~~+~~//
            let temp = true;
            let sum = 0;
            for (let x = this.x + 1; x <= 7; x++) {
                let zigzag = temp ? -1 : 0;
                let y = this.y + zigzag + sum
                if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                if (board[y][x].piece.notation == "") {
                    result.push({
                        x,
                        y
                    })
                    sum += temp ? -1 : 0
                    temp = !temp

                } else {
                    if (this.c != board[y][x].piece.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                    break;
                }
            }
            //~~+~~+~~+~~+~LEFT DOWN~+~~+~~+~~+~~//
            temp = false;
            sum = 0;
            for (let x = this.x - 1; x >= 0; x--) {
                let zigzag = temp ? 1 : 0;
                let y = this.y + zigzag + sum;
                if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                if (board[y][x].piece.notation == "") {
                    result.push({
                        x,
                        y
                    })
                    sum += temp ? 1 : 0
                    temp = !temp
                } else {
                    if (this.c != board[y][x].piece.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                    break;
                }
            }

            //~~+~~+~~+~~+~RIGHT DOWN~+~~+~~+~~+~~//
            temp = false;
            sum = 0;
            for (let x = this.x + 1; x <= 7; x++) {
                let zigzag = temp ? 1 : 0;
                let y = this.y + zigzag + sum
                if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                if (board[y][x].piece.notation == "") {
                    result.push({
                        x,
                        y
                    })
                    sum += temp ? 1 : 0
                    temp = !temp

                } else {
                    if (this.c != board[y][x].piece.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                    break;
                }
            }
            //~~+~~+~~+~~+~LEFT UP~+~~+~~+~~+~~//
            temp = true;
            sum = 0;
            for (let x = this.x - 1; x >= 0; x--) {
                let zigzag = temp ? -1 : 0;
                let y = this.y + zigzag + sum
                if (!(y >= 0 && y < 8 && x >= 0 && x < 8)) break;
                if (board[y][x].piece.notation == "") {
                    result.push({
                        x,
                        y
                    })
                    sum += temp ? -1 : 0
                    temp = !temp
                } else {
                    if (this.c != board[y][x].piece.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                    break;
                }
            }
        }
        let evens = [0, 2, 4, 6];
        let odds = [1, 3, 5, 7];
        if (isOdd(this.x)) {
            let index = odds.indexOf(this.x);
            odds.splice(index, 1);
            for (let i = 0; i < odds.length; i++) {
                if (board[this.y][odds[i]].piece.notation == "" || this.c != board[this.y][odds[i]].piece.c) {
                    result.push({
                        x: odds[i],
                        y: this.y,
                    })
                }
            }
        } else {
            let index = evens.indexOf(this.x);
            evens.splice(index, 1);
            for (let i = 0; i < evens.length; i++) {
                if (board[this.y][evens[i]].piece.notation == "" || this.c != board[this.y][evens[i]].piece.c) {
                    result.push({
                        x: evens[i],
                        y: this.y,
                    })
                }
            }
        }


        this.availableMoves = result;
    }
}

class Pawn {
    constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.c = c;
        this.notation = "P";
        this.value = 1;
    }
    getAvailableMoves(board) {
        let result = [];
        //~+~~+~~+~~UP~~+~~+~~+~//
        if ((this.y != 7 && this.c == -1) || (this.y != 0 && this.c == 1)) {
            if (board[this.y - this.c][this.x].piece.notation == "") {
                result.push({
                    x: this.x,
                    y: this.y - this.c
                })
            }
        }
        if ((this.y == 6 && this.c == 1) || (this.y == 1 && this.c == -1)) {
            if (board[this.y - 2 * this.c][this.x].piece.notation == "" && board[this.y - this.c][this.x].piece.notation == "") {
                result.push({
                    x: this.x,
                    y: this.y - 2 * this.c
                })
            }
        }
        //~+~~+~~+~~UP~~+~~+~~+~//
        if (isOdd(this.x)) {
            // take right -1
            if (this.c == -1) { // -1
                let x = this.x - this.c
                let y = this.y - this.c
                if (y >= 0 && y < 8 && x >= 0 && x < 8 && board[y][x].piece.notation != "") {
                    if (board[y][x].piece.c != this.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                }
                //take left -1
                x = this.x + this.c
                y = this.y - this.c
                if (y >= 0 && y < 8 && x >= 0 && x < 8 && board[y][x].piece.notation != "") {
                    if (board[y][x].piece.c != this.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                }
            } else { // +1
                //take right +1
                let x = this.x + this.c
                let y = this.y
                if (y >= 0 && y < 8 && x >= 0 && x < 8 && board[y][x].piece.notation != "") {
                    if (board[y][x].piece.c != this.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                }
                //take left +1
                x = this.x - this.c
                y = this.y
                if (y >= 0 && y < 8 && x >= 0 && x < 8 && board[y][x].piece.notation != "") {
                    if (board[y][x].piece.c != this.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                }
            }
        } else { // EVEN
            // take right -1
            if (this.c == -1) { // -1
                let x = this.x - this.c
                let y = this.y
                if (y >= 0 && y < 8 && x >= 0 && x < 8 && board[y][x].piece.notation != "") {
                    if (board[y][x].piece.c != this.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                }
                //take left -1
                x = this.x + this.c
                y = this.y
                if (y >= 0 && y < 8 && x >= 0 && x < 8 && board[y][x].piece.notation != "") {
                    if (board[y][x].piece.c != this.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                }
            } else { // +1
                //take right +1
                let x = this.x + this.c
                let y = this.y - this.c
                if (y >= 0 && y < 8 && x >= 0 && x < 8 && board[y][x].piece.notation != "") {
                    if (board[y][x].piece.c != this.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                }
                //take left +1
                x = this.x - this.c
                y = this.y - this.c
                if (y >= 0 && y < 8 && x >= 0 && x < 8 && board[y][x].piece.notation != "") {
                    if (board[y][x].piece.c != this.c) {
                        result.push({
                            x,
                            y
                        })
                    }
                }
            }
        }

        this.availableMoves = result;
    }
}
//~+~~+~~+~~HELPER FUNCTIONS~~+~~+~~+~//  
function isOdd(x) {
    return x % 2 == 1;
}

function fillBoardSimplified(simplifiedBoard) {
    let board = makeBoard();
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            let color = -1;
            if (simplifiedBoard[y][x].slice(0, 1) == "+") {
                color = 1;
            }
            switch (simplifiedBoard[y][x].slice(1, 2)) {
                case "R":
                    board[y][x].piece = new Rook(x, y, color)
                    break;
                case "N":
                    board[y][x].piece = new Knight(x, y, color)
                    break;
                case "B":
                    board[y][x].piece = new Bishop(x, y, color)
                    break;
                case "Q":
                    board[y][x].piece = new Queen(x, y, color)
                    break;
                case "K":
                    board[y][x].piece = new King(x, y, color)
                    break;
                case "I":
                    board[y][x].piece = new InvertedRook(x, y, color)
                    break;
                case "P":
                    board[y][x].piece = new Pawn(x, y, color)
                    break;
            }


        }
    }
    return board;
}

function displayBoard(b) {
    let board = b;
    let result = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]
    for (let y = 0; y < board[0].length; y++) {
        for (let x = 0; x < board[0].length; x++) {
            let sign = "";
            if (board[y][x].piece.c == -1) {
                sign = "-"
            }
            if (board[y][x].piece.c == 1) {
                sign = "+"
            }
            result[y][x] = sign + board[y][x].piece.notation;
        }
    }
    //console.table(result);

    return result;
}

function fillBoard(b) {
    let board = b;
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            if (y == 1 || y == 6) {
                board[y][x].piece = new Pawn(x, y, y == 1 ? -1 : 1)
            }
            if (y == 0 || y == 7) {
                switch (x) {
                    case 0:
                        if (y == 0) {
                            board[y][x].piece = new Rook(x, y, -1)
                        } else {
                            board[y][x].piece = new InvertedRook(x, y, 1)
                        }
                        break;
                    case 1:
                        board[y][x].piece = new Knight(x, y, y == 0 ? -1 : 1)
                        break;
                    case 2:
                        board[y][x].piece = new Bishop(x, y, y == 0 ? -1 : 1)
                        break;
                    case 3:
                        if (y == 0) {
                            board[y][x].piece = new Queen(x, y, y == 0 ? -1 : 1)
                        } else {
                            board[y][x].piece = new King(x, y, y == 0 ? -1 : 1)
                        }
                        break;
                    case 4:
                        if (y == 0) {
                            board[y][x].piece = new King(x, y, y == 0 ? -1 : 1)
                        } else {
                            board[y][x].piece = new Queen(x, y, y == 0 ? -1 : 1)
                        }
                        break;
                    case 5:
                        board[y][x].piece = new Bishop(x, y, y == 0 ? -1 : 1)
                        break;
                    case 6:
                        board[y][x].piece = new Knight(x, y, y == 0 ? -1 : 1)
                        break;
                    case 7:
                        if (y == 0) {
                            board[y][x].piece = new InvertedRook(x, y, -1);
                        } else {
                            board[y][x].piece = new Rook(x, y, 1)
                        }
                        break;
                }
            }
        }
    }
    return board;
}

function makeBoard() {
    const board = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            board[y][x] = new Hexagon(x, y, {
                notation: ""
            });
        }
    }
    return board;
}

function getActions(b) {
    let result = [];
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            if (b[y][x].piece.notation != "") {
                result.push({
                    x,
                    y,
                    actions: b[y][x].piece.availableMoves
                })
            }
        }
    }
    return result;
}

function updateAvailableMoves(b) {
    let board = b;
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            if (board[y][x].piece.notation != "") {
                board[y][x].piece.getAvailableMoves(board);
            }
        }
    }
}
//~+~~+~~+~~MAIN GAME~~+~~+~~+~//
class Game {
    constructor(index) {
        this.board = makeBoard();
        this.board = fillBoard(this.board);
        updateAvailableMoves(this.board);
        this.simplifiedBoard = displayBoard(this.board);
        this.history = [this.simplifiedBoard];
        this.actions = getActions(this.board);
        this.actionHistory = [this.actions]
        this.lastMoveHistory = [];
        this.idWhite = "";
        this.idBlack = "";
        this.whoMoves = 1;
        this.lastTimePassed = 0;
        this.timeIndex = index;
        this.startClock(this.timeIndex)
    }

    startClock(index) {
        switch (index) {
            case 0:
                this.timeBlack = 120 * 1000;
                this.timeWhite = 120 * 1000;
                this.increasement = 1 * 1000;
                break;
            case 1:
                this.timeBlack = 300 * 1000;
                this.timeWhite = 300 * 1000;
                this.increasement = 0 * 1000;
                break;
            case 2:
                return;
        }
    }

    getTimes() {
        return {
            black: this.timeBlack,
            white: this.timeWhite
        }
    }

    hasHistory() {
        if (this.history.length > 1) {
            return true;
        }
        return false;
    }

    getSimplifiedBoard() {
        return displayBoard(this.board)
    }

    getPreviousBoard() {
        this.history.pop()
        this.actionHistory.pop()
        let simplifiedBoard = this.history[this.history.length - 1];
        this.actions = this.actionHistory[this.actionHistory.length - 1];
        this.board = fillBoardSimplified(simplifiedBoard);
        this.whoMoves *= -1;
        return simplifiedBoard;
    }

    move(from, to) {
        let piece = this.board[from.y][from.x].piece;
        this.board[from.y][from.x].piece = {
            notation: ""
        }
        if (piece.notation == "P") {
            if (to.y == 7 || to.y == 0) {
                let c = 1;
                if (to.y == 7) {
                    c = -1
                }
                piece = new Queen(to.x, to.y, c)
            }
        }
        this.board[to.y][to.x].piece = piece;
        this.board[to.y][to.x].piece.x = to.x;
        this.board[to.y][to.x].piece.y = to.y;
        updateAvailableMoves(this.board)
        this.actions = getActions(this.board);
        this.actionHistory.push(this.actions);
        let newBoard = displayBoard(this.board);
        this.history.push(newBoard);
        if (this.whoMoves == 1) {
            let timePassed = this.lastBlackMove ? Date.now() - this.lastBlackMove : 0;
            timePassed -= this.increasement;
            this.lastWhiteMove = Date.now();
            this.timeWhite -= timePassed;
        } else {
            let timePassed = this.lastWhiteMove ? Date.now() - this.lastWhiteMove : 0;
            timePassed -= this.increasement;
            this.lastBlackMove = Date.now();
            this.timeBlack -= timePassed;
        }
        this.whoMoves *= -1;
        return newBoard;
    }

    getNewActions() {
        return this.actions
    }

    setId(id) {
        if (!this.idWhite) {
            this.idWhite = id;
        } else {
            if (!this.idBlack) {
                this.idBlack = id;
            }
        }
    }

    resetId(mark) {
        if (mark == 1) {
            this.idWhite = "";
        }
        if (mark == -1) {
            this.idBlack = "";
        }
    }

    canMove(id) {
        if (this.whoMoves == 1 && id == this.idWhite) {
            return true;
        }
        if (this.whoMoves == -1 && id == this.idBlack) {
            return true;
        }
        return false;
    }

    getLastMove() {
        if (this.lastMoveHistory.length > 0) {
            return this.lastMoveHistory[this.lastMoveHistory.length - 1]
        }
        return {
            from: {
                x: 100,
                y: 100
            },
            to: {
                x: 100,
                y: 100
            }
        }
    }

    setLastMove(newMove) {
        this.lastMoveHistory.push(newMove)
    }

    getPreviousMove() {
        if (this.lastMoveHistory.length > 1) {
            this.lastMoveHistory.pop()
            return this.lastMoveHistory[this.lastMoveHistory.length - 1]
        }
        return {
            from: {
                x: 100,
                y: 100
            },
            to: {
                x: 100,
                y: 100
            }
        }
    }

    newUndoRequest(id) {
        if (!this.undoRequest) {
            this.undoRequest = id;
            return false;
        }
        if (this.undoRequest != id) {
            this.undoRequest = false;
            return true;
        }
    }

    newGameRequest(id) {
        if (!this.newGame) {
            this.newGame = id;
            return false;
        }
        if (this.newGame != id) {
            this.newGame = false;
            this.board = makeBoard();
            this.board = makeBoard();
            this.board = fillBoard(this.board);
            updateAvailableMoves(this.board);
            this.simplifiedBoard = displayBoard(this.board);
            this.history = [this.simplifiedBoard];
            this.actions = getActions(this.board);
            this.actionHistory = [this.actions]
            this.lastMoveHistory = [];
            this.whoMoves = 1;
            this.lastTimePassed = 0;
            this.startClock(this.timeIndex)
            this.lastBlackMove = false;
            this.lastWhiteMove = false
            //console.log(this.timeBlack, this.timeWhite)
            return true;
        }
    }

    flipColors() {
        let placeholder = this.idBlack;
        this.idBlack = this.idWhite;
        this.idWhite = placeholder;
    }

    flipColorsRequest(id) {
        if (!this.flipColorsReq) {
            this.flipColorsReq = id;
            return false;
        }
        if (this.flipColorsReq != id) {
            this.flipColorsReq = false;
            return true;
        }
    }

    evaluation(board) {
        let sumW = 0
        let sumB = 0
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                if (board[y][x].piece.c == 1) sumW += board[y][x].piece.value;
                if (board[y][x].piece.c == -1) sumB += board[y][x].piece.value;
            }
        }
        let evaluation = sumW - sumB;
        return evaluation;
    }

    getAllMoves(b, c) {
        let allMoves = []
        let board = b
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                if (board[y][x].piece.notation != "") {
                    board[y][x].piece.getAvailableMoves(board);
                    if (board[y][x].piece.availableMoves.length > 0 && board[y][x].piece.c == c) {
                        for (let i = 0; i < board[y][x].piece.availableMoves.length; i++) {
                            allMoves.push({
                                from: {
                                    x: board[y][x].piece.x,
                                    y: board[y][x].piece.y,
                                },
                                to: {
                                    x: board[y][x].piece.availableMoves[i].x,
                                    y: board[y][x].piece.availableMoves[i].y,
                                }
                            })
                        }
                    }
                }
            }
        }
        return allMoves;
    }

    getBoardFromMove(board, {
        from,
        to
    }) {
        let b = fillBoardSimplified(displayBoard(board));
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                if (b[y][x].piece.notation != "") b[y][x].piece.getAvailableMoves(b);
            }
        }
        let piece = b[from.y][from.x].piece;
        b[from.y][from.x].piece = {
            notation: ""
        }
        if (piece.notation == "P") {
            if (to.y == 7 || to.y == 0) {
                let c = 1;
                if (to.y == 7) {
                    c = -1
                }
                piece = new Queen(to.x, to.y, c)
            }
        }
        b[to.y][to.x].piece = piece;
        b[to.y][to.x].piece.x = to.x;
        b[to.y][to.x].piece.y = to.y;
        return b;
    }

    getAllBoards(b, c) {
        let startingB = b
        let boards = []
        let moves = this.getAllMoves(startingB, c)
        for (let move of moves) {
            let newBoard = this.getBoardFromMove(startingB, move);
            boards.push(newBoard)
        }
        return boards;
    }

    minimax(board, depth, alpha, beta, maximazingPlayer, c) {
        if (depth == 0) { // or game over 
            return this.evaluation(board)
        }
        if (maximazingPlayer) {
            let maxEval = -1000000000000;
            this.getAllBoards(board, c).forEach(child => {
                /*console.table(displayBoard(child))
                console.log(this.evaluation(child))
                maximazingPlayer ? console.log("max") : console.log("min")*/
                let e = this.minimax(child, depth - 1, alpha, beta, false, c * -1);
                maxEval = Math.max(maxEval, e)
                alpha = Math.max(alpha, e);
                if (beta <= alpha) {
                    return;
                }
            });
            return maxEval;
        } else {
            let minEval = 1000000000000;
            this.getAllBoards(board, c).forEach(child => {
                let e = this.minimax(child, depth - 1, alpha, beta, true, c * -1)
                minEval = Math.min(minEval, e)
                beta = Math.min(beta, e);
                if (beta <= alpha) {
                    return;
                }
            })
            return minEval
        }
    }

    getBestMove(depth) {
        let bestMove;
        let record = 1000000;
        let moves = this.getAllMoves(this.board, -1)
        for (let move in moves) {
            let board = this.getBoardFromMove(this.board, moves[move])
            let e = this.minimax(board, depth, -Infinity, Infinity, false, -1)
            console.log(e) // wtf
            if (e < record) {
                record = e;
                bestMove = moves[move]
            }
            record = Math.min(record, e)
        }
        return bestMove;
    }
}

module.exports = {
    Game
}