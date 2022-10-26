def on_button_pressed_a():
    sprite.turn(Direction.LEFT, 90)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    sprite.move(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

bala2: game.LedSprite = None
bala: game.LedSprite = None
fila_de_inicio = 0
sprite: game.LedSprite = None
vida = 3
puntos = 0
sprite = game.create_sprite(1, 3)

def on_forever():
    global fila_de_inicio, bala, bala2, vida, puntos
    basic.pause(3000)
    while game.is_running():
        fila_de_inicio = randint(0, 4)
        bala = game.create_sprite(1, fila_de_inicio)
        bala2 = game.create_sprite(0, (fila_de_inicio + 3) % 5)
        for index in range(5):
            basic.pause(500)
            bala.move(1)
            bala2.move(1)
            if sprite.is_touching(bala) or sprite.is_touching(bala2):
                vida += -1
                music.play_melody("F - B - - - - - ", 500)
            else:
                puntos += 1
            if vida == 0:
                music.play_melody("D F E G F A G B ", 120)
                for index2 in range(3):
                    basic.show_number(Math.idiv(puntos, 5))
                game.game_over()
        bala.delete()
        bala2.delete()
basic.forever(on_forever)
