let img = [];
const gridCols = 2;
const gridRows = 2;
const numImages = 39;

const e = Math.min(innerWidth, innerHeight);
const canvas = {
  w: e,
  h: e
};

function preload() {
  for (let i = 0; i < numImages; i++) {
    img[i] = loadImage(`images/image${i + 1}-min.jpg`);
  }
}

function setup() {
  createCanvas(canvas.w, canvas.h);

  noLoop();
  pixelDensity(1);
  drawGrid();
}

function drawGrid() {
  let i = 0;
  for (let y = 0; y < gridRows; y++) {
    for (let x = 0; x < gridCols; x++) {
      const idx = Math.floor($fx.rand() * numImages);
      image(
        img[idx],
        x * (canvas.w / gridCols),
        y * (canvas.h / gridRows),
        canvas.w / gridCols,
        canvas.h / gridRows
      );
      i++;
    }
  }
  $fx.preview();
}

