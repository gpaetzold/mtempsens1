let temperatur = 0
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    temperatur = pins.analogReadPin(AnalogPin.P3)
    basic.showNumber(temperatur)
})
