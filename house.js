function Houses (ctx) {
    this.x = Math.round(Math.random() * (ctx.canvas.width - 100))
    this.y = Math.round(Math.random() * (ctx.canvas.height - 100))

    let img = new Image()
    img.src = "bunny house.png"

    this.draw = function (ctx) {
        ctx.drawImage(img, this.x, this.y)
    }
}