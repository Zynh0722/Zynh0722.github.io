import P5 from "p5";

class JoystickVisual {
  private p5: P5;
  pos: P5.Vector;
  size: number;
  value: P5.Vector;

  constructor(p5: P5, value?: P5.Vector) {
    this.pos = p5.createVector(300, 100);
    this.size = 100;
    this.value = value || p5.createVector(0, 0);

    this.p5 = p5;
  }

  draw() {
    const p5 = this.p5;
    p5.push();
    p5.translate(this.pos.x, this.pos.y);

    p5.strokeWeight(this.size * 0.075);
    p5.fill(255);
    p5.circle(0, 0, this.size);

    p5.strokeWeight(0);

    const scaler = this.size * 0.25;
    const scaledX = this.value.x * scaler;
    const scaledY = this.value.y * scaler;
    p5.translate(scaledX, scaledY);

    const innerSize = this.size * 0.9;

    p5.fill(75);
    p5.circle(0, 0, innerSize);

    p5.fill(0);
    p5.circle(0, 0, innerSize * 0.8);

    p5.pop();
  }
}

class Sketch extends HTMLElement {
  constructor() {
    super();

    new P5((p5: P5) => {
      const visual = new JoystickVisual(p5, p5.createVector(1, 0));

      p5.setup = () => {
        const canvas = p5.createCanvas(600, 200);
        p5.angleMode(p5.DEGREES);
      };

      p5.draw = () => {
        p5.background("white");

        visual.draw();

        visual.value.rotate(1);
      };
    }, this);
  }
}

customElements.define("p5-sketch", Sketch);
