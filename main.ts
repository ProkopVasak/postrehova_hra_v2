pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
let cas = false
let pinA = 0
let pinB = 0
input.onPinPressed(TouchPin.P1, function on_pin_pressed_p1() {
    
    pinA = 1
})
input.onPinPressed(TouchPin.P2, function on_pin_pressed_p2() {
    
    pinB = 1
})
control.inBackground(function main() {
    
    music.playTone(Note.G, 1000)
    basic.showString("S")
    basic.clearScreen()
    cas = false
    basic.pause(randint(3000, 10000))
    cas = true
    if (pinA == 0 && pinB == 0) {
        music.playTone(Note.C, 1000)
    }
    
})
basic.forever(function points() {
    if (cas == false) {
        if (pinA == 1) {
            basic.showString("B")
            basic.pause(3000)
            control.reset()
        } else if (pinB == 1) {
            basic.showString("A")
            basic.pause(3000)
            control.reset()
        } else if (pinA == 1 && pinB == 1) {
            basic.showString("C")
            basic.pause(3000)
            control.reset()
        }
        
    }
    
    if (cas == true) {
        if (pinA == 1) {
            basic.showString("A")
            basic.pause(3000)
            control.reset()
        } else if (pinB == 1) {
            basic.showString("B")
            basic.pause(3000)
            control.reset()
        } else if (pinA == 1 && pinB == 1) {
            basic.showString("R")
            basic.pause(3000)
            control.reset()
        }
        
    }
    
})
