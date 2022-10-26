input.onButtonPressed(Button.A, function () {
    sprite.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
let puntos = 0
let bala2: game.LedSprite = null
let bala: game.LedSprite = null
let fila_de_inicio = 0
let sprite: game.LedSprite = null
let vida = 3
sprite = game.createSprite(1, 3)
basic.forever(function () {
    basic.pause(3000)
    while (game.isRunning()) {
        fila_de_inicio = randint(0, 4)
        bala = game.createSprite(1, fila_de_inicio)
        bala2 = game.createSprite(0, (fila_de_inicio + 3) % 5)
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
                for (let index = 0; index < 3; index++) {
                    basic.showNumber(Math.idiv(puntos, 5))
                }
                game.gameOver()
            }
        }
        bala.delete()
        bala2.delete()
    }
})
