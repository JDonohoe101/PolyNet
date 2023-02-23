function setup() {
  createCanvas(500, 300);
  boxPop = 15;
  boxes = [];
  for (i = 0; i < boxPop; i++) {
    boxes[i] = new Box(width, height);
  }
}

function draw() {
  background(255);
  for (i = 0; i < boxPop; i++) {
    boxes[i].update();
    boxes[i].show();
  }

  for (i = 0; i < boxPop; i++) {
    for (j = 0; j < boxPop; j++) {
      for (k = 0; k < boxPop; k++) {
        if (
          i != j &&
          i != k &&
          k != j &&
          boxes[i].intersects(boxes[j]) &&
          boxes[i].intersects(boxes[k]) &&
          boxes[k].intersects(boxes[j])
        ) {
          triangleCol = boxes[k].color;
          triangleCol.setAlpha(40);

          fill(triangleCol);
          triangle(
            boxes[i].xPos + boxes[i].boxWidth / 2,
            boxes[i].yPos + boxes[i].boxHeight / 2,
            boxes[j].xPos + boxes[j].boxWidth / 2,
            boxes[j].yPos + boxes[j].boxHeight / 2,
            boxes[k].xPos + boxes[k].boxWidth / 2,
            boxes[k].yPos + boxes[k].boxHeight / 2
          );
        }
      }
    }
  }
}
