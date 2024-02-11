input.onButtonPressed(Button.A, function () {
    Mode += 1
    if (Mode == 6) {
        Mode = 1
    }
    basic.showNumber(Mode)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Hello! The MicroOS version currently in use is 1.1. MicroOS is currently under development and may be updated periodically.")
})
input.onButtonPressed(Button.B, function () {
    if (Mode == 1) {
        basic.showString("Welcome to MicroOS! You can see the version with A+B.")
    }
    if (Mode == 2) {
        basic.showString("C")
        basic.showNumber(input.temperature())
    }
    if (Mode == 3) {
        basic.showNumber(input.compassHeading())
    }
    if (Mode == 4) {
        basic.showNumber(input.rotation(Rotation.Pitch))
    }
    if (Mode == 5) {
        basic.showString("uT")
        basic.showNumber(input.magneticForce(Dimension.X))
    }
    if (Mode == 6) {
        Mode = 1
    }
})
let Mode = 0
Mode = 0
basic.showString("Mode" + convertToText(Mode))
