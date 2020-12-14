function Game(canvas) {
  this.canvas = canvas

  let ctx = this.canvas.getContext("2d");

  let bunny = new Rabits()
  let carrot = new Carrots()

  this.draw = function () {
    ctx.clearRect(0, 0, 550, 550)
    bunny.draw(ctx)
    carrot.draw(ctx)
  }

  this.score = 0
  this.getScore = function () {
    return this.score
  }
  this.showScores = function () {
    let number = this.getScore()
    document.getElementById("score").innerText = number
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

  this.calculateNextStatus = function () {
    if (bunnyGotCarrots() == true) {
      this.score ++
      this.showScores()
      carrot = new Carrots()
    }
  }
  function bunnyGotCarrots() {
    if (bunny.getLeft() < (carrot.x + 30) && (carrot.x + 30) < bunny.getLeft() + 50) {
      if (bunny.getTop() < (carrot.y + 30) && (carrot.y + 30) < bunny.getTop() + 50) {
        return true
      }
    } else {
      return false
    }
  }
}

