function Rabits() {
    this.x = 250
    this.y = 250
    let img = new Image()
    img.src = "bunny.png"
    this.draw = function (ctx) {
        ctx.drawImage(img, this.x, this.y)
    }

    this.getLeft = function () {
        return this.x
    }
    this.getTop = function () {
        return this.y
    }

    this.moveRight = function (ctx) {
        if (this.x < (ctx.canvas.width - 50)) {
            this.x += 10
        }
        ctx.drawImage(img, this.x, this.y)
    }
    this.moveLeft = function (ctx) {
        if (this.x >= 10) {
            this.x -= 10
        }
        ctx.drawImage(img, this.x, this.y)
    }
    this.moveUp = function (ctx) {
        if (this.y >= 10) {
            this.y -= 10
        }
        ctx.drawImage(img, this.x, this.y)
    }
    this.moveDown = function (ctx) {
        if (this.y < (ctx.canvas.height - 50)) {
            this.y += 10
        }
        ctx.drawImage(img, this.x, this.y)
    }
}
