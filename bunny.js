function Rabits(size) {
    this.x = 250
    this.y = 250
    this.size = size // ?width and height of image
    this.jumpRight = function () {
        if (this.x < 501) {
            this.x += 50
        }
    }
    this.jumpLeft = function () {
        if (this.x > 51) {
            this.x -= 50
        }
    }
    this.jumpUp = function () {
        if (this.y > 51) {
            this.y -= 50
        }
    }
    this.jumpDown = function () {
        if (this.y < 501) {
            this.y += 50
        }
    }

    this.draw = function (ctx) {
        let image = new Image()
        image.src = "bunny.png"
        ctx.drawImage(image, 0, 0)
    }
}