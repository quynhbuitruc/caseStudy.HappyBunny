function Rabits() {
    this.x = 250
    this.y = 250
    this.draw = function (ctx) {
        let img = new Image()
        img.src = "bunny.png"
        ctx.drawImage(img, this.x, this.y)
    }
    this.moveRight = function (ctx) {
        ctx.clearRect(this.x, this.y, 50, 50)
        this.x +=50
        ctx.drawImage(img, this.x, this.y)
    }
}
