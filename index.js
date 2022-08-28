const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 300
canvas.height = 600

const gravity = .7
const pipeSpeed = 2

class Player{
    constructor({position, velocity, color}){
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

class Pipes{
    constructor({posPipe1, posPipe2, velocity, sizePipe1, sizePipe2}){
        this.posPipe1 = posPipe1
        this.posPipe2 = posPipe2
        this.velocity = velocity
        this.sizePipe1 = sizePipe1
        this.sizePipe2 = sizePipe2
    }

    draw(){
        this.posPipe1.x -= pipeSpeed
        this.posPipe2.x -= pipeSpeed
        ctx.fillStyle = 'green'
        ctx.fillRect(this.posPipe1.x, this.posPipe1.y, this.sizePipe1.w,this.sizePipe1.h)
        ctx.fillRect(this.posPipe2.x, this.posPipe2.y, this.sizePipe2.w,this.sizePipe2.h)
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
    },
    color: 'red'
})

const pipes = new Pipes({
    posPipe1:{
        x:310,
        y:-100
    },
    posPipe2:{
        x:310,
        y:300
    },
    velocity:{
        x:0,
        y:0
    },
    sizePipe1:{
        w:75,
        h:200
    },
    sizePipe2:{
        w:75,
        h:300
    }
})

const pipes2 = new Pipes({
    posPipe1:{
        x:610,
        y:0
    },
    posPipe2:{
        x:610,
        y:400
    },
    velocity:{
        x:0,
        y:0
    },
    sizePipe1:{
        w:75,
        h:200
    },
    sizePipe2:{
        w:75,
        h:200
    }
})
 
function pipeRandomizer(currentPipe){
    if(currentPipe.posPipe1.x < -75){
        currentPipe.posPipe1.x = 610
        currentPipe.posPipe2.x = 610
        currentY1 = (Math.random() * 400)
        currentPipe.posPipe1.y = 0
        currentPipe.sizePipe1.h = currentY1
        currentPipe.posPipe2.y = currentY1 + 200
        currentPipe.sizePipe2.h = 600 - (currentY1 + 200)
    }
}

function animate(){
    requestAnimationFrame(animate);

    //draw background
    ctx.fillStyle = 'rgb(59, 186, 255)'
    ctx.fillRect(0,0,canvas.width, canvas.height)

    player.update()

    pipeRandomizer(pipes);
    pipeRandomizer(pipes2)
    pipes.update()
    pipes2.update()
}

animate()

window.addEventListener('keydown', (event) => {
    switch(event.key){
        case ' ':
            player.velocity.y = -10
            break
    }
});