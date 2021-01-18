function Wolfs(ctx) {
    this.x = 0
    this.y = 0
    this.moveDistance = 2
    this.area = [
        {
            x: ctx.canvas.width - 50,
            y: ctx.canvas.height - 50
        },
        {
            x: 0,
            y: 0
        },
        {
            x: ctx.canvas.width / 2,
            y: ctx.canvas.height
        }
    ]
    this.target = this.area[Math.round(Math.random() * 2)]

    let img = new Image()
    img.src = "wolf.png"

    this.draw = function (ctx) {
        ctx.drawImage(img, this.x, this.y)
    }

    this.run = function (house) {
        if (this.x !== this.target.x) {
            if (this.x < this.target.x) {
                if (this.isHittingHouse(house) == true) {
                    this.y += this.moveDistance
                } else {
                    this.x += this.moveDistance
                }
            } else {
                if (this.isHittingHouse(house) == true) {
                    this.y += this.moveDistance
                } else {
                    this.x -= this.moveDistance
                }
            }
        } else if (this.y !== this.target.y) {
            if (this.y < this.target.y) {
                if (this.isHittingHouse(house) == true) {
                    this.x += this.moveDistance
                } else {
                    this.y += this.moveDistance
                }
            } else {
                if (this.isHittingHouse(house) == true) {
                    while ((house.x - 50) < this.x && this.x < (house.x + 100)) {
                        this.x += this.moveDistance
                    }
                    
                } else {
                    this.y -= this.moveDistance
                }
            }
        }
    }

    this.isHittingHouse = function (house) {
        if ((house.x - 50) < this.x && this.x < (house.x + 100)) {
            if ((house.y - 50) < this.y && this.y < (house.y + 100)) {
                return true
            }
        }
        return false
    }

    this.setTarget = function (target) {
        this.target = target
    }
    this.leave = function (house) {
        this.target = this.area[0]
        this.run(house)

    }
}