function Game(canvas) {
  this.canvas = canvas

  let ctx = this.canvas.getContext("2d");

  this.draw = function () {
    let bunny = new Rabits()
    bunny.draw(ctx)
  }
}