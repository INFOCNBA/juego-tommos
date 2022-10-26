def nueva_columna():
    global calcular_pos2
    # problema makecode, usamos globales :((
    calcular_pos2 = True
    while calcular_pos2 == True:
        pos2 = randint(0, 4)
        if columnas_ocupadas.index(pos2) >= 0:
            pass
        else:
            columnas_ocupadas.append(pos2)
            calcular_pos2 = False
    return pos2

def on_button_pressed_a():
    sprite.turn(Direction.LEFT, 90)
input.on_button_pressed(Button.A, on_button_pressed_a)

def nueva_fila():
    global calcular_pos
    # problema makecode, usamos globales :((
    calcular_pos = True
    while calcular_pos == True:
        pos = randint(0, 4)
        if columnas_ocupadas.index(pos) >= 0:
            pass
        else:
            filas_ocupadas.append(pos)
            calcular_pos = False
    return pos

def on_button_pressed_b():
    sprite.move(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

bala3: game.LedSprite = None
lado = 0
bala2: game.LedSprite = None
bala: game.LedSprite = None
arriba_o_derecha = 0
p_real = 0
calcular_pos = False
calcular_pos2 = False
columnas_ocupadas: List[number] = []
filas_ocupadas: List[number] = []
sprite: game.LedSprite = None
puntos = 200
vida = 3
sprite = game.create_sprite(1, 3)
filas_ocupadas = [-1]
# problema makecode, array nulo necesita especificar tipo
columnas_ocupadas = [-1]

def on_forever():
    global p_real, arriba_o_derecha, bala, vida, puntos, bala2, lado, bala3
    basic.pause(3000)
    while game.is_running():
        p_real = Math.idiv(puntos, 5)
        if p_real < 20:
            # nivel0
            arriba_o_derecha = randint(0, 4)
            bala = game.create_sprite(0, arriba_o_derecha)
            for index in range(5):
                basic.pause(500)
                bala.move(1)
                if sprite.is_touching(bala):
                    vida += -1
                    music.play_melody("F - B - - - - - ", 500)
                else:
                    puntos += 1
                if vida == 0:
                    music.play_melody("D F E G F A G B ", 120)
                    bala.delete()
                    sprite.delete()
                    for index2 in range(3):
                        basic.show_number(p_real)
                    game.game_over()
            bala.delete()
        elif p_real >= 20 and p_real < 40:
            # nivel1
            arriba_o_derecha = randint(0, 4)
            bala = game.create_sprite(1, arriba_o_derecha)
            bala2 = game.create_sprite(0, (arriba_o_derecha + 3) % 5)
            for index3 in range(5):
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
                    bala.delete()
                    sprite.delete()
                    bala2.delete()
                    for index4 in range(3):
                        basic.show_number(p_real)
                    game.game_over()
            bala.delete()
            bala2.delete()
        elif p_real >= 40 and p_real < 60:
            # nivel2
            lado = randint(1, 2)
            # arriba_o_derecha = randint(0, 4)
            if lado == 1:
                arriba_o_derecha = nueva_columna()
                bala = game.create_sprite(0, arriba_o_derecha)
            else:
                arriba_o_derecha = nueva_fila()
                bala = game.create_sprite(arriba_o_derecha, 0)
                bala.turn(Direction.RIGHT, 90)
            lado = randint(1, 2)
            arriba_o_derecha = randint(0, 4)
            if lado == 1:
                bala2 = game.create_sprite(0, arriba_o_derecha)
            else:
                bala2 = game.create_sprite(arriba_o_derecha, 0)
                bala2.turn(Direction.RIGHT, 90)
            for index5 in range(5):
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
                    sprite.delete()
                    bala.delete()
                    bala2.delete()
                    for index6 in range(3):
                        basic.show_number(p_real)
                    game.game_over()
            bala.delete()
            bala2.delete()
        elif p_real >= 60 and p_real < 80:
            # nivel 3
            lado = randint(1, 2)
            arriba_o_derecha = randint(0, 4)
            if lado == 1:
                bala = game.create_sprite(0, arriba_o_derecha)
            else:
                bala = game.create_sprite(arriba_o_derecha, 0)
                bala.turn(Direction.RIGHT, 90)
            lado = randint(1, 2)
            arriba_o_derecha = randint(0, 4)
            if lado == 1:
                bala2 = game.create_sprite(0, arriba_o_derecha)
            else:
                bala2 = game.create_sprite(arriba_o_derecha, 0)
                bala2.turn(Direction.RIGHT, 90)
            lado = randint(1, 2)
            arriba_o_derecha = randint(0, 4)
            if lado == 1:
                bala3 = game.create_sprite(0, arriba_o_derecha)
            else:
                bala3 = game.create_sprite(arriba_o_derecha, 0)
                bala3.turn(Direction.RIGHT, 90)
            for index7 in range(5):
                basic.pause(500)
                bala.move(1)
                bala2.move(1)
                bala3.move(1)
                if sprite.is_touching(bala) or (sprite.is_touching(bala2) or sprite.is_touching(bala3)):
                    vida += -1
                    music.play_melody("F - B - - - - - ", 500)
                else:
                    puntos += 1
                if vida == 0:
                    music.play_melody("D F E G F A G B ", 120)
                    sprite.delete()
                    bala2.delete()
                    bala.delete()
                    bala3.delete()
                    for index8 in range(3):
                        basic.show_number(p_real)
                    game.game_over()
            bala.delete()
            bala2.delete()
            bala3.delete()
        elif p_real == 190:
            music.play_melody("D F E G F A G B ", 120)
            sprite.delete()
            bala2.delete()
            bala.delete()
            bala3.delete()
            for index9 in range(3):
                basic.show_number(p_real)
            game.game_over()
basic.forever(on_forever)
