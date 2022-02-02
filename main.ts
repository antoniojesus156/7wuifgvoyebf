let start = 0
let past = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    let point = 0
    past = input.runningTime() - start
    past = Math.abs(past - 7000)
    basic.showNumber(point)
})
basic.forever(function () {
	
})
