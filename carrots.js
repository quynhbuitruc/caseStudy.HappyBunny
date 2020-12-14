function Carrots() {
    this.x = Math.round(Math.random() * 520)
    this.y = Math.round(Math.random() * 520)
    
    let img = new Image()
    img.src = "carrots.png"

    this.draw = function (ctx) {
        ctx.drawImage(img, this.x, this.y)
    }
}