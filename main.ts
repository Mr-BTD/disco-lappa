let Item = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
Item.showRainbow(1, 360)
basic.forever(function () {
    Item.show()
    Item.rotate(1)
    basic.pause(100)
})
