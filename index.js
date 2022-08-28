const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 300
canvas.height = 600

const gravity = .7

class Player{
    constructor({position, velocity, color = 'red'}){
        this.position = position
        this.velocity = velocity
        this.color = color
    }

    draw(){
        //set player
        this.velocity.y += gravity
        this.position.y = this.position.y + this.velocity.y
        ctx.fillStyle = this.color
        ctx.fillRect(125, this.position.y, 50,50)
    }

    update(){
        this.draw()
    }
}

const player = new Player({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
})
 
function animate(){
    requestAnimationFrame(animate);

    //draw background
    ctx.fillStyle = 'rgb(59, 186, 255)'
    ctx.fillRect(0,0,canvas.width, canvas.height)

    player.update()
    
    ctx.fillStyle = 'green'
    ctx.fillRect(200, -300, 75, 500)
    ctx.fillRect(200, 400, 75, 500)
}

animate()

window.addEventListener('keydown', (event) => {
    switch(event.key){
        case ' ':
            player.velocity.y = -15
            break
    }
});