function Game(canvas) {
  this.canvas = canvas

  let ctx = this.canvas.getContext("2d");
  let bunny = new Rabits()
  let carrot = new Carrots()

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

  this.drawCarrots = function () {
    carrot.draw(ctx, bunny)
  }

  this.bunnyGotCarrot = function () {
    if (Math.abs((bunny.x + bunny.width / 2) - (carrot.x + carrot.width / 2)) <= (bunny.width + carrot.width) / 2) {
      console.log("ăn")
      carrot.eraseCarrot(ctx)
    }
  }
}