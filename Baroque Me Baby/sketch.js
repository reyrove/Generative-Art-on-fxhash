function setup() {
  const canvasSize = min(windowWidth, windowHeight);
  createCanvas(canvasSize, canvasSize);
  angleMode(DEGREES);
  colorMode(RGB, 255, 255, 255, 1);
  noLoop();
}

function windowResized() {
  const canvasSize = min(windowWidth, windowHeight);
  resizeCanvas(canvasSize, canvasSize);
  redraw();
}

function draw() {
  background(255); 

  drawGothicFrame(width / 2, height / 2, width * 0.9);
  drawArtwork(width / 2, height / 2, width * 0.8);

  fill(0);
  noStroke();

  $fx.preview()
}

function drawGothicFrame(x, y, size) {
  push();
  translate(x, y);
  
  const frameColor1 = color(
    $fx.rand() * 105 + 150, 
    $fx.rand() * 100 + 50,  
    $fx.rand() * 100 + 50   
  );
  
  const frameColor2 = color(
    $fx.rand() * 100 + 50,  
    $fx.rand() * 105 + 150, 
    $fx.rand() * 100 + 50   
  );
  
  const frameColor3 = color(
    $fx.rand() * 100 + 50,  
    $fx.rand() * 100 + 50,  
    $fx.rand() * 105 + 150  
  );
  
  const colorScheme = Math.floor($fx.rand() * 3);
  let mainColor, accentColor1, accentColor2;

  switch (colorScheme) {
    case 0:
      mainColor = frameColor1;
      accentColor1 = frameColor2;
      accentColor2 = frameColor3;
      break;
    case 1:
      mainColor = frameColor2;
      accentColor1 = frameColor3;
      accentColor2 = frameColor1;
      break;
    default:
      mainColor = frameColor3;
      accentColor1 = frameColor1;
      accentColor2 = frameColor2;
  }

  const frameWidth = max(size * 0.08, min(size * 0.15, 20)); 
  const innerSize = size - frameWidth * 2;

  fill(mainColor);
  stroke(0);
  strokeWeight(max(1, size * 0.002)); 
  rectMode(CENTER);
  rect(0, 0, size, size, size * 0.02);

  fill(255);
  noStroke();
  rect(0, 0, innerSize, innerSize);

  const decorationCount = Math.floor($fx.rand() * 8) + 8; 
  const decorationSize = max(frameWidth * 0.8, min(frameWidth * 1.2, 15)); 

  for (let i = 0; i < decorationCount; i++) {
    const angle = 360 * i / decorationCount;
    const distance = size / 2 - frameWidth / 2;

    push();
    translate(cos(angle) * distance, sin(angle) * distance);
    rotate(angle + 90);

    if (i % 2 == 0) {
      fill($fx.rand() > 0.3 ? accentColor1 : accentColor2);
      stroke(0);
      strokeWeight(max(0.5, size * 0.001)); 
      beginShape();
      vertex(0, -decorationSize / 2);
      vertex(decorationSize / 3, 0);
      vertex(0, decorationSize / 2);
      vertex(-decorationSize / 3, 0);
      endShape(CLOSE);

      fill($fx.rand() > 0.3 ? accentColor2 : accentColor1);
      triangle(
        0, -decorationSize / 4,
        decorationSize / 6, 0,
        -decorationSize / 6, 0
      );
    } else {
      fill($fx.rand() > 0.3 ? accentColor2 : accentColor1);
      stroke(0);
      strokeWeight(max(0.5, size * 0.001)); 
      beginShape();
      vertex(-decorationSize / 2, 0);
      vertex(0, -decorationSize);
      vertex(decorationSize / 2, 0);
      endShape(CLOSE);

      noFill();
      stroke(0);
      strokeWeight(max(0.3, size * 0.0005)); 
      arc(0, 0, decorationSize, decorationSize * 2, -180, 0);
    }
    pop();
  }

  const cornerSize = max(frameWidth * 1.2, min(frameWidth * 1.5, 25)); 
  for (let i = 0; i < 4; i++) {
    push();
    rotate(90 * i + 45);
    translate(size / 2 - frameWidth / 2, 0);

    fill($fx.rand() > 0.5 ? accentColor1 : accentColor2);
    stroke(0);
    strokeWeight(max(1, size * 0.002)); 
    ellipse(0, 0, cornerSize, cornerSize);

    const petals = Math.floor($fx.rand() * 6) + 6;
    for (let j = 0; j < petals; j++) {
      rotate(360 / petals);
      fill($fx.rand() > 0.5 ? accentColor2 : mainColor);
      beginShape();
      vertex(0, 0);
      vertex(cornerSize / 3, -cornerSize / 4);
      vertex(cornerSize / 2, 0);
      vertex(cornerSize / 3, cornerSize / 4);
      endShape(CLOSE);
    }

    fill(0);
    ellipse(0, 0, cornerSize / 4, cornerSize / 4);

    pop();
  }

  pop();
}

