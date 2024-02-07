start_time = 0
stop_time = 0

def on_button_pressed_a():
    global start_time
    start_time = input.running_time()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global stop_time
    stop_time = input.running_time()
    basic.show_number((stop_time - start_time) / 1000)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)
