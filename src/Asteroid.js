import Particle from "./Particle";
import { asteroidVertices, randomNumBetween } from "./helpers";

export default class Asteroid {
  constructor(args) {
    this.position = args.position;
    this.velocity = args.velocity;
    // this.rotation = 0;
    // this.rotationSpeed = randomNumBetween(-1, 1);
    this.radius = args.size;
    this.score = ((this.radius * 2) / this.radius) * 5;
    this.create = args.create;
    this.addScore = args.addScore;
    // this.scaleValue = 1;
    //this.vertices = asteroidVertices(8, this.radius)
  }

  destroy() {
    this.delete = true;
    this.addScore(this.score);
  }

  render(state) {
    // Move
    if (typeof(this.velocity)!== "undefined") {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }

    // // Rotation
    // this.rotation += this.rotationSpeed;
    // if (this.rotation >= 360) {
    //   this.rotation -= 360;
    // }
    // if (this.rotation < 0) {
    //   this.rotation += 360;
    // }

    // var xScaleValue = 2.2

    // // Screen edges
    if (this.position.x > state.screen.width + this.radius)
      this.position.x = -this.radius;
    else if (this.position.x < -this.radius)
      this.position.x = state.screen.width + this.radius;
    if (this.position.y > state.screen.height + this.radius)
      this.position.y = -this.radius;
    else if (this.position.y < -this.radius)
      this.position.y = state.screen.height + this.radius;

    // Draw
    const context = state.context;
    context.save();
    context.translate(
      this.position.x - this.radius * 2.5,
      this.position.y - this.radius * 1.8
    );
    //context.rotate(this.rotation * Math.PI / 180);
    //context.strokeStyle = '#000';
    //context.lineWidth = 2;
    context.beginPath();
    //context.moveTo(0, -this.radius);

    var grd = context.createRadialGradient(90, 40, 50, 60, 60, 30);
    grd.addColorStop(0, "#204B73");
    grd.addColorStop(1, "#D66565");
    context.scale(this.scaleValue, this.scaleValue);
    //context.arc(100, 75, 40, 0, 2 * Math.PI);
    context.arc(100, 75, this.radius, 0, 2 * Math.PI);
    context.fillStyle = grd;
    context.fill();
    // //TENTACOLO 1
    context.rotate((26 * Math.PI) / 180);
    context.rect(75, 20, 40, 10);
    // context.fillRect(60, 20, 40, 10);
    context.arc(67, 24, 10, 0, 2 * Math.PI);
    context.fill();
    //TENTACOLO 2
    context.rotate((36 * Math.PI) / 180);
    context.rect(130, -60, 40, 10);
    context.fillRect(130, -60, 40, 10);
    context.arc(167, -55, 10, 0, 2 * Math.PI);
    context.fill();

    //TENTACOLO 3
    context.translate(50, -180);
    context.rotate((55 * Math.PI) / 180);
    //context.rect(70, 10, 40, 10);
    context.fillRect(85, 10, 40, 10);
    context.arc(85, 15, 10, 0, 2 * Math.PI);
    context.fill();

    // //TENTACOLO 4
    // context.translate(80, -110, 40, 10);
    // context.rotate(58 * Math.PI / 180);
    // context.rect(90, 10, 40, 10);
    // context.fillRect(90, 10, 40, 10);

    // //TENTACOLO 5
    // context.translate(110, -10, 40, 10);
    // context.rotate(-40* Math.PI / 180);
    // context.rect(20, 20, 40, 10);
    // context.fillStyle = "#204B73";
    // context.fillRect(20, 40, 40, 10);

    // //TENTACOLO 6
    // context.rotate(-70* Math.PI / 180);
    // context.rect(20, 20, 20, 10);
    // context.fillStyle = "#204B73";
    // context.fillRect(-90, 16, 14, 10);

    context.closePath();
    //context.stroke();
    context.restore();
  }
}
