function Rabits() {
    this.x = 250
    this.y = 250
    let img = new Image()
    img.src = "bunny.png"
    this.draw = function (ctx) {
        ctx.drawImage(img, this.x, this.y)
    }
    this.moveRight = function (ctx) {
        ctx.clearRect(this.x, this.y, 50, 50)
        if (this.x + 50 < 550) {
            this.x += 10
        }
        ctx.drawImage(img, this.x, this.y)
    }
    this.moveLeft = function (ctx) {
        ctx.clearRect(this.x, this.y, 50, 50)
        if (this.x > 10) {
            this.x -= 10
        }
        ctx.drawImage(img, this.x, this.y)
    }
    this.moveUp = function (ctx) {
        ctx.clearRect(this.x, this.y, 50, 50)
        if (this.y > 10) {
            this.y -= 10
        }
        ctx.drawImage(img, this.x, this.y)
    }
    this.moveDown = function (ctx) {
        ctx.clearRect(this.x, this.y, 50, 50)
        if (this.y + 50 < 550) {
            this.y += 10
        }
        ctx.drawImage(img, this.x, this.y)
    }
}
