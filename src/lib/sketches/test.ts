import P5 from "p5";

const sketch = (p5: P5) => {
	p5.setup = () => {
		// Creating and positioning the canvas
		const canvas = p5.createCanvas(200, 200);
		canvas.parent("test-sketch");

		// Configuring the canvas
		p5.background("white");
	};

	// The sketch draw method
	p5.draw = () => {
        p5.push();
        p5.translate(p5.width / 2, p5.height / 2);
        p5.circle(0, 0, 100);        
	};
};

new P5(sketch);
