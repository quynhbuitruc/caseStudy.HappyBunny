let canvas = document.getElementById("game")
let game = new Game(canvas)
window.requestAnimationFrame(tick)

window.onkeypress = function (event) {
    game.controlBunny(event.keyCode)
}

function tick() {
    game.drawBunny()
    window.requestAnimationFrame(tick)
}

