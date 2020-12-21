function Wolfs() {
    this.x = 0
    this.y = 0
    this.area = [
        {
            x: 500,
            y: 0
        },
        {
            x: 0,
            y: 500
        },
        {
            x: 500,
            y: 500
        }
    ]
    this.target = this.area[Math.round(Math.random() * 2)] //set random

    let img = new Image()
    img.src = "wolf.png"

    this.draw = function (ctx) {
        ctx.drawImage(img, this.x, this.y)
    }

    this.run = function () {
        if (this.x !== this.target.x) {
            if (this.x < this.target.x) {
                this.x += 2
            } else {
                this.x -= 2
            }
        } else if (this.y !== this.target.y) {
            if (this.y < this.target.y) {
                this.y += 2
            } else {
                this.y -= 2
            }
        }
    }

    this.setTarget = function (target) {
        this.target = target
    }
    this.leave = function (target) {
        this.target = this.area[0]
        this.run()

    }
}