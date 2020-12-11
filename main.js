let canvas = document.getElementById("game")
let game = new Game(canvas)
window.requestAnimationFrame(tick)

window.onkeydown = function (event) {
    console.log(event)
    game.controlBunnyMove(event.keyCode)
}

function tick() {
    game.drawBunny()
    game.drawCarrots()
    window.requestAnimationFrame(tick)
}

