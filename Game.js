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
    wolf.draw(ctx)
    house.draw(ctx)
    bunny.draw(ctx)
    carrot.draw(ctx)
  }

  let arrRight = 39
  let arrLeft = 37
  let arrUp = 38
  let arrDown = 40

  this.controlBunnyMove = function (keyCode) {
    if (!isGameOver()) {
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
      wolf.run(house)
    } else {
      wolf.leave(house)
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

  let imageGameOver = new Image()
  imageGameOver.src = "gameover.gif"
  this.gameOver = function () {
    if (isGameOver()) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.drawImage(imageGameOver, (ctx.canvas.width/2)-160, (ctx.canvas.height/2)-160)
      
      document.getElementById("score").innerText = 0
      this.score = 0
      document.getElementById("level").innerText = 0
    }
  }

  function isGameOver() {
    if (wolf.x == bunny.x && wolf.y == bunny.y) {
      return true
    } else {
      return false
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
    if ((bunny.getLeft()+40 ) < (house.x + 100) && bunny.getLeft() > house.x &&
      (bunny.getTop()+50) < (house.y + 100) && bunny.getTop() > house.y) {
      return false
    } else {
      return true
    }
  }
}

