function Game(canvas) {
  this.canvas = canvas

  let ctx = this.canvas.getContext("2d");

  let bunny = new Rabits()
  let carrot = new Carrots()
  let wolf = new Wolfs()
  let house = new Houses()

  this.draw = function () {
    ctx.clearRect(0, 0, 550, 550)
    house.draw(ctx)
    bunny.draw(ctx)
    carrot.draw(ctx)
    wolf.draw(ctx)

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
      this.score++
      this.showScores()
      this.showLevel()
      carrot = new Carrots()
    }
  }

  this.score = 0
  this.showScores = function () {
    document.getElementById("score").innerText = this.score
  }

  this.level = function () {
    let levels = [0, 5, 10, 15, 30, 45, 60, 80, 100]
    for (let i = levels.length - 1; i >= 0; i--) {
      if (this.score >= levels[i]) {
        return i
      }
    }
  }

  this.showLevel = function () {
    document.getElementById("level").innerText = this.level()
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

