let start_time = 0
let stop_time = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
    start_time = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    stop_time = input.runningTime()
    basic.showNumber((stop_time - start_time) / 1000)
})
basic.forever(function () {
    basic.showNumber(fwdSensors.dial1.fwdPosition())
})
