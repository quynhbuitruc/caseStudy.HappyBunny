function Rabits() {
    this.x = 250
    this.y = 250
    this.draw = function () {
        let content = "<img src='bunny.png' "
        let size = "style='width:50px; height:50px;"
        let pos = `position: relative; top:${this.x}px; left:${this.y}px'>`
        document.getElementById("game").innerHTML += content + size + pos
    }
    }
}