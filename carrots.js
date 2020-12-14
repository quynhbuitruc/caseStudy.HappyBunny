function Carrots() {
    this.x = Math.round(Math.random() * 550)
    this.y = Math.round(Math.random() * 550)

    let img = new Image()
    img.src = "carrots.png"

    this.draw = function (ctx, bunny) {
        if (bunny.x !== this.x || bunny.y !== this.y) {
            ctx.drawImage(img, this.x, this.y)
        }
    }
}