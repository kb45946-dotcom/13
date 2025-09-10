basic.showLeds(`
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `)
for (let index = 0; index < 4; index++) {
    led.enable(true)
    led.enable(false)
    basic.pause(100)
    control.reset()
    led.enable(true)
    led.enable(false)
    basic.pause(2000)
    control.reset()
}
basic.forever(function () {
	
})
