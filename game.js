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
} //~+~~+~~+~~PIECES~~+~~+~~+~//

function isOdd(x) {
    return x % 2 == 1;
}

class Game {
    constructor() {
        this.board = this.makeBoard();
        this.board = this.fillBoard(this.board);
        this.updateAvailableMoves(this.board);
        this.simplifiedBoard = this.displayBoard(this.board);
        this.history = [this.simplifiedBoard];
        this.actions = this.getActions(this.board);
        this.actionHistory = [this.actions]
        this.idWhite = "";
        this.idBlack = "";
        this.whoMoves = 1;
    }

    hasHistory() {
        if (this.history.length > 1) {
            return true;
        }
        return false;
    }

    getSimplifiedBoard() {
        return this.displayBoard(this.board)
    }

    getPreviousBoard() {
        this.history.pop()
        this.actionHistory.pop()
        let simplifiedBoard = this.history[this.history.length - 1];
        this.actions = this.actionHistory[this.actionHistory.length - 1];
        this.board = this.fillBoardSimplified(simplifiedBoard);
        this.whoMoves *= -1;
        return simplifiedBoard;
    }

    fillBoardSimplified(simplifiedBoard) {
        let board = this.makeBoard();
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

    move(from, to) {
        let piece = this.board[from.y][from.x].piece;
        this.board[from.y][from.x].piece = {
            notation: ""
        }
        this.board[to.y][to.x].piece = piece;
        this.board[to.y][to.x].piece.x = to.x;
        this.board[to.y][to.x].piece.y = to.y;
        this.updateAvailableMoves(this.board)
        this.actions = this.getActions(this.board);
        this.actionHistory.push(this.actions);
        let newBoard = this.displayBoard(this.board);
        this.history.push(newBoard);
        this.whoMoves *= -1;
        return newBoard;
    }

    getNewActions() {
        return this.actions
    }

    displayBoard(b) {
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
        //console.table(result); TODO
        return result;
    }

    fillBoard(b) {
        let board = b;
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                if (y == 1 || y == 6) {
                    board[y][x].piece = new Pawn(x, y, y == 1 ? -1 : 1)
                }
                if (y == 0 || y == 7) {
                    switch (x) {
                        case 0:
                            board[y][x].piece = new Rook(x, y, y == 0 ? -1 : 1)
                            break;
                        case 1:
                            board[y][x].piece = new Knight(x, y, y == 0 ? -1 : 1)
                            break;
                        case 2:
                            board[y][x].piece = new Bishop(x, y, y == 0 ? -1 : 1)
                            break;
                        case 3:
                            board[y][x].piece = new Queen(x, y, y == 0 ? -1 : 1)
                            break;
                        case 4:
                            board[y][x].piece = new King(x, y, y == 0 ? -1 : 1)
                            break;
                        case 5:
                            board[y][x].piece = new Bishop(x, y, y == 0 ? -1 : 1)
                            break;
                        case 6:
                            board[y][x].piece = new Knight(x, y, y == 0 ? -1 : 1)
                            break;
                        case 7:
                            board[y][x].piece = new InvertedRook(x, y, y == 0 ? -1 : 1)
                            break;
                    }
                }
            }
        }
        return board;
    }

    makeBoard() {
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

    getActions(b) {
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

    updateAvailableMoves(b) {
        let board = b;
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                if (board[y][x].piece.notation != "") {
                    board[y][x].piece.getAvailableMoves(board);
                }
            }
        }

    }

    setId(id) {
        if (!this.idWhite) {
            this.idWhite = id;
        } else {
            this.idBlack = id;
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
}

module.exports = {
    Game
}