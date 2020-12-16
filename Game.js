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

  let arrRight = 39
  let arrLeft = 37
  let arrUp = 38
  let arrDown = 40
  this.controlBunnyMove = function (keyCode) {
    switch (keyCode) {
      case arrRight:
        bunny.moveRight(ctx)
        break
      case arrLeft:
        bunny.moveLeft(ctx)
        break
      case arrUp:
        bunny.moveUp(ctx)
        break
      case arrDown:
        bunny.moveDown(ctx)
        break
    }
  }

  this.calculateNextStatus = function () {
    if (bunnyGotCarrots() == true) {
      this.score++
      this.showScores()
      carrot = new Carrots()
      house = new Houses()
    }
    this.showLevel()
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
    if (bunny.getLeft() < carrot.x && carrot.x < bunny.getLeft() + 20) {
      if (bunny.getTop() < carrot.y && carrot.y < bunny.getTop() + 20) {
        return true
      }
    } else {
      return false
    }
  }
}

