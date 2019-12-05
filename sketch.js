let r = 10
let a = 0
let c = 20
let angle = 2
let art
let m = map(value, 0, 100, 0, width);

function setup() {
  createCanvas(900, 900, WEBGL);
  textSize(14);
  text('Scroll to zoom and use mouse to rotate', 450, 450);
  fill(255);
  art = createGraphics(400, 400)
  
}

function draw() {
  background(0);
  
  orbitControl();
  translate(500, 200)
  let x = r + c * cos(a)

  let y = r + c * sin(a)

  art.fill(r, a, 225)
  art.ellipse(x + 200, y + 200, 10, 10)

  c += 0.5
  a += 0.8
  pop()

  push()
  texture(art)
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  box(250)

  angle += 0.0003
  pop()

  let radius = width * 1.5;

  // //drag to move the world.
  orbitControl();

  normalMaterial();
  translate(355, 200);
  for (let i = 0; i <= 12; i++) {
    for (let j = 0; j <= 12; j++) {
      push();
      let a = (j / 12) * PI;
      let b = (i / 12) * PI;
      translate(
        sin(2 * a) * radius * sin(b),
        (cos(b) * radius) / 2,
        cos(2 * a) * radius * sin(b)
      );
      if (j % 2 === 0) {
      
      } else {
        texture(art)
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        box(200, 200, 200);
      }
      pop();
    }
  }
}

