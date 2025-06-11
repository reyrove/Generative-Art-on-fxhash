<<<<<<< HEAD
let shapePalette;
let baseHue;

function setup() {
  const size = Math.min(window.innerWidth, window.innerHeight);
  createCanvas(size, size);
  colorMode(HSL, 360, 100, 100, 1);
  angleMode(DEGREES);
  noLoop();

  function getDarkColorPalette(count = 100) {
    let palette = [];
    for (let i = 0; i < count; i++) {
      const hue = Math.floor($fx.rand() * 360);
      const saturation = 30 + $fx.rand() * 40;
      const lightness = 5 + $fx.rand() * 15;
      palette.push([hue, saturation, lightness]);
    }
    return palette;
  }

  const darkPalette = getDarkColorPalette();
  const [h, s, l] = darkPalette[Math.floor($fx.rand() * darkPalette.length)];
  background(h, s, l);

  const centerX = width / 2;
  const centerY = height / 2;

  shapePalette = [
    drawLineShape,
    drawArcShape,
    drawTriangleShape,
    drawRectShape,
    drawBezierShape
  ];

  baseHue = $fx.rand() * 360;

  noFill();
  strokeWeight(width * 0.00125); 

  const layers = Math.floor($fx.rand() * 4) + 5;       
  const segments = Math.floor($fx.rand() * 30) + 20;   

  for (let layer = 0; layer < layers; layer++) {
    const radius = (layer + 1) * (width / (2 * layers + 2)); 

    for (let i = 0; i < segments; i++) {
      const angle = i * (360 / segments);
      const shapeFn = shapePalette[Math.floor($fx.rand() * shapePalette.length)];

      const hueShift = (baseHue + angle / 2 + layer * 10) % 360;
      const sat = 60 + $fx.rand() * 20;
      const light = 50 + $fx.rand() * 30;

      stroke(hueShift, sat, light, 0.8);

      push();
      translate(centerX, centerY);
      rotate(angle);
      shapeFn(radius);
      pop();
    }
  }

  $fx.preview();
}

function drawLineShape(r) {
  const len = r * 0.1;
  line(r - len, 0, r + len, 0);
}

function drawArcShape(r) {
  const angleSpan = 10 + $fx.rand() * 40;
  arc(0, 0, r * 2, r * 2, 0, angleSpan);
}

function drawTriangleShape(r) {
  const offset = $fx.rand() * (width * 0.015);
  triangle(r, 0, r + offset, offset, r - offset, -offset);
}

function drawRectShape(r) {
  const w = width * (0.01 + $fx.rand() * 0.02); 
  const h = height * (0.005 + $fx.rand() * 0.01);
  rectMode(CENTER);
  rect(r, 0, w, h);
}

function drawBezierShape(r) {
  const o = $fx.rand() * (width * 0.02);
  bezier(r, 0, r + o, o, r - o, -o, r * 1.1, 0);
}

function draw() {
=======
let shapePalette;
let baseHue;

function setup() {
  const size = Math.min(window.innerWidth, window.innerHeight);
  createCanvas(size, size);
  colorMode(HSL, 360, 100, 100, 1);
  angleMode(DEGREES);
  noLoop();

  function getDarkColorPalette(count = 100) {
    let palette = [];
    for (let i = 0; i < count; i++) {
      const hue = Math.floor($fx.rand() * 360);
      const saturation = 30 + $fx.rand() * 40;
      const lightness = 5 + $fx.rand() * 15;
      palette.push([hue, saturation, lightness]);
    }
    return palette;
  }

  const darkPalette = getDarkColorPalette();
  const [h, s, l] = darkPalette[Math.floor($fx.rand() * darkPalette.length)];
  background(h, s, l);

  const centerX = width / 2;
  const centerY = height / 2;

  shapePalette = [
    drawLineShape,
    drawArcShape,
    drawTriangleShape,
    drawRectShape,
    drawBezierShape
  ];

  baseHue = $fx.rand() * 360;

  noFill();
  strokeWeight(width * 0.00125); 

  const layers = Math.floor($fx.rand() * 4) + 5;       
  const segments = Math.floor($fx.rand() * 30) + 20;   

  for (let layer = 0; layer < layers; layer++) {
    const radius = (layer + 1) * (width / (2 * layers + 2)); 

    for (let i = 0; i < segments; i++) {
      const angle = i * (360 / segments);
      const shapeFn = shapePalette[Math.floor($fx.rand() * shapePalette.length)];

      const hueShift = (baseHue + angle / 2 + layer * 10) % 360;
      const sat = 60 + $fx.rand() * 20;
      const light = 50 + $fx.rand() * 30;

      stroke(hueShift, sat, light, 0.8);

      push();
      translate(centerX, centerY);
      rotate(angle);
      shapeFn(radius);
      pop();
    }
  }

  $fx.preview();
}

function drawLineShape(r) {
  const len = r * 0.1;
  line(r - len, 0, r + len, 0);
}

function drawArcShape(r) {
  const angleSpan = 10 + $fx.rand() * 40;
  arc(0, 0, r * 2, r * 2, 0, angleSpan);
}

function drawTriangleShape(r) {
  const offset = $fx.rand() * (width * 0.015);
  triangle(r, 0, r + offset, offset, r - offset, -offset);
}

function drawRectShape(r) {
  const w = width * (0.01 + $fx.rand() * 0.02); 
  const h = height * (0.005 + $fx.rand() * 0.01);
  rectMode(CENTER);
  rect(r, 0, w, h);
}

function drawBezierShape(r) {
  const o = $fx.rand() * (width * 0.02);
  bezier(r, 0, r + o, o, r - o, -o, r * 1.1, 0);
}

function draw() {
>>>>>>> fe4592c (new prohect added)
}