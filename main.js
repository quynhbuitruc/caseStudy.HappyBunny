let canvas = document.getElementById("game")
let game = new Game(canvas)
window.requestAnimationFrame(tick)


function tick() {
  game.draw()
  window.requestAnimationFrame(tick)
}
