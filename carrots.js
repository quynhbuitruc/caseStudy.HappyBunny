function Carrots(ctx) {
    this.x = Math.round(Math.random() * (ctx.canvas.width - 25))
    this.y = Math.round(Math.random() * (ctx.canvas.height - 25))
    
    let img = new Image()
    img.src = "carrots.png"

    this.draw = function (ctx) {
        ctx.drawImage(img, this.x, this.y)
    }
}