function drawArtwork(x, y, size) {
  push();
  translate(x, y);

  noFill();
  stroke(0);
  strokeWeight(max(1, size * 0.002)); 

  const layers = Math.floor($fx.rand() * 10) + 5; 
  const rotation = $fx.rand() * 360;
  const artworkType = $fx.rand();

  for (let i = 0; i < layers; i++) {
    const layerSize = size * map(i, 0, layers - 1, 0.9, 0.1);

    push();
    rotate(rotation + ($fx.rand() * 10 - 5) * (i % 2 ? -1 : 1));

    if (artworkType < 0.4) {
      const detail = Math.floor($fx.rand() * 9) + 3; 
      for (let j = 0; j < detail; j++) {
        const r = layerSize * (1 - j / detail);
        ellipse(0, 0, r, r);
      }
    } else if (artworkType < 0.7) {
      const lines = Math.floor($fx.rand() * 30) + 6; 
      for (let j = 0; j < lines; j++) {
        const angle = 360 * j / lines;
        const innerR = layerSize * ($fx.rand() * 0.4 + 0.1); 
        line(
          cos(angle) * innerR,
          sin(angle) * innerR,
          cos(angle) * layerSize / 2,
          sin(angle) * layerSize / 2
        );
      }
    } else if (artworkType < 0.85) {
      const sides = Math.floor($fx.rand() * 6) + 3; 
      beginShape();
      for (let j = 0; j < sides; j++) {
        const angle = 360 * j / sides;
        vertex(cos(angle) * layerSize / 2, sin(angle) * layerSize / 2);
      }
      endShape(CLOSE);
    } else {
      beginShape();
      const points = Math.floor($fx.rand() * 10) + 5; 
      for (let j = 0; j <= points; j++) {
        const angle = 360 * j / points;
        const r = layerSize / 2 * ($fx.rand() * 0.6 + 0.7); 
        curveVertex(cos(angle) * r, sin(angle) * r);
      }
      endShape(CLOSE);
    }

    pop();

    if ($fx.rand() > 0.6) {
      const elements = Math.floor($fx.rand() * 9) + 3; 
      for (let j = 0; j < elements; j++) {
        const angle = $fx.rand() * 360;
        const dist = layerSize * ($fx.rand() * 0.25 + 0.2);
        const eSize = layerSize * ($fx.rand() * 0.07 + 0.03);

        push();
        translate(cos(angle) * dist, sin(angle) * dist);
        rotate($fx.rand() * 360);
        noFill();
        stroke(0);
        strokeWeight(max(0.5, size * 0.001)); 
        if ($fx.rand() > 0.5) {
          ellipse(0, 0, eSize, eSize);
        } else {
          rectMode(CENTER);
          rect(0, 0, eSize, eSize);
        }
        pop();
      }
    }
  }

  noFill();
  stroke(0);
  strokeWeight(max(1, size * 0.003));
  const centerSize = size * 0.1;
  ellipse(0, 0, centerSize, centerSize);

  pop();
} 