function lerp(p1, p2, t) {
  return {
    x: p1.x + (p2.x - p1.x) * t, 
    y: p1.y + (p2.y - p1.y) * t}
}

// render image to quad using current settings
function skewImage(c, img, corners) {
  canvas = document.createElement("CANVAS")
  canvas.width = c.width
  canvas.height = c.height
  ctx = canvas.getContext("2d")

  corners = [
    {x: corners.topLeft[0], y: corners.topLeft[1]},
    {x: corners.topRight[0], y: corners.topRight[1]},
    {x: corners.bottomRight[0], y: corners.bottomRight[1]},
    {x: corners.bottomLeft[0], y: corners.bottomLeft[1]}
  ]

  const step = 4
  
  var p1, p2, p3, p4, y1c, y2c, y1n, y2n,
      w = img.width - 1,         // -1 to give room for the "next" points
      h = img.height - 1;

  for(y = 0; y < h; y += step) {
    for(x = 0; x < w; x += step) {
      y1c = lerp(corners[0], corners[3],  y / h);
      y2c = lerp(corners[1], corners[2],  y / h);
      y1n = lerp(corners[0], corners[3], (y + step) / h);
      y2n = lerp(corners[1], corners[2], (y + step) / h);

      // corners of the new sub-divided cell p1 (ul) -> p2 (ur) -> p3 (br) -> p4 (bl)
      p1 = lerp(y1c, y2c,  x / w);
      p2 = lerp(y1c, y2c, (x + step) / w);
      p3 = lerp(y1n, y2n, (x + step) / w);
      p4 = lerp(y1n, y2n,  x / w);

      ctx.drawImage(img, x, y, step, step,  p1.x, p1.y, // get most coverage for w/h:
          Math.ceil(Math.max(step, Math.abs(p2.x - p1.x), Math.abs(p4.x - p3.x))) + 1,
          Math.ceil(Math.max(step, Math.abs(p1.y - p4.y), Math.abs(p2.y - p3.y))) + 1)
    }
  }
  return canvas
}

function loadImage(url) {
  return new Promise(r => {
    const img = new Image()
    img.src = url
    img.onload = () => r(img)
  })
}