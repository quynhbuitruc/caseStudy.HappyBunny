let canvas = document.getElementById("game")
let game = new Game(canvas)

window.requestAnimationFrame(tick)

window.onkeydown = function (event) {
    game.controlBunnyMove(event.keyCode)
}

function tick() {
    game.calculateNextStatus()
    game.draw()
    window.requestAnimationFrame(tick)
}
