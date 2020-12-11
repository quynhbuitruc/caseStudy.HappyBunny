function Carrots() {
    this.x = Math.round(Math.random() * 250)
    this.y = Math.round(Math.random() * 250)
    let img = new Image()
    img.src = "carrots.png"
    this.draw = function (ctx) {
        ctx.drawImage(img, this.x, this.y)
    }
}