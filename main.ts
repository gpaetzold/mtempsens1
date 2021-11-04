let temperature = 0
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    temperature = pins.analogReadPin(AnalogPin.P2)
    basic.showNumber((temperature - temperature % 5) / 5)
    basic.pause(1000)
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
})
