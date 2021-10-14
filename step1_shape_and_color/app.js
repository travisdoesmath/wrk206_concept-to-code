canvas = document.querySelector('#screen');
context = canvas.getContext('2d');

class Bee {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
        this.tick = 0;
    }

    draw() {

        // far wing
        context.fillStyle = '#8FA2B2';
        context.beginPath();
        context.moveTo(this.x, this.y - 85);
        context.bezierCurveTo(this.x+5, this.y-130, this.x+10, this.y-132, this.x-5, this.y - 135);
        context.bezierCurveTo(this.x-20, this.y-138, this.x-70, this.y-120, this.x-20, this.y-85);
        context.fill();    

        // body
        context.fillStyle = '#FFCD05';
        context.beginPath();
        context.arc(this.x, this.y, 100, 0, Math.PI * 2, true);
        context.arc(this.x-100, this.y+100, 71, 0, Math.PI * 2, true);
        context.fill();

        // stripes
        context.fillStyle = '#4C3F17';
        context.beginPath();
        context.moveTo(this.x - 150, this.y + 40);
        context.lineTo(this.x - 125, this.y + 25);
        context.lineTo(this.x - 35, this.y + 150);
        context.lineTo(this.x - 53, this.y + 165);
        context.fill();

        context.beginPath();
        context.moveTo(this.x - 90, this.y - 80);
        context.lineTo(this.x - 50, this.y - 100);
        context.lineTo(this.x + 35, this.y + 100);
        context.lineTo(this.x + 10, this.y + 110);
        context.fill();

        context.beginPath();
        context.moveTo(this.x + 30, this.y - 110);
        context.lineTo(this.x + 50, this.y - 100);
        context.lineTo(this.x + 95, this.y + 50);
        context.lineTo(this.x + 75, this.y + 80);
        context.fill();

        // head
        context.fillStyle = '#808080';
        context.beginPath();
        context.arc(this.x+110, this.y-30, 22, 0, Math.PI * 2, true);
        context.fill();

        // eye
        context.fillStyle = '#000000';
        context.beginPath();
        context.arc(this.x+122, this.y-42, 11, 0, Math.PI * 2, true);
        context.fill();

        context.fillStyle = '#FFFFFF';
        context.beginPath();
        context.arc(this.x+125, this.y-45, 4, 0, Math.PI * 2, true);
        context.fill();

        // close wing
        context.fillStyle = '#D0E9F9';
        context.beginPath();
        context.moveTo(this.x+15, this.y - 85);
        context.bezierCurveTo(this.x+20, this.y-130, this.x+25, this.y-132, this.x+10, this.y - 135);
        context.bezierCurveTo(this.x-5, this.y-138, this.x-55, this.y-120, this.x-5, this.y-85);
        context.fill();    

    }
}

let umbly = new Bee(300, 200);

function draw() {

    context.fillStyle = '#84D3EA';
    context.fillRect(0, 0, canvas.width, canvas.height);

    umbly.draw();

    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);