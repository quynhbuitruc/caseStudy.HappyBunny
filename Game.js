function Game(canvas) {
  this.canvas = canvas

  let ctx = this.canvas.getContext("2d");
  ctx.canvas.width = window.innerWidth - 30
  ctx.canvas.height = window.innerHeight / 2

  let bunny = new Rabits()
  let carrot = new Carrots(ctx)
  let wolf = new Wolfs(ctx)
  let house = new Houses(ctx)

  this.draw = function () {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
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
      carrot = new Carrots(ctx)
      house = new Houses(ctx)
    }
    this.showLevel()
    if (bunnyIsOutOfHouse() == true) {
      wolf.setTarget(bunny)
      wolf.run()
    } else {
      wolf.leave()
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

  this.gameOver = function () {
    if (wolf.x == bunny.x && wolf.y == bunny.y) {
      alert("GAME OVER !!!")
    }
  }

  function bunnyGotCarrots() {
    if (bunny.getLeft() < carrot.x && carrot.x < bunny.getLeft() + 20
      && bunny.getTop() < carrot.y && carrot.y < bunny.getTop() + 20) {
      return true
    } else {
      return false
    }
  }

  function bunnyIsOutOfHouse() {
    if (bunny.getLeft() < house.x + 50 && bunny.getLeft() > house.x &&
      bunny.getTop() < house.y + 50 && bunny.getTop() > house.y) {
      return false
    } else {
      return true
    }

  }
}

