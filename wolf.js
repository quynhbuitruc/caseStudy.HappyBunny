function Wolfs () {
    this.x = 0
    this.y = 0
    
    let img = new Image()
    img.src = "wolf.png"

    this.draw = function (ctx) {
        ctx.drawImage(img, this.x, this.y)
    }
}