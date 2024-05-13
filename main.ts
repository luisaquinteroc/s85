let HUMIDITY = 0
basic.forever(function () {
    HUMIDITY += pins.analogReadPin(AnalogPin.P0)
    if (HUMIDITY < 341) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (HUMIDITY >= 342 && HUMIDITY <= 682) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
    } else if (HUMIDITY > 683) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . . . . .
            `)
    }
})
