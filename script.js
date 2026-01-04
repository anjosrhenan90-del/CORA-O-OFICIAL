const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 300;

let t = 0;

function drawHeart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();

  for (let i = 0; i < t; i += 0.02) {
    const x = 16 * Math.pow(Math.sin(i), 3);
    const y = -(13 * Math.cos(i)
      - 5 * Math.cos(2 * i)
      - 2 * Math.cos(3 * i)
      - Math.cos(4 * i));

    ctx.lineTo(
      canvas.width / 2 + x * 8,
      canvas.height / 2 + y * 8
    );
  }

  ctx.strokeStyle = "#e60026";
  ctx.lineWidth = 4;
  ctx.shadowColor = "#e60026";
  ctx.shadowBlur = 10;
  ctx.stroke();

  t += 0.05;

  // quando terminar o coração, recomeça
  if (t > Math.PI * 2) {
    t = 0;
  }

  requestAnimationFrame(drawHeart);
}

drawHeart();
