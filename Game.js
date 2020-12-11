function Game(canvas) {
  this.canvas = canvas

  let ctx = this.canvas.getContext("2d");
  let bunny = new Rabits()

  this.drawBunny = function () {
    bunny.draw(ctx)
  }

  this.controlBunnyMove = function (keyCode) {
    switch (keyCode) {
      case 39:
        bunny.moveRight(ctx)
        break
      case 37:
        bunny.moveLeft(ctx)
        break
      case 38:
        bunny.moveUp(ctx)
        break
      case 40:
        bunny.moveDown(ctx)
        break
    }
  }
}