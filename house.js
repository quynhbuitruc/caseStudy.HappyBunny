function Houses () {
    this.x = Math.round(Math.random() * 400)
    this.y = Math.round(Math.random() * 400)

    let img = new Image()
    img.src = "bunny house.png"

    this.draw = function (ctx) {
        ctx.drawImage(img, this.x, this.y)
    }
}