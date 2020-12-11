let game = new Game()

let canvas = document.getElementById("game")

window.requestAnimationFrame(tick)


function tick() {
  game.draw()
  window.requestAnimationFrame(tick)
}
