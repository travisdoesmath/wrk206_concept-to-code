canvas = document.querySelector('#screen');
context = canvas.getContext('2d');

class Bee {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
        this.flapUp = true;
        this.tick = 0;
        this.history = [...Array(10)].map(x => {return {
            x: this.x,
            y: this.y,
            dx: this.dx,
            dy: this.dy
        }});
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;
    }

    accelerate(ddx, ddy) {
        this.dx += ddx;
        this.dy += ddy;
        this.history.push({
            x: this.x,
            y: this.y,
            dx: this.dx,
            dy: this.dy
        })
        if (this.history.length > 10) {
            this.history = this.history.slice(this.history.length - 10);
        }
    }

    draw() {
        this.tick++;
        if (this.tick == 5) {
            this.tick = 0;
            this.flapUp = !this.flapUp;
        }
        // far wing
        context.fillStyle = '#8FA2B2';
        context.beginPath();
        if (this.flapUp) {
            context.moveTo(this.x, this.y - 85);
            context.bezierCurveTo(this.x+5, this.y-130, this.x+10, this.y-132, this.x-5, this.y - 135);
            context.bezierCurveTo(this.x-20, this.y-138, this.x-70, this.y-120, this.x-20, this.y-85);
            context.fill();    
        } else {
            context.moveTo(this.x, this.y - 85);
            context.bezierCurveTo(this.x+5, this.y-40, this.x+10, this.y-38, this.x-5, this.y - 35);
            context.bezierCurveTo(this.x-20, this.y-32, this.x-70, this.y-50, this.x-20, this.y-85);
            context.fill();    
        }

        // body
        context.fillStyle = '#FFCD05';
        context.beginPath();
        context.arc(this.x, this.y, 100, 0, Math.PI * 2, true);
        context.arc(this.history[7].x-100, this.history[7].y+100, 71, 0, Math.PI * 2, true);
        context.fill();

        // stripes
        context.fillStyle = '#4C3F17';
        context.beginPath();
        context.moveTo(this.history[4].x - 150, this.history[4].y + 40);
        context.lineTo(this.history[4].x - 125, this.history[4].y + 25);
        context.lineTo(this.history[4].x - 35, this.history[4].y + 150);
        context.lineTo(this.history[4].x - 53, this.history[4].y + 165);
        context.fill();

        context.beginPath();
        context.moveTo(this.history[6].x - 90, this.history[6].y - 80);
        context.lineTo(this.history[6].x - 50, this.history[6].y - 100);
        context.lineTo(this.history[6].x + 35, this.history[6].y + 100);
        context.lineTo(this.history[6].x + 10, this.history[6].y + 110);
        context.fill();

        context.beginPath();
        context.moveTo(this.history[8].x + 30, this.history[8].y - 110);
        context.lineTo(this.history[8].x + 50, this.history[8].y - 100);
        context.lineTo(this.history[8].x + 95, this.history[8].y + 50);
        context.lineTo(this.history[8].x + 75, this.history[8].y + 80);
        context.fill();

        // head
        context.fillStyle = '#808080';
        context.beginPath();
        context.arc(this.history[9].x+110, this.history[9].y-30, 22, 0, Math.PI * 2, true);
        context.fill();

        // eye
        context.fillStyle = '#000000';
        context.beginPath();
        context.arc(this.history[9].x+122, this.history[9].y-42, 11, 0, Math.PI * 2, true);
        context.fill();

        context.fillStyle = '#FFFFFF';
        context.beginPath();
        context.arc(this.history[9].x+125, this.history[9].y-45, 4, 0, Math.PI * 2, true);
        context.fill();

        // close wing
        context.fillStyle = '#D0E9F9';
        context.beginPath();
        if (this.flapUp) {
            context.moveTo(this.x+15, this.y - 85);
            context.bezierCurveTo(this.x+20, this.y-130, this.x+25, this.y-132, this.x+10, this.y - 135);
            context.bezierCurveTo(this.x-5, this.y-138, this.x-55, this.y-120, this.x-5, this.y-85);
            context.fill();    
        } else {
            context.moveTo(this.x+15, this.y - 85);
            context.bezierCurveTo(this.x+20, this.y-40, this.x+25, this.y-38, this.x+10, this.y - 35);
            context.bezierCurveTo(this.x-5, this.y-32, this.x-55, this.y-50, this.x-5, this.y-85);
            context.fill();    
        }

    }
}

let umbly = new Bee(300, 200);
let tick = 0;

function draw() {
    tick++;
    let direction = .75;

    if (tick >= 10  && tick < 28) {
        direction = -.75;
    } else if (tick == 36) {
        tick = 0;
    }
    context.fillStyle = '#84D3EA';
    context.fillRect(0, 0, canvas.width, canvas.height);

    umbly.accelerate(0, direction)
    umbly.move();
    umbly.draw();
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);