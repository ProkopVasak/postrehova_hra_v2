pins.touch_set_mode(TouchTarget.P1, TouchTargetMode.CAPACITIVE)
pins.touch_set_mode(TouchTarget.P2, TouchTargetMode.CAPACITIVE)
cas = False
pinA = 0
pinB = 0
def on_pin_pressed_p1():
    global pinA
    pinA = 1
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)
def on_pin_pressed_p2():
    global pinB
    pinB = 1
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def main():
    global cas
    music.play_tone(Note.G, 1000)
    basic.show_string("S")
    basic.clear_screen()
    cas = False
    basic.pause(randint(3000, 10000))
    cas = True
    if pinA == 0 and pinB == 0:
        music.play_tone(Note.C, 1000)
control.in_background(main)

def points():
    if cas == False:
        if pinA == 1:
            basic.show_string("B")
            basic.pause(3000)
            control.reset()
        elif pinB == 1:
            basic.show_string("A")
            basic.pause(3000)
            control.reset()
        elif pinA == 1 and pinB == 1:
            basic.show_string("C")
            basic.pause(3000)
            control.reset()
    if cas == True:
        if pinA == 1:
            basic.show_string("A")
            basic.pause(3000)
            control.reset()
        elif pinB == 1:
            basic.show_string("B")
            basic.pause(3000)
            control.reset()
        elif pinA == 1 and pinB == 1:
            basic.show_string("R")
            basic.pause(3000)
            control.reset()
basic.forever(points)