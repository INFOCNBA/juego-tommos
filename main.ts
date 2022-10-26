input.onButtonPressed(Button.A, function () {
    sprite.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
let bala3: game.LedSprite = null
let lado = 0
let bala2: game.LedSprite = null
let bala: game.LedSprite = null
let arriba_o_derecha = 0
let puntos = 0
let p_real = 0
let sprite: game.LedSprite = null
let vida = 3
sprite = game.createSprite(1, 3)
basic.forever(function () {
    basic.pause(3000)
    while (game.isRunning()) {
        p_real = Math.idiv(puntos, 5)
        if (p_real < 20) {
            arriba_o_derecha = randint(0, 4)
            bala = game.createSprite(0, arriba_o_derecha)
            for (let index = 0; index < 5; index++) {
                basic.pause(500)
                bala.move(1)
                if (sprite.isTouching(bala)) {
                    vida += -1
                    music.playMelody("F - B - - - - - ", 500)
                } else {
                    puntos += 1
                }
                if (vida == 0) {
                    music.playMelody("D F E G F A G B ", 120)
                    bala.delete()
                    sprite.delete()
                    for (let index = 0; index < 3; index++) {
                        basic.showNumber(p_real)
                    }
                    game.gameOver()
                }
            }
            bala.delete()
        } else if (p_real >= 20 && p_real < 40) {
            arriba_o_derecha = randint(0, 4)
            bala = game.createSprite(1, arriba_o_derecha)
            bala2 = game.createSprite(0, (arriba_o_derecha + 3) % 5)
            for (let index = 0; index < 5; index++) {
                basic.pause(500)
                bala.move(1)
                bala2.move(1)
                if (sprite.isTouching(bala) || sprite.isTouching(bala2)) {
                    vida += -1
                    music.playMelody("F - B - - - - - ", 500)
                } else {
                    puntos += 1
                }
                if (vida == 0) {
                    music.playMelody("D F E G F A G B ", 120)
                    bala.delete()
                    sprite.delete()
                    bala2.delete()
                    for (let index = 0; index < 3; index++) {
                        basic.showNumber(p_real)
                    }
                    game.gameOver()
                }
            }
            bala.delete()
            bala2.delete()
        } else if (p_real >= 40 && p_real < 60) {
            lado = randint(1, 2)
            arriba_o_derecha = randint(0, 4)
            if (lado == 1) {
                bala = game.createSprite(0, arriba_o_derecha)
            } else {
                bala = game.createSprite(arriba_o_derecha, 0)
                bala.turn(Direction.Right, 90)
            }
            lado = randint(1, 2)
            arriba_o_derecha = randint(0, 4)
            if (lado == 1) {
                bala2 = game.createSprite(0, arriba_o_derecha)
            } else {
                bala2 = game.createSprite(arriba_o_derecha, 0)
                bala2.turn(Direction.Right, 90)
            }
            for (let index = 0; index < 5; index++) {
                basic.pause(500)
                bala.move(1)
                bala2.move(1)
                if (sprite.isTouching(bala) || sprite.isTouching(bala2)) {
                    vida += -1
                    music.playMelody("F - B - - - - - ", 500)
                } else {
                    puntos += 1
                }
                if (vida == 0) {
                    music.playMelody("D F E G F A G B ", 120)
                    sprite.delete()
                    bala.delete()
                    bala2.delete()
                    for (let index = 0; index < 3; index++) {
                        basic.showNumber(p_real)
                    }
                    game.gameOver()
                }
            }
            bala.delete()
            bala2.delete()
        } else if (p_real >= 60 && p_real < 80) {
            lado = randint(1, 2)
            arriba_o_derecha = randint(0, 4)
            if (lado == 1) {
                bala = game.createSprite(0, arriba_o_derecha)
            } else {
                bala = game.createSprite(arriba_o_derecha, 0)
                bala.turn(Direction.Right, 90)
            }
            lado = randint(1, 2)
            arriba_o_derecha = randint(0, 4)
            if (lado == 1) {
                bala2 = game.createSprite(0, arriba_o_derecha)
            } else {
                bala2 = game.createSprite(arriba_o_derecha, 0)
                bala2.turn(Direction.Right, 90)
            }
            lado = randint(1, 2)
            arriba_o_derecha = randint(0, 4)
            if (lado == 1) {
                bala3 = game.createSprite(0, arriba_o_derecha)
            } else {
                bala3 = game.createSprite(arriba_o_derecha, 0)
                bala3.turn(Direction.Right, 90)
            }
            for (let index = 0; index < 5; index++) {
                basic.pause(500)
                bala.move(1)
                bala2.move(1)
                bala3.move(1)
                if (sprite.isTouching(bala) || (sprite.isTouching(bala2) || sprite.isTouching(bala3))) {
                    vida += -1
                    music.playMelody("F - B - - - - - ", 500)
                } else {
                    puntos += 1
                }
                if (vida == 0) {
                    music.playMelody("D F E G F A G B ", 120)
                    sprite.delete()
                    bala2.delete()
                    bala.delete()
                    bala3.delete()
                    for (let index = 0; index < 3; index++) {
                        basic.showNumber(p_real)
                    }
                    game.gameOver()
                }
            }
            bala.delete()
            bala2.delete()
            bala3.delete()
        } else if (p_real == 190) {
            music.playMelody("D F E G F A G B ", 120)
            sprite.delete()
            bala2.delete()
            bala.delete()
            bala3.delete()
            for (let index = 0; index < 3; index++) {
                basic.showNumber(p_real)
            }
            game.gameOver()
        }
    }
})
