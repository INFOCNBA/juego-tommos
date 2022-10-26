input.onButtonPressed(Button.A, function () {
    sprite.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
let bala: game.LedSprite = null
let sprite: game.LedSprite = null
let vida = 3
let puntos = 0
sprite = game.createSprite(1, 3)
basic.forever(function () {
    basic.pause(3000)
    while (game.isRunning()) {
        bala = game.createSprite(0, randint(0, 4))
        for (let index = 0; index < 4; index++) {
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
                for (let index = 0; index < 3; index++) {
                    basic.showNumber(Math.idiv(puntos, 5))
                }
                game.gameOver()
            }
        }
    }
})
