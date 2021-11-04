temperature = 0
basic.show_icon(IconNames.HAPPY)
basic.pause(1000)
basic.clear_screen()

def on_forever():
    global temperature
    temperature = pins.analog_read_pin(AnalogPin.P3)
    basic.show_number((temperature - (temperature % 5)) / 5)
basic.forever(on_forever)
